/**
 * Shared validation for client-side image tools (P3-2 size caps, P3-3 magic-byte sniffing).
 *
 * - Size cap follows the existing converter pattern: 25 MB per file
 *   (ImageFormatConverterTool); the compressor uses 20 MB for its own flow.
 * - Signature sniffing checks the file's magic bytes against the type it
 *   claims (MIME type first, file extension as fallback). A file is only
 *   rejected when its bytes positively contradict its claimed type; unknown
 *   or unrecognised types are allowed through so the browser `Image` decode
 *   step remains the backstop and valid uploads never break.
 */

export const MAX_IMAGE_FILE_BYTES = 25 * 1024 * 1024; // 25 MB per-file cap

export type ImageValidationError = 'tooLarge' | 'badSignature';

type ImageKind = 'png' | 'jpeg' | 'webp' | 'gif' | 'svg' | 'ico' | 'bmp' | 'avif';

const MIME_TO_KIND: Record<string, ImageKind> = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpeg',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
  'image/x-icon': 'ico',
  'image/vnd.microsoft.icon': 'ico',
  'image/bmp': 'bmp',
  'image/avif': 'avif',
};

const EXT_TO_KIND: Record<string, ImageKind> = {
  png: 'png',
  jpg: 'jpeg',
  jpeg: 'jpeg',
  webp: 'webp',
  gif: 'gif',
  svg: 'svg',
  ico: 'ico',
  bmp: 'bmp',
  avif: 'avif',
};

function claimedImageKind(file: File): ImageKind | null {
  const fromMime = MIME_TO_KIND[file.type.toLowerCase()];
  if (fromMime) return fromMime;
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  return EXT_TO_KIND[ext] ?? null;
}

function startsWith(bytes: Uint8Array, prefix: number[]): boolean {
  if (bytes.length < prefix.length) return false;
  return prefix.every((b, i) => bytes[i] === b);
}

function asciiAt(bytes: Uint8Array, offset: number, length: number): string {
  return String.fromCharCode(...bytes.subarray(offset, offset + length));
}

/** Sniffs the image type from magic bytes. Returns 'unknown' when unrecognised. */
export async function detectImageKind(file: File): Promise<ImageKind | 'unknown'> {
  const head = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  if (startsWith(head, [0x89, 0x50, 0x4e, 0x47])) return 'png'; // 89 50 4E 47
  if (startsWith(head, [0xff, 0xd8, 0xff])) return 'jpeg'; // FF D8 FF
  if (startsWith(head, [0x47, 0x49, 0x46, 0x38])) return 'gif'; // GIF8 (GIF87a / GIF89a)
  if (asciiAt(head, 0, 4) === 'RIFF' && asciiAt(head, 8, 4) === 'WEBP') return 'webp';
  if (startsWith(head, [0x00, 0x00, 0x01, 0x00])) return 'ico';
  if (startsWith(head, [0x42, 0x4d])) return 'bmp'; // BM
  if (asciiAt(head, 4, 4) === 'ftyp' && (asciiAt(head, 8, 4) === 'avif' || asciiAt(head, 8, 4) === 'avis')) {
    return 'avif';
  }
  // SVG has no binary magic: it is XML text, so look for an <svg tag near the start.
  if (file.type === 'image/svg+xml' || /\.svg$/i.test(file.name)) {
    const text = new TextDecoder('utf-8', { fatal: false })
      .decode(await file.slice(0, 1024).arrayBuffer())
      .toLowerCase();
    if (/<svg[\s>]/.test(text)) return 'svg';
  }
  return 'unknown';
}

/**
 * Validates one image file: size cap first, then magic-byte signature.
 * Returns null when the file passes, or an error code the caller maps to its
 * own (localized) user-facing message. Never throws on unreadable files —
 * those fall through to the tool's decode/read error handling.
 */
export async function validateImageFile(file: File): Promise<ImageValidationError | null> {
  if (file.size > MAX_IMAGE_FILE_BYTES) return 'tooLarge';
  const claimed = claimedImageKind(file);
  if (!claimed) return null;
  let actual: ImageKind | 'unknown';
  try {
    actual = await detectImageKind(file);
  } catch {
    return null;
  }
  if (actual === 'unknown') return null;
  return actual === claimed ? null : 'badSignature';
}
