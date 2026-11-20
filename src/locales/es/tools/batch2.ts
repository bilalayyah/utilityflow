import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Filled by Phase 1 translation. See batch1.ts for the required shape.
 */
export const ES_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'codificador-decodificador-base64',
    name: 'Codificador / Decodificador Base64',
    shortDescription:
      'Codifica texto a Base64 estándar o URL-safe y decodifica cadenas Base64 UTF-8 de forma segura en la memoria del navegador.',
    keywords: [
      'codificador base64',
      'decodificador base64',
      'base64 utf8',
      'base64 url safe',
      'codificar base64 en linea',
      'decodificar base64 en linea',
      'codificar texto a base64',
      'decodificar base64 a texto',
      'convertidor base64',
    ],
    seo: {
      title: 'Codificador y Decodificador Base64 Online | UtilityFlow',
      description:
        'Codifica texto UTF-8 a Base64 en línea o decodifica Base64 a texto legible, con opciones URL-safe y sin relleno, todo procesado localmente en tu navegador.',
      primaryKeyword: 'codificador decodificador base64',
      secondaryKeywords: [
        'decodificar base64 en linea',
        'codificar base64 utf8',
        'base64 url safe',
        'base64 a texto',
      ],
      longTailKeywords: [
        'codificar emojis utf8 a base64 en linea',
        'decodificar base64 url safe sin relleno',
        'convertidor base64 en el navegador',
        'decodificar cadena base64 con emojis en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierte cadenas UTF-8, incluidos caracteres acentuados y emojis, a Base64 estándar o Base64 URL-safe según RFC 4648, o decodifica cadenas Base64 de vuelta a texto plano con validación instantánea.',
  },
  'url-encoder-decoder': {
    slug: 'codificador-decodificador-url',
    name: 'Codificador / Decodificador de URL',
    shortDescription:
      'Codifica por porcentaje valores de consulta o URLs completas e inspecciona el host, la ruta y los parámetros de consulta analizados.',
    keywords: [
      'codificador url',
      'decodificador url',
      'codificacion por porcentaje',
      'analizador de url',
      'codificar url en linea',
      'decodificar url en linea',
      'herramienta codificar url',
      'encodeuricomponent',
      'codificador de cadena de consulta',
    ],
    seo: {
      title: 'Codificador y Decodificador de URL Online | UtilityFlow',
      description:
        'Codifica o decodifica URLs en línea con los modos encodeURIComponent y encodeURI mientras revisas el protocolo, el host, la ruta y los parámetros de consulta.',
      primaryKeyword: 'codificador decodificador url',
      secondaryKeywords: [
        'codificacion por porcentaje en linea',
        'herramienta decodificar url',
        'analizador de cadena de consulta',
        'encodeuricomponent en linea',
      ],
      longTailKeywords: [
        'diferencia entre encodeuri y encodeuricomponent',
        'decodificar parametros de consulta de url en linea',
        'codificar por porcentaje caracteres especiales para urls',
        'codificar valor de consulta url sin romper el ampersand',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Codifica de forma segura valores de parámetros de consulta o URLs completas, decodifica cadenas con codificación por porcentaje (%20, %3A, +) e inspecciona un desglose en vivo de cada parámetro de consulta en una tabla.',
  },
  'uuid-generator': {
    slug: 'generador-uuid',
    name: 'Generador de UUID (v4 y v7)',
    shortDescription:
      'Genera identificadores UUID v4 criptográficamente aleatorios y UUID v7 ordenados por tiempo según RFC 9562, en lotes.',
    keywords: [
      'generador uuid',
      'generador guid',
      'uuid v4',
      'generador uuid v7',
      'generador uuid v4 en linea',
      'generar uuid en linea',
      'generador uuid aleatorio',
      'generador uuid en lote',
      'generador uuid gratis',
    ],
    seo: {
      title: 'Generador de UUID v4 y v7 Gratis Online | UtilityFlow',
      description:
        'Genera hasta 100 identificadores UUID v4 criptográficamente aleatorios o UUID v7 ordenados por tiempo según RFC 9562, con mayúsculas, guiones y llaves.',
      primaryKeyword: 'generador uuid',
      secondaryKeywords: [
        'generador guid en linea',
        'generador uuid v4',
        'creador de uuid v7',
        'crear uuid en lote gratis',
      ],
      longTailKeywords: [
        'generar uuid v4 y v7 en lote en linea',
        'uuid v7 ordenado por tiempo rfc 9562',
        'generador uuid sin guiones en mayusculas',
        'generar 100 uuid a la vez en linea gratis',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crea lotes individuales o en masa de identificadores UUID v4 criptográficamente aleatorios y UUID v7 ordenados por marca de tiempo según RFC 9562, directamente con las API de Web Crypto, con interruptores de formato.',
  },
  'regex-tester': {
    slug: 'probador-regex',
    name: 'Probador de Regex',
    shortDescription:
      'Prueba expresiones regulares de JavaScript con resaltado de coincidencias en vivo, grupos de captura, banderas y salida de reemplazo.',
    keywords: [
      'probador regex',
      'probador de expresiones regulares',
      'regex javascript',
      'resaltador de coincidencias regex',
      'probador regex en linea',
      'probar regex en linea',
      'depurador regex',
      'probador de coincidencias regex',
      'probador regex javascript',
    ],
    seo: {
      title: 'Probador de Regex JavaScript en Línea | UtilityFlow',
      description:
        'Prueba expresiones regulares en vivo con las banderas g, i, m y s, resaltado de coincidencias, inspección de grupos de captura y vista previa de reemplazo.',
      primaryKeyword: 'probador regex',
      secondaryKeywords: [
        'probador de expresiones regulares',
        'depurador regex js',
        'grupos de captura regex',
        'probador de reemplazo regex',
      ],
      longTailKeywords: [
        'probar grupos de captura regex javascript en linea',
        'resaltador de coincidencias de expresiones regulares en vivo',
        'vista previa de reemplazo regex con grupo de captura $1',
        'depurar regex javascript con resaltado en vivo en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Depura expresiones regulares de JavaScript de forma interactiva con coincidencias resaltadas en vivo, posiciones de índice de coincidencia, inspección numerada de grupos de captura, interruptores de banderas y vistas previas de reemplazo.',
  },
  'jwt-decoder': {
    slug: 'decodificador-jwt',
    name: 'Decodificador JWT',
    shortDescription:
      'Decodifica encabezados, reclamos de payload y marcas de expiración de JSON Web Tokens de forma segura dentro de tu navegador.',
    keywords: [
      'decodificador jwt',
      'decodificar json web token',
      'inspector jwt',
      'marca exp jwt',
      'decodificador de token jwt',
      'decodificar payload jwt',
      'verificador de expiracion jwt',
      'visor de reclamos jwt',
      'revisar expiracion jwt',
    ],
    seo: {
      title: 'Decodificador JWT: Revisa Tokens y Expiración | UtilityFlow',
      description:
        'Decodifica encabezados y reclamos de payload de JWT en tu navegador y revisa las marcas iat, nbf y exp como fechas UTC claras. Gratis, privado y sin subidas.',
      primaryKeyword: 'decodificador jwt',
      secondaryKeywords: [
        'decodificar jwt en linea',
        'visor de payload jwt',
        'inspector de json web token',
        'verificador de expiracion jwt',
      ],
      longTailKeywords: [
        'decodificar token jwt localmente sin subirlo al servidor',
        'revisar marca exp de expiracion jwt en linea',
        'inspeccionar encabezado y reclamos jwt base64url',
        'leer reclamos de payload jwt en el navegador',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Inspecciona JSON Web Tokens (JWT) de forma segura en la memoria local del navegador: mira los objetos JSON formateados de Encabezado y Payload y revisa el estado de expiración legible de `iat`, `nbf` y `exp`.',
  },
  'hash-generator': {
    slug: 'generador-hash',
    name: 'Generador de Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Calcula hashes criptográficos SHA-1, SHA-256, SHA-384 y SHA-512 para texto o archivos locales con Web Crypto.',
    keywords: [
      'generador hash',
      'generador sha256',
      'hash sha512',
      'checksum sha256 de archivo',
      'generador hash sha1',
      'hash sha384 en linea',
      'calculadora de checksum',
      'verificar checksum de archivo',
      'generador de hash seguro en linea',
    ],
    seo: {
      title: 'Generador de Hash SHA-256 y SHA-512 Online | UtilityFlow',
      description:
        'Genera resúmenes SHA-1, SHA-256, SHA-384 y SHA-512 en hexadecimal o Base64 para texto y archivos locales, directamente en tu navegador. Gratis y privado.',
      primaryKeyword: 'generador hash',
      secondaryKeywords: [
        'hash sha256 en linea',
        'verificador de checksum de archivo',
        'generador sha512',
        'calculadora de checksum',
      ],
      longTailKeywords: [
        'calcular checksum sha256 de archivo local en el navegador',
        'generar hash sha256 en hexadecimal y base64',
        'generador de hash con web crypto api en linea',
        'verificar checksum sha256 de archivo descargado',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Calcula resúmenes SHA-1, SHA-256, SHA-384 y SHA-512 al mismo tiempo con la API Web Crypto nativa del navegador (`crypto.subtle.digest`), tanto para texto UTF-8 como para checksums de archivos locales.',
  },
  'html-entity-encoder': {
    slug: 'codificador-entidades-html',
    name: 'Codificador y Decodificador de Entidades HTML',
    shortDescription:
      'Escapa caracteres HTML reservados (<, >, &, comillas) y símbolos no ASCII, o decodifica entidades HTML sin problemas.',
    keywords: [
      'codificador de entidades html',
      'decodificador html',
      'escapar html en linea',
      'desescapar entidades html',
      'codificar caracteres html',
      'herramienta de escape html',
      'convertir a entidades html',
      'decodificar entidades html en linea',
      'escapar caracteres especiales html',
    ],
    seo: {
      title: 'Codificador de Entidades HTML en Línea | UtilityFlow',
      description:
        'Codifica caracteres HTML reservados y símbolos no ASCII en entidades, o decodifica entidades nombradas y numéricas a texto plano. Gratis, local e instantáneo.',
      primaryKeyword: 'codificador de entidades html',
      secondaryKeywords: [
        'herramienta de escape html',
        'decodificador de entidades html',
        'desescapar html',
        'codificar caracteres html',
      ],
      longTailKeywords: [
        'escapar etiquetas html para fragmentos de codigo en linea',
        'decodificar entidades html nombradas y numericas',
        'convertir caracteres especiales a entidades html',
        'escapar comillas y ampersands html en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Escapa de forma segura `<`, `>`, `&`, comillas y símbolos Unicode internacionales en entidades HTML para insertar fragmentos de código en páginas web, o decodifica cadenas con escape HTML de vuelta a texto legible.',
  },
  'json-csv-converter': {
    slug: 'convertidor-json-csv',
    name: 'Convertidor de JSON a CSV y CSV a JSON',
    shortDescription:
      'Convierte arreglos JSON a hojas de cálculo CSV según RFC 4180 y analiza archivos CSV entre comillas de vuelta a JSON limpio.',
    keywords: [
      'json a csv',
      'csv a json',
      'convertidor json csv',
      'convertir arreglo json a csv',
      'exportar json a csv',
      'json a csv en linea gratis',
      'convertidor csv a json',
      'convertidor json a tsv',
      'convertir csv a arreglo json',
    ],
    seo: {
      title: 'Convertidor JSON a CSV y CSV a JSON Online | UtilityFlow',
      description:
        'Convierte arreglos JSON en hojas CSV limpias con aplanado de objetos anidados, o analiza archivos CSV y TSV para volver a JSON estructurado. Gratis y local.',
      primaryKeyword: 'convertidor json a csv',
      secondaryKeywords: [
        'convertidor csv a json',
        'exportar json como csv',
        'tsv a json',
        'json a csv en linea gratis',
      ],
      longTailKeywords: [
        'convertir objetos json anidados a columnas csv en linea',
        'analizar csv entre comillas con comas a arreglo json',
        'descargador json a csv en el navegador',
        'convertir arreglo json a hoja csv gratis',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transforma arreglos JSON de API en hojas de cálculo CSV limpias, aplanando automáticamente las claves de objetos anidados, o analiza archivos CSV y TSV delimitados con comas entre comillas de vuelta a JSON formateado.',
  },
  'unix-timestamp-converter': {
    slug: 'convertidor-marca-tiempo-unix',
    name: 'Convertidor de Marcas de Tiempo Unix',
    shortDescription:
      'Convierte segundos o milisegundos de época Unix a fechas ISO 8601, UTC y locales, y viceversa.',
    keywords: [
      'convertidor de marca de tiempo unix',
      'convertidor epoch',
      'epoch a fecha',
      'marca de tiempo a iso 8601',
      'convertidor de tiempo unix',
      'convertir epoch a fecha',
      'fecha a marca de tiempo unix',
      'tiempo unix actual',
      'convertidor epoch milisegundos',
    ],
    seo: {
      title: 'Convertidor de Tiempo Unix a Fecha Online | UtilityFlow',
      description:
        'Convierte marcas de tiempo Unix en segundos o milisegundos a ISO 8601, UTC, RFC 2822 y hora local, o convierte cualquier fecha a tiempo Unix. Gratis y rápido.',
      primaryKeyword: 'convertidor de tiempo unix',
      secondaryKeywords: [
        'convertidor epoch',
        'tiempo unix a fecha',
        'fecha a marca de tiempo unix',
        'convertidor epoch milisegundos',
      ],
      longTailKeywords: [
        'convertir epoch milisegundos a fecha iso 8601',
        'tiempo unix actual en vivo en segundos',
        'convertir fecha y hora local a epoch unix',
        'marca de tiempo unix a fecha utc en linea gratis',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierte enteros de época Unix (segundos o milisegundos) en cadenas ISO 8601, UTC y de zona horaria local con desplazamientos relativos, o convierte cualquier fecha y hora del calendario de vuelta a una marca de tiempo de época.',
  },
  'sql-formatter': {
    slug: 'formateador-sql',
    name: 'Formateador SQL',
    shortDescription:
      'Formatea, indenta y estandariza consultas SQL con palabras clave en mayúsculas o minúsculas, o minimiza consultas a una línea.',
    keywords: [
      'formateador sql',
      'embellecedor sql',
      'formatear consulta sql',
      'minificador sql',
      'formatear sql en linea',
      'embellecedor de consultas sql',
      'imprimir sql bonito',
      'formateador sql en linea',
      'indentar consulta sql',
    ],
    seo: {
      title: 'Formateador SQL: Embellece Consultas Online | UtilityFlow',
      description:
        'Formatea consultas SQL con saltos de cláusula limpios, mayúsculas o minúsculas en palabras clave e indentación de 2 o 4 espacios, o minifícalas a una línea.',
      primaryKeyword: 'formateador sql',
      secondaryKeywords: [
        'embellecedor sql en linea',
        'imprimir sql bonito',
        'minificador sql',
        'formatear consulta sql en linea',
      ],
      longTailKeywords: [
        'formatear consulta sql select join group by en linea',
        'convertir palabras clave sql a mayusculas sin errores',
        'minimizar consulta sql conservando literales de cadena',
        'indentar consulta sql con 2 o 4 espacios en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierte consultas SQL densas de una sola línea en sentencias legibles y estructuradas con alineación clara de `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` y `ORDER BY`, mientras conserva las cadenas entre comillas y los comentarios.',
  },
  'css-minifier': {
    slug: 'minificador-css',
    name: 'Minificador y Embellecedor de CSS',
    shortDescription:
      'Minimiza hojas de estilo CSS para reducir el tamaño del paquete o embellece reglas CSS comprimidas con indentación limpia.',
    keywords: [
      'minificador css',
      'embellecedor css',
      'comprimir css en linea',
      'formatear css',
      'compresor css',
      'minificar css en linea',
      'desminificar css',
      'formateador css',
      'reducir tamaño de archivo css',
    ],
    seo: {
      title: 'Minificador y Embellecedor de CSS Online | UtilityFlow',
      description:
        'Minimiza CSS eliminando comentarios y espacios extra, con estadísticas de ahorro en bytes en vivo, o embellece hojas minificadas en reglas limpias, gratis.',
      primaryKeyword: 'minificador css',
      secondaryKeywords: [
        'embellecedor css',
        'comprimir css',
        'formateador css en linea',
        'minificar css en linea',
      ],
      longTailKeywords: [
        'minificar css conservando cadenas entre comillas y media queries',
        'desminificar hoja css comprimida en linea',
        'calcular porcentaje de compresion css en el navegador',
        'reducir tamaño de archivo css antes de desplegar',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Comprime hojas de estilo CSS eliminando comentarios, espacios en blanco redundantes y puntos y coma finales antes de las llaves de cierre, o expande CSS minificado de una línea de vuelta a bloques indentados legibles.',
  },
  'js-formatter': {
    slug: 'formateador-javascript',
    name: 'Minificador y Formateador de JavaScript / TypeScript',
    shortDescription:
      'Minimiza fragmentos de JavaScript eliminando comentarios y espacio en blanco en exceso, o embellece bloques de código compactos.',
    keywords: [
      'minificador javascript',
      'formateador js',
      'embellecedor js',
      'comprimir javascript en linea',
      'formateador javascript',
      'minificador js en linea',
      'embellecer javascript',
      'minificador typescript',
      'formateador de codigo js',
    ],
    seo: {
      title: 'Minificador y Formateador JavaScript Online | UtilityFlow',
      description:
        'Minimiza JavaScript y TypeScript eliminando comentarios y espacios extra de forma segura, o embellece código compacto con indentación de 2 o 4 espacios, gratis.',
      primaryKeyword: 'minificador javascript',
      secondaryKeywords: [
        'embellecedor js',
        'formatear javascript en linea',
        'compresor js',
        'formateador javascript',
      ],
      longTailKeywords: [
        'minificar javascript conservando cadenas y template literals',
        'desminificar codigo javascript compacto con indentacion',
        'formateador y minificador js en el navegador',
        'embellecer codigo javascript con indentacion de 2 o 4 espacios',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compacta fragmentos de JavaScript para bookmarklets y scripts en línea eliminando comentarios y espaciado en exceso, mientras mantiene intactos los literales de cadena, o vuelve a indentar código comprimido sin problemas.',
  },
  'cron-expression-parser': {
    slug: 'analizador-expresiones-cron',
    name: 'Analizador de Expresiones Cron y Vista Previa de Horario',
    shortDescription:
      'Traduce expresiones cron de 5 campos a lenguaje claro, explora ajustes preestablecidos y mira las próximas 8 ejecuciones.',
    keywords: [
      'analizador de expresiones cron',
      'generador crontab',
      'probador de horario cron',
      'proximas ejecuciones cron',
      'analizador crontab',
      'probador de expresiones cron',
      'vista previa de horario cron',
      'cron a lenguaje claro',
      'programador de tareas cron',
    ],
    seo: {
      title: 'Analizador de Expresiones Cron en Línea | UtilityFlow',
      description:
        'Analiza expresiones cron de 5 campos en horarios en lenguaje claro, revisa cada campo, prueba ajustes preestablecidos comunes y mira las próximas 8 ejecuciones.',
      primaryKeyword: 'analizador de expresiones cron',
      secondaryKeywords: [
        'alternativa a crontab guru',
        'vista previa de horario cron',
        'constructor cron',
        'probador de expresiones cron',
      ],
      longTailKeywords: [
        'traducir expresion cron de 5 campos a lenguaje claro',
        'calcular proximas 8 marcas de ejecucion cron',
        'probar expresiones cron de dias de semana y pasos en linea',
        'expresion cron cada dia de semana a las 9am ejemplo',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decodifica expresiones crontab Unix de 5 campos (`minuto hora día-del-mes mes día-de-la-semana`) en resúmenes claros y legibles, verifica los rangos de los campos e inspecciona las próximas 8 marcas de ejecución programadas.',
  },
  'color-converter': {
    slug: 'convertidor-colores',
    name: 'Convertidor de Colores (HEX / RGB / HSL y Contraste WCAG)',
    shortDescription:
      'Convierte colores entre HEX, RGB y HSL con selector de color en vivo y verificación de contraste WCAG 2.1 AA/AAA.',
    keywords: [
      'convertidor de colores',
      'hex a rgb',
      'rgb a hsl',
      'verificador de contraste wcag',
      'hex a hsl',
      'rgb a hex',
      'selector de color en linea',
      'convertidor de color hex',
      'hsl a rgb',
    ],
    seo: {
      title: 'Convertidor de Colores HEX, RGB y HSL | UtilityFlow',
      description:
        'Convierte colores entre HEX, RGB y HSL al instante, y luego prueba el contraste entre texto y fondo para cumplir WCAG 2.1 AA y AAA, gratis en tu navegador.',
      primaryKeyword: 'convertidor de colores',
      secondaryKeywords: [
        'convertidor hex a rgb',
        'selector de color hsl',
        'verificador de contraste wcag',
        'convertidor rgb a hex',
      ],
      longTailKeywords: [
        'convertir color hex a valores css rgb y hsl',
        'revisar contraste de texto wcag 2.1 aa y aaa',
        'herramienta interactiva de color hex rgb hsl para desarrolladores',
        'convertir hex a hsl para variables css',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Traduce colores sin problemas entre las notaciones CSS HEX, RGB y HSL con una muestra en vivo y un verificador integrado de relación de contraste WCAG 2.1 para diseño de interfaz accesible.',
  },
};
