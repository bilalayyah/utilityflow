import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { PASTEL_PALETTES } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    sampleText:
      'Write clear, concise copy that fits platform character limits without awkward truncation in search results or social feeds.',
    withSpaces: 'With Spaces',
    withoutSpaces: 'Without Spaces',
    words: 'Words',
    letters: 'Letters',
    digits: 'Digits',
    utf8Bytes: 'UTF-8 Bytes',
    copyText: 'Copy text',
    textToMeasure: 'Text to measure character length',
    placeholder:
      'Type or paste text to inspect exact character counts, byte size, and platform limits...',
    whitespaceChars: 'Whitespace characters',
    lines: 'Lines',
    platformLimitsTitle: 'Platform & SEO Character Limits',
    over: 'over',
    left: 'left',
    platformLimits: [
      { name: 'SEO Meta Title', note: 'Recommended Google SERP title length' },
      { name: 'SEO Meta Description', note: 'Standard desktop snippet threshold' },
      { name: 'SMS Segment', note: 'Single GSM-7 SMS message' },
      { name: 'X / Twitter Post', note: 'Standard post length' },
      { name: 'Instagram Caption Preview', note: 'Visible before "More" truncation' },
      { name: 'LinkedIn Post', note: 'Maximum standard feed update' },
    ],
  };

interface PlatformLimit {
  name: string;
  limit: number;
  note: string;
}

const PLATFORM_LIMIT_NUMBERS = [60, 160, 160, 280, 125, 3000];

export default function CharacterCounterTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('character-counter', STRINGS_EN);
  const [text, setText] = useState('');

  const platformLimits: PlatformLimit[] = s.platformLimits.map((item, i) => ({
    name: item.name,
    limit: PLATFORM_LIMIT_NUMBERS[i],
    note: item.note,
  }));

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
        <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[0].card} px-3.5 py-3`}>
          <dt className="text-xs text-slate-500">{s.withSpaces}</dt>
          <dd className={`mt-1 text-2xl font-bold ${PASTEL_PALETTES[0].link} tabular-nums`}>
            {metrics.withSpaces.toLocaleString(locale)}
          </dd>
        </div>
        <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[1].card} px-3.5 py-3`}>
          <dt className="text-xs text-slate-500">{s.withoutSpaces}</dt>
          <dd className={`mt-1 text-2xl font-bold ${PASTEL_PALETTES[1].link} tabular-nums`}>
            {metrics.withoutSpaces.toLocaleString(locale)}
          </dd>
        </div>
        <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[2].card} px-3.5 py-3`}>
          <dt className="text-xs text-slate-500">{s.words}</dt>
          <dd className={`mt-1 text-2xl font-bold ${PASTEL_PALETTES[2].link} tabular-nums`}>
            {metrics.words.toLocaleString(locale)}
          </dd>
        </div>
        <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[3].card} px-3.5 py-3`}>
          <dt className="text-xs text-slate-500">{s.letters}</dt>
          <dd className={`mt-1 text-2xl font-bold ${PASTEL_PALETTES[3].link} tabular-nums`}>
            {metrics.letters.toLocaleString(locale)}
          </dd>
        </div>
        <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[4].card} px-3.5 py-3`}>
          <dt className="text-xs text-slate-500">{s.digits}</dt>
          <dd className={`mt-1 text-2xl font-bold ${PASTEL_PALETTES[4].link} tabular-nums`}>
            {metrics.digits.toLocaleString(locale)}
          </dd>
        </div>
        <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[5].card} px-3.5 py-3`}>
          <dt className="text-xs text-slate-500">{s.utf8Bytes}</dt>
          <dd className={`mt-1 text-2xl font-bold ${PASTEL_PALETTES[5].link} tabular-nums`}>
            {metrics.utf8Bytes.toLocaleString(locale)}
          </dd>
        </div>
      </dl>

      <div className="flex flex-wrap items-center justify-between gap-3">
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
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>

        <CopyButton text={text} label={s.copyText} copiedLabel={t.common.copied} />
      </div>

      <div>
        <label htmlFor="character-counter-input" className="sr-only">
          {s.textToMeasure}
        </label>
        <textarea
          id="character-counter-input"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
        <p className="mt-2 text-xs text-slate-500 tabular-nums">
          {s.whitespaceChars}: {metrics.spacesOnly.toLocaleString(locale)} · {s.lines}:{' '}
          {metrics.lines.toLocaleString(locale)}
        </p>
      </div>

      {/* Platform Limit Progress Bars */}
      <div className="pt-2">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">
          {s.platformLimitsTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {platformLimits.map((item, index) => {
            const palette = PASTEL_PALETTES[index % PASTEL_PALETTES.length];
            const count = metrics.withSpaces;
            const remaining = item.limit - count;
            const pct = Math.min(100, Math.round((count / item.limit) * 100));
            const isOver = count > item.limit;

            return (
              <div
                key={item.name}
                className={`rounded-lg border border-slate-200 ${palette.card} p-3.5`}
              >
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="font-semibold text-slate-900">{item.name}</span>
                  <span
                    className={`font-mono text-xs tabular-nums font-medium ${
                      isOver ? 'text-red-600' : 'text-slate-700'
                    }`}
                  >
                    {count} / {item.limit} ({isOver ? `${Math.abs(remaining)} ${s.over}` : `${remaining} ${s.left}`})
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
