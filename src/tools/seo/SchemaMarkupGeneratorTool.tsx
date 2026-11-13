import { Download, Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

type SchemaType = 'Article' | 'FAQPage' | 'Product' | 'Organization' | 'BreadcrumbList';

interface FaqItem {
  id: number;
  q: string;
  a: string;
}

interface CrumbItem {
  id: number;
  name: string;
  url: string;
}

export default function SchemaMarkupGeneratorTool() {
  const [schemaType, setSchemaType] = useState<SchemaType>('Article');

  // Article
  const [headline, setHeadline] = useState('How to Build Fast Browser Utilities');
  const [authorName, setAuthorName] = useState('UtilityFlow Editorial');
  const [publisherName, setPublisherName] = useState('UtilityFlow');
  const [datePublished, setDatePublished] = useState('2026-11-12');
  const [articleUrl, setArticleUrl] = useState('https://utilityflow.online/tools/');
  const [articleImage, setArticleImage] = useState('https://utilityflow.online/og-preview.png');

  // FAQPage
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      id: 1,
      q: 'Does UtilityFlow run tools locally in the browser?',
      a: 'Yes. Nearly all utilities execute directly inside browser memory without sending inputs to external servers.',
    },
    {
      id: 2,
      q: 'Is structured JSON-LD helpful for SEO?',
      a: 'Yes. Valid Schema.org JSON-LD clarifies entity context for search crawlers and rich result eligibility.',
    },
  ]);

  // Product
  const [productName, setProductName] = useState('Pro Ergonomic Mechanical Keyboard');
  const [productDesc, setProductDesc] = useState('Low-profile wireless keyboard engineered for software developers.');
  const [productPrice, setProductPrice] = useState('149.00');
  const [productCurrency, setProductCurrency] = useState('USD');
  const [productAvailability, setProductAvailability] = useState('https://schema.org/InStock');

  // Organization
  const [orgName, setOrgName] = useState('UtilityFlow');
  const [orgUrl, setOrgUrl] = useState('https://utilityflow.online/');
  const [orgLogo, setOrgLogo] = useState('https://utilityflow.online/favicon.svg');

  // Breadcrumbs
  const [crumbs, setCrumbs] = useState<CrumbItem[]>([
    { id: 1, name: 'Home', url: 'https://utilityflow.online/' },
    { id: 2, name: 'SEO Tools', url: 'https://utilityflow.online/category/seo-tools/' },
    { id: 3, name: 'Schema Markup Generator', url: 'https://utilityflow.online/schema-markup-generator/' },
  ]);

  const { jsonString, scriptBlock } = useMemo(() => {
    let obj: Record<string, unknown> = {};

    if (schemaType === 'Article') {
      obj = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: headline.trim(),
        datePublished: datePublished.trim(),
        mainEntityOfPage: articleUrl.trim(),
        image: articleImage.trim() ? [articleImage.trim()] : undefined,
        author: { '@type': 'Person', name: authorName.trim() },
        publisher: { '@type': 'Organization', name: publisherName.trim() },
      };
    } else if (schemaType === 'FAQPage') {
      obj = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs
          .filter((f) => f.q.trim() && f.a.trim())
          .map((f) => ({
            '@type': 'Question',
            name: f.q.trim(),
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a.trim(),
            },
          })),
      };
    } else if (schemaType === 'Product') {
      obj = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productName.trim(),
        description: productDesc.trim(),
        offers: {
          '@type': 'Offer',
          priceCurrency: productCurrency.trim() || 'USD',
          price: productPrice.trim() || '0.00',
          availability: productAvailability,
        },
      };
    } else if (schemaType === 'Organization') {
      obj = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: orgName.trim(),
        url: orgUrl.trim(),
        logo: orgLogo.trim() || undefined,
      };
    } else {
      obj = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs
          .filter((c) => c.name.trim())
          .map((c, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: c.name.trim(),
            item: c.url.trim() || undefined,
          })),
      };
    }

    const rawJson = JSON.stringify(obj, null, 2).replace(/</g, '\\u003c');
    const wrapped = `<script type="application/ld+json">\n${rawJson}\n</script>`;
    return { jsonString: rawJson, scriptBlock: wrapped };
  }, [
    schemaType,
    headline,
    authorName,
    publisherName,
    datePublished,
    articleUrl,
    articleImage,
    faqs,
    productName,
    productDesc,
    productPrice,
    productCurrency,
    productAvailability,
    orgName,
    orgUrl,
    orgLogo,
    crumbs,
  ]);

  const downloadJsonLd = () => {
    const blob = new Blob([jsonString], { type: 'application/ld+json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${schemaType.toLowerCase()}-schema.jsonld`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
        {(['Article', 'FAQPage', 'Product', 'Organization', 'BreadcrumbList'] as SchemaType[]).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setSchemaType(type)}
            className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              schemaType === type ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 space-y-3.5">
          {schemaType === 'Article' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Headline</label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">Author Name</label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">Publisher Name</label>
                  <input
                    type="text"
                    value={publisherName}
                    onChange={(e) => setPublisherName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">Date Published</label>
                  <input
                    type="date"
                    value={datePublished}
                    onChange={(e) => setDatePublished(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">Article URL</label>
                  <input
                    type="url"
                    value={articleUrl}
                    onChange={(e) => setArticleUrl(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Featured Image URL</label>
                <input
                  type="url"
                  value={articleImage}
                  onChange={(e) => setArticleImage(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs"
                />
              </div>
            </>
          )}

          {schemaType === 'FAQPage' && (
            <div className="space-y-3">
              {faqs.map((item, idx) => (
                <div key={item.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">Question #{idx + 1}</span>
                    <button
                      type="button"
                      disabled={faqs.length <= 1}
                      onClick={() => setFaqs(faqs.filter((f) => f.id !== item.id))}
                      aria-label={`Remove question ${idx + 1}`}
                      className="text-red-600 hover:text-red-800 disabled:opacity-40 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={item.q}
                    onChange={(e) => setFaqs(faqs.map((f) => (f.id === item.id ? { ...f, q: e.target.value } : f)))}
                    placeholder="Question"
                    className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm"
                  />
                  <textarea
                    rows={2}
                    value={item.a}
                    onChange={(e) => setFaqs(faqs.map((f) => (f.id === item.id ? { ...f, a: e.target.value } : f)))}
                    placeholder="Accepted answer"
                    className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setFaqs([
                    ...faqs,
                    { id: faqs.reduce((m, f) => Math.max(m, f.id), 0) + 1, q: '', a: '' },
                  ])
                }
                className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Add FAQ Row
              </button>
            </div>
          )}

          {schemaType === 'Product' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Product Name</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={productDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">Price</label>
                  <input
                    type="text"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">Currency</label>
                  <input
                    type="text"
                    value={productCurrency}
                    onChange={(e) => setProductCurrency(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">Availability</label>
                  <select
                    value={productAvailability}
                    onChange={(e) => setProductAvailability(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-2 py-2 text-xs"
                  >
                    <option value="https://schema.org/InStock">InStock</option>
                    <option value="https://schema.org/OutOfStock">OutOfStock</option>
                    <option value="https://schema.org/PreOrder">PreOrder</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {schemaType === 'Organization' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Organization Name</label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Website URL</label>
                <input
                  type="url"
                  value={orgUrl}
                  onChange={(e) => setOrgUrl(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Logo URL</label>
                <input
                  type="url"
                  value={orgLogo}
                  onChange={(e) => setOrgLogo(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
                />
              </div>
            </>
          )}

          {schemaType === 'BreadcrumbList' && (
            <div className="space-y-2.5">
              {crumbs.map((c, idx) => (
                <div key={c.id} className="grid grid-cols-12 gap-2 items-center">
                  <input
                    type="text"
                    aria-label={`Breadcrumb ${idx + 1} label`}
                    value={c.name}
                    onChange={(e) =>
                      setCrumbs(crumbs.map((row) => (row.id === c.id ? { ...row, name: e.target.value } : row)))
                    }
                    placeholder="Label"
                    className="col-span-4 rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs"
                  />
                  <input
                    type="url"
                    aria-label={`Breadcrumb ${idx + 1} URL`}
                    value={c.url}
                    onChange={(e) =>
                      setCrumbs(crumbs.map((row) => (row.id === c.id ? { ...row, url: e.target.value } : row)))
                    }
                    placeholder="https://..."
                    className="col-span-7 rounded-lg border border-slate-300 bg-white px-2.5 py-2 font-mono text-xs"
                  />
                  <button
                    type="button"
                    disabled={crumbs.length <= 1}
                    onClick={() => setCrumbs(crumbs.filter((row) => row.id !== c.id))}
                    className="col-span-1 flex justify-center text-red-600 disabled:opacity-40 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setCrumbs([
                    ...crumbs,
                    { id: crumbs.reduce((m, c) => Math.max(m, c.id), 0) + 1, name: '', url: '' },
                  ])
                }
                className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Level
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-700">JSON-LD &lt;script&gt; Output</span>
            <div className="flex items-center gap-2">
              <CopyButton text={scriptBlock} label="Copy Script Tag" />
              <button
                type="button"
                onClick={downloadJsonLd}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                .jsonld
              </button>
            </div>
          </div>
          <pre className="rounded-lg border border-slate-200 bg-white p-3.5 font-mono text-xs text-slate-900 overflow-x-auto leading-relaxed max-h-96">
            {scriptBlock}
          </pre>
        </div>
      </div>
    </div>
  );
}
