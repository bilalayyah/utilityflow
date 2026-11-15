// Detail content for ES tools — split out of
// src/locales/es/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
    instructions: [
      {
        title: 'Ingrese el título y la meta descripción de la página',
        description:
          'Complete el Título de la página (apunte a 30–60 caracteres) y la Meta descripción (120–160 caracteres) mientras observa los indicadores de longitud en vivo.',
      },
      {
        title: 'Configure la URL canónica y las directivas de indexación',
        description:
          'Ingrese la URL canónica completa de la página y elija si los rastreadores deben indexarla y seguir sus enlaces.',
      },
      {
        title: 'Agregue etiquetas Open Graph',
        description:
          'Complete el título, la descripción, el tipo y la URL de la imagen de Open Graph (se recomienda 1200×630 píxeles) para que los enlaces se vean bien al compartirlos.',
      },
      {
        title: 'Configure la Twitter/X Card',
        description:
          'Elija summary o summary_large_image y confirme el título, la descripción y la imagen de la tarjeta que mostrará X.',
      },
      {
        title: 'Revise la vista previa en vivo de la tarjeta social',
        description:
          'Revise el panel de vista previa para ver exactamente cómo aparecerá el enlace en un feed social, y corrija cualquier recorte o imagen faltante antes de publicar.',
      },
      {
        title: 'Copie o descargue el fragmento HTML',
        description:
          'Copie el HTML escapado en el <head> de su página, o descargue meta-tags.html y reutilice el bloque en sus plantillas.',
      },
    ],
    examples: [
      {
        title: 'Bloque estándar de Open Graph y canónica para un sitio web',
        input: 'Título: UtilityFlow · Tipo: website · Tarjeta: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* y twitter:*',
        explanation: 'Escapa correctamente las comillas dobles y los ampersands dentro de los valores de los atributos.',
      },
      {
        title: 'Etiquetas de artículo de blog con og:type article',
        input: 'Título: Guía 2026 · Tipo: article · Imagen: 1200×630',
        output: '<meta property="og:type" content="article">, <meta property="article:published_time" ...>',
        explanation: 'El tipo article muestra el formato de vista previa correcto en redes sociales para entradas de blog.',
      },
    ],
    benefits: [
      'Escapa automáticamente los caracteres &, ", < y > en los atributos de las etiquetas',
      'Combina etiquetas head de SEO, etiquetas Open Graph y Twitter/X Cards en un solo fragmento coherente',
      'Muestra una vista previa de cómo aparecerán los enlaces compartidos en los feeds sociales antes de publicarlos',
      'Permite descargar un fragmento independiente meta-tags.html',
    ],
    useCases: [
      'Publicar páginas de lanzamiento, micrositios de marketing y centros de producto SaaS',
      'Estandarizar dimensiones de imágenes Open Graph y tipos de tarjeta en todos los artículos',
      'Verificar directivas index/noindex y URL canónicas antes del lanzamiento a producción',
      'Entregar plantillas <head> limpias de los equipos de marketing a los ingenieros frontend',
    ],
    faqs: [
      {
        question: '¿Necesito etiquetas separadas para Open Graph y Twitter/X?',
        answer:
          'X usa Open Graph para el título y la descripción cuando es necesario, pero declarar explícitamente twitter:card (summary_large_image) junto con og:* garantiza vistas previas de imágenes amplias y predecibles en todas partes.',
      },
      {
        question: '¿Qué tamaño debe tener mi og:image?',
        answer:
          'Use una imagen de 1200×630 píxeles (relación de aspecto 1.91:1) alojada en una URL HTTPS sin bloqueo de robots.txt.',
      },
      {
        question: '¿Agregar <meta name="keywords"> todavía ayuda al posicionamiento en Google?',
        answer:
          'Los principales motores de búsqueda ignoran las meta keywords debido al spam histórico, por lo que este generador mantiene su <head> limpio con títulos, descripciones, canónicas y etiquetas sociales que sí importan.',
      },
      {
        question: '¿El Generador de Meta Etiquetas es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que sus títulos, descripciones y URL nunca se suben a un servidor.',
      },
      {
        question: '¿Necesito instalar algo para usar el Generador de Meta Etiquetas?',
        answer:
          'No. Funciona en cualquier navegador moderno sin instalar nada, y puede generar etiquetas en computadora o móvil.',
      },
      {
        question: '¿Cuál es la longitud ideal para un meta título?',
        answer:
          'Apunte a 30–60 caracteres para que el título completo quepa en los resultados de búsqueda y en las tarjetas sociales sin cortarse con puntos suspensivos.',
      },
      {
        question: '¿Cuál es la longitud ideal para una meta descripción?',
        answer:
          'Manténgala entre 120 y 160 caracteres para que todo el resumen se vea en los resultados de búsqueda en computadora y móvil.',
      },
      {
        question: '¿Cómo maneja el Generador de Meta Etiquetas los caracteres especiales en los títulos?',
        answer:
          'Escapa automáticamente &, ", < y > dentro de los valores de los atributos con HTML, para que las comillas y los ampersands nunca rompan el código de su página.',
      },
      {
        question: '¿Qué es una URL canónica y por qué la incluye el generador?',
        answer:
          'Una URL canónica indica a los motores de búsqueda cuál versión de una página es la original cuando existen páginas similares, evitando la confusión por contenido duplicado.',
      },
      {
        question: '¿Cuál es la diferencia entre las etiquetas Open Graph y Twitter Card?',
        answer:
          'Las etiquetas Open Graph controlan las vistas previas de enlaces en Facebook, LinkedIn y apps de mensajería, mientras que las etiquetas Twitter Card controlan cómo aparece el mismo enlace en X.',
      },
      {
        question: '¿Qué tipo de tarjeta de Twitter debo elegir en el Generador de Meta Etiquetas?',
        answer:
          'Use summary_large_image para páginas con imágenes destacadas, como artículos y páginas de producto, y summary para páginas de texto simple donde basta una miniatura pequeña.',
      },
      {
        question: '¿Puedo ver una vista previa de cómo se verá mi enlace al compartirlo?',
        answer:
          'Sí. La vista previa en vivo de la tarjeta social muestra el título, la descripción y la imagen exactamente como aparecerán en el feed social antes de publicar.',
      },
      {
        question: '¿El Generador de Meta Etiquetas sube el contenido de mi página a algún lugar?',
        answer:
          'No. Todo funciona localmente en su navegador y nada de lo que escribe sale de su dispositivo.',
      },
      {
        question: '¿Cómo agrego las meta etiquetas generadas a mi sitio web?',
        answer:
          'Copie el fragmento y péguelo dentro de la sección <head> de su plantilla de página, o descargue meta-tags.html y reutilice el bloque en varias páginas.',
      },
      {
        question: '¿Cuándo debo usar una directiva robots noindex con el Generador de Meta Etiquetas?',
        answer:
          'Use noindex solo para páginas que nunca quiere en los resultados de búsqueda, como páginas de agradecimiento, resultados de búsqueda interna o copias de prueba de una página en vivo.',
      },
      {
        question: '¿Puedo usar el Generador de Meta Etiquetas para una entrada de blog o una página de producto?',
        answer:
          'Sí. Configure og:type en article para entradas de blog o product para páginas de tienda, para que cada plataforma muestre el formato de vista previa correcto.',
      },
      {
        question: '¿Qué pasa si mi URL de og:image es incorrecta o falta la imagen?',
        answer:
          'Las plataformas sociales no mostrarán imagen o mostrarán una vista previa rota, así que use siempre una URL de imagen HTTPS directa y revise la vista previa antes de publicar.',
      },
      {
        question: '¿El Generador de Meta Etiquetas admite páginas multilingües?',
        answer:
          'Genera etiquetas para una página a la vez, así que configure og:locale según el idioma de la página y genere un conjunto de etiquetas separado para cada versión traducida.',
      },
      {
        question: '¿Puedo descargar las meta etiquetas generadas como archivo?',
        answer:
          'Sí. El botón de descarga guarda un archivo meta-tags.html independiente con el fragmento completo escapado.',
      },
      {
        question: '¿El Generador de Meta Etiquetas mejorará mi posicionamiento en Google por sí solo?',
        answer:
          'Ninguna herramienta garantiza posiciones, pero los títulos, descripciones y etiquetas sociales precisos mejoran la tasa de clics y la forma en que se presentan sus páginas.',
      },
    ],
  },
  'serp-snippet-preview': {
    instructions: [
      {
        title: 'Ingrese título, descripción y URL',
        description:
          'Escriba su Título SEO candidato, Meta descripción, URL de la página y, si quiere, el Nombre del sitio o la fecha de publicación.',
      },
      {
        title: 'Mida el ancho en píxeles',
        description:
          'Revise la lectura de píxeles en vivo junto al Título SEO: las letras anchas como W y M consumen más píxeles horizontales que l e i.',
      },
      {
        title: 'Revise la vista previa de escritorio',
        description:
          'Revise la tarjeta de búsqueda de escritorio para ver el título completo, la URL en forma de ruta y la descripción tal como las verían los usuarios de computadora.',
      },
      {
        title: 'Cambie a la vista previa móvil',
        description:
          'Cambie a la vista Móvil para revisar el punto de recorte más corto y asegurarse de que el mensaje clave siga apareciendo en pantallas pequeñas.',
      },
      {
        title: 'Pruebe el resaltado de palabras clave en negrita',
        description:
          'Ingrese su consulta de búsqueda objetivo en el campo Palabra clave en negrita para ver qué palabras resaltaría Google dentro de su fragmento.',
      },
      {
        title: 'Copie las etiquetas terminadas',
        description:
          'Cuando la vista previa se vea bien, copie las etiquetas <title> y <meta name="description"> listas para pegar en su página.',
      },
    ],
    examples: [
      {
        title: 'Detectar el recorte de un título con caracteres anchos',
        input: 'Título de 60 caracteres lleno de W y M en mayúsculas',
        output: 'Marca desbordamiento de más de 580 px aunque tenga menos de 60 caracteres, para que lo recorte antes del corte con puntos suspensivos.',
        explanation: 'Las métricas de texto de Canvas aproximan los anchos reales de las fuentes serif/sans de los resultados de búsqueda.',
      },
      {
        title: 'Comparar el recorte de la descripción en móvil y escritorio',
        input: 'Descripción de 160 caracteres · Vista móvil activada',
        output: 'La vista móvil muestra el corte cerca de los 120 caracteres, con el mensaje clave al inicio.',
        explanation: 'La vista previa móvil revela qué parte del mensaje sobrevive al pliegue en pantallas pequeñas.',
      },
    ],
    benefits: [
      'Usa anchos en píxeles de Canvas measureText() además del conteo de caracteres',
      'Formatea el dominio y los segmentos de ruta en rutas de navegación limpias automáticamente',
      'Simula términos de consulta en negrita dentro de las meta descripciones para revisar la tasa de clics',
      'Copia las etiquetas <title> y <meta name="description"> listas para pegar con un clic',
    ],
    useCases: [
      'Refinar títulos de blog y de páginas de producto para evitar el recorte "..." a mitad de palabra',
      'Escribir meta descripciones con mayor CTR dentro del pliegue móvil de unos 120 caracteres',
      'Revisar cómo las fechas de publicación afectan la longitud visible de la descripción',
      'Revisar fragmentos de páginas de destino durante el control de calidad editorial',
    ],
    faqs: [
      {
        question: '¿Por qué el ancho en píxeles importa más que el conteo estricto de caracteres?',
        answer:
          'Los motores de búsqueda recortan los títulos según el ancho en píxeles del contenedor (unos 580–600 px en escritorio), no según una longitud fija de caracteres. Las letras mayúsculas y los caracteres anchos como W o M ocupan casi el doble de ancho que i o l.',
      },
      {
        question: '¿Google puede reescribir mi título o mi meta descripción en los resultados en vivo?',
        answer:
          'Sí. Google a veces reescribe los fragmentos dinámicamente para que coincidan con consultas de búsqueda específicas o con encabezados H1, aunque los títulos concisos y precisos reducen las reescrituras no deseadas.',
      },
      {
        question: '¿Esto obtiene posiciones en vivo de Google?',
        answer:
          'No. Es un simulador visual de fragmentos SERP sin conexión que funciona por completo en su navegador.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que nada de lo que escribe se sube a ningún lugar.',
      },
      {
        question: '¿Cuál es la longitud ideal del título para los resultados de búsqueda de Google?',
        answer:
          'Apunte a menos de unos 580 píxeles en escritorio, lo que suele significar entre 50 y 60 caracteres según el ancho de las letras.',
      },
      {
        question: '¿Cómo mide la Vista Previa de Fragmento SERP el ancho en píxeles?',
        answer:
          'Usa la API Canvas measureText() del navegador para calcular el ancho real renderizado de su título con el mismo estilo de fuente que usan los resultados de búsqueda.',
      },
      {
        question: '¿Por qué mi título se corta aunque tenga menos de 60 caracteres?',
        answer:
          'Los motores de búsqueda recortan por ancho en píxeles, no por conteo de caracteres, así que las letras anchas como W y M ocupan mucho más espacio que las letras angostas como i y l.',
      },
      {
        question: '¿Cuál es la longitud ideal de la meta descripción para escritorio y móvil?',
        answer:
          'En escritorio se muestran unos 155–160 caracteres, mientras que en móvil el corte es de unos 120, así que ponga primero las palabras y palabras clave más importantes.',
      },
      {
        question: '¿Puedo ver vistas previas de resultados de búsqueda de escritorio y móvil?',
        answer:
          'Sí. Alterne entre las vistas de Escritorio y Móvil para ver cómo se ven el mismo título y descripción en cada tamaño de pantalla.',
      },
      {
        question: '¿Qué hace la función de palabras clave en negrita en la Vista Previa de Fragmento SERP?',
        answer:
          'Ingrese una consulta de búsqueda objetivo y la vista previa pone en negrita las palabras coincidentes dentro de su título y descripción, tal como Google resalta los términos de consulta en los resultados reales.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP muestra mi posicionamiento real en Google?',
        answer:
          'No. Es un simulador visual sin conexión que muestra cómo podría verse un fragmento, no datos de posicionamiento en vivo de Google.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP sube mi título o mi URL a algún lugar?',
        answer:
          'No. Toda la vista previa y la medición ocurren localmente en su navegador.',
      },
      {
        question: '¿Cómo copio el título y la meta descripción después de la vista previa?',
        answer:
          'Use el botón de copia con un clic para obtener las etiquetas <title> y <meta name="description"> listas para pegar en su página.',
      },
      {
        question: '¿Por qué Google a veces reescribe mi título en los resultados en vivo?',
        answer:
          'Google puede usar su H1 u otro texto de la página cuando cree que coincide mejor con una consulta de búsqueda, aunque los títulos concisos y precisos reducen las reescrituras.',
      },
      {
        question: '¿Debo incluir mi marca o el nombre del sitio en el título?',
        answer:
          'A menudo sí. Póngalo al final después de un separador, para que la palabra clave principal quede primero y la marca siga apareciendo en los resultados.',
      },
      {
        question: '¿Cuál es la diferencia entre una etiqueta de título y un encabezado H1?',
        answer:
          'La etiqueta de título aparece en los resultados de búsqueda y en las pestañas del navegador, mientras que el H1 es el titular visible dentro de la página.',
      },
      {
        question: '¿Puedo probar varios títulos rápidamente en la Vista Previa de Fragmento SERP?',
        answer:
          'Sí. Edite el campo del título y la vista previa, el ancho en píxeles y la advertencia de recorte se actualizan en vivo mientras escribe.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP tiene en cuenta las fechas de publicación?',
        answer:
          'Sí. Al agregar una fecha se muestra cómo acorta la descripción visible, lo que importa para noticias y entradas de blog.',
      },
      {
        question: '¿Qué debo hacer si mi descripción se recorta en móvil?',
        answer:
          'Mueva el mensaje clave y la palabra clave objetivo al inicio de la descripción, para que la vista móvil plegada siga teniendo sentido.',
      },
      {
        question: '¿La verificación de ancho en píxeles de la Vista Previa de Fragmento SERP es precisa para todos los idiomas?',
        answer:
          'Aproxima el renderizado real de búsqueda a partir de las fuentes de su navegador, por lo que los resultados son más precisos para escrituras latinas y pueden variar con otros sistemas de escritura.',
      },
    ],
  },
  'xml-sitemap-generator': {
    instructions: [
      {
        title: 'Pegue las URL canónicas',
        description:
          'Ingrese una URL completa https:// (o http://) por línea en el editor; las líneas con errores se marcan claramente.',
      },
      {
        title: 'Revise las líneas no válidas marcadas',
        description:
          'Revise las líneas resaltadas por errores tipográficos o por falta del prefijo https:// y corríjalas antes de generar, ya que las URL no válidas se excluyen del XML.',
      },
      {
        title: 'Configure las etiquetas opcionales',
        description:
          'Configure una fecha <lastmod> opcional, una sugerencia <changefreq> y una <priority> (u omita las etiquetas opcionales para archivos más limpios).',
      },
      {
        title: 'Revise la deduplicación',
        description:
          'Confirme el conteo de duplicados que muestra la herramienta para que el sitemap final liste cada URL canónica exactamente una vez.',
      },
      {
        title: 'Revise el XML generado',
        description:
          'Inspeccione la salida XML para confirmar que el urlset, las entradas <loc> y los valores <lastmod> opcionales se vean correctos.',
      },
      {
        title: 'Copie o descargue sitemap.xml',
        description:
          'Haga clic en Copiar XML o Descargar .xml para colocarlo directamente en la carpeta raíz o /public/ de su sitio.',
      },
    ],
    examples: [
      {
        title: 'Generar un sitemap de sitio estático para Cloudflare Pages',
        input: '5 URL canónicas · lastmod: 2026-11-12 · Deduplicar: activado',
        output: '<?xml version="1.0"?> válido <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: 'Escapa las entidades XML (&, <, >, comillas) limpiamente dentro de cada elemento <loc>.',
      },
      {
        title: 'Limpiar una lista con duplicados y errores tipográficos',
        input: '12 URL pegadas, 2 duplicadas y 1 con un error tipográfico',
        output: 'Sitemap con 9 URL únicas y la línea no válida marcada y excluida.',
        explanation: 'La deduplicación y la validación evitan que un error en una línea rompa todo el archivo.',
      },
    ],
    benefits: [
      'Valida cada línea con el análisis de URL nativo del navegador antes de emitir el XML',
      'Escapa automáticamente & y caracteres especiales de consulta dentro de las URL <loc>',
      'Deduplica las URL idénticas para evitar sitemaps inflados',
      'Permite omitir <priority> y <changefreq> limpiamente cuando lo desea (Google ignora ambas)',
    ],
    useCases: [
      'Crear sitemaps iniciales para páginas de destino estáticas o micrositios de documentación',
      'Preparar archivos limpios de envío de URL después de migraciones de sitio',
      'Generar sitemaps complementarios sin imágenes ni noticias para sitios de pequeñas empresas',
      'Exportar XML con formato directamente para desplegar junto con robots.txt',
    ],
    faqs: [
      {
        question: '¿Debo incluir URL no canónicas, redirigidas o noindex en un sitemap?',
        answer:
          'No. Los sitemaps deben listar solo URL canónicas que devuelven HTTP 200 y que usted quiere que los motores de búsqueda indexen.',
      },
      {
        question: '¿Google todavía usa <priority> y <changefreq>?',
        answer:
          'Google Search ignora las etiquetas <priority> y <changefreq> y se enfoca principalmente en <loc> y en fechas <lastmod> precisas cuando se actualizan de forma significativa.',
      },
      {
        question: '¿Este generador rastrea automáticamente mi sitio web en vivo?',
        answer:
          'No. Las páginas del lado del cliente no pueden rastrear sitios web arbitrarios de otros orígenes debido a la seguridad CORS del navegador; pegue aquí su lista de rutas exportada para compilar XML válido al instante.',
      },
      {
        question: '¿El Generador de Sitemap XML es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que su lista de URL nunca se sube a un servidor.',
      },
      {
        question: '¿Cuántas URL puedo incluir en un sitemap?',
        answer:
          'El protocolo Sitemaps permite hasta 50.000 URL o 50 MB sin comprimir por archivo, así que los sitios grandes deben dividirse en varios sitemaps o usar un índice de sitemaps.',
      },
      {
        question: '¿Cuál es la diferencia entre un sitemap y robots.txt?',
        answer:
          'Un sitemap lista las URL que usted quiere que los motores de búsqueda descubran, mientras que robots.txt da a los rastreadores reglas sobre qué rutas pueden o no visitar.',
      },
      {
        question: '¿Dónde subo el archivo sitemap.xml?',
        answer:
          'Colóquelo en la raíz de su sitio, por ejemplo https://ejemplo.com/sitemap.xml, para que los rastreadores puedan encontrarlo en la ubicación estándar.',
      },
      {
        question: '¿Necesito enviar mi sitemap a Google?',
        answer:
          'Se recomienda. Envíelo en Google Search Console y también haga referencia a él con una línea Sitemap: en robots.txt para otros rastreadores.',
      },
      {
        question: '¿Qué formatos de URL acepta el Generador de Sitemap XML?',
        answer:
          'Ingrese una URL completa https:// o http:// por línea, incluido el dominio, y la herramienta marca cualquier línea que no sea una URL válida.',
      },
      {
        question: '¿Qué pasa con las URL duplicadas en mi sitemap?',
        answer:
          'Los duplicados se eliminan automáticamente para que el sitemap terminado contenga cada URL canónica exactamente una vez.',
      },
      {
        question: '¿Qué pasa con las URL no válidas o mal formadas en el Generador de Sitemap XML?',
        answer:
          'Las líneas no válidas se marcan claramente y se excluyen del XML, para que un error tipográfico en una línea nunca rompa todo el archivo.',
      },
      {
        question: '¿Cómo maneja el Generador de Sitemap XML los caracteres especiales en las URL?',
        answer:
          'Escapa con XML el carácter & y otros caracteres especiales dentro de los elementos <loc>, para que las cadenas de consulta y las rutas codificadas se mantengan válidas.',
      },
      {
        question: '¿Debo incluir URL de imágenes o videos en un sitemap normal?',
        answer:
          'Un sitemap estándar lista solo URL de páginas. Las URL de imágenes y videos necesitan sus propias extensiones de sitemap si quiere indexarlas por separado.',
      },
      {
        question: '¿Debo listar URL paginadas o filtradas en mi sitemap?',
        answer:
          'No. Liste solo páginas canónicas e indexables y deje fuera la paginación, los parámetros de ordenación y las páginas de resultados de búsqueda interna.',
      },
      {
        question: '¿Qué es <lastmod> y debo configurarlo en mi sitemap?',
        answer:
          'Registra la fecha en que una página cambió por última vez. Configúrelo solo cuando la fecha sea precisa, porque Google lo usa para juzgar qué tan actualizada está una página.',
      },
      {
        question: '¿El Generador de Sitemap XML funciona sin conexión?',
        answer:
          'Sí. Funciona por completo en su navegador sin subir nada, por lo que puede crear sitemaps sin conexión a internet una vez cargada la página.',
      },
      {
        question: '¿Puedo regenerar mi sitemap después de agregar páginas nuevas?',
        answer:
          'Sí. Pegue la lista de URL actualizada y descargue un sitemap.xml nuevo, luego vuelva a subirlo a la raíz de su sitio.',
      },
      {
        question: '¿Qué es un archivo índice de sitemap?',
        answer:
          'Es un archivo que lista varios archivos de sitemap, usado por sitios grandes para organizar miles de URL por secciones o idiomas.',
      },
      {
        question: '¿Tener un sitemap garantiza que Google indexará mis páginas?',
        answer:
          'No. Un sitemap ayuda a los motores de búsqueda a descubrir URL, pero la indexación sigue dependiendo de la calidad de la página, los enlaces y el presupuesto de rastreo.',
      },
      {
        question: '¿Puedo usar el Generador de Sitemap XML para un sitio de WordPress o Shopify?',
        answer:
          'Sí. Exporte o copie su lista de URL canónicas desde cualquier plataforma, péguela aquí y la herramienta crea un sitemap.xml estándar.',
      },
    ],
  },
  'robots-txt-generator': {
    instructions: [
      {
        title: 'Elija una plantilla inicial o edite las reglas',
        description:
          'Haga clic en Permitir todo, App web estándar / SaaS, WordPress limpio o Pruebas (Bloquear todo) para completar reglas comunes.',
      },
      {
        title: 'Personalice User-agents y rutas',
        description:
          'Agregue rutas Allow o Disallow para * o para rastreadores específicos como Googlebot, Bingbot o GPTBot.',
      },
      {
        title: 'Configure Crawl-delay donde sea necesario',
        description:
          'Agregue un valor de Crawl-delay para rastreadores que lo respetan, como Bingbot, para ralentizar las solicitudes en un servidor pequeño o compartido.',
      },
      {
        title: 'Adjunte URL de sitemap',
        description:
          'Ingrese la URL completa de su sitemap XML para que los rastreadores puedan descubrirlo desde robots.txt, agregando más de una línea si usa varios sitemaps.',
      },
      {
        title: 'Revise la salida agrupada',
        description:
          'Verifique que cada bloque User-agent esté agrupado correctamente y que ninguna regla Disallow bloquee por accidente CSS, JavaScript o páginas públicas.',
      },
      {
        title: 'Copie, descargue y pruebe',
        description:
          'Copie o descargue robots.txt, colóquelo en la raíz de su dominio y verifíquelo con el probador de robots.txt en Google Search Console.',
      },
    ],
    examples: [
      {
        title: 'App web SaaS que bloquea /api/ y /admin/',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Archivo robots.txt agrupado que termina con Sitemap: https://ejemplo.com/sitemap.xml',
        explanation: 'Agrupa limpiamente los User-agents coincidentes en bloques únicos.',
      },
      {
        title: 'Bloquear todo un entorno de pruebas',
        input: 'Plantilla: Pruebas (Bloquear todo) · Sitemap: ninguno',
        output: 'User-agent: *\nDisallow: /',
        explanation: 'La plantilla de pruebas evita que los motores de búsqueda indexen un sitio sin lanzar.',
      },
    ],
    benefits: [
      'Agrupa automáticamente las reglas por bloques de User-agent coincidentes según las mejores prácticas de RFC 9309',
      'Incluye plantillas iniciales verificadas para evitar bloquear por accidente recursos CSS/JS',
      'Admite varias declaraciones Sitemap: para índices de sitemap o archivos localizados',
      'La descarga con un clic produce un archivo robots.txt listo para desplegar',
    ],
    useCases: [
      'Evitar que los rastreadores gasten presupuesto en /api/, /admin/ o URL de búsqueda interna con consultas',
      'Anunciar ubicaciones de sitemap XML en la raíz del dominio',
      'Agregar reglas específicas para bots especializados como AdsBot o rastreadores de IA',
      'Configurar entornos de pruebas antes del lanzamiento por DNS',
    ],
    faqs: [
      {
        question: '¿Disallow: /admin/ en robots.txt mantiene una página fuera de la Búsqueda de Google o protege secretos?',
        answer:
          'Distinción importante: robots.txt detiene el rastreo, no necesariamente la indexación si otros sitios enlazan directamente a la URL, y robots.txt es legible públicamente. Use autenticación para rutas sensibles y <meta name="robots" content="noindex"> para evitar la indexación.',
      },
      {
        question: '¿Dónde debe alojarse robots.txt?',
        answer:
          'Debe servirse en la ruta raíz exacta de su host (https://sudominio.com/robots.txt), devolviendo HTTP 200.',
      },
      {
        question: '¿Google respeta Crawl-delay?',
        answer:
          'Googlebot ignora Crawl-delay (use la configuración de Search Console si lo necesita), mientras que Bing y otros rastreadores todavía respetan intervalos numéricos de Crawl-delay.',
      },
      {
        question: '¿El Generador de Robots.txt es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que las reglas de su sitio nunca se suben a ningún lugar.',
      },
      {
        question: '¿Cuál es la diferencia entre robots.txt y una meta etiqueta robots noindex?',
        answer:
          'Robots.txt indica a los rastreadores que no visiten una ruta, mientras que una etiqueta noindex indica a los motores de búsqueda que no muestren una página rastreada en los resultados. Resuelven problemas diferentes.',
      },
      {
        question: '¿Puede robots.txt bloquear rastreadores de IA como GPTBot?',
        answer:
          'Sí. Agregue un grupo User-agent: GPTBot con Disallow: / para mantener fuera a ese rastreador, y repita el patrón para otros bots de IA que quiera bloquear.',
      },
      {
        question: '¿Qué significa "User-agent: *" en robots.txt?',
        answer:
          'Significa que las reglas de ese grupo se aplican a todos los rastreadores que visitan su sitio, a menos que un grupo User-agent más específico las anule.',
      },
      {
        question: '¿Cuál es la diferencia entre Allow y Disallow en robots.txt?',
        answer:
          'Allow permite rastrear una ruta y Disallow la bloquea. Cuando las reglas se superponen, gana la regla coincidente más específica.',
      },
      {
        question: '¿Puedo bloquear una sola página o carpeta con el Generador de Robots.txt?',
        answer:
          'Sí. Agregue Disallow: /pagina/ para una página o Disallow: /carpeta/ para bloquear todo un directorio y su contenido.',
      },
      {
        question: '¿Debo bloquear mis archivos CSS y JavaScript en robots.txt?',
        answer:
          'No. Los motores de búsqueda necesitan su CSS y JavaScript para renderizar las páginas correctamente, y bloquearlos puede dañar el posicionamiento.',
      },
      {
        question: '¿Qué plantillas iniciales incluye el Generador de Robots.txt?',
        answer:
          'Incluye Permitir todo, App web estándar / SaaS, WordPress limpio y Pruebas (Bloquear todo), para que pueda partir de una plantilla probada en lugar de un archivo en blanco.',
      },
      {
        question: '¿Cómo agrego mi sitemap a robots.txt?',
        answer:
          'Agregue una línea como Sitemap: https://ejemplo.com/sitemap.xml al final del archivo para que los rastreadores encuentren su sitemap desde la raíz.',
      },
      {
        question: '¿Puedo tener varias líneas Sitemap en un archivo robots.txt?',
        answer:
          'Sí. Puede listar varias URL de sitemap, lo que es útil para índices de sitemap o sitemaps separados por idioma o sección.',
      },
      {
        question: '¿El Generador de Robots.txt sube mis reglas a algún lugar?',
        answer:
          'No. Todo funciona localmente en su navegador y el archivo se genera en su dispositivo.',
      },
      {
        question: '¿Cómo pruebo mi robots.txt después de publicarlo?',
        answer:
          'Súbalo a la raíz de su dominio y luego verifíquelo con el probador de robots.txt en Google Search Console o solicitándolo como Googlebot.',
      },
      {
        question: '¿Qué pasa si bloqueo por accidente todo mi sitio en robots.txt?',
        answer:
          'Los motores de búsqueda dejarán de rastrear sus páginas. Elimine la línea Disallow: /, vuelva a subir el archivo y solicite un nuevo rastreo en Search Console.',
      },
      {
        question: '¿Robots.txt oculta mis páginas de administración de los hackers?',
        answer:
          'No. Robots.txt es legible públicamente, así que cualquiera puede ver qué rutas bloqueó. Proteja las páginas sensibles con contraseñas o autenticación.',
      },
      {
        question: '¿Qué es Crawl-delay y debo usarlo en robots.txt?',
        answer:
          'Crawl-delay pide a los rastreadores que esperen un número de segundos entre solicitudes. Googlebot lo ignora, pero Bing y algunos otros rastreadores lo respetan.',
      },
      {
        question: '¿Puedo escribir reglas de robots.txt diferentes para Googlebot y Bingbot?',
        answer:
          'Sí. Cree un grupo User-agent separado para cada rastreador con sus propias líneas Allow y Disallow.',
      },
      {
        question: '¿Dónde subo robots.txt en Cloudflare Pages o en un sitio estático?',
        answer:
          'Coloque el archivo en la carpeta public/ o en la raíz de su salida de compilación para que se sirva en https://sudominio.com/robots.txt.',
      },
    ],
  },
  'schema-markup-generator': {
    instructions: [
      {
        title: 'Elija un tipo de Schema.org',
        description:
          'Seleccione Article, FAQPage, Product, Organization o BreadcrumbList en el selector superior.',
      },
      {
        title: 'Complete las propiedades de la entidad',
        description:
          'Ingrese titulares, pares de preguntas y respuestas, ofertas de precios, detalles de la organización o rutas de navegación.',
      },
      {
        title: 'Agregue filas extra para las listas',
        description:
          'Agregue pares extra de preguntas y respuestas para FAQPage o elementos extra de ruta para BreadcrumbList, y elimine las filas que no necesita.',
      },
      {
        title: 'Revise el JSON-LD generado',
        description:
          'Revise la salida JSON en vivo para confirmar los nombres y valores correctos de los campos, y confirme que las propiedades opcionales vacías se omiten automáticamente.',
      },
      {
        title: 'Copie la etiqueta <script> o exporte .jsonld',
        description:
          'Copie el bloque completo <script type="application/ld+json"> en el <head> de su página o descargue el archivo .jsonld.',
      },
      {
        title: 'Valide antes de publicar',
        description:
          'Pegue la salida en la Prueba de resultados enriquecidos o en el validador de Schema para detectar errores de sintaxis, ya que los motores de búsqueda ignoran el JSON-LD no válido.',
      },
    ],
    examples: [
      {
        title: 'Crear datos estructurados dinámicos de FAQPage',
        input: '2 pares de Pregunta/Respuesta bajo el esquema FAQPage',
        output: 'Bloque de script JSON-LD FAQPage válido con @context https://schema.org',
        explanation: 'Usa serialización JSON segura con escape \\u003c para evitar el cierre prematuro de </script>.',
      },
      {
        title: 'Marcar un producto con precio y disponibilidad',
        input: 'Nombre: Curso SEO · Precio: 49 USD · Disponibilidad: InStock',
        output: 'Bloque Product con offers y availability listo para pegar en la página de producto.',
        explanation: 'Los campos de oferta y disponibilidad permiten resultados enriquecidos de compras en Google.',
      },
    ],
    benefits: [
      'Admite 5 de los tipos de datos estructurados de Schema.org con mayor impacto',
      'Escapa los caracteres "<" limpiamente dentro de JSON-LD para evitar rupturas por inyección de script HTML',
      'Omite automáticamente las propiedades opcionales vacías para una sintaxis limpia',
      'Se combina naturalmente con el Formateador y Validador de JSON para extensiones personalizadas',
    ],
    useCases: [
      'Agregar metadatos de autor y publicación de Article a plantillas de blog editorial',
      'Estructurar precio, moneda y disponibilidad de Stock de productos para feeds de comerciantes',
      'Declarar la identidad de marca Organization y la URL del logotipo en todo el sitio',
      'Insertar rutas de jerarquía BreadcrumbList en páginas de categoría y de herramientas',
    ],
    faqs: [
      {
        question: '¿Dónde debo colocar los datos estructurados JSON-LD en una página web?',
        answer:
          'Puede colocar <script type="application/ld+json"> dentro de <head> o dentro de <body>; colocarlo limpiamente en <head> es la práctica estándar.',
      },
      {
        question: '¿Por qué el generador escapa "<" como "\\u003c" en la salida JSON?',
        answer:
          'Si la respuesta de una FAQ contiene "</script>", los navegadores terminan el bloque de script HTML antes de tiempo, a menos que "<" se escape como "\\u003c", lo que sigue siendo JSON 100% válido.',
      },
      {
        question: '¿Agregar marcado Schema garantiza fragmentos enriquecidos en Google?',
        answer:
          'No. Los datos estructurados válidos hacen que las páginas sean elegibles para funciones de búsqueda mejoradas, mientras que los motores de búsqueda deciden la elegibilidad de visualización según la calidad general de la página y las directrices.',
      },
      {
        question: '¿El Generador de Datos Estructurados es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que su contenido nunca se sube a un servidor.',
      },
      {
        question: '¿Qué tipos de Schema.org admite el Generador de Datos Estructurados?',
        answer:
          'Admite Article, FAQPage, Product, Organization y BreadcrumbList, que cubren los casos de uso de resultados enriquecidos más comunes.',
      },
      {
        question: '¿Cuál es la diferencia entre JSON-LD y Microdata?',
        answer:
          'JSON-LD es un bloque <script> separado que se pega en su página, mientras que Microdata agrega atributos directamente a sus elementos HTML visibles.',
      },
      {
        question: '¿Cómo agrego el JSON-LD generado a mi sitio web?',
        answer:
          'Copie el bloque completo <script type="application/ld+json"> y péguelo en el <head> de la página correspondiente.',
      },
      {
        question: '¿Cómo pruebo mi marcado de esquema después de generarlo?',
        answer:
          'Pegue la URL de la página o el código en la Prueba de resultados enriquecidos o en el validador de Schema.org para revisar errores y mejoras elegibles.',
      },
      {
        question: '¿Puedo combinar varios tipos de esquema en una página?',
        answer:
          'Sí. Una sola página puede llevar marcado Article, BreadcrumbList y FAQPage juntos como bloques JSON-LD separados.',
      },
      {
        question: '¿Qué es el esquema FAQPage y cuándo debo usarlo?',
        answer:
          'Úselo en páginas que muestran una lista visible de preguntas y respuestas, como páginas de ayuda, para que los motores de búsqueda puedan mostrarlas como resultados expandibles.',
      },
      {
        question: '¿Qué campos de esquema Product admite el generador?',
        answer:
          'Cubre el nombre del producto, el precio, la moneda y la disponibilidad, que son los campos principales que usan los motores de búsqueda para los resultados de compras.',
      },
      {
        question: '¿Para qué se usa el esquema BreadcrumbList?',
        answer:
          'Describe la jerarquía de navegación de una página, como Inicio > Guías > Tema, para que los motores de búsqueda puedan mostrar rutas de navegación en los resultados.',
      },
      {
        question: '¿Para qué se usa el esquema Organization?',
        answer:
          'Declara la identidad de su marca, incluidos el nombre, el logotipo y el sitio web oficial, para que los motores de búsqueda puedan mostrar un panel de conocimiento coherente.',
      },
      {
        question: '¿El Generador de Datos Estructurados sube mi contenido a algún lugar?',
        answer:
          'No. Todo el marcado se genera localmente en su navegador y nada de lo que ingresa sale de su dispositivo.',
      },
      {
        question: '¿Puedo exportar el esquema como un archivo .jsonld?',
        answer:
          'Sí. El botón de exportación descarga un archivo .jsonld independiente que puede almacenar, versionar o entregar a un desarrollador.',
      },
      {
        question: '¿Qué pasa si mi JSON-LD tiene un error de sintaxis?',
        answer:
          'Todo el bloque puede ser ignorado por los motores de búsqueda, así que siempre valide la salida con la Prueba de resultados enriquecidos antes de publicar.',
      },
      {
        question: '¿Puedo usar el Generador de Datos Estructurados para una página de receta o evento?',
        answer:
          'El generador cubre solo cinco tipos, así que las páginas de Recipe y Event necesitan JSON-LD escrito a mano, que puede validar con las mismas herramientas.',
      },
      {
        question: '¿Las respuestas de FAQ en el esquema deben coincidir con el texto visible de la página?',
        answer:
          'Sí. Google exige que los datos estructurados coincidan con el contenido que los usuarios realmente pueden ver en la página, o el marcado puede ser ignorado.',
      },
      {
        question: '¿Puedo editar el JSON-LD generado a mano?',
        answer:
          'Sí. Es JSON estándar, así que puede agregar o cambiar campos en cualquier editor y volver a validar el resultado antes de publicar.',
      },
      {
        question: '¿El Generador de Datos Estructurados funciona sin conexión?',
        answer:
          'Sí. Funciona por completo en su navegador sin subir nada, por lo que puede crear marcado de esquema sin conexión a internet una vez cargada la página.',
      },
    ],
  },
  'url-slug-generator': {
    instructions: [
      {
        title: 'Ingrese titulares o nombres de página',
        description:
          'Pegue uno o varios títulos (uno por línea) en el área de texto Titulares de página.',
      },
      {
        title: 'Configure las reglas de formato de slug',
        description:
          'Ingrese su Dominio base, elija guion (-) o guion bajo (_), configure la Longitud máxima del slug y active las opciones de palabras vacías o barra final.',
      },
      {
        title: 'Revise los slugs generados',
        description:
          'Revise la tabla de resultados para comprobar la transliteración de acentos, la eliminación de palabras vacías y dónde se cortaron los slugs largos en límites de palabra.',
      },
      {
        title: 'Ajuste la longitud o la configuración de palabras vacías',
        description:
          'Si un slug pierde su significado o se corta de forma incómoda, aumente la longitud máxima del slug o desactive la eliminación de palabras vacías y vuelva a generar.',
      },
      {
        title: 'Copie slugs individuales o listas por lotes',
        description:
          'Copie slugs individuales desde la tabla o exporte todos los slugs o las URL completas con un clic.',
      },
      {
        title: 'Nunca cambie el nombre de un slug en vivo sin una redirección',
        description:
          'Si cambia un slug en una página ya indexada, agregue una redirección 301 desde la URL antigua para que los enlaces y el posicionamiento pasen a la nueva.',
      },
    ],
    examples: [
      {
        title: 'Recortar palabras vacías y diacríticos de un titular',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'Translitera é → e, expande & → and, elimina "in" y une los tokens en minúsculas con guiones.',
      },
      {
        title: 'Convertir por lotes un calendario editorial completo',
        input: '5 titulares pegados, uno por línea · Longitud máxima: 60',
        output: 'Tabla con 5 slugs limpios y URL completas con el dominio base.',
        explanation: 'El procesamiento por lotes convierte todo el calendario editorial en una sola tabla lista para copiar.',
      },
    ],
    benefits: [
      'Procesa por lotes decenas de títulos de calendario editorial simultáneamente',
      'Trunca los slugs demasiado largos en límites de guion/palabra en lugar de a mitad de palabra',
      'Preserva el significado principal manteniendo intactos los slugs cortos aunque la eliminación de palabras vacías esté activada',
      'Sigue las recomendaciones de estructura de URL de Google (guiones ASCII UTF-8 en lugar de guiones bajos)',
    ],
    useCases: [
      'Planificar estructuras de URL limpias antes de lanzar categorías de blog o colecciones de CMS',
      'Limpiar títulos de productos internacionales con acentos en slugs seguros en ASCII',
      'Auditar enlaces permanentes de CMS demasiado largos hasta rutas nítidas de 4–6 palabras',
      'Preparar listas de objetivos canónicos para alimentar el Generador de Sitemap XML',
    ],
    faqs: [
      {
        question: '¿Los slugs URL SEO deben usar guiones (-) o guiones bajos (_)?',
        answer:
          'Google recomienda guiones (-) como separadores de palabras en las URL porque los analizadores de búsqueda tratan los guiones como espacios, mientras que los guiones bajos unen las palabras adyacentes.',
      },
      {
        question: '¿Eliminar palabras vacías daña la legibilidad?',
        answer:
          'Eliminar palabras cortas de relleno como "a", "the" u "of" hace que los slugs de blog muy largos sean más contundentes. Mantenga las palabras vacías si eliminarlas altera el significado principal (por ejemplo, "how to").',
      },
      {
        question: '¿Debo cambiar los slugs de URL en vivo ya indexadas?',
        answer:
          'Solo si implementa redirecciones 301 permanentes desde el slug antiguo al nuevo (usando nuestro Generador de Canónicos y Redirecciones 301) para que los enlaces y el posicionamiento se transfieran limpiamente.',
      },
      {
        question: '¿El Generador de Slugs URL es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro y sin límites en la cantidad de titulares que convierte en una sesión.',
      },
      {
        question: '¿Puedo generar slugs para muchos titulares a la vez?',
        answer:
          'Sí. Pegue un titular por línea y la herramienta convierte todo el lote en una sola tabla, para que pueda crear slugs para todo un calendario editorial de una vez.',
      },
      {
        question: '¿Cómo se manejan los caracteres acentuados en los slugs?',
        answer:
          'Los diacríticos se transliteran a ASCII simple: é se convierte en e, ü en u, ñ en n, para que las URL se mantengan legibles y seguras en navegadores y servidores.',
      },
      {
        question: '¿Qué pasa con símbolos como & y @ en un slug?',
        answer:
          'El ampersand (&) se expande a "and" y la mayoría de los demás signos de puntuación se eliminan, porque los símbolos en las URL pueden romper enlaces o verse desordenados al compartirlos.',
      },
      {
        question: '¿Qué son las palabras vacías y por qué las eliminaría?',
        answer:
          'Las palabras vacías son palabras cortas de relleno como "a", "the", "of" e "in". Eliminarlas acorta los slugs largos de blog sin cambiar el significado principal.',
      },
      {
        question: '¿Puedo mantener las palabras vacías en mis slugs?',
        answer:
          'Sí. Desactive el interruptor de eliminación de palabras vacías y el generador mantiene cada palabra de su titular, incluidas las palabras cortas de relleno.',
      },
      {
        question: '¿Cuál es la longitud ideal para un slug SEO?',
        answer:
          'Apunte a 3 a 6 palabras significativas. Use la configuración de Longitud máxima del slug para mantener los slugs cortos, y la herramienta corta en límites de palabra para que las palabras nunca se partan a la mitad.',
      },
      {
        question: '¿Los slugs URL deben estar en minúsculas?',
        answer:
          'Sí. Los slugs en minúsculas evitan problemas de contenido duplicado, porque algunos servidores tratan /Blog-Post y /blog-post como páginas diferentes.',
      },
      {
        question: '¿Puedo usar guiones bajos en lugar de guiones en los slugs?',
        answer:
          'Puede elegir guiones bajos en la configuración, pero se recomiendan los guiones porque los motores de búsqueda los tratan como separadores de palabras y los guiones bajos como uniones.',
      },
      {
        question: '¿Mis titulares se suben a algún lugar?',
        answer:
          'No. El Generador de Slugs URL funciona por completo en su navegador, por lo que sus titulares nunca salen de su dispositivo.',
      },
      {
        question: '¿Cómo veo la vista previa de la URL completa con mi dominio?',
        answer:
          'Ingrese su dominio en el campo Dominio base y la tabla de resultados muestra cada slug como una URL completa que puede copiar.',
      },
      {
        question: '¿Mis slugs deben terminar con una barra final?',
        answer:
          'Es opcional, pero sea coherente: use el interruptor de barra final para que coincida con el estilo de URL que su sitio ya usa, para no crear versiones duplicadas.',
      },
      {
        question: '¿Puedo usar esta herramienta para páginas de productos y categorías?',
        answer:
          'Sí. Funciona para cualquier nombre de página: títulos de productos, nombres de categorías, páginas de destino y encabezados de documentación se convierten de la misma manera.',
      },
      {
        question: '¿Por qué mi slug se cortó más corto que la longitud máxima que configuré?',
        answer:
          'La herramienta trunca en el guion más cercano antes del límite en lugar de cortar a mitad de palabra, por lo que un slug puede terminar unos caracteres más corto que el máximo.',
      },
      {
        question: '¿Qué pasa con los titulares escritos en escrituras no latinas?',
        answer:
          'Solo se transliteran los diacríticos latinos; los caracteres de otras escrituras se eliminan, por lo que un titular escrito por completo en otra escritura puede producir un slug muy corto. Agregue una versión latina de las palabras clave para obtener el mejor resultado.',
      },
      {
        question: '¿Puedo exportar todos mis slugs a la vez?',
        answer:
          'Sí. Use los botones de copia masiva para copiar todos los slugs, o todas las URL completas, con un clic en lugar de copiarlos uno por uno.',
      },
      {
        question: '¿Cuál es la diferencia entre un slug y un enlace permanente?',
        answer:
          'El slug es la parte final legible de una URL, como "best-cafe-tools", mientras que el enlace permanente es la URL completa, incluido el dominio y las carpetas. Para una conversión rápida de texto para desarrolladores con separadores de guion bajo, consulta Convertidor de Texto a Slug.',
      },
    ],
  },
  'keyword-density-checker': {
    instructions: [
      {
        title: 'Pegue el borrador del artículo o el HTML',
        description:
          'Inserte texto plano o HTML sin procesar (mantenga activada la opción Eliminar etiquetas HTML para ignorar etiquetas de marcado y bloques de script/style).',
      },
      {
        title: 'Ingrese la frase objetivo y el tamaño de n-grama',
        description:
          'Especifique una Palabra clave/frase objetivo opcional y alterne entre el análisis de frases de 1 palabra, 2 palabras y 3 palabras.',
      },
      {
        title: 'Revise la tabla de frecuencias',
        description:
          'Revise los términos principales y sus porcentajes (%) para confirmar el enfoque temático y recortar la repetición de frases poco natural.',
      },
      {
        title: 'Revise el conteo de palabras, el tiempo de lectura y el vocabulario',
        description:
          'Use el total de palabras, el porcentaje de palabras únicas y el tiempo de lectura para juzgar si el borrador es demasiado corto, demasiado largo o demasiado repetitivo.',
      },
      {
        title: 'Reescriba las frases repetidas con naturalidad',
        description:
          'Cuando la misma frase de 2 o 3 palabras domine la tabla, varíela con sinónimos y pronombres en lugar de eliminar por completo su palabra clave temática.',
      },
      {
        title: 'Corrija conteos extraños antes de confiar en los resultados',
        description:
          'Si los números se ven mal, asegúrese de que Eliminar etiquetas HTML esté activado y de que no se hayan pegado menús de navegación, bloques de código o pies de página junto con el texto.',
      },
    ],
    examples: [
      {
        title: 'Detectar repetición de frases no intencional en un borrador de 500 palabras',
        input: 'Borrador de artículo + Objetivo: "technical seo" + Frases de 2 palabras',
        output: 'Clasifica los bigramas principales ("technical seo", "meta descriptions", "canonical tags") con su porcentaje %.',
        explanation: 'Resalta tanto la alineación con el tema principal como la frase repetitiva que puede variar con naturalidad.',
      },
      {
        title: 'Revisar si un borrador corto tiene datos suficientes',
        input: 'Borrador de 150 palabras + Objetivo: "compresor de imagenes"',
        output: 'Advertencia de muestra pequeña: los porcentajes son ruidosos con menos de 300 palabras.',
        explanation: 'Los textos cortos producen porcentajes inestables, así que trate los resultados con cautela.',
      },
    ],
    benefits: [
      'Analiza frases de varias palabras (bigramas y trigramas), no solo palabras individuales',
      'Elimina de forma segura <script>, <style> y etiquetas HTML antes de contar el texto',
      'Incluye orientación honesta que desaconseja el relleno mecánico de palabras clave',
      'Mantiene los borradores no publicados y los informes de clientes estrictamente dentro de la memoria del navegador',
    ],
    useCases: [
      'Editar guías extensas para asegurar que los temas principales aparezcan claramente sin relleno incómodo',
      'Auditar borradores sin competencia para lograr equilibrio en el vocabulario temático',
      'Revisar el texto de páginas de destino limpio de HTML exportado',
      'Revisar el tiempo promedio de lectura junto con el Contador de Palabras y el Verificador de Legibilidad',
    ],
    faqs: [
      {
        question: '¿Existe un porcentaje ideal de densidad de palabras clave para Google?',
        answer:
          'No. Google afirma explícitamente que no existe un umbral fijo de densidad de palabras clave. Escriba con naturalidad para los lectores y use las auditorías de densidad solo para revisar la cobertura temática y evitar repeticiones poco naturales.',
      },
      {
        question: '¿Cómo maneja Eliminar etiquetas HTML los elementos <script> y <style>?',
        answer:
          'Elimina bloques completos de <script> y <style> antes de quitar las etiquetas HTML restantes, para que los tokens de JavaScript o CSS nunca contaminen las estadísticas de palabras.',
      },
      {
        question: '¿Puedo analizar una URL en vivo de la competencia escribiendo un dominio aquí?',
        answer:
          'No. Pegue el texto o el código fuente HTML directamente: las apps del navegador no pueden extraer sitios web de terceros de otros orígenes sin proxies de servidor.',
      },
      {
        question: '¿El Verificador de Densidad de Palabras Clave es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede analizar tantos borradores como quiera.',
      },
      {
        question: '¿Qué es exactamente la densidad de palabras clave?',
        answer:
          'La densidad de palabras clave es la frecuencia con la que aparece una palabra o frase como porcentaje del total de palabras de un texto. Una frase usada 5 veces en 500 palabras tiene una densidad del 1%. Para tablas completas de frecuencia con exportación CSV, consulta Contador de Frecuencia de Palabras.',
      },
      {
        question: '¿Qué cuenta como relleno de palabras clave?',
        answer:
          'El relleno de palabras clave es repetir una frase con una frecuencia poco natural solo para posicionar mejor. Se lee mal para los visitantes y puede dañar el posicionamiento, así que use esta herramienta para detectar repeticiones, no para alcanzar un número objetivo.',
      },
      {
        question: '¿Qué son los n-gramas y por qué revisar frases de 2 y 3 palabras?',
        answer:
          'Los n-gramas son secuencias de n palabras: los bigramas son frases de 2 palabras y los trigramas son frases de 3 palabras. Revisarlos revela frases repetidas que los conteos de palabras individuales pasan por alto por completo.',
      },
      {
        question: '¿Cuántas palabras necesito para una verificación de densidad significativa?',
        answer:
          'Los textos cortos producen porcentajes ruidosos, así que apunte a al menos 300 palabras para obtener resultados estables. Los fragmentos muy cortos aún pueden mostrar conteos brutos, pero trate los porcentajes con cautela.',
      },
      {
        question: '¿La herramienta cuenta las palabras dentro de encabezados y listas?',
        answer:
          'Sí. Todo el texto visible que pega se cuenta, incluidos encabezados, listas con viñetas y pies de foto, porque los motores de búsqueda también ven ese contenido.',
      },
      {
        question: '¿Por qué mi frase objetivo muestra 0%?',
        answer:
          'Revise la ortografía y redacción exactas: los plurales, guiones y el orden de las palabras deben coincidir. También asegúrese de que Eliminar etiquetas HTML esté activado si pegó HTML.',
      },
      {
        question: '¿Puedo revisar la densidad de varias palabras clave a la vez?',
        answer:
          'Cada ejecución rastrea una frase objetivo. Para revisar otra palabra clave, cambie la frase objetivo y ejecute el análisis de nuevo sobre el mismo texto.',
      },
      {
        question: '¿El verificador cuenta palabras vacías como "the" y "and"?',
        answer:
          'Sí, aparecen en la tabla de frecuencia de 1 palabra, pero concéntrese en las palabras y frases temáticas: las palabras vacías son naturalmente frecuentes en todos los textos y dicen poco sobre SEO.',
      },
      {
        question: '¿Mi borrador se sube a algún lugar?',
        answer:
          'No. El Verificador de Densidad de Palabras Clave funciona por completo en su navegador, por lo que los borradores no publicados y el texto de clientes nunca salen de su dispositivo.',
      },
      {
        question: '¿Cuál es un buen tiempo de lectura para una entrada de blog?',
        answer:
          'Depende del tema, pero la herramienta muestra el tiempo de lectura para que pueda juzgar si una publicación coincide con las expectativas de los lectores: una guía rápida puede ser de 3 minutos, un tutorial profundo de 10 o más.',
      },
      {
        question: '¿Puedo pegar HTML copiado de mi CMS?',
        answer:
          'Sí. Pegue el HTML sin procesar y mantenga activada la opción Eliminar etiquetas HTML para que las etiquetas, scripts y estilos se eliminen antes de contar las palabras.',
      },
      {
        question: '¿El verificador funciona con texto en otros idiomas?',
        answer:
          'Sí. El conteo de palabras funciona para cualquier idioma que separe las palabras con espacios, y las tablas de n-gramas listarán las frases más frecuentes en ese idioma.',
      },
      {
        question: '¿Cómo bajo la densidad sin eliminar mi tema?',
        answer:
          'Use sinónimos, pronombres y redacción variada en lugar de repetir la palabra clave exacta. El tema se mantiene claro mientras el texto se lee con naturalidad.',
      },
      {
        question: '¿Qué significa la diversidad de vocabulario?',
        answer:
          'Es el porcentaje de palabras únicas comparado con el total de palabras. Un porcentaje más alto suele significar una escritura más rica y variada; un porcentaje muy bajo puede indicar texto repetitivo.',
      },
      {
        question: '¿Puedo analizar un documento PDF o Word?',
        answer:
          'La herramienta acepta texto pegado, así que copie el texto de su archivo PDF o Word y péguelo aquí: el formato no es necesario para una verificación de densidad.',
      },
      {
        question: '¿Por qué cambian los porcentajes cuando cambio el tamaño de n-grama?',
        answer:
          'Cada tamaño de n-grama tiene su propio total: un texto de 500 palabras tiene 500 palabras individuales pero solo 499 frases de dos palabras, por lo que el mismo conteo de frases produce un porcentaje ligeramente diferente.',
      },
    ],
  },
  'canonical-hreflang-generator': {
    instructions: [
      {
        title: 'Elija Hreflang o Redirecciones 301',
        description:
          'Seleccione Etiquetas canónicas y Hreflang para SEO internacional o Generador de reglas de redirección 301 para migraciones de URL.',
      },
      {
        title: 'Ingrese configuraciones regionales o pares de migración de URL',
        description:
          'Agregue códigos ISO de idioma-región (`en-US`, `en-GB`, `x-default`) y URL, o pegue pares de rutas antiguas a nuevas.',
      },
      {
        title: 'Revise las etiquetas o reglas generadas',
        description:
          'Revise cada código de configuración regional, URL y par de redirección en busca de errores tipográficos antes de copiar: un código incorrecto puede romper todo el conjunto hreflang.',
      },
      {
        title: 'Agregue x-default y canónicos autorreferenciales',
        description:
          'Incluya una configuración regional de reserva x-default y asegúrese de que cada página se liste a sí misma como su propio canónico.',
      },
      {
        title: 'Copie la configuración lista para la plataforma',
        description:
          'Copie directamente las etiquetas HTML `<link>`, las líneas XML `<xhtml:link>` o las reglas `_redirects` / `.htaccess` / `nginx`.',
      },
      {
        title: 'Valide después de desplegar',
        description:
          'Una vez en vivo, vea el código fuente de la página o use un validador de hreflang para confirmar que las etiquetas están presentes, son recíprocas y apuntan a las URL correctas.',
      },
    ],
    examples: [
      {
        title: 'Regla de migración 301 de Cloudflare Pages',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: 'Produce la sintaxis exacta de _redirects de Cloudflare Pages con el estado permanente 301 explícito.',
      },
      {
        title: 'Conjunto hreflang recíproco en inglés y español',
        input: 'en-US: /en/page · es: /es/pagina · x-default: /en/page',
        output: '<link rel="alternate" hreflang="en-US" href="...">, hreflang="es", hreflang="x-default"',
        explanation: 'Cada versión apunta a las demás y a sí misma, con x-default como reserva internacional.',
      },
    ],
    benefits: [
      'Produce formatos HTML <link rel="alternate"> y XML <xhtml:link> de forma coherente',
      'Admite sintaxis de _redirects de Cloudflare Pages, .htaccess de Apache y servidor Nginx',
      'Fomenta canónicos autorreferenciales y configuraciones regionales de reserva x-default',
      'Normaliza automáticamente las barras iniciales en las rutas de origen de redirección',
    ],
    useCases: [
      'Lanzar páginas regionales localizadas en inglés/español/francés limpiamente sin penalizaciones por duplicados',
      'Preservar el valor de los enlaces al cambiar el nombre de slugs durante un rediseño',
      'Generar archivos de despliegue /public/_redirects de Cloudflare Pages en segundos',
      'Verificar conjuntos hreflang recíprocos antes de enviar sitemaps internacionales',
    ],
    faqs: [
      {
        question: '¿Las etiquetas hreflang deben ser bidireccionales o recíprocas?',
        answer:
          'Sí. Si la Página A enlaza a la Página B con hreflang="es", la Página B debe enlazar de vuelta a la Página A con hreflang="en" (y a sí misma); de lo contrario, los motores de búsqueda ignoran la anotación.',
      },
      {
        question: '¿Cuándo debo usar x-default en hreflang?',
        answer:
          'Use hreflang="x-default" para designar su página internacional de reserva para visitantes cuyo idioma o región del navegador no coincida con ninguna alternativa específica.',
      },
      {
        question: '¿Las URL canónicas deben apuntar entre idiomas (por ejemplo, es → en)?',
        answer:
          'No. Cada versión de idioma traducida debe declarar un canónico autorreferencial que apunte a sí misma, mientras que hreflang conecta los equivalentes localizados.',
      },
      {
        question: '¿El Generador de Hreflang es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede generar tantos conjuntos hreflang y reglas de redirección como necesite.',
      },
      {
        question: '¿Qué es hreflang y por qué importa?',
        answer:
          'Hreflang es una anotación HTML o XML que indica a los motores de búsqueda qué versión de idioma y región de una página mostrar a cada visitante, para que los usuarios de inglés vean la página en inglés y los de español la vean en español.',
      },
      {
        question: '¿Qué formato deben usar los códigos de idioma-región?',
        answer:
          'Use códigos de idioma ISO con una región ISO opcional, como en, es, fr-CA o en-GB. El idioma va primero, luego un guion, luego la región en mayúsculas.',
      },
      {
        question: '¿Necesito hreflang si mi sitio tiene un solo idioma?',
        answer:
          'No. Hreflang solo es útil cuando el mismo contenido existe en más de un idioma o versión regional.',
      },
      {
        question: '¿Puedo poner hreflang en mi sitemap XML en lugar de HTML?',
        answer:
          'Sí. La herramienta produce ambos formatos: etiquetas de enlace HTML para el head de su página y bloques xhtml:link para su sitemap XML. Elija un lugar y manténgalo coherente.',
      },
      {
        question: '¿Qué es un canónico autorreferencial?',
        answer:
          'Es una etiqueta canónica en una página que apunta a la página misma. Cada versión de una página debe incluir una, incluidas todas las versiones traducidas.',
      },
      {
        question: '¿Cuándo debo usar una redirección 301 en lugar de una etiqueta canónica?',
        answer:
          'Use una redirección 301 cuando una página se ha movido permanentemente a una URL nueva. Use una etiqueta canónica cuando dos páginas similares deben permanecer en vivo y quiere que los motores de búsqueda prefieran una de ellas.',
      },
      {
        question: '¿Cuál es la diferencia entre una redirección 301 y una 302?',
        answer:
          'Una 301 es permanente y transfiere la mayoría de las señales de posicionamiento a la URL nueva; una 302 es temporal e indica a los motores de búsqueda que la URL antigua puede volver, por lo que es la opción incorrecta para un cambio permanente.',
      },
      {
        question: '¿Cómo funcionan los _redirects de Cloudflare Pages?',
        answer:
          'Coloca un archivo _redirects en la carpeta pública de su sitio con una regla por línea — ruta antigua, ruta nueva y código de estado — y Cloudflare aplica las redirecciones cuando se despliega el sitio.',
      },
      {
        question: '¿Puedo redirigir toda una carpeta con una regla?',
        answer:
          'La herramienta produce una regla por par de URL. Para un cambio de toda una carpeta, use una regla comodín o splat en Cloudflare Pages o Apache, o genere aquí la lista completa de pares.',
      },
      {
        question: '¿Las redirecciones 301 transfieren señales de posicionamiento a la página nueva?',
        answer:
          'Sí. Una redirección 301 transfiere la mayoría de las señales de posicionamiento y el valor de enlaces de la página antigua a la URL nueva, por lo que es la opción estándar para cambios permanentes.',
      },
      {
        question: '¿La URL antigua debe permanecer en mi sitemap después de una redirección 301?',
        answer:
          'No. Elimine las URL redirigidas de su sitemap y liste solo las URL de destino nuevas, para que los motores de búsqueda rastreen las páginas actuales.',
      },
      {
        question: '¿Cuánto tiempo debo mantener activa una redirección 301?',
        answer:
          'Manténgala al menos un año, e idealmente de forma permanente. Eliminarla demasiado pronto puede romper enlaces antiguos y marcadores que todavía apuntan a la URL antigua.',
      },
      {
        question: '¿Hreflang puede solucionar problemas de contenido duplicado?',
        answer:
          'No por sí solo. Hreflang indica a los motores de búsqueda qué versión mostrar a cada público, pero las páginas verdaderamente duplicadas en el mismo idioma aún necesitan etiquetas canónicas o consolidación.',
      },
      {
        question: '¿Qué pasa si uso un código de configuración regional incorrecto?',
        answer:
          'Los motores de búsqueda ignoran los códigos no válidos, así que un error tipográfico como en-UK en lugar de en-GB rompe silenciosamente esa versión de idioma. Revise cada código antes de desplegar.',
      },
      {
        question: '¿Mi lista de URL se sube a algún lugar?',
        answer:
          'No. El Constructor de Canónicos, Hreflang y Redirecciones 301 funciona por completo en su navegador, por lo que sus URL y planes de migración nunca salen de su dispositivo.',
      },
      {
        question: '¿Puedo generar etiquetas hreflang para más de dos idiomas?',
        answer:
          'Sí. Agregue tantas filas de configuración regional como admita su sitio: la herramienta crea un conjunto recíproco completo que cubre cada versión de idioma que ingrese.',
      },
    ],
  },
  'on-page-seo-checker': {
    instructions: [
      {
        title: 'Copie el código fuente HTML de su página',
        description:
          'Abra Ver código fuente de la página (o inspeccione el dist/index.html compilado) y pegue el HTML en el área de texto de código fuente.',
      },
      {
        title: 'Revise la puntuación de auditoría DOM y las listas de verificación',
        description:
          'Inspeccione los indicadores de aprobado/advertencia para título, meta descripción, un solo H1, enlace canónico, texto alt y datos estructurados.',
      },
      {
        title: 'Verifique el esquema de encabezados y los enlaces',
        description:
          'Desplácese por el árbol H1–H4 extraído y el conteo de enlaces internos/externos para corregir niveles omitidos o etiquetas faltantes.',
      },
      {
        title: 'Corrija las advertencias en orden de prioridad',
        description:
          'Empiece con un título faltante o demasiado largo y una meta descripción, luego etiquetas H1 duplicadas, luego texto alt faltante en imágenes.',
      },
      {
        title: 'Vuelva a pegar y auditar después de las correcciones',
        description:
          'Pegue el HTML actualizado y ejecute la auditoría de nuevo para confirmar que la puntuación mejoró y que no aparecieron advertencias nuevas.',
      },
      {
        title: 'Audite correctamente las páginas renderizadas con JavaScript',
        description:
          'Si faltan meta etiquetas en el código fuente sin procesar de una página React o SPA, copie el outerHTML en vivo desde el panel Elementos de DevTools de su navegador.',
      },
    ],
    examples: [
      {
        title: 'Auditar una exportación HTML estática renderizada',
        input: 'Documento <html> completo con <title>, <meta description>, H1/H2 y JSON-LD',
        output: '6/6 verificaciones aprobadas · Esquema H1–H4 + desglose de enlaces internos/externos',
        explanation: 'Usa el DOMParser nativo del navegador limpiamente sin ejecutar scripts no confiables.',
      },
      {
        title: 'Detectar un H1 duplicado en una plantilla de blog',
        input: 'HTML de una plantilla de CMS con dos etiquetas <h1>',
        output: 'Advertencia: se encontraron 2 etiquetas H1 · Puntuación reducida hasta corregirla.',
        explanation: 'El esquema de encabezados extraído muestra ambas etiquetas H1 para que pueda eliminar una.',
      },
    ],
    benefits: [
      'Usa DOMParser nativo (nunca ejecuta etiquetas <script> pegadas ni cargas externas)',
      'Es honesto sobre los límites CORS del navegador: nunca finge extraer URL remotas bloqueadas',
      'Extrae el esquema completo del documento H1–H4 limpiamente',
      'Verifica la presencia de Open Graph y JSON-LD junto con las etiquetas SEO clásicas',
    ],
    useCases: [
      'Control de calidad previo al despliegue en compilaciones de pruebas y exportaciones HTML estáticas',
      'Revisar plantillas de blog de CMS por etiquetas <h1> duplicadas accidentales o atributos alt vacíos',
      'Verificar que las páginas renderizadas en el servidor emitan etiquetas canónicas y meta limpiamente',
      'Inspeccionar páginas HTML de localhost o con acceso por correo electrónico que los rastreadores en la nube no pueden alcanzar',
    ],
    faqs: [
      {
        question: '¿Por qué esta herramienta me pide pegar el código fuente HTML en lugar de escribir una URL de sitio web?',
        answer:
          'Los navegadores aplican políticas de uso compartido de recursos entre orígenes (CORS) que impiden que el JavaScript del lado del cliente lea sitios web externos arbitrarios, y las URL de localhost o de pruebas privadas son inalcanzables desde servidores públicos. Pegar Ver código fuente de la página hace que la auditoría local sea 100% confiable y privada.',
      },
      {
        question: '¿Las SPA renderizadas con JavaScript se auditan correctamente con el código fuente sin procesar?',
        answer:
          'Para las SPA renderizadas en el cliente donde React inyecta meta etiquetas en tiempo de ejecución, copie el outerHTML en vivo desde el panel Elementos de DevTools de Chrome/Firefox en lugar del código fuente sin procesar.',
      },
      {
        question: '¿DOMParser ejecuta scripts dentro del HTML pegado?',
        answer:
          'No. DOMParser.parseFromString(..., "text/html") construye un árbol DOM inerte estrictamente para inspección, sin ejecutar JavaScript ni cargar imágenes externas.',
      },
      {
        question: '¿El Verificador de SEO On-Page es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede auditar tantas páginas como quiera.',
      },
      {
        question: '¿Cuál es la longitud ideal de la etiqueta de título?',
        answer:
          'Apunte a 50 a 60 caracteres. Los títulos más largos se cortan en los resultados de búsqueda, mientras que los títulos muy cortos desperdician la oportunidad de describir la página claramente.',
      },
      {
        question: '¿Cuál es la longitud ideal de la meta descripción?',
        answer:
          'Apunte a 150 a 160 caracteres. Esa longitud suele mostrarse completa en los resultados de búsqueda sin truncarse.',
      },
      {
        question: '¿Cuántas etiquetas H1 debe tener una página?',
        answer:
          'Una. Un solo H1 indica el tema principal de la página; los subtemas van en encabezados H2 y H3 debajo de él.',
      },
      {
        question: '¿Puedo omitir niveles de encabezado, por ejemplo H1 y luego H3?',
        answer:
          'Evítele. Mantenga la jerarquía en orden — H1, luego H2, luego H3 — para que los motores de búsqueda y los lectores de pantalla puedan seguir la estructura de la página.',
      },
      {
        question: '¿Qué pasa si mi página no tiene etiqueta canónica?',
        answer:
          'Los motores de búsqueda elegirán ellos mismos una URL canónica, que puede no ser la versión que usted prefiere. Agregar una explícitamente elimina las conjeturas.',
      },
      {
        question: '¿Por qué importa el texto alt de las imágenes para SEO?',
        answer:
          'El texto alt describe las imágenes a los motores de búsqueda y lectores de pantalla, ayuda a que las imágenes posicionen en la búsqueda de imágenes y mantiene la página usable cuando una imagen no carga.',
      },
      {
        question: '¿Qué es JSON-LD y por qué debo revisarlo?',
        answer:
          'JSON-LD es un bloque de datos estructurados que describe el contenido de su página a los motores de búsqueda, impulsando resultados enriquecidos como calificaciones, FAQ y rutas de navegación. El verificador confirma que está presente.',
      },
      {
        question: '¿El verificador audita las etiquetas Open Graph?',
        answer:
          'Sí. Informa si están presentes etiquetas Open Graph como og:title y og:image, para que su página se vea bien al compartirla en redes sociales.',
      },
      {
        question: '¿Puedo auditar una página que requiere inicio de sesión?',
        answer:
          'Sí. Como usted pega el HTML, puede auditar páginas privadas, de pruebas y de localhost que los rastreadores públicos no pueden alcanzar.',
      },
      {
        question: '¿Mi HTML se sube a algún lugar?',
        answer:
          'No. El Verificador de SEO On-Page funciona por completo en su navegador, por lo que el código fuente de su página nunca sale de su dispositivo.',
      },
      {
        question: 'Mi puntuación de auditoría es baja: ¿qué debo corregir primero?',
        answer:
          'Corrija los problemas en este orden: un título faltante o demasiado largo, una meta descripción faltante, etiquetas H1 duplicadas y luego texto alt faltante en imágenes.',
      },
      {
        question: '¿El verificador cuenta los enlaces internos y externos?',
        answer:
          'Sí. Cuenta los enlaces internos y externos por separado, para que pueda ver si una página enlaza lo suficiente hacia afuera y si la navegación interna está presente.',
      },
      {
        question: '¿Puedo auditar mi página principal y mis entradas de blog con la misma herramienta?',
        answer:
          'Sí. Pegue el código fuente HTML de cada página por separado y audítelas una a la vez: cada página obtiene su propia puntuación y lista de verificación.',
      },
      {
        question: '¿Por qué algunas verificaciones muestran advertencias en lugar de fallos?',
        answer:
          'Las advertencias señalan problemas de mejores prácticas que vale la pena corregir pero que no son errores críticos, como un título ligeramente largo o un nivel de encabezado omitido.',
      },
      {
        question: '¿Funciona para páginas de WordPress?',
        answer:
          'Sí. Abra Ver código fuente de la página en cualquier página de WordPress, copie el HTML y péguelo aquí: el verificador funciona con la salida de cualquier CMS.',
      },
      {
        question: '¿Con qué frecuencia debo ejecutar una auditoría de SEO on-page?',
        answer:
          'Ejecute una cada vez que cambie una plantilla, publique un nuevo tipo de página o después de un rediseño, y vuelva a auditar después de las correcciones para confirmar que la puntuación mejoró.',
      },
    ],
  },
  'robots-meta-tag-generator': {
    instructions: [
      {
        title: 'Elija las directivas de indexación y enlaces',
        description:
          'Configure index/noindex, follow/nofollow y restricciones opcionales como noarchive, nosnippet o noimageindex.',
      },
      {
        title: 'Ajuste los límites de fragmento y vista previa',
        description:
          'Configure max-snippet (-1 para ilimitado), max-image-preview (large para Google Discover) y max-video-preview.',
      },
      {
        title: 'Copie la etiqueta HTML o el encabezado HTTP',
        description:
          'Use la meta etiqueta HTML dentro de <head>, o despliegue el bloque de encabezado X-Robots-Tag para PDF y descargas que no son HTML.',
      },
      {
        title: 'Elija el formato de salida correcto',
        description:
          'Use la meta etiqueta HTML para páginas normales, X-Robots-Tag para PDF y otros archivos que no son HTML, y el bloque _headers para las reglas de ruta de Cloudflare.',
      },
      {
        title: 'Coloque la salida en el lugar correcto',
        description:
          'Ponga la meta etiqueta dentro del <head> de su página, o agregue las reglas de encabezado a la configuración de su servidor o al archivo _headers de Cloudflare, luego despliegue.',
      },
      {
        title: '¿La página todavía aparece en la búsqueda?',
        description:
          'Noindex solo funciona después de que los motores de búsqueda vuelvan a rastrear la página, lo que puede tardar días. Verifique que robots.txt no esté bloqueando el rastreo y luego confirme en Search Console.',
      },
    ],
    examples: [
      {
        title: 'Excluir descargas PDF privadas con _headers de Cloudflare Pages',
        input: 'noindex, nofollow · Ruta: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'El X-Robots-Tag HTTP funciona para PDF, imágenes y archivos que no son HTML y que no tienen elemento <head>.',
      },
      {
        title: 'Permitir vistas previas grandes de imagen para un artículo editorial',
        input: 'index, follow · max-image-preview: large',
        output: '<meta name="robots" content="index, follow, max-image-preview:large">',
        explanation: 'La vista previa de imagen grande es la recomendada por Google para páginas que apuntan a Google Discover.',
      },
    ],
    benefits: [
      'Produce simultáneamente <meta> HTML, X-Robots-Tag HTTP genérico y _headers de Cloudflare Pages',
      'Incluye los valores predeterminados de max-image-preview:large recomendados por Google Discover',
      'Evita combinaciones conflictivas automáticamente (desactiva los controles deslizantes de fragmento/imagen cuando nosnippet/noimageindex están activos)',
      'Hace sencilla la desindexación de PDF y recursos que no son HTML mediante encabezados HTTP',
    ],
    useCases: [
      'Evitar que páginas de agradecimiento, resultados de búsqueda interna o portales de miembros entren al índice de Google',
      'Desindexar folletos PDF alojados o recursos de libros blancos mediante encabezados X-Robots-Tag',
      'Habilitar max-image-preview:large para artículos editoriales dirigidos a Google Discover',
      'Agregar límites estrictos de noarchive o de longitud de fragmento en documentación de pago o sensible',
    ],
    faqs: [
      {
        question: '¿Cuándo debo usar X-Robots-Tag en lugar de <meta name="robots">?',
        answer:
          'Use encabezados HTTP X-Robots-Tag para archivos que no son HTML (como PDF, hojas de cálculo o imágenes) o cuando aplique reglas de indexación en toda una ruta de carpeta mediante reglas de CDN.',
      },
      {
        question: '¿Debo combinar Disallow de robots.txt con <meta name="robots" content="noindex">?',
        answer:
          '¡No! Si una URL está bloqueada en robots.txt, los bots de búsqueda no pueden rastrear la página para leer la etiqueta HTML <meta name="robots" content="noindex"> dentro de ella. Permita el rastreo si depende del noindex de meta.',
      },
      {
        question: '¿Qué significa max-snippet:-1?',
        answer:
          'Un valor de -1 permite que los motores de búsqueda elijan cualquier longitud de fragmento que consideren útil, mientras que 0 evita los fragmentos de texto y los enteros positivos (como 160) limitan la longitud de caracteres del fragmento.',
      },
      {
        question: '¿El Generador de Meta Etiquetas Robots es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede generar tantas etiquetas y reglas de encabezado como necesite.',
      },
      {
        question: '¿Qué hace noindex?',
        answer:
          'Noindex indica a los motores de búsqueda que no incluyan una página en los resultados de búsqueda. La página sigue en vivo y se puede visitar, pero no aparecerá en Google ni Bing.',
      },
      {
        question: '¿Qué hace nofollow?',
        answer:
          'Nofollow indica a los motores de búsqueda que no sigan los enlaces de una página ni transfieran señales de posicionamiento a través de ellos. Es útil para páginas con enlaces no confiables o de pago.',
      },
      {
        question: '¿Cuál es la diferencia entre robots.txt y una meta etiqueta robots?',
        answer:
          'Robots.txt bloquea el rastreo de una URL, mientras que una meta etiqueta robots controla si una página rastreada se indexa. Resuelven problemas diferentes y no deben combinarse sin cuidado.',
      },
      {
        question: '¿Cuánto tarda en funcionar noindex?',
        answer:
          'Solo surte efecto después de que los motores de búsqueda vuelvan a rastrear la página, lo que puede tardar días o semanas según la frecuencia con que se visite la página.',
      },
      {
        question: '¿Qué es max-image-preview:large?',
        answer:
          'Permite que los motores de búsqueda muestren vistas previas de imágenes grandes para su página, lo que Google recomienda para páginas dirigidas a Google Discover.',
      },
      {
        question: '¿Qué hace nosnippet?',
        answer:
          'Nosnippet evita que los motores de búsqueda muestren cualquier fragmento de texto de la página en los resultados de búsqueda, por lo que solo aparecen el título y la URL.',
      },
      {
        question: '¿Qué hace noarchive?',
        answer:
          'Noarchive impide que los motores de búsqueda ofrezcan una copia en caché de su página, lo que es útil para contenido sensible al tiempo o que cambia con frecuencia.',
      },
      {
        question: '¿Qué hace noimageindex?',
        answer:
          'Noimageindex indica a los motores de búsqueda que no indexen las imágenes de una página, mientras que la página en sí todavía puede aparecer en los resultados de búsqueda normales.',
      },
      {
        question: '¿Puedo aplicar noindex a un archivo PDF?',
        answer:
          'Sí. Los PDF no tienen head HTML, así que use el encabezado HTTP X-Robots-Tag: la herramienta genera el bloque de encabezado exacto para usted.',
      },
      {
        question: '¿Debo aplicar noindex a las páginas de agradecimiento y de pago?',
        answer:
          'Sí. Las páginas de agradecimiento, los pasos de pago, los resultados de búsqueda interna y las áreas de miembros generalmente no aportan valor de búsqueda y comúnmente se configuran como noindex.',
      },
      {
        question: '¿Puedo combinar noindex y nofollow en la misma página?',
        answer:
          'Sí. Controlan cosas diferentes — indexación y seguimiento de enlaces — y a menudo se usan juntos en páginas privadas o de utilidad.',
      },
      {
        question: '¿Qué es un archivo _headers de Cloudflare?',
        answer:
          'Es un archivo en la carpeta pública de su sitio que asigna rutas URL a encabezados de respuesta HTTP. La herramienta produce un bloque listo para pegar para cualquier ruta que elija.',
      },
      {
        question: '¿Las meta etiquetas robots funcionan en Bing y otros motores de búsqueda?',
        answer:
          'Sí. La mayoría de los motores de búsqueda importantes respetan las directivas estándar de robots, aunque algunos admiten solo un subconjunto: manténgase en las directivas comunes para la cobertura más amplia.',
      },
      {
        question: '¿Mi configuración se sube a algún lugar?',
        answer:
          'No. El Generador de Meta Etiquetas Robots funciona por completo en su navegador, por lo que su configuración nunca sale de su dispositivo.',
      },
      {
        question: '¿Qué pasa si elijo directivas en conflicto?',
        answer:
          'La herramienta evita combinaciones conflictivas automáticamente: por ejemplo, desactiva los controles deslizantes de fragmento y vista previa de imagen cuando nosnippet o noimageindex está activo.',
      },
      {
        question: '¿Debo usar noindex o simplemente eliminar la página?',
        answer:
          'Si una página debe desaparecer para siempre, elimínela y deje que devuelva un estado 404 o 410. Use noindex cuando la página debe permanecer en vivo pero no debe aparecer en los resultados de búsqueda.',
      },
    ],
  },
};
