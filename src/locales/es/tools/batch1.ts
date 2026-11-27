import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Filled by Phase 1 translation. Every tool: slug, name, shortDescription,
 * keywords (9), seo, intro, instructions (6), examples (2), benefits (4),
 * useCases (4), faqs (20). Slugs must be unique, lowercase, hyphenated,
 * and must not collide with English slugs or reserved paths.
 */
export const ES_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'contador-de-palabras',
    name: 'Contador de Palabras',
    shortDescription:
      'Cuenta palabras, caracteres, oraciones, párrafos, tiempo de lectura y las palabras clave más repetidas al instante.',
    keywords: [
      'contador de palabras',
      'contar palabras online',
      'contar palabras de un texto',
      'calculadora de tiempo de lectura',
      'contador de oraciones',
      'contador de párrafos',
      'contador de palabras gratis',
      'calculadora de tiempo de habla',
      'contar caracteres y palabras',
    ],
    seo: {
      title: 'Contador de Palabras: Palabras y Lectura | UtilityFlow',
      description:
        'Cuenta palabras, caracteres, oraciones y párrafos al instante y consulta el tiempo de lectura y de habla estimado, calculado en tu navegador sin subir nada.',
      primaryKeyword: 'contador de palabras',
      secondaryKeywords: ['contador de palabras online', 'herramienta de conteo de palabras', 'estimador de tiempo de lectura', 'contador de párrafos'],
      longTailKeywords: ['contar palabras y caracteres online gratis', 'estimar tiempo de lectura y de habla de un texto', 'contador de palabras en el navegador sin subir archivos', 'verificar cantidad de palabras de un ensayo online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mide el número exacto de palabras, el total de caracteres, la densidad de oraciones y la duración estimada de lectura y de habla en tiempo real, sin subir tu borrador a ningún servidor.',
  },
  'character-counter': {
    slug: 'contador-de-caracteres',
    name: 'Contador de Caracteres',
    shortDescription:
      'Mide la longitud exacta en caracteres con y sin espacios, bytes UTF-8 y los límites de caracteres de redes sociales y SEO.',
    keywords: [
      'contador de caracteres',
      'contador de letras',
      'verificador de longitud de meta descripción',
      'contador de bytes utf8',
      'herramienta de límite de caracteres',
      'contar caracteres online',
      'verificador de longitud de texto',
      'verificador de longitud de título seo',
      'contador de caracteres de sms',
    ],
    seo: {
      title: 'Contador de Caracteres: Límites y Bytes | UtilityFlow',
      description:
        'Cuenta caracteres con y sin espacios, letras, dígitos y bytes UTF-8, y sigue tu progreso frente a los límites de SEO y redes sociales, todo en tu navegador.',
      primaryKeyword: 'contador de caracteres',
      secondaryKeywords: ['conteo de caracteres online', 'calculadora de longitud de texto', 'longitud de título meta', 'verificador de longitud de texto'],
      longTailKeywords: ['contar caracteres sin espacios online', 'verificar límite de caracteres de meta descripción seo', 'calcular longitud en bytes utf8 de un texto', 'verificar límite de caracteres de twitter online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Sigue los conteos exactos de caracteres, letras, dígitos numéricos, espacios en blanco y tamaños en bytes UTF-8 mientras monitoreas las barras de progreso en vivo para fragmentos de SEO, segmentos de SMS y redes sociales.',
  },
  'case-converter': {
    slug: 'convertidor-de-mayusculas-y-minusculas',
    name: 'Convertidor de Mayúsculas y Minúsculas',
    shortDescription:
      'Convierte texto entre MAYÚSCULAS, minúsculas, Título, Oración, camelCase, snake_case y kebab-case.',
    keywords: [
      'convertidor de mayúsculas',
      'convertidor de título',
      'mayúsculas a minúsculas',
      'convertidor camelCase',
      'generador snake case',
      'convertidor a mayúsculas',
      'convertidor a minúsculas',
      'convertidor de caso oración',
      'convertidor PascalCase',
    ],
    seo: {
      title: 'Convertidor de Mayúsculas y Minúsculas | UtilityFlow',
      description:
        'Transforma texto entre mayúsculas, minúsculas, Título, Oración, camelCase, PascalCase, snake_case y kebab-case en un clic, directamente en tu navegador.',
      primaryKeyword: 'convertidor de mayúsculas',
      secondaryKeywords: ['convertidor de título', 'herramienta de caso oración', 'cambiar mayúsculas de texto', 'mayúsculas a minúsculas'],
      longTailKeywords: ['convertir texto en mayúsculas a caso oración', 'convertir texto a camelCase y snake_case', 'herramienta online de capitalización de títulos', 'cambiar mayúsculas a minúsculas online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrige texto escrito por accidente con el Bloqueo de mayúsculas, estandariza los titulares de artículos en formato de Título o formatea identificadores de variables en camelCase, PascalCase, snake_case o kebab-case con un solo clic.',
  },
  'remove-duplicate-lines': {
    slug: 'eliminar-lineas-duplicadas',
    name: 'Eliminar Líneas Duplicadas',
    shortDescription:
      'Elimina duplicados de listas y registros con opciones de distinción entre mayúsculas y minúsculas, recorte de espacios y orden alfabético.',
    keywords: [
      'eliminar líneas duplicadas',
      'eliminar duplicados de lista online',
      'filtro de líneas únicas',
      'eliminar filas repetidas',
      'quitar duplicados de una lista',
      'eliminar duplicados de lista de correos',
      'líneas únicas online',
      'eliminar líneas repetidas',
      'limpiar entradas duplicadas',
    ],
    seo: {
      title: 'Eliminar Líneas Duplicadas de Listas | UtilityFlow',
      description:
        'Elimina líneas repetidas de listas, correos, URL o registros al instante, con recorte de espacios, distinción de mayúsculas y orden opcionales, en tu navegador.',
      primaryKeyword: 'eliminar líneas duplicadas',
      secondaryKeywords: ['eliminador de líneas duplicadas', 'eliminar duplicados de lista de texto', 'herramienta de líneas únicas', 'eliminar entradas duplicadas'],
      longTailKeywords: ['eliminar líneas duplicadas manteniendo el orden original', 'eliminar duplicados de lista de correos sin distinguir mayúsculas', 'limpiar filas repetidas de texto online', 'eliminar duplicados de lista de correos online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Limpia listas desordenadas, palabras clave exportadas, direcciones de correo o registros de servidor eliminando las entradas duplicadas, con control del recorte de espacios, la distinción entre mayúsculas y minúsculas y el orden de salida.',
  },
  'text-diff-checker': {
    slug: 'comparador-de-textos',
    name: 'Comparador de Textos',
    shortDescription:
      'Compara dos bloques de texto línea por línea para detectar adiciones, eliminaciones y líneas sin cambios.',
    keywords: [
      'comparador de textos',
      'comparar dos textos',
      'herramienta diff online',
      'comparación de textos',
      'comparar dos archivos de texto',
      'herramienta de diferencias online',
      'encontrar diferencias entre textos',
      'herramienta para comparar textos',
      'diff línea por línea',
    ],
    seo: {
      title: 'Comparador de Textos: Encuentra Cambios | UtilityFlow',
      description:
        'Compara dos versiones de texto, código o archivos de configuración lado a lado, con indicadores claros de líneas agregadas y eliminadas, sin subir nada.',
      primaryKeyword: 'comparador de textos',
      secondaryKeywords: ['comparar textos online', 'verificador de diferencias', 'herramienta de diferencia de texto', 'herramienta diff online'],
      longTailKeywords: ['comparar dos archivos de texto línea por línea online', 'comparador de diferencias sin espacios ni mayúsculas', 'herramienta de comparación de texto en el cliente', 'comparar dos versiones de un documento online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Detecta cada inserción, eliminación y edición entre dos versiones de un artículo, una cláusula de contrato o un fragmento de configuración con un motor de diferencias por línea basado en la subsecuencia común más larga.',
  },
  'whitespace-remover': {
    slug: 'eliminador-de-espacios-en-blanco',
    name: 'Eliminador de Espacios en Blanco y Saltos de Línea',
    shortDescription:
      'Elimina espacios extra, tabulaciones, líneas en blanco y saltos de línea no deseados de texto copiado de PDF o web.',
    keywords: [
      'eliminador de espacios en blanco',
      'eliminar espacios extra',
      'eliminador de saltos de línea',
      'eliminar líneas en blanco',
      'limpiar texto copiado de pdf',
      'eliminar espacios finales',
      'corregir saltos de línea de pdf',
      'colapsar varios espacios',
      'limpiar texto online',
    ],
    seo: {
      title: 'Eliminador de Espacios en Blanco Online | UtilityFlow',
      description:
        'Elimina espacios extra, tabulaciones, espacios finales, líneas en blanco y saltos de línea rotos de PDF en tu navegador: rápido, gratis y privado, sin registro.',
      primaryKeyword: 'eliminador de espacios en blanco',
      secondaryKeywords: ['eliminar espacios extra', 'eliminar saltos de línea', 'limpiar espacios en blanco de texto', 'eliminar líneas en blanco'],
      longTailKeywords: ['eliminar espacios extra y líneas en blanco online', 'corregir saltos de línea al copiar de un pdf', 'convertir tabulaciones y varios espacios en un solo espacio', 'eliminar espacios finales del texto copiado'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Limpia el texto desordenado copiado de PDF, correos, hojas de cálculo o páginas web colapsando los espacios repetidos, convirtiendo las tabulaciones, recortando los bordes de las líneas y normalizando los saltos de línea.',
  },
  'sort-lines': {
    slug: 'ordenar-lineas-alfabeticamente',
    name: 'Ordenar Líneas Alfabéticamente',
    shortDescription:
      'Ordena listas de la A a la Z, de la Z a la A, de forma natural (1, 2, 10), por longitud de caracteres, al revés o mezcladas al azar.',
    keywords: [
      'ordenar líneas alfabéticamente',
      'alfabetizar lista online',
      'herramienta de orden natural',
      'ordenar texto por longitud',
      'ordenar lista de la a a la z',
      'herramienta de orden alfabético',
      'mezclar líneas online',
      'ordenar líneas de la z a la a',
      'invertir orden de líneas',
    ],
    seo: {
      title: 'Ordenar Líneas Alfabéticamente Online | UtilityFlow',
      description:
        'Ordena líneas de la A a la Z, de la Z a la A, en orden numérico natural, por longitud, al revés o mezcladas, con duplicados y líneas en blanco eliminados.',
      primaryKeyword: 'ordenar líneas alfabéticamente',
      secondaryKeywords: ['alfabetizar lista', 'ordenador de líneas de texto', 'orden natural online', 'ordenar líneas de la a a la z'],
      longTailKeywords: ['ordenar lista alfabéticamente con números en orden natural', 'ordenar líneas por longitud de menor a mayor', 'alfabetizar y eliminar líneas duplicadas', 'invertir orden de líneas online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organiza listas, bibliografías, SKU de inventario o importaciones de código alfabéticamente, numéricamente con orden natural, por longitud de caracteres o en orden inverso.',
  },
  'find-and-replace': {
    slug: 'buscar-y-reemplazar-texto',
    name: 'Buscar y Reemplazar Texto',
    shortDescription:
      'Busca y reemplaza cadenas en el texto con distinción de mayúsculas y minúsculas, coincidencia de palabra completa y soporte de RegExp.',
    keywords: [
      'buscar y reemplazar texto',
      'reemplazo masivo de texto',
      'buscar y reemplazar con regex',
      'buscar y reemplazar online',
      'reemplazar texto online',
      'buscar reemplazar palabras',
      'reemplazo regex online',
      'reemplazar todas las ocurrencias',
      'herramienta de reemplazo de texto',
    ],
    seo: {
      title: 'Buscar y Reemplazar Texto Masivo Online | UtilityFlow',
      description:
        'Busca y reemplaza texto en tu navegador con conteo de coincidencias, distinción de mayúsculas, palabra completa y grupos de captura RegExp, sin registro.',
      primaryKeyword: 'buscar y reemplazar texto',
      secondaryKeywords: ['buscar y reemplazar online', 'herramienta de reemplazo regex', 'reemplazo masivo de texto', 'reemplazar texto online'],
      longTailKeywords: ['buscar y reemplazar solo palabras completas online', 'buscar y reemplazar con regex y grupos de captura', 'reemplazo masivo de cadenas de texto en el navegador', 'reemplazar todas las ocurrencias en texto online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Realiza ediciones rápidas de búsqueda y reemplazo en masa en prosa, fragmentos CSV o bloques de código usando coincidencia de texto exacta, límites de palabra completa o grupos de captura de expresiones regulares.',
  },
  'text-reverser': {
    slug: 'inversor-de-texto',
    name: 'Inversor de Texto',
    shortDescription:
      'Invierte cadenas de texto completas, invierte el orden de las palabras, voltea las letras de cada palabra o invierte la secuencia de líneas.',
    keywords: [
      'inversor de texto',
      'invertir cadena online',
      'invertir palabras',
      'invertir líneas',
      'invertir caracteres de texto',
      'voltear texto online',
      'generador de texto espejo',
      'invertir orden de oraciones',
      'generador de texto al revés',
    ],
    seo: {
      title: 'Inversor de Texto: Invierte Palabras | UtilityFlow',
      description:
        'Invierte caracteres, cambia el orden de las palabras, refleja cada palabra o invierte el orden de las líneas al instante: seguro con Unicode, gratis y privado.',
      primaryKeyword: 'inversor de texto',
      secondaryKeywords: ['invertir texto online', 'invertir orden de palabras', 'invertir líneas', 'voltear texto online'],
      longTailKeywords: ['invertir cada palabra de una oración online', 'invertir orden de líneas en archivo de texto', 'inversor de cadenas seguro con unicode', 'invertir caracteres de texto online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Voltea secuencias de caracteres, invierte el orden de las palabras por línea, refleja las letras dentro de cada palabra o invierte listas de varias líneas de abajo hacia arriba con manejo compatible con Unicode.',
  },
  'lorem-ipsum-generator': {
    slug: 'generador-de-lorem-ipsum',
    name: 'Generador de Lorem Ipsum',
    shortDescription:
      'Genera párrafos, oraciones o cantidades de palabras personalizados como texto de relleno, con etiquetas HTML <p> opcionales.',
    keywords: [
      'generador de lorem ipsum',
      'generador de texto de relleno',
      'texto ficticio',
      'lorem ipsum html',
      'texto lorem ipsum',
      'generador de texto ficticio',
      'párrafos de relleno',
      'palabras lorem ipsum',
      'generador de texto de relleno',
    ],
    seo: {
      title: 'Generador de Lorem Ipsum para Diseños | UtilityFlow',
      description:
        'Genera texto de relleno Lorem Ipsum por párrafos, oraciones o cantidad exacta de palabras, con etiquetas de párrafo HTML opcionales para maquetas, sin registro.',
      primaryKeyword: 'generador de lorem ipsum',
      secondaryKeywords: ['texto de relleno', 'generador de texto ficticio', 'párrafos lorem ipsum', 'generador de texto de relleno'],
      longTailKeywords: ['generar lorem ipsum por cantidad de palabras', 'generador de lorem ipsum con etiquetas html p', 'texto de relleno limpio para maquetas de interfaz', 'generador de lorem ipsum para maqueta de sitio web'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Crea texto de relleno limpio adaptado a cantidades exactas de párrafos, oraciones o palabras para wireframes, pruebas de tipografía y prototipos de diseño, con etiquetas de párrafo HTML opcionales.',
  },
  'readability-checker': {
    slug: 'verificador-de-legibilidad',
    name: 'Verificador de Legibilidad',
    shortDescription:
      'Calcula los puntajes de legibilidad Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog y SMOG.',
    keywords: [
      'verificador de legibilidad',
      'flesch reading ease',
      'nivel de grado flesch kincaid',
      'calculadora gunning fog',
      'índice de legibilidad smog',
      'verificador de nivel de lectura',
      'verificador de puntaje de legibilidad',
      'legibilidad por nivel de grado',
      'verificar legibilidad de texto online',
    ],
    seo: {
      title: 'Verificador de Legibilidad Flesch-Kincaid | UtilityFlow',
      description:
        'Verifica los puntajes Flesch Reading Ease, Flesch-Kincaid, Gunning Fog y SMOG con nuestro verificador de legibilidad: gratis, privado, en tu navegador.',
      primaryKeyword: 'verificador de legibilidad',
      secondaryKeywords: ['calculadora de flesch reading ease', 'verificador de nivel de grado', 'herramienta de nivel de lectura', 'calculadora de índice gunning fog'],
      longTailKeywords: ['verificar nivel de grado flesch kincaid online', 'calcular índice gunning fog y smog de legibilidad', 'mejorar puntaje de legibilidad de artículo en el navegador', 'qué es un buen puntaje flesch reading ease'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Evalúa qué tan fácil es entender tu escritura con cuatro fórmulas establecidas de legibilidad: Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog y SMOG, junto con la detección de palabras complejas.',
  },
  'word-frequency-counter': {
    slug: 'contador-de-frecuencia-de-palabras',
    name: 'Contador de Frecuencia de Palabras',
    shortDescription:
      'Cuenta frecuencias de frases de 1, 2 y 3 palabras con filtro de palabras vacías y exportación CSV en un clic para hojas de cálculo.',
    keywords: [
      'contador de frecuencia de palabras',
      'contador de frecuencia de frases',
      'contador de ngramas',
      'analizador de repetición de palabras',
      'analizador de frecuencia de frases',
      'herramienta de frecuencia de palabras',
      'contar palabras repetidas online',
      'contador de ocurrencias de palabras',
      'análisis de frecuencia de texto',
    ],
    seo: {
      title: 'Contador de Frecuencia de Palabras y CSV | UtilityFlow',
      description:
        'Cuenta la frecuencia de frases de 1, 2 y 3 palabras en cualquier texto, con filtro de palabras vacías y exportación CSV en un clic para hojas de cálculo.',
      primaryKeyword: 'contador de frecuencia de palabras',
      secondaryKeywords: ['analizador de frecuencia de palabras', 'analizador de frecuencia de frases', 'herramienta de ocurrencia de palabras', 'contador de frecuencia de ngramas'],
      longTailKeywords: ['contar frecuencia de palabras y porcentaje de densidad online', 'analizar frases de 2 y 3 palabras en texto', 'exportar tabla de frecuencia de palabras a csv', 'analizar frases repetidas en borradores largos'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audita borradores de contenido para el equilibrio de palabras clave, la fraseología sobreusada y los patrones de n-gramas de varias palabras con tablas de frecuencia instantáneas, filtrado de palabras vacías e informes CSV descargables.',
  },
  'text-to-slug': {
    slug: 'convertidor-de-texto-a-slug',
    name: 'Convertidor de Texto a Slug',
    shortDescription:
      'Convierte cualquier texto en slugs de URL limpios para código, nombres de archivo y claves de base de datos, con transliteración de acentos y modo por lotes.',
    keywords: [
      'texto a slug',
      'slugify texto online',
      'slugify online',
      'formateador de url seo',
      'convertidor de slug',
      'crear slug de url',
      'convertidor de título a slug',
      'creador de slug de url limpio',
      'generador de slug por lotes',
    ],
    seo: {
      title: 'Convertidor de Texto a Slug: Desarrollador | UtilityFlow',
      description:
        'Convierte cualquier texto en slugs de URL limpios para código, nombres de archivo y claves de base de datos, con transliteración de acentos y modo por lotes.',
      primaryKeyword: 'convertidor de texto a slug',
      secondaryKeywords: ['slugify texto', 'slugify de texto', 'generador de url limpia', 'herramienta de título a slug'],
      longTailKeywords: ['convertir título de artículo a slug de url optimizado para seo', 'convertir varios encabezados a slugs por lotes', 'convertir caracteres acentuados a ascii para slug online', 'separador de slug con guion o guion bajo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convierte títulos de blog, nombres de productos y calendarios de contenido de varias líneas en slugs ASCII limpios y seguros para URL, con transliteración automática de acentos, controles de delimitador y eliminación opcional de palabras vacías.',
  },
  'markdown-previewer': {
    slug: 'visor-de-markdown',
    name: 'Visor de Markdown y Exportador de HTML',
    shortDescription:
      'Escribe Markdown en un editor dividido en vivo, inspecciona el formato renderizado de forma segura y copia o exporta HTML limpio.',
    keywords: [
      'visor de markdown',
      'markdown a html',
      'editor de markdown online',
      'visor de markdown en vivo',
      'editor markdown online',
      'renderizar markdown online',
      'convertidor de markdown a html',
      'vista previa de readme markdown',
      'exportador de html markdown',
    ],
    seo: {
      title: 'Visor de Markdown: Vista Previa y HTML | UtilityFlow',
      description:
        'Escribe Markdown y míralo renderizarse en vivo, inspecciona el código HTML compilado y copia o descarga un documento HTML independiente y limpio, gratis.',
      primaryKeyword: 'visor de markdown',
      secondaryKeywords: ['convertidor de markdown a html', 'editor de markdown online', 'vista previa de markdown online', 'editor de markdown en vivo'],
      longTailKeywords: ['visor de markdown en vivo con exportación html', 'convertir readme de markdown a html online', 'editor de markdown en el navegador sin subir archivos', 'vista previa de readme de github antes de confirmar'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Redacta archivos README, documentación y notas con formato en un editor de Markdown responsivo con vista previa renderizada en vivo, escape seguro de HTML, inspección de HTML sin procesar y exportación de HTML en un clic.',
  },
  'line-prefix-suffix': {
    slug: 'agregar-prefijo-sufijo-y-numeros-a-lineas',
    name: 'Agregar Números de Línea y Prefijo/Sufijo',
    shortDescription:
      'Agrega números de línea, prefijos personalizados y sufijos a cada línea para listas, cláusulas SQL y código.',
    keywords: [
      'agregar prefijo y sufijo a líneas',
      'agregar números de línea a texto',
      'envolver líneas entre comillas',
      'formateador de líneas por lotes',
      'anteponer texto a cada línea',
      'agregar texto a líneas',
      'generador de números de línea',
      'formateador de cláusula in sql',
      'agregar coma a cada línea',
    ],
    seo: {
      title: 'Agregar Prefijo, Sufijo y Números a Líneas | UtilityFlow',
      description:
        'Agrega números de línea, prefijos y sufijos personalizados a cada línea de texto para listas, consultas SQL y arreglos de código al instante, gratis y privado.',
      primaryKeyword: 'agregar prefijo y sufijo a líneas',
      secondaryKeywords: ['agregar números de línea online', 'herramienta de prefijo y sufijo de línea', 'envolver líneas entre comillas', 'formateador de líneas por lotes'],
      longTailKeywords: ['envolver cada línea entre comillas simples y coma para sql', 'agregar prefijo de lista numerada a líneas de texto', 'anteponer y agregar texto a cada línea por lotes', 'agregar números de línea empezando desde cero'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Antepone números de línea secuenciales, caracteres de viñeta o comillas de apertura y agrega comas, puntos y coma o etiquetas de cierre en cada línea de una lista en segundos.',
  },
  'alphabets-to-word-generator': {
    slug: 'generador-de-palabras-con-letras',
    name: 'Generador de Palabras con Letras',
    shortDescription: 'Genera palabras con tus letras al instante: anagramas, palabras cortas y largas, y combinaciones posibles, gratis en tu navegador.',
    keywords: [
      'generador de palabras con letras',
      'generador de palabras a partir de letras',
      'letras a palabras',
      'generador de anagramas',
      'resolver anagramas',
      'desordenar letras',
      'buscar palabras con letras',
      'generador de palabras en inglés',
      'palabras con letras dadas',
    ],
    seo: {
      title: 'Generador de Palabras con Letras – Crea Palabras | UtilityFlow',
      description: 'Genera palabras con letras al instante con nuestro generador gratuito. Encuentra palabras cortas y largas, anagramas y combinaciones posibles.',
      primaryKeyword: 'generador de palabras con letras',
      secondaryKeywords: ['generador de anagramas', 'resolver anagramas', 'desordenar letras', 'buscar palabras con letras'],
      longTailKeywords: ['qué palabras puedo formar con estas letras', 'generar palabras con letras online gratis', 'encontrar la palabra más larga con letras', 'crear anagramas con una palabra'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'Escribe tus letras y descubre todas las palabras que puedes formar con ellas: anagramas exactos, palabras cortas y largas, con filtros de longitud y de letras, directamente en tu navegador.',
  },
};
