import type { ToolLocaleOverride } from '../../types';

/**
 * Italian overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Filled by Phase 3 translation. See batch1.ts for the required shape.
 */
export const IT_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'generatore-di-meta-tag',
    name: 'Generatore di Meta Tag e Open Graph',
    shortDescription:
      'Genera tag title, meta description, canonical, robots, Open Graph e Twitter/X Card con anteprima live della scheda social.',
    keywords: [
      'generatore di meta tag',
      'generatore open graph',
      'generatore twitter card',
      'tag seo html',
      'meta tag open graph',
      'generatore di meta tag seo',
      'generatore di meta description',
      'creatore di meta tag html',
      'meta tag per social media',
    ],
    seo: {
      title: 'Generatore di Meta Tag – Open Graph e Twitter | UtilityFlow',
      description:
        'Crea tag title, description, canonical, Open Graph e Twitter Card puliti, con controllo della lunghezza in tempo reale e anteprima della scheda social — gratis.',
      primaryKeyword: 'generatore di meta tag',
      secondaryKeywords: [
        'generatore di tag open graph',
        'generatore di meta tag per social',
        'creatore di tag seo per head html',
        'generatore di meta tag twitter card',
      ],
      longTailKeywords: [
        'genera tag meta html open graph e twitter card gratis',
        'controlla lunghezza di title e meta description con anteprima',
        'scarica tag meta seo pronti da incollare gratis',
        'crea meta tag per sito web con anteprima open graph',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Componi metadati HTML conformi agli standard per il <head> — <title>, <meta name="description">, URL canonici, direttive di indicizzazione, tag Open Graph (og:*) e markup Twitter/X Card — con escape degli attributi e anteprima live della scheda social.',
  },
  'serp-snippet-preview': {
    slug: 'anteprima-snippet-serp',
    name: 'Anteprima Snippet SERP',
    shortDescription:
      'Simula i risultati di ricerca Google su desktop e mobile con controllo reale della larghezza in pixel del titolo tramite Canvas e parole chiave in grassetto.',
    keywords: [
      'anteprima serp',
      'simulatore snippet google',
      'controllo larghezza pixel titolo seo',
      'anteprima meta description',
      'anteprima serp google',
      'strumento anteprima risultati ricerca',
      'controllo snippet seo',
      'controllo titolo google',
      'controllo lunghezza meta description',
    ],
    seo: {
      title: 'Anteprima Snippet SERP – Larghezza in Pixel | UtilityFlow',
      description:
        'Visualizza in anteprima lo snippet Google su desktop e mobile con controllo della larghezza in pixel del titolo, parole in grassetto e avvisi di troncamento.',
      primaryKeyword: 'anteprima snippet serp',
      secondaryKeywords: [
        'simulatore serp google',
        'controllo larghezza pixel titolo seo',
        'anteprima risultati ricerca mobile',
        'strumento anteprima serp desktop',
      ],
      longTailKeywords: [
        'controlla larghezza pixel 580px del titolo seo google online',
        'anteprima troncamento snippet desktop e mobile',
        'verifica parole chiave in grassetto nella meta description',
        'anteprima snippet ricerca google prima di pubblicare',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Misura se il tuo titolo SEO entra nel budget di visualizzazione di Google di circa 580 px usando il calcolo live delle metriche dei caratteri con HTML5 Canvas invece di indovinare solo dai caratteri, e visualizza in anteprima le schede di ricerca desktop e mobile con parole chiave in grassetto.',
  },
  'xml-sitemap-generator': {
    slug: 'generatore-di-sitemap-xml',
    name: 'Generatore di Sitemap XML',
    shortDescription:
      'Genera file XML di sitemap validi secondo Sitemaps.org da elenchi di URL, con deduplicazione, <lastmod>, <changefreq> e download in .xml.',
    keywords: [
      'generatore sitemap xml',
      'creatore sitemap.xml',
      'crea sitemap xml online',
      'creatore sitemap seo',
      'generatore sitemap gratis',
      'creatore sitemap xml online',
      'genera sitemap.xml',
      'strumento crea sitemap',
      'generatore sitemap sito web',
    ],
    seo: {
      title: 'Generatore di Sitemap XML – File Sitemap.xml | UtilityFlow',
      description:
        'Trasforma un elenco di URL canonici in una sitemap.xml valida con deduplicazione, date lastmod, suggerimenti changefreq ed escape XML — gratis, nel browser.',
      primaryKeyword: 'generatore sitemap xml',
      secondaryKeywords: [
        'creatore sitemap xml',
        'crea sitemap.xml gratis',
        'strumento sitemap url canonici',
        'generatore file sitemap.xml',
      ],
      longTailKeywords: [
        'genera sitemap xml valida da elenco di url offline',
        'crea sitemap.xml con tag lastmod e changefreq',
        'escape caratteri speciali negli url della sitemap xml',
        'crea sitemap xml per sito piccolo gratis online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Trasforma qualsiasi elenco di URL canonici https:// in una sitemap.xml valida conforme allo schema Sitemaps 0.9 — con filtro degli URL non validi, deduplicazione automatica, escape dei caratteri XML ed esportazione in .xml.',
  },
  'robots-txt-generator': {
    slug: 'generatore-di-robots-txt',
    name: 'Generatore di Robots.txt',
    shortDescription:
      'Crea regole robots.txt valide raggruppate per User-agent con percorsi Allow/Disallow, Crawl-delay e direttive Sitemap.',
    keywords: [
      'generatore robots.txt',
      'crea robots txt',
      'creatore allow disallow crawler',
      'generatore direttiva sitemap',
      'creatore robots txt online',
      'generatore file robots.txt',
      'blocca crawler di ricerca',
      'allow disallow robots txt',
      'crea file robots.txt gratis',
    ],
    seo: {
      title: 'Generatore di Robots.txt – Regole per Crawler | UtilityFlow',
      description:
        'Crea un robots.txt valido con gruppi User-agent, regole Allow e Disallow, crawl-delay e link sitemap usando preset di partenza gratuiti — gratis, nel browser.',
      primaryKeyword: 'generatore robots.txt',
      secondaryKeywords: [
        'creatore robots txt',
        'disallow percorsi crawler',
        'robots.txt wordpress e spa',
        'creatore file robots.txt',
      ],
      longTailKeywords: [
        'genera robots.txt pulito per react vite e cloudflare pages',
        'aggiungi più direttive sitemap al file robots.txt',
        'blocca ambiente staging dai crawler con robots.txt',
        'crea robots.txt per bloccare crawler ia dal sito',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crea direttive robots.txt pulite e raggruppate usando preset di partenza per siti aperti, app web SaaS, WordPress o blocco totale dello staging — con supporto per righe User-agent personalizzate, Allow/Disallow, Crawl-delay e dichiarazioni Sitemap:.',
  },
  'schema-markup-generator': {
    slug: 'generatore-di-dati-strutturati',
    name: 'Generatore di Dati Strutturati (JSON-LD)',
    shortDescription:
      'Genera script JSON-LD validi di Schema.org per markup Article, FAQPage, Product, Organization e BreadcrumbList.',
    keywords: [
      'generatore dati strutturati',
      'generatore json ld',
      'generatore schema faq',
      'creatore dati strutturati',
      'generatore dati strutturati schema',
      'strumento json-ld schema.org',
      'generatore schema rich snippet',
      'generatore schema faqpage',
      'markup schema prodotto',
    ],
    seo: {
      title: 'Generatore di Dati Strutturati – JSON-LD SEO | UtilityFlow',
      description:
        'Crea JSON-LD Schema.org validi per Article, FAQPage, Product, Organization e BreadcrumbList con escape HTML sicuro, copia dello script ed export .jsonld.',
      primaryKeyword: 'generatore dati strutturati',
      secondaryKeywords: [
        'generatore json-ld online',
        'strumento dati strutturati faqpage',
        'creatore schema prodotto',
        'strumento markup dati strutturati',
      ],
      longTailKeywords: [
        'genera script tag json-ld schema.org valido gratis',
        'crea dati strutturati faqpage e breadcrumb dinamici',
        'escape json-ld in sicurezza per tag script html',
        'crea markup schema json-ld per articoli e prodotti',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crea blocchi puliti di dati strutturati JSON-LD di Schema.org per Article, FAQPage, Product, Organization e BreadcrumbList — con costruttori di righe dinamiche, escape HTML sicuro di < dentro i tag script ed esportazione in .jsonld.',
  },
  'url-slug-generator': {
    slug: 'generatore-di-slug-url',
    name: 'Generatore di Slug URL',
    shortDescription:
      'Converti i titoli degli articoli in slug URL SEO puliti, con traslitterazione degli accenti, in batch e con filtro delle stop word.',
    keywords: [
      'generatore slug url',
      'creatore slug seo',
      'generatore permalink puliti',
      'convertitore slug in batch',
      'generatore url seo friendly',
      'convertitore titolo blog in slug',
      'creatore slug permalink',
      'rimuovi stop word dagli url',
      'convertitore accenti in slug ascii',
    ],
    seo: {
      title: 'Generatore di Slug URL – Permalink SEO Puliti | UtilityFlow',
      description:
        'Trasforma i titoli degli articoli in slug SEO minuscoli e puliti in blocco, con traslitterazione degli accenti, rimozione stop word e troncamento pulito.',
      primaryKeyword: 'generatore slug url',
      secondaryKeywords: [
        'generatore url seo friendly',
        'titoli in slug in batch',
        'pulizia slug da stop word',
        'creatore slug permalink',
      ],
      longTailKeywords: [
        'converti titoli blog in slug url seo puliti in blocco',
        'traslittera caratteri accentati in slug url ascii',
        'tronca slug url lunghi su confini di parola puliti',
        'genera permalink puliti senza stop word online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Standardizza permalink leggibili e separati da trattini per singoli post o interi calendari editoriali. Traslittera i segni diacritici in modo pulito (Café → cafe), rimuove opzionalmente le stop word di riempimento, applica una lunghezza massima pulita senza tagli a metà parola e mostra in anteprima gli URL completi.',
  },
  'keyword-density-checker': {
    slug: 'verificatore-di-densita-parole-chiave',
    name: 'Verificatore di Densità delle Parole Chiave',
    shortDescription:
      'Verifica conteggio parole, densità della parola chiave di destinazione, tempo di lettura e frequenza delle frasi di 1, 2 e 3 parole in locale.',
    keywords: [
      'verificatore densità parole chiave',
      'analizzatore contenuti seo',
      'analizzatore frequenza n-grammi',
      'verifica ripetizione frasi',
      'controlla densità parole chiave online',
      'strumento frequenza parole chiave',
      'analizzatore testo seo gratis',
      'calcolatore densità parola chiave',
      'analizzatore bigrammi trigrammi',
    ],
    seo: {
      title: 'Verificatore di Densità delle Parole Chiave | UtilityFlow',
      description:
        'Incolla bozza o HTML per controllare conteggio parole, tempo di lettura, densità della parola chiave e frasi di 1, 2 e 3 parole — in privato, nel browser.',
      primaryKeyword: 'verificatore densità parole chiave',
      secondaryKeywords: [
        'analizzatore frequenza testo seo',
        'contatore n-grammi 2 3 parole',
        'controlla ripetizione parole chiave online',
        'calcolatore densità parola chiave',
      ],
      longTailKeywords: [
        'analizza html incollato per densità parole chiave senza upload',
        'trova frasi di 2 e 3 parole abusate nella bozza blog',
        'controlla frequenza parola chiave nel browser gratis',
        'come controllare densità parole chiave di una bozza blog',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ispeziona bozze di contenuti o HTML incollato per profondità del vocabolario, tempo di lettura, occorrenze esatte della frase di destinazione e frequenze dei principali n-grammi di 1, 2 e 3 parole — progettato per individuare ripetizioni accidentali piuttosto che inseguire quote di parole chiave obsolete.',
  },
  'canonical-hreflang-generator': {
    slug: 'generatore-di-canonical-e-hreflang',
    name: 'Generatore di Canonical, Hreflang e Redirect 301',
    shortDescription:
      'Genera tag hreflang e canonical HTML/XML o compila redirect 301 per Cloudflare Pages _redirects, Apache e Nginx.',
    keywords: [
      'generatore hreflang',
      'creatore tag canonical',
      'generatore redirect 301',
      'creatore _redirects cloudflare',
      'generatore url canonici',
      'generatore tag hreflang',
      'tag seo multilingue',
      'generatore regole redirect 301',
      'creatore redirect htaccess apache',
    ],
    seo: {
      title: 'Generatore di Canonical, Hreflang e Redirect | UtilityFlow',
      description:
        'Genera tag hreflang e canonical per pagine multilingue, più regole di redirect 301 per Cloudflare Pages, Apache e Nginx — pronti da copiare e distribuire.',
      primaryKeyword: 'generatore hreflang',
      secondaryKeywords: [
        'generatore tag link canonical',
        'creatore configurazione redirect 301',
        'generatore redirect cloudflare pages',
        'generatore url canonici',
      ],
      longTailKeywords: [
        'genera tag hreflang html e link xhtml sitemap xml',
        'converti elenco url vecchi in regole 301 _redirects cloudflare',
        'crea redirect 301 htaccess apache e nginx online',
        'genera tag hreflang x-default per pagine internazionali',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Gestisci in un unico posto due migrazioni SEO tecniche essenziali: genera annotazioni hreflang multiregione + canonical (sia per <head> HTML sia per sitemap XML), oppure converti elenchi di mapping URL in configurazioni di redirect 301 pronte da distribuire per Cloudflare Pages, Apache e Nginx.',
  },
  'on-page-seo-checker': {
    slug: 'verificatore-seo-on-page',
    name: 'Verificatore SEO On-Page del Codice HTML',
    shortDescription:
      'Verifica il sorgente HTML incollato in locale con DOMParser per lunghezza del titolo, meta description, gerarchia H1–H4, alt text e JSON-LD.',
    keywords: [
      'verificatore seo on page',
      'analizzatore seo html',
      'controllo gerarchia titoli',
      'verifica alt immagini',
      'strumento audit seo gratis',
      'controllo lunghezza meta description',
      'controllo lunghezza title tag',
      'controllo tag seo html',
      'controllo json-ld',
    ],
    seo: {
      title: 'Verificatore SEO On-Page – Audit HTML | UtilityFlow',
      description:
        'Incolla il sorgente HTML di una pagina per verificarne titolo, meta description, titoli, canonical, alt immagini, link e JSON-LD — subito, gratis, nel browser.',
      primaryKeyword: 'verificatore seo on page',
      secondaryKeywords: [
        'audit seo sorgente html',
        'controllo struttura titoli h1 h2',
        'controlla attributi alt immagini mancanti',
        'controllo lunghezza meta description',
      ],
      longTailKeywords: [
        'verifica html incollato per tag seo on page offline',
        'controlla struttura titoli h1 h4 e link canonical in html',
        'ispettore seo dom lato client senza scansione esterna',
        'incolla sorgente html per controllare title e meta description',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Esegui un’ispezione SEO tecnica e on-page istantanea a livello DOM su qualsiasi sorgente HTML incollato (Visualizza sorgente pagina) direttamente nel browser — controllando <title>, meta description, canonical, gerarchia dei titoli H1–H4, testo alt delle immagini mancante, link interni ed esterni, Open Graph e JSON-LD.',
  },
  'robots-meta-tag-generator': {
    slug: 'generatore-di-meta-tag-robots',
    name: 'Generatore di Meta Tag Robots e X-Robots-Tag',
    shortDescription:
      'Genera direttive noindex, nofollow, noarchive, max-snippet, max-image-preview e regole _headers per Cloudflare con precisione.',
    keywords: [
      'generatore meta tag robots',
      'creatore x-robots-tag',
      'meta tag noindex nofollow',
      'tag max-image-preview large',
      'generatore tag noindex',
      'creatore meta tag robots',
      'generatore header robots',
      'generatore _headers cloudflare',
      'meta tag nosnippet',
    ],
    seo: {
      title: 'Generatore di Meta Tag Robots e X-Robots-Tag | UtilityFlow',
      description:
        'Crea meta tag robots HTML e header X-Robots-Tag con noindex, nofollow, max-snippet e max-image-preview — più output _headers Cloudflare per ogni percorso.',
      primaryKeyword: 'generatore meta tag robots',
      secondaryKeywords: [
        'generatore header x-robots-tag',
        'creatore meta tag noindex',
        'google max-image-preview large',
        'generatore tag noindex',
      ],
      longTailKeywords: [
        'genera header x-robots-tag noindex per file pdf su cloudflare pages',
        'crea meta tag robots con max-snippet e max-image-preview large',
        'differenza tra robots.txt e meta robots noindex',
        'crea meta tag robots con noindex nofollow e max-snippet',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Genera direttive precise per crawler a livello di pagina — inclusi index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet e max-image-preview:large — contemporaneamente come tag HTML <meta name="robots">, header HTTP X-Robots-Tag e blocchi _headers per Cloudflare Pages.',
  },
  'image-compressor': {
    slug: 'compressore-di-immagini',
    name: 'Compressore di Immagini',
    shortDescription:
      'Comprimi immagini PNG, JPG e WebP in locale tramite HTML5 Canvas con slider di qualità personalizzati, limiti di larghezza massima e metriche istantanee di risparmio in byte.',
    keywords: [
      'compressore immagini',
      'comprimi immagini online',
      'riduci dimensione file immagine',
      'ottimizzatore immagini webp',
      'comprimi png a dimensioni minori',
      'riduci dimensione file jpg online',
      'riduttore dimensioni immagini gratis',
      'ottimizza immagini per web',
      'riduci dimensione file foto',
    ],
    seo: {
      title: 'Compressore di Immagini – PNG, JPG e WebP | UtilityFlow',
      description:
        'Comprimi immagini nel browser: regola la qualità, limita la larghezza massima, confronta le dimensioni prima e dopo e scarica in privato — senza upload.',
      primaryKeyword: 'compressore immagini',
      secondaryKeywords: [
        'comprimi png jpg webp online',
        'riduci dimensione foto gratis',
        'ottimizzatore immagini lato client',
        'riduci dimensioni immagini per sito',
      ],
      longTailKeywords: [
        'comprimi immagini grandi per web core vitals senza upload server',
        'converti e riduci foto jpg in webp leggero',
        'ridimensiona larghezza massima e ottimizza qualità offline',
        'riduci dimensione file immagine prima di allegato email',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Riduci immagini PNG, JPG e WebP pesanti per caricamenti di pagina più rapidi e allegati email più leggeri direttamente nel browser: regola la qualità di compressione lossy, applica limiti opzionali di larghezza e confronta il risparmio esatto in byte senza alcun upload remoto di file.',
  },
  'image-resizer': {
    slug: 'ridimensionatore-di-immagini',
    name: 'Ridimensionatore e Ritagliatore di Immagini',
    shortDescription:
      'Ridimensiona immagini a dimensioni esatte in pixel o preset social e Open Graph con blocco del rapporto d’aspetto, ritaglio cover intelligente al centro ed export PNG, JPG e WebP.',
    keywords: [
      'ridimensionatore immagini',
      'ridimensiona immagine pixel',
      'ritagliatore immagini online',
      'ridimensionatore og 1200x630',
      'ridimensiona immagine online gratis',
      'cambia dimensioni immagine',
      'ridimensiona foto per instagram',
      'ritaglia immagine a misura',
      'ridimensiona immagine a 1200x630',
    ],
    seo: {
      title: 'Ridimensionatore di Immagini – Pixel Esatti | UtilityFlow',
      description:
        'Ridimensiona foto a pixel esatti: usa preset, blocca il rapporto d’aspetto, ritaglia in cover ed esporta PNG, JPG o WebP in privato e gratis, nel browser.',
      primaryKeyword: 'ridimensionatore immagini',
      secondaryKeywords: [
        'ridimensiona foto a pixel esatti',
        'strumento ritaglio cover rapporto aspetto',
        'ridimensionatore preset dimensioni social',
        'ridimensiona immagine per social media',
      ],
      longTailKeywords: [
        'ridimensiona immagine a 1200x630 open graph senza deformare',
        'ritaglio cover centrale foto a quadrato 1080x1080 in locale',
        'cambia larghezza e altezza pixel immagine nel browser gratis',
        'ridimensiona foto ritratto a quadrato 1080x1080 per instagram',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Scala grafiche e fotografie a dimensioni esatte in pixel — oppure fai clic sui preset integrati Open Graph (1200×630), YouTube HD (1280×720), Quadrato (1080×1080) e Avatar (512×512) — usando ricampionamento Canvas di alta qualità e ritaglio Cover al centro opzionale per evitare distorsioni.',
  },
  'image-format-converter': {
    slug: 'convertitore-di-formato-immagine',
    name: 'Convertitore di Formato Immagine (PNG / JPG / WebP)',
    shortDescription:
      'Converti in batch immagini PNG, JPG, WebP, GIF e SVG in PNG, JPG o WebP in locale con controllo della qualità e riempimento di sfondo personalizzato per JPEG.',
    keywords: [
      'convertitore formato immagine',
      'convertitore png webp',
      'convertitore webp png',
      'convertitore svg png browser',
      'converti jpg in png',
      'converti png in jpg',
      'convertitore immagini in batch',
      'convertitore webp jpg',
      'convertitore immagini online gratis',
    ],
    seo: {
      title: 'Convertitore di Formato Immagine – PNG e JPG | UtilityFlow',
      description:
        'Converti immagini tra PNG, JPG e WebP: converti in batch, imposta la qualità JPG e riempi gli sfondi trasparenti prima di esportare gratis, nel browser.',
      primaryKeyword: 'convertitore formato immagine',
      secondaryKeywords: [
        'converti webp in jpg o png',
        'convertitore png webp in batch',
        'riempi sfondo png trasparente in jpg',
        'converti jpg in png gratis',
      ],
      longTailKeywords: [
        'converti in batch più immagini png e jpg in webp offline',
        'converti schermata webp in png standard senza upload',
        'riempi colore sfondo png trasparente convertendo in jpg',
        'cambia formato immagine da png a jpg nel browser',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Converti in batch file PNG, JPG, WebP, GIF e SVG in WebP pronto per il web, JPG universale o PNG trasparente lossless completamente nel browser — con riempimento di sfondo personalizzato quando appiattisci la trasparenza in JPEG.',
  },
  'image-rotate-flip': {
    slug: 'ruota-e-specchia-immagini',
    name: 'Ruota, Specchia e Filtra Immagini',
    shortDescription:
      'Ruota immagini di 90°/180°/270°, specchia in orizzontale o verticale e applica filtri scala di grigi, luminosità e contrasto live nel browser.',
    keywords: [
      'ruota immagine online',
      'specchia immagine orizzontale',
      'filtro immagine scala grigi',
      'regola luminosità contrasto immagine',
      'ruota foto 90 gradi',
      'specchia foto online',
      'immagine specchio online',
      'raddrizza immagine online',
      'editor filtri foto online',
    ],
    seo: {
      title: 'Ruota Immagini Online – Specchia e Filtra Foto | UtilityFlow',
      description:
        'Ruota un’immagine online di 90, 180 o 270 gradi, specchia foto in orizzontale o verticale e regola luminosità, contrasto e scala di grigi — gratis nel browser.',
      primaryKeyword: 'ruota immagine online',
      secondaryKeywords: [
        'specchia immagine orizzontale verticale',
        'converti foto in scala di grigi online',
        'regola luminosità e contrasto browser',
        'ruota foto 90 gradi online',
      ],
      longTailKeywords: [
        'correggi rotazione foto laterale 90 gradi offline nel browser',
        'specchia selfie orizzontalmente senza photoshop',
        'applica filtro bianco e nero scala grigi ed esporta png',
        'ruota immagine documento scansionato in orientamento corretto',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Correggi l’orientamento laterale, specchia i selfie in orizzontale o verticale, passa le foto alla scala di grigi in bianco e nero e regola luminosità e contrasto in tempo reale usando trasformazioni locali HTML5 Canvas 2D.',
  },
  'image-to-base64': {
    slug: 'immagine-in-base64',
    name: 'Convertitore da Immagine a Base64 e Data URI',
    shortDescription:
      'Codifica immagini PNG, JPG, WebP, SVG e ICO in Data URI Base64, tag HTML <img> e regole CSS — oppure decodifica stringhe Base64 in anteprime.',
    keywords: [
      'immagine in base64',
      'decodificatore base64 immagini',
      'generatore data uri',
      'immagine base64 sfondo css',
      'converti immagine in data uri',
      'codificatore base64 immagini',
      'immagine in base64 online gratis',
      'codifica png in base64',
      'convertitore base64 in immagine',
    ],
    seo: {
      title: 'Immagine in Base64 – Convertitore Data URI | UtilityFlow',
      description:
        'Usa il convertitore da immagine a Base64 per creare Data URI, Base64 grezzo, tag img HTML e snippet CSS di sfondo, o decodifica Base64 in anteprima immagine.',
      primaryKeyword: 'immagine in base64',
      secondaryKeywords: [
        'codificatore immagini data uri',
        'anteprima immagine da base64',
        'svg o png inline in css',
        'immagine in base64 online gratis',
      ],
      longTailKeywords: [
        'converti icona png in data uri background-image css offline',
        'decodifica stringa base64 grezza in anteprima immagine scaricabile',
        'confronta dimensione byte immagine e dimensione stringa base64',
        'codifica piccola immagine logo in base64 per email html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Trasforma piccole icone, loghi e grafiche per email in Data URI autonomi data:image/...;base64,..., tag HTML <img> pronti da copiare e dichiarazioni CSS background-image — oppure passa alla modalità per ispezionare e scaricare payload di immagini Base64 grezzi.',
  },
  'color-contrast-checker': {
    slug: 'verificatore-di-contrasto-colori',
    name: 'Verificatore di Contrasto Colori ed Estrattore di Palette',
    shortDescription:
      'Verifica i rapporti di contrasto WCAG 2.1 AA/AAA, converti valori HEX/RGB/HSL ed estrai palette di colori dominanti dalle immagini caricate.',
    keywords: [
      'verificatore contrasto colori wcag',
      'rapporto contrasto accessibilità',
      'estrattore palette colori immagini',
      'selettore colori hex rgb hsl',
      'calcolatore rapporto contrasto wcag aa',
      'verificatore contrasto aaa online',
      'combinazioni colori accessibili',
      'test contrasto testo sfondo',
      'verificatore accessibilità design',
    ],
    seo: {
      title: 'Verificatore di Contrasto Colori – WCAG 2.1 | UtilityFlow',
      description:
        'Controlla i rapporti di contrasto WCAG 2.1 AA e AAA per coppie testo-sfondo, converti HEX, RGB e HSL ed estrai palette dalle immagini, gratis nel browser.',
      primaryKeyword: 'verificatore contrasto colori',
      secondaryKeywords: [
        'calcolatore rapporto contrasto wcag aa aaa',
        'estrai palette colori da immagine',
        'verificatore colori accessibili testo sfondo',
        'rapporto contrasto wcag testo normale e grande',
      ],
      longTailKeywords: [
        'verifica rapporto contrasto wcag 2.1 testo normale e grande online',
        'estrai campioni hex dominanti da schermata nel verificatore contrasto',
        'controlla accessibilità colori primo piano sfondo ui dark mode',
        'quale rapporto contrasto supera wcag aa per testo corpo',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Convalida le coppie di colori UI rispetto alle soglie ufficiali WCAG 2.1 di luminanza relativa e contrasto (AA 4,5:1, AA Grande 3,0:1, AAA 7,0:1), modifica valori HEX/RGB/HSL sincronizzati e carica schermate o loghi per estrarre campioni HEX dominanti direttamente negli slot Primo piano o Sfondo.',
  },
  'qr-code-scanner': {
    slug: 'scanner-di-codici-qr',
    name: 'Scanner di Codici QR e Studio QR vCard',
    shortDescription:
      'Decodifica codici QR da immagini caricate o dalla fotocamera del dispositivo in privato nel browser, oppure crea codici QR vCard di contatto scaricabili in PNG e SVG.',
    keywords: [
      'scanner codice qr online',
      'decodifica codice qr da immagine',
      'generatore codice qr vcard',
      'lettore qr fotocamera browser',
      'scansiona codice qr da schermata',
      'lettore codice qr senza app',
      'decodifica codice qr png jpg',
      'scanner codice qr wifi',
      'lettore payload codice qr',
    ],
    seo: {
      title: 'Scanner di Codici QR – Decodifica QR e vCard | UtilityFlow',
      description:
        'Scansiona e decodifica codici QR da schermate, foto o webcam direttamente nel browser, oppure crea un codice QR di contatto vCard scaricabile in PNG e SVG.',
      primaryKeyword: 'scanner codice qr',
      secondaryKeywords: [
        'lettore immagini codice qr online',
        'scansiona qr da schermata gratis',
        'genera codice qr contatto vcard',
        'lettore codice qr webcam browser',
      ],
      longTailKeywords: [
        'decodifica codice qr da schermata png o jpg caricata offline',
        'scansiona codice qr con webcam laptop senza installare app',
        'crea codice qr contatto vcard 3.0 scaricabile svg e png',
        'leggi codice qr invertito dark mode da schermata',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Leggi i contenuti dei codici QR da schermate, foto o un flusso live opzionale della fotocamera direttamente nel browser — con classificazione automatica del payload (URL, Wi-Fi, vCard, Testo) — più un **Generatore QR vCard di contatto** che esporta schede di contatto PNG e SVG nitide.',
  },
  'password-generator': {
    slug: 'generatore-di-password',
    name: 'Generatore di Password Crittografiche e Passphrase',
    shortDescription:
      'Genera password casuali imparziali e passphrase in stile Diceware usando il campionamento per rifiuto di crypto.getRandomValues con calcoli esatti di entropia.',
    keywords: [
      'generatore password crittografiche',
      'generatore password casuali sicure',
      'generatore passphrase diceware',
      'password crypto getrandomvalues',
      'creatore password forti online',
      'generatore passphrase casuali',
      'controllo entropia password',
      'genera password sicura gratis',
      'strumento password casuali imparziali',
    ],
    seo: {
      title: 'Generatore di Password Sicure e Passphrase | UtilityFlow',
      description:
        'Genera password casuali forti e passphrase Diceware memorabili in locale nel browser con Web Crypto, entropia esatta e nessuna memorizzazione o upload.',
      primaryKeyword: 'generatore password',
      secondaryKeywords: [
        'generatore password crittograficamente sicuro',
        'generatore passphrase memorabili online',
        'calcolatore entropia password',
        'creatore password casuali con simboli',
      ],
      longTailKeywords: [
        'genera password casuale con crypto getrandomvalues senza bias modulo',
        'crea passphrase diceware di 5 parole in locale offline',
        'escludi caratteri ambigui 0 o 1 l i generatore password',
        'quanti bit di entropia ha una password di 18 caratteri',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Genera password ad alta entropia e passphrase memorabili di più parole al 100% in locale usando il CSPRNG supportato da hardware del browser (window.crypto.getRandomValues) con campionamento per rifiuto per eliminare il bias modulo e mescolamento Fisher-Yates per prevenire posizioni prevedibili dei caratteri.',
  },
  'file-hash-verifier': {
    slug: 'verificatore-di-hash',
    name: 'Verificatore di Hash e Checksum dei File',
    shortDescription:
      'Calcola checksum di file binari SHA-256, SHA-512, SHA-384 e SHA-1 in locale tramite Web Crypto SubtleCrypto e verifica i download rispetto agli hash pubblicati.',
    keywords: [
      'verificatore hash file',
      'controllo checksum sha256 file',
      'verifica hash file scaricato online',
      'generatore hash file sha512',
      'calcolatore checksum sha256',
      'controllo integrità file online',
      'confronta checksum file',
      'controllo hash sha384 sha1',
      'verifica checksum iso browser',
    ],
    seo: {
      title: 'Verificatore di Hash – Controllo SHA-256 | UtilityFlow',
      description:
        'Calcola digest SHA-256, SHA-512, SHA-384 e SHA-1 per qualsiasi file locale nel browser e confrontali con i checksum pubblicati — senza upload, gratis da usare.',
      primaryKeyword: 'verificatore hash file',
      secondaryKeywords: [
        'calcolatore checksum sha256 file',
        'verifica file sha256sum online',
        'digest file subtlecrypto browser',
        'verificatore checksum sha512',
      ],
      longTailKeywords: [
        'controlla hash sha-256 di installer scaricato senza terminale',
        'confronta checksum binario file con stringa sha256sum attesa',
        'calcola sha256 e sha512 in locale senza upload file',
        'verifica checksum sha256 iso linux nel browser',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Verifica integrità e autenticità di installer software, archivi, dataset e documenti in locale — calcolando digest SHA-256, SHA-512, SHA-384 e SHA-1 tramite Web Crypto subtle.digest accelerato da hardware con confronto istantaneo del checksum atteso.',
  },
  'favicon-generator': {
    slug: 'generatore-di-favicon',
    name: 'Generatore di Favicon e Icone App (.ico e PNG)',
    shortDescription:
      'Genera icone PNG nitide multi-dimensione (da 16×16 a 512×512) e un vero favicon.ico binario multi-frame da un badge monogramma personalizzato o un logo caricato.',
    keywords: [
      'generatore favicon',
      'crea favicon.ico online',
      'generatore apple touch icon',
      'testo in favicon monogramma',
      'creatore favicon ico gratis',
      'generatore icone pwa 192 512',
      'creatore favicon sito web',
      'convertitore png in favicon',
      'generatore icone app online',
    ],
    seo: {
      title: 'Generatore di Favicon – Icone .ico e PNG | UtilityFlow',
      description:
        'Genera un vero favicon.ico multi-frame più icone PNG 16–512px, Apple Touch e PWA dal tuo logo o da un badge monogramma personalizzato — gratis, nel browser.',
      primaryKeyword: 'generatore favicon',
      secondaryKeywords: [
        'convertitore png in ico multi-dimensione',
        'creatore favicon monogramma',
        'generatore icone pwa e apple touch',
        'creatore favicon ico online gratis',
      ],
      longTailKeywords: [
        'crea vero favicon.ico binario con frame 16x16 32x32 48x48 gratis',
        'genera favicon sito web e tag link html da iniziali testo',
        'ritaglia logo quadrato in icona apple touch 180x180 cerchio',
        'genera icone pwa 192x192 e 512x512 per web manifest',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Progetta un’icona monogramma pulita in pochi secondi — oppure carica il logo del tuo brand esistente — per renderizzare asset PNG nitidi 16×16, 32×32, 48×48, Apple Touch 180×180 e PWA 192×192 / 512×512 più un favicon.ico binario multi-immagine conforme agli standard e markup HTML <link> pronto da incollare.',
  },
};
