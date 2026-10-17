import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getInternalBackendUrl() {
  const url = (
    process.env.INTERNAL_BACKEND_URL ||
    process.env.BACKEND_INTERNAL_URL ||
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    'http://localhost:3002'
  ).trim();

  return url.replace(/\/+$/, '');
}

// Hop-by-hop and encoding headers that must NOT be forwarded from decompressed responses
const STRIPPED_RESPONSE_HEADERS = new Set([
  'content-encoding',
  'content-length',
  'transfer-encoding',
  'connection',
  'keep-alive',
]);

async function handleProxy(request, context) {
  try {
    const backendBase = getInternalBackendUrl();
    const { params } = context || {};
    const resolvedParams = params ? await params : {};
    const pathSegments = resolvedParams.path || [];
    const subPath = pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '';

    const search = request.nextUrl.search || '';
    const targetUrl = `${backendBase}${subPath}${search}`;

    // Clone and sanitize headers to send to the backend
    const forwardHeaders = new Headers();
    request.headers.forEach((val, key) => {
      const lower = key.toLowerCase();
      // Exclude host and connection headers so backend sees its own host
      if (!['host', 'connection', 'content-length'].includes(lower)) {
        forwardHeaders.set(key, val);
      }
    });

    const fetchOptions = {
      method: request.method,
      headers: forwardHeaders,
      redirect: 'manual',
      cache: 'no-store',
    };

    // Forward body for non-GET/HEAD methods
    if (!['GET', 'HEAD'].includes(request.method.toUpperCase())) {
      try {
        const bodyBuffer = await request.arrayBuffer();
        if (bodyBuffer && bodyBuffer.byteLength > 0) {
          fetchOptions.body = bodyBuffer;
        }
      } catch {
        // No body
      }
    }

    let backendResponse;
    try {
      backendResponse = await fetch(targetUrl, fetchOptions);
    } catch (networkErr) {
      // Backend is offline / net::ERR_CONNECTION_REFUSED caught safely on server!
      return NextResponse.json(
        {
          message: 'Backend service is currently unavailable. Please try again later.',
          status: 503,
        },
        { status: 503 }
      );
    }

    // Forward response headers while stripping encoding headers already handled by fetch
    const responseHeaders = new Headers();
    backendResponse.headers.forEach((val, key) => {
      const lowerKey = key.toLowerCase();
      if (!STRIPPED_RESPONSE_HEADERS.has(lowerKey)) {
        responseHeaders.set(key, val);
      }
    });

    // Handle Set-Cookie headers properly (getSetCookie if available)
    if (typeof backendResponse.headers.getSetCookie === 'function') {
      const setCookies = backendResponse.headers.getSetCookie();
      if (Array.isArray(setCookies) && setCookies.length > 0) {
        responseHeaders.delete('set-cookie');
        setCookies.forEach((cookieStr) => {
          responseHeaders.append('set-cookie', cookieStr);
        });
      }
    }

    const responseBody = await backendResponse.arrayBuffer();

    return new NextResponse(responseBody, {
      status: backendResponse.status,
      statusText: backendResponse.statusText,
      headers: responseHeaders,
    });
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Internal proxy error',
        status: 500,
      },
      { status: 500 }
    );
  }
}

export const GET = handleProxy;
export const POST = handleProxy;
export const PUT = handleProxy;
export const DELETE = handleProxy;
export const PATCH = handleProxy;
export const HEAD = handleProxy;
export const OPTIONS = handleProxy;
