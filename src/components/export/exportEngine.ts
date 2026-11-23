/**
 * Export engine — the ONLY module that touches html-to-image / pdf-lib,
 * and only via dynamic import() inside the handler functions below.
 * Nothing in the light shell statically imports either library, so the
 * export chunk is split off and costs 0 KB until a user actually exports.
 *
 * - PNG/JPG: html-to-image captures the exact preview node (pixel-identical
 *   to what the user sees, by construction).
 * - PDF: pdf-lib + the in-repo layout engine in pdfLayout.ts. Real,
 *   selectable text for Latin scripts; raster fallback (embedPng) for
 *   non-Latin / emoji content — see the unicode note in pdfLayout.ts.
 * - Print: window.print() + @media print (the preview node is the only
 *   thing printed — see the print CSS in ResultExportPanel).
 * - Copy: navigator.clipboard.writeText with the same textarea +
 *   execCommand fallback CopyButton uses.
 * - Share: navigator.share with clipboard fallback.
 * - Download: native Blob + temp anchor (the existing codebase pattern).
 */
import type {
  ExportField,
  ExportOptions,
  ExportResult,
} from './types';
import { getExportTemplate } from './exportTemplates';
import {
  FOOTER_HEIGHT_PT,
  HEADER_HEIGHT_PT,
  SECTION_GAP_PT,
  fieldRowHeightPt,
  getPageGeometry,
  lineHeightPt,
  wrapText,
} from './pdfLayout';
import { getSiteOrigin } from './recentResults';

/** A section of the export: heading + rows. */
export interface ExportSection {
  heading: string;
  fields: ExportField[];
}

/**
 * Build the sections that will actually be exported, honouring the
 * includeInput / includeOutput checkboxes. Never produces an empty file:
 * callers must refuse to export when both are off (see isExportAllowed).
 */
export function buildExportSections(
  result: ExportResult,
  options: ExportOptions,
  inputHeading: string,
  outputHeading: string,
  detailsHeading: string
): ExportSection[] {
  const sections: ExportSection[] = [];
  if (options.includeInput && result.input.length > 0) {
    sections.push({ heading: inputHeading, fields: result.input });
  }
  if (options.includeOutput && result.output.length > 0) {
    sections.push({ heading: outputHeading, fields: result.output });
  }
  if (result.details && result.details.length > 0 && options.includeOutput) {
    sections.push({ heading: detailsHeading, fields: result.details });
  }
  return sections;
}

/** True when at least one section is selected — otherwise export is disabled. */
export function isExportAllowed(options: ExportOptions): boolean {
  return options.includeInput || options.includeOutput;
}

/** Plain-text rendering of the export, used by Copy and Share. */
export function renderExportText(
  result: ExportResult,
  sections: ExportSection[]
): string {
  const lines: string[] = [result.toolName, '='.repeat(result.toolName.length)];
  for (const section of sections) {
    lines.push('', section.heading);
    for (const field of section.fields) {
      lines.push(`${field.label}: ${field.value}`);
    }
  }
  if (result.metadata) lines.push('', result.metadata);
  lines.push('', `Source: ${getSiteOrigin()}/${result.toolSlug}/`);
  return lines.join('\n');
}

/**
 * True when any exported text needs the raster PDF path: any character
 * outside the WinAnsi/Latin range pdf-lib StandardFonts can render
 * (covers Cyrillic, CJK, Arabic, Hebrew, Devanagari, Bengali, emoji…).
 */
export function needsRasterPdf(sections: ExportSection[]): boolean {
  // Latin-1 Supplement + Latin Extended-A/B + general punctuation are fine;
  // anything at/above U+2500 (box drawing, CJK, etc.) or in the known
  // non-Latin blocks / emoji ranges is not renderable in StandardFonts.
  const nonLatin = /[^\u0000-\u024F\u1E00-\u1EFF\u2000-\u206F\u20AC]/;
  for (const section of sections) {
    for (const field of section.fields) {
      if (nonLatin.test(field.label) || nonLatin.test(field.value)) return true;
    }
  }
  return false;
}

/** Download a Blob via a temp anchor — the existing codebase pattern. */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Clipboard write with the CopyButton textarea + execCommand fallback. */
export async function copyTextWithFallback(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

/** Share via navigator.share when available; otherwise copy the text. */
export async function shareExport(
  result: ExportResult,
  text: string,
  files?: File[]
): Promise<'shared' | 'copied'> {
  if (
    typeof navigator.share === 'function' &&
    (!files || files.length === 0 || (navigator.canShare?.({ files }) ?? false))
  ) {
    try {
      await navigator.share({
        title: `${result.toolName} — UtilityFlow`,
        text,
        ...(files && files.length > 0 ? { files } : {}),
      });
      return 'shared';
    } catch (error) {
      // User dismissed the share sheet — not an error, fall back to copy.
      if (error instanceof DOMException && error.name === 'AbortError') {
        return 'copied';
      }
      throw error;
    }
  }
  await copyTextWithFallback(text);
  return 'copied';
}

/** PNG/JPG: capture the exact preview node via html-to-image. */
export async function exportImage(
  previewNode: HTMLElement,
  format: 'png' | 'jpg',
  filename: string,
  pixelRatio = 2
): Promise<void> {
  const { toPng, toJpeg } = await import('html-to-image');
  const dataUrl =
    format === 'png'
      ? await toPng(previewNode, { pixelRatio, cacheBust: true })
      : await toJpeg(previewNode, { pixelRatio, cacheBust: true, quality: 0.92 });
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  downloadBlob(blob, filename);
}

/**
 * Rasterise the preview node to a PNG data URL (used for the raster PDF
 * path and for Share-with-file). Kept separate so the PDF path can reuse it.
 */
export async function rasterisePreview(previewNode: HTMLElement): Promise<string> {
  const { toPng } = await import('html-to-image');
  return toPng(previewNode, { pixelRatio: 2, cacheBust: true });
}

export interface PdfExportInput {
  result: ExportResult;
  sections: ExportSection[];
  options: ExportOptions;
  /** Rasterised preview image (PNG data URL) — required when rasterising. */
  rasterDataUrl?: string;
}

/** Build + download the PDF. Text path for Latin, raster path otherwise. */
export async function exportPdf(input: PdfExportInput): Promise<void> {
  const { result, sections, options } = input;
  const template = getExportTemplate(options.template);
  const geometry = getPageGeometry(options.pageSize, options.orientation, options.margins);
  const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');

  const doc = await PDFDocument.create();
  doc.setTitle(`${result.toolName} — UtilityFlow`);
  doc.setAuthor('UtilityFlow');
  doc.setCreator('UtilityFlow');
  doc.setProducer('UtilityFlow');

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontMono = await doc.embedFont(StandardFonts.Courier);
  const fontSize = options.fontSize;
  const monoSize = Math.max(9, fontSize - 1);
  const ink = rgb(0.11, 0.11, 0.12);
  const muted = rgb(0.43, 0.43, 0.45);
  const accent = rgb(0.055, 0.541, 0.4); // #0E8A66 emerald
  const rule = rgb(0.9, 0.9, 0.92);

  const headerH = template.showBrandHeader ? HEADER_HEIGHT_PT : 0;
  const footerH = template.showFooter ? FOOTER_HEIGHT_PT : 0;
  const contentTop = geometry.height - geometry.margin - headerH;
  const contentBottom = geometry.margin + footerH;

  let page = doc.addPage([geometry.width, geometry.height]);
  let pageNumber = 1;
  let y = contentTop;

  const drawHeader = (pg: ReturnType<typeof doc.addPage>) => {
    if (!template.showBrandHeader) return;
    pg.drawText('UtilityFlow', {
      x: geometry.margin,
      y: geometry.height - geometry.margin - 14,
      size: 15,
      font: fontBold,
      color: accent,
    });
    pg.drawText(result.toolName, {
      x: geometry.margin,
      y: geometry.height - geometry.margin - 30,
      size: 10,
      font,
      color: muted,
    });
  };

  const drawFooter = (pg: ReturnType<typeof doc.addPage>, num: number) => {
    if (!template.showFooter) return;
    const footerY = geometry.margin + 8;
    pg.drawLine({
      start: { x: geometry.margin, y: footerY + 10 },
      end: { x: geometry.width - geometry.margin, y: footerY + 10 },
      thickness: 0.5,
      color: rule,
    });
    pg.drawText(`${getSiteOrigin()}/${result.toolSlug}/`, {
      x: geometry.margin,
      y: footerY,
      size: 8,
      font,
      color: muted,
    });
    const dateText = new Date().toLocaleDateString();
    const pageText = `Page ${num} · ${dateText}`;
    pg.drawText(pageText, {
      x: geometry.width - geometry.margin - font.widthOfTextAtSize(pageText, 8),
      y: footerY,
      size: 8,
      font,
      color: muted,
    });
  };

  const newPage = () => {
    drawFooter(page, pageNumber);
    page = doc.addPage([geometry.width, geometry.height]);
    pageNumber += 1;
    y = contentTop;
    drawHeader(page);
  };

  drawHeader(page);

  // Raster path: non-Latin / emoji content — embed the pixel-faithful
  // preview image instead of (unrenderable) StandardFonts text. The image
  // is scaled to fit one page's usable area; result previews are short
  // (one screen), so this covers the real cases. The embedded image is
  // not text-selectable — the trade-off stated in pdfLayout.ts.
  if (needsRasterPdf(sections) && input.rasterDataUrl) {
    const png = await doc.embedPng(input.rasterDataUrl);
    const scale = Math.min(
      geometry.contentWidth / png.width,
      (contentTop - contentBottom) / png.height,
      1
    );
    const w = png.width * scale;
    const h = png.height * scale;
    page.drawImage(png, {
      x: geometry.margin + (geometry.contentWidth - w) / 2,
      y: contentTop - h,
      width: w,
      height: h,
    });
    drawFooter(page, pageNumber);
    const bytes = await doc.save();
    downloadBlob(
      new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' }),
      options.filename
    );
    return;
  }

  const ensureSpace = (needed: number) => {
    if (y - needed < contentBottom) newPage();
  };

  for (const section of sections) {
    const headingSize = fontSize + 2;
    ensureSpace(lineHeightPt(headingSize) + SECTION_GAP_PT);
    page.drawText(section.heading, {
      x: geometry.margin,
      y: y - headingSize,
      size: headingSize,
      font: fontBold,
      color: accent,
    });
    y -= lineHeightPt(headingSize) + SECTION_GAP_PT;
    page.drawLine({
      start: { x: geometry.margin, y: y + SECTION_GAP_PT - 2 },
      end: { x: geometry.width - geometry.margin, y: y + SECTION_GAP_PT - 2 },
      thickness: 0.75,
      color: rule,
    });

    for (const field of section.fields) {
      const valueFont = field.mono ? fontMono : font;
      const valueSize = field.mono ? monoSize : fontSize;
      const labelWidth = Math.min(geometry.contentWidth * 0.35, 170);
      const valueWidth = geometry.contentWidth - labelWidth - 12;
      const labelLines = wrapText(field.label, fontBold, fontSize, labelWidth);
      const valueLines = wrapText(field.value, valueFont, valueSize, valueWidth);
      const rowLines = Math.max(labelLines.length, valueLines.length);
      const rowHeight = fieldRowHeightPt(rowLines, fontSize, template.dense);
      ensureSpace(rowHeight);
      const rowTop = y;
      labelLines.forEach((line, i) => {
        page.drawText(line, {
          x: geometry.margin,
          y: rowTop - fontSize - i * lineHeightPt(fontSize),
          size: fontSize,
          font: fontBold,
          color: ink,
        });
      });
      valueLines.forEach((line, i) => {
        page.drawText(line, {
          x: geometry.margin + labelWidth + 12,
          y: rowTop - valueSize - i * lineHeightPt(valueSize),
          size: valueSize,
          font: valueFont,
          color: ink,
        });
      });
      y -= rowHeight;
    }
    y -= SECTION_GAP_PT;
  }

  if (result.metadata) {
    const lines = wrapText(result.metadata, font, fontSize, geometry.contentWidth);
    ensureSpace(lines.length * lineHeightPt(fontSize));
    lines.forEach((line, i) => {
      page.drawText(line, {
        x: geometry.margin,
        y: y - fontSize - i * lineHeightPt(fontSize),
        size: fontSize,
        font,
        color: muted,
      });
    });
    y -= lines.length * lineHeightPt(fontSize);
  }

  drawFooter(page, pageNumber);
  const bytes = await doc.save();
  downloadBlob(
    new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' }),
    options.filename
  );
}
