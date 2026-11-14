import { useMemo, useState } from 'react';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errorPrice: 'Home price must be greater than 0.',
    errorDownPayment: 'Down payment percentage must be between 0% and 99.9%.',
    errorRate: 'Interest rate must be between 0% and 50%.',
    errorTerm: 'Loan term must be between 1 and 50 years.',
    homePriceLabel: 'Home Price ($)',
    downPaymentLabel: 'Down Payment (%)',
    rateLabel: 'Interest Rate (% APR)',
    termLabel: 'Loan Term (Years)',
    yearsWord: 'Years',
    taxLabel: 'Property Tax ($ / year)',
    insuranceLabel: 'Home Insurance ($ / year)',
    hoaLabel: 'HOA Dues ($ / month)',
    estimatedMonthly: 'Estimated Monthly Payment',
    loanAmount: 'Loan Amount',
    downPayment: 'Down Payment',
    lifetimeInterest: 'Lifetime Interest',
    breakdownHeading: 'Monthly Payment Breakdown',
    principalInterest: 'Principal & Interest (P&I)',
    propertyTaxes: 'Property Taxes',
    homeownersInsurance: 'Homeowners Insurance',
    hoaDues: 'HOA Dues',
    pmiLabel: 'Est. PMI (0.5%/yr when down < 20%)',
  };

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function MortgageCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('mortgage-calculator', STRINGS_EN);
  const palette = pastelForKey('mortgage-calculator');
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
      return { error: s.errorPrice, data: null };
    }
    if (!Number.isFinite(dpPct) || dpPct < 0 || dpPct >= 100) {
      return { error: s.errorDownPayment, data: null };
    }
    if (!Number.isFinite(rate) || rate < 0 || rate > 50) {
      return { error: s.errorRate, data: null };
    }
    if (!Number.isFinite(years) || years < 1 || years > 50) {
      return { error: s.errorTerm, data: null };
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
  }, [homePrice, downPaymentPct, interestRate, loanTermYears, annualPropertyTax, annualInsurance, monthlyHoa, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="mort-price" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.homePriceLabel}
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
            {s.downPaymentLabel}
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
            {s.rateLabel}
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
            {s.termLabel}
          </label>
          <select
            id="mort-term"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          >
            <option value="10">10 {s.yearsWord}</option>
            <option value="15">15 {s.yearsWord}</option>
            <option value="20">20 {s.yearsWord}</option>
            <option value="30">30 {s.yearsWord}</option>
          </select>
        </div>
        <div>
          <label htmlFor="mort-tax" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.taxLabel}
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
            {s.insuranceLabel}
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
            {s.hoaLabel}
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
          <div className={`lg:col-span-5 rounded-xl border border-indigo-200 ${palette.card} p-5 flex flex-col justify-between`}>
            <div>
              <div className={`text-xs font-semibold ${palette.link}`}>{s.estimatedMonthly}</div>
              <div className={`mt-1 text-3xl font-bold font-mono ${palette.link} tabular-nums`}>
                ${money(calc.data.totalMonthly, locale)}
              </div>
            </div>
            <dl className="mt-5 pt-4 border-t border-indigo-200/70 space-y-1.5 text-xs sm:text-sm font-mono tabular-nums">
              <div className="flex justify-between">
                <dt className="font-sans text-slate-600">{s.loanAmount}</dt>
                <dd className="text-slate-900">${money(calc.data.loanAmount, locale)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-sans text-slate-600">{s.downPayment}</dt>
                <dd className="text-slate-900">${money(calc.data.downPayment, locale)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-sans text-slate-600">{s.lifetimeInterest}</dt>
                <dd className="text-slate-900">${money(calc.data.totalInterest, locale)}</dd>
              </div>
            </dl>
          </div>

          <div className={`lg:col-span-7 rounded-xl border border-slate-200 ${PASTEL_PALETTES[1].card} p-5`}>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">{s.breakdownHeading}</h3>
            <dl className="divide-y divide-slate-200 text-sm font-mono tabular-nums">
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">{s.principalInterest}</dt>
                <dd className="font-semibold text-slate-900">${money(calc.data.monthlyPI, locale)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">{s.propertyTaxes}</dt>
                <dd className="text-slate-900">${money(calc.data.monthlyTax, locale)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">{s.homeownersInsurance}</dt>
                <dd className="text-slate-900">${money(calc.data.monthlyIns, locale)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">{s.hoaDues}</dt>
                <dd className="text-slate-900">${money(calc.data.monthlyHoaFee, locale)}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="font-sans text-slate-700">{s.pmiLabel}</dt>
                <dd className="text-slate-900">${money(calc.data.monthlyPmi, locale)}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
