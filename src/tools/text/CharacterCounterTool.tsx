import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_TEXT =
  'Write clear, concise copy that fits platform character limits without awkward truncation in search results or social feeds.';

interface PlatformLimit {
  name: string;
  limit: number;
  note: string;
}

const PLATFORM_LIMITS: PlatformLimit[] = [
  { name: 'SEO Meta Title', limit: 60, note: 'Recommended Google SERP title length' },
  { name: 'SEO Meta Description', limit: 160, note: 'Standard desktop snippet threshold' },
  { name: 'SMS Segment', limit: 160, note: 'Single GSM-7 SMS message' },
  { name: 'X / Twitter Post', limit: 280, note: 'Standard post length' },
  { name: 'Instagram Caption Preview', limit: 125, note: 'Visible before "More" truncation' },
  { name: 'LinkedIn Post', limit: 3000, note: 'Maximum standard feed update' },
];

export default function CharacterCounterTool() {
  const [text, setText] = useState('');

  const metrics = useMemo(() => {
    const withSpaces = text.length;
    const withoutSpaces = text.replace(/\s/g, '').length;
    const spacesOnly = withSpaces - withoutSpaces;
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const digits = (text.match(/\d/g) || []).length;
    const utf8Bytes = new TextEncoder().encode(text).length;
    const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    const lines = text ? text.split(/\r?\n/).length : 0;

    return {
      withSpaces,
      withoutSpaces,
      spacesOnly,
      letters,
      digits,
      utf8Bytes,
      words,
      lines,
    };
  }, [text]);

  return (
    <div className="space-y-6">
      <dl className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">With Spaces</dt>
          <dd className="mt-1 text-2xl font-bold text-indigo-600 tabular-nums">
            {metrics.withSpaces.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Without Spaces</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.withoutSpaces.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Words</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.words.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Letters</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.letters.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Digits</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.digits.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">UTF-8 Bytes</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.utf8Bytes.toLocaleString()}
          </dd>
        </div>
      </dl>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setText(SAMPLE_TEXT)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Load sample</span>
          </button>
          <button
            type="button"
            onClick={() => setText('')}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear</span>
          </button>
        </div>

        <CopyButton text={text} label="Copy text" />
      </div>

      <div>
        <label htmlFor="character-counter-input" className="sr-only">
          Text to measure character length
        </label>
        <textarea
          id="character-counter-input"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text to inspect exact character counts, byte size, and platform limits..."
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
        <p className="mt-2 text-xs text-slate-500 tabular-nums">
          Whitespace characters: {metrics.spacesOnly.toLocaleString()} · Lines:{' '}
          {metrics.lines.toLocaleString()}
        </p>
      </div>

      {/* Platform Limit Progress Bars */}
      <div className="pt-2">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">
          Platform &amp; SEO Character Limits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PLATFORM_LIMITS.map((item) => {
            const count = metrics.withSpaces;
            const remaining = item.limit - count;
            const pct = Math.min(100, Math.round((count / item.limit) * 100));
            const isOver = count > item.limit;

            return (
              <div
                key={item.name}
                className="rounded-lg border border-slate-200 bg-slate-50/70 p-3.5"
              >
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="font-semibold text-slate-900">{item.name}</span>
                  <span
                    className={`font-mono text-xs tabular-nums font-medium ${
                      isOver ? 'text-red-600' : 'text-slate-700'
                    }`}
                  >
                    {count} / {item.limit} ({isOver ? `${Math.abs(remaining)} over` : `${remaining} left`})
                  </span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-150 ${
                      isOver ? 'bg-red-600' : pct >= 85 ? 'bg-amber-500' : 'bg-indigo-600'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-slate-500">{item.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
