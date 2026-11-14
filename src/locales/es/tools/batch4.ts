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
    instructions: [
      {
        title: 'Elige el formato del contenido',
        description:
          'Selecciona URL de sitio web, Texto, Red Wi-Fi, Enlace de correo o Número de teléfono en la parte superior.',
      },
      {
        title: 'Escribe tu contenido',
        description:
          'Escribe o pega tu URL, texto o datos de contacto. Para Wi-Fi, agrega el nombre de la red (SSID), el tipo de seguridad y la contraseña.',
      },
      {
        title: 'Personaliza la apariencia y la corrección de errores',
        description:
          'Ajusta el tamaño en píxeles, el margen de zona tranquila, los colores hexadecimales de primer plano y fondo, y el nivel de corrección de errores (L–H).',
      },
      {
        title: 'Revisa y prueba el código',
        description:
          'Consulta la vista previa en vivo y escaneala con la cámara de tu teléfono antes de descargarla para confirmar que abre el destino correcto.',
      },
      {
        title: 'Descarga PNG o SVG vectorial',
        description:
          'Exporta un PNG nítido para gráficos sociales o copia y descarga el archivo SVG escalable para materiales impresos.',
      },
      {
        title: 'Corrige un código que no escanea',
        description:
          'Aumenta el contraste del primer plano, agranda el código, sube el nivel de corrección de errores o amplía el margen de la zona tranquila, y vuelve a probar.',
      },
    ],
    examples: [
      {
        title: 'Código QR de Wi-Fi para invitados',
        input: 'SSID: GuestWiFi · Seguridad: WPA',
        output: 'WIFI:T:WPA;S:GuestWiFi;P:...;H:false;;',
        explanation:
          'Las cámaras de iOS y Android reconocen automáticamente los códigos QR Wi-Fi estándar para conectarse sin escribir la contraseña.',
      },
      {
        title: 'Código QR para un portafolio en una tarjeta',
        input: 'https://miportafolio.com',
        output: 'Código QR SVG listo para imprimir en tarjetas y folletos',
        explanation:
          'El formato SVG vectorial se mantiene nítido a cualquier tamaño de impresión, desde una tarjeta hasta un póster.',
      },
    ],
    benefits: [
      'Los códigos QR estáticos nunca vencen ni dirigen a los usuarios por redirecciones de rastreo de terceros',
      'Genera SVG vectorial sin pérdida junto con imágenes PNG de alta resolución',
      'Admite el formato QR de Wi-Fi WPA/WEP/abierta con escape correcto de caracteres especiales',
      'Mantiene las URLs privadas y las contraseñas Wi-Fi estrictamente en la memoria del navegador',
    ],
    useCases: [
      'Enlazar folletos, pósteres o tarjetas de presentación con páginas de destino etiquetadas con UTM',
      'Crear letreros con código QR de Wi-Fi para invitados en oficinas, estudios o eventos',
      'Agregar enlaces instantáneos de contacto o portafolio a presentaciones y empaques',
      'Exportar códigos QR SVG nítidos para herramientas de diseño de impresión de alta resolución',
    ],
    faqs: [
      {
        question: '¿Los códigos QR creados aquí vencen después de un período de prueba?',
        answer:
          'No. Son códigos QR estáticos cuyos datos se codifican directamente dentro del patrón en blanco y negro, así que funcionan para siempre sin depender de un servidor ni límites de escaneo.',
      },
      {
        question: '¿Qué nivel de corrección de errores debo elegir?',
        answer:
          'El nivel M (15 %) equilibra densidad compacta y fiabilidad para pantallas digitales o folletos limpios. Elige Q (25 %) o H (30 %) para adhesivos en exteriores o superficies impresas más ásperas.',
      },
      {
        question: '¿Por qué el contraste del primer plano debe mantenerse alto?',
        answer:
          'Las cámaras de los teléfonos dependen de un fuerte contraste de luminosidad entre los módulos oscuros y el fondo claro; mantén colores oscuros sobre fondos claros con al menos un margen de zona tranquila de 2 módulos.',
      },
      {
        question: '¿El Generador de códigos QR es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, sin marca de agua y sin límite de códigos QR que puedas crear o descargar.',
      },
      {
        question: '¿Necesito una cuenta para crear un código QR?',
        answer:
          'No. Todo se ejecuta localmente en tu navegador, así que puedes generar y descargar un código QR de inmediato.',
      },
      {
        question: '¿Qué tipos de contenido puedo codificar en un código QR?',
        answer:
          'Puedes codificar URLs de sitios web, texto, credenciales de red Wi-Fi, enlaces de correo y números de teléfono que abren el marcador al escanearlos.',
      },
      {
        question: '¿Puedo crear un código QR para mi contraseña Wi-Fi?',
        answer:
          'Sí. Elige el formato Red Wi-Fi, escribe el nombre de la red (SSID), el tipo de seguridad como WPA y la contraseña, y tus invitados podrán conectarse escaneando en lugar de escribir.',
      },
      {
        question: '¿Cuál es la diferencia entre las descargas PNG y SVG?',
        answer:
          'PNG es una imagen de mapa de bits de resolución fija, ideal para pantallas y publicaciones sociales, mientras que SVG es un archivo vectorial que escala a cualquier tamaño sin perder nitidez, ideal para imprimir.',
      },
      {
        question: '¿Mi código QR seguirá funcionando si lo imprimo pequeño?',
        answer:
          'Depende de cuántos datos contenga y de la calidad de impresión. Las URLs cortas se escanean bien en tamaños pequeños, mientras que los códigos densos necesitan imprimirse más grandes y con una zona tranquila despejada.',
      },
      {
        question: '¿Qué hace el nivel de corrección de errores?',
        answer:
          'La corrección de errores agrega redundancia para que el código siga escaneándose aunque parte de él esté rayado, sucio o cubierto. Los niveles altos resisten más daño, pero hacen el patrón más denso.',
      },
      {
        question: '¿Puedo cambiar los colores de mi código QR?',
        answer:
          'Sí, puedes definir colores hexadecimales personalizados de primer plano y fondo. Mantén los módulos oscuros sobre un fondo claro para que las cámaras de los teléfonos puedan leer el patrón.',
      },
      {
        question: '¿Qué es la zona tranquila y por qué importa?',
        answer:
          'La zona tranquila es el margen en blanco alrededor del código que ayuda a los escáneres a encontrar sus bordes. Mantén un margen de al menos 4 módulos de ancho y nunca coloques texto ni logotipos dentro de ella.',
      },
      {
        question: '¿Los códigos QR creados aquí rastrean los escaneos?',
        answer:
          'No. Son códigos estáticos sin servidor de redirección detrás, así que nadie puede ver cuándo ni dónde se escanean.',
      },
      {
        question: '¿Puedo usar estos códigos QR en tarjetas de presentación y folletos?',
        answer:
          'Sí. Descarga la versión SVG para una impresión nítida en tarjetas, pósteres y empaques, y usa PNG para sitios web, presentaciones y gráficos sociales.',
      },
      {
        question: '¿Por qué mi teléfono no escanea el código QR?',
        answer:
          'Las causas habituales son el contraste bajo, un código impreso demasiado pequeño, el brillo o el daño. Prueba con un primer plano más oscuro, un tamaño mayor, un nivel de corrección de errores más alto y una zona tranquila más amplia.',
      },
      {
        question: '¿El código QR funciona sin conexión después de descargarlo?',
        answer:
          'Sí. Los datos están codificados directamente en el patrón, así que un código descargado se escanea y funciona sin conexión a este sitio web.',
      },
      {
        question: '¿Puedo codificar un número de teléfono para que abra el marcador?',
        answer:
          'Sí. Elige el formato Número de teléfono y el código crea un enlace tel:, así que al escanearlo en un teléfono se abre el marcador con el número listo para llamar.',
      },
      {
        question: '¿Puedo codificar un correo para que abra un mensaje nuevo?',
        answer:
          'Sí. El formato Enlace de correo crea un enlace mailto:, así que al escanearlo se abre la app de correo con tu dirección ya escrita como destinatario.',
      },
      {
        question: '¿Mi contraseña Wi-Fi está segura cuando genero un código QR aquí?',
        answer:
          'Sí. El código se genera por completo en tu navegador y nada de lo que escribes se sube ni se guarda en ningún servidor.',
      },
      {
        question: '¿A qué tamaño debo descargar el PNG para imprimir?',
        answer:
          'Elige el tamaño en píxeles más grande disponible para trabajos de impresión, y prefiere SVG para cualquier cosa más grande que un folleto, ya que la salida vectorial se mantiene nítida a cualquier tamaño.',
      },
    ],
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
    instructions: [
      {
        title: 'Escribe la URL de destino',
        description:
          'Pega la URL de la página de destino o selecciona una plantilla rápida de canal para rellenar las etiquetas estándar.',
      },
      {
        title: 'Elige una plantilla de canal (opcional)',
        description:
          'Elige Instagram, correo, YouTube u otra plantilla para completar los valores estándar de fuente y medio en lugar de escribirlos desde cero.',
      },
      {
        title: 'Completa los parámetros UTM',
        description:
          'Especifica los valores de utm_source, utm_medium, utm_campaign y, si quieres, utm_content o utm_term.',
      },
      {
        title: 'Agrega utm_term y utm_content opcionales',
        description:
          'Usa utm_term para palabras clave de búsqueda pagada y utm_content para distinguir dos enlaces de la misma campaña, como un botón de la bio frente a un enlace de historia.',
      },
      {
        title: 'Copia y verifica el desglose',
        description:
          'Revisa la tabla de parámetros en vivo que aparece abajo para evitar errores de escritura o mayúsculas mezcladas antes de copiar el enlace final.',
      },
      {
        title: 'Prueba el enlace antes de publicarlo',
        description:
          'Abre la URL copiada en un navegador para confirmar que llega a la página correcta, y verifica que la normalización a minúsculas no haya cambiado ninguna parte sensible a mayúsculas del destino.',
      },
    ],
    examples: [
      {
        title: 'Enlace de campaña para la bio de Instagram',
        input: 'URL: https://utilityflow.online/tools/ · Fuente: instagram · Medio: social · Campaña: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation:
          'Usa el análisis de URL del navegador para que los parámetros existentes o las anclas # se mantengan intactos.',
      },
      {
        title: 'Enlace UTM para un botón de boletín por correo',
        input: 'URL: https://utilityflow.online/tools/ · Fuente: newsletter · Medio: email · Campaña: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=newsletter&utm_medium=email&utm_campaign=spring_launch&utm_content=boton_superior',
        explanation:
          'El valor utm_content distingue el botón superior del boletín de otros enlaces de la misma campaña.',
      },
    ],
    benefits: [
      'Las plantillas de canal con un clic evitan nombres inconsistentes como IG frente a instagram',
      'La normalización opcional a minúsculas con guion bajo evita informes divididos en GA4',
      'Conserva correctamente los parámetros de consulta preexistentes y las anclas #',
      'Muestra una tabla de revisión de parámetros decodificados antes de publicar',
    ],
    useCases: [
      'Medir clics desde las bios de Instagram, LinkedIn, X y TikTok',
      'Medir botones de llamada a la acción individuales dentro de boletines semanales por correo',
      'Etiquetar enlaces de patrocinadores dentro de descripciones de videos de YouTube',
      'Generar enlaces UTM limpios para usarlos directamente en el Generador de códigos QR',
    ],
    faqs: [
      {
        question: '¿Por qué importa la normalización a minúsculas en los parámetros UTM?',
        answer:
          'Plataformas de analítica como Google Analytics 4 tratan utm_source=Instagram y utm_source=instagram como filas distintas, dividiendo la atribución de la campaña.',
      },
      {
        question: '¿Debo usar etiquetas UTM en enlaces de navegación interna del sitio?',
        answer:
          'No. Los parámetros UTM están diseñados solo para campañas externas entrantes; usarlos en enlaces internos sobrescribe la atribución de referencia original a mitad de sesión.',
      },
      {
        question: '¿Puedo convertir un enlace UTM generado en un código QR?',
        answer:
          'Sí. Copia tu URL UTM terminada y pégala directamente en nuestro Generador de códigos QR para campañas medibles de impreso a digital.',
      },
      {
        question: '¿El Creador de enlaces UTM es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y cada enlace se crea localmente en tu navegador sin subir tus URLs a ningún lugar.',
      },
      {
        question: '¿Qué es un parámetro UTM?',
        answer:
          'Un parámetro UTM es una etiqueta corta que se agrega al final de una URL, como utm_source=instagram, que le dice a las herramientas de analítica de dónde vino un visitante.',
      },
      {
        question: '¿Qué significa utm_source?',
        answer:
          'Identifica la fuente de tráfico, como instagram, google o newsletter, para que puedas ver qué lugar envió a cada visitante.',
      },
      {
        question: '¿Qué significa utm_medium?',
        answer:
          'Describe el canal de marketing, como social, email, cpc o referral, para que puedas comparar canales dentro de una misma campaña.',
      },
      {
        question: '¿Qué significa utm_campaign?',
        answer:
          'Nombra la campaña específica, como spring_launch o black_friday, para que todos los enlaces de una promoción se agrupen en los informes.',
      },
      {
        question: '¿Para qué sirve utm_content?',
        answer:
          'Distingue dos enlaces de la misma campaña, por ejemplo un botón de la bio frente a un enlace de historia, para que puedas ver qué ubicación funcionó mejor.',
      },
      {
        question: '¿Para qué sirve utm_term?',
        answer:
          'Identifica la palabra clave de búsqueda pagada que activó un clic en un anuncio, y es útil sobre todo para Google Ads u otras campañas de búsqueda.',
      },
      {
        question: '¿Necesito completar los cinco parámetros UTM?',
        answer:
          'No. Fuente, medio y campaña son el mínimo recomendado, mientras que utm_term y utm_content son opcionales y solo se necesitan cuando quieres más detalle.',
      },
      {
        question: '¿Puedo usar enlaces UTM en mi bio de Instagram?',
        answer:
          'Sí. Los enlaces UTM son una de las formas más comunes de medir el tráfico de la bio, y funcionan igual en páginas de enlaces, enlaces de historias y descripciones de publicaciones.',
      },
      {
        question: '¿Los parámetros UTM romperán mi cadena de consulta existente o mi ancla #?',
        answer:
          'No. El creador conserva los parámetros que ya tiene tu URL y mantiene el fragmento de ancla # al final, así el enlace sigue llegando a la sección correcta.',
      },
      {
        question: '¿Debo usar espacios en los valores UTM?',
        answer:
          'No. Usa guiones bajos o guiones, como spring_launch, porque los espacios se codifican en porcentaje y hacen los informes más difíciles de leer.',
      },
      {
        question: '¿Puedo medir escaneos de códigos QR con enlaces UTM?',
        answer:
          'Sí. Crea primero la URL UTM y luego conviértela en un código QR con nuestro Generador de códigos QR, y cada escaneo que llegue a tu sitio llevará las etiquetas de la campaña.',
      },
      {
        question: '¿Los enlaces UTM afectan el SEO?',
        answer:
          'No, los motores de búsqueda generalmente ignoran los parámetros UTM para el posicionamiento, pero es buena práctica mantener una etiqueta canónica en la página de destino para que las URLs indexadas se mantengan limpias.',
      },
      {
        question: '¿Cómo veo los resultados UTM en Google Analytics?',
        answer:
          'En Google Analytics 4, abre el informe de Adquisición de tráfico y busca la fuente, el medio y la campaña de la sesión, que se completan con tus valores UTM.',
      },
      {
        question: '¿Cuál es la diferencia entre utm_source y utm_medium?',
        answer:
          'La fuente responde de dónde vino el clic, como instagram, mientras que el medio responde cómo llegó, como social o email. Una etiqueta completa necesita ambos.',
      },
      {
        question: '¿Puedo guardar o reutilizar una plantilla de enlace UTM?',
        answer:
          'Sí. Las plantillas de canal rellenan valores estándar de fuente y medio, y puedes copiar un enlace terminado y reutilizar el mismo patrón de nombres en campañas futuras.',
      },
      {
        question: '¿Por qué mis informes UTM muestran la misma campaña dos veces?',
        answer:
          'Las mayúsculas mezcladas o la ortografía inconsistente, como Instagram frente a instagram, crean filas separadas. Mantén una sola convención de nombres en minúsculas para todos los enlaces.',
      },
    ],
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
    instructions: [
      {
        title: 'Escribe o pega tu borrador social',
        description:
          'Escribe descripciones, bios o descripciones de video en el cuadro del editor.',
      },
      {
        title: 'Revisa las tarjetas de medidores por plataforma',
        description:
          'Ve barras de uso verdes, ámbar o rojas para X, Instagram, LinkedIn, TikTok, Threads, Bluesky y YouTube.',
      },
      {
        title: 'Revisa la vista previa del pliegue "Ver más"',
        description:
          'Elige una plataforma objetivo en el menú desplegable de abajo para ver dónde el truncamiento del feed corta tu gancho inicial.',
      },
      {
        title: 'Recorta tu gancho sobre el pliegue',
        description:
          'Mueve tus palabras más importantes a los primeros 125 caracteres para Instagram o 210 para LinkedIn, para que los lectores las vean antes del botón "...más".',
      },
      {
        title: 'Ajusta hashtags, menciones y enlaces',
        description:
          'Elimina o acorta hashtags, menciones @ y URLs en las plataformas donde te pasas del límite, y recuerda que X cuenta cada enlace como 23 caracteres.',
      },
      {
        title: 'Vuelve a revisar y copia el texto final',
        description:
          'Después de cada edición, confirma que todas las tarjetas de medidores estén en verde y luego copia el texto. Si una plataforma sigue en rojo, recorta palabras de relleno o mueve el detalle extra a una respuesta o comentario.',
      },
    ],
    examples: [
      {
        title: 'Probar una publicación con enlace en X frente a LinkedIn',
        input: 'Gancho de 140 caracteres + https://example.com/very-long-campaign-url',
        output: 'X cuenta la URL como 23 caracteres; Instagram y LinkedIn cuentan la longitud completa de la URL.',
        explanation:
          'Refleja con precisión el comportamiento automático de acortamiento de enlaces t.co de X.',
      },
      {
        title: 'Ajustar una bio de Instagram al límite de 150 caracteres',
        input: 'Creadora de contenido · Consejos de diseño · Enlace abajo 👇',
        output: 'Medidor de Instagram en verde con 52 caracteres usados de 150',
        explanation:
          'El contador en vivo muestra cuánto espacio queda antes de alcanzar el límite de la bio.',
      },
    ],
    benefits: [
      'Cuenta con precisión los emojis de varios puntos de código usando el conteo de caracteres de Array.from',
      'Modela automáticamente la normalización de longitud de URL de 23 caracteres de X',
      'Muestra tanto los límites máximos estrictos como los umbrales de truncamiento del feed ("Ver más")',
      'Cuenta hashtags, menciones @ y URLs incrustados en tiempo real',
    ],
    useCases: [
      'Asegurar que tus primeros 125–210 caracteres enganchen a los lectores antes del pliegue del feed',
      'Ajustar anuncios de creadores a los límites de 280 caracteres de X y 300 de Bluesky',
      'Editar bios de LinkedIn e Instagram estrictamente dentro de los límites de 150–160 caracteres',
      'Revisar la visibilidad del título de YouTube de 70 caracteres en móvil antes de publicar',
    ],
    faqs: [
      {
        question: '¿Por qué X (Twitter) cuenta las URLs largas como 23 caracteres?',
        answer:
          'X envuelve los enlaces salientes con su acortador t.co, así que cada URL http/https ocupa 23 caracteres del presupuesto de 280 caracteres de la publicación, sin importar la longitud original de la URL.',
      },
      {
        question: '¿Qué es la longitud de "Pliegue" que se muestra en las tarjetas de Instagram y LinkedIn?',
        answer:
          'Los diseños del feed colapsan las descripciones largas después de unos 125 caracteres en Instagram y 210 en LinkedIn detrás de un botón "...más". Poner tu gancho principal antes del pliegue mejora la lectura.',
      },
      {
        question: '¿Esto cuenta los emojis como 1 carácter o 2?',
        answer:
          'Usando la iteración por puntos de código Unicode, los emojis estándar individuales cuentan como 1 carácter en lugar de pares sustitutos UTF-16 inflados.',
      },
      {
        question: '¿El Contador de límite de caracteres para redes sociales es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y tu borrador se cuenta localmente en tu navegador sin subirse a ningún lugar.',
      },
      {
        question: '¿Cuál es el límite de caracteres de una publicación en X (Twitter)?',
        answer:
          'Las publicaciones estándar en X permiten hasta 280 caracteres, y cada URL cuenta como 23 caracteres por el acortamiento de enlaces t.co.',
      },
      {
        question: '¿Cuál es el límite de caracteres de una descripción de Instagram?',
        answer:
          'Las descripciones de Instagram permiten hasta 2.200 caracteres, pero solo unos primeros 125 caracteres se muestran en el feed antes del pliegue de "...más".',
      },
      {
        question: '¿Cuál es el límite de caracteres de la bio de Instagram?',
        answer:
          'Las bios de Instagram permiten hasta 150 caracteres, así que cada letra, espacio, emoji y salto de línea cuenta dentro de ese presupuesto ajustado.',
      },
      {
        question: '¿Cuál es el límite de caracteres de una publicación de LinkedIn?',
        answer:
          'Las publicaciones de LinkedIn permiten hasta 3.000 caracteres, mientras que el feed muestra aproximadamente los primeros 210 caracteres antes del botón "ver más".',
      },
      {
        question: '¿Cuál es el límite de caracteres de una descripción de TikTok?',
        answer:
          'Las descripciones de videos de TikTok permiten hasta 4.000 caracteres, aunque las descripciones cortas y directas suelen funcionar mejor porque los espectadores leen rápido.',
      },
      {
        question: '¿Cuál es el límite de caracteres de Threads?',
        answer:
          'Las publicaciones de Threads permiten hasta 500 caracteres, más que una publicación estándar de X pero lo bastante corto como para premiar la escritura precisa.',
      },
      {
        question: '¿Cuál es el límite de caracteres de Bluesky?',
        answer:
          'Las publicaciones de Bluesky permiten hasta 300 caracteres, un poco más que el límite de 280 caracteres de una publicación estándar de X.',
      },
      {
        question: '¿Cuál es el límite de caracteres del título de YouTube?',
        answer:
          'Los títulos de YouTube permiten hasta 100 caracteres, pero los resultados de búsqueda en móvil suelen mostrar solo los primeros 70, así que pon tus palabras clave al principio.',
      },
      {
        question: '¿Cuál es el límite de caracteres de la descripción de YouTube?',
        answer:
          'Las descripciones de videos de YouTube permiten hasta 5.000 caracteres, y las primeras una o dos líneas son visibles antes de que los espectadores toquen "mostrar más".',
      },
      {
        question: '¿Cómo funciona el pliegue del feed en Instagram?',
        answer:
          'Instagram colapsa las descripciones después de unos 125 caracteres en el feed, así que los lectores deben tocar "...más" para ver el resto. Pon tu gancho y tu mensaje clave primero.',
      },
      {
        question: '¿Cómo funciona el pliegue de "ver más" en LinkedIn?',
        answer:
          'LinkedIn muestra aproximadamente los primeros 210 caracteres de una publicación en el feed y luego oculta el resto detrás de "ver más", así que abre con una línea que gane el clic.',
      },
      {
        question: '¿Los hashtags cuentan para el límite de caracteres?',
        answer:
          'Sí. Cada carácter de un hashtag, incluido el símbolo # mismo, cuenta para el límite de la publicación en todas las plataformas.',
      },
      {
        question: '¿Los saltos de línea cuentan como caracteres?',
        answer:
          'Sí. Cada salto de línea de tu borrador cuenta como un carácter, así que las líneas en blanco extra consumen límites ajustados como el de la bio de Instagram de 150 caracteres.',
      },
      {
        question: '¿Los emojis cuentan como un carácter en todas las plataformas?',
        answer:
          'Este contador cuenta los emojis estándar individuales como un carácter usando el conteo por puntos de código, pero los emojis complejos formados por símbolos unidos pueden contar como más en algunas plataformas.',
      },
      {
        question: '¿Las URLs cuentan igual en todas las plataformas?',
        answer:
          'No. X cuenta cada URL como 23 caracteres por el acortamiento t.co, mientras que Instagram, LinkedIn y la mayoría de las demás plataformas cuentan la longitud completa del enlace.',
      },
      {
        question: '¿Puedo revisar varias plataformas a la vez?',
        answer:
          'Sí. Escribe o pega tu borrador una vez y todas las tarjetas de medidores por plataforma se actualizan al mismo tiempo, para que puedas adaptar una publicación para X, Instagram, LinkedIn y más.',
      },
    ],
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
    instructions: [
      {
        title: 'Escribe un titular corto o una etiqueta de bio',
        description:
          'Escribe una frase corta, un encabezado de sección o un eslogan en Texto para estilizar.',
      },
      {
        title: 'Explora 10 estilos Unicode',
        description:
          'Compara las vistas previas de Negrita Sans-Serif, Cursiva, Monoespaciada, Script, Doble trazo, Versalitas y Ancho completo.',
      },
      {
        title: 'Compara las vistas previas lado a lado',
        description:
          'Revisa las diez tarjetas de estilo para encontrar la que se lea mejor en tamaños pequeños, ya que algunos estilos script y de doble trazo son más difíciles de leer.',
      },
      {
        title: 'Copia tu estilo preferido',
        description:
          'Haz clic en Copiar en la tarjeta de tu estilo preferido para colocar el texto Unicode con estilo en tu portapapeles.',
      },
      {
        title: 'Pega y revisa cómo se ve',
        description:
          'Pega el texto en tu bio, descripción o publicación, y luego míralo en otro dispositivo para asegurarte de que ningún carácter aparezca como un cuadro vacío.',
      },
      {
        title: 'Copia con responsabilidad',
        description:
          'Haz clic en Copiar en tu estilo preferido y mantén el cuerpo principal del texto en texto plano estándar para la accesibilidad de los lectores de pantalla.',
      },
    ],
    examples: [
      {
        title: 'Dar formato a un separador de bio de LinkedIn o X',
        input: 'New Toolkit 2025',
        output: '𝗡𝗲𝘄 𝗧𝗼𝗼𝗹𝗸𝗶𝘁 𝟮𝟬𝟮𝟱 (Negrita Sans-Serif)',
        explanation:
          'Usa los puntos de código oficiales Unicode U+1D5D4–U+1D7EC de negrita matemática.',
      },
      {
        title: 'Estilizar un encabezado de sección con versalitas',
        input: 'Mis proyectos',
        output: 'ᴍɪs ᴘʀᴏʏᴇᴄᴛᴏs (Versalitas)',
        explanation:
          'Las versalitas usan caracteres Unicode de versalitas pequeñas que se mantienen legibles en tamaños pequeños de bio.',
      },
    ],
    benefits: [
      'Muestra glifos Unicode reales en lugar de imágenes o HTML específico de la plataforma',
      'Incluye un aviso claro de accesibilidad sobre el comportamiento en lectores de pantalla y búsquedas',
      'Maneja correctamente dígitos, puntuación y símbolos especiales de pizarra como ℂ, ℕ, ℝ',
      'Copia con un clic para cada tarjeta de estilo',
    ],
    useCases: [
      'Resaltar encabezados de sección dentro de bios de Instagram o TikTok',
      'Dar formato a nombres técnicos o fechas en Unicode monoespaciado',
      'Agregar etiquetas sutiles en versalitas en boletines o notas de texto plano',
      'Estilizar anuncios cortos donde el formato en negrita nativo de Markdown no funciona',
    ],
    faqs: [
      {
        question: '¿Por qué la herramienta incluye una advertencia de accesibilidad?',
        answer:
          'Los símbolos matemáticos Unicode están pensados para ecuaciones y no para prosa, así que los lectores de pantalla de asistencia suelen leerlos en voz alta como "A mayúscula en negrita sans-serif matemática" y las barras de búsqueda social pueden no indexarlos.',
      },
      {
        question: '¿Son archivos de fuente reales?',
        answer:
          'No. Son caracteres Unicode estandarizados asignados a distintos bloques de símbolos, por eso sobreviven al pegarlos en campos sociales de texto plano.',
      },
      {
        question: '¿Por qué las letras acentuadas no ASCII se mantienen sin cambios?',
        answer:
          'Los bloques Alfanuméricos Matemáticos Unicode solo definen A–Z latinas sin acento y los dígitos 0–9, así que los caracteres acentuados se mantienen intactos para preservar la legibilidad.',
      },
      {
        question: '¿El Formateador de texto Unicode con estilo es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y tu texto se convierte localmente en tu navegador sin subirse a ningún lugar.',
      },
      {
        question: '¿Qué estilos Unicode puedo crear con este formateador?',
        answer:
          'Puedes crear estilos de Negrita Sans-Serif, Cursiva, Monoespaciada, Script, Doble trazo, Fraktur, Versalitas y Ancho completo, con diez tarjetas de estilo para comparar de un vistazo.',
      },
      {
        question: '¿El texto con estilo funcionará en Instagram?',
        answer:
          'Sí. El texto Unicode con estilo se pega directamente en bios, descripciones y comentarios de Instagram porque está hecho de caracteres reales, no de imágenes ni fuentes.',
      },
      {
        question: '¿El texto con estilo funcionará en LinkedIn y X?',
        answer:
          'Sí. LinkedIn y X aceptan caracteres Unicode en bios y publicaciones, así que los encabezados en negrita o versalitas se pegan igual que el texto normal.',
      },
      {
        question: '¿Puedo usar texto con estilo en mi bio de TikTok?',
        answer:
          'Sí. Las bios de TikTok aceptan caracteres Unicode, así que puedes estilizar un nombre corto o un eslogan, aunque debes mantener el resto de la bio en texto plano.',
      },
      {
        question: '¿Por qué algunos caracteres se ven como cuadros en algunos dispositivos?',
        answer:
          'Los teléfonos o computadoras más antiguos pueden no tener fuentes que cubran todos los bloques de símbolos Unicode, así que un glifo faltante se muestra como un cuadro vacío. Prueba tu texto con estilo en otro dispositivo antes de publicar.',
      },
      {
        question: '¿Puedo usar texto con estilo en toda mi bio?',
        answer:
          'No se recomienda. Los lectores de pantalla tienen dificultades con el texto con estilo y la búsqueda puede no coincidir con él, así que usa el texto con estilo solo para encabezados cortos y mantén el resto en texto plano.',
      },
      {
        question: '¿El texto con estilo afecta la búsqueda en las plataformas sociales?',
        answer:
          'Sí, puede hacerlo. Una búsqueda de una palabra simple puede no coincidir con la misma palabra escrita en caracteres matemáticos en negrita, así que evita estilizar las palabras clave que la gente busca.',
      },
      {
        question: '¿Los lectores de pantalla pueden leer el texto Unicode con estilo?',
        answer:
          'A menudo mal. Los lectores de pantalla pueden leer cada letra con estilo en voz alta con su nombre Unicode completo, lo que hace confusos los pasajes largos con estilo para las personas ciegas.',
      },
      {
        question: '¿Puedo poner texto en negrita en WhatsApp con este formateador?',
        answer:
          'Sí, la negrita Unicode se pega en WhatsApp, pero la app también tiene formato nativo, así que envolver el texto en asteriscos como *negrita* suele ser la opción más simple.',
      },
      {
        question: '¿Los números y la puntuación también cambian?',
        answer:
          'Los dígitos se convierten en la mayoría de los estilos, como negrita y monoespaciada, mientras que la mayoría de la puntuación se mantiene sin cambios porque los bloques de símbolos Unicode no definen versiones con estilo de ella.',
      },
      {
        question: '¿Puedo convertir el texto con estilo de vuelta a texto normal?',
        answer:
          'La herramienta convierte texto plano en texto con estilo, así que para recuperar el texto plano, vuelve a escribir la frase original o pégala desde donde la copiaste por primera vez.',
      },
      {
        question: '¿El texto Unicode con estilo es lo mismo que una fuente?',
        answer:
          'No. Una fuente cambia cómo se ven las letras comunes en un dispositivo, mientras que el texto Unicode con estilo usa caracteres completamente distintos, por eso el estilo sobrevive al copiar y pegar.',
      },
      {
        question: '¿El texto con estilo funcionará en líneas de asunto de correo?',
        answer:
          'Por lo general se muestra en clientes de correo modernos, pero los caracteres con estilo pueden activar filtros de spam y confundir a los lectores de pantalla, así que el texto plano es la opción más segura para el correo.',
      },
      {
        question: '¿Puedo usar texto con estilo en títulos de YouTube?',
        answer:
          'Sí, YouTube acepta Unicode en los títulos, pero las palabras con estilo pueden no coincidir con las consultas de búsqueda simples, así que úsalo con moderación y mantén las palabras clave buscables en texto plano.',
      },
      {
        question: '¿Este formateador sube mi texto a algún lugar?',
        answer:
          'No. Toda la conversión ocurre localmente en tu navegador, así que nada de lo que escribes se envía a un servidor ni se guarda.',
      },
      {
        question: '¿Qué es el texto de Ancho completo?',
        answer:
          'El texto de Ancho completo usa caracteres Unicode anchos, como Ｆｕｌｌｗｉｄｔｈ, donde cada letra ocupa el doble del ancho normal, dando a los encabezados un aspecto amplio y espaciado.',
      },
    ],
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
    instructions: [
      {
        title: 'Escribe o pega tu descripción',
        description:
          'Escribe una copia de varios párrafos o líneas de bio con líneas vacías donde quieras espacio visual.',
      },
      {
        title: 'Selecciona la estrategia de espaciador',
        description:
          'Elige Espaciador invisible (U+2800), Espaciador de punto mínimo (.) o Solo limpiar espacios finales.',
      },
      {
        title: 'Revisa la vista previa con formato',
        description:
          'Revisa la vista previa para confirmar que cada línea en blanco sobrevivió y que no quedan espacios finales al final de tus líneas.',
      },
      {
        title: 'Revisa el conteo de caracteres',
        description:
          'Observa el contador en vivo para asegurarte de que tu bio aún cabe dentro del límite de 150 caracteres de Instagram, ya que cada espaciador cuenta como un carácter.',
      },
      {
        title: 'Copia el texto con formato',
        description:
          'Haz clic en Copiar descripción con formato y verifica si tu bio cabe dentro del límite de 150 caracteres de Instagram.',
      },
      {
        title: 'Pega y verifica en la plataforma',
        description:
          'Pega en Instagram, Threads o TikTok y revisa la vista previa de la publicación. Si los saltos aún se colapsan, cambia al modo Espaciador invisible y copia de nuevo.',
      },
    ],
    examples: [
      {
        title: 'Limpiar espacios finales antes de pegar en Instagram',
        input: 'Línea 1   \n\nLínea 2',
        output: 'Línea 1\n⠀\nLínea 2',
        explanation:
          'Elimina los espacios finales después de "Línea 1" e inserta un espaciador invisible U+2800 para que el espacio en blanco se mantenga.',
      },
      {
        title: 'Dar formato a una bio de varias líneas con viñetas',
        input: 'Diseñadora · Madrid · Portafolio abajo',
        output: 'Diseñadora\n⠀\nMadrid\n⠀\nPortafolio abajo',
        explanation:
          'Cada línea en blanco recibe un espaciador invisible para que la bio apilada se mantenga legible en Instagram.',
      },
    ],
    benefits: [
      'Elimina los espacios finales invisibles que activan errores de colapso de líneas en las plataformas sociales',
      'Admite tanto espaciadores Unicode invisibles como separadores limpios con puntos',
      'Colapsa automáticamente los espacios dobles accidentales dentro de las oraciones',
      'Revisa la longitud total en vivo frente al límite de 150 caracteres de la bio de Instagram',
    ],
    useCases: [
      'Dar formato a descripciones legibles de varios párrafos en Instagram y Facebook',
      'Estructurar bios apiladas con viñetas en Instagram o TikTok',
      'Limpiar textos copiados de Notion, Google Docs o Notas antes de publicarlos',
      'Separar la historia principal de la descripción de las llamadas a la acción del pie',
    ],
    faqs: [
      {
        question: '¿Por qué desaparecen las líneas en blanco cuando pego texto directamente en Instagram?',
        answer:
          'Los teclados móviles y los editores de texto a menudo dejan espacios finales al final de las oraciones, que los analizadores sociales tratan como artefactos de formato y colapsan en un solo salto de línea.',
      },
      {
        question: '¿Qué carácter se usa para el modo Espaciador invisible?',
        answer:
          'Inserta U+2800 (Braille en blanco) solo en líneas que de otro modo estarían vacías, para que el espaciado visual se mantenga sin mostrar puntos o guiones incómodos.',
      },
      {
        question: '¿Esto modifica el texto dentro de mis oraciones?',
        answer:
          'Solo se recorta el espacio en blanco final al final de las líneas, además de los espacios repetidos opcionales dentro de las líneas cuando está activado.',
      },
      {
        question: '¿El Formateador de saltos de línea para bio es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y tu descripción se formatea localmente en tu navegador sin subirse a ningún lugar.',
      },
      {
        question: '¿Por qué las descripciones de Instagram pierden sus saltos de línea?',
        answer:
          'Los espacios finales que dejan los teclados y editores hacen que las apps sociales traten una línea en blanco como un artefacto y la colapsen. Eliminar esos espacios y agregar un espaciador mantiene el espacio.',
      },
      {
        question: '¿Puedo usar este formateador también para descripciones de TikTok?',
        answer:
          'Sí. Las descripciones de TikTok aceptan los mismos saltos de línea y espaciadores invisibles, así que el texto con formato se pega con su espaciado de párrafos intacto.',
      },
      {
        question: '¿Puedo usar este formateador para publicaciones de Threads?',
        answer:
          'Sí. Threads conserva las líneas en blanco en el texto con formato, así que puedes estructurar publicaciones más largas con saltos de párrafo claros.',
      },
      {
        question: '¿Puedo usarlo para mi bio de Instagram?',
        answer:
          'Sí. Funciona para bios apiladas de varias líneas, pero observa el contador en vivo porque las bios de Instagram solo permiten 150 caracteres y cada espaciador cuenta.',
      },
      {
        question: '¿Cuál es la diferencia entre Espaciador invisible y Espaciador de punto?',
        answer:
          'El Espaciador invisible pone un carácter Braille en blanco en las líneas vacías para que el espacio se vea vacío, mientras que el Espaciador de punto pone un punto visible ahí, que algunas personas prefieren por fiabilidad.',
      },
      {
        question: '¿Cuándo debo elegir "Solo limpiar espacios finales"?',
        answer:
          'Elígela cuando la plataforma ya conserva tus saltos de línea y solo quieres eliminar los espacios finales ocultos que aún podrían provocar colapsos.',
      },
      {
        question: '¿El espaciador invisible cuenta para el límite de caracteres de la bio de Instagram?',
        answer:
          'Sí. Cada espaciador U+2800 es un carácter, así que una bio con varias líneas en blanco usa parte del presupuesto de 150 caracteres.',
      },
      {
        question: '¿El carácter invisible aparecerá como un símbolo raro?',
        answer:
          'En la mayoría de los teléfonos modernos se muestra como un espacio en blanco, pero las fuentes muy antiguas pueden mostrarlo como un cuadro vacío, así que prueba tu bio en otro dispositivo después de pegarla.',
      },
      {
        question: '¿Puedo dar formato a texto pegado desde Google Docs o Notion?',
        answer:
          'Sí. El texto copiado de Docs, Notion o Notas suele traer espacios finales ocultos, y esta herramienta los limpia antes de que lo pegues en una app social.',
      },
      {
        question: '¿La herramienta elimina espacios dentro de mis oraciones?',
        answer:
          'No. Solo recorta el espacio en blanco final al final de las líneas, y colapsa los espacios repetidos dentro de una línea solo cuando activas esa opción.',
      },
      {
        question: '¿Cuántas líneas en blanco debo dejar entre párrafos?',
        answer:
          'Una línea en blanco suele bastar para descripciones legibles. Dos o más pueden verse huecas en el feed y desperdiciar caracteres en una bio.',
      },
      {
        question: '¿Puedo usar este formateador para publicaciones de Facebook?',
        answer:
          'Sí. Facebook suele conservar los saltos de línea por sí solo, pero la herramienta sigue siendo útil para limpiar los espacios finales del texto pegado desde otras apps.',
      },
      {
        question: '¿Esta herramienta sube mi descripción a algún lugar?',
        answer:
          'No. Todo el formato ocurre localmente en tu navegador, así que tu texto nunca se envía a un servidor ni se guarda.',
      },
      {
        question: '¿Por qué mi descripción sigue viéndose colapsada después de pegarla?',
        answer:
          'Algunas apps eliminan el formato al pegar. Intenta copiar de nuevo en modo Espaciador invisible, pega directamente en el campo de la descripción en lugar de pasar por otra app, y revisa la vista previa.',
      },
      {
        question: '¿Puedo usar saltos de línea en publicaciones de X (Twitter)?',
        answer:
          'Sí. X admite saltos de línea en las publicaciones, y este formateador también funciona ahí, pero recuerda que cada salto de línea cuenta para el límite de 280 caracteres.',
      },
      {
        question: '¿Puedo usar este formateador para descripciones de YouTube?',
        answer:
          'Sí. Las descripciones de YouTube conservan las líneas en blanco, así que el texto con formato mantiene su espaciado de párrafos cuando los espectadores expanden la descripción.',
      },
    ],
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
    instructions: [
      {
        title: 'Pega tu URL de YouTube (opcional)',
        description:
          'Escribe cualquier enlace de youtube.com/watch, youtu.be o Shorts para generar automáticamente enlaces profundos clicables por capítulo.',
      },
      {
        title: 'Agrega y etiqueta capítulos',
        description:
          'Escribe marcas de tiempo MM:SS o HH:MM:SS y títulos de capítulo; haz clic en Ordenar cronológicamente cuando las filas se desordenen.',
      },
      {
        title: 'Ordena y revisa las reglas de capítulos',
        description:
          'Ordena la lista cronológicamente y revisa la verificación de especificaciones: inicio en 00:00, al menos 3 capítulos y espacio mínimo de 10 segundos.',
      },
      {
        title: 'Corrige cualquier advertencia antes de copiar',
        description:
          'Si aparece una advertencia, ajusta la marca de tiempo o el título problemático para que todos los capítulos pasen las reglas de YouTube antes de exportar.',
      },
      {
        title: 'Copia el bloque de descripción y los enlaces',
        description:
          'Copia el bloque de capítulos con formato para la descripción de tu video, y copia enlaces ?t= individuales para comentarios, notas del programa o boletines.',
      },
      {
        title: 'Consejo: prueba un enlace antes de publicar',
        description:
          'Abre un enlace ?t= generado en una pestaña nueva para confirmar que salta al momento correcto, sobre todo después de editar marcas de tiempo a última hora.',
      },
    ],
    examples: [
      {
        title: 'Dar formato a la descripción de un tutorial de 4 capítulos',
        input: '00:00 Intro · 01:15 Configuración · 04:40 Demostración · 08:20 Resumen',
        output: '00:00 Intro\n01:15 Configuración\n04:40 Demostración\n08:20 Resumen (+ https://youtu.be/...?t=75)',
        explanation:
          'Convierte 01:15 directamente en ?t=75s para compartir con un clic.',
      },
      {
        title: 'Compartir un momento exacto de un pódcast en los comentarios',
        input: 'URL de YouTube · Capítulo: 12:30 La entrevista',
        output: 'https://youtu.be/...?t=750',
        explanation:
          'El enlace de salto lleva a los oyentes directo al minuto 12:30 del episodio.',
      },
    ],
    benefits: [
      'Valida automáticamente las reglas de YouTube: inicio en 00:00, mínimo de 3 capítulos y duración mínima de 10 segundos',
      'Cambia sin problema al formato HH:MM:SS cuando los videos superan los 60 minutos',
      'Extrae IDs de video de URLs estándar, acortadas, en vivo, incrustadas y de Shorts',
      'Genera enlaces profundos ?t= listos para compartir en notas del programa y comentarios fijados',
    ],
    useCases: [
      'Agregar barras de capítulos buscables a tutoriales y pódcasts de YouTube',
      'Crear marcas de tiempo clicables para las notas de episodios de pódcast',
      'Compartir pasos exactos de tutoriales en documentación, Slack o Discord',
      'Auditar listas de capítulos de transmisiones largas en busca de errores de formato',
    ],
    faqs: [
      {
        question: '¿Por qué no aparecen los capítulos de mi video de YouTube en la barra de progreso?',
        answer:
          'YouTube exige que la primera marca de tiempo sea exactamente 00:00, al menos 3 marcas en orden cronológico ascendente y que cada capítulo dure al menos 10 segundos.',
      },
      {
        question: '¿Las marcas de tiempo de más de 60 minutos deben ser MM:SS o HH:MM:SS?',
        answer:
          'Cuando algún capítulo llega a 60 minutos o más, esta herramienta formatea automáticamente todas las marcas de tiempo en notación HH:MM:SS.',
      },
      {
        question: '¿Esto se conecta a la API de datos de YouTube?',
        answer:
          'No. Todo se analiza y se formatea localmente en tu navegador sin necesitar OAuth de cuenta de Google ni claves de API.',
      },
      {
        question: '¿El Generador de marcas de tiempo de YouTube es gratis?',
        answer:
          'Sí, es gratis en tu navegador, sin registro, y nada se sube a un servidor.',
      },
      {
        question: '¿Cuál es el número mínimo de capítulos que exige YouTube?',
        answer:
          'YouTube necesita al menos 3 capítulos en la descripción antes de mostrar marcadores de capítulos en la barra de progreso.',
      },
      {
        question: '¿Por qué el primer capítulo de YouTube debe empezar en 00:00?',
        answer:
          'YouTube usa la primera marca de tiempo para anclar el sistema de capítulos, así que una descripción que empiece más tarde no generará capítulos.',
      },
      {
        question: '¿Qué pasa si dos capítulos están a menos de 10 segundos de distancia?',
        answer:
          'YouTube ignora los capítulos de menos de 10 segundos, así que esta herramienta marca el espacio y debes mover la marca posterior hacia adelante.',
      },
      {
        question: '¿Puedo usar el Generador de marcas de tiempo de YouTube para Shorts?',
        answer:
          'Sí, puedes pegar un enlace de Shorts y la herramienta generará enlaces ?t= de todos modos, aunque los capítulos son útiles sobre todo para videos más largos.',
      },
      {
        question: '¿Cómo funcionan los enlaces de salto ?t=?',
        answer:
          'Cada enlace agrega el tiempo de inicio del capítulo en segundos a la URL del video, así que al hacer clic se abre el video en ese momento exacto.',
      },
      {
        question: '¿Qué formatos de URL de YouTube acepta el generador de marcas de tiempo?',
        answer:
          'Acepta enlaces estándar de youtube.com/watch, enlaces acortados de youtu.be, enlaces en vivo, enlaces incrustados y enlaces de Shorts.',
      },
      {
        question: '¿Los capítulos deben estar en orden cronológico?',
        answer:
          'Sí, YouTube exige orden ascendente, y esta herramienta puede ordenar tus filas cronológicamente con un clic si se mezclan.',
      },
      {
        question: '¿Puedo agregar capítulos a un video que no subí yo?',
        answer:
          'Puedes generar enlaces de marcas de tiempo para cualquier video público y compartir momentos exactos, pero los capítulos solo aparecen cuando el dueño del video los agrega a la descripción.',
      },
      {
        question: '¿Cuántos capítulos puedo agregar con esta herramienta?',
        answer:
          'No hay un límite fijo en la herramienta, pero las listas de capítulos muy largas se vuelven difíciles de leer, así que concéntrate en las secciones reales del video.',
      },
      {
        question: '¿Necesito incluir títulos de capítulos o bastan los tiempos?',
        answer:
          'YouTube necesita un título después de cada marca de tiempo, así que agrega una etiqueta corta y descriptiva para cada capítulo que listes.',
      },
      {
        question: '¿Puedo usar estas marcas de tiempo en la descripción de un episodio de pódcast?',
        answer:
          'Sí, el mismo formato 00:00 funciona en notas del programa y descripciones de episodios de pódcast, y los enlaces ?t= son útiles para los oyentes.',
      },
      {
        question: '¿Por qué la herramienta cambia todas las marcas a HH:MM:SS en videos largos?',
        answer:
          'Mezclar formatos MM:SS y HH:MM:SS confunde a los espectadores y a los analizadores, así que la herramienta mantiene todas las marcas en un solo formato consistente.',
      },
      {
        question: '¿Mi URL de video o mi lista de capítulos se sube a algún lugar?',
        answer:
          'No, todo el análisis y el formato ocurren localmente en tu navegador, y tus URLs y títulos de capítulos nunca salen de tu dispositivo.',
      },
      {
        question: '¿Puedo editar un capítulo después de agregarlo?',
        answer:
          'Sí, puedes cambiar cualquier marca de tiempo o título, volver a ordenar la lista y revisar de nuevo las advertencias de especificaciones antes de copiar el bloque actualizado.',
      },
      {
        question: '¿Qué debo hacer si un enlace generado abre en el momento equivocado?',
        answer:
          'Verifica que la marca de tiempo se haya escrito con minutos y segundos en el orden correcto, y luego vuelve a copiar el enlace después de corregirla.',
      },
      {
        question: '¿Los capítulos de YouTube ayudan a los espectadores a encontrar contenido más rápido?',
        answer:
          'Sí, los capítulos permiten a los espectadores saltar directo a la sección que necesitan, lo que hace más fáciles de navegar los tutoriales, reseñas y pódcasts largos.',
      },
    ],
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
    instructions: [
      {
        title: 'Carga una imagen de miniatura local',
        description:
          'Elige un archivo PNG, JPG o WebP de tu disco; se mantiene estrictamente en la memoria local del navegador mediante URLs de objeto.',
      },
      {
        title: 'Escribe el título, el canal y la duración',
        description:
          'Escribe el título candidato y la duración del video para revisar el truncamiento a dos líneas en el feed y la cobertura de la insignia de la esquina.',
      },
      {
        title: 'Activa el modo oscuro y la zona segura',
        description:
          'Cambia entre feeds Claro y Oscuro y activa la superposición de zona segura ámbar en la esquina de la marca de tiempo antes de exportar.',
      },
      {
        title: 'Compara los tamaños de feed y barra lateral',
        description:
          'Revisa la tarjeta grande del feed de escritorio y la miniatura compacta de la barra lateral lado a lado para detectar texto ilegible en tamaños pequeños.',
      },
      {
        title: 'Revisa las advertencias de especificaciones',
        description:
          'Revisa las verificaciones de dimensiones 1280×720, relación de aspecto 16:9 y tamaño de archivo de 2 MB, y corrige cualquier problema marcado en tu editor de imágenes.',
      },
      {
        title: 'Consejo: corrige el texto oculto por la insignia',
        description:
          'Si la insignia de duración cubre texto importante o una cara, mueve ese elemento lejos de la esquina inferior derecha y vuelve a subir la imagen.',
      },
    ],
    examples: [
      {
        title: 'Revisar la ubicación del texto en la esquina inferior derecha',
        input: 'PNG de 1280×720 · Duración: 12:48 · Zona segura: activada',
        output: 'Resalta la esquina inferior derecha donde la insignia de duración 12:48 cubre la ilustración.',
        explanation:
          'Evita que caras o números importantes de la miniatura queden detrás de las superposiciones de tiempo del reproductor.',
      },
      {
        title: 'Probar el mismo título en modo claro y oscuro',
        input: 'Título: "5 errores de diseño" · Modo oscuro: activado',
        output: 'Vista previa del feed oscuro con el título en dos líneas y contraste verificado',
        explanation:
          'El cambio de modo muestra cómo se ve la miniatura para los espectadores que navegan en modo oscuro.',
      },
    ],
    benefits: [
      'Lee de inmediato las dimensiones reales en píxeles, la relación de aspecto y el tamaño de archivo en KB/MB',
      'Muestra tanto tarjetas grandes del feed de escritorio como miniaturas pequeñas de la barra lateral recomendada',
      'Incluye cambio de feed Claro/Oscuro para probar la legibilidad de alto contraste',
      'Sin subida al servidor: ideal para gráficos no publicados de patrocinadores o lanzamientos de productos',
    ],
    useCases: [
      'Detectar texto pequeño ilegible en miniaturas compactas de barra lateral antes de publicar',
      'Asegurar que los gráficos importantes se mantengan fuera de la superposición de duración en la esquina inferior derecha',
      'Verificar que las miniaturas cumplan los requisitos de YouTube de 1280×720, 16:9 y menos de 2 MB',
      'Comparar frases de títulos para que las palabras clave críticas aparezcan antes del truncamiento a dos líneas',
    ],
    faqs: [
      {
        question: '¿Mis imágenes de miniatura subidas se envían a un servidor remoto?',
        answer:
          'Nunca. Las imágenes se cargan exclusivamente dentro de la pestaña de tu navegador mediante URL.createObjectURL() y se revocan automáticamente al reemplazarlas o cerrarlas.',
      },
      {
        question: '¿Qué dimensiones y tamaño de archivo recomienda YouTube para las miniaturas?',
        answer:
          'YouTube recomienda 1280×720 píxeles (ancho mínimo de 640 px) en una relación de aspecto 16:9, guardadas como JPG, PNG o WebP de menos de 2 MB.',
      },
      {
        question: '¿Por qué importa tanto la vista previa de la barra lateral?',
        answer:
          'Las miniaturas sugeridas en la página de visualización aparecen mucho más pequeñas (unos 168 px de ancho), así que verificar la legibilidad a escala compacta evita diseños recargados.',
      },
      {
        question: '¿La Vista previa de miniaturas de YouTube es gratis?',
        answer:
          'Sí, es gratis en tu navegador, sin cuenta, y tus imágenes de miniatura nunca se suben a ningún lugar.',
      },
      {
        question: '¿Qué formatos de imagen puedo revisar con la vista previa de miniaturas?',
        answer:
          'Puedes cargar archivos PNG, JPG y WebP, que son los mismos formatos que YouTube acepta para miniaturas personalizadas.',
      },
      {
        question: '¿Cómo verifica la vista previa de miniaturas la relación de aspecto 16:9?',
        answer:
          'Lee las dimensiones reales en píxeles de tu imagen y la marca si la proporción ancho-alto no coincide con 16:9.',
      },
      {
        question: '¿Qué es la zona segura de miniaturas en esta vista previa?',
        answer:
          'La superposición de zona segura resalta la esquina inferior derecha donde YouTube coloca la insignia de duración del video, para que puedas mantener caras y texto clave fuera de ella.',
      },
      {
        question: '¿Por qué debo revisar mi miniatura en modo oscuro?',
        answer:
          'Muchos espectadores navegan YouTube en modo oscuro, y los diseños brillantes o de bajo contraste pueden verse muy distintos sobre un fondo oscuro del feed.',
      },
      {
        question: '¿Cómo muestra la vista previa el truncamiento del título?',
        answer:
          'Muestra tu título en una tarjeta de feed realista con el mismo límite de dos líneas, para que puedas ver exactamente dónde lo corta YouTube.',
      },
      {
        question: '¿Qué pasa si mi miniatura pesa más de 2 MB?',
        answer:
          'La herramienta marca el tamaño del archivo, y debes volver a exportarla con mayor compresión o menor resolución hasta que pese menos de 2 MB.',
      },
      {
        question: '¿Puedo revisar una miniatura antes de que se publique mi video?',
        answer:
          'Sí, ese es el uso principal: probar miniaturas no publicadas localmente para que los gráficos de patrocinadores y las ilustraciones de lanzamiento se mantengan privados hasta el día del lanzamiento.',
      },
      {
        question: '¿Por qué mi miniatura se ve borrosa en la vista previa de la barra lateral?',
        answer:
          'Las miniaturas pequeñas de la barra lateral reducen mucho tu imagen, así que el texto fino y los detalles se difuminan; usa texto grande en negrita y formas simples.',
      },
      {
        question: '¿La vista previa cambia o comprime mi imagen de miniatura?',
        answer:
          'No, solo muestra tu archivo tal como es e informa sus dimensiones y tamaño; nunca edita, redimensiona ni recodifica la imagen.',
      },
      {
        question: '¿Cuál es el ancho mínimo de miniatura que acepta YouTube?',
        answer:
          'YouTube exige un ancho mínimo de 640 píxeles, aunque se recomiendan 1280 píxeles de ancho para un resultado HD nítido.',
      },
      {
        question: '¿Puedo probar distintos títulos con la misma miniatura?',
        answer:
          'Sí, solo edita el campo del título y la vista previa del feed se actualiza al instante, para que puedas comparar frases sin volver a subir la imagen.',
      },
      {
        question: '¿Por qué mi texto de miniatura aparece cortado en la vista previa del feed?',
        answer:
          'Las tarjetas del feed limitan los títulos a dos líneas, así que mueve tus palabras más importantes al inicio del título, donde se mantienen visibles.',
      },
      {
        question: '¿La vista previa funciona para miniaturas de otras plataformas?',
        answer:
          'Está construida en torno a los diseños del feed de YouTube, pero las verificaciones de tamaño, contraste y legibilidad a pequeña escala son útiles para cualquier plataforma de video.',
      },
      {
        question: '¿Cómo elimino una imagen de miniatura cargada?',
        answer:
          'Carga una imagen distinta para reemplazarla, o cierra la pestaña; la URL de objeto en memoria se revoca y nada se guarda.',
      },
      {
        question: '¿Qué debo hacer si la vista previa se ve distinta del YouTube real?',
        answer:
          'YouTube ajusta su diseño con el tiempo, así que trata la vista previa como una aproximación cercana y haz una revisión final en una subida privada o no listada.',
      },
      {
        question: '¿La vista previa de miniaturas puede revisar una miniatura de un video en vivo de YouTube?',
        answer:
          'No, solo revisa archivos de imagen locales; para revisar un video publicado, descarga primero su imagen de miniatura y carga ese archivo aquí.',
      },
    ],
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
    instructions: [
      {
        title: 'Pega palabras clave o hashtags sin pulir',
        description:
          'Escribe etiquetas separadas por comas, espacios, punto y coma o saltos de línea, con o sin el símbolo # inicial.',
      },
      {
        title: 'Elige el uso de mayúsculas y el diseño de salida',
        description:
          'Elige PascalCase (#CamelCase) para accesibilidad, minúsculas o Conservar mayúsculas, además de salida en línea o separada por líneas.',
      },
      {
        title: 'Elige un estilo de separador para la descripción',
        description:
          'Elige un bloque de una línea, una lista vertical o un pie separado por puntos para que las etiquetas queden ordenadas debajo del texto de tu descripción.',
      },
      {
        title: 'Ejecuta el formateador',
        description:
          'La herramienta elimina la puntuación inválida, quita duplicados sin distinguir mayúsculas de minúsculas y reconstruye cada etiqueta con el uso de mayúsculas que elegiste.',
      },
      {
        title: 'Revisa el conteo y copia',
        description:
          'Verifica los duplicados eliminados y el conteo total de etiquetas frente al límite de 30 etiquetas de Instagram, y luego haz clic en Copiar hashtags.',
      },
      {
        title: 'Consejo: recorta etiquetas sobre el límite de la plataforma',
        description:
          'Si el conteo supera 30, elimina primero las etiquetas menos relevantes, ya que Instagram ignora las etiquetas extra que pasan el límite.',
      },
    ],
    examples: [
      {
        title: 'Convertir frases simples en hashtags CamelCase accesibles',
        input: 'content marketing, productivity hacks, Content Marketing',
        output: '#ContentMarketing #ProductivityHacks (1 duplicado eliminado)',
        explanation:
          'Poner en mayúscula cada límite de palabra ayuda a los lectores de pantalla a pronunciar correctamente las etiquetas de varias palabras.',
      },
      {
        title: 'Limpiar un volcado de etiquetas con duplicados y guiones',
        input: '#diseno-web, diseño web, #Diseno-Web, marketing',
        output: '#DisenoWeb #Marketing (duplicados y guiones eliminados)',
        explanation:
          'Los guiones rompen las etiquetas clicables, así que se eliminan y las variantes duplicadas se fusionan en una sola.',
      },
    ],
    benefits: [
      'Admite el formato #PascalCase accesible recomendado por las guías de accesibilidad digital',
      'Elimina automáticamente las etiquetas idénticas sin distinguir mayúsculas de minúsculas',
      'Elimina la puntuación no admitida (guiones, puntos, comas) que rompe las etiquetas clicables',
      'Lleva el conteo exacto de etiquetas frente a los límites de plataforma',
    ],
    useCases: [
      'Limpiar bancos de hashtags de campaña compartidos en hojas de cálculo de marketing',
      'Convertir palabras clave SEO de varias palabras en hashtags sociales clicables',
      'Actualizar listas antiguas de etiquetas en minúsculas al formato CamelCase accesible',
      'Generar pies de hashtags ordenados separados por puntos para publicaciones de Instagram',
    ],
    faqs: [
      {
        question: '¿Por qué se recomienda CamelCase / PascalCase para los hashtags?',
        answer:
          'Los lectores de pantalla dividen los límites de palabras en mayúscula (por ejemplo, #SocialMediaTools como "Social Media Tools") en lugar de intentar pronunciar una cadena larga en minúsculas como una sola palabra confusa.',
      },
      {
        question: '¿Por qué se eliminan los guiones y puntos dentro de las etiquetas?',
        answer:
          'La mayoría de las plataformas sociales terminan un hashtag clicable en el primer espacio, guion o signo de puntuación, así que eliminar los guiones mantiene la etiqueta completa intacta.',
      },
      {
        question: '¿Esto usa IA o adivina hashtags prohibidos?',
        answer:
          'No. Limpia, formatea y elimina duplicados de forma determinista solo con las etiquetas exactas que tú proporcionas.',
      },
      {
        question: '¿El Formateador de hashtags es gratis?',
        answer:
          'Sí, es gratis en tu navegador, sin registro, y tus etiquetas se procesan localmente sin subirse.',
      },
      {
        question: '¿Cuál es el límite de hashtags de Instagram?',
        answer:
          'Instagram permite hasta 30 hashtags por publicación, y esta herramienta cuenta tus etiquetas para que puedas mantenerte dentro de ese límite.',
      },
      {
        question: '¿Cómo elimina duplicados el Formateador de hashtags?',
        answer:
          'Compara las etiquetas sin distinguir mayúsculas de minúsculas, así que #ContentMarketing y #contentmarketing cuentan como la misma etiqueta y solo se conserva una.',
      },
      {
        question: '¿Puedo pegar hashtags con o sin el símbolo #?',
        answer:
          'Sí, ambas formas funcionan: la herramienta agrega un # a las palabras clave simples y conserva los que ya escribiste con #.',
      },
      {
        question: '¿Qué separadores puedo usar entre hashtags?',
        answer:
          'Puedes separar las etiquetas con comas, espacios, punto y coma o saltos de línea, y la herramienta maneja separadores mezclados en un solo pegado.',
      },
      {
        question: '¿Cuál es la diferencia entre hashtags CamelCase y en minúsculas?',
        answer:
          'CamelCase pone en mayúscula cada palabra (#SocialMedia) para la accesibilidad de lectores de pantalla, mientras que las minúsculas (#socialmedia) son una elección de estilo que se lee como una sola palabra.',
      },
      {
        question: '¿El Formateador de hashtags revisa si un hashtag está prohibido?',
        answer:
          'No, no revisa listas de prohibiciones ni datos en vivo de la plataforma; solo limpia y formatea las etiquetas que proporcionas.',
      },
      {
        question: '¿Puedo usar los hashtags con formato en TikTok y X también?',
        answer:
          'Sí, las etiquetas limpias funcionan en cualquier plataforma, aunque cada plataforma tiene sus propios límites, como el límite de 30 etiquetas en Instagram.',
      },
      {
        question: '¿Por qué desaparecen algunos de mis hashtags después de formatearlos?',
        answer:
          'Las etiquetas hechas solo de puntuación o caracteres no admitidos se eliminan, ya que de todos modos no funcionarían como hashtags clicables.',
      },
      {
        question: '¿Para qué sirven los pies de hashtags separados por puntos?',
        answer:
          'Los separadores de puntos empujan los hashtags por debajo del pliegue de la descripción en Instagram, manteniendo la descripción visible limpia mientras las etiquetas siguen funcionando.',
      },
      {
        question: '¿Puedo formatear hashtags en una lista vertical?',
        answer:
          'Sí, elige el diseño separado por líneas para poner un hashtag por línea, útil para comentarios y pies de descripción.',
      },
      {
        question: '¿El Formateador de hashtags funciona con palabras en otros idiomas?',
        answer:
          'Sí, conserva las letras de otros alfabetos en la etiqueta, siempre que la plataforma las admita en hashtags.',
      },
      {
        question: '¿Cuántos hashtags debo usar por publicación?',
        answer:
          'No hay un número único correcto; usa etiquetas realmente relevantes para la publicación y deja que el contador te mantenga por debajo del límite de la plataforma.',
      },
      {
        question: '¿Puedo guardar un grupo de hashtags para reutilizarlo?',
        answer:
          'La herramienta no guarda grupos, así que copia el bloque con formato en tus propias notas u hoja de cálculo para reutilizarlo después.',
      },
      {
        question: '¿Por qué Conservar mayúsculas mantiene mi capitalización original?',
        answer:
          'Conservar mayúsculas es para etiquetas de marca o siglas que quieres exactamente como las escribiste, mientras que los otros modos estandarizan todas las etiquetas de la misma forma.',
      },
      {
        question: '¿Mis hashtags se suben a un servidor?',
        answer:
          'No, todo el formato ocurre localmente en tu navegador, así que tus listas de palabras clave y etiquetas de campaña nunca salen de tu dispositivo.',
      },
      {
        question: '¿Qué debo hacer si un hashtag con formato sigue sin funcionar en una plataforma?',
        answer:
          'Revisa las reglas propias de la plataforma para esa etiqueta, ya que algunas plataformas bloquean ciertas palabras o limitan la longitud de la etiqueta aunque el formato esté limpio.',
      },
    ],
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
    instructions: [
      {
        title: 'Elige una estructura de publicación',
        description:
          'Elige entre las cinco plantillas deterministas de la barra superior según tu objetivo.',
      },
      {
        title: 'Completa tu propio gancho, puntos y llamada a la acción',
        description:
          'Escribe tu gancho inicial auténtico, el contexto del problema, los puntos clave en viñetas (uno por línea), la llamada a la acción y los hashtags.',
      },
      {
        title: 'Revisa la vista previa en vivo',
        description:
          'Lee la publicación con formato tal como aparecerá, revisando el espaciado de párrafos y el orden del gancho, los puntos clave y la llamada a la acción.',
      },
      {
        title: 'Revisa el ajuste de caracteres y palabras',
        description:
          'Observa el contador en vivo frente al límite de 280 caracteres de X y los límites de Instagram o LinkedIn, y recorta las líneas que te pasen.',
      },
      {
        title: 'Copia y verifica la longitud',
        description:
          'Revisa la vista previa de la publicación con formato, confirma el ajuste de caracteres y palabras para X o Instagram/LinkedIn, y haz clic en Copiar descripción.',
      },
      {
        title: 'Consejo: prueba las mismas notas en otra plantilla',
        description:
          'Cambia de plantilla sin volver a escribir para comparar cómo se leen tu gancho y tus puntos como PAS, un tutorial o una lista de verificación antes de publicar.',
      },
    ],
    examples: [
      {
        title: 'Armar una publicación accionable de 3 pasos para LinkedIn',
        input: 'Gancho + Contexto + 3 puntos en viñetas + Llamada a la acción',
        output: 'Publicación numerada y limpia con espaciado de párrafos nítido y hashtags al pie.',
        explanation:
          'Estructura tus palabras exactas de forma determinista sin alterar tu voz ni inventar afirmaciones.',
      },
      {
        title: 'Convertir notas sueltas en una publicación Mito vs. Realidad',
        input: 'Mito: "Hay que publicar todos los días" · Realidad: "La constancia importa más que la frecuencia"',
        output: 'Publicación educativa con el mito y la realidad en bloques separados y claros',
        explanation:
          'La plantilla contrapone la idea errónea común con el dato correcto usando solo tu propio texto.',
      },
    ],
    benefits: [
      'Ensamblaje 100 % transparente y determinista, sin palabras de moda genéricas de IA ni datos inventados',
      'Impone una jerarquía visual limpia entre el gancho, los puntos clave y la llamada a la acción',
      'El contador en vivo de caracteres y palabras marca los límites de 280 caracteres de X y de IG/LinkedIn',
      'Permite probar cinco marcos clásicos con las mismas notas en un clic',
    ],
    useCases: [
      'Redactar anuncios consistentes de lanzamiento de producto para canales sociales',
      'Convertir notas sueltas de ingeniería o marketing en publicaciones legibles',
      'Dar formato a carruseles educativos o listas de consejos semanales',
      'Separar limpiamente los ganchos iniciales de las listas de valor antes de programar',
    ],
    faqs: [
      {
        question: '¿Esta herramienta usa un modelo de lenguaje de IA para reescribir mis palabras?',
        answer:
          'No. Es un creador de plantillas estructuradas puramente determinista que se ejecuta en tu navegador: cada oración de la vista previa proviene estrictamente de tus propias entradas.',
      },
      {
        question: '¿Cómo agrego más pasos o elementos de lista de verificación?',
        answer:
          'Simplemente presiona Enter para agregar líneas nuevas dentro del cuadro de texto de Puntos clave; cada línea no vacía se formatea automáticamente como elemento numerado, viñeta o casilla.',
      },
      {
        question: '¿Puedo conservar las líneas en blanco al pegar en Instagram después?',
        answer:
          'Sí. Si una app aún colapsa el espaciado en el móvil, pasa la descripción copiada por nuestro Formateador de saltos de línea para Instagram y bios para agregar espaciadores invisibles.',
      },
      {
        question: '¿El Creador de plantillas de descripciones es gratis?',
        answer:
          'Sí, es gratis en tu navegador, sin registro, y tus borradores se procesan localmente sin subirse.',
      },
      {
        question: '¿Qué es la plantilla PAS del Creador de plantillas de descripciones?',
        answer:
          'PAS significa Problema–Agitación–Solución: nombra el problema del lector, agudiza por qué duele y luego presenta tu solución y la llamada a la acción.',
      },
      {
        question: '¿Qué plantillas de descripción incluye este creador?',
        answer:
          'Incluye cinco plantillas: Problema–Agitación–Solución, Desglose accionable, Antes–Después–Puente, Lista de auditoría y Mito vs. Realidad.',
      },
      {
        question: '¿Puedo usar el Creador de plantillas de descripciones para publicaciones de LinkedIn?',
        answer:
          'Sí, el diseño estructurado de gancho, puntos clave y llamada a la acción funciona bien para LinkedIn, y el contador en vivo te ayuda a mantenerte dentro de sus límites.',
      },
      {
        question: '¿Puedo usar el Creador de plantillas de descripciones para descripciones de Instagram?',
        answer:
          'Sí, las plantillas se formatean limpiamente para descripciones de Instagram, y puedes agregar hashtags al final de la descripción creada.',
      },
      {
        question: '¿Qué es la plantilla de descripción Antes–Después–Puente?',
        answer:
          'Muestra la situación actual del lector, pinta el estado mejorado posterior y luego une la brecha con tu producto, método o consejo.',
      },
      {
        question: '¿Cómo funciona el contador de caracteres en el creador de descripciones?',
        answer:
          'Cuenta caracteres y palabras en vivo mientras escribes y marca cuando tu borrador supera límites como los 280 caracteres de X.',
      },
      {
        question: '¿Puedo cambiar de plantilla sin perder mi texto?',
        answer:
          'Sí, cambiar de plantilla reutiliza tu gancho, puntos y llamada a la acción existentes, así que puedes comparar estructuras sin volver a escribir.',
      },
      {
        question: '¿El creador agrega hashtags automáticamente?',
        answer:
          'No, solo coloca los hashtags que tú mismo escribes, así que tú controlas exactamente qué etiquetas aparecen en cada descripción.',
      },
      {
        question: '¿Qué hace bueno a un gancho para una descripción en redes sociales?',
        answer:
          'Un buen gancho expresa un beneficio claro, un dato sorprendente o un problema con el que identificarse en una sola línea corta que haga que el lector deje de desplazarse.',
      },
      {
        question: '¿Puedo usar el creador de descripciones para publicaciones de X (Twitter)?',
        answer:
          'Sí, el contador te avisa a los 280 caracteres, así que puedes recortar tu gancho y tus puntos clave hasta que la publicación quepa en un solo tuit.',
      },
      {
        question: '¿Para qué sirve la plantilla de descripción Mito vs. Realidad?',
        answer:
          'Empareja una idea errónea común con el dato correcto, lo que funciona bien para publicaciones educativas y para desmentir malos consejos en tu nicho.',
      },
      {
        question: '¿Puedo editar la descripción después de copiarla?',
        answer:
          'Sí, el texto copiado es texto plano, así que puedes ajustar palabras, emojis o saltos de línea en tu app de programación antes de publicar.',
      },
      {
        question: '¿El creador guarda mis descripciones?',
        answer:
          'No, los borradores viven solo en la pestaña de tu navegador, así que copia las descripciones terminadas en tus propias notas o programador antes de cerrar la página.',
      },
      {
        question: '¿Qué debo poner en el campo de llamada a la acción?',
        answer:
          'Escribe un solo paso siguiente claro, como comentar, guardar la publicación, hacer clic en tu enlace o seguir tu cuenta.',
      },
      {
        question: '¿Puedo usar el creador de descripciones para anuncios de lanzamiento de producto?',
        answer:
          'Sí, las plantillas PAS o Antes–Después–Puente son adecuadas para lanzamientos: plantea el problema, muestra el resultado y termina con dónde conseguirlo.',
      },
      {
        question: '¿Por qué el creador no reescribe ni mejora mis palabras?',
        answer:
          'Es deliberadamente determinista, así que tu voz y tus datos se mantienen exactamente como los escribiste en lugar de ser reemplazados por texto genérico generado.',
      },
    ],
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
    instructions: [
      {
        title: 'Escribe el nombre de la marca o del creador',
        description:
          'Escribe tu marca o nombre visible (por ejemplo, Utility Hub) para generar candidatos de handle limpios y consistentes.',
      },
      {
        title: 'Prueba variaciones o edita directamente',
        description:
          'Haz clic en cualquier píldora de variación o personaliza el Handle activo para probar prefijos o sufijos como get, use, hq o studio.',
      },
      {
        title: 'Revisa el cumplimiento de sintaxis por plataforma',
        description:
          'Revisa el estado de formato válido de cada candidato en X, Instagram, TikTok, YouTube, Threads y GitHub.',
      },
      {
        title: 'Corrige caracteres inválidos',
        description:
          'Si una plataforma marca un handle, elimina el carácter no permitido; por ejemplo, quita los guiones para X e Instagram, o los guiones bajos para GitHub.',
      },
      {
        title: 'Revisa la sintaxis y abre las URLs',
        description:
          'Revisa el estado de formato válido en X, Instagram, TikTok, YouTube, Threads y GitHub, y luego haz clic en Revisar URL para inspeccionar el estado real de registro.',
      },
      {
        title: 'Consejo: copia tu lista corta antes de registrar',
        description:
          'Copia los handles que pasan en todas las plataformas que te importan y luego regístralos uno por uno, empezando por la red donde tu audiencia es más grande.',
      },
    ],
    examples: [
      {
        title: 'Comparar handles con guion frente a guion bajo en las plataformas',
        input: 'Handle: utility-hub',
        output: 'Válido en GitHub y YouTube @handle · Inválido en X e Instagram (guiones no permitidos)',
        explanation:
          'Evita elegir un handle de marca que no pueda coincidir de forma idéntica en las principales redes sociales.',
      },
      {
        title: 'Probar un handle de 18 caracteres frente al límite de X',
        input: 'Handle: misuperemprendimiento',
        output: 'Válido en Instagram y TikTok · Inválido en X (supera los 15 caracteres)',
        explanation:
          'La validación marca de inmediato los candidatos que exceden el máximo estricto de 15 caracteres de X.',
      },
    ],
    benefits: [
      'Detecta temprano los desajustes de plataforma (como guiones que fallan en X/Instagram frente a permitidos en GitHub/YouTube)',
      'Aplica límites exactos de caracteres, como el máximo estricto de 15 caracteres de X',
      'Nunca finge insignias de disponibilidad en vivo sin conexión: ofrece enlaces clicables directos al perfil',
      'Incluye copia de @handle al portapapeles con un clic',
    ],
    useCases: [
      'Nombrar una startup, pódcast, boletín o proyecto de código abierto nuevo de forma consistente',
      'Encontrar prefijos o sufijos de respaldo cuando un handle exacto de una palabra está tomado',
      'Verificar si un handle propuesto de 18 caracteres supera el límite de 15 caracteres de X',
      'Preparar una lista de verificación de lanzamiento con todas las URLs oficiales de perfiles sociales',
    ],
    faqs: [
      {
        question: '¿Por qué esta herramienta no muestra insignias verdes de "Disponible" en vivo automáticamente?',
        answer:
          'Las principales redes sociales bloquean las verificaciones de disponibilidad desde el navegador sin autenticación (CORS) y limitan el rastreo automatizado de disponibilidad. En lugar de mostrar suposiciones poco fiables o inventadas, esta herramienta valida las reglas oficiales de sintaxis de la plataforma localmente y ofrece enlaces URL directos para verificar cada plataforma con precisión.',
      },
      {
        question: '¿Qué caracteres de handle funcionan en casi todas las redes principales?',
        answer:
          'Los caracteres alfanuméricos en minúsculas (a–z, 0–9) y los guiones bajos (_) dentro de 4–15 caracteres funcionan a la vez en X, Instagram, TikTok, YouTube y Threads.',
      },
      {
        question: '¿Por qué GitHub rechaza los guiones bajos en los handles?',
        answer:
          'Los nombres de usuario de GitHub solo permiten caracteres alfanuméricos y guiones simples que no estén al inicio ni al final, mientras que X e Instagram no permiten guiones.',
      },
      {
        question: '¿El Formateador de nombres de usuario es gratis?',
        answer:
          'Sí, es gratis en tu navegador, sin registro, y tus nombres de marca e ideas de handle se procesan localmente sin subirse.',
      },
      {
        question: '¿Cuál es la longitud máxima de handle en X?',
        answer:
          'Los nombres de usuario de X pueden tener como máximo 15 caracteres, así que esta herramienta marca cualquier candidato más largo para X.',
      },
      {
        question: '¿Cómo reviso si un handle social está realmente disponible?',
        answer:
          'Haz clic en el enlace Revisar URL de cada plataforma para abrir la página de perfil en vivo; si la página muestra un perfil real, el handle está tomado.',
      },
      {
        question: '¿Por qué los guiones funcionan en GitHub pero no en X o Instagram?',
        answer:
          'Cada plataforma define sus propios caracteres permitidos: GitHub permite guiones, mientras que X e Instagram solo permiten letras, números y guiones bajos.',
      },
      {
        question: '¿Qué prefijos de handle debo probar si mi nombre exacto está tomado?',
        answer:
          'Los prefijos y sufijos comunes incluyen get, use, the, hq, studio, official y app; la herramienta genera estas variaciones para que las pruebes.',
      },
      {
        question: '¿El Formateador de nombres de usuario puede revisar handles de YouTube?',
        answer:
          'Sí, valida los candidatos con las reglas de caracteres de @handle de YouTube y te da un enlace directo para revisar el estado en vivo del handle.',
      },
      {
        question: '¿Cuál es la longitud mínima de handle en la mayoría de las plataformas?',
        answer:
          'La mayoría de las plataformas exigen al menos unos pocos caracteres, y los handles que funcionan en X, Instagram, TikTok, YouTube y Threads suelen tener 4–15 caracteres.',
      },
      {
        question: '¿Mi handle debe coincidir en todas las plataformas sociales?',
        answer:
          'Los handles coincidentes hacen que tu marca sea más fácil de encontrar y más difícil de suplantar, así que busca un handle que pase las reglas en todas las plataformas que uses.',
      },
      {
        question: '¿Puedo usar números en mi handle social?',
        answer:
          'Sí, los números están permitidos en las seis plataformas que revisa esta herramienta, aunque empezar un handle con un número puede verse menos limpio.',
      },
      {
        question: '¿Por qué la herramienta dice que mi handle es válido pero la plataforma lo rechaza?',
        answer:
          'La validez de sintaxis es solo una verificación; la plataforma también puede rechazar un handle porque ya está tomado, reservado o bloqueado por razones de política.',
      },
      {
        question: '¿El Formateador de nombres de usuario revisa handles de Threads?',
        answer:
          'Sí, valida los candidatos con las reglas de nombre de usuario de Threads junto con X, Instagram, TikTok, YouTube y GitHub.',
      },
      {
        question: '¿Puedo usar puntos en un handle social?',
        answer:
          'Instagram permite puntos en los nombres de usuario, pero X, TikTok y GitHub no, así que un handle con puntos no coincidirá en todas partes.',
      },
      {
        question: '¿Cómo elijo un handle para una startup o pódcast nuevo?',
        answer:
          'Escribe tu nombre de marca, haz una lista corta de las variaciones que pasan en todas las plataformas y luego registra el mismo en todas partes antes de anunciarlo.',
      },
      {
        question: '¿Puedo probar un handle con guiones bajos en GitHub?',
        answer:
          'Puedes probarlo, pero GitHub rechazará los guiones bajos, así que la herramienta lo marca como inválido para GitHub aunque pase en X e Instagram.',
      },
      {
        question: '¿Mis ideas de nombre de marca se suben a un servidor?',
        answer:
          'No, toda la generación y validación de handles ocurre localmente en tu navegador, así que tus ideas de nombres nunca salen de tu dispositivo.',
      },
      {
        question: '¿Qué debo hacer si mi handle ideal está tomado en una plataforma?',
        answer:
          'Prueba un prefijo o sufijo consistente en todas las plataformas en lugar de un nombre distinto en una red, para que tu marca siga siendo fácil de encontrar.',
      },
      {
        question: '¿Puedo copiar un handle directamente desde la herramienta?',
        answer:
          'Sí, la herramienta incluye copia con un clic para el handle activo, para que puedas pegarlo en formularios de registro sin volver a escribirlo.',
      },
    ],
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
    instructions: [
      {
        title: 'Agrega varios archivos PDF',
        description:
          'Selecciona dos o más archivos .pdf sin cifrar de tu dispositivo; cada archivo se valida con un encabezado %PDF antes de entrar en la cola.',
      },
      {
        title: 'Revisa el conteo de páginas y los tamaños',
        description:
          'Revisa el conteo de páginas y el tamaño en bytes que se muestra para cada documento en cola para confirmar que agregaste los archivos correctos.',
      },
      {
        title: 'Ordena la secuencia de combinación',
        description:
          'Usa las flechas de subir y bajar para ordenar capítulos, apéndices o facturas antes de combinar.',
      },
      {
        title: 'Nombra tu archivo de salida',
        description:
          'Escribe un nombre de archivo personalizado si quieres, para que el documento combinado sea fácil de encontrar después.',
      },
      {
        title: 'Combina y descarga',
        description:
          'Haz clic en Combinar PDFs y descargar para unir los archivos localmente y guardar el resultado.',
      },
      {
        title: 'Verifica el documento combinado',
        description:
          'Abre el PDF descargado y revisa el orden de las páginas y el conteo total de páginas; vuelve a ejecutarlo con un orden corregido si algo está fuera de lugar.',
      },
    ],
    examples: [
      {
        title: 'Combinar una portada de factura y un paquete de recibos',
        input: 'portada.pdf (1 página) + recibos.pdf (4 páginas)',
        output: 'documento-combinado.pdf (5 páginas)',
        explanation:
          'Copia todas las páginas vectoriales, fuentes e imágenes incrustadas en un solo contenedor PDF.',
      },
      {
        title: 'Armar un paquete de propuesta para un cliente',
        input: 'propuesta.pdf (6 páginas) + precios.pdf (2 páginas) + terminos.pdf (3 páginas)',
        output: 'propuesta-completa.pdf (11 páginas)',
        explanation:
          'Los tres documentos se unen en el orden elegido, con el texto y los enlaces intactos.',
      },
    ],
    benefits: [
      'Sin subidas de archivos: los contratos, declaraciones de impuestos y acuerdos de confidencialidad se quedan estrictamente en tu equipo',
      'Muestra el conteo exacto de páginas y el tamaño en bytes por documento en cola',
      'Valida de inmediato los PDF mal formados o cifrados con contraseña al subirlos',
      'Sin marcas de agua, límites de páginas ni límites diarios',
    ],
    useCases: [
      'Agrupar propuestas de clientes, formularios firmados y apéndices de precios',
      'Combinar documentos fiscales escaneados de varias partes antes de presentarlos',
      'Unir diapositivas de clases o guías de estudio en un solo paquete imprimible',
      'Armar facturas mensuales de gastos en un solo PDF de contabilidad',
    ],
    faqs: [
      {
        question: '¿Esta herramienta puede combinar archivos PDF protegidos con contraseña?',
        answer:
          'La biblioteca pdf-lib del navegador requiere PDF sin cifrar, a menos que se desbloqueen primero. Si se sube un archivo cifrado, el validador te avisa claramente en lugar de fallar en silencio.',
      },
      {
        question: '¿Se conservan las fuentes vectoriales y los hipervínculos clicables?',
        answer:
          'Sí. Los flujos de página PDF estándar, las fuentes incrustadas y las rutas vectoriales se copian directamente con PDFDocument.copyPages() sin convertir las páginas en imágenes borrosas.',
      },
      {
        question: '¿Hay un límite de subida al servidor?',
        answer:
          'Ningún archivo se sube jamás: el procesamiento se ejecuta por completo dentro de la memoria de la pestaña de tu navegador.',
      },
      {
        question: '¿La herramienta Combinar PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin marcas de agua, límites de páginas ni límites diarios, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Cuántos archivos PDF puedo combinar a la vez?',
        answer:
          'Puedes poner en cola tantos como la memoria de tu navegador maneje con comodidad. Se muestra el conteo de páginas y el tamaño de cada archivo para que puedas juzgar antes de combinar.',
      },
      {
        question: '¿Puedo reordenar los PDF después de agregarlos?',
        answer:
          'Sí, usa las flechas de subir y bajar junto a cada archivo para fijar el orden exacto de combinación antes de unirlos.',
      },
      {
        question: '¿La combinación cambiará la calidad de mis PDF?',
        answer:
          'No, las páginas se copian como datos vectoriales, así que el texto, las fuentes y las imágenes mantienen su calidad original.',
      },
      {
        question: '¿El PDF combinado conserva marcadores o esquemas?',
        answer:
          'El contenido de las páginas se conserva por completo, pero los esquemas y marcadores del documento pueden no transferirse al archivo combinado.',
      },
      {
        question: '¿Puedo combinar PDF escaneados?',
        answer:
          'Sí, las páginas escaneadas se copian como imágenes en el archivo combinado igual que cualquier otra página.',
      },
      {
        question: '¿Qué tipos de archivo puedo combinar con esta herramienta?',
        answer:
          'Solo archivos PDF (.pdf). Las imágenes deben convertirse primero con la herramienta Imágenes a PDF antes de poder combinarse.',
      },
      {
        question: '¿Puedo elegir el nombre del archivo de salida del PDF combinado?',
        answer:
          'Sí, escribe un nombre de archivo personalizado antes de hacer clic en Combinar; de lo contrario, se usa un nombre predeterminado.',
      },
      {
        question: '¿La herramienta Combinar PDF funciona en el móvil?',
        answer:
          'Sí, funciona en navegadores móviles modernos, aunque los archivos muy grandes se combinan más rápido en una computadora de escritorio.',
      },
      {
        question: '¿Mis archivos son privados cuando combino PDF aquí?',
        answer:
          'Sí, todo ocurre localmente en la pestaña de tu navegador y ningún archivo se sube a ningún servidor.',
      },
      {
        question: '¿Qué pasa si uno de mis PDF está dañado?',
        answer:
          'El validador revisa el encabezado %PDF de cada archivo y te avisa sobre archivos mal formados o cifrados antes de que empiece la combinación.',
      },
      {
        question: '¿Puedo combinar PDF de distintos tamaños de página?',
        answer:
          'Sí, cada página conserva su tamaño y orientación originales en el documento combinado.',
      },
      {
        question: '¿El PDF combinado seguirá siendo buscable?',
        answer:
          'Sí, los PDF basados en texto mantienen el texto seleccionable y buscable porque las páginas se copian, no se convierten en imágenes.',
      },
      {
        question: '¿Puedo combinar un PDF consigo mismo?',
        answer:
          'Sí, puedes agregar el mismo archivo más de una vez si necesitas que una página o documento se repita en el resultado.',
      },
      {
        question: '¿Hay un tamaño máximo de archivo para combinar PDF?',
        answer:
          'No hay un límite fijo; el límite práctico es la memoria del navegador disponible en tu dispositivo.',
      },
      {
        question: '¿Qué debo hacer si la descarga combinada no empieza?',
        answer:
          'Revisa la configuración de descargas y el bloqueador de ventanas emergentes de tu navegador, y luego haz clic en Combinar de nuevo; el archivo se genera localmente cada vez.',
      },
      {
        question: '¿Puedo combinar PDF y luego dividir el resultado?',
        answer:
          'Sí, descarga el PDF combinado y ábrelo en la herramienta Dividir PDF para extraer las páginas que necesites.',
      },
    ],
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
    instructions: [
      {
        title: 'Carga tu documento PDF',
        description:
          'Elige cualquier archivo PDF sin cifrar; la herramienta valida el encabezado y muestra el conteo total de páginas.',
      },
      {
        title: 'Elige el modo de división',
        description:
          'Selecciona Extraer rangos de páginas, Solo páginas impares, Solo páginas pares o Dividir todas las páginas individuales.',
      },
      {
        title: 'Escribe las páginas o rangos',
        description:
          'Para el modo de rangos, escribe páginas como "1-3, 5, 9-12"; el analizador marca rangos fuera de límites o invertidos antes de guardar.',
      },
      {
        title: 'Revisa tu selección',
        description:
          'Confirma que el modo y la lista de páginas coincidan con lo que necesitas, sobre todo para extracciones de páginas pares o impares y divisiones completas.',
      },
      {
        title: 'Divide y descarga',
        description:
          'Haz clic en Dividir y descargar PDF para generar tu documento recortado localmente.',
      },
      {
        title: 'Revisa el resultado y repite si hace falta',
        description:
          'Abre el archivo descargado para confirmar que se extrajeron las páginas correctas; para el modo de división completa, permite varias descargas en tu navegador si te lo pide.',
      },
    ],
    examples: [
      {
        title: 'Extraer páginas de firma de un acuerdo de 12 páginas',
        input: 'Páginas a extraer: 1, 10-12',
        output: 'contrato-extraido.pdf (4 páginas)',
        explanation:
          'Exporta las páginas 1, 10, 11 y 12 en secuencia ascendente sin tocar tu archivo original.',
      },
      {
        title: 'Separar solo las páginas impares de un escaneo dúplex',
        input: 'Modo: Solo páginas impares · PDF de 8 páginas',
        output: 'documento-impares.pdf (páginas 1, 3, 5, 7)',
        explanation:
          'Aísla las páginas impares para rearmar un documento escaneado a doble cara.',
      },
    ],
    benefits: [
      'El analizador flexible de rangos detecta rangos fuera de límites o invertidos antes de guardar',
      'Conserva la nitidez vectorial original y la selección de texto',
      'Admite extracción de páginas pares o impares para flujos de escáner dúplex',
      'Protege los documentos financieros y legales privados de los servidores de subida de terceros',
    ],
    useCases: [
      'Extraer solo los capítulos relevantes de un informe grande antes de compartirlo',
      'Separar facturas individuales agrupadas dentro de un PDF maestro de facturación',
      'Extraer páginas de firma o apéndices de contratos de varias páginas',
      'Recuperar escaneos de páginas pares o impares de alimentadores de documentos de una cara',
    ],
    faqs: [
      {
        question: '¿Por qué el modo Dividir todas las páginas individuales tiene un límite de 25 páginas?',
        answer:
          'Los navegadores suelen bloquear o preguntar cuando un sitio activa más de unas 25 descargas simultáneas de archivos. Usa Extraer rangos de páginas para extracciones más grandes de varias partes.',
      },
      {
        question: '¿La división altera mi archivo PDF original?',
        answer:
          'No. El navegador lee una copia local en memoria y genera un nuevo PDF descargado.',
      },
      {
        question: '¿Qué sintaxis puedo escribir en Páginas a extraer?',
        answer:
          'Combina números individuales y rangos con guion separados por comas, como "1-3, 5, 9-12".',
      },
      {
        question: '¿La herramienta Dividir PDF es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua ni límites de páginas más allá del límite de 25 páginas del modo de división completa.',
      },
      {
        question: '¿Puedo extraer solo las páginas impares de un PDF?',
        answer:
          'Sí, elige Solo páginas impares; es útil para flujos de escaneo dúplex.',
      },
      {
        question: '¿Puedo extraer solo las páginas pares de un PDF?',
        answer:
          'Sí, elige Solo páginas pares para extraer solo las páginas con números pares.',
      },
      {
        question: '¿Qué pasa si escribo un número de página que no existe?',
        answer:
          'El analizador de rangos valida tu entrada y te avisa sobre rangos fuera de límites o invertidos antes de guardar nada.',
      },
      {
        question: '¿Puedo extraer páginas PDF en un orden personalizado, como 10-12 y luego 1?',
        answer:
          'Las páginas extraídas se guardan en orden ascendente. Para reordenarlas después, usa la herramienta Reordenar páginas PDF.',
      },
      {
        question: '¿La división de un PDF mantiene el texto buscable?',
        answer:
          'Sí, las páginas se copian como datos vectoriales, así que el texto se mantiene seleccionable y buscable en el archivo extraído.',
      },
      {
        question: '¿Puedo dividir un PDF protegido con contraseña?',
        answer:
          'No, los PDF cifrados deben desbloquearse primero; la herramienta solo acepta archivos sin cifrar.',
      },
      {
        question: '¿Puedo dividir un PDF escaneado?',
        answer:
          'Sí, las páginas escaneadas se extraen exactamente igual que las páginas de texto.',
      },
      {
        question: '¿El PDF extraído mantendrá su calidad original?',
        answer:
          'Sí, no ocurre recompresión ni conversión a imágenes durante la extracción, así que cada página extraída conserva la calidad exacta del PDF original.',
      },
      {
        question: '¿Cómo divido un PDF en archivos de una página?',
        answer:
          'Elige Dividir todas las páginas individuales; cada página se descarga como su propio PDF, hasta 25 páginas por ejecución.',
      },
      {
        question: '¿Puedo descargar solo la primera página de un PDF?',
        answer:
          'Sí, elige Extraer rangos de páginas y escribe "1" en el campo Páginas a extraer.',
      },
      {
        question: '¿La herramienta Dividir PDF sube mi archivo a algún lugar?',
        answer:
          'No, la división se ejecuta por completo en tu navegador; tu archivo nunca sale de tu dispositivo.',
      },
      {
        question: '¿Puedo usar la herramienta Dividir PDF en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles modernos, aunque los archivos muy grandes se dividen con más comodidad en una computadora de escritorio.',
      },
      {
        question: '¿Cuál es la diferencia entre Extraer rangos de páginas y Dividir?',
        answer:
          'Los rangos combinan las páginas seleccionadas en un solo PDF nuevo, mientras que Dividir crea un PDF separado por página.',
      },
      {
        question: '¿Puedo extraer las páginas 1-3 y la página 5 de una vez?',
        answer:
          'Sí, escribe "1-3, 5": los números individuales y los rangos con guion pueden combinarse con comas.',
      },
      {
        question: '¿Los marcadores sobrevivirán cuando divida un PDF?',
        answer:
          'El contenido de las páginas se conserva, pero los esquemas y marcadores del documento generalmente no se transfieren a los archivos extraídos.',
      },
      {
        question: 'Mi descarga no empezó después de dividir: ¿qué debo hacer?',
        answer:
          'Permite varias descargas para este sitio en tu navegador y luego haz clic en Dividir de nuevo; el archivo se genera localmente cada vez.',
      },
    ],
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
    instructions: [
      {
        title: 'Selecciona una o más imágenes',
        description:
          'Elige imágenes JPG, PNG o WebP; las miniaturas y las dimensiones en píxeles aparecen de inmediato.',
      },
      {
        title: 'Ordena las imágenes',
        description:
          'Usa las flechas de subir y bajar para fijar la secuencia de páginas de tu PDF.',
      },
      {
        title: 'Configura el tamaño de página y los márgenes',
        description:
          'Elige A4 vertical, Carta EE. UU. o Dimensiones exactas de la imagen, y define un margen para los tamaños de página estándar.',
      },
      {
        title: 'Nombra tu archivo de salida',
        description:
          'Escribe un nombre de archivo personalizado para que el PDF terminado sea fácil de identificar.',
      },
      {
        title: 'Genera el PDF',
        description:
          'Haz clic en Convertir imágenes a PDF para crear el documento localmente y descargarlo al instante.',
      },
      {
        title: 'Revisa y ajusta',
        description:
          'Abre el PDF para revisar el diseño y los márgenes; reordena las imágenes o cambia la configuración de página y vuelve a convertir si alguna página se ve mal.',
      },
    ],
    examples: [
      {
        title: 'Compilar recibos de gastos en páginas A4 estándar',
        input: '3 JPG de recibos · A4 vertical · Margen de 24 pt',
        output: 'imagenes-paquete.pdf (3 páginas A4 centradas con proporción conservada)',
        explanation:
          'Escala cada imagen proporcionalmente para que quepa dentro de los márgenes imprimibles A4 sin distorsión.',
      },
      {
        title: 'Convertir una sola captura en un PDF de una página',
        input: '1 captura PNG · Dimensiones exactas de la imagen',
        output: 'captura.pdf (1 página del tamaño exacto de la imagen)',
        explanation:
          'El modo de dimensiones exactas crea una página por imagen a su tamaño nativo, sin márgenes.',
      },
    ],
    benefits: [
      'Incrusta flujos nativos JPG y PNG directamente y convierte WebP limpiamente con Canvas',
      'Conserva la proporción completa de la imagen sin estirar ni recortar',
      'Admite hojas imprimibles A4 / Carta EE. UU., así como páginas exactas de imagen sin margen',
      'Mantiene fotos de identificación, recibos y documentos privados estrictamente sin conexión en la RAM del navegador',
    ],
    useCases: [
      'Convertir fotos de recibos del teléfono en un PDF limpio de gastos mensuales',
      'Compilar maquetas de diseño o capturas de interfaz en una presentación de revisión A4',
      'Convertir páginas de documentos escaneados en un solo PDF para subir',
      'Empaquetar láminas de arte de portafolio sin compresión en la nube',
    ],
    faqs: [
      {
        question: '¿Cómo maneja la herramienta las imágenes WebP?',
        answer:
          'Como la especificación PDF incrusta de forma nativa JPEG y PNG en lugar de WebP, la herramienta decodifica las imágenes WebP sin problema con HTML5 Canvas en marcos PNG sin pérdida antes de incrustarlas.',
      },
      {
        question: '¿Las fotos verticales y horizontales se estirarán para caber en A4?',
        answer:
          'No. Las imágenes se escalan proporcionalmente usando Math.min(maxWidth/imgWidth, maxHeight/imgHeight) y se centran en la página.',
      },
      {
        question: '¿Las miniaturas de imágenes se suben a algún lugar?',
        answer:
          'No. Las vistas previas usan URLs de objeto locales temporales dentro de la pestaña de tu navegador.',
      },
      {
        question: '¿La herramienta Imágenes a PDF es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua y sin límite en la cantidad de imágenes que conviertes.',
      },
      {
        question: '¿Qué formatos de imagen puedo convertir a PDF?',
        answer:
          'Se admiten JPG, PNG y WebP, así que puedes convertir fotos, capturas de pantalla e imágenes web en un solo PDF.',
      },
      {
        question: '¿Puedo convertir una sola imagen a PDF?',
        answer:
          'Sí, una imagen produce un PDF de una página, lo que funciona bien para compartir una sola foto o un documento escaneado como archivo.',
      },
      {
        question: '¿Puedo reordenar las imágenes antes de convertirlas a PDF?',
        answer:
          'Sí, usa las flechas de subir y bajar para ordenar las páginas antes de generar el PDF.',
      },
      {
        question: '¿Qué tamaños de página hay disponibles al convertir imágenes a PDF?',
        answer:
          'A4 vertical, Carta EE. UU. y Dimensiones exactas de la imagen, que crea una página por imagen a su tamaño nativo.',
      },
      {
        question: '¿Mis imágenes se recortarán al convertirlas a PDF?',
        answer:
          'No, las imágenes se escalan proporcionalmente y se centran; nada se recorta ni se estira.',
      },
      {
        question: '¿Puedo agregar márgenes alrededor de mis imágenes en el PDF?',
        answer:
          'Sí, define un margen (por ejemplo, 24 pt) cuando uses tamaños de página A4 o Carta EE. UU.',
      },
      {
        question: '¿Convertir imágenes a PDF reduce su calidad?',
        answer:
          'Los flujos JPG y PNG se incrustan de forma nativa, y WebP se convierte con Canvas a PNG sin pérdida, así que la calidad se conserva.',
      },
      {
        question: '¿Puedo convertir fotos HEIC de mi iPhone a PDF?',
        answer:
          'No directamente; convierte HEIC a JPG o PNG primero y luego usa esta herramienta.',
      },
      {
        question: '¿Mis fotos se suben a un servidor al convertirlas a PDF?',
        answer:
          'No, la conversión se ejecuta localmente en tu navegador y las vistas previas usan URLs de objeto locales temporales.',
      },
      {
        question: '¿Puedo usar la herramienta Imágenes a PDF en el móvil?',
        answer:
          'Sí, funciona en navegadores móviles; elige imágenes directo desde tu biblioteca de fotos.',
      },
      {
        question: '¿Qué pasa con imágenes muy grandes?',
        answer:
          'Las imágenes grandes se incrustan a resolución completa, así que el PDF resultante puede ser grande; comprímelas primero si el tamaño del archivo importa.',
      },
      {
        question: '¿Puedo mezclar JPG, PNG y WebP en un solo PDF?',
        answer:
          'Sí, puedes combinar los tres formatos en un solo documento, y las páginas se mantienen en el orden en que las organizaste.',
      },
      {
        question: '¿Las páginas del PDF estarán en el mismo orden que mis imágenes?',
        answer:
          'Sí, las páginas siguen el orden que se muestra en la lista de imágenes.',
      },
      {
        question: '¿Puedo definir un nombre de archivo personalizado para el PDF?',
        answer:
          'Sí, escribe tu nombre de archivo preferido antes de convertir, y el PDF descargado usará ese nombre en lugar del nombre predeterminado.',
      },
      {
        question: '¿La herramienta conserva la transparencia de las imágenes?',
        answer:
          'La transparencia PNG se conserva en páginas de Dimensiones exactas de la imagen; en páginas A4 o Carta, la imagen queda sobre un fondo blanco de página.',
      },
      {
        question: 'Mi PDF no se descargó: ¿qué debo hacer?',
        answer:
          'Revisa los permisos de descarga de tu navegador e inténtalo de nuevo; el archivo se genera localmente en tu pestaña.',
      },
    ],
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
    instructions: [
      {
        title: 'Elige un archivo PDF',
        description:
          'Selecciona cualquier documento PDF sin cifrar; PDF.js lee el conteo total de páginas de inmediato.',
      },
      {
        title: 'Elige las páginas a convertir',
        description:
          'Escribe "todas" o un rango de páginas (hasta 20 páginas por lote), como "1-3, 5".',
      },
      {
        title: 'Elige el formato y la escala',
        description:
          'Elige PNG para texto nítido o JPG para archivos más pequeños con muchas fotos, y selecciona resolución 1.0×, 1.5× o 2.0×.',
      },
      {
        title: 'Convierte las páginas',
        description:
          'Inicia la conversión y espera a que aparezcan las vistas previas de las páginas; los lotes más grandes tardan un poco más.',
      },
      {
        title: 'Revisa las vistas previas',
        description:
          'Inspecciona cada miniatura generada para verificar nitidez y contenido correcto antes de descargar.',
      },
      {
        title: 'Descarga tus imágenes',
        description:
          'Haz clic en .PNG o .JPG en cualquier tarjeta de página para guardar esa imagen; repite el lote para las páginas restantes si hace falta.',
      },
    ],
    examples: [
      {
        title: 'Exportar diapositivas de presentación para compartir en redes',
        input: 'Páginas: 1-3 · Formato: PNG · Escala: 2.0× (144 DPI)',
        output: '3 imágenes PNG nítidas a 2× listas para LinkedIn o blogs',
        explanation:
          'La conversión en canvas de alta escala mantiene nítidos los diagramas y la tipografía.',
      },
      {
        title: 'Guardar un certificado de una página como foto JPG',
        input: 'Página: 1 · Formato: JPG · Escala: 1.5×',
        output: 'certificado-pagina-1.jpg compacto y listo para compartir',
        explanation:
          'JPG produce un archivo pequeño ideal para enviar por correo o mensajería.',
      },
    ],
    benefits: [
      'Usa el Web Worker de PDF.js incluido en Vite, sin solicitudes de scripts CDN externos',
      'Rellena automáticamente el fondo blanco del canvas al exportar PDF transparentes a JPG',
      'Permite apuntar a rangos exactos de páginas en lugar de convertir un archivo completo de 100 páginas',
      'La conversión privada en canvas del navegador protege los documentos sensibles',
    ],
    useCases: [
      'Convertir diapositivas de presentaciones PDF en gráficos para blogs o redes sociales',
      'Guardar una sola página de certificado o boleto firmado como foto en el móvil',
      'Generar vistas previas nítidas de interfaz de folletos PDF imprimibles',
      'Inspeccionar visualmente la representación de fuentes y diseño fuera de apps de PDF dedicadas',
    ],
    faqs: [
      {
        question: '¿Debo elegir PNG o JPG para las páginas PDF?',
        answer:
          'Elige PNG para diapositivas, documentos de texto, recibos y gráficos donde importan los bordes nítidos. Elige JPG al exportar folletos con muchas fotos para tamaños de archivo más pequeños.',
      },
      {
        question: '¿Por qué PDF a imágenes convierte hasta 20 páginas por lote?',
        answer:
          'Los canvas de alta resolución 2× consumen mucha GPU y RAM por página; convertir hasta 20 páginas por lote mantiene las pestañas del navegador ágiles en teléfonos y laptops.',
      },
      {
        question: '¿Funciona con PDF protegidos con contraseña?',
        answer:
          'Los PDF cifrados deben desbloquearse antes de convertirlos localmente, porque la herramienta no puede leer las páginas de un archivo que sigue bloqueado.',
      },
      {
        question: '¿La herramienta PDF a imágenes es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua; la conversión ocurre localmente en tu navegador.',
      },
      {
        question: '¿Qué resolución debo elegir para redes sociales?',
        answer:
          '2.0× da los resultados más nítidos para publicaciones y blogs, mientras que 1.0× basta para vistas previas rápidas.',
      },
      {
        question: '¿Puedo exportar solo una página como imagen?',
        answer:
          'Sí, escribe ese número de página en el campo de rango de páginas.',
      },
      {
        question: '¿Puedo exportar todas las páginas de un PDF a la vez?',
        answer:
          'Puedes convertir hasta 20 páginas por lote; repite el proceso para documentos más largos.',
      },
      {
        question: '¿Por qué mi exportación JPG muestra un fondo blanco?',
        answer:
          'JPG no tiene transparencia, así que las áreas transparentes del PDF se rellenan automáticamente de blanco.',
      },
      {
        question: '¿PDF a imágenes mantiene el texto nítido?',
        answer:
          'Sí, las páginas se convierten con escala de hasta 2× con PDF.js, manteniendo nítidos el texto y los diagramas.',
      },
      {
        question: '¿Puedo elegir qué páginas convertir en imágenes?',
        answer:
          'Sí, escribe "todas" o un rango como "1-3, 5" en el campo de páginas.',
      },
      {
        question: '¿Mis archivos PDF se suben a algún lugar?',
        answer:
          'No, la conversión ocurre en tu navegador con un worker local de PDF.js; nada sale de tu dispositivo.',
      },
      {
        question: '¿Puedo usar PDF a imágenes en mi teléfono?',
        answer:
          'Sí, aunque las conversiones de alta resolución usan más memoria, así que los lotes más pequeños funcionan mejor en teléfonos.',
      },
      {
        question: '¿Cuál es la diferencia entre escala 1.0×, 1.5× y 2.0×?',
        answer:
          'Las escalas más altas generan más píxeles por página, produciendo imágenes más grandes y nítidas; 2.0× equivale aproximadamente a 144 DPI.',
      },
      {
        question: '¿Puedo descargar todas las páginas convertidas con un clic?',
        answer:
          'Cada tarjeta de página tiene su propio botón de descarga .PNG o .JPG; descarga las páginas que necesites una por una.',
      },
      {
        question: '¿Los gráficos vectoriales y diagramas se mantendrán nítidos?',
        answer:
          'Sí, PDF.js rasteriza el contenido vectorial a la escala que elegiste, así que los diagramas y gráficos se mantienen nítidos.',
      },
      {
        question: '¿Por qué la conversión tarda en PDF grandes?',
        answer:
          'Cada página se dibuja en un canvas de alta resolución; convertir pocas páginas a la vez mantiene la pestaña ágil.',
      },
      {
        question: '¿Puedo convertir un PDF escaneado a imágenes?',
        answer:
          'Sí, las páginas escaneadas se convierten en imágenes exactamente como aparecen en el PDF.',
      },
      {
        question: '¿La herramienta PDF a imágenes funciona sin conexión?',
        answer:
          'Una vez cargada la página, la conversión se ejecuta localmente en tu navegador sin más solicitudes de red.',
      },
      {
        question: 'Mi imagen convertida se ve borrosa: ¿qué debo hacer?',
        answer:
          'Vuelve a convertir con escala 2.0× y elige PNG para páginas con mucho texto.',
      },
      {
        question: '¿Puedo usar las imágenes exportadas comercialmente?',
        answer:
          'Las imágenes son tuyas para usarlas como usarías el PDF original; respeta los derechos de autor del documento fuente.',
      },
    ],
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
    instructions: [
      {
        title: 'Carga tu PDF',
        description:
          'Selecciona el archivo PDF que contiene páginas de lado o invertidas.',
      },
      {
        title: 'Elige el ángulo de rotación',
        description:
          'Elige 90° en sentido horario, 90° en sentido antihorario o 180° según cómo estén desalineadas las páginas.',
      },
      {
        title: 'Elige el alcance de páginas',
        description:
          'Selecciona Todas las páginas, Rangos específicos, Impares o Pares; para rangos, escribe páginas como "2, 5-7".',
      },
      {
        title: 'Revisa la orientación actual',
        description:
          'Verifica qué páginas están realmente de lado para rotar solo las que lo necesitan.',
      },
      {
        title: 'Aplica y descarga',
        description:
          'Haz clic en Aplicar rotación y descargar PDF para guardar el archivo corregido de forma permanente.',
      },
      {
        title: 'Verifica y corrige lo que quede',
        description:
          'Abre el PDF descargado; si una página sigue de lado, ejecútalo de nuevo con otros 90° en la misma dirección.',
      },
    ],
    examples: [
      {
        title: 'Corregir un solo gráfico financiero rotado en la página 3',
        input: 'Rotación: 90° en sentido horario · Alcance: Rangos específicos de páginas (3)',
        output: 'Solo la página 3 rota en sentido horario; todas las demás páginas conservan su orientación.',
        explanation:
          'Suma 90° módulo 360 a los metadatos de rotación de página existentes sin convertir el texto en imagen.',
      },
      {
        title: 'Enderezar un lote de escaneos boca abajo',
        input: 'Rotación: 180° · Alcance: Todas las páginas',
        output: 'PDF completo enderezado y listo para enviar',
        explanation:
          'La rotación de 180° voltea cada página sin tocar el texto ni las imágenes incrustadas.',
      },
    ],
    benefits: [
      'Rotación sin pérdida: actualiza las marcas de orientación de página del PDF sin recomprimir texto ni imágenes',
      'Conserva limpiamente los ángulos de página existentes (calcula la rotación relativa módulo 360°)',
      'Apunta a rangos selectivos como "2, 5-7" sin rotar las páginas derechas',
      'Descarga instantánea en el navegador sin subida al servidor',
    ],
    useCases: [
      'Corregir lotes de escáner boca abajo en móviles o fotocopiadoras de oficina',
      'Rotar hojas de cálculo horizontales anchas dentro de informes mayormente verticales',
      'Corregir archivos adjuntos con orientación mixta después de combinar documentos',
      'Preparar presentaciones de cumplimiento orientadas limpiamente para portales',
    ],
    faqs: [
      {
        question: '¿Rotar páginas reduce la nitidez del texto o de las imágenes?',
        answer:
          'No. Establecer la propiedad de rotación de página del PDF es completamente sin pérdida y no recodifica fuentes ni imágenes incrustadas.',
      },
      {
        question: '¿Qué pasa si una página de mi PDF ya estaba rotada 90°?',
        answer:
          'El rotador lee el ángulo de rotación actual de cada página y suma el delta que elegiste módulo 360°, así que la orientación cambia de forma predecible respecto a cómo se ve la página ahora.',
      },
      {
        question: '¿Puedo rotar solo una página en un PDF de 20 páginas?',
        answer:
          'Sí. Elige "Rangos específicos de páginas" y escribe ese número exacto de página (por ejemplo, "7").',
      },
      {
        question: '¿El Rotador de páginas PDF es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua ni límites, y puedes rotar todos los PDF que necesites sin crear una cuenta.',
      },
      {
        question: '¿Puedo rotar todas las páginas de un PDF a la vez?',
        answer:
          'Sí, elige Todas las páginas y escoge 90° en sentido horario, 90° en sentido antihorario o 180°.',
      },
      {
        question: '¿Puedo rotar solo las páginas pares o impares?',
        answer:
          'Sí, elige el alcance Impares o Pares; es útil para corregir lotes de escaneo dúplex.',
      },
      {
        question: '¿Con qué ángulos puedo rotar las páginas PDF?',
        answer:
          'Puedes rotar 90° en sentido horario, 90° en sentido antihorario y 180°, así que cualquier página de lado o al revés se corrige con un clic.',
      },
      {
        question: '¿Puedo rotar una página PDF en un ángulo personalizado como 45°?',
        answer:
          'No, solo se admiten 90°, 180° y 270° (mediante rotaciones repetidas de 90°), ya que la rotación PDF se define en cuartos de vuelta.',
      },
      {
        question: '¿La rotación es permanente?',
        answer:
          'Sí, la rotación se escribe en el diccionario de páginas del PDF y se guarda en el archivo descargado.',
      },
      {
        question: '¿La rotación cambia el tamaño del archivo PDF?',
        answer:
          'Apenas; solo cambian los metadatos de orientación, así que el archivo se mantiene casi del mismo tamaño.',
      },
      {
        question: '¿Puedo rotar un PDF protegido con contraseña?',
        answer:
          'No, los PDF cifrados deben desbloquearse primero, porque la herramienta no puede cambiar las páginas de un archivo que sigue bloqueado.',
      },
      {
        question: '¿El Rotador de páginas PDF sube mi archivo?',
        answer:
          'No, la rotación se ejecuta por completo en tu navegador; tu archivo nunca sale de tu dispositivo.',
      },
      {
        question: '¿Puedo rotar páginas en un PDF escaneado?',
        answer:
          'Sí, las páginas escaneadas rotan igual que las páginas de texto, porque la rotación gira toda la imagen de la página sin leer su contenido.',
      },
      {
        question: '¿La rotación corregirá un PDF que se abre de lado en todos los visores?',
        answer:
          'Sí, el archivo guardado se abre en la orientación corregida en cualquier visor de PDF.',
      },
      {
        question: '¿Puedo rotar distintas páginas en distintas cantidades?',
        answer:
          'Ejecuta la herramienta una vez por ángulo: rota un rango, descarga, y luego rota otro rango en el resultado.',
      },
      {
        question: '¿Qué debo hacer si una página sigue de lado después de rotarla?',
        answer:
          'Revisa primero cómo se ve la página ahora y luego agrega otros 90° en la misma dirección, ya que la rotación es relativa al ángulo actual.',
      },
      {
        question: '¿La rotación afecta los enlaces clicables o los campos de formulario?',
        answer:
          'Los enlaces y las anotaciones rotan con la página, así que se mantienen alineados con el contenido.',
      },
      {
        question: '¿Puedo usar el Rotador de páginas PDF en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles modernos, así que puedes abrir un PDF en tu teléfono y rotar sus páginas allí.',
      },
      {
        question: '¿El PDF rotado se imprimirá correctamente?',
        answer:
          'Sí, las impresoras siguen la orientación de página guardada, así que las páginas rotadas se imprimen derechas.',
      },
      {
        question: 'Mi descarga no empezó: ¿qué debo hacer?',
        answer:
          'Permite las descargas para este sitio en la configuración de tu navegador y haz clic en Aplicar rotación de nuevo; el archivo se genera localmente.',
      },
    ],
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
    instructions: [
      {
        title: 'Carga tu documento PDF',
        description:
          'Selecciona un PDF sin cifrar; las vistas previas en miniatura se generan localmente hasta 30 páginas (con tarjetas de página y dimensiones para todas las páginas).',
      },
      {
        title: 'Revisa las tarjetas de páginas',
        description:
          'Cada tarjeta muestra su posición de salida actual y su índice de página original, para que puedas detectar páginas en blanco, duplicadas o fuera de lugar antes de cambiar nada.',
      },
      {
        title: 'Reordena, duplica o elimina',
        description:
          'Usa los botones de flecha para cambiar la secuencia, el ícono de copia para duplicar una hoja o el ícono de papelera para quitar páginas no deseadas.',
      },
      {
        title: 'Revisa el nuevo orden de páginas',
        description:
          'Escanea las posiciones actualizadas en cada tarjeta para confirmar que los apéndices, anexos y portadas queden exactamente donde pertenecen.',
      },
      {
        title: 'Guarda el PDF organizado',
        description:
          'Haz clic en Guardar PDF reordenado para compilar y descargar tu documento limpio.',
      },
      {
        title: 'Consejo: conserva el archivo original',
        description:
          'La herramienta nunca edita tu archivo fuente, así que consérvalo como respaldo. Si un PDF no carga, verifica que no esté protegido con contraseña ni cifrado.',
      },
    ],
    examples: [
      {
        title: 'Eliminar una página final en blanco y adelantar el apéndice',
        input: 'PDF de 5 páginas · Eliminar página 5 · Mover página 4 a la posición n.º 2',
        output: 'PDF actualizado de 4 páginas con contenido vectorial intacto',
        explanation:
          'Reconstruye limpiamente el árbol de páginas del documento en el orden que elegiste.',
      },
      {
        title: 'Duplicar una hoja de formulario imprimible dentro de un paquete',
        input: 'PDF de 3 páginas · Duplicar página 2',
        output: 'PDF de 4 páginas con la hoja de formulario repetida',
        explanation:
          'El ícono de copia duplica la página exacta para imprimir el formulario varias veces.',
      },
    ],
    benefits: [
      'Combina miniaturas visuales de PDF.js con copia de páginas sin pérdida de pdf-lib',
      'Protege contra guardar accidentalmente un PDF vacío de 0 páginas',
      'Muestra tanto la posición de salida actual como el índice de página original',
      'Sin subidas de archivos para registros confidenciales de recursos humanos, legales o médicos',
    ],
    useCases: [
      'Eliminar páginas en blanco accidentales producidas por escáneres dúplex de documentos',
      'Mover apéndices o anexos fuera de lugar a la secuencia correcta',
      'Duplicar páginas de formularios imprimibles u hojas de aprobación dentro de un paquete',
      'Limpiar PDF combinados antes de enviarlos a clientes',
    ],
    faqs: [
      {
        question: '¿Por qué las miniaturas solo se generan para las primeras 30 páginas?',
        answer:
          'Para mantener rápida la RAM del navegador en documentos enormes, las miniaturas en vivo se generan para las primeras 30 páginas, mientras que cada página sigue siendo totalmente reordenable y eliminable mediante su tarjeta.',
      },
      {
        question: '¿Reordenar páginas convierte el texto en imágenes?',
        answer:
          'No. Las miniaturas solo sirven para la vista previa visual dentro de la interfaz; la salida guardada usa pdf-lib copyPages() para conservar el texto vectorial original y los enlaces.',
      },
      {
        question: '¿Puedo deshacer la eliminación de todas las páginas?',
        answer:
          'El editor exige que quede al menos 1 página, y volver a subir el archivo fuente intacto restaura el original completo en cualquier momento.',
      },
      {
        question: '¿La herramienta Reordenar y eliminar páginas PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando reordeno sus páginas?',
        answer:
          'No. Tu PDF se procesa localmente en tu navegador y nunca se sube, así que los documentos confidenciales se quedan en tu dispositivo.',
      },
      {
        question: '¿Puedo eliminar varias páginas a la vez?',
        answer:
          'Cada tarjeta de página tiene su propio ícono de papelera, así que elimina las páginas una a la vez; el conteo de páginas y las posiciones se actualizan de inmediato después de cada eliminación.',
      },
      {
        question: '¿Puedo mover una página directo al principio o al final del PDF?',
        answer:
          'Usa los botones de flecha repetidamente para llevar una página a la primera o última posición, revisando su posición de salida actualizada en la tarjeta a medida que avanzas.',
      },
      {
        question: '¿Qué pasa si elimino la página equivocada por error?',
        answer:
          'No hay botón de deshacer, así que simplemente vuelve a subir tu archivo original intacto y repite los cambios; la herramienta nunca modifica tu archivo fuente.',
      },
      {
        question: '¿Reordenar páginas cambia el texto o las imágenes de ellas?',
        answer:
          'No. Las páginas se copian tal cual con pdf-lib, así que el texto vectorial, las imágenes y las fuentes mantienen su calidad original.',
      },
      {
        question: '¿Puedo duplicar la misma página más de una vez?',
        answer:
          'Sí. Haz clic en el ícono de copia de una página tantas veces como necesites, por ejemplo para repetir un formulario imprimible o una hoja de aprobación dentro de un paquete.',
      },
      {
        question: '¿Qué PDF funcionan con la herramienta Reordenar y eliminar páginas PDF?',
        answer:
          'Cualquier PDF sin cifrar funciona. Los PDF protegidos con contraseña o cifrados no pueden abrirse con esta herramienta de navegador.',
      },
      {
        question: '¿Cuántas páginas puede tener mi PDF?',
        answer:
          'No hay un límite fijo de páginas; las miniaturas en vivo se generan para las primeras 30 páginas, mientras que cada página sigue teniendo una tarjeta con su posición y su índice original.',
      },
      {
        question: '¿Mi tamaño de archivo cambiará después de reordenar páginas?',
        answer:
          'Eliminar páginas hace el archivo más pequeño, mientras que reordenar por sí solo mantiene el tamaño más o menos igual porque el documento se reconstruye con las mismas páginas.',
      },
      {
        question: '¿Puedo reordenar páginas en un PDF escaneado?',
        answer:
          'Sí. Las páginas se copian enteras sin importar si contienen texto o imágenes escaneadas, así que los documentos escaneados se reordenan igual que cualquier otro PDF.',
      },
      {
        question: '¿La herramienta Reordenar y eliminar páginas PDF funciona en el móvil?',
        answer:
          'Sí, se ejecuta en cualquier navegador móvil moderno, aunque las tarjetas de páginas y las miniaturas son más fáciles de manejar en una pantalla de escritorio más grande.',
      },
      {
        question: '¿Puedo rotar páginas mientras las reordeno?',
        answer:
          'No. La rotación es un trabajo aparte, así que usa primero la herramienta Rotador de páginas PDF y luego reordena aquí las páginas rotadas.',
      },
      {
        question: '¿Cómo distingo las páginas en el editor?',
        answer:
          'Cada tarjeta muestra una vista previa en miniatura cuando está disponible, además de su posición de salida actual y su número de página original en el archivo fuente.',
      },
      {
        question: '¿Puedo combinar dos PDF con esta herramienta?',
        answer:
          'No. Esta herramienta solo reorganiza páginas dentro de un PDF; usa la herramienta Combinar PDF para unir documentos separados primero.',
      },
      {
        question: '¿Eliminar páginas quita marcadores o enlaces internos?',
        answer:
          'El contenido de las páginas se conserva, pero los marcadores a nivel de documento pueden no sobrevivir a la reconstrucción, así que revisa el archivo guardado antes de compartirlo.',
      },
      {
        question: '¿Qué archivo obtengo después de guardar el PDF reordenado?',
        answer:
          'Se descarga a tu dispositivo un PDF completamente nuevo en el orden de páginas que elegiste, mientras que tu archivo original se mantiene intacto en tu computadora.',
      },
    ],
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
    instructions: [
      {
        title: 'Elige tu archivo PDF',
        description:
          'Sube cualquier documento PDF sin cifrar localmente a la memoria.',
      },
      {
        title: 'Escribe el texto de la marca de agua',
        description:
          'Escribe el sello que necesitas, como CONFIDENCIAL, BORRADOR o NO DISTRIBUIR, usando caracteres latinos estándar.',
      },
      {
        title: 'Personaliza el sello de marca de agua',
        description:
          'Elige Gris neutro, Índigo de marca o Rojo de sello, y ajusta los controles de tamaño, opacidad y ángulo hasta que el sello se vea bien.',
      },
      {
        title: 'Elige qué páginas sellar',
        description:
          'Deja el valor predeterminado para poner marca de agua en todas las páginas, o marca Solo primera página cuando solo la portada necesita un sello de clasificación.',
      },
      {
        title: 'Aplica y descarga',
        description:
          'Opcionalmente marca Solo primera página y luego haz clic en Aplicar marca de agua y descargar.',
      },
      {
        title: 'Consejo: revisa la legibilidad antes de compartir',
        description:
          'Abre el archivo descargado y confirma que el texto del cuerpo siga siendo fácil de leer; si el sello es demasiado fuerte, ejecútalo de nuevo con una opacidad menor, como 15–22 %.',
      },
    ],
    examples: [
      {
        title: 'Sellar un borrador de propuesta antes de su lanzamiento',
        input: 'Texto: BORRADOR · Fuente: 54 pt · Opacidad: 22 % · Ángulo: 40°',
        output: 'Superposición vectorial semitransparente de BORRADOR en diagonal centrada en todas las páginas',
        explanation:
          'Usa opacidad alfa para que el texto del cuerpo se mantenga totalmente legible.',
      },
      {
        title: 'Marcar solo la portada como CONFIDENCIAL',
        input: 'Texto: CONFIDENCIAL · Solo primera página: activado',
        output: 'Sello de CONFIDENCIAL solo en la página 1; las demás páginas quedan limpias',
        explanation:
          'El modo Solo primera página clasifica la portada sin marcar todo el documento.',
      },
    ],
    benefits: [
      'Usa tipografía vectorial HelveticaBold estándar y nítida en lugar de mapas de bits borrosos',
      'Admite opacidad alfa semitransparente del 8 % al 65 % para que el contenido se mantenga legible',
      'Ofrece el modo Solo primera página para sellos de clasificación en portadas',
      'Mantiene los borradores no publicados estrictamente fuera de servidores externos en la nube',
    ],
    useCases: [
      'Marcar contratos en borrador, documentos de trabajo o presentaciones antes de la revisión externa',
      'Agregar avisos de CONFIDENCIAL o SOLO USO INTERNO a paquetes de recursos humanos o junta directiva',
      'Etiquetar portafolios de muestra o pruebas preliminares',
      'Aplicar sellos consistentes de estado de revisión antes de archivar',
    ],
    faqs: [
      {
        question: '¿Los destinatarios pueden editar o quitar la marca de agua en editores de PDF completos?',
        answer:
          'Las marcas de agua de texto dibujadas con pdf-lib son objetos de contenido vectorial estándar en la página. Si necesitas páginas aplanadas no seleccionables donde las marcas de agua no puedan seleccionarse como texto, convierte el PDF con marca de agua con nuestras herramientas PDF a imágenes e Imágenes a PDF.',
      },
      {
        question: '¿La marca de agua funciona tanto en páginas verticales como horizontales?',
        answer:
          'Sí. Las coordenadas se calculan dinámicamente a partir del ancho y alto de cada página individual.',
      },
      {
        question: '¿Qué caracteres se admiten en la cadena de la marca de agua?',
        answer:
          'Caracteres estándar WinAnsi (ASCII latino y símbolos comunes de Europa occidental) admitidos por PDF HelveticaBold.',
      },
      {
        question: '¿La herramienta de marca de agua en PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando agrego una marca de agua?',
        answer:
          'No. El archivo se procesa localmente en tu navegador y nunca se sube, así que los borradores no publicados se mantienen privados.',
      },
      {
        question: '¿Puedo poner marca de agua solo en algunas páginas de un PDF?',
        answer:
          'Puedes poner marca de agua en todas las páginas o solo en la primera página con la opción Solo primera página; sellar un rango intermedio personalizado no está admitido.',
      },
      {
        question: '¿Qué texto puedo usar como marca de agua en PDF?',
        answer:
          'Cualquier etiqueta corta en caracteres latinos estándar, como CONFIDENCIAL, BORRADOR, SOLO USO INTERNO o el nombre de tu empresa.',
      },
      {
        question: '¿Puedo usar el nombre de mi empresa como marca de agua?',
        answer:
          'Sí. Escribe el nombre de tu empresa o marca como texto de marca de agua y se estampará en las páginas que elijas.',
      },
      {
        question: '¿Puedo cambiar el color de la marca de agua del PDF?',
        answer:
          'Sí. Elige Gris neutro para una marca sutil, Índigo de marca para combinar con una marca, o Rojo de sello para un aviso de clasificación llamativo.',
      },
      {
        question: '¿Qué tan transparente puede ser la marca de agua?',
        answer:
          'La opacidad se ajusta del 8 % al 65 %, así que puedes mantener el sello visible mientras el texto de abajo se mantiene totalmente legible.',
      },
      {
        question: '¿Puedo hacer la marca de agua horizontal en lugar de diagonal?',
        answer:
          'Sí. Ajusta el control de ángulo a 0 grados para un sello recto horizontal, o elige cualquier ángulo hasta una diagonal completa.',
      },
      {
        question: '¿Puedo agregar una marca de agua de imagen o logotipo a un PDF?',
        answer:
          'No. Esta herramienta estampa solo marcas de agua de texto; no se admiten superposiciones de imágenes ni logotipos.',
      },
      {
        question: '¿La marca de agua se imprimirá cuando se imprima el PDF?',
        answer:
          'Sí. La marca de agua es contenido vectorial real dibujado en cada página, así que aparece en las impresiones igual que en pantalla.',
      },
      {
        question: '¿La marca de agua cambia el texto original de mi PDF?',
        answer:
          'No. La marca de agua se dibuja como una superposición encima de las páginas y no edita ni reemplaza ningún contenido existente.',
      },
      {
        question: '¿Puedo poner marca de agua en un PDF protegido con contraseña?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿Esta herramienta puede quitar una marca de agua de un PDF?',
        answer:
          'No. Solo agrega marcas de agua; quitar una marca de agua existente requiere un editor de PDF completo.',
      },
      {
        question: '¿Qué fuente usa la marca de agua del PDF?',
        answer:
          'Las marcas de agua usan tipografía vectorial HelveticaBold estándar y nítida, que se mantiene afilada a cualquier tamaño en lugar de verse borrosa como un mapa de bits.',
      },
      {
        question: '¿La marca de agua se mantendrá legible en páginas oscuras o recargadas?',
        answer:
          'Depende del fondo de la página, así que elige un color con contraste y una opacidad moderada, y luego abre el archivo descargado para revisar el resultado.',
      },
      {
        question: '¿Puedo poner marca de agua en un PDF escaneado?',
        answer:
          'Sí. La marca de agua se dibuja en cada página sin importar si la página contiene texto o una imagen escaneada.',
      },
      {
        question: '¿Agregar una marca de agua hace mi PDF mucho más grande?',
        answer:
          'Solo un poco. El texto vectorial agrega muy pocos datos, así que el tamaño del archivo crece en una pequeña cantidad comparado con sellos basados en imágenes.',
      },
    ],
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
    instructions: [
      {
        title: 'Carga tu documento PDF',
        description:
          'Elige el archivo PDF sin numerar o combinado que quieres paginar.',
      },
      {
        title: 'Elige el formato de número',
        description:
          'Elige "Página 1 de N" para paquetes formales, "1 / N" para un aspecto compacto, o dígitos simples para un pie mínimo.',
      },
      {
        title: 'Define la posición y el tamaño',
        description:
          'Selecciona Inferior centrado, Inferior derecha, Inferior izquierda o Superior derecha, y ajusta el tamaño de fuente para que los números queden ordenados en el margen.',
      },
      {
        title: 'Define el número inicial y la omisión de portada',
        description:
          'Cambia Número inicial para continuar un conjunto de varios volúmenes, y activa Omitir portada cuando la página de título debe mantenerse limpia.',
      },
      {
        title: 'Aplica y descarga',
        description:
          'Haz clic en Agregar números de página y descargar para exportar el PDF paginado localmente.',
      },
      {
        title: 'Consejo: revisa las páginas con pies ajustados',
        description:
          'Abre el archivo descargado y mira las páginas que ya tienen texto de pie; si un número queda demasiado cerca, ejecútalo de nuevo con un tamaño de fuente más pequeño.',
      },
    ],
    examples: [
      {
        title: 'Numerar un paquete combinado empezando después de la portada',
        input: 'PDF de 5 páginas · Formato: Página 1 de N · Omitir portada: activado',
        output: 'Página 1 intacta; páginas 2–5 estampadas "Página 1 de 4" hasta "Página 4 de 4"',
        explanation:
          'Ideal después de combinar portadas y apéndices con Combinar PDF.',
      },
      {
        title: 'Continuar la numeración de un segundo volumen desde la página 15',
        input: 'PDF de 10 páginas · Formato: 1 / N · Número inicial: 15',
        output: 'Páginas estampadas "15 / 24" hasta "24 / 24"',
        explanation:
          'El número inicial personalizado continúa la secuencia de un conjunto de varios volúmenes.',
      },
    ],
    benefits: [
      'Corrige la paginación rota justo después de combinar informes PDF separados',
      'Admite omitir la página 1 para que las portadas de título se mantengan limpias',
      'El número inicial personalizable admite conjuntos de documentos de varios volúmenes',
      'Mide el ancho exacto del texto por tamaño de página para un centrado nítido y alineación derecha',
    ],
    useCases: [
      'Paginar propuestas de clientes y solicitudes de propuesta combinadas después de Combinar PDF',
      'Numerar presentaciones judiciales, apéndices o capítulos de tesis',
      'Continuar la numeración secuencial desde la página 15 en adelante en un volumen Parte 2',
      'Agregar números discretos en la esquina inferior derecha a guías de estudio impresas',
    ],
    faqs: [
      {
        question: '¿Esto borrará el texto existente cerca del margen inferior?',
        answer:
          'La herramienta dibuja números nítidos con un desplazamiento de margen de 28 pt sin cubrir fondos existentes, así que inspecciona las páginas que ya tienen pies ajustados.',
      },
      {
        question: '¿Cómo afecta "Omitir portada" al conteo total en "Página X de N"?',
        answer:
          'Cuando está activado, la página 1 no recibe etiqueta y las páginas restantes se cuentan limpiamente desde 1 hasta (Páginas totales − 1) para que los totales se mantengan consistentes.',
      },
      {
        question: '¿Puedo empezar la numeración en la página 10 en lugar de 1?',
        answer:
          'Sí. Cambia Número inicial a 10 para numerar volúmenes secuenciales desde 10 en adelante.',
      },
      {
        question: '¿La herramienta Agregar números de página a PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando agrego números de página?',
        answer:
          'No. El archivo se procesa localmente en tu navegador y nunca se sube, así que tus documentos se mantienen privados.',
      },
      {
        question: '¿Qué formatos de número de página puedo elegir?',
        answer:
          'Puedes elegir "Página 1 de N", el estilo compacto "1 / N" o dígitos simples sin etiqueta.',
      },
      {
        question: '¿Dónde en la página pueden aparecer los números?',
        answer:
          'Elige Inferior centrado, Inferior derecha, Inferior izquierda o Superior derecha, según dónde tengan espacio libre tus márgenes.',
      },
      {
        question: '¿Puedo omitir la numeración de la portada?',
        answer:
          'Sí. Activa Omitir portada y la página 1 se mantiene limpia mientras la numeración empieza en la página 2.',
      },
      {
        question: '¿La herramienta vuelve a numerar un PDF que ya tiene números de página?',
        answer:
          'No. Estampa números nuevos junto a los existentes, así que quita los números viejos primero si quieres un solo conjunto.',
      },
      {
        question: '¿Puedo cambiar el tamaño de fuente de los números de página?',
        answer:
          'Sí. Ajusta el tamaño de fuente para que los números sean legibles sin saturar tu pie o encabezado.',
      },
      {
        question: '¿La numeración de páginas funciona en páginas horizontales?',
        answer:
          'Sí. La herramienta mide el ancho exacto del texto por tamaño de página, así que los números se mantienen centrados o alineados en páginas verticales y horizontales por igual.',
      },
      {
        question: '¿Puedo numerar solo páginas seleccionadas de un PDF?',
        answer:
          'No. La numeración se aplica a todas las páginas excepto una portada opcionalmente omitida; numerar un rango personalizado no está admitido.',
      },
      {
        question: '¿Qué pasa si mi PDF ya tiene números de página?',
        answer:
          'Los números nuevos se estampan además de los viejos, lo que puede verse duplicado, así que revisa la salida y limpia el original primero si hace falta.',
      },
      {
        question: '¿Puedo usar números romanos para los números de página?',
        answer:
          'No. La herramienta numera las páginas solo con números arábigos estándar, así que formatos como los números romanos no están disponibles como estilo de numeración.',
      },
      {
        question: '¿Puedo agregar números de página a un PDF escaneado?',
        answer:
          'Sí. Los números se dibujan en cada página como texto vectorial sin importar si la página contiene texto o una imagen escaneada.',
      },
      {
        question: '¿Puedo poner números de página en el encabezado en lugar del pie?',
        answer:
          'Sí, elige la posición Superior derecha para numeración en el encabezado; no se ofrece ubicación superior centrada.',
      },
      {
        question: '¿Los números de página estampados serán texto seleccionable?',
        answer:
          'Sí. Los números se dibujan como texto vectorial nítido, así que los lectores pueden seleccionarlos y copiarlos como texto PDF normal.',
      },
      {
        question: '¿Puedo numerar un PDF protegido con contraseña?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿Puedo agregar un prefijo como "Sección 2 – Página 3"?',
        answer:
          'No. La herramienta ofrece solo los tres formatos de número, así que no se pueden agregar prefijos personalizados ni etiquetas de sección.',
      },
      {
        question: '¿Agregar números de página cambia mi contenido PDF?',
        answer:
          'No. Solo se agregan las etiquetas de número; tu texto, imágenes y diseño existentes se mantienen exactamente como estaban.',
      },
    ],
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
    instructions: [
      {
        title: 'Carga un archivo PDF',
        description:
          'Selecciona cualquier PDF sin cifrar; los campos de metadatos existentes y las dimensiones de página se completan automáticamente.',
      },
      {
        title: 'Revisa los metadatos actuales',
        description:
          'Lee los campos de Título, Autor, Asunto, Palabras clave, Creador y Productor, además del conteo de páginas y las dimensiones exactas de página, para ver qué está guardado.',
      },
      {
        title: 'Edita o limpia los campos',
        description:
          'Actualiza Título, Autor, Asunto y Palabras clave para mayor claridad, o haz clic en Eliminar todos los campos de metadatos para privacidad.',
      },
      {
        title: 'Elimina todos los metadatos para privacidad',
        description:
          'Usa Eliminar todos los campos de metadatos antes de compartir un archivo en público para borrar nombres de autor y versiones de software en un clic.',
      },
      {
        title: 'Guarda y descarga',
        description:
          'Haz clic en Guardar metadatos y descargar PDF para exportar una copia recién etiquetada.',
      },
      {
        title: 'Consejo: verifica el archivo guardado',
        description:
          'Vuelve a abrir el PDF descargado en esta herramienta para confirmar el nuevo Título y los campos de Autor borrados, ya que los cambios solo se aplican a la copia guardada.',
      },
    ],
    examples: [
      {
        title: 'Anonimizar un PDF exportado desde Word o Illustrator',
        input: 'Autor: "John Doe" · Creador: "Microsoft® Word 2021"',
        output: 'Haz clic en Eliminar todos los campos de metadatos → Guarda un PDF limpio con Autor/Creador en blanco',
        explanation:
          'Elimina nombres de empleados y versiones de software antes de alojarlo en la web pública.',
      },
      {
        title: 'Corregir el título que se muestra en la pestaña del navegador',
        input: 'Título: "Sin título-2" · Archivo: informe-anual.pdf',
        output: 'Título: "Informe anual 2026" · La pestaña del navegador muestra el título correcto',
        explanation:
          'Los navegadores muestran la propiedad Título del PDF en lugar del nombre del archivo.',
      },
    ],
    benefits: [
      'Expone nombres de autor ocultos y cadenas de software que los navegadores muestran en pestañas y propiedades',
      'Eliminar todos los campos de metadatos con un clic borra las 6 etiquetas estándar del diccionario Info',
      'Actualiza limpiamente Título, Asunto y Palabras clave separadas por comas relevantes para SEO',
      'Muestra las dimensiones exactas en puntos PDF (`ancho × alto pt`) junto con el conteo de páginas',
    ],
    useCases: [
      'Limpiar nombres de empleados y versiones de herramientas locales antes de publicar PDF en público',
      'Corregir nombres de archivo incómodos como "Sin título-2" que se muestran en pestañas de PDF de Chrome o Safari mediante Título',
      'Agregar etiquetas buscables de Asunto y Palabras clave a documentos técnicos descargables',
      'Auditar envíos de PDF de proveedores o candidatos localmente',
    ],
    faqs: [
      {
        question: '¿Por qué la pestaña de mi navegador muestra el título equivocado al abrir un PDF?',
        answer:
          'Los navegadores muestran la propiedad interna Título del documento PDF en lugar del nombre del archivo .pdf si hay una etiqueta Título incrustada. Editar el Título aquí corrige cómo los navegadores etiquetan la pestaña.',
      },
      {
        question: '¿Borrar los campos de metadatos afecta el contenido visible de las páginas?',
        answer:
          'No. Eliminar o actualizar Título, Autor, Asunto, Palabras clave, Creador y Productor actualiza solo el diccionario Info del PDF sin alterar las páginas visibles.',
      },
      {
        question: '¿Las ediciones se cifran o se registran en algún lugar?',
        answer:
          'Nunca. Tanto la lectura como la escritura de metadatos se ejecutan por completo dentro de la memoria del cliente con pdf-lib.',
      },
      {
        question: '¿El Editor de metadatos PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando edito sus metadatos?',
        answer:
          'No. La lectura y escritura de metadatos ocurren por completo dentro de tu navegador, así que tus archivos nunca se suben ni se registran.',
      },
      {
        question: '¿Qué campos de metadatos puedo editar en un PDF?',
        answer:
          'Puedes ver y editar Título, Autor, Asunto, Palabras clave, Creador y Productor: las seis etiquetas estándar del diccionario Info del PDF.',
      },
      {
        question: '¿Puedo quitar solo el nombre del autor de un PDF?',
        answer:
          'Sí. Borra solo el campo Autor y guarda, dejando intactos el Título, el Asunto y las demás etiquetas.',
      },
      {
        question: '¿Qué hace "Eliminar todos los campos de metadatos"?',
        answer:
          'Borra las seis etiquetas estándar del diccionario Info a la vez, eliminando nombres de autor, cadenas de software y títulos antes de compartir el archivo.',
      },
      {
        question: '¿Editar el Título puede cambiar cómo aparece el PDF en los resultados de búsqueda?',
        answer:
          'Editar el Título cambia la etiqueta que los navegadores muestran en la pestaña del PDF, pero no garantiza ningún posicionamiento ni fragmento de búsqueda en particular.',
      },
      {
        question: '¿Eliminar metadatos borra marcadores o enlaces?',
        answer:
          'No. Eliminar actualiza solo el diccionario Info, así que los marcadores, enlaces y contenido visible de las páginas quedan sin cambios.',
      },
      {
        question: '¿Puedo ver los metadatos de un PDF sin cambiar nada?',
        answer:
          'Sí. Los campos se completan tan pronto cargas un archivo, y nada se altera a menos que hagas clic en Guardar metadatos y descargar PDF.',
      },
      {
        question: '¿Qué son los campos Creador y Productor en un PDF?',
        answer:
          'Creador nombra la aplicación que hizo el documento, como Microsoft Word, mientras que Productor nombra el software que lo convirtió en PDF.',
      },
      {
        question: '¿Puedo agregar palabras clave a un PDF para mejorar su búsqueda?',
        answer:
          'Sí. Escribe Palabras clave separadas por comas en el editor de metadatos, y se guardan en el PDF para las herramientas de búsqueda que las lean.',
      },
      {
        question: '¿El tamaño del archivo cambiará después de editar los metadatos del PDF?',
        answer:
          'Solo en una cantidad mínima. Los metadatos son un bloque pequeño de texto, así que editarlos o eliminarlos apenas afecta el tamaño total del archivo.',
      },
      {
        question: '¿Puedo editar metadatos en un PDF escaneado?',
        answer:
          'Sí. Los metadatos viven en el encabezado del documento y son independientes del contenido de las páginas, así que los PDF escaneados funcionan igual que los basados en texto.',
      },
      {
        question: '¿Puedo editar metadatos XMP con esta herramienta?',
        answer:
          'No. Esta herramienta edita solo las seis etiquetas estándar del diccionario Info; los paquetes extendidos de metadatos XMP no se modifican.',
      },
      {
        question: '¿Puedo editar metadatos en un PDF cifrado?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿El Editor de metadatos PDF muestra el tamaño de página?',
        answer:
          'Sí. Muestra las dimensiones exactas de página en puntos (ancho × alto) junto con el conteo de páginas de cada archivo cargado.',
      },
      {
        question: '¿Eliminar metadatos quitará toda la información personal de un PDF?',
        answer:
          'Elimina las seis etiquetas Info, pero los datos personales escritos visiblemente en las páginas mismas, como un nombre en el texto del cuerpo, permanecen.',
      },
      {
        question: '¿Necesito descargar el archivo para aplicar los cambios de metadatos?',
        answer:
          'Sí. Hacer clic en Guardar metadatos y descargar PDF crea un archivo nuevo con tus cambios, mientras que tu archivo original se mantiene intacto.',
      },
    ],
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
    instructions: [
      {
        title: 'Selecciona un documento PDF',
        description:
          'Elige cualquier archivo PDF sin cifrar; PDF.js escanea el flujo de texto incrustado de cada página localmente.',
      },
      {
        title: 'Revisa el texto extraído',
        description:
          'Lee la salida y revisa el conteo de páginas, el conteo de palabras y el tamaño en bytes UTF-8 reportados para confirmar que la extracción se ve completa.',
      },
      {
        title: 'Activa los marcadores de página',
        description:
          'Mantén los encabezados de página activados para citas estructuradas o desactívalos para prosa continua.',
      },
      {
        title: 'Revisa si hay páginas escaneadas',
        description:
          'Si la herramienta reporta 0 caracteres, es probable que el PDF sea un archivo escaneado solo de imágenes sin capa de texto para extraer.',
      },
      {
        title: 'Copia o exporta .txt',
        description:
          'Copia el texto extraído en tu editor o descarga una transcripción limpia en UTF-8 .txt.',
      },
      {
        title: 'Consejo: corrige texto confuso o faltante',
        description:
          'Si los caracteres se ven mal, es posible que el PDF fuente use una fuente personalizada sin mapeo Unicode adecuado; prueba el documento original o una copia recién exportada.',
      },
    ],
    examples: [
      {
        title: 'Extraer copia legible de un documento técnico de varias páginas',
        input: 'documento-tecnico.pdf (8 páginas, capa de texto incrustada)',
        output: 'Texto plano estructurado con separadores --- Página 1 ---, conteo de palabras y descarga .txt',
        explanation:
          'Extrae limpiamente los elementos de texto subyacentes del PDF sin errores manuales de resaltar y copiar.',
      },
      {
        title: 'Detectar un PDF escaneado sin capa de texto',
        input: 'escaneo.pdf (12 páginas, solo imágenes)',
        output: 'Advertencia: 0 caracteres extraídos; el PDF no tiene capa de texto',
        explanation:
          'La herramienta indica con honestidad que el PDF escaneado no contiene texto extraíble y que no se ejecuta OCR sin conexión.',
      },
    ],
    benefits: [
      'Advierte con transparencia si un PDF es escaneado o solo de imágenes (capa de texto 0, OCR no ejecutado sin conexión)',
      'Conserva saltos de página limpios con marcadores activables --- Página N ---',
      'Reporta el conteo de páginas extraídas, el conteo de palabras y el tamaño en bytes UTF-8',
      'Primer paso ideal antes de enviar copia al Contador de palabras o a Buscar y reemplazar',
    ],
    useCases: [
      'Extraer texto plano limpio de documentos técnicos, programas de estudio o documentación en PDF',
      'Revisar conteos de palabras en ensayos PDF con formato usando nuestro Contador de palabras',
      'Verificar si un PDF archivado contiene una capa de texto buscable frente a escaneos planos',
      'Exportar agendas de reuniones en PDF a notas de texto plano Markdown',
    ],
    faqs: [
      {
        question: '¿Por qué un PDF escaneado extrajo 0 caracteres?',
        answer:
          'Los PDF de escáner a menudo guardan las páginas solo como imágenes de mapa de bits planas sin una capa de texto OCR incrustada. Esta herramienta de navegador lee directamente los flujos de texto PDF existentes y revela con honestidad que el OCR sin conexión no está incluido.',
      },
      {
        question: '¿Por qué las tablas complejas de varias columnas a veces se envuelven entre líneas?',
        answer:
          'Los archivos PDF guardan el texto posicionado por coordenadas X/Y en lugar de tablas HTML semánticas, así que PDF.js emite los elementos de texto en orden de flujo con pistas de fin de línea.',
      },
      {
        question: '¿Mi PDF se sube para extraer texto?',
        answer:
          'No. PDF.js analiza y extrae los flujos de texto estrictamente dentro de la pestaña de tu navegador.',
      },
      {
        question: '¿El Extractor de texto de PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿A qué formatos de archivo puedo exportar el texto extraído?',
        answer:
          'Puedes copiar el texto plano a tu portapapeles o descargarlo como una transcripción limpia en UTF-8 .txt.',
      },
      {
        question: '¿Puedo extraer texto de solo una página de un PDF?',
        answer:
          'La extracción cubre todo el documento, pero los marcadores opcionales --- Página N --- facilitan encontrar y copiar solo la sección que necesitas.',
      },
      {
        question: '¿Por qué falta parte del texto en la salida extraída?',
        answer:
          'El texto guardado como imagen, o dibujado con una fuente personalizada que carece de mapa Unicode, no tiene flujo de texto legible para que PDF.js lo extraiga.',
      },
      {
        question: '¿El Extractor de texto de PDF incluye OCR para páginas escaneadas?',
        answer:
          'No. Lee solo la capa de texto incrustada existente y no ejecuta OCR, así que las páginas escaneadas solo de imágenes no devuelven texto.',
      },
      {
        question: '¿Puedo extraer texto de un PDF en otro idioma?',
        answer:
          'Sí. El texto Unicode incrustado se extrae tal cual, así que los documentos en otros idiomas funcionan siempre que el PDF guarde una capa de texto adecuada.',
      },
      {
        question: '¿La extracción conserva el texto en negrita o los encabezados?',
        answer:
          'No. La salida es solo texto plano, así que la negrita, la cursiva, los encabezados y otros formatos no se transfieren.',
      },
      {
        question: '¿Qué tan grande puede ser un PDF para extraer texto?',
        answer:
          'No hay un límite de tamaño declarado, y la extracción se ejecuta localmente; los documentos muy grandes simplemente pueden tardar un poco más en escanearse.',
      },
      {
        question: '¿Puedo copiar el texto extraído sin descargar un archivo?',
        answer:
          'Sí. Usa el botón de copia con un clic para pegar el texto directo en tu editor, app de notas o documento.',
      },
      {
        question: '¿Qué son los marcadores "--- Página N ---" en la salida?',
        answer:
          'Son encabezados opcionales que marcan dónde empieza cada página, para que puedas citar páginas con precisión; desactívalos para prosa continua.',
      },
      {
        question: '¿El Extractor de texto de PDF muestra un conteo de palabras?',
        answer:
          'Sí. Reporta el conteo de páginas extraídas, el conteo de palabras y el tamaño en bytes UTF-8 junto con el texto.',
      },
      {
        question: '¿Puedo extraer texto de un PDF protegido con contraseña?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿Se extraerán los hipervínculos del PDF?',
        answer:
          'El texto visible de los enlaces se extrae cuando existe como texto, pero los enlaces mismos no se exportan como URLs clicables.',
      },
      {
        question: '¿Puedo usar el texto extraído en Word o Google Docs?',
        answer:
          'Sí. Pega el texto copiado directamente, o abre el archivo .txt descargado y copia su contenido en cualquier procesador de textos.',
      },
      {
        question: '¿Por qué algunos caracteres se ven confusos en el texto extraído?',
        answer:
          'Algunos PDF incrustan fuentes personalizadas sin un mapeo Unicode adecuado, así que PDF.js no puede relacionar los glifos con los caracteres correctos.',
      },
      {
        question: '¿Extraer texto cambia mi PDF original?',
        answer:
          'No. La extracción es de solo lectura; tu archivo PDF original nunca se modifica.',
      },
      {
        question: '¿El Extractor de texto de PDF puede extraer texto de formularios y anotaciones?',
        answer:
          'Extrae la capa principal de texto incrustado de cada página; los valores de formularios completados y las notas de anotación pueden no aparecer si se guardan por separado.',
      },
    ],
  },
};
