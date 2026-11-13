import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const CALC_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    name: 'Age Calculator',
    shortDescription:
      'Calculate exact chronological age in years, months, and days plus total weeks, days, and next birthday countdown.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'age calculator',
      'chronological age',
      'date of birth calculator',
      'birthday countdown',
      'exact age in days',
    ],
    seo: {
      title: 'Age Calculator – Exact Years, Months & Days | UtilityFlow',
      description:
        'Calculate exact chronological age from your date of birth in years, months, days, weeks, and total days, plus days until your next birthday.',
      primaryKeyword: 'age calculator',
      secondaryKeywords: [
        'chronological age calculator',
        'birthday age calculator',
        'age in days calculator',
      ],
      longTailKeywords: [
        'calculate exact age in years months and days online',
        'how many days until my next birthday calculator',
        'check age on specific future or past date',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Compute exact chronological age between a date of birth and today—or any past or future target date—accounting accurately for varying month lengths and leap years.',
    instructions: [
      {
        title: 'Enter date of birth',
        description:
          'Select your birth month, day, and year in the Date of Birth field.',
      },
      {
        title: 'Choose comparison date',
        description:
          'Leave Age at Date set to today or pick any historical or upcoming reference date.',
      },
      {
        title: 'Review breakdown',
        description:
          'Read your exact years, months, days, total weeks, total days lived, and next birthday countdown.',
      },
    ],
    examples: [
      {
        title: 'Standard milestone age check',
        input: 'Birth Date: 1995-06-15 · Age at Date: 2025-11-12',
        output: '30 years, 4 months, 28 days (11,108 days)',
        explanation: 'Uses exact calendar month lengths and leap years between 1995 and 2025.',
      },
    ],
    benefits: [
      'Handles 28-, 29-, 30-, and 31-day calendar months without 30-day approximations',
      'Supports Leap Day (Feb 29) birthdays accurately for countdown calculations',
      'Shows total months, weeks, days, and approximate hours simultaneously',
      'Validates invalid ranges where birth date follows the target date',
    ],
    useCases: [
      'Verifying exact age eligibility for school enrollment, pensions, or official forms',
      'Calculating milestone anniversaries in total days or weeks',
      'Checking how old someone will be on a specific upcoming event date',
      'Finding remaining days until the next birthday',
    ],
    faqs: [
      {
        question: 'How does the calculator handle leap-year birthdays (February 29)?',
        answer:
          'For non-leap years, the next-birthday countdown aligns to February 28 of the target calendar year so the day counter remains accurate.',
      },
      {
        question: 'Why do total days sometimes differ from years × 365?',
        answer:
          'Every leap year adds a 366th day (February 29), and calendar months vary from 28 to 31 days. This tool counts exact UTC calendar day differences.',
      },
      {
        question: 'Can I calculate age on a future date?',
        answer:
          'Yes. Change the Age at Date input to any future date to see your exact projected age on that day.',
      },
    ],
    relatedToolSlugs: [
      'date-difference-calculator',
      'time-duration-calculator',
      'bmi-calculator',
      'percentage-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/AgeCalculatorTool')),
  },
  {
    id: 'percentage-calculator',
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    shortDescription:
      'Solve percentage of a number, what percent X is of Y, and percentage increase or decrease instantaneously.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'percentage calculator',
      'percent change calculator',
      'percentage increase decrease',
      'what percent of',
    ],
    seo: {
      title: 'Percentage Calculator – Percent Of, Ratio & Change | UtilityFlow',
      description:
        'Calculate X% of Y, find what percent one number is of another, and measure percentage increase or decrease in one clean workspace.',
      primaryKeyword: 'percentage calculator',
      secondaryKeywords: [
        'percentage change calculator',
        'percent increase calculator',
        'ratio to percentage',
      ],
      longTailKeywords: [
        'calculate percentage increase or decrease between two numbers',
        'how to find what percent x is of y',
        'instant browser percentage solver',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Solve the three most common percentage questions—finding X% of a value, determining what percentage X represents of Y, and measuring percentage growth or decline—in parallel.',
    instructions: [
      {
        title: 'Choose the calculation block',
        description:
          'Each card solves a distinct percentage formula independently without clearing your other numbers.',
      },
      {
        title: 'Enter numeric values',
        description:
          'Type integers or decimals into the highlighted fields; results recalculate on every keystroke.',
      },
      {
        title: 'Inspect formula outputs',
        description:
          'Review both the signed percentage change and absolute numeric difference for growth/decline checks.',
      },
    ],
    examples: [
      {
        title: 'Measuring revenue growth percentage',
        input: 'From 120 to 150',
        output: '+25% (+30 absolute change)',
        explanation: 'Calculated as ((150 - 120) / |120|) × 100 = +25%.',
      },
    ],
    benefits: [
      'Displays all three percentage formulas side by side on one screen',
      'Handles decimals, negative starting values, and zero-denominator guards cleanly',
      'Shows absolute delta alongside percentage change',
      'Requires zero page reloads or submit clicks',
    ],
    useCases: [
      'Checking month-over-month traffic, sales, or conversion rate growth',
      'Computing exam scores and grade percentages',
      'Applying quick percentage surcharges or deductions to invoices',
      'Comparing before-and-after pricing or budget allocations',
    ],
    faqs: [
      {
        question: 'How is percentage change calculated when values drop?',
        answer:
          'Percentage change uses ((New Value − Old Value) / |Old Value|) × 100. When New Value is smaller than Old Value, the tool clearly reports a negative percentage decrease.',
      },
      {
        question: 'What happens if the denominator or starting value is 0?',
        answer:
          'Division by zero is mathematically undefined, so the calculator displays a clear validation message instead of Infinity or NaN.',
      },
      {
        question: 'Can I enter decimal percentages like 7.25%?',
        answer:
          'Yes. All inputs accept decimal values and preserve full floating-point precision before display rounding.',
      },
    ],
    relatedToolSlugs: [
      'discount-margin-calculator',
      'vat-tax-calculator',
      'compound-interest-calculator',
      'tip-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/PercentageCalculatorTool')),
  },
  {
    id: 'loan-emi-calculator',
    slug: 'loan-emi-calculator',
    name: 'Loan & EMI Calculator',
    shortDescription:
      'Compute monthly EMI payments, total interest payable, and an annual or monthly amortization schedule.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'loan calculator',
      'emi calculator',
      'amortization schedule',
      'monthly loan payment',
    ],
    seo: {
      title: 'Loan & EMI Calculator – Monthly Payment & Amortization | UtilityFlow',
      description:
        'Calculate equated monthly installments (EMI), total interest cost, and full principal-vs-interest amortization schedules for personal, auto, or business loans.',
      primaryKeyword: 'loan emi calculator',
      secondaryKeywords: [
        'monthly loan payment calculator',
        'loan amortization schedule',
        'auto loan calculator',
      ],
      longTailKeywords: [
        'calculate monthly emi and total loan interest online',
        'loan principal vs interest breakdown table',
        'personal and car loan repayment calculator',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calculate your exact Equated Monthly Installment (EMI), total interest paid over the loan tenure, principal-to-interest share, and a transparent year-by-year or month-by-month amortization table.',
    instructions: [
      {
        title: 'Enter loan details',
        description:
          'Specify Loan Principal, Annual Interest Rate (APR %), and Loan Tenure in months or years.',
      },
      {
        title: 'Review EMI summary',
        description:
          'Inspect Monthly EMI, Total Interest Payable, Total Repayment, and Interest Share percentage.',
      },
      {
        title: 'Inspect amortization schedule',
        description:
          'Toggle between Yearly Summary and Monthly Schedule to see how principal repayment accelerates over time.',
      },
    ],
    examples: [
      {
        title: '5-year auto or personal loan',
        input: 'Principal: $25,000 · Rate: 7.5% · Term: 60 months',
        output: 'Monthly EMI: $500.95 · Total Interest: $5,056.92 · Total Paid: $30,056.92',
        explanation: 'Uses standard reducing-balance EMI formula P·r·(1+r)^n / ((1+r)^n - 1).',
      },
    ],
    benefits: [
      'Uses exact reducing-balance compounding EMI mathematics',
      'Handles 0% promotional APR loans accurately without division errors',
      'Includes switchable Yearly and Monthly amortization schedule views',
      'Supports switching tenure units between Years and Months seamlessly',
    ],
    useCases: [
      'Comparing auto, student, or personal loan offers from multiple lenders',
      'Evaluating how shortening a loan term reduces lifetime interest',
      'Forecasting remaining loan payoff balance after 12, 24, or 36 payments',
      'Checking 0% installment plans vs low-APR financing',
    ],
    faqs: [
      {
        question: 'What formula does the Loan & EMI Calculator use?',
        answer:
          'It applies the standard reducing-balance amortization formula: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), where r is annual rate ÷ 12 ÷ 100 and n is total monthly installments.',
      },
      {
        question: 'Why is early-month interest higher than later months?',
        answer:
          'Interest each month is calculated on the remaining principal balance. As principal shrinks with every EMI payment, a larger portion of each fixed installment goes toward principal.',
      },
      {
        question: 'Does this include lender origination fees or insurance?',
        answer:
          'No. The output reflects pure principal and interest repayment. Add financed fees to the Loan Principal field to model their repayment cost.',
      },
    ],
    relatedToolSlugs: [
      'mortgage-calculator',
      'compound-interest-calculator',
      'salary-calculator',
      'percentage-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/LoanEmiCalculatorTool')),
  },
  {
    id: 'mortgage-calculator',
    slug: 'mortgage-calculator',
    name: 'Mortgage Calculator',
    shortDescription:
      'Estimate monthly PITI mortgage payments including down payment, interest rate, property tax, insurance, and PMI.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'mortgage calculator',
      'home loan payment',
      'piti calculator',
      'down payment mortgage',
    ],
    seo: {
      title: 'Mortgage Calculator – PITI Payment, Tax, PMI & Amortization | UtilityFlow',
      description:
        'Estimate monthly home mortgage payments with down payment percentage or dollar amount, property taxes, homeowners insurance, HOA, and PMI.',
      primaryKeyword: 'mortgage calculator',
      secondaryKeywords: [
        'piti mortgage payment calculator',
        'home loan interest calculator',
        'pmi mortgage estimator',
      ],
      longTailKeywords: [
        'calculate monthly mortgage payment with property tax and insurance',
        'compare 15 year vs 30 year mortgage payment',
        'estimate mortgage loan balance over time',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Model your true monthly housing obligation (Principal & Interest plus Property Taxes, Homeowners Insurance, HOA dues, and Private Mortgage Insurance) alongside total lifetime interest and annual loan paydown.',
    instructions: [
      {
        title: 'Set home price and down payment',
        description:
          'Enter Property Price and your Down Payment (automatically reflecting Loan-to-Value ratio and loan principal).',
      },
      {
        title: 'Choose interest rate and term',
        description:
          'Enter the annual mortgage rate (%) and select a 10-, 15-, 20-, or 30-year fixed term.',
      },
      {
        title: 'Include taxes, insurance, and HOA',
        description:
          'Adjust annual Property Tax, annual Homeowners Insurance, monthly HOA dues, and PMI rate (when down payment is under 20%).',
      },
    ],
    examples: [
      {
        title: '30-year fixed home purchase with 20% down',
        input: 'Home: $450,000 · Down: $90,000 (20%) · Rate: 6.5% · Tax: $5,400/yr · Ins: $1,800/yr',
        output: 'Total Monthly: $2,875.44 (P&I $2,275.44 + Tax $450 + Ins $150)',
        explanation: 'At 20% down (80% LTV), PMI is $0 and P&I amortizes over 360 months.',
      },
    ],
    benefits: [
      'Breaks monthly housing cost into P&I, Property Tax, Insurance, HOA, and PMI',
      'Calculates Loan-to-Value (LTV) ratio and total interest over full term',
      'Includes an annual balance-paydown schedule table',
      'Supports 10-, 15-, 20-, and 30-year amortization comparisons instantly',
    ],
    useCases: [
      'Budgeting realistic monthly PITI costs before shopping for homes',
      'Comparing 15-year vs 30-year mortgage interest savings',
      'Testing how putting 20% down eliminates monthly PMI charges',
      'Estimating remaining principal balance after 5 or 10 years',
    ],
    faqs: [
      {
        question: 'What does PITI stand for in a mortgage payment?',
        answer:
          'PITI stands for Principal, Interest, Taxes (property tax), and Insurance (homeowners insurance and PMI if applicable)—the four components lenders use to assess monthly affordability.',
      },
      {
        question: 'When does PMI apply?',
        answer:
          'Conventional mortgages typically charge Private Mortgage Insurance (PMI) when your down payment is below 20% (Loan-to-Value above 80%).',
      },
      {
        question: 'Does this include closing costs?',
        answer:
          'No. Closing costs vary by region and lender (often 2%–5% of loan amount) and are paid upfront unless rolled into the loan principal.',
      },
    ],
    relatedToolSlugs: [
      'loan-emi-calculator',
      'compound-interest-calculator',
      'salary-calculator',
      'percentage-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/MortgageCalculatorTool')),
  },
  {
    id: 'compound-interest-calculator',
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    shortDescription:
      'Project investment growth with initial deposit, recurring monthly contributions, compounding frequency, and inflation adjustment.',
    categoryId: 'calculators',
    batch: 3,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'compound interest calculator',
      'investment growth calculator',
      'savings compounding',
      'future value calculator',
    ],
    seo: {
      title: 'Compound Interest Calculator – Investment & Savings Growth | UtilityFlow',
      description:
        'Project future investment balance with initial principal, monthly contributions, daily/monthly/quarterly/annual compounding, and year-by-year growth schedule.',
      primaryKeyword: 'compound interest calculator',
      secondaryKeywords: [
        'compound savings calculator',
        'future value investment calculator',
        'monthly contribution growth',
      ],
      longTailKeywords: [
        'calculate compound interest with monthly contributions online',
        'compare monthly vs daily compounding growth',
        'year by year compound interest schedule',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Forecast how an initial lump sum plus consistent monthly deposits grow over years through compound interest, with selectable compounding frequency and a year-by-year principal vs. interest table.',
    instructions: [
      {
        title: 'Enter principal and recurring deposits',
        description:
          'Specify your Initial Deposit and Monthly Contribution amount.',
      },
      {
        title: 'Set annual return and horizon',
        description:
          'Enter the expected Annual Interest / Return Rate (%) and Investment Duration in years.',
      },
      {
        title: 'Choose compounding frequency',
        description:
          'Switch between Annual, Quarterly, Monthly, or Daily compounding and review the annual breakdown.',
      },
    ],
    examples: [
      {
        title: '20-year steady index investing projection',
        input: 'Initial: $10,000 · Monthly: $500 · Return: 7% · Years: 20 · Monthly Compounding',
        output: 'Final Balance: $300,850.56 · Contributions: $130,000 · Interest Earned: $170,850.56',
        explanation: 'Compound returns account for more than 56% of the ending portfolio value.',
      },
    ],
    benefits: [
      'Separates total out-of-pocket contributions from earned compound interest',
      'Supports Annual, Quarterly, Monthly, and Daily compounding intervals',
      'Optional end-of-month vs beginning-of-month contribution timing',
      'Generates a full year-by-year growth ledger for planning',
    ],
    useCases: [
      'Planning long-term retirement or index fund savings milestones',
      'Comparing high-yield savings accounts with monthly vs daily compounding',
      'Visualizing the impact of increasing monthly contributions by $100',
      'Teaching exponential compounding vs linear simple interest',
    ],
    faqs: [
      {
        question: 'How much difference does compounding frequency make?',
        answer:
          'At moderate interest rates, monthly compounding produces slightly more growth than annual compounding because interest starts earning interest sooner; daily vs monthly is typically a small fraction of a percent.',
      },
      {
        question: 'Does this account for taxes or inflation?',
        answer:
          'The calculator shows nominal pre-tax growth. To approximate real inflation-adjusted purchasing power, subtract expected annual inflation (for example 2.5%–3%) from your nominal return rate.',
      },
      {
        question: 'Are contributions assumed at the start or end of each month?',
        answer:
          'By default, contributions apply at the end of each month; you can toggle beginning-of-month timing inside the calculator options.',
      },
    ],
    relatedToolSlugs: [
      'loan-emi-calculator',
      'mortgage-calculator',
      'percentage-calculator',
      'salary-calculator',
    ],
    component: lazy(() => import('../../../tools/calculators/CompoundInterestCalculatorTool')),
  },
];
