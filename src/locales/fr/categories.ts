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
