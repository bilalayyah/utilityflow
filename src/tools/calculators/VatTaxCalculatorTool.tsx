import { useMemo, useState } from 'react';

const RATE_PRESETS = [5, 7, 10, 15, 20, 21];

function money(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function VatTaxCalculatorTool() {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState('1000');
  const [taxRate, setTaxRate] = useState('20');

  const calc = useMemo(() => {
    const val = Number(amount);
    const rate = Number(taxRate);
    if (!Number.isFinite(val) || val < 0) {
      return { error: 'Amount cannot be negative.', data: null };
    }
    if (!Number.isFinite(rate) || rate < 0 || rate > 100) {
      return { error: 'Tax rate must be between 0% and 100%.', data: null };
    }

    const r = rate / 100;
    if (mode === 'add') {
      const net = val;
      const tax = net * r;
      const gross = net + tax;
      return { error: '', data: { net, tax, gross } };
    }

    const gross = val;
    const net = gross / (1 + r);
    const tax = gross - net;
    return { error: '', data: { net, tax, gross } };
  }, [mode, amount, taxRate]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('add')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              mode === 'add' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Add Tax (Net → Gross)
          </button>
          <button
            type="button"
            onClick={() => setMode('remove')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              mode === 'remove' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Extract Tax (Gross → Net)
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-slate-500 mr-1">Common rates:</span>
          {RATE_PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setTaxRate(String(preset))}
              className={`rounded-md px-2.5 py-1 text-xs font-mono cursor-pointer ${
                Number(taxRate) === preset
                  ? 'bg-indigo-600 text-white'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {preset}%
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="vat-amount" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {mode === 'add' ? 'Net Amount (Excluding Tax) ($)' : 'Gross Amount (Including Tax) ($)'}
          </label>
          <input
            id="vat-amount"
            type="number"
            min={0}
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="vat-rate" className="block text-sm font-semibold text-slate-900 mb-1.5">
            VAT / Sales Tax Rate (%)
          </label>
          <input
            id="vat-rate"
            type="number"
            min={0}
            max={100}
            step="0.1"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>
      </div>

      {calc.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {calc.error}
        </div>
      )}

      {calc.data && (
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">Net Price (Excl. Tax)</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.net)}
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">Tax Amount ({taxRate}%)</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-indigo-600 tabular-nums">
              ${money(calc.data.tax)}
            </dd>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
            <dt className="text-xs font-medium text-indigo-700">Gross Price (Incl. Tax)</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.gross)}
            </dd>
          </div>
        </dl>
      )}
    </div>
  );
}
