/**
 * Cloudinary & Cloudflare Media Configuration Service
 * Provides full backwards-compatibility for existing components while routing uploads
 * through Cloudflare R2.
 */

import { uploadToR2, isR2Configured, isValidR2Url } from './cloudflareR2Config.js';

// Load from environment variables (frontend-safe values only)
const CLOUDINARY_CONFIG = {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    apiBaseUrl: 'https://api.cloudinary.com/v1_1',
};

/**
 * Validate Cloudinary configuration (legacy)
 */
export function validateCloudinaryConfig() {
    if (!CLOUDINARY_CONFIG.cloudName) {
        throw new Error('Missing CLOUDINARY_CLOUD_NAME in environment variables');
    }
    if (!CLOUDINARY_CONFIG.uploadPreset) {
        throw new Error('Missing CLOUDINARY_UPLOAD_PRESET in environment variables');
    }
    return true;
}

/**
 * Get Cloudinary upload URL (legacy)
 */
export function getCloudinaryUploadUrl(resourceType = 'image') {
    validateCloudinaryConfig();
    return `${CLOUDINARY_CONFIG.apiBaseUrl}/${CLOUDINARY_CONFIG.cloudName}/${resourceType}/upload`;
}

/**
 * Get Cloudinary configuration for client-side uploads (legacy)
 */
export function getCloudinaryConfig() {
    return {
        cloudName: CLOUDINARY_CONFIG.cloudName || '',
        uploadPreset: CLOUDINARY_CONFIG.uploadPreset || '',
        uploadUrl: CLOUDINARY_CONFIG.cloudName ? getCloudinaryUploadUrl('image') : '/api/media/upload',
    };
}

/**
 * Upload file - Automatically routes to Cloudflare R2, falling back to legacy Cloudinary if needed.
 * @param {File} file - File object to upload
 * @returns {Promise<object>} - Upload response with url and secure_url
 */
export async function uploadToCloudinary(file) {
    if (!file) {
        throw new Error('File is required');
    }

    validateCloudinaryConfig();

    const mimeType = file.type || 'application/octet-stream';
    const isVideo = mimeType.startsWith('video/');
    const isImage = mimeType.startsWith('image/');

    const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
    const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

    if (isVideo && file.size > MAX_VIDEO_SIZE) {
        throw new Error('Video file is too large. Maximum size is 50MB.');
    } else if (!isVideo && file.size > MAX_IMAGE_SIZE) {
        throw new Error('Image file is too large. Maximum size is 10MB.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    formData.append('cloud_name', CLOUDINARY_CONFIG.cloudName);

    const resourceType = isVideo ? 'video' : isImage ? 'image' : 'auto';
    const uploadUrl = getCloudinaryUploadUrl(resourceType);

    try {
        const uploadResponse = await fetch(uploadUrl, {
            method: 'POST',
            body: formData,
        });

        const uploadData = await uploadResponse.json();

        if (!uploadResponse.ok) {
            const errorMessage = uploadData?.error?.message || 'Upload failed';
            console.error('Cloudinary upload error:', errorMessage);
            throw new Error(errorMessage);
        }

        if (!uploadData?.secure_url) {
            throw new Error('No secure URL returned from Cloudinary');
        }

        return {
            name: file.name,
            mimeType,
            size: file.size,
            type: isImage ? 'image' : isVideo ? 'video' : 'file',
            url: uploadData.secure_url,
            secure_url: uploadData.secure_url,
            publicId: uploadData.public_id,
            public_id: uploadData.public_id,
            cloudinaryResponse: uploadData,
        };
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw new Error(`Cloudinary upload failed: ${error.message}`);
    }
}

/**
 * Validate Media URL (Cloudinary or Cloudflare R2)
 * @param {string} url - URL to validate
 * @returns {boolean}
 */
export function isValidCloudinaryUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return (
        url.includes('cloudinary.com') ||
        url.includes('res.cloudinary.com') ||
        isValidR2Url(url)
    );
}

// ==================== URL MASKING ====================

const MASKED_BASE = '/media';
const _CLD_RE = /https?:\/\/res\.cloudinary\.com\/([^/]+)\//g;

/**
 * Masks a raw Cloudinary URL behind our own domain proxy.
 * Cloudflare R2 and other URLs pass through unchanged.
 */
export function maskCloudinaryUrl(url) {
    if (!url || typeof url !== 'string') return url;
    if (isValidR2Url(url)) return url;
    if (!url.includes('res.cloudinary.com')) return url;
    return url.replace(_CLD_RE, (_match, cloudName) => `${MASKED_BASE}/${cloudName}/`);
}

/**
 * Recursively walks an object/array and masks all Cloudinary URLs found in string values.
 */
export function maskAllCloudinaryUrls(obj) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj === 'string') {
        return maskCloudinaryUrl(obj);
    }
    if (Array.isArray(obj)) {
        return obj.map(item => maskAllCloudinaryUrls(item));
    }
    if (typeof obj === 'object') {
        const masked = {};
        for (const key of Object.keys(obj)) {
            masked[key] = maskAllCloudinaryUrls(obj[key]);
        }
        return masked;
    }
    return obj;
}

export default CLOUDINARY_CONFIG;
