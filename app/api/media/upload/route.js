import { NextResponse } from 'next/server';
import { mediateAndUpload } from '../../../lib/mediaMediator.js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const folder = formData.get('folder') || undefined;
    const thumbnailFile = formData.get('thumbnail') || formData.get('poster');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided in form data' }, { status: 400 });
    }

    // Process file through Sharp image optimizer and video mediator pipeline, then upload to R2
    const result = await mediateAndUpload(file, { folder });

    // If an accompanying video poster / thumbnail is provided, optimize it with Sharp as well
    if (thumbnailFile && typeof thumbnailFile !== 'string') {
      try {
        const thumbResult = await mediateAndUpload(thumbnailFile, {
          folder: `${folder || 'videos'}/thumbnails`,
          maxDimension: 720,
          quality: 80,
        });
        result.posterUrl = thumbResult.url;
        result.thumbnail = thumbResult;
      } catch (thumbErr) {
        console.warn('Failed to process video thumbnail:', thumbErr?.message);
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Media Upload Route Error:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to process and upload media file',
      },
      { status: 500 }
    );
  }
}
