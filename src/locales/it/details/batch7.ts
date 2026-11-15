// Detail content for IT tools — split out of
// src/locales/it/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
    instructions: [
      {
        title: 'Scegli un’immagine di origine',
        description:
          'Seleziona un’immagine PNG, JPG, WebP o GIF dal tuo dispositivo per decodificarne dimensioni e dimensione originale in byte.',
      },
      {
        title: 'Scegli formato di destinazione, limite di larghezza e qualità',
        description:
          'Seleziona WebP o JPG per risparmi drastici in byte, applica opzionalmente un limite di larghezza massima (come 1920 px o 1280 px) e regola lo slider di qualità dal 10% al 100%.',
      },
      {
        title: 'Esegui la compressione',
        description:
          'Fai clic su Comprimi per ricodificare l’immagine in locale nel browser e vedere subito la nuova dimensione in byte.',
      },
      {
        title: 'Confronta prima e dopo',
        description:
          'Controlla l’anteprima affiancata e il risparmio esatto in byte e in percentuale per assicurarti che la qualità sembri ancora buona.',
      },
      {
        title: 'Scarica il file compresso',
        description:
          'Fai clic su Scarica per salvare l’immagine ottimizzata sul tuo dispositivo, poi ripeti il processo per un altro file quando serve.',
      },
      {
        title: 'Suggerimento: l’output è più grande dell’input?',
        description:
          'Se un piccolo PNG cresce dopo la compressione, passa il formato di output a WebP o JPG, oppure abbassa leggermente lo slider di qualità, poi comprimi di nuovo.',
      },
    ],
    examples: [
      {
        title: 'Ottimizzare una foto hero di 2,4 MB per un articolo del blog',
        input: 'JPG 3840×2160 · Output: WebP · Larghezza massima: 1280 px · Qualità: 80%',
        output: 'WebP 1280×720 tipicamente ~85–140 KB (-94% di riduzione del payload)',
        explanation:
          'Combinare il limite di dimensione con la compressione moderna WebP accelera drasticamente il Largest Contentful Paint.',
      },
      {
        title: 'Rendere una schermata PNG abbastanza leggera per un’email',
        input: 'PNG 3,1 MB · Output: JPG · Qualità: 75%',
        output: 'JPG di circa 300–450 KB, abbastanza piccolo per la maggior parte dei limiti di allegato email',
        explanation:
          'Passare da PNG lossless a JPG lossy riduce enormemente le schermate con molti colori.',
      },
    ],
    benefits: [
      'Zero upload al server: grafiche di prodotto non rilasciate e foto private restano completamente locali',
      'Supporta la ricodifica WebP, JPEG (con riempimento automatico bianco dell’alfa) e PNG',
      'Mostra subito le dimensioni reali prima e dopo e il risparmio in percentuale',
      'I limiti opzionali di larghezza massima ridimensionano le foto troppo grandi della fotocamera in un solo passaggio',
    ],
    useCases: [
      'Ridurre banner hero e schermate per migliorare Core Web Vitals e LCP',
      'Preparare allegati più leggeri per email, portali e caricamenti CMS',
      'Convertire schermate grezze pesanti in asset WebP leggeri per il web',
      'Verificare rapidamente il compromesso tra qualità ottimale e fedeltà visiva',
    ],
    faqs: [
      {
        question: 'Perché comprimere un piccolo PNG in PNG a volte ne aumenta la dimensione?',
        answer:
          'La ricodifica Canvas del browser usa flussi DEFLATE lossless standard senza strumenti specializzati di quantizzazione della palette come pngquant. Passare il formato di output a WebP o JPG di solito riduce drasticamente la dimensione del file.',
      },
      {
        question: 'Le mie foto vengono caricate su un server di compressione esterno?',
        answer:
          'No. Decodifica, ridimensionamento e ricodifica Canvas avvengono rigorosamente nella memoria del tuo browser.',
      },
      {
        question: 'Che cosa succede agli sfondi trasparenti se scelgo JPG?',
        answer:
          'Poiché JPEG non supporta la trasparenza alfa, le regioni trasparenti vengono riempite in modo pulito con bianco pieno (#ffffff) prima della codifica.',
      },
      {
        question: 'Il Compressore di Immagini è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione, senza watermark e senza limiti su quante immagini comprimi.',
      },
      {
        question: 'Quali formati di immagine posso comprimere?',
        answer:
          'Puoi comprimere immagini PNG, JPG, WebP e GIF e scaricare il risultato come WebP, JPG o PNG.',
      },
      {
        question: 'Quanto può ridurre la mia foto il Compressore di Immagini?',
        answer:
          'Il risparmio dipende dal formato originale e dall’impostazione di qualità, ma le foto convertite in WebP a qualità 80% spesso si riducono del 50–90%.',
      },
      {
        question: 'Comprimere la mia immagine ne ridurrà la qualità?',
        answer:
          'I formati lossy come WebP e JPG scambiano un po’ di dettaglio con file molto più piccoli. Usa lo slider di qualità e l’anteprima per trovare l’equilibrio che preferisci, oppure mantieni PNG per risultati lossless.',
      },
      {
        question: 'Il Compressore di Immagini ridimensiona le dimensioni della mia immagine?',
        answer:
          'Solo se imposti un limite di larghezza massima. Altrimenti le dimensioni in pixel restano le stesse e cambia solo la dimensione del file.',
      },
      {
        question: 'Posso comprimere immagini per allegati email?',
        answer:
          'Sì, comprimere prima rende le foto grandi abbastanza piccole da rientrare nei limiti di allegato email senza dividerle in più messaggi.',
      },
      {
        question: 'Quale impostazione di qualità dovrei scegliere per le immagini del sito web?',
        answer:
          'Una qualità del 75–85% in WebP di solito sembra quasi identica all’originale mantenendo i file abbastanza piccoli per caricamenti rapidi.',
      },
      {
        question: 'Perché dovrei convertire JPG in WebP durante la compressione?',
        answer:
          'WebP usa una compressione più efficiente di JPG, quindi la stessa foto alla stessa qualità visiva è di solito molto più piccola.',
      },
      {
        question: 'Posso comprimere più immagini alla volta?',
        answer:
          'Il compressore elabora un’immagine alla volta, così puoi regolare qualità, larghezza e formato per ogni foto prima di scaricarla.',
      },
      {
        question: 'La compressione funziona offline?',
        answer:
          'Sì, una volta caricata la pagina, tutta la compressione avviene in locale nel browser, quindi funziona senza connessione internet.',
      },
      {
        question: 'La mia immagine compressa avrà un watermark?',
        answer:
          'No, le immagini scaricate non includono mai watermark o branding, quindi il file compresso sembra esattamente come la tua immagine originale, solo più piccolo.',
      },
      {
        question: 'Qual è il formato migliore per comprimere le schermate?',
        answer:
          'WebP di solito produce i file più piccoli per le schermate. Usa PNG solo quando ti serve qualità lossless perfetta a livello di pixel.',
      },
      {
        question: 'Posso comprimere un’immagine senza cambiarne le dimensioni?',
        answer:
          'Sì, lascia il limite di larghezza massima non impostato e lo strumento mantiene larghezza e altezza originali riducendo solo la dimensione del file.',
      },
      {
        question: 'Il Compressore di Immagini conserva i metadati dell’immagine?',
        answer:
          'La ricodifica Canvas del browser in genere elimina i metadati EXIF come impostazioni della fotocamera e posizione, il che aiuta anche a ridurre il file.',
      },
      {
        question: 'Posso usare il Compressore di Immagini sul telefono?',
        answer:
          'Sì, funziona in qualsiasi browser mobile moderno. Scegli un’immagine dalla tua libreria foto e scarica il risultato compresso allo stesso modo.',
      },
      {
        question: 'Qual è la dimensione massima di immagine che posso comprimere?',
        answer:
          'Non c’è un limite fisso del server perché nulla viene caricato. Le immagini molto grandi sono limitate solo dalla memoria del tuo dispositivo e dalla dimensione Canvas del browser.',
      },
      {
        question: 'Come comprimo un’immagine a meno di 100 KB?',
        answer:
          'Scegli l’output WebP, imposta una larghezza massima come 1280 px e abbassa lo slider di qualità passo dopo passo finché la dimensione del file mostrata non scende sotto 100 KB.',
      },
    ],
  },
  'image-resizer': {
    instructions: [
      {
        title: 'Carica la tua immagine',
        description:
          'Carica un’immagine PNG, JPG, WebP o GIF per leggerne larghezza e altezza originali in pixel.',
      },
      {
        title: 'Imposta larghezza, altezza e modalità di adattamento',
        description:
          'Inserisci pixel personalizzati (con blocco opzionale del rapporto d’aspetto) o seleziona un preset social, poi scegli Ritagliatura Cover al centro o Allungamento/Scala esatta.',
      },
      {
        title: 'Scegli un formato di output',
        description:
          'Scegli PNG per la trasparenza, JPG per le foto o WebP per il file più piccolo prima del rendering.',
      },
      {
        title: 'Renderizza l’immagine ridimensionata',
        description:
          'Fai clic su Renderizza immagine ridimensionata per generare la nuova versione alle tue dimensioni esatte in pixel.',
      },
      {
        title: 'Controlla il risultato e scarica',
        description:
          'Ispeziona l’anteprima per nitidezza e ritaglio, controlla la dimensione del file, poi fai clic su Scarica per salvarla.',
      },
      {
        title: 'Suggerimento: l’immagine sembra allungata o sfocata?',
        description:
          'Attiva Blocco rapporto d’aspetto o passa a Ritagliatura Cover al centro per evitare distorsioni ed evita di ingrandire molto oltre la dimensione originale.',
      },
    ],
    examples: [
      {
        title: 'Ritagliare una schermata alta in una scheda Open Graph 1200×630',
        input: 'Schermata 1440×1600 · Preset: OG Share (1200×630) · Adattamento: Ritagliatura Cover al centro',
        output: 'Scheda 1200×630 nitida centrata verticalmente senza schiacciamenti né distorsioni.',
        explanation:
          'Il ritaglio cover scala in proporzione finché il riquadro di destinazione non è riempito, tagliando i bordi in eccesso in modo uniforme.',
      },
      {
        title: 'Preparare una foto profilo quadrata 512×512',
        input: 'Foto ritratto 3000×4000 · Preset: Avatar (512×512) · Adattamento: Ritagliatura Cover al centro',
        output: 'Avatar quadrato 512×512 centrato sul volto, pronto per i profili social.',
        explanation:
          'Il preset Avatar combina ridimensionamento e ritaglio centrale in un solo passaggio.',
      },
    ],
    benefits: [
      'Preset in un clic per Open Graph, YouTube HD, Quadrato e Avatar in pixel',
      'La Ritagliatura Cover al centro previene allungamenti goffi quando si cambia rapporto d’aspetto',
      'La qualità imageSmoothingQuality di Canvas preserva tipografia e linee nitide',
      'Esporta direttamente in PNG, JPG o WebP con lettura reale della dimensione del file',
    ],
    useCases: [
      'Creare schede og:image 1200×630 per post del blog e landing page',
      'Preparare foto di prodotto 1080×1080 e avatar di profilo 512×512',
      'Ridurre schermate ad alta densità prima di aggiungerle alla documentazione',
      'Generare dimensioni hero esatte che corrispondono ai requisiti dei modelli CMS',
    ],
    faqs: [
      {
        question: 'Qual è la differenza tra Ritagliatura Cover al centro e Allungamento / Scala esatta?',
        answer:
          'La Ritagliatura Cover al centro preserva le proporzioni naturali e taglia i bordi in eccesso in modo simmetrico quando il nuovo rapporto d’aspetto differisce. La Scala esatta forza l’intera immagine originale nella larghezza e altezza di destinazione.',
      },
      {
        question: 'Posso ingrandire una piccola foto a 4K in modo pulito?',
        answer:
          'L’interpolazione Canvas può esportare griglie di pixel più grandi, anche se l’ingrandimento oltre la risoluzione nativa non può inventare dettagli fini mancanti.',
      },
      {
        question: 'Qual è la dimensione massima di output supportata?',
        answer:
          'Gli input sono limitati fino a 8000 px per asse per restare in sicurezza entro i limiti di memoria Canvas del browser.',
      },
      {
        question: 'Il Ridimensionatore di Immagini è gratuito?',
        answer:
          'Sì, è gratuito senza registrazione, senza watermark e senza limiti su quante immagini ridimensioni.',
      },
      {
        question: 'Qual è la differenza tra ridimensionare e ritagliare un’immagine?',
        answer:
          'Ridimensionare cambia le dimensioni in pixel dell’intera immagine, mentre ritagliare taglia via parte dell’immagine. Questo strumento può fare entrambe le cose, incluso il ritaglio cover al centro.',
      },
      {
        question: 'Il Ridimensionatore di Immagini può rendere un’immagine 1200x630 per la condivisione social?',
        answer:
          'Sì, scegli il preset Open Graph (1200×630) e lo strumento dimensiona la tua immagine esattamente per le anteprime dei link sulle piattaforme social.',
      },
      {
        question: 'Come ridimensiono un’immagine senza deformarla?',
        answer:
          'Mantieni attivo Blocco rapporto d’aspetto o usa Ritagliatura Cover al centro, così lo strumento scala in proporzione invece di schiacciare l’immagine.',
      },
      {
        question: 'Posso ridimensionare un’immagine a un quadrato 1080x1080?',
        answer:
          'Sì, scegli il preset Quadrato oppure inserisci 1080 sia per larghezza sia per altezza con Ritagliatura Cover al centro attiva.',
      },
      {
        question: 'Ridimensionare un’immagine ne riduce la dimensione del file?',
        answer:
          'Di solito sì, perché meno pixel significano meno dati, soprattutto quando esporti anche come WebP o JPG.',
      },
      {
        question: 'Quali formati di immagine posso ridimensionare?',
        answer:
          'Puoi ridimensionare immagini PNG, JPG, WebP e GIF ed esportarle come PNG, JPG o WebP.',
      },
      {
        question: 'Ridimensionare renderà la mia immagine sfocata?',
        answer:
          'La riduzione di solito resta nitida grazie allo smoothing Canvas di alta qualità. L’ingrandimento oltre la dimensione originale può ammorbidire i dettagli fini.',
      },
      {
        question: 'Posso ridimensionare un’immagine per una foto profilo?',
        answer:
          'Sì, usa il preset Avatar (512×512) con Ritagliatura Cover al centro per ottenere una foto profilo perfettamente quadrata.',
      },
      {
        question: 'Che cos’è la Ritagliatura Cover al centro nel Ridimensionatore di Immagini?',
        answer:
          'Scala l’immagine finché non riempie il riquadro di destinazione, poi taglia i bordi in eccesso in modo uniforme dal centro così nulla sembra allungato.',
      },
      {
        question: 'Il Ridimensionatore di Immagini carica le mie foto da qualche parte?',
        answer:
          'No, tutto il ridimensionamento avviene in locale nel browser e le tue immagini non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Posso ridimensionare un’immagine sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Carica una foto, inserisci le nuove dimensioni e scarica il risultato.',
      },
      {
        question: 'Che cosa succede alla trasparenza quando ridimensiono un PNG?',
        answer:
          'La trasparenza viene preservata finché esporti come PNG o WebP. Esportando come JPG le aree trasparenti vengono riempite di bianco.',
      },
      {
        question: 'Posso ridimensionare più immagini alla stessa dimensione?',
        answer:
          'Lo strumento ridimensiona un’immagine alla volta. Ripeti lo stesso preset o le stesse dimensioni per ogni immagine per mantenerle coerenti.',
      },
      {
        question: 'Qual è l’immagine più grande che il Ridimensionatore di Immagini può gestire?',
        answer:
          'Gli input sono limitati a 8000 px per lato per restare entro i limiti di memoria Canvas del browser.',
      },
      {
        question: 'Come ridimensiono un’immagine per le miniature YouTube?',
        answer:
          'Scegli il preset YouTube HD (1280×720) così la tua miniatura corrisponde alla dimensione consigliata 16:9.',
      },
      {
        question: 'Perché il file della mia immagine ridimensionata è ancora grande?',
        answer:
          'La dimensione in pixel è solo parte della storia. Esporta come WebP o JPG invece di PNG, oppure usa dopo il Compressore di Immagini per ridurre ulteriormente il file.',
      },
    ],
  },
  'image-format-converter': {
    instructions: [
      {
        title: 'Scegli formato di destinazione e opzioni',
        description:
          'Seleziona l’output PNG, JPG o WebP, imposta la qualità lossy se applicabile e scegli un colore di sfondo matte quando converti immagini trasparenti in JPG.',
      },
      {
        title: 'Seleziona una o più immagini',
        description:
          'Carica un singolo file o un batch multi-file per renderizzare ogni immagine in modo pulito a piena risoluzione nativa.',
      },
      {
        title: 'Controlla l’anteprima di ciascun file',
        description:
          'Esamina dimensioni e dimensione stimata di ogni immagine convertita prima di scaricare qualsiasi cosa.',
      },
      {
        title: 'Converti il batch',
        description:
          'Lo strumento renderizza ogni immagine a piena risoluzione nativa nel formato selezionato, direttamente nel browser.',
      },
      {
        title: 'Scarica gli asset convertiti',
        description:
          'Confronta dimensioni e nuova dimensione in byte di ciascun file, poi scarica le immagini convertite singolarmente.',
      },
      {
        title: 'Suggerimento: le aree trasparenti sono diventate nere?',
        description:
          'Se un PNG convertito in JPG mostra nero dove era trasparente, converti di nuovo con un colore di riempimento matte come bianco o il colore del tuo brand.',
      },
    ],
    examples: [
      {
        title: 'Appiattire un logo SVG/PNG trasparente su bianco per JPG',
        input: 'logo.png trasparente · Destinazione: JPG (90%) · Riempimento: #FFFFFF',
        output: 'logo.jpg con sfondo bianco pulito e zero artefatti neri di trasparenza',
        explanation:
          'Riempire esplicitamente il matte Canvas prima di disegnare previene aloni neri quando si convertono PNG alfa in JPEG.',
      },
      {
        title: 'Convertire in batch schermate WebP in PNG',
        input: '8 schermate .webp scaricate · Destinazione: PNG',
        output: '8 file PNG a piena risoluzione, pronti per app che non accettano WebP',
        explanation:
          'La conversione in batch gestisce più file in una sola passata senza code di server.',
      },
    ],
    benefits: [
      'Elabora batch di più immagini a piena risoluzione senza code di server',
      'Il colore di riempimento di sfondo JPEG configurabile evita brutti riempimenti neri trasparenti',
      'Converte i download WebP di nuovo in file PNG o JPG universalmente accettati',
      'Renderizza file SVG vettoriali direttamente in immagini raster PNG o WebP nitide',
    ],
    useCases: [
      'Convertire file .webp scaricati in .png o .jpg per software legacy',
      'Produrre in batch asset .webp moderni per siti statici e CDN',
      'Esportare PNG nitidi da icone di brand SVG per slide o post social',
      'Controllare le differenze di dimensione dei formati tra PNG, JPG e WebP fianco a fianco',
    ],
    faqs: [
      {
        question: 'Può convertire foto HEIC di Apple?',
        answer:
          'La decodifica HEIC dipende dal supporto del browser sottostante (Safari supporta HEIC nativamente, mentre Chrome e Firefox di solito richiedono input PNG, JPG, WebP, SVG o GIF).',
      },
      {
        question: 'Convertire JPG in PNG migliora i dettagli fotografici persi?',
        answer:
          'No. Convertire un JPG già compresso in PNG lo preserva lossless in avanti, ma non può ripristinare gli artefatti di compressione JPEG precedenti.',
      },
      {
        question: 'Vengono applicati limiti di dimensione dei file?',
        answer:
          'Vale solo la RAM del tuo dispositivo; tutta la codifica avviene in locale senza limiti di dimensione dei file del server.',
      },
      {
        question: 'Il Convertitore di Formato Immagine è gratuito?',
        answer:
          'Sì, è gratuito senza account, senza watermark e senza limiti sul numero di conversioni.',
      },
      {
        question: 'Quali formati posso convertire da e verso?',
        answer:
          'Puoi convertire file PNG, JPG, WebP, GIF e SVG in output PNG, JPG o WebP.',
      },
      {
        question: 'Perché convertire PNG in WebP?',
        answer:
          'I file WebP sono di solito molto più piccoli dei PNG a qualità visiva simile, il che fa caricare più velocemente le pagine web.',
      },
      {
        question: 'Perché convertire WebP in JPG o PNG?',
        answer:
          'Alcune app più vecchie, stampanti e moduli di caricamento non accettano WebP, quindi convertire di nuovo in JPG o PNG ripristina la compatibilità universale.',
      },
      {
        question: 'Posso convertire più immagini alla volta?',
        answer:
          'Sì, puoi caricare un batch di immagini e convertirle tutte nello stesso formato di destinazione in una sola volta.',
      },
      {
        question: 'Convertire in JPG rimuove la trasparenza?',
        answer:
          'Sì, JPG non ha canale alfa, quindi le aree trasparenti vengono riempite con il colore matte scelto, come il bianco.',
      },
      {
        question: 'Quale colore matte dovrei usare quando converto un PNG trasparente in JPG?',
        answer:
          'Il bianco è l’opzione predefinita più sicura. Abbina il colore di sfondo del tuo sito web o delle slide per un aspetto perfetto.',
      },
      {
        question: 'Posso convertire una foto in WebP e mantenerne la qualità?',
        answer:
          'Sì, WebP a qualità 85–90% di solito sembra identico al JPG originale producendo un file sensibilmente più piccolo.',
      },
      {
        question: 'Posso convertire un logo SVG in PNG?',
        answer:
          'Sì, lo strumento rasterizza i file SVG in immagini PNG o WebP nitide alle loro dimensioni native.',
      },
      {
        question: 'Il Convertitore di Formato Immagine carica le mie immagini?',
        answer:
          'No, ogni conversione avviene in locale nel browser e i tuoi file non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Quale qualità dovrei usare quando converto in JPG?',
        answer:
          'Una qualità dell’85–90% mantiene le foto pulite restando molto più piccola del PNG. Abbassala per file più piccoli.',
      },
      {
        question: 'Posso convertire GIF animate con questo strumento?',
        answer:
          'I file GIF possono essere caricati, ma la conversione renderizza un singolo fotogramma fermo invece di preservare l’animazione.',
      },
      {
        question: 'Perché il mio PNG convertito è più grande del JPG originale?',
        answer:
          'PNG è lossless, quindi una foto convertita da JPG compresso a PNG memorizza ogni pixel senza compressione e di solito cresce di dimensione.',
      },
      {
        question: 'Il convertitore mantiene le dimensioni originali dell’immagine?',
        answer:
          'Sì, le immagini convertite mantengono la loro piena risoluzione nativa a meno che tu non le ridimensioni separatamente con il Ridimensionatore di Immagini.',
      },
      {
        question: 'Posso usare il Convertitore di Formato Immagine sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Seleziona immagini dal tuo dispositivo e scarica i file convertiti.',
      },
      {
        question: 'Qual è il formato migliore per le immagini del sito web?',
        answer:
          'WebP è di solito il migliore per foto e grafiche sul web, mentre PNG è meglio quando ti serve trasparenza o qualità lossless.',
      },
      {
        question: 'Le immagini convertite includono watermark?',
        answer:
          'No, i file convertiti sono copie pulite senza watermark o branding aggiunti.',
      },
    ],
  },
  'image-rotate-flip': {
    instructions: [
      {
        title: 'Carica un’immagine',
        description:
          'Scegli un’immagine PNG, JPG, WebP o GIF per caricarla nell’anteprima Canvas interattiva.',
      },
      {
        title: 'Ruota, specchia o applica filtri',
        description:
          'Usa i pulsanti Ruota a sinistra/destra, gli interruttori Specchia orizzontale/verticale, l’interruttore Scala di grigi e gli slider Luminosità/Contrasto.',
      },
      {
        title: 'Visualizza il risultato live in anteprima',
        description:
          'Controlla l’anteprima Canvas dopo ogni modifica per confermare che orientamento e intensità del filtro sembrino giusti.',
      },
      {
        title: 'Reimposta se necessario',
        description:
          'Usa il pulsante Reimposta per annullare tutte le rotazioni, i ribaltamenti e le modifiche ai filtri e ricominciare dall’originale.',
      },
      {
        title: 'Scegli un formato di output',
        description:
          'Scegli PNG per mantenere la trasparenza, JPG per le foto o WebP per file più piccoli prima di esportare.',
      },
      {
        title: 'Esporta l’immagine modificata',
        description:
          'Fai clic su Scarica per salvare la tua immagine ruotata, specchiata o filtrata sul tuo dispositivo.',
      },
    ],
    examples: [
      {
        title: 'Correggere una foto dello smartphone laterale e aumentare la luminosità',
        input: 'Foto 3024×4032 ruotata di 90° in senso orario · Luminosità: 110% · Contrasto: 105%',
        output: 'Immagine verticale 4032×3024 esportata in modo pulito con orientamento EXIF incorporato nei pixel.',
        explanation:
          'Canvas scambia larghezza e altezza automaticamente nelle rotazioni di 90° e 270°.',
      },
      {
        title: 'Specchiare un selfie e convertirlo in bianco e nero',
        input: 'Selfie specchiato · Specchia orizzontale: attivo · Scala di grigi: attiva',
        output: 'Foto in bianco e nero con orientamento corretto, pronta da condividere.',
        explanation:
          'Rotazione, ribaltamento e filtri possono essere combinati prima di un’unica esportazione.',
      },
    ],
    benefits: [
      'L’anteprima live dei pixel si aggiorna subito senza latenza di upload',
      'Incorpora l’orientamento in modo pulito nelle coordinate reali dei pixel invece che in fragili flag EXIF',
      'Combina rotazione, ribaltamento e ritocchi di colore e tono in un unico spazio di lavoro pulito',
      'Il pulsante Reimposta non distruttivo ripristina i valori predefiniti in qualsiasi momento',
    ],
    useCases: [
      'Raddrizzare documenti o ricevute scansionati catturati lateralmente',
      'Annullare il ribaltamento di acquisizioni webcam al contrario o schermate capovolte',
      'Creare grafiche in scala di grigi ad alto contrasto per stampa o documentazione',
      'Schiarire rapidamente foto di prodotto sottoesposte prima di metterle in vendita',
    ],
    faqs: [
      {
        question: 'Ruotare un’immagine ricodifica i pixel?',
        answer:
          'Sì. Disegnare su HTML5 Canvas incorpora il nuovo orientamento e le regolazioni dei filtri in modo permanente in ogni pixel, così tutte le app la mostrano dritta.',
      },
      {
        question: 'Posso preservare gli sfondi trasparenti quando ruoto o specchio?',
        answer:
          'Sì: mantieni il formato di output impostato su PNG o WebP per conservare la piena trasparenza alfa attorno a grafiche ruotate o specchiate.',
      },
      {
        question: 'Le modifiche vengono salvate sui vostri server?',
        answer:
          'No. Tutto avviene dentro la scheda del tuo browser e viene eliminato quando chiudi la pagina.',
      },
      {
        question: 'Lo strumento di rotazione immagini è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione, senza watermark e senza limiti, e puoi ruotare o capovolgere tutte le immagini che vuoi senza creare un account.',
      },
      {
        question: 'Come ruoto un’immagine di 90 gradi?',
        answer:
          'Carica la tua immagine e fai clic su Ruota a destra o Ruota a sinistra. Ogni clic gira l’immagine di 90 gradi.',
      },
      {
        question: 'Posso ruotare un’immagine di 180 gradi?',
        answer:
          'Sì, fai clic due volte su Ruota nella stessa direzione per capovolgere l’immagine.',
      },
      {
        question: 'Come specchio un’immagine in orizzontale?',
        answer:
          'Usa l’interruttore Specchia orizzontale per riflettere l’immagine da sinistra a destra, utile per correggere selfie specchiati.',
      },
      {
        question: 'Qual è la differenza tra specchiare e ruotare un’immagine?',
        answer:
          'Ruotare gira l’immagine attorno al suo centro, mentre specchiare la riflette come un riflesso in uno specchio.',
      },
      {
        question: 'Posso ruotare una foto senza perdere qualità?',
        answer:
          'Lo strumento ricodifica l’immagine tramite Canvas, quindi esportare come PNG la mantiene lossless. L’export JPG applica una leggera compressione.',
      },
      {
        question: 'Ruotare un’immagine ne cambia le dimensioni?',
        answer:
          'Una rotazione di 90 o 270 gradi scambia larghezza e altezza. Una rotazione di 180 gradi mantiene le stesse dimensioni.',
      },
      {
        question: 'Posso rendere una foto in bianco e nero?',
        answer:
          'Sì, attiva l’interruttore Scala di grigi per convertire la tua foto in bianco e nero all’istante.',
      },
      {
        question: 'Come schiarisco una foto scura?',
        answer:
          'Sposta lo slider Luminosità sopra il 100% e aggiungi un po’ di Contrasto per evitare che l’immagine sembri sbiadita.',
      },
      {
        question: 'Posso ruotare un PNG e mantenerne la trasparenza?',
        answer:
          'Sì, esporta come PNG o WebP per preservare le aree trasparenti dopo aver ruotato o specchiato.',
      },
      {
        question: 'Le mie foto modificate vengono caricate su un server?',
        answer:
          'No, rotazione, ribaltamento e filtraggio avvengono in locale nel browser e nulla viene caricato.',
      },
      {
        question: 'Posso ruotare un’immagine sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Carica una foto laterale, raddrizzala e scarica la versione corretta.',
      },
      {
        question: 'Perché la mia foto è laterale dopo averla caricata?',
        answer:
          'Alcuni telefoni memorizzano l’orientamento come flag EXIF che non tutte le app leggono. Questo strumento incorpora l’orientamento corretto nei pixel così viene mostrata dritta ovunque.',
      },
      {
        question: 'Posso annullare una rotazione o un filtro?',
        answer:
          'Sì, il pulsante Reimposta ripristina l’immagine originale e le impostazioni predefinite dei filtri in qualsiasi momento.',
      },
      {
        question: 'Lo strumento corregge le foto storte o inclinate?',
        answer:
          'Ruota a passi di 90 gradi, quindi corregge foto laterali o capovolte. Non sono supportate piccole correzioni di inclinazione.',
      },
      {
        question: 'Quali formati di immagine posso ruotare e specchiare?',
        answer:
          'Puoi modificare immagini PNG, JPG, WebP e GIF ed esportarle come PNG, JPG o WebP.',
      },
      {
        question: 'Posso ruotare e specchiare un’immagine in una sola volta?',
        answer:
          'Sì, puoi combinare rotazioni, ribaltamenti orizzontali o verticali e filtri prima di esportare una singola immagine finita.',
      },
    ],
  },
  'image-to-base64': {
    instructions: [
      {
        title: 'Scegli la modalità Codifica o Decodifica',
        description:
          'Usa Immagine → Data URI Base64 per codificare un file, oppure Base64 → Anteprima immagine per renderizzare payload Base64 incollati.',
      },
      {
        title: 'Carica un’immagine o incolla testo Base64',
        description:
          'Seleziona qualsiasi asset PNG, JPG, WebP, SVG, GIF o ICO (oppure incolla una stringa completa data:image/... o testo Base64 grezzo).',
      },
      {
        title: 'Controlla il confronto delle dimensioni',
        description:
          'Confronta la dimensione del file originale con la dimensione della stringa Base64 per vedere l’overhead di circa il 33% prima di incorporarla.',
      },
      {
        title: 'Scegli il formato di output che ti serve',
        description:
          'Scegli il Data URI completo, la stringa Base64 grezza, il tag HTML <img> o lo snippet CSS background-image.',
      },
      {
        title: 'Copia lo snippet o scarica l’anteprima',
        description:
          'Copia il Data URI, il Base64 grezzo, il tag HTML <img> o lo snippet CSS di sfondo, oppure scarica un’immagine di anteprima decodificata.',
      },
      {
        title: 'Suggerimento: il Base64 incollato non funziona?',
        description:
          'Assicurati di aver incollato la stringa completa senza interruzioni di riga e verifica che il decodificatore abbia aggiunto il prefisso data:image/... corretto per il tuo formato.',
      },
    ],
    examples: [
      {
        title: 'Incorporare un segno di spunta SVG di 2 KB dentro CSS',
        input: 'check.svg (2.048 byte)',
        output: 'data:image/svg+xml;base64,... (~2,7 KB) + regola CSS background-image pronta da incollare',
        explanation:
          'Risparmia un round-trip HTTP extra per piccole icone UI ed email HTML autonome a file singolo.',
      },
      {
        title: 'Decodificare una stringa Base64 da una risposta API',
        input: 'Stringa Base64 grezza copiata da DevTools del browser',
        output: 'Anteprima immagine renderizzata con opzione di download come PNG',
        explanation:
          'La modalità di decodifica aggiunge automaticamente il prefisso Data URI se manca.',
      },
    ],
    benefits: [
      'Confronto istantaneo tra dimensione del file binario e overhead di circa il 33% della stringa Base64',
      'Genera contemporaneamente Data URI, Base64 grezzo, tag HTML <img> e snippet CSS di sfondo',
      'Aggiunge automaticamente il prefisso Data URI PNG se incolli Base64 grezzo senza header',
      'Mantiene asset proprietari e blob di risposta API offline dentro il browser',
    ],
    useCases: [
      'Incorporare piccole icone dentro bundle CSS o report HTML autonomi',
      'Eseguire il debug di Data URI di immagini restituiti da API JSON o webhook',
      'Incorporare piccoli badge di brand in modelli di email HTML transazionali',
      'Ispezionare payload di immagini codificate copiati da DevTools del browser',
    ],
    faqs: [
      {
        question: 'Quando dovrei usare immagini Base64 invece di normali URL di immagini?',
        answer:
          'Usa i Data URI Base64 con parsimonia per icone molto piccole (di solito sotto 5–10 KB) o export HTML a file singolo. Base64 espande la dimensione dei dati di circa il 33% e non può essere memorizzato in cache indipendentemente tra pagine come i normali URL.',
      },
      {
        question: 'Il decodificatore può visualizzare in anteprima stringhe Base64 grezze senza il prefisso "data:image/png;base64,"?',
        answer:
          'Sì! Passando a Base64 → Anteprima immagine vengono eliminati automaticamente gli spazi bianchi e viene aggiunto un header Data URI PNG standard se manca.',
      },
      {
        question: 'Funziona con SVG vettoriali?',
        answer:
          'Sì. Caricare un file .svg crea un URI valido data:image/svg+xml;base64,... insieme a snippet HTML e CSS.',
      },
      {
        question: 'Il convertitore da immagine a Base64 è gratuito?',
        answer:
          'Sì, è gratuito senza registrazione, senza watermark e senza limiti su quante immagini codifichi o decodifichi.',
      },
      {
        question: 'Che cos’è un Data URI Base64?',
        answer:
          'Un Data URI incorpora un’immagine direttamente dentro una pagina web, un foglio di stile o un’email come testo, iniziando con data:image/...;base64, seguito dai dati codificati.',
      },
      {
        question: 'Perché la stringa Base64 è più grande della mia immagine?',
        answer:
          'La codifica Base64 rappresenta dati binari con caratteri di testo, il che aggiunge circa il 33% di overhead alla dimensione originale del file.',
      },
      {
        question: 'Quale dimensione di immagine è migliore per la codifica Base64?',
        answer:
          'Mantieni le immagini Base64 piccole, di solito sotto 5–10 KB, come icone e loghi. Le immagini più grandi gonfiano HTML o CSS e non possono essere memorizzate in cache separatamente.',
      },
      {
        question: 'Posso convertire un JPG in Base64?',
        answer:
          'Sì, file JPG, PNG, WebP, SVG, GIF e ICO possono essere tutti codificati in Data URI Base64.',
      },
      {
        question: 'Come uso un’immagine Base64 in HTML?',
        answer:
          'Copia il tag HTML <img> generato e incollalo nella tua pagina. L’attributo src contiene già il Data URI completo.',
      },
      {
        question: 'Come uso un’immagine Base64 in CSS?',
        answer:
          'Copia lo snippet CSS background-image e incollalo nel tuo foglio di stile per mostrare l’immagine senza una richiesta di file separata.',
      },
      {
        question: 'Posso decodificare una stringa Base64 di nuovo in un’immagine?',
        answer:
          'Sì, passa a Base64 → Anteprima immagine, incolla la stringa e lo strumento renderizza l’immagine così puoi visualizzarla in anteprima o scaricarla.',
      },
      {
        question: 'Ho bisogno del prefisso data:image/png;base64, quando decodifico?',
        answer:
          'No, se incolli Base64 grezzo senza header, lo strumento aggiunge automaticamente un prefisso Data URI PNG standard.',
      },
      {
        question: 'Lo strumento da immagine a Base64 carica i miei file?',
        answer:
          'No, codifica e decodifica avvengono interamente nel browser e le tue immagini non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Posso codificare un SVG in Base64?',
        answer:
          'Sì, i file SVG producono un URI valido data:image/svg+xml;base64,... insieme a snippet HTML e CSS corrispondenti.',
      },
      {
        question: 'Qual è la differenza tra Base64 grezzo e un Data URI?',
        answer:
          'Il Base64 grezzo è solo il testo codificato, mentre un Data URI aggiunge l’header data:image/...;base64, così i browser conoscono il tipo di immagine.',
      },
      {
        question: 'Posso usare immagini Base64 nelle email?',
        answer:
          'Sì, le piccole immagini Base64 funzionano bene nelle email HTML autonome, anche se alcuni client email limitano il supporto ai Data URI, quindi testa prima di inviare.',
      },
      {
        question: 'C’è un limite di dimensione dei file per la codifica?',
        answer:
          'Non c’è un limite del server perché nulla viene caricato. Le immagini molto grandi sono limitate solo dalla memoria del browser e le stringhe Base64 enormi sono poco pratiche da incollare.',
      },
      {
        question: 'Posso convertire un’immagine Base64 in un file scaricabile?',
        answer:
          'Sì, decodifica la stringa in modalità Base64 → Anteprima immagine e usa l’opzione di download per salvarla come file immagine normale.',
      },
      {
        question: 'La codifica Base64 cambia la qualità dell’immagine?',
        answer:
          'No, Base64 è una rappresentazione testuale lossless degli stessi identici byte, quindi l’immagine decodificata è identica all’originale.',
      },
      {
        question: 'Posso usare il convertitore da immagine a Base64 sul telefono?',
        answer:
          'Sì, funziona nei browser mobile. Codifica un’immagine dalla tua libreria foto o incolla una stringa Base64 per visualizzarla in anteprima.',
      },
    ],
  },
  'color-contrast-checker': {
    instructions: [
      {
        title: 'Scegli i colori di Primo piano e Sfondo',
        description:
          'Usa i selettori di colore, gli input HEX o i singoli input R/G/B, oppure parti da preset accessibili e scambia i colori con un clic.',
      },
      {
        title: 'Regola le tonalità finché il rapporto non supera la soglia',
        description:
          'Modifica la luminosità o i singoli canali RGB e guarda il rapporto aggiornarsi live finché la coppia non raggiunge la soglia AA o AAA necessaria.',
      },
      {
        title: 'Esamina la scheda punteggio WCAG 2.1',
        description:
          'Controlla il rapporto di contrasto esatto (per esempio 12,63 : 1) e lo stato immediato SUPERATO/FALLITO per i benchmark AA Normale, AA Grande/UI, AAA Normale e AAA Grande.',
      },
      {
        title: 'Visualizza in anteprima la coppia in testo UI reale',
        description:
          'Leggi le anteprime live di tipografia e scheda di controllo UI con bordo per vedere come i tuoi colori appaiono davvero come testo del corpo, titoli e pulsanti.',
      },
      {
        title: 'Estrai campioni da un’immagine (opzionale)',
        description:
          'Carica qualsiasi schermata o logo di brand in basso per estrarre fino a 8 colori dominanti distinti e applicarli direttamente a Primo piano o Sfondo.',
      },
      {
        title: 'Copia i colori e correggi le coppie che falliscono',
        description:
          'Copia i valori HEX, RGB o HSL sincronizzati nel tuo CSS. Se una coppia fallisce, scurisci il testo o schiarisci lo sfondo finché la scheda punteggio non diventa verde.',
      },
    ],
    examples: [
      {
        title: 'Verificare la leggibilità di un pulsante CTA primario',
        input: 'Primo piano: #FFFFFF · Sfondo: #4F46E5',
        output: 'Rapporto di contrasto 6,29 : 1 — Supera WCAG AA Normale, AA Grande e AAA Grande',
        explanation:
          'Usa la luminanza relativa ufficiale sRGB con correzione gamma (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Estrarre la palette di un logo e testarla come testo',
        input: 'Logo brand caricato · Campione estratto #1F2937 applicato come Primo piano su sfondo #FFFFFF',
        output: 'Rapporto 15,42 : 1 — Supera tutti i benchmark AA e AAA',
        explanation:
          'I campioni estratti passano direttamente negli slot di colore, così il test è immediato.',
      },
    ],
    benefits: [
      'Formula esatta WCAG 2.1 di luminanza relativa sRGB, zero approssimazioni',
      'Anteprime live di tipografia e scheda di controllo UI con bordo per la coppia attiva',
      'Il quantizzatore di colori Canvas integrato estrae campioni di brand senza strumenti extra',
      'Mostra stringhe HEX, RGB e HSL sincronizzate pronte da incollare nel CSS',
    ],
    useCases: [
      'Verificare design system, dashboard SaaS e temi dark mode per la conformità WCAG AA/AAA',
      'Estrarre i colori dominanti del brand dai loghi dei clienti direttamente in palette UI accessibili',
      'Correggere coppie di badge, placeholder o etichette di pulsanti a basso contrasto prima del lancio',
      'Insegnare la gerarchia visiva accessibile con anteprime live di testo grande e normale',
    ],
    faqs: [
      {
        question: 'Quale rapporto di contrasto è richiesto per WCAG Livello AA rispetto a Livello AAA?',
        answer:
          'WCAG 2.1 Livello AA richiede almeno 4,5:1 per il testo normale del corpo e 3,0:1 per il testo grande (18 pt+ o 14 pt+ in grassetto) e i componenti UI. Il Livello AAA alza queste soglie a 7,0:1 per il testo normale e 4,5:1 per il testo grande.',
      },
      {
        question: 'Come funziona l’estrattore di palette delle immagini?',
        answer:
          'Disegna l’immagine caricata su un Canvas HTML5 fuori schermo, ignora i pixel trasparenti, raggruppa i bucket RGB vicini e mostra fino a 8 campioni dominanti visivamente distinti in base alla copertura d’area.',
      },
      {
        question: 'Il Verificatore di Contrasto Colori converte anche tra HEX, RGB e HSL?',
        answer:
          'Sì. Aggiornare qualsiasi selettore di colore, input HEX o campo R/G/B ricalcola automaticamente le rappresentazioni HEX, rgb() e hsl().',
      },
      {
        question: 'Che cosa conta come testo grande secondo le regole di contrasto WCAG?',
        answer:
          'Il testo grande è di 18 pt (24 px) o più, oppure 14 pt (18,66 px) in grassetto o più. Il testo grande richiede solo un rapporto 3,0:1 per AA e 4,5:1 per AAA, mentre il testo normale richiede 4,5:1 per AA e 7,0:1 per AAA.',
      },
      {
        question: 'Il Verificatore di Contrasto Colori è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione. Tutti i controlli avvengono in locale nel browser, quindi puoi testare tutte le coppie di colori che vuoi.',
      },
      {
        question: 'Le mie immagini caricate lasciano il mio dispositivo?',
        answer:
          'No. L’estrazione della palette avviene interamente nel browser usando un canvas fuori schermo e le tue immagini non vengono mai caricate su alcun server.',
      },
      {
        question: 'Come viene calcolato il rapporto di contrasto?',
        answer:
          'Usa la formula ufficiale WCAG 2.1: la luminanza relativa di ciascun colore viene calcolata da valori sRGB linearizzati in gamma e il rapporto è (L1 + 0,05) / (L2 + 0,05), dove L1 è il colore più chiaro.',
      },
      {
        question: 'Posso controllare il contrasto per design in dark mode?',
        answer:
          'Sì. Inserisci gli stessi colori di sfondo scuro e testo chiaro e la scheda punteggio mostra se la coppia supera AA e AAA sia per testo normale sia per testo grande.',
      },
      {
        question: 'Perché la mia coppia di colori fallisce AA anche se a me sembra leggibile?',
        answer:
          'Leggibilità percepita e contrasto di luminanza misurato sono cose diverse. Colori che ti sembrano distinti possono essere comunque vicini in luminanza, soprattutto le tonalità medie, quindi fidati del rapporto e regola la luminosità finché non supera la soglia.',
      },
      {
        question: 'Che cosa dovrei fare se il colore del mio brand fallisce il test di contrasto?',
        answer:
          'Mantieni il colore del brand per titoli grandi o elementi decorativi e usa una tonalità più scura per il testo del corpo. Puoi anche schiarire lo sfondo o aggiungere un overlay semi-opaco dietro il testo.',
      },
      {
        question: 'Il verificatore funziona per componenti UI come pulsanti e icone?',
        answer:
          'Sì. WCAG 2.1 richiede un rapporto 3,0:1 per componenti UI non testuali come bordi di pulsanti, contorni di input e icone significative, e la colonna AA Grande/UI della scheda punteggio copre esattamente questo.',
      },
      {
        question: 'Posso testare testo placeholder e stati disabilitati con questo strumento?',
        answer:
          'Sì, inserisci il colore del placeholder o dello stato disabilitato come primo piano. Nota che i controlli disabilitati sono esenti dai requisiti di contrasto WCAG, ma il testo placeholder che trasmette informazioni non lo è.',
      },
      {
        question: 'Quanti colori può estrarre dall’immagine l’estrattore di palette?',
        answer:
          'Fino a 8 colori dominanti distinti. Le tonalità simili vengono raggruppate, quindi i campioni rappresentano i colori visivamente più prominenti nell’immagine piuttosto che ogni tonalità presente.',
      },
      {
        question: 'Posso applicare un campione estratto direttamente come primo piano o sfondo?',
        answer:
          'Sì. Ogni campione estratto ha un pulsante per inviarlo direttamente nello slot Primo piano o Sfondo, così puoi testarlo subito contro l’altro colore.',
      },
      {
        question: 'Quali formati di immagine funzionano con l’estrattore di palette?',
        answer:
          'Qualsiasi immagine che il browser può mostrare, incluse schermate o loghi PNG, JPG, WebP e SVG. I pixel trasparenti vengono ignorati quando si raggruppano i colori.',
      },
      {
        question: 'Il Verificatore di Contrasto Colori testa il daltonismo?',
        answer:
          'No, misura solo il contrasto di luminanza. Il contrasto è una parte dell’accessibilità; per la sicurezza daltonica, evita anche di affidarti solo al colore per trasmettere significato e controlla la tua palette con un simulatore di daltonismo.',
      },
      {
        question: 'Posso usare i valori HEX, RGB e HSL nel mio CSS?',
        answer:
          'Sì. Tutti e tre i formati restano sincronizzati mentre modifichi e puoi copiarli direttamente nel tuo foglio di stile, nei design token o nella configurazione Tailwind.',
      },
      {
        question: 'Qual è la differenza tra AA e AAA in pratica?',
        answer:
          'AA è lo standard legale e pratico a cui punta la maggior parte dei siti, mentre AAA è più rigoroso e spesso difficile da rispettare per il testo del corpo colorato di brand. Punta ad AAA dove puoi, ma non pubblicare mai sotto AA per il testo.',
      },
      {
        question: 'Lo strumento memorizza le mie scelte di colore o le mie immagini?',
        answer:
          'No. Tutto avviene in locale nella scheda del browser, nulla viene caricato e colori e immagini scompaiono quando chiudi o aggiorni la pagina.',
      },
      {
        question: 'Posso controllare più di una coppia di colori alla volta?',
        answer:
          'Il verificatore testa una coppia primo piano/sfondo alla volta, ma puoi scambiare i colori con un solo clic e testare di nuovo tutte le coppie che ti servono in pochi secondi.',
      },
    ],
  },
  'qr-code-scanner': {
    instructions: [
      {
        title: 'Carica un’immagine QR o attiva la scansione con fotocamera',
        description:
          'Trascina o seleziona qualsiasi schermata QR PNG, JPG, WebP o SVG, oppure fai clic su Avvia scanner fotocamera quando vuoi leggere un codice QR stampato live.',
      },
      {
        title: 'Lascia che lo scanner decodifichi il codice',
        description:
          'Lo strumento esegue la decodifica locale multi-scala e sensibile all’inversione nel browser, così anche i codici QR dark mode o invertiti vengono letti senza caricare nulla.',
      },
      {
        title: 'Ispeziona e copia il testo decodificato',
        description:
          'Esamina il payload decodificato, la categoria di payload rilevata e l’anteprima sicura del link (solo gli URL http/https diventano link cliccabili), poi copia con un clic.',
      },
      {
        title: 'Controlla il tipo di payload prima di agire',
        description:
          'Vedi se il QR contiene un URL, credenziali Wi-Fi, un contatto vCard o testo semplice e verifica che la destinazione sembri giusta prima di visitarla o connetterti.',
      },
      {
        title: 'Passa al Generatore QR vCard di contatto (opzionale)',
        description:
          'Crea un codice QR di biglietto da visita VCF 3.0 scansionabile con nome, organizzazione, telefono, email e sito web e scaricalo come PNG o SVG.',
      },
      {
        title: 'Scarica, stampa o risolvi una scansione fallita',
        description:
          'Scarica il tuo QR vCard o ricarica una schermata più nitida e ben illuminata se la decodifica fallisce: i codici QR ritagliati, sfocati o troppo piccoli sono la causa più comune.',
      },
    ],
    examples: [
      {
        title: 'Verificare una schermata di volantino marketing stampato prima di ordinare le stampe',
        input: 'Carica flyer-qr.png (PNG 600×600)',
        output: 'Payload decodificato · URL sito web: https://example.com/?utm_source=print',
        explanation:
          'Esegue la decodifica locale multi-scala sensibile all’inversione, così anche i codici QR dark mode invertiti vengono decodificati in modo affidabile.',
      },
      {
        title: 'Creare un QR vCard per un biglietto da visita',
        input: 'Nome, telefono, email e sito web inseriti nel generatore vCard',
        output: 'Codice QR vCard scaricabile in PNG e SVG, scansionabile da iPhone e Android',
        explanation:
          'Il formato standard VCF 3.0 permette ai telefoni di offrire il salvataggio del contatto alla scansione.',
      },
    ],
    benefits: [
      'Decodifica schermate QR normali e a colori invertiti in modo pulito senza app mobile',
      'Il flusso opzionale della fotocamera si interrompe subito alla decodifica o all’uscita dalla scheda',
      'Classifica i payload decodificati in modo pulito senza reindirizzare automaticamente altrove',
      'Include la generazione completa di QR vCard 3.0 in PNG e SVG per biglietti da visita digitali',
    ],
    useCases: [
      'Controllare due volte gli URL di destinazione UTM dentro asset QR prima di stampare poster',
      'Estrarre stringhe Wi-Fi o token di testo da schermate desktop',
      'Scansionare codici QR fisici su un laptop usando la webcam integrata',
      'Creare codici QR di contatto vCard scansionabili per curriculum, badge e presentazioni',
    ],
    faqs: [
      {
        question: 'Che cosa succede se il mio dispositivo non ha fotocamera o nega il permesso della fotocamera?',
        answer:
          'Non ti serve mai una fotocamera per usare questo strumento: basta fare una schermata o una foto e caricarla tramite Carica immagine codice QR, che funziona in modo identico senza permessi della fotocamera.',
      },
      {
        question: 'Scansionare un codice QR apre automaticamente siti web dannosi?',
        answer:
          'No. Il testo decodificato viene mostrato in sicurezza dentro un’area di testo in sola lettura prima, così puoi ispezionare qualsiasi URL prima di scegliere se visitarlo.',
      },
      {
        question: 'Serve invece un generatore QR per URL, Wi-Fi o colori personalizzati?',
        answer:
          'Prova il nostro strumento dedicato Generatore di Codici QR in Strumenti per Social Media per colori di primo piano e sfondo personalizzati, livelli di correzione errori e codici QR per URL e testo.',
      },
      {
        question: 'Lo Scanner di Codici QR è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione e sia la scansione sia la generazione QR vCard avvengono in locale nel browser.',
      },
      {
        question: 'Le mie immagini QR caricate vengono inviate a un server?',
        answer:
          'No. La decodifica avviene interamente nel browser usando jsQR, quindi schermate e foto non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Quali formati di immagine può leggere lo Scanner di Codici QR?',
        answer:
          'Funzionano immagini PNG, JPG, WebP e SVG. Le schermate fatte su telefono o computer sono il modo più comune per fornire un codice QR.',
      },
      {
        question: 'Perché il mio codice QR non è riuscito a scansionarsi?',
        answer:
          'Le cause usuali sono un’immagine sfocata o a bassa risoluzione, un codice QR ritagliato troppo stretto, riflessi su un codice stampato o un codice semplicemente troppo piccolo nel riquadro. Ricarica un’acquisizione più nitida, più grande e ben illuminata.',
      },
      {
        question: 'Lo scanner può leggere codici QR invertiti o in dark mode?',
        answer:
          'Sì. Il decodificatore è sensibile all’inversione, quindi i codici QR con moduli chiari su sfondo scuro vengono decodificati con la stessa affidabilità dei codici standard nero su bianco.',
      },
      {
        question: 'Quali tipi di payload QR può rilevare?',
        answer:
          'Classifica automaticamente i contenuti decodificati, inclusi URL di siti web, credenziali di rete Wi-Fi, contatti vCard e testo semplice, così sai che cosa fa un codice prima di agire.',
      },
      {
        question: 'È sicuro scansionare un codice QR trovato in pubblico?',
        answer:
          'Scansionare è sicuro qui perché nulla si apre automaticamente: vedi prima il testo decodificato. Leggi sempre con attenzione l’URL ed evita di inserire password o dati di pagamento in pagine a cui ti porta un codice QR casuale.',
      },
      {
        question: 'Posso scansionare un codice QR con la webcam del laptop?',
        answer:
          'Sì. Fai clic su Avvia scanner fotocamera, consenti l’accesso alla fotocamera quando il browser lo chiede e tieni il codice stampato davanti alla fotocamera. Il flusso si interrompe automaticamente una volta decodificato il codice o quando lasci la scheda.',
      },
      {
        question: 'La fotocamera continua a registrare dopo una scansione?',
        answer:
          'No. Il flusso della fotocamera si interrompe subito a decodifica riuscita e si interrompe anche se cambi scheda o chiudi lo scanner.',
      },
      {
        question: 'Che cos’è un codice QR vCard?',
        answer:
          'Un codice QR vCard memorizza i dettagli di contatto — nome, organizzazione, telefono, email e sito web — nel formato standard VCF 3.0, così scansionarlo con un telefono offre di salvare direttamente il contatto.',
      },
      {
        question: 'Posso scaricare il mio codice QR vCard come PNG e SVG?',
        answer:
          'Sì. Il generatore vCard esporta entrambi i formati: PNG per documenti e presentazioni e SVG per stampe nitide a qualsiasi dimensione.',
      },
      {
        question: 'Il codice QR vCard funzionerà sia su iPhone sia su Android?',
        answer:
          'Sì. Entrambe le piattaforme riconoscono i codici QR vCard standard VCF 3.0 e offrono di aggiungere il contatto quando vengono scansionati con la fotocamera integrata.',
      },
      {
        question: 'Posso scansionare un codice QR da un video o una registrazione dello schermo?',
        answer:
          'Non direttamente, ma puoi mettere in pausa il video, fare una schermata del fotogramma che mostra il codice QR e caricare quella schermata nello scanner.',
      },
      {
        question: 'Lo Scanner di Codici QR funziona offline?',
        answer:
          'Una volta caricata la pagina, la decodifica avviene completamente nel browser senza richieste di rete, quindi puoi scansionare immagini caricate anche senza connessione internet.',
      },
      {
        question: 'Posso scansionare più codici QR in un’immagine?',
        answer:
          'Lo scanner decodifica un codice QR alla volta. Se un’immagine contiene più codici, ritaglia l’immagine così ciascun codice viene caricato separatamente.',
      },
      {
        question: 'Che cosa dovrei controllare prima di stampare un codice QR su un volantino?',
        answer:
          'Carica una schermata del design finito e scansionarla qui per confermare che URL di destinazione, parametri UTM e payload siano esattamente giusti prima di ordinare le stampe.',
      },
      {
        question: 'Lo strumento memorizza i miei codici QR scansionati o le immagini della fotocamera?',
        answer:
          'No. Nulla viene caricato, registrato o memorizzato. I risultati decodificati esistono solo nella scheda corrente del browser e scompaiono quando la chiudi.',
      },
    ],
  },
  'password-generator': {
    instructions: [
      {
        title: 'Scegli Password casuale o Passphrase Diceware',
        description:
          'Usa Password casuale per la massima densità di set di caratteri o Passphrase Diceware per una digitazione umana più facile con forte entropia multi-parola.',
      },
      {
        title: 'Personalizza lunghezza, set di caratteri e numero di batch',
        description:
          'Regola la lunghezza (8–64 caratteri), attiva o disattiva Maiuscole/Minuscole/Cifre/Simboli, escludi opzionalmente caratteri simili (0/O/1/l/I) oppure seleziona 3–8 parole Diceware.',
      },
      {
        title: 'Genera la tua password o passphrase',
        description:
          'Fai clic su Genera per creare output nuovi usando il CSPRNG supportato da hardware del browser con campionamento per rifiuto, così ogni carattere ha esattamente la stessa probabilità.',
      },
      {
        title: 'Controlla il punteggio di entropia',
        description:
          'Ispeziona i bit esatti di entropia di Shannon (consigliati ~72–118+ bit) per vedere quanto lavoro di indovinello rappresenta il risultato prima di usarlo.',
      },
      {
        title: 'Rigenera e copia in sicurezza',
        description:
          'Il risultato non ti soddisfa? Rigenera per ottenerne uno nuovo, poi copia una singola password o l’intero batch con un clic.',
      },
      {
        title: 'Salvala in un gestore di password e aggiorna per cancellare',
        description:
          'Incolla subito il risultato nel tuo gestore di password. Aggiornare la pagina cancella le password generate dalla memoria, quindi non affidarti mai alla scheda per ricordarle.',
      },
    ],
    examples: [
      {
        title: 'Password mista di 18 caratteri con pool completo di caratteri',
        input: 'Lunghezza: 18 · Maiuscole + Minuscole + Cifre + Simboli (Pool: 88 caratteri)',
        output: '~116,3 bit di entropia crittografica · Garantisce >= 1 carattere da ciascuna classe abilitata',
        explanation:
          'Usa il campionamento per rifiuto (scartando campioni uint32 >= floor(2^32 / pool) * pool) per uniformità rigorosa.',
      },
      {
        title: 'Passphrase Diceware di 5 parole facile da digitare',
        input: 'Modalità: Passphrase Diceware · Parole: 5 · Separatore: spazio',
        output: 'Cinque parole casuali con circa 64 bit di entropia, molto più facili da digitare di caratteri casuali',
        explanation:
          'Le passphrase di più parole restano forti pur essendo digitabili su TV, telefoni o prompt di decrittazione disco.',
      },
    ],
    benefits: [
      'Evita rigorosamente Math.random() insicuro: usa window.crypto.getRandomValues con seed hardware',
      'Elimina il bias modulo tramite vero campionamento per rifiuto e mescolamento Fisher-Yates imparziale',
      'Garantisce almeno un carattere da ogni classe di caratteri selezionata senza slot fissi',
      'Nulla viene registrato, memorizzato o trasmesso in rete',
    ],
    useCases: [
      'Proteggere account cloud, chiavi SSH, credenziali di database e vault master di gestori di password',
      'Generare passphrase Diceware digitabili dall’uomo per crittografia disco o chiavi Wi-Fi ospiti',
      'Fornire credenziali temporanee di onboarding in blocco (fino a 10 per clic)',
      'Confrontare l’impatto in bit di entropia di 12 vs. 18 vs. 24 caratteri',
    ],
    faqs: [
      {
        question: 'Perché il campionamento per rifiuto con crypto.getRandomValues è importante?',
        answer:
          'Calcolare semplicemente randomUint32 % poolSize favorisce leggermente i caratteri a indice più basso quando 2^32 non è divisibile in modo uniforme per poolSize (bias modulo). Il campionamento per rifiuto scarta i valori fuori intervallo così ogni carattere nel pool ha esattamente la stessa probabilità matematica.',
      },
      {
        question: 'Dovrei usare una password casuale o una passphrase?',
        answer:
          'Entrambe sono eccellenti quando sono abbastanza lunghe: 16+ caratteri misti funzionano ovunque nei gestori di password, mentre una passphrase di 5–6 parole è molto più facile da digitare manualmente su TV, telefoni o prompt di decrittazione disco.',
      },
      {
        question: 'Le password generate vengono memorizzate da qualche parte?',
        answer:
          'Mai. Le password vivono solo nella memoria React effimera della tua scheda e scompaiono all’aggiornamento.',
      },
      {
        question: 'Il Generatore di Password è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione. Puoi generare tutte le password e passphrase che ti servono, direttamente nel browser.',
      },
      {
        question: 'Come vengono generate le password qui?',
        answer:
          'Vengono create in locale nel browser usando window.crypto.getRandomValues, il generatore di numeri casuali crittograficamente sicuro supportato da hardware del browser, con campionamento per rifiuto per rimuovere il bias modulo.',
      },
      {
        question: 'Le mie password generate vengono inviate a un server?',
        answer:
          'No. La generazione avviene interamente sul tuo dispositivo e nulla viene memorizzato, registrato o trasmesso in rete.',
      },
      {
        question: 'Quanto dovrebbe essere lunga la mia password?',
        answer:
          'Per account importanti, usa almeno 16 caratteri con classi di caratteri miste, che danno circa 100+ bit di entropia. Le password più corte vanno bene solo per account di basso valore e la lunghezza conta più della complessità.',
      },
      {
        question: 'Che cos’è l’entropia di una password e di quanti bit ho bisogno?',
        answer:
          'L’entropia misura quanto lavoro di indovinello rappresenta una password. Circa 70–80 bit sono forti per la maggior parte degli account, mentre 100+ bit sono consigliati per password master, chiavi di crittografia e account di alto valore.',
      },
      {
        question: 'Che cos’è una passphrase Diceware?',
        answer:
          'Una passphrase Diceware è composta da diverse parole casuali scelte da una wordlist fissa, come "correct horse battery staple". Cinque o sei parole casuali danno una forte entropia restando molto più facili da digitare e ricordare dei caratteri casuali.',
      },
      {
        question: 'Dovrei escludere caratteri ambigui come 0, O, 1, l e I?',
        answer:
          'Sì, quando digiterai la password a mano o la leggerai ad alta voce. Escludere i caratteri simili previene login digitati male e, con una password abbastanza lunga, la piccola perdita di entropia è trascurabile.',
      },
      {
        question: 'Posso generare più password alla volta?',
        answer:
          'Sì. Puoi generare un batch fino a 10 password in un clic, utile quando fornisci account o fai onboarding di nuovi membri del team.',
      },
      {
        question: 'Il generatore garantisce almeno un carattere da ciascuna classe selezionata?',
        answer:
          'Sì. Ogni password generata include almeno un carattere da ciascuna classe di caratteri abilitata, senza collocare quei caratteri in posizioni fisse e prevedibili.',
      },
      {
        question: 'Posso usare queste password per la password master del mio gestore di password?',
        answer:
          'Una passphrase lunga funziona bene come password master perché devi digitarla a memoria. Genera una passphrase Diceware di 6 parole, memorizzala e conserva le altre password nel gestore.',
      },
      {
        question: 'Perché non usare Math.random() per le password?',
        answer:
          'Math.random() non è crittograficamente sicuro: il suo output può essere previsto se un attaccante apprende il suo stato interno. Questo strumento usa solo window.crypto.getRandomValues, progettato per casualità sensibile alla sicurezza.',
      },
      {
        question: 'Una password generata funzionerà su ogni sito web?',
        answer:
          'Quasi sempre. Se un sito rifiuta i simboli o limita la lunghezza, riduci la lunghezza o disattiva la classe dei simboli e rigenera finché il sito non l’accetta.',
      },
      {
        question: 'Posso riutilizzare una password generata su più siti?',
        answer:
          'Non dovresti. Riutilizzare una password significa che una violazione espone ogni account che la condivide, quindi genera una password unica per ciascun sito e conservale in un gestore di password.',
      },
      {
        question: 'Che cosa succede alle mie password se aggiorno la pagina?',
        answer:
          'Sono sparite. Le password generate esistono solo nella memoria temporanea della scheda, quindi copiale o salvale in un gestore di password prima di aggiornare o chiudere la pagina.',
      },
      {
        question: 'Il Generatore di Password funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, la generazione avviene completamente nel browser senza richieste di rete, quindi funziona offline.',
      },
      {
        question: 'Come scelgo tra password e passphrase per il Wi-Fi?',
        answer:
          'Usa una passphrase per le chiavi Wi-Fi che digiti su molti dispositivi, poiché le parole sono più facili da inserire correttamente, e una password di caratteri casuali quando un gestore di password la compilerà per te.',
      },
      {
        question: 'Una password generata è garantita inviolabile?',
        answer:
          'Nessuna password può essere garantita inviolabile: un sito può comunque essere violato o ingannato dal phishing. Una password lunga, unica e generata casualmente conservata in un gestore di password è tuttavia una delle difese pratiche più forti che puoi usare.',
      },
    ],
  },
  'file-hash-verifier': {
    instructions: [
      {
        title: 'Seleziona un file dal tuo dispositivo',
        description:
          'Scegli un archivio, installer, PDF o asset binario. Il file viene letto rigorosamente nella memoria locale del browser (consigliato sotto 500 MB) e non viene mai caricato.',
      },
      {
        title: 'Attendi il calcolo dei digest',
        description:
          'Il browser calcola SHA-256, SHA-512, SHA-384 e SHA-1 in parallelo usando Web Crypto accelerato da hardware. I file più grandi richiedono qualche secondo.',
      },
      {
        title: 'Ispeziona i digest crittografici calcolati',
        description:
          'Esamina gli hash esadecimali SHA-256, SHA-512, SHA-384 e SHA-1 legacy insieme ai metadati del file e scarica un file di testo .sha256 standard se necessario.',
      },
      {
        title: 'Verifica rispetto a un checksum pubblicato',
        description:
          'Incolla la stringa SHA-256/512/384/1 attesa, oppure un’intera riga "<hash>  nomefile" da un file .sha256sum, per confermare una corrispondenza esatta o individuare corruzione o manomissione.',
      },
      {
        title: 'Copia o esporta l’hash',
        description:
          'Copia qualsiasi digest con un clic oppure scarica il file di testo .sha256 standard da distribuire insieme a una release o conservare come registro di verifica.',
      },
      {
        title: 'Agisci in caso di mancata corrispondenza o file grande',
        description:
          'Se gli hash non corrispondono, elimina il file e riscaricalo dalla fonte ufficiale. Per file oltre ~500 MB, usa invece shasum -a 256 o certutil, poiché il browser carica l’intero file in memoria.',
      },
    ],
    examples: [
      {
        title: 'Verificare un binario di release scaricato rispetto a un .sha256sum del fornitore',
        input: 'File: app-v2.tar.gz · Atteso: "e3b0c442...  app-v2.tar.gz"',
        output: 'Checksum verificato! Corrisponde in modo pulito al digest SHA-256 calcolato.',
        explanation:
          'Estrae automaticamente il token hash iniziale, ignora il maiuscolo/minuscolo e confronta con tutti e 4 gli algoritmi calcolati.',
      },
      {
        title: 'Generare un manifest .sha256 per la propria release',
        input: 'File di release caricato · Digest SHA-256 calcolato',
        output: 'File di testo filename.sha256 standard pronto da pubblicare insieme al download.',
        explanation:
          'L’export standard permette agli utenti di verificare il download con strumenti nativi.',
      },
    ],
    benefits: [
      'Usa Web Crypto SubtleCrypto nativo del browser accelerato da hardware',
      'Supporta l’incollaggio di righe complete "<hash>  nomefile" da manifest .sha256sum di release',
      'Esporta file di verifica filename.sha256 standard in un clic',
      'Zero upload di file mantengono private build confidenziali e contratti',
    ],
    useCases: [
      'Verificare ISO Linux, binari CLI o tarball open source senza aprire un terminale',
      'Confermare la consegna esatta byte per byte di archivi legali o finanziari',
      'Generare manifest .sha256 di release per piccoli deliverable di clienti',
      'Rilevare download troncati o corrotti prima dell’estrazione',
    ],
    faqs: [
      {
        question: 'C’è un limite massimo di dimensione del file?',
        answer:
          'Poiché File.arrayBuffer() del browser carica l’intero file nella RAM del client in una volta, i file fino a ~300–500 MB funzionano senza problemi, mentre le ISO multi-gigabyte possono superare le quote di memoria del browser: per file multi-GB sono consigliati strumenti CLI nativi (shasum -a 256 o certutil).',
      },
      {
        question: 'Perché SHA-1 è etichettato solo come compatibilità legacy?',
        answer:
          'SHA-1 ha note debolezze pratiche di collisione e non dovrebbe essere considerato affidabile per garanzie di sicurezza avversariali; preferisci SHA-256 o SHA-512 quando possibile.',
      },
      {
        question: 'Cerchi di eseguire l’hash di stringhe di testo grezze invece di file binari?',
        answer:
          'Controlla il nostro strumento Generatore di Hash in Strumenti per Sviluppatori per l’hashing istantaneo di testo UTF-8.',
      },
      {
        question: 'Il Verificatore di Hash dei File è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione e puoi verificare tutti i file che vuoi.',
      },
      {
        question: 'I miei file vengono caricati da qualche parte quando li verifico?',
        answer:
          'No. L’hashing avviene interamente nel browser usando l’API Web Crypto, quindi i tuoi file non lasciano mai il tuo dispositivo, ed è esattamente per questo che è sicuro per build e contratti confidenziali.',
      },
      {
        question: 'Che cos’è un hash di file e perché dovrei controllarlo?',
        answer:
          'Un hash è un’impronta di lunghezza fissa calcolata dai byte esatti di un file. Se anche un solo byte cambia, l’hash cambia completamente, quindi confrontare gli hash dimostra che un download è arrivato intatto e non modificato.',
      },
      {
        question: 'Quale algoritmo hash dovrei usare: SHA-256, SHA-512 o SHA-1?',
        answer:
          'Usa SHA-256 per la verifica generale: è lo standard fornito dagli editori. SHA-512 è ugualmente forte e più veloce su sistemi a 64 bit, mentre SHA-1 è solo legacy e non dovrebbe essere considerato affidabile per la sicurezza.',
      },
      {
        question: 'Dove trovo il checksum ufficiale da confrontare?',
        answer:
          'Gli editori di solito lo elencano nella pagina di download o in un file .sha256 / .sha256sum accanto al download. Copialo sempre dal sito del fornitore stesso, mai da un mirror o un post di forum.',
      },
      {
        question: 'Che cosa dovrei fare se gli hash non corrispondono?',
        answer:
          'Non eseguire né estrarre il file. Eliminalo e riscaricalo dalla fonte ufficiale; una mancata corrispondenza significa che il download era corrotto, troncato o possibilmente manomesso.',
      },
      {
        question: 'Posso incollare un’intera riga .sha256sum invece del solo hash?',
        answer:
          'Sì. Il verificatore accetta una riga completa "<hash>  nomefile" da un manifest di release: estrae automaticamente il token hash iniziale, ignora il maiuscolo/minuscolo e lo confronta con tutti e quattro gli algoritmi calcolati.',
      },
      {
        question: 'L’hash dipende dal nome del file?',
        answer:
          'No. Il digest viene calcolato solo dal contenuto del file, quindi rinominare un file non ne cambia mai l’hash. Due file con gli stessi byte producono sempre lo stesso hash.',
      },
      {
        question: 'Posso verificare un’ISO Linux o un installer grande con questo strumento?',
        answer:
          'Sì, fino a circa 300–500 MB. Per ISO multi-gigabyte, usa uno strumento nativo come shasum -a 256 su macOS/Linux o certutil -hashfile su Windows, poiché i browser caricano l’intero file in memoria.',
      },
      {
        question: 'Qual è la differenza tra SHA-256 e SHA-512?',
        answer:
          'Entrambi sono membri sicuri della famiglia SHA-2; SHA-256 produce un digest esadecimale di 64 caratteri e SHA-512 di 128 caratteri. SHA-512 è leggermente più forte e veloce su hardware a 64 bit, ma SHA-256 è il checksum pubblicato più ampiamente.',
      },
      {
        question: 'Questo strumento può rilevare un virus o malware in un file?',
        answer:
          'No. Un hash corrispondente dimostra solo che il file è identico a quello rilasciato dall’editore. Se il file dell’editore stesso fosse dannoso, l’hash corrisponderebbe comunque, quindi verifica solo download da fonti di cui ti fidi.',
      },
      {
        question: 'Come scarico un file .sha256 per la mia release?',
        answer:
          'Esegui l’hash del tuo file di release qui, poi scarica il file di testo filename.sha256 standard generato dallo strumento e pubblicalo insieme al tuo download così gli utenti possono verificarlo.',
      },
      {
        question: 'Perché l’hashing richiede qualche secondo per i file grandi?',
        answer:
          'Il browser deve leggere ed elaborare ogni byte del file. I file più grandi richiedono semplicemente più tempo e il tempo cresce con la dimensione del file piuttosto che con l’algoritmo scelto.',
      },
      {
        question: 'Il Verificatore di Hash dei File funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, tutto l’hashing avviene in locale nel browser senza richieste di rete, quindi puoi verificare file senza connessione internet.',
      },
      {
        question: 'Posso verificare più file alla volta?',
        answer:
          'Lo strumento verifica un file alla volta. Esegui l’hash di ciascun file separatamente e confrontalo con il suo checksum pubblicato.',
      },
      {
        question: 'Un hash corrispondente dimostra che il file è autentico?',
        answer:
          'Dimostra che il file è identico byte per byte a quello di cui l’editore ha calcolato l’hash. Non dimostra che l’editore sia chi afferma di essere, quindi ottieni l’hash atteso dal canale ufficiale dell’editore.',
      },
      {
        question: 'Lo strumento memorizza i miei file o i loro hash?',
        answer:
          'No. Nulla viene caricato o memorizzato e gli hash calcolati esistono solo nella scheda corrente del browser finché non la chiudi o aggiorni.',
      },
    ],
  },
  'favicon-generator': {
    instructions: [
      {
        title: 'Scegli Badge monogramma o Carica logo',
        description:
          'Inserisci 1–3 iniziali del brand con colori di sfondo e testo personalizzati, oppure passa a Carica immagine logo per ritagliare al centro un marchio PNG/SVG/JPG esistente.',
      },
      {
        title: 'Personalizza la tua icona',
        description:
          'Scegli le lettere del monogramma e i colori, oppure regola il ritaglio del logo caricato così il marchio resta centrato con padding uniforme su ogni lato.',
      },
      {
        title: 'Seleziona la forma degli angoli',
        description:
          'Scegli tra Quadrato arrotondato (stile iOS/macOS), Cerchio o Quadrato netto.',
      },
      {
        title: 'Visualizza in anteprima ogni dimensione',
        description:
          'Controlla attentamente le anteprime 16×16 e 32×32: un marchio che sembra ottimo in grande può diventare sfocato a dimensione scheda, quindi semplifica lettere o dettagli se necessario.',
      },
      {
        title: 'Scarica favicon.ico, PNG e snippet HTML',
        description:
          'Scarica il bundle favicon.ico multi-frame insieme alle singole dimensioni PNG e copia i tag link <head> nel tuo progetto.',
      },
      {
        title: 'Installa le icone e svuota la cache',
        description:
          'Metti i file nella cartella /public/, incolla i tag link in index.html, poi aggiorna forzatamente o svuota la cache del browser: i browser memorizzano le favicon in modo aggressivo, quindi un’icona obsoleta di solito significa un’icona in cache.',
      },
    ],
    examples: [
      {
        title: 'Avviare le icone per una nuova app React o Cloudflare Pages',
        input: 'Monogramma "UH" · Sfondo #4F46E5 · Forma: Quadrato arrotondato',
        output: 'Favicon.ico binario (frame PNG 16+32+48 px) + 6 dimensioni PNG + snippet HTML <link>',
        explanation:
          'Costruisce header binari ICONDIR e ICONDIRENTRY validi direttamente dentro buffer Uint8Array.',
      },
      {
        title: 'Creare un’icona Apple Touch da un logo quadrato',
        input: 'Logo PNG quadrato 512×512 con sfondo trasparente · Forma: Cerchio',
        output: 'Icona Apple Touch 180×180 ritagliata al centro, pronta per la schermata home iOS.',
        explanation:
          'Il ritaglio centrale con padding uniforme mantiene il marchio leggibile a ogni dimensione.',
      },
    ],
    benefits: [
      'Crea un vero file binario .ico multi-frame (16×16, 32×32 e 48×48), non un PNG rinominato',
      'Copre schede desktop, Apple Touch (180×180) e icone Web Manifest (192/512 px)',
      'La modalità Monogramma istantanea non richiede software di design per progetti secondari e MVP',
      'Genera boilerplate HTML5 <link rel="icon"> pulito pronto da incollare in index.html',
    ],
    useCases: [
      'Distribuire favicon e icone Apple Touch mancanti prima di lanci SaaS o micrositi',
      'Creare icone di scheda ad alto contrasto per dashboard di staging vs. produzione',
      'Trasformare marchi SVG/PNG quadrati in set completi di icone PWA',
      'Generare anteprime nitide 16×16 e 32×32 per verificare la leggibilità a piccole dimensioni',
    ],
    faqs: [
      {
        question: 'Il favicon.ico scaricato è un vero file binario ICO?',
        answer:
          'Sì. Scrive header ICONDIR ICO standard di Windows e voci di directory contenenti tre frame nitidi codificati PNG (16×16, 32×32 e 48×48) supportati da tutti i browser e sistemi operativi moderni.',
      },
      {
        question: 'Quali dimensioni di icone servono davvero ai siti web moderni?',
        answer:
          'Un favicon.ico più un PNG 32×32, un’icona Apple Touch 180×180 e PNG Web Manifest 192×192 / 512×512 coprono praticamente ogni browser desktop, iOS mobile e Android.',
      },
      {
        question: 'Dove dovrei mettere questi file in un progetto React + Vite?',
        answer:
          'Metti favicon.ico e le icone PNG dentro la cartella /public/ del progetto e incolla i tag HTML <link> dentro index.html <head>.',
      },
      {
        question: 'Il Generatore di Favicon è gratuito?',
        answer:
          'Sì, è completamente gratuito senza registrazione e tutte le icone vengono generate in locale nel browser.',
      },
      {
        question: 'I miei loghi caricati vengono inviati a un server?',
        answer:
          'No. Il tuo logo viene elaborato interamente nel browser e non viene mai caricato, quindi i tuoi asset di brand restano privati.',
      },
      {
        question: 'Qual è la differenza tra un favicon.ico e un favicon PNG?',
        answer:
          'Un favicon.ico è un contenitore che tiene diverse dimensioni di icone in un unico file binario, supportato dai browser da decenni. Un favicon PNG è un’immagine a dimensione singola; i browser moderni accettano entrambi, ma .ico resta l’opzione predefinita più sicura.',
      },
      {
        question: 'Che cos’è un’icona Apple Touch?',
        answer:
          'È l’icona PNG 180×180 che iOS usa quando qualcuno aggiunge il tuo sito alla schermata home. Senza di essa, iOS prende invece una schermata della tua pagina, che di solito sembra scadente.',
      },
      {
        question: 'A che cosa servono le icone PWA 192×192 e 512×512?',
        answer:
          'Sono le icone elencate nel manifest della tua web app per Progressive Web App installabili. Android e Chrome le usano per l’icona della schermata home, la schermata iniziale e il launcher delle app.',
      },
      {
        question: 'Posso creare una favicon da testo senza logo?',
        answer:
          'Sì. La modalità Monogramma trasforma 1–3 lettere, come le iniziali del tuo brand, in un badge pulito con la tua scelta di colore di sfondo, colore del testo e forma degli angoli, senza bisogno di software di design.',
      },
      {
        question: 'Quale file logo dovrei caricare per il miglior risultato?',
        answer:
          'Carica un PNG o SVG quadrato con sfondo trasparente di 512×512 o più. Le immagini sorgente quadrate si ritagliano in modo pulito; i loghi larghi o alti vengono ritagliati al centro, il che può tagliare i bordi.',
      },
      {
        question: 'Perché la mia nuova favicon non appare dopo la distribuzione?',
        answer:
          'I browser memorizzano le favicon in modo molto aggressivo. Aggiorna forzatamente con Ctrl+Shift+R (o Cmd+Shift+R su Mac), svuota la cache del sito o testa in una finestra privata per vedere la nuova icona.',
      },
      {
        question: 'La favicon deve corrispondere esattamente al mio logo?',
        answer:
          'A grandi dimensioni sì, ma a 16×16 i dettagli fini scompaiono. Semplifica il marchio per le dimensioni più piccole: iniziali in grassetto o una singola forma in grassetto si leggono molto meglio di un logo dettagliato.',
      },
      {
        question: 'Quale forma degli angoli dovrei scegliere?',
        answer:
          'Il Quadrato arrotondato corrisponde allo stile delle icone app iOS e macOS, il Cerchio si adatta ad avatar e marchi in stile social e il Quadrato netto è migliore per marchi geometrici o tecnici.',
      },
      {
        question: 'Ho bisogno di aggiungere tag link HTML per le icone?',
        answer:
          'Sì, per risultati affidabili. I browser cercano /favicon.ico per impostazione predefinita, ma le icone Apple Touch e PWA si caricano solo quando le dichiari con tag <link> nel <head> della pagina, che questo strumento genera per te.',
      },
      {
        question: 'Posso usare le icone generate anche per un’app mobile?',
        answer:
          'I PNG 192×192 e 512×512 funzionano per installazioni PWA, ma le app native iOS e Android richiedono i propri set di icone con dimensioni e formati specifici, che questo strumento orientato al web non genera.',
      },
      {
        question: 'Il Generatore di Favicon funziona offline?',
        answer:
          'Sì. Una volta caricata la pagina, la generazione delle icone avviene completamente nel browser senza richieste di rete.',
      },
      {
        question: 'Quale colore di sfondo funziona meglio per una favicon monogramma?',
        answer:
          'Un colore di brand pieno e ad alto contrasto con lettere bianche o quasi bianche funziona meglio, poiché resta leggibile a 16×16. Evita testo chiaro su sfondi chiari e gradienti impegnativi.',
      },
      {
        question: 'Posso rigenerare le icone dopo aver cambiato i colori del brand?',
        answer:
          'Sì. Aggiorna i colori o carica il nuovo logo e scarica un nuovo set: lo strumento non conserva nulla della sessione precedente, quindi ogni esecuzione parte pulita.',
      },
      {
        question: 'La favicon funzionerà nelle schede del browser in dark mode?',
        answer:
          'Una favicon con un colore di sfondo pieno appare uguale nelle schede chiare e scure. Se il tuo marchio è scuro su trasparente, aggiungi uno sfondo chiaro o un contorno così resta visibile sul chrome scuro del browser.',
      },
      {
        question: 'Lo strumento memorizza i miei loghi o le icone generate?',
        answer:
          'No. Tutto avviene in locale nella scheda del browser, nulla viene caricato o memorizzato e i tuoi file scompaiono quando chiudi o aggiorni la pagina.',
      },
    ],
  },
};
