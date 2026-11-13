import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errorPrincipal: 'Enter a loan principal greater than 0.',
    errorRate: 'Enter an annual interest rate between 0% and 100%.',
    errorDuration: 'Loan duration must be between 1 and 600 months.',
    principalLabel: 'Loan Principal ($)',
    rateLabel: 'Annual Interest Rate (% APR)',
    termLabel: 'Loan Term',
    termUnitAria: 'Loan term unit',
    yearsOption: 'Years',
    monthsOption: 'Months',
    monthlyPayment: 'Monthly Payment (EMI)',
    forPrefix: 'for',
    monthlyPayments: 'monthly payments',
    totalInterest: 'Total Interest',
    ofTotalCost: 'of total cost',
    totalRepayment: 'Total Repayment',
    principalWord: 'principal',
    principalLabelShort: 'Principal',
    interestLabelShort: 'Interest',
    showSchedule: 'Show Amortization Schedule',
    hideSchedule: 'Hide Amortization Schedule',
    monthHeader: 'Month',
    paymentHeader: 'Payment',
    principalHeader: 'Principal',
    interestHeader: 'Interest',
    balanceHeader: 'Balance',
  },
  es: {
    errorPrincipal: 'Ingresa un capital del préstamo mayor que 0.',
    errorRate: 'Ingresa una tasa de interés anual entre 0% y 100%.',
    errorDuration: 'La duración del préstamo debe ser de entre 1 y 600 meses.',
    principalLabel: 'Capital del préstamo ($)',
    rateLabel: 'Tasa de interés anual (% TAE)',
    termLabel: 'Plazo del préstamo',
    termUnitAria: 'Unidad del plazo del préstamo',
    yearsOption: 'Años',
    monthsOption: 'Meses',
    monthlyPayment: 'Pago mensual (EMI)',
    forPrefix: 'durante',
    monthlyPayments: 'pagos mensuales',
    totalInterest: 'Intereses totales',
    ofTotalCost: 'del costo total',
    totalRepayment: 'Reembolso total',
    principalWord: 'de capital',
    principalLabelShort: 'Capital',
    interestLabelShort: 'Intereses',
    showSchedule: 'Mostrar tabla de amortización',
    hideSchedule: 'Ocultar tabla de amortización',
    monthHeader: 'Mes',
    paymentHeader: 'Pago',
    principalHeader: 'Capital',
    interestHeader: 'Intereses',
    balanceHeader: 'Saldo',
  },
  pt: {
    errorPrincipal: 'Insira um valor principal do empréstimo maior que 0.',
    errorRate: 'Insira uma taxa de juros anual entre 0% e 100%.',
    errorDuration: 'A duração do empréstimo deve ser de 1 a 600 meses.',
    principalLabel: 'Valor principal do empréstimo ($)',
    rateLabel: 'Taxa de juros anual (% a.a.)',
    termLabel: 'Prazo do empréstimo',
    termUnitAria: 'Unidade do prazo do empréstimo',
    yearsOption: 'Anos',
    monthsOption: 'Meses',
    monthlyPayment: 'Pagamento mensal (EMI)',
    forPrefix: 'por',
    monthlyPayments: 'pagamentos mensais',
    totalInterest: 'Juros totais',
    ofTotalCost: 'do custo total',
    totalRepayment: 'Reembolso total',
    principalWord: 'de principal',
    principalLabelShort: 'Principal',
    interestLabelShort: 'Juros',
    showSchedule: 'Mostrar tabela de amortização',
    hideSchedule: 'Ocultar tabela de amortização',
    monthHeader: 'Mês',
    paymentHeader: 'Pagamento',
    principalHeader: 'Principal',
    interestHeader: 'Juros',
    balanceHeader: 'Saldo',
  },
  fr: {
    errorPrincipal: 'Saisissez un capital d’emprunt supérieur à 0.',
    errorRate: 'Saisissez un taux d’intérêt annuel entre 0 % et 100 %.',
    errorDuration: 'La durée de l’emprunt doit être comprise entre 1 et 600 mois.',
    principalLabel: 'Capital de l’emprunt ($)',
    rateLabel: 'Taux d’intérêt annuel (% TAEG)',
    termLabel: 'Durée de l’emprunt',
    termUnitAria: 'Unité de durée de l’emprunt',
    yearsOption: 'Années',
    monthsOption: 'Mois',
    monthlyPayment: 'Mensualité (EMI)',
    forPrefix: 'pour',
    monthlyPayments: 'mensualités',
    totalInterest: 'Intérêts totaux',
    ofTotalCost: 'du coût total',
    totalRepayment: 'Remboursement total',
    principalWord: 'de capital',
    principalLabelShort: 'Capital',
    interestLabelShort: 'Intérêts',
    showSchedule: 'Afficher le tableau d’amortissement',
    hideSchedule: 'Masquer le tableau d’amortissement',
    monthHeader: 'Mois',
    paymentHeader: 'Paiement',
    principalHeader: 'Capital',
    interestHeader: 'Intérêts',
    balanceHeader: 'Solde',
  },
  de: {
    errorPrincipal: 'Geben Sie einen Darlehensbetrag größer als 0 ein.',
    errorRate: 'Geben Sie einen Jahreszinssatz zwischen 0% und 100% ein.',
    errorDuration: 'Die Darlehenslaufzeit muss zwischen 1 und 600 Monaten liegen.',
    principalLabel: 'Darlehensbetrag ($)',
    rateLabel: 'Jahreszins (% effektiv)',
    termLabel: 'Darlehenslaufzeit',
    termUnitAria: 'Einheit der Darlehenslaufzeit',
    yearsOption: 'Jahre',
    monthsOption: 'Monate',
    monthlyPayment: 'Monatliche Rate (EMI)',
    forPrefix: 'für',
    monthlyPayments: 'Monatsraten',
    totalInterest: 'Zinsen insgesamt',
    ofTotalCost: 'der Gesamtkosten',
    totalRepayment: 'Gesamtrückzahlung',
    principalWord: 'Kapital',
    principalLabelShort: 'Kapital',
    interestLabelShort: 'Zinsen',
    showSchedule: 'Tilgungsplan anzeigen',
    hideSchedule: 'Tilgungsplan ausblenden',
    monthHeader: 'Monat',
    paymentHeader: 'Rate',
    principalHeader: 'Kapital',
    interestHeader: 'Zinsen',
    balanceHeader: 'Restschuld',
  },
  it: {
    errorPrincipal: 'Inserisci un capitale del prestito maggiore di 0.',
    errorRate: 'Inserisci un tasso di interesse annuo tra 0% e 100%.',
    errorDuration: 'La durata del prestito deve essere tra 1 e 600 mesi.',
    principalLabel: 'Capitale del prestito ($)',
    rateLabel: 'Tasso di interesse annuo (% TAEG)',
    termLabel: 'Durata del prestito',
    termUnitAria: 'Unità di durata del prestito',
    yearsOption: 'Anni',
    monthsOption: 'Mesi',
    monthlyPayment: 'Rata mensile (EMI)',
    forPrefix: 'per',
    monthlyPayments: 'rate mensili',
    totalInterest: 'Interessi totali',
    ofTotalCost: 'del costo totale',
    totalRepayment: 'Rimborso totale',
    principalWord: 'capitale',
    principalLabelShort: 'Capitale',
    interestLabelShort: 'Interessi',
    showSchedule: 'Mostra piano di ammortamento',
    hideSchedule: 'Nascondi piano di ammortamento',
    monthHeader: 'Mese',
    paymentHeader: 'Rata',
    principalHeader: 'Capitale',
    interestHeader: 'Interessi',
    balanceHeader: 'Saldo',
  },
};

interface ScheduleRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

function formatMoney(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LoanEmiCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
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
      return { error: s.errorPrincipal, data: null };
    }
    if (!Number.isFinite(apr) || apr < 0 || apr > 100) {
      return { error: s.errorRate, data: null };
    }
    const months = Math.round(termUnit === 'years' ? term * 12 : term);
    if (!Number.isFinite(months) || months < 1 || months > 600) {
      return { error: s.errorDuration, data: null };
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
  }, [principal, annualRate, termValue, termUnit, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="loan-principal" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.principalLabel}
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
            {s.rateLabel}
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
            {s.termLabel}
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
              aria-label={s.termUnitAria}
              value={termUnit}
              onChange={(e) => setTermUnit(e.target.value as 'years' | 'months')}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm text-slate-900"
            >
              <option value="years">{s.yearsOption}</option>
              <option value="months">{s.monthsOption}</option>
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
              <dt className="text-xs font-medium text-indigo-700">{s.monthlyPayment}</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${formatMoney(calculation.data.emi, locale)}
              </dd>
              <dd className="mt-1 text-xs text-slate-600 tabular-nums">
                {s.forPrefix} {calculation.data.months} {s.monthlyPayments}
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">{s.totalInterest}</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${formatMoney(calculation.data.totalInterest, locale)}
              </dd>
              <dd className="mt-1 text-xs text-slate-600 tabular-nums">
                {(100 - calculation.data.principalShare).toFixed(1)}% {s.ofTotalCost}
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">{s.totalRepayment}</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${formatMoney(calculation.data.totalPayment, locale)}
              </dd>
              <dd className="mt-1 text-xs text-slate-600 tabular-nums">
                {calculation.data.principalShare.toFixed(1)}% {s.principalWord}
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
              <span>
                {s.principalLabelShort} ({calculation.data.principalShare.toFixed(1)}%)
              </span>
              <span>
                {s.interestLabelShort} ({(100 - calculation.data.principalShare).toFixed(1)}%)
              </span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setShowSchedule((prev) => !prev)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              {showSchedule ? s.hideSchedule : s.showSchedule}
            </button>

            {showSchedule && (
              <div className="mt-4 overflow-x-auto max-h-80 overflow-y-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm font-mono tabular-nums">
                  <thead className="bg-slate-50 border-b border-slate-200 font-sans text-slate-600 sticky top-0">
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">{s.monthHeader}</th>
                      <th className="py-2.5 px-3 font-semibold text-right">{s.paymentHeader}</th>
                      <th className="py-2.5 px-3 font-semibold text-right">{s.principalHeader}</th>
                      <th className="py-2.5 px-3 font-semibold text-right">{s.interestHeader}</th>
                      <th className="py-2.5 px-3 font-semibold text-right">{s.balanceHeader}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {calculation.data.schedule.map((row) => (
                      <tr key={row.month}>
                        <td className="py-2 px-3 text-slate-500">{row.month}</td>
                        <td className="py-2 px-3 text-right">${formatMoney(row.payment, locale)}</td>
                        <td className="py-2 px-3 text-right text-slate-900">
                          ${formatMoney(row.principal, locale)}
                        </td>
                        <td className="py-2 px-3 text-right text-amber-700">
                          ${formatMoney(row.interest, locale)}
                        </td>
                        <td className="py-2 px-3 text-right text-slate-600">
                          ${formatMoney(row.balance, locale)}
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
