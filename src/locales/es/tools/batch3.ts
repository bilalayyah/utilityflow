import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Batch 3: Calculators (15 tools).
 * Source: src/registry/batches/batch3/calcToolsPart1.ts, Part2, Part3.
 * Filled by Phase 1 translation. See batch1.ts for the required shape.
 */
export const ES_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'calculadora-de-edad',
    name: 'Calculadora de Edad',
    shortDescription:
      'Calcula la edad cronológica exacta en años, meses y días, además del total de semanas, días y la cuenta regresiva para tu próximo cumpleaños.',
    keywords: [
      'calculadora de edad',
      'edad cronológica',
      'calculadora de fecha de nacimiento',
      'cuenta regresiva de cumpleaños',
      'edad exacta en días',
      'edad en años meses y días',
      'cuántos años tengo calculadora',
      'calculadora de edad por fecha de nacimiento',
      'verificador de edad de cumpleaños',
    ],
    seo: {
      title: 'Calculadora de Edad – Años, Meses y Días | UtilityFlow',
      description:
        'Calcula tu edad exacta desde tu fecha de nacimiento en años, meses, días, semanas y días totales, con cuenta regresiva para tu próximo cumpleaños, gratis.',
      primaryKeyword: 'calculadora de edad',
      secondaryKeywords: [
        'calculadora de edad cronológica',
        'cuántos años tengo por fecha de nacimiento',
        'edad en días semanas y meses',
        'calcular mi edad exacta hoy',
      ],
      longTailKeywords: [
        'calcular edad exacta en años meses y días en línea',
        'cuántos días faltan para mi próximo cumpleaños',
        'consultar edad en una fecha futura o pasada',
        'cuántos años tengo hoy calculadora',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calcula la edad cronológica exacta entre una fecha de nacimiento y hoy, o cualquier fecha pasada o futura, teniendo en cuenta con precisión los meses de distinta duración y los años bisiestos.',
    instructions: [
      {
        title: 'Ingresa tu fecha de nacimiento',
        description:
          'Selecciona el mes, el día y el año de tu nacimiento en el campo Fecha de nacimiento.',
      },
      {
        title: 'Elige la fecha de comparación',
        description:
          'Deja la fecha de referencia en hoy o elige cualquier fecha pasada o futura para calcular la edad en ese día.',
      },
      {
        title: 'Ejecuta el cálculo de edad',
        description:
          'El resultado se actualiza al instante en tu navegador, sin presionar ningún botón y sin subir datos a ningún lugar.',
      },
      {
        title: 'Revisa el desglose completo',
        description:
          'Lee tus años, meses y días exactos, el total de semanas, los días totales vividos y la cuenta regresiva para tu próximo cumpleaños.',
      },
      {
        title: 'Copia o comparte tu resultado',
        description:
          'Copia el desglose de edad para pegarlo en un formulario, un mensaje o un documento donde lo necesites.',
      },
      {
        title: 'Consejo: consulta un hito futuro',
        description:
          'Establece la fecha de comparación en un cumpleaños, un examen o una fecha de jubilación para ver exactamente cuántos años tendrás ese día.',
      },
    ],
    examples: [
      {
        title: 'Consulta de edad para un hito común',
        input: 'Fecha de nacimiento: 1995-06-15 · Fecha de referencia: 2025-11-12',
        output: '30 años, 4 meses, 28 días (11.108 días)',
        explanation:
          'Usa la duración exacta de los meses del calendario y los años bisiestos entre 1995 y 2025.',
      },
      {
        title: 'Edad exacta en un cumpleaños cerrado',
        input: 'Fecha de nacimiento: 2000-01-01 · Fecha de referencia: 2025-01-01',
        output: '25 años exactos (9.132 días)',
        explanation:
          'Veinticinco años incluyen 7 días bisiestos (2000, 2004, 2008, 2012, 2016, 2020 y 2024): 25 × 365 + 7 = 9.132 días.',
      },
    ],
    benefits: [
      'Maneja meses de 28, 29, 30 y 31 días sin aproximaciones de 30 días',
      'Tiene en cuenta con precisión los cumpleaños del 29 de febrero en los cálculos de cuenta regresiva',
      'Muestra a la vez el total de meses, semanas, días y horas aproximadas',
      'Valida rangos no válidos cuando la fecha de nacimiento es posterior a la fecha objetivo',
    ],
    useCases: [
      'Verificar la edad exacta para inscripción escolar, pensiones o formularios oficiales',
      'Calcular aniversarios de hitos en días o semanas totales',
      'Comprobar cuántos años tendrá alguien en una fecha próxima de un evento',
      'Saber cuántos días faltan para el próximo cumpleaños',
    ],
    faqs: [
      {
        question: '¿Cómo maneja la Calculadora de Edad los cumpleaños en año bisiesto (29 de febrero)?',
        answer:
          'En los años no bisiestos, la cuenta regresiva para el próximo cumpleaños se alinea con el 28 de febrero del año objetivo, para que el conteo de días siga siendo exacto.',
      },
      {
        question: '¿Por qué los días totales a veces difieren de años × 365 en la Calculadora de Edad?',
        answer:
          'Cada año bisiesto agrega un día 366 (29 de febrero) y los meses del calendario varían de 28 a 31 días. Esta herramienta cuenta la diferencia exacta de días del calendario en UTC.',
      },
      {
        question: '¿Puedo calcular mi edad en una fecha futura con la Calculadora de Edad?',
        answer:
          'Sí. Cambia la fecha de referencia a cualquier fecha futura para ver tu edad proyectada exacta en ese día.',
      },
      {
        question: '¿La Calculadora de Edad es gratuita?',
        answer:
          'Sí, es completamente gratuita, sin registro, y funciona por completo en tu navegador, así que tu fecha de nacimiento nunca se sube a ningún servidor.',
      },
      {
        question: '¿Qué muestra la Calculadora de Edad además de los años?',
        answer:
          'Muestra años, meses y días, además del total de meses, el total de semanas, los días totales vividos y los días que faltan para tu próximo cumpleaños.',
      },
      {
        question: '¿Qué tan precisa es la Calculadora de Edad?',
        answer:
          'Usa la duración exacta de los meses del calendario y los años bisiestos, así que el resultado coincide con el calendario real y no con una aproximación de meses de 30 días.',
      },
      {
        question: '¿La Calculadora de Edad puede calcular mi edad solo en días?',
        answer:
          'Sí. El desglose incluye los días totales vividos, útil para conteos de hitos y aniversarios medidos en días.',
      },
      {
        question: '¿Puedo usar la Calculadora de Edad para saber mi edad en semanas o meses?',
        answer:
          'Sí, los resultados incluyen el total de semanas y el total de meses junto con el desglose en años, meses y días.',
      },
      {
        question: '¿La Calculadora de Edad guarda mi fecha de nacimiento?',
        answer:
          'No. Todos los cálculos se hacen localmente en tu navegador y nada de lo que ingresas se guarda ni se envía a un servidor.',
      },
      {
        question: '¿Qué pasa si ingreso una fecha de nacimiento posterior a la fecha de comparación?',
        answer:
          'La herramienta muestra un mensaje de validación, porque no se puede calcular una edad cuando la fecha de nacimiento es posterior a la fecha con la que se compara.',
      },
      {
        question: '¿La Calculadora de Edad puede decirme cuántos años tendré al jubilarme?',
        answer:
          'Sí. Establece la fecha de comparación en tu fecha prevista de jubilación y la herramienta mostrará tu edad exacta en ese día.',
      },
      {
        question: '¿La Calculadora de Edad cuenta las horas que he vivido?',
        answer:
          'Muestra una cifra aproximada de horas según los días totales vividos, junto con el resultado exacto en años, meses y días.',
      },
      {
        question: '¿Puedo consultar la edad de otra persona con la Calculadora de Edad?',
        answer:
          'Sí, puedes ingresar cualquier fecha de nacimiento para calcular la edad de esa persona, por ejemplo para verificar elegibilidad escolar o de pensión.',
      },
      {
        question: '¿Por qué la Calculadora de Edad pide una fecha de comparación?',
        answer:
          'La fecha de comparación es el día en el que quieres medir tu edad: hoy por defecto, o cualquier fecha pasada o futura para planificación y registros.',
      },
      {
        question: '¿La Calculadora de Edad funciona con fechas de nacimiento muy antiguas?',
        answer:
          'Sí, maneja fechas de nacimiento de hace muchas décadas y cuenta correctamente los años bisiestos durante todo el período.',
      },
      {
        question: '¿Puedo usar la Calculadora de Edad para formularios oficiales?',
        answer:
          'Sí, el resultado exacto en años, meses y días sirve para verificar la elegibilidad por edad, aunque los documentos oficiales siguen siendo la prueba final.',
      },
      {
        question: '¿Cómo cuenta la Calculadora de Edad mi próximo cumpleaños?',
        answer:
          'Compara la fecha de hoy con la fecha de tu próximo cumpleaños y muestra la cantidad exacta de días que faltan hasta entonces.',
      },
      {
        question: '¿La Calculadora de Edad necesita conexión a internet?',
        answer:
          'Necesita que la página esté cargada, pero el cálculo en sí se ejecuta localmente en tu navegador sin subir nada.',
      },
      {
        question: '¿La Calculadora de Edad puede mostrar mi edad en una fecha pasada?',
        answer:
          'Sí. Elige cualquier fecha pasada como fecha de comparación para ver exactamente cuántos años tenías ese día.',
      },
      {
        question: '¿Mi fecha de nacimiento es privada cuando uso la Calculadora de Edad?',
        answer:
          'Sí. La herramienta funciona localmente en tu navegador, así que tu fecha de nacimiento nunca sale de tu dispositivo.',
      },
    ],
  },
  'percentage-calculator': {
    slug: 'calculadora-de-porcentaje',
    name: 'Calculadora de Porcentaje',
    shortDescription:
      'Resuelve el porcentaje de un número, qué porcentaje es X de Y y el aumento o la disminución porcentual al instante.',
    keywords: [
      'calculadora de porcentaje',
      'calculadora de cambio porcentual',
      'aumento y disminución porcentual',
      'qué porcentaje de',
      'calculadora de porcentaje de un número',
      'calculadora de diferencia porcentual',
      'calcular aumento porcentual',
      'calculadora de disminución porcentual',
      'calculadora de fórmula de porcentaje',
    ],
    seo: {
      title: 'Calculadora de Porcentaje – Porcentajes | UtilityFlow',
      description:
        'Calcula el X% de Y, descubre qué porcentaje es un número de otro y mide el aumento o la disminución porcentual en un solo espacio limpio y gratis, al instante.',
      primaryKeyword: 'calculadora de porcentaje',
      secondaryKeywords: [
        'calculadora de cambio porcentual',
        'calculadora de aumento porcentual',
        'razón a porcentaje',
        'calculadora de porcentaje de un número',
      ],
      longTailKeywords: [
        'calcular aumento o disminución porcentual entre dos números',
        'cómo saber qué porcentaje es x de y',
        'solucionador de porcentajes instantáneo en el navegador',
        'cuánto es x por ciento de y calculadora en línea',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Resuelve en paralelo las tres preguntas de porcentaje más comunes: hallar el X% de un valor, determinar qué porcentaje representa X de Y y medir el crecimiento o la disminución porcentual.',
    instructions: [
      {
        title: 'Elige el bloque de cálculo de porcentaje',
        description:
          'Cada tarjeta resuelve una fórmula de porcentaje distinta de forma independiente, sin borrar tus otros números.',
      },
      {
        title: 'Ingresa tus valores numéricos',
        description:
          'Escribe números enteros o decimales en los campos resaltados; los resultados se recalculan con cada tecla.',
      },
      {
        title: 'Ejecuta el cálculo al instante',
        description:
          'No hay botón de envío: el resultado del porcentaje aparece de inmediato mientras escribes, directamente en tu navegador.',
      },
      {
        title: 'Revisa los resultados de la fórmula',
        description:
          'Revisa tanto el cambio porcentual con signo como la diferencia numérica absoluta para verificar aumentos o disminuciones.',
      },
      {
        title: 'Copia tu resultado de porcentaje',
        description:
          'Copia la respuesta para pegarla en un informe, una factura, una hoja de cálculo o un mensaje.',
      },
      {
        title: 'Consejo: revisa un valor inicial cero o negativo',
        description:
          'Si el resultado muestra un mensaje de validación, revisa si hay un denominador cero o un valor inicial negativo, contra los que la herramienta te protege.',
      },
    ],
    examples: [
      {
        title: 'Medir el crecimiento porcentual de ingresos',
        input: 'De 120 a 150',
        output: '+25% (+30 de cambio absoluto)',
        explanation: 'Se calcula como ((150 - 120) / |120|) × 100 = +25%.',
      },
      {
        title: 'Hallar el 20% de un número',
        input: '20% de 250',
        output: '50',
        explanation: 'Se calcula como 250 × (20 / 100) = 50.',
      },
    ],
    benefits: [
      'Muestra las tres fórmulas de porcentaje lado a lado en una sola pantalla',
      'Maneja con limpieza decimales, valores iniciales negativos y protección contra denominador cero',
      'Muestra la diferencia absoluta junto con el cambio porcentual',
      'No requiere recargas de página ni clics de envío',
    ],
    useCases: [
      'Revisar el crecimiento de tráfico, ventas o tasa de conversión mes a mes',
      'Calcular puntajes de exámenes y porcentajes de calificaciones',
      'Aplicar recargos o deducciones porcentuales rápidos a facturas',
      'Comparar precios o asignaciones de presupuesto antes y después',
    ],
    faqs: [
      {
        question: '¿Cómo se calcula el cambio porcentual cuando los valores bajan en la Calculadora de Porcentaje?',
        answer:
          'El cambio porcentual usa ((Valor nuevo − Valor anterior) / |Valor anterior|) × 100. Cuando el valor nuevo es menor que el anterior, la herramienta reporta claramente una disminución porcentual negativa.',
      },
      {
        question: '¿Qué pasa si el denominador o el valor inicial es 0 en la Calculadora de Porcentaje?',
        answer:
          'La división entre cero no está definida matemáticamente, así que la calculadora muestra un mensaje de validación claro en lugar de Infinito o NaN.',
      },
      {
        question: '¿Puedo ingresar porcentajes decimales como 7,25% en la Calculadora de Porcentaje?',
        answer:
          'Sí. Todas las entradas aceptan valores decimales y conservan la precisión completa de punto flotante antes del redondeo de visualización.',
      },
      {
        question: '¿La Calculadora de Porcentaje es gratuita?',
        answer:
          'Sí, es completamente gratuita, sin registro, y funciona por completo en tu navegador, así que tus números nunca se suben a ningún servidor.',
      },
      {
        question: '¿Cómo descubro qué porcentaje es un número de otro?',
        answer:
          'Usa la tarjeta de "qué porcentaje": ingresa la parte y el total, y la herramienta divide la parte entre el total y multiplica por 100.',
      },
      {
        question: '¿Cómo calculo el X% de un número con la Calculadora de Porcentaje?',
        answer:
          'Ingresa el porcentaje y el número en la tarjeta "X% de Y", y la herramienta multiplica el número por el porcentaje dividido entre 100.',
      },
      {
        question: '¿Cuál es la diferencia entre cambio porcentual y puntos porcentuales?',
        answer:
          'El cambio porcentual es relativo al valor inicial, mientras que los puntos porcentuales son la simple diferencia aritmética entre dos porcentajes.',
      },
      {
        question: '¿La Calculadora de Porcentaje puede manejar números negativos?',
        answer:
          'Sí, maneja valores iniciales negativos y el resultado con signo muestra si el cambio es un aumento o una disminución.',
      },
      {
        question: '¿Cómo calculo un aumento porcentual entre dos números?',
        answer:
          'Ingresa el valor anterior y el valor nuevo en la tarjeta de cambio; la herramienta muestra el aumento como porcentaje más la diferencia absoluta.',
      },
      {
        question: '¿Cómo calculo una disminución porcentual?',
        answer:
          'Ingresa el valor inicial más alto y el valor nuevo más bajo, y la herramienta reporta la disminución como un porcentaje negativo.',
      },
      {
        question: '¿Puedo usar la Calculadora de Porcentaje para puntajes de exámenes?',
        answer:
          'Sí. Divide los puntos obtenidos entre los puntos totales y la herramienta muestra el puntaje como porcentaje.',
      },
      {
        question: '¿La Calculadora de Porcentaje también muestra la diferencia absoluta?',
        answer:
          'Sí, junto con el cambio porcentual muestra la diferencia numérica absoluta entre los dos valores.',
      },
      {
        question: '¿Puedo calcular un porcentaje de descuento con esta herramienta?',
        answer:
          'Sí. Ingresa el precio original y el precio de oferta en la tarjeta de cambio para ver el descuento como una disminución porcentual.',
      },
      {
        question: '¿La Calculadora de Porcentaje guarda mis números?',
        answer:
          'No. Todos los cálculos se hacen localmente en tu navegador y nada de lo que ingresas se guarda ni se envía a un servidor.',
      },
      {
        question: '¿Qué tan precisos son los resultados de la Calculadora de Porcentaje?',
        answer:
          'Los resultados usan la precisión completa de punto flotante antes del redondeo de visualización, así que las pequeñas diferencias decimales se manejan correctamente.',
      },
      {
        question: '¿Puedo usar la Calculadora de Porcentaje para el crecimiento de ventas?',
        answer:
          'Sí, es ideal para el crecimiento de ventas, tráfico o tasa de conversión mes a mes, mostrando tanto el porcentaje como el cambio absoluto.',
      },
      {
        question: '¿Qué significa un cambio porcentual negativo?',
        answer:
          'Un resultado negativo significa que el valor nuevo es menor que el valor anterior: una disminución en lugar de un aumento.',
      },
      {
        question: '¿Puedo calcular porcentajes con números muy grandes?',
        answer:
          'Sí, la herramienta acepta números enteros y decimales grandes y recalcula al instante mientras escribes.',
      },
      {
        question: '¿Necesito presionar un botón para calcular un porcentaje?',
        answer:
          'No. Los resultados se actualizan automáticamente con cada tecla, sin recargar la página ni hacer clic en enviar.',
      },
      {
        question: '¿La Calculadora de Porcentaje puede hallar el valor original a partir de un porcentaje?',
        answer:
          'Las tres tarjetas cubren el X% de Y, qué porcentaje es X de Y y el cambio porcentual; para un cálculo inverso, divide la cantidad conocida entre el porcentaje como decimal.',
      },
    ],
  },
  'loan-emi-calculator': {
    slug: 'calculadora-de-prestamo-emi',
    name: 'Calculadora de Préstamos y EMI',
    shortDescription:
      'Calcula las cuotas mensuales EMI, el interés total a pagar y un calendario de amortización anual o mensual.',
    keywords: [
      'calculadora de préstamos',
      'calculadora emi',
      'tabla de amortización',
      'pago mensual de préstamo',
      'calculadora de emi de préstamo',
      'calculadora de emi de préstamo personal',
      'calculadora de emi de préstamo de auto',
      'calculadora de emi de préstamo hipotecario',
      'calculadora de intereses emi',
    ],
    seo: {
      title: 'Calculadora de Préstamos y EMI – Cuota Mensual | UtilityFlow',
      description:
        'Calcula las cuotas mensuales iguales (EMI), el costo total de intereses y las tablas completas de amortización de capital e intereses para un préstamo en línea.',
      primaryKeyword: 'calculadora emi de préstamo',
      secondaryKeywords: [
        'calculadora de pago mensual de préstamo',
        'tabla de amortización de préstamo',
        'calculadora de préstamo de auto',
        'calculadora de emi de préstamo personal',
      ],
      longTailKeywords: [
        'calcular emi mensual e interés total de préstamo en línea',
        'tabla de capital versus interés de préstamo',
        'calculadora de pago de préstamo personal y de auto',
        'cómo calcular emi de préstamo hipotecario en línea',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calcula tu cuota mensual igual (EMI) exacta, el interés total pagado durante el plazo del préstamo, la proporción de capital e interés y una tabla de amortización transparente año por año o mes por mes.',
    instructions: [
      {
        title: 'Ingresa los datos de tu préstamo',
        description:
          'Indica el capital del préstamo, la tasa de interés anual (APR %) y el plazo del préstamo en meses o años.',
      },
      {
        title: 'Elige la unidad del plazo',
        description:
          'Cambia el plazo entre años y meses para que coincida con la forma en que tu prestamista cotiza el préstamo.',
      },
      {
        title: 'Ejecuta el cálculo de EMI',
        description:
          'La EMI, el interés total y el pago total se actualizan al instante en tu navegador, sin subir datos.',
      },
      {
        title: 'Revisa el resumen de EMI',
        description:
          'Consulta la EMI mensual, el interés total a pagar, el pago total y el porcentaje de participación del interés.',
      },
      {
        title: 'Revisa la tabla de amortización',
        description:
          'Cambia entre el resumen anual y el calendario mensual para ver cómo el pago de capital se acelera con el tiempo.',
      },
      {
        title: 'Consejo: compara un plazo más corto',
        description:
          'Prueba un plazo más corto para ver cuánto interés total podrías ahorrar y luego copia las cifras para comparar ofertas de préstamos lado a lado.',
      },
    ],
    examples: [
      {
        title: 'Préstamo personal o de auto a 5 años',
        input: 'Capital: $25.000 · Tasa: 7,5% · Plazo: 60 meses',
        output: 'EMI mensual: $500,95 · Interés total: $5.056,92 · Total pagado: $30.056,92',
        explanation: 'Usa la fórmula estándar de EMI con saldo decreciente P·r·(1+r)^n / ((1+r)^n - 1).',
      },
      {
        title: 'Préstamo a 3 años con tasa del 6%',
        input: 'Capital: $12.000 · Tasa: 6% · Plazo: 36 meses',
        output: 'EMI mensual: $365,06 · Interés total: $1.142,16 · Total pagado: $13.142,16',
        explanation: 'Con r = 0,005 mensual y n = 36, la fórmula de saldo decreciente da una EMI de unos $365,06.',
      },
    ],
    benefits: [
      'Usa la matemática exacta de EMI con capitalización de saldo decreciente',
      'Maneja con precisión préstamos promocionales al 0% APR sin errores de división',
      'Incluye vistas intercambiables de tabla de amortización anual y mensual',
      'Permite cambiar sin problemas la unidad del plazo entre años y meses',
    ],
    useCases: [
      'Comparar ofertas de préstamos de auto, estudiantiles o personales de varios prestamistas',
      'Evaluar cómo acortar el plazo de un préstamo reduce el interés de por vida',
      'Prever el saldo restante del préstamo después de 12, 24 o 36 pagos',
      'Revisar planes de cuotas al 0% frente a financiamiento con APR bajo',
    ],
    faqs: [
      {
        question: '¿Qué fórmula usa la Calculadora de Préstamos y EMI?',
        answer:
          'Aplica la fórmula estándar de amortización con saldo decreciente: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), donde r es la tasa anual ÷ 12 ÷ 100 y n es el total de cuotas mensuales.',
      },
      {
        question: '¿Por qué el interés de los primeros meses es mayor que el de los últimos meses en una EMI?',
        answer:
          'El interés de cada mes se calcula sobre el saldo de capital restante. A medida que el capital se reduce con cada pago de EMI, una parte mayor de cada cuota fija se destina al capital.',
      },
      {
        question: '¿La Calculadora de Préstamos y EMI incluye cargos de apertura o seguros del prestamista?',
        answer:
          'No. El resultado refleja solo el pago de capital e intereses. Agrega los cargos financiados al campo Capital del préstamo para modelar su costo de pago.',
      },
      {
        question: '¿La Calculadora de Préstamos y EMI es gratuita?',
        answer:
          'Sí, es completamente gratuita, sin registro, y funciona por completo en tu navegador, así que los datos de tu préstamo nunca se suben a ningún servidor.',
      },
      {
        question: '¿Qué es la EMI de un préstamo?',
        answer:
          'EMI significa cuota mensual igual (Equated Monthly Installment): la cantidad fija que pagas cada mes, que cubre tanto el interés como una parte del capital, hasta saldar el préstamo.',
      },
      {
        question: '¿Cómo maneja la Calculadora de Préstamos y EMI un préstamo al 0% de interés?',
        answer:
          'Maneja con precisión los préstamos promocionales al 0% APR sin errores de división, mostrando una EMI igual al capital dividido entre el número de meses.',
      },
      {
        question: '¿Puedo comparar dos ofertas de préstamo con la Calculadora de Préstamos y EMI?',
        answer:
          'Sí. Pasa cada oferta por la calculadora y compara la EMI mensual y el interés total a pagar para ver cuál cuesta menos en total.',
      },
      {
        question: '¿Un plazo de préstamo más corto reduce el interés total?',
        answer:
          'Por lo general sí. Un plazo más corto implica una EMI mensual más alta pero mucho menos interés total, porque el interés se acumula durante menos meses.',
      },
      {
        question: '¿Qué es una tabla de amortización?',
        answer:
          'Es una tabla que muestra, para cada mes o año, cuánto de tu EMI se destina a intereses, cuánto al capital y qué saldo queda.',
      },
      {
        question: '¿Puedo ver el saldo restante de mi préstamo después de un año?',
        answer:
          'Sí. La tabla de amortización muestra el capital restante después de 12, 24 o 36 pagos, o en cualquier otro punto del plazo.',
      },
      {
        question: '¿La Calculadora de Préstamos y EMI funciona para préstamos de auto?',
        answer:
          'Sí, funciona para préstamos de auto, personales, estudiantiles y comerciales: cualquier préstamo que se pague en cuotas mensuales fijas con saldo decreciente.',
      },
      {
        question: '¿Puedo usar la Calculadora de Préstamos y EMI para un préstamo hipotecario?',
        answer:
          'Sí, para la parte de capital e intereses. Para un costo total de vivienda que incluya impuestos, seguro y PMI, usa mejor la Calculadora de Hipoteca.',
      },
      {
        question: '¿Qué pasa si hago un pago extra en mi préstamo?',
        answer:
          'Los pagos extra reducen el capital directamente, lo que disminuye los intereses futuros. Esta calculadora modela las EMI regulares; suma el monto extra en tu planificación por separado.',
      },
      {
        question: '¿La Calculadora de Préstamos y EMI guarda los datos de mi préstamo?',
        answer:
          'No. Todos los cálculos se hacen localmente en tu navegador y nada de lo que ingresas se guarda ni se envía a un servidor.',
      },
      {
        question: '¿Por qué mi EMI se mantiene igual mientras la parte de interés cambia?',
        answer:
          'La EMI es fija, pero cada mes el interés se cobra sobre un saldo cada vez menor, así que la parte de interés baja y la parte de capital sube.',
      },
      {
        question: '¿Puedo cambiar el plazo del préstamo entre años y meses?',
        answer:
          'Sí, la calculadora permite cambiar sin problemas la unidad del plazo entre años y meses.',
      },
      {
        question: '¿La Calculadora de Préstamos y EMI es asesoría financiera?',
        answer:
          'No. Es una herramienta de cálculo que muestra cuáles serían los números con los datos que ingresas; no es asesoría financiera y debes verificar las condiciones con tu prestamista.',
      },
      {
        question: '¿Cómo uso la Calculadora de Préstamos y EMI para un plan de cuotas al 0%?',
        answer:
          'Ingresa 0% como tasa anual y tu plazo en meses, y la herramienta mostrará el pago mensual fijo sin intereses.',
      },
      {
        question: '¿Qué debo ingresar como capital del préstamo?',
        answer:
          'Ingresa la cantidad que realmente pides prestada. Si los cargos se financian dentro del préstamo, súmalos al capital para modelar su costo de pago.',
      },
      {
        question: '¿La Calculadora de Préstamos y EMI puede mostrar calendarios anuales y mensuales?',
        answer:
          'Sí, puedes alternar entre el resumen anual y el calendario mensual para ver el pago en cualquiera de los dos niveles de detalle.',
      },
    ],
  },
  'mortgage-calculator': {
    slug: 'calculadora-de-hipoteca',
    name: 'Calculadora de Hipoteca',
    shortDescription:
      'Estima los pagos mensuales PITI de la hipoteca, incluidos el pago inicial, la tasa de interés, los impuestos, el seguro y el PMI.',
    keywords: [
      'calculadora de hipoteca',
      'pago de préstamo hipotecario',
      'calculadora piti',
      'hipoteca con pago inicial',
      'calculadora de pago mensual de hipoteca',
      'estimador de pago de hipoteca',
      'calculadora pmi de hipoteca',
      'calculadora de hipoteca 15 vs 30 años',
      'calculadora de intereses de hipoteca',
    ],
    seo: {
      title: 'Calculadora de Hipoteca – Pago PITI y PMI | UtilityFlow',
      description:
        'Estima los pagos mensuales de tu hipoteca con pago inicial, impuestos, seguro de vivienda, cuotas de HOA y PMI, gratis en tu navegador, con amortización.',
      primaryKeyword: 'calculadora de hipoteca',
      secondaryKeywords: [
        'calculadora de pago hipotecario piti',
        'calculadora de intereses de préstamo hipotecario',
        'estimador de pmi de hipoteca',
        'calculadora de pago mensual de hipoteca',
      ],
      longTailKeywords: [
        'calcular pago mensual de hipoteca con impuestos y seguro',
        'comparar pago de hipoteca a 15 años vs 30 años',
        'estimar saldo de préstamo hipotecario con el tiempo',
        'cuánto puedo pagar de hipoteca al mes',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Modela tu verdadera obligación mensual de vivienda (capital e intereses más impuestos sobre la propiedad, seguro de vivienda, cuotas de HOA y seguro hipotecario privado PMI) junto con el interés total de por vida y la reducción anual del préstamo.',
    instructions: [
      {
        title: 'Establece el precio de la vivienda y el pago inicial',
        description:
          'Ingresa el precio de la propiedad y tu pago inicial (que refleja automáticamente la relación préstamo-valor y el capital del préstamo).',
      },
      {
        title: 'Elige la tasa de interés y el plazo',
        description:
          'Ingresa la tasa hipotecaria anual (%) y selecciona un plazo fijo de 10, 15, 20 o 30 años.',
      },
      {
        title: 'Incluye impuestos, seguro y HOA',
        description:
          'Ajusta el impuesto anual sobre la propiedad, el seguro anual de vivienda, las cuotas mensuales de HOA y la tasa de PMI (cuando el pago inicial es menor al 20%).',
      },
      {
        title: 'Ejecuta el cálculo de hipoteca',
        description:
          'El pago mensual PITI se actualiza al instante en tu navegador, sin subir datos.',
      },
      {
        title: 'Revisa el desglose del pago',
        description:
          'Consulta la división entre capital e intereses, impuestos, seguro, HOA y PMI, además del interés total durante todo el plazo.',
      },
      {
        title: 'Consejo: prueba 20% de pago inicial o un plazo más corto',
        description:
          'Prueba subir el pago inicial al 20% para eliminar el PMI, o un plazo de 15 años para ver el ahorro de intereses, y luego copia las cifras para comparar opciones.',
      },
    ],
    examples: [
      {
        title: 'Compra de vivienda a 30 años con 20% de pago inicial',
        input: 'Vivienda: $450.000 · Pago inicial: $90.000 (20%) · Tasa: 6,5% · Impuestos: $5.400/año · Seguro: $1.800/año',
        output: 'Total mensual: $2.875,44 (capital e intereses $2.275,44 + impuestos $450 + seguro $150)',
        explanation: 'Con 20% de pago inicial (80% LTV), el PMI es $0 y el capital e intereses se amortizan en 360 meses.',
      },
      {
        title: 'Hipoteca a 30 años con 20% de pago inicial y costos fijos',
        input: 'Vivienda: $300.000 · Pago inicial: $60.000 (20%) · Tasa: 6% · Impuestos: $3.600/año · Seguro: $1.200/año',
        output: 'Total mensual: $1.838,92 (capital e intereses $1.438,92 + impuestos $300 + seguro $100)',
        explanation: 'Un préstamo de $240.000 al 6% a 30 años da una cuota de capital e intereses de unos $1.438,92 al mes; el PMI es $0 con 20% de pago inicial.',
      },
    ],
    benefits: [
      'Desglosa el costo mensual de vivienda en capital e intereses, impuestos, seguro, HOA y PMI',
      'Calcula la relación préstamo-valor (LTV) y el interés total durante todo el plazo',
      'Incluye una tabla anual de reducción del saldo',
      'Permite comparar al instante amortizaciones de 10, 15, 20 y 30 años',
    ],
    useCases: [
      'Presupuestar costos mensuales realistas de PITI antes de buscar vivienda',
      'Comparar el ahorro de intereses de una hipoteca a 15 años frente a una a 30 años',
      'Probar cómo dar el 20% de pago inicial elimina los cargos mensuales de PMI',
      'Estimar el capital restante después de 5 o 10 años',
    ],
    faqs: [
      {
        question: '¿Qué significa PITI en un pago de hipoteca?',
        answer:
          'PITI significa capital (Principal), intereses (Interest), impuestos (Taxes, impuesto sobre la propiedad) y seguro (Insurance, seguro de vivienda y PMI si aplica): los cuatro componentes que usan los prestamistas para evaluar la asequibilidad mensual.',
      },
      {
        question: '¿Cuándo aplica el PMI en una hipoteca?',
        answer:
          'Las hipotecas convencionales suelen cobrar el seguro hipotecario privado (PMI) cuando tu pago inicial es menor al 20% (relación préstamo-valor superior al 80%).',
      },
      {
        question: '¿La Calculadora de Hipoteca incluye los costos de cierre?',
        answer:
          'No. Los costos de cierre varían según la región y el prestamista (a menudo del 2% al 5% del monto del préstamo) y se pagan por adelantado, a menos que se sumen al capital del préstamo.',
      },
      {
        question: '¿La Calculadora de Hipoteca es gratuita?',
        answer:
          'Sí, es completamente gratuita, sin registro, y funciona por completo en tu navegador, así que el precio de tu vivienda y los datos de tu préstamo nunca se suben a ningún servidor.',
      },
      {
        question: '¿Cómo cambia mi pago de hipoteca un pago inicial mayor?',
        answer:
          'Un pago inicial mayor reduce el capital del préstamo, lo que disminuye el capital y los intereses, y con el 20% de pago inicial puede eliminar el PMI por completo.',
      },
      {
        question: '¿Cuál es la diferencia entre una hipoteca a 15 años y una a 30 años?',
        answer:
          'Una hipoteca a 15 años tiene pagos mensuales más altos pero mucho menos interés total, mientras que una a 30 años tiene pagos mensuales más bajos y más interés total.',
      },
      {
        question: '¿Cómo se calcula la relación préstamo-valor (LTV)?',
        answer:
          'La LTV es el monto del préstamo dividido entre el precio de la vivienda, expresado como porcentaje. Un préstamo de $360.000 sobre una vivienda de $450.000 es una LTV del 80%.',
      },
      {
        question: '¿La Calculadora de Hipoteca incluye el impuesto sobre la propiedad?',
        answer:
          'Sí. Ingresa el impuesto anual sobre la propiedad y la herramienta suma una doceava parte a tu pago mensual.',
      },
      {
        question: '¿La Calculadora de Hipoteca incluye el seguro de vivienda?',
        answer:
          'Sí. Ingresa la prima anual del seguro de vivienda y la herramienta suma una doceava parte al total mensual.',
      },
      {
        question: '¿Qué son las cuotas de HOA en un cálculo de hipoteca?',
        answer:
          'Las cuotas de HOA son cargos mensuales de una asociación de propietarios. Ingrésalas por separado y se suman a tu costo mensual total de vivienda.',
      },
      {
        question: '¿Puedo ver el saldo restante de mi hipoteca después de 5 o 10 años?',
        answer:
          'Sí, la tabla anual de reducción del saldo muestra el capital restante en cada año del plazo del préstamo.',
      },
      {
        question: '¿La Calculadora de Hipoteca guarda el precio de mi vivienda o los datos de mi préstamo?',
        answer:
          'No. Todos los cálculos se hacen localmente en tu navegador y nada de lo que ingresas se guarda ni se envía a un servidor.',
      },
      {
        question: '¿Puedo comparar plazos de hipoteca con esta calculadora?',
        answer:
          'Sí. Cambia entre plazos de 10, 15, 20 y 30 años para comparar pagos mensuales e intereses totales al instante.',
      },
      {
        question: '¿Cuánto interés total pagaré durante el plazo de la hipoteca?',
        answer:
          'La herramienta muestra el interés total durante todo el plazo, para que puedas ver el verdadero costo de por vida más allá del pago mensual.',
      },
      {
        question: '¿Qué pasa con el PMI cuando el saldo de mi préstamo cae por debajo del 80% de LTV?',
        answer:
          'En muchos préstamos convencionales el PMI se puede eliminar cuando el capital propio llega al 20%, pero las reglas dependen de tu prestamista y del tipo de préstamo, así que confírmalo directamente con ellos.',
      },
      {
        question: '¿La Calculadora de Hipoteca es asesoría financiera?',
        answer:
          'No. Es una herramienta de cálculo que muestra cuáles serían los números con los datos que ingresas; no es asesoría financiera y debes verificar las condiciones con tu prestamista.',
      },
      {
        question: '¿Puedo ingresar el pago inicial como monto en dólares o como porcentaje?',
        answer:
          'Sí, puedes ingresar el pago inicial de cualquiera de las dos formas y la herramienta refleja automáticamente la relación préstamo-valor y el capital del préstamo.',
      },
      {
        question: '¿La Calculadora de Hipoteca funciona para hipotecas de tasa fija?',
        answer:
          'Sí, modela hipotecas de tasa fija a plazos de 10, 15, 20 y 30 años con una tasa anual constante.',
      },
      {
        question: '¿Qué debo ingresar como tasa de interés de la hipoteca?',
        answer:
          'Ingresa la tasa anual que te cotiza tu prestamista, como porcentaje. Pequeños cambios en la tasa pueden mover el pago mensual de forma notable, así que compara varias tasas.',
      },
      {
        question: '¿La Calculadora de Hipoteca puede ayudarme a presupuestar antes de buscar casa?',
        answer:
          'Sí. Ingresa un precio realista de vivienda, pago inicial, tasa, impuestos y seguro para ver el verdadero costo mensual PITI antes de empezar a buscar.',
      },
    ],
  },
  'compound-interest-calculator': {
    slug: 'calculadora-de-interes-compuesto',
    name: 'Calculadora de Interés Compuesto',
    shortDescription:
      'Proyecta el crecimiento de una inversión con depósito inicial, aportes mensuales recurrentes, frecuencia de capitalización y ajuste por inflación.',
    keywords: [
      'calculadora de interés compuesto',
      'calculadora de crecimiento de inversión',
      'ahorro con capitalización',
      'calculadora de valor futuro',
      'calculadora de ahorro compuesto',
      'calculadora de capitalización mensual',
      'calculadora de rendimiento de inversión',
      'calculadora de ahorro para jubilación',
      'interés compuesto con aportes',
    ],
    seo: {
      title: 'Calculadora de Interés Compuesto – Ahorro | UtilityFlow',
      description:
        'Proyecta el saldo futuro de tu inversión con capital inicial, aportes mensuales, capitalización diaria, mensual, trimestral o anual y tabla anual en línea.',
      primaryKeyword: 'calculadora de interés compuesto',
      secondaryKeywords: [
        'calculadora de ahorro compuesto',
        'calculadora de valor futuro de inversión',
        'crecimiento con aporte mensual',
        'calculadora de crecimiento de inversión',
      ],
      longTailKeywords: [
        'calcular interés compuesto con aportes mensuales en línea',
        'comparar crecimiento con capitalización mensual vs diaria',
        'tabla de interés compuesto año por año',
        'cuánto crecerán mis ahorros en 20 años',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Pronostica cómo crece una suma inicial más depósitos mensuales constantes a lo largo de los años gracias al interés compuesto, con frecuencia de capitalización seleccionable y una tabla año por año de capital frente a intereses.',
    instructions: [
      {
        title: 'Ingresa el capital y los depósitos recurrentes',
        description:
          'Indica tu depósito inicial y el monto de tu aporte mensual.',
      },
      {
        title: 'Establece el rendimiento anual y el horizonte',
        description:
          'Ingresa el rendimiento anual esperado (%) y la duración de la inversión en años.',
      },
      {
        title: 'Elige la frecuencia de capitalización',
        description:
          'Cambia entre capitalización anual, trimestral, mensual o diaria y revisa el desglose anual.',
      },
      {
        title: 'Ejecuta la proyección de crecimiento',
        description:
          'El saldo final se actualiza al instante en tu navegador, sin subir datos.',
      },
      {
        title: 'Revisa el registro año por año',
        description:
          'Consulta los aportes, los intereses ganados y el saldo acumulado de cada año para ver cómo el crecimiento se acelera con el tiempo.',
      },
      {
        title: 'Consejo: prueba un aporte mensual mayor',
        description:
          'Prueba agregar $100 al mes para ver cuánto crece el saldo final y luego copia las cifras para comparar planes de ahorro.',
      },
    ],
    examples: [
      {
        title: 'Proyección de inversión en índices a 20 años',
        input: 'Inicial: $10.000 · Mensual: $500 · Rendimiento: 7% · Años: 20 · Capitalización mensual',
        output: 'Saldo final: $300.850,56 · Aportes: $130.000 · Intereses ganados: $170.850,56',
        explanation: 'Los rendimientos compuestos representan más del 56% del valor final de la cartera.',
      },
      {
        title: 'Ahorro a 10 años con aportes mensuales',
        input: 'Inicial: $5.000 · Mensual: $200 · Rendimiento: 6% · Años: 10 · Capitalización mensual',
        output: 'Saldo final: $41.873 aprox. · Aportes: $29.000 · Intereses ganados: $12.873 aprox.',
        explanation: 'El capital inicial crece a unos $9.097 y los aportes mensuales a unos $32.776 con capitalización mensual al 6%.',
      },
    ],
    benefits: [
      'Separa los aportes totales de tu bolsillo de los intereses compuestos ganados',
      'Admite intervalos de capitalización anual, trimestral, mensual y diaria',
      'Opción de aportes a fin de mes o a principios de mes',
      'Genera un registro completo de crecimiento año por año para planificar',
    ],
    useCases: [
      'Planificar hitos de ahorro para jubilación o fondos de índice a largo plazo',
      'Comparar cuentas de ahorro de alto rendimiento con capitalización mensual o diaria',
      'Visualizar el impacto de aumentar los aportes mensuales en $100',
      'Enseñar la capitalización exponencial frente al interés simple lineal',
    ],
    faqs: [
      {
        question: '¿Cuánta diferencia hace la frecuencia de capitalización en la Calculadora de Interés Compuesto?',
        answer:
          'Con tasas de interés moderadas, la capitalización mensual produce un crecimiento ligeramente mayor que la anual porque los intereses empiezan a generar intereses antes; la diferencia entre diaria y mensual suele ser una pequeña fracción de un punto porcentual.',
      },
      {
        question: '¿La Calculadora de Interés Compuesto tiene en cuenta impuestos o inflación?',
        answer:
          'La calculadora muestra el crecimiento nominal antes de impuestos. Para aproximar el poder adquisitivo real ajustado por inflación, resta la inflación anual esperada (por ejemplo, 2,5%–3%) de tu tasa de rendimiento nominal.',
      },
      {
        question: '¿Los aportes se aplican al inicio o al final de cada mes en la Calculadora de Interés Compuesto?',
        answer:
          'Por defecto, los aportes se aplican al final de cada mes; puedes cambiar a aportes a principios de mes dentro de las opciones de la calculadora.',
      },
      {
        question: '¿La Calculadora de Interés Compuesto es gratuita?',
        answer:
          'Sí, es completamente gratuita, sin registro, y funciona por completo en tu navegador, así que tus cifras de ahorro nunca se suben a ningún servidor.',
      },
      {
        question: '¿Qué es el interés compuesto?',
        answer:
          'El interés compuesto es el interés que se gana tanto sobre tu capital original como sobre los intereses ya ganados, así que el crecimiento se acelera con el tiempo.',
      },
      {
        question: '¿En qué se diferencia el interés compuesto del interés simple?',
        answer:
          'El interés simple se paga solo sobre el capital, mientras que el interés compuesto se paga sobre el capital más los intereses acumulados, lo que hace crecer el saldo más rápido.',
      },
      {
        question: '¿Puedo proyectar el crecimiento con aportes mensuales?',
        answer:
          'Sí. Ingresa tu aporte mensual y la herramienta lo suma cada mes, capitalizando el saldo creciente durante toda la duración.',
      },
      {
        question: '¿Qué tasa de rendimiento debo ingresar en la Calculadora de Interés Compuesto?',
        answer:
          'Ingresa el rendimiento anual que esperas, como porcentaje. Es un dato de proyección, no una predicción: prueba varias tasas para ver un rango de resultados.',
      },
      {
        question: '¿La Calculadora de Interés Compuesto muestra cuánto aporté frente a cuánto gané?',
        answer:
          'Sí, separa los aportes totales de tu bolsillo de los intereses compuestos ganados y muestra ambos en el registro año por año.',
      },
      {
        question: '¿Puedo comparar la capitalización mensual con la diaria?',
        answer:
          'Sí. Cambia la frecuencia de capitalización entre anual, trimestral, mensual y diaria para comparar el saldo final de cada una.',
      },
      {
        question: '¿La Calculadora de Interés Compuesto puede ayudar a planificar el ahorro para la jubilación?',
        answer:
          'Sí, es ideal para proyecciones de jubilación o fondos de índice a largo plazo: ingresa tu saldo inicial, depósitos mensuales, tasa y años para ver el saldo proyectado.',
      },
      {
        question: '¿La Calculadora de Interés Compuesto guarda mis cifras de ahorro?',
        answer:
          'No. Todos los cálculos se hacen localmente en tu navegador y nada de lo que ingresas se guarda ni se envía a un servidor.',
      },
      {
        question: '¿Qué pasa si aumento mi aporte mensual en $100?',
        answer:
          'El saldo final crece mucho más que los depósitos extra por sí solos, porque cada dólar agregado también gana interés compuesto durante los años restantes.',
      },
      {
        question: '¿Puedo usar la Calculadora de Interés Compuesto sin aportes mensuales?',
        answer:
          'Sí. Establece el aporte mensual en cero y la herramienta proyectará el crecimiento solo de tu depósito inicial.',
      },
      {
        question: '¿Puedo usar la Calculadora de Interés Compuesto sin depósito inicial?',
        answer:
          'Sí. Establece el depósito inicial en cero e ingresa un aporte mensual para proyectar el crecimiento solo con depósitos regulares.',
      },
      {
        question: '¿La Calculadora de Interés Compuesto es asesoría financiera?',
        answer:
          'No. Es una herramienta de proyección que muestra cuáles serían los números con la tasa de rendimiento y los datos que ingresas; no es asesoría financiera.',
      },
      {
        question: '¿Cómo funciona el calendario año por año?',
        answer:
          'El registro lista el saldo inicial, los aportes, los intereses ganados y el saldo final de cada año, para que puedas ver el crecimiento año por año.',
      },
      {
        question: '¿Por qué el crecimiento se acelera en los últimos años?',
        answer:
          'Porque los intereses se ganan sobre un saldo cada vez mayor, los intereses ganados cada año crecen a medida que el saldo se capitaliza.',
      },
      {
        question: '¿Puedo calcular el interés compuesto de una cuenta de ahorro de alto rendimiento?',
        answer:
          'Sí. Ingresa la tasa anual de la cuenta y tu patrón de depósitos para comparar la capitalización mensual y diaria de tus ahorros.',
      },
      {
        question: '¿Qué incluye el saldo final?',
        answer:
          'El saldo final incluye tu depósito inicial, todos los aportes mensuales y todos los intereses compuestos ganados durante la duración de la inversión.',
      },
    ],
  },
  'discount-margin-calculator': {
    slug: 'calculadora-de-descuento-y-margen',
    name: 'Calculadora de Descuento y Margen',
    shortDescription:
      'Calcula precios de oferta con descuentos acumulados o el margen de ganancia, el porcentaje de recargo y la ganancia bruta a partir del costo.',
    keywords: [
      'calculadora de descuento',
      'calculadora de margen de ganancia',
      'margen vs recargo',
      'calculadora de precio de oferta',
      'calculadora de margen bruto',
      'calculadora de porcentaje de recargo',
      'calculadora de descuento acumulado',
      'calculadora de recargo minorista',
      'precio de oferta después del descuento',
    ],
    seo: {
      title: 'Calculadora de Descuento y Margen – Ofertas | UtilityFlow',
      description:
        'Calcula precios finales de oferta con descuentos acumulados e impuestos, o compara el margen bruto con el recargo desde el costo y el precio de venta.',
      primaryKeyword: 'calculadora de descuento y margen',
      secondaryKeywords: [
        'calculadora de precio de oferta con descuento',
        'calculadora de margen bruto vs recargo',
        'calculadora de ganancia minorista',
        'calculadora de precio con descuento',
      ],
      longTailKeywords: [
        'calcular precio final con doble descuento e impuesto de ventas',
        'diferencia entre margen de ganancia y porcentaje de recargo',
        'calculadora de margen y ganancia por sku de comercio electrónico',
        'calcular porcentaje de margen desde costo y precio de venta',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Cambia sin problemas entre el modo Descuento Minorista (descuentos de cupones acumulados más impuesto de ventas opcional) y el modo Margen y Recargo para fijar precios de productos con precisión sin confundir margen con recargo.',
    instructions: [
      {
        title: 'Elige el modo Descuento o Margen',
        description:
          'Selecciona Descuento Minorista para precios de oferta o Margen y Recargo para la economía unitaria de un SKU.',
      },
      {
        title: 'Ingresa las cifras de precio',
        description:
          'Indica el precio original, el descuento principal %, el cupón extra opcional % y el impuesto %, o el costo y el precio de venta en modo Margen.',
      },
      {
        title: 'Agrega descuentos acumulados e impuestos',
        description:
          'En modo Descuento, ingresa un segundo cupón % y un impuesto % opcional; los descuentos se aplican uno tras otro, no se suman.',
      },
      {
        title: 'Ve los resultados al instante',
        description:
          'Las cifras se recalculan mientras escribes, sin presionar ningún botón y sin registrarte.',
      },
      {
        title: 'Revisa las métricas netas',
        description:
          'Consulta el precio final, el ahorro total, el descuento efectivo %, la ganancia bruta, el margen % y el recargo %.',
      },
      {
        title: 'Copia tus resultados y prueba precios',
        description:
          'Copia el precio final, el ahorro, el margen y el recargo en tu lista de precios, cotización u hoja de cálculo, y luego ajusta los datos para probar distintos precios.',
      },
    ],
    examples: [
      {
        title: 'Cálculo de descuento minorista acumulado',
        input: 'Original: $120 · Descuento 1: 25% · Cupón extra: 10% · Impuesto: 0%',
        output: 'Precio final: $81,00 · Ahorro: $39,00 · Descuento efectivo: 32,5%',
        explanation: 'Los descuentos secuenciales se multiplican (0,75 × 0,90 = 0,675), lo que da 32,5% de descuento total en lugar de 35%.',
      },
      {
        title: 'Margen y recargo de un producto',
        input: 'Costo: $40 · Precio de venta: $70',
        output: 'Ganancia bruta: $30 · Margen: 42,9% · Recargo: 75%',
        explanation: 'Margen = (70 − 40) / 70 = 42,9%; recargo = (70 − 40) / 40 = 75%.',
      },
    ],
    benefits: [
      'Evita el error clásico de sumar descuentos acumulados',
      'Distingue el margen bruto % del recargo sobre el costo % lado a lado',
      'Calcula de inmediato la ganancia unitaria y el umbral de costo de equilibrio',
      'Incluye el cálculo opcional del impuesto de ventas después del descuento',
    ],
    useCases: [
      'Verificar códigos promocionales acumulados antes de pagar',
      'Fijar precios minoristas mayoristas o de comercio electrónico desde el costo unitario',
      'Auditar la erosión del margen en campañas promocionales',
      'Convertir un porcentaje de margen objetivo en el recargo requerido',
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre margen de ganancia y recargo?',
        answer:
          'El margen bruto divide la ganancia entre el precio de venta ((Precio − Costo) / Precio), mientras que el recargo divide la ganancia entre el costo ((Precio − Costo) / Costo). Un producto que cuesta $50 y se vende en $100 tiene un margen del 50% pero un recargo del 100%.',
      },
      {
        question: '¿Por qué dos descuentos del 20% y el 10% equivalen a 28% de descuento en lugar de 30%?',
        answer:
          'El segundo descuento del 10% se aplica sobre el precio ya reducido al 80%, quitando otro 8% del precio original (20% + 8% = 28%).',
      },
      {
        question: '¿El impuesto de ventas se aplica antes o después de los descuentos?',
        answer:
          'El impuesto minorista estándar se aplica al subtotal con descuento después de los cupones del comercio, que es como lo calcula esta calculadora.',
      },
      {
        question: '¿Cuál es un buen margen de ganancia para un producto minorista?',
        answer:
          'No existe un único margen bueno; varía según la industria, el tipo de producto y los costos. Usa la calculadora para comparar tu margen % con tu propio objetivo y recuerda que el resultado es un cálculo matemático, no un consejo comercial.',
      },
      {
        question: '¿Cómo calculo el precio de oferta después de un solo descuento?',
        answer:
          'Multiplica el precio original por (1 − % de descuento). Un artículo de $80 con 25% de descuento cuesta $80 × 0,75 = $60.',
      },
      {
        question: '¿Puedo acumular un descuento porcentual y un cupón de monto fijo?',
        answer:
          'Esta calculadora acumula descuentos porcentuales uno tras otro. Para un cupón de monto fijo, réstalo del precio después de aplicar el descuento porcentual.',
      },
      {
        question: '¿La Calculadora de Descuento y Margen sirve para precios mayoristas?',
        answer:
          'Sí. Ingresa tu costo unitario y tu precio de venta objetivo en modo Margen para ver la ganancia bruta, el margen % y el recargo % por unidad.',
      },
      {
        question: '¿Cuál es la diferencia entre ganancia bruta y ganancia neta?',
        answer:
          'La ganancia bruta es el precio de venta menos el costo del producto. La ganancia neta también resta gastos generales como envío, comisiones y alquiler, que esta calculadora no incluye.',
      },
      {
        question: '¿Cómo fijo un precio a partir de un porcentaje de margen objetivo?',
        answer:
          'En modo Margen, prueba distintos precios de venta hasta que el margen % coincida con tu objetivo. El recargo % mostrado te indica cuánto agregar sobre el costo.',
      },
      {
        question: '¿La Calculadora de Descuento y Margen es gratuita?',
        answer:
          'Sí, es completamente gratuita y funciona por completo en tu navegador, sin cuenta, sin subir datos y sin pago.',
      },
      {
        question: '¿Por qué mi margen % es menor que mi recargo %?',
        answer:
          'El margen divide la ganancia entre el precio de venta, mientras que el recargo la divide entre el costo, así que para la misma ganancia el recargo % siempre es mayor.',
      },
      {
        question: '¿El margen puede superar el 100%?',
        answer:
          'No. El margen es la ganancia dividida entre el precio de venta, así que nunca puede superar el 100%. El recargo, en cambio, puede superar ampliamente el 100%.',
      },
      {
        question: '¿Cómo afecta el impuesto de ventas al precio final?',
        answer:
          'El impuesto se aplica al subtotal con descuento, así que un descuento mayor también reduce el impuesto que pagas. La calculadora muestra el precio final con impuestos incluidos.',
      },
      {
        question: '¿Qué es un precio de equilibrio?',
        answer:
          'El precio en el que la ganancia bruta es cero, igual a tu costo unitario. Cualquier precio de venta superior al costo produce un margen positivo.',
      },
      {
        question: '¿Puedo usar esta calculadora para precios de Black Friday o liquidación?',
        answer:
          'Sí. Ingresa el precio original y cada descuento acumulado para verificar el precio final y cuánto margen deja la promoción.',
      },
      {
        question: '¿La calculadora guarda o sube mis precios?',
        answer:
          'No. Todos los cálculos se hacen localmente en tu navegador y nada se sube ni se guarda.',
      },
      {
        question: '¿Cómo convierto un recargo % en un margen %?',
        answer:
          'Margen % = Recargo % ÷ (100 + Recargo %) × 100. Por ejemplo, un recargo del 100% equivale a un margen del 50%, y la calculadora hace esta conversión por ti.',
      },
      {
        question: '¿Qué debo hacer si el margen se ve demasiado bajo?',
        answer:
          'Revisa de nuevo tus datos de costo y luego prueba un precio de venta más alto o un descuento menor en la calculadora para ver cómo se recupera el margen.',
      },
      {
        question: '¿Puedo calcular un descuento sobre un precio que ya incluye impuestos?',
        answer:
          'Ingresa el monto con impuestos incluidos como precio original y establece el impuesto % en 0, para que el descuento se aplique al monto que escribiste.',
      },
      {
        question: '¿Qué significa "descuento efectivo %"?',
        answer:
          'Es el descuento único % que da el mismo precio final que todos tus descuentos acumulados juntos; por ejemplo, 20% y luego 10% equivalen a un 28% efectivo de descuento.',
      },
    ],
  },
  'vat-tax-calculator': {
    slug: 'calculadora-de-iva-e-impuestos',
    name: 'Calculadora de IVA e Impuestos de Ventas',
    shortDescription:
      'Suma el IVA, GST o impuesto de ventas a precios netos o extrae el impuesto de facturas brutas con impuestos incluidos.',
    keywords: [
      'calculadora de iva',
      'calculadora de impuesto de ventas',
      'calculadora de iva inverso',
      'calculadora de impuesto gst',
      'agregar iva al precio',
      'extraer impuesto del bruto',
      'calculadora de iva incluido',
      'impuesto de ventas sobre el total',
      'calculadora de precio neto',
    ],
    seo: {
      title: 'Calculadora de IVA e Impuestos – Neto y Bruto | UtilityFlow',
      description:
        'Suma el IVA, GST o impuesto de ventas a un subtotal neto, o extrae el impuesto y el precio neto antes de impuestos de un total bruto, gratis al instante.',
      primaryKeyword: 'calculadora de iva',
      secondaryKeywords: [
        'calculadora de iva inverso',
        'excluir impuesto de ventas del total',
        'calculadora gst incluido y excluido',
        'calculadora para agregar impuesto de ventas',
      ],
      longTailKeywords: [
        'cómo quitar el iva del precio bruto en línea',
        'agregar 20 por ciento de iva o tasa personalizada',
        'desglose de factura neto impuesto y bruto',
        'calcular iva inverso desde precio total con impuestos',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calcula el precio neto, el monto del impuesto y el total bruto en ambas direcciones: suma el IVA, GST o impuesto de ventas a un subtotal antes de impuestos, o extrae el monto exacto antes de impuestos de un recibo que ya incluye impuestos.',
    instructions: [
      {
        title: 'Elige la dirección del impuesto',
        description:
          'Elige Agregar impuesto (neto → bruto) o Extraer impuesto (bruto → neto).',
      },
      {
        title: 'Ingresa el monto y la tasa de impuesto',
        description:
          'Escribe el monto de la factura y elige una tasa rápida preestablecida (5%, 10%, 15%, 20%) o cualquier porcentaje de impuesto personalizado.',
      },
      {
        title: 'Usa un ajuste rápido o una tasa personalizada',
        description:
          'Toca 5%, 10%, 15% o 20%, o escribe cualquier tasa decimal como 8,875% para que coincida con un impuesto local de ventas.',
      },
      {
        title: 'Revisa el cálculo al instante',
        description:
          'Los resultados se actualizan mientras escribes, sin botón de envío y sin registro.',
      },
      {
        title: 'Lee las líneas de la factura',
        description:
          'Copia el subtotal neto exacto, el componente de impuesto y el total bruto para contabilidad o cotizaciones.',
      },
      {
        title: 'Copia el desglose y compara tasas',
        description:
          'Copia las cifras de neto, impuesto y bruto en tu factura, cotización u hoja de contabilidad, y luego vuelve a calcular con otra tasa para comparar escenarios.',
      },
    ],
    examples: [
      {
        title: 'Extraer el 20% de IVA de un recibo bruto',
        input: 'Modo: Extraer impuesto · Total bruto: $120,00 · Tasa: 20%',
        output: 'Subtotal neto: $100,00 · Componente de IVA: $20,00',
        explanation: 'Divide el bruto entre (1 + 0,20) en lugar de multiplicar el bruto por 20%, evitando un error contable de $4.',
      },
      {
        title: 'Agregar el 10% de impuesto a un precio neto',
        input: 'Modo: Agregar impuesto · Subtotal neto: $200,00 · Tasa: 10%',
        output: 'Total bruto: $220,00 · Componente de impuesto: $20,00',
        explanation: 'Se calcula como $200 × 1,10 = $220, con $20 de impuesto.',
      },
    ],
    benefits: [
      'Evita errores comunes de IVA inverso (dividir entre 1 + tasa en lugar de restar el % de la tasa)',
      'Funciona igual para el IVA europeo, el GST de Australia y Canadá y el impuesto de ventas estatal de EE. UU.',
      'Incluye botones instantáneos de tasas rápidas más porcentajes de impuesto decimales arbitrarios',
      'Muestra un desglose limpio en 3 columnas: neto, impuesto y bruto',
    ],
    useCases: [
      'Preparar facturas B2B o B2C con líneas claras antes de impuestos y de impuestos',
      'Conciliar recibos de gastos con IVA incluido para la contabilidad',
      'Cotizar tarifas internacionales de SaaS o freelance sin o con IVA',
      'Verificar totales de caja minorista con tasas de impuestos estatales y municipales',
    ],
    faqs: [
      {
        question: '¿Por qué extraer el 20% de IVA de $120 equivale a $20 y no a $24?',
        answer:
          'Porque el 20% se sumó originalmente al monto neto de $100 ($100 × 1,20 = $120). Para invertirlo, divides $120 entre 1,20 para recuperar el monto neto de $100 y $20 de impuesto.',
      },
      {
        question: '¿Puedo ingresar tasas locales fraccionarias de impuesto de ventas de EE. UU. como 8,875%?',
        answer:
          'Sí. El campo de tasa de impuesto admite cualquier tasa decimal positiva como 7,25%, 8,875% o 21%.',
      },
      {
        question: '¿Esto admite tanto GST como IVA?',
        answer:
          'Sí. Matemáticamente, el impuesto al valor agregado (IVA), el impuesto sobre bienes y servicios (GST) y el impuesto porcentual de ventas usan exactamente las mismas fórmulas de neto y bruto.',
      },
      {
        question: '¿Cuál es la diferencia entre IVA, GST e impuesto de ventas?',
        answer:
          'Todos son impuestos porcentuales sobre bienes y servicios. El IVA y el GST suelen estar incluidos en el precio mostrado, mientras que el impuesto de ventas de EE. UU. suele agregarse al pagar. La matemática es idéntica.',
      },
      {
        question: '¿Cómo agrego el 20% de IVA a un precio neto?',
        answer:
          'Multiplica el precio neto por 1,20. Un precio neto de $100 se convierte en $120 bruto, con $20 de IVA.',
      },
      {
        question: '¿Cómo quito el IVA de un precio que lo incluye?',
        answer:
          'Divide el precio bruto entre (1 + tasa). Con 20% de IVA, $120 ÷ 1,20 = $100 neto y $20 de impuesto, no $24.',
      },
      {
        question: '¿La Calculadora de IVA e Impuestos es gratuita?',
        answer:
          'Sí, es completamente gratuita y funciona por completo en tu navegador, sin cuenta ni subida de datos.',
      },
      {
        question: '¿Puedo usar esta calculadora para el IVA del Reino Unido al 20%?',
        answer:
          'Sí. Selecciona Extraer o Agregar impuesto, ingresa tu monto y usa el ajuste del 20% o escribe 20 como tasa personalizada.',
      },
      {
        question: '¿Qué tasa de IVA debo usar para mi país?',
        answer:
          'Las tasas varían según el país y el tipo de producto, así que consulta la tasa vigente de tu autoridad fiscal local e ingrésala como tasa personalizada. La calculadora no da asesoría fiscal.',
      },
      {
        question: '¿La calculadora maneja artículos con tasa cero o exentos de impuestos?',
        answer:
          'Sí. Ingresa una tasa del 0% y los montos neto y bruto serán idénticos.',
      },
      {
        question: '¿Qué es un precio con impuestos incluidos?',
        answer:
          'Un precio que ya contiene el impuesto, como se muestra en la mayoría de los recibos europeos. El modo Extraer impuesto lo divide de nuevo en neto e impuesto.',
      },
      {
        question: '¿Qué es un precio sin impuestos?',
        answer:
          'Un precio antes de agregar el impuesto, común en las tiendas de EE. UU. El modo Agregar impuesto muestra el total bruto que paga tu cliente.',
      },
      {
        question: '¿Puedo calcular el IVA de un reembolso parcial?',
        answer:
          'Sí. Ingresa el monto del reembolso como cifra bruta o neta y extrae o agrega el impuesto con la misma tasa usada en la venta original.',
      },
      {
        question: '¿Cómo muestro el IVA en una factura?',
        answer:
          'Usa las tres cifras de la calculadora como líneas separadas: subtotal neto, monto del impuesto y total bruto, para que el cliente vea el desglose con claridad.',
      },
      {
        question: '¿Esta calculadora guarda los montos de mis facturas?',
        answer:
          'No. Todo se calcula localmente en tu navegador y nada se sube ni se guarda.',
      },
      {
        question: '¿Puedo usar tasas decimales como 7,25% u 8,875%?',
        answer:
          'Sí. El campo de tasa acepta cualquier porcentaje decimal positivo, así que tasas como 7,25 % u 8,875 % calculan el impuesto y el total con exactitud.',
      },
      {
        question: '¿Qué pasa si mi recibo solo muestra el total bruto?',
        answer:
          'Usa el modo Extraer impuesto con el total bruto y tu tasa local para recuperar el monto neto y el componente de impuesto.',
      },
      {
        question: '¿Se cobra IVA sobre los cargos de envío o entrega?',
        answer:
          'Eso depende de las reglas fiscales locales. Si aplica en tu caso, incluye el monto del envío en la cifra neta antes de agregar el impuesto.',
      },
      {
        question: '¿Cómo verifico el cálculo de IVA de un proveedor?',
        answer:
          'Ingresa su total bruto en modo Extraer impuesto con la tasa indicada y compara la cifra neta con la factura del proveedor.',
      },
      {
        question: '¿Puedo calcular el GST de Australia o Canadá?',
        answer:
          'Sí. El GST usa las mismas fórmulas de neto y bruto que el IVA, así que ingresa tu monto y la tasa local de GST; por ejemplo, 10% en Australia o 5% de GST federal en Canadá.',
      },
    ],
  },
  'salary-calculator': {
    slug: 'calculadora-de-salario',
    name: 'Calculadora de Salario y Pago',
    shortDescription:
      'Convierte la compensación por hora, día, semana, quincena, mes y año usando horas y semanas personalizadas por año.',
    keywords: [
      'calculadora de salario',
      'salario por hora a anual',
      'convertidor de pago',
      'calculadora de sueldo',
      'salario anual a por hora',
      'calculadora de salario mensual',
      'calculadora de pago quincenal',
      'convertidor de pago bruto',
      'salario a tarifa por hora',
    ],
    seo: {
      title: 'Calculadora de Salario – De Por Hora a Anual | UtilityFlow',
      description:
        'Convierte el pago bruto por hora, día, semana, quincena, mes y año con horas por semana y semanas pagadas por año personalizadas, gratis y al instante.',
      primaryKeyword: 'calculadora de salario',
      secondaryKeywords: [
        'calculadora de salario por hora',
        'salario anual a sueldo por hora',
        'calculadora de pago quincenal',
        'convertidor de salario bruto',
      ],
      longTailKeywords: [
        'convertir 50 dólares por hora a salario anual',
        'desglose de salario bruto con semanas sin pagar',
        'convertidor de compensación con horas por semana',
        'convertir salario anual a pago mensual y quincenal',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Convierte cualquier tarifa de compensación, por hora, día, semana, quincena, quincena calendario, mes o año, a todas las frecuencias de pago con horas de trabajo configurables por semana y semanas pagadas por año.',
    instructions: [
      {
        title: 'Ingresa la compensación base y el período de pago',
        description:
          'Escribe el monto de tu sueldo y selecciona si esa cifra es por hora, por día, por semana, quincenal, mensual o anual.',
      },
      {
        title: 'Ajusta los supuestos del horario de trabajo',
        description:
          'Establece las horas por semana (40 por defecto), los días por semana (5 por defecto) y las semanas pagadas por año (52 por defecto, o menos por licencia sin goce).',
      },
      {
        title: 'Cambia horas o semanas para trabajo de medio tiempo',
        description:
          'Reduce las horas por semana o las semanas pagadas por año para modelar horarios de medio tiempo, una semana de 4 días o licencia sin goce.',
      },
      {
        title: 'Ve los resultados al instante',
        description:
          'Cada frecuencia de pago se recalcula mientras escribes, sin presionar ningún botón y sin registrarte.',
      },
      {
        title: 'Compara todas las frecuencias de pago',
        description:
          'Revisa a la vez cada fila de equivalencia bruta, incluido el total de horas anuales de trabajo.',
      },
      {
        title: 'Copia tus cifras y compara ofertas',
        description:
          'Copia la cifra bruta por hora, mensual o anual en una comparación de ofertas de trabajo, un presupuesto o una nota de negociación, y luego ajusta los datos para comparar ofertas lado a lado.',
      },
    ],
    examples: [
      {
        title: 'Conversión estándar de tiempo completo de por hora a anual',
        input: 'Pago: $45,00 por hora · 40 h/semana · 52 semanas/año (2.080 h)',
        output: 'Anual: $93.600 · Mensual: $7.800 · Quincenal: $3.600 · Semanal: $1.800',
        explanation: 'Usa las 2.080 horas anuales estándar de trabajo de tiempo completo.',
      },
      {
        title: 'De $20 por hora a salario anual',
        input: 'Pago: $20,00 por hora · 40 h/semana · 52 semanas/año',
        output: 'Anual: $41.600 · Mensual: $3.466,67 · Quincenal: $1.600 · Semanal: $800',
        explanation: 'Se calcula como $20 × 40 horas × 52 semanas = $41.600 al año.',
      },
    ],
    benefits: [
      'Convierte en ambas direcciones desde cualquier frecuencia de pago, no solo por hora o anual',
      'Tiene en cuenta vacaciones sin goce o tiempo libre de contratistas mediante semanas pagadas por año personalizadas',
      'Muestra con claridad las diferencias entre pago quincenal calendario (24×/año) y quincenal (26×/año)',
      'Reporta el pago bruto sin suposiciones fiscales engañosas específicas de cada jurisdicción',
    ],
    useCases: [
      'Comparar una oferta de contrato por hora con un salario anual de tiempo completo',
      'Convertir ofertas de salario anual en presupuestos mensuales y quincenales del hogar',
      'Incluir el tiempo libre sin goce en estimaciones de ingresos anuales de contratistas freelance',
      'Calcular el pago anualizado de una semana laboral de medio tiempo de 24 o 32 horas',
    ],
    faqs: [
      {
        question: '¿Por qué los pagos quincenales y quincenales calendario son de montos distintos?',
        answer:
          'El pago quincenal emite 26 cheques por año (cada 2 semanas), mientras que el pago quincenal calendario emite 24 cheques por año (dos veces al mes). Los cheques quincenales calendario son un poco mayores por período para el mismo salario anual.',
      },
      {
        question: '¿Esto calcula el pago neto después del impuesto sobre la renta?',
        answer:
          'No. El impuesto sobre la renta, las retenciones de nómina y las contribuciones sociales varían mucho según el país, el estado, la situación fiscal y las deducciones, así que esta calculadora reporta el pago bruto determinista.',
      },
      {
        question: '¿Cómo deben manejar los contratistas las vacaciones y los días libres sin goce?',
        answer:
          'Baja las "semanas pagadas por año" de 52 a 48 o 49 para ver tu ingreso bruto anual realista teniendo en cuenta la licencia sin goce.',
      },
      {
        question: '¿Cómo convierto $25 por hora a un salario anual?',
        answer:
          'Con 40 horas por semana durante 52 semanas (2.080 horas), $25 por hora equivalen a $52.000 al año brutos. Ingresa tus propias horas para obtener tu cifra exacta.',
      },
      {
        question: '¿La Calculadora de Salario es gratuita?',
        answer:
          'Sí, es completamente gratuita y funciona por completo en tu navegador, sin cuenta ni subida de datos.',
      },
      {
        question: '¿La Calculadora de Salario muestra el pago neto después de impuestos?',
        answer:
          'No. Muestra solo el pago bruto, porque el impuesto sobre la renta y las deducciones varían según el país, el estado y las circunstancias personales.',
      },
      {
        question: '¿Cuál es la diferencia entre pago bruto y pago neto?',
        answer:
          'El pago bruto son tus ganancias antes de impuestos y deducciones. El pago neto (para llevar a casa) es lo que queda después de ellos. Esta calculadora reporta el pago bruto.',
      },
      {
        question: '¿Cuántas horas hay en un año estándar de trabajo de tiempo completo?',
        answer:
          '2.080 horas: 40 horas por semana × 52 semanas. La calculadora usa tu propia configuración de horas por semana en lugar de asumir esto.',
      },
      {
        question: '¿Puedo comparar una tarifa de contrato por hora con una oferta asalariada?',
        answer:
          'Sí. Ingresa la tarifa por hora y compara su cifra bruta anual con la oferta de salario, teniendo en cuenta que las prestaciones y la licencia pagada difieren.',
      },
      {
        question: '¿Cómo tengo en cuenta las vacaciones sin goce como contratista?',
        answer:
          'Reduce las "semanas pagadas por año" de 52 al número de semanas por las que realmente te pagan, como 48 o 49.',
      },
      {
        question: '¿Qué es el pago quincenal calendario?',
        answer:
          'El pago emitido dos veces al mes, 24 veces al año, por lo general en fechas fijas como el 1 y el 15, distinto del pago quincenal, que es 26 veces al año.',
      },
      {
        question: '¿Por qué mi cheque quincenal es menor que mi cheque quincenal calendario?',
        answer:
          'Porque el mismo salario anual se divide en 26 cheques quincenales en lugar de 24 quincenales calendario, así que cada cheque quincenal es un poco menor.',
      },
      {
        question: '¿Puedo calcular el pago de una semana laboral de 4 días?',
        answer:
          'Sí. Establece los días por semana en 4 y las horas por semana en 32 (o tus horas reales) y la calculadora convierte la tarifa en todas las frecuencias.',
      },
      {
        question: '¿Se incluye el pago de horas extra?',
        answer:
          'No. La calculadora convierte una sola tarifa base. Las horas extra con una tarifa distinta necesitarían un cálculo aparte.',
      },
      {
        question: '¿Cómo convierto un salario mensual a una tarifa por hora?',
        answer:
          'Ingresa el monto mensual, elige Mensual como período de pago y lee la cifra por hora: se divide entre tus horas por semana y semanas pagadas por año.',
      },
      {
        question: '¿La calculadora guarda la información de mi salario?',
        answer:
          'No. Todas las cifras se quedan en tu navegador y nada se sube ni se guarda.',
      },
      {
        question: '¿Qué debo ingresar si mi pago cambia durante el año?',
        answer:
          'Calcula cada tarifa por separado o usa un promedio ponderado de las dos tarifas para una estimación anual aproximada.',
      },
      {
        question: '¿Puedo usar esta calculadora para trabajo de medio tiempo o eventual?',
        answer:
          'Sí. Establece tus horas reales por semana y días por semana para que coincidan con tu horario de medio tiempo.',
      },
      {
        question: '¿Cómo comparo dos ofertas de trabajo con distintos períodos de pago?',
        answer:
          'Ingresa la tarifa y el período de pago de cada oferta y luego compara las cifras brutas anuales lado a lado usando la misma configuración de horas y semanas.',
      },
      {
        question: '¿La calculadora incluye bonos o comisiones?',
        answer:
          'No. Convierte solo el pago base. Suma los bonos o comisiones por separado a la cifra anual para tener un panorama más completo.',
      },
    ],
  },
  'tip-calculator': {
    slug: 'calculadora-de-propina',
    name: 'Calculadora de Propina y División de Cuenta',
    shortDescription:
      'Calcula montos de propina, exclusión opcional del impuesto antes de la propina, división de la cuenta por persona y redondeo limpio.',
    keywords: [
      'calculadora de propina',
      'calculadora para dividir la cuenta',
      'calculadora de propina de restaurante',
      'dividir la cuenta en partes iguales',
      'calculadora de porcentaje de propina',
      'calculadora para dividir cuenta',
      'calculadora de gratificación',
      'propina sobre cuenta sin impuestos',
      'divisor de cuenta de restaurante',
    ],
    seo: {
      title: 'Calculadora de Propina – Dividir Cuentas | UtilityFlow',
      description:
        'Calcula propinas de restaurante con ajustes rápidos de porcentaje, propina sobre el subtotal sin impuestos, divide la cuenta en partes iguales y redondea.',
      primaryKeyword: 'calculadora de propina',
      secondaryKeywords: [
        'calculadora para dividir la cuenta',
        'calculadora de gratificación',
        'división de propina de restaurante',
        'calculadora de propina por persona',
      ],
      longTailKeywords: [
        'calcular propina de 18 o 20 por ciento antes de impuestos',
        'dividir cuenta de cena y propina entre amigos',
        'redondear total por persona calculadora de propina',
        'dividir cuenta de restaurante con propina e impuestos',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calcula rápidamente una propina justa y divide cuentas de restaurante, entrega o salidas en grupo en partes iguales entre cualquier número de personas, con exclusión opcional de impuestos y redondeo de la cuenta.',
    instructions: [
      {
        title: 'Ingresa el subtotal de la cuenta y los invitados',
        description:
          'Escribe el monto de la cuenta, el monto opcional del impuesto de ventas si está incluido y el número de personas que dividen la cuenta.',
      },
      {
        title: 'Elige el porcentaje de propina',
        description:
          'Toca un ajuste rápido (10%, 15%, 18%, 20%, 25%) o ingresa cualquier porcentaje de propina personalizado.',
      },
      {
        title: 'Excluye el impuesto de la base de la propina',
        description:
          'Si tu cuenta incluye impuesto de ventas, ingresa el monto del impuesto para que la propina se calcule sobre el subtotal sin impuestos.',
      },
      {
        title: 'Revisa los totales al instante',
        description:
          'La propina, el total de la cuenta y los montos por persona se actualizan mientras escribes, sin presionar ningún botón.',
      },
      {
        title: 'Redondeo y división opcionales',
        description:
          'Activa el redondeo al dólar más cercano por persona y revisa la parte de cada invitado.',
      },
      {
        title: 'Copia o comparte la división',
        description:
          'Copia la parte de cada persona para enviarla al grupo o ajusta el % de propina para ver cómo cambia el total por persona.',
      },
    ],
    examples: [
      {
        title: 'Cena en grupo dividida entre 4',
        input: 'Cuenta: $160,00 · Propina: 20% · Personas: 4',
        output: 'Propina: $32,00 · Total: $192,00 · Por persona: $48,00',
        explanation: 'Suma 20% de propina ($32) y divide $192 en partes iguales entre 4 invitados.',
      },
      {
        title: 'Propina del 15% en una cuenta para dos',
        input: 'Cuenta: $80,00 · Propina: 15% · Personas: 2',
        output: 'Propina: $12,00 · Total: $92,00 · Por persona: $46,00',
        explanation: 'Se calcula como $80 × 0,15 = $12 de propina; $92 ÷ 2 = $46 por persona.',
      },
    ],
    benefits: [
      'Permite dar propina sobre el subtotal sin impuestos cuando se indica el impuesto de ventas',
      'Muestra con claridad tanto la propina por persona como el total por persona',
      'Incluye botones de ajuste rápido para uso móvil en restaurantes con un toque',
      'El redondeo opcional ajusta la propina efectiva con transparencia',
    ],
    useCases: [
      'Dividir cenas de restaurante en grupo sin cálculos mentales incómodos',
      'Calcular propinas de entrega, viajes compartidos o servicios de salón',
      'Verificar la propina exacta del 18% o 20% antes de impuestos en recibos detallados',
      'Dividir en partes iguales cuentas compartidas de viajes o eventos en grupo',
    ],
    faqs: [
      {
        question: '¿La propina se calcula sobre la cuenta sin impuestos o con impuestos?',
        answer:
          'La costumbre tradicional calcula la propina sobre el subtotal sin impuestos. Ingresa el monto del impuesto en el campo Impuesto si quieres que la calculadora excluya el impuesto de la base de la propina.',
      },
      {
        question: '¿Qué pasa si divido entre 1 persona?',
        answer:
          'Con Personas en 1, el monto por persona coincide directamente con la propina completa y el total de la cuenta.',
      },
      {
        question: '¿Cómo funciona el redondeo por persona?',
        answer:
          'Cuando está activado, la parte total de cada persona se redondea al siguiente dólar entero y la calculadora muestra el porcentaje de propina efectiva resultante.',
      },
      {
        question: '¿Cuánto debo dejar de propina en un restaurante?',
        answer:
          'Los rangos comunes de propina son del 15 al 20% para servicio de mesa en EE. UU., pero las costumbres varían según el país y la calidad del servicio. La calculadora solo hace la matemática.',
      },
      {
        question: '¿Cómo calculo una propina del 20% rápidamente?',
        answer:
          'Mueve el punto decimal un lugar a la izquierda para obtener el 10% de la cuenta y luego duplícalo. En una cuenta de $60, el 10% es $6, así que el 20% es $12.',
      },
      {
        question: '¿La Calculadora de Propina es gratuita?',
        answer:
          'Sí, es completamente gratuita y funciona por completo en tu navegador, sin cuenta ni subida de datos.',
      },
      {
        question: '¿Debo dar propina sobre el total con impuestos incluidos?',
        answer:
          'Tradicionalmente la propina se calcula sobre el subtotal sin impuestos. Ingresa el monto del impuesto en el campo Impuesto para excluirlo de la base de la propina.',
      },
      {
        question: '¿Cuál es una buena propina para entrega de comida?',
        answer:
          'Las costumbres de propina para entrega varían según la zona y el tamaño del pedido. Ingresa cualquier porcentaje personalizado en la calculadora para que coincida con lo que decidas.',
      },
      {
        question: '¿Cómo divido una cuenta cuando las personas pidieron montos distintos?',
        answer:
          'Esta calculadora divide en partes iguales. Para partes desiguales, calcula la propina de cada persona sobre su propio subtotal por separado.',
      },
      {
        question: '¿Puedo dar una propina con un porcentaje personalizado como 17%?',
        answer:
          'Sí. Escribe cualquier porcentaje en el campo de propina personalizada en lugar de usar los ajustes rápidos.',
      },
      {
        question: '¿Qué incluye el monto por persona?',
        answer:
          'La parte de la cuenta de cada persona más su parte de la propina. Con el redondeo activado, se redondea al siguiente dólar entero.',
      },
      {
        question: '¿Cómo cambia el redondeo la propina efectiva?',
        answer:
          'Redondear la parte de cada persona hacia arriba agrega una pequeña cantidad sobre la propina, así que la calculadora muestra el porcentaje de propina efectiva resultante.',
      },
      {
        question: '¿Puedo usar la Calculadora de Propina para propinas de salón o taxi?',
        answer:
          'Sí. Ingresa el total del servicio y el porcentaje de propina que elijas; la misma matemática aplica a cualquier servicio con propina.',
      },
      {
        question: '¿La calculadora guarda los montos de mis cuentas?',
        answer:
          'No. Todos los cálculos se hacen localmente en tu navegador y nada se sube ni se guarda.',
      },
      {
        question: '¿Qué pasa si la cuenta ya incluye un cargo por servicio?',
        answer:
          'Verifica si el cargo por servicio es la propina. Si lo es, es posible que no necesites una propina extra y puedes ingresar 0% para ver la división sin ella.',
      },
      {
        question: '¿Cómo divido una cuenta entre 3 personas con un total impar?',
        answer:
          'Ingresa la cuenta, el % de propina y 3 personas. La calculadora divide el total en partes iguales y muestra la parte exacta de cada persona.',
      },
      {
        question: '¿Puedo calcular la propina antes de impuestos si solo conozco el total?',
        answer:
          'Necesitas el monto del impuesto o el subtotal sin impuestos para dar propina antes de impuestos. Si el recibo muestra solo el total, usa el total completo como base de la propina.',
      },
      {
        question: '¿Qué porcentajes de propina cubren los ajustes rápidos?',
        answer:
          'Los ajustes rápidos son 10%, 15%, 18%, 20% y 25%, y puedes ingresar cualquier otro porcentaje como valor personalizado.',
      },
      {
        question: '¿Es de mala educación dividir una cuenta en partes iguales?',
        answer:
          'Eso depende del grupo y de lo que pidió cada persona. La calculadora simplemente hace instantánea la matemática de la división en partes iguales.',
      },
      {
        question: '¿Cómo calculo la propina de una cuenta grande de grupo?',
        answer:
          'Ingresa el total completo de la cuenta y el número de invitados. La calculadora muestra la propina, el total y lo que debe cada persona.',
      },
    ],
  },
  'bmi-calculator': {
    slug: 'calculadora-de-imc',
    name: 'Calculadora de IMC',
    shortDescription:
      'Calcula el índice de masa corporal (IMC) en unidades métricas o imperiales junto con las categorías de peso de la OMS y el rango saludable.',
    keywords: [
      'calculadora de imc',
      'índice de masa corporal',
      'rango de peso saludable',
      'imc métrico imperial',
      'calcular imc',
      'calculadora de tabla de imc',
      'imc para adultos',
      'calculadora de peso saludable',
      'calculadora de imc kg m2',
    ],
    seo: {
      title: 'Calculadora de IMC – Índice de Masa Corporal | UtilityFlow',
      description:
        'Calcula tu índice de masa corporal en unidades métricas o imperiales, consulta tu categoría de peso de la OMS y el rango de peso saludable para tu estatura.',
      primaryKeyword: 'calculadora de imc',
      secondaryKeywords: [
        'calculadora de índice de masa corporal',
        'rango de peso saludable imc',
        'calculadora de imc imperial',
        'calculadora de categoría de peso imc',
      ],
      longTailKeywords: [
        'calcular imc en pies pulgadas y libras',
        'categorías de imc para adultos de la oms',
        'encontrar rango de peso saludable para estatura',
        'cuál es un rango de imc saludable para mi estatura',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Calcula el índice de masa corporal (IMC) de adultos usando medidas métricas (cm/kg) o imperiales (pies, pulgadas/libras), consulta las bandas de clasificación de la Organización Mundial de la Salud y ve el rango de peso saludable de 18,5 a 24,9 para tu estatura.',
    instructions: [
      {
        title: 'Elige el sistema de unidades',
        description:
          'Cambia entre métrico (cm / kg) e imperial (pies, pulgadas / libras).',
      },
      {
        title: 'Ingresa la estatura y el peso',
        description:
          'Escribe tu estatura actual y tu peso corporal en los campos validados.',
      },
      {
        title: 'Verifica tus unidades',
        description:
          'Asegúrate de que los centímetros vayan con los kilogramos y los pies y pulgadas con las libras, o el resultado saldrá mal.',
      },
      {
        title: 'Ve tu IMC al instante',
        description:
          'El puntaje, la categoría de la OMS y el rango de peso saludable se actualizan mientras escribes, sin presionar ningún botón.',
      },
      {
        title: 'Revisa el IMC y el contexto',
        description:
          'Consulta tu puntaje de IMC, tu categoría de la OMS y el rango de peso saludable correspondiente para tu estatura.',
      },
      {
        title: 'Anota o comparte tu resultado',
        description:
          'Copia tu IMC y tu rango de peso saludable para llevar un seguimiento con el tiempo o comentarlo con un médico, y vuelve a ingresar nuevas medidas cuando cambie tu peso.',
      },
    ],
    examples: [
      {
        title: 'Control de IMC de adulto en sistema métrico',
        input: 'Estatura: 175 cm · Peso: 70 kg',
        output: 'IMC: 22,9 kg/m² · Categoría OMS: Peso normal (56,7 – 76,3 kg)',
        explanation: 'Se calcula como 70 / (1,75 × 1,75) = 22,86 kg/m².',
      },
      {
        title: 'Control de IMC con 80 kg y 180 cm',
        input: 'Estatura: 180 cm · Peso: 80 kg',
        output: 'IMC: 24,7 kg/m² · Categoría OMS: Peso normal (59,9 – 80,7 kg)',
        explanation: 'Se calcula como 80 / (1,80 × 1,80) = 24,69 kg/m²; el rango saludable es 18,5 × 3,24 a 24,9 × 3,24 kg.',
      },
    ],
    benefits: [
      'Permite cambiar al instante entre medidas métricas e imperiales de EE. UU.',
      'Calcula el rango exacto de peso saludable de 18,5 a 24,9 kg/m² para tu estatura',
      'Incluye notas claras de limitación clínica sobre masa muscular y composición corporal',
      'Funciona de forma privada en la memoria del navegador sin guardar datos de salud',
    ],
    useCases: [
      'Controles rápidos de peso y estatura en adultos',
      'Encontrar rangos de peso saludable objetivo para una estatura específica',
      'Combinarlo con la planificación diaria de calorías y TDEE',
      'Convertir medidas imperiales de estatura y peso al IMC estándar en kg/m²',
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula del índice de masa corporal?',
        answer:
          'El IMC equivale al peso en kilogramos dividido entre la estatura en metros al cuadrado: peso(kg) / estatura(m)². En unidades imperiales, eso equivale a (peso(libras) × 703) / estatura(pulgadas)².',
      },
      {
        question: '¿El IMC aplica con precisión a atletas o adultos mayores?',
        answer:
          'El IMC es una proporción de detección a nivel poblacional y no distingue la masa muscular magra de la grasa corporal. Los atletas muy musculosos pueden puntuar en la banda de sobrepeso a pesar de tener poca grasa corporal, y los niños y adolescentes requieren percentiles por edad y sexo.',
      },
      {
        question: '¿Mi información de salud se guarda en algún lugar?',
        answer:
          'No. Todas las medidas se quedan estrictamente dentro de la pestaña activa de tu navegador y desaparecen cuando la cierras.',
      },
      {
        question: '¿Cuál es un rango saludable de IMC?',
        answer:
          'La OMS define 18,5–24,9 kg/m² como el rango de peso normal para adultos. Por debajo de 18,5 es bajo peso y de 25 a 29,9 es sobrepeso.',
      },
      {
        question: '¿La Calculadora de IMC es gratuita?',
        answer:
          'Sí, es completamente gratuita y funciona por completo en tu navegador, sin cuenta ni subida de datos.',
      },
      {
        question: '¿Cuáles son las categorías de IMC de la OMS?',
        answer:
          'Bajo peso es menos de 18,5; peso normal es de 18,5 a 24,9; sobrepeso es de 25 a 29,9; y obesidad es 30 o más.',
      },
      {
        question: '¿Cómo calculo el IMC en libras y pulgadas?',
        answer:
          'Usa (peso en libras × 703) ÷ (estatura en pulgadas)². La calculadora hace esto automáticamente en modo imperial.',
      },
      {
        question: '¿Cómo calculo el IMC en kilogramos y centímetros?',
        answer:
          'Divide el peso en kg entre la estatura en metros al cuadrado. La calculadora convierte tus centímetros a metros por ti.',
      },
      {
        question: '¿El IMC es preciso para todas las personas?',
        answer:
          'No. El IMC es una proporción de detección que no distingue el músculo de la grasa, así que las personas muy musculosas, los adultos mayores y los niños necesitan evaluaciones distintas.',
      },
      {
        question: '¿Los niños pueden usar esta Calculadora de IMC?',
        answer:
          'No. El IMC de los niños se interpreta con tablas de percentiles por edad y sexo, no con las bandas de adultos de la OMS, así que esta herramienta es solo para adultos.',
      },
      {
        question: '¿Cuál es mi rango de peso saludable?',
        answer:
          'La calculadora muestra el rango de peso que da un IMC de 18,5 a 24,9 para tu estatura; por ejemplo, unos 56,7–76,3 kg con 175 cm.',
      },
      {
        question: '¿Con qué frecuencia debo revisar mi IMC?',
        answer:
          'De vez en cuando es suficiente, como una vez al mes cuando llevas un seguimiento de cambios de peso. El IMC es un número de detección, no un veredicto diario de salud.',
      },
      {
        question: '¿El IMC mide el porcentaje de grasa corporal?',
        answer:
          'No. El IMC solo relaciona el peso con la estatura y no puede decir cuánto de tu peso es grasa frente a músculo o hueso.',
      },
      {
        question: '¿Qué debo hacer si mi IMC está en el rango de sobrepeso?',
        answer:
          'Tómalo como una señal para revisar la alimentación, la actividad y la salud general con un médico. Un solo número de IMC no es un diagnóstico.',
      },
      {
        question: '¿Puedo usar el IMC si estoy embarazada?',
        answer:
          'No. El embarazo cambia el peso de formas que el IMC no tiene en cuenta, así que las categorías estándar no aplican.',
      },
      {
        question: '¿Mis datos de estatura y peso se guardan en algún lugar?',
        answer:
          'No. Tus medidas se quedan en la pestaña de tu navegador y desaparecen cuando la cierras.',
      },
      {
        question: '¿Por qué la calculadora pide la estatura en pies y pulgadas?',
        answer:
          'El modo imperial acepta pies y pulgadas porque así se mide habitualmente la estatura en EE. UU. El modo métrico usa centímetros en su lugar.',
      },
      {
        question: '¿Cuál es la diferencia entre IMC y TMB?',
        answer:
          'El IMC relaciona el peso con la estatura, mientras que la TMB (tasa metabólica basal) estima las calorías que tu cuerpo quema en reposo: miden cosas distintas.',
      },
      {
        question: '¿Los atletas pueden tener un IMC alto y seguir sanos?',
        answer:
          'Sí. El músculo es denso, así que un atleta muy musculoso puede puntuar como sobrepeso en el IMC a pesar de tener poca grasa corporal. La herramienta señala esta limitación.',
      },
      {
        question: '¿Qué tan preciso es el resultado del IMC?',
        answer:
          'La matemática es exacta para los números que ingresas, pero el resultado solo es tan preciso como tus medidas de estatura y peso.',
      },
    ],
  },
  'calorie-calculator': {
    slug: 'calculadora-de-calorias',
    name: 'Calculadora de Calorías y TDEE',
    shortDescription:
      'Estima la tasa metabólica basal (TMB) y el gasto energético diario total (TDEE) con objetivos de peso.',
    keywords: [
      'calculadora de calorías',
      'calculadora tdee',
      'calculadora tmb',
      'ingesta diaria de calorías',
      'calculadora de calorías de mantenimiento',
      'calculadora de déficit calórico',
      'calculadora de calorías para bajar de peso',
      'calculadora de macros proteínas carbohidratos grasas',
      'cuántas calorías por día',
    ],
    seo: {
      title: 'Calculadora de Calorías y TDEE – TMB y Macros | UtilityFlow',
      description:
        'Esta calculadora de calorías estima la TMB y el TDEE con la fórmula de Mifflin-St Jeor, fija objetivos de pérdida o aumento de peso y planifica macros.',
      primaryKeyword: 'calculadora de calorías',
      secondaryKeywords: [
        'calculadora tdee',
        'calculadora tmb mifflin st jeor',
        'calculadora de necesidades calóricas diarias',
        'déficit calórico para bajar de peso',
      ],
      longTailKeywords: [
        'calcular calorías de mantenimiento y déficit de peso en línea',
        'estimador de gasto calórico diario mifflin st jeor',
        'calculadora de macros tdee métrica e imperial',
        'cuántas calorías debo comer por día para bajar de peso',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Estima tu tasa metabólica basal (TMB) y tu gasto energético diario total (TDEE) con la ecuación clínicamente validada de Mifflin-St Jeor, con objetivos de déficit leve, pérdida de grasa estándar, aumento magro y mantenimiento, además de macros.',
    instructions: [
      {
        title: 'Elige unidades y perfil',
        description:
          'Selecciona unidades métricas o imperiales, la referencia biológica masculina o femenina, e ingresa edad, estatura y peso.',
      },
      {
        title: 'Elige tu nivel de actividad semanal',
        description:
          'Selecciona el multiplicador de actividad desde sedentario (1,2×) hasta extra activo (1,9×) que refleje tu rutina real.',
      },
      {
        title: 'Establece tu objetivo de peso',
        description:
          'Elige mantenimiento, déficit leve, pérdida de grasa estándar o aumento magro para ver el objetivo diario de calorías que corresponde a tu meta.',
      },
      {
        title: 'Revisa los objetivos diarios de calorías',
        description:
          'Compara el TDEE de mantenimiento, los déficits de pérdida de peso leve y estándar, el superávit de aumento magro y los gramos de macros de referencia.',
      },
      {
        title: 'Revisa tus objetivos de gramos de macros',
        description:
          'Lee las referencias de gramos de proteína, carbohidratos y grasas para tu objetivo de calorías elegido y ajústalas a tu dieta.',
      },
      {
        title: 'Guarda y vuelve a revisar tus números',
        description:
          'Anota tus objetivos, vuelve a calcular si cambian tu peso o tu actividad y sigue las tendencias reales de peso durante 2 a 3 semanas antes de ajustar la ingesta.',
      },
    ],
    examples: [
      {
        title: 'Control de mantenimiento de adulto moderadamente activo',
        input: 'Hombre · 30 años · 175 cm · 72 kg · Moderadamente activo (1,55×)',
        output: 'TMB: 1.669 kcal · TDEE de mantenimiento: 2.587 kcal/día · Pérdida de -0,5 kg/sem: 2.087 kcal/día',
        explanation: 'Aplica TMB de Mifflin-St Jeor × factor de actividad 1,55 y resta 500 kcal para una pérdida de ~0,5 kg por semana.',
      },
      {
        title: 'Mujer ligeramente activa: TMB y TDEE',
        input: 'Mujer · 28 años · 165 cm · 60 kg · Ligeramente activa (1,375×)',
        output: 'TMB: 1.330 kcal · TDEE de mantenimiento: 1.829 kcal/día',
        explanation: 'TMB = 10 × 60 + 6,25 × 165 − 5 × 28 − 161 = 1.330 kcal; TDEE = 1.330 × 1,375 = 1.829 kcal/día.',
      },
    ],
    benefits: [
      'Usa la fórmula de predicción de TMB de Mifflin-St Jeor, ampliamente aceptada',
      'Aplica un aviso de piso de 1.200 kcal en las proyecciones de déficit para crear conciencia de seguridad',
      'Muestra referencias de gramos de proteína, carbohidratos y grasas alimentarias',
      'Admite unidades métricas (cm/kg) e imperiales de EE. UU. (pies, pulgadas/libras)',
    ],
    useCases: [
      'Establecer presupuestos diarios realistas de calorías para el seguimiento nutricional',
      'Estimar cambios en el gasto energético según los niveles de actividad',
      'Convertir las calorías de mantenimiento en gramos diarios de proteína, carbohidratos y grasas',
      'Planificar déficits graduales de 250–500 kcal en lugar de dietas extremas insostenibles',
    ],
    faqs: [
      {
        question: '¿Por qué esta calculadora usa la ecuación de Mifflin-St Jeor?',
        answer:
          'La investigación en nutrición clasifica de forma constante a Mifflin-St Jeor entre las fórmulas más precisas para la población general para estimar el gasto energético en reposo a partir de edad, sexo, estatura y peso.',
      },
      {
        question: '¿Qué tan precisos son los multiplicadores de actividad?',
        answer:
          'Los multiplicadores de actividad dan una estimación inicial basada en evidencia. Sigue las tendencias de peso corporal durante 2 a 3 semanas y ajusta la ingesta diaria en 100–200 kcal según el progreso real.',
      },
      {
        question: '¿Esto es asesoría médica o de nutrición clínica?',
        answer:
          'No. Las predicciones son estimaciones informativas; consulta a un médico o a un dietista registrado para orientación personalizada de nutrición médica.',
      },
      {
        question: '¿Qué es la TMB y en qué se diferencia del TDEE?',
        answer:
          'La TMB es la energía que tu cuerpo usa en reposo completo para mantener las funciones básicas. El TDEE suma a tu TMB las calorías quemadas con el movimiento diario y el ejercicio.',
      },
      {
        question: '¿Qué hace la Calculadora de Calorías con mi edad, estatura y peso?',
        answer:
          'Los usa en la ecuación de Mifflin-St Jeor para estimar tu TMB, luego la multiplica por tu nivel de actividad para estimar tu TDEE y tus objetivos diarios de calorías.',
      },
      {
        question: '¿Cómo elijo el nivel de actividad adecuado en la Calculadora de Calorías?',
        answer:
          'Elige el nivel que coincida con una semana típica, no con tu día más activo. La mayoría de las personas con trabajo de oficina que hacen ejercicio unas veces por semana caen en ligeramente o moderadamente activo.',
      },
      {
        question: '¿Cuál es un déficit calórico seguro para bajar de peso?',
        answer:
          'Un punto de partida común es un déficit diario de 250 a 500 kcal, que busca una pérdida gradual de unos 0,25 a 0,5 kg por semana. Los déficits mayores deben comentarse con un profesional de la salud.',
      },
      {
        question: '¿Cuántas calorías debo comer para aumentar de peso de forma magra?',
        answer:
          'La herramienta muestra un superávit de aumento magro sobre tu TDEE de mantenimiento como objetivo inicial. Sigue tu peso unas semanas y ajusta el superávit hacia arriba o hacia abajo según el cambio real.',
      },
      {
        question: '¿Por qué la Calculadora de Calorías muestra un aviso de piso de 1.200 kcal?',
        answer:
          'Los objetivos de calorías muy bajos pueden ser inseguros y difíciles de sostener, así que la herramienta marca los déficits por debajo de 1.200 kcal para crear conciencia de seguridad.',
      },
      {
        question: '¿Cuáles son los objetivos de macros que muestra la Calculadora de Calorías?',
        answer:
          'Son cantidades de referencia en gramos de proteína, carbohidratos y grasas alimentarias que suman tu objetivo diario de calorías elegido. Son una división inicial, no una dieta prescrita.',
      },
      {
        question: '¿La Calculadora de Calorías funciona con unidades métricas e imperiales?',
        answer:
          'Sí. Puedes ingresar la estatura y el peso en centímetros y kilogramos, o en pies, pulgadas y libras, y los resultados son los mismos.',
      },
      {
        question: '¿Puedo usar la Calculadora de Calorías si soy muy activo o atleta?',
        answer:
          'Sí, el nivel extra activo cubre trabajo físico pesado o entrenamiento intenso diario, pero los atletas con una composición corporal inusual pueden encontrar la estimación menos precisa.',
      },
      {
        question: '¿Por qué cambió mi TDEE cuando cambié mi nivel de actividad?',
        answer:
          'El TDEE es tu TMB multiplicada por un factor de actividad, así que un nivel de actividad mayor eleva el multiplicador y, por tanto, eleva tus necesidades calóricas diarias estimadas.',
      },
      {
        question: '¿Con qué frecuencia debo recalcular mis calorías?',
        answer:
          'Recalcula cada vez que cambien tu peso, tu nivel de actividad o tu objetivo, o aproximadamente cada 4 a 8 semanas mientras estés bajando o subiendo de peso activamente.',
      },
      {
        question: '¿La Calculadora de Calorías guarda o sube mis datos personales?',
        answer:
          'No. Todos los cálculos se ejecutan localmente en tu navegador y tu edad, estatura, peso y opciones de actividad nunca se suben ni se guardan en un servidor.',
      },
      {
        question: '¿La Calculadora de Calorías es gratuita?',
        answer:
          'Sí, es completamente gratuita en tu navegador, sin cuenta, sin registro y sin límite de veces para recalcular.',
      },
      {
        question: '¿La Calculadora de Calorías puede ayudarme a planificar un déficit de 500 kcal?',
        answer:
          'Sí. El objetivo de pérdida de peso estándar resta unas 500 kcal por día de tu TDEE de mantenimiento, lo que busca una pérdida de aproximadamente 0,5 kg por semana.',
      },
      {
        question: '¿Qué debo hacer si mi peso no cambia después de seguir el objetivo?',
        answer:
          'Primero verifica que tu nivel de actividad y tu registro de alimentos sean honestos y constantes durante 2 a 3 semanas. Si el peso sigue sin moverse, ajusta la ingesta en 100 a 200 kcal y sigue registrando.',
      },
      {
        question: '¿La Calculadora de Calorías tiene en cuenta el porcentaje de grasa corporal?',
        answer:
          'No. La ecuación de Mifflin-St Jeor usa solo edad, sexo, estatura y peso corporal total, así que no puede distinguir el músculo de la grasa corporal.',
      },
      {
        question: '¿Los adolescentes o adultos mayores pueden usar la Calculadora de Calorías?',
        answer:
          'La fórmula fue diseñada para adultos, así que los resultados para adolescentes o adultos mucho mayores son solo estimaciones aproximadas. Las personas jóvenes deben recibir orientación nutricional de un padre y un profesional de la salud.',
      },
    ],
  },
  'date-difference-calculator': {
    slug: 'calculadora-de-diferencia-de-fechas',
    name: 'Calculadora de Diferencia de Fechas',
    shortDescription:
      'Encuentra años, meses, días, días laborables y días de fin de semana exactos entre fechas, o suma y resta intervalos de calendario.',
    keywords: [
      'calculadora de diferencia de fechas',
      'días entre fechas',
      'contador de días laborables',
      'sumar días a una fecha',
      'calculadora de días entre dos fechas',
      'calculadora de días hábiles',
      'contar días laborables entre fechas',
      'cuántos días faltan para una fecha',
      'sumador y restador de fechas',
    ],
    seo: {
      title: 'Calculadora de Diferencia de Fechas – Días | UtilityFlow',
      description:
        'Cuenta años, meses, días, días laborables y días de fin de semana exactos entre dos fechas, o suma y resta intervalos de calendario desde cualquier fecha.',
      primaryKeyword: 'calculadora de diferencia de fechas',
      secondaryKeywords: [
        'días entre dos fechas',
        'contador de días hábiles y laborables',
        'calculadora para sumar meses a una fecha',
        'contar días de fin de semana entre fechas',
      ],
      longTailKeywords: [
        'contar días laborables y de fin de semana entre dos fechas',
        'calcular meses y días exactos entre fechas',
        'sumar o restar años meses días a una fecha',
        'cuántos días laborables hay entre dos fechas en línea',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mide intervalos exactos de calendario entre dos fechas cualesquiera, incluido el conteo de días laborables frente a días de fin de semana y el conteo opcional de la fecha final, o suma y resta años, meses y días desde una fecha de referencia.',
    instructions: [
      {
        title: 'Elige Diferencia o Sumar/Restar',
        description:
          'Elige Diferencia entre fechas para comparar dos fechas, o Sumar / Restar tiempo para proyectar una fecha futura o pasada.',
      },
      {
        title: 'Elige fechas y opciones',
        description:
          'Ingresa las fechas de inicio y fin (usa el botón de intercambio cuando quieras) y marca opcionalmente Incluir fecha final (+1 día).',
      },
      {
        title: 'Intercambia las fechas si es necesario',
        description:
          'Usa el botón de intercambio para invertir al instante las fechas de inicio y fin si las ingresaste al revés.',
      },
      {
        title: 'Revisa el desglose de calendario',
        description:
          'Consulta años, meses y días, días totales de calendario, semanas, días laborables (lunes a viernes), días de fin de semana y horas.',
      },
      {
        title: 'Revisa los días laborables y de fin de semana',
        description:
          'Lee por separado los conteos de días laborables y de fin de semana para planificar días de trabajo, días de facturación o duraciones de viaje.',
      },
      {
        title: 'Copia o reutiliza el resultado',
        description:
          'Copia el desglose para contratos, cronogramas o mensajes, y vuelve a calcular con la opción de fecha final inclusiva si tu conteo parece un día corto.',
      },
    ],
    examples: [
      {
        title: 'Contar la duración de un proyecto y los días laborables',
        input: 'Inicio: 2025-01-15 · Fin: 2025-11-12 · Inclusiva: No',
        output: '0 años, 9 meses, 28 días · 301 días totales · 215 días laborables · 86 días de fin de semana',
        explanation: 'Usa aritmética de calendario en UTC, inmune a los errores de cambio de horario de verano de 23 y 25 horas.',
      },
      {
        title: 'Días laborables de marzo de 2025',
        input: 'Inicio: 2025-03-01 · Fin: 2025-03-31 · Inclusiva: No',
        output: '30 días totales · 21 días laborables · 9 días de fin de semana',
        explanation: 'Del 1 al 31 de marzo de 2025 hay 30 días: 21 de lunes a viernes y 9 sábados y domingos.',
      },
    ],
    benefits: [
      'La aritmética pura de calendario en UTC evita errores de un día por el horario de verano',
      'Cuenta al instante los días laborables (lunes a viernes) y los días de fin de semana',
      'Admite el conteo inclusivo de la fecha final para noches de hotel frente a días de sprint',
      'Incluye suma y resta de fechas con ajuste inteligente de fin de mes',
    ],
    useCases: [
      'Contar días de sprint de proyecto, términos de contrato o límites de estancia de visa',
      'Encontrar días exactos de facturación o fechas de vencimiento de períodos de aviso',
      'Sumar 90 días o 6 meses a la fecha de vigencia de un contrato',
      'Verificar los días laborables totales disponibles en un trimestre o período fiscal',
    ],
    faqs: [
      {
        question: '¿El contador de días laborables excluye los días festivos?',
        answer:
          'Cuenta los días laborables de lunes a viernes del calendario porque los días festivos difieren según el país, el estado y el calendario del empleador.',
      },
      {
        question: '¿Cuándo debo marcar "Incluir fecha final (+1 día de calendario)"?',
        answer:
          'Márcala cuando cuentes días inclusivos de asistencia o vacaciones (por ejemplo, de lunes a viernes = 5 días). Déjala sin marcar cuando cuentes noches transcurridas o intervalos.',
      },
      {
        question: '¿Qué pasa si sumo 1 mes al 31 de enero?',
        answer:
          'El ajuste de calendario fija el 31 de enero + 1 mes en el último día válido de febrero (28 de febrero, o 29 de febrero en años bisiestos) en lugar de pasar a marzo.',
      },
      {
        question: '¿Cómo cuenta los días entre dos fechas la Calculadora de Diferencia de Fechas?',
        answer:
          'Mide el intervalo exacto de calendario entre las dos fechas con aritmética de fechas en UTC y luego divide el intervalo en años, meses y días restantes, además de días y semanas totales.',
      },
      {
        question: '¿La Calculadora de Diferencia de Fechas incluye la fecha de inicio en el total?',
        answer:
          'Por defecto no, así que de lunes a viernes se cuentan 4 días transcurridos. Activa la opción de fecha final inclusiva cuando quieras contar tanto la fecha de inicio como la de fin.',
      },
      {
        question: '¿Cuál es la diferencia entre días de calendario y días laborables en esta herramienta?',
        answer:
          'Los días de calendario cuentan todos los días del intervalo, mientras que los días laborables cuentan solo de lunes a viernes. Los días de fin de semana se muestran por separado para que puedas ver ambos totales a la vez.',
      },
      {
        question: '¿La Calculadora de Diferencia de Fechas puede contar los días de fin de semana por separado?',
        answer:
          'Sí. El desglose lista los días totales de fin de semana (sábados y domingos) junto con los días laborables, para que puedas planificar viajes, turnos o plazos que abarquen fines de semana.',
      },
      {
        question: '¿Cómo maneja la Calculadora de Diferencia de Fechas los años bisiestos?',
        answer:
          'Usa aritmética real de calendario, así que el 29 de febrero se cuenta en los años bisiestos y los intervalos que cruzan febrero en un año bisiesto incluyen el día extra automáticamente.',
      },
      {
        question: '¿Puedo usar la Calculadora de Diferencia de Fechas para saber cuántos días faltan para una fecha?',
        answer:
          'Sí. Establece la fecha de inicio en hoy y la fecha de fin en tu fecha objetivo, y el resultado de días totales te dirá exactamente cuántos días faltan.',
      },
      {
        question: '¿La Calculadora de Diferencia de Fechas funciona entre años distintos?',
        answer:
          'Sí. Puedes comparar fechas separadas por años y el resultado divide el intervalo en años completos, meses restantes y días restantes.',
      },
      {
        question: '¿Qué pasa si la fecha de fin es anterior a la fecha de inicio?',
        answer:
          'Usa el botón de intercambio para invertir las dos fechas. La herramienta está diseñada para comparar una fecha de inicio con una fecha de fin posterior, así que intercambiarlas da el intervalo positivo correcto.',
      },
      {
        question: '¿Puedo sumar años, meses y días a una fecha a la vez?',
        answer:
          'Sí. En el modo Sumar / Restar puedes ingresar una combinación de años, meses y días, y la herramienta aplica todo el intervalo a tu fecha de referencia en un solo paso.',
      },
      {
        question: '¿La Calculadora de Diferencia de Fechas se ajusta por el horario de verano?',
        answer:
          'Sí, en efecto. Usa aritmética de calendario en UTC, así que los días de 23 y 25 horas alrededor de los cambios de horario de verano no pueden mover el resultado un día.',
      },
      {
        question: '¿Cómo cuento los días hábiles para la fecha límite de un proyecto?',
        answer:
          'Ingresa las fechas de inicio y fin del proyecto y lee el conteo de días laborables, que es de lunes a viernes. Recuerda que los días festivos no se restan, así que ajusta el conteo si hay festivos dentro del intervalo.',
      },
      {
        question: '¿La Calculadora de Diferencia de Fechas es gratuita?',
        answer:
          'Sí, es completamente gratuita en tu navegador, sin cuenta, sin registro y sin límite de intervalos de fechas que calcules.',
      },
      {
        question: '¿La Calculadora de Diferencia de Fechas guarda o sube mis fechas?',
        answer:
          'No. Todos los cálculos se ejecutan localmente en tu navegador y las fechas que ingresas nunca se suben ni se guardan en un servidor.',
      },
      {
        question: '¿Puedo calcular la diferencia entre fechas de distintas zonas horarias?',
        answer:
          'La herramienta compara fechas de calendario, no horas del día, así que las zonas horarias no cambian el resultado. Elige las fechas como aparecen en cada calendario local.',
      },
      {
        question: '¿Qué cambia la opción de fecha final inclusiva en el resultado?',
        answer:
          'Agrega exactamente un día de calendario al total, así que un conteo inclusivo de lunes a viernes se convierte en 5 días en lugar de 4. El desglose en años, meses y días se actualiza en consecuencia.',
      },
      {
        question: '¿La Calculadora de Diferencia de Fechas puede sumar 90 días a la fecha de un contrato?',
        answer:
          'Sí. Elige Sumar / Restar, ingresa la fecha del contrato, suma 90 días y la herramienta muestra la fecha resultante exacta, incluido el cambio de mes y año.',
      },
      {
        question: '¿Por qué febrero a veces cambia el resultado de mi suma de meses?',
        answer:
          'Sumar meses se ajusta al último día válido del mes objetivo, así que el 31 de enero más un mes cae el 28 o 29 de febrero en lugar del 2 o 3 de marzo.',
      },
    ],
  },
  'time-duration-calculator': {
    slug: 'calculadora-de-duracion-de-tiempo',
    name: 'Calculadora de Duración de Tiempo',
    shortDescription:
      'Calcula el tiempo transcurrido HH:MM:SS entre horas del reloj (con descansos y turnos nocturnos) o suma hojas de horas de varias filas.',
    keywords: [
      'calculadora de duración de tiempo',
      'calculadora de horas',
      'calculadora de hoja de horas',
      'calculadora de tiempo transcurrido',
      'calculadora de horas de trabajo',
      'tiempo transcurrido entre dos horas',
      'calculadora para sumar horas y minutos',
      'calculadora de horas decimales',
      'calculadora de horas de turno',
    ],
    seo: {
      title: 'Calculadora de Duración – Horas y Hojas | UtilityFlow',
      description:
        'Calcula el tiempo transcurrido en horas, minutos y segundos, descuenta descansos sin goce, maneja turnos nocturnos o suma filas de hoja de horas.',
      primaryKeyword: 'calculadora de duración de tiempo',
      secondaryKeywords: [
        'calculadora de horas de trabajo',
        'sumador de duración de hoja de horas',
        'convertidor de horas decimales',
        'calculadora de horas de turno nocturno',
      ],
      longTailKeywords: [
        'calcular tiempo transcurrido con descanso sin goce y turno nocturno',
        'convertir duración hh mm ss a horas decimales',
        'sumar varias filas de horas minutos segundos',
        'cómo calcular horas de trabajo con descanso en línea',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Determina las horas, minutos y segundos exactos transcurridos entre dos horas del reloj, con deducción de descansos sin goce y turnos nocturnos que cruzan la medianoche, o suma filas ilimitadas de duración en horas decimales de nómina.',
    instructions: [
      {
        title: 'Elige el modo Transcurrido o Sumar duraciones',
        description:
          'Usa Tiempo transcurrido entre relojes para verificar inicio y fin de turno, o Sumar duraciones de hoja de horas para sumar varios bloques.',
      },
      {
        title: 'Ingresa las horas y el descanso opcional',
        description:
          'Establece la hora de inicio, la hora de fin y cualquier descanso sin goce en minutos; activa el cambio nocturno si un turno cruza la medianoche.',
      },
      {
        title: 'Activa el cambio nocturno para turnos de noche',
        description:
          'Activa la opción nocturna cuando la hora de fin es anterior a la hora de inicio, para que un turno que cruza la medianoche se cuente correctamente.',
      },
      {
        title: 'Revisa el desglose de duración neta',
        description:
          'Consulta HH:MM:SS, minutos totales, segundos totales y horas decimales juntos antes de usar el resultado.',
      },
      {
        title: 'Copia HH:MM:SS u horas decimales',
        description:
          'Usa HH:MM:SS para registros o las horas decimales (por ejemplo, 7,50 h) para facturación y hojas de nómina.',
      },
      {
        title: 'Corrige un resultado que se ve mal',
        description:
          'Si el total se ve demasiado corto, revisa primero la duración del descanso y el interruptor nocturno, y luego confirma que las horas de inicio y fin no estén intercambiadas.',
      },
    ],
    examples: [
      {
        title: 'Jornada laboral estándar con descanso de 30 minutos',
        input: 'Inicio: 09:00:00 · Fin: 17:30:00 · Descanso: 30 min',
        output: 'Duración neta: 08:00:00 · Decimal: 8,00 h · 480 min',
        explanation: '8,5 horas transcurridas menos 0,5 de descanso sin goce equivalen a 8,00 horas facturables.',
      },
      {
        title: 'Jornada de 8 horas con descanso de 60 minutos',
        input: 'Inicio: 08:00:00 · Fin: 16:00:00 · Descanso: 60 min',
        output: 'Duración neta: 07:00:00 · Decimal: 7,00 h · 420 min',
        explanation: '8 horas transcurridas menos 1 hora de descanso sin goce equivalen a 7,00 horas netas.',
      },
    ],
    benefits: [
      'Maneja con limpieza los turnos nocturnos que cruzan las 00:00 con un solo interruptor',
      'Muestra juntos HH:MM:SS, horas decimales, minutos totales y segundos totales',
      'El sumador dinámico de varias filas totaliza segmentos de trabajo o duraciones de video y audio ilimitados',
      'Evita deducciones de descanso mayores que la duración total del turno transcurrido',
    ],
    useCases: [
      'Registrar horas facturables freelance y deducir descansos sin goce',
      'Calcular horas de turnos nocturnos de hospital, logística u hotelería',
      'Sumar marcas de tiempo de episodios de podcast, duraciones de clases o listas de reproducción',
      'Convertir entradas de hoja de horas de 7 h 45 min en 7,75 horas decimales para facturación',
    ],
    faqs: [
      {
        question: '¿Cómo se calculan las horas decimales?',
        answer:
          'Los segundos netos totales se dividen entre 3.600. Por ejemplo, 7 horas 45 minutos (27.900 segundos) equivalen a 7,75 horas decimales.',
      },
      {
        question: '¿Esto admite turnos nocturnos que terminan después de la medianoche?',
        answer:
          'Sí. Mantén marcada la opción "Tratar la hora de fin anterior a la hora de inicio como el día siguiente" para que un turno de 22:00 a 06:30 calcule con precisión 8 horas 30 minutos.',
      },
      {
        question: '¿Puedo sumar duraciones mayores de 24 horas?',
        answer:
          'Sí. El modo Sumar duraciones de hoja de horas acumula horas sin reiniciar a las 24 y también muestra el conteo equivalente de días de 24 horas.',
      },
      {
        question: '¿Qué mide la Calculadora de Duración de Tiempo?',
        answer:
          'Mide el tiempo transcurrido entre dos horas del reloj, o el total de varias filas de duración, y muestra el resultado en HH:MM:SS, horas decimales, minutos y segundos.',
      },
      {
        question: '¿Cómo ingreso las horas en la Calculadora de Duración de Tiempo?',
        answer:
          'Ingresa una hora de inicio y una hora de fin en horas, minutos y segundos. En el modo Sumar duraciones, ingresa cada bloque como su propia fila.',
      },
      {
        question: '¿Cómo deduce la Calculadora de Duración de Tiempo un descanso sin goce?',
        answer:
          'Resta los minutos de descanso que ingresas del tiempo transcurrido del turno, así que un turno de 8,5 horas con un descanso de 30 minutos da 8,00 horas netas.',
      },
      {
        question: '¿Qué pasa si mi descanso es más largo que mi turno?',
        answer:
          'La herramienta evita una deducción de descanso mayor que la duración total del turno transcurrido, así que la duración neta no puede bajar de cero.',
      },
      {
        question: '¿La Calculadora de Duración de Tiempo puede manejar turnos que empiezan antes de la medianoche y terminan después?',
        answer:
          'Sí. Activa el cambio nocturno para que una hora de fin anterior a la hora de inicio se trate como el día siguiente y se cuente el turno nocturno completo.',
      },
      {
        question: '¿Cuál es la diferencia entre tiempo transcurrido y duración neta?',
        answer:
          'El tiempo transcurrido es el intervalo completo desde el inicio hasta el fin. La duración neta es el tiempo transcurrido menos cualquier descanso sin goce, que es la cifra que suele facturarse o pagarse.',
      },
      {
        question: '¿Cómo sumo varios bloques de trabajo separados?',
        answer:
          'Cambia al modo Sumar duraciones de hoja de horas, agrega una fila por bloque de trabajo con sus horas, minutos y segundos, y la herramienta suma todas las filas a la vez.',
      },
      {
        question: '¿Puedo usar la Calculadora de Duración de Tiempo para duraciones de video o audio?',
        answer:
          'Sí. Agrega la duración de cada episodio, clase o pista como una fila en el modo Sumar duraciones para obtener la duración combinada de una lista de reproducción o un curso.',
      },
      {
        question: '¿La Calculadora de Duración de Tiempo redondea minutos o segundos?',
        answer:
          'No, calcula a partir de segundos exactos y muestra el resultado preciso en HH:MM:SS junto con el equivalente en horas decimales, así que nada se redondea en silencio.',
      },
      {
        question: '¿Qué significan 7,75 horas decimales en horas y minutos?',
        answer:
          'Significan 7 horas y 45 minutos. La parte después del punto decimal es una fracción de hora, así que 0,75 de hora equivalen a 45 minutos.',
      },
      {
        question: '¿La Calculadora de Duración de Tiempo es gratuita?',
        answer:
          'Sí, es completamente gratuita en tu navegador, sin cuenta, sin registro y sin límite de duraciones que calcules.',
      },
      {
        question: '¿La Calculadora de Duración de Tiempo guarda o sube mis horas?',
        answer:
          'No. Todos los cálculos se ejecutan localmente en tu navegador y las horas y duraciones que ingresas nunca se suben ni se guardan en un servidor.',
      },
      {
        question: '¿Puedo calcular una duración de más de un día?',
        answer:
          'Sí. El modo Sumar duraciones suma las horas sin reiniciar a las 24 y también muestra a cuántos días de 24 horas equivale el total.',
      },
      {
        question: '¿Por qué mi turno muestra una duración negativa o cero?',
        answer:
          'Eso suele significar que la hora de fin es anterior a la hora de inicio sin el cambio nocturno activado, o que el descanso es tan largo como el turno. Revisa primero el interruptor nocturno y la duración del descanso.',
      },
      {
        question: '¿Cómo convierto minutos en horas decimales con esta herramienta?',
        answer:
          'Ingresa el tiempo como una fila de duración o usa el resultado transcurrido y lee la cifra de horas decimales. Por ejemplo, 90 minutos se muestran como 1,50 horas decimales.',
      },
      {
        question: '¿La Calculadora de Duración de Tiempo puede sumar horas en formato HH:MM:SS?',
        answer:
          'Sí. Cada fila de duración acepta horas, minutos y segundos, y el total se muestra de nuevo en HH:MM:SS además de en horas decimales.',
      },
      {
        question: '¿Qué debo revisar si el total de mi hoja de horas no coincide con mis horas?',
        answer:
          'Verifica que cada fila se haya ingresado en el modo correcto, que ningún descanso se haya contado dos veces y que los turnos nocturnos tengan activada la opción de cambio nocturno.',
      },
    ],
  },
  'unit-converter': {
    slug: 'conversor-de-unidades',
    name: 'Conversor de Unidades',
    shortDescription:
      'Convierte unidades de longitud, peso, temperatura, área, volumen, velocidad y almacenamiento digital con una tabla de referencia completa.',
    keywords: [
      'conversor de unidades',
      'conversor métrico imperial',
      'conversor de longitud peso temperatura',
      'conversor de almacenamiento digital',
      'conversor de metros a pies',
      'conversor de kg a libras',
      'conversor de celsius a fahrenheit',
      'conversor de litros a galones',
      'conversor de km a millas',
    ],
    seo: {
      title: 'Conversor de Unidades – Longitud, Peso y Datos | UtilityFlow',
      description:
        'Convierte longitud, peso, temperatura, área, volumen, velocidad y almacenamiento digital entre unidades métricas e imperiales de EE. UU., con tabla completa.',
      primaryKeyword: 'conversor de unidades',
      secondaryKeywords: [
        'conversor métrico a imperial',
        'temperatura celsius fahrenheit kelvin',
        'conversor de datos gb a gib',
        'conversor de kilómetros a millas',
      ],
      longTailKeywords: [
        'convertir kilómetros a millas y kilogramos a libras en línea',
        'conversor de almacenamiento gigabyte decimal vs gibibyte',
        'conversor de unidades de ciencia e ingeniería con tabla',
        'cómo convertir celsius a fahrenheit y kelvin en línea',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convierte al instante en siete familias de medidas: longitud, peso y masa, temperatura, área, volumen, velocidad y almacenamiento digital, con una tabla automática lado a lado que muestra cada unidad de la categoría.',
    instructions: [
      {
        title: 'Elige una categoría de medida',
        description:
          'Selecciona longitud, peso y masa, temperatura, área, volumen, velocidad o almacenamiento digital en la barra superior.',
      },
      {
        title: 'Ingresa el valor y elige las unidades',
        description:
          'Escribe cualquier valor numérico y elige tus unidades de origen y destino (haz clic en Intercambiar cuando quieras invertirlas).',
      },
      {
        title: 'Invierte la dirección de la conversión',
        description:
          'Haz clic en Intercambiar para invertir al instante las unidades de origen y destino sin volver a escribir el valor.',
      },
      {
        title: 'Lee el resultado convertido exacto',
        description:
          'Consulta el valor objetivo con formato, incluidos los decimales, antes de copiarlo en tu documento o cálculo.',
      },
      {
        title: 'Copia el resultado o revisa todas las unidades',
        description:
          'Copia el resultado objetivo con formato o lee la tabla de valores equivalentes en todas las unidades de la familia.',
      },
      {
        title: 'Revisa las particularidades de almacenamiento o temperatura',
        description:
          'Para almacenamiento, confirma si necesitas GB decimales o GiB binarios, y para temperatura, ten en cuenta que los valores por debajo del cero absoluto están bloqueados.',
      },
    ],
    examples: [
      {
        title: 'Gigabyte decimal frente a gibibyte binario',
        input: 'Categoría: Almacenamiento digital · 1.000 GB → GiB',
        output: '931,32257 GiB',
        explanation: 'Explica por qué un disco de 1 TB (1.000 GB) reporta aproximadamente 931 GiB en los sistemas operativos de escritorio.',
      },
      {
        title: 'Convertir 5 kilómetros a millas',
        input: 'Categoría: Longitud · 5 km → millas',
        output: '3,10686 millas',
        explanation: 'Se calcula como 5 × 0,621371 = 3,10686 millas.',
      },
    ],
    benefits: [
      'Usa constantes exactas internacionales NIST/SI de conversión (por ejemplo, 1 pulgada = 0,0254 m exactos)',
      'Separa el almacenamiento decimal SI (KB/MB/GB) del almacenamiento binario IEC (KiB/MiB/GiB)',
      'Valida los límites físicos de temperatura (nunca por debajo del cero absoluto 0 K / -273,15 °C)',
      'Muestra una tabla de comparación completa para cada unidad de la categoría activa',
    ],
    useCases: [
      'Convertir planos de ingeniería entre milímetros, pulgadas y pies',
      'Verificar volúmenes líquidos de cocina entre mililitros, tazas y galones',
      'Convertir temperaturas de clima o laboratorio de Celsius a Fahrenheit y Kelvin',
      'Auditar tamaños de discos en la nube entre GB decimales y GiB binarios',
    ],
    faqs: [
      {
        question: '¿Por qué el almacenamiento digital separa GB de GiB?',
        answer:
          'Los fabricantes de almacenamiento usan prefijos SI en base 10 (1 GB = 1.000³ bytes), mientras que muchas utilidades del sistema operativo usan tamaños binarios en base 2 (1 GiB = 1.024³ bytes). Mantener ambos explícitos elimina la confusión.',
      },
      {
        question: '¿Se usan unidades de volumen de EE. UU. para tazas, pintas y galones?',
        answer:
          'Sí. Las onzas líquidas, tazas, pintas, cuartos y galones usan las definiciones líquidas consuetudinarias de EE. UU. (1 galón estadounidense = 3,785411784 L exactos).',
      },
      {
        question: '¿Por qué el conversor de temperatura bloquea valores por debajo de -273,15 °C?',
        answer:
          'El cero absoluto (0 K / -273,15 °C / -459,67 °F) es el límite inferior físico de la temperatura termodinámica.',
      },
      {
        question: '¿Qué unidades puede convertir el Conversor de Unidades?',
        answer:
          'Cubre siete familias: longitud, peso y masa, temperatura, área, volumen, velocidad y almacenamiento digital, con muchas unidades dentro de cada familia.',
      },
      {
        question: '¿Qué tan precisos son los resultados del Conversor de Unidades?',
        answer:
          'Los resultados usan constantes exactas internacionales NIST y SI de conversión, como 1 pulgada equivale a 0,0254 metros exactos, así que la matemática es tan precisa como el valor que ingresas.',
      },
      {
        question: '¿El Conversor de Unidades es gratuito?',
        answer:
          'Sí, es completamente gratuito en tu navegador, sin cuenta, sin registro y sin límite de conversiones que hagas.',
      },
      {
        question: '¿Cómo convierto kilómetros a millas con el Conversor de Unidades?',
        answer:
          'Elige la categoría Longitud, ingresa tus kilómetros, elige kilómetros como unidad de origen y millas como unidad de destino, y el valor convertido aparece al instante.',
      },
      {
        question: '¿Cómo convierto kilogramos a libras?',
        answer:
          'Elige la categoría Peso y masa, ingresa los kilogramos, elige kilogramos como unidad de origen y libras como unidad de destino, y lee el resultado o la tabla completa de comparación.',
      },
      {
        question: '¿Cuál es la diferencia entre un litro y un galón estadounidense?',
        answer:
          'Un litro es una unidad métrica de volumen, mientras que un galón estadounidense es una unidad líquida consuetudinaria de EE. UU. igual a 3,785411784 litros exactos. El conversor usa ese factor exacto.',
      },
      {
        question: '¿El Conversor de Unidades puede convertir Celsius a Fahrenheit y Kelvin?',
        answer:
          'Sí. Elige la categoría Temperatura y cualquier par de Celsius, Fahrenheit y Kelvin, y la herramienta convierte entre ellos con las fórmulas estándar.',
      },
      {
        question: '¿Por qué 1 TB se muestra como unos 931 GiB en el Conversor de Unidades?',
        answer:
          'Un disco de 1 TB tiene 1.000 GB en términos decimales, pero los sistemas operativos a menudo reportan gibibytes binarios, y 1.000 GB equivalen a unos 931 GiB porque cada GiB es 1.024³ bytes.',
      },
      {
        question: '¿El Conversor de Unidades funciona sin conexión en mi navegador?',
        answer:
          'Sí. Todas las conversiones se ejecutan localmente en tu navegador con constantes integradas, así que no se necesita conexión a internet ni subida de datos una vez cargada la página.',
      },
      {
        question: '¿El Conversor de Unidades guarda o sube mis números?',
        answer:
          'No. Cada conversión se ejecuta localmente en tu navegador y los valores que ingresas nunca se suben ni se guardan en un servidor.',
      },
      {
        question: '¿Puedo convertir velocidad entre km/h y mph?',
        answer:
          'Sí. Elige la categoría Velocidad, ingresa el valor en km/h, elige mph como unidad de destino y la herramienta lo convierte al instante.',
      },
      {
        question: '¿Cómo convierto metros cuadrados a pies cuadrados?',
        answer:
          'Elige la categoría Área, ingresa los metros cuadrados, elige metros cuadrados como unidad de origen y pies cuadrados como unidad de destino, y el área convertida aparece de inmediato.',
      },
      {
        question: '¿Cuál es la diferencia entre KB decimal y KiB binario?',
        answer:
          'Un kilobyte decimal (KB) es 1.000 bytes, mientras que un kibibyte binario (KiB) es 1.024 bytes. El conversor mantiene ambos sistemas separados para que los tamaños de almacenamiento nunca se mezclen.',
      },
      {
        question: '¿El Conversor de Unidades puede manejar números muy grandes o muy pequeños?',
        answer:
          'Sí. Puedes ingresar valores grandes como miles de kilómetros o valores diminutos como fracciones de milímetro, y el resultado se muestra con precisión decimal completa.',
      },
      {
        question: '¿Qué escala de temperatura debo usar para cocinar o para el clima?',
        answer:
          'La mayoría de las recetas y los reportes del clima fuera de EE. UU. usan Celsius, mientras que las recetas y el clima de EE. UU. usan Fahrenheit. Kelvin se usa principalmente en ciencia y trabajo de laboratorio.',
      },
      {
        question: '¿Cómo convierto mililitros a tazas para una receta?',
        answer:
          'Elige la categoría Volumen, ingresa los mililitros, elige mililitros como unidad de origen y tazas estadounidenses como unidad de destino, y la herramienta da el equivalente en tazas para tu receta.',
      },
      {
        question: '¿Por qué mis valores convertidos muestran muchos decimales?',
        answer:
          'La herramienta muestra la precisión completa para que el trabajo de ingeniería y ciencia se mantenga preciso. Para el uso cotidiano, simplemente redondea el resultado a los decimales que necesites.',
      },
    ],
  },
  'currency-calculator': {
    slug: 'calculadora-de-divisas',
    name: 'Calculadora de Divisas',
    shortDescription:
      'Convierte divisas usando tu tasa de cambio manual exacta o tasas de referencia opcionales del BCE con cálculo de comisión de cambio.',
    keywords: [
      'calculadora de divisas',
      'calculadora de tasa de cambio',
      'calculadora de comisión de cambio',
      'convertidor de moneda manual',
      'convertidor de usd a eur',
      'convertidor de moneda con comisión',
      'calculadora de recargo de tasa de cambio',
      'calculadora de comisión por transacción extranjera',
      'calculadora de tasa de cambio inversa',
    ],
    seo: {
      title: 'Calculadora de Divisas – Tasas y Comisiones | UtilityFlow',
      description:
        'Convierte entre las principales divisas con tu propia tasa de cambio cotizada, suma comisiones de banco o tarjeta para ver el monto neto, o consulta el BCE.',
      primaryKeyword: 'calculadora de divisas',
      secondaryKeywords: [
        'calculadora de comisión de tasa de cambio',
        'convertidor de moneda manual',
        'calculadora de margen de cambio',
        'convertidor de tasa de referencia del bce',
      ],
      longTailKeywords: [
        'convertir moneda con tasa de cambio de banco y comisión',
        'calculadora de divisas sin tasas falsas fijas',
        'calcular monto neto en moneda extranjera tras comisión',
        'cuánto recibiré después de la comisión de cambio',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Convierte entre las principales divisas del mundo con transparencia usando la tasa de cambio exacta cotizada por tu banco, corredor o factura, además de deducción opcional de comisión de cambio, matemática de tasa inversa y consulta de tasa de referencia del BCE bajo demanda.',
    instructions: [
      {
        title: 'Ingresa el monto y el par de divisas',
        description:
          'Escribe el monto inicial y elige tus divisas de origen y destino (usa Intercambiar para invertir tanto el par como la tasa).',
      },
      {
        title: 'Indica u obtén la tasa de cambio',
        description:
          'Escribe tu tasa de cambio cotizada manualmente (nunca inventada sin conexión) o haz clic en Obtener tasa de referencia del BCE para consultar la API externa de Frankfurter.',
      },
      {
        title: 'Incluye la comisión de banco o tarjeta si aplica',
        description:
          'Ingresa cualquier margen porcentual de cambio o comisión por transacción extranjera de tarjeta (por ejemplo, 2,5%) para ver los ingresos netos reales y una tabla de referencia.',
      },
      {
        title: 'Revisa los montos bruto, de comisión y neto',
        description:
          'Compara el total bruto convertido, la comisión deducida y el monto neto que realmente recibes antes de enviar dinero.',
      },
      {
        title: 'Revisa la tasa inversa y la tabla de referencia',
        description:
          'Lee la tasa inversa y la tabla de referencia rápida para verificar la conversión con varios montos.',
      },
      {
        title: 'Vuelve a obtener las tasas antes de actuar',
        description:
          'Las tasas de cambio se mueven constantemente, así que obtén una tasa de referencia del BCE actualizada o confirma la cotización de tu banco cerca del momento en que conviertas.',
      },
    ],
    examples: [
      {
        title: 'Convertir una factura con una comisión de transferencia del 1,5%',
        input: 'Monto: 1.000 USD · Tasa: 0,9200 EUR/USD · Comisión de cambio: 1,5%',
        output: 'Bruto: 920,00 EUR · Comisión: 13,80 EUR · Neto recibido: 906,20 EUR',
        explanation: 'Modela con transparencia tanto la conversión de cambio como la comisión porcentual del proveedor.',
      },
      {
        title: 'Convertir 500 EUR a USD con comisión del 2%',
        input: 'Monto: 500 EUR · Tasa: 1,08 USD/EUR · Comisión de cambio: 2%',
        output: 'Bruto: 540,00 USD · Comisión: 10,80 USD · Neto recibido: 529,20 USD',
        explanation: 'Se calcula como 500 × 1,08 = 540 USD brutos; el 2% de 540 es 10,80 USD, así que el neto es 529,20 USD.',
      },
    ],
    benefits: [
      'Nunca inventa tasas de cambio falsas o desactualizadas sin conexión',
      'Modela porcentajes reales de comisión por transacción extranjera de bancos o tarjetas de crédito',
      'Calcula automáticamente la tasa de conversión inversa (1 objetivo = ? base)',
      'Admite consultas opcionales de referencia del BCE en vivo mediante la API de Frankfurter con respaldo sin conexión',
    ],
    useCases: [
      'Verificar cuánto cuesta una transferencia internacional después de una comisión de cambio del banco',
      'Calcular totales de facturas con una tasa de cambio de contrato bloqueada',
      'Comparar comisiones del 3% por transacción extranjera de tarjetas de crédito frente a tarjetas sin comisión',
      'Evaluar tablas de referencia rápida de conversión para varios montos',
    ],
    faqs: [
      {
        question: '¿Por qué la tasa de cambio empieza en 1,0000 en lugar de tasas en vivo prellenadas?',
        answer:
          'Las tasas de cambio fluctúan continuamente y las cotizaciones en vivo del mercado requieren una fuente de datos externa. En lugar de inventar o guardar en caché tasas inexactas, esta herramienta empieza limpiamente en modo manual y te permite hacer clic en "Obtener tasa de referencia del BCE" cuando quieras una consulta externa de la tasa del BCE.',
      },
      {
        question: '¿De dónde vienen las tasas de referencia obtenidas?',
        answer:
          'Cuando haces clic en "Obtener tasa de referencia del BCE", tu navegador solicita la última tasa de referencia del Banco Central Europeo publicada por api.frankfurter.app. Las tasas de referencia son puntos de referencia de mercado medio y difieren ligeramente de las cotizaciones minoristas de los bancos.',
      },
      {
        question: '¿Esto funciona si estoy sin conexión o si la API externa está bloqueada?',
        answer:
          'Sí. Siempre puedes escribir cualquier tasa de cambio manualmente en el campo Tasa de cambio y todos los cálculos de comisión, inversa y tabla se ejecutan 100% localmente en tu navegador.',
      },
      {
        question: '¿Cómo convierte mi dinero la Calculadora de Divisas?',
        answer:
          'Multiplica tu monto por la tasa de cambio que ingresas u obtienes, luego resta cualquier porcentaje de comisión de cambio que agregues, y muestra el total bruto, la comisión y el monto neto recibido.',
      },
      {
        question: '¿Qué tasa de cambio debo ingresar en la Calculadora de Divisas?',
        answer:
          'Ingresa la tasa exacta cotizada por tu banco, corredor, proveedor de tarjeta o factura. Si no tienes una cotización, obtén la tasa de referencia del BCE como punto de referencia y espera que la tasa de tu proveedor difiera ligeramente.',
      },
      {
        question: '¿Cuál es la diferencia entre una tasa de referencia del BCE y la tasa de mi banco?',
        answer:
          'Una tasa de referencia del BCE es un punto de referencia de mercado medio publicado por el Banco Central Europeo. Una tasa bancaria agrega un margen sobre ese punto de referencia, así que la tasa bancaria suele ser menos favorable.',
      },
      {
        question: '¿Cómo calcula la Calculadora de Divisas las comisiones de cambio?',
        answer:
          'Aplica el porcentaje de comisión que ingresas al monto bruto convertido y lo resta para mostrar los ingresos netos. Por ejemplo, una comisión del 1,5% sobre 920 EUR quita 13,80 EUR.',
      },
      {
        question: '¿Qué es una tasa de cambio inversa?',
        answer:
          'Es la tasa en la dirección opuesta, que muestra cuánto de la moneda base compra una unidad de la moneda objetivo. La herramienta la calcula automáticamente a partir de la tasa que ingresas.',
      },
      {
        question: '¿La Calculadora de Divisas da asesoría financiera?',
        answer:
          'No. Solo realiza la matemática de conversión y comisión a partir de la tasa y la comisión que proporcionas. No recomienda cuándo convertir, qué proveedor usar ni si una tasa es buena.',
      },
      {
        question: '¿La Calculadora de Divisas puede mostrar cuánto recibiré después de las comisiones?',
        answer:
          'Sí. La cifra neta recibida es el monto bruto convertido menos la comisión de cambio que ingresaste, que es el monto que debes esperar antes de cualquier cargo fijo de transferencia aparte.',
      },
      {
        question: '¿Por qué la tasa de mi banco es peor que la tasa que veo en línea?',
        answer:
          'Las tasas que se ven en línea suelen ser puntos de referencia de mercado medio sin recargo. Los bancos y proveedores de tarjetas agregan un margen para cubrir costos y ganancias, así que su tasa cotizada es menos favorable que el punto de referencia.',
      },
      {
        question: '¿La Calculadora de Divisas guarda o sube mis montos?',
        answer:
          'No. Tus montos, tasas y configuraciones de comisión se usan solo para el cálculo en tu navegador, excepto la consulta opcional de la tasa del BCE, que solo solicita una tasa de referencia pública.',
      },
      {
        question: '¿La Calculadora de Divisas es gratuita?',
        answer:
          'Sí, es completamente gratuita en tu navegador, sin cuenta, sin registro y sin límite de conversiones que hagas.',
      },
      {
        question: '¿Con qué frecuencia cambian las tasas de referencia del BCE?',
        answer:
          'Las tasas de referencia del BCE se publican una vez por día hábil, así que la tasa obtenida es un punto de referencia diario y no un precio de mercado en vivo que cambia a cada momento.',
      },
      {
        question: '¿Puedo convertir entre dos divisas cualesquiera?',
        answer:
          'Puedes convertir entre las principales divisas mundiales que lista la herramienta ingresando cualquier tasa manual. La consulta del BCE cubre los pares de divisas publicados en los datos de referencia del BCE.',
      },
      {
        question: '¿Qué pasa si falla la obtención de la tasa del BCE?',
        answer:
          'La herramienta vuelve sin problemas al modo manual. Solo escribe tu propia tasa de cambio en el campo de tasa y toda la matemática de conversión, comisión y tabla seguirá funcionando localmente.',
      },
      {
        question: '¿Debo usar la tasa del BCE o la tasa de mi tarjeta para una compra en el extranjero?',
        answer:
          'Usa la tasa de tu tarjeta para el costo real, porque eso es lo que realmente te cobrarán. Usa la tasa del BCE solo como punto de referencia para ver cuánto recargo agrega tu tarjeta.',
      },
      {
        question: '¿Cómo comparo dos comisiones de cambio distintas?',
        answer:
          'Ejecuta el mismo monto y tasa dos veces con cada porcentaje de comisión y compara las cifras netas recibidas. La opción con el monto neto mayor te cuesta menos.',
      },
      {
        question: '¿La Calculadora de Divisas incluye cargos ocultos de transferencia?',
        answer:
          'No. Cubre la conversión de cambio y el porcentaje de comisión de cambio que ingresas. Las comisiones fijas de transferencia o cargos fijos de envío son aparte, así que súmalos tú mismo al comparar proveedores.',
      },
      {
        question: '¿Puedo usar la Calculadora de Divisas para una factura en otra moneda?',
        answer:
          'Sí. Ingresa el monto de la factura, la tasa de cambio de contrato o bloqueada y cualquier comisión, y la herramienta muestra los totales bruto, de comisión y neto en tu propia moneda.',
      },
    ],
    apiNotice:
      'Requiere una API externa para las tasas de cambio en vivo y nunca usa tasas falsas sin conexión. Usa tu tasa de cambio ingresada manualmente por defecto (1,0000) o haz clic en "Obtener tasa de referencia del BCE" para solicitar tasas de api.frankfurter.app.',
  },
};
