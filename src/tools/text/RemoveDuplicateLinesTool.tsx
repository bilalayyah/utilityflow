import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    caseSensitive: 'Case-sensitive',
    trimWhitespace: 'Trim whitespace',
    removeEmptyLines: 'Remove empty lines',
    sortAlphabetically: 'Sort alphabetically',
    originalLines: 'Original Lines',
    lines: 'lines',
    uniqueLines: 'Unique Lines',
    unique: 'unique',
    removed: 'removed',
    inputPlaceholder: 'Paste a list with one item per line...',
    outputPlaceholder: 'Deduplicated output will appear here...',
  },
  es: {
    caseSensitive: 'Distinguir mayúsculas y minúsculas',
    trimWhitespace: 'Recortar espacios en blanco',
    removeEmptyLines: 'Eliminar líneas vacías',
    sortAlphabetically: 'Ordenar alfabéticamente',
    originalLines: 'Líneas originales',
    lines: 'líneas',
    uniqueLines: 'Líneas únicas',
    unique: 'únicas',
    removed: 'eliminadas',
    inputPlaceholder: 'Pega una lista con un elemento por línea...',
    outputPlaceholder: 'El resultado sin duplicados aparecerá aquí...',
  },
};

const SAMPLE_LINES = `apple@example.com
banana@example.com
Apple@example.com
cherry@example.com
  banana@example.com  

date@example.com
cherry@example.com`;

export default function RemoveDuplicateLinesTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [input, setInput] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [trimLines, setTrimLines] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [sortOutput, setSortOutput] = useState(false);

  const result = useMemo(() => {
    if (!input) {
      return { output: '', totalLines: 0, uniqueCount: 0, duplicatesRemoved: 0 };
    }

    const rawLines = input.split(/\r?\n/);
    const seen = new Set<string>();
    const uniqueLines: string[] = [];

    for (const raw of rawLines) {
      const candidate = trimLines ? raw.trim() : raw;
      if (removeEmpty && candidate === '') {
        continue;
      }
      const key = caseSensitive ? candidate : candidate.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        uniqueLines.push(candidate);
      }
    }

    if (sortOutput) {
      uniqueLines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: caseSensitive ? 'variant' : 'base' }));
    }

    return {
      output: uniqueLines.join('\n'),
      totalLines: rawLines.length,
      uniqueCount: uniqueLines.length,
      duplicatesRemoved: Math.max(0, rawLines.length - uniqueLines.length),
    };
  }, [input, caseSensitive, trimLines, removeEmpty, sortOutput]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.caseSensitive}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trimLines}
              onChange={(e) => setTrimLines(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.trimWhitespace}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeEmpty}
              onChange={(e) => setRemoveEmpty(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.removeEmptyLines}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sortOutput}
              onChange={(e) => setSortOutput(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.sortAlphabetically}</span>
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
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="dedupe-input" className="text-sm font-semibold text-slate-900">
              {s.originalLines}
            </label>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              {result.totalLines} {s.lines}
            </span>
          </div>
          <textarea
            id="dedupe-input"
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="dedupe-output" className="text-sm font-semibold text-slate-900">
              {s.uniqueLines}
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                {result.uniqueCount} {s.unique} · {result.duplicatesRemoved} {s.removed}
              </span>
              <CopyButton text={result.output} label={t.common.copy} copiedLabel={t.common.copied} />
            </div>
          </div>
          <textarea
            id="dedupe-output"
            rows={10}
            readOnly
            value={result.output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
