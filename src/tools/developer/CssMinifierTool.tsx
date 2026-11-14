import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    minifyTab: 'Minify CSS',
    beautifyTab: 'Beautify CSS',
    inputLabel: 'Input CSS',
    bytesLabel: 'bytes',
    inputPlaceholder: 'Paste CSS rules or stylesheets here...',
    outputLabelMinify: 'Minified CSS',
    outputLabelBeautify: 'Beautified CSS',
    outputPlaceholder: 'Processed CSS appears here...',
    copyCss: 'Copy CSS',
  };

const palette = pastelForKey('css-minifier');

const SAMPLE_CSS = `/* Primary card surface */
.utility-card {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;
}

@media (min-width: 768px) {
  .utility-card {
    padding: 24px 32px;
  }
}`;

function minifyCss(css: string): string {
  let result = '';
  let i = 0;
  let inString: string | null = null;

  while (i < css.length) {
    const ch = css[i];
    const next = css[i + 1];

    if (inString) {
      result += ch;
      if (ch === '\\' && next) {
        result += next;
        i += 2;
        continue;
      }
      if (ch === inString) inString = null;
      i += 1;
      continue;
    }

    if (ch === '"' || ch === "'") {
      inString = ch;
      result += ch;
      i += 1;
      continue;
    }

    if (ch === '/' && next === '*') {
      i += 2;
      while (i < css.length && !(css[i] === '*' && css[i + 1] === '/')) i += 1;
      i += 2;
      continue;
    }

    if (/\s/.test(ch)) {
      while (i < css.length && /\s/.test(css[i])) i += 1;
      const prev = result[result.length - 1] || '';
      const after = css[i] || '';
      if (
        prev &&
        after &&
        !/[{}:;,>~+()]/.test(prev) &&
        !/[{}:;,>~+()]/.test(after)
      ) {
        result += ' ';
      }
      continue;
    }

    result += ch;
    i += 1;
  }

  return result.replace(/;}/g, '}').trim();
}

function beautifyCss(css: string): string {
  const min = minifyCss(css);
  if (!min) return '';

  let out = '';
  let depth = 0;
  let inString: string | null = null;

  for (let i = 0; i < min.length; i += 1) {
    const ch = min[i];
    const next = min[i + 1];

    if (inString) {
      out += ch;
      if (ch === '\\' && next) {
        out += next;
        i += 1;
        continue;
      }
      if (ch === inString) inString = null;
      continue;
    }

    if (ch === '"' || ch === "'") {
      inString = ch;
      out += ch;
      continue;
    }

    if (ch === '{') {
      depth += 1;
      out = out.trimEnd() + ' {\n' + '  '.repeat(depth);
    } else if (ch === '}') {
      depth = Math.max(0, depth - 1);
      out = out.trimEnd() + '\n' + '  '.repeat(depth) + '}\n' + (depth === 0 ? '\n' : '  '.repeat(depth));
    } else if (ch === ';') {
      out += ';\n' + '  '.repeat(depth);
    } else if (ch === ':') {
      out += ': ';
    } else {
      out += ch;
    }
  }

  return out.replace(/\n{3,}/g, '\n\n').trim();
}

export default function CssMinifierTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('css-minifier', STRINGS_EN);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'minify' | 'beautify'>('minify');

  const output = useMemo(() => {
    if (!input.trim()) return '';
    return mode === 'minify' ? minifyCss(input) : beautifyCss(input);
  }, [input, mode]);

  const savedBytes = Math.max(0, input.length - output.length);
  const savedPct = input.length > 0 ? ((savedBytes / input.length) * 100).toFixed(1) : '0.0';

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('minify')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              mode === 'minify' ? `${palette.soft} shadow-xs` : 'text-slate-600'
            }`}
          >
            {s.minifyTab}
          </button>
          <button
            type="button"
            onClick={() => setMode('beautify')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              mode === 'beautify' ? `${palette.soft} shadow-xs` : 'text-slate-600'
            }`}
          >
            {s.beautifyTab}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(SAMPLE_CSS)}
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
            <label htmlFor="css-in" className="text-sm font-semibold text-slate-900">
              {s.inputLabel}
            </label>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              {input.length.toLocaleString(locale)} {s.bytesLabel}
            </span>
          </div>
          <textarea
            id="css-in"
            rows={11}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="css-out" className="text-sm font-semibold text-slate-900">
              {mode === 'minify' ? s.outputLabelMinify : s.outputLabelBeautify}
            </label>
            <div className="flex items-center gap-3">
              {mode === 'minify' && input.length > 0 && (
                <span className="text-xs font-mono text-emerald-700 tabular-nums">
                  {output.length.toLocaleString(locale)} {s.bytesLabel} (-{savedPct}%)
                </span>
              )}
              <CopyButton text={output} label={s.copyCss} copiedLabel={t.common.copied} />
            </div>
          </div>
          <textarea
            id="css-out"
            rows={11}
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
