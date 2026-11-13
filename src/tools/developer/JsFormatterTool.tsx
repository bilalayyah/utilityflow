import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    minifyTab: 'Minify JS',
    beautifyTab: 'Beautify JS',
    indentLabel: 'Indent:',
    indent2: '2 spaces',
    indent4: '4 spaces',
    inputLabel: 'JavaScript / TypeScript Input',
    bytesLabel: 'bytes',
    inputPlaceholder: 'Paste JavaScript or TypeScript snippet...',
    outputLabelMinify: 'Minified Output',
    outputLabelBeautify: 'Beautified Output',
    outputPlaceholder: 'Formatted JavaScript appears here...',
    copyCode: 'Copy code',
  },
  es: {
    minifyTab: 'Minificar JS',
    beautifyTab: 'Dar formato a JS',
    indentLabel: 'Sangría:',
    indent2: '2 espacios',
    indent4: '4 espacios',
    inputLabel: 'Entrada de JavaScript / TypeScript',
    bytesLabel: 'bytes',
    inputPlaceholder: 'Pega un fragmento de JavaScript o TypeScript...',
    outputLabelMinify: 'Salida minificada',
    outputLabelBeautify: 'Salida con formato',
    outputPlaceholder: 'El JavaScript con formato aparece aquí...',
    copyCode: 'Copiar código',
  },
  pt: {
    minifyTab: 'Minificar JS',
    beautifyTab: 'Formatar JS',
    indentLabel: 'Recuo:',
    indent2: '2 espaços',
    indent4: '4 espaços',
    inputLabel: 'Entrada de JavaScript / TypeScript',
    bytesLabel: 'bytes',
    inputPlaceholder: 'Cole um trecho de JavaScript ou TypeScript...',
    outputLabelMinify: 'Saída minificada',
    outputLabelBeautify: 'Saída formatada',
    outputPlaceholder: 'O JavaScript formatado aparece aqui...',
    copyCode: 'Copiar código',
  },
  fr: {
    minifyTab: 'Minifier le JS',
    beautifyTab: 'Formater le JS',
    indentLabel: 'Indentation :',
    indent2: '2 espaces',
    indent4: '4 espaces',
    inputLabel: 'Entrée JavaScript / TypeScript',
    bytesLabel: 'bytes',
    inputPlaceholder: 'Collez un extrait JavaScript ou TypeScript...',
    outputLabelMinify: 'Sortie minifiée',
    outputLabelBeautify: 'Sortie formatée',
    outputPlaceholder: 'Le JavaScript formaté apparaît ici...',
    copyCode: 'Copier le code',
  },
};

const SAMPLE_JS = `// Compute discounted invoice total
function calculateTotal(items, taxRate = 0.08) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  /* Include tax only when positive */
  return Number((subtotal * (1 + taxRate)).toFixed(2));
}`;

function processJavaScript(code: string, mode: 'minify' | 'beautify', indentWidth: number): string {
  if (!code.trim()) return '';

  // Tokenize preserving strings, template literals, and comments
  const tokens: Array<{ type: 'code' | 'str' | 'comment' | 'ws'; value: string }> = [];
  let i = 0;

  while (i < code.length) {
    const ch = code[i];
    const next = code[i + 1];

    if (/\s/.test(ch)) {
      let end = i + 1;
      while (end < code.length && /\s/.test(code[end])) end += 1;
      tokens.push({ type: 'ws', value: code.slice(i, end) });
      i = end;
      continue;
    }

    if (ch === '/' && next === '/') {
      let end = i + 2;
      while (end < code.length && code[end] !== '\n') end += 1;
      tokens.push({ type: 'comment', value: code.slice(i, end) });
      i = end;
      continue;
    }

    if (ch === '/' && next === '*') {
      let end = i + 2;
      while (end < code.length && !(code[end] === '*' && code[end + 1] === '/')) end += 1;
      end = Math.min(code.length, end + 2);
      tokens.push({ type: 'comment', value: code.slice(i, end) });
      i = end;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      let end = i + 1;
      while (end < code.length) {
        if (code[end] === '\\') {
          end += 2;
          continue;
        }
        if (code[end] === quote) {
          end += 1;
          break;
        }
        end += 1;
      }
      tokens.push({ type: 'str', value: code.slice(i, end) });
      i = end;
      continue;
    }

    let end = i + 1;
    while (
      end < code.length &&
      !/[\s"'`]/.test(code[end]) &&
      !(code[end] === '/' && (code[end + 1] === '/' || code[end + 1] === '*'))
    ) {
      end += 1;
    }
    tokens.push({ type: 'code', value: code.slice(i, end) });
    i = end;
  }

  if (mode === 'minify') {
    let out = '';
    for (const tok of tokens) {
      if (tok.type === 'comment') continue;
      if (tok.type === 'ws') {
        const prev = out[out.length - 1] || '';
        const hasNewline = tok.value.includes('\n');
        if (prev && /[a-zA-Z0-9_$)}\]"'`]/.test(prev) && hasNewline) {
          if (!/[;{},(\[]$/.test(prev)) out += '\n';
        } else if (prev && /[a-zA-Z0-9_$]/.test(prev)) {
          out += ' ';
        }
        continue;
      }
      if (tok.type === 'str') {
        out += tok.value;
        continue;
      }
      // Clean spaces around punctuation in code segments
      const cleaned = tok.value.replace(/\s*([{}();,:])\s*/g, '$1');
      if (
        out.endsWith(' ') &&
        /^[{}();,=+\-*/<>!&|?:\[\]]/.test(cleaned)
      ) {
        out = out.slice(0, -1);
      }
      out += cleaned;
    }
    return out.trim();
  }

  // Beautify mode
  const indentUnit = ' '.repeat(indentWidth);
  let out = '';
  let depth = 0;
  let atLineStart = true;

  const appendIndent = () => {
    if (atLineStart) {
      out += indentUnit.repeat(depth);
      atLineStart = false;
    }
  };

  for (const tok of tokens) {
    if (tok.type === 'ws') {
      if (tok.value.includes('\n') && !atLineStart) {
        out = out.trimEnd() + '\n';
        atLineStart = true;
      } else if (!atLineStart && !out.endsWith(' ')) {
        out += ' ';
      }
      continue;
    }

    if (tok.type === 'comment' || tok.type === 'str') {
      appendIndent();
      out += tok.value;
      if (tok.type === 'comment' && tok.value.startsWith('//')) {
        out += '\n';
        atLineStart = true;
      }
      continue;
    }

    for (let j = 0; j < tok.value.length; j += 1) {
      const ch = tok.value[j];
      if (ch === '{') {
        if (!atLineStart && !out.endsWith(' ')) out += ' ';
        appendIndent();
        out += '{\n';
        depth += 1;
        atLineStart = true;
      } else if (ch === '}') {
        depth = Math.max(0, depth - 1);
        if (!atLineStart) out = out.trimEnd() + '\n';
        out += indentUnit.repeat(depth) + '}';
        atLineStart = false;
      } else if (ch === ';') {
        appendIndent();
        out += ';\n';
        atLineStart = true;
      } else {
        appendIndent();
        out += ch;
      }
    }
  }

  return out.replace(/\n{3,}/g, '\n\n').trim();
}

export default function JsFormatterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'beautify' | 'minify'>('minify');
  const [indentSize, setIndentSize] = useState<2 | 4>(2);

  const output = useMemo(
    () => processJavaScript(input, mode, indentSize),
    [input, mode, indentSize]
  );

  const savedBytes = Math.max(0, input.length - output.length);
  const savedPct = input.length > 0 ? ((savedBytes / input.length) * 100).toFixed(1) : '0.0';

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode('minify')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'minify' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.minifyTab}
            </button>
            <button
              type="button"
              onClick={() => setMode('beautify')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'beautify' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.beautifyTab}
            </button>
          </div>

          {mode === 'beautify' && (
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700">
              <span>{s.indentLabel}</span>
              <select
                value={indentSize}
                onChange={(e) => setIndentSize(Number(e.target.value) as 2 | 4)}
                className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm"
              >
                <option value={2}>{s.indent2}</option>
                <option value={4}>{s.indent4}</option>
              </select>
            </label>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(SAMPLE_JS)}
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
            <label htmlFor="js-in" className="text-sm font-semibold text-slate-900">
              {s.inputLabel}
            </label>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              {input.length.toLocaleString(locale)} {s.bytesLabel}
            </span>
          </div>
          <textarea
            id="js-in"
            rows={11}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="js-out" className="text-sm font-semibold text-slate-900">
              {mode === 'minify' ? s.outputLabelMinify : s.outputLabelBeautify}
            </label>
            <div className="flex items-center gap-3">
              {mode === 'minify' && input.length > 0 && (
                <span className="text-xs font-mono text-emerald-700 tabular-nums">
                  {output.length.toLocaleString(locale)} {s.bytesLabel} (-{savedPct}%)
                </span>
              )}
              <CopyButton text={output} label={s.copyCode} copiedLabel={t.common.copied} />
            </div>
          </div>
          <textarea
            id="js-out"
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
