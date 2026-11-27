import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const FR_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'compteur-de-mots',
    name: 'Compteur de Mots',
    shortDescription:
      'Comptez les mots, les caractères, les phrases, les paragraphes, le temps de lecture et les mots-clés les plus répétés, instantanément.',
    keywords: [
      'compteur de mots',
      'compter les mots en ligne',
      'compter les mots d’un texte',
      'calculateur de temps de lecture',
      'compteur de phrases',
      'compteur de paragraphes',
      'compteur de mots gratuit',
      'calculateur de temps de parole',
      'compter caractères et mots',
    ],
    seo: {
      title: 'Compteur de Mots : mots et temps de lecture | UtilityFlow',
      description:
        'Comptez mots, caractères, phrases et paragraphes instantanément et consultez les temps de lecture et de parole estimés, dans votre navigateur sans envoi.',
      primaryKeyword: 'compteur de mots',
      secondaryKeywords: ['compteur de mots en ligne', 'outil de comptage de mots', 'estimateur de temps de lecture', 'compteur de paragraphes'],
      longTailKeywords: ['compter mots et caractères en ligne gratuitement', 'estimer le temps de lecture et de parole d’un texte', 'compteur de mots dans le navigateur sans envoi', 'vérifier le nombre de mots d’une dissertation en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mesurez le nombre exact de mots, le total de caractères, la densité des phrases et les durées estimées de lecture et de prise de parole en temps réel, sans envoyer votre brouillon sur un serveur.',
  },
  'character-counter': {
    slug: 'compteur-de-caracteres',
    name: 'Compteur de Caractères',
    shortDescription:
      'Mesurez la longueur exacte en caractères avec et sans espaces, en octets UTF-8, et les limites de caractères des réseaux sociaux et du SEO.',
    keywords: [
      'compteur de caractères',
      'compteur de lettres',
      'vérificateur de longueur de méta-description',
      'compteur d’octets utf-8',
      'outil de limite de caractères',
      'compter les caractères en ligne',
      'vérificateur de longueur de texte',
      'vérificateur de longueur de titre seo',
      'compteur de caractères sms',
    ],
    seo: {
      title: 'Compteur de Caractères : limites et octets | UtilityFlow',
      description:
        'Comptez les caractères avec et sans espaces, les lettres et les octets UTF-8 tout en suivant votre progression vers les limites SEO et des réseaux sociaux.',
      primaryKeyword: 'compteur de caractères',
      secondaryKeywords: ['compter les caractères en ligne', 'calculateur de longueur de chaîne', 'longueur de titre méta', 'vérificateur de longueur de texte'],
      longTailKeywords: ['compter les caractères sans espaces en ligne', 'vérifier la limite de caractères d’une méta-description seo', 'calculer la longueur en octets utf-8 d’un texte', 'vérifier la limite de caractères de twitter en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Suivez les compteurs exacts de caractères, de lettres, de chiffres, d’espaces et de taille en octets UTF-8 tout en surveillant les barres de progression en direct pour les extraits SEO, les segments SMS et les flux sociaux.',
  },
  'case-converter': {
    slug: 'convertisseur-de-casse',
    name: 'Convertisseur de Casse',
    shortDescription:
      'Convertissez un texte entre MAJUSCULES, minuscules, Casse de Titre, casse de phrase, camelCase, snake_case et kebab-case.',
    keywords: [
      'convertisseur de casse',
      'convertisseur de casse de titre',
      'majuscules en minuscules',
      'convertisseur camelcase',
      'générateur snake case',
      'convertisseur majuscules',
      'convertisseur minuscules',
      'convertisseur casse de phrase',
      'convertisseur pascalcase',
    ],
    seo: {
      title: 'Convertisseur de Casse : titre et camelCase | UtilityFlow',
      description:
        'Transformez un texte entre majuscules, minuscules, Casse de Titre, casse de phrase, camelCase, PascalCase, snake_case et kebab-case en un clic sans inscription.',
      primaryKeyword: 'convertisseur de casse',
      secondaryKeywords: ['convertisseur de casse de titre', 'outil de casse de phrase', 'changer la casse du texte', 'majuscules en minuscules'],
      longTailKeywords: ['convertir un texte en majuscules en casse de phrase', 'convertir une chaîne en camelcase et snake_case', 'outil de capitalisation de titre en ligne', 'changer les majuscules en minuscules en ligne gratuitement'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrigez un texte tapé par accident en verrouillage majuscule, standardisez les titres d’articles en Casse de Titre, ou formatez des identifiants de variables en camelCase, PascalCase, snake_case ou kebab-case en un seul clic.',
  },
  'remove-duplicate-lines': {
    slug: 'supprimer-les-lignes-en-double',
    name: 'Supprimer les Lignes en Double',
    shortDescription:
      'Dédupliquez des listes et des journaux avec des options de sensibilité à la casse, de suppression des espaces et de tri alphabétique.',
    keywords: [
      'supprimer les lignes en double',
      'dédupliquer une liste en ligne',
      'filtre de lignes uniques',
      'supprimer les lignes répétées',
      'supprimer les doublons d’une liste',
      'dédupliquer une liste d’e-mails',
      'lignes uniques en ligne',
      'supprimer les entrées répétées',
      'nettoyer les entrées en double',
    ],
    seo: {
      title: 'Supprimer les Lignes en Double : dédupliquer | UtilityFlow',
      description:
        'Supprimez les lignes répétées des listes, des e-mails, des URL ou des journaux instantanément, avec suppression des espaces et tri en option, sans inscription.',
      primaryKeyword: 'supprimer les lignes en double',
      secondaryKeywords: ['supprimer les lignes dupliquées', 'dédupliquer une liste de texte', 'outil de lignes uniques', 'supprimer les entrées en double'],
      longTailKeywords: ['supprimer les lignes en double en gardant l’ordre d’origine', 'dédupliquer une liste d’e-mails sans tenir compte de la casse', 'nettoyer les lignes répétées d’un texte en ligne', 'supprimer les doublons d’une liste d’e-mails en ligne gratuitement'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Nettoyez des listes désordonnées, des mots-clés exportés, des adresses e-mail ou des journaux de serveur en supprimant les entrées en double tout en contrôlant la suppression des espaces, la sensibilité à la casse et l’ordre de sortie.',
  },
  'text-diff-checker': {
    slug: 'comparateur-de-texte',
    name: 'Comparateur de Texte',
    shortDescription:
      'Comparez deux blocs de texte ligne par ligne pour repérer les ajouts, les suppressions et les lignes inchangées.',
    keywords: [
      'comparateur de texte',
      'comparer deux textes',
      'outil de diff en ligne',
      'comparaison de texte',
      'comparer deux fichiers texte',
      'outil de différence en ligne',
      'trouver les différences entre deux textes',
      'outil de comparaison de texte',
      'diff ligne par ligne',
    ],
    seo: {
      title: 'Comparateur de Texte : comparer deux textes | UtilityFlow',
      description:
        'Comparez deux versions de texte, de code ou de configuration côte à côte avec des indicateurs clairs de lignes ajoutées et supprimées, dans votre navigateur.',
      primaryKeyword: 'comparateur de texte',
      secondaryKeywords: ['comparer du texte en ligne', 'vérificateur de diff', 'outil de différence de texte', 'outil de diff en ligne'],
      longTailKeywords: ['comparer deux fichiers texte ligne par ligne en ligne', 'comparateur de diff ignorant les espaces et la casse', 'outil de comparaison de texte côté client', 'comparer deux versions d’un document en ligne gratuitement'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Repérez chaque insertion, suppression et modification entre deux versions d’un article, d’une clause de contrat ou d’un extrait de configuration grâce à un moteur de diff ligne par ligne basé sur la plus longue sous-séquence commune.',
  },
  'whitespace-remover': {
    slug: 'supprimer-les-espaces-superflus',
    name: 'Suppresseur d’Espaces et de Sauts de Ligne',
    shortDescription:
      'Supprimez les espaces superflus, les tabulations, les lignes vides et les sauts de ligne indésirables du texte copié depuis un PDF ou le web.',
    keywords: [
      'suppresseur d’espaces',
      'supprimer les espaces superflus',
      'suppresseur de sauts de ligne',
      'supprimer les lignes vides',
      'nettoyer le texte copié d’un pdf',
      'supprimer les espaces de fin',
      'corriger les sauts de ligne d’un pdf',
      'réduire les espaces multiples',
      'nettoyer le texte en ligne',
    ],
    seo: {
      title: 'Suppresseur d’Espaces : nettoyer les espaces | UtilityFlow',
      description:
        'Supprimez les espaces superflus, les tabulations, les lignes vides et les sauts de ligne cassés des PDF dans votre navigateur — rapide et gratuit en ligne.',
      primaryKeyword: 'suppresseur d’espaces',
      secondaryKeywords: ['supprimer les espaces superflus', 'supprimer les sauts de ligne', 'nettoyer les espaces du texte', 'supprimer les lignes vides'],
      longTailKeywords: ['supprimer les espaces superflus et les lignes vides en ligne', 'corriger les sauts de ligne lors d’une copie depuis un pdf', 'convertir les tabulations et les espaces multiples en un seul espace', 'supprimer les espaces de fin d’un texte copié'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Nettoyez le texte désordonné copié depuis des PDF, des e-mails, des tableurs ou des pages web en réduisant les espaces répétés, en convertissant les tabulations, en rognant les bords des lignes et en normalisant les sauts de ligne.',
  },
  'sort-lines': {
    slug: 'trier-les-lignes',
    name: 'Trier les Lignes par Ordre Alphabétique',
    shortDescription:
      'Triez des listes de A à Z, de Z à A, naturellement (1, 2, 10), par longueur de caractères, à l’envers ou mélangées aléatoirement.',
    keywords: [
      'trier les lignes par ordre alphabétique',
      'mettre une liste par ordre alphabétique en ligne',
      'outil de tri naturel',
      'trier le texte par longueur',
      'trier une liste de a à z',
      'outil d’ordre alphabétique',
      'mélanger les lignes en ligne',
      'trier les lignes de z à a',
      'inverser l’ordre des lignes',
    ],
    seo: {
      title: 'Trier les Lignes : ordre A-Z et naturel | UtilityFlow',
      description:
        'Triez les lignes de A à Z, de Z à A, par ordre alphabétique ou naturel, par longueur, à l’envers ou mélangées — avec déduplication en option.',
      primaryKeyword: 'trier les lignes par ordre alphabétique',
      secondaryKeywords: ['mettre une liste par ordre alphabétique', 'trieur de lignes de texte', 'tri naturel en ligne', 'trier les lignes de a à z'],
      longTailKeywords: ['trier une liste par ordre alphabétique avec des nombres dans l’ordre naturel', 'trier les lignes par longueur du plus court au plus long', 'mettre par ordre alphabétique et supprimer les lignes en double', 'inverser l’ordre des lignes en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organisez des listes, des bibliographies, des SKU d’inventaire ou des imports de code par ordre alphabétique, numérique avec tri naturel, par longueur de caractères ou à l’envers.',
  },
  'find-and-replace': {
    slug: 'rechercher-et-remplacer',
    name: 'Rechercher et Remplacer du Texte',
    shortDescription:
      'Recherchez et remplacez des chaînes dans du texte avec sensibilité à la casse, correspondance de mots entiers et prise en charge des expressions régulières.',
    keywords: [
      'rechercher et remplacer du texte',
      'remplacement de texte en masse',
      'rechercher et remplacer par regex',
      'rechercher et remplacer en ligne',
      'remplacer du texte en ligne',
      'rechercher remplacer des mots',
      'remplacer par regex en ligne',
      'remplacer toutes les occurrences',
      'outil de remplacement de texte',
    ],
    seo: {
      title: 'Rechercher et Remplacer : texte et regex | UtilityFlow',
      description:
        'Recherchez et remplacez du texte dans votre navigateur avec un compteur d’occurrences en direct, la casse, les mots entiers et RegExp — sans inscription.',
      primaryKeyword: 'rechercher et remplacer du texte',
      secondaryKeywords: ['rechercher et remplacer en ligne', 'outil de remplacement par regex', 'remplacer du texte en masse', 'remplacer du texte en ligne'],
      longTailKeywords: ['rechercher et remplacer uniquement des mots entiers en ligne', 'rechercher et remplacer par regex avec groupes de capture', 'remplacer des chaînes de texte en masse dans le navigateur', 'remplacer toutes les occurrences dans un texte en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Effectuez des modifications rapides de recherche et de remplacement en masse dans de la prose, des extraits CSV ou des blocs de code en utilisant la correspondance de texte exacte, les limites de mots entiers ou les groupes de capture d’expressions régulières.',
  },
  'text-reverser': {
    slug: 'inverseur-de-texte',
    name: 'Inverseur de Texte',
    shortDescription:
      'Inversez des chaînes de texte entières, l’ordre des mots, les lettres de chaque mot, ou la séquence des lignes.',
    keywords: [
      'inverseur de texte',
      'inverser une chaîne en ligne',
      'inverser les mots',
      'inverser les lignes',
      'inverser les caractères d’un texte',
      'retourner du texte en ligne',
      'générateur de texte miroir',
      'inverser l’ordre des phrases',
      'générateur de texte à l’envers',
    ],
    seo: {
      title: 'Inverseur de Texte : mots et lignes inversés | UtilityFlow',
      description:
        'Inversez les caractères, retournez l’ordre des mots, reflétez chaque mot ou inversez l’ordre des lignes — compatible Unicode, gratuit et privé sans inscription.',
      primaryKeyword: 'inverseur de texte',
      secondaryKeywords: ['inverser du texte en ligne', 'inverser l’ordre des mots', 'inverser les lignes', 'retourner du texte en ligne'],
      longTailKeywords: ['inverser chaque mot d’une phrase en ligne', 'inverser l’ordre des lignes d’un fichier texte', 'inverseur de chaîne compatible unicode', 'inverser les caractères d’un texte en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Retournez des séquences de caractères, inversez l’ordre des mots par ligne, reflétez les lettres à l’intérieur de chaque mot, ou inversez des listes multi-lignes du bas vers le haut avec une gestion Unicode.',
  },
  'lorem-ipsum-generator': {
    slug: 'generateur-de-lorem-ipsum',
    name: 'Générateur de Lorem Ipsum',
    shortDescription:
      'Générez des paragraphes, des phrases ou un nombre de mots personnalisés, avec des balises HTML <p> en option.',
    keywords: [
      'générateur de lorem ipsum',
      'générateur de texte de substitution',
      'texte factice',
      'lorem ipsum html',
      'texte lorem ipsum',
      'générateur de texte factice',
      'paragraphes factices',
      'mots lorem ipsum',
      'générateur de texte de remplissage',
    ],
    seo: {
      title: 'Générateur de Lorem Ipsum : texte factice | UtilityFlow',
      description:
        'Générez du texte factice Lorem Ipsum par paragraphes, phrases ou nombre exact de mots, avec des balises HTML en option — sans inscription dans votre navigateur.',
      primaryKeyword: 'générateur de lorem ipsum',
      secondaryKeywords: ['texte factice', 'générateur de texte factice', 'paragraphes lorem ipsum', 'générateur de faux texte'],
      longTailKeywords: ['générer du lorem ipsum par nombre de mots', 'générateur de lorem ipsum avec balises html p', 'texte factice propre pour maquettes d’interface', 'générateur de lorem ipsum pour maquette de site web'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Créez du texte factice propre adapté à des nombres exacts de paragraphes, de phrases ou de mots pour des wireframes, des tests typographiques et des prototypes de mise en page — avec des balises de paragraphe HTML en option.',
  },
  'readability-checker': {
    slug: 'verificateur-de-lisibilite',
    name: 'Vérificateur de Lisibilité',
    shortDescription:
      'Calculez les scores Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog et SMOG de lisibilité.',
    keywords: [
      'vérificateur de lisibilité',
      'flesch reading ease',
      'niveau flesch-kincaid',
      'calculateur de gunning fog',
      'indice de lisibilité smog',
      'vérificateur de niveau de lecture',
      'vérificateur de score de lisibilité',
      'lisibilité par niveau scolaire',
      'vérifier la lisibilité d’un texte en ligne',
    ],
    seo: {
      title: 'Vérificateur de Lisibilité : scores Flesch | UtilityFlow',
      description:
        'Vérifiez les scores Flesch Reading Ease, Flesch-Kincaid, Gunning Fog et SMOG avec notre vérificateur de lisibilité — gratuit et privé, dans votre navigateur.',
      primaryKeyword: 'vérificateur de lisibilité',
      secondaryKeywords: ['calculateur de flesch reading ease', 'vérificateur de niveau scolaire', 'outil de niveau de lecture', 'calculateur d’indice gunning fog'],
      longTailKeywords: ['vérifier le niveau flesch-kincaid en ligne', 'calculer les indices de lisibilité gunning fog et smog', 'améliorer le score de lisibilité d’un article dans le navigateur', 'quel est un bon score flesch reading ease'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Évaluez la facilité de compréhension de votre texte avec quatre formules de lisibilité reconnues — Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog et SMOG — ainsi que la détection des mots complexes.',
  },
  'word-frequency-counter': {
    slug: 'compteur-de-frequence-de-mots',
    name: 'Compteur de Fréquence de Mots',
    shortDescription:
      'Comptez les fréquences des expressions de 1, 2 et 3 mots avec filtrage des mots vides et export CSV en un clic pour vos tableurs.',
    keywords: [
      'compteur de fréquence de mots',
      'compteur de fréquence d’expressions',
      'compteur de n-grammes',
      'analyseur de répétition de mots',
      'analyseur de fréquence d’expressions',
      'outil de fréquence de mots',
      'compter les mots répétés en ligne',
      'compteur d’occurrences de mots',
      'analyse de fréquence de texte',
    ],
    seo: {
      title: 'Compteur de Fréquence de Mots et Export CSV | UtilityFlow',
      description:
        'Comptez la fréquence des expressions de 1, 2 et 3 mots dans n’importe quel texte, avec filtrage des mots vides et export CSV en un clic pour vos tableurs.',
      primaryKeyword: 'compteur de fréquence de mots',
      secondaryKeywords: ['analyseur de fréquence de mots', 'analyseur de fréquence d’expressions', 'outil d’occurrences de mots', 'compteur de fréquence de n-grammes'],
      longTailKeywords: ['compter la fréquence des mots et le pourcentage de densité en ligne', 'analyser les expressions de 2 et 3 mots dans un texte', 'exporter le tableau de fréquence des mots en csv', 'analyser les expressions répétées dans les longs brouillons'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Auditez les brouillons de contenu pour l’équilibre des mots-clés, les formulations suremployées et les motifs de n-grammes multi-mots avec des tableaux de fréquence instantanés, un filtrage des mots vides et des rapports CSV téléchargeables.',
  },
  'text-to-slug': {
    slug: 'convertisseur-texte-en-slug',
    name: 'Convertisseur de Texte en Slug',
    shortDescription:
      'Convertissez n’importe quel texte en slugs d’URL propres pour le code, les noms de fichiers et les clés de base de données, avec translittération des accents et mode par lot.',
    keywords: [
      'texte en slug',
      'slugifier texte en ligne',
      'slugifier en ligne',
      'formateur d’url seo',
      'convertisseur de slug',
      'créer un slug d’url',
      'convertisseur de titre en slug',
      'créateur de slug d’url propre',
      'générateur de slug par lot',
    ],
    seo: {
      title: 'Convertisseur Texte en Slug : Développeur | UtilityFlow',
      description:
        'Convertissez n’importe quel texte en slugs d’URL propres pour le code et les noms de fichiers, avec translittération des accents, underscores et mode par lot.',
      primaryKeyword: 'convertisseur de texte en slug',
      secondaryKeywords: ['slugifier du texte', 'slugifier une chaîne', 'générateur d’url propre', 'outil de titre en slug'],
      longTailKeywords: ['convertir un titre d’article en slug d’url adapté au seo', 'convertir plusieurs titres en slugs par lot', 'slugifier les caractères accentués en ascii en ligne', 'générer un slug à partir d’un nom de produit'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez des titres de blog, des noms de produits et des calendriers de contenu multi-lignes en slugs ASCII propres et sûrs pour les URL, avec translittération automatique des accents, contrôles de délimiteur et suppression facultative des mots vides.',
  },
  'markdown-previewer': {
    slug: 'apercu-markdown',
    name: 'Aperçu Markdown et Exportateur HTML',
    shortDescription:
      'Écrivez du Markdown dans un éditeur divisé en direct, inspectez la mise en forme rendue en toute sécurité, et copiez ou exportez du HTML propre.',
    keywords: [
      'aperçu markdown',
      'markdown en html',
      'éditeur markdown en ligne',
      'visionneuse markdown en direct',
      'outil markdown en ligne',
      'rendre du markdown en ligne',
      'convertisseur markdown en html',
      'aperçu markdown de readme',
      'exportateur html markdown',
    ],
    seo: {
      title: 'Aperçu Markdown : éditeur HTML en direct | UtilityFlow',
      description:
        'Écrivez du Markdown et regardez-le se rendre en direct, inspectez le HTML compilé, et copiez ou téléchargez un document HTML propre — gratuit, sans inscription.',
      primaryKeyword: 'aperçu markdown',
      secondaryKeywords: ['convertisseur markdown en html', 'éditeur markdown en ligne', 'visionneuse markdown', 'éditeur markdown en direct'],
      longTailKeywords: ['aperçu markdown en direct avec export html', 'convertir un readme markdown en html en ligne', 'éditeur markdown dans le navigateur sans envoi', 'prévisualiser un readme github avant de valider'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Rédigez des fichiers README, de la documentation et des notes formatées dans un éditeur Markdown réactif avec aperçu rendu en direct, échappement HTML sûr, inspection du HTML brut et export HTML en un clic.',
  },
  'line-prefix-suffix': {
    slug: 'ajouter-prefixe-et-suffixe-aux-lignes',
    name: 'Ajouter des Numéros de Ligne et Préfixe/Suffixe',
    shortDescription:
      'Ajoutez des numéros de ligne, des préfixes personnalisés et des suffixes à chaque ligne pour des listes, des clauses SQL et du code.',
    keywords: [
      'ajouter un préfixe et un suffixe aux lignes',
      'ajouter des numéros de ligne au texte',
      'envelopper les lignes entre guillemets',
      'formateur de lignes en masse',
      'ajouter du texte avant chaque ligne',
      'ajouter du texte aux lignes',
      'générateur de numéros de ligne',
      'formateur de clause sql in',
      'ajouter une virgule à chaque ligne',
    ],
    seo: {
      title: 'Ajouter Préfixe et Suffixe aux Lignes | UtilityFlow',
      description:
        'Ajoutez des numéros de ligne, des préfixes et des suffixes personnalisés à chaque ligne de texte pour des listes, du SQL et du code — gratuit, sans inscription.',
      primaryKeyword: 'ajouter un préfixe et un suffixe aux lignes',
      secondaryKeywords: ['ajouter des numéros de ligne en ligne', 'outil de préfixe suffixe de ligne', 'envelopper les lignes entre guillemets', 'formateur de lignes en masse'],
      longTailKeywords: ['envelopper chaque ligne entre guillemets simples et virgule pour sql', 'ajouter un préfixe de liste numérotée aux lignes de texte', 'ajouter du texte avant et après chaque ligne en masse', 'ajouter des numéros de ligne à partir de zéro'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ajoutez des numéros de ligne séquentiels, des caractères de puce ou des guillemets ouvrants, et ajoutez des virgules, des points-virgules ou des balises de fermeture à chaque ligne d’une liste en quelques secondes.',
  },
  'alphabets-to-word-generator': {
    slug: 'generateur-de-mots-avec-lettres',
    name: 'Générateur de Mots avec Lettres',
    shortDescription: 'Générez des mots à partir de vos lettres instantanément : anagrammes, mots courts et longs, et combinaisons possibles, gratuitement dans votre navigateur.',
    keywords: [
      'générateur de mots avec lettres',
      'générateur de mots à partir de lettres',
      'lettres en mots',
      'générateur d’anagrammes',
      'solveur d’anagrammes',
      'démêler les lettres',
      'trouver des mots avec des lettres',
      'générateur de mots anglais',
      'mots avec lettres données',
    ],
    seo: {
      title: 'Générateur de Mots avec Lettres – Créez des Mots | UtilityFlow',
      description: 'Générez des mots à partir de lettres instantanément avec notre générateur gratuit. Trouvez des mots courts et longs, des anagrammes et des combinaisons possibles.',
      primaryKeyword: 'générateur de mots avec lettres',
      secondaryKeywords: ['générateur d’anagrammes', 'solveur d’anagrammes', 'démêler les lettres', 'trouver des mots avec des lettres'],
      longTailKeywords: ['quels mots puis-je former avec ces lettres', 'générer des mots avec des lettres en ligne gratuit', 'trouver le mot le plus long avec des lettres', 'créer des anagrammes à partir d’un mot'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'Saisissez vos lettres et découvrez tous les mots que vous pouvez former : anagrammes exacts, mots courts et longs, avec des filtres de longueur et de lettres, directement dans votre navigateur.',
  },
};
