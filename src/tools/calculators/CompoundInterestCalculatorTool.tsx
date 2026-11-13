import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
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
  },
  es: {
    errorInitial: 'El depósito inicial no puede ser negativo.',
    errorMonthly: 'La aportación mensual no puede ser negativa.',
    errorRate: 'La tasa de rendimiento anual debe estar entre 0% y 100%.',
    errorYears: 'El horizonte de tiempo debe ser de entre 1 y 100 años.',
    initialLabel: 'Capital inicial ($)',
    monthlyLabel: 'Aportación mensual ($)',
    rateLabel: 'Rendimiento anual (%)',
    yearsLabel: 'Años',
    compoundingLabel: 'Capitalización',
    dailyOption: 'Diaria (365/año)',
    monthlyOption: 'Mensual (12/año)',
    quarterlyOption: 'Trimestral (4/año)',
    annualOption: 'Anual (1/año)',
    futureBalance: 'Saldo futuro',
    totalContributed: 'Capital total + depósitos',
    totalInterest: 'Interés compuesto total',
    yearHeader: 'Año',
    totalContributedHeader: 'Total aportado',
    cumulativeInterestHeader: 'Interés acumulado',
    endingBalanceHeader: 'Saldo final',
    yearPrefix: 'Año',
  },
  pt: {
    errorInitial: 'O depósito inicial não pode ser negativo.',
    errorMonthly: 'A contribuição mensal não pode ser negativa.',
    errorRate: 'A taxa de rendimento anual deve estar entre 0% e 100%.',
    errorYears: 'O horizonte de tempo deve ser de 1 a 100 anos.',
    initialLabel: 'Capital inicial ($)',
    monthlyLabel: 'Aporte mensal ($)',
    rateLabel: 'Rendimento anual (%)',
    yearsLabel: 'Anos',
    compoundingLabel: 'Capitalização',
    dailyOption: 'Diária (365/ano)',
    monthlyOption: 'Mensal (12/ano)',
    quarterlyOption: 'Trimestral (4/ano)',
    annualOption: 'Anual (1/ano)',
    futureBalance: 'Saldo futuro',
    totalContributed: 'Capital total + aportes',
    totalInterest: 'Juros compostos totais',
    yearHeader: 'Ano',
    totalContributedHeader: 'Total aportado',
    cumulativeInterestHeader: 'Juros acumulados',
    endingBalanceHeader: 'Saldo final',
    yearPrefix: 'Ano',
  },
  fr: {
    errorInitial: 'Le dépôt initial ne peut pas être négatif.',
    errorMonthly: 'La contribution mensuelle ne peut pas être négative.',
    errorRate: 'Le taux de rendement annuel doit être compris entre 0 % et 100 %.',
    errorYears: 'L’horizon de placement doit être compris entre 1 et 100 ans.',
    initialLabel: 'Capital initial ($)',
    monthlyLabel: 'Versement mensuel ($)',
    rateLabel: 'Rendement annuel (%)',
    yearsLabel: 'Années',
    compoundingLabel: 'Capitalisation',
    dailyOption: 'Quotidienne (365/an)',
    monthlyOption: 'Mensuelle (12/an)',
    quarterlyOption: 'Trimestrielle (4/an)',
    annualOption: 'Annuelle (1/an)',
    futureBalance: 'Solde futur',
    totalContributed: 'Capital total + versements',
    totalInterest: 'Intérêts composés totaux',
    yearHeader: 'Année',
    totalContributedHeader: 'Total versé',
    cumulativeInterestHeader: 'Intérêts cumulés',
    endingBalanceHeader: 'Solde final',
    yearPrefix: 'Année',
  },
  de: {
    errorInitial: 'Die Ersteinzahlung darf nicht negativ sein.',
    errorMonthly: 'Der monatliche Beitrag darf nicht negativ sein.',
    errorRate: 'Die jährliche Rendite muss zwischen 0% und 100% liegen.',
    errorYears: 'Der Anlagezeitraum muss zwischen 1 und 100 Jahren liegen.',
    initialLabel: 'Anfangskapital ($)',
    monthlyLabel: 'Monatliche Einzahlung ($)',
    rateLabel: 'Jährliche Rendite (%)',
    yearsLabel: 'Jahre',
    compoundingLabel: 'Zinseszins-Intervall',
    dailyOption: 'Täglich (365/Jahr)',
    monthlyOption: 'Monatlich (12/Jahr)',
    quarterlyOption: 'Vierteljährlich (4/Jahr)',
    annualOption: 'Jährlich (1/Jahr)',
    futureBalance: 'Zukünftiger Kontostand',
    totalContributed: 'Gesamtkapital + Einzahlungen',
    totalInterest: 'Gesamte Zinseszinsen',
    yearHeader: 'Jahr',
    totalContributedHeader: 'Insgesamt eingezahlt',
    cumulativeInterestHeader: 'Kumulierte Zinsen',
    endingBalanceHeader: 'Endstand',
    yearPrefix: 'Jahr',
  },
  it: {
    errorInitial: 'Il deposito iniziale non può essere negativo.',
    errorMonthly: 'Il contributo mensile non può essere negativo.',
    errorRate: 'Il rendimento annuo deve essere tra 0% e 100%.',
    errorYears: 'L’orizzonte temporale deve essere tra 1 e 100 anni.',
    initialLabel: 'Capitale iniziale ($)',
    monthlyLabel: 'Versamento mensile ($)',
    rateLabel: 'Rendimento annuo (%)',
    yearsLabel: 'Anni',
    compoundingLabel: 'Capitalizzazione',
    dailyOption: 'Giornaliera (365/anno)',
    monthlyOption: 'Mensile (12/anno)',
    quarterlyOption: 'Trimestrale (4/anno)',
    annualOption: 'Annuale (1/anno)',
    futureBalance: 'Saldo futuro',
    totalContributed: 'Capitale totale + versamenti',
    totalInterest: 'Interessi composti totali',
    yearHeader: 'Anno',
    totalContributedHeader: 'Totale versato',
    cumulativeInterestHeader: 'Interessi cumulati',
    endingBalanceHeader: 'Saldo finale',
    yearPrefix: 'Anno',
  },
  id: {
    errorInitial: 'Setoran awal tidak boleh negatif.',
    errorMonthly: 'Kontribusi bulanan tidak boleh negatif.',
    errorRate: 'Tingkat pengembalian tahunan harus antara 0% dan 100%.',
    errorYears: 'Jangka waktu harus antara 1 dan 100 tahun.',
    initialLabel: 'Pokok Awal ($)',
    monthlyLabel: 'Penambahan Bulanan ($)',
    rateLabel: 'Pengembalian Tahunan (%)',
    yearsLabel: 'Tahun',
    compoundingLabel: 'Pemajemukan',
    dailyOption: 'Harian (365/thn)',
    monthlyOption: 'Bulanan (12/thn)',
    quarterlyOption: 'Kuartalan (4/thn)',
    annualOption: 'Tahunan (1/thn)',
    futureBalance: 'Saldo Masa Depan',
    totalContributed: 'Total Pokok + Setoran',
    totalInterest: 'Total Bunga Majemuk',
    yearHeader: 'Tahun',
    totalContributedHeader: 'Total yang Dikontribusikan',
    cumulativeInterestHeader: 'Bunga Kumulatif',
    endingBalanceHeader: 'Saldo Akhir',
    yearPrefix: 'Tahun',
  },
  ru: {
    errorInitial: 'Начальный вклад не может быть отрицательным.',
    errorMonthly: 'Ежемесячный взнос не может быть отрицательным.',
    errorRate: 'Годовая доходность должна быть от 0% до 100%.',
    errorYears: 'Срок должен быть от 1 до 100 лет.',
    initialLabel: 'Начальная сумма ($)',
    monthlyLabel: 'Ежемесячное пополнение ($)',
    rateLabel: 'Годовая доходность (%)',
    yearsLabel: 'Годы',
    compoundingLabel: 'Капитализация',
    dailyOption: 'Ежедневно (365/год)',
    monthlyOption: 'Ежемесячно (12/год)',
    quarterlyOption: 'Ежеквартально (4/год)',
    annualOption: 'Ежегодно (1/год)',
    futureBalance: 'Будущий баланс',
    totalContributed: 'Всего внесено (сумма + пополнения)',
    totalInterest: 'Всего сложных процентов',
    yearHeader: 'Год',
    totalContributedHeader: 'Всего внесено',
    cumulativeInterestHeader: 'Накопленные проценты',
    endingBalanceHeader: 'Итоговый баланс',
    yearPrefix: 'Год',
  },
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
  const s = STRINGS[locale];
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
