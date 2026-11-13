import { Download } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

function escAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default function MetaTagGeneratorTool() {
  const [title, setTitle] = useState('UtilityFlow – Fast Browser-Based Online Utility Tools');
  const [description, setDescription] = useState(
    'Explore 85 fast, privacy-first browser tools for text editing, developer encoding, finance calculators, PDF workflows, and SEO.'
  );
  const [canonicalUrl, setCanonicalUrl] = useState('https://utilityflow.online/');
  const [siteName, setSiteName] = useState('UtilityFlow');
  const [ogType, setOgType] = useState<'website' | 'article' | 'product'>('website');
  const [ogImage, setOgImage] = useState('https://utilityflow.online/og-preview.png');
  const [twitterCard, setTwitterCard] = useState<'summary_large_image' | 'summary'>('summary_large_image');
  const [robotsIndex, setRobotsIndex] = useState<'index' | 'noindex'>('index');
  const [robotsFollow, setRobotsFollow] = useState<'follow' | 'nofollow'>('follow');
  const [includeViewport, setIncludeViewport] = useState(true);

  const generatedHtml = useMemo(() => {
    const lines: string[] = [];
    if (includeViewport) {
      lines.push('<meta charset="UTF-8" />');
      lines.push('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    }
    if (title.trim()) {
      lines.push(`<title>${escAttr(title.trim())}</title>`);
    }
    if (description.trim()) {
      lines.push(`<meta name="description" content="${escAttr(description.trim())}" />`);
    }
    lines.push(`<meta name="robots" content="${robotsIndex}, ${robotsFollow}" />`);
    if (canonicalUrl.trim()) {
      lines.push(`<link rel="canonical" href="${escAttr(canonicalUrl.trim())}" />`);
    }

    lines.push('');
    lines.push('<!-- Open Graph / Social Share Tags -->');
    lines.push(`<meta property="og:type" content="${ogType}" />`);
    if (siteName.trim()) {
      lines.push(`<meta property="og:site_name" content="${escAttr(siteName.trim())}" />`);
    }
    if (title.trim()) {
      lines.push(`<meta property="og:title" content="${escAttr(title.trim())}" />`);
    }
    if (description.trim()) {
      lines.push(`<meta property="og:description" content="${escAttr(description.trim())}" />`);
    }
    if (canonicalUrl.trim()) {
      lines.push(`<meta property="og:url" content="${escAttr(canonicalUrl.trim())}" />`);
    }
    if (ogImage.trim()) {
      lines.push(`<meta property="og:image" content="${escAttr(ogImage.trim())}" />`);
    }

    lines.push('');
    lines.push('<!-- Twitter / X Card Tags -->');
    lines.push(`<meta name="twitter:card" content="${twitterCard}" />`);
    if (title.trim()) {
      lines.push(`<meta name="twitter:title" content="${escAttr(title.trim())}" />`);
    }
    if (description.trim()) {
      lines.push(`<meta name="twitter:description" content="${escAttr(description.trim())}" />`);
    }
    if (ogImage.trim()) {
      lines.push(`<meta name="twitter:image" content="${escAttr(ogImage.trim())}" />`);
    }

    return lines.join('\n');
  }, [
    title,
    description,
    canonicalUrl,
    siteName,
    ogType,
    ogImage,
    twitterCard,
    robotsIndex,
    robotsFollow,
    includeViewport,
  ]);

  const downloadHtml = () => {
    const blob = new Blob([generatedHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meta-tags.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  let previewHost = 'example.com';
  try {
    if (canonicalUrl.trim()) {
      previewHost = new URL(canonicalUrl.trim()).hostname;
    }
  } catch {
    previewHost = 'example.com';
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <label htmlFor="meta-title-in" className="text-sm font-semibold text-slate-900">
              Page Title (&lt;title&gt; / og:title)
            </label>
            <span
              className={`font-mono tabular-nums ${
                title.length >= 30 && title.length <= 60 ? 'text-emerald-700 font-semibold' : 'text-amber-700'
              }`}
            >
              {title.length} chars (ideal 30–60)
            </span>
          </div>
          <input
            id="meta-title-in"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <label htmlFor="meta-desc-in" className="text-sm font-semibold text-slate-900">
              Meta Description
            </label>
            <span
              className={`font-mono tabular-nums ${
                description.length >= 120 && description.length <= 160
                  ? 'text-emerald-700 font-semibold'
                  : 'text-amber-700'
              }`}
            >
              {description.length} chars (ideal 120–160)
            </span>
          </div>
          <textarea
            id="meta-desc-in"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div>
          <label htmlFor="meta-canon-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Canonical URL
          </label>
          <input
            id="meta-canon-in"
            type="url"
            value={canonicalUrl}
            onChange={(e) => setCanonicalUrl(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="meta-img-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Open Graph Image URL (1200×630 recommended)
          </label>
          <input
            id="meta-img-in"
            type="url"
            value={ogImage}
            onChange={(e) => setOgImage(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="meta-sitename" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Site Name (og:site_name)
          </label>
          <input
            id="meta-sitename"
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="meta-ogtype" className="block text-sm font-semibold text-slate-900 mb-1.5">
              og:type
            </label>
            <select
              id="meta-ogtype"
              value={ogType}
              onChange={(e) => setOgType(e.target.value as 'website' | 'article' | 'product')}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option value="website">website</option>
              <option value="article">article</option>
              <option value="product">product</option>
            </select>
          </div>
          <div>
            <label htmlFor="meta-tw" className="block text-sm font-semibold text-slate-900 mb-1.5">
              Twitter Card
            </label>
            <select
              id="meta-tw"
              value={twitterCard}
              onChange={(e) => setTwitterCard(e.target.value as 'summary_large_image' | 'summary')}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option value="summary_large_image">summary_large_image</option>
              <option value="summary">summary</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:col-span-2">
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="meta-idx" className="font-semibold text-slate-800">
              Robots:
            </label>
            <select
              id="meta-idx"
              value={robotsIndex}
              onChange={(e) => setRobotsIndex(e.target.value as 'index' | 'noindex')}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs"
            >
              <option value="index">index</option>
              <option value="noindex">noindex</option>
            </select>
            <select
              aria-label="Robots follow directive"
              value={robotsFollow}
              onChange={(e) => setRobotsFollow(e.target.value as 'follow' | 'nofollow')}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs"
            >
              <option value="follow">follow</option>
              <option value="nofollow">nofollow</option>
            </select>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={includeViewport}
              onChange={(e) => setIncludeViewport(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            Include charset &amp; viewport tags
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-700">Generated HTML &lt;head&gt; Tags</span>
            <div className="flex items-center gap-2">
              <CopyButton text={generatedHtml} label="Copy HTML" />
              <button
                type="button"
                onClick={downloadHtml}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download .html
              </button>
            </div>
          </div>
          <pre className="rounded-lg border border-slate-200 bg-white p-3.5 font-mono text-xs text-slate-900 overflow-x-auto leading-relaxed">
            {generatedHtml}
          </pre>
        </div>

        <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
          <div className="text-xs font-semibold text-slate-500">Social Share Card Preview</div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <div className="aspect-[1.91/1] bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 flex items-center justify-center p-4 text-center">
              <div className="text-white">
                <div className="text-[11px] font-mono text-indigo-300">{previewHost}</div>
                <div className="mt-1 text-sm font-bold line-clamp-2">{title || 'Social Share Preview'}</div>
              </div>
            </div>
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="text-[11px] text-slate-500 uppercase tracking-wide">{previewHost}</div>
              <div className="mt-0.5 text-sm font-semibold text-slate-900 line-clamp-1">
                {title || 'Untitled Page'}
              </div>
              <div className="mt-0.5 text-xs text-slate-600 line-clamp-2">
                {description || 'Meta description snippet appears here.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
