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
    instructions: [
      {
        title: 'Incolla JSON grezzo',
        description:
          'Inserisci qualsiasi oggetto o array JSON nel campo Input JSON grezzo, oppure fai clic su Carica esempio per ispezionare un payload di esempio.',
      },
      {
        title: 'Seleziona la modalità di formattazione',
        description:
          'Passa tra 2 spazi, 4 spazi, Tabulazione oppure Minifica, e attiva eventualmente Ordina chiavi dalla A alla Z.',
      },
      {
        title: 'Correggi gli errori di sintassi grazie alle indicazioni di riga e colonna',
        description:
          'Se il validatore segnala un errore, leggi la riga e la colonna esatte mostrate, correggi la virgola, le virgolette o la parentesi sbagliata nel tuo input e il banner di stato si aggiorna all’istante.',
      },
      {
        title: 'Esamina l’output formattato e le statistiche',
        description:
          'Conferma il banner di stato JSON valido che indica il numero totale di chiavi, la profondità di annidamento e il numero di byte, poi scorri l’output formattato per verificare che le strutture annidate sembrino corrette.',
      },
      {
        title: 'Copia o scarica il risultato',
        description:
          'Fai clic su Copia per mettere il JSON formattato negli appunti, oppure su Scarica per salvarlo come file .json per il tuo progetto.',
      },
      {
        title: 'Suggerimento: confronta le dimensioni e pulisci i diff',
        description:
          'Incolla di nuovo lo stesso payload dopo la minificazione per confrontare le dimensioni in byte, oppure attiva Ordina chiavi dalla A alla Z prima di un diff git in modo che appaiano solo le vere modifiche.',
      },
    ],
    examples: [
      {
        title: 'Formattazione di una risposta API minificata',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation:
          'Espande i payload API compatti su una sola riga in JSON indentato e leggibile.',
      },
      {
        title: 'Ordinamento delle chiavi prima di un diff git',
        input: '{"zebra": 1, "apple": 2, "mango": 3}',
        output: '{\n  "apple": 2,\n  "mango": 3,\n  "zebra": 1\n}',
        explanation:
          'Ordina le chiavi alfabeticamente in modo che i diff git mostrino solo le vere modifiche.',
      },
    ],
    benefits: [
      'Segnala le posizioni di errore di sintassi con il contesto di riga e colonna',
      'Ordina ricorsivamente le chiavi degli oggetti annidati alfabeticamente per diff puliti',
      'Calcola il numero totale di chiavi, la profondità massima di annidamento e la dimensione in byte dell’output',
      'Mantiene le risposte API private e i token strettamente nella memoria del browser',
    ],
    useCases: [
      'Fare debug di payload API REST e GraphQL durante lo sviluppo',
      'Normalizzare file package.json o di configurazione prima di un diff git',
      'Minificare fixture JSON e set di dati statici',
      'Convalidare corpi di webhook prima di scrivere parser',
    ],
    faqs: [
      {
        question: 'L’ordinamento delle chiavi modifica l’ordine degli elementi di array?',
        answer:
          'No. Ordinare le chiavi dalla A alla Z riordina solo le chiavi all’interno degli oggetti JSON preservando la sequenza esatta degli elementi di array.',
      },
      {
        question: 'Perché il JSON con una virgola finale mostra un errore di sintassi?',
        answer:
          'Il JSON stretto RFC 8259 non consente né virgole finali né chiavi tra virgolette singole. Il validatore segnala la riga e la colonna esatte in modo che tu possa correggerle prima del deploy.',
      },
      {
        question: 'Il mio payload JSON viene registrato da qualche parte?',
        answer:
          'Mai. L’analisi e la formattazione vengono eseguite interamente tramite JavaScript nella scheda del tuo browser.',
      },
      {
        question: 'Il Formattatore JSON è gratis?',
        answer:
          'Sì, il Formattatore JSON è interamente gratuito senza registrazione, senza limiti di utilizzo e senza filigrana sull’output.',
      },
      {
        question: 'Qual è la differenza tra formattare e minificare JSON?',
        answer:
          'La formattazione aggiunge indentazione e a capo in modo che il JSON sia facile da leggere, mentre la minificazione rimuove tutti gli spazi inutili in modo che il payload sia il più piccolo possibile per il trasporto.',
      },
      {
        question: 'Il Formattatore JSON può gestire file JSON grandi?',
        answer:
          'Sì. Poiché tutta l’elaborazione avviene localmente nel tuo browser, non c’è un limite di invio a un server, anche se i payload molto grandi dipendono dalla memoria del tuo browser.',
      },
      {
        question: 'Quali opzioni di indentazione offre il Formattatore JSON?',
        answer:
          'Puoi formattare con 2 spazi, 4 spazi o un carattere di tabulazione, in modo che l’output corrisponda allo stile della tua base di codice.',
      },
      {
        question: 'Il Formattatore JSON supporta gli array JSON di livello superiore?',
        answer:
          'Sì. Un array di livello superiore è JSON valido, quindi puoi incollare e formattare array come oggetti.',
      },
      {
        question: 'Come correggo un errore «Unexpected token» nel mio JSON?',
        answer:
          'Guarda la riga e la colonna segnalate dal validatore. Le cause più comuni sono una virgola mancante, una parentesi non chiusa o virgolette singole dove sono richieste virgolette doppie.',
      },
      {
        question: 'Posso formattare JSON con commenti o virgole finali?',
        answer:
          'No. Commenti e virgole finali non fanno parte del JSON stretto, quindi rimuovili prima e il formattatore accetterà l’input pulito.',
      },
      {
        question: 'Che cosa significa la statistica di profondità di annidamento nel Formattatore JSON?',
        answer:
          'La profondità di annidamento conta quanti livelli in profondità si trova il valore più annidato in oggetti e array, il che aiuta a valutare la complessità di un payload.',
      },
      {
        question: 'Il Formattatore JSON preserva l’ordine delle chiavi di oggetto?',
        answer:
          'Sì, a meno che tu non attivi Ordina chiavi dalla A alla Z. Per impostazione predefinita, il formattatore conserva il tuo ordine di chiavi originale esattamente come incollato.',
      },
      {
        question: 'Posso ordinare le chiavi anche in oggetti JSON annidati?',
        answer:
          'Sì. L’ordinamento si applica ricorsivamente, quindi le chiavi all’interno di ogni oggetto annidato vengono riordinate alfabeticamente mentre l’ordine degli array resta intatto.',
      },
      {
        question: 'Quale formato di file produce il download del Formattatore JSON?',
        answer:
          'Il download salva il tuo risultato formattato o minificato come file di testo .json standard che puoi aprire in qualsiasi editor.',
      },
      {
        question: 'Il Formattatore JSON funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, la formattazione e la convalida vengono eseguite interamente nel tuo browser senza alcuna richiesta di rete.',
      },
      {
        question: 'Perché il mio oggetto JavaScript valido viene rifiutato come JSON?',
        answer:
          'Il JSON è più rigido di JavaScript: le chiavi devono usare virgolette doppie, i valori non possono essere undefined o funzioni e le virgole finali non sono consentite.',
      },
      {
        question: 'Il Formattatore JSON può convalidare JSON proveniente da una risposta API?',
        answer:
          'Sì. Incolla il corpo grezzo della risposta nell’input e il validatore confermerà se si tratta di JSON valido e individuerà qualsiasi errore di sintassi.',
      },
      {
        question: 'Qual è la dimensione massima di JSON che posso incollare nel Formattatore JSON?',
        answer:
          'Non c’è un limite di dimensione fisso perché nulla viene inviato a un server. I limiti pratici derivano solo dalla memoria del tuo browser e dalla dimensione di casella di testo che può gestire senza sforzo.',
      },
      {
        question: 'Minificare JSON ne cambia il significato?',
        answer:
          'No. La minificazione rimuove solo gli spazi, quindi i dati, le chiavi e i valori restano esattamente gli stessi mentre il file diventa più piccolo.',
      },
      {
        question: 'Come copio JSON formattato senza spazi aggiuntivi?',
        answer:
          'Passa prima alla modalità Minifica, poi fai clic su Copia. Gli appunti conterranno il JSON compatto su una sola riga senza spazi né a capo aggiuntivi.',
      },
    ],
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
      title: 'Codificatore Base64: UTF-8 e URL sicuri | UtilityFlow',
      description:
        'Codifica testo UTF-8 in Base64 o decodifica Base64 in testo leggibile, con opzioni sicure per gli URL, localmente senza invio, gratis nel tuo browser.',
      primaryKeyword: 'codificatore decodificatore base64',
      secondaryKeywords: ['decodificare base64 online', 'codificare base64 utf-8', 'base64 sicuro per gli url', 'base64 in testo'],
      longTailKeywords: ['codificare emoji utf-8 in base64 online', 'decodificare base64 sicuro per gli url senza padding', 'convertitore base64 lato client', 'decodificare una stringa base64 con emoji online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Converti stringhe UTF-8 — inclusi caratteri accentati ed emoji — in Base64 standard o Base64 sicuro per gli URL secondo la RFC 4648, oppure decodifica stringhe Base64 in testo semplice con convalida istantanea.',
    instructions: [
      {
        title: 'Scegli Codifica o Decodifica',
        description:
          'Seleziona Codifica in Base64 oppure Decodifica Base64 in alto nell’area di lavoro.',
      },
      {
        title: 'Incolla il tuo testo o la tua stringa Base64',
        description:
          'Inserisci il testo UTF-8 che vuoi codificare, oppure la stringa Base64 che vuoi decodificare, nella casella di input.',
      },
      {
        title: 'Configura le opzioni Base64',
        description:
          'In modalità Codifica, attiva eventualmente l’output sicuro per gli URL (- e _) oppure ometti i caratteri di padding = finali.',
      },
      {
        title: 'Verifica l’output e la convalida',
        description:
          'Esamina all’istante il risultato convertito. Se una decodifica fallisce, verifica il padding mancante o i caratteri fuori dall’alfabeto Base64.',
      },
      {
        title: 'Copia o scambia',
        description:
          'Copia il risultato negli appunti oppure fai clic su Scambia per invertire la direzione usando il tuo output attuale.',
      },
      {
        title: 'Suggerimento: gestire i token sicuri per gli URL',
        description:
          'Quando incolli token da un URL, usa la modalità sicura per gli URL in modo che - e _ vengano gestiti correttamente. Ricorda che Base64 è una codifica, non una crittografia, quindi non trattarla mai come archiviazione sicura.',
      },
    ],
    examples: [
      {
        title: 'Codifica di una stringa UTF-8',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation:
          'Usa la serializzazione di byte UTF-8 di TextEncoder prima della conversione Base64.',
      },
      {
        title: 'Decodifica di una stringa Base64',
        input: 'SGVsbG8gTW9uZGU=',
        output: 'Hello Mondo',
        explanation:
          'Decodifica una stringa Base64 standard in testo UTF-8 leggibile.',
      },
    ],
    benefits: [
      'La codifica/decodifica sicura UTF-8 evita i crash Unicode di btoa/atob legacy',
      'Supporta l’alfabeto sicuro per gli URL della RFC 4648 (- e _) e la decodifica senza padding',
      'Lo Scambio in un clic sposta l’output nell’input e inverte la modalità',
      'Esecuzione locale sicura per chiavi API e intestazioni Basic Auth',
    ],
    useCases: [
      'Codificare localmente credenziali di autenticazione HTTP Basic',
      'Ispezionare payload JSON codificati in Base64 o data URI',
      'Preparare token Base64 sicuri per gli URL per parametri di query',
      'Decodificare frammenti di corpo email o webhook in Base64',
    ],
    faqs: [
      {
        question: 'Perché il btoa() standard fallisce sui caratteri Unicode?',
        answer:
          'Il btoa() nativo accetta solo punti di codice Latin-1 su un singolo byte. Questo strumento converte prima il testo in byte UTF-8 tramite TextEncoder in modo che tutte le scritture internazionali e le emoji si codifichino correttamente.',
      },
      {
        question: 'Il decodificatore può gestire Base64 sicuro per gli URL senza padding «=»?',
        answer:
          'Sì. Il decodificatore normalizza automaticamente «-» e «_» in «+» e «/» e ripristina il padding «=» mancante prima di decodificare.',
      },
      {
        question: 'Base64 è una crittografia?',
        answer:
          'No. Base64 è un formato di codifica per rappresentare dati binari o testuali in ASCII, non una crittografia crittografica.',
      },
      {
        question: 'Il Codificatore Base64 è gratis?',
        answer:
          'Sì, il Codificatore Base64 è interamente gratuito senza registrazione e senza limite sul numero di stringhe che converti.',
      },
      {
        question: 'Quali caratteri sono consentiti in una stringa Base64?',
        answer:
          'Base64 standard usa A–Z, a–z, 0–9, più + e /, con = usato per il padding. La variante sicura per gli URL sostituisce + e / con - e _.',
      },
      {
        question: 'Perché il mio output Base64 è più lungo del mio input?',
        answer:
          'Base64 rappresenta ogni gruppo di 3 byte di input con 4 caratteri ASCII, quindi l’output codificato è circa un terzo più lungo del testo originale.',
      },
      {
        question: 'Posso codificare emoji e testo non inglese in Base64?',
        answer:
          'Sì. Lo strumento codifica prima il testo in byte UTF-8, quindi emoji, lettere accentate e scritture non latine si codificano e decodificano correttamente.',
      },
      {
        question: 'Che cos’è il Base64 sicuro per gli URL e quando usarlo?',
        answer:
          'Il Base64 sicuro per gli URL sostituisce + e / con - e _ in modo che la stringa codificata possa trovarsi in un URL o in un nome di file senza essere codificata in percentuale. Usalo per i token passati nei parametri di query.',
      },
      {
        question: 'Come decodifico una stringa Base64 senza padding?',
        answer:
          'Incollala direttamente. Il decodificatore rileva il padding = mancante e lo ripristina automaticamente prima di decodificare.',
      },
      {
        question: 'Il Codificatore Base64 può gestire file binari?',
        answer:
          'No, questo strumento codifica solo testo. Per codificare un file, bisognerebbe prima leggerne i byte, cosa che questo strumento testuale non fa.',
      },
      {
        question: 'Qual è la differenza tra Base64 e Base64URL?',
        answer:
          'Base64URL è la variante sicura per gli URL di Base64: scambia + con - e / con _, e in genere rimuove il padding =, quindi il risultato è sicuro negli URL e nei nomi di file.',
      },
      {
        question: 'Perché il mio testo Base64 decodificato mostra caratteri strani?',
        answer:
          'Il testo originale è stato probabilmente codificato da una codifica di byte diversa da UTF-8, oppure la stringa Base64 è corrotta. Prova a ricodificare la sorgente in UTF-8 e confronta.',
      },
      {
        question: 'Posso codificare una password o un segreto con Base64?',
        answer:
          'Puoi, ma non dovresti contarci per la sicurezza. Base64 è banalmente reversibile, quindi chiunque veda la stringa codificata può decodificarla all’istante.',
      },
      {
        question: 'Come codifico il testo per un’intestazione Basic Auth?',
        answer:
          'Combina nome utente e password nella forma nome:password, codifica questa stringa in Base64 e usala come Authorization: Basic <valore codificato> nella tua richiesta.',
      },
      {
        question: 'Il Codificatore Base64 funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, la codifica e la decodifica vengono eseguite interamente nel tuo browser senza alcuna richiesta di rete.',
      },
      {
        question: 'Che cosa succede se incollo una stringa Base64 non valida nel decodificatore?',
        answer:
          'Il decodificatore segnala un errore invece di indovinare. Verifica i caratteri fuori dall’alfabeto Base64, il padding mancante o spazi e a capo indesiderati.',
      },
      {
        question: 'Posso decodificare un data URI Base64 con questo strumento?',
        answer:
          'Sì, se incolli solo la parte Base64 dopo la virgola. Rimuovi prima il prefisso data:...;base64, perché non fa parte dei dati codificati.',
      },
      {
        question: 'Perché alcune stringhe Base64 terminano con segni «=»?',
        answer:
          'I segni = sono padding aggiunto quando la lunghezza di input non è un multiplo di tre byte. Indicano al decodificatore esattamente quanti byte rappresenta l’ultimo gruppo.',
      },
      {
        question: 'Il mio testo viene inviato a un server quando lo codifico?',
        answer:
          'No. La codifica e la decodifica vengono eseguite localmente nel tuo browser, quindi le stringhe sensibili come le chiavi API non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Come riconverto Base64 nel testo originale?',
        answer:
          'Passa alla modalità Decodifica, incolla la stringa Base64 e lo strumento restituisce il testo UTF-8 originale, che puoi poi copiare.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Codifica o Decodifica',
        description:
          'Passa tra Codifica e Decodifica, poi seleziona encodeURIComponent (per un singolo valore di parametro) oppure encodeURI (per preservare i delimitatori ://?&).',
      },
      {
        title: 'Incolla un URL o una stringa di parametro',
        description:
          'Inserisci qualsiasi URL o frammento codificato in percentuale nel campo Stringa di input o URL.',
      },
      {
        title: 'Esamina il risultato codificato o decodificato',
        description:
          'Verifica la zona di output per confermare che i caratteri speciali come spazi, & e = siano stati codificati o decodificati esattamente come previsto.',
      },
      {
        title: 'Ispeziona i parametri analizzati',
        description:
          'Quando viene rilevato un URL completo valido, esamina la tabella di Ripartizione URL analizzato qui sotto per le coppie chiave-valore di query decodificate.',
      },
      {
        title: 'Copia il risultato',
        description:
          'Fai clic su Copia per usare l’URL codificato nel tuo codice, link o richiesta API senza ridigitarlo.',
      },
      {
        title: 'Risoluzione problemi: sequenze % malformate',
        description:
          'Se vedi un errore su una sequenza % malformata, cerca un % isolato non seguito da due cifre esadecimali, come %2, e correggilo prima di decodificare di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Codifica di un valore di query',
        input: 'formattatore json & validatore',
        output: 'formattatore%20json%20%26%20validatore',
        explanation:
          'Usare encodeURIComponent esegue l’escape di «&» in modo che non divida la tua stringa di query.',
      },
      {
        title: 'Decodifica di un URL codificato',
        input: 'https://esempio.com/ricerca?q=caff%C3%A8+nero',
        output: 'https://esempio.com/ricerca?q=caffè nero',
        explanation:
          'Decodifica le sequenze in percentuale e il + delle stringhe di query codificate da modulo.',
      },
    ],
    benefits: [
      'Chiarisce il comportamento di encodeURIComponent rispetto a encodeURI fianco a fianco',
      'Analizza automaticamente gli URL validi in righe di protocollo, host, percorso, hash e query',
      'Gestisce correttamente la codifica di spazio «+» durante la decodifica delle stringhe di query di modulo',
      'Segnala chiaramente le sequenze % malformate',
    ],
    useCases: [
      'Fare debug di URI di reindirizzamento OAuth e parametri di callback',
      'Eseguire l’escape di query di ricerca o stringhe JSON passate come parametri di query',
      'Revisionare link di campagna UTM con più parametri di tracciamento',
      'Decodificare URL di log di accesso al server per un esame umano',
    ],
    faqs: [
      {
        question: 'Quando usare encodeURIComponent anziché encodeURI?',
        answer:
          'Usa encodeURIComponent quando codifichi un singolo valore di parametro di query (in modo che caratteri come & e = vengano sottoposti a escape). Usa encodeURI quando codifichi un intero URL e vuoi mantenere intatti https://, /, ? e &.',
      },
      {
        question: 'Perché un URL decodificato ha trasformato «+» in spazio?',
        answer:
          'Nelle stringhe di query application/x-www-form-urlencoded, «+» rappresenta uno spazio. La decodifica di componente normalizza automaticamente «+» in spazi.',
      },
      {
        question: 'L’analizzatore di URL verifica se un dominio è raggiungibile?',
        answer:
          'No. L’analisi usa l’API URL del browser localmente senza inviare alcuna richiesta di rete all’host di destinazione.',
      },
      {
        question: 'Il Codificatore URL è gratis?',
        answer:
          'Sì, il Codificatore URL è interamente gratuito senza registrazione e senza limite sul numero di URL che codifichi o decodifichi.',
      },
      {
        question: 'Quali caratteri modifica la codifica URL?',
        answer:
          'La codifica URL converte i caratteri riservati e pericolosi, come spazi, &, =, ?, # e lettere non ASCII, in % seguito da due cifre esadecimali.',
      },
      {
        question: 'Qual è la differenza tra %20 e + per gli spazi in un URL?',
        answer:
          'Entrambi possono rappresentare uno spazio in una stringa di query, ma %20 è la codifica in percentuale standard mentre + significa spazio solo nelle stringhe di query codificate da modulo, non nei percorsi.',
      },
      {
        question: 'Il Codificatore URL può codificare un URL completo con https:// intatto?',
        answer:
          'Sì. Scegli la modalità encodeURI e lo schema, le barre e i delimitatori restano intatti mentre solo i caratteri pericolosi vengono codificati.',
      },
      {
        question: 'Come codifico una e commerciale in un valore di query?',
        answer:
          'Usa la modalità encodeURIComponent sul solo valore. Trasforma & in %26 in modo che la e commerciale venga trattata come dato invece di dividere la tua stringa di query.',
      },
      {
        question: 'Perché il mio URL decodificato contiene ancora segni %?',
        answer:
          'Un % seguito da due cifre esadecimali si decodifica una volta, quindi un valore doppiamente codificato come %2520 diventa %20 dopo una decodifica. Lancia di nuovo la decodifica se hai bisogno della forma interamente decodificata.',
      },
      {
        question: 'Posso decodificare un URL con più parametri di query?',
        answer:
          'Sì. Il decodificatore gestisce l’intera stringa di query e la tabella di ripartizione analizzata elenca ogni coppia chiave-valore separatamente per una facile ispezione.',
      },
      {
        question: 'Il Codificatore URL gestisce i caratteri Unicode?',
        answer:
          'Sì. I caratteri non ASCII vengono prima convertiti in byte UTF-8 poi codificati in percentuale, quindi lettere accentate e altre scritture si codificano correttamente.',
      },
      {
        question: 'Che cos’è la codifica in percentuale in un URL?',
        answer:
          'La codifica in percentuale sostituisce un carattere con un segno % seguito dal suo valore di byte esadecimale a due cifre, il che mantiene validi gli URL quando contengono spazi o simboli speciali.',
      },
      {
        question: 'Come codifico un URL per usarlo in un’email o un documento?',
        answer:
          'Incolla l’URL, scegli la modalità encodeURI e copia il risultato. Il link codificato resta cliccabile e non si romperà con gli a capo nel testo semplice.',
      },
      {
        question: 'Il Decodificatore URL convalida l’URL?',
        answer:
          'Verifica che l’input sia un URL ben formato e che ogni sequenza % sia valida, ma non verifica se il dominio esiste o se la pagina si carica.',
      },
      {
        question: 'Posso codificare gli spazi in %20 invece di +?',
        answer:
          'Sì. Il codificatore usa sempre %20 per gli spazi. La forma + appare solo durante la decodifica di un input codificato da modulo, dove + significa già uno spazio.',
      },
      {
        question: 'Che cosa succede se codifico un URL già codificato?',
        answer:
          'I segni % stessi vengono codificati in %25, producendo una doppia codifica come %2520. Decodifica una volta per tornare alla forma a codifica singola.',
      },
      {
        question: 'Il mio URL viene inviato a un server quando lo codifico?',
        answer:
          'No. La codifica, la decodifica e l’analisi vengono eseguite localmente nel tuo browser, quindi link privati e token non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Come codifico un frammento o un hash di URL?',
        answer:
          'Codifica solo il valore del frammento con encodeURIComponent, poi aggiungilo dopo il # tu stesso, in modo che il delimitatore di hash non venga codificato.',
      },
      {
        question: 'Perché alcuni URL codificati sembrano molto più lunghi?',
        answer:
          'Ogni carattere speciale o non ASCII diventa tre caratteri (% più due cifre esadecimali), quindi gli URL con molti spazi o caratteri Unicode crescono sensibilmente.',
      },
      {
        question: 'Il Codificatore URL può gestire URL molto lunghi?',
        answer:
          'Sì. L’elaborazione viene eseguita localmente senza limite di invio a un server, quindi gli URL lunghi si codificano e decodificano nel tuo browser finché il tuo browser può contenere il testo.',
      },
    ],
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
      secondaryKeywords: ['generatore guid online', 'generatore uuid v4', 'generatore uuid v7', 'generatore uuid in massa'],
      longTailKeywords: ['generare uuid v4 e v7 in massa online', 'generatore uuid v7 ordinato per tempo rfc 9562', 'generatore uuid senza trattini in maiuscolo', 'generare 100 uuid in una volta online gratis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crea blocchi singoli o multipli di identificativi UUID v4 crittograficamente casuali e UUID v7 ordinati per timestamp secondo la RFC 9562 direttamente tramite le API Web Crypto, con interruttori di formattazione.',
    instructions: [
      {
        title: 'Scegli UUID v4 o v7',
        description:
          'Scegli v4 per identificativi casuali standard oppure v7 per chiavi primarie di database ordinabili con prefisso di timestamp.',
      },
      {
        title: 'Imposta la quantità e la formattazione',
        description:
          'Inserisci da 1 a 100 identificativi e attiva Maiuscole, Includi trattini oppure Racchiudi tra {parentesi graffe}.',
      },
      {
        title: 'Genera un nuovo blocco',
        description:
          'Fai clic su Genera UUID per creare un nuovo blocco. Ogni clic produce un insieme interamente nuovo di identificativi casuali.',
      },
      {
        title: 'Esamina gli identificativi generati',
        description:
          'Scorri l’elenco per confermare che versione, maiuscole e formato dei trattini corrispondano a ciò che il tuo database o codice si aspetta.',
      },
      {
        title: 'Copia o scarica l’elenco',
        description:
          'Fai clic su Copia tutto per mettere ogni identificativo negli appunti, oppure scarica il blocco come file .txt per popolare record o fixture di test.',
      },
      {
        title: 'Suggerimento: scegli v7 per i database',
        description:
          'Se archivi identificativi come chiavi primarie, preferisci v7 in modo che le nuove righe si ordinino cronologicamente e mantengano efficiente il tuo indice. Usa v4 quando l’ordine non ha importanza.',
      },
    ],
    examples: [
      {
        title: 'UUID v4 standard in minuscolo',
        input: 'Versione: v4 · Trattini: Attivati · Maiuscole: Disattivate',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation:
          'Identificativo RFC 4122 di 128 bit adatto a chiavi primarie distribuite.',
      },
      {
        title: 'Blocco di 5 UUID v7 senza trattini',
        input: 'Versione: v7 · Quantità: 5 · Trattini: Disattivati · Maiuscole: Disattivate',
        output: '0191a2b3c4d57f8a89b0c1d2e3f4a5b6',
        explanation:
          'Identificativi ordinati per tempo in formato esadecimale compatto di 32 caratteri, pronti per chiavi primarie ordinabili.',
      },
    ],
    benefits: [
      'Usa crypto.randomUUID / crypto.getRandomValues del browser (CSPRNG)',
      'Supporta l’UUID v7 moderno della RFC 9562 con prefisso di timestamp in millisecondi su 48 bit',
      'Genera in blocco fino a 100 identificativi unici in una volta',
      'Formatta in maiuscolo, in esadecimale compatto senza trattini oppure in stringhe GUID tra parentesi graffe',
    ],
    useCases: [
      'Popolare fixture di database e record di test di migrazione',
      'Generare identificativi di correlazione, chiavi API e identificativi di test di webhook',
      'Confrontare l’UUID v7 adatto all’indice B-tree e l’UUID v4 casuale',
      'Creare costanti GUID tra parentesi graffe per Windows/C#',
    ],
    faqs: [
      {
        question: 'Qual è il vantaggio dell’UUID v7 rispetto all’UUID v4?',
        answer:
          'L’UUID v7 codifica un timestamp Unix in millisecondi nei suoi bit più significativi, rendendo gli identificativi ordinabili cronologicamente e riducendo la frammentazione dell’indice B-tree nei database SQL.',
      },
      {
        question: 'Questi UUID vengono generati con Math.random()?',
        answer:
          'No. Ogni UUID usa casualità crittograficamente forte proveniente dall’API Web Crypto.',
      },
      {
        question: 'Come ottengo un identificativo esadecimale di 32 caratteri senza trattini?',
        answer:
          'Deseleziona «Includi trattini» per rimuovere i trattini immediatamente su tutto il blocco generato.',
      },
      {
        question: 'Il Generatore di UUID è gratis?',
        answer:
          'Sì, il Generatore di UUID è interamente gratuito senza registrazione e puoi generare tutti i blocchi necessari.',
      },
      {
        question: 'Che cos’è un UUID e a cosa serve?',
        answer:
          'Un UUID è un identificativo unico di 128 bit, in genere scritto come 32 cifre esadecimali in cinque gruppi. Viene usato per chiavi primarie di database, identificativi di correlazione, token di sessione e nomi di file.',
      },
      {
        question: 'Due UUID generati possono essere identici?',
        answer:
          'In pratica, no. Con 122 bit casuali in un UUID v4, una collisione è così improbabile che puoi considerare gli identificativi generati come unici.',
      },
      {
        question: 'Qual è la differenza tra UUID v4 e UUID v7?',
        answer:
          'L’UUID v4 è interamente casuale, mentre l’UUID v7 inizia con un timestamp in millisecondi in modo che gli identificativi più recenti si ordinino dopo i più vecchi. Entrambi sono identificativi di 128 bit.',
      },
      {
        question: 'Quanti UUID posso generare in una volta?',
        answer:
          'Puoi generare da 1 a 100 UUID in un singolo blocco. Fai di nuovo clic su Genera per un altro blocco fresco della stessa dimensione.',
      },
      {
        question: 'Che cosa significa «ordinato per tempo» per l’UUID v7?',
        answer:
          'Ordinato per tempo significa che la prima parte dell’UUID è un timestamp Unix in millisecondi, quindi ordinare gli identificativi alfabeticamente li ordina anche per ora di creazione.',
      },
      {
        question: 'Posso generare UUID senza trattini?',
        answer:
          'Sì. Disattiva Includi trattini e ogni UUID del blocco viene mostrato come una stringa esadecimale compatta di 32 caratteri.',
      },
      {
        question: 'Che cosa sono i GUID tra parentesi graffe e quando ne ho bisogno?',
        answer:
          'I GUID tra parentesi graffe racchiudono l’UUID tra parentesi graffe, come {550e8400-...}. Alcuni strumenti Microsoft e codice C# si aspettano questo formato per le costanti GUID.',
      },
      {
        question: 'Gli UUID generati qui sono sicuri per l’uso in produzione?',
        answer:
          'Sì. Usano l’API Web Crypto del browser, che fornisce casualità crittograficamente forte adatta a identificativi di produzione.',
      },
      {
        question: 'Posso generare UUID in maiuscolo?',
        answer:
          'Sì. Attiva l’interruttore Maiuscole e l’intero blocco viene mostrato con le lettere esadecimali A–F in maiuscolo.',
      },
      {
        question: 'Ho bisogno di una connessione internet per generare UUID?',
        answer:
          'Solo per caricare la pagina. Una volta caricata, la generazione viene eseguita interamente nel tuo browser senza alcuna richiesta di rete.',
      },
      {
        question: 'Il mio elenco di UUID generati viene archiviato o inviato da qualche parte?',
        answer:
          'No. La generazione avviene localmente nel tuo browser, quindi i tuoi identificativi non vengono mai inviati a un server né archiviati da nessuna parte.',
      },
      {
        question: 'Posso usare un UUID come chiave API?',
        answer:
          'Puoi usarlo come token opaco, ma un UUID è un identificativo, non un segreto progettato per l’autenticazione. Per vere chiavi API, usa un vero sistema di segreti con rotazione.',
      },
      {
        question: 'Qual è la differenza tra un UUID e un GUID?',
        answer:
          'Hanno lo stesso formato di 128 bit. GUID è il nome usato da Microsoft, mentre UUID è il nome dello standard aperto usato ovunque altro.',
      },
      {
        question: 'Perché scegliere l’UUID v7 come chiave primaria di database?',
        answer:
          'Poiché gli identificativi v7 si ordinano per ora di creazione, le nuove righe atterrano vicine tra loro in un indice B-tree, il che mantiene rapidi gli inserimenti e riduce la frammentazione dell’indice rispetto agli identificativi v4 casuali.',
      },
      {
        question: 'Posso rigenerare due volte lo stesso UUID?',
        answer:
          'No. Ogni generazione usa nuova casualità crittografica, quindi non otterrai mai due volte lo stesso UUID. Salva qualsiasi identificativo che devi riutilizzare.',
      },
      {
        question: 'Come copio tutti gli UUID generati in una volta?',
        answer:
          'Fai clic su Copia tutto per mettere l’intero blocco negli appunti, un UUID per riga, pronto da incollare nel tuo codice, foglio di calcolo o script SQL.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci il tuo modello e i tuoi flag',
        description:
          'Digita un modello RegExp tra le barre e attiva i flag g, i, m oppure s.',
      },
      {
        title: 'Fornisci un testo di esempio',
        description:
          'Incolla stringhe di test in Stringa di test per vedere le sottostringhe corrispondenti evidenziate a destra.',
      },
      {
        title: 'Esamina le corrispondenze evidenziate',
        description:
          'Verifica le sottostringhe evidenziate e il numero di corrispondenze per confermare che il tuo modello trovi esattamente ciò che ti aspetti, e nient’altro.',
      },
      {
        title: 'Ispeziona i gruppi e le sostituzioni',
        description:
          'Esamina gli indici di corrispondenza esatti e i gruppi di acquisizione $1/$2, oppure testa un modello di sostituzione qui sotto.',
      },
      {
        title: 'Correggi gli errori di modello',
        description:
          'Se appare un errore di sintassi, leggi il messaggio, verifica le parentesi quadre o tonde non chiuse e regola il modello finché non appaiono corrispondenze.',
      },
      {
        title: 'Suggerimento: testa i casi limite prima di rilasciare',
        description:
          'Prova stringhe vuote, caratteri insoliti e input multi-riga prima di usare un modello in produzione, e attiva il flag i per verificare la distinzione tra maiuscole e minuscole.',
      },
    ],
    examples: [
      {
        title: 'Estrarre la parte locale e il dominio di un’email',
        input: 'Modello: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Testo: assistenza@utilityflow.online',
        output: 'Corrispondenza n.1 · $1="assistenza" · $2="utilityflow.online"',
        explanation:
          'I gruppi tra parentesi espongono individualmente le sottostringhe acquisite.',
      },
      {
        title: 'Sostituzione con inversione di gruppi',
        input: 'Modello: (\\w+) (\\w+) · Sostituzione: $2 $1 · Testo: Giovanni Rossi',
        output: 'Rossi Giovanni',
        explanation:
          'I gruppi di acquisizione numerati permettono di scambiare l’ordine delle parole acquisite nella sostituzione.',
      },
    ],
    benefits: [
      'Protegge automaticamente contro i cicli infiniti sulle corrispondenze di lunghezza zero',
      'Mostra l’indice di carattere esatto e i valori di gruppo acquisito per corrispondenza',
      'Include un’anteprima di modello di sostituzione in tempo reale usando $1, $2 e $&',
      'Segnala correttamente gli errori di sintassi RegExp senza crash',
    ],
    useCases: [
      'Convalidare modelli di email, slug o input di modulo prima del rilascio',
      'Estrarre token strutturati da righe di log o frammenti HTML',
      'Testare modelli di acquisizione di trova e sostituisci',
      'Verificare il comportamento dei flag multi-riga (^ / $) e insensibili alle maiuscole',
    ],
    faqs: [
      {
        question: 'Quale motore regex usa questo tester?',
        answer:
          'Usa il motore RegExp ECMAScript (JavaScript) nativo del tuo browser, quindi il comportamento corrisponde esattamente al JS lato client e al codice Node.js.',
      },
      {
        question: 'Perché la modalità globale («g») è importante?',
        answer:
          'Senza il flag «g», RegExp si ferma dopo la prima corrispondenza. Attivare «g» trova ed evidenzia ogni corrispondenza in tutta la stringa di test.',
      },
      {
        question: 'Come trovo corrispondenze attraverso gli a capo con «.»?',
        answer:
          'Attiva il flag «s» (dotAll) in modo che il metacarattere «.» corrisponda anche ai caratteri di a capo.',
      },
      {
        question: 'Il Tester Regex è gratis?',
        answer:
          'Sì, il Tester Regex è interamente gratuito senza registrazione e senza limite sul numero di modelli o stringhe di test che provi.',
      },
      {
        question: 'Quale dialetto regex usa il Tester Regex?',
        answer:
          'Usa il dialetto regex JavaScript (ECMAScript), lo stesso motore che funziona nei browser e in Node.js, quindi i modelli si comportano allo stesso modo nel tuo codice.',
      },
      {
        question: 'Come testo una regex di convalida email?',
        answer:
          'Incolla un modello come ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) e prova indirizzi validi e non validi nella stringa di test per vedere quali corrispondono.',
      },
      {
        question: 'Che cosa fanno i flag g, i, m e s nel Tester Regex?',
        answer:
          'Il flag g trova tutte le corrispondenze, i rende la corrispondenza insensibile alle maiuscole, m permette a ^ e $ di corrispondere ai confini di riga e s permette a . di corrispondere agli a capo.',
      },
      {
        question: 'Come funzionano i gruppi di acquisizione nel Tester Regex?',
        answer:
          'Il testo tra parentesi forma un gruppo di acquisizione numerato. Dopo una corrispondenza, ogni gruppo viene elencato come $1, $2, ecc. con la sottostringa esatta che ha acquisito.',
      },
      {
        question: 'Qual è la differenza tra .* e .*? in regex?',
        answer:
          'Il quantificatore .* è goloso e corrisponde a quanto più possibile, mentre .*? è pigro e corrisponde a quanto meno possibile. Usa la forma pigra quando vuoi la corrispondenza più breve.',
      },
      {
        question: 'Come trovo un punto o una parentesi letterale in regex?',
        answer:
          'Eseguine l’escape con una barra rovesciata, come \\. per un punto oppure \\( per una parentesi, in modo che il carattere venga trattato come testo letterale anziché come metacarattere.',
      },
      {
        question: 'Perché la mia regex corrisponde a troppo testo?',
        answer:
          'Probabilmente stai usando un quantificatore goloso come .* che inghiotte tutto fino all’ultima corrispondenza possibile. Passa a un quantificatore pigro come .*? oppure riduci la classe di caratteri.',
      },
      {
        question: 'Come uso $1 e $2 in una sostituzione?',
        answer:
          'Digita un modello di sostituzione come $2@$1 e il tester sostituisce ogni $n con il testo acquisito da quel gruppo numerato in ogni corrispondenza.',
      },
      {
        question: 'Il Tester Regex può trovare corrispondenze su più righe?',
        answer:
          'Sì. Attiva il flag m in modo che ^ e $ funzionino per riga, e il flag s se hai bisogno che . attraversi gli a capo.',
      },
      {
        question: 'Che cos’è un lookahead in regex?',
        answer:
          'Un lookahead come (?=...) verifica che un modello segua la posizione attuale senza consumarlo, in modo che tu possa richiedere una condizione, come una cifra davanti, senza includerla nella corrispondenza.',
      },
      {
        question: 'Perché il mio modello non mostra alcuna corrispondenza?',
        answer:
          'Verifica un errore di sintassi, un carattere speciale senza escape o una classe di caratteri che esclude il tuo input. Prova a semplificare il modello e ad aggiungere un elemento alla volta.',
      },
      {
        question: 'Come testo una regex su più righe contemporaneamente?',
        answer:
          'Incolla l’intero campione multi-riga nella stringa di test e attiva il flag g. Ogni riga corrispondente viene evidenziata ed elencata con il suo indice.',
      },
      {
        question: 'Il Tester Regex supporta i caratteri Unicode?',
        answer:
          'Sì. La regex JavaScript gestisce il testo Unicode e puoi usare sequenze di escape come \\u{1F600} oppure il flag u per una corrispondenza interamente compatibile Unicode.',
      },
      {
        question: 'La mia regex o il mio testo di test viene inviato da qualche parte?',
        answer:
          'No. I test vengono eseguiti interamente nel tuo browser, quindi i tuoi modelli e i tuoi dati di esempio non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Che cos’è il backtracking catastrofico e come evitarlo?',
        answer:
          'Si verifica quando quantificatori annidati come (a+)+ costringono il motore a provare un numero enorme di combinazioni. Evita i quantificatori che si sovrappongono e usa invece modelli atomici o classi di caratteri più semplici.',
      },
      {
        question: 'Posso salvare o condividere il mio modello regex?',
        answer:
          'Non c’è una funzione di salvataggio integrata, quindi copia il tuo modello e la tua stringa di test in un file di frammenti o in un commento di codice. Puoi anche incollare il modello direttamente nel tuo codice sorgente.',
      },
    ],
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
    instructions: [
      {
        title: 'Incolla la tua stringa JWT',
        description:
          'Incolla un token standard a tre segmenti (intestazione.payload.firma) nella casella di input, oppure fai clic su Carica JWT di esempio per provare un token dimostrativo.',
      },
      {
        title: 'Esamina il JSON di Intestazione e Payload',
        description:
          'Ispeziona i metadati di algoritmo (`alg`, `typ`) e i campi di claim decodificati in pannelli JSON formattati.',
      },
      {
        title: 'Verifica i claim di timestamp',
        description:
          'Verifica le conversioni di date UTC per `iat`, `nbf` ed `exp` oltre allo stato attivo/scaduto.',
      },
      {
        title: 'Ispeziona claim come sub, roles e scope',
        description:
          'Cerca claim di identità e permesso come sub, iss, aud, roles e scope per confermare che il token porti ciò che la tua API si aspetta.',
      },
      {
        title: 'Copia il JSON decodificato o un singolo claim',
        description:
          'Copia tutto il JSON formattato di intestazione o payload, oppure copia un singolo valore di claim per incollarlo nel tuo codice, nei tuoi test o nel tuo ticket di supporto.',
      },
      {
        title: 'Risolvi un token che non si decodifica',
        description:
          'Rimuovi spazi, a capo o virgolette in più attorno al token. Un token a cinque segmenti è un JWE cifrato, non un JWT, e non può essere decodificato senza la sua chiave di decifratura.',
      },
    ],
    examples: [
      {
        title: 'Ispezionare la scadenza di un token',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Intestazione: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation:
          'Decodifica i segmenti Base64Url e traduce i claim di epoca numerici in date UTC.',
      },
      {
        title: 'Verificare i ruoli di un token di accesso',
        input: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMiIsInJvbGVzIjpbImFkbWluIl0sImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Payload: { "sub": "usr_2", "roles": ["admin"], "exp": 1800000000 }',
        explanation:
          'Mostra i claim di ruolo e identità portati da un token di accesso OAuth2.',
      },
    ],
    benefits: [
      'Nessuna trasmissione di rete — i token non lasciano mai la scheda del tuo browser',
      'Traduce i claim numerici iat, nbf ed exp in date UTC leggibili',
      'Evidenzia se il timestamp di scadenza del token è già passato',
      'Indica chiaramente che la verifica crittografica della firma richiede la tua chiave di firma',
    ],
    useCases: [
      'Fare debug di token di accesso e identità OAuth2 / OIDC durante l’integrazione di API',
      'Verificare i claim di ruolo, ambito e tenant emessi dai provider di autenticazione',
      'Verificare perché un’API ha rifiutato un token bearer scaduto',
      'Convalidare la struttura JWT nei test di integrazione',
    ],
    faqs: [
      {
        question: 'Questo Decodificatore JWT verifica se la firma di un token è autentica?',
        answer:
          'No. Decodificare un JWT si limita ad analizzare i suoi segmenti di intestazione e payload Base64Url. Verificare una firma richiede il segreto del tuo server o la tua chiave pubblica JWKS e deve sempre avvenire sul tuo backend.',
      },
      {
        question: 'È sicuro incollare token di autenticazione qui?',
        answer:
          'Tutta la decodifica viene eseguita localmente in JavaScript lato client senza registrare né trasmettere i token. Evita comunque di incollare credenziali di produzione su computer condivisi non affidabili.',
      },
      {
        question: 'Perché il mio token fallisce se ha 5 segmenti invece di 3?',
        answer:
          'Un token a 5 segmenti è un JWE cifrato (JSON Web Encryption) anziché un JWT firmato JWS, quindi il suo payload non può essere decodificato senza la chiave di decifratura.',
      },
      {
        question: 'Che cos’è un JWT e che cosa mostra questo decodificatore?',
        answer:
          'Un token web JSON è una stringa compatta a tre segmenti Base64Url: intestazione, payload e firma. Questo decodificatore mostra il JSON di intestazione, i claim di payload e date leggibili per i claim di timestamp.',
      },
      {
        question: 'Il Decodificatore JWT è gratis?',
        answer:
          'Sì. Il Decodificatore JWT è interamente gratuito senza registrazione, senza limite di utilizzo e senza bisogno di un account. Funziona interamente nel tuo browser.',
      },
      {
        question: 'Posso decodificare un JWT senza il segreto di firma?',
        answer:
          'Sì. La decodifica si limita a leggere l’intestazione e il payload Base64Url, che non sono cifrati. Il segreto di firma è necessario solo per verificare che la firma sia autentica.',
      },
      {
        question: 'Che cosa significano i campi di intestazione alg e typ in un JWT?',
        answer:
          'Il campo alg nomina l’algoritmo di firma, come HS256 o RS256, e typ indica in genere JWT per identificare il tipo di token. Entrambi i campi si trovano nel segmento di intestazione.',
      },
      {
        question: 'Quali claim figurano in genere in un payload JWT?',
        answer:
          'I claim comuni di payload includono sub per il soggetto o l’identificativo utente, iss per l’emittente, aud per il pubblico, iat per l’ora di emissione, nbf per l’ora di validità ed exp per l’ora di scadenza, oltre a claim personalizzati come roles o scope.',
      },
      {
        question: 'Come so se il mio JWT è scaduto?',
        answer:
          'Confronta il claim exp con l’ora attuale. Questo decodificatore converte exp in una data UTC semplice e segnala se il token è ancora attivo o già scaduto.',
      },
      {
        question: 'Qual è la differenza tra iat, nbf ed exp in un JWT?',
        answer:
          'Il claim iat registra quando il token è stato emesso, nbf registra la prima ora in cui il token diventa valido ed exp registra quando smette di essere valido. Tutti e tre sono timestamp Unix in secondi.',
      },
      {
        question: 'Perché il mio payload JWT decodificato sembra diverso dal JSON originale?',
        answer:
          'La decodifica si limita a invertire la codifica Base64Url, quindi il payload dovrebbe corrispondere ai claim originali. Se sembra confuso, il token potrebbe essere troncato, avvolto su più righe o copiato con caratteri aggiuntivi.',
      },
      {
        question: 'Posso decodificare un JWT senza firma?',
        answer:
          'Sì. Un token non firmato usa alg none e ha un terzo segmento vuoto, e la sua intestazione e il suo payload si decodificano comunque normalmente. I token non firmati non devono mai essere considerati affidabili in produzione.',
      },
      {
        question: 'Che cosa significa un token con solo due segmenti?',
        answer:
          'Un token a due segmenti è malformato o incompleto, in genere perché una parte è stata tagliata durante la copia. Un JWT firmato valido ha sempre tre segmenti separati da punti.',
      },
      {
        question: 'Il Decodificatore JWT archivia o invia il mio token da qualche parte?',
        answer:
          'No. La decodifica avviene interamente nella scheda del tuo browser e nulla viene inviato, registrato o archiviato su un server. Chiudere la scheda rimuove il token dalla memoria.',
      },
      {
        question: 'Perché il mio JWT non si decodifica affatto?',
        answer:
          'Verifica spazi, a capo o virgolette in più attorno al token e conferma che abbia esattamente tre segmenti separati da punti. I token copiati da un output di log includono spesso una punteggiatura finale che rompe la decodifica.',
      },
      {
        question: 'Posso usare questo Decodificatore JWT per i token di accesso OAuth2?',
        answer:
          'Sì, purché il token di accesso sia un JWT. Molti provider OAuth2 e OpenID Connect emettono token di accesso e identità JWT, e questo strumento decodifica i loro claim allo stesso modo.',
      },
      {
        question: 'Che cos’è un JWE e perché non posso decodificarlo qui?',
        answer:
          'Un JWE è un token cifrato JSON Web Encryption a cinque segmenti. Il suo payload è cifrato, quindi può essere letto solo con la chiave di decifratura detenuta dal destinatario previsto.',
      },
      {
        question: 'Come verifico claim JWT come ruoli e ambiti?',
        answer:
          'Incolla il token e leggi il pannello di payload decodificato. Ruoli, ambiti, permessi e claim di tenant vi appaiono come campi JSON ordinari che puoi ispezionare o copiare.',
      },
      {
        question: 'Decodificare un JWT dimostra che il token è valido?',
        answer:
          'No. La decodifica mostra solo ciò che il token contiene. Chiunque può creare un token con qualsiasi claim, quindi la validità deve essere confermata verificando la firma e il claim exp sul tuo server.',
      },
      {
        question: 'Posso decodificare un JWT su un computer condiviso o pubblico?',
        answer:
          'Puoi, perché la decodifica è locale e nulla viene inviato, ma è meglio evitare di incollare token di produzione attivi su un computer che non controlli.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Input di testo o Checksum di file locale',
        description:
          'Seleziona Input di testo per fare l’hash di stringhe oppure Checksum di file locale per verificare binari scaricati senza inviarli.',
      },
      {
        title: 'Inserisci testo o scegli un file locale',
        description:
          'Digita o incolla il tuo testo nella casella di input, oppure scegli un file sul tuo dispositivo. Il file viene letto solo nel tuo browser e non viene mai inviato.',
      },
      {
        title: 'Seleziona la codifica di output',
        description:
          'Passa tra la formattazione di digest Hex (minuscolo o maiuscolo) e Base64.',
      },
      {
        title: 'Esamina i quattro digest contemporaneamente',
        description:
          'SHA-1, SHA-256, SHA-384 e SHA-512 vengono calcolati contemporaneamente, quindi confronta gli algoritmi fianco a fianco senza rilanciare lo strumento.',
      },
      {
        title: 'Copia qualsiasi digest',
        description:
          'Fai clic su Copia accanto a SHA-1, SHA-256, SHA-384 o SHA-512 per copiare l’hash calcolato.',
      },
      {
        title: 'Risolvi un checksum che non corrisponde',
        description:
          'Se il checksum di un file differisce dal valore pubblicato, scarica di nuovo il file e verifica gli a capo o gli spazi finali nell’input di testo, perché anche un solo carattere in più cambia completamente l’hash.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 di «UtilityFlow»',
        input: 'UtilityFlow',
        output: 'Calcolato in modo deterministico in 64 caratteri esadecimali (256 bit)',
        explanation:
          'Anche la modifica di un solo carattere produce un digest completamente diverso.',
      },
      {
        title: 'Verificare il checksum di un file scaricato',
        input: 'Modalità: Checksum di file locale · File: programma-installazione-v2.4.zip',
        output: 'SHA-256: 64 caratteri esadecimali · Corrisponde al valore pubblicato: Sì',
        explanation:
          'Confrontare il digest calcolato con la somma pubblicata dall’editore conferma che il file è intatto.',
      },
    ],
    benefits: [
      'Usa l’API Web Crypto SubtleCrypto nativa accelerata dall’hardware',
      'Verifica i checksum SHA-256 di file locali senza inviare i file',
      'Produce i formati Hex (maiuscolo/minuscolo) e Base64',
      'Calcola i quattro algoritmi SHA contemporaneamente',
    ],
    useCases: [
      'Verificare i checksum SHA-256 di installer software o archivi scaricati',
      'Generare hash Base64 di integrità di sottorisorsa (SRI) per script/stili',
      'Testare le aspettative di HMAC di webhook o di digest di payload',
      'Creare impronte di contenuto deterministiche',
    ],
    faqs: [
      {
        question: 'Posso invertire un hash SHA-256 per ritrovare il testo originale?',
        answer:
          'No. Le funzioni di hash crittografiche sono digest matematici a senso unico progettati in modo che l’input originale non possa essere dedotto dall’hash.',
      },
      {
        question: 'Perché SHA-256 e SHA-512 sono preferiti a SHA-1?',
        answer:
          'SHA-1 presenta debolezze di collisione note ed è deprecato per le firme di sicurezza; SHA-256 e SHA-512 appartengono alla famiglia SHA-2, più forte.',
      },
      {
        question: 'I file inviati vengono trasmessi a un server?',
        answer:
          'No. I file selezionati vengono letti in un ArrayBuffer all’interno della scheda del tuo browser e sottoposti a hash localmente.',
      },
      {
        question: 'A cosa serve un generatore di hash?',
        answer:
          'Un generatore di hash trasforma testo o un file in un’impronta di lunghezza fissa chiamata digest. Gli sviluppatori usano i digest per verificare i download, controllare l’integrità dei dati e costruire valori di integrità di sottorisorsa.',
      },
      {
        question: 'Il Generatore di Hash è gratis?',
        answer:
          'Sì. Il Generatore di Hash è interamente gratuito senza registrazione e senza limite di utilizzo. Tutto l’hashing viene eseguito localmente nel tuo browser.',
      },
      {
        question: 'Qual è la differenza tra SHA-1, SHA-256, SHA-384 e SHA-512?',
        answer:
          'Sono membri della famiglia SHA con diverse lunghezze di digest: SHA-1 produce 160 bit, SHA-256 produce 256 bit, SHA-384 produce 384 bit e SHA-512 produce 512 bit. I digest più lunghi sono in genere più forti.',
      },
      {
        question: 'Come verifico il checksum di un file scaricato con questo strumento?',
        answer:
          'Passa alla modalità Checksum di file locale, seleziona il file scaricato e confronta il valore SHA-256 calcolato con il checksum pubblicato dall’editore del software. Valori corrispondenti significano che il file è intatto.',
      },
      {
        question: 'Che cosa devo fare se il checksum del mio file non corrisponde?',
        answer:
          'Non installare né eseguire il file. Scaricalo di nuovo dalla fonte ufficiale e sottoponilo di nuovo a hash, perché una discordanza può significare un download corrotto o falsificato.',
      },
      {
        question: 'Qual è la differenza tra l’output di hash in esadecimale e in Base64?',
        answer:
          'L’output esadecimale mostra il digest come caratteri esadecimali, mentre l’output Base64 mostra lo stesso digest in una stringa Base64 più corta. Entrambi rappresentano esattamente gli stessi byte di hash.',
      },
      {
        question: 'Cambiare un solo carattere cambia davvero tutto l’hash?',
        answer:
          'Sì. Le funzioni di hash hanno un effetto valanga, quindi cambiare una sola lettera, uno spazio o un a capo produce un digest completamente diverso senza motivo visibile.',
      },
      {
        question: 'Due file diversi possono produrre lo stesso hash SHA-256?',
        answer:
          'In teoria, una collisione è possibile, ma con SHA-256 è così improbabile in pratica che hash corrispondenti sono considerati la prova che i file sono identici.',
      },
      {
        question: 'Posso sottoporre a hash un file senza inviarlo?',
        answer:
          'Sì. Questo strumento legge il file nella memoria del tuo browser e lo sottopone a hash con l’API Web Crypto. Il file non lascia mai il tuo dispositivo.',
      },
      {
        question: 'Che cos’è un hash di integrità di sottorisorsa e come ne creo uno?',
        answer:
          'Un hash di integrità di sottorisorsa (SRI) è un digest SHA Base64 aggiunto a un tag di script o link in modo che i browser rifiutino i file falsificati. Seleziona l’output Base64 qui e copia il digest SHA-256 o SHA-384 nel tuo attributo integrity.',
      },
      {
        question: 'Perché lo stesso testo produce sempre lo stesso hash?',
        answer:
          'Le funzioni di hash sono deterministiche: un input identico produce sempre il digest identico. È ciò che rende gli hash utili per verificare i file e rilevare le modifiche.',
      },
      {
        question: 'SHA-1 è ancora sicuro da usare?',
        answer:
          'SHA-1 va bene per semplici checksum di dati non sensibili, ma non deve essere usato per firme di sicurezza o certificati perché esistono attacchi di collisione pratici contro di esso.',
      },
      {
        question: 'Quanto è lungo un hash SHA-256 in caratteri esadecimali?',
        answer:
          'Un digest SHA-256 fa 256 bit, che appaiono come 64 caratteri esadecimali. SHA-1 mostra 40 caratteri esadecimali, SHA-384 ne mostra 96 e SHA-512 ne mostra 128.',
      },
      {
        question: 'Il Generatore di Hash funziona offline?',
        answer:
          'Sì, una volta caricata la pagina. L’hashing usa l’API Web Crypto integrata nel tuo browser, quindi nessuna connessione di rete è necessaria mentre sottoponi a hash testo o file.',
      },
      {
        question: 'Posso sottoporre a hash testo con caratteri speciali o emoji?',
        answer:
          'Sì. Il testo viene codificato in UTF-8 prima dell’hashing, quindi lettere accentate, simboli ed emoji vengono tutti gestiti in modo coerente.',
      },
      {
        question: 'Qual è la differenza tra un hash e una crittografia?',
        answer:
          'La crittografia è reversibile con una chiave, mentre l’hashing è un digest a senso unico che non può essere invertito. Gli hash verificano l’integrità; la crittografia protegge la riservatezza.',
      },
      {
        question: 'Posso usare il Generatore di Hash per verificare una password?',
        answer:
          'Puoi sottoporre a hash una password per confrontarla con un digest archiviato, ma le password devono essere sottoposte a hash con un algoritmo di password lento come bcrypt o Argon2, e non semplice SHA-256, nelle vere applicazioni.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Codifica o Decodifica',
        description:
          'Scegli Codifica entità per eseguire l’escape del markup HTML oppure Decodifica entità per rimuovere l’escape delle entità esistenti.',
      },
      {
        title: 'Incolla il tuo HTML o testo',
        description:
          'Incolla il frammento, il valore di attributo o la stringa con escape nella casella di input. I grandi blocchi di codice si incollano così come sono.',
      },
      {
        title: 'Attiva la codifica non ASCII',
        description:
          'In modalità Codifica, decidi se anche i caratteri sopra ASCII 127 devono convertirsi in entità numeriche &#...;.',
      },
      {
        title: 'Esamina l’output convertito',
        description:
          'Verifica che tag, virgolette e simboli si siano convertiti come previsto e conferma che nulla nel tuo frammento sia stato modificato o rimosso.',
      },
      {
        title: 'Copia o scambia',
        description:
          'Copia il testo convertito oppure fai clic su Scambia per invertire il tuo flusso di lavoro.',
      },
      {
        title: 'Risolvi le entità doppiamente codificate',
        description:
          'Se vedi &amp;lt; nel tuo output, il testo è stato codificato due volte. Decodifica una volta per tornare alle entità normali, poi codifica una sola volta.',
      },
    ],
    examples: [
      {
        title: 'Eseguire l’escape di un frammento HTML per la documentazione',
        input: '<div class="avviso">5 < 10 & "caffè"</div>',
        output: '&lt;div class=&quot;avviso&quot;&gt;5 &lt; 10 &amp; &quot;caff&#232;&quot;&lt;/div&gt;',
        explanation:
          'Impedisce al browser di interpretare i tag di esempio come elementi DOM attivi.',
      },
      {
        title: 'Decodificare entità nominate da un feed RSS',
        input: 'Il caff&egrave; &amp; la panna costano 5&nbsp;€',
        output: 'Il caffè & la panna costano 5 €',
        explanation:
          'Recupera testo semplice leggibile da contenuto HTML con escape.',
      },
    ],
    benefits: [
      'Esegue l’escape dei cinque caratteri riservati XML/HTML (&, <, >, ", \')',
      'Codifica di entità numeriche opzionale per simboli internazionali e punteggiatura',
      'Decodifica entità nominate (&mdash;, &copy;) e numeriche (&#8212;, &#x2014;)',
      'Usa l’estrazione di testo sicura tramite DOMParser durante la decodifica',
    ],
    useCases: [
      'Preparare esempi di codice HTML per articoli di blog e documentazione',
      'Pulire testo codificato in HTML recuperato da feed RSS o API XML',
      'Eseguire l’escape di valori di attributi in modelli HTML statici',
      'Verificare come i simboli speciali si rendono in sicurezza in pagine UTF-8 o ASCII',
    ],
    faqs: [
      {
        question: 'Quali cinque caratteri devono sempre essere sottoposti a escape nel testo e negli attributi HTML?',
        answer:
          'La e commerciale (&), minore di (<), maggiore di (>), virgolette doppie (") e virgolette singole (\') devono essere sottoposte a escape per evitare ambiguità di markup o problemi XSS.',
      },
      {
        question: 'Quando disattivare la codifica non ASCII?',
        answer:
          'Se la tua pagina web usa <meta charset="UTF-8">, i caratteri internazionali standard e i simboli si rendono direttamente senza bisogno di entità numeriche &#...;.',
      },
      {
        question: 'Il decodificatore gestisce le entità esadecimali come &#x27;?',
        answer:
          'Sì. Le entità decimali (&#39;) ed esadecimali (&#x27;) oltre alle entità nominate standard (&amp;, &nbsp;, &copy;) si decodificano correttamente.',
      },
      {
        question: 'Che cos’è un’entità HTML?',
        answer:
          'Un’entità HTML è un codice di testo che rappresenta un carattere speciale, come &lt; per < oppure &amp; per &. Le entità permettono di mostrare caratteri riservati senza che il browser li tratti come markup.',
      },
      {
        question: 'Il Codificatore di Entità HTML è gratis?',
        answer:
          'Sì. Il Codificatore di Entità HTML è interamente gratuito senza registrazione e senza limite di utilizzo. Tutta la codifica e la decodifica vengono eseguite localmente nel tuo browser.',
      },
      {
        question: 'Perché eseguire l’escape dei caratteri HTML?',
        answer:
          'I browser interpretano <, > e & come markup. Eseguire l’escape li mostra come testo visibile, il che è essenziale per esempi di codice, contenuto utente e modelli sicuri.',
      },
      {
        question: 'Qual è la differenza tra entità HTML nominate e numeriche?',
        answer:
          'Le entità nominate usano un nome leggibile come &copy; per il simbolo di copyright, mentre le entità numeriche usano un punto di codice come &#169; oppure &#xA9;. Entrambe rendono lo stesso carattere.',
      },
      {
        question: 'Quando codificare caratteri non ASCII in entità?',
        answer:
          'Codificali quando una pagina o un sistema di email non supporta UTF-8 in modo affidabile, oppure quando hai bisogno di un output ASCII puro. Sulle pagine UTF-8 moderne, lettere accentate e simboli possono restare caratteri grezzi.',
      },
      {
        question: 'Come appare l’HTML doppiamente codificato?',
        answer:
          'La doppia codifica trasforma &lt; in &amp;lt;, quindi il browser mostra il testo letterale &lt; invece di <. Decodifica una volta per correggere, poi codifica una sola volta.',
      },
      {
        question: 'Posso decodificare entità HTML da pagine web recuperate?',
        answer:
          'Sì. Incolla il testo con escape da un feed RSS, un’API XML o una pagina recuperata e decodificalo per ritrovare testo semplice leggibile con caratteri reali.',
      },
      {
        question: 'Codificare entità HTML impedisce gli attacchi XSS?',
        answer:
          'Eseguire l’escape dell’input utente è un importante livello di difesa XSS, ma non è una soluzione completa da sola. Combinala sempre con una codifica di output appropriata, una convalida e una politica di sicurezza del contenuto.',
      },
      {
        question: 'Qual è l’entità HTML per uno spazio unificatore?',
        answer:
          'Lo spazio unificatore è &nbsp; oppure &#160;. Mantiene due parole sulla stessa riga ed è comunemente usato per preservare la spaziatura nei layout HTML.',
      },
      {
        question: 'Come eseguo l’escape delle virgolette all’interno di un attributo HTML?',
        answer:
          'Usa &quot; per le virgolette doppie e &#39; oppure &apos; per le virgolette singole. Eseguire l’escape delle virgolette impedisce a un valore di attributo di terminare troppo presto e rompere il tuo markup.',
      },
      {
        question: 'Questo strumento può codificare emoji e altri simboli Unicode?',
        answer:
          'Sì. Con la codifica non ASCII attiva, emoji e simboli internazionali diventano entità numeriche come &#128512;. Con questa opzione disattiva, restano caratteri Unicode grezzi.',
      },
      {
        question: 'Qual è la differenza tra eseguire l’escape di HTML e codificare un URL?',
        answer:
          'L’escape HTML converte i caratteri di markup riservati in entità per la visualizzazione nelle pagine, mentre la codifica URL converte i caratteri in codici in percentuale come %20 per l’uso in link e stringhe di query.',
      },
      {
        question: 'Il codificatore modifica lettere e cifre normali?',
        answer:
          'No. Lettere grezze, cifre e la maggior parte dei segni di punteggiatura passano così come sono. Solo i caratteri riservati e, eventualmente, i simboli non ASCII vengono convertiti.',
      },
      {
        question: 'Perché il mio testo decodificato mostra caratteri strani?',
        answer:
          'La sorgente è stata probabilmente codificata con un set di caratteri diverso, oppure un’entità era malformata. Prova a decodificare di nuovo dal testo con escape originale e verifica che la pagina dichiari UTF-8.',
      },
      {
        question: 'Posso codificare un intero documento HTML con questo strumento?',
        answer:
          'Sì. Puoi incollare un documento completo e codificarlo, ma il risultato è destinato a essere mostrato come esempio di codice, non a essere salvato come pagina web funzionante.',
      },
      {
        question: 'Il mio HTML incollato viene inviato a un server?',
        answer:
          'No. La codifica e la decodifica avvengono interamente nel tuo browser, quindi il tuo codice e il tuo testo non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Qual è l’entità HTML per il carattere e commerciale?',
        answer:
          'La e commerciale stessa è &amp; oppure &#38;. Codifica sempre un & letterale per primo, perché una e commerciale non codificata può far interpretare male dal browser le entità che la seguono.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli il senso di conversione',
        description:
          'Seleziona JSON → CSV oppure CSV → JSON e scegli Virgola (,), Punto e virgola (;) oppure Tabulazione (TSV) come delimitatore.',
      },
      {
        title: 'Incolla i tuoi dati JSON o CSV',
        description:
          'Inserisci i dati nell’editor di sinistra oppure fai clic su Carica esempio per testare i campi tra virgolette.',
      },
      {
        title: 'Verifica le intestazioni di colonna',
        description:
          'Esamina le intestazioni generate prima di convertire. Gli oggetti annidati diventano colonne separate da punti come indirizzo.città e le chiavi mancanti lasciano celle vuote.',
      },
      {
        title: 'Converti i tuoi dati',
        description:
          'Lancia la conversione e ispeziona l’anteprima. Virgole tra virgolette, virgolette integrate e a capo all’interno delle celle vengono preservati esattamente come richiede la RFC 4180.',
      },
      {
        title: 'Copia o scarica il risultato',
        description:
          'Copia l’output convertito oppure scaricalo direttamente come file .csv o .json.',
      },
      {
        title: 'Risolvi un errore di conversione',
        description:
          'Se la conversione fallisce, convalida prima la tua sintassi JSON: verifica virgole finali, virgolette mancanti e parentesi non abbinate. Per il CSV, conferma di aver scelto il delimitatore realmente usato dal tuo file.',
      },
    ],
    examples: [
      {
        title: 'Gestire le virgole all’interno dei valori CSV',
        input: '[{"id": 102, "name": "Marco, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marco, Jr.",Designer',
        explanation:
          'Mette automaticamente tra virgolette i campi contenenti delimitatori o virgolette doppie secondo la RFC 4180.',
      },
      {
        title: 'Convertire CSV in array JSON',
        input: 'id,nome,città\n1,Maria,Roma\n2,Giovanni,Milano',
        output: '[{"id": 1, "nome": "Maria", "città": "Roma"}, {"id": 2, "nome": "Giovanni", "città": "Milano"}]',
        explanation:
          'La prima riga diventa le chiavi di oggetto e ogni riga successiva diventa un oggetto JSON.',
      },
    ],
    benefits: [
      'Conversione bidirezionale JSON ↔ CSV in un unico spazio di lavoro',
      'Appiattisce gli oggetti JSON annidati usando intestazioni di colonna in notazione puntata',
      'Un parser RFC 4180 appropriato preserva le virgole tra virgolette e gli a capo integrati',
      'Supporta i delimitatori virgola, punto e virgola (Excel europeo) e tabulazione',
    ],
    useCases: [
      'Esportare elenchi JSON di API REST in Excel o Google Sheets',
      'Convertire export di dati di foglio di calcolo in file di dati JSON per applicazioni web',
      'Preparare set di dati TSV per la data science o gli import SQL',
      'Ispezionare correttamente export CSV delimitati da punti e virgola',
    ],
    faqs: [
      {
        question: 'Come gestisce JSON in CSV gli oggetti con proprietà annidate?',
        answer:
          'Gli oggetti annidati vengono appiattiti in nomi di colonna separati da punti (ad esempio, indirizzo.città) e gli array vengono serializzati in stringhe JSON compatte.',
      },
      {
        question: 'Che cosa succede se diversi oggetti JSON hanno chiavi leggermente diverse?',
        answer:
          'Il convertitore analizza tutti gli oggetti dell’array per costruire un’unione di intestazioni di colonna e lascia celle vuote dove una chiave è assente.',
      },
      {
        question: 'Il parser CSV si rompe se una cella contiene una virgola tra virgolette?',
        answer:
          'No. Il parser a macchina a stati segue precisamente le celle tra virgolette doppie e le virgolette "" con escape.',
      },
      {
        question: 'A cosa serve il Convertitore JSON in CSV?',
        answer:
          'Trasforma i dati JSON di API e applicazioni in fogli di calcolo CSV che puoi aprire in Excel o Google Sheets, e riconverte i file CSV in JSON per codice e database.',
      },
      {
        question: 'Il Convertitore JSON in CSV è gratis?',
        answer:
          'Sì. Il Convertitore JSON in CSV è interamente gratuito senza registrazione e senza limite di utilizzo. Tutta la conversione viene eseguita localmente nel tuo browser.',
      },
      {
        question: 'Posso convertire un singolo oggetto JSON invece di un array?',
        answer:
          'Sì. Un singolo oggetto viene trattato come una riga con le sue chiavi come intestazioni di colonna, quindi ottieni comunque un file CSV valido con una sola riga di dati.',
      },
      {
        question: 'Come vengono convertiti in CSV gli array JSON all’interno degli oggetti?',
        answer:
          'I valori di array vengono serializzati in stringhe JSON compatte all’interno di una singola cella, quindi i dati vengono preservati e possono essere rianalizzati in array più tardi.',
      },
      {
        question: 'Quale delimitatore scegliere per il mio file CSV?',
        answer:
          'Usa una virgola per il CSV standard, un punto e virgola per gli export Excel europei dove le virgole sono separatori decimali e una tabulazione per i file TSV usati negli strumenti di dati.',
      },
      {
        question: 'Il convertitore preserva correttamente numeri e booleani?',
        answer:
          'Sì. Numeri e booleani vengono scritti come valori grezzi in CSV. Durante la riconversione in JSON, i valori che assomigliano a numeri o booleani vengono analizzati nei loro tipi JSON corrispondenti.',
      },
      {
        question: 'Che fine fanno i valori vuoti o nulli in JSON verso CSV?',
        answer:
          'Stringhe vuote, valori nulli e chiavi mancanti diventano tutti celle vuote nel CSV, il che mantiene le righe allineate con le intestazioni di colonna.',
      },
      {
        question: 'Posso riconvertire CSV in JSON con questo strumento?',
        answer:
          'Sì. Passa alla modalità CSV verso JSON, incolla i tuoi dati CSV o TSV e scegli il delimitatore. La prima riga diventa le chiavi di oggetto e ogni riga successiva diventa un oggetto JSON.',
      },
      {
        question: 'Perché il mio CSV si apre con tutti i dati in una sola colonna Excel?',
        answer:
          'Excel potrebbe aspettarsi un delimitatore diverso da quello usato dal tuo file. Riesporta con un delimitatore virgola oppure usa l’opzione punto e virgola per le impostazioni regionali europee.',
      },
      {
        question: 'Il Convertitore JSON in CSV gestisce file grandi?',
        answer:
          'Sì, entro i limiti della memoria del browser. La conversione viene eseguita localmente, quindi set di dati molto grandi possono richiedere alcuni secondi, ma i tuoi dati non vengono mai inviati a un server.',
      },
      {
        question: 'I miei dati JSON o CSV vengono inviati a un server?',
        answer:
          'No. La conversione avviene interamente nella scheda del tuo browser, quindi i tuoi dati restano sul tuo dispositivo e vengono eliminati quando chiudi la scheda.',
      },
      {
        question: 'Che cos’è la RFC 4180 e perché è importante per il CSV?',
        answer:
          'La RFC 4180 è il formato standard dei file CSV. Definisce come i campi con virgole, virgolette o a capo devono essere racchiusi tra virgolette doppie, il che permette alle applicazioni di foglio di calcolo di leggere correttamente il tuo file.',
      },
      {
        question: 'Posso convertire file TSV in JSON?',
        answer:
          'Sì. Scegli il delimitatore Tabulazione (TSV) in modalità CSV verso JSON e incolla i tuoi dati separati da tabulazioni. Le tabulazioni sono comuni negli export di dati e funzionano come le virgole.',
      },
      {
        question: 'Perché la mia conversione JSON in CSV è fallita?',
        answer:
          'Le cause più comuni sono JSON non valido, come virgole finali o virgolette mancanti, e l’incollaggio di un oggetto JSON che non è un array di oggetti. Correggi la sintassi e riprova.',
      },
      {
        question: 'Come esporto dati JSON di API in Excel?',
        answer:
          'Copia l’array JSON dalla tua risposta API, incollalo qui, convertilo in CSV e scarica il file. Apri il CSV scaricato direttamente in Excel oppure importalo in Google Sheets.',
      },
      {
        question: 'Il convertitore conserva l’ordine originale delle mie chiavi JSON?',
        answer:
          'L’ordine delle colonne segue l’ordine in cui le chiavi appaiono per la prima volta nei tuoi oggetti. Il primo oggetto definisce l’ordine iniziale e le nuove chiavi degli oggetti successivi vengono aggiunte.',
      },
      {
        question: 'Posso scaricare il file convertito invece di copiarlo?',
        answer:
          'Sì. Usa il pulsante di download per salvare il risultato come file .csv o .json sul tuo dispositivo, pronto da aprire in un foglio di calcolo o da importare nella tua applicazione.',
      },
    ],
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
    instructions: [
      {
        title: 'Consulta o copia l’ora Unix attuale',
        description:
          'Usa il contatore in tempo reale in alto per recuperare l’epoca Unix attuale in secondi.',
      },
      {
        title: 'Convertire Timestamp Unix → Data leggibile',
        description:
          'Inserisci qualsiasi epoca numerica; la modalità Auto rileva automaticamente i secondi rispetto ai millisecondi, oppure forza un’unità.',
      },
      {
        title: 'Esamina i formati ISO, UTC e locali',
        description:
          'Confronta gli output ISO 8601, UTC, RFC 2822 e di ora locale fianco a fianco, oltre al tempo relativo come 2 ore fa, per scegliere il formato di cui hai bisogno.',
      },
      {
        title: 'Convertire Data e ora locali → Timestamp Unix',
        description:
          'Scegli una data e un’ora nel pannello inferiore per ottenere i secondi esatti, i millisecondi e l’output ISO 8601.',
      },
      {
        title: 'Copia il timestamp di cui hai bisogno',
        description:
          'Copia il valore in secondi per API e database, il valore in millisecondi per gli oggetti Date JavaScript oppure la stringa ISO per log e JSON.',
      },
      {
        title: 'Risolvi una data che sembra sbagliata',
        description:
          'Se la data cade nel 1970 o nell’anno 5000, probabilmente hai confuso secondi e millisecondi. Passa il selettore di unità da Auto all’unità corretta e converti di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Rilevare secondi contro millisecondi',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (secondi)',
        explanation:
          'I numeri a 10 cifre vengono interpretati come secondi; i numeri a 13 cifre come millisecondi.',
      },
      {
        title: 'Convertire una data locale in timestamp Unix',
        input: 'Data: 2026-11-13 04:40:00 (ora locale)',
        output: 'Secondi: 1794544800 · Millisecondi: 1794544800000',
        explanation:
          'Il selettore di data produce i secondi e i millisecondi esatti per la data scelta.',
      },
    ],
    benefits: [
      'Orologio Unix in tempo reale sincronizzato con l’ora del tuo sistema',
      'Rilevamento automatico secondi contro millisecondi con sostituzione manuale',
      'Produce insieme ISO 8601, ora locale, RFC 2822 GMT e tempo relativo',
      'Include un convertitore bidirezionale da selettore di data a secondi/ms Unix',
    ],
    useCases: [
      'Ispezionare i claim JWT `iat` / `exp` e i timestamp created_at di API',
      'Fare debug di timestamp interi di database in PostgreSQL o SQLite',
      'Generare timestamp di epoca futuri per TTL di cache o test',
      'Convertire marcatori di epoca di file di log in ore locali leggibili',
    ],
    faqs: [
      {
        question: 'Come distingue la modalità Auto i secondi dai millisecondi?',
        answer:
          'I valori di magnitudine ≥ 100.000.000.000 (1e11, circa 1973 in millisecondi o l’anno 5138 in secondi) vengono trattati come millisecondi; i valori più piccoli vengono trattati come secondi.',
      },
      {
        question: 'Il tempo Unix è influenzato dai fusi orari?',
        answer:
          'No. Il tempo di epoca Unix misura sempre i secondi trascorsi dal 1970-01-01T00:00:00Z (UTC), indipendentemente dal tuo fuso orario locale.',
      },
      {
        question: 'Posso convertire timestamp precedenti al 1970?',
        answer:
          'Sì. Inserisci un timestamp Unix negativo (come -86400 per il 31 dicembre 1969) per ispezionare date precedenti al 1970.',
      },
      {
        question: 'Che cos’è un timestamp Unix?',
        answer:
          'Un timestamp Unix, chiamato anche tempo di epoca, è il numero di secondi trascorsi dal 1º gennaio 1970 alle 00:00:00 UTC. È un modo semplice per i computer di archiviare le date come un singolo numero.',
      },
      {
        question: 'Il Convertitore di Timestamp Unix è gratis?',
        answer:
          'Sì. Il Convertitore di Timestamp Unix è interamente gratuito senza registrazione e senza limite di utilizzo. Tutta la conversione viene eseguita localmente nel tuo browser.',
      },
      {
        question: 'Qual è la differenza tra secondi Unix e millisecondi?',
        answer:
          'I secondi Unix contano i secondi interi dal 1970 e fanno in genere 10 cifre, mentre i millisecondi contano i millesimi di secondo e fanno in genere 13 cifre. Gli oggetti Date JavaScript usano i millisecondi.',
      },
      {
        question: 'Qual è il timestamp Unix attuale in questo momento?',
        answer:
          'Il contatore in tempo reale in alto in questo strumento scorre ogni secondo e mostra l’ora Unix attuale in secondi. Copialo quando hai bisogno del valore esatto per test o log.',
      },
      {
        question: 'Come converto un timestamp Unix in una data leggibile?',
        answer:
          'Incolla il numero di epoca nel convertitore e mostra la data corrispondente in ISO 8601, UTC, RFC 2822 e il tuo fuso orario locale, oltre a un tempo relativo come 3 giorni fa.',
      },
      {
        question: 'Come converto una data in timestamp Unix?',
        answer:
          'Usa il selettore di data e ora nel pannello inferiore, poi leggi i secondi e i millisecondi Unix esatti per la data selezionata nel tuo fuso orario locale.',
      },
      {
        question: 'Perché il mio timestamp mostra una data nel 1970?',
        answer:
          'Probabilmente hai inserito un valore in millisecondi mentre lo strumento si aspettava secondi, oppure un numero molto piccolo. Un valore piccolo significa solo pochi secondi dopo l’inizio dell’epoca 1970.',
      },
      {
        question: 'Perché il mio timestamp mostra una data nell’anno 5000?',
        answer:
          'Probabilmente hai inserito un valore in secondi mentre lo strumento lo trattava come millisecondi, oppure hai inserito millisecondi in un campo di secondi. Passa il selettore di unità all’unità corretta e converti di nuovo.',
      },
      {
        question: 'Qual è il formato ISO 8601 per un timestamp Unix?',
        answer:
          'L’ISO 8601 scrive una data nella forma AAAA-MM-GGTHH:MM:SS, ad esempio 2026-11-13T04:40:00.000Z. La Z finale significa che l’ora è in UTC.',
      },
      {
        question: 'I timestamp Unix includono i secondi intercalari?',
        answer:
          'No. Il tempo Unix conta ogni giorno come esattamente 86.400 secondi e ignora i secondi intercalari, quindi deriva leggermente dal vero tempo astronomico su lunghi periodi.',
      },
      {
        question: 'Posso usare timestamp Unix per date future?',
        answer:
          'Sì. Inserisci una data futura nel selettore di data per ottenere il suo timestamp Unix, il che è pratico per impostare scadenze di cache, attività pianificate e dati di test.',
      },
      {
        question: 'Qual è il timestamp Unix massimo?',
        answer:
          'Sui sistemi a 32 bit, il limite classico è 2.147.483.647 secondi, cioè il 19 gennaio 2038. I sistemi moderni a 64 bit gestiscono valori molto più grandi e questo strumento li accetta.',
      },
      {
        question: 'Come verifico un timestamp di scadenza JWT con questo convertitore?',
        answer:
          'Copia il claim exp dal tuo JWT decodificato e incollalo qui. Il convertitore mostra la data e l’ora UTC esatte di scadenza del token.',
      },
      {
        question: 'Il Convertitore di Timestamp Unix funziona offline?',
        answer:
          'Sì, una volta caricata la pagina. La conversione è una semplice aritmetica nel tuo browser e l’orologio in tempo reale legge l’ora del tuo sistema, quindi nessuna connessione di rete è necessaria.',
      },
      {
        question: 'Qual è la differenza tra UTC e ora locale nei risultati?',
        answer:
          'UTC è il tempo di riferimento universale senza offset, mentre l’ora locale applica l’offset del tuo fuso orario. Entrambi descrivono lo stesso istante, semplicemente mostrato in zone diverse.',
      },
      {
        question: 'Posso convertire un timestamp Unix da un database o un file di log?',
        answer:
          'Sì. Copia l’intero timestamp dalla tua riga di database o di log e incollalo qui per vedere la data leggibile, il che rende il debug molto più rapido.',
      },
      {
        question: 'I miei dati di timestamp vengono inviati a un server?',
        answer:
          'No. La conversione avviene interamente nel tuo browser, quindi i timestamp e le date che inserisci non lasciano mai il tuo dispositivo.',
      },
    ],
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
    instructions: [
      {
        title: 'Incolla la tua query SQL',
        description:
          'Inserisci qualsiasi query SELECT, INSERT, UPDATE, DELETE o DDL nel campo Query SQL grezza, incluse istruzioni multi-riga o su una sola riga.',
      },
      {
        title: 'Scegli la modalità Abbellisci o Minifica',
        description:
          'Seleziona Abbellisci per espandere la query in clausole indentate leggibili, oppure Minifica per ridurla in una sola riga per log e codice.',
      },
      {
        title: 'Imposta le maiuscole delle parole chiave e l’indentazione',
        description:
          'Scegli parole chiave SQL in MAIUSCOLO oppure in minuscolo e un’indentazione di 2 o 4 spazi per corrispondere alla tua guida di stile di team.',
      },
      {
        title: 'Esamina l’output formattato',
        description:
          'Verifica che gli a capo di clausola, i JOIN e le sottoquery siano allineati come previsto e che stringhe e commenti siano intatti.',
      },
      {
        title: 'Copia o riutilizza il SQL formattato',
        description:
          'Usa Copia SQL per trasferire la query standardizzata nel tuo editor, file di migrazione o pull request.',
      },
      {
        title: 'Correggi i problemi di formattazione',
        description:
          'Se l’output sembra sbagliato, verifica le virgolette sbilanciate o un punto e virgola mancante nel tuo input, poi reincolla e formatta di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Formattare una query multi-join',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation:
          'Separa le clausole SQL principali su righe dedicate e normalizza le maiuscole delle parole chiave.',
      },
      {
        title: 'Minificare una query per un log',
        input: 'SELECT id, name\nFROM users\nWHERE active = 1;',
        output: 'SELECT id, name FROM users WHERE active = 1;',
        explanation:
          'Riduce una query multi-riga in una sola riga preservando i letterali di stringa.',
      },
    ],
    benefits: [
      'Preserva intatti i letterali di stringa tra virgolette singole e i commenti SQL',
      'Supporta clausole multi-parola come LEFT OUTER JOIN, GROUP BY e ORDER BY',
      'Passa senza sforzo tra le modalità Abbellisci e Minifica',
      'Funziona localmente in modo che nomi di tabelle e schemi proprietari restino privati',
    ],
    useCases: [
      'Pulire i log SQL generati da ORM per il debug delle prestazioni',
      'Standardizzare script SQL prima delle revisioni di pull request',
      'Compattare query multi-riga in stringhe su una sola riga per script CLI',
      'Allineare le maiuscole delle parole chiave nelle guide di stile SQL di team',
    ],
    faqs: [
      {
        question: 'Il Formattatore SQL modificherà i nomi di tabella o il testo tra virgolette?',
        answer:
          'No. Il tokenizzatore isola i letterali di stringa e i commenti in modo che la formattazione in maiuscolo/minuscolo delle parole chiave si applichi solo alle parole chiave SQL riconosciute.',
      },
      {
        question: 'Quali dialetti SQL sono supportati?',
        answer:
          'Le clausole SQL ANSI standard (PostgreSQL, MySQL, SQLite, SQL Server) inclusi SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE e DELETE sono supportate.',
      },
      {
        question: 'Posso minificare una query formattata in una sola riga?',
        answer:
          'Sì. Passa l’interruttore di modalità su Minifica per rimuovere i commenti e ridurre in sicurezza gli spazi aggiuntivi.',
      },
      {
        question: 'Il Formattatore SQL è gratis?',
        answer:
          'Sì. Il Formattatore SQL è interamente gratuito senza registrazione e funziona interamente nel tuo browser.',
      },
      {
        question: 'Il Formattatore SQL invia le mie query a un server?',
        answer:
          'No. Tutta la formattazione avviene localmente nel tuo browser, quindi nomi di tabella, dettagli di schema e valori di dati delle tue query non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Posso formattare SQL con sottoquery e CTE?',
        answer:
          'Sì. Le istruzioni SELECT annidate e le espressioni di tabella comuni (WITH ... AS) vengono formattate con i propri livelli di indentazione in modo che la struttura resti leggibile.',
      },
      {
        question: 'Il Formattatore SQL gestisce le istruzioni INSERT, UPDATE e DELETE?',
        answer:
          'Sì. Le istruzioni INSERT, UPDATE e DELETE vengono formattate con le query SELECT, con le loro clausole separate su righe distinte.',
      },
      {
        question: 'Posso formattare istruzioni DDL come CREATE TABLE?',
        answer:
          'Sì. Le istruzioni DDL come CREATE TABLE, ALTER TABLE e DROP TABLE possono essere incollate e formattate con le stesse regole di maiuscole delle parole chiave e indentazione.',
      },
      {
        question: 'Quali opzioni di indentazione offre il Formattatore SQL?',
        answer:
          'Puoi scegliere un’indentazione di 2 o 4 spazi per le query abbellite, in modo che l’output corrisponda al tuo editor o alla tua guida di stile di team.',
      },
      {
        question: 'La formattazione cambia ciò che fa la mia query SQL?',
        answer:
          'No. La formattazione modifica solo gli spazi e le maiuscole delle parole chiave; non aggiunge, rimuove né riordina alcuna parte della logica della query.',
      },
      {
        question: 'Posso formattare più query SQL contemporaneamente?',
        answer:
          'Sì. Puoi incollare più istruzioni separate da punti e virgola e formattarle insieme in un solo passaggio.',
      },
      {
        question: 'Il Formattatore SQL funziona con la sintassi MySQL, PostgreSQL e SQL Server?',
        answer:
          'Sì. Gestisce lo SQL ANSI standard usato da MySQL, PostgreSQL, SQLite e SQL Server, incluse le loro parole chiave di clausola comuni.',
      },
      {
        question: 'I commenti del mio SQL saranno preservati durante la formattazione?',
        answer:
          'Sì. I commenti su una sola riga e in blocco vengono preservati dal tokenizzatore, anche se la modalità Minifica rimuove i commenti per produrre l’output più piccolo.',
      },
      {
        question: 'Che cosa succede se il mio SQL contiene un errore di sintassi?',
        answer:
          'Il formattatore elabora comunque il testo al meglio, perché lavora su token anziché eseguire la query, ma dovresti correggere l’errore prima di eseguire lo SQL nel tuo database.',
      },
      {
        question: 'Posso minificare SQL per usarlo nel codice di applicazione o nei log?',
        answer:
          'Sì. La modalità Minifica riduce una query a una riga preservando i letterali di stringa, il che è ideale per incorporare SQL nel codice o registrarlo in modo compatto.',
      },
      {
        question: 'Il Formattatore SQL supporta le funzioni di finestra?',
        answer:
          'Sì. Le funzioni di finestra come ROW_NUMBER() OVER (PARTITION BY ...) vengono formattate nell’elenco SELECT con le loro clausole OVER intatte.',
      },
      {
        question: 'C’è un limite di dimensione sullo SQL che posso formattare?',
        answer:
          'Non c’è un limite di caratteri fisso nello strumento, perché funziona nel tuo browser, anche se query molto lunghe possono richiedere un momento su dispositivi più lenti.',
      },
      {
        question: 'Posso usare il Formattatore SQL sul mio telefono?',
        answer:
          'Sì. Funziona in qualsiasi browser mobile moderno, quindi puoi incollare e formattare SQL sul tuo telefono o tablet senza installare nulla.',
      },
      {
        question: 'Il Formattatore SQL preserva gli a capo all’interno dei letterali di stringa?',
        answer:
          'Sì. Il testo all’interno dei letterali di stringa tra virgolette singole viene lasciato intatto, quindi le stringhe multi-riga conservano i loro a capo originali.',
      },
      {
        question: 'Come standardizzo le maiuscole delle parole chiave nel mio team con il Formattatore SQL?',
        answer:
          'Mettetevi d’accordo su uno stile di maiuscole, come parole chiave in MAIUSCOLO, e passate ogni query nel formattatore con quell’impostazione prima di fare il commit nel vostro repository.',
      },
    ],
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
    instructions: [
      {
        title: 'Seleziona Minifica o Abbellisci',
        description:
          'Scegli Minifica CSS per ridurre il peso del file per la produzione oppure Abbellisci CSS per ripristinare l’indentazione di un foglio di stile compresso.',
      },
      {
        title: 'Incolla il tuo foglio di stile',
        description:
          'Inserisci regole CSS, proprietà personalizzate o blocchi `@media` nel campo CSS di input, inclusi fogli di stile completi o singoli frammenti.',
      },
      {
        title: 'Lancia lo strumento e verifica le statistiche',
        description:
          'L’output si aggiorna mentre digiti; in modalità Minifica, verifica i byte di input esatti, i byte di output e la percentuale risparmiata.',
      },
      {
        title: 'Esamina attentamente l’output',
        description:
          'Conferma che i blocchi @media, le stringhe tra virgolette e i valori url(...) siano sopravvissuti intatti e che le regole annidate siano indentate correttamente in modalità Abbellisci.',
      },
      {
        title: 'Copia o scarica il CSS',
        description:
          'Fai clic su Copia CSS per incollare il risultato nel tuo foglio di stile, blocco <style> inline o passaggio di build di deploy.',
      },
      {
        title: 'Correggi un output piatto o rotto',
        description:
          'Se l’output di Abbellisci sembra piatto o se le regole si fondono, verifica una parentesi graffa chiusa mancante nel tuo input e aggiungila prima di riprovare.',
      },
    ],
    examples: [
      {
        title: 'Comprimere una regola di scheda',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation:
          'Rimuove gli a capo, gli spazi attorno alla punteggiatura e il punto e virgola finale all’interno del blocco.',
      },
      {
        title: 'Abbellire CSS minificato',
        input: '.card{padding:16px}.card h2{font-size:18px}',
        output: '.card {\n  padding: 16px;\n}\n.card h2 {\n  font-size: 18px;\n}',
        explanation:
          'Espande il CSS compresso in regole indentate e leggibili per il debug.',
      },
    ],
    benefits: [
      'Il tokenizzatore preserva le stringhe tra virgolette (come content: "..." o url(...))',
      'Rimuove in sicurezza i commenti /* ... */ e gli spazi inutili',
      'Mostra i byte di input esatti, i byte di output e la percentuale risparmiata',
      'Include la modalità Abbellisci per ispezionare il CSS minificato di terze parti',
    ],
    useCases: [
      'Comprimere frammenti <style> inline per email HTML e landing page',
      'Deminificare bundle CSS di produzione durante il debug visivo',
      'Verificare i risparmi di peso del foglio di stile prima del deploy',
      'Pulire le incoerenze di spaziatura nei fogli di stile legacy',
    ],
    faqs: [
      {
        question: 'La minificazione CSS rompe gli spazi all’interno delle stringhe content: "..."?',
        answer:
          'No. I letterali di stringa tra virgolette singole e doppie vengono preservati testualmente dal tokenizzatore.',
      },
      {
        question: 'Perché Minifica rimuove l’ultimo punto e virgola prima di «}»?',
        answer:
          'Nella sintassi CSS, l’ultima dichiarazione prima di una parentesi graffa chiusa non richiede un punto e virgola finale, il che risparmia 1 byte per blocco di regola.',
      },
      {
        question: 'Supporta i blocchi @media annidati in modalità Abbellisci?',
        answer:
          'Sì. La profondità delle parentesi graffe viene seguita all’interno dei blocchi @media e @supports in modo che le regole interne si indentino correttamente.',
      },
      {
        question: 'Il Minificatore CSS è gratis?',
        answer:
          'Sì. Il Minificatore CSS è interamente gratuito senza registrazione e funziona interamente nel tuo browser.',
      },
      {
        question: 'Il Minificatore CSS invia il mio foglio di stile da qualche parte?',
        answer:
          'No. Tutta la minificazione e l’abbellimento avvengono localmente nel tuo browser, quindi il tuo CSS non lascia mai il tuo dispositivo.',
      },
      {
        question: 'Di quanto sarà più piccolo il mio CSS dopo la minificazione?',
        answer:
          'Dipende da quanti commenti e spazi aggiuntivi contiene il tuo foglio di stile; lo strumento mostra il numero di byte esatto e la percentuale risparmiata per il tuo input.',
      },
      {
        question: 'La minificazione CSS rimuove le query @media?',
        answer:
          'No. Le query @media e le loro condizioni vengono preservate esattamente, perché rimuoverle cambierebbe il modo in cui la tua pagina risponde alle dimensioni di schermo.',
      },
      {
        question: 'Posso minificare CSS che usa proprietà personalizzate (variabili)?',
        answer:
          'Sì. Le proprietà personalizzate come --brand-color e i loro riferimenti var() vengono trattati come dichiarazioni normali e conservati intatti.',
      },
      {
        question: 'Il Minificatore CSS preserva url(...) e le stringhe di content?',
        answer:
          'Sì. Le stringhe tra virgolette all’interno di url(...) e delle proprietà content vengono preservate testualmente, quindi percorsi di immagini e testo generato restano corretti.',
      },
      {
        question: 'Il CSS minificato funzionerà comunque in tutti i browser?',
        answer:
          'Sì. La minificazione rimuove solo commenti e spazi inutili, che i browser ignorano comunque, quindi il risultato reso è identico.',
      },
      {
        question: 'Posso abbellire CSS proveniente da un bundle di produzione?',
        answer:
          'Sì. Incolla qualsiasi foglio di stile minificato in modalità Abbellisci per espanderlo in regole indentate e leggibili per il debug.',
      },
      {
        question: 'Il Minificatore CSS gestisce @keyframes e @font-face?',
        answer:
          'Sì. Le regole at come @keyframes, @font-face e @import vengono preservate, con i loro blocchi interni indentati correttamente in modalità Abbellisci.',
      },
      {
        question: 'Qual è la differenza tra minificare e abbellire nel Minificatore CSS?',
        answer:
          'Minificare riduce il CSS rimuovendo commenti e spazi per la produzione, mentre Abbellire espande il CSS compresso in regole indentate leggibili per la modifica e il debug.',
      },
      {
        question: 'Posso minificare più fogli di stile contemporaneamente?',
        answer:
          'Sì. Puoi incollare più fogli di stile insieme in un unico input, anche se mantenere i file collegati separati rende l’output più facile da gestire.',
      },
      {
        question: 'Il Minificatore CSS rimuove le regole CSS inutilizzate?',
        answer:
          'No. Rimuove solo commenti e spazi; non analizza quali selettori usa il tuo HTML, quindi le regole inutilizzate restano nell’output.',
      },
      {
        question: 'La percentuale di risparmio di byte mostrata dal Minificatore CSS è esatta?',
        answer:
          'Sì. Viene calcolata dai numeri di byte reali del tuo input e del tuo output, quindi la percentuale riflette i tuoi risparmi reali.',
      },
      {
        question: 'Posso usare il Minificatore CSS per frammenti <style> inline?',
        answer:
          'Sì. I piccoli frammenti si minificano come i fogli di stile completi, il che è utile per email HTML e landing page con stili inline.',
      },
      {
        question: 'Il Minificatore CSS supporta il CSS moderno come grid e l’annidamento?',
        answer:
          'Sì. Le proprietà moderne come grid e flexbox passano così come sono e le regole annidate vengono indentate per profondità di parentesi graffa in modalità Abbellisci.',
      },
      {
        question: 'Che cosa succede se il mio CSS contiene un errore di sintassi?',
        answer:
          'Lo strumento elabora comunque il testo, ma una parentesi graffa mancante o una stringa non chiusa può disturbare l’output, quindi correggi gli errori di sintassi prima di minificare per la produzione.',
      },
      {
        question: 'Posso minificare CSS sul mio telefono?',
        answer:
          'Sì. Il Minificatore CSS funziona in qualsiasi browser mobile moderno, quindi puoi incollare e minificare fogli di stile senza installare nulla.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Minifica JS o Abbellisci JS',
        description:
          'Scegli Minifica JS per rimuovere commenti e spazi per un output compatto, oppure Abbellisci JS con 2 o 4 spazi per ripristinare un’indentazione leggibile.',
      },
      {
        title: 'Incolla il tuo frammento di codice',
        description:
          'Inserisci codice JavaScript o TypeScript nell’editor di sinistra, da una singola funzione a un intero blocco di script.',
      },
      {
        title: 'Imposta l’indentazione per la modalità Abbellisci',
        description:
          'Scegli un’indentazione di 2 o 4 spazi in modo che il codice abbellito corrisponda al tuo editor o allo stile del tuo progetto.',
      },
      {
        title: 'Esamina i risparmi di byte e l’output',
        description:
          'Verifica la riduzione di byte in modalità Minifica e scorri l’output per confermare che stringhe, letterali di modello e modelli regex siano intatti.',
      },
      {
        title: 'Copia il codice elaborato',
        description:
          'Usa il pulsante di copia per spostare il codice minificato o abbellito nel tuo editor, bookmarklet o script inline.',
      },
      {
        title: 'Correggi i problemi di minificazione',
        description:
          'Se il codice minificato si comporta in modo strano, aggiungi prima i punti e virgola mancanti al tuo input, perché l’inserimento automatico di punto e virgola può essere ambiguo dopo la rimozione degli spazi.',
      },
    ],
    examples: [
      {
        title: 'Rimuovere commenti e spazi',
        input: '// Aiuto\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation:
          'Rimuove commenti e spazi attorno alle parentesi graffe senza toccare la logica.',
      },
      {
        title: 'Abbellire codice compatto',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation:
          'Re-indenta il codice su una sola riga in righe leggibili per il debug.',
      },
    ],
    benefits: [
      'Il tokenizzatore lessicale protegge le stringhe singole, doppie e di modello tra backtick',
      'Rimuove i commenti // su una sola riga e /* */ in blocco in modalità Minifica',
      'Segnala la percentuale di riduzione di byte in tempo reale',
      'Esecuzione rapida solo nel browser, senza codice inviato all’esterno',
    ],
    useCases: [
      'Preparare script inline compatti o bookmarklet',
      'Decomprimere frammenti compatti su una sola riga per la leggibilità',
      'Rimuovere i commenti di sviluppatore prima di condividere esempi di codice',
      'Re-indentare rapidamente funzioni JS incollate',
    ],
    faqs: [
      {
        question: 'Questo strumento rinomina le variabili (mangling) come Terser o esbuild?',
        answer:
          'No. Esegue una minificazione sicura di spazi e commenti senza rinominare gli identificativi né modificare la semantica dell’AST, il che rende l’output facile da ispezionare.',
      },
      {
        question: 'I letterali di stringa contenenti «//» (come gli URL) sono sicuri?',
        answer:
          'Sì. Le stringhe tra virgolette e i letterali di modello vengono tokenizzati prima del rilevamento dei commenti, quindi gli URL tra virgolette non vengono mai trattati come commenti.',
      },
      {
        question: 'Devo usare punti e virgola quando minifico JS multi-istruzione?',
        answer:
          'Si raccomanda di includere punti e virgola standard prima di minificare qualsiasi frammento JavaScript per evitare ambiguità di ASI (inserimento automatico di punto e virgola).',
      },
      {
        question: 'Il Minificatore JavaScript è gratis?',
        answer:
          'Sì. Il Minificatore JavaScript è interamente gratuito senza registrazione e funziona interamente nel tuo browser.',
      },
      {
        question: 'Il Minificatore JavaScript invia il mio codice a un server?',
        answer:
          'No. Tutta la minificazione e la formattazione avvengono localmente nel tuo browser, quindi il tuo codice non lascia mai il tuo dispositivo.',
      },
      {
        question: 'Il Minificatore JavaScript funziona con codice TypeScript?',
        answer:
          'Sì. I frammenti TypeScript possono essere incollati e minificati o abbelliti allo stesso modo, perché il tokenizzatore gestisce la sintassi standard JS e TS.',
      },
      {
        question: 'Minificare romperà il mio JavaScript?',
        answer:
          'No, purché il tuo codice usi punti e virgola standard. Solo commenti e spazi aggiuntivi vengono rimossi, quindi la logica resta identica.',
      },
      {
        question: 'Il Minificatore JavaScript rimuove le istruzioni console.log?',
        answer:
          'No. Rimuove solo commenti e spazi, quindi le chiamate console.log e le altre istruzioni restano nell’output.',
      },
      {
        question: 'Posso abbellire codice minificato proveniente da un bundle di produzione?',
        answer:
          'Sì. Incolla codice compatto su una sola riga in modalità Abbellisci per re-indentarlo in righe leggibili per il debug.',
      },
      {
        question: 'Il Minificatore JavaScript gestisce i letterali di modello con espressioni ${}?',
        answer:
          'Sì. I letterali di modello tra backtick, incluse le interpolazioni ${}, vengono tokenizzati come stringhe e preservati esattamente.',
      },
      {
        question: 'Qual è la differenza tra minificare e abbellire nel Minificatore JavaScript?',
        answer:
          'Minificare rimuove commenti e spazi per ridurre il codice per l’uso inline, mentre Abbellire re-indenta il codice compatto in righe leggibili per la modifica.',
      },
      {
        question: 'Posso minificare codice ES6 con funzioni freccia e classi?',
        answer:
          'Sì. Funzioni freccia, classi, destrutturazione e altre sintassi ES6 moderne vengono gestite dal tokenizzatore senza modificare il codice.',
      },
      {
        question: 'Il Minificatore JavaScript supporta JSX o codice React?',
        answer:
          'JSX non è supportato specificamente, perché le parentesi angolari in JSX possono essere interpretate male dal tokenizzatore. Usalo per JavaScript o TypeScript grezzo e un formattatore dedicato per JSX.',
      },
      {
        question: 'Di quanto sarà più piccolo il mio JavaScript dopo la minificazione?',
        answer:
          'Dipende da quanti commenti e a capo ha il tuo codice; lo strumento mostra il numero di byte esatto e la percentuale risparmiata per il tuo frammento.',
      },
      {
        question: 'Posso minificare più file JavaScript contemporaneamente?',
        answer:
          'Lo strumento elabora un frammento alla volta, quindi incolla ogni file separatamente. Per interi progetti, usa invece un bundler come esbuild o Terser.',
      },
      {
        question: 'Il Minificatore JavaScript preserva le espressioni regolari?',
        answer:
          'Sì. I letterali di espressione regolare vengono riconosciuti dal tokenizzatore e conservati intatti, inclusi i caratteri // all’interno del modello.',
      },
      {
        question: 'Che cosa succede se il mio JavaScript contiene un errore di sintassi?',
        answer:
          'Lo strumento elabora comunque il testo, ma parentesi graffe sbilanciate o stringhe non chiuse possono produrre un output strano, quindi correggi gli errori di sintassi prima di minificare.',
      },
      {
        question: 'Posso usare il Minificatore JavaScript per i bookmarklet?',
        answer:
          'Sì. La modalità Minifica è ideale per i bookmarklet, perché riduce un frammento in una sola riga compatta che puoi incollare in un URL di segnalibro.',
      },
      {
        question: 'L’output minificato può essere incollato in sicurezza in un tag script HTML?',
        answer:
          'In genere sì, ma evita una sequenza letterale «</script>» all’interno delle tue stringhe, perché il browser la tratterebbe come la fine del blocco di script.',
      },
      {
        question: 'Posso formattare JavaScript sul mio telefono?',
        answer:
          'Sì. Il Minificatore JavaScript funziona in qualsiasi browser mobile moderno, quindi puoi incollare e formattare codice senza installare nulla.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci un’espressione cron a 5 campi o scegli un preset',
        description:
          'Digita qualsiasi espressione cron come `0 9 * * 1-5` oppure fai clic su un pulsante di preset di pianificazione comune per partire da un modello noto.',
      },
      {
        title: 'Verifica il riepilogo in italiano semplice e la ripartizione dei campi',
        description:
          'Verifica che i campi minuto, ora, giorno del mese, mese e giorno della settimana corrispondano alla tua intenzione prima di fidarti della pianificazione.',
      },
      {
        title: 'Verifica le prossime 8 ore di esecuzione',
        description:
          'Esamina i timestamp di esecuzione locali imminenti calcolati per confermare che l’attività venga eseguita quando te lo aspetti.',
      },
      {
        title: 'Regola i campi con passi, intervalli ed elenchi',
        description:
          'Affina la pianificazione usando valori di passo come */15, intervalli come 1-5 oppure elenchi come 1,15, poi ricontrolla il riepilogo e le ore di esecuzione.',
      },
      {
        title: 'Copia l’espressione per il tuo pianificatore',
        description:
          'Copia l’espressione verificata nel tuo crontab, nel tuo workflow GitHub Actions o nel tuo trigger cron di Cloudflare Worker.',
      },
      {
        title: 'Attenzione al giorno del mese contro giorno della settimana',
        description:
          'Se entrambi i campi di giorno sono limitati, il cron standard viene eseguito quando l’uno o l’altro corrisponde. Usa * in uno di essi se vuoi che si applichi una sola condizione.',
      },
    ],
    examples: [
      {
        title: 'Attività del mattino in orario di ufficio',
        input: '0 9 * * 1-5',
        output: 'Alle 09:00, nei giorni feriali 1-5 (lunedì–venerdì).',
        explanation:
          'Viene eseguita alle 09:00 ogni lunedì al venerdì.',
      },
      {
        title: 'Attività ogni 15 minuti',
        input: '*/15 * * * *',
        output: 'Ogni 15 minuti, alle :00, :15, :30 e :45.',
        explanation:
          'La sintassi di passo */15 nel campo minuto esegue l’attività quattro volte all’ora.',
      },
    ],
    benefits: [
      'Supporta caratteri jolly (*), passi (*/5), intervalli (1-5), elenchi (1,15) e nomi (LUN-VEN)',
      'Calcola i prossimi 8 timestamp di esecuzione concreti nel tuo fuso orario locale',
      'Segnala immediatamente i valori fuori intervallo o i campi mancanti',
      'Include preset in un clic per gli intervalli comuni',
    ],
    useCases: [
      'Verificare gli `schedule.cron` di GitHub Actions e i trigger Cron di Cloudflare Workers',
      'Fare debug di pianificazioni crontab Linux di backup o pulizia',
      'Verificare la logica giorno della settimana (0–6) contro giorno del mese (1–31)',
      'Documentare le pianificazioni di attività ricorrenti per le guide operative',
    ],
    faqs: [
      {
        question: 'Questo analizzatore supporta le espressioni cron a 6 campi con secondi?',
        answer:
          'Questo strumento analizza le espressioni crontab Unix standard a 5 campi (minuto, ora, giorno del mese, mese, giorno della settimana), usate dal cron Linux, GitHub Actions e Cloudflare Workers.',
      },
      {
        question: 'Che cosa succede se Giorno del mese e Giorno della settimana sono entrambi non generici?',
        answer:
          'Seguendo il comportamento standard del cron Vixie/Unix, quando entrambi i campi di giorno sono limitati, un’esecuzione si attiva se il Giorno del mese OPPURE il Giorno della settimana corrisponde.',
      },
      {
        question: 'I nomi LUN–VEN e GEN–DIC sono supportati?',
        answer:
          'Sì. Le abbreviazioni inglesi standard di 3 lettere per mesi e giorni della settimana oltre allo 0 o 7 numerico per domenica sono supportate.',
      },
      {
        question: 'L’Analizzatore di Espressioni Cron è gratis?',
        answer:
          'Sì. L’Analizzatore di Espressioni Cron è interamente gratuito senza registrazione e funziona interamente nel tuo browser.',
      },
      {
        question: 'Che cos’è un’espressione cron?',
        answer:
          'Un’espressione cron è una stringa di pianificazione compatta a 5 campi che dice a un sistema quando eseguire un’attività automaticamente, ad esempio ogni ora o ogni giorno feriale alle 9.',
      },
      {
        question: 'Che cosa significano i 5 campi di un’espressione cron?',
        answer:
          'Da sinistra a destra, sono il minuto (0-59), l’ora (0-23), il giorno del mese (1-31), il mese (1-12) e il giorno della settimana (0-7, dove 0 e 7 significano domenica).',
      },
      {
        question: 'Come eseguo un’attività cron ogni 5 minuti?',
        answer:
          'Usa la sintassi di passo nel campo minuto: */5 * * * * esegue l’attività ogni 5 minuti, alle :00, :05, :10, ecc.',
      },
      {
        question: 'Come pianifico un’attività cron alle 9 nei giorni feriali?',
        answer:
          'Usa 0 9 * * 1-5, che significa minuto 0, ora 9, qualsiasi giorno del mese, qualsiasi mese e i giorni della settimana dal lunedì al venerdì.',
      },
      {
        question: 'Che cosa significa */15 in un’espressione cron?',
        answer:
          'La sintassi di passo */15 significa ogni 15 unità di quel campo, quindi */15 nel campo minuto esegue un’attività ogni 15 minuti.',
      },
      {
        question: 'Qual è la differenza tra 0 e 7 per domenica in cron?',
        answer:
          'Non c’è differenza; 0 e 7 rappresentano entrambi domenica nel campo giorno della settimana, quindi puoi usare quello che preferisci.',
      },
      {
        question: 'Posso usare questo Analizzatore di Espressioni Cron per le pianificazioni GitHub Actions?',
        answer:
          'Sì. GitHub Actions usa la stessa sintassi cron a 5 campi, quindi puoi verificare una pianificazione qui prima di incollarla nel tuo file di workflow.',
      },
      {
        question: 'L’Analizzatore di Espressioni Cron tiene conto del mio fuso orario?',
        answer:
          'Le prossime 8 ore di esecuzione vengono mostrate nel fuso orario locale del tuo browser, ma ricorda che cron stesso viene eseguito nel fuso orario del server, quindi verifica anche le tue impostazioni di server.',
      },
      {
        question: 'Che cosa succede se inserisco un’espressione cron non valida?',
        answer:
          'L’analizzatore segnala immediatamente i valori fuori intervallo o i campi mancanti, in modo che tu possa correggere l’espressione prima di distribuirla.',
      },
      {
        question: 'Posso pianificare un’attività cron per l’ultimo giorno del mese?',
        answer:
          'Il cron standard a 5 campi non ha una sintassi di ultimo giorno. Una soluzione comune consiste nel pianificare sui giorni 28-31 e lasciare che l’attività stessa verifichi se si tratta dell’ultimo giorno.',
      },
      {
        question: 'Che cosa significano L e W in un’espressione cron?',
        answer:
          'L (ultimo) e W (giorno feriale) sono estensioni in stile Quartz, non parte del cron Unix standard, quindi non sono supportate da questo analizzatore.',
      },
      {
        question: 'Come eseguo un’attività cron due volte al giorno?',
        answer:
          'Elenca le due ore nel campo ora, ad esempio 0 6,18 * * * esegue l’attività alle 6 e alle 18 ogni giorno.',
      },
      {
        question: 'L’Analizzatore di Espressioni Cron supporta i secondi o le espressioni a 6 campi?',
        answer:
          'No. Supporta solo le espressioni Unix standard a 5 campi; i pianificatori che hanno bisogno di secondi usano un formato diverso a 6 campi.',
      },
      {
        question: 'Posso vedere in anteprima le esecuzioni cron per un intervallo di date preciso?',
        answer:
          'Lo strumento mostra in anteprima le prossime 8 ore di esecuzione a partire da adesso. Non offre una vista di intervallo di date personalizzata, ma le prossime 8 esecuzioni rivelano in genere gli errori di pianificazione.',
      },
      {
        question: 'Perché la mia attività cron viene eseguita in giorni inattesi?',
        answer:
          'La causa più comune è limitare sia il giorno del mese sia il giorno della settimana, il che attiva un’esecuzione quando l’uno o l’altro corrisponde. Imposta uno di essi su * per correggere.',
      },
      {
        question: 'Posso usare preset cron per pianificazioni comuni?',
        answer:
          'Sì. Lo strumento include preset in un clic per intervalli comuni come ogni ora, quotidiano, settimanale e mensile, che puoi poi personalizzare.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli o digita un colore',
        description:
          'Usa il selettore di colori, inserisci un codice HEX a 3 o 6 cifre oppure regola i singoli canali R/G/B o T/S/L per definire il tuo colore di primo piano.',
      },
      {
        title: 'Esamina i valori HEX, RGB e HSL',
        description:
          'Verifica i valori sincronizzati nelle tre notazioni e conferma che il campione in tempo reale corrisponda al colore voluto.',
      },
      {
        title: 'Copia i valori di colore CSS',
        description:
          'Fai clic su Copia HEX, Copia RGB oppure Copia HSL per recuperare stringhe CSS pronte all’uso per il tuo foglio di stile o i tuoi token di design.',
      },
      {
        title: 'Seleziona un colore di sfondo',
        description:
          'Scegli un colore di sfondo qui sotto per confrontarlo con il tuo colore di primo piano per la verifica di contrasto.',
      },
      {
        title: 'Verifica i risultati di contrasto WCAG',
        description:
          'Leggi il rapporto di contrasto esatto e lo stato Superato/Fallito per AA Normale, AAA Normale e AA Testo grande prima di rilasciare la coppia.',
      },
      {
        title: 'Correggi una coppia di contrasto che fallisce',
        description:
          'Se la coppia fallisce, abbassa la Luminosità in HSL per scurire il testo (o schiarire lo sfondo) finché il rapporto non raggiunge almeno 4,5:1 per il testo normale.',
      },
    ],
    examples: [
      {
        title: 'Blu cobalto accessibile su bianco',
        input: 'Primo piano: #2563EB · Sfondo: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Contrasto: 5,17:1 (AA Superato)',
        explanation:
          'Rispetta il requisito WCAG AA di 4,5:1 per il testo corrente standard.',
      },
      {
        title: 'Convertire un colore di marca HEX in HSL',
        input: 'HEX: #E11D48',
        output: 'RGB: rgb(225, 29, 72) · HSL: hsl(347, 77%, 50%)',
        explanation:
          'Converte un colore di marca in HSL per l’uso in variabili CSS o temi Tailwind.',
      },
    ],
    benefits: [
      'Sincronizza i canali HEX, RGB e HSL in modo bidirezionale in tempo reale',
      'Calcolatore di contrasto per luminanza relativa WCAG 2.1 integrato',
      'Testa le soglie AA Normale (4,5:1), AAA Normale (7,0:1) e AA Testo grande (3,0:1)',
      'Copia in un clic per stringhe di colore CSS valide',
    ],
    useCases: [
      'Verificare il contrasto del testo di pulsanti e link durante l’implementazione di interfaccia',
      'Convertire palette HEX di marca in HSL per Tailwind o variabili CSS',
      'Regolare luminosità e saturazione senza lasciare il browser',
      'Revisionare la conformità di accessibilità prima della consegna del design',
    ],
    faqs: [
      {
        question: 'Quale rapporto di contrasto è richiesto per il testo corrente WCAG 2.1 AA?',
        answer:
          'WCAG 2.1 AA richiede almeno 4,5:1 per il testo normale e 3,0:1 per il testo grande (18pt / 24px in regolare oppure 14pt / 18,66px in grassetto).',
      },
      {
        question: 'Posso inserire codici HEX abbreviati a 3 cifre come #09f?',
        answer:
          'Sì. I codici HEX a tre caratteri si espandono automaticamente nei loro equivalenti a 6 caratteri.',
      },
      {
        question: 'Perché HSL facilita la regolazione dei temi rispetto a RGB?',
        answer:
          'HSL separa Tonalità, Saturazione e Luminosità, il che ti permette di scurire o schiarire un colore di marca cambiando solo la percentuale di Luminosità.',
      },
      {
        question: 'Il Convertitore di Colori è gratis?',
        answer:
          'Sì. Il Convertitore di Colori è interamente gratuito senza registrazione e funziona interamente nel tuo browser.',
      },
      {
        question: 'Il Convertitore di Colori archivia i miei colori?',
        answer:
          'No. Le conversioni e le verifiche di contrasto avvengono localmente nel tuo browser, quindi le tue scelte di palette non vengono mai inviate né archiviate.',
      },
      {
        question: 'Come converto HEX in RGB con il Convertitore di Colori?',
        answer:
          'Inserisci un codice HEX come #2563EB e il valore RGB appare all’istante, pronto da copiare come stringa CSS rgb().',
      },
      {
        question: 'Come converto RGB in HSL?',
        answer:
          'Inserisci i valori RGB oppure regola i canali R, G e B, e il valore HSL corrispondente si aggiorna in tempo reale nello stesso pannello.',
      },
      {
        question: 'Qual è la differenza tra HEX, RGB e HSL?',
        answer:
          'HEX è un codice compatto per un colore, RGB lo definisce dalle quantità di rosso, verde e blu, e HSL lo definisce da tonalità, saturazione e luminosità. Descrivono lo stesso colore in notazioni diverse.',
      },
      {
        question: 'Quale rapporto di contrasto serve per WCAG AAA?',
        answer:
          'WCAG AAA richiede almeno 7,0:1 per il testo normale e 4,5:1 per il testo grande, il che è più rigido del livello AA.',
      },
      {
        question: 'Che cosa conta come testo grande per il contrasto WCAG?',
        answer:
          'Il testo grande fa 18pt (24px) o più in peso regolare, oppure 14pt (18,66px) o più in peso grassetto. Il testo grande ha bisogno solo di un rapporto di 3,0:1 per AA.',
      },
      {
        question: 'Posso convertire un colore con trasparenza (alpha) nel Convertitore di Colori?',
        answer:
          'Questo convertitore gestisce colori pieni senza canale alpha. Per la trasparenza, prendi i valori RGB convertiti e usali in una funzione rgba().',
      },
      {
        question: 'Il Convertitore di Colori supporta i codici HEX a 8 cifre con alpha?',
        answer:
          'No. Il convertitore accetta i codici HEX standard a 3 e 6 cifre; per la trasparenza, usa l’output RGB con un valore alpha in rgba().',
      },
      {
        question: 'Posso scegliere un colore da un’immagine con il Convertitore di Colori?',
        answer:
          'No. Lo strumento non campiona le immagini; inserisci il valore HEX del colore voluto oppure sceglilo con il selettore di colori integrato.',
      },
      {
        question: 'Come viene calcolato il rapporto di contrasto WCAG?',
        answer:
          'Viene calcolato dalla luminanza relativa dei colori di primo piano e di sfondo usando la formula definita nella specifica WCAG 2.1.',
      },
      {
        question: 'Perché il mio colore di marca fallisce il contrasto AA su bianco?',
        answer:
          'I colori di marca chiari o di tono medio cadono spesso sotto la soglia di 4,5:1 contro il bianco. Scurisci il colore oppure usalo solo per testo grande ed elementi decorativi.',
      },
      {
        question: 'Posso copiare colori come variabili CSS dal Convertitore di Colori?',
        answer:
          'Sì. Copia il valore HEX, RGB o HSL e incollalo in una proprietà personalizzata CSS, ad esempio --brand: #2563EB, poi referenziala con var(--brand).',
      },
      {
        question: 'Qual è la differenza tra HSL e HSV?',
        answer:
          'HSL descrive un colore da tonalità, saturazione e luminosità, mentre HSV usa tonalità, saturazione e valore (luminosità). HSL è in genere più facile per creare varianti di temi chiari e scuri accessibili.',
      },
      {
        question: 'Posso convertire colori CSS nominati come «red» nel Convertitore di Colori?',
        answer:
          'Inserisci invece il valore HEX del colore nominato, ad esempio red è #FF0000. Lo strumento accetta input HEX, RGB e HSL.',
      },
      {
        question: 'Come trovo una tonalità più scura del mio colore di marca?',
        answer:
          'Converti il colore in HSL, mantieni identiche tonalità e saturazione e abbassa la percentuale di Luminosità finché non raggiungi la tonalità voluta.',
      },
      {
        question: 'Posso usare il Convertitore di Colori sul mio telefono?',
        answer:
          'Sì. Il Convertitore di Colori funziona in qualsiasi browser mobile moderno, quindi puoi convertire colori e verificare il contrasto senza installare nulla.',
      },
    ],
  },
};
