import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errorInitial: 'Initial deposit cannot be negative.',
    errorMonthly: 'Monthly contribution cannot be negative.',
    errorRate: 'Annual return rate must be between 0% and 100%.',
    errorYears: 'Time horizon must be between 1 and 100 years.',
    initialLabel: 'Initial Principal ($)',
    monthlyLabel: 'Monthly Addition ($)',
    rateLabel: 'Annual Return (%)',
    yearsLabel: 'Years',
    compoundingLabel: 'Compounding',
    dailyOption: 'Daily (365/yr)',
    monthlyOption: 'Monthly (12/yr)',
    quarterlyOption: 'Quarterly (4/yr)',
    annualOption: 'Annually (1/yr)',
    futureBalance: 'Future Balance',
    totalContributed: 'Total Principal + Deposits',
    totalInterest: 'Total Compound Interest',
    yearHeader: 'Year',
    totalContributedHeader: 'Total Contributed',
    cumulativeInterestHeader: 'Cumulative Interest',
    endingBalanceHeader: 'Ending Balance',
    yearPrefix: 'Year',
  };

interface GrowthRow {
  year: number;
  contributionsTotal: number;
  interestTotal: number;
  endingBalance: number;
}

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CompoundInterestCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('compound-interest-calculator', STRINGS_EN);
  const [initialDeposit, setInitialDeposit] = useState('5000');
  const [monthlyContribution, setMonthlyContribution] = useState('250');
  const [annualRate, setAnnualRate] = useState('7');
  const [years, setYears] = useState('10');
  const [compoundingPerYear, setCompoundingPerYear] = useState('12');

  const result = useMemo(() => {
    const p = Number(initialDeposit);
    const pmt = Number(monthlyContribution);
    const r = Number(annualRate) / 100;
    const t = Math.round(Number(years));
    const n = Number(compoundingPerYear);

    if (!Number.isFinite(p) || p < 0) return { error: s.errorInitial, data: null };
    if (!Number.isFinite(pmt) || pmt < 0) return { error: s.errorMonthly, data: null };
    if (!Number.isFinite(r) || r < 0 || r > 1) return { error: s.errorRate, data: null };
    if (!Number.isFinite(t) || t < 1 || t > 100) return { error: s.errorYears, data: null };

    // Simulate month-by-month with selected compounding intervals
    const rows: GrowthRow[] = [];
    let balance = p;
    let totalContributed = p;
    const monthsPerCompound = 12 / n;
    let pendingRateFactor = 0;

    for (let yr = 1; yr <= t; yr += 1) {
      for (let m = 1; m <= 12; m += 1) {
        balance += pmt;
        totalContributed += pmt;
        if (n === 365) {
          // Daily effective monthly growth factor
          const dailyRate = r / 365;
          balance *= Math.pow(1 + dailyRate, 365 / 12);
        } else if (n === 12) {
          balance *= 1 + r / 12;
        } else {
          pendingRateFactor += 1;
          if (pendingRateFactor >= monthsPerCompound) {
            balance *= 1 + r / n;
            pendingRateFactor = 0;
          }
        }
      }
      rows.push({
        year: yr,
        contributionsTotal: totalContributed,
        interestTotal: balance - totalContributed,
        endingBalance: balance,
      });
    }

    const finalRow = rows[rows.length - 1];
    return {
      error: '',
      data: {
        endingBalance: finalRow.endingBalance,
        totalContributed: finalRow.contributionsTotal,
        totalInterest: finalRow.interestTotal,
        rows,
      },
    };
  }, [initialDeposit, monthlyContribution, annualRate, years, compoundingPerYear, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label htmlFor="ci-initial" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.initialLabel}
          </label>
          <input
            id="ci-initial"
            type="number"
            min={0}
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="ci-monthly" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.monthlyLabel}
          </label>
          <input
            id="ci-monthly"
            type="number"
            min={0}
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="ci-rate" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.rateLabel}
          </label>
          <input
            id="ci-rate"
            type="number"
            min={0}
            max={100}
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="ci-years" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.yearsLabel}
          </label>
          <input
            id="ci-years"
            type="number"
            min={1}
            max={100}
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="ci-freq" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.compoundingLabel}
          </label>
          <select
            id="ci-freq"
            value={compoundingPerYear}
            onChange={(e) => setCompoundingPerYear(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="365">{s.dailyOption}</option>
            <option value="12">{s.monthlyOption}</option>
            <option value="4">{s.quarterlyOption}</option>
            <option value="1">{s.annualOption}</option>
          </select>
        </div>
      </div>

      {result.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {result.error}
        </div>
      )}

      {result.data && (
        <>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
              <dt className="text-xs font-medium text-indigo-700">{s.futureBalance}</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${money(result.data.endingBalance, locale)}
              </dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">{s.totalContributed}</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${money(result.data.totalContributed, locale)}
              </dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">{s.totalInterest}</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-emerald-700 tabular-nums">
                +${money(result.data.totalInterest, locale)}
              </dd>
            </div>
          </dl>

          <div className="overflow-x-auto max-h-72 overflow-y-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm font-mono tabular-nums">
              <thead className="bg-slate-50 border-b border-slate-200 font-sans text-slate-600 sticky top-0">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">{s.yearHeader}</th>
                  <th className="py-2.5 px-3 font-semibold text-right">{s.totalContributedHeader}</th>
                  <th className="py-2.5 px-3 font-semibold text-right">{s.cumulativeInterestHeader}</th>
                  <th className="py-2.5 px-3 font-semibold text-right">{s.endingBalanceHeader}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {result.data.rows.map((row) => (
                  <tr key={row.year}>
                    <td className="py-2 px-3 text-slate-500">
                      {s.yearPrefix} {row.year}
                    </td>
                    <td className="py-2 px-3 text-right">${money(row.contributionsTotal, locale)}</td>
                    <td className="py-2 px-3 text-right text-emerald-700">
                      ${money(row.interestTotal, locale)}
                    </td>
                    <td className="py-2 px-3 text-right font-semibold text-slate-900">
                      ${money(row.endingBalance, locale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
