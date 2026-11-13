import { AlertCircle, ArrowLeftRight, RefreshCw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errorAmount: 'Enter an amount of 0 or greater.',
    errorRate: 'Enter a positive exchange rate greater than 0.',
    errorFee: 'Enter a conversion fee between 0% and 50%.',
    fetchErrorWithMessage:
      'Could not fetch external rate ({message}). Continue by entering your exchange rate manually above.',
    fetchErrorGeneric:
      'Could not reach external rate API. Enter your exchange rate manually above.',
    fetchErrorNoPair: 'Selected currency pair was not returned by the reference API.',
    currencyNames: {
      USD: 'US Dollar',
      EUR: 'Euro',
      GBP: 'British Pound',
      JPY: 'Japanese Yen',
      CAD: 'Canadian Dollar',
      AUD: 'Australian Dollar',
      CHF: 'Swiss Franc',
      INR: 'Indian Rupee',
      SGD: 'Singapore Dollar',
      NZD: 'New Zealand Dollar',
      MXN: 'Mexican Peso',
      CNY: 'Chinese Yuan',
    },
    rateSourceManualDefault: 'Manual user-entered rate (offline default)',
    rateSourceManual: 'Manual user-entered rate',
    rateSourceIdentity: 'Identity rate (1.0000) for matching currencies',
    rateSourceEcb: 'External ECB reference rate via Frankfurter API (date: {date})',
    rateSourceInverted: 'Inverted from previous rate',
    disclosureTitle: 'Rate Source Disclosure:',
    disclosureBody:
      'Live market exchange rates are never fabricated offline. Enter your exact quoted exchange rate manually, or click',
    disclosureBodyAfter:
      'to request a reference rate from the external Frankfurter API.',
    activeRateSource: 'Active rate source:',
    amountLabel: 'Amount',
    fromLabel: 'From Currency',
    toLabel: 'To Currency',
    swapAria: 'Swap currencies',
    swapTitle: 'Swap currencies and invert rate',
    rateLabel: 'Exchange Rate',
    feeLabel: 'Bank / Card FX Fee (%)',
    fetchButton: 'Fetch ECB Reference Rate',
    fetchingButton: 'Fetching ECB Rate...',
    netConverted: 'Net Converted Amount',
    grossBeforeFee: 'Gross Before FX Fee',
    feeLabelShort: 'Fee',
    inverseRate: 'Inverse Exchange Rate',
    perOne: 'per 1',
    amountHeaderSuffix: 'Amount',
    netHeaderPrefix: 'Net',
    netHeaderSuffix: '(at entered rate & fee)',
  };

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
  { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
];

const QUICK_AMOUNTS = [1, 10, 50, 100, 500, 1000];

export default function CurrencyCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('currency-calculator', STRINGS_EN);
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState('1.0000');
  const [feePercent, setFeePercent] = useState('0');
  const [rateSource, setRateSource] = useState<string>(s.rateSourceManualDefault);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const currencyName = (code: string): string =>
    (s.currencyNames as Record<string, string>)[code] ?? code;

  const handleFetchRate = async () => {
    setFetchError('');
    if (fromCurrency === toCurrency) {
      setExchangeRate('1.0000');
      setRateSource(s.rateSourceIdentity);
      return;
    }

    setIsFetching(true);
    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${encodeURIComponent(fromCurrency)}&to=${encodeURIComponent(toCurrency)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = (await response.json()) as {
        date?: string;
        rates?: Record<string, number>;
      };
      const liveRate = payload.rates?.[toCurrency];
      if (typeof liveRate !== 'number' || !Number.isFinite(liveRate)) {
        throw new Error(s.fetchErrorNoPair);
      }
      setExchangeRate(liveRate.toFixed(6).replace(/0+$/, '').replace(/\.$/, ''));
      setRateSource(s.rateSourceEcb.replace('{date}', payload.date ?? 'latest'));
    } catch (err) {
      setFetchError(
        err instanceof Error
          ? s.fetchErrorWithMessage.replace('{message}', err.message)
          : s.fetchErrorGeneric
      );
    } finally {
      setIsFetching(false);
    }
  };

  const result = useMemo(() => {
    const amt = Number(amount);
    const rate = Number(exchangeRate);
    const feePct = Number(feePercent);

    if (!Number.isFinite(amt) || amt < 0) {
      return { error: s.errorAmount, data: null };
    }
    if (!Number.isFinite(rate) || rate <= 0) {
      return { error: s.errorRate, data: null };
    }
    if (!Number.isFinite(feePct) || feePct < 0 || feePct > 50) {
      return { error: s.errorFee, data: null };
    }

    const grossConverted = amt * rate;
    const feeCost = grossConverted * (feePct / 100);
    const netConverted = grossConverted - feeCost;
    const inverseRate = 1 / rate;

    return {
      error: '',
      data: {
        amt,
        rate,
        feePct,
        grossConverted,
        feeCost,
        netConverted,
        inverseRate,
        table: QUICK_AMOUNTS.map((q) => ({
          base: q,
          converted: q * rate * (1 - feePct / 100),
        })),
      },
    };
  }, [amount, exchangeRate, feePercent, s]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <div>
          <strong>{s.disclosureTitle}</strong> {s.disclosureBody}{' '}
          <em>{s.fetchButton}</em> {s.disclosureBodyAfter}
          <div className="mt-1 text-xs text-amber-800">
            {s.activeRateSource} <span className="font-medium">{rateSource}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_1fr] gap-3 items-end">
        <div>
          <label htmlFor="cur-amount" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.amountLabel}
          </label>
          <input
            id="cur-amount"
            type="number"
            min={0}
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="cur-from" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.fromLabel}
          </label>
          <select
            id="cur-from"
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
              setRateSource(s.rateSourceManual);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} — {currencyName(c.code)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            setFromCurrency(toCurrency);
            setToCurrency(fromCurrency);
            const current = Number(exchangeRate);
            if (Number.isFinite(current) && current > 0) {
              setExchangeRate((1 / current).toFixed(6).replace(/0+$/, '').replace(/\.$/, ''));
            }
            setRateSource(s.rateSourceInverted);
          }}
          aria-label={s.swapAria}
          title={s.swapTitle}
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700 hover:bg-slate-50 cursor-pointer"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>

        <div>
          <label htmlFor="cur-to" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.toLabel}
          </label>
          <select
            id="cur-to"
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.target.value);
              setRateSource(s.rateSourceManual);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} — {currencyName(c.code)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <div>
          <label htmlFor="cur-rate" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.rateLabel} (1 {fromCurrency} = ? {toCurrency})
          </label>
          <input
            id="cur-rate"
            type="number"
            min={0.000001}
            step="0.0001"
            value={exchangeRate}
            onChange={(e) => {
              setExchangeRate(e.target.value);
              setRateSource(s.rateSourceManual);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="cur-fee" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.feeLabel}
          </label>
          <input
            id="cur-fee"
            type="number"
            min={0}
            max={50}
            step="0.1"
            value={feePercent}
            onChange={(e) => setFeePercent(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <button
          type="button"
          onClick={handleFetchRate}
          disabled={isFetching}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100 disabled:opacity-60 cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`} />
          {isFetching ? s.fetchingButton : s.fetchButton}
        </button>
      </div>

      {fetchError && (
        <div role="status" className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {fetchError}
        </div>
      )}

      {result.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {result.error}
        </div>
      )}

      {result.data && (
        <>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-5">
              <dt className="text-xs font-medium text-indigo-700">
                {s.netConverted} ({toCurrency})
              </dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.netConverted.toLocaleString(locale, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}{' '}
                <span className="text-base font-semibold">{toCurrency}</span>
              </dd>
              <dd className="mt-1 text-xs text-slate-600 font-mono tabular-nums">
                1 {fromCurrency} = {result.data.rate} {toCurrency}
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <dt className="text-xs font-medium text-slate-500">{s.grossBeforeFee}</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.grossConverted.toLocaleString(locale, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}{' '}
                {toCurrency}
              </dd>
              <dd className="mt-1 text-xs text-slate-500 font-mono tabular-nums">
                {s.feeLabelShort} ({result.data.feePct}%): -{result.data.feeCost.toFixed(2)} {toCurrency}
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <dt className="text-xs font-medium text-slate-500">{s.inverseRate}</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.inverseRate.toFixed(6)} {fromCurrency}
              </dd>
              <dd className="mt-1 text-xs text-slate-500">
                {s.perOne} {toCurrency}
              </dd>
            </div>
          </dl>

          <div className="rounded-xl border border-slate-200 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">
                    {fromCurrency} {s.amountHeaderSuffix}
                  </th>
                  <th className="py-2.5 px-4 font-semibold text-right">
                    {s.netHeaderPrefix} {toCurrency} {s.netHeaderSuffix}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 tabular-nums font-mono">
                {result.data.table.map((row) => (
                  <tr key={row.base}>
                    <td className="py-2 px-4 text-slate-700">
                      {row.base.toLocaleString(locale)} {fromCurrency}
                    </td>
                    <td className="py-2 px-4 text-right font-semibold text-slate-900">
                      {row.converted.toLocaleString(locale, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{' '}
                      {toCurrency}
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
