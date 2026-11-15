import type { ToolLocaleOverride } from '../../types';

/**
 * Italian overrides — Batch 4: Social (10) + PDF (10) tools (20 tools).
 * Source: src/registry/batches/batch4/socialToolsPart1.ts, Part2,
 * and src/registry/batches/batch5/pdfToolsPart1.ts, Part2.
 * Filled by Phase 3 translation (Italian, standard).
 */
export const IT_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'generatore-codice-qr',
    name: 'Generatore di Codice QR',
    shortDescription:
      'Genera codici QR personalizzati e leggibili per URL, testo semplice, connessioni Wi-Fi, e-mail o numeri di telefono, con esportazione PNG e SVG.',
    keywords: [
      'generatore di codice qr',
      'creatore di codice qr gratuito',
      'codice qr wifi',
      'generatore di codice qr svg',
      'creare codice qr online',
      'codice qr per password wifi',
      'download codice qr png',
      'generatore di codice qr gratuito senza registrazione',
      'creatore di codice qr per biglietti da visita',
    ],
    seo: {
      title: 'Generatore di Codice QR – Codici QR PNG e SVG | UtilityFlow',
      description:
        'Crea codici QR statici gratuiti per URL, Wi-Fi, testo ed e-mail nel tuo browser — senza registrazione — e scarica PNG o SVG nitidi online, senza limiti.',
      primaryKeyword: 'generatore di codice qr',
      secondaryKeywords: [
        'generatore di codice qr wifi',
        'creatore di codice qr svg',
        'codice qr personalizzato a colori',
        'creatore di codice qr per stampa',
      ],
      longTailKeywords: [
        'generare codice qr statico senza scadenza né tracciamento',
        'creare codice qr wifi leggibile nel browser',
        'scaricare codice qr svg vettoriale gratuito',
        'creare codice qr per biglietto da visita gratis online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Codifica URL di siti web, credenziali Wi-Fi, testo semplice, link e-mail o numeri di telefono in codici QR nitidi conformi agli standard ISO, direttamente nel tuo browser — senza alcun limite di scadenza, senza reindirizzamento di tracciamento e con download istantanei in PNG o SVG vettoriale.',
  },
  'utm-link-builder': {
    slug: 'creatore-link-utm',
    name: 'Creatore di Link UTM',
    shortDescription:
      'Crea URL di monitoraggio di campagna puliti con i parametri utm_source, utm_medium, utm_campaign, utm_term e utm_content.',
    keywords: [
      'creatore di link utm',
      'creatore di url di campagna',
      'generatore utm',
      'utm google analytics',
      'creatore utm gratuito',
      'generatore di parametri utm',
      'creatore di link di monitoraggio di campagna',
      'generatore di link utm instagram',
      'generatore di link utm per e-mail',
    ],
    seo: {
      title: 'Creatore di Link UTM – Monitoraggio Campagna | UtilityFlow',
      description:
        'Crea URL di campagna UTM per social, e-mail e annunci, con preimpostazioni e normalizzazione in minuscolo — gratuito, senza registrazione, nel browser.',
      primaryKeyword: 'creatore di link utm',
      secondaryKeywords: [
        'creatore di url di campagna',
        'generatore di tag utm',
        'url di monitoraggio per social',
        'creatore di url utm per bio instagram',
      ],
      longTailKeywords: [
        'creare link di monitoraggio utm coerenti in minuscolo online',
        'generatore utm che preserva stringhe di query e ancore',
        'modelli di link utm per bio instagram e newsletter',
        'come creare link utm per campagne social',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Genera URL di monitoraggio di campagna puliti e standardizzati per bio social, sponsorizzazioni di creator, annunci a pagamento e newsletter, preservando le stringhe di query esistenti e i frammenti di URL (#sezione).',
  },
  'social-character-limit-checker': {
    slug: 'verificatore-limite-caratteri-social',
    name: 'Verificatore di Limite di Caratteri per Social',
    shortDescription:
      'Misura la lunghezza dei testi su X, Instagram, LinkedIn, TikTok, Threads, Bluesky e YouTube, con anteprime di ripiegamento nel feed.',
    keywords: [
      'verificatore limite caratteri social',
      'contatore caratteri twitter',
      'limite didascalia instagram',
      'verificatore lunghezza post linkedin',
      'contatore caratteri x',
      'contatore caratteri didascalia instagram',
      'verificatore limite didascalia tiktok',
      'limite caratteri threads',
      'contatore caratteri bluesky',
    ],
    seo: {
      title: 'Verificatore di Limite di Caratteri – Social | UtilityFlow',
      description:
        'Verifica i limiti di caratteri e le anteprime di ripiegamento per X, Instagram, LinkedIn, TikTok, Threads, Bluesky e YouTube — con conteggio delle emoji.',
      primaryKeyword: 'verificatore limite caratteri social',
      secondaryKeywords: [
        'contatore post x twitter',
        'verificatore lunghezza didascalia instagram',
        'anteprima ripiegamento vedi di più linkedin',
        'contatore caratteri didascalia tiktok',
      ],
      longTailKeywords: [
        'verificare limite di caratteri e ripiegamento sulle piattaforme social',
        'contatore twitter 280 caratteri con ponderazione url 23 caratteri',
        'contatore bio instagram 150 caratteri e didascalia',
        'quanti caratteri in una bio instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Scrivi una volta e verifica istantaneamente i limiti rigidi di caratteri, la ponderazione dei link t.co di 23 caratteri su X, il numero di hashtag e le anteprime di troncamento sopra il ripiegamento su 10 grandi superfici social.',
  },
  'unicode-fancy-text-formatter': {
    slug: 'formattatore-testo-unicode',
    name: 'Formattatore di Testo Unicode Elegante',
    shortDescription:
      'Converti testo ASCII semplice in stili Unicode grassetto, corsivo, monospace, script, maiuscoletto e larghezza intera per le bio.',
    keywords: [
      'generatore di testo elegante',
      'testo unicode in grassetto',
      'formattatore di font per bio instagram',
      'generatore di maiuscoletto',
      'generatore di testo in grassetto per instagram',
      'generatore di testo unicode in corsivo',
      'generatore di testo monospace',
      'generatore di testo script',
      'generatore di testo larghezza intera',
    ],
    seo: {
      title: 'Formattatore di Testo Unicode Elegante – Stili | UtilityFlow',
      description:
        'Trasforma testo semplice in stili Unicode grassetto, corsivo, monospace, script e maiuscoletto per bio e post — copia-incolla ovunque, gratis, senza limiti.',
      primaryKeyword: 'formattatore di testo unicode elegante',
      secondaryKeywords: [
        'generatore di testo unicode in grassetto',
        'convertitore di testo in maiuscoletto',
        'font per bio di social',
        'testo grassetto corsivo per bio social',
      ],
      longTailKeywords: [
        'copia-incolla testo unicode in grassetto per linkedin e instagram',
        'convertire testo semplice in maiuscoletto e monospace unicode',
        'consigli di accessibilità per testo social stilizzato unicode',
        'come mettere testo in grassetto in una bio instagram senza app',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Trasforma lettere e cifre semplici in simboli alfanumerici matematici Unicode standard, maiuscoletto e glifi a larghezza intera che conservano lo stile grassetto o monospace nelle bio social in testo semplice.',
  },
  'bio-line-break-formatter': {
    slug: 'formattatore-interruzioni-riga-bio',
    name: 'Formattatore di Interruzioni di Riga per Bio Instagram',
    shortDescription:
      'Preserva paragrafi vuoti puliti nelle didascalie e nelle bio Instagram rimuovendo gli spazi finali e aggiungendo spazi invisibili.',
    keywords: [
      'generatore di interruzioni di riga instagram',
      'formattatore di interruzioni di riga per bio',
      'strumento di spaziatura di didascalia',
      'interruzione di riga invisibile per social',
      'spaziatore di didascalia instagram',
      'interruzioni di riga per bio instagram',
      'strumento di interruzione di riga di didascalia',
      'carattere invisibile per instagram',
      'interruzioni di riga per bio tiktok',
    ],
    seo: {
      title: 'Formattatore di Interruzioni di Riga – Bio | UtilityFlow',
      description:
        'Mantieni una spaziatura di paragrafo pulita in didascalie e bio Instagram, Threads e TikTok — rimuovi gli spazi finali e copia facilmente in un clic, gratis.',
      primaryKeyword: 'formattatore di interruzioni di riga per bio',
      secondaryKeywords: [
        'interruzioni di riga di didascalia instagram',
        'spaziatore invisibile per bio instagram',
        'preservare righe vuote sui social',
        'strumento di spaziatura di bio instagram',
      ],
      longTailKeywords: [
        'mantenere spaziatura dei paragrafi nelle didascalie instagram senza punti',
        'correggere spazi finali che rompono le interruzioni di riga di bio instagram',
        'copiare una didascalia social formattata pulita negli appunti',
        'come aggiungere interruzioni di riga in una bio instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Impedisci alle app social di fondere le righe vuote delle tue didascalie e bio rimuovendo gli spazi finali nascosti e inserendo eventualmente spazi invisibili Braille Blank (⠀) negli intervalli di paragrafo.',
  },
  'youtube-timestamp-generator': {
    slug: 'generatore-timestamp-youtube',
    name: 'Generatore di Timestamp e Capitoli YouTube',
    shortDescription:
      'Crea descrizioni di capitoli di video YouTube ordinate, convalidate secondo le specifiche YouTube, e genera link di salto ?t= cliccabili.',
    keywords: [
      'generatore di timestamp youtube',
      'creatore di capitoli youtube',
      'generatore di link temporali youtube',
      'formattatore di capitoli video',
      'creatore di timestamp di capitoli youtube',
      'strumento di capitoli di descrizione youtube',
      'link di timestamp youtube cliccabili',
      'validatore di capitoli youtube',
      'generatore di codici temporali di capitoli video',
    ],
    seo: {
      title: 'Generatore di Timestamp YouTube – Capitoli | UtilityFlow',
      description:
        'Crea capitoli YouTube ordinati e convalidati: inizio a 00:00, minimo 3 capitoli e spaziatura di 10 secondi, più link di salto ?t= cliccabili, gratis online.',
      primaryKeyword: 'generatore di timestamp youtube',
      secondaryKeywords: [
        'formattatore di capitoli youtube',
        'creatore di url di timestamp youtube',
        'lista di controllo dei capitoli video',
        'strumento di codice temporale di capitoli youtube',
      ],
      longTailKeywords: [
        'generare blocco di descrizione di capitoli video youtube online',
        'creare link di salto di timestamp youtube cliccabili per capitoli',
        'convalidare regola youtube dei 10 secondi minimi tra capitoli',
        'formattare capitoli youtube che iniziano a 00:00 con tre capitoli',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Assembla blocchi di capitoli YouTube puliti e ordinati cronologicamente per le descrizioni dei tuoi video — verificati automaticamente rispetto alle regole ufficiali dei capitoli YouTube — e genera link di salto `?t=` cliccabili per commenti, newsletter o note di puntata.',
  },
  'social-thumbnail-previewer': {
    slug: 'anteprima-miniature-social',
    name: 'Anteprima di Miniature YouTube e Social',
    shortDescription:
      'Visualizza in anteprima le immagini di miniature locali con i titoli nelle disposizioni di feed desktop e barra laterale, con verifiche 16:9 e 2 MB.',
    keywords: [
      'anteprima di miniatura youtube',
      'tester di miniatura',
      'anteprima di troncamento di titolo video',
      'verificatore di miniatura 16:9',
      'verificatore di dimensione di miniatura youtube',
      'anteprima di miniatura in modalità scura',
      'anteprima di miniatura di feed youtube',
      'verificatore di zona sicura di miniatura',
      'strumento di mockup di miniatura video',
    ],
    seo: {
      title: 'Anteprima di Miniature YouTube e Social | UtilityFlow',
      description:
        'Visualizza in anteprima miniatura e titolo nei feed YouTube chiari e scuri prima della pubblicazione, con verifiche 16:9, 1280×720 e 2 MB — senza invio.',
      primaryKeyword: 'anteprima di miniatura youtube',
      secondaryKeywords: [
        'anteprima di miniatura nel feed',
        'verificatore di lunghezza di titolo youtube',
        'strumento di zona sicura di miniatura',
        'verificatore di dimensione di miniatura youtube',
      ],
      longTailKeywords: [
        'visualizzare in anteprima miniatura youtube in modalità scura prima della pubblicazione',
        'verificare sovrapposizione del badge di timestamp in basso a destra',
        'verificatore privato di miniatura 1280x720 lato client',
        'testare leggibilità di miniatura youtube in dimensione barra laterale',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Testa le tue miniature e i titoli di video non pubblicati in disposizioni realistiche di feed home chiaro e scuro e di barra laterale compatta — verificando localmente le dimensioni HD 1280×720, il rapporto 16:9, il limite di dimensione file di 2 MB e la sovrapposizione del timestamp in basso a destra.',
  },
  'hashtag-formatter': {
    slug: 'formattatore-hashtag',
    name: 'Formattatore di Hashtag e Gestore di Gruppi',
    shortDescription:
      'Pulisci parole chiave disordinate, rimuovi hashtag duplicati, formatta tag #CamelCase accessibili e verifica i limiti delle piattaforme.',
    keywords: [
      'formattatore di hashtag',
      'pulitore di hashtag',
      'convertitore di hashtag camelcase',
      'rimuovere hashtag duplicati',
      'generatore di hashtag da parole chiave',
      'verificatore di limite di hashtag instagram',
      'convertitore di maiuscole di hashtag',
      'strumento di pulizia di lista di hashtag',
      'formattatore di gruppi di hashtag',
    ],
    seo: {
      title: 'Formattatore di Hashtag – CamelCase e Gruppi | UtilityFlow',
      description:
        'Normalizza le parole chiave in hashtag #CamelCase o minuscoli, rimuovi duplicati e punteggiatura non valida, e verifica il limite di 30 tag Instagram.',
      primaryKeyword: 'formattatore di hashtag',
      secondaryKeywords: [
        'generatore di hashtag camelcase',
        'rimozione di hashtag duplicati',
        'contatore di hashtag instagram',
        'convertitore di maiuscole di hashtag',
      ],
      longTailKeywords: [
        'convertire lista di parole chiave in hashtag camelcase accessibili',
        'rimuovere hashtag duplicati e punteggiatura non valida online',
        'formattare gruppi di hashtag con separatori a punti',
        'verificare limite di 30 hashtag instagram prima della pubblicazione',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Trasforma parole chiave separate da virgole o mucchi di tag disordinati in hashtag deduplicati e puliti di punteggiatura, formattati in `#CamelCase` amichevole per i lettori di schermo o in minuscolo, pronti per blocchi di didascalia in una riga, verticali o separati da punti.',
  },
  'caption-template-builder': {
    slug: 'creatore-modelli-didascalie',
    name: 'Creatore di Modelli di Didascalie e Ganci',
    shortDescription:
      'Assembla didascalie social strutturate con modelli deterministici PAS, Tutorial, Prima-Dopo-Ponte e Lista di controllo.',
    keywords: [
      'creatore di modelli di didascalie',
      'modelli di post per social',
      'creatore di cornici di gancio',
      'formattatore di post linkedin',
      'modelli di didascalie instagram',
      'modello di scrittura pas',
      'generatore di ganci per social',
      'modelli di struttura di post',
      'strumento di cornice di scrittura di didascalia',
    ],
    seo: {
      title: 'Creatore di Modelli di Didascalie – Ganci | UtilityFlow',
      description:
        'Assembla didascalie per i social con i modelli PAS, Tutorial e Prima-Dopo-Ponte — le tue parole, strutturate, con contatori di caratteri in tempo reale.',
      primaryKeyword: 'creatore di modelli di didascalie',
      secondaryKeywords: [
        'cornici di didascalie per social',
        'creatore di struttura di post linkedin',
        'modello di scrittura pas',
        'modelli di didascalie instagram',
      ],
      longTailKeywords: [
        'creare didascalie linkedin e instagram strutturate senza ia',
        'modello di post social problema agitazione soluzione',
        'verificare adeguatezza caratteri x e instagram scrivendo',
        'modello di didascalia prima dopo ponte per post social',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Componi post social coerenti e facili da sfogliare più velocemente con modelli di scrittura deterministici — Problema–Agitazione–Soluzione (PAS), Dettaglio azionabile, Prima–Dopo–Ponte, Lista di controllo di audit e Mito contro Realtà — strettamente dalle tue voci, senza testo IA inventato.',
  },
  'social-handle-formatter': {
    slug: 'formattatore-nomi-utente',
    name: 'Formattatore di Nomi Utente per Social',
    shortDescription:
      'Genera variazioni di pseudonimi di marca coerenti, convalida le regole di caratteri e sintassi delle piattaforme e apri URL diretti di verifica di profilo.',
    keywords: [
      'formattatore di pseudonimi social',
      'validatore di sintassi di nome utente',
      'generatore di pseudonimi di marca',
      'regole di nomi utente social',
      'verificatore di disponibilità di nome utente',
      'verificatore di pseudonimi multipiattaforma',
      'regole di nome utente instagram',
      'limite di caratteri di nome utente x',
      'convertitore di nome di marca in pseudonimo',
    ],
    seo: {
      title: 'Formattatore di Nomi Utente – Regole | UtilityFlow',
      description:
        'Genera variazioni di pseudonimi da un nome di marca, convalida le regole di X, Instagram, TikTok, YouTube, Threads e GitHub, e apri gli URL diretti online.',
      primaryKeyword: 'formattatore di nomi utente',
      secondaryKeywords: [
        'regole di nomi utente dei social',
        'generatore di variazioni di pseudonimi di marca',
        'regole di caratteri dei pseudonimi youtube',
        'verificatore di disponibilità di nome utente',
      ],
      longTailKeywords: [
        'verificare lunghezza di caratteri e simboli consentiti dei nomi utente',
        'suggerimenti di pseudonimi di marca coerenti su x instagram tiktok',
        'convalidare formato di pseudonimo per github youtube e threads',
        'trovare variazioni di pseudonimi di marca quando il nome esatto è preso',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Trasforma qualsiasi nome di marca, progetto o creator in candidati di pseudonimi puliti multipiattaforma, convalida ogni candidato rispetto ai limiti di caratteri e alle regole di punteggiatura ufficiali di sei reti, e accedi direttamente agli URL di profili in diretta per verificare la disponibilità.',
  },
  'merge-pdf': {
    slug: 'unisci-pdf',
    name: 'Unisci PDF',
    shortDescription:
      'Combina più documenti PDF in un ordine personalizzato nel tuo browser, senza inviare file a server esterni.',
    keywords: [
      'unisci pdf',
      'combina file pdf',
      'unisci pdf online gratis',
      'unione pdf lato client',
      'unisci file pdf gratis',
      'combina più pdf in uno solo',
      'unione pdf senza invio',
      'unisci documenti pdf online',
      'unisci pagine pdf in ordine',
    ],
    seo: {
      title: 'Unisci PDF – Combina File PDF Gratis Online | UtilityFlow',
      description:
        'Combina più file PDF in un unico documento nell’ordine scelto, localmente nel tuo browser con pdf-lib, senza alcun invio a un server, gratis e sicuro.',
      primaryKeyword: 'unisci pdf',
      secondaryKeywords: [
        'combina file pdf online',
        'unisci pagine pdf localmente',
        'unione pdf privata',
        'unisci file pdf gratis',
      ],
      longTailKeywords: [
        'unire contratti pdf riservati senza invio a un server',
        'combinare più pdf e riordinare l’ordine nel browser',
        'combinatore di documenti pdf gratis lato client',
        'unire file pdf in ordine senza invio',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combina due file PDF o più in un unico documento pulito direttamente nella memoria del browser. Consulta il numero di pagine di ogni file, riordina i documenti con i controlli su/giù, scegli un nome di file di output e scarica immediatamente.',
  },
  'split-pdf': {
    slug: 'dividi-pdf',
    name: 'Dividi ed Estrai Pagine PDF',
    shortDescription:
      'Estrai intervalli di pagine personalizzati, pagine pari o dispari, o esplodi singoli PDF di una sola pagina localmente tramite pdf-lib.',
    keywords: [
      'dividi pdf',
      'estrai pagine pdf',
      'separa pagine pdf',
      'estrattore di pagine pdf',
      'dividi pagine pdf gratis',
      'divisore pdf online',
      'estrai pagine da pdf gratis',
      'esplodi pdf in pagine singole',
      'dividi pdf per intervallo di pagine',
    ],
    seo: {
      title: 'Dividi un PDF – Estrai Pagine Gratis | UtilityFlow',
      description:
        'Estrai intervalli di pagine PDF (come 1-3, 5), separa le pagine pari o dispari, o esplodi pagine singole nel tuo browser, senza invio, gratis online subito.',
      primaryKeyword: 'dividi pdf',
      secondaryKeywords: [
        'estrai pagine da pdf',
        'estrattore di intervallo di pagine pdf',
        'separa pdf in pagine singole',
        'dividi pdf per intervallo di pagine',
      ],
      longTailKeywords: [
        'estrarre pagine 1-3 e 5 da pdf senza invio a un server',
        'dividere pagine pari e dispari di pdf nel browser',
        'separare pdf di più pagine localmente gratis',
        'dividere pdf e scaricare solo le pagine selezionate',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Estrai intervalli di pagine esatti (`1-3, 5, 8-10`), isola le pagine pari o dispari per il riassemblaggio fronte-retro, o esplodi PDF più brevi in file individuali di una sola pagina, interamente nella memoria del client.',
  },
  'images-to-pdf': {
    slug: 'immagini-in-pdf',
    name: 'Convertitore di Immagini in PDF',
    shortDescription:
      'Converti immagini PNG, JPG e WebP in un unico PDF A4, Lettera US o adatto all’immagine, localmente nel tuo browser.',
    keywords: [
      'immagini in pdf',
      'jpg in pdf',
      'convertitore png in pdf',
      'webp in pdf',
      'convertire immagini in pdf gratis',
      'jpg png in pdf',
      'convertitore foto in pdf',
      'combinare immagini in un unico pdf',
      'screenshot in pdf',
    ],
    seo: {
      title: 'Immagini in PDF – Convertire JPG, PNG e WebP | UtilityFlow',
      description:
        'Trasforma le tue foto o screenshot JPG, PNG e WebP in un unico PDF di più pagine, con pagine A4, Lettera US o a dimensione esatta, gratis nel browser.',
      primaryKeyword: 'immagini in pdf',
      secondaryKeywords: [
        'convertitore jpg in pdf nel browser',
        'png in pdf online gratis',
        'combinare foto in pdf',
        'convertire immagini in pdf gratis',
      ],
      longTailKeywords: [
        'convertire immagini jpg png webp in pdf a4 senza invio',
        'raggruppare screenshot in pdf di più pagine localmente',
        'adattare dimensioni di immagine alla pagina pdf senza ritaglio',
        'trasformare foto di telefono in documento pdf gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combina scansioni, ricevute o screenshot JPG, PNG e WebP in un PDF pulito di più pagine. Ordina le immagini visivamente, scegli A4 Verticale, Lettera US o Dimensioni esatte dell’immagine, definisci i margini e genera localmente tramite `pdf-lib`.',
  },
  'pdf-to-images': {
    slug: 'pdf-in-immagini',
    name: 'PDF in Immagini (PNG / JPG)',
    shortDescription:
      'Converti le pagine PDF in immagini PNG o JPG scaricabili a una risoluzione da 1,0× a 2,0× localmente tramite PDF.js.',
    keywords: [
      'pdf in immagini',
      'pdf in png',
      'convertitore pdf in jpg',
      'convertire pagine pdf in immagini',
      'convertire pdf in png gratis',
      'convertire pdf in jpg',
      'pagina pdf in immagine',
      'esportare pagine pdf in png',
      'salvare pdf in immagine online',
    ],
    seo: {
      title: 'PDF in Immagini – Esportare Pagine in PNG | UtilityFlow',
      description:
        'Converti le pagine PDF in PNG o JPG fino a 2× nel tuo browser. Scegli pagine esatte, visualizza l’anteprima del rendering e scarica l’essenziale, gratis.',
      primaryKeyword: 'pdf in immagini',
      secondaryKeywords: [
        'convertitore pdf in png',
        'pdf in jpg online gratis',
        'estrarre pagina pdf in immagine',
        'convertire pdf in png gratis',
      ],
      longTailKeywords: [
        'convertire pagine pdf in png ad alta risoluzione nel browser',
        'salvare una sola pagina pdf in jpg senza inviare il documento',
        'motore di rendering pdfjs lato client verso png',
        'convertire diapositive pdf in immagini png per condivisione',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Converti le pagine PDF in immagini PNG nitide senza perdita o in immagini JPG compatte direttamente nel tuo browser con il motore di rendering PDF.js di Mozilla — con filtro per intervallo di pagine, selezione di scala (`1,0×`–`2,0×`) e anteprime visive.',
  },
  'pdf-page-rotator': {
    slug: 'rotazione-pagine-pdf',
    name: 'Rotazione di Pagine PDF',
    shortDescription:
      'Ruota tutte le pagine, le pagine pari o dispari, o intervalli di pagine precisi di 90°, 180° o 270° in modo permanente, senza perdita di qualità.',
    keywords: [
      'ruota pdf',
      'rotazione di pagine pdf',
      'correggi pagine pdf storte',
      'salva pdf ruotato',
      'ruota pagine pdf online gratis',
      'ruota pdf di 90 gradi',
      'correggi pdf ruotato',
      'ruota pagine pdf in modo permanente',
      'ruota pagine pdf scansionate',
    ],
    seo: {
      title: 'Rotazione di Pagine PDF – Correggi le Pagine | UtilityFlow',
      description:
        'Ruota le pagine PDF storte o capovolte di 90°, 180° o 270° su tutte le pagine, pari/dispari o intervalli personalizzati, gratuitamente, senza invio online.',
      primaryKeyword: 'rotazione di pagine pdf',
      secondaryKeywords: [
        'ruota pdf in modo permanente',
        'correggi scansione pdf capovolta',
        'ruota pagine pdf precise',
        'ruota pdf di 90 gradi online',
      ],
      longTailKeywords: [
        'ruotare solo le pagine 2 e 4 di un documento pdf online',
        'ruotare pdf scansionato di 90 gradi in modo permanente senza ricodifica',
        'strumento di orientamento di pagine pdf lato client',
        'ruotare pagine pdf capovolte in modo permanente gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Correggi definitivamente le tabelle in paesaggio storte o le scansioni di documenti capovolte nel dizionario di pagine del PDF. Applica rotazioni di `90°` in senso orario, `90°` in senso antiorario o `180°` a ogni pagina, ai fogli pari/dispari o a intervalli di pagine esatti.',
  },
  'reorder-delete-pdf-pages': {
    slug: 'riordina-elimina-pagine-pdf',
    name: 'Riordina ed Elimina Pagine PDF',
    shortDescription:
      'Ispeziona visivamente le miniature PDF, sposta le pagine su o giù, duplica fogli o elimina le pagine indesiderate localmente.',
    keywords: [
      'riordina pagine pdf',
      'elimina pagine pdf',
      'riarrangia pdf',
      'rimuovi pagine da pdf',
      'riordina pagine pdf online',
      'elimina pagine vuote da pdf',
      'duplica pagina pdf',
      'organizza pagine pdf',
      'sposta pagine pdf',
    ],
    seo: {
      title: 'Riordina ed Elimina Pagine PDF – Sposta | UtilityFlow',
      description:
        'Riordina le pagine PDF nel tuo browser: sposta, duplica o elimina pagine con miniature in diretta e scarica un file pulito, gratis, privato e senza invio.',
      primaryKeyword: 'riordina pagine pdf',
      secondaryKeywords: [
        'elimina pagine da pdf',
        'riarrangia pdf online',
        'rimuovi pagine pdf vuote',
        'riordina pagine pdf online',
      ],
      longTailKeywords: [
        'riordinare e rimuovere visivamente pagine pdf senza invio',
        'duplicare una pagina in un pdf esistente nel browser',
        'riordinare sequenza di pagine pdf gratis lato client',
        'riordinare pagine pdf online gratis nel browser',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Consulta le schede di pagine renderizzate del tuo PDF, sposta le pagine mal collocate in avanti o indietro, duplica le pagine di copertina o di modello, elimina le pagine vuote ed esporta un PDF pulito riordinato localmente.',
  },
  'pdf-watermark': {
    slug: 'filigrana-pdf',
    name: 'Strumento di Filigrana PDF',
    shortDescription:
      'Apponi filigrane di testo diagonali personalizzabili come RISERVATO o BOZZA sulle pagine PDF, con dimensione e opacità personalizzate.',
    keywords: [
      'filigrana pdf',
      'aggiungi filigrana a pdf',
      'timbro pdf riservato',
      'filigrana pdf bozza',
      'filigrana pdf online gratis',
      'aggiungi timbro bozza a pdf',
      'filigrana riservato pdf',
      'creatore di filigrana pdf',
      'timbro pagine pdf',
    ],
    seo: {
      title: 'Filigrana PDF – Aggiungi Timbri Gratis | UtilityFlow',
      description:
        'Aggiungi una filigrana ai tuoi PDF nel tuo browser: testo diagonale o centrato, dimensione, opacità, angolo e colore, senza invio — gratis e privato.',
      primaryKeyword: 'filigrana pdf',
      secondaryKeywords: [
        'aggiungi timbro riservato a pdf',
        'timbro pdf nel browser',
        'strumento di sovrapposizione bozza pdf',
        'filigrana pdf online gratis',
      ],
      longTailKeywords: [
        'aggiungere filigrana diagonale semitrasparente a pdf senza invio',
        'filigrana solo prima pagina del contratto pdf',
        'timbro di testo vettoriale su pagine pdf gratis',
        'aggiungere filigrana riservato a pdf gratis nel browser',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Apponi filigrane di testo vettoriale centrate o diagonali — come `RISERVATO`, `BOZZA` o `NON DISTRIBUIRE` — su tutte le pagine o sulla copertina di qualsiasi PDF, con controlli in tempo reale di dimensione font, opacità, angolo di rotazione e colore di marca.',
  },
  'add-pdf-page-numbers': {
    slug: 'aggiungi-numeri-pagina-pdf',
    name: 'Aggiungi Numeri di Pagina al PDF',
    shortDescription:
      'Inserisci numeri di pagina vettoriali puliti («Pagina 1 di N», «1 / N» o «1») nei documenti PDF, con salto della copertina.',
    keywords: [
      'aggiungi numeri di pagina a pdf',
      'numerazione di pagine pdf',
      'numera pagine pdf online',
      'numeri di pagina stile bates',
      'numera pagine pdf',
      'aggiungi numeri di pagina pdf gratis',
      'numeri di pagina di piè di pagina pdf',
      'pagina x di n pdf',
      'pagina pdf online',
    ],
    seo: {
      title: 'Aggiungi Numeri di Pagina al PDF – Gratis | UtilityFlow',
      description:
        'Aggiungi numeri di pagina ai PDF con etichette vettoriali, il salto della copertina e un numero iniziale — senza invio né registrazione, gratis online.',
      primaryKeyword: 'aggiungi numeri di pagina a pdf',
      secondaryKeywords: [
        'strumento di numeri di pagina pdf',
        'numera pagine pdf nel browser',
        'salta copertina numerazione pdf',
        'pagina pdf online',
      ],
      longTailKeywords: [
        'aggiungere numeri di piè di pagina pagina 1 di n al pdf unito',
        'iniziare numerazione pdf alla pagina 2 saltare pagina di titolo',
        'strumento di paginazione pdf vettoriale lato client',
        'aggiungere numeri di pagina a pdf gratis senza invio',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Numera pulitamente i pacchetti uniti, i pezzi legali o le sottomissioni accademiche con una tipografia vettoriale nitida — scegliendo `Pagina 1 di N`, `1 / N` o cifre sole, l’allineamento basso/alto, numeri iniziali personalizzati e il salto facoltativo della copertina.',
  },
  'pdf-metadata-editor': {
    slug: 'editor-metadati-pdf',
    name: 'Ispettore ed Editor di Metadati PDF',
    shortDescription:
      'Consulta, aggiorna o rimuovi i tag Titolo, Autore, Oggetto, Parole chiave, Creatore e Produttore del PDF, in privato nella memoria del browser.',
    keywords: [
      'editor di metadati pdf',
      'visualizzatore di metadati pdf',
      'rimuovi autore da pdf',
      'rimuovi metadati pdf',
      'modifica metadati pdf',
      'cambia titolo pdf',
      'editor di proprietà pdf',
      'rimuovi autore pdf',
      'vedi metadati pdf',
    ],
    seo: {
      title: 'Editor di Metadati PDF – Vedi e Modifica | UtilityFlow',
      description:
        'Consulta, aggiorna o rimuovi i tag Titolo, Autore, Oggetto, Parole chiave, Creatore e Produttore di un PDF, in privato nel tuo browser — gratis, senza invio.',
      primaryKeyword: 'editor di metadati pdf',
      secondaryKeywords: [
        'visualizzatore di metadati pdf',
        'rimuovi metadati di autore pdf',
        'cambia titolo di documento pdf',
        'modifica metadati pdf online',
      ],
      longTailKeywords: [
        'ispezionare e rimuovere metadati di autore nascosti di pdf online',
        'cambiare titolo pdf mostrato nella scheda del browser gratis',
        'editor privato di proprietà pdf lato client',
        'rimuovere metadati di autore di pdf prima della condivisione',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Rivela le proprietà nascoste memorizzate nelle intestazioni PDF — compreso titolo del documento, autore, oggetto, parole chiave, software creatore e produttore — per definire titoli di scheda di browser puliti o rimuovere i metadati personali di identificazione prima di una pubblicazione pubblica.',
  },
  'pdf-text-extractor': {
    slug: 'estrattore-testo-pdf',
    name: 'Estrattore di Testo PDF',
    shortDescription:
      'Estrai il testo selezionabile pagina per pagina dei documenti PDF in testo semplice copiabile o in download .txt tramite PDF.js.',
    keywords: [
      'estrattore di testo pdf',
      'estrai testo da pdf',
      'convertitore pdf in txt',
      'copia testo da pdf',
      'estrai testo da pdf online',
      'pdf in testo gratis',
      'pdf in txt',
      'ottieni testo da pdf',
      'strumento di copia di testo pdf',
    ],
    seo: {
      title: 'Estrattore di Testo PDF – Copia in .TXT | UtilityFlow',
      description:
        'Estrai il testo incorporato di un PDF pagina per pagina nel tuo browser, con marcatori di pagina, numeri di parole, copia e download .txt, gratis online.',
      primaryKeyword: 'estrattore di testo pdf',
      secondaryKeywords: [
        'pdf in txt online gratis',
        'estrai testo pdf lato client',
        'copia testo di documento pdf',
        'pdf in testo gratis',
      ],
      longTailKeywords: [
        'estrarre testo da pdf riservato localmente senza invio',
        'convertire pdf basato su testo in file txt semplice con marcatori',
        'rilevare pdf scansionato senza livello di testo',
        'estrarre testo da pdf in txt gratis nel browser',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Leggi ed estrai il testo Unicode incorporato direttamente dai PDF basati su testo, pagina per pagina, con PDF.js, con intestazioni facoltative `--- Pagina N ---`, statistiche di parole e byte, copia in un clic ed esportazione `.txt` — più una rilevazione trasparente quando un PDF è scansionato o composto solo di immagini.',
  },
};
