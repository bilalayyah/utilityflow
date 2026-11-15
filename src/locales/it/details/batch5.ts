// Detail content for IT tools — split out of
// src/locales/it/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'merge-pdf': {
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
          'Sì, nessuna ricompressione né conversione in immagine avviene durante l’estrazione, quindi ogni pagina estratta conserva la qualità esatta del PDF originale.',
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
          'JPG, PNG e WebP sono supportati, quindi puoi convertire foto, screenshot e immagini web in un unico PDF.',
      },
      {
        question: 'Posso convertire una sola immagine in PDF?',
        answer:
          'Sì, un’immagine produce un PDF di una pagina, il che è utile per condividere una sola foto o un documento scansionato come file.',
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
          'Sì, puoi combinare i tre formati in un unico documento, e le pagine restano nell’ordine in cui le hai disposte.',
      },
      {
        question: 'Le pagine del PDF saranno nello stesso ordine delle mie immagini?',
        answer:
          'Sì, le pagine seguono l’ordine mostrato nella lista delle immagini, quindi riordina prima le immagini se vuoi una sequenza di pagine diversa.',
      },
      {
        question: 'Posso definire un nome di file personalizzato per il PDF?',
        answer:
          'Sì, inserisci il nome di file che preferisci prima di convertire, e il PDF scaricato userà quel nome al posto di quello predefinito.',
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
          'I PDF cifrati devono essere sbloccati prima del rendering locale, perché lo strumento non può leggere le pagine di un file ancora bloccato.',
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
          'Sì, è gratuita, senza filigrana né limiti, e puoi ruotare tutti i PDF che ti servono senza creare un account.',
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
          'Puoi ruotare di 90° in senso orario, 90° in senso antiorario e 180°, così qualsiasi pagina laterale o capovolta si corregge con un clic.',
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
          'No, i PDF cifrati devono prima essere sbloccati, perché lo strumento non può modificare le pagine di un file ancora bloccato.',
      },
      {
        question: 'La rotazione di pagine PDF invia il mio file?',
        answer:
          'No, la rotazione viene eseguita interamente nel tuo browser; il tuo file non lascia mai il tuo dispositivo.',
      },
      {
        question: 'Posso ruotare pagine in un PDF scansionato?',
        answer:
          'Sì, le pagine scansionate ruotano come le pagine di testo, perché la rotazione ruota l’intera immagine della pagina senza leggerne il contenuto.',
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
          'Sì, funziona nei browser mobili moderni, quindi puoi aprire un PDF sul telefono e ruotarne le pagine direttamente lì.',
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
          'No. Lo strumento numera le pagine solo con cifre arabe standard, quindi formati come le cifre romane non sono disponibili come stile di numerazione.',
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
