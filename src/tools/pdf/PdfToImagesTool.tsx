import { Download, FileUp, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import {
  formatBytes,
  formatFriendlyPdfError,
  parsePageRanges,
  pdfjsLib,
  readValidatedPdfBytes,
} from './pdfUtils';

interface RenderedPage {
  pageNumber: number;
  dataUrl: string;
  width: number;
  height: number;
}

export default function PdfToImagesTool() {
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [rangeInput, setRangeInput] = useState('all');
  const [format, setFormat] = useState<'image/png' | 'image/jpeg'>('image/png');
  const [scale, setScale] = useState(1.5);

  const [rendered, setRendered] = useState<RenderedPage[]>([]);
  const [isRendering, setIsRendering] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setRendered([]);

    try {
      const bytes = await readValidatedPdfBytes(file);
      const loadingTask = pdfjsLib.getDocument({ data: bytes.slice() });
      const pdf = await loadingTask.promise;
      setPdfBytes(bytes);
      setFileName(file.name);
      setPageCount(pdf.numPages);
      setRangeInput(pdf.numPages > 10 ? '1-10' : 'all');
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name));
    }
  };

  const handleRenderPages = async () => {
    if (!pdfBytes || pageCount === 0) return;
    setError('');
    setRendered([]);

    const parsed = parsePageRanges(rangeInput, pageCount);
    if (parsed.error) {
      setError(parsed.error);
      return;
    }
    if (parsed.indices.length > 20) {
      setError('Render up to 20 pages per batch to keep browser canvas memory fast and responsive.');
      return;
    }

    setIsRendering(true);
    try {
      const loadingTask = pdfjsLib.getDocument({ data: pdfBytes.slice() });
      const pdf = await loadingTask.promise;
      const outputs: RenderedPage[] = [];

      for (const idx of parsed.indices) {
        const page = await pdf.getPage(idx + 1);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas 2D context unavailable.');

        if (format === 'image/jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        await page.render({ canvasContext: ctx, viewport, canvas }).promise;
        outputs.push({
          pageNumber: idx + 1,
          dataUrl: canvas.toDataURL(format, 0.92),
          width: canvas.width,
          height: canvas.height,
        });
      }

      setRendered(outputs);
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName));
    } finally {
      setIsRendering(false);
    }
  };

  const ext = format === 'image/png' ? 'png' : 'jpg';
  const baseName = fileName.replace(/\.pdf$/i, '') || 'page';

  return (
    <div className="space-y-6">
      <label
        htmlFor="pdf2img-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {fileName ? `${fileName} (${pageCount} pages · ${formatBytes(pdfBytes?.byteLength ?? 0)})` : 'Choose a PDF to Render as Images'}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          Rendered locally via PDF.js canvas · PNG or JPG output
        </span>
        <input
          id="pdf2img-input"
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

      {pdfBytes && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="pdf2img-range" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Pages (&ldquo;all&rdquo; or range like 1-4, 6)
              </label>
              <input
                id="pdf2img-range"
                type="text"
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
              />
            </div>

            <div>
              <label htmlFor="pdf2img-fmt" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Image Format
              </label>
              <select
                id="pdf2img-fmt"
                value={format}
                onChange={(e) => setFormat(e.target.value as 'image/png' | 'image/jpeg')}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="image/png">PNG (Lossless / Crisp Text)</option>
                <option value="image/jpeg">JPG (Compact Photo Friendly)</option>
              </select>
            </div>

            <div>
              <label htmlFor="pdf2img-scale" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Render Resolution
              </label>
              <select
                id="pdf2img-scale"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value={1}>1.0× (72 DPI Fast Preview)</option>
                <option value={1.5}>1.5× (108 DPI Standard)</option>
                <option value={2}>2.0× (144 DPI Sharp)</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            disabled={isRendering}
            onClick={() => void handleRenderPages()}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            {isRendering ? 'Rendering PDF Pages...' : 'Render PDF Pages to Images'}
          </button>
        </div>
      )}

      {rendered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {rendered.map((item) => (
            <div key={item.pageNumber} className="rounded-xl border border-slate-200 bg-white p-3 space-y-2.5">
              <div className="aspect-[3/4] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center">
                <img
                  src={item.dataUrl}
                  alt={`Page ${item.pageNumber} preview`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-slate-900 tabular-nums">
                  Page {item.pageNumber} · {item.width}×{item.height}
                </span>
                <a
                  href={item.dataUrl}
                  download={`${baseName}-page-${item.pageNumber}.${ext}`}
                  className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2.5 py-1.5 font-semibold text-indigo-700 hover:bg-indigo-100"
                >
                  <Download className="w-3.5 h-3.5" />
                  .{ext.toUpperCase()}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
