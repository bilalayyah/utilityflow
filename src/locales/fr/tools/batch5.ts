import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Filled by Phase 2 translation. See batch1.ts for the required shape.
 */
export const FR_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'generateur-de-meta-tags',
    name: 'Générateur de Meta Tags et Open Graph',
    shortDescription:
      'Générez des balises title, meta description, canonical, robots, Open Graph et Twitter/X Card avec aperçu de carte en direct.',
    keywords: [
      'générateur de meta tags',
      'générateur open graph',
      'générateur twitter card',
      'balises seo html',
      'meta tags open graph',
      'générateur de balises meta seo',
      'générateur de meta description',
      'créateur de balises meta html',
      'balises meta réseaux sociaux',
    ],
    seo: {
      title: 'Générateur de Meta Tags – Open Graph | UtilityFlow',
      description:
        'Créez des balises title, description, canonical, Open Graph et Twitter Card propres, avec contrôle de longueur en direct et aperçu de carte sociale — gratuit.',
      primaryKeyword: 'générateur de meta tags',
      secondaryKeywords: [
        'générateur de balises open graph',
        'générateur de meta pour réseaux sociaux',
        'créateur de balises head seo',
        'générateur de meta twitter card',
      ],
      longTailKeywords: [
        'générer gratuitement des balises meta open graph et twitter card html',
        'vérifier la longueur du titre et de la description avec aperçu social',
        'télécharger des balises meta seo prêtes à coller en html',
        'créer des meta tags pour un site web avec aperçu open graph',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Composez des métadonnées HTML <head> conformes aux standards — <title>, <meta name="description">, URL canonique, directives d’indexation, balises Open Graph (og:*) et balises Twitter/X Card — avec échappement des attributs et aperçu de carte sociale en direct.',
    instructions: [
      {
        title: 'Saisissez le titre et la meta description',
        description:
          'Remplissez le titre de page (visez 30 à 60 caractères) et la meta description (120 à 160 caractères) en surveillant les indicateurs de longueur en direct.',
      },
      {
        title: 'Définissez l’URL canonique et les directives d’indexation',
        description:
          'Saisissez l’URL canonique complète de la page et choisissez si les robots doivent l’indexer et suivre ses liens.',
      },
      {
        title: 'Ajoutez les balises Open Graph',
        description:
          'Renseignez le titre, la description, le type et l’URL de l’image Open Graph (1 200 × 630 pixels recommandés) pour que les liens s’affichent bien une fois partagés.',
      },
      {
        title: 'Configurez la Twitter/X Card',
        description:
          'Choisissez summary ou summary_large_image et vérifiez le titre, la description et l’image que X affichera.',
      },
      {
        title: 'Vérifiez l’aperçu de carte sociale en direct',
        description:
          'Consultez le panneau d’aperçu pour voir exactement comment le lien apparaîtra dans un fil social, et corrigez toute troncature ou image manquante avant de publier.',
      },
      {
        title: 'Copiez ou téléchargez le snippet HTML',
        description:
          'Copiez le HTML échappé dans le <head> de votre page, ou téléchargez meta-tags.html et réutilisez le bloc dans vos modèles.',
      },
    ],
    examples: [
      {
        title: 'Bloc Open Graph et canonique standard pour un site web',
        input: 'Titre : UtilityFlow · Type : website · Carte : summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* et twitter:*',
        explanation: 'Échappe correctement les guillemets et les esperluettes dans les valeurs d’attributs.',
      },
      {
        title: 'Balises meta pour un article de blog',
        input: 'Titre : Guide du référencement 2026 · Type : article · Image : 1200×630',
        output: 'Bloc <head> complet avec og:type article, og:image et twitter:card summary_large_image',
        explanation: 'Le type article indique aux plateformes d’afficher le format d’aperçu adapté aux billets de blog.',
      },
    ],
    benefits: [
      'Échappe automatiquement les caractères &, ", < et > dans les attributs des balises',
      'Réunit balises head SEO, Open Graph et Twitter/X Cards dans un seul snippet cohérent',
      'Prévisualise l’apparence des liens partagés sur les réseaux avant le déploiement',
      'Permet de télécharger un snippet meta-tags.html autonome',
    ],
    useCases: [
      'Lancer des pages d’accueil, des microsites marketing et des hubs de produits SaaS',
      'Standardiser les dimensions d’images Open Graph et les types de cartes sur les articles',
      'Vérifier les directives index/noindex et les URL canoniques avant une mise en production',
      'Transmettre des modèles <head> propres des équipes marketing aux développeurs front-end',
    ],
    faqs: [
      {
        question: 'Faut-il des balises séparées pour Open Graph et Twitter/X ?',
        answer:
          'X se rabat sur Open Graph pour le titre et la description si besoin, mais déclarer explicitement twitter:card (summary_large_image) en plus de og:* garantit des aperçus d’image larges et prévisibles partout.',
      },
      {
        question: 'Quelle taille mon image og:image doit-elle avoir ?',
        answer:
          'Utilisez une image de 1 200 × 630 pixels (ratio 1,91:1) hébergée sur une URL HTTPS et non bloquée par robots.txt.',
      },
      {
        question: 'Ajouter <meta name="keywords"> aide-t-il encore le classement Google ?',
        answer:
          'Les grands moteurs de recherche ignorent les meta keywords à cause du spam historique ; ce générateur garde donc votre <head> propre, avec un titre, une description, une URL canonique et des balises sociales efficaces.',
      },
      {
        question: 'Le générateur de meta tags est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit et fonctionne entièrement dans votre navigateur : vos titres, descriptions et URL ne sont jamais envoyés à un serveur.',
      },
      {
        question: 'Faut-il installer quelque chose pour utiliser le générateur de meta tags ?',
        answer:
          'Non. Il fonctionne dans n’importe quel navigateur moderne, sans rien installer, et vous pouvez générer des balises sur ordinateur comme sur mobile.',
      },
      {
        question: 'Quelle est la longueur idéale d’un meta title ?',
        answer:
          'Visez 30 à 60 caractères pour que le titre complet tienne dans les résultats de recherche et les cartes sociales sans être coupé par des points de suspension.',
      },
      {
        question: 'Quelle est la longueur idéale d’une meta description ?',
        answer:
          'Gardez-la entre 120 et 160 caractères pour que le résumé complet reste visible dans les résultats de recherche, sur ordinateur comme sur mobile.',
      },
      {
        question: 'Comment le générateur de meta tags gère-t-il les caractères spéciaux dans les titres ?',
        answer:
          'Il échappe automatiquement les caractères &, ", < et > dans les valeurs d’attributs, pour que les guillemets et les esperluettes ne cassent jamais le balisage de votre page.',
      },
      {
        question: 'Qu’est-ce qu’une URL canonique et pourquoi le générateur en inclut-il une ?',
        answer:
          'Une URL canonique indique aux moteurs de recherche quelle version d’une page est l’originale quand des pages similaires existent, ce qui évite toute confusion de contenu dupliqué.',
      },
      {
        question: 'Quelle est la différence entre les balises Open Graph et Twitter Card ?',
        answer:
          'Les balises Open Graph contrôlent les aperçus de liens sur Facebook, LinkedIn et les applications de messagerie, tandis que les balises Twitter Card contrôlent l’affichage du même lien sur X.',
      },
      {
        question: 'Quel type de carte Twitter choisir dans le générateur de meta tags ?',
        answer:
          'Utilisez summary_large_image pour les pages portées par une image, comme les articles et les pages produits, et summary pour les pages de texte simple où une petite vignette suffit.',
      },
      {
        question: 'Puis-je prévisualiser l’apparence de mon lien une fois partagé ?',
        answer:
          'Oui. L’aperçu de carte sociale en direct montre le titre, la description et l’image exactement comme ils apparaîtront dans un fil social avant publication.',
      },
      {
        question: 'Le générateur de meta tags envoie-t-il le contenu de ma page quelque part ?',
        answer:
          'Non. Tout fonctionne localement dans votre navigateur et rien de ce que vous saisissez ne quitte votre appareil.',
      },
      {
        question: 'Comment ajouter les meta tags générées à mon site web ?',
        answer:
          'Copiez le snippet et collez-le dans la section <head> du modèle de votre page, ou téléchargez meta-tags.html et réutilisez le bloc sur plusieurs pages.',
      },
      {
        question: 'Quand utiliser une directive robots noindex avec le générateur de meta tags ?',
        answer:
          'Utilisez noindex uniquement pour les pages que vous ne voulez jamais voir dans les résultats de recherche, comme les pages de remerciement, les résultats de recherche internes ou les copies de test d’une page en ligne.',
      },
      {
        question: 'Puis-je utiliser le générateur de meta tags pour un article de blog ou une page produit ?',
        answer:
          'Oui. Définissez og:type sur article pour les billets de blog ou product pour les pages de boutique, afin que chaque plateforme affiche le bon format d’aperçu.',
      },
      {
        question: 'Que se passe-t-il si mon URL og:image est fausse ou si l’image est manquante ?',
        answer:
          'Les plateformes sociales n’afficheront aucune image ou un aperçu cassé ; utilisez donc toujours une URL d’image HTTPS directe et vérifiez l’aperçu avant de publier.',
      },
      {
        question: 'Le générateur de meta tags prend-il en charge les pages multilingues ?',
        answer:
          'Il génère des balises pour une page à la fois : définissez og:locale pour la langue de la page et générez un jeu de balises distinct pour chaque version traduite.',
      },
      {
        question: 'Puis-je télécharger les meta tags générées sous forme de fichier ?',
        answer:
          'Oui. Le bouton de téléchargement enregistre un fichier autonome meta-tags.html contenant le snippet complet et échappé.',
      },
      {
        question: 'Le générateur de meta tags améliorera-t-il mon classement Google à lui seul ?',
        answer:
          'Aucun outil ne garantit un classement, mais des titres, des descriptions et des balises sociales précis améliorent le taux de clic et la présentation de vos pages.',
      },
    ],
  },
  'serp-snippet-preview': {
    slug: 'apercu-de-snippet-serp',
    name: 'Aperçu de Snippet SERP',
    shortDescription:
      'Simulez les résultats Google sur ordinateur et mobile avec une vérification réelle de la largeur en pixels du titre et la mise en gras des mots-clés.',
    keywords: [
      'outil aperçu serp',
      'simulateur snippet google',
      'vérificateur largeur pixels titre seo',
      'aperçu meta description',
      'aperçu serp google',
      'outil aperçu résultat recherche',
      'vérificateur snippet seo',
      'vérificateur titre google',
      'vérificateur longueur meta description',
    ],
    seo: {
      title: 'Aperçu de Snippet SERP – Largeur en Pixels | UtilityFlow',
      description:
        'Prévisualisez votre snippet Google sur ordinateur et mobile : largeur réelle du titre en pixels, mots-clés en gras et alertes de troncature avant publication.',
      primaryKeyword: 'aperçu snippet serp',
      secondaryKeywords: [
        'simulateur serp google',
        'vérificateur largeur pixels titre seo',
        'aperçu résultat recherche mobile',
        'outil aperçu serp ordinateur',
      ],
      longTailKeywords: [
        'vérifier largeur pixels titre seo google 580px en ligne',
        'prévisualiser troncature snippet ordinateur et mobile',
        'tester mise en gras mots-clés dans meta description',
        'prévisualiser snippet google avant publication page',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mesurez si votre titre SEO tient dans le budget d’affichage d’environ 580 px de Google grâce au calcul en direct des métriques de police HTML5 Canvas — plutôt qu’à de simples estimations de caractères — et prévisualisez les cartes de recherche sur ordinateur et mobile avec mise en gras des mots-clés.',
    instructions: [
      {
        title: 'Saisissez le titre, la description et l’URL',
        description:
          'Tapez votre titre SEO candidat, votre meta description, l’URL de la page, ainsi qu’un nom de site ou une date de publication facultatifs.',
      },
      {
        title: 'Mesurez la largeur en pixels',
        description:
          'Consultez la lecture en px en direct à côté du titre SEO : les lettres larges comme W et M consomment plus de pixels horizontaux que l et i.',
      },
      {
        title: 'Vérifiez l’aperçu sur ordinateur',
        description:
          'Examinez la carte de recherche sur ordinateur pour voir le titre complet, l’URL en fil d’Ariane et la description exactement comme les utilisateurs les verraient.',
      },
      {
        title: 'Basculez vers l’aperçu mobile',
        description:
          'Passez en vue mobile pour vérifier le point de troncature plus court et vous assurer que le message clé reste visible sur les petits écrans.',
      },
      {
        title: 'Testez la mise en gras des mots-clés',
        description:
          'Saisissez votre requête de recherche cible dans le champ Mot-clé en gras pour voir quels mots Google mettrait en évidence dans votre snippet.',
      },
      {
        title: 'Copiez les balises terminées',
        description:
          'Quand l’aperçu vous convient, copiez les balises <title> et <meta name="description"> prêtes à coller dans votre page.',
      },
    ],
    examples: [
      {
        title: 'Détecter la troncature d’un titre rempli de caractères larges',
        input: 'Titre de 60 caractères rempli de W et de M en majuscules',
        output: 'Signale un dépassement de 580 px même avec moins de 60 caractères, pour raccourcir avant la coupure.',
        explanation: 'Les métriques de texte Canvas approximent les largeurs réelles de rendu serif/sans des résultats de recherche.',
      },
      {
        title: 'Comparer le même snippet sur ordinateur et mobile',
        input: 'Titre de 58 caractères et description de 155 caractères',
        output: 'Aperçu complet sur ordinateur, description repliée à environ 120 caractères sur mobile',
        explanation: 'La vue mobile montre où le message clé doit apparaître pour rester visible après le repli.',
      },
    ],
    benefits: [
      'Utilise les largeurs en pixels de Canvas measureText() en plus du nombre de caractères',
      'Formate le domaine et les segments de chemin en fils d’Ariane propres automatiquement',
      'Simule la mise en gras des termes de requête dans les meta descriptions pour revoir le taux de clic',
      'Copie les balises <title> et <meta name="description"> prêtes à coller en un clic',
    ],
    useCases: [
      'Peaufiner les titres de blog et de pages produits pour éviter la troncature « ... » en plein mot',
      'Rédiger des meta descriptions à fort taux de clic dans le repli mobile d’environ 120 caractères',
      'Vérifier l’impact des dates de publication sur la longueur visible de la description',
      'Revoir les snippets de pages d’accueil pendant le contrôle qualité éditorial',
    ],
    faqs: [
      {
        question: 'Pourquoi la largeur en pixels compte-t-elle plus que le nombre strict de caractères ?',
        answer:
          'Les moteurs de recherche tronquent les titres selon la largeur en pixels du conteneur (environ 580 à 600 px sur ordinateur), et non selon une longueur fixe en caractères. Les majuscules et les caractères larges comme W ou M occupent presque deux fois la largeur de i ou l.',
      },
      {
        question: 'Google peut-il quand même réécrire mon titre ou ma meta description dans les résultats réels ?',
        answer:
          'Oui. Google réécrit parfois les snippets de façon dynamique pour correspondre à des requêtes précises ou aux titres H1, même si des titres concis et précis réduisent les réécritures indésirables.',
      },
      {
        question: 'Cet outil récupère-t-il les classements réels de Google ?',
        answer:
          'Non. C’est un simulateur visuel de snippet SERP hors ligne qui fonctionne uniquement dans votre navigateur.',
      },
      {
        question: 'L’aperçu de snippet SERP est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit et fonctionne entièrement dans votre navigateur : rien de ce que vous tapez n’est envoyé ailleurs.',
      },
      {
        question: 'Quelle est la longueur de titre idéale pour les résultats de recherche Google ?',
        answer:
          'Visez moins d’environ 580 pixels sur ordinateur, ce qui représente généralement 50 à 60 caractères selon la largeur des lettres.',
      },
      {
        question: 'Comment l’aperçu de snippet SERP mesure-t-il la largeur en pixels ?',
        answer:
          'Il utilise l’API Canvas measureText() du navigateur pour calculer la largeur réelle de rendu de votre titre dans le même style de police que celui des résultats de recherche.',
      },
      {
        question: 'Pourquoi mon titre est-il coupé alors qu’il fait moins de 60 caractères ?',
        answer:
          'Les moteurs de recherche tronquent selon la largeur en pixels, et non le nombre de caractères : les lettres larges comme W et M occupent beaucoup plus d’espace que les lettres étroites comme i et l.',
      },
      {
        question: 'Quelle est la longueur idéale de meta description sur ordinateur et mobile ?',
        answer:
          'L’ordinateur affiche environ 155 à 160 caractères tandis que le mobile replie vers 120 caractères : placez donc les mots et mots-clés les plus importants en premier.',
      },
      {
        question: 'Puis-je prévisualiser les résultats de recherche sur ordinateur et mobile ?',
        answer:
          'Oui. Basculez entre les vues Ordinateur et Mobile pour voir comment le même titre et la même description s’affichent sur chaque taille d’écran.',
      },
      {
        question: 'Que fait la fonction de mise en gras des mots-clés dans l’aperçu de snippet SERP ?',
        answer:
          'Saisissez une requête de recherche cible et l’aperçu met en gras les mots correspondants dans votre titre et votre description, comme Google met en évidence les termes de requête dans les résultats réels.',
      },
      {
        question: 'L’aperçu de snippet SERP montre-t-il mon vrai classement Google ?',
        answer:
          'Non. C’est un simulateur visuel hors ligne qui montre à quoi un snippet pourrait ressembler, et non des données de classement en direct de Google.',
      },
      {
        question: 'L’aperçu de snippet SERP envoie-t-il mon titre ou mon URL quelque part ?',
        answer:
          'Non. Toute la prévisualisation et la mesure se font localement dans votre navigateur.',
      },
      {
        question: 'Comment copier le titre et la meta description après l’aperçu ?',
        answer:
          'Utilisez le bouton de copie en un clic pour récupérer les balises <title> et <meta name="description"> prêtes à coller dans votre page.',
      },
      {
        question: 'Pourquoi Google réécrit-il parfois mon titre dans les résultats réels ?',
        answer:
          'Google peut remplacer votre titre par votre H1 ou un autre texte de la page quand il estime que cela correspond mieux à une requête, même si des titres concis et précis réduisent ces réécritures.',
      },
      {
        question: 'Faut-il inclure ma marque ou le nom de mon site dans le titre ?',
        answer:
          'Souvent oui. Placez-le à la fin, après un séparateur, pour que le mot-clé principal reste en premier tout en affichant la marque dans les résultats.',
      },
      {
        question: 'Quelle est la différence entre une balise title et un titre H1 ?',
        answer:
          'La balise title apparaît dans les résultats de recherche et les onglets du navigateur, tandis que le H1 est le titre visible sur la page elle-même.',
      },
      {
        question: 'Puis-je tester rapidement plusieurs titres dans l’aperçu de snippet SERP ?',
        answer:
          'Oui. Modifiez le champ du titre et l’aperçu, la largeur en pixels et l’alerte de troncature se mettent à jour en direct pendant que vous tapez.',
      },
      {
        question: 'L’aperçu de snippet SERP tient-il compte des dates de publication ?',
        answer:
          'Oui. Ajouter une date montre comment elle raccourcit la description visible, ce qui compte pour les actualités et les billets de blog.',
      },
      {
        question: 'Que faire si ma description est tronquée sur mobile ?',
        answer:
          'Déplacez le message clé et le mot-clé cible tout au début de la description, pour que la vue mobile repliée reste compréhensible.',
      },
      {
        question: 'La vérification de largeur en pixels est-elle précise pour toutes les langues ?',
        answer:
          'Elle approxime le rendu réel des résultats à partir des polices de votre navigateur : les résultats sont donc plus précis pour les écritures latines et peuvent varier pour d’autres systèmes d’écriture.',
      },
    ],
  },
  'xml-sitemap-generator': {
    slug: 'generateur-de-sitemap-xml',
    name: 'Générateur de Sitemap XML',
    shortDescription:
      'Générez des fichiers XML Sitemaps.org valides à partir de listes d’URL, avec déduplication, <lastmod>, <changefreq> et téléchargement .xml.',
    keywords: [
      'générateur sitemap xml',
      'créateur sitemap.xml',
      'créer sitemap xml en ligne',
      'créateur sitemap seo',
      'générateur sitemap gratuit',
      'créateur sitemap xml en ligne',
      'générer sitemap.xml',
      'outil créateur sitemap',
      'générateur sitemap site web',
    ],
    seo: {
      title: 'Générateur de Sitemap XML – Fichier XML | UtilityFlow',
      description:
        'Transformez une liste d’URL canoniques en sitemap.xml valide avec déduplication, dates lastmod et indications changefreq — gratuit, dans votre navigateur.',
      primaryKeyword: 'générateur sitemap xml',
      secondaryKeywords: [
        'créateur sitemap xml',
        'créer sitemap.xml gratuit',
        'outil sitemap url canonique',
        'générateur fichier sitemap.xml',
      ],
      longTailKeywords: [
        'générer sitemap xml valide à partir d’une liste d’url hors ligne',
        'créer sitemap.xml avec balises lastmod et changefreq',
        'échapper caractères spéciaux dans les url du sitemap xml',
        'créer sitemap xml pour petit site web gratuit en ligne',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transformez n’importe quelle liste d’URL canoniques https:// en un sitemap.xml valide conforme au schéma Sitemaps 0.9 — avec filtrage des URL invalides, déduplication automatique, échappement des caractères XML et export .xml.',
    instructions: [
      {
        title: 'Collez les URL canoniques',
        description:
          'Saisissez une URL https:// (ou http://) complète par ligne dans l’éditeur ; les lignes mal formées sont signalées clairement.',
      },
      {
        title: 'Vérifiez les lignes invalides signalées',
        description:
          'Contrôlez les lignes surlignées pour corriger les fautes de frappe ou les préfixes https:// manquants avant de générer, car les URL invalides sont exclues du XML.',
      },
      {
        title: 'Configurez les balises facultatives',
        description:
          'Définissez une date <lastmod>, une indication <changefreq> et une <priority> facultatives (ou omettez les balises facultatives pour des fichiers plus propres).',
      },
      {
        title: 'Vérifiez la déduplication',
        description:
          'Confirmez le nombre de doublons affiché par l’outil pour que le sitemap final liste chaque URL canonique exactement une fois.',
      },
      {
        title: 'Prévisualisez le XML généré',
        description:
          'Inspectez la sortie XML pour confirmer que l’urlset, les entrées <loc> et les valeurs <lastmod> facultatives sont corrects.',
      },
      {
        title: 'Copiez ou téléchargez sitemap.xml',
        description:
          'Cliquez sur Copier le XML ou Télécharger .xml pour le placer directement dans le dossier /public/ de votre site.',
      },
    ],
    examples: [
      {
        title: 'Générer un sitemap pour un site statique sur Cloudflare Pages',
        input: '5 URL canoniques · lastmod : 2026-11-12 · Déduplication : activée',
        output: '<?xml version="1.0"?> valide <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: 'Échappe proprement les entités XML (&, <, >, guillemets) dans chaque élément <loc>.',
      },
      {
        title: 'Nettoyer une liste d’URL après une migration de site',
        input: 'Liste de 120 URL avec 15 doublons et 3 lignes invalides',
        output: 'Fichier sitemap.xml propre de 102 URL uniques, sans doublons ni lignes invalides',
        explanation: 'La déduplication et le filtrage garantissent un fichier valide dès la première génération.',
      },
    ],
    benefits: [
      'Valide chaque ligne avec l’analyse d’URL native du navigateur avant d’émettre le XML',
      'Échappe automatiquement les & et les caractères spéciaux des requêtes dans les URL <loc>',
      'Déduplique les URL identiques pour éviter les sitemaps surchargés',
      'Permet d’omettre proprement <priority> et <changefreq> quand vous le souhaitez (Google les ignore)',
    ],
    useCases: [
      'Créer des sitemaps initiaux pour des pages d’accueil statiques ou des microsites de documentation',
      'Préparer des fichiers de soumission d’URL propres après des migrations de site',
      'Générer des sitemaps supplémentaires sans image ni actualités pour des sites de petites entreprises',
      'Exporter du XML formaté directement pour le déployer avec robots.txt',
    ],
    faqs: [
      {
        question: 'Faut-il inclure des URL non canoniques, redirigées ou noindex dans un sitemap ?',
        answer:
          'Non. Les sitemaps doivent lister uniquement les URL canoniques qui renvoient HTTP 200 et que vous souhaitez voir indexées par les moteurs de recherche.',
      },
      {
        question: 'Google utilise-t-il encore <priority> et <changefreq> ?',
        answer:
          'Google Search ignore les balises <priority> et <changefreq> et se concentre surtout sur <loc> et sur des dates <lastmod> précises quand elles sont mises à jour de façon significative.',
      },
      {
        question: 'Ce générateur explore-t-il automatiquement mon site web en ligne ?',
        answer:
          'Non. Les pages côté client ne peuvent pas explorer des sites web arbitraires d’autres origines à cause de la sécurité CORS du navigateur ; collez ici votre liste de routes exportée pour compiler du XML valide instantanément.',
      },
      {
        question: 'Le générateur de sitemap XML est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit et fonctionne entièrement dans votre navigateur : votre liste d’URL n’est jamais envoyée à un serveur.',
      },
      {
        question: 'Combien d’URL puis-je inclure dans un seul sitemap ?',
        answer:
          'Le protocole Sitemaps autorise jusqu’à 50 000 URL ou 50 Mo non compressés par fichier : les grands sites doivent donc se diviser en plusieurs sitemaps ou utiliser un index de sitemaps.',
      },
      {
        question: 'Quelle est la différence entre un sitemap et robots.txt ?',
        answer:
          'Un sitemap liste les URL que vous voulez que les moteurs de recherche découvrent, tandis que robots.txt donne aux robots des règles sur les chemins qu’ils peuvent ou non visiter.',
      },
      {
        question: 'Où dois-je envoyer le fichier sitemap.xml ?',
        answer:
          'Placez-le à la racine de votre site, par exemple https://example.com/sitemap.xml, pour que les robots puissent le trouver à l’emplacement standard.',
      },
      {
        question: 'Faut-il soumettre mon sitemap à Google ?',
        answer:
          'C’est recommandé. Soumettez-le dans Google Search Console et référencez-le aussi avec une ligne Sitemap: dans robots.txt pour les autres robots.',
      },
      {
        question: 'Quels formats d’URL le générateur de sitemap XML accepte-t-il ?',
        answer:
          'Saisissez une URL https:// ou http:// complète par ligne, domaine inclus, et l’outil signale toute ligne qui n’est pas une URL valide.',
      },
      {
        question: 'Que deviennent les URL en double dans mon sitemap ?',
        answer:
          'Les doublons sont supprimés automatiquement, pour que le sitemap final contienne chaque URL canonique exactement une fois.',
      },
      {
        question: 'Que deviennent les URL invalides ou mal formées dans le générateur de sitemap XML ?',
        answer:
          'Les lignes invalides sont signalées clairement et exclues du XML, pour qu’une faute de frappe sur une ligne ne casse jamais tout le fichier.',
      },
      {
        question: 'Comment le générateur de sitemap XML gère-t-il les caractères spéciaux dans les URL ?',
        answer:
          'Il échappe en XML les & et autres caractères spéciaux dans les éléments <loc>, pour que les chaînes de requête et les chemins encodés restent valides.',
      },
      {
        question: 'Faut-il inclure les URL d’images ou de vidéos dans un sitemap classique ?',
        answer:
          'Un sitemap standard liste uniquement les URL de pages. Les URL d’images et de vidéos nécessitent leurs propres extensions de sitemap si vous voulez les indexer séparément.',
      },
      {
        question: 'Faut-il lister les URL paginées ou filtrées dans mon sitemap ?',
        answer:
          'Non. Listez uniquement les pages canoniques et indexables, et excluez la pagination, les paramètres de tri et les pages de résultats de recherche internes.',
      },
      {
        question: 'Qu’est-ce que <lastmod> et faut-il le définir dans mon sitemap ?',
        answer:
          'Il enregistre la date de dernière modification d’une page. Définissez-le uniquement quand la date est exacte, car Google l’utilise pour juger la fraîcheur d’une page.',
      },
      {
        question: 'Le générateur de sitemap XML fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Il fonctionne entièrement dans votre navigateur sans envoi, vous pouvez donc créer des sitemaps sans connexion Internet une fois la page chargée.',
      },
      {
        question: 'Puis-je régénérer mon sitemap après avoir ajouté de nouvelles pages ?',
        answer:
          'Oui. Collez la liste d’URL mise à jour, téléchargez un nouveau sitemap.xml, puis renvoyez-le à la racine de votre site.',
      },
      {
        question: 'Qu’est-ce qu’un fichier d’index de sitemap ?',
        answer:
          'C’est un fichier qui liste plusieurs fichiers sitemap, utilisé par les grands sites pour organiser des milliers d’URL par sections ou par langues.',
      },
      {
        question: 'Avoir un sitemap garantit-il que Google indexera mes pages ?',
        answer:
          'Non. Un sitemap aide les moteurs de recherche à découvrir les URL, mais l’indexation dépend toujours de la qualité des pages, des liens et du budget d’exploration.',
      },
      {
        question: 'Puis-je utiliser le générateur de sitemap XML pour un site WordPress ou Shopify ?',
        answer:
          'Oui. Exportez ou copiez votre liste d’URL canoniques depuis n’importe quelle plateforme, collez-la ici, et l’outil construit un sitemap.xml standard.',
      },
    ],
  },
  'robots-txt-generator': {
    slug: 'generateur-de-robots-txt',
    name: 'Générateur de Robots.txt',
    shortDescription:
      'Créez des règles robots.txt valides regroupées par User-agent, avec chemins Allow/Disallow, Crawl-delay et directives Sitemap.',
    keywords: [
      'générateur robots.txt',
      'créer robots txt',
      'créateur allow disallow robots',
      'générateur directive sitemap',
      'créateur robots txt en ligne',
      'générateur fichier robots.txt',
      'bloquer robots recherche',
      'allow disallow robots txt',
      'vérificateur robots.txt',
    ],
    seo: {
      title: 'Générateur de Robots.txt – Règles de Crawl | UtilityFlow',
      description:
        'Créez un robots.txt valide avec groupes User-agent, règles Allow et Disallow, crawl-delay et liens sitemap grâce à des modèles de départ — gratuit, en ligne.',
      primaryKeyword: 'générateur robots.txt',
      secondaryKeywords: [
        'créateur robots txt',
        'bloquer chemins robots',
        'robots.txt wordpress et spa',
        'créateur fichier robots.txt',
      ],
      longTailKeywords: [
        'générer robots.txt propre pour react vite et cloudflare pages',
        'ajouter plusieurs directives sitemap au fichier robots.txt',
        'bloquer environnement test des robots de recherche robots.txt',
        'créer robots.txt pour bloquer robots ia du site web',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Créez des directives robots.txt propres et groupées à partir de modèles de départ pour sites ouverts, applications web SaaS, WordPress ou verrouillage de test — avec des lignes User-agent personnalisées, Allow/Disallow, Crawl-delay et déclarations Sitemap:.',
    instructions: [
      {
        title: 'Choisissez un modèle de départ ou modifiez les règles',
        description:
          'Cliquez sur Tout autoriser, Application Web / SaaS standard, WordPress propre ou Test (tout bloquer) pour remplir les règles courantes.',
      },
      {
        title: 'Personnalisez les User-agents et les chemins',
        description:
          'Ajoutez des chemins Allow ou Disallow pour * ou pour des robots précis comme Googlebot, Bingbot ou GPTBot.',
      },
      {
        title: 'Définissez un Crawl-delay si nécessaire',
        description:
          'Ajoutez une valeur Crawl-delay pour les robots qui la respectent, comme Bingbot, afin de ralentir les requêtes sur un petit serveur partagé.',
      },
      {
        title: 'Joignez les URL de sitemap',
        description:
          'Saisissez l’URL complète de votre sitemap XML pour que les robots puissent le découvrir depuis robots.txt, en ajoutant plusieurs lignes si vous utilisez plusieurs sitemaps.',
      },
      {
        title: 'Vérifiez la sortie groupée',
        description:
          'Vérifiez que chaque bloc User-agent est groupé correctement et qu’aucune règle Disallow ne bloque accidentellement le CSS, le JavaScript ou les pages publiques.',
      },
      {
        title: 'Copiez, téléchargez et testez',
        description:
          'Copiez ou téléchargez robots.txt, placez-le à la racine de votre domaine et vérifiez-le avec le testeur robots.txt de Google Search Console.',
      },
    ],
    examples: [
      {
        title: 'Application web SaaS bloquant /api/ et /admin/',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Fichier robots.txt groupé se terminant par Sitemap: https://example.com/sitemap.xml',
        explanation: 'Groupe proprement les User-agents correspondants dans des blocs uniques.',
      },
      {
        title: 'Verrouiller un environnement de test avant le lancement',
        input: 'Modèle : Test (tout bloquer) · Domaine : staging.example.com',
        output: 'User-agent: *\nDisallow: /',
        explanation: 'Une seule règle Disallow: / empêche tous les robots d’explorer le site de test.',
      },
    ],
    benefits: [
      'Groupe automatiquement les règles par blocs User-agent correspondants selon les bonnes pratiques RFC 9309',
      'Inclut des modèles de départ vérifiés pour éviter de bloquer accidentellement les ressources CSS/JS',
      'Prend en charge plusieurs déclarations Sitemap: pour les index de sitemaps ou les fichiers localisés',
      'Le téléchargement en un clic produit un fichier robots.txt prêt à déployer',
    ],
    useCases: [
      'Empêcher les robots de gaspiller leur budget sur /api/, /admin/ ou les URL de recherche internes',
      'Annoncer les emplacements des sitemaps XML à la racine du domaine',
      'Ajouter des règles spécifiques pour des robots spécialisés comme AdsBot ou les scrapers IA',
      'Configurer des environnements de test avant le lancement DNS',
    ],
    faqs: [
      {
        question: 'Disallow: /admin/ dans robots.txt empêche-t-il une page d’apparaître dans Google ou protège-t-il des secrets ?',
        answer:
          'Distinction importante : robots.txt arrête l’exploration, pas forcément l’indexation si d’autres sites lient directement l’URL, et robots.txt est lisible publiquement. Utilisez l’authentification pour les routes sensibles et <meta name="robots" content="noindex"> pour empêcher l’indexation.',
      },
      {
        question: 'Où robots.txt doit-il être hébergé ?',
        answer:
          'Il doit être servi au chemin racine exact de votre hôte (https://votredomaine.com/robots.txt), en renvoyant HTTP 200.',
      },
      {
        question: 'Google respecte-t-il Crawl-delay ?',
        answer:
          'Googlebot ignore Crawl-delay (utilisez les paramètres de Search Console si besoin), tandis que Bing et d’autres robots respectent encore les intervalles numériques de Crawl-delay.',
      },
      {
        question: 'Le générateur de robots.txt est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit et fonctionne entièrement dans votre navigateur : vos règles de site ne sont jamais envoyées ailleurs.',
      },
      {
        question: 'Quelle est la différence entre robots.txt et une balise meta robots noindex ?',
        answer:
          'Robots.txt dit aux robots de ne pas visiter un chemin, tandis qu’une balise noindex dit aux moteurs de recherche de ne pas afficher une page explorée dans les résultats. Ils résolvent des problèmes différents.',
      },
      {
        question: 'Robots.txt peut-il bloquer les robots IA comme GPTBot ?',
        answer:
          'Oui. Ajoutez un groupe User-agent: GPTBot avec Disallow: / pour tenir ce robot à l’écart, et répétez le schéma pour les autres robots IA que vous voulez bloquer.',
      },
      {
        question: 'Que signifie « User-agent: * » dans robots.txt ?',
        answer:
          'Cela signifie que les règles de ce groupe s’appliquent à tous les robots qui visitent votre site, sauf si un groupe User-agent plus précis les remplace.',
      },
      {
        question: 'Quelle est la différence entre Allow et Disallow dans robots.txt ?',
        answer:
          'Allow autorise l’exploration d’un chemin et Disallow la bloque. Quand les règles se chevauchent, la règle correspondante la plus précise l’emporte.',
      },
      {
        question: 'Puis-je bloquer une seule page ou un seul dossier avec le générateur de robots.txt ?',
        answer:
          'Oui. Ajoutez Disallow: /page/ pour une page ou Disallow: /dossier/ pour bloquer tout un répertoire et son contenu.',
      },
      {
        question: 'Faut-il bloquer mes fichiers CSS et JavaScript dans robots.txt ?',
        answer:
          'Non. Les moteurs de recherche ont besoin de votre CSS et de votre JavaScript pour afficher les pages correctement, et les bloquer peut nuire au classement.',
      },
      {
        question: 'Quels modèles de départ le générateur de robots.txt inclut-il ?',
        answer:
          'Il inclut Tout autoriser, Application Web / SaaS standard, WordPress propre et Test (tout bloquer), pour partir d’un modèle éprouvé au lieu d’une page blanche.',
      },
      {
        question: 'Comment ajouter mon sitemap à robots.txt ?',
        answer:
          'Ajoutez une ligne comme Sitemap: https://example.com/sitemap.xml à la fin du fichier, pour que les robots trouvent votre sitemap depuis la racine.',
      },
      {
        question: 'Puis-je avoir plusieurs lignes Sitemap dans un seul fichier robots.txt ?',
        answer:
          'Oui. Vous pouvez lister plusieurs URL de sitemap, ce qui est utile pour les index de sitemaps ou les sitemaps séparés par langue ou par section.',
      },
      {
        question: 'Le générateur de robots.txt envoie-t-il mes règles quelque part ?',
        answer:
          'Non. Tout fonctionne localement dans votre navigateur et le fichier est généré sur votre appareil.',
      },
      {
        question: 'Comment tester mon robots.txt après sa publication ?',
        answer:
          'Envoyez-le à la racine de votre domaine, puis vérifiez-le avec le testeur robots.txt de Google Search Console ou en le récupérant comme Googlebot.',
      },
      {
        question: 'Que se passe-t-il si je bloque accidentellement tout mon site dans robots.txt ?',
        answer:
          'Les moteurs de recherche cesseront d’explorer vos pages. Supprimez la ligne Disallow: /, renvoyez le fichier et demandez une nouvelle exploration dans Search Console.',
      },
      {
        question: 'Robots.txt cache-t-il mes pages d’administration aux pirates ?',
        answer:
          'Non. Robots.txt est lisible publiquement : n’importe qui peut voir quels chemins vous avez bloqués. Protégez les pages sensibles avec un mot de passe ou une authentification.',
      },
      {
        question: 'Qu’est-ce que Crawl-delay et faut-il l’utiliser dans robots.txt ?',
        answer:
          'Crawl-delay demande aux robots d’attendre un nombre de secondes entre les requêtes. Googlebot l’ignore, mais Bing et certains autres robots le respectent.',
      },
      {
        question: 'Puis-je écrire des règles robots.txt différentes pour Googlebot et Bingbot ?',
        answer:
          'Oui. Créez un groupe User-agent distinct pour chaque robot, avec ses propres lignes Allow et Disallow.',
      },
      {
        question: 'Où envoyer robots.txt sur Cloudflare Pages ou un site statique ?',
        answer:
          'Placez le fichier dans le dossier public/ ou à la racine de votre sortie de build, pour qu’il soit servi à https://votredomaine.com/robots.txt.',
      },
    ],
  },
  'schema-markup-generator': {
    slug: 'generateur-de-donnees-structurees',
    name: 'Générateur de Schema Markup (JSON-LD)',
    shortDescription:
      'Générez des scripts JSON-LD Schema.org valides pour les balisages Article, FAQPage, Product, Organization et BreadcrumbList.',
    keywords: [
      'générateur schema markup',
      'générateur json ld',
      'générateur schema faq',
      'créateur données structurées',
      'générateur données structurées',
      'outil json-ld schema.org',
      'générateur schema rich snippet',
      'générateur schema faqpage',
      'schema markup produit',
    ],
    seo: {
      title: 'Générateur de Schema – JSON-LD pour SEO | UtilityFlow',
      description:
        'Créez du JSON-LD Schema.org valide pour Article, FAQPage, Product, Organization et BreadcrumbList, avec échappement HTML sûr, copie de script et export .jsonld.',
      primaryKeyword: 'générateur de schema json-ld',
      secondaryKeywords: [
        'générateur json-ld en ligne',
        'outil données structurées faqpage',
        'créateur schema produit',
        'outil balisage données structurées',
      ],
      longTailKeywords: [
        'générer balise script json-ld schema.org valide gratuit',
        'créer données structurées faqpage et breadcrumb dynamiques',
        'échapper json-ld en sécurité pour balises script html',
        'créer balisage schema json-ld pour article et produit',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Créez des blocs de données structurées JSON-LD Schema.org propres pour Article, FAQPage, Product, Organization et BreadcrumbList — avec des constructeurs de lignes dynamiques, un échappement HTML sûr des < dans les balises script et un export .jsonld.',
    instructions: [
      {
        title: 'Choisissez un type Schema.org',
        description:
          'Sélectionnez Article, FAQPage, Product, Organization ou BreadcrumbList dans le sélecteur supérieur.',
      },
      {
        title: 'Remplissez les propriétés de l’entité',
        description:
          'Saisissez les titres, les paires question-réponse, les offres de prix, les détails de l’organisation ou les fils d’Ariane.',
      },
      {
        title: 'Ajoutez des lignes supplémentaires pour les listes',
        description:
          'Ajoutez des paires question-réponse supplémentaires pour FAQPage ou des éléments de parcours pour BreadcrumbList, et supprimez les lignes dont vous n’avez pas besoin.',
      },
      {
        title: 'Vérifiez le JSON-LD généré',
        description:
          'Contrôlez la sortie JSON en direct pour vérifier les noms et valeurs de champs, et confirmez que les propriétés facultatives vides sont omises automatiquement.',
      },
      {
        title: 'Copiez la balise <script> ou exportez en .jsonld',
        description:
          'Copiez le bloc complet <script type="application/ld+json"> dans le <head> de votre page ou téléchargez le fichier .jsonld.',
      },
      {
        title: 'Validez avant de publier',
        description:
          'Collez la sortie dans le test de résultats enrichis ou le validateur Schema pour détecter les erreurs de syntaxe, car les moteurs de recherche ignorent le JSON-LD invalide.',
      },
    ],
    examples: [
      {
        title: 'Créer des données structurées FAQPage dynamiques',
        input: '2 paires Question/Réponse sous le schéma FAQPage',
        output: 'Bloc de script JSON-LD FAQPage valide avec @context https://schema.org',
        explanation: 'Utilise une sérialisation JSON sûre avec l’échappement \\u003c pour éviter la fermeture prématurée de </script>.',
      },
      {
        title: 'Ajouter le balisage Product à une page boutique',
        input: 'Nom du produit, prix 29,99 €, devise EUR, disponibilité En stock',
        output: 'Bloc JSON-LD Product valide avec offre de prix et disponibilité',
        explanation: 'Les champs prix, devise et disponibilité sont les champs principaux utilisés pour les résultats shopping.',
      },
    ],
    benefits: [
      'Prend en charge 5 des types de données structurées Schema.org les plus impactants',
      'Échappe proprement les caractères « < » dans le JSON-LD pour éviter les cassures d’injection de script HTML',
      'Omet automatiquement les propriétés facultatives vides pour une syntaxe propre',
      'S’associe naturellement au formateur et validateur JSON pour les extensions personnalisées',
    ],
    useCases: [
      'Ajouter les métadonnées d’auteur et de publication d’article aux modèles de blog éditorial',
      'Structurer le prix, la devise et la disponibilité des produits pour les flux marchands',
      'Déclarer l’identité de marque et l’URL du logo d’une organisation sur tout le site',
      'Intégrer des parcours hiérarchiques BreadcrumbList sur les pages de catégories et d’outils',
    ],
    faqs: [
      {
        question: 'Où placer les données structurées JSON-LD sur une page web ?',
        answer:
          'Vous pouvez placer <script type="application/ld+json"> dans <head> ou dans <body> ; le placer proprement dans <head> est la pratique standard.',
      },
      {
        question: 'Pourquoi le générateur échappe-t-il « < » en « \\u003c » dans la sortie JSON ?',
        answer:
          'Si la réponse d’une FAQ contient « </script> », les navigateurs ferment le bloc de script HTML prématurément, sauf si « < » est échappé en « \\u003c », ce qui reste du JSON 100 % valide.',
      },
      {
        question: 'Ajouter du balisage Schema garantit-il des rich snippets dans Google ?',
        answer:
          'Non. Des données structurées valides rendent les pages éligibles aux fonctionnalités de recherche enrichies, mais les moteurs de recherche décident de l’éligibilité d’affichage selon la qualité globale de la page et leurs consignes.',
      },
      {
        question: 'Le générateur de Schema Markup est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit et fonctionne entièrement dans votre navigateur : votre contenu n’est jamais envoyé à un serveur.',
      },
      {
        question: 'Quels types Schema.org le générateur de Schema Markup prend-il en charge ?',
        answer:
          'Il prend en charge Article, FAQPage, Product, Organization et BreadcrumbList, qui couvrent les cas d’usage de résultats enrichis les plus courants.',
      },
      {
        question: 'Quelle est la différence entre JSON-LD et Microdata ?',
        answer:
          'JSON-LD est un bloc <script> distinct que vous collez dans votre page, tandis que Microdata ajoute des attributs directement à vos éléments HTML visibles.',
      },
      {
        question: 'Comment ajouter le JSON-LD généré à mon site web ?',
        answer:
          'Copiez le bloc complet <script type="application/ld+json"> et collez-le dans le <head> de la page correspondante.',
      },
      {
        question: 'Comment tester mon balisage schema après l’avoir généré ?',
        answer:
          'Collez l’URL de la page ou le code dans le test de résultats enrichis ou le validateur Schema.org pour vérifier les erreurs et les enrichissements éligibles.',
      },
      {
        question: 'Puis-je combiner plusieurs types de schema sur une seule page ?',
        answer:
          'Oui. Une même page peut porter ensemble des balisages Article, BreadcrumbList et FAQPage sous forme de blocs JSON-LD distincts.',
      },
      {
        question: 'Qu’est-ce que le schéma FAQPage et quand l’utiliser ?',
        answer:
          'Utilisez-le sur les pages qui affichent une liste visible de questions et réponses, comme les pages d’aide, pour que les moteurs de recherche puissent les afficher sous forme de résultats extensibles.',
      },
      {
        question: 'Quels champs de schéma Product le générateur prend-il en charge ?',
        answer:
          'Il couvre le nom du produit, le prix, la devise et la disponibilité, qui sont les champs principaux utilisés par les moteurs de recherche pour les résultats shopping.',
      },
      {
        question: 'À quoi sert le schéma BreadcrumbList ?',
        answer:
          'Il décrit la hiérarchie de navigation d’une page, comme Accueil > Guides > Sujet, pour que les moteurs de recherche puissent afficher des fils d’Ariane dans les résultats.',
      },
      {
        question: 'À quoi sert le schéma Organization ?',
        answer:
          'Il déclare l’identité de votre marque, notamment le nom, le logo et le site web officiel, pour que les moteurs de recherche puissent afficher un panneau de connaissances cohérent.',
      },
      {
        question: 'Le générateur de Schema Markup envoie-t-il mon contenu quelque part ?',
        answer:
          'Non. Tout le balisage est généré localement dans votre navigateur et rien de ce que vous saisissez ne quitte votre appareil.',
      },
      {
        question: 'Puis-je exporter le schéma sous forme de fichier .jsonld ?',
        answer:
          'Oui. Le bouton d’exportation télécharge un fichier .jsonld autonome que vous pouvez stocker, versionner ou transmettre à un développeur.',
      },
      {
        question: 'Que se passe-t-il si mon JSON-LD contient une erreur de syntaxe ?',
        answer:
          'Tout le bloc peut être ignoré par les moteurs de recherche : validez donc toujours la sortie avec le test de résultats enrichis avant de publier.',
      },
      {
        question: 'Puis-je utiliser le générateur de Schema Markup pour une page de recette ou d’événement ?',
        answer:
          'Le générateur ne couvre que cinq types : les pages Recette et Événement nécessitent du JSON-LD écrit à la main, que vous pouvez valider avec les mêmes outils.',
      },
      {
        question: 'Les réponses de FAQ dans le schéma doivent-elles correspondre au texte visible de la page ?',
        answer:
          'Oui. Google exige que les données structurées correspondent au contenu que les utilisateurs peuvent réellement voir sur la page, sinon le balisage peut être ignoré.',
      },
      {
        question: 'Puis-je modifier le JSON-LD généré à la main ?',
        answer:
          'Oui. C’est du JSON standard : vous pouvez ajouter ou modifier des champs dans n’importe quel éditeur et revalider le résultat avant de publier.',
      },
      {
        question: 'Le générateur de Schema Markup fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Il fonctionne entièrement dans votre navigateur sans envoi : vous pouvez créer du balisage schema sans connexion Internet une fois la page chargée.',
      },
    ],
  },
  'url-slug-generator': {
    slug: 'generateur-de-slugs-url',
    name: 'Générateur de Slug URL et Optimiseur de Chemin SEO',
    shortDescription:
      'Convertissez les titres d’articles en slugs d’URL SEO propres, avec translittération des accents, par lots et filtrage des mots vides.',
    keywords: [
      'générateur slug url',
      'créateur slug seo',
      'générateur permalien propre',
      'convertisseur slug par lots',
      'générateur url seo conviviale',
      'convertisseur titre blog en slug',
      'créateur slug permalien',
      'suppresseur mots vides url',
      'convertisseur accents ascii slug',
    ],
    seo: {
      title: 'Générateur de Slug URL – Permaliens SEO | UtilityFlow',
      description:
        'Transformez les titres d’articles en slugs SEO minuscules par lots, avec translittération des accents, suppression des mots vides et troncature propre.',
      primaryKeyword: 'générateur slug url',
      secondaryKeywords: [
        'générateur url seo conviviale',
        'titre vers slug par lots',
        'nettoyeur slug mots vides',
        'créateur slug permalien',
      ],
      longTailKeywords: [
        'convertir titres blog en slugs url seo propres par lots',
        'translittérer caractères accentués en slugs url ascii',
        'tronquer longs slugs url sur limites de mots propres',
        'générer permaliens propres sans mots vides en ligne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Standardisez des permaliens lisibles avec traits d’union pour des articles uniques ou des calendriers de contenu entiers. Translitère proprement les signes diacritiques (Café → cafe), supprime éventuellement les mots vides, impose une longueur maximale propre sans coupure en plein mot et prévisualise les URL complètes.',
    instructions: [
      {
        title: 'Saisissez les titres ou noms de pages',
        description:
          'Collez un ou plusieurs titres (un par ligne) dans la zone de texte Titres de pages.',
      },
      {
        title: 'Configurez les règles de formatage des slugs',
        description:
          'Saisissez votre domaine de base, choisissez le trait d’union (-) ou le tiret bas (_), définissez la longueur maximale du slug et activez les options de mots vides ou de barre oblique finale.',
      },
      {
        title: 'Prévisualisez les slugs générés',
        description:
          'Parcourez le tableau de résultats pour vérifier la translittération des accents, la suppression des mots vides et l’endroit où les longs slugs ont été coupés aux limites de mots.',
      },
      {
        title: 'Ajustez la longueur ou les paramètres de mots vides',
        description:
          'Si un slug perd son sens ou se coupe maladroitement, augmentez la longueur maximale du slug ou désactivez la suppression des mots vides, puis régénérez.',
      },
      {
        title: 'Copiez les slugs individuellement ou par lots',
        description:
          'Copiez les slugs un par un depuis le tableau ou exportez tous les slugs ou toutes les URL complètes en un clic.',
      },
      {
        title: 'Ne renommez jamais un slug en ligne sans redirection',
        description:
          'Si vous modifiez le slug d’une page déjà indexée, ajoutez une redirection 301 de l’ancienne URL pour que les backlinks et le classement soient transférés vers la nouvelle.',
      },
    ],
    examples: [
      {
        title: 'Nettoyer les mots vides et les signes diacritiques d’un titre',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'Translitère é → e, développe & en and, supprime « in » et joint les jetons minuscules avec des traits d’union.',
      },
      {
        title: 'Convertir tout un calendrier éditorial par lots',
        input: '25 titres d’articles de blog, un par ligne',
        output: 'Tableau de 25 slugs propres prêts à copier, avec aperçu des URL complètes',
        explanation: 'Le traitement par lots convertit des dizaines de titres en une seule fois, sans ressaisie.',
      },
    ],
    benefits: [
      'Traite par lots des dizaines de titres de calendrier éditorial simultanément',
      'Tronque les slugs trop longs aux limites de traits d’union et de mots plutôt qu’en plein mot',
      'Préserve le sens principal en gardant intacts les slugs courts même avec la suppression des mots vides activée',
      'Suit les recommandations de Google sur la structure des URL (traits d’union ASCII UTF-8 plutôt que tirets bas)',
    ],
    useCases: [
      'Planifier des structures d’URL propres avant de lancer des catégories de blog ou des collections CMS',
      'Nettoyer les titres de produits internationaux accentués en slugs ASCII sûrs',
      'Auditer les permaliens CMS excessivement longs pour les réduire à des chemins nets de 4 à 6 mots',
      'Préparer des listes de cibles canoniques à alimenter dans le générateur de sitemap XML',
    ],
    faqs: [
      {
        question: 'Les slugs d’URL SEO doivent-ils utiliser des traits d’union (-) ou des tirets bas (_) ?',
        answer:
          'Google recommande les traits d’union (-) comme séparateurs de mots dans les URL, car les analyseurs de recherche traitent les traits d’union comme des espaces, tandis que les tirets bas joignent les mots adjacents.',
      },
      {
        question: 'Supprimer les mots vides nuit-il à la lisibilité ?',
        answer:
          'Supprimer les petits mots de remplissage comme « a », « the » ou « of » rend les très longs slugs de blog plus percutants. Gardez les mots vides si leur suppression modifie le sens principal (par exemple « how to »).',
      },
      {
        question: 'Faut-il modifier les slugs des URL en ligne déjà indexées ?',
        answer:
          'Seulement si vous déployez des redirections 301 permanentes de l’ancien slug vers le nouveau (avec notre générateur Canonical et de redirections 301), pour que les backlinks et le classement soient transférés proprement.',
      },
      {
        question: 'Le générateur de slug URL est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription et sans limite sur le nombre de titres que vous convertissez en une session.',
      },
      {
        question: 'Puis-je générer des slugs pour de nombreux titres à la fois ?',
        answer:
          'Oui. Collez un titre par ligne et l’outil convertit tout le lot dans un seul tableau : vous pouvez ainsi créer les slugs de tout un calendrier éditorial d’un coup.',
      },
      {
        question: 'Comment les caractères accentués sont-ils traités dans les slugs ?',
        answer:
          'Les signes diacritiques sont translittérés en ASCII simple — é devient e, ü devient u, ñ devient n — pour que les URL restent lisibles et sûres dans tous les navigateurs et serveurs.',
      },
      {
        question: 'Que deviennent les symboles comme & et @ dans un slug ?',
        answer:
          'L’esperluette (&) est développée en « and » et la plupart des autres signes de ponctuation sont supprimés, car les symboles dans les URL peuvent casser les liens ou paraître désordonnés une fois partagés.',
      },
      {
        question: 'Que sont les mots vides et pourquoi les supprimer ?',
        answer:
          'Les mots vides sont de courts mots de remplissage comme « a », « the », « of » et « in ». Les supprimer raccourcit les longs slugs de blog sans changer le sens principal.',
      },
      {
        question: 'Puis-je conserver les mots vides dans mes slugs ?',
        answer:
          'Oui. Désactivez le basculement de suppression des mots vides et le générateur conserve chaque mot de votre titre, y compris les courts mots de remplissage.',
      },
      {
        question: 'Quelle est la longueur idéale d’un slug SEO ?',
        answer:
          'Visez 3 à 6 mots significatifs. Utilisez le réglage de longueur maximale du slug pour garder les slugs courts, et l’outil coupe aux limites de mots pour ne jamais diviser un mot.',
      },
      {
        question: 'Les slugs d’URL doivent-ils être en minuscules ?',
        answer:
          'Oui. Les slugs minuscules évitent les problèmes de contenu dupliqué, car certains serveurs traitent /Blog-Post et /blog-post comme des pages différentes.',
      },
      {
        question: 'Puis-je utiliser des tirets bas au lieu des traits d’union dans les slugs ?',
        answer:
          'Vous pouvez choisir les tirets bas dans les paramètres, mais les traits d’union sont recommandés car les moteurs de recherche les traitent comme des séparateurs de mots et les tirets bas comme des jointures.',
      },
      {
        question: 'Mes titres sont-ils envoyés quelque part ?',
        answer:
          'Non. Le générateur de slug URL fonctionne entièrement dans votre navigateur : vos titres ne quittent jamais votre appareil.',
      },
      {
        question: 'Comment prévisualiser l’URL complète avec mon domaine ?',
        answer:
          'Saisissez votre domaine dans le champ Domaine de base et le tableau de résultats affiche chaque slug sous forme d’URL complète que vous pouvez copier.',
      },
      {
        question: 'Mes slugs doivent-ils se terminer par une barre oblique ?',
        answer:
          'C’est facultatif, mais soyez cohérent : utilisez le basculement de barre oblique finale pour correspondre au style d’URL déjà utilisé par votre site, afin de ne pas créer de versions en double.',
      },
      {
        question: 'Puis-je utiliser cet outil pour les pages produits et catégories ?',
        answer:
          'Oui. Il fonctionne pour n’importe quel nom de page — titres de produits, noms de catégories, pages d’accueil et titres de documentation se convertissent de la même façon.',
      },
      {
        question: 'Pourquoi mon slug a-t-il été coupé plus court que la longueur maximale définie ?',
        answer:
          'L’outil tronque au trait d’union le plus proche avant la limite au lieu de couper en plein mot : un slug peut donc finir quelques caractères plus court que le maximum.',
      },
      {
        question: 'Que deviennent les titres écrits dans des écritures non latines ?',
        answer:
          'Seuls les signes diacritiques latins sont translittérés ; les caractères d’autres écritures sont supprimés, donc un titre écrit entièrement dans une autre écriture peut produire un slug très court. Ajoutez une version latine des mots clés pour le meilleur résultat.',
      },
      {
        question: 'Puis-je exporter tous mes slugs à la fois ?',
        answer:
          'Oui. Utilisez les boutons de copie en masse pour copier chaque slug, ou chaque URL complète, en un clic au lieu de les copier un par un.',
      },
      {
        question: 'Quelle est la différence entre un slug et un permalien ?',
        answer:
          'Le slug est la dernière partie lisible d’une URL, comme « best-cafe-tools », tandis que le permalien est l’URL complète, domaine et dossiers inclus.',
      },
    ],
  },
  'keyword-density-checker': {
    slug: 'verificateur-de-densite-de-mots-cles',
    name: 'Vérificateur de Densité de Mots-Clés et Analyseur de Contenu',
    shortDescription:
      'Auditez le nombre de mots, la densité du mot-clé cible, le temps de lecture et la fréquence des expressions de 1, 2 et 3 mots, localement.',
    keywords: [
      'vérificateur densité mots-clés',
      'analyseur contenu seo',
      'analyseur fréquence n-grammes',
      'audit répétition expressions',
      'vérifier densité mot-clé en ligne',
      'outil fréquence mots-clés contenu',
      'analyseur texte seo gratuit',
      'calculateur densité mot-clé cible',
      'analyseur bigrammes trigrammes',
    ],
    seo: {
      title: 'Vérificateur de Densité de Mots-Clés | UtilityFlow',
      description:
        'Collez un brouillon d’article ou du HTML pour vérifier nombre de mots, temps de lecture, densité du mot-clé cible et expressions fréquentes — en privé.',
      primaryKeyword: 'vérificateur densité mots-clés',
      secondaryKeywords: [
        'analyseur fréquence copie seo',
        'compteur n-grammes 2 et 3 mots',
        'vérifier répétition mot-clé en ligne',
        'calculateur densité mot-clé cible',
      ],
      longTailKeywords: [
        'analyser html collé pour densité mots-clés sans envoi',
        'trouver expressions de 2 et 3 mots surutilisées dans brouillon',
        'vérifier fréquence mot-clé cible proprement dans navigateur',
        'comment vérifier densité mots-clés d’un brouillon en ligne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Inspectez les brouillons de contenu ou le HTML collé pour la profondeur du vocabulaire, le temps de lecture, les occurrences exactes de l’expression cible et les fréquences des n-grammes de 1, 2 et 3 mots — conçu pour repérer les répétitions accidentelles plutôt que pour courir après des quotas de mots-clés dépassés.',
    instructions: [
      {
        title: 'Collez le brouillon d’article ou le HTML',
        description:
          'Insérez du texte brut ou du HTML brut (gardez Supprimer les balises HTML activé pour ignorer les balises et les blocs script/style).',
      },
      {
        title: 'Saisissez l’expression cible et la taille des n-grammes',
        description:
          'Précisez un mot-clé ou une expression cible facultatif et basculez entre l’analyse des expressions de 1 mot, 2 mots et 3 mots.',
      },
      {
        title: 'Examinez le tableau de fréquences',
        description:
          'Parcourez les termes principaux et leurs parts (%) pour confirmer l’orientation thématique et réduire les répétitions d’expressions non naturelles.',
      },
      {
        title: 'Vérifiez le nombre de mots, le temps de lecture et le vocabulaire',
        description:
          'Utilisez le nombre total de mots, la part de mots uniques et le temps de lecture pour juger si le brouillon est trop mince, trop long ou trop répétitif.',
      },
      {
        title: 'Réécrivez naturellement les expressions surutilisées',
        description:
          'Quand la même expression de 2 ou 3 mots domine le tableau, variez-la avec des synonymes et des pronoms au lieu de supprimer entièrement votre mot-clé thématique.',
      },
      {
        title: 'Corrigez les comptages étranges avant de faire confiance aux résultats',
        description:
          'Si les chiffres semblent faux, assurez-vous que Supprimer les balises HTML est activé et que les menus de navigation, blocs de code ou pieds de page n’ont pas été collés avec le texte.',
      },
    ],
    examples: [
      {
        title: 'Repérer une répétition d’expression involontaire dans un brouillon de 500 mots',
        input: 'Brouillon d’article + Cible : « technical seo » + Expressions de 2 mots',
        output: 'Classe les bigrammes principaux (« technical seo », « meta descriptions », « canonical tags ») avec leur part en %.',
        explanation: 'Met en évidence à la fois l’alignement sur le sujet principal et les formulations répétitives à varier naturellement.',
      },
      {
        title: 'Vérifier la couverture thématique d’une page d’accueil',
        input: 'Texte de la page d’accueil + Cible : « compresseur d’images » + Expressions de 1 mot',
        output: 'Tableau des mots les plus fréquents avec nombre d’occurrences et part en %',
        explanation: 'Confirme que le mot-clé principal apparaît assez souvent sans bourrage.',
      },
    ],
    benefits: [
      'Analyse les expressions de plusieurs mots (bigrammes et trigrammes), pas seulement les mots isolés',
      'Supprime en sécurité les balises <script>, <style> et HTML avant de compter le texte',
      'Inclut des conseils honnêtes qui déconseillent le bourrage mécanique de mots-clés',
      'Garde les brouillons non publiés et les briefs clients strictement dans la mémoire du navigateur',
    ],
    useCases: [
      'Modifier des guides longs pour s’assurer que les sujets principaux apparaissent clairement sans bourrage maladroit',
      'Auditer des brouillons sans concurrence pour l’équilibre du vocabulaire thématique',
      'Revoir le texte d’une page d’accueil nettoyé proprement à partir du HTML exporté',
      'Vérifier le temps de lecture moyen avec le compteur de mots et le vérificateur de lisibilité',
    ],
    faqs: [
      {
        question: 'Existe-t-il un pourcentage de densité de mots-clés idéal pour Google ?',
        answer:
          'Non. Google affirme explicitement qu’il n’existe pas de seuil fixe de densité de mots-clés. Écrivez naturellement pour les lecteurs et utilisez les audits de densité seulement pour vérifier la couverture du sujet et éviter les répétitions non naturelles.',
      },
      {
        question: 'Comment la suppression des balises HTML gère-t-elle les éléments <script> et <style> ?',
        answer:
          'Elle supprime des blocs <script> et <style> entiers avant de retirer les balises HTML restantes, pour que les jetons JavaScript ou CSS ne polluent jamais les statistiques de mots.',
      },
      {
        question: 'Puis-je analyser une URL de concurrent en ligne en tapant un domaine ici ?',
        answer:
          'Non. Collez directement le texte ou la source HTML — les applications de navigateur ne peuvent pas récupérer des sites web tiers d’autres origines sans proxys serveur.',
      },
      {
        question: 'Le vérificateur de densité de mots-clés est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, et vous pouvez analyser autant de brouillons que vous le souhaitez.',
      },
      {
        question: 'Qu’est-ce que la densité de mots-clés exactement ?',
        answer:
          'La densité de mots-clés est la fréquence d’apparition d’un mot ou d’une expression en pourcentage du nombre total de mots d’un texte. Une expression utilisée 5 fois dans 500 mots a une densité de 1 %.',
      },
      {
        question: 'Qu’est-ce que le bourrage de mots-clés ?',
        answer:
          'Le bourrage de mots-clés consiste à répéter une expression de façon non naturelle juste pour mieux se classer. Cela se lit mal pour les visiteurs et peut nuire au classement : utilisez donc cet outil pour repérer les répétitions, pas pour atteindre un chiffre cible.',
      },
      {
        question: 'Que sont les n-grammes et pourquoi vérifier les expressions de 2 et 3 mots ?',
        answer:
          'Les n-grammes sont des séquences de n mots — les bigrammes sont des expressions de 2 mots et les trigrammes de 3 mots. Les vérifier révèle des expressions répétées que les comptages de mots isolés manquent entièrement.',
      },
      {
        question: 'Combien de mots faut-il pour une vérification de densité significative ?',
        answer:
          'Les textes courts produisent des pourcentages bruyants : visez au moins 300 mots pour des résultats stables. Les très courts extraits peuvent toujours montrer des comptages bruts, mais traitez les pourcentages avec prudence.',
      },
      {
        question: 'L’outil compte-t-il les mots dans les titres et les listes ?',
        answer:
          'Oui. Tout le texte visible que vous collez est compté, y compris les titres, les listes à puces et les légendes, car les moteurs de recherche voient aussi ce contenu.',
      },
      {
        question: 'Pourquoi mon expression cible affiche-t-elle 0 % ?',
        answer:
          'Vérifiez l’orthographe et la formulation exactes — pluriels, traits d’union et ordre des mots doivent correspondre. Assurez-vous aussi que Supprimer les balises HTML est activé si vous avez collé du HTML.',
      },
      {
        question: 'Puis-je vérifier la densité de plusieurs mots-clés à la fois ?',
        answer:
          'Chaque analyse suit une seule expression cible. Pour vérifier un autre mot-clé, changez l’expression cible et relancez l’analyse sur le même texte.',
      },
      {
        question: 'Le vérificateur compte-t-il les mots vides comme « the » et « and » ?',
        answer:
          'Oui, ils apparaissent dans le tableau de fréquence des mots isolés, mais concentrez-vous sur les mots et expressions thématiques — les mots vides sont naturellement fréquents dans tous les textes et en disent peu sur le SEO.',
      },
      {
        question: 'Mon brouillon est-il envoyé quelque part ?',
        answer:
          'Non. Le vérificateur de densité de mots-clés fonctionne entièrement dans votre navigateur : les brouillons non publiés et le texte client ne quittent jamais votre appareil.',
      },
      {
        question: 'Quel est un bon temps de lecture pour un article de blog ?',
        answer:
          'Cela dépend du sujet, mais l’outil affiche le temps de lecture pour vous permettre de juger si un article correspond aux attentes des lecteurs — un guide rapide peut durer 3 minutes, un tutoriel approfondi 10 minutes ou plus.',
      },
      {
        question: 'Puis-je coller du HTML copié depuis mon CMS ?',
        answer:
          'Oui. Collez le HTML brut et gardez Supprimer les balises HTML activé pour que les balises, scripts et styles soient supprimés avant le comptage des mots.',
      },
      {
        question: 'Le vérificateur fonctionne-t-il avec du texte non anglais ?',
        answer:
          'Oui. Le comptage de mots fonctionne pour toute langue qui sépare les mots par des espaces, et les tableaux de n-grammes listeront les expressions les plus fréquentes dans cette langue.',
      },
      {
        question: 'Comment réduire la densité sans supprimer mon sujet ?',
        answer:
          'Utilisez des synonymes, des pronoms et des formulations variées au lieu de répéter le mot-clé exact. Le sujet reste clair tandis que le texte se lit naturellement.',
      },
      {
        question: 'Que signifie la diversité du vocabulaire ?',
        answer:
          'C’est la part de mots uniques par rapport au nombre total de mots. Une part plus élevée signifie généralement une écriture plus riche et variée ; une part très faible peut signaler un texte répétitif.',
      },
      {
        question: 'Puis-je analyser un document PDF ou Word ?',
        answer:
          'L’outil accepte le texte collé : copiez donc le texte de votre fichier PDF ou Word et collez-le ici — la mise en forme n’est pas nécessaire pour une vérification de densité.',
      },
      {
        question: 'Pourquoi les pourcentages changent-ils quand je change la taille des n-grammes ?',
        answer:
          'Chaque taille de n-gramme a son propre total : un texte de 500 mots compte 500 mots isolés mais seulement 499 expressions de deux mots, donc le même nombre d’occurrences produit un pourcentage légèrement différent.',
      },
    ],
  },
  'canonical-hreflang-generator': {
    slug: 'generateur-de-canonical-et-hreflang',
    name: 'Générateur de Canonical, Hreflang et Redirections 301',
    shortDescription:
      'Générez des balises hreflang et canonical HTML/XML ou compilez des redirections 301 pour Cloudflare Pages _redirects, Apache et Nginx.',
    keywords: [
      'générateur hreflang',
      'créateur balise canonical',
      'générateur redirection 301',
      'créateur _redirects cloudflare',
      'générateur url canonique',
      'générateur balise hreflang',
      'balises seo multilingues',
      'générateur règles redirection 301',
      'créateur redirection htaccess apache',
    ],
    seo: {
      title: 'Générateur Canonical, Hreflang et 301 | UtilityFlow',
      description:
        'Générez des balises hreflang et canonical pour les pages multilingues, ainsi que des règles de redirection 301 pour Cloudflare Pages, Apache et Nginx.',
      primaryKeyword: 'générateur hreflang',
      secondaryKeywords: [
        'générateur balise link canonical',
        'créateur config redirection 301',
        'générateur redirections cloudflare pages',
        'générateur url canonique',
      ],
      longTailKeywords: [
        'générer balises hreflang html et liens xhtml sitemap xml',
        'convertir liste url en règles 301 _redirects cloudflare pages',
        'créer redirections 301 apache htaccess et nginx en ligne',
        'générer balise hreflang x-default pour pages internationales',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Gérez deux migrations SEO techniques essentielles en un seul endroit : générez des annotations hreflang multirégionales + canonical (pour le <head> HTML et les sitemaps XML), ou convertissez des listes de correspondances d’URL en configurations de redirection 301 prêtes à déployer pour Cloudflare Pages, Apache et Nginx.',
    instructions: [
      {
        title: 'Choisissez Hreflang ou Redirections 301',
        description:
          'Sélectionnez Balises Canonical et Hreflang pour le SEO international ou Générateur de règles de redirection 301 pour les migrations d’URL.',
      },
      {
        title: 'Saisissez les paramètres régionaux ou les paires de migration d’URL',
        description:
          'Ajoutez des codes ISO de langue-région (en-US, en-GB, x-default) et des URL, ou collez des paires de chemins ancien vers nouveau.',
      },
      {
        title: 'Vérifiez les balises ou règles générées',
        description:
          'Parcourez chaque code de paramètre régional, chaque URL et chaque paire de redirection pour détecter les fautes de frappe avant de copier — un seul code erroné peut casser tout le jeu hreflang.',
      },
      {
        title: 'Ajoutez x-default et les canonicals autoréférentiels',
        description:
          'Incluez un paramètre régional de secours x-default et assurez-vous que chaque page se liste elle-même comme sa propre canonique.',
      },
      {
        title: 'Copiez la configuration prête pour la plateforme',
        description:
          'Copiez directement les balises HTML <link>, les lignes XML <xhtml:link> ou les règles _redirects / .htaccess / nginx.',
      },
      {
        title: 'Validez après le déploiement',
        description:
          'Une fois en ligne, consultez la source de la page ou utilisez un validateur hreflang pour confirmer que les balises sont présentes, réciproques et pointent vers les bonnes URL.',
      },
    ],
    examples: [
      {
        title: 'Règle de migration 301 pour Cloudflare Pages',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: 'Produit la syntaxe exacte _redirects de Cloudflare Pages avec le statut permanent 301 explicite.',
      },
      {
        title: 'Jeu hreflang anglais, français et espagnol',
        input: 'Versions en, fr et es d’une même page + x-default',
        output: 'Balises <link rel="alternate" hreflang="en|fr|es|x-default"> réciproques sur chaque version',
        explanation: 'Chaque version pointe vers toutes les autres et vers elle-même, avec un secours x-default.',
      },
    ],
    benefits: [
      'Produit à la fois les formats HTML <link rel="alternate"> et XML <xhtml:link> de façon cohérente',
      'Prend en charge les syntaxes _redirects de Cloudflare Pages, .htaccess Apache et serveur Nginx',
      'Encourage les canonicals autoréférentiels et les paramètres régionaux de secours x-default',
      'Normalise automatiquement les barres obliques initiales sur les chemins sources de redirection',
    ],
    useCases: [
      'Lancer proprement des pages régionales localisées en anglais, espagnol et français sans pénalités de doublons',
      'Préserver la valeur des backlinks lors du renommage de slugs pendant une refonte',
      'Générer des fichiers de déploiement /public/_redirects pour Cloudflare Pages en quelques secondes',
      'Vérifier les jeux hreflang réciproques avant de soumettre des sitemaps internationaux',
    ],
    faqs: [
      {
        question: 'Les balises hreflang doivent-elles être bidirectionnelles / réciproques ?',
        answer:
          'Oui. Si la page A lie la page B avec hreflang="es", la page B doit lier la page A avec hreflang="en" (et elle-même), sinon les moteurs de recherche ignorent l’annotation.',
      },
      {
        question: 'Quand utiliser x-default dans hreflang ?',
        answer:
          'Utilisez hreflang="x-default" pour désigner votre page internationale de secours pour les visiteurs dont la langue ou la région du navigateur ne correspond à aucun autre paramètre régional.',
      },
      {
        question: 'Les URL canoniques doivent-elles pointer d’une langue à l’autre (par exemple es → en) ?',
        answer:
          'Non. Chaque version de langue traduite doit déclarer une canonique autoréférentielle pointant vers elle-même, tandis que hreflang relie les équivalents localisés.',
      },
      {
        question: 'Le générateur hreflang est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, et vous pouvez générer autant de jeux hreflang et de règles de redirection que nécessaire.',
      },
      {
        question: 'Qu’est-ce que hreflang et pourquoi est-ce important ?',
        answer:
          'Hreflang est une annotation HTML ou XML qui indique aux moteurs de recherche quelle version linguistique et régionale d’une page montrer à chaque visiteur, pour que les utilisateurs anglophones voient la page anglaise et les hispanophones la page espagnole.',
      },
      {
        question: 'Quel format les codes de langue-région doivent-ils utiliser ?',
        answer:
          'Utilisez les codes de langue ISO avec une région ISO facultative, comme en, es, fr-CA ou en-GB. La langue vient en premier, puis un trait d’union, puis la région en majuscules.',
      },
      {
        question: 'Ai-je besoin de hreflang si mon site n’a qu’une seule langue ?',
        answer:
          'Non. Hreflang n’est utile que lorsque le même contenu existe dans plus d’une langue ou version régionale.',
      },
      {
        question: 'Puis-je mettre hreflang dans mon sitemap XML au lieu du HTML ?',
        answer:
          'Oui. L’outil produit les deux formats : des balises link HTML pour le head de votre page et des blocs xhtml:link pour votre sitemap XML. Choisissez un seul endroit et restez cohérent.',
      },
      {
        question: 'Qu’est-ce qu’une canonique autoréférentielle ?',
        answer:
          'C’est une balise canonique sur une page qui pointe vers la page elle-même. Chaque version d’une page doit en inclure une, y compris chaque version traduite.',
      },
      {
        question: 'Quand utiliser une redirection 301 plutôt qu’une balise canonique ?',
        answer:
          'Utilisez une redirection 301 quand une page a déménagé définitivement vers une nouvelle URL. Utilisez une balise canonique quand deux pages similaires doivent rester en ligne toutes les deux et que vous voulez que les moteurs de recherche en préfèrent une.',
      },
      {
        question: 'Quelle est la différence entre une redirection 301 et 302 ?',
        answer:
          'Une 301 est permanente et transmet la plupart des signaux de classement vers la nouvelle URL ; une 302 est temporaire et indique aux moteurs de recherche que l’ancienne URL peut revenir : c’est donc le mauvais choix pour un déménagement permanent.',
      },
      {
        question: 'Comment fonctionnent les _redirects de Cloudflare Pages ?',
        answer:
          'Vous placez un fichier _redirects dans le dossier public de votre site, avec une règle par ligne — ancien chemin, nouveau chemin et code de statut — et Cloudflare applique les redirections quand le site se déploie.',
      },
      {
        question: 'Puis-je rediriger tout un dossier avec une seule règle ?',
        answer:
          'L’outil produit une règle par paire d’URL. Pour un déplacement de dossier entier, utilisez une règle générique ou splat dans Cloudflare Pages ou Apache, ou générez ici la liste complète des paires.',
      },
      {
        question: 'Les redirections 301 transmettent-elles les signaux de classement vers la nouvelle page ?',
        answer:
          'Oui. Une redirection 301 transmet la plupart des signaux de classement et de la valeur de lien de l’ancienne page vers la nouvelle URL, ce qui en fait le choix standard pour les déménagements permanents.',
      },
      {
        question: 'L’ancienne URL doit-elle rester dans mon sitemap après une redirection 301 ?',
        answer:
          'Non. Supprimez les URL redirigées de votre sitemap et listez uniquement les nouvelles URL de destination, pour que les moteurs de recherche explorent les pages actuelles.',
      },
      {
        question: 'Combien de temps faut-il garder une redirection 301 active ?',
        answer:
          'Gardez-la au moins un an, et idéalement en permanence. La supprimer trop tôt peut casser les anciens backlinks et favoris qui pointent encore vers l’ancienne URL.',
      },
      {
        question: 'Hreflang peut-il résoudre les problèmes de contenu dupliqué ?',
        answer:
          'Pas à lui seul. Hreflang indique aux moteurs de recherche quelle version montrer à chaque audience, mais les pages vraiment dupliquées dans la même langue nécessitent toujours des balises canoniques ou une consolidation.',
      },
      {
        question: 'Que se passe-t-il si j’utilise un code de paramètre régional erroné ?',
        answer:
          'Les moteurs de recherche ignorent les codes invalides : une faute de frappe comme en-UK au lieu de en-GB casse donc silencieusement cette version linguistique. Vérifiez chaque code avant de déployer.',
      },
      {
        question: 'Ma liste d’URL est-elle envoyée quelque part ?',
        answer:
          'Non. Le générateur de Canonical, Hreflang et Redirections 301 fonctionne entièrement dans votre navigateur : vos URL et vos plans de migration ne quittent jamais votre appareil.',
      },
      {
        question: 'Puis-je générer des balises hreflang pour plus de deux langues ?',
        answer:
          'Oui. Ajoutez autant de lignes de paramètres régionaux que votre site en prend en charge — l’outil construit un jeu réciproque complet couvrant chaque version linguistique saisie.',
      },
    ],
  },
  'on-page-seo-checker': {
    slug: 'verificateur-de-seo-on-page',
    name: 'Vérificateur d’Audit SEO On-Page HTML',
    shortDescription:
      'Auditez le HTML collé localement avec DOMParser : longueur du titre, meta description, hiérarchie H1–H4, texte alt et JSON-LD.',
    keywords: [
      'vérificateur seo on page',
      'analyseur seo html',
      'vérificateur hiérarchie titres',
      'outil audit alt images',
      'outil audit seo gratuit',
      'vérificateur longueur meta description',
      'vérificateur longueur balise title',
      'vérificateur balises seo html',
      'vérificateur json-ld',
    ],
    seo: {
      title: 'Vérificateur SEO On-Page – Audit HTML | UtilityFlow',
      description:
        'Collez la source HTML d’une page pour auditer son titre, sa meta description, ses titres, sa canonique, le texte alt des images, ses liens et son JSON-LD.',
      primaryKeyword: 'vérificateur seo on page',
      secondaryKeywords: [
        'audit seo source html',
        'vérificateur structure titres h1 h2',
        'vérifier attributs alt images manquants',
        'vérificateur longueur meta description',
      ],
      longTailKeywords: [
        'auditer source html collée pour balises seo on page hors ligne',
        'vérifier plan titres h1 à h4 et lien canonique dans html',
        'inspecteur seo dom côté client sans exploration externe',
        'coller source html pour vérifier titre meta description titres',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Effectuez une inspection SEO technique et on-page instantanée au niveau du DOM sur n’importe quelle source HTML collée (Afficher la source de la page) directement dans votre navigateur — en vérifiant <title>, la meta description, les canoniques, la hiérarchie des titres H1–H4, le texte alt des images manquant, les liens internes/externes, Open Graph et JSON-LD.',
    instructions: [
      {
        title: 'Copiez la source HTML de votre page',
        description:
          'Ouvrez Afficher la source de la page (ou inspectez le fichier dist/index.html construit) et collez le HTML dans la zone de texte source.',
      },
      {
        title: 'Examinez le score d’audit DOM et les listes de contrôle',
        description:
          'Inspectez les indicateurs de réussite et d’avertissement pour le titre, la meta description, le H1 unique, le lien canonique, le texte alt et les données structurées.',
      },
      {
        title: 'Vérifiez le plan des titres et les liens',
        description:
          'Parcourez l’arborescence H1–H4 extraite et le décompte des liens internes/externes pour corriger les niveaux sautés ou les balises manquantes.',
      },
      {
        title: 'Corrigez les avertissements par ordre de priorité',
        description:
          'Commencez par un titre manquant ou trop long et une meta description, puis les balises H1 en double, puis le texte alt des images manquant.',
      },
      {
        title: 'Collez à nouveau et auditez de nouveau après les corrections',
        description:
          'Collez le HTML mis à jour et relancez l’audit pour confirmer que le score s’est amélioré et qu’aucun nouvel avertissement n’est apparu.',
      },
      {
        title: 'Auditez correctement les pages rendues en JavaScript',
        description:
          'Si les balises meta manquent dans la source brute d’une page React ou SPA, copiez plutôt le outerHTML en direct depuis le panneau Éléments des DevTools de votre navigateur.',
      },
    ],
    examples: [
      {
        title: 'Auditer une exportation HTML statique rendue',
        input: 'Document <html> complet avec <title>, <meta description>, H1/H2 et JSON-LD',
        output: '6/6 vérifications réussies · Plan H1–H4 + répartition des liens internes/externes',
        explanation: 'Utilise le DOMParser natif du navigateur proprement, sans exécuter de scripts non fiables.',
      },
      {
        title: 'Détecter des H1 en double dans un modèle de blog',
        input: 'HTML d’un article WordPress avec deux balises H1',
        output: 'Avertissement : plusieurs H1 détectés, avec la liste des titres et leurs niveaux',
        explanation: 'L’arborescence des titres extraite montre immédiatement où la hiérarchie se répète.',
      },
    ],
    benefits: [
      'Utilise le DOMParser natif (n’exécute jamais les balises <script> collées ni les charges externes)',
      'Honnête sur les limites CORS du navigateur — ne prétend jamais récupérer des URL distantes bloquées',
      'Extrait proprement le plan complet du document H1–H4',
      'Vérifie la présence d’Open Graph et de JSON-LD en plus des balises SEO classiques',
    ],
    useCases: [
      'Contrôle qualité pré-déploiement sur des builds de test et des exportations HTML statiques',
      'Vérifier que les modèles de blog CMS ne contiennent pas de balises <h1> en double accidentelles ni d’attributs alt vides',
      'Vérifier que les pages rendues côté serveur émettent proprement les balises canoniques et meta',
      'Inspecter des pages HTML protégées par e-mail ou localhost inaccessibles aux robots cloud',
    ],
    faqs: [
      {
        question: 'Pourquoi cet outil me demande-t-il de coller la source HTML au lieu de taper une URL de site web ?',
        answer:
          'Les navigateurs appliquent des politiques de partage de ressources entre origines (CORS) qui empêchent le JavaScript côté client de lire des sites web externes arbitraires, et les URL localhost ou de test privées sont inaccessibles depuis les serveurs publics. Coller la source de la page rend l’audit local fiable à 100 % et privé.',
      },
      {
        question: 'Les SPA rendues en JavaScript peuvent-elles être auditées correctement avec la source brute ?',
        answer:
          'Pour les SPA rendues côté client où React injecte les balises meta à l’exécution, copiez plutôt le outerHTML en direct depuis le panneau Éléments des DevTools Chrome/Firefox au lieu de la source brute.',
      },
      {
        question: 'DOMParser exécute-t-il les scripts contenus dans le HTML collé ?',
        answer:
          'Non. DOMParser.parseFromString(..., "text/html") construit une arborescence DOM inerte strictement pour l’inspection, sans exécuter JavaScript ni charger d’images externes.',
      },
      {
        question: 'Le vérificateur SEO on-page est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, et vous pouvez auditer autant de pages que vous le souhaitez.',
      },
      {
        question: 'Quelle est la longueur idéale de la balise title ?',
        answer:
          'Visez 50 à 60 caractères. Les titres plus longs sont coupés dans les résultats de recherche, tandis que les titres très courts gaspillent l’occasion de décrire clairement la page.',
      },
      {
        question: 'Quelle est la longueur idéale de la meta description ?',
        answer:
          'Visez 150 à 160 caractères. Cette longueur s’affiche généralement entièrement dans les résultats de recherche sans être tronquée.',
      },
      {
        question: 'Combien de balises H1 une page doit-elle avoir ?',
        answer:
          'Une seule. Un H1 unique énonce le sujet principal de la page ; les sous-sujets appartiennent aux titres H2 et H3 en dessous.',
      },
      {
        question: 'Puis-je sauter des niveaux de titres, par exemple H1 puis H3 ?',
        answer:
          'Évitez-le. Gardez la hiérarchie dans l’ordre — H1, puis H2, puis H3 — pour que les moteurs de recherche et les lecteurs d’écran puissent suivre la structure de la page.',
      },
      {
        question: 'Que se passe-t-il si ma page n’a pas de balise canonique ?',
        answer:
          'Les moteurs de recherche choisiront eux-mêmes une URL canonique, qui peut ne pas être la version que vous préférez. En ajouter une explicitement supprime toute supposition.',
      },
      {
        question: 'Pourquoi le texte alt des images est-il important pour le SEO ?',
        answer:
          'Le texte alt décrit les images aux moteurs de recherche et aux lecteurs d’écran, aide les images à se classer dans la recherche d’images et garde la page utilisable quand une image ne se charge pas.',
      },
      {
        question: 'Qu’est-ce que JSON-LD et pourquoi faut-il le vérifier ?',
        answer:
          'JSON-LD est un bloc de données structurées qui décrit le contenu de votre page aux moteurs de recherche, alimentant des résultats enrichis comme les notes, les FAQ et les fils d’Ariane. Le vérificateur confirme sa présence.',
      },
      {
        question: 'Le vérificateur audite-t-il les balises Open Graph ?',
        answer:
          'Oui. Il signale si les balises Open Graph comme og:title et og:image sont présentes, pour que votre page s’affiche correctement une fois partagée sur les réseaux sociaux.',
      },
      {
        question: 'Puis-je auditer une page qui nécessite une connexion ?',
        answer:
          'Oui. Comme vous collez vous-même le HTML, vous pouvez auditer des pages privées, de test et localhost que les robots publics ne peuvent pas atteindre.',
      },
      {
        question: 'Mon HTML est-il envoyé quelque part ?',
        answer:
          'Non. Le vérificateur SEO on-page fonctionne entièrement dans votre navigateur : la source de votre page ne quitte jamais votre appareil.',
      },
      {
        question: 'Mon score d’audit est faible — que corriger en premier ?',
        answer:
          'Corrigez les problèmes dans cet ordre : un titre manquant ou trop long, une meta description manquante, des balises H1 en double, puis le texte alt des images manquant.',
      },
      {
        question: 'Le vérificateur compte-t-il les liens internes et externes ?',
        answer:
          'Oui. Il comptabilise séparément les liens internes et externes, pour que vous puissiez voir si une page renvoie assez vers l’extérieur et si la navigation interne est présente.',
      },
      {
        question: 'Puis-je auditer ma page d’accueil et mes articles de blog avec le même outil ?',
        answer:
          'Oui. Collez la source HTML de chaque page séparément et auditez-les une par une — chaque page obtient son propre score et sa propre liste de contrôle.',
      },
      {
        question: 'Pourquoi certaines vérifications affichent-elles des avertissements plutôt que des échecs ?',
        answer:
          'Les avertissements signalent des problèmes de bonnes pratiques qui méritent d’être corrigés mais ne sont pas des erreurs critiques, comme un titre légèrement long ou un niveau de titre sauté.',
      },
      {
        question: 'Fonctionne-t-il pour les pages WordPress ?',
        answer:
          'Oui. Ouvrez Afficher la source de la page sur n’importe quelle page WordPress, copiez le HTML et collez-le ici — le vérificateur fonctionne avec la sortie de n’importe quel CMS.',
      },
      {
        question: 'À quelle fréquence faut-il lancer un audit SEO on-page ?',
        answer:
          'Lancez-en un chaque fois que vous modifiez un modèle, publiez un nouveau type de page ou après une refonte — et auditez de nouveau après les corrections pour confirmer l’amélioration du score.',
      },
    ],
  },
  'robots-meta-tag-generator': {
    slug: 'generateur-de-meta-tags-robots',
    name: 'Générateur de Meta Robots et X-Robots-Tag',
    shortDescription:
      'Générez des directives noindex, nofollow, noarchive, max-snippet, max-image-preview et des règles _headers Cloudflare précises.',
    keywords: [
      'générateur meta tag robots',
      'créateur x-robots-tag',
      'meta tag noindex nofollow',
      'tag max-image-preview large',
      'générateur tag noindex',
      'créateur meta tag robots',
      'générateur header robots',
      'générateur _headers cloudflare',
      'meta tag nosnippet',
    ],
    seo: {
      title: 'Générateur de Meta Robots et X-Robots-Tag | UtilityFlow',
      description:
        'Créez des balises meta robots HTML et des en-têtes X-Robots-Tag avec noindex, nofollow, max-snippet et max-image-preview — plus une sortie _headers Cloudflare.',
      primaryKeyword: 'générateur meta tag robots',
      secondaryKeywords: [
        'générateur header x-robots-tag',
        'créateur meta tag noindex',
        'google max-image-preview large',
        'générateur tag noindex',
      ],
      longTailKeywords: [
        'générer header x-robots-tag noindex pour pdf sur cloudflare pages',
        'créer meta robots avec max-snippet et max-image-preview large',
        'différence entre robots.txt et meta robots noindex',
        'créer meta robots tag avec noindex nofollow et max-snippet',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Générez des directives d’exploration précises au niveau de la page — notamment index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet et max-image-preview:large — simultanément sous forme de balises HTML <meta name="robots">, d’en-têtes HTTP X-Robots-Tag et de blocs _headers pour Cloudflare Pages.',
    instructions: [
      {
        title: 'Choisissez les directives d’indexation et de liens',
        description:
          'Définissez index/noindex, follow/nofollow et les restrictions facultatives comme noarchive, nosnippet ou noimageindex.',
      },
      {
        title: 'Ajustez les limites de snippet et d’aperçu',
        description:
          'Configurez max-snippet (-1 pour illimité), max-image-preview (large pour Google Discover) et max-video-preview.',
      },
      {
        title: 'Copiez la balise HTML ou l’en-tête HTTP',
        description:
          'Utilisez la balise meta HTML dans <head>, ou déployez le bloc d’en-tête X-Robots-Tag pour les PDF et les téléchargements non HTML.',
      },
      {
        title: 'Choisissez le bon format de sortie',
        description:
          'Utilisez la balise meta HTML pour les pages normales, X-Robots-Tag pour les PDF et autres fichiers non HTML, et le bloc _headers pour les règles de chemin Cloudflare.',
      },
      {
        title: 'Placez la sortie au bon endroit',
        description:
          'Placez la balise meta dans le <head> de votre page, ou ajoutez les règles d’en-tête à la configuration de votre serveur ou au fichier _headers Cloudflare, puis déployez.',
      },
      {
        title: 'La page s’affiche encore dans les résultats ?',
        description:
          'Noindex ne fonctionne qu’après que les moteurs de recherche ont réexploré la page, ce qui peut prendre des jours. Vérifiez que robots.txt ne bloque pas l’exploration, puis confirmez dans Search Console.',
      },
    ],
    examples: [
      {
        title: 'Exclure des téléchargements PDF privés via _headers Cloudflare Pages',
        input: 'noindex, nofollow · Chemin : /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'L’en-tête HTTP X-Robots-Tag fonctionne pour les PDF, les images et les fichiers non HTML sans élément <head>.',
      },
      {
        title: 'Limiter les snippets d’une page payante',
        input: 'index, follow · max-snippet: 120 · nosnippet désactivé',
        output: '<meta name="robots" content="index, follow, max-snippet:120">',
        explanation: 'Plafonner la longueur du snippet protège le contenu payant tout en gardant la page indexée.',
      },
    ],
    benefits: [
      'Produit simultanément le HTML <meta>, l’en-tête HTTP générique X-Robots-Tag et les _headers de Cloudflare Pages',
      'Inclut les valeurs par défaut max-image-preview:large recommandées par Google Discover',
      'Empêche automatiquement les combinaisons conflictuelles (désactive les curseurs de snippet et d’image quand nosnippet/noimageindex sont actifs)',
      'Rend la désindexation des PDF et ressources non HTML simple via les en-têtes HTTP',
    ],
    useCases: [
      'Empêcher les pages de remerciement, les résultats de recherche internes ou les portails membres d’entrer dans l’index Google',
      'Désindexer des brochures PDF ou des livres blancs hébergés via des en-têtes X-Robots-Tag',
      'Activer max-image-preview:large pour les articles éditoriaux ciblant Google Discover',
      'Ajouter des limites strictes de noarchive ou de longueur de snippet sur la documentation payante ou sensible',
    ],
    faqs: [
      {
        question: 'Quand utiliser X-Robots-Tag plutôt que <meta name="robots"> ?',
        answer:
          'Utilisez les en-têtes HTTP X-Robots-Tag pour les fichiers non HTML (comme les PDF, feuilles de calcul ou images) ou quand vous appliquez des règles d’indexation à tout un dossier via des règles CDN.',
      },
      {
        question: 'Faut-il combiner Disallow dans robots.txt avec <meta name="robots" content="noindex"> ?',
        answer:
          'Non ! Si une URL est bloquée dans robots.txt, les robots de recherche ne peuvent pas explorer la page pour lire la balise HTML <meta name="robots" content="noindex"> qu’elle contient. Autorisez l’exploration si vous comptez sur le noindex meta.',
      },
      {
        question: 'Que signifie max-snippet:-1 ?',
        answer:
          'Une valeur de -1 laisse les moteurs de recherche choisir toute longueur de snippet qu’ils jugent utile, tandis que 0 empêche les snippets de texte et les entiers positifs (comme 160) plafonnent la longueur des snippets en caractères.',
      },
      {
        question: 'Le générateur de meta tags robots est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, et vous pouvez générer autant de balises et de règles d’en-tête que nécessaire.',
      },
      {
        question: 'Que fait noindex ?',
        answer:
          'Noindex dit aux moteurs de recherche de ne pas inclure une page dans les résultats de recherche. La page reste en ligne et visitable, mais elle n’apparaîtra pas sur Google ou Bing.',
      },
      {
        question: 'Que fait nofollow ?',
        answer:
          'Nofollow dit aux moteurs de recherche de ne pas suivre les liens d’une page ni de transmettre des signaux de classement à travers eux. C’est utile pour les pages avec des liens non fiables ou payants.',
      },
      {
        question: 'Quelle est la différence entre robots.txt et une balise meta robots ?',
        answer:
          'Robots.txt bloque l’exploration d’une URL, tandis qu’une balise meta robots contrôle si une page explorée est indexée. Ils résolvent des problèmes différents et ne doivent pas être combinés sans précaution.',
      },
      {
        question: 'Combien de temps noindex met-il à agir ?',
        answer:
          'Il ne prend effet qu’après que les moteurs de recherche ont réexploré la page, ce qui peut prendre des jours ou des semaines selon la fréquence de visite de la page.',
      },
      {
        question: 'Qu’est-ce que max-image-preview:large ?',
        answer:
          'Il permet aux moteurs de recherche d’afficher de grands aperçus d’images pour votre page, ce que Google recommande pour les pages ciblant Google Discover.',
      },
      {
        question: 'Que fait nosnippet ?',
        answer:
          'Nosnippet empêche les moteurs de recherche d’afficher un snippet de texte pour la page dans les résultats de recherche : seuls le titre et l’URL apparaissent.',
      },
      {
        question: 'Que fait noarchive ?',
        answer:
          'Noarchive empêche les moteurs de recherche de proposer une copie en cache de votre page, ce qui est utile pour le contenu urgent ou qui change fréquemment.',
      },
      {
        question: 'Que fait noimageindex ?',
        answer:
          'Noimageindex dit aux moteurs de recherche de ne pas indexer les images d’une page, tandis que la page elle-même peut toujours apparaître dans les résultats de recherche normaux.',
      },
      {
        question: 'Puis-je appliquer noindex à un fichier PDF ?',
        answer:
          'Oui. Les PDF n’ont pas de head HTML : utilisez donc plutôt l’en-tête HTTP X-Robots-Tag — l’outil génère le bloc d’en-tête exact pour vous.',
      },
      {
        question: 'Faut-il appliquer noindex aux pages de remerciement et de paiement ?',
        answer:
          'Oui. Les pages de remerciement, les étapes de paiement, les résultats de recherche internes et les espaces membres n’apportent généralement aucune valeur de recherche et sont couramment définis sur noindex.',
      },
      {
        question: 'Puis-je combiner noindex et nofollow sur la même page ?',
        answer:
          'Oui. Ils contrôlent des choses différentes — l’indexation et le suivi des liens — et sont souvent utilisés ensemble sur les pages privées ou utilitaires.',
      },
      {
        question: 'Qu’est-ce qu’un fichier _headers Cloudflare ?',
        answer:
          'C’est un fichier dans le dossier public de votre site qui associe des chemins d’URL à des en-têtes de réponse HTTP. L’outil produit un bloc prêt à coller pour n’importe quel chemin.',
      },
      {
        question: 'Les balises meta robots fonctionnent-elles sur Bing et les autres moteurs de recherche ?',
        answer:
          'Oui. La plupart des grands moteurs de recherche respectent les directives robots standard, même si quelques-uns ne prennent en charge qu’un sous-ensemble — restez sur les directives courantes pour la couverture la plus large.',
      },
      {
        question: 'Ma configuration est-elle envoyée quelque part ?',
        answer:
          'Non. Le générateur de meta tags robots fonctionne entièrement dans votre navigateur : vos paramètres ne quittent jamais votre appareil.',
      },
      {
        question: 'Que se passe-t-il si je choisis des directives conflictuelles ?',
        answer:
          'L’outil empêche automatiquement les combinaisons conflictuelles — par exemple, il désactive les curseurs de snippet et d’aperçu d’image quand nosnippet ou noimageindex est actif.',
      },
      {
        question: 'Faut-il utiliser noindex ou simplement supprimer la page ?',
        answer:
          'Si une page doit disparaître définitivement, supprimez-la et laissez-la renvoyer un statut 404 ou 410. Utilisez noindex quand la page doit rester en ligne mais ne doit pas apparaître dans les résultats de recherche.',
      },
    ],
  },
  'image-compressor': {
    slug: 'compresseur-d-images',
    name: 'Compresseur d’Images',
    shortDescription:
      'Compressez les images PNG, JPG et WebP localement via HTML5 Canvas, avec curseurs de qualité personnalisés, plafonds de largeur et mesures d’économies instantanées.',
    keywords: [
      'compresseur image',
      'compresser image en ligne',
      'réduire taille fichier image',
      'optimiseur image webp',
      'compresser png taille réduite',
      'réduire taille jpg en ligne',
      'réducteur taille image gratuit',
      'optimiser images pour web',
      'réduire taille fichier photo',
    ],
    seo: {
      title: 'Compresseur d’Images – PNG, JPG et WebP | UtilityFlow',
      description:
        'Compressez une image dans votre navigateur : réglez la qualité, plafonnez la largeur, comparez les tailles avant et après, et téléchargez — sans envoi.',
      primaryKeyword: 'compresseur image',
      secondaryKeywords: [
        'compresser png jpg webp en ligne',
        'réduire taille photo gratuit',
        'optimiseur image côté client',
        'réduire taille image pour site web',
      ],
      longTailKeywords: [
        'compresser grandes images pour web core vitals sans envoi serveur',
        'convertir et réduire photo jpg en webp léger',
        'redimensionner largeur max et optimiser qualité image hors ligne',
        'réduire taille fichier image avant pièce jointe e-mail',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Réduisez les ressources PNG, JPG et WebP lourdes pour des chargements de page plus rapides et des pièces jointes d’e-mail plus légères directement dans votre navigateur — ajustez la qualité de compression avec perte, appliquez des plafonds de largeur facultatifs et comparez les économies exactes en octets sans aucun envoi de fichier distant.',
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
    slug: 'redimensionneur-d-images',
    name: 'Redimensionneur et Recadreur d’Images',
    shortDescription:
      'Redimensionnez les images à des dimensions exactes en pixels ou avec des préréglages sociaux/OG, avec verrouillage du ratio, recadrage cover centré et export PNG/JPG/WebP.',
    keywords: [
      'redimensionneur image',
      'redimensionner image pixels',
      'recadreur image en ligne',
      'redimensionneur image og 1200x630',
      'redimensionner image en ligne gratuit',
      'changer dimensions image',
      'redimensionner photo pour instagram',
      'recadrer image à taille',
      'redimensionner image en 1200x630',
    ],
    seo: {
      title: 'Redimensionneur d’Images – Pixels Exacts | UtilityFlow',
      description:
        'Redimensionnez une image à des pixels exacts : préréglages, verrouillage du ratio, recadrage cover et export PNG, JPG ou WebP en privé dans votre navigateur.',
      primaryKeyword: 'redimensionneur image',
      secondaryKeywords: [
        'redimensionner photo en pixels exacts',
        'outil recadrage cover ratio',
        'redimensionneur préréglages taille réseaux sociaux',
        'redimensionner image pour réseaux sociaux',
      ],
      longTailKeywords: [
        'redimensionner image en 1200x630 open graph sans déformation',
        'recadrer photo centrée en carré 1080x1080 localement',
        'changer largeur et hauteur pixels image dans navigateur gratuit',
        'redimensionner photo portrait en carré 1080x1080 pour instagram',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Mettez à l’échelle graphiques et photos à des dimensions exactes en pixels — ou cliquez sur les préréglages intégrés Open Graph (1200×630), YouTube HD (1280×720), Carré (1080×1080) et Avatar (512×512) — grâce au rééchantillonnage Canvas haute qualité et au recadrage Center Cover-Crop facultatif pour éviter la distorsion.',
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
    slug: 'convertisseur-de-format-d-image',
    name: 'Convertisseur de Format d’Image (PNG / JPG / WebP)',
    shortDescription:
      'Convertissez par lots des images PNG, JPG, WebP, GIF et SVG en PNG, JPG ou WebP localement, avec contrôle de qualité et remplissage de fond JPEG personnalisé.',
    keywords: [
      'convertisseur format image',
      'convertisseur png vers webp',
      'convertisseur webp vers png',
      'convertisseur svg vers png navigateur',
      'convertir jpg en png',
      'convertir png en jpg',
      'convertisseur image par lots',
      'convertisseur webp vers jpg',
      'convertisseur image en ligne gratuit',
    ],
    seo: {
      title: 'Convertisseur de Format d’Image – PNG, JPG | UtilityFlow',
      description:
        'Convertissez des images entre PNG, JPG et WebP : conversion par lots, qualité JPG réglable et remplissage des fonds transparents avant export, gratuitement.',
      primaryKeyword: 'convertisseur format image',
      secondaryKeywords: [
        'convertir webp en jpg ou png',
        'convertisseur png vers webp par lots',
        'remplissage fond png transparent vers jpg',
        'convertir jpg en png gratuit',
      ],
      longTailKeywords: [
        'convertir par lots plusieurs images png et jpg en webp hors ligne',
        'convertir capture webp en png standard sans envoi',
        'remplir fond png transparent lors conversion en jpg',
        'changer format image de png en jpg dans navigateur',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Convertissez par lots des fichiers PNG, JPG, WebP, GIF et SVG en WebP prêt pour le web, JPG universel ou PNG transparent sans perte, entièrement dans votre navigateur — avec un remplissage de fond personnalisé quand vous aplatissez la transparence vers JPEG.',
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
    slug: 'rotation-et-miroir-d-image',
    name: 'Rotation, Miroir et Filtres d’Image',
    shortDescription:
      'Faites pivoter les images de 90°/180°/270°, retournez-les horizontalement ou verticalement, et appliquez des filtres niveaux de gris, luminosité et contraste en direct dans votre navigateur.',
    keywords: [
      'pivoter image en ligne',
      'retourner image horizontalement',
      'filtre image niveaux de gris',
      'ajuster luminosité contraste image',
      'pivoter photo 90 degrés',
      'retourner photo en ligne',
      'image miroir en ligne',
      'redresser image en ligne',
      'éditeur filtres photo en ligne',
    ],
    seo: {
      title: 'Rotation d’Image en Ligne – Miroir et Filtres | UtilityFlow',
      description:
        'Faites pivoter une image de 90, 180 ou 270 degrés, retournez des photos horizontalement ou verticalement, et réglez luminosité, contraste et niveaux de gris.',
      primaryKeyword: 'pivoter image en ligne',
      secondaryKeywords: [
        'retourner image horizontalement verticalement',
        'convertir photo en niveaux de gris en ligne',
        'ajuster luminosité et contraste navigateur',
        'pivoter photo 90 degrés en ligne',
      ],
      longTailKeywords: [
        'corriger rotation photo de travers 90 degrés hors ligne navigateur',
        'retourner selfie en miroir horizontalement sans photoshop',
        'appliquer filtre noir et blanc niveaux de gris et exporter png',
        'pivoter image document scanné vers bonne orientation',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Corrigez l’orientation de travers, retournez les selfies horizontalement ou verticalement, passez les photos en noir et blanc, et affinez la luminosité et le contraste en temps réel grâce aux transformations Canvas 2D locales en HTML5.',
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
    slug: 'image-vers-base64',
    name: 'Convertisseur Image vers Base64 et Data URI',
    shortDescription:
      'Encodez des images PNG, JPG, WebP, SVG et ICO en Data URI Base64, balises HTML <img> et règles CSS — ou décodez des chaînes Base64 en aperçus.',
    keywords: [
      'image vers base64',
      'décodeur image base64',
      'générateur data uri',
      'image base64 fond css',
      'convertir image en data uri',
      'encodeur image base64',
      'image vers base64 en ligne gratuit',
      'encoder png en base64',
      'convertisseur base64 vers image',
    ],
    seo: {
      title: 'Image vers Base64 – Convertisseur Data URI | UtilityFlow',
      description:
        'Créez des Data URI, du Base64 brut, des balises img HTML et des snippets CSS depuis vos images — ou décodez du Base64 en aperçu d’image, gratuitement.',
      primaryKeyword: 'image vers base64',
      secondaryKeywords: [
        'encodeur image data uri',
        'aperçu image base64',
        'svg ou png en ligne en css',
        'image vers base64 en ligne gratuit',
      ],
      longTailKeywords: [
        'convertir icône png en data uri background-image css hors ligne',
        'décoder chaîne base64 brute en aperçu image téléchargeable',
        'comparer taille octets image et taille chaîne base64',
        'encoder petit logo image en base64 pour e-mail html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transformez de petites icônes, logos et graphiques d’e-mail en URI data:image/...;base64,... autonomes, en balises HTML <img> prêtes à copier et en déclarations CSS background-image — ou changez de mode pour inspecter et télécharger des charges utiles d’images Base64 brutes.',
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
    slug: 'verificateur-de-contraste-de-couleurs',
    name: 'Vérificateur de Contraste de Couleurs et Extracteur de Palette',
    shortDescription:
      'Testez les ratios de contraste de couleurs WCAG 2.1 AA/AAA, convertissez les valeurs HEX/RGB/HSL et extrayez les palettes de couleurs dominantes des images envoyées.',
    keywords: [
      'vérificateur contraste couleurs wcag',
      'ratio contraste accessibilité',
      'extracteur palette couleurs image',
      'sélecteur couleur hex rgb hsl',
      'calculateur ratio contraste wcag aa',
      'vérificateur contraste aaa en ligne',
      'combinaisons couleurs accessibles',
      'test contraste texte fond',
      'vérificateur accessibilité design',
    ],
    seo: {
      title: 'Vérificateur de Contraste de Couleurs – WCAG | UtilityFlow',
      description:
        'Vérifiez les ratios de contraste WCAG 2.1 AA et AAA pour les paires texte et fond, convertissez HEX, RGB et HSL, et extrayez des palettes depuis des images.',
      primaryKeyword: 'vérificateur contraste couleurs',
      secondaryKeywords: [
        'calculateur ratio contraste wcag aa aaa',
        'extraire palette couleurs depuis image',
        'vérificateur couleurs accessibles texte fond',
        'ratio contraste wcag texte normal et grand',
      ],
      longTailKeywords: [
        'tester ratio contraste wcag 2.1 texte normal et grand en ligne',
        'extraire nuances hex dominantes de capture vers vérificateur contraste',
        'vérifier accessibilité couleurs interface mode sombre avant fond',
        'quel ratio contraste passe wcag aa pour texte corps',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Validez les paires de couleurs d’interface par rapport aux seuils officiels WCAG 2.1 de luminance relative et de contraste (AA 4,5:1, AA Grand 3,0:1, AAA 7,0:1), modifiez les valeurs HEX/RGB/HSL synchronisées et envoyez des captures d’écran ou des logos pour extraire les nuances HEX dominantes directement dans vos emplacements Premier plan ou Arrière-plan.',
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
    slug: 'scanner-de-code-qr',
    name: 'Scanner de Code QR et Studio QR vCard',
    shortDescription:
      'Décodez les codes QR depuis des images envoyées ou la caméra de votre appareil, en privé dans le navigateur, ou créez des codes QR de contact vCard téléchargeables en PNG/SVG.',
    keywords: [
      'scanner code qr en ligne',
      'décoder code qr depuis image',
      'générateur code qr vcard',
      'lecteur qr caméra navigateur',
      'scanner code qr depuis capture',
      'lecteur code qr sans application',
      'décoder code qr png jpg',
      'scanner code qr wifi',
      'lecteur charge utile code qr',
    ],
    seo: {
      title: 'Scanner de Code QR – Décoder Images et vCard | UtilityFlow',
      description:
        'Scannez et décodez des codes QR depuis des captures, des photos ou votre webcam dans votre navigateur, ou créez un code QR de contact vCard en PNG et SVG.',
      primaryKeyword: 'scanner code qr',
      secondaryKeywords: [
        'lecteur image code qr en ligne',
        'scanner qr depuis capture gratuit',
        'générer code qr contact vcard',
        'lecteur qr webcam navigateur',
      ],
      longTailKeywords: [
        'décoder code qr depuis capture png ou jpg hors ligne',
        'scanner code qr avec webcam ordinateur sans installer application',
        'créer code qr contact vcard 3.0 téléchargeable svg et png',
        'lire code qr inversé mode sombre depuis capture',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lisez le contenu des codes QR depuis des captures d’écran, des photos ou un flux de caméra en direct facultatif directement dans votre navigateur — avec classification automatique de la charge utile (URL, Wi-Fi, vCard, Texte) — plus un **générateur de QR de contact vCard** compagnon qui exporte des cartes de contact PNG et SVG nettes.',
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
    slug: 'generateur-de-mots-de-passe',
    name: 'Générateur de Mots de Passe Cryptographiques et Passphrases',
    shortDescription:
      'Générez des mots de passe aléatoires sans biais et des passphrases de style Diceware avec crypto.getRandomValues et des calculs d’entropie exacts.',
    keywords: [
      'générateur mot de passe cryptographique',
      'générateur mot de passe aléatoire sécurisé',
      'générateur passphrase diceware',
      'mot de passe crypto getrandomvalues',
      'créateur mot de passe fort en ligne',
      'générateur passphrase aléatoire',
      'vérificateur entropie mot de passe',
      'générer mot de passe sécurisé gratuit',
      'outil mot de passe aléatoire sans biais',
    ],
    seo: {
      title: 'Générateur de Mots de Passe Sécurisés | UtilityFlow',
      description:
        'Générez un mot de passe aléatoire fort et des passphrases Diceware mémorables localement dans votre navigateur avec Web Crypto, sans stockage ni envoi.',
      primaryKeyword: 'générateur mot de passe',
      secondaryKeywords: [
        'générateur mot de passe sécurisé cryptographique',
        'générateur passphrase mémorable en ligne',
        'calculateur entropie mot de passe',
        'créateur mot de passe aléatoire avec symboles',
      ],
      longTailKeywords: [
        'générer mot de passe aléatoire avec crypto getrandomvalues sans biais modulo',
        'créer passphrase diceware de 5 mots localement hors ligne',
        'exclure caractères ambigus 0 o 1 l i générateur mot de passe',
        'combien de bits d’entropie pour mot de passe de 18 caractères',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Générez des mots de passe à haute entropie et des passphrases multi-mots mémorables à 100 % localement grâce au CSPRNG matériel de votre navigateur (window.crypto.getRandomValues), avec échantillonnage par rejet pour éliminer le biais modulo et mélange Fisher-Yates pour éviter les positions de caractères prévisibles.',
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
    slug: 'verificateur-de-hash-de-fichier',
    name: 'Vérificateur de Hash et de Somme de Contrôle de Fichier',
    shortDescription:
      'Calculez localement les sommes de contrôle SHA-256, SHA-512, SHA-384 et SHA-1 de fichiers binaires via Web Crypto SubtleCrypto et vérifiez les téléchargements.',
    keywords: [
      'vérificateur hash fichier',
      'vérificateur somme contrôle sha256 fichier',
      'vérifier hash fichier téléchargé en ligne',
      'générateur hash fichier sha512',
      'calculateur somme contrôle sha256',
      'vérifier intégrité fichier en ligne',
      'comparer somme contrôle fichier',
      'vérificateur hash sha384 sha1',
      'vérifier somme contrôle iso navigateur',
    ],
    seo: {
      title: 'Vérificateur de Hash de Fichier – SHA-256 | UtilityFlow',
      description:
        'Calculez les empreintes SHA-256, SHA-512, SHA-384 et SHA-1 de tout fichier local dans votre navigateur et comparez-les aux sommes publiées, gratuitement.',
      primaryKeyword: 'vérificateur hash fichier',
      secondaryKeywords: [
        'calculateur somme contrôle sha256 fichier',
        'vérifier sha256sum fichier en ligne',
        'digest fichier subtlecrypto navigateur',
        'vérificateur somme contrôle sha512',
      ],
      longTailKeywords: [
        'vérifier hash sha-256 installateur téléchargé sans terminal',
        'comparer somme contrôle binaire fichier avec chaîne sha256sum attendue',
        'calculer sha256 et sha512 localement sans envoi de fichier',
        'vérifier somme contrôle sha256 iso linux dans navigateur',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Vérifiez l’intégrité et l’authenticité des installateurs logiciels, archives, jeux de données et documents localement — en calculant les empreintes SHA-256, SHA-512, SHA-384 et SHA-1 via Web Crypto subtle.digest accéléré par le matériel, avec comparaison instantanée à la somme de contrôle attendue.',
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
    slug: 'generateur-de-favicon',
    name: 'Générateur de Favicon et d’Icônes d’Application (.ico et PNG)',
    shortDescription:
      'Générez des icônes PNG nettes multi-tailles (16×16 à 512×512) et un vrai favicon.ico binaire multi-cadres depuis un badge monogramme personnalisé ou un logo envoyé.',
    keywords: [
      'générateur favicon',
      'créer favicon.ico en ligne',
      'générateur icône apple touch',
      'texte vers favicon monogramme',
      'créateur favicon ico gratuit',
      'générateur icône pwa 192 512',
      'créateur favicon site web',
      'convertisseur png vers favicon',
      'générateur icône application en ligne',
    ],
    seo: {
      title: 'Générateur de Favicon – Icônes .ico et PNG | UtilityFlow',
      description:
        'Générez un vrai favicon.ico multi-cadres plus des icônes PNG 16–512 px, Apple Touch et PWA depuis votre logo ou un badge monogramme personnalisé, gratuitement.',
      primaryKeyword: 'générateur favicon',
      secondaryKeywords: [
        'convertisseur png vers ico multi-tailles',
        'créateur favicon monogramme',
        'générateur icônes pwa et apple touch',
        'créateur favicon ico en ligne gratuit',
      ],
      longTailKeywords: [
        'créer vrai favicon.ico binaire avec cadres 16x16 32x32 48x48 gratuit',
        'générer favicon site web et balises link html depuis initiales texte',
        'recadrer logo carré en icône apple touch cercle 180x180',
        'générer icônes pwa 192x192 et 512x512 pour manifeste web',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Concevez une icône monogramme propre en quelques secondes — ou envoyez le logo de votre marque existant — pour rendre des ressources PNG nettes au pixel près en 16×16, 32×32, 48×48, 180×180 Apple Touch et 192×192 / 512×512 PWA, plus un favicon.ico binaire multi-images conforme aux standards et un balisage HTML <link> prêt à coller.',
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
