// Detail content for FR tools — split out of
// src/locales/fr/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'merge-pdf': {
    instructions: [
      {
        title: 'Ajoutez plusieurs fichiers PDF',
        description:
          'Sélectionnez deux fichiers .pdf non chiffrés ou plus sur votre appareil ; chaque fichier est validé pour un en-tête %PDF avant la mise en file.',
      },
      {
        title: 'Vérifiez le nombre de pages et les tailles',
        description:
          'Consultez le nombre de pages et la taille en octets affichés pour chaque document en file pour confirmer que vous avez ajouté les bons fichiers.',
      },
      {
        title: 'Organisez l’ordre de fusion',
        description:
          'Utilisez les flèches haut/bas pour ordonner les chapitres, les annexes ou les factures avant de les combiner.',
      },
      {
        title: 'Nommez votre fichier de sortie',
        description:
          'Saisissez un nom de fichier personnalisé si vous le souhaitez, pour que le document fusionné soit facile à retrouver plus tard.',
      },
      {
        title: 'Fusionnez et téléchargez',
        description:
          'Cliquez sur Fusionner les PDF et télécharger pour combiner les fichiers localement et enregistrer le résultat.',
      },
      {
        title: 'Vérifiez le document fusionné',
        description:
          'Ouvrez le PDF téléchargé et vérifiez l’ordre des pages et le nombre total de pages ; relancez avec un ordre corrigé si quelque chose est déplacé.',
      },
    ],
    examples: [
      {
        title: 'Combiner une page de garde de facture et un paquet de reçus',
        input: 'page-de-garde.pdf (1 page) + recus.pdf (4 pages)',
        output: 'document-fusionne.pdf (5 pages)',
        explanation:
          'Copie toutes les pages vectorielles, les polices et les images intégrées dans un seul conteneur PDF.',
      },
      {
        title: 'Assembler un dossier de candidature',
        input: 'cv.pdf (2 pages) + lettre.pdf (1 page) + portfolio.pdf (3 pages)',
        output: 'candidature.pdf (6 pages)',
        explanation:
          'Les documents sont fusionnés dans l’ordre choisi, chaque page gardant sa mise en page d’origine.',
      },
    ],
    benefits: [
      'Aucun envoi de fichier : les contrats, déclarations fiscales et accords de confidentialité restent strictement sur votre machine',
      'Affiche le nombre exact de pages et la taille en octets par document en file',
      'Valide immédiatement les PDF mal formés ou chiffrés par mot de passe lors du téléchargement',
      'Aucun filigrane, plafond de pages ni limite quotidienne',
    ],
    useCases: [
      'Regrouper des propositions clients, des formulaires signés et des annexes de tarification',
      'Combiner des documents fiscaux numérisés en plusieurs parties avant le dépôt',
      'Fusionner des diapositives de cours ou des guides d’étude en un seul paquet imprimable',
      'Assembler les factures de dépenses mensuelles en un seul PDF comptable',
    ],
    faqs: [
      {
        question: 'Cet outil peut-il fusionner des fichiers PDF protégés par mot de passe ?',
        answer:
          'La bibliothèque pdf-lib côté navigateur exige des PDF non chiffrés, sauf s’ils sont déverrouillés d’abord. Si un fichier chiffré est téléchargé, le validateur vous alerte clairement au lieu d’échouer silencieusement.',
      },
      {
        question: 'Les polices vectorielles et les hyperliens cliquables sont-ils préservés ?',
        answer:
          'Oui. Les flux de pages PDF standard, les polices intégrées et les tracés vectoriels sont copiés directement via PDFDocument.copyPages() sans convertir les pages en images floues.',
      },
      {
        question: 'Y a-t-il une limite d’envoi vers un serveur ?',
        answer:
          'Aucun fichier n’est jamais envoyé : le traitement s’exécute uniquement dans la mémoire de l’onglet de votre navigateur.',
      },
      {
        question: 'L’outil Fusionner des PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans filigrane, sans plafond de pages ni limite quotidienne, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Combien de fichiers PDF puis-je fusionner à la fois ?',
        answer:
          'Vous pouvez en mettre en file autant que la mémoire de votre navigateur le permet confortablement. Le nombre de pages et la taille de chaque fichier sont affichés pour que vous puissiez juger avant de fusionner.',
      },
      {
        question: 'Puis-je réorganiser les PDF après les avoir ajoutés ?',
        answer:
          'Oui, utilisez les flèches haut et bas à côté de chaque fichier pour définir l’ordre de fusion exact avant de combiner.',
      },
      {
        question: 'La fusion modifiera-t-elle la qualité de mes PDF ?',
        answer:
          'Non, les pages sont copiées sous forme de données vectorielles : le texte, les polices et les images conservent leur qualité d’origine.',
      },
      {
        question: 'Le PDF fusionné conserve-t-il les signets ou les sommaires ?',
        answer:
          'Le contenu des pages est entièrement préservé, mais les sommaires et les signets du document peuvent ne pas être repris dans le fichier fusionné.',
      },
      {
        question: 'Puis-je fusionner des PDF numérisés ?',
        answer:
          'Oui, les pages numérisées sont copiées comme des images dans le fichier fusionné, comme n’importe quelle autre page.',
      },
      {
        question: 'Quels types de fichiers puis-je fusionner avec cet outil ?',
        answer:
          'Uniquement des fichiers PDF (.pdf). Les images doivent d’abord être converties avec l’outil Images en PDF avant de pouvoir être fusionnées.',
      },
      {
        question: 'Puis-je choisir le nom du fichier de sortie du PDF fusionné ?',
        answer:
          'Oui, saisissez un nom de fichier personnalisé avant de cliquer sur Fusionner ; sinon, un nom par défaut est utilisé.',
      },
      {
        question: 'L’outil Fusionner des PDF fonctionne-t-il sur mobile ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles modernes, même si les très gros fichiers fusionnent plus vite sur un ordinateur.',
      },
      {
        question: 'Mes fichiers sont-ils privés quand je fusionne des PDF ici ?',
        answer:
          'Oui, tout se passe localement dans l’onglet de votre navigateur et aucun fichier n’est envoyé à un serveur.',
      },
      {
        question: 'Que se passe-t-il si l’un de mes PDF est corrompu ?',
        answer:
          'Le validateur vérifie l’en-tête %PDF de chaque fichier et vous alerte sur les fichiers mal formés ou chiffrés avant le début de la fusion.',
      },
      {
        question: 'Puis-je fusionner des PDF de tailles de page différentes ?',
        answer:
          'Oui, chaque page conserve sa taille et son orientation d’origine dans le document fusionné.',
      },
      {
        question: 'Le PDF fusionné restera-t-il consultable par recherche ?',
        answer:
          'Oui, les PDF basés sur du texte conservent un texte sélectionnable et consultable, car les pages sont copiées et non converties en images.',
      },
      {
        question: 'Puis-je fusionner un PDF avec lui-même ?',
        answer:
          'Oui, vous pouvez ajouter le même fichier plusieurs fois si vous avez besoin qu’une page ou un document soit répété dans le résultat.',
      },
      {
        question: 'Y a-t-il une taille de fichier maximale pour fusionner des PDF ?',
        answer:
          'Il n’y a pas de limite définie ; la limite pratique est la mémoire du navigateur disponible sur votre appareil.',
      },
      {
        question: 'Que dois-je faire si le téléchargement fusionné ne démarre pas ?',
        answer:
          'Vérifiez les paramètres de téléchargement et le bloqueur de fenêtres contextuelles de votre navigateur, puis cliquez à nouveau sur Fusionner ; le fichier est généré localement à chaque fois.',
      },
      {
        question: 'Puis-je fusionner des PDF puis diviser le résultat ?',
        answer:
          'Oui, téléchargez le PDF fusionné et ouvrez-le dans l’outil Diviser un PDF pour extraire les pages dont vous avez besoin.',
      },
    ],
  },
  'split-pdf': {
    instructions: [
      {
        title: 'Chargez votre document PDF',
        description:
          'Choisissez n’importe quel fichier PDF non chiffré ; l’outil valide l’en-tête et affiche le nombre total de pages.',
      },
      {
        title: 'Choisissez le mode de division',
        description:
          'Sélectionnez Extraire des plages de pages, Pages impaires uniquement, Pages paires uniquement ou Éclater toutes les pages individuelles.',
      },
      {
        title: 'Saisissez les pages ou les plages',
        description:
          'Pour le mode plage, tapez des pages comme « 1-3, 5, 9-12 » ; l’analyseur signale les plages hors limites ou inversées avant l’enregistrement.',
      },
      {
        title: 'Vérifiez votre sélection',
        description:
          'Confirmez que le mode et la liste de pages correspondent à ce dont vous avez besoin, surtout pour les extractions paires/impaires et éclatées.',
      },
      {
        title: 'Divisez et téléchargez',
        description:
          'Cliquez sur Diviser et télécharger le PDF pour générer votre document réduit localement.',
      },
      {
        title: 'Vérifiez le résultat et répétez si nécessaire',
        description:
          'Ouvrez le fichier téléchargé pour confirmer que les bonnes pages ont été extraites ; pour le mode éclaté, autorisez plusieurs téléchargements dans votre navigateur si on vous le demande.',
      },
    ],
    examples: [
      {
        title: 'Extraire les pages de signature d’un accord de 12 pages',
        input: 'Pages à extraire : 1, 10-12',
        output: 'contrat-extrait.pdf (4 pages)',
        explanation:
          'Exporte les pages 1, 10, 11 et 12 par ordre croissant tout en laissant votre fichier d’origine intact.',
      },
      {
        title: 'Extraire uniquement les pages impaires',
        input: 'Mode : Pages impaires uniquement · Document : 10 pages',
        output: 'document-impair.pdf (5 pages : 1, 3, 5, 7, 9)',
        explanation:
          'Utile pour les flux de numérisation recto-verso où les pages impaires et paires sont numérisées séparément.',
      },
    ],
    benefits: [
      'L’analyseur de plage flexible détecte les plages hors limites ou inversées avant l’enregistrement',
      'Préserve la netteté vectorielle d’origine et la sélection du texte',
      'Prend en charge l’extraction paire/impaire pour les flux de numérisation recto-verso',
      'Protège les documents financiers et juridiques privés des serveurs d’envoi tiers',
    ],
    useCases: [
      'Extraire uniquement les chapitres pertinents d’un grand rapport avant de le partager',
      'Séparer des factures individuelles regroupées dans un PDF de facturation principal',
      'Extraire les pages de signature ou d’annexe de contrats de plusieurs pages',
      'Récupérer des lots de numérisations paires/impaires depuis des chargeurs de documents recto',
    ],
    faqs: [
      {
        question: 'Pourquoi le mode Éclater toutes les pages individuelles est-il limité à 25 pages ?',
        answer:
          'Les navigateurs bloquent ou demandent souvent une confirmation quand un site déclenche plus d’environ 25 téléchargements de fichiers simultanés rapides. Utilisez Extraire des plages de pages pour les extractions plus importantes en plusieurs parties.',
      },
      {
        question: 'La division modifie-t-elle mon fichier PDF d’origine ?',
        answer:
          'Non. Le navigateur lit une copie locale en mémoire et génère un nouveau PDF téléchargé.',
      },
      {
        question: 'Quelle syntaxe puis-je taper dans Pages à extraire ?',
        answer:
          'Combinez des numéros uniques et des plages avec trait d’union séparés par des virgules, comme « 1-3, 5, 9-12 ».',
      },
      {
        question: 'L’outil Diviser un PDF est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans filigrane ni limite de pages au-delà du plafond d’éclatement de 25 pages.',
      },
      {
        question: 'Puis-je extraire uniquement les pages impaires d’un PDF ?',
        answer:
          'Oui, choisissez Pages impaires uniquement ; c’est utile pour les flux de numérisation recto-verso.',
      },
      {
        question: 'Puis-je extraire uniquement les pages paires d’un PDF ?',
        answer:
          'Oui, choisissez Pages paires uniquement pour extraire uniquement les pages numérotées paires.',
      },
      {
        question: 'Que se passe-t-il si je tape un numéro de page qui n’existe pas ?',
        answer:
          'L’analyseur de plage valide votre saisie et vous avertit des plages hors limites ou inversées avant d’enregistrer quoi que ce soit.',
      },
      {
        question: 'Puis-je extraire des pages PDF dans un ordre personnalisé, comme 10-12 puis 1 ?',
        answer:
          'Les pages extraites sont enregistrées par ordre croissant. Pour les réorganiser ensuite, utilisez l’outil Réorganiser les pages PDF.',
      },
      {
        question: 'La division d’un PDF garde-t-elle le texte consultable ?',
        answer:
          'Oui, les pages sont copiées sous forme de données vectorielles : le texte reste donc sélectionnable et consultable dans le fichier extrait.',
      },
      {
        question: 'Puis-je diviser un PDF protégé par mot de passe ?',
        answer:
          'Non, les PDF chiffrés doivent d’abord être déverrouillés ; l’outil n’accepte que les fichiers non chiffrés.',
      },
      {
        question: 'Puis-je diviser un PDF numérisé ?',
        answer:
          'Oui, les pages numérisées s’extraient exactement comme les pages de texte, car la division copie des pages entières sans lire ni modifier leur contenu.',
      },
      {
        question: 'Le PDF extrait conservera-t-il sa qualité d’origine ?',
        answer:
          'Oui, aucune recompression ni conversion en image n’a lieu pendant l’extraction, donc chaque page extraite conserve la qualité exacte du PDF d’origine.',
      },
      {
        question: 'Comment éclater un PDF en fichiers d’une seule page ?',
        answer:
          'Choisissez Éclater toutes les pages individuelles ; chaque page se télécharge comme son propre PDF, jusqu’à 25 pages par exécution.',
      },
      {
        question: 'Puis-je télécharger uniquement la première page d’un PDF ?',
        answer:
          'Oui, choisissez Extraire des plages de pages et tapez « 1 » dans le champ Pages à extraire.',
      },
      {
        question: 'L’outil Diviser un PDF envoie-t-il mon fichier quelque part ?',
        answer:
          'Non, la division s’exécute entièrement dans votre navigateur ; votre fichier ne quitte jamais votre appareil.',
      },
      {
        question: 'Puis-je utiliser l’outil Diviser un PDF sur mon téléphone ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles modernes, même si les très gros fichiers se divisent plus confortablement sur un ordinateur.',
      },
      {
        question: 'Quelle est la différence entre Extraire des plages de pages et Éclater ?',
        answer:
          'Les plages combinent les pages sélectionnées en un seul nouveau PDF, tandis qu’Éclater crée un PDF distinct par page.',
      },
      {
        question: 'Puis-je extraire les pages 1-3 et la page 5 en une seule fois ?',
        answer:
          'Oui, tapez « 1-3, 5 » — les numéros uniques et les plages avec trait d’union peuvent être combinés avec des virgules.',
      },
      {
        question: 'Les signets survivront-ils quand je divise un PDF ?',
        answer:
          'Le contenu des pages est préservé, mais les sommaires et les signets du document ne sont généralement pas repris dans les fichiers extraits.',
      },
      {
        question: 'Mon téléchargement n’a pas démarré après la division — que dois-je faire ?',
        answer:
          'Autorisez les téléchargements multiples pour ce site dans votre navigateur, puis cliquez à nouveau sur Diviser ; le fichier est généré localement à chaque fois.',
      },
    ],
  },
  'images-to-pdf': {
    instructions: [
      {
        title: 'Sélectionnez une ou plusieurs images',
        description:
          'Choisissez des images JPG, PNG ou WebP ; les miniatures et les dimensions en pixels apparaissent immédiatement.',
      },
      {
        title: 'Organisez l’ordre des images',
        description:
          'Utilisez les flèches haut/bas pour définir la séquence des pages de votre PDF.',
      },
      {
        title: 'Configurez la taille de page et les marges',
        description:
          'Choisissez A4 Portrait, Lettre US ou Dimensions exactes de l’image, et définissez une marge pour les tailles de page standard.',
      },
      {
        title: 'Nommez votre fichier de sortie',
        description:
          'Saisissez un nom de fichier personnalisé pour que le PDF terminé soit facile à identifier.',
      },
      {
        title: 'Générez le PDF',
        description:
          'Cliquez sur Convertir les images en PDF pour construire le document localement et le télécharger instantanément.',
      },
      {
        title: 'Vérifiez et ajustez',
        description:
          'Ouvrez le PDF pour vérifier la mise en page et les marges ; réorganisez les images ou modifiez le réglage de page et reconvertissez si une page semble incorrecte.',
      },
    ],
    examples: [
      {
        title: 'Compiler des reçus de dépenses sur des pages A4 standard',
        input: '3 reçus JPG · A4 Portrait · Marge de 24 pt',
        output: 'lot-images.pdf (3 pages A4 centrées, proportions préservées)',
        explanation:
          'Met à l’échelle chaque image proportionnellement pour tenir dans les marges A4 imprimables sans distorsion.',
      },
      {
        title: 'Convertir une seule photo en PDF',
        input: '1 photo PNG · Dimensions exactes de l’image',
        output: 'photo.pdf (1 page à la taille native de l’image, sans marge)',
        explanation:
          'Le mode Dimensions exactes crée une page par image à sa taille native, sans recadrage ni marge.',
      },
    ],
    benefits: [
      'Intègre directement les flux JPG et PNG natifs et convertit proprement WebP via Canvas',
      'Préserve le rapport d’aspect complet de l’image sans étirement ni recadrage',
      'Prend en charge les feuilles imprimables A4 / Lettre US ainsi que les pages d’images exactes sans marge',
      'Garde les photos d’identité, les reçus et les documents privés strictement hors ligne dans la RAM du navigateur',
    ],
    useCases: [
      'Transformer les photos de reçus du téléphone en un PDF de dépenses mensuelles propre',
      'Compiler des maquettes de design ou des captures d’interface en un dossier de révision A4',
      'Convertir des pages de documents numérisés en un seul PDF téléchargeable',
      'Emballer des planches d’œuvres de portfolio sans compression cloud',
    ],
    faqs: [
      {
        question: 'Comment l’outil gère-t-il les images WebP ?',
        answer:
          'Comme la spécification PDF intègre nativement JPEG et PNG plutôt que WebP, l’outil décode les images WebP en douceur via HTML5 Canvas en cadres PNG sans perte avant de les intégrer.',
      },
      {
        question: 'Les photos portrait et paysage seront-elles étirées pour tenir en A4 ?',
        answer:
          'Non. Les images sont mises à l’échelle proportionnellement avec Math.min(largeurMax/largeurImg, hauteurMax/hauteurImg) et centrées sur la page.',
      },
      {
        question: 'Les miniatures d’images sont-elles envoyées quelque part ?',
        answer:
          'Non. Les aperçus utilisent des URL d’objet locales temporaires dans l’onglet de votre navigateur.',
      },
      {
        question: 'L’outil Images en PDF est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans filigrane et sans limite de nombre d’images converties.',
      },
      {
        question: 'Quels formats d’image puis-je convertir en PDF ?',
        answer:
          'JPG, PNG et WebP sont pris en charge, vous pouvez donc convertir des photos, des captures d’écran et des images web en un seul PDF.',
      },
      {
        question: 'Puis-je convertir une seule image en PDF ?',
        answer:
          'Oui, une image produit un PDF d’une page, ce qui convient bien pour partager une seule photo ou un document numérisé sous forme de fichier.',
      },
      {
        question: 'Puis-je réorganiser les images avant de les convertir en PDF ?',
        answer:
          'Oui, utilisez les flèches haut et bas pour organiser l’ordre des pages avant de générer le PDF.',
      },
      {
        question: 'Quelles tailles de page sont disponibles pour convertir des images en PDF ?',
        answer:
          'A4 Portrait, Lettre US et Dimensions exactes de l’image, qui crée une page par image à sa taille native.',
      },
      {
        question: 'Mes images seront-elles recadrées quand elles sont converties en PDF ?',
        answer:
          'Non, les images sont mises à l’échelle proportionnellement et centrées ; rien n’est recadré ni étiré.',
      },
      {
        question: 'Puis-je ajouter des marges autour de mes images dans le PDF ?',
        answer:
          'Oui, définissez une marge (par exemple 24 pt) quand vous utilisez les tailles de page A4 ou Lettre US.',
      },
      {
        question: 'La conversion d’images en PDF réduit-elle leur qualité ?',
        answer:
          'Les flux JPG et PNG sont intégrés nativement, et WebP est converti via Canvas en PNG sans perte : la qualité est donc préservée.',
      },
      {
        question: 'Puis-je convertir des photos HEIC de mon iPhone en PDF ?',
        answer:
          'Pas directement ; convertissez d’abord HEIC en JPG ou PNG, puis utilisez cet outil.',
      },
      {
        question: 'Mes photos sont-elles envoyées à un serveur quand je les convertis en PDF ?',
        answer:
          'Non, la conversion s’exécute localement dans votre navigateur et les aperçus utilisent des URL d’objet locales temporaires.',
      },
      {
        question: 'Puis-je utiliser l’outil Images en PDF sur mobile ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles ; choisissez les images directement dans votre photothèque.',
      },
      {
        question: 'Que se passe-t-il avec les très grandes images ?',
        answer:
          'Les grandes images sont intégrées en pleine résolution : le PDF résultant peut donc être volumineux ; compressez-les d’abord si la taille du fichier compte.',
      },
      {
        question: 'Puis-je mélanger JPG, PNG et WebP dans un seul PDF ?',
        answer:
          'Oui, vous pouvez combiner les trois formats dans un seul document, et les pages restent dans l’ordre où vous les avez disposées.',
      },
      {
        question: 'Les pages du PDF seront-elles dans le même ordre que mes images ?',
        answer:
          'Oui, les pages suivent l’ordre affiché dans la liste des images, alors réorganisez vos images d’abord si vous voulez une autre séquence de pages.',
      },
      {
        question: 'Puis-je définir un nom de fichier personnalisé pour le PDF ?',
        answer:
          'Oui, saisissez le nom de fichier de votre choix avant de convertir.',
      },
      {
        question: 'L’outil conserve-t-il la transparence des images ?',
        answer:
          'La transparence PNG est préservée sur les pages à dimensions exactes de l’image ; sur les pages A4 ou Lettre, l’image repose sur un fond de page blanc.',
      },
      {
        question: 'Mon PDF ne s’est pas téléchargé — que dois-je faire ?',
        answer:
          'Vérifiez les autorisations de téléchargement de votre navigateur et réessayez ; le fichier est généré localement dans votre onglet.',
      },
    ],
  },
  'pdf-to-images': {
    instructions: [
      {
        title: 'Choisissez un fichier PDF',
        description:
          'Sélectionnez n’importe quel document PDF non chiffré ; PDF.js lit immédiatement le nombre total de pages.',
      },
      {
        title: 'Choisissez les pages à convertir',
        description:
          'Saisissez « tout » ou une plage de pages (jusqu’à 20 pages par lot), comme « 1-3, 5 ».',
      },
      {
        title: 'Choisissez le format et l’échelle',
        description:
          'Choisissez PNG pour un texte net ou JPG pour des fichiers plus petits riches en photos, et sélectionnez une résolution de 1,0×, 1,5× ou 2,0×.',
      },
      {
        title: 'Convertissez les pages',
        description:
          'Lancez le rendu et attendez que les aperçus de pages apparaissent ; les lots plus importants prennent un peu plus de temps.',
      },
      {
        title: 'Consultez les aperçus',
        description:
          'Inspectez chaque miniature rendue pour la netteté et le contenu correct avant de télécharger.',
      },
      {
        title: 'Téléchargez vos images',
        description:
          'Cliquez sur .PNG ou .JPG sur n’importe quelle carte de page pour enregistrer cette image ; répétez le lot pour les pages restantes si nécessaire.',
      },
    ],
    examples: [
      {
        title: 'Exporter des diapositives de présentation pour le partage social',
        input: 'Pages : 1-3 · Format : PNG · Échelle : 2,0× (144 PPP)',
        output: '3 images de diapositives PNG nettes 2× prêtes pour LinkedIn ou les intégrations de blog',
        explanation:
          'Le rendu de canevas à grande échelle garde les diagrammes et la typographie nets.',
      },
      {
        title: 'Enregistrer une seule page de certificat en JPG',
        input: 'Page : 1 · Format : JPG · Échelle : 1,5×',
        output: '1 image JPG compacte du certificat, prête à partager',
        explanation:
          'Le JPG convient aux pages riches en photos et produit des fichiers plus petits que le PNG.',
      },
    ],
    benefits: [
      'Utilise le Web Worker PDF.js intégré à Vite — aucune requête de script CDN externe',
      'Remplit automatiquement un fond de canevas blanc quand il exporte des PDF transparents en JPG',
      'Permet de cibler des plages de pages exactes au lieu de convertir un fichier entier de 100 pages',
      'Le rendu de canevas privé côté navigateur protège les documents sensibles',
    ],
    useCases: [
      'Transformer les diapositives de pitch-deck PDF en visuels de blog ou sociaux',
      'Enregistrer une seule page de certificat signé ou de billet en photo mobile',
      'Générer des aperçus d’interface nets de documents PDF imprimables',
      'Inspecter visuellement le rendu des polices et de la mise en page en dehors des applications PDF dédiées',
    ],
    faqs: [
      {
        question: 'Dois-je choisir PNG ou JPG pour les pages PDF ?',
        answer:
          'Choisissez PNG pour les diapositives, les documents texte, les reçus et les graphiques où les bords nets comptent. Choisissez JPG quand vous exportez des brochures riches en photos pour des tailles de fichier plus petites.',
      },
      {
        question: 'Pourquoi PDF en Images convertit-il jusqu’à 20 pages par lot ?',
        answer:
          'Les canevas haute résolution 2× consomment beaucoup de GPU et de RAM par page ; limiter les lots à 20 pages garde les onglets de navigateur réactifs sur les téléphones et les ordinateurs portables.',
      },
      {
        question: 'Cela fonctionne-t-il sur les PDF protégés par mot de passe ?',
        answer:
          'Les PDF chiffrés doivent être déverrouillés avant le rendu local, car l’outil ne peut pas lire les pages d’un fichier encore verrouillé.',
      },
      {
        question: 'L’outil PDF en Images est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans filigrane ; le rendu se fait localement dans votre navigateur.',
      },
      {
        question: 'Quelle résolution dois-je choisir pour les réseaux sociaux ?',
        answer:
          '2,0× donne les résultats les plus nets pour les publications et les intégrations de blog, tandis que 1,0× suffit pour des aperçus rapides.',
      },
      {
        question: 'Puis-je exporter une seule page en image ?',
        answer:
          'Oui, saisissez ce numéro de page dans le champ de plage de pages.',
      },
      {
        question: 'Puis-je exporter toutes les pages d’un PDF à la fois ?',
        answer:
          'Vous pouvez convertir jusqu’à 20 pages par lot ; répétez le processus pour les documents plus longs.',
      },
      {
        question: 'Pourquoi mon export JPG affiche-t-il un fond blanc ?',
        answer:
          'Le JPG n’a pas de transparence : les zones PDF transparentes sont donc automatiquement remplies en blanc.',
      },
      {
        question: 'PDF en Images garde-t-il le texte net ?',
        answer:
          'Oui, les pages sont rendues à une échelle allant jusqu’à 2× avec PDF.js, gardant le texte et les diagrammes nets.',
      },
      {
        question: 'Puis-je choisir quelles pages convertir en images ?',
        answer:
          'Oui, tapez « tout » ou une plage comme « 1-3, 5 » dans le champ des pages.',
      },
      {
        question: 'Mes fichiers PDF sont-ils envoyés quelque part ?',
        answer:
          'Non, le rendu se fait dans votre navigateur via un worker PDF.js local ; rien ne quitte votre appareil.',
      },
      {
        question: 'Puis-je utiliser PDF en Images sur mon téléphone ?',
        answer:
          'Oui, même si les rendus haute résolution utilisent plus de mémoire : les lots plus petits fonctionnent donc mieux sur les téléphones.',
      },
      {
        question: 'Quelle est la différence entre les échelles 1,0×, 1,5× et 2,0× ?',
        answer:
          'Les échelles plus élevées rendent plus de pixels par page, produisant des images plus grandes et plus nettes ; 2,0× correspond à environ 144 PPP.',
      },
      {
        question: 'Puis-je télécharger toutes les pages rendues en un clic ?',
        answer:
          'Chaque carte de page a son propre bouton de téléchargement .PNG ou .JPG ; téléchargez individuellement les pages dont vous avez besoin.',
      },
      {
        question: 'Les graphiques vectoriels et les diagrammes resteront-ils nets ?',
        answer:
          'Oui, PDF.js convertit le contenu vectoriel à l’échelle choisie, donc les graphiques et les diagrammes restent nets.',
      },
      {
        question: 'Pourquoi le rendu prend-il du temps sur les gros PDF ?',
        answer:
          'Chaque page est dessinée sur un canevas à haute résolution ; convertir quelques pages à la fois garde l’onglet réactif.',
      },
      {
        question: 'Puis-je convertir un PDF numérisé en images ?',
        answer:
          'Oui, les pages numérisées se convertissent en images exactement comme elles apparaissent dans le PDF.',
      },
      {
        question: 'L’outil PDF en Images fonctionne-t-il hors ligne ?',
        answer:
          'Une fois la page chargée, le rendu s’exécute localement dans votre navigateur sans autre requête réseau.',
      },
      {
        question: 'Mon image rendue semble floue — que dois-je faire ?',
        answer:
          'Convertissez à nouveau à l’échelle 2,0× et choisissez PNG pour les pages riches en texte.',
      },
      {
        question: 'Puis-je utiliser les images exportées commercialement ?',
        answer:
          'Les images vous appartiennent et vous pouvez les utiliser comme le PDF d’origine ; respectez le droit d’auteur du document source.',
      },
    ],
  },
  'pdf-page-rotator': {
    instructions: [
      {
        title: 'Chargez votre PDF',
        description:
          'Sélectionnez le fichier PDF contenant des pages de travers ou inversées.',
      },
      {
        title: 'Choisissez l’angle de rotation',
        description:
          'Choisissez 90° dans le sens horaire, 90° dans le sens antihoraire ou 180°, selon la façon dont les pages sont mal alignées.',
      },
      {
        title: 'Choisissez la portée des pages',
        description:
          'Sélectionnez Toutes les pages, Plages précises, Impaires ou Paires ; pour les plages, tapez des pages comme « 2, 5-7 ».',
      },
      {
        title: 'Prévisualisez l’orientation actuelle',
        description:
          'Vérifiez quelles pages sont réellement de travers pour ne pivoter que celles qui en ont besoin.',
      },
      {
        title: 'Appliquez et téléchargez',
        description:
          'Cliquez sur Appliquer la rotation et télécharger le PDF pour enregistrer définitivement le fichier corrigé.',
      },
      {
        title: 'Vérifiez et corrigez les restes',
        description:
          'Ouvrez le PDF téléchargé ; si une page est encore de travers, relancez-le avec un autre 90° dans le même sens.',
      },
    ],
    examples: [
      {
        title: 'Corriger un seul graphique financier pivoté à la page 3',
        input: 'Rotation : 90° dans le sens horaire · Portée : Plages de pages précises (3)',
        output: 'Seule la page 3 pivote dans le sens horaire ; toutes les autres pages conservent leur orientation existante.',
        explanation:
          'Ajoute 90° modulo 360 aux métadonnées de rotation de page existantes sans convertir le texte en image.',
      },
      {
        title: 'Redresser un lot de numérisations à l’envers',
        input: 'Rotation : 180° · Portée : Toutes les pages',
        output: 'Toutes les pages sont retournées et s’ouvrent à l’endroit dans n’importe quel lecteur PDF.',
        explanation:
          'La rotation de 180° est écrite dans le dictionnaire de pages et enregistrée dans le fichier téléchargé.',
      },
    ],
    benefits: [
      'Rotation sans perte — met à jour les indicateurs d’orientation des pages PDF sans recompresser le texte ou les images',
      'Préserve proprement les angles de page existants (calcule la rotation relative modulo 360°)',
      'Cible des plages sélectives comme « 2, 5-7 » sans pivoter les pages droites',
      'Téléchargement instantané dans le navigateur sans aucun envoi vers un serveur',
    ],
    useCases: [
      'Corriger des lots de numérisations à l’envers sur mobile ou sur des photocopieurs de bureau',
      'Faire pivoter de larges tableurs en paysage dans des rapports majoritairement en portrait',
      'Corriger les pièces jointes d’orientation mixte après la fusion de documents',
      'Préparer des dépôts de conformité proprement orientés pour les portails',
    ],
    faqs: [
      {
        question: 'La rotation des pages réduit-elle la netteté du texte ou des images ?',
        answer:
          'Non. Définir la propriété de rotation de page du PDF est complètement sans perte et ne réencode ni les polices ni les images intégrées.',
      },
      {
        question: 'Que se passe-t-il si une page de mon PDF était déjà pivotée de 90° ?',
        answer:
          'Le rotateur lit l’angle de rotation actuel de chaque page et ajoute le delta choisi modulo 360° : les changements d’orientation sont donc prévisibles par rapport à l’apparence actuelle de la page.',
      },
      {
        question: 'Puis-je pivoter une seule page dans un PDF de 20 pages ?',
        answer:
          'Oui. Choisissez « Plages de pages précises » et tapez ce numéro de page exact (par exemple « 7 »).',
      },
      {
        question: 'La rotation de pages PDF est-elle gratuite ?',
        answer:
          'Oui, elle est gratuite, sans filigrane ni limite, et vous pouvez pivoter autant de PDF que nécessaire sans créer de compte.',
      },
      {
        question: 'Puis-je pivoter toutes les pages d’un PDF à la fois ?',
        answer:
          'Oui, choisissez Toutes les pages et sélectionnez 90° dans le sens horaire, 90° dans le sens antihoraire ou 180°.',
      },
      {
        question: 'Puis-je pivoter uniquement les pages paires ou impaires ?',
        answer:
          'Oui, choisissez la portée Impaire ou Paire ; c’est utile pour corriger les lots de numérisation recto-verso.',
      },
      {
        question: 'Par quels angles puis-je pivoter les pages PDF ?',
        answer:
          '90° dans le sens horaire, 90° dans le sens antihoraire et 180°.',
      },
      {
        question: 'Puis-je pivoter une page PDF d’un angle personnalisé comme 45° ?',
        answer:
          'Non, seuls 90°, 180° et 270° (via des rotations répétées de 90°) sont pris en charge, car la rotation PDF est définie en quarts de tour.',
      },
      {
        question: 'La rotation est-elle permanente ?',
        answer:
          'Oui, la rotation est écrite dans le dictionnaire de pages du PDF et enregistrée dans le fichier téléchargé.',
      },
      {
        question: 'La rotation modifie-t-elle la taille du fichier PDF ?',
        answer:
          'À peine ; seules les métadonnées d’orientation changent, donc le fichier garde presque la même taille.',
      },
      {
        question: 'Puis-je pivoter un PDF protégé par mot de passe ?',
        answer:
          'Non, les PDF chiffrés doivent d’abord être déverrouillés, car l’outil ne peut pas modifier les pages d’un fichier encore verrouillé.',
      },
      {
        question: 'La rotation de pages PDF envoie-t-elle mon fichier ?',
        answer:
          'Non, la rotation s’exécute entièrement dans votre navigateur ; votre fichier ne quitte jamais votre appareil.',
      },
      {
        question: 'Puis-je pivoter des pages dans un PDF numérisé ?',
        answer:
          'Oui, les pages numérisées pivotent comme les pages de texte, car la rotation tourne toute l’image de la page sans lire son contenu.',
      },
      {
        question: 'La rotation corrigera-t-elle un PDF qui s’ouvre de travers dans chaque lecteur ?',
        answer:
          'Oui, le fichier enregistré s’ouvre dans l’orientation corrigée dans n’importe quel lecteur PDF.',
      },
      {
        question: 'Puis-je pivoter différentes pages de montants différents ?',
        answer:
          'Exécutez l’outil une fois par angle : pivotez une plage, téléchargez, puis pivotez une autre plage dans le résultat.',
      },
      {
        question: 'Que dois-je faire si une page est encore de travers après la rotation ?',
        answer:
          'Vérifiez d’abord l’apparence actuelle de la page, puis ajoutez un autre 90° dans le même sens, car la rotation est relative à l’angle actuel.',
      },
      {
        question: 'La rotation affecte-t-elle les liens cliquables ou les champs de formulaire ?',
        answer:
          'Les liens et les annotations pivotent avec la page, donc ils restent alignés avec le contenu.',
      },
      {
        question: 'Puis-je utiliser la rotation de pages PDF sur mon téléphone ?',
        answer:
          'Oui, elle fonctionne dans les navigateurs mobiles modernes, vous pouvez donc ouvrir un PDF sur votre téléphone et pivoter ses pages directement.',
      },
      {
        question: 'Le PDF pivoté s’imprimera-t-il correctement ?',
        answer:
          'Oui, les imprimantes suivent l’orientation de page enregistrée : les pages pivotées s’impriment donc dans le bon sens.',
      },
      {
        question: 'Mon téléchargement n’a pas démarré — que dois-je faire ?',
        answer:
          'Autorisez les téléchargements pour ce site dans les paramètres de votre navigateur et cliquez à nouveau sur Appliquer la rotation ; le fichier est généré localement.',
      },
    ],
  },
  'reorder-delete-pdf-pages': {
    instructions: [
      {
        title: 'Chargez votre document PDF',
        description:
          'Sélectionnez un PDF non chiffré ; les aperçus de miniatures se rendent localement pour un maximum de 30 pages (avec des cartes de pages et des dimensions pour toutes les pages).',
      },
      {
        title: 'Consultez les cartes de pages',
        description:
          'Chaque carte montre sa position de sortie actuelle et son index de page d’origine, pour que vous puissiez repérer les pages vides, dupliquées ou mal placées avant de modifier quoi que ce soit.',
      },
      {
        title: 'Réorganisez, dupliquez ou supprimez',
        description:
          'Utilisez les boutons fléchés pour modifier la séquence, l’icône de copie pour dupliquer une feuille ou l’icône de corbeille pour supprimer les pages indésirables.',
      },
      {
        title: 'Vérifiez le nouvel ordre des pages',
        description:
          'Parcourez les positions mises à jour de chaque carte pour confirmer que les annexes, les pièces et les pages de garde se trouvent exactement là où elles doivent être.',
      },
      {
        title: 'Enregistrez le PDF organisé',
        description:
          'Cliquez sur Enregistrer le PDF réorganisé pour compiler et télécharger votre document propre.',
      },
      {
        title: 'Astuce : gardez le fichier d’origine',
        description:
          'L’outil ne modifie jamais votre fichier source : gardez-le donc comme sauvegarde. Si un PDF ne se charge pas, vérifiez qu’il n’est pas protégé par mot de passe ou chiffré.',
      },
    ],
    examples: [
      {
        title: 'Supprimer une page de fin vide et avancer une annexe',
        input: 'PDF de 5 pages · Supprimer la page 5 · Déplacer la page 4 en position n° 2',
        output: 'PDF mis à jour de 4 pages avec le contenu vectoriel intact',
        explanation:
          'Reconstruit proprement l’arborescence des pages du document dans l’ordre sélectionné.',
      },
      {
        title: 'Dupliquer une page de formulaire imprimable',
        input: 'PDF de 3 pages · Dupliquer la page 2',
        output: 'PDF de 4 pages avec la page de formulaire répétée deux fois',
        explanation:
          'La copie de page duplique la feuille exacte, utile pour les formulaires ou les feuilles de signature répétés.',
      },
    ],
    benefits: [
      'Combine les miniatures visuelles PDF.js avec la copie de pages pdf-lib sans perte',
      'Protège contre l’enregistrement accidentel d’un PDF vide de 0 page',
      'Affiche à la fois la position de sortie actuelle et l’index de page d’origine',
      'Aucun envoi de fichier pour les dossiers RH, juridiques ou médicaux confidentiels',
    ],
    useCases: [
      'Supprimer les pages vides accidentelles produites par les scanners recto-verso',
      'Déplacer les annexes ou les pièces mal placées dans le bon ordre',
      'Dupliquer les pages de formulaires imprimables ou les feuilles de signature dans un paquet',
      'Nettoyer les PDF combinés avant de les envoyer aux clients',
    ],
    faqs: [
      {
        question: 'Pourquoi les miniatures ne se rendent-elles que pour les 30 premières pages ?',
        answer:
          'Pour garder la RAM du navigateur rapide sur les documents volumineux, les miniatures en direct se rendent pour les 30 premières pages, tandis que chaque page reste entièrement réorganisable et supprimable via sa carte.',
      },
      {
        question: 'La réorganisation des pages aplatit-elle le texte en images ?',
        answer:
          'Non. Les miniatures ne servent qu’à l’aperçu visuel dans l’interface ; le résultat enregistré utilise pdf-lib copyPages() pour préserver le texte vectoriel d’origine et les liens.',
      },
      {
        question: 'Puis-je annuler la suppression de toutes les pages ?',
        answer:
          'L’éditeur exige qu’au moins 1 page reste, et le re-téléchargement du fichier source intact restaure l’original complet à tout moment.',
      },
      {
        question: 'L’outil Réorganiser et Supprimer des Pages PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand je réorganise ses pages ?',
        answer:
          'Non. Votre PDF est traité localement dans votre navigateur et n’est jamais envoyé : les documents confidentiels restent donc sur votre appareil.',
      },
      {
        question: 'Puis-je supprimer plusieurs pages à la fois ?',
        answer:
          'Chaque carte de page a sa propre icône de corbeille : supprimez donc les pages une par une ; le nombre de pages et les positions se mettent à jour immédiatement après chaque suppression.',
      },
      {
        question: 'Puis-je déplacer une page directement au début ou à la fin du PDF ?',
        answer:
          'Utilisez les boutons fléchés à plusieurs reprises pour amener une page à la première ou à la dernière position, en vérifiant sa position de sortie mise à jour sur la carte au fur et à mesure.',
      },
      {
        question: 'Que se passe-t-il si je supprime la mauvaise page par erreur ?',
        answer:
          'Il n’y a pas de bouton d’annulation : téléchargez donc simplement à nouveau votre fichier d’origine intact et refaites les modifications ; l’outil ne modifie jamais votre fichier source.',
      },
      {
        question: 'La réorganisation des pages modifie-t-elle le texte ou les images qu’elles contiennent ?',
        answer:
          'Non. Les pages sont copiées telles quelles avec pdf-lib : le texte vectoriel, les images et les polices conservent donc leur qualité d’origine.',
      },
      {
        question: 'Puis-je dupliquer la même page plusieurs fois ?',
        answer:
          'Oui. Cliquez sur l’icône de copie d’une page autant de fois que nécessaire, par exemple pour répéter un formulaire imprimable ou une feuille de signature dans un paquet.',
      },
      {
        question: 'Quels PDF fonctionnent avec l’outil Réorganiser et Supprimer des Pages PDF ?',
        answer:
          'Tout PDF non chiffré fonctionne. Les PDF protégés par mot de passe ou chiffrés ne peuvent pas être ouverts par cet outil de navigateur.',
      },
      {
        question: 'Combien de pages mon PDF peut-il avoir ?',
        answer:
          'Il n’y a pas de plafond fixe de pages ; les miniatures en direct se rendent pour les 30 premières pages, tandis que chaque page reçoit toujours une carte avec sa position et son index d’origine.',
      },
      {
        question: 'La taille de mon fichier changera-t-elle après la réorganisation des pages ?',
        answer:
          'La suppression de pages rend le fichier plus petit, tandis que la réorganisation seule garde la taille à peu près identique, car le document est reconstruit à partir des mêmes pages.',
      },
      {
        question: 'Puis-je réorganiser les pages d’un PDF numérisé ?',
        answer:
          'Oui. Les pages sont copiées entières, qu’elles contiennent du texte ou des images numérisées : les documents numérisés se réorganisent donc comme n’importe quel autre PDF.',
      },
      {
        question: 'L’outil Réorganiser et Supprimer des Pages PDF fonctionne-t-il sur mobile ?',
        answer:
          'Oui, il fonctionne dans n’importe quel navigateur mobile moderne, même si les cartes de pages et les miniatures sont plus faciles à gérer sur un écran d’ordinateur plus grand.',
      },
      {
        question: 'Puis-je pivoter les pages en les réorganisant ?',
        answer:
          'Non. La rotation est une tâche distincte : utilisez donc d’abord l’outil Rotation de Pages PDF, puis réorganisez ici les pages pivotées.',
      },
      {
        question: 'Comment distinguer les pages dans l’éditeur ?',
        answer:
          'Chaque carte montre un aperçu miniature quand il est disponible, ainsi que sa position de sortie actuelle et son numéro de page d’origine dans le fichier source.',
      },
      {
        question: 'Puis-je fusionner deux PDF ensemble avec cet outil ?',
        answer:
          'Non. Cet outil ne réorganise que les pages d’un seul PDF ; utilisez d’abord l’outil Fusionner des PDF pour combiner des documents distincts.',
      },
      {
        question: 'La suppression de pages supprime-t-elle les signets ou les liens internes ?',
        answer:
          'Le contenu des pages est préservé, mais les signets au niveau du document peuvent ne pas survivre à la reconstruction : vérifiez donc le fichier enregistré avant de le partager.',
      },
      {
        question: 'Quel fichier obtiens-je après avoir enregistré le PDF réorganisé ?',
        answer:
          'Un tout nouveau PDF se télécharge sur votre appareil dans l’ordre de pages choisi, tandis que votre fichier d’origine reste intact sur votre ordinateur.',
      },
    ],
  },
  'pdf-watermark': {
    instructions: [
      {
        title: 'Choisissez votre fichier PDF',
        description:
          'Téléchargez n’importe quel document PDF non chiffré localement en mémoire.',
      },
      {
        title: 'Tapez le texte de votre filigrane',
        description:
          'Saisissez le tampon dont vous avez besoin, comme CONFIDENTIEL, BROUILLON ou NE PAS DISTRIBUER, en caractères latins standard.',
      },
      {
        title: 'Personnalisez le tampon de filigrane',
        description:
          'Choisissez Gris neutre, Indigo de marque ou Rouge tampon, et réglez les curseurs de taille, d’opacité et d’angle jusqu’à ce que le tampon soit correct.',
      },
      {
        title: 'Choisissez les pages à tamponner',
        description:
          'Laissez le réglage par défaut pour filigraner chaque page, ou cochez Première page uniquement quand seule la page de garde a besoin d’un tampon de classification.',
      },
      {
        title: 'Appliquez et téléchargez',
        description:
          'Cochez éventuellement Première page uniquement, puis cliquez sur Appliquer le filigrane et télécharger.',
      },
      {
        title: 'Astuce : vérifiez la lisibilité avant de partager',
        description:
          'Ouvrez le fichier téléchargé et confirmez que le corps du texte reste facile à lire ; si le tampon est trop fort, relancez-le avec une opacité plus faible comme 15 à 22 %.',
      },
    ],
    examples: [
      {
        title: 'Tamponner un brouillon de proposition avant publication',
        input: 'Texte : BROUILLON · Police : 54 pt · Opacité : 22 % · Angle : 40°',
        output: 'Superposition vectorielle BROUILLON diagonale centrée semi-transparente sur chaque page',
        explanation:
          'Utilise l’opacité alpha pour que le texte du corps sous-jacent reste entièrement lisible.',
      },
      {
        title: 'Tamponner uniquement la page de garde',
        input: 'Texte : CONFIDENTIEL · Première page uniquement : coché',
        output: 'Tampon CONFIDENTIEL uniquement sur la page 1 ; les autres pages restent propres',
        explanation:
          'Le mode Première page uniquement convient aux tampons de classification de la page de garde.',
      },
    ],
    benefits: [
      'Utilise une typographie vectorielle HelveticaBold standard nette plutôt que des bitmaps flous',
      'Prend en charge une opacité alpha semi-transparente de 8 % à 65 % pour que le contenu reste lisible',
      'Offre le mode Première page uniquement pour les tampons de classification de page de garde',
      'Garde les brouillons non publiés strictement hors des serveurs cloud externes',
    ],
    useCases: [
      'Marquer les contrats brouillons, les cahiers des charges ou les pitch decks avant la révision externe',
      'Ajouter des mentions CONFIDENTIEL ou USAGE INTERNE UNIQUEMENT aux dossiers RH ou du conseil',
      'Étiqueter des portfolios d’échantillons ou des épreuves d’aperçu',
      'Appliquer des tampons de statut de révision cohérents avant l’archivage',
    ],
    faqs: [
      {
        question: 'Les destinataires peuvent-ils modifier ou supprimer le filigrane dans des éditeurs PDF complets ?',
        answer:
          'Les filigranes de texte dessinés avec pdf-lib sont des objets de contenu vectoriel standard sur la page. Si vous avez besoin de pages aplaties non sélectionnables où les filigranes ne peuvent pas être sélectionnés comme texte, convertissez le PDF filigrané via nos outils PDF en Images et Images en PDF.',
      },
      {
        question: 'Le filigrane fonctionne-t-il sur les pages portrait et paysage ?',
        answer:
          'Oui. Les coordonnées se calculent dynamiquement à partir de la largeur et de la hauteur de chaque page individuelle.',
      },
      {
        question: 'Quels caractères sont pris en charge dans la chaîne de filigrane ?',
        answer:
          'Les caractères WinAnsi standard (ASCII latin et symboles courants d’Europe occidentale) pris en charge par PDF HelveticaBold.',
      },
      {
        question: 'L’outil de filigrane PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand j’ajoute un filigrane ?',
        answer:
          'Non. Le fichier est traité localement dans votre navigateur et n’est jamais envoyé : les brouillons non publiés restent donc privés.',
      },
      {
        question: 'Puis-je filigraner seulement certaines pages d’un PDF ?',
        answer:
          'Vous pouvez filigraner chaque page ou uniquement la première page avec l’option Première page uniquement ; le tamponnage d’une plage médiane personnalisée n’est pas pris en charge.',
      },
      {
        question: 'Quel texte puis-je utiliser comme filigrane PDF ?',
        answer:
          'N’importe quel court libellé en caractères latins standard, comme CONFIDENTIEL, BROUILLON, USAGE INTERNE UNIQUEMENT ou le nom de votre entreprise.',
      },
      {
        question: 'Puis-je utiliser le nom de mon entreprise comme filigrane ?',
        answer:
          'Oui. Tapez le nom de votre entreprise ou de votre marque comme texte de filigrane et il sera tamponné sur les pages choisies.',
      },
      {
        question: 'Puis-je changer la couleur du filigrane PDF ?',
        answer:
          'Oui. Choisissez Gris neutre pour une marque discrète, Indigo de marque pour correspondre à une marque, ou Rouge tampon pour une notice de classification audacieuse.',
      },
      {
        question: 'Quelle transparence le filigrane peut-il avoir ?',
        answer:
          'L’opacité est réglable de 8 % à 65 % : vous pouvez donc garder le tampon visible pendant que le texte en dessous reste entièrement lisible.',
      },
      {
        question: 'Puis-je rendre le filigrane horizontal au lieu de diagonal ?',
        answer:
          'Oui. Réglez le curseur d’angle sur 0 degré pour un tampon droit horizontal, ou choisissez n’importe quel angle jusqu’à une diagonale complète.',
      },
      {
        question: 'Puis-je ajouter un filigrane d’image ou de logo à un PDF ?',
        answer:
          'Non. Cet outil ne tamponne que des filigranes de texte ; les superpositions d’images et de logos ne sont pas prises en charge.',
      },
      {
        question: 'Le filigrane s’imprimera-t-il quand le PDF est imprimé ?',
        answer:
          'Oui. Le filigrane est un vrai contenu vectoriel dessiné sur chaque page : il apparaît donc dans les impressions comme à l’écran.',
      },
      {
        question: 'Le filigranage modifie-t-il le texte d’origine de mon PDF ?',
        answer:
          'Non. Le filigrane est dessiné comme une superposition au-dessus des pages et ne modifie ni ne remplace aucun contenu existant.',
      },
      {
        question: 'Puis-je filigraner un PDF protégé par mot de passe ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'Cet outil peut-il supprimer un filigrane d’un PDF ?',
        answer:
          'Non. Il ne fait qu’ajouter des filigranes ; la suppression d’un filigrane existant nécessite un éditeur PDF complet.',
      },
      {
        question: 'Quelle police le filigrane PDF utilise-t-il ?',
        answer:
          'Les filigranes utilisent une typographie vectorielle HelveticaBold standard nette, qui reste nette à n’importe quelle taille au lieu de devenir floue comme un bitmap.',
      },
      {
        question: 'Le filigrane restera-t-il lisible sur des pages sombres ou chargées ?',
        answer:
          'Cela dépend de l’arrière-plan de la page : choisissez donc une couleur contrastée et une opacité modérée, puis ouvrez le fichier téléchargé pour vérifier le résultat.',
      },
      {
        question: 'Puis-je filigraner un PDF numérisé ?',
        answer:
          'Oui. Le filigrane est dessiné sur chaque page, que la page contienne du texte ou une image numérisée.',
      },
      {
        question: 'L’ajout d’un filigrane rend-il mon fichier PDF beaucoup plus volumineux ?',
        answer:
          'Seulement légèrement. Le texte vectoriel ajoute très peu de données : la taille du fichier augmente donc d’une petite quantité par rapport aux tampons basés sur des images.',
      },
    ],
  },
  'add-pdf-page-numbers': {
    instructions: [
      {
        title: 'Chargez votre document PDF',
        description:
          'Choisissez le fichier PDF non numéroté ou fusionné que vous souhaitez paginer.',
      },
      {
        title: 'Choisissez le format de numéro',
        description:
          'Choisissez « Page 1 sur N » pour les paquets formels, « 1 / N » pour un aspect compact, ou des chiffres seuls pour un pied de page minimal.',
      },
      {
        title: 'Définissez la position et la taille',
        description:
          'Sélectionnez Bas centre, Bas droite, Bas gauche ou Haut droite, et ajustez la taille de police pour que les numéros se placent proprement dans la marge.',
      },
      {
        title: 'Définissez le numéro de départ et le saut de garde',
        description:
          'Modifiez le numéro de départ pour continuer un ensemble en plusieurs volumes, et activez Sauter la page de garde quand la page de titre doit rester propre.',
      },
      {
        title: 'Appliquez et téléchargez',
        description:
          'Cliquez sur Ajouter les numéros de page et télécharger pour exporter le PDF paginé localement.',
      },
      {
        title: 'Astuce : vérifiez les pages aux pieds de page serrés',
        description:
          'Ouvrez le fichier téléchargé et regardez les pages qui ont déjà du texte de pied de page ; si un numéro est trop proche, relancez-le avec une taille de police plus petite.',
      },
    ],
    examples: [
      {
        title: 'Numéroter un paquet fusionné en commençant après une page de garde',
        input: 'PDF de 5 pages · Format : Page 1 sur N · Sauter la page de garde : coché',
        output: 'Page 1 intacte ; pages 2 à 5 tamponnées « Page 1 sur 4 » à « Page 4 sur 4 »',
        explanation:
          'Idéal après avoir combiné des pages de garde et des annexes avec Fusionner des PDF.',
      },
      {
        title: 'Continuer la numérotation d’un volume 2',
        input: 'PDF de 8 pages · Format : 1 / N · Numéro de départ : 15',
        output: 'Pages numérotées de 15 à 22',
        explanation:
          'Le numéro de départ personnalisé permet de continuer un ensemble en plusieurs volumes.',
      },
    ],
    benefits: [
      'Corrige la pagination cassée juste après la fusion de rapports PDF distincts',
      'Prend en charge le saut de la page 1 pour que les couvertures de titre restent propres',
      'Le numéro de départ personnalisable prend en charge les ensembles de documents en plusieurs volumes',
      'Mesure la largeur exacte du texte par taille de page pour un centrage et un alignement à droite nets',
    ],
    useCases: [
      'Paginer les propositions clients et les appels d’offres combinés après Fusionner des PDF',
      'Numéroter les dépôts judiciaires, les annexes ou les chapitres de thèse',
      'Continuer la numérotation séquentielle à partir de la page 15 dans un volume Partie 2',
      'Ajouter des numéros discrets en bas à droite aux guides d’étude imprimés',
    ],
    faqs: [
      {
        question: 'Cela effacera-t-il le texte existant près de la marge inférieure ?',
        answer:
          'L’outil dessine des chiffres nets avec un décalage de marge de 28 pt sans couvrir les arrière-plans existants : inspectez donc les pages qui ont déjà des pieds de page serrés.',
      },
      {
        question: 'Comment « Sauter la page de garde » affecte-t-il le total dans « Page X sur N » ?',
        answer:
          'Quand cette option est activée, la page 1 ne reçoit aucun libellé et les pages restantes comptent proprement de 1 jusqu’à (nombre total de pages − 1) pour que les totaux restent cohérents.',
      },
      {
        question: 'Puis-je commencer la numérotation à la page 10 au lieu de 1 ?',
        answer:
          'Oui. Modifiez le numéro de départ sur 10 pour numéroter les volumes séquentiels à partir de 10.',
      },
      {
        question: 'L’outil Ajouter des numéros de page au PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand j’ajoute des numéros de page ?',
        answer:
          'Non. Le fichier est traité localement dans votre navigateur et n’est jamais envoyé : vos documents restent donc privés.',
      },
      {
        question: 'Quels formats de numéros de page puis-je choisir ?',
        answer:
          'Vous pouvez choisir « Page 1 sur N », le style compact « 1 / N » ou des chiffres seuls sans aucun libellé.',
      },
      {
        question: 'Où sur la page les numéros peuvent-ils apparaître ?',
        answer:
          'Choisissez Bas centre, Bas droite, Bas gauche ou Haut droite, selon l’endroit où vos marges ont de l’espace libre.',
      },
      {
        question: 'Puis-je sauter la numérotation de la page de garde ?',
        answer:
          'Oui. Activez Sauter la page de garde et la page 1 reste propre tandis que la numérotation commence à la page 2.',
      },
      {
        question: 'L’outil renumérote-t-il un PDF qui a déjà des numéros de page ?',
        answer:
          'Non. Il tamponne de nouveaux numéros à côté des existants : supprimez donc d’abord les anciens numéros si vous ne voulez qu’un seul ensemble.',
      },
      {
        question: 'Puis-je changer la taille de police des numéros de page ?',
        answer:
          'Oui. Ajustez le réglage de taille de police pour que les numéros soient lisibles sans encombrer votre pied de page ou votre en-tête.',
      },
      {
        question: 'La numérotation des pages fonctionne-t-elle sur les pages en paysage ?',
        answer:
          'Oui. L’outil mesure la largeur exacte du texte par taille de page : les numéros restent donc centrés ou alignés sur les pages portrait et paysage.',
      },
      {
        question: 'Puis-je numéroter uniquement certaines pages d’un PDF ?',
        answer:
          'Non. La numérotation s’applique à chaque page sauf une page de garde éventuellement sautée ; la numérotation d’une plage personnalisée n’est pas prise en charge.',
      },
      {
        question: 'Que se passe-t-il si mon PDF a déjà des numéros de page ?',
        answer:
          'Les nouveaux numéros sont tamponnés en plus des anciens, ce qui peut sembler doublé : vérifiez donc le résultat et nettoyez d’abord l’original si nécessaire.',
      },
      {
        question: 'Puis-je utiliser des chiffres romains pour les numéros de page ?',
        answer:
          'Non. L’outil numérote les pages uniquement avec des chiffres arabes standard, donc les formats comme les chiffres romains ne sont pas disponibles comme style de numérotation.',
      },
      {
        question: 'Puis-je ajouter des numéros de page à un PDF numérisé ?',
        answer:
          'Oui. Les numéros sont dessinés sur chaque page comme du texte vectoriel, que la page contienne du texte ou une image numérisée.',
      },
      {
        question: 'Puis-je mettre les numéros de page dans l’en-tête au lieu du pied de page ?',
        answer:
          'Oui, choisissez la position Haut droite pour la numérotation d’en-tête ; le placement en haut au centre n’est pas proposé.',
      },
      {
        question: 'Les numéros de page tamponnés seront-ils du texte sélectionnable ?',
        answer:
          'Oui. Les numéros sont dessinés comme du texte vectoriel net : les lecteurs peuvent donc les sélectionner et les copier comme du texte PDF ordinaire.',
      },
      {
        question: 'Puis-je numéroter un PDF protégé par mot de passe ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'Puis-je ajouter un préfixe comme « Section 2 – Page 3 » ?',
        answer:
          'Non. L’outil n’offre que les trois formats de numéros : les préfixes personnalisés ou les libellés de section ne peuvent donc pas être ajoutés.',
      },
      {
        question: 'L’ajout de numéros de page modifie-t-il le contenu de mon PDF ?',
        answer:
          'Non. Seuls les libellés de numéros sont ajoutés ; votre texte, vos images et votre mise en page existants restent exactement tels qu’ils étaient.',
      },
    ],
  },
  'pdf-metadata-editor': {
    instructions: [
      {
        title: 'Chargez un fichier PDF',
        description:
          'Sélectionnez n’importe quel PDF non chiffré ; les champs de métadonnées existants et les dimensions de page se remplissent automatiquement.',
      },
      {
        title: 'Consultez les métadonnées actuelles',
        description:
          'Lisez les champs Titre, Auteur, Sujet, Mots-clés, Créateur et Producteur, ainsi que le nombre de pages et les dimensions exactes des pages, pour voir ce qui est stocké.',
      },
      {
        title: 'Modifiez ou nettoyez les champs',
        description:
          'Mettez à jour le titre, l’auteur, le sujet et les mots-clés pour plus de clarté, ou cliquez sur Supprimer tous les champs de métadonnées pour la confidentialité.',
      },
      {
        title: 'Supprimez toutes les métadonnées pour la confidentialité',
        description:
          'Utilisez Supprimer tous les champs de métadonnées avant de partager un fichier publiquement pour effacer les noms d’auteurs et les versions de logiciels en un clic.',
      },
      {
        title: 'Enregistrez et téléchargez',
        description:
          'Cliquez sur Enregistrer les métadonnées et télécharger le PDF pour exporter une copie fraîchement balisée.',
      },
      {
        title: 'Astuce : vérifiez le fichier enregistré',
        description:
          'Rouvrez le PDF téléchargé dans cet outil pour confirmer le nouveau titre et les champs d’auteur effacés, car les modifications ne s’appliquent qu’à la copie enregistrée.',
      },
    ],
    examples: [
      {
        title: 'Anonymiser un PDF exporté depuis Word ou Illustrator',
        input: 'Auteur : « John Doe » · Créateur : « Microsoft® Word 2021 »',
        output: 'Cliquez sur Supprimer tous les champs de métadonnées → Enregistrez un PDF propre avec Auteur/Créateur vides',
        explanation:
          'Supprime les noms d’employés et les versions de logiciels avant l’hébergement web public.',
      },
      {
        title: 'Corriger le titre affiché dans l’onglet du navigateur',
        input: 'Titre : « Sans titre-2 » · Fichier : rapport-annuel.pdf',
        output: 'Titre : « Rapport annuel 2025 » → l’onglet du navigateur affiche le bon titre',
        explanation:
          'Les navigateurs affichent la propriété Titre du document PDF plutôt que le nom du fichier.',
      },
    ],
    benefits: [
      'Expose les noms d’auteurs cachés et les chaînes de logiciels que les navigateurs montrent dans les onglets et les propriétés',
      'La suppression en un clic de tous les champs de métadonnées efface les 6 balises standard du dictionnaire Info',
      'Met à jour proprement le titre, le sujet et les mots-clés séparés par des virgules, pertinents pour le référencement',
      'Affiche les dimensions exactes des points PDF (`largeur × hauteur pt`) avec le nombre de pages',
    ],
    useCases: [
      'Nettoyer les noms d’employés et les versions d’outils locaux avant de publier des PDF publics',
      'Corriger les noms de fichiers maladroits comme « Sans titre-2 » affichés dans les onglets PDF Chrome/Safari via le titre',
      'Ajouter des balises de sujet et de mots-clés consultables aux livres blancs téléchargeables',
      'Auditer localement les soumissions PDF de fournisseurs ou de candidats',
    ],
    faqs: [
      {
        question: 'Pourquoi l’onglet de mon navigateur affiche-t-il le mauvais titre quand j’ouvre un PDF ?',
        answer:
          'Les navigateurs affichent la propriété interne Titre du document PDF plutôt que le nom de fichier .pdf si une balise Titre est intégrée. Modifier le titre ici corrige la façon dont les navigateurs étiquettent l’onglet.',
      },
      {
        question: 'L’effacement des champs de métadonnées affecte-t-il le contenu visible des pages ?',
        answer:
          'Non. La suppression ou la mise à jour du titre, de l’auteur, du sujet, des mots-clés, du créateur et du producteur ne met à jour que le dictionnaire Info du PDF sans modifier les pages visibles.',
      },
      {
        question: 'Les modifications sont-elles chiffrées ou journalisées quelque part ?',
        answer:
          'Jamais. La lecture et l’écriture des métadonnées s’exécutent uniquement dans la mémoire du client via pdf-lib.',
      },
      {
        question: 'L’éditeur de métadonnées PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand je modifie ses métadonnées ?',
        answer:
          'Non. La lecture et l’écriture des métadonnées se font uniquement dans votre navigateur : vos fichiers ne sont donc jamais envoyés ni journalisés.',
      },
      {
        question: 'Quels champs de métadonnées puis-je modifier dans un PDF ?',
        answer:
          'Vous pouvez consulter et modifier le titre, l’auteur, le sujet, les mots-clés, le créateur et le producteur — les six balises standard du dictionnaire Info du PDF.',
      },
      {
        question: 'Puis-je supprimer uniquement le nom de l’auteur d’un PDF ?',
        answer:
          'Oui. Effacez simplement le champ Auteur et enregistrez, en laissant le titre, le sujet et les autres balises intacts.',
      },
      {
        question: 'Que fait « Supprimer tous les champs de métadonnées » ?',
        answer:
          'Il efface les six balises standard du dictionnaire Info à la fois, supprimant les noms d’auteurs, les chaînes de logiciels et les titres avant que vous partagiez le fichier.',
      },
      {
        question: 'La modification du titre peut-elle changer l’apparence du PDF dans les résultats de recherche ?',
        answer:
          'Modifier le titre change le libellé que les navigateurs affichent dans l’onglet PDF, mais cela ne garantit aucun classement ni extrait de recherche particulier.',
      },
      {
        question: 'La suppression des métadonnées supprime-t-elle les signets ou les liens ?',
        answer:
          'Non. La suppression ne met à jour que le dictionnaire Info : les signets, les liens et le contenu visible des pages restent inchangés.',
      },
      {
        question: 'Puis-je consulter les métadonnées PDF sans rien modifier ?',
        answer:
          'Oui. Les champs se remplissent dès que vous chargez un fichier, et rien n’est modifié sauf si vous cliquez sur Enregistrer les métadonnées et télécharger le PDF.',
      },
      {
        question: 'Que sont les champs Créateur et Producteur dans un PDF ?',
        answer:
          'Créateur nomme l’application qui a créé le document, comme Microsoft Word, tandis que Producteur nomme le logiciel qui l’a converti en PDF.',
      },
      {
        question: 'Puis-je ajouter des mots-clés à un PDF pour une meilleure recherche ?',
        answer:
          'Oui. Saisissez des mots-clés séparés par des virgules dans l’éditeur de métadonnées, et ils sont stockés dans le PDF pour les outils de recherche qui les lisent.',
      },
      {
        question: 'La taille du fichier changera-t-elle après la modification des métadonnées PDF ?',
        answer:
          'Seulement d’une infime quantité. Les métadonnées sont un petit bloc de texte : leur modification ou leur suppression affecte donc à peine la taille globale du fichier.',
      },
      {
        question: 'Puis-je modifier les métadonnées d’un PDF numérisé ?',
        answer:
          'Oui. Les métadonnées vivent dans l’en-tête du document et sont indépendantes du contenu des pages : les PDF numérisés fonctionnent donc comme ceux basés sur du texte.',
      },
      {
        question: 'Puis-je modifier les métadonnées XMP avec cet outil ?',
        answer:
          'Non. Cet outil ne modifie que les six balises standard du dictionnaire Info ; les paquets de métadonnées XMP étendus ne sont pas modifiés.',
      },
      {
        question: 'Puis-je modifier les métadonnées d’un PDF chiffré ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'L’éditeur de métadonnées PDF affiche-t-il la taille de page ?',
        answer:
          'Oui. Il affiche les dimensions exactes des pages en points (largeur × hauteur) avec le nombre de pages pour chaque fichier chargé.',
      },
      {
        question: 'La suppression des métadonnées supprimera-t-elle toutes les informations personnelles d’un PDF ?',
        answer:
          'Elle supprime les six balises Info, mais les détails personnels tapés visiblement sur les pages elles-mêmes, comme un nom dans le corps du texte, restent.',
      },
      {
        question: 'Dois-je télécharger le fichier pour appliquer les modifications de métadonnées ?',
        answer:
          'Oui. Cliquer sur Enregistrer les métadonnées et télécharger le PDF crée un nouveau fichier avec vos modifications, tandis que votre fichier d’origine reste intact.',
      },
    ],
  },
  'pdf-text-extractor': {
    instructions: [
      {
        title: 'Sélectionnez un document PDF',
        description:
          'Choisissez n’importe quel fichier PDF non chiffré ; PDF.js analyse localement le flux de texte intégré de chaque page.',
      },
      {
        title: 'Consultez le texte extrait',
        description:
          'Lisez le résultat et vérifiez le nombre de pages, le nombre de mots et la taille en octets UTF-8 indiqués pour confirmer que l’extraction semble complète.',
      },
      {
        title: 'Activez les marqueurs de page',
        description:
          'Gardez les en-têtes de page activés pour les citations structurées ou décochez-les pour une prose continue.',
      },
      {
        title: 'Vérifiez les pages numérisées',
        description:
          'Si l’outil signale 0 caractère, le PDF est probablement un fichier numérisé composé uniquement d’images, sans couche de texte à extraire.',
      },
      {
        title: 'Copiez ou exportez en .txt',
        description:
          'Copiez le texte extrait dans votre éditeur ou téléchargez une transcription .txt propre en UTF-8.',
      },
      {
        title: 'Astuce : corrigez le texte brouillé ou manquant',
        description:
          'Si les caractères semblent incorrects, le PDF source utilise peut-être une police personnalisée sans mappage Unicode approprié ; essayez le document d’origine ou une copie fraîchement exportée.',
      },
    ],
    examples: [
      {
        title: 'Extraire une copie lisible d’un livre blanc de plusieurs pages',
        input: 'livre-blanc.pdf (8 pages, couche de texte intégrée)',
        output: 'Texte brut structuré avec des séparateurs --- Page 1 ---, nombre de mots et téléchargement .txt',
        explanation:
          'Extrait proprement les éléments de texte PDF sous-jacents sans les problèmes de surlignage et de copie manuels.',
      },
      {
        title: 'Vérifier si un PDF archivé contient du texte consultable',
        input: 'archive.pdf (12 pages)',
        output: 'Texte extrait avec 0 caractère sur certaines pages — pages numérisées détectées',
        explanation:
          'L’outil signale honnêtement les pages sans couche de texte au lieu de renvoyer un résultat vide et trompeur.',
      },
    ],
    benefits: [
      'Avertit en toute transparence si un PDF est numérisé ou composé uniquement d’images (couche de texte 0, OCR non exécuté hors ligne)',
      'Préserve des sauts de page propres via des marqueurs --- Page N --- activables',
      'Indique le nombre de pages extraites, le nombre de mots et la taille en octets UTF-8',
      'Première étape idéale avant d’envoyer le texte au compteur de mots ou à Rechercher et remplacer',
    ],
    useCases: [
      'Extraire du texte brut propre des livres blancs, programmes ou documentations PDF',
      'Vérifier le nombre de mots des essais PDF formatés avec notre compteur de mots',
      'Vérifier si un PDF archivé contient une couche de texte consultable plutôt que des numérisations plates',
      'Exporter les ordres du jour de réunions PDF en notes Markdown en texte brut',
    ],
    faqs: [
      {
        question: 'Pourquoi un PDF numérisé a-t-il extrait 0 caractère ?',
        answer:
          'Les PDF de scanner enregistrent souvent les pages uniquement comme des images bitmap plates sans couche de texte OCR intégrée. Cet outil de navigateur lit directement les flux de texte PDF existants et indique honnêtement que l’OCR hors ligne n’est pas inclus.',
      },
      {
        question: 'Pourquoi les tableaux complexes à plusieurs colonnes passent-ils parfois à la ligne ?',
        answer:
          'Les fichiers PDF stockent le texte positionné par coordonnées X/Y plutôt que sous forme de tableaux HTML sémantiques : PDF.js émet donc les éléments de texte dans l’ordre du flux avec des indices de fin de ligne.',
      },
      {
        question: 'Mon PDF est-il envoyé pour extraire le texte ?',
        answer:
          'Non. PDF.js analyse et extrait les flux de texte strictement dans l’onglet de votre navigateur.',
      },
      {
        question: 'L’extracteur de texte PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Vers quels formats de fichier puis-je exporter le texte extrait ?',
        answer:
          'Vous pouvez copier le texte brut dans votre presse-papiers ou le télécharger comme une transcription .txt propre en UTF-8.',
      },
      {
        question: 'Puis-je extraire le texte d’une seule page d’un PDF ?',
        answer:
          'L’extraction couvre tout le document, mais les marqueurs facultatifs --- Page N --- permettent de trouver et de copier facilement juste la section dont vous avez besoin.',
      },
      {
        question: 'Pourquoi certains textes manquent-ils dans le résultat extrait ?',
        answer:
          'Le texte stocké sous forme d’image, ou dessiné avec une police personnalisée sans carte Unicode, n’a pas de flux de texte lisible que PDF.js puisse extraire.',
      },
      {
        question: 'L’extracteur de texte PDF inclut-il l’OCR pour les pages numérisées ?',
        answer:
          'Non. Il lit uniquement la couche de texte intégrée existante et n’exécute pas d’OCR : les pages numérisées composées uniquement d’images ne renvoient donc aucun texte.',
      },
      {
        question: 'Puis-je extraire le texte d’un PDF dans une autre langue ?',
        answer:
          'Oui. Le texte Unicode intégré est extrait tel quel : les documents non français fonctionnent tant que le PDF stocke une couche de texte appropriée.',
      },
      {
        question: 'L’extraction préserve-t-elle le texte en gras ou les titres ?',
        answer:
          'Non. Le résultat est uniquement du texte brut : le gras, l’italique, les titres et les autres formatages ne sont donc pas repris.',
      },
      {
        question: 'Quelle taille de PDF puis-je extraire ?',
        answer:
          'Il n’y a pas de plafond de taille indiqué, et l’extraction s’exécute localement ; les très gros documents peuvent simplement prendre un peu plus de temps à analyser.',
      },
      {
        question: 'Puis-je copier le texte extrait sans télécharger de fichier ?',
        answer:
          'Oui. Utilisez le bouton de copie en un clic pour coller le texte directement dans votre éditeur, votre application de notes ou votre document.',
      },
      {
        question: 'Que sont les marqueurs « --- Page N --- » dans le résultat ?',
        answer:
          'Ce sont des en-têtes facultatifs qui marquent le début de chaque page, pour que vous puissiez citer les pages avec précision ; désactivez-les pour une prose continue.',
      },
      {
        question: 'L’extracteur de texte PDF affiche-t-il un nombre de mots ?',
        answer:
          'Oui. Il indique le nombre de pages extraites, le nombre de mots et la taille en octets UTF-8 à côté du texte.',
      },
      {
        question: 'Puis-je extraire le texte d’un PDF protégé par mot de passe ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'Les hyperliens seront-ils extraits du PDF ?',
        answer:
          'Le texte de lien visible est extrait quand il existe sous forme de texte, mais les liens eux-mêmes ne sont pas exportés comme des URL cliquables.',
      },
      {
        question: 'Puis-je utiliser le texte extrait dans Word ou Google Docs ?',
        answer:
          'Oui. Collez directement le texte copié, ou ouvrez le fichier .txt téléchargé et copiez son contenu dans n’importe quel traitement de texte.',
      },
      {
        question: 'Pourquoi certains caractères semblent-ils brouillés dans le texte extrait ?',
        answer:
          'Certains PDF intègrent des polices personnalisées sans mappage Unicode approprié : PDF.js ne peut donc pas associer les glyphes aux bons caractères.',
      },
      {
        question: 'L’extraction de texte modifie-t-elle mon PDF d’origine ?',
        answer:
          'Non. L’extraction est en lecture seule ; votre fichier PDF d’origine n’est jamais modifié.',
      },
      {
        question: 'L’extracteur de texte PDF peut-il extraire le texte des formulaires et des annotations ?',
        answer:
          'Il extrait la couche de texte intégrée principale de chaque page ; les valeurs de formulaires remplis et les notes d’annotation peuvent ne pas apparaître si elles sont stockées séparément.',
      },
    ],
  },
};
