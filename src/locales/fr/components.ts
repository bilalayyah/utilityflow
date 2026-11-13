import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the fr locale.
 * GENERATED — assembled from .restructure-work fragments (group1/group2 JSON
 * + group2-ts TypeScript for function-valued entries). Do not hand-edit;
 * the source of truth is the per-component STRINGS_EN tables plus these
 * per-language fragments. Loaded only when the fr locale is selected.
 */
export const frComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "Texte à convertir (casse)",
      "placeholder": "Saisissez ou collez du texte, puis cliquez sur un bouton de conversion ci-dessous...",
      "copyResult": "Copier le résultat"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Rédigez des textes clairs et concis qui respectent les limites de caractères des plateformes, sans coupure gênante dans les résultats de recherche ou les flux sociaux.",
      "withSpaces": "Avec espaces",
      "withoutSpaces": "Sans espaces",
      "words": "Mots",
      "letters": "Lettres",
      "digits": "Chiffres",
      "utf8Bytes": "Octets UTF-8",
      "copyText": "Copier le texte",
      "textToMeasure": "Texte pour mesurer la longueur en caractères",
      "placeholder": "Saisissez ou collez du texte pour voir les nombres exacts de caractères, la taille en octets et les limites des plateformes...",
      "whitespaceChars": "Caractères d'espacement",
      "lines": "Lignes",
      "platformLimitsTitle": "Limites de caractères des plateformes et du SEO",
      "over": "en trop",
      "left": "restants",
      "platformLimits": [
        {
          "name": "Meta titre SEO",
          "note": "Longueur recommandée du titre Google"
        },
        {
          "name": "Meta description SEO",
          "note": "Seuil standard de l'extrait sur ordinateur"
        },
        {
          "name": "Segment SMS",
          "note": "Un seul message SMS GSM-7"
        },
        {
          "name": "Publication X / Twitter",
          "note": "Longueur standard de publication"
        },
        {
          "name": "Aperçu de légende Instagram",
          "note": "Visible avant la troncature « Plus »"
        },
        {
          "name": "Publication LinkedIn",
          "note": "Mise à jour standard maximale du fil"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Rechercher",
      "replaceWith": "Remplacer par",
      "findPlaceholder": "Texte à rechercher...",
      "replacePlaceholder": "Texte de remplacement...",
      "caseSensitive": "Respecter la casse",
      "wholeWordOnly": "Mots entiers uniquement",
      "useRegex": "Utiliser une expression régulière (RegExp)",
      "regexError": "Erreur regex :",
      "invalidRegex": "Expression régulière invalide.",
      "sourceText": "Texte source",
      "updatedOutput": "Sortie mise à jour",
      "match": "correspondance",
      "matches": "correspondances",
      "replaced": "remplacées",
      "sourcePlaceholder": "Collez le texte à rechercher et remplacer...",
      "outputPlaceholder": "L'aperçu du texte remplacé apparaît ici...",
      "copyResult": "Copier le résultat"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Préfixe de ligne",
      "lineSuffix": "Suffixe de ligne",
      "startNumber": "Numéro de départ",
      "numberSeparator": "Séparateur de numéro",
      "addLineNumbers": "Ajouter des numéros de ligne",
      "zeroPad": "Numéros avec zéros (01, 02)",
      "skipEmptyLines": "Ignorer les lignes vides",
      "inputLines": "Lignes d'entrée",
      "formattedLines": "Lignes formatées",
      "copyResult": "Copier le résultat",
      "inputPlaceholder": "Collez une valeur ou une ligne par ligne...",
      "outputPlaceholder": "Les lignes numérotées ou entourées apparaissent ici..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Quantité",
      "unit": "Unité",
      "unitLabels": {
        "paragraphs": "paragraphes",
        "sentences": "phrases",
        "words": "mots"
      },
      "startClassic": "Commencer par « Lorem ipsum »",
      "wrapHtml": "Entourer de balises <p>",
      "words": "mots",
      "characters": "caractères",
      "regenerate": "Régénérer",
      "copyPlaceholder": "Copier le texte d'exemple",
      "generatedText": "Texte d'exemple généré"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# Notes de version d'UtilityFlow\n\nBienvenue dans **Markdown Previewer**, un éditeur rapide côté client avec export *HTML* en direct.\n\n## Fonctionnalités clés\n\n- Mise en forme instantanée pour les titres, les listes et les liens\n- Échappement HTML sécurisé sans aucun envoi distant\n- Copie et téléchargement du HTML brut en un clic\n\n> Gardez la documentation près du travail et vérifiez la structure avant de publier.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nEn savoir plus sur [UtilityFlow](/tools/).",
      "renderedPreview": "Aperçu rendu",
      "rawHtml": "HTML brut",
      "exportHtml": "Exporter le HTML",
      "copyHtml": "Copier le HTML",
      "markdownSource": "Source Markdown",
      "livePreview": "Aperçu en direct",
      "compiledHtml": "HTML compilé",
      "compiledHtmlAria": "Code source HTML compilé",
      "inputPlaceholder": "Écrivez du Markdown (# Titre, **gras**, - liste, [lien](https://...))...",
      "emptyPreview": "L'aperçu apparaîtra au fur et à mesure de votre saisie Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "Une rédaction technique claire respecte le temps du lecteur. Utilisez des noms concrets et des verbes actifs chaque fois que possible pour que les instructions complexes restent faciles à suivre.\n\nLes phrases longues remplies de propositions imbriquées obligent les lecteurs à relire les paragraphes. Diviser les explications denses en étapes plus courtes rend la documentation plus rapide à parcourir et plus simple à appliquer.",
      "level": "Niveau :",
      "textToCheck": "Texte à vérifier (lisibilité)",
      "placeholder": "Collez votre article, votre essai ou le texte de votre page d'accueil pour calculer la facilité de lecture Flesch et les scores de niveau scolaire...",
      "fleschEase": "Facilité de lecture Flesch",
      "fleschKincaid": "Niveau Flesch-Kincaid",
      "usGrade": "Niveau scolaire américain",
      "gunningFog": "Indice Gunning Fog",
      "yearsEducation": "Années d'études",
      "smog": "Indice SMOG",
      "polysyllable": "Complexité polysyllabique",
      "structuralBreakdown": "Répartition structurelle",
      "wordsSentences": "Mots / Phrases",
      "avgSentenceLength": "Longueur moyenne des phrases",
      "words": "mots",
      "avgSyllablesPerWord": "Moyenne de syllabes par mot",
      "complexWords": "Mots complexes (3+ syllabes)",
      "longWordsDetected": "Mots longs détectés (3+ syllabes)",
      "noLongWords": "Aucun mot de 3+ syllabes trouvé dans ce passage.",
      "emptyState": "Saisissez au moins une phrase ci-dessus pour voir les formules de lisibilité et les ratios structurels.",
      "levels": [
        {
          "level": "Très facile",
          "audience": "5e année (10–11 ans)"
        },
        {
          "level": "Facile",
          "audience": "6e année (11–12 ans)"
        },
        {
          "level": "Assez facile",
          "audience": "7e année (12–13 ans)"
        },
        {
          "level": "Standard",
          "audience": "8e–9e année (13–15 ans)"
        },
        {
          "level": "Assez difficile",
          "audience": "10e–12e année"
        },
        {
          "level": "Difficile",
          "audience": "Niveau universitaire"
        },
        {
          "level": "Très difficile",
          "audience": "Diplômé universitaire / spécialiste"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Respecter la casse",
      "trimWhitespace": "Supprimer les espaces",
      "removeEmptyLines": "Supprimer les lignes vides",
      "sortAlphabetically": "Trier par ordre alphabétique",
      "originalLines": "Lignes d'origine",
      "lines": "lignes",
      "uniqueLines": "Lignes uniques",
      "unique": "uniques",
      "removed": "supprimées",
      "inputPlaceholder": "Collez une liste avec un élément par ligne...",
      "outputPlaceholder": "Le résultat sans doublons apparaîtra ici..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Respecter la casse",
      "ignoreBlankLines": "Ignorer les lignes vides",
      "removeDuplicates": "Supprimer les doublons",
      "inputLines": "Lignes d'entrée",
      "sortedLines": "Lignes triées",
      "copySorted": "Copier les lignes triées",
      "inputPlaceholder": "Saisissez un élément par ligne...",
      "outputPlaceholder": "Le résultat trié apparaît ici...",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "A → Z"
        },
        {
          "id": "alpha-desc",
          "label": "Z → A"
        },
        {
          "id": "natural",
          "label": "Naturel (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Les plus courtes d'abord"
        },
        {
          "id": "length-desc",
          "label": "Les plus longues d'abord"
        },
        {
          "id": "reverse-order",
          "label": "Ordre inverse"
        },
        {
          "id": "shuffle",
          "label": "Mélanger"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Ignorer les espaces",
      "ignoreCase": "Ignorer la casse",
      "originalText": "Texte d'origine",
      "modifiedText": "Texte modifié",
      "originalPlaceholder": "Collez le texte d'origine...",
      "modifiedPlaceholder": "Collez le texte mis à jour...",
      "lineComparison": "Comparaison des lignes",
      "added": "ajoutées",
      "removed": "supprimées",
      "unchanged": "inchangées",
      "emptyState": "Saisissez du texte dans les deux zones ci-dessus pour comparer les lignes ajoutées et supprimées."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Première ligne de texte\nDeuxième ligne de texte\nTroisième ligne de texte",
      "originalText": "Texte d'origine",
      "reversedOutput": "Sortie inversée",
      "inputPlaceholder": "Saisissez du texte ou des lignes à inverser...",
      "outputPlaceholder": "Le texte inversé apparaît ici...",
      "modes": [
        {
          "id": "characters",
          "label": "Inverser les caractères"
        },
        {
          "id": "words",
          "label": "Inverser l'ordre des mots"
        },
        {
          "id": "each-word",
          "label": "Inverser chaque mot"
        },
        {
          "id": "lines",
          "label": "Inverser l'ordre des lignes"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 meilleures façons de formater du JSON en ligne !\nCafé et crème : guide pour 2026\nComment créer un site statique rapide sur Cloudflare Pages",
      "hyphen": "Trait d'union (-)",
      "underscore": "Tiret bas (_)",
      "forceLowercase": "Forcer les minuscules",
      "stripStopWords": "Supprimer les mots vides courants",
      "titlesLabel": "Titres ou phrases (un par ligne pour le mode par lot)",
      "inputPlaceholder": "Saisissez un titre de blog, un nom de produit ou une liste de titres...",
      "generatedSlugs": "Slugs d'URL générés",
      "copySlugs": "Copier les slugs",
      "outputPlaceholder": "les-slugs-d-url-propres-apparaissent-ici"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Première   ligne avec   des espaces   en trop.   \n\n   Deuxième ligne   avec   des tabulations\tet   des écarts.\n\n\nTroisième   ligne ici.   ",
      "collapseSpaces": "Réduire les espaces multiples",
      "trimEdges": "Supprimer les espaces en bord de ligne",
      "tabsToSpaces": "Convertir les tabulations en espaces",
      "lineBreaks": "Sauts de ligne :",
      "keepBreaks": "Conserver les sauts de ligne",
      "removeBlankLines": "Supprimer les lignes vides",
      "replaceWithSpaces": "Remplacer par des espaces",
      "removeAllBreaks": "Supprimer tous les sauts",
      "inputText": "Texte d'entrée",
      "chars": "caractères",
      "cleanedText": "Texte nettoyé",
      "removed": "supprimés",
      "inputPlaceholder": "Collez du texte désordonné avec des espaces en trop, des tabulations ou des lignes vides...",
      "outputPlaceholder": "Le résultat nettoyé apparaît automatiquement..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow traite chaque calcul de texte directement dans votre navigateur. Que vous rédigiez un article de blog, peaufiniez une annonce produit ou vérifiiez un essai académique avec une limite stricte de mots, les comptes instantanés vous aident à rythmer votre message clairement.\n\nLes phrases courtes améliorent la lecture. Varier la longueur des phrases rend les guides longs attrayants pour les lecteurs sur ordinateur et mobile.",
      "words": "Mots",
      "characters": "Caractères",
      "noSpaces": "Sans espaces",
      "sentences": "Phrases",
      "paragraphs": "Paragraphes",
      "readingTime": "Temps de lecture",
      "downloadTxt": "Télécharger .txt",
      "copyText": "Copier le texte",
      "textToCount": "Texte à compter",
      "placeholder": "Collez ou saisissez votre texte ici pour compter les mots, les caractères, les phrases et le temps de lecture...",
      "deliveryTimingLines": "Temps de lecture et lignes",
      "speakingTime": "Temps de parole (130 mpm)",
      "totalLines": "Nombre total de lignes",
      "avgWordLength": "Longueur moyenne des mots",
      "chars": "caractères",
      "mostFrequentWords": "Mots les plus fréquents",
      "emptyKeywords": "Saisissez du texte ci-dessus pour voir les mots les plus répétés."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Les audits SEO techniques vérifient l'explorabilité, les liens internes et la vitesse des pages. Les pages rapides améliorent l'engagement des utilisateurs et les signaux de vitesse des pages dans la recherche mobile. Les liens internes relient les guides associés et renforcent la structure SEO technique.",
      "ngramLabels": {
        "1": "1 mot",
        "2": "Expressions de 2 mots",
        "3": "Expressions de 3 mots"
      },
      "excludeStopWords": "Exclure les mots vides courants",
      "minLength": "Longueur min. :",
      "textForAnalysis": "Texte pour l'analyse de fréquence",
      "placeholder": "Collez des textes d'articles, des descriptions de produits ou des notes pour compter les termes répétés et la densité des mots-clés...",
      "totalWords": "Nombre total de mots :",
      "uniqueTerms": "Termes uniques :",
      "exportCsv": "Exporter CSV",
      "copyCsv": "Copier CSV",
      "rank": "#",
      "termPhrase": "Terme / Expression",
      "count": "Nombre",
      "density": "Densité",
      "emptyState": "Saisissez du texte ci-dessus pour voir les nombres de mots et les pourcentages de densité des mots-clés."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Veuillez saisir des dates de calendrier valides.",
      "errorDobAfterTarget": "La date de naissance ne peut pas être postérieure à la date cible.",
      "dobLabel": "Date de naissance",
      "targetLabel": "Âge à la date",
      "exactAge": "Âge chronologique exact",
      "yearsWord": "ans",
      "monthsWord": "mois",
      "daysWord": "jours",
      "nextBirthday": "Prochain anniversaire",
      "turning": "vous aurez",
      "inWord": "dans",
      "totalMonths": "Total des mois",
      "totalWeeks": "Total des semaines",
      "totalDays": "Total des jours",
      "totalHours": "Total des heures (env.)",
      "monthsAbbr": "mois",
      "weeksAbbr": "sem.",
      "daysAbbr": "j",
      "hoursAbbr": "h"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Insuffisance pondérale",
      "normalWeight": "Poids normal",
      "overweight": "Surpoids",
      "obesity": "Obésité",
      "errorHeightMetric": "Saisissez une taille entre 50 cm et 280 cm.",
      "errorWeightMetric": "Saisissez un poids entre 15 kg et 500 kg.",
      "errorHeightImperial": "Saisissez une taille valide entre 2 pi et 9 pi.",
      "errorWeightImperial": "Saisissez un poids entre 30 lb et 1100 lb.",
      "metricTab": "Métrique (cm / kg)",
      "imperialTab": "Impérial (pi, po / lb)",
      "heightCmLabel": "Taille (cm)",
      "weightKgLabel": "Poids (kg)",
      "heightFtLabel": "Taille (pi)",
      "heightInLabel": "Taille (po)",
      "weightLbsLabel": "Poids (lb)",
      "bmiLabel": "Indice de masse corporelle (IMC)",
      "whoCategory": "Catégorie OMS",
      "healthyRange": "Plage de poids santé selon l’IMC (18.5–24.9)",
      "disclaimer": "L’IMC est un indice général de dépistage qui ne distingue pas la masse musculaire de la masse grasse."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Saisissez un âge entre 15 et 100 ans.",
      "errorHeightMetric": "Saisissez une taille entre 100 cm et 250 cm.",
      "errorWeightMetric": "Saisissez un poids entre 30 kg et 350 kg.",
      "errorHeightImperial": "Saisissez une taille entre 3 pi 4 po et 8 pi 2 po.",
      "errorWeightImperial": "Saisissez un poids entre 66 lb et 770 lb.",
      "metricTab": "Métrique (cm / kg)",
      "imperialTab": "Impérial (pi, po / lb)",
      "maleTab": "Homme",
      "femaleTab": "Femme",
      "ageLabel": "Âge (ans)",
      "heightCmLabel": "Taille (cm)",
      "weightKgLabel": "Poids (kg)",
      "heightFtLabel": "Taille (pi)",
      "heightInLabel": "Taille (po)",
      "weightLbsLabel": "Poids (lb)",
      "activityLabel": "Niveau d’activité",
      "activitySedentary": "Sédentaire (1.2×)",
      "activitySedentaryDetail": "Travail de bureau, peu ou pas d’exercice",
      "activityLight": "Peu actif (1.375×)",
      "activityLightDetail": "Exercice léger 1 à 3 jours/semaine",
      "activityModerate": "Modérément actif (1.55×)",
      "activityModerateDetail": "Exercice modéré 3 à 5 jours/semaine",
      "activityVery": "Très actif (1.725×)",
      "activityVeryDetail": "Exercice intense 6 à 7 jours/semaine",
      "activityExtra": "Extrêmement actif (1.9×)",
      "activityExtraDetail": "Travail physique ou entraînement deux fois par jour",
      "maintenance": "Calories de maintien (TDEE)",
      "mildLoss": "Perte de poids légère (-0.25 kg/sem.)",
      "mildLossNote": "Déficit quotidien d’environ 250 kcal",
      "weightLoss": "Perte de poids (-0.5 kg/sem.)",
      "weightLossNote": "Déficit quotidien d’environ 500 kcal",
      "leanGain": "Prise de masse maigre",
      "leanGainNote": "Excédent quotidien de +250 kcal",
      "macroHeading": "Répartition de référence des macronutriments pour le maintien (30 % protéines · 40 % glucides · 30 % lipides)",
      "protein": "Protéines",
      "carbs": "Glucides",
      "fat": "Lipides",
      "gramsPerDay": "g/jour",
      "disclaimer": "Calculé avec l’équation de Mifflin-St Jeor pour le métabolisme de base. Les besoins énergétiques individuels varient selon la composition corporelle et le contexte médical ; consultez un professionnel de santé qualifié avant de commencer un régime restrictif."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "Le dépôt initial ne peut pas être négatif.",
      "errorMonthly": "La contribution mensuelle ne peut pas être négative.",
      "errorRate": "Le taux de rendement annuel doit être compris entre 0 % et 100 %.",
      "errorYears": "L’horizon de placement doit être compris entre 1 et 100 ans.",
      "initialLabel": "Capital initial ($)",
      "monthlyLabel": "Versement mensuel ($)",
      "rateLabel": "Rendement annuel (%)",
      "yearsLabel": "Années",
      "compoundingLabel": "Capitalisation",
      "dailyOption": "Quotidienne (365/an)",
      "monthlyOption": "Mensuelle (12/an)",
      "quarterlyOption": "Trimestrielle (4/an)",
      "annualOption": "Annuelle (1/an)",
      "futureBalance": "Solde futur",
      "totalContributed": "Capital total + versements",
      "totalInterest": "Intérêts composés totaux",
      "yearHeader": "Année",
      "totalContributedHeader": "Total versé",
      "cumulativeInterestHeader": "Intérêts cumulés",
      "endingBalanceHeader": "Solde final",
      "yearPrefix": "Année"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "Saisissez un montant de 0 ou plus.",
      "errorRate": "Saisissez un taux de change positif supérieur à 0.",
      "errorFee": "Saisissez des frais de conversion entre 0 % et 50 %.",
      "fetchErrorWithMessage": "Impossible de récupérer le taux externe ({message}). Continuez en saisissant votre taux de change manuellement ci-dessus.",
      "fetchErrorGeneric": "Impossible de joindre l’API de taux externe. Saisissez votre taux de change manuellement ci-dessus.",
      "fetchErrorNoPair": "La paire de devises sélectionnée n’a pas été renvoyée par l’API de référence.",
      "currencyNames": {
        "USD": "Dollar américain",
        "EUR": "Euro",
        "GBP": "Livre sterling",
        "JPY": "Yen japonais",
        "CAD": "Dollar canadien",
        "AUD": "Dollar australien",
        "CHF": "Franc suisse",
        "INR": "Roupie indienne",
        "SGD": "Dollar de Singapour",
        "NZD": "Dollar néo-zélandais",
        "MXN": "Peso mexicain",
        "CNY": "Yuan chinois"
      },
      "rateSourceManualDefault": "Taux manuel saisi par l’utilisateur (par défaut hors ligne)",
      "rateSourceManual": "Taux manuel saisi par l’utilisateur",
      "rateSourceIdentity": "Taux d’identité (1.0000) pour des devises identiques",
      "rateSourceEcb": "Taux de référence externe de la BCE via l’API Frankfurter (date : {date})",
      "rateSourceInverted": "Inversé à partir du taux précédent",
      "disclosureTitle": "Informations sur la source du taux :",
      "disclosureBody": "Les taux de change du marché en direct ne sont jamais inventés hors ligne. Saisissez votre taux de change coté exact manuellement, ou cliquez sur",
      "disclosureBodyAfter": "pour demander un taux de référence à l’API externe Frankfurter.",
      "activeRateSource": "Source du taux actif :",
      "amountLabel": "Montant",
      "fromLabel": "Devise source",
      "toLabel": "Devise cible",
      "swapAria": "Échanger les devises",
      "swapTitle": "Échanger les devises et inverser le taux",
      "rateLabel": "Taux de change",
      "feeLabel": "Frais bancaires / de carte (%)",
      "fetchButton": "Récupérer le taux de référence de la BCE",
      "fetchingButton": "Récupération du taux de la BCE...",
      "netConverted": "Montant net converti",
      "grossBeforeFee": "Brut avant frais",
      "feeLabelShort": "Frais",
      "inverseRate": "Taux de change inverse",
      "perOne": "pour 1",
      "amountHeaderSuffix": "Montant",
      "netHeaderPrefix": "Net",
      "netHeaderSuffix": "(au taux et aux frais saisis)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Veuillez sélectionner des dates de début et de fin valides.",
      "errorInvalidBase": "Veuillez saisir une date de début valide.",
      "errorNonNegative": "Saisissez des nombres entiers non négatifs pour les années, les mois et les jours.",
      "differenceTab": "Différence entre deux dates",
      "addSubtractTab": "Ajouter / soustraire du temps",
      "startLabel": "Date de début",
      "endLabel": "Date de fin",
      "swapTitle": "Échanger les dates",
      "swapAria": "Échanger les dates de début et de fin",
      "includeEnd": "Inclure la date de fin dans le compte (+1 jour calendaire)",
      "calendarDuration": "Durée calendaire",
      "reversedRange": "(Plage inversée)",
      "totalSpan": "Durée totale :",
      "calendarDays": "jours calendaires",
      "weeksDays": "Semaines et jours",
      "weekdays": "Jours ouvrés (lun–ven)",
      "weekendDays": "Jours de week-end (sam–dim)",
      "totalHours": "Total des heures",
      "yearsWord": "ans",
      "monthsWord": "mois",
      "daysWord": "jours",
      "weeksAbbr": "sem.",
      "daysAbbr": "j",
      "hoursAbbr": "h",
      "referenceLabel": "Date de référence",
      "operationLabel": "Opération",
      "addOption": "Ajouter (+)",
      "subtractOption": "Soustraire (-)",
      "yearsLabel": "Années",
      "monthsLabel": "Mois",
      "daysLabel": "Jours",
      "resultingDate": "Date calendaire résultante",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "Le prix d’origine ne peut pas être négatif.",
      "errorDiscount": "La remise doit être comprise entre 0 % et 100 %.",
      "errorTax": "La taxe de vente doit être comprise entre 0 % et 100 %.",
      "errorCost": "Le coût ne peut pas être négatif.",
      "errorSelling": "Le prix de vente doit être supérieur à 0.",
      "discountTab": "Remise de vente",
      "marginTab": "Marge bénéficiaire et majoration",
      "originalPriceLabel": "Prix d’origine ($)",
      "discountLabel": "Remise (%)",
      "salesTaxLabel": "Taxe de vente (%)",
      "costLabel": "Coût unitaire ($)",
      "sellingLabel": "Prix de vente ($)",
      "finalPrice": "Prix final",
      "beforeTax": "Avant taxes :",
      "youSave": "Vous économisez",
      "taxAdded": "Taxe ajoutée",
      "grossProfit": "Bénéfice brut",
      "profitMargin": "Marge bénéficiaire",
      "profitDivSelling": "(Bénéfice ÷ Prix de vente)",
      "markup": "Majoration",
      "profitDivCost": "(Bénéfice ÷ Coût)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Saisissez un capital d’emprunt supérieur à 0.",
      "errorRate": "Saisissez un taux d’intérêt annuel entre 0 % et 100 %.",
      "errorDuration": "La durée de l’emprunt doit être comprise entre 1 et 600 mois.",
      "principalLabel": "Capital de l’emprunt ($)",
      "rateLabel": "Taux d’intérêt annuel (% TAEG)",
      "termLabel": "Durée de l’emprunt",
      "termUnitAria": "Unité de durée de l’emprunt",
      "yearsOption": "Années",
      "monthsOption": "Mois",
      "monthlyPayment": "Mensualité (EMI)",
      "forPrefix": "pour",
      "monthlyPayments": "mensualités",
      "totalInterest": "Intérêts totaux",
      "ofTotalCost": "du coût total",
      "totalRepayment": "Remboursement total",
      "principalWord": "de capital",
      "principalLabelShort": "Capital",
      "interestLabelShort": "Intérêts",
      "showSchedule": "Afficher le tableau d’amortissement",
      "hideSchedule": "Masquer le tableau d’amortissement",
      "monthHeader": "Mois",
      "paymentHeader": "Paiement",
      "principalHeader": "Capital",
      "interestHeader": "Intérêts",
      "balanceHeader": "Solde"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "Le prix du logement doit être supérieur à 0.",
      "errorDownPayment": "Le pourcentage d’apport doit être compris entre 0 % et 99.9 %.",
      "errorRate": "Le taux d’intérêt doit être compris entre 0 % et 50 %.",
      "errorTerm": "La durée de l’emprunt doit être comprise entre 1 et 50 ans.",
      "homePriceLabel": "Prix du logement ($)",
      "downPaymentLabel": "Apport (%)",
      "rateLabel": "Taux d’intérêt (% TAEG)",
      "termLabel": "Durée de l’emprunt (années)",
      "yearsWord": "ans",
      "taxLabel": "Taxe foncière ($ / an)",
      "insuranceLabel": "Assurance habitation ($ / an)",
      "hoaLabel": "Charges de copropriété ($ / mois)",
      "estimatedMonthly": "Mensualité estimée",
      "loanAmount": "Montant de l’emprunt",
      "downPayment": "Apport",
      "lifetimeInterest": "Intérêts sur toute la durée",
      "breakdownHeading": "Détail de la mensualité",
      "principalInterest": "Capital et intérêts (P&I)",
      "propertyTaxes": "Taxes foncières",
      "homeownersInsurance": "Assurance habitation",
      "hoaDues": "Charges de copropriété",
      "pmiLabel": "PMI est. (0.5 %/an si l’apport est < 20 %)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Saisissez des nombres valides.",
      "errorTotalZero": "Le total (Y) ne peut pas être 0.",
      "errorStartZero": "La valeur initiale ne peut pas être 0.",
      "heading1": "1. Pourcentage d’un nombre",
      "heading2": "2. Partie en pourcentage du tout",
      "heading3": "3. Augmentation ou diminution en pourcentage",
      "whatIs": "Combien font",
      "percentOf": "% de",
      "isWhatPercentOf": "représentent quel % de",
      "fromWord": "De",
      "toWord": "à",
      "result": "Résultat :",
      "change": "Variation :",
      "formula": "Formule",
      "difference": "Différence",
      "ariaPctX": "Pourcentage X",
      "ariaBaseY": "Nombre de base Y",
      "ariaPartX": "Valeur partielle X",
      "ariaWholeY": "Valeur totale Y",
      "ariaInitialA": "Valeur initiale A",
      "ariaFinalB": "Valeur finale B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "Le montant de la rémunération ne peut pas être négatif.",
      "errorHours": "Les heures par semaine doivent être comprises entre 1 et 168.",
      "errorWeeks": "Les semaines par an doivent être comprises entre 1 et 52.",
      "errorTax": "Le taux d’imposition effectif doit être compris entre 0 % et 99 %.",
      "amountLabel": "Montant du salaire ($)",
      "frequencyLabel": "Fréquence",
      "hourlyOption": "Horaire",
      "dailyOption": "Journalier",
      "weeklyOption": "Hebdomadaire",
      "biweeklyOption": "Bimensuel",
      "monthlyOption": "Mensuel",
      "annualOption": "Annuel",
      "hoursLabel": "Heures / semaine",
      "weeksLabel": "Semaines / an",
      "taxLabel": "Taux d’imposition est. (%)",
      "rowHourly": "Horaire",
      "rowDaily": "Journalier (semaine de 5 jours)",
      "rowWeekly": "Hebdomadaire",
      "rowBiweekly": "Bimensuel",
      "rowMonthly": "Mensuel",
      "rowAnnual": "Annuel",
      "payPeriodHeader": "Période de paie",
      "grossPayHeader": "Salaire brut",
      "estNetPay": "Salaire net est.",
      "taxWord": "d’impôt"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Saisissez des heures de début et de fin valides.",
      "errorBreakRange": "Saisissez une déduction de pause entre 0 et 1 440 minutes.",
      "errorEndEarlier": "L’heure de fin est antérieure à l’heure de début. Activez le passage à minuit si le poste chevauche minuit.",
      "errorBreakExceeds": "La déduction de pause dépasse le temps total écoulé.",
      "errorSumFields": "Tous les champs de durée doivent être des nombres non négatifs.",
      "betweenTab": "Temps écoulé entre deux heures",
      "sumTab": "Additionner des durées de feuille de temps",
      "startLabel": "Heure de début",
      "endLabel": "Heure de fin",
      "breakLabel": "Pause non rémunérée (min)",
      "overnightLabel": "Considérer une heure de fin antérieure à l’heure de début comme le lendemain (poste de nuit)",
      "netDuration": "Durée nette",
      "overnightTag": "(De nuit)",
      "decimalHours": "Heures décimales",
      "totalMinutes": "Minutes totales",
      "totalSeconds": "Secondes totales",
      "hoursAbbr": "h",
      "minutesAbbr": "min",
      "secondsAbbr": "s",
      "labelHeader": "Libellé",
      "hoursHeader": "Heures",
      "minutesHeader": "Minutes",
      "secondsHeader": "Secondes",
      "removeButton": "Supprimer",
      "removeAria": "Supprimer",
      "addRowButton": "Ajouter une ligne de durée",
      "morningSession": "Session du matin",
      "afternoonSession": "Session de l’après-midi",
      "segmentPrefix": "Segment",
      "combinedTime": "Temps combiné (HH:MM:SS)",
      "dayEquivalent": "Jours de 24 heures",
      "daysAbbr": "j"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "Le montant de l’addition ne peut pas être négatif.",
      "errorTip": "Le pourcentage de pourboire doit être compris entre 0 % et 200 %.",
      "errorPeople": "Le nombre de personnes doit être compris entre 1 et 100.",
      "billLabel": "Sous-total de l’addition ($)",
      "tipLabel": "Pourcentage de pourboire (%)",
      "peopleLabel": "Partager entre (personnes)",
      "presetsLabel": "Pourboires suggérés :",
      "roundingLabel": "Arrondi :",
      "exactOption": "Centimes exacts",
      "totalUpOption": "Arrondir le total au supérieur ($)",
      "perPersonUpOption": "Arrondir par personne au supérieur ($)",
      "perPersonTotal": "Total par personne",
      "includes": "Comprend",
      "tipEach": "de pourboire par personne",
      "totalTip": "Pourboire total",
      "effectiveRate": "Taux effectif :",
      "totalBill": "Addition totale"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Saisissez une valeur numérique valide à convertir.",
      "errorAbsoluteZero": "La température ne peut pas être inférieure au zéro absolu (-273.15 °C / 0 K).",
      "categoryNames": {
        "length": "Longueur",
        "weight": "Poids et masse",
        "temperature": "Température",
        "area": "Surface",
        "volume": "Volume",
        "speed": "Vitesse",
        "storage": "Stockage numérique"
      },
      "unitLabels": {
        "mm": "Millimètre",
        "cm": "Centimètre",
        "m": "Mètre",
        "km": "Kilomètre",
        "in": "Pouce",
        "ft": "Pied",
        "yd": "Yard",
        "mi": "Mile",
        "mg": "Milligramme",
        "g": "Gramme",
        "kg": "Kilogramme",
        "t": "Tonne métrique",
        "oz": "Once",
        "lb": "Livre",
        "st": "Stone",
        "C": "Celsius",
        "F": "Fahrenheit",
        "K": "Kelvin",
        "cm2": "Centimètre carré",
        "m2": "Mètre carré",
        "ha": "Hectare",
        "km2": "Kilomètre carré",
        "ft2": "Pied carré",
        "yd2": "Yard carré",
        "acre": "Acre",
        "mi2": "Mile carré",
        "mL": "Millilitre",
        "L": "Litre",
        "m3": "Mètre cube",
        "floz": "Once liquide (É.-U.)",
        "cup": "Tasse (É.-U.)",
        "pt": "Pinte (É.-U.)",
        "qt": "Quart (É.-U.)",
        "gal": "Gallon (É.-U.)",
        "ms": "Mètres / seconde",
        "kmh": "Kilomètres / heure",
        "mph": "Miles / heure",
        "knot": "Nœud",
        "fts": "Pieds / seconde",
        "B": "Octet",
        "KB": "Kilooctet (10³)",
        "MB": "Mégaoctet (10⁶)",
        "GB": "Gigaoctet (10⁹)",
        "TB": "Téraoctet (10¹²)",
        "KiB": "Kibioctet (2¹⁰)",
        "MiB": "Mébioctet (2²⁰)",
        "GiB": "Gibioctet (2³⁰)"
      },
      "valueLabel": "Valeur",
      "fromLabel": "Unité source",
      "toLabel": "Unité cible",
      "swapAria": "Échanger les unités",
      "swapTitle": "Échanger les unités",
      "toWord": "en",
      "copyResult": "Copier le résultat",
      "unitHeader": "Unité",
      "symbolHeader": "Symbole",
      "equivalentHeader": "Valeur équivalente"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "Le montant ne peut pas être négatif.",
      "errorRate": "Le taux de taxe doit être compris entre 0 % et 100 %.",
      "addTab": "Ajouter la taxe (net → brut)",
      "removeTab": "Extraire la taxe (brut → net)",
      "commonRates": "Taux courants :",
      "netAmountLabel": "Montant net (hors taxe) ($)",
      "grossAmountLabel": "Montant brut (TTC) ($)",
      "rateLabel": "Taux de TVA / taxe de vente (%)",
      "netPrice": "Prix net (HT)",
      "taxAmount": "Montant de la taxe",
      "grossPrice": "Prix brut (TTC)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Encoder en Base64",
      "decodeTab": "Décoder Base64",
      "urlSafe": "Compatible URL (- et _)",
      "omitPadding": "Omettre le remplissage = final",
      "swap": "Échanger",
      "decodeError": "Erreur de décodage :",
      "inputLabelEncode": "Texte brut (UTF-8)",
      "inputLabelDecode": "Chaîne Base64",
      "inputPlaceholderEncode": "Saisissez du texte ou du JSON à encoder...",
      "inputPlaceholderDecode": "Collez une chaîne Base64 standard ou compatible URL...",
      "outputLabelEncode": "Sortie Base64",
      "outputLabelDecode": "Texte décodé",
      "outputPlaceholder": "La sortie convertie apparaît ici...",
      "copyOutput": "Copier la sortie",
      "invalidLength": "Longueur de chaîne Base64 invalide.",
      "invalidInput": "Entrée Base64 invalide ou séquence d'octets UTF-8 mal formée."
    },
    "tables": {
      "samplePlain": "UtilityFlow : encodage Base64 sûr en UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Choisir une couleur",
      "colorPickerAria": "Sélecteur de couleur",
      "copyHex": "Copier HEX",
      "copyRgb": "Copier RGB",
      "copyHsl": "Copier HSL",
      "contrastTitle": "Vérification du ratio de contraste WCAG 2.1",
      "contrastDesc": "Aperçu du premier plan ({color}) sur n'importe quelle couleur de fond.",
      "backgroundLabel": "Fond :",
      "bgAria": "Couleur de fond pour le contraste",
      "sampleTitle": "Exemple de texte du corps et de l'interface",
      "sampleSentence": "Le renard brun rapide saute par-dessus le chien paresseux.",
      "aaNormal": "Texte normal AA (≥ 4.5:1)",
      "aaaNormal": "Texte normal AAA (≥ 7.0:1)",
      "aaLarge": "Texte large AA (≥ 3.0:1)",
      "pass": "Réussi",
      "fail": "Échoué"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Expression cron à 5 champs",
      "copyCron": "Copier le cron",
      "humanTitle": "Planning en langage clair",
      "breakdownTitle": "Détail par champ",
      "fieldMinute": "Minute (0–59)",
      "fieldHour": "Heure (0–23)",
      "fieldDom": "Jour du mois (1–31)",
      "fieldMonth": "Mois (1–12)",
      "fieldDow": "Jour de la semaine (0–6)",
      "nextRuns": "Prochaines {count} exécutions planifiées (heure locale)",
      "noRuns": "Aucune exécution correspondante trouvée dans les 366 prochains jours.",
      "fieldsError": "Le cron standard attend 5 champs (minute heure jour-du-mois mois jour-de-la-semaine). {count} trouvés.",
      "emptySegment": "Segment vide dans « {token} »",
      "invalidStep": "Pas invalide « {step} » dans « {token} »",
      "outOfRange": "Valeur hors limites ({min}–{max}) dans « {token} »",
      "invalidCron": "Expression cron invalide.",
      "everyMinutes": "Toutes les {n} minutes",
      "minuteZeroHour": "À la minute 0 de chaque heure",
      "atTime": "À {time}",
      "atFields": "À {a}, {b}",
      "dayEveryDay": "tous les jours",
      "dayWeekdays": "en semaine (lundi–vendredi)",
      "dayOfMonth": "le {day} du mois",
      "dayDow": "le {dow}",
      "dayBoth": "le {day} ou {dow}",
      "monthIn": " en {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "Toutes les 5 minutes",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Toutes les heures",
          "expr": "0 * * * *"
        },
        {
          "label": "Tous les jours à minuit",
          "expr": "0 0 * * *"
        },
        {
          "label": "En semaine à 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "Le 1er du mois à 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
      ],
      "monthLabels": [
        "",
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
      ],
      "unitWords": {
        "minute": "minute",
        "hour": "heure",
        "day": "jour",
        "month": "mois",
        "weekday": "jour de la semaine"
      },
      "unitPlurals": {
        "minute": "minutes",
        "hour": "heures",
        "day": "jours",
        "month": "mois",
        "weekday": "jours de la semaine"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "Minifier le CSS",
      "beautifyTab": "Embellir le CSS",
      "inputLabel": "CSS d'entrée",
      "bytesLabel": "bytes",
      "inputPlaceholder": "Collez des règles CSS ou des feuilles de style ici...",
      "outputLabelMinify": "CSS minifié",
      "outputLabelBeautify": "CSS embelli",
      "outputPlaceholder": "Le CSS traité apparaît ici...",
      "copyCss": "Copier le CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Saisie de texte",
      "fileTab": "Somme de contrôle du fichier local",
      "uppercaseHex": "Hex en majuscules",
      "inputLabel": "Chaîne d'entrée (UTF-8)",
      "inputPlaceholder": "Saisissez du texte pour calculer les hachages SHA-1, SHA-256, SHA-384 et SHA-512...",
      "chooseFileLabel": "Choisir un fichier local à hacher",
      "fileNoteDefault": "Le fichier est lu localement dans la mémoire du navigateur et n'est jamais envoyé.",
      "bytesLabel": "bytes",
      "cryptoUnavailable": "Le hachage Web Crypto n'est pas disponible.",
      "sampleText": "Bonjour, UtilityFlow !"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Encoder les entités",
      "decodeTab": "Décoder les entités",
      "encodeNonAscii": "Encoder les symboles non ASCII (&#...;)",
      "swap": "Échanger",
      "inputLabelEncode": "HTML / texte brut",
      "inputLabelDecode": "Chaîne encodée en HTML",
      "inputPlaceholderEncode": "<p>Saisissez des balises HTML ou des caractères spéciaux...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Collez des entités encodées...&lt;/p&gt;",
      "outputLabelEncode": "Entités encodées",
      "outputLabelDecode": "Texte décodé",
      "outputPlaceholder": "Les entités converties apparaissent ici..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "Minifier le JS",
      "beautifyTab": "Formater le JS",
      "indentLabel": "Indentation :",
      "indent2": "2 espaces",
      "indent4": "4 espaces",
      "inputLabel": "Entrée JavaScript / TypeScript",
      "bytesLabel": "bytes",
      "inputPlaceholder": "Collez un extrait JavaScript ou TypeScript...",
      "outputLabelMinify": "Sortie minifiée",
      "outputLabelBeautify": "Sortie formatée",
      "outputPlaceholder": "Le JavaScript formaté apparaît ici...",
      "copyCode": "Copier le code"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Délimiteur :",
      "commaOpt": "Virgule (,)",
      "semicolonOpt": "Point-virgule (;)",
      "tabOpt": "Tabulation (TSV)",
      "conversionError": "Erreur de conversion :",
      "inputLabelJson": "Entrée JSON",
      "inputLabelCsv": "Entrée CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "Sortie CSV",
      "outputLabelJson": "Sortie JSON",
      "outputPlaceholder": "Les données converties apparaissent ici...",
      "parseFallback": "Impossible d'analyser le format d'entrée."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 espaces",
      "indent4": "4 espaces",
      "indentTab": "Tabulation",
      "indentMinify": "Minifier",
      "sortKeys": "Trier les clés A–Z",
      "validJson": "JSON valide",
      "keysLabel": "clés",
      "depthLabel": "profondeur",
      "bytesLabel": "bytes",
      "invalidJson": "JSON invalide :",
      "invalidJsonSyntax": "Syntaxe JSON invalide",
      "lineCol": "Ligne {line}, colonne {col}",
      "inputLabel": "Entrée JSON brute",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "Sortie formatée",
      "outputPlaceholder": "Le JSON formaté et validé apparaît ici...",
      "copyJson": "Copier le JSON"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Décode l'en-tête et la charge utile Base64Url localement dans la mémoire du navigateur. Ne vérifie pas les signatures cryptographiques.",
      "loadSampleJwt": "Charger un JWT d'exemple",
      "inputLabel": "Jeton JWT encodé",
      "inputPlaceholder": "Collez un jeton JWT (eyJhbGciOi...) pour inspecter son en-tête et ses claims...",
      "invalidJwt": "JWT invalide :",
      "headerLabel": "En-tête (algorithme et type)",
      "payloadLabel": "Charge utile (claims)",
      "copyHeader": "Copier l'en-tête",
      "copyPayload": "Copier la charge utile",
      "timestampTitle": "Claims d'horodatage",
      "iatLabel": "Émis le (iat)",
      "nbfLabel": "Valide à partir du (nbf)",
      "expLabel": "Expire le (exp)",
      "expired": "Expiré",
      "active": "Actif (pas encore expiré)",
      "signatureLabel": "Segment de signature (Base64Url)",
      "invalidB64Url": "Longueur de segment Base64Url invalide.",
      "segmentCount": "3 segments JWT séparés par des points attendus (header.payload.signature), {count} trouvés.",
      "parseFallback": "Impossible d'analyser les segments JSON Base64Url du JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Motif d'expression régulière",
      "patternPlaceholder": "Saisissez le motif regex...",
      "flagsLabel": "Drapeaux :",
      "syntaxError": "Erreur de syntaxe :",
      "testStringLabel": "Chaîne de test",
      "testPlaceholder": "Collez un exemple de texte pour tester votre motif...",
      "highlightedMatches": "Correspondances surlignées",
      "matchSingular": "correspondance",
      "matchPlural": "correspondances",
      "highlightEmpty": "Les correspondances sont surlignées ici en temps réel...",
      "capturedTitle": "Correspondances capturées",
      "matchLabel": "Correspondance",
      "indexLabel": "indice",
      "groupsLabel": "Groupes :",
      "noMatches": "Aucune correspondance trouvée.",
      "replaceLabel": "Aperçu du modèle de remplacement",
      "replacePlaceholder": "p. ex. $1 [at] $2",
      "invalidRegex": "Expression régulière invalide."
    },
    "tables": {
      "sampleText": "Contact principal : support@utilityflow.online\nÉquipe de facturation : billing@example.org\nE-mail invalide : not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (global)"
        },
        {
          "flag": "i",
          "label": "i (ignorer la casse)"
        },
        {
          "flag": "m",
          "label": "m (multiligne)"
        },
        {
          "flag": "s",
          "label": "s (dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "Embellir",
      "minify": "Minifier",
      "uppercaseKw": "Mots-clés en MAJUSCULES",
      "lowercaseKw": "minuscules",
      "indentLabel": "Indentation :",
      "indent2": "2 espaces",
      "indent4": "4 espaces",
      "inputLabel": "Requête SQL brute",
      "inputPlaceholder": "Collez une requête SQL (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "SQL formaté",
      "outputPlaceholder": "Le SQL formaté apparaît ici...",
      "copySql": "Copier le SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Horodatage Unix actuel (secondes)",
      "useCurrent": "Utiliser l'heure actuelle",
      "copyEpoch": "Copier l'epoch",
      "converter1Label": "Horodatage Unix → date lisible",
      "epochPlaceholder": "p. ex. 1794544800",
      "unitAuto": "auto",
      "unitSeconds": "secondes",
      "unitMilliseconds": "millisecondes",
      "errorNotNumeric": "Saisissez un horodatage Unix numérique valide.",
      "errorOutOfRange": "L'horodatage est en dehors de la plage valide de Date JavaScript.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Fuseau horaire local",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Relatif",
      "converter2Label": "Date et heure locales → horodatage Unix",
      "secondsLabel": "Secondes",
      "millisecondsLabel": "Millisecondes",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Encoder",
      "decode": "Décoder",
      "encodeUriPreserve": "encodeURI (conserver ://?&)",
      "swap": "Échanger",
      "urlError": "Erreur d'URL :",
      "inputLabel": "Chaîne ou URL d'entrée",
      "inputPlaceholder": "Collez une URL, une chaîne de requête ou une valeur de paramètre...",
      "outputLabelEncode": "Sortie encodée",
      "outputLabelDecode": "Sortie décodée",
      "outputPlaceholder": "L'URL encodée ou décodée apparaît ici...",
      "parsedTitle": "Détail de l'URL analysée",
      "protocol": "Protocole",
      "host": "Hôte",
      "pathname": "Chemin",
      "hash": "Fragment",
      "noneValue": "(aucun)",
      "queryParam": "Paramètre de requête",
      "decodedValue": "Valeur décodée",
      "malformed": "Séquence d'encodage en pourcentage mal formée."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "Version UUID",
      "v4": "v4 (aléatoire)",
      "v7": "v7 (ordonnée par le temps)",
      "quantity": "Quantité (1–100)",
      "generate": "Générer des UUID",
      "uppercase": "Majuscules",
      "includeHyphens": "Inclure les tirets",
      "wrapBraces": "Entourer d'{accolades}",
      "generatedLabel": "UUID générés",
      "copyAll": "Tout copier"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Indigo sur blanc",
      "presetSlate": "Encre ardoise",
      "presetEmerald": "Badge émeraude",
      "presetDark": "Mode sombre",
      "swapColors": "Inverser les couleurs",
      "fgTitle": "Couleur de premier plan / texte",
      "bgTitle": "Couleur d'arrière-plan",
      "copyHex": "Copier le HEX",
      "pickerSuffix": "sélecteur",
      "hexInputSuffix": "saisie HEX",
      "contrastRatioLabel": "Ratio de contraste WCAG 2.1",
      "checkAaNormal": "WCAG AA : texte normal",
      "checkAaLarge": "WCAG AA : texte large / interface",
      "checkAaaNormal": "WCAG AAA : texte normal",
      "checkAaaLarge": "WCAG AAA : texte large",
      "pass": "RÉUSSI",
      "fail": "ÉCHOUÉ",
      "livePreviewLabel": "Aperçu d'accessibilité en direct",
      "previewHeading": "Une typographie claire reste facile à lire à n'importe quelle taille d'écran.",
      "previewBody": "Le texte courant normal (14–16 px) exige un ratio de contraste d'au moins 4,5:1 pour le niveau AA de WCAG et 7,0:1 pour le niveau AAA. Les grands titres (18 pt ou plus, ou 14 pt en gras) exigent au moins 3,0:1.",
      "outlinedControl": "Contrôle d'interface encadré",
      "hexOnHex": "{fg} sur {bg}",
      "extractTitle": "Extraire une palette de couleurs d'une image",
      "extractBody": "Envoyez une capture d'écran, un logo ou une photo pour extraire les nuances HEX dominantes directement dans votre vérification de contraste.",
      "appliesToLabel": "La nuance cliquée s'applique à :",
      "foregroundBtn": "Premier plan",
      "backgroundBtn": "Arrière-plan",
      "selectImage": "Sélectionnez une image pour extraire les nuances",
      "loadedReplace": "Chargé : {name} (envoyer une autre)",
      "selectImageError": "Sélectionnez une image PNG, JPG, WebP ou GIF.",
      "unableToRead": "Impossible de lire « {name} ».",
      "canvasUnavailable": "Contexte 2D du canvas indisponible.",
      "transparentImage": "L'image semble entièrement transparente.",
      "unableToExtract": "Impossible d'extraire la palette.",
      "areaPercent": "~{n} % de la surface"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 Onglet du navigateur",
        "taskbar": "32×32 Barre des tâches / HiDPI",
        "desktopShortcut": "48×48 Raccourci du bureau",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 Écran de démarrage PWA"
      },
      "monogramMode": "Créateur de badge monogramme",
      "imageMode": "Envoyer l'image du logo",
      "lettersLabel": "Texte / initiales (1–3 caractères)",
      "cornerShapeLabel": "Forme des coins",
      "roundedSquare": "Carré arrondi",
      "circle": "Cercle",
      "sharpSquare": "Carré aux coins droits",
      "square": "Carré",
      "bgColorLabel": "Couleur d'arrière-plan",
      "textColorLabel": "Couleur du texte",
      "chooseLogo": "Choisissez un logo PNG, JPG, WebP ou SVG",
      "loadedReplace": "Chargé : {name} (cliquez pour remplacer)",
      "cropMaskLabel": "Masque de recadrage",
      "unableToRead": "Impossible de lire « {name} ».",
      "canvasUnavailable": "Contexte 2D du canvas indisponible.",
      "failedEncode": "Échec de l'encodage du PNG du favicon.",
      "unableToGenerate": "Impossible de générer les favicons.",
      "icoBundleTitle": "Pack favicon.ico multi-tailles (16 px + 32 px + 48 px)",
      "icoBundleBody": "Fichier .ico binaire conforme aux normes, prêt pour le dossier /public/ à la racine de votre site web",
      "downloadIco": "Télécharger favicon.ico",
      "faviconPreviewAlt": "Aperçu du favicon 32x32",
      "iconAlt": "Icône de {size}x{size}",
      "htmlTagsLabel": "Balises de lien HTML <head>",
      "copyHtml": "Copier le HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Choisissez n'importe quel fichier pour calculer des sommes de contrôle cryptographiques",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Calculé localement via l'API Web Crypto · Aucun envoi de fichier (recommandé en dessous de 500 Mo)",
      "cryptoUnavailable": "L'API Web Crypto SubtleCrypto n'est pas disponible dans ce contexte de navigateur.",
      "hashFailed": "Échec du calcul du hash du fichier dans la mémoire du navigateur (les fichiers de plusieurs centaines de Mo peuvent dépasser les limites de RAM).",
      "computing": "Calcul des sommes de contrôle SHA-1, SHA-256, SHA-384 et SHA-512 localement...",
      "fileLabel": "Fichier :",
      "sizeLabel": "Taille :",
      "mimeLabel": "MIME :",
      "modifiedLabel": "Modifié :",
      "bytesSuffix": "{n} octets",
      "downloadSha256": "Télécharger le .sha256",
      "sha256Label": "SHA-256 (recommandé)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (compatibilité héritée uniquement)",
      "verifyLabel": "Vérifier par rapport à la somme de contrôle attendue",
      "expectedPlaceholder": "Collez la somme de contrôle SHA-256, SHA-512, SHA-384 ou SHA-1 publiée (ou une ligne .sha256sum)...",
      "verified": "Somme de contrôle vérifiée ! Le fichier correspond exactement à l'empreinte {algorithm} attendue.",
      "mismatch": "Somme de contrôle non concordante ! Aucune des empreintes calculées ne correspond à la valeur attendue."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Choisissez une image à compresser (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Traitée localement via HTML5 Canvas · Jamais envoyée vers des serveurs distants",
      "uploadImageError": "Veuillez envoyer un fichier image PNG, JPG, WebP ou GIF.",
      "unableToDecode": "Impossible de décoder « {name} ».",
      "canvasUnavailable": "Contexte 2D du canvas indisponible.",
      "compressionFailed": "Échec de la compression dans le canvas du navigateur.",
      "unableToCompress": "Impossible de compresser l'image.",
      "unableToRead": "Impossible de lire « {name} ».",
      "invalidImage": "Fichier image non valide.",
      "outputFormatLabel": "Format de sortie",
      "webpOption": "WebP (la plus petite taille web moderne)",
      "jpgOption": "JPG (compatibilité la plus large)",
      "pngOption": "PNG (transparence sans perte)",
      "maxWidthLabel": "Largeur maximale",
      "keepOriginalWidth": "Conserver la largeur d'origine",
      "max1920": "Max 1920 px (Full HD)",
      "max1280": "Max 1280 px (blog / hero)",
      "max800": "Max 800 px (miniatures)",
      "qualityLabel": "Qualité : ",
      "losslessPng": "PNG sans perte",
      "originalLabel": "Original",
      "compressedLabel": "Compressée",
      "changeLabel": "Variation",
      "outputSummary": "Sortie : {w} × {h} px · {ext}",
      "compressing": "Compression en cours...",
      "downloadExt": "Télécharger le .{ext}",
      "previewAlt": "Aperçu de l'image compressée"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Sélectionnez une ou plusieurs images à convertir",
      "imagesLoaded": "{n} image(s) chargée(s) — cliquez pour ajouter ou remplacer",
      "batchNote": "Convertissez par lot des PNG, JPG, WebP, SVG ou GIF en PNG, JPG ou WebP localement",
      "convertToLabel": "Convertir au format",
      "pngOption": "PNG (.png — préserve la transparence)",
      "qualityLabel": "Qualité avec perte : ",
      "lossless": "Sans perte",
      "alphaFillLabel": "Remplissage alpha",
      "converting": "Conversion en cours...",
      "reconvert": "Reconvertir",
      "selectFilesError": "Sélectionnez un ou plusieurs fichiers image (PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "Impossible de décoder « {name} ».",
      "canvasUnavailable": "Canvas 2D indisponible.",
      "conversionFailed": "Échec de la conversion de « {name} ».",
      "batchFailed": "Échec de la conversion d'images par lot.",
      "downloadExt": "Télécharger le .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Choisissez une image à redimensionner ou à recadrer aux dimensions prédéfinies",
      "fileWithDims": "{name} (original : {w} × {h} px)",
      "supportsNote": "Prend en charge le redimensionnement en pixels, le verrouillage du format et les préréglages sociaux avec recadrage centré",
      "selectImageError": "Sélectionnez une image PNG, JPG, WebP ou GIF.",
      "unableToDecode": "Impossible de décoder « {name} ».",
      "unableToRead": "Impossible de lire l'image.",
      "failedLoading": "Échec du chargement de l'image à redimensionner.",
      "canvasUnavailable": "Canvas 2D indisponible.",
      "failedGenerating": "Échec de la génération de l'image redimensionnée.",
      "resizeFailed": "Échec du redimensionnement.",
      "quickPresets": "Préréglages rapides :",
      "presetOg": "Partage OG (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Carré (1080×1080)",
      "presetAvatar": "Avatar (512×512)",
      "widthLabel": "Largeur (px)",
      "heightLabel": "Hauteur (px)",
      "fitModeLabel": "Mode d'ajustement du format",
      "coverCropOption": "Recadrage de couverture centré (sans étirement)",
      "exactOption": "Mettre à l'échelle aux dimensions exactes",
      "outputFormatLabel": "Format de sortie",
      "lockAspect": "Verrouiller le format d'origine lors de la saisie des dimensions",
      "resizeButton": "Redimensionner à {w} × {h} px",
      "readySummary": "Prêt : {w} × {h} px ({ext})",
      "downloadResized": "Télécharger la version redimensionnée .{ext}",
      "previewAlt": "Image redimensionnée"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Choisissez une image à faire pivoter, retourner ou filtrer",
      "loadedReplace": "{name} (cliquez pour remplacer)",
      "previewNote": "Aperçu en temps réel avec HTML5 Canvas et exportation des pixels",
      "selectImageError": "Veuillez sélectionner une image PNG, JPG, WebP ou GIF.",
      "failedLoading": "Échec du chargement de « {name} ».",
      "rotateLeft": "Pivoter de 90° vers la gauche",
      "rotateRight": "Pivoter de 90° vers la droite",
      "flipHorizontal": "Retourner horizontalement",
      "flipVertical": "Retourner verticalement",
      "brightnessLabel": "Luminosité : ",
      "contrastLabel": "Contraste : ",
      "grayscaleLabel": "Noir et blanc (niveaux de gris)",
      "resetAll": "Tout réinitialiser",
      "exportFormatLabel": "Format d'exportation",
      "livePreview": "Aperçu en direct du canvas"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Image → URI de données Base64",
      "decodeMode": "Base64 → aperçu de l'image",
      "selectImageError": "Sélectionnez un fichier image (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "Impossible de lire « {name} ».",
      "chooseImage": "Choisissez un fichier image à encoder",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Génère un URI de données, du Base64 brut, des extraits HTML <img> et d'arrière-plan CSS",
      "binarySizeLabel": "Taille du fichier binaire",
      "base64SizeLabel": "Taille de l'URI Base64 (~33 % plus grande)",
      "fullDataUriLabel": "URI de données complet",
      "copyDataUri": "Copier l'URI de données",
      "copyRawBase64": "Copier le Base64 brut",
      "copyImg": "Copier <img>",
      "copyCss": "Copier le CSS",
      "encodedAria": "URI de données Base64 encodé",
      "encodedAlt": "Aperçu encodé",
      "pasteLabel": "Collez une chaîne d'image Base64 ou un URI de données",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... ou chaîne base64 brute",
      "invalidPayload": "Le texte Base64 collé n'est pas une charge d'image encodée valide.",
      "decodedAlt": "Aperçu Base64 décodé",
      "downloadExt": "Télécharger le .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Très fort",
        "strong": "Fort",
        "moderate": "Moyen",
        "weak": "Faible"
      },
      "randomPasswordMode": "Mot de passe aléatoire",
      "passphraseMode": "Phrase secrète Diceware",
      "regenerate": "Régénérer",
      "passwordLengthLabel": "Longueur du mot de passe : ",
      "charsSuffix": " caractères",
      "batchCountLabel": "Nombre par lot : ",
      "uppercaseLabel": "Majuscules (A–Z)",
      "lowercaseLabel": "Minuscules (a–z)",
      "numbersLabel": "Chiffres (0–9)",
      "symbolsLabel": "Symboles (!@#$%...)",
      "excludeAmbiguousLabel": "Exclure les caractères ambigus (0, O, 1, l, I)",
      "wordCountLabel": "Nombre de mots : ",
      "wordSeparatorLabel": "Séparateur de mots",
      "hyphenOption": "Trait d'union (-)",
      "underscoreOption": "Tiret bas (_)",
      "periodOption": "Point (.)",
      "spaceOption": "Espace ( )",
      "capitalizeWordsLabel": "Mots avec majuscule initiale",
      "appendDigitLabel": "Ajouter un nombre à 2 chiffres",
      "selectGroupWarning": "Sélectionnez au moins un groupe de caractères pour générer des mots de passe.",
      "entropyBits": "~{n} bits d'entropie",
      "poolSizeSuffix": " · taille du jeu : {n}",
      "wordListSuffix": " · liste de {n} mots",
      "copyAll": "Tout copier"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "URL de site web",
        "text": "Texte",
        "wifi": "Configuration Wi-Fi",
        "vcard": "Contact vCard",
        "email": "Adresse e-mail",
        "phone": "Numéro de téléphone",
        "plainText": "Texte brut"
      },
      "liveCameraCapture": "Capture en direct par caméra",
      "scanMode": "Scanner / décoder une image QR",
      "vcardMode": "Générateur de QR de contact vCard",
      "uploadQr": "Envoyer une image de code QR",
      "uploadQrNote": "Capture PNG, JPG, WebP ou SVG · 100 % côté client",
      "liveCameraTitle": "Scan en direct avec la caméra de l'appareil",
      "liveCameraNote": "Utilise le flux de la caméra locale uniquement lorsque l'autorisation est accordée",
      "startCamera": "Démarrer le scanner de caméra",
      "stopCamera": "Arrêter la caméra",
      "cameraHint": "Pointez votre caméra vers un code QR — la capture s'arrête automatiquement dès le décodage.",
      "uploadImageError": "Veuillez envoyer une image PNG, JPG, WebP ou SVG contenant un code QR.",
      "unableToLoad": "Impossible de charger « {name} ».",
      "noQrDetected": "Aucun code QR n'a pu être détecté dans cette image. Vérifiez la netteté, les marges de zone de silence et le contraste élevé.",
      "unableToScan": "Impossible de scanner l'image.",
      "cameraUnsupported": "Le scan par caméra n'est pas pris en charge dans cet environnement de navigateur.",
      "cameraDenied": "L'autorisation de la caméra a été refusée ou aucun appareil photo n'est disponible. Envoyez une image de code QR à la place.",
      "decodedPayload": "Contenu décodé · {kind}",
      "sourceLabel": "Source : ",
      "copyPayload": "Copier le contenu",
      "decodedAria": "Texte QR décodé",
      "detectedLink": "Lien web détecté : ",
      "uploadedPreviewAlt": "Aperçu du code QR envoyé",
      "firstNameLabel": "Prénom",
      "lastNameLabel": "Nom",
      "orgLabel": "Organisation",
      "jobTitleLabel": "Intitulé du poste",
      "defaultJobTitle": "Designer produit",
      "phoneLabel": "Numéro de téléphone",
      "emailLabel": "Adresse e-mail",
      "websiteLabel": "URL du site web",
      "rawVcardLabel": "Contenu vCard 3.0 brut",
      "copyVcard": "Copier la vCard",
      "vcardQrAlt": "Code QR vCard généré",
      "downloadPng": "Télécharger le PNG",
      "downloadSvg": "Télécharger le SVG"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "Court",
          "ratio": "~10–20 % de la longueur"
        },
        "medium": {
          "label": "Moyen",
          "ratio": "~30–40 % de la longueur"
        },
        "detailed": {
          "label": "Long (détaillé)",
          "ratio": "~50–60 % de la longueur"
        }
      },
      "loadingLengthLabels": {
        "short": "court",
        "medium": "moyen",
        "detailed": "long"
      },
      "formatOptions": {
        "paragraph": {
          "label": "Résumé en paragraphe",
          "hint": "Prose fluide et cohérente"
        },
        "bullets": {
          "label": "Résumé à puces",
          "hint": "Puces claires et faciles à lire"
        },
        "key-points": {
          "label": "Extraction des points clés",
          "hint": "Idées numérotées"
        },
        "simple": {
          "label": "Langage simple",
          "hint": "Mots simples et quotidiens"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "de paragraphe",
        "bullets": "à puces",
        "key-points": "de points clés",
        "simple": "en langage simple"
      },
      "languageLabels": {
        "Same as original language": "Identique à la langue d'origine",
        "English (US)": "Anglais (États-Unis)",
        "English (UK)": "Anglais (Royaume-Uni)",
        "Spanish": "Espagnol",
        "French": "Français",
        "German": "Allemand",
        "Portuguese": "Portugais",
        "Italian": "Italien",
        "Dutch": "Néerlandais",
        "Arabic": "Arabe",
        "Hindi": "Hindi",
        "Urdu": "Ourdou",
        "Turkish": "Turc",
        "Japanese": "Japonais",
        "Korean": "Coréen",
        "Chinese (Simplified)": "Chinois (simplifié)"
      },
      "sampleArticle": "En 2026, les équipes distribuées d'ingénierie produit s'appuient de plus en plus sur des mises à jour écrites asynchrones plutôt que sur des réunions quotidiennes de suivi pour protéger le temps de développement en concentration profonde. Dans une étude interne de six mois portant sur 140 ingénieurs à Londres, Berlin et Toronto, les équipes qui ont remplacé trois appels hebdomadaires de synchronisation par des synthèses écrites structurées les mardis et jeudis ont signalé une réduction de 28 % de la fragmentation de l'agenda et ont livré les jalons des sprints 14 % plus vite. Surtout, l'étude a conclu que les mises à jour écrites ne fonctionnaient que lorsque les ingénieurs suivaient trois règles constantes : indiquer les blocages concrets en haut, renvoyer directement vers les pull requests ou les identifiants de tickets, et noter des dates cibles exactes au lieu de formules vagues comme « bientôt ». Les managers ont tout de même conservé une seule session hebdomadaire en direct de 25 minutes consacrée exclusivement aux arbitrages architecturaux ouverts et aux points d'équipe, préservant les relations interpersonnelles sans interrompre les blocs de code.",
      "secUnit": "s",
      "minUnit": "min",
      "title": "Résumeur de texte par IA gratuit",
      "noAccount": "Aucun compte, crédit ou connexion requis",
      "allowanceBefore": "Quota gratuit quotidien :",
      "allowanceAfter": "restants aujourd'hui",
      "allowanceFallback": "Jusqu'à 5 résumés gratuits par jour",
      "backendTitle": "La clé du backend IA n'est pas encore active dans cet environnement.",
      "backendEnsureBefore": "Assurez-vous que",
      "backendEnsureAfter": "est configuré pour exécuter le résumé par IA en direct.",
      "stepLength": "1. Longueur du résumé",
      "stepFormat": "2. Format du résumé",
      "stepLanguage": "3. Langue de sortie",
      "stepText": "4. Texte source à résumer",
      "lengthAria": "Longueur du résumé",
      "paste": "Coller",
      "clipboardUnavailable": "La lecture du presse-papiers n'est pas disponible ici — utilisez Ctrl/Cmd + V dans l'éditeur.",
      "clipboardEmpty": "Votre presse-papiers ne contient aucun texte pour le moment.",
      "clipboardBlocked": "L'autorisation du presse-papiers a été bloquée — collez directement avec Ctrl/Cmd + V.",
      "placeholder": "Collez un article, des notes de recherche, la transcription d'une réunion ou une dissertation ici (minimum 25 mots / 120 caractères, jusqu'à 25 000 caractères)...",
      "word": "mot",
      "words": "mots",
      "chars": "caractères",
      "estRead": "Lecture est. : ",
      "stop": "Arrêter",
      "summarizing": "Résumé en cours...",
      "summarizeButton": "Résumer le texte",
      "addMoreBefore": "Ajoutez au moins ",
      "addMoreMiddle": " mots de plus (minimum ",
      "addMoreAnd": " mots et ",
      "addMoreAfter": " caractères) pour que l'IA puisse extraire un résumé utile.",
      "generatingSummary": "Génération d'un résumé {length} (format {format})...",
      "errorDailyLimit": "Limite quotidienne gratuite de résumés atteinte",
      "errorRateLimited": "Ralentissez légèrement",
      "errorGlobal": "Capacité quotidienne de la plateforme atteinte",
      "errorGeneric": "Impossible de résumer pour le moment",
      "retry": "Réessayer",
      "emptyError": "Veuillez coller ou saisir un article, un rapport ou des notes avant de résumer.",
      "tooShortErrorBefore": "Votre texte est trop court pour être résumé utilement (",
      "tooShortErrorMiddle": " mots). Veuillez saisir au moins ",
      "tooShortErrorAnd": " mots et ",
      "tooShortErrorAfter": " caractères.",
      "overLimitBefore": "La saisie dépasse la limite de ",
      "overLimitMiddle": " caractères. Raccourcissez votre texte de ",
      "overLimitAfter": " caractères et réessayez.",
      "connectionError": "Problème temporaire de connexion pendant le résumé. Veuillez réessayer.",
      "resultTitle": "Résultat du résumé",
      "shorterSuffix": "% plus court",
      "copySummary": "Copier le résumé",
      "downloadTxt": "Télécharger le TXT",
      "originalRead": "Lecture d'origine",
      "summaryRead": "Lecture du résumé",
      "compressionSaved": "Compression et temps gagné",
      "savesPrefix": "fait gagner ~",
      "tabCompare": "Original vs résumé",
      "tabSummary": "Résumé seul",
      "resultAria": "Résumé généré et comparaison",
      "originalText": "Texte d'origine",
      "summaryOutput": "Résumé",
      "summarizedWith": "Résumé avec le modèle Groq gratuit",
      "fallbackNote": " (repli automatique de modèle)",
      "preservedNote": ". Les noms, dates et chiffres clés sont préservés strictement à partir de votre saisie."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "Réduire une image à moins de 100 Ko",
          "query": "Je veux réduire la taille de mon image à 100 Ko.",
          "categoryId": "image-file"
        },
        {
          "label": "Convertir un PDF en images",
          "query": "Je dois convertir un PDF en images.",
          "categoryId": "pdf"
        },
        {
          "label": "Compter les mots d'une dissertation",
          "query": "Je veux compter les mots de ma dissertation.",
          "categoryId": "text-writing"
        },
        {
          "label": "Générer un code QR",
          "query": "Je dois générer un code QR.",
          "categoryId": "social-media"
        },
        {
          "label": "Modifier les dimensions d'une image",
          "query": "Je veux modifier les dimensions d'une image.",
          "categoryId": "image-file"
        },
        {
          "label": "Corriger la grammaire et réécrire un e-mail",
          "query": "Je veux que l'IA corrige les fautes de grammaire et réécrive un e-mail de manière professionnelle.",
          "categoryId": "text-writing"
        },
        {
          "label": "Résumer un long article",
          "query": "Je dois résumer un long article en points clés.",
          "categoryId": "text-writing"
        },
        {
          "label": "Vérifier PDF vers Word",
          "query": "Je dois convertir un PDF en Word.",
          "categoryId": "all"
        }
      ],
      "title": "Recherche intelligente d'outils par IA",
      "searchesLine": "Recherche parmi {count} outils réels d'UtilityFlow (85 dans le navigateur + 2 par IA)",
      "aiSearchesToday": "Recherches par IA aujourd'hui :",
      "leftUnlimited": "restantes · Recherche locale instantanée illimitée",
      "quotaFallback": "Jusqu'à 10 recherches par IA gratuites par jour · Recherche locale illimitée",
      "backendBefore": "Le classement sémantique par IA nécessite ",
      "backendAfter": " sur le serveur, tandis que la recherche locale instantanée par mots-clés dans les {count} outils fonctionne immédiatement.",
      "queryLabel": "Décrivez ce que vous voulez faire (en langage simple ou avec des mots-clés)",
      "queryPlaceholder": "ex. : « Je veux réduire la taille de mon image à 100 Ko » ou « convertir un PDF en PNG »",
      "categoryLabel": "Catégorie de tâche facultative",
      "allCategories": "Toutes les catégories ({count} outils)",
      "characters": "caractères",
      "findButton": "Trouver l'outil correspondant",
      "findingButton": "Recherche du meilleur outil...",
      "tryTask": "Essayez une tâche réelle ou sélectionnez une question courante",
      "loadingLine": "Comparaison de votre demande avec les {count} outils vérifiés d'UtilityFlow...",
      "errorTitle": "Classement sémantique par IA indisponible",
      "retryAi": "Réessayer l'IA",
      "describeError": "Veuillez décrire la tâche ou le problème que vous voulez résoudre (au moins 2 caractères).",
      "queryTooLongBefore": "La requête dépasse ",
      "queryTooLongAfter": " caractères. Veuillez garder votre description concise.",
      "unexpectedFormat": "L'IA a renvoyé un format inattendu. Les correspondances rapides par mot-clé de notre inventaire réel sont affichées ci-dessous.",
      "contactError": "Problème temporaire de contact avec le classement par IA. Les résultats de la recherche par mot-clé restent actifs ci-dessous.",
      "bestTool": "Meilleur outil recommandé",
      "noExact": "Aucun outil correspondant exactement n'est disponible actuellement",
      "noMatchFallback": "UtilityFlow ne propose actuellement aucun outil dédié qui effectue directement « {query} ». Nous n'inventons jamais de faux outils ni de faux liens.",
      "relevantAlt": "Alternatives pertinentes",
      "relatedTools": "Outils existants associés (flux de travail partiels uniquement)",
      "supportedPrefix": "Pris en charge : ",
      "openName": "Ouvrir {name}",
      "matchedWith": "Trouvé dans l'inventaire vérifié d'UtilityFlow grâce au modèle Groq gratuit",
      "fallbackNote": " (repli automatique)",
      "instantMatches": "Correspondances instantanées par mot-clé ({count})",
      "matchedLocally": "Trouvés localement parmi {count} outils",
      "matchedPrefix": "Correspondances : ",
      "suggestionsTitle": "Suggestions intelligentes",
      "suggestionsAll": "parmi les tâches populaires",
      "suggestionsCategory": "dans la catégorie sélectionnée",
      "clickOpen": "Cliquez sur un outil pour l'ouvrir directement",
      "openToolArrow": "Ouvrir l'outil →",
      "recommendationsAria": "Recommandations d'outils par IA",
      "instantAria": "Correspondances instantanées par mot-clé",
      "suggestionsAria": "Outils suggérés au chargement de la page"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "Corriger la grammaire",
          "hint": "Corrige la grammaire et la ponctuation"
        },
        "rewrite-text": {
          "label": "Réécrire le texte",
          "hint": "Fluidité et formulation naturelle"
        },
        "improve-writing": {
          "label": "Améliorer la rédaction",
          "hint": "Clarifie et choisit mieux les mots"
        },
        "make-professional": {
          "label": "Rendre professionnel",
          "hint": "Clarté professionnelle et de direction"
        },
        "make-casual": {
          "label": "Rendre décontracté",
          "hint": "Ton détendu et quotidien"
        },
        "simplify-text": {
          "label": "Simplifier le texte",
          "hint": "Phrases claires et faciles à lire"
        },
        "expand-text": {
          "label": "Développer le texte",
          "hint": "Ajoute des détails utiles fondés sur le texte"
        },
        "paraphrase": {
          "label": "Paraphraser",
          "hint": "Nouvelle formulation, même sens"
        },
        "fix-spelling": {
          "label": "Corriger l'orthographe",
          "hint": "Corrige uniquement les fautes de frappe et les majuscules"
        },
        "write-email": {
          "label": "Rédiger un e-mail",
          "hint": "E-mail structuré avec objet"
        }
      },
      "tones": {
        "professional": "Professionnel",
        "friendly": "Amical",
        "formal": "Formel",
        "casual": "Décontracté",
        "academic": "Académique",
        "persuasive": "Persuasif",
        "simple": "Simple"
      },
      "languageLabels": {
        "English (US)": "Anglais (États-Unis)",
        "English (UK)": "Anglais (Royaume-Uni)",
        "Spanish": "Espagnol",
        "French": "Français",
        "German": "Allemand",
        "Portuguese": "Portugais",
        "Italian": "Italien",
        "Dutch": "Néerlandais",
        "Arabic": "Arabe",
        "Hindi": "Hindi",
        "Urdu": "Ourdou",
        "Turkish": "Turc",
        "Japanese": "Japonais",
        "Korean": "Coréen",
        "Chinese (Simplified)": "Chinois (simplifié)",
        "Same as original language": "Identique à la langue d'origine"
      },
      "samples": {
        "default": "Bonjour l'équipe, je voulais faire le suivi de la reunion d'hier et partager le calendrier actualisé pour le lancement de notre produit du T4. Il y a encore deux points que nous devons revoir avant vendredi, alors prévenez-moi si un bloquage survient.",
        "write-email": "je dois prévenir le client Daniel du lancement de l'application mobile. les tests sont terminés aujourd'hui, il reste 2 petits bugs d'interface à corriger demain matin, prêt pour la soumission à l'App Store vendredi après-midi. demandez-lui si lundi 10h convient pour l'appel de passation.",
        "fix-spelling": "Nous sommes ravis d'anonncer que la fenêtre de maintenance trimestrielle s'est bien déroulée, avec zéro temps d'arrêt imprévu sur tous les serveures.",
        "expand-text": "Les stand-ups asynchrones à distance font gagner du temps aux ingénieurs et permettent aux collègues du monde entier de se concentrer sans interruptions constantes du calendrier."
      },
      "title": "Assistant d'écriture par IA gratuit",
      "noLogin": "Aucune connexion ni carte requise",
      "allowanceBefore": "Quota gratuit quotidien :",
      "allowanceAfter": "restants aujourd'hui",
      "allowanceFallback": "Jusqu'à 5 demandes gratuites par jour",
      "backendTitle": "La clé du backend IA n'est pas encore active dans cet environnement.",
      "backendSet": "Configurez",
      "backendRest": "sur le serveur ou le Worker pour activer la génération d'écriture par IA en direct.",
      "stepTask": "1. Choisissez la tâche d'écriture (10 modes)",
      "stepTone": "2. Ton",
      "stepLanguage": "3. Langue de sortie",
      "stepText": "4. Votre texte d'origine",
      "taskSelectorAria": "Sélecteur de tâche d'écriture",
      "placeholder": "Saisissez ou collez votre paragraphe, message, notes ou brouillon d'e-mail ici (jusqu'à 12 000 caractères)...",
      "word": "mot",
      "words": "mots",
      "characters": "caractères",
      "chars": "caractères",
      "tip": "Astuce : appuyez sur Ctrl + Entrée pour générer",
      "stop": "Arrêter",
      "generating": "Génération en cours...",
      "applying": "Application du",
      "tonePhrase": "ton {tone}",
      "applyingIn": "en",
      "errorDailyLimit": "Limite gratuite quotidienne atteinte",
      "errorRateLimited": "Ralentissez légèrement",
      "errorGlobal": "Capacité quotidienne de la plateforme atteinte",
      "errorGeneric": "Impossible de terminer la demande d'écriture",
      "retry": "Réessayer",
      "emptyError": "Veuillez saisir ou coller du texte avant de cliquer sur Générer.",
      "overLimitBefore": "La saisie dépasse la limite de ",
      "overLimitMiddle": " caractères. Raccourcissez votre brouillon de ",
      "overLimitAfter": " caractères et réessayez.",
      "connectionError": "Problème temporaire de connexion pendant la génération. Veuillez réessayer.",
      "resultTitle": "Résultat amélioré",
      "copyResult": "Copier le résultat",
      "downloadTxt": "Télécharger le TXT",
      "editOutput": "Modifier le résultat",
      "tabCompare": "Original vs amélioré",
      "tabDiff": "Surligner les modifications",
      "tabResult": "Résultat seul",
      "resultAria": "Résultat d'écriture amélioré et comparaison",
      "originalText": "Texte d'origine",
      "improvedText": "Texte amélioré",
      "removed": "Supprimé",
      "added": "Ajouté / mis à jour",
      "processedWith": "Traité avec le modèle Groq gratuit",
      "fallbackNote": " (repli automatique de modèle)",
      "reviewNote": ". Relisez toujours le texte final avant de l'envoyer."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Balises canoniques et hreflang",
      "redirectsMode": "Générateur de règles de redirection 301",
      "canonicalLabel": "URL canonique autoréférentielle",
      "alternatesLabel": "Versions alternatives par langue et région",
      "addLocale": "Ajouter une langue",
      "langCodeAria": "Code de langue",
      "alternateUrlAria": "URL alternative",
      "removeLocaleAria": "Supprimer la ligne de langue",
      "htmlTagsLabel": "Balises de lien HTML <head>",
      "copyHtml": "Copier le HTML",
      "xmlSnippetLabel": "Extrait <xhtml:link> du sitemap XML",
      "copyXml": "Copier le XML",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (bloc server)",
      "copyRules": "Copier {n} règles",
      "pairsLabel": "Paires source → destination (séparées par une virgule, une tabulation ou « -> »)",
      "generatedConfigLabel": "Configuration de redirection 301 générée",
      "skippedInvalid": "{n} ligne(s) sans destination ignorée(s)."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "Le SEO technique commence par des URL propres et explorables, des balises canoniques précises et des sitemaps XML structurés. Quand les rédacteurs écrivent du contenu utile centré sur l'intention de l'utilisateur plutôt que de bourrer le texte de mots-clés, les moteurs de recherche comprennent naturellement la profondeur du sujet. Auditez régulièrement vos titres, vos méta-descriptions et vos liens internes.",
      "defaultTargetKeyword": "seo technique",
      "guidanceTitle": "Conseils éditoriaux :",
      "guidanceBody": "Les moteurs de recherche modernes ne récompensent pas le fait d'atteindre un quota fixe de densité de mots-clés. Utilisez cet audit de distribution pour repérer les répétitions accidentelles ou confirmer que les concepts principaux apparaissent clairement dans votre texte.",
      "targetLabel": "Mot-clé / expression cible (facultatif)",
      "targetPlaceholder": "ex. : seo technique",
      "phraseLengthLabel": "Longueur de l'expression",
      "oneWord": "1 mot",
      "twoWord": "Expressions de 2 mots",
      "threeWord": "Expressions de 3 mots",
      "stripHtml": "Supprimer les balises HTML",
      "ignoreStopWords": "Ignorer les mots vides",
      "textLabel": "Brouillon d'article ou texte HTML collé",
      "totalWords": "Nombre total de mots",
      "uniqueVocabulary": "Vocabulaire unique",
      "readingTime": "Temps de lecture estimé",
      "targetPrefix": "Cible : ",
      "hits": "{n} occurrences ({d} %)",
      "rankHeader": "Rang",
      "termHeader": "Terme / N-gramme",
      "occurrencesHeader": "Occurrences",
      "shareHeader": "Part (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Outils utilitaires rapides dans le navigateur",
      "defaultDescription": "Découvrez 85 outils rapides et respectueux de la vie privée dans le navigateur pour modifier du texte, encoder, calculer des finances, travailler avec des PDF et le SEO.",
      "pageTitleLabel": "Titre de la page (<title> / og:title)",
      "titleChars": "{n} caractères (idéal : 30–60)",
      "metaDescriptionLabel": "Méta-description",
      "descChars": "{n} caractères (idéal : 120–160)",
      "canonicalUrlLabel": "URL canonique",
      "ogImageLabel": "URL de l'image Open Graph (1200×630 recommandé)",
      "siteNameLabel": "Nom du site (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter Card",
      "robotsLabel": "Robots :",
      "robotsFollowAria": "Directive de suivi des robots",
      "includeViewportLabel": "Inclure les balises charset et viewport",
      "generatedTagsLabel": "Balises HTML <head> générées",
      "copyHtml": "Copier le HTML",
      "downloadHtml": "Télécharger le .html",
      "socialPreviewLabel": "Aperçu de la carte de partage",
      "socialPreviewFallback": "Aperçu du partage",
      "untitledPage": "Page sans titre",
      "metaSnippetFallback": "L'extrait de la méta-description apparaît ici."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Audit du code source HTML côté client :",
      "auditBody": "Les navigateurs bloquent l'extraction inter-origines (CORS) des sites tiers et n'ont pas accès aux analyses de recherche privées. Collez le code source HTML de votre page ci-dessous (Afficher le code source) pour auditer les balises DOM localement.",
      "pastedHtmlLabel": "Code source HTML collé",
      "loadSampleHtml": "Charger un exemple HTML",
      "htmlPlaceholder": "Collez le code source <html>...</html> brut ici...",
      "scoreLabel": "Score de l'audit DOM",
      "checksPassed": "{passed} / {total} vérifications réussies",
      "linksSummary": "Liens : {total} ({internal} int. / {external} ext.)",
      "robotsMetaLabel": "Méta robots : ",
      "robotsDefault": "Par défaut (index, follow)",
      "headingOutline": "Plan des titres (H1–H4)",
      "emptyState": "Collez le code source HTML à gauche pour inspecter le titre, la description, les titres, les URL canoniques et les balises alt.",
      "checkTitle": "Balise de titre (<title>)",
      "checkMetaDesc": "Méta-description",
      "checkH1": "Exactement un titre <h1>",
      "checkCanonical": "URL canonique (<link rel=\"canonical\">)",
      "checkAlt": "Attributs alt des images",
      "checkOgJsonLd": "Open Graph et données structurées JSON-LD",
      "titleDetail": "{n} caractères : « {title} »",
      "titleMissing": "Balise <title> manquante dans <head>.",
      "descDetail": "{n} caractères (cible : 120–160).",
      "descMissing": "<meta name=\"description\"> manquante.",
      "h1Detail": "{n} élément(s) <h1> trouvé(s).",
      "canonicalMissing": "Aucune balise canonique déclarée.",
      "noImages": "Aucun élément <img> dans le code.",
      "altDetail": "{with}/{total} images avec un texte alternatif descriptif.",
      "ogDetail": "og:title {presence} · {n} bloc(s) JSON-LD.",
      "present": "présent",
      "missing": "absent"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Directive d'indexation",
      "indexOption": "index (autoriser l'indexation)",
      "noindexOption": "noindex (exclure des résultats de recherche)",
      "linkCrawlingLabel": "Exploration des liens",
      "followOption": "follow (transmettre les signaux de lien)",
      "nofollowOption": "nofollow (ne pas suivre les liens)",
      "largeOption": "large (éligible à Discover)",
      "htmlTagLabel": "Balise meta HTML <head>",
      "copyHtmlTag": "Copier la balise HTML",
      "httpHeaderLabel": "En-tête de réponse HTTP (PDF / non HTML)",
      "copyHeader": "Copier l'en-tête",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Modèle de chemin _headers de Cloudflare",
      "copyBlock": "Copier le bloc"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Modèles de départ :",
      "allowAll": "Autoriser tous les robots d'exploration",
      "standardWebApp": "Application web / SaaS standard",
      "wordpressClean": "WordPress épuré",
      "stagingBlockAll": "Préproduction (tout bloquer)",
      "crawlerRules": "Règles de chemin pour les robots",
      "addRule": "Ajouter une règle",
      "directiveAria": "Directive",
      "pathAria": "Chemin",
      "deleteRuleAria": "Supprimer la règle",
      "crawlDelayLabel": "Crawl-delay (secondes, facultatif)",
      "crawlDelayPlaceholder": "Aucun",
      "sitemapUrlsLabel": "URL de sitemap (une par ligne)",
      "generatedLabel": "robots.txt généré"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Comment créer des utilitaires rapides pour le navigateur",
      "defaultFaqQ1": "UtilityFlow exécute-t-il les outils localement dans le navigateur ?",
      "defaultFaqA1": "Oui. Presque tous les utilitaires s'exécutent directement dans la mémoire du navigateur sans envoyer les données à des serveurs externes.",
      "defaultFaqQ2": "Le JSON-LD structuré aide-t-il le SEO ?",
      "defaultFaqA2": "Oui. Le JSON-LD valide de Schema.org clarifie le contexte des entités pour les robots d'exploration et l'éligibilité aux résultats enrichis.",
      "defaultProductName": "Clavier mécanique ergonomique Pro",
      "defaultProductDesc": "Clavier sans fil à profil bas conçu pour les développeurs de logiciels.",
      "defaultCrumbHome": "Accueil",
      "defaultCrumbSeo": "Outils SEO",
      "defaultCrumbSchema": "Générateur de balisage Schema",
      "headlineLabel": "Titre",
      "authorNameLabel": "Nom de l'auteur",
      "publisherNameLabel": "Nom de l'éditeur",
      "datePublishedLabel": "Date de publication",
      "articleUrlLabel": "URL de l'article",
      "featuredImageLabel": "URL de l'image mise en avant",
      "questionLabel": "Question n° {n}",
      "removeQuestionAria": "Supprimer la question {n}",
      "questionPlaceholder": "Question",
      "acceptedAnswerPlaceholder": "Réponse acceptée",
      "addFaqRow": "Ajouter une ligne de FAQ",
      "productNameLabel": "Nom du produit",
      "descriptionLabel": "Description",
      "priceLabel": "Prix",
      "currencyLabel": "Devise",
      "availabilityLabel": "Disponibilité",
      "orgNameLabel": "Nom de l'organisation",
      "websiteUrlLabel": "URL du site web",
      "logoUrlLabel": "URL du logo",
      "breadcrumbLabelAria": "Libellé du fil d'Ariane {n}",
      "breadcrumbUrlAria": "URL du fil d'Ariane {n}",
      "labelPlaceholder": "Libellé",
      "addLevel": "Ajouter un niveau",
      "jsonLdOutputLabel": "Sortie JSON-LD <script>",
      "copyScriptTag": "Copier la balise de script"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "Formateur et validateur JSON – Mise en forme et minification | UtilityFlow",
      "defaultDescription": "Formatez, validez, minifiez et triez les clés des charges JSON instantanément dans votre navigateur, avec les détails des erreurs de syntaxe par ligne et colonne.",
      "desktopSerp": "SERP sur ordinateur (titre ~580 px)",
      "mobileSerp": "SERP mobile (desc. ~120 caractères)",
      "copyTitleMeta": "Copier le titre et la méta",
      "seoTitleLabel": "Titre SEO",
      "titleMetrics": "{chars} caractères · ~{px} px / 580 px max",
      "metaDescriptionLabel": "Méta-description",
      "descMetrics": "{chars} caractères · ~{px} px",
      "pageUrlLabel": "URL de la page (pour l'aperçu du fil d'Ariane)",
      "siteNameLabel": "Nom du site",
      "boldKeywordLabel": "Mot-clé en gras",
      "optionalPlaceholder": "Facultatif",
      "datePrefixLabel": "Préfixe de date",
      "datePlaceholder": "ex. : 12 nov. 2025",
      "desktopSimulation": "Simulation d'extrait de recherche sur ordinateur",
      "mobileSimulation": "Simulation d'extrait de recherche mobile",
      "titleFallback": "Votre titre SEO apparaît ici",
      "descFallback": "L'aperçu de votre méta-description apparaît ici."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "Comment créer un slug d'URL propre pour le SEO technique !\n10 meilleurs outils café et productivité en 2026\nListe de contrôle complète du sitemap XML et du robots.txt",
      "domainLabel": "Domaine de base / sous-dossier (pour l'aperçu de l'URL complète)",
      "separatorLabel": "Séparateur de mots",
      "hyphenOption": "Trait d'union (-) — recommandé par Google",
      "underscoreOption": "Tiret bas (_)",
      "maxLengthLabel": "Longueur maximale du slug ({n} caractères)",
      "stripStopWords": "Supprimer les mots vides facultatifs en anglais (a, the, and, of, in, to)",
      "trailingSlash": "Inclure la barre oblique finale (/)",
      "titlesLabel": "Titres de page (un par ligne pour la génération en lot)",
      "generatedLabel": "Slugs SEO générés ({n})",
      "copyAllSlugs": "Copier tous les slugs",
      "copyAllUrls": "Copier toutes les URL complètes",
      "originalTitleHeader": "Titre d'origine",
      "slugUrlHeader": "Slug SEO et URL complète",
      "copyHeader": "Copier"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "Date <lastmod> (facultatif)",
      "changefreqLabel": "Indication <changefreq>",
      "priorityLabel": "<priority> par défaut",
      "omitTag": "Omettre la balise",
      "deduplicateLabel": "Supprimer les URL en double exactes",
      "urlsLabel": "URL canoniques (une URL https:// complète par ligne)",
      "skippedInvalid": "{n} ligne(s) d'URL non valide(s) ignorée(s) : ",
      "generatedLabel": "sitemap.xml généré ({n} URL)",
      "copyXml": "Copier le XML",
      "downloadXml": "Télécharger le .xml",
      "generatedAria": "Sitemap XML généré"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Créer des outils de navigateur rapides pour les créateurs et les équipes.   \n\nNouveaux conseils de flux de travail chaque mardi.\n\nEssayez les utilitaires gratuits via le lien ci-dessous !",
      "modeBraille": "Espaceur invisible (⠀ U+2800)",
      "modeDot": "Espaceur point minimal (.)",
      "modeClean": "Nettoyer uniquement les espaces finaux",
      "collapse": "Réduire les doubles espaces accidentels",
      "labelRaw": "Brouillon de légende ou de bio",
      "phRaw": "Rédigez votre légende avec des lignes vides là où vous voulez des sauts de paragraphe...",
      "tip": "Astuce : les applications sociales réduisent souvent les paragraphes vides lorsque des espaces traînent à la fin de la ligne précédente.",
      "labelOut": "Résultat prêt à coller",
      "copyFormatted": "Copier la légende formatée",
      "charsLabel": "Caractères :",
      "linesLabel": "Lignes :",
      "blankLabel": "Sauts vides préservés :",
      "fitsBio": "Convient à la bio Instagram de 150 caractères",
      "captionLength": "Longueur de la légende (au-delà de la limite de 150 de la bio)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Problème → Agitation → Solution (PAS)",
        "tutorial": "Décomposition pratique en 3 étapes",
        "bab": "Avant → Après → Pont",
        "checklist": "Liste de vérification de lancement / audit",
        "myth": "Mythe courant vs réalité pratique"
      },
      "frameworkDescriptions": {
        "pas": "Met en avant un problème concret avant de proposer la solution de flux de travail.",
        "tutorial": "Structure numérotée de type tutoriel, idéale pour les carrousels et les enregistrements LinkedIn.",
        "bab": "Oppose les frictions d’avant au résultat optimisé.",
        "checklist": "Liste de vérification claire que les créateurs peuvent enregistrer.",
        "myth": "Remet en question les conseils dépassés avec des alternatives directes et concises."
      },
      "frameworkLabels": {
        "fixesHeading": "Ce qui règle vraiment le problème :",
        "beforeLabel": "Avant : ",
        "afterLabel": "Après : ",
        "bridgeHeading": "Le pont :",
        "mythLabel": "Mythe courant : ",
        "worksHeading": "Ce qui fonctionne en pratique :"
      },
      "sampleHook": "Arrêtez de perdre des heures à formater vos liens de campagne à la main.",
      "sampleContext": "Des paramètres UTM incohérents et un espacement de bio cassé faussent silencieusement les rapports d’analyse.",
      "samplePoints": "Standardisez les balises utm_source et utm_medium en minuscules\nValidez les coupures de caractères avant de publier\nGardez des sauts de paragraphe propres sans espaces finaux",
      "sampleCta": "Enregistrez cette liste de vérification pour votre prochain lancement de produit.",
      "infoTitle": "Assemblage déterministe des modèles :",
      "infoBody": "Cet outil utilise des cadres de rédaction structurés directement dans votre navigateur — aucun modèle d’IA ni API externe n’est utilisé ou suggéré.",
      "labelHook": "Accroche d’ouverture (1–2 premières lignes)",
      "labelContext": "Contexte / énoncé du problème",
      "labelPoints": "Points clés (un point par ligne)",
      "labelCta": "Appel à l’action (CTA)",
      "labelTags": "Hashtags",
      "previewTitle": "Aperçu de la légende formatée",
      "copyCaption": "Copier la légende",
      "charsLabel": "Caractères :",
      "wordsLabel": "Mots :",
      "fits": "Convient",
      "threadNeeded": "Fil nécessaire",
      "tooLong": "Trop long"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Casse de formatage et d’accessibilité",
      "optCamel": "PascalCase (#CamelCase — compatible avec les lecteurs d’écran)",
      "optLower": "tout en minuscules (#minuscules)",
      "optPreserve": "Conserver la casse d’origine",
      "outLabel": "Mise en page de sortie",
      "optInline": "Une seule ligne (séparées par des espaces)",
      "optNewline": "Un hashtag par ligne",
      "optDots": "Séparateur de repli de légende (.\\n.\\n.)",
      "dedupe": "Supprimer les hashtags en double",
      "labelRaw": "Mots-clés ou hashtags en désordre (séparés par virgule, espace ou ligne)",
      "labelResult": "Groupe de hashtags propre",
      "copyHashtags": "Copier les hashtags",
      "statClean": "Hashtags propres",
      "statDupes": "Doublons supprimés",
      "statIgMax": "Maximum Instagram (30)",
      "statWithin": "Dans la limite de 30 d’IG",
      "statExceeds": "Dépasse la limite de 30 tags",
      "statChars": "Caractères de sortie"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 car. · lettres, chiffres, tirets bas",
        "instagram": "1–30 car. · lettres, chiffres, points, tirets bas",
        "tiktok": "2–24 car. · lettres, chiffres, tirets bas, points",
        "youtube": "3–30 car. · lettres, chiffres, _, -, .",
        "threads": "1–30 car. · espace de noms Instagram partagé",
        "github": "1–39 car. · alphanumériques et traits d’union simples"
      },
      "infoTitle": "Validateur de règles et liens de vérification directe :",
      "infoBodyBefore": "Valide la syntaxe du pseudo et les limites de caractères hors ligne, sans deviner la disponibilité. Cliquez sur le lien",
      "infoEm": "Ouvrir l’URL du profil",
      "infoBodyAfter": "de n’importe quelle plateforme pour vérifier en direct si le pseudo est déjà pris.",
      "labelBrand": "Nom de marque, de projet ou de créateur",
      "phBrand": "p. ex. Utility Hub",
      "labelActive": "Pseudo actif à valider",
      "copyAt": "Copier @",
      "variationsTitle": "Variations cohérentes du pseudo :",
      "thPlatform": "Plateforme",
      "thRules": "Règles de format",
      "thStatus": "Statut de syntaxe",
      "thCheck": "Vérification manuelle",
      "valid": "Format valide",
      "invalid": "Syntaxe ou longueur non valides",
      "checkUrl": "Vérifier l’URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Gras (sans-serif)",
        "sans-italic": "Italique (sans-serif)",
        "sans-bold-italic": "Gras italique (sans-serif)",
        "serif-bold": "Gras (serif)",
        "monospace": "Monospace",
        "double-struck": "Double barré (tableau noir)",
        "script-bold": "Script gras",
        "fraktur-bold": "Fraktur gras",
        "small-caps": "Petites capitales",
        "fullwidth": "Esthétique pleine largeur"
      },
      "styleNotes": {
        "sans-bold": "Haute lisibilité pour les en-têtes de bio et les accroches de publications",
        "sans-italic": "Emphase subtile dans les légendes",
        "sans-bold-italic": "Appels forts et séparateurs de section",
        "serif-bold": "Emphase de style éditorial",
        "monospace": "Pseudos de code, dates et balises techniques",
        "double-struck": "Accents d’affichage",
        "script-bold": "Signatures décoratives de bio",
        "fraktur-bold": "Lettrage gothique d’affichage",
        "small-caps": "Libellés de profil épurés avec aspect majuscules",
        "fullwidth": "En-têtes sociaux rétro à large espacement"
      },
      "sampleText": "Nouvelle boîte à outils pour créateurs 2025",
      "accessibilityTitle": "Note d’accessibilité :",
      "accessibilityBody": "Les caractères Unicode stylisés appartiennent à des blocs de symboles mathématiques, donc les lecteurs d’écran peuvent les lire lettre par lettre ou les ignorer, et certains index de recherche les ignorent. Utilisez-les avec parcimonie pour de courtes mises en avant plutôt que pour des paragraphes entiers.",
      "labelInput": "Texte à styliser",
      "placeholder": "Saisissez un titre court, une ligne de bio ou un CTA...",
      "previewEmpty": "Aperçu"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Bio Instagram",
        "linkedinPost": "Publication LinkedIn",
        "newsletter": "Newsletter",
        "youtubeDescription": "Description YouTube"
      },
      "presetsLabel": "Préréglages rapides de canal :",
      "errorEmpty": "Saisissez l’URL du site web de destination.",
      "errorInvalid": "Saisissez une URL de destination valide (par exemple https://example.com/landing).",
      "labelUrl": "URL de destination du site web *",
      "labelSource": "Source de la campagne (utm_source) *",
      "phSource": "p. ex. instagram, newsletter, google",
      "labelMedium": "Support de la campagne (utm_medium) *",
      "phMedium": "p. ex. social, cpc, email, video",
      "labelCampaign": "Nom de la campagne (utm_campaign)",
      "phCampaign": "p. ex. spring_launch",
      "labelContent": "Contenu de la campagne (utm_content)",
      "phContent": "p. ex. hero_banner, bio_button",
      "labelTerm": "Terme de la campagne (utm_term)",
      "phTerm": "Mot-clé payant ou balise d’audience facultatif",
      "normalizeLabel": "Forcer les minuscules et convertir les espaces en tirets bas (`_`)",
      "generatedTitle": "URL de campagne générée",
      "copyUtm": "Copier l’URL UTM",
      "thParam": "Paramètre de requête",
      "thValue": "Valeur normalisée"
    }
  },
'add-pdf-page-numbers': {
    strings: {
      errStart: 'Le numéro de la première page doit être un nombre entier de 1 ou plus.',
      stampedSuccess: (n: number, size: string) => `Numéros de page apposés sur ${n} page(s) (${size}).`,
      pageOfLabel: (cur: number, total: number) => `Page ${cur} sur ${total}`,
      dropTitleEmpty: 'Choisissez un fichier PDF pour ajouter des numéros de page',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
      dropSub: 'Insère des étiquettes de page vectorielles nettes dans les rapports, contrats et dossiers',
      labelPos: 'Position',
      optBottomCenter: 'Bas centré',
      optBottomRight: 'Bas droit',
      optBottomLeft: 'Bas gauche',
      optTopRight: 'Haut droit',
      labelFmt: 'Format de l’étiquette',
      optPageOf: 'Page 1 sur N',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: 'Numéro de départ',
      labelSize: 'Taille de police (pt)',
      opt9: '9 pt (discret)',
      opt11: '11 pt (standard)',
      opt14: '14 pt (grand)',
      skipCover: 'Ignorer la page de couverture (commencer la numérotation à la page 2)',
      numbering: 'Numérotation des pages...',
      addBtn: 'Ajouter les numéros de page et télécharger',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `Impossible de décoder l’image « ${name} ».`,
      errCanvas: 'Contexte 2D du canvas indisponible.',
      errConvert: (name: string) => `Échec de la conversion de « ${name} » en PNG.`,
      errNotImage: (name: string) => `« ${name} » n’est pas un fichier image pris en charge (PNG, JPG, WebP).`,
      errRead: (name: string) => `Impossible de lire « ${name} ».`,
      errLoad: 'Impossible de charger l’image.',
      errEmpty: 'Ajoutez d’abord au moins une image.',
      errBuild: 'Échec de la conversion des images en PDF.',
      createdSuccess: (n: number, size: string) => `PDF de ${n} pages créé (${size}) avec succès.`,
      dropTitle: 'Sélectionnez des images PNG, JPG ou WebP',
      dropSub: 'Convertissez captures, scans ou photos en un seul PDF localement',
      labelSize: 'Taille de page du PDF',
      optA4: 'A4 portrait (210 × 297 mm)',
      optLetter: 'Lettre US (8,5 × 11 po)',
      optFit: 'Dimensions exactes de l’image',
      labelMargin: 'Marge de page',
      optMargin0: 'Sans marge (0 pt)',
      optMargin24: 'Marge standard (24 pt)',
      optMargin48: 'Marge large (48 pt)',
      labelOut: 'Nom du fichier de sortie',
      moveUp: (name: string) => `Déplacer ${name} vers le haut`,
      moveDown: (name: string) => `Déplacer ${name} vers le bas`,
      removeFile: (name: string) => `Supprimer ${name}`,
      building: 'Génération du PDF...',
      convertBtn: (n: number) => `Convertir ${n} images en PDF`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: 'Impossible de lire les fichiers PDF sélectionnés.',
      errMin2: 'Ajoutez au moins deux fichiers PDF à fusionner.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n} PDF fusionnés (${pages} pages, ${size}) avec succès.`,
      dropValidating: 'Validation des fichiers PDF...',
      dropTitle: 'Sélectionnez ou déposez plusieurs fichiers PDF',
      dropSub: 'Fusion 100 % dans le navigateur via pdf-lib · PDF non chiffrés uniquement · Jamais téléversés',
      filesQueued: 'fichiers en file d’attente',
      totalPagesLabel: 'pages au total',
      combinedSize: 'taille d’entrée combinée',
      clearQueue: 'Vider la file',
      pageSingular: 'page',
      pagePlural: 'pages',
      moveUp: (name: string) => `Déplacer ${name} vers le haut`,
      moveDown: (name: string) => `Déplacer ${name} vers le bas`,
      removeFile: (name: string) => `Supprimer ${name}`,
      outName: 'Nom du fichier de sortie',
      merging: 'Fusion des PDF...',
      mergeBtn: (n: number) => `Fusionner ${n} PDF et télécharger`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: 'Champs de métadonnées modifiables effacés. Cliquez sur Enregistrer et télécharger le PDF pour appliquer.',
      savedSuccess: (size: string) => `Métadonnées du PDF mises à jour et enregistrées (${size}).`,
      dropTitleEmpty: 'Choisissez un fichier PDF pour inspecter ou modifier les métadonnées',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
      dropSub: 'Inspectez les propriétés du document, nettoyez les balises auteur/logiciel ou définissez des titres SEO propres',
      labelTitle: 'Titre du document',
      labelAuthor: 'Auteur',
      labelSubject: 'Sujet / résumé',
      labelKeywords: 'Mots-clés (séparés par des virgules)',
      labelCreator: 'Application créatrice',
      labelProducer: 'Producteur du PDF',
      saving: 'Enregistrement du PDF...',
      saveBtn: 'Enregistrer les métadonnées et télécharger le PDF',
      stripBtn: 'Supprimer tous les champs de métadonnées',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: 'Aucune page correspondante à faire pivoter.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `${a} pages sur ${b} pivotées de ${deg}° dans le sens horaire (${size}).`,
      dropTitleEmpty: 'Choisissez un fichier PDF pour faire pivoter les pages',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
      dropSub: 'Faites pivoter toutes les pages ou des plages spécifiques localement, sans envoi au serveur',
      labelAngle: 'Angle de rotation',
      opt90: '90° dans le sens horaire (droite)',
      opt270: '90° dans le sens antihoraire (gauche / 270°)',
      opt180: '180° à l’envers',
      labelScope: 'Appliquer à',
      optAll: (n: number) => `Toutes les pages (${n})`,
      optRange: 'Plages de pages spécifiques',
      optOdd: 'Pages impaires uniquement',
      optEven: 'Pages paires uniquement',
      labelRangeInput: (n: number) => `Numéros / plages de pages (1–${n})`,
      phRange: 'p. ex. 1, 3-5',
      rotating: 'Rotation des pages...',
      rotateBtn: 'Appliquer la rotation et télécharger le PDF',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- Page ${n} ---`,
      dropExtracting: 'Extraction de la couche de texte du PDF...',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
      dropTitleEmpty: 'Choisissez un PDF textuel pour extraire le texte',
      dropSub: 'Extrait le texte Unicode intégré localement via PDF.js · Aucun envoi au serveur',
      noTextTitle: 'Aucune couche de texte sélectionnable trouvée :',
      noTextBody:
        'Ce PDF semble contenir des images numérisées ou des tracés vectoriels détourés plutôt qu’une couche de texte intégrée. La reconnaissance optique de caractères (OCR) côté client n’est pas effectuée hors ligne.',
      markersLabelBefore: 'Inclure les marqueurs d’en-tête de page (',
      markersCode: '--- Page N ---',
      markersLabelAfter: ')',
      copyText: 'Copier le texte',
      downloadTxt: 'Télécharger le .txt',
      outputAria: 'Sortie de texte extrait du PDF',
      pagesScanned: 'Pages analysées :',
      wordsExtracted: 'Mots extraits :',
      textSize: 'Taille du texte :',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'Rendez jusqu’à 20 pages par lot pour garder la mémoire du canvas du navigateur rapide et réactive.',
      errCanvas: 'Contexte 2D du canvas indisponible.',
      dropTitleEmpty: 'Choisissez un PDF à rendre sous forme d’images',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
      dropSub: 'Rendu localement via le canvas PDF.js · Sortie PNG ou JPG',
      labelRange: 'Pages (« all » ou plage comme 1-4, 6)',
      labelFormat: 'Format d’image',
      optPng: 'PNG (sans perte / texte net)',
      optJpg: 'JPG (compact, idéal pour les photos)',
      labelScale: 'Résolution de rendu',
      optScale1: '1.0× (72 DPI, aperçu rapide)',
      optScale15: '1.5× (108 DPI, standard)',
      optScale2: '2.0× (144 DPI, net)',
      rendering: 'Rendu des pages du PDF...',
      renderBtn: 'Rendre les pages du PDF en images',
      pageAlt: (n: number) => `Aperçu de la page ${n}`,
      pageLabel: (n: number, w: number, h: number) => `Page ${n} · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'Gris neutre',
        indigo: 'Indigo de marque',
        red: 'Rouge tampon',
      },
      defaultWatermark: 'CONFIDENTIEL',
      errEmpty: 'Saisissez le texte du filigrane avant de générer le PDF.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `Filigrane « ${text} » appliqué à ${n} page(s) (${size}).`,
      dropTitleEmpty: 'Choisissez un fichier PDF à filigraner',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
      dropSub: 'Intègre des tampons de texte vectoriels nets localement via pdf-lib',
      labelText: 'Texte du filigrane',
      phText: 'CONFIDENTIEL / BROUILLON / USAGE INTERNE',
      labelColor: 'Couleur du tampon',
      firstPageOnly: 'Première page uniquement',
      labelSize: 'Taille de police :',
      ptSuffix: (n: number) => `${n} pt`,
      labelOpacity: 'Opacité :',
      labelAngle: 'Rotation :',
      applying: 'Application du filigrane au PDF...',
      applyBtn: 'Appliquer le filigrane et télécharger',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'Un PDF doit conserver au moins 1 page.',
      savedSuccess: (n: number, size: string) => `PDF mis à jour enregistré avec ${n} pages (${size}).`,
      loading: 'Chargement des pages et des aperçus du PDF...',
      dropTitleFile: (name: string, n: number) => `${name} (${n} pages actives)`,
      dropTitleEmpty: 'Choisissez un fichier PDF pour réorganiser ou supprimer des pages',
      dropSub: 'Déplacez des pages, dupliquez des feuilles ou supprimez les pages indésirables localement',
      outCount: 'Nombre de pages de sortie :',
      saving: 'Enregistrement du PDF...',
      saveBtn: 'Enregistrer le PDF réorganisé',
      thumbAlt: (n: number) => `Page d’origine ${n}`,
      thumbFallback: (n: number) => `P. orig. ${n}`,
      posLabel: (n: number) => `Pos. n° ${n}`,
      origLabel: (n: number) => `(Orig. ${n})`,
      moveEarlierTitle: 'Déplacer plus tôt',
      moveEarlierAria: (n: number) => `Déplacer la position ${n} plus tôt`,
      moveLaterTitle: 'Déplacer plus tard',
      moveLaterAria: (n: number) => `Déplacer la position ${n} plus tard`,
      dupTitle: 'Dupliquer la page',
      dupAria: (n: number) => `Dupliquer la page à la position ${n}`,
      delTitle: 'Supprimer la page',
      delAria: (n: number) => `Supprimer la page à la position ${n}`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `La division en masse télécharge un fichier par page. Pour les documents de plus de 25 pages (${n} pages ici), extrayez plutôt des plages afin que votre navigateur ne bloque pas les téléchargements en masse.`,
      exportedAll: (n: number) => `${n} fichiers PDF d’une seule page exportés.`,
      errNoMatch: 'Aucune page ne correspond à cette sélection (par exemple, Pages paires exige 2 pages ou plus).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `${a} pages sur ${b} extraites (${size}).`,
      dropTitleEmpty: 'Choisissez un fichier PDF à diviser ou à extraire',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
      dropSub: 'Traité localement en mémoire · Cliquez pour remplacer le document',
      modeRange: 'Extraire des plages de pages',
      modeOdd: 'Pages impaires uniquement',
      modeEven: 'Pages paires uniquement',
      modeBurst: 'Éclater toutes les pages individuelles',
      labelRange: (n: number) => `Pages à extraire (1–${n})`,
      phRange: 'p. ex. 1-3, 5, 8-10',
      rangeHintBefore: 'Utilisez des virgules et des traits d’union (par exemple ',
      rangeHintAfter: ').',
      extracting: 'Extraction du PDF...',
      splitBtn: 'Diviser et télécharger le PDF',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'URL du site web',
      tabText: 'Texte brut',
      tabWifi: 'Réseau Wi-Fi',
      tabEmail: 'Lien e-mail',
      tabPhone: 'Numéro de téléphone',
      labelUrl: 'URL de destination',
      labelText: 'Contenu du texte',
      labelSsid: 'Nom du réseau (SSID)',
      labelSecurity: 'Type de sécurité',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'Ouvert (sans mot de passe)',
      labelWifiPass: 'Mot de passe Wi-Fi',
      hiddenSsid: 'Réseau à SSID masqué',
      labelEmailTo: 'E-mail du destinataire',
      labelEmailSubject: 'Objet (facultatif)',
      labelPhone: 'Numéro de téléphone (format E.164 recommandé)',
      sizeLabel: (size: number) => `Taille (${size}px)`,
      labelEc: 'Correction d’erreurs',
      labelFg: 'Premier plan',
      labelBg: 'Arrière-plan',
      quietZone: 'Marge de zone de silence :',
      modulesLabel: (margin: number) => `${margin} modules`,
      encodedPayload: 'Chaîne de données encodée',
      copyPayload: 'Copier les données',
      emptyError: 'Saisissez du contenu ci-dessus pour générer un QR code scannable.',
      encodeError: 'Impossible d’encoder le contenu du QR code.',
      qrAlt: 'QR code scannable généré',
      downloadPng: 'Télécharger le PNG',
      downloadSvg: 'Télécharger le SVG',
      copySvg: 'Copier le SVG',
      sampleText: 'Bienvenue sur UtilityFlow !',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: 'Publication standard',
        profileBio: 'Bio du profil',
        caption: 'Légende',
        feedPost: 'Publication du fil',
        videoCaption: 'Légende de la vidéo',
        post: 'Publication',
        videoTitle: 'Titre de la vidéo',
        description: 'Description',
      },
      sampleText:
        'Expédier plus vite commence par de petites améliorations quotidiennes.\n\nEssayez nos utilitaires pour créateurs dans le navigateur sur https://utilityflow.online/tools/ — sans inscription.\n\n#CreatorTools #Workflow',
      labelInput: 'Brouillon de publication ou de bio',
      copyDraft: 'Copier le brouillon',
      placeholder: 'Rédigez ou collez votre légende, publication, bio ou titre YouTube...',
      charsLabel: 'Caractères :',
      wordsLabel: 'Mots :',
      hashtagsLabel: 'Hashtags :',
      mentionsLabel: 'Mentions :',
      urlsLabel: 'URL détectées :',
      urlsWeighted: '(pondérées à 23 caractères sur X)',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} au-dessus de la limite`,
      left: (n: number, loc: string) => `${n.toLocaleString(loc)} restants`,
      foldLabel: (n: number) => `Repli ~${n} car.`,
      foldTitle: 'Aperçu du tronquage / repli « Voir plus »',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `Aperçu de ce que les lecteurs voient avant d’appuyer sur « Voir plus » (${limit} caractères pour ${platform} ${surface}).`,
      selectAria: 'Choisissez la plateforme pour l’aperçu du tronquage',
      previewEmpty: 'L’aperçu apparaît ici...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'Comment nous avons créé 85 utilitaires de navigateur rapides sans suivi',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '24 K vues · il y a 2 jours',
      errNotImage: 'Veuillez sélectionner un fichier image PNG, JPG ou WebP.',
      errDecode: 'Impossible de décoder ce fichier image dans le navigateur.',
      previewEyebrow: 'APERÇU 1280 × 720',
      emptyThumb: 'Importez votre image de miniature pour vérifier la lisibilité dans le fil',
      thumbAlt: 'Aperçu de la miniature importée',
      safeZoneTitle: 'Zone de chevauchement du badge d’horodatage',
      chooseThumb: 'Choisir une miniature locale (PNG / JPG / WebP)',
      replaceThumb: (name: string) => `Remplacer : ${name}`,
      recommended: 'Recommandé 1280×720 (16:9), moins de 2 Mo · Jamais téléversé',
      diagTitle: 'Diagnostic des spécifications de l’image',
      dimLabel: 'Dimensions',
      dimHdOk: '(HD OK)',
      dimUnder: '(< 1280 px)',
      aspectLabel: 'Format d’image',
      aspectMatch: 'Correspond à 16:9',
      aspectNo: 'Pas du 16:9 (peut être rogné ou letterboxé)',
      sizeLabel: 'Taille du fichier',
      sizeOk: '(< 2 Mo OK)',
      sizeOver: '(> limite de 2 Mo)',
      titleLabel: (len: number) => `Titre de la vidéo (${len}/100 car. · ~60 visibles sur mobile)`,
      channelLabel: 'Nom de la chaîne',
      durationLabel: 'Durée',
      darkMode: 'Aperçu du fil en mode sombre',
      safeZone: 'Mettre en surbrillance la zone du coin de l’horodatage',
      desktopCard: 'Carte du fil d’accueil sur ordinateur',
      sidebar: 'Barre latérale de lecture sur ordinateur (compact recommandé)',
      untitled: 'Vidéo sans titre',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'Introduction et aperçu' },
        { id: 2, time: '01:15', title: 'Configuration de l’architecture principale' },
        { id: 3, time: '04:40', title: 'Démo en direct et pièges courants' },
        { id: 4, time: '08:20', title: 'Résumé et prochaines étapes' },
      ],
      newChapter: (n: number) => `Chapitre ${n}`,
      defaultChapterTitle: 'Chapitre',
      warnInvalid: 'Un ou plusieurs horodatages utilisent un format non valide (utilisez MM:SS ou HH:MM:SS).',
      warnMin3: 'YouTube exige au moins 3 horodatages par ordre croissant pour activer les chapitres vidéo.',
      warnFirst: 'Le premier chapitre doit commencer à 00:00 pour que YouTube reconnaisse les chapitres.',
      warnOrder: 'Les chapitres ne sont pas dans l’ordre chronologique (cliquez sur Trier chronologiquement).',
      warnShort: (title: string) =>
        `Le chapitre « ${title} » dure moins de 10 secondes après le chapitre précédent (le minimum YouTube est de 10 s).`,
      labelUrl: 'URL de la vidéo YouTube ou ID de la vidéo (pour les liens directs `?t=`)',
      heading: 'Chapitres de la vidéo',
      sortBtn: 'Trier chronologiquement',
      addBtn: 'Ajouter un chapitre',
      tsAria: (n: number) => `Horodatage du chapitre ${n}`,
      titleAria: (n: number) => `Titre du chapitre ${n}`,
      phTitle: 'Titre du chapitre',
      removeAria: (n: number) => `Supprimer le chapitre ${n}`,
      specTitle: 'Vérification des spécifications des chapitres YouTube :',
      descBlock: 'Bloc de chapitres de la description',
      copyChapters: 'Copier les chapitres',
      emptyChapters: 'Ajoutez des chapitres ci-dessus pour générer le bloc de description.',
      shareTitle: 'Liens de partage horodatés',
      videoIdLabel: (id: string) => `(ID de la vidéo : ${id})`,
      noVideoId: '(Saisissez une URL YouTube valide ci-dessus)',
      noVideoHint: 'Collez une URL youtube.com ou youtu.be valide pour créer des liens de saut `?t=` cliquables pour chaque chapitre.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'Aucun fichier n’a été sélectionné.',
      notPdf: (name: string) => `"${name}" ne semble pas être un fichier PDF.`,
      empty: (name: string) => `"${name}" est vide ou tronqué.`,
      noHeader: (name: string) =>
        `"${name}" n’a pas d’en-tête %PDF valide et ne peut pas être traité.`,
      enterRanges: 'Saisissez des numéros de page ou des plages comme « 1-3, 5 ».',
      rangeOutside: (token: string, total: number) =>
        `La plage « ${token} » est hors des limites du document (1–${total} pages).`,
      rangeReversed: (token: string) =>
        `La plage « ${token} » a une page de début supérieure à sa page de fin.`,
      pageMissing: (page: number, total: number) =>
        `La page ${page} n’existe pas (le document a ${total} pages).`,
      invalidSyntax: (token: string) =>
        `Syntaxe de page non valide : « ${token} ». Utilisez des nombres et des plages comme « 1-3, 5 ».`,
      encrypted:
        'Ce PDF est chiffré ou protégé par mot de passe. Déverrouillez-le avant de le traiter localement.',
      unable: 'Impossible de traiter le fichier PDF.',
      allKeywords: ['all', 'toutes', 'tous'],
    },
  },
};
