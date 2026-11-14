import type { ToolLocaleOverride } from '../../types';

/**
 * Italian overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const IT_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'contatore-parole',
    name: 'Contatore di Parole',
    shortDescription:
      'Conta parole, caratteri, frasi, paragrafi, tempo di lettura e le parole chiave più ripetute, all’istante.',
    keywords: [
      'contatore di parole',
      'contare le parole online',
      'contare le parole di un testo',
      'calcolatore tempo di lettura',
      'contatore di frasi',
      'contatore di paragrafi',
      'contatore di parole gratis',
      'calcolatore tempo di lettura ad alta voce',
      'contare caratteri e parole',
    ],
    seo: {
      title: 'Contatore di Parole: parole e tempo di lettura | UtilityFlow',
      description:
        'Conta parole, caratteri, frasi e paragrafi all’istante e scopri i tempi stimati di lettura e di lettura ad alta voce, calcolati nel browser senza inviare nulla.',
      primaryKeyword: 'contatore di parole',
      secondaryKeywords: ['contatore di parole online', 'strumento di conteggio parole', 'stima tempo di lettura', 'contatore di paragrafi'],
      longTailKeywords: ['contare parole e caratteri online gratis', 'stimare il tempo di lettura e di lettura ad alta voce di un testo', 'contatore di parole nel browser senza invio', 'verificare il numero di parole di un tema online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Misura il numero esatto di parole, il totale dei caratteri, la densità delle frasi e le durate stimate di lettura e di lettura ad alta voce in tempo reale, senza inviare la tua bozza a nessun server.',
    instructions: [
      {
        title: 'Incolla o scrivi la tua bozza',
        description:
          'Scrivi il testo direttamente nell’editor oppure fai clic su Carica esempio per vedere come si aggiornano i conteggi.',
      },
      {
        title: 'Controlla i totali in tempo reale',
        description:
          'Verifica parole, caratteri con e senza spazi, frasi, paragrafi e tempo di lettura stimato nella barra di riepilogo.',
      },
      {
        title: 'Verifica i tempi di lettura e di lettura ad alta voce',
        description:
          'Controlla il tempo di lettura stimato a 225 parole al minuto e il tempo di lettura ad alta voce a 130 parole al minuto per ritmare temi, discorsi e copioni video prima di pubblicare.',
      },
      {
        title: 'Individua i termini ripetuti',
        description:
          'Scorri il pannello delle parole più frequenti per individuare le ripetizioni involontarie e stringere la formulazione prima di finalizzare la bozza.',
      },
      {
        title: 'Copia o scarica il tuo testo',
        description:
          'Usa il pulsante di copia oppure scarica un backup .txt della tua bozza quando i conteggi ti soddisfano.',
      },
      {
        title: 'Risolvi un conteggio inatteso',
        description:
          'Se un conteggio sembra sbagliato, controlla i caratteri nascosti incollati o le righe vuote in più; eliminare gli a capo superflui di solito corregge i totali di paragrafi e frasi.',
      },
    ],
    examples: [
      {
        title: 'Verifica della lunghezza di un’introduzione di blog',
        input: 'I siti web veloci riducono la latenza del server. I lettori restano coinvolti quando il testo è conciso.',
        output: '18 parole · 106 caratteri · 2 frasi · 5 s di lettura',
        explanation:
          'Ideale per verificare il ritmo del titolo e del paragrafo di apertura prima di pubblicare.',
      },
      {
        title: 'Verifica del limite di parole di un tema',
        input: 'Paragrafo 1 (240 parole)\n\nParagrafo 2 (255 parole)',
        output: '495 parole · 2 paragrafi · 2 min 12 s di lettura',
        explanation:
          'Conferma un obiettivo di 500 parole per una borsa di studio o un compito, con margine di riserva.',
      },
    ],
    benefits: [
      'Si aggiorna all’istante a ogni battitura, nella memoria del browser',
      'Calcola il tempo di lettura (225 parole al minuto) e il tempo di lettura ad alta voce (130 parole al minuto)',
      'Mostra le tue sei parole più frequenti per individuare le formulazioni ripetitive',
      'Esporta backup in testo semplice direttamente come file .txt',
    ],
    useCases: [
      'Rispettare obiettivi di parole rigidi per temi e domande di finanziamento',
      'Cronometrare discorsi, copioni video e introduzioni di podcast',
      'Revisionare bozze di articoli e landing page per una struttura concisa',
      'Verificare la lunghezza di una newsletter prima di programmare le campagne',
    ],
    faqs: [
      {
        question: 'Come calcola il Contatore di Parole i tempi di lettura e di lettura ad alta voce?',
        answer:
          'Il tempo di lettura si basa su un ritmo medio di lettura silenziosa di un adulto di 225 parole al minuto, mentre il tempo di lettura ad alta voce si basa su un ritmo di presentazione colloquiale di 130 parole al minuto.',
      },
      {
        question: 'Le parole con trattino contano come una parola o due?',
        answer:
          'Le sequenze standard delimitate da spazi sono contate come una singola parola, come nella maggior parte degli elaboratori di testo.',
      },
      {
        question: 'Il mio testo viene salvato o inviato da qualche parte?',
        answer:
          'No. Tutti i conteggi avvengono localmente nella scheda del tuo browser e il tuo testo scompare appena cancelli o chiudi la pagina.',
      },
      {
        question: 'Qual è la differenza tra Contatore di Parole e Contatore di Caratteri?',
        answer:
          'Il Contatore di Parole si concentra sui totali di parole, i paragrafi, la durata di lettura ad alta voce e le parole più ripetute, mentre il Contatore di Caratteri dettaglia la dimensione in byte UTF-8 e i limiti di caratteri dei social e della SEO.',
      },
      {
        question: 'Il Contatore di Parole è gratis?',
        answer:
          'Sì. Il Contatore di Parole è completamente gratuito, senza registrazione, senza limite di parole e senza bisogno di un account.',
      },
      {
        question: 'Il Contatore di Parole funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, tutti i conteggi avvengono localmente nel tuo browser, quindi lo strumento continua a funzionare senza connessione internet.',
      },
      {
        question: 'Come vengono contate le frasi?',
        answer:
          'Le frasi vengono contate alla punteggiatura di fine frase, come punti, punti esclamativi e punti interrogativi; abbreviazioni come «Dr.» possono quindi aggiungere una frase.',
      },
      {
        question: 'Che cosa conta come parola nel Contatore di Parole?',
        answer:
          'Qualsiasi sequenza di caratteri separata da spazi conta come una parola, inclusi numeri, termini con trattino e parole con apostrofo.',
      },
      {
        question: 'Posso contare le parole di un PDF o di un documento Word?',
        answer:
          'Non direttamente. Copia il testo dal tuo documento e incollalo nel Contatore di Parole per vederne i conteggi all’istante.',
      },
      {
        question: 'Il Contatore di Parole conta i caratteri con spazi?',
        answer:
          'Sì. Mostra i caratteri sia con sia senza spazi, così puoi verificare i limiti che contano in un senso o nell’altro.',
      },
      {
        question: 'Quanto è accurata la stima del tempo di lettura?',
        answer:
          'È una stima basata su un ritmo medio di lettura silenziosa di 225 parole al minuto; ogni lettore può essere più veloce o più lento.',
      },
      {
        question: 'Su cosa si basa la stima del tempo di lettura ad alta voce?',
        answer:
          'Il tempo di lettura ad alta voce si basa su un ritmo di presentazione colloquiale di 130 parole al minuto, adatto a discorsi, copioni video e introduzioni di podcast.',
      },
      {
        question: 'Il Contatore di Parole gestisce altre lingue?',
        answer:
          'Sì. Conta le parole separate da spazi in qualsiasi lingua, anche se le stime del tempo di lettura sono calibrate per il testo in inglese.',
      },
      {
        question: 'Posso verificare un limite di parole per un tema o un compito?',
        answer:
          'Sì. Incolla il tuo tema e confronta il totale di parole in tempo reale con il tuo obiettivo; la barra di riepilogo mostra il conteggio esatto mentre modifichi il testo.',
      },
      {
        question: 'Il Contatore di Parole conta i numeri come parole?',
        answer:
          'Sì. I numeri isolati separati da spazi sono contati come parole, come nella maggior parte degli elaboratori di testo.',
      },
      {
        question: 'Perché il mio conteggio differisce da Microsoft Word o Google Docs?',
        answer:
          'Gli strumenti suddividono in modo diverso le parole con trattino, i trattini lunghi e i numeri, quindi piccole differenze di poche parole sono normali.',
      },
      {
        question: 'A cosa servono le parole più frequenti mostrate?',
        answer:
          'Il pannello elenca le tue sei parole più ripetute in modo che tu possa individuare i termini usati troppo spesso e variare il vocabolario prima di pubblicare.',
      },
      {
        question: 'Posso contare le parole di un solo paragrafo?',
        answer:
          'Sì. Incolla solo quel paragrafo nell’editor e i totali in tempo reale rifletteranno solo il testo inserito.',
      },
      {
        question: 'Posso usare il Contatore di Parole per le didascalie dei social media?',
        answer:
          'Sì. Incolla la tua didascalia per verificarne il numero di parole e il tempo di lettura, e usa il Contatore di Caratteri se devi verificare anche i limiti di caratteri.',
      },
      {
        question: 'Posso usare il Contatore di Parole sul mio telefono?',
        answer:
          'Sì. Funziona in qualsiasi browser mobile moderno con gli stessi conteggi in tempo reale, lo stesso tempo di lettura e le stesse opzioni di copia.',
      },
    ],
  },
  'character-counter': {
    slug: 'contatore-caratteri',
    name: 'Contatore di Caratteri',
    shortDescription:
      'Misura la lunghezza esatta in caratteri con e senza spazi, in byte UTF-8, e i limiti di caratteri dei social media e della SEO.',
    keywords: [
      'contatore di caratteri',
      'contatore di lettere',
      'verifica lunghezza meta description',
      'contatore di byte utf-8',
      'strumento limite di caratteri',
      'contare i caratteri online',
      'verifica lunghezza del testo',
      'verifica lunghezza titolo seo',
      'contatore di caratteri sms',
    ],
    seo: {
      title: 'Contatore di Caratteri: limiti e byte | UtilityFlow',
      description:
        'Conta i caratteri con e senza spazi, le lettere e i byte UTF-8 mentre segui i tuoi progressi verso i limiti SEO e dei social media, gratis nel browser.',
      primaryKeyword: 'contatore di caratteri',
      secondaryKeywords: ['contare i caratteri online', 'calcolatore lunghezza stringa', 'lunghezza titolo meta', 'verifica lunghezza del testo'],
      longTailKeywords: ['contare i caratteri senza spazi online', 'verificare il limite di caratteri di una meta description seo', 'calcolare la lunghezza in byte utf-8 di un testo', 'verificare il limite di caratteri di twitter online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Segui i conteggi esatti di caratteri, lettere, cifre, spazi e dimensione in byte UTF-8 mentre monitori le barre di avanzamento in tempo reale per gli snippet SEO, i segmenti SMS e i feed social.',
    instructions: [
      {
        title: 'Scrivi o incolla il tuo testo',
        description:
          'Digita un titolo meta, una didascalia per i social, un avviso SMS o una stringa di campo modulo nella casella di testo.',
      },
      {
        title: 'Controlla le misure di caratteri e byte',
        description:
          'Confronta il totale di caratteri con spazi, il totale senza spazi, le lettere, le cifre e il peso in byte UTF-8.',
      },
      {
        title: 'Verifica le soglie delle piattaforme',
        description:
          'Consulta gli indicatori di avanzamento in tempo reale per confermare che il tuo testo rispetti i limiti SEO, SMS, X, Instagram o LinkedIn.',
      },
      {
        title: 'Usa la dimensione in byte per i limiti tecnici',
        description:
          'Verifica il totale in byte UTF-8 per convalidare colonne di database, payload di API o campi di file limitati in byte anziché in caratteri.',
      },
      {
        title: 'Confronta con e senza spazi',
        description:
          'Passa dal totale con spazi al totale senza spazi quando un modulo o una piattaforma conta solo i caratteri non bianchi.',
      },
      {
        title: 'Risolvi un conteggio che sembra sbagliato',
        description:
          'Se un conteggio sembra errato, verifica i caratteri invisibili come gli spazi finali o gli a capo incollati, che vengono contati nel totale con spazi.',
      },
    ],
    examples: [
      {
        title: 'Verifica di un titolo meta',
        input: 'Contatore di Parole: conta parole e tempo di lettura',
        output: '53 / 60 caratteri (7 rimanenti)',
        explanation:
          'Rientra comodamente nella finestra di visualizzazione tipica di 60 caratteri dei titoli nei motori di ricerca.',
      },
      {
        title: 'Verifica dei byte di un’emoji multi-byte',
        input: 'Giorno di lancio 🚀',
        output: '19 unità di codice UTF-16 · 21 byte UTF-8',
        explanation:
          'Mostra le differenze esatte di dimensione in byte quando sono inclusi caratteri non ASCII.',
      },
    ],
    benefits: [
      'Segue sia i caratteri con spazi sia il numero di caratteri senza spazi',
      'Misura la lunghezza esatta in byte UTF-8 per i limiti di colonne di database e payload di API',
      'Include indicatori visivi di limite per i tag SEO, gli SMS, X, Instagram e LinkedIn',
      'Nessun invio a un server né registrazione dei caratteri',
    ],
    useCases: [
      'Scrivere tag title e meta description senza troncamento nei motori di ricerca',
      'Scrivere notifiche SMS entro il limite di 160 caratteri di un segmento',
      'Convalidare la lunghezza di un campo VARCHAR di database in byte UTF-8',
      'Comporre didascalie concise per i social media prima della pubblicazione',
    ],
    faqs: [
      {
        question: 'Perché i byte UTF-8 a volte sono più numerosi dei caratteri?',
        answer:
          'I caratteri ASCII inglesi standard occupano 1 byte ciascuno in UTF-8, mentre i caratteri accentati, le scritture non latine e le emoji richiedono da 2 a 4 byte per carattere.',
      },
      {
        question: 'Il contatore di caratteri include gli a capo?',
        answer:
          'Sì. I caratteri di nuova riga sono contati nella misura «Con spazi» ed esclusi dalla misura «Senza spazi».',
      },
      {
        question: 'Che cosa succede se supero una barra di limite di una piattaforma?',
        answer:
          'L’indicatore di avanzamento diventa rosso e mostra il numero esatto di caratteri in eccesso, in modo che tu sappia quanto rimuovere.',
      },
      {
        question: 'Il Contatore di Caratteri è gratis?',
        answer:
          'Sì. Il Contatore di Caratteri è completamente gratuito, senza registrazione, senza limite di caratteri e senza bisogno di un account.',
      },
      {
        question: 'Qual è la differenza tra caratteri con e senza spazi?',
        answer:
          'I caratteri con spazi includono ogni spazio tra le parole, mentre i caratteri senza spazi li escludono, il che conta quando una piattaforma conta solo i caratteri visibili.',
      },
      {
        question: 'Il Contatore di Caratteri conta le emoji?',
        answer:
          'Sì. Ogni emoji conta come caratteri e, poiché la maggior parte delle emoji usa più byte UTF-8, il totale in byte sarà superiore al numero di caratteri.',
      },
      {
        question: 'Quanti caratteri posso incollare nel Contatore di Caratteri?',
        answer:
          'Non c’è un limite definito. Il conteggio avviene interamente nel tuo browser, quindi anche i documenti molto lunghi vengono misurati all’istante.',
      },
      {
        question: 'Qual è il limite di caratteri di un titolo meta SEO?',
        answer:
          'I motori di ricerca mostrano in genere circa 50–60 caratteri di un tag title, quindi restare in questo intervallo evita il troncamento nei risultati.',
      },
      {
        question: 'Qual è il limite di caratteri di una meta description?',
        answer:
          'I motori di ricerca mostrano in genere circa 150–160 caratteri di una meta description, quindi lo strumento segue i tuoi progressi verso questo intervallo.',
      },
      {
        question: 'Quanti caratteri stanno in un singolo SMS?',
        answer:
          'Un segmento SMS standard contiene 160 caratteri con l’alfabeto GSM di base; i messaggi più lunghi vengono divisi in più segmenti.',
      },
      {
        question: 'Il Contatore di Caratteri conta le tabulazioni e gli a capo?',
        answer:
          'Sì. Le tabulazioni e gli a capo sono contati nel totale con spazi, quindi un testo incollato con righe vuote in più mostrerà un conteggio più alto.',
      },
      {
        question: 'Il Contatore di Caratteri include la punteggiatura nel conteggio?',
        answer:
          'Sì. I segni di punteggiatura contano come caratteri e sono inclusi nei totali con e senza spazi.',
      },
      {
        question: 'Quale limite di caratteri usa X (Twitter)?',
        answer:
          'I post su X sono limitati a 280 caratteri per la maggior parte degli account e le barre di limite di questo strumento mostrano i tuoi progressi verso questa soglia.',
      },
      {
        question: 'Posso verificare la lunghezza di una didascalia Instagram?',
        answer:
          'Sì. Incolla la tua didascalia e osserva l’indicatore di limite Instagram; le didascalie sono limitate a 2.200 caratteri.',
      },
      {
        question: 'Il Contatore di Caratteri funziona con testo non inglese?',
        answer:
          'Sì. Conta i caratteri in qualsiasi scrittura e il totale in byte UTF-8 mostra la vera dimensione di archiviazione delle lettere accentate e dei caratteri non latini.',
      },
      {
        question: 'Posso usare il Contatore di Caratteri per un post LinkedIn?',
        answer:
          'Sì. Incolla il tuo post e verifica l’indicatore di limite LinkedIn, che segue il limite di 3.000 caratteri dei post.',
      },
      {
        question: 'Il Contatore di Caratteri registra o invia il mio testo?',
        answer:
          'No. Tutti i conteggi avvengono localmente nel tuo browser e il tuo testo non viene mai inviato, archiviato o condiviso.',
      },
      {
        question: 'Perché il mio conteggio differisce da Microsoft Word?',
        answer:
          'Gli strumenti trattano in modo diverso gli a capo, le tabulazioni e i caratteri di formattazione nascosti, quindi piccole differenze tra conteggi sono normali.',
      },
      {
        question: 'Che cosa conta come lettera rispetto a una cifra?',
        answer:
          'Le lettere sono caratteri alfabetici in qualsiasi scrittura, mentre le cifre sono i caratteri numerici da 0 a 9; entrambi vengono mostrati in totali separati.',
      },
      {
        question: 'Posso verificare il numero di caratteri di un campo password o nome utente?',
        answer:
          'Sì. Incolla il valore nello strumento per verificare che rispetti una lunghezza minima o massima prima di inviare un modulo.',
      },
    ],
  },
  'case-converter': {
    slug: 'convertitore-maiuscole-minuscole',
    name: 'Convertitore di Maiuscole',
    shortDescription:
      'Converti un testo tra MAIUSCOLO, minuscolo, Maiuscolo Iniziale, maiuscole di frase, camelCase, snake_case e kebab-case.',
    keywords: [
      'convertitore di maiuscole',
      'convertitore maiuscolo iniziale',
      'maiuscolo in minuscolo',
      'convertitore camelcase',
      'generatore snake case',
      'convertitore maiuscole',
      'convertitore minuscole',
      'convertitore maiuscole di frase',
      'convertitore pascalcase',
    ],
    seo: {
      title: 'Convertitore di Maiuscole: titoli e camelCase | UtilityFlow',
      description:
        'Trasforma un testo tra maiuscolo, minuscolo, Maiuscolo Iniziale, maiuscole di frase, camelCase, PascalCase, snake_case e kebab-case senza registrazione.',
      primaryKeyword: 'convertitore di maiuscole',
      secondaryKeywords: ['convertitore maiuscolo iniziale', 'strumento maiuscole di frase', 'cambiare le maiuscole del testo', 'maiuscolo in minuscolo'],
      longTailKeywords: ['convertire un testo in maiuscolo in maiuscole di frase', 'convertire una stringa in camelcase e snake_case', 'strumento di capitalizzazione titoli online', 'cambiare le maiuscole in minuscole online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Correggi un testo digitato per errore con il blocco maiuscole attivo, standardizza i titoli degli articoli in Maiuscolo Iniziale oppure formatta gli identificatori di variabili in camelCase, PascalCase, snake_case o kebab-case con un solo clic.',
    instructions: [
      {
        title: 'Incolla o scrivi il tuo testo',
        description:
          'Inserisci titoli, paragrafi o stringhe di identificatori nell’editor.',
      },
      {
        title: 'Scegli uno stile di maiuscole',
        description:
          'Fai clic su un pulsante di trasformazione — ad esempio Maiuscolo Iniziale, maiuscole di frase, camelCase o snake_case — per aggiornare il testo immediatamente.',
      },
      {
        title: 'Copia il risultato formattato',
        description:
          'Usa il pulsante Copia risultato per trasferire il testo convertito negli appunti.',
      },
      {
        title: 'Correggi un testo TUTTO IN MAIUSCOLO in un clic',
        description:
          'Incolla il testo digitato con il blocco maiuscole attivo e scegli le maiuscole di frase per ripristinare una capitalizzazione normale in ogni frase.',
      },
      {
        title: 'Converti gli identificatori per il codice',
        description:
          'Incolla un’etichetta semplice come «stato dell’account utente» e scegli camelCase, PascalCase, snake_case o kebab-case per ottenere un nome di variabile pronto all’uso.',
      },
      {
        title: 'Risolvi una capitalizzazione strana',
        description:
          'Se il Maiuscolo Iniziale lascia una parola in minuscolo, probabilmente è una parola minore come «e» o «di»; ridigitala oppure applica le Maiuscole solo a quella parola.',
      },
    ],
    examples: [
      {
        title: 'Correggere un testo tutto in maiuscolo per errore',
        input: 'QUESTO RAPPORTO RIASSUME I RISULTATI DEL QUARTO TRIMESTRE. TUTTE LE MISURE SONO DEFINITIVE.',
        output: 'Questo rapporto riassume i risultati del quarto trimestre. Tutte le misure sono definitive.',
        explanation:
          'Le maiuscole di frase mettono tutte le lettere in minuscolo e capitalizzano l’inizio di ogni frase.',
      },
      {
        title: 'Formattare gli identificatori di codice',
        input: 'stato di fatturazione dell’account utente',
        output: 'statoDiFatturazioneDellAccountUtente (camelCase) / stato_di_fatturazione_dell_account_utente (snake_case)',
        explanation:
          'Converte le etichette in italiano direttamente nelle convenzioni standard di programmazione.',
      },
    ],
    benefits: [
      'Supporta 10 formati di maiuscole per la prosa e lo sviluppo in un unico spazio',
      'Il Maiuscolo Iniziale intelligente mantiene le preposizioni e le congiunzioni minori in minuscolo',
      'Gestisce correttamente i paragrafi multi-frase e gli a capo',
      'Funziona localmente nel tuo browser con copia istantanea in un clic',
    ],
    useCases: [
      'Riconvertire e-mail digitate per errore TUTTE IN MAIUSCOLO in maiuscole di frase',
      'Formattare i titoli di blog e video YouTube in modo coerente',
      'Rinominare colonne di database, classi CSS o variabili JavaScript',
      'Normalizzare le intestazioni di fogli di calcolo prima di importare file CSV',
    ],
    faqs: [
      {
        question: 'Come gestisce il Maiuscolo Iniziale le parole brevi come «e» o «di»?',
        answer:
          'Il formattatore di Maiuscolo Iniziale capitalizza la prima e l’ultima parola del titolo mantenendo in minuscolo gli articoli, le congiunzioni e le preposizioni brevi standard (come un, una, e, di, a, in).',
      },
      {
        question: 'Posso convertire un identificatore snake_case o camelCase esistente in un altro formato?',
        answer:
          'Sì. I confini delle parole a underscore, trattini e transizioni camelCase vengono suddivisi automaticamente prima di applicare la nuova regola di maiuscole.',
      },
      {
        question: 'Le maiuscole di frase preservano più paragrafi?',
        answer:
          'Sì. La capitalizzazione si azzera all’inizio del testo, dopo la punteggiatura di fine frase e all’inizio delle nuove righe.',
      },
      {
        question: 'Il Convertitore di Maiuscole è gratis?',
        answer:
          'Sì. Il Convertitore di Maiuscole è completamente gratuito, senza registrazione, senza limite di lunghezza del testo e senza bisogno di un account.',
      },
      {
        question: 'Qual è la differenza tra Maiuscolo Iniziale e maiuscole di frase?',
        answer:
          'Il Maiuscolo Iniziale capitalizza la maggior parte delle parole di un titolo, mentre le maiuscole di frase capitalizzano solo la prima parola di ogni frase e i nomi propri, come una frase normale.',
      },
      {
        question: 'A cosa serve il camelCase?',
        answer:
          'Il camelCase è lo stile di denominazione standard delle variabili e delle funzioni in JavaScript e in molti altri linguaggi di programmazione, ad esempio statoAccountUtente.',
      },
      {
        question: 'A cosa serve lo snake_case?',
        answer:
          'Lo snake_case separa le parole con underscore ed è comunemente usato per le variabili Python, le colonne di database e i nomi di file, ad esempio stato_account_utente.',
      },
      {
        question: 'A cosa serve il kebab-case?',
        answer:
          'Il kebab-case separa le parole con trattini ed è comunemente usato per gli URL, i nomi delle classi CSS e gli attributi HTML, ad esempio stato-account-utente.',
      },
      {
        question: 'A cosa serve il PascalCase?',
        answer:
          'Il PascalCase capitalizza ogni parola senza separatore ed è comunemente usato per i nomi di classi e componenti, ad esempio StatoAccountUtente.',
      },
      {
        question: 'Il Convertitore di Maiuscole può correggere un testo digitato TUTTO IN MAIUSCOLO?',
        answer:
          'Sì. Incolla il testo in maiuscolo e scegli le maiuscole di frase o le minuscole per ripristinare una capitalizzazione normale in un clic.',
      },
      {
        question: 'Il Convertitore di Maiuscole funziona con numeri e simboli?',
        answer:
          'Sì. Numeri, punteggiatura e simboli passano così come sono; solo le lettere vengono convertite.',
      },
      {
        question: 'Posso convertire un intero paragrafo in una volta sola?',
        answer:
          'Sì. Incolla l’intero paragrafo e il convertitore applica le maiuscole scelte a tutte le sue frasi e a tutti i suoi a capo.',
      },
      {
        question: 'Il Maiuscolo Iniziale capitalizza le parole dopo i due punti?',
        answer:
          'Le parole dopo i due punti vengono trattate come le altre parole del titolo: le parole principali vengono capitalizzate e le parole minori restano in minuscolo.',
      },
      {
        question: 'Il Convertitore di Maiuscole gestisce altre lingue?',
        answer:
          'Sì. Converte le lettere in qualsiasi lingua che usa forme maiuscole e minuscole, anche se le regole delle parole minori del Maiuscolo Iniziale si basano sull’inglese.',
      },
      {
        question: 'Posso riconvertire lo snake_case in parole normali?',
        answer:
          'Sì. Incolla l’identificatore e scegli le maiuscole di frase o il Maiuscolo Iniziale; gli underscore vengono trattati come separatori di parole e sostituiti da spazi.',
      },
      {
        question: 'Che fine fanno gli a capo quando converto le maiuscole?',
        answer:
          'Gli a capo vengono preservati esattamente, quindi un testo multi-riga mantiene la sua struttura dopo la conversione.',
      },
      {
        question: 'Il Convertitore di Maiuscole registra o invia il mio testo?',
        answer:
          'No. La conversione avviene localmente nel tuo browser e il tuo testo non viene mai inviato, archiviato o condiviso.',
      },
      {
        question: 'Posso convertire un testo la cui capitalizzazione è già mista?',
        answer:
          'Sì. Il convertitore suddivide prima le parole a underscore, trattini e transizioni di maiuscole, quindi un input a maiuscole miste si converte correttamente.',
      },
      {
        question: 'Posso usare il Convertitore di Maiuscole per i titoli YouTube?',
        answer:
          'Sì. Incolla il titolo del tuo video e applica il Maiuscolo Iniziale per uno stile di titolo coerente e professionale.',
      },
      {
        question: 'Il Convertitore di Maiuscole funziona sul mio telefono?',
        answer:
          'Sì. Funziona in qualsiasi browser mobile moderno con le stesse conversioni in un clic e lo stesso pulsante di copia.',
      },
    ],
  },
  'remove-duplicate-lines': {
    slug: 'rimuovi-righe-duplicate',
    name: 'Rimuovi le Righe Duplicate',
    shortDescription:
      'Deduplica elenchi e log con opzioni di distinzione tra maiuscole e minuscole, rimozione degli spazi e ordinamento alfabetico.',
    keywords: [
      'rimuovere le righe duplicate',
      'deduplicare un elenco online',
      'filtro righe uniche',
      'rimuovere le righe ripetute',
      'rimuovere i duplicati da un elenco',
      'deduplicare un elenco di email',
      'righe uniche online',
      'rimuovere le voci ripetute',
      'pulire le voci duplicate',
    ],
    seo: {
      title: 'Rimuovi le Righe Duplicate: deduplica | UtilityFlow',
      description:
        'Rimuovere le righe ripetute da elenchi, email, URL o log all’istante, con rimozione degli spazi e ordinamento opzionale, gratis online senza registrazione.',
      primaryKeyword: 'rimuovere le righe duplicate',
      secondaryKeywords: ['deduplica righe di testo online', 'deduplicare un elenco di testo', 'strumento righe uniche', 'rimuovere le voci duplicate'],
      longTailKeywords: ['deduplicare un elenco mantenendo l’ordine originale', 'deduplicare un elenco di email ignorando le maiuscole', 'pulire le righe ripetute di un testo online', 'rimuovere i duplicati da un elenco di email online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Pulisci elenchi disordinati, parole chiave esportate, indirizzi email o log di server rimuovendo le voci duplicate mentre controlli la rimozione degli spazi, la distinzione tra maiuscole e minuscole e l’ordine di output.',
    instructions: [
      {
        title: 'Incolla il tuo elenco separato per righe',
        description:
          'Aggiungi qualsiasi elenco con un elemento per riga nella casella Righe originali.',
      },
      {
        title: 'Configura le regole di corrispondenza',
        description:
          'Attiva Distingui maiuscole/minuscole, Rimuovi spazi, Rimuovi righe vuote oppure Ordina alfabeticamente a seconda della rigorosità di corrispondenza desiderata.',
      },
      {
        title: 'Copia le righe uniche',
        description:
          'Verifica quanti duplicati sono stati rimossi nell’intestazione di riepilogo e fai clic su Copia per recuperare l’elenco pulito.',
      },
      {
        title: 'Ordina l’elenco pulito alfabeticamente',
        description:
          'Attiva Ordina alfabeticamente se vuoi che le righe uniche siano classificate dalla A alla Z invece di mantenere l’ordine di prima occorrenza.',
      },
      {
        title: 'Verifica i contatori del riepilogo',
        description:
          'Consulta il numero di righe originali, il numero di righe uniche e i duplicati rimossi nell’intestazione di riepilogo per confermare che la pulizia ha funzionato come previsto.',
      },
      {
        title: 'Risolvi le righe che non si sono deduplicate',
        description:
          'Se due righe che sembrano identiche rimangono, verifica gli spazi finali nascosti o le differenze di capitalizzazione, poi attiva Rimuovi spazi o disattiva Distingui maiuscole/minuscole e rilancia lo strumento.',
      },
    ],
    examples: [
      {
        title: 'Pulizia di un elenco di email',
        input: 'alessandro@esempio.com\nsamuele@esempio.com\nAlessandro@esempio.com\n  samuele@esempio.com  ',
        output: 'alessandro@esempio.com\nsamuele@esempio.com',
        explanation:
          'Con la rimozione degli spazi attiva e la distinzione tra maiuscole e minuscole disattiva, gli spazi finali e le varianti di capitalizzazione si raggruppano correttamente.',
      },
      {
        title: 'Pulizia di un elenco di parole chiave',
        input: 'scarpe da corsa\nscarpe running\nscarpe da corsa\nsneakers',
        output: 'scarpe da corsa\nscarpe running\nsneakers',
        explanation:
          'Le parole chiave ripetute vengono rimosse mantenendo l’ordine di prima occorrenza dell’elenco.',
      },
    ],
    benefits: [
      'Preserva l’ordine di prima occorrenza per impostazione predefinita oppure ordina alfabeticamente su richiesta',
      'Mostra il numero esatto di righe originali, righe uniche e duplicati rimossi',
      'Gestisce senza sforzo i grandi elenchi di migliaia di righe nella memoria del client',
      'Mantiene gli elenchi privati e gli export dei clienti fuori dai server di terze parti',
    ],
    useCases: [
      'Deduplicare export di ricerca di parole chiave ed elenchi di URL',
      'Pulire elenchi di email di iscritti prima di importarli in un CRM',
      'Rimuovere le tracce di stack o le voci IP ripetute dai file di log',
      'Preparare elenchi unici di tag o SKU per fogli di calcolo',
    ],
    faqs: [
      {
        question: 'Lo strumento Rimuovi le Righe Duplicate preserva il mio ordine originale?',
        answer:
          'Sì. Per impostazione predefinita mantiene la prima occorrenza di ogni riga unica nel suo ordine originale. Puoi attivare «Ordina alfabeticamente» quando vuoi anche una classificazione dalla A alla Z.',
      },
      {
        question: 'In che modo la rimozione degli spazi influisce sul rilevamento dei duplicati?',
        answer:
          'Quando Rimuovi spazi è spuntato, gli spazi iniziali e finali vengono rimossi prima della verifica di unicità, il che evita che elementi come «mela» e «mela » siano trattati come diversi.',
      },
      {
        question: 'Che cosa devo fare se voglio mantenere le varianti di maiuscole come «USA» e «usa»?',
        answer:
          'Attiva la casella «Distingui maiuscole/minuscole» in modo che le righe con una capitalizzazione diversa restino voci separate.',
      },
      {
        question: 'Lo strumento Rimuovi le Righe Duplicate è gratis?',
        answer:
          'Sì. Lo strumento è completamente gratuito, senza registrazione, senza limite di righe e senza bisogno di un account.',
      },
      {
        question: 'Che cosa conta come riga duplicata?',
        answer:
          'Due righe sono duplicati quando il loro testo corrisponde esattamente secondo le impostazioni attuali, incluse le opzioni di distinzione tra maiuscole e minuscole e di rimozione degli spazi che hai scelto.',
      },
      {
        question: 'Funziona con elenchi separati da virgole?',
        answer:
          'Non direttamente. Lo strumento confronta righe intere, quindi dividi prima un elenco separato da virgole in un elemento per riga, poi incollalo.',
      },
      {
        question: 'Posso rimuovere le righe duplicate da un file CSV?',
        answer:
          'Sì. Copia la colonna o le righe del tuo CSV, incollale come righe, deduplica, poi reincolla l’elenco pulito nel tuo foglio di calcolo.',
      },
      {
        question: 'Che fine fanno le righe vuote?',
        answer:
          'Le righe vuote vengono trattate come qualsiasi altra riga, quindi attivare «Rimuovi righe vuote» le cancella dall’output insieme ai duplicati.',
      },
      {
        question: 'Posso rimuovere i duplicati da un elenco di URL?',
        answer:
          'Sì. Incolla un URL per riga e lo strumento rimuove gli URL ripetuti, il che è utile per pulire export di parole chiave ed elenchi di sitemap.',
      },
      {
        question: 'Quante righe posso deduplicare in una volta?',
        answer:
          'Non c’è un limite definito. La deduplicazione avviene interamente nel tuo browser, quindi elenchi di migliaia di righe vengono elaborati senza sforzo nella memoria del client.',
      },
      {
        question: 'Lo strumento mantiene la prima o l’ultima occorrenza di un duplicato?',
        answer:
          'Mantiene la prima occorrenza di ogni riga unica e rimuove le ripetizioni successive, il che preserva il tuo ordine originale.',
      },
      {
        question: 'Posso rimuovere gli indirizzi email duplicati da un elenco?',
        answer:
          'Sì. Incolla un indirizzo per riga con la distinzione tra maiuscole e minuscole disattiva e la rimozione degli spazi attiva, e gli indirizzi duplicati si raggruppano in una sola voce.',
      },
      {
        question: 'L’ordinamento cambia le righe mantenute?',
        answer:
          'No. L’ordinamento si limita a riordinare le righe uniche in ordine alfabetico dopo la deduplicazione; non cambia quali righe sono considerate duplicati.',
      },
      {
        question: 'Lo strumento rimuove le parole duplicate all’interno di una singola riga?',
        answer:
          'No. Confronta righe intere, quindi i duplicati all’interno di una riga non vengono toccati; usa lo strumento Trova e Sostituisci per una pulizia a livello di parole.',
      },
      {
        question: 'Lo strumento funziona con numeri o indirizzi IP?',
        answer:
          'Sì. Qualsiasi contenuto di riga funziona, inclusi numeri, indirizzi IP, SKU e codici, purché ogni elemento sia sulla propria riga.',
      },
      {
        question: 'Posso rimuovere le righe duplicate dai log del server?',
        answer:
          'Sì. Incolla le righe del log e deduplicale per isolare gli errori unici o le voci IP ripetute e risolvere i problemi più velocemente.',
      },
      {
        question: 'Lo strumento Rimuovi le Righe Duplicate registra o invia il mio elenco?',
        answer:
          'No. La deduplicazione avviene localmente nel tuo browser e il tuo elenco non viene mai inviato, archiviato o condiviso.',
      },
      {
        question: 'Che cosa devo fare se il mio elenco usa punti e virgola invece di a capo?',
        answer:
          'Lo strumento tratta ogni riga come un elemento, quindi sostituisci prima i punti e virgola con a capo, poi incolla l’elenco per deduplicarlo.',
      },
      {
        question: 'Posso rimuovere i duplicati mantenendo le righe vuote?',
        answer:
          'Sì. Lascia «Rimuovi righe vuote» deselezionato e le righe vuote saranno conservate nell’output insieme agli elementi deduplicati.',
      },
      {
        question: 'Lo strumento funziona sul mio telefono?',
        answer:
          'Sì. Funziona in qualsiasi browser mobile moderno con le stesse opzioni di deduplicazione e lo stesso pulsante di copia.',
      },
    ],
  },
  'text-diff-checker': {
    slug: 'confronto-testo',
    name: 'Confronto Testo',
    shortDescription:
      'Confronta due blocchi di testo riga per riga per individuare aggiunte, eliminazioni e righe invariate.',
    keywords: [
      'confronto testo',
      'confrontare due testi',
      'strumento diff online',
      'confronto di testo',
      'confrontare due file di testo',
      'strumento differenze online',
      'trovare le differenze tra due testi',
      'strumento di confronto testo',
      'diff riga per riga',
    ],
    seo: {
      title: 'Confronto Testo: confronta due testi | UtilityFlow',
      description:
        'Confronta due versioni di testo, codice o configurazione fianco a fianco con indicatori chiari di righe aggiunte ed eliminate, nel tuo browser, gratis online.',
      primaryKeyword: 'confronto testo',
      secondaryKeywords: ['confrontare testo online', 'verifica diff', 'strumento differenze di testo', 'strumento diff online'],
      longTailKeywords: ['confrontare due file di testo riga per riga online', 'confronto diff che ignora spazi e maiuscole', 'strumento di confronto testo lato client', 'confrontare due versioni di un documento online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Individua ogni inserimento, eliminazione e modifica tra due versioni di un articolo, una clausola di contratto o un frammento di configurazione grazie a un motore di diff riga per riga basato sulla sottosequenza comune più lunga.',
    instructions: [
      {
        title: 'Incolla le due versioni',
        description:
          'Metti la copia di riferimento in Testo originale e la versione rivista in Testo modificato.',
      },
      {
        title: 'Regola le opzioni di confronto',
        description:
          'Attiva Ignora spazi o Ignora maiuscole/minuscole se vuoi saltare le modifiche di sola formattazione.',
      },
      {
        title: 'Esamina le modifiche evidenziate',
        description:
          'Scorri il pannello Confronto righe con gli indicatori + aggiunto, - eliminato e i numeri di riga.',
      },
      {
        title: 'Consulta il riepilogo delle modifiche',
        description:
          'Leggi i contatori di righe aggiunte, eliminate e invariate per avere un’idea rapida dell’entità delle modifiche tra le due versioni.',
      },
      {
        title: 'Confronta solo una sezione precisa',
        description:
          'Incolla solo la sezione che ti interessa nelle due caselle per confrontare un solo paragrafo o un solo blocco di configurazione senza il resto del documento.',
      },
      {
        title: 'Risolvi un diff che sembra sbagliato',
        description:
          'Se quasi ogni riga appare come modificata, i due testi potrebbero usare finali di riga o indentazione diversi; attiva Ignora spazi e verifica che i due incollaggi inizino alla stessa riga.',
      },
    ],
    examples: [
      {
        title: 'Verifica di una revisione di configurazione',
        input: 'Originale: TTL cache: 600\nModificato: TTL cache: 1800',
        output: '- TTL cache: 600\n+ TTL cache: 1800',
        explanation:
          'Isola chiaramente la riga modificata con i vecchi e nuovi numeri di riga.',
      },
      {
        title: 'Revisione di un paragrafo di articolo',
        input: 'Originale: Il lancio è previsto a marzo.\nModificato: Il lancio è previsto ad aprile.',
        output: '- Il lancio è previsto a marzo.\n+ Il lancio è previsto ad aprile.',
        explanation:
          'Mostra esattamente quale frase è cambiata tra le due versioni di una bozza.',
      },
    ],
    benefits: [
      'Usa l’allineamento per sottosequenza comune più lunga (LCS) anziché una semplice corrispondenza di indice',
      'Abbina l’evidenziazione a colori ai simboli + / - per l’accessibilità ai daltonici',
      'Segue i numeri di riga originali e modificati fianco a fianco',
      'Mantiene le bozze confidenziali e i file di configurazione strettamente nella memoria locale del browser',
    ],
    useCases: [
      'Revisionare le modifiche tra due revisioni di un articolo o di un contratto',
      'Ispezionare le modifiche in frammenti di configurazione .env, JSON o YAML',
      'Verificare aggiornamenti di traduzione o revisioni di politiche legali',
      'Verificare rapidamente le revisioni di bozze di studenti o team',
    ],
    faqs: [
      {
        question: 'Come gestisce l’algoritmo di diff le righe inserite nel mezzo di un file?',
        answer:
          'Poiché usa un algoritmo di confronto di righe per sottosequenza comune più lunga (LCS), l’inserimento di righe sposta i numeri di riga successivi senza contrassegnare il resto del file come modificato.',
      },
      {
        question: 'Che cosa fa «Ignora spazi»?',
        answer:
          'Questa opzione rimuove gli spazi iniziali e finali e unisce gli spazi consecutivi multipli prima di confrontare le righe, il che aiuta a concentrarsi sulle modifiche di contenuto anziché sui ritocchi di indentazione.',
      },
      {
        question: 'C’è un limite di caratteri per confrontare testi?',
        answer:
          'Il confronto avviene direttamente nel tuo browser senza limiti di server; i documenti tipici di migliaia di righe si confrontano quasi all’istante.',
      },
      {
        question: 'Il Confronto Testo è gratis?',
        answer:
          'Sì. Il Confronto Testo è completamente gratuito, senza registrazione, senza limite di confronto e senza bisogno di un account.',
      },
      {
        question: 'Qual è la differenza tra righe aggiunte ed eliminate?',
        answer:
          'Le righe aggiunte appaiono solo nel testo modificato e sono contrassegnate con un simbolo +, mentre le righe eliminate appaiono solo nel testo originale e sono contrassegnate con un simbolo -.',
      },
      {
        question: 'Posso confrontare due file invece di testo incollato?',
        answer:
          'Non direttamente. Copia il contenuto di ogni file e incollalo nelle caselle Testo originale e Testo modificato per confrontarli.',
      },
      {
        question: 'Il Confronto Testo funziona con il codice?',
        answer:
          'Sì. Confronta qualsiasi testo basato su righe, incluso il codice sorgente, quindi puoi individuare le righe modificate tra due versioni di uno script o di un foglio di stile.',
      },
      {
        question: 'Posso confrontare file di configurazione JSON o YAML?',
        answer:
          'Sì. Incolla ogni versione nelle due caselle e il diff evidenzierà le chiavi, i valori e le righe modificate della tua configurazione.',
      },
      {
        question: 'Che cosa fa «Ignora maiuscole/minuscole»?',
        answer:
          'Questa opzione tratta maiuscole e minuscole come uguali durante il confronto, quindi una riga la cui sola capitalizzazione è cambiata non sarà contrassegnata come diversa.',
      },
      {
        question: 'Posso confrontare testi in lingue diverse?',
        answer:
          'Sì. Il confronto funziona su qualsiasi testo, anche se le righe in lingue diverse appariranno naturalmente come modificate perché il loro contenuto differisce.',
      },
      {
        question: 'Il Confronto Testo mostra le modifiche a livello di caratteri?',
        answer:
          'No. Il confronto funziona riga per riga, quindi una parola modificata contrassegna l’intera riga come modificata; per maggiori dettagli, confronta le due righe separatamente.',
      },
      {
        question: 'Posso confrontare un documento con la sua vecchia versione?',
        answer:
          'Sì. Incolla la vecchia versione come Testo originale e la nuova versione come Testo modificato per vedere ogni aggiunta ed eliminazione.',
      },
      {
        question: 'Come vengono mostrati i numeri di riga nel confronto?',
        answer:
          'Ogni riga mantiene il proprio numero ricavato dal suo testo originale, in modo che tu possa ritrovare una riga modificata alla sua posizione esatta in una o nell’altra versione.',
      },
      {
        question: 'Il Confronto Testo registra o invia il mio testo?',
        answer:
          'No. Il confronto avviene localmente nel tuo browser e i tuoi testi non vengono mai inviati, archiviati o condivisi.',
      },
      {
        question: 'Posso confrontare contratti legali con il Confronto Testo?',
        answer:
          'Sì. Incolla le due versioni del contratto per individuare le clausole modificate, anche se dovresti sempre far esaminare le modifiche legali importanti da un avvocato.',
      },
      {
        question: 'Che cosa succede se incollo lo stesso testo in entrambe le caselle?',
        answer:
          'Il confronto mostrerà zero righe aggiunte e zero righe eliminate, confermando che i due testi sono identici.',
      },
      {
        question: 'Posso confrontare testo con finali di riga diversi?',
        answer:
          'Sì. Se i finali di riga differiscono, il diff può contrassegnare le righe come modificate; attivare Ignora spazi elimina in genere queste differenze di sola formattazione.',
      },
      {
        question: 'Il Confronto Testo funziona con documenti grandi?',
        answer:
          'Sì. I documenti di migliaia di righe si confrontano quasi all’istante nel browser, senza alcun invio a un server.',
      },
      {
        question: 'Posso usare il Confronto Testo per le revisioni di traduzione?',
        answer:
          'Sì. Incolla la traduzione originale e la traduzione rivista per esaminare ogni riga modificata fianco a fianco.',
      },
      {
        question: 'Il Confronto Testo funziona sul mio telefono?',
        answer:
          'Sì. Funziona in qualsiasi browser mobile moderno con lo stesso confronto fianco a fianco e la stessa evidenziazione.',
      },
    ],
  },
  'whitespace-remover': {
    slug: 'rimuovi-spazi-superflui',
    name: 'Rimuovi Spazi e A Capo',
    shortDescription:
      'Rimuovi gli spazi superflui, le tabulazioni, le righe vuote e gli a capo indesiderati dal testo copiato da un PDF o dal web.',
    keywords: [
      'rimuovi spazi',
      'rimuovere gli spazi superflui',
      'rimuovi a capo',
      'rimuovere le righe vuote',
      'pulire il testo copiato da un pdf',
      'rimuovere gli spazi finali',
      'correggere gli a capo di un pdf',
      'ridurre gli spazi multipli',
      'pulire il testo online',
    ],
    seo: {
      title: 'Rimuovi Spazi Superflui: pulisci il testo | UtilityFlow',
      description:
        'Rimuovi spazi superflui, tabulazioni, righe vuote e a capo spezzati dei PDF nel tuo browser — rapido, gratis e senza registrazione, direttamente nel browser.',
      primaryKeyword: 'rimuovi spazi',
      secondaryKeywords: ['rimuovere gli spazi superflui', 'rimuovere gli a capo', 'pulire gli spazi del testo', 'rimuovere le righe vuote'],
      longTailKeywords: ['rimuovere gli spazi superflui e le righe vuote online', 'correggere gli a capo copiando da un pdf', 'convertire tabulazioni e spazi multipli in un solo spazio', 'rimuovere gli spazi finali da un testo copiato'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Pulisci il testo disordinato copiato da PDF, email, fogli di calcolo o pagine web riducendo gli spazi ripetuti, convertendo le tabulazioni, tagliando i bordi delle righe e normalizzando gli a capo.',
    instructions: [
      {
        title: 'Incolla il testo non formattato',
        description:
          'Inserisci il testo con spazi doppi, tabulazioni indesiderate o ritorni a capo spezzati nel campo Testo di input.',
      },
      {
        title: 'Scegli come trattare spazi e tabulazioni',
        description:
          'Riduci le sequenze di spazi multipli a uno solo, converti le tabulazioni in spazi singoli e taglia gli spazi iniziali e finali di ogni riga.',
      },
      {
        title: 'Scegli un’opzione di a capo',
        description:
          'Mantieni gli a capo di paragrafo, rimuovi solo le righe vuote, sostituisci gli a capo con spazi per riunire le frasi spezzate oppure rimuovi tutti gli a capo per ottenere una sola riga continua.',
      },
      {
        title: 'Esamina il risultato pulito',
        description:
          'Verifica il risultato nel pannello di output e il contatore di caratteri che indica esattamente quanti caratteri sono stati rimossi durante la pulizia.',
      },
      {
        title: 'Copia il testo pulito',
        description:
          'Usa il pulsante di copia per copiare il risultato normalizzato, poi incollalo nel tuo documento, modulo o campo CMS.',
      },
      {
        title: 'Correggi le frasi che si incollano',
        description:
          'Se le parole di righe separate si uniscono senza spazio, passa a «Sostituisci con spazi». Se i paragrafi si sono fusi in un solo blocco, torna invece a «Rimuovi righe vuote».',
      },
    ],
    examples: [
      {
        title: 'Pulizia di un copia-incolla da PDF',
        input: '   Prima   riga con   spazi superflui.\n\n\nSeconda   riga   qui.   ',
        output: 'Prima riga con spazi superflui.\nSeconda riga qui.',
        explanation:
          'Riduce gli spazi doppi, taglia i margini e rimuove le righe vuote di spaziatura.',
      },
      {
        title: 'Trasformare un indirizzo multi-riga in una sola riga',
        input: 'Via dei Gelsi 12\n20121 Milano\nItalia',
        output: 'Via dei Gelsi 12 20121 Milano Italia',
        explanation:
          'Sostituisce gli a capo con spazi per incollare l’indirizzo in un solo campo di modulo.',
      },
    ],
    benefits: [
      'Corregge i ritorni a capo spezzati dei documenti PDF in un clic',
      'Conta il numero esatto di caratteri rimossi durante la pulizia',
      'Permette di mantenere i paragrafi rimuovendo solo l’eccesso di spaziatura',
      'Elabora tutto localmente nel browser',
    ],
    useCases: [
      'Riparare il testo spezzato copiato da PDF multi-colonna',
      'Rimuovere gli spazi finali prima di incollare nei campi CMS',
      'Appiattire indirizzi o frammenti multi-riga in una sola riga',
      'Normalizzare note indentate con tabulazioni in testo pulito a spaziatura singola',
    ],
    faqs: [
      {
        question: 'Quale opzione di a capo scegliere per il testo copiato da un PDF?',
        answer:
          'Scegli «Sostituisci con spazi» quando i ritorni a capo forzati hanno spezzato le frasi a metà, oppure «Rimuovi righe vuote» se ogni riga è già un paragrafo o un elemento di elenco distinto.',
      },
      {
        question: 'La riduzione degli spazi influisce sugli spazi singoli tra le parole?',
        answer:
          'No. Solo le sequenze di due o più spazi consecutivi vengono ridotte a un solo spazio.',
      },
      {
        question: 'Questo strumento rimuove anche le tabulazioni?',
        answer:
          'Sì, quando «Converti tabulazioni in spazi» è attivo, i caratteri di tabulazione vengono trasformati in spazi singoli e uniti agli spazi adiacenti.',
      },
      {
        question: 'Lo strumento Rimuovi Spazi è gratis?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, senza account e senza limite sul numero di pulizie.',
      },
      {
        question: 'Il mio testo lascia il mio browser quando uso Rimuovi Spazi?',
        answer:
          'No. Tutta la pulizia avviene localmente nel tuo browser, quindi il tuo testo non viene mai inviato a un server.',
      },
      {
        question: 'Che cosa fa l’opzione «Rimuovi righe vuote»?',
        answer:
          'Rimuove le righe vuote dal tuo testo mantenendo ogni riga che contiene contenuto, quindi paragrafi ed elementi di elenco restano in ordine.',
      },
      {
        question: 'Posso mantenere gli a capo di paragrafo rimuovendo gli spazi superflui?',
        answer:
          'Sì. Scegli l’opzione che mantiene gli a capo e riduce solo gli spazi superflui, in modo che i paragrafi restino separati mentre la spaziatura interna viene corretta.',
      },
      {
        question: 'Qual è la differenza tra «Sostituisci con spazi» e rimuovere tutti gli a capo?',
        answer:
          '«Sostituisci con spazi» unisce le righe con un solo spazio in modo che le frasi spezzate si leggano correttamente, mentre rimuovere tutti gli a capo unisce le righe direttamente senza spazio tra loro.',
      },
      {
        question: 'Lo strumento Rimuovi Spazi rimuove gli spazi finali a fine riga?',
        answer:
          'Sì. Gli spazi e le tabulazioni alla fine di ogni riga vengono tagliati, il che è utile prima di incollare testo in moduli o campi di codice.',
      },
      {
        question: 'Rimuove gli spazi iniziali e l’indentazione a inizio riga?',
        answer:
          'Sì. Gli spazi bianchi iniziali di ogni riga vengono tagliati, quindi il testo incollato indentato o disallineato si allinea correttamente.',
      },
      {
        question: 'Posso pulire il testo copiato da un foglio di calcolo con Rimuovi Spazi?',
        answer:
          'Sì. Le tabulazioni tra le celle del foglio di calcolo vengono convertite in spazi singoli e le righe vuote in più degli intervalli copiati vengono rimosse.',
      },
      {
        question: 'Come trasformo un testo multi-riga in una sola riga?',
        answer:
          'Incolla il tuo testo, poi scegli l’opzione che sostituisce gli a capo con spazi o rimuove tutti gli a capo, e copia l’output in una sola riga ottenuto.',
      },
      {
        question: 'Lo strumento Rimuovi Spazi modifica la punteggiatura, le lettere o i numeri?',
        answer:
          'No. Modifica solo i caratteri di spaziatura come spazi, tabulazioni e a capo; le tue parole, la tua punteggiatura e i tuoi numeri restano esattamente come sono.',
      },
      {
        question: 'Posso usare Rimuovi Spazi per pulire il testo prima di incollarlo in un modulo?',
        answer:
          'Sì. È ideale per rimuovere gli spazi finali e gli a capo indesiderati da indirizzi, nomi o descrizioni prima di inserirli in un modulo web o in un campo CMS.',
      },
      {
        question: 'Che cosa significa il contatore di caratteri mostrato dopo la pulizia?',
        answer:
          'Mostra quanti caratteri sono stati rimossi durante la pulizia, in modo che tu possa vedere esattamente quanti spazi superflui lo strumento ha tolto dal tuo testo.',
      },
      {
        question: 'Lo strumento Rimuovi Spazi funziona su documenti molto lunghi?',
        answer:
          'Sì. Poiché funziona localmente nel tuo browser, puoi incollare documenti lunghi, anche se blocchi di testo estremamente voluminosi possono richiedere un momento per l’elaborazione.',
      },
      {
        question: 'Posso annullare una pulizia se scelgo l’opzione sbagliata?',
        answer:
          'Il tuo testo originale resta nel campo di input, quindi puoi semplicemente scegliere un’altra opzione e l’output si aggiorna senza perdere il testo incollato.',
      },
      {
        question: 'Lo strumento Rimuovi Spazi rimuove gli spazi all’interno delle parole?',
        answer:
          'No. Gli spazi all’interno delle parole sono spazi singoli, quindi non vengono toccati; solo le sequenze di due o più spazi vengono ridotte.',
      },
      {
        question: 'Quali tipi di spazi pulisce lo strumento?',
        answer:
          'Pulisce gli spazi ordinari, i caratteri di tabulazione, gli spazi finali e iniziali delle righe, le righe vuote e gli a capo indesiderati.',
      },
      {
        question: 'Posso usare Rimuovi Spazi sul codice?',
        answer:
          'Funziona per la prosa, ma fai attenzione con il codice sensibile all’indentazione come Python, perché tagliare gli spazi iniziali può cambiare il comportamento del codice.',
      },
    ],
  },
  'sort-lines': {
    slug: 'ordina-righe',
    name: 'Ordina le Righe Alfabeticamente',
    shortDescription:
      'Ordina elenchi dalla A alla Z, dalla Z alla A, in modo naturale (1, 2, 10), per lunghezza dei caratteri, al contrario o mescolati a caso.',
    keywords: [
      'ordinare le righe alfabeticamente',
      'mettere un elenco in ordine alfabetico online',
      'strumento ordinamento naturale',
      'ordinare il testo per lunghezza',
      'ordinare un elenco dalla a alla z',
      'strumento ordine alfabetico',
      'mescolare le righe online',
      'ordinare le righe dalla z alla a',
      'invertire l’ordine delle righe',
    ],
    seo: {
      title: 'Ordinare Righe Alfabeticamente: A-Z e Naturale | UtilityFlow',
      description:
        'Ordina le righe dalla A alla Z, dalla Z alla A, in ordine numerico naturale, per lunghezza, al contrario o mescolate — con deduplicazione opzionale nel browser.',
      primaryKeyword: 'ordinare le righe alfabeticamente',
      secondaryKeywords: ['mettere un elenco in ordine alfabetico', 'ordinatore di righe di testo', 'ordinamento naturale online', 'ordinare le righe dalla a alla z'],
      longTailKeywords: ['ordinare un elenco alfabeticamente con numeri in ordine naturale', 'ordinare le righe per lunghezza dal più corto al più lungo', 'mettere in ordine alfabetico e rimuovere le righe duplicate', 'invertire l’ordine delle righe online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organizza elenchi, bibliografie, SKU di inventario o import di codice in ordine alfabetico, numerico con ordinamento naturale, per lunghezza dei caratteri o al contrario.',
    instructions: [
      {
        title: 'Inserisci un elemento per riga',
        description:
          'Incolla il tuo elenco nel campo Righe di input, con ogni elemento sulla propria riga.',
      },
      {
        title: 'Scegli un ordine di ordinamento',
        description:
          'Scegli A → Z, Z → A, Naturale (1, 2, 10), Più corto / Più lungo prima, Ordine inverso oppure Mescola.',
      },
      {
        title: 'Imposta la distinzione tra maiuscole e minuscole',
        description:
          'Attiva il confronto con distinzione tra maiuscole e minuscole se le maiuscole e le minuscole devono essere ordinate separatamente; altrimenti «mela» e «Mela» vengono trattate allo stesso modo.',
      },
      {
        title: 'Attiva le opzioni di pulizia',
        description:
          'Rimuovi eventualmente le righe vuote o i duplicati nello stesso passaggio in modo che il tuo elenco ordinato esca pulito.',
      },
      {
        title: 'Verifica e copia l’elenco ordinato',
        description:
          'Verifica l’output ordinato in ordine, poi copialo in un clic per incollarlo nel tuo documento, foglio di calcolo o file di codice.',
      },
      {
        title: 'Correggi elementi numerati ordinati nel disordine',
        description:
          'Se «Elemento 10» appare prima di «Elemento 2», passa da A → Z all’ordinamento naturale, che confronta i numeri all’interno di ogni riga numericamente.',
      },
    ],
    examples: [
      {
        title: 'Ordinamento numerico naturale contro ordinamento di testo standard',
        input: 'Elemento 10\nElemento 2\nElemento 1',
        output: 'Elemento 1\nElemento 2\nElemento 10',
        explanation:
          'La modalità naturale confronta i numeri integrati numericamente, quindi Elemento 2 precede Elemento 10.',
      },
      {
        title: 'Ordinamento alfabetico semplice di un elenco',
        input: 'Banana\nMela\nCiliegia',
        output: 'Banana\nCiliegia\nMela',
        explanation:
          'L’ordinamento A → Z classifica gli elementi in ordine alfabetico, con gli accenti gestiti dal comparatore locale.',
      },
    ],
    benefits: [
      'Include un comparatore locale sensibile alla lingua e un ordinamento numerico naturale',
      'Combina l’ordinamento con la rimozione delle righe vuote e la deduplicazione',
      'Supporta l’ordinamento per lunghezza per le tabelle di interfaccia e le verifiche di testo',
      'Copia istantanea del risultato ordinato in un clic',
    ],
    useCases: [
      'Mettere in ordine alfabetico bibliografie, glossari ed elenchi di riferimento',
      'Ordinare naturalmente file o casi di test numerati (Elemento 1, 2, 10)',
      'Ordinare proprietà CSS, import o chiavi di ambiente',
      'Randomizzare partecipazioni a un’estrazione o domande di quiz con Mescola',
    ],
    faqs: [
      {
        question: 'Qual è la differenza tra A → Z e l’ordinamento naturale?',
        answer:
          'L’ordinamento alfabetico standard mette «Elemento 10» prima di «Elemento 2» perché «1» viene prima di «2». L’ordinamento naturale analizza i numeri nelle stringhe, quindi «Elemento 2» viene prima di «Elemento 10».',
      },
      {
        question: 'Posso rimuovere le voci duplicate durante l’ordinamento?',
        answer:
          'Sì. Spunta l’opzione «Rimuovi duplicati» per deduplicare e ordinare il tuo elenco contemporaneamente.',
      },
      {
        question: 'In che modo l’Ordine inverso differisce da Z → A?',
        answer:
          'Z → A ordina in ordine alfabetico decrescente, mentre l’Ordine inverso capovolge la tua sequenza di righe esistente dal basso verso l’alto senza mettere in ordine alfabetico.',
      },
      {
        question: 'Lo strumento Ordina le Righe è gratis?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, senza account e senza limite sul numero di elenchi che ordini.',
      },
      {
        question: 'Il mio elenco lascia il mio browser quando lo ordino?',
        answer:
          'No. L’ordinamento avviene localmente nel tuo browser, quindi il tuo elenco non viene mai inviato a un server.',
      },
      {
        question: 'Che cos’è l’ordinamento naturale e quando usarlo?',
        answer:
          'L’ordinamento naturale confronta i numeri all’interno del testo numericamente, quindi usalo per elementi numerati come «Capitolo 2» e «Capitolo 10» per mantenerli nel vero ordine numerico.',
      },
      {
        question: 'Posso ordinare un elenco dalla Z alla A?',
        answer:
          'Sì. Scegli l’opzione Z → A per ordinare le tue righe in ordine alfabetico inverso.',
      },
      {
        question: 'Posso ordinare le righe per lunghezza anziché in ordine alfabetico?',
        answer:
          'Sì. Scegli Più corto prima oppure Più lungo prima per ordinare le righe per lunghezza dei caratteri, il che è pratico per verificare tabelle di interfaccia o allineare testo.',
      },
      {
        question: 'Che cosa fa l’opzione Mescola nello strumento Ordina le Righe?',
        answer:
          'Mescola randomizza l’ordine delle tue righe, il che è utile per partecipazioni a un’estrazione, domande di quiz o qualsiasi elenco che vuoi in ordine casuale.',
      },
      {
        question: 'Lo strumento Ordina le Righe rimuove le righe vuote?',
        answer:
          'Sì, se attivi l’opzione delle righe vuote. Altrimenti, le righe vuote vengono conservate nell’output.',
      },
      {
        question: 'Posso ordinare tenendo conto delle maiuscole con lo strumento Ordina le Righe?',
        answer:
          'Sì. Attiva il confronto con distinzione tra maiuscole e minuscole per ordinare maiuscole e minuscole separatamente; con esso disattivo, «mela» e «Mela» vengono trattate allo stesso modo.',
      },
      {
        question: 'Lo strumento Ordina le Righe funziona con numeri e date?',
        answer:
          'Sì. L’ordinamento naturale ordina correttamente i numeri integrati e le date si ordinano correttamente quando sono scritte nel formato AAAA-MM-GG; gli altri formati di data si ordinano come testo semplice.',
      },
      {
        question: 'Posso ordinare colonne all’interno di una riga, come valori CSV?',
        answer:
          'No. Lo strumento ordina righe intere, quindi ogni riga si sposta come un’unità; non riordina i valori separati da virgole all’interno di una singola riga.',
      },
      {
        question: 'Che fine fanno le righe duplicate quando ordino?',
        answer:
          'I duplicati restano nell’elenco a meno che tu non attivi «Rimuovi duplicati», che mantiene solo la prima occorrenza di ogni riga prima dell’ordinamento.',
      },
      {
        question: 'Posso invertire un elenco senza ordinarlo alfabeticamente?',
        answer:
          'Sì. Usa Ordine inverso per capovolgere il tuo elenco dal basso verso l’alto mantenendo invariato il testo all’interno di ogni riga.',
      },
      {
        question: 'Lo strumento Ordina le Righe gestisce le lettere accentate e altre lingue?',
        answer:
          'Sì. Usa un comparatore sensibile alla lingua, quindi i caratteri accentati e le lettere non inglesi si ordinano in un ordine logico anziché per codici di caratteri grezzi.',
      },
      {
        question: 'Posso ordinare un elenco numerato come «1. Mela, 2. Banana, 10. Ciliegia»?',
        answer:
          'Sì. L’ordinamento naturale legge i numeri all’inizio di ogni riga, quindi «2. Banana» viene correttamente prima di «10. Ciliegia».',
      },
      {
        question: 'Quale dimensione di elenco può gestire lo strumento Ordina le Righe?',
        answer:
          'Funziona localmente nel tuo browser e gestisce facilmente elenchi lunghi, anche se incollaggi estremamente voluminosi di decine di migliaia di righe possono richiedere un momento.',
      },
      {
        question: 'L’ordinamento modifica il testo all’interno di ogni riga?',
        answer:
          'No. L’ordinamento modifica solo l’ordine delle righe; le parole, i numeri e la punteggiatura all’interno di ogni riga restano esattamente gli stessi.',
      },
      {
        question: 'Posso annullare un ordinamento se scelgo l’ordine sbagliato?',
        answer:
          'Il tuo elenco originale resta nel campo di input, quindi puoi scegliere un altro ordine di ordinamento e l’output si aggiorna senza perdere l’elenco incollato.',
      },
    ],
  },
  'find-and-replace': {
    slug: 'trova-e-sostituisci',
    name: 'Trova e Sostituisci Testo',
    shortDescription:
      'Cerca e sostituisci stringhe nel testo con distinzione tra maiuscole e minuscole, corrispondenza di parole intere e supporto per le espressioni regolari.',
    keywords: [
      'trova e sostituisci testo',
      'sostituzione di testo in massa',
      'trova e sostituisci con regex',
      'trova e sostituisci online',
      'sostituire testo online',
      'trova sostituisci parole',
      'sostituisci con regex online',
      'sostituire tutte le occorrenze',
      'strumento di sostituzione testo',
    ],
    seo: {
      title: 'Trova e Sostituisci: testo, parole e regex | UtilityFlow',
      description:
        'Cerca e sostituisci testo nel tuo browser con un contatore di occorrenze in tempo reale, maiuscole, parole intere e RegExp — gratis e senza registrazione.',
      primaryKeyword: 'trova e sostituisci testo',
      secondaryKeywords: ['trova e sostituisci online', 'strumento di sostituzione con regex', 'sostituire testo in massa', 'sostituire testo online'],
      longTailKeywords: ['trova e sostituisci solo parole intere online', 'trova e sostituisci con regex e gruppi di acquisizione', 'sostituire stringhe di testo in massa nel browser', 'sostituire tutte le occorrenze in un testo online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Effettua modifiche rapide di trova e sostituisci in massa nella prosa, nei frammenti CSV o nei blocchi di codice usando la corrispondenza di testo esatta, i confini di parole intere o i gruppi di acquisizione delle espressioni regolari.',
    instructions: [
      {
        title: 'Inserisci i termini Trova e Sostituisci',
        description:
          'Digita il testo o il modello da trovare in Trova e la stringa di destinazione in Sostituisci con.',
      },
      {
        title: 'Imposta le opzioni di corrispondenza',
        description:
          'Attiva Distingui maiuscole/minuscole, Solo parola intera oppure Usa un’espressione regolare (RegExp) per la corrispondenza per modello.',
      },
      {
        title: 'Incolla il testo da modificare',
        description:
          'Incolla il documento completo, il frammento CSV o il blocco di codice nel campo di testo sorgente in modo che ogni occorrenza sia coperta in un solo passaggio.',
      },
      {
        title: 'Verifica il contatore di occorrenze in tempo reale',
        description:
          'Consulta il contatore in tempo reale delle occorrenze sostituite per confermare che la corrispondenza tocchi esattamente i punti attesi prima di copiare.',
      },
      {
        title: 'Esamina l’output e copia',
        description:
          'Scorri il testo aggiornato per individuare modifiche involontarie, poi copialo in un clic per reincollarlo nel tuo documento o editor.',
      },
      {
        title: 'Correggi una corrispondenza che non sostituisce nulla',
        description:
          'Se il contatore è a zero, verifica la distinzione tra maiuscole e minuscole, disattiva Solo parola intera oppure esegui l’escape dei caratteri speciali come . e ( in modalità RegExp; i modelli non validi mostrano un messaggio di errore di sintassi.',
      },
    ],
    examples: [
      {
        title: 'Riformattazione con gruppo di acquisizione regex',
        input: 'Trova: Ordine n.(\\d+)  |  Sostituisci: Rif-$1\nOrigine: Ordine n.1042 spedito.',
        output: 'Rif-1042 spedito.',
        explanation:
          'Usa un gruppo di acquisizione RegExp ($1) per preservare l’identificativo numerico dell’ordine cambiando il prefisso.',
      },
      {
        title: 'Sostituzione di un nome di marchio in un documento',
        input: 'Trova: VecchioMarchio  |  Sostituisci: NuovoMarchio\nOrigine: Benvenuti in VecchioMarchio, il tuo partner VecchioMarchio.',
        output: 'Benvenuti in NuovoMarchio, il tuo partner NuovoMarchio.',
        explanation:
          'Sostituisce tutte le occorrenze del nome di marchio in tutto il documento in un solo passaggio.',
      },
    ],
    benefits: [
      'Mostra il contatore di occorrenze in tempo reale e un chiaro feedback di errore di sintassi per i modelli RegExp non validi',
      'L’opzione di parola intera evita le corrispondenze parziali accidentali all’interno di parole più lunghe',
      'Supporta i gruppi di acquisizione RegExp ($1, $2) per le riscritture di testo strutturato',
      'Funziona localmente, quindi i frammenti privati e gli identificativi restano sul tuo dispositivo',
    ],
    useCases: [
      'Scambiare nomi di marchio, URL o date in documenti lunghi',
      'Riformattare identificativi o date con gruppi di acquisizione di espressioni regolari',
      'Aggiornare delimitatori o variabili segnaposto nei modelli',
      'Pulire errori di battitura ripetuti prima della pubblicazione',
    ],
    faqs: [
      {
        question: 'Posso usare gruppi di acquisizione come $1 in modalità RegExp?',
        answer:
          'Sì. Quando «Usa un’espressione regolare (RegExp)» è spuntato, i gruppi tra parentesi in Trova possono essere referenziati come $1, $2, ecc. nel campo Sostituisci.',
      },
      {
        question: 'Perché «Solo parola intera» è disattivato in modalità RegExp?',
        answer:
          'In modalità RegExp, controlli direttamente i confini di parola usando \\b nel tuo modello.',
      },
      {
        question: 'Lasciare «Sostituisci con» vuoto elimina il testo trovato?',
        answer:
          'Sì. Lasciare vuoto il campo Sostituisci rimuove correttamente ogni occorrenza trovata, quindi controlla prima l’anteprima per evitare di eliminare testo che ti serve ancora.',
      },
      {
        question: 'Lo strumento Trova e Sostituisci è gratis?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, senza account e senza limite sul numero di sostituzioni che effettui.',
      },
      {
        question: 'Il mio testo lascia il mio browser quando uso Trova e Sostituisci?',
        answer:
          'No. Tutto viene eseguito localmente nel tuo browser, quindi i frammenti privati, i documenti e il codice restano sul tuo dispositivo.',
      },
      {
        question: 'Che cosa mostra il contatore di occorrenze in tempo reale?',
        answer:
          'Mostra quante occorrenze del tuo termine Trova sono state sostituite, in modo che tu possa confermare che la sostituzione ha toccato esattamente i punti attesi.',
      },
      {
        question: 'Posso sostituire solo parole intere e non parti di parole più lunghe?',
        answer:
          'Sì. Attiva «Solo parola intera» in modo che «gatto» venga sostituito ma «gattino» resti intatto; in modalità RegExp, usa invece i confini di parola \\b.',
      },
      {
        question: 'Trova e Sostituisci distingue tra maiuscole e minuscole?',
        answer:
          'Solo se attivi l’opzione Distingui maiuscole/minuscole. Con essa disattiva, «Mela» e «mela» vengono trattate come la stessa corrispondenza.',
      },
      {
        question: 'Posso sostituire testo su più righe contemporaneamente?',
        answer:
          'Sì. Lo strumento elabora tutto il testo incollato in un solo passaggio, quindi le corrispondenze su ogni riga vengono sostituite insieme.',
      },
      {
        question: 'Che cosa succede se la mia espressione regolare non è valida?',
        answer:
          'Lo strumento mostra un chiaro messaggio di errore di sintassi invece di produrre un output sbagliato, in modo che tu possa correggere il modello prima di copiare qualsiasi cosa.',
      },
      {
        question: 'Posso trovare caratteri speciali come a capo o tabulazioni in Trova e Sostituisci?',
        answer:
          'Sì, in modalità RegExp puoi usare sequenze di escape come \\n per un a capo e \\t per una tabulazione nel tuo modello.',
      },
      {
        question: 'Posso scambiare due parole con gruppi di acquisizione?',
        answer:
          'Sì. Ad esempio, cerca (\\w+) (\\w+) e sostituisci con $2 $1 per trasformare «Giovanni Rossi» in «Rossi Giovanni».',
      },
      {
        question: 'Posso inserire tutto il testo trovato nella sostituzione?',
        answer:
          'Sì. In modalità RegExp, $& nel campo Sostituisci inserisce tutto il testo trovato, il che è utile per racchiudere le corrispondenze tra virgolette o tag.',
      },
      {
        question: 'Posso sostituire URL o date in un intero documento?',
        answer:
          'Sì. Incolla il documento completo e usa un solo passaggio di Trova e Sostituisci per scambiare ogni vecchio URL, ogni nome di marchio o ogni data in una volta sola.',
      },
      {
        question: 'Trova e Sostituisci modifica solo la prima occorrenza o tutte?',
        answer:
          'Sostituisce tutte le corrispondenze del testo incollato in una volta sola; per modificare una sola occorrenza, modifica quel punto manualmente dopo aver copiato il risultato.',
      },
      {
        question: 'Trova e Sostituisci funziona sul codice?',
        answer:
          'Sì. Funziona su blocchi di codice, modelli e frammenti di configurazione, quindi puoi rinominare variabili, aggiornare segnaposto o cambiare delimitatori in massa.',
      },
      {
        question: 'Posso correggere un errore di battitura ripetuto con Trova e Sostituisci?',
        answer:
          'Sì. Inserisci la parola scritta male in Trova e l’ortografia corretta in Sostituisci, poi verifica il contatore di occorrenze per vedere quanti errori sono stati corretti.',
      },
      {
        question: 'Quale dialetto di espressione regolare usa lo strumento?',
        answer:
          'Usa JavaScript RegExp, la stessa sintassi di modello dei browser, con gruppi di acquisizione, classi di caratteri e quantificatori.',
      },
      {
        question: 'Posso annullare una sostituzione se faccio un errore?',
        answer:
          'Il tuo testo originale resta nel campo di input, quindi puoi modificare i termini Trova o Sostituisci e l’output si aggiorna senza perdere il testo sorgente.',
      },
      {
        question: 'C’è un limite alla quantità di testo che posso elaborare con Trova e Sostituisci?',
        answer:
          'Non c’è un limite definito. Funziona localmente nel tuo browser e gestisce documenti lunghi, anche se incollaggi estremamente voluminosi possono richiedere un momento per l’elaborazione.',
      },
    ],
  },
  'text-reverser': {
    slug: 'invertitore-testo',
    name: 'Invertitore di Testo',
    shortDescription:
      'Inverti intere stringhe di testo, l’ordine delle parole, le lettere di ogni parola o la sequenza delle righe.',
    keywords: [
      'invertitore di testo',
      'invertire una stringa online',
      'invertire le parole',
      'invertire le righe',
      'invertire i caratteri di un testo',
      'capovolgere testo online',
      'generatore di testo specchio',
      'invertire l’ordine delle frasi',
      'generatore di testo al contrario',
    ],
    seo: {
      title: 'Invertitore di Testo: parole e righe inverse | UtilityFlow',
      description:
        'Inverti i caratteri, capovolgi l’ordine delle parole, specchia ogni parola o inverti l’ordine delle righe — compatibile Unicode, gratis senza registrazione.',
      primaryKeyword: 'invertitore di testo',
      secondaryKeywords: ['invertire testo online', 'invertire l’ordine delle parole', 'invertire le righe', 'capovolgere testo online'],
      longTailKeywords: ['invertire ogni parola di una frase online', 'invertire l’ordine delle righe di un file di testo', 'invertitore di stringa compatibile unicode', 'invertire i caratteri di un testo online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Capovolgi sequenze di caratteri, inverti l’ordine delle parole per riga, specchia le lettere all’interno di ogni parola oppure inverti elenchi multi-riga dal basso verso l’alto con gestione Unicode.',
    instructions: [
      {
        title: 'Scegli una modalità di inversione',
        description:
          'Seleziona Inverti i caratteri, Inverti l’ordine delle parole, Inverti ogni parola oppure Inverti l’ordine delle righe.',
      },
      {
        title: 'Inserisci il tuo testo',
        description:
          'Digita o incolla del testo in Testo originale per vedere immediatamente l’output invertito.',
      },
      {
        title: 'Verifica l’anteprima in tempo reale',
        description:
          'L’output si aggiorna mentre digiti, in modo che tu possa vedere all’istante come la modalità scelta trasforma il tuo testo.',
      },
      {
        title: 'Confronta le modalità fianco a fianco',
        description:
          'Passa da una modalità all’altra sullo stesso input per confrontare l’inversione dei caratteri, l’inversione dell’ordine delle parole e l’inversione delle righe prima di sceglierne una.',
      },
      {
        title: 'Copia l’output',
        description:
          'Usa il pulsante Copia per copiare il testo trasformato, poi incollalo nel tuo documento, enigma o messaggio.',
      },
      {
        title: 'Correggi righe invertite nel senso sbagliato',
        description:
          'Se le parole all’interno di ogni riga si sono capovolte mentre volevi solo capovolgere l’elenco, passa a Inverti l’ordine delle righe, che sposta le righe senza toccare il testo che contengono.',
      },
    ],
    examples: [
      {
        title: 'Confrontare le modalità di inversione',
        input: 'Ciao Mondo',
        output: 'Caratteri: odnoM oaiC · Ordine delle parole: Mondo Ciao · Ogni parola: oaiC odnoM',
        explanation:
          'Mostra come ogni modalità modifica la posizione dei caratteri rispetto alle parole.',
      },
      {
        title: 'Invertire un elenco di nomi «Nome Cognome»',
        input: 'Giovanni Rossi\nMaria Bianchi',
        output: 'Maria Bianchi\nGiovanni Rossi',
        explanation:
          'La modalità Inverti l’ordine delle righe capovolge l’elenco senza modificare il testo di ogni riga.',
      },
    ],
    benefits: [
      'La suddivisione dei caratteri compatibile Unicode preserva le emoji e le coppie sostitutive',
      'Quattro modalità distinte coprono sia il capovolgimento di stringhe sia l’inversione di elenchi',
      'Anteprima in tempo reale senza clic mentre digiti',
      'Esecuzione leggera lato browser',
    ],
    useCases: [
      'Invertire log o elenchi cronologici dal più vecchio al più recente',
      'Testare stringhe palindrome e casi limite di caratteri da destra a sinistra',
      'Invertire elenchi di nomi «Nome Cognome» o sequenze di parole',
      'Creare enigmi, cifrari e giochi di parole',
    ],
    faqs: [
      {
        question: 'Invertire i caratteri rompe le emoji o i caratteri Unicode accentati?',
        answer:
          'Lo strumento usa l’iterazione per punti di codice Array.from() anziché un’indicizzazione UTF-16 ingenua, quindi i caratteri multi-byte e le emoji standard restano intatti.',
      },
      {
        question: 'Come capovolgere un elenco di righe senza invertire le parole?',
        answer:
          'Seleziona «Inverti l’ordine delle righe» per spostare la riga in basso verso l’alto mantenendo invariato il testo all’interno di ogni riga.',
      },
      {
        question: 'Qual è la differenza tra «Inverti l’ordine delle parole» e «Inverti ogni parola»?',
        answer:
          '«Inverti l’ordine delle parole» trasforma «uno due tre» in «tre due uno», mentre «Inverti ogni parola» mantiene le posizioni delle parole e capovolge le lettere in «onu eud ert».',
      },
      {
        question: 'L’Invertitore di Testo è gratis?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, senza account e senza limite sulla quantità di testo che inverti.',
      },
      {
        question: 'Il mio testo lascia il mio browser quando uso l’Invertitore di Testo?',
        answer:
          'No. L’inversione avviene localmente nel tuo browser, quindi il tuo testo non viene mai inviato né archiviato da nessuna parte.',
      },
      {
        question: 'Quali sono le quattro modalità di inversione dell’Invertitore di Testo?',
        answer:
          'Inverti i caratteri capovolge ogni carattere, Inverti l’ordine delle parole capovolge l’ordine delle parole, Inverti ogni parola specchia le lettere all’interno di ogni parola e Inverti l’ordine delle righe inverte la sequenza delle righe.',
      },
      {
        question: 'Posso invertire un intero paragrafo con l’Invertitore di Testo?',
        answer:
          'Sì. Incolla il paragrafo e scegli Inverti i caratteri per capovolgere l’intero blocco, oppure Inverti l’ordine delle righe per capovolgere il testo multi-riga riga per riga.',
      },
      {
        question: 'Posso usare l’Invertitore di Testo per creare un effetto specchio?',
        answer:
          'Sì. Invertire i caratteri produce un testo dall’aspetto speculare che si legge al contrario, il che si adatta bene a enigmi, cifrari e messaggi giocosi.',
      },
      {
        question: 'L’Invertitore di Testo funziona con le lettere accentate?',
        answer:
          'Sì. Gestisce i caratteri Unicode per punto di codice, quindi le lettere accentate come é e ü vengono invertite correttamente senza scomporsi.',
      },
      {
        question: 'L’Invertitore di Testo funziona con testo in altre lingue?',
        answer:
          'Sì. Funziona su qualsiasi testo Unicode, incluse le scritture non latine, perché l’inversione avviene carattere per carattere anziché secondo regole di lingua.',
      },
      {
        question: 'Che cos’è un palindromo e l’Invertitore di Testo può aiutare a verificarne uno?',
        answer:
          'Un palindromo si legge allo stesso modo in avanti e all’indietro, come «radar». Inverti il tuo testo e confrontalo con l’originale per verificare.',
      },
      {
        question: 'Posso usare l’Invertitore di Testo per enigmi e giochi di parole?',
        answer:
          'Sì. Le parole e le frasi invertite sono un formato classico di enigma e l’anteprima in tempo reale facilita la creazione rapida di indizi e risposte.',
      },
      {
        question: 'Invertire il testo aggiunge o rimuove spazi?',
        answer:
          'Invertire i caratteri inverte tutto, inclusi gli spazi, mentre le modalità basate sulle parole mantengono spazi singoli tra le parole in modo che l’output resti leggibile.',
      },
      {
        question: 'Posso invertire un blocco di testo molto lungo?',
        answer:
          'Sì. Funziona localmente nel tuo browser e gestisce incollaggi lunghi, anche se blocchi estremamente voluminosi possono richiedere un momento per aggiornarsi nell’anteprima in tempo reale.',
      },
      {
        question: 'L’Invertitore di Testo registra o archivia il mio testo?',
        answer:
          'No. Nulla viene registrato né inviato a un server; il tuo testo esiste solo nella scheda del tuo browser mentre usi lo strumento.',
      },
      {
        question: 'Come invertire nomi «Nome Cognome» in «Cognome Nome»?',
        answer:
          'Usa Inverti l’ordine delle parole, che trasforma «Giovanni Rossi» in «Rossi Giovanni» mantenendo ogni nome scritto correttamente.',
      },
      {
        question: 'L’Invertitore di Testo può invertire i numeri?',
        answer:
          'Sì. In modalità Inverti i caratteri, «12345» diventa «54321», il che è utile per testare stringhe numeriche e codici.',
      },
      {
        question: 'Che fine fanno gli a capo quando inverto i caratteri?',
        answer:
          'Gli a capo vengono invertiti con il resto del testo, quindi anche le righe finiscono in ordine inverso; usa Inverti l’ordine delle righe se vuoi capovolgere le righe senza toccare il testo che contengono.',
      },
      {
        question: 'Posso annullare un’inversione?',
        answer:
          'Sì. Il tuo testo originale resta nel campo di input e invertire l’output una seconda volta con la stessa modalità ripristina il testo originale.',
      },
      {
        question: 'Il testo invertito è leggibile?',
        answer:
          'No, il testo invertito si legge al contrario per concezione. Reincollalo nello strumento e invertilo di nuovo per ripristinare il testo originale.',
      },
    ],
  },
  'lorem-ipsum-generator': {
    slug: 'generatore-lorem-ipsum',
    name: 'Generatore di Lorem Ipsum',
    shortDescription:
      'Genera paragrafi, frasi o un numero personalizzato di parole, con tag HTML <p> opzionali.',
    keywords: [
      'generatore di lorem ipsum',
      'generatore di testo segnaposto',
      'testo fittizio',
      'lorem ipsum html',
      'testo lorem ipsum',
      'generatore di testo fittizio',
      'paragrafi fittizi',
      'parole lorem ipsum',
      'generatore di testo di riempimento',
    ],
    seo: {
      title: 'Generatore di Lorem Ipsum: testo fittizio | UtilityFlow',
      description:
        'Genera testo fittizio Lorem Ipsum per paragrafi, frasi o numero esatto di parole, con tag HTML opzionali — senza registrazione, gratis nel tuo browser.',
      primaryKeyword: 'generatore di lorem ipsum',
      secondaryKeywords: ['testo fittizio', 'generatore di testo fittizio', 'paragrafi lorem ipsum', 'creatore di paragrafi fittizi'],
      longTailKeywords: ['generare lorem ipsum per numero di parole', 'generatore di lorem ipsum con tag html p', 'testo fittizio pulito per mockup di interfaccia', 'generatore di lorem ipsum per mockup di sito web'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Crea testo fittizio pulito adatto a numeri esatti di paragrafi, frasi o parole per wireframe, test tipografici e prototipi di layout — con tag di paragrafo HTML opzionali.',
    instructions: [
      {
        title: 'Scegli l’unità e la quantità',
        description:
          'Scegli Paragrafi, Frasi oppure Parole e inserisci il numero desiderato.',
      },
      {
        title: 'Personalizza la formattazione',
        description:
          'Scegli se iniziare con la classica frase «Lorem ipsum dolor sit amet...» e se racchiudere o meno i paragrafi in tag HTML <p>.',
      },
      {
        title: 'Genera il testo fittizio',
        description:
          'Il testo viene generato all’istante nel tuo browser, senza attese e senza chiamate di rete.',
      },
      {
        title: 'Verifica il numero di parole e caratteri',
        description:
          'Usa il contatore di parole e caratteri in tempo reale per verificare che il testo generato stia nel tuo layout prima di incollarlo nel tuo design.',
      },
      {
        title: 'Rigenera o copia',
        description:
          'Fai clic su Rigenera per una nuova variazione di frasi oppure su Copia testo fittizio per incollarlo nel tuo design.',
      },
      {
        title: 'Adatta la lunghezza del testo al tuo layout',
        description:
          'Se una scheda trabocca o sembra vuota, passa all’unità Parole e genera un numero esatto di parole che corrisponda allo spazio, poi rigenera finché l’adattamento sembra buono.',
      },
    ],
    examples: [
      {
        title: 'Frammento di mockup HTML',
        input: 'Unità: Paragrafi · Quantità: 1 · Racchiudi in tag <p>: Spuntato',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation:
          'Pronto da incollare direttamente in modelli HTML o viste di codice di CMS.',
      },
      {
        title: 'Numero esatto di parole per una scheda',
        input: 'Unità: Parole · Quantità: 25 · Racchiudi in tag <p>: Non spuntato',
        output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        explanation:
          'Genera esattamente 25 parole di testo fittizio per testare l’altezza di una scheda senza trabocco.',
      },
    ],
    benefits: [
      'Genera numeri esatti di parole, frasi o paragrafi su richiesta',
      'La racchiusura in tag <p> opzionale fa risparmiare tempo per i prototipi front-end',
      'Il contatore di parole e caratteri in tempo reale verifica l’adattamento del layout prima dell’incollaggio',
      'Rigenerazione istantanea senza chiamate di rete esterne',
    ],
    useCases: [
      'Testare sotto sforzo le altezze delle schede e gli a capo nei layout di interfaccia reattivi',
      'Anteprima di abbinamenti di font, altezze di riga e larghezze di misura',
      'Riempire modelli di wireframe e mockup di pagine editoriali',
      'Testare il comportamento di troncamento e trabocco nei componenti CSS',
    ],
    faqs: [
      {
        question: 'Posso generare un numero esatto di parole invece di paragrafi?',
        answer:
          'Sì. Passa il selettore di unità su «Parole» e inserisci qualsiasi numero fino a 500 parole.',
      },
      {
        question: 'Perché usare il Lorem Ipsum invece di ripetere una sola frase?',
        answer:
          'Il testo fittizio latino classico si avvicina alla distribuzione naturale delle lunghezze delle parole e al ritmo delle lettere in inglese senza distrarre gli stakeholder con testo leggibile.',
      },
      {
        question: 'L’opzione di tag <p> funziona con le modalità Frasi e Parole?',
        answer:
          'Sì. In modalità Paragrafi, ogni paragrafo riceve la propria racchiusura <p>...</p>, mentre le modalità Frasi e Parole racchiudono il blocco generato in un singolo elemento <p>.',
      },
      {
        question: 'Il Generatore di Lorem Ipsum è gratis?',
        answer:
          'Sì. È completamente gratuito, senza registrazione, senza account e senza limite sulla quantità di testo fittizio che generi.',
      },
      {
        question: 'Ho bisogno di un account o di una connessione internet per generare Lorem Ipsum?',
        answer:
          'No. Il generatore funziona interamente nel tuo browser senza registrazione e senza chiamate di rete, quindi funziona all’istante appena la pagina è caricata.',
      },
      {
        question: 'Che cos’è il Lorem Ipsum?',
        answer:
          'Il Lorem Ipsum è un testo fittizio pseudo-latino alterato che i designer usano dall’epoca della composizione tipografica per riempire i layout prima che il vero testo sia pronto.',
      },
      {
        question: 'Posso generare una sola frase di Lorem Ipsum?',
        answer:
          'Sì. Scegli l’unità Frasi, inserisci 1 e il generatore produce una sola frase fittizia.',
      },
      {
        question: 'Posso iniziare il mio testo con la classica frase «Lorem ipsum dolor sit amet...»?',
        answer:
          'Sì. Attiva l’opzione di apertura classica e il tuo testo generato inizia con la familiare frase «Lorem ipsum dolor sit amet...».',
      },
      {
        question: 'Posso incollare il testo generato direttamente in HTML?',
        answer:
          'Sì. Attiva l’opzione di tag <p> e l’output viene racchiuso in tag di paragrafo HTML, pronto da incollare in modelli o in una vista di codice di CMS.',
      },
      {
        question: 'Posso generare esattamente 100 parole di Lorem Ipsum?',
        answer:
          'Sì. Seleziona l’unità Parole, inserisci 100 e il generatore produce esattamente 100 parole di testo fittizio.',
      },
      {
        question: 'Il testo Lorem Ipsum generato è sempre lo stesso?',
        answer:
          'No. Fai clic su Rigenera per produrre una nuova variazione con strutture di frasi diverse, in modo che i blocchi ripetuti non sembrino identici.',
      },
      {
        question: 'Il Lorem Ipsum è vero latino?',
        answer:
          'No. È pseudo-latino alterato composto da parole che somigliano al latino; assomiglia a una vera lingua ma non ha alcun significato reale.',
      },
      {
        question: 'Posso usare il Lorem Ipsum su un sito web pubblicato?',
        answer:
          'È concepito come testo fittizio temporaneo, quindi sostituiscilo con contenuto reale prima di pubblicare, altrimenti i visitatori vedranno testo fittizio.',
      },
      {
        question: 'A cosa serve il Lorem Ipsum?',
        answer:
          'Riempie wireframe, mockup e prototipi in modo che i designer possano testare tipografia, spaziatura e layout senza aspettare il testo finale.',
      },
      {
        question: 'Posso controllare la lunghezza delle singole frasi?',
        answer:
          'No. Controlli il numero totale in paragrafi, frasi o parole, mentre il generatore varia naturalmente la lunghezza delle frasi; rigenera se il ritmo non si adatta al tuo layout.',
      },
      {
        question: 'Il Generatore di Lorem Ipsum funziona anche per il design di stampa?',
        answer:
          'Sì. Copia il testo generato in strumenti di stampa, presentazioni o software di impaginazione per vedere in anteprima come il vero testo scorrerà nel design.',
      },
      {
        question: 'Come testo il troncamento del testo con il Lorem Ipsum?',
        answer:
          'Genera un numero esatto di parole che corrisponda al tuo spazio, incollalo nel componente e osserva se il testo si tronca o trabocca a diverse dimensioni di schermo.',
      },
      {
        question: 'Posso generare Lorem Ipsum in un’altra lingua?',
        answer:
          'No. Lo strumento genera solo il classico testo fittizio pseudo-latino; per testo leggibile in un’altra lingua, scrivi o traduci del vero testo.',
      },
      {
        question: 'Il Generatore di Lorem Ipsum registra il mio testo generato?',
        answer:
          'No. Tutto funziona localmente nel tuo browser e nulla viene archiviato né inviato a un server.',
      },
      {
        question: 'Perché il testo fittizio aiuta i clienti a concentrarsi sul design?',
        answer:
          'Una bozza leggibile attira l’attenzione sulle parole stesse, mentre il Lorem Ipsum neutro mantiene i revisori concentrati su layout, tipografia e spaziatura.',
      },
    ],
  },
  'readability-checker': {
    slug: 'verifica-leggibilita',
    name: 'Verifica Leggibilità',
    shortDescription:
      'Calcola i punteggi di leggibilità Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog e SMOG.',
    keywords: [
      'verifica leggibilità',
      'flesch reading ease',
      'livello flesch-kincaid',
      'calcolatore gunning fog',
      'indice di leggibilità smog',
      'verifica livello di lettura',
      'verifica punteggio di leggibilità',
      'leggibilità per livello scolastico',
      'verificare la leggibilità di un testo online',
    ],
    seo: {
      title: 'Verifica Leggibilità: punteggi Flesch | UtilityFlow',
      description:
        'Verifica il punteggio Flesch Reading Ease, Flesch-Kincaid, Gunning Fog e SMOG con la nostra verifica di leggibilità — gratis e privata, nel tuo browser.',
      primaryKeyword: 'verifica punteggio di leggibilità',
      secondaryKeywords: ['calcolatore flesch reading ease', 'verifica livello scolastico', 'strumento livello di lettura', 'calcolatore indice gunning fog'],
      longTailKeywords: ['verificare il livello flesch-kincaid online', 'calcolare gli indici di leggibilità gunning fog e smog', 'migliorare il punteggio di leggibilità di un articolo nel browser', 'qual è un buon punteggio flesch reading ease'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Valuta quanto è facile comprendere il tuo testo con quattro formule di leggibilità riconosciute — Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog e SMOG — oltre al rilevamento delle parole complesse.',
    instructions: [
      {
        title: 'Incolla il tuo articolo o brano',
        description:
          'Inserisci almeno una frase completa nell’editor oppure fai clic su Carica esempio per provare con un testo di esempio.',
      },
      {
        title: 'Consulta le quattro schede di punteggio',
        description:
          'Esamina Flesch Reading Ease (0–100, più è alto più è facile) oltre alle stime di livello scolastico Flesch-Kincaid, Gunning Fog e SMOG fianco a fianco.',
      },
      {
        title: 'Leggi la ripartizione di frasi e sillabe',
        description:
          'Ispeziona il numero medio di parole per frase, di sillabe per parola e il numero di parole lunghe o complesse all’origine di ogni punteggio.',
      },
      {
        title: 'Trova le parole complesse',
        description:
          'Scorri l’elenco delle parole di 3 o più sillabe segnalate dallo strumento e annota quelle che puoi sostituire con termini semplici di uso quotidiano.',
      },
      {
        title: 'Accorcia le frasi lunghe e verifica di nuovo',
        description:
          'Dividi le frasi dense a più proposizioni, reincolla il testo rivisto e osserva i punteggi aggiornarsi all’istante.',
      },
      {
        title: 'Risolvi risultati strani',
        description:
          'Se un punteggio sembra sbagliato, verifica i punti mancanti, le abbreviazioni o i frammenti di elenco puntato, perché le formule contano frasi e sillabe a partire dalla punteggiatura.',
      },
    ],
    examples: [
      {
        title: 'Guida in linguaggio chiaro',
        input: 'Le frasi brevi mantengono le istruzioni chiare. Usa parole semplici per spiegare i passaggi.',
        output: 'Flesch Ease ~78 (Abbastanza facile) · Livello ~5,2',
        explanation:
          'Una lunghezza media di frase più breve e meno parole polisillabiche danno una migliore facilità di lettura.',
      },
      {
        title: 'Testo denso da semplificare',
        input: 'L’attuazione di metodologie esaustive richiede una comprensione approfondita dei paradigmi organizzativi sottostanti.',
        output: 'Flesch Ease ~15 (Molto difficile) · Livello ~16',
        explanation:
          'Le frasi lunghe e le parole polisillabiche fanno crollare la facilità di lettura e salire il livello scolastico stimato.',
      },
    ],
    benefits: [
      'Calcola contemporaneamente quattro indici di leggibilità ampiamente usati',
      'Elenca esempi di parole di 3 o più sillabe trovate nel tuo brano',
      'Mostra il numero esatto di parole medie per frase e di sillabe per parola',
      'Funziona interamente offline nella memoria del browser per le bozze non pubblicate',
    ],
    useCases: [
      'Modificare documentazione, testo di interfaccia e articoli di aiuto per maggiore chiarezza',
      'Verificare materiali didattici rispetto al livello scolastico target degli studenti',
      'Semplificare comunicazioni legali, sanitarie o finanziarie destinate ai clienti',
      'Migliorare la leggibilità rapida di articoli di blog e landing page',
    ],
    faqs: [
      {
        question: 'Qual è un buon punteggio Flesch Reading Ease per gli articoli web?',
        answer:
          'La maggior parte dei contenuti web per il grande pubblico punta a un punteggio Flesch Reading Ease tra 60 e 75, che corrisponde circa a un livello di lettura di 7ª–9ª classe.',
      },
      {
        question: 'Come aumento un punteggio di leggibilità basso?',
        answer:
          'Dividi le frasi lunghe a più proposizioni in enunciati più brevi e sostituisci il gergo inutile di 3 o più sillabe con parole concrete di uso quotidiano.',
      },
      {
        question: 'Perché lo strumento menziona il numero di frasi per lo SMOG?',
        answer:
          'La formula SMOG standard si basa su campioni multi-frase, quindi i brevi estratti di 1–2 frasi usano una stima scalata finché non vengono fornite 3 o più frasi.',
      },
      {
        question: 'A cosa serve la Verifica Leggibilità?',
        answer:
          'Misura quanto è facile comprendere un brano calcolando quattro formule standard di leggibilità e mostrando statistiche di frasi e sillabe.',
      },
      {
        question: 'La Verifica Leggibilità è gratis?',
        answer:
          'Sì, è interamente gratuita senza registrazione e funziona nel tuo browser in modo che il tuo testo non lasci mai il tuo dispositivo.',
      },
      {
        question: 'Che cos’è il Flesch-Kincaid Grade Level?',
        answer:
          'Stima il livello scolastico americano necessario per comprendere un testo; ad esempio, un punteggio di 8,0 significa che uno studente di ottava classe dovrebbe poterlo leggere comodamente.',
      },
      {
        question: 'Che cosa misura l’indice Gunning Fog?',
        answer:
          'Stima gli anni di istruzione formale necessari per comprendere un brano alla prima lettura, in base alla lunghezza delle frasi e alla quota di parole complesse.',
      },
      {
        question: 'Che cos’è l’indice SMOG?',
        answer:
          'L’indice SMOG stima gli anni di istruzione necessari per comprendere pienamente un testo, contando le parole polisillabiche in un campione di frasi.',
      },
      {
        question: 'Quale punteggio Flesch Reading Ease dovrei puntare?',
        answer:
          'Il grande pubblico punta in genere a 60–70, mentre il contenuto pubblico in linguaggio chiaro punta spesso a 70 o più; la scrittura tecnica per specialisti può avere un punteggio più basso.',
      },
      {
        question: 'Quante parole servono per punteggi di leggibilità accurati?',
        answer:
          'Campioni più lunghi di almeno 100 parole danno risultati più affidabili, anche se lo strumento funziona su brani più brevi con una stima SMOG scalata.',
      },
      {
        question: 'La Verifica Leggibilità archivia o invia il mio testo?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser, quindi bozze, articoli non pubblicati e documenti privati restano sul tuo dispositivo.',
      },
      {
        question: 'Perché i quattro punteggi sono in disaccordo?',
        answer:
          'Ogni formula pesa in modo diverso la lunghezza delle frasi e il numero di sillabe, quindi considerali stime complementari anziché un unico livello esatto.',
      },
      {
        question: 'Come vengono contate le sillabe nella Verifica Leggibilità?',
        answer:
          'Lo strumento stima le sillabe dalle lettere di ogni parola, il che è accurato per la maggior parte delle parole inglesi comuni ma può contare male nomi insoliti, abbreviazioni o termini tecnici.',
      },
      {
        question: 'Posso verificare la leggibilità di un testo non inglese?',
        answer:
          'Le quattro formule sono state progettate per l’inglese, quindi i punteggi per altre lingue possono essere fuorvianti anche se lo strumento li calcolerà comunque.',
      },
      {
        question: 'Che cosa conta come parola complessa?',
        answer:
          'Una parola complessa è in genere una parola di tre o più sillabe, esclusi i suffissi comuni e i nomi propri, e lo strumento elenca gli esempi che trova nel tuo brano.',
      },
      {
        question: 'La punteggiatura influisce sul mio punteggio di leggibilità?',
        answer:
          'Sì. I confini di frase derivano da punti, punti interrogativi e punti esclamativi, quindi una punteggiatura mancante può fondere frasi e falsare i risultati.',
      },
      {
        question: 'La Verifica Leggibilità può aiutare per la SEO?',
        answer:
          'Un contenuto più chiaro e più facile da leggere trattiene i visitatori più a lungo, il che sostiene la SEO indirettamente, anche se la leggibilità è solo un fattore di ranking tra molti altri.',
      },
      {
        question: 'Un punteggio Flesch Reading Ease più alto è sempre migliore?',
        answer:
          'Non sempre. Adatta il punteggio al tuo pubblico: le istruzioni semplici devono avere un punteggio alto, mentre i lettori accademici o legali specializzati possono aspettarsi un linguaggio più denso.',
      },
      {
        question: 'Perché il mio punteggio cambia quando aggiungo un titolo?',
        answer:
          'I punteggi vengono calcolati da tutto il testo che incolli, quindi includere titoli, etichette di navigazione o frammenti di codice può spostare le medie; verifica il corpo del testo da solo per il risultato più coerente.',
      },
      {
        question: 'Posso usare la Verifica Leggibilità per i temi degli studenti?',
        answer:
          'Sì. Insegnanti e studenti possono usarla per verificare se un tema corrisponde al livello scolastico target prima di inviarlo.',
      },
    ],
  },
  'word-frequency-counter': {
    slug: 'contatore-frequenza-parole',
    name: 'Contatore di Frequenza delle Parole e Densità',
    shortDescription:
      'Analizza le frequenze delle espressioni di 1, 2 e 3 parole e le percentuali di densità con export CSV.',
    keywords: [
      'contatore di frequenza delle parole',
      'verifica densità parole chiave',
      'contatore di n-grammi',
      'analizzatore di ripetizione parole',
      'analizzatore di frequenza espressioni',
      'calcolatore densità parole chiave',
      'contare le parole ripetute online',
      'contatore di occorrenze parole',
      'analisi di frequenza del testo',
    ],
    seo: {
      title: 'Contatore Frequenza Parole e Densità | UtilityFlow',
      description:
        'Analizza la frequenza delle parole e la densità delle parole chiave per espressioni di 1, 2 e 3 parole, con filtro delle stop word ed export CSV, online.',
      primaryKeyword: 'contatore di frequenza delle parole',
      secondaryKeywords: ['verifica densità parole chiave', 'analizzatore di frequenza espressioni', 'strumento occorrenze di parole', 'contatore di frequenza n-grammi'],
      longTailKeywords: ['contare la frequenza delle parole e la percentuale di densità online', 'analizzare le espressioni di 2 e 3 parole in un testo', 'esportare la tabella di frequenza delle parole in csv', 'verificare il keyword stuffing in una bozza di articolo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Revisiona le bozze di contenuto per l’equilibrio delle parole chiave, le formulazioni usate troppo spesso e i modelli di n-grammi multi-parola con tabelle di frequenza istantanee, filtro delle stop word e report CSV scaricabili.',
    instructions: [
      {
        title: 'Incolla il tuo contenuto',
        description:
          'Inserisci una bozza di articolo, una trascrizione, un testo di prodotto o risposte di sondaggio nella casella di testo.',
      },
      {
        title: 'Scegli espressioni di 1, 2 o 3 parole',
        description:
          'Passa tra parole singole e n-grammi multi-parola per vedere i termini individuali o le espressioni ricorrenti.',
      },
      {
        title: 'Filtra le stop word e imposta una lunghezza minima',
        description:
          'Attiva l’esclusione delle stop word per nascondere le parole di riempimento come «il» e «e», e aumenta la lunghezza minima delle parole per concentrarti sui termini significativi.',
      },
      {
        title: 'Esamina i conteggi e le percentuali di densità',
        description:
          'Ordina la tabella per vedere quali parole ed espressioni appaiono più spesso e quale parte del testo ciascuna rappresenta.',
      },
      {
        title: 'Individua l’uso eccessivo o il keyword stuffing',
        description:
          'Confronta i tuoi termini principali con le tue parole chiave target e riscrivi i passaggi in cui un termine domina il testo.',
      },
      {
        title: 'Copia o esporta i risultati in CSV',
        description:
          'Fai clic su Esporta in CSV per scaricare la tabella per un foglio di calcolo, oppure su Copia in CSV per incollarla direttamente in un report.',
      },
    ],
    examples: [
      {
        title: 'Verifica della densità di un’espressione',
        input: 'Le pagine veloci migliorano il coinvolgimento degli utenti e la velocità delle pagine.',
        output: 'pagine: 2 · velocità delle pagine: 1 · coinvolgimento degli utenti: 1',
        explanation:
          'Fa emergere sia la frequenza dei singoli termini sia le espressioni tematiche multi-parola.',
      },
      {
        title: 'Individuare un tic verbale in una trascrizione',
        input: 'In pratica, il progetto va bene. In pratica, il team è motivato. In pratica, tutto va bene.',
        output: 'in pratica: 3 · progetto: 1 · team: 1',
        explanation:
          'La modalità a 2 parole rivela le espressioni ripetute che un oratore usa senza rendersene conto.',
      },
    ],
    benefits: [
      'Supporta l’analisi di n-grammi di 1, 2 e 3 parole',
      'Il filtro delle stop word opzionale rimuove le parole di riempimento come «il» e «e»',
      'Soglia di lunghezza minima di parola regolabile',
      'Esporta tabelle CSV pulite pronte per i fogli di calcolo',
    ],
    useCases: [
      'Verificare bozze di articoli per evitare il keyword stuffing involontario',
      'Individuare tic verbali ripetitivi in discorsi o trascrizioni',
      'Identificare temi ricorrenti nei commenti dei clienti o nelle risposte di sondaggio',
      'Confrontare l’equilibrio delle espressioni multi-parola nel testo delle landing page',
    ],
    faqs: [
      {
        question: 'Come viene calcolata la percentuale di densità delle parole chiave?',
        answer:
          'La densità è uguale a (occorrenze del termine × parole nell’espressione ÷ numero totale di parole del testo) × 100, il che dà una quota precisa del documento.',
      },
      {
        question: 'Che cosa sono le stop word?',
        answer:
          'Le stop word sono parole grammaticali molto frequenti come «il», «e», «di», «a» e «in», che in genere hanno poco significato tematico nelle revisioni di frequenza.',
      },
      {
        question: 'Posso esportare i risultati di frequenza in Excel o Google Sheets?',
        answer:
          'Sì. Fai clic su «Esporta in CSV» per scaricare un file standard separato da virgole oppure su «Copia in CSV» per incollare direttamente.',
      },
      {
        question: 'A cosa serve un Contatore di Frequenza delle Parole?',
        answer:
          'Conta la frequenza con cui ogni parola o espressione appare in un testo in modo che tu possa individuare le ripetizioni, verificare l’equilibrio delle parole chiave e trovare temi ricorrenti.',
      },
      {
        question: 'Il Contatore di Frequenza delle Parole è gratis?',
        answer:
          'Sì, è gratuito senza registrazione e funziona interamente nel tuo browser in modo che il tuo testo non venga mai inviato.',
      },
      {
        question: 'Che cos’è la densità delle parole chiave e perché è importante?',
        answer:
          'La densità delle parole chiave è la percentuale di un testo costituita da un dato termine; una densità naturale aiuta i motori di ricerca a comprendere un argomento, mentre una densità anormalmente alta assomiglia a keyword stuffing.',
      },
      {
        question: 'Qual è una buona percentuale di densità delle parole chiave?',
        answer:
          'Non c’è un obiettivo ufficiale, ma la maggior parte dei redattori punta a un 1–2% naturale per una parola chiave principale e si concentra su una scrittura leggibile e utile anziché sul raggiungimento di un numero.',
      },
      {
        question: 'Che cosa sono gli n-grammi nel Contatore di Frequenza delle Parole?',
        answer:
          'Gli n-grammi sono sequenze di una, due o tre parole consecutive, come «velocità delle pagine» o «coinvolgimento degli utenti», contate come espressioni uniche.',
      },
      {
        question: 'Perché analizzare le espressioni di 2 e 3 parole?',
        answer:
          'Le singole parole possono essere fuorvianti, mentre le espressioni multi-parola rivelano gli argomenti reali e le espressioni ripetute del tuo contenuto.',
      },
      {
        question: 'Come funziona il filtro delle stop word?',
        answer:
          'Quando è attivo, rimuove le parole grammaticali comuni come «il», «e» e «di» in modo che la tabella evidenzi le parole tematiche invece del riempimento.',
      },
      {
        question: 'Posso modificare quali parole contano come stop word?',
        answer:
          'Lo strumento usa un elenco integrato di stop word inglesi comuni e puoi attivare o disattivare il filtro quando vuoi vedere la tabella completa.',
      },
      {
        question: 'Che cosa fa l’impostazione di lunghezza minima di parola?',
        answer:
          'Esclude le parole più corte della lunghezza scelta, il che aiuta a nascondere abbreviazioni e lettere isolate dalla tabella di frequenza.',
      },
      {
        question: 'Il Contatore di Frequenza delle Parole invia il mio testo?',
        answer:
          'No. Tutti i conteggi avvengono localmente nel tuo browser, quindi bozze private e trascrizioni restano sul tuo dispositivo.',
      },
      {
        question: 'Posso contare la frequenza delle parole in un documento lungo?',
        answer:
          'Sì. Incolla articoli lunghi o trascrizioni e lo strumento conta ogni occorrenza, anche se testi molto lunghi possono richiedere un momento per l’elaborazione.',
      },
      {
        question: 'Come viene calcolata la percentuale di densità per le espressioni?',
        answer:
          'La densità è uguale alle occorrenze dell’espressione moltiplicate per il numero di parole dell’espressione, divise per il numero totale di parole del testo, poi moltiplicate per 100.',
      },
      {
        question: 'Il Contatore di Frequenza delle Parole può trovare espressioni ripetute in una trascrizione?',
        answer:
          'Sì. Passa alla modalità a 2 o 3 parole per far emergere i tic verbali e le espressioni che un oratore ripete senza rendersene conto.',
      },
      {
        question: 'La punteggiatura influisce sul numero di parole?',
        answer:
          'Lo strumento rimuove la punteggiatura prima di contare, quindi «velocità,» e «velocità» vengono contati come la stessa parola.',
      },
      {
        question: 'Le parole in maiuscolo e in minuscolo vengono contate insieme?',
        answer:
          'Sì. Le parole vengono messe in minuscolo prima del conteggio, quindi «Pagina» e «pagina» contano come un solo termine.',
      },
      {
        question: 'Posso esportare la tabella di frequenza in Excel?',
        answer:
          'Sì. Usa Esporta in CSV per scaricare un file che si apre direttamente in Excel o Google Sheets, oppure Copia in CSV per incollare la tabella ovunque.',
      },
      {
        question: 'Come uso la frequenza delle parole per migliorare la mia scrittura?',
        answer:
          'Cerca le parole che ripeti involontariamente, sostituiscile con sinonimi variati e verifica che le tue parole chiave principali appaiano in modo coerente ma naturale.',
      },
    ],
  },
  'text-to-slug': {
    slug: 'convertitore-testo-slug',
    name: 'Convertitore di Testo in Slug',
    shortDescription:
      'Converti titoli e intestazioni in slug di URL puliti e adatti alla SEO, con traslitterazione degli accenti e modalità in blocco.',
    keywords: [
      'testo in slug',
      'generatore di slug url',
      'slugify online',
      'formattatore di url seo',
      'convertitore di slug',
      'creare uno slug url',
      'convertitore di titolo in slug',
      'creatore di slug url pulito',
      'generatore di slug in blocco',
    ],
    seo: {
      title: 'Convertitore Testo in Slug: URL SEO puliti | UtilityFlow',
      description:
        'Trasforma titoli in slug di URL puliti e adatti alla SEO, con traslitterazione degli accenti e modalità in blocco — gratis e privato, nel tuo browser.',
      primaryKeyword: 'convertitore di testo in slug',
      secondaryKeywords: ['generatore di slug url', 'slugify una stringa', 'generatore di url pulito', 'strumento titolo in slug'],
      longTailKeywords: ['convertire un titolo di articolo in slug url adatto alla seo', 'convertire più titoli in slug in blocco', 'slugify i caratteri accentati in ascii online', 'generare uno slug da un nome di prodotto'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Trasforma titoli di blog, nomi di prodotti e calendari di contenuto multi-riga in slug ASCII puliti e sicuri per gli URL, con traslitterazione automatica degli accenti, controlli di delimitatore e rimozione facoltativa delle stop word.',
    instructions: [
      {
        title: 'Inserisci uno o più titoli',
        description:
          'Digita un singolo titolo oppure incolla più righe per generare uno slug per ciascuna in modalità in blocco.',
      },
      {
        title: 'Scegli un separatore',
        description:
          'Scegli i trattini (-) per URL adatti alla SEO oppure gli underscore (_) per nomi di file e chiavi di database.',
      },
      {
        title: 'Regola le minuscole e le stop word',
        description:
          'Mantieni le minuscole imposte per URL puliti e rimuovi eventualmente le stop word comuni come «il» e «e» per slug più brevi.',
      },
      {
        title: 'Esamina gli slug generati',
        description:
          'Verifica che ogni slug si legga chiaramente, conservi le sue parole chiave e non contenga punteggiatura indesiderata né separatori doppi.',
      },
      {
        title: 'Copia gli slug nel tuo CMS o codice',
        description:
          'Copia singoli slug o l’intero blocco nel tuo sistema di contenuti, nella tua tabella di routing o nei tuoi nomi di file.',
      },
      {
        title: 'Correggi uno slug che sembra sbagliato',
        description:
          'Se un carattere è sopravvissuto in modo strano, verifica i simboli insoliti o la scrittura non latina nel titolo originale e semplificalo prima di convertire di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Normalizzazione di un titolo accentato',
        input: 'Caffè e Panna: Guida per il 2026!',
        output: 'caffe-e-panna-guida-per-il-2026',
        explanation:
          'Traslittera le lettere latine accentate e rimuove la punteggiatura.',
      },
      {
        title: 'Conversione in blocco di titoli di blog',
        input: 'Guida per principianti\n10 consigli SEO\nRicette facili',
        output: 'guida-per-principianti\n10-consigli-seo\nricette-facili',
        explanation:
          'Converte ogni riga nel proprio slug in un solo passaggio, pronto per un CMS.',
      },
    ],
    benefits: [
      'Normalizza i caratteri accentati (é, ñ, ü) in equivalenti ASCII puliti',
      'Supporta la conversione multi-riga in blocco in un solo passaggio',
      'Offre la rimozione facoltativa delle stop word per URL più brevi',
      'Sostituisce «&» correttamente con «e» invece di rimuovere il significato',
    ],
    useCases: [
      'Generare URL leggibili per articoli di blog e documentazione',
      'Creare nomi di file coerenti per risorse e immagini scaricabili',
      'Preparare in blocco slug di route per siti statici e cataloghi e-commerce',
      'Standardizzare identificatori di categorie o tag nei database',
    ],
    faqs: [
      {
        question: 'Devo usare trattini o underscore negli slug di URL?',
        answer:
          'I motori di ricerca raccomandano in genere i trattini (-) come separatori di parole negli URL, mentre gli underscore (_) sono comuni per nomi di file o chiavi di database.',
      },
      {
        question: 'Come gestisce lo strumento i caratteri accentati come «caffè»?',
        answer:
          'Applica la normalizzazione Unicode NFD per separare i segni diacritici e rimuoverli correttamente, trasformando «caffè» in «caffe» anziché rimuovere la lettera.',
      },
      {
        question: 'Posso convertire 50 titoli in una volta?',
        answer:
          'Sì. Incolla un titolo per riga e ogni riga sarà convertita nel proprio slug corrispondente a destra.',
      },
      {
        question: 'Che cos’è un Convertitore di Testo in Slug?',
        answer:
          'Trasforma un titolo o un’espressione in uno slug pulito e sicuro per gli URL mettendolo in minuscolo, rimuovendo la punteggiatura e sostituendo gli spazi con trattini o underscore.',
      },
      {
        question: 'Il Convertitore di Testo in Slug è gratis?',
        answer:
          'Sì, è interamente gratuito senza registrazione e funziona nel tuo browser in modo che i tuoi titoli non lascino mai il tuo dispositivo.',
      },
      {
        question: 'Che cosa rende uno slug adatto alla SEO?',
        answer:
          'Un buon slug è breve, leggibile, in minuscolo e costruito da parole reali che descrivono la pagina, con trattini che separano le parole.',
      },
      {
        question: 'Quanto deve essere lungo uno slug di URL?',
        answer:
          'Punta a tre-cinque parole significative; gli slug più lunghi vengono troncati nei risultati di ricerca e sono più difficili da ricordare per i lettori.',
      },
      {
        question: 'Perché gli slug sono in minuscolo?',
        answer:
          'Gli URL in minuscolo evitano problemi di contenuto duplicato, perché alcuni server trattano «/Guida» e «/guida» come pagine diverse.',
      },
      {
        question: 'Che fine fanno i numeri in uno slug?',
        answer:
          'I numeri vengono conservati così come sono, quindi un titolo come «Guida per il 2026» diventa «guida-per-il-2026».',
      },
      {
        question: 'Come vengono gestiti i caratteri speciali negli slug?',
        answer:
          'La punteggiatura e i simboli vengono rimossi, «&» diventa «e» e le lettere accentate come é vengono traslitterate in equivalenti ASCII semplici.',
      },
      {
        question: 'Il Convertitore di Testo in Slug può gestire titoli non inglesi?',
        answer:
          'I caratteri accentati di origine latina vengono traslitterati correttamente, ma le scritture non latine possono essere rimosse, quindi verifica l’output prima di pubblicare.',
      },
      {
        question: 'Che cosa sono le stop word in uno slug?',
        answer:
          'Le stop word sono parole comuni come «un», «il» e «di» che aggiungono lunghezza senza significato; rimuoverle dà URL più brevi e più puliti.',
      },
      {
        question: 'Devo rimuovere le stop word da ogni slug?',
        answer:
          'Non sempre. Mantienile quando sono necessarie per la chiarezza, come nelle guide «come fare», e rimuovile solo quando lo slug resta leggibile senza di esse.',
      },
      {
        question: 'Posso convertire molti titoli contemporaneamente?',
        answer:
          'Sì. Incolla un titolo per riga e lo strumento genera uno slug corrispondente per ogni riga in un solo passaggio.',
      },
      {
        question: 'Il Convertitore di Testo in Slug invia i miei titoli?',
        answer:
          'No. Tutta la conversione avviene localmente nel tuo browser, quindi titoli non pubblicati e nomi di prodotti restano privati.',
      },
      {
        question: 'Perché i miei slug hanno trattini doppi?',
        answer:
          'I trattini doppi derivano in genere da punteggiatura o spazi consecutivi nel titolo originale; pulisci il titolo o rimuovi la punteggiatura superflua e converti di nuovo.',
      },
      {
        question: 'Posso usare gli slug anche per i nomi di file?',
        answer:
          'Sì. Gli slug fanno nomi di file sicuri e leggibili e l’opzione di separatore underscore si adatta ai file system e alle chiavi di database.',
      },
      {
        question: 'Qual è la differenza tra uno slug e un URL?',
        answer:
          'Uno slug è la parte finale leggibile di un URL, come «guida-compressore-immagini» in esempio.com/guida-compressore-immagini.',
      },
      {
        question: 'Gli slug influiscono sul ranking nelle ricerche?',
        answer:
          'Uno slug chiaro aiuta i motori di ricerca e i lettori a comprendere una pagina a colpo d’occhio, anche se è solo un piccolo elemento della SEO.',
      },
      {
        question: 'Posso modificare uno slug dopo aver pubblicato una pagina?',
        answer:
          'Sì, ma imposta un reindirizzamento dal vecchio URL al nuovo in modo che i link esistenti e le schede di ricerca non si rompano.',
      },
    ],
  },
  'markdown-previewer': {
    slug: 'anteprima-markdown',
    name: 'Anteprima Markdown ed Esportatore HTML',
    shortDescription:
      'Scrivi Markdown in un editor diviso in tempo reale, ispeziona la formattazione resa in sicurezza ed esporta HTML pulito.',
    keywords: [
      'anteprima markdown',
      'markdown in html',
      'editor markdown online',
      'visualizzatore markdown in tempo reale',
      'strumento markdown online',
      'renderizzare markdown online',
      'convertitore markdown in html',
      'anteprima markdown di readme',
      'esportatore html markdown',
    ],
    seo: {
      title: 'Anteprima Markdown: editor HTML in tempo reale | UtilityFlow',
      description:
        'Scrivi Markdown e guardalo rendersi in tempo reale, ispeziona l’HTML compilato e copia o scarica un documento HTML pulito — gratis, senza registrazione.',
      primaryKeyword: 'anteprima markdown',
      secondaryKeywords: ['convertitore markdown in html', 'editor markdown online', 'visualizzatore markdown', 'editor markdown in tempo reale'],
      longTailKeywords: ['anteprima markdown in tempo reale con export html', 'convertire un readme markdown in html online', 'editor markdown nel browser senza invio', 'vedere in anteprima un readme github prima del commit'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Scrivi file README, documentazione e note formattate in un editor Markdown reattivo con anteprima resa in tempo reale, escape HTML sicuro, ispezione dell’HTML grezzo ed export HTML in un clic.',
    instructions: [
      {
        title: 'Scrivi o incolla Markdown',
        description:
          'Usa la sintassi standard (# titoli, **grassetto**, *corsivo*, elenchi, citazioni, link e blocchi di codice delimitati) nel pannello di sinistra.',
      },
      {
        title: 'Guarda l’anteprima in tempo reale',
        description:
          'Il pannello di destra rende la tua formattazione all’istante mentre digiti, in modo che tu possa verificare titoli, elenchi e link senza aggiornare.',
      },
      {
        title: 'Passa alla scheda HTML grezzo',
        description:
          'Passa sopra il pannello di destra per ispezionare il markup HTML compilato da cui è costruita l’anteprima.',
      },
      {
        title: 'Verifica i blocchi di codice e i link',
        description:
          'Scorri l’anteprima per confermare che i blocchi di codice delimitati si rendano correttamente e che i link puntino dove ti aspetti.',
      },
      {
        title: 'Copia l’HTML o esporta un file',
        description:
          'Fai clic su Copia HTML per un frammento da incollare in un CMS o un’email, oppure su Esporta HTML per scaricare un documento HTML5 autonomo.',
      },
      {
        title: 'Correggi una formattazione che sembra sbagliata',
        description:
          'Se un elenco o un blocco di codice non si rende, verifica una riga vuota mancante prima di esso o una chiusura di backtick non chiusa, poi ricontrolla l’anteprima.',
      },
    ],
    examples: [
      {
        title: 'Conversione di un titolo e di un elenco',
        input: '## Lista di controllo\n- **Verifica** i link\n- Pubblica la bozza',
        output: '<h2>Lista di controllo</h2><ul><li><strong>Verifica</strong> i link</li><li>Pubblica la bozza</li></ul>',
        explanation:
          'Converte una sintassi Markdown pulita direttamente in elementi HTML semantici.',
      },
      {
        title: 'Citazione e link',
        input: '> La semplicità è la chiave.\n\nVedi [UtilityFlow](https://utilityflow.online) per altri strumenti.',
        output: '<blockquote><p>La semplicità è la chiave.</p></blockquote><p>Vedi <a href="https://utilityflow.online">UtilityFlow</a> per altri strumenti.</p>',
        explanation:
          'Mostra come citazioni e link si rendano in HTML pulito e sicuro.',
      },
    ],
    benefits: [
      'Esegue l’escape dell’HTML grezzo e sanifica gli schemi di link per impedire markup di anteprima pericoloso',
      'Supporta titoli, grassetto/corsivo, barrato, citazioni, elenchi, link e blocchi di codice',
      'Passa senza sforzo tra l’anteprima visiva e il codice sorgente HTML grezzo',
      'Scarica un file .html autonomo completo in un clic',
    ],
    useCases: [
      'Vedere in anteprima file README.md GitHub prima del commit',
      'Convertire note Markdown in HTML pulito per email o blocchi CMS',
      'Scrivere tutorial tecnici e note di versione offline',
      'Verificare rapidamente la formattazione di link e chiusure di codice',
    ],
    faqs: [
      {
        question: 'L’Anteprima Markdown esegue JavaScript incorporato?',
        answer:
          'No. I tag HTML grezzi dell’input vengono sottoposti a escape e i protocolli di link sono limitati agli schemi web sicuri, relativi, di ancoraggio e mailto.',
      },
      {
        question: 'Posso copiare solo il frammento HTML compilato senza il boilerplate <html>?',
        answer:
          'Sì. Il pulsante «Copia HTML» copia il markup HTML del corpo compilato, mentre «Esporta HTML» lo racchiude in un documento HTML5 autonomo.',
      },
      {
        question: 'I blocchi di codice delimitati sono supportati?',
        answer:
          'Sì. Racchiudi i frammenti di codice multi-riga in tripli backtick (```) per rendere blocchi <pre><code> formattati.',
      },
      {
        question: 'Che cos’è un’Anteprima Markdown?',
        answer:
          'Rende il testo Markdown in HTML formattato in tempo reale in modo che tu possa vedere esattamente come appariranno titoli, elenchi, link e codice prima di pubblicare.',
      },
      {
        question: 'L’Anteprima Markdown è gratis?',
        answer:
          'Sì, è interamente gratuita senza registrazione e funziona nel tuo browser in modo che le tue bozze non vengano mai inviate.',
      },
      {
        question: 'Quale sintassi Markdown supporta l’anteprima?',
        answer:
          'Supporta titoli, grassetto, corsivo, barrato, citazioni, elenchi ordinati e non ordinati, link, immagini e blocchi di codice delimitati.',
      },
      {
        question: 'Posso vedere in anteprima un README GitHub con questo strumento?',
        answer:
          'Sì. Incolla il contenuto del tuo README.md nell’editor per verificare come si renderà su GitHub prima di fare il commit.',
      },
      {
        question: 'L’Anteprima Markdown supporta le tabelle?',
        answer:
          'Il supporto delle tabelle dipende dal dialetto Markdown; verifica l’anteprima per vedere se le tue tabelle con barre verticali si rendono e semplificale se non si rendono.',
      },
      {
        question: 'Qual è la differenza tra Copia HTML ed Esporta HTML?',
        answer:
          'Copia HTML copia solo il markup del corpo compilato per incollarlo altrove, mentre Esporta HTML scarica un documento HTML5 autonomo completo.',
      },
      {
        question: 'L’HTML esportato è una pagina web completa?',
        answer:
          'Sì. L’export racchiude il tuo contenuto in un documento HTML5 completo con tag head e body, pronto da aprire in qualsiasi browser.',
      },
      {
        question: 'L’Anteprima Markdown esegue JavaScript dal mio input?',
        answer:
          'No. I tag HTML grezzi vengono sottoposti a escape e i protocolli di link sono limitati agli schemi web sicuri, relativi, di ancoraggio e mailto.',
      },
      {
        question: 'Posso usare l’Anteprima Markdown offline?',
        answer:
          'L’editor e l’anteprima funzionano interamente nel tuo browser senza invio, quindi le tue bozze restano sul tuo dispositivo mentre lavori.',
      },
      {
        question: 'L’Anteprima Markdown salva il mio lavoro?',
        answer:
          'Lo strumento non archivia il tuo testo su nessun server, quindi copia o esporta tutto ciò che è importante prima di chiudere la scheda.',
      },
      {
        question: 'Come aggiungo un’immagine in Markdown?',
        answer:
          'Usa la sintassi ![testo alternativo](url-dell-immagine) e l’immagine si renderà nell’anteprima quando l’URL è accessibile.',
      },
      {
        question: 'Perché il mio blocco di codice non si rende?',
        answer:
          'Assicurati che le chiusure di apertura e chiusura usino tre backtick sulle proprie righe, con una riga vuota prima della chiusura di apertura.',
      },
      {
        question: 'Posso convertire Markdown in HTML per un’email?',
        answer:
          'Sì. Copia il frammento HTML compilato e incollalo in un editor di email che accetta HTML, oppure esporta prima il documento completo.',
      },
      {
        question: 'Posso scrivere blocchi di codice con un tag di lingua?',
        answer:
          'Sì. Aggiungi il nome della lingua dopo i backtick di apertura, ad esempio ```js, e il blocco si rende come codice formattato.',
      },
      {
        question: 'Posso incollare Markdown copiato da un altro editor?',
        answer:
          'Sì. Incolla Markdown da qualsiasi editor o app di note e l’anteprima si aggiorna immediatamente.',
      },
      {
        question: 'Che fine fanno i link nell’anteprima?',
        answer:
          'I link si rendono come ancore cliccabili nell’anteprima e solo i protocolli sicuri come https, i percorsi relativi, le ancore e mailto sono consentiti.',
      },
      {
        question: 'Posso stampare l’anteprima resa?',
        answer:
          'Sì. Esporta il file HTML e aprilo nel tuo browser, poi usa la funzione di stampa del browser per stamparlo o salvarlo in PDF.',
      },
    ],
  },
  'line-prefix-suffix': {
    slug: 'aggiungi-prefisso-suffisso-righe',
    name: 'Aggiungi Numeri di Riga e Prefisso/Suffisso',
    shortDescription:
      'Aggiungi numeri di riga, prefissi personalizzati e suffissi a ogni riga per elenchi, clausole SQL e codice.',
    keywords: [
      'aggiungere prefisso e suffisso alle righe',
      'aggiungere numeri di riga al testo',
      'racchiudere le righe tra virgolette',
      'formattatore di righe in massa',
      'aggiungere testo prima di ogni riga',
      'aggiungere testo alle righe',
      'generatore di numeri di riga',
      'formattatore di clausola sql in',
      'aggiungere una virgola a ogni riga',
    ],
    seo: {
      title: 'Aggiungi Prefisso e Suffisso alle Righe | UtilityFlow',
      description:
        'Aggiungere numeri di riga, prefissi e suffissi personalizzati a ogni riga di testo per elenchi, SQL e codice — gratis e senza registrazione, nel tuo browser.',
      primaryKeyword: 'aggiungere prefisso e suffisso alle righe',
      secondaryKeywords: ['aggiungere numeri di riga online', 'strumento prefisso suffisso riga', 'racchiudere le righe tra virgolette', 'formattatore di righe in massa'],
      longTailKeywords: ['racchiudere ogni riga tra virgolette singole e virgola per sql', 'aggiungere un prefisso di elenco numerato alle righe di testo', 'aggiungere testo prima e dopo ogni riga in massa', 'aggiungere numeri di riga a partire da zero'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Aggiungi numeri di riga sequenziali, caratteri di elenco puntato o virgolette di apertura, e aggiungi virgole, punti e virgola o tag di chiusura a ogni riga di un elenco in pochi secondi.',
    instructions: [
      {
        title: 'Imposta il tuo prefisso e suffisso',
        description:
          'Inserisci qualsiasi testo da aggiungere prima o dopo ogni riga, come una virgoletta di apertura, un punto elenco o un tag di chiusura.',
      },
      {
        title: 'Attiva i numeri di riga se necessario',
        description:
          'Attiva Aggiungi numeri di riga e imposta il numero iniziale e il separatore, ad esempio «1.» oppure «01:».',
      },
      {
        title: 'Incolla le tue righe',
        description:
          'Inserisci un elemento per riga in Righe di input, oppure fai clic su Carica esempio per vedere la citazione in stile SQL in azione.',
      },
      {
        title: 'Scegli come vengono gestite le righe vuote',
        description:
          'Mantieni Ignora righe vuote spuntato in modo che le righe vuote di spaziatura vengano preservate senza numerazione né caratteri aggiuntivi.',
      },
      {
        title: 'Esamina l’output formattato',
        description:
          'Verifica che virgolette, virgole e numeri si allineino su ogni riga prima di usare il risultato.',
      },
      {
        title: 'Copia le righe formattate',
        description:
          'Copia l’intero blocco negli appunti e incollalo nella tua query SQL, nel tuo file di codice o nel tuo documento.',
      },
    ],
    examples: [
      {
        title: 'Formattare valori per una clausola SQL IN',
        input: 'Prefisso: \'  |  Suffisso: \',  |  Righe: tokyo / londra',
        output: '\'tokyo\',\n\'londra\',',
        explanation:
          'Racchiude all’istante elementi di testo semplice tra virgolette singole e virgole finali.',
      },
      {
        title: 'Passaggi numerati con zeri di riempimento',
        input: 'Numeri di riga: Attivato · Riempimento di zeri: Attivato · Separatore: «:»',
        output: '01 : Passaggio uno\n02 : Passaggio due',
        explanation:
          'Crea elenchi numerati allineati per piani o documentazione.',
      },
    ],
    benefits: [
      'Combina prefisso, suffisso e numerazione sequenziale delle righe in un unico strumento',
      'Il riempimento di zeri opzionale mantiene visivamente allineati gli elenchi multi-cifra',
      'Ignora automaticamente le righe vuote quando è attivo in modo che i conteggi restino precisi',
      'Nessun invio a un server per identificativi sensibili o valori di query',
    ],
    useCases: [
      'Racchiudere identificativi di foglio di calcolo tra virgolette e virgole per query SQL IN (...)',
      'Convertire elementi di testo semplice in punti elenco Markdown o tag HTML <li>',
      'Aggiungere numeri di passaggio sequenziali a liste di controllo e piani',
      'Costruire array di stringhe per JavaScript, Python o JSON',
    ],
    faqs: [
      {
        question: 'Posso aggiungere solo numeri di riga senza prefisso né suffisso?',
        answer:
          'Sì. Cancella i campi Prefisso di riga e Suffisso di riga, attiva «Aggiungi numeri di riga» e imposta il tuo numero iniziale e separatore preferiti.',
      },
      {
        question: 'Come ignoro la numerazione delle righe vuote di spaziatura?',
        answer:
          'Mantieni «Ignora righe vuote» spuntato in modo che le righe vuote vengano preservate senza incrementare il contatore di righe né ricevere prefisso/suffisso.',
      },
      {
        question: 'Posso iniziare la numerazione da 0 o da qualsiasi numero personalizzato?',
        answer:
          'Sì. Inserisci qualsiasi intero nel campo Numero iniziale per iniziare a contare da 0, 1, 100 o un altro offset.',
      },
      {
        question: 'Che cos’è lo strumento Aggiungi Numeri di Riga e Prefisso/Suffisso?',
        answer:
          'Aggiunge un prefisso personalizzato, un suffisso o un numero di riga sequenziale a ogni riga di un elenco, in modo che tu possa formattare testo in massa invece di modificare ogni riga a mano.',
      },
      {
        question: 'Lo strumento di prefisso e suffisso di riga è gratis?',
        answer:
          'Sì, è interamente gratuito senza registrazione e funziona nel tuo browser in modo che il tuo testo non lasci mai il tuo dispositivo.',
      },
      {
        question: 'Posso aggiungere un prefisso senza suffisso?',
        answer:
          'Sì. Compila solo il campo Prefisso di riga e lascia vuoto il suffisso, o viceversa, e verrà applicata solo la parte inserita.',
      },
      {
        question: 'Come racchiudo le righe tra virgolette per una clausola SQL IN?',
        answer:
          'Inserisci una virgoletta singola come prefisso e «\',» come suffisso, e ogni riga diventa un valore tra virgolette seguito da una virgola.',
      },
      {
        question: 'Posso aggiungere una virgola alla fine di ogni riga?',
        answer:
          'Sì. Metti una virgola nel campo Suffisso di riga e ogni riga non vuota terminerà con una virgola.',
      },
      {
        question: 'Come funziona il riempimento di zeri per i numeri di riga?',
        answer:
          'Quando il riempimento di zeri è attivo, i numeri vengono completati alla stessa larghezza, quindi un elenco di 100 righe mostra 001, 002, ecc. invece di 1, 2 e 100.',
      },
      {
        question: 'Quale separatore devo usare per le righe numerate?',
        answer:
          'Le scelte comuni sono «.» per elenchi numerati semplici, «:» per passaggi etichettati e «)» per la numerazione in stile piano.',
      },
      {
        question: 'Posso numerare le righe a partire da un numero diverso da 1?',
        answer:
          'Sì. Inserisci qualsiasi intero nel campo Numero iniziale per iniziare da 0, 100 o qualsiasi altro offset di cui hai bisogno.',
      },
      {
        question: 'Che fine fanno le righe vuote del mio elenco?',
        answer:
          'Con Ignora righe vuote attivo, le righe vuote vengono conservate così come sono senza numeri né affissi; con questa opzione disattiva, vengono trattate come qualsiasi altra riga.',
      },
      {
        question: 'Posso usare lo strumento per creare un elenco puntato Markdown?',
        answer:
          'Sì. Inserisci «-» come prefisso e ogni riga diventa un punto di elenco Markdown.',
      },
      {
        question: 'Posso trasformare le righe in elementi di elenco HTML?',
        answer:
          'Sì. Usa «<li>» come prefisso e «</li>» come suffisso per racchiudere ogni riga in tag di elemento di elenco.',
      },
      {
        question: 'Lo strumento invia il mio testo a un server?',
        answer:
          'No. Tutta la formattazione avviene localmente nel tuo browser, il che mantiene privati identificativi sensibili, valori di query e codice.',
      },
      {
        question: 'Posso formattare righe per un array JavaScript o Python?',
        answer:
          'Sì. Racchiudi le righe tra virgolette con una virgola finale e incolla il risultato direttamente in un letterale di array.',
      },
      {
        question: 'C’è un limite al numero di righe che posso formattare?',
        answer:
          'Lo strumento gestisce comodamente elenchi lunghi, anche se incollaggi estremamente voluminosi possono richiedere un momento per l’elaborazione nel browser.',
      },
      {
        question: 'Perché alcune righe non sono numerate?',
        answer:
          'Verifica se Ignora righe vuote è attivo, perché le righe vuote vengono ignorate per concezione e non riceveranno un numero.',
      },
      {
        question: 'Posso aggiungere prefissi diversi a righe diverse?',
        answer:
          'No. Lo strumento applica lo stesso prefisso e lo stesso suffisso a ogni riga; per una formattazione mista, passa ogni gruppo nello strumento separatamente.',
      },
      {
        question: 'Come rimuovo un prefisso aggiunto per errore?',
        answer:
          'Incolla il testo formattato nello strumento Trova e Sostituisci oppure rilancia l’elenco originale con le impostazioni corrette, perché questo strumento aggiunge solo testo e non lo rimuove.',
      },
    ],
  },
};
