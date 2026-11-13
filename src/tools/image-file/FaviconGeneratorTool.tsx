import { Download, ImagePlus, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

type SourceMode = 'monogram' | 'image';
type BadgeShape = 'rounded' | 'circle' | 'square';

interface GeneratedIcon {
  size: number;
  label: string;
  fileName: string;
  url: string;
}

const TARGET_SIZES: { size: number; label: string; fileName: string }[] = [
  { size: 16, label: '16×16 Browser Tab', fileName: 'favicon-16x16.png' },
  { size: 32, label: '32×32 Taskbar / HiDPI', fileName: 'favicon-32x32.png' },
  { size: 48, label: '48×48 Desktop Shortcut', fileName: 'favicon-48x48.png' },
  { size: 180, label: '180×180 Apple Touch', fileName: 'apple-touch-icon.png' },
  { size: 192, label: '192×192 Android Chrome', fileName: 'android-chrome-192x192.png' },
  { size: 512, label: '512×512 PWA Splash', fileName: 'android-chrome-512x512.png' },
];

/**
 * Encodes an array of PNG image payloads (e.g. 16x16, 32x32, 48x48) into a single
 * standards-compliant multi-image Windows/Browser .ico file using PNG-encoded ICO frames.
 */
export function buildMultiSizeIco(entries: { size: number; pngBytes: Uint8Array }[]): Uint8Array {
  const count = entries.length;
  const headerSize = 6 + count * 16;
  const totalBytes =
    headerSize + entries.reduce((sum, entry) => sum + entry.pngBytes.length, 0);

  const out = new Uint8Array(totalBytes);
  const view = new DataView(out.buffer);

  // ICONDIR header
  view.setUint16(0, 0, true); // Reserved (must be 0)
  view.setUint16(2, 1, true); // Image type: 1 = ICO
  view.setUint16(4, count, true); // Number of images

  let offset = headerSize;
  entries.forEach((entry, index) => {
    const dirPos = 6 + index * 16;
    const dimByte = entry.size >= 256 ? 0 : entry.size;
    view.setUint8(dirPos + 0, dimByte); // Width
    view.setUint8(dirPos + 1, dimByte); // Height
    view.setUint8(dirPos + 2, 0); // Color palette
    view.setUint8(dirPos + 3, 0); // Reserved
    view.setUint16(dirPos + 4, 1, true); // Color planes
    view.setUint16(dirPos + 6, 32, true); // Bits per pixel
    view.setUint32(dirPos + 8, entry.pngBytes.length, true); // Image size in bytes
    view.setUint32(dirPos + 12, offset, true); // Offset from start of file

    out.set(entry.pngBytes, offset);
    offset += entry.pngBytes.length;
  });

  return out;
}

export default function FaviconGeneratorTool() {
  const [sourceMode, setSourceMode] = useState<SourceMode>('monogram');

  // Monogram settings
  const [letters, setLetters] = useState('UH');
  const [bgColor, setBgColor] = useState('#4F46E5');
  const [fgColor, setFgColor] = useState('#FFFFFF');
  const [shape, setShape] = useState<BadgeShape>('rounded');

  // Uploaded image state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  // Outputs
  const [icons, setIcons] = useState<GeneratedIcon[]>([]);
  const [icoUrl, setIcoUrl] = useState('');

  useEffect(() => {
    return () => {
      icons.forEach((ic) => URL.revokeObjectURL(ic.url));
      if (icoUrl) URL.revokeObjectURL(icoUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let cancelled = false;
    let tempImgUrl = '';

    void (async () => {
      setError('');
      try {
        let loadedImg: HTMLImageElement | null = null;
        if (sourceMode === 'image') {
          if (!uploadedFile) {
            return;
          }
          tempImgUrl = URL.createObjectURL(uploadedFile);
          loadedImg = await new Promise<HTMLImageElement>((resolve, reject) => {
            const el = new Image();
            el.onload = () => resolve(el);
            el.onerror = () => reject(new Error(`Unable to read "${uploadedFile.name}".`));
            el.src = tempImgUrl;
          });
        }

        const rendered: GeneratedIcon[] = [];
        const icoFrames: { size: number; pngBytes: Uint8Array }[] = [];

        for (const target of TARGET_SIZES) {
          const s = target.size;
          const canvas = document.createElement('canvas');
          canvas.width = s;
          canvas.height = s;
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Canvas 2D context unavailable.');

          // Shape clip mask
          ctx.save();
          if (shape === 'circle') {
            ctx.beginPath();
            ctx.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2);
            ctx.clip();
          } else if (shape === 'rounded') {
            const radius = Math.round(s * 0.2);
            ctx.beginPath();
            ctx.roundRect(0, 0, s, s, radius);
            ctx.clip();
          }

          if (sourceMode === 'image' && loadedImg) {
            // Center square cover crop
            const side = Math.min(loadedImg.naturalWidth, loadedImg.naturalHeight);
            const sx = Math.floor((loadedImg.naturalWidth - side) / 2);
            const sy = Math.floor((loadedImg.naturalHeight - side) / 2);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(loadedImg, sx, sy, side, side, 0, 0, s, s);
          } else {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, s, s);
            const text = (letters.trim() || 'U').slice(0, 3).toUpperCase();
            const fontScale = text.length === 1 ? 0.56 : text.length === 2 ? 0.44 : 0.34;
            ctx.fillStyle = fgColor;
            ctx.font = `700 ${Math.round(s * fontScale)}px Inter, system-ui, -apple-system, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, s / 2, s * 0.53);
          }
          ctx.restore();

          const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
          if (!blob) throw new Error('Failed to encode favicon PNG.');

          const url = URL.createObjectURL(blob);
          rendered.push({ ...target, url });

          if (s === 16 || s === 32 || s === 48) {
            const ab = await blob.arrayBuffer();
            icoFrames.push({ size: s, pngBytes: new Uint8Array(ab) });
          }
        }

        const icoBytes = buildMultiSizeIco(icoFrames);
        const icoCopy = new Uint8Array(icoBytes.byteLength);
        icoCopy.set(icoBytes);
        const icoBlob = new Blob([icoCopy.buffer], { type: 'image/x-icon' });
        const nextIcoUrl = URL.createObjectURL(icoBlob);

        if (cancelled) {
          rendered.forEach((r) => URL.revokeObjectURL(r.url));
          URL.revokeObjectURL(nextIcoUrl);
          return;
        }

        setIcons((prev) => {
          prev.forEach((p) => URL.revokeObjectURL(p.url));
          return rendered;
        });
        setIcoUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return nextIcoUrl;
        });
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to generate favicons.');
        }
      } finally {
        if (tempImgUrl) URL.revokeObjectURL(tempImgUrl);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [sourceMode, letters, bgColor, fgColor, shape, uploadedFile]);

  const htmlSnippet = `<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`;

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setSourceMode('monogram')}
          className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
            sourceMode === 'monogram'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Monogram Badge Builder
        </button>
        <button
          type="button"
          onClick={() => setSourceMode('image')}
          className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
            sourceMode === 'image'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ImagePlus className="w-4 h-4" />
          Upload Logo Image
        </button>
      </div>

      {sourceMode === 'monogram' ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div>
            <label htmlFor="fav-letters" className="block text-xs font-semibold text-slate-800 mb-1.5">
              Text / Initials (1–3 chars)
            </label>
            <input
              id="fav-letters"
              type="text"
              maxLength={3}
              value={letters}
              onChange={(e) => setLetters(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold uppercase"
            />
          </div>

          <div>
            <label htmlFor="fav-shape" className="block text-xs font-semibold text-slate-800 mb-1.5">
              Corner Shape
            </label>
            <select
              id="fav-shape"
              value={shape}
              onChange={(e) => setShape(e.target.value as BadgeShape)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option value="rounded">Rounded Square</option>
              <option value="circle">Circle</option>
              <option value="square">Sharp Square</option>
            </select>
          </div>

          <div>
            <label htmlFor="fav-bg" className="block text-xs font-semibold text-slate-800 mb-1.5">
              Background Color
            </label>
            <div className="flex items-center gap-2">
              <input
                id="fav-bg"
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-9 w-12 rounded border border-slate-300 bg-white p-0.5 cursor-pointer"
              />
              <span className="font-mono text-xs text-slate-700 uppercase">{bgColor}</span>
            </div>
          </div>

          <div>
            <label htmlFor="fav-fg" className="block text-xs font-semibold text-slate-800 mb-1.5">
              Text Color
            </label>
            <div className="flex items-center gap-2">
              <input
                id="fav-fg"
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-9 w-12 rounded border border-slate-300 bg-white p-0.5 cursor-pointer"
              />
              <span className="font-mono text-xs text-slate-700 uppercase">{fgColor}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label
            htmlFor="fav-upload"
            className="sm:col-span-2 flex items-center justify-center gap-2.5 rounded-lg border-2 border-dashed border-slate-300 bg-white px-4 py-5 text-sm font-medium text-slate-700 hover:border-indigo-400 cursor-pointer"
          >
            <ImagePlus className="w-5 h-5 text-indigo-600" />
            <span>
              {uploadedFile
                ? `Loaded: ${uploadedFile.name} (Click to replace)`
                : 'Choose a PNG, JPG, WebP, or SVG logo'}
            </span>
            <input
              id="fav-upload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) setUploadedFile(f);
                e.target.value = '';
              }}
              className="sr-only"
            />
          </label>

          <div>
            <label htmlFor="fav-img-shape" className="block text-xs font-semibold text-slate-800 mb-1.5">
              Crop Mask
            </label>
            <select
              id="fav-img-shape"
              value={shape}
              onChange={(e) => setShape(e.target.value as BadgeShape)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option value="rounded">Rounded Square</option>
              <option value="circle">Circle</option>
              <option value="square">Square</option>
            </select>
          </div>
        </div>
      )}

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {icons.length > 0 && (
        <div className="space-y-5">
          {icoUrl && (
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
              <div className="flex items-center gap-3">
                <img
                  src={icons[1]?.url || icons[0].url}
                  alt="Favicon 32x32 preview"
                  className="w-9 h-9 rounded border border-slate-200 bg-white p-0.5"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Multi-Size favicon.ico Bundle (16px + 32px + 48px)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Standards-compliant binary .ico file ready for your website root /public/ folder
                  </p>
                </div>
              </div>
              <a
                href={icoUrl}
                download="favicon.ico"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Download className="w-4 h-4" />
                Download favicon.ico
              </a>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {icons.map((ic) => (
              <div
                key={ic.size}
                className="rounded-xl border border-slate-200 bg-white p-3.5 flex flex-col items-center text-center justify-between gap-3"
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={ic.url}
                    alt={`${ic.size}x${ic.size} icon`}
                    style={{ width: Math.min(56, Math.max(20, ic.size)), height: Math.min(56, Math.max(20, ic.size)) }}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 tabular-nums">{ic.size}×{ic.size}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{ic.fileName}</p>
                </div>
                <a
                  href={ic.url}
                  download={ic.fileName}
                  className="w-full inline-flex items-center justify-center gap-1 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  PNG
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-800">
                HTML &lt;head&gt; Link Tags
              </span>
              <CopyButton text={htmlSnippet} label="Copy HTML" />
            </div>
            <pre className="rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs text-slate-800 overflow-x-auto">
              {htmlSnippet}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
