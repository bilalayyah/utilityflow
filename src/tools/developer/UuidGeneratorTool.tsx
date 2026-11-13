import { Download, RefreshCw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    versionLabel: 'UUID Version',
    v4: 'v4 (Random)',
    v7: 'v7 (Time-ordered)',
    quantity: 'Quantity (1–100)',
    generate: 'Generate UUIDs',
    uppercase: 'Uppercase',
    includeHyphens: 'Include hyphens',
    wrapBraces: 'Wrap in {braces}',
    generatedLabel: 'Generated UUIDs',
    copyAll: 'Copy all',
  },
  es: {
    versionLabel: 'Versión de UUID',
    v4: 'v4 (Aleatoria)',
    v7: 'v7 (Ordenada por tiempo)',
    quantity: 'Cantidad (1–100)',
    generate: 'Generar UUID',
    uppercase: 'Mayúsculas',
    includeHyphens: 'Incluir guiones',
    wrapBraces: 'Encerrar entre {llaves}',
    generatedLabel: 'UUID generados',
    copyAll: 'Copiar todo',
  },
};

function generateUuidV4(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function generateUuidV7(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const now = BigInt(Date.now());
  bytes[0] = Number((now >> 40n) & 0xffn);
  bytes[1] = Number((now >> 32n) & 0xffn);
  bytes[2] = Number((now >> 24n) & 0xffn);
  bytes[3] = Number((now >> 16n) & 0xffn);
  bytes[4] = Number((now >> 8n) & 0xffn);
  bytes[5] = Number(now & 0xffn);
  bytes[6] = (bytes[6] & 0x0f) | 0x70; // version 7
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant RFC 4122
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export default function UuidGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [version, setVersion] = useState<'v4' | 'v7'>('v4');
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [includeHyphens, setIncludeHyphens] = useState(true);
  const [wrapBraces, setWrapBraces] = useState(false);
  const [rawList, setRawList] = useState<string[]>(() =>
    Array.from({ length: 5 }, () => generateUuidV4())
  );

  const regenerate = (nextVersion = version, nextCount = count) => {
    const safeCount = Math.max(1, Math.min(100, nextCount));
    const list = Array.from({ length: safeCount }, () =>
      nextVersion === 'v7' ? generateUuidV7() : generateUuidV4()
    );
    setRawList(list);
  };

  const formattedOutput = useMemo(() => {
    return rawList
      .map((uuid) => {
        let val = includeHyphens ? uuid : uuid.replace(/-/g, '');
        if (uppercase) val = val.toUpperCase();
        if (wrapBraces) val = `{${val}}`;
        return val;
      })
      .join('\n');
  }, [rawList, uppercase, includeHyphens, wrapBraces]);

  const handleDownload = () => {
    const blob = new Blob([formattedOutput], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `uuids-${version}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <span className="block text-xs font-semibold text-slate-700 mb-1">{s.versionLabel}</span>
            <div className="inline-flex rounded-lg bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setVersion('v4');
                  regenerate('v4', count);
                }}
                className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                  version === 'v4' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {s.v4}
              </button>
              <button
                type="button"
                onClick={() => {
                  setVersion('v7');
                  regenerate('v7', count);
                }}
                className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                  version === 'v7' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {s.v7}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="uuid-count" className="block text-xs font-semibold text-slate-700 mb-1">
              {s.quantity}
            </label>
            <input
              id="uuid-count"
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => {
                const next = Math.max(1, Math.min(100, Number(e.target.value) || 1));
                setCount(next);
                regenerate(version, next);
              }}
              className="w-24 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-mono tabular-nums text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => regenerate(version, count)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{s.generate}</span>
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>.txt</span>
          </button>
          <CopyButton text={formattedOutput} label={s.copyAll} copiedLabel={t.common.copied} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 text-sm text-slate-700">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
          />
          <span>{s.uppercase}</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={includeHyphens}
            onChange={(e) => setIncludeHyphens(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
          />
          <span>{s.includeHyphens}</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={wrapBraces}
            onChange={(e) => setWrapBraces(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
          />
          <span>{s.wrapBraces}</span>
        </label>
      </div>

      <div>
        <label htmlFor="uuid-output" className="sr-only">
          {s.generatedLabel}
        </label>
        <textarea
          id="uuid-output"
          rows={10}
          readOnly
          value={formattedOutput}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-900 tabular-nums focus:outline-none"
        />
      </div>
    </div>
  );
}
