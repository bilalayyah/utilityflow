import { Download, ImagePlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatBytes } from '../pdf/pdfUtils';

type OutputMime = 'image/webp' | 'image/jpeg' | 'image/png';

interface CompressedPreview {
  url: string;
  sizeBytes: number;
  width: number;
  height: number;
}

export default function ImageCompressorTool() {
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
        el.onerror = () => reject(new Error(`Unable to decode "${file.name}".`));
        el.src = tmpUrl;
      });

      const targetW = maxW > 0 && img.naturalWidth > maxW ? maxW : img.naturalWidth;
      const targetH = Math.round((img.naturalHeight * targetW) / img.naturalWidth);

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas 2D context unavailable.');

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
      if (!blob) throw new Error('Compression failed in browser canvas.');

      const outUrl = URL.createObjectURL(blob);
      setCompressed((prev) => {
        if (prev?.url) URL.revokeObjectURL(prev.url);
        return { url: outUrl, sizeBytes: blob.size, width: targetW, height: targetH };
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to compress image.');
    } finally {
      URL.revokeObjectURL(tmpUrl);
      setIsProcessing(false);
    }
  };

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload a PNG, JPG, WebP, or GIF image file.');
      return;
    }

    const nextSourceUrl = URL.createObjectURL(file);
    try {
      const dims = await new Promise<{ w: number; h: number }>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => reject(new Error(`Unable to read "${file.name}".`));
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
      setError(err instanceof Error ? err.message : 'Invalid image file.');
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
            ? `${sourceFile.name} (${sourceDims?.w}×${sourceDims?.h} · ${formatBytes(sourceFile.size)})`
            : 'Choose an Image to Compress (PNG / JPG / WebP)'}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          Processed locally via HTML5 Canvas · Never uploaded to remote servers
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
                Output Format
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
                <option value="image/webp">WebP (Smallest modern web size)</option>
                <option value="image/jpeg">JPG (Broadest compatibility)</option>
                <option value="image/png">PNG (Lossless transparency)</option>
              </select>
            </div>

            <div>
              <label htmlFor="comp-maxw" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Max Width Cap
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
                <option value={0}>Keep Original Width</option>
                <option value={1920}>Max 1920 px (Full HD)</option>
                <option value={1280}>Max 1280 px (Blog / Hero)</option>
                <option value={800}>Max 800 px (Thumbnails)</option>
              </select>
            </div>

            <div>
              <label htmlFor="comp-q" className="block text-xs font-semibold text-slate-800 mb-1.5">
                Quality: <span className="font-mono">{outputMime === 'image/png' ? 'Lossless PNG' : `${quality}%`}</span>
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
                  alt="Compressed image preview"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <dl className="grid grid-cols-3 gap-3 tabular-nums">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="text-xs text-slate-500">Original</dt>
                    <dd className="mt-1 font-mono text-sm font-bold text-slate-900">
                      {formatBytes(sourceFile.size)}
                    </dd>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="text-xs text-slate-500">Compressed</dt>
                    <dd className="mt-1 font-mono text-sm font-bold text-indigo-700">
                      {formatBytes(compressed.sizeBytes)}
                    </dd>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="text-xs text-slate-500">Change</dt>
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
                    Output: {compressed.width} × {compressed.height} px · {ext.toUpperCase()}
                  </span>

                  <a
                    href={compressed.url}
                    download={`${baseName}-compressed.${ext}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    <Download className="w-4 h-4" />
                    {isProcessing ? 'Compressing...' : `Download .${ext.toUpperCase()}`}
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
