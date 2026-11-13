import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errorPrice: 'Original price cannot be negative.',
    errorDiscount: 'Discount must be between 0% and 100%.',
    errorTax: 'Sales tax must be between 0% and 100%.',
    errorCost: 'Cost cannot be negative.',
    errorSelling: 'Selling price must be greater than 0.',
    discountTab: 'Sale Discount',
    marginTab: 'Profit Margin & Markup',
    originalPriceLabel: 'Original Price ($)',
    discountLabel: 'Discount (%)',
    salesTaxLabel: 'Sales Tax (%)',
    costLabel: 'Unit Cost ($)',
    sellingLabel: 'Selling Price ($)',
    finalPrice: 'Final Price',
    beforeTax: 'Before tax:',
    youSave: 'You Save',
    taxAdded: 'Tax Added',
    grossProfit: 'Gross Profit',
    profitMargin: 'Profit Margin',
    profitDivSelling: '(Profit ÷ Selling Price)',
    markup: 'Markup',
    profitDivCost: '(Profit ÷ Cost)',
  },
  es: {
    errorPrice: 'El precio original no puede ser negativo.',
    errorDiscount: 'El descuento debe estar entre 0% y 100%.',
    errorTax: 'El impuesto sobre las ventas debe estar entre 0% y 100%.',
    errorCost: 'El costo no puede ser negativo.',
    errorSelling: 'El precio de venta debe ser mayor que 0.',
    discountTab: 'Descuento de venta',
    marginTab: 'Margen de ganancia y recargo',
    originalPriceLabel: 'Precio original ($)',
    discountLabel: 'Descuento (%)',
    salesTaxLabel: 'Impuesto sobre las ventas (%)',
    costLabel: 'Costo unitario ($)',
    sellingLabel: 'Precio de venta ($)',
    finalPrice: 'Precio final',
    beforeTax: 'Antes de impuestos:',
    youSave: 'Ahorras',
    taxAdded: 'Impuesto agregado',
    grossProfit: 'Ganancia bruta',
    profitMargin: 'Margen de ganancia',
    profitDivSelling: '(Ganancia ÷ Precio de venta)',
    markup: 'Recargo',
    profitDivCost: '(Ganancia ÷ Costo)',
  },
  pt: {
    errorPrice: 'O preço original não pode ser negativo.',
    errorDiscount: 'O desconto deve estar entre 0% e 100%.',
    errorTax: 'O imposto sobre vendas deve estar entre 0% e 100%.',
    errorCost: 'O custo não pode ser negativo.',
    errorSelling: 'O preço de venda deve ser maior que 0.',
    discountTab: 'Desconto de venda',
    marginTab: 'Margem de lucro e markup',
    originalPriceLabel: 'Preço original ($)',
    discountLabel: 'Desconto (%)',
    salesTaxLabel: 'Imposto sobre vendas (%)',
    costLabel: 'Custo unitário ($)',
    sellingLabel: 'Preço de venda ($)',
    finalPrice: 'Preço final',
    beforeTax: 'Antes dos impostos:',
    youSave: 'Você economiza',
    taxAdded: 'Imposto adicionado',
    grossProfit: 'Lucro bruto',
    profitMargin: 'Margem de lucro',
    profitDivSelling: '(Lucro ÷ Preço de venda)',
    markup: 'Markup',
    profitDivCost: '(Lucro ÷ Custo)',
  },
  fr: {
    errorPrice: 'Le prix d’origine ne peut pas être négatif.',
    errorDiscount: 'La remise doit être comprise entre 0 % et 100 %.',
    errorTax: 'La taxe de vente doit être comprise entre 0 % et 100 %.',
    errorCost: 'Le coût ne peut pas être négatif.',
    errorSelling: 'Le prix de vente doit être supérieur à 0.',
    discountTab: 'Remise de vente',
    marginTab: 'Marge bénéficiaire et majoration',
    originalPriceLabel: 'Prix d’origine ($)',
    discountLabel: 'Remise (%)',
    salesTaxLabel: 'Taxe de vente (%)',
    costLabel: 'Coût unitaire ($)',
    sellingLabel: 'Prix de vente ($)',
    finalPrice: 'Prix final',
    beforeTax: 'Avant taxes :',
    youSave: 'Vous économisez',
    taxAdded: 'Taxe ajoutée',
    grossProfit: 'Bénéfice brut',
    profitMargin: 'Marge bénéficiaire',
    profitDivSelling: '(Bénéfice ÷ Prix de vente)',
    markup: 'Majoration',
    profitDivCost: '(Bénéfice ÷ Coût)',
  },
  de: {
    errorPrice: 'Der Originalpreis darf nicht negativ sein.',
    errorDiscount: 'Der Rabatt muss zwischen 0% und 100% liegen.',
    errorTax: 'Die Umsatzsteuer muss zwischen 0% und 100% liegen.',
    errorCost: 'Die Kosten dürfen nicht negativ sein.',
    errorSelling: 'Der Verkaufspreis muss größer als 0 sein.',
    discountTab: 'Aktionsrabatt',
    marginTab: 'Gewinnspanne & Aufschlag',
    originalPriceLabel: 'Originalpreis ($)',
    discountLabel: 'Rabatt (%)',
    salesTaxLabel: 'Umsatzsteuer (%)',
    costLabel: 'Stückkosten ($)',
    sellingLabel: 'Verkaufspreis ($)',
    finalPrice: 'Endpreis',
    beforeTax: 'Vor Steuern:',
    youSave: 'Sie sparen',
    taxAdded: 'Steuer hinzugefügt',
    grossProfit: 'Bruttogewinn',
    profitMargin: 'Gewinnmarge',
    profitDivSelling: '(Gewinn ÷ Verkaufspreis)',
    markup: 'Aufschlag',
    profitDivCost: '(Gewinn ÷ Kosten)',
  },
  it: {
    errorPrice: 'Il prezzo originale non può essere negativo.',
    errorDiscount: 'Lo sconto deve essere tra 0% e 100%.',
    errorTax: 'L’imposta sulle vendite deve essere tra 0% e 100%.',
    errorCost: 'Il costo non può essere negativo.',
    errorSelling: 'Il prezzo di vendita deve essere maggiore di 0.',
    discountTab: 'Sconto in saldo',
    marginTab: 'Margine di profitto e ricarico',
    originalPriceLabel: 'Prezzo originale ($)',
    discountLabel: 'Sconto (%)',
    salesTaxLabel: 'Imposta sulle vendite (%)',
    costLabel: 'Costo unitario ($)',
    sellingLabel: 'Prezzo di vendita ($)',
    finalPrice: 'Prezzo finale',
    beforeTax: 'Prima delle imposte:',
    youSave: 'Risparmi',
    taxAdded: 'Imposta aggiunta',
    grossProfit: 'Profitto lordo',
    profitMargin: 'Margine di profitto',
    profitDivSelling: '(Profitto ÷ prezzo di vendita)',
    markup: 'Ricarico',
    profitDivCost: '(Profitto ÷ costo)',
  },
};

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function DiscountMarginCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [mode, setMode] = useState<'discount' | 'margin'>('discount');

  // Sale discount state
  const [originalPrice, setOriginalPrice] = useState('120');
  const [discountPct, setDiscountPct] = useState('25');
  const [taxPct, setTaxPct] = useState('0');

  // Profit margin state
  const [costPrice, setCostPrice] = useState('40');
  const [sellingPrice, setSellingPrice] = useState('65');

  const discountResult = useMemo(() => {
    const price = Number(originalPrice);
    const disc = Number(discountPct);
    const tax = Number(taxPct) || 0;

    if (!Number.isFinite(price) || price < 0) return { error: s.errorPrice, data: null };
    if (!Number.isFinite(disc) || disc < 0 || disc > 100) return { error: s.errorDiscount, data: null };
    if (!Number.isFinite(tax) || tax < 0 || tax > 100) return { error: s.errorTax, data: null };

    const savings = price * (disc / 100);
    const salePrice = price - savings;
    const taxAmount = salePrice * (tax / 100);
    const finalTotal = salePrice + taxAmount;

    return { error: '', data: { savings, salePrice, taxAmount, finalTotal } };
  }, [originalPrice, discountPct, taxPct, s]);

  const marginResult = useMemo(() => {
    const cost = Number(costPrice);
    const sell = Number(sellingPrice);

    if (!Number.isFinite(cost) || cost < 0) return { error: s.errorCost, data: null };
    if (!Number.isFinite(sell) || sell <= 0) return { error: s.errorSelling, data: null };

    const grossProfit = sell - cost;
    const marginPct = (grossProfit / sell) * 100;
    const markupPct = cost > 0 ? (grossProfit / cost) * 100 : 0;

    return { error: '', data: { grossProfit, marginPct, markupPct } };
  }, [costPrice, sellingPrice, s]);

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('discount')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'discount' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          {s.discountTab}
        </button>
        <button
          type="button"
          onClick={() => setMode('margin')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'margin' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          {s.marginTab}
        </button>
      </div>

      {mode === 'discount' ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="disc-orig" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.originalPriceLabel}
              </label>
              <input
                id="disc-orig"
                type="number"
                min={0}
                step="0.01"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="disc-pct" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.discountLabel}
              </label>
              <input
                id="disc-pct"
                type="number"
                min={0}
                max={100}
                step="0.5"
                value={discountPct}
                onChange={(e) => setDiscountPct(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="disc-tax" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.salesTaxLabel}
              </label>
              <input
                id="disc-tax"
                type="number"
                min={0}
                max={100}
                step="0.1"
                value={taxPct}
                onChange={(e) => setTaxPct(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>
          </div>

          {discountResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {discountResult.error}
            </div>
          )}

          {discountResult.data && (
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
                <dt className="text-xs font-medium text-indigo-700">{s.finalPrice}</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  ${money(discountResult.data.finalTotal, locale)}
                </dd>
                <dd className="mt-0.5 text-xs text-slate-600 tabular-nums">
                  {s.beforeTax} ${money(discountResult.data.salePrice, locale)}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">{s.youSave}</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-emerald-700 tabular-nums">
                  ${money(discountResult.data.savings, locale)}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">{s.taxAdded}</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  ${money(discountResult.data.taxAmount, locale)}
                </dd>
              </div>
            </dl>
          )}
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="m-cost" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.costLabel}
              </label>
              <input
                id="m-cost"
                type="number"
                min={0}
                step="0.01"
                value={costPrice}
                onChange={(e) => setCostPrice(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="m-sell" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.sellingLabel}
              </label>
              <input
                id="m-sell"
                type="number"
                min={0.01}
                step="0.01"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>
          </div>

          {marginResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {marginResult.error}
            </div>
          )}

          {marginResult.data && (
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
                <dt className="text-xs font-medium text-indigo-700">{s.grossProfit}</dt>
                <dd
                  className={`mt-1 text-2xl font-bold font-mono tabular-nums ${
                    marginResult.data.grossProfit >= 0 ? 'text-slate-900' : 'text-red-700'
                  }`}
                >
                  ${money(marginResult.data.grossProfit, locale)}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">{s.profitMargin}</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  {marginResult.data.marginPct.toFixed(2)}%
                </dd>
                <dd className="mt-0.5 text-xs text-slate-500">{s.profitDivSelling}</dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">{s.markup}</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  {marginResult.data.markupPct.toFixed(2)}%
                </dd>
                <dd className="mt-0.5 text-xs text-slate-500">{s.profitDivCost}</dd>
              </div>
            </dl>
          )}
        </>
      )}
    </div>
  );
}
