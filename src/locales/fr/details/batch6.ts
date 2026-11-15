// Detail content for FR tools — split out of
// src/locales/fr/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
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
          'Le slug est la dernière partie lisible d’une URL, comme « best-cafe-tools », tandis que le permalien est l’URL complète, domaine et dossiers inclus. Pour une conversion rapide de texte pour développeurs avec des underscores, voir Convertisseur de Texte en Slug.',
      },
    ],
  },
  'keyword-density-checker': {
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
          'La densité de mots-clés est la fréquence d’apparition d’un mot ou d’une expression en pourcentage du nombre total de mots d’un texte. Une expression utilisée 5 fois dans 500 mots a une densité de 1 %. Pour des tableaux de fréquence complets avec export CSV, voir Compteur de Fréquence de Mots.',
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
};
