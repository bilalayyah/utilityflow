import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

function fmt(n: number): string {
  if (!Number.isFinite(n)) return '—';
  return Number(n.toFixed(6)).toLocaleString(undefined, { maximumFractionDigits: 6 });
}

export default function PercentageCalculatorTool() {
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
      return { valid: false, value: 0, error: 'Enter valid numbers.' };
    }
    return { valid: true, value: (p / 100) * y, error: '' };
  }, [m1Pct, m1Base]);

  const r2 = useMemo(() => {
    const x = Number(m2Part);
    const y = Number(m2Whole);
    if (m2Part.trim() === '' || m2Whole.trim() === '' || !Number.isFinite(x) || !Number.isFinite(y)) {
      return { valid: false, value: 0, error: 'Enter valid numbers.' };
    }
    if (y === 0) {
      return { valid: false, value: 0, error: 'Total (Y) cannot be 0.' };
    }
    return { valid: true, value: (x / y) * 100, error: '' };
  }, [m2Part, m2Whole]);

  const r3 = useMemo(() => {
    const a = Number(m3From);
    const b = Number(m3To);
    if (m3From.trim() === '' || m3To.trim() === '' || !Number.isFinite(a) || !Number.isFinite(b)) {
      return { valid: false, value: 0, diff: 0, error: 'Enter valid numbers.' };
    }
    if (a === 0) {
      return { valid: false, value: 0, diff: 0, error: 'Starting value cannot be 0.' };
    }
    const diff = b - a;
    return { valid: true, value: (diff / Math.abs(a)) * 100, diff, error: '' };
  }, [m3From, m3To]);

  return (
    <div className="space-y-6">
      {/* Card 1 */}
      <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900">1. Percentage of a Number</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>What is</span>
          <input
            type="number"
            aria-label="Percentage X"
            value={m1Pct}
            onChange={(e) => setM1Pct(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>% of</span>
          <input
            type="number"
            aria-label="Base number Y"
            value={m1Base}
            onChange={(e) => setM1Base(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>?</span>
        </div>
        {r1.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              Result: <strong className="text-lg text-indigo-600 tabular-nums">{fmt(r1.value)}</strong>{' '}
              <span className="text-xs text-slate-500">
                (Formula: ({m1Pct} ÷ 100) × {m1Base})
              </span>
            </div>
            <CopyButton text={String(Number(r1.value.toFixed(6)))} label="Copy" />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r1.error}</p>
        )}
      </section>

      {/* Card 2 */}
      <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900">2. Part as a Percentage of Whole</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <input
            type="number"
            aria-label="Part value X"
            value={m2Part}
            onChange={(e) => setM2Part(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>is what % of</span>
          <input
            type="number"
            aria-label="Whole value Y"
            value={m2Whole}
            onChange={(e) => setM2Whole(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>?</span>
        </div>
        {r2.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              Result:{' '}
              <strong className="text-lg text-indigo-600 tabular-nums">{fmt(r2.value)}%</strong>{' '}
              <span className="text-xs text-slate-500">
                (Formula: ({m2Part} ÷ {m2Whole}) × 100)
              </span>
            </div>
            <CopyButton text={`${Number(r2.value.toFixed(6))}%`} label="Copy" />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r2.error}</p>
        )}
      </section>

      {/* Card 3 */}
      <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900">3. Percentage Increase or Decrease</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>From</span>
          <input
            type="number"
            aria-label="Initial value A"
            value={m3From}
            onChange={(e) => setM3From(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>to</span>
          <input
            type="number"
            aria-label="Final value B"
            value={m3To}
            onChange={(e) => setM3To(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
        </div>
        {r3.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              Change:{' '}
              <strong
                className={`text-lg tabular-nums ${
                  r3.value >= 0 ? 'text-emerald-700' : 'text-red-700'
                }`}
              >
                {r3.value >= 0 ? '+' : ''}
                {fmt(r3.value)}%
              </strong>{' '}
              <span className="text-xs text-slate-500">
                (Difference: {r3.diff >= 0 ? '+' : ''}
                {fmt(r3.diff)})
              </span>
            </div>
            <CopyButton text={`${Number(r3.value.toFixed(6))}%`} label="Copy" />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r3.error}</p>
        )}
      </section>
    </div>
  );
}
