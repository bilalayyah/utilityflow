import * as pdfjsLib from 'pdfjs-dist';

// Configure Vite-bundled local worker for pdfjs-dist so zero external CDN calls are required.
if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
}

export { pdfjsLib };

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export async function readValidatedPdfBytes(file: File): Promise<Uint8Array> {
  if (!file) {
    throw new Error('No file was selected.');
  }
  const lower = file.name.toLowerCase();
  if (file.type && file.type !== 'application/pdf' && !lower.endsWith('.pdf')) {
    throw new Error(`"${file.name}" does not appear to be a PDF file.`);
  }
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 5) {
    throw new Error(`"${file.name}" is empty or truncated.`);
  }
  // Check for %PDF- header anywhere in the first 1024 bytes (per PDF spec allowance)
  const headerSlice = new TextDecoder('ascii').decode(bytes.subarray(0, Math.min(1024, bytes.length)));
  if (!headerSlice.includes('%PDF-')) {
    throw new Error(`"${file.name}" is missing a valid %PDF header and cannot be processed.`);
  }
  return bytes;
}

export function triggerPdfDownload(bytes: Uint8Array, filename: string): void {
  const safeCopy = new Uint8Array(bytes.byteLength);
  safeCopy.set(bytes);
  const blob = new Blob([safeCopy], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Parses 1-indexed page expressions like "1-3, 5, 8-10" into sorted unique 0-based page indices.
 */
export function parsePageRanges(input: string, totalPages: number): { indices: number[]; error: string } {
  const trimmed = input.trim();
  if (!trimmed || trimmed.toLowerCase() === 'all') {
    return {
      indices: Array.from({ length: totalPages }, (_, i) => i),
      error: '',
    };
  }

  const tokens = trimmed.split(',').map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) {
    return { indices: [], error: 'Enter page numbers or ranges such as "1-3, 5".' };
  }

  const chosen = new Set<number>();
  for (const token of tokens) {
    const rangeMatch = /^(\d+)\s*-\s*(\d+)$/.exec(token);
    if (rangeMatch) {
      const start = Number(rangeMatch[1]);
      const end = Number(rangeMatch[2]);
      if (start < 1 || end < 1 || start > totalPages || end > totalPages) {
        return {
          indices: [],
          error: `Range "${token}" is outside the document's 1–${totalPages} page bounds.`,
        };
      }
      if (start > end) {
        return {
          indices: [],
          error: `Range "${token}" has a start page greater than its end page.`,
        };
      }
      for (let p = start; p <= end; p += 1) {
        chosen.add(p - 1);
      }
      continue;
    }

    if (/^\d+$/.test(token)) {
      const page = Number(token);
      if (page < 1 || page > totalPages) {
        return {
          indices: [],
          error: `Page ${page} does not exist (document has ${totalPages} pages).`,
        };
      }
      chosen.add(page - 1);
      continue;
    }

    return {
      indices: [],
      error: `Invalid page syntax "${token}". Use numbers and ranges like "1-3, 5".`,
    };
  }

  return {
    indices: Array.from(chosen).sort((a, b) => a - b),
    error: '',
  };
}

export function formatFriendlyPdfError(err: unknown, filename?: string): string {
  const msg = err instanceof Error ? err.message : String(err);
  const prefix = filename ? `${filename}: ` : '';
  if (/encrypt|password/i.test(msg)) {
    return `${prefix}This PDF is encrypted or password-protected. Unlock it before processing locally.`;
  }
  return `${prefix}${msg || 'Unable to process PDF file.'}`;
}
