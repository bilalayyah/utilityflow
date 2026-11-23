/**
 * In-repo PDF layout engine (pdf-lib + manual pagination).
 *
 * Shared layout constants live here and are used by BOTH:
 *  - ExportPreview.tsx — page-break lines + page count are estimated from
 *    these same metrics, so the preview's pagination matches the PDF's;
 *  - exportEngine.ts — the real PDF is laid out with these metrics.
 *
 * UNICODE HONESTY: pdf-lib StandardFonts (Helvetica) cover WinAnsi / Latin
 * only — EN/ES/PT/FR/DE/IT/ID get real, selectable text. Pages whose content
 * contains non-Latin scripts (RU/CJK/Arabic/Urdu/Bengali/Hindi/Thai-style
 * text) or emoji are rasterised via html-to-image and embedded with
 * embedPng() instead — pixel-faithful, but NOT text-selectable. No fontkit,
 * no font files (fontkit cannot shape Arabic and would need a 10–20 MB CJK
 * font fetched first). See exportEngine.ts `needsRasterPdf()`.
 */
import type {
  ExportOrientation,
  ExportPageSize,
} from './types';

/** Page sizes in PDF points (1 pt = 1/72 in). */
export const PAGE_SIZES_PT: Record<
  ExportPageSize,
  { width: number; height: number }
> = {
  a4: { width: 595.28, height: 841.89 },
  letter: { width: 612, height: 792 },
};

/** Margin presets in points. */
export const MARGINS_PT: Record<'narrow' | 'normal' | 'wide', number> = {
  narrow: 36,
  normal: 54,
  wide: 72,
};

/** Line height factor applied to the base font size. */
export const LINE_HEIGHT_FACTOR = 1.45;
/** Extra gap (pt) between a section heading and its rows. */
export const SECTION_GAP_PT = 10;
/** Row gap (pt) between label/value rows. */
export const ROW_GAP_PT = 6;
/** Header (brand wordmark) height in pt, Professional template. */
export const HEADER_HEIGHT_PT = 34;
/** Footer height in pt (source URL + date + page number). */
export const FOOTER_HEIGHT_PT = 24;

export interface PageGeometry {
  width: number;
  height: number;
  margin: number;
  contentWidth: number;
  contentHeight: number;
}

export function getPageGeometry(
  pageSize: ExportPageSize,
  orientation: ExportOrientation,
  margins: 'narrow' | 'normal' | 'wide'
): PageGeometry {
  const base = PAGE_SIZES_PT[pageSize];
  const width = orientation === 'landscape' ? base.height : base.width;
  const height = orientation === 'landscape' ? base.width : base.height;
  const margin = MARGINS_PT[margins];
  return {
    width,
    height,
    margin,
    contentWidth: width - margin * 2,
    contentHeight: height - margin * 2,
  };
}

/**
 * Word-wrap `text` to fit `maxWidth` using a pdf-lib font's
 * widthOfTextAtSize. Returns wrapped lines. Long unbreakable tokens
 * (URLs, hashes) are hard-split so they never overflow the page.
 */
export function wrapText(
  text: string,
  font: { widthOfTextAtSize: (text: string, size: number) => number },
  fontSize: number,
  maxWidth: number
): string[] {
  const lines: string[] = [];
  for (const rawLine of text.split('\n')) {
    if (rawLine === '') {
      lines.push('');
      continue;
    }
    const words = rawLine.split(/\s+/);
    let current = '';
    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (font.widthOfTextAtSize(candidate, fontSize) <= maxWidth) {
        current = candidate;
        continue;
      }
      if (current) lines.push(current);
      // Hard-split a single over-wide token (URL / hash / long word).
      if (font.widthOfTextAtSize(word, fontSize) > maxWidth) {
        let rest = word;
        while (
          rest.length > 0 &&
          font.widthOfTextAtSize(rest, fontSize) > maxWidth
        ) {
          let cut = rest.length;
          while (
            cut > 1 &&
            font.widthOfTextAtSize(rest.slice(0, cut), fontSize) > maxWidth
          ) {
            cut = Math.max(1, Math.floor(cut / 2));
          }
          lines.push(rest.slice(0, cut));
          rest = rest.slice(cut);
        }
        current = rest;
      } else {
        current = word;
      }
    }
    if (current) lines.push(current);
  }
  return lines;
}

/** Height (pt) one wrapped line occupies at the given font size. */
export function lineHeightPt(fontSize: number): number {
  return fontSize * LINE_HEIGHT_FACTOR;
}

/** Height (pt) a field row occupies once wrapped. */
export function fieldRowHeightPt(
  lineCount: number,
  fontSize: number,
  dense: boolean
): number {
  const gap = dense ? ROW_GAP_PT / 2 : ROW_GAP_PT;
  return lineCount * lineHeightPt(fontSize) + gap;
}

/**
 * Estimate how many PDF pages `rowHeights` (pt, in order) need, given the
 * usable content height per page. Used by the preview so its page-break
 * lines and page count match the real PDF's pagination. A section heading
 * is charged SECTION_GAP_PT + one line; callers add those heights to the
 * list before calling this.
 */
export function estimatePageCount(
  rowHeights: number[],
  contentHeight: number,
  headerHeight: number,
  footerHeight: number
): number {
  const usable = Math.max(1, contentHeight - headerHeight - footerHeight);
  let pages = 1;
  let used = 0;
  for (const h of rowHeights) {
    if (used + h > usable && used > 0) {
      pages += 1;
      used = 0;
    }
    used += h;
  }
  return Math.max(1, pages);
}
