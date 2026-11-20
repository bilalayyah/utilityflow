import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const FR_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'encodeur-decodeur-base64',
    name: 'Encodeur / Décodeur Base64',
    shortDescription:
      'Encodez du texte en Base64 standard ou sûr pour les URL et décodez des chaînes Base64 UTF-8 en toute sécurité dans la mémoire du navigateur.',
    keywords: [
      'encodeur base64',
      'décodeur base64',
      'base64 utf-8',
      'base64 sûr pour les url',
      'encoder en base64 en ligne',
      'décoder base64 en ligne',
      'encoder du texte en base64',
      'décoder base64 en texte',
      'convertisseur base64',
    ],
    seo: {
      title: 'Encodeur Base64 et Décodeur : UTF-8 et URL | UtilityFlow',
      description:
        'Encodez du texte UTF-8 en Base64 ou décodez du Base64 en texte lisible, avec des options sûres pour les URL, localement sans envoi, dans votre navigateur.',
      primaryKeyword: 'encodeur décodeur base64',
      secondaryKeywords: ['décoder base64 en ligne', 'encoder base64 utf-8', 'base64 sûr pour les url', 'base64 en texte'],
      longTailKeywords: ['encoder des émojis utf-8 en base64 en ligne', 'décoder du base64 sûr pour les url sans remplissage', 'convertisseur base64 côté client', 'décoder une chaîne base64 avec des émojis en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convertissez des chaînes UTF-8 — y compris les caractères accentués et les émojis — en Base64 standard ou Base64 sûr pour les URL selon la RFC 4648, ou décodez des chaînes Base64 en texte brut avec une validation instantanée.',
  },
  'url-encoder-decoder': {
    slug: 'encodeur-decodeur-url',
    name: 'Encodeur / Décodeur d’URL',
    shortDescription:
      'Encodez en pourcentage des valeurs de requête ou des URL complètes et inspectez l’hôte, le chemin et les paramètres de requête analysés.',
    keywords: [
      'encodeur url',
      'décodeur url',
      'encodage en pourcentage',
      'analyseur d’url',
      'encoder une url en ligne',
      'décoder une url en ligne',
      'outil d’encodage d’url',
      'encodeuricomponent',
      'encodeur de chaîne de requête',
    ],
    seo: {
      title: 'Encodeur URL et Décodeur : encodage en % | UtilityFlow',
      description:
        'Encodez ou décodez des URL avec les modes encodeURIComponent et encodeURI tout en inspectant protocole, hôte, chemin et paramètres de requête, en ligne.',
      primaryKeyword: 'encodeur décodeur url',
      secondaryKeywords: ['encodage en pourcentage en ligne', 'outil de décodage d’url', 'analyseur de chaîne de requête', 'encodeuricomponent en ligne'],
      longTailKeywords: ['différence entre encodeuri et encodeuricomponent', 'décoder le tableau des paramètres de requête d’une url en ligne', 'encoder en pourcentage les caractères spéciaux des url', 'encoder une valeur de requête d’url sans casser l’esperluette'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Encodez en toute sécurité des valeurs de paramètres de requête ou des URL complètes, décodez des chaînes encodées en pourcentage (%20, %3A, +), et inspectez une répartition en direct de chaque paramètre de requête dans un tableau.',
  },
  'uuid-generator': {
    slug: 'generateur-uuid',
    name: 'Générateur d’UUID (v4 et v7)',
    shortDescription:
      'Générez des identifiants UUID v4 cryptographiquement aléatoires et UUID v7 ordonnés par temps selon la RFC 9562, par lots.',
    keywords: [
      'générateur uuid',
      'générateur guid',
      'uuid v4',
      'générateur uuid v7',
      'générateur uuid v4 en ligne',
      'générer uuid en ligne',
      'générateur uuid aléatoire',
      'générateur uuid en masse',
      'générateur uuid gratuit',
    ],
    seo: {
      title: 'Générateur UUID : v4 et v7 par lot gratuits | UtilityFlow',
      description:
        'Générez jusqu’à 100 identifiants UUID v4 aléatoires ou UUID v7 ordonnés par temps (RFC 9562), avec majuscules et accolades en option, dans votre navigateur.',
      primaryKeyword: 'générateur uuid',
      secondaryKeywords: ['générateur guid en ligne', 'générateur uuid v4', 'créateur uuid v7', 'générer des uuid en masse gratuitement'],
      longTailKeywords: ['générer des uuid v4 et v7 en masse en ligne', 'uuid v7 ordonné par temps rfc 9562', 'uuid sans traits d’union en majuscules', 'générer 100 uuid d’un coup en ligne gratuitement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Créez des lots uniques ou multiples d’identifiants UUID v4 cryptographiquement aléatoires et UUID v7 ordonnés par horodatage selon la RFC 9562 directement via les API Web Crypto, avec des bascules de formatage.',
  },
  'regex-tester': {
    slug: 'testeur-regex',
    name: 'Testeur Regex',
    shortDescription:
      'Testez des expressions régulières JavaScript avec surlignage des correspondances en direct, groupes de capture, drapeaux et sortie de remplacement.',
    keywords: [
      'testeur regex',
      'testeur d’expression régulière',
      'regex javascript',
      'surligneur de correspondance regex',
      'testeur regex en ligne',
      'tester regex en ligne',
      'débogueur regex',
      'testeur de correspondance regex',
      'testeur regex javascript',
    ],
    seo: {
      title: 'Testeur Regex : correspondances JS en direct | UtilityFlow',
      description:
        'Testez des expressions régulières en direct avec les drapeaux g/i/m/s, le surlignage des correspondances et l’aperçu de remplacement dans votre navigateur.',
      primaryKeyword: 'testeur regex',
      secondaryKeywords: ['testeur d’expression régulière', 'débogueur regex js', 'groupes de capture regex', 'testeur de remplacement regex'],
      longTailKeywords: ['tester les groupes de capture regex javascript en ligne', 'surligneur de correspondance d’expression régulière en direct', 'aperçu de remplacement regex avec groupe de capture $1', 'déboguer du regex javascript avec surlignage en direct en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Déboguez des expressions régulières JavaScript de manière interactive avec des correspondances surlignées en direct, des positions d’index de correspondance, l’inspection des groupes de capture numérotés, des bascules de drapeaux et des aperçus de remplacement.',
  },
  'jwt-decoder': {
    slug: 'decodeur-jwt',
    name: 'Décodeur JWT',
    shortDescription:
      'Décodez les en-têtes, les revendications de charge utile et les horodatages d’expiration des jetons web JSON en toute sécurité dans votre navigateur.',
    keywords: [
      'décodeur jwt',
      'décoder un jeton web json',
      'inspecteur jwt',
      'horodatage exp jwt',
      'décodeur de jeton jwt',
      'décoder la charge utile jwt',
      'vérificateur d’expiration jwt',
      'visionneuse de revendications jwt',
      'vérifier l’expiration jwt',
    ],
    seo: {
      title: 'Décodeur JWT : décoder les jetons et l’expiry | UtilityFlow',
      description:
        'Décodez les en-têtes JWT et les revendications de charge utile dans votre navigateur et vérifiez iat, nbf et exp en dates UTC lisibles. Gratuit et privé.',
      primaryKeyword: 'décodeur jwt',
      secondaryKeywords: ['décoder jwt en ligne', 'visionneuse de charge utile jwt', 'inspecteur de jeton web json', 'vérificateur d’expiration jwt'],
      longTailKeywords: ['décoder un jeton jwt localement sans envoi vers un serveur', 'vérifier l’horodatage d’expiration exp jwt en ligne', 'inspecter l’en-tête base64url et les revendications jwt', 'lire les revendications de charge utile jwt dans le navigateur'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Inspectez les jetons web JSON (JWT) en toute sécurité dans la mémoire locale du navigateur — consultez les objets JSON formatés d’En-tête et de Charge utile et vérifiez le statut d’expiration lisible des revendications `iat`, `nbf` et `exp`.',
  },
  'hash-generator': {
    slug: 'generateur-de-hash',
    name: 'Générateur de Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Calculez des hashs cryptographiques SHA-1, SHA-256, SHA-384 et SHA-512 pour du texte ou des fichiers locaux via Web Crypto.',
    keywords: [
      'générateur de hash',
      'générateur sha256',
      'hash sha512',
      'somme de contrôle sha256 de fichier',
      'générateur de hash sha1',
      'hash sha384 en ligne',
      'calculateur de somme de contrôle',
      'vérifier la somme de contrôle d’un fichier',
      'générateur de hash sécurisé en ligne',
    ],
    seo: {
      title: 'Générateur de Hash : SHA-1, SHA-256, SHA-512 | UtilityFlow',
      description:
        'Générez des condensés SHA-1, SHA-256, SHA-384 et SHA-512 en hexadécimal ou Base64 pour du texte et des fichiers locaux — gratuit et privé, sans inscription.',
      primaryKeyword: 'générateur de hash',
      secondaryKeywords: ['hash sha256 en ligne', 'vérificateur de somme de contrôle de fichier', 'générateur sha512', 'calculateur de somme de contrôle'],
      longTailKeywords: ['calculer la somme de contrôle sha256 d’un fichier local dans le navigateur', 'générer un hash sha256 en hexadécimal et base64', 'générateur de hash api web crypto en ligne', 'vérifier la somme de contrôle sha256 d’un fichier téléchargé'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Calculez simultanément les condensés SHA-1, SHA-256, SHA-384 et SHA-512 en utilisant l’API Web Crypto native du navigateur (`crypto.subtle.digest`) pour le texte UTF-8 comme pour les sommes de contrôle de fichiers locaux.',
  },
  'html-entity-encoder': {
    slug: 'encodeur-d-entites-html',
    name: 'Encodeur et Décodeur d’Entités HTML',
    shortDescription:
      'Échappez les caractères HTML réservés (<, >, &, guillemets) et les symboles non ASCII ou décodez proprement les entités HTML.',
    keywords: [
      'encodeur d’entités html',
      'décodeur html',
      'échapper html en ligne',
      'déséchapper les entités html',
      'encoder les caractères html',
      'outil d’échappement html',
      'convertir en entités html',
      'décoder les entités html en ligne',
      'échapper les caractères spéciaux html',
    ],
    seo: {
      title: 'Encodeur d’Entités HTML : échapper et décoder | UtilityFlow',
      description:
        'Encodez les caractères HTML réservés et les symboles non ASCII en entités, ou décodez les entités nommées et numériques en texte brut. Gratuit et local.',
      primaryKeyword: 'encodeur d’entités html',
      secondaryKeywords: ['outil d’échappement html', 'décodeur d’entités html', 'déséchapper html', 'encoder les caractères html'],
      longTailKeywords: ['échapper les balises html pour des extraits de code en ligne', 'décoder les entités html nommées et numériques', 'convertir les caractères spéciaux en entités html', 'échapper les guillemets et les esperluettes html en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Échappez en toute sécurité `<`, `>`, `&`, les guillemets et les symboles Unicode internationaux en entités HTML pour intégrer des extraits de code dans des pages web, ou décodez des chaînes échappées en HTML en texte lisible.',
  },
  'json-csv-converter': {
    slug: 'convertisseur-json-csv',
    name: 'Convertisseur JSON en CSV / CSV en JSON',
    shortDescription:
      'Convertissez des tableaux JSON en feuilles de calcul CSV RFC 4180 et analysez des fichiers CSV entre guillemets en JSON propre.',
    keywords: [
      'json en csv',
      'csv en json',
      'convertisseur json csv',
      'convertir un tableau json en csv',
      'exporter json en csv',
      'json en csv en ligne gratuit',
      'convertisseur csv en json',
      'convertisseur json en tsv',
      'convertir csv en tableau json',
    ],
    seo: {
      title: 'Convertisseur JSON en CSV : JSON et CSV simple | UtilityFlow',
      description:
        'Convertissez des tableaux JSON en feuilles CSV propres avec aplatissement des objets imbriqués, ou analysez CSV et TSV en JSON structuré. Gratuit et local.',
      primaryKeyword: 'convertisseur json en csv',
      secondaryKeywords: ['convertisseur csv en json', 'exporter json en csv', 'tsv en json', 'json en csv en ligne gratuit'],
      longTailKeywords: ['convertir des objets json imbriqués en colonnes csv en ligne', 'analyser du csv entre guillemets avec virgules en tableau json', 'téléchargeur json en csv côté client', 'convertir un tableau json en feuille de calcul csv gratuitement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transformez des tableaux JSON d’API en feuilles de calcul CSV propres — en aplatissant automatiquement les clés d’objets imbriqués — ou analysez des fichiers CSV/TSV délimités avec des virgules entre guillemets en JSON formaté.',
  },
  'unix-timestamp-converter': {
    slug: 'convertisseur-horodatage-unix',
    name: 'Convertisseur d’Horodatage Unix',
    shortDescription:
      'Convertissez des secondes ou millisecondes d’époque Unix en dates ISO 8601, UTC et locales — et inversement.',
    keywords: [
      'convertisseur d’horodatage unix',
      'convertisseur d’époque',
      'époque en date',
      'horodatage en iso 8601',
      'convertisseur de temps unix',
      'convertir l’époque en date',
      'date en horodatage unix',
      'heure unix actuelle',
      'convertisseur d’époque en millisecondes',
    ],
    seo: {
      title: 'Convertisseur d’Horodatage Unix : époque-date | UtilityFlow',
      description:
        'Convertissez des horodatages Unix en secondes ou millisecondes en ISO 8601, UTC, RFC 2822 et heure locale, ou en temps Unix. Gratuit, dans votre navigateur.',
      primaryKeyword: 'convertisseur d’horodatage unix',
      secondaryKeywords: ['convertisseur d’époque', 'temps unix en date', 'date en horodatage unix', 'convertisseur d’époque en millisecondes'],
      longTailKeywords: ['convertir des millisecondes d’époque unix en date iso 8601', 'horodatage unix actuel en direct en secondes', 'convertir une date et une heure locales en époque unix', 'horodatage unix en date utc en ligne gratuitement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convertissez des entiers d’époque Unix (secondes ou millisecondes) en chaînes ISO 8601, UTC et de fuseau horaire local avec des décalages relatifs, ou transformez n’importe quelle date et heure de calendrier en horodatage d’époque.',
  },
  'sql-formatter': {
    slug: 'formateur-sql',
    name: 'Formateur SQL',
    shortDescription:
      'Formatez, indentez et standardisez des requêtes SQL avec des mots-clés en majuscules/minuscules ou minifiez des requêtes sur une ligne.',
    keywords: [
      'formateur sql',
      'embellisseur sql',
      'formater une requête sql',
      'minifieur sql',
      'formater sql en ligne',
      'embellisseur de requête sql',
      'imprimer sql proprement',
      'formateur sql en ligne',
      'indenter une requête sql',
    ],
    seo: {
      title: 'Formateur SQL : embellir et minifier | UtilityFlow',
      description:
        'Formatez des requêtes SQL désordonnées avec des sauts de clause propres et une indentation de 2/4 espaces, ou minifiez-les sur une ligne, dans votre navigateur.',
      primaryKeyword: 'formateur sql',
      secondaryKeywords: ['embellisseur sql en ligne', 'imprimer sql proprement', 'minifieur sql', 'formater une requête sql en ligne'],
      longTailKeywords: ['formater une requête sql select join group by en ligne', 'convertir les mots-clés sql en majuscules proprement', 'minifier une requête sql en préservant les littéraux de chaîne', 'indenter une requête sql avec 2 ou 4 espaces en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transformez des requêtes SQL denses sur une seule ligne en instructions lisibles et structurées avec un alignement clair des clauses `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` et `ORDER BY`, tout en préservant les chaînes entre guillemets et les commentaires.',
  },
  'css-minifier': {
    slug: 'minifieur-css',
    name: 'Minifieur et Embellisseur CSS',
    shortDescription:
      'Minifiez des feuilles de style CSS pour réduire la taille du bundle ou embellissez des règles CSS compressées avec une indentation propre.',
    keywords: [
      'minifieur css',
      'embellisseur css',
      'compresser css en ligne',
      'formater css',
      'compresseur css',
      'minifier css en ligne',
      'déminifier css',
      'formateur css',
      'réduire la taille d’un fichier css',
    ],
    seo: {
      title: 'Minifieur CSS et Embellisseur : compresser CSS | UtilityFlow',
      description:
        'Minifiez le CSS en supprimant commentaires et espaces superflus, avec des statistiques d’économie d’octets, ou embellissez des feuilles minifiées, en ligne.',
      primaryKeyword: 'minifieur css',
      secondaryKeywords: ['embellisseur css', 'compresser css', 'formateur css en ligne', 'minifier css en ligne'],
      longTailKeywords: ['minifier le css en préservant les chaînes entre guillemets et les media queries', 'déminifier une feuille de style css compressée en ligne', 'calculer le pourcentage de compression css dans le navigateur', 'réduire la taille d’un fichier css avant déploiement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compressez des feuilles de style CSS en supprimant les commentaires, les espaces redondants et les points-virgules de fin avant les accolades fermantes — ou développez du CSS minifié sur une ligne en blocs indentés lisibles.',
  },
  'js-formatter': {
    slug: 'formateur-javascript',
    name: 'Minifieur et Formateur JavaScript / TypeScript',
    shortDescription:
      'Minifiez des extraits JavaScript en supprimant les commentaires et les espaces superflus ou embellissez des blocs de code compacts.',
    keywords: [
      'minifieur javascript',
      'formateur js',
      'embellisseur js',
      'compresser javascript en ligne',
      'formateur javascript',
      'minifieur js en ligne',
      'embellir javascript',
      'minifieur typescript',
      'formateur de code js',
    ],
    seo: {
      title: 'Minifieur JavaScript : compresser le JS | UtilityFlow',
      description:
        'Minifiez JavaScript et TypeScript en supprimant commentaires et espaces en toute sécurité, ou embellissez du code compact — gratuit, dans votre navigateur.',
      primaryKeyword: 'minifieur javascript',
      secondaryKeywords: ['embellisseur js', 'formater javascript en ligne', 'compresseur js', 'formateur javascript'],
      longTailKeywords: ['minifier un extrait javascript en préservant les chaînes et les littéraux de modèle', 'déminifier du code javascript compact avec indentation', 'formateur et minifieur js côté client', 'embellir du code javascript avec une indentation de 2 ou 4 espaces'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compactez des extraits JavaScript pour des bookmarklets et des scripts en ligne en supprimant les commentaires et l’espacement superflu — tout en gardant intacts les littéraux de chaîne — ou ré-indentez proprement du code compressé.',
  },
  'cron-expression-parser': {
    slug: 'analyseur-d-expression-cron',
    name: 'Analyseur d’Expression Cron et Aperçu du Planning',
    shortDescription:
      'Traduisez des expressions cron à 5 champs en français simple, explorez les préréglages et prévisualisez les 8 prochaines heures d’exécution.',
    keywords: [
      'analyseur d’expression cron',
      'générateur crontab',
      'testeur de planning cron',
      'prochaines exécutions cron',
      'analyseur crontab',
      'testeur d’expression cron',
      'aperçu de planning cron',
      'cron en français simple',
      'planificateur de tâches cron',
    ],
    seo: {
      title: 'Analyseur d’Expression Cron : anglais et runs | UtilityFlow',
      description:
        'Analysez des expressions cron à 5 champs en plannings en français simple, inspectez chaque champ et prévisualisez les 8 prochaines exécutions, en ligne.',
      primaryKeyword: 'analyseur d’expression cron',
      secondaryKeywords: ['alternative à crontab guru', 'aperçu de planning cron', 'constructeur cron', 'testeur d’expression cron'],
      longTailKeywords: ['traduire une expression cron à 5 champs en français simple', 'calculer les 8 prochains horodatages d’exécution cron', 'tester les expressions cron de jour de semaine et de pas en ligne', 'expression cron tous les jours de semaine à 9h exemple'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Décodez des expressions crontab Unix à 5 champs (`minute heure jour-du-mois mois jour-de-semaine`) en résumés clairs et lisibles par un humain, vérifiez les plages de champs et inspectez les 8 prochains horodatages d’exécution planifiés.',
  },
  'color-converter': {
    slug: 'convertisseur-de-couleurs',
    name: 'Convertisseur de Couleurs (HEX / RGB / HSL et Contraste WCAG)',
    shortDescription:
      'Convertissez des couleurs entre HEX, RGB et HSL avec un sélecteur de couleurs en direct et une vérification de contraste WCAG 2.1 AA/AAA.',
    keywords: [
      'convertisseur de couleurs',
      'hex en rgb',
      'rgb en hsl',
      'vérificateur de contraste wcag',
      'hex en hsl',
      'rgb en hex',
      'sélecteur de couleurs en ligne',
      'convertisseur de couleurs hex',
      'hsl en rgb',
    ],
    seo: {
      title: 'Convertisseur de Couleurs : HEX, RGB et HSL | UtilityFlow',
      description:
        'Convertissez des couleurs entre HEX, RGB et HSL instantanément, puis testez le contraste pour la conformité WCAG 2.1 AA et AAA — gratuit, dans votre navigateur.',
      primaryKeyword: 'convertisseur de couleurs',
      secondaryKeywords: ['convertisseur hex en rgb', 'sélecteur de couleurs hsl', 'vérificateur de contraste wcag', 'convertisseur rgb en hex'],
      longTailKeywords: ['convertir une couleur hex en valeurs css rgb et hsl', 'vérifier le ratio de contraste de texte wcag 2.1 aa et aaa', 'outil de couleurs hex rgb hsl interactif pour développeurs', 'convertir hex en hsl pour les variables css'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Traduisez les couleurs sans effort entre les notations CSS HEX, RGB et HSL avec un échantillon en direct et un vérificateur de ratio de contraste WCAG 2.1 intégré pour un design d’interface accessible.',
  },
};
