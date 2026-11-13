import * as pdfjsLib from 'pdfjs-dist';
import type { LocaleCode } from '../../locales/config';

// Configure Vite-bundled local worker for pdfjs-dist so zero external CDN calls are required.
if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
}

export { pdfjsLib };

const PDF_STRINGS = {
  en: {
    noFile: 'No file was selected.',
    notPdf: (name: string) => `"${name}" does not appear to be a PDF file.`,
    empty: (name: string) => `"${name}" is empty or truncated.`,
    noHeader: (name: string) =>
      `"${name}" is missing a valid %PDF header and cannot be processed.`,
    enterRanges: 'Enter page numbers or ranges such as "1-3, 5".',
    rangeOutside: (token: string, total: number) =>
      `Range "${token}" is outside the document's 1–${total} page bounds.`,
    rangeReversed: (token: string) =>
      `Range "${token}" has a start page greater than its end page.`,
    pageMissing: (page: number, total: number) =>
      `Page ${page} does not exist (document has ${total} pages).`,
    invalidSyntax: (token: string) =>
      `Invalid page syntax "${token}". Use numbers and ranges like "1-3, 5".`,
    encrypted:
      'This PDF is encrypted or password-protected. Unlock it before processing locally.',
    unable: 'Unable to process PDF file.',
  },
  es: {
    noFile: 'No se seleccionó ningún archivo.',
    notPdf: (name: string) => `"${name}" no parece ser un archivo PDF.`,
    empty: (name: string) => `"${name}" está vacío o truncado.`,
    noHeader: (name: string) =>
      `"${name}" no tiene un encabezado %PDF válido y no se puede procesar.`,
    enterRanges: 'Ingresa números de página o rangos como "1-3, 5".',
    rangeOutside: (token: string, total: number) =>
      `El rango "${token}" está fuera de los límites del documento (1–${total} páginas).`,
    rangeReversed: (token: string) =>
      `El rango "${token}" tiene una página inicial mayor que la final.`,
    pageMissing: (page: number, total: number) =>
      `La página ${page} no existe (el documento tiene ${total} páginas).`,
    invalidSyntax: (token: string) =>
      `Sintaxis de página no válida: "${token}". Usa números y rangos como "1-3, 5".`,
    encrypted:
      'Este PDF está cifrado o protegido con contraseña. Desbloquéalo antes de procesarlo localmente.',
    unable: 'No se pudo procesar el archivo PDF.',
  },
} as const;

export function formatBytes(bytes: number, locale: LocaleCode = 'en'): string {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes < 1024) return `${bytes.toLocaleString(locale)} B`;
  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toLocaleString(locale, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })} KB`;
  return `${(bytes / (1024 * 1024)).toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} MB`;
}

export async function readValidatedPdfBytes(
  file: File,
  locale: LocaleCode = 'en'
): Promise<Uint8Array> {
  const s = PDF_STRINGS[locale];
  if (!file) {
    throw new Error(s.noFile);
  }
  const lower = file.name.toLowerCase();
  if (file.type && file.type !== 'application/pdf' && !lower.endsWith('.pdf')) {
    throw new Error(s.notPdf(file.name));
  }
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 5) {
    throw new Error(s.empty(file.name));
  }
  // Check for %PDF- header anywhere in the first 1024 bytes (per PDF spec allowance)
  const headerSlice = new TextDecoder('ascii').decode(bytes.subarray(0, Math.min(1024, bytes.length)));
  if (!headerSlice.includes('%PDF-')) {
    throw new Error(s.noHeader(file.name));
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
export function parsePageRanges(
  input: string,
  totalPages: number,
  locale: LocaleCode = 'en'
): { indices: number[]; error: string } {
  const s = PDF_STRINGS[locale];
  const trimmed = input.trim();
  // "all" in English; "todas"/"todo" in Spanish.
  const allKeyword =
    locale === 'es'
      ? ['all', 'todas', 'todo'].includes(trimmed.toLowerCase())
      : trimmed.toLowerCase() === 'all';
  if (!trimmed || allKeyword) {
    return {
      indices: Array.from({ length: totalPages }, (_, i) => i),
      error: '',
    };
  }

  const tokens = trimmed.split(',').map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) {
    return { indices: [], error: s.enterRanges };
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
          error: s.rangeOutside(token, totalPages),
        };
      }
      if (start > end) {
        return {
          indices: [],
          error: s.rangeReversed(token),
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
          error: s.pageMissing(page, totalPages),
        };
      }
      chosen.add(page - 1);
      continue;
    }

    return {
      indices: [],
      error: s.invalidSyntax(token),
    };
  }

  return {
    indices: Array.from(chosen).sort((a, b) => a - b),
    error: '',
  };
}

export function formatFriendlyPdfError(
  err: unknown,
  filename?: string,
  locale: LocaleCode = 'en'
): string {
  const s = PDF_STRINGS[locale];
  const msg = err instanceof Error ? err.message : String(err);
  const prefix = filename ? `${filename}: ` : '';
  if (/encrypt|password/i.test(msg)) {
    return `${prefix}${s.encrypted}`;
  }
  return `${prefix}${msg || s.unable}`;
}
