import { Download, ImagePlus, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatBytes } from '../pdf/pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    selectImages: 'Select One or Multiple Images to Convert',
    imagesLoaded: '{n} image(s) loaded — Click to add or replace',
    batchNote: 'Batch convert PNG, JPG, WebP, SVG, or GIF to PNG, JPG, or WebP locally',
    convertToLabel: 'Convert To Format',
    pngOption: 'PNG (.png — preserves transparency)',
    qualityLabel: 'Lossy Quality: ',
    lossless: 'Lossless',
    alphaFillLabel: 'Alpha Fill',
    converting: 'Converting...',
    reconvert: 'Re-convert',
    selectFilesError: 'Select one or more image files (PNG, JPG, WebP, SVG, GIF).',
    couldNotDecode: 'Could not decode "{name}".',
    canvasUnavailable: 'Canvas 2D unavailable.',
    conversionFailed: 'Conversion failed for "{name}".',
    batchFailed: 'Batch image conversion failed.',
    downloadExt: 'Download .{ext}',
  },
  es: {
    selectImages: 'Selecciona una o varias imágenes para convertir',
    imagesLoaded: '{n} imagen(es) cargada(s): haz clic para agregar o reemplazar',
    batchNote: 'Convierte por lotes PNG, JPG, WebP, SVG o GIF a PNG, JPG o WebP localmente',
    convertToLabel: 'Convertir a formato',
    pngOption: 'PNG (.png: conserva la transparencia)',
    qualityLabel: 'Calidad con pérdida: ',
    lossless: 'Sin pérdida',
    alphaFillLabel: 'Relleno alfa',
    converting: 'Convirtiendo...',
    reconvert: 'Volver a convertir',
    selectFilesError: 'Selecciona uno o más archivos de imagen (PNG, JPG, WebP, SVG, GIF).',
    couldNotDecode: 'No se pudo decodificar "{name}".',
    canvasUnavailable: 'Canvas 2D no disponible.',
    conversionFailed: 'La conversión falló para "{name}".',
    batchFailed: 'La conversión por lotes de imágenes falló.',
    downloadExt: 'Descargar .{ext}',
  },
  pt: {
    selectImages: 'Selecione uma ou várias imagens para converter',
    imagesLoaded: '{n} imagem(ns) carregada(s) — clique para adicionar ou substituir',
    batchNote: 'Converta PNG, JPG, WebP, SVG ou GIF em PNG, JPG ou WebP em lote, localmente',
    convertToLabel: 'Converter para o formato',
    pngOption: 'PNG (.png — preserva a transparência)',
    qualityLabel: 'Qualidade com perda: ',
    lossless: 'Sem perda',
    alphaFillLabel: 'Preenchimento alfa',
    converting: 'Convertendo...',
    reconvert: 'Converter novamente',
    selectFilesError: 'Selecione um ou mais arquivos de imagem (PNG, JPG, WebP, SVG, GIF).',
    couldNotDecode: 'Não foi possível decodificar "{name}".',
    canvasUnavailable: 'Canvas 2D indisponível.',
    conversionFailed: 'Falha na conversão de "{name}".',
    batchFailed: 'Falha na conversão em lote das imagens.',
    downloadExt: 'Baixar .{ext}',
  },
  fr: {
    selectImages: 'Sélectionnez une ou plusieurs images à convertir',
    imagesLoaded: '{n} image(s) chargée(s) — cliquez pour ajouter ou remplacer',
    batchNote: 'Convertissez par lot des PNG, JPG, WebP, SVG ou GIF en PNG, JPG ou WebP localement',
    convertToLabel: 'Convertir au format',
    pngOption: 'PNG (.png — préserve la transparence)',
    qualityLabel: 'Qualité avec perte : ',
    lossless: 'Sans perte',
    alphaFillLabel: 'Remplissage alpha',
    converting: 'Conversion en cours...',
    reconvert: 'Reconvertir',
    selectFilesError: 'Sélectionnez un ou plusieurs fichiers image (PNG, JPG, WebP, SVG, GIF).',
    couldNotDecode: 'Impossible de décoder « {name} ».',
    canvasUnavailable: 'Canvas 2D indisponible.',
    conversionFailed: 'Échec de la conversion de « {name} ».',
    batchFailed: 'Échec de la conversion d\'images par lot.',
    downloadExt: 'Télécharger le .{ext}',
  },
};

type TargetMime = 'image/png' | 'image/jpeg' | 'image/webp';

interface ConvertedItem {
  id: number;
  originalName: string;
  originalSize: number;
  width: number;
  height: number;
  outputUrl: string;
  outputSize: number;
  ext: string;
}

export default function ImageFormatConverterTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [targetMime, setTargetMime] = useState<TargetMime>('image/webp');
  const [quality, setQuality] = useState(90);
  const [jpgFillColor, setJpgFillColor] = useState('#ffffff');
  const [items, setItems] = useState<ConvertedItem[]>([]);
  const [sourceFiles, setSourceFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => {
      items.forEach((it) => URL.revokeObjectURL(it.outputUrl));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convertBatch = async (files: File[], mime: TargetMime, qual: number, fillHex: string) => {
    if (files.length === 0) return;
    setError('');
    setIsConverting(true);

    const ext = mime === 'image/png' ? 'png' : mime === 'image/jpeg' ? 'jpg' : 'webp';
    const nextResults: ConvertedItem[] = [];

    try {
      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];
        const srcUrl = URL.createObjectURL(file);
        try {
          const img = await new Promise<HTMLImageElement>((resolve, reject) => {
            const el = new Image();
            el.onload = () => resolve(el);
            el.onerror = () => reject(new Error(s.couldNotDecode.replace('{name}', file.name)));
            el.src = srcUrl;
          });

          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error(s.canvasUnavailable);

          if (mime === 'image/jpeg') {
            ctx.fillStyle = fillHex;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          ctx.drawImage(img, 0, 0);

          const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, mime, mime === 'image/png' ? undefined : qual / 100)
          );
          if (!blob) throw new Error(s.conversionFailed.replace('{name}', file.name));

          nextResults.push({
            id: i + 1,
            originalName: file.name,
            originalSize: file.size,
            width: img.naturalWidth,
            height: img.naturalHeight,
            outputUrl: URL.createObjectURL(blob),
            outputSize: blob.size,
            ext,
          });
        } finally {
          URL.revokeObjectURL(srcUrl);
        }
      }

      setItems((prev) => {
        prev.forEach((it) => URL.revokeObjectURL(it.outputUrl));
        return nextResults;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : s.batchFailed);
    } finally {
      setIsConverting(false);
    }
  };

  const handleSelectFiles = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const valid = Array.from(fileList).filter((f) => f.type.startsWith('image/'));
    if (valid.length === 0) {
      setError(s.selectFilesError);
      return;
    }
    setSourceFiles(valid);
    await convertBatch(valid, targetMime, quality, jpgFillColor);
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="ifc-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <ImagePlus className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {sourceFiles.length > 0
            ? s.imagesLoaded.replace('{n}', String(sourceFiles.length))
            : s.selectImages}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.batchNote}
        </span>
        <input
          id="ifc-input"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            void handleSelectFiles(e.target.files);
            e.target.value = '';
          }}
          className="sr-only"
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <div>
          <label htmlFor="ifc-mime" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.convertToLabel}
          </label>
          <select
            id="ifc-mime"
            value={targetMime}
            onChange={(e) => setTargetMime(e.target.value as TargetMime)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="image/webp">WebP (.webp)</option>
            <option value="image/png">{s.pngOption}</option>
            <option value="image/jpeg">JPG (.jpg)</option>
          </select>
        </div>

        <div>
          <label htmlFor="ifc-q" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.qualityLabel}
            <span className="font-mono">{targetMime === 'image/png' ? s.lossless : `${quality}%`}</span>
          </label>
          <input
            id="ifc-q"
            type="range"
            min={20}
            max={100}
            step={5}
            disabled={targetMime === 'image/png'}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full accent-indigo-600 disabled:opacity-40"
          />
        </div>

        <div className="flex items-end gap-3">
          {targetMime === 'image/jpeg' && (
            <div>
              <label htmlFor="ifc-bg" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.alphaFillLabel}
              </label>
              <input
                id="ifc-bg"
                type="color"
                value={jpgFillColor}
                onChange={(e) => setJpgFillColor(e.target.value)}
                className="h-9 w-12 rounded border border-slate-300 p-1 cursor-pointer"
              />
            </div>
          )}
          <button
            type="button"
            disabled={sourceFiles.length === 0 || isConverting}
            onClick={() => void convertBatch(sourceFiles, targetMime, quality, jpgFillColor)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isConverting ? 'animate-spin' : ''}`} />
            {isConverting ? s.converting : s.reconvert}
          </button>
        </div>
      </div>

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {items.length > 0 && (
        <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {items.map((item) => {
            const base = item.originalName.replace(/\.[^.]+$/, '') || 'image';
            return (
              <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 p-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.outputUrl}
                    alt={item.originalName}
                    className="h-12 w-12 rounded-md border border-slate-200 object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 truncate">
                      {base}.{item.ext}
                    </div>
                    <div className="text-xs text-slate-500 font-mono tabular-nums">
                      {item.width}×{item.height} · {formatBytes(item.originalSize, locale)} → {formatBytes(item.outputSize, locale)}
                    </div>
                  </div>
                </div>
                <a
                  href={item.outputUrl}
                  download={`${base}.${item.ext}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                >
                  <Download className="w-3.5 h-3.5" />
                  {s.downloadExt.replace('{ext}', item.ext.toUpperCase())}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
