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
  },
  'roman-numeral-converter': {
    slug: 'convertidor-de-numeros-romanos',
    name: 'Convertidor de Números Romanos',
    shortDescription:
      'Convierte números en números romanos y números romanos en números al instante, incluidas fechas en números romanos.',
    keywords: [
      'convertidor de números romanos',
      'números romanos a números',
      'convertir números a romanos',
      'convertidor de fechas romanas',
      'calculadora de números romanos',
      'qué número es MMXXVI',
      'números romanos del 1 al 3999',
      'convertir año a números romanos',
      'tabla de números romanos',
    ],
    seo: {
      title: 'Convertidor de Números Romanos – 1 a 3999 | UtilityFlow',
      description:
        'Convierte números en números romanos y números romanos en números al instante. Prueba el convertidor gratuito de años, cumpleaños y fechas en números romanos.',
      primaryKeyword: 'convertidor de números romanos',
      secondaryKeywords: [
        'números romanos a números',
        'convertir números a romanos',
        'convertidor de fechas romanas',
        'calculadora de números romanos',
      ],
      longTailKeywords: [
        'cómo convertir números a números romanos',
        'qué es 2026 en números romanos',
        'convertir mi cumpleaños a números romanos',
        'convertir un año a números romanos en línea',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convierte cualquier número entero del 1 al 3999 en números romanos, o lee números romanos como números normales, y convierte también una fecha completa en números romanos, al instante en tu navegador.',
  },
  'online-hourly-calculator': {
    slug: 'calculadora-de-horas-en-linea',
    name: 'Calculadora de Horas en Línea',
    shortDescription:
      'Calcula las horas entre dos horarios, las horas de trabajo con descansos, las horas decimales y el pago por hora — gratis, en tu navegador.',
    keywords: [
      'calculadora de horas en línea',
      'calculadora de horas de trabajo',
      'calcular horas entre dos horarios',
      'calculadora de pago por hora',
      'calculadora de horas decimales',
      'calculadora de horas extras',
      'sumar restar tiempo',
      'cuántas horas trabajé',
    ],
    seo: {
      title: 'Calculadora de Horas en Línea – Horas y Pago | UtilityFlow',
      description:
        'Usa nuestra calculadora de horas en línea gratuita para calcular horas de trabajo, diferencias de tiempo, descansos, horas decimales y ganancias por hora al instante.',
      primaryKeyword: 'calculadora de horas en línea',
      secondaryKeywords: [
        'calculadora de horas de trabajo',
        'calcular horas entre dos horarios',
        'calculadora de pago por hora',
        'calculadora de horas decimales',
      ],
      longTailKeywords: [
        'cómo calcular las horas entre dos horarios',
        'cómo calcular horas de trabajo con descanso',
        'convertir horas y minutos a horas decimales',
        'calcular el pago por hora con horas extras',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calcula las horas entre dos horarios en formato de 12 o 24 horas, registra turnos con descansos programados, suma o resta tiempo, convierte horas y minutos a horas decimales y convierte las horas trabajadas en pago — con horas extras, descansos y tu moneda, al instante en tu navegador.',
  },
  'heat-index-calculator': {
    slug: 'calculadora-de-indice-de-calor',
    name: 'Calculadora de Índice de Calor',
    shortDescription: 'Calcula el índice de calor a partir de la temperatura del aire y la humedad relativa — descubre cuánto calor se siente realmente, en Fahrenheit y Celsius, gratis en tu navegador.',
    keywords: ['calculadora de índice de calor', 'índice de calor', 'calcular índice de calor', 'calculadora de sensación térmica', 'calculadora de temperatura y humedad', 'índice de calor fahrenheit', 'índice de calor celsius', 'qué es el índice de calor', 'tabla de índice de calor'],
    seo: {
      title: 'Calculadora de Índice de Calor – Calcula la Sensación Térmica | UtilityFlow',
      description: 'Calcula el índice de calor con la temperatura del aire y la humedad. Descubre cuánto calor se siente con nuestra calculadora gratuita de índice de calor en Fahrenheit y Celsius.',
      primaryKeyword: 'calculadora de índice de calor',
      secondaryKeywords: ['calculadora de sensación térmica', 'calculadora de temperatura y humedad', 'índice de calor fahrenheit', 'índice de calor celsius'],
      longTailKeywords: ['cómo calcular el índice de calor con temperatura y humedad', 'cuál es el índice de calor a 90 grados', 'cómo afecta la humedad a la sensación térmica', 'calcular la temperatura aparente en línea'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'Ingresa la temperatura del aire y la humedad relativa para saber cuánto calor se siente realmente: el índice de calor en Fahrenheit y Celsius, la diferencia con la temperatura medida y el nivel de riesgo por calor, al instante en tu navegador.',
  },
};
