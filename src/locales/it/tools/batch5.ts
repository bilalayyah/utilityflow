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
    instructions: [
      {
        title: 'Inserisci titolo della pagina e meta description',
        description:
          'Compila il titolo della pagina (punta a 30–60 caratteri) e la meta description (120–160 caratteri) tenendo d’occhio gli indicatori di lunghezza in tempo reale.',
      },
      {
        title: 'Imposta URL canonico e direttive di indicizzazione',
        description:
          'Inserisci l’URL canonico completo della pagina e scegli se i crawler devono indicizzarla e seguire i suoi link.',
      },
      {
        title: 'Aggiungi i tag Open Graph',
        description:
          'Compila titolo, descrizione, tipo e URL dell’immagine Open Graph (consigliati 1200×630 pixel) così i link appaiono corretti quando vengono condivisi.',
      },
      {
        title: 'Configura la Twitter/X Card',
        description:
          'Scegli tra summary o summary_large_image e conferma titolo, descrizione e immagine che X mostrerà.',
      },
      {
        title: 'Controlla l’anteprima live della scheda social',
        description:
          'Verifica nel pannello di anteprima come apparirà il link in un feed social e correggi eventuali troncamenti o immagini mancanti prima di pubblicare.',
      },
      {
        title: 'Copia o scarica lo snippet HTML',
        description:
          'Copia l’HTML con escape nel <head> della pagina oppure scarica meta-tags.html e riutilizza il blocco in tutti i modelli.',
      },
    ],
    examples: [
      {
        title: 'Blocco Open Graph e canonical standard per un sito web',
        input: 'Titolo: UtilityFlow · Tipo: website · Card: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* e twitter:*',
        explanation:
          'Esegue correttamente l’escape di virgolette e e commerciali all’interno dei valori degli attributi.',
      },
      {
        title: 'Tag per un articolo del blog con immagine grande',
        input: 'Titolo articolo: Guida alla SEO on-page · Tipo: article · Immagine: 1200×630',
        output: 'Blocco completo con og:type article, og:image e twitter:card summary_large_image',
        explanation:
          'Il tipo article e l’immagine grande garantiscono l’anteprima giusta per i post del blog condivisi sui social.',
      },
    ],
    benefits: [
      'Esegue automaticamente l’escape HTML di &, ", < e > negli attributi dei tag',
      'Combina tag SEO per il head, tag Open Graph e Twitter/X Card in un unico snippet coerente',
      'Mostra in anteprima come appariranno i link condivisi nei feed social prima della pubblicazione',
      'Permette di scaricare uno snippet autonomo in formato meta-tags.html',
    ],
    useCases: [
      'Pubblicare landing page di lancio, micrositi di marketing e hub di prodotti SaaS',
      'Standardizzare dimensioni delle immagini Open Graph e tipi di card in tutti gli articoli',
      'Verificare direttive index/noindex e URL canonici prima del rilascio in produzione',
      'Consegnare modelli <head> puliti dai team marketing agli sviluppatori front-end',
    ],
    faqs: [
      {
        question: 'Servono tag separati sia per Open Graph sia per Twitter/X?',
        answer:
          'X usa Open Graph come ripiego per titolo e descrizione quando serve, ma dichiarare esplicitamente twitter:card (summary_large_image) insieme a og:* garantisce anteprime con immagini grandi e prevedibili ovunque.',
      },
      {
        question: 'Che dimensioni deve avere la mia og:image?',
        answer:
          'Usa un’immagine di 1200×630 pixel (rapporto 1,91:1) ospitata su un URL HTTPS e non bloccata da robots.txt.',
      },
      {
        question: 'Il tag <meta name="keywords"> aiuta ancora il posizionamento su Google?',
        answer:
          'I principali motori di ricerca ignorano le meta keywords a causa dello spam storico, quindi questo generatore mantiene il <head> pulito con titolo, descrizione, canonical e tag social davvero utili.',
      },
      {
        question: 'Il Generatore di Meta Tag è gratuito?',
        answer:
          'Sì. È completamente gratuito e funziona interamente nel browser, quindi titoli, descrizioni e URL non vengono mai caricati su un server.',
      },
      {
        question: 'Devo installare qualcosa per usare il Generatore di Meta Tag?',
        answer:
          'No. Funziona in qualsiasi browser moderno senza installazioni e puoi generare tag sia da desktop sia da mobile.',
      },
      {
        question: 'Qual è la lunghezza ideale di un meta title?',
        answer:
          'Punta a 30–60 caratteri, così il titolo completo entra nei risultati di ricerca e nelle schede social senza essere tagliato con i puntini di sospensione.',
      },
      {
        question: 'Qual è la lunghezza ideale di una meta description?',
        answer:
          'Tienila tra 120 e 160 caratteri, così l’intero riassunto resta visibile nei risultati di ricerca su desktop e mobile.',
      },
      {
        question: 'Come gestisce il Generatore di Meta Tag i caratteri speciali nei titoli?',
        answer:
          'Esegue automaticamente l’escape HTML di &, ", < e > all’interno dei valori degli attributi, così virgolette e e commerciali non rompono mai il markup della pagina.',
      },
      {
        question: 'Che cos’è un URL canonico e perché il generatore ne include uno?',
        answer:
          'Un URL canonico dice ai motori di ricerca quale versione di una pagina è l’originale quando esistono pagine simili, evitando confusione da contenuti duplicati.',
      },
      {
        question: 'Qual è la differenza tra tag Open Graph e Twitter Card?',
        answer:
          'I tag Open Graph controllano le anteprime dei link su Facebook, LinkedIn e app di messaggistica, mentre i tag Twitter Card controllano come lo stesso link appare su X.',
      },
      {
        question: 'Quale tipo di Twitter card dovrei scegliere nel Generatore di Meta Tag?',
        answer:
          'Usa summary_large_image per pagine guidate dalle immagini come articoli e pagine di prodotto, e summary per pagine di solo testo dove basta una miniatura piccola.',
      },
      {
        question: 'Posso vedere in anteprima come apparirà il mio link quando viene condiviso?',
        answer:
          'Sì. L’anteprima live della scheda social mostra titolo, descrizione e immagine esattamente come appariranno in un feed social prima della pubblicazione.',
      },
      {
        question: 'Il Generatore di Meta Tag carica i contenuti della mia pagina da qualche parte?',
        answer:
          'No. Tutto funziona localmente nel browser e nulla di ciò che digiti lascia il tuo dispositivo.',
      },
      {
        question: 'Come aggiungo i meta tag generati al mio sito web?',
        answer:
          'Copia lo snippet e incollalo nella sezione <head> del modello di pagina, oppure scarica meta-tags.html e riutilizza il blocco in più pagine.',
      },
      {
        question: 'Quando dovrei usare una direttiva robots noindex con il Generatore di Meta Tag?',
        answer:
          'Usa noindex solo per le pagine che non vuoi mai nei risultati di ricerca, come pagine di ringraziamento, risultati di ricerca interni o copie di staging di una pagina live.',
      },
      {
        question: 'Posso usare il Generatore di Meta Tag per un post del blog o una pagina di prodotto?',
        answer:
          'Sì. Imposta og:type su article per i post del blog o su product per le pagine del negozio, così ogni piattaforma mostra il formato di anteprima giusto.',
      },
      {
        question: 'Che cosa succede se l’URL della mia og:image è sbagliato o l’immagine manca?',
        answer:
          'Le piattaforme social mostreranno nessuna immagine o un’anteprima rotta, quindi usa sempre un URL diretto di immagine HTTPS e controlla l’anteprima prima di pubblicare.',
      },
      {
        question: 'Il Generatore di Meta Tag supporta le pagine multilingue?',
        answer:
          'Genera i tag per una pagina alla volta, quindi imposta og:locale per la lingua della pagina e genera un set di tag separato per ogni versione tradotta.',
      },
      {
        question: 'Posso scaricare i meta tag generati come file?',
        answer:
          'Sì. Il pulsante di download salva un file autonomo meta-tags.html contenente lo snippet completo con escape.',
      },
      {
        question: 'Il Generatore di Meta Tag migliorerà da solo il mio posizionamento su Google?',
        answer:
          'Nessuno strumento garantisce posizionamenti, ma titoli, descrizioni e tag social accurati migliorano il tasso di clic e il modo in cui le pagine vengono presentate.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci titolo, descrizione e URL',
        description:
          'Digita il titolo SEO proposto, la meta description, l’URL della pagina ed eventualmente il nome del sito o la data di pubblicazione.',
      },
      {
        title: 'Misura la larghezza in pixel',
        description:
          'Controlla la lettura live in px accanto al titolo SEO: lettere larghe come W e M occupano più pixel orizzontali di l e i.',
      },
      {
        title: 'Controlla l’anteprima desktop',
        description:
          'Esamina la scheda di ricerca desktop per vedere titolo completo, URL breadcrumb e descrizione esattamente come li vedrebbero gli utenti desktop.',
      },
      {
        title: 'Passa all’anteprima mobile',
        description:
          'Passa alla vista mobile per controllare il punto di troncamento più corto e assicurarti che il messaggio chiave appaia anche su schermi piccoli.',
      },
      {
        title: 'Verifica le parole chiave in grassetto',
        description:
          'Inserisci la query di ricerca di destinazione nel campo Parola chiave in grassetto per vedere quali parole Google evidenzierebbe nel tuo snippet.',
      },
      {
        title: 'Copia i tag finiti',
        description:
          'Quando l’anteprima sembra giusta, copia i tag <title> e <meta name="description"> pronti da incollare nella tua pagina.',
      },
    ],
    examples: [
      {
        title: 'Individuare il troncamento di un titolo con caratteri larghi',
        input: 'Titolo di 60 caratteri pieno di W e M maiuscole',
        output: 'Segnala l’overflow oltre 580 px anche sotto i 60 caratteri, così accorci prima del taglio con i puntini.',
        explanation:
          'Le metriche di testo Canvas approssimano le larghezze reali di rendering dei risultati di ricerca con caratteri serif e sans.',
      },
      {
        title: 'Controllare una meta description troppo lunga su mobile',
        input: 'Meta description di 170 caratteri con parola chiave alla fine',
        output: 'L’anteprima mobile mostra il taglio a circa 120 caratteri e suggerisce di spostare la parola chiave all’inizio.',
        explanation:
          'La vista mobile rivela subito dove il messaggio chiave viene perso per troncamento.',
      },
    ],
    benefits: [
      'Usa le larghezze in pixel di Canvas measureText() oltre al conteggio dei caratteri',
      'Formatta dominio e segmenti di percorso in breadcrumb puliti automaticamente',
      'Simula i termini di ricerca in grassetto dentro le meta description per valutare il tasso di clic',
      'Copia in un clic i tag <title> e <meta name="description"> pronti da incollare',
    ],
    useCases: [
      'Rifinire titoli di blog e pagine di prodotto per evitare troncamenti con "..." a metà parola',
      'Scrivere meta description con CTR più alto entro il limite mobile di circa 120 caratteri',
      'Verificare come le date di pubblicazione influiscono sulla lunghezza visibile della descrizione',
      'Revisionare gli snippet delle landing page durante il controllo qualità editoriale',
    ],
    faqs: [
      {
        question: 'Perché la larghezza in pixel conta più del semplice numero di caratteri?',
        answer:
          'I motori di ricerca troncano i titoli in base alla larghezza in pixel del contenitore (circa 580–600 px su desktop), non a una lunghezza fissa in caratteri. Le lettere maiuscole e i caratteri larghi come W o M occupano quasi il doppio della larghezza di i o l.',
      },
      {
        question: 'Google può comunque riscrivere il mio titolo o la mia meta description nei risultati live?',
        answer:
          'Sì. Google a volte riscrive dinamicamente gli snippet per adattarli a query specifiche o ai titoli H1, anche se titoli concisi e accurati riducono le riscritture indesiderate.',
      },
      {
        question: 'Questo strumento recupera i posizionamenti live da Google?',
        answer:
          'No. È un simulatore visivo di snippet SERP offline che funziona interamente nel browser.',
      },
      {
        question: 'L’Anteprima Snippet SERP è gratuita?',
        answer:
          'Sì. È completamente gratuita e funziona interamente nel browser, quindi nulla di ciò che digiti viene caricato da nessuna parte.',
      },
      {
        question: 'Qual è la lunghezza ideale del titolo per i risultati di ricerca Google?',
        answer:
          'Punta a meno di circa 580 pixel su desktop, che di solito significa 50–60 caratteri a seconda della larghezza delle lettere.',
      },
      {
        question: 'Come misura la larghezza in pixel l’Anteprima Snippet SERP?',
        answer:
          'Usa l’API Canvas measureText() del browser per calcolare la larghezza reale di rendering del titolo nello stesso stile di carattere usato dai risultati di ricerca.',
      },
      {
        question: 'Perché il mio titolo viene tagliato anche se è sotto i 60 caratteri?',
        answer:
          'I motori di ricerca troncano in base alla larghezza in pixel, non al numero di caratteri, quindi le lettere larghe come W e M occupano molto più spazio delle lettere strette come i e l.',
      },
      {
        question: 'Qual è la lunghezza ideale della meta description su desktop e mobile?',
        answer:
          'Su desktop vengono mostrati circa 155–160 caratteri, mentre su mobile il testo si piega intorno a 120, quindi metti le parole più importanti e le parole chiave per prime.',
      },
      {
        question: 'Posso visualizzare in anteprima sia i risultati desktop sia quelli mobile?',
        answer:
          'Sì. Passa dalla vista desktop a quella mobile per vedere come lo stesso titolo e la stessa descrizione vengono visualizzati su ciascuno schermo.',
      },
      {
        question: 'Che cosa fa la funzione delle parole chiave in grassetto nell’Anteprima Snippet SERP?',
        answer:
          'Inserisci una query di ricerca di destinazione e l’anteprima mette in grassetto le parole corrispondenti nel titolo e nella descrizione, proprio come Google evidenzia i termini della query nei risultati reali.',
      },
      {
        question: 'L’Anteprima Snippet SERP mostra il mio vero posizionamento su Google?',
        answer:
          'No. È un simulatore visivo offline che mostra come potrebbe apparire uno snippet, non dati di posizionamento live di Google.',
      },
      {
        question: 'L’Anteprima Snippet SERP carica il mio titolo o URL da qualche parte?',
        answer:
          'No. Tutte le anteprime e le misurazioni avvengono localmente nel browser, quindi il tuo titolo, la tua descrizione e il tuo URL non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Come copio titolo e meta description dopo l’anteprima?',
        answer:
          'Usa il pulsante di copia in un clic per ottenere i tag <title> e <meta name="description"> pronti da incollare nella tua pagina.',
      },
      {
        question: 'Perché Google a volte riscrive il mio titolo nei risultati live?',
        answer:
          'Google può sostituirlo con il tuo H1 o con altro testo della pagina quando ritiene che corrisponda meglio a una query di ricerca, anche se titoli concisi e accurati riducono le riscritture.',
      },
      {
        question: 'Dovrei includere il nome del brand o del sito nel titolo?',
        answer:
          'Spesso sì. Mettilo alla fine dopo un separatore, così la parola chiave principale resta per prima e il brand appare comunque nei risultati.',
      },
      {
        question: 'Qual è la differenza tra title tag e titolo H1?',
        answer:
          'Il title tag appare nei risultati di ricerca e nelle schede del browser, mentre l’H1 è il titolo visibile sulla pagina stessa.',
      },
      {
        question: 'Posso testare rapidamente più titoli nell’Anteprima Snippet SERP?',
        answer:
          'Sì. Modifica il campo del titolo e anteprima, larghezza in pixel e avviso di troncamento si aggiornano live mentre digiti.',
      },
      {
        question: 'L’Anteprima Snippet SERP tiene conto delle date di pubblicazione?',
        answer:
          'Sì. Aggiungere una data mostra come accorcia la descrizione visibile, cosa che conta per notizie e post del blog.',
      },
      {
        question: 'Che cosa devo fare se la mia descrizione viene troncata su mobile?',
        answer:
          'Sposta il messaggio chiave e la parola chiave di destinazione all’inizio della descrizione, così la vista mobile piegata conserva comunque senso.',
      },
      {
        question: 'Il controllo della larghezza in pixel è accurato per tutte le lingue?',
        answer:
          'Approssima il rendering reale della ricerca a partire dai caratteri del browser, quindi i risultati sono più accurati per gli alfabeti latini e possono variare per altri sistemi di scrittura.',
      },
    ],
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
    instructions: [
      {
        title: 'Incolla gli URL canonici',
        description:
          'Inserisci un URL completo https:// (o http://) per riga nell’editor; le righe malformate vengono segnalate chiaramente.',
      },
      {
        title: 'Controlla le righe non valide segnalate',
        description:
          'Verifica le righe evidenziate per refusi o prefissi https:// mancanti e correggile prima di generare, poiché gli URL non validi sono esclusi dall’XML.',
      },
      {
        title: 'Configura i tag opzionali',
        description:
          'Imposta una data <lastmod> opzionale, un suggerimento <changefreq> e una <priority> (oppure ometti i tag opzionali per file più puliti).',
      },
      {
        title: 'Controlla la deduplicazione',
        description:
          'Conferma il numero di duplicati mostrato dallo strumento, così la sitemap finita elenca ogni URL canonico esattamente una volta.',
      },
      {
        title: 'Visualizza in anteprima l’XML generato',
        description:
          'Ispeziona l’output XML per confermare che urlset, voci <loc> e valori <lastmod> opzionali siano corretti.',
      },
      {
        title: 'Copia o scarica sitemap.xml',
        description:
          'Fai clic su Copia XML o Scarica .xml per inserirlo direttamente nella cartella radice o /public/ del sito.',
      },
    ],
    examples: [
      {
        title: 'Generare la sitemap di un sito statico per Cloudflare Pages',
        input: '5 URL canonici · lastmod: 2026-11-12 · Deduplicazione: attiva',
        output: '<?xml version="1.0"?> valido <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation:
          'Esegue l’escape delle entità XML (&, <, >, virgolette) in modo pulito dentro ogni elemento <loc>.',
      },
      {
        title: 'Pulire un elenco di URL con duplicati e refusi',
        input: 'Elenco di 40 URL con 6 duplicati e 2 righe malformate',
        output: 'Sitemap XML valida con 32 URL unici; le righe non valide vengono segnalate ed escluse.',
        explanation:
          'La deduplicazione e la convalida impediscono che un singolo refuso rovini l’intero file.',
      },
    ],
    benefits: [
      'Convalida ogni riga con l’analisi nativa degli URL del browser prima di emettere l’XML',
      'Esegue automaticamente l’escape di & e dei caratteri speciali di query dentro gli URL <loc>',
      'Deduplica gli URL identici per evitare sitemap gonfiate',
      'Permette di omettere <priority> e <changefreq> in modo pulito quando lo si desidera (Google li ignora entrambi)',
    ],
    useCases: [
      'Creare sitemap iniziali per landing page statiche o micrositi di documentazione',
      'Preparare file di invio di URL puliti dopo migrazioni di siti',
      'Generare sitemap supplementari senza immagini o notizie per siti di piccole aziende',
      'Esportare XML formattato da distribuire insieme a robots.txt',
    ],
    faqs: [
      {
        question: 'Dovrei includere nella sitemap URL non canonici, reindirizzati o noindex?',
        answer:
          'No. Le sitemap dovrebbero elencare solo URL canonici che restituiscono HTTP 200 e che vuoi che i motori di ricerca indicizzino.',
      },
      {
        question: 'Google usa ancora <priority> e <changefreq>?',
        answer:
          'Google Search ignora i tag <priority> e <changefreq> e si concentra soprattutto su <loc> e su date <lastmod> accurate quando vengono aggiornate in modo significativo.',
      },
      {
        question: 'Questo generatore esegue la scansione automatica del mio sito live?',
        answer:
          'No. Le pagine lato client non possono eseguire la scansione di siti arbitrari tra origini diverse a causa della sicurezza CORS del browser; incolla qui l’elenco delle route esportato per compilare subito XML valido.',
      },
      {
        question: 'Il Generatore di Sitemap XML è gratuito?',
        answer:
          'Sì. È completamente gratuito e funziona interamente nel browser, quindi il tuo elenco di URL non viene mai caricato su un server.',
      },
      {
        question: 'Quanti URL posso includere in una sitemap?',
        answer:
          'Il protocollo Sitemaps consente fino a 50.000 URL o 50 MB non compressi per file, quindi i siti più grandi dovrebbero suddividersi in più sitemap o usare un indice di sitemap.',
      },
      {
        question: 'Qual è la differenza tra una sitemap e robots.txt?',
        answer:
          'Una sitemap elenca gli URL che vuoi che i motori di ricerca scoprano, mentre robots.txt fornisce ai crawler regole su quali percorsi possono o non possono visitare.',
      },
      {
        question: 'Dove carico il file sitemap.xml?',
        answer:
          'Mettilo nella radice del sito, per esempio https://example.com/sitemap.xml, così i crawler possono trovarlo nella posizione standard.',
      },
      {
        question: 'Devo inviare la mia sitemap a Google?',
        answer:
          'È consigliato. Inviala in Google Search Console e fai riferimento a essa anche con una riga Sitemap: in robots.txt per gli altri crawler.',
      },
      {
        question: 'Quali formati di URL accetta il Generatore di Sitemap XML?',
        answer:
          'Inserisci un URL completo https:// o http:// per riga, dominio incluso, e lo strumento segnala ogni riga che non è un URL valido.',
      },
      {
        question: 'Che cosa succede agli URL duplicati nella mia sitemap?',
        answer:
          'I duplicati vengono rimossi automaticamente, così la sitemap finita contiene ogni URL canonico esattamente una volta.',
      },
      {
        question: 'Che cosa succede agli URL non validi o malformati nel Generatore di Sitemap XML?',
        answer:
          'Le righe non valide vengono segnalate chiaramente ed escluse dall’XML, così un refuso in una riga non rovina mai l’intero file.',
      },
      {
        question: 'Come gestisce il Generatore di Sitemap XML i caratteri speciali negli URL?',
        answer:
          'Esegue l’escape XML di & e di altri caratteri speciali dentro gli elementi <loc>, così stringhe di query e percorsi codificati restano validi.',
      },
      {
        question: 'Dovrei includere URL di immagini o video in una sitemap normale?',
        answer:
          'Una sitemap standard elenca solo gli URL delle pagine. Gli URL di immagini e video richiedono le proprie estensioni di sitemap se vuoi che vengano indicizzati separatamente.',
      },
      {
        question: 'Dovrei elencare nella sitemap URL impaginati o filtrati?',
        answer:
          'No. Elenca solo pagine canoniche e indicizzabili e lascia fuori impaginazione, parametri di ordinamento e pagine di risultati di ricerca interni.',
      },
      {
        question: 'Che cos’è <lastmod> e dovrei impostarlo nella mia sitemap?',
        answer:
          'Registra la data dell’ultima modifica di una pagina. Impostala solo quando la data è accurata, perché Google la usa per valutare la freschezza di una pagina.',
      },
      {
        question: 'Il Generatore di Sitemap XML funziona offline?',
        answer:
          'Sì. Funziona interamente nel browser senza caricamenti, quindi puoi creare sitemap senza connessione internet una volta caricata la pagina.',
      },
      {
        question: 'Posso rigenerare la mia sitemap dopo aver aggiunto nuove pagine?',
        answer:
          'Sì. Incolla l’elenco di URL aggiornato e scarica una sitemap.xml nuova, poi ricaricala nella radice del sito.',
      },
      {
        question: 'Che cos’è un file indice di sitemap?',
        answer:
          'È un file che elenca più file di sitemap, usato dai siti grandi per organizzare migliaia di URL tra sezioni o lingue.',
      },
      {
        question: 'Avere una sitemap garantisce che Google indicizzi le mie pagine?',
        answer:
          'No. Una sitemap aiuta i motori di ricerca a scoprire gli URL, ma l’indicizzazione dipende ancora dalla qualità delle pagine, dai link e dal budget di scansione.',
      },
      {
        question: 'Posso usare il Generatore di Sitemap XML per un sito WordPress o Shopify?',
        answer:
          'Sì. Esporta o copia l’elenco di URL canonici da qualsiasi piattaforma, incollalo qui e lo strumento crea una sitemap.xml standard.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli un preset di partenza o modifica le regole',
        description:
          'Fai clic su Consenti tutto, App web / SaaS standard, WordPress pulito o Staging (blocca tutto) per popolare le regole comuni.',
      },
      {
        title: 'Personalizza User-agent e percorsi',
        description:
          'Aggiungi percorsi Allow o Disallow per * o per crawler specifici come Googlebot, Bingbot o GPTBot.',
      },
      {
        title: 'Imposta Crawl-delay dove serve',
        description:
          'Aggiungi un valore Crawl-delay per i crawler che lo rispettano, come Bingbot, per rallentare le richieste su un server piccolo o condiviso.',
      },
      {
        title: 'Collega gli URL delle sitemap',
        description:
          'Inserisci l’URL completo della tua sitemap XML così i crawler possono scoprirla da robots.txt, aggiungendo più di una riga se usi più sitemap.',
      },
      {
        title: 'Controlla l’output raggruppato',
        description:
          'Verifica che ogni blocco User-agent sia raggruppato correttamente e che nessuna regola Disallow blocchi per sbaglio CSS, JavaScript o pagine pubbliche.',
      },
      {
        title: 'Copia, scarica e testa',
        description:
          'Copia o scarica robots.txt, mettilo nella radice del dominio e verificalo con il tester robots.txt in Google Search Console.',
      },
    ],
    examples: [
      {
        title: 'App web SaaS che blocca /api/ e /admin/',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'File robots.txt raggruppato che termina con Sitemap: https://example.com/sitemap.xml',
        explanation:
          'Raggruppa in modo pulito gli User-agent corrispondenti in singoli blocchi.',
      },
      {
        title: 'Blocco totale dello staging prima del lancio',
        input: 'Preset: Staging (blocca tutto) · User-agent: * · Disallow: /',
        output: 'Robots.txt minimo che impedisce a tutti i crawler di scansionare il sito di staging.',
        explanation:
          'Un preset pronto evita che le pagine di staging vengano indicizzate prima del lancio.',
      },
    ],
    benefits: [
      'Raggruppa automaticamente le regole per blocchi User-agent corrispondenti secondo le best practice RFC 9309',
      'Include modelli di partenza verificati per evitare di bloccare per sbaglio risorse CSS e JS',
      'Supporta più dichiarazioni Sitemap: per indici di sitemap o file localizzati',
      'Il download in un clic produce un file robots.txt pronto da distribuire',
    ],
    useCases: [
      'Impedire ai crawler di sprecare budget su /api/, /admin/ o URL di ricerca interna con query',
      'Pubblicizzare le posizioni delle sitemap XML nella radice del dominio',
      'Aggiungere regole specifiche per bot specializzati come AdsBot o scraper IA',
      'Configurare ambienti di staging prima del lancio DNS',
    ],
    faqs: [
      {
        question: 'Disallow: /admin/ in robots.txt tiene una pagina fuori da Google Search o protegge i segreti?',
        answer:
          'Distinzione importante: robots.txt ferma la scansione, non necessariamente l’indicizzazione se altri siti linkano direttamente l’URL, e robots.txt è leggibile pubblicamente. Usa l’autenticazione per le route sensibili e <meta name="robots" content="noindex"> per impedire l’indicizzazione.',
      },
      {
        question: 'Dove deve essere ospitato robots.txt?',
        answer:
          'Deve essere servito nel percorso radice esatto del tuo host (https://tuodominio.com/robots.txt), restituendo HTTP 200.',
      },
      {
        question: 'Google rispetta Crawl-delay?',
        answer:
          'Googlebot ignora Crawl-delay (usa le impostazioni di Search Console se serve), mentre Bing e altri crawler rispettano ancora gli intervalli numerici di Crawl-delay.',
      },
      {
        question: 'Il Generatore di Robots.txt è gratuito?',
        answer:
          'Sì. È completamente gratuito e funziona interamente nel browser, quindi le regole del tuo sito non vengono mai caricate da nessuna parte.',
      },
      {
        question: 'Qual è la differenza tra robots.txt e un meta tag robots noindex?',
        answer:
          'Robots.txt dice ai crawler di non visitare un percorso, mentre un tag noindex dice ai motori di ricerca di non mostrare una pagina scansionata nei risultati. Risolvono problemi diversi.',
      },
      {
        question: 'Robots.txt può bloccare i crawler IA come GPTBot?',
        answer:
          'Sì. Aggiungi un gruppo User-agent: GPTBot con Disallow: / per tenere fuori quel crawler e ripeti lo schema per gli altri bot IA che vuoi bloccare.',
      },
      {
        question: 'Che cosa significa "User-agent: *" in robots.txt?',
        answer:
          'Significa che le regole di quel gruppo si applicano a ogni crawler che visita il tuo sito, a meno che un gruppo User-agent più specifico non le sovrascriva.',
      },
      {
        question: 'Qual è la differenza tra Allow e Disallow in robots.txt?',
        answer:
          'Allow consente la scansione di un percorso e Disallow la blocca. Quando le regole si sovrappongono, vince la regola corrispondente più specifica.',
      },
      {
        question: 'Posso bloccare una singola pagina o cartella con il Generatore di Robots.txt?',
        answer:
          'Sì. Aggiungi Disallow: /pagina/ per una singola pagina o Disallow: /cartella/ per bloccare un’intera directory e tutto ciò che contiene.',
      },
      {
        question: 'Dovrei bloccare i miei file CSS e JavaScript in robots.txt?',
        answer:
          'No. I motori di ricerca hanno bisogno di CSS e JavaScript per visualizzare correttamente le pagine e bloccarli può danneggiare il posizionamento.',
      },
      {
        question: 'Quali preset di partenza include il Generatore di Robots.txt?',
        answer:
          'Include Consenti tutto, App web / SaaS standard, WordPress pulito e Staging (blocca tutto), così puoi partire da un modello collaudato invece che da un file vuoto.',
      },
      {
        question: 'Come aggiungo la mia sitemap a robots.txt?',
        answer:
          'Aggiungi una riga come Sitemap: https://example.com/sitemap.xml alla fine del file, così i crawler possono trovare la tua sitemap dalla radice.',
      },
      {
        question: 'Posso avere più righe Sitemap in un unico file robots.txt?',
        answer:
          'Sì. Puoi elencare diversi URL di sitemap, utile per indici di sitemap o sitemap separate per lingua o sezione.',
      },
      {
        question: 'Il Generatore di Robots.txt carica le mie regole da qualche parte?',
        answer:
          'No. Tutto funziona localmente nel browser e il file viene generato sul tuo dispositivo.',
      },
      {
        question: 'Come testo il mio robots.txt dopo averlo pubblicato?',
        answer:
          'Caricalo nella radice del dominio, poi controllalo con il tester robots.txt in Google Search Console o recuperandolo come Googlebot.',
      },
      {
        question: 'Che cosa succede se blocco per sbaglio l’intero sito in robots.txt?',
        answer:
          'I motori di ricerca smetteranno di scansionare le tue pagine. Rimuovi la riga Disallow: /, ricarica il file e richiedi una nuova scansione in Search Console.',
      },
      {
        question: 'Robots.txt nasconde le mie pagine admin dagli hacker?',
        answer:
          'No. Robots.txt è leggibile pubblicamente, quindi chiunque può vedere quali percorsi hai bloccato. Proteggi le pagine sensibili con password o autenticazione.',
      },
      {
        question: 'Che cos’è Crawl-delay e dovrei usarlo in robots.txt?',
        answer:
          'Crawl-delay chiede ai crawler di attendere un numero di secondi tra le richieste. Googlebot lo ignora, ma Bing e altri crawler lo rispettano.',
      },
      {
        question: 'Posso scrivere regole robots.txt diverse per Googlebot e Bingbot?',
        answer:
          'Sì. Crea un gruppo User-agent separato per ciascun crawler con le sue righe Allow e Disallow.',
      },
      {
        question: 'Dove carico robots.txt su Cloudflare Pages o su un sito statico?',
        answer:
          'Metti il file nella cartella public/ o nella radice dell’output di build, così viene servito su https://tuodominio.com/robots.txt.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli un tipo di Schema.org',
        description:
          'Seleziona Article, FAQPage, Product, Organization o BreadcrumbList dal selettore in alto.',
      },
      {
        title: 'Compila le proprietà dell’entità',
        description:
          'Inserisci titoli, coppie domanda-risposta, offerte di prezzo, dettagli dell’organizzazione o percorsi breadcrumb.',
      },
      {
        title: 'Aggiungi righe extra per gli elenchi',
        description:
          'Aggiungi coppie domanda-risposta extra per FAQPage o voci di percorso extra per BreadcrumbList e rimuovi le righe che non servono.',
      },
      {
        title: 'Controlla il JSON-LD generato',
        description:
          'Verifica l’output JSON live per nomi di campo e valori corretti e conferma che le proprietà opzionali vuote vengano omesse automaticamente.',
      },
      {
        title: 'Copia il tag <script> o esporta in .jsonld',
        description:
          'Copia il blocco completo <script type="application/ld+json"> nel <head> della pagina oppure scarica il file .jsonld.',
      },
      {
        title: 'Convalida prima di pubblicare',
        description:
          'Incolla l’output nel Rich Results Test o nel validatore Schema per individuare errori di sintassi, poiché i motori di ricerca ignorano il JSON-LD non valido.',
      },
    ],
    examples: [
      {
        title: 'Creare dati strutturati FAQPage dinamici',
        input: '2 coppie domanda/risposta con schema FAQPage',
        output: 'Blocco script JSON-LD FAQPage valido con @context https://schema.org',
        explanation:
          'Usa serializzazione JSON sicura con escape \\u003c per evitare la chiusura prematura di </script>.',
      },
      {
        title: 'Markup Product con prezzo e disponibilità',
        input: 'Nome prodotto, prezzo 29,99 EUR, valuta EUR, disponibilità InStock',
        output: 'Blocco JSON-LD Product valido con offerta e disponibilità',
        explanation:
          'I campi di prezzo e disponibilità sono quelli principali usati dai motori di ricerca per i risultati di shopping.',
      },
    ],
    benefits: [
      'Supporta 5 dei tipi di dati strutturati Schema.org a maggiore impatto',
      'Esegue l’escape dei caratteri "<" in modo pulito dentro il JSON-LD per evitare rotture da script-injection HTML',
      'Omette automaticamente le proprietà opzionali vuote per una sintassi pulita',
      'Si abbina naturalmente al Formattatore e Validatore JSON per estensioni personalizzate',
    ],
    useCases: [
      'Aggiungere metadati di autore e pubblicazione Article ai modelli di blog editoriali',
      'Strutturare prezzo, valuta e disponibilità di magazzino dei prodotti per i feed merchant',
      'Dichiarare l’identità di marca Organization e l’URL del logo a livello di sito',
      'Incorporare percorsi gerarchici BreadcrumbList in pagine di categoria e strumenti',
    ],
    faqs: [
      {
        question: 'Dove devo inserire i dati strutturati JSON-LD in una pagina web?',
        answer:
          'Puoi inserire <script type="application/ld+json"> sia dentro <head> sia dentro <body>; inserirlo in modo pulito in <head> è la pratica standard.',
      },
      {
        question: 'Perché il generatore esegue l’escape di "<" come "\\u003c" nell’output JSON?',
        answer:
          'Se la risposta di una FAQ contiene "</script>", i browser chiudono in anticipo il blocco script HTML, a meno che "<" non venga escaped come "\\u003c", che resta JSON valido al 100%.',
      },
      {
        question: 'Aggiungere markup Schema garantisce i rich snippet su Google?',
        answer:
          'No. I dati strutturati validi rendono le pagine idonee a funzioni di ricerca avanzate, mentre i motori di ricerca decidono la visualizzazione in base alla qualità complessiva della pagina e alle linee guida.',
      },
      {
        question: 'Il Generatore di Dati Strutturati è gratuito?',
        answer:
          'Sì. È completamente gratuito e funziona interamente nel browser, quindi i tuoi contenuti non vengono mai caricati su un server.',
      },
      {
        question: 'Quali tipi di Schema.org supporta il Generatore di Dati Strutturati?',
        answer:
          'Supporta Article, FAQPage, Product, Organization e BreadcrumbList, che coprono i casi d’uso di rich result più comuni.',
      },
      {
        question: 'Qual è la differenza tra JSON-LD e Microdata?',
        answer:
          'JSON-LD è un blocco <script> separato da incollare nella pagina, mentre Microdata aggiunge attributi direttamente agli elementi HTML visibili.',
      },
      {
        question: 'Come aggiungo il JSON-LD generato al mio sito web?',
        answer:
          'Copia il blocco completo <script type="application/ld+json"> e incollalo nel <head> della pagina corrispondente, salvando il file prima di testare il risultato nel validatore di Google.',
      },
      {
        question: 'Come testo il mio markup schema dopo averlo generato?',
        answer:
          'Incolla l’URL della pagina o il codice nel Rich Results Test o nel validatore di Schema.org per verificare errori e miglioramenti idonei.',
      },
      {
        question: 'Posso combinare più tipi di schema in una pagina?',
        answer:
          'Sì. Una singola pagina può contenere insieme markup Article, BreadcrumbList e FAQPage come blocchi JSON-LD separati.',
      },
      {
        question: 'Che cos’è lo schema FAQPage e quando dovrei usarlo?',
        answer:
          'Usalo nelle pagine che mostrano un elenco visibile di domande e risposte, come le pagine di aiuto, così i motori di ricerca possono mostrarle come risultati espandibili.',
      },
      {
        question: 'Quali campi dello schema Product supporta il generatore?',
        answer:
          'Copre nome del prodotto, prezzo, valuta e disponibilità, che sono i campi principali usati dai motori di ricerca per i risultati di shopping.',
      },
      {
        question: 'A che cosa serve lo schema BreadcrumbList?',
        answer:
          'Descrive la gerarchia di navigazione di una pagina, come Home > Guide > Argomento, così i motori di ricerca possono mostrare percorsi breadcrumb nei risultati.',
      },
      {
        question: 'A che cosa serve lo schema Organization?',
        answer:
          'Dichiara l’identità del tuo brand, inclusi nome, logo e sito ufficiale, così i motori di ricerca possono mostrare un pannello di conoscenza coerente.',
      },
      {
        question: 'Il Generatore di Dati Strutturati carica i miei contenuti da qualche parte?',
        answer:
          'No. Tutto il markup viene generato localmente nel browser e nulla di ciò che inserisci lascia il tuo dispositivo.',
      },
      {
        question: 'Posso esportare lo schema come file .jsonld?',
        answer:
          'Sì. Il pulsante di esportazione scarica un file .jsonld autonomo che puoi archiviare, versionare o consegnare a uno sviluppatore.',
      },
      {
        question: 'Che cosa succede se il mio JSON-LD ha un errore di sintassi?',
        answer:
          'L’intero blocco potrebbe essere ignorato dai motori di ricerca, quindi convalida sempre l’output con il Rich Results Test prima di pubblicare.',
      },
      {
        question: 'Posso usare il Generatore di Dati Strutturati per una pagina di ricette o eventi?',
        answer:
          'Il generatore copre solo cinque tipi, quindi le pagine Recipe ed Event richiedono JSON-LD scritto a mano, che puoi convalidare con gli stessi strumenti.',
      },
      {
        question: 'Le risposte delle FAQ nello schema devono corrispondere al testo visibile della pagina?',
        answer:
          'Sì. Google richiede che i dati strutturati corrispondano a contenuti che gli utenti possono effettivamente vedere nella pagina, altrimenti il markup potrebbe essere ignorato.',
      },
      {
        question: 'Posso modificare a mano il JSON-LD generato?',
        answer:
          'Sì. È JSON standard, quindi puoi aggiungere o modificare campi in qualsiasi editor e convalidare di nuovo il risultato prima di pubblicare.',
      },
      {
        question: 'Il Generatore di Dati Strutturati funziona offline?',
        answer:
          'Sì. Funziona interamente nel browser senza caricamenti, quindi puoi creare markup schema senza connessione internet una volta caricata la pagina.',
      },
    ],
  },
  'url-slug-generator': {
    slug: 'generatore-di-slug-url',
    name: 'Generatore di Slug URL e Ottimizzatore di Percorsi SEO',
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
    instructions: [
      {
        title: 'Inserisci titoli o nomi di pagina',
        description:
          'Incolla uno o più titoli (uno per riga) nel campo Titoli di pagina.',
      },
      {
        title: 'Configura le regole di formattazione degli slug',
        description:
          'Inserisci il dominio di base, scegli trattino (-) o underscore (_), imposta la lunghezza massima dello slug e attiva o disattiva le opzioni di stop word o barra finale.',
      },
      {
        title: 'Visualizza in anteprima gli slug generati',
        description:
          'Esamina la tabella dei risultati per verificare traslitterazione degli accenti, rimozione delle stop word e dove gli slug lunghi sono stati tagliati ai confini di parola.',
      },
      {
        title: 'Regola lunghezza o impostazioni delle stop word',
        description:
          'Se uno slug perde significato o viene tagliato in modo goffo, aumenta la lunghezza massima dello slug o disattiva la rimozione delle stop word, poi rigenera.',
      },
      {
        title: 'Copia singoli slug o elenchi in blocco',
        description:
          'Copia singoli slug dalla tabella oppure esporta tutti gli slug o gli URL completi in un clic.',
      },
      {
        title: 'Non rinominare mai uno slug live senza redirect',
        description:
          'Se cambi lo slug di una pagina già indicizzata, aggiungi un redirect 301 dal vecchio URL così backlink e posizionamenti passano al nuovo.',
      },
    ],
    examples: [
      {
        title: 'Accorciare stop word e segni diacritici da un titolo',
        input: '10 migliori strumenti Café e produttività nel 2026',
        output: '10-migliori-strumenti-cafe-e-produttivita-2026',
        explanation:
          'Traslittera é → e, espande & → e, rimuove "nel" e unisce i token minuscoli con trattini.',
      },
      {
        title: 'Convertire in batch i titoli di un calendario editoriale',
        input: '12 titoli di post del blog, uno per riga, con dominio di base impostato',
        output: 'Tabella con 12 slug e URL completi pronti da copiare in blocco',
        explanation:
          'L’elaborazione in batch trasforma un intero calendario in una sola tabella.',
      },
    ],
    benefits: [
      'Elabora in batch decine di titoli di calendari editoriali contemporaneamente',
      'Tronca gli slug troppo lunghi ai confini di trattino e parola invece che a metà parola',
      'Preserva il significato principale mantenendo intatti gli slug brevi anche con la rimozione delle stop word attiva',
      'Segue le raccomandazioni di Google sulla struttura degli URL (trattini ASCII UTF-8 invece di underscore)',
    ],
    useCases: [
      'Pianificare strutture URL pulite prima di lanciare categorie di blog o collezioni CMS',
      'Pulire titoli di prodotti internazionali accentati in slug ASCII sicuri',
      'Verificare permalink CMS eccessivamente lunghi riducendoli a percorsi nitidi di 4–6 parole',
      'Preparare elenchi di destinazioni canoniche da inserire nel Generatore di Sitemap XML',
    ],
    faqs: [
      {
        question: 'Gli slug URL SEO devono usare trattini (-) o underscore (_)?',
        answer:
          'Google consiglia i trattini (-) come separatori di parole negli URL perché i parser di ricerca trattano i trattini come spazi, mentre gli underscore uniscono le parole adiacenti.',
      },
      {
        question: 'Rimuovere le stop word danneggia la leggibilità?',
        answer:
          'Rimuovere brevi parole di riempimento come "a", "il" o "di" rende più incisivi gli slug di blog molto lunghi. Mantieni le stop word se rimuoverle altera il significato principale (per esempio "come fare").',
      },
      {
        question: 'Dovrei cambiare gli slug di URL live già indicizzati?',
        answer:
          'Solo se distribuisci redirect permanenti 301 dal vecchio slug al nuovo slug (usando il nostro Generatore di Canonical, Hreflang e Redirect 301) così backlink e posizionamenti si trasferiscono in modo pulito.',
      },
      {
        question: 'Il Generatore di Slug URL è gratuito?',
        answer:
          'Sì. È completamente gratuito, senza registrazione e senza limiti su quanti titoli converti in una sessione.',
      },
      {
        question: 'Posso generare slug per molti titoli alla volta?',
        answer:
          'Sì. Incolla un titolo per riga e lo strumento converte l’intero batch in un’unica tabella, così puoi assegnare slug a un intero calendario editoriale in una volta.',
      },
      {
        question: 'Come vengono gestiti i caratteri accentati negli slug?',
        answer:
          'I segni diacritici vengono traslitterati in ASCII semplice — é diventa e, ü diventa u, ñ diventa n — così gli URL restano leggibili e sicuri in tutti i browser e server.',
      },
      {
        question: 'Che cosa succede a simboli come & e @ in uno slug?',
        answer:
          'La e commerciale (&) viene espansa in "e" e la maggior parte degli altri segni di punteggiatura viene rimossa, perché i simboli negli URL possono rompere i link o apparire disordinati quando condivisi.',
      },
      {
        question: 'Che cosa sono le stop word e perché dovrei rimuoverle?',
        answer:
          'Le stop word sono brevi parole di riempimento come "a", "il", "di" e "in". Rimuoverle accorcia gli slug lunghi dei blog senza cambiare il significato principale.',
      },
      {
        question: 'Posso mantenere le stop word nei miei slug?',
        answer:
          'Sì. Disattiva l’interruttore di rimozione delle stop word e il generatore mantiene ogni parola del titolo, incluse le brevi parole di riempimento.',
      },
      {
        question: 'Qual è la lunghezza ideale di uno slug SEO?',
        answer:
          'Punta a 3–6 parole significative. Usa l’impostazione Lunghezza massima slug per mantenere gli slug brevi e lo strumento taglia ai confini di parola, così le parole non vengono mai divise a metà.',
      },
      {
        question: 'Gli slug URL devono essere minuscoli?',
        answer:
          'Sì. Gli slug minuscoli evitano problemi di contenuti duplicati, perché alcuni server trattano /Post-Blog e /post-blog come pagine diverse.',
      },
      {
        question: 'Posso usare underscore invece di trattini negli slug?',
        answer:
          'Puoi scegliere gli underscore nelle impostazioni, ma i trattini sono consigliati perché i motori di ricerca li trattano come separatori di parole e gli underscore come unitori.',
      },
      {
        question: 'I miei titoli vengono caricati da qualche parte?',
        answer:
          'No. Il Generatore di Slug URL funziona interamente nel browser, quindi i tuoi titoli non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Come visualizzo in anteprima l’URL completo con il mio dominio?',
        answer:
          'Inserisci il tuo dominio nel campo Dominio di base e la tabella dei risultati mostra ogni slug come URL completo che puoi copiare.',
      },
      {
        question: 'Gli slug devono terminare con una barra finale?',
        answer:
          'È facoltativo, ma sii coerente: usa l’interruttore della barra finale per allinearti allo stile di URL già usato dal tuo sito, così non crei versioni duplicate.',
      },
      {
        question: 'Posso usare questo strumento per pagine di prodotti e categorie?',
        answer:
          'Sì. Funziona per qualsiasi nome di pagina: titoli di prodotti, nomi di categorie, landing page e titoli di documentazione si convertono allo stesso modo.',
      },
      {
        question: 'Perché il mio slug è stato tagliato più corto della lunghezza massima impostata?',
        answer:
          'Lo strumento tronca al trattino più vicino prima del limite invece di tagliare a metà parola, quindi uno slug può risultare di qualche carattere più corto del massimo.',
      },
      {
        question: 'Che cosa succede ai titoli scritti in alfabeti non latini?',
        answer:
          'Vengono traslitterati solo i segni diacritici latini; i caratteri di altri alfabeti vengono rimossi, quindi un titolo scritto interamente in un altro alfabeto può produrre uno slug molto corto. Aggiungi una versione latina delle parole chiave per il miglior risultato.',
      },
      {
        question: 'Posso esportare tutti i miei slug in una volta?',
        answer:
          'Sì. Usa i pulsanti di copia in blocco per copiare ogni slug, o ogni URL completo, in un clic invece di copiarli uno per uno.',
      },
      {
        question: 'Qual è la differenza tra uno slug e un permalink?',
        answer:
          'Lo slug è la parte finale leggibile di un URL, come "migliori-strumenti-cafe", mentre il permalink è l’URL completo incluso dominio ed eventuali cartelle.',
      },
    ],
  },
  'keyword-density-checker': {
    slug: 'verificatore-di-densita-parole-chiave',
    name: 'Verificatore di Densità delle Parole Chiave e Analizzatore di Contenuti',
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
    instructions: [
      {
        title: 'Incolla la bozza dell’articolo o l’HTML',
        description:
          'Inserisci testo semplice o HTML grezzo (mantieni attiva l’opzione Rimuovi tag HTML per ignorare markup e blocchi script/style).',
      },
      {
        title: 'Inserisci la frase di destinazione e la dimensione n-gramma',
        description:
          'Specifica una parola chiave o frase di destinazione opzionale e passa da analisi di frasi di 1, 2 o 3 parole.',
      },
      {
        title: 'Esamina la tabella delle frequenze',
        description:
          'Scorri i termini principali e le percentuali (%) per confermare la focalizzazione tematica e ridurre le ripetizioni innaturali di frasi.',
      },
      {
        title: 'Controlla conteggio parole, tempo di lettura e vocabolario',
        description:
          'Usa parole totali, quota di parole uniche e tempo di lettura per valutare se la bozza è troppo scarna, troppo lunga o troppo ripetitiva.',
      },
      {
        title: 'Riscrivi in modo naturale le frasi abusate',
        description:
          'Quando la stessa frase di 2 o 3 parole domina la tabella, variala con sinonimi e pronomi invece di eliminare del tutto la parola chiave del tema.',
      },
      {
        title: 'Correggi i conteggi strani prima di fidarti dei risultati',
        description:
          'Se i numeri sembrano sbagliati, verifica che Rimuovi tag HTML sia attivo e che menu di navigazione, blocchi di codice o piè di pagina non siano stati incollati insieme al testo.',
      },
    ],
    examples: [
      {
        title: 'Individuare ripetizioni di frasi involontarie in una bozza di 500 parole',
        input: 'Bozza di articolo + Destinazione: "seo tecnica" + Frasi di 2 parole',
        output: 'Classifica i bigrammi principali ("seo tecnica", "meta description", "tag canonici") con percentuale.',
        explanation:
          'Evidenzia sia l’allineamento al tema principale sia le frasi ripetitive che puoi variare in modo naturale.',
      },
      {
        title: 'Verificare una landing page da HTML esportato',
        input: 'HTML grezzo della landing page con Rimuovi tag HTML attivo',
        output: 'Conteggio parole pulito, tempo di lettura e tabella dei bigrammi senza token di script o CSS.',
        explanation:
          'La rimozione dei tag isola il testo visibile, così le statistiche riflettono ciò che leggono i visitatori.',
      },
    ],
    benefits: [
      'Analizza frasi di più parole (bigrammi e trigrammi), non solo singole parole',
      'Rimuove in sicurezza blocchi <script> e <style> e tag HTML prima di contare il testo',
      'Include indicazioni oneste che sconsigliano il keyword stuffing meccanico',
      'Mantiene bozze non pubblicate e brief dei clienti rigorosamente nella memoria del browser',
    ],
    useCases: [
      'Revisionare guide lunghe per assicurarsi che i temi principali appaiano chiaramente senza stuffing goffo',
      'Verificare bozze prive di concorrenti per l’equilibrio del vocabolario tematico',
      'Revisionare il testo di landing page ripulito da HTML esportato',
      'Controllare il tempo medio di lettura insieme a Contatore di parole e Verificatore di leggibilità',
    ],
    faqs: [
      {
        question: 'Esiste una percentuale ideale di densità delle parole chiave per Google?',
        answer:
          'No. Google afferma esplicitamente che non esiste una soglia fissa di densità delle parole chiave. Scrivi in modo naturale per i lettori e usa le verifiche di densità solo per controllare la copertura del tema ed evitare ripetizioni innaturali.',
      },
      {
        question: 'Come gestisce Rimuovi tag HTML gli elementi <script> e <style>?',
        answer:
          'Rimuove interi blocchi <script> e <style> prima di eliminare i tag HTML rimanenti, così i token di JavaScript o CSS non inquinano mai le statistiche delle parole.',
      },
      {
        question: 'Posso analizzare un URL di un concorrente live digitando un dominio qui?',
        answer:
          'No. Incolla direttamente il testo o il sorgente HTML: le app browser non possono fare scraping di siti di terze parti tra origini diverse senza proxy server.',
      },
      {
        question: 'Il Verificatore di Densità delle Parole Chiave è gratuito?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, e puoi analizzare quante bozze vuoi.',
      },
      {
        question: 'Che cos’è esattamente la densità delle parole chiave?',
        answer:
          'La densità delle parole chiave è la frequenza con cui una parola o frase appare in percentuale rispetto alle parole totali di un testo. Una frase usata 5 volte in 500 parole ha una densità dell’1%.',
      },
      {
        question: 'Che cosa conta come keyword stuffing?',
        answer:
          'Il keyword stuffing è ripetere una frase in modo innaturale solo per posizionarsi più in alto. Si legge male per i visitatori e può danneggiare il posizionamento, quindi usa questo strumento per individuare le ripetizioni, non per raggiungere un numero obiettivo.',
      },
      {
        question: 'Che cosa sono gli n-grammi e perché controllare frasi di 2 e 3 parole?',
        answer:
          'Gli n-grammi sono sequenze di n parole: i bigrammi sono frasi di 2 parole e i trigrammi di 3 parole. Controllarli rivela frasi ripetute che i conteggi di singole parole non colgono affatto.',
      },
      {
        question: 'Quante parole servono per un controllo di densità significativo?',
        answer:
          'I testi brevi producono percentuali rumorose, quindi punta ad almeno 300 parole per risultati stabili. Frammenti molto brevi possono comunque mostrare conteggi grezzi, ma tratta le percentuali con cautela.',
      },
      {
        question: 'Lo strumento conta le parole dentro titoli ed elenchi?',
        answer:
          'Sì. Tutto il testo visibile incollato viene contato, inclusi titoli, elenchi puntati e didascalie, perché anche i motori di ricerca vedono quei contenuti.',
      },
      {
        question: 'Perché la mia frase di destinazione mostra 0%?',
        answer:
          'Controlla ortografia e formulazione esatte: plurali, trattini e ordine delle parole devono corrispondere. Verifica anche che Rimuovi tag HTML sia attivo se hai incollato HTML.',
      },
      {
        question: 'Posso controllare la densità di più parole chiave alla volta?',
        answer:
          'Ogni esecuzione tiene traccia di una sola frase di destinazione. Per controllare un’altra parola chiave, cambia la frase di destinazione ed esegui di nuovo l’analisi sullo stesso testo.',
      },
      {
        question: 'Il verificatore conta le stop word come "il" e "e"?',
        answer:
          'Sì, appaiono nella tabella di frequenza delle singole parole, ma concentrati sulle parole e frasi tematiche: le stop word sono naturalmente frequenti in ogni testo e dicono poco sulla SEO.',
      },
      {
        question: 'La mia bozza viene caricata da qualche parte?',
        answer:
          'No. Il Verificatore di Densità delle Parole Chiave funziona interamente nel browser, quindi bozze non pubblicate e testi dei clienti non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Qual è un buon tempo di lettura per un post del blog?',
        answer:
          'Dipende dall’argomento, ma lo strumento mostra il tempo di lettura così puoi valutare se un post corrisponde alle aspettative dei lettori: una guida rapida potrebbe durare 3 minuti, un tutorial approfondito 10 o più.',
      },
      {
        question: 'Posso incollare HTML copiato dal mio CMS?',
        answer:
          'Sì. Incolla l’HTML grezzo e mantieni attivo Rimuovi tag HTML così tag, script e stili vengono rimossi prima che le parole siano contate.',
      },
      {
        question: 'Il verificatore funziona con testi non in italiano?',
        answer:
          'Sì. Il conteggio delle parole funziona per qualsiasi lingua che separa le parole con spazi e le tabelle n-grammi elencheranno le frasi più frequenti in quella lingua.',
      },
      {
        question: 'Come abbasso la densità senza rimuovere il mio tema?',
        answer:
          'Usa sinonimi, pronomi e formulazioni varie invece di ripetere la parola chiave esatta. Il tema resta chiaro mentre il testo si legge in modo naturale.',
      },
      {
        question: 'Che cosa significa diversità del vocabolario?',
        answer:
          'È la quota di parole uniche rispetto alle parole totali. Una quota più alta di solito indica una scrittura più ricca e varia; una quota molto bassa può segnalare testi ripetitivi.',
      },
      {
        question: 'Posso analizzare un PDF o un documento Word?',
        answer:
          'Lo strumento accetta testo incollato, quindi copia il testo dal tuo PDF o file Word e incollalo qui: la formattazione non serve per un controllo di densità.',
      },
      {
        question: 'Perché le percentuali cambiano quando cambio la dimensione n-gramma?',
        answer:
          'Ogni dimensione n-gramma ha il suo totale: un testo di 500 parole ha 500 singole parole ma solo 499 frasi di due parole, quindi lo stesso conteggio di frasi produce una percentuale leggermente diversa.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Hreflang o Redirect 301',
        description:
          'Seleziona Tag Canonical e Hreflang per la SEO internazionale oppure Generatore di regole Redirect 301 per le migrazioni URL.',
      },
      {
        title: 'Inserisci localizzazioni o coppie di migrazione URL',
        description:
          'Aggiungi codici ISO lingua-regione (en-US, en-GB, x-default) e URL, oppure incolla coppie di percorsi vecchio-nuovo.',
      },
      {
        title: 'Controlla i tag o le regole generati',
        description:
          'Esamina ogni codice di localizzazione, URL e coppia di redirect per refusi prima di copiare: un solo codice sbagliato può rompere l’intero set hreflang.',
      },
      {
        title: 'Aggiungi x-default e canonical autoreferenziali',
        description:
          'Includi una localizzazione di ripiego x-default e assicurati che ogni pagina elenchi se stessa come proprio canonical.',
      },
      {
        title: 'Copia la configurazione pronta per la piattaforma',
        description:
          'Copia direttamente i tag HTML <link>, le righe XML <xhtml:link> o le regole _redirects / .htaccess / nginx.',
      },
      {
        title: 'Convalida dopo la distribuzione',
        description:
          'Una volta live, visualizza il sorgente della pagina o usa un validatore hreflang per confermare che i tag siano presenti, reciproci e puntino agli URL corretti.',
      },
    ],
    examples: [
      {
        title: 'Regola di migrazione 301 per Cloudflare Pages',
        input: '/vecchio-post-blog, /blog/nuovo-post/',
        output: '/vecchio-post-blog /blog/nuovo-post/ 301',
        explanation:
          'Restituisce la sintassi esatta _redirects di Cloudflare Pages con stato esplicito 301 permanente.',
      },
      {
        title: 'Set hreflang reciproco per tre lingue',
        input: 'Localizzazioni: en, it, es con URL corrispondenti più x-default',
        output: 'Tag <link rel="alternate" hreflang="..."> completi per ogni versione linguistica',
        explanation:
          'Ogni pagina rimanda a tutte le altre versioni e a se stessa, così i motori di ricerca non ignorano l’annotazione.',
      },
    ],
    benefits: [
      'Restituisce in modo coerente sia i formati HTML <link rel="alternate"> sia XML <xhtml:link>',
      'Supporta la sintassi _redirects di Cloudflare Pages, .htaccess di Apache e server Nginx',
      'Incoraggia canonical autoreferenziali e localizzazioni di ripiego x-default',
      'Normalizza automaticamente le barre iniziali sui percorsi di origine dei redirect',
    ],
    useCases: [
      'Lanciare pagine regionali in inglese, spagnolo e francese in modo pulito senza penalità per duplicati',
      'Preservare il valore dei backlink quando si rinominano gli slug durante un redesign',
      'Generare file _redirects in /public/ per Cloudflare Pages in pochi secondi',
      'Verificare set hreflang reciproci prima di inviare sitemap internazionali',
    ],
    faqs: [
      {
        question: 'I tag hreflang devono essere bidirezionali e reciproci?',
        answer:
          'Sì. Se la pagina A linka alla pagina B con hreflang="es", la pagina B deve ricollegarsi alla pagina A con hreflang="en" (e a se stessa), altrimenti i motori di ricerca ignorano l’annotazione.',
      },
      {
        question: 'Quando dovrei usare x-default in hreflang?',
        answer:
          'Usa hreflang="x-default" per designare la tua pagina internazionale di ripiego per i visitatori la cui lingua o regione del browser non corrisponde ad alcuna alternativa specifica.',
      },
      {
        question: 'Gli URL canonici devono puntare tra lingue diverse (per esempio da it a en)?',
        answer:
          'No. Ogni versione linguistica tradotta dovrebbe dichiarare un canonical autoreferenziale che punta a se stessa, mentre hreflang collega gli equivalenti localizzati.',
      },
      {
        question: 'Il Generatore di Hreflang è gratuito?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, e puoi generare tutti i set hreflang e le regole di redirect che ti servono.',
      },
      {
        question: 'Che cos’è hreflang e perché è importante?',
        answer:
          'Hreflang è un’annotazione HTML o XML che dice ai motori di ricerca quale versione linguistica e regionale di una pagina mostrare a ciascun visitatore, così gli utenti italiani vedono la pagina italiana e quelli spagnoli quella spagnola.',
      },
      {
        question: 'Che formato devono avere i codici lingua-regione?',
        answer:
          'Usa codici di lingua ISO con una regione ISO opzionale, come it, es, fr-CA o en-GB. Prima viene la lingua, poi un trattino, poi la regione in maiuscolo.',
      },
      {
        question: 'Ho bisogno di hreflang se il mio sito ha una sola lingua?',
        answer:
          'No. Hreflang è utile solo quando lo stesso contenuto esiste in più di una lingua o versione regionale.',
      },
      {
        question: 'Posso mettere hreflang nella mia sitemap XML invece che in HTML?',
        answer:
          'Sì. Lo strumento restituisce entrambi i formati: tag link HTML per il head della pagina e blocchi xhtml:link per la sitemap XML. Scegli un posto e mantienilo coerente.',
      },
      {
        question: 'Che cos’è un canonical autoreferenziale?',
        answer:
          'È un tag canonical su una pagina che punta alla pagina stessa. Ogni versione di una pagina dovrebbe includerne uno, inclusa ogni versione tradotta.',
      },
      {
        question: 'Quando dovrei usare un redirect 301 invece di un tag canonical?',
        answer:
          'Usa un redirect 301 quando una pagina si è spostata permanentemente a un nuovo URL. Usa un tag canonical quando due pagine simili devono restare entrambe live e vuoi che i motori di ricerca ne preferiscano una.',
      },
      {
        question: 'Qual è la differenza tra un redirect 301 e un redirect 302?',
        answer:
          'Un 301 è permanente e trasferisce la maggior parte dei segnali di posizionamento al nuovo URL; un 302 è temporaneo e dice ai motori di ricerca che il vecchio URL potrebbe tornare, quindi è la scelta sbagliata per uno spostamento permanente.',
      },
      {
        question: 'Come funzionano i _redirects di Cloudflare Pages?',
        answer:
          'Metti un file _redirects nella cartella public del sito con una regola per riga — vecchio percorso, nuovo percorso e codice di stato — e Cloudflare applica i redirect quando il sito viene distribuito.',
      },
      {
        question: 'Posso reindirizzare un’intera cartella con una sola regola?',
        answer:
          'Lo strumento restituisce una regola per coppia di URL. Per uno spostamento a livello di cartella, usa una regola wildcard o splat in Cloudflare Pages o Apache, oppure genera qui l’elenco completo delle coppie.',
      },
      {
        question: 'I redirect 301 trasferiscono i segnali di posizionamento alla nuova pagina?',
        answer:
          'Sì. Un redirect 301 trasferisce la maggior parte dei segnali di posizionamento e del valore dei link della vecchia pagina al nuovo URL, ed è per questo lo standard per gli spostamenti permanenti.',
      },
      {
        question: 'Il vecchio URL deve restare nella mia sitemap dopo un redirect 301?',
        answer:
          'No. Rimuovi gli URL reindirizzati dalla sitemap ed elenca solo i nuovi URL di destinazione, così i motori di ricerca scansionano le pagine attuali.',
      },
      {
        question: 'Per quanto tempo dovrei mantenere attivo un redirect 301?',
        answer:
          'Mantienilo per almeno un anno, idealmente per sempre. Rimuoverlo troppo presto può rompere vecchi backlink e segnalibri che puntano ancora al vecchio URL.',
      },
      {
        question: 'Hreflang può risolvere i problemi di contenuti duplicati?',
        answer:
          'Non da solo. Hreflang dice ai motori di ricerca quale versione mostrare a ciascun pubblico, ma pagine davvero duplicate nella stessa lingua richiedono comunque tag canonical o consolidamento.',
      },
      {
        question: 'Che cosa succede se uso un codice di localizzazione sbagliato?',
        answer:
          'I motori di ricerca ignorano i codici non validi, quindi un refuso come en-UK invece di en-GB rompe silenziosamente quella versione linguistica. Controlla ogni codice prima di distribuire.',
      },
      {
        question: 'Il mio elenco di URL viene caricato da qualche parte?',
        answer:
          'No. Il Generatore di Canonical, Hreflang e Redirect 301 funziona interamente nel browser, quindi i tuoi URL e piani di migrazione non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Posso generare tag hreflang per più di due lingue?',
        answer:
          'Sì. Aggiungi tutte le righe di localizzazione supportate dal tuo sito: lo strumento crea un set reciproco completo che copre ogni versione linguistica inserita.',
      },
    ],
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
    instructions: [
      {
        title: 'Copia il sorgente HTML dalla tua pagina',
        description:
          'Apri Visualizza sorgente pagina (o ispeziona il file dist/index.html compilato) e incolla l’HTML nell’area di testo del sorgente.',
      },
      {
        title: 'Esamina punteggio di audit DOM e checklist',
        description:
          'Ispeziona gli indicatori superato/avviso per titolo, meta description, H1 unico, link canonical, alt text e dati strutturati.',
      },
      {
        title: 'Verifica struttura dei titoli e link',
        description:
          'Scorri l’albero H1–H4 estratto e il conteggio dei link interni ed esterni per correggere livelli saltati o tag mancanti.',
      },
      {
        title: 'Correggi gli avvisi in ordine di priorità',
        description:
          'Inizia con un titolo mancante o troppo lungo e una meta description mancante, poi tag H1 duplicati, poi testo alt delle immagini mancante.',
      },
      {
        title: 'Re-incolla e verifica di nuovo dopo le correzioni',
        description:
          'Incolla l’HTML aggiornato ed esegui di nuovo l’audit per confermare che il punteggio sia migliorato e che non siano apparsi nuovi avvisi.',
      },
      {
        title: 'Verifica le pagine renderizzate da JavaScript nel modo giusto',
        description:
          'Se i meta tag mancano nel Visualizza sorgente grezzo di una pagina React o SPA, copia invece l’outerHTML live dal pannello Elementi di DevTools del browser.',
      },
    ],
    examples: [
      {
        title: 'Verificare un export HTML statico renderizzato',
        input: 'Documento <html> completo con <title>, <meta description>, H1/H2 e JSON-LD',
        output: '6/6 controlli superati · Struttura H1–H4 + ripartizione link interni ed esterni',
        explanation:
          'Usa il DOMParser nativo del browser in modo pulito senza eseguire script non attendibili.',
      },
      {
        title: 'Individuare H1 duplicati in un modello CMS',
        input: 'Sorgente HTML di un post del blog con due tag H1',
        output: 'Avviso: H1 duplicato rilevato con le righe esatte da correggere nel modello.',
        explanation:
          'L’estrazione della struttura dei titoli rende visibili subito gli errori di modello.',
      },
    ],
    benefits: [
      'Usa il DOMParser nativo (non esegue mai i tag <script> incollati o payload esterni)',
      'È onesto sui limiti CORS del browser: non finge mai di fare scraping di URL remoti bloccati',
      'Estrae in modo pulito la struttura completa del documento H1–H4',
      'Verifica la presenza di Open Graph e JSON-LD insieme ai tag SEO classici',
    ],
    useCases: [
      'Controllo qualità pre-distribuzione su build di staging ed export HTML statici',
      'Controllare modelli di blog CMS per tag <h1> duplicati accidentali o attributi alt vuoti',
      'Verificare che le pagine renderizzate dal server emettano canonical e meta tag in modo pulito',
      'Ispezionare pagine HTML protette da login o localhost inaccessibili ai crawler cloud',
    ],
    faqs: [
      {
        question: 'Perché questo strumento mi chiede di incollare il sorgente HTML invece di digitare un URL del sito?',
        answer:
          'I browser applicano le policy CORS (Cross-Origin Resource Sharing) che impediscono al JavaScript lato client di leggere siti esterni arbitrari, e gli URL localhost o di staging privati sono irraggiungibili dai server pubblici. Incollare il Visualizza sorgente pagina rende l’audit locale affidabile al 100% e privato.',
      },
      {
        question: 'Le SPA renderizzate da JavaScript possono essere verificate correttamente con il Visualizza sorgente grezzo?',
        answer:
          'Per le SPA renderizzate lato client in cui React inietta i meta tag a runtime, copia invece l’outerHTML live dal pannello Elementi di DevTools di Chrome o Firefox invece del Visualizza sorgente grezzo.',
      },
      {
        question: 'DOMParser esegue gli script dentro l’HTML incollato?',
        answer:
          'No. DOMParser.parseFromString(..., "text/html") costruisce un albero DOM inerte rigorosamente per l’ispezione senza eseguire JavaScript o caricare immagini esterne.',
      },
      {
        question: 'Il Verificatore SEO On-Page è gratuito?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, e puoi verificare tutte le pagine che vuoi.',
      },
      {
        question: 'Qual è la lunghezza ideale del title tag?',
        answer:
          'Punta a 50–60 caratteri. I titoli più lunghi vengono tagliati nei risultati di ricerca, mentre i titoli molto brevi sprecano l’occasione di descrivere chiaramente la pagina.',
      },
      {
        question: 'Qual è la lunghezza ideale della meta description?',
        answer:
          'Punta a 150–160 caratteri. Questa lunghezza di solito viene mostrata per intero nei risultati di ricerca senza essere troncata.',
      },
      {
        question: 'Quanti tag H1 dovrebbe avere una pagina?',
        answer:
          'Uno. Un singolo H1 dichiara l’argomento principale della pagina; i sottoargomenti appartengono ai titoli H2 e H3 sottostanti.',
      },
      {
        question: 'Posso saltare livelli di titolo, per esempio da H1 a H3?',
        answer:
          'Evitalo. Mantieni la gerarchia in ordine — H1, poi H2, poi H3 — così motori di ricerca e screen reader possono seguire la struttura della pagina.',
      },
      {
        question: 'Che cosa succede se la mia pagina non ha un tag canonical?',
        answer:
          'I motori di ricerca sceglieranno da soli un URL canonico, che potrebbe non essere la versione che preferisci. Aggiungerne uno esplicitamente elimina le congetture.',
      },
      {
        question: 'Perché il testo alt delle immagini è importante per la SEO?',
        answer:
          'Il testo alt descrive le immagini ai motori di ricerca e agli screen reader, aiuta le immagini a posizionarsi nella ricerca per immagini e mantiene la pagina utilizzabile quando un’immagine non si carica.',
      },
      {
        question: 'Che cos’è JSON-LD e perché dovrei controllarlo?',
        answer:
          'JSON-LD è un blocco di dati strutturati che descrive il contenuto della tua pagina ai motori di ricerca, alimentando rich result come valutazioni, FAQ e breadcrumb. Il verificatore conferma che sia presente.',
      },
      {
        question: 'Il verificatore controlla i tag Open Graph?',
        answer:
          'Sì. Segnala se sono presenti tag Open Graph come og:title e og:image, così la tua pagina viene visualizzata correttamente quando condivisa sui social media.',
      },
      {
        question: 'Posso verificare una pagina che richiede login?',
        answer:
          'Sì. Poiché incolli tu stesso l’HTML, puoi verificare pagine private, di staging e localhost che i crawler pubblici non possono raggiungere.',
      },
      {
        question: 'Il mio HTML viene caricato da qualche parte?',
        answer:
          'No. Il Verificatore SEO On-Page funziona interamente nel browser, quindi il sorgente della tua pagina non lascia mai il tuo dispositivo.',
      },
      {
        question: 'Il mio punteggio di audit è basso: che cosa dovrei correggere per primo?',
        answer:
          'Correggi i problemi in quest’ordine: un titolo mancante o troppo lungo, una meta description mancante, tag H1 duplicati, poi testo alt delle immagini mancante.',
      },
      {
        question: 'Il verificatore conta i link interni ed esterni?',
        answer:
          'Sì. Conta separatamente link interni ed esterni, così puoi vedere se una pagina linka abbastanza verso l’esterno e se la navigazione interna è presente.',
      },
      {
        question: 'Posso verificare la mia homepage e i post del blog con lo stesso strumento?',
        answer:
          'Sì. Incolla il sorgente HTML di ciascuna pagina separatamente e verificale una alla volta: ogni pagina ottiene il proprio punteggio e la propria checklist.',
      },
      {
        question: 'Perché alcuni controlli mostrano avvisi invece di errori?',
        answer:
          'Gli avvisi segnalano problemi di best practice che vale la pena correggere ma non sono errori critici, come un titolo leggermente lungo o un livello di titolo saltato.',
      },
      {
        question: 'Funziona per le pagine WordPress?',
        answer:
          'Sì. Apri Visualizza sorgente pagina su qualsiasi pagina WordPress, copia l’HTML e incollalo qui: il verificatore funziona con l’output di qualsiasi CMS.',
      },
      {
        question: 'Quanto spesso dovrei eseguire un audit SEO on-page?',
        answer:
          'Eseguine uno ogni volta che cambi un modello, pubblichi un nuovo tipo di pagina o dopo un redesign, e verifica di nuovo dopo le correzioni per confermare che il punteggio sia migliorato.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli le direttive di indicizzazione e link',
        description:
          'Imposta index/noindex, follow/nofollow e restrizioni opzionali come noarchive, nosnippet o noimageindex.',
      },
      {
        title: 'Regola i limiti di snippet e anteprima',
        description:
          'Configura max-snippet (-1 per illimitato), max-image-preview (large per Google Discover) e max-video-preview.',
      },
      {
        title: 'Copia il tag HTML o l’header HTTP',
        description:
          'Usa il meta tag HTML dentro <head> oppure distribuisci il blocco header X-Robots-Tag per PDF e download non HTML.',
      },
      {
        title: 'Scegli il formato di output giusto',
        description:
          'Usa il meta tag HTML per le pagine normali, X-Robots-Tag per PDF e altri file non HTML e il blocco _headers per le regole di percorso Cloudflare.',
      },
      {
        title: 'Metti l’output nel posto giusto',
        description:
          'Metti il meta tag dentro il <head> della pagina oppure aggiungi le regole header alla configurazione del server o al file _headers di Cloudflare, poi distribuisci.',
      },
      {
        title: 'La pagina appare ancora nella ricerca?',
        description:
          'Noindex funziona solo dopo che i motori di ricerca riscansionano la pagina, il che può richiedere giorni. Verifica che robots.txt non stia bloccando la scansione, poi conferma in Search Console.',
      },
    ],
    examples: [
      {
        title: 'Escludere download PDF privati tramite _headers di Cloudflare Pages',
        input: 'noindex, nofollow · Percorso: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation:
          'L’header HTTP X-Robots-Tag funziona per PDF, immagini e file non HTML privi di elemento <head>.',
      },
      {
        title: 'Pagina di ringraziamento con noindex e max-snippet zero',
        input: 'noindex, nofollow · max-snippet: 0 · max-image-preview: none',
        output: '<meta name="robots" content="noindex, nofollow, max-snippet:0, max-image-preview:none">',
        explanation:
          'La combinazione nasconde la pagina dai risultati e impedisce qualsiasi snippet di testo o anteprima immagine.',
      },
    ],
    benefits: [
      'Restituisce contemporaneamente meta <meta> HTML, X-Robots-Tag HTTP generico e _headers per Cloudflare Pages',
      'Include i valori predefiniti max-image-preview:large consigliati da Google Discover',
      'Previene automaticamente le combinazioni in conflitto (disattiva gli slider di snippet e immagini quando nosnippet o noimageindex sono attivi)',
      'Rende semplice la de-indicizzazione di PDF e asset non HTML tramite header HTTP',
    ],
    useCases: [
      'Impedire a pagine di ringraziamento, risultati di ricerca interni o portali membri di entrare nell’indice Google',
      'De-indicizzare brochure PDF ospitate o asset whitepaper tramite header X-Robots-Tag',
      'Abilitare max-image-preview:large per articoli editoriali mirati a Google Discover',
      'Aggiungere limiti rigidi di noarchive o lunghezza snippet su documentazione paywalled o sensibile',
    ],
    faqs: [
      {
        question: 'Quando dovrei usare X-Robots-Tag invece di <meta name="robots">?',
        answer:
          'Usa gli header HTTP X-Robots-Tag per file non HTML (come PDF, fogli di calcolo o immagini) o quando applichi regole di indicizzazione a un intero percorso di cartella tramite regole CDN.',
      },
      {
        question: 'Dovrei combinare Disallow in robots.txt con <meta name="robots" content="noindex">?',
        answer:
          'No! Se un URL è bloccato in robots.txt, i bot di ricerca non possono scansionare la pagina per leggere il tag HTML <meta name="robots" content="noindex"> al suo interno. Consenti la scansione se ti affidi al noindex meta.',
      },
      {
        question: 'Che cosa significa max-snippet:-1?',
        answer:
          'Un valore di -1 consente ai motori di ricerca di scegliere qualsiasi lunghezza di snippet ritengano utile, mentre 0 impedisce gli snippet di testo e gli interi positivi (come 160) limitano la lunghezza in caratteri dello snippet.',
      },
      {
        question: 'Il Generatore di Meta Tag Robots è gratuito?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, e puoi generare tutti i tag e le regole header che ti servono.',
      },
      {
        question: 'Che cosa fa noindex?',
        answer:
          'Noindex dice ai motori di ricerca di non includere una pagina nei risultati di ricerca. La pagina resta live e visitabile, ma non apparirà su Google o Bing.',
      },
      {
        question: 'Che cosa fa nofollow?',
        answer:
          'Nofollow dice ai motori di ricerca di non seguire i link di una pagina né di trasferire segnali di posizionamento attraverso di essi. È utile per pagine con link non attendibili o a pagamento.',
      },
      {
        question: 'Qual è la differenza tra robots.txt e un meta tag robots?',
        answer:
          'Robots.txt blocca la scansione di un URL, mentre un meta tag robots controlla se una pagina scansionata viene indicizzata. Risolvono problemi diversi e non devono essere combinati con noncuranza.',
      },
      {
        question: 'Quanto tempo impiega noindex a funzionare?',
        answer:
          'Ha effetto solo dopo che i motori di ricerca riscansionano la pagina, il che può richiedere giorni o settimane a seconda della frequenza di visita della pagina.',
      },
      {
        question: 'Che cos’è max-image-preview:large?',
        answer:
          'Consente ai motori di ricerca di mostrare anteprime di immagini grandi per la tua pagina, cosa che Google consiglia per le pagine mirate a Google Discover.',
      },
      {
        question: 'Che cosa fa nosnippet?',
        answer:
          'Nosnippet impedisce ai motori di ricerca di mostrare qualsiasi snippet di testo per la pagina nei risultati di ricerca, così appaiono solo titolo e URL.',
      },
      {
        question: 'Che cosa fa noarchive?',
        answer:
          'Noarchive impedisce ai motori di ricerca di offrire una copia cache della tua pagina, utile per contenuti sensibili al tempo o che cambiano frequentemente.',
      },
      {
        question: 'Che cosa fa noimageindex?',
        answer:
          'Noimageindex dice ai motori di ricerca di non indicizzare le immagini di una pagina, mentre la pagina stessa può comunque apparire nei normali risultati di ricerca.',
      },
      {
        question: 'Posso applicare noindex a un file PDF?',
        answer:
          'Sì. I PDF non hanno un head HTML, quindi usa invece l’header HTTP X-Robots-Tag: lo strumento genera il blocco header esatto per te.',
      },
      {
        question: 'Dovrei applicare noindex a pagine di ringraziamento e checkout?',
        answer:
          'Sì. Pagine di ringraziamento, passaggi di checkout, risultati di ricerca interni e aree membri di solito non aggiungono valore di ricerca e vengono comunemente impostate su noindex.',
      },
      {
        question: 'Posso combinare noindex e nofollow sulla stessa pagina?',
        answer:
          'Sì. Controllano cose diverse — indicizzazione e seguito dei link — e vengono spesso usate insieme su pagine private o di utilità.',
      },
      {
        question: 'Che cos’è un file _headers di Cloudflare?',
        answer:
          'È un file nella cartella public del sito che mappa percorsi URL a header di risposta HTTP. Lo strumento restituisce un blocco pronto da incollare per qualsiasi percorso scelto.',
      },
      {
        question: 'I meta tag robots funzionano su Bing e altri motori di ricerca?',
        answer:
          'Sì. La maggior parte dei principali motori di ricerca rispetta le direttive robots standard, anche se alcuni supportano solo un sottoinsieme: attieniti alle direttive comuni per la copertura più ampia.',
      },
      {
        question: 'La mia configurazione viene caricata da qualche parte?',
        answer:
          'No. Il Generatore di Meta Tag Robots funziona interamente nel browser, quindi le tue impostazioni non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Che cosa succede se scelgo direttive in conflitto?',
        answer:
          'Lo strumento previene automaticamente le combinazioni in conflitto: per esempio, disattiva gli slider di snippet e anteprima immagine quando nosnippet o noimageindex è attivo.',
      },
      {
        question: 'Dovrei usare noindex o semplicemente eliminare la pagina?',
        answer:
          'Se una pagina deve sparire per sempre, eliminala e lascia che restituisca uno stato 404 o 410. Usa noindex quando la pagina deve restare live ma non deve apparire nei risultati di ricerca.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli un’immagine di origine',
        description:
          'Seleziona un’immagine PNG, JPG, WebP o GIF dal tuo dispositivo per decodificarne dimensioni e dimensione originale in byte.',
      },
      {
        title: 'Scegli formato di destinazione, limite di larghezza e qualità',
        description:
          'Seleziona WebP o JPG per risparmi drastici in byte, applica opzionalmente un limite di larghezza massima (come 1920 px o 1280 px) e regola lo slider di qualità dal 10% al 100%.',
      },
      {
        title: 'Esegui la compressione',
        description:
          'Fai clic su Comprimi per ricodificare l’immagine in locale nel browser e vedere subito la nuova dimensione in byte.',
      },
      {
        title: 'Confronta prima e dopo',
        description:
          'Controlla l’anteprima affiancata e il risparmio esatto in byte e in percentuale per assicurarti che la qualità sembri ancora buona.',
      },
      {
        title: 'Scarica il file compresso',
        description:
          'Fai clic su Scarica per salvare l’immagine ottimizzata sul tuo dispositivo, poi ripeti il processo per un altro file quando serve.',
      },
      {
        title: 'Suggerimento: l’output è più grande dell’input?',
        description:
          'Se un piccolo PNG cresce dopo la compressione, passa il formato di output a WebP o JPG, oppure abbassa leggermente lo slider di qualità, poi comprimi di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Ottimizzare una foto hero di 2,4 MB per un articolo del blog',
        input: 'JPG 3840×2160 · Output: WebP · Larghezza massima: 1280 px · Qualità: 80%',
        output: 'WebP 1280×720 tipicamente ~85–140 KB (-94% di riduzione del payload)',
        explanation:
          'Combinare il limite di dimensione con la compressione moderna WebP accelera drasticamente il Largest Contentful Paint.',
      },
      {
        title: 'Rendere una schermata PNG abbastanza leggera per un’email',
        input: 'PNG 3,1 MB · Output: JPG · Qualità: 75%',
        output: 'JPG di circa 300–450 KB, abbastanza piccolo per la maggior parte dei limiti di allegato email',
        explanation:
          'Passare da PNG lossless a JPG lossy riduce enormemente le schermate con molti colori.',
      },
    ],
    benefits: [
      'Zero upload al server: grafiche di prodotto non rilasciate e foto private restano completamente locali',
      'Supporta la ricodifica WebP, JPEG (con riempimento automatico bianco dell’alfa) e PNG',
      'Mostra subito le dimensioni reali prima e dopo e il risparmio in percentuale',
      'I limiti opzionali di larghezza massima ridimensionano le foto troppo grandi della fotocamera in un solo passaggio',
    ],
    useCases: [
      'Ridurre banner hero e schermate per migliorare Core Web Vitals e LCP',
      'Preparare allegati più leggeri per email, portali e caricamenti CMS',
      'Convertire schermate grezze pesanti in asset WebP leggeri per il web',
      'Verificare rapidamente il compromesso tra qualità ottimale e fedeltà visiva',
    ],
    faqs: [
      {
        question: 'Perché comprimere un piccolo PNG in PNG a volte ne aumenta la dimensione?',
        answer:
          'La ricodifica Canvas del browser usa flussi DEFLATE lossless standard senza strumenti specializzati di quantizzazione della palette come pngquant. Passare il formato di output a WebP o JPG di solito riduce drasticamente la dimensione del file.',
      },
      {
        question: 'Le mie foto vengono caricate su un server di compressione esterno?',
        answer:
          'No. Decodifica, ridimensionamento e ricodifica Canvas avvengono rigorosamente nella memoria del tuo browser.',
      },
      {
        question: 'Che cosa succede agli sfondi trasparenti se scelgo JPG?',
        answer:
          'Poiché JPEG non supporta la trasparenza alfa, le regioni trasparenti vengono riempite in modo pulito con bianco pieno (#ffffff) prima della codifica.',
      },
      {
        question: 'Il Compressore di Immagini è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione, senza watermark e senza limiti su quante immagini comprimi.',
      },
      {
        question: 'Quali formati di immagine posso comprimere?',
        answer:
          'Puoi comprimere immagini PNG, JPG, WebP e GIF e scaricare il risultato come WebP, JPG o PNG.',
      },
      {
        question: 'Quanto può ridurre la mia foto il Compressore di Immagini?',
        answer:
          'Il risparmio dipende dal formato originale e dall’impostazione di qualità, ma le foto convertite in WebP a qualità 80% spesso si riducono del 50–90%.',
      },
      {
        question: 'Comprimere la mia immagine ne ridurrà la qualità?',
        answer:
          'I formati lossy come WebP e JPG scambiano un po’ di dettaglio con file molto più piccoli. Usa lo slider di qualità e l’anteprima per trovare l’equilibrio che preferisci, oppure mantieni PNG per risultati lossless.',
      },
      {
        question: 'Il Compressore di Immagini ridimensiona le dimensioni della mia immagine?',
        answer:
          'Solo se imposti un limite di larghezza massima. Altrimenti le dimensioni in pixel restano le stesse e cambia solo la dimensione del file.',
      },
      {
        question: 'Posso comprimere immagini per allegati email?',
        answer:
          'Sì, comprimere prima rende le foto grandi abbastanza piccole da rientrare nei limiti di allegato email senza dividerle in più messaggi.',
      },
      {
        question: 'Quale impostazione di qualità dovrei scegliere per le immagini del sito web?',
        answer:
          'Una qualità del 75–85% in WebP di solito sembra quasi identica all’originale mantenendo i file abbastanza piccoli per caricamenti rapidi.',
      },
      {
        question: 'Perché dovrei convertire JPG in WebP durante la compressione?',
        answer:
          'WebP usa una compressione più efficiente di JPG, quindi la stessa foto alla stessa qualità visiva è di solito molto più piccola.',
      },
      {
        question: 'Posso comprimere più immagini alla volta?',
        answer:
          'Il compressore elabora un’immagine alla volta, così puoi regolare qualità, larghezza e formato per ogni foto prima di scaricarla.',
      },
      {
        question: 'La compressione funziona offline?',
        answer:
          'Sì, una volta caricata la pagina, tutta la compressione avviene in locale nel browser, quindi funziona senza connessione internet.',
      },
      {
        question: 'La mia immagine compressa avrà un watermark?',
        answer:
          'No, le immagini scaricate non includono mai watermark o branding, quindi il file compresso sembra esattamente come la tua immagine originale, solo più piccolo.',
      },
      {
        question: 'Qual è il formato migliore per comprimere le schermate?',
        answer:
          'WebP di solito produce i file più piccoli per le schermate. Usa PNG solo quando ti serve qualità lossless perfetta a livello di pixel.',
      },
      {
        question: 'Posso comprimere un’immagine senza cambiarne le dimensioni?',
        answer:
          'Sì, lascia il limite di larghezza massima non impostato e lo strumento mantiene larghezza e altezza originali riducendo solo la dimensione del file.',
      },
      {
        question: 'Il Compressore di Immagini conserva i metadati dell’immagine?',
        answer:
          'La ricodifica Canvas del browser in genere elimina i metadati EXIF come impostazioni della fotocamera e posizione, il che aiuta anche a ridurre il file.',
      },
      {
        question: 'Posso usare il Compressore di Immagini sul telefono?',
        answer:
          'Sì, funziona in qualsiasi browser mobile moderno. Scegli un’immagine dalla tua libreria foto e scarica il risultato compresso allo stesso modo.',
      },
      {
        question: 'Qual è la dimensione massima di immagine che posso comprimere?',
        answer:
          'Non c’è un limite fisso del server perché nulla viene caricato. Le immagini molto grandi sono limitate solo dalla memoria del tuo dispositivo e dalla dimensione Canvas del browser.',
      },
      {
        question: 'Come comprimo un’immagine a meno di 100 KB?',
        answer:
          'Scegli l’output WebP, imposta una larghezza massima come 1280 px e abbassa lo slider di qualità passo dopo passo finché la dimensione del file mostrata non scende sotto 100 KB.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica la tua immagine',
        description:
          'Carica un’immagine PNG, JPG, WebP o GIF per leggerne larghezza e altezza originali in pixel.',
      },
      {
        title: 'Imposta larghezza, altezza e modalità di adattamento',
        description:
          'Inserisci pixel personalizzati (con blocco opzionale del rapporto d’aspetto) o seleziona un preset social, poi scegli Ritagliatura Cover al centro o Allungamento/Scala esatta.',
      },
      {
        title: 'Scegli un formato di output',
        description:
          'Scegli PNG per la trasparenza, JPG per le foto o WebP per il file più piccolo prima del rendering.',
      },
      {
        title: 'Renderizza l’immagine ridimensionata',
        description:
          'Fai clic su Renderizza immagine ridimensionata per generare la nuova versione alle tue dimensioni esatte in pixel.',
      },
      {
        title: 'Controlla il risultato e scarica',
        description:
          'Ispeziona l’anteprima per nitidezza e ritaglio, controlla la dimensione del file, poi fai clic su Scarica per salvarla.',
      },
      {
        title: 'Suggerimento: l’immagine sembra allungata o sfocata?',
        description:
          'Attiva Blocco rapporto d’aspetto o passa a Ritagliatura Cover al centro per evitare distorsioni ed evita di ingrandire molto oltre la dimensione originale.',
      },
    ],
    examples: [
      {
        title: 'Ritagliare una schermata alta in una scheda Open Graph 1200×630',
        input: 'Schermata 1440×1600 · Preset: OG Share (1200×630) · Adattamento: Ritagliatura Cover al centro',
        output: 'Scheda 1200×630 nitida centrata verticalmente senza schiacciamenti né distorsioni.',
        explanation:
          'Il ritaglio cover scala in proporzione finché il riquadro di destinazione non è riempito, tagliando i bordi in eccesso in modo uniforme.',
      },
      {
        title: 'Preparare una foto profilo quadrata 512×512',
        input: 'Foto ritratto 3000×4000 · Preset: Avatar (512×512) · Adattamento: Ritagliatura Cover al centro',
        output: 'Avatar quadrato 512×512 centrato sul volto, pronto per i profili social.',
        explanation:
          'Il preset Avatar combina ridimensionamento e ritaglio centrale in un solo passaggio.',
      },
    ],
    benefits: [
      'Preset in un clic per Open Graph, YouTube HD, Quadrato e Avatar in pixel',
      'La Ritagliatura Cover al centro previene allungamenti goffi quando si cambia rapporto d’aspetto',
      'La qualità imageSmoothingQuality di Canvas preserva tipografia e linee nitide',
      'Esporta direttamente in PNG, JPG o WebP con lettura reale della dimensione del file',
    ],
    useCases: [
      'Creare schede og:image 1200×630 per post del blog e landing page',
      'Preparare foto di prodotto 1080×1080 e avatar di profilo 512×512',
      'Ridurre schermate ad alta densità prima di aggiungerle alla documentazione',
      'Generare dimensioni hero esatte che corrispondono ai requisiti dei modelli CMS',
    ],
    faqs: [
      {
        question: 'Qual è la differenza tra Ritagliatura Cover al centro e Allungamento / Scala esatta?',
        answer:
          'La Ritagliatura Cover al centro preserva le proporzioni naturali e taglia i bordi in eccesso in modo simmetrico quando il nuovo rapporto d’aspetto differisce. La Scala esatta forza l’intera immagine originale nella larghezza e altezza di destinazione.',
      },
      {
        question: 'Posso ingrandire una piccola foto a 4K in modo pulito?',
        answer:
          'L’interpolazione Canvas può esportare griglie di pixel più grandi, anche se l’ingrandimento oltre la risoluzione nativa non può inventare dettagli fini mancanti.',
      },
      {
        question: 'Qual è la dimensione massima di output supportata?',
        answer:
          'Gli input sono limitati fino a 8000 px per asse per restare in sicurezza entro i limiti di memoria Canvas del browser.',
      },
      {
        question: 'Il Ridimensionatore di Immagini è gratuito?',
        answer:
          'Sì, è gratuito senza registrazione, senza watermark e senza limiti su quante immagini ridimensioni.',
      },
      {
        question: 'Qual è la differenza tra ridimensionare e ritagliare un’immagine?',
        answer:
          'Ridimensionare cambia le dimensioni in pixel dell’intera immagine, mentre ritagliare taglia via parte dell’immagine. Questo strumento può fare entrambe le cose, incluso il ritaglio cover al centro.',
      },
      {
        question: 'Il Ridimensionatore di Immagini può rendere un’immagine 1200x630 per la condivisione social?',
        answer:
          'Sì, scegli il preset Open Graph (1200×630) e lo strumento dimensiona la tua immagine esattamente per le anteprime dei link sulle piattaforme social.',
      },
      {
        question: 'Come ridimensiono un’immagine senza deformarla?',
        answer:
          'Mantieni attivo Blocco rapporto d’aspetto o usa Ritagliatura Cover al centro, così lo strumento scala in proporzione invece di schiacciare l’immagine.',
      },
      {
        question: 'Posso ridimensionare un’immagine a un quadrato 1080x1080?',
        answer:
          'Sì, scegli il preset Quadrato oppure inserisci 1080 sia per larghezza sia per altezza con Ritagliatura Cover al centro attiva.',
      },
      {
        question: 'Ridimensionare un’immagine ne riduce la dimensione del file?',
        answer:
          'Di solito sì, perché meno pixel significano meno dati, soprattutto quando esporti anche come WebP o JPG.',
      },
      {
        question: 'Quali formati di immagine posso ridimensionare?',
        answer:
          'Puoi ridimensionare immagini PNG, JPG, WebP e GIF ed esportarle come PNG, JPG o WebP.',
      },
      {
        question: 'Ridimensionare renderà la mia immagine sfocata?',
        answer:
          'La riduzione di solito resta nitida grazie allo smoothing Canvas di alta qualità. L’ingrandimento oltre la dimensione originale può ammorbidire i dettagli fini.',
      },
      {
        question: 'Posso ridimensionare un’immagine per una foto profilo?',
        answer:
          'Sì, usa il preset Avatar (512×512) con Ritagliatura Cover al centro per ottenere una foto profilo perfettamente quadrata.',
      },
      {
        question: 'Che cos’è la Ritagliatura Cover al centro nel Ridimensionatore di Immagini?',
        answer:
          'Scala l’immagine finché non riempie il riquadro di destinazione, poi taglia i bordi in eccesso in modo uniforme dal centro così nulla sembra allungato.',
      },
      {
        question: 'Il Ridimensionatore di Immagini carica le mie foto da qualche parte?',
        answer:
          'No, tutto il ridimensionamento avviene in locale nel browser e le tue immagini non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Posso ridimensionare un’immagine sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Carica una foto, inserisci le nuove dimensioni e scarica il risultato.',
      },
      {
        question: 'Che cosa succede alla trasparenza quando ridimensiono un PNG?',
        answer:
          'La trasparenza viene preservata finché esporti come PNG o WebP. Esportando come JPG le aree trasparenti vengono riempite di bianco.',
      },
      {
        question: 'Posso ridimensionare più immagini alla stessa dimensione?',
        answer:
          'Lo strumento ridimensiona un’immagine alla volta. Ripeti lo stesso preset o le stesse dimensioni per ogni immagine per mantenerle coerenti.',
      },
      {
        question: 'Qual è l’immagine più grande che il Ridimensionatore di Immagini può gestire?',
        answer:
          'Gli input sono limitati a 8000 px per lato per restare entro i limiti di memoria Canvas del browser.',
      },
      {
        question: 'Come ridimensiono un’immagine per le miniature YouTube?',
        answer:
          'Scegli il preset YouTube HD (1280×720) così la tua miniatura corrisponde alla dimensione consigliata 16:9.',
      },
      {
        question: 'Perché il file della mia immagine ridimensionata è ancora grande?',
        answer:
          'La dimensione in pixel è solo parte della storia. Esporta come WebP o JPG invece di PNG, oppure usa dopo il Compressore di Immagini per ridurre ulteriormente il file.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli formato di destinazione e opzioni',
        description:
          'Seleziona l’output PNG, JPG o WebP, imposta la qualità lossy se applicabile e scegli un colore di sfondo matte quando converti immagini trasparenti in JPG.',
      },
      {
        title: 'Seleziona una o più immagini',
        description:
          'Carica un singolo file o un batch multi-file per renderizzare ogni immagine in modo pulito a piena risoluzione nativa.',
      },
      {
        title: 'Controlla l’anteprima di ciascun file',
        description:
          'Esamina dimensioni e dimensione stimata di ogni immagine convertita prima di scaricare qualsiasi cosa.',
      },
      {
        title: 'Converti il batch',
        description:
          'Lo strumento renderizza ogni immagine a piena risoluzione nativa nel formato selezionato, direttamente nel browser.',
      },
      {
        title: 'Scarica gli asset convertiti',
        description:
          'Confronta dimensioni e nuova dimensione in byte di ciascun file, poi scarica le immagini convertite singolarmente.',
      },
      {
        title: 'Suggerimento: le aree trasparenti sono diventate nere?',
        description:
          'Se un PNG convertito in JPG mostra nero dove era trasparente, converti di nuovo con un colore di riempimento matte come bianco o il colore del tuo brand.',
      },
    ],
    examples: [
      {
        title: 'Appiattire un logo SVG/PNG trasparente su bianco per JPG',
        input: 'logo.png trasparente · Destinazione: JPG (90%) · Riempimento: #FFFFFF',
        output: 'logo.jpg con sfondo bianco pulito e zero artefatti neri di trasparenza',
        explanation:
          'Riempire esplicitamente il matte Canvas prima di disegnare previene aloni neri quando si convertono PNG alfa in JPEG.',
      },
      {
        title: 'Convertire in batch schermate WebP in PNG',
        input: '8 schermate .webp scaricate · Destinazione: PNG',
        output: '8 file PNG a piena risoluzione, pronti per app che non accettano WebP',
        explanation:
          'La conversione in batch gestisce più file in una sola passata senza code di server.',
      },
    ],
    benefits: [
      'Elabora batch di più immagini a piena risoluzione senza code di server',
      'Il colore di riempimento di sfondo JPEG configurabile evita brutti riempimenti neri trasparenti',
      'Converte i download WebP di nuovo in file PNG o JPG universalmente accettati',
      'Renderizza file SVG vettoriali direttamente in immagini raster PNG o WebP nitide',
    ],
    useCases: [
      'Convertire file .webp scaricati in .png o .jpg per software legacy',
      'Produrre in batch asset .webp moderni per siti statici e CDN',
      'Esportare PNG nitidi da icone di brand SVG per slide o post social',
      'Controllare le differenze di dimensione dei formati tra PNG, JPG e WebP fianco a fianco',
    ],
    faqs: [
      {
        question: 'Può convertire foto HEIC di Apple?',
        answer:
          'La decodifica HEIC dipende dal supporto del browser sottostante (Safari supporta HEIC nativamente, mentre Chrome e Firefox di solito richiedono input PNG, JPG, WebP, SVG o GIF).',
      },
      {
        question: 'Convertire JPG in PNG migliora i dettagli fotografici persi?',
        answer:
          'No. Convertire un JPG già compresso in PNG lo preserva lossless in avanti, ma non può ripristinare gli artefatti di compressione JPEG precedenti.',
      },
      {
        question: 'Vengono applicati limiti di dimensione dei file?',
        answer:
          'Vale solo la RAM del tuo dispositivo; tutta la codifica avviene in locale senza limiti di dimensione dei file del server.',
      },
      {
        question: 'Il Convertitore di Formato Immagine è gratuito?',
        answer:
          'Sì, è gratuito senza account, senza watermark e senza limiti sul numero di conversioni.',
      },
      {
        question: 'Quali formati posso convertire da e verso?',
        answer:
          'Puoi convertire file PNG, JPG, WebP, GIF e SVG in output PNG, JPG o WebP.',
      },
      {
        question: 'Perché convertire PNG in WebP?',
        answer:
          'I file WebP sono di solito molto più piccoli dei PNG a qualità visiva simile, il che fa caricare più velocemente le pagine web.',
      },
      {
        question: 'Perché convertire WebP in JPG o PNG?',
        answer:
          'Alcune app più vecchie, stampanti e moduli di caricamento non accettano WebP, quindi convertire di nuovo in JPG o PNG ripristina la compatibilità universale.',
      },
      {
        question: 'Posso convertire più immagini alla volta?',
        answer:
          'Sì, puoi caricare un batch di immagini e convertirle tutte nello stesso formato di destinazione in una sola volta.',
      },
      {
        question: 'Convertire in JPG rimuove la trasparenza?',
        answer:
          'Sì, JPG non ha canale alfa, quindi le aree trasparenti vengono riempite con il colore matte scelto, come il bianco.',
      },
      {
        question: 'Quale colore matte dovrei usare quando converto un PNG trasparente in JPG?',
        answer:
          'Il bianco è l’opzione predefinita più sicura. Abbina il colore di sfondo del tuo sito web o delle slide per un aspetto perfetto.',
      },
      {
        question: 'Posso convertire una foto in WebP e mantenerne la qualità?',
        answer:
          'Sì, WebP a qualità 85–90% di solito sembra identico al JPG originale producendo un file sensibilmente più piccolo.',
      },
      {
        question: 'Posso convertire un logo SVG in PNG?',
        answer:
          'Sì, lo strumento rasterizza i file SVG in immagini PNG o WebP nitide alle loro dimensioni native.',
      },
      {
        question: 'Il Convertitore di Formato Immagine carica le mie immagini?',
        answer:
          'No, ogni conversione avviene in locale nel browser e i tuoi file non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Quale qualità dovrei usare quando converto in JPG?',
        answer:
          'Una qualità dell’85–90% mantiene le foto pulite restando molto più piccola del PNG. Abbassala per file più piccoli.',
      },
      {
        question: 'Posso convertire GIF animate con questo strumento?',
        answer:
          'I file GIF possono essere caricati, ma la conversione renderizza un singolo fotogramma fermo invece di preservare l’animazione.',
      },
      {
        question: 'Perché il mio PNG convertito è più grande del JPG originale?',
        answer:
          'PNG è lossless, quindi una foto convertita da JPG compresso a PNG memorizza ogni pixel senza compressione e di solito cresce di dimensione.',
      },
      {
        question: 'Il convertitore mantiene le dimensioni originali dell’immagine?',
        answer:
          'Sì, le immagini convertite mantengono la loro piena risoluzione nativa a meno che tu non le ridimensioni separatamente con il Ridimensionatore di Immagini.',
      },
      {
        question: 'Posso usare il Convertitore di Formato Immagine sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Seleziona immagini dal tuo dispositivo e scarica i file convertiti.',
      },
      {
        question: 'Qual è il formato migliore per le immagini del sito web?',
        answer:
          'WebP è di solito il migliore per foto e grafiche sul web, mentre PNG è meglio quando ti serve trasparenza o qualità lossless.',
      },
      {
        question: 'Le immagini convertite includono watermark?',
        answer:
          'No, i file convertiti sono copie pulite senza watermark o branding aggiunti.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica un’immagine',
        description:
          'Scegli un’immagine PNG, JPG, WebP o GIF per caricarla nell’anteprima Canvas interattiva.',
      },
      {
        title: 'Ruota, specchia o applica filtri',
        description:
          'Usa i pulsanti Ruota a sinistra/destra, gli interruttori Specchia orizzontale/verticale, l’interruttore Scala di grigi e gli slider Luminosità/Contrasto.',
      },
      {
        title: 'Visualizza il risultato live in anteprima',
        description:
          'Controlla l’anteprima Canvas dopo ogni modifica per confermare che orientamento e intensità del filtro sembrino giusti.',
      },
      {
        title: 'Reimposta se necessario',
        description:
          'Usa il pulsante Reimposta per annullare tutte le rotazioni, i ribaltamenti e le modifiche ai filtri e ricominciare dall’originale.',
      },
      {
        title: 'Scegli un formato di output',
        description:
          'Scegli PNG per mantenere la trasparenza, JPG per le foto o WebP per file più piccoli prima di esportare.',
      },
      {
        title: 'Esporta l’immagine modificata',
        description:
          'Fai clic su Scarica per salvare la tua immagine ruotata, specchiata o filtrata sul tuo dispositivo.',
      },
    ],
    examples: [
      {
        title: 'Correggere una foto dello smartphone laterale e aumentare la luminosità',
        input: 'Foto 3024×4032 ruotata di 90° in senso orario · Luminosità: 110% · Contrasto: 105%',
        output: 'Immagine verticale 4032×3024 esportata in modo pulito con orientamento EXIF incorporato nei pixel.',
        explanation:
          'Canvas scambia larghezza e altezza automaticamente nelle rotazioni di 90° e 270°.',
      },
      {
        title: 'Specchiare un selfie e convertirlo in bianco e nero',
        input: 'Selfie specchiato · Specchia orizzontale: attivo · Scala di grigi: attiva',
        output: 'Foto in bianco e nero con orientamento corretto, pronta da condividere.',
        explanation:
          'Rotazione, ribaltamento e filtri possono essere combinati prima di un’unica esportazione.',
      },
    ],
    benefits: [
      'L’anteprima live dei pixel si aggiorna subito senza latenza di upload',
      'Incorpora l’orientamento in modo pulito nelle coordinate reali dei pixel invece che in fragili flag EXIF',
      'Combina rotazione, ribaltamento e ritocchi di colore e tono in un unico spazio di lavoro pulito',
      'Il pulsante Reimposta non distruttivo ripristina i valori predefiniti in qualsiasi momento',
    ],
    useCases: [
      'Raddrizzare documenti o ricevute scansionati catturati lateralmente',
      'Annullare il ribaltamento di acquisizioni webcam al contrario o schermate capovolte',
      'Creare grafiche in scala di grigi ad alto contrasto per stampa o documentazione',
      'Schiarire rapidamente foto di prodotto sottoesposte prima di metterle in vendita',
    ],
    faqs: [
      {
        question: 'Ruotare un’immagine ricodifica i pixel?',
        answer:
          'Sì. Disegnare su HTML5 Canvas incorpora il nuovo orientamento e le regolazioni dei filtri in modo permanente in ogni pixel, così tutte le app la mostrano dritta.',
      },
      {
        question: 'Posso preservare gli sfondi trasparenti quando ruoto o specchio?',
        answer:
          'Sì: mantieni il formato di output impostato su PNG o WebP per conservare la piena trasparenza alfa attorno a grafiche ruotate o specchiate.',
      },
      {
        question: 'Le modifiche vengono salvate sui vostri server?',
        answer:
          'No. Tutto avviene dentro la scheda del tuo browser e viene eliminato quando chiudi la pagina.',
      },
      {
        question: 'Lo strumento di rotazione immagini è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione, senza watermark e senza limiti, e puoi ruotare o capovolgere tutte le immagini che vuoi senza creare un account.',
      },
      {
        question: 'Come ruoto un’immagine di 90 gradi?',
        answer:
          'Carica la tua immagine e fai clic su Ruota a destra o Ruota a sinistra. Ogni clic gira l’immagine di 90 gradi.',
      },
      {
        question: 'Posso ruotare un’immagine di 180 gradi?',
        answer:
          'Sì, fai clic due volte su Ruota nella stessa direzione per capovolgere l’immagine.',
      },
      {
        question: 'Come specchio un’immagine in orizzontale?',
        answer:
          'Usa l’interruttore Specchia orizzontale per riflettere l’immagine da sinistra a destra, utile per correggere selfie specchiati.',
      },
      {
        question: 'Qual è la differenza tra specchiare e ruotare un’immagine?',
        answer:
          'Ruotare gira l’immagine attorno al suo centro, mentre specchiare la riflette come un riflesso in uno specchio.',
      },
      {
        question: 'Posso ruotare una foto senza perdere qualità?',
        answer:
          'Lo strumento ricodifica l’immagine tramite Canvas, quindi esportare come PNG la mantiene lossless. L’export JPG applica una leggera compressione.',
      },
      {
        question: 'Ruotare un’immagine ne cambia le dimensioni?',
        answer:
          'Una rotazione di 90 o 270 gradi scambia larghezza e altezza. Una rotazione di 180 gradi mantiene le stesse dimensioni.',
      },
      {
        question: 'Posso rendere una foto in bianco e nero?',
        answer:
          'Sì, attiva l’interruttore Scala di grigi per convertire la tua foto in bianco e nero all’istante.',
      },
      {
        question: 'Come schiarisco una foto scura?',
        answer:
          'Sposta lo slider Luminosità sopra il 100% e aggiungi un po’ di Contrasto per evitare che l’immagine sembri sbiadita.',
      },
      {
        question: 'Posso ruotare un PNG e mantenerne la trasparenza?',
        answer:
          'Sì, esporta come PNG o WebP per preservare le aree trasparenti dopo aver ruotato o specchiato.',
      },
      {
        question: 'Le mie foto modificate vengono caricate su un server?',
        answer:
          'No, rotazione, ribaltamento e filtraggio avvengono in locale nel browser e nulla viene caricato.',
      },
      {
        question: 'Posso ruotare un’immagine sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Carica una foto laterale, raddrizzala e scarica la versione corretta.',
      },
      {
        question: 'Perché la mia foto è laterale dopo averla caricata?',
        answer:
          'Alcuni telefoni memorizzano l’orientamento come flag EXIF che non tutte le app leggono. Questo strumento incorpora l’orientamento corretto nei pixel così viene mostrata dritta ovunque.',
      },
      {
        question: 'Posso annullare una rotazione o un filtro?',
        answer:
          'Sì, il pulsante Reimposta ripristina l’immagine originale e le impostazioni predefinite dei filtri in qualsiasi momento.',
      },
      {
        question: 'Lo strumento corregge le foto storte o inclinate?',
        answer:
          'Ruota a passi di 90 gradi, quindi corregge foto laterali o capovolte. Non sono supportate piccole correzioni di inclinazione.',
      },
      {
        question: 'Quali formati di immagine posso ruotare e specchiare?',
        answer:
          'Puoi modificare immagini PNG, JPG, WebP e GIF ed esportarle come PNG, JPG o WebP.',
      },
      {
        question: 'Posso ruotare e specchiare un’immagine in una sola volta?',
        answer:
          'Sì, puoi combinare rotazioni, ribaltamenti orizzontali o verticali e filtri prima di esportare una singola immagine finita.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli la modalità Codifica o Decodifica',
        description:
          'Usa Immagine → Data URI Base64 per codificare un file, oppure Base64 → Anteprima immagine per renderizzare payload Base64 incollati.',
      },
      {
        title: 'Carica un’immagine o incolla testo Base64',
        description:
          'Seleziona qualsiasi asset PNG, JPG, WebP, SVG, GIF o ICO (oppure incolla una stringa completa data:image/... o testo Base64 grezzo).',
      },
      {
        title: 'Controlla il confronto delle dimensioni',
        description:
          'Confronta la dimensione del file originale con la dimensione della stringa Base64 per vedere l’overhead di circa il 33% prima di incorporarla.',
      },
      {
        title: 'Scegli il formato di output che ti serve',
        description:
          'Scegli il Data URI completo, la stringa Base64 grezza, il tag HTML <img> o lo snippet CSS background-image.',
      },
      {
        title: 'Copia lo snippet o scarica l’anteprima',
        description:
          'Copia il Data URI, il Base64 grezzo, il tag HTML <img> o lo snippet CSS di sfondo, oppure scarica un’immagine di anteprima decodificata.',
      },
      {
        title: 'Suggerimento: il Base64 incollato non funziona?',
        description:
          'Assicurati di aver incollato la stringa completa senza interruzioni di riga e verifica che il decodificatore abbia aggiunto il prefisso data:image/... corretto per il tuo formato.',
      },
    ],
    examples: [
      {
        title: 'Incorporare un segno di spunta SVG di 2 KB dentro CSS',
        input: 'check.svg (2.048 byte)',
        output: 'data:image/svg+xml;base64,... (~2,7 KB) + regola CSS background-image pronta da incollare',
        explanation:
          'Risparmia un round-trip HTTP extra per piccole icone UI ed email HTML autonome a file singolo.',
      },
      {
        title: 'Decodificare una stringa Base64 da una risposta API',
        input: 'Stringa Base64 grezza copiata da DevTools del browser',
        output: 'Anteprima immagine renderizzata con opzione di download come PNG',
        explanation:
          'La modalità di decodifica aggiunge automaticamente il prefisso Data URI se manca.',
      },
    ],
    benefits: [
      'Confronto istantaneo tra dimensione del file binario e overhead di circa il 33% della stringa Base64',
      'Genera contemporaneamente Data URI, Base64 grezzo, tag HTML <img> e snippet CSS di sfondo',
      'Aggiunge automaticamente il prefisso Data URI PNG se incolli Base64 grezzo senza header',
      'Mantiene asset proprietari e blob di risposta API offline dentro il browser',
    ],
    useCases: [
      'Incorporare piccole icone dentro bundle CSS o report HTML autonomi',
      'Eseguire il debug di Data URI di immagini restituiti da API JSON o webhook',
      'Incorporare piccoli badge di brand in modelli di email HTML transazionali',
      'Ispezionare payload di immagini codificate copiati da DevTools del browser',
    ],
    faqs: [
      {
        question: 'Quando dovrei usare immagini Base64 invece di normali URL di immagini?',
        answer:
          'Usa i Data URI Base64 con parsimonia per icone molto piccole (di solito sotto 5–10 KB) o export HTML a file singolo. Base64 espande la dimensione dei dati di circa il 33% e non può essere memorizzato in cache indipendentemente tra pagine come i normali URL.',
      },
      {
        question: 'Il decodificatore può visualizzare in anteprima stringhe Base64 grezze senza il prefisso "data:image/png;base64,"?',
        answer:
          'Sì! Passando a Base64 → Anteprima immagine vengono eliminati automaticamente gli spazi bianchi e viene aggiunto un header Data URI PNG standard se manca.',
      },
      {
        question: 'Funziona con SVG vettoriali?',
        answer:
          'Sì. Caricare un file .svg crea un URI valido data:image/svg+xml;base64,... insieme a snippet HTML e CSS.',
      },
      {
        question: 'Il convertitore da immagine a Base64 è gratuito?',
        answer:
          'Sì, è gratuito senza registrazione, senza watermark e senza limiti su quante immagini codifichi o decodifichi.',
      },
      {
        question: 'Che cos’è un Data URI Base64?',
        answer:
          'Un Data URI incorpora un’immagine direttamente dentro una pagina web, un foglio di stile o un’email come testo, iniziando con data:image/...;base64, seguito dai dati codificati.',
      },
      {
        question: 'Perché la stringa Base64 è più grande della mia immagine?',
        answer:
          'La codifica Base64 rappresenta dati binari con caratteri di testo, il che aggiunge circa il 33% di overhead alla dimensione originale del file.',
      },
      {
        question: 'Quale dimensione di immagine è migliore per la codifica Base64?',
        answer:
          'Mantieni le immagini Base64 piccole, di solito sotto 5–10 KB, come icone e loghi. Le immagini più grandi gonfiano HTML o CSS e non possono essere memorizzate in cache separatamente.',
      },
      {
        question: 'Posso convertire un JPG in Base64?',
        answer:
          'Sì, file JPG, PNG, WebP, SVG, GIF e ICO possono essere tutti codificati in Data URI Base64.',
      },
      {
        question: 'Come uso un’immagine Base64 in HTML?',
        answer:
          'Copia il tag HTML <img> generato e incollalo nella tua pagina. L’attributo src contiene già il Data URI completo.',
      },
      {
        question: 'Come uso un’immagine Base64 in CSS?',
        answer:
          'Copia lo snippet CSS background-image e incollalo nel tuo foglio di stile per mostrare l’immagine senza una richiesta di file separata.',
      },
      {
        question: 'Posso decodificare una stringa Base64 di nuovo in un’immagine?',
        answer:
          'Sì, passa a Base64 → Anteprima immagine, incolla la stringa e lo strumento renderizza l’immagine così puoi visualizzarla in anteprima o scaricarla.',
      },
      {
        question: 'Ho bisogno del prefisso data:image/png;base64, quando decodifico?',
        answer:
          'No, se incolli Base64 grezzo senza header, lo strumento aggiunge automaticamente un prefisso Data URI PNG standard.',
      },
      {
        question: 'Lo strumento da immagine a Base64 carica i miei file?',
        answer:
          'No, codifica e decodifica avvengono interamente nel browser e le tue immagini non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Posso codificare un SVG in Base64?',
        answer:
          'Sì, i file SVG producono un URI valido data:image/svg+xml;base64,... insieme a snippet HTML e CSS corrispondenti.',
      },
      {
        question: 'Qual è la differenza tra Base64 grezzo e un Data URI?',
        answer:
          'Il Base64 grezzo è solo il testo codificato, mentre un Data URI aggiunge l’header data:image/...;base64, così i browser conoscono il tipo di immagine.',
      },
      {
        question: 'Posso usare immagini Base64 nelle email?',
        answer:
          'Sì, le piccole immagini Base64 funzionano bene nelle email HTML autonome, anche se alcuni client email limitano il supporto ai Data URI, quindi testa prima di inviare.',
      },
      {
        question: 'C’è un limite di dimensione dei file per la codifica?',
        answer:
          'Non c’è un limite del server perché nulla viene caricato. Le immagini molto grandi sono limitate solo dalla memoria del browser e le stringhe Base64 enormi sono poco pratiche da incollare.',
      },
      {
        question: 'Posso convertire un’immagine Base64 in un file scaricabile?',
        answer:
          'Sì, decodifica la stringa in modalità Base64 → Anteprima immagine e usa l’opzione di download per salvarla come file immagine normale.',
      },
      {
        question: 'La codifica Base64 cambia la qualità dell’immagine?',
        answer:
          'No, Base64 è una rappresentazione testuale lossless degli stessi identici byte, quindi l’immagine decodificata è identica all’originale.',
      },
      {
        question: 'Posso usare il convertitore da immagine a Base64 sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Codifica un’immagine dalla tua libreria foto o incolla una stringa Base64 per visualizzarla in anteprima.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli i colori di Primo piano e Sfondo',
        description:
          'Usa i selettori di colore, gli input HEX o i singoli input R/G/B, oppure parti da preset accessibili e scambia i colori con un clic.',
      },
      {
        title: 'Regola le tonalità finché il rapporto non supera la soglia',
        description:
          'Modifica la luminosità o i singoli canali RGB e guarda il rapporto aggiornarsi live finché la coppia non raggiunge la soglia AA o AAA necessaria.',
      },
      {
        title: 'Esamina la scheda punteggio WCAG 2.1',
        description:
          'Controlla il rapporto di contrasto esatto (per esempio 12,63 : 1) e lo stato immediato SUPERATO/FALLITO per i benchmark AA Normale, AA Grande/UI, AAA Normale e AAA Grande.',
      },
      {
        title: 'Visualizza in anteprima la coppia in testo UI reale',
        description:
          'Leggi le anteprime live di tipografia e scheda di controllo UI con bordo per vedere come i tuoi colori appaiono davvero come testo del corpo, titoli e pulsanti.',
      },
      {
        title: 'Estrai campioni da un’immagine (opzionale)',
        description:
          'Carica qualsiasi schermata o logo di brand in basso per estrarre fino a 8 colori dominanti distinti e applicarli direttamente a Primo piano o Sfondo.',
      },
      {
        title: 'Copia i colori e correggi le coppie che falliscono',
        description:
          'Copia i valori HEX, RGB o HSL sincronizzati nel tuo CSS. Se una coppia fallisce, scurisci il testo o schiarisci lo sfondo finché la scheda punteggio non diventa verde.',
      },
    ],
    examples: [
      {
        title: 'Verificare la leggibilità di un pulsante CTA primario',
        input: 'Primo piano: #FFFFFF · Sfondo: #4F46E5',
        output: 'Rapporto di contrasto 6,29 : 1 — Supera WCAG AA Normale, AA Grande e AAA Grande',
        explanation:
          'Usa la luminanza relativa ufficiale sRGB con correzione gamma (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Estrarre la palette di un logo e testarla come testo',
        input: 'Logo brand caricato · Campione estratto #1F2937 applicato come Primo piano su sfondo #FFFFFF',
        output: 'Rapporto 15,42 : 1 — Supera tutti i benchmark AA e AAA',
        explanation:
          'I campioni estratti passano direttamente negli slot di colore, così il test è immediato.',
      },
    ],
    benefits: [
      'Formula esatta WCAG 2.1 di luminanza relativa sRGB, zero approssimazioni',
      'Anteprime live di tipografia e scheda di controllo UI con bordo per la coppia attiva',
      'Il quantizzatore di colori Canvas integrato estrae campioni di brand senza strumenti extra',
      'Mostra stringhe HEX, RGB e HSL sincronizzate pronte da incollare nel CSS',
    ],
    useCases: [
      'Verificare design system, dashboard SaaS e temi dark mode per la conformità WCAG AA/AAA',
      'Estrarre i colori dominanti del brand dai loghi dei clienti direttamente in palette UI accessibili',
      'Correggere coppie di badge, placeholder o etichette di pulsanti a basso contrasto prima del lancio',
      'Insegnare la gerarchia visiva accessibile con anteprime live di testo grande e normale',
    ],
    faqs: [
      {
        question: 'Quale rapporto di contrasto è richiesto per WCAG Livello AA rispetto a Livello AAA?',
        answer:
          'WCAG 2.1 Livello AA richiede almeno 4,5:1 per il testo normale del corpo e 3,0:1 per il testo grande (18 pt+ o 14 pt+ in grassetto) e i componenti UI. Il Livello AAA alza queste soglie a 7,0:1 per il testo normale e 4,5:1 per il testo grande.',
      },
      {
        question: 'Come funziona l’estrattore di palette delle immagini?',
        answer:
          'Disegna l’immagine caricata su un Canvas HTML5 fuori schermo, ignora i pixel trasparenti, raggruppa i bucket RGB vicini e mostra fino a 8 campioni dominanti visivamente distinti in base alla copertura d’area.',
      },
      {
        question: 'Il Verificatore di Contrasto Colori converte anche tra HEX, RGB e HSL?',
        answer:
          'Sì. Aggiornare qualsiasi selettore di colore, input HEX o campo R/G/B ricalcola automaticamente le rappresentazioni HEX, rgb() e hsl().',
      },
      {
        question: 'Che cosa conta come testo grande secondo le regole di contrasto WCAG?',
        answer:
          'Il testo grande è di 18 pt (24 px) o più, oppure 14 pt (18,66 px) in grassetto o più. Il testo grande richiede solo un rapporto 3,0:1 per AA e 4,5:1 per AAA, mentre il testo normale richiede 4,5:1 per AA e 7,0:1 per AAA.',
      },
      {
        question: 'Il Verificatore di Contrasto Colori è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione. Tutti i controlli avvengono in locale nel browser, quindi puoi testare tutte le coppie di colori che vuoi.',
      },
      {
        question: 'Le mie immagini caricate lasciano il mio dispositivo?',
        answer:
          'No. L’estrazione della palette avviene interamente nel browser usando un canvas fuori schermo e le tue immagini non vengono mai caricate su alcun server.',
      },
      {
        question: 'Come viene calcolato il rapporto di contrasto?',
        answer:
          'Usa la formula ufficiale WCAG 2.1: la luminanza relativa di ciascun colore viene calcolata da valori sRGB linearizzati in gamma e il rapporto è (L1 + 0,05) / (L2 + 0,05), dove L1 è il colore più chiaro.',
      },
      {
        question: 'Posso controllare il contrasto per design in dark mode?',
        answer:
          'Sì. Inserisci gli stessi colori di sfondo scuro e testo chiaro e la scheda punteggio mostra se la coppia supera AA e AAA sia per testo normale sia per testo grande.',
      },
      {
        question: 'Perché la mia coppia di colori fallisce AA anche se a me sembra leggibile?',
        answer:
          'Leggibilità percepita e contrasto di luminanza misurato sono cose diverse. Colori che ti sembrano distinti possono essere comunque vicini in luminanza, soprattutto le tonalità medie, quindi fidati del rapporto e regola la luminosità finché non supera la soglia.',
      },
      {
        question: 'Che cosa dovrei fare se il colore del mio brand fallisce il test di contrasto?',
        answer:
          'Mantieni il colore del brand per titoli grandi o elementi decorativi e usa una tonalità più scura per il testo del corpo. Puoi anche schiarire lo sfondo o aggiungere un overlay semi-opaco dietro il testo.',
      },
      {
        question: 'Il verificatore funziona per componenti UI come pulsanti e icone?',
        answer:
          'Sì. WCAG 2.1 richiede un rapporto 3,0:1 per componenti UI non testuali come bordi di pulsanti, contorni di input e icone significative, e la colonna AA Grande/UI della scheda punteggio copre esattamente questo.',
      },
      {
        question: 'Posso testare testo placeholder e stati disabilitati con questo strumento?',
        answer:
          'Sì, inserisci il colore del placeholder o dello stato disabilitato come primo piano. Nota che i controlli disabilitati sono esenti dai requisiti di contrasto WCAG, ma il testo placeholder che trasmette informazioni non lo è.',
      },
      {
        question: 'Quanti colori può estrarre dall’immagine l’estrattore di palette?',
        answer:
          'Fino a 8 colori dominanti distinti. Le tonalità simili vengono raggruppate, quindi i campioni rappresentano i colori visivamente più prominenti nell’immagine piuttosto che ogni tonalità presente.',
      },
      {
        question: 'Posso applicare un campione estratto direttamente come primo piano o sfondo?',
        answer:
          'Sì. Ogni campione estratto ha un pulsante per inviarlo direttamente nello slot Primo piano o Sfondo, così puoi testarlo subito contro l’altro colore.',
      },
      {
        question: 'Quali formati di immagine funzionano con l’estrattore di palette?',
        answer:
          'Qualsiasi immagine che il browser può mostrare, incluse schermate o loghi PNG, JPG, WebP e SVG. I pixel trasparenti vengono ignorati quando si raggruppano i colori.',
      },
      {
        question: 'Il Verificatore di Contrasto Colori testa il daltonismo?',
        answer:
          'No, misura solo il contrasto di luminanza. Il contrasto è una parte dell’accessibilità; per la sicurezza daltonica, evita anche di affidarti solo al colore per trasmettere significato e controlla la tua palette con un simulatore di daltonismo.',
      },
      {
        question: 'Posso usare i valori HEX, RGB e HSL nel mio CSS?',
        answer:
          'Sì. Tutti e tre i formati restano sincronizzati mentre modifichi e puoi copiarli direttamente nel tuo foglio di stile, nei design token o nella configurazione Tailwind.',
      },
      {
        question: 'Qual è la differenza tra AA e AAA in pratica?',
        answer:
          'AA è lo standard legale e pratico a cui punta la maggior parte dei siti, mentre AAA è più rigoroso e spesso difficile da rispettare per il testo del corpo colorato di brand. Punta ad AAA dove puoi, ma non pubblicare mai sotto AA per il testo.',
      },
      {
        question: 'Lo strumento memorizza le mie scelte di colore o le mie immagini?',
        answer:
          'No. Tutto avviene in locale nella scheda del browser, nulla viene caricato e colori e immagini scompaiono quando chiudi o aggiorni la pagina.',
      },
      {
        question: 'Posso controllare più di una coppia di colori alla volta?',
        answer:
          'Il verificatore testa una coppia primo piano/sfondo alla volta, ma puoi scambiare i colori con un solo clic e testare di nuovo tutte le coppie che ti servono in pochi secondi.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica un’immagine QR o attiva la scansione con fotocamera',
        description:
          'Trascina o seleziona qualsiasi schermata QR PNG, JPG, WebP o SVG, oppure fai clic su Avvia scanner fotocamera quando vuoi leggere un codice QR stampato live.',
      },
      {
        title: 'Lascia che lo scanner decodifichi il codice',
        description:
          'Lo strumento esegue la decodifica locale multi-scala e sensibile all’inversione nel browser, così anche i codici QR dark mode o invertiti vengono letti senza caricare nulla.',
      },
      {
        title: 'Ispeziona e copia il testo decodificato',
        description:
          'Esamina il payload decodificato, la categoria di payload rilevata e l’anteprima sicura del link (solo gli URL http/https diventano link cliccabili), poi copia con un clic.',
      },
      {
        title: 'Controlla il tipo di payload prima di agire',
        description:
          'Vedi se il QR contiene un URL, credenziali Wi-Fi, un contatto vCard o testo semplice e verifica che la destinazione sembri giusta prima di visitarla o connetterti.',
      },
      {
        title: 'Passa al Generatore QR vCard di contatto (opzionale)',
        description:
          'Crea un codice QR di biglietto da visita VCF 3.0 scansionabile con nome, organizzazione, telefono, email e sito web e scaricalo come PNG o SVG.',
      },
      {
        title: 'Scarica, stampa o risolvi una scansione fallita',
        description:
          'Scarica il tuo QR vCard o ricarica una schermata più nitida e ben illuminata se la decodifica fallisce: i codici QR ritagliati, sfocati o troppo piccoli sono la causa più comune.',
      },
    ],
    examples: [
      {
        title: 'Verificare una schermata di volantino marketing stampato prima di ordinare le stampe',
        input: 'Carica flyer-qr.png (PNG 600×600)',
        output: 'Payload decodificato · URL sito web: https://example.com/?utm_source=print',
        explanation:
          'Esegue la decodifica locale multi-scala sensibile all’inversione, così anche i codici QR dark mode invertiti vengono decodificati in modo affidabile.',
      },
      {
        title: 'Creare un QR vCard per un biglietto da visita',
        input: 'Nome, telefono, email e sito web inseriti nel generatore vCard',
        output: 'Codice QR vCard scaricabile in PNG e SVG, scansionabile da iPhone e Android',
        explanation:
          'Il formato standard VCF 3.0 permette ai telefoni di offrire il salvataggio del contatto alla scansione.',
      },
    ],
    benefits: [
      'Decodifica schermate QR normali e a colori invertiti in modo pulito senza app mobile',
      'Il flusso opzionale della fotocamera si interrompe subito alla decodifica o all’uscita dalla scheda',
      'Classifica i payload decodificati in modo pulito senza reindirizzare automaticamente altrove',
      'Include la generazione completa di QR vCard 3.0 in PNG e SVG per biglietti da visita digitali',
    ],
    useCases: [
      'Controllare due volte gli URL di destinazione UTM dentro asset QR prima di stampare poster',
      'Estrarre stringhe Wi-Fi o token di testo da schermate desktop',
      'Scansionare codici QR fisici su un laptop usando la webcam integrata',
      'Creare codici QR di contatto vCard scansionabili per curriculum, badge e presentazioni',
    ],
    faqs: [
      {
        question: 'Che cosa succede se il mio dispositivo non ha fotocamera o nega il permesso della fotocamera?',
        answer:
          'Non ti serve mai una fotocamera per usare questo strumento: basta fare una schermata o una foto e caricarla tramite Carica immagine codice QR, che funziona in modo identico senza permessi della fotocamera.',
      },
      {
        question: 'Scansionare un codice QR apre automaticamente siti web dannosi?',
        answer:
          'No. Il testo decodificato viene mostrato in sicurezza dentro un’area di testo in sola lettura prima, così puoi ispezionare qualsiasi URL prima di scegliere se visitarlo.',
      },
      {
        question: 'Serve invece un generatore QR per URL, Wi-Fi o colori personalizzati?',
        answer:
          'Prova il nostro strumento dedicato Generatore di Codici QR in Strumenti per Social Media per colori di primo piano e sfondo personalizzati, livelli di correzione errori e codici QR per URL e testo.',
      },
      {
        question: 'Lo Scanner di Codici QR è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione e sia la scansione sia la generazione QR vCard avvengono in locale nel browser.',
      },
      {
        question: 'Le mie immagini QR caricate vengono inviate a un server?',
        answer:
          'No. La decodifica avviene interamente nel browser usando jsQR, quindi schermate e foto non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Quali formati di immagine può leggere lo Scanner di Codici QR?',
        answer:
          'Funzionano immagini PNG, JPG, WebP e SVG. Le schermate fatte su telefono o computer sono il modo più comune per fornire un codice QR.',
      },
      {
        question: 'Perché il mio codice QR non è riuscito a scansionarsi?',
        answer:
          'Le cause usuali sono un’immagine sfocata o a bassa risoluzione, un codice QR ritagliato troppo stretto, riflessi su un codice stampato o un codice semplicemente troppo piccolo nel riquadro. Ricarica un’acquisizione più nitida, più grande e ben illuminata.',
      },
      {
        question: 'Lo scanner può leggere codici QR invertiti o in dark mode?',
        answer:
          'Sì. Il decodificatore è sensibile all’inversione, quindi i codici QR con moduli chiari su sfondo scuro vengono decodificati con la stessa affidabilità dei codici standard nero su bianco.',
      },
      {
        question: 'Quali tipi di payload QR può rilevare?',
        answer:
          'Classifica automaticamente i contenuti decodificati, inclusi URL di siti web, credenziali di rete Wi-Fi, contatti vCard e testo semplice, così sai che cosa fa un codice prima di agire.',
      },
      {
        question: 'È sicuro scansionare un codice QR trovato in pubblico?',
        answer:
          'Scansionare è sicuro qui perché nulla si apre automaticamente: vedi prima il testo decodificato. Leggi sempre con attenzione l’URL ed evita di inserire password o dati di pagamento in pagine a cui ti porta un codice QR casuale.',
      },
      {
        question: 'Posso scansionare un codice QR con la webcam del laptop?',
        answer:
          'Sì. Fai clic su Avvia scanner fotocamera, consenti l’accesso alla fotocamera quando il browser lo chiede e tieni il codice stampato davanti alla fotocamera. Il flusso si interrompe automaticamente una volta decodificato il codice o quando lasci la scheda.',
      },
      {
        question: 'La fotocamera continua a registrare dopo una scansione?',
        answer:
          'No. Il flusso della fotocamera si interrompe subito a decodifica riuscita e si interrompe anche se cambi scheda o chiudi lo scanner.',
      },
      {
        question: 'Che cos’è un codice QR vCard?',
        answer:
          'Un codice QR vCard memorizza i dettagli di contatto — nome, organizzazione, telefono, email e sito web — nel formato standard VCF 3.0, così scansionarlo con un telefono offre di salvare direttamente il contatto.',
      },
      {
        question: 'Posso scaricare il mio codice QR vCard come PNG e SVG?',
        answer:
          'Sì. Il generatore vCard esporta entrambi i formati: PNG per documenti e presentazioni e SVG per stampe nitide a qualsiasi dimensione.',
      },
      {
        question: 'Il codice QR vCard funzionerà sia su iPhone sia su Android?',
        answer:
          'Sì. Entrambe le piattaforme riconoscono i codici QR vCard standard VCF 3.0 e offrono di aggiungere il contatto quando vengono scansionati con la fotocamera integrata.',
      },
      {
        question: 'Posso scansionare un codice QR da un video o una registrazione dello schermo?',
        answer:
          'Non direttamente, ma puoi mettere in pausa il video, fare una schermata del fotogramma che mostra il codice QR e caricare quella schermata nello scanner.',
      },
      {
        question: 'Lo Scanner di Codici QR funziona offline?',
        answer:
          'Una volta caricata la pagina, la decodifica avviene completamente nel browser senza richieste di rete, quindi puoi scansionare immagini caricate anche senza connessione internet.',
      },
      {
        question: 'Posso scansionare più codici QR in un’immagine?',
        answer:
          'Lo scanner decodifica un codice QR alla volta. Se un’immagine contiene più codici, ritaglia l’immagine così ciascun codice viene caricato separatamente.',
      },
      {
        question: 'Che cosa dovrei controllare prima di stampare un codice QR su un volantino?',
        answer:
          'Carica una schermata del design finito e scansionarla qui per confermare che URL di destinazione, parametri UTM e payload siano esattamente giusti prima di ordinare le stampe.',
      },
      {
        question: 'Lo strumento memorizza i miei codici QR scansionati o le immagini della fotocamera?',
        answer:
          'No. Nulla viene caricato, registrato o memorizzato. I risultati decodificati esistono solo nella scheda corrente del browser e scompaiono quando la chiudi.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Password casuale o Passphrase Diceware',
        description:
          'Usa Password casuale per la massima densità di set di caratteri o Passphrase Diceware per una digitazione umana più facile con forte entropia multi-parola.',
      },
      {
        title: 'Personalizza lunghezza, set di caratteri e numero di batch',
        description:
          'Regola la lunghezza (8–64 caratteri), attiva o disattiva Maiuscole/Minuscole/Cifre/Simboli, escludi opzionalmente caratteri simili (0/O/1/l/I) oppure seleziona 3–8 parole Diceware.',
      },
      {
        title: 'Genera la tua password o passphrase',
        description:
          'Fai clic su Genera per creare output nuovi usando il CSPRNG supportato da hardware del browser con campionamento per rifiuto, così ogni carattere ha esattamente la stessa probabilità.',
      },
      {
        title: 'Controlla il punteggio di entropia',
        description:
          'Ispeziona i bit esatti di entropia di Shannon (consigliati ~72–118+ bit) per vedere quanto lavoro di indovinello rappresenta il risultato prima di usarlo.',
      },
      {
        title: 'Rigenera e copia in sicurezza',
        description:
          'Il risultato non ti soddisfa? Rigenera per ottenerne uno nuovo, poi copia una singola password o l’intero batch con un clic.',
      },
      {
        title: 'Salvala in un gestore di password e aggiorna per cancellare',
        description:
          'Incolla subito il risultato nel tuo gestore di password. Aggiornare la pagina cancella le password generate dalla memoria, quindi non affidarti mai alla scheda per ricordarle.',
      },
    ],
    examples: [
      {
        title: 'Password mista di 18 caratteri con pool completo di caratteri',
        input: 'Lunghezza: 18 · Maiuscole + Minuscole + Cifre + Simboli (Pool: 88 caratteri)',
        output: '~116,3 bit di entropia crittografica · Garantisce >= 1 carattere da ciascuna classe abilitata',
        explanation:
          'Usa il campionamento per rifiuto (scartando campioni uint32 >= floor(2^32 / pool) * pool) per uniformità rigorosa.',
      },
      {
        title: 'Passphrase Diceware di 5 parole facile da digitare',
        input: 'Modalità: Passphrase Diceware · Parole: 5 · Separatore: spazio',
        output: 'Cinque parole casuali con circa 64 bit di entropia, molto più facili da digitare di caratteri casuali',
        explanation:
          'Le passphrase di più parole restano forti pur essendo digitabili su TV, telefoni o prompt di decrittazione disco.',
      },
    ],
    benefits: [
      'Evita rigorosamente Math.random() insicuro: usa window.crypto.getRandomValues con seed hardware',
      'Elimina il bias modulo tramite vero campionamento per rifiuto e mescolamento Fisher-Yates imparziale',
      'Garantisce almeno un carattere da ogni classe di caratteri selezionata senza slot fissi',
      'Nulla viene registrato, memorizzato o trasmesso in rete',
    ],
    useCases: [
      'Proteggere account cloud, chiavi SSH, credenziali di database e vault master di gestori di password',
      'Generare passphrase Diceware digitabili dall’uomo per crittografia disco o chiavi Wi-Fi ospiti',
      'Fornire credenziali temporanee di onboarding in blocco (fino a 10 per clic)',
      'Confrontare l’impatto in bit di entropia di 12 vs. 18 vs. 24 caratteri',
    ],
    faqs: [
      {
        question: 'Perché il campionamento per rifiuto con crypto.getRandomValues è importante?',
        answer:
          'Calcolare semplicemente randomUint32 % poolSize favorisce leggermente i caratteri a indice più basso quando 2^32 non è divisibile in modo uniforme per poolSize (bias modulo). Il campionamento per rifiuto scarta i valori fuori intervallo così ogni carattere nel pool ha esattamente la stessa probabilità matematica.',
      },
      {
        question: 'Dovrei usare una password casuale o una passphrase?',
        answer:
          'Entrambe sono eccellenti quando sono abbastanza lunghe: 16+ caratteri misti funzionano ovunque nei gestori di password, mentre una passphrase di 5–6 parole è molto più facile da digitare manualmente su TV, telefoni o prompt di decrittazione disco.',
      },
      {
        question: 'Le password generate vengono memorizzate da qualche parte?',
        answer:
          'Mai. Le password vivono solo nella memoria React effimera della tua scheda e scompaiono all’aggiornamento.',
      },
      {
        question: 'Il Generatore di Password è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione. Puoi generare tutte le password e passphrase che ti servono, direttamente nel browser.',
      },
      {
        question: 'Come vengono generate le password qui?',
        answer:
          'Vengono create in locale nel browser usando window.crypto.getRandomValues, il generatore di numeri casuali crittograficamente sicuro supportato da hardware del browser, con campionamento per rifiuto per rimuovere il bias modulo.',
      },
      {
        question: 'Le mie password generate vengono inviate a un server?',
        answer:
          'No. La generazione avviene interamente sul tuo dispositivo e nulla viene memorizzato, registrato o trasmesso in rete.',
      },
      {
        question: 'Quanto dovrebbe essere lunga la mia password?',
        answer:
          'Per account importanti, usa almeno 16 caratteri con classi di caratteri miste, che danno circa 100+ bit di entropia. Le password più corte vanno bene solo per account di basso valore e la lunghezza conta più della complessità.',
      },
      {
        question: 'Che cos’è l’entropia di una password e di quanti bit ho bisogno?',
        answer:
          'L’entropia misura quanto lavoro di indovinello rappresenta una password. Circa 70–80 bit sono forti per la maggior parte degli account, mentre 100+ bit sono consigliati per password master, chiavi di crittografia e account di alto valore.',
      },
      {
        question: 'Che cos’è una passphrase Diceware?',
        answer:
          'Una passphrase Diceware è composta da diverse parole casuali scelte da una wordlist fissa, come "correct horse battery staple". Cinque o sei parole casuali danno una forte entropia restando molto più facili da digitare e ricordare dei caratteri casuali.',
      },
      {
        question: 'Dovrei escludere caratteri ambigui come 0, O, 1, l e I?',
        answer:
          'Sì, quando digiterai la password a mano o la leggerai ad alta voce. Escludere i caratteri simili previene login digitati male e, con una password abbastanza lunga, la piccola perdita di entropia è trascurabile.',
      },
      {
        question: 'Posso generare più password alla volta?',
        answer:
          'Sì. Puoi generare un batch fino a 10 password in un clic, utile quando fornisci account o fai onboarding di nuovi membri del team.',
      },
      {
        question: 'Il generatore garantisce almeno un carattere da ciascuna classe selezionata?',
        answer:
          'Sì. Ogni password generata include almeno un carattere da ciascuna classe di caratteri abilitata, senza collocare quei caratteri in posizioni fisse e prevedibili.',
      },
      {
        question: 'Posso usare queste password per la password master del mio gestore di password?',
        answer:
          'Una passphrase lunga funziona bene come password master perché devi digitarla a memoria. Genera una passphrase Diceware di 6 parole, memorizzala e conserva le altre password nel gestore.',
      },
      {
        question: 'Perché non usare Math.random() per le password?',
        answer:
          'Math.random() non è crittograficamente sicuro: il suo output può essere previsto se un attaccante apprende il suo stato interno. Questo strumento usa solo window.crypto.getRandomValues, progettato per casualità sensibile alla sicurezza.',
      },
      {
        question: 'Una password generata funzionerà su ogni sito web?',
        answer:
          'Quasi sempre. Se un sito rifiuta i simboli o limita la lunghezza, riduci la lunghezza o disattiva la classe dei simboli e rigenera finché il sito non l’accetta.',
      },
      {
        question: 'Posso riutilizzare una password generata su più siti?',
        answer:
          'Non dovresti. Riutilizzare una password significa che una violazione espone ogni account che la condivide, quindi genera una password unica per ciascun sito e conservale in un gestore di password.',
      },
      {
        question: 'Che cosa succede alle mie password se aggiorno la pagina?',
        answer:
          'Sono sparite. Le password generate esistono solo nella memoria temporanea della scheda, quindi copiale o salvale in un gestore di password prima di aggiornare o chiudere la pagina.',
      },
      {
        question: 'Il Generatore di Password funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, la generazione avviene completamente nel browser senza richieste di rete, quindi funziona offline.',
      },
      {
        question: 'Come scelgo tra password e passphrase per il Wi-Fi?',
        answer:
          'Usa una passphrase per le chiavi Wi-Fi che digiti su molti dispositivi, poiché le parole sono più facili da inserire correttamente, e una password di caratteri casuali quando un gestore di password la compilerà per te.',
      },
      {
        question: 'Una password generata è garantita inviolabile?',
        answer:
          'Nessuna password può essere garantita inviolabile: un sito può comunque essere violato o ingannato dal phishing. Una password lunga, unica e generata casualmente conservata in un gestore di password è tuttavia una delle difese pratiche più forti che puoi usare.',
      },
    ],
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
    instructions: [
      {
        title: 'Seleziona un file dal tuo dispositivo',
        description:
          'Scegli un archivio, installer, PDF o asset binario. Il file viene letto rigorosamente nella memoria locale del browser (consigliato sotto 500 MB) e non viene mai caricato.',
      },
      {
        title: 'Attendi il calcolo dei digest',
        description:
          'Il browser calcola SHA-256, SHA-512, SHA-384 e SHA-1 in parallelo usando Web Crypto accelerato da hardware. I file più grandi richiedono qualche secondo.',
      },
      {
        title: 'Ispeziona i digest crittografici calcolati',
        description:
          'Esamina gli hash esadecimali SHA-256, SHA-512, SHA-384 e SHA-1 legacy insieme ai metadati del file e scarica un file di testo .sha256 standard se necessario.',
      },
      {
        title: 'Verifica rispetto a un checksum pubblicato',
        description:
          'Incolla la stringa SHA-256/512/384/1 attesa, oppure un’intera riga "<hash>  nomefile" da un file .sha256sum, per confermare una corrispondenza esatta o individuare corruzione o manomissione.',
      },
      {
        title: 'Copia o esporta l’hash',
        description:
          'Copia qualsiasi digest con un clic oppure scarica il file di testo .sha256 standard da distribuire insieme a una release o conservare come registro di verifica.',
      },
      {
        title: 'Agisci in caso di mancata corrispondenza o file grande',
        description:
          'Se gli hash non corrispondono, elimina il file e riscaricalo dalla fonte ufficiale. Per file oltre ~500 MB, usa invece shasum -a 256 o certutil, poiché il browser carica l’intero file in memoria.',
      },
    ],
    examples: [
      {
        title: 'Verificare un binario di release scaricato rispetto a un .sha256sum del fornitore',
        input: 'File: app-v2.tar.gz · Atteso: "e3b0c442...  app-v2.tar.gz"',
        output: 'Checksum verificato! Corrisponde in modo pulito al digest SHA-256 calcolato.',
        explanation:
          'Estrae automaticamente il token hash iniziale, ignora il maiuscolo/minuscolo e confronta con tutti e 4 gli algoritmi calcolati.',
      },
      {
        title: 'Generare un manifest .sha256 per la propria release',
        input: 'File di release caricato · Digest SHA-256 calcolato',
        output: 'File di testo filename.sha256 standard pronto da pubblicare insieme al download.',
        explanation:
          'L’export standard permette agli utenti di verificare il download con strumenti nativi.',
      },
    ],
    benefits: [
      'Usa Web Crypto SubtleCrypto nativo del browser accelerato da hardware',
      'Supporta l’incollaggio di righe complete "<hash>  nomefile" da manifest .sha256sum di release',
      'Esporta file di verifica filename.sha256 standard in un clic',
      'Zero upload di file mantengono private build confidenziali e contratti',
    ],
    useCases: [
      'Verificare ISO Linux, binari CLI o tarball open source senza aprire un terminale',
      'Confermare la consegna esatta byte per byte di archivi legali o finanziari',
      'Generare manifest .sha256 di release per piccoli deliverable di clienti',
      'Rilevare download troncati o corrotti prima dell’estrazione',
    ],
    faqs: [
      {
        question: 'C’è un limite massimo di dimensione del file?',
        answer:
          'Poiché File.arrayBuffer() del browser carica l’intero file nella RAM del client in una volta, i file fino a ~300–500 MB funzionano senza problemi, mentre le ISO multi-gigabyte possono superare le quote di memoria del browser: per file multi-GB sono consigliati strumenti CLI nativi (shasum -a 256 o certutil).',
      },
      {
        question: 'Perché SHA-1 è etichettato solo come compatibilità legacy?',
        answer:
          'SHA-1 ha note debolezze pratiche di collisione e non dovrebbe essere considerato affidabile per garanzie di sicurezza avversariali; preferisci SHA-256 o SHA-512 quando possibile.',
      },
      {
        question: 'Cerchi di eseguire l’hash di stringhe di testo grezze invece di file binari?',
        answer:
          'Controlla il nostro strumento Generatore di Hash in Strumenti per Sviluppatori per l’hashing istantaneo di testo UTF-8.',
      },
      {
        question: 'Il Verificatore di Hash dei File è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione e puoi verificare tutti i file che vuoi.',
      },
      {
        question: 'I miei file vengono caricati da qualche parte quando li verifico?',
        answer:
          'No. L’hashing avviene interamente nel browser usando l’API Web Crypto, quindi i tuoi file non lasciano mai il tuo dispositivo, ed è esattamente per questo che è sicuro per build e contratti confidenziali.',
      },
      {
        question: 'Che cos’è un hash di file e perché dovrei controllarlo?',
        answer:
          'Un hash è un’impronta di lunghezza fissa calcolata dai byte esatti di un file. Se anche un solo byte cambia, l’hash cambia completamente, quindi confrontare gli hash dimostra che un download è arrivato intatto e non modificato.',
      },
      {
        question: 'Quale algoritmo hash dovrei usare: SHA-256, SHA-512 o SHA-1?',
        answer:
          'Usa SHA-256 per la verifica generale: è lo standard fornito dagli editori. SHA-512 è ugualmente forte e più veloce su sistemi a 64 bit, mentre SHA-1 è solo legacy e non dovrebbe essere considerato affidabile per la sicurezza.',
      },
      {
        question: 'Dove trovo il checksum ufficiale da confrontare?',
        answer:
          'Gli editori di solito lo elencano nella pagina di download o in un file .sha256 / .sha256sum accanto al download. Copialo sempre dal sito del fornitore stesso, mai da un mirror o un post di forum.',
      },
      {
        question: 'Che cosa dovrei fare se gli hash non corrispondono?',
        answer:
          'Non eseguire né estrarre il file. Eliminalo e riscaricalo dalla fonte ufficiale; una mancata corrispondenza significa che il download era corrotto, troncato o possibilmente manomesso.',
      },
      {
        question: 'Posso incollare un’intera riga .sha256sum invece del solo hash?',
        answer:
          'Sì. Il verificatore accetta una riga completa "<hash>  nomefile" da un manifest di release: estrae automaticamente il token hash iniziale, ignora il maiuscolo/minuscolo e lo confronta con tutti e quattro gli algoritmi calcolati.',
      },
      {
        question: 'L’hash dipende dal nome del file?',
        answer:
          'No. Il digest viene calcolato solo dal contenuto del file, quindi rinominare un file non ne cambia mai l’hash. Due file con gli stessi byte producono sempre lo stesso hash.',
      },
      {
        question: 'Posso verificare un’ISO Linux o un installer grande con questo strumento?',
        answer:
          'Sì, fino a circa 300–500 MB. Per ISO multi-gigabyte, usa uno strumento nativo come shasum -a 256 su macOS/Linux o certutil -hashfile su Windows, poiché i browser caricano l’intero file in memoria.',
      },
      {
        question: 'Qual è la differenza tra SHA-256 e SHA-512?',
        answer:
          'Entrambi sono membri sicuri della famiglia SHA-2; SHA-256 produce un digest esadecimale di 64 caratteri e SHA-512 di 128 caratteri. SHA-512 è leggermente più forte e veloce su hardware a 64 bit, ma SHA-256 è il checksum pubblicato più ampiamente.',
      },
      {
        question: 'Questo strumento può rilevare un virus o malware in un file?',
        answer:
          'No. Un hash corrispondente dimostra solo che il file è identico a quello rilasciato dall’editore. Se il file dell’editore stesso fosse dannoso, l’hash corrisponderebbe comunque, quindi verifica solo download da fonti di cui ti fidi.',
      },
      {
        question: 'Come scarico un file .sha256 per la mia release?',
        answer:
          'Esegui l’hash del tuo file di release qui, poi scarica il file di testo filename.sha256 standard generato dallo strumento e pubblicalo insieme al tuo download così gli utenti possono verificarlo.',
      },
      {
        question: 'Perché l’hashing richiede qualche secondo per i file grandi?',
        answer:
          'Il browser deve leggere ed elaborare ogni byte del file. I file più grandi richiedono semplicemente più tempo e il tempo cresce con la dimensione del file piuttosto che con l’algoritmo scelto.',
      },
      {
        question: 'Il Verificatore di Hash dei File funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, tutto l’hashing avviene in locale nel browser senza richieste di rete, quindi puoi verificare file senza connessione internet.',
      },
      {
        question: 'Posso verificare più file alla volta?',
        answer:
          'Lo strumento verifica un file alla volta. Esegui l’hash di ciascun file separatamente e confrontalo con il suo checksum pubblicato.',
      },
      {
        question: 'Un hash corrispondente dimostra che il file è autentico?',
        answer:
          'Dimostra che il file è identico byte per byte a quello di cui l’editore ha calcolato l’hash. Non dimostra che l’editore sia chi afferma di essere, quindi ottieni l’hash atteso dal canale ufficiale dell’editore.',
      },
      {
        question: 'Lo strumento memorizza i miei file o i loro hash?',
        answer:
          'No. Nulla viene caricato o memorizzato e gli hash calcolati esistono solo nella scheda corrente del browser finché non la chiudi o aggiorni.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Badge monogramma o Carica logo',
        description:
          'Inserisci 1–3 iniziali del brand con colori di sfondo e testo personalizzati, oppure passa a Carica immagine logo per ritagliare al centro un marchio PNG/SVG/JPG esistente.',
      },
      {
        title: 'Personalizza la tua icona',
        description:
          'Scegli le lettere del monogramma e i colori, oppure regola il ritaglio del logo caricato così il marchio resta centrato con padding uniforme su ogni lato.',
      },
      {
        title: 'Seleziona la forma degli angoli',
        description:
          'Scegli tra Quadrato arrotondato (stile iOS/macOS), Cerchio o Quadrato netto.',
      },
      {
        title: 'Visualizza in anteprima ogni dimensione',
        description:
          'Controlla attentamente le anteprime 16×16 e 32×32: un marchio che sembra ottimo in grande può diventare sfocato a dimensione scheda, quindi semplifica lettere o dettagli se necessario.',
      },
      {
        title: 'Scarica favicon.ico, PNG e snippet HTML',
        description:
          'Scarica il bundle favicon.ico multi-frame insieme alle singole dimensioni PNG e copia i tag link <head> nel tuo progetto.',
      },
      {
        title: 'Installa le icone e svuota la cache',
        description:
          'Metti i file nella cartella /public/, incolla i tag link in index.html, poi aggiorna forzatamente o svuota la cache del browser: i browser memorizzano le favicon in modo aggressivo, quindi un’icona obsoleta di solito significa un’icona in cache.',
      },
    ],
    examples: [
      {
        title: 'Avviare le icone per una nuova app React o Cloudflare Pages',
        input: 'Monogramma "UH" · Sfondo #4F46E5 · Forma: Quadrato arrotondato',
        output: 'Favicon.ico binario (frame PNG 16+32+48 px) + 6 dimensioni PNG + snippet HTML <link>',
        explanation:
          'Costruisce header binari ICONDIR e ICONDIRENTRY validi direttamente dentro buffer Uint8Array.',
      },
      {
        title: 'Creare un’icona Apple Touch da un logo quadrato',
        input: 'Logo PNG quadrato 512×512 con sfondo trasparente · Forma: Cerchio',
        output: 'Icona Apple Touch 180×180 ritagliata al centro, pronta per la schermata home iOS.',
        explanation:
          'Il ritaglio centrale con padding uniforme mantiene il marchio leggibile a ogni dimensione.',
      },
    ],
    benefits: [
      'Crea un vero file binario .ico multi-frame (16×16, 32×32 e 48×48), non un PNG rinominato',
      'Copre schede desktop, Apple Touch (180×180) e icone Web Manifest (192/512 px)',
      'La modalità Monogramma istantanea non richiede software di design per progetti secondari e MVP',
      'Genera boilerplate HTML5 <link rel="icon"> pulito pronto da incollare in index.html',
    ],
    useCases: [
      'Distribuire favicon e icone Apple Touch mancanti prima di lanci SaaS o micrositi',
      'Creare icone di scheda ad alto contrasto per dashboard di staging vs. produzione',
      'Trasformare marchi SVG/PNG quadrati in set completi di icone PWA',
      'Generare anteprime nitide 16×16 e 32×32 per verificare la leggibilità a piccole dimensioni',
    ],
    faqs: [
      {
        question: 'Il favicon.ico scaricato è un vero file binario ICO?',
        answer:
          'Sì. Scrive header ICONDIR ICO standard di Windows e voci di directory contenenti tre frame nitidi codificati PNG (16×16, 32×32 e 48×48) supportati da tutti i browser e sistemi operativi moderni.',
      },
      {
        question: 'Quali dimensioni di icone servono davvero ai siti web moderni?',
        answer:
          'Un favicon.ico più un PNG 32×32, un’icona Apple Touch 180×180 e PNG Web Manifest 192×192 / 512×512 coprono praticamente ogni browser desktop, iOS mobile e Android.',
      },
      {
        question: 'Dove dovrei mettere questi file in un progetto React + Vite?',
        answer:
          'Metti favicon.ico e le icone PNG dentro la cartella /public/ del progetto e incolla i tag HTML <link> dentro index.html <head>.',
      },
      {
        question: 'Il Generatore di Favicon è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione e tutte le icone vengono generate in locale nel browser.',
      },
      {
        question: 'I miei loghi caricati vengono inviati a un server?',
        answer:
          'No. Il tuo logo viene elaborato interamente nel browser e non viene mai caricato, quindi i tuoi asset di brand restano privati.',
      },
      {
        question: 'Qual è la differenza tra un favicon.ico e un favicon PNG?',
        answer:
          'Un favicon.ico è un contenitore che tiene diverse dimensioni di icone in un unico file binario, supportato dai browser da decenni. Un favicon PNG è un’immagine a dimensione singola; i browser moderni accettano entrambi, ma .ico resta l’opzione predefinita più sicura.',
      },
      {
        question: 'Che cos’è un’icona Apple Touch?',
        answer:
          'È l’icona PNG 180×180 che iOS usa quando qualcuno aggiunge il tuo sito alla schermata home. Senza di essa, iOS prende invece una schermata della tua pagina, che di solito sembra scadente.',
      },
      {
        question: 'A che cosa servono le icone PWA 192×192 e 512×512?',
        answer:
          'Sono le icone elencate nel manifest della tua web app per Progressive Web App installabili. Android e Chrome le usano per l’icona della schermata home, la schermata iniziale e il launcher delle app.',
      },
      {
        question: 'Posso creare una favicon da testo senza logo?',
        answer:
          'Sì. La modalità Monogramma trasforma 1–3 lettere, come le iniziali del tuo brand, in un badge pulito con la tua scelta di colore di sfondo, colore del testo e forma degli angoli, senza bisogno di software di design.',
      },
      {
        question: 'Quale file logo dovrei caricare per il miglior risultato?',
        answer:
          'Carica un PNG o SVG quadrato con sfondo trasparente di 512×512 o più. Le immagini sorgente quadrate si ritagliano in modo pulito; i loghi larghi o alti vengono ritagliati al centro, il che può tagliare i bordi.',
      },
      {
        question: 'Perché la mia nuova favicon non appare dopo la distribuzione?',
        answer:
          'I browser memorizzano le favicon in modo molto aggressivo. Aggiorna forzatamente con Ctrl+Shift+R (o Cmd+Shift+R su Mac), svuota la cache del sito o testa in una finestra privata per vedere la nuova icona.',
      },
      {
        question: 'La favicon deve corrispondere esattamente al mio logo?',
        answer:
          'A grandi dimensioni sì, ma a 16×16 i dettagli fini scompaiono. Semplifica il marchio per le dimensioni più piccole: iniziali in grassetto o una singola forma in grassetto si leggono molto meglio di un logo dettagliato.',
      },
      {
        question: 'Quale forma degli angoli dovrei scegliere?',
        answer:
          'Il Quadrato arrotondato corrisponde allo stile delle icone app iOS e macOS, il Cerchio si adatta ad avatar e marchi in stile social e il Quadrato netto è migliore per marchi geometrici o tecnici.',
      },
      {
        question: 'Ho bisogno di aggiungere tag link HTML per le icone?',
        answer:
          'Sì, per risultati affidabili. I browser cercano /favicon.ico per impostazione predefinita, ma le icone Apple Touch e PWA si caricano solo quando le dichiari con tag <link> nel <head> della pagina, che questo strumento genera per te.',
      },
      {
        question: 'Posso usare le icone generate anche per un’app mobile?',
        answer:
          'I PNG 192×192 e 512×512 funzionano per installazioni PWA, ma le app native iOS e Android richiedono i propri set di icone con dimensioni e formati specifici, che questo strumento orientato al web non genera.',
      },
      {
        question: 'Il Generatore di Favicon funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, la generazione delle icone avviene completamente nel browser senza richieste di rete.',
      },
      {
        question: 'Quale colore di sfondo funziona meglio per una favicon monogramma?',
        answer:
          'Un colore di brand pieno e ad alto contrasto con lettere bianche o quasi bianche funziona meglio, poiché resta leggibile a 16×16. Evita testo chiaro su sfondi chiari e gradienti impegnativi.',
      },
      {
        question: 'Posso rigenerare le icone dopo aver cambiato i colori del brand?',
        answer:
          'Sì. Aggiorna i colori o carica il nuovo logo e scarica un nuovo set: lo strumento non conserva nulla della sessione precedente, quindi ogni esecuzione parte pulita.',
      },
      {
        question: 'La favicon funzionerà nelle schede del browser in dark mode?',
        answer:
          'Una favicon con un colore di sfondo pieno appare uguale nelle schede chiare e scure. Se il tuo marchio è scuro su trasparente, aggiungi uno sfondo chiaro o un contorno così resta visibile sul chrome scuro del browser.',
      },
      {
        question: 'Lo strumento memorizza i miei loghi o le icone generate?',
        answer:
          'No. Tutto avviene in locale nella scheda del browser, nulla viene caricato o memorizzato e i tuoi file scompaiono quando chiudi o aggiorni la pagina.',
      },
    ],
  },
};
