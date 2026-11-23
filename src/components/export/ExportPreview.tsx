/**
 * ExportPreview — renders the exact content that will be exported, with
 * live page-break lines + page count.
 *
 * One source of truth: PNG/JPG capture this exact node (pixel-identical
 * by construction). The PDF reuses the same content model + the shared
 * layout constants in pdfLayout.ts — so the PDF preview is
 * content-identical, with pagination ESTIMATED from the shared metrics
 * (character-width approximation, since the preview must not load
 * pdf-lib). The real PDF's pagination — measured with the actual font —
 * is authoritative and may differ by a line on very long values.
 */
import { useMemo } from 'react';
import type { RefObject } from 'react';
import { useLocale } from '../../locales/LocaleContext';
import { formatString } from '../../locales/ui';
import type { ExportOptions, ExportResult } from './types';
import type { ExportSection } from './exportEngine';
import { getExportTemplate } from './exportTemplates';
import {
  FOOTER_HEIGHT_PT,
  HEADER_HEIGHT_PT,
  SECTION_GAP_PT,
  estimatePageCount,
  fieldRowHeightPt,
  getPageGeometry,
  lineHeightPt,
} from './pdfLayout';
import { getSiteOrigin } from './recentResults';

export interface ExportPreviewProps {
  result: ExportResult;
  sections: ExportSection[];
  options: ExportOptions;
  /** Ref the panel passes to the engine so PNG/JPG capture this node. */
  previewRef: RefObject<HTMLDivElement | null>;
  /** Localised page-count template, e.g. '{count} pages'. */
  pageCountTemplate: string;
}

/** Approximate average glyph width as a fraction of font size. */
function approxCharWidthPx(fontSize: number, mono: boolean): number {
  return fontSize * (mono ? 0.6 : 0.5);
}

function approxWrappedLines(
  text: string,
  fontSize: number,
  maxWidthPx: number,
  mono: boolean
): number {
  const charW = approxCharWidthPx(fontSize, mono);
  const charsPerLine = Math.max(1, Math.floor(maxWidthPx / charW));
  let lines = 0;
  for (const raw of text.split('\n')) {
    lines += Math.max(1, Math.ceil(Math.max(raw.length, 1) / charsPerLine));
  }
  return lines;
}

/**
 * Estimate the PDF page count from the content model using the shared
 * pdfLayout metrics. Preview-only estimate; the real PDF measures with
 * the embedded font and is authoritative.
 */
export function estimatePreviewPageCount(
  result: ExportResult,
  sections: ExportSection[],
  options: ExportOptions
): number {
  const template = getExportTemplate(options.template);
  const geometry = getPageGeometry(options.pageSize, options.orientation, options.margins);
  const fontSize = options.fontSize;
  // 1 pt ≈ 1.333 px at 96 dpi — the preview renders at the same scale
  // factor, so pt metrics convert directly for the estimate.
  const pxPerPt = 96 / 72;
  const contentWidthPx = geometry.contentWidth * pxPerPt;
  const labelWidthPx = Math.min(contentWidthPx * 0.35, 170 * pxPerPt);
  const valueWidthPx = contentWidthPx - labelWidthPx - 12 * pxPerPt;
  const rowHeights: number[] = [];
  for (const section of sections) {
    rowHeights.push(lineHeightPt(fontSize + 2) + SECTION_GAP_PT);
    for (const field of section.fields) {
      const labelLines = approxWrappedLines(field.label, fontSize, labelWidthPx, false);
      const valueLines = approxWrappedLines(
        field.value,
        field.mono ? Math.max(9, fontSize - 1) : fontSize,
        valueWidthPx,
        field.mono ?? false
      );
      rowHeights.push(
        fieldRowHeightPt(Math.max(labelLines, valueLines), fontSize, template.dense)
      );
    }
    rowHeights.push(SECTION_GAP_PT);
  }
  if (result.metadata) {
    rowHeights.push(
      approxWrappedLines(result.metadata, fontSize, contentWidthPx, false) *
        lineHeightPt(fontSize)
    );
  }
  const headerH = template.showBrandHeader ? HEADER_HEIGHT_PT : 0;
  const footerH = template.showFooter ? FOOTER_HEIGHT_PT : 0;
  return estimatePageCount(
    rowHeights,
    geometry.contentHeight,
    headerH,
    footerH
  );
}

export function ExportPreview({
  result,
  sections,
  options,
  previewRef,
  pageCountTemplate,
}: ExportPreviewProps) {
  const { t } = useLocale();
  const template = getExportTemplate(options.template);
  const geometry = getPageGeometry(options.pageSize, options.orientation, options.margins);

  const pageCount = useMemo(
    () => estimatePreviewPageCount(result, sections, options),
    [result, sections, options]
  );

  // Page-break lines: usable content height per page, converted to the
  // preview's px scale (preview content width ↔ PDF content width).
  const breakLines = useMemo(() => {
    const headerH = template.showBrandHeader ? HEADER_HEIGHT_PT : 0;
    const footerH = template.showFooter ? FOOTER_HEIGHT_PT : 0;
    const usablePt = geometry.contentHeight - headerH - footerH;
    // The preview node is rendered at ~1.333 px per pt (96 dpi).
    const usablePx = usablePt * (96 / 72);
    const lines: number[] = [];
    for (let i = 1; i < pageCount; i++) lines.push(i * usablePx);
    return lines;
  }, [geometry, template, pageCount]);

  const fontSize = options.fontSize;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-[#6E6E73] dark:text-[#94A3B8]">
        <span>{formatString(pageCountTemplate, { count: pageCount })}</span>
        <span>
          {options.pageSize.toUpperCase()} ·{' '}
          {options.orientation === 'portrait'
            ? t.export.orientationPortrait
            : t.export.orientationLandscape}
        </span>
      </div>
      <div className="relative overflow-hidden rounded-xl border border-[#E5E5EA] bg-white dark:border-[#243247] dark:bg-[#131D31]">
        <div
          ref={previewRef}
          className="export-print-node relative bg-white px-5 py-4 text-[#1D1D1F] dark:bg-[#131D31] dark:text-[#F1F5F9]"
          style={{ fontSize }}
        >
          {template.showBrandHeader && (
            <div className="mb-3 border-b border-[#E5E5EA] pb-2 dark:border-[#243247]">
              <div className="text-[15px] font-bold text-[#0E8A66] dark:text-[#34D399]">
                UtilityFlow
              </div>
              <div className="text-xs text-[#6E6E73] dark:text-[#94A3B8]">
                {result.toolName}
              </div>
            </div>
          )}
          {sections.map((section) => (
            <div key={section.heading} className="mb-3">
              <h4 className="mb-1.5 border-b border-[#E5E5EA] pb-1 text-[1.05em] font-bold text-[#0E8A66] dark:border-[#243247] dark:text-[#34D399]">
                {section.heading}
              </h4>
              <dl
                className={template.dense ? 'space-y-1' : 'space-y-1.5'}
              >
                {section.fields.map((field, i) => (
                  <div
                    key={`${field.label}-${i}`}
                    className="grid grid-cols-[minmax(0,35%)_1fr] gap-3"
                  >
                    <dt className="font-semibold break-words">{field.label}</dt>
                    <dd
                      className={`break-words whitespace-pre-wrap ${
                        field.mono ? 'font-mono text-[0.92em]' : ''
                      }`}
                    >
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          {result.metadata && (
            <p className="mt-2 text-[0.92em] text-[#6E6E73] dark:text-[#94A3B8]">
              {result.metadata}
            </p>
          )}
          {template.showFooter && (
            <div className="mt-3 flex items-center justify-between border-t border-[#E5E5EA] pt-1.5 text-[11px] text-[#86868B] dark:border-[#243247] dark:text-[#94A3B8]">
              <span>
                {getSiteOrigin()}/{result.toolSlug}/
              </span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          )}
        </div>
        {/* Live page-break lines (preview only — outside the captured node,
            so they are never baked into a PNG/JPG export). */}
        {breakLines.map((top, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 border-t border-dashed border-[#0E8A66]/50"
            style={{ top }}
            data-export-break-line="true"
          />
        ))}
      </div>
    </div>
  );
}
