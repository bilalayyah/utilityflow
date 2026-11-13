import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';

const SAMPLE_HTML = `<!doctype html>
<html lang="en">
<head>
  <title>Technical SEO Audit Guide – Fast Checklist | UtilityFlow</title>
  <meta name="description" content="Audit page titles, meta descriptions, heading hierarchy, canonical URLs, image alt text, and structured data cleanly inside your browser." />
  <link rel="canonical" href="https://utilityflow.online/on-page-seo-checker/" />
  <meta property="og:title" content="Technical SEO Audit Guide" />
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage"}</script>
</head>
<body>
  <main>
    <h1>On-Page SEO Audit Checklist</h1>
    <h2>Core Metadata Verification</h2>
    <img src="/diagram.png" alt="On-page HTML DOM structure diagram" />
    <h2>Internal &amp; Outbound Links</h2>
    <p>Visit our <a href="/tools/">tools directory</a> or <a href="https://developers.google.com/search" rel="noopener">Search Central docs</a>.</p>
  </main>
</body>
</html>`;

export default function OnPageSeoCheckerTool() {
  const [htmlInput, setHtmlInput] = useState(SAMPLE_HTML);

  const audit = useMemo(() => {
    const trimmed = htmlInput.trim();
    if (!trimmed) {
      return null;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(trimmed, 'text/html');

    const title = doc.querySelector('title')?.textContent?.trim() ?? '';
    const metaDesc =
      doc.querySelector('meta[name="description" i]')?.getAttribute('content')?.trim() ?? '';
    const canonical =
      doc.querySelector('link[rel="canonical" i]')?.getAttribute('href')?.trim() ?? '';
    const robots =
      doc.querySelector('meta[name="robots" i]')?.getAttribute('content')?.trim() ?? '';
    const ogTitle =
      doc.querySelector('meta[property="og:title" i]')?.getAttribute('content')?.trim() ?? '';
    const ldJsonScripts = doc.querySelectorAll('script[type="application/ld+json"]').length;

    const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4')).map((el) => ({
      tag: el.tagName.toUpperCase(),
      text: (el.textContent ?? '').trim().slice(0, 120),
    }));
    const h1Count = headings.filter((h) => h.tag === 'H1').length;

    const imgs = Array.from(doc.querySelectorAll('img'));
    const imgsMissingAlt = imgs.filter((img) => !(img.getAttribute('alt') ?? '').trim()).length;

    const links = Array.from(doc.querySelectorAll('a[href]'));
    const externalLinks = links.filter((a) => /^https?:\/\//i.test(a.getAttribute('href') ?? '')).length;
    const internalLinks = links.length - externalLinks;

    const checks = [
      {
        label: 'Title Tag (<title>)',
        pass: title.length >= 30 && title.length <= 65,
        detail: title
          ? `${title.length} chars: "${title}"`
          : 'Missing <title> tag in <head>.',
      },
      {
        label: 'Meta Description',
        pass: metaDesc.length >= 110 && metaDesc.length <= 165,
        detail: metaDesc
          ? `${metaDesc.length} chars (target 120–160).`
          : 'Missing <meta name="description">.',
      },
      {
        label: 'Exactly One <h1> Heading',
        pass: h1Count === 1,
        detail: `Found ${h1Count} <h1> element(s).`,
      },
      {
        label: 'Canonical URL (<link rel="canonical">)',
        pass: Boolean(canonical),
        detail: canonical || 'No canonical tag declared.',
      },
      {
        label: 'Image Alt Attributes',
        pass: imgs.length === 0 || imgsMissingAlt === 0,
        detail:
          imgs.length === 0
            ? 'No <img> elements in markup.'
            : `${imgs.length - imgsMissingAlt}/${imgs.length} images include descriptive alt text.`,
      },
      {
        label: 'Open Graph & JSON-LD Structured Data',
        pass: Boolean(ogTitle) && ldJsonScripts > 0,
        detail: `og:title ${ogTitle ? 'present' : 'missing'} · ${ldJsonScripts} JSON-LD block(s).`,
      },
    ];

    const passedCount = checks.filter((c) => c.pass).length;

    return {
      checks,
      passedCount,
      headings,
      robots,
      linksTotal: links.length,
      internalLinks,
      externalLinks,
    };
  }, [htmlInput]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <p>
          <strong>Client-Side HTML Source Audit:</strong> Browsers block cross-origin scraping (CORS) of arbitrary third-party websites and do not have access to private search analytics. Paste your page&apos;s HTML source below (View Page Source) to audit DOM tags locally.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label htmlFor="seo-html-in" className="text-sm font-semibold text-slate-900">
              Pasted HTML Source
            </label>
            <button
              type="button"
              onClick={() => setHtmlInput(SAMPLE_HTML)}
              className="text-xs font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer"
            >
              Load sample HTML
            </button>
          </div>
          <textarea
            id="seo-html-in"
            rows={14}
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder="Paste raw <html>...</html> source here..."
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-xs leading-relaxed"
          />
        </div>

        <div className="lg:col-span-6 space-y-4">
          {audit ? (
            <>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-indigo-700">DOM Audit Score</div>
                  <div className="text-2xl font-bold text-slate-900 tabular-nums">
                    {audit.passedCount} / {audit.checks.length} checks passed
                  </div>
                </div>
                <div className="text-right text-xs text-slate-600 tabular-nums">
                  <div>Links: {audit.linksTotal} ({audit.internalLinks} int / {audit.externalLinks} ext)</div>
                  <div>Robots meta: {audit.robots || 'Default (index, follow)'}</div>
                </div>
              </div>

              <ul className="space-y-2">
                {audit.checks.map((c) => (
                  <li
                    key={c.label}
                    className={`rounded-lg border p-3 flex items-start gap-2.5 ${
                      c.pass ? 'border-emerald-200 bg-emerald-50/40' : 'border-amber-200 bg-amber-50/50'
                    }`}
                  >
                    {c.pass ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    )}
                    <div className="min-w-0 text-xs">
                      <div className="font-semibold text-slate-900">{c.label}</div>
                      <div className="text-slate-600 break-words">{c.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {audit.headings.length > 0 && (
                <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-xs font-semibold text-slate-700 mb-2">
                    Heading Outline (H1–H4)
                  </div>
                  <ul className="space-y-1 text-xs font-mono text-slate-700">
                    {audit.headings.map((h, i) => (
                      <li key={i} className="truncate">
                        <span className="font-bold text-indigo-700">{h.tag}</span> {h.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-500 text-center">
              Paste HTML source on the left to inspect title, description, headings, canonicals, and alt tags.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
