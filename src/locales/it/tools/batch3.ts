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
    instructions: [
      {
        title: 'Inserisci la data di nascita',
        description:
          'Seleziona il mese, il giorno e l’anno della tua nascita nel campo Data di nascita.',
      },
      {
        title: 'Scegli la data di confronto',
        description:
          'Lascia la data di riferimento su oggi oppure scegli qualsiasi data passata o futura per calcolare l’età in quel giorno.',
      },
      {
        title: 'Avvia il calcolo dell’età',
        description:
          'Il risultato si aggiorna istantaneamente nel tuo browser — nessun pulsante da premere e nessun dato inviato.',
      },
      {
        title: 'Consulta il dettaglio completo',
        description:
          'Leggi gli anni, i mesi e i giorni esatti, il totale in settimane, il totale dei giorni vissuti e il conto alla rovescia fino al prossimo compleanno.',
      },
      {
        title: 'Copia o condividi il risultato',
        description:
          'Copia il dettaglio dell’età per incollarlo in un modulo, un messaggio o un documento, dove ti serve.',
      },
      {
        title: 'Suggerimento: verifica una tappa futura',
        description:
          'Imposta la data di confronto su un compleanno, un esame o una data di pensionamento per vedere esattamente quanti anni avrai quel giorno.',
      },
    ],
    examples: [
      {
        title: 'Verifica dell’età per una tappa importante',
        input: 'Data di nascita: 1995-06-15 · Data di riferimento: 2025-11-12',
        output: '30 anni, 4 mesi, 28 giorni (11 108 giorni)',
        explanation:
          'Usa la durata esatta dei mesi del calendario e gli anni bisestili tra il 1995 e il 2025.',
      },
      {
        title: 'Età esatta a un compleanno tondo',
        input: 'Data di nascita: 2000-01-01 · Data di riferimento: 2025-01-01',
        output: '25 anni esatti (9 132 giorni)',
        explanation:
          'Venticinque anni comprendono 7 giorni bisestili (2000, 2004, 2008, 2012, 2016, 2020 e 2024): 25 × 365 + 7 = 9 132 giorni.',
      },
    ],
    benefits: [
      'Gestisce i mesi di 28, 29, 30 e 31 giorni senza l’approssimazione del mese di 30 giorni',
      'Gestisce con precisione i compleanni del 29 febbraio per i conti alla rovescia',
      'Mostra contemporaneamente il totale in mesi, in settimane, in giorni e le ore approssimative',
      'Segnala gli intervalli non validi quando la data di nascita segue la data di destinazione',
    ],
    useCases: [
      'Verificare l’idoneità legata all’età esatta per l’iscrizione scolastica, una pensione o moduli ufficiali',
      'Calcolare anniversari di tappe in giorni o in settimane totali',
      'Verificare quanti anni avrà una persona a una data precisa di un evento futuro',
      'Sapere quanti giorni mancano al prossimo compleanno',
    ],
    faqs: [
      {
        question: 'Come gestisce la calcolatrice di età i compleanni degli anni bisestili (29 febbraio)?',
        answer:
          'Per gli anni non bisestili, il conto alla rovescia del prossimo compleanno si allinea al 28 febbraio dell’anno di destinazione, in modo che il conteggio dei giorni resti esatto.',
      },
      {
        question: 'Perché il numero totale di giorni a volte differisce da anni × 365 nella calcolatrice di età?',
        answer:
          'Ogni anno bisestile aggiunge un 366º giorno (il 29 febbraio), e i mesi del calendario variano da 28 a 31 giorni. Questo strumento conta le differenze esatte di giorni di calendario in UTC.',
      },
      {
        question: 'Posso calcolare la mia età a una data futura con la calcolatrice di età?',
        answer:
          'Sì. Modifica la data di riferimento con qualsiasi data futura per vedere la tua età esatta prevista in quel giorno.',
      },
      {
        question: 'La calcolatrice di età è gratuita?',
        answer:
          'Sì, è completamente gratuita, senza registrazione, e funziona interamente nel tuo browser: la tua data di nascita non viene mai inviata.',
      },
      {
        question: 'Che cosa mostra la calcolatrice di età oltre agli anni?',
        answer:
          'Mostra gli anni, i mesi e i giorni, oltre al totale in mesi, in settimane e in giorni vissuti, e i giorni restanti fino al prossimo compleanno.',
      },
      {
        question: 'Quanto è precisa la calcolatrice di età?',
        answer:
          'Usa la durata esatta dei mesi del calendario e gli anni bisestili, quindi il risultato corrisponde al vero calendario piuttosto che a un’approssimazione di mesi di 30 giorni.',
      },
      {
        question: 'La calcolatrice di età può indicare la mia età solo in giorni?',
        answer:
          'Sì. Il dettaglio comprende il totale dei giorni vissuti, utile per contare le tappe e gli anniversari misurati in giorni.',
      },
      {
        question: 'Posso usare la calcolatrice di età per conoscere la mia età in settimane o in mesi?',
        answer:
          'Sì, i risultati comprendono il totale delle settimane e il totale dei mesi, oltre al dettaglio in anni, mesi e giorni.',
      },
      {
        question: 'La calcolatrice di età registra la mia data di nascita?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser, e niente di ciò che inserisci viene registrato o inviato a un server.',
      },
      {
        question: 'Che cosa succede se inserisco una data di nascita successiva alla data di confronto?',
        answer:
          'Lo strumento mostra un messaggio di convalida, perché è impossibile calcolare un’età quando la data di nascita è successiva alla data di confronto.',
      },
      {
        question: 'La calcolatrice di età può dirmi quanti anni avrò alla pensione?',
        answer:
          'Sì. Imposta la data di confronto sulla data di pensionamento prevista e lo strumento indicherà la tua età esatta quel giorno.',
      },
      {
        question: 'La calcolatrice di età conta le ore che ho vissuto?',
        answer:
          'Mostra un numero approssimativo di ore basato sul totale dei giorni vissuti, oltre al risultato esatto in anni, mesi e giorni.',
      },
      {
        question: 'Posso verificare l’età di un’altra persona con la calcolatrice di età?',
        answer:
          'Sì, puoi inserire qualsiasi data di nascita per calcolare l’età di quella persona, per esempio per verificare l’idoneità alla scuola o a una pensione.',
      },
      {
        question: 'Perché la calcolatrice di età chiede una data di confronto?',
        answer:
          'La data di confronto è il giorno in cui vuoi misurare la tua età: oggi per impostazione predefinita, o qualsiasi data passata o futura per le tue previsioni e i tuoi documenti.',
      },
      {
        question: 'La calcolatrice di età funziona per date di nascita molto antiche?',
        answer:
          'Sì, gestisce date di nascita su diversi decenni, contando correttamente gli anni bisestili su tutto il periodo.',
      },
      {
        question: 'Posso usare la calcolatrice di età per moduli ufficiali?',
        answer:
          'Sì, il risultato esatto in anni, mesi e giorni è adatto per verificare l’idoneità legata all’età, anche se i documenti ufficiali restano la prova definitiva.',
      },
      {
        question: 'Come conta la calcolatrice di età il mio prossimo compleanno?',
        answer:
          'Confronta la data di oggi con quella del tuo prossimo compleanno e mostra il numero esatto di giorni restanti.',
      },
      {
        question: 'La calcolatrice di età ha bisogno di una connessione a Internet?',
        answer:
          'Ha bisogno che la pagina sia caricata, ma il calcolo in sé viene eseguito localmente nel tuo browser, senza invio di dati.',
      },
      {
        question: 'La calcolatrice di età può indicare la mia età a una data passata?',
        answer:
          'Sì. Scegli qualsiasi data passata come data di confronto per vedere esattamente quanti anni avevi quel giorno.',
      },
      {
        question: 'La mia data di nascita è privata quando uso la calcolatrice di età?',
        answer:
          'Sì. Lo strumento funziona localmente nel tuo browser, quindi la tua data di nascita non lascia mai il tuo dispositivo.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli il blocco di calcolo percentuale',
        description:
          'Ogni scheda risolve una formula di percentuale distinta in modo indipendente, senza cancellare gli altri numeri.',
      },
      {
        title: 'Inserisci i valori numerici',
        description:
          'Digita numeri interi o decimali nei campi evidenziati; i risultati si ricalcolano a ogni digitazione.',
      },
      {
        title: 'Avvia il calcolo istantaneamente',
        description:
          'Non c’è alcun pulsante di invio: il risultato in percentuale appare immediatamente mentre digiti, direttamente nel tuo browser.',
      },
      {
        title: 'Esamina i risultati delle formule',
        description:
          'Consulta sia la variazione percentuale con segno sia la differenza numerica assoluta per verificare una crescita o un calo.',
      },
      {
        title: 'Copia il risultato in percentuale',
        description:
          'Copia la risposta per incollarla in un rapporto, una fattura, un foglio di calcolo o un messaggio.',
      },
      {
        title: 'Suggerimento: verifica un valore iniziale nullo o negativo',
        description:
          'Se il risultato mostra un messaggio di convalida, verifica la presenza di un denominatore nullo o di un valore iniziale negativo, che lo strumento segnala.',
      },
    ],
    examples: [
      {
        title: 'Misurare la percentuale di crescita dei ricavi',
        input: 'Da 120 a 150',
        output: '+25 % (+30 di variazione assoluta)',
        explanation: 'Calcolato come ((150 - 120) / |120|) × 100 = +25 %.',
      },
      {
        title: 'Trovare il 20 % di un numero',
        input: '20 % di 250',
        output: '50',
        explanation: 'Calcolato come 250 × (20 / 100) = 50.',
      },
    ],
    benefits: [
      'Mostra le tre formule di percentuale affiancate in un’unica schermata',
      'Gestisce correttamente decimali, valori iniziali negativi e denominatori nulli',
      'Mostra la variazione assoluta oltre alla variazione percentuale',
      'Non richiede alcun ricaricamento della pagina né clic di invio',
    ],
    useCases: [
      'Verificare la crescita mensile del traffico, delle vendite o del tasso di conversione',
      'Calcolare i voti d’esame e le percentuali di superamento',
      'Applicare rapidamente maggiorazioni o deduzioni in percentuale alle fatture',
      'Confrontare prezzi o budget prima e dopo',
    ],
    faqs: [
      {
        question: 'Come viene calcolata la variazione percentuale quando i valori calano nella calcolatrice di percentuale?',
        answer:
          'La variazione percentuale usa ((Nuovo valore − Vecchio valore) / |Vecchio valore|) × 100. Quando il nuovo valore è inferiore al vecchio, lo strumento indica chiaramente un calo percentuale negativo.',
      },
      {
        question: 'Che cosa succede se il denominatore o il valore iniziale è 0 nella calcolatrice di percentuale?',
        answer:
          'La divisione per zero è matematicamente indefinita, quindi la calcolatrice mostra un chiaro messaggio di convalida invece di infinito o NaN.',
      },
      {
        question: 'Posso inserire percentuali decimali come 7,25 % nella calcolatrice di percentuale?',
        answer:
          'Sì. Tutte le voci accettano valori decimali e conservano tutta la precisione dei numeri in virgola mobile prima dell’arrotondamento di visualizzazione.',
      },
      {
        question: 'La calcolatrice di percentuale è gratuita?',
        answer:
          'Sì, è completamente gratuita, senza registrazione, e funziona interamente nel tuo browser: i tuoi numeri non vengono mai inviati.',
      },
      {
        question: 'Come trovare la percentuale che un numero rappresenta di un altro?',
        answer:
          'Usa la scheda «quale percentuale»: inserisci la parte e il tutto, e lo strumento divide la parte per il tutto e poi moltiplica per 100.',
      },
      {
        question: 'Come calcolare X % di un numero con la calcolatrice di percentuale?',
        answer:
          'Inserisci la percentuale e il numero nella scheda «X % di Y», e lo strumento moltiplica il numero per la percentuale divisa per 100.',
      },
      {
        question: 'Qual è la differenza tra variazione percentuale e punti percentuali?',
        answer:
          'La variazione percentuale è relativa al valore iniziale, mentre i punti percentuali sono la semplice differenza aritmetica tra due percentuali.',
      },
      {
        question: 'La calcolatrice di percentuale gestisce i numeri negativi?',
        answer:
          'Sì, gestisce i valori iniziali negativi, e il risultato con segno indica se si tratta di un aumento o di un calo.',
      },
      {
        question: 'Come calcolare un aumento percentuale tra due numeri?',
        answer:
          'Inserisci il vecchio valore e il nuovo valore nella scheda di variazione; lo strumento mostra l’aumento percentuale e la differenza assoluta.',
      },
      {
        question: 'Come calcolare un calo percentuale?',
        answer:
          'Inserisci il valore iniziale più alto e il nuovo valore più basso, e lo strumento indica il calo come percentuale negativa.',
      },
      {
        question: 'Posso usare la calcolatrice di percentuale per i voti d’esame?',
        answer:
          'Sì. Dividi i punti ottenuti per il totale dei punti e lo strumento mostra il voto in percentuale.',
      },
      {
        question: 'La calcolatrice di percentuale mostra anche la differenza assoluta?',
        answer:
          'Sì, oltre alla variazione percentuale mostra la differenza numerica assoluta tra i due valori.',
      },
      {
        question: 'Posso calcolare una percentuale di sconto con questo strumento?',
        answer:
          'Sì. Inserisci il prezzo originale e il prezzo scontato nella scheda di variazione per vedere lo sconto come calo percentuale.',
      },
      {
        question: 'La calcolatrice di percentuale registra i miei numeri?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser, e niente di ciò che inserisci viene registrato o inviato a un server.',
      },
      {
        question: 'Quanto sono precisi i risultati della calcolatrice di percentuale?',
        answer:
          'I risultati usano tutta la precisione dei numeri in virgola mobile prima dell’arrotondamento di visualizzazione, quindi le piccole differenze decimali sono gestite correttamente.',
      },
      {
        question: 'Posso usare la calcolatrice di percentuale per la crescita delle vendite?',
        answer:
          'Sì, è ideale per la crescita mensile delle vendite, del traffico o del tasso di conversione, mostrando sia la percentuale sia la variazione assoluta.',
      },
      {
        question: 'Che cosa significa una variazione percentuale negativa?',
        answer:
          'Un risultato negativo significa che il nuovo valore è inferiore al vecchio valore: si tratta di un calo piuttosto che di un aumento.',
      },
      {
        question: 'Posso calcolare percentuali con numeri molto grandi?',
        answer:
          'Sì, lo strumento accetta grandi numeri interi e decimali, e ricalcola istantaneamente mentre digiti.',
      },
      {
        question: 'Devo premere un pulsante per calcolare una percentuale?',
        answer:
          'No. I risultati si aggiornano automaticamente a ogni digitazione, senza ricaricamento della pagina né clic di invio.',
      },
      {
        question: 'La calcolatrice di percentuale può ritrovare il valore originale da una percentuale?',
        answer:
          'Le tre schede coprono X % di Y, la percentuale che X rappresenta di Y e la variazione percentuale; per un calcolo inverso, dividi l’importo noto per la percentuale espressa in decimale.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci i dettagli del prestito',
        description:
          'Indica il capitale preso in prestito, il tasso di interesse annuo (TAEG in %) e la durata del prestito in mesi o in anni.',
      },
      {
        title: 'Scegli l’unità di durata',
        description:
          'Passa la durata tra anni e mesi per farla corrispondere al modo in cui il tuo finanziatore esprime la durata del prestito.',
      },
      {
        title: 'Avvia il calcolo della rata EMI',
        description:
          'La rata EMI, gli interessi totali e il rimborso totale si aggiornano istantaneamente nel tuo browser — nessun dato viene inviato.',
      },
      {
        title: 'Consulta il riepilogo della rata EMI',
        description:
          'Esamina la rata mensile EMI, gli interessi totali da pagare, il rimborso totale e la percentuale di quota degli interessi.',
      },
      {
        title: 'Consulta il piano di ammortamento',
        description:
          'Passa dal riepilogo annuale alla tabella mensile per vedere come il rimborso del capitale accelera con il tempo.',
      },
      {
        title: 'Suggerimento: confronta una durata più breve',
        description:
          'Prova una durata più breve per vedere quanti interessi totali potresti risparmiare, poi copia le cifre per confrontare le offerte di prestito fianco a fianco.',
      },
    ],
    examples: [
      {
        title: 'Prestito auto o personale di 5 anni',
        input: 'Capitale: 25 000 $ · Tasso: 7,5 % · Durata: 60 mesi',
        output: 'Rata mensile EMI: 500,95 $ · Interessi totali: 5 056,92 $ · Totale pagato: 30 056,92 $',
        explanation:
          'Usa la formula EMI standard a capitale residuo: P·r·(1+r)^n / ((1+r)^n - 1).',
      },
      {
        title: 'Prestito a interessi 0 %',
        input: 'Capitale: 12 000 $ · Tasso: 0 % · Durata: 24 mesi',
        output: 'Rata mensile EMI: 500 $ · Interessi totali: 0 $ · Totale pagato: 12 000 $',
        explanation:
          'Con un TAEG dello 0 %, la rata mensile è semplicemente il capitale diviso per il numero di mesi.',
      },
    ],
    benefits: [
      'Usa la matematica EMI esatta a capitale residuo con interessi composti',
      'Gestisce con precisione i prestiti promozionali allo 0 % senza errori di divisione',
      'Comprende viste di piano di ammortamento annuale e mensile intercambiabili',
      'Permette di passare l’unità di durata tra anni e mesi con semplicità',
    ],
    useCases: [
      'Confrontare le offerte di prestiti auto, per studenti o personali di diversi finanziatori',
      'Valutare come accorciare la durata di un prestito riduce gli interessi su tutta la durata',
      'Prevedere il saldo residuo del prestito dopo 12, 24 o 36 rate mensili',
      'Confrontare i piani allo 0 % con un finanziamento a basso TAEG',
    ],
    faqs: [
      {
        question: 'Quale formula usa la calcolatrice di prestito e rata EMI?',
        answer:
          'Applica la formula standard di ammortamento a capitale residuo: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), dove r è il tasso annuo ÷ 12 ÷ 100 e n il numero totale di rate mensili.',
      },
      {
        question: 'Perché gli interessi dei primi mesi sono più alti di quelli degli ultimi mesi in un prestito EMI?',
        answer:
          'Gli interessi di ogni mese sono calcolati sul saldo residuo del capitale. Poiché il capitale diminuisce a ogni rata mensile, una parte sempre maggiore di ogni versamento fisso va al capitale.',
      },
      {
        question: 'La calcolatrice di prestito e rata EMI include le spese di istruttoria o l’assicurazione del finanziatore?',
        answer:
          'No. Il risultato riflette solo il rimborso del capitale e degli interessi. Aggiungi le spese finanziate nel campo Capitale del prestito per modellarne il costo di rimborso.',
      },
      {
        question: 'La calcolatrice di prestito e rata EMI è gratuita?',
        answer:
          'Sì, è completamente gratuita, senza registrazione, e funziona interamente nel tuo browser: i dettagli del tuo prestito non vengono mai inviati.',
      },
      {
        question: 'Che cos’è la rata EMI in un prestito?',
        answer:
          'EMI significa «Equated Monthly Installment» (rata mensile costante): l’importo fisso che paghi ogni mese, che copre sia gli interessi sia una parte del capitale, fino al rimborso completo del prestito.',
      },
      {
        question: 'Come gestisce la calcolatrice di prestito e rata EMI un prestito a interessi 0 %?',
        answer:
          'Gestisce con precisione i prestiti promozionali allo 0 % senza errori di divisione, mostrando una rata mensile pari al capitale diviso per il numero di mesi.',
      },
      {
        question: 'Posso confrontare due offerte di prestito con la calcolatrice di prestito e rata EMI?',
        answer:
          'Sì. Passa ogni offerta nella calcolatrice e confronta la rata mensile EMI e gli interessi totali da pagare per vedere quale costa meno in totale.',
      },
      {
        question: 'Una durata di prestito più breve riduce gli interessi totali?',
        answer:
          'In generale sì. Una durata più breve significa una rata mensile più alta, ma molti meno interessi totali, perché gli interessi si accumulano per meno mesi.',
      },
      {
        question: 'Che cos’è un piano di ammortamento?',
        answer:
          'È una tabella che indica, per ogni mese o ogni anno, la parte della tua rata EMI che va agli interessi, quella che va al capitale e il saldo residuo.',
      },
      {
        question: 'Posso vedere il saldo residuo del mio prestito dopo un anno?',
        answer:
          'Sì. Il piano di ammortamento mostra il capitale residuo dopo 12, 24 o 36 rate mensili, o in qualsiasi altro momento della durata.',
      },
      {
        question: 'La calcolatrice di prestito e rata EMI funziona per i prestiti auto?',
        answer:
          'Sì, funziona per i prestiti auto, personali, per studenti e aziendali — qualsiasi prestito rimborsato in rate mensili fisse a capitale residuo.',
      },
      {
        question: 'Posso usare la calcolatrice di prestito e rata EMI per un mutuo?',
        answer:
          'Sì, per la parte capitale e interessi. Per un costo abitativo completo che include tasse, assicurazione e PMI, usa invece la calcolatrice di mutuo.',
      },
      {
        question: 'Che cosa succede se faccio un pagamento extra sul mio prestito?',
        answer:
          'I pagamenti extra riducono direttamente il capitale, il che diminuisce gli interessi futuri. Questa calcolatrice modella le rate EMI regolari; prevedi l’importo extra separatamente nei tuoi calcoli.',
      },
      {
        question: 'La calcolatrice di prestito e rata EMI registra i dettagli del mio prestito?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser, e niente di ciò che inserisci viene registrato o inviato a un server.',
      },
      {
        question: 'Perché la mia rata EMI resta la stessa mentre la quota degli interessi cambia?',
        answer:
          'La rata EMI è fissa, ma ogni mese gli interessi sono calcolati su un saldo che diminuisce, quindi la quota degli interessi cala e la quota del capitale aumenta.',
      },
      {
        question: 'Posso passare la durata del prestito tra anni e mesi?',
        answer:
          'Sì, la calcolatrice permette di passare l’unità di durata tra anni e mesi con semplicità.',
      },
      {
        question: 'La calcolatrice di prestito e rata EMI è una consulenza finanziaria?',
        answer:
          'No. È uno strumento di calcolo che mostra come sarebbero le cifre con i dati che inserisci; non è una consulenza finanziaria, e devi verificare le condizioni con il tuo finanziatore.',
      },
      {
        question: 'Come usare la calcolatrice di prestito e rata EMI per un piano allo 0 %?',
        answer:
          'Inserisci 0 % come tasso annuo e la tua durata in mesi, e lo strumento mostrerà la rata mensile fissa senza interessi.',
      },
      {
        question: 'Che cosa devo inserire come capitale del prestito?',
        answer:
          'Inserisci l’importo che prendi in prestito realmente. Se delle spese sono finanziate nel prestito, aggiungile al capitale per modellarne il costo di rimborso.',
      },
      {
        question: 'La calcolatrice di prestito e rata EMI può mostrare tabelle annuali e mensili?',
        answer:
          'Sì, puoi passare dal riepilogo annuale alla tabella mensile per vedere il rimborso con l’uno o l’altro livello di dettaglio.',
      },
    ],
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
    instructions: [
      {
        title: 'Definisci il prezzo della casa e l’anticipo',
        description:
          'Inserisci il prezzo dell’immobile e il tuo anticipo (che riflette automaticamente il rapporto prestito-valore e il capitale del prestito).',
      },
      {
        title: 'Scegli il tasso di interesse e la durata',
        description:
          'Inserisci il tasso annuo del mutuo (in %) e seleziona una durata fissa di 10, 15, 20 o 30 anni.',
      },
      {
        title: 'Includi tasse, assicurazione e spese',
        description:
          'Regola la tassa immobiliare annua, l’assicurazione casa annua, le spese condominiali mensili e il tasso PMI (quando l’anticipo è inferiore al 20 %).',
      },
      {
        title: 'Avvia il calcolo del mutuo',
        description:
          'La rata mensile PITI si aggiorna istantaneamente nel tuo browser — nessun dato viene inviato.',
      },
      {
        title: 'Consulta il dettaglio del pagamento',
        description:
          'Verifica la ripartizione tra capitale e interessi, tassa, assicurazione, spese e PMI, oltre agli interessi totali su tutta la durata.',
      },
      {
        title: 'Suggerimento: prova il 20 % di anticipo o una durata più breve',
        description:
          'Prova ad aumentare l’anticipo al 20 % per eliminare la PMI, o una durata di 15 anni per vedere il risparmio di interessi, poi copia le cifre per confrontare le opzioni.',
      },
    ],
    examples: [
      {
        title: 'Acquisto immobiliare a tasso fisso di 30 anni con il 20 % di anticipo',
        input: 'Casa: 450 000 $ · Anticipo: 90 000 $ (20 %) · Tasso: 6,5 % · Tassa: 5 400 $/anno · Assicurazione: 1 800 $/anno',
        output: 'Totale mensile: 2 875,44 $ (C&I 2 275,44 $ + Tassa 450 $ + Assicurazione 150 $)',
        explanation:
          'Con il 20 % di anticipo (80 % di rapporto prestito-valore), la PMI è di 0 $ e il capitale e gli interessi si ammortizzano in 360 mesi.',
      },
      {
        title: 'Confrontare una durata di 15 anni e di 30 anni',
        input: 'Prestito: 360 000 $ · Tasso: 6,5 % · Durata: 15 anni contro 30 anni',
        output: '15 anni: 3 136,58 $/mese · 30 anni: 2 275,44 $/mese',
        explanation:
          'La durata di 15 anni costa di più ogni mese, ma riduce fortemente gli interessi totali pagati su tutta la durata.',
      },
    ],
    benefits: [
      'Dettaglia il costo mensile abitativo in capitale e interessi, tassa immobiliare, assicurazione, spese e PMI',
      'Calcola il rapporto prestito-valore (LTV) e gli interessi totali su tutta la durata',
      'Comprende una tabella annuale di rimborso del saldo',
      'Permette di confrontare istantaneamente gli ammortamenti di 10, 15, 20 e 30 anni',
    ],
    useCases: [
      'Preventivare i costi mensili PITI realistici prima di cercare una casa',
      'Confrontare i risparmi di interessi di un mutuo di 15 anni contro 30 anni',
      'Provare come un anticipo del 20 % elimina le spese mensili di PMI',
      'Stimare il capitale residuo dopo 5 o 10 anni',
    ],
    faqs: [
      {
        question: 'Che cosa significa PITI in una rata mensile di mutuo?',
        answer:
          'PITI significa Principal (capitale), Interessi, Taxes (tassa immobiliare) e Insurance (assicurazione casa e PMI se del caso) — le quattro componenti che i finanziatori usano per valutare l’accessibilità mensile.',
      },
      {
        question: 'Quando si applica la PMI a un mutuo?',
        answer:
          'I mutui tradizionali addebitano generalmente un’assicurazione ipotecaria privata (PMI) quando il tuo anticipo è inferiore al 20 % (rapporto prestito-valore superiore all’80 %).',
      },
      {
        question: 'La calcolatrice di mutuo include le spese di chiusura?',
        answer:
          'No. Le spese di chiusura variano per regione e finanziatore (spesso dal 2 % al 5 % dell’importo del prestito) e sono pagate in anticipo, salvo che siano integrate nel capitale del prestito.',
      },
      {
        question: 'La calcolatrice di mutuo è gratuita?',
        answer:
          'Sì, è completamente gratuita, senza registrazione, e funziona interamente nel tuo browser: il prezzo della tua casa e i dettagli del prestito non vengono mai inviati.',
      },
      {
        question: 'Come cambia la mia rata mensile di mutuo un anticipo più grande?',
        answer:
          'Un anticipo più grande riduce il capitale del prestito, il che diminuisce il capitale e gli interessi — e con il 20 % di anticipo può eliminare interamente la PMI.',
      },
      {
        question: 'Qual è la differenza tra un mutuo di 15 anni e di 30 anni?',
        answer:
          'Un mutuo di 15 anni ha rate mensili più alte, ma molti meno interessi totali, mentre un mutuo di 30 anni ha rate mensili più basse e più interessi totali.',
      },
      {
        question: 'Come viene calcolato il rapporto prestito-valore (LTV)?',
        answer:
          'L’LTV è l’importo del prestito diviso per il prezzo della casa, espresso in percentuale. Un prestito di 360 000 $ su una casa di 450 000 $ rappresenta un LTV dell’80 %.',
      },
      {
        question: 'La calcolatrice di mutuo include la tassa immobiliare?',
        answer:
          'Sì. Inserisci la tassa immobiliare annua e lo strumento aggiunge un dodicesimo di essa alla tua rata mensile.',
      },
      {
        question: 'La calcolatrice di mutuo include l’assicurazione casa?',
        answer:
          'Sì. Inserisci il premio annuo dell’assicurazione casa e lo strumento aggiunge un dodicesimo di esso al totale mensile.',
      },
      {
        question: 'Che cosa sono le spese condominiali in un calcolo di mutuo?',
        answer:
          'Le spese condominiali sono spese mensili addebitate da un’associazione di proprietari. Inseriscile separatamente e vengono aggiunte al tuo costo mensile totale abitativo.',
      },
      {
        question: 'Posso vedere il saldo residuo del mio mutuo dopo 5 o 10 anni?',
        answer:
          'Sì, la tabella annuale di rimborso del saldo mostra il capitale residuo a ogni anno della durata del prestito.',
      },
      {
        question: 'La calcolatrice di mutuo registra il prezzo della mia casa o i dettagli del prestito?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser, e niente di ciò che inserisci viene registrato o inviato a un server.',
      },
      {
        question: 'Posso confrontare le durate di mutuo con questa calcolatrice?',
        answer:
          'Sì. Passa tra le durate di 10, 15, 20 e 30 anni per confrontare istantaneamente le rate mensili e gli interessi totali.',
      },
      {
        question: 'Quanti interessi totali pagherò sulla durata del mutuo?',
        answer:
          'Lo strumento mostra gli interessi totali su tutta la durata, in modo che tu possa vedere il vero costo su tutta la durata, oltre alla rata mensile.',
      },
      {
        question: 'Che cosa succede alla PMI quando il saldo del mio prestito scende sotto l’80 % di LTV?',
        answer:
          'In molti prestiti tradizionali, la PMI può essere eliminata una volta raggiunto il 20 % di capitale proprio, ma le regole dipendono dal tuo finanziatore e dal tipo di prestito: conferma direttamente con loro.',
      },
      {
        question: 'La calcolatrice di mutuo è una consulenza finanziaria?',
        answer:
          'No. È uno strumento di calcolo che mostra come sarebbero le cifre con i dati che inserisci; non è una consulenza finanziaria, e devi verificare le condizioni con il tuo finanziatore.',
      },
      {
        question: 'Posso inserire l’anticipo come importo o come percentuale?',
        answer:
          'Sì, puoi inserire l’anticipo in entrambe le forme, e lo strumento riflette automaticamente il rapporto prestito-valore e il capitale del prestito.',
      },
      {
        question: 'La calcolatrice di mutuo funziona per i mutui a tasso fisso?',
        answer:
          'Sì, modella i mutui a tasso fisso con durate di 10, 15, 20 e 30 anni con un tasso annuo costante.',
      },
      {
        question: 'Che cosa devo inserire come tasso di interesse del mutuo?',
        answer:
          'Inserisci il tasso annuo indicato dal tuo finanziatore, in percentuale. Piccole variazioni di tasso possono modificare sensibilmente la rata mensile, quindi confronta alcuni tassi.',
      },
      {
        question: 'La calcolatrice di mutuo può aiutarmi a preventivare prima di cercare una casa?',
        answer:
          'Sì. Inserisci un prezzo di casa realistico, un anticipo, un tasso, una tassa e un’assicurazione per vedere il vero costo mensile PITI prima di iniziare le ricerche.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci il capitale e i depositi ricorrenti',
        description:
          'Indica il tuo deposito iniziale e l’importo del tuo versamento mensile.',
      },
      {
        title: 'Definisci il rendimento annuo e l’orizzonte',
        description:
          'Inserisci il tasso di rendimento annuo atteso (in %) e la durata dell’investimento in anni.',
      },
      {
        title: 'Scegli la frequenza di capitalizzazione',
        description:
          'Passa tra la capitalizzazione annuale, trimestrale, mensile o giornaliera e consulta il dettaglio annuale.',
      },
      {
        title: 'Avvia la proiezione di crescita',
        description:
          'Il saldo finale si aggiorna istantaneamente nel tuo browser — nessun dato viene inviato.',
      },
      {
        title: 'Consulta il registro anno per anno',
        description:
          'Verifica i versamenti, gli interessi guadagnati e il saldo corrente di ogni anno per vedere come la crescita accelera con il tempo.',
      },
      {
        title: 'Suggerimento: prova un versamento mensile più alto',
        description:
          'Prova ad aggiungere 100 $ al mese per vedere di quanto aumenta il saldo finale, poi copia le cifre per confrontare i piani di risparmio.',
      },
    ],
    examples: [
      {
        title: 'Proiezione di un investimento indicizzato regolare di 20 anni',
        input: 'Iniziale: 10 000 $ · Mensile: 500 $ · Rendimento: 7 % · Durata: 20 anni · Capitalizzazione mensile',
        output: 'Saldo finale: 300 850,56 $ · Versamenti: 130 000 $ · Interessi guadagnati: 170 850,56 $',
        explanation:
          'I rendimenti composti rappresentano oltre il 56 % del valore finale del portafoglio.',
      },
      {
        title: 'Risparmio senza versamenti mensili',
        input: 'Iniziale: 5 000 $ · Mensile: 0 $ · Rendimento: 5 % · Durata: 10 anni · Capitalizzazione annuale',
        output: 'Saldo finale: 8 144,47 $ · Interessi guadagnati: 3 144,47 $',
        explanation:
          'Con la capitalizzazione annuale, 5 000 $ × (1,05)^10 = 8 144,47 $. Gli interessi composti fanno crescere il saldo senza alcun versamento aggiuntivo.',
      },
    ],
    benefits: [
      'Separa il totale dei versamenti di tasca tua dagli interessi composti guadagnati',
      'Supporta gli intervalli di capitalizzazione annuale, trimestrale, mensile e giornaliero',
      'Opzione di versamento a fine mese o a inizio mese',
      'Genera un registro di crescita completo anno per anno per la pianificazione',
    ],
    useCases: [
      'Pianificare tappe di risparmio pensione o di fondi indicizzati a lungo termine',
      'Confrontare conti di risparmio ad alto rendimento a capitalizzazione mensile o giornaliera',
      'Visualizzare l’impatto di un aumento dei versamenti mensili di 100 $',
      'Insegnare la capitalizzazione esponenziale rispetto agli interessi semplici lineari',
    ],
    faqs: [
      {
        question: 'Che differenza fa la frequenza di capitalizzazione nella calcolatrice di interessi composti?',
        answer:
          'A tassi di interesse moderati, la capitalizzazione mensile produce una crescita leggermente superiore alla capitalizzazione annuale, perché gli interessi iniziano a fruttare interessi prima; la differenza tra giornaliera e mensile è generalmente una piccola frazione di punto percentuale.',
      },
      {
        question: 'La calcolatrice di interessi composti tiene conto delle imposte o dell’inflazione?',
        answer:
          'La calcolatrice mostra una crescita nominale prima delle imposte. Per stimare il potere d’acquisto reale adeguato all’inflazione, sottrai l’inflazione annua attesa (per esempio 2,5 %–3 %) dal tuo tasso di rendimento nominale.',
      },
      {
        question: 'I versamenti sono supposti a inizio o a fine mese nella calcolatrice di interessi composti?',
        answer:
          'Per impostazione predefinita, i versamenti si applicano alla fine di ogni mese; puoi passare all’inizio del mese nelle opzioni della calcolatrice.',
      },
      {
        question: 'La calcolatrice di interessi composti è gratuita?',
        answer:
          'Sì, è completamente gratuita, senza registrazione, e funziona interamente nel tuo browser: le tue cifre di risparmio non vengono mai inviate.',
      },
      {
        question: 'Che cos’è l’interesse composto?',
        answer:
          'L’interesse composto è l’interesse guadagnato sia sul tuo capitale originale sia sugli interessi già guadagnati, in modo che la crescita acceleri con il tempo.',
      },
      {
        question: 'In che cosa l’interesse composto differisce dall’interesse semplice?',
        answer:
          'L’interesse semplice viene pagato solo sul capitale, mentre l’interesse composto viene pagato sul capitale più gli interessi accumulati, il che fa crescere il saldo più velocemente.',
      },
      {
        question: 'Posso prevedere la crescita con versamenti mensili?',
        answer:
          'Sì. Inserisci il tuo versamento mensile e lo strumento lo aggiunge ogni mese, capitalizzando il saldo crescente su tutta la durata.',
      },
      {
        question: 'Quale tasso di rendimento devo inserire nella calcolatrice di interessi composti?',
        answer:
          'Inserisci il rendimento annuo che ti aspetti, in percentuale. È un dato di proiezione, non una previsione: prova alcuni tassi per vedere una gamma di risultati.',
      },
      {
        question: 'La calcolatrice di interessi composti mostra ciò che ho versato rispetto a ciò che ho guadagnato?',
        answer:
          'Sì, separa il totale dei versamenti di tasca tua dagli interessi composti guadagnati, e mostra entrambi nel registro anno per anno.',
      },
      {
        question: 'Posso confrontare la capitalizzazione mensile e giornaliera?',
        answer:
          'Sì. Passa la frequenza di capitalizzazione tra annuale, trimestrale, mensile e giornaliera per confrontare il saldo finale di ciascuna.',
      },
      {
        question: 'La calcolatrice di interessi composti può aiutare a pianificare il risparmio pensione?',
        answer:
          'Sì, è ideale per le proiezioni di pensione o di fondi indicizzati a lungo termine: inserisci il tuo saldo iniziale, i depositi mensili, il tasso e gli anni per vedere il saldo previsto.',
      },
      {
        question: 'La calcolatrice di interessi composti registra le mie cifre di risparmio?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser, e niente di ciò che inserisci viene registrato o inviato a un server.',
      },
      {
        question: 'Che cosa succede se aumento il mio versamento mensile di 100 $?',
        answer:
          'Il saldo finale aumenta di molto più dei soli depositi aggiuntivi, perché ogni dollaro aggiunto frutta anche interessi composti sugli anni restanti.',
      },
      {
        question: 'Posso usare la calcolatrice di interessi composti senza versamenti mensili?',
        answer:
          'Sì. Imposta il versamento mensile a zero e lo strumento prevederà la crescita del tuo solo deposito iniziale.',
      },
      {
        question: 'Posso usare la calcolatrice di interessi composti senza deposito iniziale?',
        answer:
          'Sì. Imposta il deposito iniziale a zero e inserisci un versamento mensile per prevedere la crescita dai soli depositi regolari.',
      },
      {
        question: 'La calcolatrice di interessi composti è una consulenza finanziaria?',
        answer:
          'No. È uno strumento di proiezione che mostra come sarebbero le cifre con il tasso di rendimento e i dati che inserisci; non è una consulenza finanziaria.',
      },
      {
        question: 'Come funziona la tabella anno per anno?',
        answer:
          'Il registro indica il saldo iniziale, i versamenti, gli interessi guadagnati e il saldo finale di ogni anno, in modo che tu possa seguire la crescita anno per anno.',
      },
      {
        question: 'Perché la crescita accelera negli ultimi anni?',
        answer:
          'Perché gli interessi sono guadagnati su un saldo sempre più grande, gli interessi guadagnati ogni anno aumentano man mano che il saldo si capitalizza.',
      },
      {
        question: 'Posso calcolare gli interessi composti di un conto di risparmio ad alto rendimento?',
        answer:
          'Sì. Inserisci il tasso annuo del conto e il tuo ritmo di deposito per confrontare la capitalizzazione mensile e giornaliera dei tuoi risparmi.',
      },
      {
        question: 'Che cosa comprende il saldo finale?',
        answer:
          'Il saldo finale comprende il tuo deposito iniziale, tutti i versamenti mensili e tutti gli interessi composti guadagnati sulla durata dell’investimento.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli la modalità Sconto o Margine',
        description:
          'Seleziona Sconto commerciale per i prezzi scontati o Margine di profitto e ricarico per l’economia unitaria di un articolo.',
      },
      {
        title: 'Inserisci le cifre di prezzo',
        description:
          'Indica il prezzo originale, lo sconto principale in %, il coupon aggiuntivo facoltativo in % e la tassa in % — oppure il costo e il prezzo di vendita in modalità Margine.',
      },
      {
        title: 'Aggiungi sconti cumulati e la tassa',
        description:
          'In modalità Sconto, inserisci un secondo coupon in % e una tassa facoltativa in %; gli sconti si applicano uno dopo l’altro, e non si sommano.',
      },
      {
        title: 'Vedi i risultati aggiornarsi istantaneamente',
        description:
          'Le cifre si ricalcolano mentre digiti, senza pulsante da premere e senza registrazione.',
      },
      {
        title: 'Consulta gli indicatori netti',
        description:
          'Verifica il prezzo finale, i risparmi totali, la percentuale di sconto effettiva, il profitto lordo, il margine in % e il ricarico in %.',
      },
      {
        title: 'Copia i risultati e prova i prezzi',
        description:
          'Copia il prezzo finale, i risparmi, il margine e il ricarico nel tuo listino, preventivo o foglio di calcolo, poi regola i dati per provare prezzi diversi.',
      },
    ],
    examples: [
      {
        title: 'Calcolo di sconto commerciale cumulato',
        input: 'Origine: 120 $ · Sconto 1: 25 % · Coupon aggiuntivo: 10 % · Tassa: 0 %',
        output: 'Prezzo finale: 81,00 $ · Risparmiato: 39,00 $ · Sconto effettivo: 32,5 %',
        explanation:
          'Gli sconti successivi si moltiplicano (0,75 × 0,90 = 0,675), cioè il 32,5 % di riduzione totale invece del 35 %.',
      },
      {
        title: 'Margine e ricarico dal costo',
        input: 'Costo: 50 $ · Prezzo di vendita: 100 $',
        output: 'Profitto lordo: 50 $ · Margine: 50 % · Ricarico: 100 %',
        explanation:
          'Il margine divide il profitto per il prezzo di vendita (50 / 100 = 50 %), mentre il ricarico lo divide per il costo (50 / 50 = 100 %).',
      },
    ],
    benefits: [
      'Evita l’errore classico di sommare gli sconti cumulati',
      'Distingue il margine lordo in % dal ricarico sul costo in % fianco a fianco',
      'Calcola immediatamente il profitto unitario e le soglie di costo di pareggio',
      'Comprende un calcolo facoltativo della tassa di vendita dopo lo sconto',
    ],
    useCases: [
      'Verificare i codici promozionali cumulati prima del pagamento',
      'Fissare i prezzi di vendita all’ingrosso o e-commerce dal costo unitario',
      'Controllare l’erosione del margine delle campagne promozionali',
      'Convertire una percentuale di margine obiettivo in ricarico richiesto',
    ],
    faqs: [
      {
        question: 'Qual è la differenza tra margine di profitto e ricarico?',
        answer:
          'Il margine lordo divide il profitto per il prezzo di vendita ((Prezzo − Costo) / Prezzo), mentre il ricarico divide il profitto per il costo ((Prezzo − Costo) / Costo). Un prodotto che costa 50 $ e viene venduto a 100 $ ha un margine del 50 %, ma un ricarico del 100 %.',
      },
      {
        question: 'Perché due sconti del 20 % e del 10 % equivalgono al 28 % di riduzione invece del 30 %?',
        answer:
          'Il secondo sconto del 10 % si applica al prezzo già ridotto all’80 %, togliendo ancora l’8 % del prezzo originale (20 % + 8 % = 28 %).',
      },
      {
        question: 'La tassa di vendita viene applicata prima o dopo gli sconti?',
        answer:
          'La tassa di vendita standard si applica al subtotale scontato dopo i coupon del commerciante, ed è così che questa calcolatrice la calcola.',
      },
      {
        question: 'Qual è un buon margine di profitto per un prodotto commerciale?',
        answer:
          'Non esiste un margine unico ideale; varia per settore, tipo di prodotto e costi. Usa la calcolatrice per confrontare il tuo margine in % con il tuo obiettivo, e ricorda che il risultato è un calcolo matematico, non una consulenza commerciale.',
      },
      {
        question: 'Come calcolare il prezzo scontato dopo un solo sconto?',
        answer:
          'Moltiplica il prezzo originale per (1 − sconto in %). Un articolo da 80 $ con il 25 % di sconto costa 80 $ × 0,75 = 60 $.',
      },
      {
        question: 'Posso cumulare uno sconto in percentuale e un coupon in importo fisso?',
        answer:
          'Questa calcolatrice cumula gli sconti in percentuale uno dopo l’altro. Per un coupon in importo fisso, sottrailo dal prezzo dopo l’applicazione dello sconto in percentuale.',
      },
      {
        question: 'La calcolatrice di sconto e margine funziona per i prezzi all’ingrosso?',
        answer:
          'Sì. Inserisci il tuo costo unitario e il tuo prezzo di vendita obiettivo in modalità Margine per vedere il profitto lordo, il margine in % e il ricarico in % per unità.',
      },
      {
        question: 'Qual è la differenza tra profitto lordo e profitto netto?',
        answer:
          'Il profitto lordo è il prezzo di vendita meno il costo del prodotto. Il profitto netto sottrae anche le spese generali come spedizione, commissioni e affitto, che questa calcolatrice non include.',
      },
      {
        question: 'Come fissare un prezzo da una percentuale di margine obiettivo?',
        answer:
          'In modalità Margine, prova diversi prezzi di vendita finché il margine in % non corrisponde al tuo obiettivo. Il ricarico in % mostrato indica quanto aggiungere al costo.',
      },
      {
        question: 'La calcolatrice di sconto e margine è gratuita?',
        answer:
          'Sì, è completamente gratuita e funziona interamente nel tuo browser — nessun account, nessun invio e nessun pagamento è necessario.',
      },
      {
        question: 'Perché il mio margine in % è inferiore al mio ricarico in %?',
        answer:
          'Il margine divide il profitto per il prezzo di vendita, mentre il ricarico lo divide per il costo, quindi per lo stesso profitto il ricarico in % è sempre più alto.',
      },
      {
        question: 'Il margine può superare il 100 %?',
        answer:
          'No. Il margine è il profitto diviso per il prezzo di vendita, quindi non può mai superare il 100 %. Il ricarico, invece, può superare ampiamente il 100 %.',
      },
      {
        question: 'Come influisce la tassa di vendita sul prezzo finale?',
        answer:
          'La tassa viene applicata al subtotale scontato, quindi uno sconto più grande riduce anche la tassa che paghi. La calcolatrice mostra il prezzo finale tasse comprese.',
      },
      {
        question: 'Che cos’è un prezzo di pareggio?',
        answer:
          'È il prezzo al quale il profitto lordo è nullo — pari al tuo costo unitario. Qualsiasi prezzo di vendita superiore al costo produce un margine positivo.',
      },
      {
        question: 'Posso usare questa calcolatrice per i prezzi del Black Friday o dei saldi?',
        answer:
          'Sì. Inserisci il prezzo originale e ogni sconto cumulato per verificare il prezzo finale e il margine che la promozione lascia.',
      },
      {
        question: 'La calcolatrice registra o invia i miei prezzi?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser e niente viene inviato o registrato.',
      },
      {
        question: 'Come convertire un ricarico in % in margine in %?',
        answer:
          'Margine in % = Ricarico in % ÷ (100 + Ricarico in %) × 100. Per esempio, un ricarico del 100 % equivale a un margine del 50 %, e la calcolatrice fa questa conversione per te.',
      },
      {
        question: 'Che cosa fare se il margine sembra troppo basso?',
        answer:
          'Verifica i tuoi dati di costo, poi prova un prezzo di vendita più alto o uno sconto più basso nella calcolatrice per vedere come si ripristina il margine.',
      },
      {
        question: 'Posso calcolare uno sconto su un prezzo che include già la tassa?',
        answer:
          'Inserisci l’importo tasse comprese come prezzo originale e imposta la tassa in % a 0, in modo che lo sconto si applichi all’importo digitato.',
      },
      {
        question: 'Che cosa significa «percentuale di sconto effettiva»?',
        answer:
          'È lo sconto unico in % che dà lo stesso prezzo finale di tutti i tuoi sconti cumulati insieme — per esempio, 20 % poi 10 % equivalgono a uno sconto effettivo del 28 %.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli il senso della tassa',
        description:
          'Scegli Aggiungi la tassa (Netto → Lordo) oppure Estrai la tassa (Lordo → Netto).',
      },
      {
        title: 'Inserisci l’importo e l’aliquota',
        description:
          'Digita l’importo della fattura e scegli un tasso rapido predefinito (5 %, 10 %, 15 %, 20 %) o qualsiasi percentuale di tassa personalizzata.',
      },
      {
        title: 'Usa una preimpostazione rapida o un tasso personalizzato',
        description:
          'Premi 5 %, 10 %, 15 % o 20 %, oppure digita qualsiasi tasso decimale come 8,875 % per far corrispondere una tassa di vendita locale.',
      },
      {
        title: 'Verifica il calcolo istantaneamente',
        description:
          'I risultati si aggiornano mentre digiti, senza pulsante di invio e senza registrazione.',
      },
      {
        title: 'Leggi le righe della fattura',
        description:
          'Copia il subtotale netto esatto, la componente di tassa e il totale lordo per la contabilità o un preventivo.',
      },
      {
        title: 'Copia il dettaglio e confronta i tassi',
        description:
          'Copia le cifre netto, tassa e lordo nella tua fattura, preventivo o foglio contabile, poi rilancia con un tasso diverso per confrontare gli scenari.',
      },
    ],
    examples: [
      {
        title: 'Estrarre il 20 % di IVA da una ricevuta lorda',
        input: 'Modalità: Estrai la tassa · Totale lordo: 120,00 $ · Tasso: 20 %',
        output: 'Subtotale netto: 100,00 $ · Componente IVA: 20,00 $',
        explanation:
          'Divide il lordo per (1 + 0,20) invece di moltiplicare il lordo per il 20 %, evitando un errore contabile di 4 $.',
      },
      {
        title: 'Aggiungere il 20 % di IVA a un prezzo netto',
        input: 'Modalità: Aggiungi la tassa · Netto: 100,00 $ · Tasso: 20 %',
        output: 'Totale lordo: 120,00 $ · Componente IVA: 20,00 $',
        explanation:
          'Moltiplica il prezzo netto per 1,20: 100 $ × 1,20 = 120 $, di cui 20 $ di IVA.',
      },
    ],
    benefits: [
      'Evita gli errori comuni di IVA inversa (dividere per 1 + tasso invece di sottrarre la % del tasso)',
      'Funziona allo stesso modo per l’IVA europea, la GST australiana e canadese e la tassa di vendita americana',
      'Comprende pulsanti di tasso rapido istantanei oltre a percentuali di tassa decimali qualsiasi',
      'Mostra un dettaglio chiaro in 3 colonne: Netto / Tassa / Lordo',
    ],
    useCases: [
      'Preparare fatture B2B o B2C con righe chiare senza tassa e tassa',
      'Riconciliare le ricevute di spese IVA inclusa per la contabilità',
      'Stabilire preventivi SaaS o freelance internazionali senza IVA o IVA inclusa',
      'Verificare i totali alla cassa dei negozi locali con i tassi di tassa statali e comunali',
    ],
    faqs: [
      {
        question: 'Perché estrarre il 20 % di IVA da 120 $ dà 20 $ e non 24 $?',
        answer:
          'Perché il 20 % era stato aggiunto in origine all’importo netto di 100 $ (100 $ × 1,20 = 120 $). Per invertire, dividi 120 $ per 1,20 per ritrovare l’importo netto di 100 $ e la tassa di 20 $.',
      },
      {
        question: 'Posso inserire aliquote di tassa di vendita locali frazionarie come 8,875 %?',
        answer:
          'Sì. Il campo dell’aliquota accetta qualsiasi tasso decimale positivo, come 7,25 %, 8,875 % o 21 %.',
      },
      {
        question: 'Supporta sia la GST sia l’IVA?',
        answer:
          'Sì. Matematicamente, l’imposta sul valore aggiunto (IVA), l’imposta su beni e servizi (GST) e la tassa di vendita in percentuale usano esattamente le stesse formule netto/lordo.',
      },
      {
        question: 'Qual è la differenza tra IVA, GST e tassa di vendita?',
        answer:
          'Sono tutte imposte in percentuale su beni e servizi. IVA e GST sono generalmente incluse nel prezzo esposto, mentre la tassa di vendita americana è generalmente aggiunta alla cassa. I calcoli sono identici.',
      },
      {
        question: 'Come aggiungere il 20 % di IVA a un prezzo netto?',
        answer:
          'Moltiplica il prezzo netto per 1,20. Un prezzo netto di 100 $ diventa 120 $ lordi, con 20 $ di IVA.',
      },
      {
        question: 'Come togliere l’IVA da un prezzo che la include?',
        answer:
          'Dividi il prezzo lordo per (1 + tasso). Con il 20 % di IVA, 120 $ ÷ 1,20 = 100 $ netti e 20 $ di tassa — e non 24 $.',
      },
      {
        question: 'La calcolatrice di IVA e tassa è gratuita?',
        answer:
          'Sì, è completamente gratuita e funziona interamente nel tuo browser, senza account né invio.',
      },
      {
        question: 'Posso usare questa calcolatrice per l’IVA britannica al 20 %?',
        answer:
          'Sì. Seleziona Estrai o Aggiungi la tassa, inserisci il tuo importo e usa la preimpostazione del 20 % o digita 20 come tasso personalizzato.',
      },
      {
        question: 'Quale aliquota IVA devo usare per il mio paese?',
        answer:
          'Le aliquote variano per paese e tipo di prodotto, quindi verifica l’aliquota attuale presso la tua amministrazione fiscale e inseriscila come tasso personalizzato. La calcolatrice non dà consulenza fiscale.',
      },
      {
        question: 'La calcolatrice gestisce gli articoli ad aliquota zero o esenti da tassa?',
        answer:
          'Sì. Inserisci un tasso dello 0 % e gli importi netto e lordo saranno identici.',
      },
      {
        question: 'Che cos’è un prezzo tasse comprese?',
        answer:
          'Un prezzo che contiene già la tassa, come indicato sulla maggior parte delle ricevute europee. La modalità Estrai la tassa lo scompone di nuovo in netto e tassa.',
      },
      {
        question: 'Che cos’è un prezzo senza tassa?',
        answer:
          'Un prezzo prima dell’aggiunta della tassa, comune nei negozi americani. La modalità Aggiungi la tassa mostra il totale lordo che il cliente paga.',
      },
      {
        question: 'Posso calcolare l’IVA su un rimborso parziale?',
        answer:
          'Sì. Inserisci l’importo del rimborso come cifra lorda o netta ed estrai o aggiungi la tassa allo stesso tasso usato sulla vendita originale.',
      },
      {
        question: 'Come mostrare l’IVA su una fattura?',
        answer:
          'Usa le tre cifre della calcolatrice come righe distinte: subtotale netto, importo della tassa e totale lordo, in modo che il cliente veda chiaramente il dettaglio.',
      },
      {
        question: 'Questa calcolatrice registra gli importi delle mie fatture?',
        answer:
          'No. Tutto viene calcolato localmente nel tuo browser e niente viene inviato o registrato.',
      },
      {
        question: 'Posso usare aliquote decimali come 7,25 % o 8,875 %?',
        answer:
          'Sì. Il campo del tasso accetta qualsiasi percentuale decimale positiva.',
      },
      {
        question: 'Che cosa fare se la mia ricevuta indica solo il totale lordo?',
        answer:
          'Usa la modalità Estrai la tassa con il totale lordo e il tuo tasso locale per ritrovare l’importo netto e la componente di tassa.',
      },
      {
        question: 'L’IVA viene addebitata sulle spese di spedizione o consegna?',
        answer:
          'Dipende dalle regole fiscali locali. Se si applica nel tuo caso, includi l’importo della spedizione nella cifra netta prima di aggiungere la tassa.',
      },
      {
        question: 'Come verificare il calcolo IVA di un fornitore?',
        answer:
          'Inserisci il suo totale lordo in modalità Estrai la tassa al tasso indicato e confronta la cifra netta con la fattura del fornitore.',
      },
      {
        question: 'Posso calcolare la GST per l’Australia o il Canada?',
        answer:
          'Sì. La GST usa le stesse formule netto/lordo dell’IVA: inserisci il tuo importo e l’aliquota GST locale — per esempio il 10 % in Australia o il 5 % di GST federale in Canada.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci la retribuzione base e il periodo di paga',
        description:
          'Digita l’importo del tuo stipendio e seleziona se questa cifra è oraria, giornaliera, settimanale, quindicinale, mensile o annuale.',
      },
      {
        title: 'Regola le ipotesi di orario di lavoro',
        description:
          'Definisci le ore a settimana (40 per impostazione predefinita), i giorni a settimana (5 per impostazione predefinita) e le settimane pagate all’anno (52 per impostazione predefinita, o meno per i congedi non pagati).',
      },
      {
        title: 'Modifica le ore o le settimane per il part-time',
        description:
          'Riduci le ore a settimana o le settimane pagate all’anno per modellare orari part-time, una settimana di 4 giorni o congedi non pagati.',
      },
      {
        title: 'Vedi i risultati aggiornarsi istantaneamente',
        description:
          'Ogni frequenza di paga si ricalcola mentre digiti, senza pulsante da premere e senza registrazione.',
      },
      {
        title: 'Confronta tutte le frequenze di paga',
        description:
          'Consulta contemporaneamente ogni riga di equivalenza lorda, compreso il totale delle ore di lavoro annuali.',
      },
      {
        title: 'Copia le cifre e confronta le offerte',
        description:
          'Copia la cifra lorda oraria, mensile o annuale in un confronto di offerte di lavoro, un budget o una nota di negoziazione, poi regola i dati per confrontare le offerte fianco a fianco.',
      },
    ],
    examples: [
      {
        title: 'Conversione standard full-time da tariffa oraria ad annuale',
        input: 'Paga: 45,00 $ l’ora · 40 h/settimana · 52 settimane/anno (2 080 h)',
        output: 'Annuale: 93 600 $ · Mensile: 7 800 $ · Quindicinale: 3 600 $ · Settimanale: 1 800 $',
        explanation:
          'Usa le 2 080 ore di lavoro annuali standard full-time.',
      },
      {
        title: 'Part-time a 24 ore a settimana',
        input: 'Paga: 30,00 $ l’ora · 24 h/settimana · 52 settimane/anno',
        output: 'Annuale: 37 440 $ · Mensile: 3 120 $ · Settimanale: 720 $',
        explanation:
          '24 ore × 52 settimane = 1 248 ore all’anno; 30 $ × 1 248 = 37 440 $.',
      },
    ],
    benefits: [
      'Converte in entrambi i sensi da qualsiasi frequenza di paga, non solo oraria o annuale',
      'Tiene conto delle ferie non pagate o dei tempi di inattività dei liberi professionisti grazie alle settimane pagate all’anno personalizzate',
      'Mostra chiaramente le differenze tra bimensile (24×/anno) e quindicinale (26×/anno)',
      'Indica lo stipendio lordo senza indovinare imposte proprie di una giurisdizione, il che sarebbe fuorviante',
    ],
    useCases: [
      'Confrontare un’offerta di contratto orario con uno stipendio annuale full-time',
      'Tradurre le offerte di stipendio annuale in budget mensili e quindicinali della famiglia',
      'Integrare i congedi non pagati nelle stime di reddito annuale dei liberi professionisti',
      'Calcolare la paga annualizzata di una settimana di lavoro part-time di 24 o 32 ore',
    ],
    faqs: [
      {
        question: 'Perché le buste paga quindicinali e bimensili sono di importi diversi?',
        answer:
          'La paga quindicinale emette 26 buste paga all’anno (ogni 2 settimane), mentre la paga bimensile ne emette 24 all’anno (due volte al mese). Le buste paga bimensili sono leggermente più alte per periodo per lo stesso stipendio annuale.',
      },
      {
        question: 'Calcola lo stipendio netto dopo l’imposta sul reddito?',
        answer:
          'No. L’imposta sul reddito, le ritenute sulla busta paga e i contributi sociali variano molto per paese, stato, situazione fiscale e deduzioni, quindi questa calcolatrice indica lo stipendio lordo in modo deterministico.',
      },
      {
        question: 'Come devono gestire i liberi professionisti i giorni festivi e i congedi non retribuiti?',
        answer:
          'Riduci le «settimane pagate all’anno» da 52 a 48 o 49 per vedere il tuo reddito lordo annuale realistico tenendo conto dei congedi non pagati.',
      },
      {
        question: 'Come convertire 25 $ l’ora in stipendio annuale?',
        answer:
          'A 40 ore a settimana per 52 settimane (2 080 ore), 25 $ l’ora equivalgono a 52 000 $ all’anno lordi. Inserisci le tue ore per ottenere la tua cifra esatta.',
      },
      {
        question: 'La calcolatrice di stipendio è gratuita?',
        answer:
          'Sì, è completamente gratuita e funziona interamente nel tuo browser — nessun account né invio è necessario.',
      },
      {
        question: 'La calcolatrice di stipendio mostra lo stipendio netto dopo le imposte?',
        answer:
          'No. Mostra solo lo stipendio lordo, perché l’imposta sul reddito e le deduzioni variano per paese, stato e situazione personale.',
      },
      {
        question: 'Qual è la differenza tra stipendio lordo e stipendio netto?',
        answer:
          'Lo stipendio lordo è la tua retribuzione prima di imposte e deduzioni. Lo stipendio netto (da portare a casa) è ciò che resta dopo di esse. Questa calcolatrice indica lo stipendio lordo.',
      },
      {
        question: 'Quante ore conta un anno di lavoro standard full-time?',
        answer:
          '2 080 ore: 40 ore a settimana × 52 settimane. La calcolatrice usa la tua impostazione di ore a settimana invece di supporre questa cifra.',
      },
      {
        question: 'Posso confrontare una tariffa di contratto oraria con un’offerta salariata?',
        answer:
          'Sì. Inserisci la tariffa oraria e confronta la sua cifra lorda annuale con l’offerta di stipendio, tenendo presente che benefici e congedi pagati differiscono.',
      },
      {
        question: 'Come tenere conto delle ferie non pagate da libero professionista?',
        answer:
          'Riduci le «settimane pagate all’anno» da 52 al numero di settimane per cui sei realmente pagato, per esempio 48 o 49.',
      },
      {
        question: 'Che cos’è la paga bimensile?',
        answer:
          'Una paga emessa due volte al mese, 24 volte all’anno, generalmente a date fisse come il 1º e il 15 — diversa dalla paga quindicinale, che è di 26 volte all’anno.',
      },
      {
        question: 'Perché la mia busta paga quindicinale è più piccola della mia busta paga bimensile?',
        answer:
          'Perché lo stesso stipendio annuale è diviso in 26 buste paga quindicinali invece di 24 buste paga bimensili, quindi ogni busta paga quindicinale è leggermente più piccola.',
      },
      {
        question: 'Posso calcolare la paga per una settimana di lavoro di 4 giorni?',
        answer:
          'Sì. Definisci i giorni a settimana su 4 e le ore a settimana su 32 (o le tue ore reali) e la calcolatrice converte la tariffa in tutte le frequenze.',
      },
      {
        question: 'Gli straordinari sono inclusi?',
        answer:
          'No. La calcolatrice converte una sola tariffa base. Gli straordinari a un tasso diverso richiederebbero un calcolo separato.',
      },
      {
        question: 'Come convertire uno stipendio mensile in tariffa oraria?',
        answer:
          'Inserisci l’importo mensile, scegli Mensile come periodo di paga e leggi la cifra oraria — divide per le tue ore a settimana e le tue settimane pagate all’anno.',
      },
      {
        question: 'La calcolatrice registra le mie informazioni sullo stipendio?',
        answer:
          'No. Tutte le cifre restano nel tuo browser e niente viene inviato o registrato.',
      },
      {
        question: 'Che cosa devo inserire se la mia paga cambia nel corso dell’anno?',
        answer:
          'Calcola ogni tariffa separatamente, oppure usa una media ponderata delle due tariffe per una stima annuale approssimativa.',
      },
      {
        question: 'Posso usare questa calcolatrice per un lavoro part-time o occasionale?',
        answer:
          'Sì. Definisci le tue ore reali a settimana e i tuoi giorni a settimana per far corrispondere il tuo orario part-time.',
      },
      {
        question: 'Come confrontare due offerte di lavoro con periodi di paga diversi?',
        answer:
          'Inserisci la tariffa e il periodo di paga di ogni offerta, poi confronta le cifre lorde annuali fianco a fianco usando le stesse impostazioni di ore e settimane.',
      },
      {
        question: 'La calcolatrice include premi o commissioni?',
        answer:
          'No. Converte solo lo stipendio base. Aggiungi premi o commissioni separatamente alla cifra annuale per un quadro più completo.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci il subtotale e il numero di commensali',
        description:
          'Inserisci l’importo del conto, l’importo facoltativo della tassa di vendita se inclusa, e il numero di persone che dividono il conto.',
      },
      {
        title: 'Scegli la percentuale di mancia',
        description:
          'Premi una preimpostazione (10 %, 15 %, 18 %, 20 %, 25 %) oppure inserisci qualsiasi percentuale di mancia personalizzata.',
      },
      {
        title: 'Escludi la tassa dalla base della mancia',
        description:
          'Se il tuo conto include la tassa di vendita, inserisci l’importo della tassa in modo che la mancia sia calcolata sul subtotale senza tasse.',
      },
      {
        title: 'Verifica i totali istantaneamente',
        description:
          'La mancia, il totale del conto e gli importi per persona si aggiornano mentre digiti, senza pulsante da premere.',
      },
      {
        title: 'Arrotondamento e divisione facoltativi',
        description:
          'Attiva l’arrotondamento al dollaro superiore per persona e consulta la quota di ogni commensale.',
      },
      {
        title: 'Copia o condividi la divisione',
        description:
          'Copia la quota di ogni persona per inviarla al gruppo, oppure regola la percentuale di mancia per vedere come cambia il totale per persona.',
      },
    ],
    examples: [
      {
        title: 'Cena di gruppo divisa in 4',
        input: 'Conto: 160,00 $ · Mancia: 20 % · Persone: 4',
        output: 'Mancia: 32,00 $ · Totale: 192,00 $ · Per persona: 48,00 $',
        explanation:
          'Aggiunge il 20 % di mancia (32 $) e divide 192 $ in parti uguali tra 4 commensali.',
      },
      {
        title: 'Mancia sul subtotale senza tasse',
        input: 'Conto: 110,00 $ · Tassa: 10,00 $ · Mancia: 20 % · Persone: 2',
        output: 'Mancia: 20,00 $ · Totale: 130,00 $ · Per persona: 65,00 $',
        explanation:
          'La mancia del 20 % si applica al subtotale senza tasse di 100 $, e non al totale di 110 $ tasse comprese.',
      },
    ],
    benefits: [
      'Supporta la mancia sul subtotale senza tasse quando la tassa di vendita è indicata',
      'Mostra chiaramente sia la mancia per persona sia il totale per persona',
      'Comprende pulsanti di preimpostazione rapidi per l’uso mobile al ristorante con un gesto',
      'L’arrotondamento facoltativo regola la mancia effettiva in tutta trasparenza',
    ],
    useCases: [
      'Dividere le cene di gruppo al ristorante senza calcoli mentali imbarazzanti',
      'Calcolare le mance di consegna, ride-sharing o salone',
      'Verificare la mancia esatta del 18 % o 20 % senza tasse sulle ricevute dettagliate',
      'Dividere in parti uguali le note condivise di viaggio o evento di gruppo',
    ],
    faqs: [
      {
        question: 'Si deve dare la mancia sul conto senza tasse o tasse comprese?',
        answer:
          'L’uso vuole tradizionalmente che la mancia sia calcolata sul subtotale senza tasse. Inserisci l’importo della tassa nel campo Tassa se vuoi che la calcolatrice escluda la tassa dalla base della mancia.',
      },
      {
        question: 'Che cosa succede se divido tra una sola persona?',
        answer:
          'Con il numero di persone impostato su 1, l’importo per persona corrisponde direttamente alla mancia completa e al totale del conto.',
      },
      {
        question: 'Come funziona l’arrotondamento per persona?',
        answer:
          'Quando è attivato, la quota totale di ogni persona viene arrotondata al dollaro intero superiore, e la calcolatrice mostra la percentuale di mancia effettiva che ne risulta.',
      },
      {
        question: 'Quanta mancia devo lasciare al ristorante?',
        answer:
          'Le fasce comuni di mancia sono del 15–20 % per il servizio al tavolo negli Stati Uniti, ma gli usi variano per paese e qualità del servizio. La calcolatrice fa solo i calcoli.',
      },
      {
        question: 'Come calcolare rapidamente una mancia del 20 %?',
        answer:
          'Sposta la virgola di una posizione verso sinistra per ottenere il 10 % del conto, poi raddoppia. Su un conto di 60 $, il 10 % fa 6 $, quindi il 20 % fa 12 $.',
      },
      {
        question: 'La calcolatrice di mancia è gratuita?',
        answer:
          'Sì, è completamente gratuita e funziona interamente nel tuo browser — nessun account né invio è necessario.',
      },
      {
        question: 'Devo dare la mancia sul totale tasse comprese?',
        answer:
          'Tradizionalmente, la mancia viene calcolata sul subtotale senza tasse. Inserisci l’importo della tassa nel campo Tassa per escluderla dalla base della mancia.',
      },
      {
        question: 'Qual è una buona mancia per la consegna di pasti?',
        answer:
          'Gli usi di mancia per la consegna variano per regione e dimensione dell’ordine. Inserisci qualsiasi percentuale personalizzata nella calcolatrice per far corrispondere ciò che decidi.',
      },
      {
        question: 'Come dividere un conto quando le persone hanno ordinato importi diversi?',
        answer:
          'Questa calcolatrice divide in parti uguali. Per quote disuguali, calcola la mancia di ogni persona sul proprio subtotale separatamente.',
      },
      {
        question: 'Posso dare una mancia con una percentuale personalizzata come il 17 %?',
        answer:
          'Sì. Digita qualsiasi percentuale nel campo di mancia personalizzata invece di usare le preimpostazioni.',
      },
      {
        question: 'Che cosa comprende l’importo per persona?',
        answer:
          'La quota del conto di ogni persona più la sua quota della mancia. Con l’arrotondamento attivato, viene arrotondata al dollaro intero superiore.',
      },
      {
        question: 'Come modifica l’arrotondamento la mancia effettiva?',
        answer:
          'Arrotondare la quota di ogni persona al dollaro superiore aggiunge un piccolo importo alla mancia, quindi la calcolatrice mostra la percentuale di mancia effettiva che ne risulta.',
      },
      {
        question: 'Posso usare la calcolatrice di mancia per le mance di salone o taxi?',
        answer:
          'Sì. Inserisci il totale del servizio e la percentuale di mancia che preferisci; gli stessi calcoli si applicano a qualsiasi servizio con mancia.',
      },
      {
        question: 'La calcolatrice registra gli importi dei miei conti?',
        answer:
          'No. Tutti i calcoli avvengono localmente nel tuo browser e niente viene inviato o registrato.',
      },
      {
        question: 'Che cosa fare se il conto comprende già spese di servizio?',
        answer:
          'Verifica se le spese di servizio costituiscono la mancia. Se è così, potresti non aver bisogno di mancia aggiuntiva, e puoi inserire 0 % per vedere la divisione senza mancia.',
      },
      {
        question: 'Come dividere un conto tra 3 persone con un totale dispari?',
        answer:
          'Inserisci il conto, la percentuale di mancia e 3 persone. La calcolatrice divide il totale in parti uguali e mostra la quota esatta di ogni persona.',
      },
      {
        question: 'Posso calcolare la mancia prima delle tasse se conosco solo il totale?',
        answer:
          'Hai bisogno dell’importo della tassa o del subtotale senza tasse per dare una mancia prima delle tasse. Se la ricevuta indica solo il totale, usa il totale completo come base della mancia.',
      },
      {
        question: 'Quali percentuali di mancia coprono le preimpostazioni?',
        answer:
          'Le preimpostazioni rapide sono 10 %, 15 %, 18 %, 20 % e 25 %, e puoi inserire qualsiasi altra percentuale come valore personalizzato.',
      },
      {
        question: 'È scortese dividere un conto in parti uguali?',
        answer:
          'Dipende dal gruppo e da ciò che ciascuno ha ordinato. La calcolatrice rende semplicemente istantaneo il calcolo della divisione equa.',
      },
      {
        question: 'Come calcolare la mancia su un conto di un grande gruppo?',
        answer:
          'Inserisci il totale completo del conto e il numero di commensali. La calcolatrice mostra la mancia, il totale e quanto deve ogni persona.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli il sistema di unità',
        description:
          'Passa tra il sistema metrico (cm / kg) e il sistema imperiale (ft, in / lb).',
      },
      {
        title: 'Inserisci altezza e peso',
        description:
          'Inserisci la tua altezza attuale e il tuo peso corporeo nei campi convalidati.',
      },
      {
        title: 'Verifica le unità',
        description:
          'Assicurati che i centimetri vadano con i chilogrammi e i piedi/pollici con le libbre, altrimenti il risultato sarà sbagliato.',
      },
      {
        title: 'Vedi il tuo IMC istantaneamente',
        description:
          'Il punteggio, la categoria OMS e la fascia di peso sano si aggiornano mentre digiti, senza pulsante da premere.',
      },
      {
        title: 'Consulta l’IMC e il contesto',
        description:
          'Esamina il tuo punteggio di IMC, la tua categoria OMS e la fascia di peso sano corrispondente per la tua altezza.',
      },
      {
        title: 'Annota o condividi il risultato',
        description:
          'Copia il tuo IMC e la tua fascia di peso sano per seguirli nel tempo o discuterne con un professionista sanitario, e inserisci nuove misure ogni volta che il tuo peso cambia.',
      },
    ],
    examples: [
      {
        title: 'Verifica di IMC metrico per adulto',
        input: 'Altezza: 175 cm · Peso: 70 kg',
        output: 'IMC: 22,9 kg/m² · Categoria OMS: Peso normale (56,7 – 76,3 kg)',
        explanation:
          'Calcolato come 70 / (1,75 × 1,75) = 22,86 kg/m².',
      },
      {
        title: 'Verifica di IMC imperiale per adulto',
        input: 'Altezza: 5 ft 9 in · Peso: 160 lb',
        output: 'IMC: 23,6 kg/m² · Categoria OMS: Peso normale',
        explanation:
          'Calcolato come (160 × 703) / (69 × 69) = 23,6 kg/m².',
      },
    ],
    benefits: [
      'Permette di passare istantaneamente tra le misure metriche e imperiali americane',
      'Calcola la fascia di peso sano esatta da 18,5 a 24,9 kg/m² per la tua altezza',
      'Comprende note chiare sui limiti clinici riguardo a massa muscolare e composizione corporea',
      'Funziona in privato nella memoria del browser, senza alcuno stoccaggio di dati sanitari',
    ],
    useCases: [
      'Verifiche rapide di screening peso-altezza per adulti',
      'Trovare le fasce di peso sano obiettivo per una data altezza',
      'Associare alla pianificazione quotidiana delle calorie e del metabolismo basale',
      'Convertire le misure imperiali di altezza e peso in IMC standard kg/m²',
    ],
    faqs: [
      {
        question: 'Qual è la formula dell’indice di massa corporea?',
        answer:
          'L’IMC è uguale al peso in chilogrammi diviso per l’altezza in metri al quadrato: peso (kg) / altezza (m)². In unità imperiali, ciò equivale a (peso (lb) × 703) / altezza (in)².',
      },
      {
        question: 'L’IMC si applica con precisione agli atleti o alle persone anziane?',
        answer:
          'L’IMC è un rapporto di screening a livello di popolazione e non distingue la massa muscolare magra dal grasso. Gli atleti molto muscolosi possono trovarsi nella fascia di sovrappeso nonostante una bassa massa grassa, e i bambini e gli adolescenti richiedono percentili per età e sesso.',
      },
      {
        question: 'Le mie informazioni sanitarie vengono registrate da qualche parte?',
        answer:
          'No. Tutte le misure restano strettamente nella scheda attiva del tuo browser e scompaiono quando la chiudi.',
      },
      {
        question: 'Qual è la fascia di IMC sano?',
        answer:
          'L’OMS definisce 18,5–24,9 kg/m² come fascia di peso normale per gli adulti. Sotto 18,5 è sottopeso, e da 25 a 29,9 è sovrappeso.',
      },
      {
        question: 'La calcolatrice di IMC è gratuita?',
        answer:
          'Sì, è completamente gratuita e funziona interamente nel tuo browser — nessun account né invio è necessario.',
      },
      {
        question: 'Quali sono le categorie di IMC dell’OMS?',
        answer:
          'Il sottopeso è inferiore a 18,5, il peso normale è da 18,5 a 24,9, il sovrappeso da 25 a 29,9 e l’obesità da 30 in su.',
      },
      {
        question: 'Come calcolare l’IMC in libbre e pollici?',
        answer:
          'Usa (peso in lb × 703) ÷ (altezza in pollici)². La calcolatrice fa ciò automaticamente in modalità imperiale.',
      },
      {
        question: 'Come calcolare l’IMC in chilogrammi e centimetri?',
        answer:
          'Dividi il peso in kg per l’altezza in metri al quadrato. La calcolatrice converte i tuoi centimetri in metri per te.',
      },
      {
        question: 'L’IMC è preciso per tutti?',
        answer:
          'No. L’IMC è un rapporto di screening che non distingue il muscolo dal grasso, quindi le persone molto muscolose, le persone anziane e i bambini hanno bisogno di valutazioni diverse.',
      },
      {
        question: 'I bambini possono usare questa calcolatrice di IMC?',
        answer:
          'No. L’IMC dei bambini si interpreta con curve di percentili per età e sesso, e non con le fasce adulte dell’OMS: questo strumento è quindi riservato agli adulti.',
      },
      {
        question: 'Qual è la mia fascia di peso sano?',
        answer:
          'La calcolatrice mostra la fascia di peso che dà un IMC da 18,5 a 24,9 per la tua altezza — per esempio, circa 56,7–76,3 kg per 175 cm.',
      },
      {
        question: 'Con quale frequenza devo controllare il mio IMC?',
        answer:
          'Occasionalmente basta, per esempio una volta al mese quando segui l’evoluzione del tuo peso. L’IMC è una cifra di screening, non un verdetto di salute quotidiano.',
      },
      {
        question: 'L’IMC misura la percentuale di massa grassa?',
        answer:
          'No. L’IMC mette solo in relazione il peso con l’altezza e non può dire quale parte del tuo peso è grasso piuttosto che muscolo o ossa.',
      },
      {
        question: 'Che cosa devo fare se il mio IMC è nella fascia di sovrappeso?',
        answer:
          'Consideralo un invito a esaminare la tua alimentazione, la tua attività e la tua salute generale con un professionista sanitario. Una sola cifra di IMC non è una diagnosi.',
      },
      {
        question: 'Posso usare l’IMC se sono incinta?',
        answer:
          'No. La gravidanza modifica il peso in un modo che l’IMC non tiene in conto, quindi le categorie standard non si applicano.',
      },
      {
        question: 'I miei dati di altezza e peso vengono registrati da qualche parte?',
        answer:
          'No. Le tue misure restano nella scheda del tuo browser e scompaiono quando la chiudi.',
      },
      {
        question: 'Perché la calcolatrice chiede l’altezza in piedi e pollici?',
        answer:
          'La modalità imperiale accetta piedi e pollici perché è così che l’altezza è generalmente misurata negli Stati Uniti. La modalità metrica usa invece i centimetri.',
      },
      {
        question: 'Qual è la differenza tra IMC e metabolismo basale?',
        answer:
          'L’IMC mette in relazione il peso con l’altezza, mentre il metabolismo basale (MB) stima le calorie che il tuo corpo brucia a riposo — misurano cose diverse.',
      },
      {
        question: 'Gli atleti possono avere un IMC alto ed essere in buona salute?',
        answer:
          'Sì. Il muscolo è denso, quindi un atleta molto muscoloso può essere classificato in sovrappeso secondo l’IMC nonostante una bassa massa grassa. Lo strumento segnala questo limite.',
      },
      {
        question: 'Quanto è preciso il risultato di IMC?',
        answer:
          'I calcoli sono esatti per le cifre che inserisci, ma il risultato è preciso solo quanto le tue misure di altezza e peso.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli le unità e il profilo',
        description:
          'Seleziona le unità metriche o imperiali, le costanti di riferimento biologico Uomo o Donna, e inserisci età, altezza e peso.',
      },
      {
        title: 'Scegli il tuo livello di attività settimanale',
        description:
          'Seleziona il moltiplicatore di attività, da Sedentario (1,2×) a Molto attivo (1,9×), che riflette la tua routine reale.',
      },
      {
        title: 'Definisci il tuo obiettivo di peso',
        description:
          'Scegli il mantenimento, un leggero deficit, una perdita di grasso standard o un aumento magro per vedere l’obiettivo calorico giornaliero che corrisponde al tuo obiettivo.',
      },
      {
        title: 'Consulta gli obiettivi calorici giornalieri',
        description:
          'Confronta il TDEE di mantenimento, i deficit di perdita di peso leggera e standard, il surplus di aumento magro e i grammi di macro di riferimento.',
      },
      {
        title: 'Verifica i tuoi obiettivi di macro in grammi',
        description:
          'Leggi i riferimenti in grammi di proteine, carboidrati e grassi per l’obiettivo calorico scelto e regolali secondo la tua dieta.',
      },
      {
        title: 'Salva e ricontrolla le cifre',
        description:
          'Annota i tuoi obiettivi, rilancia il calcolo se il tuo peso o la tua attività cambia, e segui le tendenze reali del tuo peso per 2–3 settimane prima di regolare l’apporto.',
      },
    ],
    examples: [
      {
        title: 'Verifica di mantenimento di un adulto moderatamente attivo',
        input: 'Uomo · 30 anni · 175 cm · 72 kg · Moderatamente attivo (1,55×)',
        output: 'MB: 1 669 kcal · TDEE di mantenimento: 2 587 kcal/giorno · Perdita di 0,5 kg/sett.: 2 087 kcal/giorno',
        explanation:
          'Applica il MB di Mifflin-St Jeor × il fattore di attività 1,55 e sottrae 500 kcal per una perdita di circa 0,5 kg a settimana.',
      },
      {
        title: 'Deficit leggero per una perdita progressiva',
        input: 'Donna · 40 anni · 165 cm · 68 kg · Leggermente attiva (1,375×)',
        output: 'MB: 1 367 kcal · TDEE di mantenimento: 1 880 kcal/giorno · Deficit leggero: 1 630 kcal/giorno',
        explanation:
          'Un deficit di 250 kcal al giorno mira a una perdita progressiva di circa 0,25 kg a settimana.',
      },
    ],
    benefits: [
      'Usa la formula di previsione del MB di Mifflin-St Jeor, ampiamente riconosciuta',
      'Impone un avviso di soglia di 1 200 kcal sulle proiezioni di deficit per sensibilizzare alla sicurezza',
      'Indica riferimenti equilibrati in grammi di proteine, carboidrati e grassi',
      'Supporta le unità metriche (cm/kg) e imperiali americane (ft, in/lb)',
    ],
    useCases: [
      'Fissare budget calorici giornalieri di partenza realistici per il monitoraggio nutrizionale',
      'Stimare le variazioni della spesa energetica secondo i livelli di attività',
      'Tradurre le calorie di mantenimento in grammi giornalieri di proteine, carboidrati e grassi',
      'Pianificare deficit progressivi di 250–500 kcal invece di diete drastiche insostenibili',
    ],
    faqs: [
      {
        question: 'Perché questa calcolatrice usa l’equazione di Mifflin-St Jeor?',
        answer:
          'La ricerca in nutrizione classifica regolarmente Mifflin-St Jeor tra le formule più precise per la popolazione generale per stimare la spesa energetica a riposo da età, sesso, altezza e peso.',
      },
      {
        question: 'Quanto sono precisi i moltiplicatori di attività?',
        answer:
          'I moltiplicatori di attività forniscono una stima di partenza basata su prove. Segui l’evoluzione del tuo peso per 2–3 settimane e regola il tuo apporto giornaliero di 100–200 kcal in base ai tuoi progressi reali.',
      },
      {
        question: 'È una consulenza nutrizionale medica o clinica?',
        answer:
          'No. Le previsioni sono stime informative; consulta un medico o un dietista abilitato per un accompagnamento nutrizionale medico personalizzato.',
      },
      {
        question: 'Che cos’è il MB e in che cosa differisce dal TDEE?',
        answer:
          'Il MB è l’energia che il tuo corpo usa a riposo completo per mantenere le funzioni di base. Il TDEE aggiunge al MB le calorie bruciate dai movimenti quotidiani e dall’esercizio.',
      },
      {
        question: 'Che cosa fa la calcolatrice di calorie con la mia età, altezza e peso?',
        answer:
          'Li introduce nell’equazione di Mifflin-St Jeor per stimare il tuo MB, poi lo moltiplica per il tuo livello di attività per stimare il tuo TDEE e i tuoi obiettivi calorici giornalieri.',
      },
      {
        question: 'Come scegliere il livello di attività giusto nella calcolatrice di calorie?',
        answer:
          'Scegli il livello che corrisponde a una settimana tipica, e non alla tua giornata più intensa. La maggior parte dei lavoratori d’ufficio che fanno esercizio alcune volte a settimana rientra in Leggermente attivo o Moderatamente attivo.',
      },
      {
        question: 'Qual è un deficit calorico sicuro per perdere peso?',
        answer:
          'Un punto di partenza comune è un deficit giornaliero di 250–500 kcal, che mira a una perdita progressiva di circa 0,25–0,5 kg a settimana. I deficit più grandi devono essere discussi con un professionista sanitario.',
      },
      {
        question: 'Quante calorie devo mangiare per aumentare di peso magramente?',
        answer:
          'Lo strumento mostra un surplus di aumento magro sopra il tuo TDEE di mantenimento come obiettivo di partenza. Segui il tuo peso per alcune settimane e regola il surplus verso l’alto o verso il basso in base al cambiamento reale.',
      },
      {
        question: 'Perché la calcolatrice di calorie mostra un avviso di soglia di 1 200 kcal?',
        answer:
          'Gli obiettivi calorici molto bassi possono essere pericolosi e difficili da mantenere, quindi lo strumento segnala i deficit che scendono sotto 1 200 kcal per sensibilizzare alla sicurezza.',
      },
      {
        question: 'Che cosa sono gli obiettivi di macro mostrati dalla calcolatrice di calorie?',
        answer:
          'Sono quantità di riferimento in grammi per proteine, carboidrati e grassi che totalizzano l’obiettivo calorico giornaliero scelto. È una ripartizione di partenza, non una dieta prescritta.',
      },
      {
        question: 'La calcolatrice di calorie funziona con le unità metriche e imperiali?',
        answer:
          'Sì. Puoi inserire altezza e peso in centimetri e chilogrammi, oppure in piedi, pollici e libbre, e i risultati sono gli stessi.',
      },
      {
        question: 'Posso usare la calcolatrice di calorie se sono molto attivo o atleta?',
        answer:
          'Sì, il livello Molto attivo copre il lavoro fisico intenso o l’allenamento quotidiano intenso, ma gli atleti con una composizione corporea insolita possono trovare la stima meno precisa.',
      },
      {
        question: 'Perché il mio TDEE è cambiato quando ho cambiato il mio livello di attività?',
        answer:
          'Il TDEE è il tuo MB moltiplicato per un fattore di attività, quindi un livello di attività più alto aumenta il moltiplicatore e quindi i tuoi fabbisogni calorici giornalieri stimati.',
      },
      {
        question: 'Con quale frequenza devo ricalcolare le mie calorie?',
        answer:
          'Ricalcola ogni volta che il tuo peso, il tuo livello di attività o il tuo obiettivo cambia, o circa ogni 4–8 settimane mentre perdi o prendi peso attivamente.',
      },
      {
        question: 'La calcolatrice di calorie registra o invia i miei dati personali?',
        answer:
          'No. Tutti i calcoli vengono eseguiti localmente nel tuo browser, e la tua età, altezza, peso e scelte di attività non vengono mai inviati o registrati su un server.',
      },
      {
        question: 'La calcolatrice di calorie è gratuita?',
        answer:
          'Sì, è completamente gratuita nel tuo browser, senza account, senza registrazione e senza limiti di frequenza di ricalcolo.',
      },
      {
        question: 'La calcolatrice di calorie può aiutarmi a pianificare un deficit di 500 kcal?',
        answer:
          'Sì. L’obiettivo di perdita di peso standard sottrae circa 500 kcal al giorno dal tuo TDEE di mantenimento, il che mira a circa 0,5 kg di perdita a settimana.',
      },
      {
        question: 'Che cosa devo fare se il mio peso non cambia dopo aver seguito l’obiettivo?',
        answer:
          'Verifica prima che il tuo livello di attività e il tuo monitoraggio alimentare siano onesti e regolari per 2–3 settimane. Se il peso non si muove ancora, regola l’apporto di 100–200 kcal e continua il monitoraggio.',
      },
      {
        question: 'La calcolatrice di calorie tiene conto della percentuale di massa grassa?',
        answer:
          'No. L’equazione di Mifflin-St Jeor usa solo età, sesso, altezza e peso corporeo totale, quindi non può distinguere il muscolo dalla massa grassa.',
      },
      {
        question: 'Gli adolescenti o le persone anziane possono usare la calcolatrice di calorie?',
        answer:
          'La formula è stata pensata per gli adulti, quindi i risultati per gli adolescenti o le persone molto più anziane sono solo stime approssimative. I giovani devono ottenere consigli nutrizionali da un genitore e da un professionista sanitario.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli Differenza o Aggiungi/Sottrai',
        description:
          'Scegli Differenza tra due date per confrontare due date, oppure Aggiungi / Sottrai tempo per proiettare una data futura o passata.',
      },
      {
        title: 'Scegli le date e le opzioni',
        description:
          'Inserisci le date di inizio e di fine (usa il pulsante di scambio in qualsiasi momento) e spunta eventualmente Includi la data finale (+1 giorno).',
      },
      {
        title: 'Scambia le date se necessario',
        description:
          'Usa il pulsante di scambio per invertire istantaneamente le date di inizio e di fine se le hai inserite al contrario.',
      },
      {
        title: 'Consulta il dettaglio di calendario',
        description:
          'Esamina gli anni, i mesi e i giorni, il totale dei giorni di calendario, le settimane, i giorni feriali (lun.–ven.), i giorni del fine settimana e le ore.',
      },
      {
        title: 'Verifica i giorni feriali e del fine settimana',
        description:
          'Leggi separatamente i numeri di giorni feriali e del fine settimana per pianificare i giorni di lavoro, i giorni di fatturazione o la durata dei viaggi.',
      },
      {
        title: 'Copia o riutilizza il risultato',
        description:
          'Copia il dettaglio per contratti, pianificazioni o messaggi, e rilancia il calcolo con l’opzione di data finale inclusa se il tuo conteggio sembra mancare di un giorno.',
      },
    ],
    examples: [
      {
        title: 'Contare la durata di un progetto e i giorni di lavoro',
        input: 'Inizio: 2025-01-15 · Fine: 2025-11-12 · Inclusivo: No',
        output: '0 anni, 9 mesi, 28 giorni · 301 giorni in totale · 215 giorni feriali · 86 giorni del fine settimana',
        explanation:
          'Usa l’aritmetica di calendario UTC, insensibile agli errori di spostamento di 23 o 25 ore durante i cambi d’ora.',
      },
      {
        title: 'Aggiungere 90 giorni a una data di contratto',
        input: 'Data di riferimento: 2025-01-15 · Aggiungere: 90 giorni',
        output: 'Data risultante: 2025-04-15',
        explanation:
          'Aggiunge l’intervallo completo in un solo passaggio, con il passaggio di mese e anno gestito automaticamente.',
      },
    ],
    benefits: [
      'L’aritmetica di calendario pura in UTC evita gli errori di un giorno legati al cambio d’ora',
      'Conta istantaneamente i giorni feriali (lunedì–venerdì) e i giorni del fine settimana',
      'Supporta il conteggio della data finale inclusa per le notti d’hotel rispetto ai giorni di sprint',
      'Comprende l’addizione e la sottrazione di date con adeguamento intelligente di fine mese',
    ],
    useCases: [
      'Contare i giorni di sprint di progetto, le durate di contratto o i limiti di soggiorno di visto',
      'Trovare i giorni di fatturazione esatti o le date di scadenza di preavviso',
      'Aggiungere 90 giorni o 6 mesi a una data di entrata in vigore di contratto',
      'Verificare il totale dei giorni feriali disponibili in un trimestre o un esercizio fiscale',
    ],
    faqs: [
      {
        question: 'Il contatore di giorni feriali esclude i giorni festivi?',
        answer:
          'Conta i giorni feriali di calendario dal lunedì al venerdì, perché i giorni festivi differiscono per paese, stato e calendario del datore di lavoro.',
      },
      {
        question: 'Quando devo spuntare «Includi la data finale (+1 giorno di calendario) »?',
        answer:
          'Spuntala quando conti giorni di presenza o di vacanza inclusivi (per esempio, dal lunedì al venerdì = 5 giorni). Lasciala deselezionata quando conti notti trascorse o intervalli.',
      },
      {
        question: 'Che cosa succede se aggiungo 1 mese al 31 gennaio?',
        answer:
          'L’adeguamento di calendario riporta il 31 gennaio + 1 mese all’ultimo giorno valido di febbraio (28 febbraio, o 29 febbraio negli anni bisestili) invece di traboccare in marzo.',
      },
      {
        question: 'Come conta la calcolatrice di differenza tra date i giorni tra due date?',
        answer:
          'Misura la durata di calendario esatta tra le due date usando l’aritmetica delle date UTC, poi scompone la durata in anni, mesi e giorni restanti, più il totale in giorni e in settimane.',
      },
      {
        question: 'La calcolatrice di differenza tra date include la data di inizio nel totale?',
        answer:
          'Per impostazione predefinita no: dal lunedì al venerdì conta quindi 4 giorni trascorsi. Attiva l’opzione di data finale inclusa quando vuoi che le date di inizio e di fine siano entrambe contate.',
      },
      {
        question: 'Qual è la differenza tra giorni di calendario e giorni feriali in questo strumento?',
        answer:
          'I giorni di calendario contano ogni giorno della durata, mentre i giorni feriali contano solo dal lunedì al venerdì. I giorni del fine settimana sono mostrati separatamente in modo che tu possa vedere entrambi i totali insieme.',
      },
      {
        question: 'La calcolatrice di differenza tra date può contare i giorni del fine settimana separatamente?',
        answer:
          'Sì. Il dettaglio indica il totale dei giorni del fine settimana (sabati e domeniche) accanto ai giorni feriali, in modo che tu possa pianificare viaggi, turni o scadenze che si estendono sui fine settimana.',
      },
      {
        question: 'Come gestisce la calcolatrice di differenza tra date gli anni bisestili?',
        answer:
          'Usa una vera aritmetica di calendario: il 29 febbraio viene contato negli anni bisestili e le durate che attraversano febbraio di un anno bisestile includono automaticamente il giorno aggiuntivo.',
      },
      {
        question: 'Posso usare la calcolatrice di differenza tra date per sapere quanti giorni restano prima di una data?',
        answer:
          'Sì. Definisci la data di inizio su oggi e la data di fine sulla tua data obiettivo, e il risultato in giorni totali ti dice esattamente quanti giorni restano.',
      },
      {
        question: 'La calcolatrice di differenza tra date funziona su più anni?',
        answer:
          'Sì. Puoi confrontare date separate da più anni, e il risultato scompone la durata in anni completi, mesi restanti e giorni restanti.',
      },
      {
        question: 'Che cosa succede se la data finale è prima della data di inizio?',
        answer:
          'Usa il pulsante di scambio per invertire le due date. Lo strumento è pensato per confrontare una data di inizio con una data finale successiva, quindi lo scambio ti dà la durata positiva corretta.',
      },
      {
        question: 'Posso aggiungere anni, mesi e giorni a una data contemporaneamente?',
        answer:
          'Sì. In modalità Aggiungi / Sottrai, puoi inserire una combinazione di anni, mesi e giorni, e lo strumento applica tutto l’intervallo alla tua data di riferimento in un solo passaggio.',
      },
      {
        question: 'La calcolatrice di differenza tra date tiene conto del cambio d’ora?',
        answer:
          'Sì, infatti. Usa l’aritmetica di calendario UTC, quindi le giornate di 23 e 25 ore intorno ai cambi d’ora non possono spostare il risultato di un giorno.',
      },
      {
        question: 'Come contare i giorni lavorativi per una scadenza di progetto?',
        answer:
          'Inserisci le date di inizio e di fine del progetto e leggi il numero di giorni feriali, cioè dal lunedì al venerdì. Ricorda che i giorni festivi non vengono sottratti: regola il conteggio se dei giorni festivi cadono nella durata.',
      },
      {
        question: 'La calcolatrice di differenza tra date è gratuita?',
        answer:
          'Sì, è completamente gratuita nel tuo browser, senza account, senza registrazione e senza limiti di numero di durate calcolate.',
      },
      {
        question: 'La calcolatrice di differenza tra date registra o invia le mie date?',
        answer:
          'No. Tutti i calcoli vengono eseguiti localmente nel tuo browser, e le date che inserisci non vengono mai inviate o registrate su un server.',
      },
      {
        question: 'Posso calcolare la differenza tra date in fusi orari diversi?',
        answer:
          'Lo strumento confronta date di calendario, e non ore del giorno, quindi i fusi orari non cambiano il risultato. Scegli le date come appaiono su ogni calendario locale.',
      },
      {
        question: 'Che cosa cambia l’opzione di data finale inclusa nel risultato?',
        answer:
          'Aggiunge esattamente un giorno di calendario al totale: un conteggio inclusivo dal lunedì al venerdì diventa quindi 5 giorni invece di 4. Il dettaglio in anni, mesi e giorni si aggiorna di conseguenza.',
      },
      {
        question: 'La calcolatrice di differenza tra date può aggiungere 90 giorni a una data di contratto?',
        answer:
          'Sì. Scegli Aggiungi / Sottrai, inserisci la data del contratto, aggiungi 90 giorni, e lo strumento mostra la data risultante esatta, compreso il passaggio di mese e anno.',
      },
      {
        question: 'Perché febbraio modifica a volte il risultato della mia aggiunta di mesi?',
        answer:
          'L’aggiunta di mesi si adatta all’ultimo giorno valido del mese obiettivo: il 31 gennaio più un mese cade quindi sul 28 o 29 febbraio invece del 2 o 3 marzo.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli la modalità Tempo trascorso o Somma di durate',
        description:
          'Usa Tempo trascorso tra due ore per verificare l’inizio e la fine di un turno, oppure Somma di durate di foglio di ore per sommare più blocchi.',
      },
      {
        title: 'Inserisci le ore e la pausa facoltativa',
        description:
          'Definisci l’ora di inizio, l’ora di fine e qualsiasi pausa non pagata in minuti; attiva il passaggio di notte se un turno attraversa la mezzanotte.',
      },
      {
        title: 'Attiva il passaggio di notte per i turni di notte',
        description:
          'Attiva l’opzione di notte quando l’ora di fine è precedente all’ora di inizio, in modo che un turno che attraversa la mezzanotte sia contato correttamente.',
      },
      {
        title: 'Consulta il dettaglio della durata netta',
        description:
          'Verifica insieme le HH:MM:SS, il totale in minuti, il totale in secondi e le ore decimali prima di usare il risultato.',
      },
      {
        title: 'Copia le HH:MM:SS o le ore decimali',
        description:
          'Usa le HH:MM:SS per i registri o le ore decimali (per esempio 7,50 h) per la fatturazione e i fogli paga.',
      },
      {
        title: 'Correggi un risultato che sembra sbagliato',
        description:
          'Se il totale sembra troppo breve, verifica prima la durata della pausa e l’interruttore di notte, poi conferma che le ore di inizio e di fine non siano invertite.',
      },
    ],
    examples: [
      {
        title: 'Turno di lavoro standard con una pausa di 30 minuti',
        input: 'Inizio: 09:00:00 · Fine: 17:30:00 · Pausa: 30 min',
        output: 'Durata netta: 08:00:00 · Decimale: 8,00 h · 480 min',
        explanation:
          '8,5 ore trascorse meno 0,5 ore di pausa non pagata equivalgono a 8,00 ore fatturabili.',
      },
      {
        title: 'Turno di notte che attraversa la mezzanotte',
        input: 'Inizio: 22:00:00 · Fine: 06:30:00 · Passaggio di notte: attivato',
        output: 'Durata netta: 08:30:00 · Decimale: 8,50 h · 510 min',
        explanation:
          'L’ora di fine viene trattata come il giorno dopo, quindi il turno di notte completo viene contato.',
      },
    ],
    benefits: [
      'Gestisce correttamente i turni di notte che attraversano le 00:00 con un solo interruttore',
      'Mostra insieme le HH:MM:SS, le ore decimali, il totale in minuti e il totale in secondi',
      'Il sommatore dinamico a più righe totalizza segmenti di lavoro o durate video e audio illimitati',
      'Impedisce deduzioni di pausa superiori alla durata totale del turno trascorso',
    ],
    useCases: [
      'Registrare le ore fatturabili dei liberi professionisti e dedurre le pause non pagate',
      'Calcolare le ore di turno di notte ospedaliere, logistiche o alberghiere',
      'Sommare i timestamp di episodi di podcast, le durate di corsi o di playlist',
      'Convertire voci di foglio di ore di 7 h 45 min in 7,75 ore decimali per la fatturazione',
    ],
    faqs: [
      {
        question: 'Come vengono calcolate le ore decimali?',
        answer:
          'Il totale dei secondi netti viene diviso per 3 600. Per esempio, 7 ore 45 minuti (27 900 secondi) equivalgono a 7,75 ore decimali.',
      },
      {
        question: 'Supporta i turni di notte che finiscono dopo la mezzanotte?',
        answer:
          'Sì. Lascia spuntata l’opzione «Tratta l’ora di fine precedente all’ora di inizio come il giorno dopo» in modo che un turno dalle 22:00 alle 06:30 calcoli precisamente 8 ore 30 minuti.',
      },
      {
        question: 'Posso sommare durate superiori a 24 ore?',
        answer:
          'Sì. La modalità Somma di durate di foglio di ore accumula le ore senza azzerarsi a 24 e mostra anche il numero equivalente di giorni di 24 ore.',
      },
      {
        question: 'Che cosa misura la calcolatrice di durata di tempo?',
        answer:
          'Misura il tempo trascorso tra due ore, o il totale di più righe di durata, e mostra il risultato in HH:MM:SS, in ore decimali, in minuti e in secondi.',
      },
      {
        question: 'Come inserire le ore nella calcolatrice di durata di tempo?',
        answer:
          'Inserisci un’ora di inizio e un’ora di fine in ore, minuti e secondi. In modalità Somma di durate, inserisci invece ogni blocco come riga propria.',
      },
      {
        question: 'Come deduce la calcolatrice di durata di tempo una pausa non pagata?',
        answer:
          'Sottrae i minuti di pausa che inserisci dal tempo di turno trascorso: un turno di 8,5 ore con una pausa di 30 minuti dà quindi 8,00 ore nette.',
      },
      {
        question: 'Che cosa succede se la mia pausa è più lunga del mio turno?',
        answer:
          'Lo strumento impedisce una deduzione di pausa superiore alla durata totale del turno trascorso, quindi la durata netta non può scendere sotto zero.',
      },
      {
        question: 'La calcolatrice di durata di tempo può gestire i turni che iniziano prima di mezzanotte e finiscono dopo?',
        answer:
          'Sì. Attiva il passaggio di notte in modo che un’ora di fine precedente all’ora di inizio sia trattata come il giorno dopo, e tutto il turno di notte viene contato.',
      },
      {
        question: 'Qual è la differenza tra tempo trascorso e durata netta?',
        answer:
          'Il tempo trascorso è la durata completa dall’inizio alla fine. La durata netta è il tempo trascorso meno qualsiasi pausa non pagata, cioè la cifra generalmente fatturata o pagata.',
      },
      {
        question: 'Come sommare più blocchi di lavoro distinti?',
        answer:
          'Passa in modalità Somma di durate di foglio di ore, aggiungi una riga per blocco di lavoro con le sue ore, minuti e secondi, e lo strumento totalizza tutte le righe insieme.',
      },
      {
        question: 'Posso usare la calcolatrice di durata di tempo per le durate video o audio?',
        answer:
          'Sì. Aggiungi ogni durata di episodio, corso o traccia come riga in modalità Somma di durate per ottenere la durata combinata di una playlist o di un corso.',
      },
      {
        question: 'La calcolatrice di durata di tempo arrotonda i minuti o i secondi?',
        answer:
          'No, calcola dai secondi esatti e mostra il risultato preciso in HH:MM:SS con l’equivalente in ore decimali, quindi niente viene arrotondato in silenzio.',
      },
      {
        question: 'Che cosa significano 7,75 ore decimali in ore e minuti?',
        answer:
          'Significano 7 ore e 45 minuti. La parte dopo la virgola è una frazione di ora: 0,75 di ora equivale quindi a 45 minuti.',
      },
      {
        question: 'La calcolatrice di durata di tempo è gratuita?',
        answer:
          'Sì, è completamente gratuita nel tuo browser, senza account, senza registrazione e senza limiti di numero di durate calcolate.',
      },
      {
        question: 'La calcolatrice di durata di tempo registra o invia le mie ore?',
        answer:
          'No. Tutti i calcoli vengono eseguiti localmente nel tuo browser, e le ore e le durate che inserisci non vengono mai inviate o registrate su un server.',
      },
      {
        question: 'Posso calcolare una durata di più di un giorno?',
        answer:
          'Sì. La modalità Somma di durate totalizza le ore senza azzerarsi a 24, e indica anche a quanti giorni di 24 ore equivale il totale.',
      },
      {
        question: 'Perché il mio turno mostra una durata negativa o nulla?',
        answer:
          'Significa generalmente che l’ora di fine è precedente all’ora di inizio senza passaggio di notte attivato, o che la pausa è lunga quanto il turno. Verifica prima l’interruttore di notte e la durata della pausa.',
      },
      {
        question: 'Come convertire minuti in ore decimali con questo strumento?',
        answer:
          'Inserisci il tempo come riga di durata o usa il risultato trascorso, e leggi la cifra delle ore decimali. Per esempio, 90 minuti si mostrano come 1,50 ore decimali.',
      },
      {
        question: 'La calcolatrice di durata di tempo può sommare ore in formato HH:MM:SS?',
        answer:
          'Sì. Ogni riga di durata accetta ore, minuti e secondi, e il totale si mostra in HH:MM:SS oltre che in ore decimali.',
      },
      {
        question: 'Che cosa devo verificare se il totale del mio foglio di ore non corrisponde alle mie ore?',
        answer:
          'Verifica che ogni riga sia stata inserita nella modalità giusta, che nessuna pausa sia stata contata due volte e che i turni di notte abbiano l’opzione di passaggio attivata.',
      },
    ],
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
    instructions: [
      {
        title: 'Scegli una categoria di misura',
        description:
          'Seleziona Lunghezza, Peso e massa, Temperatura, Superficie, Volume, Velocità o Archiviazione digitale nella barra in alto.',
      },
      {
        title: 'Inserisci il valore e scegli le unità',
        description:
          'Digita qualsiasi valore numerico e scegli le tue unità Da e A (clicca su Scambia in qualsiasi momento per invertire).',
      },
      {
        title: 'Inverti il senso della conversione',
        description:
          'Clicca su Scambia per invertire istantaneamente le unità Da e A senza ridigitare il valore.',
      },
      {
        title: 'Leggi il risultato convertito esatto',
        description:
          'Verifica il valore di destinazione formattato, compresi i decimali, prima di copiarlo nel tuo documento o calcolo.',
      },
      {
        title: 'Copia il risultato o sfoglia tutte le unità',
        description:
          'Copia il risultato di destinazione formattato oppure leggi la tabella dei valori equivalenti per ogni unità della famiglia.',
      },
      {
        title: 'Verifica le particolarità di archiviazione o temperatura',
        description:
          'Per l’archiviazione, conferma se ti servono GB decimali o GiB binari, e per la temperatura nota che i valori sotto lo zero assoluto sono bloccati.',
      },
    ],
    examples: [
      {
        title: 'Gigabyte decimale contro gibibyte binario',
        input: 'Categoria: Archiviazione digitale · 1 000 GB → GiB',
        output: '931,32257 GiB',
        explanation:
          'Spiega perché un disco da 1 TB (1 000 GB) mostra circa 931 GiB nei sistemi operativi desktop.',
      },
      {
        title: 'Conversione di temperatura da Celsius a Fahrenheit',
        input: 'Categoria: Temperatura · 20 °C → °F',
        output: '68 °F',
        explanation:
          'Calcolato come (20 × 9/5) + 32 = 68 °F.',
      },
    ],
    benefits: [
      'Usa le costanti di conversione internazionali esatte NIST/SI (per esempio 1 in = 0,0254 m esattamente)',
      'Separa l’archiviazione decimale SI (KB/MB/GB) dall’archiviazione binaria IEC (KiB/MiB/GiB)',
      'Convalida i limiti fisici di temperatura (mai sotto lo zero assoluto 0 K / -273,15 °C)',
      'Mostra una tabella di confronto completa per ogni unità della categoria attiva',
    ],
    useCases: [
      'Convertire piani tecnici tra millimetri, pollici e piedi',
      'Verificare i volumi liquidi di cucina tra millilitri, tazze e galloni',
      'Tradurre le temperature meteo o di laboratorio da Celsius a Fahrenheit e Kelvin',
      'Controllare le dimensioni di disco cloud tra GB decimali e GiB binari',
    ],
    faqs: [
      {
        question: 'Perché l’archiviazione digitale separa GB e GiB?',
        answer:
          'I produttori di archiviazione usano prefissi SI in base 10 (1 GB = 1 000³ byte), mentre molte utility di sistema operativo usano dimensioni binarie in base 2 (1 GiB = 1 024³ byte). Tenerli distinti elimina ogni confusione.',
      },
      {
        question: 'Le unità di volume consuetudinarie americane sono usate per tazze, pinte e galloni?',
        answer:
          'Sì. Once liquide, tazze, pinte, quarti e galloni usano le definizioni liquide consuetudinarie americane (1 gallone US = 3,785411784 L esattamente).',
      },
      {
        question: 'Perché il convertitore di temperatura blocca i valori sotto -273,15 °C?',
        answer:
          'Lo zero assoluto (0 K / -273,15 °C / -459,67 °F) è il limite inferiore fisico della temperatura termodinamica.',
      },
      {
        question: 'Quali unità può convertire il convertitore di unità?',
        answer:
          'Copre sette famiglie: lunghezza, peso e massa, temperatura, superficie, volume, velocità e archiviazione digitale, con molte unità in ogni famiglia.',
      },
      {
        question: 'Quanto sono precisi i risultati del convertitore di unità?',
        answer:
          'I risultati usano le costanti di conversione internazionali esatte NIST e SI, come 1 pollice pari a 0,0254 metri esattamente, quindi i calcoli sono precisi quanto il valore che inserisci.',
      },
      {
        question: 'Il convertitore di unità è gratuito?',
        answer:
          'Sì, è completamente gratuito nel tuo browser, senza account, senza registrazione e senza limiti di numero di conversioni.',
      },
      {
        question: 'Come convertire chilometri in miglia con il convertitore di unità?',
        answer:
          'Scegli la categoria Lunghezza, inserisci i tuoi chilometri, scegli chilometri come unità Da e miglia come unità A, e il valore convertito appare istantaneamente.',
      },
      {
        question: 'Come convertire chilogrammi in libbre?',
        answer:
          'Scegli la categoria Peso e massa, inserisci i chilogrammi, scegli chilogrammi come unità Da e libbre come unità A, e leggi il risultato o la tabella di confronto completa.',
      },
      {
        question: 'Qual è la differenza tra un litro e un gallone US?',
        answer:
          'Un litro è un’unità di volume metrica, mentre un gallone US è un’unità liquida consuetudinaria americana pari a 3,785411784 litri esattamente. Il convertitore usa questo fattore esatto.',
      },
      {
        question: 'Il convertitore di unità può convertire Celsius in Fahrenheit e Kelvin?',
        answer:
          'Sì. Scegli la categoria Temperatura e qualsiasi coppia tra Celsius, Fahrenheit e Kelvin, e lo strumento converte tra loro con le formule standard.',
      },
      {
        question: 'Perché 1 TB si mostra come circa 931 GiB nel convertitore di unità?',
        answer:
          'Un disco da 1 TB contiene 1 000 GB in termini decimali, ma i sistemi operativi mostrano spesso gibibyte binari, e 1 000 GB equivalgono a circa 931 GiB, perché ogni GiB vale 1 024³ byte.',
      },
      {
        question: 'Il convertitore di unità funziona offline nel mio browser?',
        answer:
          'Sì. Tutte le conversioni vengono eseguite localmente nel tuo browser con costanti integrate, quindi nessuna connessione a Internet né invio è necessario una volta caricata la pagina.',
      },
      {
        question: 'Il convertitore di unità registra o invia i miei numeri?',
        answer:
          'No. Ogni conversione viene eseguita localmente nel tuo browser, e i valori che inserisci non vengono mai inviati o registrati su un server.',
      },
      {
        question: 'Posso convertire la velocità tra km/h e mph?',
        answer:
          'Sì. Scegli la categoria Velocità, inserisci il valore in km/h, scegli mph come unità A, e lo strumento lo converte istantaneamente.',
      },
      {
        question: 'Come convertire metri quadrati in piedi quadrati?',
        answer:
          'Scegli la categoria Superficie, inserisci i metri quadrati, scegli metri quadrati come unità Da e piedi quadrati come unità A, e la superficie convertita appare immediatamente.',
      },
      {
        question: 'Qual è la differenza tra KB decimale e KiB binario?',
        answer:
          'Un kilobyte decimale (KB) vale 1 000 byte, mentre un kibibyte binario (KiB) vale 1 024 byte. Il convertitore tiene i due sistemi separati in modo che le dimensioni di archiviazione non siano mai confuse.',
      },
      {
        question: 'Il convertitore di unità gestisce numeri molto grandi o molto piccoli?',
        answer:
          'Sì. Puoi inserire valori grandi come migliaia di chilometri o valori minuscoli come frazioni di millimetro, e il risultato si mostra con una precisione decimale completa.',
      },
      {
        question: 'Quale scala di temperatura devo usare per la cucina o il meteo?',
        answer:
          'La maggior parte delle ricette e dei bollettini meteo fuori dagli Stati Uniti usa Celsius, mentre le ricette e il meteo americani usano Fahrenheit. Kelvin è usato soprattutto in scienza e laboratorio.',
      },
      {
        question: 'Come convertire millilitri in tazze per una ricetta?',
        answer:
          'Scegli la categoria Volume, inserisci i millilitri, scegli millilitri come unità Da e tazze US come unità A, e lo strumento dà l’equivalente in tazze per la tua ricetta.',
      },
      {
        question: 'Perché i miei valori convertiti mostrano molti decimali?',
        answer:
          'Lo strumento mostra una precisione completa in modo che i lavori di ingegneria e scienza restino precisi. Per l’uso quotidiano, arrotonda semplicemente il risultato ai decimali di cui hai bisogno.',
      },
    ],
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
    instructions: [
      {
        title: 'Inserisci l’importo e la coppia di valute',
        description:
          'Digita l’importo iniziale e scegli le tue valute Da e A (usa Scambia per invertire sia la coppia sia il tasso).',
      },
      {
        title: 'Indica o recupera il tasso di cambio',
        description:
          'Digita manualmente il tuo tasso di cambio quotato (mai inventato offline), oppure fai clic su Recupera il tasso di riferimento BCE per interrogare l’API esterna Frankfurter.',
      },
      {
        title: 'Includi le commissioni di banca o carta se del caso',
        description:
          'Inserisci qualsiasi spread di cambio in percentuale o commissione di transazione estera di carta (per esempio 2,5 %) per vedere il ricavo netto reale e una tabella di riferimento.',
      },
      {
        title: 'Consulta gli importi lordo, commissioni e netto',
        description:
          'Confronta il totale lordo convertito, le commissioni dedotte e l’importo netto che ricevi realmente prima di inviare denaro.',
      },
      {
        title: 'Verifica il tasso inverso e la tabella di riferimento',
        description:
          'Leggi il tasso inverso e la tabella di riferimento rapida per verificare la conversione a più importi.',
      },
      {
        title: 'Recupera i tassi di nuovo prima di agire',
        description:
          'I tassi di cambio evolvono costantemente: recupera un nuovo tasso di riferimento BCE o conferma la quotazione della tua banca appena prima di convertire.',
      },
    ],
    examples: [
      {
        title: 'Convertire una fattura con commissioni di trasferimento dell’1,5 %',
        input: 'Importo: 1 000 USD · Tasso: 0,9200 EUR/USD · Commissioni di cambio: 1,5 %',
        output: 'Lordo: 920,00 EUR · Commissioni: 13,80 EUR · Netto ricevuto: 906,20 EUR',
        explanation:
          'Modella sia la conversione di cambio sia le commissioni in percentuale del fornitore in tutta trasparenza.',
      },
      {
        title: 'Verificare il tasso inverso',
        input: 'Importo: 100 EUR · Tasso: 1,0870 USD/EUR · Commissioni: 0 %',
        output: 'Lordo: 108,70 USD · Tasso inverso: 1 EUR = 1,0870 USD · 1 USD = 0,9200 EUR',
        explanation:
          'Il tasso inverso viene calcolato automaticamente come 1 diviso per il tasso inserito.',
      },
    ],
    benefits: [
      'Non inventa mai tassi di cambio falsi o scaduti codificati offline',
      'Modella le percentuali reali di commissioni di transazione estera di banche o carte di credito',
      'Calcola automaticamente il tasso di conversione inverso (1 destinazione = ? base)',
      'Supporta le consultazioni facoltative del tasso di riferimento BCE in tempo reale via API Frankfurter, con ripiego grazioso offline',
    ],
    useCases: [
      'Verificare quanto costa un bonifico internazionale dopo le commissioni di cambio della banca',
      'Calcolare i totali di fatture a un tasso di cambio contrattuale bloccato',
      'Confrontare le commissioni di transazione estera del 3 % delle carte di credito con le carte senza commissioni',
      'Valutare le tabelle di riferimento di conversione rapida a più importi',
    ],
    faqs: [
      {
        question: 'Perché il tasso di cambio inizia a 1,0000 invece di tassi in tempo reale precompilati?',
        answer:
          'I tassi di cambio fluttuano continuamente e le quotazioni di mercato in tempo reale richiedono un flusso di dati esterno. Piuttosto che inventare o mettere in cache tassi inesatti, questo strumento parte pulito in modalità manuale e ti permette di fare clic su «Recupera il tasso di riferimento BCE» quando vuoi una consultazione esterna del tasso BCE.',
      },
      {
        question: 'Da dove provengono i tassi di riferimento recuperati?',
        answer:
          'Quando fai clic su «Recupera il tasso di riferimento BCE», il tuo browser richiede l’ultimo tasso di riferimento della Banca centrale europea pubblicato da api.frankfurter.app. I tassi di riferimento sono parametri di mercato medio e differiscono leggermente dalle quotazioni al dettaglio delle banche.',
      },
      {
        question: 'Funziona se sono offline o se l’API esterna è bloccata?',
        answer:
          'Sì. Puoi sempre inserire qualsiasi tasso di cambio manualmente nel campo Tasso di cambio, e tutti i calcoli di commissioni, inverso e tabella vengono eseguiti localmente al 100 % nel tuo browser.',
      },
      {
        question: 'Come converte la calcolatrice di valute il mio denaro?',
        answer:
          'Moltiplica il tuo importo per il tasso di cambio che inserisci o recuperi, poi sottrae qualsiasi percentuale di commissioni di cambio che aggiungi, e mostra il totale lordo, le commissioni e l’importo netto ricevuto.',
      },
      {
        question: 'Quale tasso di cambio devo inserire nella calcolatrice di valute?',
        answer:
          'Inserisci il tasso esatto quotato dalla tua banca, dal tuo broker, dal tuo fornitore di carta o dalla tua fattura. Se non hai una quotazione, recupera il tasso di riferimento BCE come parametro e aspettati che il tasso del tuo fornitore differisca leggermente.',
      },
      {
        question: 'Qual è la differenza tra un tasso di riferimento BCE e il tasso della mia banca?',
        answer:
          'Un tasso di riferimento BCE è un parametro di mercato medio pubblicato dalla Banca centrale europea. Un tasso bancario aggiunge uno spread o una maggiorazione a questo parametro, quindi il tasso bancario è generalmente meno favorevole.',
      },
      {
        question: 'Come calcola la calcolatrice di valute le commissioni di cambio?',
        answer:
          'Applica la percentuale di commissioni che inserisci all’importo lordo convertito e la sottrae per mostrare il ricavo netto. Per esempio, commissioni dell’1,5 % su 920 EUR tolgono 13,80 EUR.',
      },
      {
        question: 'Che cos’è un tasso di cambio inverso?',
        answer:
          'È il tasso nel senso opposto, che indica quanta valuta base un’unità della valuta di destinazione acquista. Lo strumento lo calcola automaticamente dal tasso che inserisci.',
      },
      {
        question: 'La calcolatrice di valute dà consulenza finanziaria?',
        answer:
          'No. Esegue solo i calcoli di conversione e commissioni dal tasso e dalle commissioni che fornisci. Non raccomanda quando convertire, quale fornitore usare né se un tasso è buono.',
      },
      {
        question: 'La calcolatrice di valute può indicare quanto riceverò dopo le commissioni?',
        answer:
          'Sì. La cifra netta ricevuta è l’importo lordo convertito meno le commissioni di cambio che hai inserito, cioè l’importo che devi aspettarti prima di qualsiasi commissione di bonifico forfettaria distinta.',
      },
      {
        question: 'Perché il tasso della mia banca è peggiore del tasso che vedo online?',
        answer:
          'I tassi mostrati online sono generalmente parametri di mercato medio senza maggiorazione. Le banche e i fornitori di carte aggiungono uno spread per coprire i costi e il profitto, quindi il loro tasso quotato è meno favorevole del parametro.',
      },
      {
        question: 'La calcolatrice di valute registra o invia i miei importi?',
        answer:
          'No. I tuoi importi, tassi e impostazioni di commissioni sono usati solo per il calcolo nel tuo browser, ad eccezione del recupero facoltativo del tasso BCE, che richiede solo un tasso di riferimento pubblico.',
      },
      {
        question: 'La calcolatrice di valute è gratuita?',
        answer:
          'Sì, è completamente gratuita nel tuo browser, senza account, senza registrazione e senza limiti di numero di conversioni.',
      },
      {
        question: 'Con quale frequenza cambiano i tassi di riferimento BCE?',
        answer:
          'I tassi di riferimento BCE vengono pubblicati una volta al giorno lavorativo: il tasso recuperato è quindi un parametro giornaliero piuttosto che un prezzo di mercato in tempo reale che fluttua.',
      },
      {
        question: 'Posso convertire tra due valute qualsiasi?',
        answer:
          'Puoi convertire tra le principali valute mondiali che lo strumento elenca inserendo qualsiasi tasso manuale. Il recupero BCE copre le coppie di valute pubblicate nei dati di riferimento BCE.',
      },
      {
        question: 'Che cosa succede se il recupero del tasso BCE fallisce?',
        answer:
          'Lo strumento torna con garbo alla modalità manuale. Digita semplicemente il tuo tasso di cambio nel campo del tasso, e tutti i calcoli di conversione, commissioni e tabella continuano a funzionare localmente.',
      },
      {
        question: 'Devo usare il tasso BCE o il tasso della mia carta per un acquisto all’estero?',
        answer:
          'Usa il tasso della tua carta per il costo reale, perché è quello che ti sarà realmente addebitato. Usa il tasso BCE solo come parametro per vedere la maggiorazione che la tua carta aggiunge.',
      },
      {
        question: 'Come confrontare due commissioni di cambio diverse?',
        answer:
          'Esegui lo stesso importo e lo stesso tasso due volte con ogni percentuale di commissioni e confronta le cifre nette ricevute. L’opzione con l’importo netto più alto ti costa meno.',
      },
      {
        question: 'La calcolatrice di valute include le commissioni di trasferimento nascoste?',
        answer:
          'No. Copre la conversione di cambio e la percentuale di commissioni di cambio che inserisci. Le commissioni di bonifico forfettarie o le commissioni di trasferimento fisse sono distinte: aggiungile tu stesso quando confronti i fornitori.',
      },
      {
        question: 'Posso usare la calcolatrice di valute per una fattura in un’altra valuta?',
        answer:
          'Sì. Inserisci l’importo della fattura, il tasso di cambio contrattuale o bloccato e le commissioni eventuali, e lo strumento mostra i totali lordo, commissioni e netto nella tua valuta.',
      },
    ],
  },
};
