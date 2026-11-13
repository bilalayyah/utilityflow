import { useMemo, useState } from 'react';

type PayPeriod = 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'annual';

function money(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function SalaryCalculatorTool() {
  const [amount, setAmount] = useState('45');
  const [period, setPeriod] = useState<PayPeriod>('hourly');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [weeksPerYear, setWeeksPerYear] = useState('52');
  const [taxRatePct, setTaxRatePct] = useState('22');

  const breakdown = useMemo(() => {
    const val = Number(amount);
    const hpw = Number(hoursPerWeek);
    const wpy = Number(weeksPerYear);
    const tax = Number(taxRatePct) || 0;

    if (!Number.isFinite(val) || val < 0) return { error: 'Compensation amount cannot be negative.', rows: null };
    if (!Number.isFinite(hpw) || hpw <= 0 || hpw > 168) return { error: 'Hours per week must be between 1 and 168.', rows: null };
    if (!Number.isFinite(wpy) || wpy <= 0 || wpy > 52.2) return { error: 'Weeks per year must be between 1 and 52.', rows: null };
    if (!Number.isFinite(tax) || tax < 0 || tax >= 100) return { error: 'Effective tax rate must be between 0% and 99%.', rows: null };

    const totalAnnualHours = hpw * wpy;
    let annualGross = 0;

    switch (period) {
      case 'hourly':
        annualGross = val * totalAnnualHours;
        break;
      case 'daily':
        annualGross = val * (wpy * 5);
        break;
      case 'weekly':
        annualGross = val * wpy;
        break;
      case 'biweekly':
        annualGross = val * (wpy / 2);
        break;
      case 'monthly':
        annualGross = val * 12;
        break;
      case 'annual':
        annualGross = val;
        break;
    }

    const netFactor = 1 - tax / 100;
    const rows = [
      { label: 'Hourly', gross: annualGross / totalAnnualHours },
      { label: 'Daily (5-day week)', gross: annualGross / (wpy * 5) },
      { label: 'Weekly', gross: annualGross / wpy },
      { label: 'Bi-Weekly', gross: annualGross / (wpy / 2) },
      { label: 'Monthly', gross: annualGross / 12 },
      { label: 'Annual', gross: annualGross },
    ].map((item) => ({
      ...item,
      net: item.gross * netFactor,
    }));

    return { error: '', rows, totalAnnualHours };
  }, [amount, period, hoursPerWeek, weeksPerYear, taxRatePct]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label htmlFor="sal-amt" className="block text-xs font-semibold text-slate-700 mb-1">
            Pay Amount ($)
          </label>
          <input
            id="sal-amt"
            type="number"
            min={0}
            step="0.5"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="sal-per" className="block text-xs font-semibold text-slate-700 mb-1">
            Frequency
          </label>
          <select
            id="sal-per"
            value={period}
            onChange={(e) => setPeriod(e.target.value as PayPeriod)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        <div>
          <label htmlFor="sal-hpw" className="block text-xs font-semibold text-slate-700 mb-1">
            Hours / Week
          </label>
          <input
            id="sal-hpw"
            type="number"
            min={1}
            max={168}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="sal-wpy" className="block text-xs font-semibold text-slate-700 mb-1">
            Weeks / Year
          </label>
          <input
            id="sal-wpy"
            type="number"
            min={1}
            max={52}
            value={weeksPerYear}
            onChange={(e) => setWeeksPerYear(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="sal-tax" className="block text-xs font-semibold text-slate-700 mb-1">
            Est. Tax Rate (%)
          </label>
          <input
            id="sal-tax"
            type="number"
            min={0}
            max={99}
            step="0.5"
            value={taxRatePct}
            onChange={(e) => setTaxRatePct(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
      </div>

      {breakdown.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {breakdown.error}
        </div>
      )}

      {breakdown.rows && (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm font-mono tabular-nums">
            <thead className="bg-slate-50 border-b border-slate-200 font-sans text-xs text-slate-600">
              <tr>
                <th className="py-3 px-4 font-semibold">Pay Period</th>
                <th className="py-3 px-4 font-semibold text-right">Gross Pay</th>
                <th className="py-3 px-4 font-semibold text-right">
                  Est. Net Pay ({taxRatePct}% tax)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {breakdown.rows.map((row) => (
                <tr key={row.label} className={row.label === 'Annual' ? 'bg-indigo-50/40 font-semibold' : ''}>
                  <td className="py-2.5 px-4 font-sans text-slate-800">{row.label}</td>
                  <td className="py-2.5 px-4 text-right text-slate-900">${money(row.gross)}</td>
                  <td className="py-2.5 px-4 text-right text-indigo-700">${money(row.net)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
