import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the es locale.
 * GENERATED — assembled from .restructure-work fragments (group1/group2 JSON
 * + group2-ts TypeScript for function-valued entries). Do not hand-edit;
 * the source of truth is the per-component STRINGS_EN tables plus these
 * per-language fragments. Loaded only when the es locale is selected.
 */
export const esComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "Texto para convertir mayúsculas y minúsculas",
      "placeholder": "Escribe o pega texto y luego haz clic en cualquier botón de conversión...",
      "copyResult": "Copiar resultado"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Escribe textos claros y concisos que se ajusten a los límites de caracteres de cada plataforma, sin cortes incómodos en los resultados de búsqueda ni en las redes sociales.",
      "withSpaces": "Con espacios",
      "withoutSpaces": "Sin espacios",
      "words": "Palabras",
      "letters": "Letras",
      "digits": "Dígitos",
      "utf8Bytes": "Bytes UTF-8",
      "copyText": "Copiar texto",
      "textToMeasure": "Texto para medir la longitud de caracteres",
      "placeholder": "Escribe o pega texto para ver conteos exactos de caracteres, tamaño en bytes y límites de plataformas...",
      "whitespaceChars": "Caracteres de espacio en blanco",
      "lines": "Líneas",
      "platformLimitsTitle": "Límites de caracteres de plataformas y SEO",
      "over": "de más",
      "left": "restantes",
      "platformLimits": [
        {
          "name": "Título meta SEO",
          "note": "Longitud recomendada del título en Google"
        },
        {
          "name": "Descripción meta SEO",
          "note": "Límite estándar del fragmento en escritorio"
        },
        {
          "name": "Segmento SMS",
          "note": "Un solo mensaje SMS GSM-7"
        },
        {
          "name": "Publicación de X / Twitter",
          "note": "Longitud estándar de publicación"
        },
        {
          "name": "Vista previa de pie de foto de Instagram",
          "note": "Visible antes del corte de «Más»"
        },
        {
          "name": "Publicación de LinkedIn",
          "note": "Actualización estándar máxima del feed"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Buscar",
      "replaceWith": "Reemplazar con",
      "findPlaceholder": "Texto para buscar...",
      "replacePlaceholder": "Texto de reemplazo...",
      "caseSensitive": "Distinguir mayúsculas y minúsculas",
      "wholeWordOnly": "Solo palabras completas",
      "useRegex": "Usar expresión regular (RegExp)",
      "regexError": "Error de regex:",
      "invalidRegex": "Expresión regular no válida.",
      "sourceText": "Texto original",
      "updatedOutput": "Resultado actualizado",
      "match": "coincidencia",
      "matches": "coincidencias",
      "replaced": "reemplazadas",
      "sourcePlaceholder": "Pega el texto para buscar y reemplazar...",
      "outputPlaceholder": "La vista previa del texto reemplazado aparece aquí...",
      "copyResult": "Copiar resultado"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Prefijo de línea",
      "lineSuffix": "Sufijo de línea",
      "startNumber": "Número inicial",
      "numberSeparator": "Separador de número",
      "addLineNumbers": "Agregar números de línea",
      "zeroPad": "Números con ceros a la izquierda (01, 02)",
      "skipEmptyLines": "Omitir líneas vacías",
      "inputLines": "Líneas de entrada",
      "formattedLines": "Líneas con formato",
      "copyResult": "Copiar resultado",
      "inputPlaceholder": "Pega un valor o una línea por fila...",
      "outputPlaceholder": "Las líneas numeradas o envueltas aparecen aquí..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Cantidad",
      "unit": "Unidad",
      "unitLabels": {
        "paragraphs": "párrafos",
        "sentences": "oraciones",
        "words": "palabras"
      },
      "startClassic": "Empezar con «Lorem ipsum»",
      "wrapHtml": "Envolver en etiquetas <p>",
      "words": "palabras",
      "characters": "caracteres",
      "regenerate": "Regenerar",
      "copyPlaceholder": "Copiar texto de relleno",
      "generatedText": "Texto de relleno generado"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# Notas de la versión de UtilityFlow\n\nBienvenido a **Markdown Previewer**, un editor rápido del lado del cliente con exportación *HTML* en vivo.\n\n## Capacidades clave\n\n- Formato instantáneo para encabezados, listas y enlaces\n- Escape seguro de HTML sin subidas remotas\n- Copia y descarga de HTML sin procesar con un clic\n\n> Mantén la documentación cerca del trabajo y revisa la estructura antes de publicar.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nObtén más información en [UtilityFlow](/tools/).",
      "renderedPreview": "Vista previa renderizada",
      "rawHtml": "HTML sin procesar",
      "exportHtml": "Exportar HTML",
      "copyHtml": "Copiar HTML",
      "markdownSource": "Fuente Markdown",
      "livePreview": "Vista previa en vivo",
      "compiledHtml": "HTML compilado",
      "compiledHtmlAria": "Código fuente HTML compilado",
      "inputPlaceholder": "Escribe Markdown (# Encabezado, **negrita**, - lista, [enlace](https://...))...",
      "emptyPreview": "La vista previa aparecerá mientras escribes Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "La redacción técnica clara respeta el tiempo del lector. Usa sustantivos concretos y verbos activos siempre que sea posible para que las instrucciones complejas sigan siendo fáciles de seguir.\n\nLas oraciones largas llenas de cláusulas anidadas obligan a los lectores a releer los párrafos. Dividir las explicaciones densas en pasos más cortos hace que la documentación sea más rápida de leer y más sencilla de aplicar.",
      "level": "Nivel:",
      "textToCheck": "Texto para comprobar la legibilidad",
      "placeholder": "Pega tu artículo, ensayo o texto de página de destino para calcular la facilidad de lectura Flesch y las puntuaciones de nivel escolar...",
      "fleschEase": "Facilidad de lectura Flesch",
      "fleschKincaid": "Grado Flesch-Kincaid",
      "usGrade": "Nivel escolar de EE. UU.",
      "gunningFog": "Índice Gunning Fog",
      "yearsEducation": "Años de educación",
      "smog": "Índice SMOG",
      "polysyllable": "Complejidad polisilábica",
      "structuralBreakdown": "Desglose estructural",
      "wordsSentences": "Palabras / Oraciones",
      "avgSentenceLength": "Longitud promedio de oración",
      "words": "palabras",
      "avgSyllablesPerWord": "Promedio de sílabas por palabra",
      "complexWords": "Palabras complejas (3+ sílabas)",
      "longWordsDetected": "Palabras largas detectadas (3+ sílabas)",
      "noLongWords": "No se encontraron palabras de 3+ sílabas en este pasaje.",
      "emptyState": "Escribe al menos una oración arriba para ver las fórmulas de legibilidad y las proporciones estructurales.",
      "levels": [
        {
          "level": "Muy fácil",
          "audience": "5.º grado (10–11 años)"
        },
        {
          "level": "Fácil",
          "audience": "6.º grado (11–12 años)"
        },
        {
          "level": "Bastante fácil",
          "audience": "7.º grado (12–13 años)"
        },
        {
          "level": "Estándar",
          "audience": "8.º–9.º grado (13–15 años)"
        },
        {
          "level": "Bastante difícil",
          "audience": "10.º–12.º grado"
        },
        {
          "level": "Difícil",
          "audience": "Nivel universitario"
        },
        {
          "level": "Muy difícil",
          "audience": "Posgrado / especialista"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Distinguir mayúsculas y minúsculas",
      "trimWhitespace": "Recortar espacios en blanco",
      "removeEmptyLines": "Eliminar líneas vacías",
      "sortAlphabetically": "Ordenar alfabéticamente",
      "originalLines": "Líneas originales",
      "lines": "líneas",
      "uniqueLines": "Líneas únicas",
      "unique": "únicas",
      "removed": "eliminadas",
      "inputPlaceholder": "Pega una lista con un elemento por línea...",
      "outputPlaceholder": "El resultado sin duplicados aparecerá aquí..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Distinguir mayúsculas y minúsculas",
      "ignoreBlankLines": "Ignorar líneas en blanco",
      "removeDuplicates": "Eliminar duplicados",
      "inputLines": "Líneas de entrada",
      "sortedLines": "Líneas ordenadas",
      "copySorted": "Copiar ordenadas",
      "inputPlaceholder": "Escribe un elemento por línea...",
      "outputPlaceholder": "El resultado ordenado aparece aquí...",
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
          "label": "Natural (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Más cortas primero"
        },
        {
          "id": "length-desc",
          "label": "Más largas primero"
        },
        {
          "id": "reverse-order",
          "label": "Orden inverso"
        },
        {
          "id": "shuffle",
          "label": "Mezclar"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Ignorar espacios en blanco",
      "ignoreCase": "Ignorar mayúsculas y minúsculas",
      "originalText": "Texto original",
      "modifiedText": "Texto modificado",
      "originalPlaceholder": "Pega el texto original...",
      "modifiedPlaceholder": "Pega el texto actualizado...",
      "lineComparison": "Comparación de líneas",
      "added": "agregadas",
      "removed": "eliminadas",
      "unchanged": "sin cambios",
      "emptyState": "Escribe texto en ambos cuadros de arriba para comparar las líneas agregadas y eliminadas."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Primera línea de texto\nSegunda línea de texto\nTercera línea de texto",
      "originalText": "Texto original",
      "reversedOutput": "Resultado invertido",
      "inputPlaceholder": "Escribe texto o líneas para invertir...",
      "outputPlaceholder": "El texto invertido aparece aquí...",
      "modes": [
        {
          "id": "characters",
          "label": "Invertir caracteres"
        },
        {
          "id": "words",
          "label": "Invertir orden de palabras"
        },
        {
          "id": "each-word",
          "label": "Invertir cada palabra"
        },
        {
          "id": "lines",
          "label": "Invertir orden de líneas"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "¡10 mejores formas de formatear JSON en línea!\nCafé y crema: guía para 2026\nCómo crear un sitio estático rápido en Cloudflare Pages",
      "hyphen": "Guion (-)",
      "underscore": "Guion bajo (_)",
      "forceLowercase": "Forzar minúsculas",
      "stripStopWords": "Eliminar palabras vacías comunes",
      "titlesLabel": "Títulos o frases (uno por línea para el modo por lotes)",
      "inputPlaceholder": "Escribe un título de blog, un nombre de producto o una lista de encabezados...",
      "generatedSlugs": "Slugs de URL generados",
      "copySlugs": "Copiar slugs",
      "outputPlaceholder": "los-slugs-de-url-limpios-aparecen-aqui"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Primera   línea con   espacios   de más.   \n\n   Segunda línea   con   tabulaciones\ty   huecos.\n\n\nTercera   línea aquí.   ",
      "collapseSpaces": "Colapsar espacios múltiples",
      "trimEdges": "Recortar bordes de línea",
      "tabsToSpaces": "Convertir tabulaciones en espacios",
      "lineBreaks": "Saltos de línea:",
      "keepBreaks": "Mantener saltos de línea",
      "removeBlankLines": "Eliminar líneas en blanco",
      "replaceWithSpaces": "Reemplazar con espacios",
      "removeAllBreaks": "Eliminar todos los saltos",
      "inputText": "Texto de entrada",
      "chars": "caracteres",
      "cleanedText": "Texto limpio",
      "removed": "eliminados",
      "inputPlaceholder": "Pega texto desordenado con espacios de más, tabulaciones o líneas en blanco...",
      "outputPlaceholder": "El resultado limpio aparece automáticamente..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow procesa cada cálculo de texto directamente en tu navegador. Ya sea que estés redactando un artículo de blog, afinando un anuncio de producto o revisando un ensayo académico con un límite estricto de palabras, los conteos instantáneos te ayudan a organizar tu mensaje con claridad.\n\nLas oraciones cortas facilitan la lectura rápida. Variar la longitud de las oraciones mantiene las guías largas atractivas para los lectores en pantallas de escritorio y móviles.",
      "words": "Palabras",
      "characters": "Caracteres",
      "noSpaces": "Sin espacios",
      "sentences": "Oraciones",
      "paragraphs": "Párrafos",
      "readingTime": "Tiempo de lectura",
      "downloadTxt": "Descargar .txt",
      "copyText": "Copiar texto",
      "textToCount": "Texto para contar",
      "placeholder": "Pega o escribe tu texto aquí para contar palabras, caracteres, oraciones y tiempo de lectura...",
      "deliveryTimingLines": "Tiempo de entrega y líneas",
      "speakingTime": "Tiempo de habla (130 ppm)",
      "totalLines": "Total de líneas",
      "avgWordLength": "Longitud promedio de palabra",
      "chars": "caracteres",
      "mostFrequentWords": "Palabras más frecuentes",
      "emptyKeywords": "Escribe texto arriba para ver las palabras más repetidas."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Las auditorías técnicas de SEO revisan la rastreabilidad, los enlaces internos y la velocidad de página. Las páginas rápidas mejoran la interacción del usuario y las señales de velocidad en la búsqueda móvil. Los enlaces internos conectan guías relacionadas y fortalecen la estructura técnica de SEO.",
      "ngramLabels": {
        "1": "1 palabra",
        "2": "Frases de 2 palabras",
        "3": "Frases de 3 palabras"
      },
      "excludeStopWords": "Excluir palabras vacías comunes",
      "minLength": "Longitud mín.:",
      "textForAnalysis": "Texto para el análisis de frecuencia",
      "placeholder": "Pega textos de artículos, descripciones de productos o notas para contar términos repetidos y la densidad de palabras clave...",
      "totalWords": "Total de palabras:",
      "uniqueTerms": "Términos únicos:",
      "exportCsv": "Exportar CSV",
      "copyCsv": "Copiar CSV",
      "rank": "#",
      "termPhrase": "Término / Frase",
      "count": "Conteo",
      "density": "Densidad",
      "emptyState": "Escribe texto arriba para ver los conteos de palabras y los porcentajes de densidad de palabras clave."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Ingresa fechas válidas del calendario.",
      "errorDobAfterTarget": "La fecha de nacimiento no puede ser posterior a la fecha objetivo.",
      "dobLabel": "Fecha de nacimiento",
      "targetLabel": "Edad en la fecha",
      "exactAge": "Edad cronológica exacta",
      "yearsWord": "años",
      "monthsWord": "meses",
      "daysWord": "días",
      "nextBirthday": "Próximo cumpleaños",
      "turning": "cumple",
      "inWord": "en",
      "totalMonths": "Meses totales",
      "totalWeeks": "Semanas totales",
      "totalDays": "Días totales",
      "totalHours": "Horas totales (aprox.)",
      "monthsAbbr": "mes",
      "weeksAbbr": "sem",
      "daysAbbr": "d",
      "hoursAbbr": "h"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Bajo peso",
      "normalWeight": "Peso normal",
      "overweight": "Sobrepeso",
      "obesity": "Obesidad",
      "errorHeightMetric": "Ingresa una altura entre 50 cm y 280 cm.",
      "errorWeightMetric": "Ingresa un peso entre 15 kg y 500 kg.",
      "errorHeightImperial": "Ingresa una altura válida entre 2 ft y 9 ft.",
      "errorWeightImperial": "Ingresa un peso entre 30 lbs y 1100 lbs.",
      "metricTab": "Métrico (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "heightCmLabel": "Altura (cm)",
      "weightKgLabel": "Peso (kg)",
      "heightFtLabel": "Altura (ft)",
      "heightInLabel": "Altura (in)",
      "weightLbsLabel": "Peso (lbs)",
      "bmiLabel": "Índice de masa corporal (IMC)",
      "whoCategory": "Categoría de la OMS",
      "healthyRange": "Rango de peso saludable según el IMC (18.5–24.9)",
      "disclaimer": "El IMC es un índice general de detección y no distingue la masa muscular de la grasa corporal."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Ingresa una edad entre 15 y 100 años.",
      "errorHeightMetric": "Ingresa una altura entre 100 cm y 250 cm.",
      "errorWeightMetric": "Ingresa un peso entre 30 kg y 350 kg.",
      "errorHeightImperial": "Ingresa una altura entre 3 ft 4 in y 8 ft 2 in.",
      "errorWeightImperial": "Ingresa un peso entre 66 lbs y 770 lbs.",
      "metricTab": "Métrico (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "maleTab": "Hombre",
      "femaleTab": "Mujer",
      "ageLabel": "Edad (años)",
      "heightCmLabel": "Altura (cm)",
      "weightKgLabel": "Peso (kg)",
      "heightFtLabel": "Altura (ft)",
      "heightInLabel": "Altura (in)",
      "weightLbsLabel": "Peso (lbs)",
      "activityLabel": "Nivel de actividad",
      "activitySedentary": "Sedentario (1.2×)",
      "activitySedentaryDetail": "Trabajo de oficina, poco o nada de ejercicio",
      "activityLight": "Ligeramente activo (1.375×)",
      "activityLightDetail": "Ejercicio ligero 1–3 días/semana",
      "activityModerate": "Moderadamente activo (1.55×)",
      "activityModerateDetail": "Ejercicio moderado 3–5 días/semana",
      "activityVery": "Muy activo (1.725×)",
      "activityVeryDetail": "Ejercicio intenso 6–7 días/semana",
      "activityExtra": "Extremadamente activo (1.9×)",
      "activityExtraDetail": "Trabajo físico o entrenamiento dos veces al día",
      "maintenance": "Calorías de mantenimiento (TDEE)",
      "mildLoss": "Pérdida de peso leve (-0.25 kg/sem)",
      "mildLossNote": "Déficit diario de ~250 kcal",
      "weightLoss": "Pérdida de peso (-0.5 kg/sem)",
      "weightLossNote": "Déficit diario de ~500 kcal",
      "leanGain": "Ganancia de peso magro",
      "leanGainNote": "Superávit diario de +250 kcal",
      "macroHeading": "Distribución de macronutrientes de referencia para mantenimiento (30% proteína · 40% carbohidratos · 30% grasa)",
      "protein": "Proteína",
      "carbs": "Carbohidratos",
      "fat": "Grasa alimentaria",
      "gramsPerDay": "g/día",
      "disclaimer": "Calculado con la ecuación de Mifflin-St Jeor para la TMB. Las necesidades energéticas individuales varían según la composición corporal y el contexto médico; consulta a un profesional de la salud calificado antes de iniciar dietas restrictivas."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "El depósito inicial no puede ser negativo.",
      "errorMonthly": "La aportación mensual no puede ser negativa.",
      "errorRate": "La tasa de rendimiento anual debe estar entre 0% y 100%.",
      "errorYears": "El horizonte de tiempo debe ser de entre 1 y 100 años.",
      "initialLabel": "Capital inicial ($)",
      "monthlyLabel": "Aportación mensual ($)",
      "rateLabel": "Rendimiento anual (%)",
      "yearsLabel": "Años",
      "compoundingLabel": "Capitalización",
      "dailyOption": "Diaria (365/año)",
      "monthlyOption": "Mensual (12/año)",
      "quarterlyOption": "Trimestral (4/año)",
      "annualOption": "Anual (1/año)",
      "futureBalance": "Saldo futuro",
      "totalContributed": "Capital total + depósitos",
      "totalInterest": "Interés compuesto total",
      "yearHeader": "Año",
      "totalContributedHeader": "Total aportado",
      "cumulativeInterestHeader": "Interés acumulado",
      "endingBalanceHeader": "Saldo final",
      "yearPrefix": "Año"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "Ingresa un monto de 0 o más.",
      "errorRate": "Ingresa una tasa de cambio positiva mayor que 0.",
      "errorFee": "Ingresa una comisión de conversión entre 0% y 50%.",
      "fetchErrorWithMessage": "No se pudo obtener la tasa externa ({message}). Continúa ingresando tu tasa de cambio manualmente arriba.",
      "fetchErrorGeneric": "No se pudo contactar la API externa de tasas. Ingresa tu tasa de cambio manualmente arriba.",
      "fetchErrorNoPair": "La API de referencia no devolvió el par de monedas seleccionado.",
      "currencyNames": {
        "USD": "Dólar estadounidense",
        "EUR": "Euro",
        "GBP": "Libra esterlina",
        "JPY": "Yen japonés",
        "CAD": "Dólar canadiense",
        "AUD": "Dólar australiano",
        "CHF": "Franco suizo",
        "INR": "Rupia india",
        "SGD": "Dólar de Singapur",
        "NZD": "Dólar neozelandés",
        "MXN": "Peso mexicano",
        "CNY": "Yuan chino"
      },
      "rateSourceManualDefault": "Tasa manual ingresada por el usuario (predeterminada sin conexión)",
      "rateSourceManual": "Tasa manual ingresada por el usuario",
      "rateSourceIdentity": "Tasa de identidad (1.0000) para monedas iguales",
      "rateSourceEcb": "Tasa de referencia externa del BCE vía API de Frankfurter (fecha: {date})",
      "rateSourceInverted": "Invertida de la tasa anterior",
      "disclosureTitle": "Aviso sobre la fuente de la tasa:",
      "disclosureBody": "Las tasas de cambio del mercado en vivo nunca se inventan sin conexión. Ingresa tu tasa de cambio cotizada exacta manualmente, o haz clic en",
      "disclosureBodyAfter": "para solicitar una tasa de referencia de la API externa de Frankfurter.",
      "activeRateSource": "Fuente de tasa activa:",
      "amountLabel": "Monto",
      "fromLabel": "Moneda de origen",
      "toLabel": "Moneda de destino",
      "swapAria": "Intercambiar monedas",
      "swapTitle": "Intercambiar monedas e invertir la tasa",
      "rateLabel": "Tasa de cambio",
      "feeLabel": "Comisión bancaria / de tarjeta (%)",
      "fetchButton": "Obtener tasa de referencia del BCE",
      "fetchingButton": "Obteniendo tasa del BCE...",
      "netConverted": "Monto neto convertido",
      "grossBeforeFee": "Bruto antes de la comisión",
      "feeLabelShort": "Comisión",
      "inverseRate": "Tasa de cambio inversa",
      "perOne": "por 1",
      "amountHeaderSuffix": "Monto",
      "netHeaderPrefix": "Neto",
      "netHeaderSuffix": "(a la tasa y comisión ingresadas)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Selecciona fechas válidas de inicio y fin en el calendario.",
      "errorInvalidBase": "Ingresa una fecha inicial válida del calendario.",
      "errorNonNegative": "Ingresa números enteros no negativos para años, meses y días.",
      "differenceTab": "Diferencia entre fechas",
      "addSubtractTab": "Sumar / restar tiempo",
      "startLabel": "Fecha de inicio",
      "endLabel": "Fecha de fin",
      "swapTitle": "Intercambiar fechas",
      "swapAria": "Intercambiar fecha de inicio y fecha de fin",
      "includeEnd": "Incluir la fecha de fin en el conteo (+1 día calendario)",
      "calendarDuration": "Duración en el calendario",
      "reversedRange": "(Rango invertido)",
      "totalSpan": "Duración total:",
      "calendarDays": "días calendario",
      "weeksDays": "Semanas y días",
      "weekdays": "Días laborables (lun–vie)",
      "weekendDays": "Días de fin de semana (sáb–dom)",
      "totalHours": "Horas totales",
      "yearsWord": "años",
      "monthsWord": "meses",
      "daysWord": "días",
      "weeksAbbr": "sem",
      "daysAbbr": "d",
      "hoursAbbr": "h",
      "referenceLabel": "Fecha de referencia",
      "operationLabel": "Operación",
      "addOption": "Sumar (+)",
      "subtractOption": "Restar (-)",
      "yearsLabel": "Años",
      "monthsLabel": "Meses",
      "daysLabel": "Días",
      "resultingDate": "Fecha resultante del calendario",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "El precio original no puede ser negativo.",
      "errorDiscount": "El descuento debe estar entre 0% y 100%.",
      "errorTax": "El impuesto sobre las ventas debe estar entre 0% y 100%.",
      "errorCost": "El costo no puede ser negativo.",
      "errorSelling": "El precio de venta debe ser mayor que 0.",
      "discountTab": "Descuento de venta",
      "marginTab": "Margen de ganancia y recargo",
      "originalPriceLabel": "Precio original ($)",
      "discountLabel": "Descuento (%)",
      "salesTaxLabel": "Impuesto sobre las ventas (%)",
      "costLabel": "Costo unitario ($)",
      "sellingLabel": "Precio de venta ($)",
      "finalPrice": "Precio final",
      "beforeTax": "Antes de impuestos:",
      "youSave": "Ahorras",
      "taxAdded": "Impuesto agregado",
      "grossProfit": "Ganancia bruta",
      "profitMargin": "Margen de ganancia",
      "profitDivSelling": "(Ganancia ÷ Precio de venta)",
      "markup": "Recargo",
      "profitDivCost": "(Ganancia ÷ Costo)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Ingresa un capital del préstamo mayor que 0.",
      "errorRate": "Ingresa una tasa de interés anual entre 0% y 100%.",
      "errorDuration": "La duración del préstamo debe ser de entre 1 y 600 meses.",
      "principalLabel": "Capital del préstamo ($)",
      "rateLabel": "Tasa de interés anual (% TAE)",
      "termLabel": "Plazo del préstamo",
      "termUnitAria": "Unidad del plazo del préstamo",
      "yearsOption": "Años",
      "monthsOption": "Meses",
      "monthlyPayment": "Pago mensual (EMI)",
      "forPrefix": "durante",
      "monthlyPayments": "pagos mensuales",
      "totalInterest": "Intereses totales",
      "ofTotalCost": "del costo total",
      "totalRepayment": "Reembolso total",
      "principalWord": "de capital",
      "principalLabelShort": "Capital",
      "interestLabelShort": "Intereses",
      "showSchedule": "Mostrar tabla de amortización",
      "hideSchedule": "Ocultar tabla de amortización",
      "monthHeader": "Mes",
      "paymentHeader": "Pago",
      "principalHeader": "Capital",
      "interestHeader": "Intereses",
      "balanceHeader": "Saldo"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "El precio de la vivienda debe ser mayor que 0.",
      "errorDownPayment": "El porcentaje de pago inicial debe estar entre 0% y 99.9%.",
      "errorRate": "La tasa de interés debe estar entre 0% y 50%.",
      "errorTerm": "El plazo del préstamo debe ser de entre 1 y 50 años.",
      "homePriceLabel": "Precio de la vivienda ($)",
      "downPaymentLabel": "Pago inicial (%)",
      "rateLabel": "Tasa de interés (% TAE)",
      "termLabel": "Plazo del préstamo (años)",
      "yearsWord": "años",
      "taxLabel": "Impuesto sobre la propiedad ($ / año)",
      "insuranceLabel": "Seguro de vivienda ($ / año)",
      "hoaLabel": "Cuotas de la HOA ($ / mes)",
      "estimatedMonthly": "Pago mensual estimado",
      "loanAmount": "Monto del préstamo",
      "downPayment": "Pago inicial",
      "lifetimeInterest": "Intereses de por vida",
      "breakdownHeading": "Desglose del pago mensual",
      "principalInterest": "Capital e intereses (P&I)",
      "propertyTaxes": "Impuestos sobre la propiedad",
      "homeownersInsurance": "Seguro de vivienda",
      "hoaDues": "Cuotas de la HOA",
      "pmiLabel": "PMI est. (0.5%/año cuando el pago inicial es < 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Ingresa números válidos.",
      "errorTotalZero": "El total (Y) no puede ser 0.",
      "errorStartZero": "El valor inicial no puede ser 0.",
      "heading1": "1. Porcentaje de un número",
      "heading2": "2. Parte como porcentaje del total",
      "heading3": "3. Aumento o disminución porcentual",
      "whatIs": "¿Cuánto es",
      "percentOf": "% de",
      "isWhatPercentOf": "es qué % de",
      "fromWord": "De",
      "toWord": "a",
      "result": "Resultado:",
      "change": "Cambio:",
      "formula": "Fórmula",
      "difference": "Diferencia",
      "ariaPctX": "Porcentaje X",
      "ariaBaseY": "Número base Y",
      "ariaPartX": "Valor parcial X",
      "ariaWholeY": "Valor total Y",
      "ariaInitialA": "Valor inicial A",
      "ariaFinalB": "Valor final B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "El monto de la compensación no puede ser negativo.",
      "errorHours": "Las horas por semana deben estar entre 1 y 168.",
      "errorWeeks": "Las semanas por año deben estar entre 1 y 52.",
      "errorTax": "La tasa impositiva efectiva debe estar entre 0% y 99%.",
      "amountLabel": "Monto del pago ($)",
      "frequencyLabel": "Frecuencia",
      "hourlyOption": "Por hora",
      "dailyOption": "Por día",
      "weeklyOption": "Semanal",
      "biweeklyOption": "Quincenal",
      "monthlyOption": "Mensual",
      "annualOption": "Anual",
      "hoursLabel": "Horas / semana",
      "weeksLabel": "Semanas / año",
      "taxLabel": "Tasa impositiva est. (%)",
      "rowHourly": "Por hora",
      "rowDaily": "Por día (semana de 5 días)",
      "rowWeekly": "Semanal",
      "rowBiweekly": "Quincenal",
      "rowMonthly": "Mensual",
      "rowAnnual": "Anual",
      "payPeriodHeader": "Periodo de pago",
      "grossPayHeader": "Pago bruto",
      "estNetPay": "Pago neto est.",
      "taxWord": "de impuesto"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Ingresa horas válidas de inicio y fin.",
      "errorBreakRange": "Ingresa un descuento por descanso entre 0 y 1,440 minutos.",
      "errorEndEarlier": "La hora de fin es anterior a la hora de inicio. Activa el cambio nocturno si el turno cruza la medianoche.",
      "errorBreakExceeds": "El descuento por descanso supera el tiempo total transcurrido.",
      "errorSumFields": "Todos los campos de duración deben ser números no negativos.",
      "betweenTab": "Tiempo transcurrido entre dos horas",
      "sumTab": "Sumar duraciones de planilla",
      "startLabel": "Hora de inicio",
      "endLabel": "Hora de fin",
      "breakLabel": "Descanso no remunerado (min)",
      "overnightLabel": "Tratar la hora de fin anterior a la de inicio como el día siguiente (turno nocturno)",
      "netDuration": "Duración neta",
      "overnightTag": "(Nocturno)",
      "decimalHours": "Horas decimales",
      "totalMinutes": "Minutos totales",
      "totalSeconds": "Segundos totales",
      "hoursAbbr": "h",
      "minutesAbbr": "min",
      "secondsAbbr": "s",
      "labelHeader": "Etiqueta",
      "hoursHeader": "Horas",
      "minutesHeader": "Minutos",
      "secondsHeader": "Segundos",
      "removeButton": "Eliminar",
      "removeAria": "Eliminar",
      "addRowButton": "Agregar fila de duración",
      "morningSession": "Sesión de la mañana",
      "afternoonSession": "Sesión de la tarde",
      "segmentPrefix": "Segmento",
      "combinedTime": "Tiempo combinado (HH:MM:SS)",
      "dayEquivalent": "Días de 24 horas",
      "daysAbbr": "d"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "El monto de la cuenta no puede ser negativo.",
      "errorTip": "El porcentaje de propina debe estar entre 0% y 200%.",
      "errorPeople": "El número de personas debe estar entre 1 y 100.",
      "billLabel": "Subtotal de la cuenta ($)",
      "tipLabel": "Porcentaje de propina (%)",
      "peopleLabel": "Dividir entre (personas)",
      "presetsLabel": "Propinas sugeridas:",
      "roundingLabel": "Redondeo:",
      "exactOption": "Centavos exactos",
      "totalUpOption": "Redondear el total hacia arriba ($)",
      "perPersonUpOption": "Redondear por persona hacia arriba ($)",
      "perPersonTotal": "Total por persona",
      "includes": "Incluye",
      "tipEach": "de propina por persona",
      "totalTip": "Propina total",
      "effectiveRate": "Tasa efectiva:",
      "totalBill": "Cuenta total"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Ingresa un valor numérico válido para convertir.",
      "errorAbsoluteZero": "La temperatura no puede estar por debajo del cero absoluto (-273.15 °C / 0 K).",
      "categoryNames": {
        "length": "Longitud",
        "weight": "Peso y masa",
        "temperature": "Temperatura",
        "area": "Área",
        "volume": "Volumen",
        "speed": "Velocidad",
        "storage": "Almacenamiento digital"
      },
      "unitLabels": {
        "mm": "Milímetro",
        "cm": "Centímetro",
        "m": "Metro",
        "km": "Kilómetro",
        "in": "Pulgada",
        "ft": "Pie",
        "yd": "Yarda",
        "mi": "Milla",
        "mg": "Miligramo",
        "g": "Gramo",
        "kg": "Kilogramo",
        "t": "Tonelada métrica",
        "oz": "Onza",
        "lb": "Libra",
        "st": "Stone",
        "C": "Celsius",
        "F": "Fahrenheit",
        "K": "Kelvin",
        "cm2": "Centímetro cuadrado",
        "m2": "Metro cuadrado",
        "ha": "Hectárea",
        "km2": "Kilómetro cuadrado",
        "ft2": "Pie cuadrado",
        "yd2": "Yarda cuadrada",
        "acre": "Acre",
        "mi2": "Milla cuadrada",
        "mL": "Mililitro",
        "L": "Litro",
        "m3": "Metro cúbico",
        "floz": "Onza líquida (EE. UU.)",
        "cup": "Taza (EE. UU.)",
        "pt": "Pinta (EE. UU.)",
        "qt": "Cuarto (EE. UU.)",
        "gal": "Galón (EE. UU.)",
        "ms": "Metros / segundo",
        "kmh": "Kilómetros / hora",
        "mph": "Millas / hora",
        "knot": "Nudo",
        "fts": "Pies / segundo",
        "B": "Byte",
        "KB": "Kilobyte (10³)",
        "MB": "Megabyte (10⁶)",
        "GB": "Gigabyte (10⁹)",
        "TB": "Terabyte (10¹²)",
        "KiB": "Kibibyte (2¹⁰)",
        "MiB": "Mebibyte (2²⁰)",
        "GiB": "Gibibyte (2³⁰)"
      },
      "valueLabel": "Valor",
      "fromLabel": "Unidad de origen",
      "toLabel": "Unidad de destino",
      "swapAria": "Intercambiar unidades",
      "swapTitle": "Intercambiar unidades",
      "toWord": "a",
      "copyResult": "Copiar resultado",
      "unitHeader": "Unidad",
      "symbolHeader": "Símbolo",
      "equivalentHeader": "Valor equivalente"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "El monto no puede ser negativo.",
      "errorRate": "La tasa de impuesto debe estar entre 0% y 100%.",
      "addTab": "Agregar impuesto (neto → bruto)",
      "removeTab": "Extraer impuesto (bruto → neto)",
      "commonRates": "Tasas comunes:",
      "netAmountLabel": "Monto neto (sin impuesto) ($)",
      "grossAmountLabel": "Monto bruto (con impuesto) ($)",
      "rateLabel": "Tasa de IVA / impuesto sobre las ventas (%)",
      "netPrice": "Precio neto (sin impuesto)",
      "taxAmount": "Monto del impuesto",
      "grossPrice": "Precio bruto (con impuesto)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Codificar a Base64",
      "decodeTab": "Decodificar Base64",
      "urlSafe": "Compatible con URL (- y _)",
      "omitPadding": "Omitir el relleno = final",
      "swap": "Intercambiar",
      "decodeError": "Error de decodificación:",
      "inputLabelEncode": "Texto sin formato (UTF-8)",
      "inputLabelDecode": "Cadena Base64",
      "inputPlaceholderEncode": "Escribe texto o JSON para codificar...",
      "inputPlaceholderDecode": "Pega una cadena Base64 estándar o compatible con URL...",
      "outputLabelEncode": "Salida Base64",
      "outputLabelDecode": "Texto decodificado",
      "outputPlaceholder": "La salida convertida aparece aquí...",
      "copyOutput": "Copiar salida",
      "invalidLength": "Longitud de cadena Base64 no válida.",
      "invalidInput": "Entrada Base64 no válida o secuencia de bytes UTF-8 incorrecta."
    },
    "tables": {
      "samplePlain": "UtilityFlow: codificación Base64 segura con UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Elegir color",
      "colorPickerAria": "Selector de color",
      "copyHex": "Copiar HEX",
      "copyRgb": "Copiar RGB",
      "copyHsl": "Copiar HSL",
      "contrastTitle": "Verificación de la relación de contraste WCAG 2.1",
      "contrastDesc": "Vista previa del primer plano ({color}) sobre cualquier color de fondo.",
      "backgroundLabel": "Fondo:",
      "bgAria": "Color de fondo para el contraste",
      "sampleTitle": "Texto de ejemplo del cuerpo y la interfaz",
      "sampleSentence": "El veloz murciélago hindú comía feliz cardillo y kiwi.",
      "aaNormal": "Texto normal AA (≥ 4.5:1)",
      "aaaNormal": "Texto normal AAA (≥ 7.0:1)",
      "aaLarge": "Texto grande AA (≥ 3.0:1)",
      "pass": "Aprobado",
      "fail": "No aprobado"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Expresión cron de 5 campos",
      "copyCron": "Copiar cron",
      "humanTitle": "Horario en lenguaje sencillo",
      "breakdownTitle": "Desglose por campo",
      "fieldMinute": "Minuto (0–59)",
      "fieldHour": "Hora (0–23)",
      "fieldDom": "Día del mes (1–31)",
      "fieldMonth": "Mes (1–12)",
      "fieldDow": "Día de la semana (0–6)",
      "nextRuns": "Próximas {count} ejecuciones programadas (hora local)",
      "noRuns": "No se encontró ninguna ejecución coincidente en los próximos 366 días.",
      "fieldsError": "El cron estándar espera 5 campos (minuto hora día-del-mes mes día-de-la-semana). Se encontraron {count}.",
      "emptySegment": "Segmento vacío en \"{token}\"",
      "invalidStep": "Paso no válido \"{step}\" en \"{token}\"",
      "outOfRange": "Valor fuera de rango ({min}–{max}) en \"{token}\"",
      "invalidCron": "Expresión cron no válida.",
      "everyMinutes": "Cada {n} minutos",
      "minuteZeroHour": "En el minuto 0 de cada hora",
      "atTime": "A las {time}",
      "atFields": "En {a}, {b}",
      "dayEveryDay": "todos los días",
      "dayWeekdays": "entre semana (lunes a viernes)",
      "dayOfMonth": "el día {day} del mes",
      "dayDow": "los {dow}",
      "dayBoth": "el día {day} o {dow}",
      "monthIn": " en {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "Cada 5 minutos",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Cada hora",
          "expr": "0 * * * *"
        },
        {
          "label": "Diario a medianoche",
          "expr": "0 0 * * *"
        },
        {
          "label": "Entre semana a las 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "El 1 del mes a las 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "domingo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado"
      ],
      "monthLabels": [
        "",
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ],
      "unitWords": {
        "minute": "minuto",
        "hour": "hora",
        "day": "día",
        "month": "mes",
        "weekday": "día de la semana"
      },
      "unitPlurals": {
        "minute": "minutos",
        "hour": "horas",
        "day": "días",
        "month": "meses",
        "weekday": "días de la semana"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "Minificar CSS",
      "beautifyTab": "Dar formato al CSS",
      "inputLabel": "CSS de entrada",
      "bytesLabel": "bytes",
      "inputPlaceholder": "Pega reglas CSS u hojas de estilo aquí...",
      "outputLabelMinify": "CSS minificado",
      "outputLabelBeautify": "CSS con formato",
      "outputPlaceholder": "El CSS procesado aparece aquí...",
      "copyCss": "Copiar CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Entrada de texto",
      "fileTab": "Checksum de archivo local",
      "uppercaseHex": "Hex en mayúsculas",
      "inputLabel": "Cadena de entrada (UTF-8)",
      "inputPlaceholder": "Escribe texto para calcular los hashes SHA-1, SHA-256, SHA-384 y SHA-512...",
      "chooseFileLabel": "Elegir archivo local para calcular el hash",
      "fileNoteDefault": "El archivo se lee localmente en la memoria del navegador y nunca se sube.",
      "bytesLabel": "bytes",
      "cryptoUnavailable": "El hash con Web Crypto no está disponible.",
      "sampleText": "¡Hola, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Codificar entidades",
      "decodeTab": "Decodificar entidades",
      "encodeNonAscii": "Codificar símbolos no ASCII (&#...;)",
      "swap": "Intercambiar",
      "inputLabelEncode": "HTML / texto sin formato",
      "inputLabelDecode": "Cadena codificada en HTML",
      "inputPlaceholderEncode": "<p>Escribe etiquetas HTML o caracteres especiales...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Pega entidades codificadas...&lt;/p&gt;",
      "outputLabelEncode": "Entidades codificadas",
      "outputLabelDecode": "Texto decodificado",
      "outputPlaceholder": "Las entidades convertidas aparecen aquí..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "Minificar JS",
      "beautifyTab": "Dar formato a JS",
      "indentLabel": "Sangría:",
      "indent2": "2 espacios",
      "indent4": "4 espacios",
      "inputLabel": "Entrada de JavaScript / TypeScript",
      "bytesLabel": "bytes",
      "inputPlaceholder": "Pega un fragmento de JavaScript o TypeScript...",
      "outputLabelMinify": "Salida minificada",
      "outputLabelBeautify": "Salida con formato",
      "outputPlaceholder": "El JavaScript con formato aparece aquí...",
      "copyCode": "Copiar código"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Delimitador:",
      "commaOpt": "Coma (,)",
      "semicolonOpt": "Punto y coma (;)",
      "tabOpt": "Tabulación (TSV)",
      "conversionError": "Error de conversión:",
      "inputLabelJson": "Entrada JSON",
      "inputLabelCsv": "Entrada CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "Salida CSV",
      "outputLabelJson": "Salida JSON",
      "outputPlaceholder": "Los datos convertidos aparecen aquí...",
      "parseFallback": "No se pudo analizar el formato de entrada."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 espacios",
      "indent4": "4 espacios",
      "indentTab": "Tabulación",
      "indentMinify": "Minificar",
      "sortKeys": "Ordenar claves A–Z",
      "validJson": "JSON válido",
      "keysLabel": "claves",
      "depthLabel": "profundidad",
      "bytesLabel": "bytes",
      "invalidJson": "JSON no válido:",
      "invalidJsonSyntax": "Sintaxis JSON no válida",
      "lineCol": "Línea {line}, Columna {col}",
      "inputLabel": "Entrada JSON sin formato",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "Salida con formato",
      "outputPlaceholder": "El JSON con formato y validado aparece aquí...",
      "copyJson": "Copiar JSON"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Decodifica el encabezado y el contenido (payload) Base64Url localmente en la memoria del navegador. No verifica las firmas criptográficas.",
      "loadSampleJwt": "Cargar JWT de ejemplo",
      "inputLabel": "Token JWT codificado",
      "inputPlaceholder": "Pega un token JWT (eyJhbGciOi...) para inspeccionar su encabezado y sus claims...",
      "invalidJwt": "JWT no válido:",
      "headerLabel": "Encabezado (algoritmo y tipo)",
      "payloadLabel": "Contenido (claims)",
      "copyHeader": "Copiar encabezado",
      "copyPayload": "Copiar contenido",
      "timestampTitle": "Claims de marca de tiempo",
      "iatLabel": "Emitido el (iat)",
      "nbfLabel": "No válido antes de (nbf)",
      "expLabel": "Vence el (exp)",
      "expired": "Vencido",
      "active": "Activo (aún no vencido)",
      "signatureLabel": "Segmento de firma (Base64Url)",
      "invalidB64Url": "Longitud de segmento Base64Url no válida.",
      "segmentCount": "Se esperaban 3 segmentos JWT separados por puntos (header.payload.signature); se encontraron {count}.",
      "parseFallback": "No se pudieron analizar los segmentos JSON Base64Url del JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Patrón de expresión regular",
      "patternPlaceholder": "Escribe el patrón regex...",
      "flagsLabel": "Modificadores:",
      "syntaxError": "Error de sintaxis:",
      "testStringLabel": "Cadena de prueba",
      "testPlaceholder": "Pega un texto de ejemplo para probar tu patrón...",
      "highlightedMatches": "Coincidencias resaltadas",
      "matchSingular": "coincidencia",
      "matchPlural": "coincidencias",
      "highlightEmpty": "Las coincidencias se resaltan aquí en tiempo real...",
      "capturedTitle": "Coincidencias capturadas",
      "matchLabel": "Coincidencia",
      "indexLabel": "índice",
      "groupsLabel": "Grupos:",
      "noMatches": "No se encontraron coincidencias.",
      "replaceLabel": "Vista previa de la plantilla de reemplazo",
      "replacePlaceholder": "p. ej., $1 [at] $2",
      "invalidRegex": "Expresión regular no válida."
    },
    "tables": {
      "sampleText": "Contacto principal: support@utilityflow.online\nEquipo de facturación: billing@example.org\nCorreo no válido: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (global)"
        },
        {
          "flag": "i",
          "label": "i (ignorar mayúsculas)"
        },
        {
          "flag": "m",
          "label": "m (multilínea)"
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
      "beautify": "Dar formato",
      "minify": "Minificar",
      "uppercaseKw": "Palabras clave en MAYÚSCULAS",
      "lowercaseKw": "minúsculas",
      "indentLabel": "Sangría:",
      "indent2": "2 espacios",
      "indent4": "4 espacios",
      "inputLabel": "Consulta SQL sin formato",
      "inputPlaceholder": "Pega una consulta SQL (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "SQL con formato",
      "outputPlaceholder": "El SQL con formato aparece aquí...",
      "copySql": "Copiar SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Marca de tiempo Unix actual (segundos)",
      "useCurrent": "Usar hora actual",
      "copyEpoch": "Copiar epoch",
      "converter1Label": "Marca de tiempo Unix → fecha legible",
      "epochPlaceholder": "p. ej., 1794544800",
      "unitAuto": "auto",
      "unitSeconds": "segundos",
      "unitMilliseconds": "milisegundos",
      "errorNotNumeric": "Escribe una marca de tiempo Unix numérica válida.",
      "errorOutOfRange": "La marca de tiempo está fuera del rango válido de Date de JavaScript.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Zona horaria local",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Relativo",
      "converter2Label": "Fecha y hora local → marca de tiempo Unix",
      "secondsLabel": "Segundos",
      "millisecondsLabel": "Milisegundos",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Codificar",
      "decode": "Decodificar",
      "encodeUriPreserve": "encodeURI (conservar ://?&)",
      "swap": "Intercambiar",
      "urlError": "Error de URL:",
      "inputLabel": "Cadena o URL de entrada",
      "inputPlaceholder": "Pega una URL, cadena de consulta o valor de parámetro...",
      "outputLabelEncode": "Salida codificada",
      "outputLabelDecode": "Salida decodificada",
      "outputPlaceholder": "La URL codificada o decodificada aparece aquí...",
      "parsedTitle": "Desglose de la URL analizada",
      "protocol": "Protocolo",
      "host": "Host",
      "pathname": "Ruta",
      "hash": "Fragmento",
      "noneValue": "(ninguno)",
      "queryParam": "Parámetro de consulta",
      "decodedValue": "Valor decodificado",
      "malformed": "Secuencia de codificación porcentual incorrecta."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "Versión de UUID",
      "v4": "v4 (Aleatoria)",
      "v7": "v7 (Ordenada por tiempo)",
      "quantity": "Cantidad (1–100)",
      "generate": "Generar UUID",
      "uppercase": "Mayúsculas",
      "includeHyphens": "Incluir guiones",
      "wrapBraces": "Encerrar entre {llaves}",
      "generatedLabel": "UUID generados",
      "copyAll": "Copiar todo"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Índigo sobre blanco",
      "presetSlate": "Tinta pizarra",
      "presetEmerald": "Insignia esmeralda",
      "presetDark": "Modo oscuro",
      "swapColors": "Intercambiar colores",
      "fgTitle": "Color de primer plano / texto",
      "bgTitle": "Color de fondo",
      "copyHex": "Copiar HEX",
      "pickerSuffix": "selector",
      "hexInputSuffix": "entrada HEX",
      "contrastRatioLabel": "Relación de contraste WCAG 2.1",
      "checkAaNormal": "WCAG AA: texto normal",
      "checkAaLarge": "WCAG AA: texto grande / IU",
      "checkAaaNormal": "WCAG AAA: texto normal",
      "checkAaaLarge": "WCAG AAA: texto grande",
      "pass": "APROBADO",
      "fail": "NO APROBADO",
      "livePreviewLabel": "Vista previa de accesibilidad en vivo",
      "previewHeading": "La tipografía clara sigue siendo fácil de leer en cualquier tamaño de pantalla.",
      "previewBody": "El texto normal del cuerpo (14–16 px) requiere una relación de contraste de al menos 4.5:1 para el nivel AA de WCAG y de 7.0:1 para el nivel AAA. Los encabezados grandes (18 pt o más, o 14 pt en negrita) requieren al menos 3.0:1.",
      "outlinedControl": "Control de interfaz con contorno",
      "hexOnHex": "{fg} sobre {bg}",
      "extractTitle": "Extraer paleta de colores de una imagen",
      "extractBody": "Sube una captura de pantalla, un logotipo o una foto para extraer las muestras HEX dominantes directamente en tu verificación de contraste.",
      "appliesToLabel": "La muestra seleccionada se aplica a:",
      "foregroundBtn": "Primer plano",
      "backgroundBtn": "Fondo",
      "selectImage": "Selecciona una imagen para extraer muestras",
      "loadedReplace": "Cargado: {name} (subir otra)",
      "selectImageError": "Selecciona una imagen PNG, JPG, WebP o GIF.",
      "unableToRead": "No se pudo leer \"{name}\".",
      "canvasUnavailable": "Contexto 2D de Canvas no disponible.",
      "transparentImage": "La imagen parece completamente transparente.",
      "unableToExtract": "No se pudo extraer la paleta.",
      "areaPercent": "~{n}% del área"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 Pestaña del navegador",
        "taskbar": "32×32 Barra de tareas / HiDPI",
        "desktopShortcut": "48×48 Acceso directo de escritorio",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 Pantalla de inicio de PWA"
      },
      "monogramMode": "Creador de insignias con monograma",
      "imageMode": "Subir imagen del logotipo",
      "lettersLabel": "Texto / iniciales (1–3 caracteres)",
      "cornerShapeLabel": "Forma de las esquinas",
      "roundedSquare": "Cuadrado redondeado",
      "circle": "Círculo",
      "sharpSquare": "Cuadrado con esquinas rectas",
      "square": "Cuadrado",
      "bgColorLabel": "Color de fondo",
      "textColorLabel": "Color del texto",
      "chooseLogo": "Elige un logotipo PNG, JPG, WebP o SVG",
      "loadedReplace": "Cargado: {name} (haz clic para reemplazar)",
      "cropMaskLabel": "Máscara de recorte",
      "unableToRead": "No se pudo leer \"{name}\".",
      "canvasUnavailable": "Contexto 2D de Canvas no disponible.",
      "failedEncode": "No se pudo codificar el PNG del favicon.",
      "unableToGenerate": "No se pudieron generar los favicons.",
      "icoBundleTitle": "Paquete favicon.ico de varios tamaños (16 px + 32 px + 48 px)",
      "icoBundleBody": "Archivo .ico binario conforme a los estándares, listo para la carpeta raíz /public/ de tu sitio web",
      "downloadIco": "Descargar favicon.ico",
      "faviconPreviewAlt": "Vista previa del favicon 32x32",
      "iconAlt": "Icono de {size}x{size}",
      "htmlTagsLabel": "Etiquetas de enlace HTML <head>",
      "copyHtml": "Copiar HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Elige cualquier archivo para calcular sumas de verificación criptográficas",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Se calcula localmente con la API Web Crypto · Sin subir archivos (se recomienda menos de 500 MB)",
      "cryptoUnavailable": "La API Web Crypto SubtleCrypto no está disponible en este contexto del navegador.",
      "hashFailed": "No se pudo calcular el hash del archivo en la memoria del navegador (los archivos de varios cientos de MB pueden superar los límites de RAM).",
      "computing": "Calculando sumas de verificación SHA-1, SHA-256, SHA-384 y SHA-512 localmente...",
      "fileLabel": "Archivo:",
      "sizeLabel": "Tamaño:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Modificado:",
      "bytesSuffix": "{n} bytes",
      "downloadSha256": "Descargar .sha256",
      "sha256Label": "SHA-256 (recomendado)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (solo para compatibilidad heredada)",
      "verifyLabel": "Verificar con la suma de verificación esperada",
      "expectedPlaceholder": "Pega la suma de verificación SHA-256, SHA-512, SHA-384 o SHA-1 publicada (o una línea .sha256sum)...",
      "verified": "¡Suma de verificación confirmada! El archivo coincide exactamente con el resumen {algorithm} esperado.",
      "mismatch": "¡La suma de verificación no coincide! Ninguno de los resúmenes calculados coincide con el valor esperado."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Elige una imagen para comprimir (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Se procesa localmente con HTML5 Canvas · Nunca se sube a servidores remotos",
      "uploadImageError": "Sube un archivo de imagen PNG, JPG, WebP o GIF.",
      "unableToDecode": "No se pudo decodificar \"{name}\".",
      "canvasUnavailable": "Contexto 2D de Canvas no disponible.",
      "compressionFailed": "La compresión falló en el lienzo del navegador.",
      "unableToCompress": "No se pudo comprimir la imagen.",
      "unableToRead": "No se pudo leer \"{name}\".",
      "invalidImage": "Archivo de imagen no válido.",
      "outputFormatLabel": "Formato de salida",
      "webpOption": "WebP (el tamaño web moderno más pequeño)",
      "jpgOption": "JPG (la mayor compatibilidad)",
      "pngOption": "PNG (transparencia sin pérdida)",
      "maxWidthLabel": "Límite máximo de ancho",
      "keepOriginalWidth": "Mantener el ancho original",
      "max1920": "Máx. 1920 px (Full HD)",
      "max1280": "Máx. 1280 px (blog / hero)",
      "max800": "Máx. 800 px (miniaturas)",
      "qualityLabel": "Calidad: ",
      "losslessPng": "PNG sin pérdida",
      "originalLabel": "Original",
      "compressedLabel": "Comprimida",
      "changeLabel": "Cambio",
      "outputSummary": "Salida: {w} × {h} px · {ext}",
      "compressing": "Comprimiendo...",
      "downloadExt": "Descargar .{ext}",
      "previewAlt": "Vista previa de la imagen comprimida"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Selecciona una o varias imágenes para convertir",
      "imagesLoaded": "{n} imagen(es) cargada(s): haz clic para agregar o reemplazar",
      "batchNote": "Convierte por lotes PNG, JPG, WebP, SVG o GIF a PNG, JPG o WebP localmente",
      "convertToLabel": "Convertir a formato",
      "pngOption": "PNG (.png: conserva la transparencia)",
      "qualityLabel": "Calidad con pérdida: ",
      "lossless": "Sin pérdida",
      "alphaFillLabel": "Relleno alfa",
      "converting": "Convirtiendo...",
      "reconvert": "Volver a convertir",
      "selectFilesError": "Selecciona uno o más archivos de imagen (PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "No se pudo decodificar \"{name}\".",
      "canvasUnavailable": "Canvas 2D no disponible.",
      "conversionFailed": "La conversión falló para \"{name}\".",
      "batchFailed": "La conversión por lotes de imágenes falló.",
      "downloadExt": "Descargar .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Elige una imagen para redimensionar o recortar a dimensiones predefinidas",
      "fileWithDims": "{name} (original: {w} × {h} px)",
      "supportsNote": "Admite redimensionado por píxeles, bloqueo de aspecto y preajustes sociales con recorte centrado",
      "selectImageError": "Selecciona una imagen PNG, JPG, WebP o GIF.",
      "unableToDecode": "No se pudo decodificar \"{name}\".",
      "unableToRead": "No se pudo leer la imagen.",
      "failedLoading": "No se pudo cargar la imagen para redimensionarla.",
      "canvasUnavailable": "Canvas 2D no disponible.",
      "failedGenerating": "No se pudo generar la imagen redimensionada.",
      "resizeFailed": "El redimensionado falló.",
      "quickPresets": "Preajustes rápidos:",
      "presetOg": "OG para compartir (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Cuadrado (1080×1080)",
      "presetAvatar": "Avatar (512×512)",
      "widthLabel": "Ancho (px)",
      "heightLabel": "Alto (px)",
      "fitModeLabel": "Modo de ajuste de aspecto",
      "coverCropOption": "Recorte de cobertura centrado (sin estirar)",
      "exactOption": "Escalar a dimensiones exactas",
      "outputFormatLabel": "Formato de salida",
      "lockAspect": "Bloquear la relación de aspecto original al escribir las dimensiones",
      "resizeButton": "Redimensionar a {w} × {h} px",
      "readySummary": "Lista: {w} × {h} px ({ext})",
      "downloadResized": "Descargar redimensionada .{ext}",
      "previewAlt": "Imagen redimensionada de salida"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Elige una imagen para girar, voltear o aplicar filtros",
      "loadedReplace": "{name} (haz clic para reemplazar)",
      "previewNote": "Vista previa en tiempo real con HTML5 Canvas y exportación por píxeles",
      "selectImageError": "Selecciona una imagen PNG, JPG, WebP o GIF.",
      "failedLoading": "No se pudo cargar \"{name}\".",
      "rotateLeft": "Girar 90° a la izquierda",
      "rotateRight": "Girar 90° a la derecha",
      "flipHorizontal": "Voltear horizontalmente",
      "flipVertical": "Voltear verticalmente",
      "brightnessLabel": "Brillo: ",
      "contrastLabel": "Contraste: ",
      "grayscaleLabel": "Blanco y negro (escala de grises)",
      "resetAll": "Restablecer todo",
      "exportFormatLabel": "Formato de exportación",
      "livePreview": "Vista previa en vivo del lienzo"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Imagen → URI de datos Base64",
      "decodeMode": "Base64 → vista previa de imagen",
      "selectImageError": "Selecciona un archivo de imagen (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "No se pudo leer \"{name}\".",
      "chooseImage": "Elige un archivo de imagen para codificar",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Genera URI de datos, Base64 sin procesar, fragmentos HTML <img> y de fondo CSS",
      "binarySizeLabel": "Tamaño del archivo binario",
      "base64SizeLabel": "Tamaño del URI Base64 (~33 % más grande)",
      "fullDataUriLabel": "URI de datos completo",
      "copyDataUri": "Copiar URI de datos",
      "copyRawBase64": "Copiar Base64 sin procesar",
      "copyImg": "Copiar <img>",
      "copyCss": "Copiar CSS",
      "encodedAria": "URI de datos Base64 codificado",
      "encodedAlt": "Vista previa codificada",
      "pasteLabel": "Pega una cadena de imagen Base64 o un URI de datos",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... o cadena base64 sin formato",
      "invalidPayload": "El texto Base64 pegado no es una carga útil de imagen codificada válida.",
      "decodedAlt": "Vista previa Base64 decodificada",
      "downloadExt": "Descargar .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Muy fuerte",
        "strong": "Fuerte",
        "moderate": "Moderada",
        "weak": "Débil"
      },
      "randomPasswordMode": "Contraseña aleatoria",
      "passphraseMode": "Frase de contraseña Diceware",
      "regenerate": "Regenerar",
      "passwordLengthLabel": "Longitud de la contraseña: ",
      "charsSuffix": " caracteres",
      "batchCountLabel": "Cantidad por lote: ",
      "uppercaseLabel": "Mayúsculas (A–Z)",
      "lowercaseLabel": "Minúsculas (a–z)",
      "numbersLabel": "Números (0–9)",
      "symbolsLabel": "Símbolos (!@#$%...)",
      "excludeAmbiguousLabel": "Excluir caracteres ambiguos (0, O, 1, l, I)",
      "wordCountLabel": "Cantidad de palabras: ",
      "wordSeparatorLabel": "Separador de palabras",
      "hyphenOption": "Guion (-)",
      "underscoreOption": "Guion bajo (_)",
      "periodOption": "Punto (.)",
      "spaceOption": "Espacio ( )",
      "capitalizeWordsLabel": "Palabras con mayúscula inicial",
      "appendDigitLabel": "Agregar número de 2 dígitos",
      "selectGroupWarning": "Selecciona al menos un grupo de caracteres para generar contraseñas.",
      "entropyBits": "~{n} bits de entropía",
      "poolSizeSuffix": " · tamaño del conjunto: {n}",
      "wordListSuffix": " · lista de {n} palabras",
      "copyAll": "Copiar todo"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "URL de sitio web",
        "text": "Texto",
        "wifi": "Configuración de Wi-Fi",
        "vcard": "Contacto vCard",
        "email": "Correo electrónico",
        "phone": "Número de teléfono",
        "plainText": "Texto sin formato"
      },
      "liveCameraCapture": "Captura con cámara en vivo",
      "scanMode": "Escanear / decodificar imagen QR",
      "vcardMode": "Generador de QR de contacto vCard",
      "uploadQr": "Subir imagen de código QR",
      "uploadQrNote": "Captura PNG, JPG, WebP o SVG · 100 % en el cliente",
      "liveCameraTitle": "Escaneo con la cámara del dispositivo",
      "liveCameraNote": "Usa la cámara local solo cuando se concede el permiso",
      "startCamera": "Iniciar escáner de cámara",
      "stopCamera": "Detener cámara",
      "cameraHint": "Apunta la cámara a un código QR: la captura se detiene automáticamente al decodificarlo.",
      "uploadImageError": "Sube una imagen PNG, JPG, WebP o SVG que contenga un código QR.",
      "unableToLoad": "No se pudo cargar \"{name}\".",
      "noQrDetected": "No se pudo detectar ningún código QR en esta imagen. Asegúrate de que esté bien enfocada, con márgenes de zona tranquila despejados y alto contraste.",
      "unableToScan": "No se pudo escanear la imagen.",
      "cameraUnsupported": "El escaneo con cámara no es compatible con este navegador.",
      "cameraDenied": "El permiso de cámara fue denegado o no hay ningún dispositivo de cámara disponible. Sube una imagen de código QR.",
      "decodedPayload": "Contenido decodificado · {kind}",
      "sourceLabel": "Fuente: ",
      "copyPayload": "Copiar contenido",
      "decodedAria": "Texto QR decodificado",
      "detectedLink": "Enlace web detectado: ",
      "uploadedPreviewAlt": "Vista previa del código QR subido",
      "firstNameLabel": "Nombre",
      "lastNameLabel": "Apellido",
      "orgLabel": "Organización",
      "jobTitleLabel": "Cargo",
      "defaultJobTitle": "Diseñador de producto",
      "phoneLabel": "Número de teléfono",
      "emailLabel": "Correo electrónico",
      "websiteLabel": "URL del sitio web",
      "rawVcardLabel": "Contenido vCard 3.0 sin procesar",
      "copyVcard": "Copiar vCard",
      "vcardQrAlt": "Código QR vCard generado",
      "downloadPng": "Descargar PNG",
      "downloadSvg": "Descargar SVG"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "Corto",
          "ratio": "~10–20% de la longitud"
        },
        "medium": {
          "label": "Medio",
          "ratio": "~30–40% de la longitud"
        },
        "detailed": {
          "label": "Largo (detallado)",
          "ratio": "~50–60% de la longitud"
        }
      },
      "loadingLengthLabels": {
        "short": "corto",
        "medium": "mediano",
        "detailed": "largo"
      },
      "formatOptions": {
        "paragraph": {
          "label": "Resumen en párrafo",
          "hint": "Prosa fluida y cohesiva"
        },
        "bullets": {
          "label": "Resumen con viñetas",
          "hint": "Viñetas claras y fáciles de leer"
        },
        "key-points": {
          "label": "Extracción de puntos clave",
          "hint": "Conclusiones numeradas"
        },
        "simple": {
          "label": "Lenguaje sencillo",
          "hint": "Palabras sencillas y cotidianas"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "de párrafo",
        "bullets": "con viñetas",
        "key-points": "de puntos clave",
        "simple": "en lenguaje sencillo"
      },
      "languageLabels": {
        "Same as original language": "Igual que el idioma original",
        "English (US)": "Inglés (EE. UU.)",
        "English (UK)": "Inglés (Reino Unido)",
        "Spanish": "Español",
        "French": "Francés",
        "German": "Alemán",
        "Portuguese": "Portugués",
        "Italian": "Italiano",
        "Dutch": "Neerlandés",
        "Arabic": "Árabe",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Turco",
        "Japanese": "Japonés",
        "Korean": "Coreano",
        "Chinese (Simplified)": "Chino (simplificado)"
      },
      "sampleArticle": "En 2026, los equipos de ingeniería de producto distribuidos dependen cada vez más de las actualizaciones escritas asíncronas en lugar de las reuniones diarias de estado para proteger el tiempo de desarrollo con concentración profunda. En un estudio interno de seis meses con 140 ingenieros en Londres, Berlín y Toronto, los equipos que reemplazaron tres llamadas semanales de sincronización por resúmenes escritos estructurados los martes y jueves reportaron una reducción del 28 % en la fragmentación del calendario y entregaron los hitos de los sprints un 14 % más rápido. Lo más importante es que el estudio concluyó que las actualizaciones escritas solo funcionaban cuando los ingenieros seguían tres reglas constantes: indicar los obstáculos concretos al principio, enlazar directamente con las solicitudes de incorporación de cambios (pull requests) o los ID de incidencias, y registrar fechas objetivo exactas en lugar de frases vagas como \"pronto\". Los gerentes mantuvieron una única sesión semanal en vivo de 25 minutos dedicada exclusivamente a los dilemas de arquitectura abiertos y a las revisiones del equipo, preservando la relación interpersonal sin interrumpir los bloques de programación.",
      "secUnit": "s",
      "minUnit": "min",
      "title": "Resumidor de texto con IA gratuito",
      "noAccount": "No requiere cuenta, créditos ni registro",
      "allowanceBefore": "Asignación gratuita diaria:",
      "allowanceAfter": "restantes hoy",
      "allowanceFallback": "Hasta 5 resúmenes gratuitos al día",
      "backendTitle": "La clave del backend de IA aún no está activa en este entorno.",
      "backendEnsureBefore": "Asegúrate de que",
      "backendEnsureAfter": "esté configurado para ejecutar resúmenes con IA en vivo.",
      "stepLength": "1. Longitud del resumen",
      "stepFormat": "2. Formato del resumen",
      "stepLanguage": "3. Idioma de salida",
      "stepText": "4. Texto fuente para resumir",
      "lengthAria": "Longitud del resumen",
      "paste": "Pegar",
      "clipboardUnavailable": "La lectura del portapapeles no está disponible aquí; usa Ctrl/Cmd + V dentro del editor.",
      "clipboardEmpty": "Tu portapapeles no contiene ningún texto en este momento.",
      "clipboardBlocked": "El permiso del portapapeles fue bloqueado; pega directamente con Ctrl/Cmd + V.",
      "placeholder": "Pega un artículo, notas de investigación, la transcripción de una reunión o un ensayo aquí (mínimo 25 palabras / 120 caracteres, hasta 25,000 caracteres)...",
      "word": "palabra",
      "words": "palabras",
      "chars": "caracteres",
      "estRead": "Lectura est.: ",
      "stop": "Detener",
      "summarizing": "Resumiendo...",
      "summarizeButton": "Resumir texto",
      "addMoreBefore": "Agrega al menos ",
      "addMoreMiddle": " palabras más (mínimo ",
      "addMoreAnd": " palabras y ",
      "addMoreAfter": " caracteres) para que la IA pueda extraer un resumen útil.",
      "generatingSummary": "Generando un resumen {length} (formato {format})...",
      "errorDailyLimit": "Límite diario gratuito de resúmenes alcanzado",
      "errorRateLimited": "Reduce un poco el ritmo",
      "errorGlobal": "Capacidad diaria de la plataforma alcanzada",
      "errorGeneric": "No se pudo resumir en este momento",
      "retry": "Reintentar",
      "emptyError": "Pega o escribe un artículo, informe o notas antes de resumir.",
      "tooShortErrorBefore": "Tu texto es demasiado corto para resumirlo de forma útil (",
      "tooShortErrorMiddle": " palabras). Ingresa al menos ",
      "tooShortErrorAnd": " palabras y ",
      "tooShortErrorAfter": " caracteres.",
      "overLimitBefore": "La entrada supera el límite de ",
      "overLimitMiddle": " caracteres. Acorta tu texto en ",
      "overLimitAfter": " caracteres e inténtalo de nuevo.",
      "connectionError": "Problema temporal de conexión al resumir. Inténtalo de nuevo.",
      "resultTitle": "Resultado del resumen",
      "shorterSuffix": "% más corto",
      "copySummary": "Copiar resumen",
      "downloadTxt": "Descargar TXT",
      "originalRead": "Lectura original",
      "summaryRead": "Lectura del resumen",
      "compressionSaved": "Compresión y tiempo ahorrado",
      "savesPrefix": "ahorra ~",
      "tabCompare": "Original vs. resumen",
      "tabSummary": "Solo resumen",
      "resultAria": "Resumen generado y comparación",
      "originalText": "Texto original",
      "summaryOutput": "Resumen",
      "summarizedWith": "Resumido con el modelo Groq de nivel gratuito",
      "fallbackNote": " (cambio automático de modelo)",
      "preservedNote": ". Los nombres, fechas y cifras clave se conservan tal como aparecen en tu texto."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "Reducir imagen a menos de 100 KB",
          "query": "Quiero reducir el tamaño de mi imagen a 100 KB.",
          "categoryId": "image-file"
        },
        {
          "label": "Convertir PDF en imágenes",
          "query": "Necesito convertir un PDF en imágenes.",
          "categoryId": "pdf"
        },
        {
          "label": "Contar palabras de un ensayo",
          "query": "Quiero contar las palabras de mi ensayo.",
          "categoryId": "text-writing"
        },
        {
          "label": "Generar un código QR",
          "query": "Necesito generar un código QR.",
          "categoryId": "social-media"
        },
        {
          "label": "Cambiar las dimensiones de una imagen",
          "query": "Quiero cambiar las dimensiones de una imagen.",
          "categoryId": "image-file"
        },
        {
          "label": "Corregir gramática y reescribir correo",
          "query": "Quiero que la IA corrija errores de gramática y reescriba un correo de forma profesional.",
          "categoryId": "text-writing"
        },
        {
          "label": "Resumir un artículo largo",
          "query": "Necesito resumir un artículo largo en puntos clave.",
          "categoryId": "text-writing"
        },
        {
          "label": "Verificar PDF a Word",
          "query": "Necesito convertir un PDF a Word.",
          "categoryId": "all"
        }
      ],
      "title": "Buscador inteligente de herramientas con IA",
      "searchesLine": "Busca en {count} herramientas reales de UtilityFlow (85 de navegador + 2 de IA)",
      "aiSearchesToday": "Búsquedas con IA hoy:",
      "leftUnlimited": "restantes · Búsqueda local instantánea ilimitada",
      "quotaFallback": "Hasta 10 búsquedas con IA gratis al día · Búsqueda local ilimitada",
      "backendBefore": "La clasificación semántica con IA requiere ",
      "backendAfter": " en el servidor, mientras que la búsqueda local instantánea por palabras clave en las {count} herramientas funciona de inmediato.",
      "queryLabel": "Describe lo que quieres hacer (en lenguaje sencillo o con palabras clave)",
      "queryPlaceholder": "p. ej., \"Quiero reducir el tamaño de mi imagen a 100 KB\" o \"convertir PDF a PNG\"",
      "categoryLabel": "Categoría de tarea opcional",
      "allCategories": "Todas las categorías ({count} herramientas)",
      "characters": "caracteres",
      "findButton": "Encontrar herramienta",
      "findingButton": "Buscando la mejor herramienta...",
      "tryTask": "Prueba una tarea real o selecciona una pregunta común",
      "loadingLine": "Comparando tu solicitud con las {count} herramientas verificadas de UtilityFlow...",
      "errorTitle": "La clasificación semántica con IA no está disponible",
      "retryAi": "Reintentar IA",
      "describeError": "Describe la tarea o el problema que quieres resolver (al menos 2 caracteres).",
      "queryTooLongBefore": "La consulta supera los ",
      "queryTooLongAfter": " caracteres. Mantén tu descripción breve.",
      "unexpectedFormat": "La IA devolvió un formato inesperado. A continuación se muestran las coincidencias rápidas por palabra clave de nuestro inventario real.",
      "contactError": "Problema temporal al contactar con la clasificación de IA. Los resultados de la búsqueda por palabra clave siguen activos abajo.",
      "bestTool": "Mejor herramienta recomendada",
      "noExact": "No hay una herramienta exacta disponible actualmente",
      "noMatchFallback": "UtilityFlow actualmente no incluye una herramienta dedicada que realice directamente \"{query}\". Nunca inventamos herramientas ni enlaces falsos.",
      "relevantAlt": "Alternativas relevantes",
      "relatedTools": "Herramientas existentes relacionadas (solo flujos de trabajo parciales)",
      "supportedPrefix": "Formatos admitidos: ",
      "openName": "Abrir {name}",
      "matchedWith": "Encontrado en el inventario verificado de UtilityFlow con el modelo Groq de nivel gratuito",
      "fallbackNote": " (cambio automático)",
      "instantMatches": "Coincidencias instantáneas por palabra clave ({count})",
      "matchedLocally": "Encontradas localmente entre {count} herramientas",
      "matchedPrefix": "Coincidencias: ",
      "suggestionsTitle": "Sugerencias inteligentes",
      "suggestionsAll": "en tareas populares",
      "suggestionsCategory": "en la categoría seleccionada",
      "clickOpen": "Haz clic en una herramienta para abrirla directamente",
      "openToolArrow": "Abrir herramienta →",
      "recommendationsAria": "Recomendaciones de herramientas con IA",
      "instantAria": "Coincidencias instantáneas por palabra clave",
      "suggestionsAria": "Herramientas sugeridas al cargar la página"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "Corregir gramática",
          "hint": "Corrige la gramática y la puntuación"
        },
        "rewrite-text": {
          "label": "Reescribir texto",
          "hint": "Flujo fluido y fraseo natural"
        },
        "improve-writing": {
          "label": "Mejorar redacción",
          "hint": "Pule la claridad y la elección de palabras"
        },
        "make-professional": {
          "label": "Hacerlo profesional",
          "hint": "Claridad laboral y ejecutiva"
        },
        "make-casual": {
          "label": "Hacerlo informal",
          "hint": "Tono relajado y cotidiano"
        },
        "simplify-text": {
          "label": "Simplificar texto",
          "hint": "Oraciones claras y fáciles de leer"
        },
        "expand-text": {
          "label": "Ampliar texto",
          "hint": "Agrega detalles útiles basados en el texto"
        },
        "paraphrase": {
          "label": "Parafrasear",
          "hint": "Nueva redacción, mismo significado"
        },
        "fix-spelling": {
          "label": "Corregir ortografía",
          "hint": "Corrige solo errores tipográficos y mayúsculas"
        },
        "write-email": {
          "label": "Escribir un correo",
          "hint": "Correo estructurado con asunto"
        }
      },
      "tones": {
        "professional": "Profesional",
        "friendly": "Amistoso",
        "formal": "Formal",
        "casual": "Informal",
        "academic": "Académico",
        "persuasive": "Persuasivo",
        "simple": "Sencillo"
      },
      "languageLabels": {
        "English (US)": "Inglés (EE. UU.)",
        "English (UK)": "Inglés (Reino Unido)",
        "Spanish": "Español",
        "French": "Francés",
        "German": "Alemán",
        "Portuguese": "Portugués",
        "Italian": "Italiano",
        "Dutch": "Neerlandés",
        "Arabic": "Árabe",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Turco",
        "Japanese": "Japonés",
        "Korean": "Coreano",
        "Chinese (Simplified)": "Chino (simplificado)",
        "Same as original language": "Igual que el idioma original"
      },
      "samples": {
        "default": "Hola equipo, queria hacer seguimiento de la reunion de ayer y compartir la cronologia actualizada para el lanzamiento de nuestro producto del cuarto trimestre. Todavia hay dos puntos que nesecitamos revisar antes del viernes, asi que avisenme si surge algun inconveniente.",
        "write-email": "necesito avisar al cliente Daniel sobre el lanzamiento de la aplicacion movil. las pruebas terminaron hoy, quedan 2 errores menores de interfaz por corregir mañana por la mañana, y estara lista para enviar a la App Store el viernes por la tarde. preguntale si el lunes a las 10 a. m. le funciona para la llamada de entrega.",
        "fix-spelling": "Estamos encantados de anunciar que la ventana de mantenimiento trimestral transcurrio sin problemas y sin tiempo de inactividad no planeado en todos los servidores.",
        "expand-text": "Las reuniones breves asincronas a distancia ahorran tiempo a los ingenieros y permiten que los compañeros de todo el mundo se concentren sin interrupciones constantes del calendario."
      },
      "title": "Asistente de escritura con IA gratuito",
      "noLogin": "No requiere registro ni tarjeta",
      "allowanceBefore": "Asignación gratuita diaria:",
      "allowanceAfter": "restantes hoy",
      "allowanceFallback": "Hasta 5 solicitudes gratuitas al día",
      "backendTitle": "La clave del backend de IA aún no está activa en este entorno.",
      "backendSet": "Configura",
      "backendRest": "en el servidor o Worker para activar la generación de texto con IA.",
      "stepTask": "1. Elige la tarea de escritura (10 modos)",
      "stepTone": "2. Tono",
      "stepLanguage": "3. Idioma de salida",
      "stepText": "4. Tu texto original",
      "taskSelectorAria": "Selector de tarea de escritura",
      "placeholder": "Escribe o pega tu párrafo, mensaje, notas o borrador de correo aquí (hasta 12,000 caracteres)...",
      "word": "palabra",
      "words": "palabras",
      "characters": "caracteres",
      "chars": "caracteres",
      "tip": "Consejo: pulsa Ctrl + Intro para generar",
      "stop": "Detener",
      "generating": "Generando...",
      "applying": "Aplicando",
      "tonePhrase": "tono {tone}",
      "applyingIn": "en",
      "errorDailyLimit": "Límite diario gratuito alcanzado",
      "errorRateLimited": "Reduce un poco el ritmo",
      "errorGlobal": "Capacidad diaria de la plataforma alcanzada",
      "errorGeneric": "No se pudo completar la solicitud de escritura",
      "retry": "Reintentar",
      "emptyError": "Ingresa o pega un texto antes de hacer clic en Generar.",
      "overLimitBefore": "La entrada supera el límite de ",
      "overLimitMiddle": " caracteres. Acorta tu borrador en ",
      "overLimitAfter": " caracteres e inténtalo de nuevo.",
      "connectionError": "Problema temporal de conexión al generar. Inténtalo de nuevo.",
      "resultTitle": "Resultado mejorado",
      "copyResult": "Copiar resultado",
      "downloadTxt": "Descargar TXT",
      "editOutput": "Seguir editando el resultado",
      "tabCompare": "Original vs. mejorado",
      "tabDiff": "Resaltar cambios",
      "tabResult": "Solo resultado",
      "resultAria": "Resultado de escritura mejorado y comparación",
      "originalText": "Texto original",
      "improvedText": "Texto mejorado",
      "removed": "Eliminado",
      "added": "Agregado / actualizado",
      "processedWith": "Procesado con el modelo Groq de nivel gratuito",
      "fallbackNote": " (cambio automático de modelo)",
      "reviewNote": ". Revisa siempre el texto final antes de enviarlo."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Etiquetas canónicas y hreflang",
      "redirectsMode": "Generador de reglas de redirección 301",
      "canonicalLabel": "URL canónica autorreferencial",
      "alternatesLabel": "Versiones alternativas por idioma y región",
      "addLocale": "Agregar configuración regional",
      "langCodeAria": "Código de idioma",
      "alternateUrlAria": "URL alternativa",
      "removeLocaleAria": "Eliminar fila de configuración regional",
      "htmlTagsLabel": "Etiquetas de enlace HTML <head>",
      "copyHtml": "Copiar HTML",
      "xmlSnippetLabel": "Fragmento <xhtml:link> del sitemap XML",
      "copyXml": "Copiar XML",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (bloque de servidor)",
      "copyRules": "Copiar {n} reglas",
      "pairsLabel": "Pares de origen → destino (separados por coma, tabulación o “ -> ”)",
      "generatedConfigLabel": "Configuración de redirección 301 generada",
      "skippedInvalid": "Se omitieron {n} línea(s) sin destino."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "El SEO técnico comienza con URL limpias y rastreables, etiquetas canónicas precisas y sitemaps XML estructurados. Cuando los editores escriben contenido útil centrado en la intención del usuario en lugar de rellenar palabras clave, los motores de búsqueda comprenden la profundidad del tema de forma natural. Audita tus encabezados, metadescripciones y enlaces internos con regularidad.",
      "defaultTargetKeyword": "seo técnico",
      "guidanceTitle": "Orientación editorial:",
      "guidanceBody": "Los motores de búsqueda modernos no premian alcanzar una cuota fija de densidad de palabras clave. Usa esta auditoría de distribución para detectar repeticiones accidentales o confirmar que los conceptos principales aparecen con claridad en tu texto.",
      "targetLabel": "Palabra clave / frase objetivo (opcional)",
      "targetPlaceholder": "p. ej., seo técnico",
      "phraseLengthLabel": "Longitud de la frase",
      "oneWord": "1 palabra",
      "twoWord": "Frases de 2 palabras",
      "threeWord": "Frases de 3 palabras",
      "stripHtml": "Eliminar etiquetas HTML",
      "ignoreStopWords": "Ignorar palabras vacías",
      "textLabel": "Borrador de artículo o texto HTML pegado",
      "totalWords": "Palabras totales",
      "uniqueVocabulary": "Vocabulario único",
      "readingTime": "Tiempo estimado de lectura",
      "targetPrefix": "Objetivo: ",
      "hits": "{n} coincidencias ({d}%)",
      "rankHeader": "Posición",
      "termHeader": "Término / N-grama",
      "occurrencesHeader": "Ocurrencias",
      "shareHeader": "Porcentaje (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Herramientas de utilidad rápidas en el navegador",
      "defaultDescription": "Explora 85 herramientas rápidas y privadas en el navegador para editar texto, codificar, calcular finanzas, trabajar con PDF y SEO.",
      "pageTitleLabel": "Título de la página (<title> / og:title)",
      "titleChars": "{n} caracteres (ideal: 30–60)",
      "metaDescriptionLabel": "Metadescripción",
      "descChars": "{n} caracteres (ideal: 120–160)",
      "canonicalUrlLabel": "URL canónica",
      "ogImageLabel": "URL de la imagen Open Graph (se recomienda 1200×630)",
      "siteNameLabel": "Nombre del sitio (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter Card",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Directiva de seguimiento de robots",
      "includeViewportLabel": "Incluir etiquetas charset y viewport",
      "generatedTagsLabel": "Etiquetas HTML <head> generadas",
      "copyHtml": "Copiar HTML",
      "downloadHtml": "Descargar .html",
      "socialPreviewLabel": "Vista previa de la tarjeta para compartir",
      "socialPreviewFallback": "Vista previa para compartir en redes",
      "untitledPage": "Página sin título",
      "metaSnippetFallback": "Aquí aparece el fragmento de la metadescripción."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Auditoría de código fuente HTML en el cliente:",
      "auditBody": "Los navegadores bloquean el raspado entre orígenes (CORS) de sitios web de terceros y no tienen acceso a analíticas de búsqueda privadas. Pega el código fuente HTML de tu página a continuación (Ver código fuente) para auditar las etiquetas DOM localmente.",
      "pastedHtmlLabel": "Código fuente HTML pegado",
      "loadSampleHtml": "Cargar HTML de ejemplo",
      "htmlPlaceholder": "Pega aquí el código fuente <html>...</html> sin procesar...",
      "scoreLabel": "Puntuación de auditoría DOM",
      "checksPassed": "{passed} / {total} verificaciones superadas",
      "linksSummary": "Enlaces: {total} ({internal} int. / {external} ext.)",
      "robotsMetaLabel": "Meta robots: ",
      "robotsDefault": "Predeterminado (index, follow)",
      "headingOutline": "Esquema de encabezados (H1–H4)",
      "emptyState": "Pega el código fuente HTML a la izquierda para inspeccionar el título, la descripción, los encabezados, las URL canónicas y las etiquetas alt.",
      "checkTitle": "Etiqueta de título (<title>)",
      "checkMetaDesc": "Metadescripción",
      "checkH1": "Exactamente un encabezado <h1>",
      "checkCanonical": "URL canónica (<link rel=\"canonical\">)",
      "checkAlt": "Atributos alt de imágenes",
      "checkOgJsonLd": "Open Graph y datos estructurados JSON-LD",
      "titleDetail": "{n} caracteres: \"{title}\"",
      "titleMissing": "Falta la etiqueta <title> en <head>.",
      "descDetail": "{n} caracteres (objetivo: 120–160).",
      "descMissing": "Falta <meta name=\"description\">.",
      "h1Detail": "Se encontraron {n} elemento(s) <h1>.",
      "canonicalMissing": "No se declaró ninguna etiqueta canónica.",
      "noImages": "No hay elementos <img> en el código.",
      "altDetail": "{with}/{total} imágenes incluyen texto alternativo descriptivo.",
      "ogDetail": "og:title {presence} · {n} bloque(s) JSON-LD.",
      "present": "presente",
      "missing": "ausente"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Directiva de indexación",
      "indexOption": "index (Permitir la indexación)",
      "noindexOption": "noindex (Excluir de los resultados de búsqueda)",
      "linkCrawlingLabel": "Rastreo de enlaces",
      "followOption": "follow (Transmitir señales de enlace)",
      "nofollowOption": "nofollow (No seguir enlaces)",
      "largeOption": "large (Elegible para Discover)",
      "htmlTagLabel": "Metaetiqueta HTML <head>",
      "copyHtmlTag": "Copiar etiqueta HTML",
      "httpHeaderLabel": "Encabezado de respuesta HTTP (PDF / no HTML)",
      "copyHeader": "Copiar encabezado",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Patrón de ruta de _headers de Cloudflare",
      "copyBlock": "Copiar bloque"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Plantillas iniciales:",
      "allowAll": "Permitir todos los rastreadores",
      "standardWebApp": "Aplicación web / SaaS estándar",
      "wordpressClean": "WordPress limpio",
      "stagingBlockAll": "Entorno de pruebas (bloquear todo)",
      "crawlerRules": "Reglas de rutas para rastreadores",
      "addRule": "Agregar regla",
      "directiveAria": "Directiva",
      "pathAria": "Ruta",
      "deleteRuleAria": "Eliminar regla",
      "crawlDelayLabel": "Crawl-delay (segundos, opcional)",
      "crawlDelayPlaceholder": "Ninguno",
      "sitemapUrlsLabel": "URL de sitemaps (una por línea)",
      "generatedLabel": "robots.txt generado"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Cómo crear utilidades rápidas para el navegador",
      "defaultFaqQ1": "¿UtilityFlow ejecuta las herramientas localmente en el navegador?",
      "defaultFaqA1": "Sí. Casi todas las utilidades se ejecutan directamente en la memoria del navegador sin enviar los datos a servidores externos.",
      "defaultFaqQ2": "¿El JSON-LD estructurado ayuda al SEO?",
      "defaultFaqA2": "Sí. El JSON-LD válido de Schema.org aclara el contexto de las entidades para los rastreadores y la elegibilidad para resultados enriquecidos.",
      "defaultProductName": "Teclado mecánico ergonómico Pro",
      "defaultProductDesc": "Teclado inalámbrico de perfil bajo diseñado para desarrolladores de software.",
      "defaultCrumbHome": "Inicio",
      "defaultCrumbSeo": "Herramientas SEO",
      "defaultCrumbSchema": "Generador de marcado Schema",
      "headlineLabel": "Titular",
      "authorNameLabel": "Nombre del autor",
      "publisherNameLabel": "Nombre del editor",
      "datePublishedLabel": "Fecha de publicación",
      "articleUrlLabel": "URL del artículo",
      "featuredImageLabel": "URL de la imagen destacada",
      "questionLabel": "Pregunta n.º {n}",
      "removeQuestionAria": "Eliminar pregunta {n}",
      "questionPlaceholder": "Pregunta",
      "acceptedAnswerPlaceholder": "Respuesta aceptada",
      "addFaqRow": "Agregar fila de preguntas frecuentes",
      "productNameLabel": "Nombre del producto",
      "descriptionLabel": "Descripción",
      "priceLabel": "Precio",
      "currencyLabel": "Moneda",
      "availabilityLabel": "Disponibilidad",
      "orgNameLabel": "Nombre de la organización",
      "websiteUrlLabel": "URL del sitio web",
      "logoUrlLabel": "URL del logotipo",
      "breadcrumbLabelAria": "Etiqueta de la ruta de navegación {n}",
      "breadcrumbUrlAria": "URL de la ruta de navegación {n}",
      "labelPlaceholder": "Etiqueta",
      "addLevel": "Agregar nivel",
      "jsonLdOutputLabel": "Salida JSON-LD <script>",
      "copyScriptTag": "Copiar etiqueta de script"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "Formateador y validador de JSON – Imprimir bonito y minificar | UtilityFlow",
      "defaultDescription": "Formatea, valida, minifica y ordena las claves de cargas útiles JSON al instante en tu navegador, con detalles de errores de sintaxis por línea y columna.",
      "desktopSerp": "SERP de escritorio (título de ~580 px)",
      "mobileSerp": "SERP móvil (desc. de ~120 caracteres)",
      "copyTitleMeta": "Copiar título y meta",
      "seoTitleLabel": "Título SEO",
      "titleMetrics": "{chars} caracteres · ~{px} px / máx. 580 px",
      "metaDescriptionLabel": "Metadescripción",
      "descMetrics": "{chars} caracteres · ~{px} px",
      "pageUrlLabel": "URL de la página (para la vista previa de la ruta de navegación)",
      "siteNameLabel": "Nombre del sitio",
      "boldKeywordLabel": "Palabra clave en negrita",
      "optionalPlaceholder": "Opcional",
      "datePrefixLabel": "Prefijo de fecha",
      "datePlaceholder": "p. ej., 12 nov 2025",
      "desktopSimulation": "Simulación de fragmento de búsqueda de escritorio",
      "mobileSimulation": "Simulación de fragmento de búsqueda móvil",
      "titleFallback": "Tu título SEO aparece aquí",
      "descFallback": "Aquí aparece la vista previa de tu metadescripción."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "¡Cómo crear un slug de URL limpio para SEO técnico!\n10 mejores herramientas de café y productividad en 2026\nLista de verificación completa de sitemap XML y robots.txt",
      "domainLabel": "Dominio base / subcarpeta (para la vista previa de la URL completa)",
      "separatorLabel": "Separador de palabras",
      "hyphenOption": "Guion (-) — recomendado por Google",
      "underscoreOption": "Guion bajo (_)",
      "maxLengthLabel": "Longitud máxima del slug ({n} caracteres)",
      "stripStopWords": "Eliminar palabras vacías opcionales en inglés (a, the, and, of, in, to)",
      "trailingSlash": "Incluir barra final (/)",
      "titlesLabel": "Titulares / títulos de página (uno por línea para generación por lotes)",
      "generatedLabel": "Slugs SEO generados ({n})",
      "copyAllSlugs": "Copiar todos los slugs",
      "copyAllUrls": "Copiar todas las URL completas",
      "originalTitleHeader": "Título original",
      "slugUrlHeader": "Slug SEO y URL completa",
      "copyHeader": "Copiar"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "Fecha de <lastmod> (opcional)",
      "changefreqLabel": "Sugerencia de <changefreq>",
      "priorityLabel": "<priority> predeterminada",
      "omitTag": "Omitir etiqueta",
      "deduplicateLabel": "Eliminar URL duplicadas exactas",
      "urlsLabel": "URL canónicas (una URL https:// completa por línea)",
      "skippedInvalid": "Se omitieron {n} línea(s) de URL no válidas: ",
      "generatedLabel": "sitemap.xml generado ({n} URL)",
      "copyXml": "Copiar XML",
      "downloadXml": "Descargar .xml",
      "generatedAria": "Mapa del sitio XML generado"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Creando herramientas rápidas en el navegador para creadores y equipos.   \n\nNuevos consejos de flujo de trabajo cada martes.\n\n¡Pruebe las utilidades gratuitas en el enlace de abajo!",
      "modeBraille": "Espaciador invisible (⠀ U+2800)",
      "modeDot": "Espaciador de punto mínimo (.)",
      "modeClean": "Solo limpiar espacios finales",
      "collapse": "Colapsar espacios dobles accidentales",
      "labelRaw": "Borrador de descripción o biografía",
      "phRaw": "Escriba su descripción con líneas en blanco donde quiera saltos de párrafo...",
      "tip": "Consejo: las aplicaciones sociales suelen colapsar los párrafos en blanco cuando hay espacios finales al final de la línea anterior.",
      "labelOut": "Resultado listo para pegar",
      "copyFormatted": "Copiar descripción formateada",
      "charsLabel": "Caracteres:",
      "linesLabel": "Líneas:",
      "blankLabel": "Saltos en blanco conservados:",
      "fitsBio": "Cabe en la biografía de Instagram de 150 caracteres",
      "captionLength": "Longitud de descripción (supera el límite de 150 de la biografía)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Problema → Agitación → Solución (PAS)",
        "tutorial": "Desglose práctico en 3 pasos",
        "bab": "Antes → Después → Puente",
        "checklist": "Lista de verificación de lanzamiento / auditoría",
        "myth": "Mito común frente a realidad práctica"
      },
      "frameworkDescriptions": {
        "pas": "Destaca un problema concreto antes de ofrecer la solución de flujo de trabajo.",
        "tutorial": "Estructura numerada de instrucciones, ideal para carruseles y guardados de LinkedIn.",
        "bab": "Contrasta la fricción anterior con el resultado optimizado.",
        "checklist": "Lista de verificación clara que los creadores pueden guardar.",
        "myth": "Cuestiona consejos desactualizados con alternativas directas y concisas."
      },
      "frameworkLabels": {
        "fixesHeading": "Lo que realmente lo soluciona:",
        "beforeLabel": "Antes: ",
        "afterLabel": "Después: ",
        "bridgeHeading": "El puente:",
        "mythLabel": "Mito común: ",
        "worksHeading": "Lo que funciona en la práctica:"
      },
      "sampleHook": "Deje de perder horas formateando enlaces de campaña a mano.",
      "sampleContext": "Los parámetros UTM inconsistentes y el espaciado roto de la biografía distorsionan silenciosamente los informes de análisis.",
      "samplePoints": "Estandarice las etiquetas utm_source y utm_medium en minúsculas\nValide los pliegues de caracteres antes de publicar\nMantenga saltos de párrafo limpios sin espacios finales",
      "sampleCta": "Guarde esta lista de verificación para su próximo lanzamiento de producto.",
      "infoTitle": "Ensamblaje determinista de plantillas:",
      "infoBody": "Esta herramienta usa marcos estructurados de redacción directamente en su navegador; no se usa ni se sugiere ningún modelo de IA ni API externa.",
      "labelHook": "Gancho inicial (primeras 1–2 líneas)",
      "labelContext": "Contexto / planteamiento del problema",
      "labelPoints": "Puntos clave (un punto por línea)",
      "labelCta": "Llamado a la acción (CTA)",
      "labelTags": "Hashtags",
      "previewTitle": "Vista previa de la descripción formateada",
      "copyCaption": "Copiar descripción",
      "charsLabel": "Caracteres:",
      "wordsLabel": "Palabras:",
      "fits": "Cabe",
      "threadNeeded": "Se necesita un hilo",
      "tooLong": "Demasiado largo"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Mayúsculas y minúsculas de formato y accesibilidad",
      "optCamel": "PascalCase (#CamelCase: compatible con lectores de pantalla)",
      "optLower": "todo en minúsculas (#minusculas)",
      "optPreserve": "Conservar mayúsculas originales",
      "outLabel": "Diseño de salida",
      "optInline": "Una sola línea (separadas por espacios)",
      "optNewline": "Un hashtag por línea",
      "optDots": "Separador de pliegue de descripción (.\\n.\\n.)",
      "dedupe": "Eliminar hashtags duplicados",
      "labelRaw": "Palabras clave o hashtags desordenados (separados por coma, espacio o línea)",
      "labelResult": "Grupo de hashtags limpio",
      "copyHashtags": "Copiar hashtags",
      "statClean": "Hashtags limpios",
      "statDupes": "Duplicados eliminados",
      "statIgMax": "Máximo de Instagram (30)",
      "statWithin": "Dentro del límite de 30 de IG",
      "statExceeds": "Supera el límite de 30 etiquetas",
      "statChars": "Caracteres de salida"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 caracteres · letras, números, guiones bajos",
        "instagram": "1–30 caracteres · letras, números, puntos, guiones bajos",
        "tiktok": "2–24 caracteres · letras, números, guiones bajos, puntos",
        "youtube": "3–30 caracteres · letras, números, _, -, .",
        "threads": "1–30 caracteres · espacio de nombres compartido de Instagram",
        "github": "1–39 caracteres · alfanuméricos y guiones simples"
      },
      "infoTitle": "Validador de reglas y enlaces de verificación directa:",
      "infoBodyBefore": "Valida la sintaxis del nombre de usuario y los límites de caracteres sin conexión, sin adivinar la disponibilidad. Haga clic en el enlace",
      "infoEm": "Abrir URL del perfil",
      "infoBodyAfter": "de cualquier plataforma para verificar en vivo si el nombre ya está en uso.",
      "labelBrand": "Nombre de marca, proyecto o creador",
      "phBrand": "p. ej., Utility Hub",
      "labelActive": "Nombre de usuario activo para validar",
      "copyAt": "Copiar @",
      "variationsTitle": "Variaciones consistentes del nombre de usuario:",
      "thPlatform": "Plataforma",
      "thRules": "Reglas de formato",
      "thStatus": "Estado de sintaxis",
      "thCheck": "Verificación manual",
      "valid": "Formato válido",
      "invalid": "Sintaxis o longitud no válidas",
      "checkUrl": "Verificar URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Negrita (sans serif)",
        "sans-italic": "Cursiva (sans serif)",
        "sans-bold-italic": "Negrita cursiva (sans serif)",
        "serif-bold": "Negrita (serif)",
        "monospace": "Monoespaciada",
        "double-struck": "Doble trazo (pizarra)",
        "script-bold": "Cursiva decorativa en negrita",
        "fraktur-bold": "Fraktur en negrita",
        "small-caps": "Versalitas",
        "fullwidth": "Estética de ancho completo"
      },
      "styleNotes": {
        "sans-bold": "Alta legibilidad para encabezados de biografía y ganchos de publicaciones",
        "sans-italic": "Énfasis sutil dentro de las descripciones",
        "sans-bold-italic": "Llamados fuertes y divisores de sección",
        "serif-bold": "Énfasis de estilo editorial",
        "monospace": "Nombres de usuario de código, fechas y etiquetas técnicas",
        "double-struck": "Acentos de exhibición",
        "script-bold": "Firmas decorativas para biografías",
        "fraktur-bold": "Letras góticas de exhibición",
        "small-caps": "Etiquetas de perfil limpias con aspecto de mayúsculas",
        "fullwidth": "Encabezados sociales retro con espaciado amplio"
      },
      "sampleText": "Nuevo kit de herramientas para creadores 2025",
      "accessibilityTitle": "Nota de accesibilidad:",
      "accessibilityBody": "Los caracteres Unicode estilizados pertenecen a bloques de símbolos matemáticos, por lo que los lectores de pantalla pueden leerlos letra por letra u omitirlos, y algunos índices de búsqueda los ignoran. Úselos con moderación para resaltar textos cortos, no para párrafos completos.",
      "labelInput": "Texto para estilizar",
      "placeholder": "Escriba un titular corto, una línea de biografía o un llamado a la acción...",
      "previewEmpty": "Vista previa"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Biografía de Instagram",
        "linkedinPost": "Publicación de LinkedIn",
        "newsletter": "Boletín",
        "youtubeDescription": "Descripción de YouTube"
      },
      "presetsLabel": "Preajustes rápidos de canal:",
      "errorEmpty": "Ingrese la URL del sitio web de destino.",
      "errorInvalid": "Ingrese una URL de destino válida (por ejemplo, https://example.com/landing).",
      "labelUrl": "URL del sitio web de destino *",
      "labelSource": "Fuente de la campaña (utm_source) *",
      "phSource": "p. ej., instagram, newsletter, google",
      "labelMedium": "Medio de la campaña (utm_medium) *",
      "phMedium": "p. ej., social, cpc, email, video",
      "labelCampaign": "Nombre de la campaña (utm_campaign)",
      "phCampaign": "p. ej., spring_launch",
      "labelContent": "Contenido de la campaña (utm_content)",
      "phContent": "p. ej., hero_banner, bio_button",
      "labelTerm": "Término de la campaña (utm_term)",
      "phTerm": "Palabra clave pagada o etiqueta de audiencia opcional",
      "normalizeLabel": "Forzar minúsculas y convertir espacios en guiones bajos (`_`)",
      "generatedTitle": "URL de campaña generada",
      "copyUtm": "Copiar URL UTM",
      "thParam": "Parámetro de consulta",
      "thValue": "Valor normalizado"
    }
  },
'add-pdf-page-numbers': {
    strings: {
      errStart: 'El número de página inicial debe ser un número entero de 1 o mayor.',
      stampedSuccess: (n: number, size: string) => `Se estamparon números de página en ${n} página(s) (${size}).`,
      pageOfLabel: (cur: number, total: number) => `Página ${cur} de ${total}`,
      dropTitleEmpty: 'Elija un archivo PDF para agregar números de página',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropSub: 'Inserta etiquetas de página vectoriales nítidas en informes, contratos y paquetes',
      labelPos: 'Posición',
      optBottomCenter: 'Inferior centrada',
      optBottomRight: 'Inferior derecha',
      optBottomLeft: 'Inferior izquierda',
      optTopRight: 'Superior derecha',
      labelFmt: 'Formato de etiqueta',
      optPageOf: 'Página 1 de N',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: 'Número inicial',
      labelSize: 'Tamaño de fuente (pt)',
      opt9: '9 pt (sutil)',
      opt11: '11 pt (estándar)',
      opt14: '14 pt (grande)',
      skipCover: 'Omitir la portada (comenzar la numeración en la página 2)',
      numbering: 'Numerando páginas...',
      addBtn: 'Agregar números de página y descargar',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `No se pudo decodificar la imagen «${name}».`,
      errCanvas: 'El contexto 2D del lienzo no está disponible.',
      errConvert: (name: string) => `No se pudo convertir «${name}» a PNG.`,
      errNotImage: (name: string) => `«${name}» no es un archivo de imagen compatible (PNG, JPG, WebP).`,
      errRead: (name: string) => `No se pudo leer «${name}».`,
      errLoad: 'No se pudo cargar la imagen.',
      errEmpty: 'Agregue al menos una imagen primero.',
      errBuild: 'No se pudieron convertir las imágenes a PDF.',
      createdSuccess: (n: number, size: string) => `Se creó un PDF de ${n} páginas (${size}) correctamente.`,
      dropTitle: 'Seleccione imágenes PNG, JPG o WebP',
      dropSub: 'Convierta capturas, escaneos o fotos en un solo PDF localmente',
      labelSize: 'Tamaño de página del PDF',
      optA4: 'A4 vertical (210 × 297 mm)',
      optLetter: 'Carta de EE. UU. (8.5 × 11 pulg.)',
      optFit: 'Dimensiones exactas de la imagen',
      labelMargin: 'Margen de página',
      optMargin0: 'Sin margen (0 pt)',
      optMargin24: 'Margen estándar (24 pt)',
      optMargin48: 'Margen amplio (48 pt)',
      labelOut: 'Nombre del archivo de salida',
      moveUp: (name: string) => `Mover ${name} hacia arriba`,
      moveDown: (name: string) => `Mover ${name} hacia abajo`,
      removeFile: (name: string) => `Eliminar ${name}`,
      building: 'Generando PDF...',
      convertBtn: (n: number) => `Convertir ${n} imágenes a PDF`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: 'No se pudieron leer los archivos PDF seleccionados.',
      errMin2: 'Agregue al menos dos archivos PDF para combinar.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `Se combinaron ${n} PDF (${pages} páginas, ${size}) correctamente.`,
      dropValidating: 'Validando archivos PDF...',
      dropTitle: 'Seleccione o suelte varios archivos PDF',
      dropSub: 'Combinación 100% en el navegador con pdf-lib · Solo PDF sin cifrar · Nunca se suben',
      filesQueued: 'archivos en cola',
      totalPagesLabel: 'páginas en total',
      combinedSize: 'tamaño de entrada combinado',
      clearQueue: 'Limpiar cola',
      pageSingular: 'página',
      pagePlural: 'páginas',
      moveUp: (name: string) => `Mover ${name} hacia arriba`,
      moveDown: (name: string) => `Mover ${name} hacia abajo`,
      removeFile: (name: string) => `Eliminar ${name}`,
      outName: 'Nombre del archivo de salida',
      merging: 'Combinando PDF...',
      mergeBtn: (n: number) => `Combinar ${n} PDF y descargar`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: 'Se borraron los campos de metadatos editables. Haga clic en Guardar y descargar PDF para aplicar los cambios.',
      savedSuccess: (size: string) => `Se guardaron los metadatos actualizados del PDF (${size}).`,
      dropTitleEmpty: 'Elija un archivo PDF para inspeccionar o editar metadatos',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
      dropSub: 'Inspeccione las propiedades del documento, limpie las etiquetas de autor/software o establezca títulos SEO limpios',
      labelTitle: 'Título del documento',
      labelAuthor: 'Autor',
      labelSubject: 'Asunto / resumen',
      labelKeywords: 'Palabras clave (separadas por comas)',
      labelCreator: 'Aplicación creadora',
      labelProducer: 'Productor del PDF',
      saving: 'Guardando PDF...',
      saveBtn: 'Guardar metadatos y descargar PDF',
      stripBtn: 'Eliminar todos los campos de metadatos',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: 'No se encontraron páginas coincidentes para rotar.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `Se rotaron ${a} de ${b} páginas ${deg}° en sentido horario (${size}).`,
      dropTitleEmpty: 'Elija un archivo PDF para rotar páginas',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropSub: 'Rote todas las páginas o rangos específicos localmente, sin subidas al servidor',
      labelAngle: 'Ángulo de rotación',
      opt90: '90° en sentido horario (derecha)',
      opt270: '90° en sentido antihorario (izquierda / 270°)',
      opt180: '180° boca abajo',
      labelScope: 'Aplicar a',
      optAll: (n: number) => `Todas las páginas (${n})`,
      optRange: 'Rangos de páginas específicos',
      optOdd: 'Solo páginas impares',
      optEven: 'Solo páginas pares',
      labelRangeInput: (n: number) => `Números / rangos de página (1–${n})`,
      phRange: 'p. ej., 1, 3-5',
      rotating: 'Rotando páginas...',
      rotateBtn: 'Aplicar rotación y descargar PDF',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- Página ${n} ---`,
      dropExtracting: 'Extrayendo la capa de texto del PDF...',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropTitleEmpty: 'Elija un PDF basado en texto para extraer el texto',
      dropSub: 'Extrae el texto Unicode incrustado localmente con PDF.js · Sin subidas al servidor',
      noTextTitle: 'No se encontró una capa de texto seleccionable:',
      noTextBody:
        'Este PDF parece contener imágenes escaneadas o trazados vectoriales delineados en lugar de una capa de texto incrustada. El reconocimiento óptico de caracteres (OCR) del lado del cliente no se realiza sin conexión.',
      markersLabelBefore: 'Incluir marcadores de encabezado de página (',
      markersCode: '--- Página N ---',
      markersLabelAfter: ')',
      copyText: 'Copiar texto',
      downloadTxt: 'Descargar .txt',
      outputAria: 'Salida de texto extraído del PDF',
      pagesScanned: 'Páginas escaneadas:',
      wordsExtracted: 'Palabras extraídas:',
      textSize: 'Tamaño del texto:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'Renderice hasta 20 páginas por lote para mantener rápida y fluida la memoria del lienzo del navegador.',
      errCanvas: 'El contexto 2D del lienzo no está disponible.',
      dropTitleEmpty: 'Elija un PDF para convertir en imágenes',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
      dropSub: 'Renderizado localmente con el lienzo de PDF.js · Salida PNG o JPG',
      labelRange: 'Páginas («all» o un rango como 1-4, 6)',
      labelFormat: 'Formato de imagen',
      optPng: 'PNG (sin pérdida / texto nítido)',
      optJpg: 'JPG (compacto, ideal para fotos)',
      labelScale: 'Resolución de renderizado',
      optScale1: '1.0× (72 DPI, vista previa rápida)',
      optScale15: '1.5× (108 DPI, estándar)',
      optScale2: '2.0× (144 DPI, nítido)',
      rendering: 'Renderizando páginas del PDF...',
      renderBtn: 'Renderizar páginas del PDF como imágenes',
      pageAlt: (n: number) => `Vista previa de la página ${n}`,
      pageLabel: (n: number, w: number, h: number) => `Página ${n} · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'Gris neutro',
        indigo: 'Índigo de marca',
        red: 'Rojo de sello',
      },
      defaultWatermark: 'CONFIDENCIAL',
      errEmpty: 'Ingrese el texto de la marca de agua antes de generar el PDF.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `Se aplicó la marca de agua «${text}» a ${n} página(s) (${size}).`,
      dropTitleEmpty: 'Elija un archivo PDF para ponerle marca de agua',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropSub: 'Incrusta sellos de texto vectoriales nítidos localmente con pdf-lib',
      labelText: 'Texto de la marca de agua',
      phText: 'CONFIDENCIAL / BORRADOR / USO INTERNO',
      labelColor: 'Color del sello',
      firstPageOnly: 'Solo la primera página',
      labelSize: 'Tamaño de fuente:',
      ptSuffix: (n: number) => `${n} pt`,
      labelOpacity: 'Opacidad:',
      labelAngle: 'Rotación:',
      applying: 'Aplicando marca de agua al PDF...',
      applyBtn: 'Aplicar marca de agua y descargar',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'Un PDF debe conservar al menos 1 página.',
      savedSuccess: (n: number, size: string) => `Se guardó el PDF actualizado con ${n} páginas (${size}).`,
      loading: 'Cargando páginas y vistas previas del PDF...',
      dropTitleFile: (name: string, n: number) => `${name} (${n} páginas activas)`,
      dropTitleEmpty: 'Elija un archivo PDF para reordenar o eliminar páginas',
      dropSub: 'Mueva páginas, duplique hojas o elimine páginas no deseadas localmente',
      outCount: 'Cantidad de páginas de salida:',
      saving: 'Guardando PDF...',
      saveBtn: 'Guardar PDF reordenado',
      thumbAlt: (n: number) => `Página original ${n}`,
      thumbFallback: (n: number) => `Pág. orig. ${n}`,
      posLabel: (n: number) => `Pos. n.º ${n}`,
      origLabel: (n: number) => `(Orig. ${n})`,
      moveEarlierTitle: 'Mover antes',
      moveEarlierAria: (n: number) => `Mover la posición ${n} antes`,
      moveLaterTitle: 'Mover después',
      moveLaterAria: (n: number) => `Mover la posición ${n} después`,
      dupTitle: 'Duplicar página',
      dupAria: (n: number) => `Duplicar la página en la posición ${n}`,
      delTitle: 'Eliminar página',
      delAria: (n: number) => `Eliminar la página en la posición ${n}`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `La división por ráfaga descarga un archivo por página. Para documentos de más de 25 páginas (${n} páginas aquí), extraiga rangos para que su navegador no bloquee las descargas masivas.`,
      exportedAll: (n: number) => `Se exportaron ${n} archivos PDF de una sola página.`,
      errNoMatch: 'Ninguna página coincidió con esa selección (por ejemplo, Páginas pares requiere 2 o más páginas).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `Se extrajeron ${a} de ${b} páginas (${size}).`,
      dropTitleEmpty: 'Elija un archivo PDF para dividir o extraer',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
      dropSub: 'Procesado localmente en memoria · Haga clic para reemplazar el documento',
      modeRange: 'Extraer rangos de páginas',
      modeOdd: 'Solo páginas impares',
      modeEven: 'Solo páginas pares',
      modeBurst: 'Dividir todas las páginas individuales',
      labelRange: (n: number) => `Páginas para extraer (1–${n})`,
      phRange: 'p. ej., 1-3, 5, 8-10',
      rangeHintBefore: 'Use comas y guiones (por ejemplo ',
      rangeHintAfter: ').',
      extracting: 'Extrayendo PDF...',
      splitBtn: 'Dividir y descargar PDF',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'URL del sitio web',
      tabText: 'Texto simple',
      tabWifi: 'Red Wi-Fi',
      tabEmail: 'Enlace de correo',
      tabPhone: 'Número de teléfono',
      labelUrl: 'URL de destino',
      labelText: 'Contenido de texto',
      labelSsid: 'Nombre de la red (SSID)',
      labelSecurity: 'Tipo de seguridad',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'Abierta (sin contraseña)',
      labelWifiPass: 'Contraseña de Wi-Fi',
      hiddenSsid: 'Red con SSID oculto',
      labelEmailTo: 'Correo del destinatario',
      labelEmailSubject: 'Asunto (opcional)',
      labelPhone: 'Número de teléfono (se recomienda el formato E.164)',
      sizeLabel: (size: number) => `Tamaño (${size}px)`,
      labelEc: 'Corrección de errores',
      labelFg: 'Primer plano',
      labelBg: 'Fondo',
      quietZone: 'Margen de zona silenciosa:',
      modulesLabel: (margin: number) => `${margin} módulos`,
      encodedPayload: 'Cadena de datos codificada',
      copyPayload: 'Copiar datos',
      emptyError: 'Ingrese contenido arriba para generar un código QR escaneable.',
      encodeError: 'No se pudo codificar el contenido del QR.',
      qrAlt: 'Código QR escaneable generado',
      downloadPng: 'Descargar PNG',
      downloadSvg: 'Descargar SVG',
      copySvg: 'Copiar SVG',
      sampleText: '¡Bienvenido a UtilityFlow!',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: 'Publicación estándar',
        profileBio: 'Biografía del perfil',
        caption: 'Descripción',
        feedPost: 'Publicación del feed',
        videoCaption: 'Descripción del video',
        post: 'Publicación',
        videoTitle: 'Título del video',
        description: 'Descripción',
      },
      sampleText:
        'Enviar más rápido empieza con pequeñas mejoras diarias.\n\nPruebe nuestras utilidades para creadores en el navegador en https://utilityflow.online/tools/ — no necesita registrarse.\n\n#CreatorTools #Workflow',
      labelInput: 'Borrador de publicación o biografía',
      copyDraft: 'Copiar borrador',
      placeholder: 'Escriba o pegue su descripción, publicación, biografía o título de YouTube...',
      charsLabel: 'Caracteres:',
      wordsLabel: 'Palabras:',
      hashtagsLabel: 'Hashtags:',
      mentionsLabel: 'Menciones:',
      urlsLabel: 'URL detectadas:',
      urlsWeighted: '(ponderadas en 23 caracteres en X)',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} sobre el límite`,
      left: (n: number, loc: string) => `quedan ${n.toLocaleString(loc)}`,
      foldLabel: (n: number) => `Pliegue ~${n} car.`,
      foldTitle: 'Vista previa de truncamiento / pliegue de «Ver más»',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `Vista previa de lo que ven los lectores antes de tocar «Ver más» (${limit} caracteres para ${platform} ${surface}).`,
      selectAria: 'Elija la plataforma para la vista previa de truncamiento',
      previewEmpty: 'La vista previa aparece aquí...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'Cómo creamos 85 utilidades rápidas en el navegador sin rastreo',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '24K vistas · hace 2 días',
      errNotImage: 'Seleccione un archivo de imagen PNG, JPG o WebP.',
      errDecode: 'No se pudo decodificar este archivo de imagen en el navegador.',
      previewEyebrow: 'VISTA PREVIA 1280 × 720',
      emptyThumb: 'Suba la imagen de su miniatura para revisar la legibilidad en el feed',
      thumbAlt: 'Vista previa de la miniatura subida',
      safeZoneTitle: 'Zona de superposición de la insignia de marca de tiempo',
      chooseThumb: 'Elegir miniatura local (PNG / JPG / WebP)',
      replaceThumb: (name: string) => `Reemplazar: ${name}`,
      recommended: 'Recomendado 1280×720 (16:9), menos de 2 MB · Nunca se sube',
      diagTitle: 'Diagnóstico de especificaciones de imagen',
      dimLabel: 'Dimensiones',
      dimHdOk: '(HD correcto)',
      dimUnder: '(<1280 px)',
      aspectLabel: 'Relación de aspecto',
      aspectMatch: 'Coincide con 16:9',
      aspectNo: 'No es 16:9 (puede recortarse o mostrar bandas)',
      sizeLabel: 'Tamaño del archivo',
      sizeOk: '(<2 MB correcto)',
      sizeOver: '(supera el límite de 2 MB)',
      titleLabel: (len: number) => `Título del video (${len}/100 caracteres · ~60 visibles en el móvil)`,
      channelLabel: 'Nombre del canal',
      durationLabel: 'Duración',
      darkMode: 'Vista previa del feed en modo oscuro',
      safeZone: 'Resaltar la zona de esquina de la marca de tiempo',
      desktopCard: 'Tarjeta del feed principal de escritorio',
      sidebar: 'Barra lateral de visualización de escritorio (se recomienda compacta)',
      untitled: 'Video sin título',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'Introducción y panorama general' },
        { id: 2, time: '01:15', title: 'Configuración de la arquitectura principal' },
        { id: 3, time: '04:40', title: 'Demostración en vivo y errores comunes' },
        { id: 4, time: '08:20', title: 'Resumen y próximos pasos' },
      ],
      newChapter: (n: number) => `Capítulo ${n}`,
      defaultChapterTitle: 'Capítulo',
      warnInvalid: 'Una o más marcas de tiempo usan un formato no válido (use MM:SS o HH:MM:SS).',
      warnMin3: 'YouTube requiere al menos 3 marcas de tiempo en orden ascendente para activar los capítulos de video.',
      warnFirst: 'El primer capítulo debe comenzar en 00:00 para que YouTube reconozca los capítulos.',
      warnOrder: 'Los capítulos están fuera de orden cronológico (haga clic en Ordenar cronológicamente).',
      warnShort: (title: string) =>
        `El capítulo «${title}» dura menos de 10 segundos después del capítulo anterior (el mínimo de YouTube es 10 s).`,
      labelUrl: 'URL del video de YouTube o ID del video (para enlaces directos con `?t=`)',
      heading: 'Capítulos del video',
      sortBtn: 'Ordenar cronológicamente',
      addBtn: 'Agregar capítulo',
      tsAria: (n: number) => `Marca de tiempo del capítulo ${n}`,
      titleAria: (n: number) => `Título del capítulo ${n}`,
      phTitle: 'Título del capítulo',
      removeAria: (n: number) => `Eliminar capítulo ${n}`,
      specTitle: 'Revisión de especificaciones de capítulos de YouTube:',
      descBlock: 'Bloque de capítulos para la descripción',
      copyChapters: 'Copiar capítulos',
      emptyChapters: 'Agregue capítulos arriba para generar el bloque de descripción.',
      shareTitle: 'Enlaces para compartir con marca de tiempo',
      videoIdLabel: (id: string) => `(ID del video: ${id})`,
      noVideoId: '(Ingrese una URL válida de YouTube arriba)',
      noVideoHint: 'Pegue una URL válida de youtube.com o youtu.be para crear enlaces de salto `?t=` en los que se pueda hacer clic para cada capítulo.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'No se seleccionó ningún archivo.',
      notPdf: (name: string) => `"${name}" no parece ser un archivo PDF.`,
      empty: (name: string) => `"${name}" está vacío o truncado.`,
      noHeader: (name: string) =>
        `"${name}" no tiene un encabezado %PDF válido y no se puede procesar.`,
      enterRanges: 'Ingresa números de página o rangos como "1-3, 5".',
      rangeOutside: (token: string, total: number) =>
        `El rango "${token}" está fuera de los límites del documento (1–${total} páginas).`,
      rangeReversed: (token: string) =>
        `El rango "${token}" tiene una página inicial mayor que la final.`,
      pageMissing: (page: number, total: number) =>
        `La página ${page} no existe (el documento tiene ${total} páginas).`,
      invalidSyntax: (token: string) =>
        `Sintaxis de página no válida: "${token}". Usa números y rangos como "1-3, 5".`,
      encrypted:
        'Este PDF está cifrado o protegido con contraseña. Desbloquéalo antes de procesarlo localmente.',
      unable: 'No se pudo procesar el archivo PDF.',
      allKeywords: ['all', 'todas', 'todo'],
    },
  },
};
