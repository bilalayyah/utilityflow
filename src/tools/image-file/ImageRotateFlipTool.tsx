import { Download, FlipHorizontal2, FlipVertical2, ImagePlus, RotateCcw, RotateCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { formatBytes } from '../pdf/pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    chooseImage: 'Choose an Image to Rotate, Flip, or Filter',
    loadedReplace: '{name} (Click to replace)',
    previewNote: 'Real-time HTML5 Canvas preview & pixel export',
    selectImageError: 'Please select a PNG, JPG, WebP, or GIF image.',
    failedLoading: 'Failed loading "{name}".',
    rotateLeft: 'Rotate 90° Left',
    rotateRight: 'Rotate 90° Right',
    flipHorizontal: 'Flip Horizontal',
    flipVertical: 'Flip Vertical',
    brightnessLabel: 'Brightness: ',
    contrastLabel: 'Contrast: ',
    grayscaleLabel: 'Black & White (Grayscale)',
    resetAll: 'Reset all',
    exportFormatLabel: 'Export Format',
    livePreview: 'Live Canvas Preview',
  },
  es: {
    chooseImage: 'Elige una imagen para girar, voltear o aplicar filtros',
    loadedReplace: '{name} (haz clic para reemplazar)',
    previewNote: 'Vista previa en tiempo real con HTML5 Canvas y exportación por píxeles',
    selectImageError: 'Selecciona una imagen PNG, JPG, WebP o GIF.',
    failedLoading: 'No se pudo cargar "{name}".',
    rotateLeft: 'Girar 90° a la izquierda',
    rotateRight: 'Girar 90° a la derecha',
    flipHorizontal: 'Voltear horizontalmente',
    flipVertical: 'Voltear verticalmente',
    brightnessLabel: 'Brillo: ',
    contrastLabel: 'Contraste: ',
    grayscaleLabel: 'Blanco y negro (escala de grises)',
    resetAll: 'Restablecer todo',
    exportFormatLabel: 'Formato de exportación',
    livePreview: 'Vista previa en vivo del lienzo',
  },
  pt: {
    chooseImage: 'Escolha uma imagem para girar, inverter ou aplicar filtros',
    loadedReplace: '{name} (clique para substituir)',
    previewNote: 'Pré-visualização em tempo real com HTML5 Canvas e exportação de pixels',
    selectImageError: 'Selecione uma imagem PNG, JPG, WebP ou GIF.',
    failedLoading: 'Não foi possível carregar "{name}".',
    rotateLeft: 'Girar 90° para a esquerda',
    rotateRight: 'Girar 90° para a direita',
    flipHorizontal: 'Inverter horizontalmente',
    flipVertical: 'Inverter verticalmente',
    brightnessLabel: 'Brilho: ',
    contrastLabel: 'Contraste: ',
    grayscaleLabel: 'Preto e branco (tons de cinza)',
    resetAll: 'Redefinir tudo',
    exportFormatLabel: 'Formato de exportação',
    livePreview: 'Pré-visualização ao vivo do Canvas',
  },
  fr: {
    chooseImage: 'Choisissez une image à faire pivoter, retourner ou filtrer',
    loadedReplace: '{name} (cliquez pour remplacer)',
    previewNote: 'Aperçu en temps réel avec HTML5 Canvas et exportation des pixels',
    selectImageError: 'Veuillez sélectionner une image PNG, JPG, WebP ou GIF.',
    failedLoading: 'Échec du chargement de « {name} ».',
    rotateLeft: 'Pivoter de 90° vers la gauche',
    rotateRight: 'Pivoter de 90° vers la droite',
    flipHorizontal: 'Retourner horizontalement',
    flipVertical: 'Retourner verticalement',
    brightnessLabel: 'Luminosité : ',
    contrastLabel: 'Contraste : ',
    grayscaleLabel: 'Noir et blanc (niveaux de gris)',
    resetAll: 'Tout réinitialiser',
    exportFormatLabel: 'Format d\'exportation',
    livePreview: 'Aperçu en direct du canvas',
  },
  de: {
    chooseImage: 'Bild zum Drehen, Spiegeln oder Filtern auswählen',
    loadedReplace: '{name} (zum Ersetzen klicken)',
    previewNote: 'Echtzeit-HTML5-Canvas-Vorschau & Pixel-Export',
    selectImageError: 'Bitte wählen Sie ein PNG-, JPG-, WebP- oder GIF-Bild aus.',
    failedLoading: '"{name}" konnte nicht geladen werden.',
    rotateLeft: '90° nach links drehen',
    rotateRight: '90° nach rechts drehen',
    flipHorizontal: 'Horizontal spiegeln',
    flipVertical: 'Vertikal spiegeln',
    brightnessLabel: 'Helligkeit: ',
    contrastLabel: 'Kontrast: ',
    grayscaleLabel: 'Schwarz-Weiß (Graustufen)',
    resetAll: 'Alles zurücksetzen',
    exportFormatLabel: 'Exportformat',
    livePreview: 'Live-Canvas-Vorschau',
  },
  it: {
    chooseImage: 'Scegli un file immagine da ruotare, capovolgere o filtrare',
    loadedReplace: '{name} (fai clic per sostituire)',
    previewNote: 'Anteprima HTML5 Canvas in tempo reale ed esportazione pixel',
    selectImageError: 'Seleziona un file immagine PNG, JPG, WebP o GIF.',
    failedLoading: 'Caricamento di "{name}" non riuscito.',
    rotateLeft: 'Ruota di 90° a sinistra',
    rotateRight: 'Ruota di 90° a destra',
    flipHorizontal: 'Capovolgi orizzontalmente',
    flipVertical: 'Capovolgi verticalmente',
    brightnessLabel: 'Luminosità: ',
    contrastLabel: 'Contrasto: ',
    grayscaleLabel: 'Bianco e nero (scala di grigi)',
    resetAll: 'Reimposta tutto',
    exportFormatLabel: 'Formato di esportazione',
    livePreview: 'Anteprima canvas in tempo reale',
  },
};

export default function ImageRotateFlipTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState<0 | 90 | 180 | 270>(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [outputMime, setOutputMime] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/png');

  const [downloadUrl, setDownloadUrl] = useState('');
  const [outputSize, setOutputSize] = useState(0);
  const [outputDims, setOutputDims] = useState<{ w: number; h: number } | null>(null);
  const [error, setError] = useState('');
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    return () => {
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    };
  }, [downloadUrl]);

  useEffect(() => {
    if (!sourceFile) return;
    let cancelled = false;
    const srcUrl = URL.createObjectURL(sourceFile);

    const img = new Image();
    img.onload = () => {
      if (cancelled) {
        URL.revokeObjectURL(srcUrl);
        return;
      }
      const swap = rotation === 90 || rotation === 270;
      const outW = swap ? img.naturalHeight : img.naturalWidth;
      const outH = swap ? img.naturalWidth : img.naturalHeight;

      const canvas = previewCanvasRef.current ?? document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(srcUrl);
        return;
      }

      if (outputMime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, outW, outH);
      } else {
        ctx.clearRect(0, 0, outW, outH);
      }

      ctx.save();
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)${grayscale ? ' grayscale(100%)' : ''}`;
      ctx.translate(outW / 2, outH / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
      ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
      ctx.restore();

      setOutputDims({ w: outW, h: outH });
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(srcUrl);
          if (cancelled || !blob) return;
          const nextUrl = URL.createObjectURL(blob);
          setDownloadUrl((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return nextUrl;
          });
          setOutputSize(blob.size);
        },
        outputMime,
        0.92
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(srcUrl);
      if (!cancelled) setError(s.failedLoading.replace('{name}', sourceFile.name));
    };
    img.src = srcUrl;

    return () => {
      cancelled = true;
    };
  }, [sourceFile, rotation, flipH, flipV, grayscale, brightness, contrast, outputMime, locale]);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError(s.selectImageError);
      return;
    }
    setError('');
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setGrayscale(false);
    setBrightness(100);
    setContrast(100);
    setSourceFile(file);
  };

  const ext = outputMime === 'image/png' ? 'png' : outputMime === 'image/jpeg' ? 'jpg' : 'webp';
  const baseName = sourceFile?.name.replace(/\.[^.]+$/, '') || 'edited-image';

  return (
    <div className="space-y-6">
      <label
        htmlFor="irf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <ImagePlus className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {sourceFile ? s.loadedReplace.replace('{name}', sourceFile.name) : s.chooseImage}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.previewNote}
        </span>
        <input
          id="irf-input"
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleFile(e.target.files?.[0]);
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRotation(((rotation + 270) % 360) as 0 | 90 | 180 | 270)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                {s.rotateLeft}
              </button>
              <button
                type="button"
                onClick={() => setRotation(((rotation + 90) % 360) as 0 | 90 | 180 | 270)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                {s.rotateRight}
              </button>
              <button
                type="button"
                onClick={() => setFlipH(!flipH)}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold cursor-pointer ${
                  flipH ? 'border-indigo-600 bg-indigo-50 text-indigo-800' : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                <FlipHorizontal2 className="w-4 h-4" />
                {s.flipHorizontal}
              </button>
              <button
                type="button"
                onClick={() => setFlipV(!flipV)}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold cursor-pointer ${
                  flipV ? 'border-indigo-600 bg-indigo-50 text-indigo-800' : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                <FlipVertical2 className="w-4 h-4" />
                {s.flipVertical}
              </button>
            </div>

            <div>
              <label htmlFor="irf-bright" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.brightnessLabel}
                <span className="font-mono">{brightness}%</span>
              </label>
              <input
                id="irf-bright"
                type="range"
                min={50}
                max={160}
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="irf-cont" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.contrastLabel}
                <span className="font-mono">{contrast}%</span>
              </label>
              <input
                id="irf-cont"
                type="range"
                min={50}
                max={160}
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={grayscale}
                  onChange={(e) => setGrayscale(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600"
                />
                {s.grayscaleLabel}
              </label>

              <button
                type="button"
                onClick={() => {
                  setRotation(0);
                  setFlipH(false);
                  setFlipV(false);
                  setGrayscale(false);
                  setBrightness(100);
                  setContrast(100);
                }}
                className="text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                {s.resetAll}
              </button>
            </div>

            <div className="flex items-end gap-3 pt-2 border-t border-slate-200">
              <div className="flex-1">
                <label htmlFor="irf-fmt" className="block text-xs font-semibold text-slate-700 mb-1">
                  {s.exportFormatLabel}
                </label>
                <select
                  id="irf-fmt"
                  value={outputMime}
                  onChange={(e) => setOutputMime(e.target.value as 'image/png' | 'image/jpeg' | 'image/webp')}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                >
                  <option value="image/png">PNG</option>
                  <option value="image/jpeg">JPG</option>
                  <option value="image/webp">WebP</option>
                </select>
              </div>
              {downloadUrl && (
                <a
                  href={downloadUrl}
                  download={`${baseName}-edited.${ext}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Download className="w-4 h-4" />
                  {t.common.download}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-600 font-mono tabular-nums">
              <span>{s.livePreview} ({rotation}° · {flipH ? 'FlipH ' : ''}{flipV ? 'FlipV' : ''})</span>
              {outputDims && (
                <span>
                  {outputDims.w}×{outputDims.h} px · {formatBytes(outputSize, locale)}
                </span>
              )}
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-2 flex items-center justify-center max-h-96 overflow-hidden">
              <canvas ref={previewCanvasRef} className="max-h-88 max-w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
