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
  },
};
