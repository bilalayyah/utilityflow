import { ArrowLeftRight, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    encodeTab: 'Encode Entities',
    decodeTab: 'Decode Entities',
    encodeNonAscii: 'Encode non-ASCII symbols (&#...;)',
    swap: 'Swap',
    inputLabelEncode: 'Raw HTML / Text',
    inputLabelDecode: 'HTML-Encoded String',
    inputPlaceholderEncode: '<p>Enter HTML tags or special characters...</p>',
    inputPlaceholderDecode: '&lt;p&gt;Paste encoded entities...&lt;/p&gt;',
    outputLabelEncode: 'Encoded Entities',
    outputLabelDecode: 'Decoded Text',
    outputPlaceholder: 'Converted entities appear here...',
  };

const palette = pastelForKey('html-entity-encoder');

const SAMPLE_HTML = `<div class="notice">5 < 10 & "café" — ready!</div>`;

const NAMED_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function encodeHtmlEntities(input: string, encodeAllNonAscii: boolean): string {
  return Array.from(input)
    .map((ch) => {
      if (NAMED_MAP[ch]) return NAMED_MAP[ch];
      const cp = ch.codePointAt(0) ?? 0;
      if (encodeAllNonAscii && cp > 127) {
        return `&#${cp};`;
      }
      return ch;
    })
    .join('');
}

function decodeHtmlEntities(input: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, 'text/html');
  return doc.documentElement.textContent ?? '';
}

export default function HtmlEntityEncoderTool() {
  const { t } = useLocale();
  const s = useComponentStrings('html-entity-encoder', STRINGS_EN);
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [encodeNonAscii, setEncodeNonAscii] = useState(true);
  const [input, setInput] = useState('');

  const output = useMemo(() => {
    if (!input) return '';
    return mode === 'encode'
      ? encodeHtmlEntities(input, encodeNonAscii)
      : decodeHtmlEntities(input);
  }, [input, mode, encodeNonAscii]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode('encode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'encode' ? `${palette.soft} shadow-xs` : 'text-slate-600'
              }`}
            >
              {s.encodeTab}
            </button>
            <button
              type="button"
              onClick={() => setMode('decode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'decode' ? `${palette.soft} shadow-xs` : 'text-slate-600'
              }`}
            >
              {s.decodeTab}
            </button>
          </div>

          {mode === 'encode' && (
            <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={encodeNonAscii}
                onChange={(e) => setEncodeNonAscii(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span>{s.encodeNonAscii}</span>
            </label>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (!output) return;
              setMode((m) => (m === 'encode' ? 'decode' : 'encode'));
              setInput(output);
            }}
            disabled={!output}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{s.swap}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('encode');
              setInput(SAMPLE_HTML);
            }}
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
          <label htmlFor="html-ent-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {mode === 'encode' ? s.inputLabelEncode : s.inputLabelDecode}
          </label>
          <textarea
            id="html-ent-in"
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === 'encode'
                ? s.inputPlaceholderEncode
                : s.inputPlaceholderDecode
            }
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="html-ent-out" className="text-sm font-semibold text-slate-900">
              {mode === 'encode' ? s.outputLabelEncode : s.outputLabelDecode}
            </label>
            <CopyButton text={output} label={t.common.copy} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="html-ent-out"
            rows={8}
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
