import { Download } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default function XmlSitemapGeneratorTool() {
  const [urlsInput, setUrlsInput] = useState(
    'https://utilityflow.online/\nhttps://utilityflow.online/tools/\nhttps://utilityflow.online/word-counter/\nhttps://utilityflow.online/json-formatter/\nhttps://utilityflow.online/qr-code-generator/'
  );
  const [lastmod, setLastmod] = useState('2026-11-12');
  const [changefreq, setChangefreq] = useState<'none' | 'daily' | 'weekly' | 'monthly'>('weekly');
  const [priority, setPriority] = useState<'none' | '1.0' | '0.8' | '0.5'>('0.8');
  const [deduplicate, setDeduplicate] = useState(true);

  const result = useMemo(() => {
    const rawLines = urlsInput
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    const validUrls: string[] = [];
    const invalidLines: string[] = [];
    const seen = new Set<string>();

    for (const line of rawLines) {
      try {
        const parsed = new URL(line);
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
          invalidLines.push(line);
          continue;
        }
        const normalized = parsed.toString();
        if (deduplicate && seen.has(normalized)) continue;
        seen.add(normalized);
        validUrls.push(normalized);
      } catch {
        invalidLines.push(line);
      }
    }

    const urlEntries = validUrls
      .map((loc, index) => {
        const tags = [`    <loc>${escapeXml(loc)}</loc>`];
        if (lastmod.trim()) {
          tags.push(`    <lastmod>${escapeXml(lastmod.trim())}</lastmod>`);
        }
        if (changefreq !== 'none') {
          tags.push(`    <changefreq>${changefreq}</changefreq>`);
        }
        if (priority !== 'none') {
          const pri = index === 0 && loc.endsWith('/') && new URL(loc).pathname === '/' ? '1.0' : priority;
          tags.push(`    <priority>${pri}</priority>`);
        }
        return `  <url>\n${tags.join('\n')}\n  </url>`;
      })
      .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

    return {
      xml,
      validCount: validUrls.length,
      invalidLines,
    };
  }, [urlsInput, lastmod, changefreq, priority, deduplicate]);

  const downloadSitemap = () => {
    const blob = new Blob([result.xml], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="sm-lastmod" className="block text-xs font-semibold text-slate-800 mb-1.5">
            &lt;lastmod&gt; Date (Optional)
          </label>
          <input
            id="sm-lastmod"
            type="date"
            value={lastmod}
            onChange={(e) => setLastmod(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="sm-freq" className="block text-xs font-semibold text-slate-800 mb-1.5">
            &lt;changefreq&gt; Hint
          </label>
          <select
            id="sm-freq"
            value={changefreq}
            onChange={(e) => setChangefreq(e.target.value as 'none' | 'daily' | 'weekly' | 'monthly')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="none">Omit tag</option>
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
          </select>
        </div>

        <div>
          <label htmlFor="sm-pri" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Default &lt;priority&gt;
          </label>
          <select
            id="sm-pri"
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'none' | '1.0' | '0.8' | '0.5')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="none">Omit tag</option>
            <option value="1.0">1.0</option>
            <option value="0.8">0.8</option>
            <option value="0.5">0.5</option>
          </select>
        </div>

        <div className="flex items-end pb-2">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={deduplicate}
              onChange={(e) => setDeduplicate(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            Deduplicate exact URLs
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sm-urls" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Canonical URLs (One full https:// URL per line)
          </label>
          <textarea
            id="sm-urls"
            rows={10}
            value={urlsInput}
            onChange={(e) => setUrlsInput(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-xs sm:text-sm leading-relaxed"
          />
          {result.invalidLines.length > 0 && (
            <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
              Skipped {result.invalidLines.length} invalid URL line(s):{' '}
              <code className="font-mono">{result.invalidLines.slice(0, 3).join(', ')}</code>
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className="text-sm font-semibold text-slate-900 tabular-nums">
              Generated sitemap.xml ({result.validCount} URLs)
            </span>
            <div className="flex items-center gap-2">
              <CopyButton text={result.xml} label="Copy XML" />
              <button
                type="button"
                disabled={result.validCount === 0}
                onClick={downloadSitemap}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download .xml
              </button>
            </div>
          </div>
          <textarea
            aria-label="Generated XML sitemap"
            rows={10}
            readOnly
            value={result.xml}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 font-mono text-xs leading-relaxed text-slate-900"
          />
        </div>
      </div>
    </div>
  );
}
