import { useMemo, useState } from 'react';

const TIP_PRESETS = [10, 15, 18, 20, 25];

function money(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TipCalculatorTool() {
  const [billAmount, setBillAmount] = useState('84.50');
  const [tipPercent, setTipPercent] = useState('18');
  const [people, setPeople] = useState('2');
  const [rounding, setRounding] = useState<'none' | 'total-up' | 'per-person-up'>('none');

  const calc = useMemo(() => {
    const bill = Number(billAmount);
    const tipPct = Number(tipPercent);
    const split = Math.round(Number(people));

    if (!Number.isFinite(bill) || bill < 0) return { error: 'Bill amount cannot be negative.', data: null };
    if (!Number.isFinite(tipPct) || tipPct < 0 || tipPct > 200) return { error: 'Tip percentage must be between 0% and 200%.', data: null };
    if (!Number.isFinite(split) || split < 1 || split > 100) return { error: 'Number of people must be between 1 and 100.', data: null };

    let tipTotal = bill * (tipPct / 100);
    let totalBill = bill + tipTotal;
    let perPerson = totalBill / split;

    if (rounding === 'total-up') {
      totalBill = Math.ceil(totalBill);
      tipTotal = Math.max(0, totalBill - bill);
      perPerson = totalBill / split;
    } else if (rounding === 'per-person-up') {
      perPerson = Math.ceil(perPerson);
      totalBill = perPerson * split;
      tipTotal = Math.max(0, totalBill - bill);
    }

    const effectiveTipPct = bill > 0 ? (tipTotal / bill) * 100 : 0;

    return {
      error: '',
      data: {
        tipTotal,
        totalBill,
        perPerson,
        tipPerPerson: tipTotal / split,
        effectiveTipPct,
      },
    };
  }, [billAmount, tipPercent, people, rounding]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="tip-bill" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Bill Subtotal ($)
          </label>
          <input
            id="tip-bill"
            type="number"
            min={0}
            step="0.5"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="tip-pct" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Tip Percentage (%)
          </label>
          <input
            id="tip-pct"
            type="number"
            min={0}
            max={200}
            step="1"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="tip-people" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Split Between (People)
          </label>
          <input
            id="tip-people"
            type="number"
            min={1}
            max={100}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-600 mr-1">Tip presets:</span>
          {TIP_PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setTipPercent(String(p))}
              className={`rounded-md px-3 py-1.5 text-xs font-mono cursor-pointer ${
                Number(tipPercent) === p
                  ? 'bg-indigo-600 text-white'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {p}%
            </button>
          ))}
        </div>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700">
          <span>Rounding:</span>
          <select
            value={rounding}
            onChange={(e) => setRounding(e.target.value as 'none' | 'total-up' | 'per-person-up')}
            className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm"
          >
            <option value="none">Exact cents</option>
            <option value="total-up">Round total up ($)</option>
            <option value="per-person-up">Round per-person up ($)</option>
          </select>
        </label>
      </div>

      {calc.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {calc.error}
        </div>
      )}

      {calc.data && (
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
            <dt className="text-xs font-medium text-indigo-700">Per Person Total</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.perPerson)}
            </dd>
            <dd className="mt-0.5 text-xs text-slate-600 tabular-nums">
              Includes ${money(calc.data.tipPerPerson)} tip each
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">Total Tip</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.tipTotal)}
            </dd>
            <dd className="mt-0.5 text-xs text-slate-500 tabular-nums">
              Effective rate: {calc.data.effectiveTipPct.toFixed(1)}%
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">Total Bill</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.totalBill)}
            </dd>
          </div>
        </dl>
      )}
    </div>
  );
}
