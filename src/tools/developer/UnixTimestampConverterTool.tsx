import { useEffect, useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import type { LocaleCode } from '../../locales/config';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    currentLabel: 'Current Unix Timestamp (Seconds)',
    useCurrent: 'Use current time',
    copyEpoch: 'Copy epoch',
    converter1Label: 'Unix Timestamp → Human Date',
    epochPlaceholder: 'e.g. 1794544800',
    unitAuto: 'auto',
    unitSeconds: 'seconds',
    unitMilliseconds: 'milliseconds',
    errorNotNumeric: 'Enter a valid numeric Unix timestamp.',
    errorOutOfRange: 'Timestamp is outside valid JavaScript Date range.',
    isoLabel: 'ISO 8601 (UTC)',
    localLabel: 'Local Timezone',
    rfcLabel: 'RFC 2822 / GMT',
    relativeLabel: 'Relative',
    converter2Label: 'Local Date & Time → Unix Timestamp',
    secondsLabel: 'Seconds',
    millisecondsLabel: 'Milliseconds',
    isoLabel2: 'ISO 8601',
  };

function formatRelative(ms: number, nowMs: number, locale: LocaleCode): string {
  const diffSec = Math.round((ms - nowMs) / 1000);
  const abs = Math.abs(diffSec);
  if (locale === 'es') {
    if (abs < 60) return diffSec >= 0 ? `dentro de ${abs} s` : `hace ${abs} s`;
    if (abs < 3600) return diffSec >= 0 ? `dentro de ${Math.round(abs / 60)} min` : `hace ${Math.round(abs / 60)} min`;
    if (abs < 86400) return diffSec >= 0 ? `dentro de ${Math.round(abs / 3600)} h` : `hace ${Math.round(abs / 3600)} h`;
    return diffSec >= 0 ? `dentro de ${Math.round(abs / 86400)} d` : `hace ${Math.round(abs / 86400)} d`;
  }
  if (locale === 'pt') {
    if (abs < 60) return diffSec >= 0 ? `em ${abs} s` : `há ${abs} s`;
    if (abs < 3600) return diffSec >= 0 ? `em ${Math.round(abs / 60)} min` : `há ${Math.round(abs / 60)} min`;
    if (abs < 86400) return diffSec >= 0 ? `em ${Math.round(abs / 3600)} h` : `há ${Math.round(abs / 3600)} h`;
    return diffSec >= 0 ? `em ${Math.round(abs / 86400)} d` : `há ${Math.round(abs / 86400)} d`;
  }
  if (locale === 'fr') {
    if (abs < 60) return diffSec >= 0 ? `dans ${abs} s` : `il y a ${abs} s`;
    if (abs < 3600) return diffSec >= 0 ? `dans ${Math.round(abs / 60)} min` : `il y a ${Math.round(abs / 60)} min`;
    if (abs < 86400) return diffSec >= 0 ? `dans ${Math.round(abs / 3600)} h` : `il y a ${Math.round(abs / 3600)} h`;
    return diffSec >= 0 ? `dans ${Math.round(abs / 86400)} j` : `il y a ${Math.round(abs / 86400)} j`;
  }
  if (locale === 'de') {
    if (abs < 60) return diffSec >= 0 ? `in ${abs} s` : `vor ${abs} s`;
    if (abs < 3600) return diffSec >= 0 ? `in ${Math.round(abs / 60)} Min.` : `vor ${Math.round(abs / 60)} Min.`;
    if (abs < 86400) return diffSec >= 0 ? `in ${Math.round(abs / 3600)} Std.` : `vor ${Math.round(abs / 3600)} Std.`;
    return diffSec >= 0 ? `in ${Math.round(abs / 86400)} T` : `vor ${Math.round(abs / 86400)} T`;
  }
  if (locale === 'it') {
    if (abs < 60) return diffSec >= 0 ? `tra ${abs} s` : `${abs} s fa`;
    if (abs < 3600) return diffSec >= 0 ? `tra ${Math.round(abs / 60)} min` : `${Math.round(abs / 60)} min fa`;
    if (abs < 86400) return diffSec >= 0 ? `tra ${Math.round(abs / 3600)} h` : `${Math.round(abs / 3600)} h fa`;
    return diffSec >= 0 ? `tra ${Math.round(abs / 86400)} g` : `${Math.round(abs / 86400)} g fa`;
  }
  if (locale === 'id') {
    if (abs < 60) return diffSec >= 0 ? `dalam ${abs} dtk` : `${abs} dtk yang lalu`;
    if (abs < 3600) return diffSec >= 0 ? `dalam ${Math.round(abs / 60)} mnt` : `${Math.round(abs / 60)} mnt yang lalu`;
    if (abs < 86400) return diffSec >= 0 ? `dalam ${Math.round(abs / 3600)} jam` : `${Math.round(abs / 3600)} jam yang lalu`;
    return diffSec >= 0 ? `dalam ${Math.round(abs / 86400)} hari` : `${Math.round(abs / 86400)} hari yang lalu`;
  }
  if (locale === 'ru') {
    if (abs < 60) return diffSec >= 0 ? `через ${abs} с` : `${abs} с назад`;
    if (abs < 3600) return diffSec >= 0 ? `через ${Math.round(abs / 60)} мин` : `${Math.round(abs / 60)} мин назад`;
    if (abs < 86400) return diffSec >= 0 ? `через ${Math.round(abs / 3600)} ч` : `${Math.round(abs / 3600)} ч назад`;
    return diffSec >= 0 ? `через ${Math.round(abs / 86400)} дн` : `${Math.round(abs / 86400)} дн назад`;
  }
  const suffix = diffSec >= 0 ? 'from now' : 'ago';
  if (abs < 60) return `${abs}s ${suffix}`;
  if (abs < 3600) return `${Math.round(abs / 60)}m ${suffix}`;
  if (abs < 86400) return `${Math.round(abs / 3600)}h ${suffix}`;
  return `${Math.round(abs / 86400)}d ${suffix}`;
}

function toDatetimeLocalValue(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export default function UnixTimestampConverterTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('unix-timestamp-converter', STRINGS_EN);
  const [nowMs, setNowMs] = useState(() => Date.now());
  const [epochInput, setEpochInput] = useState(() => String(Math.floor(Date.now() / 1000)));
  const [unit, setUnit] = useState<'auto' | 'seconds' | 'milliseconds'>('auto');
  const [dateInput, setDateInput] = useState(() => toDatetimeLocalValue(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parsedFromEpoch = useMemo(() => {
    const trimmed = epochInput.trim();
    if (!trimmed) return { error: '', date: null as Date | null, ms: 0, detected: 'seconds' };
    const num = Number(trimmed);
    if (!Number.isFinite(num)) {
      return { error: s.errorNotNumeric, date: null, ms: 0, detected: 'seconds' };
    }

    const detected =
      unit === 'auto' ? (Math.abs(num) >= 1e11 ? 'milliseconds' : 'seconds') : unit;
    const ms = detected === 'milliseconds' ? num : num * 1000;
    const date = new Date(ms);
    if (Number.isNaN(date.getTime())) {
      return { error: s.errorOutOfRange, date: null, ms: 0, detected };
    }
    return { error: '', date, ms, detected };
  }, [epochInput, unit, s.errorNotNumeric, s.errorOutOfRange]);

  const parsedFromDate = useMemo(() => {
    if (!dateInput) return null;
    const date = new Date(dateInput);
    if (Number.isNaN(date.getTime())) return null;
    return {
      seconds: Math.floor(date.getTime() / 1000),
      milliseconds: date.getTime(),
      iso: date.toISOString(),
    };
  }, [dateInput]);

  const currentSec = Math.floor(nowMs / 1000);

  const unitLabels: Record<'auto' | 'seconds' | 'milliseconds', string> = {
    auto: s.unitAuto,
    seconds: s.unitSeconds,
    milliseconds: s.unitMilliseconds,
  };

  return (
    <div className="space-y-6">
      {/* Live Current Epoch Banner */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-medium text-slate-500">{s.currentLabel}</div>
          <div className="mt-1 text-2xl font-bold font-mono text-indigo-600 tabular-nums">
            {currentSec}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setEpochInput(String(currentSec))}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            {s.useCurrent}
          </button>
          <CopyButton text={String(currentSec)} label={s.copyEpoch} copiedLabel={t.common.copied} />
        </div>
      </div>

      {/* Converter 1: Timestamp -> Date */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="epoch-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.converter1Label}
            </label>
            <input
              id="epoch-in"
              type="text"
              value={epochInput}
              onChange={(e) => setEpochInput(e.target.value)}
              placeholder={s.epochPlaceholder}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            {(['auto', 'seconds', 'milliseconds'] as const).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize cursor-pointer ${
                  unit === u ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {unitLabels[u]}
              </button>
            ))}
          </div>
        </div>

        {parsedFromEpoch.error && (
          <div role="alert" className="text-xs sm:text-sm text-red-700">
            {parsedFromEpoch.error}
          </div>
        )}

        {parsedFromEpoch.date && (
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
              <dt className="text-slate-500">{s.isoLabel}</dt>
              <dd className="mt-1 font-mono text-slate-900 break-all tabular-nums">
                {parsedFromEpoch.date.toISOString()}
              </dd>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
              <dt className="text-slate-500">{s.localLabel}</dt>
              <dd className="mt-1 font-mono text-slate-900 break-all tabular-nums">
                {parsedFromEpoch.date.toLocaleString(locale)}
              </dd>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
              <dt className="text-slate-500">{s.rfcLabel}</dt>
              <dd className="mt-1 font-mono text-slate-900 break-all tabular-nums">
                {parsedFromEpoch.date.toUTCString()}
              </dd>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
              <dt className="text-slate-500">{s.relativeLabel} ({unitLabels[parsedFromEpoch.detected as 'seconds' | 'milliseconds']})</dt>
              <dd className="mt-1 font-mono text-slate-900 tabular-nums">
                {formatRelative(parsedFromEpoch.ms, nowMs, locale)}
              </dd>
            </div>
          </dl>
        )}
      </div>

      {/* Converter 2: Date -> Timestamp */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
        <div>
          <label htmlFor="date-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.converter2Label}
          </label>
          <input
            id="date-in"
            type="datetime-local"
            step={1}
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="w-full sm:w-80 rounded-lg border border-slate-300 bg-white px-3.5 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        {parsedFromDate && (
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 flex items-center justify-between gap-2">
              <div>
                <dt className="text-slate-500">{s.secondsLabel}</dt>
                <dd className="mt-0.5 font-mono font-semibold text-slate-900 tabular-nums">
                  {parsedFromDate.seconds}
                </dd>
              </div>
              <CopyButton text={String(parsedFromDate.seconds)} label={t.common.copy} copiedLabel={t.common.copied} />
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 flex items-center justify-between gap-2">
              <div>
                <dt className="text-slate-500">{s.millisecondsLabel}</dt>
                <dd className="mt-0.5 font-mono font-semibold text-slate-900 tabular-nums">
                  {parsedFromDate.milliseconds}
                </dd>
              </div>
              <CopyButton text={String(parsedFromDate.milliseconds)} label={t.common.copy} copiedLabel={t.common.copied} />
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
              <dt className="text-slate-500">{s.isoLabel2}</dt>
              <dd className="mt-0.5 font-mono text-slate-900 break-all tabular-nums">
                {parsedFromDate.iso}
              </dd>
            </div>
          </dl>
        )}
      </div>
    </div>
  );
}
