// Detail content for IT tools — split out of
// src/locales/it/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
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
          'Lo slug è la parte finale leggibile di un URL, come "migliori-strumenti-cafe", mentre il permalink è l’URL completo incluso dominio ed eventuali cartelle. Per una conversione rapida di testo per sviluppatori con separatori underscore, vedi Convertitore di Testo in Slug.',
      },
    ],
  },
  'keyword-density-checker': {
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
          'La densità delle parole chiave è la frequenza con cui una parola o frase appare in percentuale rispetto alle parole totali di un testo. Una frase usata 5 volte in 500 parole ha una densità dell’1%. Per tabelle di frequenza complete con export CSV, vedi Contatore di Frequenza delle Parole.',
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
};
