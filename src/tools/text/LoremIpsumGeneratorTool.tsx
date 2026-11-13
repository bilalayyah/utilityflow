import { RefreshCw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    amount: 'Amount',
    unit: 'Unit',
    unitLabels: { paragraphs: 'paragraphs', sentences: 'sentences', words: 'words' },
    startClassic: 'Start with “Lorem ipsum”',
    wrapHtml: 'Wrap in <p> tags',
    words: 'words',
    characters: 'characters',
    regenerate: 'Regenerate',
    copyPlaceholder: 'Copy placeholder text',
    generatedText: 'Generated placeholder text',
  },
  es: {
    amount: 'Cantidad',
    unit: 'Unidad',
    unitLabels: { paragraphs: 'párrafos', sentences: 'oraciones', words: 'palabras' },
    startClassic: 'Empezar con «Lorem ipsum»',
    wrapHtml: 'Envolver en etiquetas <p>',
    words: 'palabras',
    characters: 'caracteres',
    regenerate: 'Regenerar',
    copyPlaceholder: 'Copiar texto de relleno',
    generatedText: 'Texto de relleno generado',
  },
};

type UnitType = 'paragraphs' | 'sentences' | 'words';

const CLASSIC_OPENING =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const SENTENCE_POOL = [
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Curabitur pretium tincidunt lacus, nulla gravida orci a odio, nullam varius turpis et commodo pharetra.',
  'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.',
  'Aliquam erat volutpat, nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.',
  'Phasellus ultrices nulla quis nibh, quisque a lectus, donec consectetuer ligula vulputate sem tristique cursus.',
  'Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi, pellentesque fermentum dolor.',
  'Maecenas malesuada, praesent congue erat at massa, sed cursus turpis vitae tortor.',
  'Donec posuere vulputate arcu, phasellus accumsan cursus velit, vestibulum ante ipsum primis in faucibus.',
  'In hac habitasse platea dictumst, curabitur at lacus ac velit ornare lobortis.',
  'Vivamus elementum semper nisi, aenean vulputate eleifend tellus, aenean leo ligula, porttitor eu.',
];

const WORD_POOL = CLASSIC_OPENING.concat(' ', SENTENCE_POOL.join(' '))
  .toLowerCase()
  .replace(/[.,]/g, '')
  .split(/\s+/)
  .filter(Boolean);

export default function LoremIpsumGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [unit, setUnit] = useState<UnitType>('paragraphs');
  const [count, setCount] = useState(3);
  const [startClassic, setStartClassic] = useState(true);
  const [wrapHtml, setWrapHtml] = useState(false);
  const [seed, setSeed] = useState(0);

  const safeCount = Math.max(1, Math.min(unit === 'words' ? 500 : 30, count));

  const output = useMemo(() => {
    const pickSentence = (index: number) =>
      SENTENCE_POOL[(index + seed) % SENTENCE_POOL.length];

    if (unit === 'words') {
      const words: string[] = [];
      const baseWords = CLASSIC_OPENING.replace(/[.,]/g, '').split(/\s+/);
      for (let i = 0; i < safeCount; i += 1) {
        if (startClassic && i < baseWords.length) {
          words.push(baseWords[i]);
        } else {
          words.push(WORD_POOL[(i + seed * 7) % WORD_POOL.length]);
        }
      }
      const joined = words.join(' ');
      const formatted = joined.charAt(0).toUpperCase() + joined.slice(1) + '.';
      return wrapHtml ? `<p>${formatted}</p>` : formatted;
    }

    if (unit === 'sentences') {
      const sentences: string[] = [];
      for (let i = 0; i < safeCount; i += 1) {
        sentences.push(i === 0 && startClassic ? CLASSIC_OPENING : pickSentence(i));
      }
      const joined = sentences.join(' ');
      return wrapHtml ? `<p>${joined}</p>` : joined;
    }

    // Paragraphs (4 sentences per paragraph)
    const paragraphs: string[] = [];
    for (let p = 0; p < safeCount; p += 1) {
      const sentences: string[] = [];
      for (let s = 0; s < 4; s += 1) {
        const idx = p * 4 + s;
        if (idx === 0 && startClassic) {
          sentences.push(CLASSIC_OPENING);
        } else {
          sentences.push(pickSentence(idx));
        }
      }
      const paragraphText = sentences.join(' ');
      paragraphs.push(wrapHtml ? `<p>${paragraphText}</p>` : paragraphText);
    }

    return paragraphs.join('\n\n');
  }, [unit, safeCount, startClassic, wrapHtml, seed]);

  const wordCount = useMemo(
    () => (output.trim() ? output.replace(/<\/?p>/g, '').trim().split(/\s+/).length : 0),
    [output]
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label htmlFor="lorem-count" className="block text-xs font-semibold text-slate-700 mb-1">
              {s.amount}
            </label>
            <input
              id="lorem-count"
              type="number"
              min={1}
              max={unit === 'words' ? 500 : 30}
              value={count}
              onChange={(e) => setCount(Math.max(1, Number(e.target.value) || 1))}
              className="w-24 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-mono tabular-nums text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-700 mb-1">{s.unit}</span>
            <div className="inline-flex rounded-lg bg-slate-100 p-1">
              {(['paragraphs', 'sentences', 'words'] as const).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => {
                    setUnit(u);
                    if (u === 'words' && count < 15) setCount(50);
                    if (u !== 'words' && count > 30) setCount(3);
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium capitalize transition-colors cursor-pointer ${
                    unit === u
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {s.unitLabels[u]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={startClassic}
              onChange={(e) => setStartClassic(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.startClassic}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={wrapHtml}
              onChange={(e) => setWrapHtml(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.wrapHtml}</span>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <span className="text-xs font-mono text-slate-500 tabular-nums">
          {wordCount.toLocaleString(locale)} {s.words} · {output.length.toLocaleString(locale)} {s.characters}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSeed((s) => s + 1)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{s.regenerate}</span>
          </button>
          <CopyButton text={output} label={s.copyPlaceholder} copiedLabel={t.common.copied} />
        </div>
      </div>

      <div>
        <label htmlFor="lorem-output" className="sr-only">
          {s.generatedText}
        </label>
        <textarea
          id="lorem-output"
          rows={10}
          readOnly
          value={output}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm sm:text-base leading-relaxed text-slate-800 focus:outline-none"
        />
      </div>
    </div>
  );
}
