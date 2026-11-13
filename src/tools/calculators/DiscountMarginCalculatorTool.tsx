import { useMemo, useState } from 'react';

function money(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function DiscountMarginCalculatorTool() {
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

    if (!Number.isFinite(price) || price < 0) return { error: 'Original price cannot be negative.', data: null };
    if (!Number.isFinite(disc) || disc < 0 || disc > 100) return { error: 'Discount must be between 0% and 100%.', data: null };
    if (!Number.isFinite(tax) || tax < 0 || tax > 100) return { error: 'Sales tax must be between 0% and 100%.', data: null };

    const savings = price * (disc / 100);
    const salePrice = price - savings;
    const taxAmount = salePrice * (tax / 100);
    const finalTotal = salePrice + taxAmount;

    return { error: '', data: { savings, salePrice, taxAmount, finalTotal } };
  }, [originalPrice, discountPct, taxPct]);

  const marginResult = useMemo(() => {
    const cost = Number(costPrice);
    const sell = Number(sellingPrice);

    if (!Number.isFinite(cost) || cost < 0) return { error: 'Cost cannot be negative.', data: null };
    if (!Number.isFinite(sell) || sell <= 0) return { error: 'Selling price must be greater than 0.', data: null };

    const grossProfit = sell - cost;
    const marginPct = (grossProfit / sell) * 100;
    const markupPct = cost > 0 ? (grossProfit / cost) * 100 : 0;

    return { error: '', data: { grossProfit, marginPct, markupPct } };
  }, [costPrice, sellingPrice]);

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
          Sale Discount
        </button>
        <button
          type="button"
          onClick={() => setMode('margin')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'margin' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          Profit Margin &amp; Markup
        </button>
      </div>

      {mode === 'discount' ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="disc-orig" className="block text-xs font-semibold text-slate-700 mb-1">
                Original Price ($)
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
                Discount (%)
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
                Sales Tax (%)
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
                <dt className="text-xs font-medium text-indigo-700">Final Price</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  ${money(discountResult.data.finalTotal)}
                </dd>
                <dd className="mt-0.5 text-xs text-slate-600 tabular-nums">
                  Before tax: ${money(discountResult.data.salePrice)}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">You Save</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-emerald-700 tabular-nums">
                  ${money(discountResult.data.savings)}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Tax Added</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  ${money(discountResult.data.taxAmount)}
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
                Unit Cost ($)
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
                Selling Price ($)
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
                <dt className="text-xs font-medium text-indigo-700">Gross Profit</dt>
                <dd
                  className={`mt-1 text-2xl font-bold font-mono tabular-nums ${
                    marginResult.data.grossProfit >= 0 ? 'text-slate-900' : 'text-red-700'
                  }`}
                >
                  ${money(marginResult.data.grossProfit)}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Profit Margin</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  {marginResult.data.marginPct.toFixed(2)}%
                </dd>
                <dd className="mt-0.5 text-xs text-slate-500">(Profit ÷ Selling Price)</dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Markup</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  {marginResult.data.markupPct.toFixed(2)}%
                </dd>
                <dd className="mt-0.5 text-xs text-slate-500">(Profit ÷ Cost)</dd>
              </div>
            </dl>
          )}
        </>
      )}
    </div>
  );
}
