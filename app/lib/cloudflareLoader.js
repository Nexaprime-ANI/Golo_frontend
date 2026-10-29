/**
 * Cloudflare CDN, R2 & Sharp Next.js Image Loader
 * Supports:
 * 1. Cloudflare Image Resizing (/cdn-cgi/image/...) when enabled
 * 2. On-demand server-side Sharp resizing (/api/media/resize?url=...) for R2 & local images
 * 3. Seamless backwards compatibility for legacy Cloudinary URLs
 */

const R2_PUBLIC_URL = (process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL || '').replace(/\/+$/, '');
const USE_IMAGE_RESIZING = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGE_RESIZING === 'true';

export default function cloudflareLoader({ src, width, quality = 75 }) {
  if (!src) return '';

  // Skip vector SVGs and data URIs
  if (src.endsWith('.svg') || src.startsWith('data:')) {
    return src;
  }

  // 1. BACKWARD COMPATIBILITY: Legacy Cloudinary URLs
  if (src.startsWith('/media/')) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`].join(',');
    const pathWithoutMedia = src.replace('/media/', '');
    if (pathWithoutMedia.includes('/upload/')) {
      return `https://res.cloudinary.com/${pathWithoutMedia.replace('/upload/', `/upload/${params}/`)}`;
    }
    return `https://res.cloudinary.com/${pathWithoutMedia}`;
  }

  if (src.includes('res.cloudinary.com')) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`].join(',');
    if (src.includes('/upload/')) {
      if (src.includes('/upload/v') || !src.match(/\/upload\/[a-z_0-9]+,/)) {
        return src.replace('/upload/', `/upload/${params}/`);
      }
    }
    return src;
  }

  // 2. CLOUDFLARE R2 & LOCAL STORAGE
  const isR2Url = R2_PUBLIC_URL && src.startsWith(R2_PUBLIC_URL);
  const isCdnUrl = src.includes('.r2.dev') || src.includes('.cloudflarestorage.com') || isR2Url;
  const isLocalUpload = src.startsWith('/uploads/');

  if (isCdnUrl) {
    // If Cloudflare Image Resizing addon is active on the zone:
    if (USE_IMAGE_RESIZING) {
      const cleanSrc = src.replace(/^https?:\/\/[^/]+/, '');
      const domain = R2_PUBLIC_URL || src.split('/').slice(0, 3).join('/');
      return `${domain}/cdn-cgi/image/width=${width},quality=${quality},format=auto${cleanSrc}`;
    }

    // Default: Dynamic Sharp optimization endpoint
    return `/api/media/resize?url=${encodeURIComponent(src)}&w=${width}&q=${quality}&format=webp`;
  }

  // 3. Local uploaded media via Sharp resize endpoint
  if (isLocalUpload) {
    return `/api/media/resize?url=${encodeURIComponent(src)}&w=${width}&q=${quality}&format=webp`;
  }

  // 4. Other local assets (e.g. static icons, banners)
  if (src.startsWith('/')) {
    return `${src}?w=${width}&q=${quality}`;
  }

  return src;
}
