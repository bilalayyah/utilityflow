import * as pdfjsLib from 'pdfjs-dist';
import type { LocaleCode } from '../../locales/config';
import { localeTag } from '../../locales/config';

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
  pt: {
    noFile: 'Nenhum arquivo foi selecionado.',
    notPdf: (name: string) => `"${name}" não parece ser um arquivo PDF.`,
    empty: (name: string) => `"${name}" está vazio ou truncado.`,
    noHeader: (name: string) =>
      `"${name}" não tem um cabeçalho %PDF válido e não pode ser processado.`,
    enterRanges: 'Insira números de página ou intervalos como "1-3, 5".',
    rangeOutside: (token: string, total: number) =>
      `O intervalo "${token}" está fora dos limites do documento (1–${total} páginas).`,
    rangeReversed: (token: string) =>
      `O intervalo "${token}" tem uma página inicial maior que a final.`,
    pageMissing: (page: number, total: number) =>
      `A página ${page} não existe (o documento tem ${total} páginas).`,
    invalidSyntax: (token: string) =>
      `Sintaxe de página inválida: "${token}". Use números e intervalos como "1-3, 5".`,
    encrypted:
      'Este PDF está criptografado ou protegido por senha. Desbloqueie-o antes de processá-lo localmente.',
    unable: 'Não foi possível processar o arquivo PDF.',
  },
  fr: {
    noFile: 'Aucun fichier n’a été sélectionné.',
    notPdf: (name: string) => `"${name}" ne semble pas être un fichier PDF.`,
    empty: (name: string) => `"${name}" est vide ou tronqué.`,
    noHeader: (name: string) =>
      `"${name}" n’a pas d’en-tête %PDF valide et ne peut pas être traité.`,
    enterRanges: 'Saisissez des numéros de page ou des plages comme « 1-3, 5 ».',
    rangeOutside: (token: string, total: number) =>
      `La plage « ${token} » est hors des limites du document (1–${total} pages).`,
    rangeReversed: (token: string) =>
      `La plage « ${token} » a une page de début supérieure à sa page de fin.`,
    pageMissing: (page: number, total: number) =>
      `La page ${page} n’existe pas (le document a ${total} pages).`,
    invalidSyntax: (token: string) =>
      `Syntaxe de page non valide : « ${token} ». Utilisez des nombres et des plages comme « 1-3, 5 ».`,
    encrypted:
      'Ce PDF est chiffré ou protégé par mot de passe. Déverrouillez-le avant de le traiter localement.',
    unable: 'Impossible de traiter le fichier PDF.',
  },
  de: {
    noFile: 'Es wurde keine Datei ausgewählt.',
    notPdf: (name: string) => `"${name}" scheint keine PDF-Datei zu sein.`,
    empty: (name: string) => `"${name}" ist leer oder unvollständig.`,
    noHeader: (name: string) =>
      `"${name}" fehlt ein gültiger %PDF-Header und kann nicht verarbeitet werden.`,
    enterRanges: 'Geben Sie Seitennummern oder Bereiche ein, z. B. „1-3, 5".',
    rangeOutside: (token: string, total: number) =>
      `Bereich „${token}" liegt außerhalb der Seitengrenzen des Dokuments (1–${total}).`,
    rangeReversed: (token: string) =>
      `Bereich „${token}": Die Startseite ist größer als die Endseite.`,
    pageMissing: (page: number, total: number) =>
      `Seite ${page} existiert nicht (das Dokument hat ${total} Seiten).`,
    invalidSyntax: (token: string) =>
      `Ungültige Seitensyntax „${token}". Verwenden Sie Zahlen und Bereiche wie „1-3, 5".`,
    encrypted:
      'Diese PDF ist verschlüsselt oder passwortgeschützt. Entsperren Sie sie, bevor Sie sie lokal verarbeiten.',
    unable: 'PDF-Datei konnte nicht verarbeitet werden.',
  },
  it: {
    noFile: 'Nessun file selezionato.',
    notPdf: (name: string) => `"${name}" non sembra essere un file PDF.`,
    empty: (name: string) => `"${name}" è vuoto o troncato.`,
    noHeader: (name: string) =>
      `"${name}" non ha un’intestazione %PDF valida e non può essere elaborato.`,
    enterRanges: 'Inserisci numeri di pagina o intervalli come «1-3, 5».',
    rangeOutside: (token: string, total: number) =>
      `L’intervallo «${token}» è fuori dai limiti di pagina del documento (1–${total}).`,
    rangeReversed: (token: string) =>
      `L’intervallo «${token}» ha una pagina iniziale maggiore della pagina finale.`,
    pageMissing: (page: number, total: number) =>
      `La pagina ${page} non esiste (il documento ha ${total} pagine).`,
    invalidSyntax: (token: string) =>
      `Sintassi di pagina non valida «${token}». Usa numeri e intervalli come «1-3, 5».`,
    encrypted:
      'Questo PDF è crittografato o protetto da password. Sbloccalo prima di elaborarlo in locale.',
    unable: 'Impossibile elaborare il file PDF.',
  },
} as const;

export function formatBytes(bytes: number, locale: LocaleCode = 'en'): string {
  // localeTag maps 'pt' -> 'pt-BR' so numbers render the Brazilian way.
  const tag = localeTag(locale);
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes < 1024) return `${bytes.toLocaleString(tag)} B`;
  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toLocaleString(tag, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })} KB`;
  return `${(bytes / (1024 * 1024)).toLocaleString(tag, {
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
  // "all" in English; "todas"/"todo" in Spanish; "todas"/"todos" in Portuguese; "toutes"/"tous" in French; "alle" in German; "tutte"/"tutti"/"tutto" in Italian.
  const allKeyword =
    locale === 'es'
      ? ['all', 'todas', 'todo'].includes(trimmed.toLowerCase())
      : locale === 'pt'
        ? ['all', 'todas', 'todos'].includes(trimmed.toLowerCase())
        : locale === 'fr'
          ? ['all', 'toutes', 'tous'].includes(trimmed.toLowerCase())
          : locale === 'de'
            ? ['all', 'alle'].includes(trimmed.toLowerCase())
            : locale === 'it'
              ? ['all', 'tutte', 'tutti', 'tutto'].includes(trimmed.toLowerCase())
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
