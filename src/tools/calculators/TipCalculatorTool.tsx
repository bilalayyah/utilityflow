import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errorBill: 'Bill amount cannot be negative.',
    errorTip: 'Tip percentage must be between 0% and 200%.',
    errorPeople: 'Number of people must be between 1 and 100.',
    billLabel: 'Bill Subtotal ($)',
    tipLabel: 'Tip Percentage (%)',
    peopleLabel: 'Split Between (People)',
    presetsLabel: 'Tip presets:',
    roundingLabel: 'Rounding:',
    exactOption: 'Exact cents',
    totalUpOption: 'Round total up ($)',
    perPersonUpOption: 'Round per-person up ($)',
    perPersonTotal: 'Per Person Total',
    includes: 'Includes',
    tipEach: 'tip each',
    totalTip: 'Total Tip',
    effectiveRate: 'Effective rate:',
    totalBill: 'Total Bill',
  };

const TIP_PRESETS = [10, 15, 18, 20, 25];

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TipCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('tip-calculator', STRINGS_EN);
  const [billAmount, setBillAmount] = useState('84.50');
  const [tipPercent, setTipPercent] = useState('18');
  const [people, setPeople] = useState('2');
  const [rounding, setRounding] = useState<'none' | 'total-up' | 'per-person-up'>('none');

  const calc = useMemo(() => {
    const bill = Number(billAmount);
    const tipPct = Number(tipPercent);
    const split = Math.round(Number(people));

    if (!Number.isFinite(bill) || bill < 0) return { error: s.errorBill, data: null };
    if (!Number.isFinite(tipPct) || tipPct < 0 || tipPct > 200) return { error: s.errorTip, data: null };
    if (!Number.isFinite(split) || split < 1 || split > 100) return { error: s.errorPeople, data: null };

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
  }, [billAmount, tipPercent, people, rounding, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="tip-bill" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.billLabel}
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
            {s.tipLabel}
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
            {s.peopleLabel}
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
          <span className="text-xs font-semibold text-slate-600 mr-1">{s.presetsLabel}</span>
          {TIP_PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setTipPercent(String(p))}
              className={`rounded-md px-3 py-1.5 text-xs font-mono cursor-pointer ${
                Number(tipPercent) === p
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {p}%
            </button>
          ))}
        </div>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700">
          <span>{s.roundingLabel}</span>
          <select
            value={rounding}
            onChange={(e) => setRounding(e.target.value as 'none' | 'total-up' | 'per-person-up')}
            className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm"
          >
            <option value="none">{s.exactOption}</option>
            <option value="total-up">{s.totalUpOption}</option>
            <option value="per-person-up">{s.perPersonUpOption}</option>
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
            <dt className="text-xs font-medium text-indigo-700">{s.perPersonTotal}</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.perPerson, locale)}
            </dd>
            <dd className="mt-0.5 text-xs text-slate-600 tabular-nums">
              {s.includes} ${money(calc.data.tipPerPerson, locale)} {s.tipEach}
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">{s.totalTip}</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.tipTotal, locale)}
            </dd>
            <dd className="mt-0.5 text-xs text-slate-500 tabular-nums">
              {s.effectiveRate} {calc.data.effectiveTipPct.toFixed(1)}%
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">{s.totalBill}</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.totalBill, locale)}
            </dd>
          </div>
        </dl>
      )}
    </div>
  );
}
