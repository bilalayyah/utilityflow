/**
 * Smart filenames for exports (Feature E).
 *
 * Default: `<tool-slug>-<kind>.<ext>`, e.g. `word-counter-analysis.png`,
 * `unit-conversion-result.jpg`, `text-analysis-result.pdf`.
 * User-editable before download; sanitised to [a-z0-9._-] lowercase,
 * max 100 chars, correct extension forced, empty input reverts to default.
 */

export type ExportFileKind = 'analysis' | 'result' | 'conversion' | 'report';

const MAX_FILENAME_LENGTH = 100;

export function defaultExportFilename(
  toolSlug: string,
  kind: ExportFileKind,
  extension: string
): string {
  const slug = sanitizeFilenameSegment(toolSlug) || 'result';
  const ext = extension.replace(/^\./, '').toLowerCase();
  return `${slug}-${kind}.${ext}`;
}

/** Sanitise one filename segment: lowercase, [a-z0-9._-] only. */
export function sanitizeFilenameSegment(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[._-]+|[._-]+$/g, '')
    .slice(0, MAX_FILENAME_LENGTH);
}

/**
 * Sanitise a full user-edited filename and force the correct extension.
 * Empty (or all-invalid) input reverts to `fallback`.
 */
export function sanitizeFilename(
  value: string,
  extension: string,
  fallback: string
): string {
  const ext = extension.replace(/^\./, '').toLowerCase();
  const base = value
    .trim()
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[._-]+|[._-]+$/g, '');
  if (!base) return fallback;
  const name = `${base}.${ext}`;
  return name.length > MAX_FILENAME_LENGTH
    ? `${base.slice(0, MAX_FILENAME_LENGTH - ext.length - 1)}.${ext}`
    : name;
}

/** Extension for a download format (print/copy/share have no file). */
export function extensionForFormat(format: 'png' | 'jpg' | 'pdf'): string {
  return format;
}
