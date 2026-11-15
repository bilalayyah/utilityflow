import type { CategoryLocaleOverride } from '../types';

/**
 * French overrides for the 7 categories, keyed by category id.
 * Every category: slug (matches CATEGORY_LOCALE_SLUGS.fr in
 * src/locales/config.ts), name, shortName, description, longDescription,
 * seo, sampleToolNames (5).
 */
export const FR_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'outils-de-texte-et-d-ecriture',
    name: 'Outils de texte et d’écriture',
    shortName: 'Texte et écriture',
    description:
      'Analysez le nombre de mots, mettez en forme le texte, nettoyez les espaces, convertissez la casse et inspectez la lisibilité directement dans votre navigateur.',
    longDescription:
      'Des utilitaires précis d’écriture et de manipulation de chaînes, conçus pour les rédacteurs, les éditeurs, les équipes de contenu et les étudiants. Chaque opération de texte s’exécute instantanément sur votre appareil, sans envoyer vos brouillons vers des serveurs distants.',
    intro:
      'Choisissez un outil ci-dessous, collez ou tapez votre texte, et le résultat apparaît immédiatement. Rien à installer, rien à envoyer : vos brouillons restent sur votre appareil, car chaque outil fonctionne entièrement dans votre navigateur.',
    faqs: [
      {
        question: 'Les outils de texte et d’écriture sont-ils gratuits ?',
        answer: 'Oui, ils sont tous gratuits, sans inscription et sans compte.',
      },
      {
        question: 'Mon texte quitte-t-il mon navigateur ?',
        answer: 'Non. Chaque outil fonctionne à 100 % dans votre navigateur, donc le texte que vous collez ou tapez n’est jamais envoyé vers un serveur ni stocké où que ce soit.',
      },
      {
        question: 'Dois-je créer un compte ?',
        answer: 'Non. Vous pouvez ouvrir n’importe quel outil et commencer à l’utiliser tout de suite : pas de compte, pas d’e-mail, pas d’installation.',
      },
      {
        question: 'Quel outil utiliser pour compter les mots de mon texte ?',
        answer: 'Utilisez le Compteur de mots. Collez-y votre texte et il affiche instantanément le nombre de mots et de caractères.',
      },
    ],
    seo: {
      title: 'Outils de texte et d’écriture en ligne | UtilityFlow',
      description:
        'Outils de texte et d’écriture dans le navigateur : compteurs de mots et de caractères, convertisseurs de casse et nettoyeurs de texte, sans inscription.',
      keywords: [
        'outils de texte',
        'utilitaires d’écriture',
        'compteur de mots',
        'compteur de caractères',
        'convertisseur de casse',
      ],
    },
    sampleToolNames: [
      'Compteur de mots',
      'Compteur de caractères',
      'Convertisseur de casse',
      'Supprimer les lignes en double',
      'Comparateur de textes',
    ],
  },
  developer: {
    slug: 'outils-pour-developpeurs',
    name: 'Outils pour développeurs',
    shortName: 'Développeurs',
    description:
      'Mettez en forme du JSON, encodez en Base64, testez des expressions régulières, décodez des JWT et générez des hachages sans aller-retour vers un serveur.',
    longDescription:
      'Des utilitaires d’ingénierie du quotidien, conçus pour déboguer vite et transformer les données proprement. Collez vos charges utiles, inspectez les formats structurés et validez la syntaxe localement, pour que les jetons sensibles et les extraits de configuration ne quittent jamais votre machine.',
    intro:
      'Choisissez l’outil dont vous avez besoin, collez votre code ou vos données et inspectez le résultat instantanément. Tout est traité sur votre propre appareil, donc les jetons, les charges utiles et les extraits de configuration ne quittent jamais votre machine.',
    faqs: [
      {
        question: 'Les outils pour développeurs sont-ils gratuits ?',
        answer: 'Oui, ils sont tous gratuits, sans inscription et sans compte.',
      },
      {
        question: 'Puis-je coller un jeton ou une clé API dans ces outils en toute sécurité ?',
        answer: 'Oui. Des outils comme le décodeur JWT et l’encodeur Base64 fonctionnent entièrement dans votre navigateur, donc le texte que vous collez n’est jamais envoyé vers un serveur.',
      },
      {
        question: 'Dois-je créer un compte ?',
        answer: 'Non. Vous pouvez ouvrir n’importe quel outil et commencer à l’utiliser tout de suite : pas de compte, pas d’e-mail, pas d’installation.',
      },
      {
        question: 'Quel outil utiliser pour vérifier si mon JSON est valide ?',
        answer: 'Utilisez le Formateur et validateur JSON. Collez-y votre JSON et il mettra le code en forme et affichera les erreurs.',
      },
    ],
    seo: {
      title: 'Outils développeurs : JSON, regex, Base64, JWT | UtilityFlow',
      description:
        'Utilitaires pour développeurs dans le navigateur : formatage JSON, tests regex, encodage Base64, inspection JWT et génération d’UUID en toute sécurité.',
      keywords: [
        'outils pour développeurs',
        'formateur JSON',
        'encodeur Base64',
        'testeur de regex',
        'décodeur JWT',
      ],
    },
    sampleToolNames: [
      'Formateur et validateur JSON',
      'Encodeur / Décodeur Base64',
      'Encodeur / Décodeur d’URL',
      'Générateur d’UUID',
      'Testeur d’expressions régulières',
    ],
  },
  calculators: {
    slug: 'calculatrices',
    name: 'Calculatrices',
    shortName: 'Calculatrices',
    description:
      'Calculez des âges, des pourcentages, des échéanciers de prêt, des IMC, des conversions d’unités et des marges commerciales avec une précision déterministe.',
    longDescription:
      'Des calculatrices précises pour les finances, les dates, la santé et les mathématiques, conçues pour la clarté. Consultez des détails étape par étape, des sorties tabulaires propres et des recalculs instantanés lorsque vous ajustez les entrées.',
    intro:
      'Sélectionnez une calculatrice, saisissez vos chiffres, et le résultat se met à jour instantanément lorsque vous modifiez les entrées. Aucune inscription n’est nécessaire, et rien de ce que vous saisissez n’est envoyé où que ce soit : chaque calcul s’effectue dans votre navigateur.',
    faqs: [
      {
        question: 'Les calculatrices sont-elles gratuites ?',
        answer: 'Oui, ils sont tous gratuits, sans inscription et sans compte.',
      },
      {
        question: 'Les données que je saisis quittent-elles mon navigateur ?',
        answer: 'Non. Chaque calcul s’effectue à 100 % dans votre navigateur, donc les chiffres que vous saisissez ne sont jamais envoyés vers un serveur ni stockés où que ce soit.',
      },
      {
        question: 'Les calculatrices fonctionnent-elles sur mobile ?',
        answer: 'Oui. Elles fonctionnent dans n’importe quel navigateur moderne, vous pouvez donc les utiliser sur votre téléphone, votre tablette ou votre ordinateur.',
      },
      {
        question: 'Quelle calculatrice utiliser pour une mensualité de prêt ?',
        answer: 'Utilisez la Calculatrice de prêt et EMI. Saisissez le montant du prêt, le taux d’intérêt et la durée pour voir la mensualité et un échéancier complet.',
      },
    ],
    seo: {
      title: 'Calculatrices en ligne : finances et dates | UtilityFlow',
      description:
        'Calculatrices en ligne rapides et transparentes : âge, pourcentages, mensualités de prêt, marges et conversions d’unités, avec des résultats instantanés.',
      keywords: [
        'calculatrices en ligne',
        'calculatrice d’âge',
        'calculatrice de pourcentage',
        'calculatrice de prêt',
        'convertisseur d’unités',
      ],
    },
    sampleToolNames: [
      'Calculatrice d’âge',
      'Calculatrice de pourcentage',
      'Calculatrice de prêt et EMI',
      'Calculatrice de remises et marges',
      'Calculatrice de différence de dates',
    ],
  },
  'social-media': {
    slug: 'outils-de-reseaux-sociaux',
    name: 'Outils de réseaux sociaux',
    shortName: 'Réseaux sociaux',
    description:
      'Créez des liens de suivi UTM, prévisualisez la longueur de vos publications, générez des codes QR et mettez en forme des légendes pour les réseaux sociaux modernes.',
    longDescription:
      'Des aides pratiques de marketing et de publication pour les créateurs, les équipes de croissance et les gestionnaires de communauté. Standardisez les paramètres de suivi de vos campagnes, vérifiez les limites de caractères des plateformes et générez des codes QR scannables quand vous en avez besoin.',
    intro:
      'Ouvrez un outil ci-dessous, saisissez votre lien ou votre texte, et copiez le résultat directement dans votre publication ou votre campagne. Tout fonctionne dans votre navigateur, donc vos liens et légendes ne sont jamais envoyés vers un serveur.',
    faqs: [
      {
        question: 'Les outils de réseaux sociaux sont-ils gratuits ?',
        answer: 'Oui, ils sont tous gratuits, sans inscription et sans compte.',
      },
      {
        question: 'Ce que je saisis est-il envoyé vers un serveur ?',
        answer: 'Non. Chaque outil fonctionne à 100 % dans votre navigateur, donc vos liens, légendes et textes ne quittent jamais votre appareil.',
      },
      {
        question: 'Dois-je créer un compte ?',
        answer: 'Non. Vous pouvez ouvrir n’importe quel outil et commencer à l’utiliser tout de suite : pas de compte, pas d’e-mail, pas d’installation.',
      },
      {
        question: 'Quel outil crée un code QR pour mon lien ?',
        answer: 'Utilisez le Générateur de codes QR. Saisissez votre lien et il crée un code QR scannable que vous pouvez télécharger et partager.',
      },
    ],
    seo: {
      title: 'Outils de réseaux sociaux : QR, UTM, hashtags | UtilityFlow',
      description:
        'Créez des liens UTM, générez des codes QR, vérifiez les limites de caractères des réseaux sociaux et mettez en forme hashtags et biographies en ligne.',
      keywords: [
        'outils de réseaux sociaux',
        'générateur de codes QR',
        'créateur d’UTM',
        'formateur de hashtags',
        'compteur de légendes',
      ],
    },
    sampleToolNames: [
      'Générateur de codes QR',
      'Créateur de liens UTM',
      'Vérificateur de limite de caractères sociaux',
      'Formateur de texte Unicode stylisé',
      'Formateur de sauts de ligne pour biographies',
    ],
  },
  pdf: {
    slug: 'outils-pdf',
    name: 'Outils PDF',
    shortName: 'Outils PDF',
    description:
      'Fusionnez, divisez, réorganisez, ajoutez des filigranes et convertissez des documents PDF dans votre navigateur, sans envoyer vos fichiers privés.',
    longDescription:
      'Des flux de travail documentaires conçus pour la confidentialité. Traitez contrats, factures et dossiers d’étude directement dans la mémoire du client avec WebAssembly et les API canvas du navigateur, plutôt que sur des serveurs de fichiers distants.',
    intro:
      'Choisissez un outil, sélectionnez votre fichier PDF, et le résultat est prêt dans votre navigateur en quelques instants. Vos documents ne quittent jamais votre appareil : ils sont traités localement, et non envoyés vers un serveur.',
    faqs: [
      {
        question: 'Les outils PDF sont-ils gratuits ?',
        answer: 'Oui, ils sont tous gratuits, sans inscription et sans compte.',
      },
      {
        question: 'Mes fichiers PDF sont-ils envoyés quelque part ?',
        answer: 'Non. Vos fichiers sont traités directement dans votre navigateur, donc ils ne quittent jamais votre appareil et ne sont jamais stockés sur un serveur.',
      },
      {
        question: 'Les outils PDF fonctionnent-ils sur mobile ?',
        answer: 'Oui. Elles fonctionnent dans n’importe quel navigateur moderne, vous pouvez donc les utiliser sur votre téléphone, votre tablette ou votre ordinateur.',
      },
      {
        question: 'Quel outil combine plusieurs fichiers PDF en un seul ?',
        answer: 'Utilisez Fusionner des PDF. Sélectionnez les fichiers à combiner et il les assemble en un seul document PDF.',
      },
    ],
    seo: {
      title: 'Outils PDF : fusionner, diviser, convertir | UtilityFlow',
      description:
        'Fusionnez, divisez, tournez et convertissez vos fichiers PDF localement dans votre navigateur, sans envoyer de documents sensibles vers des serveurs tiers.',
      keywords: [
        'outils PDF',
        'fusionner PDF',
        'diviser PDF',
        'image en PDF',
        'éditeur PDF navigateur',
      ],
    },
    sampleToolNames: [
      'Fusionner des PDF',
      'Diviser un PDF',
      'Images en PDF',
      'Rotateur de pages PDF',
      'Inspecteur de métadonnées PDF',
    ],
  },
  seo: {
    slug: 'outils-seo',
    name: 'Outils SEO',
    shortName: 'Outils SEO',
    description:
      'Prévisualisez des extraits SERP, générez des balises OpenGraph, créez des fichiers robots.txt et des sitemaps XML, et inspectez la densité des mots-clés.',
    longDescription:
      'Des utilitaires techniques et d’optimisation sur la page pour les éditeurs, les fondateurs indépendants et les spécialistes SEO. Validez la longueur des titres, rédigez des métadonnées structurées et créez des slugs d’URL propres en quelques secondes.',
    intro:
      'Choisissez un outil, saisissez le titre, l’URL ou le contenu de votre page, et vérifiez le résultat instantanément. Toutes les vérifications s’effectuent dans votre navigateur, donc vos pages non publiées et vos brouillons restent privés.',
    faqs: [
      {
        question: 'Les outils SEO sont-ils gratuits ?',
        answer: 'Oui, ils sont tous gratuits, sans inscription et sans compte.',
      },
      {
        question: 'Mon contenu quitte-t-il mon navigateur ?',
        answer: 'Non. Chaque outil fonctionne à 100 % dans votre navigateur, donc les titres, URL et contenus que vous saisissez ne sont jamais envoyés vers un serveur ni stockés où que ce soit.',
      },
      {
        question: 'Dois-je créer un compte ?',
        answer: 'Non. Vous pouvez ouvrir n’importe quel outil et commencer à l’utiliser tout de suite : pas de compte, pas d’e-mail, pas d’installation.',
      },
      {
        question: 'Quel outil prévisualise l’apparence de ma page dans les résultats de recherche ?',
        answer: 'Utilisez l’Aperçu d’extrait SERP. Saisissez votre titre et votre description pour voir comment votre page peut apparaître dans les résultats de recherche Google.',
      },
    ],
    seo: {
      title: 'Outils SEO : aperçus SERP et balises méta | UtilityFlow',
      description:
        'Optimisez vos pages avec des utilitaires SEO gratuits : aperçus SERP, générateurs de balises méta, créateurs de robots.txt et vérificateurs de densité.',
      keywords: [
        'outils SEO',
        'générateur de balises méta',
        'aperçu SERP',
        'générateur de robots.txt',
        'générateur de slugs',
      ],
    },
    sampleToolNames: [
      'Générateur de balises méta et OpenGraph',
      'Aperçu d’extrait SERP',
      'Générateur de slugs d’URL',
      'Générateur de robots.txt',
      'Générateur de balisage Schema',
    ],
  },
  'image-file': {
    slug: 'outils-d-images-et-de-fichiers',
    name: 'Outils d’images et de fichiers',
    shortName: 'Images et fichiers',
    description:
      'Compressez des images, redimensionnez-les, convertissez PNG/JPG/WebP, testez le contraste WCAG, scannez des codes QR, calculez des hachages de fichiers et créez des favicons localement.',
    longDescription:
      'Des utilitaires rapides de médias, de cryptographie et de fichiers, propulsés par HTML5 Canvas, l’API Web Crypto et les API de fichiers côté client. Optimisez les ressources web pour les Core Web Vitals, vérifiez les sommes de contrôle SHA-256 des fichiers, extrayez les palettes d’images et générez des favicons sans envoyer de fichiers.',
    intro:
      'Sélectionnez un outil ci-dessous, choisissez votre fichier, et obtenez votre résultat tout de suite. Vos images et fichiers ne quittent jamais votre appareil : tout est traité localement dans votre navigateur.',
    faqs: [
      {
        question: 'Les outils d’images et de fichiers sont-ils gratuits ?',
        answer: 'Oui, ils sont tous gratuits, sans inscription et sans compte.',
      },
      {
        question: 'Mes images sont-elles envoyées vers un serveur ?',
        answer: 'Non. Vos fichiers sont traités directement dans votre navigateur, donc ils ne quittent jamais votre appareil et ne sont jamais stockés sur un serveur.',
      },
      {
        question: 'Les outils fonctionnent-ils sur mobile ?',
        answer: 'Oui. Elles fonctionnent dans n’importe quel navigateur moderne, vous pouvez donc les utiliser sur votre téléphone, votre tablette ou votre ordinateur.',
      },
      {
        question: 'Quel outil utiliser pour réduire la taille d’un fichier image ?',
        answer: 'Utilisez le Compresseur d’images. Choisissez votre image et il réduit la taille du fichier tout en la gardant prête pour le web.',
      },
    ],
    seo: {
      title: 'Outils d’images : compresser et convertir | UtilityFlow',
      description:
        'Compressez, redimensionnez, tournez et convertissez vos images entre PNG, JPG et WebP localement, vérifiez les sommes de contrôle et créez des favicons.',
      keywords: [
        'outils d’images',
        'compresseur d’images',
        'redimensionneur d’images',
        'convertisseur WebP',
        'vérificateur de contraste',
      ],
    },
    sampleToolNames: [
      'Compresseur d’images',
      'Redimensionneur et recadreur d’images',
      'Convertisseur de format d’image',
      'Vérificateur de contraste des couleurs',
      'Générateur de mots de passe cryptographiques',
    ],
  },
};
