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
    instructions: [
      {
        title: 'Scegli il formato di contenuto',
        description:
          'Seleziona URL di sito web, Testo semplice, Rete Wi-Fi, Link e-mail o Numero di telefono in alto.',
      },
      {
        title: 'Inserisci il tuo contenuto',
        description:
          'Digita o incolla il tuo URL, il tuo testo o i tuoi contatti. Per il Wi-Fi, aggiungi il nome della rete (SSID), il tipo di sicurezza e la password.',
      },
      {
        title: 'Personalizza aspetto e correzione di errore',
        description:
          'Regola la dimensione in pixel, il margine di zona di silenzio, i colori esadecimali di primo piano e sfondo, e il livello di correzione di errore (da L a H).',
      },
      {
        title: 'Visualizza in anteprima e testa il codice',
        description:
          'Verifica l’anteprima in tempo reale e scansiona con la fotocamera del tuo telefono prima di scaricarlo per confermare che apra la destinazione giusta.',
      },
      {
        title: 'Scarica in PNG o SVG vettoriale',
        description:
          'Esporta un PNG nitido per le grafiche social oppure copia e scarica il file SVG scalabile per i supporti stampati.',
      },
      {
        title: 'Correggi un codice che non si scansiona',
        description:
          'Aumenta il contrasto del primo piano, ingrandisci il codice, aumenta il livello di correzione di errore o allarga il margine di zona di silenzio, poi testa di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Adesivo QR Wi-Fi per ospiti',
        input: 'SSID: GuestWiFi · Sicurezza: WPA',
        output: 'WIFI:T:WPA;S:GuestWiFi;P:...;H:false;;',
        explanation:
          'Le fotocamere iOS e Android riconoscono automaticamente i contenuti QR Wi-Fi standard per connettersi senza digitare la password.',
      },
      {
        title: 'Codice QR di URL per un biglietto da visita',
        input: 'URL: https://example.com/portfolio',
        output: 'Codice QR PNG o SVG leggibile da qualsiasi fotocamera di telefono',
        explanation:
          'Il contenuto è codificato direttamente nel motivo, quindi il codice funziona per sempre senza server né tracciamento.',
      },
    ],
    benefits: [
      'I codici QR statici non scadono mai e non fanno passare gli utenti da alcun reindirizzamento di tracciamento di terze parti',
      'Genera un SVG vettoriale senza perdita oltre a immagini PNG ad alta risoluzione',
      'Supporta correttamente la formattazione QR Wi-Fi WPA/WEP/aperta, con escape dei caratteri speciali',
      'Mantiene gli URL privati e le password Wi-Fi strettamente nella memoria del browser',
    ],
    useCases: [
      'Collegare volantini, poster o biglietti da visita stampati a pagine di destinazione con tag UTM',
      'Creare cartelli QR Wi-Fi per ospiti leggibili per uffici, studi o eventi',
      'Aggiungere link di contatto o portfolio istantanei a presentazioni e imballaggi',
      'Esportare codici QR SVG nitidi per gli strumenti di design di stampa ad alta risoluzione',
    ],
    faqs: [
      {
        question: 'I codici QR creati qui scadono dopo un periodo di prova?',
        answer:
          'No. Sono codici QR statici i cui dati sono codificati direttamente nel motivo bianco e nero, quindi funzionano in permanenza senza dipendenza da un server né limite di scansioni.',
      },
      {
        question: 'Quale livello di correzione di errore devo scegliere?',
        answer:
          'Il livello M (15 %) equilibra densità compatta e affidabilità per schermi digitali puliti o volantini. Scegli Q (25 %) o H (30 %) per adesivi esterni o superfici di stampa più ruvide.',
      },
      {
        question: 'Perché il contrasto del primo piano deve restare alto?',
        answer:
          'Le fotocamere dei telefoni si basano su un forte contrasto di luminanza tra i moduli scuri e lo sfondo chiaro; mantieni colori di primo piano scuri su sfondi chiari con un margine di silenzio di almeno 2 moduli.',
      },
      {
        question: 'Il generatore di codice QR è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, senza filigrana e senza limiti di numero di codici QR creati o scaricati.',
      },
      {
        question: 'Ho bisogno di un account per creare un codice QR?',
        answer:
          'Nessun account è necessario. Tutto viene eseguito localmente nel tuo browser, quindi puoi generare e scaricare un codice QR immediatamente.',
      },
      {
        question: 'Quali tipi di contenuto posso codificare in un codice QR?',
        answer:
          'Puoi codificare URL di siti web, testo semplice, credenziali di rete Wi-Fi, link e-mail e numeri di telefono che aprono il compositore quando vengono scansionati.',
      },
      {
        question: 'Posso creare un codice QR per la mia password Wi-Fi?',
        answer:
          'Sì. Scegli il formato Rete Wi-Fi, inserisci il nome della rete (SSID), il tipo di sicurezza come WPA e la password, e gli ospiti possono connettersi scansionando invece di digitare.',
      },
      {
        question: 'Qual è la differenza tra i download PNG e SVG?',
        answer:
          'Il PNG è un’immagine raster a risoluzione fissa, ideale per schermi e post social, mentre l’SVG è un file vettoriale che si adatta a qualsiasi dimensione senza perdere nitidezza, il che lo rende ideale per la stampa.',
      },
      {
        question: 'Il mio codice QR funzionerà ancora se lo stampo in piccolo?',
        answer:
          'Dipende dalla quantità di dati che contiene e dalla qualità di stampa. Gli URL brevi si scansionano in modo affidabile in piccolo formato, mentre i codici densi devono essere stampati più grandi con una zona di silenzio chiara.',
      },
      {
        question: 'Che cosa fa il livello di correzione di errore?',
        answer:
          'La correzione di errore aggiunge ridondanza in modo che il codice si scansioni ancora se una parte è graffiata, sporca o coperta. I livelli più alti sopravvivono a più danni, ma rendono il motivo più denso.',
      },
      {
        question: 'Posso cambiare i colori del mio codice QR?',
        answer:
          'Sì, puoi definire colori esadecimali personalizzati di primo piano e sfondo. Mantieni moduli scuri su uno sfondo chiaro in modo che le fotocamere dei telefoni possano sempre leggere il motivo in modo affidabile.',
      },
      {
        question: 'Che cos’è la zona di silenzio e perché è importante?',
        answer:
          'La zona di silenzio è il margine vuoto intorno al codice che aiuta gli scanner a trovare i suoi bordi. Mantieni un margine di almeno 4 moduli di larghezza e non mettere mai testo o logo all’interno.',
      },
      {
        question: 'I codici QR creati qui tracciano le scansioni?',
        answer:
          'No. Sono codici statici senza server di reindirizzamento dietro di loro, quindi nessuno può vedere quando né dove vengono scansionati.',
      },
      {
        question: 'Posso usare questi codici QR su biglietti da visita e volantini?',
        answer:
          'Sì. Scarica la versione SVG per una stampa nitida su carte, poster e imballaggi, e usa il PNG per siti web, diapositive e grafiche social.',
      },
      {
        question: 'Perché il mio telefono non scansiona il codice QR?',
        answer:
          'Un basso contrasto, un codice stampato troppo piccolo, riflessi o danni sono le cause abituali. Prova un primo piano più scuro, una dimensione più grande, un livello di correzione di errore più alto e una zona di silenzio più ampia.',
      },
      {
        question: 'Il codice QR funziona offline dopo averlo scaricato?',
        answer:
          'Sì. I dati sono codificati direttamente nel motivo stesso, quindi un codice scaricato si scansiona e funziona senza alcuna connessione a questo sito web.',
      },
      {
        question: 'Posso codificare un numero di telefono in modo che apra il compositore?',
        answer:
          'Sì. Scegli il formato Numero di telefono e il codice crea un link tel:, quindi la scansione su un telefono apre il compositore con il numero pronto da chiamare.',
      },
      {
        question: 'Posso codificare un indirizzo e-mail in modo che apra un nuovo messaggio?',
        answer:
          'Sì. Il formato Link e-mail crea un link mailto:, quindi la scansione apre l’app di posta con il tuo indirizzo precompilato come destinatario.',
      },
      {
        question: 'La mia password Wi-Fi è sicura quando genero un codice QR qui?',
        answer:
          'Sì. Il codice viene generato interamente nel tuo browser e niente di ciò che digiti viene inviato o registrato su un server.',
      },
      {
        question: 'A quale dimensione devo scaricare il PNG per la stampa?',
        answer:
          'Scegli la dimensione in pixel più grande disponibile per il lavoro di stampa, e preferisci l’SVG per tutto ciò che supera un volantino, perché il rendering vettoriale resta nitido a qualsiasi dimensione.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci l’URL di destinazione',
        description:
          'Incolla l’URL della pagina di destinazione obiettivo o seleziona una preimpostazione rapida di canale per precompilare i tag standard.',
      },
      {
        title: 'Scegli una preimpostazione di canale (facoltativo)',
        description:
          'Scegli Instagram, e-mail, YouTube o un’altra preimpostazione per riempire i valori standard di origine e mezzo invece di digitarli tu stesso.',
      },
      {
        title: 'Compila i parametri UTM',
        description:
          'Indica utm_source, utm_medium, utm_campaign, oltre a utm_content o utm_term facoltativi.',
      },
      {
        title: 'Aggiungi utm_term e utm_content facoltativi',
        description:
          'Usa utm_term per le parole chiave di ricerca a pagamento e utm_content per distinguere due link di una stessa campagna, come un pulsante di bio rispetto a un link di storia.',
      },
      {
        title: 'Copia e verifica il dettaglio',
        description:
          'Esamina la tabella dei parametri in tempo reale qui sotto per evitare errori di battitura o maiuscole miste prima di copiare il link finale.',
      },
      {
        title: 'Testa il link prima di pubblicarlo',
        description:
          'Apri l’URL copiato in un browser per confermare che porti alla pagina giusta, poi verifica che la normalizzazione in minuscolo non abbia modificato una parte sensibile alle maiuscole della destinazione.',
      },
    ],
    examples: [
      {
        title: 'Link di campagna Instagram per link in bio',
        input: 'URL: https://utilityflow.online/tools/ · Origine: instagram · Mezzo: social · Campagna: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation:
          'Usa l’analisi di URL del browser in modo che i parametri esistenti o le ancore # restino intatti.',
      },
      {
        title: 'Link di newsletter con utm_content',
        input: 'URL: https://example.com/offerta · Origine: newsletter · Mezzo: email · Campagna: lancio_primavera · Contenuto: pulsante_hero',
        output: 'https://example.com/offerta?utm_source=newsletter&utm_medium=email&utm_campaign=lancio_primavera&utm_content=pulsante_hero',
        explanation:
          'Il parametro utm_content distingue questo pulsante dagli altri link della stessa newsletter.',
      },
    ],
    benefits: [
      'Le preimpostazioni di canale in un clic evitano nomi incoerenti come IG contro instagram',
      'La normalizzazione facoltativa in minuscolo e con underscore evita i rapporti GA4 divisi',
      'Preserva correttamente i parametri di query preesistenti e le ancore #',
      'Mostra una tabella di revisione dei parametri decodificati prima della pubblicazione',
    ],
    useCases: [
      'Tracciare i clic dalle bio di profilo Instagram, LinkedIn, X e TikTok',
      'Misurare i singoli pulsanti di invito all’azione nelle newsletter settimanali',
      'Taggare i link di sponsor nelle descrizioni di video YouTube',
      'Generare link UTM puliti da passare direttamente al generatore di codice QR',
    ],
    faqs: [
      {
        question: 'Perché la normalizzazione in minuscolo è importante per i parametri UTM?',
        answer:
          'Le piattaforme di analisi come Google Analytics 4 trattano utm_source=Instagram e utm_source=instagram come righe distinte, dividendo l’attribuzione di campagna.',
      },
      {
        question: 'Devo usare tag UTM sui link di navigazione interni del sito?',
        answer:
          'No. I parametri UTM sono pensati esclusivamente per le campagne in entrata esterne; usarli su link interni sovrascrive l’attribuzione di provenienza originale in corso di sessione.',
      },
      {
        question: 'Posso trasformare un link UTM generato in codice QR?',
        answer:
          'Sì. Copia il tuo URL UTM terminato e incollalo direttamente nel nostro generatore di codice QR per campagne misurabili dalla carta al digitale.',
      },
      {
        question: 'Il creatore di link UTM è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e ogni link viene costruito localmente nel tuo browser senza inviare i tuoi URL da nessuna parte.',
      },
      {
        question: 'Che cos’è un parametro UTM?',
        answer:
          'Un parametro UTM è un breve tag aggiunto alla fine di un URL, come utm_source=instagram, che indica agli strumenti di analisi da dove viene un visitatore.',
      },
      {
        question: 'Che cosa significa utm_source?',
        answer:
          'Identifica l’origine del traffico, come instagram, google o newsletter, in modo che tu possa vedere quale luogo ha inviato ogni visitatore.',
      },
      {
        question: 'Che cosa significa utm_medium?',
        answer:
          'Descrive il canale di marketing, come social, email, cpc o referral, in modo che tu possa confrontare i canali all’interno di una stessa campagna.',
      },
      {
        question: 'Che cosa significa utm_campaign?',
        answer:
          'Nomina la campagna precisa, come spring_launch o black_friday, in modo che tutti i link di una stessa promozione siano raggruppati nei rapporti.',
      },
      {
        question: 'A che cosa serve utm_content?',
        answer:
          'Distingue due link di una stessa campagna, per esempio un pulsante di bio rispetto a un link di storia, in modo che tu possa vedere quale posizione ha performato meglio.',
      },
      {
        question: 'A che cosa serve utm_term?',
        answer:
          'Identifica la parola chiave di ricerca a pagamento che ha attivato un clic su un annuncio, ed è soprattutto utile per Google Ads o altre campagne di ricerca.',
      },
      {
        question: 'Devo compilare tutti e cinque i parametri UTM?',
        answer:
          'No. Origine, mezzo e campagna sono il minimo raccomandato, mentre utm_term e utm_content sono facoltativi e servono solo quando vuoi un dettaglio più fine.',
      },
      {
        question: 'Posso usare link UTM nella mia bio Instagram?',
        answer:
          'Sì. I link UTM sono uno dei modi più comuni di misurare il traffico della bio, e funzionano allo stesso modo nelle pagine di link in bio, nei link di storia e nelle didascalie dei post.',
      },
      {
        question: 'I parametri UTM romperanno la mia stringa di query esistente o la mia ancora #?',
        answer:
          'No. Il creatore preserva i parametri già presenti nel tuo URL e conserva il frammento di ancora # alla fine, in modo che il link porti sempre alla sezione giusta.',
      },
      {
        question: 'Devo usare spazi nei valori UTM?',
        answer:
          'No. Usa piuttosto underscore o trattini, come spring_launch, perché gli spazi vengono codificati in percentuale e rendono i rapporti più difficili da leggere.',
      },
      {
        question: 'Posso tracciare le scansioni di codice QR con link UTM?',
        answer:
          'Sì. Crea prima l’URL UTM, poi trasformalo in codice QR con il nostro generatore di codice QR, e ogni scansione che raggiunge il tuo sito porterà i tag di campagna.',
      },
      {
        question: 'I link UTM influiscono sulla SEO?',
        answer:
          'No, i motori di ricerca generalmente ignorano i parametri UTM per il posizionamento, ma è bene mantenere un tag canonico sulla pagina di destinazione in modo che gli URL indicizzati restino puliti.',
      },
      {
        question: 'Come vedere i risultati UTM in Google Analytics?',
        answer:
          'In Google Analytics 4, apri il rapporto di acquisizione del traffico e guarda origine, mezzo e campagna di sessione, che vengono riempiti dai tuoi valori UTM.',
      },
      {
        question: 'Qual è la differenza tra utm_source e utm_medium?',
        answer:
          'L’origine risponde alla domanda da dove viene il clic, come instagram, mentre il mezzo risponde alla domanda come è arrivato, come social o email. Un tag completo ha bisogno di entrambi.',
      },
      {
        question: 'Posso salvare o riutilizzare un modello di link UTM?',
        answer:
          'Sì. Le preimpostazioni di canale precompilano i valori standard di origine e mezzo, e puoi copiare un link terminato e riutilizzare lo stesso schema di denominazione per le campagne future.',
      },
      {
        question: 'Perché i miei rapporti UTM mostrano la stessa campagna due volte?',
        answer:
          'Maiuscole miste o ortografia incoerente, come Instagram contro instagram, creano righe distinte. Mantieni una sola convenzione di denominazione in minuscolo per ogni link.',
      },
    ],
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
    instructions: [
      {
        title: 'Scrivi o incolla la tua bozza social',
        description:
          'Digita didascalie, bio o descrizioni di video nella zona di modifica.',
      },
      {
        title: 'Consulta le schede di misura delle piattaforme',
        description:
          'Vedi le barre di utilizzo verdi, arancioni e rosse per X, Instagram, LinkedIn, TikTok, Threads, Bluesky e YouTube.',
      },
      {
        title: 'Verifica l’anteprima del ripiegamento «Vedi di più»',
        description:
          'Scegli una piattaforma obiettivo nel menu a tendina qui sotto per ispezionare dove il troncamento del feed taglia il tuo gancio di apertura.',
      },
      {
        title: 'Accorcia il tuo gancio sopra il ripiegamento',
        description:
          'Metti le tue parole più importanti nei primi 125 caratteri per Instagram o 210 per LinkedIn, in modo che i lettori le vedano prima del pulsante «...di più».',
      },
      {
        title: 'Regola hashtag, menzioni e link',
        description:
          'Rimuovi o accorcia hashtag, @menzioni e URL sulle piattaforme in cui superi il limite, e ricorda che X conta ogni link come 23 caratteri.',
      },
      {
        title: 'Ricontrolla e copia il testo finale',
        description:
          'Dopo ogni modifica, conferma che tutte le schede di misura siano verdi, poi copia il testo. Se una piattaforma mostra ancora rosso, rimuovi parole superflue o sposta i dettagli aggiuntivi in una risposta o un commento.',
      },
    ],
    examples: [
      {
        title: 'Testare un post con link su X contro LinkedIn',
        input: 'Gancio di 140 caratteri + https://example.com/very-long-campaign-url',
        output: 'X conta l’URL come 23 caratteri; Instagram e LinkedIn contano la lunghezza completa dell’URL.',
        explanation:
          'Riflette fedelmente il comportamento di avvolgimento automatico dei link t.co su X.',
      },
      {
        title: 'Verificare una bio Instagram di 150 caratteri',
        input: 'Bio di 148 caratteri con due emoji e un’interruzione di riga',
        output: 'Instagram: 148 / 150 — entro il limite; X: 148 / 160 — entro il limite.',
        explanation:
          'Ogni emoji conta per un carattere e ogni interruzione di riga conta anch’essa per un carattere.',
      },
    ],
    benefits: [
      'Tiene conto con precisione delle emoji a più punti di codice grazie al conteggio di caratteri Array.from',
      'Modella automaticamente la normalizzazione di lunghezza URL di 23 caratteri su X',
      'Mostra sia i limiti massimi rigidi sia le soglie di troncamento del feed («Vedi di più»)',
      'Conta in tempo reale hashtag, @menzioni e URL integrati',
    ],
    useCases: [
      'Assicurarsi che i primi 125–210 caratteri aggancino i lettori prima del ripiegamento del feed',
      'Far stare gli annunci di creator sotto i limiti di 280 caratteri di X e di 300 caratteri di Bluesky',
      'Modificare le bio LinkedIn e Instagram strettamente entro i limiti di 150–160 caratteri',
      'Verificare la visibilità dei titoli YouTube di 70 caratteri su mobile prima della pubblicazione',
    ],
    faqs: [
      {
        question: 'Perché X (Twitter) conta gli URL lunghi come 23 caratteri?',
        answer:
          'X avvolge i link in uscita tramite il suo accorciatore t.co, quindi ogni URL http/https occupa 23 caratteri del budget di 280 caratteri del post, qualunque sia la lunghezza originale dell’URL.',
      },
      {
        question: 'Che cos’è la lunghezza di «ripiegamento» mostrata sulle schede Instagram e LinkedIn?',
        answer:
          'Le disposizioni del feed ripiegano le lunghe didascalie dopo circa 125 caratteri su Instagram e 210 caratteri su LinkedIn, dietro un pulsante «...di più». Mettere il tuo gancio principale prima del ripiegamento aumenta la lettura completa.',
      },
      {
        question: 'Conta le emoji come 1 carattere o 2?',
        answer:
          'Usando l’iterazione per punti di codice Unicode, le emoji semplici standard contano come 1 carattere invece di coppie di surrogati UTF-16 gonfiate.',
      },
      {
        question: 'Il verificatore di limite di caratteri social è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e la tua bozza viene contata localmente nel tuo browser senza essere inviata da nessuna parte.',
      },
      {
        question: 'Qual è il limite di caratteri di un post su X (Twitter)?',
        answer:
          'I post standard su X consentono fino a 280 caratteri, ogni URL contando come 23 caratteri a causa dell’avvolgimento di link t.co.',
      },
      {
        question: 'Qual è il limite di caratteri di una didascalia Instagram?',
        answer:
          'Le didascalie Instagram consentono fino a 2 200 caratteri, ma solo i primi 125 caratteri circa si mostrano nel feed prima del ripiegamento «...di più».',
      },
      {
        question: 'Qual è il limite di caratteri di una bio Instagram?',
        answer:
          'Le bio Instagram consentono fino a 150 caratteri: ogni lettera, spazio, emoji e interruzione di riga conta in questo budget ristretto.',
      },
      {
        question: 'Qual è il limite di caratteri di un post LinkedIn?',
        answer:
          'I post LinkedIn consentono fino a 3 000 caratteri, mentre il feed mostra circa i primi 210 caratteri prima del pulsante «vedi di più».',
      },
      {
        question: 'Qual è il limite di caratteri di una didascalia TikTok?',
        answer:
          'Le didascalie di video TikTok consentono fino a 4 000 caratteri, anche se le didascalie brevi e incisive funzionano generalmente meglio, perché gli spettatori scorrono rapidamente.',
      },
      {
        question: 'Qual è il limite di caratteri di Threads?',
        answer:
          'I post Threads consentono fino a 500 caratteri, più lunghi di un post standard su X, ma abbastanza brevi da premiare una scrittura serrata.',
      },
      {
        question: 'Qual è il limite di caratteri di Bluesky?',
        answer:
          'I post Bluesky consentono fino a 300 caratteri, leggermente più del limite di 280 caratteri di un post standard su X.',
      },
      {
        question: 'Qual è il limite di caratteri di un titolo YouTube?',
        answer:
          'I titoli YouTube consentono fino a 100 caratteri, ma i risultati di ricerca mobile ne mostrano generalmente solo i primi 70: metti quindi le tue parole chiave per prime.',
      },
      {
        question: 'Qual è il limite di caratteri di una descrizione YouTube?',
        answer:
          'Le descrizioni di video YouTube consentono fino a 5 000 caratteri, le prime una o due righe essendo visibili prima che gli spettatori premano «mostra di più».',
      },
      {
        question: 'Come funziona il ripiegamento del feed su Instagram?',
        answer:
          'Instagram ripiega le didascalie dopo circa 125 caratteri nel feed, quindi i lettori devono premere «...di più» per vedere il resto. Metti il tuo gancio e il tuo messaggio chiave per primi.',
      },
      {
        question: 'Come funziona il ripiegamento «vedi di più» di LinkedIn?',
        answer:
          'LinkedIn mostra circa i primi 210 caratteri di un post nel feed, poi nasconde il resto dietro «vedi di più»: inizia quindi con una frase che merita il clic.',
      },
      {
        question: 'Gli hashtag contano nel limite di caratteri?',
        answer:
          'Sì. Ogni carattere di un hashtag, compreso il simbolo # stesso, conta nel limite del post su ogni piattaforma.',
      },
      {
        question: 'Le interruzioni di riga contano come caratteri?',
        answer:
          'Sì. Ogni interruzione di riga della tua bozza conta per un carattere, quindi le righe vuote aggiuntive intaccano i limiti ristretti come la bio Instagram di 150 caratteri.',
      },
      {
        question: 'Le emoji contano per un carattere su ogni piattaforma?',
        answer:
          'Questo verificatore conta le emoji semplici standard come un carattere grazie al conteggio per punti di codice, ma le emoji complesse composte da simboli uniti possono contare di più su alcune piattaforme.',
      },
      {
        question: 'Gli URL contano allo stesso modo su ogni piattaforma?',
        answer:
          'No. X conta ogni URL come 23 caratteri tramite l’avvolgimento t.co, mentre Instagram, LinkedIn e la maggior parte delle altre piattaforme contano la lunghezza completa del link.',
      },
      {
        question: 'Posso verificare più piattaforme contemporaneamente?',
        answer:
          'Sì. Digita o incolla la tua bozza una volta e ogni scheda di misura di piattaforma si aggiorna contemporaneamente, in modo che tu possa adattare un post per X, Instagram, LinkedIn e altro.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci un breve titolo o un’etichetta di bio',
        description:
          'Digita una breve frase, un titolo di sezione o uno slogan di pseudonimo in Testo da stilizzare.',
      },
      {
        title: 'Sfoglia 10 stili Unicode',
        description:
          'Confronta le anteprime Sans-serif grassetto, Corsivo, Monospace, Script, Doppia barra, Maiuscoletto e Larghezza intera.',
      },
      {
        title: 'Confronta le anteprime fianco a fianco',
        description:
          'Scorri le dieci schede di stile per trovare quella che si legge meglio in piccolo, perché alcuni stili script e doppia barra sono più difficili da leggere.',
      },
      {
        title: 'Copia il tuo stile preferito',
        description:
          'Fai clic su Copia sulla scheda di stile che preferisci per mettere il testo Unicode stilizzato negli appunti.',
      },
      {
        title: 'Incolla e verifica il rendering',
        description:
          'Incolla il testo nella tua bio, didascalia o post, poi guardalo su un altro dispositivo per assicurarti che nessun carattere si mostri come una casella vuota.',
      },
      {
        title: 'Copia in modo responsabile',
        description:
          'Fai clic su Copia sul tuo stile preferito e mantieni il testo principale essenziale in testo semplice standard per l’accessibilità dei lettori di schermo.',
      },
    ],
    examples: [
      {
        title: 'Formattare un separatore di bio LinkedIn o X',
        input: 'Nuova Cassetta degli Attrezzi 2025',
        output: '𝗡𝘂𝗼𝘃𝗮 𝗖𝗮𝘀𝘀𝗲𝘁𝘁𝗮 𝗱𝗲𝗴𝗹𝗶 𝗔𝘁𝘁𝗿𝗲𝘇𝘇𝗶 𝟮𝟬𝟮𝟱 (Sans-serif grassetto)',
        explanation:
          'Usa i punti di codice Unicode matematici ufficiali U+1D5D4–U+1D7EC per il grassetto.',
      },
      {
        title: 'Titolo in maiuscoletto per una bio',
        input: 'Creatore di contenuti',
        output: 'Cʀᴇᴀᴛᴏʀᴇ ᴅɪ ᴄᴏɴᴛᴇɴᴜᴛɪ (Maiuscoletto)',
        explanation:
          'Il maiuscoletto usa glifi Unicode distinti che restano leggibili in piccolo.',
      },
    ],
    benefits: [
      'Mostra veri glifi Unicode piuttosto che immagini o HTML proprio di una piattaforma',
      'Comprende un chiaro avviso di accessibilità sul comportamento dei lettori di schermo e della ricerca',
      'Gestisce correttamente cifre, punteggiatura e simboli speciali di lavagna come ℂ, ℕ, ℝ',
      'Copia in un clic per ogni scheda di stile',
    ],
    useCases: [
      'Mettere in risalto i titoli di sezione nelle bio di profilo Instagram o TikTok',
      'Formattare pseudonimi tecnici o date in Unicode monospace',
      'Aggiungere etichette discrete in maiuscoletto in newsletter o note in testo semplice',
      'Stilizzare brevi annunci dove il grassetto Markdown nativo non è supportato',
    ],
    faqs: [
      {
        question: 'Perché lo strumento comprende un avvertimento di accessibilità?',
        answer:
          'I simboli matematici Unicode sono pensati per le equazioni piuttosto che per la prosa, quindi i lettori di schermo di assistenza li leggono spesso ad alta voce come «A maiuscola grassetto sans-serif matematica» e le barre di ricerca social possono non indicizzarli.',
      },
      {
        question: 'Sono veri file di font?',
        answer:
          'No. Sono caratteri Unicode standardizzati mappati su blocchi di simboli distinti, il che spiega perché sopravvivono all’incollaggio nei campi social in testo semplice.',
      },
      {
        question: 'Perché le lettere accentate non ASCII restano invariate?',
        answer:
          'I blocchi alfanumerici matematici Unicode definiscono solo le lettere latine non accentate A–Z e le cifre 0–9, quindi i caratteri accentati restano intatti per preservare la leggibilità.',
      },
      {
        question: 'Il formattatore di testo Unicode elegante è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e il tuo testo viene convertito localmente nel tuo browser senza essere inviato da nessuna parte.',
      },
      {
        question: 'Quali stili Unicode posso creare con questo formattatore?',
        answer:
          'Puoi creare stili Sans-serif grassetto, Corsivo, Monospace, Script, Doppia barra, Fraktur, Maiuscoletto e Larghezza intera, con dieci schede di stile da confrontare a colpo d’occhio.',
      },
      {
        question: 'Il testo elegante funzionerà su Instagram?',
        answer:
          'Sì. Il testo Unicode stilizzato si incolla direttamente nelle bio, nelle didascalie e nei commenti Instagram, perché è fatto di veri caratteri, e non di immagini o font.',
      },
      {
        question: 'Il testo elegante funzionerà su LinkedIn e X?',
        answer:
          'Sì. LinkedIn e X accettano entrambi i caratteri Unicode nelle bio e nei post, quindi i titoli in grassetto o in maiuscoletto si incollano come testo ordinario.',
      },
      {
        question: 'Posso usare testo elegante nella mia bio TikTok?',
        answer:
          'Sì. Le bio TikTok accettano i caratteri Unicode, quindi puoi stilizzare un nome breve o uno slogan, anche se è meglio mantenere il resto della bio in testo semplice.',
      },
      {
        question: 'Perché alcuni caratteri sembrano caselle su alcuni dispositivi?',
        answer:
          'I telefoni o computer più vecchi possono non avere font che coprono ogni blocco di simboli Unicode, quindi un glifo mancante si mostra come una casella vuota. Testa il tuo testo stilizzato su un altro dispositivo prima di pubblicarlo.',
      },
      {
        question: 'Posso usare testo elegante per tutta la mia bio?',
        answer:
          'Non è raccomandato. I lettori di schermo faticano con il testo stilizzato e la ricerca può non trovarlo: usa quindi il testo elegante solo per i titoli brevi e mantieni il resto in testo semplice.',
      },
      {
        question: 'Il testo elegante influisce sulla ricerca sulle piattaforme social?',
        answer:
          'Sì, può farlo. Una ricerca di una parola in testo semplice può non corrispondere alla stessa parola scritta in caratteri matematici grassetto: evita quindi di stilizzare le parole chiave che le persone cercano.',
      },
      {
        question: 'I lettori di schermo possono leggere il testo Unicode elegante?',
        answer:
          'Spesso male. I lettori di schermo possono leggere ogni lettera stilizzata ad alta voce con il suo nome Unicode completo, il che rende i lunghi passaggi stilizzati confusi per gli utenti non vedenti.',
      },
      {
        question: 'Posso mettere testo in grassetto in WhatsApp con questo formattatore?',
        answer:
          'Sì, il grassetto Unicode si incolla in WhatsApp, ma l’app ha anche una formattazione nativa: circondare il testo di asterischi come *grassetto* è quindi generalmente la scelta più semplice.',
      },
      {
        question: 'Le cifre e la punteggiatura cambiano anch’esse?',
        answer:
          'Le cifre si convertono nella maggior parte degli stili, come grassetto e monospace, mentre la maggior parte dei segni di punteggiatura resta invariata, perché i blocchi di simboli Unicode non ne definiscono versioni stilizzate.',
      },
      {
        question: 'Posso riconvertire il testo stilizzato in testo normale?',
        answer:
          'Lo strumento converte il testo semplice in testo stilizzato: per ritrovare testo semplice, ridigita la frase originale o incollala da dove l’hai copiata la prima volta.',
      },
      {
        question: 'Il testo Unicode elegante è la stessa cosa di un font?',
        answer:
          'No. Un font cambia l’aspetto delle lettere ordinarie su un solo dispositivo, mentre il testo Unicode elegante usa caratteri interamente diversi, il che spiega perché lo stile sopravvive al copia-incolla.',
      },
      {
        question: 'Il testo elegante funzionerà nelle righe di oggetto delle e-mail?',
        answer:
          'Si mostra generalmente nei client di posta moderni, ma i caratteri stilizzati possono attivare i filtri antispam e confondere i lettori di schermo: il testo semplice è quindi la scelta più sicura per le e-mail.',
      },
      {
        question: 'Posso usare testo elegante nei titoli YouTube?',
        answer:
          'Sì, YouTube accetta l’Unicode nei titoli, ma le parole stilizzate possono non corrispondere alle query di ricerca in testo semplice: usalo con parsimonia e mantieni le parole chiave ricercabili in testo semplice.',
      },
      {
        question: 'Questo formattatore invia il mio testo da qualche parte?',
        answer:
          'No. Tutta la conversione avviene localmente nel tuo browser, quindi niente di ciò che digiti viene inviato a un server o registrato.',
      },
      {
        question: 'Che cos’è il testo a larghezza intera?',
        answer:
          'Il testo a larghezza intera usa caratteri Unicode larghi, come Ｆｕｌｌｗｉｄｔｈ, in cui ogni lettera occupa il doppio della larghezza normale, dando ai titoli un aspetto arioso e spaziato.',
      },
    ],
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
    instructions: [
      {
        title: 'Scrivi o incolla la tua didascalia',
        description:
          'Scrivi un testo a più paragrafi o righe di bio con righe vuote ovunque tu voglia uno spazio visivo.',
      },
      {
        title: 'Seleziona la strategia di spaziatura',
        description:
          'Scegli Spaziatore invisibile (U+2800), Spaziatore a punto minimo (.) o Pulizia degli spazi finali solamente.',
      },
      {
        title: 'Consulta l’anteprima formattata',
        description:
          'Verifica l’anteprima per confermare che ogni riga vuota sia sopravvissuta e che non resti alcuno spazio finale alla fine delle tue righe.',
      },
      {
        title: 'Verifica il numero di caratteri',
        description:
          'Tieni d’occhio il contatore in tempo reale per assicurarti che la tua bio stia ancora nel limite di 150 caratteri di Instagram, perché ogni spaziatore conta per un carattere.',
      },
      {
        title: 'Copia il testo formattato',
        description:
          'Fai clic su Copia la didascalia formattata e verifica se la tua bio sta nel limite di 150 caratteri di Instagram.',
      },
      {
        title: 'Incolla e verifica sulla piattaforma',
        description:
          'Incolla in Instagram, Threads o TikTok e visualizza l’anteprima del post. Se le interruzioni si ripiegano ancora, passa in modalità Spaziatore invisibile e copia di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Pulire gli spazi finali prima di incollare in Instagram',
        input: 'Riga 1   \\n\\nRiga 2',
        output: 'Riga 1\\n⠀\\nRiga 2',
        explanation:
          'Rimuove gli spazi finali dopo «Riga 1» e inserisce uno spaziatore invisibile U+2800 in modo che l’intervallo vuoto persista.',
      },
      {
        title: 'Strutturare una bio a più righe',
        input: 'Creatore · Parigi · Link qui sotto',
        output: 'Creatore\\n⠀\\nParigi\\n⠀\\nLink qui sotto',
        explanation:
          'Ogni riga vuota riceve uno spaziatore invisibile in modo che la bio impilata mantenga la sua struttura dopo l’incollaggio.',
      },
    ],
    benefits: [
      'Elimina gli spazi finali invisibili che attivano i bug di fusione di righe delle piattaforme social',
      'Supporta sia gli spazi Unicode invisibili sia i separatori a punto puliti',
      'Fonde automaticamente i doppi spazi accidentali all’interno delle frasi',
      'Verifica la lunghezza totale rispetto al limite di 150 caratteri della bio Instagram in tempo reale',
    ],
    useCases: [
      'Formattare didascalie Instagram e Facebook leggibili a più paragrafi',
      'Strutturare bio di profilo Instagram o TikTok impilate a punti',
      'Pulire il testo incollato da Notion, Google Docs o Note prima della pubblicazione',
      'Separare la narrazione principale della didascalia dagli inviti all’azione del piè di pagina',
    ],
    faqs: [
      {
        question: 'Perché le righe vuote scompaiono quando incollo testo direttamente in Instagram?',
        answer:
          'Le tastiere mobili e gli editor di testo lasciano spesso spazi finali alla fine delle frasi, che gli analizzatori social trattano come artefatti di formattazione e fondono in una sola interruzione di riga.',
      },
      {
        question: 'Quale carattere viene usato per la modalità Spaziatore invisibile?',
        answer:
          'Inserisce U+2800 (Braille Pattern Blank) solo sulle righe altrimenti vuote, in modo che la spaziatura visiva tenga senza mostrare punti o trattini fastidiosi.',
      },
      {
        question: 'Modifica il testo all’interno delle mie frasi?',
        answer:
          'Solo gli spazi bianchi finali alla fine delle righe vengono rimossi, più eventualmente gli spazi ripetuti all’interno delle righe quando questa opzione è attivata.',
      },
      {
        question: 'Il formattatore di interruzioni di riga per bio è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e la tua didascalia viene formattata localmente nel tuo browser senza essere inviata da nessuna parte.',
      },
      {
        question: 'Perché le didascalie Instagram perdono le loro interruzioni di riga?',
        answer:
          'Gli spazi finali lasciati dalle tastiere e dagli editor fanno sì che le app social trattino una riga vuota come un artefatto e la fondano. Rimuovere questi spazi e aggiungere uno spaziatore conserva l’intervallo.',
      },
      {
        question: 'Posso usare questo formattatore per le didascalie TikTok?',
        answer:
          'Sì. Le didascalie TikTok accettano le stesse interruzioni di riga e spazi invisibili, quindi il testo formattato si incolla con la sua spaziatura di paragrafo intatta.',
      },
      {
        question: 'Posso usare questo formattatore per i post Threads?',
        answer:
          'Sì. Threads preserva le righe vuote nel testo formattato, quindi puoi strutturare i post più lunghi con interruzioni di paragrafo chiare.',
      },
      {
        question: 'Posso usarlo per la mia bio Instagram?',
        answer:
          'Sì. Funziona per le bio impilate a più righe, ma tieni d’occhio il contatore in tempo reale, perché le bio Instagram consentono solo 150 caratteri e ogni spaziatore conta.',
      },
      {
        question: 'Qual è la differenza tra Spaziatore invisibile e Spaziatore a punto?',
        answer:
          'Lo spaziatore invisibile mette un carattere Braille vuoto sulle righe vuote in modo che l’intervallo sembri vuoto, mentre lo spaziatore a punto vi mette un punto visibile, che alcune persone preferiscono per affidabilità.',
      },
      {
        question: 'Quando devo scegliere «Pulizia degli spazi finali solamente»?',
        answer:
          'Sceglilo quando la piattaforma preserva già le tue interruzioni di riga e vuoi solo rimuovere gli spazi finali nascosti che potrebbero ancora attivare una fusione.',
      },
      {
        question: 'Lo spaziatore invisibile conta nel limite di caratteri della bio Instagram?',
        answer:
          'Sì. Ogni spaziatore U+2800 vale un carattere, quindi una bio con più righe vuote usa una parte del budget di 150 caratteri.',
      },
      {
        question: 'Il carattere invisibile si mostrerà come un simbolo strano?',
        answer:
          'Sulla maggior parte dei telefoni moderni si mostra come uno spazio vuoto, ma i font molto vecchi possono mostrarlo come una casella vuota: testa quindi la tua bio su un altro dispositivo dopo l’incollaggio.',
      },
      {
        question: 'Posso formattare testo incollato da Google Docs o Notion?',
        answer:
          'Sì. Il testo copiato da Docs, Notion o Note comporta spesso spazi finali nascosti, e questo strumento li pulisce prima che tu incolli in un’app social.',
      },
      {
        question: 'Lo strumento rimuove gli spazi all’interno delle mie frasi?',
        answer:
          'No. Rimuove solo gli spazi bianchi finali alla fine delle righe, e fonde gli spazi ripetuti all’interno di una riga solo quando attivi questa opzione.',
      },
      {
        question: 'Quante righe vuote devo lasciare tra i paragrafi?',
        answer:
          'Una riga vuota basta generalmente per didascalie leggibili. Due righe o più possono sembrare spaziate nel feed e sprecare caratteri in una bio.',
      },
      {
        question: 'Posso usare questo formattatore per i post Facebook?',
        answer:
          'Sì. Facebook preserva generalmente le interruzioni di riga da sé, ma lo strumento resta utile per pulire gli spazi finali del testo incollato da altre app.',
      },
      {
        question: 'Questo strumento invia la mia didascalia da qualche parte?',
        answer:
          'No. Tutta la formattazione avviene localmente nel tuo browser, quindi il testo della tua didascalia non viene mai inviato a un server o registrato.',
      },
      {
        question: 'Perché la mia didascalia sembra ancora fusa dopo l’incollaggio?',
        answer:
          'Alcune app rimuovono la formattazione quando incolli. Prova a copiare di nuovo in modalità Spaziatore invisibile, incolla direttamente nel campo di didascalia piuttosto che tramite un’altra app, e verifica l’anteprima.',
      },
      {
        question: 'Posso usare interruzioni di riga nei post X (Twitter)?',
        answer:
          'Sì. X supporta le interruzioni di riga nei post, e questo formattatore funziona anche lì, ma ricorda che ogni interruzione di riga conta nel limite di 280 caratteri.',
      },
      {
        question: 'Posso usare questo formattatore per le descrizioni YouTube?',
        answer:
          'Sì. Le descrizioni YouTube preservano le righe vuote, quindi il testo formattato mantiene la sua spaziatura di paragrafo quando gli spettatori espandono la descrizione.',
      },
    ],
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
    instructions: [
      {
        title: 'Incolla il tuo URL YouTube (facoltativo)',
        description:
          'Inserisci qualsiasi link youtube.com/watch, youtu.be o Shorts per generare automaticamente link profondi cliccabili per capitolo.',
      },
      {
        title: 'Aggiungi e intitola i capitoli',
        description:
          'Inserisci timestamp MM:SS o HH:MM:SS e titoli di capitoli; fai clic su Ordina cronologicamente in qualsiasi momento se le righe si mescolano.',
      },
      {
        title: 'Ordina e verifica le regole dei capitoli',
        description:
          'Ordina la lista cronologicamente e consulta la verifica delle specifiche per l’inizio a 00:00, almeno 3 capitoli e la spaziatura minima di 10 secondi.',
      },
      {
        title: 'Correggi gli avvisi prima di copiare',
        description:
          'Se appare un avviso, regola il timestamp o il titolo difettoso in modo che ogni capitolo rispetti le regole di YouTube prima dell’esportazione.',
      },
      {
        title: 'Copia il blocco di descrizione e i link',
        description:
          'Copia il blocco di capitoli formattato per la descrizione del tuo video, e copia i singoli link ?t= per commenti, note di puntata o newsletter.',
      },
      {
        title: 'Suggerimento: testa un link prima di pubblicare',
        description:
          'Apri un link ?t= generato in una nuova scheda per confermare che salti al momento giusto, soprattutto dopo aver modificato timestamp in ritardo.',
      },
    ],
    examples: [
      {
        title: 'Formattare una descrizione di tutorial a 4 capitoli',
        input: '00:00 Intro · 01:15 Installazione · 04:40 Demo · 08:20 Riepilogo',
        output: '00:00 Intro\n01:15 Installazione\n04:40 Demo\n08:20 Riepilogo (+ https://youtu.be/...?t=75)',
        explanation:
          'Converte direttamente 01:15 in ?t=75s per una condivisione in un clic.',
      },
      {
        title: 'Verificare un capitolo troppo breve',
        input: '00:00 Intro · 00:05 Avvio · 01:00 Contenuto',
        output: 'Avviso: il capitolo «Avvio» dura solo 5 secondi, sotto il minimo di 10 secondi.',
        explanation:
          'YouTube ignora i capitoli di meno di 10 secondi: lo strumento segnala lo scarto in modo che tu sposti il timestamp.',
      },
    ],
    benefits: [
      'Convalida automaticamente le regole YouTube di inizio a 00:00, minimo di 3 capitoli e durata di 10 secondi',
      'Passa facilmente al formato HH:MM:SS quando i video superano i 60 minuti',
      'Estrae gli identificatori di video da URL standard, abbreviati, in diretta, incorporati e Shorts',
      'Genera link profondi ?t= pronti da condividere per note di puntata e commenti fissati',
    ],
    useCases: [
      'Aggiungere barre di scorrimento di capitoli consultabili a tutorial e podcast YouTube',
      'Creare timestamp di note di puntata cliccabili per gli episodi di podcast',
      'Condividere i passaggi esatti di tutorial nella documentazione, Slack o Discord',
      'Controllare le liste di capitoli di lunghe dirette per errori di formattazione',
    ],
    faqs: [
      {
        question: 'Perché i capitoli del mio video YouTube non si mostrano sulla barra di avanzamento?',
        answer:
          'YouTube richiede che il primo timestamp sia esattamente 00:00, almeno 3 timestamp elencati in ordine cronologico crescente, e che ogni capitolo duri almeno 10 secondi.',
      },
      {
        question: 'I timestamp di oltre 60 minuti devono essere in MM:SS o in HH:MM:SS?',
        answer:
          'Non appena un capitolo raggiunge 60 minuti o più, questo strumento formatta automaticamente ogni timestamp in modo coerente in notazione HH:MM:SS.',
      },
      {
        question: 'Si collega all’API dei dati YouTube?',
        answer:
          'No. Tutto viene analizzato e formattato localmente nel tuo browser senza richiedere OAuth di account Google né chiavi API.',
      },
      {
        question: 'Il generatore di timestamp YouTube è gratuito?',
        answer:
          'Sì, è gratuito nel tuo browser, senza registrazione, e niente viene inviato a un server.',
      },
      {
        question: 'Qual è il numero minimo di capitoli richiesto da YouTube?',
        answer:
          'YouTube ha bisogno di almeno 3 capitoli nella descrizione prima di mostrare i marcatori di capitoli sulla barra di avanzamento.',
      },
      {
        question: 'Perché il primo capitolo YouTube deve iniziare a 00:00?',
        answer:
          'YouTube usa il primo timestamp per ancorare il sistema di capitoli: una descrizione che inizia più tardi non genererà quindi alcun capitolo.',
      },
      {
        question: 'Che cosa succede se due capitoli sono distanziati di meno di 10 secondi?',
        answer:
          'YouTube ignora i capitoli di meno di 10 secondi: questo strumento segnala quindi lo scarto e devi spostare il timestamp successivo in avanti.',
      },
      {
        question: 'Posso usare il generatore di timestamp YouTube per gli Shorts?',
        answer:
          'Sì, puoi incollare un link Shorts e lo strumento genererà comunque link di salto ?t=, anche se i capitoli stessi sono soprattutto utili per i video più lunghi.',
      },
      {
        question: 'Come funzionano i link di salto ?t=?',
        answer:
          'Ogni link aggiunge l’ora di inizio del capitolo in secondi all’URL del video, quindi un clic apre il video a quel momento esatto.',
      },
      {
        question: 'Quali formati di URL YouTube accetta il generatore di timestamp?',
        answer:
          'Accetta link standard youtube.com/watch, link abbreviati youtu.be, link in diretta, link incorporati e link Shorts.',
      },
      {
        question: 'I capitoli devono essere in ordine cronologico?',
        answer:
          'Sì, YouTube richiede un ordine crescente, e questo strumento può ordinare le tue righe cronologicamente in un clic se si mescolano.',
      },
      {
        question: 'Posso aggiungere capitoli a un video che non ho caricato?',
        answer:
          'Puoi generare link di timestamp per qualsiasi video pubblico per condividere momenti esatti, ma i capitoli appaiono solo quando il proprietario del video li aggiunge alla descrizione.',
      },
      {
        question: 'Quanti capitoli posso aggiungere con questo strumento?',
        answer:
          'Non c’è un limite fisso nello strumento, ma le liste di capitoli molto lunghe diventano difficili da leggere: concentrale quindi sulle vere sezioni del video.',
      },
      {
        question: 'Devo includere titoli di capitoli, o bastano le ore?',
        answer:
          'YouTube ha bisogno di un titolo dopo ogni timestamp: aggiungi quindi una breve etichetta descrittiva per ogni capitolo elencato.',
      },
      {
        question: 'Posso usare questi timestamp nella descrizione di un episodio di podcast?',
        answer:
          'Sì, lo stesso formato 00:00 funziona nelle note di puntata e nelle descrizioni di episodi di podcast, e i link ?t= sono pratici per gli ascoltatori.',
      },
      {
        question: 'Perché lo strumento passa tutti i timestamp in HH:MM:SS per i video lunghi?',
        answer:
          'I formati misti MM:SS e HH:MM:SS confondono gli spettatori e gli analizzatori: lo strumento mantiene quindi ogni timestamp in un solo formato coerente.',
      },
      {
        question: 'L’URL del mio video o la mia lista di capitoli viene inviata da qualche parte?',
        answer:
          'No, tutta l’analisi e la formattazione avvengono localmente nel tuo browser, e i tuoi URL e titoli di capitoli non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Posso modificare un capitolo dopo averlo aggiunto?',
        answer:
          'Sì, puoi modificare qualsiasi timestamp o titolo, ordinare di nuovo la lista e ricontrollare gli avvisi di specifica prima di copiare il blocco aggiornato.',
      },
      {
        question: 'Che cosa devo fare se un link generato si apre al momento sbagliato?',
        answer:
          'Verifica che il timestamp sia stato inserito in minuti e secondi nell’ordine giusto, poi copia di nuovo il link dopo averlo corretto.',
      },
      {
        question: 'I capitoli YouTube aiutano gli spettatori a trovare il contenuto più velocemente?',
        answer:
          'Sì, i capitoli permettono agli spettatori di saltare direttamente alla sezione di cui hanno bisogno, il che rende i lunghi tutorial, recensioni e podcast più facili da sfogliare.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica un’immagine di miniatura locale',
        description:
          'Scegli un file PNG, JPG o WebP sul disco; resta strettamente nella memoria locale del browser tramite URL di oggetto.',
      },
      {
        title: 'Inserisci titolo, canale e durata',
        description:
          'Digita il titolo candidato e la durata del video per verificare il troncamento del feed su due righe e la copertura del badge d’angolo.',
      },
      {
        title: 'Passa alla modalità scura e alla zona sicura',
        description:
          'Passa tra i feed chiaro e scuro e attiva la sovrapposizione di zona d’angolo di timestamp arancione prima dell’esportazione.',
      },
      {
        title: 'Confronta le dimensioni di feed e barra laterale',
        description:
          'Verifica fianco a fianco la grande scheda di feed desktop e la miniatura compatta di barra laterale per individuare il testo illeggibile in piccolo.',
      },
      {
        title: 'Verifica gli avvisi di specifica',
        description:
          'Consulta le verifiche di dimensioni 1280×720, rapporto 16:9 e dimensione file di 2 MB, e correggi qualsiasi problema segnalato nel tuo editor di immagini.',
      },
      {
        title: 'Suggerimento: correggi il testo nascosto dal badge',
        description:
          'Se il badge di durata copre un testo o un volto importante, allontana quell’elemento dall’angolo inferiore destro e carica di nuovo l’immagine.',
      },
    ],
    examples: [
      {
        title: 'Verificare il posizionamento del testo in basso a destra',
        input: 'PNG 1280×720 · Durata: 12:48 · Zona sicura: attivata',
        output: 'Evidenzia l’angolo inferiore destro dove il badge di durata 12:48 copre l’illustrazione.',
        explanation:
          'Impedisce che volti o cifre importanti della miniatura si trovino dietro le sovrapposizioni di durata del lettore.',
      },
      {
        title: 'Confrontare il titolo nel feed chiaro e scuro',
        input: 'Titolo: «Come raddoppiare le tue visualizzazioni in 30 giorni» · Miniatura: 1280×720',
        output: 'Il titolo si mostra su due righe nel feed chiaro e scuro, senza troncamento delle parole chiave.',
        explanation:
          'L’interruttore chiaro/scuro mostra come il contrasto del titolo cambia secondo il tema del feed.',
      },
    ],
    benefits: [
      'Legge immediatamente le vere dimensioni naturali in pixel, il rapporto d’aspetto e la dimensione file in KB/MB',
      'Visualizza in anteprima sia le grandi schede di feed desktop sia le piccole miniature di barra laterale consigliate',
      'Comprende un interruttore di feed chiaro/scuro per testare la leggibilità ad alto contrasto',
      'Nessun invio a un server — ideale per le grafiche di sponsor o lanci di prodotto non pubblicati',
    ],
    useCases: [
      'Individuare il piccolo testo illeggibile nelle miniature compatte di barra laterale prima della pubblicazione',
      'Assicurarsi che le grafiche importanti restino lontane dalla sovrapposizione di durata in basso a destra',
      'Verificare che le miniature rispettino i requisiti YouTube 1280×720, 16:9 e < 2 MB',
      'Confrontare la formulazione dei titoli in modo che le parole chiave essenziali appaiano prima del troncamento',
    ],
    faqs: [
      {
        question: 'Le mie immagini di miniature caricate vengono inviate a un server remoto?',
        answer:
          'Mai. Le immagini si caricano esclusivamente nella scheda del tuo browser tramite URL.createObjectURL() e vengono revocate automaticamente quando vengono sostituite o chiuse.',
      },
      {
        question: 'Quali dimensioni e dimensione file raccomanda YouTube per le miniature?',
        answer:
          'YouTube raccomanda 1280×720 pixel (larghezza minima di 640 px) in un rapporto 16:9, salvati in JPG, PNG o WebP di meno di 2 MB.',
      },
      {
        question: 'Perché l’anteprima della barra laterale è così importante?',
        answer:
          'Le miniature suggerite della pagina di visione appaiono molto più piccole (circa 168 px di larghezza): verificare la leggibilità a scala compatta evita quindi design affollati.',
      },
      {
        question: 'L’anteprima di miniature YouTube è gratuita?',
        answer:
          'Sì, è gratuita nel tuo browser, senza account, e le tue immagini di miniature non vengono mai inviate da nessuna parte.',
      },
      {
        question: 'Quali formati di immagine posso visualizzare in anteprima con l’anteprima di miniature?',
        answer:
          'Puoi caricare file PNG, JPG e WebP, che sono gli stessi formati che YouTube accetta per le miniature personalizzate.',
      },
      {
        question: 'Come verifica l’anteprima di miniature il rapporto 16:9?',
        answer:
          'Legge le vere dimensioni in pixel della tua immagine e segnala se il rapporto larghezza-altezza non corrisponde a 16:9.',
      },
      {
        question: 'Che cos’è la zona sicura di miniatura in questa anteprima?',
        answer:
          'La sovrapposizione di zona sicura evidenzia l’angolo inferiore destro dove YouTube mette il badge di durata del video, in modo che tu possa tenere volti e testo chiave lontani.',
      },
      {
        question: 'Perché devo visualizzare in anteprima la mia miniatura in modalità scura?',
        answer:
          'Molti spettatori scorrono YouTube in modalità scura, e i design luminosi o a basso contrasto possono apparire molto diversi su uno sfondo di feed scuro.',
      },
      {
        question: 'Come mostra l’anteprima il troncamento del titolo?',
        answer:
          'Mostra il tuo titolo in una scheda di feed realistica con lo stesso limite di due righe, in modo che tu possa vedere esattamente dove YouTube lo taglia.',
      },
      {
        question: 'Che cosa succede se la mia miniatura supera 2 MB?',
        answer:
          'Lo strumento segnala la dimensione del file, e devi esportarla di nuovo con una compressione più forte o una risoluzione più piccola finché non scende sotto 2 MB.',
      },
      {
        question: 'Posso visualizzare in anteprima una miniatura prima della pubblicazione del mio video?',
        answer:
          'Sì, è l’uso principale: testare localmente miniature non pubblicate in modo che le grafiche di sponsor e le illustrazioni di lancio restino private fino al giorno di uscita.',
      },
      {
        question: 'Perché la mia miniatura sembra sfocata nell’anteprima della barra laterale?',
        answer:
          'Le piccole miniature di barra laterale riducono molto la tua immagine: il testo fine e i dettagli fini diventano quindi sfocati; usa piuttosto testo grande e grassetto e forme semplici.',
      },
      {
        question: 'L’anteprima modifica o comprime la mia immagine di miniatura?',
        answer:
          'No, mostra solo il tuo file così com’è e indica le sue dimensioni e la sua dimensione; non modifica, ridimensiona né ricodifica mai l’immagine.',
      },
      {
        question: 'Qual è la larghezza minima di miniatura accettata da YouTube?',
        answer:
          'YouTube richiede una larghezza minima di 640 pixel, anche se 1280 pixel di larghezza sono raccomandati per un risultato HD nitido.',
      },
      {
        question: 'Posso testare titoli diversi con la stessa miniatura?',
        answer:
          'Sì, modifica semplicemente il campo del titolo e l’anteprima del feed si aggiorna istantaneamente, in modo che tu possa confrontare le formulazioni senza caricare di nuovo l’immagine.',
      },
      {
        question: 'Perché il testo della mia miniatura viene tagliato nell’anteprima del feed?',
        answer:
          'Le schede di feed limitano i titoli a due righe: metti quindi le tue parole più importanti all’inizio del titolo, dove restano visibili.',
      },
      {
        question: 'L’anteprima funziona per le miniature di altre piattaforme?',
        answer:
          'È costruita intorno alle disposizioni del feed YouTube, ma le verifiche di dimensione, contrasto e leggibilità a piccola scala sono utili per qualsiasi piattaforma video.',
      },
      {
        question: 'Come rimuovere un’immagine di miniatura caricata?',
        answer:
          'Carica un’altra immagine per sostituirla, oppure chiudi la scheda; l’URL di oggetto in memoria viene revocato e niente viene registrato.',
      },
      {
        question: 'Che cosa devo fare se l’anteprima sembra diversa dal vero YouTube?',
        answer:
          'YouTube modifica la sua disposizione nel tempo: considera quindi l’anteprima come un’approssimazione vicina e fai una verifica finale su un caricamento privato o non in elenco.',
      },
      {
        question: 'L’anteprima di miniature può verificare la miniatura di un video YouTube in diretta?',
        answer:
          'No, visualizza in anteprima solo file di immagini locali; per verificare un video pubblicato, scarica prima la sua immagine di miniatura e carica quel file qui.',
      },
    ],
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
    instructions: [
      {
        title: 'Incolla parole chiave o hashtag grezzi',
        description:
          'Inserisci tag separati da virgole, spazi, punti e virgola o interruzioni di riga — con o senza simboli # in testa.',
      },
      {
        title: 'Scegli maiuscole e disposizione',
        description:
          'Scegli PascalCase (#CamelCase) per l’accessibilità, minuscolo o Mantieni maiuscole, più un output in riga o separato da righe.',
      },
      {
        title: 'Scegli uno stile di separatore di didascalia',
        description:
          'Scegli un blocco di una sola riga, una lista verticale o un piè di pagina separato da punti in modo che i tag si collochino puliti sotto il testo della tua didascalia.',
      },
      {
        title: 'Avvia il formattatore',
        description:
          'Lo strumento rimuove la punteggiatura non valida, elimina i duplicati senza tener conto delle maiuscole e ricostruisce ogni tag nelle maiuscole scelte.',
      },
      {
        title: 'Verifica il numero e copia',
        description:
          'Verifica i duplicati rimossi e il numero totale di tag rispetto al limite di 30 tag di Instagram, poi fai clic su Copia gli hashtag.',
      },
      {
        title: 'Suggerimento: riduci i tag sopra il limite della piattaforma',
        description:
          'Se il numero supera 30, rimuovi prima i tag meno pertinenti, perché i tag aggiuntivi oltre il limite vengono ignorati da Instagram.',
      },
    ],
    examples: [
      {
        title: 'Convertire frasi grezze in hashtag CamelCase accessibili',
        input: 'marketing di contenuti, consigli di produttività, Marketing di Contenuti',
        output: '#MarketingDiContenuti #ConsigliDiProduttività (1 duplicato rimosso)',
        explanation:
          'Mettere in maiuscolo ogni confine di parola aiuta i lettori di schermo a pronunciare correttamente i tag a più parole.',
      },
      {
        title: 'Pulire una lista di tag disordinata',
        input: '#viaggio, #Viaggio, #viaggio-2025, #spiaggia!!',
        output: '#Viaggio #Viaggio2025 #Spiaggia (1 duplicato rimosso, punteggiatura pulita)',
        explanation:
          'I duplicati insensibili alle maiuscole vengono rimossi e la punteggiatura non supportata viene tolta da ogni tag.',
      },
    ],
    benefits: [
      'Supporta la formattazione #PascalCase accessibile raccomandata dalle guide di accessibilità digitale',
      'Deduplica automaticamente i tag identici senza tener conto delle maiuscole',
      'Rimuove la punteggiatura non supportata (trattini, punti, virgole) che rompe i tag cliccabili',
      'Segue il numero esatto di tag rispetto ai limiti delle piattaforme',
    ],
    useCases: [
      'Pulire le banche di hashtag di campagna condivise nei fogli di calcolo marketing',
      'Convertire le parole chiave SEO a più parole in hashtag social cliccabili',
      'Aggiornare le vecchie liste di tag in minuscolo a una formattazione CamelCase accessibile',
      'Generare piè di pagina di hashtag netti separati da punti per i post Instagram',
    ],
    faqs: [
      {
        question: 'Perché CamelCase / PascalCase è raccomandato per gli hashtag?',
        answer:
          'I lettori di schermo separano i confini di parola in maiuscolo (per esempio #StrumentiSocial letto come «Strumenti Social») invece di cercare di pronunciare una lunga stringa in minuscolo come una sola parola confusa.',
      },
      {
        question: 'Perché trattini e punti vengono rimossi nei tag?',
        answer:
          'La maggior parte delle piattaforme social termina un hashtag cliccabile al primo spazio, trattino o segno di punteggiatura: rimuovere i trattini mantiene quindi l’intero tag intatto.',
      },
      {
        question: 'Usa l’IA o indovina gli hashtag vietati?',
        answer:
          'No. Pulisce, formatta e deduplica in modo deterministico i tag esatti che fornisci.',
      },
      {
        question: 'Il formattatore di hashtag è gratuito?',
        answer:
          'Sì, è gratuito nel tuo browser, senza registrazione, e i tuoi tag vengono elaborati localmente senza essere inviati.',
      },
      {
        question: 'Qual è il limite di hashtag su Instagram?',
        answer:
          'Instagram consente fino a 30 hashtag per post, e questo strumento conta i tuoi tag in modo che tu possa restare in questo limite.',
      },
      {
        question: 'Come rimuove il formattatore di hashtag i duplicati?',
        answer:
          'Confronta i tag senza tener conto delle maiuscole: #MarketingDiContenuti e #marketingdicontenuti contano quindi come lo stesso tag e ne viene conservato uno solo.',
      },
      {
        question: 'Posso incollare hashtag con o senza il simbolo #?',
        answer:
          'Sì, funzionano entrambi: lo strumento aggiunge un # alle parole chiave grezze e conserva quelli che hai già digitato con un #.',
      },
      {
        question: 'Quali separatori posso usare tra gli hashtag?',
        answer:
          'Puoi separare i tag con virgole, spazi, punti e virgola o interruzioni di riga, e lo strumento gestisce i separatori misti in un solo incollaggio.',
      },
      {
        question: 'Qual è la differenza tra hashtag CamelCase e in minuscolo?',
        answer:
          'CamelCase mette in maiuscolo ogni parola (#SocialMedia) per l’accessibilità dei lettori di schermo, mentre il minuscolo (#socialmedia) è una scelta stilistica che si legge come una sola parola.',
      },
      {
        question: 'Il formattatore di hashtag verifica se un hashtag è vietato?',
        answer:
          'No, non verifica le liste di divieto né i dati in tempo reale delle piattaforme; pulisce e formatta solo i tag che fornisci.',
      },
      {
        question: 'Posso usare gli hashtag formattati anche su TikTok e X?',
        answer:
          'Sì, i tag puliti funzionano su qualsiasi piattaforma, anche se ogni piattaforma ha i propri limiti, come il limite di 30 tag su Instagram.',
      },
      {
        question: 'Perché alcuni dei miei hashtag scompaiono dopo la formattazione?',
        answer:
          'I tag composti solo da punteggiatura o caratteri non supportati vengono rimossi, perché non funzionerebbero comunque come hashtag cliccabili.',
      },
      {
        question: 'A che cosa servono i piè di pagina di hashtag separati da punti?',
        answer:
          'I separatori a punti spingono gli hashtag sotto il ripiegamento della didascalia su Instagram, mantenendo la didascalia visibile pulita mentre i tag funzionano comunque.',
      },
      {
        question: 'Posso formattare gli hashtag in lista verticale?',
        answer:
          'Sì, scegli la disposizione separata da righe per mettere un hashtag per riga, il che è pratico per commenti e piè di pagina di didascalia.',
      },
      {
        question: 'Il formattatore di hashtag funziona con parole non italiane?',
        answer:
          'Sì, conserva le lettere di altri alfabeti nel tag, purché la piattaforma le supporti negli hashtag.',
      },
      {
        question: 'Quanti hashtag devo usare per post?',
        answer:
          'Non c’è un numero unico ideale; usa tag davvero pertinenti per il post, e lascia che il contatore ti mantenga sotto il limite della piattaforma.',
      },
      {
        question: 'Posso salvare un gruppo di hashtag per riutilizzarlo?',
        answer:
          'Lo strumento non salva i gruppi: copia quindi il blocco formattato nelle tue note o nel tuo foglio di calcolo per riutilizzarlo più tardi.',
      },
      {
        question: 'Perché Mantieni maiuscole conserva la mia capitalizzazione originale?',
        answer:
          'Mantieni maiuscole serve per i tag di marca o gli acronimi che vuoi esattamente come digitati, mentre le altre modalità standardizzano ogni tag allo stesso modo.',
      },
      {
        question: 'I miei hashtag vengono inviati a un server?',
        answer:
          'No, tutta la formattazione avviene localmente nel tuo browser, quindi le tue liste di parole chiave e i tuoi tag di campagna non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Che cosa devo fare se un hashtag formattato non funziona ancora su una piattaforma?',
        answer:
          'Verifica le regole proprie della piattaforma per quel tag, perché alcune piattaforme bloccano certe parole o limitano la lunghezza dei tag anche quando il formato è pulito.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli una struttura di post',
        description:
          'Scegli tra i cinque modelli deterministici della barra in alto per far corrispondere il tuo obiettivo.',
      },
      {
        title: 'Compila il tuo gancio, i tuoi punti e il tuo invito all’azione',
        description:
          'Inserisci il tuo gancio di apertura autentico, il contesto del problema, i punti chiave da ricordare (uno per riga), l’invito all’azione e gli hashtag.',
      },
      {
        title: 'Consulta l’anteprima in tempo reale',
        description:
          'Leggi il post formattato come apparirà, verificando la spaziatura dei paragrafi e l’ordine di gancio, punti da ricordare e invito all’azione.',
      },
      {
        title: 'Verifica l’adeguatezza di caratteri e parole',
        description:
          'Tieni d’occhio il contatore in tempo reale rispetto al limite di 280 caratteri di X e ai limiti di Instagram o LinkedIn, e accorcia le righe che ti fanno superare.',
      },
      {
        title: 'Copia e verifica la lunghezza',
        description:
          'Visualizza in anteprima il post formattato in tempo reale, conferma l’adeguatezza di caratteri e parole per X o Instagram/LinkedIn, e fai clic su Copia la didascalia.',
      },
      {
        title: 'Suggerimento: prova le stesse note in un altro modello',
        description:
          'Cambia modello senza ridigitare per confrontare come si leggono il tuo gancio e i tuoi punti in PAS, in tutorial o in lista di controllo prima di pubblicare.',
      },
    ],
    examples: [
      {
        title: 'Assemblare un post LinkedIn azionabile in 3 passaggi',
        input: 'Gancio + Contesto + 3 punti chiave + Invito all’azione',
        output: 'Post numerato pulito con una spaziatura di paragrafo netta e hashtag in piè di pagina.',
        explanation:
          'Struttura le tue parole esatte in modo deterministico senza modificare il tono né inventare affermazioni.',
      },
      {
        title: 'Trasformare note grezze in post PAS',
        input: 'Problema: i post richiedono troppo tempo · Soluzione: un modello strutturato',
        output: 'Problema → Agitazione → Soluzione → Invito all’azione, con le parole esatte dell’utente.',
        explanation:
          'Il modello PAS organizza le tue parole senza riscrivere né aggiungere nulla.',
      },
    ],
    benefits: [
      'Assemblaggio deterministico 100 % trasparente — nessuna parola alla moda generica di IA né fatto allucinato',
      'Impone una gerarchia visiva chiara tra gancio, punti da ricordare e invito all’azione',
      'Il contatore di caratteri e parole in tempo reale segnala i limiti di 280 caratteri di X e di Instagram/LinkedIn',
      'Permette ai creator di testare cinque cornici classiche sulle stesse note in un clic',
    ],
    useCases: [
      'Scrivere annunci di lancio di prodotto coerenti per i canali social',
      'Trasformare note grezze di ingegneria o marketing in post leggibili',
      'Formattare caroselli educativi o liste di consigli settimanali',
      'Separare pulitamente i ganci di apertura dalle liste di valore prima della pianificazione',
    ],
    faqs: [
      {
        question: 'Questo strumento usa un modello di linguaggio IA per riscrivere le mie parole?',
        answer:
          'No. È un creatore di modelli strutturati puramente deterministico che viene eseguito nel tuo browser — ogni frase dell’anteprima proviene strettamente dalle tue voci.',
      },
      {
        question: 'Come aggiungere più passaggi o elementi di lista di controllo?',
        answer:
          'Premi semplicemente Invio per aggiungere nuove righe nella zona di testo dei punti chiave; ogni riga non vuota si formatta automaticamente in elemento numerato, in punto o in casella di spunta.',
      },
      {
        question: 'Posso preservare le righe vuote quando incollo poi in Instagram?',
        answer:
          'Sì. Se un’app fonde ancora la spaziatura su mobile, deposita la didascalia copiata nel nostro formattatore di interruzioni di riga per bio Instagram per spazi invisibili.',
      },
      {
        question: 'Il creatore di modelli di didascalie è gratuito?',
        answer:
          'Sì, è gratuito nel tuo browser, senza registrazione, e le tue bozze vengono elaborate localmente senza essere inviate.',
      },
      {
        question: 'Che cos’è il modello PAS nel creatore di modelli di didascalie?',
        answer:
          'PAS significa Problema–Agitazione–Soluzione: nomina il problema del lettore, accentua perché fa male, poi presenta la tua soluzione e il tuo invito all’azione.',
      },
      {
        question: 'Quali modelli di didascalie comprende questo creatore?',
        answer:
          'Comprende cinque modelli: Problema–Agitazione–Soluzione, Dettaglio azionabile, Prima–Dopo–Ponte, Lista di controllo di audit e Mito contro Realtà.',
      },
      {
        question: 'Posso usare il creatore di modelli di didascalie per i post LinkedIn?',
        answer:
          'Sì, la disposizione strutturata con gancio, punti da ricordare e invito all’azione funziona bene per LinkedIn, e il contatore in tempo reale ti aiuta a restare nei suoi limiti.',
      },
      {
        question: 'Posso usare il creatore di modelli di didascalie per le didascalie Instagram?',
        answer:
          'Sì, i modelli si formattano puliti per le didascalie Instagram, e puoi aggiungere hashtag alla fine della didascalia costruita.',
      },
      {
        question: 'Che cos’è il modello di didascalia Prima–Dopo–Ponte?',
        answer:
          'Mostra la situazione attuale del lettore, dipinge lo stato migliorato dopo, poi colma il divario con il tuo prodotto, metodo o consiglio.',
      },
      {
        question: 'Come funziona il contatore di caratteri nel creatore di didascalie?',
        answer:
          'Conta i caratteri e le parole in tempo reale mentre digiti e segnala quando la tua bozza supera limiti come i 280 caratteri di X.',
      },
      {
        question: 'Posso cambiare modello senza perdere il mio testo?',
        answer:
          'Sì, cambiare modello riutilizza il tuo gancio, i tuoi punti e il tuo invito all’azione esistenti, in modo che tu possa confrontare le strutture senza ridigitare.',
      },
      {
        question: 'Il creatore aggiunge hashtag automaticamente?',
        answer:
          'No, mette solo gli hashtag che inserisci tu stesso, quindi controlli esattamente quali tag appaiono con ogni didascalia.',
      },
      {
        question: 'Che cosa rende buono un gancio per una didascalia di social?',
        answer:
          'Un buon gancio enuncia un vantaggio chiaro, un fatto sorprendente o un problema identificabile in una sola riga breve che fa fermare lo scorrimento del lettore.',
      },
      {
        question: 'Posso usare il creatore di didascalie per i post X (Twitter)?',
        answer:
          'Sì, il contatore ti avverte a 280 caratteri, in modo che tu possa accorciare il tuo gancio e i tuoi punti da ricordare finché il post sta in un solo tweet.',
      },
      {
        question: 'A che cosa serve il modello di didascalia Mito contro Realtà?',
        answer:
          'Associa un’idea falsa comune al fatto corretto, il che funziona bene per i post educativi e per confutare i cattivi consigli nel tuo campo.',
      },
      {
        question: 'Posso modificare la didascalia dopo averla copiata?',
        answer:
          'Sì, il testo copiato è testo semplice: puoi quindi modificare la formulazione, le emoji o le interruzioni di riga nella tua app di pianificazione prima della pubblicazione.',
      },
      {
        question: 'Il creatore registra le mie didascalie?',
        answer:
          'No, le bozze vivono solo nella scheda del tuo browser: copia quindi le didascalie terminate nelle tue note o nel tuo pianificatore prima di chiudere la pagina.',
      },
      {
        question: 'Che cosa devo mettere nel campo di invito all’azione?',
        answer:
          'Scrivi un solo passaggio successivo chiaro, come commentare, salvare il post, fare clic sul tuo link o seguire il tuo account.',
      },
      {
        question: 'Posso usare il creatore di didascalie per gli annunci di lancio di prodotto?',
        answer:
          'Sì, i modelli PAS o Prima–Dopo–Ponte sono adatti ai lanci: enuncia il problema, mostra il risultato e termina con dove ottenerlo.',
      },
      {
        question: 'Perché il creatore non riscrive o migliora la mia formulazione?',
        answer:
          'È deliberatamente deterministico, quindi il tuo tono e i tuoi fatti restano esattamente come li hai scritti invece di essere sostituiti da un testo generico generato.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci il nome della marca o del creator',
        description:
          'Digita il nome della tua marca o di visualizzazione (per esempio Utility Hub) per generare candidati di pseudonimi puliti e coerenti.',
      },
      {
        title: 'Testa le variazioni o modifica direttamente',
        description:
          'Fai clic su qualsiasi pillola di variazione o personalizza lo pseudonimo attivo per testare prefissi e suffissi come get, use, hq o studio.',
      },
      {
        title: 'Verifica la conformità di sintassi per piattaforma',
        description:
          'Verifica lo stato di formato valido di ogni candidato su X, Instagram, TikTok, YouTube, Threads e GitHub.',
      },
      {
        title: 'Correggi i caratteri non validi',
        description:
          'Se una piattaforma segnala uno pseudonimo, rimuovi il carattere non consentito — per esempio, rimuovi i trattini per X e Instagram, o gli underscore per GitHub.',
      },
      {
        title: 'Verifica la conformità e apri gli URL',
        description:
          'Verifica lo stato di formato valido su X, Instagram, TikTok, YouTube, Threads e GitHub, poi fai clic su Verifica l’URL per ispezionare lo stato di rivendicazione in diretta.',
      },
      {
        title: 'Suggerimento: copia la tua selezione prima di rivendicare',
        description:
          'Copia gli pseudonimi che passano su ogni piattaforma che ti interessa, poi rivendicali uno per uno, iniziando dalla rete in cui la tua audience è più grande.',
      },
    ],
    examples: [
      {
        title: 'Confrontare gli pseudonimi con trattino e con underscore sulle piattaforme',
        input: 'Pseudonimo: utility-hub',
        output: 'Valido su GitHub e YouTube @handle · Non valido su X e Instagram (trattini vietati)',
        explanation:
          'Evita di scegliere uno pseudonimo di marca che non può essere identico sui principali social.',
      },
      {
        title: 'Testare uno pseudonimo troppo lungo per X',
        input: 'Pseudonimo: utilityflowufficiale (19 caratteri)',
        output: 'Non valido su X (limite di 15 caratteri) · Valido su Instagram e TikTok',
        explanation:
          'Il limite rigido di 15 caratteri di X viene applicato a ogni candidato per evitare brutte sorprese.',
      },
    ],
    benefits: [
      'Individua presto le incompatibilità tra piattaforme (come i trattini che falliscono su X/Instagram contro consentiti su GitHub/YouTube)',
      'Applica i limiti esatti di caratteri come il massimo rigido di 15 caratteri di X',
      'Non inventa mai badge di disponibilità in diretta offline — fornisce piuttosto link diretti cliccabili ai profili',
      'Comprende la copia in un clic dello @pseudonimo negli appunti',
    ],
    useCases: [
      'Nominare una nuova startup, un podcast, una newsletter o un progetto open source in modo coerente',
      'Trovare prefissi e suffissi di riserva quando uno pseudonimo esatto di una sola parola è preso',
      'Verificare se uno pseudonimo proposto di 18 caratteri supera il limite di 15 caratteri di X',
      'Preparare una lista di lancio di tutti gli URL ufficiali di profili social',
    ],
    faqs: [
      {
        question: 'Perché questo strumento non mostra automaticamente badge verdi «Disponibile» in diretta?',
        answer:
          'I principali social bloccano le verifiche CORS di browser non autenticati e limitano lo scraping automatizzato di disponibilità. Piuttosto che mostrare supposizioni inaffidabili o inventate, questo strumento convalida localmente le regole di sintassi ufficiali delle piattaforme e dà link URL diretti per verificare ogni piattaforma con precisione.',
      },
      {
        question: 'Quali caratteri di pseudonimo funzionano su quasi tutte le grandi reti?',
        answer:
          'I caratteri alfanumerici minuscoli (a–z, 0–9) e gli underscore (_) da 4 a 15 caratteri funzionano contemporaneamente su X, Instagram, TikTok, YouTube e Threads.',
      },
      {
        question: 'Perché GitHub rifiuta gli underscore negli pseudonimi?',
        answer:
          'I nomi utente GitHub consentono solo caratteri alfanumerici e trattini semplici non iniziali e non finali, mentre X e Instagram vietano i trattini.',
      },
      {
        question: 'Il formattatore di nomi utente è gratuito?',
        answer:
          'Sì, è gratuito nel tuo browser, senza registrazione, e i tuoi nomi di marca e idee di pseudonimi vengono elaborati localmente senza essere inviati.',
      },
      {
        question: 'Qual è la lunghezza massima di uno pseudonimo su X?',
        answer:
          'I nomi utente X possono contare al massimo 15 caratteri: questo strumento segnala quindi qualsiasi candidato più lungo per X.',
      },
      {
        question: 'Come verificare se uno pseudonimo social è realmente disponibile?',
        answer:
          'Fai clic sul link Verifica l’URL di ogni piattaforma per aprire la pagina di profilo in diretta; se la pagina mostra un vero profilo, lo pseudonimo è preso.',
      },
      {
        question: 'Perché i trattini funzionano su GitHub ma non su X o Instagram?',
        answer:
          'Ogni piattaforma definisce i propri caratteri consentiti: GitHub permette i trattini, mentre X e Instagram consentono solo lettere, cifre e underscore.',
      },
      {
        question: 'Quali prefissi di pseudonimo devo provare se il mio nome esatto è preso?',
        answer:
          'I prefissi e suffissi comuni comprendono get, use, the, hq, studio, official e app — lo strumento genera queste variazioni in modo che tu le testi.',
      },
      {
        question: 'Il formattatore di nomi utente può verificare gli pseudonimi YouTube?',
        answer:
          'Sì, convalida i candidati rispetto alle regole di caratteri degli @pseudonimi YouTube e ti dà un link diretto per verificare lo stato in diretta dello pseudonimo.',
      },
      {
        question: 'Qual è la lunghezza minima di uno pseudonimo sulla maggior parte delle piattaforme?',
        answer:
          'La maggior parte delle piattaforme richiede almeno alcuni caratteri, e gli pseudonimi che funzionano su X, Instagram, TikTok, YouTube e Threads contano generalmente da 4 a 15 caratteri.',
      },
      {
        question: 'Il mio pseudonimo deve essere identico su ogni piattaforma social?',
        answer:
          'Pseudonimi identici rendono la tua marca più facile da trovare e più difficile da usurpare: mira quindi a uno pseudonimo che rispetti le regole di ogni piattaforma che usi.',
      },
      {
        question: 'Posso usare cifre nel mio pseudonimo social?',
        answer:
          'Sì, le cifre sono consentite sulle sei piattaforme verificate da questo strumento, anche se iniziare uno pseudonimo con una cifra può sembrare meno curato.',
      },
      {
        question: 'Perché lo strumento dice che il mio pseudonimo è valido, ma la piattaforma lo rifiuta?',
        answer:
          'La validità di sintassi è solo una verifica; la piattaforma può anche rifiutare uno pseudonimo perché è già preso, riservato o bloccato per ragioni di politica.',
      },
      {
        question: 'Il formattatore di nomi utente verifica gli pseudonimi Threads?',
        answer:
          'Sì, convalida i candidati rispetto alle regole di nomi utente Threads, insieme a X, Instagram, TikTok, YouTube e GitHub.',
      },
      {
        question: 'Posso usare punti in uno pseudonimo social?',
        answer:
          'Instagram consente i punti nei nomi utente, ma X, TikTok e GitHub non lo fanno: uno pseudonimo con punti non sarà quindi identico ovunque.',
      },
      {
        question: 'Come scegliere uno pseudonimo per una nuova startup o un podcast?',
        answer:
          'Inserisci il nome della tua marca, preseleziona le variazioni che passano su ogni piattaforma, poi rivendica lo stesso ovunque prima di annunciarlo.',
      },
      {
        question: 'Posso testare uno pseudonimo con underscore su GitHub?',
        answer:
          'Puoi testarlo, ma GitHub rifiuterà gli underscore: lo strumento lo segnala quindi come non valido per GitHub, anche se passa su X e Instagram.',
      },
      {
        question: 'Le mie idee di nomi di marca vengono inviate a un server?',
        answer:
          'No, tutta la generazione e la convalida di pseudonimi avvengono localmente nel tuo browser, quindi le tue idee di nome non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Che cosa devo fare se il mio pseudonimo ideale è preso su una piattaforma?',
        answer:
          'Prova un prefisso o un suffisso coerente su tutte le piattaforme invece di un nome diverso su una sola rete, in modo che la tua marca resti facile da trovare.',
      },
      {
        question: 'Posso copiare uno pseudonimo direttamente dallo strumento?',
        answer:
          'Sì, lo strumento comprende la copia in un clic dello pseudonimo attivo, in modo che tu possa incollarlo nei moduli di registrazione senza ridigitarlo.',
      },
    ],
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
    instructions: [
      {
        title: 'Aggiungi più file PDF',
        description:
          'Seleziona due file .pdf non cifrati o più sul tuo dispositivo; ogni file viene convalidato per un’intestazione %PDF prima della messa in coda.',
      },
      {
        title: 'Verifica il numero di pagine e le dimensioni',
        description:
          'Consulta il numero di pagine e la dimensione in byte mostrati per ogni documento in coda per confermare di aver aggiunto i file giusti.',
      },
      {
        title: 'Organizza l’ordine di unione',
        description:
          'Usa le frecce su/giù per ordinare capitoli, allegati o fatture prima di combinarli.',
      },
      {
        title: 'Nomina il tuo file di output',
        description:
          'Inserisci un nome di file personalizzato se vuoi, in modo che il documento unito sia facile da ritrovare più tardi.',
      },
      {
        title: 'Unisci e scarica',
        description:
          'Fai clic su Unisci i PDF e scarica per combinare i file localmente e salvare il risultato.',
      },
      {
        title: 'Verifica il documento unito',
        description:
          'Apri il PDF scaricato e verifica l’ordine delle pagine e il numero totale di pagine; rilancia con un ordine corretto se qualcosa è spostato.',
      },
    ],
    examples: [
      {
        title: 'Combinare una copertina di fattura e un pacchetto di ricevute',
        input: 'copertina.pdf (1 pagina) + ricevute.pdf (4 pagine)',
        output: 'documento-unito.pdf (5 pagine)',
        explanation:
          'Copia tutte le pagine vettoriali, i font e le immagini incorporate in un unico contenitore PDF.',
      },
      {
        title: 'Assemblare un dossier di candidatura',
        input: 'cv.pdf (2 pagine) + lettera.pdf (1 pagina) + portfolio.pdf (3 pagine)',
        output: 'candidatura.pdf (6 pagine)',
        explanation:
          'I documenti vengono uniti nell’ordine scelto, ogni pagina mantenendo la sua impaginazione originale.',
      },
    ],
    benefits: [
      'Nessun invio di file: contratti, dichiarazioni fiscali e accordi di riservatezza restano strettamente sulla tua macchina',
      'Mostra il numero esatto di pagine e la dimensione in byte per documento in coda',
      'Convalida immediatamente i PDF malformati o cifrati con password al caricamento',
      'Nessuna filigrana, limite di pagine né limite giornaliero',
    ],
    useCases: [
      'Raggruppare proposte clienti, moduli firmati e allegati di prezzo',
      'Combinare documenti fiscali scansionati in più parti prima del deposito',
      'Unire diapositive di corso o guide di studio in un unico pacchetto stampabile',
      'Assemblare le fatture di spese mensili in un unico PDF contabile',
    ],
    faqs: [
      {
        question: 'Questo strumento può unire file PDF protetti da password?',
        answer:
          'La libreria pdf-lib lato browser richiede PDF non cifrati, salvo che siano sbloccati prima. Se viene caricato un file cifrato, il validatore ti avverte chiaramente invece di fallire in silenzio.',
      },
      {
        question: 'I font vettoriali e i collegamenti ipertestuali cliccabili vengono preservati?',
        answer:
          'Sì. I flussi di pagine PDF standard, i font incorporati e i tracciati vettoriali vengono copiati direttamente tramite PDFDocument.copyPages() senza convertire le pagine in immagini sfocate.',
      },
      {
        question: 'C’è un limite di invio a un server?',
        answer:
          'Nessun file viene mai inviato: l’elaborazione viene eseguita solo nella memoria della scheda del tuo browser.',
      },
      {
        question: 'Lo strumento Unisci PDF è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza filigrana, senza limite di pagine né limite giornaliero, e viene eseguito interamente nel tuo browser.',
      },
      {
        question: 'Quanti file PDF posso unire alla volta?',
        answer:
          'Puoi metterne in coda quanti la memoria del tuo browser lo permette comodamente. Il numero di pagine e la dimensione di ogni file vengono mostrati in modo che tu possa giudicare prima di unire.',
      },
      {
        question: 'Posso riordinare i PDF dopo averli aggiunti?',
        answer:
          'Sì, usa le frecce su e giù accanto a ogni file per definire l’ordine di unione esatto prima di combinare.',
      },
      {
        question: 'L’unione modificherà la qualità dei miei PDF?',
        answer:
          'No, le pagine vengono copiate come dati vettoriali: testo, font e immagini conservano la loro qualità originale.',
      },
      {
        question: 'Il PDF unito conserverà segnalibri o sommari?',
        answer:
          'Il contenuto delle pagine viene interamente preservato, ma i sommari e i segnalibri del documento possono non essere ripresi nel file unito.',
      },
      {
        question: 'Posso unire PDF scansionati?',
        answer:
          'Sì, le pagine scansionate vengono copiate come immagini nel file unito, come qualsiasi altra pagina.',
      },
      {
        question: 'Quali tipi di file posso unire con questo strumento?',
        answer:
          'Solo file PDF (.pdf). Le immagini devono prima essere convertite con lo strumento Immagini in PDF prima di poter essere unite.',
      },
      {
        question: 'Posso scegliere il nome del file di output del PDF unito?',
        answer:
          'Sì, inserisci un nome di file personalizzato prima di fare clic su Unisci; altrimenti viene usato un nome predefinito.',
      },
      {
        question: 'Lo strumento Unisci PDF funziona su mobile?',
        answer:
          'Sì, funziona nei browser mobili moderni, anche se i file uniti molto grandi si uniscono più velocemente su un computer.',
      },
      {
        question: 'I miei file sono privati quando unisco PDF qui?',
        answer:
          'Sì, tutto avviene localmente nella scheda del tuo browser e nessun file viene inviato a un server.',
      },
      {
        question: 'Che cosa succede se uno dei miei PDF è danneggiato?',
        answer:
          'Il validatore verifica l’intestazione %PDF di ogni file e ti avverte sui file malformati o cifrati prima dell’inizio dell’unione.',
      },
      {
        question: 'Posso unire PDF di dimensioni di pagina diverse?',
        answer:
          'Sì, ogni pagina conserva la sua dimensione e il suo orientamento originali nel documento unito.',
      },
      {
        question: 'Il PDF unito resterà consultabile con la ricerca?',
        answer:
          'Sì, i PDF basati su testo conservano un testo selezionabile e consultabile, perché le pagine vengono copiate e non convertite in immagini.',
      },
      {
        question: 'Posso unire un PDF con sé stesso?',
        answer:
          'Sì, puoi aggiungere lo stesso file più volte se hai bisogno che una pagina o un documento sia ripetuto nel risultato.',
      },
      {
        question: 'C’è una dimensione massima di file per unire PDF?',
        answer:
          'Non c’è un limite definito; il limite pratico è la memoria del browser disponibile sul tuo dispositivo.',
      },
      {
        question: 'Che cosa devo fare se il download unito non si avvia?',
        answer:
          'Verifica le impostazioni di download e il blocco popup del tuo browser, poi fai di nuovo clic su Unisci; il file viene generato localmente ogni volta.',
      },
      {
        question: 'Posso unire PDF e poi dividere il risultato?',
        answer:
          'Sì, scarica il PDF unito e aprilo nello strumento Dividi PDF per estrarre le pagine di cui hai bisogno.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica il tuo documento PDF',
        description:
          'Scegli qualsiasi file PDF non cifrato; lo strumento convalida l’intestazione e mostra il numero totale di pagine.',
      },
      {
        title: 'Scegli la modalità di divisione',
        description:
          'Seleziona Estrai intervalli di pagine, Pagine dispari solamente, Pagine pari solamente o Esplodi tutte le pagine singole.',
      },
      {
        title: 'Inserisci le pagine o gli intervalli',
        description:
          'Per la modalità intervallo, digita pagine come «1-3, 5, 9-12»; l’analizzatore segnala gli intervalli fuori limite o invertiti prima del salvataggio.',
      },
      {
        title: 'Verifica la tua selezione',
        description:
          'Conferma che la modalità e la lista di pagine corrispondano a ciò di cui hai bisogno, soprattutto per le estrazioni pari/dispari ed esplose.',
      },
      {
        title: 'Dividi e scarica',
        description:
          'Fai clic su Dividi e scarica il PDF per generare il tuo documento ridotto localmente.',
      },
      {
        title: 'Verifica il risultato e ripeti se necessario',
        description:
          'Apri il file scaricato per confermare che le pagine giuste siano state estratte; per la modalità esplosa, autorizza più download nel tuo browser se ti viene chiesto.',
      },
    ],
    examples: [
      {
        title: 'Estrarre le pagine di firma di un accordo di 12 pagine',
        input: 'Pagine da estrarre: 1, 10-12',
        output: 'contratto-estratto.pdf (4 pagine)',
        explanation:
          'Esporta le pagine 1, 10, 11 e 12 in ordine crescente lasciando intatto il tuo file originale.',
      },
      {
        title: 'Estrarre solo le pagine dispari',
        input: 'Modalità: Pagine dispari solamente · Documento: 10 pagine',
        output: 'documento-dispari.pdf (5 pagine: 1, 3, 5, 7, 9)',
        explanation:
          'Utile per i flussi di scansione fronte-retro in cui le pagine dispari e pari vengono scansionate separatamente.',
      },
    ],
    benefits: [
      'L’analizzatore di intervallo flessibile rileva gli intervalli fuori limite o invertiti prima del salvataggio',
      'Preserva la nitidezza vettoriale originale e la selezione del testo',
      'Supporta l’estrazione pari/dispari per i flussi di scansione fronte-retro',
      'Protegge i documenti finanziari e legali privati dai server di invio di terze parti',
    ],
    useCases: [
      'Estrarre solo i capitoli pertinenti di un grande rapporto prima di condividerlo',
      'Separare fatture individuali raggruppate in un PDF di fatturazione principale',
      'Estrarre le pagine di firma o di allegato di contratti di più pagine',
      'Recuperare lotti di scansioni pari/dispari da caricatori di documenti fronte',
    ],
    faqs: [
      {
        question: 'Perché la modalità Esplodi tutte le pagine singole è limitata a 25 pagine?',
        answer:
          'I browser bloccano o chiedono spesso conferma quando un sito attiva più di circa 25 download di file simultanei rapidi. Usa Estrai intervalli di pagine per le estrazioni più grandi in più parti.',
      },
      {
        question: 'La divisione modifica il mio file PDF originale?',
        answer:
          'No. Il browser legge una copia locale in memoria e genera un nuovo PDF scaricato.',
      },
      {
        question: 'Quale sintassi posso digitare in Pagine da estrarre?',
        answer:
          'Combina numeri singoli e intervalli con trattino separati da virgole, come «1-3, 5, 9-12».',
      },
      {
        question: 'Lo strumento Dividi un PDF è gratuito?',
        answer:
          'Sì, è gratuito, senza filigrana né limite di pagine oltre il limite di esplosione di 25 pagine.',
      },
      {
        question: 'Posso estrarre solo le pagine dispari di un PDF?',
        answer:
          'Sì, scegli Pagine dispari solamente; è utile per i flussi di scansione fronte-retro.',
      },
      {
        question: 'Posso estrarre solo le pagine pari di un PDF?',
        answer:
          'Sì, scegli Pagine pari solamente per estrarre solo le pagine numerate pari.',
      },
      {
        question: 'Che cosa succede se digito un numero di pagina che non esiste?',
        answer:
          'L’analizzatore di intervallo convalida la tua voce e ti avverte degli intervalli fuori limite o invertiti prima di salvare qualsiasi cosa.',
      },
      {
        question: 'Posso estrarre pagine PDF in un ordine personalizzato, come 10-12 poi 1?',
        answer:
          'Le pagine estratte vengono salvate in ordine crescente. Per riordinarle dopo, usa lo strumento Riordina le pagine PDF.',
      },
      {
        question: 'La divisione di un PDF mantiene il testo consultabile?',
        answer:
          'Sì, le pagine vengono copiate come dati vettoriali: il testo resta quindi selezionabile e consultabile nel file estratto.',
      },
      {
        question: 'Posso dividere un PDF protetto da password?',
        answer:
          'No, i PDF cifrati devono prima essere sbloccati; lo strumento accetta solo file non cifrati.',
      },
      {
        question: 'Posso dividere un PDF scansionato?',
        answer:
          'Sì, le pagine scansionate si estraggono esattamente come le pagine di testo.',
      },
      {
        question: 'Il PDF estratto conserverà la sua qualità originale?',
        answer:
          'Sì, nessuna ricompressione né conversione in immagine avviene durante l’estrazione.',
      },
      {
        question: 'Come esplodere un PDF in file di una sola pagina?',
        answer:
          'Scegli Esplodi tutte le pagine singole; ogni pagina si scarica come proprio PDF, fino a 25 pagine per esecuzione.',
      },
      {
        question: 'Posso scaricare solo la prima pagina di un PDF?',
        answer:
          'Sì, scegli Estrai intervalli di pagine e digita «1» nel campo Pagine da estrarre.',
      },
      {
        question: 'Lo strumento Dividi un PDF invia il mio file da qualche parte?',
        answer:
          'No, la divisione viene eseguita interamente nel tuo browser; il tuo file non lascia mai il tuo dispositivo.',
      },
      {
        question: 'Posso usare lo strumento Dividi un PDF sul mio telefono?',
        answer:
          'Sì, funziona nei browser mobili moderni, anche se i file molto grandi si dividono più comodamente su un computer.',
      },
      {
        question: 'Qual è la differenza tra Estrai intervalli di pagine ed Esplodi?',
        answer:
          'Gli intervalli combinano le pagine selezionate in un unico nuovo PDF, mentre Esplodi crea un PDF distinto per pagina.',
      },
      {
        question: 'Posso estrarre le pagine 1-3 e la pagina 5 in una sola volta?',
        answer:
          'Sì, digita «1-3, 5» — i numeri singoli e gli intervalli con trattino possono essere combinati con virgole.',
      },
      {
        question: 'I segnalibri sopravviveranno quando divido un PDF?',
        answer:
          'Il contenuto delle pagine viene preservato, ma i sommari e i segnalibri del documento generalmente non vengono ripresi nei file estratti.',
      },
      {
        question: 'Il mio download non si è avviato dopo la divisione — che cosa devo fare?',
        answer:
          'Autorizza i download multipli per questo sito nel tuo browser, poi fai di nuovo clic su Dividi; il file viene generato localmente ogni volta.',
      },
    ],
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
    instructions: [
      {
        title: 'Seleziona una o più immagini',
        description:
          'Scegli immagini JPG, PNG o WebP; le miniature e le dimensioni in pixel appaiono immediatamente.',
      },
      {
        title: 'Organizza l’ordine delle immagini',
        description:
          'Usa le frecce su/giù per definire la sequenza delle pagine del tuo PDF.',
      },
      {
        title: 'Configura dimensione di pagina e margini',
        description:
          'Scegli A4 Verticale, Lettera US o Dimensioni esatte dell’immagine, e definisci un margine per le dimensioni di pagina standard.',
      },
      {
        title: 'Nomina il tuo file di output',
        description:
          'Inserisci un nome di file personalizzato in modo che il PDF terminato sia facile da identificare.',
      },
      {
        title: 'Genera il PDF',
        description:
          'Fai clic su Converti le immagini in PDF per costruire il documento localmente e scaricarlo istantaneamente.',
      },
      {
        title: 'Verifica e regola',
        description:
          'Apri il PDF per verificare l’impaginazione e i margini; riordina le immagini o modifica l’impostazione di pagina e riconverti se una pagina sembra scorretta.',
      },
    ],
    examples: [
      {
        title: 'Compilare ricevute di spese su pagine A4 standard',
        input: '3 ricevute JPG · A4 Verticale · Margine di 24 pt',
        output: 'lotto-immagini.pdf (3 pagine A4 centrate, proporzioni preservate)',
        explanation:
          'Mette in scala ogni immagine proporzionalmente per stare nei margini A4 stampabili senza distorsione.',
      },
      {
        title: 'Convertire una sola foto in PDF',
        input: '1 foto PNG · Dimensioni esatte dell’immagine',
        output: 'foto.pdf (1 pagina alla dimensione nativa dell’immagine, senza margine)',
        explanation:
          'La modalità Dimensioni esatte crea una pagina per immagine alla sua dimensione nativa, senza ritaglio né margine.',
      },
    ],
    benefits: [
      'Integra direttamente i flussi JPG e PNG nativi e converte pulitamente WebP tramite Canvas',
      'Preserva il rapporto d’aspetto completo dell’immagine senza stiramento né ritaglio',
      'Supporta i fogli stampabili A4 / Lettera US oltre a pagine di immagini esatte senza margine',
      'Mantiene foto d’identità, ricevute e documenti privati strettamente offline nella RAM del browser',
    ],
    useCases: [
      'Trasformare le foto di ricevute del telefono in un PDF di spese mensili pulito',
      'Compilare mockup di design o screenshot di interfaccia in un dossier di revisione A4',
      'Convertire pagine di documenti scansionati in un unico PDF scaricabile',
      'Impacchettare tavole di opere di portfolio senza compressione cloud',
    ],
    faqs: [
      {
        question: 'Come gestisce lo strumento le immagini WebP?',
        answer:
          'Poiché la specifica PDF incorpora nativamente JPEG e PNG piuttosto che WebP, lo strumento decodifica le immagini WebP dolcemente tramite HTML5 Canvas in cornici PNG senza perdita prima di incorporarle.',
      },
      {
        question: 'Le foto verticale e orizzontale verranno stirate per stare in A4?',
        answer:
          'No. Le immagini vengono messe in scala proporzionalmente con Math.min(larghezzaMax/larghezzaImg, altezzaMax/altezzaImg) e centrate sulla pagina.',
      },
      {
        question: 'Le miniature di immagini vengono inviate da qualche parte?',
        answer:
          'No. Le anteprime usano URL di oggetto locali temporanei nella scheda del tuo browser.',
      },
      {
        question: 'Lo strumento Immagini in PDF è gratuito?',
        answer:
          'Sì, è gratuito, senza filigrana e senza limiti di numero di immagini convertite.',
      },
      {
        question: 'Quali formati di immagine posso convertire in PDF?',
        answer:
          'JPG, PNG e WebP sono supportati.',
      },
      {
        question: 'Posso convertire una sola immagine in PDF?',
        answer:
          'Sì, un’immagine produce un PDF di una pagina.',
      },
      {
        question: 'Posso riordinare le immagini prima di convertirle in PDF?',
        answer:
          'Sì, usa le frecce su e giù per organizzare l’ordine delle pagine prima di generare il PDF.',
      },
      {
        question: 'Quali dimensioni di pagina sono disponibili per convertire immagini in PDF?',
        answer:
          'A4 Verticale, Lettera US e Dimensioni esatte dell’immagine, che crea una pagina per immagine alla sua dimensione nativa.',
      },
      {
        question: 'Le mie immagini verranno ritagliate quando vengono convertite in PDF?',
        answer:
          'No, le immagini vengono messe in scala proporzionalmente e centrate; niente viene ritagliato né stirato.',
      },
      {
        question: 'Posso aggiungere margini intorno alle mie immagini nel PDF?',
        answer:
          'Sì, definisci un margine (per esempio 24 pt) quando usi le dimensioni di pagina A4 o Lettera US.',
      },
      {
        question: 'La conversione di immagini in PDF riduce la loro qualità?',
        answer:
          'I flussi JPG e PNG vengono incorporati nativamente, e WebP viene convertito tramite Canvas in PNG senza perdita: la qualità è quindi preservata.',
      },
      {
        question: 'Posso convertire foto HEIC del mio iPhone in PDF?',
        answer:
          'Non direttamente; converti prima HEIC in JPG o PNG, poi usa questo strumento.',
      },
      {
        question: 'Le mie foto vengono inviate a un server quando le converto in PDF?',
        answer:
          'No, la conversione viene eseguita localmente nel tuo browser e le anteprime usano URL di oggetto locali temporanei.',
      },
      {
        question: 'Posso usare lo strumento Immagini in PDF su mobile?',
        answer:
          'Sì, funziona nei browser mobili; scegli le immagini direttamente dalla tua fototeca.',
      },
      {
        question: 'Che cosa succede con le immagini molto grandi?',
        answer:
          'Le immagini grandi vengono incorporate a piena risoluzione: il PDF risultante può quindi essere voluminoso; comprimile prima se la dimensione del file conta.',
      },
      {
        question: 'Posso mescolare JPG, PNG e WebP in un unico PDF?',
        answer:
          'Sì, puoi combinare i tre formati in un unico documento.',
      },
      {
        question: 'Le pagine del PDF saranno nello stesso ordine delle mie immagini?',
        answer:
          'Sì, le pagine seguono l’ordine mostrato nella lista delle immagini.',
      },
      {
        question: 'Posso definire un nome di file personalizzato per il PDF?',
        answer:
          'Sì, inserisci il nome di file che preferisci prima di convertire.',
      },
      {
        question: 'Lo strumento conserva la trasparenza delle immagini?',
        answer:
          'La trasparenza PNG viene preservata sulle pagine a dimensioni esatte dell’immagine; sulle pagine A4 o Lettera, l’immagine poggia su uno sfondo di pagina bianco.',
      },
      {
        question: 'Il mio PDF non si è scaricato — che cosa devo fare?',
        answer:
          'Verifica le autorizzazioni di download del tuo browser e riprova; il file viene generato localmente nella tua scheda.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli un file PDF',
        description:
          'Seleziona qualsiasi documento PDF non cifrato; PDF.js legge immediatamente il numero totale di pagine.',
      },
      {
        title: 'Scegli le pagine da convertire',
        description:
          'Inserisci «tutto» o un intervallo di pagine (fino a 20 pagine per lotto), come «1-3, 5».',
      },
      {
        title: 'Scegli formato e scala',
        description:
          'Scegli PNG per un testo nitido o JPG per file più piccoli ricchi di foto, e seleziona una risoluzione di 1,0×, 1,5× o 2,0×.',
      },
      {
        title: 'Converti le pagine',
        description:
          'Avvia il rendering e attendi che appaiano le anteprime di pagine; i lotti più grandi richiedono un po’ più di tempo.',
      },
      {
        title: 'Consulta le anteprime',
        description:
          'Ispeziona ogni miniatura renderizzata per nitidezza e contenuto corretto prima di scaricare.',
      },
      {
        title: 'Scarica le tue immagini',
        description:
          'Fai clic su .PNG o .JPG su qualsiasi scheda di pagina per salvare quell’immagine; ripeti il lotto per le pagine restanti se necessario.',
      },
    ],
    examples: [
      {
        title: 'Esportare diapositive di presentazione per la condivisione social',
        input: 'Pagine: 1-3 · Formato: PNG · Scala: 2,0× (144 DPI)',
        output: '3 immagini di diapositive PNG nitide 2× pronte per LinkedIn o integrazioni di blog',
        explanation:
          'Il rendering di canvas ad alta scala mantiene diagrammi e tipografia nitidi.',
      },
      {
        title: 'Salvare una sola pagina di certificato in JPG',
        input: 'Pagina: 1 · Formato: JPG · Scala: 1,5×',
        output: '1 immagine JPG compatta del certificato, pronta da condividere',
        explanation:
          'Il JPG è adatto alle pagine ricche di foto e produce file più piccoli del PNG.',
      },
    ],
    benefits: [
      'Usa il Web Worker PDF.js integrato in Vite — nessuna richiesta di script CDN esterno',
      'Riempie automaticamente uno sfondo di canvas bianco quando esporta PDF trasparenti in JPG',
      'Permette di mirare a intervalli di pagine esatti invece di convertire un intero file di 100 pagine',
      'Il rendering di canvas privato lato browser protegge i documenti sensibili',
    ],
    useCases: [
      'Trasformare le diapositive di pitch-deck PDF in grafiche di blog o social',
      'Salvare una sola pagina di certificato firmato o biglietto in foto mobile',
      'Generare anteprime di interfaccia nitide di documenti PDF stampabili',
      'Ispezionare visivamente il rendering dei font e dell’impaginazione fuori dalle app PDF dedicate',
    ],
    faqs: [
      {
        question: 'Devo scegliere PNG o JPG per le pagine PDF?',
        answer:
          'Scegli PNG per diapositive, documenti di testo, ricevute e grafici in cui i bordi nitidi contano. Scegli JPG quando esporti brochure ricche di foto per dimensioni di file più piccole.',
      },
      {
        question: 'Perché PDF in Immagini converte fino a 20 pagine per lotto?',
        answer:
          'I canvas ad alta risoluzione 2× consumano molta GPU e RAM per pagina; limitare i lotti a 20 pagine mantiene le schede del browser reattive su telefoni e portatili.',
      },
      {
        question: 'Funziona sui PDF protetti da password?',
        answer:
          'I PDF cifrati devono essere sbloccati prima del rendering locale.',
      },
      {
        question: 'Lo strumento PDF in Immagini è gratuito?',
        answer:
          'Sì, è gratuito, senza filigrana; il rendering avviene localmente nel tuo browser.',
      },
      {
        question: 'Quale risoluzione devo scegliere per i social?',
        answer:
          '2,0× dà i risultati più nitidi per post e integrazioni di blog, mentre 1,0× basta per anteprime rapide.',
      },
      {
        question: 'Posso esportare una sola pagina in immagine?',
        answer:
          'Sì, inserisci quel numero di pagina nel campo di intervallo di pagine.',
      },
      {
        question: 'Posso esportare tutte le pagine di un PDF contemporaneamente?',
        answer:
          'Puoi convertire fino a 20 pagine per lotto; ripeti il processo per i documenti più lunghi.',
      },
      {
        question: 'Perché la mia esportazione JPG mostra uno sfondo bianco?',
        answer:
          'Il JPG non ha trasparenza: le zone PDF trasparenti vengono quindi riempite automaticamente in bianco.',
      },
      {
        question: 'PDF in Immagini mantiene il testo nitido?',
        answer:
          'Sì, le pagine vengono renderizzate a una scala fino a 2× con PDF.js, mantenendo testo e diagrammi nitidi.',
      },
      {
        question: 'Posso scegliere quali pagine convertire in immagini?',
        answer:
          'Sì, digita «tutto» o un intervallo come «1-3, 5» nel campo delle pagine.',
      },
      {
        question: 'I miei file PDF vengono inviati da qualche parte?',
        answer:
          'No, il rendering avviene nel tuo browser tramite un worker PDF.js locale; niente lascia il tuo dispositivo.',
      },
      {
        question: 'Posso usare PDF in Immagini sul mio telefono?',
        answer:
          'Sì, anche se i rendering ad alta risoluzione usano più memoria: i lotti più piccoli funzionano quindi meglio sui telefoni.',
      },
      {
        question: 'Qual è la differenza tra le scale 1,0×, 1,5× e 2,0×?',
        answer:
          'Le scale più alte renderizzano più pixel per pagina, producendo immagini più grandi e più nitide; 2,0× corrisponde a circa 144 DPI.',
      },
      {
        question: 'Posso scaricare tutte le pagine renderizzate in un clic?',
        answer:
          'Ogni scheda di pagina ha il proprio pulsante di download .PNG o .JPG; scarica individualmente le pagine di cui hai bisogno.',
      },
      {
        question: 'I grafici vettoriali e i diagrammi resteranno nitidi?',
        answer:
          'Sì, PDF.js converte il contenuto vettoriale alla scala scelta, quindi grafici e diagrammi restano nitidi.',
      },
      {
        question: 'Perché il rendering richiede tempo sui PDF grandi?',
        answer:
          'Ogni pagina viene disegnata su un canvas ad alta risoluzione; convertire poche pagine alla volta mantiene la scheda reattiva.',
      },
      {
        question: 'Posso convertire un PDF scansionato in immagini?',
        answer:
          'Sì, le pagine scansionate si convertono in immagini esattamente come appaiono nel PDF.',
      },
      {
        question: 'Lo strumento PDF in Immagini funziona offline?',
        answer:
          'Una volta caricata la pagina, il rendering viene eseguito localmente nel tuo browser senza altra richiesta di rete.',
      },
      {
        question: 'La mia immagine renderizzata sembra sfocata — che cosa devo fare?',
        answer:
          'Converti di nuovo alla scala 2,0× e scegli PNG per le pagine ricche di testo.',
      },
      {
        question: 'Posso usare le immagini esportate commercialmente?',
        answer:
          'Le immagini ti appartengono e puoi usarle come il PDF originale; rispetta il diritto d’autore del documento sorgente.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica il tuo PDF',
        description:
          'Seleziona il file PDF contenente pagine storte o capovolte.',
      },
      {
        title: 'Scegli l’angolo di rotazione',
        description:
          'Scegli 90° in senso orario, 90° in senso antiorario o 180°, secondo il modo in cui le pagine sono disallineate.',
      },
      {
        title: 'Scegli la portata delle pagine',
        description:
          'Seleziona Tutte le pagine, Intervalli precisi, Dispari o Pari; per gli intervalli, digita pagine come «2, 5-7».',
      },
      {
        title: 'Visualizza in anteprima l’orientamento attuale',
        description:
          'Verifica quali pagine sono realmente storte per ruotare solo quelle che ne hanno bisogno.',
      },
      {
        title: 'Applica e scarica',
        description:
          'Fai clic su Applica la rotazione e scarica il PDF per salvare definitivamente il file corretto.',
      },
      {
        title: 'Verifica e correggi i resti',
        description:
          'Apri il PDF scaricato; se una pagina è ancora storta, rilancialo con un altro 90° nello stesso senso.',
      },
    ],
    examples: [
      {
        title: 'Correggere un solo grafico finanziario ruotato alla pagina 3',
        input: 'Rotazione: 90° in senso orario · Portata: Intervalli di pagine precisi (3)',
        output: 'Solo la pagina 3 ruota in senso orario; tutte le altre pagine conservano il loro orientamento esistente.',
        explanation:
          'Aggiunge 90° modulo 360 ai metadati di rotazione di pagina esistenti senza convertire il testo in immagine.',
      },
      {
        title: 'Raddrizzare un lotto di scansioni capovolte',
        input: 'Rotazione: 180° · Portata: Tutte le pagine',
        output: 'Tutte le pagine vengono girate e si aprono nel verso giusto in qualsiasi lettore PDF.',
        explanation:
          'La rotazione di 180° viene scritta nel dizionario di pagine e salvata nel file scaricato.',
      },
    ],
    benefits: [
      'Rotazione senza perdita — aggiorna gli indicatori di orientamento delle pagine PDF senza ricomprimere testo o immagini',
      'Preserva pulitamente gli angoli di pagina esistenti (calcola la rotazione relativa modulo 360°)',
      'Mira a intervalli selettivi come «2, 5-7» senza ruotare le pagine dritte',
      'Download istantaneo nel browser senza alcun invio a un server',
    ],
    useCases: [
      'Correggere lotti di scansioni capovolte su mobile o su fotocopiatrici d’ufficio',
      'Ruotare larghi fogli di calcolo in paesaggio in rapporti prevalentemente in verticale',
      'Correggere gli allegati di orientamento misto dopo l’unione di documenti',
      'Preparare depositi di conformità orientati correttamente per i portali',
    ],
    faqs: [
      {
        question: 'La rotazione delle pagine riduce la nitidezza del testo o delle immagini?',
        answer:
          'No. Definire la proprietà di rotazione di pagina del PDF è completamente senza perdita e non ricodifica né i font né le immagini incorporate.',
      },
      {
        question: 'Che cosa succede se una pagina del mio PDF era già ruotata di 90°?',
        answer:
          'Il rotatore legge l’angolo di rotazione attuale di ogni pagina e aggiunge il delta scelto modulo 360°: i cambiamenti di orientamento sono quindi prevedibili rispetto all’aspetto attuale della pagina.',
      },
      {
        question: 'Posso ruotare una sola pagina in un PDF di 20 pagine?',
        answer:
          'Sì. Scegli «Intervalli di pagine precisi» e digita quel numero di pagina esatto (per esempio «7»).',
      },
      {
        question: 'La rotazione di pagine PDF è gratuita?',
        answer:
          'Sì, è gratuita, senza filigrana né limiti.',
      },
      {
        question: 'Posso ruotare tutte le pagine di un PDF contemporaneamente?',
        answer:
          'Sì, scegli Tutte le pagine e seleziona 90° in senso orario, 90° in senso antiorario o 180°.',
      },
      {
        question: 'Posso ruotare solo le pagine pari o dispari?',
        answer:
          'Sì, scegli la portata Dispari o Pari; è utile per correggere i lotti di scansione fronte-retro.',
      },
      {
        question: 'Con quali angoli posso ruotare le pagine PDF?',
        answer:
          '90° in senso orario, 90° in senso antiorario e 180°.',
      },
      {
        question: 'Posso ruotare una pagina PDF di un angolo personalizzato come 45°?',
        answer:
          'No, solo 90°, 180° e 270° (tramite rotazioni ripetute di 90°) sono supportati, perché la rotazione PDF è definita in quarti di giro.',
      },
      {
        question: 'La rotazione è permanente?',
        answer:
          'Sì, la rotazione viene scritta nel dizionario di pagine del PDF e salvata nel file scaricato.',
      },
      {
        question: 'La rotazione modifica la dimensione del file PDF?',
        answer:
          'Appena; solo i metadati di orientamento cambiano, quindi il file mantiene quasi la stessa dimensione.',
      },
      {
        question: 'Posso ruotare un PDF protetto da password?',
        answer:
          'No, i PDF cifrati devono prima essere sbloccati.',
      },
      {
        question: 'La rotazione di pagine PDF invia il mio file?',
        answer:
          'No, la rotazione viene eseguita interamente nel tuo browser; il tuo file non lascia mai il tuo dispositivo.',
      },
      {
        question: 'Posso ruotare pagine in un PDF scansionato?',
        answer:
          'Sì, le pagine scansionate ruotano come le pagine di testo.',
      },
      {
        question: 'La rotazione correggerà un PDF che si apre storto in ogni lettore?',
        answer:
          'Sì, il file salvato si apre nell’orientamento corretto in qualsiasi lettore PDF.',
      },
      {
        question: 'Posso ruotare pagine diverse di importi diversi?',
        answer:
          'Esegui lo strumento una volta per angolo: ruota un intervallo, scarica, poi ruota un altro intervallo nel risultato.',
      },
      {
        question: 'Che cosa devo fare se una pagina è ancora storta dopo la rotazione?',
        answer:
          'Verifica prima l’aspetto attuale della pagina, poi aggiungi un altro 90° nello stesso senso, perché la rotazione è relativa all’angolo attuale.',
      },
      {
        question: 'La rotazione influisce sui link cliccabili o sui campi di modulo?',
        answer:
          'I link e le annotazioni ruotano con la pagina, quindi restano allineati con il contenuto.',
      },
      {
        question: 'Posso usare la rotazione di pagine PDF sul mio telefono?',
        answer:
          'Sì, funziona nei browser mobili moderni.',
      },
      {
        question: 'Il PDF ruotato si stamperà correttamente?',
        answer:
          'Sì, le stampanti seguono l’orientamento di pagina registrato: le pagine ruotate si stampano quindi nel verso giusto.',
      },
      {
        question: 'Il mio download non si è avviato — che cosa devo fare?',
        answer:
          'Autorizza i download per questo sito nelle impostazioni del tuo browser e fai di nuovo clic su Applica la rotazione; il file viene generato localmente.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica il tuo documento PDF',
        description:
          'Seleziona un PDF non cifrato; le anteprime di miniature si renderizzano localmente per un massimo di 30 pagine (con schede di pagine e dimensioni per tutte le pagine).',
      },
      {
        title: 'Consulta le schede di pagine',
        description:
          'Ogni scheda mostra la sua posizione di output attuale e il suo indice di pagina originale, in modo che tu possa individuare pagine vuote, duplicate o mal collocate prima di modificare qualsiasi cosa.',
      },
      {
        title: 'Riordina, duplica o elimina',
        description:
          'Usa i pulsanti freccia per modificare la sequenza, l’icona di copia per duplicare un foglio o l’icona di cestino per eliminare le pagine indesiderate.',
      },
      {
        title: 'Verifica il nuovo ordine delle pagine',
        description:
          'Scorri le posizioni aggiornate di ogni scheda per confermare che allegati, pezzi e pagine di copertina si trovino esattamente dove devono stare.',
      },
      {
        title: 'Salva il PDF organizzato',
        description:
          'Fai clic su Salva il PDF riordinato per compilare e scaricare il tuo documento pulito.',
      },
      {
        title: 'Suggerimento: mantieni il file originale',
        description:
          'Lo strumento non modifica mai il tuo file sorgente: mantienilo quindi come backup. Se un PDF non si carica, verifica che non sia protetto da password o cifrato.',
      },
    ],
    examples: [
      {
        title: 'Eliminare una pagina finale vuota e avanzare un allegato',
        input: 'PDF di 5 pagine · Elimina la pagina 5 · Sposta la pagina 4 in posizione nº 2',
        output: 'PDF aggiornato di 4 pagine con il contenuto vettoriale intatto',
        explanation:
          'Ricostruisce pulitamente l’albero delle pagine del documento nell’ordine selezionato.',
      },
      {
        title: 'Duplicare una pagina di modulo stampabile',
        input: 'PDF di 3 pagine · Duplica la pagina 2',
        output: 'PDF di 4 pagine con la pagina di modulo ripetuta due volte',
        explanation:
          'La copia di pagina duplica il foglio esatto, utile per moduli o fogli di firma ripetuti.',
      },
    ],
    benefits: [
      'Combina le miniature visive PDF.js con la copia di pagine pdf-lib senza perdita',
      'Protegge dal salvataggio accidentale di un PDF vuoto di 0 pagine',
      'Mostra sia la posizione di output attuale sia l’indice di pagina originale',
      'Nessun invio di file per i dossier HR, legali o medici riservati',
    ],
    useCases: [
      'Eliminare le pagine vuote accidentali prodotte dagli scanner fronte-retro',
      'Spostare gli allegati o i pezzi mal collocati nell’ordine giusto',
      'Duplicare le pagine di moduli stampabili o i fogli di firma in un pacchetto',
      'Pulire i PDF combinati prima di inviarli ai clienti',
    ],
    faqs: [
      {
        question: 'Perché le miniature si renderizzano solo per le prime 30 pagine?',
        answer:
          'Per mantenere la RAM del browser veloce sui documenti voluminosi, le miniature in diretta si renderizzano per le prime 30 pagine, mentre ogni pagina resta interamente riordinabile ed eliminabile tramite la sua scheda.',
      },
      {
        question: 'Il riordino delle pagine appiattisce il testo in immagini?',
        answer:
          'No. Le miniature servono solo all’anteprima visiva nell’interfaccia; il risultato salvato usa pdf-lib copyPages() per preservare il testo vettoriale originale e i link.',
      },
      {
        question: 'Posso annullare l’eliminazione di tutte le pagine?',
        answer:
          'L’editor richiede che resti almeno 1 pagina, e il ricaricamento del file sorgente intatto ripristina l’originale completo in qualsiasi momento.',
      },
      {
        question: 'Lo strumento Riordina ed Elimina Pagine PDF è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e viene eseguito interamente nel tuo browser.',
      },
      {
        question: 'Il mio PDF viene inviato a un server quando riordino le sue pagine?',
        answer:
          'No. Il tuo PDF viene elaborato localmente nel tuo browser e non viene mai inviato: i documenti riservati restano quindi sul tuo dispositivo.',
      },
      {
        question: 'Posso eliminare più pagine contemporaneamente?',
        answer:
          'Ogni scheda di pagina ha la propria icona di cestino: elimina quindi le pagine una per una; il numero di pagine e le posizioni si aggiornano immediatamente dopo ogni eliminazione.',
      },
      {
        question: 'Posso spostare una pagina direttamente all’inizio o alla fine del PDF?',
        answer:
          'Usa i pulsanti freccia più volte per portare una pagina alla prima o all’ultima posizione, verificando la sua posizione di output aggiornata sulla scheda man mano.',
      },
      {
        question: 'Che cosa succede se elimino la pagina sbagliata per errore?',
        answer:
          'Non c’è un pulsante di annullamento: scarica quindi semplicemente di nuovo il tuo file originale intatto e rifai le modifiche; lo strumento non modifica mai il tuo file sorgente.',
      },
      {
        question: 'Il riordino delle pagine modifica il testo o le immagini che contengono?',
        answer:
          'No. Le pagine vengono copiate tali e quali con pdf-lib: testo vettoriale, immagini e font conservano quindi la loro qualità originale.',
      },
      {
        question: 'Posso duplicare la stessa pagina più volte?',
        answer:
          'Sì. Fai clic sull’icona di copia di una pagina quante volte necessario, per esempio per ripetere un modulo stampabile o un foglio di firma in un pacchetto.',
      },
      {
        question: 'Quali PDF funzionano con lo strumento Riordina ed Elimina Pagine PDF?',
        answer:
          'Qualsiasi PDF non cifrato funziona. I PDF protetti da password o cifrati non possono essere aperti da questo strumento di browser.',
      },
      {
        question: 'Quante pagine può avere il mio PDF?',
        answer:
          'Non c’è un limite fisso di pagine; le miniature in diretta si renderizzano per le prime 30 pagine, mentre ogni pagina riceve sempre una scheda con la sua posizione e il suo indice originale.',
      },
      {
        question: 'La dimensione del mio file cambierà dopo il riordino delle pagine?',
        answer:
          'L’eliminazione di pagine rende il file più piccolo, mentre il solo riordino mantiene la dimensione quasi identica, perché il documento viene ricostruito dalle stesse pagine.',
      },
      {
        question: 'Posso riordinare le pagine di un PDF scansionato?',
        answer:
          'Sì. Le pagine vengono copiate intere, che contengano testo o immagini scansionate: i documenti scansionati si riordinano quindi come qualsiasi altro PDF.',
      },
      {
        question: 'Lo strumento Riordina ed Elimina Pagine PDF funziona su mobile?',
        answer:
          'Sì, funziona in qualsiasi browser mobile moderno, anche se le schede di pagine e le miniature sono più facili da gestire su uno schermo di computer più grande.',
      },
      {
        question: 'Posso ruotare le pagine mentre le riordino?',
        answer:
          'No. La rotazione è un’attività distinta: usa quindi prima lo strumento Rotazione di Pagine PDF, poi riordina qui le pagine ruotate.',
      },
      {
        question: 'Come distinguere le pagine nell’editor?',
        answer:
          'Ogni scheda mostra un’anteprima in miniatura quando disponibile, oltre alla sua posizione di output attuale e al suo numero di pagina originale nel file sorgente.',
      },
      {
        question: 'Posso unire due PDF insieme con questo strumento?',
        answer:
          'No. Questo strumento riordina solo le pagine di un singolo PDF; usa prima lo strumento Unisci PDF per combinare documenti distinti.',
      },
      {
        question: 'L’eliminazione di pagine elimina segnalibri o link interni?',
        answer:
          'Il contenuto delle pagine viene preservato, ma i segnalibri a livello di documento possono non sopravvivere alla ricostruzione: verifica quindi il file salvato prima di condividerlo.',
      },
      {
        question: 'Quale file ottengo dopo aver salvato il PDF riordinato?',
        answer:
          'Un PDF completamente nuovo si scarica sul tuo dispositivo nell’ordine di pagine scelto, mentre il tuo file originale resta intatto sul tuo computer.',
      },
    ],
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
        'Aggiungi una filigrana PDF ai tuoi documenti nel tuo browser: testo diagonale o centrato, dimensione, opacità, angolo e colore, senza invio — gratis e privato.',
      primaryKeyword: 'filigrana pdf',
      secondaryKeywords: [
        'aggiungi timbro riservato a pdf',
        'filigrana pdf nel browser',
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
    instructions: [
      {
        title: 'Scegli il tuo file PDF',
        description:
          'Carica qualsiasi documento PDF non cifrato localmente in memoria.',
      },
      {
        title: 'Digita il testo della tua filigrana',
        description:
          'Inserisci il timbro di cui hai bisogno, come RISERVATO, BOZZA o NON DISTRIBUIRE, in caratteri latini standard.',
      },
      {
        title: 'Personalizza il timbro di filigrana',
        description:
          'Scegli Grigio neutro, Indaco di marca o Rosso timbro, e regola i cursori di dimensione, opacità e angolo finché il timbro è corretto.',
      },
      {
        title: 'Scegli le pagine da timbrare',
        description:
          'Lascia l’impostazione predefinita per filigranare ogni pagina, oppure spunta Prima pagina solamente quando solo la copertina ha bisogno di un timbro di classificazione.',
      },
      {
        title: 'Applica e scarica',
        description:
          'Spunta eventualmente Prima pagina solamente, poi fai clic su Applica la filigrana e scarica.',
      },
      {
        title: 'Suggerimento: verifica la leggibilità prima di condividere',
        description:
          'Apri il file scaricato e conferma che il corpo del testo resti facile da leggere; se il timbro è troppo forte, rilancialo con un’opacità più bassa come 15–22 %.',
      },
    ],
    examples: [
      {
        title: 'Timbrare una bozza di proposta prima della pubblicazione',
        input: 'Testo: BOZZA · Font: 54 pt · Opacità: 22 % · Angolo: 40°',
        output: 'Sovrapposizione vettoriale BOZZA diagonale centrata semitrasparente su ogni pagina',
        explanation:
          'Usa l’opacità alfa in modo che il testo del corpo sottostante resti interamente leggibile.',
      },
      {
        title: 'Timbrare solo la copertina',
        input: 'Testo: RISERVATO · Prima pagina solamente: spuntato',
        output: 'Timbro RISERVATO solo sulla pagina 1; le altre pagine restano pulite',
        explanation:
          'La modalità Prima pagina solamente è adatta ai timbri di classificazione della copertina.',
      },
    ],
    benefits: [
      'Usa una tipografia vettoriale HelveticaBold standard nitida piuttosto che bitmap sfocati',
      'Supporta un’opacità alfa semitrasparente dall’8 % al 65 % in modo che il contenuto resti leggibile',
      'Offre la modalità Prima pagina solamente per i timbri di classificazione di copertina',
      'Mantiene le bozze non pubblicate strettamente fuori dai server cloud esterni',
    ],
    useCases: [
      'Contrassegnare contratti bozza, capitolati o pitch deck prima della revisione esterna',
      'Aggiungere menzioni RISERVATO o SOLO USO INTERNO ai dossier HR o del consiglio',
      'Etichettare portfolio di campioni o bozze di anteprima',
      'Applicare timbri di stato di revisione coerenti prima dell’archiviazione',
    ],
    faqs: [
      {
        question: 'I destinatari possono modificare o rimuovere la filigrana in editor PDF completi?',
        answer:
          'Le filigrane di testo disegnate con pdf-lib sono oggetti di contenuto vettoriale standard sulla pagina. Se hai bisogno di pagine appiattite non selezionabili in cui le filigrane non possono essere selezionate come testo, converti il PDF filigranato tramite i nostri strumenti PDF in Immagini e Immagini in PDF.',
      },
      {
        question: 'La filigrana funziona sulle pagine verticale e orizzontale?',
        answer:
          'Sì. Le coordinate si calcolano dinamicamente dalla larghezza e dall’altezza di ogni singola pagina.',
      },
      {
        question: 'Quali caratteri sono supportati nella stringa di filigrana?',
        answer:
          'I caratteri WinAnsi standard (ASCII latino e simboli comuni dell’Europa occidentale) supportati da PDF HelveticaBold.',
      },
      {
        question: 'Lo strumento di filigrana PDF è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e viene eseguito interamente nel tuo browser.',
      },
      {
        question: 'Il mio PDF viene inviato a un server quando aggiungo una filigrana?',
        answer:
          'No. Il file viene elaborato localmente nel tuo browser e non viene mai inviato: le bozze non pubblicate restano quindi private.',
      },
      {
        question: 'Posso filigranare solo alcune pagine di un PDF?',
        answer:
          'Puoi filigranare ogni pagina o solo la prima pagina con l’opzione Prima pagina solamente; la timbratura di un intervallo medio personalizzato non è supportata.',
      },
      {
        question: 'Quale testo posso usare come filigrana PDF?',
        answer:
          'Qualsiasi breve etichetta in caratteri latini standard, come RISERVATO, BOZZA, SOLO USO INTERNO o il nome della tua azienda.',
      },
      {
        question: 'Posso usare il nome della mia azienda come filigrana?',
        answer:
          'Sì. Digita il nome della tua azienda o marca come testo di filigrana e verrà timbrato sulle pagine scelte.',
      },
      {
        question: 'Posso cambiare il colore della filigrana PDF?',
        answer:
          'Sì. Scegli Grigio neutro per una marca discreta, Indaco di marca per far corrispondere una marca, o Rosso timbro per una nota di classificazione audace.',
      },
      {
        question: 'Quale trasparenza può avere la filigrana?',
        answer:
          'L’opacità è regolabile dall’8 % al 65 %: puoi quindi mantenere il timbro visibile mentre il testo sotto resta interamente leggibile.',
      },
      {
        question: 'Posso rendere la filigrana orizzontale invece di diagonale?',
        answer:
          'Sì. Regola il cursore di angolo su 0 gradi per un timbro diritto orizzontale, oppure scegli qualsiasi angolo fino a una diagonale completa.',
      },
      {
        question: 'Posso aggiungere una filigrana di immagine o logo a un PDF?',
        answer:
          'No. Questo strumento timbra solo filigrane di testo; le sovrapposizioni di immagini e loghi non sono supportate.',
      },
      {
        question: 'La filigrana si stamperà quando il PDF viene stampato?',
        answer:
          'Sì. La filigrana è un vero contenuto vettoriale disegnato su ogni pagina: appare quindi nelle stampe come a schermo.',
      },
      {
        question: 'La filigranatura modifica il testo originale del mio PDF?',
        answer:
          'No. La filigrana viene disegnata come sovrapposizione sopra le pagine e non modifica né sostituisce alcun contenuto esistente.',
      },
      {
        question: 'Posso filigranare un PDF protetto da password?',
        answer:
          'No. Solo i PDF non cifrati possono essere aperti da questo strumento di browser: rimuovi quindi prima la password.',
      },
      {
        question: 'Questo strumento può rimuovere una filigrana da un PDF?',
        answer:
          'No. Aggiunge solo filigrane; la rimozione di una filigrana esistente richiede un editor PDF completo.',
      },
      {
        question: 'Quale font usa la filigrana PDF?',
        answer:
          'Le filigrane usano una tipografia vettoriale HelveticaBold standard nitida, che resta nitida a qualsiasi dimensione invece di diventare sfocata come un bitmap.',
      },
      {
        question: 'La filigrana resterà leggibile su pagine scure o affollate?',
        answer:
          'Dipende dallo sfondo della pagina: scegli quindi un colore contrastante e un’opacità moderata, poi apri il file scaricato per verificare il risultato.',
      },
      {
        question: 'Posso filigranare un PDF scansionato?',
        answer:
          'Sì. La filigrana viene disegnata su ogni pagina, che la pagina contenga testo o un’immagine scansionata.',
      },
      {
        question: 'L’aggiunta di una filigrana rende il mio file PDF molto più voluminoso?',
        answer:
          'Solo leggermente. Il testo vettoriale aggiunge pochissimi dati: la dimensione del file aumenta quindi di una piccola quantità rispetto ai timbri basati su immagini.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica il tuo documento PDF',
        description:
          'Scegli il file PDF non numerato o unito che vuoi paginare.',
      },
      {
        title: 'Scegli il formato di numero',
        description:
          'Scegli «Pagina 1 di N» per i pacchetti formali, «1 / N» per un aspetto compatto, o cifre sole per un piè di pagina minimo.',
      },
      {
        title: 'Definisci posizione e dimensione',
        description:
          'Seleziona Basso centro, Basso destra, Basso sinistra o Alto destra, e regola la dimensione font in modo che i numeri si collochino puliti nel margine.',
      },
      {
        title: 'Definisci il numero iniziale e il salto di copertina',
        description:
          'Modifica il numero iniziale per continuare un insieme in più volumi, e attiva Salta la copertina quando la pagina di titolo deve restare pulita.',
      },
      {
        title: 'Applica e scarica',
        description:
          'Fai clic su Aggiungi i numeri di pagina e scarica per esportare il PDF paginato localmente.',
      },
      {
        title: 'Suggerimento: verifica le pagine con piè di pagina stretti',
        description:
          'Apri il file scaricato e guarda le pagine che hanno già testo di piè di pagina; se un numero è troppo vicino, rilancialo con una dimensione font più piccola.',
      },
    ],
    examples: [
      {
        title: 'Numerare un pacchetto unito iniziando dopo una copertina',
        input: 'PDF di 5 pagine · Formato: Pagina 1 di N · Salta la copertina: spuntato',
        output: 'Pagina 1 intatta; pagine 2–5 timbrate «Pagina 1 di 4» fino a «Pagina 4 di 4»',
        explanation:
          'Ideale dopo aver combinato copertine e allegati con Unisci PDF.',
      },
      {
        title: 'Continuare la numerazione di un volume 2',
        input: 'PDF di 8 pagine · Formato: 1 / N · Numero iniziale: 15',
        output: 'Pagine numerate da 15 a 22',
        explanation:
          'Il numero iniziale personalizzato permette di continuare un insieme in più volumi.',
      },
    ],
    benefits: [
      'Corregge la paginazione rotta subito dopo l’unione di rapporti PDF distinti',
      'Supporta il salto della pagina 1 in modo che le copertine di titolo restino pulite',
      'Il numero iniziale personalizzabile supporta gli insiemi di documenti in più volumi',
      'Misura la larghezza esatta del testo per dimensione di pagina per una centratura e un allineamento a destra nitidi',
    ],
    useCases: [
      'Paginare le proposte clienti e le gare d’appalto combinate dopo Unisci PDF',
      'Numerare i depositi giudiziari, gli allegati o i capitoli di tesi',
      'Continuare la numerazione sequenziale dalla pagina 15 in un volume Parte 2',
      'Aggiungere numeri discreti in basso a destra alle guide di studio stampate',
    ],
    faqs: [
      {
        question: 'Cancellerà il testo esistente vicino al margine inferiore?',
        answer:
          'Lo strumento disegna cifre nitide con uno spostamento di margine di 28 pt senza coprire gli sfondi esistenti: ispeziona quindi le pagine che hanno già piè di pagina stretti.',
      },
      {
        question: 'Come «Salta la copertina» influisce sul totale in «Pagina X di N»?',
        answer:
          'Quando questa opzione è attivata, la pagina 1 non riceve alcuna etichetta e le pagine restanti contano pulitamente da 1 fino a (numero totale di pagine − 1) in modo che i totali restino coerenti.',
      },
      {
        question: 'Posso iniziare la numerazione alla pagina 10 invece di 1?',
        answer:
          'Sì. Modifica il numero iniziale su 10 per numerare i volumi sequenziali da 10.',
      },
      {
        question: 'Lo strumento Aggiungi numeri di pagina al PDF è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e viene eseguito interamente nel tuo browser.',
      },
      {
        question: 'Il mio PDF viene inviato a un server quando aggiungo numeri di pagina?',
        answer:
          'No. Il file viene elaborato localmente nel tuo browser e non viene mai inviato: i tuoi documenti restano quindi privati.',
      },
      {
        question: 'Quali formati di numerazione di pagina posso scegliere?',
        answer:
          'Puoi scegliere «Pagina 1 di N», lo stile compatto «1 / N» o cifre sole senza alcuna etichetta.',
      },
      {
        question: 'Dove sulla pagina possono apparire i numeri?',
        answer:
          'Scegli Basso centro, Basso destra, Basso sinistra o Alto destra, secondo dove i tuoi margini hanno spazio libero.',
      },
      {
        question: 'Posso saltare la numerazione della copertina?',
        answer:
          'Sì. Attiva Salta la copertina e la pagina 1 resta pulita mentre la numerazione inizia alla pagina 2.',
      },
      {
        question: 'Lo strumento rinumera un PDF che ha già numeri di pagina?',
        answer:
          'No. Timbra nuovi numeri accanto a quelli esistenti: rimuovi quindi prima i vecchi numeri se vuoi un solo insieme.',
      },
      {
        question: 'Posso cambiare la dimensione font dei numeri di pagina?',
        answer:
          'Sì. Regola l’impostazione di dimensione font in modo che i numeri siano leggibili senza affollare il tuo piè di pagina o intestazione.',
      },
      {
        question: 'La numerazione delle pagine funziona sulle pagine in paesaggio?',
        answer:
          'Sì. Lo strumento misura la larghezza esatta del testo per dimensione di pagina: i numeri restano quindi centrati o allineati sulle pagine verticale e orizzontale.',
      },
      {
        question: 'Posso numerare solo alcune pagine di un PDF?',
        answer:
          'No. La numerazione si applica a ogni pagina salvo un’eventuale copertina saltata; la numerazione di un intervallo personalizzato non è supportata.',
      },
      {
        question: 'Che cosa succede se il mio PDF ha già numeri di pagina?',
        answer:
          'I nuovi numeri vengono timbrati in aggiunta ai vecchi, il che può sembrare duplicato: verifica quindi il risultato e pulisci prima l’originale se necessario.',
      },
      {
        question: 'Posso usare cifre romane per i numeri di pagina?',
        answer:
          'No. Lo strumento numera le pagine solo con cifre arabe standard.',
      },
      {
        question: 'Posso aggiungere numeri di pagina a un PDF scansionato?',
        answer:
          'Sì. I numeri vengono disegnati su ogni pagina come testo vettoriale, che la pagina contenga testo o un’immagine scansionata.',
      },
      {
        question: 'Posso mettere i numeri di pagina nell’intestazione invece del piè di pagina?',
        answer:
          'Sì, scegli la posizione Alto destra per la numerazione di intestazione; il posizionamento in alto al centro non è proposto.',
      },
      {
        question: 'I numeri di pagina timbrati saranno testo selezionabile?',
        answer:
          'Sì. I numeri vengono disegnati come testo vettoriale nitido: i lettori possono quindi selezionarli e copiarli come testo PDF ordinario.',
      },
      {
        question: 'Posso numerare un PDF protetto da password?',
        answer:
          'No. Solo i PDF non cifrati possono essere aperti da questo strumento di browser: rimuovi quindi prima la password.',
      },
      {
        question: 'Posso aggiungere un prefisso come «Sezione 2 – Pagina 3»?',
        answer:
          'No. Lo strumento offre solo i tre formati di numeri: i prefissi personalizzati o le etichette di sezione non possono quindi essere aggiunti.',
      },
      {
        question: 'L’aggiunta di numeri di pagina modifica il contenuto del mio PDF?',
        answer:
          'No. Solo le etichette di numeri vengono aggiunte; il tuo testo, le tue immagini e la tua impaginazione esistenti restano esattamente come erano.',
      },
    ],
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
    instructions: [
      {
        title: 'Carica un file PDF',
        description:
          'Seleziona qualsiasi PDF non cifrato; i campi di metadati esistenti e le dimensioni di pagina si riempiono automaticamente.',
      },
      {
        title: 'Consulta i metadati attuali',
        description:
          'Leggi i campi Titolo, Autore, Oggetto, Parole chiave, Creatore e Produttore, oltre al numero di pagine e alle dimensioni esatte delle pagine, per vedere ciò che è memorizzato.',
      },
      {
        title: 'Modifica o pulisci i campi',
        description:
          'Aggiorna titolo, autore, oggetto e parole chiave per più chiarezza, oppure fai clic su Rimuovi tutti i campi di metadati per la privacy.',
      },
      {
        title: 'Rimuovi tutti i metadati per la privacy',
        description:
          'Usa Rimuovi tutti i campi di metadati prima di condividere un file pubblicamente per cancellare nomi di autori e versioni di software in un clic.',
      },
      {
        title: 'Salva e scarica',
        description:
          'Fai clic su Salva i metadati e scarica il PDF per esportare una copia appena etichettata.',
      },
      {
        title: 'Suggerimento: verifica il file salvato',
        description:
          'Riapri il PDF scaricato in questo strumento per confermare il nuovo titolo e i campi di autore cancellati, perché le modifiche si applicano solo alla copia salvata.',
      },
    ],
    examples: [
      {
        title: 'Anonimizzare un PDF esportato da Word o Illustrator',
        input: 'Autore: «John Doe» · Creatore: «Microsoft® Word 2021»',
        output: 'Fai clic su Rimuovi tutti i campi di metadati → Salva un PDF pulito con Autore/Creatore vuoti',
        explanation:
          'Rimuove nomi di dipendenti e versioni di software prima dell’hosting web pubblico.',
      },
      {
        title: 'Correggere il titolo mostrato nella scheda del browser',
        input: 'Titolo: «Senza titolo-2» · File: rapporto-annuale.pdf',
        output: 'Titolo: «Rapporto annuale 2025» → la scheda del browser mostra il titolo giusto',
        explanation:
          'I browser mostrano la proprietà Titolo del documento PDF piuttosto che il nome del file.',
      },
    ],
    benefits: [
      'Espone i nomi di autori nascosti e le stringhe di software che i browser mostrano nelle schede e nelle proprietà',
      'La rimozione in un clic di tutti i campi di metadati cancella i 6 tag standard del dizionario Info',
      'Aggiorna pulitamente titolo, oggetto e parole chiave separate da virgole, pertinenti per la SEO',
      'Mostra le dimensioni esatte dei punti PDF (`larghezza × altezza pt`) con il numero di pagine',
    ],
    useCases: [
      'Pulire nomi di dipendenti e versioni di strumenti locali prima di pubblicare PDF pubblici',
      'Correggere nomi di file goffi come «Senza titolo-2» mostrati nelle schede PDF Chrome/Safari tramite il titolo',
      'Aggiungere tag di oggetto e parole chiave consultabili ai white paper scaricabili',
      'Controllare localmente le sottomissioni PDF di fornitori o candidati',
    ],
    faqs: [
      {
        question: 'Perché la scheda del mio browser mostra il titolo sbagliato quando apro un PDF?',
        answer:
          'I browser mostrano la proprietà interna Titolo del documento PDF piuttosto che il nome di file .pdf se un tag Titolo è incorporato. Modificare il titolo qui corregge il modo in cui i browser etichettano la scheda.',
      },
      {
        question: 'La cancellazione dei campi di metadati influisce sul contenuto visibile delle pagine?',
        answer:
          'No. La rimozione o l’aggiornamento di titolo, autore, oggetto, parole chiave, creatore e produttore aggiorna solo il dizionario Info del PDF senza modificare le pagine visibili.',
      },
      {
        question: 'Le modifiche vengono cifrate o registrate da qualche parte?',
        answer:
          'Mai. La lettura e la scrittura dei metadati vengono eseguite solo nella memoria del client tramite pdf-lib.',
      },
      {
        question: 'L’editor di metadati PDF è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e viene eseguito interamente nel tuo browser.',
      },
      {
        question: 'Il mio PDF viene inviato a un server quando modifico i suoi metadati?',
        answer:
          'No. La lettura e la scrittura dei metadati avvengono solo nel tuo browser: i tuoi file non vengono quindi mai inviati né registrati.',
      },
      {
        question: 'Quali campi di metadati posso modificare in un PDF?',
        answer:
          'Puoi consultare e modificare titolo, autore, oggetto, parole chiave, creatore e produttore — i sei tag standard del dizionario Info del PDF.',
      },
      {
        question: 'Posso rimuovere solo il nome dell’autore di un PDF?',
        answer:
          'Sì. Cancella semplicemente il campo Autore e salva, lasciando titolo, oggetto e gli altri tag intatti.',
      },
      {
        question: 'Che cosa fa «Rimuovi tutti i campi di metadati»?',
        answer:
          'Cancella i sei tag standard del dizionario Info insieme, rimuovendo nomi di autori, stringhe di software e titoli prima che tu condivida il file.',
      },
      {
        question: 'La modifica del titolo può cambiare l’aspetto del PDF nei risultati di ricerca?',
        answer:
          'Modificare il titolo cambia l’etichetta che i browser mostrano nella scheda PDF, ma ciò non garantisce alcun posizionamento né estratto di ricerca particolare.',
      },
      {
        question: 'La rimozione dei metadati rimuove segnalibri o link?',
        answer:
          'No. La rimozione aggiorna solo il dizionario Info: segnalibri, link e contenuto visibile delle pagine restano invariati.',
      },
      {
        question: 'Posso consultare i metadati PDF senza modificare niente?',
        answer:
          'Sì. I campi si riempiono appena carichi un file, e niente viene modificato salvo che tu faccia clic su Salva i metadati e scarica il PDF.',
      },
      {
        question: 'Che cosa sono i campi Creatore e Produttore in un PDF?',
        answer:
          'Creatore nomina l’applicazione che ha creato il documento, come Microsoft Word, mentre Produttore nomina il software che l’ha convertito in PDF.',
      },
      {
        question: 'Posso aggiungere parole chiave a un PDF per una ricerca migliore?',
        answer:
          'Sì. Inserisci parole chiave separate da virgole nell’editor di metadati, e vengono memorizzate nel PDF per gli strumenti di ricerca che le leggono.',
      },
      {
        question: 'La dimensione del file cambierà dopo la modifica dei metadati PDF?',
        answer:
          'Solo di una quantità infinitesima. I metadati sono un piccolo blocco di testo: la loro modifica o rimozione influisce quindi appena sulla dimensione globale del file.',
      },
      {
        question: 'Posso modificare i metadati di un PDF scansionato?',
        answer:
          'Sì. I metadati vivono nell’intestazione del documento e sono indipendenti dal contenuto delle pagine: i PDF scansionati funzionano quindi come quelli basati su testo.',
      },
      {
        question: 'Posso modificare i metadati XMP con questo strumento?',
        answer:
          'No. Questo strumento modifica solo i sei tag standard del dizionario Info; i pacchetti di metadati XMP estesi non vengono modificati.',
      },
      {
        question: 'Posso modificare i metadati di un PDF cifrato?',
        answer:
          'No. Solo i PDF non cifrati possono essere aperti da questo strumento di browser: rimuovi quindi prima la password.',
      },
      {
        question: 'L’editor di metadati PDF mostra la dimensione di pagina?',
        answer:
          'Sì. Mostra le dimensioni esatte delle pagine in punti (larghezza × altezza) con il numero di pagine per ogni file caricato.',
      },
      {
        question: 'La rimozione dei metadati rimuoverà tutte le informazioni personali di un PDF?',
        answer:
          'Rimuove i sei tag Info, ma i dettagli personali digitati visibilmente sulle pagine stesse, come un nome nel corpo del testo, restano.',
      },
      {
        question: 'Devo scaricare il file per applicare le modifiche di metadati?',
        answer:
          'Sì. Fare clic su Salva i metadati e scarica il PDF crea un nuovo file con le tue modifiche, mentre il tuo file originale resta intatto.',
      },
    ],
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
    instructions: [
      {
        title: 'Seleziona un documento PDF',
        description:
          'Scegli qualsiasi file PDF non cifrato; PDF.js analizza localmente il flusso di testo incorporato di ogni pagina.',
      },
      {
        title: 'Consulta il testo estratto',
        description:
          'Leggi il risultato e verifica il numero di pagine, il numero di parole e la dimensione in byte UTF-8 indicati per confermare che l’estrazione sembri completa.',
      },
      {
        title: 'Attiva i marcatori di pagina',
        description:
          'Mantieni le intestazioni di pagina attivate per citazioni strutturate o deselezionale per una prosa continua.',
      },
      {
        title: 'Verifica le pagine scansionate',
        description:
          'Se lo strumento segnala 0 caratteri, il PDF è probabilmente un file scansionato composto solo di immagini, senza livello di testo da estrarre.',
      },
      {
        title: 'Copia o esporta in .txt',
        description:
          'Copia il testo estratto nel tuo editor o scarica una trascrizione .txt pulita in UTF-8.',
      },
      {
        title: 'Suggerimento: correggi il testo confuso o mancante',
        description:
          'Se i caratteri sembrano scorretti, il PDF sorgente usa forse un font personalizzato senza mappatura Unicode appropriata; prova il documento originale o una copia appena esportata.',
      },
    ],
    examples: [
      {
        title: 'Estrarre una copia leggibile di un white paper di più pagine',
        input: 'white-paper.pdf (8 pagine, livello di testo incorporato)',
        output: 'Testo semplice strutturato con separatori --- Pagina 1 ---, numero di parole e download .txt',
        explanation:
          'Estrae pulitamente gli elementi di testo PDF sottostanti senza i problemi di evidenziazione e copia manuali.',
      },
      {
        title: 'Verificare se un PDF archiviato contiene testo consultabile',
        input: 'archivio.pdf (12 pagine)',
        output: 'Testo estratto con 0 caratteri su alcune pagine — pagine scansionate rilevate',
        explanation:
          'Lo strumento segnala onestamente le pagine senza livello di testo invece di restituire un risultato vuoto e fuorviante.',
      },
    ],
    benefits: [
      'Avverte in tutta trasparenza se un PDF è scansionato o composto solo di immagini (livello di testo 0, OCR non eseguito offline)',
      'Preserva interruzioni di pagina pulite tramite marcatori --- Pagina N --- attivabili',
      'Indica il numero di pagine estratte, il numero di parole e la dimensione in byte UTF-8',
      'Primo passaggio ideale prima di inviare il testo al contatore di parole o a Trova e sostituisci',
    ],
    useCases: [
      'Estrarre testo semplice pulito da white paper, programmi o documentazioni PDF',
      'Verificare il numero di parole dei saggi PDF formattati con il nostro contatore di parole',
      'Verificare se un PDF archiviato contiene un livello di testo consultabile piuttosto che scansioni piatte',
      'Esportare gli ordini del giorno di riunioni PDF in note Markdown in testo semplice',
    ],
    faqs: [
      {
        question: 'Perché un PDF scansionato ha estratto 0 caratteri?',
        answer:
          'I PDF di scanner registrano spesso le pagine solo come immagini bitmap piatte senza livello di testo OCR incorporato. Questo strumento di browser legge direttamente i flussi di testo PDF esistenti e indica onestamente che l’OCR offline non è incluso.',
      },
      {
        question: 'Perché le tabelle complesse a più colonne passano a volte a capo?',
        answer:
          'I file PDF memorizzano il testo posizionato per coordinate X/Y piuttosto che come tabelle HTML semantiche: PDF.js emette quindi gli elementi di testo nell’ordine del flusso con indici di fine riga.',
      },
      {
        question: 'Il mio PDF viene inviato per estrarre il testo?',
        answer:
          'No. PDF.js analizza ed estrae i flussi di testo strettamente nella scheda del tuo browser.',
      },
      {
        question: 'L’estrattore di testo PDF è gratuito?',
        answer:
          'Sì, è completamente gratuito, senza registrazione, e viene eseguito interamente nel tuo browser.',
      },
      {
        question: 'In quali formati di file posso esportare il testo estratto?',
        answer:
          'Puoi copiare il testo semplice negli appunti o scaricarlo come trascrizione .txt pulita in UTF-8.',
      },
      {
        question: 'Posso estrarre il testo di una sola pagina di un PDF?',
        answer:
          'L’estrazione copre tutto il documento, ma i marcatori facoltativi --- Pagina N --- permettono di trovare e copiare facilmente solo la sezione di cui hai bisogno.',
      },
      {
        question: 'Perché alcuni testi mancano nel risultato estratto?',
        answer:
          'Il testo memorizzato come immagine, o disegnato con un font personalizzato senza mappa Unicode, non ha un flusso di testo leggibile che PDF.js possa estrarre.',
      },
      {
        question: 'L’estrattore di testo PDF include l’OCR per le pagine scansionate?',
        answer:
          'No. Legge solo il livello di testo incorporato esistente e non esegue OCR: le pagine scansionate composte solo di immagini non restituiscono quindi alcun testo.',
      },
      {
        question: 'Posso estrarre il testo di un PDF in un’altra lingua?',
        answer:
          'Sì. Il testo Unicode incorporato viene estratto così com’è: i documenti non italiani funzionano purché il PDF memorizzi un livello di testo appropriato.',
      },
      {
        question: 'L’estrazione preserva il testo in grassetto o i titoli?',
        answer:
          'No. Il risultato è solo testo semplice: grassetto, corsivo, titoli e altre formattazioni non vengono quindi ripresi.',
      },
      {
        question: 'Quale dimensione di PDF posso estrarre?',
        answer:
          'Non c’è un limite di dimensione indicato, e l’estrazione viene eseguita localmente; i documenti molto grandi possono semplicemente richiedere un po’ più di tempo per l’analisi.',
      },
      {
        question: 'Posso copiare il testo estratto senza scaricare un file?',
        answer:
          'Sì. Usa il pulsante di copia in un clic per incollare il testo direttamente nel tuo editor, nella tua app di note o nel tuo documento.',
      },
      {
        question: 'Che cosa sono i marcatori «--- Pagina N ---» nel risultato?',
        answer:
          'Sono intestazioni facoltative che marcano l’inizio di ogni pagina, in modo che tu possa citare le pagine con precisione; disattivale per una prosa continua.',
      },
      {
        question: 'L’estrattore di testo PDF mostra un numero di parole?',
        answer:
          'Sì. Indica il numero di pagine estratte, il numero di parole e la dimensione in byte UTF-8 accanto al testo.',
      },
      {
        question: 'Posso estrarre il testo di un PDF protetto da password?',
        answer:
          'No. Solo i PDF non cifrati possono essere aperti da questo strumento di browser: rimuovi quindi prima la password.',
      },
      {
        question: 'I collegamenti ipertestuali verranno estratti dal PDF?',
        answer:
          'Il testo di link visibile viene estratto quando esiste come testo, ma i link stessi non vengono esportati come URL cliccabili.',
      },
      {
        question: 'Posso usare il testo estratto in Word o Google Docs?',
        answer:
          'Sì. Incolla direttamente il testo copiato, oppure apri il file .txt scaricato e copia il suo contenuto in qualsiasi elaboratore di testi.',
      },
      {
        question: 'Perché alcuni caratteri sembrano confusi nel testo estratto?',
        answer:
          'Alcuni PDF incorporano font personalizzati senza mappatura Unicode appropriata: PDF.js non può quindi associare i glifi ai caratteri giusti.',
      },
      {
        question: 'L’estrazione di testo modifica il mio PDF originale?',
        answer:
          'No. L’estrazione è in sola lettura; il tuo file PDF originale non viene mai modificato.',
      },
      {
        question: 'L’estrattore di testo PDF può estrarre il testo di moduli e annotazioni?',
        answer:
          'Estrae il livello di testo incorporato principale di ogni pagina; i valori di moduli compilati e le note di annotazione possono non apparire se sono memorizzati separatamente.',
      },
    ],
  },
};
