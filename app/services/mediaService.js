/**
 * Unified Media Service
 * Central service for all file and media uploads across GOLO Frontend.
 * Defaults to Cloudinary until Cloudflare R2 credentials are configured in .env.local.
 */

import { uploadToCloudinary } from './cloudinaryConfig.js';
import { uploadToR2, isValidR2Url, isR2Configured } from './cloudflareR2Config.js';

/**
 * Upload a media file (Image, Video, or Document)
 * @param {File} file
 * @param {Object} options
 * @returns {Promise<{ url: string, secure_url: string, publicId: string, name: string, size: number, type: string }>}
 */
export async function uploadMedia(file, options = {}) {
  if (isR2Configured()) {
    return uploadToR2(file, options);
  }
  return uploadToCloudinary(file);
}

/**
 * Validates if a URL is hosted on our media CDN (Cloudflare R2 or legacy Cloudinary)
 */
export function isValidMediaUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return (
    isValidR2Url(url) ||
    url.includes('cloudinary.com') ||
    url.includes('res.cloudinary.com') ||
    url.startsWith('/media/')
  );
}

export { uploadToCloudinary, uploadToR2, isValidR2Url, isR2Configured };
export default uploadMedia;
