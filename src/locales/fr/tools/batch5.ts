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
  },
};
