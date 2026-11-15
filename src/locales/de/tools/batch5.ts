import type { ToolLocaleOverride } from '../../types';

/**
 * German overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Filled by Phase 3 translation. See fr/tools/batch5.ts for the required shape.
 */
export const DE_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'meta-tag-ersteller',
    name: 'Meta-Tag- & Open-Graph-Generator',
    shortDescription:
      'Erstelle HTML-Titel, Meta-Description, Canonical-, Robots-, Open-Graph- und Twitter/X-Card-Tags mit Live-Vorschau der Social-Media-Karte.',
    keywords: [
      'meta tag generator',
      'open graph generator',
      'twitter card generator',
      'html seo head tags',
      'open graph meta tags',
      'meta tags erstellen',
      'meta description generator',
      'html meta tags erstellen',
      'social media meta tags',
    ],
    seo: {
      title: 'Meta-Tag-Generator – Open Graph & Twitter | UtilityFlow',
      description:
        'Erstelle saubere Titel-, Description-, Canonical-, Open-Graph- und Twitter-Card-Tags mit Live-Längenkontrolle und Social-Card-Vorschau – kostenlos im Browser.',
      primaryKeyword: 'meta tag generator',
      secondaryKeywords: [
        'open graph tag generator',
        'meta tags für social media',
        'html head seo erstellen',
        'twitter card meta generator',
      ],
      longTailKeywords: [
        'open graph und twitter card html meta tags kostenlos erstellen',
        'meta titel und description länge mit social vorschau prüfen',
        'fertige seo meta head tags als html herunterladen',
        'meta tags für website mit open graph vorschau erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle standardkonforme HTML-<head>-Metadaten – <title>, <meta name="description">, Canonical-URL, Indexierungsanweisungen, Open-Graph-Tags (og:*) und Twitter/X-Card-Markup – mit Attribut-Escaping und Live-Vorschau der Social-Media-Karte.',
  },
  'serp-snippet-preview': {
    slug: 'suchergebnis-vorschau',
    name: 'SERP-Snippet-Vorschau',
    shortDescription:
      'Simuliere Google-Suchergebnisse für Desktop und Handy mit echter Canvas-Pixelbreitenprüfung des Titels und Hervorhebung passender Keywords.',
    keywords: [
      'serp vorschau tool',
      'google snippet simulator',
      'seo titel pixelbreite prüfen',
      'meta description vorschau',
      'google serp vorschau',
      'suchergebnis vorschau tool',
      'seo snippet checker',
      'google titel prüfen',
      'meta description länge prüfen',
    ],
    seo: {
      title: 'Suchergebnis-Vorschau – Pixelbreite prüfen | UtilityFlow',
      description:
        'Sieh dir dein Google-Suchergebnis-Snippet auf Desktop und Handy an – mit echter Pixelbreitenprüfung des Titels, Keyword-Hervorhebung und Warnung vor Kürzung.',
      primaryKeyword: 'suchergebnis vorschau',
      secondaryKeywords: [
        'google serp simulator',
        'seo titel pixelbreite prüfen',
        'mobile suchergebnis vorschau',
        'desktop serp vorschau tool',
      ],
      longTailKeywords: [
        'google seo titel 580px pixelbreite online prüfen',
        'desktop und mobile suchergebnis kürzung vorschau',
        'keyword hervorhebung in meta description testen',
        'google suchergebnis snippet vor veröffentlichung prüfen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Prüfe, ob dein SEO-Titel in Googles Anzeigebudget von etwa 580 px passt – mit Live-Berechnung der Schriftmetriken per HTML5 Canvas statt reiner Zeichenzählung – und sieh dir Desktop- und Handy-Suchkarten mit Keyword-Hervorhebung an.',
  },
  'xml-sitemap-generator': {
    slug: 'xml-sitemap-ersteller',
    name: 'XML-Sitemap-Generator',
    shortDescription:
      'Erstelle gültige XML-Dateien nach Sitemaps.org aus URL-Listen – mit Deduplizierung, <lastmod>, <changefreq> und .xml-Download.',
    keywords: [
      'xml sitemap generator',
      'sitemap.xml erstellen',
      'xml sitemap erstellen online',
      'seo sitemap erstellen',
      'sitemap generator kostenlos',
      'xml sitemap creator',
      'sitemap.xml generieren',
      'sitemap builder tool',
      'website sitemap generator',
    ],
    seo: {
      title: 'XML-Sitemap-Generator – Sitemap.xml erstellen | UtilityFlow',
      description:
        'Verwandle eine Liste kanonischer URLs in eine gültige sitemap.xml – mit Deduplizierung, lastmod-Daten, changefreq-Hinweisen und XML-Escaping, im Browser.',
      primaryKeyword: 'xml sitemap generator',
      secondaryKeywords: [
        'sitemap xml erstellen',
        'sitemap.xml kostenlos erstellen',
        'kanonische url sitemap tool',
        'sitemap.xml datei generator',
      ],
      longTailKeywords: [
        'gültige xml sitemap aus url liste offline erstellen',
        'sitemap.xml mit lastmod und changefreq tags erstellen',
        'sonderzeichen in xml sitemap urls escapen',
        'xml sitemap für kleine website kostenlos erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Verwandle jede Liste kanonischer https://-URLs in eine gültige sitemap.xml nach dem Sitemaps-0.9-Schema – mit Filterung ungültiger URLs, automatischer Deduplizierung, XML-Escaping und .xml-Export.',
  },
  'robots-txt-generator': {
    slug: 'robots-txt-ersteller',
    name: 'Robots.txt-Generator',
    shortDescription:
      'Erstelle gültige robots.txt-Crawler-Regeln, gruppiert nach User-Agent – mit Allow-/Disallow-Pfaden, Crawl-Delay und Sitemap-Anweisungen.',
    keywords: [
      'robots.txt generator',
      'robots txt erstellen',
      'crawler allow disallow erstellen',
      'sitemap anweisung generator',
      'robots txt creator online',
      'robots.txt datei generator',
      'such crawler blockieren',
      'allow disallow robots txt',
      'robots.txt checker erstellen',
    ],
    seo: {
      title: 'Robots.txt-Generator – Regeln für Crawler | UtilityFlow',
      description:
        'Erstelle eine gültige robots.txt mit User-Agent-Gruppen, Allow- und Disallow-Regeln, Crawl-Delay und Sitemap-Links – mit Starter-Vorlagen, kostenlos im Browser.',
      primaryKeyword: 'robots.txt generator',
      secondaryKeywords: [
        'robots txt creator',
        'crawler pfade disallow',
        'wordpress und spa robots.txt',
        'robots.txt datei erstellen',
      ],
      longTailKeywords: [
        'saubere robots.txt für react vite und cloudflare pages erstellen',
        'mehrere sitemap anweisungen zur robots.txt hinzufügen',
        'staging umgebung mit robots.txt vor such crawlern blockieren',
        'robots.txt erstellen um ki crawler zu blockieren',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle saubere, gruppierte robots.txt-Anweisungen mit Starter-Vorlagen für offene Websites, SaaS-Web-Apps, WordPress oder Staging-Sperrung – mit benutzerdefinierten User-Agent-Zeilen, Allow/Disallow, Crawl-Delay und Sitemap:-Angaben.',
  },
  'schema-markup-generator': {
    slug: 'schema-markup-ersteller',
    name: 'Schema-Markup-(JSON-LD)-Generator',
    shortDescription:
      'Erstelle gültige Schema.org-JSON-LD-Skripte für Article, FAQPage, Product, Organization und BreadcrumbList.',
    keywords: [
      'schema markup generator',
      'json ld generator',
      'faq schema generator',
      'structured data erstellen',
      'structured data generator',
      'schema.org json-ld tool',
      'rich snippet schema generator',
      'faqpage schema generator',
      'product schema markup',
    ],
    seo: {
      title: 'Schema-Markup-Generator – JSON-LD für SEO | UtilityFlow',
      description:
        'Erstelle gültiges Schema.org-JSON-LD für Article, FAQPage, Product, Organization und BreadcrumbList – mit HTML-Escaping, Skript-Kopie und .jsonld-Export.',
      primaryKeyword: 'schema markup generator',
      secondaryKeywords: [
        'json-ld generator online',
        'faqpage structured data tool',
        'product schema erstellen',
        'structured data markup tool',
      ],
      longTailKeywords: [
        'gültiges schema.org json-ld script tag kostenlos erstellen',
        'dynamische faqpage und breadcrumb structured data erstellen',
        'json-ld sicher für html script tags escapen',
        'json-ld schema markup für artikel und produktseiten erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle saubere Schema.org-JSON-LD-Blöcke für Article, FAQPage, Product, Organization und BreadcrumbList – mit dynamischen Zeilen-Editoren, HTML-sicherem Escaping von < innerhalb von Script-Tags und .jsonld-Export.',
  },
  'url-slug-generator': {
    slug: 'url-slug-ersteller',
    name: 'URL-Slug- & SEO-Pfad-Optimierer',
    shortDescription:
      'Verwandle Artikeltitel in saubere, akzenttransliterierte SEO-URL-Slugs im Stapel – mit Stoppwort-Filterung.',
    keywords: [
      'url slug generator',
      'seo slug erstellen',
      'sauberen permalink erstellen',
      'slug konverter stapel',
      'seo freundliche url erstellen',
      'blog titel zu slug',
      'permalink slug erstellen',
      'stoppwörter aus urls entfernen',
      'akzente zu ascii slug',
    ],
    seo: {
      title: 'URL-Slug-Generator – SEO-Permalinks erstellen | UtilityFlow',
      description:
        'Verwandle Artikeltitel stapelweise in kleingeschriebene SEO-Slugs – mit Akzent-Transliteration, Stoppwort-Entfernung und Kürzung an Wortgrenzen, im Browser.',
      primaryKeyword: 'url slug generator',
      secondaryKeywords: [
        'seo freundliche url erstellen',
        'titel zu slug stapelweise',
        'slug mit stoppwörtern bereinigen',
        'permalink slug erstellen',
      ],
      longTailKeywords: [
        'blogtitel stapelweise in saubere seo url slugs umwandeln',
        'akzentzeichen in ascii url slugs transliterieren',
        'lange url slugs an sauberen wortgrenzen kürzen',
        'blogtitel zu seo freundlichen url slugs umwandeln',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Standardisiere lesbare Permalinks mit Bindestrichen für einzelne Beiträge oder ganze Redaktionskalender. Transliteriert Umlaute und Akzente sauber (Café → cafe), entfernt optional Füll-Stoppwörter, erzwingt eine saubere Maximallänge ohne Worttrennung mitten im Wort und zeigt vollständige URLs in der Vorschau.',
  },
  'keyword-density-checker': {
    slug: 'keyword-dichte-pruefer',
    name: 'Keyword-Dichte- & Content-Analysator',
    shortDescription:
      'Prüfe Wortanzahl, Ziel-Keyword-Dichte, Lesezeit und die Häufigkeit der wichtigsten 1-, 2- und 3-Wort-Phrasen lokal.',
    keywords: [
      'keyword dichte prüfen',
      'seo content analysator',
      'n-gramm häufigkeit analysator',
      'phrasen wiederholung audit',
      'keyword dichte online prüfen',
      'content keyword häufigkeit tool',
      'seo text analysator kostenlos',
      'ziel keyword dichte rechner',
      'bigramm trigramm analysator',
    ],
    seo: {
      title: 'Keyword-Dichte-Prüfer – Content-Audit online | UtilityFlow',
      description:
        'Füge einen Artikeltentwurf oder HTML ein, um Wortanzahl, Lesezeit, Ziel-Keyword-Dichte und die häufigsten 1-, 2- und 3-Wort-Phrasen zu prüfen – im Browser.',
      primaryKeyword: 'keyword dichte prüfen',
      secondaryKeywords: [
        'seo text häufigkeit analysator',
        '2 wort 3 wort n-gramm zähler',
        'keyword wiederholung online prüfen',
        'ziel keyword dichte rechner',
      ],
      longTailKeywords: [
        'eingefügten html content auf keyword dichte analysieren ohne upload',
        'übermäßig genutzte 2 wort und 3 wort phrasen im blogentwurf finden',
        'ziel keyword häufigkeit sauber im browser prüfen',
        'keyword dichte eines blogentwurfs online prüfen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Untersuche Content-Entwürfe oder eingefügtes HTML auf Wortschatztiefe, Lesezeit, exakte Treffer der Zielphrase und die häufigsten 1-Wort-, 2-Wort- und 3-Wort-N-Gramme – entwickelt, um versehentliche Überwiederholung zu erkennen, statt veraltete Keyword-Quoten zu jagen.',
  },
  'canonical-hreflang-generator': {
    slug: 'canonical-hreflang-ersteller',
    name: 'Canonical-, Hreflang- & 301-Weiterleitungs-Generator',
    shortDescription:
      'Erstelle HTML-/XML-Hreflang- & Canonical-Tags oder 301-Weiterleitungen für Cloudflare Pages _redirects, Apache und Nginx.',
    keywords: [
      'hreflang generator',
      'canonical tag erstellen',
      '301 weiterleitung generator',
      'cloudflare _redirects erstellen',
      'canonical url generator',
      'hreflang tag generator',
      'mehrsprachige seo tags',
      '301 redirect regeln generator',
      'apache htaccess weiterleitung',
    ],
    seo: {
      title: 'Canonical & Hreflang – 301-Weiterleitungen | UtilityFlow',
      description:
        'Erstelle Hreflang- und Canonical-Tags für mehrsprachige Seiten plus 301-Weiterleitungsregeln für Cloudflare Pages, Apache und Nginx – kopierfertig zum Einsatz.',
      primaryKeyword: 'canonical hreflang',
      secondaryKeywords: [
        'canonical link tag generator',
        '301 weiterleitung config erstellen',
        'cloudflare pages redirects generator',
        'canonical url generator',
      ],
      longTailKeywords: [
        'hreflang html tags und xml sitemap xhtml links erstellen',
        'alte url liste in cloudflare pages _redirects 301 regeln umwandeln',
        'apache htaccess und nginx 301 weiterleitungen online erstellen',
        'x-default hreflang tag für internationale seiten erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erledige zwei wichtige technische SEO-Migrationen an einem Ort: Erstelle mehrregionale Hreflang- + Canonical-Annotationen (sowohl für HTML-<head> als auch für XML-Sitemaps) oder wandle URL-Mapping-Listen in sofort einsetzbare 301-Weiterleitungs-Configs für Cloudflare Pages, Apache und Nginx um.',
  },
  'on-page-seo-checker': {
    slug: 'on-page-seo-pruefer',
    name: 'HTML-On-Page-SEO-Audit-Prüfer',
    shortDescription:
      'Prüfe eingefügten HTML-Quelltext lokal mit DOMParser auf Titellänge, Meta-Description, H1–H4-Hierarchie, Alt-Texte und JSON-LD.',
    keywords: [
      'on page seo checker',
      'html seo analysator',
      'überschriften hierarchie prüfen',
      'bild alt audit tool',
      'seo audit tool kostenlos',
      'meta description länge prüfen',
      'title tag länge prüfen',
      'html seo tag prüfen',
      'json-ld prüfen',
    ],
    seo: {
      title: 'On-Page-SEO-Prüfer – HTML-Audit-Tool | UtilityFlow',
      description:
        'Füge beliebigen Seiten-HTML-Quelltext ein, um Titel, Meta-Description, Überschriften, Canonical, Bild-Alt-Texte, Links und JSON-LD zu prüfen – kostenlos.',
      primaryKeyword: 'on page seo prüfer',
      secondaryKeywords: [
        'html quelltext seo audit',
        'h1 h2 überschriften struktur prüfen',
        'fehlende bild alt attribute prüfen',
        'meta description länge prüfen',
      ],
      longTailKeywords: [
        'eingefügten html quelltext auf on page seo tags offline prüfen',
        'überschriften h1 bis h4 und canonical link in html prüfen',
        'clientseitiger seo dom inspector ohne externes crawling',
        'html quelltext einfügen titel meta description überschriften prüfen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Führe eine sofortige technische & On-Page-SEO-Prüfung auf DOM-Ebene für jeden eingefügten HTML-Quelltext („Seitenquelltext anzeigen“) direkt in deinem Browser durch – mit Prüfung von <title>, Meta-Description, Canonicals, H1–H4-Überschriftenhierarchie, fehlenden Bild-Alt-Texten, internen/externen Links, Open Graph und JSON-LD.',
  },
  'robots-meta-tag-generator': {
    slug: 'robots-meta-tag-ersteller',
    name: 'Robots-Meta-Tag- & X-Robots-Tag-Generator',
    shortDescription:
      'Erstelle feingranulare Noindex-, Nofollow-, Noarchive-, Max-Snippet-, Max-Image-Preview- und Cloudflare-_headers-Regeln.',
    keywords: [
      'robots meta tag generator',
      'x-robots-tag erstellen',
      'noindex nofollow meta tag',
      'max-image-preview large tag',
      'noindex tag generator',
      'meta robots tag erstellen',
      'robots header generator',
      'cloudflare _headers generator',
      'nosnippet meta tag',
    ],
    seo: {
      title: 'Robots-Meta-Tag-Generator – Noindex & Co. | UtilityFlow',
      description:
        'Erstelle HTML-Robots-Meta-Tags und X-Robots-Tag-Header mit Noindex, Nofollow, Max-Snippet und Max-Image-Preview – plus Cloudflare-_headers für jeden Pfad.',
      primaryKeyword: 'robots meta tag generator',
      secondaryKeywords: [
        'x-robots-tag header generator',
        'noindex meta tag erstellen',
        'google max-image-preview large',
        'noindex tag generator',
      ],
      longTailKeywords: [
        'x-robots-tag noindex header für pdf dateien auf cloudflare pages erstellen',
        'meta robots tag mit max-snippet und max-image-preview large erstellen',
        'unterschied zwischen robots.txt und meta robots noindex',
        'robots meta tag mit noindex nofollow und max-snippet erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle präzise Crawler-Anweisungen auf Seitenebene – inklusive index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet und max-image-preview:large – gleichzeitig als HTML-<meta name="robots">-Tags, HTTP-X-Robots-Tag-Header und Cloudflare-Pages-_headers-Blöcke.',
  },
  'image-compressor': {
    slug: 'bild-kompressor',
    name: 'Bild-Kompressor',
    shortDescription:
      'Komprimiere PNG-, JPG- und WebP-Bilder lokal per HTML5 Canvas – mit eigenen Qualitätsreglern, maximaler Breite und sofortiger Byte-Ersparnis.',
    keywords: [
      'bild komprimieren',
      'bild online komprimieren',
      'bilddateigröße verringern',
      'webp bild optimierer',
      'png komprimieren kleinere größe',
      'jpg dateigröße online verringern',
      'bildgröße verkleinern kostenlos',
      'bilder für web optimieren',
      'foto dateigröße verkleinern',
    ],
    seo: {
      title: 'Bild-Kompressor – PNG, JPG & WebP verkleinern | UtilityFlow',
      description:
        'Komprimiere Bilder in deinem Browser mit dem Bild-Kompressor. Stelle Qualität ein, begrenze die Breite, vergleiche Vorher-Nachher-Größen und lade herunter.',
      primaryKeyword: 'bild kompressor',
      secondaryKeywords: [
        'png jpg webp online komprimieren',
        'foto dateigröße kostenlos verringern',
        'clientseitiger bild optimierer',
        'bildgröße für website verkleinern',
      ],
      longTailKeywords: [
        'große bilder für web core vitals ohne server upload komprimieren',
        'jpg foto in leichtes webp format umwandeln und verkleinern',
        'maximale breite begrenzen und bildqualität offline optimieren',
        'bilddateigröße vor e-mail anhang verringern',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Verkleinere schwere PNG-, JPG- und WebP-Dateien für schnellere Ladezeiten und kleinere E-Mail-Anhänge direkt in deinem Browser – passe die verlustbehaftete Kompressionsqualität an, wende optionale Breitenlimits an und vergleiche die exakte Byte-Ersparnis ohne einen einzigen Remote-Datei-Upload.',
  },
  'image-resizer': {
    slug: 'bild-groesse-anpassen',
    name: 'Bildgrößen-Anpasser & Zuschneider',
    shortDescription:
      'Skaliere Bilder auf exakte Pixelmaße oder Social-/OG-Vorlagen – mit Seitenverhältnis-Sperre, intelligentem Center-Cover-Zuschnitt und PNG-/JPG-/WebP-Export.',
    keywords: [
      'bild größe ändern',
      'bild pixelgröße ändern',
      'bild zuschneiden online',
      'og bild 1200x630 erstellen',
      'bild online verkleinern kostenlos',
      'bild abmessungen ändern',
      'bild für instagram größe ändern',
      'bild auf größe zuschneiden',
      'bild auf 1200x630 ändern',
    ],
    seo: {
      title: 'Bildgröße anpassen – Exakte Pixel, Zuschnitt | UtilityFlow',
      description:
        'Passe Fotos mit dem Bildgrößen-Anpasser auf exakte Pixel an. Sperre das Seitenverhältnis, schneide per Cover-Zuschnitt zu und exportiere PNG, JPG oder WebP.',
      primaryKeyword: 'bildgröße anpassen',
      secondaryKeywords: [
        'foto auf exakte pixel skalieren',
        'seitenverhältnis cover zuschnitt tool',
        'social media bildgröße vorlage',
        'bild für social media größe ändern',
      ],
      longTailKeywords: [
        'bild auf 1200x630 open graph maße skalieren ohne verzerrung',
        'foto mittig auf quadrat 1080x1080 zuschneiden lokal',
        'bild pixelbreite und höhe im browser kostenlos ändern',
        'hochformat foto auf 1080x1080 quadrat für instagram skalieren',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Skaliere Grafiken und Fotos auf exakte Pixelmaße – oder klicke integrierte Vorlagen für Open Graph (1200×630), YouTube HD (1280×720), Quadrat (1080×1080) und Avatar (512×512) – mit hochwertigem Canvas-Resampling und optionalem Center-Cover-Zuschnitt, um Verzerrungen zu vermeiden.',
  },
  'image-format-converter': {
    slug: 'bildformat-konverter',
    name: 'Bildformat-Konverter (PNG / JPG / WebP)',
    shortDescription:
      'Wandle PNG-, JPG-, WebP-, GIF- und SVG-Bilder stapelweise in PNG, JPG oder WebP um – lokal, mit Qualitätskontrolle und eigener JPEG-Hintergrundfüllung.',
    keywords: [
      'bildformat konverter',
      'png zu webp konverter',
      'webp zu png konverter',
      'svg zu png browser konverter',
      'jpg zu png umwandeln',
      'png zu jpg umwandeln',
      'bild konverter stapel',
      'webp zu jpg konverter',
      'bild konverter online kostenlos',
    ],
    seo: {
      title: 'Bildformat-Konverter – PNG, JPG & WebP | UtilityFlow',
      description:
        'Wandle Bilder mit dem Bildformat-Konverter zwischen PNG, JPG und WebP um. Wandle stapelweise um, stelle die Qualität ein und fülle transparente Hintergründe.',
      primaryKeyword: 'bildformat konverter',
      secondaryKeywords: [
        'webp zu jpg oder png umwandeln',
        'png zu webp stapel konverter',
        'transparentes png zu jpg hintergrundfüllung',
        'jpg zu png kostenlos umwandeln',
      ],
      longTailKeywords: [
        'mehrere png und jpg bilder stapelweise zu webp offline umwandeln',
        'webp screenshot zu standard png ohne upload umwandeln',
        'transparenten png hintergrund bei jpg umwandlung farbig füllen',
        'bildformat von png zu jpg im browser ändern',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Wandle PNG-, JPG-, WebP-, GIF- und SVG-Dateien stapelweise in webtaugliches WebP, universelles JPG oder verlustfreies transparentes PNG um – komplett in deinem Browser, mit eigener Hintergrund-Matte-Füllung beim Abflachen von Transparenz zu JPEG.',
  },
  'image-rotate-flip': {
    slug: 'bild-drehen-spiegeln',
    name: 'Bild drehen, spiegeln & filtern',
    shortDescription:
      'Drehe Bilder um 90°/180°/270°, spiegle sie horizontal oder vertikal und wende Graustufen-, Helligkeits- und Kontrastfilter live in deinem Browser an.',
    keywords: [
      'bild online drehen',
      'bild horizontal spiegeln',
      'graustufen bild filter',
      'bild helligkeit kontrast anpassen',
      'foto 90 grad drehen',
      'foto online spiegeln',
      'bild spiegeln online',
      'bild gerade ausrichten online',
      'foto filter editor online',
    ],
    seo: {
      title: 'Bild drehen & spiegeln – Filter online | UtilityFlow',
      description:
        'Drehe Bilder online um 90, 180 oder 270 Grad, spiegle Fotos horizontal oder vertikal und passe Helligkeit, Kontrast und Graustufen an – kostenlos im Browser.',
      primaryKeyword: 'bild online drehen',
      secondaryKeywords: [
        'bild horizontal vertikal spiegeln',
        'foto zu graustufen online umwandeln',
        'helligkeit und kontrast im browser anpassen',
        'foto 90 grad online drehen',
      ],
      longTailKeywords: [
        'seitliches foto 90 grad offline im browser drehen',
        'selfie bild horizontal spiegeln ohne photoshop',
        'schwarz weiß graustufen filter anwenden und png exportieren',
        'gescanntes dokument bild in richtige ausrichtung drehen',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Korrigiere seitliche Ausrichtung, spiegle Selfies horizontal oder vertikal, wandle Fotos in Schwarz-Weiß-Graustufen um und feinjustiere Helligkeit und Kontrast in Echtzeit mit lokalen HTML5-Canvas-2D-Transformationen.',
  },
  'image-to-base64': {
    slug: 'bild-zu-base64-konverter',
    name: 'Bild-zu-Base64- & Data-URI-Konverter',
    shortDescription:
      'Kodiere PNG-, JPG-, WebP-, SVG- und ICO-Bilder in Base64-Data-URIs, HTML-<img>-Tags und CSS-Regeln – oder dekodiere Base64-Strings zurück in Vorschauen.',
    keywords: [
      'bild zu base64',
      'base64 bild decoder',
      'data uri generator',
      'css hintergrund base64 bild',
      'bild zu data uri umwandeln',
      'base64 encoder bild',
      'bild zu base64 online kostenlos',
      'png zu base64 kodieren',
      'base64 zu bild konverter',
    ],
    seo: {
      title: 'Bild zu Base64 – Data-URI-Konverter online | UtilityFlow',
      description:
        'Erstelle mit dem Bild-zu-Base64-Konverter kostenlos Data-URIs, HTML-img-Tags und CSS-Hintergrund-Snippets – oder dekodiere Base64 zurück in eine Bildvorschau.',
      primaryKeyword: 'bild zu base64',
      secondaryKeywords: [
        'data uri bild encoder',
        'base64 zu bild vorschau',
        'svg oder png inline in css',
        'bild zu base64 online kostenlos',
      ],
      longTailKeywords: [
        'png icon zu css background-image data uri offline umwandeln',
        'rohen base64 string in herunterladbare bildvorschau dekodieren',
        'bild binärgröße mit base64 string größe vergleichen',
        'kleines logo bild zu base64 für html e-mail kodieren',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Verwandle kleine Icons, Logos und E-Mail-Grafiken in eigenständige data:image/...;base64,...-URIs, kopierfertige HTML-<img>-Tags und CSS-background-image-Deklarationen – oder wechsle den Modus, um rohe Base64-Bild-Payloads zu inspizieren und herunterzuladen.',
  },
  'color-contrast-checker': {
    slug: 'farbkontrast-pruefer',
    name: 'Farbkontrast-Prüfer & Paletten-Extraktor',
    shortDescription:
      'Teste WCAG-2.1-AA-/AAA-Farbkontrastverhältnisse, wandle HEX-/RGB-/HSL-Werte um und extrahiere dominante Farbpaletten aus hochgeladenen Bildern.',
    keywords: [
      'wcag farbkontrast prüfen',
      'barrierefreiheit kontrastverhältnis',
      'bild farbpalette extrahieren',
      'hex rgb hsl farbwähler',
      'wcag aa kontrastverhältnis rechner',
      'aaa kontrast prüfen online',
      'barrierefreie farbkombinationen',
      'text hintergrund kontrast test',
      'design barrierefreiheit prüfen',
    ],
    seo: {
      title: 'Farbkontrast-Prüfer – WCAG 2.1 AA/AAA | UtilityFlow',
      description:
        'Prüfe WCAG-2.1-AA- und AAA-Kontrastverhältnisse für Text- und Hintergrund-Farbpaare, wandle HEX, RGB und HSL um und extrahiere Paletten aus Bildern – kostenlos.',
      primaryKeyword: 'farbkontrast prüfer',
      secondaryKeywords: [
        'wcag aa aaa kontrastverhältnis rechner',
        'farbpalette aus bild extrahieren',
        'barrierefreier text hintergrund farb prüfer',
        'wcag kontrastverhältnis normaler und großer text',
      ],
      longTailKeywords: [
        'wcag 2.1 kontrastverhältnis normaler und großer text online testen',
        'dominante hex farbfelder aus screenshot in kontrast prüfer ziehen',
        'dark mode ui vordergrund hintergrund farb barrierefreiheit prüfen',
        'welches kontrastverhältnis besteht wcag aa für fließtext',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Validiere UI-Farbpaarungen anhand offizieller WCAG-2.1-Schwellenwerte für relative Luminanz und Kontrast (AA 4,5:1, AA Groß 3,0:1, AAA 7,0:1), bearbeite synchronisierte HEX-/RGB-/HSL-Werte und lade Screenshots oder Logos hoch, um dominante HEX-Farbfelder direkt in deinen Vordergrund- oder Hintergrund-Slot zu ziehen.',
  },
  'qr-code-scanner': {
    slug: 'qr-code-leser',
    name: 'QR-Code-Leser & vCard-QR-Studio',
    shortDescription:
      'Dekodiere QR-Codes aus hochgeladenen Bildern oder deiner Gerätekamera privat im Browser oder erstelle herunterladbare PNG-/SVG-vCard-Kontakt-QR-Codes.',
    keywords: [
      'qr code scanner online',
      'qr code aus bild dekodieren',
      'vcard qr code generator',
      'kamera qr leser browser',
      'qr code aus screenshot scannen',
      'qr code leser ohne app',
      'qr code png jpg dekodieren',
      'wifi qr code scanner',
      'qr code payload leser',
    ],
    seo: {
      title: 'QR-Code-Leser – QR-Bilder & vCards dekodieren | UtilityFlow',
      description:
        'Scanne und dekodiere QR-Codes aus Screenshots, Fotos oder deiner Webcam im Browser oder erstelle einen herunterladbaren vCard-Kontakt-QR-Code als PNG und SVG.',
      primaryKeyword: 'qr code leser',
      secondaryKeywords: [
        'qr code bild leser online',
        'qr aus screenshot kostenlos scannen',
        'vcard kontakt qr code erstellen',
        'webcam qr code leser browser',
      ],
      longTailKeywords: [
        'qr code aus hochgeladenem png oder jpg screenshot offline dekodieren',
        'qr code mit laptop webcam ohne app installation scannen',
        'herunterladbaren vcard 3.0 kontakt qr code svg und png erstellen',
        'invertierten dark mode qr code aus screenshot lesen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lies QR-Code-Inhalte aus Screenshots, Fotos oder einem optionalen Live-Kamerastream direkt in deinem Browser – mit automatischer Payload-Klassifizierung (URL, WLAN, vCard, Text) – plus einem begleitenden vCard-Kontakt-QR-Builder, der scharfe PNG- und SVG-Kontaktkarten exportiert.',
  },
  'password-generator': {
    slug: 'passwort-generator',
    name: 'Kryptografischer Passwort- & Passphrasen-Generator',
    shortDescription:
      'Erstelle unverzerrte Zufallspasswörter und Diceware-Passphrasen mit crypto.getRandomValues-Rejection-Sampling und exakter Entropieberechnung.',
    keywords: [
      'kryptografischer passwort generator',
      'sicheres zufallspasswort generator',
      'diceware passphrasen generator',
      'crypto getrandomvalues passwort',
      'starkes passwort erstellen online',
      'zufälliger passphrasen generator',
      'passwort entropie prüfen',
      'sicheres passwort kostenlos erstellen',
      'unverzerrtes zufallspasswort tool',
    ],
    seo: {
      title: 'Passwort-Generator – Sichere Passwörter | UtilityFlow',
      description:
        'Erstelle Zufallspasswörter und Diceware-Passphrasen lokal in deinem Browser mit Web Crypto, exakter Entropiebewertung und ohne Speicherung oder Uploads.',
      primaryKeyword: 'passwort generator',
      secondaryKeywords: [
        'kryptografisch sicheres passwort erstellen',
        'merkbare passphrasen generator online',
        'passwort entropie rechner',
        'zufallspasswort mit symbolen erstellen',
      ],
      longTailKeywords: [
        'zufallspasswort mit crypto getrandomvalues ohne modulo bias erstellen',
        '5 wort diceware passphrasen lokal offline erstellen',
        'mehrdeutige zeichen 0 o 1 l i passwort generator ausschließen',
        'wie viele entropie bits hat ein 18 zeichen passwort',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Erstelle Passwörter mit hoher Entropie und merkbare mehrwortige Passphrasen zu 100 % lokal mit dem hardwaregestützten CSPRNG deines Browsers (window.crypto.getRandomValues) – mit Rejection-Sampling zur Beseitigung von Modulo-Bias und Fisher-Yates-Shuffling, um vorhersehbare Zeichenpositionen zu verhindern.',
  },
  'file-hash-verifier': {
    slug: 'datei-hash-pruefer',
    name: 'Datei-Hash- & Checksummen-Prüfer',
    shortDescription:
      'Berechne lokale SHA-256-, SHA-512-, SHA-384- und SHA-1-Checksummen von Binärdateien per Web Crypto SubtleCrypto und verifiziere Downloads anhand veröffentlichter Hashes.',
    keywords: [
      'datei hash prüfen',
      'sha256 datei checksumme prüfen',
      'heruntergeladene datei hash online verifizieren',
      'sha512 datei hash generator',
      'sha256 checksumme rechner',
      'datei integrität online prüfen',
      'datei checksumme vergleichen',
      'sha384 sha1 hash prüfen',
      'iso checksumme im browser verifizieren',
    ],
    seo: {
      title: 'Datei-Hash-Prüfer – SHA-256-Checksummen | UtilityFlow',
      description:
        'Berechne SHA-256-, SHA-512-, SHA-384- und SHA-1-Digests für jede lokale Datei in deinem Browser und vergleiche sie mit Checksummen – ohne Uploads, kostenlos.',
      primaryKeyword: 'datei hash prüfer',
      secondaryKeywords: [
        'sha256 checksumme rechner datei',
        'sha256sum datei online verifizieren',
        'browser subtlecrypto datei digest',
        'sha512 checksumme verifizierer',
      ],
      longTailKeywords: [
        'sha-256 hash heruntergeladenen installers ohne terminal prüfen',
        'datei binär checksumme mit erwartetem sha256sum string vergleichen',
        'sha256 und sha512 lokal ohne datei upload berechnen',
        'linux iso sha256 checksumme im browser verifizieren',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Verifiziere Integrität und Authentizität von Software-Installern, Archiven, Datensätzen und Dokumenten lokal – mit Berechnung von SHA-256-, SHA-512-, SHA-384- und SHA-1-Digests per hardwarebeschleunigtem Web-Crypto-subtle.digest und sofortigem Vergleich mit erwarteten Checksummen.',
  },
  'favicon-generator': {
    slug: 'favicon-ersteller',
    name: 'Favicon- & App-Icon-Generator (.ico & PNG)',
    shortDescription:
      'Erstelle scharfe Multi-Size-PNG-Icons (16×16 bis 512×512) und ein echtes Multi-Frame-Binary-favicon.ico aus einem eigenen Monogramm-Badge oder hochgeladenen Logo.',
    keywords: [
      'favicon generator',
      'favicon.ico online erstellen',
      'apple touch icon generator',
      'text zu favicon monogramm',
      'favicon ico maker kostenlos',
      'pwa icon generator 192 512',
      'website favicon maker',
      'png zu favicon konverter',
      'app icon generator online',
    ],
    seo: {
      title: 'Favicon-Generator – .ico & PNG-App-Icons | UtilityFlow',
      description:
        'Erstelle ein echtes Multi-Frame-favicon.ico plus 16–512px-PNG-, Apple-Touch- und PWA-Icons aus deinem Logo oder einem Monogramm-Badge – kostenlos im Browser.',
      primaryKeyword: 'favicon generator',
      secondaryKeywords: [
        'png zu multi size ico konverter',
        'monogramm favicon erstellen',
        'pwa und apple touch icon generator',
        'favicon ico maker online kostenlos',
      ],
      longTailKeywords: [
        'echtes binary favicon.ico mit 16x16 32x32 48x48 frames kostenlos erstellen',
        'website favicon und html link tags aus text initialen erstellen',
        'quadratisches logo zu rundem apple touch icon 180x180 zuschneiden',
        '192x192 und 512x512 pwa icons für web manifest erstellen',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Designe in Sekunden ein sauberes Monogramm-Icon – oder lade dein bestehendes Markenlogo hoch –, um pixelscharfe 16×16-, 32×32-, 48×48-, 180×180-Apple-Touch- und 192×192-/512×512-PWA-PNG-Assets plus ein standardkonformes Multi-Image-Binary-favicon.ico und einbaufertiges HTML-<link>-Markup zu rendern.',
  },
};
