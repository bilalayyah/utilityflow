import { AlertCircle, Download, FileUp } from 'lucide-react';
import { useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { formatBytes, formatFriendlyPdfError, PDF_STRINGS_EN, pdfjsLib, readValidatedPdfBytes } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    pageMarker: (n: number) => `--- Page ${n} ---`,
    dropExtracting: 'Extracting PDF text layer...',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropTitleEmpty: 'Choose a Text-Based PDF to Extract Text',
    dropSub: 'Extracts embedded Unicode text locally via PDF.js · Zero server upload',
    noTextTitle: 'No Selectable Text Layer Found:',
    noTextBody:
      'This PDF appears to contain scanned images or outlined vector paths rather than an embedded text layer. Client-side optical character recognition (OCR) is not performed offline.',
    markersLabelBefore: 'Include page header markers (',
    markersCode: '--- Page N ---',
    markersLabelAfter: ')',
    copyText: 'Copy Text',
    downloadTxt: 'Download .txt',
    outputAria: 'Extracted PDF text output',
    pagesScanned: 'Pages scanned:',
    wordsExtracted: 'Words extracted:',
    textSize: 'Text size:',
  };

export default function PdfTextExtractorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('pdf-text-extractor', STRINGS_EN);
  const pdfS = useComponentStrings('pdf-utils', PDF_STRINGS_EN);
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [extractedText, setExtractedText] = useState('');
  const [includePageMarkers, setIncludePageMarkers] = useState(true);
  const [rawPages, setRawPages] = useState<string[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [error, setError] = useState('');

  const buildOutput = (pages: string[], withMarkers: boolean) =>
    pages
      .map((content, idx) =>
        withMarkers ? `${s.pageMarker(idx + 1)}\n${content}` : content
      )
      .join('\n\n')
      .trim();

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setExtractedText('');
    setRawPages([]);
    setIsExtracting(true);

    try {
      const bytes = await readValidatedPdfBytes(file, pdfS);
      const pdf = await pdfjsLib.getDocument({ data: bytes.slice() }).promise;
      const pages: string[] = [];

      for (let i = 1; i <= pdf.numPages; i += 1) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const lineChunks: string[] = [];
        for (const item of textContent.items) {
          if ('str' in item) {
            lineChunks.push(item.str);
            if ('hasEOL' in item && item.hasEOL) {
              lineChunks.push('\n');
            } else {
              lineChunks.push(' ');
            }
          }
        }
        const cleaned = lineChunks
          .join('')
          .replace(/[ \t]+\n/g, '\n')
          .replace(/[ \t]{2,}/g, ' ')
          .trim();
        pages.push(cleaned);
      }

      setFileName(file.name);
      setPageCount(pdf.numPages);
      setRawPages(pages);
      setExtractedText(buildOutput(pages, includePageMarkers));
    } catch (err) {
      setError(formatFriendlyPdfError(err, file.name, pdfS));
    } finally {
      setIsExtracting(false);
    }
  };

  const toggleMarkers = (checked: boolean) => {
    setIncludePageMarkers(checked);
    setExtractedText(buildOutput(rawPages, checked));
  };

  const downloadTxt = () => {
    if (!extractedText) return;
    const blob = new Blob([extractedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName.replace(/\.pdf$/i, '') || 'extracted'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalNonMarkerChars = rawPages.join('').trim().length;
  const wordCount = extractedText.trim() ? extractedText.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-6">
      <label
        htmlFor="extract-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {isExtracting
            ? s.dropExtracting
            : fileName
            ? s.dropTitleFile(fileName, pageCount)
            : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="extract-pdf-input"
          type="file"
          accept="application/pdf,.pdf"
          onChange={(e) => {
            void handleFile(e.target.files?.[0]);
            e.target.value = '';
          }}
          className="sr-only"
        />
      </label>

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {fileName && totalNonMarkerChars === 0 && !isExtracting && !error && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
          <p>
            <strong>{s.noTextTitle}</strong> {s.noTextBody}
          </p>
        </div>
      )}

      {rawPages.length > 0 && totalNonMarkerChars > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={includePageMarkers}
                onChange={(e) => toggleMarkers(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600"
              />
              {s.markersLabelBefore}<code className="font-mono">{s.markersCode}</code>{s.markersLabelAfter}
            </label>

            <div className="flex items-center gap-2">
              <CopyButton text={extractedText} label={s.copyText} copiedLabel={t.common.copied} />
              <button
                type="button"
                onClick={downloadTxt}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {s.downloadTxt}
              </button>
            </div>
          </div>

          <textarea
            aria-label={s.outputAria}
            rows={12}
            readOnly
            value={extractedText}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 font-mono text-xs sm:text-sm leading-relaxed text-slate-900"
          />

          <div className="flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
            <span>{s.pagesScanned} <strong>{pageCount}</strong></span>
            <span>{s.wordsExtracted} <strong>{wordCount.toLocaleString(locale)}</strong></span>
            <span>{s.textSize} <strong>{formatBytes(new Blob([extractedText]).size, locale)}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
}
