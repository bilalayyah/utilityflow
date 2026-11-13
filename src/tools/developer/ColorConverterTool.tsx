import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    pickColor: 'Pick color',
    colorPickerAria: 'Color picker',
    copyHex: 'Copy HEX',
    copyRgb: 'Copy RGB',
    copyHsl: 'Copy HSL',
    contrastTitle: 'WCAG 2.1 Contrast Ratio Check',
    contrastDesc: 'Preview foreground ({color}) against any background color.',
    backgroundLabel: 'Background:',
    bgAria: 'Background color for contrast',
    sampleTitle: 'Sample Body & UI Text',
    sampleSentence: 'The quick brown fox jumps over the lazy dog.',
    aaNormal: 'AA Normal Text (≥ 4.5:1)',
    aaaNormal: 'AAA Normal Text (≥ 7.0:1)',
    aaLarge: 'AA Large Text (≥ 3.0:1)',
    pass: 'Pass',
    fail: 'Fail',
  },
  es: {
    pickColor: 'Elegir color',
    colorPickerAria: 'Selector de color',
    copyHex: 'Copiar HEX',
    copyRgb: 'Copiar RGB',
    copyHsl: 'Copiar HSL',
    contrastTitle: 'Verificación de la relación de contraste WCAG 2.1',
    contrastDesc: 'Vista previa del primer plano ({color}) sobre cualquier color de fondo.',
    backgroundLabel: 'Fondo:',
    bgAria: 'Color de fondo para el contraste',
    sampleTitle: 'Texto de ejemplo del cuerpo y la interfaz',
    sampleSentence: 'El veloz murciélago hindú comía feliz cardillo y kiwi.',
    aaNormal: 'Texto normal AA (≥ 4.5:1)',
    aaaNormal: 'Texto normal AAA (≥ 7.0:1)',
    aaLarge: 'Texto grande AA (≥ 3.0:1)',
    pass: 'Aprobado',
    fail: 'No aprobado',
  },
};

interface RGB {
  r: number;
  g: number;
  b: number;
}

function normalizeHex(raw: string): string | null {
  const cleaned = raw.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
    return (
      '#' +
      cleaned
        .split('')
        .map((c) => c + c)
        .join('')
        .toLowerCase()
    );
  }
  if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return '#' + cleaned.toLowerCase();
  }
  return null;
}

function hexToRgb(hex: string): RGB {
  const normalized = normalizeHex(hex) || '#2563eb';
  return {
    r: parseInt(normalized.slice(1, 3), 16),
    g: parseInt(normalized.slice(3, 5), 16),
    b: parseInt(normalized.slice(5, 7), 16),
  };
}

function rgbToHex({ r, g, b }: RGB): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return (
    '#' +
    [clamp(r), clamp(g), clamp(b)]
      .map((n) => n.toString(16).padStart(2, '0'))
      .join('')
  );
}

function rgbToHsl({ r, g, b }: RGB): { h: number; s: number; l: number } {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      default:
        h = (rn - gn) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb(h: number, s: number, l: number): RGB {
  const hn = ((h % 360) + 360) % 360 / 360;
  const sn = Math.max(0, Math.min(100, s)) / 100;
  const ln = Math.max(0, Math.min(100, l)) / 100;

  if (sn === 0) {
    const v = Math.round(ln * 255);
    return { r: v, g: v, b: v };
  }

  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
  const p = 2 * ln - q;
  const hue2rgb = (t: number) => {
    let tn = t;
    if (tn < 0) tn += 1;
    if (tn > 1) tn -= 1;
    if (tn < 1 / 6) return p + (q - p) * 6 * tn;
    if (tn < 1 / 2) return q;
    if (tn < 2 / 3) return p + (q - p) * (2 / 3 - tn) * 6;
    return p;
  };

  return {
    r: Math.round(hue2rgb(hn + 1 / 3) * 255),
    g: Math.round(hue2rgb(hn) * 255),
    b: Math.round(hue2rgb(hn - 1 / 3) * 255),
  };
}

function relativeLuminance({ r, g, b }: RGB): number {
  const toLinear = (c: number) => {
    const srgb = c / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrastRatio(c1: RGB, c2: RGB): number {
  const l1 = relativeLuminance(c1);
  const l2 = relativeLuminance(c2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export default function ColorConverterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [hex, setHex] = useState('#2563eb');
  const [hexDraft, setHexDraft] = useState('#2563eb');
  const [bgHex, setBgHex] = useState('#ffffff');

  const rgb = useMemo(() => hexToRgb(hex), [hex]);
  const hsl = useMemo(() => rgbToHsl(rgb), [rgb]);
  const bgRgb = useMemo(() => hexToRgb(bgHex), [bgHex]);
  const ratio = useMemo(() => contrastRatio(rgb, bgRgb), [rgb, bgRgb]);

  const hexCss = hex.toUpperCase();
  const rgbCss = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslCss = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  const updateFromHex = (val: string) => {
    setHexDraft(val);
    const normalized = normalizeHex(val);
    if (normalized) setHex(normalized);
  };

  const updateRgbChannel = (channel: keyof RGB, value: number) => {
    const clamped = Math.max(0, Math.min(255, Number.isFinite(value) ? value : 0));
    const nextRgb = { ...rgb, [channel]: clamped };
    const nextHex = rgbToHex(nextRgb);
    setHex(nextHex);
    setHexDraft(nextHex);
  };

  const updateHslChannel = (channel: 'h' | 's' | 'l', value: number) => {
    const max = channel === 'h' ? 360 : 100;
    const clamped = Math.max(0, Math.min(max, Number.isFinite(value) ? value : 0));
    const nextHsl = { ...hsl, [channel]: clamped };
    const nextHex = rgbToHex(hslToRgb(nextHsl.h, nextHsl.s, nextHsl.l));
    setHex(nextHex);
    setHexDraft(nextHex);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Picker & Live Swatch */}
        <div className="md:col-span-4 space-y-3">
          <div
            className="h-32 w-full rounded-xl border border-slate-200 flex items-end p-3"
            style={{ backgroundColor: hex }}
          >
            <span className="rounded-md bg-white/90 px-2.5 py-1 font-mono text-xs font-semibold text-slate-900">
              {hexCss}
            </span>
          </div>
          <label className="flex items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 cursor-pointer">
            <span>{s.pickColor}</span>
            <input
              type="color"
              value={hex}
              onChange={(e) => updateFromHex(e.target.value)}
              aria-label={s.colorPickerAria}
              className="h-7 w-12 cursor-pointer border-0 bg-transparent p-0"
            />
          </label>
        </div>

        {/* HEX / RGB / HSL Controls */}
        <div className="md:col-span-8 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <label htmlFor="color-hex" className="text-xs font-semibold text-slate-700">
                HEX
              </label>
              <CopyButton text={hexCss} label={s.copyHex} copiedLabel={t.common.copied} />
            </div>
            <input
              id="color-hex"
              type="text"
              value={hexDraft}
              onChange={(e) => updateFromHex(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-slate-700">RGB ({rgbCss})</span>
              <CopyButton text={rgbCss} label={s.copyRgb} copiedLabel={t.common.copied} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['r', 'g', 'b'] as const).map((ch) => (
                <label key={ch} className="text-xs text-slate-600">
                  <span className="uppercase font-mono">{ch}</span>
                  <input
                    type="number"
                    min={0}
                    max={255}
                    value={rgb[ch]}
                    onChange={(e) => updateRgbChannel(ch, Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-sm tabular-nums text-slate-900"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-slate-700">HSL ({hslCss})</span>
              <CopyButton text={hslCss} label={s.copyHsl} copiedLabel={t.common.copied} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <label className="text-xs text-slate-600">
                <span className="font-mono">H (0–360)</span>
                <input
                  type="number"
                  min={0}
                  max={360}
                  value={hsl.h}
                  onChange={(e) => updateHslChannel('h', Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-sm tabular-nums text-slate-900"
                />
              </label>
              <label className="text-xs text-slate-600">
                <span className="font-mono">S (%)</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={hsl.s}
                  onChange={(e) => updateHslChannel('s', Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-sm tabular-nums text-slate-900"
                />
              </label>
              <label className="text-xs text-slate-600">
                <span className="font-mono">L (%)</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={hsl.l}
                  onChange={(e) => updateHslChannel('l', Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-sm tabular-nums text-slate-900"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* WCAG Contrast Checker */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{s.contrastTitle}</h3>
            <p className="text-xs text-slate-500">
              {s.contrastDesc.replace('{color}', hexCss)}
            </p>
          </div>
          <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
            <span>{s.backgroundLabel}</span>
            <input
              type="color"
              value={bgHex}
              onChange={(e) => setBgHex(e.target.value)}
              aria-label={s.bgAria}
              className="h-7 w-10 cursor-pointer border-0 bg-transparent p-0"
            />
            <span className="font-mono">{bgHex.toUpperCase()}</span>
          </label>
        </div>

        <div
          className="rounded-lg border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4"
          style={{ backgroundColor: bgHex, color: hex }}
        >
          <div>
            <div className="text-base font-semibold">{s.sampleTitle}</div>
            <div className="text-xs opacity-90">{s.sampleSentence}</div>
          </div>
          <div className="rounded-md bg-white/90 px-3 py-1.5 font-mono text-sm font-bold text-slate-900 tabular-nums">
            {ratio.toFixed(2)}:1
          </div>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex justify-between">
            <dt className="text-slate-600">{s.aaNormal}</dt>
            <dd className={`font-semibold ${ratio >= 4.5 ? 'text-emerald-700' : 'text-red-700'}`}>
              {ratio >= 4.5 ? s.pass : s.fail}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex justify-between">
            <dt className="text-slate-600">{s.aaaNormal}</dt>
            <dd className={`font-semibold ${ratio >= 7.0 ? 'text-emerald-700' : 'text-red-700'}`}>
              {ratio >= 7.0 ? s.pass : s.fail}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex justify-between">
            <dt className="text-slate-600">{s.aaLarge}</dt>
            <dd className={`font-semibold ${ratio >= 3.0 ? 'text-emerald-700' : 'text-red-700'}`}>
              {ratio >= 3.0 ? s.pass : s.fail}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
