// Detail content for ES tools — split out of
// src/locales/es/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
    instructions: [
      {
        title: 'Elija una imagen de origen',
        description:
          'Seleccione cualquier imagen PNG, JPG, WebP o GIF de su dispositivo para decodificar sus dimensiones y tamaño original en bytes.',
      },
      {
        title: 'Elija el formato de destino, el límite de ancho y la calidad',
        description:
          'Seleccione WebP o JPG para un ahorro drástico de bytes, aplique opcionalmente un límite de ancho máximo (como 1920 px o 1280 px) y ajuste el control de calidad de 10% a 100%.',
      },
      {
        title: 'Ejecute la compresión',
        description:
          'Haga clic en Comprimir para volver a codificar la imagen localmente en su navegador y ver el nuevo tamaño en bytes al instante.',
      },
      {
        title: 'Compare antes y después',
        description:
          'Revise la vista previa lado a lado y el ahorro exacto en bytes y porcentaje para asegurarse de que la calidad siga viéndose bien.',
      },
      {
        title: 'Descargue el archivo comprimido',
        description:
          'Haga clic en Descargar para guardar la imagen optimizada en su dispositivo y repita el proceso para otro archivo cuando lo necesite.',
      },
      {
        title: 'Consejo: ¿la salida es más grande que la entrada?',
        description:
          'Si un PNG pequeño crece después de la compresión, cambie el formato de salida a WebP o JPG, o baje ligeramente el control de calidad, y comprima de nuevo.',
      },
    ],
    examples: [
      {
        title: 'Optimizar una foto principal de 2.4 MB para un artículo de blog',
        input: 'JPG 3840×2160 · Salida: WebP · Ancho máx.: 1280 px · Calidad: 80%',
        output: 'WebP 1280×720 típicamente ~85–140 KB (reducción de carga de -94%)',
        explanation: 'Combinar el límite de dimensiones con la compresión moderna WebP acelera dramáticamente el Largest Contentful Paint.',
      },
      {
        title: 'Reducir una captura de pantalla para adjuntarla por correo',
        input: 'PNG 1920×1080 · Salida: JPG · Calidad: 75%',
        output: 'JPG de unos cientos de KB, lo suficientemente pequeño para los límites de archivos adjuntos de correo.',
        explanation: 'Convertir a JPG elimina la transparencia innecesaria y reduce mucho el tamaño del archivo.',
      },
    ],
    benefits: [
      'Cero subidas al servidor mantienen los gráficos de productos no publicados y las fotos privadas completamente locales',
      'Admite re-codificación WebP, JPEG (con relleno mate blanco automático para alfa) y PNG',
      'Muestra los tamaños reales en bytes antes y después y el ahorro en porcentaje al instante',
      'Los límites opcionales de ancho máximo redimensionan fotos de cámara demasiado grandes en una pasada',
    ],
    useCases: [
      'Reducir banners principales y capturas de pantalla para mejorar Core Web Vitals y LCP',
      'Preparar archivos adjuntos más ligeros para correos, portales y subidas a CMS',
      'Convertir capturas de pantalla pesadas en recursos web WebP ligeros',
      'Comprobar rápidamente el equilibrio óptimo entre calidad y fidelidad visual',
    ],
    faqs: [
      {
        question: '¿Por qué comprimir un PNG pequeño a PNG a veces aumenta su tamaño?',
        answer:
          'El Canvas del navegador vuelve a codificar los PNG usando flujos DEFLATE estándar sin pérdidas, sin herramientas especializadas de cuantización de paleta como pngquant. Cambiar el Formato de salida a WebP o JPG suele reducir el tamaño del archivo dramáticamente.',
      },
      {
        question: '¿Mis fotos se suben a un servidor externo de compresión?',
        answer:
          'No. Toda la decodificación, el redimensionado y la re-codificación con Canvas se ejecutan estrictamente dentro de la memoria de su navegador.',
      },
      {
        question: '¿Qué pasa con los fondos transparentes si elijo JPG?',
        answer:
          'Como JPEG no admite transparencia alfa, las regiones transparentes se rellenan limpiamente con blanco sólido (#ffffff) antes de la codificación.',
      },
      {
        question: '¿El Compresor de Imágenes es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, sin marcas de agua y sin límites en la cantidad de imágenes que comprime.',
      },
      {
        question: '¿Qué formatos de imagen puedo comprimir?',
        answer:
          'Puede comprimir imágenes PNG, JPG, WebP y GIF, y descargar el resultado como WebP, JPG o PNG.',
      },
      {
        question: '¿Cuánto puede reducir mi foto el Compresor de Imágenes?',
        answer:
          'El ahorro depende del formato original y de la configuración de calidad, pero las fotos convertidas a WebP con calidad del 80% a menudo se reducen entre 50 y 90%.',
      },
      {
        question: '¿Comprimir mi imagen reducirá su calidad?',
        answer:
          'Los formatos con pérdida como WebP y JPG intercambian un poco de detalle por archivos mucho más pequeños. Use el control de calidad y la vista previa para encontrar el equilibrio que le guste, o mantenga PNG para resultados sin pérdida.',
      },
      {
        question: '¿El Compresor de Imágenes cambia las dimensiones de mi imagen?',
        answer:
          'Solo si configura un límite de ancho máximo. De lo contrario, las dimensiones en píxeles se mantienen iguales y solo cambia el tamaño del archivo.',
      },
      {
        question: '¿Puedo comprimir imágenes para archivos adjuntos de correo?',
        answer:
          'Sí, comprimir primero hace que las fotos grandes sean lo suficientemente pequeñas para caber en los límites de archivos adjuntos de correo sin dividirlas en varios mensajes.',
      },
      {
        question: '¿Qué configuración de calidad debo elegir para imágenes de sitios web?',
        answer:
          'Una calidad de 75–85% en WebP suele verse casi idéntica a la original mientras mantiene los archivos lo suficientemente pequeños para cargas rápidas de página.',
      },
      {
        question: '¿Por qué debería convertir JPG a WebP al comprimir?',
        answer:
          'WebP usa una compresión más eficiente que JPG, por lo que la misma foto con la misma calidad visual suele ser mucho más pequeña.',
      },
      {
        question: '¿Puedo comprimir varias imágenes a la vez?',
        answer:
          'El compresor procesa una imagen a la vez para que pueda ajustar la calidad, el ancho y el formato de cada foto antes de descargarla.',
      },
      {
        question: '¿La compresión funciona sin conexión?',
        answer:
          'Sí, una vez cargada la página, toda la compresión se ejecuta localmente en su navegador, por lo que funciona sin conexión a internet.',
      },
      {
        question: '¿Mi imagen comprimida tendrá una marca de agua?',
        answer:
          'No, las imágenes descargadas nunca incluyen marcas de agua ni branding, así que el archivo comprimido se ve exactamente igual que tu imagen original, solo que más pequeño.',
      },
      {
        question: '¿Cuál es el mejor formato para comprimir capturas de pantalla?',
        answer:
          'WebP suele dar los archivos más pequeños para capturas de pantalla. Use PNG solo cuando necesite calidad sin pérdida y píxel perfecto.',
      },
      {
        question: '¿Puedo comprimir una imagen sin cambiar sus dimensiones?',
        answer:
          'Sí, deje el límite de ancho máximo sin configurar y la herramienta mantiene el ancho y alto originales mientras solo reduce el tamaño del archivo.',
      },
      {
        question: '¿El Compresor de Imágenes conserva los metadatos de la imagen?',
        answer:
          'La re-codificación con Canvas del navegador generalmente elimina metadatos EXIF como la configuración de la cámara y la ubicación, lo que también ayuda a reducir el archivo.',
      },
      {
        question: '¿Puedo usar el Compresor de Imágenes en mi teléfono?',
        answer:
          'Sí, funciona en cualquier navegador móvil moderno. Elija una imagen de su galería de fotos y descargue el resultado comprimido de la misma manera.',
      },
      {
        question: '¿Cuál es el tamaño máximo de imagen que puedo comprimir?',
        answer:
          'No hay un límite fijo de servidor porque nada se sube. Las imágenes muy grandes están limitadas solo por la memoria de su dispositivo y el tamaño de Canvas del navegador.',
      },
      {
        question: '¿Cómo comprimo una imagen a menos de 100 KB?',
        answer:
          'Elija salida WebP, configure un ancho máximo como 1280 px y baje el control de calidad paso a paso hasta que el tamaño de archivo mostrado caiga por debajo de 100 KB.',
      },
    ],
  },
  'image-resizer': {
    instructions: [
      {
        title: 'Cargue su imagen',
        description:
          'Suba cualquier imagen PNG, JPG, WebP o GIF para leer su ancho y alto originales en píxeles.',
      },
      {
        title: 'Configure ancho, alto y modo de ajuste',
        description:
          'Ingrese píxeles personalizados (con Bloqueo de relación de aspecto opcional) o seleccione un ajuste social, luego elija Recorte de cobertura centrado o Estiramiento/Escala exacta.',
      },
      {
        title: 'Elija un formato de salida',
        description:
          'Elija PNG para transparencia, JPG para fotos o WebP para el archivo más pequeño antes de renderizar.',
      },
      {
        title: 'Renderice la imagen redimensionada',
        description:
          'Haga clic en Renderizar imagen redimensionada para generar la nueva versión con sus dimensiones exactas en píxeles.',
      },
      {
        title: 'Revise el resultado y descargue',
        description:
          'Inspeccione la vista previa para verificar nitidez y recorte, revise el tamaño del archivo y luego haga clic en Descargar para guardarla.',
      },
      {
        title: 'Consejo: ¿la imagen se ve estirada o borrosa?',
        description:
          'Active Bloqueo de relación de aspecto o cambie a Recorte de cobertura centrado para evitar distorsión, y evite ampliar mucho más allá del tamaño original.',
      },
    ],
    examples: [
      {
        title: 'Recortar una captura alta en una tarjeta Open Graph de 1200×630',
        input: 'Captura 1440×1600 · Ajuste: OG Share (1200×630) · Ajuste: Recorte de cobertura centrado',
        output: 'Tarjeta nítida de 1200×630 centrada verticalmente sin aplastamiento ni distorsión.',
        explanation: 'El recorte de cobertura escala proporcionalmente hasta llenar el marco objetivo, recortando los bordes sobrantes de forma uniforme.',
      },
      {
        title: 'Crear un avatar cuadrado de 512×512 para un perfil',
        input: 'Foto 3000×2000 · Ajuste: Avatar (512×512) · Ajuste: Recorte de cobertura centrado',
        output: 'Avatar cuadrado de 512×512 con el rostro centrado y sin estiramiento.',
        explanation: 'El recorte centrado mantiene el sujeto en el medio mientras recorta los lados sobrantes.',
      },
    ],
    benefits: [
      'Ajustes preestablecidos de un clic para Open Graph, YouTube HD, Cuadrado y Avatar en píxeles',
      'El Recorte de cobertura centrado evita el estiramiento incómodo al cambiar las relaciones de aspecto',
      'El imageSmoothingQuality de Canvas de alta calidad preserva tipografía y líneas nítidas',
      'Exporta directamente a PNG, JPG o WebP con lectura real del tamaño de archivo',
    ],
    useCases: [
      'Crear tarjetas og:image de 1200×630 para entradas de blog y páginas de destino',
      'Preparar fotos de producto de 1080×1080 y avatares de perfil de 512×512',
      'Reducir capturas de pantalla de alta DPI antes de agregarlas a la documentación',
      'Generar dimensiones exactas de héroe que coincidan con los requisitos de plantillas de CMS',
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre Recorte de cobertura centrado y Estiramiento / Escala exacta?',
        answer:
          'El Recorte de cobertura centrado preserva las proporciones naturales y recorta los bordes sobrantes de forma simétrica cuando la nueva relación de aspecto difiere. La Escala exacta fuerza toda la imagen original dentro del ancho y alto objetivo.',
      },
      {
        question: '¿Puedo ampliar una foto pequeña a 4K limpiamente?',
        answer:
          'La interpolación de Canvas puede exportar rejillas de píxeles más grandes, aunque ampliar más allá de la resolución nativa no puede inventar detalles finos faltantes.',
      },
      {
        question: '¿Cuál es la dimensión máxima de salida admitida?',
        answer:
          'Las entradas están limitadas hasta 8000 px por eje para mantenerse de forma segura dentro de los límites de memoria de Canvas del navegador.',
      },
      {
        question: '¿El Redimensionador de Imágenes es gratis?',
        answer:
          'Sí, es gratis sin registro, sin marcas de agua y sin límite en la cantidad de imágenes que redimensiona.',
      },
      {
        question: '¿Cuál es la diferencia entre redimensionar y recortar una imagen?',
        answer:
          'Redimensionar cambia las dimensiones completas en píxeles de la imagen, mientras que recortar corta parte de la imagen. Esta herramienta puede hacer ambas cosas, incluido el recorte de cobertura centrado.',
      },
      {
        question: '¿El Redimensionador de Imágenes puede hacer una imagen de 1200x630 para compartir en redes sociales?',
        answer:
          'Sí, elija el ajuste preestablecido de Open Graph (1200×630) y la herramienta dimensiona su imagen exactamente para las vistas previas de enlaces en plataformas sociales.',
      },
      {
        question: '¿Cómo redimensiono una imagen sin estirarla?',
        answer:
          'Mantenga activado Bloqueo de relación de aspecto o use Recorte de cobertura centrado, para que la herramienta escale proporcionalmente en lugar de aplastar la imagen.',
      },
      {
        question: '¿Puedo redimensionar una imagen a un cuadrado de 1080x1080?',
        answer:
          'Sí, elija el ajuste Cuadrado o ingrese 1080 tanto para el ancho como para el alto con Recorte de cobertura centrado activado.',
      },
      {
        question: '¿Redimensionar una imagen reduce su tamaño de archivo?',
        answer:
          'Generalmente sí, porque menos píxeles significan menos datos, especialmente cuando también exporta como WebP o JPG.',
      },
      {
        question: '¿Qué formatos de imagen puedo redimensionar?',
        answer:
          'Puede redimensionar imágenes PNG, JPG, WebP y GIF y exportarlas como PNG, JPG o WebP.',
      },
      {
        question: '¿Redimensionar hará que mi imagen se vea borrosa?',
        answer:
          'Reducir el tamaño suele mantenerse nítido gracias al suavizado de Canvas de alta calidad. Ampliar más allá del tamaño original puede suavizar los detalles finos.',
      },
      {
        question: '¿Puedo redimensionar una imagen para una foto de perfil?',
        answer:
          'Sí, use el ajuste Avatar (512×512) con Recorte de cobertura centrado para obtener una foto de perfil perfectamente cuadrada.',
      },
      {
        question: '¿Qué es el Recorte de cobertura centrado en el Redimensionador de Imágenes?',
        answer:
          'Escala la imagen hasta llenar el marco objetivo y luego recorta los bordes sobrantes de forma uniforme desde el centro para que nada se vea estirado.',
      },
      {
        question: '¿El Redimensionador de Imágenes sube mis fotos a algún lugar?',
        answer:
          'No, todo el redimensionado ocurre localmente en su navegador y sus imágenes nunca salen de su dispositivo.',
      },
      {
        question: '¿Puedo redimensionar una imagen en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Suba una foto, ingrese las nuevas dimensiones y descargue el resultado.',
      },
      {
        question: '¿Qué pasa con la transparencia cuando redimensiono un PNG?',
        answer:
          'La transparencia se preserva siempre que exporte como PNG o WebP. Exportar como JPG rellena las áreas transparentes con blanco.',
      },
      {
        question: '¿Puedo redimensionar varias imágenes al mismo tamaño?',
        answer:
          'La herramienta redimensiona una imagen a la vez. Repita el mismo ajuste o dimensiones para cada imagen para mantenerlas coherentes.',
      },
      {
        question: '¿Cuál es la imagen más grande que puede manejar el Redimensionador de Imágenes?',
        answer:
          'Las entradas están limitadas a 8000 px por lado para mantenerse dentro de los límites de memoria de Canvas del navegador.',
      },
      {
        question: '¿Cómo redimensiono una imagen para miniaturas de YouTube?',
        answer:
          'Elija el ajuste YouTube HD (1280×720) para que su miniatura coincida con el tamaño recomendado de 16:9.',
      },
      {
        question: '¿Por qué mi imagen redimensionada sigue siendo grande?',
        answer:
          'El tamaño en píxeles es solo parte de la historia. Exporte como WebP o JPG en lugar de PNG, o use el Compresor de Imágenes después para reducir aún más el archivo.',
      },
    ],
  },
  'image-format-converter': {
    instructions: [
      {
        title: 'Elija el formato de destino y las opciones',
        description:
          'Seleccione salida PNG, JPG o WebP, configure la calidad con pérdida si aplica y elija un color mate de fondo al convertir imágenes transparentes a JPG.',
      },
      {
        title: 'Seleccione una o varias imágenes',
        description:
          'Cargue un solo archivo o un lote de varios archivos para renderizar cada imagen limpiamente a resolución nativa completa.',
      },
      {
        title: 'Revise la vista previa de cada archivo',
        description:
          'Revise las dimensiones y el tamaño estimado de cada imagen convertida antes de descargar nada.',
      },
      {
        title: 'Convierta el lote',
        description:
          'La herramienta renderiza cada imagen a resolución nativa completa en el formato seleccionado, directamente en su navegador.',
      },
      {
        title: 'Descargue los recursos convertidos',
        description:
          'Compare las dimensiones y el nuevo tamaño en bytes de cada archivo, luego descargue sus imágenes convertidas individualmente.',
      },
      {
        title: 'Consejo: ¿las áreas transparentes se volvieron negras?',
        description:
          'Si un PNG convertido a JPG muestra negro donde era transparente, vuelva a convertir con un color de relleno mate como blanco o el color de su marca.',
      },
    ],
    examples: [
      {
        title: 'Aplanar un logotipo SVG/PNG transparente sobre azul marino de marca para JPG',
        input: 'logo.png transparente · Destino: JPG (90%) · Relleno: #FFFFFF',
        output: 'logo.jpg con fondo blanco limpio y cero artefactos negros de transparencia',
        explanation: 'Rellenar explícitamente el mate de Canvas antes de dibujar evita halos negros al convertir PNG con alfa a JPEG.',
      },
      {
        title: 'Convertir por lotes descargas .webp a .png para software antiguo',
        input: '8 archivos .webp · Destino: PNG',
        output: '8 archivos .png a resolución nativa completa, listos para imprimir o subir.',
        explanation: 'La conversión por lotes procesa todo el grupo sin colas de servidor ni subidas.',
      },
    ],
    benefits: [
      'Procesa lotes de varias imágenes a resolución completa sin colas de servidor',
      'El color configurable de relleno de fondo JPEG evita rellenos transparentes negros feos',
      'Convierte descargas WebP de vuelta a archivos PNG o JPG universalmente aceptados',
      'Renderiza archivos SVG vectoriales directamente en imágenes raster PNG o WebP nítidas',
    ],
    useCases: [
      'Convertir archivos .webp descargados en .png o .jpg para software antiguo',
      'Producir por lotes recursos .webp modernos para sitios web estáticos y CDN',
      'Exportar PNG nítidos desde iconos de marca SVG para diapositivas o publicaciones sociales',
      'Comparar diferencias de tamaño de formato entre PNG, JPG y WebP lado a lado',
    ],
    faqs: [
      {
        question: '¿Puede esto convertir fotos HEIC de Apple?',
        answer:
          'La decodificación HEIC depende del soporte subyacente del navegador (Safari admite HEIC de forma nativa, mientras que Chrome/Firefox generalmente requieren entradas PNG, JPG, WebP, SVG o GIF).',
      },
      {
        question: '¿Convertir JPG a PNG mejora el detalle fotográfico perdido?',
        answer:
          'No. Convertir un JPG ya comprimido a PNG lo preserva sin pérdida en adelante, aunque no puede restaurar artefactos previos de compresión JPEG.',
      },
      {
        question: '¿Se aplican límites de archivo?',
        answer:
          'Solo aplica la RAM de su dispositivo; toda la codificación ocurre localmente sin límites de tamaño de archivo de servidor.',
      },
      {
        question: '¿El Conversor de Formato de Imagen es gratis?',
        answer:
          'Sí, es gratis sin cuenta, sin marcas de agua y sin límites en la cantidad de conversiones.',
      },
      {
        question: '¿Qué formatos puedo convertir y a cuáles?',
        answer:
          'Puede convertir archivos PNG, JPG, WebP, GIF y SVG a salida PNG, JPG o WebP.',
      },
      {
        question: '¿Por qué convertir PNG a WebP?',
        answer:
          'Los archivos WebP suelen ser mucho más pequeños que PNG con una calidad visual similar, lo que hace que las páginas web carguen más rápido.',
      },
      {
        question: '¿Por qué convertir WebP a JPG o PNG?',
        answer:
          'Algunas apps antiguas, impresoras y formularios de subida no aceptan WebP, así que convertir de vuelta a JPG o PNG restaura la compatibilidad universal.',
      },
      {
        question: '¿Puedo convertir varias imágenes a la vez?',
        answer:
          'Sí, puede cargar un lote de imágenes y convertirlas todas al mismo formato de destino de una vez.',
      },
      {
        question: '¿Convertir a JPG elimina la transparencia?',
        answer:
          'Sí, JPG no tiene canal alfa, por lo que las áreas transparentes se rellenan con el color mate que elija, como blanco.',
      },
      {
        question: '¿Qué color mate debo usar al convertir un PNG transparente a JPG?',
        answer:
          'El blanco es el valor predeterminado más seguro. Combine el color de fondo de su sitio web o diapositiva para una apariencia perfecta.',
      },
      {
        question: '¿Puedo convertir una foto a WebP y mantener su calidad?',
        answer:
          'Sí, WebP con calidad de 85–90% suele verse idéntico al JPG original mientras produce un archivo notablemente más pequeño.',
      },
      {
        question: '¿Puedo convertir un logotipo SVG a PNG?',
        answer:
          'Sí, la herramienta rasteriza archivos SVG en imágenes PNG o WebP nítidas con sus dimensiones nativas.',
      },
      {
        question: '¿El Conversor de Formato de Imagen sube mis imágenes?',
        answer:
          'No, cada conversión se ejecuta localmente en su navegador y sus archivos nunca salen de su dispositivo.',
      },
      {
        question: '¿Qué calidad debo usar al convertir a JPG?',
        answer:
          'Una calidad de 85–90% mantiene las fotos limpias mientras son mucho más pequeñas que PNG. Bájela para archivos más pequeños.',
      },
      {
        question: '¿Puedo convertir GIF animados con esta herramienta?',
        answer:
          'Los archivos GIF se pueden cargar, pero la conversión renderiza un solo fotograma fijo en lugar de preservar la animación.',
      },
      {
        question: '¿Por qué mi PNG convertido es más grande que el JPG original?',
        answer:
          'PNG es sin pérdida, por lo que una foto convertida de JPG comprimido a PNG almacena cada píxel sin compresión y suele crecer en tamaño.',
      },
      {
        question: '¿El conversor mantiene las dimensiones originales de la imagen?',
        answer:
          'Sí, las imágenes convertidas mantienen su resolución nativa completa a menos que las redimensione por separado con el Redimensionador de Imágenes.',
      },
      {
        question: '¿Puedo usar el Conversor de Formato de Imagen en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Seleccione imágenes de su dispositivo y descargue los archivos convertidos.',
      },
      {
        question: '¿Cuál es el mejor formato para imágenes de sitios web?',
        answer:
          'WebP suele ser mejor para fotos y gráficos en la web, mientras que PNG es mejor cuando necesita transparencia o calidad sin pérdida.',
      },
      {
        question: '¿Las imágenes convertidas incluyen marcas de agua?',
        answer:
          'No, los archivos convertidos son copias limpias sin marcas de agua ni branding agregados.',
      },
    ],
  },
  'image-rotate-flip': {
    instructions: [
      {
        title: 'Suba una imagen',
        description:
          'Elija cualquier imagen PNG, JPG, WebP o GIF para cargarla en la vista previa interactiva de Canvas.',
      },
      {
        title: 'Rote, voltee o aplique filtros',
        description:
          'Use los botones Girar a la izquierda/derecha, los interruptores de Volteo horizontal/vertical, el interruptor de Escala de grises y los controles deslizantes de Brillo/Contraste.',
      },
      {
        title: 'Revise el resultado en vivo',
        description:
          'Revise la vista previa de Canvas después de cada cambio para confirmar que la orientación y la intensidad del filtro se vean bien.',
      },
      {
        title: 'Restablezca si es necesario',
        description:
          'Use el botón Restablecer para deshacer todas las rotaciones, volteos y cambios de filtro y empezar de nuevo desde el original.',
      },
      {
        title: 'Elija un formato de salida',
        description:
          'Elija PNG para mantener la transparencia, JPG para fotos o WebP para archivos más pequeños antes de exportar.',
      },
      {
        title: 'Exporte la imagen editada',
        description:
          'Haga clic en Descargar para guardar su imagen rotada, volteada o filtrada en su dispositivo.',
      },
    ],
    examples: [
      {
        title: 'Corregir una foto de teléfono de lado y aumentar el brillo',
        input: 'Foto 3024×4032 girada 90° en sentido horario · Brillo: 110% · Contraste: 105%',
        output: 'Imagen vertical de 4032×3024 exportada limpiamente con la orientación EXIF integrada en los píxeles.',
        explanation: 'Canvas intercambia el ancho y el alto automáticamente en giros de 90° y 270°.',
      },
      {
        title: 'Convertir una foto a blanco y negro para imprimir',
        input: 'Foto a color · Escala de grises: activada · Contraste: 110%',
        output: 'Imagen en blanco y negro de alto contraste lista para imprimir o documentar.',
        explanation: 'El filtro de escala de grises se aplica en vivo antes de exportar, sin subir nada.',
      },
    ],
    benefits: [
      'La vista previa en vivo de píxeles se actualiza de inmediato sin latencia de subida',
      'Integra la orientación limpiamente en las coordenadas reales de píxeles en lugar de frágiles marcas EXIF',
      'Combina rotación, reflejo y ajustes de color/tono en un solo espacio de trabajo limpio',
      'El botón Restablecer no destructivo restaura los valores predeterminados en cualquier momento',
    ],
    useCases: [
      'Enderezar documentos o recibos escaneados capturados de lado',
      'Des-reflejar capturas de cámara web al revés o capturas de pantalla volteadas',
      'Crear gráficos en escala de grises de alto contraste para impresión o documentación',
      'Aclarar rápidamente fotos de productos subexpuestas antes de publicarlas',
    ],
    faqs: [
      {
        question: '¿Rotar una imagen vuelve a codificar los píxeles?',
        answer:
          'Sí. Dibujar sobre HTML5 Canvas integra la nueva orientación y los ajustes de filtro permanentemente en cada píxel para que todas las apps la muestren derecha.',
      },
      {
        question: '¿Puedo preservar fondos transparentes al rotar o voltear?',
        answer:
          'Sí: mantenga el Formato de salida en PNG o WebP para conservar la transparencia alfa completa alrededor de gráficos rotados o volteados.',
      },
      {
        question: '¿Las ediciones se guardan en sus servidores?',
        answer:
          'No. Todo se ejecuta dentro de su propia pestaña del navegador y se descarta cuando cierra la página.',
      },
      {
        question: '¿La herramienta para rotar imágenes es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, sin marcas de agua y sin límites.',
      },
      {
        question: '¿Cómo roto una imagen 90 grados?',
        answer:
          'Suba su imagen y haga clic en Girar a la derecha o Girar a la izquierda. Cada clic gira la imagen 90 grados.',
      },
      {
        question: '¿Puedo rotar una imagen 180 grados?',
        answer:
          'Sí, haga clic en Girar dos veces en la misma dirección para voltear la imagen boca abajo.',
      },
      {
        question: '¿Cómo volteo una imagen horizontalmente?',
        answer:
          'Use el interruptor de Volteo horizontal para reflejar la imagen de izquierda a derecha, lo que es útil para corregir selfies reflejadas.',
      },
      {
        question: '¿Cuál es la diferencia entre voltear y rotar una imagen?',
        answer:
          'Rotar gira la imagen alrededor de su centro, mientras que voltear la refleja como un reflejo en un espejo.',
      },
      {
        question: '¿Puedo rotar una foto sin perder calidad?',
        answer:
          'La herramienta vuelve a codificar la imagen a través de Canvas, por lo que exportar como PNG la mantiene sin pérdida. La exportación JPG aplica una compresión ligera.',
      },
      {
        question: '¿Rotar una imagen cambia sus dimensiones?',
        answer:
          'Una rotación de 90 o 270 grados intercambia el ancho y el alto. Una rotación de 180 grados mantiene las mismas dimensiones.',
      },
      {
        question: '¿Puedo hacer una foto en blanco y negro?',
        answer:
          'Sí, active el interruptor de Escala de grises para convertir su foto a blanco y negro al instante.',
      },
      {
        question: '¿Cómo aclaro una foto oscura?',
        answer:
          'Mueva el control de Brillo por encima del 100% y agregue un poco de Contraste para que la imagen no se vea lavada.',
      },
      {
        question: '¿Puedo rotar un PNG y mantener su transparencia?',
        answer:
          'Sí, exporte como PNG o WebP para preservar las áreas transparentes después de rotar o voltear.',
      },
      {
        question: '¿Mis fotos editadas se suben a un servidor?',
        answer:
          'No, toda la rotación, el volteo y el filtrado se ejecutan localmente en su navegador y nada se sube.',
      },
      {
        question: '¿Puedo rotar una imagen en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Suba una foto de lado, gírela hasta que quede derecha y descargue la versión corregida.',
      },
      {
        question: '¿Por qué mi foto está de lado después de subirla?',
        answer:
          'Algunos teléfonos almacenan la orientación como una marca EXIF que no todas las apps leen. Esta herramienta integra la orientación correcta en los píxeles para que se muestre derecha en todas partes.',
      },
      {
        question: '¿Puedo deshacer una rotación o un filtro?',
        answer:
          'Sí, el botón Restablecer restaura la imagen original y la configuración de filtro predeterminada en cualquier momento.',
      },
      {
        question: '¿La herramienta corrige fotos torcidas o inclinadas?',
        answer:
          'Gira en pasos de 90 grados, por lo que corrige fotos de lado o boca abajo. No se admiten correcciones de inclinación pequeñas.',
      },
      {
        question: '¿Qué formatos de imagen puedo rotar y voltear?',
        answer:
          'Puede editar imágenes PNG, JPG, WebP y GIF y exportarlas como PNG, JPG o WebP.',
      },
      {
        question: '¿Puedo rotar y voltear una imagen de una vez?',
        answer:
          'Sí, puede combinar rotaciones, volteos horizontales o verticales y filtros antes de exportar una sola imagen terminada.',
      },
    ],
  },
  'image-to-base64': {
    instructions: [
      {
        title: 'Elija el modo Codificar o Decodificar',
        description:
          'Use Imagen → Data URI Base64 para codificar un archivo, o Base64 → Vista previa de imagen para renderizar cargas útiles Base64 pegadas.',
      },
      {
        title: 'Cargue una imagen o pegue texto Base64',
        description:
          'Seleccione cualquier recurso PNG, JPG, WebP, SVG, GIF o ICO (o pegue una cadena completa data:image/... o texto Base64 sin procesar).',
      },
      {
        title: 'Revise la comparación de tamaños',
        description:
          'Compare el tamaño del archivo original con el tamaño de la cadena Base64 para ver la sobrecarga de aproximadamente 33% antes de incrustarla.',
      },
      {
        title: 'Elija el formato de salida que necesita',
        description:
          'Elija el Data URI completo, la cadena Base64 sin procesar, la etiqueta HTML <img> o el fragmento de background-image de CSS.',
      },
      {
        title: 'Copie el fragmento o descargue la vista previa',
        description:
          'Copie el Data URI, el Base64 sin procesar, la etiqueta HTML <img> o el fragmento de fondo CSS, o descargue una imagen de vista previa decodificada.',
      },
      {
        title: 'Consejo: ¿el Base64 pegado no funciona?',
        description:
          'Asegúrese de haber pegado la cadena completa sin saltos de línea, y verifique que el decodificador haya agregado el prefijo correcto data:image/... para su formato.',
      },
    ],
    examples: [
      {
        title: 'Incrustar una marca de verificación SVG de 2 KB dentro de CSS',
        input: 'check.svg (2.048 bytes)',
        output: 'data:image/svg+xml;base64,... (~2,7 KB) + regla CSS background-image lista para pegar',
        explanation: 'Ahorra una ida y vuelta HTTP extra para iconos de UI diminutos y correos HTML de un solo archivo sin conexión.',
      },
      {
        title: 'Decodificar una cadena Base64 copiada de DevTools',
        input: 'Cadena Base64 sin procesar de un icono PNG',
        output: 'Vista previa del icono renderizada con opción de descarga como PNG.',
        explanation: 'El decodificador agrega automáticamente el prefijo de Data URI PNG cuando falta el encabezado.',
      },
    ],
    benefits: [
      'Comparación instantánea del tamaño de archivo binario frente a la sobrecarga de cadena Base64 de ~33%',
      'Genera simultáneamente Data URI, Base64 sin procesar, <img> HTML y fragmentos de fondo CSS',
      'Antepone automáticamente el prefijo de Data URI PNG si pega Base64 sin procesar sin encabezado',
      'Mantiene recursos propietarios y blobs de respuesta de API sin conexión dentro de su navegador',
    ],
    useCases: [
      'Incrustar iconos diminutos dentro de paquetes CSS o informes HTML autocontenidos',
      'Depurar Data URIs de imágenes devueltas por API JSON o webhooks',
      'Incrustar insignias de marca pequeñas en plantillas de correo HTML transaccional',
      'Inspeccionar cargas útiles de imágenes codificadas copiadas de DevTools del navegador',
    ],
    faqs: [
      {
        question: '¿Cuándo debo usar imágenes Base64 en lugar de URL de imágenes normales?',
        answer:
          'Use Data URIs Base64 con moderación para iconos muy pequeños (generalmente menos de 5–10 KB) o exportaciones HTML de un solo archivo. Base64 expande el tamaño de los datos en ~33% y no se puede almacenar en caché de forma independiente entre páginas como las URL normales.',
      },
      {
        question: '¿El decodificador puede mostrar vistas previas de cadenas Base64 sin procesar sin el prefijo "data:image/png;base64,"?',
        answer:
          '¡Sí! Cambiar a Base64 → Vista previa de imagen elimina automáticamente los espacios en blanco y antepone un encabezado estándar de Data URI PNG si falta uno.',
      },
      {
        question: '¿Funciona con SVG vectoriales?',
        answer:
          'Sí. Subir un archivo .svg crea un URI válido data:image/svg+xml;base64,... junto con fragmentos HTML y CSS.',
      },
      {
        question: '¿El convertidor de imagen a Base64 es gratis?',
        answer:
          'Sí, es gratis sin registro, sin marcas de agua y sin límites en la cantidad de imágenes que codifica o decodifica.',
      },
      {
        question: '¿Qué es un Data URI Base64?',
        answer:
          'Un Data URI incrusta una imagen directamente dentro de una página web, hoja de estilos o correo como texto, comenzando con data:image/...;base64, seguido de los datos codificados.',
      },
      {
        question: '¿Por qué la cadena Base64 es más grande que mi imagen?',
        answer:
          'La codificación Base64 representa datos binarios con caracteres de texto, lo que agrega aproximadamente 33% de sobrecarga al tamaño original del archivo.',
      },
      {
        question: '¿Qué tamaño de imagen es mejor para la codificación Base64?',
        answer:
          'Mantenga las imágenes Base64 pequeñas, generalmente menos de 5–10 KB, como iconos y logotipos. Las imágenes más grandes inflan su HTML o CSS y no se pueden almacenar en caché por separado.',
      },
      {
        question: '¿Puedo convertir un JPG a Base64?',
        answer:
          'Sí, los archivos JPG, PNG, WebP, SVG, GIF e ICO se pueden codificar en Data URIs Base64.',
      },
      {
        question: '¿Cómo uso una imagen Base64 en HTML?',
        answer:
          'Copie la etiqueta HTML <img> generada y péguela en su página. El atributo src ya contiene el Data URI completo.',
      },
      {
        question: '¿Cómo uso una imagen Base64 en CSS?',
        answer:
          'Copie el fragmento de background-image de CSS y péguelo en su hoja de estilos para mostrar la imagen sin una solicitud de archivo separada.',
      },
      {
        question: '¿Puedo decodificar una cadena Base64 de vuelta a una imagen?',
        answer:
          'Sí, cambie a Base64 → Vista previa de imagen, pegue la cadena y la herramienta renderiza la imagen para que pueda verla o descargarla.',
      },
      {
        question: '¿Necesito el prefijo data:image/png;base64, al decodificar?',
        answer:
          'No, si pega Base64 sin procesar sin encabezado, la herramienta agrega automáticamente un prefijo estándar de Data URI PNG.',
      },
      {
        question: '¿La herramienta de imagen a Base64 sube mis archivos?',
        answer:
          'No, la codificación y decodificación se ejecutan por completo en su navegador y sus imágenes nunca salen de su dispositivo.',
      },
      {
        question: '¿Puedo codificar un SVG a Base64?',
        answer:
          'Sí, los archivos SVG producen un URI válido data:image/svg+xml;base64,... junto con fragmentos HTML y CSS coincidentes.',
      },
      {
        question: '¿Cuál es la diferencia entre Base64 sin procesar y un Data URI?',
        answer:
          'El Base64 sin procesar es solo el texto codificado, mientras que un Data URI agrega el encabezado data:image/...;base64, para que los navegadores conozcan el tipo de imagen.',
      },
      {
        question: '¿Puedo usar imágenes Base64 en correos?',
        answer:
          'Sí, las imágenes Base64 pequeñas funcionan bien en correos HTML autocontenidos, aunque algunos clientes de correo limitan el soporte de Data URI, así que pruebe antes de enviar.',
      },
      {
        question: '¿Hay un límite de tamaño de archivo para codificar?',
        answer:
          'No hay límite de servidor porque nada se sube. Las imágenes muy grandes están limitadas solo por la memoria de su navegador, y las cadenas Base64 enormes son poco prácticas para pegar.',
      },
      {
        question: '¿Puedo convertir una imagen Base64 en un archivo descargable?',
        answer:
          'Sí, decodifique la cadena en el modo Base64 → Vista previa de imagen y use la opción de descarga para guardarla como un archivo de imagen normal.',
      },
      {
        question: '¿La codificación Base64 cambia la calidad de la imagen?',
        answer:
          'No, Base64 es una representación de texto sin pérdida de los mismos bytes exactos, por lo que la imagen decodificada es idéntica a la original.',
      },
      {
        question: '¿Puedo usar el convertidor de imagen a Base64 en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Codifique una imagen de su galería de fotos o pegue una cadena Base64 para verla.',
      },
    ],
  },
  'color-contrast-checker': {
    instructions: [
      {
        title: 'Elija los colores de Primer plano y Fondo',
        description:
          'Use los selectores de color, las entradas HEX o las entradas individuales R/G/B, o empiece con ajustes accesibles e intercambie colores con un clic.',
      },
      {
        title: 'Ajuste los tonos hasta que la proporción pase',
        description:
          'Mueva la luminosidad o los canales RGB individuales y observe cómo se actualiza la proporción en vivo hasta que su par alcance el umbral AA o AAA que necesita.',
      },
      {
        title: 'Revise la tarjeta de puntuación WCAG 2.1',
        description:
          'Revise la proporción de contraste exacta (por ejemplo, 12.63 : 1) y el estado instantáneo de APROBADO/REPROBADO en los puntos de referencia AA Normal, AA Grande/UI, AAA Normal y AAA Grande.',
      },
      {
        title: 'Vea el par en texto real de UI',
        description:
          'Lea las vistas previas en vivo de tipografía y tarjetas de control de UI con borde para ver cómo se ven realmente sus colores como texto del cuerpo, encabezados y botones.',
      },
      {
        title: 'Extraiga muestras de una imagen (opcional)',
        description:
          'Suba cualquier captura de pantalla o logotipo de marca abajo para extraer hasta 8 colores dominantes distintos y aplicarlos directamente a Primer plano o Fondo.',
      },
      {
        title: 'Copie los colores y corrija los pares que fallan',
        description:
          'Copie los valores HEX, RGB o HSL sincronizados en su CSS. Si un par falla, oscurezca el texto o aclare el fondo hasta que la tarjeta de puntuación se vuelva verde.',
      },
    ],
    examples: [
      {
        title: 'Auditar la legibilidad de un botón CTA principal',
        input: 'Primer plano: #FFFFFF · Fondo: #4F46E5',
        output: 'Proporción de contraste 6.29 : 1 — Pasa WCAG AA Normal, AA Grande y AAA Grande',
        explanation: 'Usa la luminancia relativa oficial sRGB con corrección gamma (0.2126R + 0.7152G + 0.0722B).',
      },
      {
        title: 'Extraer la paleta de un logotipo de marca',
        input: 'Logotipo subido · 8 muestras extraídas',
        output: 'Muestras HEX dominantes listas para probar como Primer plano o Fondo.',
        explanation: 'El cuantizador de color de Canvas agrupa tonos cercanos y muestra los colores más prominentes por área.',
      },
    ],
    benefits: [
      'Fórmula exacta de luminancia relativa sRGB de WCAG 2.1, sin aproximaciones',
      'Vistas previas en vivo de tipografía y tarjetas de control de UI con borde con el par activo',
      'El cuantizador de color de imagen Canvas integrado extrae muestras de marca sin herramientas extra',
      'Muestra cadenas HEX, RGB y HSL sincronizadas listas para pegar en CSS',
    ],
    useCases: [
      'Auditar sistemas de diseño, paneles SaaS y temas de modo oscuro para cumplimiento WCAG AA/AAA',
      'Extraer colores de marca dominantes de logotipos de clientes directamente en paletas de UI accesibles',
      'Corregir pares de insignias, marcadores de posición o etiquetas de botones de bajo contraste antes del lanzamiento',
      'Enseñar jerarquía visual accesible con vistas previas en vivo de texto grande frente a normal',
    ],
    faqs: [
      {
        question: '¿Qué proporción de contraste se requiere para WCAG Nivel AA frente a Nivel AAA?',
        answer:
          'WCAG 2.1 Nivel AA requiere al menos 4.5:1 para texto normal del cuerpo y 3.0:1 para texto grande (18 pt+ o 14 pt+ en negrita) y componentes de UI. El Nivel AAA aumenta estos umbrales a 7.0:1 para texto normal y 4.5:1 para texto grande.',
      },
      {
        question: '¿Cómo funciona el extractor de paleta de imágenes?',
        answer:
          'Dibuja su imagen subida en un Canvas HTML5 fuera de pantalla, ignora los píxeles transparentes, agrupa cubos RGB cercanos y muestra hasta 8 muestras dominantes visualmente distintas por cobertura de área.',
      },
      {
        question: '¿El Verificador de Contraste de Color también convierte entre HEX, RGB y HSL?',
        answer:
          'Sí. Actualizar cualquier selector de color, entrada HEX o campo R/G/B recalcula automáticamente las representaciones HEX, rgb() y hsl().',
      },
      {
        question: '¿Qué cuenta como texto grande bajo las reglas de contraste WCAG?',
        answer:
          'El texto grande es de 18 pt (24 px) o más, o de 14 pt (18.66 px) en negrita o más. El texto grande solo necesita una proporción de 3.0:1 para AA y 4.5:1 para AAA, mientras que el texto normal necesita 4.5:1 para AA y 7.0:1 para AAA.',
      },
      {
        question: '¿El Verificador de Contraste de Color es gratis?',
        answer:
          'Sí, es completamente gratis sin registro. Todas las verificaciones se ejecutan localmente en su navegador, por lo que puede probar tantos pares de colores como quiera.',
      },
      {
        question: '¿Mis imágenes subidas salen de mi dispositivo?',
        answer:
          'No. La extracción de paleta ocurre por completo en su navegador usando un canvas fuera de pantalla, y sus imágenes nunca se suben a ningún servidor.',
      },
      {
        question: '¿Cómo se calcula la proporción de contraste?',
        answer:
          'Usa la fórmula oficial de WCAG 2.1: la luminancia relativa de cada color se calcula a partir de valores sRGB linealizados con gamma, y la proporción es (L1 + 0.05) / (L2 + 0.05), donde L1 es el color más claro.',
      },
      {
        question: '¿Puedo revisar el contraste para diseños de modo oscuro?',
        answer:
          'Sí. Ingrese sus colores de fondo oscuro y texto claro de la misma manera, y la tarjeta de puntuación muestra si el par pasa AA y AAA tanto para texto normal como grande.',
      },
      {
        question: '¿Por qué mi par de colores falla AA aunque me parece legible?',
        answer:
          'La legibilidad percibida y el contraste de luminancia medido son cosas diferentes. Los colores que le parecen distintos pueden seguir estando cerca en luminancia, especialmente los tonos medios, así que confíe en la proporción y ajuste la luminosidad hasta que pase.',
      },
      {
        question: '¿Qué debo hacer si mi color de marca falla la prueba de contraste?',
        answer:
          'Mantenga el color de marca para encabezados grandes o elementos decorativos, y use un tono más oscuro para el texto del cuerpo. También puede aclarar el fondo o agregar una superposición semitransparente detrás del texto.',
      },
      {
        question: '¿El verificador funciona para componentes de UI como botones e iconos?',
        answer:
          'Sí. WCAG 2.1 requiere una proporción de 3.0:1 para componentes de UI que no son texto, como bordes de botones, contornos de entradas e iconos significativos, y la columna AA Grande/UI de la tarjeta de puntuación cubre exactamente eso.',
      },
      {
        question: '¿Puedo probar texto de marcador de posición y estados deshabilitados con esta herramienta?',
        answer:
          'Sí, ingrese el color del marcador de posición o del estado deshabilitado como primer plano. Tenga en cuenta que los controles deshabilitados están exentos de los requisitos de contraste WCAG, pero el texto de marcador de posición que transmite información no lo está.',
      },
      {
        question: '¿Cuántos colores puede extraer el extractor de paleta de una imagen?',
        answer:
          'Hasta 8 colores dominantes distintos. Los tonos similares se agrupan, por lo que las muestras representan los colores visualmente más prominentes de la imagen en lugar de cada tono presente.',
      },
      {
        question: '¿Puedo aplicar una muestra extraída directamente como mi primer plano o fondo?',
        answer:
          'Sí. Cada muestra extraída tiene un botón para enviarla directamente al espacio de Primer plano o Fondo, para que pueda probarla contra su otro color de inmediato.',
      },
      {
        question: '¿Qué formatos de imagen funcionan con el extractor de paleta?',
        answer:
          'Cualquier imagen que su navegador pueda mostrar, incluidas capturas de pantalla o logotipos PNG, JPG, WebP y SVG. Los píxeles transparentes se ignoran al agrupar colores.',
      },
      {
        question: '¿El Verificador de Contraste de Color prueba el daltonismo?',
        answer:
          'No, mide solo el contraste de luminancia. El contraste es una parte de la accesibilidad; para la seguridad ante el daltonismo, evite también depender solo del color para transmitir significado y revise su paleta con un simulador de daltonismo.',
      },
      {
        question: '¿Puedo usar los valores HEX, RGB y HSL en mi CSS?',
        answer:
          'Sí. Los tres formatos se mantienen sincronizados mientras edita, y puede copiar cualquiera de ellos directamente en su hoja de estilos, tokens de diseño o configuración de Tailwind.',
      },
      {
        question: '¿Cuál es la diferencia entre AA y AAA en la práctica?',
        answer:
          'AA es el estándar legal y práctico al que apuntan la mayoría de los sitios, mientras que AAA es más estricto y a menudo difícil de cumplir para texto del cuerpo con colores de marca. Apunte a AAA donde pueda, pero nunca publique por debajo de AA para texto.',
      },
      {
        question: '¿La herramienta almacena mis elecciones de color o imágenes?',
        answer:
          'No. Todo se ejecuta localmente en la pestaña de su navegador, nada se sube y sus colores e imágenes desaparecen cuando cierra o actualiza la página.',
      },
      {
        question: '¿Puedo revisar más de un par de colores a la vez?',
        answer:
          'El verificador prueba un par de primer plano/fondo a la vez, pero puede intercambiar colores con un solo clic y volver a probar tantos pares como necesite en segundos.',
      },
    ],
  },
  'qr-code-scanner': {
    instructions: [
      {
        title: 'Suba una imagen QR o active el escaneo con cámara',
        description:
          'Suelte o seleccione cualquier captura QR en PNG, JPG, WebP o SVG, o haga clic en Iniciar escáner de cámara cuando quiera leer un código QR impreso en vivo.',
      },
      {
        title: 'Deje que el escáner decodifique el código',
        description:
          'La herramienta ejecuta decodificación local en su navegador con varias escalas y detección de inversión, por lo que incluso los códigos QR de modo oscuro o invertidos se leen sin subir nada.',
      },
      {
        title: 'Inspeccione y copie el texto decodificado',
        description:
          'Revise la carga útil decodificada, la categoría de carga útil detectada y la vista previa de enlace seguro (solo las URL http/https se convierten en enlaces clicables), luego copie con un clic.',
      },
      {
        title: 'Revise el tipo de carga útil antes de actuar',
        description:
          'Vea si el QR contiene una URL, credenciales de Wi-Fi, un contacto vCard o texto simple, y verifique que el destino se vea correcto antes de visitarlo o conectarse.',
      },
      {
        title: 'Cambie al Constructor de QR de contacto vCard (opcional)',
        description:
          'Cree un código QR de tarjeta de presentación VCF 3.0 escaneable con nombre, organización, teléfono, correo y sitio web, y descárguelo como PNG o SVG.',
      },
      {
        title: 'Descargue, imprima o solucione un escaneo fallido',
        description:
          'Descargue su QR vCard o vuelva a subir una captura más nítida y bien iluminada si la decodificación falla: los códigos QR recortados, borrosos o diminutos son la causa más común.',
      },
    ],
    examples: [
      {
        title: 'Verificar una captura de folleto de marketing impreso antes de pedir impresiones',
        input: 'Subir flyer-qr.png (PNG 600×600)',
        output: 'Carga útil decodificada · URL del sitio web: https://ejemplo.com/?utm_source=print',
        explanation: 'Ejecuta decodificación local con varias escalas y detección de inversión para que los códigos QR de modo oscuro invertidos también se decodifiquen de forma confiable.',
      },
      {
        title: 'Crear un código QR vCard para una tarjeta de presentación',
        input: 'Nombre: Ana Ruiz · Teléfono: +34 600 123 456 · Correo: ana@ejemplo.com',
        output: 'Código QR vCard 3.0 descargable en PNG y SVG.',
        explanation: 'Los teléfonos reconocen el formato VCF 3.0 y ofrecen guardar el contacto al escanear.',
      },
    ],
    benefits: [
      'Decodifica limpiamente capturas QR normales e invertidas en color sin apps móviles',
      'La transmisión de cámara opcional se detiene de inmediato al decodificar o al salir de la pestaña',
      'Clasifica las cargas útiles decodificadas limpiamente sin redirigir automáticamente',
      'Incluye generación completa de QR vCard 3.0 en PNG y SVG para tarjetas de presentación digitales',
    ],
    useCases: [
      'Verificar dos veces las URL de destino UTM dentro de recursos QR antes de imprimir carteles',
      'Extraer cadenas de Wi-Fi o tokens de texto de capturas de pantalla de escritorio',
      'Escanear códigos QR físicos en una laptop usando su cámara web integrada',
      'Crear códigos QR de contacto vCard escaneables para currículums, insignias y presentaciones',
    ],
    faqs: [
      {
        question: '¿Qué pasa si mi dispositivo no tiene cámara o deniega el permiso de cámara?',
        answer:
          'Nunca necesita una cámara para usar esta herramienta: simplemente tome una captura de pantalla o foto y súbala con Subir imagen de código QR, que funciona de forma idéntica sin permisos de cámara.',
      },
      {
        question: '¿Escanear un código QR abre automáticamente sitios web maliciosos?',
        answer:
          'No. El texto decodificado se muestra primero de forma segura dentro de un área de texto de solo lectura para que pueda inspeccionar cualquier URL antes de decidir si la visita.',
      },
      {
        question: '¿Necesita un generador de QR de URL, Wi-Fi o de color personalizado en lugar de un vCard?',
        answer:
          'Pruebe nuestra herramienta dedicada Generador de Códigos QR en Herramientas de Redes Sociales para colores personalizados de primer plano/fondo, niveles de corrección de errores y códigos QR de URL/texto.',
      },
      {
        question: '¿El Escáner de Códigos QR es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, y tanto el escaneo como la generación de QR vCard se ejecutan localmente en su navegador.',
      },
      {
        question: '¿Mis imágenes QR subidas se envían a un servidor?',
        answer:
          'No. La decodificación ocurre por completo en su navegador usando jsQR, por lo que sus capturas de pantalla y fotos nunca salen de su dispositivo.',
      },
      {
        question: '¿Qué formatos de imagen puede leer el Escáner de Códigos QR?',
        answer:
          'Las imágenes PNG, JPG, WebP y SVG funcionan. Las capturas de pantalla tomadas en un teléfono o computadora son la forma más común de proporcionar un código QR.',
      },
      {
        question: '¿Por qué falló el escaneo de mi código QR?',
        answer:
          'Las causas habituales son una imagen borrosa o de baja resolución, un código QR recortado demasiado ajustado, reflejos en un código impreso o un código simplemente demasiado pequeño en el marco. Vuelva a subir una captura más nítida, más grande y bien iluminada.',
      },
      {
        question: '¿El escáner puede leer códigos QR invertidos o de modo oscuro?',
        answer:
          'Sí. El decodificador detecta inversiones, por lo que los códigos QR con módulos claros sobre fondo oscuro se decodifican con la misma confiabilidad que los códigos estándar negros sobre blanco.',
      },
      {
        question: '¿Qué tipos de cargas útiles QR puede detectar?',
        answer:
          'Clasifica automáticamente el contenido decodificado, incluidas URL de sitios web, credenciales de red Wi-Fi, contactos vCard y texto simple, para que sepa qué hace un código antes de actuar sobre él.',
      },
      {
        question: '¿Es seguro escanear un código QR que encontré en público?',
        answer:
          'Escanear es seguro aquí porque nada se abre automáticamente: primero ve el texto decodificado. Siempre lea la URL con cuidado y evite ingresar contraseñas o datos de pago en páginas a las que lo lleve un código QR aleatorio.',
      },
      {
        question: '¿Puedo escanear un código QR con la cámara web de mi laptop?',
        answer:
          'Sí. Haga clic en Iniciar escáner de cámara, permita el acceso a la cámara cuando su navegador lo pida y sostenga el código impreso frente a la cámara. La transmisión se detiene automáticamente una vez que el código se decodifica o cuando sale de la pestaña.',
      },
      {
        question: '¿La cámara sigue grabando después de un escaneo?',
        answer:
          'No. La transmisión de cámara se detiene de inmediato tras una decodificación exitosa, y también se detiene si cambia de pestaña o cierra el escáner.',
      },
      {
        question: '¿Qué es un código QR vCard?',
        answer:
          'Un código QR vCard almacena datos de contacto — nombre, organización, teléfono, correo y sitio web — en el formato estándar VCF 3.0, por lo que escanearlo con un teléfono ofrece guardar el contacto directamente.',
      },
      {
        question: '¿Puedo descargar mi código QR vCard como PNG y SVG?',
        answer:
          'Sí. El constructor vCard exporta ambos formatos: PNG para documentos y presentaciones, y SVG para impresión nítida a cualquier tamaño.',
      },
      {
        question: '¿El código QR vCard funcionará tanto en iPhone como en Android?',
        answer:
          'Sí. Ambas plataformas reconocen los códigos QR vCard estándar VCF 3.0 y ofrecen agregar el contacto al escanear con la cámara integrada.',
      },
      {
        question: '¿Puedo escanear un código QR de un video o grabación de pantalla?',
        answer:
          'No directamente, pero puede pausar el video, tomar una captura de pantalla del fotograma que muestra el código QR y subir esa captura al escáner.',
      },
      {
        question: '¿El Escáner de Códigos QR funciona sin conexión?',
        answer:
          'Una vez cargada la página, la decodificación se ejecuta por completo en su navegador sin solicitudes de red, por lo que puede escanear imágenes subidas incluso sin conexión a internet.',
      },
      {
        question: '¿Puedo escanear varios códigos QR en una imagen?',
        answer:
          'El escáner decodifica un código QR a la vez. Si una imagen contiene varios códigos, recorte la imagen para que cada código se suba por separado.',
      },
      {
        question: '¿Qué debo revisar antes de imprimir un código QR en un folleto?',
        answer:
          'Suba una captura de pantalla del diseño terminado y escanee aquí para confirmar que la URL de destino, los parámetros UTM y la carga útil sean exactamente correctos antes de pedir impresiones.',
      },
      {
        question: '¿La herramienta almacena mis códigos QR escaneados o imágenes de cámara?',
        answer:
          'No. Nada se sube, registra ni almacena. Los resultados decodificados existen solo en su pestaña actual del navegador y desaparecen cuando la cierra.',
      },
    ],
  },
  'password-generator': {
    instructions: [
      {
        title: 'Elija Contraseña aleatoria o Frase de contraseña Diceware',
        description:
          'Use Contraseña aleatoria para máxima densidad de conjunto de caracteres o Frase de contraseña Diceware para escritura humana más fácil con fuerte entropía de varias palabras.',
      },
      {
        title: 'Personalice longitud, conjuntos de caracteres y cantidad por lote',
        description:
          'Ajuste la longitud (8–64 caracteres), active Mayúsculas/Minúsculas/Dígitos/Símbolos, excluya opcionalmente caracteres parecidos (0/O/1/l/I) o seleccione 3–8 palabras Diceware.',
      },
      {
        title: 'Genere su contraseña o frase de contraseña',
        description:
          'Haga clic en generar para crear una salida nueva usando el CSPRNG respaldado por hardware de su navegador con muestreo de rechazo, para que cada carácter tenga exactamente la misma probabilidad.',
      },
      {
        title: 'Revise la puntuación de entropía',
        description:
          'Inspeccione los bits exactos de entropía de Shannon (~72–118+ bits recomendados) para ver cuánto trabajo de adivinación representa el resultado antes de usarlo.',
      },
      {
        title: 'Regenere y copie de forma segura',
        description:
          '¿No le gusta un resultado? Regenere para obtener uno nuevo, luego copie una sola contraseña o todo el lote con un clic.',
      },
      {
        title: 'Guárdela en un gestor de contraseñas y actualice para borrar',
        description:
          'Pegue el resultado en su gestor de contraseñas de inmediato. Actualizar la página borra las contraseñas generadas de la memoria, así que nunca dependa de la pestaña para recordarlas.',
      },
    ],
    examples: [
      {
        title: 'Contraseña mixta de 18 caracteres con conjunto completo de caracteres',
        input: 'Longitud: 18 · Mayúsculas + Minúsculas + Dígitos + Símbolos (Conjunto: 88 caracteres)',
        output: '~116.3 bits de entropía criptográfica · Garantiza >= 1 carácter de cada clase habilitada',
        explanation: 'Usa muestreo de rechazo (descartar muestras uint32 >= floor(2^32 / conjunto) * conjunto) para uniformidad estricta.',
      },
      {
        title: 'Frase de contraseña Diceware de 5 palabras para cifrado de disco',
        input: 'Frase de contraseña Diceware · 5 palabras',
        output: 'Cinco palabras aleatorias fáciles de escribir con fuerte entropía, listas para memorizar.',
        explanation: 'Las frases de varias palabras son mucho más fáciles de escribir a mano que caracteres aleatorios.',
      },
    ],
    benefits: [
      'Evita estrictamente el inseguro Math.random(): usa window.crypto.getRandomValues con semilla de hardware',
      'Elimina el sesgo de módulo mediante muestreo de rechazo verdadero y mezcla Fisher-Yates sin sesgo',
      'Garantiza al menos un carácter de cada clase de caracteres seleccionada sin posiciones fijas',
      'Nada se registra, almacena ni transmite por la red',
    ],
    useCases: [
      'Proteger cuentas en la nube, claves SSH, credenciales de bases de datos y bóvedas maestras de gestores de contraseñas',
      'Generar frases de contraseña Diceware fáciles de escribir para cifrado de disco o claves de Wi-Fi para invitados',
      'Aprovisionar credenciales temporales de incorporación por lotes (hasta 10 por clic)',
      'Comparar el impacto de entropía en bits de 12 frente a 18 frente a 24 caracteres',
    ],
    faqs: [
      {
        question: '¿Por qué importa el muestreo de rechazo con crypto.getRandomValues?',
        answer:
          'Simplemente calcular randomUint32 % tamanoDelConjunto favorece ligeramente los caracteres de índice bajo cuando 2^32 no es divisible uniformemente por tamanoDelConjunto (sesgo de módulo). El muestreo de rechazo descarta las extracciones fuera de rango para que cada carácter del conjunto tenga exactamente la misma probabilidad matemática.',
      },
      {
        question: '¿Debo usar una contraseña aleatoria o una frase de contraseña?',
        answer:
          'Ambas son excelentes cuando son lo suficientemente largas: 16+ caracteres mixtos funcionan en todas partes en gestores de contraseñas, mientras que una frase de 5 a 6 palabras es mucho más fácil de escribir manualmente en televisores, teléfonos o solicitudes de descifrado de disco.',
      },
      {
        question: '¿Las contraseñas generadas se almacenan en algún lugar?',
        answer:
          'Nunca. Las contraseñas viven únicamente en la memoria efímera de React en su pestaña y desaparecen al actualizar.',
      },
      {
        question: '¿El Generador de Contraseñas es gratis?',
        answer:
          'Sí, es completamente gratis sin registro. Puede generar tantas contraseñas y frases de contraseña como necesite, directamente en su navegador.',
      },
      {
        question: '¿Cómo se generan las contraseñas aquí?',
        answer:
          'Se crean localmente en su navegador usando window.crypto.getRandomValues, el generador de números aleatorios criptográficamente seguro respaldado por hardware de su navegador, con muestreo de rechazo para eliminar el sesgo de módulo.',
      },
      {
        question: '¿Mis contraseñas generadas se envían a un servidor?',
        answer:
          'No. La generación ocurre por completo en su dispositivo, y nada se almacena, registra ni transmite por la red.',
      },
      {
        question: '¿Qué tan larga debe ser mi contraseña?',
        answer:
          'Para cuentas importantes, use al menos 16 caracteres con clases de caracteres mixtas, lo que da aproximadamente 100+ bits de entropía. Las contraseñas más cortas solo son adecuadas para cuentas de bajo valor, y la longitud importa más que la complejidad.',
      },
      {
        question: '¿Qué es la entropía de contraseña y cuántos bits necesito?',
        answer:
          'La entropía mide cuánto trabajo de adivinación representa una contraseña. Alrededor de 70–80 bits es fuerte para la mayoría de las cuentas, mientras que 100+ bits se recomienda para contraseñas maestras, claves de cifrado y cuentas de alto valor.',
      },
      {
        question: '¿Qué es una frase de contraseña Diceware?',
        answer:
          'Una frase de contraseña Diceware son varias palabras aleatorias elegidas de una lista fija de palabras, como "correct horse battery staple". Cinco o seis palabras aleatorias dan una entropía fuerte mientras siguen siendo mucho más fáciles de escribir y recordar que caracteres aleatorios.',
      },
      {
        question: '¿Debo excluir caracteres ambiguos como 0, O, 1, l e I?',
        answer:
          'Sí, cuando escribirá la contraseña a mano o la leerá en voz alta. Excluir los parecidos evita inicios de sesión mal escritos, y con una contraseña lo suficientemente larga la pequeña pérdida de entropía es insignificante.',
      },
      {
        question: '¿Puedo generar varias contraseñas a la vez?',
        answer:
          'Sí. Puede generar un lote de hasta 10 contraseñas con un clic, lo que es útil al aprovisionar cuentas o incorporar nuevos miembros del equipo.',
      },
      {
        question: '¿El generador garantiza al menos un carácter de cada clase seleccionada?',
        answer:
          'Sí. Cada contraseña generada incluye al menos un carácter de cada clase de caracteres que habilitó, sin colocar esos caracteres en posiciones fijas y predecibles.',
      },
      {
        question: '¿Puedo usar estas contraseñas para la contraseña maestra de mi gestor de contraseñas?',
        answer:
          'Una frase de contraseña larga funciona bien como contraseña maestra porque debe escribirla de memoria. Genere una frase de contraseña Diceware de 6 palabras, memorícela y almacene sus otras contraseñas en el gestor.',
      },
      {
        question: '¿Por qué no usar Math.random() para contraseñas?',
        answer:
          'Math.random() no es criptográficamente seguro: su salida puede predecirse si un atacante conoce su estado interno. Esta herramienta usa solo window.crypto.getRandomValues, diseñado para aleatoriedad sensible a la seguridad.',
      },
      {
        question: '¿Una contraseña generada funcionará en todos los sitios web?',
        answer:
          'Casi siempre. Si un sitio rechaza símbolos o limita la longitud, reduzca la longitud o desactive la clase de símbolos y regenere hasta que el sitio la acepte.',
      },
      {
        question: '¿Puedo reutilizar una contraseña generada en varios sitios?',
        answer:
          'No debería. Reutilizar una contraseña significa que una filtración expone todas las cuentas que la comparten, así que genere una contraseña única para cada sitio y guárdelas en un gestor de contraseñas.',
      },
      {
        question: '¿Qué pasa con mis contraseñas si actualizo la página?',
        answer:
          'Desaparecen. Las contraseñas generadas existen solo en la memoria temporal de la pestaña, así que cópielas o guárdelas en un gestor de contraseñas antes de actualizar o cerrar la página.',
      },
      {
        question: '¿El Generador de Contraseñas funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, la generación se ejecuta por completo en su navegador sin solicitudes de red, por lo que funciona sin conexión.',
      },
      {
        question: '¿Cómo elijo entre una contraseña y una frase de contraseña para Wi-Fi?',
        answer:
          'Use una frase de contraseña para claves Wi-Fi que escribe en muchos dispositivos, ya que las palabras son más fáciles de ingresar correctamente, y una contraseña de caracteres aleatorios cuando un gestor de contraseñas la completará por usted.',
      },
      {
        question: '¿Una contraseña generada está garantizada como inhackeable?',
        answer:
          'Ninguna contraseña puede garantizarse como inhackeable: un sitio aún puede ser vulnerado o engañado por phishing. Sin embargo, una contraseña larga, única y generada aleatoriamente almacenada en un gestor de contraseñas es una de las defensas prácticas más fuertes que puede usar.',
      },
    ],
  },
  'file-hash-verifier': {
    instructions: [
      {
        title: 'Seleccione un archivo de su dispositivo',
        description:
          'Elija un archivo, instalador, PDF o recurso binario. El archivo se lee estrictamente en la memoria local del navegador (se recomienda menos de 500 MB) y nunca se sube.',
      },
      {
        title: 'Espere a que se calculen los resúmenes',
        description:
          'El navegador calcula SHA-256, SHA-512, SHA-384 y SHA-1 en paralelo usando Web Crypto acelerado por hardware. Los archivos más grandes tardan unos segundos.',
      },
      {
        title: 'Inspeccione los resúmenes criptográficos calculados',
        description:
          'Revise los hashes hexadecimales SHA-256, SHA-512, SHA-384 y SHA-1 heredado junto con los metadatos del archivo y descargue un archivo de texto .sha256 estándar si lo necesita.',
      },
      {
        title: 'Verifique contra una suma de verificación publicada',
        description:
          'Pegue la cadena esperada SHA-256/512/384/1, o una línea completa "<hash>  nombredearchivo" de un archivo .sha256sum, para confirmar una coincidencia exacta o detectar corrupción o manipulación.',
      },
      {
        title: 'Copie o exporte el hash',
        description:
          'Copie cualquier resumen con un clic, o descargue el archivo de texto .sha256 estándar para enviarlo junto con un lanzamiento o guardarlo como registro de verificación.',
      },
      {
        title: 'Actúe ante una discrepancia o un archivo grande',
        description:
          'Si los hashes no coinciden, elimine el archivo y vuelva a descargarlo desde la fuente oficial. Para archivos de más de ~500 MB, use shasum -a 256 o certutil, ya que el navegador carga todo el archivo en memoria.',
      },
    ],
    examples: [
      {
        title: 'Verificar un binario de lanzamiento descargado contra un .sha256sum del proveedor',
        input: 'Archivo: app-v2.tar.gz · Esperado: "e3b0c442...  app-v2.tar.gz"',
        output: '¡Suma de verificación verificada! Coincide limpiamente con el resumen SHA-256 calculado.',
        explanation: 'Extrae automáticamente el token hash inicial, ignora mayúsculas y minúsculas, y compara con los 4 algoritmos calculados.',
      },
      {
        title: 'Detectar una descarga truncada antes de extraerla',
        input: 'Archivo: instalador.zip · Esperado: hash SHA-256 del sitio oficial',
        output: '¡No coincide! El hash calculado difiere del esperado: elimine el archivo y descárguelo de nuevo.',
        explanation: 'Una discrepancia significa que la descarga se corrompió, se truncó o posiblemente se manipuló.',
      },
    ],
    benefits: [
      'Usa Web Crypto SubtleCrypto nativo del navegador acelerado por C++/hardware',
      'Admite pegar líneas completas "<hash>  nombredearchivo" de manifiestos .sha256sum de lanzamientos',
      'Exporta archivos estándar de verificación nombredearchivo.sha256 con un clic',
      'Cero subidas de archivos mantienen privadas las compilaciones confidenciales y los contratos',
    ],
    useCases: [
      'Verificar ISO de Linux, binarios de CLI o tarballs de código abierto sin abrir una terminal',
      'Confirmar la entrega exacta byte por byte de archivos legales o financieros',
      'Generar manifiestos .sha256 de lanzamiento para pequeños entregables de clientes',
      'Detectar descargas truncadas o corruptas antes de la extracción',
    ],
    faqs: [
      {
        question: '¿Hay un límite máximo de tamaño de archivo?',
        answer:
          'Como File.arrayBuffer() del navegador carga todo el archivo en la RAM del cliente a la vez, los archivos de hasta ~300–500 MB funcionan sin problemas, mientras que los ISO de varios gigabytes pueden exceder las cuotas de memoria del navegador; para archivos de varios GB, se recomiendan herramientas CLI nativas (shasum -a 256 o certutil).',
      },
      {
        question: '¿Por qué SHA-1 se etiqueta solo como compatibilidad heredada?',
        answer:
          'SHA-1 tiene debilidades prácticas conocidas de colisión y no debe confiarse para garantías de seguridad adversariales; prefiera SHA-256 o SHA-512 siempre que sea posible.',
      },
      {
        question: '¿Busca hashear cadenas de texto sin procesar en lugar de archivos binarios?',
        answer:
          'Consulte nuestra herramienta Generador de Hash en Herramientas de Desarrollador para hashing instantáneo de texto UTF-8.',
      },
      {
        question: '¿El Verificador de Hash de Archivos es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, y puede verificar tantos archivos como quiera.',
      },
      {
        question: '¿Mis archivos se suben a algún lugar cuando los verifico?',
        answer:
          'No. El hashing ocurre por completo en su navegador usando la API Web Crypto, por lo que sus archivos nunca salen de su dispositivo, que es exactamente por qué es seguro para compilaciones confidenciales y contratos.',
      },
      {
        question: '¿Qué es un hash de archivo y por qué debo revisarlo?',
        answer:
          'Un hash es una huella digital de longitud fija calculada a partir de los bytes exactos de un archivo. Si cambia aunque sea un byte, el hash cambia por completo, por lo que comparar hashes prueba que una descarga llegó intacta y sin modificaciones.',
      },
      {
        question: '¿Qué algoritmo hash debo usar: SHA-256, SHA-512 o SHA-1?',
        answer:
          'Use SHA-256 para verificación general: es el estándar que proporcionan los editores. SHA-512 es igualmente fuerte y más rápido en sistemas de 64 bits, mientras que SHA-1 es solo heredado y no debe confiarse para seguridad.',
      },
      {
        question: '¿Dónde encuentro la suma de verificación oficial para comparar?',
        answer:
          'Los editores generalmente la listan en la página de descarga o en un archivo .sha256 / .sha256sum junto a la descarga. Siempre cópiela del propio sitio del proveedor, nunca de un espejo o publicación de foro.',
      },
      {
        question: '¿Qué debo hacer si los hashes no coinciden?',
        answer:
          'No ejecute ni extraiga el archivo. Elimínelo y vuelva a descargarlo desde la fuente oficial; una discrepancia significa que la descarga se corrompió, se truncó o posiblemente se manipuló.',
      },
      {
        question: '¿Puedo pegar una línea completa .sha256sum en lugar de solo el hash?',
        answer:
          'Sí. El verificador acepta una línea completa "<hash>  nombredearchivo" de un manifiesto de lanzamiento: extrae automáticamente el token hash inicial, ignora mayúsculas y minúsculas, y lo compara con los cuatro algoritmos calculados.',
      },
      {
        question: '¿El hash depende del nombre del archivo?',
        answer:
          'No. El resumen se calcula solo a partir del contenido del archivo, por lo que cambiar el nombre de un archivo nunca cambia su hash. Dos archivos con los mismos bytes siempre producen el mismo hash.',
      },
      {
        question: '¿Puedo verificar un ISO de Linux o un instalador grande con esta herramienta?',
        answer:
          'Sí, hasta aproximadamente 300–500 MB. Para ISO de varios gigabytes, use una herramienta nativa como shasum -a 256 en macOS/Linux o certutil -hashfile en Windows, ya que los navegadores cargan todo el archivo en memoria.',
      },
      {
        question: '¿Cuál es la diferencia entre SHA-256 y SHA-512?',
        answer:
          'Ambos son miembros seguros de la familia SHA-2; SHA-256 produce un resumen hexadecimal de 64 caracteres y SHA-512 uno de 128 caracteres. SHA-512 es ligeramente más fuerte y rápido en hardware de 64 bits, pero SHA-256 es la suma de verificación más ampliamente publicada.',
      },
      {
        question: '¿Esta herramienta puede detectar un virus o malware en un archivo?',
        answer:
          'No. Un hash coincidente solo prueba que el archivo es idéntico al que lanzó el editor. Si el propio archivo del editor fuera malicioso, el hash seguiría coincidiendo, así que solo verifique descargas de fuentes en las que confía.',
      },
      {
        question: '¿Cómo descargo un archivo .sha256 para mi propio lanzamiento?',
        answer:
          'Hashee su archivo de lanzamiento aquí, luego descargue el archivo de texto nombredearchivo.sha256 estándar que genera la herramienta y publíquelo junto con su descarga para que los usuarios puedan verificarla.',
      },
      {
        question: '¿Por qué el hashing tarda unos segundos para archivos grandes?',
        answer:
          'El navegador debe leer y procesar cada byte del archivo. Los archivos más grandes simplemente tardan más, y el tiempo crece con el tamaño del archivo en lugar de con el algoritmo que elija.',
      },
      {
        question: '¿El Verificador de Hash de Archivos funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, todo el hashing se ejecuta localmente en su navegador sin solicitudes de red, por lo que puede verificar archivos sin conexión a internet.',
      },
      {
        question: '¿Puedo verificar varios archivos a la vez?',
        answer:
          'La herramienta verifica un archivo a la vez. Hashee cada archivo por separado y compárelo con su propia suma de verificación publicada.',
      },
      {
        question: '¿Un hash coincidente prueba que el archivo es auténtico?',
        answer:
          'Prueba que el archivo es byte por byte idéntico al que el editor hasheó. No prueba que el editor sea quien dice ser, así que obtenga el hash esperado del canal oficial del editor.',
      },
      {
        question: '¿La herramienta almacena mis archivos o sus hashes?',
        answer:
          'No. Nada se sube ni almacena, y los hashes calculados existen solo en su pestaña actual del navegador hasta que la cierra o actualiza.',
      },
    ],
  },
  'favicon-generator': {
    instructions: [
      {
        title: 'Elija Insignia de monograma o Subir logotipo',
        description:
          'Ingrese 1–3 iniciales de marca con colores personalizados de fondo/texto, o cambie a Subir imagen de logotipo para recortar al centro una marca PNG/SVG/JPG existente.',
      },
      {
        title: 'Estilice su icono',
        description:
          'Elija sus letras de monograma y colores, o ajuste el recorte del logotipo subido para que la marca quede centrada con relleno uniforme en todos los lados.',
      },
      {
        title: 'Seleccione la forma de esquina',
        description:
          'Elija Cuadrado redondeado (estilo iOS/macOS), Círculo o Cuadrado nítido.',
      },
      {
        title: 'Revise cada tamaño',
        description:
          'Revise cuidadosamente las vistas previas de 16×16 y 32×32: una marca que se ve bien grande puede volverse borrosa a tamaño de pestaña, así que simplifique letras o detalles si es necesario.',
      },
      {
        title: 'Descargue favicon.ico, PNG y el fragmento HTML',
        description:
          'Descargue el paquete favicon.ico de varios marcos junto con tamaños PNG individuales y copie las etiquetas <head> link en su proyecto.',
      },
      {
        title: 'Instale los iconos y limpie la caché',
        description:
          'Coloque los archivos en su carpeta /public/, pegue las etiquetas link en index.html y luego actualice forzado o limpie la caché de su navegador: los navegadores almacenan favicons en caché agresivamente, por lo que un icono desactualizado generalmente significa uno en caché.',
      },
    ],
    examples: [
      {
        title: 'Crear iconos para una nueva app React o Cloudflare Pages',
        input: 'Monograma "UH" · Fondo #4F46E5 · Forma: Cuadrado redondeado',
        output: 'favicon.ico binario (marcos PNG 16+32+48 px) + 6 tamaños PNG + fragmento HTML <link>',
        explanation: 'Construye encabezados binarios ICONDIR e ICONDIRENTRY válidos directamente dentro de búferes Uint8Array.',
      },
      {
        title: 'Convertir un logotipo cuadrado en un conjunto completo de iconos PWA',
        input: 'Logotipo PNG 512×512 con fondo transparente · Forma: Círculo',
        output: 'Iconos Apple Touch 180×180 y PWA 192×192/512×512 con etiquetas <link> listas.',
        explanation: 'El recorte centrado mantiene la marca centrada con relleno uniforme en todos los tamaños.',
      },
    ],
    benefits: [
      'Crea un archivo .ico binario genuino de varios marcos (16×16, 32×32 y 48×48), no un PNG renombrado',
      'Cubre pestañas de escritorio, Apple Touch (180×180) e iconos de Manifiesto web (192/512 px)',
      'El modo Monograma instantáneo no requiere software de diseño para proyectos paralelos y MVP',
      'Genera código estándar HTML5 <link rel="icon"> listo para pegar en index.html',
    ],
    useCases: [
      'Enviar favicons e iconos Apple Touch faltantes antes de lanzamientos SaaS o de micrositios',
      'Crear iconos de pestaña de alto contraste para paneles de pruebas frente a producción',
      'Convertir marcas SVG/PNG cuadradas de marca en conjuntos completos de iconos PWA',
      'Generar vistas previas nítidas de 16×16 y 32×32 para verificar la legibilidad a tamaño pequeño',
    ],
    faqs: [
      {
        question: '¿El favicon.ico descargado es un archivo binario ICO real?',
        answer:
          'Sí. Escribe encabezados ICONDIR estándar de Windows ICO y entradas de directorio que contienen tres marcos nítidos codificados en PNG (16×16, 32×32 y 48×48) compatibles con todos los navegadores y sistemas operativos modernos.',
      },
      {
        question: '¿Qué tamaños de icono necesitan realmente los sitios web modernos?',
        answer:
          'Un favicon.ico más un PNG de 32×32, un icono Apple Touch de 180×180 y PNG de Manifiesto web de 192×192 / 512×512 cubren prácticamente todos los navegadores de escritorio, iOS móvil y Android.',
      },
      {
        question: '¿Dónde debo poner estos archivos en un proyecto React + Vite?',
        answer:
          'Coloque favicon.ico y los iconos PNG dentro de la carpeta /public/ de su proyecto y pegue las etiquetas HTML <link> dentro del <head> de index.html.',
      },
      {
        question: '¿El Generador de Favicon es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, y todos los iconos se generan localmente en su navegador.',
      },
      {
        question: '¿Mis logotipos subidos se envían a un servidor?',
        answer:
          'No. Su logotipo se procesa por completo en su navegador y nunca se sube, por lo que sus recursos de marca se mantienen privados.',
      },
      {
        question: '¿Cuál es la diferencia entre un favicon.ico y un favicon PNG?',
        answer:
          'Un favicon.ico es un contenedor que guarda varios tamaños de icono en un archivo binario, que los navegadores han admitido durante décadas. Un favicon PNG es una imagen de un solo tamaño; los navegadores modernos aceptan ambos, pero .ico sigue siendo el valor predeterminado más seguro.',
      },
      {
        question: '¿Qué es un icono Apple Touch?',
        answer:
          'Es el icono PNG de 180×180 que iOS usa cuando alguien agrega su sitio a su pantalla de inicio. Sin uno, iOS toma una captura de pantalla de su página, que generalmente se ve mal.',
      },
      {
        question: '¿Para qué sirven los iconos PWA de 192×192 y 512×512?',
        answer:
          'Son los iconos listados en el manifiesto de su app web para Progressive Web Apps instalables. Android y Chrome los usan para el icono de pantalla de inicio, la pantalla de bienvenida y el lanzador de apps.',
      },
      {
        question: '¿Puedo hacer un favicon a partir de texto sin un logotipo?',
        answer:
          'Sí. El modo Monograma convierte 1–3 letras, como las iniciales de su marca, en una insignia limpia con su elección de color de fondo, color de texto y forma de esquina, sin necesidad de software de diseño.',
      },
      {
        question: '¿Qué archivo de logotipo debo subir para obtener el mejor resultado?',
        answer:
          'Suba un PNG o SVG cuadrado con fondo transparente de 512×512 o más. Las imágenes de origen cuadradas se recortan limpiamente; los logotipos anchos o altos se recortan al centro, lo que puede cortar bordes.',
      },
      {
        question: '¿Por qué mi nuevo favicon no aparece después de desplegar?',
        answer:
          'Los navegadores almacenan favicons en caché muy agresivamente. Actualice forzado con Ctrl+Shift+R (o Cmd+Shift+R en Mac), limpie la caché del sitio o pruebe en una ventana privada para ver el nuevo icono.',
      },
      {
        question: '¿El favicon debe coincidir exactamente con mi logotipo?',
        answer:
          'A tamaños grandes sí, pero a 16×16 los detalles finos desaparecen. Simplifique la marca para los tamaños más pequeños: las iniciales en negrita o una sola forma en negrita se leen mucho mejor que un logotipo detallado.',
      },
      {
        question: '¿Qué forma de esquina debo elegir?',
        answer:
          'El Cuadrado redondeado coincide con el estilo de iconos de apps de iOS y macOS, el Círculo se adapta a avatares y marcas estilo social, y el Cuadrado nítido es mejor para marcas geométricas o técnicas.',
      },
      {
        question: '¿Necesito agregar etiquetas link HTML para los iconos?',
        answer:
          'Sí para resultados confiables. Los navegadores buscan /favicon.ico por defecto, pero los iconos Apple Touch y PWA solo cargan cuando los declara con etiquetas <link> en el <head> de su página, que esta herramienta genera para usted.',
      },
      {
        question: '¿Puedo usar los iconos generados también para una app móvil?',
        answer:
          'Los PNG de 192×192 y 512×512 funcionan para instalaciones PWA, pero las apps nativas de iOS y Android necesitan sus propios conjuntos de iconos con tamaños y formatos específicos, que esta herramienta enfocada en web no genera.',
      },
      {
        question: '¿El Generador de Favicon funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, la generación de iconos se ejecuta por completo en su navegador sin solicitudes de red.',
      },
      {
        question: '¿Qué color de fondo funciona mejor para un favicon de monograma?',
        answer:
          'Un color de marca sólido y de alto contraste con letras blancas o casi blancas funciona mejor, ya que se mantiene legible a 16×16. Evite texto claro sobre fondos claros y degradados recargados.',
      },
      {
        question: '¿Puedo regenerar iconos después de cambiar los colores de mi marca?',
        answer:
          'Sí. Simplemente actualice los colores o suba el nuevo logotipo y descargue un conjunto nuevo: la herramienta no guarda nada de su sesión anterior, por lo que cada ejecución empieza limpia.',
      },
      {
        question: '¿El favicon funcionará en pestañas de navegador en modo oscuro?',
        answer:
          'Un favicon con un color de fondo sólido se muestra igual en pestañas claras y oscuras. Si su marca es oscura sobre transparente, agregue un fondo claro o un contorno para que se mantenga visible en el cromo oscuro del navegador.',
      },
      {
        question: '¿La herramienta almacena mis logotipos o iconos generados?',
        answer:
          'No. Todo se ejecuta localmente en la pestaña de su navegador, nada se sube ni almacena, y sus archivos desaparecen cuando cierra o actualiza la página.',
      },
    ],
  },
};
