/**
 * Universal Result Export — public surface (Phase 1, foundation).
 *
 * The panel is imported per tool in Phase 2 (never in ToolPageLayout /
 * App / main). Nothing here statically imports html-to-image or pdf-lib:
 * the engine loads them only via dynamic import() inside click handlers,
 * so the export chunk stays split and costs 0 KB until a user exports.
 */
export { ResultExportPanel } from './ResultExportPanel';
export type { ResultExportPanelProps } from './ResultExportPanel';
export { ExportPreview, estimatePreviewPageCount } from './ExportPreview';
export type { ExportPreviewProps } from './ExportPreview';
export type {
  ExportField,
  ExportResult,
  ExportFormat,
  ExportPageSize,
  ExportOrientation,
  ExportTemplateId,
  ExportOptions,
  ExportPanelState,
} from './types';
export { DEFAULT_EXPORT_OPTIONS } from './types';
export {
  buildExportSections,
  isExportAllowed,
  renderExportText,
  needsRasterPdf,
  copyTextWithFallback,
  shareExport,
  downloadBlob,
  exportImage,
  exportPdf,
  rasterisePreview,
} from './exportEngine';
export type { ExportSection, PdfExportInput } from './exportEngine';
export {
  EXPORT_TEMPLATES,
  DEFAULT_EXPORT_TEMPLATE_ID,
  getExportTemplate,
} from './exportTemplates';
export type { ExportTemplate } from './exportTemplates';
export {
  defaultExportFilename,
  sanitizeFilename,
  sanitizeFilenameSegment,
  extensionForFormat,
} from './filename';
export type { ExportFileKind } from './filename';
export {
  PAGE_SIZES_PT,
  MARGINS_PT,
  getPageGeometry,
  wrapText,
  estimatePageCount,
} from './pdfLayout';
export type { PageGeometry } from './pdfLayout';
export {
  RECENT_RESULTS_OPT_IN_KEY,
  RECENT_RESULTS_KEY,
  MAX_RECENT_RESULTS,
  MAX_RECENT_SUMMARY_CHARS,
  readRecentResultsOptIn,
  setRecentResultsOptIn,
  readRecentResults,
  addRecentResult,
  deleteRecentResult,
  clearRecentResults,
  getSiteOrigin,
} from './recentResults';
export type { RecentResultItem } from './recentResults';
