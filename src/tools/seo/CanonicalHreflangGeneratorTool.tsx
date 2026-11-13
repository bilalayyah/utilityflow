import { Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    hreflangMode: 'Canonical & Hreflang Tags',
    redirectsMode: '301 Redirect Rule Generator',
    canonicalLabel: 'Self-Referencing Canonical URL',
    alternatesLabel: 'Language & Region Alternates',
    addLocale: 'Add Locale',
    langCodeAria: 'Language code',
    alternateUrlAria: 'Alternate URL',
    removeLocaleAria: 'Remove locale row',
    htmlTagsLabel: 'HTML <head> Link Tags',
    copyHtml: 'Copy HTML',
    xmlSnippetLabel: 'XML Sitemap <xhtml:link> Snippet',
    copyXml: 'Copy XML',
    cloudflareFormat: 'Cloudflare Pages (_redirects)',
    htaccessFormat: 'Apache (.htaccess)',
    nginxFormat: 'Nginx (server block)',
    copyRules: 'Copy {n} Rules',
    pairsLabel: 'Source → Destination Pairs (comma, tab, or “ -> ” separated)',
    generatedConfigLabel: 'Generated 301 Redirect Config',
    skippedInvalid: 'Skipped {n} line(s) missing destination target.',
  },
  es: {
    hreflangMode: 'Etiquetas canónicas y hreflang',
    redirectsMode: 'Generador de reglas de redirección 301',
    canonicalLabel: 'URL canónica autorreferencial',
    alternatesLabel: 'Versiones alternativas por idioma y región',
    addLocale: 'Agregar configuración regional',
    langCodeAria: 'Código de idioma',
    alternateUrlAria: 'URL alternativa',
    removeLocaleAria: 'Eliminar fila de configuración regional',
    htmlTagsLabel: 'Etiquetas de enlace HTML <head>',
    copyHtml: 'Copiar HTML',
    xmlSnippetLabel: 'Fragmento <xhtml:link> del sitemap XML',
    copyXml: 'Copiar XML',
    cloudflareFormat: 'Cloudflare Pages (_redirects)',
    htaccessFormat: 'Apache (.htaccess)',
    nginxFormat: 'Nginx (bloque de servidor)',
    copyRules: 'Copiar {n} reglas',
    pairsLabel: 'Pares de origen → destino (separados por coma, tabulación o “ -> ”)',
    generatedConfigLabel: 'Configuración de redirección 301 generada',
    skippedInvalid: 'Se omitieron {n} línea(s) sin destino.',
  },
  pt: {
    hreflangMode: 'Tags canônicas e hreflang',
    redirectsMode: 'Gerador de regras de redirecionamento 301',
    canonicalLabel: 'URL canônica autorreferente',
    alternatesLabel: 'Versões alternativas por idioma e região',
    addLocale: 'Adicionar localidade',
    langCodeAria: 'Código de idioma',
    alternateUrlAria: 'URL alternativa',
    removeLocaleAria: 'Remover linha de localidade',
    htmlTagsLabel: 'Tags de link HTML <head>',
    copyHtml: 'Copiar HTML',
    xmlSnippetLabel: 'Trecho <xhtml:link> do sitemap XML',
    copyXml: 'Copiar XML',
    cloudflareFormat: 'Cloudflare Pages (_redirects)',
    htaccessFormat: 'Apache (.htaccess)',
    nginxFormat: 'Nginx (bloco server)',
    copyRules: 'Copiar {n} regras',
    pairsLabel: 'Pares origem → destino (separados por vírgula, tabulação ou “ -> ”)',
    generatedConfigLabel: 'Configuração de redirecionamento 301 gerada',
    skippedInvalid: 'Ignoradas {n} linha(s) sem destino.',
  },
  fr: {
    hreflangMode: 'Balises canoniques et hreflang',
    redirectsMode: 'Générateur de règles de redirection 301',
    canonicalLabel: 'URL canonique autoréférentielle',
    alternatesLabel: 'Versions alternatives par langue et région',
    addLocale: 'Ajouter une langue',
    langCodeAria: 'Code de langue',
    alternateUrlAria: 'URL alternative',
    removeLocaleAria: 'Supprimer la ligne de langue',
    htmlTagsLabel: 'Balises de lien HTML <head>',
    copyHtml: 'Copier le HTML',
    xmlSnippetLabel: 'Extrait <xhtml:link> du sitemap XML',
    copyXml: 'Copier le XML',
    cloudflareFormat: 'Cloudflare Pages (_redirects)',
    htaccessFormat: 'Apache (.htaccess)',
    nginxFormat: 'Nginx (bloc server)',
    copyRules: 'Copier {n} règles',
    pairsLabel: 'Paires source → destination (séparées par une virgule, une tabulation ou « -> »)',
    generatedConfigLabel: 'Configuration de redirection 301 générée',
    skippedInvalid: '{n} ligne(s) sans destination ignorée(s).',
  },
};

type Mode = 'hreflang' | 'redirects';
type RedirectTarget = 'cloudflare' | 'htaccess' | 'nginx';

interface HreflangRow {
  id: number;
  lang: string;
  url: string;
}

export default function CanonicalHreflangGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
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
          {s.hreflangMode}
        </button>
        <button
          type="button"
          onClick={() => setMode('redirects')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'redirects' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          {s.redirectsMode}
        </button>
      </div>

      {mode === 'hreflang' ? (
        <div className="space-y-5">
          <div>
            <label htmlFor="ch-canon" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.canonicalLabel}
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
              <span className="text-sm font-semibold text-slate-900">{s.alternatesLabel}</span>
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
                {s.addLocale}
              </button>
            </div>

            {rows.map((r) => (
              <div key={r.id} className="grid grid-cols-12 gap-2 items-center">
                <input
                  type="text"
                  aria-label={s.langCodeAria}
                  value={r.lang}
                  onChange={(e) =>
                    setRows(rows.map((row) => (row.id === r.id ? { ...row, lang: e.target.value } : row)))
                  }
                  placeholder="en-US or x-default"
                  className="col-span-4 sm:col-span-3 rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs sm:text-sm"
                />
                <input
                  type="url"
                  aria-label={s.alternateUrlAria}
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
                  aria-label={s.removeLocaleAria}
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
                <span className="text-xs font-semibold text-slate-700">{s.htmlTagsLabel}</span>
                <CopyButton text={hreflangOutput.html} label={s.copyHtml} copiedLabel={t.common.copied} />
              </div>
              <pre className="rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs text-slate-900 overflow-x-auto">
                {hreflangOutput.html}
              </pre>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-700">{s.xmlSnippetLabel}</span>
                <CopyButton text={hreflangOutput.xml} label={s.copyXml} copiedLabel={t.common.copied} />
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
                  ['cloudflare', s.cloudflareFormat],
                  ['htaccess', s.htaccessFormat],
                  ['nginx', s.nginxFormat],
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
            <CopyButton
              text={redirectOutput.formatted}
              label={s.copyRules.replace('{n}', String(redirectOutput.count))}
              copiedLabel={t.common.copied}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="red-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.pairsLabel}
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
                  {s.skippedInvalid.replace('{n}', String(redirectOutput.invalid.length))}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="red-out" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.generatedConfigLabel}
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
