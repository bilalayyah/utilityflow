import type { UiStrings } from '../ui';

/**
 * Italian chrome dictionary — same UiStrings shape and key order as
 * src/locales/en/ui.ts. Natural Standard Italian (neutral, widely
 * understood); brand names, URLs, email addresses and code values kept
 * identical to English.
 */
export const itStrings: UiStrings = {
  nav: {
    tools: 'Strumenti',
    categories: 'Categorie',
    aiTools: 'Strumenti IA',
    about: 'Chi siamo',
    contact: 'Contatti',
    allTools: 'Tutti gli strumenti',
    freeAiTools: 'Strumenti IA gratuiti',
    viewAiSection: 'Vedi la sezione IA sulla home →',
    searchPlaceholder: 'Cerca tra 88 strumenti...',
    searchTools: 'Cerca strumenti',
    closeSearch: 'Chiudi la ricerca',
    openMenu: 'Apri il menu di navigazione',
    closeMenu: 'Chiudi il menu di navigazione',
    skipToContent: 'Vai al contenuto',
    language: 'Lingua',
    chooseLanguage: 'Scegli la lingua',
    aiWriting: {
      label: 'Assistente di scrittura IA',
      desc: 'Grammatica, riscrittura, tono e bozze di email',
    },
    aiSummarizer: {
      label: 'Riassuntore di testo IA',
      desc: 'Riassunti brevi, medi e in elenchi puntati',
    },
    aiFinder: {
      label: 'Cercatore di strumenti IA',
      desc: 'Trova lo strumento giusto in linguaggio semplice',
    },
  },
  footer: {
    tagline:
      'Una raccolta veloce di utilità quotidiane nel browser per scrittori, ingegneri, marketer e analisti. Pensata per funzionare in locale con il minimo carico.',
    categories: 'Categorie',
    platformAi: 'Piattaforma e IA',
    legal: 'Note legali',
    home: 'Home',
    allToolsDirectory: 'Directory di tutti gli strumenti',
    aboutUs: 'Chi siamo',
    contact: 'Contatti',
    privacyPolicy: 'Informativa sulla privacy',
    termsOfService: 'Termini di servizio',
    xmlSitemap: 'Sitemap XML',
    rightsReserved: 'Tutti i diritti riservati.',
    deployedNote: 'Crafted with ❤️ by Bilal, inspired by Shaheen.',
  },
  common: {
    copy: 'Copia',
    copied: 'Copiato',
    download: 'Scarica',
    clear: 'Cancella',
    loadSample: 'Carica un esempio',
    reset: 'Reimposta',
    search: 'Cerca',
    close: 'Chiudi',
    cancel: 'Annulla',
    save: 'Salva',
    submit: 'Invia',
    loading: 'Caricamento...',
    processing: 'Elaborazione in corso...',
    upload: 'Carica',
    chooseFile: 'Scegli un file',
    dragDrop: 'Trascina qui il tuo file',
    tryAgain: 'Riprova',
    openTool: 'Apri lo strumento',
    browserSide: 'Nel browser',
    freeAiTool: 'Strumento IA gratuito',
    externalApi: 'API esterna',
  },
  home: {
    seoTitle: 'UtilityFlow – Strumenti online gratuiti e veloci nel browser',
    seoDescription:
      'Strumenti online gratuiti, veloci e attenti alla privacy per analisi di testi, formattazione per sviluppatori, calcolatrici, PDF, controlli SEO e immagini.',
    seoKeywords: [
      'strumenti online',
      'strumenti nel browser',
      'strumenti di testo',
      'strumenti per sviluppatori',
      'calcolatrici online',
      'strumenti PDF',
      'strumenti SEO',
    ],
    eyebrow: 'Piattaforma UtilityFlow · 7 categorie principali · {count} utilità attive',
    h1: 'Utilità online pratiche, pensate per la velocità e la privacy.',
    heroDescription:
      'UtilityFlow raccoglie 85 utilità pensate per il browser, oltre alla scrittura IA gratuita, al riassunto e alla ricerca intelligente degli strumenti, per testi, sviluppo, calcoli, social media, PDF, SEO e immagini.',
    exploreCategories: 'Esplora le categorie',
    openDirectory: 'Apri la directory completa',
    aiWriting: 'Scrittura IA',
    aiSummarizer: 'Riassuntore IA',
    aiFinder: 'Cercatore di strumenti IA',
    metrics: {
      toolCategories: 'Categorie di strumenti',
      browserUtilities: 'Utilità nel browser',
      liveTools: 'Strumenti attivi',
      accountRequired: 'Account richiesto',
      none: 'Nessuno',
    },
    aiSpotlight: {
      badge: 'Suite IA gratuita · Nessun accesso richiesto',
      title: 'Strumenti IA gratuiti',
      description:
        'Migliora le tue bozze, riassumi documenti lunghi o trova lo strumento giusto in pochi secondi, senza registrarti.',
    },
    popular: {
      title: 'Strumenti popolari',
      description: 'Le utilità quotidiane più usate per la scrittura, lo sviluppo e i calcoli.',
      viewDirectory: 'Vedi la directory degli strumenti',
    },
    categories: {
      title: 'Categorie di strumenti',
      description:
        'Sette suite specializzate pensate per coprire scrittura, programmazione, matematica, pubblicazione, documenti, ottimizzazione per i motori di ricerca e media.',
      includes: 'Include: {names}',
    },
    directory: {
      title: 'Directory di tutti gli strumenti',
      description:
        'Filtra per categoria o parola chiave per raggiungere direttamente qualsiasi utilità attiva o hub di categoria.',
      filterPlaceholder: 'Filtra categorie o strumenti...',
      allCategories: 'Tutte le categorie',
      noMatch: 'Nessuna categoria o strumento corrisponde a "{query}".',
      resetFilters: 'Reimposta i filtri',
      upcomingUtilities: 'Utilità in arrivo: {names}',
      scheduledInBatch: 'Previsto nella fase {batch}',
      toolsActive: '{count} strumenti attivi',
      openCategory: 'Apri la pagina della categoria',
    },
    why: {
      title: 'Perché scegliere UtilityFlow',
      description: 'Pensato come alternativa pulita e affidabile ai siti di utilità pieni di pubblicità.',
      items: [
        {
          title: 'Privacy prima di tutto, nel browser',
          description:
            'Calcoli, trasformazioni di stringhe e formattazione vengono eseguiti direttamente nella memoria del browser, così bozze sensibili e payload JSON restano sul tuo dispositivo.',
        },
        {
          title: 'Consegna rapida e leggera',
          description:
            'Moduli degli strumenti suddivisi per codice e dipendenze minime mantengono leggeri i caricamenti delle pagine e reattivi i Core Web Vitals su qualsiasi connessione.',
        },
        {
          title: 'URL puliti e permanenti',
          description:
            'Ogni utilità vive al proprio indirizzo dedicato, con metadati strutturati, esempi d’uso e collegamenti diretti affidabili anche dopo l’aggiornamento del browser.',
        },
        {
          title: 'Risultati prevedibili e verificabili',
          description:
            'Gli strumenti privilegiano risultati deterministici, istruzioni trasparenti e controlli accessibili, senza popup invadenti né indicatori fuorvianti.',
        },
      ],
    },
    faq: {
      title: 'Domande frequenti',
      description:
        'I punti essenziali su come funziona UtilityFlow e cosa aspettarsi dalle prossime fasi.',
    },
    faqs: [
      {
        question: 'Gli strumenti di UtilityFlow sono gratuiti e utilizzabili senza creare un account?',
        answer:
          'Sì. Tutti gli 85 strumenti nel browser e i 3 strumenti IA di UtilityFlow sono disponibili gratuitamente, senza registrazione, senza barriere di accesso, senza crediti e senza abbonamento.',
      },
      {
        question: 'UtilityFlow carica i miei testi, il mio codice o i miei file su un server?',
        answer:
          'Tutti gli 85 strumenti principali nel browser funzionano in locale nel tuo browser web senza caricare i dati inseriti. I nostri 3 strumenti IA gratuiti opzionali (Assistente di scrittura IA, Riassuntore di testo IA e Cercatore di strumenti IA) elaborano le richieste in modo sicuro tramite inferenza Groq lato server, senza memorizzare i tuoi testi.',
      },
      {
        question: 'Come sono organizzati gli 88 strumenti sulla piattaforma?',
        answer:
          'UtilityFlow copre sette categorie principali (Testo e scrittura, Sviluppatori, Calcolatrici, Social media, PDF, SEO e Strumenti per immagini e file), per un totale di 85 strumenti nel browser e 3 strumenti IA gratuiti integrati nella piattaforma.',
      },
      {
        question: 'Posso salvare nei preferiti o condividere un collegamento diretto a uno strumento specifico?',
        answer:
          'Sì. Ogni strumento e ogni categoria ha il proprio URL permanente e pulito (come /word-counter/, /ai-writing-assistant/ o /category/developer-tools/) che si carica direttamente e funziona anche dopo l’aggiornamento del browser.',
      },
      {
        question: 'UtilityFlow funziona bene su telefoni cellulari e tablet?',
        answer:
          'Sì. Tutti i layout, i controlli di navigazione e gli spazi di lavoro interattivi — inclusi il tema chiaro e il tema scuro — sono progettati prima di tutto per i dispositivi mobili, con aree di tocco accessibili e griglie reattive.',
      },
    ],
    trustLine: 'Tutti gli strumenti sono gratuiti • Nessuna registrazione richiesta • Funziona nel tuo browser',
  },
  directory: {
    seoTitle: 'Directory di tutti gli strumenti online | UtilityFlow',
    seoDescription:
      'Sfoglia e cerca tutte le utilità di UtilityFlow nel browser, organizzate per scrittura, sviluppo, calcolatrici, PDF, SEO e immagini, gratis e senza account.',
    seoKeywords: ['directory degli strumenti', 'tutti gli strumenti online', 'strumenti gratuiti nel browser'],
    title: 'Directory di tutti gli strumenti',
    description:
      'Sfoglia tutte le {count} utilità attive registrate su UtilityFlow o esplora i sette hub di categoria tra flussi nel browser e IA gratuita.',
    searchPlaceholder: 'Cerca per nome di strumento, parola chiave o categoria...',
    showing: 'Mostra {tools} strumenti attivi in {categories} categorie',
    all: 'Tutti',
    availableTools: 'Strumenti disponibili',
    categorySuites: 'Suite di categorie',
    visitHub: 'Visita l’hub {name}',
    plannedToolsInclude: 'Strumenti previsti: {names}',
    noMatch: 'Nessuna categoria o strumento corrisponde al tuo filtro.',
    clearFilters: 'Cancella i filtri',
  },
  category: {
    batchLabel: 'Fase {batch}',
    plannedCount: '{count} strumenti previsti',
    toolsCount: '{count} strumenti',
    toolsLive: '{count} strumenti attivi',
    ofToolsLive: '{count} di {total} strumenti attivi',
    availableTools: '{name} disponibili',
    exploreOther: 'Esplora le altre categorie',
    scheduledTitle: 'Previsto per la fase {batch}',
    scheduledDescription:
      'Questo hub di categoria è attivo e indicizzato nell’architettura {name}. Le singole pagine degli strumenti con funzionalità nel browser saranno aggiunte qui durante la fase {batch}.',
    plannedToolsTitle: 'Strumenti previsti in questa categoria:',
  },
  toolPage: {
    howToUse: 'Come usare {name}',
    practicalExamples: 'Esempi pratici',
    faqs: 'Domande frequenti',
    keyBenefits: 'Vantaggi principali',
    commonUseCases: 'Casi d’uso comuni',
    runsLocally: 'Funziona in locale nel tuo browser',
    externalApi: 'Integrazione con API esterna',
    freeAiTool: 'Strumento IA gratuito · Nessun accesso',
    loadingWorkspace: 'Caricamento dello spazio di lavoro {name}...',
    input: 'Input',
    output: 'Output',
    relatedTitle: 'Strumenti correlati',
    relatedDescription: 'Continua il tuo flusso di lavoro con utilità complementari.',
    browseAll: 'Sfoglia tutti gli {name}',
    moreToolsIn: 'Altri strumenti in',
    willAppear: 'appariranno qui con il rilascio della fase {batch}.',
  },
  search: {
    placeholder:
      'Cerca strumenti o categorie (es. contatore di parole, JSON, PDF, calcolatrici)...',
    search: 'Cerca',
    tools: 'Strumenti',
    categories: 'Categorie',
    noResults: 'Nessuno strumento o categoria trovato per "{query}".',
    viewDirectory: 'Vedi la directory completa',
    clearSearch: 'Cancella la ricerca',
    ariaLabel: 'Cerca strumenti o categorie',
  },
  notFound: {
    seoTitle: 'Pagina non trovata (404) | Strumenti online UtilityFlow',
    seoDescription:
      'Lo strumento o la pagina richiesta non esiste su UtilityFlow. Cerca nella directory degli strumenti o sfoglia le categorie per trovare ciò che ti serve.',
    eyebrow: '404 · Non trovata',
    title: 'Non siamo riusciti a trovare questa pagina.',
    description:
      'L’URL potrebbe essere cambiato, oppure questa utilità non è stata ancora pubblicata. Cerca qui sotto o sfoglia le nostre categorie per trovare ciò che ti serve.',
    returnHome: 'Torna alla home',
    browseDirectory: 'Sfoglia la directory',
    browseCategories: 'Sfoglia le categorie',
  },
  about: {
    seoTitle: 'Chi è UtilityFlow – Piattaforma di strumenti online',
    seoDescription:
      'Scopri come UtilityFlow crea utilità veloci e attente alla privacy per il browser in sette categorie, senza account, confusione o caricamenti di dati inutili.',
    title: 'Chi è UtilityFlow',
    intro:
      'UtilityFlow è una piattaforma web indipendente che costruisce 85 utilità mirate e affidabili nel browser per il lavoro digitale quotidiano.',
    whyTitle: 'Perché abbiamo creato UtilityFlow',
    whyP1:
      'Le attività online di routine — contare le parole, convalidare JSON, verificare i limiti di caratteri, calcolare le rate di un prestito o comprimere un’immagine — spesso costringono a passare da siti lenti, pieni di finestre invadenti, download confusi o registrazioni obbligatorie.',
    whyP2:
      'Il nostro obiettivo è semplice: dare a ogni utilità una pagina pulita e dedicata che si carica velocemente, spiega chiaramente come funziona lo strumento e viene eseguita direttamente nel tuo browser ogni volta che gli standard del web lo consentono.',
    principlesTitle: 'Principi fondamentali di ingegneria',
    principles: [
      {
        title: 'Esecuzione lato client',
        description:
          'Le utilità di testo, codice, matematica e file locali elaborano i dati nella memoria del browser, così i tuoi dati di lavoro non vengono inviati a server remoti.',
      },
      {
        title: 'Avvisi API trasparenti',
        description:
          'Se un’utilità specializzata richiede una ricerca esterna o una chiamata al server, lo indichiamo esplicitamente sulla pagina dello strumento prima di eseguire qualsiasi operazione.',
      },
      {
        title: 'Interfacce accessibili',
        description:
          'Navigazione da tastiera, contrasto leggibile, messaggi di errore chiari e controlli mobili reattivi sono integrati in ogni modello.',
      },
      {
        title: 'Rilascio modulare',
        description:
          'Gli strumenti vengono distribuiti e verificati in sette fasi per categoria, così ogni utilità riceve test funzionali approfonditi e una documentazione completa.',
      },
    ],
    categoriesTitle: 'Sette categorie di strumenti previste',
    feedbackTitle: 'Hai commenti o richieste?',
    feedbackBefore:
      'Se noti un caso limite di calcolo, un problema di accessibilità, o vuoi suggerire un’utilità per una prossima fase, contattaci tramite la nostra',
    feedbackLink: 'pagina Contatti',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Contatta UtilityFlow – Supporto, bug e suggerimenti',
    seoDescription:
      'Contatta il team di UtilityFlow per segnalare un problema o un bug, suggerire un nuovo strumento o chiedere informazioni su privacy e termini di servizio.',
    title: 'Contattaci',
    intro:
      'Invia segnalazioni di bug, suggerimenti di strumenti o richieste generali. Leggiamo ogni messaggio e diamo priorità alle correzioni che migliorano la precisione degli strumenti e l’accessibilità.',
    name: 'Nome',
    email: 'Indirizzo email',
    topic: 'Argomento',
    message: 'Messaggio',
    submit: 'Invia messaggio',
    sending: 'Invio in corso…',
    sendError: 'Non è stato possibile inviare il messaggio. Riprova.',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Descrivi lo strumento, il bug o la domanda in dettaglio...',
    topics: [
      'Suggerimento di strumento',
      'Segnalazione di bug',
      'Correzione SEO o di contenuto',
      'Richiesta su privacy o aspetti legali',
      'Domanda generale',
    ],
    errors: {
      name: 'Inserisci il tuo nome.',
      emailEmpty: 'Inserisci il tuo indirizzo email.',
      emailInvalid: 'Inserisci un indirizzo email valido.',
      subject: 'Scegli o inserisci un argomento.',
      message: 'Includi almeno 10 caratteri nel tuo messaggio.',
    },
    successTitle: 'Messaggio inviato',
    successThanks:
      'Grazie, {name}. Il tuo messaggio è stato inviato e ti risponderemo presto.',
    successNote:
      'Se hai bisogno di aggiungere altro, puoi anche contattarci direttamente a',
    sendAnother: 'Invia un altro messaggio',
    directEmail: 'Email diretta',
    directEmailText: 'Preferisci scrivere direttamente? Scrivi al nostro team a:',
  },
  privacy: {
    seoTitle: 'Informativa privacy e cookie | Strumenti UtilityFlow',
    seoDescription:
      'Leggi l’informativa sulla privacy di UtilityFlow: esecuzione degli strumenti nel browser, cookie, registri del server, dati e pubblicità di terze parti.',
    title: 'Informativa sulla privacy',
    lastUpdated: 'Ultimo aggiornamento: novembre 2026',
    sections: [
      {
        title: '1. Panoramica',
        paragraphs: [
          'UtilityFlow è progettato attorno all’elaborazione lato browser. Questa Informativa sulla privacy spiega quali informazioni vengono elaborate quando visiti il nostro sito, come le nostre utilità gestiscono i dati inseriti e come possono funzionare i cookie o le tecnologie pubblicitarie.',
        ],
      },
      {
        title: '2. Dati degli strumenti, elaborazione nel browser e strumenti IA gratuiti',
        paragraphs: [
          'Testi, numeri, frammenti di codice e file inseriti nei nostri 85 strumenti nel browser vengono elaborati localmente nella sessione del browser, senza lasciare il tuo dispositivo.',
          'I nostri tre strumenti IA gratuiti (Assistente di scrittura IA, Riassuntore di testo IA e Cercatore di strumenti IA) inviano il testo inviato tramite il nostro backend protetto a Groq per l’inferenza in tempo reale. Non memorizziamo né registriamo le tue richieste, e i limiti giornalieri gratuiti utilizzano solo un hash SHA-256 datato in UTC, così gli indirizzi IP grezzi dei visitatori non vengono mai memorizzati.',
        ],
      },
      {
        title: '3. Registri di hosting e telemetria tecnica',
        paragraphs: [
          'UtilityFlow è ospitato su Cloudflare Pages. Come i fornitori di hosting web standard, la nostra rete edge può elaborare automaticamente i metadati standard delle richieste HTTP (come indirizzo IP, user-agent del browser, URL richiesto e timestamp) per distribuire le pagine in modo affidabile, mitigare gli abusi e mantenere la sicurezza.',
        ],
      },
      {
        title: '4. Cookie e pubblicità di terze parti',
        paragraphs: [
          'Potremmo mostrare annunci di reti pubblicitarie di terze parti (come Google AdSense) per sostenere l’accesso gratuito ai nostri strumenti. I fornitori di terze parti, incluso Google, possono utilizzare cookie o web beacon per mostrare annunci in base alle visite precedenti dell’utente a questo sito o ad altri siti.',
          'Puoi disattivare la pubblicità personalizzata visitando le Impostazioni annunci di Google o gestendo le preferenze sui cookie direttamente nelle impostazioni del tuo browser.',
        ],
      },
      {
        title: '5. Collegamenti esterni',
        paragraphs: [
          'La nostra documentazione o le pagine degli strumenti possono contenere collegamenti a siti web esterni. Non siamo responsabili delle pratiche sulla privacy o dei contenuti dei siti web di terze parti.',
        ],
      },
    ],
    contactTitle: '6. Contatti',
    contactBefore:
      'Se hai domande su questa Informativa sulla privacy, contattaci tramite la nostra',
    contactLink: 'pagina Contatti',
    contactMiddle: 'o via email',
    optOutGoogleAds: 'Google Ads Settings',
    optOutAboutAds: 'Rinuncia su AboutAds.info',
  },
  terms: {
    seoTitle: 'Termini di servizio | Strumenti online UtilityFlow',
    seoDescription:
      'Consulta i Termini di servizio di UtilityFlow: uso consentito delle utilità nel browser, proprietà intellettuale, accuratezza e limiti di responsabilità.',
    title: 'Termini di servizio',
    lastUpdated: 'Ultimo aggiornamento: novembre 2026',
    sections: [
      {
        title: '2. Uso consentito',
        paragraphs: [
          'Puoi utilizzare UtilityFlow per attività di produttività personali, educative e commerciali. Accetti di non automatizzare traffico abusivo, di non tentare di interrompere la distribuzione del sito, di non aggirare le protezioni di sicurezza e di non utilizzare alcuna utilità per attività illegali.',
        ],
      },
      {
        title: '3. Accuratezza e clausola di esclusione della responsabilità',
        paragraphs: [
          'Sebbene testiamo ogni utilità con cura, tutti gli strumenti, i calcoli, le conversioni e i controlli SEO sono forniti “così come sono” e “secondo disponibilità”. I risultati devono essere verificati in modo indipendente prima di prendere decisioni finanziarie, legali, mediche o di ingegneria di produzione.',
        ],
      },
      {
        title: '4. Proprietà intellettuale',
        paragraphs: [
          'L’interfaccia, le risorse del marchio, la documentazione e il codice sorgente di UtilityFlow sono protetti dalle leggi applicabili sulla proprietà intellettuale. Mantieni la piena proprietà di qualsiasi testo, codice, documento o immagine elaborata con le nostre utilità lato client.',
        ],
      },
      {
        title: '5. Limitazione di responsabilità',
        paragraphs: [
          'Nella misura massima consentita dalla legge, UtilityFlow e i suoi collaboratori non saranno responsabili di alcun danno indiretto, incidentale, speciale o consequenziale derivante dall’uso o dall’impossibilità di usare questa piattaforma. UtilityFlow è un progetto indipendente e non è affiliato, approvato o collegato a YouTube, Instagram, Google o a qualsiasi altro marchio di terze parti menzionato su questo sito.',
        ],
      },
    ],
    acceptanceTitle: '1. Accettazione dei termini',
    acceptanceBefore:
      'Accedendo a UtilityFlow o utilizzandolo, accetti di essere vincolato da questi Termini di servizio e dalla nostra',
    acceptanceLink: 'Informativa sulla privacy',
    acceptanceAfter:
      '. Se non sei d’accordo con una parte di questi termini, ti preghiamo di interrompere l’uso del sito.',
    changesTitle: '6. Modifiche e contatti',
    changesBefore:
      'Potremmo aggiornare questi Termini di servizio man mano che vengono pubblicate nuove fasi di strumenti. Le domande possono essere rivolte alla nostra',
    changesLink: 'pagina Contatti',
    changesAfter: '.',
  },
};
