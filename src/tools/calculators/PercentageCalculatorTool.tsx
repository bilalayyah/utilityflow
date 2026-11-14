import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { PASTEL_PALETTES } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errorEnterNumbers: 'Enter valid numbers.',
    errorTotalZero: 'Total (Y) cannot be 0.',
    errorStartZero: 'Starting value cannot be 0.',
    heading1: '1. Percentage of a Number',
    heading2: '2. Part as a Percentage of Whole',
    heading3: '3. Percentage Increase or Decrease',
    whatIs: 'What is',
    percentOf: '% of',
    isWhatPercentOf: 'is what % of',
    fromWord: 'From',
    toWord: 'to',
    result: 'Result:',
    change: 'Change:',
    formula: 'Formula',
    difference: 'Difference',
    ariaPctX: 'Percentage X',
    ariaBaseY: 'Base number Y',
    ariaPartX: 'Part value X',
    ariaWholeY: 'Whole value Y',
    ariaInitialA: 'Initial value A',
    ariaFinalB: 'Final value B',
  };

function fmt(n: number, locale: string): string {
  if (!Number.isFinite(n)) return '—';
  return Number(n.toFixed(6)).toLocaleString(locale, { maximumFractionDigits: 6 });
}

export default function PercentageCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('percentage-calculator', STRINGS_EN);
  // Mode 1: What is X% of Y?
  const [m1Pct, setM1Pct] = useState('15');
  const [m1Base, setM1Base] = useState('240');

  // Mode 2: X is what % of Y?
  const [m2Part, setM2Part] = useState('45');
  const [m2Whole, setM2Whole] = useState('180');

  // Mode 3: Percentage change from A to B
  const [m3From, setM3From] = useState('120');
  const [m3To, setM3To] = useState('150');

  const r1 = useMemo(() => {
    const p = Number(m1Pct);
    const y = Number(m1Base);
    if (m1Pct.trim() === '' || m1Base.trim() === '' || !Number.isFinite(p) || !Number.isFinite(y)) {
      return { valid: false, value: 0, error: s.errorEnterNumbers };
    }
    return { valid: true, value: (p / 100) * y, error: '' };
  }, [m1Pct, m1Base, s]);

  const r2 = useMemo(() => {
    const x = Number(m2Part);
    const y = Number(m2Whole);
    if (m2Part.trim() === '' || m2Whole.trim() === '' || !Number.isFinite(x) || !Number.isFinite(y)) {
      return { valid: false, value: 0, error: s.errorEnterNumbers };
    }
    if (y === 0) {
      return { valid: false, value: 0, error: s.errorTotalZero };
    }
    return { valid: true, value: (x / y) * 100, error: '' };
  }, [m2Part, m2Whole, s]);

  const r3 = useMemo(() => {
    const a = Number(m3From);
    const b = Number(m3To);
    if (m3From.trim() === '' || m3To.trim() === '' || !Number.isFinite(a) || !Number.isFinite(b)) {
      return { valid: false, value: 0, diff: 0, error: s.errorEnterNumbers };
    }
    if (a === 0) {
      return { valid: false, value: 0, diff: 0, error: s.errorStartZero };
    }
    const diff = b - a;
    return { valid: true, value: (diff / Math.abs(a)) * 100, diff, error: '' };
  }, [m3From, m3To, s]);

  return (
    <div className="space-y-6">
      {/* Card 1 */}
      <section className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[0].card} p-5 space-y-3`}>
        <h2 className="text-base font-bold text-slate-900">{s.heading1}</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>{s.whatIs}</span>
          <input
            type="number"
            aria-label={s.ariaPctX}
            value={m1Pct}
            onChange={(e) => setM1Pct(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>{s.percentOf}</span>
          <input
            type="number"
            aria-label={s.ariaBaseY}
            value={m1Base}
            onChange={(e) => setM1Base(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>?</span>
        </div>
        {r1.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              {s.result}{' '}
              <strong className={`text-lg ${PASTEL_PALETTES[0].link} tabular-nums`}>{fmt(r1.value, locale)}</strong>{' '}
              <span className="text-xs text-slate-500">
                ({s.formula}: ({m1Pct} ÷ 100) × {m1Base})
              </span>
            </div>
            <CopyButton
              text={String(Number(r1.value.toFixed(6)))}
              label={t.common.copy}
              copiedLabel={t.common.copied}
            />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r1.error}</p>
        )}
      </section>

      {/* Card 2 */}
      <section className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[1].card} p-5 space-y-3`}>
        <h2 className="text-base font-bold text-slate-900">{s.heading2}</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <input
            type="number"
            aria-label={s.ariaPartX}
            value={m2Part}
            onChange={(e) => setM2Part(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>{s.isWhatPercentOf}</span>
          <input
            type="number"
            aria-label={s.ariaWholeY}
            value={m2Whole}
            onChange={(e) => setM2Whole(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>?</span>
        </div>
        {r2.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              {s.result}{' '}
              <strong className={`text-lg ${PASTEL_PALETTES[1].link} tabular-nums`}>{fmt(r2.value, locale)}%</strong>{' '}
              <span className="text-xs text-slate-500">
                ({s.formula}: ({m2Part} ÷ {m2Whole}) × 100)
              </span>
            </div>
            <CopyButton
              text={`${Number(r2.value.toFixed(6))}%`}
              label={t.common.copy}
              copiedLabel={t.common.copied}
            />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r2.error}</p>
        )}
      </section>

      {/* Card 3 */}
      <section className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[2].card} p-5 space-y-3`}>
        <h2 className="text-base font-bold text-slate-900">{s.heading3}</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>{s.fromWord}</span>
          <input
            type="number"
            aria-label={s.ariaInitialA}
            value={m3From}
            onChange={(e) => setM3From(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>{s.toWord}</span>
          <input
            type="number"
            aria-label={s.ariaFinalB}
            value={m3To}
            onChange={(e) => setM3To(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
        </div>
        {r3.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              {s.change}{' '}
              <strong
                className={`text-lg tabular-nums ${
                  r3.value >= 0 ? 'text-emerald-700' : 'text-red-700'
                }`}
              >
                {r3.value >= 0 ? '+' : ''}
                {fmt(r3.value, locale)}%
              </strong>{' '}
              <span className="text-xs text-slate-500">
                ({s.difference}: {r3.diff >= 0 ? '+' : ''}
                {fmt(r3.diff, locale)})
              </span>
            </div>
            <CopyButton
              text={`${Number(r3.value.toFixed(6))}%`}
              label={t.common.copy}
              copiedLabel={t.common.copied}
            />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r3.error}</p>
        )}
      </section>
    </div>
  );
}
