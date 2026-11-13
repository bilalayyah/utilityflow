import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errorBill: 'Bill amount cannot be negative.',
    errorTip: 'Tip percentage must be between 0% and 200%.',
    errorPeople: 'Number of people must be between 1 and 100.',
    billLabel: 'Bill Subtotal ($)',
    tipLabel: 'Tip Percentage (%)',
    peopleLabel: 'Split Between (People)',
    presetsLabel: 'Tip presets:',
    roundingLabel: 'Rounding:',
    exactOption: 'Exact cents',
    totalUpOption: 'Round total up ($)',
    perPersonUpOption: 'Round per-person up ($)',
    perPersonTotal: 'Per Person Total',
    includes: 'Includes',
    tipEach: 'tip each',
    totalTip: 'Total Tip',
    effectiveRate: 'Effective rate:',
    totalBill: 'Total Bill',
  },
  es: {
    errorBill: 'El monto de la cuenta no puede ser negativo.',
    errorTip: 'El porcentaje de propina debe estar entre 0% y 200%.',
    errorPeople: 'El número de personas debe estar entre 1 y 100.',
    billLabel: 'Subtotal de la cuenta ($)',
    tipLabel: 'Porcentaje de propina (%)',
    peopleLabel: 'Dividir entre (personas)',
    presetsLabel: 'Propinas sugeridas:',
    roundingLabel: 'Redondeo:',
    exactOption: 'Centavos exactos',
    totalUpOption: 'Redondear el total hacia arriba ($)',
    perPersonUpOption: 'Redondear por persona hacia arriba ($)',
    perPersonTotal: 'Total por persona',
    includes: 'Incluye',
    tipEach: 'de propina por persona',
    totalTip: 'Propina total',
    effectiveRate: 'Tasa efectiva:',
    totalBill: 'Cuenta total',
  },
  pt: {
    errorBill: 'O valor da conta não pode ser negativo.',
    errorTip: 'A porcentagem de gorjeta deve estar entre 0% e 200%.',
    errorPeople: 'O número de pessoas deve estar entre 1 e 100.',
    billLabel: 'Subtotal da conta ($)',
    tipLabel: 'Porcentagem de gorjeta (%)',
    peopleLabel: 'Dividir entre (pessoas)',
    presetsLabel: 'Gorjetas sugeridas:',
    roundingLabel: 'Arredondamento:',
    exactOption: 'Centavos exatos',
    totalUpOption: 'Arredondar o total para cima ($)',
    perPersonUpOption: 'Arredondar por pessoa para cima ($)',
    perPersonTotal: 'Total por pessoa',
    includes: 'Inclui',
    tipEach: 'de gorjeta por pessoa',
    totalTip: 'Gorjeta total',
    effectiveRate: 'Taxa efetiva:',
    totalBill: 'Conta total',
  },
  fr: {
    errorBill: 'Le montant de l’addition ne peut pas être négatif.',
    errorTip: 'Le pourcentage de pourboire doit être compris entre 0 % et 200 %.',
    errorPeople: 'Le nombre de personnes doit être compris entre 1 et 100.',
    billLabel: 'Sous-total de l’addition ($)',
    tipLabel: 'Pourcentage de pourboire (%)',
    peopleLabel: 'Partager entre (personnes)',
    presetsLabel: 'Pourboires suggérés :',
    roundingLabel: 'Arrondi :',
    exactOption: 'Centimes exacts',
    totalUpOption: 'Arrondir le total au supérieur ($)',
    perPersonUpOption: 'Arrondir par personne au supérieur ($)',
    perPersonTotal: 'Total par personne',
    includes: 'Comprend',
    tipEach: 'de pourboire par personne',
    totalTip: 'Pourboire total',
    effectiveRate: 'Taux effectif :',
    totalBill: 'Addition totale',
  },
  de: {
    errorBill: 'Der Rechnungsbetrag darf nicht negativ sein.',
    errorTip: 'Der Trinkgeldsatz muss zwischen 0% und 200% liegen.',
    errorPeople: 'Die Personenzahl muss zwischen 1 und 100 liegen.',
    billLabel: 'Rechnungsbetrag ($)',
    tipLabel: 'Trinkgeldsatz (%)',
    peopleLabel: 'Aufteilen auf (Personen)',
    presetsLabel: 'Trinkgeld-Vorgaben:',
    roundingLabel: 'Rundung:',
    exactOption: 'Exakte Cents',
    totalUpOption: 'Gesamtbetrag aufrunden ($)',
    perPersonUpOption: 'Betrag pro Person aufrunden ($)',
    perPersonTotal: 'Gesamtbetrag pro Person',
    includes: 'Enthält',
    tipEach: 'Trinkgeld pro Person',
    totalTip: 'Trinkgeld insgesamt',
    effectiveRate: 'Effektiver Satz:',
    totalBill: 'Gesamtrechnung',
  },
  it: {
    errorBill: 'L’importo del conto non può essere negativo.',
    errorTip: 'La percentuale di mancia deve essere tra 0% e 200%.',
    errorPeople: 'Il numero di persone deve essere tra 1 e 100.',
    billLabel: 'Subtotale del conto ($)',
    tipLabel: 'Percentuale di mancia (%)',
    peopleLabel: 'Dividi tra (persone)',
    presetsLabel: 'Mance predefinite:',
    roundingLabel: 'Arrotondamento:',
    exactOption: 'Centesimi esatti',
    totalUpOption: 'Arrotonda il totale per eccesso ($)',
    perPersonUpOption: 'Arrotonda la quota a persona per eccesso ($)',
    perPersonTotal: 'Totale a persona',
    includes: 'Include',
    tipEach: 'di mancia a persona',
    totalTip: 'Mancia totale',
    effectiveRate: 'Aliquota effettiva:',
    totalBill: 'Conto totale',
  },
  id: {
    errorBill: 'Jumlah tagihan tidak boleh negatif.',
    errorTip: 'Persentase tip harus antara 0% dan 200%.',
    errorPeople: 'Jumlah orang harus antara 1 dan 100.',
    billLabel: 'Subtotal Tagihan ($)',
    tipLabel: 'Persentase Tip (%)',
    peopleLabel: 'Dibagi Antara (Orang)',
    presetsLabel: 'Preset tip:',
    roundingLabel: 'Pembulatan:',
    exactOption: 'Sen yang tepat',
    totalUpOption: 'Bulatkan total ke atas ($)',
    perPersonUpOption: 'Bulatkan per orang ke atas ($)',
    perPersonTotal: 'Total Per Orang',
    includes: 'Termasuk',
    tipEach: 'tip masing-masing',
    totalTip: 'Total Tip',
    effectiveRate: 'Tarif efektif:',
    totalBill: 'Total Tagihan',
  },
  ru: {
    errorBill: 'Сумма счёта не может быть отрицательной.',
    errorTip: 'Процент чаевых должен быть от 0% до 200%.',
    errorPeople: 'Число людей должно быть от 1 до 100.',
    billLabel: 'Сумма счёта без чаевых ($)',
    tipLabel: 'Процент чаевых (%)',
    peopleLabel: 'Разделить на (человек)',
    presetsLabel: 'Готовые значения чаевых:',
    roundingLabel: 'Округление:',
    exactOption: 'Точные центы',
    totalUpOption: 'Округлить итог вверх ($)',
    perPersonUpOption: 'Округлить сумму с человека вверх ($)',
    perPersonTotal: 'Итого с человека',
    includes: 'Включает',
    tipEach: 'чаевых с каждого',
    totalTip: 'Всего чаевых',
    effectiveRate: 'Эффективная ставка:',
    totalBill: 'Итого по счёту',
  },
};

const TIP_PRESETS = [10, 15, 18, 20, 25];

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TipCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [billAmount, setBillAmount] = useState('84.50');
  const [tipPercent, setTipPercent] = useState('18');
  const [people, setPeople] = useState('2');
  const [rounding, setRounding] = useState<'none' | 'total-up' | 'per-person-up'>('none');

  const calc = useMemo(() => {
    const bill = Number(billAmount);
    const tipPct = Number(tipPercent);
    const split = Math.round(Number(people));

    if (!Number.isFinite(bill) || bill < 0) return { error: s.errorBill, data: null };
    if (!Number.isFinite(tipPct) || tipPct < 0 || tipPct > 200) return { error: s.errorTip, data: null };
    if (!Number.isFinite(split) || split < 1 || split > 100) return { error: s.errorPeople, data: null };

    let tipTotal = bill * (tipPct / 100);
    let totalBill = bill + tipTotal;
    let perPerson = totalBill / split;

    if (rounding === 'total-up') {
      totalBill = Math.ceil(totalBill);
      tipTotal = Math.max(0, totalBill - bill);
      perPerson = totalBill / split;
    } else if (rounding === 'per-person-up') {
      perPerson = Math.ceil(perPerson);
      totalBill = perPerson * split;
      tipTotal = Math.max(0, totalBill - bill);
    }

    const effectiveTipPct = bill > 0 ? (tipTotal / bill) * 100 : 0;

    return {
      error: '',
      data: {
        tipTotal,
        totalBill,
        perPerson,
        tipPerPerson: tipTotal / split,
        effectiveTipPct,
      },
    };
  }, [billAmount, tipPercent, people, rounding, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="tip-bill" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.billLabel}
          </label>
          <input
            id="tip-bill"
            type="number"
            min={0}
            step="0.5"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="tip-pct" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.tipLabel}
          </label>
          <input
            id="tip-pct"
            type="number"
            min={0}
            max={200}
            step="1"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="tip-people" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.peopleLabel}
          </label>
          <input
            id="tip-people"
            type="number"
            min={1}
            max={100}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-600 mr-1">{s.presetsLabel}</span>
          {TIP_PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setTipPercent(String(p))}
              className={`rounded-md px-3 py-1.5 text-xs font-mono cursor-pointer ${
                Number(tipPercent) === p
                  ? 'bg-indigo-600 text-white'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {p}%
            </button>
          ))}
        </div>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700">
          <span>{s.roundingLabel}</span>
          <select
            value={rounding}
            onChange={(e) => setRounding(e.target.value as 'none' | 'total-up' | 'per-person-up')}
            className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm"
          >
            <option value="none">{s.exactOption}</option>
            <option value="total-up">{s.totalUpOption}</option>
            <option value="per-person-up">{s.perPersonUpOption}</option>
          </select>
        </label>
      </div>

      {calc.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {calc.error}
        </div>
      )}

      {calc.data && (
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
            <dt className="text-xs font-medium text-indigo-700">{s.perPersonTotal}</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.perPerson, locale)}
            </dd>
            <dd className="mt-0.5 text-xs text-slate-600 tabular-nums">
              {s.includes} ${money(calc.data.tipPerPerson, locale)} {s.tipEach}
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">{s.totalTip}</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.tipTotal, locale)}
            </dd>
            <dd className="mt-0.5 text-xs text-slate-500 tabular-nums">
              {s.effectiveRate} {calc.data.effectiveTipPct.toFixed(1)}%
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-medium text-slate-500">{s.totalBill}</dt>
            <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
              ${money(calc.data.totalBill, locale)}
            </dd>
          </div>
        </dl>
      )}
    </div>
  );
}
