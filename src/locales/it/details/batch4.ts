// Detail content for IT tools — split out of
// src/locales/it/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'qr-code-generator': {
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
};
