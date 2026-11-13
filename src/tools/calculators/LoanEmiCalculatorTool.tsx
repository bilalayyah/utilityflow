import { useMemo, useState } from 'react';

interface ScheduleRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

function formatMoney(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LoanEmiCalculatorTool() {
  const [principal, setPrincipal] = useState('25000');
  const [annualRate, setAnnualRate] = useState('6.5');
  const [termValue, setTermValue] = useState('5');
  const [termUnit, setTermUnit] = useState<'years' | 'months'>('years');
  const [showSchedule, setShowSchedule] = useState(false);

  const calculation = useMemo(() => {
    const p = Number(principal);
    const apr = Number(annualRate);
    const term = Number(termValue);

    if (!Number.isFinite(p) || p <= 0) {
      return { error: 'Enter a loan principal greater than 0.', data: null };
    }
    if (!Number.isFinite(apr) || apr < 0 || apr > 100) {
      return { error: 'Enter an annual interest rate between 0% and 100%.', data: null };
    }
    const months = Math.round(termUnit === 'years' ? term * 12 : term);
    if (!Number.isFinite(months) || months < 1 || months > 600) {
      return { error: 'Loan duration must be between 1 and 600 months.', data: null };
    }

    const monthlyRate = apr / 100 / 12;
    const emi =
      monthlyRate === 0
        ? p / months
        : (p * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

    const schedule: ScheduleRow[] = [];
    let balance = p;
    let totalInterest = 0;

    for (let m = 1; m <= months; m += 1) {
      const interest = balance * monthlyRate;
      const principalPaid = Math.min(balance, emi - interest);
      const payment = principalPaid + interest;
      balance = Math.max(0, balance - principalPaid);
      totalInterest += interest;
      schedule.push({
        month: m,
        payment,
        principal: principalPaid,
        interest,
        balance,
      });
    }

    const totalPayment = p + totalInterest;
    const principalShare = totalPayment > 0 ? (p / totalPayment) * 100 : 100;

    return {
      error: '',
      data: {
        emi,
        totalInterest,
        totalPayment,
        months,
        principalShare,
        schedule,
      },
    };
  }, [principal, annualRate, termValue, termUnit]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="loan-principal" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Loan Principal ($)
          </label>
          <input
            id="loan-principal"
            type="number"
            min={1}
            step="100"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="loan-rate" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Annual Interest Rate (% APR)
          </label>
          <input
            id="loan-rate"
            type="number"
            min={0}
            max={100}
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="loan-term" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Loan Term
          </label>
          <div className="flex gap-2">
            <input
              id="loan-term"
              type="number"
              min={1}
              value={termValue}
              onChange={(e) => setTermValue(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
            <select
              aria-label="Loan term unit"
              value={termUnit}
              onChange={(e) => setTermUnit(e.target.value as 'years' | 'months')}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm text-slate-900"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>
      </div>

      {calculation.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {calculation.error}
        </div>
      )}

      {calculation.data && (
        <>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
              <dt className="text-xs font-medium text-indigo-700">Monthly Payment (EMI)</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${formatMoney(calculation.data.emi)}
              </dd>
              <dd className="mt-1 text-xs text-slate-600 tabular-nums">
                for {calculation.data.months} monthly payments
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">Total Interest</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${formatMoney(calculation.data.totalInterest)}
              </dd>
              <dd className="mt-1 text-xs text-slate-600 tabular-nums">
                {(100 - calculation.data.principalShare).toFixed(1)}% of total cost
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">Total Repayment</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${formatMoney(calculation.data.totalPayment)}
              </dd>
              <dd className="mt-1 text-xs text-slate-600 tabular-nums">
                {calculation.data.principalShare.toFixed(1)}% principal
              </dd>
            </div>
          </dl>

          {/* Breakdown Bar */}
          <div>
            <div className="h-2.5 w-full rounded-full bg-amber-200 overflow-hidden">
              <div
                className="h-full bg-indigo-600"
                style={{ width: `${calculation.data.principalShare}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-xs text-slate-500 tabular-nums">
              <span>Principal ({calculation.data.principalShare.toFixed(1)}%)</span>
              <span>Interest ({(100 - calculation.data.principalShare).toFixed(1)}%)</span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setShowSchedule((prev) => !prev)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              {showSchedule ? 'Hide Amortization Schedule' : 'Show Amortization Schedule'}
            </button>

            {showSchedule && (
              <div className="mt-4 overflow-x-auto max-h-80 overflow-y-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm font-mono tabular-nums">
                  <thead className="bg-slate-50 border-b border-slate-200 font-sans text-slate-600 sticky top-0">
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">Month</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Payment</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Principal</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Interest</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {calculation.data.schedule.map((row) => (
                      <tr key={row.month}>
                        <td className="py-2 px-3 text-slate-500">{row.month}</td>
                        <td className="py-2 px-3 text-right">${formatMoney(row.payment)}</td>
                        <td className="py-2 px-3 text-right text-slate-900">
                          ${formatMoney(row.principal)}
                        </td>
                        <td className="py-2 px-3 text-right text-amber-700">
                          ${formatMoney(row.interest)}
                        </td>
                        <td className="py-2 px-3 text-right text-slate-600">
                          ${formatMoney(row.balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
