// Detail content for FR tools — split out of
// src/locales/fr/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
    instructions: [
      {
        title: 'Choisissez une image source',
        description:
          'Sélectionnez une image PNG, JPG, WebP ou GIF depuis votre appareil pour décoder ses dimensions et sa taille d’origine en octets.',
      },
      {
        title: 'Choisissez le format cible, le plafond de largeur et la qualité',
        description:
          'Sélectionnez WebP ou JPG pour des économies spectaculaires en octets, appliquez éventuellement un plafond de largeur maximale (par exemple 1 920 px ou 1 280 px) et réglez le curseur de qualité de 10 % à 100 %.',
      },
      {
        title: 'Lancez la compression',
        description:
          'Cliquez sur Compresser pour réencoder l’image localement dans votre navigateur et voir instantanément la nouvelle taille en octets.',
      },
      {
        title: 'Comparez avant et après',
        description:
          'Vérifiez l’aperçu côte à côte et les économies exactes en octets et en pourcentage pour vous assurer que la qualité reste bonne.',
      },
      {
        title: 'Téléchargez le fichier compressé',
        description:
          'Cliquez sur Télécharger pour enregistrer l’image optimisée sur votre appareil, puis répétez le processus pour un autre fichier quand vous en avez besoin.',
      },
      {
        title: 'Astuce : la sortie est plus grosse que l’entrée ?',
        description:
          'Si un petit PNG grossit après compression, passez le format de sortie en WebP ou JPG, ou baissez légèrement le curseur de qualité, puis compressez de nouveau.',
      },
    ],
    examples: [
      {
        title: 'Optimiser une photo principale de 2,4 Mo pour un article de blog',
        input: 'JPG 3840×2160 · Sortie : WebP · Largeur max : 1280 px · Qualité : 80 %',
        output: 'WebP 1280×720, généralement ~85–140 Ko (-94 % de poids)',
        explanation: 'Combiner le plafonnement des dimensions avec la compression WebP moderne accélère considérablement le Largest Contentful Paint.',
      },
      {
        title: 'Préparer une capture d’écran pour un e-mail',
        input: 'PNG 1,8 Mo · Sortie : JPG · Qualité : 75 %',
        output: 'JPG d’environ 250 Ko, prêt à joindre à un e-mail',
        explanation: 'Le passage en JPG avec une qualité modérée suffit pour les captures partagées par e-mail.',
      },
    ],
    benefits: [
      'Zéro envoi vers un serveur : les graphiques de produits non publiés et les photos privées restent entièrement locaux',
      'Prend en charge le réencodage WebP, JPEG (avec remplissage blanc automatique de l’alpha) et PNG',
      'Affiche instantanément les tailles réelles avant et après ainsi que les économies en pourcentage',
      'Les plafonds de largeur maximale facultatifs redimensionnent les photos d’appareil trop grandes en une passe',
    ],
    useCases: [
      'Réduire les bannières principales et les captures d’écran pour améliorer les Core Web Vitals et le LCP',
      'Préparer des pièces jointes plus légères pour les e-mails, portails et envois CMS',
      'Convertir de lourdes captures d’écran brutes en ressources WebP légères pour le web',
      'Vérifier rapidement le compromis optimal entre qualité et fidélité visuelle',
    ],
    faqs: [
      {
        question: 'Pourquoi compresser un petit PNG en PNG augmente-t-il parfois sa taille ?',
        answer:
          'Le Canvas du navigateur réencode les PNG avec des flux DEFLATE standard sans perte, sans les outils de quantification de palette spécialisés comme pngquant. Passer le format de sortie en WebP ou JPG réduit généralement la taille de façon spectaculaire.',
      },
      {
        question: 'Mes photos sont-elles envoyées vers un serveur de compression externe ?',
        answer:
          'Non. Tout le décodage, le redimensionnement et le réencodage Canvas s’exécutent strictement dans la mémoire de votre navigateur.',
      },
      {
        question: 'Que deviennent les arrière-plans transparents si je choisis JPG ?',
        answer:
          'Comme le JPEG ne prend pas en charge la transparence alpha, les zones transparentes sont proprement remplies de blanc uni (#ffffff) avant l’encodage.',
      },
      {
        question: 'Le compresseur d’images est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, sans filigrane et sans limite sur le nombre d’images que vous compressez.',
      },
      {
        question: 'Quels formats d’image puis-je compresser ?',
        answer:
          'Vous pouvez compresser des images PNG, JPG, WebP et GIF, et télécharger le résultat en WebP, JPG ou PNG.',
      },
      {
        question: 'De combien le compresseur d’images peut-il réduire ma photo ?',
        answer:
          'Les économies dépendent du format d’origine et du réglage de qualité, mais les photos converties en WebP à 80 % de qualité rétrécissent souvent de 50 à 90 %.',
      },
      {
        question: 'Compresser mon image réduira-t-il sa qualité ?',
        answer:
          'Les formats avec perte comme WebP et JPG échangent un peu de détail contre des fichiers beaucoup plus petits. Utilisez le curseur de qualité et l’aperçu pour trouver l’équilibre qui vous convient, ou gardez le PNG pour des résultats sans perte.',
      },
      {
        question: 'Le compresseur d’images redimensionne-t-il mon image ?',
        answer:
          'Seulement si vous définissez un plafond de largeur maximale. Sinon, les dimensions en pixels restent les mêmes et seule la taille du fichier change.',
      },
      {
        question: 'Puis-je compresser des images pour des pièces jointes d’e-mail ?',
        answer:
          'Oui, compresser d’abord rend les grandes photos assez petites pour tenir dans les limites de pièces jointes des e-mails, sans les répartir sur plusieurs messages.',
      },
      {
        question: 'Quel réglage de qualité choisir pour les images de site web ?',
        answer:
          'Une qualité de 75 à 85 % en WebP paraît généralement presque identique à l’original tout en gardant des fichiers assez petits pour des chargements de page rapides.',
      },
      {
        question: 'Pourquoi convertir JPG en WebP lors de la compression ?',
        answer:
          'WebP utilise une compression plus efficace que JPG : la même photo, à qualité visuelle égale, est donc généralement beaucoup plus petite.',
      },
      {
        question: 'Puis-je compresser plusieurs images à la fois ?',
        answer:
          'Le compresseur traite une image à la fois, pour que vous puissiez régler finement la qualité, la largeur et le format de chaque photo avant de la télécharger.',
      },
      {
        question: 'La compression fonctionne-t-elle hors ligne ?',
        answer:
          'Oui, une fois la page chargée, toute la compression s’exécute localement dans votre navigateur : elle fonctionne donc sans connexion Internet.',
      },
      {
        question: 'Mon image compressée aura-t-elle un filigrane ?',
        answer:
          'Non, les images téléchargées ne contiennent jamais de filigrane ni de marque.',
      },
      {
        question: 'Quel est le meilleur format pour compresser des captures d’écran ?',
        answer:
          'WebP donne généralement les plus petits fichiers pour les captures d’écran. Utilisez le PNG uniquement quand vous avez besoin d’une qualité sans perte parfaite au pixel près.',
      },
      {
        question: 'Puis-je compresser une image sans changer ses dimensions ?',
        answer:
          'Oui, laissez le plafond de largeur maximale non défini et l’outil conserve la largeur et la hauteur d’origine tout en réduisant seulement la taille du fichier.',
      },
      {
        question: 'Le compresseur d’images conserve-t-il les métadonnées de l’image ?',
        answer:
          'Le réencodage via Canvas du navigateur supprime généralement les métadonnées EXIF comme les réglages de l’appareil et la localisation, ce qui aide aussi à réduire le fichier.',
      },
      {
        question: 'Puis-je utiliser le compresseur d’images sur mon téléphone ?',
        answer:
          'Oui, il fonctionne dans n’importe quel navigateur mobile moderne. Choisissez une image dans votre photothèque et téléchargez le résultat compressé de la même façon.',
      },
      {
        question: 'Quelle est la taille maximale d’image que je peux compresser ?',
        answer:
          'Il n’y a pas de limite fixe côté serveur puisque rien n’est envoyé. Les très grandes images sont limitées uniquement par la mémoire de votre appareil et la taille du Canvas du navigateur.',
      },
      {
        question: 'Comment compresser une image à moins de 100 Ko ?',
        answer:
          'Choisissez la sortie WebP, définissez une largeur maximale comme 1 280 px, et baissez le curseur de qualité étape par étape jusqu’à ce que la taille de fichier affichée passe sous 100 Ko.',
      },
    ],
  },
  'image-resizer': {
    instructions: [
      {
        title: 'Chargez votre image',
        description:
          'Envoyez une image PNG, JPG, WebP ou GIF pour lire sa largeur et sa hauteur d’origine en pixels.',
      },
      {
        title: 'Définissez la largeur, la hauteur et le mode d’ajustement',
        description:
          'Saisissez des pixels personnalisés (avec verrouillage du ratio facultatif) ou sélectionnez un préréglage social, puis choisissez Center Cover-Crop ou Étirement/Échelle exacte.',
      },
      {
        title: 'Choisissez un format de sortie',
        description:
          'Choisissez PNG pour la transparence, JPG pour les photos ou WebP pour le fichier le plus petit avant le rendu.',
      },
      {
        title: 'Rendez l’image redimensionnée',
        description:
          'Cliquez sur Rendre l’image redimensionnée pour générer la nouvelle version à vos dimensions exactes en pixels.',
      },
      {
        title: 'Vérifiez le résultat et téléchargez',
        description:
          'Inspectez l’aperçu pour la netteté et le recadrage, vérifiez la taille du fichier, puis cliquez sur Télécharger pour l’enregistrer.',
      },
      {
        title: 'Astuce : l’image semble étirée ou floue ?',
        description:
          'Activez le verrouillage du ratio ou passez en Center Cover-Crop pour éviter la distorsion, et évitez de suréchantillonner bien au-delà de la taille d’origine.',
      },
    ],
    examples: [
      {
        title: 'Recadrer une capture d’écran haute en carte Open Graph 1200×630',
        input: 'Capture 1440×1600 · Préréglage : OG Share (1200×630) · Ajustement : Center Cover-Crop',
        output: 'Carte nette 1200×630 centrée verticalement, sans écrasement ni distorsion.',
        explanation: 'Le recadrage cover met à l’échelle proportionnellement jusqu’à remplir le cadre cible, en rognant uniformément les bords excédentaires.',
      },
      {
        title: 'Créer un avatar carré 512×512 depuis une photo portrait',
        input: 'Photo 3024×4032 · Préréglage : Avatar (512×512) · Ajustement : Center Cover-Crop',
        output: 'Avatar carré 512×512 centré sur le visage, sans déformation',
        explanation: 'Le recadrage centré conserve les proportions et coupe les excédents haut et bas.',
      },
    ],
    benefits: [
      'Préréglages en un clic Open Graph, YouTube HD, Carré et Avatar en pixels',
      'Le Center Cover-Crop évite les étirements disgracieux quand on change de ratio',
      'La qualité imageSmoothingQuality élevée de Canvas préserve la netteté de la typographie et des lignes',
      'Exporte directement en PNG, JPG ou WebP avec une lecture réelle de la taille du fichier',
    ],
    useCases: [
      'Créer des cartes og:image 1200×630 pour les articles de blog et les pages d’accueil',
      'Préparer des photos produits 1080×1080 et des avatars de profil 512×512',
      'Réduire les captures d’écran haute densité avant de les ajouter à la documentation',
      'Générer des dimensions exactes de héros correspondant aux exigences des modèles CMS',
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre Center Cover-Crop et Étirement / Échelle exacte ?',
        answer:
          'Center Cover-Crop préserve les proportions naturelles et rogne symétriquement les bords débordants quand le nouveau ratio diffère. L’échelle exacte force toute l’image d’origine dans la largeur et la hauteur cibles.',
      },
      {
        question: 'Puis-je suréchantillonner proprement une petite photo en 4K ?',
        answer:
          'L’interpolation Canvas peut exporter des grilles de pixels plus grandes, mais le suréchantillonnage au-delà de la résolution native ne peut pas inventer les fins détails manquants.',
      },
      {
        question: 'Quelle est la dimension de sortie maximale prise en charge ?',
        answer:
          'Les entrées sont plafonnées à 8 000 px par axe pour rester en sécurité dans les limites de mémoire Canvas du navigateur.',
      },
      {
        question: 'Le redimensionneur d’images est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans inscription, sans filigrane et sans limite sur le nombre d’images que vous redimensionnez.',
      },
      {
        question: 'Quelle est la différence entre redimensionner et recadrer une image ?',
        answer:
          'Redimensionner change les dimensions en pixels de toute l’image, tandis que recadrer coupe une partie de l’image. Cet outil peut faire les deux, y compris le recadrage cover centré.',
      },
      {
        question: 'Le redimensionneur d’images peut-il créer une image 1200x630 pour le partage social ?',
        answer:
          'Oui, choisissez le préréglage Open Graph (1200×630) et l’outil dimensionne votre image exactement pour les aperçus de liens sur les plateformes sociales.',
      },
      {
        question: 'Comment redimensionner une image sans l’étirer ?',
        answer:
          'Gardez le verrouillage du ratio activé ou utilisez le Center Cover-Crop, pour que l’outil mette à l’échelle proportionnellement au lieu d’écraser l’image.',
      },
      {
        question: 'Puis-je redimensionner une image en carré 1080x1080 ?',
        answer:
          'Oui, choisissez le préréglage Carré ou saisissez 1080 pour la largeur et la hauteur avec le Center Cover-Crop activé.',
      },
      {
        question: 'Redimensionner une image réduit-il sa taille de fichier ?',
        answer:
          'Généralement oui, car moins de pixels signifient moins de données, surtout si vous exportez aussi en WebP ou JPG.',
      },
      {
        question: 'Quels formats d’image puis-je redimensionner ?',
        answer:
          'Vous pouvez redimensionner des images PNG, JPG, WebP et GIF et les exporter en PNG, JPG ou WebP.',
      },
      {
        question: 'Redimensionner rendra-t-il mon image floue ?',
        answer:
          'La réduction d’échelle reste généralement nette grâce au lissage Canvas haute qualité. Le suréchantillonnage au-delà de la taille d’origine peut adoucir les fins détails.',
      },
      {
        question: 'Puis-je redimensionner une image pour une photo de profil ?',
        answer:
          'Oui, utilisez le préréglage Avatar (512×512) avec le Center Cover-Crop pour obtenir une photo de profil parfaitement carrée.',
      },
      {
        question: 'Qu’est-ce que le Center Cover-Crop dans le redimensionneur d’images ?',
        answer:
          'Il met l’image à l’échelle jusqu’à remplir le cadre cible, puis rogne uniformément les bords débordants depuis le centre pour que rien ne paraisse étiré.',
      },
      {
        question: 'Le redimensionneur d’images envoie-t-il mes photos quelque part ?',
        answer:
          'Non, tout le redimensionnement se fait localement dans votre navigateur et vos images ne quittent jamais votre appareil.',
      },
      {
        question: 'Puis-je redimensionner une image sur mon téléphone ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles. Envoyez une photo, saisissez les nouvelles dimensions et téléchargez le résultat.',
      },
      {
        question: 'Que devient la transparence quand je redimensionne un PNG ?',
        answer:
          'La transparence est préservée tant que vous exportez en PNG ou WebP. Exporter en JPG remplit les zones transparentes de blanc.',
      },
      {
        question: 'Puis-je redimensionner plusieurs images à la même taille ?',
        answer:
          'L’outil redimensionne une image à la fois. Répétez le même préréglage ou les mêmes dimensions pour chaque image afin de les garder cohérentes.',
      },
      {
        question: 'Quelle est la plus grande image que le redimensionneur peut gérer ?',
        answer:
          'Les entrées sont plafonnées à 8 000 px par côté pour rester dans les limites de mémoire Canvas du navigateur.',
      },
      {
        question: 'Comment redimensionner une image pour les miniatures YouTube ?',
        answer:
          'Choisissez le préréglage YouTube HD (1280×720) pour que votre miniature corresponde à la taille 16:9 recommandée.',
      },
      {
        question: 'Pourquoi le fichier de mon image redimensionnée est-il encore volumineux ?',
        answer:
          'La taille en pixels n’est qu’une partie de l’histoire. Exportez en WebP ou JPG plutôt qu’en PNG, ou utilisez ensuite le compresseur d’images pour réduire davantage le fichier.',
      },
    ],
  },
  'image-format-converter': {
    instructions: [
      {
        title: 'Choisissez le format cible et les options',
        description:
          'Sélectionnez la sortie PNG, JPG ou WebP, définissez la qualité avec perte si applicable, et choisissez une couleur de fond mate quand vous convertissez des images transparentes en JPG.',
      },
      {
        title: 'Sélectionnez une ou plusieurs images',
        description:
          'Chargez un seul fichier ou un lot de plusieurs fichiers pour rendre chaque image proprement à sa pleine résolution native.',
      },
      {
        title: 'Vérifiez l’aperçu de chaque fichier',
        description:
          'Examinez les dimensions et la taille estimée de chaque image convertie avant de télécharger quoi que ce soit.',
      },
      {
        title: 'Convertissez le lot',
        description:
          'L’outil rend chaque image à sa pleine résolution native dans le format sélectionné, directement dans votre navigateur.',
      },
      {
        title: 'Téléchargez les ressources converties',
        description:
          'Comparez les dimensions et la nouvelle taille en octets de chaque fichier, puis téléchargez vos images converties individuellement.',
      },
      {
        title: 'Astuce : les zones transparentes sont devenues noires ?',
        description:
          'Si un PNG converti en JPG affiche du noir là où il était transparent, reconvertissez avec une couleur de remplissage mate comme le blanc ou la couleur de votre marque.',
      },
    ],
    examples: [
      {
        title: 'Aplatir un logo SVG/PNG transparent sur du bleu marine de marque pour JPG',
        input: 'logo.png transparent · Cible : JPG (90 %) · Remplissage : #FFFFFF',
        output: 'logo.jpg avec fond blanc propre et zéro artefact noir de transparence',
        explanation: 'Remplir explicitement le fond Canvas avant de dessiner évite les halos noirs quand on convertit des PNG alpha en JPEG.',
      },
      {
        title: 'Convertir des captures WebP téléchargées en PNG universel',
        input: 'Lot de 12 captures .webp · Cible : PNG',
        output: '12 fichiers PNG à pleine résolution, prêts pour un logiciel ancien',
        explanation: 'La conversion par lots traite toutes les images au même format cible en une seule passe.',
      },
    ],
    benefits: [
      'Traite des lots de plusieurs images à pleine résolution sans files d’attente serveur',
      'La couleur de remplissage de fond JPEG configurable évite les vilains remplissages noirs de transparence',
      'Convertit les téléchargements WebP en fichiers PNG ou JPG universellement acceptés',
      'Rend les fichiers SVG vectoriels directement en images raster PNG ou WebP nettes',
    ],
    useCases: [
      'Convertir des fichiers .webp téléchargés en .png ou .jpg pour des logiciels anciens',
      'Produire par lots des ressources .webp modernes pour des sites statiques et des CDN',
      'Exporter des PNG nets depuis des icônes de marque SVG pour des diapositives ou des publications sociales',
      'Comparer les différences de taille de format entre PNG, JPG et WebP côte à côte',
    ],
    faqs: [
      {
        question: 'Peut-on convertir des photos Apple HEIC ?',
        answer:
          'Le décodage HEIC dépend de la prise en charge native du navigateur (Safari prend en charge HEIC nativement, tandis que Chrome et Firefox exigent généralement des entrées PNG, JPG, WebP, SVG ou GIF).',
      },
      {
        question: 'Convertir JPG en PNG améliore-t-il les détails perdus de la photo ?',
        answer:
          'Non. Convertir un JPG déjà compressé en PNG le préserve sans perte à l’avenir, mais cela ne peut pas restaurer les artefacts de compression JPEG antérieurs.',
      },
      {
        question: 'Des limites de taille de fichier sont-elles appliquées ?',
        answer:
          'Seule la RAM de votre appareil s’applique ; tout l’encodage se fait localement sans aucun plafond de taille de fichier côté serveur.',
      },
      {
        question: 'Le convertisseur de format d’image est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans compte, sans filigrane et sans limite sur le nombre de conversions.',
      },
      {
        question: 'Quels formats puis-je convertir, et vers quoi ?',
        answer:
          'Vous pouvez convertir des fichiers PNG, JPG, WebP, GIF et SVG en sortie PNG, JPG ou WebP.',
      },
      {
        question: 'Pourquoi convertir PNG en WebP ?',
        answer:
          'Les fichiers WebP sont généralement beaucoup plus petits que les PNG à qualité visuelle similaire, ce qui rend les pages web plus rapides à charger.',
      },
      {
        question: 'Pourquoi convertir WebP en JPG ou PNG ?',
        answer:
          'Certaines applications anciennes, imprimantes et formulaires d’envoi n’acceptent pas WebP : reconvertir en JPG ou PNG restaure donc la compatibilité universelle.',
      },
      {
        question: 'Puis-je convertir plusieurs images à la fois ?',
        answer:
          'Oui, vous pouvez charger un lot d’images et les convertir toutes au même format cible en une seule fois.',
      },
      {
        question: 'Convertir en JPG supprime-t-il la transparence ?',
        answer:
          'Oui, le JPG n’a pas de canal alpha : les zones transparentes sont donc remplies avec la couleur mate que vous choisissez, comme le blanc.',
      },
      {
        question: 'Quelle couleur mate utiliser quand je convertis un PNG transparent en JPG ?',
        answer:
          'Le blanc est le choix par défaut le plus sûr. Faites correspondre la couleur de fond de votre site web ou de votre diapositive pour un rendu homogène.',
      },
      {
        question: 'Puis-je convertir une photo en WebP en gardant sa qualité ?',
        answer:
          'Oui, WebP à 85–90 % de qualité paraît généralement identique au JPG d’origine tout en produisant un fichier nettement plus petit.',
      },
      {
        question: 'Puis-je convertir un logo SVG en PNG ?',
        answer:
          'Oui, l’outil rastérise les fichiers SVG en images PNG ou WebP nettes à leurs dimensions natives.',
      },
      {
        question: 'Le convertisseur de format d’image envoie-t-il mes images quelque part ?',
        answer:
          'Non, chaque conversion s’exécute localement dans votre navigateur et vos fichiers ne quittent jamais votre appareil.',
      },
      {
        question: 'Quelle qualité utiliser quand je convertis en JPG ?',
        answer:
          'Une qualité de 85 à 90 % garde les photos nettes tout en restant beaucoup plus petites que le PNG. Baissez-la pour des fichiers plus petits.',
      },
      {
        question: 'Puis-je convertir des GIF animés avec cet outil ?',
        answer:
          'Les fichiers GIF peuvent être chargés, mais la conversion rend une seule image fixe plutôt que de préserver l’animation.',
      },
      {
        question: 'Pourquoi mon PNG converti est-il plus gros que le JPG d’origine ?',
        answer:
          'Le PNG est sans perte : une photo convertie d’un JPG compressé en PNG stocke chaque pixel sans compression et grossit donc généralement.',
      },
      {
        question: 'Le convertisseur conserve-t-il les dimensions d’origine de l’image ?',
        answer:
          'Oui, les images converties conservent leur pleine résolution native, sauf si vous les redimensionnez séparément avec le redimensionneur d’images.',
      },
      {
        question: 'Puis-je utiliser le convertisseur de format d’image sur mon téléphone ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles. Sélectionnez des images depuis votre appareil et téléchargez les fichiers convertis.',
      },
      {
        question: 'Quel est le meilleur format pour les images de site web ?',
        answer:
          'WebP est généralement le meilleur pour les photos et graphiques sur le web, tandis que PNG est meilleur quand vous avez besoin de transparence ou de qualité sans perte.',
      },
      {
        question: 'Les images converties incluent-elles des filigranes ?',
        answer:
          'Non, les fichiers convertis sont des copies propres sans filigrane ni marque ajoutés.',
      },
    ],
  },
  'image-rotate-flip': {
    instructions: [
      {
        title: 'Envoyez une image',
        description:
          'Choisissez une image PNG, JPG, WebP ou GIF pour la charger dans l’aperçu Canvas interactif.',
      },
      {
        title: 'Faites pivoter, retournez ou appliquez des filtres',
        description:
          'Utilisez les boutons Pivoter à gauche/droite, les bascules Retournement horizontal/vertical, le commutateur Niveaux de gris et les curseurs Luminosité/Contraste.',
      },
      {
        title: 'Prévisualisez le résultat en direct',
        description:
          'Vérifiez l’aperçu Canvas après chaque modification pour confirmer que l’orientation et l’intensité du filtre vous conviennent.',
      },
      {
        title: 'Réinitialisez si nécessaire',
        description:
          'Utilisez le bouton Réinitialiser pour annuler toutes les rotations, retournements et modifications de filtres et repartir de l’original.',
      },
      {
        title: 'Choisissez un format de sortie',
        description:
          'Choisissez PNG pour garder la transparence, JPG pour les photos ou WebP pour des fichiers plus petits avant l’exportation.',
      },
      {
        title: 'Exportez l’image modifiée',
        description:
          'Cliquez sur Télécharger pour enregistrer votre image pivotée, retournée ou filtrée sur votre appareil.',
      },
    ],
    examples: [
      {
        title: 'Corriger une photo de smartphone de travers et augmenter la luminosité',
        input: 'Photo 3024×4032 pivotée de 90° dans le sens horaire · Luminosité : 110 % · Contraste : 105 %',
        output: 'Image droite 4032×3024 exportée proprement avec l’orientation EXIF intégrée aux pixels.',
        explanation: 'Canvas échange automatiquement la largeur et la hauteur sur les rotations de 90° et 270°.',
      },
      {
        title: 'Passer une photo couleur en noir et blanc pour l’impression',
        input: 'Photo JPG couleur · Niveaux de gris : activé · Contraste : 110 %',
        output: 'Image PNG en niveaux de gris à fort contraste, prête à imprimer',
        explanation: 'Le commutateur niveaux de gris convertit chaque pixel en luminance, et le contraste renforce les noirs et blancs.',
      },
    ],
    benefits: [
      'L’aperçu en pixels en direct se met à jour immédiatement sans latence d’envoi',
      'Intègre proprement l’orientation dans les coordonnées réelles des pixels plutôt que dans des indicateurs EXIF fragiles',
      'Combine rotation, miroir et retouches de couleur et de ton dans un seul espace de travail propre',
      'Le bouton Réinitialiser non destructif restaure les valeurs par défaut à tout moment',
    ],
    useCases: [
      'Redresser des documents ou reçus scannés capturés de travers',
      'Désinverser des captures de webcam à l’envers ou des captures d’écran retournées',
      'Créer des graphiques en niveaux de gris à fort contraste pour l’impression ou la documentation',
      'Éclaircir rapidement des photos de produits sous-exposées avant leur mise en vente',
    ],
    faqs: [
      {
        question: 'Pivoter une image réencode-t-il les pixels ?',
        answer:
          'Oui. Dessiner sur HTML5 Canvas intègre définitivement la nouvelle orientation et les ajustements de filtre dans chaque pixel, pour que toutes les applications l’affichent à l’endroit.',
      },
      {
        question: 'Puis-je préserver les arrière-plans transparents quand je pivote ou retourne ?',
        answer:
          'Oui — gardez le format de sortie sur PNG ou WebP pour conserver la transparence alpha complète autour des graphiques pivotés ou retournés.',
      },
      {
        question: 'Mes modifications sont-elles enregistrées sur vos serveurs ?',
        answer:
          'Non. Tout s’exécute dans votre propre onglet de navigateur et est supprimé quand vous fermez la page.',
      },
      {
        question: 'L’outil de rotation d’image est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, sans filigrane et sans limite.',
      },
      {
        question: 'Comment pivoter une image de 90 degrés ?',
        answer:
          'Envoyez votre image et cliquez sur Pivoter à droite ou Pivoter à gauche. Chaque clic fait tourner l’image de 90 degrés.',
      },
      {
        question: 'Puis-je pivoter une image de 180 degrés ?',
        answer:
          'Oui, cliquez deux fois sur Pivoter dans le même sens pour retourner l’image sens dessus dessous.',
      },
      {
        question: 'Comment retourner une image horizontalement ?',
        answer:
          'Utilisez la bascule Retournement horizontal pour refléter l’image de gauche à droite, ce qui est utile pour corriger les selfies en miroir.',
      },
      {
        question: 'Quelle est la différence entre retourner et pivoter une image ?',
        answer:
          'Pivoter fait tourner l’image autour de son centre, tandis que retourner la reflète comme dans un miroir.',
      },
      {
        question: 'Puis-je pivoter une photo sans perdre de qualité ?',
        answer:
          'L’outil réencode l’image via Canvas : exporter en PNG la garde donc sans perte. L’export JPG applique une légère compression.',
      },
      {
        question: 'Pivoter une image change-t-il ses dimensions ?',
        answer:
          'Une rotation de 90 ou 270 degrés échange la largeur et la hauteur. Une rotation de 180 degrés conserve les mêmes dimensions.',
      },
      {
        question: 'Puis-je rendre une photo en noir et blanc ?',
        answer:
          'Oui, activez le commutateur Niveaux de gris pour convertir votre photo en noir et blanc instantanément.',
      },
      {
        question: 'Comment éclaircir une photo sombre ?',
        answer:
          'Déplacez le curseur Luminosité au-dessus de 100 % et ajoutez un peu de contraste pour éviter que l’image paraisse délavée.',
      },
      {
        question: 'Puis-je pivoter un PNG en gardant sa transparence ?',
        answer:
          'Oui, exportez en PNG ou WebP pour préserver les zones transparentes après rotation ou retournement.',
      },
      {
        question: 'Mes photos modifiées sont-elles envoyées vers un serveur ?',
        answer:
          'Non, toute la rotation, le retournement et le filtrage s’exécutent localement dans votre navigateur et rien n’est envoyé.',
      },
      {
        question: 'Puis-je pivoter une image sur mon téléphone ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles. Envoyez une photo de travers, remettez-la à l’endroit et téléchargez la version corrigée.',
      },
      {
        question: 'Pourquoi ma photo est-elle de travers après l’envoi ?',
        answer:
          'Certains téléphones stockent l’orientation comme un indicateur EXIF que toutes les applications ne lisent pas. Cet outil intègre la bonne orientation dans les pixels pour qu’elle s’affiche à l’endroit partout.',
      },
      {
        question: 'Puis-je annuler une rotation ou un filtre ?',
        answer:
          'Oui, le bouton Réinitialiser restaure l’image d’origine et les paramètres de filtre par défaut à tout moment.',
      },
      {
        question: 'L’outil corrige-t-il les photos penchées ou inclinées ?',
        answer:
          'Il pivote par pas de 90 degrés : il corrige donc les photos de travers ou à l’envers. Les petites corrections d’inclinaison ne sont pas prises en charge.',
      },
      {
        question: 'Quels formats d’image puis-je pivoter et retourner ?',
        answer:
          'Vous pouvez modifier des images PNG, JPG, WebP et GIF et les exporter en PNG, JPG ou WebP.',
      },
      {
        question: 'Puis-je pivoter et retourner une image en une seule fois ?',
        answer:
          'Oui, vous pouvez combiner rotations, retournements horizontaux ou verticaux et filtres avant d’exporter une seule image terminée.',
      },
    ],
  },
  'image-to-base64': {
    instructions: [
      {
        title: 'Choisissez le mode Encodage ou Décodage',
        description:
          'Utilisez Image → Data URI Base64 pour encoder un fichier, ou Base64 → Aperçu d’image pour rendre des charges utiles Base64 collées.',
      },
      {
        title: 'Chargez une image ou collez du texte Base64',
        description:
          'Sélectionnez une ressource PNG, JPG, WebP, SVG, GIF ou ICO (ou collez une chaîne complète data:image/... ou du texte Base64 brut).',
      },
      {
        title: 'Vérifiez la comparaison de tailles',
        description:
          'Comparez la taille du fichier d’origine avec la taille de la chaîne Base64 pour voir le surcoût d’environ 33 % avant de l’intégrer.',
      },
      {
        title: 'Choisissez le format de sortie dont vous avez besoin',
        description:
          'Choisissez le Data URI complet, la chaîne Base64 brute, la balise HTML <img> ou le snippet CSS background-image.',
      },
      {
        title: 'Copiez le snippet ou téléchargez l’aperçu',
        description:
          'Copiez le Data URI, le Base64 brut, la balise HTML <img> ou le snippet CSS background — ou téléchargez une image d’aperçu décodée.',
      },
      {
        title: 'Astuce : le Base64 collé ne fonctionne pas ?',
        description:
          'Assurez-vous d’avoir collé la chaîne complète sans sauts de ligne, et vérifiez que le décodeur a ajouté le préfixe data:image/... correct pour votre format.',
      },
    ],
    examples: [
      {
        title: 'Intégrer une coche SVG de 2 Ko dans du CSS',
        input: 'check.svg (2 048 octets)',
        output: 'data:image/svg+xml;base64,... (~2,7 Ko) + règle CSS background-image prête à coller',
        explanation: 'Économise un aller-retour HTTP supplémentaire pour les minuscules icônes d’interface et les e-mails HTML autonomes hors ligne.',
      },
      {
        title: 'Décoder une charge utile Base64 copiée depuis DevTools',
        input: 'Chaîne Base64 brute sans préfixe data:image/...',
        output: 'Aperçu de l’image décodée avec option de téléchargement en PNG',
        explanation: 'Le décodeur ajoute automatiquement le préfixe Data URI PNG standard quand l’en-tête manque.',
      },
    ],
    benefits: [
      'Comparaison instantanée de la taille du fichier binaire et du surcoût d’environ 33 % de la chaîne Base64',
      'Génère simultanément Data URI, Base64 brut, HTML <img> et snippets CSS background',
      'Ajoute automatiquement le préfixe Data URI PNG si vous collez du Base64 brut sans en-tête',
      'Garde les ressources propriétaires et les blobs de réponses API hors ligne dans votre navigateur',
    ],
    useCases: [
      'Intégrer de minuscules icônes dans des bundles CSS ou des rapports HTML autonomes',
      'Déboguer des Data URI d’images renvoyés par des API JSON ou des webhooks',
      'Intégrer de petits badges de marque dans des modèles d’e-mails HTML transactionnels',
      'Inspecter des charges utiles d’images encodées copiées depuis les DevTools du navigateur',
    ],
    faqs: [
      {
        question: 'Quand utiliser des images Base64 plutôt que des URL d’images normales ?',
        answer:
          'Utilisez les Data URI Base64 avec parcimonie pour de très petites icônes (généralement moins de 5 à 10 Ko) ou des exportations HTML à fichier unique. Base64 augmente la taille des données d’environ 33 % et ne peut pas être mis en cache indépendamment d’une page à l’autre comme les URL normales.',
      },
      {
        question: 'Le décodeur peut-il prévisualiser des chaînes Base64 brutes sans le préfixe « data:image/png;base64, » ?',
        answer:
          'Oui ! Passer en Base64 → Aperçu d’image supprime automatiquement les espaces et ajoute un en-tête Data URI PNG standard s’il en manque un.',
      },
      {
        question: 'Fonctionne-t-il avec les SVG vectoriels ?',
        answer:
          'Oui. Envoyer un fichier .svg crée un URI data:image/svg+xml;base64,... valide avec des snippets HTML et CSS.',
      },
      {
        question: 'Le convertisseur image vers Base64 est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans inscription, sans filigrane et sans limite sur le nombre d’images que vous encodez ou décodez.',
      },
      {
        question: 'Qu’est-ce qu’un Data URI Base64 ?',
        answer:
          'Un Data URI intègre une image directement dans une page web, une feuille de style ou un e-mail sous forme de texte, en commençant par data:image/...;base64, suivi des données encodées.',
      },
      {
        question: 'Pourquoi la chaîne Base64 est-elle plus grosse que mon image ?',
        answer:
          'L’encodage Base64 représente des données binaires avec des caractères de texte, ce qui ajoute environ 33 % de surcoût à la taille du fichier d’origine.',
      },
      {
        question: 'Quelle taille d’image est la meilleure pour l’encodage Base64 ?',
        answer:
          'Gardez les images Base64 petites, généralement moins de 5 à 10 Ko, comme les icônes et les logos. Les images plus grandes alourdissent votre HTML ou CSS et ne peuvent pas être mises en cache séparément.',
      },
      {
        question: 'Puis-je convertir un JPG en Base64 ?',
        answer:
          'Oui, les fichiers JPG, PNG, WebP, SVG, GIF et ICO peuvent tous être encodés en Data URI Base64.',
      },
      {
        question: 'Comment utiliser une image Base64 en HTML ?',
        answer:
          'Copiez la balise HTML <img> générée et collez-la dans votre page. L’attribut src contient déjà le Data URI complet.',
      },
      {
        question: 'Comment utiliser une image Base64 en CSS ?',
        answer:
          'Copiez le snippet CSS background-image et collez-le dans votre feuille de style pour afficher l’image sans requête de fichier séparée.',
      },
      {
        question: 'Puis-je décoder une chaîne Base64 en image ?',
        answer:
          'Oui, passez en Base64 → Aperçu d’image, collez la chaîne, et l’outil rend l’image pour que vous puissiez la prévisualiser ou la télécharger.',
      },
      {
        question: 'Ai-je besoin du préfixe data:image/png;base64, pour décoder ?',
        answer:
          'Non, si vous collez du Base64 brut sans en-tête, l’outil ajoute automatiquement un préfixe Data URI PNG standard.',
      },
      {
        question: 'L’outil image vers Base64 envoie-t-il mes fichiers quelque part ?',
        answer:
          'Non, l’encodage et le décodage s’exécutent entièrement dans votre navigateur et vos images ne quittent jamais votre appareil.',
      },
      {
        question: 'Puis-je encoder un SVG en Base64 ?',
        answer:
          'Oui, les fichiers SVG produisent un URI data:image/svg+xml;base64,... valide avec des snippets HTML et CSS correspondants.',
      },
      {
        question: 'Quelle est la différence entre le Base64 brut et un Data URI ?',
        answer:
          'Le Base64 brut n’est que le texte encodé, tandis qu’un Data URI ajoute l’en-tête data:image/...;base64, pour que les navigateurs connaissent le type d’image.',
      },
      {
        question: 'Puis-je utiliser des images Base64 dans les e-mails ?',
        answer:
          'Oui, les petites images Base64 fonctionnent bien dans les e-mails HTML autonomes, même si certains clients de messagerie limitent la prise en charge des Data URI : testez donc avant d’envoyer.',
      },
      {
        question: 'Y a-t-il une limite de taille de fichier pour l’encodage ?',
        answer:
          'Il n’y a pas de limite côté serveur puisque rien n’est envoyé. Les très grandes images sont limitées uniquement par la mémoire de votre navigateur, et les énormes chaînes Base64 sont peu pratiques à coller.',
      },
      {
        question: 'Puis-je convertir une image Base64 en fichier téléchargeable ?',
        answer:
          'Oui, décodez la chaîne en mode Base64 → Aperçu d’image et utilisez l’option de téléchargement pour l’enregistrer comme un fichier image classique.',
      },
      {
        question: 'L’encodage Base64 change-t-il la qualité de l’image ?',
        answer:
          'Non, Base64 est une représentation textuelle sans perte des octets exacts : l’image décodée est donc identique à l’originale.',
      },
      {
        question: 'Puis-je utiliser le convertisseur image vers Base64 sur mon téléphone ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles. Encodez une image depuis votre photothèque ou collez une chaîne Base64 pour la prévisualiser.',
      },
    ],
  },
  'color-contrast-checker': {
    instructions: [
      {
        title: 'Choisissez les couleurs de premier plan et d’arrière-plan',
        description:
          'Utilisez les sélecteurs de couleurs, les entrées HEX ou les entrées R/G/B individuelles — ou partez de préréglages accessibles et échangez les couleurs en un clic.',
      },
      {
        title: 'Ajustez les nuances jusqu’à ce que le ratio passe',
        description:
          'Modifiez la luminosité ou les canaux RVB individuels et regardez le ratio se mettre à jour en direct jusqu’à ce que votre paire atteigne le seuil AA ou AAA dont vous avez besoin.',
      },
      {
        title: 'Examinez la fiche de score WCAG 2.1',
        description:
          'Vérifiez le ratio de contraste exact (par exemple 12,63 : 1) et le statut RÉUSSI/ÉCHOUÉ instantané pour les références AA Normal, AA Grand/UI, AAA Normal et AAA Grand.',
      },
      {
        title: 'Prévisualisez la paire dans du vrai texte d’interface',
        description:
          'Lisez les aperçus de typographie en direct et de cartes de contrôle d’interface bordées pour voir comment vos couleurs se présentent réellement en texte courant, titres et boutons.',
      },
      {
        title: 'Extrayez des nuances d’une image (facultatif)',
        description:
          'Envoyez n’importe quelle capture d’écran ou logo de marque en bas pour extraire jusqu’à 8 couleurs dominantes distinctes et les appliquer directement au premier plan ou à l’arrière-plan.',
      },
      {
        title: 'Copiez les couleurs et corrigez les paires en échec',
        description:
          'Copiez les valeurs HEX, RGB ou HSL synchronisées dans votre CSS. Si une paire échoue, assombrissez le texte ou éclaircissez l’arrière-plan jusqu’à ce que la fiche de score devienne verte.',
      },
    ],
    examples: [
      {
        title: 'Auditer la lisibilité d’un bouton d’appel à l’action principal',
        input: 'Premier plan : #FFFFFF · Arrière-plan : #4F46E5',
        output: 'Ratio de contraste 6,29 : 1 — Réussit WCAG AA Normal, AA Grand et AAA Grand',
        explanation: 'Utilise la luminance relative sRGB officielle avec correction gamma (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Extraire une palette de marque depuis un logo',
        input: 'Logo PNG envoyé · Extraction de palette',
        output: 'Jusqu’à 8 nuances HEX dominantes, cliquables vers Premier plan ou Arrière-plan',
        explanation: 'Le quantificateur de couleurs Canvas regroupe les nuances proches pour ne garder que les couleurs visuellement dominantes.',
      },
    ],
    benefits: [
      'Formule exacte WCAG 2.1 de luminance relative sRGB — zéro approximation',
      'L’aperçu en direct de la typographie et des cartes de contrôle d’interface bordées montre la paire active',
      'Le quantificateur de couleurs d’image Canvas intégré extrait les nuances de marque sans outil supplémentaire',
      'Affiche des chaînes HEX, RGB et HSL synchronisées, prêtes à coller dans le CSS',
    ],
    useCases: [
      'Auditer les systèmes de design, tableaux de bord SaaS et thèmes en mode sombre pour la conformité WCAG AA/AAA',
      'Extraire les couleurs de marque dominantes des logos clients directement dans des palettes d’interface accessibles',
      'Corriger les paires de badges, d’espaces réservés ou d’étiquettes de boutons à faible contraste avant le lancement',
      'Enseigner la hiérarchie visuelle accessible avec des aperçus en direct de texte grand et normal',
    ],
    faqs: [
      {
        question: 'Quel ratio de contraste est requis pour WCAG niveau AA contre niveau AAA ?',
        answer:
          'WCAG 2.1 niveau AA exige au moins 4,5:1 pour le texte courant et 3,0:1 pour le grand texte (18 pt+ ou 14 pt+ en gras) et les composants d’interface. Le niveau AAA porte ces seuils à 7,0:1 pour le texte normal et 4,5:1 pour le grand texte.',
      },
      {
        question: 'Comment fonctionne l’extracteur de palette d’image ?',
        answer:
          'Il dessine votre image envoyée sur un Canvas HTML5 hors écran, ignore les pixels transparents, regroupe les compartiments RVB proches et présente jusqu’à 8 nuances dominantes visuellement distinctes selon la couverture de surface.',
      },
      {
        question: 'Le vérificateur de contraste de couleurs convertit-il aussi entre HEX, RGB et HSL ?',
        answer:
          'Oui. Mettre à jour n’importe quel sélecteur de couleur, entrée HEX ou champ R/G/B recalcule automatiquement les représentations HEX, rgb() et hsl().',
      },
      {
        question: 'Qu’est-ce qui compte comme grand texte selon les règles de contraste WCAG ?',
        answer:
          'Le grand texte fait 18 pt (24 px) ou plus, ou 14 pt (18,66 px) en gras ou plus. Le grand texte ne nécessite qu’un ratio de 3,0:1 pour AA et 4,5:1 pour AAA, tandis que le texte normal nécessite 4,5:1 pour AA et 7,0:1 pour AAA.',
      },
      {
        question: 'Le vérificateur de contraste de couleurs est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription. Toutes les vérifications s’exécutent localement dans votre navigateur : vous pouvez donc tester autant de paires de couleurs que vous le souhaitez.',
      },
      {
        question: 'Mes images envoyées quittent-elles mon appareil ?',
        answer:
          'Non. L’extraction de palette se fait entièrement dans votre navigateur avec un canvas hors écran, et vos images ne sont jamais envoyées à un serveur.',
      },
      {
        question: 'Comment le ratio de contraste est-il calculé ?',
        answer:
          'Il utilise la formule officielle WCAG 2.1 : la luminance relative de chaque couleur est calculée à partir des valeurs sRGB linéarisées par gamma, et le ratio est (L1 + 0,05) / (L2 + 0,05), où L1 est la couleur la plus claire.',
      },
      {
        question: 'Puis-je vérifier le contraste pour les designs en mode sombre ?',
        answer:
          'Oui. Saisissez vos couleurs de fond sombre et de texte clair de la même façon, et la fiche de score indique si la paire réussit AA et AAA pour le texte normal et grand.',
      },
      {
        question: 'Pourquoi ma paire de couleurs échoue-t-elle à AA alors qu’elle me semble lisible ?',
        answer:
          'La lisibilité perçue et le contraste de luminance mesuré sont deux choses différentes. Des couleurs qui vous semblent distinctes peuvent rester proches en luminance, surtout les teintes moyennes : faites donc confiance au ratio et ajustez la luminosité jusqu’à réussir.',
      },
      {
        question: 'Que faire si la couleur de ma marque échoue au test de contraste ?',
        answer:
          'Gardez la couleur de marque pour les grands titres ou les éléments décoratifs, et utilisez une nuance plus sombre pour le texte courant. Vous pouvez aussi éclaircir l’arrière-plan ou ajouter un voile semi-opaque derrière le texte.',
      },
      {
        question: 'Le vérificateur fonctionne-t-il pour les composants d’interface comme les boutons et les icônes ?',
        answer:
          'Oui. WCAG 2.1 exige un ratio de 3,0:1 pour les composants d’interface non textuels comme les bordures de boutons, les contours de champs et les icônes significatives, et la colonne AA Grand/UI de la fiche de score couvre exactement cela.',
      },
      {
        question: 'Puis-je tester le texte d’espace réservé et les états désactivés avec cet outil ?',
        answer:
          'Oui, saisissez la couleur d’espace réservé ou d’état désactivé comme premier plan. Notez que les contrôles désactivés sont exemptés des exigences de contraste WCAG, mais pas le texte d’espace réservé qui transmet des informations.',
      },
      {
        question: 'Combien de couleurs l’extracteur de palette peut-il extraire d’une image ?',
        answer:
          'Jusqu’à 8 couleurs dominantes distinctes. Les nuances similaires sont regroupées, pour que les nuances représentent les couleurs les plus visuellement marquantes de l’image plutôt que chaque nuance présente.',
      },
      {
        question: 'Puis-je appliquer directement une nuance extraite comme premier plan ou arrière-plan ?',
        answer:
          'Oui. Chaque nuance extraite a un bouton pour l’envoyer directement dans l’emplacement Premier plan ou Arrière-plan, pour la tester immédiatement contre votre autre couleur.',
      },
      {
        question: 'Quels formats d’image fonctionnent avec l’extracteur de palette ?',
        answer:
          'Toute image que votre navigateur peut afficher, y compris les captures d’écran ou logos PNG, JPG, WebP et SVG. Les pixels transparents sont ignorés lors du regroupement des couleurs.',
      },
      {
        question: 'Le vérificateur de contraste de couleurs teste-t-il le daltonisme ?',
        answer:
          'Non, il mesure uniquement le contraste de luminance. Le contraste n’est qu’une partie de l’accessibilité ; pour la sécurité daltonienne, évitez aussi de vous appuyer sur la couleur seule pour transmettre du sens et vérifiez votre palette avec un simulateur de daltonisme.',
      },
      {
        question: 'Puis-je utiliser les valeurs HEX, RGB et HSL dans mon CSS ?',
        answer:
          'Oui. Les trois formats restent synchronisés pendant que vous modifiez, et vous pouvez copier n’importe lequel directement dans votre feuille de style, vos jetons de design ou votre configuration Tailwind.',
      },
      {
        question: 'Quelle est la différence entre AA et AAA en pratique ?',
        answer:
          'AA est la norme légale et pratique que la plupart des sites visent, tandis que AAA est plus strict et souvent difficile à atteindre pour le texte courant aux couleurs de marque. Visez AAA quand vous le pouvez, mais ne livrez jamais en dessous de AA pour le texte.',
      },
      {
        question: 'L’outil stocke-t-il mes choix de couleurs ou mes images ?',
        answer:
          'Non. Tout s’exécute localement dans votre onglet de navigateur, rien n’est envoyé, et vos couleurs et images disparaissent quand vous fermez ou actualisez la page.',
      },
      {
        question: 'Puis-je vérifier plus d’une paire de couleurs à la fois ?',
        answer:
          'Le vérificateur teste une paire premier plan/arrière-plan à la fois, mais vous pouvez échanger les couleurs en un seul clic et retester autant de paires que nécessaire en quelques secondes.',
      },
    ],
  },
  'qr-code-scanner': {
    instructions: [
      {
        title: 'Envoyez une image QR ou activez le scan par caméra',
        description:
          'Déposez ou sélectionnez n’importe quelle capture QR PNG, JPG, WebP ou SVG — ou cliquez sur Démarrer le scanner caméra quand vous voulez lire un code QR imprimé en direct.',
      },
      {
        title: 'Laissez le scanner décoder le code',
        description:
          'L’outil exécute un décodage multi-échelle et sensible à l’inversion localement dans votre navigateur : même les codes QR en mode sombre ou inversés sont lus sans rien envoyer.',
      },
      {
        title: 'Inspectez et copiez le texte décodé',
        description:
          'Examinez la charge utile décodée, la catégorie de charge utile détectée et l’aperçu de lien sûr (seules les URL http/https deviennent des liens cliquables), puis copiez en un clic.',
      },
      {
        title: 'Vérifiez le type de charge utile avant d’agir',
        description:
          'Voyez si le QR contient une URL, des identifiants Wi-Fi, un contact vCard ou du texte brut, et vérifiez que la destination semble correcte avant de la visiter ou de vous connecter.',
      },
      {
        title: 'Basculez vers le générateur de QR de contact vCard (facultatif)',
        description:
          'Créez un code QR de carte de visite VCF 3.0 scannable avec nom, organisation, téléphone, e-mail et site web, et téléchargez-le en PNG ou SVG.',
      },
      {
        title: 'Téléchargez, imprimez ou dépannez un scan raté',
        description:
          'Téléchargez votre QR vCard ou renvoyez une capture plus nette et bien éclairée si le décodage échoue — les codes QR recadrés, flous ou minuscules sont la cause la plus fréquente.',
      },
    ],
    examples: [
      {
        title: 'Vérifier une capture de flyer marketing imprimé avant de commander les impressions',
        input: 'Envoyer flyer-qr.png (PNG 600×600)',
        output: 'Charge utile décodée · URL du site : https://example.com/?utm_source=print',
        explanation: 'Exécute un décodage multi-échelle sensible à l’inversion localement, pour que les codes QR en mode sombre inversés se décodent aussi de façon fiable.',
      },
      {
        title: 'Créer un QR vCard pour une carte de visite',
        input: 'Nom, organisation, téléphone, e-mail et site web',
        output: 'Code QR vCard 3.0 téléchargeable en PNG et SVG',
        explanation: 'Scanner ce QR avec un téléphone propose d’enregistrer directement le contact.',
      },
    ],
    benefits: [
      'Décode proprement les captures QR normales et à couleurs inversées sans applications mobiles',
      'Le flux de caméra facultatif s’arrête immédiatement après le décodage ou la sortie de l’onglet',
      'Classe proprement les charges utiles décodées sans rediriger automatiquement ailleurs',
      'Inclut la génération complète de QR vCard 3.0 en PNG et SVG pour les cartes de visite numériques',
    ],
    useCases: [
      'Vérifier les URL de destination UTM dans les ressources QR avant d’imprimer des affiches',
      'Extraire des chaînes Wi-Fi ou des jetons de texte depuis des captures d’écran de bureau',
      'Scanner des codes QR physiques sur un ordinateur portable avec votre webcam intégrée',
      'Créer des codes QR de contact vCard scannables pour CV, badges et présentations',
    ],
    faqs: [
      {
        question: 'Que faire si mon appareil n’a pas de caméra ou refuse l’autorisation de caméra ?',
        answer:
          'Vous n’avez jamais besoin de caméra pour utiliser cet outil — prenez simplement une capture d’écran ou une photo et envoyez-la via Envoyer une image de code QR, ce qui fonctionne de façon identique sans autorisation de caméra.',
      },
      {
        question: 'Scanner un code QR ouvre-t-il automatiquement des sites web malveillants ?',
        answer:
          'Non. Le texte décodé s’affiche d’abord en sécurité dans une zone de texte en lecture seule, pour que vous puissiez inspecter toute URL avant de choisir de la visiter.',
      },
      {
        question: 'Besoin d’un générateur de QR d’URL, Wi-Fi ou de couleur personnalisée plutôt que d’une vCard ?',
        answer:
          'Essayez notre outil dédié Générateur de code QR dans les outils de réseaux sociaux pour des couleurs de premier plan et d’arrière-plan personnalisées, des niveaux de correction d’erreur et des codes QR d’URL ou de texte.',
      },
      {
        question: 'Le scanner de code QR est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et le scan comme la génération de QR vCard s’exécutent localement dans votre navigateur.',
      },
      {
        question: 'Mes images QR envoyées sont-elles transmises à un serveur ?',
        answer:
          'Non. Le décodage se fait entièrement dans votre navigateur avec jsQR : vos captures et photos ne quittent jamais votre appareil.',
      },
      {
        question: 'Quels formats d’image le scanner de code QR peut-il lire ?',
        answer:
          'Les images PNG, JPG, WebP et SVG fonctionnent toutes. Les captures prises sur un téléphone ou un ordinateur sont le moyen le plus courant de fournir un code QR.',
      },
      {
        question: 'Pourquoi mon code QR n’a-t-il pas pu être scanné ?',
        answer:
          'Les causes habituelles sont une image floue ou basse résolution, un code QR recadré trop serré, un reflet sur un code imprimé ou un code tout simplement trop petit dans le cadre. Renvoyez une capture plus nette, plus grande et bien éclairée.',
      },
      {
        question: 'Le scanner peut-il lire les codes QR inversés ou en mode sombre ?',
        answer:
          'Oui. Le décodeur est sensible à l’inversion : les codes QR avec des modules clairs sur fond sombre se décodent aussi fidèlement que les codes noirs sur blanc standard.',
      },
      {
        question: 'Quels types de charges utiles QR peut-il détecter ?',
        answer:
          'Il classe automatiquement le contenu décodé, notamment les URL de sites web, les identifiants de réseau Wi-Fi, les contacts vCard et le texte brut, pour que vous sachiez ce qu’un code fait avant d’agir.',
      },
      {
        question: 'Est-il sûr de scanner un code QR trouvé dans un lieu public ?',
        answer:
          'Scanner est sûr ici car rien ne s’ouvre automatiquement — vous voyez d’abord le texte décodé. Lisez toujours l’URL attentivement et évitez de saisir des mots de passe ou des informations de paiement sur les pages vers lesquelles un QR aléatoire vous mène.',
      },
      {
        question: 'Puis-je scanner un code QR avec la webcam de mon ordinateur portable ?',
        answer:
          'Oui. Cliquez sur Démarrer le scanner caméra, autorisez l’accès à la caméra quand votre navigateur le demande, et tenez le code imprimé devant la caméra. Le flux s’arrête automatiquement une fois le code décodé ou quand vous quittez l’onglet.',
      },
      {
        question: 'La caméra continue-t-elle d’enregistrer après un scan ?',
        answer:
          'Non. Le flux de caméra s’arrête immédiatement après un décodage réussi, et il s’arrête aussi si vous changez d’onglet ou fermez le scanner.',
      },
      {
        question: 'Qu’est-ce qu’un code QR vCard ?',
        answer:
          'Un code QR vCard stocke des coordonnées — nom, organisation, téléphone, e-mail et site web — au format standard VCF 3.0, pour que le scanner avec un téléphone propose d’enregistrer directement le contact.',
      },
      {
        question: 'Puis-je télécharger mon code QR vCard en PNG et SVG ?',
        answer:
          'Oui. Le générateur vCard exporte les deux formats : PNG pour les documents et présentations, et SVG pour une impression nette à n’importe quelle taille.',
      },
      {
        question: 'Le code QR vCard fonctionnera-t-il sur iPhone et Android ?',
        answer:
          'Oui. Les deux plateformes reconnaissent les codes QR vCard VCF 3.0 standard et proposent d’ajouter le contact quand ils sont scannés avec l’appareil photo intégré.',
      },
      {
        question: 'Puis-je scanner un code QR depuis une vidéo ou un enregistrement d’écran ?',
        answer:
          'Pas directement, mais vous pouvez mettre la vidéo en pause, prendre une capture d’écran du cadre montrant le code QR, et envoyer cette capture au scanner.',
      },
      {
        question: 'Le scanner de code QR fonctionne-t-il hors ligne ?',
        answer:
          'Une fois la page chargée, le décodage s’exécute entièrement dans votre navigateur sans requête réseau : vous pouvez donc scanner des images envoyées même sans connexion Internet.',
      },
      {
        question: 'Puis-je scanner plusieurs codes QR dans une seule image ?',
        answer:
          'Le scanner décode un code QR à la fois. Si une image contient plusieurs codes, recadrez l’image pour que chaque code soit envoyé séparément.',
      },
      {
        question: 'Que vérifier avant d’imprimer un code QR sur un flyer ?',
        answer:
          'Envoyez une capture du design terminé et scannez-la ici pour confirmer que l’URL de destination, les paramètres UTM et la charge utile sont exactement corrects avant de commander les impressions.',
      },
      {
        question: 'L’outil stocke-t-il mes codes QR scannés ou mes images de caméra ?',
        answer:
          'Non. Rien n’est envoyé, journalisé ou stocké. Les résultats décodés existent uniquement dans votre onglet de navigateur actuel et disparaissent quand vous le fermez.',
      },
    ],
  },
  'password-generator': {
    instructions: [
      {
        title: 'Choisissez Mot de passe aléatoire ou Passphrase Diceware',
        description:
          'Utilisez Mot de passe aléatoire pour une densité maximale de jeu de caractères ou Passphrase Diceware pour une frappe humaine plus facile avec une forte entropie multi-mots.',
      },
      {
        title: 'Personnalisez la longueur, les jeux de caractères et le nombre par lot',
        description:
          'Ajustez la longueur (8 à 64 caractères), activez Majuscules/Minuscules/Chiffres/Symboles, excluez éventuellement les caractères similaires (0/O/1/l/I), ou sélectionnez 3 à 8 mots Diceware.',
      },
      {
        title: 'Générez votre mot de passe ou passphrase',
        description:
          'Cliquez sur générer pour créer une nouvelle sortie avec le CSPRNG matériel de votre navigateur et l’échantillonnage par rejet, pour que chaque caractère ait exactement la même probabilité.',
      },
      {
        title: 'Vérifiez le score d’entropie',
        description:
          'Inspectez les bits d’entropie de Shannon exacts (~72–118+ bits recommandés) pour voir le travail de devinette que le résultat représente avant de l’utiliser.',
      },
      {
        title: 'Régénérez et copiez en sécurité',
        description:
          'Un résultat ne vous plaît pas ? Régénérez-en un nouveau, puis copiez un seul mot de passe ou tout le lot en un clic.',
      },
      {
        title: 'Enregistrez-le dans un gestionnaire de mots de passe et actualisez pour effacer',
        description:
          'Collez le résultat immédiatement dans votre gestionnaire de mots de passe. Actualiser la page efface les mots de passe générés de la mémoire : ne comptez donc jamais sur l’onglet pour les retenir.',
      },
    ],
    examples: [
      {
        title: 'Mot de passe mixte de 18 caractères avec jeu de caractères complet',
        input: 'Longueur : 18 · Majuscules + Minuscules + Chiffres + Symboles (jeu : 88 caractères)',
        output: '~116,3 bits d’entropie cryptographique · Garantit >= 1 caractère de chaque classe activée',
        explanation: 'Utilise l’échantillonnage par rejet (rejet des échantillons uint32 >= floor(2^32 / jeu) * jeu) pour une uniformité stricte.',
      },
      {
        title: 'Passphrase Diceware mémorable de 5 mots',
        input: 'Mode : Passphrase Diceware · 5 mots · Séparateur : espace',
        output: 'Phrase de 5 mots aléatoires avec environ 64 bits d’entropie, facile à taper',
        explanation: 'Cinq mots aléatoires d’une liste fixe donnent une forte entropie tout en restant bien plus faciles à taper que des caractères aléatoires.',
      },
    ],
    benefits: [
      'Évite strictement Math.random() non sécurisé — utilise window.crypto.getRandomValues matériel',
      'Élimine le biais modulo via un vrai échantillonnage par rejet et un mélange Fisher-Yates sans biais',
      'Garantit au moins un caractère de chaque classe de caractères sélectionnée sans emplacements fixes',
      'Rien n’est journalisé, stocké ou transmis sur le réseau',
    ],
    useCases: [
      'Sécuriser des comptes cloud, clés SSH, identifiants de base de données et coffres maîtres de gestionnaires de mots de passe',
      'Générer des passphrases Diceware typables par un humain pour le chiffrement de disque ou les clés Wi-Fi invités',
      'Fournir des identifiants temporaires d’intégration par lots (jusqu’à 10 par clic)',
      'Comparer l’impact en bits d’entropie de 12 contre 18 contre 24 caractères',
    ],
    faqs: [
      {
        question: 'Pourquoi l’échantillonnage par rejet avec crypto.getRandomValues est-il important ?',
        answer:
          'Calculer simplement randomUint32 % tailleDuJeu favorise légèrement les caractères d’indice bas quand 2^32 n’est pas divisible uniformément par la taille du jeu (biais modulo). L’échantillonnage par rejet écarte les tirages hors plage pour que chaque caractère du jeu ait une probabilité mathématique exactement égale.',
      },
      {
        question: 'Faut-il utiliser un mot de passe aléatoire ou une passphrase ?',
        answer:
          'Les deux sont excellents quand ils sont assez longs : 16+ caractères mixtes fonctionnent partout dans les gestionnaires de mots de passe, tandis qu’une passphrase de 5 à 6 mots est bien plus facile à taper manuellement sur les téléviseurs, téléphones ou invites de déchiffrement de disque.',
      },
      {
        question: 'Les mots de passe générés sont-ils stockés quelque part ?',
        answer:
          'Jamais. Les mots de passe vivent uniquement dans la mémoire éphémère React de votre onglet et disparaissent à l’actualisation.',
      },
      {
        question: 'Le générateur de mots de passe est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription. Vous pouvez générer autant de mots de passe et de passphrases que nécessaire, directement dans votre navigateur.',
      },
      {
        question: 'Comment les mots de passe sont-ils générés ici ?',
        answer:
          'Ils sont créés localement dans votre navigateur avec window.crypto.getRandomValues, le générateur de nombres aléatoires cryptographiquement sécurisé et matériel de votre navigateur, avec échantillonnage par rejet pour supprimer le biais modulo.',
      },
      {
        question: 'Mes mots de passe générés sont-ils envoyés vers un serveur ?',
        answer:
          'Non. La génération se fait entièrement sur votre appareil, et rien n’est stocké, journalisé ou transmis sur le réseau.',
      },
      {
        question: 'Quelle longueur mon mot de passe doit-il avoir ?',
        answer:
          'Pour les comptes importants, utilisez au moins 16 caractères avec des classes de caractères mixtes, ce qui donne environ 100+ bits d’entropie. Les mots de passe plus courts ne conviennent que pour les comptes de faible valeur, et la longueur compte plus que la complexité.',
      },
      {
        question: 'Qu’est-ce que l’entropie d’un mot de passe, et combien de bits me faut-il ?',
        answer:
          'L’entropie mesure le travail de devinette qu’un mot de passe représente. Environ 70 à 80 bits sont forts pour la plupart des comptes, tandis que 100+ bits sont recommandés pour les mots de passe maîtres, les clés de chiffrement et les comptes de grande valeur.',
      },
      {
        question: 'Qu’est-ce qu’une passphrase Diceware ?',
        answer:
          'Une passphrase Diceware est composée de plusieurs mots aléatoires choisis dans une liste fixe, comme « correct horse battery staple ». Cinq ou six mots aléatoires donnent une forte entropie tout en restant bien plus faciles à taper et à retenir que des caractères aléatoires.',
      },
      {
        question: 'Faut-il exclure les caractères ambigus comme 0, O, 1, l et I ?',
        answer:
          'Oui, quand vous taperez le mot de passe à la main ou le lirez à voix haute. Exclure les caractères similaires évite les erreurs de saisie, et avec un mot de passe assez long, la petite perte d’entropie est négligeable.',
      },
      {
        question: 'Puis-je générer plusieurs mots de passe à la fois ?',
        answer:
          'Oui. Vous pouvez générer un lot de jusqu’à 10 mots de passe en un clic, ce qui est pratique pour fournir des comptes ou intégrer de nouveaux membres d’équipe.',
      },
      {
        question: 'Le générateur garantit-il au moins un caractère de chaque classe sélectionnée ?',
        answer:
          'Oui. Chaque mot de passe généré inclut au moins un caractère de chaque classe de caractères activée, sans placer ces caractères à des positions fixes et prévisibles.',
      },
      {
        question: 'Puis-je utiliser ces mots de passe pour le mot de passe maître de mon gestionnaire de mots de passe ?',
        answer:
          'Une longue passphrase convient bien comme mot de passe maître car vous devez la taper de mémoire. Générez une passphrase Diceware de 6 mots, mémorisez-la, et stockez vos autres mots de passe dans le gestionnaire.',
      },
      {
        question: 'Pourquoi ne pas utiliser Math.random() pour les mots de passe ?',
        answer:
          'Math.random() n’est pas cryptographiquement sécurisé : sa sortie peut être prédite si un attaquant apprend son état interne. Cet outil utilise uniquement window.crypto.getRandomValues, conçu pour l’aléatoire sensible à la sécurité.',
      },
      {
        question: 'Un mot de passe généré fonctionnera-t-il sur tous les sites web ?',
        answer:
          'Presque toujours. Si un site rejette les symboles ou limite la longueur, réduisez la longueur ou désactivez la classe de symboles et régénérez jusqu’à ce que le site l’accepte.',
      },
      {
        question: 'Puis-je réutiliser un mot de passe généré sur plusieurs sites ?',
        answer:
          'Vous ne devriez pas. Réutiliser un mot de passe signifie qu’une seule faille expose chaque compte qui le partage : générez donc un mot de passe unique pour chaque site et stockez-les dans un gestionnaire de mots de passe.',
      },
      {
        question: 'Que deviennent mes mots de passe si j’actualise la page ?',
        answer:
          'Ils disparaissent. Les mots de passe générés existent uniquement dans la mémoire temporaire de l’onglet : copiez-les ou enregistrez-les dans un gestionnaire de mots de passe avant d’actualiser ou de fermer la page.',
      },
      {
        question: 'Le générateur de mots de passe fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Une fois la page chargée, la génération s’exécute entièrement dans votre navigateur sans requête réseau : elle fonctionne donc hors ligne.',
      },
      {
        question: 'Comment choisir entre un mot de passe et une passphrase pour le Wi-Fi ?',
        answer:
          'Utilisez une passphrase pour les clés Wi-Fi que vous tapez sur de nombreux appareils, car les mots sont plus faciles à saisir correctement, et un mot de passe à caractères aléatoires quand un gestionnaire de mots de passe le remplira pour vous.',
      },
      {
        question: 'Un mot de passe généré est-il garanti impiratable ?',
        answer:
          'Aucun mot de passe ne peut être garanti impiratable — un site peut quand même être piraté ou trompé par hameçonnage. Un mot de passe long, unique et généré aléatoirement, stocké dans un gestionnaire de mots de passe, est toutefois l’une des défenses pratiques les plus solides que vous puissiez utiliser.',
      },
    ],
  },
  'file-hash-verifier': {
    instructions: [
      {
        title: 'Sélectionnez un fichier depuis votre appareil',
        description:
          'Choisissez une archive, un installateur, un PDF ou un fichier binaire. Le fichier est lu strictement dans la mémoire locale du navigateur (recommandé sous 500 Mo) et n’est jamais envoyé.',
      },
      {
        title: 'Attendez le calcul des empreintes',
        description:
          'Le navigateur calcule SHA-256, SHA-512, SHA-384 et SHA-1 en parallèle avec Web Crypto accéléré par le matériel. Les fichiers plus volumineux prennent quelques secondes.',
      },
      {
        title: 'Inspectez les empreintes cryptographiques calculées',
        description:
          'Examinez les hashs hexadécimaux SHA-256, SHA-512, SHA-384 et SHA-1 hérité avec les métadonnées du fichier, et téléchargez un fichier texte .sha256 standard si nécessaire.',
      },
      {
        title: 'Vérifiez par rapport à une somme de contrôle publiée',
        description:
          'Collez la chaîne SHA-256/512/384/1 attendue — ou une ligne entière « <hash>  nomdefichier » d’un fichier .sha256sum — pour confirmer une correspondance exacte ou détecter corruption et altération.',
      },
      {
        title: 'Copiez ou exportez le hash',
        description:
          'Copiez n’importe quelle empreinte en un clic, ou téléchargez le fichier texte .sha256 standard pour l’expédier avec une version ou le conserver comme preuve de vérification.',
      },
      {
        title: 'Agissez en cas de non-correspondance ou de fichier volumineux',
        description:
          'Si les hashs ne correspondent pas, supprimez le fichier et téléchargez-le de nouveau depuis la source officielle. Pour les fichiers de plus de ~500 Mo, utilisez shasum -a 256 ou certutil, car le navigateur charge tout le fichier en mémoire.',
      },
    ],
    examples: [
      {
        title: 'Vérifier un binaire de version téléchargé par rapport à un .sha256sum de fournisseur',
        input: 'Fichier : app-v2.tar.gz · Attendu : « e3b0c442...  app-v2.tar.gz »',
        output: 'Somme de contrôle vérifiée ! Correspond proprement à l’empreinte SHA-256 calculée.',
        explanation: 'Extrait automatiquement le jeton de hash initial, ignore la casse et compare avec les 4 algorithmes calculés.',
      },
      {
        title: 'Générer un manifeste .sha256 pour une livraison client',
        input: 'Fichier : rapport-final.pdf · Algorithme : SHA-256',
        output: 'Fichier texte rapport-final.pdf.sha256 téléchargeable avec l’empreinte et le nom de fichier',
        explanation: 'Le fichier .sha256 standard permet aux destinataires de vérifier la livraison octet par octet.',
      },
    ],
    benefits: [
      'Utilise Web Crypto SubtleCrypto natif du navigateur, accéléré par le matériel en C++',
      'Prend en charge le collage de lignes complètes « <hash>  nomdefichier » depuis les manifestes .sha256sum de versions',
      'Exporte des fichiers de vérification filename.sha256 standard en un clic',
      'Zéro envoi de fichier garde les builds et contrats confidentiels privés',
    ],
    useCases: [
      'Vérifier des ISO Linux, binaires CLI ou archives tar open source sans ouvrir un terminal',
      'Confirmer la livraison exacte octet par octet d’archives juridiques ou financières',
      'Générer des manifestes .sha256 de version pour de petites livraisons clients',
      'Détecter les téléchargements tronqués ou corrompus avant l’extraction',
    ],
    faqs: [
      {
        question: 'Y a-t-il une limite de taille de fichier maximale ?',
        answer:
          'Comme File.arrayBuffer() du navigateur charge tout le fichier dans la RAM cliente d’un coup, les fichiers jusqu’à ~300–500 Mo fonctionnent sans problème, tandis que les ISO de plusieurs gigaoctets peuvent dépasser les quotas de mémoire du navigateur — pour les fichiers multi-Go, les outils CLI natifs (shasum -a 256 ou certutil) sont recommandés.',
      },
      {
        question: 'Pourquoi SHA-1 est-il étiqueté compatibilité héritée uniquement ?',
        answer:
          'SHA-1 présente des faiblesses de collision pratiques connues et ne doit pas être fiable pour des garanties de sécurité adverses ; préférez SHA-256 ou SHA-512 chaque fois que possible.',
      },
      {
        question: 'Vous cherchez à hasher des chaînes de texte brutes plutôt que des fichiers binaires ?',
        answer:
          'Consultez notre outil Générateur de hash dans les outils développeur pour le hachage instantané de texte UTF-8.',
      },
      {
        question: 'Le vérificateur de hash de fichier est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et vous pouvez vérifier autant de fichiers que vous le souhaitez.',
      },
      {
        question: 'Mes fichiers sont-ils envoyés quelque part quand je les vérifie ?',
        answer:
          'Non. Le hachage se fait entièrement dans votre navigateur avec l’API Web Crypto : vos fichiers ne quittent jamais votre appareil — c’est exactement pourquoi il est sûr pour les builds et contrats confidentiels.',
      },
      {
        question: 'Qu’est-ce qu’un hash de fichier, et pourquoi faut-il le vérifier ?',
        answer:
          'Un hash est une empreinte de longueur fixe calculée à partir des octets exacts d’un fichier. Si un seul octet change, le hash change complètement : comparer les hashs prouve donc qu’un téléchargement est arrivé intact et non modifié.',
      },
      {
        question: 'Quel algorithme de hash utiliser : SHA-256, SHA-512 ou SHA-1 ?',
        answer:
          'Utilisez SHA-256 pour la vérification générale — c’est la norme fournie par les éditeurs. SHA-512 est tout aussi fort et plus rapide sur les systèmes 64 bits, tandis que SHA-1 est hérité uniquement et ne doit pas être fiable pour la sécurité.',
      },
      {
        question: 'Où trouver la somme de contrôle officielle à comparer ?',
        answer:
          'Les éditeurs la listent généralement sur la page de téléchargement ou dans un fichier .sha256 / .sha256sum à côté du téléchargement. Copiez-la toujours depuis le propre site du fournisseur, jamais depuis un miroir ou un forum.',
      },
      {
        question: 'Que faire si les hashs ne correspondent pas ?',
        answer:
          'N’exécutez pas et n’extrayez pas le fichier. Supprimez-le et téléchargez-le de nouveau depuis la source officielle ; une non-correspondance signifie que le téléchargement a été corrompu, tronqué ou possiblement altéré.',
      },
      {
        question: 'Puis-je coller une ligne .sha256sum entière au lieu du hash seul ?',
        answer:
          'Oui. Le vérificateur accepte une ligne complète « <hash>  nomdefichier » d’un manifeste de version — il extrait automatiquement le jeton de hash initial, ignore la casse et le compare aux quatre algorithmes calculés.',
      },
      {
        question: 'Le hash dépend-il du nom du fichier ?',
        answer:
          'Non. L’empreinte est calculée uniquement à partir du contenu du fichier : renommer un fichier ne change donc jamais son hash. Deux fichiers avec les mêmes octets produisent toujours le même hash.',
      },
      {
        question: 'Puis-je vérifier un ISO Linux ou un gros installateur avec cet outil ?',
        answer:
          'Oui, jusqu’à environ 300–500 Mo. Pour les ISO de plusieurs gigaoctets, utilisez un outil natif comme shasum -a 256 sur macOS/Linux ou certutil -hashfile sur Windows, car les navigateurs chargent tout le fichier en mémoire.',
      },
      {
        question: 'Quelle est la différence entre SHA-256 et SHA-512 ?',
        answer:
          'Les deux sont des membres sécurisés de la famille SHA-2 ; SHA-256 produit une empreinte hexadécimale de 64 caractères et SHA-512 de 128 caractères. SHA-512 est légèrement plus fort et plus rapide sur le matériel 64 bits, mais SHA-256 est la somme de contrôle la plus largement publiée.',
      },
      {
        question: 'Cet outil peut-il détecter un virus ou un logiciel malveillant dans un fichier ?',
        answer:
          'Non. Un hash correspondant prouve seulement que le fichier est identique à celui que l’éditeur a publié. Si le propre fichier de l’éditeur était malveillant, le hash correspondrait quand même : vérifiez donc uniquement les téléchargements de sources en qui vous avez confiance.',
      },
      {
        question: 'Comment télécharger un fichier .sha256 pour ma propre version ?',
        answer:
          'Hashez ici votre fichier de version, puis téléchargez le fichier texte filename.sha256 standard généré par l’outil et publiez-le avec votre téléchargement pour que les utilisateurs puissent vérifier.',
      },
      {
        question: 'Pourquoi le hachage prend-il quelques secondes pour les gros fichiers ?',
        answer:
          'Le navigateur doit lire et traiter chaque octet du fichier. Les fichiers plus volumineux prennent simplement plus de temps, et le temps croît avec la taille du fichier plutôt qu’avec l’algorithme choisi.',
      },
      {
        question: 'Le vérificateur de hash de fichier fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Une fois la page chargée, tout le hachage s’exécute localement dans votre navigateur sans requête réseau : vous pouvez donc vérifier des fichiers sans connexion Internet.',
      },
      {
        question: 'Puis-je vérifier plusieurs fichiers à la fois ?',
        answer:
          'L’outil vérifie un fichier à la fois. Hashez chaque fichier séparément et comparez-le à sa propre somme de contrôle publiée.',
      },
      {
        question: 'Un hash correspondant prouve-t-il que le fichier est authentique ?',
        answer:
          'Il prouve que le fichier est identique octet par octet à celui que l’éditeur a hashé. Il ne prouve pas que l’éditeur est bien celui qu’il prétend être : obtenez donc le hash attendu depuis le canal officiel de l’éditeur.',
      },
      {
        question: 'L’outil stocke-t-il mes fichiers ou leurs hashs ?',
        answer:
          'Non. Rien n’est envoyé ni stocké, et les hashs calculés existent uniquement dans votre onglet de navigateur actuel jusqu’à ce que vous le fermiez ou l’actualisiez.',
      },
    ],
  },
  'favicon-generator': {
    instructions: [
      {
        title: 'Choisissez Badge monogramme ou Envoyer un logo',
        description:
          'Saisissez 1 à 3 initiales de marque avec des couleurs de fond et de texte personnalisées, ou passez à Envoyer une image de logo pour recadrer au centre une marque PNG/SVG/JPG existante.',
      },
      {
        title: 'Stylisez votre icône',
        description:
          'Choisissez vos lettres de monogramme et vos couleurs, ou ajustez le recadrage du logo envoyé pour que la marque soit centrée avec un remplissage uniforme de chaque côté.',
      },
      {
        title: 'Sélectionnez la forme des coins',
        description:
          'Choisissez l’encadrement Carré arrondi (style iOS/macOS), Cercle ou Carré net.',
      },
      {
        title: 'Prévisualisez chaque taille',
        description:
          'Vérifiez attentivement les aperçus 16×16 et 32×32 — une marque superbe en grand peut devenir floue à la taille d’onglet : simplifiez donc les lettres ou les détails si nécessaire.',
      },
      {
        title: 'Téléchargez favicon.ico, les PNG et le snippet HTML',
        description:
          'Téléchargez le bundle favicon.ico multi-cadres avec les tailles PNG individuelles et copiez les balises link <head> dans votre projet.',
      },
      {
        title: 'Installez les icônes et videz le cache',
        description:
          'Placez les fichiers dans votre dossier /public/, collez les balises link dans index.html, puis actualisez en dur ou videz le cache de votre navigateur — les navigateurs mettent les favicons en cache agressivement : une icône obsolète signifie généralement une icône mise en cache.',
      },
    ],
    examples: [
      {
        title: 'Démarrer les icônes d’une nouvelle application React ou Cloudflare Pages',
        input: 'Monogramme « UH » · Fond #4F46E5 · Forme : Carré arrondi',
        output: 'Favicon.ico binaire (cadres PNG 16+32+48 px) + 6 tailles PNG + snippet HTML <link>',
        explanation: 'Construit des en-têtes binaires ICONDIR et ICONDIRENTRY valides directement dans des tampons Uint8Array.',
      },
      {
        title: 'Créer un jeu d’icônes PWA depuis un logo carré',
        input: 'Logo PNG carré 512×512 avec fond transparent · Forme : Carré arrondi',
        output: 'Icônes PWA 192×192 et 512×512 + icône Apple Touch 180×180 + favicon.ico',
        explanation: 'Les images sources carrées se recadrent proprement à toutes les tailles sans couper les bords du logo.',
      },
    ],
    benefits: [
      'Construit un vrai fichier .ico binaire multi-cadres (16×16, 32×32 et 48×48), pas un PNG renommé',
      'Couvre les onglets de bureau, Apple Touch (180×180) et les icônes de manifeste web (192/512 px)',
      'Le mode Monogramme instantané ne nécessite aucun logiciel de design pour les projets annexes et MVP',
      'Génère un modèle HTML5 <link rel="icon"> propre, prêt à coller dans index.html',
    ],
    useCases: [
      'Expédier les favicons et icônes Apple Touch manquants avant les lancements SaaS ou de microsites',
      'Créer des icônes d’onglet à fort contraste pour les tableaux de bord de test et de production',
      'Transformer des marques SVG/PNG carrées en jeux d’icônes PWA complets',
      'Générer des aperçus nets 16×16 et 32×32 pour vérifier la lisibilité en petite taille',
    ],
    faqs: [
      {
        question: 'Le favicon.ico téléchargé est-il un vrai fichier binaire ICO ?',
        answer:
          'Oui. Il écrit des en-têtes ICONDIR ICO Windows standard et des entrées de répertoire contenant trois cadres nets encodés en PNG (16×16, 32×32 et 48×48) pris en charge par tous les navigateurs et systèmes d’exploitation modernes.',
      },
      {
        question: 'Quelles tailles d’icônes les sites web modernes ont-ils réellement besoin ?',
        answer:
          'Un favicon.ico plus un PNG 32×32, une icône Apple Touch 180×180 et des PNG de manifeste web 192×192 / 512×512 couvrent pratiquement tous les navigateurs de bureau, iOS mobiles et Android.',
      },
      {
        question: 'Où placer ces fichiers dans un projet React + Vite ?',
        answer:
          'Placez favicon.ico et les icônes PNG dans le dossier /public/ de votre projet et collez les balises HTML <link> dans le <head> de index.html.',
      },
      {
        question: 'Le générateur de favicon est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et toutes les icônes sont générées localement dans votre navigateur.',
      },
      {
        question: 'Mes logos envoyés sont-ils transmis à un serveur ?',
        answer:
          'Non. Votre logo est traité entièrement dans votre navigateur et n’est jamais envoyé : vos ressources de marque restent privées.',
      },
      {
        question: 'Quelle est la différence entre un favicon.ico et un favicon PNG ?',
        answer:
          'Un favicon.ico est un conteneur contenant plusieurs tailles d’icônes dans un seul fichier binaire, que les navigateurs prennent en charge depuis des décennies. Un favicon PNG est une image à taille unique ; les navigateurs modernes acceptent les deux, mais .ico reste le choix par défaut le plus sûr.',
      },
      {
        question: 'Qu’est-ce qu’une icône Apple Touch ?',
        answer:
          'C’est l’icône PNG 180×180 qu’iOS utilise quand quelqu’un ajoute votre site à son écran d’accueil. Sans elle, iOS prend une capture d’écran de votre page, ce qui paraît généralement médiocre.',
      },
      {
        question: 'À quoi servent les icônes PWA 192×192 et 512×512 ?',
        answer:
          'Ce sont les icônes listées dans le manifeste de votre application web pour les Progressive Web Apps installables. Android et Chrome les utilisent pour l’icône d’écran d’accueil, l’écran de démarrage et le lanceur d’applications.',
      },
      {
        question: 'Puis-je créer un favicon à partir de texte sans logo ?',
        answer:
          'Oui. Le mode Monogramme transforme 1 à 3 lettres, comme les initiales de votre marque, en un badge propre avec votre choix de couleur de fond, de couleur de texte et de forme de coin — sans logiciel de design.',
      },
      {
        question: 'Quel fichier de logo envoyer pour le meilleur résultat ?',
        answer:
          'Envoyez un PNG ou SVG carré avec un fond transparent à 512×512 ou plus. Les images sources carrées se recadrent proprement ; les logos larges ou hauts sont recadrés au centre, ce qui peut couper les bords.',
      },
      {
        question: 'Pourquoi mon nouveau favicon ne s’affiche-t-il pas après le déploiement ?',
        answer:
          'Les navigateurs mettent les favicons en cache très agressivement. Actualisez en dur avec Ctrl+Maj+R (ou Cmd+Maj+R sur Mac), videz le cache du site ou testez dans une fenêtre privée pour voir la nouvelle icône.',
      },
      {
        question: 'Le favicon doit-il correspondre exactement à mon logo ?',
        answer:
          'En grande taille oui, mais à 16×16 les fins détails disparaissent. Simplifiez la marque pour les plus petites tailles — des initiales en gras ou une seule forme en gras se lisent bien mieux qu’un logo détaillé.',
      },
      {
        question: 'Quelle forme de coin choisir ?',
        answer:
          'Le carré arrondi correspond au style des icônes d’application iOS et macOS, le cercle convient aux avatars et aux marques de style social, et le carré net est le meilleur pour les marques géométriques ou techniques.',
      },
      {
        question: 'Faut-il ajouter des balises link HTML pour les icônes ?',
        answer:
          'Oui pour des résultats fiables. Les navigateurs cherchent /favicon.ico par défaut, mais les icônes Apple Touch et PWA ne se chargent que quand vous les déclarez avec des balises <link> dans le <head> de votre page, que cet outil génère pour vous.',
      },
      {
        question: 'Puis-je utiliser les icônes générées aussi pour une application mobile ?',
        answer:
          'Les PNG 192×192 et 512×512 fonctionnent pour les installations PWA, mais les applications natives iOS et Android nécessitent leurs propres jeux d’icônes avec des tailles et formats spécifiques, que cet outil orienté web ne génère pas.',
      },
      {
        question: 'Le générateur de favicon fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Une fois la page chargée, la génération d’icônes s’exécute entièrement dans votre navigateur sans requête réseau.',
      },
      {
        question: 'Quelle couleur de fond fonctionne le mieux pour un favicon monogramme ?',
        answer:
          'Une couleur de marque unie à fort contraste avec des lettres blanches ou presque blanches fonctionne le mieux, car elle reste lisible à 16×16. Évitez le texte clair sur fond clair et les dégradés chargés.',
      },
      {
        question: 'Puis-je régénérer des icônes après avoir changé les couleurs de ma marque ?',
        answer:
          'Oui. Mettez simplement à jour les couleurs ou envoyez le nouveau logo et téléchargez un nouveau jeu — l’outil ne garde rien de votre session précédente, donc chaque exécution repart de zéro.',
      },
      {
        question: 'Le favicon fonctionnera-t-il dans les onglets de navigateur en mode sombre ?',
        answer:
          'Un favicon avec une couleur de fond unie s’affiche de la même façon dans les onglets clairs et sombres. Si votre marque est sombre sur transparent, ajoutez un fond clair ou un contour pour qu’elle reste visible sur le chrome sombre du navigateur.',
      },
      {
        question: 'L’outil stocke-t-il mes logos ou mes icônes générées ?',
        answer:
          'Non. Tout s’exécute localement dans votre onglet de navigateur, rien n’est envoyé ni stocké, et vos fichiers disparaissent quand vous fermez ou actualisez la page.',
      },
    ],
  },
};
