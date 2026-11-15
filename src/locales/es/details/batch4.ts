// Detail content for ES tools — split out of
// src/locales/es/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'qr-code-generator': {
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
};
