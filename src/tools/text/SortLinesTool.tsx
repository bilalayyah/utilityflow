import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    caseSensitive: 'Case-sensitive',
    ignoreBlankLines: 'Ignore blank lines',
    removeDuplicates: 'Remove duplicates',
    inputLines: 'Input Lines',
    sortedLines: 'Sorted Lines',
    copySorted: 'Copy sorted',
    inputPlaceholder: 'Enter one item per line...',
    outputPlaceholder: 'Sorted output appears here...',
    sortOptions: [
      { id: 'alpha-asc', label: 'A → Z' },
      { id: 'alpha-desc', label: 'Z → A' },
      { id: 'natural', label: 'Natural (1, 2, 10)' },
      { id: 'length-asc', label: 'Shortest First' },
      { id: 'length-desc', label: 'Longest First' },
      { id: 'reverse-order', label: 'Reverse Order' },
      { id: 'shuffle', label: 'Shuffle' },
    ],
  };

type SortMode =
  | 'alpha-asc'
  | 'alpha-desc'
  | 'natural'
  | 'length-asc'
  | 'length-desc'
  | 'reverse-order'
  | 'shuffle';

const SAMPLE_LINES = `Item 10
Item 2
Banana
apple
Cherry
Item 1
Apricot`;

export default function SortLinesTool() {
  const { t } = useLocale();
  const s = useComponentStrings('sort-lines', STRINGS_EN);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<SortMode>('alpha-asc');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [deduplicate, setDeduplicate] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const output = useMemo(() => {
    if (!input) return '';
    let lines = input.split(/\r?\n/);

    if (removeEmpty) {
      lines = lines.filter((l) => l.trim().length > 0);
    }

    if (deduplicate) {
      const seen = new Set<string>();
      lines = lines.filter((line) => {
        const key = caseSensitive ? line : line.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    const collator = new Intl.Collator(undefined, {
      numeric: mode === 'natural',
      sensitivity: caseSensitive ? 'variant' : 'base',
    });

    const sorted = [...lines];
    switch (mode) {
      case 'alpha-asc':
      case 'natural':
        sorted.sort((a, b) => collator.compare(a, b));
        break;
      case 'alpha-desc':
        sorted.sort((a, b) => collator.compare(b, a));
        break;
      case 'length-asc':
        sorted.sort((a, b) => a.length - b.length || collator.compare(a, b));
        break;
      case 'length-desc':
        sorted.sort((a, b) => b.length - a.length || collator.compare(a, b));
        break;
      case 'reverse-order':
        sorted.reverse();
        break;
      case 'shuffle': {
        // Deterministic when shuffleSeed changes via button click
        let seed = shuffleSeed + sorted.length;
        for (let i = sorted.length - 1; i > 0; i -= 1) {
          seed = (seed * 9301 + 49297) % 233280;
          const j = Math.floor((seed / 233280) * (i + 1));
          [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
        }
        break;
      }
    }

    return sorted.join('\n');
  }, [input, mode, caseSensitive, removeEmpty, deduplicate, shuffleSeed]);

  const sortOptions: Array<{ id: SortMode; label: string }> = s.sortOptions as Array<{
    id: SortMode;
    label: string;
  }>;

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
              checked={removeEmpty}
              onChange={(e) => setRemoveEmpty(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.ignoreBlankLines}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={deduplicate}
              onChange={(e) => setDeduplicate(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.removeDuplicates}</span>
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

      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              setMode(option.id);
              if (option.id === 'shuffle') {
                setShuffleSeed((s) => s + 1);
              }
            }}
            className={`rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              mode === option.id
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sort-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.inputLines}
          </label>
          <textarea
            id="sort-input"
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="sort-output" className="text-sm font-semibold text-slate-900">
              {s.sortedLines}
            </label>
            <CopyButton text={output} label={s.copySorted} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="sort-output"
            rows={10}
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
