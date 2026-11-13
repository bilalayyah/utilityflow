import { Download, FileUp, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import {
  formatBytes,
  formatFriendlyPdfError,
  parsePageRanges,
  pdfjsLib,
  readValidatedPdfBytes,
} from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errBatch: 'Render up to 20 pages per batch to keep browser canvas memory fast and responsive.',
    errCanvas: 'Canvas 2D context unavailable.',
    dropTitleEmpty: 'Choose a PDF to Render as Images',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
    dropSub: 'Rendered locally via PDF.js canvas · PNG or JPG output',
    labelRange: 'Pages (“all” or range like 1-4, 6)',
    labelFormat: 'Image Format',
    optPng: 'PNG (Lossless / Crisp Text)',
    optJpg: 'JPG (Compact Photo Friendly)',
    labelScale: 'Render Resolution',
    optScale1: '1.0× (72 DPI Fast Preview)',
    optScale15: '1.5× (108 DPI Standard)',
    optScale2: '2.0× (144 DPI Sharp)',
    rendering: 'Rendering PDF Pages...',
    renderBtn: 'Render PDF Pages to Images',
    pageAlt: (n: number) => `Page ${n} preview`,
    pageLabel: (n: number, w: number, h: number) => `Page ${n} · ${w}×${h}`,
  },
  es: {
    errBatch: 'Renderice hasta 20 páginas por lote para mantener rápida y fluida la memoria del lienzo del navegador.',
    errCanvas: 'El contexto 2D del lienzo no está disponible.',
    dropTitleEmpty: 'Elija un PDF para convertir en imágenes',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
    dropSub: 'Renderizado localmente con el lienzo de PDF.js · Salida PNG o JPG',
    labelRange: 'Páginas («all» o un rango como 1-4, 6)',
    labelFormat: 'Formato de imagen',
    optPng: 'PNG (sin pérdida / texto nítido)',
    optJpg: 'JPG (compacto, ideal para fotos)',
    labelScale: 'Resolución de renderizado',
    optScale1: '1.0× (72 DPI, vista previa rápida)',
    optScale15: '1.5× (108 DPI, estándar)',
    optScale2: '2.0× (144 DPI, nítido)',
    rendering: 'Renderizando páginas del PDF...',
    renderBtn: 'Renderizar páginas del PDF como imágenes',
    pageAlt: (n: number) => `Vista previa de la página ${n}`,
    pageLabel: (n: number, w: number, h: number) => `Página ${n} · ${w}×${h}`,
  },
  pt: {
    errBatch: 'Renderize até 20 páginas por lote para manter a memória do canvas do navegador rápida e responsiva.',
    errCanvas: 'Contexto 2D do canvas indisponível.',
    dropTitleEmpty: 'Escolha um PDF para renderizar como imagens',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
    dropSub: 'Renderizado localmente via canvas do PDF.js · Saída PNG ou JPG',
    labelRange: 'Páginas ("all" ou intervalo como 1-4, 6)',
    labelFormat: 'Formato de imagem',
    optPng: 'PNG (sem perdas / texto nítido)',
    optJpg: 'JPG (compacto, ideal para fotos)',
    labelScale: 'Resolução de renderização',
    optScale1: '1.0× (72 DPI, pré-visualização rápida)',
    optScale15: '1.5× (108 DPI, padrão)',
    optScale2: '2.0× (144 DPI, nítido)',
    rendering: 'Renderizando páginas do PDF...',
    renderBtn: 'Renderizar páginas do PDF como imagens',
    pageAlt: (n: number) => `Pré-visualização da página ${n}`,
    pageLabel: (n: number, w: number, h: number) => `Página ${n} · ${w}×${h}`,
  },
  fr: {
    errBatch: 'Rendez jusqu’à 20 pages par lot pour garder la mémoire du canvas du navigateur rapide et réactive.',
    errCanvas: 'Contexte 2D du canvas indisponible.',
    dropTitleEmpty: 'Choisissez un PDF à rendre sous forme d’images',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
    dropSub: 'Rendu localement via le canvas PDF.js · Sortie PNG ou JPG',
    labelRange: 'Pages (« all » ou plage comme 1-4, 6)',
    labelFormat: 'Format d’image',
    optPng: 'PNG (sans perte / texte net)',
    optJpg: 'JPG (compact, idéal pour les photos)',
    labelScale: 'Résolution de rendu',
    optScale1: '1.0× (72 DPI, aperçu rapide)',
    optScale15: '1.5× (108 DPI, standard)',
    optScale2: '2.0× (144 DPI, net)',
    rendering: 'Rendu des pages du PDF...',
    renderBtn: 'Rendre les pages du PDF en images',
    pageAlt: (n: number) => `Aperçu de la page ${n}`,
    pageLabel: (n: number, w: number, h: number) => `Page ${n} · ${w}×${h}`,
  },
};

interface RenderedPage {
  pageNumber: number;
  dataUrl: string;
  width: number;
  height: number;
}

export default function PdfToImagesTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
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
      const bytes = await readValidatedPdfBytes(file, locale);
      const loadingTask = pdfjsLib.getDocument({ data: bytes.slice() });
      const pdf = await loadingTask.promise;
      setPdfBytes(bytes);
      setFileName(file.name);
      setPageCount(pdf.numPages);
      setRangeInput(pdf.numPages > 10 ? '1-10' : 'all');
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name, locale));
    }
  };

  const handleRenderPages = async () => {
    if (!pdfBytes || pageCount === 0) return;
    setError('');
    setRendered([]);

    const parsed = parsePageRanges(rangeInput, pageCount, locale);
    if (parsed.error) {
      setError(parsed.error);
      return;
    }
    if (parsed.indices.length > 20) {
      setError(s.errBatch);
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
        if (!ctx) throw new Error(s.errCanvas);

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
      setError(formatFriendlyPdfError(err, fileName, locale));
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
          {fileName ? s.dropTitleFile(fileName, pageCount, formatBytes(pdfBytes?.byteLength ?? 0, locale)) : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
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
                {s.labelRange}
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
                {s.labelFormat}
              </label>
              <select
                id="pdf2img-fmt"
                value={format}
                onChange={(e) => setFormat(e.target.value as 'image/png' | 'image/jpeg')}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="image/png">{s.optPng}</option>
                <option value="image/jpeg">{s.optJpg}</option>
              </select>
            </div>

            <div>
              <label htmlFor="pdf2img-scale" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelScale}
              </label>
              <select
                id="pdf2img-scale"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value={1}>{s.optScale1}</option>
                <option value={1.5}>{s.optScale15}</option>
                <option value={2}>{s.optScale2}</option>
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
            {isRendering ? s.rendering : s.renderBtn}
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
                  alt={s.pageAlt(item.pageNumber)}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-slate-900 tabular-nums">
                  {s.pageLabel(item.pageNumber, item.width, item.height)}
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
