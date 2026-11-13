import { ArrowLeftRight, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_URL = 'https://utilityflow.online/tools/?q=json formatter&utm_source=docs&lang=en-US';

export default function UrlEncoderDecoderTool() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [scope, setScope] = useState<'component' | 'full-uri'>('component');
  const [input, setInput] = useState('');

  const result = useMemo(() => {
    if (!input) return { output: '', error: '' };
    try {
      if (mode === 'encode') {
        const encoded =
          scope === 'component' ? encodeURIComponent(input) : encodeURI(input);
        return { output: encoded, error: '' };
      }
      const decoded =
        scope === 'component'
          ? decodeURIComponent(input.replace(/\+/g, ' '))
          : decodeURI(input);
      return { output: decoded, error: '' };
    } catch (err) {
      return {
        output: '',
        error: err instanceof Error ? err.message : 'Malformed percent-encoding sequence.',
      };
    }
  }, [input, mode, scope]);

  const parsedUrl = useMemo(() => {
    const candidate = mode === 'decode' && result.output ? result.output : input;
    try {
      const u = new URL(candidate.trim());
      return {
        protocol: u.protocol,
        host: u.host,
        pathname: u.pathname,
        hash: u.hash || '(none)',
        params: Array.from(u.searchParams.entries()),
      };
    } catch {
      return null;
    }
  }, [input, mode, result.output]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode('encode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'encode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Encode
            </button>
            <button
              type="button"
              onClick={() => setMode('decode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'decode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Decode
            </button>
          </div>

          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setScope('component')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                scope === 'component' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              encodeURIComponent
            </button>
            <button
              type="button"
              onClick={() => setScope('full-uri')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                scope === 'full-uri' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              encodeURI (preserve ://?&)
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (!result.output) return;
              setMode((m) => (m === 'encode' ? 'decode' : 'encode'));
              setInput(result.output);
            }}
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
              setScope('full-uri');
              setInput(SAMPLE_URL);
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
          URL error: {result.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="url-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Input String or URL
          </label>
          <textarea
            id="url-input"
            rows={7}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste URL, query string, or parameter value..."
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="url-output" className="text-sm font-semibold text-slate-900">
              {mode === 'encode' ? 'Encoded Output' : 'Decoded Output'}
            </label>
            <CopyButton text={result.output} label="Copy" />
          </div>
          <textarea
            id="url-output"
            rows={7}
            readOnly
            value={result.output}
            placeholder="Encoded or decoded URL appears here..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>

      {parsedUrl && (
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">Parsed URL Breakdown</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            <div className="rounded-lg bg-white border border-slate-200 p-2.5">
              <dt className="font-sans text-slate-500 mb-0.5">Protocol</dt>
              <dd className="text-slate-900 break-all">{parsedUrl.protocol}</dd>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-2.5">
              <dt className="font-sans text-slate-500 mb-0.5">Host</dt>
              <dd className="text-slate-900 break-all">{parsedUrl.host}</dd>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-2.5">
              <dt className="font-sans text-slate-500 mb-0.5">Pathname</dt>
              <dd className="text-slate-900 break-all">{parsedUrl.pathname}</dd>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-2.5">
              <dt className="font-sans text-slate-500 mb-0.5">Hash</dt>
              <dd className="text-slate-900 break-all">{parsedUrl.hash}</dd>
            </div>
          </dl>

          {parsedUrl.params.length > 0 && (
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-xs font-mono">
                <thead className="border-b border-slate-200 bg-slate-50 font-sans text-slate-600">
                  <tr>
                    <th className="py-2 px-3 font-semibold">Query Parameter</th>
                    <th className="py-2 px-3 font-semibold">Decoded Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {parsedUrl.params.map(([key, val], idx) => (
                    <tr key={`${key}-${idx}`}>
                      <td className="py-1.5 px-3 text-indigo-700">{key}</td>
                      <td className="py-1.5 px-3 text-slate-800 break-all">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
