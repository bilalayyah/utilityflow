import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 3: Calculator tools (15 tools).
 * Source: src/registry/batches/batch3/calcToolsPart1.ts, Part2, Part3.
 * Filled by Phase 2 translation (French, international).
 */
export const FR_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'calculatrice-age',
    name: 'Calculatrice d’Âge',
    shortDescription:
      'Calculez votre âge chronologique exact en années, mois et jours, avec le total en semaines et en jours et un compte à rebours jusqu’à votre prochain anniversaire.',
    keywords: [
      'calculatrice d’âge',
      'âge chronologique',
      'calculatrice de date de naissance',
      'compte à rebours anniversaire',
      'âge exact en jours',
      'âge en années mois jours',
      'quel âge ai-je calculatrice',
      'calculatrice d’âge par date de naissance',
      'vérificateur d’âge anniversaire',
    ],
    seo: {
      title: 'Calculatrice d’Âge – Années, Mois et Jours | UtilityFlow',
      description:
        'Calculez votre âge exact à partir de votre date de naissance en années, mois et jours, avec le total en semaines et en jours et un compte à rebours gratuit.',
      primaryKeyword: 'calculatrice d’âge',
      secondaryKeywords: [
        'calculatrice d’âge chronologique',
        'quel âge ai-je selon ma date de naissance',
        'âge en jours semaines et mois',
        'calculer mon âge exact aujourd’hui',
      ],
      longTailKeywords: [
        'calculer âge exact en années mois et jours en ligne',
        'combien de jours avant mon prochain anniversaire',
        'vérifier âge à une date future ou passée',
        'quel âge ai-je aujourd’hui calculatrice',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calculez l’âge chronologique exact entre une date de naissance et aujourd’hui — ou n’importe quelle date passée ou future — en tenant compte avec précision de la durée variable des mois et des années bissextiles.',
  },
  'percentage-calculator': {
    slug: 'calculatrice-pourcentage',
    name: 'Calculatrice de Pourcentage',
    shortDescription:
      'Résolvez instantanément le pourcentage d’un nombre, le pourcentage que X représente de Y, ainsi que l’augmentation ou la diminution en pourcentage.',
    keywords: [
      'calculatrice de pourcentage',
      'calculatrice de variation en pourcentage',
      'augmentation diminution pourcentage',
      'quel pourcentage de',
      'calculatrice pourcentage d’un nombre',
      'calculatrice de différence en pourcentage',
      'calculer augmentation en pourcentage',
      'calculatrice de baisse en pourcentage',
      'calculatrice de formule de pourcentage',
    ],
    seo: {
      title: 'Calculatrice de Pourcentage – % et Variation | UtilityFlow',
      description:
        'Calculez X % de Y, trouvez le pourcentage qu’un nombre représente d’un autre et mesurez l’augmentation ou la baisse en pourcentage dans un seul espace gratuit.',
      primaryKeyword: 'calculatrice de pourcentage',
      secondaryKeywords: [
        'calculatrice de variation en pourcentage',
        'calculatrice d’augmentation en pourcentage',
        'ratio en pourcentage',
        'calculatrice pourcentage d’un nombre',
      ],
      longTailKeywords: [
        'calculer augmentation ou baisse en pourcentage entre deux nombres',
        'comment trouver le pourcentage de x par rapport à y',
        'calculatrice de pourcentage instantanée dans le navigateur',
        'calculatrice en ligne quel est x pour cent de y',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Résolvez en parallèle les trois questions de pourcentage les plus courantes : trouver X % d’une valeur, déterminer le pourcentage que X représente de Y et mesurer la croissance ou la baisse en pourcentage.',
  },
  'loan-emi-calculator': {
    slug: 'calculatrice-pret-emi',
    name: 'Calculatrice de Prêt et d’EMI',
    shortDescription:
      'Calculez vos mensualités EMI, le total des intérêts à payer et un tableau d’amortissement annuel ou mensuel.',
    keywords: [
      'calculatrice de prêt',
      'calculatrice emi',
      'tableau d’amortissement',
      'mensualité de prêt',
      'calculatrice de prêt emi',
      'calculatrice emi prêt personnel',
      'calculatrice emi prêt auto',
      'calculatrice emi prêt immobilier',
      'calculatrice d’intérêts emi',
    ],
    seo: {
      title: 'Calculatrice de Prêt et d’EMI – Mensualité | UtilityFlow',
      description:
        'Calculez vos mensualités (EMI), le coût total des intérêts et le tableau d’amortissement capital contre intérêts pour un prêt personnel, auto ou professionnel.',
      primaryKeyword: 'calculatrice de prêt emi',
      secondaryKeywords: [
        'calculatrice de mensualité de prêt',
        'tableau d’amortissement de prêt',
        'calculatrice de prêt auto',
        'calculatrice emi prêt personnel',
      ],
      longTailKeywords: [
        'calculer mensualité emi et intérêts totaux en ligne',
        'tableau de répartition capital et intérêts du prêt',
        'calculatrice de remboursement de prêt personnel et auto',
        'comment calculer l’emi d’un prêt immobilier en ligne',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calculez votre mensualité exacte (EMI), le total des intérêts payés sur la durée du prêt, la part capital-intérêts et un tableau d’amortissement transparent, année par année ou mois par mois.',
  },
  'mortgage-calculator': {
    slug: 'calculatrice-hypotheque',
    name: 'Calculatrice d’Hypothèque',
    shortDescription:
      'Estimez vos mensualités hypothécaires PITI, incluant l’apport, le taux d’intérêt, la taxe foncière, l’assurance et la PMI.',
    keywords: [
      'calculatrice d’hypothèque',
      'mensualité de prêt immobilier',
      'calculatrice piti',
      'apport hypothèque',
      'calculatrice de mensualité hypothécaire',
      'estimateur de paiement hypothécaire',
      'calculatrice pmi hypothèque',
      'calculatrice hypothèque 15 ou 30 ans',
      'calculatrice d’intérêts hypothécaires',
    ],
    seo: {
      title: 'Calculatrice d’Hypothèque – PITI et PMI | UtilityFlow',
      description:
        'Estimez vos mensualités hypothécaires avec apport, taxes foncières, assurance habitation, charges de copropriété et PMI — gratuit, dans votre navigateur.',
      primaryKeyword: 'calculatrice d’hypothèque',
      secondaryKeywords: [
        'calculatrice de paiement hypothécaire piti',
        'calculatrice d’intérêts de prêt immobilier',
        'estimateur pmi hypothèque',
        'calculatrice de mensualité hypothécaire',
      ],
      longTailKeywords: [
        'calculer mensualité hypothécaire avec taxe foncière et assurance',
        'comparer paiement hypothécaire 15 ans ou 30 ans',
        'estimer solde du prêt hypothécaire dans le temps',
        'combien puis-je payer par mois pour une hypothèque',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Modélisez votre véritable obligation mensuelle de logement (capital et intérêts, plus taxes foncières, assurance habitation, charges de copropriété et assurance hypothécaire privée), ainsi que les intérêts totaux sur toute la durée et le remboursement annuel du prêt.',
  },
  'compound-interest-calculator': {
    slug: 'calculatrice-interets-composes',
    name: 'Calculatrice d’Intérêts Composés',
    shortDescription:
      'Prévoyez la croissance d’un placement avec un dépôt initial, des versements mensuels récurrents, une fréquence de capitalisation et un ajustement pour l’inflation.',
    keywords: [
      'calculatrice d’intérêts composés',
      'calculatrice de croissance de placement',
      'épargne à intérêts composés',
      'calculatrice de valeur future',
      'calculatrice d’épargne composée',
      'calculatrice de capitalisation mensuelle',
      'calculatrice de rendement de placement',
      'calculatrice d’épargne retraite',
      'intérêts composés avec versements',
    ],
    seo: {
      title: 'Calculatrice d’Intérêts Composés – Épargne | UtilityFlow',
      description:
        'Prévoyez le solde futur d’un placement avec capital initial, versements mensuels, capitalisation au choix et tableau de croissance annuel, gratuitement.',
      primaryKeyword: 'calculatrice d’intérêts composés',
      secondaryKeywords: [
        'calculatrice d’épargne composée',
        'calculatrice de valeur future de placement',
        'croissance avec versements mensuels',
        'calculatrice de croissance de placement',
      ],
      longTailKeywords: [
        'calculer intérêts composés avec versements mensuels en ligne',
        'comparer croissance capitalisation mensuelle ou quotidienne',
        'tableau intérêts composés année par année',
        'combien mon épargne va-t-elle croître en 20 ans',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Prévoyez comment un montant initial unique, plus des dépôts mensuels réguliers, croît au fil des ans grâce aux intérêts composés, avec une fréquence de capitalisation au choix et un tableau annuel capital contre intérêts.',
  },
  'discount-margin-calculator': {
    slug: 'calculatrice-remise-marge',
    name: 'Calculatrice de Remise et de Marge',
    shortDescription:
      'Calculez les prix soldés avec des remises cumulées ou la marge bénéficiaire, le pourcentage de majoration et le bénéfice brut à partir du coût.',
    keywords: [
      'calculatrice de remise',
      'calculatrice de marge bénéficiaire',
      'marge ou majoration',
      'calculatrice de prix soldé',
      'calculatrice de marge brute',
      'calculatrice de pourcentage de majoration',
      'calculatrice de remises cumulées',
      'calculatrice de majoration commerciale',
      'prix soldé après remise',
    ],
    seo: {
      title: 'Calculatrice de Remise et de Marge – Prix | UtilityFlow',
      description:
        'Calculez les prix de vente finaux avec remises cumulées et taxes, ou comparez la marge brute et la majoration à partir du coût et du prix de vente, gratuit.',
      primaryKeyword: 'calculatrice de remise et de marge',
      secondaryKeywords: [
        'calculatrice de prix soldé avec remise',
        'calculatrice marge brute ou majoration',
        'calculatrice de bénéfice commercial',
        'calculatrice de prix remisé',
      ],
      longTailKeywords: [
        'calculer prix final après double remise et taxe de vente',
        'différence entre marge bénéficiaire et pourcentage de majoration',
        'calculatrice de marge et bénéfice par référence e-commerce',
        'calculer marge en pourcentage à partir du coût et du prix',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Basculez facilement entre le mode Remise commerciale (remises cumulées plus taxe de vente facultative) et le mode Marge bénéficiaire et majoration pour fixer vos prix avec précision, sans confondre marge et majoration.',
  },
  'vat-tax-calculator': {
    slug: 'calculatrice-tva-taxes',
    name: 'Calculatrice de TVA et de Taxe de Vente',
    shortDescription:
      'Ajoutez la TVA, la TPS ou la taxe de vente aux prix nets, ou extrayez proprement la taxe des factures brutes taxes comprises.',
    keywords: [
      'calculatrice de tva',
      'calculatrice de taxe de vente',
      'calculatrice de tva inverse',
      'calculatrice de taxe tps',
      'ajouter tva au prix',
      'extraire taxe du brut',
      'calculatrice tva incluse',
      'taxe de vente sur le total',
      'calculatrice de prix net',
    ],
    seo: {
      title: 'Calculatrice de TVA et de Taxe – Net et Brut | UtilityFlow',
      description:
        'Ajoutez la TVA, la TPS ou la taxe de vente à un sous-total net, ou extrayez la taxe et le prix net hors taxe d’un total brut taxes comprises, gratuitement.',
      primaryKeyword: 'calculatrice de tva',
      secondaryKeywords: [
        'calculatrice de tva inverse',
        'exclure la taxe de vente du total',
        'calculatrice tps incluse ou exclue',
        'calculatrice d’ajout de taxe de vente',
      ],
      longTailKeywords: [
        'comment retirer la tva d’un prix brut en ligne',
        'ajouter 20 pour cent de tva ou un taux personnalisé',
        'calculatrice de détail net taxe et brut de facture',
        'calculer la tva à l’envers à partir du prix total',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calculez le prix net, le montant de la taxe et le total brut dans les deux sens : ajoutez la TVA, la TPS ou la taxe de vente à un sous-total hors taxe, ou extrayez le montant exact hors taxe d’un reçu déjà taxes comprises.',
  },
  'salary-calculator': {
    slug: 'calculatrice-salaire',
    name: 'Calculatrice de Salaire et de Paie',
    shortDescription:
      'Convertissez les rémunérations horaires, journalières, hebdomadaires, bimensuelles, mensuelles et annuelles avec des heures et des semaines par an personnalisées.',
    keywords: [
      'calculatrice de salaire',
      'salaire horaire vers annuel',
      'convertisseur de paie',
      'calculatrice de salaire horaire',
      'salaire annuel vers horaire',
      'calculatrice de salaire mensuel',
      'calculatrice de paie bimensuelle',
      'convertisseur de salaire brut',
      'salaire vers taux horaire',
    ],
    seo: {
      title: 'Calculatrice de Salaire – Horaire vers Annuel | UtilityFlow',
      description:
        'Convertissez les salaires horaires, journaliers, hebdomadaires, bimensuels, mensuels et annuels avec des heures par semaine et des semaines payées au choix.',
      primaryKeyword: 'calculatrice de salaire',
      secondaryKeywords: [
        'calculatrice salaire horaire vers salaire',
        'salaire annuel vers taux horaire',
        'calculatrice de paie bimensuelle',
        'convertisseur de salaire brut',
      ],
      longTailKeywords: [
        'convertir 50 dollars de l’heure en salaire annuel',
        'détail du salaire brut avec semaines de vacances non payées',
        'convertisseur de rémunération avec heures par semaine personnalisées',
        'convertir salaire annuel en paie mensuelle et bimensuelle',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Convertissez n’importe quel taux de rémunération — horaire, journalier, hebdomadaire, bimensuel, bimensuel calendaire, mensuel ou annuel — dans toutes les fréquences de paie, avec des heures de travail par semaine et des semaines payées par an configurables.',
  },
  'tip-calculator': {
    slug: 'calculatrice-pourboire',
    name: 'Calculatrice de Pourboire et de Partage d’Addition',
    shortDescription:
      'Calculez les montants de pourboire, l’exclusion facultative de la taxe avant pourboire, les partages d’addition par personne et un arrondi propre.',
    keywords: [
      'calculatrice de pourboire',
      'calculatrice de partage d’addition',
      'calculatrice de pourboire au restaurant',
      'partager l’addition à parts égales',
      'calculatrice de pourcentage de pourboire',
      'calculatrice de partage de facture',
      'calculatrice de pourboire de service',
      'pourboire sur addition hors taxe',
      'diviseur d’addition de restaurant',
    ],
    seo: {
      title: 'Calculatrice de Pourboire – Partage et Service | UtilityFlow',
      description:
        'Calculez les pourboires au restaurant avec des préréglages rapides, le pourboire sur le sous-total hors taxe et le partage égal de l’addition entre convives.',
      primaryKeyword: 'calculatrice de pourboire',
      secondaryKeywords: [
        'calculatrice de partage d’addition',
        'calculatrice de pourboire de service',
        'partage de pourboire au restaurant',
        'pourboire par personne au restaurant',
      ],
      longTailKeywords: [
        'calculer pourboire de 18 ou 20 pour cent avant taxe en ligne',
        'partager l’addition du dîner et le pourboire entre amis',
        'arrondir le total par personne au restaurant',
        'partager l’addition avec pourboire et taxe par personne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calculez rapidement un pourboire équitable et divisez les additions de restaurant, de livraison ou de sortie de groupe à parts égales entre n’importe quel nombre de personnes — avec exclusion facultative de la taxe et arrondi de l’addition.',
  },
  'bmi-calculator': {
    slug: 'calculatrice-imc',
    name: 'Calculatrice d’IMC',
    shortDescription:
      'Calculez l’indice de masse corporelle (IMC) en unités métriques ou impériales, avec les catégories de poids de l’OMS et la fourchette de poids santé.',
    keywords: [
      'calculatrice d’imc',
      'indice de masse corporelle',
      'fourchette de poids santé',
      'imc métrique impérial',
      'calculer imc',
      'calculatrice de tableau imc',
      'imc pour adultes',
      'calculatrice de poids santé',
      'calculatrice imc kg m2',
    ],
    seo: {
      title: 'Calculatrice d’IMC – Indice de Masse et Poids | UtilityFlow',
      description:
        'Calculez votre indice de masse corporelle en unités métriques ou impériales, voyez la catégorie de poids OMS et la fourchette de poids santé pour votre taille.',
      primaryKeyword: 'calculatrice d’imc',
      secondaryKeywords: [
        'calculatrice d’indice de masse corporelle',
        'fourchette de poids santé imc',
        'calculatrice d’imc impérial',
        'calculatrice de catégorie de poids imc',
      ],
      longTailKeywords: [
        'calculer imc en pieds pouces et livres',
        'catégories imc adultes organisation mondiale de la santé',
        'trouver fourchette de poids santé pour sa taille',
        'quelle est la fourchette d’imc santé pour ma taille',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Calculez l’indice de masse corporelle (IMC) des adultes en utilisant des mesures métriques (cm/kg) ou impériales (pi, po/lb), vérifiez les tranches de classification de l’Organisation mondiale de la Santé et consultez la fourchette de poids santé 18,5–24,9 pour votre taille.',
  },
  'calorie-calculator': {
    slug: 'calculatrice-calories',
    name: 'Calculatrice de Calories et de TDEE',
    shortDescription:
      'Estimez votre métabolisme de base (MB) et votre dépense énergétique quotidienne totale (TDEE) avec des objectifs de poids cibles.',
    keywords: [
      'calculatrice de calories',
      'calculatrice tdee',
      'calculatrice bmr',
      'apport calorique quotidien',
      'calculatrice de calories de maintien',
      'calculatrice de déficit calorique',
      'calculatrice de calories pour perdre du poids',
      'calculatrice de macros protéines glucides lipides',
      'combien de calories par jour',
    ],
    seo: {
      title: 'Calculatrice de Calories et TDEE – MB | UtilityFlow',
      description:
        'Estimez votre MB et votre TDEE avec la formule de Mifflin-St Jeor, fixez vos objectifs de perte ou de gain de poids et planifiez vos macros en grammes.',
      primaryKeyword: 'calculatrice de calories',
      secondaryKeywords: [
        'calculatrice tdee',
        'calculatrice bmr mifflin st jeor',
        'calculatrice de besoins caloriques quotidiens',
        'déficit calorique pour perdre du poids',
      ],
      longTailKeywords: [
        'calculer calories de maintien et déficit de perte de poids en ligne',
        'estimateur de dépense calorique quotidienne mifflin st jeor',
        'calculatrice de répartition des macros tdee métrique et impériale',
        'combien de calories dois-je manger par jour pour maigrir',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Estimez votre métabolisme de base (MB) et votre dépense énergétique quotidienne totale (TDEE) avec l’équation de Mifflin-St Jeor, validée cliniquement, avec des objectifs de macros pour un léger déficit, une perte de graisse standard, un gain maigre et le maintien.',
  },
  'date-difference-calculator': {
    slug: 'calculatrice-difference-dates',
    name: 'Calculatrice de Différence de Dates',
    shortDescription:
      'Trouvez les années, mois, jours, jours de semaine et jours de week-end exacts entre deux dates, ou ajoutez et soustrayez des intervalles calendaires.',
    keywords: [
      'calculatrice de différence de dates',
      'jours entre deux dates',
      'compteur de jours de semaine',
      'ajouter des jours à une date',
      'calculatrice de jours entre deux dates',
      'calculatrice de jours ouvrés',
      'compter les jours de semaine entre deux dates',
      'combien de jours avant une date',
      'addition et soustraction de dates',
    ],
    seo: {
      title: 'Calculatrice de Différence de Dates – Jours | UtilityFlow',
      description:
        'Comptez les années, mois, jours, jours de semaine et jours de week-end exacts entre deux dates, ou ajoutez et soustrayez des intervalles calendaires en ligne.',
      primaryKeyword: 'calculatrice de différence de dates',
      secondaryKeywords: [
        'jours entre deux dates',
        'compteur de jours ouvrés de semaine',
        'calculatrice d’ajout de mois à une date',
        'compter les jours de week-end entre deux dates',
      ],
      longTailKeywords: [
        'compter jours de semaine et jours de week-end entre deux dates',
        'calculer mois et jours calendaires exacts entre deux dates',
        'ajouter ou soustraire années mois jours à une date',
        'combien de jours de semaine entre deux dates en ligne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mesurez des durées calendaires exactes entre deux dates — y compris le décompte des jours de semaine par rapport aux jours de week-end et le comptage facultatif de la date de fin incluse — ou ajoutez et soustrayez des années, des mois et des jours à une date de référence.',
  },
  'time-duration-calculator': {
    slug: 'calculatrice-duree-temps',
    name: 'Calculatrice de Durée de Temps',
    shortDescription:
      'Calculez le temps écoulé HH:MM:SS entre deux heures (avec pauses et quarts de nuit) ou additionnez des feuilles de temps à plusieurs lignes.',
    keywords: [
      'calculatrice de durée de temps',
      'calculatrice d’heures',
      'calculatrice de feuille de temps',
      'calculatrice de temps écoulé',
      'calculatrice d’heures de travail',
      'temps écoulé entre deux heures',
      'calculatrice d’addition d’heures et minutes',
      'calculatrice d’heures décimales',
      'calculatrice d’heures de quart',
    ],
    seo: {
      title: 'Calculatrice de Durée – Heures et Feuilles | UtilityFlow',
      description:
        'Calculez le temps écoulé entre deux heures, déduisez les pauses non payées, gérez les quarts de nuit ou additionnez les feuilles de temps en heures décimales.',
      primaryKeyword: 'calculatrice de durée de temps',
      secondaryKeywords: [
        'calculatrice d’heures de travail',
        'additionneur de durées de feuille de temps',
        'convertisseur d’heures décimales',
        'calculatrice d’heures de quart de nuit',
      ],
      longTailKeywords: [
        'calculer temps écoulé avec pause déjeuner non payée et nuit',
        'convertir durée hh mm ss en heures décimales',
        'additionner plusieurs lignes d’heures minutes secondes',
        'comment calculer les heures de travail avec pause déjeuner',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Déterminez les heures, minutes et secondes exactes écoulées entre deux heures — en gérant les déductions de pauses non payées et les quarts de nuit qui traversent minuit — ou additionnez des lignes de durée illimitées en heures décimales de paie.',
  },
  'unit-converter': {
    slug: 'convertisseur-unites',
    name: 'Convertisseur d’Unités',
    shortDescription:
      'Convertissez les unités de longueur, de poids, de température, de surface, de volume, de vitesse et de stockage numérique avec un tableau de référence complet.',
    keywords: [
      'convertisseur d’unités',
      'convertisseur métrique impérial',
      'convertisseur longueur poids température',
      'convertisseur de stockage numérique',
      'convertisseur mètres en pieds',
      'convertisseur kg en livres',
      'convertisseur celsius en fahrenheit',
      'convertisseur litres en gallons',
      'convertisseur km en miles',
    ],
    seo: {
      title: 'Convertisseur d’Unités – Longueur et Poids | UtilityFlow',
      description:
        'Convertissez longueur, poids, température, surface, volume, vitesse et stockage numérique entre unités métriques et impériales, avec un tableau complet.',
      primaryKeyword: 'convertisseur d’unités',
      secondaryKeywords: [
        'convertisseur métrique vers impérial',
        'température celsius fahrenheit kelvin',
        'convertisseur de données go en gio',
        'convertisseur kilomètres en miles',
      ],
      longTailKeywords: [
        'convertir kilomètres en miles et kilogrammes en livres en ligne',
        'convertisseur de stockage gigaoctet décimal ou gibioctet binaire',
        'convertisseur d’unités scientifique et technique avec tableau',
        'comment convertir celsius en fahrenheit et kelvin en ligne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convertissez instantanément dans sept familles de mesures — longueur, poids et masse, température, surface, volume, vitesse et stockage numérique — avec un tableau automatique côte à côte montrant chaque unité de la catégorie.',
  },
  'roman-numeral-converter': {
    slug: 'convertisseur-chiffres-romains',
    name: 'Convertisseur de Chiffres Romains',
    shortDescription:
      'Convertissez les nombres en chiffres romains et les chiffres romains en nombres instantanément, y compris les dates en chiffres romains.',
    keywords: [
      'convertisseur chiffres romains',
      'chiffres romains en nombres',
      'convertir nombres en chiffres romains',
      'convertisseur de dates romaines',
      'calculatrice chiffres romains',
      'quel nombre est MMXXVI',
      'chiffres romains de 1 à 3999',
      'convertir année en chiffres romains',
      'tableau chiffres romains',
    ],
    seo: {
      title: 'Convertisseur Chiffres Romains – 1 à 3999 | UtilityFlow',
      description:
        'Convertissez les nombres en chiffres romains et les chiffres romains en nombres. Essayez le convertisseur gratuit pour les années et les anniversaires.',
      primaryKeyword: 'convertisseur chiffres romains',
      secondaryKeywords: [
        'chiffres romains en nombres',
        'convertir nombres en chiffres romains',
        'convertisseur de dates romaines',
        'calculatrice chiffres romains',
      ],
      longTailKeywords: [
        'comment convertir un nombre en chiffres romains',
        'que vaut 2026 en chiffres romains',
        'convertir mon anniversaire en chiffres romains',
        'convertir une année en chiffres romains en ligne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convertissez n’importe quel nombre entier de 1 à 3999 en chiffres romains, ou lisez les chiffres romains comme des nombres ordinaires, et transformez aussi une date complète en chiffres romains, instantanément dans votre navigateur.',
  },
  'online-hourly-calculator': {
    slug: 'calculateur-d-heures-en-ligne',
    name: 'Calculateur d’Heures en Ligne',
    shortDescription:
      'Calculez les heures entre deux horaires, les heures de travail avec pauses, les heures décimales et le salaire horaire — gratuit, dans votre navigateur.',
    keywords: [
      'calculateur d’heures en ligne',
      'calculateur heures de travail',
      'calculer heures entre deux horaires',
      'calculateur salaire horaire',
      'calculateur heures décimales',
      'calculateur heures supplémentaires',
      'additionner soustraire temps',
      'combien d’heures travaillées',
    ],
    seo: {
      title: 'Calculateur d’Heures en Ligne – Heures et Salaire | UtilityFlow',
      description:
        'Utilisez notre calculateur d’heures en ligne gratuit pour calculer les heures de travail, les écarts de temps, les pauses, les heures décimales et les gains horaires instantanément.',
      primaryKeyword: 'calculateur d’heures en ligne',
      secondaryKeywords: [
        'calculateur heures de travail',
        'calculer heures entre deux horaires',
        'calculateur salaire horaire',
        'calculateur heures décimales',
      ],
      longTailKeywords: [
        'comment calculer les heures entre deux horaires',
        'comment calculer les heures de travail avec pause',
        'convertir heures et minutes en heures décimales',
        'calculer le salaire horaire avec heures supplémentaires',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calculez les heures entre deux horaires au format 12 ou 24 heures, suivez les postes avec des pauses programmées, additionnez ou soustrayez du temps, convertissez heures et minutes en heures décimales et transformez les heures travaillées en salaire — avec heures supplémentaires, pauses et votre devise, instantanément dans votre navigateur.',
  },
  'heat-index-calculator': {
    slug: 'calculateur-indice-de-chaleur',
    name: 'Calculateur d’Indice de Chaleur',
    shortDescription: 'Calculez l’indice de chaleur à partir de la température de l’air et de l’humidité relative — découvrez la température ressentie, en Fahrenheit et en Celsius, gratuitement dans votre navigateur.',
    keywords: ['calculateur indice de chaleur', 'indice de chaleur', 'calculer indice de chaleur', 'calculateur température ressentie', 'calculateur température et humidité', 'indice de chaleur fahrenheit', 'indice de chaleur celsius', 'qu’est-ce que l’indice de chaleur', 'tableau indice de chaleur'],
    seo: {
      title: 'Calculateur d’Indice de Chaleur – Calculer la Température Ressentie | UtilityFlow',
      description: 'Calculez l’indice de chaleur avec la température de l’air et l’humidité. Découvrez la température ressentie avec notre calculateur gratuit d’indice de chaleur en Fahrenheit et Celsius.',
      primaryKeyword: 'calculateur indice de chaleur',
      secondaryKeywords: ['calculateur température ressentie', 'calculateur température et humidité', 'indice de chaleur fahrenheit', 'indice de chaleur celsius'],
      longTailKeywords: ['comment calculer l’indice de chaleur avec température et humidité', 'quel est l’indice de chaleur à 90 degrés', 'comment l’humidité affecte la température ressentie', 'calculer la température apparente en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'Saisissez la température de l’air et l’humidité relative pour savoir quelle chaleur vous ressentez vraiment : l’indice de chaleur en Fahrenheit et en Celsius, l’écart avec la température mesurée et le niveau de risque, instantanément dans votre navigateur.',
  },
};
