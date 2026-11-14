import { useMemo, useState } from 'react';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
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
  };

function money(n: number, locale: string): string {
  return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function DiscountMarginCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('discount-margin-calculator', STRINGS_EN);
  const palette = pastelForKey('discount-margin-calculator');
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
            mode === 'discount' ? `${palette.soft} shadow-xs` : 'text-slate-600'
          }`}
        >
          {s.discountTab}
        </button>
        <button
          type="button"
          onClick={() => setMode('margin')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'margin' ? `${palette.soft} shadow-xs` : 'text-slate-600'
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
              <div className={`rounded-xl border border-indigo-200 ${palette.card} p-4`}>
                <dt className={`text-xs font-medium ${palette.link}`}>{s.finalPrice}</dt>
                <dd className={`mt-1 text-2xl font-bold font-mono ${palette.link} tabular-nums`}>
                  ${money(discountResult.data.finalTotal, locale)}
                </dd>
                <dd className="mt-0.5 text-xs text-slate-600 tabular-nums">
                  {s.beforeTax} ${money(discountResult.data.salePrice, locale)}
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[1].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.youSave}</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-emerald-700 tabular-nums">
                  ${money(discountResult.data.savings, locale)}
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[2].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.taxAdded}</dt>
                <dd className={`mt-1 text-2xl font-bold font-mono ${PASTEL_PALETTES[2].link} tabular-nums`}>
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
              <div className={`rounded-xl border border-indigo-200 ${palette.card} p-4`}>
                <dt className={`text-xs font-medium ${palette.link}`}>{s.grossProfit}</dt>
                <dd
                  className={`mt-1 text-2xl font-bold font-mono tabular-nums ${
                    marginResult.data.grossProfit >= 0 ? 'text-slate-900' : 'text-red-700'
                  }`}
                >
                  ${money(marginResult.data.grossProfit, locale)}
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[1].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.profitMargin}</dt>
                <dd className={`mt-1 text-2xl font-bold font-mono ${PASTEL_PALETTES[1].link} tabular-nums`}>
                  {marginResult.data.marginPct.toFixed(2)}%
                </dd>
                <dd className="mt-0.5 text-xs text-slate-500">{s.profitDivSelling}</dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[2].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.markup}</dt>
                <dd className={`mt-1 text-2xl font-bold font-mono ${PASTEL_PALETTES[2].link} tabular-nums`}>
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
