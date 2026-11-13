import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errorEnterNumbers: 'Enter valid numbers.',
    errorTotalZero: 'Total (Y) cannot be 0.',
    errorStartZero: 'Starting value cannot be 0.',
    heading1: '1. Percentage of a Number',
    heading2: '2. Part as a Percentage of Whole',
    heading3: '3. Percentage Increase or Decrease',
    whatIs: 'What is',
    percentOf: '% of',
    isWhatPercentOf: 'is what % of',
    fromWord: 'From',
    toWord: 'to',
    result: 'Result:',
    change: 'Change:',
    formula: 'Formula',
    difference: 'Difference',
    ariaPctX: 'Percentage X',
    ariaBaseY: 'Base number Y',
    ariaPartX: 'Part value X',
    ariaWholeY: 'Whole value Y',
    ariaInitialA: 'Initial value A',
    ariaFinalB: 'Final value B',
  },
  es: {
    errorEnterNumbers: 'Ingresa números válidos.',
    errorTotalZero: 'El total (Y) no puede ser 0.',
    errorStartZero: 'El valor inicial no puede ser 0.',
    heading1: '1. Porcentaje de un número',
    heading2: '2. Parte como porcentaje del total',
    heading3: '3. Aumento o disminución porcentual',
    whatIs: '¿Cuánto es',
    percentOf: '% de',
    isWhatPercentOf: 'es qué % de',
    fromWord: 'De',
    toWord: 'a',
    result: 'Resultado:',
    change: 'Cambio:',
    formula: 'Fórmula',
    difference: 'Diferencia',
    ariaPctX: 'Porcentaje X',
    ariaBaseY: 'Número base Y',
    ariaPartX: 'Valor parcial X',
    ariaWholeY: 'Valor total Y',
    ariaInitialA: 'Valor inicial A',
    ariaFinalB: 'Valor final B',
  },
  pt: {
    errorEnterNumbers: 'Insira números válidos.',
    errorTotalZero: 'O total (Y) não pode ser 0.',
    errorStartZero: 'O valor inicial não pode ser 0.',
    heading1: '1. Porcentagem de um número',
    heading2: '2. Parte como porcentagem do todo',
    heading3: '3. Aumento ou diminuição percentual',
    whatIs: 'Quanto é',
    percentOf: '% de',
    isWhatPercentOf: 'é quantos % de',
    fromWord: 'De',
    toWord: 'para',
    result: 'Resultado:',
    change: 'Variação:',
    formula: 'Fórmula',
    difference: 'Diferença',
    ariaPctX: 'Porcentagem X',
    ariaBaseY: 'Número base Y',
    ariaPartX: 'Valor parcial X',
    ariaWholeY: 'Valor total Y',
    ariaInitialA: 'Valor inicial A',
    ariaFinalB: 'Valor final B',
  },
  fr: {
    errorEnterNumbers: 'Saisissez des nombres valides.',
    errorTotalZero: 'Le total (Y) ne peut pas être 0.',
    errorStartZero: 'La valeur initiale ne peut pas être 0.',
    heading1: '1. Pourcentage d’un nombre',
    heading2: '2. Partie en pourcentage du tout',
    heading3: '3. Augmentation ou diminution en pourcentage',
    whatIs: 'Combien font',
    percentOf: '% de',
    isWhatPercentOf: 'représentent quel % de',
    fromWord: 'De',
    toWord: 'à',
    result: 'Résultat :',
    change: 'Variation :',
    formula: 'Formule',
    difference: 'Différence',
    ariaPctX: 'Pourcentage X',
    ariaBaseY: 'Nombre de base Y',
    ariaPartX: 'Valeur partielle X',
    ariaWholeY: 'Valeur totale Y',
    ariaInitialA: 'Valeur initiale A',
    ariaFinalB: 'Valeur finale B',
  },
  de: {
    errorEnterNumbers: 'Geben Sie gültige Zahlen ein.',
    errorTotalZero: 'Der Gesamtwert (Y) darf nicht 0 sein.',
    errorStartZero: 'Der Startwert darf nicht 0 sein.',
    heading1: '1. Prozentwert einer Zahl',
    heading2: '2. Anteil als Prozentsatz des Ganzen',
    heading3: '3. Prozentuale Zu- oder Abnahme',
    whatIs: 'Wie viel sind',
    percentOf: '% von',
    isWhatPercentOf: 'sind wie viel % von',
    fromWord: 'Von',
    toWord: 'auf',
    result: 'Ergebnis:',
    change: 'Änderung:',
    formula: 'Formel',
    difference: 'Differenz',
    ariaPctX: 'Prozentsatz X',
    ariaBaseY: 'Basiszahl Y',
    ariaPartX: 'Teilwert X',
    ariaWholeY: 'Gesamtwert Y',
    ariaInitialA: 'Anfangswert A',
    ariaFinalB: 'Endwert B',
  },
  it: {
    errorEnterNumbers: 'Inserisci numeri validi.',
    errorTotalZero: 'Il totale (Y) non può essere 0.',
    errorStartZero: 'Il valore iniziale non può essere 0.',
    heading1: '1. Percentuale di un numero',
    heading2: '2. Parte come percentuale del totale',
    heading3: '3. Aumento o diminuzione percentuale',
    whatIs: 'Quanto è',
    percentOf: '% di',
    isWhatPercentOf: 'è che % di',
    fromWord: 'Da',
    toWord: 'a',
    result: 'Risultato:',
    change: 'Variazione:',
    formula: 'Formula',
    difference: 'Differenza',
    ariaPctX: 'Percentuale X',
    ariaBaseY: 'Numero base Y',
    ariaPartX: 'Valore parziale X',
    ariaWholeY: 'Valore totale Y',
    ariaInitialA: 'Valore iniziale A',
    ariaFinalB: 'Valore finale B',
  },
};

function fmt(n: number, locale: string): string {
  if (!Number.isFinite(n)) return '—';
  return Number(n.toFixed(6)).toLocaleString(locale, { maximumFractionDigits: 6 });
}

export default function PercentageCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  // Mode 1: What is X% of Y?
  const [m1Pct, setM1Pct] = useState('15');
  const [m1Base, setM1Base] = useState('240');

  // Mode 2: X is what % of Y?
  const [m2Part, setM2Part] = useState('45');
  const [m2Whole, setM2Whole] = useState('180');

  // Mode 3: Percentage change from A to B
  const [m3From, setM3From] = useState('120');
  const [m3To, setM3To] = useState('150');

  const r1 = useMemo(() => {
    const p = Number(m1Pct);
    const y = Number(m1Base);
    if (m1Pct.trim() === '' || m1Base.trim() === '' || !Number.isFinite(p) || !Number.isFinite(y)) {
      return { valid: false, value: 0, error: s.errorEnterNumbers };
    }
    return { valid: true, value: (p / 100) * y, error: '' };
  }, [m1Pct, m1Base, s]);

  const r2 = useMemo(() => {
    const x = Number(m2Part);
    const y = Number(m2Whole);
    if (m2Part.trim() === '' || m2Whole.trim() === '' || !Number.isFinite(x) || !Number.isFinite(y)) {
      return { valid: false, value: 0, error: s.errorEnterNumbers };
    }
    if (y === 0) {
      return { valid: false, value: 0, error: s.errorTotalZero };
    }
    return { valid: true, value: (x / y) * 100, error: '' };
  }, [m2Part, m2Whole, s]);

  const r3 = useMemo(() => {
    const a = Number(m3From);
    const b = Number(m3To);
    if (m3From.trim() === '' || m3To.trim() === '' || !Number.isFinite(a) || !Number.isFinite(b)) {
      return { valid: false, value: 0, diff: 0, error: s.errorEnterNumbers };
    }
    if (a === 0) {
      return { valid: false, value: 0, diff: 0, error: s.errorStartZero };
    }
    const diff = b - a;
    return { valid: true, value: (diff / Math.abs(a)) * 100, diff, error: '' };
  }, [m3From, m3To, s]);

  return (
    <div className="space-y-6">
      {/* Card 1 */}
      <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900">{s.heading1}</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>{s.whatIs}</span>
          <input
            type="number"
            aria-label={s.ariaPctX}
            value={m1Pct}
            onChange={(e) => setM1Pct(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>{s.percentOf}</span>
          <input
            type="number"
            aria-label={s.ariaBaseY}
            value={m1Base}
            onChange={(e) => setM1Base(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>?</span>
        </div>
        {r1.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              {s.result}{' '}
              <strong className="text-lg text-indigo-600 tabular-nums">{fmt(r1.value, locale)}</strong>{' '}
              <span className="text-xs text-slate-500">
                ({s.formula}: ({m1Pct} ÷ 100) × {m1Base})
              </span>
            </div>
            <CopyButton
              text={String(Number(r1.value.toFixed(6)))}
              label={t.common.copy}
              copiedLabel={t.common.copied}
            />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r1.error}</p>
        )}
      </section>

      {/* Card 2 */}
      <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900">{s.heading2}</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <input
            type="number"
            aria-label={s.ariaPartX}
            value={m2Part}
            onChange={(e) => setM2Part(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>{s.isWhatPercentOf}</span>
          <input
            type="number"
            aria-label={s.ariaWholeY}
            value={m2Whole}
            onChange={(e) => setM2Whole(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>?</span>
        </div>
        {r2.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              {s.result}{' '}
              <strong className="text-lg text-indigo-600 tabular-nums">{fmt(r2.value, locale)}%</strong>{' '}
              <span className="text-xs text-slate-500">
                ({s.formula}: ({m2Part} ÷ {m2Whole}) × 100)
              </span>
            </div>
            <CopyButton
              text={`${Number(r2.value.toFixed(6))}%`}
              label={t.common.copy}
              copiedLabel={t.common.copied}
            />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r2.error}</p>
        )}
      </section>

      {/* Card 3 */}
      <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900">{s.heading3}</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>{s.fromWord}</span>
          <input
            type="number"
            aria-label={s.ariaInitialA}
            value={m3From}
            onChange={(e) => setM3From(e.target.value)}
            className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
          <span>{s.toWord}</span>
          <input
            type="number"
            aria-label={s.ariaFinalB}
            value={m3To}
            onChange={(e) => setM3To(e.target.value)}
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono tabular-nums"
          />
        </div>
        {r3.valid ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="text-sm text-slate-600 font-mono">
              {s.change}{' '}
              <strong
                className={`text-lg tabular-nums ${
                  r3.value >= 0 ? 'text-emerald-700' : 'text-red-700'
                }`}
              >
                {r3.value >= 0 ? '+' : ''}
                {fmt(r3.value, locale)}%
              </strong>{' '}
              <span className="text-xs text-slate-500">
                ({s.difference}: {r3.diff >= 0 ? '+' : ''}
                {fmt(r3.diff, locale)})
              </span>
            </div>
            <CopyButton
              text={`${Number(r3.value.toFixed(6))}%`}
              label={t.common.copy}
              copiedLabel={t.common.copied}
            />
          </div>
        ) : (
          <p className="text-xs text-red-700">{r3.error}</p>
        )}
      </section>
    </div>
  );
}
