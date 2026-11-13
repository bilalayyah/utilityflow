import { useMemo, useState } from 'react';

function money(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function MortgageCalculatorTool() {
  const [homePrice, setHomePrice] = useState('420000');
  const [downPaymentPct, setDownPaymentPct] = useState('20');
  const [interestRate, setInterestRate] = useState('6.25');
  const [loanTermYears, setLoanTermYears] = useState('30');
  const [annualPropertyTax, setAnnualPropertyTax] = useState('4800');
  const [annualInsurance, setAnnualInsurance] = useState('1500');
  const [monthlyHoa, setMonthlyHoa] = useState('0');

  const calc = useMemo(() => {
    const price = Number(homePrice);
    const dpPct = Number(downPaymentPct);
    const rate = Number(interestRate);
    const years = Number(loanTermYears);
    const propTax = Number(annualPropertyTax) || 0;
    const insurance = Number(annualInsurance) || 0;
    const hoa = Number(monthlyHoa) || 0;

    if (!Number.isFinite(price) || price <= 0) {
      return { error: 'Home price must be greater than 0.', data: null };
    }
    if (!Number.isFinite(dpPct) || dpPct < 0 || dpPct >= 100) {
      return { error: 'Down payment percentage must be between 0% and 99.9%.', data: null };
    }
    if (!Number.isFinite(rate) || rate < 0 || rate > 50) {
      return { error: 'Interest rate must be between 0% and 50%.', data: null };
    }
    if (!Number.isFinite(years) || years < 1 || years > 50) {
      return { error: 'Loan term must be between 1 and 50 years.', data: null };
    }

    const downPayment = price * (dpPct / 100);
    const loanAmount = price - downPayment;
    const months = Math.round(years * 12);
    const r = rate / 100 / 12;

    const monthlyPI =
      r === 0
        ? loanAmount / months
        : (loanAmount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);

    const monthlyTax = Math.max(0, propTax) / 12;
    const monthlyIns = Math.max(0, insurance) / 12;
    const monthlyHoaFee = Math.max(0, hoa);
    // Standard 0.5% annual PMI estimate when down payment < 20%
    const monthlyPmi = dpPct < 20 ? (loanAmount * 0.005) / 12 : 0;

    const totalMonthly = monthlyPI + monthlyTax + monthlyIns + monthlyHoaFee + monthlyPmi;
    const totalInterest = monthlyPI * months - loanAmount;

    return {
      error: '',
      data: {
        downPayment,
        loanAmount,
        monthlyPI,
        monthlyTax,
        monthlyIns,
        monthlyHoaFee,
        monthlyPmi,
        totalMonthly,
        totalInterest,
        totalLoanCost: loanAmount + totalInterest,
      },
    };
  }, [homePrice, downPaymentPct, interestRate, loanTermYears, annualPropertyTax, annualInsurance, monthlyHoa]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="mort-price" className="block text-xs font-semibold text-slate-700 mb-1">
            Home Price ($)
          </label>
          <input
            id="mort-price"
            type="number"
            min={1}
            step="5000"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="mort-dp" className="block text-xs font-semibold text-slate-700 mb-1">
            Down Payment (%)
          </label>
          <input
            id="mort-dp"
            type="number"
            min={0}
            max={99}
            step="1"
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="mort-rate" className="block text-xs font-semibold text-slate-700 mb-1">
            Interest Rate (% APR)
          </label>
          <input
            id="mort-rate"
            type="number"
            min={0}
            max={50}
            step="0.05"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="mort-term" className="block text-xs font-semibold text-slate-700 mb-1">
            Loan Term (Years)
          </label>
          <select
            id="mort-term"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          >
            <option value="10">10 Years</option>
            <option value="15">15 Years</option>
            <option value="20">20 Years</option>
            <option value="30">30 Years</option>
          </select>
        </div>
        <div>
          <label htmlFor="mort-tax" className="block text-xs font-semibold text-slate-700 mb-1">
            Property Tax ($ / year)
          </label>
          <input
            id="mort-tax"
            type="number"
            min={0}
            value={annualPropertyTax}
            onChange={(e) => setAnnualPropertyTax(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="mort-ins" className="block text-xs font-semibold text-slate-700 mb-1">
            Home Insurance ($ / year)
          </label>
          <input
            id="mort-ins"
            type="number"
            min={0}
            value={annualInsurance}
            onChange={(e) => setAnnualInsurance(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="mort-hoa" className="block text-xs font-semibold text-slate-700 mb-1">
            HOA Dues ($ / month)
          </label>
          <input
            id="mort-hoa"
            type="number"
            min={0}
            value={monthlyHoa}
            onChange={(e) => setMonthlyHoa(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
      </div>

      {calc.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {calc.error}
        </div>
      )}

      {calc.data && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 rounded-xl border border-indigo-200 bg-indigo-50/70 p-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-indigo-700">Estimated Monthly Payment</div>
              <div className="mt-1 text-3xl font-bold font-mono text-slate-900 tabular-nums">
                ${money(calc.data.totalMonthly)}
              </div>
            </div>
            <dl className="mt-5 pt-4 border-t border-indigo-200/70 space-y-1.5 text-xs sm:text-sm font-mono tabular-nums">
              <div className="flex justify-between">
                <dt className="font-sans text-slate-600">Loan Amount</dt>
                <dd className="text-slate-900">${money(calc.data.loanAmount)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-sans text-slate-600">Down Payment</dt>
                <dd className="text-slate-900">${money(calc.data.downPayment)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-sans text-slate-600">Lifetime Interest</dt>
                <dd className="text-slate-900">${money(calc.data.totalInterest)}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Monthly Payment Breakdown</h3>
            <dl className="divide-y divide-slate-200 text-sm font-mono tabular-nums">
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">Principal &amp; Interest (P&amp;I)</dt>
                <dd className="font-semibold text-slate-900">${money(calc.data.monthlyPI)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">Property Taxes</dt>
                <dd className="text-slate-900">${money(calc.data.monthlyTax)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">Homeowners Insurance</dt>
                <dd className="text-slate-900">${money(calc.data.monthlyIns)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">HOA Dues</dt>
                <dd className="text-slate-900">${money(calc.data.monthlyHoaFee)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">
                  Est. PMI (0.5%/yr when down &lt; 20%)
                </dt>
                <dd className="text-slate-900">${money(calc.data.monthlyPmi)}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
