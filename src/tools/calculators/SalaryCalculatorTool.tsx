import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
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
  },
  es: {
    errorAmount: 'El monto de la compensación no puede ser negativo.',
    errorHours: 'Las horas por semana deben estar entre 1 y 168.',
    errorWeeks: 'Las semanas por año deben estar entre 1 y 52.',
    errorTax: 'La tasa impositiva efectiva debe estar entre 0% y 99%.',
    amountLabel: 'Monto del pago ($)',
    frequencyLabel: 'Frecuencia',
    hourlyOption: 'Por hora',
    dailyOption: 'Por día',
    weeklyOption: 'Semanal',
    biweeklyOption: 'Quincenal',
    monthlyOption: 'Mensual',
    annualOption: 'Anual',
    hoursLabel: 'Horas / semana',
    weeksLabel: 'Semanas / año',
    taxLabel: 'Tasa impositiva est. (%)',
    rowHourly: 'Por hora',
    rowDaily: 'Por día (semana de 5 días)',
    rowWeekly: 'Semanal',
    rowBiweekly: 'Quincenal',
    rowMonthly: 'Mensual',
    rowAnnual: 'Anual',
    payPeriodHeader: 'Periodo de pago',
    grossPayHeader: 'Pago bruto',
    estNetPay: 'Pago neto est.',
    taxWord: 'de impuesto',
  },
  pt: {
    errorAmount: 'O valor da remuneração não pode ser negativo.',
    errorHours: 'As horas por semana devem estar entre 1 e 168.',
    errorWeeks: 'As semanas por ano devem estar entre 1 e 52.',
    errorTax: 'A alíquota efetiva de imposto deve estar entre 0% e 99%.',
    amountLabel: 'Valor do pagamento ($)',
    frequencyLabel: 'Frequência',
    hourlyOption: 'Por hora',
    dailyOption: 'Por dia',
    weeklyOption: 'Semanal',
    biweeklyOption: 'Quinzenal',
    monthlyOption: 'Mensal',
    annualOption: 'Anual',
    hoursLabel: 'Horas / semana',
    weeksLabel: 'Semanas / ano',
    taxLabel: 'Alíquota est. de imposto (%)',
    rowHourly: 'Por hora',
    rowDaily: 'Por dia (semana de 5 dias)',
    rowWeekly: 'Semanal',
    rowBiweekly: 'Quinzenal',
    rowMonthly: 'Mensal',
    rowAnnual: 'Anual',
    payPeriodHeader: 'Período de pagamento',
    grossPayHeader: 'Pagamento bruto',
    estNetPay: 'Pagamento líquido est.',
    taxWord: 'de imposto',
  },
  fr: {
    errorAmount: 'Le montant de la rémunération ne peut pas être négatif.',
    errorHours: 'Les heures par semaine doivent être comprises entre 1 et 168.',
    errorWeeks: 'Les semaines par an doivent être comprises entre 1 et 52.',
    errorTax: 'Le taux d’imposition effectif doit être compris entre 0 % et 99 %.',
    amountLabel: 'Montant du salaire ($)',
    frequencyLabel: 'Fréquence',
    hourlyOption: 'Horaire',
    dailyOption: 'Journalier',
    weeklyOption: 'Hebdomadaire',
    biweeklyOption: 'Bimensuel',
    monthlyOption: 'Mensuel',
    annualOption: 'Annuel',
    hoursLabel: 'Heures / semaine',
    weeksLabel: 'Semaines / an',
    taxLabel: 'Taux d’imposition est. (%)',
    rowHourly: 'Horaire',
    rowDaily: 'Journalier (semaine de 5 jours)',
    rowWeekly: 'Hebdomadaire',
    rowBiweekly: 'Bimensuel',
    rowMonthly: 'Mensuel',
    rowAnnual: 'Annuel',
    payPeriodHeader: 'Période de paie',
    grossPayHeader: 'Salaire brut',
    estNetPay: 'Salaire net est.',
    taxWord: 'd’impôt',
  },
  de: {
    errorAmount: 'Der Vergütungsbetrag darf nicht negativ sein.',
    errorHours: 'Die Wochenstunden müssen zwischen 1 und 168 liegen.',
    errorWeeks: 'Die Wochen pro Jahr müssen zwischen 1 und 52 liegen.',
    errorTax: 'Der effektive Steuersatz muss zwischen 0% und 99% liegen.',
    amountLabel: 'Vergütungsbetrag ($)',
    frequencyLabel: 'Häufigkeit',
    hourlyOption: 'Stündlich',
    dailyOption: 'Täglich',
    weeklyOption: 'Wöchentlich',
    biweeklyOption: 'Zweiwöchentlich',
    monthlyOption: 'Monatlich',
    annualOption: 'Jährlich',
    hoursLabel: 'Stunden / Woche',
    weeksLabel: 'Wochen / Jahr',
    taxLabel: 'Geschätzter Steuersatz (%)',
    rowHourly: 'Stündlich',
    rowDaily: 'Täglich (5-Tage-Woche)',
    rowWeekly: 'Wöchentlich',
    rowBiweekly: 'Zweiwöchentlich',
    rowMonthly: 'Monatlich',
    rowAnnual: 'Jährlich',
    payPeriodHeader: 'Abrechnungszeitraum',
    grossPayHeader: 'Bruttolohn',
    estNetPay: 'Geschätzter Nettolohn',
    taxWord: 'Steuern',
  },
  it: {
    errorAmount: 'L’importo della retribuzione non può essere negativo.',
    errorHours: 'Le ore settimanali devono essere tra 1 e 168.',
    errorWeeks: 'Le settimane all’anno devono essere tra 1 e 52.',
    errorTax: 'L’aliquota fiscale effettiva deve essere tra 0% e 99%.',
    amountLabel: 'Importo della retribuzione ($)',
    frequencyLabel: 'Frequenza',
    hourlyOption: 'Oraria',
    dailyOption: 'Giornaliera',
    weeklyOption: 'Settimanale',
    biweeklyOption: 'Quindicinale',
    monthlyOption: 'Mensile',
    annualOption: 'Annuale',
    hoursLabel: 'Ore / settimana',
    weeksLabel: 'Settimane / anno',
    taxLabel: 'Aliquota fiscale stimata (%)',
    rowHourly: 'Oraria',
    rowDaily: 'Giornaliera (settimana di 5 giorni)',
    rowWeekly: 'Settimanale',
    rowBiweekly: 'Quindicinale',
    rowMonthly: 'Mensile',
    rowAnnual: 'Annuale',
    payPeriodHeader: 'Periodo di paga',
    grossPayHeader: 'Retribuzione lorda',
    estNetPay: 'Retribuzione netta stimata',
    taxWord: 'imposte',
  },
};

type PayPeriod = 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'annual';

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function SalaryCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
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
            <thead className="bg-slate-50 border-b border-slate-200 font-sans text-xs text-slate-600">
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
