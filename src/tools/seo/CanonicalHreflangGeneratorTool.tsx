import { Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

type Mode = 'hreflang' | 'redirects';
type RedirectTarget = 'cloudflare' | 'htaccess' | 'nginx';

interface HreflangRow {
  id: number;
  lang: string;
  url: string;
}

export default function CanonicalHreflangGeneratorTool() {
  const [mode, setMode] = useState<Mode>('hreflang');
  const [canonicalUrl, setCanonicalUrl] = useState('https://example.com/en-us/pricing/');
  const [rows, setRows] = useState<HreflangRow[]>([
    { id: 1, lang: 'en-US', url: 'https://example.com/en-us/pricing/' },
    { id: 2, lang: 'en-GB', url: 'https://example.com/en-gb/pricing/' },
    { id: 3, lang: 'es', url: 'https://example.com/es/precios/' },
    { id: 4, lang: 'x-default', url: 'https://example.com/en-us/pricing/' },
  ]);

  // Redirect rules
  const [redirectFormat, setRedirectFormat] = useState<RedirectTarget>('cloudflare');
  const [redirectPairsInput, setRedirectPairsInput] = useState(
    '/old-blog-post, /blog/new-post/\n/pricing-v1, /pricing/\n/docs/intro, https://docs.example.com/'
  );

  const hreflangOutput = useMemo(() => {
    const htmlLines: string[] = [];
    if (canonicalUrl.trim()) {
      htmlLines.push(`<link rel="canonical" href="${canonicalUrl.trim()}" />`);
    }
    const validRows = rows.filter((r) => r.lang.trim() && r.url.trim());
    for (const r of validRows) {
      htmlLines.push(`<link rel="alternate" hreflang="${r.lang.trim()}" href="${r.url.trim()}" />`);
    }

    const xmlLines = validRows.map(
      (r) =>
        `  <xhtml:link rel="alternate" hreflang="${r.lang.trim()}" href="${r.url.trim()}" />`
    );

    return {
      html: htmlLines.join('\n'),
      xml: xmlLines.join('\n'),
    };
  }, [canonicalUrl, rows]);

  const redirectOutput = useMemo(() => {
    const lines = redirectPairsInput
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    const parsed: { from: string; to: string }[] = [];
    const invalid: string[] = [];

    for (const line of lines) {
      const parts = line.split(/[\t,]+|\s+->\s+|\s{2,}/).map((p) => p.trim()).filter(Boolean);
      if (parts.length < 2) {
        invalid.push(line);
        continue;
      }
      const from = parts[0].startsWith('/') ? parts[0] : `/${parts[0]}`;
      const to = parts[1];
      parsed.push({ from, to });
    }

    let formatted = '';
    if (redirectFormat === 'cloudflare') {
      formatted = parsed.map((p) => `${p.from} ${p.to} 301`).join('\n');
    } else if (redirectFormat === 'htaccess') {
      formatted = parsed
        .map((p) => `Redirect 301 ${p.from} ${p.to}`)
        .join('\n');
    } else {
      formatted = parsed
        .map((p) => `location = ${p.from} { return 301 ${p.to}; }`)
        .join('\n');
    }

    return { formatted, count: parsed.length, invalid };
  }, [redirectPairsInput, redirectFormat]);

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('hreflang')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'hreflang' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          Canonical &amp; Hreflang Tags
        </button>
        <button
          type="button"
          onClick={() => setMode('redirects')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'redirects' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          301 Redirect Rule Generator
        </button>
      </div>

      {mode === 'hreflang' ? (
        <div className="space-y-5">
          <div>
            <label htmlFor="ch-canon" className="block text-sm font-semibold text-slate-900 mb-1.5">
              Self-Referencing Canonical URL
            </label>
            <input
              id="ch-canon"
              type="url"
              value={canonicalUrl}
              onChange={(e) => setCanonicalUrl(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
            />
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">Language &amp; Region Alternates</span>
              <button
                type="button"
                onClick={() =>
                  setRows([
                    ...rows,
                    { id: rows.reduce((m, r) => Math.max(m, r.id), 0) + 1, lang: 'fr', url: '' },
                  ])
                }
                className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Locale
              </button>
            </div>

            {rows.map((r) => (
              <div key={r.id} className="grid grid-cols-12 gap-2 items-center">
                <input
                  type="text"
                  aria-label="Language code"
                  value={r.lang}
                  onChange={(e) =>
                    setRows(rows.map((row) => (row.id === r.id ? { ...row, lang: e.target.value } : row)))
                  }
                  placeholder="en-US or x-default"
                  className="col-span-4 sm:col-span-3 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs sm:text-sm"
                />
                <input
                  type="url"
                  aria-label="Alternate URL"
                  value={r.url}
                  onChange={(e) =>
                    setRows(rows.map((row) => (row.id === r.id ? { ...row, url: e.target.value } : row)))
                  }
                  placeholder="https://example.com/..."
                  className="col-span-7 sm:col-span-8 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs sm:text-sm"
                />
                <button
                  type="button"
                  disabled={rows.length <= 1}
                  onClick={() => setRows(rows.filter((row) => row.id !== r.id))}
                  aria-label="Remove locale row"
                  className="col-span-1 flex justify-center rounded-lg border border-slate-300 bg-white p-2 text-red-600 disabled:opacity-40 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-700">HTML &lt;head&gt; Link Tags</span>
                <CopyButton text={hreflangOutput.html} label="Copy HTML" />
              </div>
              <pre className="rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs text-slate-900 overflow-x-auto">
                {hreflangOutput.html}
              </pre>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-700">XML Sitemap &lt;xhtml:link&gt; Snippet</span>
                <CopyButton text={hreflangOutput.xml} label="Copy XML" />
              </div>
              <pre className="rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs text-slate-900 overflow-x-auto">
                {hreflangOutput.xml}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-lg bg-slate-100 p-1">
              {(
                [
                  ['cloudflare', 'Cloudflare Pages (_redirects)'],
                  ['htaccess', 'Apache (.htaccess)'],
                  ['nginx', 'Nginx (server block)'],
                ] as [RedirectTarget, string][]
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setRedirectFormat(id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                    redirectFormat === id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <CopyButton text={redirectOutput.formatted} label={`Copy ${redirectOutput.count} Rules`} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="red-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
                Source → Destination Pairs (comma, tab, or &ldquo; -&gt; &rdquo; separated)
              </label>
              <textarea
                id="red-in"
                rows={7}
                value={redirectPairsInput}
                onChange={(e) => setRedirectPairsInput(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-xs sm:text-sm"
              />
              {redirectOutput.invalid.length > 0 && (
                <p className="mt-1.5 text-xs text-amber-700">
                  Skipped {redirectOutput.invalid.length} line(s) missing destination target.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="red-out" className="block text-sm font-semibold text-slate-900 mb-1.5">
                Generated 301 Redirect Config
              </label>
              <textarea
                id="red-out"
                rows={7}
                readOnly
                value={redirectOutput.formatted}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 font-mono text-xs sm:text-sm text-slate-900"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
