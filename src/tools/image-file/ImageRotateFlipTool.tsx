import { Download, FlipHorizontal2, FlipVertical2, ImagePlus, RotateCcw, RotateCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { formatBytes } from '../pdf/pdfUtils';

export default function ImageRotateFlipTool() {
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
      if (!cancelled) setError(`Failed loading "${sourceFile.name}".`);
    };
    img.src = srcUrl;

    return () => {
      cancelled = true;
    };
  }, [sourceFile, rotation, flipH, flipV, grayscale, brightness, contrast, outputMime]);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please select a PNG, JPG, WebP, or GIF image.');
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
          {sourceFile ? `${sourceFile.name} (Click to replace)` : 'Choose an Image to Rotate, Flip, or Filter'}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          Real-time HTML5 Canvas preview &amp; pixel export
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
                Rotate 90° Left
              </button>
              <button
                type="button"
                onClick={() => setRotation(((rotation + 90) % 360) as 0 | 90 | 180 | 270)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                Rotate 90° Right
              </button>
              <button
                type="button"
                onClick={() => setFlipH(!flipH)}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold cursor-pointer ${
                  flipH ? 'border-indigo-600 bg-indigo-50 text-indigo-800' : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                <FlipHorizontal2 className="w-4 h-4" />
                Flip Horizontal
              </button>
              <button
                type="button"
                onClick={() => setFlipV(!flipV)}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold cursor-pointer ${
                  flipV ? 'border-indigo-600 bg-indigo-50 text-indigo-800' : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                <FlipVertical2 className="w-4 h-4" />
                Flip Vertical
              </button>
            </div>

            <div>
              <label htmlFor="irf-bright" className="block text-xs font-semibold text-slate-700 mb-1">
                Brightness: <span className="font-mono">{brightness}%</span>
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
                Contrast: <span className="font-mono">{contrast}%</span>
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
                Black &amp; White (Grayscale)
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
                Reset all
              </button>
            </div>

            <div className="flex items-end gap-3 pt-2 border-t border-slate-200">
              <div className="flex-1">
                <label htmlFor="irf-fmt" className="block text-xs font-semibold text-slate-700 mb-1">
                  Export Format
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
                  Download
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-600 font-mono tabular-nums">
              <span>Live Canvas Preview ({rotation}° · {flipH ? 'FlipH ' : ''}{flipV ? 'FlipV' : ''})</span>
              {outputDims && (
                <span>
                  {outputDims.w}×{outputDims.h} px · {formatBytes(outputSize)}
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
