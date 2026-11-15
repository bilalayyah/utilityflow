import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Batch 4: Social Media tools (10) + PDF tools (10).
 * Source: src/registry/batches/batch4/socialToolsPart1.ts, Part2,
 *         src/registry/batches/batch5/pdfToolsPart1.ts, Part2.
 * Filled by Phase 1 translation. See batch1.ts for the required shape.
 */
export const ES_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'generador-de-codigos-qr',
    name: 'Generador de códigos QR',
    shortDescription:
      'Genera códigos QR escaneables personalizados para URLs, texto, inicios de sesión Wi-Fi, correos o números de teléfono, con exportación a PNG y SVG.',
    keywords: [
      'generador de codigos qr',
      'crear codigo qr gratis',
      'codigo qr wifi',
      'generador de codigo qr svg',
      'crear codigo qr online',
      'codigo qr para contrasena wifi',
      'descargar codigo qr png',
      'generador de codigo qr sin registro',
      'codigo qr para tarjetas de presentacion',
    ],
    seo: {
      title: 'Generador de códigos QR gratis – PNG y SVG | UtilityFlow',
      description:
        'Crea códigos QR estáticos gratis para URLs, Wi-Fi, texto, correos y teléfonos en tu navegador, sin registro ni vencimiento, y descarga PNG o SVG nítidos.',
      primaryKeyword: 'generador de codigos qr',
      secondaryKeywords: [
        'generador de codigo qr wifi',
        'creador de codigo qr svg',
        'codigo qr de colores personalizado',
        'codigo qr para imprimir',
      ],
      longTailKeywords: [
        'generar codigo qr estatico sin vencimiento ni rastreo',
        'crear codigo qr wifi escaneable en el navegador',
        'descargar codigo qr svg vectorial gratis',
        'hacer codigo qr para tarjeta de presentacion gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Codifica URLs de sitios web, credenciales Wi-Fi, texto, enlaces de correo o números de teléfono en códigos QR nítidos de estándar ISO directamente en tu navegador, sin límites de vencimiento, sin redirecciones de rastreo y con descargas instantáneas en PNG o SVG vectorial.',
  },
  'utm-link-builder': {
    slug: 'creador-de-enlaces-utm',
    name: 'Creador de enlaces UTM',
    shortDescription:
      'Crea URLs limpias de seguimiento de campañas con los parámetros utm_source, utm_medium, utm_campaign, utm_term y utm_content.',
    keywords: [
      'creador de enlaces utm',
      'generador utm',
      'constructor de url de campana',
      'utm para google analytics',
      'creador utm gratis',
      'generador de parametros utm',
      'enlaces utm para instagram',
      'enlaces utm para email',
      'creador de enlaces de campana',
    ],
    seo: {
      title: 'Creador de enlaces UTM gratis para campañas | UtilityFlow',
      description:
        'Crea URLs de campaña UTM consistentes para redes, correo y anuncios con plantillas, minúsculas y desglose de parámetros, gratis en tu navegador y sin registro.',
      primaryKeyword: 'creador de enlaces utm',
      secondaryKeywords: [
        'constructor de url de campana',
        'generador de etiquetas utm',
        'url de seguimiento para redes sociales',
        'creador de url utm para instagram',
      ],
      longTailKeywords: [
        'crear enlaces de seguimiento utm en minusculas online',
        'generador utm que conserva parametros y anclas existentes',
        'plantillas de enlaces utm para bio de instagram y boletines',
        'como crear enlaces utm para campanas en redes sociales',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Genera URLs limpias y estandarizadas de seguimiento de campañas para bios sociales, patrocinios de creadores, anuncios pagados y boletines, conservando las cadenas de consulta existentes y los fragmentos de URL (#sección).',
  },
  'social-character-limit-checker': {
    slug: 'contador-de-caracteres-para-redes-sociales',
    name: 'Contador de límite de caracteres para redes sociales',
    shortDescription:
      'Mide la longitud de tus textos en X, Instagram, LinkedIn, TikTok, Threads, Bluesky y YouTube con vistas previas del pliegue del feed.',
    keywords: [
      'contador de limite de caracteres para redes sociales',
      'contador de caracteres de twitter',
      'limite de caracteres de instagram',
      'contador de caracteres para linkedin',
      'contador de caracteres x',
      'contador de caracteres de bio de instagram',
      'limite de caracteres de tiktok',
      'limite de caracteres de threads',
      'contador de caracteres de bluesky',
    ],
    seo: {
      title: 'Contador de caracteres para redes sociales | UtilityFlow',
      description:
        'Revisa el límite de caracteres y el pliegue del feed en X, Instagram, LinkedIn, TikTok, Threads, Bluesky y YouTube, con conteo de emojis y enlaces, gratis.',
      primaryKeyword: 'contador de limite de caracteres para redes sociales',
      secondaryKeywords: [
        'contador de publicaciones de x twitter',
        'contador de longitud de bio de instagram',
        'vista previa del pliegue ver mas de linkedin',
        'contador de caracteres de tiktok',
      ],
      longTailKeywords: [
        'revisar limite de caracteres y pliegue en redes sociales',
        'contador de 280 caracteres de twitter con enlaces de 23',
        'contador de bio de instagram de 150 caracteres',
        'cuantos caracteres tiene una bio de instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Escribe una vez y verifica al instante los límites máximos de caracteres, la ponderación de enlaces t.co de 23 caracteres en X, el conteo de hashtags y las vistas previas de truncamiento sobre el pliegue en 10 superficies sociales principales.',
  },
  'unicode-fancy-text-formatter': {
    slug: 'formateador-de-texto-unicode',
    name: 'Formateador de texto Unicode con estilo',
    shortDescription:
      'Convierte texto ASCII simple en estilos Unicode de Negrita, Cursiva, Monoespaciada, Script, Versalitas y Ancho completo para bios.',
    keywords: [
      'generador de texto con estilo',
      'texto en negrita unicode',
      'formateador de fuentes para bio de instagram',
      'generador de versalitas',
      'generador de texto en negrita para instagram',
      'generador de texto en cursiva unicode',
      'generador de texto monoespaciado',
      'generador de texto script',
      'generador de texto de ancho completo',
    ],
    seo: {
      title: 'Formateador de texto Unicode con estilos | UtilityFlow',
      description:
        'Convierte texto simple en estilos Unicode de negrita, cursiva, monoespaciada, script, versalitas y ancho completo para bios; copia y pega donde quieras, gratis.',
      primaryKeyword: 'formateador de texto unicode',
      secondaryKeywords: [
        'generador de texto en negrita unicode',
        'convertidor de texto a versalitas',
        'fuentes para bios de redes sociales',
        'texto en negrita y cursiva para bios',
      ],
      longTailKeywords: [
        'copiar y pegar texto en negrita unicode para linkedin e instagram',
        'convertir texto simple a versalitas y monoespaciada unicode',
        'guia de accesibilidad para texto con estilo unicode',
        'como poner texto en negrita en la bio de instagram sin app',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforma letras y números simples en glifos estándar de Símbolos Alfanuméricos Matemáticos Unicode, Versalitas y Ancho completo que conservan el estilo en negrita o monoespaciado dentro de bios de texto plano en redes sociales.',
  },
  'bio-line-break-formatter': {
    slug: 'formateador-de-saltos-de-linea-para-bio',
    name: 'Formateador de saltos de línea para Instagram y bios',
    shortDescription:
      'Conserva párrafos limpios en blanco en descripciones y bios de Instagram eliminando espacios finales y agregando espaciadores invisibles.',
    keywords: [
      'generador de saltos de linea para instagram',
      'formateador de saltos de linea para bio',
      'herramienta de espaciado para descripciones',
      'salto de linea invisible para redes sociales',
      'espaciador para descripcion de instagram',
      'saltos de linea para bio de instagram',
      'herramienta de saltos de linea para descripciones',
      'caracter invisible para instagram',
      'saltos de linea para bio de tiktok',
    ],
    seo: {
      title: 'Formateador de saltos de línea para bios | UtilityFlow',
      description:
        'Mantén un espaciado limpio entre párrafos en tu bio y descripciones de Instagram, Threads y TikTok: elimina espacios finales y agrega espaciadores invisibles.',
      primaryKeyword: 'formateador de saltos de linea para bio',
      secondaryKeywords: [
        'saltos de linea en descripciones de instagram',
        'espaciador invisible para bio de instagram',
        'conservar lineas en blanco en redes sociales',
        'herramienta de espaciado para bio de instagram',
      ],
      longTailKeywords: [
        'mantener espaciado de parrafos en descripciones de instagram sin puntos',
        'corregir espacios finales que rompen saltos de linea en bios',
        'copiar descripcion social con formato limpio al portapapeles',
        'como agregar saltos de linea en la bio de instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Evita que las apps sociales colapsen las líneas vacías dentro de tus descripciones y bios eliminando los espacios finales ocultos y, si quieres, insertando espaciadores invisibles de Braille en blanco (`⠀`) entre los párrafos.',
  },
  'youtube-timestamp-generator': {
    slug: 'generador-de-marcas-de-tiempo-de-youtube',
    name: 'Generador de marcas de tiempo y capítulos de YouTube',
    shortDescription:
      'Crea descripciones de capítulos de video de YouTube ordenadas y validadas según las especificaciones de YouTube, y genera enlaces ?t= clicables.',
    keywords: [
      'generador de marcas de tiempo de youtube',
      'creador de capitulos de youtube',
      'generador de enlaces de tiempo de youtube',
      'formateador de capitulos de video',
      'creador de marcas de tiempo para youtube',
      'herramienta de capitulos para descripcion de youtube',
      'enlaces de marcas de tiempo de youtube clicables',
      'validador de capitulos de youtube',
      'generador de codigos de tiempo para capitulos',
    ],
    seo: {
      title: 'Generador de marcas de tiempo de YouTube | UtilityFlow',
      description:
        'Crea capítulos de YouTube ordenados y validados con inicio en 00:00, 3 o más capítulos y espacios de 10 segundos, más enlaces ?t= clicables para compartir.',
      primaryKeyword: 'generador de marcas de tiempo de youtube',
      secondaryKeywords: [
        'formateador de capitulos de youtube',
        'constructor de url con marca de tiempo de youtube',
        'lista de verificacion de capitulos de video',
        'herramienta de codigo de tiempo de youtube',
      ],
      longTailKeywords: [
        'generar bloque de descripcion de capitulos de video de youtube online',
        'crear enlaces de salto con marca de tiempo de youtube para capitulos',
        'validar regla de youtube de 10 segundos minimos entre capitulos',
        'formatear capitulos de youtube desde 00:00 con tres capitulos',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Arma bloques limpios y ordenados cronológicamente de capítulos de YouTube para las descripciones de tus videos, verificados automáticamente con las reglas oficiales de capítulos de YouTube, y genera enlaces `?t=` clicables para comentarios, boletines o notas del programa.',
  },
  'social-thumbnail-previewer': {
    slug: 'vista-previa-de-miniaturas-de-youtube',
    name: 'Vista previa de miniaturas de YouTube y redes sociales',
    shortDescription:
      'Revisa imágenes de miniatura locales junto con títulos en diseños de feed de escritorio y barra lateral, con verificaciones de 16:9 y 2 MB.',
    keywords: [
      'vista previa de miniaturas de youtube',
      'probador de miniaturas',
      'vista previa de truncamiento de titulo de video',
      'verificador de miniaturas 16:9',
      'verificador de tamano de miniatura de youtube',
      'vista previa de miniaturas en modo oscuro',
      'vista previa de miniaturas en feed de youtube',
      'verificador de zona segura de miniaturas',
      'herramienta de maqueta de miniaturas de video',
    ],
    seo: {
      title: 'Vista previa de miniaturas de YouTube | UtilityFlow',
      description:
        'Revisa tu miniatura y título en feeds de YouTube claros y oscuros antes de publicar, con verificaciones de 16:9, 1280×720 y 2 MB, todo local y sin subir nada.',
      primaryKeyword: 'vista previa de miniaturas de youtube',
      secondaryKeywords: [
        'vista previa de miniaturas en feed',
        'verificador de longitud de titulo de youtube',
        'herramienta de zona segura de miniaturas',
        'verificador de tamano de miniatura de youtube',
      ],
      longTailKeywords: [
        'revisar miniatura de youtube en feed de modo oscuro antes de publicar',
        'revisar superposicion de insignia de duracion en esquina inferior derecha',
        'verificador privado de miniaturas 1280x720 en el navegador',
        'probar legibilidad de miniatura de youtube en tamano de barra lateral',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Prueba tus miniaturas y títulos de video sin publicar en diseños realistas de feed principal y barra lateral compacta, en modo Claro y Oscuro, revisando dimensiones HD de 1280×720, relación de aspecto 16:9, límite de 2 MB y superposición de la marca de tiempo en la esquina inferior derecha, todo localmente.',
  },
  'hashtag-formatter': {
    slug: 'formateador-de-hashtags',
    name: 'Formateador de hashtags y administrador de grupos',
    shortDescription:
      'Limpia palabras clave desordenadas, elimina hashtags duplicados, da formato a etiquetas #CamelCase accesibles y revisa los límites de plataforma.',
    keywords: [
      'formateador de hashtags',
      'limpiador de hashtags',
      'convertidor de hashtags a camelcase',
      'eliminar hashtags duplicados',
      'generador de hashtags desde palabras clave',
      'verificador de limite de hashtags de instagram',
      'convertidor de mayusculas de hashtags',
      'herramienta para limpiar lista de hashtags',
      'formateador de grupos de hashtags',
    ],
    seo: {
      title: 'Formateador de hashtags – CamelCase y más | UtilityFlow',
      description:
        'Normaliza listas de palabras clave en hashtags #CamelCase o en minúsculas, elimina duplicados y puntuación inválida, y revisa el límite de 30 etiquetas gratis.',
      primaryKeyword: 'formateador de hashtags',
      secondaryKeywords: [
        'generador de hashtags camelcase',
        'eliminador de hashtags duplicados',
        'contador de hashtags de instagram',
        'convertidor de mayusculas de hashtags',
      ],
      longTailKeywords: [
        'convertir lista de palabras clave en hashtags camelcase accesibles',
        'eliminar hashtags duplicados y puntuacion invalida online',
        'formatear grupos de hashtags con separadores de puntos',
        'revisar limite de 30 hashtags de instagram antes de publicar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convierte palabras clave separadas por comas o volcamientos de etiquetas desordenados en hashtags sin duplicados y sin puntuación, con formato #CamelCase amigable para lectores de pantalla o en minúsculas, listos para bloques de descripción de una línea, verticales o separados por puntos.',
  },
  'caption-template-builder': {
    slug: 'creador-de-plantillas-de-publicaciones',
    name: 'Creador de plantillas de descripciones y ganchos',
    shortDescription:
      'Arma descripciones sociales estructuradas usando plantillas deterministas de PAS, Tutorial, Antes-Después-Puente y Lista de verificación.',
    keywords: [
      'creador de plantillas de descripciones',
      'plantillas de publicaciones para redes sociales',
      'creador de marcos de ganchos',
      'formateador de publicaciones de linkedin',
      'plantillas de descripciones de instagram',
      'plantilla de copywriting pas',
      'generador de ganchos para redes sociales',
      'plantillas de estructura de publicaciones',
      'herramienta de marcos para escribir descripciones',
    ],
    seo: {
      title: 'Creador de plantillas de publicaciones | UtilityFlow',
      description:
        'Arma descripciones limpias para redes sociales con plantillas PAS, Tutorial, Antes-Después-Puente y Lista de verificación, con tus propias palabras, sin IA.',
      primaryKeyword: 'creador de plantillas de descripciones',
      secondaryKeywords: [
        'marcos de descripciones para redes sociales',
        'creador de estructura de publicaciones de linkedin',
        'plantilla de copywriting pas',
        'plantillas de descripciones de instagram',
      ],
      longTailKeywords: [
        'crear descripciones estructuradas de linkedin e instagram sin ia',
        'plantilla de publicacion social de problema agitacion solucion',
        'revisar ajuste de caracteres de x e instagram al escribir descripciones',
        'plantilla de descripcion antes despues puente para redes sociales',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Redacta publicaciones sociales consistentes y fáciles de leer más rápido usando plantillas de copywriting deterministas: Problema–Agitación–Solución (PAS), Desglose accionable, Antes–Después–Puente, Lista de auditoría y Mito vs. Realidad, estrictamente con tus propias entradas y sin texto fabricado por IA.',
  },
  'social-handle-formatter': {
    slug: 'formateador-de-nombres-de-usuario',
    name: 'Formateador de nombres de usuario y handles sociales',
    shortDescription:
      'Genera variaciones consistentes de handle de marca, valida las reglas de caracteres y sintaxis de cada plataforma y abre URLs directas de verificación de perfil.',
    keywords: [
      'formateador de nombres de usuario sociales',
      'validador de sintaxis de nombre de usuario',
      'generador de handles de marca',
      'reglas de nombre de usuario para redes sociales',
      'verificador de disponibilidad de nombre de usuario',
      'verificador de handles multiplataforma',
      'reglas de nombre de usuario de instagram',
      'limite de caracteres de nombre de usuario de x',
      'convertidor de nombre de marca a handle',
    ],
    seo: {
      title: 'Formateador de nombres de usuario social | UtilityFlow',
      description:
        'Genera variaciones de handle desde un nombre de marca, valida las reglas de usuario de X, Instagram, TikTok, YouTube, Threads y GitHub, y abre URLs directas.',
      primaryKeyword: 'formateador de nombres de usuario',
      secondaryKeywords: [
        'reglas de nombre de usuario para redes sociales',
        'generador de variaciones de handle de marca',
        'reglas de caracteres de handle de youtube',
        'verificador de disponibilidad de nombre de usuario',
      ],
      longTailKeywords: [
        'revisar longitud de caracteres y simbolos permitidos de nombre de usuario',
        'sugerencias de handle de marca consistentes en x instagram tiktok',
        'validar formato de handle para github youtube y threads',
        'encontrar variaciones de handle cuando el nombre exacto esta tomado',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convierte cualquier nombre de marca, proyecto o creador en candidatos limpios de handle multiplataforma, valida cada candidato con los límites oficiales de caracteres y las reglas de puntuación de seis redes, y salta directo a las URLs de perfil en vivo para verificar la disponibilidad.',
  },
  'merge-pdf': {
    slug: 'combinar-pdf',
    name: 'Combinar PDF',
    shortDescription:
      'Combina varios documentos PDF en un orden personalizado dentro de tu navegador sin subir archivos a servidores externos.',
    keywords: [
      'combinar pdf',
      'unir archivos pdf',
      'juntar pdf online gratis',
      'combinador de pdf en el navegador',
      'unir archivos pdf gratis',
      'combinar varios pdf en uno',
      'unir pdf sin subir',
      'juntar documentos pdf online',
      'combinar paginas pdf en orden',
    ],
    seo: {
      title: 'Combinar PDF gratis – Une varios PDF en uno | UtilityFlow',
      description:
        'Combina varios archivos PDF en un solo documento en la secuencia que elijas, localmente en tu navegador con pdf-lib, sin subidas al servidor ni límites.',
      primaryKeyword: 'combinar pdf',
      secondaryKeywords: [
        'unir archivos pdf online',
        'juntar paginas pdf localmente',
        'combinador de pdf privado',
        'unir archivos pdf gratis',
      ],
      longTailKeywords: [
        'combinar contratos pdf confidenciales sin subir al servidor',
        'combinar varios pdf y reordenar secuencia en el navegador',
        'combinador de documentos pdf gratis en el navegador',
        'unir archivos pdf en orden sin subirlos',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combina dos o más archivos PDF en un solo documento limpio directamente en la memoria del navegador. Revisa el conteo de páginas de cada archivo, reordena documentos con controles de subir y bajar, elige un nombre de archivo de salida y descarga de inmediato.',
  },
  'split-pdf': {
    slug: 'dividir-pdf',
    name: 'Dividir y extraer páginas PDF',
    shortDescription:
      'Extrae rangos de páginas personalizados, páginas pares o impares, o separa PDFs individuales de una página localmente con pdf-lib.',
    keywords: [
      'dividir pdf',
      'extraer paginas pdf',
      'separar paginas pdf',
      'extractor de paginas pdf',
      'dividir paginas pdf gratis',
      'divisor de pdf online',
      'extraer paginas de pdf gratis',
      'separar pdf en paginas individuales',
      'dividir pdf por rango de paginas',
    ],
    seo: {
      title: 'Dividir PDF gratis – Extrae páginas y rangos | UtilityFlow',
      description:
        'Extrae rangos específicos de páginas PDF (como 1-3, 5), separa páginas pares o impares, o divide PDFs en páginas individuales en tu navegador, sin subidas.',
      primaryKeyword: 'dividir pdf',
      secondaryKeywords: [
        'extraer paginas de pdf',
        'extractor de rangos de paginas pdf',
        'separar pdf en paginas individuales',
        'dividir pdf por rango de paginas',
      ],
      longTailKeywords: [
        'extraer paginas 1-3 y 5 de pdf sin subir al servidor',
        'dividir paginas pares e impares de pdf en el navegador',
        'separar pdf de varias paginas localmente gratis',
        'dividir pdf y descargar solo las paginas elegidas',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Extrae rangos exactos de páginas (`1-3, 5, 8-10`), aísla páginas pares o impares para rearmar documentos de doble cara, o divide PDF cortos en archivos individuales de una página por completo dentro de la memoria del cliente.',
  },
  'images-to-pdf': {
    slug: 'imagenes-a-pdf',
    name: 'Convertidor de imágenes a PDF',
    shortDescription:
      'Convierte imágenes PNG, JPG y WebP en un solo PDF A4, Carta EE. UU. o ajustado a la imagen, localmente en tu navegador.',
    keywords: [
      'imagenes a pdf',
      'jpg a pdf',
      'convertidor de png a pdf',
      'webp a pdf',
      'convertir imagenes a pdf gratis',
      'jpg png a pdf',
      'convertidor de fotos a pdf',
      'combinar imagenes en un pdf',
      'captura de pantalla a pdf',
    ],
    seo: {
      title: 'Imágenes a PDF – Convierte JPG, PNG y WebP | UtilityFlow',
      description:
        'Convierte fotos o capturas JPG, PNG y WebP en un solo PDF limpio de varias páginas con A4, Carta EE. UU. o ajuste exacto, todo en tu navegador y sin subidas.',
      primaryKeyword: 'imagenes a pdf',
      secondaryKeywords: [
        'convertidor de jpg a pdf en el navegador',
        'png a pdf online gratis',
        'combinar fotos en pdf',
        'convertir imagenes a pdf gratis',
      ],
      longTailKeywords: [
        'convertir imagenes jpg png webp a pdf a4 sin subir',
        'agrupar capturas en pdf de varias paginas localmente',
        'ajustar dimensiones de imagen a pagina pdf sin recortar',
        'convertir fotos del telefono en documento pdf gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combina escaneos, recibos o capturas JPG, PNG y WebP en un PDF limpio de varias páginas. Ordena las imágenes visualmente, elige A4 vertical, Carta EE. UU. o Dimensiones exactas de la imagen, define márgenes y genera localmente con `pdf-lib`.',
  },
  'pdf-to-images': {
    slug: 'pdf-a-imagenes',
    name: 'PDF a imágenes (PNG / JPG)',
    shortDescription:
      'Convierte páginas PDF en imágenes PNG o JPG descargables con resolución de 1.0× a 2.0×, localmente con PDF.js.',
    keywords: [
      'pdf a imagenes',
      'pdf a png',
      'convertidor de pdf a jpg',
      'convertir paginas pdf en imagenes',
      'convertir pdf a png gratis',
      'convertir pdf a jpg',
      'pagina pdf a imagen',
      'exportar paginas pdf como png',
      'guardar pdf como imagen online',
    ],
    seo: {
      title: 'PDF a imágenes – Exporta páginas a PNG y JPG | UtilityFlow',
      description:
        'Convierte cualquier página PDF en PNG sin pérdida o JPG compacto con resolución de hasta 2× en tu navegador; elige páginas exactas y descarga solo lo necesario.',
      primaryKeyword: 'pdf a imagenes',
      secondaryKeywords: [
        'convertidor de pdf a png',
        'pdf a jpg online gratis',
        'extraer pagina pdf como imagen',
        'convertir pdf a png gratis',
      ],
      longTailKeywords: [
        'convertir paginas pdf a png de alta resolucion en el navegador',
        'guardar una pagina pdf como jpg sin subir el documento',
        'convertidor de paginas pdfjs a png en el navegador',
        'convertir diapositivas pdf a imagenes png para compartir',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convierte páginas PDF en imágenes nítidas PNG sin pérdida o JPG compactas directamente en tu navegador usando el motor de renderizado PDF.js de Mozilla, con filtrado por rango de páginas, selección de escala (`1.0×`–`2.0×`) y vistas previas visuales.',
  },
  'pdf-page-rotator': {
    slug: 'rotador-de-paginas-pdf',
    name: 'Rotador de páginas PDF',
    shortDescription:
      'Rota todas las páginas, las páginas pares o impares, o rangos de páginas específicos 90°, 180° o 270° de forma permanente y sin pérdida de calidad.',
    keywords: [
      'rotar pdf',
      'rotador de paginas pdf',
      'corregir paginas pdf de lado',
      'guardar pdf rotado',
      'rotar paginas pdf online gratis',
      'rotar pdf 90 grados',
      'corregir pdf rotado',
      'rotar paginas pdf permanentemente',
      'corrector de orientacion de pdf',
    ],
    seo: {
      title: 'Rotador de páginas PDF – Gira PDF 90° y 180° | UtilityFlow',
      description:
        'Rota de forma permanente páginas PDF de lado o boca abajo 90°, 180° o 270° en todas las páginas, pares o impares, o rangos personalizados, en tu navegador.',
      primaryKeyword: 'rotador de paginas pdf',
      secondaryKeywords: [
        'rotar pdf permanentemente',
        'corregir escaneo pdf boca abajo',
        'rotar paginas pdf especificas',
        'rotar pdf 90 grados online',
      ],
      longTailKeywords: [
        'rotar solo las paginas 2 y 4 de un documento pdf online',
        'rotar permanentemente pdf escaneado 90 grados sin recodificar',
        'herramienta de orientacion de paginas pdf en el navegador',
        'rotar paginas pdf boca abajo permanentemente gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrige tablas horizontales de lado o escaneos de documentos boca abajo de forma permanente en el diccionario de páginas del PDF. Aplica rotaciones de `90°` en sentido horario, `90°` en sentido antihorario o `180°` a todas las páginas, hojas pares o impares, o rangos exactos de páginas.',
  },
  'reorder-delete-pdf-pages': {
    slug: 'reordenar-y-eliminar-paginas-pdf',
    name: 'Reordenar y eliminar páginas PDF',
    shortDescription:
      'Inspecciona visualmente miniaturas de PDF, mueve páginas hacia arriba o abajo, duplica hojas o elimina páginas no deseadas localmente.',
    keywords: [
      'reordenar paginas pdf',
      'eliminar paginas pdf',
      'reorganizar pdf',
      'quitar paginas de pdf',
      'reordenar paginas pdf online',
      'eliminar paginas en blanco de pdf',
      'duplicar pagina pdf',
      'organizar paginas pdf',
      'mover paginas pdf',
    ],
    seo: {
      title: 'Reordenar páginas PDF – Mueve y elimina | UtilityFlow',
      description:
        'Reordena páginas PDF visualmente en tu navegador: mueve, duplica o elimina páginas de cualquier PDF con miniaturas en vivo y descarga un archivo limpio.',
      primaryKeyword: 'reordenar paginas pdf',
      secondaryKeywords: [
        'eliminar paginas de pdf',
        'reorganizar pdf online',
        'quitar paginas en blanco de pdf',
        'reordenar paginas pdf online',
      ],
      longTailKeywords: [
        'reordenar y quitar paginas pdf visualmente sin subir al servidor',
        'duplicar una pagina dentro de un pdf existente en el navegador',
        'reorganizar secuencia de paginas pdf gratis en el navegador',
        'reordenar paginas pdf online gratis en el navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Revisa tarjetas de páginas generadas para tu PDF, mueve páginas fuera de lugar hacia adelante o atrás, duplica portadas u hojas de plantilla, elimina páginas en blanco y exporta un PDF limpio y reordenado localmente.',
  },
  'pdf-watermark': {
    slug: 'marca-de-agua-en-pdf',
    name: 'Herramienta de marca de agua en PDF',
    shortDescription:
      'Estampa marcas de agua diagonales de texto personalizables como CONFIDENCIAL o BORRADOR en páginas PDF con tamaño y opacidad personalizados.',
    keywords: [
      'marca de agua pdf',
      'agregar marca de agua a pdf',
      'sello confidencial pdf',
      'marca de agua borrador pdf',
      'marca de agua pdf online gratis',
      'agregar sello borrador a pdf',
      'marca de agua confidencial pdf',
      'creador de marcas de agua pdf',
      'sellar paginas pdf',
    ],
    seo: {
      title: 'Marca de agua en PDF – Sellos gratis online | UtilityFlow',
      description:
        'Agrega una marca de agua a cualquier PDF en tu navegador: texto diagonal o centrado, tamaño, opacidad, ángulo y color, sin subir nada, gratis y privado.',
      primaryKeyword: 'marca de agua pdf',
      secondaryKeywords: [
        'agregar sello confidencial a pdf',
        'marca de agua pdf en el navegador',
        'herramienta de superposicion borrador pdf',
        'marca de agua pdf online gratis',
      ],
      longTailKeywords: [
        'agregar marca de agua diagonal semitransparente a pdf sin subir',
        'poner marca de agua solo en la primera pagina de un contrato pdf',
        'sello de texto vectorial en paginas pdf gratis',
        'agregar marca de agua confidencial a pdf gratis en el navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Estampa marcas de agua de texto vectorial centradas o diagonales, como `CONFIDENCIAL`, `BORRADOR` o `NO DISTRIBUIR`, en todas las páginas o en la portada de cualquier PDF, con controles en vivo de tamaño de fuente, opacidad, ángulo de rotación y color de marca.',
  },
  'add-pdf-page-numbers': {
    slug: 'agregar-numeros-de-pagina-a-pdf',
    name: 'Agregar números de página a PDF',
    shortDescription:
      'Inserta números de página vectoriales limpios ("Página 1 de N", "1 / N" o "1") en documentos PDF con omisión de portada.',
    keywords: [
      'agregar numeros de pagina a pdf',
      'numeracion de paginas pdf',
      'numerar paginas pdf online',
      'numeros de pagina estilo bates',
      'numerar paginas pdf',
      'agregar numeros de pagina pdf gratis',
      'numeros de pagina en pie de pdf',
      'pagina x de n pdf',
      'paginar pdf online',
    ],
    seo: {
      title: 'Agregar números de página a PDF gratis | UtilityFlow',
      description:
        'Agrega números de página a archivos PDF en tu navegador con etiquetas vectoriales limpias, omisión de portada y número inicial, sin subir nada, gratis.',
      primaryKeyword: 'agregar numeros de pagina a pdf',
      secondaryKeywords: [
        'herramienta de numeros de pagina pdf',
        'numerar paginas pdf en el navegador',
        'omitir portada al numerar pdf',
        'paginar pdf online',
      ],
      longTailKeywords: [
        'agregar numeros de pie pagina 1 de n a pdf combinado',
        'empezar numeracion de pdf en pagina 2 omitiendo portada',
        'herramienta de paginacion pdf vectorial en el navegador',
        'agregar numeros de pagina a pdf gratis sin subir',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Numera paquetes combinados, anexos legales o entregas académicas limpiamente con tipografía vectorial nítida, eligiendo `Página 1 de N`, `1 / N` o dígitos simples, alineación inferior o superior, números iniciales personalizados y omisión opcional de portada.',
  },
  'pdf-metadata-editor': {
    slug: 'editor-de-metadatos-pdf',
    name: 'Inspector y editor de metadatos PDF',
    shortDescription:
      'Ve, actualiza o elimina etiquetas de Título, Autor, Asunto, Palabras clave, Creador y Productor de PDF de forma privada en la memoria del navegador.',
    keywords: [
      'editor de metadatos pdf',
      'visor de metadatos pdf',
      'quitar autor de pdf',
      'eliminar metadatos pdf',
      'editar metadatos pdf',
      'cambiar titulo de pdf',
      'editor de propiedades pdf',
      'eliminador de autor de pdf',
      'ver metadatos pdf',
    ],
    seo: {
      title: 'Editor de metadatos PDF – Ver, editar y borrar | UtilityFlow',
      description:
        'Usa el editor de metadatos PDF para ver, actualizar o eliminar etiquetas de Título, Autor, Asunto, Palabras clave, Creador y Productor en tu navegador, gratis.',
      primaryKeyword: 'editor de metadatos pdf',
      secondaryKeywords: [
        'visor de metadatos pdf',
        'quitar metadatos de autor de pdf',
        'cambiar titulo de documento pdf',
        'editar metadatos pdf online',
      ],
      longTailKeywords: [
        'inspeccionar y eliminar metadatos de autor ocultos de pdf online',
        'cambiar titulo de pdf que se muestra en la pestana del navegador gratis',
        'editor privado de propiedades pdf en el navegador',
        'quitar metadatos de autor de pdf antes de compartir',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Revela las propiedades ocultas guardadas dentro de los encabezados PDF, incluido Título del documento, Autor, Asunto, Palabras clave, software Creador y Productor, para que puedas fijar títulos limpios de pestaña del navegador o eliminar metadatos personales de identificación antes de publicar en público.',
  },
  'pdf-text-extractor': {
    slug: 'extractor-de-texto-de-pdf',
    name: 'Extractor de texto de PDF',
    shortDescription:
      'Extrae texto seleccionable página por página de documentos PDF en texto plano copiable o descargas .txt con PDF.js.',
    keywords: [
      'extractor de texto pdf',
      'extraer texto de pdf',
      'convertidor de pdf a txt',
      'copiar texto de pdf',
      'extraer texto de pdf online',
      'pdf a texto gratis',
      'pdf a txt',
      'obtener texto de pdf',
      'herramienta para copiar texto de pdf',
    ],
    seo: {
      title: 'Extractor de texto de PDF – Copia texto a .TXT | UtilityFlow',
      description:
        'Usa el extractor de texto PDF para extraer texto incrustado por página en tu navegador, con marcadores, conteo de palabras, copia y descarga .txt, gratis.',
      primaryKeyword: 'extractor de texto pdf',
      secondaryKeywords: [
        'pdf a txt online gratis',
        'extraer texto pdf en el navegador',
        'copiar texto de documento pdf',
        'pdf a texto gratis',
      ],
      longTailKeywords: [
        'extraer texto de pdf confidencial localmente sin subir',
        'convertir pdf basado en texto en archivo txt con marcadores de pagina',
        'detectar pdf escaneado sin capa de texto',
        'extraer texto de pdf a txt gratis en el navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lee y extrae texto Unicode incrustado directamente de PDF basados en texto, página por página, usando PDF.js, con encabezados opcionales `--- Página N ---`, estadísticas de palabras y bytes, copia con un clic y exportación `.txt`, además de detección transparente cuando un PDF es escaneado o solo de imágenes.',
  },
};
