import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'by', 'for', 'from', 'in', 'into', 'of', 'on', 'or', 'the', 'to', 'with',
]);

const SAMPLE_TITLES = `10 Best Ways to Format JSON Online!
Café & Crème: Guide for 2026
How to Build a Fast Static Site on Cloudflare Pages`;

function slugifyLine(
  line: string,
  separator: '-' | '_',
  lowercase: boolean,
  removeStopWords: boolean
): string {
  const normalized = line
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9\s_-]+/g, ' ')
    .trim();

  let parts = normalized.split(/[\s_-]+/).filter(Boolean);
  if (removeStopWords && parts.length > 1) {
    const filtered = parts.filter((word) => !STOP_WORDS.has(word.toLowerCase()));
    if (filtered.length > 0) parts = filtered;
  }

  const joined = parts.join(separator);
  return lowercase ? joined.toLowerCase() : joined;
}

export default function TextToSlugTool() {
  const [input, setInput] = useState('');
  const [separator, setSeparator] = useState<'-' | '_'>('-');
  const [lowercase, setLowercase] = useState(true);
  const [removeStopWords, setRemoveStopWords] = useState(false);

  const output = useMemo(() => {
    if (!input.trim()) return '';
    return input
      .split(/\r?\n/)
      .map((line) => slugifyLine(line, separator, lowercase, removeStopWords))
      .filter(Boolean)
      .join('\n');
  }, [input, separator, lowercase, removeStopWords]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setSeparator('-')}
              className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                separator === '-' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Hyphen (-)
            </button>
            <button
              type="button"
              onClick={() => setSeparator('_')}
              className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                separator === '_' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Underscore (_)
            </button>
          </div>

          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Force lowercase</span>
          </label>

          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeStopWords}
              onChange={(e) => setRemoveStopWords(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Strip common stop words</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(SAMPLE_TITLES)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Load sample</span>
          </button>
          <button
            type="button"
            onClick={() => setInput('')}
            disabled={!input}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="slug-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Titles or Phrases (one per line for batch mode)
          </label>
          <textarea
            id="slug-input"
            rows={7}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a blog title, product name, or list of headings..."
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="slug-output" className="text-sm font-semibold text-slate-900">
              Generated URL Slugs
            </label>
            <CopyButton text={output} label="Copy slugs" />
          </div>
          <textarea
            id="slug-output"
            rows={7}
            readOnly
            value={output}
            placeholder="clean-url-slugs-appear-here"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-indigo-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
