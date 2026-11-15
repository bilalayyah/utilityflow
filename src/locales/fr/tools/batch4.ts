import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 4: Social (10) + PDF (10) tools (20 tools).
 * Source: src/registry/batches/batch4/socialToolsPart1.ts, Part2,
 * and src/registry/batches/batch5/pdfToolsPart1.ts, Part2.
 * Filled by Phase 2 translation (French, international).
 */
export const FR_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'generateur-code-qr',
    name: 'Générateur de Code QR',
    shortDescription:
      'Générez des codes QR personnalisés et lisibles pour des URL, du texte brut, des connexions Wi-Fi, des e-mails ou des numéros de téléphone, avec export PNG et SVG.',
    keywords: [
      'générateur de code qr',
      'créateur de code qr gratuit',
      'code qr wifi',
      'générateur de code qr svg',
      'créer code qr en ligne',
      'code qr pour mot de passe wifi',
      'téléchargement code qr png',
      'générateur de code qr gratuit sans inscription',
      'créateur de code qr pour cartes de visite',
    ],
    seo: {
      title: 'Générateur de Code QR – Codes QR PNG et SVG | UtilityFlow',
      description:
        'Créez des codes QR statiques gratuits pour URL, Wi-Fi, texte et e-mails dans votre navigateur — sans inscription — et téléchargez des PNG ou SVG nets.',
      primaryKeyword: 'générateur de code qr',
      secondaryKeywords: [
        'générateur de code qr wifi',
        'créateur de code qr svg',
        'code qr personnalisé en couleur',
        'créateur de code qr pour impression',
      ],
      longTailKeywords: [
        'générer code qr statique sans expiration ni suivi',
        'créer code qr wifi lisible dans le navigateur',
        'télécharger code qr svg vectoriel gratuit',
        'créer code qr pour carte de visite gratuit en ligne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Encodez des URL de sites web, des identifiants Wi-Fi, du texte brut, des liens e-mail ou des numéros de téléphone en codes QR nets conformes aux normes ISO, directement dans votre navigateur — sans aucune limite d’expiration, sans redirection de suivi et avec des téléchargements instantanés en PNG ou en SVG vectoriel.',
  },
  'utm-link-builder': {
    slug: 'createur-liens-utm',
    name: 'Créateur de Liens UTM',
    shortDescription:
      'Créez des URL de suivi de campagne propres avec les paramètres utm_source, utm_medium, utm_campaign, utm_term et utm_content.',
    keywords: [
      'créateur de liens utm',
      'créateur d’url de campagne',
      'générateur utm',
      'utm google analytics',
      'créateur utm gratuit',
      'générateur de paramètres utm',
      'créateur de liens de suivi de campagne',
      'générateur de liens utm instagram',
      'générateur de liens utm pour e-mail',
    ],
    seo: {
      title: 'Créateur de Liens UTM – Suivi de Campagne | UtilityFlow',
      description:
        'Créez des URL de campagne UTM pour les réseaux sociaux, les e-mails et les publicités, avec des préréglages et une normalisation en minuscules — gratuit.',
      primaryKeyword: 'créateur de liens utm',
      secondaryKeywords: [
        'créateur d’url de campagne',
        'générateur de balises utm',
        'url de suivi pour réseaux sociaux',
        'créateur d’url utm pour bio instagram',
      ],
      longTailKeywords: [
        'créer des liens de suivi utm cohérents en minuscules en ligne',
        'générateur utm qui préserve les chaînes de requête et ancres',
        'modèles de liens utm pour bio instagram et newsletter',
        'comment créer des liens utm pour campagnes sociales',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Générez des URL de suivi de campagne propres et standardisées pour les bios sociales, les parrainages de créateurs, les publicités payantes et les newsletters, tout en préservant les chaînes de requête existantes et les fragments d’URL (#section).',
  },
  'social-character-limit-checker': {
    slug: 'compteur-caracteres-reseaux-sociaux',
    name: 'Vérificateur de Limite de Caractères pour Réseaux Sociaux',
    shortDescription:
      'Mesurez la longueur des textes sur X, Instagram, LinkedIn, TikTok, Threads, Bluesky et YouTube, avec des aperçus de repli dans le fil.',
    keywords: [
      'vérificateur de limite de caractères sociaux',
      'compteur de caractères twitter',
      'limite de légende instagram',
      'vérificateur de longueur de publication linkedin',
      'compteur de caractères x',
      'compteur de caractères de légende instagram',
      'vérificateur de limite de légende tiktok',
      'limite de caractères threads',
      'compteur de caractères bluesky',
    ],
    seo: {
      title: 'Vérificateur de Limite de Caractères – Réseaux | UtilityFlow',
      description:
        'Vérifiez les limites de caractères et les aperçus de repli pour X, Instagram, LinkedIn, TikTok, Threads, Bluesky et YouTube — avec un comptage des émojis.',
      primaryKeyword: 'vérificateur de limite de caractères',
      secondaryKeywords: [
        'compteur de publication x twitter',
        'vérificateur de longueur de légende instagram',
        'aperçu du repli voir plus linkedin',
        'compteur de caractères de légende tiktok',
      ],
      longTailKeywords: [
        'vérifier limite de caractères et repli sur les plateformes sociales',
        'compteur twitter 280 caractères avec pondération url 23 caractères',
        'compteur bio instagram 150 caractères et légende',
        'combien de caractères dans une bio instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Écrivez une fois et vérifiez instantanément les plafonds stricts de caractères, la pondération des liens t.co de 23 caractères sur X, le nombre de hashtags et les aperçus de troncature au-dessus du repli sur 10 grandes surfaces sociales.',
  },
  'unicode-fancy-text-formatter': {
    slug: 'formateur-texte-unicode',
    name: 'Formateur de Texte Unicode Élégant',
    shortDescription:
      'Convertissez du texte ASCII brut en styles Unicode gras, italique, monospace, script, petites capitales et pleine largeur pour les bios.',
    keywords: [
      'générateur de texte élégant',
      'texte unicode en gras',
      'formateur de police pour bio instagram',
      'générateur de petites capitales',
      'générateur de texte en gras pour instagram',
      'générateur de texte unicode en italique',
      'générateur de texte monospace',
      'générateur de texte script',
      'générateur de texte pleine largeur',
    ],
    seo: {
      title: 'Formateur de Texte Unicode Élégant – Styles | UtilityFlow',
      description:
        'Transformez du texte brut en styles Unicode gras, italique, monospace, script et petites capitales pour bios et publications — copiez-collez partout, gratuit.',
      primaryKeyword: 'formateur de texte unicode élégant',
      secondaryKeywords: [
        'générateur de texte unicode en gras',
        'convertisseur de texte en petites capitales',
        'polices pour bios de réseaux sociaux',
        'texte gras italique pour bios sociales',
      ],
      longTailKeywords: [
        'copier-coller texte unicode en gras pour linkedin et instagram',
        'convertir texte brut en petites capitales et monospace unicode',
        'conseils d’accessibilité pour texte social stylé unicode',
        'comment mettre du texte en gras dans une bio instagram sans appli',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez des lettres et des chiffres bruts en symboles alphanumériques mathématiques Unicode standard, en petites capitales et en glyphes pleine largeur qui conservent le style gras ou monospace dans les bios sociales en texte brut.',
  },
  'bio-line-break-formatter': {
    slug: 'formateur-sauts-ligne-bio',
    name: 'Formateur de Sauts de Ligne pour Bio Instagram',
    shortDescription:
      'Préservez des paragraphes vides propres dans les légendes et les bios Instagram en supprimant les espaces de fin et en ajoutant des espaces invisibles.',
    keywords: [
      'générateur de sauts de ligne instagram',
      'formateur de sauts de ligne pour bio',
      'outil d’espacement de légende',
      'saut de ligne invisible pour réseaux sociaux',
      'espaceur de légende instagram',
      'sauts de ligne pour bio instagram',
      'outil de saut de ligne de légende',
      'caractère invisible pour instagram',
      'sauts de ligne pour bio tiktok',
    ],
    seo: {
      title: 'Formateur de Sauts de Ligne Bio – Instagram | UtilityFlow',
      description:
        'Gardez un espacement de paragraphe propre dans les légendes et bios Instagram, Threads et TikTok — supprimez les espaces de fin et copiez facilement en un clic.',
      primaryKeyword: 'formateur de sauts de ligne bio',
      secondaryKeywords: [
        'sauts de ligne de légende instagram',
        'espaceur invisible pour bio instagram',
        'préserver les lignes vides sur les réseaux sociaux',
        'outil d’espacement de bio instagram',
      ],
      longTailKeywords: [
        'garder l’espacement des paragraphes dans les légendes instagram sans points',
        'corriger les espaces de fin qui cassent les sauts de ligne de bio instagram',
        'copier une légende sociale formatée proprement dans le presse-papiers',
        'comment ajouter des sauts de ligne dans une bio instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Empêchez les applications sociales de fusionner les lignes vides de vos légendes et bios en supprimant les espaces de fin cachés et en insérant éventuellement des espaces invisibles Braille Blank (⠀) dans les intervalles de paragraphe.',
  },
  'youtube-timestamp-generator': {
    slug: 'generateur-horodatage-youtube',
    name: 'Générateur d’Horodatage et de Chapitres YouTube',
    shortDescription:
      'Créez des descriptions de chapitres de vidéos YouTube triées, validées selon les spécifications YouTube, et générez des liens de saut ?t= cliquables.',
    keywords: [
      'générateur d’horodatage youtube',
      'créateur de chapitres youtube',
      'générateur de liens temporels youtube',
      'formateur de chapitres vidéo',
      'créateur d’horodatage de chapitres youtube',
      'outil de chapitres de description youtube',
      'liens d’horodatage youtube cliquables',
      'validateur de chapitres youtube',
      'générateur de codes temporels de chapitres vidéo',
    ],
    seo: {
      title: 'Générateur d’Horodatage YouTube – Chapitres | UtilityFlow',
      description:
        'Créez des chapitres YouTube triés et validés : début à 00:00, 3 chapitres minimum et espacement de 10 secondes, plus des liens de saut ?t= cliquables.',
      primaryKeyword: 'générateur d’horodatage youtube',
      secondaryKeywords: [
        'formateur de chapitres youtube',
        'créateur d’url d’horodatage youtube',
        'liste de vérification des chapitres vidéo',
        'outil de code temporel de chapitres youtube',
      ],
      longTailKeywords: [
        'générer bloc de description de chapitres vidéo youtube en ligne',
        'créer liens de saut d’horodatage youtube cliquables pour chapitres',
        'valider règle youtube des 10 secondes minimum entre chapitres',
        'formater chapitres youtube commençant à 00:00 avec trois chapitres',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Assemblez des blocs de chapitres YouTube propres et triés chronologiquement pour vos descriptions de vidéos — vérifiés automatiquement par rapport aux règles officielles des chapitres YouTube — et générez des liens de saut `?t=` cliquables pour les commentaires, les newsletters ou les notes d’émission.',
  },
  'social-thumbnail-previewer': {
    slug: 'apercu-miniatures-reseaux-sociaux',
    name: 'Aperçu de Miniatures YouTube et Sociales',
    shortDescription:
      'Prévisualisez les images de miniatures locales avec les titres dans les mises en page de fil de bureau et de barre latérale, avec des vérifications 16:9 et 2 Mo.',
    keywords: [
      'aperçu de miniature youtube',
      'testeur de miniature',
      'aperçu de troncature de titre vidéo',
      'vérificateur de miniature 16:9',
      'vérificateur de taille de miniature youtube',
      'aperçu de miniature en mode sombre',
      'aperçu de miniature de fil youtube',
      'vérificateur de zone sûre de miniature',
      'outil de maquette de miniature vidéo',
    ],
    seo: {
      title: 'Aperçu de Miniatures YouTube et Sociales | UtilityFlow',
      description:
        'Prévisualisez miniature et titre dans les fils YouTube clairs et sombres avant la publication, avec des vérifications 16:9, 1280×720 et 2 Mo — sans envoi.',
      primaryKeyword: 'aperçu de miniature youtube',
      secondaryKeywords: [
        'aperçu de miniature dans le fil',
        'vérificateur de longueur de titre youtube',
        'outil de zone sûre de miniature',
        'vérificateur de taille de miniature youtube',
      ],
      longTailKeywords: [
        'prévisualiser miniature youtube en mode sombre avant publication',
        'vérifier chevauchement du badge d’horodatage en bas à droite',
        'vérificateur privé de miniature 1280x720 côté client',
        'tester lisibilité de miniature youtube en taille barre latérale',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Testez vos miniatures et titres de vidéos non publiés dans des mises en page réalistes de fil d’accueil clair et sombre et de barre latérale compacte — en vérifiant localement les dimensions HD 1280×720, le rapport 16:9, la limite de taille de fichier de 2 Mo et le chevauchement de l’horodatage en bas à droite.',
  },
  'hashtag-formatter': {
    slug: 'formateur-hashtags',
    name: 'Formateur de Hashtags et Gestionnaire de Groupes',
    shortDescription:
      'Nettoyez les mots-clés désordonnés, supprimez les hashtags en double, formatez des balises #CamelCase accessibles et vérifiez les limites des plateformes.',
    keywords: [
      'formateur de hashtags',
      'nettoyeur de hashtags',
      'convertisseur de hashtags camelcase',
      'supprimer hashtags en double',
      'générateur de hashtags à partir de mots-clés',
      'vérificateur de limite de hashtags instagram',
      'convertisseur de casse de hashtags',
      'outil de nettoyage de liste de hashtags',
      'formateur de groupes de hashtags',
    ],
    seo: {
      title: 'Formateur de Hashtags – CamelCase et Compteur | UtilityFlow',
      description:
        'Normalisez les mots-clés en hashtags #CamelCase ou minuscules, supprimez doublons et ponctuation invalide, et vérifiez le plafond de 30 balises Instagram.',
      primaryKeyword: 'formateur de hashtags',
      secondaryKeywords: [
        'générateur de hashtags camelcase',
        'suppression de hashtags en double',
        'compteur de hashtags instagram',
        'convertisseur de casse de hashtags',
      ],
      longTailKeywords: [
        'convertir liste de mots-clés en hashtags camelcase accessibles',
        'supprimer hashtags en double et ponctuation invalide en ligne',
        'formater groupes de hashtags avec séparateurs à points',
        'vérifier limite de 30 hashtags instagram avant publication',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez des mots-clés séparés par des virgules ou des tas de balises désordonnés en hashtags dédupliqués et propres en ponctuation, formatés en `#CamelCase` convivial pour les lecteurs d’écran ou en minuscules, prêts pour des blocs de légende en une ligne, verticaux ou séparés par des points.',
  },
  'caption-template-builder': {
    slug: 'createur-modeles-legendes',
    name: 'Créateur de Modèles de Légendes et d’Accroches',
    shortDescription:
      'Assemblez des légendes sociales structurées avec des modèles déterministes PAS, Tutoriel, Avant-Après-Pont et Liste de vérification.',
    keywords: [
      'créateur de modèles de légendes',
      'modèles de publications pour réseaux sociaux',
      'créateur de cadres d’accroche',
      'formateur de publication linkedin',
      'modèles de légendes instagram',
      'modèle de rédaction pas',
      'générateur d’accroches pour réseaux sociaux',
      'modèles de structure de publication',
      'outil de cadre de rédaction de légende',
    ],
    seo: {
      title: 'Créateur de Modèles de Légendes – Accroches | UtilityFlow',
      description:
        'Assemblez des légendes pour les réseaux sociaux avec les modèles PAS, Tutoriel et Avant-Après-Pont — vos propres mots, structurés, avec des compteurs.',
      primaryKeyword: 'créateur de modèles de légendes',
      secondaryKeywords: [
        'cadres de légendes pour réseaux sociaux',
        'créateur de structure de publication linkedin',
        'modèle de rédaction pas',
        'modèles de légendes instagram',
      ],
      longTailKeywords: [
        'créer des légendes linkedin et instagram structurées sans ia',
        'modèle de publication sociale problème agitation solution',
        'vérifier l’adéquation des caractères x et instagram en rédigeant',
        'modèle de légende avant après pont pour publications sociales',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Composez des publications sociales cohérentes et faciles à parcourir plus rapidement avec des modèles de rédaction déterministes — Problème–Agitation–Solution (PAS), Détail actionnable, Avant–Après–Pont, Liste de contrôle d’audit et Mythe contre Réalité — strictement à partir de vos propres entrées, sans texte IA inventé.',
  },
  'social-handle-formatter': {
    slug: 'formateur-noms-utilisateur',
    name: 'Formateur de Noms d’Utilisateur pour Réseaux Sociaux',
    shortDescription:
      'Générez des variations de pseudonymes de marque cohérentes, validez les règles de caractères et de syntaxe des plateformes et ouvrez des URL directes de vérification de profil.',
    keywords: [
      'formateur de pseudonymes sociaux',
      'validateur de syntaxe de nom d’utilisateur',
      'générateur de pseudonymes de marque',
      'règles de noms d’utilisateur sociaux',
      'vérificateur de disponibilité de nom d’utilisateur',
      'vérificateur de pseudonymes multiplateformes',
      'règles de nom d’utilisateur instagram',
      'limite de caractères de nom d’utilisateur x',
      'convertisseur de nom de marque en pseudonyme',
    ],
    seo: {
      title: 'Formateur de Noms d’Utilisateur – Règles | UtilityFlow',
      description:
        'Générez des variations de pseudonymes à partir d’un nom de marque, validez les règles de X, Instagram, TikTok, YouTube, Threads et GitHub, et ouvrez des URL.',
      primaryKeyword: 'formateur de noms d’utilisateur',
      secondaryKeywords: [
        'règles de noms d’utilisateur des réseaux sociaux',
        'générateur de variations de pseudonymes de marque',
        'règles de caractères des pseudonymes youtube',
        'vérificateur de disponibilité de nom d’utilisateur',
      ],
      longTailKeywords: [
        'vérifier longueur de caractères et symboles autorisés des noms d’utilisateur',
        'suggestions de pseudonymes de marque cohérents sur x instagram tiktok',
        'valider format de pseudonyme pour github youtube et threads',
        'trouver variations de pseudonymes de marque quand le nom exact est pris',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez n’importe quel nom de marque, de projet ou de créateur en candidats de pseudonymes propres multiplateformes, validez chaque candidat par rapport aux limites de caractères et aux règles de ponctuation officielles de six réseaux, et accédez directement aux URL de profils en direct pour vérifier la disponibilité.',
  },
  'merge-pdf': {
    slug: 'fusionner-pdf',
    name: 'Fusionner des PDF',
    shortDescription:
      'Combinez plusieurs documents PDF dans un ordre personnalisé dans votre navigateur, sans envoyer de fichiers à des serveurs externes.',
    keywords: [
      'fusionner pdf',
      'combiner fichiers pdf',
      'joindre pdf en ligne gratuit',
      'fusionneur pdf côté client',
      'fusionner fichiers pdf gratuit',
      'combiner plusieurs pdf en un seul',
      'fusionneur pdf sans envoi',
      'joindre documents pdf en ligne',
      'fusionner pages pdf dans l’ordre',
    ],
    seo: {
      title: 'Fusionner des PDF – Combiner des PDF Gratuit | UtilityFlow',
      description:
        'Combinez plusieurs fichiers PDF en un seul document dans l’ordre choisi, localement dans votre navigateur avec pdf-lib, sans aucun envoi vers un serveur.',
      primaryKeyword: 'fusionner pdf',
      secondaryKeywords: [
        'combiner fichiers pdf en ligne',
        'joindre pages pdf localement',
        'fusionneur pdf privé',
        'fusionner fichiers pdf gratuit',
      ],
      longTailKeywords: [
        'fusionner contrats pdf confidentiels sans envoi vers un serveur',
        'combiner plusieurs pdf et réorganiser l’ordre dans le navigateur',
        'combinateur de documents pdf gratuit côté client',
        'fusionner fichiers pdf dans l’ordre sans envoi',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combinez deux fichiers PDF ou plus en un seul document propre directement dans la mémoire du navigateur. Consultez le nombre de pages de chaque fichier, réorganisez les documents avec les contrôles haut/bas, choisissez un nom de fichier de sortie et téléchargez immédiatement.',
  },
  'split-pdf': {
    slug: 'diviser-pdf',
    name: 'Diviser et Extraire des Pages PDF',
    shortDescription:
      'Extrayez des plages de pages personnalisées, des pages paires ou impaires, ou éclatez des PDF individuels d’une seule page localement via pdf-lib.',
    keywords: [
      'diviser pdf',
      'extraire pages pdf',
      'séparer pages pdf',
      'extracteur de pages pdf',
      'diviser pages pdf gratuit',
      'diviseur pdf en ligne',
      'extraire pages de pdf gratuit',
      'éclater pdf en pages uniques',
      'diviser pdf par plage de pages',
    ],
    seo: {
      title: 'Diviser un PDF – Extraire des Pages Gratuit | UtilityFlow',
      description:
        'Extrayez des plages de pages PDF (comme 1-3, 5), séparez les pages paires ou impaires, ou éclatez des pages individuelles dans votre navigateur, sans envoi.',
      primaryKeyword: 'diviser pdf',
      secondaryKeywords: [
        'extraire pages de pdf',
        'extracteur de plage de pages pdf',
        'séparer pdf en pages uniques',
        'diviser pdf par plage de pages',
      ],
      longTailKeywords: [
        'extraire pages 1-3 et 5 de pdf sans envoi vers un serveur',
        'diviser pages paires et impaires de pdf dans le navigateur',
        'séparer pdf de plusieurs pages localement gratuit',
        'diviser pdf et télécharger uniquement les pages sélectionnées',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Extrayez des plages de pages exactes (`1-3, 5, 8-10`), isolez les pages paires ou impaires pour le réassemblage recto-verso, ou éclatez des PDF plus courts en fichiers individuels d’une seule page, entièrement dans la mémoire du client.',
  },
  'images-to-pdf': {
    slug: 'images-en-pdf',
    name: 'Convertisseur d’Images en PDF',
    shortDescription:
      'Convertissez des images PNG, JPG et WebP en un seul PDF A4, Lettre US ou adapté à l’image, localement dans votre navigateur.',
    keywords: [
      'images en pdf',
      'jpg en pdf',
      'convertisseur png en pdf',
      'webp en pdf',
      'convertir images en pdf gratuit',
      'jpg png en pdf',
      'convertisseur photo en pdf',
      'combiner images en un seul pdf',
      'capture d’écran en pdf',
    ],
    seo: {
      title: 'Images en PDF – Convertir JPG, PNG et WebP | UtilityFlow',
      description:
        'Transformez vos photos ou captures JPG, PNG et WebP en un seul PDF de plusieurs pages, avec des pages A4, Lettre US ou à taille exacte, dans votre navigateur.',
      primaryKeyword: 'images en pdf',
      secondaryKeywords: [
        'convertisseur jpg en pdf dans le navigateur',
        'png en pdf en ligne gratuit',
        'combiner photos en pdf',
        'convertir images en pdf gratuit',
      ],
      longTailKeywords: [
        'convertir images jpg png webp en pdf a4 sans envoi',
        'regrouper captures d’écran en pdf de plusieurs pages localement',
        'adapter dimensions d’image à la page pdf sans recadrage',
        'transformer photos de téléphone en document pdf gratuit',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combinez des numérisations, des reçus ou des captures JPG, PNG et WebP en un PDF propre de plusieurs pages. Ordonnez les images visuellement, choisissez A4 Portrait, Lettre US ou Dimensions exactes de l’image, définissez les marges et générez localement via `pdf-lib`.',
  },
  'pdf-to-images': {
    slug: 'pdf-en-images',
    name: 'PDF en Images (PNG / JPG)',
    shortDescription:
      'Convertissez les pages PDF en images PNG ou JPG téléchargeables à une résolution de 1,0× à 2,0× localement via PDF.js.',
    keywords: [
      'pdf en images',
      'pdf en png',
      'convertisseur pdf en jpg',
      'convertir pages pdf en images',
      'convertir pdf en png gratuit',
      'convertir pdf en jpg',
      'page pdf en image',
      'exporter pages pdf en png',
      'enregistrer pdf en image en ligne',
    ],
    seo: {
      title: 'PDF en Images – Exporter des Pages en PNG | UtilityFlow',
      description:
        'Convertissez les pages PDF en PNG ou en JPG jusqu’à 2× dans votre navigateur. Choisissez des pages exactes, prévisualisez le rendu et téléchargez l’essentiel.',
      primaryKeyword: 'pdf en images',
      secondaryKeywords: [
        'convertisseur pdf en png',
        'pdf en jpg en ligne gratuit',
        'extraire page pdf en image',
        'convertir pdf en png gratuit',
      ],
      longTailKeywords: [
        'convertir pages pdf en png haute résolution dans le navigateur',
        'enregistrer une seule page pdf en jpg sans envoyer le document',
        'moteur de rendu pdfjs côté client vers png',
        'convertir diapositives pdf en images png pour partage',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convertissez les pages PDF en images PNG nettes sans perte ou en images JPG compactes directement dans votre navigateur avec le moteur de rendu PDF.js de Mozilla — avec filtrage par plage de pages, sélection d’échelle (`1,0×`–`2,0×`) et aperçus visuels.',
  },
  'pdf-page-rotator': {
    slug: 'rotation-pages-pdf',
    name: 'Rotation de Pages PDF',
    shortDescription:
      'Faites pivoter toutes les pages, les pages paires ou impaires, ou des plages de pages précises de 90°, 180° ou 270° de façon permanente, sans perte de qualité.',
    keywords: [
      'pivoter pdf',
      'rotation de pages pdf',
      'corriger pages pdf de travers',
      'enregistrer pdf pivoté',
      'pivoter pages pdf en ligne gratuit',
      'pivoter pdf de 90 degrés',
      'corriger pdf pivoté',
      'pivoter pages pdf de façon permanente',
      'pivoter pages pdf numérisées',
    ],
    seo: {
      title: 'Rotation de Pages PDF – Corriger les Pages | UtilityFlow',
      description:
        'Faites pivoter les pages PDF de travers ou à l’envers de 90°, 180° ou 270° sur toutes les pages, paires/impaires ou des plages personnalisées, gratuitement.',
      primaryKeyword: 'rotation de pages pdf',
      secondaryKeywords: [
        'pivoter pdf de façon permanente',
        'corriger scan pdf à l’envers',
        'pivoter pages pdf précises',
        'pivoter pdf de 90 degrés en ligne',
      ],
      longTailKeywords: [
        'pivoter uniquement les pages 2 et 4 d’un document pdf en ligne',
        'pivoter pdf numérisé de 90 degrés de façon permanente sans réencodage',
        'outil d’orientation de pages pdf côté client',
        'pivoter pages pdf à l’envers de façon permanente gratuit',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrigez définitivement les tableaux en paysage de travers ou les numérisations de documents à l’envers dans le dictionnaire de pages du PDF. Appliquez des rotations de `90°` dans le sens horaire, `90°` dans le sens antihoraire ou `180°` à chaque page, aux feuilles paires/impaires ou à des plages de pages exactes.',
  },
  'reorder-delete-pdf-pages': {
    slug: 'reorganiser-supprimer-pages-pdf',
    name: 'Réorganiser et Supprimer des Pages PDF',
    shortDescription:
      'Inspectez visuellement les miniatures PDF, déplacez les pages vers le haut ou le bas, dupliquez des feuilles ou supprimez les pages indésirables localement.',
    keywords: [
      'réorganiser pages pdf',
      'supprimer pages pdf',
      'réarranger pdf',
      'retirer pages de pdf',
      'réorganiser pages pdf en ligne',
      'supprimer pages vides de pdf',
      'dupliquer page pdf',
      'organiser pages pdf',
      'déplacer pages pdf',
    ],
    seo: {
      title: 'Réorganiser les Pages PDF – Déplacer | UtilityFlow',
      description:
        'Réorganisez les pages PDF dans votre navigateur : déplacez, dupliquez ou supprimez des pages avec des miniatures en direct et téléchargez un fichier propre.',
      primaryKeyword: 'réorganiser pages pdf',
      secondaryKeywords: [
        'supprimer pages de pdf',
        'réarranger pdf en ligne',
        'retirer pages pdf vides',
        'réorganiser pages pdf en ligne',
      ],
      longTailKeywords: [
        'réorganiser et retirer visuellement pages pdf sans envoi',
        'dupliquer une page dans un pdf existant dans le navigateur',
        'réorganiser séquence de pages pdf gratuit côté client',
        'réorganiser pages pdf en ligne gratuit dans le navigateur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Consultez les cartes de pages rendues de votre PDF, déplacez les pages mal placées vers l’avant ou l’arrière, dupliquez les pages de garde ou de modèle, supprimez les pages vides et exportez un PDF propre réorganisé localement.',
  },
  'pdf-watermark': {
    slug: 'filigrane-pdf',
    name: 'Outil de Filigrane PDF',
    shortDescription:
      'Apposez des filigranes de texte diagonaux personnalisables comme CONFIDENTIEL ou BROUILLON sur les pages PDF, avec taille et opacité personnalisées.',
    keywords: [
      'filigrane pdf',
      'ajouter filigrane à pdf',
      'tampon pdf confidentiel',
      'filigrane pdf brouillon',
      'filigrane pdf en ligne gratuit',
      'ajouter tampon brouillon à pdf',
      'filigrane confidentiel pdf',
      'créateur de filigrane pdf',
      'tamponner pages pdf',
    ],
    seo: {
      title: 'Filigrane PDF – Ajouter des Tampons Gratuit | UtilityFlow',
      description:
        'Ajoutez un filigrane PDF à vos documents dans votre navigateur : texte diagonal ou centré, taille, opacité, angle et couleur, sans envoi — gratuit et privé.',
      primaryKeyword: 'filigrane pdf',
      secondaryKeywords: [
        'ajouter tampon confidentiel à pdf',
        'ajouter un filigrane dans le navigateur',
        'outil de superposition brouillon pdf',
        'tampon pdf gratuit en ligne',
      ],
      longTailKeywords: [
        'ajouter filigrane diagonal semi-transparent à pdf sans envoi',
        'filigrane uniquement première page du contrat pdf',
        'tampon de texte vectoriel sur pages pdf gratuit',
        'ajouter filigrane confidentiel à pdf gratuit dans le navigateur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Apposez des filigranes de texte vectoriel centrés ou diagonaux — comme `CONFIDENTIEL`, `BROUILLON` ou `NE PAS DISTRIBUER` — sur toutes les pages ou sur la page de garde de n’importe quel PDF, avec des contrôles en direct de la taille de police, de l’opacité, de l’angle de rotation et de la couleur de marque.',
  },
  'add-pdf-page-numbers': {
    slug: 'ajouter-numeros-page-pdf',
    name: 'Ajouter des Numéros de Page au PDF',
    shortDescription:
      'Insérez des numéros de page vectoriels propres (« Page 1 sur N », « 1 / N » ou « 1 ») dans les documents PDF, avec saut de la page de garde.',
    keywords: [
      'ajouter numéros de page à pdf',
      'numérotation de pages pdf',
      'numéroter pages pdf en ligne',
      'numéros de page style bates',
      'numéroter pages pdf',
      'ajouter numéros de page pdf gratuit',
      'numéros de page de pied de page pdf',
      'page x sur n pdf',
      'paginer pdf en ligne',
    ],
    seo: {
      title: 'Ajouter des Numéros de Page au PDF – Gratuit | UtilityFlow',
      description:
        'Ajoutez des numéros de page aux PDF avec des libellés vectoriels, le saut de la page de garde et un numéro de départ — sans envoi ni inscription, gratuit.',
      primaryKeyword: 'ajouter numéros de page à pdf',
      secondaryKeywords: [
        'outil de numéros de page pdf',
        'numéroter pages pdf dans le navigateur',
        'sauter page de garde numérotation pdf',
        'paginer pdf en ligne',
      ],
      longTailKeywords: [
        'ajouter numéros de pied de page page 1 sur n au pdf fusionné',
        'commencer numérotation pdf à la page 2 sauter page de titre',
        'outil de pagination pdf vectoriel côté client',
        'ajouter numéros de page à pdf gratuit sans envoi',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Numérotez proprement les paquets fusionnés, les pièces juridiques ou les soumissions académiques avec une typographie vectorielle nette — en choisissant `Page 1 sur N`, `1 / N` ou des chiffres seuls, l’alignement bas/haut, des numéros de départ personnalisés et le saut facultatif de la page de garde.',
  },
  'pdf-metadata-editor': {
    slug: 'editeur-metadonnees-pdf',
    name: 'Inspecteur et Éditeur de Métadonnées PDF',
    shortDescription:
      'Consultez, mettez à jour ou supprimez les balises Titre, Auteur, Sujet, Mots-clés, Créateur et Producteur du PDF, en privé dans la mémoire du navigateur.',
    keywords: [
      'éditeur de métadonnées pdf',
      'visionneuse de métadonnées pdf',
      'supprimer auteur de pdf',
      'supprimer métadonnées pdf',
      'modifier métadonnées pdf',
      'changer titre pdf',
      'éditeur de propriétés pdf',
      'suppresseur d’auteur pdf',
      'voir métadonnées pdf',
    ],
    seo: {
      title: 'Éditeur de Métadonnées PDF – Voir et Modifier | UtilityFlow',
      description:
        'Consultez, mettez à jour ou supprimez les balises Titre, Auteur, Sujet, Mots-clés, Créateur et Producteur d’un PDF, en privé dans votre navigateur — gratuit.',
      primaryKeyword: 'éditeur de métadonnées pdf',
      secondaryKeywords: [
        'visionneuse de métadonnées pdf',
        'supprimer métadonnées d’auteur pdf',
        'changer titre de document pdf',
        'modifier métadonnées pdf en ligne',
      ],
      longTailKeywords: [
        'inspecter et supprimer métadonnées d’auteur cachées de pdf en ligne',
        'changer titre pdf affiché dans l’onglet du navigateur gratuit',
        'éditeur privé de propriétés pdf côté client',
        'supprimer métadonnées d’auteur de pdf avant partage',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Révélez les propriétés cachées stockées dans les en-têtes PDF — y compris le titre du document, l’auteur, le sujet, les mots-clés, le logiciel créateur et le producteur — pour définir des titres d’onglet de navigateur propres ou supprimer les métadonnées personnelles d’identification avant une publication publique.',
  },
  'pdf-text-extractor': {
    slug: 'extracteur-texte-pdf',
    name: 'Extracteur de Texte PDF',
    shortDescription:
      'Extrayez le texte sélectionnable page par page des documents PDF en texte brut copiable ou en téléchargements .txt via PDF.js.',
    keywords: [
      'extracteur de texte pdf',
      'extraire texte de pdf',
      'convertisseur pdf en txt',
      'copier texte de pdf',
      'extraire texte de pdf en ligne',
      'pdf en texte gratuit',
      'pdf en txt',
      'obtenir texte de pdf',
      'outil de copie de texte pdf',
    ],
    seo: {
      title: 'Extracteur de Texte PDF – Copier en .TXT | UtilityFlow',
      description:
        'Extrayez le texte intégré d’un PDF page par page dans votre navigateur, avec des marqueurs de page, des nombres de mots, la copie et le téléchargement .txt.',
      primaryKeyword: 'extracteur de texte pdf',
      secondaryKeywords: [
        'pdf en txt en ligne gratuit',
        'extraire texte pdf côté client',
        'copier texte de document pdf',
        'pdf en texte gratuit',
      ],
      longTailKeywords: [
        'extraire texte de pdf confidentiel localement sans envoi',
        'convertir pdf basé sur du texte en fichier txt brut avec marqueurs',
        'détecter pdf numérisé sans couche de texte',
        'extraire texte de pdf en txt gratuit dans le navigateur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lisez et extrayez le texte Unicode intégré directement des PDF basés sur du texte, page par page, avec PDF.js, avec des en-têtes facultatifs `--- Page N ---`, des statistiques de mots et d’octets, une copie en un clic et l’exportation `.txt` — plus une détection transparente quand un PDF est numérisé ou composé uniquement d’images.',
  },
};
