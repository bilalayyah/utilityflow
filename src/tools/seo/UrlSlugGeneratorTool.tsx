import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SEO_STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'how',
  'in', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'this', 'to', 'with',
]);

function makeSeoSlug(
  raw: string,
  options: { removeStopWords: boolean; separator: '-' | '_'; maxLength: number }
): string {
  const normalized = raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim();

  if (!normalized) return '';

  let tokens = normalized.split(/[\s_-]+/).filter(Boolean);
  if (options.removeStopWords && tokens.length > 2) {
    const filtered = tokens.filter((t) => !SEO_STOP_WORDS.has(t));
    if (filtered.length > 0) tokens = filtered;
  }

  let slug = tokens.join(options.separator);
  if (options.maxLength > 0 && slug.length > options.maxLength) {
    const sliced = slug.slice(0, options.maxLength);
    const lastSep = sliced.lastIndexOf(options.separator);
    slug = lastSep > 8 ? sliced.slice(0, lastSep) : sliced;
  }
  return slug;
}

export default function UrlSlugGeneratorTool() {
  const [domainBase, setDomainBase] = useState('https://utilityflow.online');
  const [titlesInput, setTitlesInput] = useState(
    'How to Build a Clean URL Slug for Technical SEO!\n10 Best Café & Productivity Tools in 2026\nXML Sitemap & Robots.txt Complete Checklist'
  );
  const [removeStopWords, setRemoveStopWords] = useState(true);
  const [separator, setSeparator] = useState<'-' | '_'>('-');
  const [maxLength, setMaxLength] = useState(60);
  const [trailingSlash, setTrailingSlash] = useState(true);

  const results = useMemo(() => {
    const cleanBase = domainBase.trim().replace(/\/+$/, '');
    const lines = titlesInput.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

    return lines.map((line) => {
      const slug = makeSeoSlug(line, { removeStopWords, separator, maxLength });
      const suffix = trailingSlash ? '/' : '';
      const fullUrl = cleanBase ? `${cleanBase}/${slug}${suffix}` : `/${slug}${suffix}`;
      return { original: line, slug, fullUrl };
    });
  }, [domainBase, titlesInput, removeStopWords, separator, maxLength, trailingSlash]);

  const allSlugs = results.map((r) => r.slug).filter(Boolean).join('\n');
  const allUrls = results.map((r) => r.fullUrl).filter(Boolean).join('\n');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="usg-domain" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Base Domain / Subfolder (for full URL preview)
          </label>
          <input
            id="usg-domain"
            type="text"
            value={domainBase}
            onChange={(e) => setDomainBase(e.target.value)}
            placeholder="https://example.com/blog"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="usg-sep" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Word Separator
          </label>
          <select
            id="usg-sep"
            value={separator}
            onChange={(e) => setSeparator(e.target.value as '-' | '_')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="-">Hyphen (-) — Google Recommended</option>
            <option value="_">Underscore (_)</option>
          </select>
        </div>

        <div>
          <label htmlFor="usg-len" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Max Slug Length ({maxLength} chars)
          </label>
          <input
            id="usg-len"
            type="number"
            min={15}
            max={120}
            value={maxLength}
            onChange={(e) => setMaxLength(Number(e.target.value) || 60)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={removeStopWords}
            onChange={(e) => setRemoveStopWords(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          Strip optional English stop words (a, the, and, of, in, to)
        </label>

        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={trailingSlash}
            onChange={(e) => setTrailingSlash(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          Include trailing slash (/)
        </label>
      </div>

      <div>
        <label htmlFor="usg-titles" className="block text-sm font-semibold text-slate-900 mb-1.5">
          Page Headlines / Titles (One per line for batch generation)
        </label>
        <textarea
          id="usg-titles"
          rows={4}
          value={titlesInput}
          onChange={(e) => setTitlesInput(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
        />
      </div>

      {results.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-600">
              Generated SEO Slugs ({results.length})
            </span>
            <div className="flex items-center gap-2">
              <CopyButton text={allSlugs} label="Copy All Slugs" />
              <CopyButton text={allUrls} label="Copy All Full URLs" />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">Original Title</th>
                  <th className="py-2.5 px-4 font-semibold">SEO Slug &amp; Full URL</th>
                  <th className="py-2.5 px-4 font-semibold text-right">Copy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {results.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 px-4 text-slate-700 max-w-xs truncate">{row.original}</td>
                    <td className="py-2.5 px-4">
                      <div className="font-mono font-semibold text-indigo-700">{row.slug || '—'}</div>
                      <div className="font-mono text-xs text-slate-500 truncate max-w-md">
                        {row.fullUrl}
                      </div>
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <CopyButton text={row.slug} label="Copy" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
