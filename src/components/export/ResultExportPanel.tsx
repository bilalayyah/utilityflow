/**
 * ResultExportPanel — the shared export panel (Phase 1, foundation).
 *
 * Mounts inside a tool under its result area (Phase 2 mounts it per tool;
 * class-(b) file-producing tools do NOT mount it — they keep their own
 * download). Light shell: zero static imports of html-to-image / pdf-lib.
 * The engine loads only via dynamic import() inside the click handlers.
 *
 * State machine: idle → options → preview → generating → done | error.
 * Input/output checkboxes both default ON; both off disables every export
 * button + shows a localised explanation (never an empty file).
 *
 * Brand: emerald/pastel, minimal elegant UI, no bulky cards. Fonts follow
 * the site's live stack (Inter + JetBrains Mono — Plus Jakarta Sans /
 * DM Sans are not loaded by index.html, so they are not referenced here).
 *
 * Premium promo (Feature F): compact section below the results. The CTA
 * shows the honest inline message "Secure checkout is coming soon" — no
 * fake purchase, no server entitlement yet (Phase 4). Never shown when
 * `isPremium` is true. All users are free users today (default false).
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Check,
  ChevronDown,
  Copy,
  Download,
  Eye,
  FileText,
  Image as ImageIcon,
  Loader2,
  Printer,
  Share2,
  Sparkles,
  Trash2,
  TriangleAlert,
} from 'lucide-react';
import { useLocale } from '../../locales/LocaleContext';
import { PREMIUM_CONFIG } from '../../config/site';
import type {
  ExportFormat,
  ExportOptions,
  ExportPanelState,
  ExportResult,
} from './types';
import { DEFAULT_EXPORT_OPTIONS } from './types';
import { ExportPreview } from './ExportPreview';
import {
  buildExportSections,
  copyTextWithFallback,
  exportImage,
  exportPdf,
  isExportAllowed,
  needsRasterPdf,
  rasterisePreview,
  renderExportText,
  shareExport,
} from './exportEngine';
import { getExportTemplate } from './exportTemplates';
import {
  defaultExportFilename,
  sanitizeFilename,
  type ExportFileKind,
} from './filename';
import {
  addRecentResult,
  clearRecentResults,
  deleteRecentResult,
  readRecentResults,
  readRecentResultsOptIn,
  setRecentResultsOptIn,
  type RecentResultItem,
} from './recentResults';

export interface ResultExportPanelProps {
  result: ExportResult;
  /** File kind for the default filename (default: 'result'). */
  fileKind?: ExportFileKind;
  /**
   * True when the viewer is a verified premium customer — the promo is
   * never displayed then. Default false: no backend exists yet (Phase 4),
   * so every user is a free user today.
   */
  isPremium?: boolean;
  className?: string;
}

function extensionFor(format: ExportFormat): 'png' | 'jpg' | 'pdf' | null {
  if (format === 'png' || format === 'jpg' || format === 'pdf') return format;
  return null;
}

export function ResultExportPanel({
  result,
  fileKind = 'result',
  isPremium = false,
  className = '',
}: ResultExportPanelProps) {
  const { t } = useLocale();
  const strings = t.export;
  const previewRef = useRef<HTMLDivElement | null>(null);

  const [options, setOptions] = useState<ExportOptions>(() => ({
    ...DEFAULT_EXPORT_OPTIONS,
    filename: defaultExportFilename(result.toolSlug, fileKind, 'png'),
  }));
  const [panelState, setPanelState] = useState<ExportPanelState>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [showOptions, setShowOptions] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [promoMessageVisible, setPromoMessageVisible] = useState(false);
  const [recentOptIn, setRecentOptIn] = useState(false);
  const [recentItems, setRecentItems] = useState<RecentResultItem[]>([]);

  // Recent-results opt-in is browser-local; read it after mount (never at
  // module top level — prerender-safe, guarded like src/utils/consent.ts).
  useEffect(() => {
    const optedIn = readRecentResultsOptIn();
    setRecentOptIn(optedIn);
    if (optedIn) setRecentItems(readRecentResults());
  }, []);

  const sections = useMemo(
    () =>
      buildExportSections(
        result,
        options,
        t.toolPage.input,
        t.toolPage.output,
        strings.details
      ),
    [result, options, t.toolPage.input, t.toolPage.output, strings.preview]
  );

  const allowed = isExportAllowed(options);
  const template = getExportTemplate(options.template);

  const setOption = <K extends keyof ExportOptions>(
    key: K,
    value: ExportOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
    setPanelState((prev) => (prev === 'idle' ? 'options' : prev));
  };

  const setFormat = (format: ExportFormat) => {
    const ext = extensionFor(format);
    setOptions((prev) => ({
      ...prev,
      format,
      filename: ext
        ? sanitizeFilename(
            prev.filename,
            ext,
            defaultExportFilename(result.toolSlug, fileKind, ext)
          )
        : prev.filename,
    }));
  };

  /** Ensure the preview node exists before an engine call that needs it. */
  const ensurePreviewNode = async (): Promise<HTMLDivElement | null> => {
    if (previewRef.current) return previewRef.current;
    setShowPreview(true);
    setPanelState('preview');
    await new Promise((resolve) => window.setTimeout(resolve, 60));
    return previewRef.current;
  };

  const recordRecentResult = () => {
    if (!readRecentResultsOptIn()) return;
    const summary = result.output
      .map((field) => `${field.label}: ${field.value}`)
      .join(' · ');
    setRecentItems(
      addRecentResult({
        toolId: result.toolId,
        toolSlug: result.toolSlug,
        toolName: result.toolName,
        summary: summary || result.toolName,
      })
    );
  };

  const handleExport = async (format: ExportFormat) => {
    if (!allowed || panelState === 'generating') return;
    setPanelState('generating');
    setStatusMessage(strings.generating);
    try {
      const ext = extensionFor(format);
      const filename = ext
        ? sanitizeFilename(
            options.filename,
            ext,
            defaultExportFilename(result.toolSlug, fileKind, ext)
          )
        : options.filename;
      const opts = { ...options, format, filename };

      if (format === 'png' || format === 'jpg') {
        const node = await ensurePreviewNode();
        if (!node) throw new Error('Preview node unavailable');
        await exportImage(node, format, filename);
      } else if (format === 'pdf') {
        let rasterDataUrl: string | undefined;
        if (needsRasterPdf(sections)) {
          const node = await ensurePreviewNode();
          if (!node) throw new Error('Preview node unavailable');
          rasterDataUrl = await rasterisePreview(node);
        }
        await exportPdf({ result, sections, options: opts, rasterDataUrl });
      } else if (format === 'print') {
        await ensurePreviewNode();
        window.print();
      } else if (format === 'copy') {
        await copyTextWithFallback(renderExportText(result, sections));
        setStatusMessage(t.common.copied);
        setPanelState('done');
        recordRecentResult();
        return;
      } else if (format === 'share') {
        const outcome = await shareExport(
          result,
          renderExportText(result, sections)
        );
        setStatusMessage(
          outcome === 'shared' ? strings.shared : t.common.copied
        );
        setPanelState('done');
        recordRecentResult();
        return;
      }
      setStatusMessage(strings.done);
      setPanelState('done');
      recordRecentResult();
    } catch {
      setStatusMessage(strings.error);
      setPanelState('error');
    }
  };

  const handleRecentToggle = (enabled: boolean) => {
    setRecentResultsOptIn(enabled);
    setRecentOptIn(enabled);
    setRecentItems(enabled ? readRecentResults() : []);
  };

  const handleRecentDelete = (id: string) => {
    setRecentItems(deleteRecentResult(id));
  };

  const handleRecentClearAll = () => {
    clearRecentResults();
    setRecentItems([]);
  };

  const btnBase =
    'inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] disabled:cursor-not-allowed disabled:border-[#E5E5EA] disabled:bg-[#F5F5F7] disabled:text-[#86868B] dark:disabled:border-[#243247] dark:disabled:bg-[#182239] dark:disabled:text-[#94A3B8]';
  const btnDefault =
    'border-[#D2D2D7] bg-white text-[#1D1D1F] hover:border-[#0E8A66] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]';
  const btnPrimary =
    'border-[#0E8A66] bg-[#0E8A66] text-white hover:bg-[#0B7557] dark:border-[#34D399] dark:bg-[#10B981] dark:text-[#06281F] dark:hover:bg-[#34D399]';

  return (
    <section
      aria-label={strings.title}
      className={`mt-6 rounded-2xl border border-[#E5E5EA] bg-[#F8F5F0]/60 p-4 dark:border-[#243247] dark:bg-[#182239]/50 ${className}`}
    >
      {/* Print CSS: only the preview node prints — never the controls. */}
      <style>{`@media print { body * { visibility: hidden !important; } .export-print-node, .export-print-node * { visibility: visible !important; } .export-print-node { position: absolute !important; left: 0; top: 0; width: 100%; } }`}</style>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F1F5F9]">
          {strings.title}
        </h3>
        <button
          type="button"
          onClick={() => {
            setShowOptions((v) => !v);
            setPanelState((prev) =>
              prev === 'idle' ? 'options' : prev
            );
          }}
          aria-expanded={showOptions}
          className={`${btnBase} ${btnDefault}`}
        >
          {strings.options}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${showOptions ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Include input / output */}
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#1D1D1F] dark:text-[#F1F5F9]">
        <label className="inline-flex cursor-pointer items-center gap-1.5">
          <input
            type="checkbox"
            checked={options.includeInput}
            onChange={(e) => setOption('includeInput', e.target.checked)}
            className="h-4 w-4 accent-[#0E8A66]"
          />
          {strings.includeInput}
        </label>
        <label className="inline-flex cursor-pointer items-center gap-1.5">
          <input
            type="checkbox"
            checked={options.includeOutput}
            onChange={(e) => setOption('includeOutput', e.target.checked)}
            className="h-4 w-4 accent-[#0E8A66]"
          />
          {strings.includeOutput}
        </label>
      </div>
      {!allowed && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-[#B45309] dark:text-[#FBBF24]">
          <TriangleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {strings.selectAtLeastOne}
        </p>
      )}

      {/* Options */}
      {showOptions && (
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
          <label className="flex flex-col gap-1 text-[#6E6E73] dark:text-[#94A3B8]">
            {strings.pageSize}
            <select
              value={options.pageSize}
              onChange={(e) =>
                setOption('pageSize', e.target.value as ExportOptions['pageSize'])
              }
              className="rounded-lg border border-[#D2D2D7] bg-white px-2 py-1.5 text-[#1D1D1F] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9]"
            >
              <option value="a4">{strings.pageSizeA4}</option>
              <option value="letter">{strings.pageSizeLetter}</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-[#6E6E73] dark:text-[#94A3B8]">
            {strings.orientation}
            <select
              value={options.orientation}
              onChange={(e) =>
                setOption(
                  'orientation',
                  e.target.value as ExportOptions['orientation']
                )
              }
              className="rounded-lg border border-[#D2D2D7] bg-white px-2 py-1.5 text-[#1D1D1F] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9]"
            >
              <option value="portrait">{strings.orientationPortrait}</option>
              <option value="landscape">{strings.orientationLandscape}</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-[#6E6E73] dark:text-[#94A3B8]">
            {strings.fontSize}
            <select
              value={options.fontSize}
              onChange={(e) => setOption('fontSize', Number(e.target.value))}
              className="rounded-lg border border-[#D2D2D7] bg-white px-2 py-1.5 text-[#1D1D1F] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9]"
            >
              {[12, 14, 16, 18].map((size) => (
                <option key={size} value={size}>
                  {size}px
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-[#6E6E73] dark:text-[#94A3B8]">
            {strings.margins}
            <select
              value={options.margins}
              onChange={(e) =>
                setOption('margins', e.target.value as ExportOptions['margins'])
              }
              className="rounded-lg border border-[#D2D2D7] bg-white px-2 py-1.5 text-[#1D1D1F] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9]"
            >
              <option value="narrow">{strings.marginsNarrow}</option>
              <option value="normal">{strings.marginsNormal}</option>
              <option value="wide">{strings.marginsWide}</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-[#6E6E73] dark:text-[#94A3B8]">
            {strings.template}
            <select
              value={options.template}
              onChange={(e) =>
                setOption('template', e.target.value as ExportOptions['template'])
              }
              className="rounded-lg border border-[#D2D2D7] bg-white px-2 py-1.5 text-[#1D1D1F] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9]"
            >
              <option value="simple">{strings.templateSimple}</option>
              <option value="professional">{strings.templateProfessional}</option>
              <option value="compact">{strings.templateCompact}</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-[#6E6E73] dark:text-[#94A3B8]">
            {strings.filename}
            <input
              type="text"
              value={options.filename}
              onChange={(e) => setOption('filename', e.target.value)}
              onBlur={() =>
                setOptions((prev) => ({
                  ...prev,
                  filename: sanitizeFilename(
                    prev.filename,
                    extensionFor(prev.format) ?? 'png',
                    defaultExportFilename(
                      result.toolSlug,
                      fileKind,
                      extensionFor(prev.format) ?? 'png'
                    )
                  ),
                }))
              }
              className="rounded-lg border border-[#D2D2D7] bg-white px-2 py-1.5 font-mono text-xs text-[#1D1D1F] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9]"
            />
          </label>
        </div>
      )}
      {showOptions && (
        <p className="mt-2 text-xs text-[#6E6E73] dark:text-[#94A3B8]">
          {template.description}
        </p>
      )}

      {/* Export actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!allowed || panelState === 'generating'}
          onClick={() => {
            setFormat('png');
            void handleExport('png');
          }}
          className={`${btnBase} ${btnPrimary}`}
        >
          <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {strings.downloadPng}
        </button>
        <button
          type="button"
          disabled={!allowed || panelState === 'generating'}
          onClick={() => {
            setFormat('jpg');
            void handleExport('jpg');
          }}
          className={`${btnBase} ${btnDefault}`}
        >
          <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {strings.downloadJpg}
        </button>
        <button
          type="button"
          disabled={!allowed || panelState === 'generating'}
          onClick={() => {
            setFormat('pdf');
            void handleExport('pdf');
          }}
          className={`${btnBase} ${btnDefault}`}
        >
          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
          {strings.downloadPdf}
        </button>
        <button
          type="button"
          disabled={!allowed || panelState === 'generating'}
          onClick={() => void handleExport('print')}
          className={`${btnBase} ${btnDefault}`}
        >
          <Printer className="h-3.5 w-3.5" aria-hidden="true" />
          {strings.formatPrint}
        </button>
        <button
          type="button"
          disabled={!allowed || panelState === 'generating'}
          onClick={() => void handleExport('copy')}
          className={`${btnBase} ${btnDefault}`}
        >
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          {strings.formatCopy}
        </button>
        <button
          type="button"
          disabled={!allowed || panelState === 'generating'}
          onClick={() => void handleExport('share')}
          className={`${btnBase} ${btnDefault}`}
        >
          <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
          {strings.formatShare}
        </button>
        <button
          type="button"
          disabled={!allowed}
          onClick={() => {
            setShowPreview((v) => !v);
            setPanelState((prev) => (prev === 'idle' ? 'preview' : prev));
          }}
          aria-expanded={showPreview}
          className={`${btnBase} ${btnDefault}`}
        >
          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
          {strings.preview}
        </button>
      </div>

      {/* Status */}
      {panelState === 'generating' && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-[#6E6E73] dark:text-[#94A3B8]">
          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
          {statusMessage}
        </p>
      )}
      {panelState === 'done' && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-[#0B7A59] dark:text-[#34D399]">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          {statusMessage}
        </p>
      )}
      {panelState === 'error' && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-[#B91C1C] dark:text-[#F87171]">
          <TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />
          {statusMessage}
        </p>
      )}

      {/* Preview */}
      {showPreview && (
        <div className="mt-4">
          <ExportPreview
            result={result}
            sections={sections}
            options={options}
            previewRef={previewRef}
            pageCountTemplate={strings.pageCount}
          />
        </div>
      )}

      {/* Recent Results (Feature D) — OFF by default, explicit opt-in. */}
      <div className="mt-4 border-t border-[#E5E5EA] pt-3 dark:border-[#243247]">
        <label className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-[#1D1D1F] dark:text-[#F1F5F9]">
          <input
            type="checkbox"
            checked={recentOptIn}
            onChange={(e) => handleRecentToggle(e.target.checked)}
            className="h-4 w-4 accent-[#0E8A66]"
          />
          {strings.recentEnable}
        </label>
        <p className="mt-1 text-xs text-[#6E6E73] dark:text-[#94A3B8]">
          {strings.recentStorageNote}
        </p>
        {recentOptIn && (
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F1F5F9]">
                {strings.recentTitle}
              </span>
              {recentItems.length > 0 && (
                <button
                  type="button"
                  onClick={handleRecentClearAll}
                  className="inline-flex items-center gap-1 text-xs text-[#B91C1C] hover:underline dark:text-[#F87171]"
                >
                  <Trash2 className="h-3 w-3" aria-hidden="true" />
                  {strings.recentClearAll}
                </button>
              )}
            </div>
            {recentItems.length === 0 ? (
              <p className="mt-1 text-xs text-[#86868B] dark:text-[#94A3B8]">
                {strings.recentEmpty}
              </p>
            ) : (
              <ul className="mt-1 space-y-1">
                {recentItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-2 rounded-lg bg-white px-2 py-1.5 text-xs dark:bg-[#131D31]"
                  >
                    <span className="min-w-0">
                      <span className="font-medium text-[#1D1D1F] dark:text-[#F1F5F9]">
                        {item.toolName}
                      </span>{' '}
                      <span className="text-[#6E6E73] dark:text-[#94A3B8]">
                        {item.summary}
                      </span>
                    </span>
                    <span className="flex shrink-0 gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          void copyTextWithFallback(item.summary)
                        }
                        className="rounded p-1 text-[#0B7A59] hover:bg-[#E7F3EE] dark:text-[#34D399] dark:hover:bg-[rgba(16,185,129,.14)]"
                        aria-label={strings.formatCopy}
                      >
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRecentDelete(item.id)}
                        className="rounded p-1 text-[#B91C1C] hover:bg-[#FEE2E2] dark:text-[#F87171] dark:hover:bg-[rgba(248,113,113,.14)]"
                        aria-label={strings.recentDelete}
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Premium promo (Feature F) — never for verified premium customers. */}
      {!isPremium && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#BFE3D3] bg-[#E7F3EE] px-3 py-2.5 dark:border-[rgba(52,211,153,.35)] dark:bg-[rgba(16,185,129,.14)]">
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-[#0B7A59] dark:text-[#34D399]">
              <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
              {strings.promoTitle}
            </p>
            <p className="mt-0.5 text-xs text-[#1D1D1F]/80 dark:text-[#F1F5F9]/80">
              {strings.promoBody}{' '}
              <span className="font-medium">
                {PREMIUM_CONFIG.priceLabel} · {PREMIUM_CONFIG.label}
              </span>
            </p>
            {promoMessageVisible && (
              <p className="mt-1 text-xs font-medium text-[#0B7A59] dark:text-[#34D399]">
                {strings.promoComingSoon}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setPromoMessageVisible(true)}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#0E8A66] px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#0B7557] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] dark:bg-[#10B981] dark:text-[#06281F] dark:hover:bg-[#34D399]"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            {strings.promoCta}
          </button>
        </div>
      )}
    </section>
  );
}
