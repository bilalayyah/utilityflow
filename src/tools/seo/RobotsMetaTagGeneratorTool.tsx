import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    indexingLabel: 'Indexing Directive',
    indexOption: 'index (Allow search indexing)',
    noindexOption: 'noindex (Exclude from SERPs)',
    linkCrawlingLabel: 'Link Crawling',
    followOption: 'follow (Pass link signals)',
    nofollowOption: 'nofollow (Do not follow links)',
    largeOption: 'large (Discover eligible)',
    htmlTagLabel: 'HTML <head> Meta Tag',
    copyHtmlTag: 'Copy HTML Tag',
    httpHeaderLabel: 'HTTP Response Header (PDF / Non-HTML)',
    copyHeader: 'Copy Header',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Cloudflare _headers path pattern',
    copyBlock: 'Copy Block',
  },
  es: {
    indexingLabel: 'Directiva de indexación',
    indexOption: 'index (Permitir la indexación)',
    noindexOption: 'noindex (Excluir de los resultados de búsqueda)',
    linkCrawlingLabel: 'Rastreo de enlaces',
    followOption: 'follow (Transmitir señales de enlace)',
    nofollowOption: 'nofollow (No seguir enlaces)',
    largeOption: 'large (Elegible para Discover)',
    htmlTagLabel: 'Metaetiqueta HTML <head>',
    copyHtmlTag: 'Copiar etiqueta HTML',
    httpHeaderLabel: 'Encabezado de respuesta HTTP (PDF / no HTML)',
    copyHeader: 'Copiar encabezado',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Patrón de ruta de _headers de Cloudflare',
    copyBlock: 'Copiar bloque',
  },
  pt: {
    indexingLabel: 'Diretiva de indexação',
    indexOption: 'index (permitir indexação)',
    noindexOption: 'noindex (excluir dos resultados de pesquisa)',
    linkCrawlingLabel: 'Rastreamento de links',
    followOption: 'follow (transmitir sinais de link)',
    nofollowOption: 'nofollow (não seguir links)',
    largeOption: 'large (elegível para o Discover)',
    htmlTagLabel: 'Meta tag HTML <head>',
    copyHtmlTag: 'Copiar tag HTML',
    httpHeaderLabel: 'Cabeçalho de resposta HTTP (PDF / não HTML)',
    copyHeader: 'Copiar cabeçalho',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Padrão de caminho do _headers da Cloudflare',
    copyBlock: 'Copiar bloco',
  },
  fr: {
    indexingLabel: 'Directive d\'indexation',
    indexOption: 'index (autoriser l\'indexation)',
    noindexOption: 'noindex (exclure des résultats de recherche)',
    linkCrawlingLabel: 'Exploration des liens',
    followOption: 'follow (transmettre les signaux de lien)',
    nofollowOption: 'nofollow (ne pas suivre les liens)',
    largeOption: 'large (éligible à Discover)',
    htmlTagLabel: 'Balise meta HTML <head>',
    copyHtmlTag: 'Copier la balise HTML',
    httpHeaderLabel: 'En-tête de réponse HTTP (PDF / non HTML)',
    copyHeader: 'Copier l\'en-tête',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Modèle de chemin _headers de Cloudflare',
    copyBlock: 'Copier le bloc',
  },
  de: {
    indexingLabel: 'Indexierungsanweisung',
    indexOption: 'index (Suchindexierung erlauben)',
    noindexOption: 'noindex (aus SERPs ausschließen)',
    linkCrawlingLabel: 'Link-Crawling',
    followOption: 'follow (Linksignale weitergeben)',
    nofollowOption: 'nofollow (Links nicht folgen)',
    largeOption: 'large (Entdeckung zulässig)',
    htmlTagLabel: 'HTML-<head>-Meta-Tag',
    copyHtmlTag: 'HTML-Tag kopieren',
    httpHeaderLabel: 'HTTP-Antwortheader (PDF / Nicht-HTML)',
    copyHeader: 'Header kopieren',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Cloudflare-_headers-Pfadmuster',
    copyBlock: 'Block kopieren',
  },
  it: {
    indexingLabel: 'Direttiva di indicizzazione',
    indexOption: 'index (consenti indicizzazione)',
    noindexOption: 'noindex (escludi dai risultati di ricerca)',
    linkCrawlingLabel: 'Scansione dei link',
    followOption: 'follow (trasmetti segnali dai link)',
    nofollowOption: 'nofollow (non seguire i link)',
    largeOption: 'large (scoperta consentita)',
    htmlTagLabel: 'Meta tag HTML <head>',
    copyHtmlTag: 'Copia tag HTML',
    httpHeaderLabel: 'Intestazione di risposta HTTP (PDF / non HTML)',
    copyHeader: 'Copia intestazione',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Modello di percorso _headers di Cloudflare',
    copyBlock: 'Copia blocco',
  },
  id: {
    indexingLabel: 'Direktif Pengindeksan',
    indexOption: 'index (Izinkan pengindeksan pencarian)',
    noindexOption: 'noindex (Kecualikan dari SERP)',
    linkCrawlingLabel: 'Perayapan Tautan',
    followOption: 'follow (Teruskan sinyal tautan)',
    nofollowOption: 'nofollow (Jangan ikuti tautan)',
    largeOption: 'large (Temukan yang memenuhi syarat)',
    htmlTagLabel: 'Tag Meta HTML <head>',
    copyHtmlTag: 'Salin Tag HTML',
    httpHeaderLabel: 'Header Respons HTTP (PDF / Non-HTML)',
    copyHeader: 'Salin Header',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Pola path _headers Cloudflare',
    copyBlock: 'Salin Blok',
  },
  ru: {
    indexingLabel: 'Директива индексации',
    indexOption: 'index (разрешить индексацию)',
    noindexOption: 'noindex (исключить из выдачи)',
    linkCrawlingLabel: 'Обход ссылок',
    followOption: 'follow (передавать сигналы ссылок)',
    nofollowOption: 'nofollow (не переходить по ссылкам)',
    largeOption: 'large (обнаруживать подходящие)',
    htmlTagLabel: 'HTML-метатег в <head>',
    copyHtmlTag: 'Копировать HTML-тег',
    httpHeaderLabel: 'HTTP-заголовок ответа (PDF / не-HTML)',
    copyHeader: 'Копировать заголовок',
    cloudflareHeadersLabel: 'Cloudflare Pages _headers',
    cloudflarePathAria: 'Шаблон пути Cloudflare _headers',
    copyBlock: 'Копировать блок',
  },
};

export default function RobotsMetaTagGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [indexMode, setIndexMode] = useState<'index' | 'noindex'>('index');
  const [followMode, setFollowMode] = useState<'follow' | 'nofollow'>('follow');
  const [noarchive, setNoarchive] = useState(false);
  const [nosnippet, setNosnippet] = useState(false);
  const [noimageindex, setNoimageindex] = useState(false);
  const [maxSnippet, setMaxSnippet] = useState('-1');
  const [maxImagePreview, setMaxImagePreview] = useState<'large' | 'standard' | 'none'>('large');
  const [maxVideoPreview, setMaxVideoPreview] = useState('-1');
  const [targetPath, setTargetPath] = useState('/private/*');

  const directives = useMemo(() => {
    const tokens: string[] = [indexMode, followMode];
    if (noarchive) tokens.push('noarchive');
    if (nosnippet) tokens.push('nosnippet');
    if (noimageindex) tokens.push('noimageindex');
    if (!nosnippet && maxSnippet.trim() !== '') {
      tokens.push(`max-snippet:${Number(maxSnippet)}`);
    }
    if (!noimageindex) {
      tokens.push(`max-image-preview:${maxImagePreview}`);
    }
    if (maxVideoPreview.trim() !== '') {
      tokens.push(`max-video-preview:${Number(maxVideoPreview)}`);
    }
    return tokens.join(', ');
  }, [
    indexMode,
    followMode,
    noarchive,
    nosnippet,
    noimageindex,
    maxSnippet,
    maxImagePreview,
    maxVideoPreview,
  ]);

  const htmlTag = `<meta name="robots" content="${directives}" />`;
  const httpHeader = `X-Robots-Tag: ${directives}`;
  const cloudflareHeadersSnippet = `${targetPath.trim() || '/*'}\n  X-Robots-Tag: ${directives}`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="rm-index" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.indexingLabel}
          </label>
          <select
            id="rm-index"
            value={indexMode}
            onChange={(e) => setIndexMode(e.target.value as 'index' | 'noindex')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="index">{s.indexOption}</option>
            <option value="noindex">{s.noindexOption}</option>
          </select>
        </div>

        <div>
          <label htmlFor="rm-follow" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.linkCrawlingLabel}
          </label>
          <select
            id="rm-follow"
            value={followMode}
            onChange={(e) => setFollowMode(e.target.value as 'follow' | 'nofollow')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="follow">{s.followOption}</option>
            <option value="nofollow">{s.nofollowOption}</option>
          </select>
        </div>

        <div>
          <label htmlFor="rm-img" className="block text-xs font-semibold text-slate-800 mb-1.5">
            max-image-preview
          </label>
          <select
            id="rm-img"
            disabled={noimageindex}
            value={maxImagePreview}
            onChange={(e) => setMaxImagePreview(e.target.value as 'large' | 'standard' | 'none')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm disabled:opacity-50"
          >
            <option value="large">{s.largeOption}</option>
            <option value="standard">standard</option>
            <option value="none">none</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="rm-snip" className="block text-xs font-semibold text-slate-800 mb-1.5">
              max-snippet
            </label>
            <input
              id="rm-snip"
              type="number"
              min={-1}
              disabled={nosnippet}
              value={maxSnippet}
              onChange={(e) => setMaxSnippet(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 font-mono text-sm disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="rm-vid" className="block text-xs font-semibold text-slate-800 mb-1.5">
              max-video
            </label>
            <input
              id="rm-vid"
              type="number"
              min={-1}
              value={maxVideoPreview}
              onChange={(e) => setMaxVideoPreview(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 font-mono text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={noarchive}
            onChange={(e) => setNoarchive(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          noarchive
        </label>
        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={nosnippet}
            onChange={(e) => setNosnippet(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          nosnippet
        </label>
        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={noimageindex}
            onChange={(e) => setNoimageindex(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          noimageindex
        </label>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-indigo-800">{s.htmlTagLabel}</span>
            <CopyButton text={htmlTag} label={s.copyHtmlTag} copiedLabel={t.common.copied} />
          </div>
          <code className="block rounded-lg border border-indigo-100 bg-white px-3 py-2.5 font-mono text-xs sm:text-sm text-slate-900 break-all">
            {htmlTag}
          </code>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-700">{s.httpHeaderLabel}</span>
              <CopyButton text={httpHeader} label={s.copyHeader} copiedLabel={t.common.copied} />
            </div>
            <code className="block rounded-lg border border-slate-200 bg-white px-3 py-2.5 font-mono text-xs text-slate-900 break-all">
              {httpHeader}
            </code>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-700">{s.cloudflareHeadersLabel}</span>
                <input
                  type="text"
                  aria-label={s.cloudflarePathAria}
                  value={targetPath}
                  onChange={(e) => setTargetPath(e.target.value)}
                  className="w-28 rounded border border-slate-300 bg-white px-2 py-0.5 font-mono text-xs"
                />
              </div>
              <CopyButton text={cloudflareHeadersSnippet} label={s.copyBlock} copiedLabel={t.common.copied} />
            </div>
            <pre className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-xs text-slate-900 whitespace-pre-wrap">
              {cloudflareHeadersSnippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
