import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_TEXT = `Order #1042 shipped via Express Courier.
Order #1043 shipped via Standard Ground.
Contact support@old-domain.com for Order #1044 updates.`;

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function FindAndReplaceTool() {
  const [text, setText] = useState('');
  const [findQuery, setFindQuery] = useState('');
  const [replaceWith, setReplaceWith] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [useRegex, setUseRegex] = useState(false);

  const computed = useMemo(() => {
    if (!findQuery) {
      return { output: text, matchCount: 0, error: '' };
    }

    try {
      const patternBody = useRegex
        ? findQuery
        : wholeWord
        ? `\\b${escapeRegExp(findQuery)}\\b`
        : escapeRegExp(findQuery);

      const flags = caseSensitive ? 'g' : 'gi';
      const regex = new RegExp(patternBody, flags);

      let matchCount = 0;
      const matches = text.match(regex);
      if (matches) {
        matchCount = matches.length;
      }

      const output = text.replace(regex, replaceWith);
      return { output, matchCount, error: '' };
    } catch (err) {
      return {
        output: text,
        matchCount: 0,
        error: err instanceof Error ? err.message : 'Invalid regular expression.',
      };
    }
  }, [text, findQuery, replaceWith, caseSensitive, wholeWord, useRegex]);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="find-query" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Find
          </label>
          <input
            id="find-query"
            type="text"
            value={findQuery}
            onChange={(e) => setFindQuery(e.target.value)}
            placeholder={useRegex ? 'e.g. Order #(\\d+)' : 'Text to search for...'}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="replace-query" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Replace with
          </label>
          <input
            id="replace-query"
            type="text"
            value={replaceWith}
            onChange={(e) => setReplaceWith(e.target.value)}
            placeholder={useRegex ? 'e.g. Ref-$1' : 'Replacement text...'}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Case-sensitive</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={wholeWord}
              disabled={useRegex}
              onChange={(e) => setWholeWord(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 disabled:opacity-50"
            />
            <span className={useRegex ? 'text-slate-400' : ''}>Whole word only</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={useRegex}
              onChange={(e) => setUseRegex(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Use Regular Expression (RegExp)</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setText(SAMPLE_TEXT);
              setFindQuery('old-domain.com');
              setReplaceWith('utilityflow.online');
              setUseRegex(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Load sample</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setText('');
              setFindQuery('');
              setReplaceWith('');
            }}
            disabled={!text && !findQuery && !replaceWith}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {computed.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs sm:text-sm text-red-700">
          Regex error: {computed.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fr-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Source Text
          </label>
          <textarea
            id="fr-input"
            rows={9}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text to search and replace..."
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="fr-output" className="text-sm font-semibold text-slate-900">
              Updated Output
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                {computed.matchCount} {computed.matchCount === 1 ? 'match' : 'matches'} replaced
              </span>
              <CopyButton text={computed.output} label="Copy result" />
            </div>
          </div>
          <textarea
            id="fr-output"
            rows={9}
            readOnly
            value={computed.output}
            placeholder="Replaced text preview appears here..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
