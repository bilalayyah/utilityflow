import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    linePrefix: 'Line Prefix',
    lineSuffix: 'Line Suffix',
    startNumber: 'Start Number',
    numberSeparator: 'Number Separator',
    addLineNumbers: 'Add line numbers',
    zeroPad: 'Zero-pad numbers (01, 02)',
    skipEmptyLines: 'Skip empty lines',
    inputLines: 'Input Lines',
    formattedLines: 'Formatted Lines',
    copyResult: 'Copy result',
    inputPlaceholder: 'Paste one value or line per row...',
    outputPlaceholder: 'Numbered or wrapped lines appear here...',
  },
  es: {
    linePrefix: 'Prefijo de línea',
    lineSuffix: 'Sufijo de línea',
    startNumber: 'Número inicial',
    numberSeparator: 'Separador de número',
    addLineNumbers: 'Agregar números de línea',
    zeroPad: 'Números con ceros a la izquierda (01, 02)',
    skipEmptyLines: 'Omitir líneas vacías',
    inputLines: 'Líneas de entrada',
    formattedLines: 'Líneas con formato',
    copyResult: 'Copiar resultado',
    inputPlaceholder: 'Pega un valor o una línea por fila...',
    outputPlaceholder: 'Las líneas numeradas o envueltas aparecen aquí...',
  },
};

const SAMPLE_LINES = `tokyo
london
berlin
toronto`;

export default function LinePrefixSuffixTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [input, setInput] = useState('');
  const [prefix, setPrefix] = useState("'");
  const [suffix, setSuffix] = useState("',");
  const [addNumbers, setAddNumbers] = useState(false);
  const [startNumber, setStartNumber] = useState(1);
  const [numberSeparator, setNumberSeparator] = useState('. ');
  const [padZeros, setPadZeros] = useState(false);
  const [skipEmptyLines, setSkipEmptyLines] = useState(true);

  const output = useMemo(() => {
    if (!input) return '';
    const lines = input.split(/\r?\n/);
    let counter = startNumber;
    const totalNonEmpty = lines.filter((l) => l.trim().length > 0).length;
    const padWidth = Math.max(2, String(startNumber + totalNonEmpty).length);

    return lines
      .map((line) => {
        if (skipEmptyLines && line.trim() === '') return line;
        const numLabel = addNumbers
          ? `${
              padZeros ? String(counter).padStart(padWidth, '0') : String(counter)
            }${numberSeparator}`
          : '';
        counter += 1;
        return `${numLabel}${prefix}${line}${suffix}`;
      })
      .join('\n');
  }, [input, prefix, suffix, addNumbers, startNumber, numberSeparator, padZeros, skipEmptyLines]);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <label htmlFor="lps-prefix" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.linePrefix}
          </label>
          <input
            id="lps-prefix"
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="e.g. - or '"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-mono text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="lps-suffix" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.lineSuffix}
          </label>
          <input
            id="lps-suffix"
            type="text"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            placeholder="e.g. , or ;"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-mono text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="lps-start" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.startNumber}
          </label>
          <input
            id="lps-start"
            type="number"
            value={startNumber}
            disabled={!addNumbers}
            onChange={(e) => setStartNumber(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-mono tabular-nums text-slate-900 disabled:bg-slate-100 disabled:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="lps-sep" className="block text-xs font-semibold text-slate-700 mb-1">
            {s.numberSeparator}
          </label>
          <input
            id="lps-sep"
            type="text"
            value={numberSeparator}
            disabled={!addNumbers}
            onChange={(e) => setNumberSeparator(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-mono text-slate-900 disabled:bg-slate-100 disabled:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={addNumbers}
              onChange={(e) => setAddNumbers(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.addLineNumbers}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={padZeros}
              disabled={!addNumbers}
              onChange={(e) => setPadZeros(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 disabled:opacity-50"
            />
            <span className={!addNumbers ? 'text-slate-400' : ''}>{s.zeroPad}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={skipEmptyLines}
              onChange={(e) => setSkipEmptyLines(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.skipEmptyLines}</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(SAMPLE_LINES)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => setInput('')}
            disabled={!input}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lps-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.inputLines}
          </label>
          <textarea
            id="lps-input"
            rows={9}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="lps-output" className="text-sm font-semibold text-slate-900">
              {s.formattedLines}
            </label>
            <CopyButton text={output} label={s.copyResult} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="lps-output"
            rows={9}
            readOnly
            value={output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
