import { AlertCircle, ArrowLeftRight, RefreshCw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
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
  },
  es: {
    errorAmount: 'Ingresa un monto de 0 o más.',
    errorRate: 'Ingresa una tasa de cambio positiva mayor que 0.',
    errorFee: 'Ingresa una comisión de conversión entre 0% y 50%.',
    fetchErrorWithMessage:
      'No se pudo obtener la tasa externa ({message}). Continúa ingresando tu tasa de cambio manualmente arriba.',
    fetchErrorGeneric:
      'No se pudo contactar la API externa de tasas. Ingresa tu tasa de cambio manualmente arriba.',
    fetchErrorNoPair: 'La API de referencia no devolvió el par de monedas seleccionado.',
    currencyNames: {
      USD: 'Dólar estadounidense',
      EUR: 'Euro',
      GBP: 'Libra esterlina',
      JPY: 'Yen japonés',
      CAD: 'Dólar canadiense',
      AUD: 'Dólar australiano',
      CHF: 'Franco suizo',
      INR: 'Rupia india',
      SGD: 'Dólar de Singapur',
      NZD: 'Dólar neozelandés',
      MXN: 'Peso mexicano',
      CNY: 'Yuan chino',
    },
    rateSourceManualDefault: 'Tasa manual ingresada por el usuario (predeterminada sin conexión)',
    rateSourceManual: 'Tasa manual ingresada por el usuario',
    rateSourceIdentity: 'Tasa de identidad (1.0000) para monedas iguales',
    rateSourceEcb: 'Tasa de referencia externa del BCE vía API de Frankfurter (fecha: {date})',
    rateSourceInverted: 'Invertida de la tasa anterior',
    disclosureTitle: 'Aviso sobre la fuente de la tasa:',
    disclosureBody:
      'Las tasas de cambio del mercado en vivo nunca se inventan sin conexión. Ingresa tu tasa de cambio cotizada exacta manualmente, o haz clic en',
    disclosureBodyAfter:
      'para solicitar una tasa de referencia de la API externa de Frankfurter.',
    activeRateSource: 'Fuente de tasa activa:',
    amountLabel: 'Monto',
    fromLabel: 'Moneda de origen',
    toLabel: 'Moneda de destino',
    swapAria: 'Intercambiar monedas',
    swapTitle: 'Intercambiar monedas e invertir la tasa',
    rateLabel: 'Tasa de cambio',
    feeLabel: 'Comisión bancaria / de tarjeta (%)',
    fetchButton: 'Obtener tasa de referencia del BCE',
    fetchingButton: 'Obteniendo tasa del BCE...',
    netConverted: 'Monto neto convertido',
    grossBeforeFee: 'Bruto antes de la comisión',
    feeLabelShort: 'Comisión',
    inverseRate: 'Tasa de cambio inversa',
    perOne: 'por 1',
    amountHeaderSuffix: 'Monto',
    netHeaderPrefix: 'Neto',
    netHeaderSuffix: '(a la tasa y comisión ingresadas)',
  },
  pt: {
    errorAmount: 'Insira um valor de 0 ou mais.',
    errorRate: 'Insira uma taxa de câmbio positiva maior que 0.',
    errorFee: 'Insira uma taxa de conversão entre 0% e 50%.',
    fetchErrorWithMessage:
      'Não foi possível obter a taxa externa ({message}). Continue inserindo sua taxa de câmbio manualmente acima.',
    fetchErrorGeneric:
      'Não foi possível acessar a API de taxas externa. Insira sua taxa de câmbio manualmente acima.',
    fetchErrorNoPair: 'A API de referência não retornou o par de moedas selecionado.',
    currencyNames: {
      USD: 'Dólar americano',
      EUR: 'Euro',
      GBP: 'Libra esterlina',
      JPY: 'Iene japonês',
      CAD: 'Dólar canadense',
      AUD: 'Dólar australiano',
      CHF: 'Franco suíço',
      INR: 'Rupia indiana',
      SGD: 'Dólar de Singapura',
      NZD: 'Dólar neozelandês',
      MXN: 'Peso mexicano',
      CNY: 'Yuan chinês',
    },
    rateSourceManualDefault: 'Taxa manual inserida pelo usuário (padrão offline)',
    rateSourceManual: 'Taxa manual inserida pelo usuário',
    rateSourceIdentity: 'Taxa de identidade (1.0000) para moedas iguais',
    rateSourceEcb: 'Taxa de referência externa do BCE via API Frankfurter (data: {date})',
    rateSourceInverted: 'Invertida da taxa anterior',
    disclosureTitle: 'Aviso sobre a fonte da taxa:',
    disclosureBody:
      'As taxas de câmbio do mercado ao vivo nunca são inventadas offline. Insira sua taxa de câmbio cotada exata manualmente ou clique em',
    disclosureBodyAfter:
      'para solicitar uma taxa de referência da API externa do Frankfurter.',
    activeRateSource: 'Fonte da taxa ativa:',
    amountLabel: 'Valor',
    fromLabel: 'Moeda de origem',
    toLabel: 'Moeda de destino',
    swapAria: 'Trocar moedas',
    swapTitle: 'Trocar moedas e inverter a taxa',
    rateLabel: 'Taxa de câmbio',
    feeLabel: 'Taxa do banco / cartão (%)',
    fetchButton: 'Obter taxa de referência do BCE',
    fetchingButton: 'Obtendo taxa do BCE...',
    netConverted: 'Valor líquido convertido',
    grossBeforeFee: 'Bruto antes da taxa',
    feeLabelShort: 'Taxa',
    inverseRate: 'Taxa de câmbio inversa',
    perOne: 'por 1',
    amountHeaderSuffix: 'Valor',
    netHeaderPrefix: 'Líquido',
    netHeaderSuffix: '(na taxa e taxa inseridas)',
  },
  fr: {
    errorAmount: 'Saisissez un montant de 0 ou plus.',
    errorRate: 'Saisissez un taux de change positif supérieur à 0.',
    errorFee: 'Saisissez des frais de conversion entre 0 % et 50 %.',
    fetchErrorWithMessage:
      'Impossible de récupérer le taux externe ({message}). Continuez en saisissant votre taux de change manuellement ci-dessus.',
    fetchErrorGeneric:
      'Impossible de joindre l’API de taux externe. Saisissez votre taux de change manuellement ci-dessus.',
    fetchErrorNoPair: 'La paire de devises sélectionnée n’a pas été renvoyée par l’API de référence.',
    currencyNames: {
      USD: 'Dollar américain',
      EUR: 'Euro',
      GBP: 'Livre sterling',
      JPY: 'Yen japonais',
      CAD: 'Dollar canadien',
      AUD: 'Dollar australien',
      CHF: 'Franc suisse',
      INR: 'Roupie indienne',
      SGD: 'Dollar de Singapour',
      NZD: 'Dollar néo-zélandais',
      MXN: 'Peso mexicain',
      CNY: 'Yuan chinois',
    },
    rateSourceManualDefault: 'Taux manuel saisi par l’utilisateur (par défaut hors ligne)',
    rateSourceManual: 'Taux manuel saisi par l’utilisateur',
    rateSourceIdentity: 'Taux d’identité (1.0000) pour des devises identiques',
    rateSourceEcb: 'Taux de référence externe de la BCE via l’API Frankfurter (date : {date})',
    rateSourceInverted: 'Inversé à partir du taux précédent',
    disclosureTitle: 'Informations sur la source du taux :',
    disclosureBody:
      'Les taux de change du marché en direct ne sont jamais inventés hors ligne. Saisissez votre taux de change coté exact manuellement, ou cliquez sur',
    disclosureBodyAfter:
      'pour demander un taux de référence à l’API externe Frankfurter.',
    activeRateSource: 'Source du taux actif :',
    amountLabel: 'Montant',
    fromLabel: 'Devise source',
    toLabel: 'Devise cible',
    swapAria: 'Échanger les devises',
    swapTitle: 'Échanger les devises et inverser le taux',
    rateLabel: 'Taux de change',
    feeLabel: 'Frais bancaires / de carte (%)',
    fetchButton: 'Récupérer le taux de référence de la BCE',
    fetchingButton: 'Récupération du taux de la BCE...',
    netConverted: 'Montant net converti',
    grossBeforeFee: 'Brut avant frais',
    feeLabelShort: 'Frais',
    inverseRate: 'Taux de change inverse',
    perOne: 'pour 1',
    amountHeaderSuffix: 'Montant',
    netHeaderPrefix: 'Net',
    netHeaderSuffix: '(au taux et aux frais saisis)',
  },
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
  const s = STRINGS[locale];
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
