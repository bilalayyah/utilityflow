import { Download, ImagePlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatBytes } from '../pdf/pdfUtils';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    chooseImage: 'Choose an Image to Resize or Crop to Preset Dimensions',
    fileWithDims: '{name} (Original: {w} × {h} px)',
    supportsNote: 'Supports pixel resizing, aspect locking, and center-cropped social presets',
    selectImageError: 'Select a PNG, JPG, WebP, or GIF image.',
    unableToDecode: 'Unable to decode "{name}".',
    unableToRead: 'Unable to read image.',
    failedLoading: 'Failed loading image for resizing.',
    canvasUnavailable: 'Canvas 2D unavailable.',
    failedGenerating: 'Failed generating resized image.',
    resizeFailed: 'Resize failed.',
    quickPresets: 'Quick Presets:',
    presetOg: 'OG Share (1200×630)',
    presetYoutube: 'YouTube HD (1280×720)',
    presetSquare: 'Square (1080×1080)',
    presetAvatar: 'Avatar (512×512)',
    widthLabel: 'Width (px)',
    heightLabel: 'Height (px)',
    fitModeLabel: 'Aspect Fit Mode',
    coverCropOption: 'Center Cover Crop (No stretch)',
    exactOption: 'Scale Exact Dimensions',
    outputFormatLabel: 'Output Format',
    lockAspect: 'Lock original aspect ratio when typing dimensions',
    resizeButton: 'Resize to {w} × {h} px',
    readySummary: 'Ready: {w} × {h} px ({ext})',
    downloadResized: 'Download Resized .{ext}',
    previewAlt: 'Resized image output',
  };

type FitMode = 'contain-exact' | 'cover-crop';

const PRESETS = [
  { key: 'presetOg' as const, w: 1200, h: 630 },
  { key: 'presetYoutube' as const, w: 1280, h: 720 },
  { key: 'presetSquare' as const, w: 1080, h: 1080 },
  { key: 'presetAvatar' as const, w: 512, h: 512 },
];

export default function ImageResizerTool() {
  const { locale } = useLocale();
  const s = useComponentStrings('image-resizer', STRINGS_EN);
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [naturalDims, setNaturalDims] = useState<{ w: number; h: number } | null>(null);
  const [targetW, setTargetW] = useState(1200);
  const [targetH, setTargetH] = useState(630);
  const [lockAspect, setLockAspect] = useState(true);
  const [fitMode, setFitMode] = useState<FitMode>('cover-crop');
  const [outputMime, setOutputMime] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/png');

  const [previewUrl, setPreviewUrl] = useState('');
  const [outputSize, setOutputSize] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError(s.selectImageError);
      return;
    }
    setError('');
    const url = URL.createObjectURL(file);
    try {
      const dims = await new Promise<{ w: number; h: number }>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => reject(new Error(s.unableToDecode.replace('{name}', file.name)));
        img.src = url;
      });
      setSourceFile(file);
      setNaturalDims(dims);
      setTargetW(dims.w);
      setTargetH(dims.h);
      setPreviewUrl('');
    } catch (err) {
      setError(err instanceof Error ? err.message : s.unableToRead);
    } finally {
      URL.revokeObjectURL(url);
    }
  };

  const handleWidthChange = (nextW: number) => {
    const safeW = Math.max(1, Math.min(8000, nextW || 1));
    setTargetW(safeW);
    if (lockAspect && naturalDims) {
      setTargetH(Math.max(1, Math.round((safeW * naturalDims.h) / naturalDims.w)));
    }
  };

  const handleHeightChange = (nextH: number) => {
    const safeH = Math.max(1, Math.min(8000, nextH || 1));
    setTargetH(safeH);
    if (lockAspect && naturalDims) {
      setTargetW(Math.max(1, Math.round((safeH * naturalDims.w) / naturalDims.h)));
    }
  };

  const renderResized = async () => {
    if (!sourceFile) return;
    setError('');
    const srcUrl = URL.createObjectURL(sourceFile);
    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error(s.failedLoading));
        el.src = srcUrl;
      });

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error(s.canvasUnavailable);

      if (outputMime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetW, targetH);
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      if (fitMode === 'contain-exact') {
        ctx.drawImage(img, 0, 0, targetW, targetH);
      } else {
        // Center cover crop preserving source aspect ratio
        const srcRatio = img.naturalWidth / img.naturalHeight;
        const dstRatio = targetW / targetH;
        let sx = 0;
        let sy = 0;
        let sw = img.naturalWidth;
        let sh = img.naturalHeight;

        if (srcRatio > dstRatio) {
          sw = img.naturalHeight * dstRatio;
          sx = (img.naturalWidth - sw) / 2;
        } else {
          sh = img.naturalWidth / dstRatio;
          sy = (img.naturalHeight - sh) / 2;
        }
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetW, targetH);
      }

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, outputMime, 0.92)
      );
      if (!blob) throw new Error(s.failedGenerating);
      const nextUrl = URL.createObjectURL(blob);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return nextUrl;
      });
      setOutputSize(blob.size);
    } catch (err) {
      setError(err instanceof Error ? err.message : s.resizeFailed);
    } finally {
      URL.revokeObjectURL(srcUrl);
    }
  };

  const ext = outputMime === 'image/png' ? 'png' : outputMime === 'image/jpeg' ? 'jpg' : 'webp';
  const baseName = sourceFile?.name.replace(/\.[^.]+$/, '') || 'resized';

  return (
    <div className="space-y-6">
      <label
        htmlFor="img-res-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <ImagePlus className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {sourceFile && naturalDims
            ? s.fileWithDims
                .replace('{name}', sourceFile.name)
                .replace('{w}', String(naturalDims.w))
                .replace('{h}', String(naturalDims.h))
            : s.chooseImage}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.supportsNote}
        </span>
        <input
          id="img-res-input"
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">{s.quickPresets}</span>
            {PRESETS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => {
                  setLockAspect(false);
                  setTargetW(p.w);
                  setTargetH(p.h);
                }}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 cursor-pointer"
              >
                {s[p.key]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-end">
            <div>
              <label htmlFor="res-w" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.widthLabel}
              </label>
              <input
                id="res-w"
                type="number"
                min={1}
                max={8000}
                value={targetW}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="res-h" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.heightLabel}
              </label>
              <input
                id="res-h"
                type="number"
                min={1}
                max={8000}
                value={targetH}
                onChange={(e) => handleHeightChange(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="res-fit" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.fitModeLabel}
              </label>
              <select
                id="res-fit"
                value={fitMode}
                onChange={(e) => setFitMode(e.target.value as FitMode)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="cover-crop">{s.coverCropOption}</option>
                <option value="contain-exact">{s.exactOption}</option>
              </select>
            </div>

            <div>
              <label htmlFor="res-fmt" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.outputFormatLabel}
              </label>
              <select
                id="res-fmt"
                value={outputMime}
                onChange={(e) => setOutputMime(e.target.value as 'image/png' | 'image/jpeg' | 'image/webp')}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPG</option>
                <option value="image/webp">WebP</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={lockAspect}
                onChange={(e) => setLockAspect(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600"
              />
              {s.lockAspect}
            </label>

            <button
              type="button"
              onClick={() => void renderResized()}
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 cursor-pointer"
            >
              {s.resizeButton.replace('{w}', String(targetW)).replace('{h}', String(targetH))}
            </button>
          </div>

          {previewUrl && (
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={previewUrl}
                  alt={s.previewAlt}
                  className="h-20 w-28 rounded-lg border border-slate-200 bg-white object-contain shrink-0"
                />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-slate-900 tabular-nums">
                    {s.readySummary
                      .replace('{w}', String(targetW))
                      .replace('{h}', String(targetH))
                      .replace('{ext}', ext.toUpperCase())}
                  </div>
                  <div className="text-slate-600 font-mono tabular-nums">{formatBytes(outputSize, locale)}</div>
                </div>
              </div>

              <a
                href={previewUrl}
                download={`${baseName}-${targetW}x${targetH}.${ext}`}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 shrink-0"
              >
                <Download className="w-4 h-4" />
                {s.downloadResized.replace('{ext}', ext.toUpperCase())}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
