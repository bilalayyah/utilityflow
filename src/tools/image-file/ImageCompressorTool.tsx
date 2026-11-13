import { Download, ImagePlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatBytes } from '../pdf/pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    chooseImage: 'Choose an Image to Compress (PNG / JPG / WebP)',
    fileWithDims: '{name} ({w}×{h} · {size})',
    processedLocally: 'Processed locally via HTML5 Canvas · Never uploaded to remote servers',
    uploadImageError: 'Please upload a PNG, JPG, WebP, or GIF image file.',
    unableToDecode: 'Unable to decode "{name}".',
    canvasUnavailable: 'Canvas 2D context unavailable.',
    compressionFailed: 'Compression failed in browser canvas.',
    unableToCompress: 'Unable to compress image.',
    unableToRead: 'Unable to read "{name}".',
    invalidImage: 'Invalid image file.',
    outputFormatLabel: 'Output Format',
    webpOption: 'WebP (Smallest modern web size)',
    jpgOption: 'JPG (Broadest compatibility)',
    pngOption: 'PNG (Lossless transparency)',
    maxWidthLabel: 'Max Width Cap',
    keepOriginalWidth: 'Keep Original Width',
    max1920: 'Max 1920 px (Full HD)',
    max1280: 'Max 1280 px (Blog / Hero)',
    max800: 'Max 800 px (Thumbnails)',
    qualityLabel: 'Quality: ',
    losslessPng: 'Lossless PNG',
    originalLabel: 'Original',
    compressedLabel: 'Compressed',
    changeLabel: 'Change',
    outputSummary: 'Output: {w} × {h} px · {ext}',
    compressing: 'Compressing...',
    downloadExt: 'Download .{ext}',
    previewAlt: 'Compressed image preview',
  },
  es: {
    chooseImage: 'Elige una imagen para comprimir (PNG / JPG / WebP)',
    fileWithDims: '{name} ({w}×{h} · {size})',
    processedLocally: 'Se procesa localmente con HTML5 Canvas · Nunca se sube a servidores remotos',
    uploadImageError: 'Sube un archivo de imagen PNG, JPG, WebP o GIF.',
    unableToDecode: 'No se pudo decodificar "{name}".',
    canvasUnavailable: 'Contexto 2D de Canvas no disponible.',
    compressionFailed: 'La compresión falló en el lienzo del navegador.',
    unableToCompress: 'No se pudo comprimir la imagen.',
    unableToRead: 'No se pudo leer "{name}".',
    invalidImage: 'Archivo de imagen no válido.',
    outputFormatLabel: 'Formato de salida',
    webpOption: 'WebP (el tamaño web moderno más pequeño)',
    jpgOption: 'JPG (la mayor compatibilidad)',
    pngOption: 'PNG (transparencia sin pérdida)',
    maxWidthLabel: 'Límite máximo de ancho',
    keepOriginalWidth: 'Mantener el ancho original',
    max1920: 'Máx. 1920 px (Full HD)',
    max1280: 'Máx. 1280 px (blog / hero)',
    max800: 'Máx. 800 px (miniaturas)',
    qualityLabel: 'Calidad: ',
    losslessPng: 'PNG sin pérdida',
    originalLabel: 'Original',
    compressedLabel: 'Comprimida',
    changeLabel: 'Cambio',
    outputSummary: 'Salida: {w} × {h} px · {ext}',
    compressing: 'Comprimiendo...',
    downloadExt: 'Descargar .{ext}',
    previewAlt: 'Vista previa de la imagen comprimida',
  },
  pt: {
    chooseImage: 'Escolha uma imagem para comprimir (PNG / JPG / WebP)',
    fileWithDims: '{name} ({w}×{h} · {size})',
    processedLocally: 'Processado localmente via HTML5 Canvas · Nunca enviado para servidores remotos',
    uploadImageError: 'Envie um arquivo de imagem PNG, JPG, WebP ou GIF.',
    unableToDecode: 'Não foi possível decodificar "{name}".',
    canvasUnavailable: 'Contexto 2D do Canvas indisponível.',
    compressionFailed: 'A compressão falhou no canvas do navegador.',
    unableToCompress: 'Não foi possível comprimir a imagem.',
    unableToRead: 'Não foi possível ler "{name}".',
    invalidImage: 'Arquivo de imagem inválido.',
    outputFormatLabel: 'Formato de saída',
    webpOption: 'WebP (menor tamanho web moderno)',
    jpgOption: 'JPG (maior compatibilidade)',
    pngOption: 'PNG (transparência sem perda)',
    maxWidthLabel: 'Limite máximo de largura',
    keepOriginalWidth: 'Manter a largura original',
    max1920: 'Máx. 1920 px (Full HD)',
    max1280: 'Máx. 1280 px (blog / hero)',
    max800: 'Máx. 800 px (miniaturas)',
    qualityLabel: 'Qualidade: ',
    losslessPng: 'PNG sem perda',
    originalLabel: 'Original',
    compressedLabel: 'Comprimida',
    changeLabel: 'Alteração',
    outputSummary: 'Saída: {w} × {h} px · {ext}',
    compressing: 'Comprimindo...',
    downloadExt: 'Baixar .{ext}',
    previewAlt: 'Pré-visualização da imagem comprimida',
  },
  fr: {
    chooseImage: 'Choisissez une image à compresser (PNG / JPG / WebP)',
    fileWithDims: '{name} ({w}×{h} · {size})',
    processedLocally: 'Traitée localement via HTML5 Canvas · Jamais envoyée vers des serveurs distants',
    uploadImageError: 'Veuillez envoyer un fichier image PNG, JPG, WebP ou GIF.',
    unableToDecode: 'Impossible de décoder « {name} ».',
    canvasUnavailable: 'Contexte 2D du canvas indisponible.',
    compressionFailed: 'Échec de la compression dans le canvas du navigateur.',
    unableToCompress: 'Impossible de compresser l\'image.',
    unableToRead: 'Impossible de lire « {name} ».',
    invalidImage: 'Fichier image non valide.',
    outputFormatLabel: 'Format de sortie',
    webpOption: 'WebP (la plus petite taille web moderne)',
    jpgOption: 'JPG (compatibilité la plus large)',
    pngOption: 'PNG (transparence sans perte)',
    maxWidthLabel: 'Largeur maximale',
    keepOriginalWidth: 'Conserver la largeur d\'origine',
    max1920: 'Max 1920 px (Full HD)',
    max1280: 'Max 1280 px (blog / hero)',
    max800: 'Max 800 px (miniatures)',
    qualityLabel: 'Qualité : ',
    losslessPng: 'PNG sans perte',
    originalLabel: 'Original',
    compressedLabel: 'Compressée',
    changeLabel: 'Variation',
    outputSummary: 'Sortie : {w} × {h} px · {ext}',
    compressing: 'Compression en cours...',
    downloadExt: 'Télécharger le .{ext}',
    previewAlt: 'Aperçu de l\'image compressée',
  },
  de: {
    chooseImage: 'Bild zum Komprimieren auswählen (PNG / JPG / WebP)',
    fileWithDims: '{name} ({w}×{h} · {size})',
    processedLocally: 'Lokal verarbeitet via HTML5-Canvas · Niemals auf entfernte Server hochgeladen',
    uploadImageError: 'Bitte laden Sie eine PNG-, JPG-, WebP- oder GIF-Bilddatei hoch.',
    unableToDecode: '"{name}" konnte nicht decodiert werden.',
    canvasUnavailable: 'Canvas-2D-Kontext nicht verfügbar.',
    compressionFailed: 'Komprimierung im Browser-Canvas fehlgeschlagen.',
    unableToCompress: 'Bild konnte nicht komprimiert werden.',
    unableToRead: '"{name}" konnte nicht gelesen werden.',
    invalidImage: 'Ungültige Bilddatei.',
    outputFormatLabel: 'Ausgabeformat',
    webpOption: 'WebP (kleinste moderne Webgröße)',
    jpgOption: 'JPG (breiteste Kompatibilität)',
    pngOption: 'PNG (verlustfreie Transparenz)',
    maxWidthLabel: 'Maximale Breite',
    keepOriginalWidth: 'Originalbreite behalten',
    max1920: 'Max. 1920 px (Full HD)',
    max1280: 'Max. 1280 px (Blog / Hero)',
    max800: 'Max. 800 px (Miniaturansichten)',
    qualityLabel: 'Qualität: ',
    losslessPng: 'Verlustfreies PNG',
    originalLabel: 'Original',
    compressedLabel: 'Komprimiert',
    changeLabel: 'Änderung',
    outputSummary: 'Ausgabe: {w} × {h} px · {ext}',
    compressing: 'Wird komprimiert...',
    downloadExt: '.{ext} herunterladen',
    previewAlt: 'Vorschau des komprimierten Bildes',
  },
  it: {
    chooseImage: 'Scegli un file immagine da comprimere (PNG / JPG / WebP)',
    fileWithDims: '{name} ({w}×{h} · {size})',
    processedLocally: 'Elaborato in locale con HTML5 Canvas · Mai caricato su server remoti',
    uploadImageError: 'Carica un file immagine PNG, JPG, WebP o GIF.',
    unableToDecode: 'Impossibile decodificare "{name}".',
    canvasUnavailable: 'Contesto Canvas 2D non disponibile.',
    compressionFailed: 'Compressione non riuscita nel canvas del browser.',
    unableToCompress: 'Impossibile comprimere il file immagine.',
    unableToRead: 'Impossibile leggere "{name}".',
    invalidImage: 'File immagine non valido.',
    outputFormatLabel: 'Formato di output',
    webpOption: 'WebP (dimensione web moderna più piccola)',
    jpgOption: 'JPG (compatibilità più ampia)',
    pngOption: 'PNG (trasparenza senza perdita)',
    maxWidthLabel: 'Larghezza massima',
    keepOriginalWidth: 'Mantieni larghezza originale',
    max1920: 'Max 1920 px (Full HD)',
    max1280: 'Max 1280 px (Blog / Hero)',
    max800: 'Max 800 px (miniature)',
    qualityLabel: 'Qualità: ',
    losslessPng: 'PNG senza perdita',
    originalLabel: 'Originale',
    compressedLabel: 'Compressa',
    changeLabel: 'Variazione',
    outputSummary: 'Output: {w} × {h} px · {ext}',
    compressing: 'Compressione...',
    downloadExt: 'Scarica .{ext}',
    previewAlt: 'Anteprima del file immagine compresso',
  },
};

type OutputMime = 'image/webp' | 'image/jpeg' | 'image/png';

interface CompressedPreview {
  url: string;
  sizeBytes: number;
  width: number;
  height: number;
}

export default function ImageCompressorTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState('');
  const [sourceDims, setSourceDims] = useState<{ w: number; h: number } | null>(null);

  const [outputMime, setOutputMime] = useState<OutputMime>('image/webp');
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState<number>(0);

  const [compressed, setCompressed] = useState<CompressedPreview | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => {
      if (sourceUrl) URL.revokeObjectURL(sourceUrl);
      if (compressed?.url) URL.revokeObjectURL(compressed.url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runCompression = async (
    file: File,
    mime: OutputMime,
    qual: number,
    maxW: number
  ) => {
    setError('');
    setIsProcessing(true);
    const tmpUrl = URL.createObjectURL(file);

    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error(s.unableToDecode.replace('{name}', file.name)));
        el.src = tmpUrl;
      });

      const targetW = maxW > 0 && img.naturalWidth > maxW ? maxW : img.naturalWidth;
      const targetH = Math.round((img.naturalHeight * targetW) / img.naturalWidth);

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error(s.canvasUnavailable);

      if (mime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetW, targetH);
      }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, targetW, targetH);

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, mime, mime === 'image/png' ? undefined : qual / 100)
      );
      if (!blob) throw new Error(s.compressionFailed);

      const outUrl = URL.createObjectURL(blob);
      setCompressed((prev) => {
        if (prev?.url) URL.revokeObjectURL(prev.url);
        return { url: outUrl, sizeBytes: blob.size, width: targetW, height: targetH };
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : s.unableToCompress);
    } finally {
      URL.revokeObjectURL(tmpUrl);
      setIsProcessing(false);
    }
  };

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError(s.uploadImageError);
      return;
    }

    const nextSourceUrl = URL.createObjectURL(file);
    try {
      const dims = await new Promise<{ w: number; h: number }>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => reject(new Error(s.unableToRead.replace('{name}', file.name)));
        img.src = nextSourceUrl;
      });
      setSourceUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return nextSourceUrl;
      });
      setSourceFile(file);
      setSourceDims(dims);
      await runCompression(file, outputMime, quality, maxWidth);
    } catch (err) {
      URL.revokeObjectURL(nextSourceUrl);
      setError(err instanceof Error ? err.message : s.invalidImage);
    }
  };

  const ext = outputMime === 'image/webp' ? 'webp' : outputMime === 'image/jpeg' ? 'jpg' : 'png';
  const baseName = sourceFile?.name.replace(/\.[^.]+$/, '') || 'compressed-image';
  const savingsPct =
    sourceFile && compressed
      ? Math.round(((sourceFile.size - compressed.sizeBytes) / Math.max(1, sourceFile.size)) * 100)
      : 0;

  return (
    <div className="space-y-6">
      <label
        htmlFor="img-comp-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <ImagePlus className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {sourceFile
            ? s.fileWithDims
                .replace('{name}', sourceFile.name)
                .replace('{w}', String(sourceDims?.w))
                .replace('{h}', String(sourceDims?.h))
                .replace('{size}', formatBytes(sourceFile.size, locale))
            : s.chooseImage}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.processedLocally}
        </span>
        <input
          id="img-comp-input"
          type="file"
          accept="image/*"
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

      {sourceFile && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="comp-fmt" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.outputFormatLabel}
              </label>
              <select
                id="comp-fmt"
                value={outputMime}
                onChange={(e) => {
                  const next = e.target.value as OutputMime;
                  setOutputMime(next);
                  void runCompression(sourceFile, next, quality, maxWidth);
                }}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="image/webp">{s.webpOption}</option>
                <option value="image/jpeg">{s.jpgOption}</option>
                <option value="image/png">{s.pngOption}</option>
              </select>
            </div>

            <div>
              <label htmlFor="comp-maxw" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.maxWidthLabel}
              </label>
              <select
                id="comp-maxw"
                value={maxWidth}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  setMaxWidth(next);
                  void runCompression(sourceFile, outputMime, quality, next);
                }}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value={0}>{s.keepOriginalWidth}</option>
                <option value={1920}>{s.max1920}</option>
                <option value={1280}>{s.max1280}</option>
                <option value={800}>{s.max800}</option>
              </select>
            </div>

            <div>
              <label htmlFor="comp-q" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.qualityLabel}
                <span className="font-mono">{outputMime === 'image/png' ? s.losslessPng : `${quality}%`}</span>
              </label>
              <input
                id="comp-q"
                type="range"
                min={10}
                max={100}
                step={5}
                disabled={outputMime === 'image/png'}
                value={quality}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  setQuality(next);
                  void runCompression(sourceFile, outputMime, next, maxWidth);
                }}
                className="w-full accent-indigo-600 disabled:opacity-40"
              />
            </div>
          </div>

          {compressed && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="lg:col-span-5 aspect-video rounded-lg border border-slate-200 bg-white overflow-hidden flex items-center justify-center p-2">
                <img
                  src={compressed.url}
                  alt={s.previewAlt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <dl className="grid grid-cols-3 gap-3 tabular-nums">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="text-xs text-slate-500">{s.originalLabel}</dt>
                    <dd className="mt-1 font-mono text-sm font-bold text-slate-900">
                      {formatBytes(sourceFile.size, locale)}
                    </dd>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="text-xs text-slate-500">{s.compressedLabel}</dt>
                    <dd className="mt-1 font-mono text-sm font-bold text-indigo-700">
                      {formatBytes(compressed.sizeBytes, locale)}
                    </dd>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="text-xs text-slate-500">{s.changeLabel}</dt>
                    <dd
                      className={`mt-1 font-mono text-sm font-bold ${
                        savingsPct > 0 ? 'text-emerald-700' : 'text-amber-700'
                      }`}
                    >
                      {savingsPct >= 0 ? `-${savingsPct}%` : `+${Math.abs(savingsPct)}%`}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-600 font-mono tabular-nums">
                    {s.outputSummary
                      .replace('{w}', String(compressed.width))
                      .replace('{h}', String(compressed.height))
                      .replace('{ext}', ext.toUpperCase())}
                  </span>

                  <a
                    href={compressed.url}
                    download={`${baseName}-compressed.${ext}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    <Download className="w-4 h-4" />
                    {isProcessing ? s.compressing : s.downloadExt.replace('{ext}', ext.toUpperCase())}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
