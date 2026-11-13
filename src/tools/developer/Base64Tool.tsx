import { ArrowLeftRight, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_PLAIN = 'UtilityFlow: UTF-8 safe Base64 encoding ✓';

function encodeUtf8Base64(text: string, urlSafe: boolean, omitPadding: boolean): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  let base64 = btoa(binary);
  if (urlSafe) {
    base64 = base64.replace(/\+/g, '-').replace(/\//g, '_');
  }
  if (omitPadding) {
    base64 = base64.replace(/=+$/, '');
  }
  return base64;
}

function decodeUtf8Base64(raw: string): string {
  let normalized = raw.trim().replace(/-/g, '+').replace(/_/g, '/');
  const mod = normalized.length % 4;
  if (mod === 2) normalized += '==';
  else if (mod === 3) normalized += '=';
  else if (mod === 1) throw new Error('Invalid Base64 string length.');

  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}

export default function Base64Tool() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('');
  const [urlSafe, setUrlSafe] = useState(false);
  const [omitPadding, setOmitPadding] = useState(false);

  const result = useMemo(() => {
    if (!input) return { output: '', error: '' };
    try {
      if (mode === 'encode') {
        return { output: encodeUtf8Base64(input, urlSafe, omitPadding), error: '' };
      }
      return { output: decodeUtf8Base64(input), error: '' };
    } catch (err) {
      return {
        output: '',
        error:
          err instanceof Error
            ? err.message
            : 'Invalid Base64 input or malformed UTF-8 byte sequence.',
      };
    }
  }, [input, mode, urlSafe, omitPadding]);

  const handleSwap = () => {
    if (!result.output) return;
    setMode((m) => (m === 'encode' ? 'decode' : 'encode'));
    setInput(result.output);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode('encode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'encode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Encode to Base64
            </button>
            <button
              type="button"
              onClick={() => setMode('decode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'decode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Decode Base64
            </button>
          </div>

          {mode === 'encode' && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={urlSafe}
                  onChange={(e) => setUrlSafe(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                />
                <span>URL-safe (- and _)</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={omitPadding}
                  onChange={(e) => setOmitPadding(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                />
                <span>Omit trailing = padding</span>
              </label>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSwap}
            disabled={!result.output}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Swap</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('encode');
              setInput(SAMPLE_PLAIN);
            }}
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

      {result.error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs sm:text-sm text-red-800"
        >
          Decode error: {result.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="b64-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {mode === 'encode' ? 'Plain Text (UTF-8)' : 'Base64 String'}
          </label>
          <textarea
            id="b64-input"
            rows={9}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === 'encode'
                ? 'Enter text or JSON to encode...'
                : 'Paste standard or URL-safe Base64 string...'
            }
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="b64-output" className="text-sm font-semibold text-slate-900">
              {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
            </label>
            <CopyButton text={result.output} label="Copy output" />
          </div>
          <textarea
            id="b64-output"
            rows={9}
            readOnly
            value={result.output}
            placeholder="Converted output appears here..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
