import type { ToolLocaleOverride } from '../../types';

/**
 * Italian overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const IT_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'json-formatter': {
    slug: 'formattatore-json',
    name: 'Formattatore e Validatore JSON',
    shortDescription:
      'Formatta, minifica, ordina le chiavi e convalida la sintassi JSON con individuazione precisa degli errori per riga e colonna.',
    keywords: [
      'formattatore json',
      'validatore json',
      'abbellitore json',
      'minificatore json',
      'stampare json in modo leggibile',
      'stampante json',
      'formattare json online',
      'verifica sintassi json',
      'json lint',
    ],
    seo: {
      title: 'Formattatore JSON e Validatore: stampa JSON | UtilityFlow',
      description:
        'Formatta, convalida, minifica e ordina le chiavi JSON all’istante nel tuo browser, con errori di sintassi per riga e colonna per fare debug velocemente.',
      primaryKeyword: 'formattatore json',
      secondaryKeywords: ['validatore json', 'abbellitore json', 'minificatore json', 'stampare json in modo leggibile'],
      longTailKeywords: ['convalidare e stampare json online gratis', 'ordinare le chiavi json alfabeticamente nel browser', 'minificare un payload json senza invio a un server', 'formattare json annidato con indentazione online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convalida payload JSON malformati con feedback per riga e colonna, formatta strutture annidate con indentazione di 2 spazi, 4 spazi o tabulazione, ordina le chiavi alfabeticamente oppure minifica per il trasporto in produzione.',
  },
  'base64-encoder-decoder': {
    slug: 'codificatore-decodificatore-base64',
    name: 'Codificatore / Decodificatore Base64',
    shortDescription:
      'Codifica testo in Base64 standard o sicuro per gli URL e decodifica stringhe Base64 UTF-8 in sicurezza nella memoria del browser.',
    keywords: [
      'codificatore base64',
      'decodificatore base64',
      'base64 utf-8',
      'base64 sicuro per gli url',
      'codificare in base64 online',
      'decodificare base64 online',
      'codificare testo in base64',
      'decodificare base64 in testo',
      'convertitore base64',
    ],
    seo: {
      title: 'Codificatore e Decodificatore Base64 | UtilityFlow',
      description:
        'Codifica testo UTF-8 in Base64 o decodifica Base64 in testo leggibile, con opzioni sicure per gli URL, localmente senza invio, gratis nel tuo browser.',
      primaryKeyword: 'codificatore decodificatore base64',
      secondaryKeywords: ['decodificare base64 online', 'codificare base64 utf-8', 'base64 sicuro per gli url', 'base64 in testo'],
      longTailKeywords: ['codificare emoji utf-8 in base64 online', 'decodificare base64 sicuro per gli url senza padding', 'convertitore base64 lato client', 'decodificare una stringa base64 con emoji online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Converti stringhe UTF-8 — inclusi caratteri accentati ed emoji — in Base64 standard o Base64 sicuro per gli URL secondo la RFC 4648, oppure decodifica stringhe Base64 in testo semplice con convalida istantanea.',
  },
  'url-encoder-decoder': {
    slug: 'codificatore-decodificatore-url',
    name: 'Codificatore / Decodificatore URL',
    shortDescription:
      'Codifica in percentuale valori di query o URL completi e ispeziona host, percorso e parametri di query analizzati.',
    keywords: [
      'codificatore url',
      'decodificatore url',
      'codifica in percentuale',
      'analizzatore di url',
      'codificare un url online',
      'decodificare un url online',
      'strumento di codifica url',
      'encodeuricomponent',
      'codificatore di stringa di query',
    ],
    seo: {
      title: 'Codificatore URL e Decodificatore: codifica % | UtilityFlow',
      description:
        'Codifica o decodifica URL con le modalità encodeURIComponent e encodeURI ispezionando protocollo, host, percorso e parametri di query, gratis nel browser.',
      primaryKeyword: 'codificatore decodificatore url',
      secondaryKeywords: ['codifica in percentuale online', 'strumento di decodifica url', 'analizzatore di stringa di query', 'encodeuricomponent online'],
      longTailKeywords: ['differenza tra encodeuri e encodeuricomponent', 'decodificare la tabella dei parametri di query di un url online', 'codificare in percentuale i caratteri speciali degli url', 'codificare un valore di query url senza rompere la e commerciale'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Codifica in sicurezza valori di parametri di query o URL completi, decodifica stringhe codificate in percentuale (%20, %3A, +) e ispeziona una ripartizione in tempo reale di ogni parametro di query in una tabella.',
  },
  'uuid-generator': {
    slug: 'generatore-uuid',
    name: 'Generatore di UUID (v4 e v7)',
    shortDescription:
      'Genera identificativi UUID v4 crittograficamente casuali e UUID v7 ordinati per tempo secondo la RFC 9562, in blocco.',
    keywords: [
      'generatore uuid',
      'generatore guid',
      'uuid v4',
      'generatore uuid v7',
      'generatore uuid v4 online',
      'generare uuid online',
      'generatore uuid casuale',
      'generatore uuid in massa',
      'generatore uuid gratis',
    ],
    seo: {
      title: 'Generatore UUID: v4 e v7 in blocco gratis | UtilityFlow',
      description:
        'Genera fino a 100 identificativi UUID v4 casuali o UUID v7 ordinati per tempo (RFC 9562), con maiuscole e parentesi graffe opzionali, nel tuo browser.',
      primaryKeyword: 'generatore uuid',
      secondaryKeywords: ['generatore guid online', 'generatore uuid v4', 'uuid v7 ordinati per tempo', 'crea uuid in blocco online'],
      longTailKeywords: ['generare uuid v4 e v7 in massa online', 'uuid v7 ordinati per tempo secondo rfc 9562', 'uuid senza trattini in maiuscolo', 'generare 100 uuid in una volta online gratis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crea blocchi singoli o multipli di identificativi UUID v4 crittograficamente casuali e UUID v7 ordinati per timestamp secondo la RFC 9562 direttamente tramite le API Web Crypto, con interruttori di formattazione.',
  },
  'regex-tester': {
    slug: 'tester-regex',
    name: 'Tester Regex',
    shortDescription:
      'Testa espressioni regolari JavaScript con evidenziazione delle corrispondenze in tempo reale, gruppi di acquisizione, flag e output di sostituzione.',
    keywords: [
      'tester regex',
      'tester di espressione regolare',
      'regex javascript',
      'evidenziatore di corrispondenza regex',
      'tester regex online',
      'testare regex online',
      'debugger regex',
      'tester di corrispondenza regex',
      'tester regex javascript',
    ],
    seo: {
      title: 'Tester Regex: corrispondenze JS in tempo reale | UtilityFlow',
      description:
        'Testa espressioni regolari in tempo reale con i flag g/i/m/s, l’evidenziazione delle corrispondenze e l’anteprima di sostituzione nel tuo browser, gratis.',
      primaryKeyword: 'tester regex',
      secondaryKeywords: ['tester di espressione regolare', 'debugger regex js', 'gruppi di acquisizione regex', 'tester di sostituzione regex'],
      longTailKeywords: ['testare i gruppi di acquisizione regex javascript online', 'evidenziatore di corrispondenza di espressione regolare in tempo reale', 'anteprima di sostituzione regex con gruppo di acquisizione $1', 'fare debug di regex javascript con evidenziazione in tempo reale online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Fai debug di espressioni regolari JavaScript in modo interattivo con corrispondenze evidenziate in tempo reale, posizioni di indice di corrispondenza, ispezione dei gruppi di acquisizione numerati, interruttori di flag e anteprime di sostituzione.',
  },
  'jwt-decoder': {
    slug: 'decodificatore-jwt',
    name: 'Decodificatore JWT',
    shortDescription:
      'Decodifica intestazioni, claim di payload e timestamp di scadenza dei token web JSON in sicurezza nel tuo browser.',
    keywords: [
      'decodificatore jwt',
      'decodificare un token web json',
      'ispettore jwt',
      'timestamp exp jwt',
      'decodificatore di token jwt',
      'decodificare il payload jwt',
      'verifica scadenza jwt',
      'visualizzatore di claim jwt',
      'verificare la scadenza jwt',
    ],
    seo: {
      title: 'Decodificatore JWT: decodifica token, scadenza | UtilityFlow',
      description:
        'Decodifica intestazioni JWT e claim di payload nel tuo browser e verifica iat, nbf ed exp in date UTC leggibili — gratis, privato e senza registrazione.',
      primaryKeyword: 'decodificatore jwt',
      secondaryKeywords: ['decodificare jwt online', 'visualizzatore di payload jwt', 'ispettore di token web json', 'verifica scadenza jwt'],
      longTailKeywords: ['decodificare un token jwt localmente senza invio a un server', 'verificare il timestamp di scadenza exp jwt online', 'ispezionare intestazione base64url e claim jwt', 'leggere i claim di payload jwt nel browser'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Ispeziona i token web JSON (JWT) in sicurezza nella memoria locale del browser — consulta gli oggetti JSON formattati di Intestazione e Payload e verifica lo stato di scadenza leggibile dei claim `iat`, `nbf` ed `exp`.',
  },
  'hash-generator': {
    slug: 'generatore-hash',
    name: 'Generatore di Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Calcola hash crittografici SHA-1, SHA-256, SHA-384 e SHA-512 per testo o file locali tramite Web Crypto.',
    keywords: [
      'generatore di hash',
      'generatore sha256',
      'hash sha512',
      'checksum sha256 di file',
      'generatore di hash sha1',
      'hash sha384 online',
      'calcolatore di checksum',
      'verificare il checksum di un file',
      'generatore di hash sicuro online',
    ],
    seo: {
      title: 'Generatore di Hash: SHA-1, SHA-256, SHA-512 | UtilityFlow',
      description:
        'Genera digest SHA-1, SHA-256, SHA-384 e SHA-512 in esadecimale o Base64 per testo e file locali — gratis e privato, senza registrazione, nel browser online.',
      primaryKeyword: 'generatore di hash',
      secondaryKeywords: ['hash sha256 online', 'verifica checksum di file', 'generatore sha512', 'calcolatore di checksum'],
      longTailKeywords: ['calcolare il checksum sha256 di un file locale nel browser', 'generare un hash sha256 in esadecimale e base64', 'generatore di hash api web crypto online', 'verificare il checksum sha256 di un file scaricato'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Calcola contemporaneamente i digest SHA-1, SHA-256, SHA-384 e SHA-512 usando l’API Web Crypto nativa del browser (`crypto.subtle.digest`) sia per il testo UTF-8 sia per i checksum di file locali.',
  },
  'html-entity-encoder': {
    slug: 'codificatore-entita-html',
    name: 'Codificatore e Decodificatore di Entità HTML',
    shortDescription:
      'Esegui l’escape dei caratteri HTML riservati (<, >, &, virgolette) e dei simboli non ASCII oppure decodifica correttamente le entità HTML.',
    keywords: [
      'codificatore di entità html',
      'decodificatore html',
      'escape html online',
      'rimuovere l’escape delle entità html',
      'codificare i caratteri html',
      'strumento di escape html',
      'convertire in entità html',
      'decodificare le entità html online',
      'escape dei caratteri speciali html',
    ],
    seo: {
      title: 'Codificatore Entità HTML: escape e decodifica | UtilityFlow',
      description:
        'Codifica i caratteri HTML riservati e i simboli non ASCII in entità, oppure decodifica le entità nominate e numeriche in testo semplice. Gratis e locale.',
      primaryKeyword: 'codificatore di entità html',
      secondaryKeywords: ['strumento di escape html', 'decodificatore di entità html', 'rimuovere l’escape html', 'codificare i caratteri html'],
      longTailKeywords: ['escape dei tag html per frammenti di codice online', 'decodificare le entità html nominate e numeriche', 'convertire i caratteri speciali in entità html', 'escape di virgolette e e commerciali html online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Esegui l’escape in sicurezza di `<`, `>`, `&`, virgolette e simboli Unicode internazionali in entità HTML per incorporare frammenti di codice in pagine web, oppure decodifica stringhe con escape HTML in testo leggibile.',
  },
  'json-csv-converter': {
    slug: 'convertitore-json-csv',
    name: 'Convertitore JSON in CSV / CSV in JSON',
    shortDescription:
      'Converti array JSON in fogli di calcolo CSV RFC 4180 e analizza file CSV tra virgolette in JSON pulito.',
    keywords: [
      'json in csv',
      'csv in json',
      'convertitore json csv',
      'convertire un array json in csv',
      'esportare json in csv',
      'json in csv online gratis',
      'convertitore csv in json',
      'convertitore json in tsv',
      'convertire csv in array json',
    ],
    seo: {
      title: 'Convertitore JSON in CSV: JSON e CSV facili | UtilityFlow',
      description:
        'Converti array JSON in fogli CSV puliti con appiattimento degli oggetti annidati, oppure analizza CSV e TSV in JSON strutturato, gratis e locale nel browser.',
      primaryKeyword: 'convertitore json in csv',
      secondaryKeywords: ['convertitore csv in json', 'esportare json in csv', 'tsv in json', 'json in csv online gratis'],
      longTailKeywords: ['convertire oggetti json annidati in colonne csv online', 'analizzare csv tra virgolette con virgole in array json', 'scaricatore json in csv lato client', 'convertire un array json in foglio di calcolo csv gratis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Trasforma array JSON di API in fogli di calcolo CSV puliti — appiattendo automaticamente le chiavi di oggetti annidati — oppure analizza file CSV/TSV delimitati con virgole tra virgolette in JSON formattato.',
  },
  'unix-timestamp-converter': {
    slug: 'convertitore-timestamp-unix',
    name: 'Convertitore di Timestamp Unix',
    shortDescription:
      'Converti secondi o millisecondi di epoca Unix in date ISO 8601, UTC e locali — e viceversa.',
    keywords: [
      'convertitore di timestamp unix',
      'convertitore di epoca',
      'epoca in data',
      'timestamp in iso 8601',
      'convertitore di tempo unix',
      'convertire l’epoca in data',
      'data in timestamp unix',
      'ora unix attuale',
      'convertitore di epoca in millisecondi',
    ],
    seo: {
      title: 'Convertitore Timestamp Unix: epoca-data | UtilityFlow',
      description:
        'Converti timestamp Unix in secondi o millisecondi in ISO 8601, UTC, RFC 2822 e ora locale, oppure converti una data in tempo Unix — gratis nel browser.',
      primaryKeyword: 'convertitore di timestamp unix',
      secondaryKeywords: ['convertitore di epoca', 'tempo unix in data', 'data in timestamp unix', 'convertitore di epoca in millisecondi'],
      longTailKeywords: ['convertire millisecondi di epoca unix in data iso 8601', 'timestamp unix attuale in tempo reale in secondi', 'convertire una data e un’ora locali in epoca unix', 'timestamp unix in data utc online gratis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Converti interi di epoca Unix (secondi o millisecondi) in stringhe ISO 8601, UTC e di fuso orario locale con offset relativi, oppure trasforma qualsiasi data e ora di calendario in timestamp di epoca.',
  },
  'sql-formatter': {
    slug: 'formattatore-sql',
    name: 'Formattatore SQL',
    shortDescription:
      'Formatta, indenta e standardizza query SQL con parole chiave in maiuscolo/minuscolo oppure minifica query su una riga.',
    keywords: [
      'formattatore sql',
      'abbellitore sql',
      'formattare una query sql',
      'minificatore sql',
      'formattare sql online',
      'abbellitore di query sql',
      'stampare sql in modo leggibile',
      'formattatore sql online',
      'indentare una query sql',
    ],
    seo: {
      title: 'Formattatore SQL: abbellisci e minifica | UtilityFlow',
      description:
        'Formatta query SQL disordinate con a capo di clausola puliti e indentazione di 2/4 spazi, oppure minificale su una riga — gratis, nel tuo browser online.',
      primaryKeyword: 'formattatore sql',
      secondaryKeywords: ['abbellitore sql online', 'stampare sql in modo leggibile', 'minificatore sql', 'formattare una query sql online'],
      longTailKeywords: ['formattare una query sql select join group by online', 'convertire le parole chiave sql in maiuscolo correttamente', 'minificare una query sql preservando i letterali di stringa', 'indentare una query sql con 2 o 4 spazi online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Trasforma query SQL dense su una sola riga in istruzioni leggibili e strutturate con un chiaro allineamento delle clausole `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` e `ORDER BY`, preservando le stringhe tra virgolette e i commenti.',
  },
  'css-minifier': {
    slug: 'minificatore-css',
    name: 'Minificatore e Abbellitore CSS',
    shortDescription:
      'Minifica fogli di stile CSS per ridurre la dimensione del bundle oppure abbellisci regole CSS compresse con un’indentazione pulita.',
    keywords: [
      'minificatore css',
      'abbellitore css',
      'comprimere css online',
      'formattare css',
      'compressore css',
      'minificare css online',
      'deminificare css',
      'formattatore css',
      'ridurre la dimensione di un file css',
    ],
    seo: {
      title: 'Minificatore CSS e Formattatore: comprimi CSS | UtilityFlow',
      description:
        'Minifica il CSS rimuovendo commenti e spazi superflui, con statistiche di risparmio di byte, oppure abbellisci fogli minificati, gratis online nel browser.',
      primaryKeyword: 'minificatore css',
      secondaryKeywords: ['abbellitore css', 'comprimere css', 'formattatore css online', 'minificare css online'],
      longTailKeywords: ['minificare il css preservando le stringhe tra virgolette e le media query', 'deminificare un foglio di stile css compresso online', 'calcolare la percentuale di compressione css nel browser', 'ridurre la dimensione di un file css prima del deploy'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Comprimi fogli di stile CSS rimuovendo i commenti, gli spazi ridondanti e i punti e virgola finali prima delle parentesi graffe chiuse — oppure espandi CSS minificato su una riga in blocchi indentati leggibili.',
  },
  'js-formatter': {
    slug: 'formattatore-javascript',
    name: 'Minificatore e Formattatore JavaScript / TypeScript',
    shortDescription:
      'Minifica frammenti JavaScript rimuovendo commenti e spazi superflui oppure abbellisci blocchi di codice compatti.',
    keywords: [
      'minificatore javascript',
      'formattatore js',
      'abbellitore js',
      'comprimere javascript online',
      'formattatore javascript',
      'minificatore js online',
      'abbellire javascript',
      'minificatore typescript',
      'formattatore di codice js',
    ],
    seo: {
      title: 'Minificatore JavaScript: comprimi il JS | UtilityFlow',
      description:
        'Minifica JavaScript e TypeScript rimuovendo commenti e spazi in sicurezza, oppure abbellisci codice compatto — gratis e senza registrazione, nel tuo browser.',
      primaryKeyword: 'minificatore javascript',
      secondaryKeywords: ['abbellitore js', 'formattare javascript online', 'compressore js', 'formattatore javascript'],
      longTailKeywords: ['minificare un frammento javascript preservando stringhe e letterali di modello', 'deminificare codice javascript compatto con indentazione', 'formattatore e minificatore js lato client', 'abbellire codice javascript con indentazione di 2 o 4 spazi'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compatta frammenti JavaScript per bookmarklet e script inline rimuovendo commenti e spaziatura superflua — mantenendo intatti i letterali di stringa — oppure re-indenta correttamente codice compresso.',
  },
  'cron-expression-parser': {
    slug: 'analizzatore-espressioni-cron',
    name: 'Analizzatore di Espressioni Cron e Anteprima Pianificazione',
    shortDescription:
      'Traduci espressioni cron a 5 campi in italiano semplice, esplora i preset e vedi in anteprima le prossime 8 ore di esecuzione.',
    keywords: [
      'analizzatore di espressioni cron',
      'generatore crontab',
      'tester di pianificazione cron',
      'prossime esecuzioni cron',
      'analizzatore crontab',
      'tester di espressione cron',
      'anteprima di pianificazione cron',
      'cron in italiano semplice',
      'pianificatore di attività cron',
    ],
    seo: {
      title: 'Analizzatore di Espressioni Cron: testo e run | UtilityFlow',
      description:
        'Analizza espressioni cron a 5 campi in pianificazioni in italiano semplice, ispeziona ogni campo e vedi in anteprima le prossime 8 esecuzioni, online.',
      primaryKeyword: 'analizzatore di espressioni cron',
      secondaryKeywords: ['alternativa a crontab guru', 'anteprima di pianificazione cron', 'costruttore cron', 'tester di espressione cron'],
      longTailKeywords: ['tradurre un’espressione cron a 5 campi in italiano semplice', 'calcolare i prossimi 8 timestamp di esecuzione cron', 'testare le espressioni cron di giorno della settimana e passo online', 'espressione cron tutti i giorni feriali alle 9 esempio'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decodifica espressioni crontab Unix a 5 campi (`minuto ora giorno-del-mese mese giorno-della-settimana`) in riepiloghi chiari e leggibili da un umano, verifica gli intervalli di campo e ispeziona i prossimi 8 timestamp di esecuzione pianificati.',
  },
  'color-converter': {
    slug: 'convertitore-colori',
    name: 'Convertitore di Colori (HEX / RGB / HSL e Contrasto WCAG)',
    shortDescription:
      'Converti colori tra HEX, RGB e HSL con un selettore di colori in tempo reale e una verifica di contrasto WCAG 2.1 AA/AAA.',
    keywords: [
      'convertitore di colori',
      'hex in rgb',
      'rgb in hsl',
      'verifica contrasto wcag',
      'hex in hsl',
      'rgb in hex',
      'selettore di colori online',
      'convertitore di colori hex',
      'hsl in rgb',
    ],
    seo: {
      title: 'Convertitore di Colori: HEX, RGB e HSL | UtilityFlow',
      description:
        'Converti colori tra HEX, RGB e HSL all’istante, poi testa il contrasto per la conformità WCAG 2.1 AA e AAA — gratis e senza registrazione, nel tuo browser.',
      primaryKeyword: 'convertitore di colori',
      secondaryKeywords: ['convertitore hex in rgb', 'selettore di colori hsl', 'verifica contrasto wcag', 'convertitore rgb in hex'],
      longTailKeywords: ['convertire un colore hex in valori css rgb e hsl', 'verificare il rapporto di contrasto di testo wcag 2.1 aa e aaa', 'strumento di colori hex rgb hsl interattivo per sviluppatori', 'convertire hex in hsl per le variabili css'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Traduci i colori senza sforzo tra le notazioni CSS HEX, RGB e HSL con un campione in tempo reale e un verificatore di rapporto di contrasto WCAG 2.1 integrato per un design di interfaccia accessibile.',
  },
};
