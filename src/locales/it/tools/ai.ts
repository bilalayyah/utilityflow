import type { ToolLocaleOverride } from '../../types';

/**
 * Italian overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/fr/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 */
export const IT_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'assistente-di-scrittura-ia',
    name: 'Assistente di Scrittura IA',
    shortDescription:
      'Correggi grammatica, riscrivi frasi, regola il tono, parafrasa, espandi idee e redigi email chiare gratis, senza registrazione.',
    keywords: [
      'assistente scrittura ia',
      'correttore grammatica gratis',
      'riscrittore di frasi',
      'parafrasatore di testo',
      'convertitore di tono',
      'assistente scrittura email',
      'correzione ortografia',
      'semplificatore di frasi',
      'correttore testo ia',
    ],
    seo: {
      title: 'Assistente di Scrittura IA – Grammatica e Tono | UtilityFlow',
      description:
        'Correggi grammatica, riscrivi frasi, regola il tono, semplifica o espandi paragrafi, parafrasa testi e scrivi email chiare gratis, senza registrazione.',
      primaryKeyword: 'assistente scrittura ia',
      secondaryKeywords: [
        'correttore grammatica gratis ia',
        'riscrittore frasi ia',
        'parafrasatore testo ia',
        'assistente scrittura email ia',
      ],
      longTailKeywords: [
        'assistente scrittura ia gratis senza registrazione',
        'rendi testo più professionale con strumento ia',
        'riscrivi paragrafo mantenendo significato gratis',
        'correggi grammatica e ortografia online gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis, senza login, abbonamento o crediti. Piano gratuito: fino a 5 richieste di scrittura al giorno per visitatore (massimo 12.000 caratteri), alimentato dall’inferenza gratuita di Groq senza memorizzare il tuo testo.',
    intro:
      'Rifinisci le tue bozze in modo pulito in pochi secondi senza creare un account. Scegli tra 10 attività di scrittura — tra cui correzione grammaticale, parafrasi, cambio di tono, semplificazione di frasi e redazione di email — preservando rigorosamente il tuo significato e i tuoi dati originali.',
    instructions: [
      {
        title: 'Incolla o scrivi il tuo testo',
        description:
          'Inserisci fino a 12.000 caratteri nell’editor. Usa i contatori live di parole e caratteri per verificare la lunghezza della bozza prima di generare.',
      },
      {
        title: 'Scegli un’attività di scrittura, un tono e una lingua',
        description:
          'Seleziona una delle 10 attività di scrittura (come Correggi grammatica, Rendi professionale, Parafrasa o Scrivi un’email), abbina un tono da Professionale a Semplice e scegli la lingua di output di destinazione.',
      },
      {
        title: 'Fai clic su Genera per elaborare la tua richiesta',
        description:
          'Premi Genera e attendi qualche secondo mentre la richiesta viene inviata a Groq per l’inferenza. Un indicatore di avanzamento viene mostrato mentre il tuo testo migliorato viene prodotto.',
      },
      {
        title: 'Esamina e confronta testo originale e migliorato',
        description:
          'Ispeziona la vista affiancata o le evidenziazioni delle modifiche a livello di parola per vedere esattamente che cosa è cambiato e conferma che nomi, numeri e date siano rimasti intatti.',
      },
      {
        title: 'Copia o scarica il risultato',
        description:
          'Usa il pulsante Copia per spostare il testo migliorato negli appunti, oppure scaricalo come file TXT per usarlo nel tuo documento o client email.',
      },
      {
        title: 'Prova un’altra attività o un altro tono se necessario',
        description:
          'Se il risultato non è del tutto giusto, cambia attività o tono e genera di nuovo — per esempio, prova Rendi semplice dopo Rendi professionale — tenendo presente il limite giornaliero gratuito di richieste.',
      },
    ],
    examples: [
      {
        title: 'Pulizia di grammatica e ortografia',
        input:
          'Ciao team, volevo fare un follow up sulla riunione di ieri e condividere la timeline aggiornata per il lancio del Q4.',
        output:
          'Ciao team, volevo fare un follow-up sulla riunione di ieri e condividere la timeline aggiornata per il lancio del quarto trimestre.',
        explanation:
          'Attività: Correggi grammatica · Tono: Professionale. Corregge punteggiatura e ortografia mantenendo la tua voce esatta.',
      },
      {
        title: 'Appunti grezzi trasformati in email pronta da inviare',
        input:
          'chiedere alla cliente sara se giovedì alle 14 va bene per la call di revisione design, menzionare che il mockup v2 è pronto e il link allegato',
        output:
          'Oggetto: Call di revisione design e Mockup v2\n\nCiao Sara,\n\nVolevo informarti che il Mockup v2 è pronto e allegato per la tua revisione. Giovedì alle 14:00 andrebbe bene per una breve call di revisione del design?\n\nCordiali saluti,',
        explanation:
          'Attività: Scrivi un’email · Tono: Cordiale. Struttura appunti in elenco in un’email educata e fattuale senza inventare dettagli.',
      },
    ],
    benefits: [
      'Accesso 100% gratuito senza registrazione, login o barriere di abbonamento',
      '10 modalità di scrittura specializzate più 7 preset di tono e output multilingue',
      'Preserva nomi, numeri, date e significato senza fabbricare dati',
      'Confronto affiancato e tracciamento delle modifiche evidenziate a livello di parola',
    ],
    useCases: [
      'Rifinire email, proposte e aggiornamenti di stato ai clienti prima dell’invio',
      'Correggere errori di grammatica, punteggiatura e ortografia in saggi o report',
      'Semplificare paragrafi tecnici densi per pubblici più ampi',
      'Convertire bozze di chat informali in comunicazione professionale formale',
    ],
    faqs: [
      {
        question: 'L’assistente di scrittura IA è completamente gratuito senza registrazione?',
        answer:
          'Sì. Non devi creare un account, inserire un indirizzo email né aggiungere una carta di pagamento. I visitatori ricevono fino a 5 richieste di scrittura gratuite per giorno UTC.',
      },
      {
        question: 'L’IA inventa nuovi dati quando riscrive o espande il testo?',
        answer:
          'No. Il nostro prompt di sistema chiede al modello di preservare rigorosamente tutti i dati, nomi, date e numeri originali ed evitare di fabbricare statistiche o affermazioni.',
      },
      {
        question: 'UtilityFlow memorizza o registra la mia scrittura?',
        answer:
          'UtilityFlow non memorizza, registra né vende il tuo testo. Le richieste vengono inviate in sicurezza tramite il nostro backend a Groq per l’inferenza e il tracciamento della quota dei visitatori usa solo un hash SHA-256 giornaliero con salt.',
      },
      {
        question: 'Che cosa succede se raggiungo il limite giornaliero gratuito di richieste?',
        answer:
          'I limiti giornalieri si reimpostano automaticamente alla mezzanotte UTC. Nel frattempo, tutte le oltre 85 utility locali del browser — tra cui contatore di parole, verificatore di leggibilità e verificatore di differenze di testo — funzionano senza limiti.',
      },
      {
        question: 'Quali attività di scrittura può gestire l’assistente di scrittura IA?',
        answer:
          'Offre 10 attività, tra cui Correggi grammatica, Rendi professionale, Parafrasa, Semplifica, Espandi, Riassumi, Scrivi un’email, Migliora chiarezza, Cambia tono e Correggi ortografia.',
      },
      {
        question: 'Quanto può essere lungo il mio testo nell’assistente di scrittura IA?',
        answer:
          'Ogni richiesta accetta fino a 12.000 caratteri. Per documenti più lunghi, dividi il testo in sezioni ed elaborale una alla volta.',
      },
      {
        question: 'Quali toni posso scegliere per il mio testo riscritto?',
        answer:
          'Puoi scegliere tra 7 preset di tono, tra cui Professionale, Cordiale, Formale, Informale, Semplice, Sicuro e Conciso, a seconda del tuo pubblico.',
      },
      {
        question: 'L’assistente di scrittura IA invia il mio testo a un servizio esterno?',
        answer:
          'Sì. Il tuo testo viene inviato in sicurezza a Groq per l’inferenza IA tramite il nostro worker backend, perché le attività di scrittura richiedono un modello linguistico. Non viene memorizzato né registrato da UtilityFlow.',
      },
      {
        question: 'L’assistente di scrittura IA può scrivere un’email completa da appunti grezzi?',
        answer:
          'Sì. Scegli l’attività Scrivi un’email, incolla i tuoi punti elenco o appunti grezzi e li strutturerà in un’email educata con oggetto e saluto.',
      },
      {
        question: 'L’assistente di scrittura IA cambierà il significato del mio testo?',
        answer:
          'È istruito a preservare il tuo significato originale, i tuoi dati, nomi, date e numeri. Controlla sempre il confronto affiancato prima di usare il risultato.',
      },
      {
        question: 'Posso usare l’assistente di scrittura IA per saggi accademici?',
        answer:
          'Sì, può correggere la grammatica e migliorare la chiarezza di saggi e report. Controlla prima le regole del tuo istituto, poiché alcune scuole limitano la scrittura assistita da IA.',
      },
      {
        question: 'L’assistente di scrittura IA funziona in lingue diverse dall’inglese?',
        answer:
          'Sì. Puoi scegliere una lingua di output di destinazione e lo strumento produrrà il testo migliorato in quella lingua mantenendo invariati i tuoi dati.',
      },
      {
        question: 'Come vedo esattamente che cosa ha cambiato l’IA nel mio testo?',
        answer:
          'La vista dei risultati evidenzia le modifiche a livello di parola e mostra il testo originale e migliorato affiancati, così puoi accettare o rifiutare mentalmente ogni modifica prima di copiare.',
      },
      {
        question: 'L’assistente di scrittura IA può parafrasare il testo per evitare ripetizioni?',
        answer:
          'Sì. L’attività Parafrasa riscrive le frasi con parole diverse mantenendo lo stesso significato, utile per bozze varie e riassunti.',
      },
      {
        question: 'Che cosa devo fare se il testo generato contiene un errore?',
        answer:
          'Modifica direttamente il risultato oppure esegui di nuovo il testo con un’altra attività o un altro tono. L’output IA può contenere errori: rileggi quindi i testi importanti prima di inviarli.',
      },
      {
        question: 'C’è un limite di parole per richiesta nell’assistente di scrittura IA?',
        answer:
          'Il limite è di 12.000 caratteri per richiesta, che copre circa 1.800–2.000 parole in inglese. I testi più brevi producono di solito risultati più rapidi e più accurati.',
      },
      {
        question: 'In che cosa differisce l’assistente di scrittura IA dal contatore di parole?',
        answer:
          'Il contatore di parole misura solo parole, caratteri e tempo di lettura in locale, mentre l’assistente di scrittura IA riscrive e migliora il tuo testo usando il modello linguistico di Groq.',
      },
      {
        question: 'L’assistente di scrittura IA può accorciare o allungare il mio testo?',
        answer:
          'Sì. Usa l’attività Semplifica per accorciare paragrafi densi, oppure l’attività Espandi per aggiungere dettagli e spiegazioni mantenendo intatti i tuoi dati originali.',
      },
      {
        question: 'Posso scaricare il mio testo migliorato come file?',
        answer:
          'Sì. Dopo la generazione, fai clic sull’opzione di download per salvare il testo migliorato come file TXT sul tuo dispositivo.',
      },
      {
        question: 'Che cosa succede se la mia richiesta fallisce o va in timeout?',
        answer:
          'Controlla la tua connessione internet e riprova. Se il limite giornaliero gratuito è stato raggiunto, lo strumento te lo dirà e il limite si reimposta alla mezzanotte UTC.',
      },
    ],
  },
  'ai-text-summarizer': {
    slug: 'riassuntore-di-testo-ia',
    name: 'Riassuntore di Testo IA',
    shortDescription:
      'Condensa articoli, report e appunti in riassunti brevi, medi o lunghi con punti elenco e punti chiave, gratis.',
    keywords: [
      'riassuntore testo ia',
      'riassuntore articoli gratis',
      'riassunto con punti elenco',
      'estrattore punti chiave',
      'riassuntore di paragrafi',
      'riassunto in linguaggio semplice',
      'calcolatore tempo di lettura',
      'riassumi testo lungo online',
      'generatore riassunti ia gratis',
    ],
    seo: {
      title: 'Riassuntore di Testo IA – Riassunti Brevi | UtilityFlow',
      description:
        'Riassumi lunghi articoli, appunti di ricerca e report in paragrafi brevi, punti elenco o punti chiave, gratis, velocemente e online, senza registrazione.',
      primaryKeyword: 'riassuntore testo ia',
      secondaryKeywords: [
        'riassuntore articoli gratis',
        'riassuntore testo con punti elenco',
        'estrai punti chiave con ia',
        'generatore riassunti di paragrafi',
      ],
      longTailKeywords: [
        'riassuntore testo ia gratis senza registrazione',
        'riassumi articolo lungo mantenendo numeri e dati',
        'riassuntore testo breve medio e lungo online',
        'riassumi documento ricerca in punti elenco',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis, senza login, abbonamento o crediti. Piano gratuito: fino a 5 riassunti al giorno per visitatore (fino a 25.000 caratteri per richiesta), alimentato dall’inferenza gratuita di Groq senza memorizzare il tuo testo.',
    intro:
      'Distilla lunghi articoli, report, saggi e trascrizioni di riunioni in riassunti netti senza creare un account. Scegli lunghezze Breve (10–20%), Media (30–40%) o Lunga (50–60%) in formati paragrafo, punti elenco, punti chiave e linguaggio semplice, preservando nomi, numeri e date.',
    instructions: [
      {
        title: 'Incolla o scrivi il tuo testo di origine',
        description:
          'Inserisci almeno 25 parole (120+ caratteri) fino a 25.000 caratteri. Controlla il conteggio live delle parole e il tempo di lettura stimato sotto l’editor.',
      },
      {
        title: 'Scegli lunghezza, formato e lingua del riassunto',
        description:
          'Seleziona la compressione Breve, Media o Lunga (Dettagliata), scegli il formato Paragrafo, Punti elenco, Punti chiave o Linguaggio semplice e scegli una lingua di output.',
      },
      {
        title: 'Fai clic su Riassumi per generare il riassunto',
        description:
          'Premi Riassumi testo e attendi qualche secondo mentre il tuo testo viene inviato a Groq per l’inferenza IA. Un indicatore di avanzamento viene mostrato mentre il riassunto viene prodotto.',
      },
      {
        title: 'Confronta il tempo di lettura e verifica il risultato',
        description:
          'Esamina il tempo di lettura risparmiato, confronta il riassunto con il testo originale e verifica che nomi, numeri e date chiave restino corretti.',
      },
      {
        title: 'Copia o scarica il riassunto',
        description:
          'Usa il pulsante Copia per spostare il riassunto negli appunti, oppure scaricalo come file TXT per i tuoi appunti, report o materiale di studio.',
      },
      {
        title: 'Prova un’altra lunghezza o un altro formato se necessario',
        description:
          'Se il riassunto è troppo corto o troppo dettagliato, cambia lunghezza o formato e riassumi di nuovo — per esempio, prova Punti elenco dopo un riassunto in Paragrafo.',
      },
    ],
    examples: [
      {
        title: 'Digest esecutivo con punti elenco',
        input:
          'Studio di ingegneria di 160 parole che confronta aggiornamenti scritti due volte a settimana con riunioni giornaliere tra 140 ingegneri.',
        output:
          '- Studio di 140 ingegneri a Londra, Berlino e Toronto per sei mesi.\n- Sostituire tre sincronizzazioni settimanali con digest due volte a settimana ha ridotto la frammentazione del calendario del 28% e aumentato la consegna degli sprint del 14%.\n- Il successo dipendeva da blocchi anticipati, link PR e date esatte.',
        explanation:
          'Lunghezza: Breve · Formato: Riassunto con punti elenco. Preserva dimensione del campione, luoghi e percentuali esatte.',
      },
      {
        title: 'Riassunto lungo di un report di ricerca',
        input:
          'Report di ricerca di 3.000 parole su abitudini di studio e successo scolastico.',
        output:
          'Riassunto lungo (50–60%) in paragrafi che conserva metodologia, conclusioni principali e cifre chiave.',
        explanation:
          'Lunghezza: Lunga · Formato: Paragrafo. Conserva i dettagli di metodologia e le conclusioni per una revisione completa.',
      },
    ],
    benefits: [
      'Accesso anonimo gratuito senza account, abbonamenti o crediti',
      'Controlli di riassunto Breve (10–20%), Medio (30–40%) e Lungo (50–60%)',
      'Modalità Paragrafo, Punti elenco, Estrazione punti chiave e Linguaggio semplice',
      'Preserva nomi, statistiche, date e dati senza inventare dettagli',
    ],
    useCases: [
      'Convertire lunghi articoli o report di ricerca in appunti rapidi con punti elenco',
      'Riassumere trascrizioni di riunioni ed estrarre punti di azione numerati',
      'Tradurre e condensare documenti di più paragrafi in conclusioni chiare',
      'Stimare il risparmio di tempo di lettura prima di condividere digest esecutivi',
    ],
    faqs: [
      {
        question: 'Perché il riassuntore di testo IA richiede almeno 25 parole?',
        answer:
          'I testi sotto le 25 parole o 120 caratteri sono troppo brevi per essere compressi in modo significativo senza perdere il contesto essenziale: lo strumento ti chiede quindi di aggiungere prima più testo di origine.',
      },
      {
        question: 'Il riassuntore modifica nomi, numeri o date?',
        answer:
          'No. Le nostre istruzioni di riassunto richiedono rigorosamente di mantenere intatti cifre, date, nomi e relazioni fattuali originali senza aggiungere affermazioni esterne.',
      },
      {
        question: 'Come viene calcolato il tempo di lettura stimato?',
        answer:
          'Il tempo di lettura stimato usa una velocità media di lettura silenziosa di 200 parole al minuto sia per il testo originale sia per il riassunto generato, così puoi vedere il tempo risparmiato a colpo d’occhio.',
      },
      {
        question: 'C’è un limite o un costo per usare il riassuntore di testo IA?',
        answer:
          'Lo strumento è completamente gratuito, senza fatturazione né registrazione. I visitatori ricevono fino a 5 riassunti gratuiti per giorno UTC e gli 85 strumenti locali del browser restano illimitati.',
      },
      {
        question: 'Quali lunghezze di riassunto offre il riassuntore di testo IA?',
        answer:
          'Puoi scegliere riassunti Breve (10–20% dell’originale), Medio (30–40%) o Lungo (50–60%), a seconda del livello di dettaglio che vuoi conservare.',
      },
      {
        question: 'Quali formati di riassunto posso scegliere?',
        answer:
          'Lo strumento offre i formati Paragrafo, Punti elenco, Estrazione punti chiave e Linguaggio semplice, per adattare il riassunto ad appunti, report o materiale di studio.',
      },
      {
        question: 'Quanto può essere lungo il testo che riassumo?',
        answer:
          'Ogni richiesta accetta tra 25 parole e 25.000 caratteri. Per documenti più lunghi, dividili in sezioni e riassumi ciascuna parte separatamente.',
      },
      {
        question: 'Il riassuntore di testo IA invia il mio testo a un servizio esterno?',
        answer:
          'Sì. Il tuo testo viene inviato in sicurezza a Groq per l’inferenza IA tramite il nostro worker backend, perché il riassunto richiede un modello linguistico. UtilityFlow non lo memorizza né lo registra.',
      },
      {
        question: 'Il riassuntore di testo IA può riassumere trascrizioni di riunioni?',
        answer:
          'Sì. Incolla la trascrizione e scegli il formato Punti chiave o Punti elenco per estrarre rapidamente decisioni, punti di azione e argomenti principali di discussione.',
      },
      {
        question: 'Il riassunto conserverà i dati e le cifre originali?',
        answer:
          'Il riassuntore è istruito a preservare nomi, statistiche, date e relazioni fattuali. Verifica comunque il riassunto rispetto all’originale per i documenti importanti.',
      },
      {
        question: 'Posso riassumere documenti di ricerca con il riassuntore di testo IA?',
        answer:
          'Sì. Incolla l’abstract o il testo completo e usa il formato Lungo per conservare i dettagli di metodologia e le conclusioni, o il formato Breve per una panoramica rapida.',
      },
      {
        question: 'Il riassuntore di testo IA funziona in lingue diverse dall’inglese?',
        answer:
          'Sì. Puoi selezionare una lingua di output e il riassunto verrà prodotto in quella lingua mantenendo invariati i dati originali.',
      },
      {
        question: 'Come viene calcolato il tempo di lettura risparmiato nel riassuntore di testo IA?',
        answer:
          'Lo strumento confronta il tempo di lettura stimato del testo originale con quello del riassunto, usando una velocità media di lettura silenziosa di 200 parole al minuto.',
      },
      {
        question: 'Il riassuntore di testo IA può creare una versione in linguaggio semplice di un testo?',
        answer:
          'Sì. Scegli il formato Linguaggio semplice per ottenere una versione semplice e facile da leggere di una scrittura complessa o tecnica, utile per studenti e non esperti.',
      },
      {
        question: 'Che cosa devo fare se il riassunto omette un punto importante?',
        answer:
          'Prova il formato Lungo o il formato Punti chiave, che conservano più dettagli. Puoi anche dividere il testo e riassumere separatamente la sezione omessa.',
      },
      {
        question: 'Il riassuntore di testo IA è utile per studiare e ripassare gli esami?',
        answer:
          'Sì. Riassumi capitoli o appunti di lezione in punti elenco e punti chiave, poi rileggi la versione breve prima degli esami per rinfrescare le idee principali.',
      },
      {
        question: 'In che cosa differisce il riassuntore di testo IA dall’assistente di scrittura IA?',
        answer:
          'Il riassuntore condensa un testo lungo in versioni più brevi, mentre l’assistente di scrittura corregge la grammatica, riscrive le frasi e cambia il tono senza accorciare il testo.',
      },
      {
        question: 'Che cosa succede quando raggiungo il limite giornaliero di riassunti?',
        answer:
          'Il limite si reimposta automaticamente alla mezzanotte UTC. Fino ad allora, puoi usare gli strumenti locali del browser, come il contatore di parole e il verificatore di densità delle parole chiave, senza limiti.',
      },
      {
        question: 'Il riassuntore di testo IA può gestire direttamente PDF o pagine web?',
        answer:
          'No. Incolla il testo stesso nell’editor. Per i PDF, usa prima l’estrattore di testo PDF per copiare il testo, poi incollalo nel riassuntore.',
      },
      {
        question: 'Il riassuntore di testo IA aggiunge nuove informazioni al mio riassunto?',
        answer:
          'No. È istruito a riassumere solo ciò che si trova nel tuo testo e a non aggiungere affermazioni esterne, ma dovresti comunque verificare il risultato per confermarne l’accuratezza.',
      },
    ],
  },
  'ai-tool-finder': {
    slug: 'cercatore-di-strumenti-ia',
    name: 'Cercatore di Strumenti Intelligente IA',
    shortDescription:
      'Descrivi la tua attività in linguaggio semplice, con refusi o formulazioni naturali, per trovare subito il miglior strumento UtilityFlow corrispondente.',
    keywords: [
      'cercatore strumenti ia',
      'ricerca intelligente strumenti',
      'trova strumento utility',
      'raccomanda strumento online',
      'ricerca strumenti linguaggio naturale',
      'trova strumento gratis online',
      'raccomandatore strumenti utility',
      'cerca strumenti per attività',
      'cercatore utility online',
    ],
    seo: {
      title: 'Cercatore di Strumenti IA – Trova lo Strumento | UtilityFlow',
      description:
        'Descrivi ciò di cui hai bisogno in linguaggio semplice per scoprire lo strumento adatto tra gli 88 di UtilityFlow, rapidamente, gratis e senza link inventati.',
      primaryKeyword: 'cercatore strumenti ia',
      secondaryKeywords: [
        'cercatore strumenti online',
        'trova strumento utility giusto',
        'raccomandatore strumenti ia',
        'ricerca strumenti utilityflow',
      ],
      longTailKeywords: [
        'trova strumento online gratis per la mia attività',
        'cerca strumenti utility per problema in linguaggio semplice',
        'scoperta strumenti ia senza registrazione',
        'quale strumento online mi serve per pdf',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis, senza login, abbonamento o crediti. Ricerca nel nostro inventario verificato di 85 strumenti browser + 2 strumenti IA (fino a 10 ricerche IA al giorno + corrispondenza istantanea per parole chiave illimitata).',
    intro:
      'Non sai quale strumento gestisce la tua attività? Descrivi il tuo obiettivo in linguaggio semplice, anche con errori di ortografia o formulazioni informali, e il nostro comparatore ibrido parole chiave + IA Groq raccomanda strumenti verificati dal catalogo live di UtilityFlow con giustificazioni chiare.',
    instructions: [
      {
        title: 'Descrivi la tua attività o seleziona un suggerimento rapido',
        description:
          'Scrivi una richiesta in linguaggio semplice come «Voglio ridurre la dimensione della mia immagine a 100 KB» oppure «convertire un PDF in PNG», oppure fai clic su qualsiasi preset di attività rapida.',
      },
      {
        title: 'Filtra per categoria se necessario',
        description:
          'Riduci le raccomandazioni a strumenti Testo e scrittura, Sviluppatore, Calcolatrici, Social media, PDF, SEO o Immagini e file, oppure cerca in tutti gli 87 strumenti alla volta.',
      },
      {
        title: 'Avvia la ricerca ed esamina le corrispondenze',
        description:
          'Invia la tua richiesta per ottenere corrispondenze istantanee per parole chiave, oppure usa una ricerca assistita da IA per la corrispondenza semantica. I risultati sono classificati per rilevanza rispetto alla tua attività.',
      },
      {
        title: 'Ispeziona giustificazioni e alternative',
        description:
          'Leggi la giustificazione in una frase di ciascuna raccomandazione e consulta l’elenco delle alternative per confrontare strumenti simili prima di scegliere.',
      },
      {
        title: 'Apri lo strumento verificato',
        description:
          'Fai clic su Apri strumento per avviare subito lo strumento raccomandato. Ogni link è verificato rispetto al registro live: apre quindi sempre uno strumento reale.',
      },
      {
        title: 'Prova una formulazione diversa se non c’è corrispondenza',
        description:
          'Se il cercatore segnala che non c’è una corrispondenza esatta, riformula la tua attività con parole più semplici o un altro filtro di categoria e consulta la nota onesta di mancata corrispondenza per l’opzione più vicina.',
      },
    ],
    examples: [
      {
        title: 'Comprimere un’immagine a 100 KB',
        input: 'Voglio ridurre la dimensione della mia immagine a 100 KB.',
        output: 'Raccomandato: Compressore di Immagini (/it/compressore-di-immagini/)',
        explanation:
          'Corrisponde al compressore di immagini lato client e suggerisce il ridimensionatore di immagini o il convertitore di formato immagine come alternative.',
      },
      {
        title: 'Gestione onesta della mancata corrispondenza',
        input: 'Ho bisogno di convertire un PDF in Word.',
        output: 'Nessun convertitore esatto PDF in DOCX disponibile; viene suggerito l’estrattore di testo PDF per il testo grezzo.',
        explanation:
          'Non inventa mai strumenti mancanti né finge che uno strumento supporti formati che non supporta.',
      },
    ],
    benefits: [
      'Ricerca gratuita in linguaggio naturale in tutti gli 85 strumenti browser e 2 strumenti IA',
      'Corrispondenza istantanea locale per parole chiave tollerante ai refusi più classificazione semantica IA Groq',
      'La verifica rigorosa dell’inventario garantisce zero strumenti fabbricati o link rotti',
      'Mostra una giustificazione chiara in una frase e fino a 3 alternative',
    ],
    useCases: [
      'Trovare l’utility PDF, immagine o testo adatta senza sfogliare ogni categoria',
      'Collegare obiettivi in linguaggio semplice a strumenti browser esatti con formati supportati',
      'Verificare onestamente se UtilityFlow supporta attualmente un formato di file specializzato',
      'Confrontare più strumenti simili prima di decidere quale usare per un’attività',
    ],
    faqs: [
      {
        question: 'Il cercatore di strumenti intelligente IA raccomanda mai strumenti che non esistono?',
        answer:
          'No. Ogni raccomandazione restituita dall’IA viene verificata rigorosamente rispetto al nostro registro di strumenti live prima della visualizzazione. Se non esiste uno strumento corrispondente, il cercatore te lo dice onestamente.',
      },
      {
        question: 'Che cosa succede se faccio errori di ortografia nella mia ricerca?',
        answer:
          'Il nostro classificatore locale di parole chiave include tolleranza ai refusi per distanza di modifica e sinonimi di attività, e il classificatore IA di Groq interpreta automaticamente formulazioni naturali ed errori di ortografia.',
      },
      {
        question: 'Quante ricerche posso eseguire gratis?',
        answer:
          'La corrispondenza istantanea locale per parole chiave è illimitata e i visitatori ricevono fino a 10 ricerche gratuite assistite da IA per giorno UTC, senza registrazione né pagamento.',
      },
      {
        question: 'Come capisce la mia richiesta il cercatore di strumenti intelligente IA?',
        answer:
          'Combina la corrispondenza istantanea locale per parole chiave con la classificazione semantica IA di Groq: capisce quindi obiettivi in linguaggio semplice, sinonimi e formulazioni naturali, non solo nomi esatti di strumenti.',
      },
      {
        question: 'Quali strumenti può raccomandare il cercatore di strumenti intelligente IA?',
        answer:
          'Cerca nell’intero catalogo UtilityFlow di 88 strumenti: 85 strumenti browser nelle categorie testo, sviluppatore, calcolatrice, social media, PDF, SEO e immagini, più l’assistente di scrittura IA e il riassuntore di testo IA.',
      },
      {
        question: 'Il cercatore di strumenti intelligente IA invia la mia ricerca a un servizio esterno?',
        answer:
          'Le ricerche assistite da IA inviano il testo della tua richiesta a Groq per la corrispondenza semantica tramite il nostro worker backend. La corrispondenza istantanea per parole chiave avviene in locale nel browser e non invia nulla.',
      },
      {
        question: 'Posso cercare uno strumento per formato di file, come PDF o PNG?',
        answer:
          'Sì. Menziona il formato nella tua richiesta, per esempio «convertire un PDF in PNG», e il cercatore raccomanderà strumenti che supportano quel formato, come PDF in Immagini.',
      },
      {
        question: 'Che cosa fa il cercatore di strumenti intelligente IA se nessuno strumento corrisponde alla mia attività?',
        answer:
          'Ti dice onestamente che non esiste una corrispondenza esatta e suggerisce lo strumento disponibile più vicino, invece di inventare uno strumento o un link rotto.',
      },
      {
        question: 'Posso filtrare le raccomandazioni di strumenti per categoria?',
        answer:
          'Sì. Usa il filtro di categoria per limitare i risultati a strumenti Testo e scrittura, Sviluppatore, Calcolatrici, Social media, PDF, SEO o Immagini e file prima di cercare.',
      },
      {
        question: 'Come funzionano i suggerimenti rapidi di attività nel cercatore di strumenti intelligente IA?',
        answer:
          'I suggerimenti rapidi sono richieste di esempio in un clic, come ridurre un’immagine a 100 KB, che mostrano come formulare un’attività e restituiscono subito lo strumento corrispondente.',
      },
      {
        question: 'Perché ogni raccomandazione include una giustificazione?',
        answer:
          'Ogni risultato mostra una spiegazione in una frase del motivo per cui lo strumento corrisponde al tuo obiettivo, formati supportati inclusi, così puoi valutare l’idoneità prima di aprirlo.',
      },
      {
        question: 'Il cercatore di strumenti intelligente IA può raccomandare anche strumenti IA?',
        answer:
          'Sì. Può raccomandare l’assistente di scrittura IA per grammatica e riscrittura e il riassuntore di testo IA per condensare testi lunghi, quando la tua attività corrisponde a quegli strumenti.',
      },
      {
        question: 'Il cercatore di strumenti intelligente IA è gratuito?',
        answer:
          'Sì. La corrispondenza per parole chiave è illimitata e gratuita e le ricerche assistite da IA sono gratuite fino a 10 al giorno per visitatore, senza account, login o pagamento.',
      },
      {
        question: 'Che cosa devo fare se la raccomandazione principale non è del tutto giusta?',
        answer:
          'Consulta l’elenco delle alternative sotto il risultato principale, oppure riformula la tua richiesta con più dettagli, per esempio nominando il formato di file o l’output esatto di cui hai bisogno.',
      },
      {
        question: 'Posso usare il cercatore di strumenti intelligente IA per trovare una calcolatrice?',
        answer:
          'Sì. Descrivi il calcolo con parole semplici, come «calcola la mia rata mensile del prestito», e raccomanderà il Calcolatore di rata prestito EMI o una calcolatrice correlata.',
      },
      {
        question: 'In che cosa differisce il cercatore di strumenti intelligente IA dalla pagina directory degli strumenti?',
        answer:
          'La directory degli strumenti elenca tutti gli 88 strumenti per categoria per la navigazione, mentre il cercatore di strumenti collega la tua attività in linguaggio semplice allo strumento migliore e spiega perché è adatto.',
      },
      {
        question: 'Il cercatore di strumenti intelligente IA può aiutare con attività SEO?',
        answer:
          'Sì. Chiedi cose come «controlla la lunghezza della mia meta description» o «genera una sitemap» e ti indicherà il Generatore di Meta Tag, il Generatore di Sitemap XML o il Verificatore SEO On-Page.',
      },
      {
        question: 'Che cosa succede quando raggiungo il limite giornaliero di ricerca IA?',
        answer:
          'Il limite di ricerca IA si reimposta alla mezzanotte UTC. Fino ad allora, la corrispondenza istantanea per parole chiave continua a funzionare senza limiti: puoi quindi trovare sempre strumenti per parole chiave.',
      },
      {
        question: 'Il cercatore di strumenti intelligente IA può raccomandare strumenti per la modifica delle immagini?',
        answer:
          'Sì. Descrivi la tua attività di immagine, come «comprimi questa foto» o «ridimensiona un’immagine», e raccomanderà il Compressore di Immagini, il Ridimensionatore di Immagini o il Convertitore di Formato Immagine.',
      },
      {
        question: 'I link del cercatore di strumenti intelligente IA funzionano sempre?',
        answer:
          'Sì. Ogni raccomandazione viene verificata rispetto al registro di strumenti live prima della visualizzazione: i link aprono quindi sempre una pagina di strumento UtilityFlow reale e funzionante.',
      },
    ],
  },
};
