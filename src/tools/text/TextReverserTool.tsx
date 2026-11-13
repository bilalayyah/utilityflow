import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    sampleText: `First line of text
Second line of text
Third line of text`,
    originalText: 'Original Text',
    reversedOutput: 'Reversed Output',
    inputPlaceholder: 'Enter text or lines to reverse...',
    outputPlaceholder: 'Reversed text appears here...',
    modes: [
      { id: 'characters', label: 'Reverse Characters' },
      { id: 'words', label: 'Reverse Word Order' },
      { id: 'each-word', label: 'Reverse Each Word' },
      { id: 'lines', label: 'Reverse Line Order' },
    ],
  };

type ReverseMode = 'characters' | 'words' | 'each-word' | 'lines';

export default function TextReverserTool() {
  const { t } = useLocale();
  const s = useComponentStrings('text-reverser', STRINGS_EN);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<ReverseMode>('characters');

  const output = useMemo(() => {
    if (!input) return '';

    switch (mode) {
      case 'characters':
        return Array.from(input).reverse().join('');
      case 'words':
        return input
          .split(/\r?\n/)
          .map((line) => line.trim().split(/\s+/).reverse().join(' '))
          .join('\n');
      case 'each-word':
        return input.replace(/\S+/g, (word) => Array.from(word).reverse().join(''));
      case 'lines':
        return input.split(/\r?\n/).reverse().join('\n');
    }
  }, [input, mode]);

  const modes: Array<{ id: ReverseMode; label: string }> = s.modes as Array<{
    id: ReverseMode;
    label: string;
  }>;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                mode === m.id
                  ? 'bg-indigo-600 text-white'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(s.sampleText)}
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
          <label htmlFor="reverse-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.originalText}
          </label>
          <textarea
            id="reverse-input"
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="reverse-output" className="text-sm font-semibold text-slate-900">
              {s.reversedOutput}
            </label>
            <CopyButton text={output} label={t.common.copy} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="reverse-output"
            rows={8}
            readOnly
            value={output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
