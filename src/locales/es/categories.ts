import type { CategoryLocaleOverride } from '../types';

/**
 * Spanish overrides for the 7 categories, keyed by category id.
 * Filled by Phase 1 translation. Every category: slug, name, shortName,
 * description, longDescription, seo, sampleToolNames.
 */
export const ES_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'herramientas-de-texto-y-escritura',
    name: 'Herramientas de texto y escritura',
    shortName: 'Texto y escritura',
    description:
      'Analiza el recuento de palabras, da formato al texto, limpia espacios en blanco, convierte mayúsculas y minúsculas e inspecciona la legibilidad directamente en tu navegador.',
    longDescription:
      'Utilidades precisas de escritura y manipulación de cadenas, diseñadas para escritores, editores, equipos de contenido y estudiantes. Cada operación de texto se ejecuta al instante en tu dispositivo, sin subir borradores a servidores remotos.',
    intro:
      'Elige una herramienta a continuación, pega o escribe tu texto y el resultado aparece de inmediato. No hay nada que instalar ni nada que subir: tus borradores se quedan en tu dispositivo, porque cada herramienta se ejecuta por completo en tu navegador.',
    faqs: [
      {
        question: '¿Las herramientas de texto y escritura son gratuitas?',
        answer: 'Sí, todas son gratuitas, sin registro y sin necesidad de cuenta.',
      },
      {
        question: '¿Mi texto sale de mi navegador?',
        answer: 'No. Cada herramienta se ejecuta 100 % en tu navegador, así que el texto que pegas o escribes nunca se sube a un servidor ni se guarda en ningún lugar.',
      },
      {
        question: '¿Necesito crear una cuenta?',
        answer: 'No. Puedes abrir cualquier herramienta y empezar a usarla de inmediato: sin cuenta, sin correo electrónico y sin instalación.',
      },
      {
        question: '¿Qué herramienta debo usar para contar las palabras de mi texto?',
        answer: 'Usa el Contador de palabras. Pega tu texto en él y muestra el recuento de palabras y caracteres al instante.',
      },
    ],
    seo: {
      title: 'Herramientas de texto y escritura online | UtilityFlow',
      description:
        'Herramientas de texto y escritura en el navegador: contadores de palabras y caracteres, conversores de mayúsculas y minúsculas y limpiadores de texto.',
      keywords: [
        'herramientas de texto',
        'utilidades de escritura',
        'contador de palabras',
        'contador de caracteres',
        'conversor de mayúsculas',
      ],
    },
    sampleToolNames: [
      'Contador de palabras',
      'Contador de caracteres',
      'Conversor de mayúsculas y minúsculas',
      'Eliminar líneas duplicadas',
      'Comparador de textos',
    ],
  },
  developer: {
    slug: 'herramientas-para-desarrolladores',
    name: 'Herramientas para desarrolladores',
    shortName: 'Desarrolladores',
    description:
      'Da formato a JSON, codifica Base64, prueba expresiones regulares, decodifica JWT y genera hashes sin viajes de ida y vuelta al servidor.',
    longDescription:
      'Utilidades de ingeniería cotidianas creadas para depurar rápido y transformar datos de forma limpia. Pega cargas útiles, inspecciona formatos estructurados y valida sintaxis localmente, para que los tokens sensibles y fragmentos de configuración nunca salgan de tu equipo.',
    intro:
      'Elige la herramienta que necesitas, pega tu código o tus datos e inspecciona el resultado al instante. Todo se procesa en tu propio dispositivo, así que los tokens, las cargas útiles y los fragmentos de configuración nunca salen de tu equipo.',
    faqs: [
      {
        question: '¿Las herramientas para desarrolladores son gratuitas?',
        answer: 'Sí, todas son gratuitas, sin registro y sin necesidad de cuenta.',
      },
      {
        question: '¿Puedo pegar un token o una clave de API de forma segura en estas herramientas?',
        answer: 'Sí. Herramientas como el decodificador JWT y el codificador Base64 se ejecutan por completo en tu navegador, así que el texto que pegas nunca se envía a un servidor.',
      },
      {
        question: '¿Necesito crear una cuenta?',
        answer: 'No. Puedes abrir cualquier herramienta y empezar a usarla de inmediato: sin cuenta, sin correo electrónico y sin instalación.',
      },
      {
        question: '¿Qué herramienta debo usar para comprobar si mi JSON es válido?',
        answer: 'Usa el Formateador y validador JSON. Pega tu JSON en él y dará formato al código y mostrará cualquier error.',
      },
    ],
    seo: {
      title: 'Herramientas de desarrollo: JSON, regex, Base64 y JWT',
      description:
        'Utilidades para desarrolladores en el navegador: formato JSON, pruebas de regex, codificación Base64, inspección de JWT y generación de UUID de forma segura.',
      keywords: [
        'herramientas para desarrolladores',
        'formateador JSON',
        'codificador Base64',
        'probador de regex',
        'decodificador JWT',
      ],
    },
    sampleToolNames: [
      'Formateador y validador JSON',
      'Codificador / Decodificador Base64',
      'Codificador / Decodificador de URL',
      'Generador de UUID',
      'Probador de expresiones regulares',
    ],
  },
  calculators: {
    slug: 'calculadoras',
    name: 'Calculadoras',
    shortName: 'Calculadoras',
    description:
      'Calcula edades, porcentajes, calendarios de préstamos, IMC, conversiones de unidades y márgenes comerciales con precisión determinista.',
    longDescription:
      'Calculadoras precisas de finanzas, fechas, salud y matemáticas, diseñadas para la claridad. Revisa desgloses paso a paso, salidas tabulares limpias y recálculos instantáneos al ajustar las entradas.',
    intro:
      'Selecciona una calculadora, introduce tus números y el resultado se actualiza al instante cuando cambias los datos. No necesitas registrarte, y nada de lo que introduces se envía a ningún lugar: cada cálculo se realiza en tu navegador.',
    faqs: [
      {
        question: '¿Las calculadoras son gratuitas?',
        answer: 'Sí, todas son gratuitas, sin registro y sin necesidad de cuenta.',
      },
      {
        question: '¿Los datos que introduzco salen de mi navegador?',
        answer: 'No. Cada cálculo se ejecuta 100 % en tu navegador, así que los números que introduces nunca se suben a un servidor ni se guardan en ningún lugar.',
      },
      {
        question: '¿Las calculadoras funcionan en el móvil?',
        answer: 'Sí. Funcionan en cualquier navegador moderno, así que puedes usarlas en tu teléfono, tableta o computadora.',
      },
      {
        question: '¿Qué calculadora debo usar para el pago mensual de un préstamo?',
        answer: 'Usa la Calculadora de préstamos y EMI. Introduce el monto del préstamo, la tasa de interés y la duración para ver el pago mensual y un calendario completo de amortización.',
      },
    ],
    seo: {
      title: 'Calculadoras online: finanzas, fechas y matemáticas',
      description:
        'Calculadoras online rápidas y transparentes de edad, porcentajes, pagos de préstamos, márgenes y conversiones de unidades, con resultados instantáneos.',
      keywords: [
        'calculadoras online',
        'calculadora de edad',
        'calculadora de porcentaje',
        'calculadora de préstamos',
        'conversor de unidades',
      ],
    },
    sampleToolNames: [
      'Calculadora de edad',
      'Calculadora de porcentaje',
      'Calculadora de préstamos y EMI',
      'Calculadora de descuentos y márgenes',
      'Calculadora de diferencia de fechas',
    ],
  },
  'social-media': {
    slug: 'herramientas-de-redes-sociales',
    name: 'Herramientas de redes sociales',
    shortName: 'Redes sociales',
    description:
      'Crea enlaces de seguimiento UTM, obtén una vista previa de la longitud de las publicaciones, genera códigos QR y da formato a subtítulos para los canales sociales modernos.',
    longDescription:
      'Ayudantes prácticos de marketing y publicación para creadores, equipos de crecimiento y administradores de comunidad. Estandariza los parámetros de seguimiento de campañas, revisa los límites de caracteres de las plataformas y genera códigos QR escaneables cuando los necesites.',
    intro:
      'Abre una herramienta a continuación, introduce tu enlace o texto y copia el resultado directamente en tu publicación o campaña. Todo se ejecuta en tu navegador, así que tus enlaces y subtítulos nunca se suben a un servidor.',
    faqs: [
      {
        question: '¿Las herramientas de redes sociales son gratuitas?',
        answer: 'Sí, todas son gratuitas, sin registro y sin necesidad de cuenta.',
      },
      {
        question: '¿Algo de lo que introduzco se sube a un servidor?',
        answer: 'No. Cada herramienta se ejecuta 100 % en tu navegador, así que tus enlaces, subtítulos y textos nunca salen de tu dispositivo.',
      },
      {
        question: '¿Necesito crear una cuenta?',
        answer: 'No. Puedes abrir cualquier herramienta y empezar a usarla de inmediato: sin cuenta, sin correo electrónico y sin instalación.',
      },
      {
        question: '¿Qué herramienta crea un código QR para mi enlace?',
        answer: 'Usa el Generador de códigos QR. Introduce tu enlace y crea un código QR escaneable que puedes descargar y compartir.',
      },
    ],
    seo: {
      title: 'Herramientas de redes sociales: QR, UTM y hashtags',
      description:
        'Crea enlaces UTM, genera códigos QR, revisa los límites de caracteres sociales y da formato a hashtags y biografías con utilidades limpias del navegador.',
      keywords: [
        'herramientas de redes sociales',
        'generador de códigos QR',
        'creador de UTM',
        'formateador de hashtags',
        'contador de subtítulos',
      ],
    },
    sampleToolNames: [
      'Generador de códigos QR',
      'Creador de enlaces UTM',
      'Verificador de límite de caracteres sociales',
      'Formateador de texto Unicode con estilo',
      'Formateador de saltos de línea para biografías',
    ],
  },
  pdf: {
    slug: 'herramientas-pdf',
    name: 'Herramientas PDF',
    shortName: 'Herramientas PDF',
    description:
      'Combina, divide, reordena, agrega marcas de agua y convierte documentos PDF dentro de tu navegador sin subir archivos privados.',
    longDescription:
      'Flujos de trabajo de documentos diseñados para la confidencialidad. Procesa contratos, facturas y paquetes de estudio directamente en la memoria del cliente con WebAssembly y las API de canvas del navegador, en lugar de servidores de archivos remotos.',
    intro:
      'Elige una herramienta, selecciona tu archivo PDF y el resultado estará listo en tu navegador en unos momentos. Tus documentos nunca salen de tu dispositivo: se procesan localmente, no se suben a ningún servidor.',
    faqs: [
      {
        question: '¿Las herramientas PDF son gratuitas?',
        answer: 'Sí, todas son gratuitas, sin registro y sin necesidad de cuenta.',
      },
      {
        question: '¿Mis archivos PDF se suben a algún lugar?',
        answer: 'No. Tus archivos se procesan directamente en tu navegador, así que nunca salen de tu dispositivo ni se guardan en un servidor.',
      },
      {
        question: '¿Las herramientas PDF funcionan en el móvil?',
        answer: 'Sí. Funcionan en cualquier navegador moderno, así que puedes usarlas en tu teléfono, tableta o computadora.',
      },
      {
        question: '¿Qué herramienta combina varios archivos PDF en uno?',
        answer: 'Usa Combinar PDF. Selecciona los archivos que quieres combinar y los une en un solo documento PDF.',
      },
    ],
    seo: {
      title: 'Herramientas PDF: combina, divide y convierte PDF online',
      description:
        'Combina, divide, rota y convierte archivos PDF localmente en tu navegador, sin subir documentos sensibles a servidores de terceros ni exponerlos en línea.',
      keywords: [
        'herramientas PDF',
        'combinar PDF',
        'dividir PDF',
        'imagen a PDF',
        'editor PDF del navegador',
      ],
    },
    sampleToolNames: [
      'Combinar PDF',
      'Dividir PDF',
      'Imágenes a PDF',
      'Rotador de páginas PDF',
      'Inspector de metadatos PDF',
    ],
  },
  seo: {
    slug: 'herramientas-seo',
    name: 'Herramientas SEO',
    shortName: 'Herramientas SEO',
    description:
      'Obtén una vista previa de fragmentos SERP, genera etiquetas OpenGraph, crea robots.txt y mapas del sitio XML e inspecciona la densidad de palabras clave.',
    longDescription:
      'Utilidades técnicas y de optimización en la página para editores, fundadores independientes y especialistas en SEO. Valida la longitud de los títulos, redacta metadatos estructurados y crea slugs de URL limpios en segundos.',
    intro:
      'Elige una herramienta, introduce el título, la URL o el contenido de tu página y revisa el resultado al instante. Todas las comprobaciones se ejecutan en tu navegador, así que tus páginas no publicadas y tus borradores se mantienen privados.',
    faqs: [
      {
        question: '¿Las herramientas SEO son gratuitas?',
        answer: 'Sí, todas son gratuitas, sin registro y sin necesidad de cuenta.',
      },
      {
        question: '¿Mi contenido sale de mi navegador?',
        answer: 'No. Cada herramienta se ejecuta 100 % en tu navegador, así que los títulos, las URL y el contenido que introduces nunca se suben a un servidor ni se guardan en ningún lugar.',
      },
      {
        question: '¿Necesito crear una cuenta?',
        answer: 'No. Puedes abrir cualquier herramienta y empezar a usarla de inmediato: sin cuenta, sin correo electrónico y sin instalación.',
      },
      {
        question: '¿Qué herramienta muestra una vista previa de cómo se verá mi página en los resultados de búsqueda?',
        answer: 'Usa la Vista previa de fragmentos SERP. Introduce tu título y descripción para ver cómo podría aparecer tu página en los resultados de búsqueda de Google.',
      },
    ],
    seo: {
      title: 'Herramientas SEO: vistas previas SERP y metaetiquetas',
      description:
        'Optimiza páginas con utilidades SEO gratuitas: vistas previas SERP, generadores de metaetiquetas, creadores de robots.txt y verificadores de densidad.',
      keywords: [
        'herramientas SEO',
        'generador de metaetiquetas',
        'vista previa SERP',
        'generador de robots.txt',
        'generador de slugs',
      ],
    },
    sampleToolNames: [
      'Generador de metaetiquetas y OpenGraph',
      'Vista previa de fragmentos SERP',
      'Generador de slugs de URL',
      'Generador de robots.txt',
      'Generador de marcado Schema',
    ],
  },
  'image-file': {
    slug: 'herramientas-de-imagenes-y-archivos',
    name: 'Herramientas de imagen y archivos',
    shortName: 'Imagen y archivos',
    description:
      'Comprime imágenes, cambia el tamaño, convierte PNG/JPG/WebP, prueba el contraste WCAG, escanea códigos QR, calcula hashes de archivos y crea favicons localmente.',
    longDescription:
      'Utilidades rápidas de medios, criptografía y archivos impulsadas por HTML5 Canvas, la API Web Crypto y las API de archivos del lado del cliente. Optimiza recursos web para Core Web Vitals, verifica sumas de comprobación SHA-256 de archivos, extrae paletas de imágenes y genera favicons sin subir archivos.',
    intro:
      'Selecciona una herramienta a continuación, elige tu archivo y obtén tu resultado de inmediato. Tus imágenes y archivos nunca salen de tu dispositivo: todo se procesa localmente en tu navegador.',
    faqs: [
      {
        question: '¿Las herramientas de imagen y archivos son gratuitas?',
        answer: 'Sí, todas son gratuitas, sin registro y sin necesidad de cuenta.',
      },
      {
        question: '¿Mis imágenes se suben a un servidor?',
        answer: 'No. Tus archivos se procesan directamente en tu navegador, así que nunca salen de tu dispositivo ni se guardan en un servidor.',
      },
      {
        question: '¿Las herramientas funcionan en el móvil?',
        answer: 'Sí. Funcionan en cualquier navegador moderno, así que puedes usarlas en tu teléfono, tableta o computadora.',
      },
      {
        question: '¿Qué herramienta debo usar para que un archivo de imagen sea más pequeño?',
        answer: 'Usa el Compresor de imágenes. Elige tu imagen y reduce el tamaño del archivo manteniéndola lista para la web.',
      },
    ],
    seo: {
      title: 'Herramientas de imagen y archivos: comprimir y convertir',
      description:
        'Comprime, cambia el tamaño, rota y convierte imágenes entre PNG, JPG y WebP localmente, verifica sumas de comprobación, escanea códigos QR y crea favicons.',
      keywords: [
        'herramientas de imagen',
        'compresor de imágenes',
        'redimensionador de imágenes',
        'conversor WebP',
        'verificador de contraste de color',
      ],
    },
    sampleToolNames: [
      'Compresor de imágenes',
      'Redimensionador y recortador de imágenes',
      'Conversor de formato de imagen',
      'Verificador de contraste de color',
      'Generador de contraseñas criptográficas',
    ],
  },
};
