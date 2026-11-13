import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

type CaseStyle = 'camel' | 'lowercase' | 'preserve';
type OutputStyle = 'inline' | 'newline' | 'spaced-dots';

function toHashtagToken(raw: string, caseStyle: CaseStyle): string | null {
  const cleaned = raw.replace(/^#+/, '').replace(/[^\p{L}\p{N}_\s-]/gu, ' ').trim();
  if (!cleaned) return null;

  const words = cleaned.split(/[\s_-]+/).filter(Boolean);
  if (words.length === 0) return null;

  if (caseStyle === 'camel') {
    const joined = words
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('');
    return `#${joined}`;
  }
  if (caseStyle === 'lowercase') {
    return `#${words.join('').toLowerCase()}`;
  }
  return `#${words.join('')}`;
}

export default function HashtagFormatterTool() {
  const [rawInput, setRawInput] = useState(
    'content marketing, #socialMediaTools, productivity hacks, content marketing, #BrowserTools, web-dev'
  );
  const [caseStyle, setCaseStyle] = useState<CaseStyle>('camel');
  const [outputStyle, setOutputStyle] = useState<OutputStyle>('inline');
  const [deduplicate, setDeduplicate] = useState(true);

  const result = useMemo(() => {
    const rawItems = rawInput
      .split(/[\n,;]+|(?=\s#)/g)
      .map((s) => s.trim())
      .filter(Boolean);

    const tags: string[] = [];
    const seen = new Set<string>();
    let duplicatesRemoved = 0;

    for (const item of rawItems) {
      const formatted = toHashtagToken(item, caseStyle);
      if (!formatted) continue;
      const key = formatted.toLowerCase();
      if (deduplicate && seen.has(key)) {
        duplicatesRemoved += 1;
        continue;
      }
      seen.add(key);
      tags.push(formatted);
    }

    let outputText = '';
    if (outputStyle === 'inline') {
      outputText = tags.join(' ');
    } else if (outputStyle === 'newline') {
      outputText = tags.join('\n');
    } else {
      outputText = tags.length > 0 ? `.\n.\n.\n${tags.join(' ')}` : '';
    }

    return {
      tags,
      duplicatesRemoved,
      outputText,
      charCount: outputText.length,
    };
  }, [rawInput, caseStyle, outputStyle, deduplicate]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="ht-case" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Formatting &amp; Accessibility Case
          </label>
          <select
            id="ht-case"
            value={caseStyle}
            onChange={(e) => setCaseStyle(e.target.value as CaseStyle)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="camel">PascalCase (#CamelCase — Screen-reader friendly)</option>
            <option value="lowercase">all lowercase (#lowercase)</option>
            <option value="preserve">Preserve Original Case</option>
          </select>
        </div>

        <div>
          <label htmlFor="ht-out" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Output Layout
          </label>
          <select
            id="ht-out"
            value={outputStyle}
            onChange={(e) => setOutputStyle(e.target.value as OutputStyle)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="inline">Single Line (space separated)</option>
            <option value="newline">One Hashtag Per Line</option>
            <option value="spaced-dots">Caption Fold Separator (.\n.\n.)</option>
          </select>
        </div>

        <div className="flex items-end pb-2">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={deduplicate}
              onChange={(e) => setDeduplicate(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            Remove duplicate hashtags
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ht-raw" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Keywords or Messy Hashtags (comma, space, or line separated)
          </label>
          <textarea
            id="ht-raw"
            rows={7}
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label htmlFor="ht-result" className="text-sm font-semibold text-slate-900">
              Clean Hashtag Group
            </label>
            <CopyButton text={result.outputText} label="Copy Hashtags" />
          </div>
          <textarea
            id="ht-result"
            rows={7}
            readOnly
            value={result.outputText}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 font-mono text-sm text-slate-900"
          />
        </div>
      </div>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm tabular-nums">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">Clean Hashtags</dt>
          <dd className={`mt-1 text-xl font-bold font-mono ${result.tags.length > 30 ? 'text-red-700' : 'text-slate-900'}`}>
            {result.tags.length}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">Duplicates Removed</dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">{result.duplicatesRemoved}</dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">Instagram Max (30)</dt>
          <dd className={`mt-1 text-sm font-semibold ${result.tags.length <= 30 ? 'text-emerald-700' : 'text-red-700'}`}>
            {result.tags.length <= 30 ? 'Within IG 30 cap' : 'Exceeds 30-tag limit'}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">Output Characters</dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">{result.charCount}</dd>
        </div>
      </dl>
    </div>
  );
}
