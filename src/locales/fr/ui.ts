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
    about: 'À propos',
    contact: 'Contact',
    blog: 'Blog',
    allTools: 'Tous les outils',
    searchPlaceholder: 'Rechercher parmi 83 outils…',
    searchTools: 'Rechercher des outils',
    closeSearch: 'Fermer la recherche',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu de navigation',
    skipToContent: 'Aller au contenu',
    language: 'Langue',
    chooseLanguage: 'Choisir la langue',
  },
  footer: {
    tagline:
      'Une collection rapide d’utilitaires du quotidien, exécutés dans le navigateur, pour les rédacteurs, les ingénieurs, les spécialistes du marketing et les analystes. Conçue pour fonctionner localement, avec un minimum de ressources.',
    categories: 'Catégories',
    explore: 'Explorer',
    trustLegal: 'Confiance & Légal',
    home: 'Accueil',
    allToolsDirectory: 'Annuaire de tous les outils',
    blog: 'Blog',
    aboutUs: 'À propos de nous',
    contact: 'Contact',
    privacyPolicy: 'Politique de confidentialité',
    termsOfService: 'Conditions d’utilisation',
    xmlSitemap: 'Plan du site XML',
    rightsReserved: 'Tous droits réservés.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: 'Nous utilisons des cookies et des analyses pour comprendre comment le site est utilisé et l’améliorer. Vous pouvez accepter ou refuser.',
    accept: 'Accepter',
    decline: 'Refuser',
    cookieSettings: 'Paramètres des cookies',
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
    eyebrow: '{count} outils en ligne gratuits · Sans inscription · 100 % privés',
    h1Lead: 'Outils en ligne gratuits',
    h1Rest: ' rapides et privés.',
    heroDescription:
      '{count} utilitaires dans le navigateur pour le texte, le développement, les calculs, les réseaux sociaux, les PDF, le SEO et les images — sans inscription, sans installation, tout fonctionne en privé dans votre navigateur.',
    exploreCategories: 'Explorer les catégories',
    openDirectory: 'Ouvrir l’annuaire complet',
    metrics: {
      toolCategories: 'Catégories d’outils',
      browserUtilities: 'Utilitaires navigateur',
      liveTools: 'Outils en ligne',
      accountRequired: 'Compte requis',
      none: 'Aucun',
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
    howItWorks: {
      title: 'How It Works',
      description: 'Three simple steps — no account, no install, no waiting.',
      steps: [
        {
          title: 'Find your tool',
          description: 'Search or browse the directory to find the tool you need.',
        },
        {
          title: 'Use it right in your browser',
          description: 'Open the tool and start working instantly — nothing to install.',
        },
        {
          title: 'Copy or download the result',
          description: 'Copy your output or download it as a file, ready to use.',
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      description:
        'Les points essentiels sur le fonctionnement de UtilityFlow et ce qu’il faut attendre des nouveaux outils.',
    },
    faqs: [
      {
        question: 'Les outils de UtilityFlow sont-ils gratuits et utilisables sans créer de compte ?',
        answer:
          'Oui. Les 83 utilitaires navigateur de UtilityFlow sont entièrement gratuits, sans inscription, sans mur de connexion, sans crédits ni abonnement.',
      },
      {
        question: 'UtilityFlow envoie-t-il mes textes, mon code ou mes fichiers vers un serveur ?',
        answer:
          'Les 83 utilitaires navigateur principaux s’exécutent localement dans votre navigateur web sans envoyer vos données.',
      },
      {
        question: 'Comment les 83 outils sont-ils organisés sur la plateforme ?',
        answer:
          'UtilityFlow couvre sept catégories principales (texte et écriture, développeurs, calculatrices, réseaux sociaux, PDF, SEO et outils d’images et de fichiers), soit 83 outils navigateur intégrés à la plateforme.',
      },
      {
        question: 'Puis-je mettre en favori ou partager un lien direct vers un outil précis ?',
        answer:
          'Oui. Chaque outil et chaque catégorie possède sa propre URL permanente et propre (par exemple /word-counter/ ou /category/developer-tools/) qui se charge directement et fonctionne après actualisation du navigateur.',
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
      'Parcourez les {count} utilitaires en ligne enregistrés sur UtilityFlow ou explorez les sept hubs de catégories.',
    searchPlaceholder: 'Rechercher par nom d’outil, mot-clé ou catégorie…',
    showing: 'Affichage de {tools} outils en ligne dans {categories} catégories',
    all: 'Tout',
    availableTools: 'Outils disponibles',
    categorySuites: 'Suites de catégories',
    visitHub: 'Visiter le hub {name}',
    plannedToolsInclude: 'Outils de cette catégorie : {names}',
    noMatch: 'Aucune catégorie ni aucun outil ne correspond à votre filtre.',
    clearFilters: 'Effacer les filtres',
  },
  category: {
    plannedCount: '{count} outils',
    toolsCount: '{count} outils',
    toolsLive: '{count} outils en ligne',
    ofToolsLive: '{count} outils sur {total} en ligne',
    availableTools: '{name} disponibles',
    exploreOther: 'Explorer les autres catégories',
    scheduledTitle: 'D’autres outils arrivent bientôt',
    scheduledDescription:
      'Ce hub de catégorie est actif et indexé dans l’architecture {name}. Des pages d’outils individuelles avec des fonctionnalités côté navigateur seront ajoutées ici prochainement.',
    plannedToolsTitle: 'Outils dans cette catégorie :',
  },
  toolPage: {
    howToUse: 'Comment utiliser {name}',
    practicalExamples: 'Exemples pratiques',
    faqs: 'Questions fréquentes',
    keyBenefits: 'Avantages principaux',
    commonUseCases: 'Cas d’usage courants',
    runsLocally: 'S’exécute localement dans votre navigateur',
    externalApi: 'Intégration d’API externe',
    loadingWorkspace: 'Chargement de l’espace de travail {name}…',
    input: 'Entrée',
    output: 'Sortie',
    relatedTitle: 'Outils associés',
    relatedDescription: 'Poursuivez votre flux de travail avec des utilitaires complémentaires.',
    browseAll: 'Parcourir tous les {name}',
    moreToolsIn: 'Plus d’outils dans',
    willAppear: 'apparaîtront ici bientôt.',
    bylineAuthor: 'Par Bilal',
    lastUpdated: 'Dernière mise à jour : novembre 2026',
  },
  blog: {
    seoTitle: 'Guides, tutoriels et ressources | Blog UtilityFlow',
    seoDescription:
      'Guides pratiques, tutoriels pas à pas et ressources pour chaque outil UtilityFlow : texte, développement, calculatrices, PDF, SEO, réseaux sociaux et images.',
    title: 'Guides, tutoriels et ressources',
    description:
      'Guides pratiques et tutoriels pas à pas pour chaque outil UtilityFlow. Apprenez ce que fait chaque outil, comment bien l’utiliser et comment obtenir le meilleur résultat.',
    searchPlaceholder: 'Rechercher des articles...',
    searchArticles: 'Rechercher des articles',
    noResults: 'Aucun article trouvé.',
    featured: 'Articles à la une',
    latest: 'Derniers articles',
    browseByCategory: 'Parcourir par catégorie',
    relatedArticles: 'Articles associés',
    relatedTools: 'Outils associés',
    readingTime: '{minutes} min de lecture',
    publishedOn: 'Publié le {date}',
    updatedOn: 'Mis à jour le {date}',
    byEditorial: 'Par l’équipe éditoriale d’UtilityFlow',
    tableOfContents: 'Sommaire',
    prevArticle: 'Article précédent',
    nextArticle: 'Article suivant',
    share: 'Partager',
    tryTool: 'Essayer l’outil',
    guidesInCategory: 'Guides de cette catégorie',
    categoryGuidesWord: 'Guides',
    noArticlesYet: 'Aucun article pour le moment',
    noArticlesYetDescription: 'Les guides de cette section sont en cours de préparation. Revenez bientôt.',
    backToBlog: 'Retour au blog',
    allArticles: 'Tous les articles',
    notAvailableInLanguage: 'Cet article n’est pas encore disponible dans cette langue.',
    minRead: 'min de lecture',
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
      'UtilityFlow est une plateforme web indépendante qui construit 83 utilitaires ciblés et fiables pour le travail numérique du quotidien.',
    whyTitle: 'Pourquoi avons-nous créé UtilityFlow',
    whyP1:
      'Les tâches en ligne courantes — compter des mots, valider du JSON, vérifier des limites de caractères, calculer des mensualités de prêt ou compresser une image — obligent souvent à passer par des sites lents, remplis de fenêtres intrusives, de téléchargements confus ou d’inscriptions obligatoires.',
    whyP2:
      'Notre objectif est simple : donner à chaque utilitaire une page propre et dédiée qui se charge vite, explique clairement comment l’outil fonctionne et s’exécute directement dans votre navigateur chaque fois que les standards du web le permettent.',
    orgTitle: 'Qui gère UtilityFlow',
    orgP1:
      'UtilityFlow est un projet indépendant créé et maintenu par Bilal, un créateur qui développe des outils web gratuits pendant son temps libre. Aucune entreprise ne se cache derrière le site, aucun financement d’investisseurs, aucune équipe d’employés — chaque outil, chaque guide et chaque page d’aide est conçu, construit et testé par une seule personne. Les 83 outils sont gratuits, sans compte ni abonnement. Le crédit en pied de page nomme Shaheen, dont les encouragements ont inspiré le projet et dont le nom apparaît sur chaque page pour rappeler d’où l’idée est née.',
    orgP2:
      'Parce que le projet est petit et indépendant, les décisions restent simples : si un outil est lent, confus ou incorrect, il est corrigé. Les messages envoyés via la page Contact arrivent directement à la personne qui peut modifier le code, et les suggestions des visiteurs ont déjà inspiré de nouveaux outils et des améliorations sur tout le site.',
    howTitle: 'Comment nos outils sont construits et testés',
    howP1:
      'Chaque utilitaire part d’une tâche unique et claire — compter des mots, fusionner des PDF, formater du JSON — et devient une page ciblée qui accomplit bien cette tâche. Chaque fois que les standards du web le permettent, le travail se fait entièrement dans votre navigateur, de sorte que vos textes et fichiers n’ont jamais besoin de quitter votre appareil. Chaque page d’outil explique ses étapes dans un court guide, montre des exemples concrets et répond aux questions les plus fréquentes, pour que vous puissiez juger le résultat au lieu de faire confiance à une boîte noire.',
    howP2:
      'Avant la mise en ligne, chaque outil est testé avec des données réelles dans un navigateur de bureau et un navigateur mobile, y compris des cas limites comme une entrée vide, un texte très long ou des types de fichiers inhabituels. Quand quelque chose ne fonctionne pas ou qu’un calcul semble erroné, la correction est publiée dans une mise à jour du site et la page est vérifiée à nouveau. Chaque outil fonctionne entièrement dans votre navigateur : rien de ce que vous saisissez n’est jamais envoyé vers un serveur.',
    whoTitle: 'À qui s’adresse UtilityFlow',
    whoP1:
      'UtilityFlow est conçu pour toute personne qui a besoin d’une réponse rapide d’un outil, sans installer de logiciel ni créer de compte : les étudiants qui vérifient le nombre de mots d’une dissertation, les rédacteurs qui mettent en forme un brouillon, les développeurs qui valident du JSON ou encodent une URL, les spécialistes du marketing qui vérifient des limites de caractères, et les petits entrepreneurs qui calculent un prêt ou une remise. Si une tâche prend moins d’une minute, l’outil qui la réalise devrait prendre moins d’une minute aussi — c’est l’exigence à laquelle chaque page du site est soumise.',
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
          'Les outils sont livrés et vérifiés par catégorie, pour que chaque utilitaire bénéficie de tests fonctionnels approfondis et d’une documentation complète.',
      },
    ],
    categoriesTitle: 'Sept catégories d’outils',
    feedbackTitle: 'Un commentaire ou une demande ?',
    feedbackBefore:
      'Si vous remarquez un cas limite de calcul, un problème d’accessibilité, ou si vous souhaitez suggérer un nouvel utilitaire, contactez-nous via notre',
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
    aboutTitle: 'Ce dont vous pouvez nous écrire',
    aboutP1:
      'Utilisez ce formulaire pour tout ce qui concerne le site. Signalez un bug en précisant l’outil utilisé, ce que vous avez saisi et ce que vous attendiez — plus vous donnez de détails, plus le problème peut être reproduit et corrigé rapidement. Proposez un nouvel outil en décrivant la tâche qu’il devrait accomplir ; les idées demandées par de nombreux visiteurs passent en tête de liste. Vous pouvez aussi signaler un calcul erroné, une consigne confuse ou une erreur de traduction sur n’importe quelle page.',
    aboutP2:
      'Les questions de confidentialité et les questions juridiques sont également bienvenues. Si un commentaire que vous avez publié doit être supprimé, indiquez la page de l’outil et le nom utilisé, et il sera retiré. Pour tout le reste — une idée de partenariat, une question de presse ou un commentaire général sur le site — ce même formulaire convient, ou vous pouvez écrire directement à l’adresse e-mail indiquée sur cette page.',
    responseTitle: 'Ce qui se passe après l’envoi de votre message',
    responseP1:
      'Chaque message est lu par la personne qui construit et maintient UtilityFlow — il n’y a ni service d’assistance ni file de réponses automatisées. Les rapports de bugs et les résultats erronés sont examinés en premier, car un outil défectueux affecte tous ceux qui l’utilisent. Les suggestions d’outils sont recueillies et évaluées selon le nombre de personnes qui les utiliseraient et leur adéquation avec l’approche du site, centrée sur le navigateur.',
    responseP2:
      'Vous n’avez pas besoin de compte pour nous contacter, et nous n’utiliserons votre adresse e-mail que pour répondre à votre message. Si vous préférez ne pas utiliser le formulaire, l’adresse e-mail directe indiquée sur cette page aboutit dans la même boîte de réception.',
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
    successTitle: 'Message envoyé',
    successThanks:
      'Merci, {name}. Votre message a été envoyé et nous vous répondrons bientôt.',
    successNote:
      'Si vous souhaitez ajouter quelque chose, vous pouvez aussi nous joindre directement à',
    sending: 'Envoi en cours…',
    sendError: 'Impossible d’envoyer votre message. Veuillez réessayer.',
    sendAnother: 'Envoyer un autre message',
    directEmail: 'E-mail direct',
    directEmailText: 'Vous préférez écrire directement ? Envoyez un e-mail à notre équipe à :',
  },
  privacy: {
    seoTitle: 'Politique de confidentialité et cookies | UtilityFlow',
    seoDescription:
      'Lisez la politique de confidentialité de UtilityFlow sur l’exécution des outils dans le navigateur, les cookies, les journaux serveur et les analyses.',
    title: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : novembre 2026',
    sections: [
      {
        title: '1. Aperçu',
        paragraphs: [
          'UtilityFlow est conçu autour du traitement côté navigateur. Cette politique de confidentialité explique quelles informations sont traitées lorsque vous visitez notre site, comment nos utilitaires gèrent vos données et comment fonctionnent les cookies et les analyses sur le site.',
        ],
      },
      {
        title: '2. Données des outils et traitement dans le navigateur',
        paragraphs: [
          'Les textes, chiffres, extraits de code et fichiers saisis dans nos 83 outils navigateur sont traités localement dans votre session de navigation, sans quitter votre appareil.',
          'Les commentaires publiés sous nos outils ne demandent qu’un nom et le texte du commentaire. Le nom et le texte que vous envoyez sont stockés sur notre plateforme d’hébergement et affichés publiquement sur la page de l’outil concerné, avec la date. Nous ne demandons ni adresse e-mail ni compte pour commenter, et nous n’utilisons pas les données des commentaires à des fins publicitaires. Si vous souhaitez qu’un commentaire soit supprimé, contactez-nous en indiquant la page et le nom utilisé, et nous le supprimerons.',
        ],
      },
      {
        title: '3. Journaux d’hébergement et télémétrie technique',
        paragraphs: [
          'UtilityFlow est hébergé sur Cloudflare Pages. Comme les fournisseurs d’hébergement web classiques, notre réseau edge peut traiter automatiquement les métadonnées standard des requêtes HTTP (telles que l’adresse IP, l’agent utilisateur du navigateur, l’URL demandée et l’horodatage) pour diffuser les pages de manière fiable, limiter les abus et assurer la sécurité.',
          'Nous ne combinons pas les journaux d’hébergement avec d’autres données pour identifier les visiteurs, et nous ne vendons ni ne partageons les données des journaux avec des annonceurs. Les journaux servent uniquement à assurer le fonctionnement et la sécurité du service.',
        ],
      },
      {
        title: '4. Cookies et analyses',
        paragraphs: [
          'UtilityFlow n’affiche actuellement aucune publicité de tiers.',
          'Nous utilisons également Google Analytics 4 pour comprendre, de façon agrégée, comment le site est utilisé ; il ne s’active que si vous acceptez les cookies dans la bannière.',
        ],
      },
      {
        title: '5. Liens externes',
        paragraphs: [
          'Notre documentation ou nos pages d’outils peuvent contenir des liens vers des sites web externes. Nous ne sommes pas responsables des pratiques de confidentialité ni du contenu des sites tiers.',
          'Les liens externes s’ouvrent dans un nouvel onglet lorsque c’est possible. Avant de saisir des informations personnelles sur un site lié, veuillez consulter la politique de confidentialité de ce site.',
        ],
      },
      {
        title: '6. Conservation des données',
        paragraphs: [
          'Les informations traitées dans votre navigateur ne nous sont jamais envoyées, il n’y a donc rien à conserver. Les commentaires sont conservés jusqu’à leur suppression, par nous ou à votre demande. Les journaux d’hébergement et les enregistrements de sécurité ne sont conservés que pendant la durée limitée dont notre hébergeur a besoin pour exploiter et protéger le service.',
        ],
      },
      {
        title: '7. Vos droits et vos choix',
        paragraphs: [
          'Vous pouvez bloquer ou supprimer les cookies dans les paramètres de votre navigateur à tout moment. Si vous avez publié un commentaire, vous pouvez demander sa suppression en nous contactant. Comme nos outils fonctionnent dans votre navigateur et que nous ne conservons ni comptes ni profils, il n’existe aucun fichier de données personnelles à télécharger ou à corriger — mais toute question sur vos données recevra une réponse si vous nous écrivez.',
        ],
      },
      {
        title: '8. Confidentialité des enfants',
        paragraphs: [
          'UtilityFlow est un site généraliste qui ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants. Si vous êtes parent ou tuteur et pensez qu’un enfant a publié un commentaire sur le site, contactez-nous et nous le supprimerons.',
        ],
      },
      {
        title: '9. Modifications de cette politique',
        paragraphs: [
          'Nous pouvons mettre à jour cette politique de confidentialité lorsque nous ajoutons des outils, changeons de prestataire ou modifions le fonctionnement du site. La date « Dernière mise à jour » en haut de cette page indique la dernière révision. Continuer à utiliser le site après une modification signifie que vous acceptez la politique mise à jour.',
        ],
      },
    ],
    contactTitle: '10. Contact',
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
          'Vous pouvez créer des liens vers nos outils et partager leurs résultats. Vous ne pouvez pas présenter nos outils comme les vôtres, copier le design ou le contenu du site pour le republier en tant que service concurrent, ni utiliser le site d’une manière qui induit les autres en erreur sur l’origine d’un résultat.',
        ],
      },
      {
        title: '3. Exactitude et clause de non-responsabilité',
        paragraphs: [
          'Bien que nous testions chaque utilitaire avec soin, tous les outils, calculs, conversions et vérifications SEO sont fournis « tels quels » et « selon disponibilité ». Les résultats doivent être vérifiés indépendamment avant toute décision financière, juridique, médicale ou d’ingénierie de production.',
          'Les calculs tels que les mensualités de prêt, les estimations fiscales et les conversions de devises sont des aides à la planification, et non des conseils professionnels. Les chiffres peuvent varier selon les taux, les règles et les arrondis ; vérifiez donc les montants importants auprès d’un professionnel qualifié ou d’une source officielle avant d’agir.',
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
          'UtilityFlow est un projet indépendant et n’est affilié à YouTube, Instagram, Google ni à aucune autre marque tierce mentionnée sur ce site, ni approuvé par elles, ni lié à elles.',
        ],
      },
      {
        title: '6. Contenu des utilisateurs et commentaires',
        paragraphs: [
          'Vous conservez la pleine propriété de tout ce que vous saisissez dans nos outils ou publiez en commentaire. En publiant un commentaire, vous nous autorisez à l’afficher publiquement sur la page de l’outil concerné. Ne publiez rien d’illégal, de trompeur ou de nuisible à autrui, et ne publiez pas les informations personnelles d’une autre personne. Nous pouvons supprimer sans préavis les commentaires qui enfreignent ces règles ou qui nous sont signalés.',
        ],
      },
      {
        title: '7. Services tiers',
        paragraphs: [
          'Certaines fonctionnalités reposent sur des services tiers indépendants : le formulaire de contact est transmis par FormSubmit et le site est hébergé sur Cloudflare. Chacun de ces services possède ses propres conditions et sa propre politique de confidentialité, et votre utilisation est régie par ces documents. UtilityFlow n’est pas responsable de la disponibilité ni des pratiques des services tiers.',
        ],
      },
      {
        title: '8. Disponibilité du service',
        paragraphs: [
          'UtilityFlow est un service gratuit et nous ne garantissons pas que chaque outil sera toujours disponible. Les outils peuvent être modifiés, améliorés ou retirés, et le site peut être temporairement indisponible pour maintenance. Nous nous efforçons de maintenir le service en bon état de marche, mais nous ne sommes pas responsables des interruptions ni des pertes causées par une indisponibilité.',
        ],
      },
    ],
    acceptanceTitle: '1. Acceptation des conditions',
    acceptanceBefore:
      'En accédant à UtilityFlow ou en l’utilisant, vous acceptez d’être lié par ces conditions d’utilisation et par notre',
    acceptanceLink: 'Politique de confidentialité',
    acceptanceAfter:
      '. Si vous n’êtes pas d’accord avec une partie de ces conditions, veuillez cesser d’utiliser le site.',
    changesTitle: '9. Modifications et contact',
    changesBefore:
      'Nous pouvons mettre à jour ces conditions d’utilisation à mesure que de nouveaux outils sont publiés. Les questions peuvent être adressées à notre',
    changesLink: 'page Contact',
    changesAfter: '.',
  },
};
