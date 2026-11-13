import { FileUp, RotateCw } from 'lucide-react';
import { degrees, PDFDocument } from 'pdf-lib';
import { useState } from 'react';
import {
  formatBytes,
  formatFriendlyPdfError,
  parsePageRanges,
  PDF_STRINGS_EN,
  readValidatedPdfBytes,
  triggerPdfDownload,
} from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errNoMatch: 'No matching pages found to rotate.',
    rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
      `Rotated ${a} of ${b} pages by ${deg}° clockwise (${size}).`,
    dropTitleEmpty: 'Choose a PDF File to Rotate Pages',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropSub: 'Rotate all pages or specific page ranges locally without server uploads',
    labelAngle: 'Rotation Angle',
    opt90: '90° Clockwise (Right)',
    opt270: '90° Counter-Clockwise (Left / 270°)',
    opt180: '180° Upside Down',
    labelScope: 'Apply To',
    optAll: (n: number) => `All Pages (${n})`,
    optRange: 'Specific Page Ranges',
    optOdd: 'Odd Pages Only',
    optEven: 'Even Pages Only',
    labelRangeInput: (n: number) => `Page Numbers / Ranges (1–${n})`,
    phRange: 'e.g. 1, 3-5',
    rotating: 'Rotating Pages...',
    rotateBtn: 'Apply Rotation & Download PDF',
  };

type Scope = 'all' | 'range' | 'odd' | 'even';

export default function PdfPageRotatorTool() {
  const { locale } = useLocale();
  const s = useComponentStrings('pdf-page-rotator', STRINGS_EN);
  const pdfS = useComponentStrings('pdf-utils', PDF_STRINGS_EN);
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [rotationDelta, setRotationDelta] = useState<90 | 180 | 270>(90);
  const [scope, setScope] = useState<Scope>('all');
  const [rangeInput, setRangeInput] = useState('1');

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setStatusMessage('');

    try {
      const bytes = await readValidatedPdfBytes(file, pdfS);
      const doc = await PDFDocument.load(bytes);
      setPdfBytes(bytes);
      setFileName(file.name);
      setPageCount(doc.getPageCount());
      setRangeInput('1');
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name, pdfS));
    }
  };

  const handleRotate = async () => {
    if (!pdfBytes || pageCount === 0) return;
    setError('');
    setStatusMessage('');
    setIsProcessing(true);

    try {
      let targetIndices: number[] = [];
      if (scope === 'all') {
        targetIndices = Array.from({ length: pageCount }, (_, i) => i);
      } else if (scope === 'odd') {
        targetIndices = Array.from({ length: pageCount }, (_, i) => i).filter((i) => i % 2 === 0);
      } else if (scope === 'even') {
        targetIndices = Array.from({ length: pageCount }, (_, i) => i).filter((i) => i % 2 === 1);
      } else {
        const parsed = parsePageRanges(rangeInput, pageCount, pdfS);
        if (parsed.error) {
          setError(parsed.error);
          setIsProcessing(false);
          return;
        }
        targetIndices = parsed.indices;
      }

      if (targetIndices.length === 0) {
        setError(s.errNoMatch);
        setIsProcessing(false);
        return;
      }

      const doc = await PDFDocument.load(pdfBytes);
      const pages = doc.getPages();
      for (const idx of targetIndices) {
        const currentAngle = pages[idx].getRotation().angle;
        pages[idx].setRotation(degrees((currentAngle + rotationDelta) % 360));
      }

      const outBytes = await doc.save();
      const baseName = fileName.replace(/\.pdf$/i, '') || 'document';
      triggerPdfDownload(outBytes, `${baseName}-rotated.pdf`);
      setStatusMessage(
        s.rotatedSuccess(targetIndices.length, pageCount, rotationDelta, formatBytes(outBytes.byteLength, locale))
      );
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName, pdfS));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="rotate-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {fileName ? s.dropTitleFile(fileName, pageCount) : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="rotate-pdf-input"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="rot-angle" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelAngle}
              </label>
              <select
                id="rot-angle"
                value={rotationDelta}
                onChange={(e) => setRotationDelta(Number(e.target.value) as 90 | 180 | 270)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              >
                <option value={90}>{s.opt90}</option>
                <option value={270}>{s.opt270}</option>
                <option value={180}>{s.opt180}</option>
              </select>
            </div>

            <div>
              <label htmlFor="rot-scope" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelScope}
              </label>
              <select
                id="rot-scope"
                value={scope}
                onChange={(e) => setScope(e.target.value as Scope)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              >
                <option value="all">{s.optAll(pageCount)}</option>
                <option value="range">{s.optRange}</option>
                <option value="odd">{s.optOdd}</option>
                <option value="even">{s.optEven}</option>
              </select>
            </div>
          </div>

          {scope === 'range' && (
            <div>
              <label htmlFor="rot-range" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelRangeInput(pageCount)}
              </label>
              <input
                id="rot-range"
                type="text"
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                placeholder={s.phRange}
                className="w-full max-w-md rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
              />
            </div>
          )}

          <button
            type="button"
            disabled={isProcessing}
            onClick={() => void handleRotate()}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
          >
            <RotateCw className="w-4 h-4" />
            {isProcessing ? s.rotating : s.rotateBtn}
          </button>
        </div>
      )}
    </div>
  );
}
