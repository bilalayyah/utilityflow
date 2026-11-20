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
    about: 'Chi siamo',
    contact: 'Contatti',
    blog: 'Blog',
    allTools: 'Tutti gli strumenti',
    searchPlaceholder: 'Cerca tra 83 strumenti...',
    searchTools: 'Cerca strumenti',
    closeSearch: 'Chiudi la ricerca',
    openMenu: 'Apri il menu di navigazione',
    closeMenu: 'Chiudi il menu di navigazione',
    skipToContent: 'Vai al contenuto',
    language: 'Lingua',
    chooseLanguage: 'Scegli la lingua',
  },
  footer: {
    tagline:
      'Una raccolta veloce di utilità quotidiane nel browser per scrittori, ingegneri, marketer e analisti. Pensata per funzionare in locale con il minimo carico.',
    categories: 'Categorie',
    platformAi: 'Esplora',
    trustLegal: 'Fiducia e Note legali',
    home: 'Home',
    allToolsDirectory: 'Directory di tutti gli strumenti',
    blog: 'Blog',
    aboutUs: 'Chi siamo',
    contact: 'Contatti',
    privacyPolicy: 'Informativa sulla privacy',
    termsOfService: 'Termini di servizio',
    xmlSitemap: 'Sitemap XML',
    rightsReserved: 'Tutti i diritti riservati.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: 'Utilizziamo cookie e analisi per capire come viene usato il sito e migliorarlo. Puoi accettare o rifiutare.',
    accept: 'Accetta',
    decline: 'Rifiuta',
    cookieSettings: 'Impostazioni cookie',
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
      'UtilityFlow raccoglie 83 utilità pensate per il browser per testi, sviluppo, calcoli, social media, PDF, SEO e immagini.',
    exploreCategories: 'Esplora le categorie',
    openDirectory: 'Apri la directory completa',
    metrics: {
      toolCategories: 'Categorie di strumenti',
      browserUtilities: 'Utilità nel browser',
      liveTools: 'Strumenti attivi',
      accountRequired: 'Account richiesto',
      none: 'Nessuno',
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
    howItWorks: {
      title: 'How It Works',
      description: 'Three simple steps — no account, no install, no waiting.',
      steps: [
        {
          title: 'Find your tool',
          description: 'Search or browse the directory to find the tool you need.',
        },
        {
          title: 'Use it right in your browser',
          description: 'Open the tool and start working instantly — nothing to install.',
        },
        {
          title: 'Copy or download the result',
          description: 'Copy your output or download it as a file, ready to use.',
        },
      ],
    },
    faq: {
      title: 'Domande frequenti',
      description:
        'I punti essenziali su come funziona UtilityFlow e cosa aspettarsi dai nuovi strumenti.',
    },
    faqs: [
      {
        question: 'Gli strumenti di UtilityFlow sono gratuiti e utilizzabili senza creare un account?',
        answer:
          'Sì. Tutti gli 83 strumenti nel browser di UtilityFlow sono disponibili gratuitamente, senza registrazione, senza barriere di accesso, senza crediti e senza abbonamento.',
      },
      {
        question: 'UtilityFlow carica i miei testi, il mio codice o i miei file su un server?',
        answer:
          'Tutti gli 83 strumenti principali nel browser funzionano in locale nel tuo browser web senza caricare i dati inseriti.',
      },
      {
        question: 'Come sono organizzati gli 83 strumenti sulla piattaforma?',
        answer:
          'UtilityFlow copre sette categorie principali (Testo e scrittura, Sviluppatori, Calcolatrici, Social media, PDF, SEO e Strumenti per immagini e file), per un totale di 83 strumenti nel browser integrati nella piattaforma.',
      },
      {
        question: 'Posso salvare nei preferiti o condividere un collegamento diretto a uno strumento specifico?',
        answer:
          'Sì. Ogni strumento e ogni categoria ha il proprio URL permanente e pulito (come /word-counter/ o /category/developer-tools/) che si carica direttamente e funziona anche dopo l’aggiornamento del browser.',
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
      'Sfoglia tutte le {count} utilità attive registrate su UtilityFlow o esplora i sette hub di categoria.',
    searchPlaceholder: 'Cerca per nome di strumento, parola chiave o categoria...',
    showing: 'Mostra {tools} strumenti attivi in {categories} categorie',
    all: 'Tutti',
    availableTools: 'Strumenti disponibili',
    categorySuites: 'Suite di categorie',
    visitHub: 'Visita l’hub {name}',
    plannedToolsInclude: 'Strumenti di questa categoria: {names}',
    noMatch: 'Nessuna categoria o strumento corrisponde al tuo filtro.',
    clearFilters: 'Cancella i filtri',
  },
  category: {
    plannedCount: '{count} strumenti',
    toolsCount: '{count} strumenti',
    toolsLive: '{count} strumenti attivi',
    ofToolsLive: '{count} di {total} strumenti attivi',
    availableTools: '{name} disponibili',
    exploreOther: 'Esplora le altre categorie',
    scheduledTitle: 'Altri strumenti in arrivo',
    scheduledDescription:
      'Questo hub di categoria è attivo e indicizzato nell’architettura {name}. Le singole pagine degli strumenti con funzionalità nel browser saranno aggiunte qui a breve.',
    plannedToolsTitle: 'Strumenti in questa categoria:',
  },
  toolPage: {
    howToUse: 'Come usare {name}',
    practicalExamples: 'Esempi pratici',
    faqs: 'Domande frequenti',
    keyBenefits: 'Vantaggi principali',
    commonUseCases: 'Casi d’uso comuni',
    runsLocally: 'Funziona in locale nel tuo browser',
    externalApi: 'Integrazione con API esterna',
    loadingWorkspace: 'Caricamento dello spazio di lavoro {name}...',
    input: 'Input',
    output: 'Output',
    relatedTitle: 'Strumenti correlati',
    relatedDescription: 'Continua il tuo flusso di lavoro con utilità complementari.',
    browseAll: 'Sfoglia tutti gli {name}',
    moreToolsIn: 'Altri strumenti in',
    willAppear: 'appariranno qui a breve.',
    bylineAuthor: 'Di Bilal',
    lastUpdated: 'Ultimo aggiornamento: novembre 2026',
  },
  blog: {
    seoTitle: 'Guide, tutorial e risorse | Blog di UtilityFlow',
    seoDescription:
      'Guide pratiche, tutorial passo passo e risorse per ogni strumento di UtilityFlow: testo, sviluppo, calcolatrici, PDF, SEO, social media e immagini.',
    title: 'Guide, tutorial e risorse',
    description:
      'Guide pratiche e tutorial passo passo per ogni strumento di UtilityFlow. Scopri cosa fa ogni strumento, come usarlo al meglio e come ottenere il risultato migliore.',
    searchPlaceholder: 'Cerca articoli...',
    searchArticles: 'Cerca articoli',
    noResults: 'Nessun articolo trovato.',
    featured: 'Articoli in evidenza',
    latest: 'Articoli più recenti',
    browseByCategory: 'Sfoglia per categoria',
    relatedArticles: 'Articoli correlati',
    relatedTools: 'Strumenti correlati',
    readingTime: '{minutes} min di lettura',
    publishedOn: 'Pubblicato il {date}',
    updatedOn: 'Aggiornato il {date}',
    byEditorial: 'Dal team editoriale di UtilityFlow',
    tableOfContents: 'Indice',
    prevArticle: 'Articolo precedente',
    nextArticle: 'Articolo successivo',
    share: 'Condividi',
    tryTool: 'Prova lo strumento',
    guidesInCategory: 'Guide in questa categoria',
    categoryGuidesWord: 'Guide',
    noArticlesYet: 'Ancora nessun articolo',
    noArticlesYetDescription: 'Le guide per questa sezione sono in arrivo. Torna presto.',
    backToBlog: 'Torna al blog',
    allArticles: 'Tutti gli articoli',
    notAvailableInLanguage: 'Questo articolo non è ancora disponibile in questa lingua.',
    minRead: 'min di lettura',
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
      'UtilityFlow è una piattaforma web indipendente che costruisce 83 utilità mirate e affidabili per il lavoro digitale quotidiano.',
    whyTitle: 'Perché abbiamo creato UtilityFlow',
    whyP1:
      'Le attività online di routine — contare le parole, convalidare JSON, verificare i limiti di caratteri, calcolare le rate di un prestito o comprimere un’immagine — spesso costringono a passare da siti lenti, pieni di finestre invadenti, download confusi o registrazioni obbligatorie.',
    whyP2:
      'Il nostro obiettivo è semplice: dare a ogni utilità una pagina pulita e dedicata che si carica velocemente, spiega chiaramente come funziona lo strumento e viene eseguita direttamente nel tuo browser ogni volta che gli standard del web lo consentono.',
    orgTitle: 'Chi gestisce UtilityFlow',
    orgP1:
      'UtilityFlow è un progetto indipendente creato e gestito da Bilal, un creatore che costruisce strumenti web gratuiti nel suo tempo libero. Dietro al sito non c’è nessuna azienda, nessun finanziamento di investitori e nessun team di dipendenti: ogni strumento, guida e pagina di aiuto è progettato, realizzato e testato da una sola persona. Tutti gli 83 strumenti sono gratuiti, senza account né abbonamenti. La riga nel piè di pagina nomina Shaheen, il cui incoraggiamento ha ispirato il progetto e il cui nome compare su ogni pagina come promemoria di dove è nata l’idea.',
    orgP2:
      'Poiché il progetto è piccolo e indipendente, le decisioni restano semplici: se uno strumento è lento, poco chiaro o sbagliato, viene corretto. I messaggi inviati dalla pagina Contatti arrivano direttamente alla persona che può modificare il codice, e i suggerimenti dei visitatori hanno già ispirato nuovi strumenti e miglioramenti in tutto il sito.',
    howTitle: 'Come vengono creati e testati i nostri strumenti',
    howP1:
      'Ogni utilità nasce da un unico compito chiaro — contare parole, unire PDF, formattare JSON — ed è costruita come una pagina mirata che svolge bene quel compito. Ovunque gli standard del web lo consentono, il lavoro avviene interamente nel tuo browser, così i tuoi testi e i tuoi file non devono mai lasciare il tuo dispositivo. Ogni pagina di strumento spiega i passaggi con una breve guida, mostra esempi concreti e risponde alle domande più frequenti, così puoi valutare il risultato invece di fidarti di una scatola nera.',
    howP2:
      'Prima che uno strumento venga pubblicato, viene provato con input reali in un browser desktop e in uno mobile, compresi i casi limite come input vuoto, testi molto lunghi e tipi di file insoliti. Quando qualcosa si rompe o un calcolo sembra sbagliato, la correzione viene distribuita come aggiornamento del sito e la pagina viene ricontrollata. Ogni strumento funziona interamente nel tuo browser: nulla di ciò che inserisci viene mai inviato a un server.',
    whoTitle: 'A chi è rivolto UtilityFlow',
    whoP1:
      'UtilityFlow è pensato per chiunque abbia bisogno di una risposta rapida da uno strumento senza installare software né creare un account: studenti che controllano il numero di parole di un saggio, scrittori che formattano una bozza, sviluppatori che convalidano JSON o codificano un URL, marketer che verificano i limiti di caratteri e piccoli imprenditori che calcolano un prestito o uno sconto. Se un’attività richiede meno di un minuto, anche lo strumento dovrebbe richiederne meno di uno: è questo lo standard a cui è tenuta ogni pagina del sito.',
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
          'Gli strumenti vengono distribuiti e verificati per categoria, così ogni utilità riceve test funzionali approfonditi e una documentazione completa.',
      },
    ],
    categoriesTitle: 'Sette categorie di strumenti',
    feedbackTitle: 'Hai commenti o richieste?',
    feedbackBefore:
      'Se noti un caso limite di calcolo, un problema di accessibilità, o vuoi suggerire una nuova utilità, contattaci tramite la nostra',
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
    aboutTitle: 'Di cosa puoi scriverci',
    aboutP1:
      'Usa questo modulo per qualsiasi cosa riguardi il sito. Segnala un bug e dicci quale strumento stavi usando, cosa hai inserito e cosa ti aspettavi che succedesse: più dettagli includi, più velocemente il problema può essere riprodotto e corretto. Suggerisci un nuovo strumento e descrivi il compito che dovrebbe svolgere; le idee richieste da molti visitatori salgono in cima alla lista. Puoi anche segnalare un calcolo sbagliato, un’istruzione poco chiara o un errore di traduzione in qualsiasi pagina.',
    aboutP2:
      'Anche le domande su privacy e aspetti legali sono benvenute. Se un tuo commento deve essere rimosso, indica la pagina dello strumento e il nome usato e verrà eliminato. Per qualsiasi altra cosa — un’idea di collaborazione, una domanda per la stampa o un commento generale sul sito — funziona lo stesso modulo, oppure puoi scrivere direttamente all’indirizzo email indicato in questa pagina.',
    responseTitle: 'Cosa succede dopo l’invio di un messaggio',
    responseP1:
      'Ogni messaggio viene letto dalla persona che crea e gestisce UtilityFlow: non c’è un servizio di assistenza né una coda di risposte automatiche. Le segnalazioni di bug e i risultati errati vengono controllati per primi, perché uno strumento rotto riguarda tutti quelli che lo usano. I suggerimenti di nuovi strumenti vengono raccolti e valutati in base a quante persone li userebbero e a quanto si adattano all’approccio del sito, che privilegia il browser.',
    responseP2:
      'Non serve un account per contattarci e useremo il tuo indirizzo email solo per rispondere al tuo messaggio. Se preferisci non usare il modulo, l’indirizzo email diretto in questa pagina raggiunge la stessa casella di posta.',
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
      'Leggi l’informativa sulla privacy di UtilityFlow: esecuzione degli strumenti nel browser, cookie, registri del server, dati e analisi.',
    title: 'Informativa sulla privacy',
    lastUpdated: 'Ultimo aggiornamento: novembre 2026',
    sections: [
      {
        title: '1. Panoramica',
        paragraphs: [
          'UtilityFlow è progettato attorno all’elaborazione lato browser. Questa Informativa sulla privacy spiega quali informazioni vengono elaborate quando visiti il nostro sito, come le nostre utilità gestiscono i dati inseriti e come funzionano i cookie e le analisi sul sito.',
        ],
      },
      {
        title: '2. Dati degli strumenti ed elaborazione nel browser',
        paragraphs: [
          'Testi, numeri, frammenti di codice e file inseriti nei nostri 83 strumenti nel browser vengono elaborati localmente nella sessione del browser, senza lasciare il tuo dispositivo.',
          'I commenti pubblicati sotto i nostri strumenti richiedono solo un nome e il testo del commento. Il nome e il testo che invii vengono memorizzati sulla nostra piattaforma di hosting e mostrati pubblicamente nella pagina di quello strumento, insieme alla data. Non chiediamo un indirizzo email né un account per commentare e non usiamo i dati dei commenti per la pubblicità. Se vuoi far rimuovere un commento, contattaci indicando la pagina e il nome usato e lo elimineremo.',
        ],
      },
      {
        title: '3. Registri di hosting e telemetria tecnica',
        paragraphs: [
          'UtilityFlow è ospitato su Cloudflare Pages. Come i fornitori di hosting web standard, la nostra rete edge può elaborare automaticamente i metadati standard delle richieste HTTP (come indirizzo IP, user-agent del browser, URL richiesto e timestamp) per distribuire le pagine in modo affidabile, mitigare gli abusi e mantenere la sicurezza.',
          'Non combiniamo i registri di hosting con altri dati per identificare singoli visitatori e non vendiamo né condividiamo i dati dei registri con gli inserzionisti. I registri esistono solo per mantenere il servizio attivo e sicuro.',
        ],
      },
      {
        title: '4. Cookie e analisi',
        paragraphs: [
          'UtilityFlow al momento non mostra annunci di terze parti.',
          'Utilizziamo anche Google Analytics 4 per capire, in forma aggregata, come viene usato il sito; si attiva solo se accetti i cookie nel banner.',
        ],
      },
      {
        title: '5. Collegamenti esterni',
        paragraphs: [
          'La nostra documentazione o le pagine degli strumenti possono contenere collegamenti a siti web esterni. Non siamo responsabili delle pratiche sulla privacy o dei contenuti dei siti web di terze parti.',
          'I collegamenti esterni si aprono in una nuova scheda ove possibile. Prima di inserire informazioni personali su un sito collegato, leggi l’informativa sulla privacy di quel sito.',
        ],
      },
      {
        title: '6. Conservazione dei dati',
        paragraphs: [
          'Le informazioni elaborate nel tuo browser non ci vengono mai inviate, quindi non c’è nulla da conservare. I commenti vengono conservati finché non vengono eliminati, da noi o su tua richiesta. I registri di hosting e di sicurezza vengono conservati solo per il periodo limitato di cui il nostro fornitore di hosting ha bisogno per gestire e proteggere il servizio.',
        ],
      },
      {
        title: '7. I tuoi diritti e le tue scelte',
        paragraphs: [
          'Puoi bloccare o eliminare i cookie nelle impostazioni del tuo browser in qualsiasi momento. Se hai pubblicato un commento, puoi chiederne la rimozione contattandoci. Poiché i nostri strumenti funzionano nel tuo browser e non teniamo account né profili, non esiste un file di dati personali da scaricare o correggere, ma qualsiasi domanda sui tuoi dati riceverà risposta se ci scrivi.',
        ],
      },
      {
        title: '8. Privacy dei minori',
        paragraphs: [
          'UtilityFlow è un sito di uso generale e non è rivolto a minori di 13 anni. Non raccogliamo consapevolmente informazioni personali da minori. Se sei un genitore o un tutore e ritieni che un minore abbia pubblicato un commento sul sito, contattaci e lo rimuoveremo.',
        ],
      },
      {
        title: '9. Modifiche alla presente Informativa',
        paragraphs: [
          'Potremmo aggiornare la presente Informativa sulla privacy quando aggiungiamo strumenti, cambiamo fornitori o modifichiamo il funzionamento del sito. La data di “Ultimo aggiornamento” in cima a questa pagina indica quando è stata rivista l’ultima volta. L’uso continuato del sito dopo una modifica significa che accetti l’informativa aggiornata.',
        ],
      },
    ],
    contactTitle: '10. Contatti',
    contactBefore:
      'Se hai domande su questa Informativa sulla privacy, contattaci tramite la nostra',
    contactLink: 'pagina Contatti',
    contactMiddle: 'o via email',
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
          'Puoi collegarti ai nostri strumenti e condividere i loro risultati. Non puoi presentare i nostri strumenti come tuoi, copiare il design o i contenuti del sito e ripubblicarli come servizio concorrente, né usare il sito in modo da trarre altri in inganno sull’origine di un risultato.',
        ],
      },
      {
        title: '3. Accuratezza e clausola di esclusione della responsabilità',
        paragraphs: [
          'Sebbene testiamo ogni utilità con cura, tutti gli strumenti, i calcoli, le conversioni e i controlli SEO sono forniti “così come sono” e “secondo disponibilità”. I risultati devono essere verificati in modo indipendente prima di prendere decisioni finanziarie, legali, mediche o di ingegneria di produzione.',
          'I calcoli come le rate di un prestito, le stime fiscali e le conversioni di valuta sono aiuti per la pianificazione, non consulenza professionale. Le cifre possono cambiare in base a tassi, regole e arrotondamenti, quindi verifica i numeri importanti con un professionista qualificato o una fonte ufficiale prima di agire in base a essi.',
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
      {
        title: '6. Contenuti degli utenti e commenti',
        paragraphs: [
          'Mantieni la piena proprietà di tutto ciò che digiti nei nostri strumenti o pubblichi come commento. Pubblicando un commento, ci autorizzi a mostrarlo pubblicamente nella pagina dello strumento interessato. Non pubblicare nulla di illegale, fuorviante o dannoso per altri e non pubblicare informazioni personali altrui. Possiamo rimuovere senza preavviso i commenti che violano queste regole o che ci vengono segnalati.',
        ],
      },
      {
        title: '7. Servizi di terze parti',
        paragraphs: [
          'Alcune funzioni si basano su servizi indipendenti di terze parti: il modulo di contatto è gestito da FormSubmit e il sito è ospitato su Cloudflare. Ciascuno di questi servizi ha i propri termini e la propria informativa sulla privacy, e il loro uso è regolato da quei documenti. UtilityFlow non è responsabile della disponibilità o delle pratiche dei servizi di terze parti.',
        ],
      },
      {
        title: '8. Disponibilità del servizio',
        paragraphs: [
          'UtilityFlow è un servizio gratuito e non garantiamo che ogni strumento sia sempre disponibile. Gli strumenti possono essere modificati, migliorati o rimossi e il sito può essere temporaneamente non disponibile per manutenzione. Ci impegniamo a mantenere il servizio attivo senza intoppi, ma non siamo responsabili di interruzioni o di perdite causate da periodi di inattività.',
        ],
      },
    ],
    acceptanceTitle: '1. Accettazione dei termini',
    acceptanceBefore:
      'Accedendo a UtilityFlow o utilizzandolo, accetti di essere vincolato da questi Termini di servizio e dalla nostra',
    acceptanceLink: 'Informativa sulla privacy',
    acceptanceAfter:
      '. Se non sei d’accordo con una parte di questi termini, ti preghiamo di interrompere l’uso del sito.',
    changesTitle: '9. Modifiche e contatti',
    changesBefore:
      'Potremmo aggiornare questi Termini di servizio man mano che vengono pubblicati nuovi strumenti. Le domande possono essere rivolte alla nostra',
    changesLink: 'pagina Contatti',
    changesAfter: '.',
  },
};
