import { Download, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    sampleText: `Technical SEO audits check crawlability, internal linking, and page speed. Fast pages improve user engagement and page speed signals across mobile search. Internal linking connects related guides and strengthens technical SEO structure.`,
    ngramLabels: { 1: '1-Word', 2: '2-Word Phrases', 3: '3-Word Phrases' },
    excludeStopWords: 'Exclude common stop words',
    minLength: 'Min length:',
    textForAnalysis: 'Text for frequency analysis',
    placeholder:
      'Paste article copy, product descriptions, or notes to count repeated terms and keyword density...',
    totalWords: 'Total words:',
    uniqueTerms: 'Unique terms:',
    exportCsv: 'Export CSV',
    copyCsv: 'Copy CSV',
    rank: '#',
    termPhrase: 'Term / Phrase',
    count: 'Count',
    density: 'Density',
    emptyState: 'Enter text above to inspect word counts and keyword density percentages.',
  };

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he',
  'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'were',
  'will', 'with', 'this', 'they', 'their', 'or', 'we', 'you', 'your', 'our',
]);

export default function WordFrequencyCounterTool() {
  const { t } = useLocale();
  const s = useComponentStrings('word-frequency-counter', STRINGS_EN);
  const [text, setText] = useState('');
  const [ngramSize, setNgramSize] = useState<1 | 2 | 3>(1);
  const [ignoreStopWords, setIgnoreStopWords] = useState(true);
  const [minWordLength, setMinWordLength] = useState(2);

  const analysis = useMemo(() => {
    const tokens = (text.toLowerCase().match(/[a-z0-9']+/g) || []).map((t) =>
      t.replace(/^'+|'+$/g, '')
    );
    const cleanTokens = tokens.filter((t) => {
      if (!t || t.length < minWordLength) return false;
      if (ngramSize === 1 && ignoreStopWords && STOP_WORDS.has(t)) return false;
      return true;
    });

    const totalWords = tokens.length;
    const freq = new Map<string, number>();

    if (ngramSize === 1) {
      for (const word of cleanTokens) {
        freq.set(word, (freq.get(word) || 0) + 1);
      }
    } else {
      const sequence = tokens.filter((t) => t.length >= 1);
      for (let i = 0; i <= sequence.length - ngramSize; i += 1) {
        const slice = sequence.slice(i, i + ngramSize);
        if (ignoreStopWords && slice.every((w) => STOP_WORDS.has(w))) continue;
        const phrase = slice.join(' ');
        freq.set(phrase, (freq.get(phrase) || 0) + 1);
      }
    }

    const totalGrams = Array.from(freq.values()).reduce((sum, n) => sum + n, 0);
    const rows = Array.from(freq.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 50)
      .map(([term, count]) => ({
        term,
        count,
        density: totalWords > 0 ? ((count * ngramSize) / totalWords) * 100 : 0,
      }));

    return {
      totalWords,
      uniqueTerms: freq.size,
      totalGrams,
      rows,
    };
  }, [text, ngramSize, ignoreStopWords, minWordLength]);

  const csvContent = useMemo(() => {
    if (analysis.rows.length === 0) return '';
    const header = 'Term,Count,Density (%)';
    const lines = analysis.rows.map(
      (r) => `"${r.term.replace(/"/g, '""')}",${r.count},${r.density.toFixed(2)}`
    );
    return [header, ...lines].join('\n');
  }, [analysis.rows]);

  const handleDownloadCsv = () => {
    if (!csvContent) return;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `word-frequency-${ngramSize}gram.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            {([1, 2, 3] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setNgramSize(size)}
                className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  ngramSize === size
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {s.ngramLabels[size]}
              </button>
            ))}
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={ignoreStopWords}
              onChange={(e) => setIgnoreStopWords(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.excludeStopWords}</span>
          </label>

          {ngramSize === 1 && (
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <span>{s.minLength}</span>
              <input
                type="number"
                min={1}
                max={12}
                value={minWordLength}
                onChange={(e) => setMinWordLength(Math.max(1, Number(e.target.value) || 1))}
                className="w-16 rounded-md border border-slate-300 px-2 py-1 text-sm font-mono tabular-nums"
              />
            </label>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setText(s.sampleText)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => setText('')}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="freq-input" className="sr-only">
          {s.textForAnalysis}
        </label>
        <textarea
          id="freq-input"
          rows={7}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 px-4 py-3 border-b border-slate-200">
          <div className="text-xs sm:text-sm text-slate-600 tabular-nums">
            {s.totalWords} <strong className="text-slate-900">{analysis.totalWords}</strong> · {s.uniqueTerms}{' '}
            <strong className="text-slate-900">{analysis.uniqueTerms}</strong>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadCsv}
              disabled={analysis.rows.length === 0}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.exportCsv}</span>
            </button>
            <CopyButton text={csvContent} label={s.copyCsv} copiedLabel={t.common.copied} disabled={analysis.rows.length === 0} />
          </div>
        </div>

        {analysis.rows.length > 0 ? (
          <div className="overflow-x-auto max-h-80 overflow-y-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white border-b border-slate-200 text-xs text-slate-500 sticky top-0">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">{s.rank}</th>
                  <th className="py-2.5 px-4 font-semibold">{s.termPhrase}</th>
                  <th className="py-2.5 px-4 font-semibold text-right">{s.count}</th>
                  <th className="py-2.5 px-4 font-semibold text-right">{s.density}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {analysis.rows.map((row, idx) => (
                  <tr key={row.term} className="hover:bg-slate-50/80">
                    <td className="py-2 px-4 font-mono text-xs text-slate-400 tabular-nums">
                      {idx + 1}
                    </td>
                    <td className="py-2 px-4 font-mono text-slate-900">{row.term}</td>
                    <td className="py-2 px-4 font-mono text-right text-slate-800 tabular-nums">
                      {row.count}
                    </td>
                    <td className="py-2 px-4 font-mono text-right text-slate-600 tabular-nums">
                      {row.density.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-sm text-slate-500 bg-white">
            {s.emptyState}
          </div>
        )}
      </div>
    </div>
  );
}
