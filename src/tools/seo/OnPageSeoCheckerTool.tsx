import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    auditTitle: 'Client-Side HTML Source Audit:',
    auditBody:
      'Browsers block cross-origin scraping (CORS) of arbitrary third-party websites and do not have access to private search analytics. Paste your page\'s HTML source below (View Page Source) to audit DOM tags locally.',
    pastedHtmlLabel: 'Pasted HTML Source',
    loadSampleHtml: 'Load sample HTML',
    htmlPlaceholder: 'Paste raw <html>...</html> source here...',
    scoreLabel: 'DOM Audit Score',
    checksPassed: '{passed} / {total} checks passed',
    linksSummary: 'Links: {total} ({internal} int / {external} ext)',
    robotsMetaLabel: 'Robots meta: ',
    robotsDefault: 'Default (index, follow)',
    headingOutline: 'Heading Outline (H1–H4)',
    emptyState: 'Paste HTML source on the left to inspect title, description, headings, canonicals, and alt tags.',
    checkTitle: 'Title Tag (<title>)',
    checkMetaDesc: 'Meta Description',
    checkH1: 'Exactly One <h1> Heading',
    checkCanonical: 'Canonical URL (<link rel="canonical">)',
    checkAlt: 'Image Alt Attributes',
    checkOgJsonLd: 'Open Graph & JSON-LD Structured Data',
    titleDetail: '{n} chars: "{title}"',
    titleMissing: 'Missing <title> tag in <head>.',
    descDetail: '{n} chars (target 120–160).',
    descMissing: 'Missing <meta name="description">.',
    h1Detail: 'Found {n} <h1> element(s).',
    canonicalMissing: 'No canonical tag declared.',
    noImages: 'No <img> elements in markup.',
    altDetail: '{with}/{total} images include descriptive alt text.',
    ogDetail: 'og:title {presence} · {n} JSON-LD block(s).',
    present: 'present',
    missing: 'missing',
  },
  es: {
    auditTitle: 'Auditoría de código fuente HTML en el cliente:',
    auditBody:
      'Los navegadores bloquean el raspado entre orígenes (CORS) de sitios web de terceros y no tienen acceso a analíticas de búsqueda privadas. Pega el código fuente HTML de tu página a continuación (Ver código fuente) para auditar las etiquetas DOM localmente.',
    pastedHtmlLabel: 'Código fuente HTML pegado',
    loadSampleHtml: 'Cargar HTML de ejemplo',
    htmlPlaceholder: 'Pega aquí el código fuente <html>...</html> sin procesar...',
    scoreLabel: 'Puntuación de auditoría DOM',
    checksPassed: '{passed} / {total} verificaciones superadas',
    linksSummary: 'Enlaces: {total} ({internal} int. / {external} ext.)',
    robotsMetaLabel: 'Meta robots: ',
    robotsDefault: 'Predeterminado (index, follow)',
    headingOutline: 'Esquema de encabezados (H1–H4)',
    emptyState: 'Pega el código fuente HTML a la izquierda para inspeccionar el título, la descripción, los encabezados, las URL canónicas y las etiquetas alt.',
    checkTitle: 'Etiqueta de título (<title>)',
    checkMetaDesc: 'Metadescripción',
    checkH1: 'Exactamente un encabezado <h1>',
    checkCanonical: 'URL canónica (<link rel="canonical">)',
    checkAlt: 'Atributos alt de imágenes',
    checkOgJsonLd: 'Open Graph y datos estructurados JSON-LD',
    titleDetail: '{n} caracteres: "{title}"',
    titleMissing: 'Falta la etiqueta <title> en <head>.',
    descDetail: '{n} caracteres (objetivo: 120–160).',
    descMissing: 'Falta <meta name="description">.',
    h1Detail: 'Se encontraron {n} elemento(s) <h1>.',
    canonicalMissing: 'No se declaró ninguna etiqueta canónica.',
    noImages: 'No hay elementos <img> en el código.',
    altDetail: '{with}/{total} imágenes incluyen texto alternativo descriptivo.',
    ogDetail: 'og:title {presence} · {n} bloque(s) JSON-LD.',
    present: 'presente',
    missing: 'ausente',
  },
  pt: {
    auditTitle: 'Auditoria do código-fonte HTML no navegador:',
    auditBody: 'Os navegadores bloqueiam a raspagem entre origens (CORS) de sites de terceiros e não têm acesso a análises de busca privadas. Cole o código-fonte HTML da sua página abaixo (Ver código-fonte) para auditar as tags DOM localmente.',
    pastedHtmlLabel: 'Código-fonte HTML colado',
    loadSampleHtml: 'Carregar HTML de exemplo',
    htmlPlaceholder: 'Cole o código-fonte <html>...</html> aqui...',
    scoreLabel: 'Pontuação da auditoria DOM',
    checksPassed: '{passed} / {total} verificações aprovadas',
    linksSummary: 'Links: {total} ({internal} int. / {external} ext.)',
    robotsMetaLabel: 'Meta robots: ',
    robotsDefault: 'Padrão (index, follow)',
    headingOutline: 'Estrutura de títulos (H1–H4)',
    emptyState: 'Cole o código-fonte HTML à esquerda para inspecionar título, descrição, títulos, canônicas e tags alt.',
    checkTitle: 'Tag de título (<title>)',
    checkMetaDesc: 'Meta descrição',
    checkH1: 'Exatamente um título <h1>',
    checkCanonical: 'URL canônica (<link rel="canonical">)',
    checkAlt: 'Atributos alt de imagens',
    checkOgJsonLd: 'Open Graph e dados estruturados JSON-LD',
    titleDetail: '{n} caracteres: "{title}"',
    titleMissing: 'Falta a tag <title> no <head>.',
    descDetail: '{n} caracteres (meta: 120–160).',
    descMissing: 'Falta a tag <meta name="description">.',
    h1Detail: '{n} elemento(s) <h1> encontrado(s).',
    canonicalMissing: 'Nenhuma tag canônica declarada.',
    noImages: 'Nenhum elemento <img> no código.',
    altDetail: '{with}/{total} imagens incluem texto alternativo descritivo.',
    ogDetail: 'og:title {presence} · {n} bloco(s) JSON-LD.',
    present: 'presente',
    missing: 'ausente',
  },
  fr: {
    auditTitle: 'Audit du code source HTML côté client :',
    auditBody: 'Les navigateurs bloquent l\'extraction inter-origines (CORS) des sites tiers et n\'ont pas accès aux analyses de recherche privées. Collez le code source HTML de votre page ci-dessous (Afficher le code source) pour auditer les balises DOM localement.',
    pastedHtmlLabel: 'Code source HTML collé',
    loadSampleHtml: 'Charger un exemple HTML',
    htmlPlaceholder: 'Collez le code source <html>...</html> brut ici...',
    scoreLabel: 'Score de l\'audit DOM',
    checksPassed: '{passed} / {total} vérifications réussies',
    linksSummary: 'Liens : {total} ({internal} int. / {external} ext.)',
    robotsMetaLabel: 'Méta robots : ',
    robotsDefault: 'Par défaut (index, follow)',
    headingOutline: 'Plan des titres (H1–H4)',
    emptyState: 'Collez le code source HTML à gauche pour inspecter le titre, la description, les titres, les URL canoniques et les balises alt.',
    checkTitle: 'Balise de titre (<title>)',
    checkMetaDesc: 'Méta-description',
    checkH1: 'Exactement un titre <h1>',
    checkCanonical: 'URL canonique (<link rel="canonical">)',
    checkAlt: 'Attributs alt des images',
    checkOgJsonLd: 'Open Graph et données structurées JSON-LD',
    titleDetail: '{n} caractères : « {title} »',
    titleMissing: 'Balise <title> manquante dans <head>.',
    descDetail: '{n} caractères (cible : 120–160).',
    descMissing: '<meta name="description"> manquante.',
    h1Detail: '{n} élément(s) <h1> trouvé(s).',
    canonicalMissing: 'Aucune balise canonique déclarée.',
    noImages: 'Aucun élément <img> dans le code.',
    altDetail: '{with}/{total} images avec un texte alternatif descriptif.',
    ogDetail: 'og:title {presence} · {n} bloc(s) JSON-LD.',
    present: 'présent',
    missing: 'absent',
  },
  de: {
    auditTitle: 'Clientseitige HTML-Quelltext-Prüfung:',
    auditBody:
      'Browser blockieren das Cross-Origin-Scraping (CORS) beliebiger Websites Dritter und haben keinen Zugriff auf private Suchanalysen. Fügen Sie unten den HTML-Quelltext Ihrer Seite ein („Seitenquelltext anzeigen"), um DOM-Tags lokal zu prüfen.',
    pastedHtmlLabel: 'Eingefügter HTML-Quelltext',
    loadSampleHtml: 'Beispiel-HTML laden',
    htmlPlaceholder: 'Rohes <html>...</html>-Quelltext hier einfügen...',
    scoreLabel: 'DOM-Prüfergebnis',
    checksPassed: '{passed} / {total} Prüfungen bestanden',
    linksSummary: 'Links: {total} ({internal} intern / {external} extern)',
    robotsMetaLabel: 'Robots-Meta: ',
    robotsDefault: 'Standard (index, follow)',
    headingOutline: 'Überschriftenstruktur (H1–H4)',
    emptyState: 'Fügen Sie links den HTML-Quelltext ein, um Titel, Beschreibung, Überschriften, Canonicals und Alt-Tags zu prüfen.',
    checkTitle: 'Title-Tag (<title>)',
    checkMetaDesc: 'Meta-Beschreibung',
    checkH1: 'Genau eine <h1>-Überschrift',
    checkCanonical: 'Canonical-URL (<link rel="canonical">)',
    checkAlt: 'Bild-Alt-Attribute',
    checkOgJsonLd: 'Open Graph & strukturierte JSON-LD-Daten',
    titleDetail: '{n} Zeichen: „{title}"',
    titleMissing: '<title>-Tag in <head> fehlt.',
    descDetail: '{n} Zeichen (Ziel 120–160).',
    descMissing: '<meta name="description"> fehlt.',
    h1Detail: '{n} <h1>-Element(e) gefunden.',
    canonicalMissing: 'Kein Canonical-Tag angegeben.',
    noImages: 'Keine <img>-Elemente im Markup.',
    altDetail: '{with}/{total} Bilder enthalten beschreibenden Alt-Text.',
    ogDetail: 'og:title {presence} · {n} JSON-LD-Block/Blöcke.',
    present: 'vorhanden',
    missing: 'fehlt',
  },
  it: {
    auditTitle: 'Audit del codice HTML lato client:',
    auditBody:
      'I browser bloccano lo scraping cross-origin (CORS) di siti di terze parti e non hanno accesso alle analisi di ricerca private. Incolla qui sotto il codice HTML della pagina (Visualizza sorgente pagina) per controllare i tag DOM in locale.',
    pastedHtmlLabel: 'Codice HTML incollato',
    loadSampleHtml: 'Carica HTML di esempio',
    htmlPlaceholder: 'Incolla qui il codice sorgente <html>...</html>...',
    scoreLabel: 'Punteggio audit DOM',
    checksPassed: '{passed} / {total} controlli superati',
    linksSummary: 'Link: {total} ({internal} int. / {external} est.)',
    robotsMetaLabel: 'Meta robots: ',
    robotsDefault: 'Predefinito (index, follow)',
    headingOutline: 'Struttura delle intestazioni (H1–H4)',
    emptyState: 'Incolla il codice HTML a sinistra per controllare titolo, descrizione, intestazioni, canonical e tag alt.',
    checkTitle: 'Tag title (<title>)',
    checkMetaDesc: 'Meta description',
    checkH1: 'Esattamente una sola intestazione <h1>',
    checkCanonical: 'URL canonical (<link rel="canonical">)',
    checkAlt: 'Attributi alt delle immagini',
    checkOgJsonLd: 'Open Graph e dati strutturati JSON-LD',
    titleDetail: '{n} caratteri: «{title}»',
    titleMissing: 'Tag <title> mancante in <head>.',
    descDetail: '{n} caratteri (obiettivo 120–160).',
    descMissing: '<meta name="description"> mancante.',
    h1Detail: '{n} elemento/i <h1> trovato/i.',
    canonicalMissing: 'Nessun tag canonical dichiarato.',
    noImages: 'Nessun elemento <img> nel markup.',
    altDetail: '{with}/{total} immagini includono testo alt descrittivo.',
    ogDetail: 'og:title {presence} · {n} blocco/i JSON-LD.',
    present: 'presente',
    missing: 'mancante',
  },
  id: {
    auditTitle: 'Audit Sumber HTML Sisi Klien:',
    auditBody:
      'Browser memblokir scraping lintas origin (CORS) dari situs pihak ketiga mana pun dan tidak memiliki akses ke analitik pencarian pribadi. Tempel sumber HTML halaman Anda di bawah (Lihat Sumber Halaman) untuk mengaudit tag DOM secara lokal.',
    pastedHtmlLabel: 'Sumber HTML yang Ditempel',
    loadSampleHtml: 'Muat contoh HTML',
    htmlPlaceholder: 'Tempel sumber <html>...</html> mentah di sini...',
    scoreLabel: 'Skor Audit DOM',
    checksPassed: '{passed} / {total} pemeriksaan lolos',
    linksSummary: 'Tautan: {total} ({internal} int / {external} ext)',
    robotsMetaLabel: 'Meta robots: ',
    robotsDefault: 'Default (index, follow)',
    headingOutline: 'Kerangka Heading (H1–H4)',
    emptyState: 'Tempel sumber HTML di sebelah kiri untuk memeriksa judul, deskripsi, heading, canonical, dan tag alt.',
    checkTitle: 'Tag Judul (<title>)',
    checkMetaDesc: 'Deskripsi Meta',
    checkH1: 'Tepat Satu Judul <h1>',
    checkCanonical: 'URL Kanonis (<link rel="canonical">)',
    checkAlt: 'Atribut Alt Gambar',
    checkOgJsonLd: 'Open Graph & Data Terstruktur JSON-LD',
    titleDetail: '{n} karakter: "{title}"',
    titleMissing: 'Tidak ada tag <title> dalam <head>.',
    descDetail: '{n} karakter (target 120–160).',
    descMissing: 'Tidak ada <meta name="description">.',
    h1Detail: 'Ditemukan {n} elemen <h1>.',
    canonicalMissing: 'Tidak ada tag canonical yang dideklarasikan.',
    noImages: 'Tidak ada elemen <img> dalam markup.',
    altDetail: '{with}/{total} gambar menyertakan teks alt deskriptif.',
    ogDetail: 'og:title {presence} · {n} blok JSON-LD.',
    present: 'ada',
    missing: 'tidak ada',
  },
  ru: {
    auditTitle: 'Аудит исходного HTML на стороне клиента:',
    auditBody:
      'Браузеры блокируют межсайтовый скрапинг (CORS) произвольных сторонних сайтов и не имеют доступа к приватной поисковой аналитике. Вставьте исходный HTML-код страницы ниже (Просмотр кода страницы), чтобы локально проверить DOM-теги.',
    pastedHtmlLabel: 'Вставленный исходный HTML',
    loadSampleHtml: 'Загрузить пример HTML',
    htmlPlaceholder: 'Вставьте исходный код <html>...</html>...',
    scoreLabel: 'Оценка DOM-аудита',
    checksPassed: 'Пройдено проверок: {passed} / {total}',
    linksSummary: 'Ссылки: {total} ({internal} внутр. / {external} внешн.)',
    robotsMetaLabel: 'Мета robots: ',
    robotsDefault: 'По умолчанию (index, follow)',
    headingOutline: 'Структура заголовков (H1–H4)',
    emptyState: 'Вставьте исходный HTML слева, чтобы проверить заголовок, описание, заголовки, канонические ссылки и alt-теги.',
    checkTitle: 'Тег заголовка (<title>)',
    checkMetaDesc: 'Метаописание',
    checkH1: 'Ровно один заголовок <h1>',
    checkCanonical: 'Канонический URL (<link rel="canonical">)',
    checkAlt: 'Атрибуты alt изображений',
    checkOgJsonLd: 'Open Graph и структурированные данные JSON-LD',
    titleDetail: '{n} симв.: «{title}»',
    titleMissing: 'Тег <title> отсутствует в <head>.',
    descDetail: '{n} симв. (цель 120–160).',
    descMissing: 'Отсутствует <meta name="description">.',
    h1Detail: 'Найдено элементов <h1>: {n}.',
    canonicalMissing: 'Канонический тег не объявлен.',
    noImages: 'В разметке нет элементов <img>.',
    altDetail: '{with}/{total} изображений содержат описательный alt-текст.',
    ogDetail: 'og:title {presence} · блоков JSON-LD: {n}.',
    present: 'присутствует',
    missing: 'отсутствует',
  },
};

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
  const { locale } = useLocale();
  const s = STRINGS[locale];
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
        label: s.checkTitle,
        pass: title.length >= 30 && title.length <= 65,
        detail: title
          ? s.titleDetail.replace('{n}', String(title.length)).replace('{title}', title)
          : s.titleMissing,
      },
      {
        label: s.checkMetaDesc,
        pass: metaDesc.length >= 110 && metaDesc.length <= 165,
        detail: metaDesc
          ? s.descDetail.replace('{n}', String(metaDesc.length))
          : s.descMissing,
      },
      {
        label: s.checkH1,
        pass: h1Count === 1,
        detail: s.h1Detail.replace('{n}', String(h1Count)),
      },
      {
        label: s.checkCanonical,
        pass: Boolean(canonical),
        detail: canonical || s.canonicalMissing,
      },
      {
        label: s.checkAlt,
        pass: imgs.length === 0 || imgsMissingAlt === 0,
        detail:
          imgs.length === 0
            ? s.noImages
            : s.altDetail
                .replace('{with}', String(imgs.length - imgsMissingAlt))
                .replace('{total}', String(imgs.length)),
      },
      {
        label: s.checkOgJsonLd,
        pass: Boolean(ogTitle) && ldJsonScripts > 0,
        detail: s.ogDetail
          .replace('{presence}', ogTitle ? s.present : s.missing)
          .replace('{n}', String(ldJsonScripts)),
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
  }, [htmlInput, locale]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <p>
          <strong>{s.auditTitle}</strong> {s.auditBody}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label htmlFor="seo-html-in" className="text-sm font-semibold text-slate-900">
              {s.pastedHtmlLabel}
            </label>
            <button
              type="button"
              onClick={() => setHtmlInput(SAMPLE_HTML)}
              className="text-xs font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer"
            >
              {s.loadSampleHtml}
            </button>
          </div>
          <textarea
            id="seo-html-in"
            rows={14}
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder={s.htmlPlaceholder}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-xs leading-relaxed"
          />
        </div>

        <div className="lg:col-span-6 space-y-4">
          {audit ? (
            <>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-indigo-700">{s.scoreLabel}</div>
                  <div className="text-2xl font-bold text-slate-900 tabular-nums">
                    {s.checksPassed
                      .replace('{passed}', String(audit.passedCount))
                      .replace('{total}', String(audit.checks.length))}
                  </div>
                </div>
                <div className="text-right text-xs text-slate-600 tabular-nums">
                  <div>
                    {s.linksSummary
                      .replace('{total}', String(audit.linksTotal))
                      .replace('{internal}', String(audit.internalLinks))
                      .replace('{external}', String(audit.externalLinks))}
                  </div>
                  <div>
                    {s.robotsMetaLabel}
                    {audit.robots || s.robotsDefault}
                  </div>
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
                    {s.headingOutline}
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
              {s.emptyState}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
