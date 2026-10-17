import { NextResponse } from 'next/server';
import { getPresignedR2UploadUrl } from '../../../lib/r2Client.js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fileName = 'file', fileType = 'application/octet-stream', folder = 'media' } = body;

    const cleanFileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const key = `${folder}/${timestamp}_${randomSuffix}_${cleanFileName}`;

    const presigned = await getPresignedR2UploadUrl({
      key,
      contentType: fileType,
      expiresIn: 3600, // 1 hour
    });

    return NextResponse.json({
      success: true,
      uploadUrl: presigned.uploadUrl,
      publicUrl: presigned.publicUrl,
      key: presigned.key,
      keyWithoutFolder: cleanFileName,
    });
  } catch (error) {
    console.error('Cloudflare R2 Presign Route Error:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to generate pre-signed URL for Cloudflare R2',
      },
      { status: 500 }
    );
  }
}
