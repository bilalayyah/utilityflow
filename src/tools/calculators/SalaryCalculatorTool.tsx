import { useMemo, useState } from 'react';
import { pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errorAmount: 'Compensation amount cannot be negative.',
    errorHours: 'Hours per week must be between 1 and 168.',
    errorWeeks: 'Weeks per year must be between 1 and 52.',
    errorTax: 'Effective tax rate must be between 0% and 99%.',
    amountLabel: 'Pay Amount ($)',
    frequencyLabel: 'Frequency',
    hourlyOption: 'Hourly',
    dailyOption: 'Daily',
    weeklyOption: 'Weekly',
    biweeklyOption: 'Bi-Weekly',
    monthlyOption: 'Monthly',
    annualOption: 'Annual',
    hoursLabel: 'Hours / Week',
    weeksLabel: 'Weeks / Year',
    taxLabel: 'Est. Tax Rate (%)',
    rowHourly: 'Hourly',
    rowDaily: 'Daily (5-day week)',
    rowWeekly: 'Weekly',
    rowBiweekly: 'Bi-Weekly',
    rowMonthly: 'Monthly',
    rowAnnual: 'Annual',
    payPeriodHeader: 'Pay Period',
    grossPayHeader: 'Gross Pay',
    estNetPay: 'Est. Net Pay',
    taxWord: 'tax',
  };

type PayPeriod = 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'annual';

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function SalaryCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('salary-calculator', STRINGS_EN);
  const palette = pastelForKey('salary-calculator');
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

    if (!Number.isFinite(val) || val < 0) return { error: s.errorAmount, rows: null };
    if (!Number.isFinite(hpw) || hpw <= 0 || hpw > 168) return { error: s.errorHours, rows: null };
    if (!Number.isFinite(wpy) || wpy <= 0 || wpy > 52.2) return { error: s.errorWeeks, rows: null };
    if (!Number.isFinite(tax) || tax < 0 || tax >= 100) return { error: s.errorTax, rows: null };

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
      { id: 'hourly', label: s.rowHourly, gross: annualGross / totalAnnualHours },
      { id: 'daily', label: s.rowDaily, gross: annualGross / (wpy * 5) },
      { id: 'weekly', label: s.rowWeekly, gross: annualGross / wpy },
      { id: 'biweekly', label: s.rowBiweekly, gross: annualGross / (wpy / 2) },
      { id: 'monthly', label: s.rowMonthly, gross: annualGross / 12 },
      { id: 'annual', label: s.rowAnnual, gross: annualGross },
    ].map((item) => ({
      ...item,
      net: item.gross * netFactor,
    }));

    return { error: '', rows, totalAnnualHours };
  }, [amount, period, hoursPerWeek, weeksPerYear, taxRatePct, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label htmlFor="sal-amt" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.amountLabel}
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
            {s.frequencyLabel}
          </label>
          <select
            id="sal-per"
            value={period}
            onChange={(e) => setPeriod(e.target.value as PayPeriod)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="hourly">{s.hourlyOption}</option>
            <option value="daily">{s.dailyOption}</option>
            <option value="weekly">{s.weeklyOption}</option>
            <option value="biweekly">{s.biweeklyOption}</option>
            <option value="monthly">{s.monthlyOption}</option>
            <option value="annual">{s.annualOption}</option>
          </select>
        </div>

        <div>
          <label htmlFor="sal-hpw" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.hoursLabel}
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
            {s.weeksLabel}
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
            {s.taxLabel}
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
            <thead className={`${palette.soft} border-b border-slate-200 font-sans text-xs text-slate-600`}>
              <tr>
                <th className="py-3 px-4 font-semibold">{s.payPeriodHeader}</th>
                <th className="py-3 px-4 font-semibold text-right">{s.grossPayHeader}</th>
                <th className="py-3 px-4 font-semibold text-right">
                  {s.estNetPay} ({taxRatePct}% {s.taxWord})
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {breakdown.rows.map((row) => (
                <tr key={row.label} className={row.id === 'annual' ? 'bg-indigo-50/40 font-semibold' : ''}>
                  <td className="py-2.5 px-4 font-sans text-slate-800">{row.label}</td>
                  <td className="py-2.5 px-4 text-right text-slate-900">${money(row.gross, locale)}</td>
                  <td className="py-2.5 px-4 text-right text-indigo-700">${money(row.net, locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
