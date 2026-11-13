import { Download } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    defaultTitle: 'UtilityFlow – Fast Browser-Based Online Utility Tools',
    defaultDescription:
      'Explore 85 fast, privacy-first browser tools for text editing, developer encoding, finance calculators, PDF workflows, and SEO.',
    pageTitleLabel: 'Page Title (<title> / og:title)',
    titleChars: '{n} chars (ideal 30–60)',
    metaDescriptionLabel: 'Meta Description',
    descChars: '{n} chars (ideal 120–160)',
    canonicalUrlLabel: 'Canonical URL',
    ogImageLabel: 'Open Graph Image URL (1200×630 recommended)',
    siteNameLabel: 'Site Name (og:site_name)',
    ogTypeLabel: 'og:type',
    twitterCardLabel: 'Twitter Card',
    robotsLabel: 'Robots:',
    robotsFollowAria: 'Robots follow directive',
    includeViewportLabel: 'Include charset & viewport tags',
    generatedTagsLabel: 'Generated HTML <head> Tags',
    copyHtml: 'Copy HTML',
    downloadHtml: 'Download .html',
    socialPreviewLabel: 'Social Share Card Preview',
    socialPreviewFallback: 'Social Share Preview',
    untitledPage: 'Untitled Page',
    metaSnippetFallback: 'Meta description snippet appears here.',
  },
  es: {
    defaultTitle: 'UtilityFlow – Herramientas de utilidad rápidas en el navegador',
    defaultDescription:
      'Explora 85 herramientas rápidas y privadas en el navegador para editar texto, codificar, calcular finanzas, trabajar con PDF y SEO.',
    pageTitleLabel: 'Título de la página (<title> / og:title)',
    titleChars: '{n} caracteres (ideal: 30–60)',
    metaDescriptionLabel: 'Metadescripción',
    descChars: '{n} caracteres (ideal: 120–160)',
    canonicalUrlLabel: 'URL canónica',
    ogImageLabel: 'URL de la imagen Open Graph (se recomienda 1200×630)',
    siteNameLabel: 'Nombre del sitio (og:site_name)',
    ogTypeLabel: 'og:type',
    twitterCardLabel: 'Twitter Card',
    robotsLabel: 'Robots:',
    robotsFollowAria: 'Directiva de seguimiento de robots',
    includeViewportLabel: 'Incluir etiquetas charset y viewport',
    generatedTagsLabel: 'Etiquetas HTML <head> generadas',
    copyHtml: 'Copiar HTML',
    downloadHtml: 'Descargar .html',
    socialPreviewLabel: 'Vista previa de la tarjeta para compartir',
    socialPreviewFallback: 'Vista previa para compartir en redes',
    untitledPage: 'Página sin título',
    metaSnippetFallback: 'Aquí aparece el fragmento de la metadescripción.',
  },
  pt: {
    defaultTitle: 'UtilityFlow – Ferramentas de utilidade rápidas no navegador',
    defaultDescription: 'Explore 85 ferramentas rápidas e focadas em privacidade no navegador para editar texto, codificar, calcular finanças, trabalhar com PDF e SEO.',
    pageTitleLabel: 'Título da página (<title> / og:title)',
    titleChars: '{n} caracteres (ideal: 30–60)',
    metaDescriptionLabel: 'Meta descrição',
    descChars: '{n} caracteres (ideal: 120–160)',
    canonicalUrlLabel: 'URL canônica',
    ogImageLabel: 'URL da imagem Open Graph (recomendado: 1200×630)',
    siteNameLabel: 'Nome do site (og:site_name)',
    ogTypeLabel: 'og:type',
    twitterCardLabel: 'Twitter Card',
    robotsLabel: 'Robots:',
    robotsFollowAria: 'Diretiva de follow dos robots',
    includeViewportLabel: 'Incluir tags charset e viewport',
    generatedTagsLabel: 'Tags HTML <head> geradas',
    copyHtml: 'Copiar HTML',
    downloadHtml: 'Baixar .html',
    socialPreviewLabel: 'Pré-visualização do cartão de compartilhamento',
    socialPreviewFallback: 'Pré-visualização de compartilhamento',
    untitledPage: 'Página sem título',
    metaSnippetFallback: 'O trecho da meta descrição aparece aqui.',
  },
  fr: {
    defaultTitle: 'UtilityFlow – Outils utilitaires rapides dans le navigateur',
    defaultDescription: 'Découvrez 85 outils rapides et respectueux de la vie privée dans le navigateur pour modifier du texte, encoder, calculer des finances, travailler avec des PDF et le SEO.',
    pageTitleLabel: 'Titre de la page (<title> / og:title)',
    titleChars: '{n} caractères (idéal : 30–60)',
    metaDescriptionLabel: 'Méta-description',
    descChars: '{n} caractères (idéal : 120–160)',
    canonicalUrlLabel: 'URL canonique',
    ogImageLabel: 'URL de l\'image Open Graph (1200×630 recommandé)',
    siteNameLabel: 'Nom du site (og:site_name)',
    ogTypeLabel: 'og:type',
    twitterCardLabel: 'Twitter Card',
    robotsLabel: 'Robots :',
    robotsFollowAria: 'Directive de suivi des robots',
    includeViewportLabel: 'Inclure les balises charset et viewport',
    generatedTagsLabel: 'Balises HTML <head> générées',
    copyHtml: 'Copier le HTML',
    downloadHtml: 'Télécharger le .html',
    socialPreviewLabel: 'Aperçu de la carte de partage',
    socialPreviewFallback: 'Aperçu du partage',
    untitledPage: 'Page sans titre',
    metaSnippetFallback: 'L\'extrait de la méta-description apparaît ici.',
  },
  de: {
    defaultTitle: 'UtilityFlow – Schnelle browserbasierte Online-Utility-Tools',
    defaultDescription:
      'Entdecken Sie 85 schnelle, datenschutzfreundliche Browser-Tools für Textbearbeitung, Entwickler-Codierung, Finanzrechner, PDF-Workflows und SEO.',
    pageTitleLabel: 'Seitentitel (<title> / og:title)',
    titleChars: '{n} Zeichen (ideal 30–60)',
    metaDescriptionLabel: 'Meta-Beschreibung',
    descChars: '{n} Zeichen (ideal 120–160)',
    canonicalUrlLabel: 'Canonical-URL',
    ogImageLabel: 'Open-Graph-Bild-URL (1200×630 empfohlen)',
    siteNameLabel: 'Website-Name (og:site_name)',
    ogTypeLabel: 'og:type',
    twitterCardLabel: 'Twitter-Card',
    robotsLabel: 'Robots:',
    robotsFollowAria: 'Robots-Follow-Anweisung',
    includeViewportLabel: 'Charset- & Viewport-Tags einfügen',
    generatedTagsLabel: 'Generierte HTML-<head>-Tags',
    copyHtml: 'HTML kopieren',
    downloadHtml: '.html herunterladen',
    socialPreviewLabel: 'Vorschau der Social-Sharing-Karte',
    socialPreviewFallback: 'Social-Sharing-Vorschau',
    untitledPage: 'Seite ohne Titel',
    metaSnippetFallback: 'Hier erscheint der Meta-Beschreibungs-Ausschnitt.',
  },
  it: {
    defaultTitle: 'UtilityFlow – Strumenti online veloci basati sul browser',
    defaultDescription:
      'Esplora 85 strumenti browser veloci e attenti alla privacy per modifica di testi, codifica per sviluppatori, calcolatori finanziari, flussi di lavoro PDF e SEO.',
    pageTitleLabel: 'Titolo pagina (<title> / og:title)',
    titleChars: '{n} caratteri (ideale 30–60)',
    metaDescriptionLabel: 'Meta description',
    descChars: '{n} caratteri (ideale 120–160)',
    canonicalUrlLabel: 'URL canonical',
    ogImageLabel: 'URL immagine Open Graph (consigliato 1200×630)',
    siteNameLabel: 'Nome sito (og:site_name)',
    ogTypeLabel: 'og:type',
    twitterCardLabel: 'Twitter Card',
    robotsLabel: 'Robots:',
    robotsFollowAria: 'Direttiva follow per i robots',
    includeViewportLabel: 'Includi tag charset e viewport',
    generatedTagsLabel: 'Tag HTML <head> generati',
    copyHtml: 'Copia HTML',
    downloadHtml: 'Scarica .html',
    socialPreviewLabel: 'Anteprima della scheda di condivisione social',
    socialPreviewFallback: 'Anteprima di condivisione social',
    untitledPage: 'Pagina senza titolo',
    metaSnippetFallback: 'Qui compare il frammento della meta description.',
  },
};

function escAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default function MetaTagGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [title, setTitle] = useState(s.defaultTitle);
  const [description, setDescription] = useState(s.defaultDescription);
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
              {s.pageTitleLabel}
            </label>
            <span
              className={`font-mono tabular-nums ${
                title.length >= 30 && title.length <= 60 ? 'text-emerald-700 font-semibold' : 'text-amber-700'
              }`}
            >
              {s.titleChars.replace('{n}', String(title.length))}
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
              {s.metaDescriptionLabel}
            </label>
            <span
              className={`font-mono tabular-nums ${
                description.length >= 120 && description.length <= 160
                  ? 'text-emerald-700 font-semibold'
                  : 'text-amber-700'
              }`}
            >
              {s.descChars.replace('{n}', String(description.length))}
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
            {s.canonicalUrlLabel}
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
            {s.ogImageLabel}
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
            {s.siteNameLabel}
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
              {s.ogTypeLabel}
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
              {s.twitterCardLabel}
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
              {s.robotsLabel}
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
              aria-label={s.robotsFollowAria}
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
            {s.includeViewportLabel}
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-700">{s.generatedTagsLabel}</span>
            <div className="flex items-center gap-2">
              <CopyButton text={generatedHtml} label={s.copyHtml} copiedLabel={t.common.copied} />
              <button
                type="button"
                onClick={downloadHtml}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {s.downloadHtml}
              </button>
            </div>
          </div>
          <pre className="rounded-lg border border-slate-200 bg-white p-3.5 font-mono text-xs text-slate-900 overflow-x-auto leading-relaxed">
            {generatedHtml}
          </pre>
        </div>

        <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
          <div className="text-xs font-semibold text-slate-500">{s.socialPreviewLabel}</div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <div className="aspect-[1.91/1] bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 flex items-center justify-center p-4 text-center">
              <div className="text-white">
                <div className="text-[11px] font-mono text-indigo-300">{previewHost}</div>
                <div className="mt-1 text-sm font-bold line-clamp-2">{title || s.socialPreviewFallback}</div>
              </div>
            </div>
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="text-[11px] text-slate-500 uppercase tracking-wide">{previewHost}</div>
              <div className="mt-0.5 text-sm font-semibold text-slate-900 line-clamp-1">
                {title || s.untitledPage}
              </div>
              <div className="mt-0.5 text-xs text-slate-600 line-clamp-2">
                {description || s.metaSnippetFallback}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
