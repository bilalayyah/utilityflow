import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
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
  },
  es: {
    errorPrice: 'El precio de la vivienda debe ser mayor que 0.',
    errorDownPayment: 'El porcentaje de pago inicial debe estar entre 0% y 99.9%.',
    errorRate: 'La tasa de interés debe estar entre 0% y 50%.',
    errorTerm: 'El plazo del préstamo debe ser de entre 1 y 50 años.',
    homePriceLabel: 'Precio de la vivienda ($)',
    downPaymentLabel: 'Pago inicial (%)',
    rateLabel: 'Tasa de interés (% TAE)',
    termLabel: 'Plazo del préstamo (años)',
    yearsWord: 'años',
    taxLabel: 'Impuesto sobre la propiedad ($ / año)',
    insuranceLabel: 'Seguro de vivienda ($ / año)',
    hoaLabel: 'Cuotas de la HOA ($ / mes)',
    estimatedMonthly: 'Pago mensual estimado',
    loanAmount: 'Monto del préstamo',
    downPayment: 'Pago inicial',
    lifetimeInterest: 'Intereses de por vida',
    breakdownHeading: 'Desglose del pago mensual',
    principalInterest: 'Capital e intereses (P&I)',
    propertyTaxes: 'Impuestos sobre la propiedad',
    homeownersInsurance: 'Seguro de vivienda',
    hoaDues: 'Cuotas de la HOA',
    pmiLabel: 'PMI est. (0.5%/año cuando el pago inicial es < 20%)',
  },
  pt: {
    errorPrice: 'O preço do imóvel deve ser maior que 0.',
    errorDownPayment: 'O percentual de entrada deve estar entre 0% e 99.9%.',
    errorRate: 'A taxa de juros deve estar entre 0% e 50%.',
    errorTerm: 'O prazo do empréstimo deve ser de 1 a 50 anos.',
    homePriceLabel: 'Preço do imóvel ($)',
    downPaymentLabel: 'Entrada (%)',
    rateLabel: 'Taxa de juros (% a.a.)',
    termLabel: 'Prazo do empréstimo (anos)',
    yearsWord: 'anos',
    taxLabel: 'Imposto predial ($ / ano)',
    insuranceLabel: 'Seguro residencial ($ / ano)',
    hoaLabel: 'Taxa de condomínio ($ / mês)',
    estimatedMonthly: 'Pagamento mensal estimado',
    loanAmount: 'Valor do empréstimo',
    downPayment: 'Entrada',
    lifetimeInterest: 'Juros totais do financiamento',
    breakdownHeading: 'Detalhamento do pagamento mensal',
    principalInterest: 'Principal e juros (P&I)',
    propertyTaxes: 'Impostos prediais',
    homeownersInsurance: 'Seguro residencial',
    hoaDues: 'Taxa de condomínio',
    pmiLabel: 'PMI est. (0.5%/ano quando a entrada é < 20%)',
  },
  fr: {
    errorPrice: 'Le prix du logement doit être supérieur à 0.',
    errorDownPayment: 'Le pourcentage d’apport doit être compris entre 0 % et 99.9 %.',
    errorRate: 'Le taux d’intérêt doit être compris entre 0 % et 50 %.',
    errorTerm: 'La durée de l’emprunt doit être comprise entre 1 et 50 ans.',
    homePriceLabel: 'Prix du logement ($)',
    downPaymentLabel: 'Apport (%)',
    rateLabel: 'Taux d’intérêt (% TAEG)',
    termLabel: 'Durée de l’emprunt (années)',
    yearsWord: 'ans',
    taxLabel: 'Taxe foncière ($ / an)',
    insuranceLabel: 'Assurance habitation ($ / an)',
    hoaLabel: 'Charges de copropriété ($ / mois)',
    estimatedMonthly: 'Mensualité estimée',
    loanAmount: 'Montant de l’emprunt',
    downPayment: 'Apport',
    lifetimeInterest: 'Intérêts sur toute la durée',
    breakdownHeading: 'Détail de la mensualité',
    principalInterest: 'Capital et intérêts (P&I)',
    propertyTaxes: 'Taxes foncières',
    homeownersInsurance: 'Assurance habitation',
    hoaDues: 'Charges de copropriété',
    pmiLabel: 'PMI est. (0.5 %/an si l’apport est < 20 %)',
  },
  de: {
    errorPrice: 'Der Kaufpreis muss größer als 0 sein.',
    errorDownPayment: 'Die Anzahlung muss zwischen 0% und 99.9% liegen.',
    errorRate: 'Der Zinssatz muss zwischen 0% und 50% liegen.',
    errorTerm: 'Die Darlehenslaufzeit muss zwischen 1 und 50 Jahren liegen.',
    homePriceLabel: 'Kaufpreis ($)',
    downPaymentLabel: 'Anzahlung (%)',
    rateLabel: 'Zinssatz (% effektiv)',
    termLabel: 'Darlehenslaufzeit (Jahre)',
    yearsWord: 'Jahre',
    taxLabel: 'Grundsteuer ($ / Jahr)',
    insuranceLabel: 'Wohngebäudeversicherung ($ / Jahr)',
    hoaLabel: 'HOA-Gebühren ($ / Monat)',
    estimatedMonthly: 'Geschätzte monatliche Rate',
    loanAmount: 'Darlehensbetrag',
    downPayment: 'Anzahlung',
    lifetimeInterest: 'Zinsen über die Laufzeit',
    breakdownHeading: 'Aufschlüsselung der monatlichen Rate',
    principalInterest: 'Kapital & Zinsen (P&I)',
    propertyTaxes: 'Grundsteuern',
    homeownersInsurance: 'Wohngebäudeversicherung',
    hoaDues: 'HOA-Gebühren',
    pmiLabel: 'Geschätzte PMI (0.5%/Jahr bei Anzahlung < 20%)',
  },
  it: {
    errorPrice: 'Il prezzo della casa deve essere maggiore di 0.',
    errorDownPayment: 'La percentuale dell’anticipo deve essere tra 0% e 99.9%.',
    errorRate: 'Il tasso di interesse deve essere tra 0% e 50%.',
    errorTerm: 'La durata del prestito deve essere tra 1 e 50 anni.',
    homePriceLabel: 'Prezzo della casa ($)',
    downPaymentLabel: 'Anticipo (%)',
    rateLabel: 'Tasso di interesse (% TAEG)',
    termLabel: 'Durata del prestito (anni)',
    yearsWord: 'Anni',
    taxLabel: 'Imposta sulla proprietà ($ / anno)',
    insuranceLabel: 'Assicurazione casa ($ / anno)',
    hoaLabel: 'Spese condominiali HOA ($ / mese)',
    estimatedMonthly: 'Rata mensile stimata',
    loanAmount: 'Importo del prestito',
    downPayment: 'Anticipo',
    lifetimeInterest: 'Interessi totali',
    breakdownHeading: 'Dettaglio della rata mensile',
    principalInterest: 'Capitale e interessi (P&I)',
    propertyTaxes: 'Imposte sulla proprietà',
    homeownersInsurance: 'Assicurazione casa',
    hoaDues: 'Spese HOA',
    pmiLabel: 'PMI stimata (0.5%/anno con anticipo < 20%)',
  },
};

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function MortgageCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
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
          <div className="lg:col-span-5 rounded-xl border border-indigo-200 bg-indigo-50/70 p-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-indigo-700">{s.estimatedMonthly}</div>
              <div className="mt-1 text-3xl font-bold font-mono text-slate-900 tabular-nums">
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

          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
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
