import type { UiStrings } from '../ui';

/**
 * French chrome dictionary — same UiStrings shape and key order as
 * src/locales/en/ui.ts. Natural international French (neutral, "vous"
 * forms); brand names, URLs, email addresses and code values kept
 * identical to English.
 */
export const frStrings: UiStrings = {
  nav: {
    tools: 'Outils',
    categories: 'Catégories',
    aiTools: 'Outils IA',
    about: 'À propos',
    contact: 'Contact',
    allTools: 'Tous les outils',
    freeAiTools: 'Outils IA gratuits',
    viewAiSection: 'Voir la section IA sur la page d’accueil →',
    searchPlaceholder: 'Rechercher parmi 88 outils…',
    searchTools: 'Rechercher des outils',
    closeSearch: 'Fermer la recherche',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu de navigation',
    skipToContent: 'Aller au contenu',
    language: 'Langue',
    chooseLanguage: 'Choisir la langue',
    aiWriting: {
      label: 'Assistant d’écriture IA',
      desc: 'Grammaire, réécriture, ton et rédaction d’e-mails',
    },
    aiSummarizer: {
      label: 'Résumeur de texte IA',
      desc: 'Résumés courts, moyens et à puces',
    },
    aiFinder: {
      label: 'Chercheur d’outils IA',
      desc: 'Trouvez le bon outil en langage simple',
    },
  },
  footer: {
    tagline:
      'Une collection rapide d’utilitaires du quotidien, exécutés dans le navigateur, pour les rédacteurs, les ingénieurs, les spécialistes du marketing et les analystes. Conçue pour fonctionner localement, avec un minimum de ressources.',
    categories: 'Catégories',
    platformAi: 'Plateforme et IA',
    legal: 'Mentions légales',
    home: 'Accueil',
    allToolsDirectory: 'Annuaire de tous les outils',
    aboutUs: 'À propos de nous',
    contact: 'Contact',
    privacyPolicy: 'Politique de confidentialité',
    termsOfService: 'Conditions d’utilisation',
    xmlSitemap: 'Plan du site XML',
    rightsReserved: 'Tous droits réservés.',
    deployedNote: 'Utilitaires côté navigateur · Déployé sur Cloudflare Pages',
  },
  common: {
    copy: 'Copier',
    copied: 'Copié',
    download: 'Télécharger',
    clear: 'Effacer',
    loadSample: 'Charger un exemple',
    reset: 'Réinitialiser',
    search: 'Rechercher',
    close: 'Fermer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    submit: 'Envoyer',
    loading: 'Chargement…',
    processing: 'Traitement en cours…',
    upload: 'Importer',
    chooseFile: 'Choisir un fichier',
    dragDrop: 'Glissez-déposez votre fichier ici',
    tryAgain: 'Réessayer',
    openTool: 'Ouvrir l’outil',
    browserSide: 'Côté navigateur',
    freeAiTool: 'Outil IA gratuit',
    externalApi: 'API externe',
  },
  home: {
    seoTitle: 'UtilityFlow – Outils en ligne rapides dans le navigateur',
    seoDescription:
      'Outils en ligne gratuits et rapides, respectueux de la vie privée, pour l’analyse de texte, le formatage, les calculatrices, les PDF, le SEO et les images.',
    seoKeywords: [
      'outils en ligne',
      'outils navigateur',
      'outils de texte',
      'outils développeurs',
      'calculatrices en ligne',
      'outils PDF',
      'outils SEO',
    ],
    eyebrow: 'Plateforme UtilityFlow · 7 catégories principales · {count} utilitaires en ligne',
    h1: 'Des utilitaires en ligne pratiques, conçus pour la rapidité et la confidentialité.',
    heroDescription:
      'UtilityFlow regroupe 85 utilitaires pensés pour le navigateur, plus l’écriture IA, le résumé et la découverte intelligente d’outils, pour le texte, le développement, les calculs, les réseaux sociaux, les PDF, le SEO et les images.',
    exploreCategories: 'Explorer les catégories',
    openDirectory: 'Ouvrir l’annuaire complet',
    aiWriting: 'Écriture IA',
    aiSummarizer: 'Résumé IA',
    aiFinder: 'Recherche d’outils IA',
    metrics: {
      toolCategories: 'Catégories d’outils',
      browserUtilities: 'Utilitaires navigateur',
      liveTools: 'Outils en ligne',
      accountRequired: 'Compte requis',
      none: 'Aucun',
    },
    aiSpotlight: {
      badge: 'Suite IA gratuite · Aucune connexion requise',
      title: 'Outils IA gratuits',
      description:
        'Améliorez vos brouillons, résumez de longs documents ou trouvez le bon outil en quelques secondes, sans inscription.',
    },
    popular: {
      title: 'Outils populaires',
      description: 'Les utilitaires du quotidien les plus utilisés pour l’écriture, le développement et les calculs.',
      viewDirectory: 'Voir l’annuaire des outils',
    },
    categories: {
      title: 'Catégories d’outils',
      description:
        'Sept suites spécialisées conçues pour couvrir l’écriture, le code, les mathématiques, la publication, les documents, l’optimisation pour les moteurs de recherche et les médias.',
      includes: 'Comprend : {names}',
    },
    directory: {
      title: 'Annuaire de tous les outils',
      description:
        'Filtrez par catégorie ou par mot-clé pour accéder directement à n’importe quel utilitaire en ligne ou hub de catégorie.',
      filterPlaceholder: 'Filtrer les catégories ou les outils…',
      allCategories: 'Toutes les catégories',
      noMatch: 'Aucune catégorie ni aucun outil ne correspond à « {query} ».',
      resetFilters: 'Réinitialiser les filtres',
      upcomingUtilities: 'Prochains utilitaires : {names}',
      scheduledInBatch: 'Prévu dans le lot {batch}',
      toolsActive: '{count} outils actifs',
      openCategory: 'Ouvrir la page de la catégorie',
    },
    why: {
      title: 'Pourquoi choisir UtilityFlow',
      description: 'Conçu comme une alternative propre et fiable aux sites d’utilitaires surchargés de publicités.',
      items: [
        {
          title: 'Confidentialité d’abord, dans le navigateur',
          description:
            'Les calculs, les transformations de chaînes et le formatage s’exécutent directement dans la mémoire du navigateur, pour que vos brouillons sensibles et vos charges JSON restent sur votre appareil.',
        },
        {
          title: 'Livraison rapide et légère',
          description:
            'Des modules d’outils découpés par code et des dépendances minimales gardent les chargements de page légers et les Core Web Vitals réactifs sur n’importe quelle connexion.',
        },
        {
          title: 'Des URL propres et permanentes',
          description:
            'Chaque utilitaire vit à sa propre adresse dédiée, avec des métadonnées structurées, des exemples d’utilisation et des liens profonds fiables, même après actualisation du navigateur.',
        },
        {
          title: 'Des résultats prévisibles et vérifiables',
          description:
            'Nos outils privilégient des sorties déterministes, des instructions transparentes et des contrôles accessibles, sans fenêtres intempestives ni indicateurs trompeurs.',
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      description:
        'Les points essentiels sur le fonctionnement de UtilityFlow et ce qu’il faut attendre des prochains lots.',
    },
    faqs: [
      {
        question: 'Les outils de UtilityFlow sont-ils gratuits et utilisables sans créer de compte ?',
        answer:
          'Oui. Les 85 utilitaires navigateur et les 3 outils IA de UtilityFlow sont entièrement gratuits, sans inscription, sans mur de connexion, sans crédits ni abonnement.',
      },
      {
        question: 'UtilityFlow envoie-t-il mes textes, mon code ou mes fichiers vers un serveur ?',
        answer:
          'Les 85 utilitaires navigateur principaux s’exécutent localement dans votre navigateur web sans envoyer vos données. Nos 3 outils IA gratuits (assistant d’écriture IA, résumeur de texte IA et chercheur d’outils IA) traitent vos requêtes en toute sécurité via l’inférence Groq côté serveur, sans stocker vos textes.',
      },
      {
        question: 'Comment les 88 outils sont-ils organisés sur la plateforme ?',
        answer:
          'UtilityFlow couvre sept catégories principales (texte et écriture, développeurs, calculatrices, réseaux sociaux, PDF, SEO et outils d’images et de fichiers), soit 85 outils navigateur et 3 outils IA gratuits intégrés à la plateforme.',
      },
      {
        question: 'Puis-je mettre en favori ou partager un lien direct vers un outil précis ?',
        answer:
          'Oui. Chaque outil et chaque catégorie possède sa propre URL permanente et propre (par exemple /word-counter/, /ai-writing-assistant/ ou /category/developer-tools/) qui se charge directement et fonctionne après actualisation du navigateur.',
      },
      {
        question: 'UtilityFlow fonctionne-t-il bien sur mobile et tablette ?',
        answer:
          'Oui. Toutes les mises en page, les contrôles de navigation et les espaces de travail interactifs — y compris le mode clair et le mode sombre — sont conçus d’abord pour le mobile, avec des cibles tactiles accessibles et des grilles adaptatives.',
      },
    ],
    trustLine: 'Tous les outils sont gratuits • Aucune inscription requise • Fonctionne dans votre navigateur',
  },
  directory: {
    seoTitle: 'Annuaire de tous les outils en ligne | UtilityFlow',
    seoDescription:
      'Parcourez et recherchez les utilités de UtilityFlow dans le navigateur, organisées par catégorie : écriture, développement, calculatrices, PDF, SEO et images.',
    seoKeywords: ['annuaire des outils utilitaires', 'tous les outils en ligne', 'outils navigateur gratuits'],
    title: 'Annuaire de tous les outils',
    description:
      'Parcourez les {count} utilitaires en ligne enregistrés sur UtilityFlow ou explorez les sept hubs de catégories, entre les flux navigateur et IA gratuits.',
    searchPlaceholder: 'Rechercher par nom d’outil, mot-clé ou catégorie…',
    showing: 'Affichage de {tools} outils en ligne dans {categories} catégories',
    all: 'Tout',
    availableTools: 'Outils disponibles',
    categorySuites: 'Suites de catégories',
    visitHub: 'Visiter le hub {name}',
    plannedToolsInclude: 'Outils prévus : {names}',
    noMatch: 'Aucune catégorie ni aucun outil ne correspond à votre filtre.',
    clearFilters: 'Effacer les filtres',
  },
  category: {
    batchLabel: 'Lot {batch}',
    plannedCount: '{count} outils prévus',
    toolsCount: '{count} outils',
    toolsLive: '{count} outils en ligne',
    ofToolsLive: '{count} outils sur {total} en ligne',
    availableTools: '{name} disponibles',
    exploreOther: 'Explorer les autres catégories',
    scheduledTitle: 'Prévu pour le lot {batch}',
    scheduledDescription:
      'Ce hub de catégorie est actif et indexé dans l’architecture {name}. Des pages d’outils individuelles avec des fonctionnalités côté navigateur seront ajoutées ici lors du lot {batch}.',
    plannedToolsTitle: 'Outils prévus dans cette catégorie :',
  },
  toolPage: {
    howToUse: 'Comment utiliser {name}',
    practicalExamples: 'Exemples pratiques',
    faqs: 'Questions fréquentes',
    keyBenefits: 'Avantages principaux',
    commonUseCases: 'Cas d’usage courants',
    runsLocally: 'S’exécute localement dans votre navigateur',
    externalApi: 'Intégration d’API externe',
    freeAiTool: 'Outil IA gratuit · Aucune connexion',
    loadingWorkspace: 'Chargement de l’espace de travail {name}…',
    input: 'Entrée',
    output: 'Sortie',
    relatedTitle: 'Outils associés',
    relatedDescription: 'Poursuivez votre flux de travail avec des utilitaires complémentaires.',
    browseAll: 'Parcourir tous les {name}',
    moreToolsIn: 'Plus d’outils dans',
    willAppear: 'apparaîtront ici avec la sortie du lot {batch}.',
  },
  search: {
    placeholder:
      'Rechercher des outils ou des catégories (p. ex. compteur de mots, JSON, PDF, calculatrices)…',
    search: 'Rechercher',
    tools: 'Outils',
    categories: 'Catégories',
    noResults: 'Aucun outil ni aucune catégorie trouvé pour « {query} ».',
    viewDirectory: 'Voir l’annuaire complet',
    clearSearch: 'Effacer la recherche',
    ariaLabel: 'Rechercher des outils ou des catégories',
  },
  notFound: {
    seoTitle: 'Page introuvable (404) | Outils en ligne UtilityFlow',
    seoDescription:
      'L’outil ou la page demandée est introuvable sur UtilityFlow. Recherchez dans notre annuaire ou parcourez nos catégories pour trouver ce qu’il vous faut.',
    eyebrow: '404 · Introuvable',
    title: 'Nous n’avons pas trouvé cette page.',
    description:
      'L’URL a peut-être changé, ou cet utilitaire n’a pas encore été publié. Recherchez ci-dessous ou parcourez nos catégories pour trouver ce qu’il vous faut.',
    returnHome: 'Retour à l’accueil',
    browseDirectory: 'Parcourir l’annuaire',
    browseCategories: 'Parcourir les catégories',
  },
  about: {
    seoTitle: 'À propos de UtilityFlow – Outils en ligne dans le navigateur',
    seoDescription:
      'Découvrez comment UtilityFlow crée des utilitaires respectueux de la vie privée pour le navigateur, dans sept catégories, sans compte ni publicité intrusive.',
    title: 'À propos de UtilityFlow',
    intro:
      'UtilityFlow est une plateforme web indépendante qui construit 85 utilitaires navigateur ciblés et fiables pour le travail numérique du quotidien.',
    whyTitle: 'Pourquoi avons-nous créé UtilityFlow',
    whyP1:
      'Les tâches en ligne courantes — compter des mots, valider du JSON, vérifier des limites de caractères, calculer des mensualités de prêt ou compresser une image — obligent souvent à passer par des sites lents, remplis de fenêtres intrusives, de téléchargements confus ou d’inscriptions obligatoires.',
    whyP2:
      'Notre objectif est simple : donner à chaque utilitaire une page propre et dédiée qui se charge vite, explique clairement comment l’outil fonctionne et s’exécute directement dans votre navigateur chaque fois que les standards du web le permettent.',
    principlesTitle: 'Principes d’ingénierie fondamentaux',
    principles: [
      {
        title: 'Exécution côté client',
        description:
          'Les utilitaires de texte, de code, de mathématiques et de fichiers locaux traitent les données dans la mémoire du navigateur, pour que vos données de travail ne soient pas envoyées vers des serveurs distants.',
      },
      {
        title: 'Mentions d’API transparentes',
        description:
          'Si un utilitaire spécialisé nécessite une recherche externe ou un appel serveur, nous l’indiquons explicitement sur la page de l’outil avant toute exécution.',
      },
      {
        title: 'Interfaces accessibles',
        description:
          'La navigation au clavier, un contraste lisible, des messages d’erreur clairs et des contrôles mobiles adaptatifs sont intégrés à chaque modèle.',
      },
      {
        title: 'Déploiement modulaire',
        description:
          'Les outils sont livrés et vérifiés en sept lots par catégorie, pour que chaque utilitaire bénéficie de tests fonctionnels approfondis et d’une documentation complète.',
      },
    ],
    categoriesTitle: 'Sept catégories d’outils prévues',
    feedbackTitle: 'Un commentaire ou une demande ?',
    feedbackBefore:
      'Si vous remarquez un cas limite de calcul, un problème d’accessibilité, ou si vous souhaitez suggérer un utilitaire pour un prochain lot, contactez-nous via notre',
    feedbackLink: 'page Contact',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Contacter UtilityFlow – Support, bugs et suggestions',
    seoDescription:
      'Contactez directement l’équipe UtilityFlow pour signaler un problème, suggérer un nouvel outil ou poser une question sur la confidentialité et les conditions.',
    title: 'Contactez-nous',
    intro:
      'Envoyez des rapports de bugs, des suggestions d’outils ou des demandes générales. Nous lisons chaque message et priorisons les correctifs qui améliorent la précision des outils et l’accessibilité.',
    name: 'Nom',
    email: 'Adresse e-mail',
    topic: 'Sujet',
    message: 'Message',
    submit: 'Envoyer le message',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Décrivez l’outil, le bug ou la question en détail…',
    topics: [
      'Suggestion d’outil',
      'Rapport de bug',
      'Correction SEO ou de contenu',
      'Demande de confidentialité ou juridique',
      'Question générale',
    ],
    errors: {
      name: 'Veuillez saisir votre nom.',
      emailEmpty: 'Veuillez saisir votre adresse e-mail.',
      emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
      subject: 'Veuillez choisir ou saisir un sujet.',
      message: 'Veuillez inclure au moins 10 caractères dans votre message.',
    },
    successTitle: 'Message préparé',
    successThanks:
      'Merci, {name}. Votre message concernant {subject} a été validé.',
    successNote:
      'Comme UtilityFlow fonctionne comme un site statique sans stocker les messages des utilisateurs sur un serveur, vous pouvez aussi envoyer votre message directement via votre client de messagerie à',
    sendAnother: 'Envoyer un autre message',
    directEmail: 'E-mail direct',
    directEmailText: 'Vous préférez écrire directement ? Envoyez un e-mail à notre équipe à :',
  },
  privacy: {
    seoTitle: 'Politique de confidentialité et cookies | UtilityFlow',
    seoDescription:
      'Lisez la politique de confidentialité de UtilityFlow sur l’exécution des outils dans le navigateur, les cookies, les journaux serveur et publicité de tiers.',
    title: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : novembre 2026',
    sections: [
      {
        title: '1. Aperçu',
        paragraphs: [
          'UtilityFlow est conçu autour du traitement côté navigateur. Cette politique de confidentialité explique quelles informations sont traitées lorsque vous visitez notre site, comment nos utilitaires gèrent vos données et comment les cookies ou les technologies publicitaires peuvent fonctionner.',
        ],
      },
      {
        title: '2. Données des outils, traitement dans le navigateur et outils IA gratuits',
        paragraphs: [
          'Les textes, chiffres, extraits de code et fichiers saisis dans nos 85 outils navigateur sont traités localement dans votre session de navigation, sans quitter votre appareil.',
          'Nos trois outils IA gratuits (assistant d’écriture IA, résumeur de texte IA et chercheur d’outils IA) envoient le texte soumis via notre backend protégé vers Groq pour une inférence en temps réel. Nous ne stockons ni n’enregistrons vos requêtes, et les limites quotidiennes gratuites utilisent uniquement un hachage SHA-256 daté en UTC, de sorte que les adresses IP brutes des visiteurs ne sont jamais stockées.',
        ],
      },
      {
        title: '3. Journaux d’hébergement et télémétrie technique',
        paragraphs: [
          'UtilityFlow est hébergé sur Cloudflare Pages. Comme les fournisseurs d’hébergement web classiques, notre réseau edge peut traiter automatiquement les métadonnées standard des requêtes HTTP (telles que l’adresse IP, l’agent utilisateur du navigateur, l’URL demandée et l’horodatage) pour diffuser les pages de manière fiable, limiter les abus et assurer la sécurité.',
        ],
      },
      {
        title: '4. Cookies et publicité de tiers',
        paragraphs: [
          'Nous pouvons afficher des publicités de réseaux publicitaires tiers (comme Google AdSense) pour financer l’accès gratuit à nos outils. Les fournisseurs tiers, y compris Google, peuvent utiliser des cookies ou des balises web pour diffuser des annonces en fonction des visites précédentes de l’utilisateur sur ce site ou sur d’autres sites.',
          'Vous pouvez refuser la publicité personnalisée en visitant les paramètres des annonces Google ou en gérant les préférences de cookies directement dans les paramètres de votre navigateur.',
        ],
      },
      {
        title: '5. Liens externes',
        paragraphs: [
          'Notre documentation ou nos pages d’outils peuvent contenir des liens vers des sites web externes. Nous ne sommes pas responsables des pratiques de confidentialité ni du contenu des sites tiers.',
        ],
      },
    ],
    contactTitle: '6. Contact',
    contactBefore:
      'Si vous avez des questions sur cette politique de confidentialité, contactez-nous via notre',
    contactLink: 'page Contact',
    contactMiddle: 'ou par e-mail',
  },
  terms: {
    seoTitle: 'Conditions d’utilisation | Outils en ligne UtilityFlow',
    seoDescription:
      'Consultez les conditions d’utilisation de UtilityFlow : usage autorisé, propriété intellectuelle, exactitude des résultats et limites de responsabilité.',
    title: 'Conditions d’utilisation',
    lastUpdated: 'Dernière mise à jour : novembre 2026',
    sections: [
      {
        title: '2. Usage autorisé',
        paragraphs: [
          'Vous pouvez utiliser UtilityFlow pour des tâches de productivité personnelles, éducatives et commerciales. Vous acceptez de ne pas automatiser de trafic abusif, de ne pas tenter de perturber la diffusion du site, de ne pas contourner les protections de sécurité, ni d’utiliser un utilitaire à des fins illégales.',
        ],
      },
      {
        title: '3. Exactitude et clause de non-responsabilité',
        paragraphs: [
          'Bien que nous testions chaque utilitaire avec soin, tous les outils, calculs, conversions et vérifications SEO sont fournis « tels quels » et « selon disponibilité ». Les résultats doivent être vérifiés indépendamment avant toute décision financière, juridique, médicale ou d’ingénierie de production.',
        ],
      },
      {
        title: '4. Propriété intellectuelle',
        paragraphs: [
          'L’interface, les éléments de marque, la documentation et le code source de UtilityFlow sont protégés par les lois applicables en matière de propriété intellectuelle. Vous conservez la pleine propriété de tous les textes, codes, documents ou images que vous traitez avec nos utilitaires côté client.',
        ],
      },
      {
        title: '5. Limitation de responsabilité',
        paragraphs: [
          'Dans la mesure maximale autorisée par la loi, UtilityFlow et ses contributeurs ne sauraient être tenus responsables des dommages indirects, accessoires, spéciaux ou consécutifs résultant de votre utilisation ou de votre incapacité à utiliser cette plateforme.',
        ],
      },
    ],
    acceptanceTitle: '1. Acceptation des conditions',
    acceptanceBefore:
      'En accédant à UtilityFlow ou en l’utilisant, vous acceptez d’être lié par ces conditions d’utilisation et par notre',
    acceptanceLink: 'Politique de confidentialité',
    acceptanceAfter:
      '. Si vous n’êtes pas d’accord avec une partie de ces conditions, veuillez cesser d’utiliser le site.',
    changesTitle: '6. Modifications et contact',
    changesBefore:
      'Nous pouvons mettre à jour ces conditions d’utilisation à mesure que de nouveaux lots d’outils sont publiés. Les questions peuvent être adressées à notre',
    changesLink: 'page Contact',
    changesAfter: '.',
  },
};
