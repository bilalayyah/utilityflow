import { Printer } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';
import {
  calculateHeatIndex,
  convertTemperatureValue,
  fahrenheitToCelsius,
  validateHeatIndexInput,
} from './heatIndex';
import type { HeatIndexBand, HeatIndexResult, TemperatureUnit } from './heatIndex';

const STRINGS_EN = {
  unitFahrenheit: '°F (Fahrenheit)',
  unitCelsius: '°C (Celsius)',
  tempLabel: 'Air temperature',
  humidityLabel: 'Relative humidity',
  humidityUnit: '%',
  calculateLabel: 'Calculate',
  resetLabel: 'Reset',
  printLabel: 'Print result',
  copyResult: 'Copy Result',
  copy: 'Copy',
  tryExampleLabel: 'Try Example',
  exampleHint: 'Example: 100°F with 55% humidity → heat index 123.6°F.',
  comparisonTitle: 'Compare two conditions',
  comparisonHint:
    'See how humidity changes the heat index at the same — or a different — air temperature.',
  conditionA: 'Condition A',
  conditionB: 'Condition B',
  heatIndexLabel: 'Heat index',
  airTempLabel: 'Air temperature',
  humidityResultLabel: 'Relative humidity',
  differenceLabel: 'Difference from air temperature',
  methodLabel: 'Method',
  methodSimple: 'Simple approximation',
  methodRegression: 'Rothfusz regression',
  heatStrokeReminder:
    'If someone develops heat-stroke symptoms — such as confusion, fainting, or a very high body temperature — move them to a cool environment and seek urgent medical help immediately.',
  outOfRangeTitle: 'Outside the standard applicability range',
  outOfRangeTemp:
    'The air temperature is above 110°F, the top of the standard heat-index chart, so no heat-index value is shown.',
  outOfRangeHi:
    'The calculated heat index would be above 180°F, beyond the standard applicability range, so no heat-index value is shown.',
  tableTitle: 'Heat index reference table',
  tableHint:
    'Heat index in °F, calculated from air temperature and relative humidity. “—” means the combination is outside the standard applicability range.',
  tableTempHeader: 'Air temp (°F)',
  historyTitle: 'Recent calculations',
  historyEmpty: 'Your recent calculations will appear here.',
  clearHistory: 'Clear history',
  diffHeatIndex: 'Heat index A',
  diffHeatIndexB: 'Heat index B',
  diffDeltaHi: 'Difference (Δ heat index)',
  diffDeltaTemp: 'Difference (Δ air temperature)',
  diffDeltaRh: 'Difference (Δ humidity)',
  invalidComparison: 'Enter a valid temperature and humidity for this condition.',
  outOfRangeComparison: 'Outside the standard applicability range.',
};

type PairOutcome =
  | { state: 'error'; error: string }
  | { state: 'out-of-range'; result: HeatIndexResult }
  | { state: 'ok'; result: HeatIndexResult };

function computePair(tempRaw: string, rhRaw: string, unit: TemperatureUnit): PairOutcome {
  const validation = validateHeatIndexInput(tempRaw, rhRaw, unit);
  if (!validation.ok || validation.tempF === undefined || validation.rh === undefined) {
    return { state: 'error', error: validation.error ?? 'Enter a valid temperature and humidity.' };
  }
  const result = calculateHeatIndex(validation.tempF, validation.rh);
  if (result.outOfRange) return { state: 'out-of-range', result };
  return { state: 'ok', result };
}

function fmt1(value: number): string {
  return value.toFixed(1);
}

function fmtSigned(value: number, decimals = 1): string {
  const sign = value > 0 ? '+' : value < 0 ? '−' : '';
  return `${sign}${Math.abs(value).toFixed(decimals)}`;
}

/** Tailwind classes per risk-band tone (mirrors the BMI classifyBmi tone pattern). */
function bandClasses(tone: HeatIndexBand['tone']): {
  panel: string;
  label: string;
} {
  switch (tone) {
    case 'amber':
      return {
        panel: 'border-amber-300 bg-amber-50',
        label: 'text-amber-800',
      };
    case 'orange':
      return {
        panel: 'border-orange-300 bg-orange-50',
        label: 'text-orange-800',
      };
    case 'red':
      return {
        panel: 'border-red-300 bg-red-50',
        label: 'text-red-800',
      };
    case 'darkred':
      return {
        panel: 'border-rose-400 bg-rose-50',
        label: 'text-rose-900',
      };
    case 'none':
    default:
      return {
        panel: 'border-emerald-200 bg-emerald-50',
        label: 'text-emerald-800',
      };
  }
}

const TABLE_TEMPS_F = [80, 85, 90, 95, 100, 105, 110];
const TABLE_RH = [40, 50, 60, 70, 80];

const INPUT_CLASS =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const PRIMARY_BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg bg-[#0E8A66] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0B7A59] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const EXAMPLE_BUTTON_CLASS =
  'rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const HISTORY_BUTTON_CLASS =
  'block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-start hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const HISTORY_LIMIT = 8;

interface HistoryItem {
  id: number;
  input: string;
  output: string;
  snapshot: { temp: string; rh: string; unit: TemperatureUnit };
}

const DEFAULT_TEMP = '90';
const DEFAULT_RH = '70';
const DEFAULT_COMP_A_TEMP = '90';
const DEFAULT_COMP_A_RH = '40';
const DEFAULT_COMP_B_TEMP = '90';
const DEFAULT_COMP_B_RH = '70';

export default function HeatIndexCalculatorTool() {
  const { t } = useLocale();
  const s = useComponentStrings('heat-index-calculator', STRINGS_EN);
  const palette = pastelForKey('heat-index-calculator');

  const [unit, setUnit] = useState<TemperatureUnit>('F');
  const [temp, setTemp] = useState(DEFAULT_TEMP);
  const [rh, setRh] = useState(DEFAULT_RH);

  const [compATemp, setCompATemp] = useState(DEFAULT_COMP_A_TEMP);
  const [compARh, setCompARh] = useState(DEFAULT_COMP_A_RH);
  const [compBTemp, setCompBTemp] = useState(DEFAULT_COMP_B_TEMP);
  const [compBRh, setCompBRh] = useState(DEFAULT_COMP_B_RH);

  const [history, setHistory] = useState<HistoryItem[]>([]);
  const historyIdRef = useRef(0);

  // Live result: recalculated on every keystroke; history commits only on
  // Calculate / Enter (Hourly post-fix pattern).
  const outcome: PairOutcome = useMemo(
    () => computePair(temp, rh, unit),
    [temp, rh, unit],
  );

  const compA: PairOutcome = useMemo(
    () => computePair(compATemp, compARh, unit),
    [compATemp, compARh, unit],
  );
  const compB: PairOutcome = useMemo(
    () => computePair(compBTemp, compBRh, unit),
    [compBTemp, compBRh, unit],
  );

  const addToHistory = (entry: Omit<HistoryItem, 'id'>) => {
    setHistory((prev) => {
      const top = prev[0];
      if (top && top.input === entry.input && top.output === entry.output) {
        return prev;
      }
      historyIdRef.current += 1;
      return [{ ...entry, id: historyIdRef.current }, ...prev].slice(0, HISTORY_LIMIT);
    });
  };

  const commit = () => {
    if (outcome.state !== 'ok') return;
    const r = outcome.result;
    const hiF = r.heatIndexF;
    const hiC = r.heatIndexC;
    if (hiF === null || hiC === null) return;
    addToHistory({
      input: `${fmt1(r.tempF)}°F, ${r.rh}% RH`,
      output: `${fmt1(hiF)}°F (${fmt1(hiC)}°C)${r.band ? ` — ${r.band.label}` : ''}`,
      snapshot: { temp, rh, unit },
    });
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commit();
    }
  };

  const reuseHistory = (item: HistoryItem) => {
    setTemp(item.snapshot.temp);
    setRh(item.snapshot.rh);
    setUnit(item.snapshot.unit);
  };

  /**
   * Unit switch: CONVERT the displayed value, never re-read the same number
   * in the new unit (the ToolPlatform bug: 100°F re-read as 100°C produced
   * "1169.8°F / 631.0°C, Extreme Danger"). 100°F becomes 37.8°C.
   */
  const switchUnit = (next: TemperatureUnit) => {
    if (next === unit) return;
    const convert = (raw: string): string => {
      const n = Number(raw);
      if (raw.trim() === '' || !Number.isFinite(n)) return raw;
      const converted = convertTemperatureValue(n, unit, next);
      return String(Number(converted.toFixed(1)));
    };
    setTemp(convert(temp));
    setCompATemp(convert(compATemp));
    setCompBTemp(convert(compBTemp));
    setUnit(next);
  };

  const handleReset = () => {
    setUnit('F');
    setTemp(DEFAULT_TEMP);
    setRh(DEFAULT_RH);
    setCompATemp(DEFAULT_COMP_A_TEMP);
    setCompARh(DEFAULT_COMP_A_RH);
    setCompBTemp(DEFAULT_COMP_B_TEMP);
    setCompBRh(DEFAULT_COMP_B_RH);
  };

  const handleTryExample = () => {
    // 100°F / 55% -> 123.6°F (regression, no adjustment).
    setUnit('F');
    setTemp('100');
    setRh('55');
  };

  const result = outcome.state === 'ok' ? outcome.result : null;
  const outOfRangeResult = outcome.state === 'out-of-range' ? outcome.result : null;

  const copyText =
    result && result.heatIndexF !== null && result.heatIndexC !== null
      ? `Heat index: ${fmt1(result.heatIndexF)}°F (${fmt1(result.heatIndexC)}°C) — air temperature ${fmt1(result.tempF)}°F, relative humidity ${result.rh}%. Difference: ${fmtSigned(result.differenceF ?? 0)}°F. Risk: ${result.band ? result.band.label : '—'}.`
      : '';

  const band = result?.band ?? null;
  const bandStyle = band ? bandClasses(band.tone) : null;

  const deltaHi =
    compA.state === 'ok' && compB.state === 'ok' && compA.result.heatIndexF !== null && compB.result.heatIndexF !== null
      ? compB.result.heatIndexF - compA.result.heatIndexF
      : null;
  const deltaT =
    compA.state !== 'error' && compB.state !== 'error'
      ? compB.result.tempF - compA.result.tempF
      : null;
  const deltaRh =
    compA.state !== 'error' && compB.state !== 'error'
      ? compB.result.rh - compA.result.rh
      : null;

  return (
    <div className="space-y-6">
      {/* Unit toggle — BMI metric/imperial pill pattern. */}
      <div className="inline-flex rounded-lg bg-slate-100 p-1" role="group" aria-label="Temperature unit">
        <button
          type="button"
          onClick={() => switchUnit('F')}
          aria-pressed={unit === 'F'}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            unit === 'F' ? `${palette.soft} shadow-xs` : 'text-slate-600'
          }`}
        >
          {s.unitFahrenheit}
        </button>
        <button
          type="button"
          onClick={() => switchUnit('C')}
          aria-pressed={unit === 'C'}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            unit === 'C' ? `${palette.soft} shadow-xs` : 'text-slate-600'
          }`}
        >
          {s.unitCelsius}
        </button>
      </div>

      {/* Main inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hi-temp" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.tempLabel} ({unit === 'F' ? '°F' : '°C'})
          </label>
          <input
            id="hi-temp"
            type="number"
            inputMode="decimal"
            step="0.1"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            onKeyDown={handleEnter}
            className={`${INPUT_CLASS} font-mono tabular-nums`}
          />
        </div>
        <div>
          <label htmlFor="hi-rh" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.humidityLabel} (%)
          </label>
          <input
            id="hi-rh"
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            step="1"
            value={rh}
            onChange={(e) => setRh(e.target.value)}
            onKeyDown={handleEnter}
            className={`${INPUT_CLASS} font-mono tabular-nums`}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={commit} className={PRIMARY_BUTTON_CLASS}>
          {s.calculateLabel}
        </button>
        <button type="button" onClick={handleReset} className={BUTTON_CLASS}>
          {s.resetLabel}
        </button>
        <button type="button" onClick={handleTryExample} className={EXAMPLE_BUTTON_CLASS}>
          {s.tryExampleLabel}
        </button>
        <button type="button" onClick={() => window.print()} className={BUTTON_CLASS}>
          <Printer className="w-4 h-4" />
          <span className="ml-2">{s.printLabel}</span>
        </button>
      </div>
      <p className="text-xs text-slate-500 -mt-3">{s.exampleHint}</p>

      {/* State (1): invalid input — red role="alert", no result. */}
      {outcome.state === 'error' && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {outcome.error}
        </div>
      )}

      {/* State (2): valid input outside the standard applicability range — amber
          warning, NO bare heat-index number. */}
      {outOfRangeResult && (
        <div
          role="alert"
          className="rounded-xl border border-amber-300 bg-amber-50 p-5 space-y-3"
        >
          <h2 className="text-base font-bold text-amber-900">{s.outOfRangeTitle}</h2>
          <p className="text-sm text-amber-800">
            {outOfRangeResult.outOfRangeReason === 'temperature-above-range'
              ? s.outOfRangeTemp
              : s.outOfRangeHi}
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-xs font-medium text-amber-700">{s.airTempLabel}</dt>
              <dd className="mt-1 font-mono font-semibold text-amber-900 tabular-nums">
                {fmt1(outOfRangeResult.tempF)}°F
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-amber-700">{s.humidityResultLabel}</dt>
              <dd className="mt-1 font-mono font-semibold text-amber-900 tabular-nums">
                {outOfRangeResult.rh}%
              </dd>
            </div>
          </dl>
          {/* heat-index-beyond-range keeps its Extreme Danger band; the
              temperature-above-range case has band null and shows no band. */}
          {outOfRangeResult.band && (
            <div className={`rounded-lg border px-4 py-3 ${bandClasses(outOfRangeResult.band.tone).panel}`}>
              <p className={`text-sm font-semibold ${bandClasses(outOfRangeResult.band.tone).label}`}>
                {outOfRangeResult.band.label}
              </p>
              <p className="mt-1 text-sm text-rose-900">{outOfRangeResult.band.safetyText}</p>
              <p className="mt-2 text-sm text-rose-900">{s.heatStrokeReminder}</p>
            </div>
          )}
        </div>
      )}

      {/* State (3): valid result + risk band (classified strictly by the
          COMPUTED heat index — 90.7°F is Extreme Caution, not Caution). */}
      {result && result.heatIndexF !== null && result.heatIndexC !== null && (
        <div className="space-y-4" id="hi-result">
          <div className={`rounded-xl border border-slate-200 ${palette.card} p-5`}>
            <div className={`text-xs font-semibold ${palette.link} mb-1`}>{s.heatIndexLabel}</div>
            <div className={`text-3xl sm:text-4xl font-bold font-mono ${palette.link} tabular-nums`}>
              {fmt1(result.heatIndexF)}°F{' '}
              <span className="text-xl sm:text-2xl font-semibold">({fmt1(result.heatIndexC)}°C)</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <CopyButton
                text={copyText}
                label={s.copyResult}
                copiedLabel={t.common.copied}
              />
              <CopyButton
                text={`${fmt1(result.heatIndexC)}°C`}
                label={s.copy}
                copiedLabel={t.common.copied}
              />
            </div>
            <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-xs font-medium text-slate-500">{s.airTempLabel}</dt>
                <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">
                  {fmt1(result.tempF)}°F ({fmt1(fahrenheitToCelsius(result.tempF))}°C)
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">{s.humidityResultLabel}</dt>
                <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">{result.rh}%</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">{s.differenceLabel}</dt>
                <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">
                  {result.differenceF !== null && result.differenceC !== null
                    ? `${fmtSigned(result.differenceF)}°F (${fmtSigned(result.differenceC)}°C)`
                    : '—'}
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-slate-500">
              {s.methodLabel}: {result.method === 'regression' ? s.methodRegression : s.methodSimple}
            </p>
          </div>

          {band && bandStyle && (
            <div className={`rounded-xl border p-5 space-y-2 ${bandStyle.panel}`}>
              <p className={`text-lg font-bold ${bandStyle.label}`}>{band.label}</p>
              <p className="text-sm text-slate-800">{band.safetyText}</p>
              <p className="text-sm text-slate-800">{s.heatStrokeReminder}</p>
            </div>
          )}
        </div>
      )}

      {/* Comparison mode — TextDiffChecker two-pane layout: side-by-side on
          desktop, stacked on mobile. */}
      <section aria-label={s.comparisonTitle} className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">{s.comparisonTitle}</h2>
          <p className="mt-1 text-sm text-slate-500">{s.comparisonHint}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {(
            [
              { key: 'a', title: s.conditionA, temp: compATemp, rh: compARh, setTemp: setCompATemp, setRh: setCompARh, outcome: compA },
              { key: 'b', title: s.conditionB, temp: compBTemp, rh: compBRh, setTemp: setCompBTemp, setRh: setCompBRh, outcome: compB },
            ] as const
          ).map((c) => (
            <div key={c.key} className="rounded-xl border border-slate-200 p-4 space-y-3">
              <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor={`hi-comp-${c.key}-temp`}
                    className="block text-xs font-semibold text-slate-900 mb-1.5"
                  >
                    {s.tempLabel} ({unit === 'F' ? '°F' : '°C'})
                  </label>
                  <input
                    id={`hi-comp-${c.key}-temp`}
                    type="number"
                    inputMode="decimal"
                    step="0.1"
                    value={c.temp}
                    onChange={(e) => c.setTemp(e.target.value)}
                    onKeyDown={handleEnter}
                    className={`${INPUT_CLASS} font-mono tabular-nums`}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`hi-comp-${c.key}-rh`}
                    className="block text-xs font-semibold text-slate-900 mb-1.5"
                  >
                    {s.humidityLabel} (%)
                  </label>
                  <input
                    id={`hi-comp-${c.key}-rh`}
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={100}
                    step="1"
                    value={c.rh}
                    onChange={(e) => c.setRh(e.target.value)}
                    onKeyDown={handleEnter}
                    className={`${INPUT_CLASS} font-mono tabular-nums`}
                  />
                </div>
              </div>
              {c.outcome.state === 'error' && (
                <p role="alert" className="text-sm text-red-800">
                  {s.invalidComparison}
                </p>
              )}
              {c.outcome.state === 'out-of-range' && (
                <p role="alert" className="text-sm text-amber-800">
                  {s.outOfRangeComparison}
                </p>
              )}
              {c.outcome.state === 'ok' && c.outcome.result.heatIndexF !== null && c.outcome.result.heatIndexC !== null && (
                <div>
                  <p className="text-xs font-medium text-slate-500">{s.heatIndexLabel}</p>
                  <p className="mt-1 text-2xl font-bold font-mono text-[#0E8A66] tabular-nums">
                    {fmt1(c.outcome.result.heatIndexF)}°F ({fmt1(c.outcome.result.heatIndexC)}°C)
                  </p>
                  {c.outcome.result.band && (
                    <p className={`mt-1 text-sm font-semibold ${bandClasses(c.outcome.result.band.tone).label}`}>
                      {c.outcome.result.band.label}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
          <div className="rounded-lg border border-slate-200 p-3">
            <dt className="text-xs font-medium text-slate-500">{s.diffHeatIndex}</dt>
            <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">
              {compA.state === 'ok' && compA.result.heatIndexF !== null ? `${fmt1(compA.result.heatIndexF)}°F` : '—'}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <dt className="text-xs font-medium text-slate-500">{s.diffHeatIndexB}</dt>
            <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">
              {compB.state === 'ok' && compB.result.heatIndexF !== null ? `${fmt1(compB.result.heatIndexF)}°F` : '—'}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <dt className="text-xs font-medium text-slate-500">{s.diffDeltaHi}</dt>
            <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">
              {deltaHi !== null ? `${fmtSigned(deltaHi)}°F` : '—'}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <dt className="text-xs font-medium text-slate-500">{s.diffDeltaTemp}</dt>
            <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">
              {deltaT !== null ? `${fmtSigned(deltaT)}°F` : '—'}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <dt className="text-xs font-medium text-slate-500">{s.diffDeltaRh}</dt>
            <dd className="mt-1 font-mono font-semibold text-slate-900 tabular-nums">
              {deltaRh !== null ? `${fmtSigned(deltaRh, 0)}%` : '—'}
            </dd>
          </div>
        </dl>
      </section>

      {/* Reference table — generated at render time from the engine, never
          hardcoded (UnitConverterTool generated-<table> pattern). */}
      <section aria-label={s.tableTitle} className="space-y-2">
        <h2 className="text-base font-bold text-slate-900">{s.tableTitle}</h2>
        <p className="text-sm text-slate-500">{s.tableHint}</p>
        <div className="rounded-xl border border-slate-200 overflow-x-auto">
          <table className="w-full text-start text-sm">
            <thead className={`${palette.soft} text-xs text-slate-500 border-b border-slate-200`}>
              <tr>
                <th scope="col" className="py-2.5 px-4 font-semibold">
                  {s.tableTempHeader}
                </th>
                {TABLE_RH.map((rhValue) => (
                  <th key={rhValue} scope="col" className="py-2.5 px-4 font-semibold text-end">
                    {rhValue}%
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 tabular-nums">
              {TABLE_TEMPS_F.map((tF) => (
                <tr key={tF}>
                  <td className="py-2 px-4 font-mono font-semibold text-slate-900">{tF}°F</td>
                  {TABLE_RH.map((rhValue) => {
                    const cell = calculateHeatIndex(tF, rhValue);
                    return (
                      <td key={rhValue} className="py-2 px-4 font-mono text-slate-800 text-end">
                        {cell.outOfRange || cell.heatIndexF === null ? '—' : `${fmt1(cell.heatIndexF)}°F`}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* History — Hourly post-fix pattern: commits ONLY on Calculate/Enter,
          max 8, dedup guard. Zero blur handlers anywhere in this file. */}
      <section aria-label={s.historyTitle} className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-bold text-slate-900">{s.historyTitle}</h2>
          {history.length > 0 && (
            <button
              type="button"
              onClick={() => setHistory([])}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]"
            >
              {s.clearHistory}
            </button>
          )}
        </div>
        {history.length === 0 ? (
          <p className="text-sm text-slate-500">{s.historyEmpty}</p>
        ) : (
          <ul className="space-y-2">
            {history.map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => reuseHistory(item)} className={HISTORY_BUTTON_CLASS}>
                  <span className="block font-mono text-sm tabular-nums break-all">
                    {item.input} → {item.output}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

    </div>
  );
}
