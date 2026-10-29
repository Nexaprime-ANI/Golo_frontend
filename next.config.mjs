import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */

const APP_BASE_PATH =
  process.env.NEXT_PUBLIC_APP_BASE_PATH?.trim() || '';

const FRONTEND_ROOT = fileURLToPath(new URL('.', import.meta.url));

const nextConfig = {
  output: 'standalone',
  basePath: APP_BASE_PATH || undefined,
  reactCompiler: true,
  distDir: '.next',
  turbopack: {
    root: FRONTEND_ROOT,
  },
  images: {
    loader: 'custom',
    loaderFile: './app/lib/cloudflareLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
      {
        protocol: 'https',
        hostname: '**.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    const backendUrl = (
      process.env.INTERNAL_BACKEND_URL ||
      process.env.BACKEND_INTERNAL_URL ||
      process.env.BACKEND_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      'http://localhost:3002'
    ).trim().replace(/\/+$/, '');

    return [
      {
        // Legacy Cloudinary proxy rewrite during migration
        source: '/media/:path*',
        destination: 'https://res.cloudinary.com/:path*',
      },
      {
        source: '/socket.io/:path*',
        destination: `${backendUrl}/socket.io/:path*`,
      },
      {
        source: '/chat/:path*',
        destination: `${backendUrl}/chat/:path*`,
      },
      {
        source: '/calls/:path*',
        destination: `${backendUrl}/calls/:path*`,
      },
    ];
  },
};

export default nextConfig;
