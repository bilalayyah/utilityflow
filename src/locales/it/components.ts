import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the it locale.
 * GENERATED — assembled from .restructure-work fragments (group1/group2 JSON
 * + group2-ts TypeScript for function-valued entries). Do not hand-edit;
 * the source of truth is the per-component STRINGS_EN tables plus these
 * per-language fragments. Loaded only when the it locale is selected.
 */
export const itComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "Testo da convertire",
      "placeholder": "Digita o incolla il testo, poi fai clic su uno dei pulsanti di conversione qui sotto...",
      "copyResult": "Copia il risultato"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Scrivi testi chiari e concisi che rispettino i limiti di caratteri delle piattaforme, senza troncamenti scomodi nei risultati di ricerca o nei feed social.",
      "withSpaces": "Con spazi",
      "withoutSpaces": "Senza spazi",
      "words": "Parole",
      "letters": "Lettere",
      "digits": "Cifre",
      "utf8Bytes": "Byte UTF-8",
      "copyText": "Copia il testo",
      "textToMeasure": "Testo per misurare la lunghezza in caratteri",
      "placeholder": "Digita o incolla il testo per controllare il numero esatto di caratteri, la dimensione in byte e i limiti delle piattaforme...",
      "whitespaceChars": "Caratteri di spaziatura",
      "lines": "Righe",
      "platformLimitsTitle": "Limiti di caratteri per piattaforme e SEO",
      "over": "in più",
      "left": "rimasti",
      "platformLimits": [
        {
          "name": "Meta title SEO",
          "note": "Lunghezza consigliata del titolo nei risultati Google"
        },
        {
          "name": "Meta description SEO",
          "note": "Soglia standard dello snippet su desktop"
        },
        {
          "name": "Segmento SMS",
          "note": "Un singolo messaggio SMS GSM-7"
        },
        {
          "name": "Post su X / Twitter",
          "note": "Lunghezza standard di un post"
        },
        {
          "name": "Anteprima didascalia Instagram",
          "note": "Visibile prima del troncamento con \"Altro\""
        },
        {
          "name": "Post su LinkedIn",
          "note": "Aggiornamento standard massimo del feed"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Trova",
      "replaceWith": "Sostituisci con",
      "findPlaceholder": "Testo da cercare...",
      "replacePlaceholder": "Testo sostitutivo...",
      "caseSensitive": "Distingui maiuscole/minuscole",
      "wholeWordOnly": "Solo parole intere",
      "useRegex": "Usa espressione regolare (RegExp)",
      "regexError": "Errore regex:",
      "invalidRegex": "Espressione regolare non valida.",
      "sourceText": "Testo di origine",
      "updatedOutput": "Output aggiornato",
      "match": "corrispondenza",
      "matches": "corrispondenze",
      "replaced": "sostituite",
      "sourcePlaceholder": "Incolla il testo da cercare e sostituire...",
      "outputPlaceholder": "L'anteprima del testo sostituito apparirà qui...",
      "copyResult": "Copia il risultato"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Prefisso di riga",
      "lineSuffix": "Suffisso di riga",
      "startNumber": "Numero iniziale",
      "numberSeparator": "Separatore dei numeri",
      "addLineNumbers": "Aggiungi i numeri di riga",
      "zeroPad": "Riempi con zeri (01, 02)",
      "skipEmptyLines": "Salta le righe vuote",
      "inputLines": "Righe di input",
      "formattedLines": "Righe formattate",
      "copyResult": "Copia il risultato",
      "inputPlaceholder": "Incolla un valore o una riga per riga...",
      "outputPlaceholder": "Le righe numerate o racchiuse appariranno qui..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Quantità",
      "unit": "Unità",
      "unitLabels": {
        "paragraphs": "paragrafi",
        "sentences": "frasi",
        "words": "parole"
      },
      "startClassic": "Inizia con “Lorem ipsum”",
      "wrapHtml": "Racchiudi nei tag <p>",
      "words": "parole",
      "characters": "caratteri",
      "regenerate": "Rigenera",
      "copyPlaceholder": "Copia il testo segnaposto",
      "generatedText": "Testo segnaposto generato"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# Note di rilascio di UtilityFlow\n\nBenvenuto in **Markdown Previewer**, un editor rapido lato client con esportazione *HTML* in tempo reale.\n\n## Funzionalità principali\n\n- Formattazione immediata di titoli, elenchi e link\n- Escape HTML sicuro senza caricamenti remoti\n- Copia e download dell'HTML grezzo con un clic\n\n> Tieni la documentazione vicina al lavoro e controlla la struttura prima della pubblicazione.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nScopri di più su [UtilityFlow](/tools/).",
      "renderedPreview": "Anteprima renderizzata",
      "rawHtml": "HTML grezzo",
      "exportHtml": "Esporta HTML",
      "copyHtml": "Copia HTML",
      "markdownSource": "Sorgente Markdown",
      "livePreview": "Anteprima live",
      "compiledHtml": "HTML compilato",
      "compiledHtmlAria": "Sorgente HTML compilata",
      "inputPlaceholder": "Scrivi Markdown (# Titolo, **grassetto**, - elenco, [link](https://...))...",
      "emptyPreview": "L'anteprima apparirà mentre scrivi Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "La scrittura tecnica chiara rispetta il tempo del lettore. Usa nomi concreti e verbi attivi ogni volta che è possibile, così le istruzioni complesse restano facili da seguire.\n\nLe frasi lunghe piene di proposizioni subordinate costringono i lettori a rileggere i paragrafi. Suddividere le spiegazioni dense in passaggi più brevi rende la documentazione più veloce da scansionare e più semplice da applicare.",
      "level": "Livello:",
      "textToCheck": "Testo da controllare per la leggibilità",
      "placeholder": "Incolla l'articolo, il saggio o il testo della landing page per calcolare l'indice di leggibilità Flesch e i livelli scolastici...",
      "fleschEase": "Indice di leggibilità Flesch",
      "fleschKincaid": "Livello Flesch-Kincaid",
      "usGrade": "Livello scolastico USA",
      "gunningFog": "Indice Gunning Fog",
      "yearsEducation": "Anni di istruzione",
      "smog": "Indice SMOG",
      "polysyllable": "Complessità polisillabica",
      "structuralBreakdown": "Suddivisione strutturale",
      "wordsSentences": "Parole / Frasi",
      "avgSentenceLength": "Lunghezza media delle frasi",
      "words": "parole",
      "avgSyllablesPerWord": "Media sillabe per parola",
      "complexWords": "Parole complesse (3+ sillabe)",
      "longWordsDetected": "Parole lunghe rilevate (3+ sillabe)",
      "noLongWords": "Nessuna parola di 3+ sillabe trovata in questo brano.",
      "emptyState": "Inserisci almeno una frase qui sopra per visualizzare le formule di leggibilità e i rapporti strutturali.",
      "levels": [
        {
          "level": "Molto facile",
          "audience": "5ª classe (10–11 anni)"
        },
        {
          "level": "Facile",
          "audience": "6ª classe (11–12 anni)"
        },
        {
          "level": "Abbastanza facile",
          "audience": "7ª classe (12–13 anni)"
        },
        {
          "level": "Standard",
          "audience": "8ª–9ª classe (13–15 anni)"
        },
        {
          "level": "Abbastanza difficile",
          "audience": "10ª–12ª classe"
        },
        {
          "level": "Difficile",
          "audience": "Livello universitario"
        },
        {
          "level": "Molto difficile",
          "audience": "Laurea / specializzazione"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Distingui maiuscole/minuscole",
      "trimWhitespace": "Elimina gli spazi",
      "removeEmptyLines": "Rimuovi le righe vuote",
      "sortAlphabetically": "Ordina alfabeticamente",
      "originalLines": "Righe originali",
      "lines": "righe",
      "uniqueLines": "Righe univoche",
      "unique": "univoche",
      "removed": "rimosse",
      "inputPlaceholder": "Incolla un elenco con un elemento per riga...",
      "outputPlaceholder": "L'output deduplicato apparirà qui..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Distingui maiuscole/minuscole",
      "ignoreBlankLines": "Ignora le righe vuote",
      "removeDuplicates": "Rimuovi duplicati",
      "inputLines": "Righe di input",
      "sortedLines": "Righe ordinate",
      "copySorted": "Copia ordinate",
      "inputPlaceholder": "Inserisci un elemento per riga...",
      "outputPlaceholder": "L'output ordinato apparirà qui...",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "A → Z"
        },
        {
          "id": "alpha-desc",
          "label": "Z → A"
        },
        {
          "id": "natural",
          "label": "Naturale (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Più corte prima"
        },
        {
          "id": "length-desc",
          "label": "Più lunghe prima"
        },
        {
          "id": "reverse-order",
          "label": "Ordine inverso"
        },
        {
          "id": "shuffle",
          "label": "Mescola"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Ignora gli spazi",
      "ignoreCase": "Ignora maiuscole/minuscole",
      "originalText": "Testo originale",
      "modifiedText": "Testo modificato",
      "originalPlaceholder": "Incolla il testo originale...",
      "modifiedPlaceholder": "Incolla il testo aggiornato...",
      "lineComparison": "Confronto per righe",
      "added": "aggiunte",
      "removed": "rimosse",
      "unchanged": "invariate",
      "emptyState": "Inserisci il testo in entrambe le caselle qui sopra per confrontare righe aggiunte e rimosse."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Prima riga di testo\nSeconda riga di testo\nTerza riga di testo",
      "originalText": "Testo originale",
      "reversedOutput": "Output invertito",
      "inputPlaceholder": "Inserisci testo o righe da invertire...",
      "outputPlaceholder": "Il testo invertito apparirà qui...",
      "modes": [
        {
          "id": "characters",
          "label": "Inverti i caratteri"
        },
        {
          "id": "words",
          "label": "Inverti ordine delle parole"
        },
        {
          "id": "each-word",
          "label": "Inverti ogni parola"
        },
        {
          "id": "lines",
          "label": "Inverti ordine delle righe"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 modi migliori per formattare JSON online!\nCafé & Crème: guida per il 2026\nCome creare un sito statico veloce su Cloudflare Pages",
      "hyphen": "Trattino (-)",
      "underscore": "Trattino basso (_)",
      "forceLowercase": "Forza minuscole",
      "stripStopWords": "Rimuovi le stop word comuni",
      "titlesLabel": "Titoli o frasi (uno per riga per la modalità batch)",
      "inputPlaceholder": "Inserisci il titolo di un blog, il nome di un prodotto o un elenco di titoli...",
      "generatedSlugs": "Slug URL generati",
      "copySlugs": "Copia gli slug",
      "outputPlaceholder": "slug-url-puliti-appaiono-qui"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Prima   riga con   spazi   extra.   \n\n   Seconda riga   con   tabulazioni\te   spazi.\n\n\nTerza   riga qui.   ",
      "collapseSpaces": "Unisci gli spazi multipli",
      "trimEdges": "Taglia i bordi delle righe",
      "tabsToSpaces": "Converti le tabulazioni in spazi",
      "lineBreaks": "Interruzioni di riga:",
      "keepBreaks": "Mantieni le interruzioni di riga",
      "removeBlankLines": "Rimuovi le righe vuote",
      "replaceWithSpaces": "Sostituisci con spazi",
      "removeAllBreaks": "Rimuovi tutte le interruzioni",
      "inputText": "Testo di input",
      "chars": "caratteri",
      "cleanedText": "Testo pulito",
      "removed": "rimossi",
      "inputPlaceholder": "Incolla testo disordinato con spazi extra, tabulazioni o righe vuote...",
      "outputPlaceholder": "L'output pulito apparirà automaticamente..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow elabora ogni calcolo di testo direttamente nel browser. Che tu stia scrivendo un articolo di blog, perfezionando l'annuncio di un prodotto o controllando un saggio accademico con un limite rigido di parole, i conteggi istantanei ti aiutano a organizzare il messaggio con chiarezza.\n\nLe frasi brevi migliorano la leggibilità. Variare la lunghezza delle frasi mantiene le guide lunghe coinvolgenti per i lettori su desktop e dispositivi mobili.",
      "words": "Parole",
      "characters": "Caratteri",
      "noSpaces": "Senza spazi",
      "sentences": "Frasi",
      "paragraphs": "Paragrafi",
      "readingTime": "Tempo di lettura",
      "downloadTxt": "Scarica .txt",
      "copyText": "Copia il testo",
      "textToCount": "Testo da contare",
      "placeholder": "Incolla o digita qui il testo per contare parole, caratteri, frasi e tempo di lettura...",
      "deliveryTimingLines": "Tempi di lettura e righe",
      "speakingTime": "Tempo di lettura ad alta voce (130 ppm)",
      "totalLines": "Righe totali",
      "avgWordLength": "Lunghezza media delle parole",
      "chars": "caratteri",
      "mostFrequentWords": "Parole più frequenti",
      "emptyKeywords": "Inserisci il testo qui sopra per vedere le parole più ripetute."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Gli audit tecnici SEO controllano la crawlabilità, i link interni e la velocità delle pagine. Le pagine veloci migliorano il coinvolgimento degli utenti e i segnali di velocità nella ricerca mobile. I link interni collegano guide correlate e rafforzano la struttura tecnica SEO.",
      "ngramLabels": {
        "1": "1 parola",
        "2": "Frasi di 2 parole",
        "3": "Frasi di 3 parole"
      },
      "excludeStopWords": "Escludi le stop word comuni",
      "minLength": "Lunghezza min.:",
      "textForAnalysis": "Testo per l'analisi di frequenza",
      "placeholder": "Incolla testi di articoli, descrizioni di prodotti o note per contare i termini ripetuti e la densità delle parole chiave...",
      "totalWords": "Parole totali:",
      "uniqueTerms": "Termini univoci:",
      "exportCsv": "Esporta CSV",
      "copyCsv": "Copia CSV",
      "rank": "#",
      "termPhrase": "Termine / Frase",
      "count": "Conteggio",
      "density": "Densità",
      "emptyState": "Inserisci il testo qui sopra per visualizzare i conteggi delle parole e le percentuali di densità delle parole chiave."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Inserisci date di calendario valide.",
      "errorDobAfterTarget": "La data di nascita non può essere successiva alla data di riferimento.",
      "dobLabel": "Data di nascita",
      "targetLabel": "Età alla data",
      "exactAge": "Età cronologica esatta",
      "yearsWord": "anni",
      "monthsWord": "mesi",
      "daysWord": "giorni",
      "nextBirthday": "Prossimo compleanno",
      "turning": "compie",
      "inWord": "tra",
      "totalMonths": "Mesi totali",
      "totalWeeks": "Settimane totali",
      "totalDays": "Giorni totali",
      "totalHours": "Ore totali (circa)",
      "monthsAbbr": "mesi",
      "weeksAbbr": "sett.",
      "daysAbbr": "g",
      "hoursAbbr": "ore"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Sottopeso",
      "normalWeight": "Peso normale",
      "overweight": "Sovrappeso",
      "obesity": "Obesità",
      "errorHeightMetric": "Inserisci un’altezza tra 50 cm e 280 cm.",
      "errorWeightMetric": "Inserisci un peso tra 15 kg e 500 kg.",
      "errorHeightImperial": "Inserisci un’altezza valida tra 2 ft e 9 ft.",
      "errorWeightImperial": "Inserisci un peso tra 30 lbs e 1100 lbs.",
      "metricTab": "Metrico (cm / kg)",
      "imperialTab": "Imperiale (ft, in / lbs)",
      "heightCmLabel": "Altezza (cm)",
      "weightKgLabel": "Peso (kg)",
      "heightFtLabel": "Altezza (ft)",
      "heightInLabel": "Altezza (in)",
      "weightLbsLabel": "Peso (lbs)",
      "bmiLabel": "Indice di massa corporea (IMC)",
      "whoCategory": "Categoria OMS",
      "healthyRange": "Intervallo di peso sano secondo l’IMC (18.5–24.9)",
      "disclaimer": "L’IMC è un indice generale di screening e non distingue la massa muscolare dal grasso corporeo."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Inserisci un’età tra 15 e 100 anni.",
      "errorHeightMetric": "Inserisci un’altezza tra 100 cm e 250 cm.",
      "errorWeightMetric": "Inserisci un peso tra 30 kg e 350 kg.",
      "errorHeightImperial": "Inserisci un’altezza tra 3 ft 4 in e 8 ft 2 in.",
      "errorWeightImperial": "Inserisci un peso tra 66 lbs e 770 lbs.",
      "metricTab": "Metrico (cm / kg)",
      "imperialTab": "Imperiale (ft, in / lbs)",
      "maleTab": "Uomo",
      "femaleTab": "Donna",
      "ageLabel": "Età (anni)",
      "heightCmLabel": "Altezza (cm)",
      "weightKgLabel": "Peso (kg)",
      "heightFtLabel": "Altezza (ft)",
      "heightInLabel": "Altezza (in)",
      "weightLbsLabel": "Peso (lbs)",
      "activityLabel": "Livello di attività",
      "activitySedentary": "Sedentario (1.2×)",
      "activitySedentaryDetail": "Lavoro d’ufficio, poco o nessun esercizio",
      "activityLight": "Poco attivo (1.375×)",
      "activityLightDetail": "Esercizio leggero 1–3 giorni a settimana",
      "activityModerate": "Moderatamente attivo (1.55×)",
      "activityModerateDetail": "Esercizio moderato 3–5 giorni a settimana",
      "activityVery": "Molto attivo (1.725×)",
      "activityVeryDetail": "Esercizio intenso 6–7 giorni a settimana",
      "activityExtra": "Estremamente attivo (1.9×)",
      "activityExtraDetail": "Lavoro fisico o allenamento due volte al giorno",
      "maintenance": "Calorie di mantenimento (TDEE)",
      "mildLoss": "Perdita di peso moderata (-0.25 kg/sett.)",
      "mildLossNote": "Deficit giornaliero di ~250 kcal",
      "weightLoss": "Perdita di peso (-0.5 kg/sett.)",
      "weightLossNote": "Deficit giornaliero di ~500 kcal",
      "leanGain": "Aumento di peso magro",
      "leanGainNote": "Surplus giornaliero di +250 kcal",
      "macroHeading": "Ripartizione di riferimento dei macronutrienti per il mantenimento (30% proteine · 40% carboidrati · 30% grassi)",
      "protein": "Proteine",
      "carbs": "Carboidrati",
      "fat": "Grassi",
      "gramsPerDay": "g/giorno",
      "disclaimer": "Calcolato con l’equazione di Mifflin-St Jeor per il metabolismo basale. Il fabbisogno energetico individuale varia in base alla composizione corporea e al contesto medico; consulta un professionista sanitario qualificato prima di iniziare diete restrittive."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "Il deposito iniziale non può essere negativo.",
      "errorMonthly": "Il contributo mensile non può essere negativo.",
      "errorRate": "Il rendimento annuo deve essere tra 0% e 100%.",
      "errorYears": "L’orizzonte temporale deve essere tra 1 e 100 anni.",
      "initialLabel": "Capitale iniziale ($)",
      "monthlyLabel": "Versamento mensile ($)",
      "rateLabel": "Rendimento annuo (%)",
      "yearsLabel": "Anni",
      "compoundingLabel": "Capitalizzazione",
      "dailyOption": "Giornaliera (365/anno)",
      "monthlyOption": "Mensile (12/anno)",
      "quarterlyOption": "Trimestrale (4/anno)",
      "annualOption": "Annuale (1/anno)",
      "futureBalance": "Saldo futuro",
      "totalContributed": "Capitale totale + versamenti",
      "totalInterest": "Interessi composti totali",
      "yearHeader": "Anno",
      "totalContributedHeader": "Totale versato",
      "cumulativeInterestHeader": "Interessi cumulati",
      "endingBalanceHeader": "Saldo finale",
      "yearPrefix": "Anno"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "Inserisci un importo pari o superiore a 0.",
      "errorRate": "Inserisci un tasso di cambio positivo maggiore di 0.",
      "errorFee": "Inserisci una commissione di conversione tra 0% e 50%.",
      "fetchErrorWithMessage": "Impossibile recuperare il tasso esterno ({message}). Inserisci il tasso di cambio manualmente qui sopra.",
      "fetchErrorGeneric": "Impossibile raggiungere l’API dei tassi esterni. Inserisci il tasso di cambio manualmente qui sopra.",
      "fetchErrorNoPair": "La coppia di valute selezionata non è stata restituita dall’API di riferimento.",
      "currencyNames": {
        "USD": "Dollaro statunitense",
        "EUR": "Euro",
        "GBP": "Sterlina britannica",
        "JPY": "Yen giapponese",
        "CAD": "Dollaro canadese",
        "AUD": "Dollaro australiano",
        "CHF": "Franco svizzero",
        "INR": "Rupia indiana",
        "SGD": "Dollaro di Singapore",
        "NZD": "Dollaro neozelandese",
        "MXN": "Peso messicano",
        "CNY": "Yuan cinese"
      },
      "rateSourceManualDefault": "Tasso inserito manualmente dall’utente (predefinito offline)",
      "rateSourceManual": "Tasso inserito manualmente dall’utente",
      "rateSourceIdentity": "Tasso identità (1.0000) per valute uguali",
      "rateSourceEcb": "Tasso di riferimento esterno BCE tramite API Frankfurter (data: {date})",
      "rateSourceInverted": "Invertito dal tasso precedente",
      "disclosureTitle": "Informativa sulla fonte del tasso:",
      "disclosureBody": "I tassi di cambio di mercato in tempo reale non vengono mai inventati offline. Inserisci manualmente il tasso di cambio quotato esatto oppure fai clic su",
      "disclosureBodyAfter": "per richiedere un tasso di riferimento all’API esterna Frankfurter.",
      "activeRateSource": "Fonte del tasso attiva:",
      "amountLabel": "Importo",
      "fromLabel": "Valuta di partenza",
      "toLabel": "Valuta di destinazione",
      "swapAria": "Inverti le valute",
      "swapTitle": "Inverti le valute e il tasso",
      "rateLabel": "Tasso di cambio",
      "feeLabel": "Commissione banca / carta (%)",
      "fetchButton": "Recupera tasso di riferimento BCE",
      "fetchingButton": "Recupero del tasso BCE in corso...",
      "netConverted": "Importo netto convertito",
      "grossBeforeFee": "Lordo prima della commissione",
      "feeLabelShort": "Commissione",
      "inverseRate": "Tasso di cambio inverso",
      "perOne": "per 1",
      "amountHeaderSuffix": "Importo",
      "netHeaderPrefix": "Netto",
      "netHeaderSuffix": "(al tasso e alla commissione inseriti)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Seleziona date di inizio e fine valide.",
      "errorInvalidBase": "Inserisci una data di inizio valida.",
      "errorNonNegative": "Inserisci numeri interi non negativi per anni, mesi e giorni.",
      "differenceTab": "Differenza tra date",
      "addSubtractTab": "Aggiungi / sottrai tempo",
      "startLabel": "Data di inizio",
      "endLabel": "Data di fine",
      "swapTitle": "Inverti le date",
      "swapAria": "Inverti la data di inizio e di fine",
      "includeEnd": "Includi la data di fine nel conteggio (+1 giorno di calendario)",
      "calendarDuration": "Durata di calendario",
      "reversedRange": "(Intervallo invertito)",
      "totalSpan": "Intervallo totale:",
      "calendarDays": "giorni di calendario",
      "weeksDays": "Settimane e giorni",
      "weekdays": "Giorni feriali (lun–ven)",
      "weekendDays": "Giorni del fine settimana (sab–dom)",
      "totalHours": "Ore totali",
      "yearsWord": "anni",
      "monthsWord": "mesi",
      "daysWord": "giorni",
      "weeksAbbr": "sett.",
      "daysAbbr": "g",
      "hoursAbbr": "ore",
      "referenceLabel": "Data di riferimento",
      "operationLabel": "Operazione",
      "addOption": "Aggiungi (+)",
      "subtractOption": "Sottrai (-)",
      "yearsLabel": "Anni",
      "monthsLabel": "Mesi",
      "daysLabel": "Giorni",
      "resultingDate": "Data di calendario risultante",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "Il prezzo originale non può essere negativo.",
      "errorDiscount": "Lo sconto deve essere tra 0% e 100%.",
      "errorTax": "L’imposta sulle vendite deve essere tra 0% e 100%.",
      "errorCost": "Il costo non può essere negativo.",
      "errorSelling": "Il prezzo di vendita deve essere maggiore di 0.",
      "discountTab": "Sconto in saldo",
      "marginTab": "Margine di profitto e ricarico",
      "originalPriceLabel": "Prezzo originale ($)",
      "discountLabel": "Sconto (%)",
      "salesTaxLabel": "Imposta sulle vendite (%)",
      "costLabel": "Costo unitario ($)",
      "sellingLabel": "Prezzo di vendita ($)",
      "finalPrice": "Prezzo finale",
      "beforeTax": "Prima delle imposte:",
      "youSave": "Risparmi",
      "taxAdded": "Imposta aggiunta",
      "grossProfit": "Profitto lordo",
      "profitMargin": "Margine di profitto",
      "profitDivSelling": "(Profitto ÷ prezzo di vendita)",
      "markup": "Ricarico",
      "profitDivCost": "(Profitto ÷ costo)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Inserisci un capitale del prestito maggiore di 0.",
      "errorRate": "Inserisci un tasso di interesse annuo tra 0% e 100%.",
      "errorDuration": "La durata del prestito deve essere tra 1 e 600 mesi.",
      "principalLabel": "Capitale del prestito ($)",
      "rateLabel": "Tasso di interesse annuo (% TAEG)",
      "termLabel": "Durata del prestito",
      "termUnitAria": "Unità di durata del prestito",
      "yearsOption": "Anni",
      "monthsOption": "Mesi",
      "monthlyPayment": "Rata mensile (EMI)",
      "forPrefix": "per",
      "monthlyPayments": "rate mensili",
      "totalInterest": "Interessi totali",
      "ofTotalCost": "del costo totale",
      "totalRepayment": "Rimborso totale",
      "principalWord": "capitale",
      "principalLabelShort": "Capitale",
      "interestLabelShort": "Interessi",
      "showSchedule": "Mostra piano di ammortamento",
      "hideSchedule": "Nascondi piano di ammortamento",
      "monthHeader": "Mese",
      "paymentHeader": "Rata",
      "principalHeader": "Capitale",
      "interestHeader": "Interessi",
      "balanceHeader": "Saldo"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "Il prezzo della casa deve essere maggiore di 0.",
      "errorDownPayment": "La percentuale dell’anticipo deve essere tra 0% e 99.9%.",
      "errorRate": "Il tasso di interesse deve essere tra 0% e 50%.",
      "errorTerm": "La durata del prestito deve essere tra 1 e 50 anni.",
      "homePriceLabel": "Prezzo della casa ($)",
      "downPaymentLabel": "Anticipo (%)",
      "rateLabel": "Tasso di interesse (% TAEG)",
      "termLabel": "Durata del prestito (anni)",
      "yearsWord": "Anni",
      "taxLabel": "Imposta sulla proprietà ($ / anno)",
      "insuranceLabel": "Assicurazione casa ($ / anno)",
      "hoaLabel": "Spese condominiali HOA ($ / mese)",
      "estimatedMonthly": "Rata mensile stimata",
      "loanAmount": "Importo del prestito",
      "downPayment": "Anticipo",
      "lifetimeInterest": "Interessi totali",
      "breakdownHeading": "Dettaglio della rata mensile",
      "principalInterest": "Capitale e interessi (P&I)",
      "propertyTaxes": "Imposte sulla proprietà",
      "homeownersInsurance": "Assicurazione casa",
      "hoaDues": "Spese HOA",
      "pmiLabel": "PMI stimata (0.5%/anno con anticipo < 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Inserisci numeri validi.",
      "errorTotalZero": "Il totale (Y) non può essere 0.",
      "errorStartZero": "Il valore iniziale non può essere 0.",
      "heading1": "1. Percentuale di un numero",
      "heading2": "2. Parte come percentuale del totale",
      "heading3": "3. Aumento o diminuzione percentuale",
      "whatIs": "Quanto è",
      "percentOf": "% di",
      "isWhatPercentOf": "è che % di",
      "fromWord": "Da",
      "toWord": "a",
      "result": "Risultato:",
      "change": "Variazione:",
      "formula": "Formula",
      "difference": "Differenza",
      "ariaPctX": "Percentuale X",
      "ariaBaseY": "Numero base Y",
      "ariaPartX": "Valore parziale X",
      "ariaWholeY": "Valore totale Y",
      "ariaInitialA": "Valore iniziale A",
      "ariaFinalB": "Valore finale B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "L’importo della retribuzione non può essere negativo.",
      "errorHours": "Le ore settimanali devono essere tra 1 e 168.",
      "errorWeeks": "Le settimane all’anno devono essere tra 1 e 52.",
      "errorTax": "L’aliquota fiscale effettiva deve essere tra 0% e 99%.",
      "amountLabel": "Importo della retribuzione ($)",
      "frequencyLabel": "Frequenza",
      "hourlyOption": "Oraria",
      "dailyOption": "Giornaliera",
      "weeklyOption": "Settimanale",
      "biweeklyOption": "Quindicinale",
      "monthlyOption": "Mensile",
      "annualOption": "Annuale",
      "hoursLabel": "Ore / settimana",
      "weeksLabel": "Settimane / anno",
      "taxLabel": "Aliquota fiscale stimata (%)",
      "rowHourly": "Oraria",
      "rowDaily": "Giornaliera (settimana di 5 giorni)",
      "rowWeekly": "Settimanale",
      "rowBiweekly": "Quindicinale",
      "rowMonthly": "Mensile",
      "rowAnnual": "Annuale",
      "payPeriodHeader": "Periodo di paga",
      "grossPayHeader": "Retribuzione lorda",
      "estNetPay": "Retribuzione netta stimata",
      "taxWord": "imposte"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Inserisci orari di inizio e fine validi.",
      "errorBreakRange": "Inserisci una pausa tra 0 e 1.440 minuti.",
      "errorEndEarlier": "L’orario di fine è precedente a quello di inizio. Attiva il passaggio alla notte se l’intervallo supera la mezzanotte.",
      "errorBreakExceeds": "La pausa supera il tempo totale trascorso.",
      "errorSumFields": "Tutti i campi di durata devono essere numeri non negativi.",
      "betweenTab": "Tempo trascorso tra orari",
      "sumTab": "Somma durate del foglio presenze",
      "startLabel": "Ora di inizio",
      "endLabel": "Ora di fine",
      "breakLabel": "Pausa non retribuita (min)",
      "overnightLabel": "Considera un orario di fine precedente a quello di inizio come giorno successivo (turno di notte)",
      "netDuration": "Durata netta",
      "overnightTag": "(Di notte)",
      "decimalHours": "Ore decimali",
      "totalMinutes": "Minuti totali",
      "totalSeconds": "Secondi totali",
      "hoursAbbr": "ore",
      "minutesAbbr": "min",
      "secondsAbbr": "sec",
      "labelHeader": "Etichetta",
      "hoursHeader": "Ore",
      "minutesHeader": "Minuti",
      "secondsHeader": "Secondi",
      "removeButton": "Rimuovi",
      "removeAria": "Rimuovi",
      "addRowButton": "Aggiungi riga di durata",
      "morningSession": "Sessione mattutina",
      "afternoonSession": "Sessione pomeridiana",
      "segmentPrefix": "Segmento",
      "combinedTime": "Tempo combinato (HH:MM:SS)",
      "dayEquivalent": "Giorni da 24 ore",
      "daysAbbr": "g"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "L’importo del conto non può essere negativo.",
      "errorTip": "La percentuale di mancia deve essere tra 0% e 200%.",
      "errorPeople": "Il numero di persone deve essere tra 1 e 100.",
      "billLabel": "Subtotale del conto ($)",
      "tipLabel": "Percentuale di mancia (%)",
      "peopleLabel": "Dividi tra (persone)",
      "presetsLabel": "Mance predefinite:",
      "roundingLabel": "Arrotondamento:",
      "exactOption": "Centesimi esatti",
      "totalUpOption": "Arrotonda il totale per eccesso ($)",
      "perPersonUpOption": "Arrotonda la quota a persona per eccesso ($)",
      "perPersonTotal": "Totale a persona",
      "includes": "Include",
      "tipEach": "di mancia a persona",
      "totalTip": "Mancia totale",
      "effectiveRate": "Aliquota effettiva:",
      "totalBill": "Conto totale"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Inserisci un valore numerico valido da convertire.",
      "errorAbsoluteZero": "La temperatura non può scendere sotto lo zero assoluto (-273.15 °C / 0 K).",
      "categoryNames": {
        "length": "Lunghezza",
        "weight": "Peso e massa",
        "temperature": "Temperatura",
        "area": "Area",
        "volume": "Volume",
        "speed": "Velocità",
        "storage": "Memoria digitale"
      },
      "unitLabels": {
        "mm": "Millimetro",
        "cm": "Centimetro",
        "m": "Metro",
        "km": "Chilometro",
        "in": "Pollice",
        "ft": "Piede",
        "yd": "Iarda",
        "mi": "Miglio",
        "mg": "Milligrammo",
        "g": "Grammo",
        "kg": "Chilogrammo",
        "t": "Tonnellata",
        "oz": "Oncia",
        "lb": "Libbra",
        "st": "Stone",
        "C": "Celsius",
        "F": "Fahrenheit",
        "K": "Kelvin",
        "cm2": "Centimetro quadrato",
        "m2": "Metro quadrato",
        "ha": "Ettaro",
        "km2": "Chilometro quadrato",
        "ft2": "Piede quadrato",
        "yd2": "Iarda quadrata",
        "acre": "Acro",
        "mi2": "Miglio quadrato",
        "mL": "Millilitro",
        "L": "Litro",
        "m3": "Metro cubo",
        "floz": "Oncia fluida (USA)",
        "cup": "Tazza (USA)",
        "pt": "Pinta (USA)",
        "qt": "Quarto (USA)",
        "gal": "Gallone (USA)",
        "ms": "Metri / secondo",
        "kmh": "Chilometri / ora",
        "mph": "Miglia / ora",
        "knot": "Nodo",
        "fts": "Piedi / secondo",
        "B": "Byte",
        "KB": "Kilobyte (10³)",
        "MB": "Megabyte (10⁶)",
        "GB": "Gigabyte (10⁹)",
        "TB": "Terabyte (10¹²)",
        "KiB": "Kibibyte (2¹⁰)",
        "MiB": "Mebibyte (2²⁰)",
        "GiB": "Gibibyte (2³⁰)"
      },
      "valueLabel": "Valore",
      "fromLabel": "Da unità",
      "toLabel": "A unità",
      "swapAria": "Inverti le unità",
      "swapTitle": "Inverti le unità",
      "toWord": "in",
      "copyResult": "Copia risultato",
      "unitHeader": "Unità",
      "symbolHeader": "Simbolo",
      "equivalentHeader": "Valore equivalente"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "L’importo non può essere negativo.",
      "errorRate": "L’aliquota fiscale deve essere tra 0% e 100%.",
      "addTab": "Aggiungi imposta (netto → lordo)",
      "removeTab": "Scorpora imposta (lordo → netto)",
      "commonRates": "Aliquote comuni:",
      "netAmountLabel": "Importo netto (imposta esclusa) ($)",
      "grossAmountLabel": "Importo lordo (imposta inclusa) ($)",
      "rateLabel": "Aliquota IVA / imposta sulle vendite (%)",
      "netPrice": "Prezzo netto (imposta escl.)",
      "taxAmount": "Importo imposta",
      "grossPrice": "Prezzo lordo (imposta incl.)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Codifica in Base64",
      "decodeTab": "Decodifica Base64",
      "urlSafe": "URL-safe (- e _)",
      "omitPadding": "Ometti il padding = finale",
      "swap": "Scambia",
      "decodeError": "Errore di decodifica:",
      "inputLabelEncode": "Testo in chiaro (UTF-8)",
      "inputLabelDecode": "Stringa Base64",
      "inputPlaceholderEncode": "Inserisci testo o JSON da codificare...",
      "inputPlaceholderDecode": "Incolla una stringa Base64 standard o URL-safe...",
      "outputLabelEncode": "Output Base64",
      "outputLabelDecode": "Testo decodificato",
      "outputPlaceholder": "L'output convertito apparirà qui...",
      "copyOutput": "Copia l'output",
      "invalidLength": "Lunghezza della stringa Base64 non valida.",
      "invalidInput": "Input Base64 non valido o sequenza di byte UTF-8 malformata."
    },
    "tables": {
      "samplePlain": "UtilityFlow: codifica Base64 sicura con UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Scegli il colore",
      "colorPickerAria": "Selettore di colore",
      "copyHex": "Copia HEX",
      "copyRgb": "Copia RGB",
      "copyHsl": "Copia HSL",
      "contrastTitle": "Verifica del rapporto di contrasto WCAG 2.1",
      "contrastDesc": "Anteprima del colore di primo piano ({color}) su qualsiasi colore di sfondo.",
      "backgroundLabel": "Sfondo:",
      "bgAria": "Colore di sfondo per il contrasto",
      "sampleTitle": "Testo di esempio per corpo e interfaccia",
      "sampleSentence": "La rapida volpe marrone salta sopra il cane pigro.",
      "aaNormal": "AA Testo normale (≥ 4,5:1)",
      "aaaNormal": "AAA Testo normale (≥ 7,0:1)",
      "aaLarge": "AA Testo grande (≥ 3,0:1)",
      "pass": "Superato",
      "fail": "Non superato"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Espressione cron a 5 campi",
      "copyCron": "Copia cron",
      "humanTitle": "Pianificazione in linguaggio semplice",
      "breakdownTitle": "Dettaglio per campo",
      "fieldMinute": "Minuto (0–59)",
      "fieldHour": "Ora (0–23)",
      "fieldDom": "Giorno del mese (1–31)",
      "fieldMonth": "Mese (1–12)",
      "fieldDow": "Giorno della settimana (0–6)",
      "nextRuns": "Prossime {count} esecuzioni programmate (ora locale)",
      "noRuns": "Nessuna esecuzione corrispondente trovata nei prossimi 366 giorni.",
      "fieldsError": "Il cron standard prevede 5 campi (minuto ora giorno-del-mese mese giorno-della-settimana). Trovati: {count}.",
      "emptySegment": "Segmento vuoto in \"{token}\"",
      "invalidStep": "Passo non valido \"{step}\" in \"{token}\"",
      "outOfRange": "Valore fuori intervallo ({min}–{max}) in \"{token}\"",
      "invalidCron": "Espressione cron non valida.",
      "everyMinutes": "Ogni {n} minuti",
      "minuteZeroHour": "Al minuto 0 di ogni ora",
      "atTime": "Alle {time}",
      "atFields": "Alle {a}, {b}",
      "dayEveryDay": "ogni giorno",
      "dayWeekdays": "nei giorni feriali (lunedì–venerdì)",
      "dayOfMonth": "il giorno {day} del mese",
      "dayDow": "il {dow}",
      "dayBoth": "il giorno {day} o il {dow}",
      "monthIn": " in {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "Ogni 5 minuti",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Ogni ora",
          "expr": "0 * * * *"
        },
        {
          "label": "Ogni giorno a mezzanotte",
          "expr": "0 0 * * *"
        },
        {
          "label": "Nei giorni feriali alle 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "Il 1° del mese alle 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "domenica",
        "lunedì",
        "martedì",
        "mercoledì",
        "giovedì",
        "venerdì",
        "sabato"
      ],
      "monthLabels": [
        "",
        "gennaio",
        "febbraio",
        "marzo",
        "aprile",
        "maggio",
        "giugno",
        "luglio",
        "agosto",
        "settembre",
        "ottobre",
        "novembre",
        "dicembre"
      ],
      "unitWords": {
        "minute": "minuto",
        "hour": "ora",
        "day": "giorno",
        "month": "mese",
        "weekday": "giorno della settimana"
      },
      "unitPlurals": {
        "minute": "minuti",
        "hour": "ore",
        "day": "giorni",
        "month": "mesi",
        "weekday": "giorni della settimana"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "Minimizza CSS",
      "beautifyTab": "Formatta CSS",
      "inputLabel": "CSS di input",
      "bytesLabel": "byte",
      "inputPlaceholder": "Incolla qui regole o fogli di stile CSS...",
      "outputLabelMinify": "CSS minimizzato",
      "outputLabelBeautify": "CSS formattato",
      "outputPlaceholder": "Il CSS elaborato apparirà qui...",
      "copyCss": "Copia CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Input di testo",
      "fileTab": "Checksum del file locale",
      "uppercaseHex": "Esadecimale maiuscolo",
      "inputLabel": "Stringa di input (UTF-8)",
      "inputPlaceholder": "Inserisci il testo per calcolare gli hash SHA-1, SHA-256, SHA-384 e SHA-512...",
      "chooseFileLabel": "Scegli un file locale da elaborare",
      "fileNoteDefault": "Il file viene letto localmente nella memoria del browser e non viene mai caricato.",
      "bytesLabel": "byte",
      "cryptoUnavailable": "La funzione di hashing Web Crypto non è disponibile.",
      "sampleText": "Ciao, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Codifica entità",
      "decodeTab": "Decodifica entità",
      "encodeNonAscii": "Codifica i simboli non ASCII (&#...;)",
      "swap": "Scambia",
      "inputLabelEncode": "HTML grezzo / Testo",
      "inputLabelDecode": "Stringa con codifica HTML",
      "inputPlaceholderEncode": "<p>Inserisci tag HTML o caratteri speciali...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Incolla le entità codificate...&lt;/p&gt;",
      "outputLabelEncode": "Entità codificate",
      "outputLabelDecode": "Testo decodificato",
      "outputPlaceholder": "Le entità convertite appariranno qui..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "Minimizza JS",
      "beautifyTab": "Formatta JS",
      "indentLabel": "Rientro:",
      "indent2": "2 spazi",
      "indent4": "4 spazi",
      "inputLabel": "Input JavaScript / TypeScript",
      "bytesLabel": "byte",
      "inputPlaceholder": "Incolla uno snippet JavaScript o TypeScript...",
      "outputLabelMinify": "Output minimizzato",
      "outputLabelBeautify": "Output formattato",
      "outputPlaceholder": "Il JavaScript formattato apparirà qui...",
      "copyCode": "Copia codice"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Delimitatore:",
      "commaOpt": "Virgola (,)",
      "semicolonOpt": "Punto e virgola (;)",
      "tabOpt": "Tab (TSV)",
      "conversionError": "Errore di conversione:",
      "inputLabelJson": "Input JSON",
      "inputLabelCsv": "Input CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Esempio\"}]",
      "inputPlaceholderCsv": "id,name\n1,Esempio",
      "outputLabelCsv": "Output CSV",
      "outputLabelJson": "Output JSON",
      "outputPlaceholder": "I dati convertiti appariranno qui...",
      "parseFallback": "Impossibile analizzare il formato di input."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 spazi",
      "indent4": "4 spazi",
      "indentTab": "Tab",
      "indentMinify": "Minimizza",
      "sortKeys": "Ordina le chiavi A–Z",
      "validJson": "JSON valido",
      "keysLabel": "chiavi",
      "depthLabel": "profondità",
      "bytesLabel": "byte",
      "invalidJson": "JSON non valido:",
      "invalidJsonSyntax": "Sintassi JSON non valida",
      "lineCol": "Riga {line}, colonna {col}",
      "inputLabel": "Input JSON grezzo",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "Output formattato",
      "outputPlaceholder": "Il JSON formattato e convalidato apparirà qui...",
      "copyJson": "Copia JSON"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Decodifica header e payload Base64Url localmente nella memoria del browser. Non verifica le firme crittografiche.",
      "loadSampleJwt": "Carica un JWT di esempio",
      "inputLabel": "Token JWT codificato",
      "inputPlaceholder": "Incolla un token JWT (eyJhbGciOi...) per ispezionarne header e claim...",
      "invalidJwt": "JWT non valido:",
      "headerLabel": "Header (algoritmo e tipo)",
      "payloadLabel": "Payload (claim)",
      "copyHeader": "Copia l'header",
      "copyPayload": "Copia il payload",
      "timestampTitle": "Claim di marca temporale",
      "iatLabel": "Emesso il (iat)",
      "nbfLabel": "Valido da (nbf)",
      "expLabel": "Scade il (exp)",
      "expired": "Scaduto",
      "active": "Attivo (non ancora scaduto)",
      "signatureLabel": "Segmento della firma (Base64Url)",
      "invalidB64Url": "Lunghezza del segmento Base64Url non valida.",
      "segmentCount": "Previsti 3 segmenti JWT separati da punti (header.payload.signature), trovati {count}.",
      "parseFallback": "Impossibile analizzare i segmenti JSON Base64Url del JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Pattern di espressione regolare",
      "patternPlaceholder": "Inserisci il pattern regex...",
      "flagsLabel": "Flag:",
      "syntaxError": "Errore di sintassi:",
      "testStringLabel": "Stringa di test",
      "testPlaceholder": "Incolla il testo di esempio da testare con il pattern...",
      "highlightedMatches": "Corrispondenze evidenziate",
      "matchSingular": "corrispondenza",
      "matchPlural": "corrispondenze",
      "highlightEmpty": "Le corrispondenze verranno evidenziate qui in tempo reale...",
      "capturedTitle": "Corrispondenze acquisite",
      "matchLabel": "Corrispondenza",
      "indexLabel": "indice",
      "groupsLabel": "Gruppi:",
      "noMatches": "Nessuna corrispondenza trovata.",
      "replaceLabel": "Anteprima del modello di sostituzione",
      "replacePlaceholder": "es. $1 [at] $2",
      "invalidRegex": "Espressione regolare non valida."
    },
    "tables": {
      "sampleText": "Contatto principale: support@utilityflow.online\nTeam di fatturazione: billing@example.org\nEmail non valida: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (global)"
        },
        {
          "flag": "i",
          "label": "i (ignora maiuscole/minuscole)"
        },
        {
          "flag": "m",
          "label": "m (multilinea)"
        },
        {
          "flag": "s",
          "label": "s (dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "Formatta",
      "minify": "Minimizza",
      "uppercaseKw": "Parole chiave MAIUSCOLE",
      "lowercaseKw": "minuscole",
      "indentLabel": "Rientro:",
      "indent2": "2 spazi",
      "indent4": "4 spazi",
      "inputLabel": "Query SQL grezza",
      "inputPlaceholder": "Incolla una query SQL (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "SQL formattato",
      "outputPlaceholder": "L'SQL formattato apparirà qui...",
      "copySql": "Copia SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Timestamp Unix corrente (secondi)",
      "useCurrent": "Usa l'ora corrente",
      "copyEpoch": "Copia l'epoch",
      "converter1Label": "Timestamp Unix → data leggibile",
      "epochPlaceholder": "es. 1794544800",
      "unitAuto": "auto",
      "unitSeconds": "secondi",
      "unitMilliseconds": "millisecondi",
      "errorNotNumeric": "Inserisci un timestamp Unix numerico valido.",
      "errorOutOfRange": "Il timestamp è fuori dall'intervallo valido per Date in JavaScript.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Fuso orario locale",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Relativo",
      "converter2Label": "Data e ora locali → timestamp Unix",
      "secondsLabel": "Secondi",
      "millisecondsLabel": "Millisecondi",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Codifica",
      "decode": "Decodifica",
      "encodeUriPreserve": "encodeURI (mantieni ://?&)",
      "swap": "Scambia",
      "urlError": "Errore URL:",
      "inputLabel": "Stringa di input o URL",
      "inputPlaceholder": "Incolla URL, stringa di query o valore di parametro...",
      "outputLabelEncode": "Output codificato",
      "outputLabelDecode": "Output decodificato",
      "outputPlaceholder": "L'URL codificato o decodificato apparirà qui...",
      "parsedTitle": "Dettaglio dell'URL analizzato",
      "protocol": "Protocollo",
      "host": "Host",
      "pathname": "Percorso",
      "hash": "Hash",
      "noneValue": "(nessuno)",
      "queryParam": "Parametro di query",
      "decodedValue": "Valore decodificato",
      "malformed": "Sequenza di codifica percentuale malformata."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "Versione UUID",
      "v4": "v4 (casuale)",
      "v7": "v7 (ordinata per tempo)",
      "quantity": "Quantità (1–100)",
      "generate": "Genera UUID",
      "uppercase": "Maiuscolo",
      "includeHyphens": "Includi i trattini",
      "wrapBraces": "Racchiudi tra {parentesi graffe}",
      "generatedLabel": "UUID generati",
      "copyAll": "Copia tutto"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Indaco su bianco",
      "presetSlate": "Inchiostro ardesia",
      "presetEmerald": "Badge smeraldo",
      "presetDark": "Modalità scura",
      "swapColors": "Inverti colori",
      "fgTitle": "Colore primo piano / testo",
      "bgTitle": "Colore di sfondo",
      "copyHex": "Copia HEX",
      "pickerSuffix": "selettore",
      "hexInputSuffix": "input HEX",
      "contrastRatioLabel": "Rapporto di contrasto WCAG 2.1",
      "checkAaNormal": "WCAG AA testo normale",
      "checkAaLarge": "WCAG AA testo grande / UI",
      "checkAaaNormal": "WCAG AAA testo normale",
      "checkAaaLarge": "WCAG AAA testo grande",
      "pass": "SUPERATO",
      "fail": "NON SUPERATO",
      "livePreviewLabel": "Anteprima accessibilità in tempo reale",
      "previewHeading": "Una tipografia chiara resta facile da leggere a qualsiasi dimensione di viewport.",
      "previewBody": "Il testo normale (14–16 px) richiede un rapporto di contrasto di almeno 4,5:1 per il livello WCAG AA e 7,0:1 per il livello AAA. Le intestazioni grandi (18 pt+ o grassetto 14 pt+) richiedono almeno 3,0:1.",
      "outlinedControl": "Controllo UI con contorno",
      "hexOnHex": "{fg} su {bg}",
      "extractTitle": "Estrai la tavolozza dei colori da un file immagine",
      "extractBody": "Carica uno screenshot, un logo o una foto per importare le tonalità HEX dominanti direttamente nel controllo di contrasto.",
      "appliesToLabel": "Il clic sul campione si applica a:",
      "foregroundBtn": "Primo piano",
      "backgroundBtn": "Sfondo",
      "selectImage": "Seleziona un file immagine per estrarre i campioni",
      "loadedReplace": "Caricato: {name} (carica un altro file)",
      "selectImageError": "Seleziona un file immagine PNG, JPG, WebP o GIF.",
      "unableToRead": "Impossibile leggere \"{name}\".",
      "canvasUnavailable": "Contesto Canvas 2D non disponibile.",
      "transparentImage": "Il file immagine sembra completamente trasparente.",
      "unableToExtract": "Impossibile estrarre la tavolozza.",
      "areaPercent": "~{n}% area"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 scheda browser",
        "taskbar": "32×32 barra delle applicazioni / HiDPI",
        "desktopShortcut": "48×48 collegamento desktop",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 schermata PWA"
      },
      "monogramMode": "Creatore di badge con monogramma",
      "imageMode": "Carica immagine logo",
      "lettersLabel": "Testo / iniziali (1–3 caratteri)",
      "cornerShapeLabel": "Forma degli angoli",
      "roundedSquare": "Quadrato arrotondato",
      "circle": "Cerchio",
      "sharpSquare": "Quadrato netto",
      "square": "Quadrato",
      "bgColorLabel": "Colore di sfondo",
      "textColorLabel": "Colore testo",
      "chooseLogo": "Scegli un logo PNG, JPG, WebP o SVG",
      "loadedReplace": "Caricato: {name} (fai clic per sostituire)",
      "cropMaskLabel": "Maschera di ritaglio",
      "unableToRead": "Impossibile leggere \"{name}\".",
      "canvasUnavailable": "Contesto Canvas 2D non disponibile.",
      "failedEncode": "Codifica del PNG favicon non riuscita.",
      "unableToGenerate": "Impossibile generare le favicon.",
      "icoBundleTitle": "Pacchetto favicon.ico multi-dimensione (16 px + 32 px + 48 px)",
      "icoBundleBody": "File .ico binario conforme agli standard, pronto per la cartella radice /public/ del sito",
      "downloadIco": "Scarica favicon.ico",
      "faviconPreviewAlt": "Anteprima favicon 32×32",
      "iconAlt": "Icona {size}×{size}",
      "htmlTagsLabel": "Tag link <head> HTML",
      "copyHtml": "Copia HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Scegli un file qualsiasi per calcolare checksum crittografici",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Hash calcolato in locale con Web Crypto API · Nessun caricamento di file (consigliato sotto 500 MB)",
      "cryptoUnavailable": "La Web Crypto SubtleCrypto API non è disponibile in questo contesto browser.",
      "hashFailed": "Calcolo hash del file nella memoria del browser non riuscito (i file di diverse centinaia di MB possono superare i limiti di RAM).",
      "computing": "Calcolo locale dei checksum SHA-1, SHA-256, SHA-384 e SHA-512...",
      "fileLabel": "File:",
      "sizeLabel": "Dimensione:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Modificato:",
      "bytesSuffix": "{n} byte",
      "downloadSha256": "Scarica .sha256",
      "sha256Label": "SHA-256 (consigliato)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (solo compatibilità legacy)",
      "verifyLabel": "Verifica con il checksum atteso",
      "expectedPlaceholder": "Incolla il checksum SHA-256, SHA-512, SHA-384 o SHA-1 pubblicato (o una riga .sha256sum)...",
      "verified": "Checksum verificato! Il file corrisponde esattamente al digest {algorithm} atteso.",
      "mismatch": "Checksum non corrispondente! Nessuno dei digest calcolati corrisponde al valore atteso."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Scegli un file immagine da comprimere (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Elaborato in locale con HTML5 Canvas · Mai caricato su server remoti",
      "uploadImageError": "Carica un file immagine PNG, JPG, WebP o GIF.",
      "unableToDecode": "Impossibile decodificare \"{name}\".",
      "canvasUnavailable": "Contesto Canvas 2D non disponibile.",
      "compressionFailed": "Compressione non riuscita nel canvas del browser.",
      "unableToCompress": "Impossibile comprimere il file immagine.",
      "unableToRead": "Impossibile leggere \"{name}\".",
      "invalidImage": "File immagine non valido.",
      "outputFormatLabel": "Formato di output",
      "webpOption": "WebP (dimensione web moderna più piccola)",
      "jpgOption": "JPG (compatibilità più ampia)",
      "pngOption": "PNG (trasparenza senza perdita)",
      "maxWidthLabel": "Larghezza massima",
      "keepOriginalWidth": "Mantieni larghezza originale",
      "max1920": "Max 1920 px (Full HD)",
      "max1280": "Max 1280 px (Blog / Hero)",
      "max800": "Max 800 px (miniature)",
      "qualityLabel": "Qualità: ",
      "losslessPng": "PNG senza perdita",
      "originalLabel": "Originale",
      "compressedLabel": "Compressa",
      "changeLabel": "Variazione",
      "outputSummary": "Output: {w} × {h} px · {ext}",
      "compressing": "Compressione...",
      "downloadExt": "Scarica .{ext}",
      "previewAlt": "Anteprima del file immagine compresso"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Seleziona una o più immagini da convertire",
      "imagesLoaded": "{n} immagine/i caricata/e — fai clic per aggiungere o sostituire",
      "batchNote": "Converti in batch PNG, JPG, WebP, SVG o GIF in PNG, JPG o WebP in locale",
      "convertToLabel": "Converti in formato",
      "pngOption": "PNG (.png — preserva la trasparenza)",
      "qualityLabel": "Qualità con perdita: ",
      "lossless": "Senza perdita",
      "alphaFillLabel": "Riempimento alfa",
      "converting": "Conversione...",
      "reconvert": "Riconverti",
      "selectFilesError": "Seleziona uno o più file immagine (PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "Impossibile decodificare \"{name}\".",
      "canvasUnavailable": "Canvas 2D non disponibile.",
      "conversionFailed": "Conversione di \"{name}\" non riuscita.",
      "batchFailed": "Conversione in batch delle immagini non riuscita.",
      "downloadExt": "Scarica .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Scegli un file immagine da ridimensionare o ritagliare a dimensioni predefinite",
      "fileWithDims": "{name} (Originale: {w} × {h} px)",
      "supportsNote": "Supporta ridimensionamento in pixel, blocco delle proporzioni e preset social con ritaglio centrale",
      "selectImageError": "Seleziona un file immagine PNG, JPG, WebP o GIF.",
      "unableToDecode": "Impossibile decodificare \"{name}\".",
      "unableToRead": "Impossibile leggere il file immagine.",
      "failedLoading": "Caricamento del file immagine per il ridimensionamento non riuscito.",
      "canvasUnavailable": "Canvas 2D non disponibile.",
      "failedGenerating": "Generazione del file immagine ridimensionato non riuscita.",
      "resizeFailed": "Ridimensionamento non riuscito.",
      "quickPresets": "Preset rapidi:",
      "presetOg": "Condivisione OG (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Quadrato (1080×1080)",
      "presetAvatar": "Avatar (512×512)",
      "widthLabel": "Larghezza (px)",
      "heightLabel": "Altezza (px)",
      "fitModeLabel": "Modalità di adattamento",
      "coverCropOption": "Ritaglio centrale cover (senza distorsione)",
      "exactOption": "Scala a dimensioni esatte",
      "outputFormatLabel": "Formato di output",
      "lockAspect": "Blocca le proporzioni originali quando inserisci le dimensioni",
      "resizeButton": "Ridimensiona a {w} × {h} px",
      "readySummary": "Pronto: {w} × {h} px ({ext})",
      "downloadResized": "Scarica il file ridimensionato .{ext}",
      "previewAlt": "Output del file immagine ridimensionato"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Scegli un file immagine da ruotare, capovolgere o filtrare",
      "loadedReplace": "{name} (fai clic per sostituire)",
      "previewNote": "Anteprima HTML5 Canvas in tempo reale ed esportazione pixel",
      "selectImageError": "Seleziona un file immagine PNG, JPG, WebP o GIF.",
      "failedLoading": "Caricamento di \"{name}\" non riuscito.",
      "rotateLeft": "Ruota di 90° a sinistra",
      "rotateRight": "Ruota di 90° a destra",
      "flipHorizontal": "Capovolgi orizzontalmente",
      "flipVertical": "Capovolgi verticalmente",
      "brightnessLabel": "Luminosità: ",
      "contrastLabel": "Contrasto: ",
      "grayscaleLabel": "Bianco e nero (scala di grigi)",
      "resetAll": "Reimposta tutto",
      "exportFormatLabel": "Formato di esportazione",
      "livePreview": "Anteprima canvas in tempo reale"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Immagine → Data URI Base64",
      "decodeMode": "Base64 → Anteprima immagine",
      "selectImageError": "Seleziona un file immagine (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "Impossibile leggere \"{name}\".",
      "chooseImage": "Scegli un file immagine da codificare",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Genera Data URI, Base64 grezzo, snippet HTML <img> e di sfondo CSS",
      "binarySizeLabel": "Dimensione file binario",
      "base64SizeLabel": "Dimensione URI Base64 (~33% più grande)",
      "fullDataUriLabel": "Data URI completo",
      "copyDataUri": "Copia Data URI",
      "copyRawBase64": "Copia Base64 grezzo",
      "copyImg": "Copia <img>",
      "copyCss": "Copia CSS",
      "encodedAria": "Data URI Base64 codificato",
      "encodedAlt": "Anteprima codificata",
      "pasteLabel": "Incolla stringa immagine Base64 o Data URI",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... oppure stringa base64 grezza",
      "invalidPayload": "Il testo Base64 incollato non è un payload immagine codificato valido.",
      "decodedAlt": "Anteprima Base64 decodificata",
      "downloadExt": "Scarica .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Molto forte",
        "strong": "Forte",
        "moderate": "Media",
        "weak": "Debole"
      },
      "randomPasswordMode": "Password casuale",
      "passphraseMode": "Passphrase Diceware",
      "regenerate": "Rigenera",
      "passwordLengthLabel": "Lunghezza password: ",
      "charsSuffix": " caratteri",
      "batchCountLabel": "Numero in batch: ",
      "uppercaseLabel": "Maiuscole (A–Z)",
      "lowercaseLabel": "Minuscole (a–z)",
      "numbersLabel": "Numeri (0–9)",
      "symbolsLabel": "Simboli (!@#$%...)",
      "excludeAmbiguousLabel": "Escludi caratteri ambigui (0, O, 1, l, I)",
      "wordCountLabel": "Numero di parole: ",
      "wordSeparatorLabel": "Separatore di parole",
      "hyphenOption": "Trattino (-)",
      "underscoreOption": "Trattino basso (_)",
      "periodOption": "Punto (.)",
      "spaceOption": "Spazio ( )",
      "capitalizeWordsLabel": "Parole con iniziale maiuscola",
      "appendDigitLabel": "Aggiungi numero a 2 cifre",
      "selectGroupWarning": "Seleziona almeno un gruppo di caratteri per generare le password.",
      "entropyBits": "~{n} bit di entropia",
      "poolSizeSuffix": " · pool di {n} caratteri",
      "wordListSuffix": " · lista di {n} parole",
      "copyAll": "Copia tutto"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "URL sito web",
        "text": "Testo",
        "wifi": "Configurazione Wi-Fi",
        "vcard": "Contatto vCard",
        "email": "Indirizzo email",
        "phone": "Numero di telefono",
        "plainText": "Testo semplice"
      },
      "liveCameraCapture": "Acquisizione live da fotocamera",
      "scanMode": "Scansiona / decodifica immagine QR",
      "vcardMode": "Generatore QR per contatto vCard",
      "uploadQr": "Carica immagine con codice QR",
      "uploadQrNote": "Screenshot PNG, JPG, WebP o SVG · 100% lato client",
      "liveCameraTitle": "Scansione live con fotocamera del dispositivo",
      "liveCameraNote": "Usa il feed della fotocamera locale solo con autorizzazione concessa",
      "startCamera": "Avvia scanner fotocamera",
      "stopCamera": "Ferma fotocamera",
      "cameraHint": "Punta la fotocamera verso un codice QR: la scansione si interrompe automaticamente appena viene decodificato.",
      "uploadImageError": "Carica un file immagine PNG, JPG, WebP o SVG contenente un codice QR.",
      "unableToLoad": "Impossibile caricare \"{name}\".",
      "noQrDetected": "Nessun codice QR rilevato in questo file immagine. Assicurati che la messa a fuoco sia nitida, che i margini della zona di quiete siano netti e che il contrasto sia alto.",
      "unableToScan": "Impossibile scansionare il file immagine.",
      "cameraUnsupported": "La scansione con fotocamera non è supportata in questo ambiente browser.",
      "cameraDenied": "Autorizzazione fotocamera negata o nessun dispositivo fotocamera disponibile. Carica invece un file immagine con codice QR.",
      "decodedPayload": "Payload decodificato · {kind}",
      "sourceLabel": "Origine: ",
      "copyPayload": "Copia payload",
      "decodedAria": "Testo QR decodificato",
      "detectedLink": "Link web rilevato: ",
      "uploadedPreviewAlt": "Anteprima del codice QR caricato",
      "firstNameLabel": "Nome",
      "lastNameLabel": "Cognome",
      "orgLabel": "Organizzazione",
      "jobTitleLabel": "Qualifica",
      "defaultJobTitle": "Product Designer",
      "phoneLabel": "Numero di telefono",
      "emailLabel": "Indirizzo email",
      "websiteLabel": "URL sito web",
      "rawVcardLabel": "Payload vCard 3.0 grezzo",
      "copyVcard": "Copia vCard",
      "vcardQrAlt": "Codice QR vCard generato",
      "downloadPng": "Scarica PNG",
      "downloadSvg": "Scarica SVG"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "Breve",
          "ratio": "~10–20% della lunghezza"
        },
        "medium": {
          "label": "Media",
          "ratio": "~30–40% della lunghezza"
        },
        "detailed": {
          "label": "Lunga (dettagliata)",
          "ratio": "~50–60% della lunghezza"
        }
      },
      "loadingLengthLabels": {
        "short": "breve",
        "medium": "medio",
        "detailed": "lungo"
      },
      "formatOptions": {
        "paragraph": {
          "label": "Riassunto in paragrafo",
          "hint": "Prosa fluida e coesa"
        },
        "bullets": {
          "label": "Riassunto a punti",
          "hint": "Punti chiari e scansionabili"
        },
        "key-points": {
          "label": "Estrazione punti chiave",
          "hint": "Concetti numerati"
        },
        "simple": {
          "label": "Linguaggio semplice",
          "hint": "Parole quotidiane e chiare"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "paragrafo",
        "bullets": "punti",
        "key-points": "punti chiave",
        "simple": "linguaggio semplice"
      },
      "languageLabels": {
        "Same as original language": "Stessa lingua dell’originale",
        "English (US)": "Inglese (USA)",
        "English (UK)": "Inglese (Regno Unito)",
        "Spanish": "Spagnolo",
        "French": "Francese",
        "German": "Tedesco",
        "Portuguese": "Portoghese",
        "Italian": "Italiano",
        "Dutch": "Olandese",
        "Arabic": "Arabo",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Turco",
        "Japanese": "Giapponese",
        "Korean": "Coreano",
        "Chinese (Simplified)": "Cinese (semplificato)"
      },
      "sampleArticle": "Nel 2026, i team distribuiti di ingegneria di prodotto si affidano sempre più ad aggiornamenti scritti asincroni piuttosto che a riunioni quotidiane di stato per proteggere il tempo di sviluppo concentrato. In uno studio interno di sei mesi su 140 ingegneri a Londra, Berlino e Toronto, i team che hanno sostituito tre chiamate settimanali di sincronizzazione con riepiloghi scritti strutturati il martedì e il giovedì hanno riportato una riduzione del 28% della frammentazione del calendario e hanno consegnato le milestone degli sprint il 14% più velocemente. Fondamentalmente, lo studio ha rilevato che gli aggiornamenti scritti funzionavano solo quando gli ingegneri seguivano tre regole coerenti: indicare i blocchi concreti in alto, collegarsi direttamente alle pull request o agli ID delle issue e annotare date obiettivo esatte invece di frasi vaghe come «presto». I manager hanno comunque mantenuto una sola sessione settimanale live di 25 minuti dedicata esclusivamente ai compromessi architettonici aperti e ai check-in di team, preservando i rapporti interpersonali senza interrompere i blocchi di programmazione.",
      "secUnit": "sec",
      "minUnit": "min",
      "title": "Riassuntore di testi AI gratuito",
      "noAccount": "Nessun account, credito o accesso richiesto",
      "allowanceBefore": "Quota gratuita giornaliera:",
      "allowanceAfter": "rimasti oggi",
      "allowanceFallback": "Fino a 5 riassunti gratuiti / giorno",
      "backendTitle": "La chiave backend AI non è ancora attiva in questo ambiente.",
      "backendEnsureBefore": "Assicurati che",
      "backendEnsureAfter": "sia configurato per eseguire riassunti AI live.",
      "stepLength": "1. Lunghezza del riassunto",
      "stepFormat": "2. Formato del riassunto",
      "stepLanguage": "3. Lingua di output",
      "stepText": "4. Testo di origine da riassumere",
      "lengthAria": "Lunghezza del riassunto",
      "paste": "Incolla",
      "clipboardUnavailable": "La lettura degli appunti del browser non è disponibile qui: usa Ctrl/Cmd + V nell’editor.",
      "clipboardEmpty": "I tuoi appunti non contengono testo al momento.",
      "clipboardBlocked": "L’autorizzazione agli appunti è stata bloccata: incolla direttamente con Ctrl/Cmd + V.",
      "placeholder": "Incolla qui un articolo, appunti di ricerca, una trascrizione di riunione o un saggio (minimo 25 parole / 120 caratteri, fino a 25.000 caratteri)...",
      "word": "parola",
      "words": "parole",
      "chars": "caratteri",
      "estRead": "Lettura stimata: ",
      "stop": "Interrompi",
      "summarizing": "Riassunto in corso...",
      "summarizeButton": "Riassumi testo",
      "addMoreBefore": "Aggiungi almeno ",
      "addMoreMiddle": " parole in più (minimo ",
      "addMoreAnd": " parole e ",
      "addMoreAfter": " caratteri) così l’IA può estrarre un riassunto significativo.",
      "generatingSummary": "Generazione di un riassunto {length} (formato {format})...",
      "errorDailyLimit": "Limite giornaliero di riassunti gratuiti raggiunto",
      "errorRateLimited": "Rallenta leggermente",
      "errorGlobal": "Capacità giornaliera della piattaforma raggiunta",
      "errorGeneric": "Impossibile riassumere al momento",
      "retry": "Riprova",
      "emptyError": "Incolla o scrivi un articolo, un report o appunti prima di riassumere.",
      "tooShortErrorBefore": "Il tuo testo è troppo breve per un riassunto significativo (",
      "tooShortErrorMiddle": " parole). Inserisci almeno ",
      "tooShortErrorAnd": " parole e ",
      "tooShortErrorAfter": " caratteri.",
      "overLimitBefore": "L’input supera il limite di ",
      "overLimitMiddle": " caratteri. Accorcia il testo di ",
      "overLimitAfter": " caratteri e riprova.",
      "connectionError": "Problema temporaneo di connessione durante il riassunto. Riprova.",
      "resultTitle": "Risultato del riassunto",
      "shorterSuffix": "% più breve",
      "copySummary": "Copia riassunto",
      "downloadTxt": "Scarica TXT",
      "originalRead": "Lettura originale",
      "summaryRead": "Lettura riassunto",
      "compressionSaved": "Compressione e tempo risparmiato",
      "savesPrefix": "risparmia ~",
      "tabCompare": "Originale vs. riassunto",
      "tabSummary": "Solo riassunto",
      "resultAria": "Riassunto generato e confronto",
      "originalText": "Testo originale",
      "summaryOutput": "Output del riassunto",
      "summarizedWith": "Riassunto con modello Groq gratuito",
      "fallbackNote": " (fallback automatico del modello)",
      "preservedNote": ". Nomi, date e cifre chiave sono conservati fedelmente dal tuo input."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "Riduci immagine sotto 100 KB",
          "query": "Voglio ridurre le dimensioni della mia immagine a 100 KB.",
          "categoryId": "image-file"
        },
        {
          "label": "Converti PDF in immagini",
          "query": "Devo convertire un PDF in immagini.",
          "categoryId": "pdf"
        },
        {
          "label": "Conta le parole del saggio",
          "query": "Voglio contare le parole del mio saggio.",
          "categoryId": "text-writing"
        },
        {
          "label": "Genera un codice QR",
          "query": "Devo generare un codice QR.",
          "categoryId": "social-media"
        },
        {
          "label": "Modifica dimensioni immagine",
          "query": "Voglio modificare le dimensioni di un’immagine.",
          "categoryId": "image-file"
        },
        {
          "label": "Correggi grammatica e riscrivi email",
          "query": "Voglio che l’IA corregga gli errori di grammatica e riscriva un’email in modo professionale.",
          "categoryId": "text-writing"
        },
        {
          "label": "Riassumi un articolo lungo",
          "query": "Devo riassumere un articolo lungo in punti chiave.",
          "categoryId": "text-writing"
        },
        {
          "label": "Verifica PDF in Word",
          "query": "Devo convertire un PDF in Word.",
          "categoryId": "all"
        }
      ],
      "title": "Trova strumenti AI intelligente",
      "searchesLine": "Cerca tra {count} strumenti reali di UtilityFlow (85 browser + 2 AI)",
      "aiSearchesToday": "Ricerche AI oggi:",
      "leftUnlimited": "rimaste · Ricerca locale istantanea illimitata",
      "quotaFallback": "Fino a 10 ricerche AI gratuite / giorno · Ricerca locale illimitata",
      "backendBefore": "Il ranking semantico AI richiede ",
      "backendAfter": " sul server, mentre la ricerca istantanea locale per parole chiave su tutti gli {count} strumenti funziona subito.",
      "queryLabel": "Descrivi cosa vuoi fare (linguaggio semplice o parole chiave)",
      "queryPlaceholder": "es. «Voglio ridurre le dimensioni della mia immagine a 100 KB» oppure «converti PDF in PNG»",
      "categoryLabel": "Categoria attività facoltativa",
      "allCategories": "Tutte le categorie ({count} strumenti)",
      "characters": "caratteri",
      "findButton": "Trova strumento corrispondente",
      "findingButton": "Ricerca dello strumento migliore in corso...",
      "tryTask": "Prova un’attività reale o seleziona una domanda comune",
      "loadingLine": "Confronto della tua richiesta con i {count} strumenti verificati di UtilityFlow...",
      "errorTitle": "Ranking semantico AI non disponibile",
      "retryAi": "Riprova AI",
      "describeError": "Descrivi l’attività o il problema che vuoi risolvere (almeno 2 caratteri).",
      "queryTooLongBefore": "La query supera i ",
      "queryTooLongAfter": " caratteri. Mantieni la descrizione concisa.",
      "unexpectedFormat": "L’IA ha restituito un formato imprevisto. Qui sotto sono mostrati i risultati rapidi per parole chiave dal nostro inventario reale.",
      "contactError": "Problema temporaneo nel contattare il ranking AI. I risultati della ricerca per parole chiave restano attivi qui sotto.",
      "bestTool": "Miglior strumento consigliato",
      "noExact": "Nessuno strumento corrispondente esatto disponibile al momento",
      "noMatchFallback": "UtilityFlow al momento non include uno strumento dedicato che esegua direttamente «{query}». Non inventiamo mai strumenti o link falsi.",
      "relevantAlt": "Alternative pertinenti",
      "relatedTools": "Strumenti esistenti correlati (solo flussi di lavoro parziali)",
      "supportedPrefix": "Supportato: ",
      "openName": "Apri {name}",
      "matchedWith": "Corrispondenza con l’inventario verificato di UtilityFlow tramite modello Groq gratuito",
      "fallbackNote": " (fallback automatico)",
      "instantMatches": "Corrispondenze istantanee per parole chiave ({count})",
      "matchedLocally": "Corrispondenza locale da {count} strumenti",
      "matchedPrefix": "Corrispondenza: ",
      "suggestionsTitle": "Suggerimenti intelligenti",
      "suggestionsAll": "Tra le attività popolari",
      "suggestionsCategory": "nella categoria selezionata",
      "clickOpen": "Fai clic su uno strumento per aprirlo direttamente",
      "openToolArrow": "Apri strumento →",
      "recommendationsAria": "Raccomandazioni di strumenti AI",
      "instantAria": "Corrispondenze istantanee per parole chiave",
      "suggestionsAria": "Strumenti intelligenti suggeriti al caricamento della pagina"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "Correggi grammatica",
          "hint": "Correggi grammatica e punteggiatura"
        },
        "rewrite-text": {
          "label": "Riscrivi testo",
          "hint": "Flusso fluido e fraseggio naturale"
        },
        "improve-writing": {
          "label": "Migliora scrittura",
          "hint": "Migliora chiarezza e scelta delle parole"
        },
        "make-professional": {
          "label": "Rendi professionale",
          "hint": "Chiarezza per lavoro e dirigenti"
        },
        "make-casual": {
          "label": "Rendi informale",
          "hint": "Voce quotidiana rilassata"
        },
        "simplify-text": {
          "label": "Semplifica testo",
          "hint": "Frasi chiare e facili da leggere"
        },
        "expand-text": {
          "label": "Espandi testo",
          "hint": "Aggiungi dettagli utili basati sull’input"
        },
        "paraphrase": {
          "label": "Parafrasa",
          "hint": "Nuova formulazione, stesso significato"
        },
        "fix-spelling": {
          "label": "Correggi ortografia",
          "hint": "Correggi solo refusi e maiuscole"
        },
        "write-email": {
          "label": "Scrivi un’email",
          "hint": "Email strutturata con oggetto"
        }
      },
      "tones": {
        "professional": "Professionale",
        "friendly": "Amichevole",
        "formal": "Formale",
        "casual": "Informale",
        "academic": "Accademico",
        "persuasive": "Persuasivo",
        "simple": "Semplice"
      },
      "languageLabels": {
        "English (US)": "Inglese (USA)",
        "English (UK)": "Inglese (Regno Unito)",
        "Spanish": "Spagnolo",
        "French": "Francese",
        "German": "Tedesco",
        "Portuguese": "Portoghese",
        "Italian": "Italiano",
        "Dutch": "Olandese",
        "Arabic": "Arabo",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Turco",
        "Japanese": "Giapponese",
        "Korean": "Coreano",
        "Chinese (Simplified)": "Cinese (semplificato)",
        "Same as original language": "Stessa lingua dell’originale"
      },
      "samples": {
        "default": "Ciao team, volevo fare un follow up sulla riunione di ieri e condividere la timeline aggiornata per il lancio del nostro prodotto del Q4. Ci sono ancora due punti che dobbiamo rivedere prima di venerdi, quindi fatemi sapere se emergono dei blocchi.",
        "write-email": "devo aggiornare il cliente Daniel sul lancio dell’app mobile. test finiti oggi, restano 2 piccoli bug UI da correggere domani mattina, pronto per l’invio all’App Store venerdì pomeriggio. chiedi se lunedì alle 10 va bene per la call di passaggio.",
        "fix-spelling": "Siamo lieti di anunciare che la finestra di manutenzione trimestrale si è svolta senza intoppi, con zero tempi di inattività non pianificati su tutti i server.",
        "expand-text": "Gli stand-up asincroni da remoto fanno risparmiare tempo agli ingegneri e permettono ai colleghi di tutto il mondo di concentrarsi senza continue interruzioni del calendario."
      },
      "title": "Assistente di scrittura AI gratuito",
      "noLogin": "Nessun accesso o carta richiesto",
      "allowanceBefore": "Quota gratuita giornaliera:",
      "allowanceAfter": "rimaste oggi",
      "allowanceFallback": "Fino a 5 richieste gratuite / giorno",
      "backendTitle": "La chiave backend AI non è ancora attiva in questo ambiente.",
      "backendSet": "Imposta",
      "backendRest": "sul server o sul Worker per abilitare la generazione AI live.",
      "stepTask": "1. Scegli attività di scrittura (10 modalità)",
      "stepTone": "2. Tono",
      "stepLanguage": "3. Lingua di output",
      "stepText": "4. Il tuo testo originale",
      "taskSelectorAria": "Selettore attività di scrittura",
      "placeholder": "Scrivi o incolla qui paragrafo, messaggio, appunti o bozza email (fino a 12.000 caratteri)...",
      "word": "parola",
      "words": "parole",
      "characters": "caratteri",
      "chars": "caratteri",
      "tip": "Suggerimento: premi Ctrl + Invio per generare",
      "stop": "Interrompi",
      "generating": "Generazione in corso...",
      "applying": "Applicazione di",
      "tonePhrase": "tono {tone}",
      "applyingIn": "in",
      "errorDailyLimit": "Limite gratuito giornaliero raggiunto",
      "errorRateLimited": "Rallenta leggermente",
      "errorGlobal": "Capacità giornaliera della piattaforma raggiunta",
      "errorGeneric": "Impossibile completare la richiesta di scrittura",
      "retry": "Riprova",
      "emptyError": "Inserisci o incolla del testo prima di fare clic su Genera.",
      "overLimitBefore": "L’input supera il limite di ",
      "overLimitMiddle": " caratteri. Accorcia la bozza di ",
      "overLimitAfter": " caratteri e riprova.",
      "connectionError": "Problema temporaneo di connessione durante la generazione. Riprova.",
      "resultTitle": "Output migliorato",
      "copyResult": "Copia risultato",
      "downloadTxt": "Scarica TXT",
      "editOutput": "Modifica ulteriormente l’output",
      "tabCompare": "Originale vs. migliorato",
      "tabDiff": "Evidenzia modifiche",
      "tabResult": "Solo risultato",
      "resultAria": "Risultato di scrittura migliorato e confronto",
      "originalText": "Testo originale",
      "improvedText": "Testo migliorato",
      "removed": "Rimosso",
      "added": "Aggiunto / aggiornato",
      "processedWith": "Elaborato con modello Groq gratuito",
      "fallbackNote": " (fallback automatico del modello)",
      "reviewNote": ". Rivedi sempre la copia finale prima di inviarla."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Tag canonical e hreflang",
      "redirectsMode": "Generatore di regole di redirect 301",
      "canonicalLabel": "URL canonical autoreferenziale",
      "alternatesLabel": "Versioni alternative per lingua e regione",
      "addLocale": "Aggiungi lingua",
      "langCodeAria": "Codice lingua",
      "alternateUrlAria": "URL alternativo",
      "removeLocaleAria": "Rimuovi riga lingua",
      "htmlTagsLabel": "Tag link <head> HTML",
      "copyHtml": "Copia HTML",
      "xmlSnippetLabel": "Snippet <xhtml:link> della sitemap XML",
      "copyXml": "Copia XML",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (blocco server)",
      "copyRules": "Copia {n} regole",
      "pairsLabel": "Coppie origine → destinazione (separate da virgola, tabulazione o „ -> \")",
      "generatedConfigLabel": "Configurazione di redirect 301 generata",
      "skippedInvalid": "{n} riga/e senza destinazione saltata/e."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "La SEO tecnica inizia con URL puliti e scansionabili, tag canonical accurati e sitemap XML strutturate. Quando gli editori scrivono contenuti utili focalizzati sull’intento di ricerca degli utenti invece di riempire il testo di parole chiave, i motori di ricerca comprendono naturalmente la profondità dell’argomento. Controlla regolarmente titoli, meta description e link interni.",
      "defaultTargetKeyword": "seo tecnica",
      "guidanceTitle": "Linee guida editoriali:",
      "guidanceBody": "I motori di ricerca moderni non premiano il raggiungimento di una quota fissa di densità delle parole chiave. Usa questa analisi della distribuzione per individuare ripetizioni accidentali o per confermare che i concetti principali compaiano chiaramente nel testo.",
      "targetLabel": "Parola chiave / frase target (facoltativo)",
      "targetPlaceholder": "es. seo tecnica",
      "phraseLengthLabel": "Lunghezza frase",
      "oneWord": "1 parola",
      "twoWord": "Frasi di 2 parole",
      "threeWord": "Frasi di 3 parole",
      "stripHtml": "Rimuovi tag HTML",
      "ignoreStopWords": "Ignora le stop word",
      "textLabel": "Bozza di articolo o testo HTML incollato",
      "totalWords": "Parole totali",
      "uniqueVocabulary": "Vocabolario unico",
      "readingTime": "Tempo di lettura stimato",
      "targetPrefix": "Target: ",
      "hits": "{n} occorrenze ({d}%)",
      "rankHeader": "Posizione",
      "termHeader": "Termine / N-gramma",
      "occurrencesHeader": "Occorrenze",
      "shareHeader": "Quota (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Strumenti online veloci basati sul browser",
      "defaultDescription": "Esplora 85 strumenti browser veloci e attenti alla privacy per modifica di testi, codifica per sviluppatori, calcolatori finanziari, flussi di lavoro PDF e SEO.",
      "pageTitleLabel": "Titolo pagina (<title> / og:title)",
      "titleChars": "{n} caratteri (ideale 30–60)",
      "metaDescriptionLabel": "Meta description",
      "descChars": "{n} caratteri (ideale 120–160)",
      "canonicalUrlLabel": "URL canonical",
      "ogImageLabel": "URL immagine Open Graph (consigliato 1200×630)",
      "siteNameLabel": "Nome sito (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter Card",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Direttiva follow per i robots",
      "includeViewportLabel": "Includi tag charset e viewport",
      "generatedTagsLabel": "Tag HTML <head> generati",
      "copyHtml": "Copia HTML",
      "downloadHtml": "Scarica .html",
      "socialPreviewLabel": "Anteprima della scheda di condivisione social",
      "socialPreviewFallback": "Anteprima di condivisione social",
      "untitledPage": "Pagina senza titolo",
      "metaSnippetFallback": "Qui compare il frammento della meta description."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Audit del codice HTML lato client:",
      "auditBody": "I browser bloccano lo scraping cross-origin (CORS) di siti di terze parti e non hanno accesso alle analisi di ricerca private. Incolla qui sotto il codice HTML della pagina (Visualizza sorgente pagina) per controllare i tag DOM in locale.",
      "pastedHtmlLabel": "Codice HTML incollato",
      "loadSampleHtml": "Carica HTML di esempio",
      "htmlPlaceholder": "Incolla qui il codice sorgente <html>...</html>...",
      "scoreLabel": "Punteggio audit DOM",
      "checksPassed": "{passed} / {total} controlli superati",
      "linksSummary": "Link: {total} ({internal} int. / {external} est.)",
      "robotsMetaLabel": "Meta robots: ",
      "robotsDefault": "Predefinito (index, follow)",
      "headingOutline": "Struttura delle intestazioni (H1–H4)",
      "emptyState": "Incolla il codice HTML a sinistra per controllare titolo, descrizione, intestazioni, canonical e tag alt.",
      "checkTitle": "Tag title (<title>)",
      "checkMetaDesc": "Meta description",
      "checkH1": "Esattamente una sola intestazione <h1>",
      "checkCanonical": "URL canonical (<link rel=\"canonical\">)",
      "checkAlt": "Attributi alt delle immagini",
      "checkOgJsonLd": "Open Graph e dati strutturati JSON-LD",
      "titleDetail": "{n} caratteri: «{title}»",
      "titleMissing": "Tag <title> mancante in <head>.",
      "descDetail": "{n} caratteri (obiettivo 120–160).",
      "descMissing": "<meta name=\"description\"> mancante.",
      "h1Detail": "{n} elemento/i <h1> trovato/i.",
      "canonicalMissing": "Nessun tag canonical dichiarato.",
      "noImages": "Nessun elemento <img> nel markup.",
      "altDetail": "{with}/{total} immagini includono testo alt descrittivo.",
      "ogDetail": "og:title {presence} · {n} blocco/i JSON-LD.",
      "present": "presente",
      "missing": "mancante"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Direttiva di indicizzazione",
      "indexOption": "index (consenti indicizzazione)",
      "noindexOption": "noindex (escludi dai risultati di ricerca)",
      "linkCrawlingLabel": "Scansione dei link",
      "followOption": "follow (trasmetti segnali dai link)",
      "nofollowOption": "nofollow (non seguire i link)",
      "largeOption": "large (scoperta consentita)",
      "htmlTagLabel": "Meta tag HTML <head>",
      "copyHtmlTag": "Copia tag HTML",
      "httpHeaderLabel": "Intestazione di risposta HTTP (PDF / non HTML)",
      "copyHeader": "Copia intestazione",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Modello di percorso _headers di Cloudflare",
      "copyBlock": "Copia blocco"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Modelli di partenza:",
      "allowAll": "Consenti tutti i crawler",
      "standardWebApp": "Web app standard / SaaS",
      "wordpressClean": "WordPress pulito",
      "stagingBlockAll": "Staging (blocca tutto)",
      "crawlerRules": "Regole di percorso per i crawler",
      "addRule": "Aggiungi regola",
      "directiveAria": "Direttiva",
      "pathAria": "Percorso",
      "deleteRuleAria": "Elimina regola",
      "crawlDelayLabel": "Crawl-delay (secondi, facoltativo)",
      "crawlDelayPlaceholder": "Nessuno",
      "sitemapUrlsLabel": "URL sitemap (uno per riga)",
      "generatedLabel": "robots.txt generato"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Come creare utilità browser veloci",
      "defaultFaqQ1": "UtilityFlow esegue gli strumenti in locale nel browser?",
      "defaultFaqA1": "Sì. Quasi tutte le utilità vengono eseguite direttamente nella memoria del browser senza inviare input a server esterni.",
      "defaultFaqQ2": "Il JSON-LD strutturato è utile per la SEO?",
      "defaultFaqA2": "Sì. Il JSON-LD Schema.org valido chiarisce il contesto delle entità per i crawler di ricerca e la possibilità di ottenere rich result.",
      "defaultProductName": "Tastiera meccanica ergonomica Pro",
      "defaultProductDesc": "Tastiera wireless a basso profilo progettata per sviluppatori software.",
      "defaultCrumbHome": "Home",
      "defaultCrumbSeo": "Strumenti SEO",
      "defaultCrumbSchema": "Generatore di markup Schema",
      "headlineLabel": "Titolo",
      "authorNameLabel": "Nome autore",
      "publisherNameLabel": "Nome editore",
      "datePublishedLabel": "Data di pubblicazione",
      "articleUrlLabel": "URL articolo",
      "featuredImageLabel": "URL immagine in evidenza",
      "questionLabel": "Domanda n. {n}",
      "removeQuestionAria": "Rimuovi domanda {n}",
      "questionPlaceholder": "Domanda",
      "acceptedAnswerPlaceholder": "Risposta accettata",
      "addFaqRow": "Aggiungi riga FAQ",
      "productNameLabel": "Nome prodotto",
      "descriptionLabel": "Descrizione",
      "priceLabel": "Prezzo",
      "currencyLabel": "Valuta",
      "availabilityLabel": "Disponibilità",
      "orgNameLabel": "Nome organizzazione",
      "websiteUrlLabel": "URL sito web",
      "logoUrlLabel": "URL logo",
      "breadcrumbLabelAria": "Etichetta breadcrumb {n}",
      "breadcrumbUrlAria": "URL breadcrumb {n}",
      "labelPlaceholder": "Etichetta",
      "addLevel": "Aggiungi livello",
      "jsonLdOutputLabel": "Output <script> JSON-LD",
      "copyScriptTag": "Copia tag script"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "Formattatore e validatore JSON – Stampa formattata e minificazione | UtilityFlow",
      "defaultDescription": "Formatta, convalida, minimizza e ordina le chiavi dei payload JSON istantaneamente nel browser, con dettagli di errore di sintassi per riga e colonna.",
      "desktopSerp": "SERP desktop (titolo ~580 px)",
      "mobileSerp": "SERP mobile (descr. ~120 caratteri)",
      "copyTitleMeta": "Copia titolo e meta",
      "seoTitleLabel": "Titolo SEO",
      "titleMetrics": "{chars} caratteri · ~{px} px / max 580 px",
      "metaDescriptionLabel": "Meta description",
      "descMetrics": "{chars} caratteri · ~{px} px",
      "pageUrlLabel": "URL pagina (per anteprima breadcrumb)",
      "siteNameLabel": "Nome sito",
      "boldKeywordLabel": "Parola chiave in grassetto",
      "optionalPlaceholder": "Facoltativo",
      "datePrefixLabel": "Prefisso data",
      "datePlaceholder": "es. 12 nov 2025",
      "desktopSimulation": "Simulazione snippet di ricerca desktop",
      "mobileSimulation": "Simulazione snippet di ricerca mobile",
      "titleFallback": "Il titolo SEO compare qui",
      "descFallback": "Anteprima della meta description visualizzata qui."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "Come creare uno slug URL pulito per la SEO tecnica!\nI 10 migliori strumenti per caffè e produttività nel 2026\nChecklist completa di sitemap XML e robots.txt",
      "domainLabel": "Dominio base / sottocartella (per anteprima URL completa)",
      "separatorLabel": "Separatore di parole",
      "hyphenOption": "Trattino (-) — consigliato da Google",
      "underscoreOption": "Trattino basso (_)",
      "maxLengthLabel": "Lunghezza max slug ({n} caratteri)",
      "stripStopWords": "Rimuovi le stop word inglesi facoltative (a, the, and, of, in, to)",
      "trailingSlash": "Includi barra finale (/)",
      "titlesLabel": "Titoli di pagina (uno per riga per generazione in batch)",
      "generatedLabel": "Slug SEO generati ({n})",
      "copyAllSlugs": "Copia tutti gli slug",
      "copyAllUrls": "Copia tutti gli URL completi",
      "originalTitleHeader": "Titolo originale",
      "slugUrlHeader": "Slug SEO e URL completo",
      "copyHeader": "Copia"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "Data <lastmod> (facoltativo)",
      "changefreqLabel": "Suggerimento <changefreq>",
      "priorityLabel": "<priority> predefinito",
      "omitTag": "Ometti tag",
      "deduplicateLabel": "Rimuovi URL duplicati esatti",
      "urlsLabel": "URL canonical (un URL https:// completo per riga)",
      "skippedInvalid": "{n} riga/e di URL non valido saltata/e: ",
      "generatedLabel": "sitemap.xml generata ({n} URL)",
      "copyXml": "Copia XML",
      "downloadXml": "Scarica .xml",
      "generatedAria": "Sitemap XML generata"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Creiamo strumenti browser veloci per creator e team.   \n\nOgni martedì nuovi consigli sui flussi di lavoro.\n\nProva le nostre utility gratuite al link qui sotto!",
      "modeBraille": "Spaziatore invisibile (⠀ U+2800)",
      "modeDot": "Spaziatore minimo con punto (.)",
      "modeClean": "Solo spazi finali puliti",
      "collapse": "Unisci i doppi spazi accidentali",
      "labelRaw": "Bozza di didascalia o bio",
      "phRaw": "Scrivi la didascalia con righe vuote dove vuoi le interruzioni di paragrafo...",
      "tip": "Suggerimento: le app social spesso eliminano i paragrafi vuoti quando ci sono spazi finali alla fine della riga sopra.",
      "labelOut": "Output pronto da incollare",
      "copyFormatted": "Copia didascalia formattata",
      "charsLabel": "Caratteri:",
      "linesLabel": "Righe:",
      "blankLabel": "Interruzioni vuote mantenute:",
      "fitsBio": "Entra nella bio Instagram di 150 caratteri",
      "captionLength": "Lunghezza didascalia (oltre il limite bio di 150)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Problema → Agitazione → Soluzione (PAS)",
        "tutorial": "Scomposizione pratica in 3 passaggi",
        "bab": "Prima → Dopo → Ponte",
        "checklist": "Checklist di lancio / revisione",
        "myth": "Mito comune vs. realtà pratica"
      },
      "frameworkDescriptions": {
        "pas": "Evidenzia un problema concreto prima di offrire la soluzione di flusso di lavoro.",
        "tutorial": "Struttura numerata in stile guida, adatta a caroselli LinkedIn e salvataggi.",
        "bab": "Confronta le vecchie difficoltà con il risultato ottimizzato.",
        "checklist": "Elenco di verifica chiaro che i creator possono salvare.",
        "myth": "Mette in discussione i consigli superati con alternative dirette e concise."
      },
      "frameworkLabels": {
        "fixesHeading": "Cosa risolve davvero il problema:",
        "beforeLabel": "Prima: ",
        "afterLabel": "Dopo: ",
        "bridgeHeading": "Il ponte:",
        "mythLabel": "Mito comune: ",
        "worksHeading": "Cosa funziona in pratica:"
      },
      "sampleHook": "Smetti di perdere ore a formattare manualmente i link delle campagne.",
      "sampleContext": "Parametri UTM incoerenti e spaziature della bio sbagliate distorcono silenziosamente i report di analytics.",
      "samplePoints": "Standardizza i tag utm_source e utm_medium in minuscolo\nVerifica le interruzioni di riga prima di pubblicare\nMantieni interruzioni di paragrafo pulite senza spazi finali",
      "sampleCta": "Salva questa checklist per il tuo prossimo lancio di prodotto.",
      "infoTitle": "Assemblaggio deterministico dei modelli:",
      "infoBody": "Questo strumento usa framework di copywriting strutturati direttamente nel browser: nessun modello di IA né API esterna viene usato o suggerito.",
      "labelHook": "Gancio di apertura (prime 1–2 righe)",
      "labelContext": "Contesto / descrizione del problema",
      "labelPoints": "Punti chiave (uno per riga)",
      "labelCta": "Call-to-action (CTA)",
      "labelTags": "Hashtag",
      "previewTitle": "Anteprima didascalia formattata",
      "copyCaption": "Copia didascalia",
      "charsLabel": "Caratteri:",
      "wordsLabel": "Parole:",
      "fits": "Entra",
      "threadNeeded": "Serve un thread",
      "tooLong": "Troppo lunga"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Formattazione e maiuscole per accessibilità",
      "optCamel": "PascalCase (#CamelCase — compatibile con screen reader)",
      "optLower": "tutto minuscolo (#minuscolo)",
      "optPreserve": "Mantieni maiuscole originali",
      "outLabel": "Layout output",
      "optInline": "Riga singola (separati da spazi)",
      "optNewline": "Un hashtag per riga",
      "optDots": "Separatore di piega didascalia (.\n.\n.)",
      "dedupe": "Rimuovi hashtag duplicati",
      "labelRaw": "Parole chiave o hashtag disordinati (separati da virgola, spazio o riga)",
      "labelResult": "Gruppo di hashtag pulito",
      "copyHashtags": "Copia hashtag",
      "statClean": "Hashtag puliti",
      "statDupes": "Duplicati rimossi",
      "statIgMax": "Massimo Instagram (30)",
      "statWithin": "Entro il limite IG di 30",
      "statExceeds": "Supera il limite di 30 tag",
      "statChars": "Caratteri output"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 caratteri · lettere, numeri, trattini bassi",
        "instagram": "1–30 caratteri · lettere, numeri, punti, trattini bassi",
        "tiktok": "2–24 caratteri · lettere, numeri, trattini bassi, punti",
        "youtube": "3–30 caratteri · lettere, numeri, _, -, .",
        "threads": "1–30 caratteri · namespace Instagram condiviso",
        "github": "1–39 caratteri · alfanumerici e trattini singoli"
      },
      "infoTitle": "Validatore di regole e link di verifica diretta:",
      "infoBodyBefore": "Convalida sintassi e limiti di caratteri degli handle offline senza indovinare la disponibilità. Fai clic sul link",
      "infoEm": "Apri URL profilo",
      "infoBodyAfter": "di una piattaforma per verificare direttamente lo stato live.",
      "labelBrand": "Nome di brand, progetto o creator",
      "phBrand": "es. Utility Hub",
      "labelActive": "Handle attivo da convalidare",
      "copyAt": "Copia @",
      "variationsTitle": "Varianti di handle coerenti:",
      "thPlatform": "Piattaforma",
      "thRules": "Regole di formato",
      "thStatus": "Stato sintassi",
      "thCheck": "Verifica manuale",
      "valid": "Formato valido",
      "invalid": "Sintassi/lunghezza non valida",
      "checkUrl": "Verifica URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Grassetto (sans-serif)",
        "sans-italic": "Corsivo (sans-serif)",
        "sans-bold-italic": "Grassetto corsivo (sans-serif)",
        "serif-bold": "Grassetto (serif)",
        "monospace": "Monospazio",
        "double-struck": "Doppio tratto (lavagna)",
        "script-bold": "Corsivo grassetto",
        "fraktur-bold": "Fraktur grassetto",
        "small-caps": "Maiuscoletto",
        "fullwidth": "Larghezza intera estetica"
      },
      "styleNotes": {
        "sans-bold": "Alta leggibilità per intestazioni bio e ganci dei post",
        "sans-italic": "Enfasi discreta nelle didascalie",
        "sans-bold-italic": "Richami forti e divisori di sezione",
        "serif-bold": "Enfasi in stile editoriale",
        "monospace": "Handle di codice, date e tag tecnici",
        "double-struck": "Accenti di display",
        "script-bold": "Firme bio decorative",
        "fraktur-bold": "Caratteri gotici da display",
        "small-caps": "Etichette profilo pulite in stile maiuscolo",
        "fullwidth": "Intestazioni social retrò a spaziatura larga"
      },
      "sampleText": "Nuovo Toolkit per Creator 2025",
      "accessibilityTitle": "Nota di accessibilità:",
      "accessibilityBody": "I caratteri Unicode stilizzati appartengono ai blocchi dei simboli matematici, quindi gli screen reader potrebbero leggerli lettera per lettera o saltarli, e alcuni indici di ricerca li ignorano. Usali con parsimonia per brevi evidenze, non per interi paragrafi.",
      "labelInput": "Testo da stilizzare",
      "placeholder": "Scrivi un breve titolo, una riga bio o una CTA...",
      "previewEmpty": "Anteprima"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Bio Instagram",
        "linkedinPost": "Post LinkedIn",
        "newsletter": "Newsletter",
        "youtubeDescription": "Descrizione YouTube"
      },
      "presetsLabel": "Preset rapidi per canale:",
      "errorEmpty": "Inserisci l’URL del sito web di destinazione.",
      "errorInvalid": "Inserisci un URL di destinazione valido (ad esempio https://example.com/landing).",
      "labelUrl": "URL di destinazione del sito *",
      "labelSource": "Origine campagna (utm_source) *",
      "phSource": "es. instagram, newsletter, google",
      "labelMedium": "Mezzo campagna (utm_medium) *",
      "phMedium": "es. social, cpc, email, video",
      "labelCampaign": "Nome campagna (utm_campaign)",
      "phCampaign": "es. spring_launch",
      "labelContent": "Contenuto campagna (utm_content)",
      "phContent": "es. hero_banner, bio_button",
      "labelTerm": "Termine campagna (utm_term)",
      "phTerm": "Parola chiave a pagamento o tag di pubblico facoltativo",
      "normalizeLabel": "Forza minuscole e converti gli spazi in trattini bassi (`_`)",
      "generatedTitle": "URL campagna generato",
      "copyUtm": "Copia URL UTM",
      "thParam": "Parametro query",
      "thValue": "Valore normalizzato"
    }
  },
'add-pdf-page-numbers': {
    strings: {
      errStart: 'Il numero della pagina iniziale deve essere un numero intero pari o superiore a 1.',
      stampedSuccess: (n: number, size: string) => `Numeri di pagina aggiunti su ${n} pagina/e (${size}).`,
      pageOfLabel: (cur: number, total: number) => `Pagina ${cur} di ${total}`,
      dropTitleEmpty: 'Scegli un file PDF per aggiungere i numeri di pagina',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pagine)`,
      dropSub: 'Inserisce etichette di pagina vettoriali nitide in report, contratti e fascicoli',
      labelPos: 'Posizione',
      optBottomCenter: 'In basso al centro',
      optBottomRight: 'In basso a destra',
      optBottomLeft: 'In basso a sinistra',
      optTopRight: 'In alto a destra',
      labelFmt: 'Formato etichetta',
      optPageOf: 'Pagina 1 di N',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: 'Numero iniziale',
      labelSize: 'Dimensione carattere (pt)',
      opt9: '9 pt (discreto)',
      opt11: '11 pt (standard)',
      opt14: '14 pt (grande)',
      skipCover: 'Salta la copertina (la numerazione inizia da pagina 2)',
      numbering: 'Numerazione delle pagine...',
      addBtn: 'Aggiungi numeri di pagina e scarica',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `Impossibile decodificare l’immagine "${name}".`,
      errCanvas: 'Contesto Canvas 2D non disponibile.',
      errConvert: (name: string) => `Conversione di "${name}" in PNG non riuscita.`,
      errNotImage: (name: string) => `"${name}" non è un file immagine supportato (PNG, JPG, WebP).`,
      errRead: (name: string) => `Impossibile leggere "${name}".`,
      errLoad: 'Impossibile caricare il file immagine.',
      errEmpty: 'Carica prima almeno un file immagine.',
      errBuild: 'Conversione delle immagini in PDF non riuscita.',
      createdSuccess: (n: number, size: string) => `PDF di ${n} pagine creato correttamente (${size}).`,
      dropTitle: 'Seleziona immagini PNG, JPG o WebP',
      dropSub: 'Converti screenshot, scansioni o foto in un unico PDF, in locale',
      labelSize: 'Dimensioni pagina PDF',
      optA4: 'A4 verticale (210 × 297 mm)',
      optLetter: 'Lettera USA (8,5 × 11 pollici)',
      optFit: 'Dimensioni immagine esatte',
      labelMargin: 'Margine pagina',
      optMargin0: 'Nessun margine (0 pt)',
      optMargin24: 'Margine standard (24 pt)',
      optMargin48: 'Margine ampio (48 pt)',
      labelOut: 'Nome file di output',
      moveUp: (name: string) => `Sposta ${name} in alto`,
      moveDown: (name: string) => `Sposta ${name} in basso`,
      removeFile: (name: string) => `Rimuovi ${name}`,
      building: 'Generazione del PDF...',
      convertBtn: (n: number) => `Converti ${n} immagini in PDF`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: 'Impossibile leggere i file PDF selezionati.',
      errMin2: 'Aggiungi almeno due file PDF da unire.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n} PDF uniti (${pages} pagine, ${size}).`,
      dropValidating: 'Verifica dei file PDF...',
      dropTitle: 'Seleziona o trascina più file PDF',
      dropSub: 'Unione 100% nel browser con pdf-lib · Solo PDF non crittografati · Nessun caricamento',
      filesQueued: 'file in coda',
      totalPagesLabel: 'pagine totali',
      combinedSize: 'dimensione totale di input',
      clearQueue: 'Svuota coda',
      pageSingular: 'pagina',
      pagePlural: 'pagine',
      moveUp: (name: string) => `Sposta ${name} in alto`,
      moveDown: (name: string) => `Sposta ${name} in basso`,
      removeFile: (name: string) => `Rimuovi ${name}`,
      outName: 'Nome file di output',
      merging: 'Unione dei PDF...',
      mergeBtn: (n: number) => `Unisci ${n} PDF e scarica`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: 'Campi di metadati modificabili svuotati. Fai clic su «Salva metadati e scarica PDF» per applicare le modifiche.',
      savedSuccess: (size: string) => `Metadati PDF aggiornati salvati (${size}).`,
      dropTitleEmpty: 'Scegli un file PDF per ispezionare o modificare i metadati',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pagine · ${size})`,
      dropSub: 'Ispeziona le proprietà del documento, rimuovi i tag di autore e software o imposta titoli SEO puliti',
      labelTitle: 'Titolo del documento',
      labelAuthor: 'Autore',
      labelSubject: 'Oggetto / Riepilogo',
      labelKeywords: 'Parole chiave (separate da virgola)',
      labelCreator: 'Applicazione di creazione',
      labelProducer: 'Produttore PDF',
      saving: 'Salvataggio del PDF...',
      saveBtn: 'Salva metadati e scarica PDF',
      stripBtn: 'Rimuovi tutti i campi di metadati',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: 'Nessuna pagina corrispondente da ruotare.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `${a} di ${b} pagine ruotate di ${deg}° in senso orario (${size}).`,
      dropTitleEmpty: 'Scegli un file PDF per ruotare le pagine',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pagine)`,
      dropSub: 'Ruota tutte le pagine o intervalli specifici in locale, senza caricamenti sul server',
      labelAngle: 'Angolo di rotazione',
      opt90: '90° in senso orario (destra)',
      opt270: '90° in senso antiorario (sinistra / 270°)',
      opt180: '180° capovolto',
      labelScope: 'Applica a',
      optAll: (n: number) => `Tutte le pagine (${n})`,
      optRange: 'Intervalli di pagine specifici',
      optOdd: 'Solo pagine dispari',
      optEven: 'Solo pagine pari',
      labelRangeInput: (n: number) => `Numeri di pagina / Intervalli (1–${n})`,
      phRange: 'es. 1, 3-5',
      rotating: 'Rotazione delle pagine...',
      rotateBtn: 'Applica la rotazione e scarica il PDF',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- Pagina ${n} ---`,
      dropExtracting: 'Estrazione del livello di testo del PDF...',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pagine)`,
      dropTitleEmpty: 'Scegli un PDF con testo per estrarre il testo',
      dropSub: 'Estrae il testo Unicode incorporato in locale con PDF.js · Nessun caricamento sul server',
      noTextTitle: 'Nessun livello di testo selezionabile trovato:',
      noTextBody:
        'Questo PDF sembra contenere immagini acquisite o tracciati vettoriali convertiti in curve invece di un livello di testo incorporato. Il riconoscimento ottico dei caratteri (OCR) lato client non viene eseguito offline.',
      markersLabelBefore: 'Includi marcatori di intestazione pagina (',
      markersCode: '--- Pagina N ---',
      markersLabelAfter: ')',
      copyText: 'Copia testo',
      downloadTxt: 'Scarica .txt',
      outputAria: 'Output del testo PDF estratto',
      pagesScanned: 'Pagine analizzate:',
      wordsExtracted: 'Parole estratte:',
      textSize: 'Dimensione testo:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'Converti fino a 20 pagine per batch per mantenere veloce e reattiva la memoria canvas del browser.',
      errCanvas: 'Contesto Canvas 2D non disponibile.',
      dropTitleEmpty: 'Scegli un PDF da convertire in immagini',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pagine · ${size})`,
      dropSub: 'Conversione locale con canvas PDF.js · Output PNG o JPG',
      labelRange: 'Pagine («tutte» o intervallo come 1-4, 6)',
      labelFormat: 'Formato immagine',
      optPng: 'PNG (senza perdita / testo nitido)',
      optJpg: 'JPG (compatto, adatto alle foto)',
      labelScale: 'Risoluzione di rendering',
      optScale1: '1,0× (72 DPI anteprima rapida)',
      optScale15: '1,5× (108 DPI standard)',
      optScale2: '2,0× (144 DPI nitido)',
      rendering: 'Rendering delle pagine PDF...',
      renderBtn: 'Converti le pagine PDF in immagini',
      pageAlt: (n: number) => `Anteprima della pagina ${n}`,
      pageLabel: (n: number, w: number, h: number) => `Pagina ${n} · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'Grigio neutro',
        indigo: 'Indaco del marchio',
        red: 'Rosso timbro',
      },
      defaultWatermark: 'CONFIDENTIAL',
      errEmpty: 'Inserisci il testo della filigrana prima di generare il PDF.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `Filigrana "${text}" applicata a ${n} pagina/e (${size}).`,
      dropTitleEmpty: 'Scegli un file PDF per aggiungere una filigrana',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pagine)`,
      dropSub: 'Incorpora timbri di testo vettoriali nitidi in locale con pdf-lib',
      labelText: 'Testo filigrana',
      phText: 'RISERVATO / BOZZA / USO INTERNO',
      labelColor: 'Colore timbro',
      firstPageOnly: 'Solo prima pagina',
      labelSize: 'Dimensione carattere:',
      ptSuffix: (n: number) => `${n} pt`,
      labelOpacity: 'Opacità:',
      labelAngle: 'Rotazione:',
      applying: 'Applicazione della filigrana...',
      applyBtn: 'Applica filigrana e scarica',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'Un PDF deve conservare almeno 1 pagina.',
      savedSuccess: (n: number, size: string) => `PDF aggiornato con ${n} pagine salvato (${size}).`,
      loading: 'Caricamento delle pagine e delle anteprime del PDF...',
      dropTitleFile: (name: string, n: number) => `${name} (${n} pagine attive)`,
      dropTitleEmpty: 'Scegli un file PDF per riordinare o eliminare pagine',
      dropSub: 'Sposta, duplica o rimuovi pagine indesiderate in locale',
      outCount: 'Numero di pagine in output:',
      saving: 'Salvataggio del PDF...',
      saveBtn: 'Salva PDF riordinato',
      thumbAlt: (n: number) => `Pagina originale ${n}`,
      thumbFallback: (n: number) => `Orig. p. ${n}`,
      posLabel: (n: number) => `Pos. #${n}`,
      origLabel: (n: number) => `(Orig. ${n})`,
      moveEarlierTitle: 'Sposta prima',
      moveEarlierAria: (n: number) => `Sposta la posizione ${n} prima`,
      moveLaterTitle: 'Sposta dopo',
      moveLaterAria: (n: number) => `Sposta la posizione ${n} dopo`,
      dupTitle: 'Duplica pagina',
      dupAria: (n: number) => `Duplica la pagina alla posizione ${n}`,
      delTitle: 'Elimina pagina',
      delAria: (n: number) => `Elimina la pagina alla posizione ${n}`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `La divisione in singole pagine scarica un file per pagina. Per documenti di oltre 25 pagine (${n} pagine qui), estrai invece degli intervalli, così il browser non blocca i download multipli.`,
      exportedAll: (n: number) => `${n} file PDF di una pagina esportati.`,
      errNoMatch: 'Nessuna pagina corrisponde alla selezione (ad esempio, «Pagine pari» richiede almeno 2 pagine).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `${a} di ${b} pagine estratte (${size}).`,
      dropTitleEmpty: 'Scegli un file PDF da dividere o da cui estrarre pagine',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pagine · ${size})`,
      dropSub: 'Elaborato in locale, in memoria · Fai clic per sostituire il documento',
      modeRange: 'Estrai intervalli di pagine',
      modeOdd: 'Solo pagine dispari',
      modeEven: 'Solo pagine pari',
      modeBurst: 'Estrai tutte le singole pagine',
      labelRange: (n: number) => `Pagine da estrarre (1–${n})`,
      phRange: 'es. 1-3, 5, 8-10',
      rangeHintBefore: 'Usa virgole e trattini (ad esempio ',
      rangeHintAfter: ').',
      extracting: 'Estrazione del PDF...',
      splitBtn: 'Dividi e scarica PDF',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'URL sito web',
      tabText: 'Testo semplice',
      tabWifi: 'Rete Wi-Fi',
      tabEmail: 'Link email',
      tabPhone: 'Numero di telefono',
      labelUrl: 'URL di destinazione',
      labelText: 'Contenuto testuale',
      labelSsid: 'Nome rete (SSID)',
      labelSecurity: 'Tipo di sicurezza',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'Aperta (senza password)',
      labelWifiPass: 'Password Wi-Fi',
      hiddenSsid: 'Rete SSID nascosta',
      labelEmailTo: 'Email destinatario',
      labelEmailSubject: 'Oggetto (facoltativo)',
      labelPhone: 'Numero di telefono (formato E.164 consigliato)',
      sizeLabel: (size: number) => `Dimensioni (${size}px)`,
      labelEc: 'Correzione errori',
      labelFg: 'Primo piano',
      labelBg: 'Sfondo',
      quietZone: 'Margine zona di quiete:',
      modulesLabel: (margin: number) => `${margin} moduli`,
      encodedPayload: 'Stringa payload codificata',
      copyPayload: 'Copia payload',
      emptyError: 'Inserisci il contenuto qui sopra per generare un codice QR scansionabile.',
      encodeError: 'Impossibile codificare il payload QR.',
      qrAlt: 'Codice QR scansionabile generato',
      downloadPng: 'Scarica PNG',
      downloadSvg: 'Scarica SVG',
      copySvg: 'Copia SVG',
      sampleText: 'Benvenuto su UtilityFlow!',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: 'Post standard',
        profileBio: 'Bio del profilo',
        caption: 'Didascalia',
        feedPost: 'Post del feed',
        videoCaption: 'Didascalia video',
        post: 'Post',
        videoTitle: 'Titolo video',
        description: 'Descrizione',
      },
      sampleText:
        'Spedire più velocemente inizia con piccoli miglioramenti quotidiani.\n\nProva le nostre utility per creator basate su browser su https://utilityflow.online/tools/ — nessuna registrazione richiesta.\n\n#CreatorTools #Workflow',
      labelInput: 'Bozza post social / bio',
      copyDraft: 'Copia bozza',
      placeholder: 'Scrivi o incolla la didascalia social, il post, la bio o il titolo YouTube...',
      charsLabel: 'Caratteri:',
      wordsLabel: 'Parole:',
      hashtagsLabel: 'Hashtag:',
      mentionsLabel: 'Menzioni:',
      urlsLabel: 'URL rilevati:',
      urlsWeighted: '(pesati 23 caratteri su X)',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} oltre il limite`,
      left: (n: number, loc: string) => `${n.toLocaleString(loc)} rimanenti`,
      foldLabel: (n: number) => `Piega ~${n} car.`,
      foldTitle: 'Anteprima troncamento feed / piega “Vedi altro”',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `Anteprima di ciò che i lettori vedono prima di toccare “Vedi altro” (${limit} caratteri per ${platform} ${surface}).`,
      selectAria: 'Scegli la piattaforma per l’anteprima del troncamento',
      previewEmpty: 'L’anteprima appare qui...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'Come abbiamo creato 85 utility browser veloci senza tracciamento',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '24.000 visualizzazioni · 2 giorni fa',
      errNotImage: 'Seleziona un file immagine PNG, JPG o WebP.',
      errDecode: 'Impossibile decodificare questo file immagine nel browser.',
      previewEyebrow: 'ANTEPRIMA 1280 × 720',
      emptyThumb: 'Carica l’immagine di copertina per verificarne la leggibilità nel feed',
      thumbAlt: 'Anteprima copertina caricata',
      safeZoneTitle: 'Zona di sovrapposizione del badge di durata',
      chooseThumb: 'Scegli copertina locale (PNG / JPG / WebP)',
      replaceThumb: (name: string) => `Sostituisci: ${name}`,
      recommended: 'Consigliato 1280×720 (16:9), sotto 2 MB · Mai caricata',
      diagTitle: 'Diagnostica specifiche immagine',
      dimLabel: 'Dimensioni',
      dimHdOk: '(HD OK)',
      dimUnder: '(<1280px)',
      aspectLabel: 'Proporzioni',
      aspectMatch: '16:9 corrispondente',
      aspectNo: 'Non 16:9 (potrebbe essere ritagliata o con bande)',
      sizeLabel: 'Dimensione file',
      sizeOk: '(<2 MB OK)',
      sizeOver: '(>2 MB limite)',
      titleLabel: (len: number) => `Titolo video (${len}/100 caratteri · ~60 visibili su mobile)`,
      channelLabel: 'Nome canale',
      durationLabel: 'Durata',
      darkMode: 'Anteprima feed in modalità scura',
      safeZone: 'Evidenzia zona d’angolo del timestamp',
      desktopCard: 'Scheda feed home desktop',
      sidebar: 'Sidebar Watch desktop (consigliata compatta)',
      untitled: 'Video senza titolo',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'Introduzione e panoramica' },
        { id: 2, time: '01:15', title: 'Configurazione dell’architettura principale' },
        { id: 3, time: '04:40', title: 'Demo live e insidie comuni' },
        { id: 4, time: '08:20', title: 'Riepilogo e prossimi passi' },
      ],
      newChapter: (n: number) => `Capitolo ${n}`,
      defaultChapterTitle: 'Capitolo',
      warnInvalid: 'Uno o più timestamp usano un formato non valido (usa MM:SS o HH:MM:SS).',
      warnMin3: 'YouTube richiede almeno 3 timestamp in ordine crescente per attivare i capitoli video.',
      warnFirst: 'Il primo capitolo deve iniziare alle 00:00 affinché YouTube riconosca i capitoli.',
      warnOrder: 'I capitoli non sono in ordine cronologico (fai clic su Ordina cronologicamente).',
      warnShort: (title: string) =>
        `Il capitolo “${title}” dura meno di 10 secondi dopo il capitolo precedente (il minimo YouTube è 10 s).`,
      labelUrl: 'URL video YouTube o ID video (per deep link `?t=` diretti)',
      heading: 'Capitoli video',
      sortBtn: 'Ordina cronologicamente',
      addBtn: 'Aggiungi capitolo',
      tsAria: (n: number) => `Timestamp del capitolo ${n}`,
      titleAria: (n: number) => `Titolo del capitolo ${n}`,
      phTitle: 'Titolo del capitolo',
      removeAria: (n: number) => `Rimuovi capitolo ${n}`,
      specTitle: 'Verifica specifiche capitoli YouTube:',
      descBlock: 'Blocco capitoli della descrizione',
      copyChapters: 'Copia capitoli',
      emptyChapters: 'Aggiungi capitoli qui sopra per generare il blocco della descrizione.',
      shareTitle: 'Link di condivisione con timestamp',
      videoIdLabel: (id: string) => `(ID video: ${id})`,
      noVideoId: '(Inserisci un URL YouTube valido qui sopra)',
      noVideoHint: 'Incolla un URL youtube.com o youtu.be valido per creare link `?t=` cliccabili per ogni capitolo.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'Nessun file selezionato.',
      notPdf: (name: string) => `"${name}" non sembra essere un file PDF.`,
      empty: (name: string) => `"${name}" è vuoto o troncato.`,
      noHeader: (name: string) =>
        `"${name}" non ha un’intestazione %PDF valida e non può essere elaborato.`,
      enterRanges: 'Inserisci numeri di pagina o intervalli come «1-3, 5».',
      rangeOutside: (token: string, total: number) =>
        `L’intervallo «${token}» è fuori dai limiti di pagina del documento (1–${total}).`,
      rangeReversed: (token: string) =>
        `L’intervallo «${token}» ha una pagina iniziale maggiore della pagina finale.`,
      pageMissing: (page: number, total: number) =>
        `La pagina ${page} non esiste (il documento ha ${total} pagine).`,
      invalidSyntax: (token: string) =>
        `Sintassi di pagina non valida «${token}». Usa numeri e intervalli come «1-3, 5».`,
      encrypted:
        'Questo PDF è crittografato o protetto da password. Sbloccalo prima di elaborarlo in locale.',
      unable: 'Impossibile elaborare il file PDF.',
      allKeywords: ['all', 'tutte', 'tutti', 'tutto'],
    },
  },
};
