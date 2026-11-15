import type { ToolLocaleOverride } from '../../types';

/**
 * Italian overrides — Batch 3: Calculator tools (15 tools).
 * Source: src/registry/batches/batch3/calcToolsPart1.ts, Part2, Part3.
 * Filled by Phase 3 translation (Italian, standard).
 */
export const IT_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'calcolatrice-eta',
    name: 'Calcolatrice di Età',
    shortDescription:
      'Calcola la tua età cronologica esatta in anni, mesi e giorni, con il totale in settimane e in giorni e un conto alla rovescia fino al prossimo compleanno.',
    keywords: [
      'calcolatrice di età',
      'età cronologica',
      'calcolatrice data di nascita',
      'conto alla rovescia compleanno',
      'età esatta in giorni',
      'età in anni mesi giorni',
      'quanti anni ho calcolatrice',
      'calcolatrice età da data di nascita',
      'verifica età compleanno',
    ],
    seo: {
      title: 'Calcolatrice di Età – Anni, Mesi e Giorni | UtilityFlow',
      description:
        'Calcola la tua età esatta dalla data di nascita in anni, mesi e giorni, con il totale in settimane e in giorni e un conto alla rovescia gratuito online.',
      primaryKeyword: 'calcolatrice di età',
      secondaryKeywords: [
        'calcolatrice età cronologica',
        'calcolatrice età compleanno',
        'calcolatrice età in giorni',
        'calcolatrice età esatta',
      ],
      longTailKeywords: [
        'calcolare età esatta in anni mesi e giorni online',
        'quanti giorni mancano al mio prossimo compleanno',
        'verificare età a una data futura o passata',
        'quanti anni ho oggi calcolatrice',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calcola l’età cronologica esatta tra una data di nascita e oggi — o qualsiasi data passata o futura — tenendo conto con precisione della durata variabile dei mesi e degli anni bisestili.',
  },
  'percentage-calculator': {
    slug: 'calcolatrice-percentuale',
    name: 'Calcolatrice di Percentuale',
    shortDescription:
      'Risolvi istantaneamente la percentuale di un numero, la percentuale che X rappresenta di Y, e l’aumento o la diminuzione in percentuale.',
    keywords: [
      'calcolatrice di percentuale',
      'calcolatrice variazione percentuale',
      'aumento diminuzione percentuale',
      'quale percentuale di',
      'calcolatrice percentuale di un numero',
      'calcolatrice differenza percentuale',
      'calcolare aumento percentuale',
      'calcolatrice calo percentuale',
      'calcolatrice formula percentuale',
    ],
    seo: {
      title: 'Calcolatrice di Percentuale – % e Variazione | UtilityFlow',
      description:
        'Calcola X % di Y, trova la percentuale che un numero rappresenta di un altro e misura l’aumento o il calo in percentuale in un unico strumento gratuito.',
      primaryKeyword: 'calcolatrice di percentuale',
      secondaryKeywords: [
        'calcolatrice variazione percentuale',
        'calcolatrice aumento percentuale',
        'rapporto in percentuale',
        'calcolatrice percentuale di un numero',
      ],
      longTailKeywords: [
        'calcolare aumento o calo percentuale tra due numeri',
        'come trovare la percentuale di x rispetto a y',
        'calcolatrice percentuale istantanea nel browser',
        'calcolatrice online quanto è x per cento di y',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Risolvi in parallelo le tre domande di percentuale più comuni: trovare X % di un valore, determinare la percentuale che X rappresenta di Y e misurare la crescita o il calo in percentuale.',
  },
  'loan-emi-calculator': {
    slug: 'calcolatrice-prestito-emi',
    name: 'Calcolatrice di Prestito e Rata EMI',
    shortDescription:
      'Calcola le tue rate mensili EMI, gli interessi totali da pagare e un piano di ammortamento annuale o mensile.',
    keywords: [
      'calcolatrice di prestito',
      'calcolatrice emi',
      'piano di ammortamento',
      'rata mensile prestito',
      'calcolatrice prestito emi',
      'calcolatrice emi prestito personale',
      'calcolatrice emi prestito auto',
      'calcolatrice emi mutuo',
      'calcolatrice interessi emi',
    ],
    seo: {
      title: 'Calcolatrice di Prestito EMI e Rate Mensili | UtilityFlow',
      description:
        'Calcola le tue rate mensili (EMI), gli interessi totali e il piano di ammortamento per un prestito personale, auto o aziendale, gratis nel browser online.',
      primaryKeyword: 'calcolatrice di prestito emi',
      secondaryKeywords: [
        'calcolatrice rata mensile prestito',
        'piano di ammortamento prestito',
        'calcolatrice prestito auto',
        'calcolatrice emi prestito personale',
      ],
      longTailKeywords: [
        'calcolare rata emi e interessi totali online',
        'tabella ripartizione capitale e interessi del prestito',
        'calcolatrice rimborso prestito personale e auto',
        'come calcolare la rata emi di un mutuo online',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calcola la tua rata mensile esatta (EMI), gli interessi totali pagati sulla durata del prestito, la ripartizione capitale-interessi e un piano di ammortamento trasparente, anno per anno o mese per mese.',
  },
  'mortgage-calculator': {
    slug: 'calcolatrice-mutuo',
    name: 'Calcolatrice di Mutuo',
    shortDescription:
      'Stima le tue rate mensili di mutuo PITI, includendo l’anticipo, il tasso di interesse, la tassa immobiliare, l’assicurazione e la PMI.',
    keywords: [
      'calcolatrice di mutuo',
      'rata mensile mutuo casa',
      'calcolatrice piti',
      'anticipo mutuo',
      'calcolatrice rata mutuo',
      'stimatore pagamento mutuo',
      'calcolatrice pmi mutuo',
      'calcolatrice mutuo 15 o 30 anni',
      'calcolatrice interessi mutuo',
    ],
    seo: {
      title: 'Calcolatrice di Mutuo – PITI, PMI e Rate | UtilityFlow',
      description:
        'Stima le tue rate mensili di mutuo con anticipo, tasse immobiliari, assicurazione casa, spese condominiali e PMI — gratuito, nel tuo browser, senza invio.',
      primaryKeyword: 'calcolatrice di mutuo',
      secondaryKeywords: [
        'calcolatrice pagamento mutuo piti',
        'calcolatrice interessi mutuo casa',
        'stimatore pmi mutuo',
        'calcolatrice rata mutuo',
      ],
      longTailKeywords: [
        'calcolare rata mutuo con tassa immobiliare e assicurazione',
        'confrontare pagamento mutuo 15 anni o 30 anni',
        'stimare saldo del mutuo nel tempo',
        'quanto posso pagare al mese per un mutuo',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Modella il tuo vero obbligo mensile abitativo (capitale e interessi, più tasse immobiliari, assicurazione casa, spese condominiali e assicurazione ipotecaria privata), oltre agli interessi totali su tutta la durata e al rimborso annuale del prestito.',
  },
  'compound-interest-calculator': {
    slug: 'calcolatrice-interessi-composti',
    name: 'Calcolatrice di Interessi Composti',
    shortDescription:
      'Prevedi la crescita di un investimento con un deposito iniziale, versamenti mensili ricorrenti, una frequenza di capitalizzazione e un adeguamento per l’inflazione.',
    keywords: [
      'calcolatrice di interessi composti',
      'calcolatrice crescita investimento',
      'risparmio a interessi composti',
      'calcolatrice valore futuro',
      'calcolatrice risparmio composto',
      'calcolatrice capitalizzazione mensile',
      'calcolatrice rendimento investimento',
      'calcolatrice risparmio pensione',
      'interessi composti con versamenti',
    ],
    seo: {
      title: 'Calcolatrice di Interessi Composti – Risparmio | UtilityFlow',
      description:
        'Prevedi il saldo futuro di un investimento con capitale iniziale, versamenti mensili, capitalizzazione a scelta e tabella di crescita annuale, gratuitamente.',
      primaryKeyword: 'calcolatrice di interessi composti',
      secondaryKeywords: [
        'calcolatrice risparmio composto',
        'calcolatrice valore futuro investimento',
        'crescita con versamenti mensili',
        'calcolatrice crescita investimento',
      ],
      longTailKeywords: [
        'calcolare interessi composti con versamenti mensili online',
        'confrontare crescita capitalizzazione mensile o giornaliera',
        'tabella interessi composti anno per anno',
        'quanto cresceranno i miei risparmi in 20 anni',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Prevedi come un importo iniziale unico, più depositi mensili regolari, cresce nel corso degli anni grazie agli interessi composti, con una frequenza di capitalizzazione a scelta e una tabella annuale capitale contro interessi.',
  },
  'discount-margin-calculator': {
    slug: 'calcolatrice-sconto-margine',
    name: 'Calcolatrice di Sconto e Margine',
    shortDescription:
      'Calcola i prezzi scontati con sconti cumulati o il margine di profitto, la percentuale di ricarico e il profitto lordo dal costo.',
    keywords: [
      'calcolatrice di sconto',
      'calcolatrice margine di profitto',
      'margine o ricarico',
      'calcolatrice prezzo scontato',
      'calcolatrice margine lordo',
      'calcolatrice percentuale di ricarico',
      'calcolatrice sconti cumulati',
      'calcolatrice ricarico commerciale',
      'prezzo scontato dopo sconto',
    ],
    seo: {
      title: 'Calcolatrice di Sconto e Margine – Prezzi | UtilityFlow',
      description:
        'Calcola i prezzi di vendita finali con sconti cumulati e tasse, o confronta margine lordo e ricarico dal costo e dal prezzo di vendita, gratis online.',
      primaryKeyword: 'calcolatrice di sconto e margine',
      secondaryKeywords: [
        'calcolatrice prezzo scontato con sconto',
        'calcolatrice margine lordo o ricarico',
        'calcolatrice profitto commerciale',
        'calcolatrice prezzo scontato',
      ],
      longTailKeywords: [
        'calcolare prezzo finale dopo doppio sconto e tassa di vendita',
        'differenza tra margine di profitto e percentuale di ricarico',
        'calcolatrice margine e profitto per articolo e-commerce',
        'calcolare margine in percentuale da costo e prezzo',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Passa facilmente tra la modalità Sconto commerciale (sconti cumulati più tassa di vendita facoltativa) e la modalità Margine di profitto e ricarico per fissare i tuoi prezzi con precisione, senza confondere margine e ricarico.',
  },
  'vat-tax-calculator': {
    slug: 'calcolatrice-iva-tasse',
    name: 'Calcolatrice di IVA e Tassa di Vendita',
    shortDescription:
      'Aggiungi l’IVA, la GST o la tassa di vendita ai prezzi netti, oppure estrai correttamente la tassa dalle fatture lorde tasse comprese.',
    keywords: [
      'calcolatrice di iva',
      'calcolatrice tassa di vendita',
      'calcolatrice iva inversa',
      'calcolatrice tassa gst',
      'aggiungere iva al prezzo',
      'estrarre tassa dal lordo',
      'calcolatrice iva inclusa',
      'tassa di vendita sul totale',
      'calcolatrice prezzo netto',
    ],
    seo: {
      title: 'Calcolatrice di IVA e Tassa – Netto e Lordo | UtilityFlow',
      description:
        'Aggiungi IVA, GST o tassa di vendita a un subtotale netto, oppure estrai la tassa e il prezzo netto senza tassa da un totale lordo tasse comprese, gratis.',
      primaryKeyword: 'calcolatrice di iva',
      secondaryKeywords: [
        'calcolatrice iva inversa',
        'escludere tassa di vendita dal totale',
        'calcolatrice gst inclusa o esclusa',
        'calcolatrice aggiunta tassa di vendita',
      ],
      longTailKeywords: [
        'come togliere l’iva da un prezzo lordo online',
        'aggiungere 20 per cento di iva o un tasso personalizzato',
        'calcolatrice dettaglio netto tassa e lordo di fattura',
        'calcolare l’iva al contrario dal prezzo totale',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calcola il prezzo netto, l’importo della tassa e il totale lordo in entrambi i sensi: aggiungi l’IVA, la GST o la tassa di vendita a un subtotale senza tassa, oppure estrai l’importo esatto senza tassa da una ricevuta già tasse comprese.',
  },
  'salary-calculator': {
    slug: 'calcolatrice-stipendio',
    name: 'Calcolatrice di Stipendio e Busta Paga',
    shortDescription:
      'Converti le retribuzioni orarie, giornaliere, settimanali, quindicinali, mensili e annuali con ore e settimane all’anno personalizzate.',
    keywords: [
      'calcolatrice di stipendio',
      'stipendio orario verso annuale',
      'convertitore di busta paga',
      'calcolatrice stipendio orario',
      'stipendio annuale verso orario',
      'calcolatrice stipendio mensile',
      'calcolatrice busta paga quindicinale',
      'convertitore stipendio lordo',
      'stipendio verso tariffa oraria',
    ],
    seo: {
      title: 'Calcolatrice di Stipendio – Orario e Annuale | UtilityFlow',
      description:
        'Converti stipendi orari, giornalieri, settimanali, quindicinali, mensili e annuali con ore a settimana e settimane pagate a scelta, gratis nel browser.',
      primaryKeyword: 'calcolatrice di stipendio',
      secondaryKeywords: [
        'calcolatrice stipendio orario verso stipendio',
        'stipendio annuale verso tariffa oraria',
        'calcolatrice busta paga quindicinale',
        'convertitore stipendio lordo',
      ],
      longTailKeywords: [
        'convertire 50 dollari l’ora in stipendio annuale',
        'dettaglio stipendio lordo con settimane di ferie non pagate',
        'convertitore retribuzione con ore a settimana personalizzate',
        'convertire stipendio annuale in busta paga mensile e quindicinale',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Converti qualsiasi tasso di retribuzione — orario, giornaliero, settimanale, quindicinale, bimensile, mensile o annuale — in tutte le frequenze di paga, con ore di lavoro a settimana e settimane pagate all’anno configurabili.',
  },
  'tip-calculator': {
    slug: 'calcolatrice-mancia',
    name: 'Calcolatrice di Mancia e Divisione del Conto',
    shortDescription:
      'Calcola gli importi di mancia, l’esclusione facoltativa della tassa prima della mancia, le divisioni del conto per persona e un arrotondamento pulito.',
    keywords: [
      'calcolatrice di mancia',
      'calcolatrice divisione conto',
      'calcolatrice mancia ristorante',
      'dividere il conto in parti uguali',
      'calcolatrice percentuale di mancia',
      'calcolatrice divisione fattura',
      'calcolatrice mancia servizio',
      'mancia su conto senza tasse',
      'divisore conto ristorante',
    ],
    seo: {
      title: 'Calcolatrice di Mancia – Divisione e Servizio | UtilityFlow',
      description:
        'Calcola le mance al ristorante con preimpostazioni rapide, la mancia sul subtotale senza tasse e la divisione equa del conto tra commensali, gratis online.',
      primaryKeyword: 'calcolatrice di mancia',
      secondaryKeywords: [
        'calcolatrice divisione conto',
        'calcolatrice mancia servizio',
        'divisione mancia ristorante',
        'calcolatrice mancia per persona',
      ],
      longTailKeywords: [
        'calcolare mancia del 18 o 20 per cento prima delle tasse online',
        'dividere il conto della cena e la mancia tra amici',
        'arrotondare il totale per persona calcolatrice di mancia',
        'dividere il conto con mancia e tasse per persona',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calcola rapidamente una mancia equa e dividi i conti di ristorante, consegna o uscita di gruppo in parti uguali tra qualsiasi numero di persone — con esclusione facoltativa della tassa e arrotondamento del conto.',
  },
  'bmi-calculator': {
    slug: 'calcolatrice-imc',
    name: 'Calcolatrice di IMC',
    shortDescription:
      'Calcola l’indice di massa corporea (IMC) in unità metriche o imperiali, con le categorie di peso dell’OMS e la fascia di peso sano.',
    keywords: [
      'calcolatrice di imc',
      'indice di massa corporea',
      'fascia di peso sano',
      'imc metrico imperiale',
      'calcolare imc',
      'calcolatrice tabella imc',
      'imc per adulti',
      'calcolatrice peso sano',
      'calcolatrice imc kg m2',
    ],
    seo: {
      title: 'Calcolatrice di IMC – Indice di Massa e Peso | UtilityFlow',
      description:
        'Calcola il tuo indice di massa corporea in unità metriche o imperiali, vedi la categoria di peso OMS e la fascia di peso sano per la tua altezza, gratis.',
      primaryKeyword: 'calcolatrice di imc',
      secondaryKeywords: [
        'calcolatrice indice di massa corporea',
        'fascia di peso sano imc',
        'calcolatrice imc imperiale',
        'calcolatrice categoria di peso imc',
      ],
      longTailKeywords: [
        'calcolare imc in piedi pollici e libbre',
        'categorie imc adulti organizzazione mondiale della sanità',
        'trovare fascia di peso sano per la propria altezza',
        'qual è la fascia di imc sano per la mia altezza',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Calcola l’indice di massa corporea (IMC) degli adulti usando misure metriche (cm/kg) o imperiali (ft, in/lb), verifica le fasce di classificazione dell’Organizzazione mondiale della Sanità e consulta la fascia di peso sano 18,5–24,9 per la tua altezza.',
  },
  'calorie-calculator': {
    slug: 'calcolatrice-calorie',
    name: 'Calcolatrice di Calorie e TDEE',
    shortDescription:
      'Stima il tuo metabolismo basale (MB) e la tua spesa energetica giornaliera totale (TDEE) con obiettivi di peso mirati.',
    keywords: [
      'calcolatrice di calorie',
      'calcolatrice tdee',
      'calcolatrice bmr',
      'apporto calorico giornaliero',
      'calcolatrice calorie di mantenimento',
      'calcolatrice deficit calorico',
      'calcolatrice calorie per perdere peso',
      'calcolatrice macro proteine carboidrati grassi',
      'quante calorie al giorno',
    ],
    seo: {
      title: 'Calcolatrice di Calorie e TDEE – MB e Macro | UtilityFlow',
      description:
        'Stima il tuo MB e il tuo TDEE con la formula di Mifflin-St Jeor, fissa obiettivi di perdita o aumento di peso e pianifica i macro in grammi, gratis online.',
      primaryKeyword: 'calcolatrice di calorie',
      secondaryKeywords: [
        'calcolatrice tdee',
        'calcolatrice bmr mifflin st jeor',
        'calcolatrice fabbisogno calorico giornaliero',
        'deficit calorico per perdere peso',
      ],
      longTailKeywords: [
        'calcolare calorie di mantenimento e deficit di perdita di peso online',
        'stimatore spesa calorica giornaliera mifflin st jeor',
        'calcolatrice ripartizione macro tdee metrica e imperiale',
        'quante calorie devo mangiare al giorno per dimagrire',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Stima il tuo metabolismo basale (MB) e la tua spesa energetica giornaliera totale (TDEE) con l’equazione di Mifflin-St Jeor, validata clinicamente, con obiettivi di macro per un leggero deficit, una perdita di grasso standard, un aumento magro e il mantenimento.',
  },
  'date-difference-calculator': {
    slug: 'calcolatrice-differenza-date',
    name: 'Calcolatrice di Differenza tra Date',
    shortDescription:
      'Trova gli anni, mesi, giorni, giorni feriali e giorni del fine settimana esatti tra due date, oppure aggiungi e sottrai intervalli di calendario.',
    keywords: [
      'calcolatrice differenza tra date',
      'giorni tra due date',
      'contatore giorni feriali',
      'aggiungere giorni a una data',
      'calcolatrice giorni tra due date',
      'calcolatrice giorni lavorativi',
      'contare giorni feriali tra due date',
      'quanti giorni prima di una data',
      'addizione e sottrazione di date',
    ],
    seo: {
      title: 'Calcolatrice di Differenza tra Date – Giorni | UtilityFlow',
      description:
        'Conta gli anni, mesi, giorni, giorni feriali e giorni del fine settimana esatti tra due date, oppure aggiungi e sottrai intervalli di calendario online.',
      primaryKeyword: 'calcolatrice differenza tra date',
      secondaryKeywords: [
        'giorni tra due date',
        'contatore giorni lavorativi della settimana',
        'calcolatrice aggiunta mesi a una data',
        'contare giorni del fine settimana tra due date',
      ],
      longTailKeywords: [
        'contare giorni feriali e giorni del fine settimana tra due date',
        'calcolare mesi e giorni di calendario esatti tra due date',
        'aggiungere o sottrarre anni mesi giorni a una data',
        'quanti giorni feriali tra due date online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Misura durate di calendario esatte tra due date — compreso il conteggio dei giorni feriali rispetto ai giorni del fine settimana e il conteggio facoltativo della data finale inclusa — oppure aggiungi e sottrai anni, mesi e giorni a una data di riferimento.',
  },
  'time-duration-calculator': {
    slug: 'calcolatrice-durata-tempo',
    name: 'Calcolatrice di Durata di Tempo',
    shortDescription:
      'Calcola il tempo trascorso HH:MM:SS tra due ore (con pause e turni di notte) oppure somma fogli di ore a più righe.',
    keywords: [
      'calcolatrice durata di tempo',
      'calcolatrice di ore',
      'calcolatrice foglio di ore',
      'calcolatrice tempo trascorso',
      'calcolatrice ore di lavoro',
      'tempo trascorso tra due ore',
      'calcolatrice somma ore e minuti',
      'calcolatrice ore decimali',
      'calcolatrice ore di turno',
    ],
    seo: {
      title: 'Calcolatrice di Durata – Ore e Fogli di Ore | UtilityFlow',
      description:
        'Calcola il tempo trascorso tra due ore, deduci le pause non pagate, gestisci i turni di notte o somma i fogli di ore in ore decimali, gratis nel browser.',
      primaryKeyword: 'calcolatrice durata di tempo',
      secondaryKeywords: [
        'calcolatrice ore di lavoro',
        'sommatore durate foglio di ore',
        'convertitore ore decimali',
        'calcolatrice ore di turno di notte',
      ],
      longTailKeywords: [
        'calcolare tempo trascorso con pausa pranzo non pagata e notte',
        'convertire durata hh mm ss in ore decimali',
        'sommare più righe di ore minuti secondi',
        'come calcolare le ore di lavoro con pausa pranzo',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Determina le ore, i minuti e i secondi esatti trascorsi tra due ore — gestendo le deduzioni di pause non pagate e i turni di notte che attraversano la mezzanotte — oppure somma righe di durata illimitate in ore decimali di paga.',
  },
  'unit-converter': {
    slug: 'convertitore-unita',
    name: 'Convertitore di Unità',
    shortDescription:
      'Converti le unità di lunghezza, peso, temperatura, superficie, volume, velocità e archiviazione digitale con una tabella di riferimento completa.',
    keywords: [
      'convertitore di unità',
      'convertitore metrico imperiale',
      'convertitore lunghezza peso temperatura',
      'convertitore archiviazione digitale',
      'convertitore metri in piedi',
      'convertitore kg in libbre',
      'convertitore celsius in fahrenheit',
      'convertitore litri in galloni',
      'convertitore km in miglia',
    ],
    seo: {
      title: 'Convertitore di Unità – Lunghezza e Peso | UtilityFlow',
      description:
        'Converti lunghezza, peso, temperatura, superficie, volume, velocità e archiviazione digitale tra unità metriche e imperiali, con una tabella completa.',
      primaryKeyword: 'convertitore di unità',
      secondaryKeywords: [
        'convertitore metrico verso imperiale',
        'temperatura celsius fahrenheit kelvin',
        'convertitore dati gb in gib',
        'convertitore chilometri in miglia',
      ],
      longTailKeywords: [
        'convertire chilometri in miglia e chilogrammi in libbre online',
        'convertitore archiviazione gigabyte decimale o gibibyte binario',
        'convertitore di unità scientifico e tecnico con tabella',
        'come convertire celsius in fahrenheit e kelvin online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Converti istantaneamente in sette famiglie di misure — lunghezza, peso e massa, temperatura, superficie, volume, velocità e archiviazione digitale — con una tabella automatica fianco a fianco che mostra ogni unità della categoria.',
  },
  'currency-calculator': {
    slug: 'convertitore-valute',
    name: 'Calcolatrice di Valute',
    shortDescription:
      'Converti le valute con il tuo tasso di cambio manuale esatto o tassi di riferimento BCE facoltativi, con calcolo delle commissioni di cambio.',
    apiNotice:
      'Richiede un’API esterna per i tassi di cambio in tempo reale e non usa mai tassi offline inventati. Usa per impostazione predefinita il tasso di cambio inserito manualmente (1,0000), oppure fai clic su «Recupera il tasso di riferimento BCE» per richiedere i tassi a api.frankfurter.app.',
    keywords: [
      'calcolatrice di valute',
      'calcolatrice tasso di cambio',
      'calcolatrice commissioni di cambio',
      'convertitore di valute manuale',
      'convertitore usd verso eur',
      'convertitore di valute con commissioni',
      'calcolatrice maggiorazione tasso di cambio',
      'calcolatrice commissioni transazione estera',
      'calcolatrice tasso di cambio inverso',
    ],
    seo: {
      title: 'Calcolatrice di Valute – Tassi e Commissioni | UtilityFlow',
      description:
        'Converti tra le principali valute con il tuo tasso quotato e aggiungi le commissioni di cambio per vedere l’importo netto, o recupera un tasso BCE online.',
      primaryKeyword: 'calcolatrice di valute',
      secondaryKeywords: [
        'calcolatrice commissioni tasso di cambio',
        'convertitore di valute manuale',
        'calcolatrice spread di cambio',
        'convertitore tasso di riferimento bce',
      ],
      longTailKeywords: [
        'convertire valuta con tasso di cambio bancario personalizzato e commissioni',
        'calcolatrice di valute senza tassi codificati inventati',
        'calcolare importo netto in valuta estera dopo maggiorazione',
        'quanto riceverò dopo le commissioni di conversione di valuta',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Converti tra le principali valute mondiali in tutta trasparenza usando il tasso di cambio esatto quotato dalla tua banca, dal tuo broker o dalla tua fattura — con deduzione facoltativa delle commissioni di cambio, calcolo del tasso inverso e consultazione su richiesta del tasso di riferimento BCE.',
  },
};
