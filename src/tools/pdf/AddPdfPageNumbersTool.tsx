import { FileUp, Hash } from 'lucide-react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useState } from 'react';
import { formatBytes, formatFriendlyPdfError, readValidatedPdfBytes, triggerPdfDownload } from './pdfUtils';

type PositionOption = 'bottom-center' | 'bottom-right' | 'bottom-left' | 'top-right';
type FormatOption = 'page-of' | 'slash' | 'number-only';

export default function AddPdfPageNumbersTool() {
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);

  const [position, setPosition] = useState<PositionOption>('bottom-center');
  const [labelFormat, setLabelFormat] = useState<FormatOption>('page-of');
  const [startNumber, setStartNumber] = useState('1');
  const [fontSize, setFontSize] = useState(11);
  const [skipFirstPage, setSkipFirstPage] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setStatusMessage('');

    try {
      const bytes = await readValidatedPdfBytes(file);
      const doc = await PDFDocument.load(bytes);
      setPdfBytes(bytes);
      setFileName(file.name);
      setPageCount(doc.getPageCount());
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name));
    }
  };

  const handleApplyNumbers = async () => {
    if (!pdfBytes || pageCount === 0) return;
    const startVal = Number(startNumber);
    if (!Number.isInteger(startVal) || startVal < 1) {
      setError('Starting page number must be a whole number of 1 or higher.');
      return;
    }

    setError('');
    setStatusMessage('');
    setIsProcessing(true);

    try {
      const doc = await PDFDocument.load(pdfBytes);
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const pages = doc.getPages();
      const totalNumbered = skipFirstPage ? Math.max(1, pages.length - 1) : pages.length;
      const margin = 28;

      pages.forEach((page, index) => {
        if (skipFirstPage && index === 0) return;

        const currentNum = startVal + (skipFirstPage ? index - 1 : index);
        const totalNum = startVal + totalNumbered - 1;

        let text = `${currentNum}`;
        if (labelFormat === 'page-of') {
          text = `Page ${currentNum} of ${totalNum}`;
        } else if (labelFormat === 'slash') {
          text = `${currentNum} / ${totalNum}`;
        }

        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);

        let x = (width - textWidth) / 2;
        let y = margin;

        if (position === 'bottom-right') {
          x = width - textWidth - margin;
          y = margin;
        } else if (position === 'bottom-left') {
          x = margin;
          y = margin;
        } else if (position === 'top-right') {
          x = width - textWidth - margin;
          y = height - margin - fontSize;
        }

        page.drawText(text, {
          x: Math.max(12, x),
          y: Math.max(12, y),
          size: fontSize,
          font,
          color: rgb(0.22, 0.25, 0.32),
        });
      });

      const outBytes = await doc.save();
      const baseName = fileName.replace(/\.pdf$/i, '') || 'document';
      triggerPdfDownload(outBytes, `${baseName}-numbered.pdf`);
      setStatusMessage(
        `Stamped page numbers on ${skipFirstPage ? Math.max(0, pageCount - 1) : pageCount} page(s) (${formatBytes(outBytes.byteLength)}).`
      );
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="num-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {fileName ? `${fileName} (${pageCount} pages)` : 'Choose a PDF File to Add Page Numbers'}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          Inserts crisp vector page labels across reports, contracts, and packets
        </span>
        <input
          id="num-pdf-input"
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

      {statusMessage && (
        <div role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {statusMessage}
        </div>
      )}

      {pdfBytes && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="num-pos" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Position
              </label>
              <select
                id="num-pos"
                value={position}
                onChange={(e) => setPosition(e.target.value as PositionOption)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="bottom-center">Bottom Center</option>
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="top-right">Top Right</option>
              </select>
            </div>

            <div>
              <label htmlFor="num-fmt" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Label Format
              </label>
              <select
                id="num-fmt"
                value={labelFormat}
                onChange={(e) => setLabelFormat(e.target.value as FormatOption)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="page-of">Page 1 of N</option>
                <option value="slash">1 / N</option>
                <option value="number-only">1, 2, 3...</option>
              </select>
            </div>

            <div>
              <label htmlFor="num-start" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Start Number
              </label>
              <input
                id="num-start"
                type="number"
                min={1}
                value={startNumber}
                onChange={(e) => setStartNumber(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="num-size" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Font Size (pt)
              </label>
              <select
                id="num-size"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value={9}>9 pt (Subtle)</option>
                <option value={11}>11 pt (Standard)</option>
                <option value={14}>14 pt (Large)</option>
              </select>
            </div>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={skipFirstPage}
              onChange={(e) => setSkipFirstPage(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            Skip cover page (start numbering on page 2)
          </label>

          <div>
            <button
              type="button"
              disabled={isProcessing}
              onClick={() => void handleApplyNumbers()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
            >
              <Hash className="w-4 h-4" />
              {isProcessing ? 'Numbering Pages...' : 'Add Page Numbers & Download'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
