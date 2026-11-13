import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const CALC_TOOLS_PART_3: ToolDefinition[] = [
  {
    id: 'calorie-calculator',
    slug: 'calorie-calculator',
    name: 'Calorie & TDEE Calculator',
    shortDescription:
      'Estimate Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) with weight goal targets.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'calorie calculator',
      'tdee calculator',
      'bmr calculator',
      'daily calorie intake',
    ],
    seo: {
      title: 'Calorie & TDEE Calculator – BMR & Daily Macros | UtilityFlow',
      description:
        'Estimate Basal Metabolic Rate (BMR) and daily maintenance calories (TDEE) using the Mifflin-St Jeor formula, plus weight-loss, gain, and macro targets.',
      primaryKeyword: 'calorie calculator',
      secondaryKeywords: [
        'tdee calculator',
        'mifflin st jeor bmr calculator',
        'daily calorie needs calculator',
      ],
      longTailKeywords: [
        'calculate maintenance calories and weight loss deficit online',
        'mifflin st jeor daily calorie expenditure estimator',
        'metric and imperial tdee macro split calculator',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Estimate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using the clinically validated Mifflin-St Jeor equation, complete with mild deficit, standard fat-loss, lean-gain, and maintenance macro targets.',
    instructions: [
      {
        title: 'Choose units and profile',
        description:
          'Select Metric or Imperial units, Male or Female biological reference constants, and enter age, height, and weight.',
      },
      {
        title: 'Pick your weekly activity level',
        description:
          'Select the activity multiplier from Sedentary (1.2×) up to Extra Active (1.9×) that reflects your real routine.',
      },
      {
        title: 'Review daily calorie targets',
        description:
          'Compare Maintenance TDEE, Mild/Standard Weight Loss deficits, Lean Gain surplus, and reference macro grams.',
      },
    ],
    examples: [
      {
        title: 'Moderately active adult maintenance check',
        input: 'Male · 30 yrs · 175 cm · 72 kg · Moderately Active (1.55×)',
        output: 'BMR: 1,669 kcal · Maintenance TDEE: 2,587 kcal/day · -0.5 kg/wk Loss: 2,087 kcal/day',
        explanation: 'Applies Mifflin-St Jeor BMR × 1.55 activity factor and subtracts 500 kcal for ~0.5 kg/week loss.',
      },
    ],
    benefits: [
      'Uses the widely accepted Mifflin-St Jeor BMR prediction formula',
      'Enforces a 1,200 kcal floor notice on deficit projections for safety awareness',
      'Outputs balanced Protein, Carbohydrate, and Dietary Fat gram references',
      'Supports both Metric (cm/kg) and US Imperial (ft, in/lbs) units',
    ],
    useCases: [
      'Setting realistic starting daily calorie budgets for nutrition tracking',
      'Estimating energy expenditure changes across activity levels',
      'Translating maintenance calories into daily protein, carb, and fat grams',
      'Planning gradual 250–500 kcal deficits instead of unsustainable crash diets',
    ],
    faqs: [
      {
        question: 'Why does this calculator use the Mifflin-St Jeor equation?',
        answer:
          'Nutrition research consistently ranks Mifflin-St Jeor among the most accurate general population formulas for estimating resting energy expenditure from age, sex, height, and weight.',
      },
      {
        question: 'How accurate are activity multipliers?',
        answer:
          'Activity multipliers provide an evidence-based starting estimate. Track body weight trends over 2–3 weeks and adjust daily intake by 100–200 kcal based on real-world progress.',
      },
      {
        question: 'Is this medical or clinical nutrition advice?',
        answer:
          'No. Predictions are informational estimates; consult a physician or registered dietitian for personalized medical nutrition guidance.',
      },
    ],
    relatedToolSlugs: [
      'bmi-calculator',
      'age-calculator',
      'unit-converter',
      'percentage-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/CalorieCalculatorTool')),
  },
  {
    id: 'date-difference-calculator',
    slug: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    shortDescription:
      'Find exact years, months, days, weekdays, and weekend days between dates, or add and subtract calendar intervals.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'date difference calculator',
      'days between dates',
      'weekdays counter',
      'add days to date',
    ],
    seo: {
      title: 'Date Difference Calculator – Days & Weekdays Between Dates | UtilityFlow',
      description:
        'Calculate exact years, months, days, total weeks, weekdays, and weekend days between two calendar dates, or add and subtract intervals from any date.',
      primaryKeyword: 'date difference calculator',
      secondaryKeywords: [
        'days between two dates',
        'business days weekdays counter',
        'add months to date calculator',
      ],
      longTailKeywords: [
        'count weekdays and weekend days between two dates',
        'calculate exact calendar months and days between dates',
        'add or subtract years months days from date',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Measure exact calendar spans between any two dates—including weekday vs. weekend counts and optional inclusive end-date counting—or add and subtract years, months, and days from a reference date.',
    instructions: [
      {
        title: 'Choose Difference or Add/Subtract',
        description:
          'Pick Difference Between Dates to compare two dates, or Add / Subtract Time to project a future or past date.',
      },
      {
        title: 'Pick dates and options',
        description:
          'Enter Start and End dates (use the swap button anytime) and optionally check Include end date (+1 day).',
      },
      {
        title: 'Inspect calendar breakdown',
        description:
          'Review Years/Months/Days, total calendar days, weeks, weekdays (Mon–Fri), weekend days, and hours.',
      },
    ],
    examples: [
      {
        title: 'Counting project duration and workdays',
        input: 'Start: 2025-01-15 · End: 2025-11-12 · Inclusive: Off',
        output: '0 years, 9 months, 28 days · 301 total days · 215 weekdays · 86 weekend days',
        explanation: 'Uses UTC calendar arithmetic immune to Daylight Saving Time 23-hour/25-hour shift bugs.',
      },
    ],
    benefits: [
      'Pure UTC calendar arithmetic avoids off-by-one Daylight Saving Time errors',
      'Counts weekdays (Monday–Friday) and weekend days instantaneously in O(1) time',
      'Supports inclusive end-date counting for hotel nights vs sprint days',
      'Includes date addition/subtraction with smart end-of-month clamping',
    ],
    useCases: [
      'Counting project sprint days, contract terms, or visa stay limits',
      'Finding exact billing days or notice-period expiration dates',
      'Adding 90 days or 6 months to a contract effective date',
      'Checking total weekdays available in a quarter or fiscal period',
    ],
    faqs: [
      {
        question: 'Does the weekday counter exclude public holidays?',
        answer:
          'It counts Monday through Friday calendar weekdays because public holidays differ by country, state, and employer calendar.',
      },
      {
        question: 'When should I check "Include end date (+1 calendar day)"?',
        answer:
          'Check it when counting inclusive attendance or vacation days (e.g., Monday through Friday = 5 days). Leave it unchecked when counting elapsed nights or intervals.',
      },
      {
        question: 'What happens if I add 1 month to January 31?',
        answer:
          'Calendar clamping snaps January 31 + 1 month to the last valid day of February (Feb 28, or Feb 29 in leap years) rather than overflowing into March.',
      },
    ],
    relatedToolSlugs: [
      'age-calculator',
      'time-duration-calculator',
      'unix-timestamp-converter',
      'cron-expression-parser',
    ],
    component: lazy(() => import('../../../tools/calculators/DateDifferenceCalculatorTool')),
  },
  {
    id: 'time-duration-calculator',
    slug: 'time-duration-calculator',
    name: 'Time Duration Calculator',
    shortDescription:
      'Calculate elapsed HH:MM:SS between clock times (with breaks and overnight shifts) or sum multi-row timesheets.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'time duration calculator',
      'hours calculator',
      'timesheet calculator',
      'elapsed time calculator',
    ],
    seo: {
      title: 'Time Duration Calculator – Elapsed Hours & Timesheet Sum | UtilityFlow',
      description:
        'Calculate hours, minutes, and seconds between start and end times with unpaid break deductions and overnight shifts, or sum multiple duration rows.',
      primaryKeyword: 'time duration calculator',
      secondaryKeywords: [
        'work hours calculator',
        'timesheet duration adder',
        'decimal hours converter',
      ],
      longTailKeywords: [
        'calculate elapsed time with unpaid lunch break and overnight rollover',
        'convert hh mm ss time duration to decimal hours',
        'add multiple hours minutes seconds rows together',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Determine exact elapsed hours, minutes, and seconds between two clock times—handling unpaid break deductions and midnight-crossing night shifts—or add unlimited duration rows into decimal payroll hours.',
    instructions: [
      {
        title: 'Choose Elapsed or Add Durations mode',
        description:
          'Use Elapsed Time Between Clocks for shift start/end checks, or Add Timesheet Durations to sum multiple blocks.',
      },
      {
        title: 'Enter times and optional break',
        description:
          'Set Start Time, End Time, and any Unpaid Break in minutes; enable overnight rollover if a shift crosses midnight.',
      },
      {
        title: 'Copy HH:MM:SS or decimal hours',
        description:
          'Use HH:MM:SS for logs or Decimal Hours (e.g. 7.50 hr) for invoicing and payroll sheets.',
      },
    ],
    examples: [
      {
        title: 'Standard workday shift with 30-minute break',
        input: 'Start: 09:00:00 · End: 17:30:00 · Break: 30 min',
        output: 'Net Duration: 08:00:00 · Decimal: 8.00 hr · 480 min',
        explanation: '8.5 elapsed hours minus 0.5 unpaid break equals 8.00 billable hours.',
      },
    ],
    benefits: [
      'Handles overnight shifts crossing 00:00 cleanly with a single toggle',
      'Outputs HH:MM:SS, decimal hours, total minutes, and total seconds together',
      'Dynamic multi-row adder totals unlimited work segments or video/audio runtimes',
      'Prevents break deductions greater than total elapsed shift length',
    ],
    useCases: [
      'Logging freelance billable hours and deducting unpaid breaks',
      'Calculating hospital, logistics, or hospitality night-shift hours',
      'Summing podcast episode timestamps, lecture lengths, or playlist runtimes',
      'Converting 7h 45m timesheet entries into 7.75 decimal hours for billing',
    ],
    faqs: [
      {
        question: 'How are decimal hours calculated?',
        answer:
          'Total net seconds are divided by 3,600. For example, 7 hours 45 minutes (27,900 seconds) equals 7.75 decimal hours.',
      },
      {
        question: 'Does this support night shifts that end after midnight?',
        answer:
          'Yes. Keep "Treat end time earlier than start time as next day" checked so a 22:00 to 06:30 shift accurately calculates 8 hours 30 minutes.',
      },
      {
        question: 'Can I sum durations larger than 24 hours?',
        answer:
          'Yes. The Add Timesheet Durations mode accumulates hours without wrapping at 24 and also shows the equivalent 24-hour day count.',
      },
    ],
    relatedToolSlugs: [
      'date-difference-calculator',
      'salary-calculator',
      'age-calculator',
      'unix-timestamp-converter',
    ],
    component: lazy(() => import('../../../tools/calculators/TimeDurationCalculatorTool')),
  },
  {
    id: 'unit-converter',
    slug: 'unit-converter',
    name: 'Unit Converter',
    shortDescription:
      'Convert Length, Weight, Temperature, Area, Volume, Speed, and Digital Storage units with a full reference table.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'unit converter',
      'metric imperial converter',
      'length weight temperature converter',
      'digital storage converter',
    ],
    seo: {
      title: 'Unit Converter – Length, Weight, Temp, Speed & Data | UtilityFlow',
      description:
        'Convert between Metric and US Imperial units across Length, Weight, Temperature, Area, Volume, Speed, and Digital Storage (KB vs KiB) in your browser.',
      primaryKeyword: 'unit converter',
      secondaryKeywords: [
        'metric to imperial converter',
        'temperature celsius fahrenheit kelvin',
        'gb to gib data converter',
      ],
      longTailKeywords: [
        'convert kilometers to miles and kilograms to pounds online',
        'decimal gigabyte vs binary gibibyte storage converter',
        'all-in-one science and engineering unit converter table',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convert instantaneously across seven measurement families—Length, Weight & Mass, Temperature, Area, Volume, Speed, and Digital Storage—with an automatic side-by-side table showing every unit in the category.',
    instructions: [
      {
        title: 'Pick a measurement category',
        description:
          'Select Length, Weight & Mass, Temperature, Area, Volume, Speed, or Digital Storage from the top bar.',
      },
      {
        title: 'Enter value and choose units',
        description:
          'Type any numeric input and pick your From and To units (click Swap anytime to reverse).',
      },
      {
        title: 'Copy result or scan all units',
        description:
          'Copy the formatted target output or read the equivalent values table across every unit in the family.',
      },
    ],
    examples: [
      {
        title: 'Decimal Gigabyte vs Binary Gibibyte storage',
        input: 'Category: Digital Storage · 1,000 GB → GiB',
        output: '931.32257 GiB',
        explanation: 'Explains why a 1 TB (1,000 GB) drive reports roughly 931 GiB in desktop operating systems.',
      },
    ],
    benefits: [
      'Uses exact international NIST/SI conversion constants (e.g. 1 in = 0.0254 m exact)',
      'Separates SI decimal storage (KB/MB/GB) from IEC binary storage (KiB/MiB/GiB)',
      'Validates physical temperature limits (never below Absolute Zero 0 K / -273.15 °C)',
      'Shows a full comparison table for every unit in the active category',
    ],
    useCases: [
      'Converting engineering drawings between millimeters, inches, and feet',
      'Checking cooking liquid volumes across milliliters, cups, and gallons',
      'Translating Celsius weather or lab temperatures into Fahrenheit and Kelvin',
      'Auditing cloud disk sizes between decimal GB and binary GiB',
    ],
    faqs: [
      {
        question: 'Why does Digital Storage separate GB from GiB?',
        answer:
          'Storage manufacturers use base-10 SI prefixes (1 GB = 1,000³ bytes), whereas many OS utilities use base-2 binary sizes (1 GiB = 1,024³ bytes). Keeping both explicit eliminates confusion.',
      },
      {
        question: 'Are US Customary volume units used for cups, pints, and gallons?',
        answer:
          'Yes. Fluid ounces, cups, pints, quarts, and gallons use US Customary liquid definitions (1 US gallon = 3.785411784 L exact).',
      },
      {
        question: 'Why does the temperature converter block values below -273.15 °C?',
        answer:
          'Absolute zero (0 K / -273.15 °C / -459.67 °F) is the physical lower bound of thermodynamic temperature.',
      },
    ],
    relatedToolSlugs: [
      'currency-calculator',
      'bmi-calculator',
      'calorie-calculator',
      'time-duration-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/UnitConverterTool')),
  },
  {
    id: 'currency-calculator',
    slug: 'currency-calculator',
    name: 'Currency Calculator',
    shortDescription:
      'Convert currencies using your exact manual exchange rate or optional ECB reference rates with FX fee calculation.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'api',
    requiresExternalApi: true,
    apiNotice:
      'Requires an external API for live FX rates and never uses fabricated offline rates. Uses your manually entered exchange rate by default (1.0000), or click "Fetch ECB Reference Rate" to request rates from api.frankfurter.app.',
    keywords: [
      'currency calculator',
      'exchange rate calculator',
      'fx fee calculator',
      'manual currency converter',
    ],
    seo: {
      title: 'Currency Calculator – Manual Rate, FX Fee & ECB Lookup | UtilityFlow',
      description:
        'Convert currencies with your exact quoted exchange rate, calculate bank or card FX markup fees, view inverse rates, or optionally fetch ECB reference rates.',
      primaryKeyword: 'currency calculator',
      secondaryKeywords: [
        'exchange rate fee calculator',
        'manual currency converter',
        'fx spread calculator',
      ],
      longTailKeywords: [
        'convert currency with custom bank exchange rate and fee',
        'currency calculator without fake hardcoded rates',
        'calculate net foreign currency after card markup',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Convert between major global currencies transparently using the exact exchange rate quoted by your bank, broker, or invoice—plus optional FX fee deduction, inverse rate math, and an on-demand ECB reference rate lookup.',
    instructions: [
      {
        title: 'Enter amount and currency pair',
        description:
          'Type the starting amount and choose your From and To currencies (use Swap to invert both pair and rate).',
      },
      {
        title: 'Supply or fetch exchange rate',
        description:
          'Type your quoted exchange rate manually (never fabricated offline), or click Fetch ECB Reference Rate to query the external Frankfurter API.',
      },
      {
        title: 'Include bank/card fee if applicable',
        description:
          'Enter any FX percentage spread or card foreign transaction fee (e.g. 2.5%) to see true net proceeds and a reference table.',
      },
    ],
    examples: [
      {
        title: 'Converting an invoice with a 1.5% transfer fee',
        input: 'Amount: 1,000 USD · Rate: 0.9200 EUR/USD · FX Fee: 1.5%',
        output: 'Gross: 920.00 EUR · Fee: 13.80 EUR · Net Received: 906.20 EUR',
        explanation: 'Models both the exchange conversion and percentage provider fee transparently.',
      },
    ],
    benefits: [
      'Never fabricates fake or stale hardcoded exchange rates offline',
      'Models real-world bank or credit-card foreign transaction fee percentages',
      'Computes inverse conversion rate (1 Target = ? Base) automatically',
      'Supports optional live ECB reference lookups via Frankfurter API with graceful offline fallback',
    ],
    useCases: [
      'Checking how much an international wire transfer costs after a bank FX fee',
      'Calculating invoice totals at a locked contract exchange rate',
      'Comparing credit-card 3% foreign transaction fees vs zero-fee cards',
      'Evaluating multi-amount quick reference conversion tables',
    ],
    faqs: [
      {
        question: 'Why does the Exchange Rate start at 1.0000 instead of pre-filled live rates?',
        answer:
          'Foreign exchange rates fluctuate continuously and live market quotes require an external data feed. Rather than inventing or caching inaccurate rates, this tool starts cleanly in Manual Mode and lets you click "Fetch ECB Reference Rate" whenever you want an external ECB rate lookup.',
      },
      {
        question: 'Where do fetched reference rates come from?',
        answer:
          'When you click "Fetch ECB Reference Rate", your browser requests the latest European Central Bank reference rate published by api.frankfurter.app. Reference rates are mid-market benchmarks and differ slightly from retail bank quotes.',
      },
      {
        question: 'Does this work if I am offline or the external API is blocked?',
        answer:
          'Yes. You can always type any exchange rate manually into the Exchange Rate field and all fee, inverse, and table calculations run 100% locally in your browser.',
      },
    ],
    relatedToolSlugs: [
      'unit-converter',
      'discount-margin-calculator',
      'vat-tax-calculator',
      'percentage-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/CurrencyCalculatorTool')),
  },
];
