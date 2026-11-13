import { ArrowLeftRight, CheckCircle2, ImagePlus, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    presetIndigo: 'Indigo on White',
    presetSlate: 'Slate Ink',
    presetEmerald: 'Emerald Badge',
    presetDark: 'Dark Mode',
    swapColors: 'Swap Colors',
    fgTitle: 'Foreground / Text Color',
    bgTitle: 'Background Color',
    copyHex: 'Copy HEX',
    pickerSuffix: 'picker',
    hexInputSuffix: 'HEX input',
    contrastRatioLabel: 'WCAG 2.1 Contrast Ratio',
    checkAaNormal: 'WCAG AA Normal Text',
    checkAaLarge: 'WCAG AA Large Text / UI',
    checkAaaNormal: 'WCAG AAA Normal Text',
    checkAaaLarge: 'WCAG AAA Large Text',
    pass: 'PASS',
    fail: 'FAIL',
    livePreviewLabel: 'Live Accessibility Preview',
    previewHeading: 'Clear typography remains effortless to read at any viewport size.',
    previewBody:
      'Normal body text (14–16 px) requires at least a 4.5:1 contrast ratio for WCAG Level AA and 7.0:1 for Level AAA. Large headings (18 pt+ or bold 14 pt+) require at least 3.0:1.',
    outlinedControl: 'Outlined UI Control',
    hexOnHex: '{fg} on {bg}',
    extractTitle: 'Extract Color Palette from an Image',
    extractBody:
      'Upload a screenshot, logo, or photo to pull dominant HEX swatches directly into your contrast check.',
    appliesToLabel: 'Click swatch applies to:',
    foregroundBtn: 'Foreground',
    backgroundBtn: 'Background',
    selectImage: 'Select an image to extract swatches',
    loadedReplace: 'Loaded: {name} (Upload another)',
    selectImageError: 'Please select a PNG, JPG, WebP, or GIF image.',
    unableToRead: 'Unable to read "{name}".',
    canvasUnavailable: 'Canvas 2D context unavailable.',
    transparentImage: 'The image appears completely transparent.',
    unableToExtract: 'Unable to extract palette.',
    areaPercent: '~{n}% area',
  };

interface Rgb {
  r: number;
  g: number;
  b: number;
}

interface ExtractedSwatch {
  hex: string;
  rgb: Rgb;
  percent: number;
}

function clampByte(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

export function normalizeHex(input: string): string | null {
  const cleaned = input.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
    const expanded = cleaned
      .split('')
      .map((c) => c + c)
      .join('')
      .toUpperCase();
    return `#${expanded}`;
  }
  if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return `#${cleaned.toUpperCase()}`;
  }
  return null;
}

export function hexToRgb(hex: string): Rgb {
  const norm = normalizeHex(hex) || '#000000';
  const raw = norm.slice(1);
  return {
    r: parseInt(raw.slice(0, 2), 16),
    g: parseInt(raw.slice(2, 4), 16),
    b: parseInt(raw.slice(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }: Rgb): string {
  return (
    '#' +
    [r, g, b]
      .map((v) => clampByte(v).toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

export function rgbToHsl({ r, g, b }: Rgb): { h: number; s: number; l: number } {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;

  if (max === min) {
    return { h: 0, s: 0, l: Math.round(l * 100) };
  }

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === rn) {
    h = (gn - bn) / d + (gn < bn ? 6 : 0);
  } else if (max === gn) {
    h = (bn - rn) / d + 2;
  } else {
    h = (rn - gn) / d + 4;
  }
  h /= 6;

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function relativeLuminance({ r, g, b }: Rgb): number {
  const linearize = (channel: number) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

export function getContrastRatio(fgHex: string, bgHex: string): number {
  const l1 = relativeLuminance(hexToRgb(fgHex));
  const l2 = relativeLuminance(hexToRgb(bgHex));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const PRESET_PAIRS = [
  { key: 'presetIndigo' as const, fg: '#4F46E5', bg: '#FFFFFF' },
  { key: 'presetSlate' as const, fg: '#0F172A', bg: '#F8FAFC' },
  { key: 'presetEmerald' as const, fg: '#065F46', bg: '#ECFDF5' },
  { key: 'presetDark' as const, fg: '#F8FAFC', bg: '#0F172A' },
];

export default function ColorContrastCheckerTool() {
  const { t } = useLocale();
  const s = useComponentStrings('color-contrast-checker', STRINGS_EN);
  const [fgHex, setFgHex] = useState('#1E1B4B');
  const [fgInput, setFgInput] = useState('#1E1B4B');
  const [bgHex, setBgHex] = useState('#FFFFFF');
  const [bgInput, setBgInput] = useState('#FFFFFF');

  const [palette, setPalette] = useState<ExtractedSwatch[]>([]);
  const [paletteTarget, setPaletteTarget] = useState<'fg' | 'bg'>('fg');
  const [imageError, setImageError] = useState('');
  const [fileName, setFileName] = useState('');

  const fgRgb = useMemo(() => hexToRgb(fgHex), [fgHex]);
  const bgRgb = useMemo(() => hexToRgb(bgHex), [bgHex]);
  const fgHsl = useMemo(() => rgbToHsl(fgRgb), [fgRgb]);
  const bgHsl = useMemo(() => rgbToHsl(bgRgb), [bgRgb]);

  const ratio = useMemo(() => getContrastRatio(fgHex, bgHex), [fgHex, bgHex]);

  const applyFg = (hex: string) => {
    setFgHex(hex);
    setFgInput(hex);
  };

  const applyBg = (hex: string) => {
    setBgHex(hex);
    setBgInput(hex);
  };

  const handleSwap = () => {
    const oldFg = fgHex;
    const oldBg = bgHex;
    applyFg(oldBg);
    applyBg(oldFg);
  };

  const handleRgbChange = (target: 'fg' | 'bg', channel: keyof Rgb, raw: string) => {
    const num = clampByte(Number(raw) || 0);
    const current = target === 'fg' ? fgRgb : bgRgb;
    const nextHex = rgbToHex({ ...current, [channel]: num });
    if (target === 'fg') applyFg(nextHex);
    else applyBg(nextHex);
  };

  const handleExtractImage = async (file: File | undefined) => {
    if (!file) return;
    setImageError('');
    if (!file.type.startsWith('image/')) {
      setImageError(s.selectImageError);
      return;
    }

    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error(s.unableToRead.replace('{name}', file.name)));
        el.src = url;
      });

      const sampleW = Math.min(140, Math.max(1, img.naturalWidth));
      const sampleH = Math.max(1, Math.round((img.naturalHeight * sampleW) / img.naturalWidth));

      const canvas = document.createElement('canvas');
      canvas.width = sampleW;
      canvas.height = sampleH;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error(s.canvasUnavailable);
      ctx.drawImage(img, 0, 0, sampleW, sampleH);

      const { data } = ctx.getImageData(0, 0, sampleW, sampleH);
      const buckets = new Map<string, { rSum: number; gSum: number; bSum: number; count: number }>();
      let validPixels = 0;

      for (let i = 0; i < data.length; i += 4) {
        const a = data[i + 3];
        if (a < 128) continue;
        validPixels += 1;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const key = `${Math.round(r / 24)}-${Math.round(g / 24)}-${Math.round(b / 24)}`;
        const entry = buckets.get(key) || { rSum: 0, gSum: 0, bSum: 0, count: 0 };
        entry.rSum += r;
        entry.gSum += g;
        entry.bSum += b;
        entry.count += 1;
        buckets.set(key, entry);
      }

      if (validPixels === 0) {
        throw new Error(s.transparentImage);
      }

      const sorted = Array.from(buckets.values()).sort((a, b) => b.count - a.count);
      const swatches: ExtractedSwatch[] = [];

      for (const bucket of sorted) {
        const avg: Rgb = {
          r: Math.round(bucket.rSum / bucket.count),
          g: Math.round(bucket.gSum / bucket.count),
          b: Math.round(bucket.bSum / bucket.count),
        };
        const tooClose = swatches.some((existing) => {
          const dr = existing.rgb.r - avg.r;
          const dg = existing.rgb.g - avg.g;
          const db = existing.rgb.b - avg.b;
          return Math.sqrt(dr * dr + dg * dg + db * db) < 38;
        });
        if (!tooClose) {
          swatches.push({
            hex: rgbToHex(avg),
            rgb: avg,
            percent: Math.max(1, Math.round((bucket.count / validPixels) * 100)),
          });
        }
        if (swatches.length >= 8) break;
      }

      setPalette(swatches);
      setFileName(file.name);
    } catch (err) {
      setImageError(err instanceof Error ? err.message : s.unableToExtract);
    } finally {
      URL.revokeObjectURL(url);
    }
  };

  const checks = [
    { label: s.checkAaNormal, threshold: 4.5, pass: ratio >= 4.5 },
    { label: s.checkAaLarge, threshold: 3.0, pass: ratio >= 3.0 },
    { label: s.checkAaaNormal, threshold: 7.0, pass: ratio >= 7.0 },
    { label: s.checkAaaLarge, threshold: 4.5, pass: ratio >= 4.5 },
  ];

  const fgRgbString = `rgb(${fgRgb.r}, ${fgRgb.g}, ${fgRgb.b})`;
  const fgHslString = `hsl(${fgHsl.h}, ${fgHsl.s}%, ${fgHsl.l}%)`;
  const bgRgbString = `rgb(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b})`;
  const bgHslString = `hsl(${bgHsl.h}, ${bgHsl.s}%, ${bgHsl.l}%)`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {PRESET_PAIRS.map((pair) => (
            <button
              key={pair.key}
              type="button"
              onClick={() => {
                applyFg(pair.fg);
                applyBg(pair.bg);
              }}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer"
            >
              {s[pair.key]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSwap}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
        >
          <ArrowLeftRight className="w-3.5 h-3.5" />
          {s.swapColors}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            key: 'fg' as const,
            title: s.fgTitle,
            hex: fgHex,
            input: fgInput,
            setInput: setFgInput,
            apply: applyFg,
            rgb: fgRgb,
            rgbString: fgRgbString,
            hslString: fgHslString,
          },
          {
            key: 'bg' as const,
            title: s.bgTitle,
            hex: bgHex,
            input: bgInput,
            setInput: setBgInput,
            apply: applyBg,
            rgb: bgRgb,
            rgbString: bgRgbString,
            hslString: bgHslString,
          },
        ].map((panel) => (
          <div key={panel.key} className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-900">{panel.title}</h3>
              <CopyButton text={panel.hex} label={s.copyHex} copiedLabel={t.common.copied} />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="color"
                aria-label={`${panel.title} ${s.pickerSuffix}`}
                value={panel.hex}
                onChange={(e) => panel.apply(e.target.value.toUpperCase())}
                className="h-11 w-14 rounded-lg border border-slate-300 bg-white p-1 cursor-pointer"
              />
              <input
                type="text"
                aria-label={`${panel.title} ${s.hexInputSuffix}`}
                value={panel.input}
                onChange={(e) => {
                  const val = e.target.value;
                  panel.setInput(val);
                  const norm = normalizeHex(val);
                  if (norm) {
                    if (panel.key === 'fg') setFgHex(norm);
                    else setBgHex(norm);
                  }
                }}
                onBlur={() => panel.setInput(panel.hex)}
                className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm uppercase"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['r', 'g', 'b'] as const).map((ch) => (
                <div key={ch}>
                  <label className="block text-xs font-medium text-slate-600 uppercase mb-1">
                    {ch}
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={255}
                    value={panel.rgb[ch]}
                    onChange={(e) => handleRgbChange(panel.key, ch, e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-mono">
              <span>{panel.rgbString}</span>
              <span>{panel.hslString}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Contrast Ratio & WCAG Scorecard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {s.contrastRatioLabel}
            </p>
            <div className="mt-1 flex items-baseline gap-2 tabular-nums">
              <span className="text-4xl font-extrabold text-slate-900">{ratio.toFixed(2)}</span>
              <span className="text-lg font-semibold text-slate-500">: 1</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {checks.map((check) => (
              <div
                key={check.label}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs font-medium ${
                  check.pass
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                    : 'border-rose-200 bg-rose-50 text-rose-900'
                }`}
              >
                <span>
                  {check.label} ({check.threshold}:1)
                </span>
                <span className="inline-flex items-center gap-1 font-bold">
                  {check.pass ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" /> {s.pass}
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5" /> {s.fail}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="lg:col-span-7 rounded-xl border border-slate-200 p-6 flex flex-col justify-center space-y-3"
          style={{ backgroundColor: bgHex, color: fgHex }}
        >
          <span className="text-xs font-bold uppercase tracking-wider opacity-85">
            {s.livePreviewLabel}
          </span>
          <h4 className="text-2xl font-bold leading-snug">
            {s.previewHeading}
          </h4>
          <p className="text-sm leading-relaxed">
            {s.previewBody}
          </p>
          <div className="pt-2 flex flex-wrap gap-3 items-center">
            <span
              className="inline-block rounded-lg px-4 py-2 text-xs font-bold border"
              style={{ borderColor: fgHex }}
            >
              {s.outlinedControl}
            </span>
            <span className="text-xs font-mono">
              {s.hexOnHex.replace('{fg}', fgHex).replace('{bg}', bgHex)}
            </span>
          </div>
        </div>
      </div>

      {/* Image Palette Extractor */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {s.extractTitle}
            </h3>
            <p className="text-xs text-slate-600">
              {s.extractBody}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">{s.appliesToLabel}</span>
            <button
              type="button"
              onClick={() => setPaletteTarget('fg')}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold border cursor-pointer ${
                paletteTarget === 'fg'
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : 'border-slate-300 bg-white text-slate-700'
              }`}
            >
              {s.foregroundBtn}
            </button>
            <button
              type="button"
              onClick={() => setPaletteTarget('bg')}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold border cursor-pointer ${
                paletteTarget === 'bg'
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : 'border-slate-300 bg-white text-slate-700'
              }`}
            >
              {s.backgroundBtn}
            </button>
          </div>
        </div>

        <label
          htmlFor="palette-upload"
          className="flex items-center justify-center gap-2.5 rounded-lg border-2 border-dashed border-slate-300 bg-white px-4 py-4 text-sm font-medium text-slate-700 hover:border-indigo-400 cursor-pointer"
        >
          <ImagePlus className="w-5 h-5 text-indigo-600" />
          <span>{fileName ? s.loadedReplace.replace('{name}', fileName) : s.selectImage}</span>
          <input
            id="palette-upload"
            type="file"
            accept="image/*"
            onChange={(e) => {
              void handleExtractImage(e.target.files?.[0]);
              e.target.value = '';
            }}
            className="sr-only"
          />
        </label>

        {imageError && (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
            {imageError}
          </div>
        )}

        {palette.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {palette.map((swatch) => (
              <button
                key={swatch.hex}
                type="button"
                onClick={() => {
                  if (paletteTarget === 'fg') applyFg(swatch.hex);
                  else applyBg(swatch.hex);
                }}
                className="group rounded-lg border border-slate-200 bg-white p-2 text-left hover:border-indigo-400 cursor-pointer transition-colors"
              >
                <div
                  className="h-10 w-full rounded border border-slate-200"
                  style={{ backgroundColor: swatch.hex }}
                />
                <div className="mt-1.5 font-mono text-xs font-bold text-slate-900">
                  {swatch.hex}
                </div>
                <div className="text-[11px] text-slate-500">{s.areaPercent.replace('{n}', String(swatch.percent))}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
