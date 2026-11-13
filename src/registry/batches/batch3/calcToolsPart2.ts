import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const CALC_TOOLS_PART_2: ToolDefinition[] = [
  {
    id: 'discount-margin-calculator',
    slug: 'discount-margin-calculator',
    name: 'Discount & Margin Calculator',
    shortDescription:
      'Calculate sale prices with stacked discounts or compute retail profit margin, markup %, and gross profit from cost.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'discount calculator',
      'profit margin calculator',
      'markup vs margin',
      'sale price calculator',
    ],
    seo: {
      title: 'Discount & Margin Calculator – Sale Price & Markup Tool | UtilityFlow',
      description:
        'Calculate final sale prices with stacked discounts and tax, or solve gross profit margin vs markup percentage from product cost and selling price.',
      primaryKeyword: 'discount margin calculator',
      secondaryKeywords: [
        'sale price discount calculator',
        'gross margin vs markup calculator',
        'retail profit calculator',
      ],
      longTailKeywords: [
        'calculate final price after double discount and sales tax',
        'difference between profit margin and markup percentage',
        'ecommerce sku margin and profit calculator',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Switch seamlessly between Retail Discount mode (stacked coupon discounts plus optional sales tax) and Profit Margin & Markup mode to price products accurately without confusing margin with markup.',
    instructions: [
      {
        title: 'Choose Discount or Margin mode',
        description:
          'Select Retail Discount for sale pricing or Profit Margin & Markup for SKU unit economics.',
      },
      {
        title: 'Enter pricing figures',
        description:
          'Provide Original Price, Primary Discount %, optional Extra Coupon %, and Tax %—or Cost and Selling Price in Margin mode.',
      },
      {
        title: 'Review net metrics',
        description:
          'Check Final Price, Total Savings, Effective Discount %, Gross Profit, Margin %, and Markup %.',
      },
    ],
    examples: [
      {
        title: 'Stacked retail discount calculation',
        input: 'Original: $120 · Discount 1: 25% · Extra Coupon: 10% · Tax: 0%',
        output: 'Final Price: $81.00 · Saved: $39.00 · Effective Discount: 32.5%',
        explanation: 'Sequential discounts multiply (0.75 × 0.90 = 0.675), yielding 32.5% total off rather than 35%.',
      },
    ],
    benefits: [
      'Prevents the classic stacked-discount addition mistake',
      'Distinguishes Gross Margin % from Cost Markup % side by side',
      'Computes unit profit and break-even cost thresholds immediately',
      'Includes optional post-discount sales tax calculation',
    ],
    useCases: [
      'Checking stacked promo codes before checkout',
      'Setting wholesale or e-commerce retail prices from unit COGS',
      'Auditing promotional campaign margin erosion',
      'Converting a target margin percentage into required markup',
    ],
    faqs: [
      {
        question: 'What is the difference between Profit Margin and Markup?',
        answer:
          'Gross Margin divides profit by the Selling Price ((Price − Cost) / Price), while Markup divides profit by Cost ((Price − Cost) / Cost). A product costing $50 and selling for $100 has a 50% margin but a 100% markup.',
      },
      {
        question: 'Why are two discounts of 20% and 10% equal to 28% off instead of 30%?',
        answer:
          'The second 10% discount applies to the already-reduced 80% price, taking off another 8% of the original price (20% + 8% = 28%).',
      },
      {
        question: 'Is sales tax applied before or after discounts?',
        answer:
          'Standard retail tax applies to the discounted subtotal after merchant coupons, which is how this calculator computes it.',
      },
    ],
    relatedToolSlugs: [
      'vat-tax-calculator',
      'percentage-calculator',
      'currency-calculator',
      'tip-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/DiscountMarginCalculatorTool')),
  },
  {
    id: 'vat-tax-calculator',
    slug: 'vat-tax-calculator',
    name: 'VAT & Sales Tax Calculator',
    shortDescription:
      'Add VAT/GST/sales tax to net prices or extract tax cleanly from tax-inclusive gross invoices.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'vat calculator',
      'sales tax calculator',
      'reverse vat calculator',
      'gst tax calculator',
    ],
    seo: {
      title: 'VAT & Sales Tax Calculator – Add or Remove Tax | UtilityFlow',
      description:
        'Add VAT, GST, or sales tax to a net subtotal or reverse-calculate the pre-tax net price and tax component from a tax-inclusive gross total.',
      primaryKeyword: 'vat tax calculator',
      secondaryKeywords: [
        'reverse vat calculator',
        'exclude sales tax from total',
        'gst inclusive exclusive calculator',
      ],
      longTailKeywords: [
        'how to remove vat from gross price online',
        'add 20 percent vat or custom sales tax rate',
        'net tax and gross invoice breakdown calculator',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calculate Net Price, Tax Amount, and Gross Total in either direction—add VAT/GST/sales tax onto a pre-tax subtotal, or extract the exact pre-tax amount from an already tax-inclusive receipt.',
    instructions: [
      {
        title: 'Pick tax direction',
        description:
          'Choose Add Tax (Net → Gross) or Extract Tax (Gross → Net).',
      },
      {
        title: 'Enter amount and tax rate',
        description:
          'Type the invoice amount and pick a quick rate preset (5%, 10%, 15%, 20%) or any custom tax percentage.',
      },
      {
        title: 'Read invoice line items',
        description:
          'Copy the exact Net Subtotal, Tax Component, and Gross Total for accounting or quoting.',
      },
    ],
    examples: [
      {
        title: 'Extracting 20% VAT from a gross receipt',
        input: 'Mode: Extract Tax · Gross Total: $120.00 · Rate: 20%',
        output: 'Net Subtotal: $100.00 · VAT Component: $20.00',
        explanation: 'Divides gross by (1 + 0.20) rather than multiplying gross by 20%, avoiding a $4 accounting error.',
      },
    ],
    benefits: [
      'Prevents common reverse-VAT errors (dividing by 1 + rate instead of subtracting rate%)',
      'Works identically for European VAT, Australian/Canadian GST, and US state sales tax',
      'Includes instant quick-rate buttons plus arbitrary decimal tax percentages',
      'Shows clean 3-column Net / Tax / Gross breakdown',
    ],
    useCases: [
      'Preparing B2B or B2C invoices with clear pre-tax and tax lines',
      'Reconciling VAT-inclusive expense receipts for bookkeeping',
      'Quoting international SaaS or freelance rates excluding/including VAT',
      'Checking local retail checkout totals with state and municipal tax rates',
    ],
    faqs: [
      {
        question: 'Why is extracting 20% VAT from $120 equal to $20 and not $24?',
        answer:
          'Because 20% was originally added to the $100 net amount ($100 × 1.20 = $120). To reverse it, you divide $120 by 1.20 to recover the $100 net amount and $20 tax.',
      },
      {
        question: 'Can I enter fractional local US sales tax rates like 8.875%?',
        answer:
          'Yes. The Tax Rate input supports any positive decimal rate such as 7.25%, 8.875%, or 21%.',
      },
      {
        question: 'Does this support both GST and VAT?',
        answer:
          'Yes. Mathematically, Value-Added Tax (VAT), Goods and Services Tax (GST), and percentage sales tax use the exact same net/gross formulas.',
      },
    ],
    relatedToolSlugs: [
      'discount-margin-calculator',
      'percentage-calculator',
      'tip-calculator',
      'salary-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/VatTaxCalculatorTool')),
  },
  {
    id: 'salary-calculator',
    slug: 'salary-calculator',
    name: 'Salary & Paycheck Converter',
    shortDescription:
      'Convert hourly, daily, weekly, biweekly, monthly, and annual compensation using custom hours and weeks per year.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'salary calculator',
      'hourly to annual salary',
      'paycheck converter',
      'wage calculator',
    ],
    seo: {
      title: 'Salary Calculator – Hourly, Monthly & Annual Converter | UtilityFlow',
      description:
        'Convert between hourly wages, daily pay, weekly, biweekly, monthly, and annual gross salary with customizable hours per week and weeks per year.',
      primaryKeyword: 'salary calculator',
      secondaryKeywords: [
        'hourly to salary calculator',
        'annual to hourly wage',
        'biweekly paycheck calculator',
      ],
      longTailKeywords: [
        'convert 50 dollars an hour to annual salary',
        'gross salary breakdown with unpaid vacation weeks',
        'custom hours per week compensation converter',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Translate any compensation rate—hourly, daily, weekly, biweekly, semi-monthly, monthly, or annual—across every pay cadence with configurable work hours per week and paid weeks per year.',
    instructions: [
      {
        title: 'Enter base compensation and pay period',
        description:
          'Type your wage amount and select whether that figure is Hourly, Daily, Weekly, Biweekly, Monthly, or Annual.',
      },
      {
        title: 'Adjust work schedule assumptions',
        description:
          'Set Hours per Week (default 40), Days per Week (default 5), and Paid Weeks per Year (default 52, or fewer for unpaid leave).',
      },
      {
        title: 'Compare all pay cadences',
        description:
          'Review every gross equivalence row simultaneously, including total annual working hours.',
      },
    ],
    examples: [
      {
        title: 'Standard full-time hourly-to-annual conversion',
        input: 'Pay: $45.00 Hourly · 40 hrs/week · 52 weeks/year (2,080 hrs)',
        output: 'Annual: $93,600 · Monthly: $7,800 · Biweekly: $3,600 · Weekly: $1,800',
        explanation: 'Uses standard 2,080 annual full-time work hours.',
      },
    ],
    benefits: [
      'Converts bi-directionally from any pay frequency, not only hourly or annual',
      'Accounts for unpaid vacation or contractor downtime via custom paid weeks/year',
      'Displays semi-monthly (24×/yr) vs biweekly (26×/yr) differences clearly',
      'Reports gross pay without misleading jurisdiction-specific tax guesses',
    ],
    useCases: [
      'Comparing an hourly contract offer against a full-time annual salary',
      'Translating annual salary offers into monthly and biweekly household budgets',
      'Factoring unpaid time off into freelance contractor annual income estimates',
      'Calculating part-time 24-hour or 32-hour workweek annualized pay',
    ],
    faqs: [
      {
        question: 'Why are biweekly and semi-monthly paychecks different amounts?',
        answer:
          'Biweekly pay issues 26 paychecks per year (every 2 weeks), whereas semi-monthly pay issues 24 paychecks per year (twice a month). Semi-monthly checks are slightly larger per period for the same annual salary.',
      },
      {
        question: 'Does this calculate take-home pay after income tax?',
        answer:
          'No. Income tax, payroll withholdings, and social contributions vary widely by country, state, filing status, and deductions, so this calculator reports deterministic gross pay.',
      },
      {
        question: 'How should contractors handle unpaid holidays and PTO?',
        answer:
          'Lower "Paid Weeks per Year" from 52 to 48 or 49 to see your realistic annual gross income accounting for unpaid leave.',
      },
    ],
    relatedToolSlugs: [
      'time-duration-calculator',
      'vat-tax-calculator',
      'compound-interest-calculator',
      'loan-emi-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/SalaryCalculatorTool')),
  },
  {
    id: 'tip-calculator',
    slug: 'tip-calculator',
    name: 'Tip & Bill Split Calculator',
    shortDescription:
      'Compute tip amounts, optional pre-tip tax exclusion, per-person bill splits, and clean rounding.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'tip calculator',
      'bill split calculator',
      'restaurant gratuity calculator',
      'split check evenly',
    ],
    seo: {
      title: 'Tip Calculator – Split Restaurant Bills & Gratuity | UtilityFlow',
      description:
        'Calculate restaurant tips with quick percentage presets, optional pre-tax tipping mode, per-person group splits, and nearest-dollar rounding.',
      primaryKeyword: 'tip calculator',
      secondaryKeywords: [
        'bill splitter calculator',
        'gratuity calculator',
        'restaurant tip split',
      ],
      longTailKeywords: [
        'calculate 18 or 20 percent tip before tax online',
        'split dinner bill and tip among friends evenly',
        'round up total per person tip calculator',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Quickly calculate fair gratuity and divide restaurant, delivery, or group outing checks evenly across any number of people—with optional tax exclusion and bill rounding.',
    instructions: [
      {
        title: 'Enter bill subtotal and guests',
        description:
          'Input the Bill Amount, optional Sales Tax Amount if included, and the Number of People splitting the check.',
      },
      {
        title: 'Choose tip percentage',
        description:
          'Tap a preset (10%, 15%, 18%, 20%, 25%) or enter any custom tip percentage.',
      },
      {
        title: 'Optional rounding & split',
        description:
          'Enable round-up to the nearest dollar per person and review each guest’s share.',
      },
    ],
    examples: [
      {
        title: 'Group dinner split 4 ways',
        input: 'Bill: $160.00 · Tip: 20% · People: 4',
        output: 'Tip: $32.00 · Total: $192.00 · Per Person: $48.00',
        explanation: 'Adds 20% gratuity ($32) and divides $192 evenly across 4 guests.',
      },
    ],
    benefits: [
      'Supports tipping on pre-tax subtotal when sales tax is specified',
      'Displays both Tip Per Person and Total Per Person clearly',
      'Includes quick preset buttons for one-tap mobile restaurant use',
      'Optional rounding adjusts effective tip transparently',
    ],
    useCases: [
      'Splitting group restaurant dinners without awkward mental math',
      'Calculating delivery, rideshare, or salon service tips',
      'Checking exact pre-tax 18% or 20% gratuity on itemized receipts',
      'Dividing shared group travel or event tabs evenly',
    ],
    faqs: [
      {
        question: 'Should you tip on the pre-tax or post-tax bill?',
        answer:
          'Etiquette traditionally calculates gratuity on the pre-tax subtotal. Enter the bill tax amount in the Tax field if you want the calculator to exclude tax from the tip base.',
      },
      {
        question: 'What happens if I split across 1 person?',
        answer:
          'With People set to 1, Per Person matches the full Tip and Total Bill directly.',
      },
      {
        question: 'How does per-person rounding work?',
        answer:
          'When enabled, each person’s total share rounds up to the next whole dollar, and the calculator displays the resulting effective tip percentage.',
      },
    ],
    relatedToolSlugs: [
      'percentage-calculator',
      'discount-margin-calculator',
      'vat-tax-calculator',
      'currency-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/TipCalculatorTool')),
  },
  {
    id: 'bmi-calculator',
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    shortDescription:
      'Compute Body Mass Index (BMI) in Metric or Imperial units alongside WHO weight categories and healthy range.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'bmi calculator',
      'body mass index',
      'healthy weight range',
      'metric imperial bmi',
    ],
    seo: {
      title: 'BMI Calculator – Metric & Imperial Body Mass Index | UtilityFlow',
      description:
        'Calculate Body Mass Index (BMI) in centimeters/kilograms or feet/inches/pounds with WHO classification bands and healthy weight range.',
      primaryKeyword: 'bmi calculator',
      secondaryKeywords: [
        'body mass index calculator',
        'healthy bmi weight range',
        'imperial bmi calculator',
      ],
      longTailKeywords: [
        'calculate bmi in feet inches and pounds',
        'world health organization adult bmi categories',
        'find healthy weight range for height',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Calculate adult Body Mass Index (BMI) using either Metric (cm/kg) or Imperial (ft, in/lbs) measurements, check World Health Organization classification bands, and view your height’s 18.5–24.9 healthy weight span.',
    instructions: [
      {
        title: 'Choose unit system',
        description:
          'Toggle between Metric (cm / kg) and Imperial (ft, in / lbs).',
      },
      {
        title: 'Enter height and weight',
        description:
          'Input your current height and body weight into the validated fields.',
      },
      {
        title: 'Review BMI & context',
        description:
          'Inspect your BMI score, WHO category, and corresponding healthy weight range for your height.',
      },
    ],
    examples: [
      {
        title: 'Metric adult BMI check',
        input: 'Height: 175 cm · Weight: 70 kg',
        output: 'BMI: 22.9 kg/m² · WHO Category: Normal weight (56.7 – 76.3 kg)',
        explanation: 'Calculated as 70 / (1.75 × 1.75) = 22.86 kg/m².',
      },
    ],
    benefits: [
      'Supports instant toggling between Metric and US Imperial measurements',
      'Computes the exact 18.5–24.9 kg/m² healthy weight range for your height',
      'Includes clear clinical limitation notes regarding muscle mass and body composition',
      'Runs privately in browser memory with zero health data storage',
    ],
    useCases: [
      'Quick adult weight-to-height screening checks',
      'Finding target healthy weight ranges for a specific height',
      'Pairing with daily calorie and TDEE planning',
      'Converting Imperial height/weight measurements into standard kg/m² BMI',
    ],
    faqs: [
      {
        question: 'What is the formula for Body Mass Index?',
        answer:
          'BMI equals weight in kilograms divided by height in meters squared: weight(kg) / height(m)². In Imperial units, that is equivalent to (weight(lbs) × 703) / height(in)².',
      },
      {
        question: 'Does BMI apply accurately to athletes or older adults?',
        answer:
          'BMI is a population-level screening ratio and does not distinguish lean muscle mass from adipose fat. Very muscular athletes may score in the overweight band despite low body fat, and children/teens require age-and-sex percentiles.',
      },
      {
        question: 'Is my health information saved anywhere?',
        answer:
          'No. All measurements stay strictly inside your active browser tab and disappear when closed.',
      },
    ],
    relatedToolSlugs: [
      'calorie-calculator',
      'unit-converter',
      'age-calculator',
      'percentage-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/BmiCalculatorTool')),
  },
];
