import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    defaultTitle: 'JSON Formatter & Validator – Pretty Print & Minify | UtilityFlow',
    defaultDescription:
      'Format, validate, minify, and sort keys in JSON payloads instantaneously in your browser with line/column syntax error details.',
    desktopSerp: 'Desktop SERP (~580px title)',
    mobileSerp: 'Mobile SERP (~120ch desc)',
    copyTitleMeta: 'Copy Title & Meta',
    seoTitleLabel: 'SEO Title',
    titleMetrics: '{chars} chars · ~{px} px / 580 px max',
    metaDescriptionLabel: 'Meta Description',
    descMetrics: '{chars} chars · ~{px} px',
    pageUrlLabel: 'Page URL (for breadcrumb preview)',
    siteNameLabel: 'Site Name',
    boldKeywordLabel: 'Bold Keyword',
    optionalPlaceholder: 'Optional',
    datePrefixLabel: 'Date Prefix',
    datePlaceholder: 'e.g. Nov 12, 2025',
    desktopSimulation: 'Desktop Search Snippet Simulation',
    mobileSimulation: 'Mobile Search Snippet Simulation',
    titleFallback: 'Your SEO Title Appears Here',
    descFallback: 'Your meta description preview appears here.',
  },
  es: {
    defaultTitle: 'Formateador y validador de JSON – Imprimir bonito y minificar | UtilityFlow',
    defaultDescription:
      'Formatea, valida, minifica y ordena las claves de cargas útiles JSON al instante en tu navegador, con detalles de errores de sintaxis por línea y columna.',
    desktopSerp: 'SERP de escritorio (título de ~580 px)',
    mobileSerp: 'SERP móvil (desc. de ~120 caracteres)',
    copyTitleMeta: 'Copiar título y meta',
    seoTitleLabel: 'Título SEO',
    titleMetrics: '{chars} caracteres · ~{px} px / máx. 580 px',
    metaDescriptionLabel: 'Metadescripción',
    descMetrics: '{chars} caracteres · ~{px} px',
    pageUrlLabel: 'URL de la página (para la vista previa de la ruta de navegación)',
    siteNameLabel: 'Nombre del sitio',
    boldKeywordLabel: 'Palabra clave en negrita',
    optionalPlaceholder: 'Opcional',
    datePrefixLabel: 'Prefijo de fecha',
    datePlaceholder: 'p. ej., 12 nov 2025',
    desktopSimulation: 'Simulación de fragmento de búsqueda de escritorio',
    mobileSimulation: 'Simulación de fragmento de búsqueda móvil',
    titleFallback: 'Tu título SEO aparece aquí',
    descFallback: 'Aquí aparece la vista previa de tu metadescripción.',
  },
  pt: {
    defaultTitle: 'Formatador e validador de JSON – Formatar e minificar | UtilityFlow',
    defaultDescription: 'Formate, valide, minifique e ordene as chaves de cargas JSON instantaneamente no navegador, com detalhes de erros de sintaxe por linha e coluna.',
    desktopSerp: 'SERP de desktop (título de ~580 px)',
    mobileSerp: 'SERP de celular (desc. de ~120 caracteres)',
    copyTitleMeta: 'Copiar título e meta',
    seoTitleLabel: 'Título de SEO',
    titleMetrics: '{chars} caracteres · ~{px} px / máx. 580 px',
    metaDescriptionLabel: 'Meta descrição',
    descMetrics: '{chars} caracteres · ~{px} px',
    pageUrlLabel: 'URL da página (para pré-visualização do breadcrumb)',
    siteNameLabel: 'Nome do site',
    boldKeywordLabel: 'Palavra-chave em negrito',
    optionalPlaceholder: 'Opcional',
    datePrefixLabel: 'Prefixo de data',
    datePlaceholder: 'ex.: 12 de nov. de 2025',
    desktopSimulation: 'Simulação de snippet de pesquisa no desktop',
    mobileSimulation: 'Simulação de snippet de pesquisa no celular',
    titleFallback: 'Seu título de SEO aparece aqui',
    descFallback: 'A pré-visualização da sua meta descrição aparece aqui.',
  },
  fr: {
    defaultTitle: 'Formateur et validateur JSON – Mise en forme et minification | UtilityFlow',
    defaultDescription: 'Formatez, validez, minifiez et triez les clés des charges JSON instantanément dans votre navigateur, avec les détails des erreurs de syntaxe par ligne et colonne.',
    desktopSerp: 'SERP sur ordinateur (titre ~580 px)',
    mobileSerp: 'SERP mobile (desc. ~120 caractères)',
    copyTitleMeta: 'Copier le titre et la méta',
    seoTitleLabel: 'Titre SEO',
    titleMetrics: '{chars} caractères · ~{px} px / 580 px max',
    metaDescriptionLabel: 'Méta-description',
    descMetrics: '{chars} caractères · ~{px} px',
    pageUrlLabel: 'URL de la page (pour l\'aperçu du fil d\'Ariane)',
    siteNameLabel: 'Nom du site',
    boldKeywordLabel: 'Mot-clé en gras',
    optionalPlaceholder: 'Facultatif',
    datePrefixLabel: 'Préfixe de date',
    datePlaceholder: 'ex. : 12 nov. 2025',
    desktopSimulation: 'Simulation d\'extrait de recherche sur ordinateur',
    mobileSimulation: 'Simulation d\'extrait de recherche mobile',
    titleFallback: 'Votre titre SEO apparaît ici',
    descFallback: 'L\'aperçu de votre méta-description apparaît ici.',
  },
};

function measureTextWidthPx(text: string, font: string): number {
  if (typeof document === 'undefined') return text.length * 9;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return text.length * 9;
  ctx.font = font;
  return Math.round(ctx.measureText(text).width);
}

function truncateToWidth(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, Math.max(0, maxChars - 1)).trimEnd()}…`;
}

export default function SerpSnippetPreviewTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [title, setTitle] = useState(s.defaultTitle);
  const [url, setUrl] = useState('https://utilityflow.online/json-formatter/');
  const [description, setDescription] = useState(s.defaultDescription);
  const [siteName, setSiteName] = useState('UtilityFlow');
  const [targetKeyword, setTargetKeyword] = useState('JSON');
  const [dateLabel, setDateLabel] = useState('');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  const metrics = useMemo(() => {
    const titlePx = measureTextWidthPx(title, '400 20px Arial, sans-serif');
    const descPx = measureTextWidthPx(description, '400 14px Arial, sans-serif');

    let host = 'example.com';
    let breadcrumbTrail = '';
    try {
      const parsed = new URL(/^https?:\/\//i.test(url.trim()) ? url.trim() : `https://${url.trim()}`);
      host = parsed.hostname;
      const segs = parsed.pathname.split('/').filter(Boolean);
      breadcrumbTrail = segs.length > 0 ? ` › ${segs.join(' › ')}` : '';
    } catch {
      host = 'example.com';
      breadcrumbTrail = '';
    }

    const titleCapPx = device === 'desktop' ? 580 : 600;
    const descCapChars = device === 'desktop' ? 158 : 120;

    return {
      titlePx,
      descPx,
      titleOver: titlePx > titleCapPx,
      descOver: description.length > descCapChars,
      host,
      breadcrumbTrail,
      displayedTitle: truncateToWidth(title, device === 'desktop' ? 62 : 56),
      displayedDesc: truncateToWidth(description, descCapChars),
    };
  }, [title, url, description, device]);

  const highlightText = (text: string) => {
    const kw = targetKeyword.trim();
    if (!kw) return text;
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === kw.toLowerCase() ? (
        <strong key={i} className="font-semibold text-slate-900">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const headSnippet = `<title>${title.trim()}</title>\n<meta name="description" content="${description.trim()}" />`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              device === 'desktop' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {s.desktopSerp}
          </button>
          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              device === 'mobile' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {s.mobileSerp}
          </button>
        </div>

        <CopyButton text={headSnippet} label={s.copyTitleMeta} copiedLabel={t.common.copied} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <div className="flex flex-wrap justify-between gap-2 text-xs mb-1">
            <label htmlFor="serp-title" className="text-sm font-semibold text-slate-900">
              {s.seoTitleLabel}
            </label>
            <span className={`font-mono tabular-nums ${metrics.titleOver ? 'text-red-700 font-semibold' : 'text-emerald-700 font-semibold'}`}>
              {s.titleMetrics.replace('{chars}', String(title.length)).replace('{px}', String(metrics.titlePx))}
            </span>
          </div>
          <input
            id="serp-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-wrap justify-between gap-2 text-xs mb-1">
            <label htmlFor="serp-desc" className="text-sm font-semibold text-slate-900">
              {s.metaDescriptionLabel}
            </label>
            <span className={`font-mono tabular-nums ${metrics.descOver ? 'text-amber-700 font-semibold' : 'text-emerald-700 font-semibold'}`}>
              {s.descMetrics.replace('{chars}', String(description.length)).replace('{px}', String(metrics.descPx))}
            </span>
          </div>
          <textarea
            id="serp-desc"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div>
          <label htmlFor="serp-url" className="block text-xs font-semibold text-slate-800 mb-1">
            {s.pageUrlLabel}
          </label>
          <input
            id="serp-url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="serp-site" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.siteNameLabel}
            </label>
            <input
              id="serp-site"
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs"
            />
          </div>
          <div>
            <label htmlFor="serp-kw" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.boldKeywordLabel}
            </label>
            <input
              id="serp-kw"
              type="text"
              value={targetKeyword}
              onChange={(e) => setTargetKeyword(e.target.value)}
              placeholder={s.optionalPlaceholder}
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs"
            />
          </div>
          <div>
            <label htmlFor="serp-date" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.datePrefixLabel}
            </label>
            <input
              id="serp-date"
              type="text"
              value={dateLabel}
              onChange={(e) => setDateLabel(e.target.value)}
              placeholder={s.datePlaceholder}
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs"
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="text-xs font-semibold text-slate-500 mb-3">
          {device === 'desktop' ? s.desktopSimulation : s.mobileSimulation}
        </div>

        <div
          className={`rounded-xl border border-slate-200 bg-white p-5 ${
            device === 'mobile' ? 'max-w-sm shadow-xs' : 'max-w-2xl'
          }`}
        >
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="h-7 w-7 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700 shrink-0">
              {(siteName.trim() || metrics.host).slice(0, 1).toUpperCase()}
            </div>
            <div className="min-w-0 leading-tight">
              <div className="text-sm text-slate-900 truncate">{siteName || metrics.host}</div>
              <div className="text-xs text-slate-600 truncate font-sans">
                {metrics.host}
                {metrics.breadcrumbTrail}
              </div>
            </div>
          </div>

          <h3 className="text-xl leading-snug font-normal text-[#1a0dab] hover:underline cursor-pointer">
            {metrics.displayedTitle || s.titleFallback}
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-[#4d5156]">
            {dateLabel.trim() && <span className="text-slate-500">{dateLabel.trim()} — </span>}
            {highlightText(metrics.displayedDesc || s.descFallback)}
          </p>
        </div>
      </div>
    </div>
  );
}
