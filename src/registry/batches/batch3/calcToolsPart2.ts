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
      'gross margin calculator',
      'markup percentage calculator',
      'stacked discount calculator',
      'retail markup calculator',
      'sale price after discount',
    ],
    seo: {
      title: 'Discount & Margin Calculator – Sale Prices | UtilityFlow',
      description:
        'Calculate final sale prices with stacked discounts and tax, or compare gross profit margin vs markup from cost and selling price, free in your browser.',
      primaryKeyword: 'discount margin calculator',
      secondaryKeywords: [
        'sale price discount calculator',
        'gross margin vs markup calculator',
        'retail profit calculator',
        'discounted price calculator',
        'profit margin percentage calculator',
      ],
      longTailKeywords: [
        'calculate final price after double discount and sales tax',
        'difference between profit margin and markup percentage',
        'ecommerce sku margin and profit calculator',
        'calculate margin percentage from cost and selling price',
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
        title: 'Add stacked discounts and tax',
        description:
          'In Discount mode, enter a second coupon % and an optional tax %; discounts are applied one after another, not added together.',
      },
      {
        title: 'See results update instantly',
        description:
          'The figures recalculate as you type, with no button to press and no sign-up needed.',
      },
      {
        title: 'Review net metrics',
        description:
          'Check Final Price, Total Savings, Effective Discount %, Gross Profit, Margin %, and Markup %.',
      },
      {
        title: 'Copy your results and test prices',
        description:
          'Copy the final price, savings, margin and markup figures into your price list, quote or spreadsheet, then adjust the inputs to test different price points.',
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
      {
        question: 'What is a good profit margin for a retail product?',
        answer:
          'There is no single good margin; it varies by industry, product type and costs. Use the calculator to compare your margin % against your own target, and remember the result is a maths output, not business advice.',
      },
      {
        question: 'How do I calculate the sale price after a single discount?',
        answer:
          'Multiply the original price by (1 − discount %). An $80 item at 25% off costs $80 × 0.75 = $60.',
      },
      {
        question: 'Can I stack a percentage discount and a fixed-amount coupon?',
        answer:
          'This calculator stacks percentage discounts one after another. For a fixed-amount coupon, subtract it from the price after the percentage discount is applied.',
      },
      {
        question: 'Does the Discount & Margin Calculator work for wholesale pricing?',
        answer:
          'Yes. Enter your unit cost and target selling price in Margin mode to see gross profit, margin % and markup % per unit.',
      },
      {
        question: 'What is the difference between gross profit and net profit?',
        answer:
          'Gross profit is selling price minus product cost. Net profit also subtracts overheads like shipping, fees and rent, which this calculator does not include.',
      },
      {
        question: 'How do I set a price from a target margin percentage?',
        answer:
          'In Margin mode, try different selling prices until the margin % matches your target. The markup % shown tells you how much to add on top of cost.',
      },
      {
        question: 'Is the Discount & Margin Calculator free to use?',
        answer:
          'Yes, it is completely free and runs entirely in your browser — no account, upload or payment is needed.',
      },
      {
        question: 'Why is my margin % lower than my markup %?',
        answer:
          'Margin divides profit by the selling price while markup divides it by cost, so for the same profit the markup % is always higher.',
      },
      {
        question: 'Can margin ever be over 100%?',
        answer:
          'No. Margin is profit divided by selling price, so it can never exceed 100%. Markup, however, can be well over 100%.',
      },
      {
        question: 'How does sales tax affect the final price?',
        answer:
          'Tax is applied to the discounted subtotal, so a bigger discount also lowers the tax you pay. The calculator shows the tax-inclusive final price.',
      },
      {
        question: 'What is a break-even price?',
        answer:
          'The price at which gross profit is zero — equal to your unit cost. Any selling price above cost produces a positive margin.',
      },
      {
        question: 'Can I use this calculator for Black Friday or clearance pricing?',
        answer:
          'Yes. Enter the original price and each stacked discount to check the final price and how much margin the promotion leaves.',
      },
      {
        question: 'Does the calculator save or upload my prices?',
        answer:
          'No. All calculations happen locally in your browser and nothing is uploaded or stored.',
      },
      {
        question: 'How do I convert a markup % into a margin %?',
        answer:
          'Margin % = Markup % ÷ (100 + Markup %) × 100. For example, a 100% markup equals a 50% margin, and the calculator does this conversion for you.',
      },
      {
        question: 'What should I do if the margin looks too thin?',
        answer:
          'Re-check your cost inputs, then test a higher selling price or a smaller discount in the calculator to see how the margin recovers.',
      },
      {
        question: 'Can I calculate a discount on a price that already includes tax?',
        answer:
          'Enter the tax-inclusive amount as the original price and set Tax % to 0, so the discount applies to the amount you typed.',
      },
      {
        question: 'What does "effective discount %" mean?',
        answer:
          'It is the single discount % that gives the same final price as all your stacked discounts combined — for example, 20% then 10% equals an effective 28% off.',
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
      'add vat to price',
      'extract tax from gross',
      'vat inclusive calculator',
      'sales tax on total',
      'net price calculator',
    ],
    seo: {
      title: 'VAT & Sales Tax Calculator – Net & Gross | UtilityFlow',
      description:
        'Add VAT, GST or sales tax to a net subtotal, or extract the tax amount and pre-tax net price from a tax-inclusive gross total, free in your browser instantly.',
      primaryKeyword: 'vat tax calculator',
      secondaryKeywords: [
        'reverse vat calculator',
        'exclude sales tax from total',
        'gst inclusive exclusive calculator',
        'add sales tax calculator',
        'vat on net price calculator',
      ],
      longTailKeywords: [
        'how to remove vat from gross price online',
        'add 20 percent vat or custom sales tax rate',
        'net tax and gross invoice breakdown calculator',
        'reverse calculate vat from total price including tax',
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
        title: 'Use a quick preset or a custom rate',
        description:
          'Tap 5%, 10%, 15% or 20%, or type any decimal rate such as 8.875% to match a local sales tax.',
      },
      {
        title: 'Check the calculation instantly',
        description:
          'Results update as you type, with no submit button and no sign-up needed.',
      },
      {
        title: 'Read invoice line items',
        description:
          'Copy the exact Net Subtotal, Tax Component, and Gross Total for accounting or quoting.',
      },
      {
        title: 'Copy the breakdown and compare rates',
        description:
          'Copy the net, tax and gross figures into your invoice, quote or bookkeeping sheet, then re-run with a different rate to compare scenarios.',
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
      {
        question: 'What is the difference between VAT, GST and sales tax?',
        answer:
          'They are all percentage taxes on goods and services. VAT and GST are usually included in the displayed price, while US sales tax is usually added at checkout. The maths is identical.',
      },
      {
        question: 'How do I add 20% VAT to a net price?',
        answer:
          'Multiply the net price by 1.20. A net price of $100 becomes $120 gross, with $20 of VAT.',
      },
      {
        question: 'How do I remove VAT from a price that includes it?',
        answer:
          'Divide the gross price by (1 + rate). At 20% VAT, $120 ÷ 1.20 = $100 net and $20 tax — not $24.',
      },
      {
        question: 'Is the VAT & Tax Calculator free to use?',
        answer:
          'Yes, it is completely free and runs entirely in your browser with no account or upload.',
      },
      {
        question: 'Can I use this calculator for UK VAT at 20%?',
        answer:
          'Yes. Select Extract or Add Tax, enter your amount and use the 20% preset or type 20 as a custom rate.',
      },
      {
        question: 'What VAT rate should I use for my country?',
        answer:
          'Rates vary by country and product type, so check your local tax authority\'s current rate and enter it as a custom rate. The calculator does not give tax advice.',
      },
      {
        question: 'Does the calculator handle zero-rated or tax-exempt items?',
        answer:
          'Yes. Enter a 0% rate and the net and gross amounts will be identical.',
      },
      {
        question: 'What is a tax-inclusive price?',
        answer:
          'A price that already contains the tax, as shown on most European receipts. The Extract Tax mode splits it back into net and tax.',
      },
      {
        question: 'What is a tax-exclusive price?',
        answer:
          'A price before tax is added, common in US stores. The Add Tax mode shows the gross total your customer pays.',
      },
      {
        question: 'Can I calculate VAT on a partial refund?',
        answer:
          'Yes. Enter the refund amount as the gross or net figure and extract or add tax at the same rate used on the original sale.',
      },
      {
        question: 'How do I show VAT on an invoice?',
        answer:
          'Use the calculator\'s three figures as separate lines: Net Subtotal, Tax Amount, and Gross Total, so the customer sees the breakdown clearly.',
      },
      {
        question: 'Does this calculator store my invoice amounts?',
        answer:
          'No. Everything is calculated locally in your browser and nothing is uploaded or saved.',
      },
      {
        question: 'Can I use decimal rates like 7.25% or 8.875%?',
        answer:
          'Yes. The rate field accepts any positive decimal percentage.',
      },
      {
        question: 'What if my receipt only shows the gross total?',
        answer:
          'Use Extract Tax mode with the gross total and your local rate to recover the net amount and the tax component.',
      },
      {
        question: 'Is VAT charged on shipping or delivery fees?',
        answer:
          'That depends on local tax rules. If it applies in your case, include the shipping amount in the net figure before adding tax.',
      },
      {
        question: 'How do I check a supplier\'s VAT calculation?',
        answer:
          'Enter their gross total in Extract Tax mode at the stated rate and compare the net figure with the supplier\'s invoice.',
      },
      {
        question: 'Can I calculate GST for Australia or Canada?',
        answer:
          'Yes. GST uses the same net/gross formulas as VAT, so enter your amount and the local GST rate — for example 10% in Australia or 5% federal GST in Canada.',
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
      'annual salary to hourly',
      'monthly salary calculator',
      'biweekly pay calculator',
      'gross pay converter',
      'salary to hourly rate',
    ],
    seo: {
      title: 'Salary Calculator – Hourly to Annual Pay | UtilityFlow',
      description:
        'Convert hourly, daily, weekly, biweekly, monthly and annual gross pay using custom hours per week and paid weeks per year, free and instant in your browser.',
      primaryKeyword: 'salary calculator',
      secondaryKeywords: [
        'hourly to salary calculator',
        'annual to hourly wage',
        'biweekly paycheck calculator',
        'gross salary converter',
        'hourly wage to yearly pay',
      ],
      longTailKeywords: [
        'convert 50 dollars an hour to annual salary',
        'gross salary breakdown with unpaid vacation weeks',
        'custom hours per week compensation converter',
        'convert annual salary to monthly and biweekly pay',
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
        title: 'Change hours or weeks for part-time work',
        description:
          'Lower Hours per Week or Paid Weeks per Year to model part-time schedules, a 4-day week, or unpaid leave.',
      },
      {
        title: 'See results update instantly',
        description:
          'Every pay cadence recalculates as you type, with no button to press and no sign-up needed.',
      },
      {
        title: 'Compare all pay cadences',
        description:
          'Review every gross equivalence row simultaneously, including total annual working hours.',
      },
      {
        title: 'Copy your figures and compare offers',
        description:
          'Copy the hourly, monthly or annual gross figure into a job-offer comparison, budget or negotiation note, then adjust the inputs to compare offers side by side.',
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
      {
        question: 'How do I convert $25 an hour to an annual salary?',
        answer:
          'At 40 hours a week for 52 weeks (2,080 hours), $25 an hour equals $52,000 a year gross. Enter your own hours to get your exact figure.',
      },
      {
        question: 'Is the Salary Calculator free to use?',
        answer:
          'Yes, it is completely free and runs entirely in your browser — no account or upload is needed.',
      },
      {
        question: 'Does the Salary Calculator show take-home pay after tax?',
        answer:
          'No. It shows gross pay only, because income tax and deductions vary by country, state and personal circumstances.',
      },
      {
        question: 'What is the difference between gross pay and net pay?',
        answer:
          'Gross pay is your earnings before tax and deductions. Net (take-home) pay is what remains after them. This calculator reports gross pay.',
      },
      {
        question: 'How many hours are in a standard full-time work year?',
        answer:
          '2,080 hours: 40 hours a week × 52 weeks. The calculator uses your own hours-per-week setting instead of assuming this.',
      },
      {
        question: 'Can I compare an hourly contract rate with a salaried offer?',
        answer:
          'Yes. Enter the hourly rate and compare its annual gross figure with the salary offer, keeping in mind that benefits and paid leave differ.',
      },
      {
        question: 'How do I account for unpaid vacation as a contractor?',
        answer:
          'Reduce "Paid Weeks per Year" from 52 to the number of weeks you actually get paid for, such as 48 or 49.',
      },
      {
        question: 'What is semi-monthly pay?',
        answer:
          'Pay issued twice a month, 24 times a year, usually on fixed dates such as the 1st and 15th — different from biweekly pay, which is 26 times a year.',
      },
      {
        question: 'Why is my biweekly paycheck smaller than my semi-monthly paycheck?',
        answer:
          'Because the same annual salary is split into 26 biweekly checks instead of 24 semi-monthly ones, so each biweekly check is slightly smaller.',
      },
      {
        question: 'Can I calculate pay for a 4-day workweek?',
        answer:
          'Yes. Set Days per Week to 4 and Hours per Week to 32 (or your actual hours) and the calculator converts the rate across all cadences.',
      },
      {
        question: 'Does overtime pay get included?',
        answer:
          'No. The calculator converts a single base rate. Overtime at a different rate would need a separate calculation.',
      },
      {
        question: 'How do I convert a monthly salary to an hourly rate?',
        answer:
          'Enter the monthly amount, choose Monthly as the pay period, and read the hourly figure — it divides by your hours per week and paid weeks per year.',
      },
      {
        question: 'Does the calculator save my salary information?',
        answer:
          'No. All figures stay in your browser and nothing is uploaded or stored.',
      },
      {
        question: 'What should I enter if my pay changes during the year?',
        answer:
          'Calculate each rate separately, or use a weighted average of the two rates for a rough annual estimate.',
      },
      {
        question: 'Can I use this calculator for part-time or casual work?',
        answer:
          'Yes. Set your actual hours per week and days per week to match your part-time schedule.',
      },
      {
        question: 'How do I compare two job offers with different pay periods?',
        answer:
          'Enter each offer\'s rate and pay period, then compare the annual gross figures side by side using the same hours and weeks settings.',
      },
      {
        question: 'Does the calculator include bonuses or commission?',
        answer:
          'No. It converts base pay only. Add bonuses or commission separately to the annual figure for a fuller picture.',
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
      'tip percentage calculator',
      'split bill calculator',
      'gratuity tip calculator',
      'tip on pre-tax bill',
      'restaurant bill splitter',
    ],
    seo: {
      title: 'Tip Calculator – Split Bills & Gratuity | UtilityFlow',
      description:
        'Work out restaurant tips with quick percentage presets, tip on the pre-tax subtotal, split the bill evenly and round each person\'s share fairly, in seconds.',
      primaryKeyword: 'tip calculator',
      secondaryKeywords: [
        'bill splitter calculator',
        'gratuity calculator',
        'restaurant tip split',
        'tip per person calculator',
        'how much to tip calculator',
      ],
      longTailKeywords: [
        'calculate 18 or 20 percent tip before tax online',
        'split dinner bill and tip among friends evenly',
        'round up total per person tip calculator',
        'split restaurant check with tip and tax per person',
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
        title: 'Exclude tax from the tip base',
        description:
          'If your bill includes sales tax, enter the tax amount so the tip is calculated on the pre-tax subtotal.',
      },
      {
        title: 'Check the totals instantly',
        description:
          'Tip, total bill and per-person amounts update as you type, with no button to press.',
      },
      {
        title: 'Optional rounding & split',
        description:
          'Enable round-up to the nearest dollar per person and review each guest’s share.',
      },
      {
        title: 'Copy or share the split',
        description:
          'Copy each person’s share to send to the group, or adjust the tip % to see how the per-person total changes.',
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
      {
        question: 'How much should I tip at a restaurant?',
        answer:
          'Common tipping ranges are 15–20% for table service in the US, but customs vary by country and service quality. The calculator only does the maths.',
      },
      {
        question: 'How do I calculate a 20% tip quickly?',
        answer:
          'Move the decimal point one place left for 10% of the bill, then double it. On a $60 bill, 10% is $6, so 20% is $12.',
      },
      {
        question: 'Is the Tip Calculator free to use?',
        answer:
          'Yes, it is completely free and runs entirely in your browser — no account or upload is needed.',
      },
      {
        question: 'Should I tip on the total including tax?',
        answer:
          'Traditionally gratuity is calculated on the pre-tax subtotal. Enter the tax amount in the Tax field to exclude it from the tip base.',
      },
      {
        question: 'What is a good tip for food delivery?',
        answer:
          'Delivery tipping customs vary by area and order size. Enter any custom percentage in the calculator to match what you decide.',
      },
      {
        question: 'How do I split a bill when people ordered different amounts?',
        answer:
          'This calculator splits evenly. For unequal shares, calculate each person\'s tip on their own subtotal separately.',
      },
      {
        question: 'Can I tip a custom percentage like 17%?',
        answer:
          'Yes. Type any percentage into the custom tip field instead of using the presets.',
      },
      {
        question: 'What does the per-person amount include?',
        answer:
          'Each person\'s share of the bill plus their share of the tip. With rounding on, it is rounded up to the next whole dollar.',
      },
      {
        question: 'How does rounding change the effective tip?',
        answer:
          'Rounding each person\'s share up adds a small amount on top of the tip, so the calculator shows the resulting effective tip percentage.',
      },
      {
        question: 'Can I use the Tip Calculator for salon or taxi tips?',
        answer:
          'Yes. Enter the service total and your chosen tip percentage; the same maths applies to any tipped service.',
      },
      {
        question: 'Does the calculator save my bill amounts?',
        answer:
          'No. All calculations happen locally in your browser and nothing is uploaded or stored.',
      },
      {
        question: 'What if the bill already includes a service charge?',
        answer:
          'Check whether the service charge is the gratuity. If it is, you may not need an extra tip, and you can enter 0% to see the split without one.',
      },
      {
        question: 'How do I split a bill among 3 people with an odd total?',
        answer:
          'Enter the bill, tip % and 3 people. The calculator divides the total evenly and shows each person\'s exact share.',
      },
      {
        question: 'Can I calculate the tip before tax if I only know the total?',
        answer:
          'You need the tax amount or the pre-tax subtotal to tip before tax. If the receipt shows only the total, use the full total as the tip base.',
      },
      {
        question: 'What tip percentage do the presets cover?',
        answer:
          'The quick presets are 10%, 15%, 18%, 20% and 25%, and you can enter any other percentage as a custom value.',
      },
      {
        question: 'Is it rude to split a bill evenly?',
        answer:
          'That depends on the group and what everyone ordered. The calculator simply makes the even-split maths instant.',
      },
      {
        question: 'How do I work out the tip on a large group bill?',
        answer:
          'Enter the full bill total and the number of guests. The calculator shows the tip, the total, and what each person owes.',
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
      'calculate bmi',
      'bmi chart calculator',
      'bmi for adults',
      'healthy weight calculator',
      'bmi kg m2 calculator',
    ],
    seo: {
      title: 'BMI Calculator – Body Mass Index & Weight | UtilityFlow',
      description:
        'Calculate your Body Mass Index in metric or imperial units, see your WHO weight category and the healthy weight range for your height, free online today.',
      primaryKeyword: 'bmi calculator',
      secondaryKeywords: [
        'body mass index calculator',
        'healthy bmi weight range',
        'imperial bmi calculator',
        'bmi weight category calculator',
        'calculate bmi from height and weight',
      ],
      longTailKeywords: [
        'calculate bmi in feet inches and pounds',
        'world health organization adult bmi categories',
        'find healthy weight range for height',
        'what is a healthy bmi range for my height',
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
        title: 'Double-check your units',
        description:
          'Make sure centimetres go with kilograms and feet/inches go with pounds, or the result will be wrong.',
      },
      {
        title: 'See your BMI instantly',
        description:
          'The score, WHO category and healthy weight range update as you type, with no button to press.',
      },
      {
        title: 'Review BMI & context',
        description:
          'Inspect your BMI score, WHO category, and corresponding healthy weight range for your height.',
      },
      {
        title: 'Note or share your result',
        description:
          'Copy your BMI and healthy weight range to track over time or discuss with a clinician, and re-enter new measurements whenever your weight changes.',
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
      {
        question: 'What is a healthy BMI range?',
        answer:
          'The WHO defines 18.5–24.9 kg/m² as the normal-weight range for adults. Below 18.5 is underweight and 25–29.9 is overweight.',
      },
      {
        question: 'Is the BMI Calculator free to use?',
        answer:
          'Yes, it is completely free and runs entirely in your browser — no account or upload is needed.',
      },
      {
        question: 'What are the WHO BMI categories?',
        answer:
          'Underweight is below 18.5, normal weight is 18.5–24.9, overweight is 25–29.9, and obesity is 30 or above.',
      },
      {
        question: 'How do I calculate BMI in pounds and inches?',
        answer:
          'Use (weight in lbs × 703) ÷ (height in inches)². The calculator does this automatically in Imperial mode.',
      },
      {
        question: 'How do I calculate BMI in kilograms and centimetres?',
        answer:
          'Divide weight in kg by height in metres squared. The calculator converts your centimetres to metres for you.',
      },
      {
        question: 'Is BMI accurate for everyone?',
        answer:
          'No. BMI is a screening ratio that does not distinguish muscle from fat, so very muscular people, older adults and children need different assessments.',
      },
      {
        question: 'Can children use this BMI Calculator?',
        answer:
          'No. Children\'s BMI is interpreted with age-and-sex percentile charts, not adult WHO bands, so this tool is for adults only.',
      },
      {
        question: 'What is my healthy weight range?',
        answer:
          'The calculator shows the weight span that gives a BMI of 18.5–24.9 for your height — for example, about 56.7–76.3 kg at 175 cm.',
      },
      {
        question: 'How often should I check my BMI?',
        answer:
          'Occasionally is enough, such as monthly when tracking weight changes. BMI is a screening number, not a daily health verdict.',
      },
      {
        question: 'Does BMI measure body fat percentage?',
        answer:
          'No. BMI only relates weight to height and cannot tell how much of your weight is fat versus muscle or bone.',
      },
      {
        question: 'What should I do if my BMI is in the overweight range?',
        answer:
          'Consider it a prompt to look at diet, activity and overall health with a clinician. A single BMI number is not a diagnosis.',
      },
      {
        question: 'Can I use BMI if I am pregnant?',
        answer:
          'No. Pregnancy changes weight in ways BMI does not account for, so the standard categories do not apply.',
      },
      {
        question: 'Is my height and weight data saved anywhere?',
        answer:
          'No. Your measurements stay in your browser tab and disappear when you close it.',
      },
      {
        question: 'Why does the calculator ask for height in feet and inches?',
        answer:
          'Imperial mode accepts feet and inches because that is how height is usually measured in the US. Metric mode uses centimetres instead.',
      },
      {
        question: 'What is the difference between BMI and BMR?',
        answer:
          'BMI relates weight to height, while BMR (basal metabolic rate) estimates the calories your body burns at rest — they measure different things.',
      },
      {
        question: 'Can athletes have a high BMI and still be healthy?',
        answer:
          'Yes. Muscle is dense, so a very muscular athlete can score as overweight on BMI despite low body fat. The tool flags this limitation.',
      },
      {
        question: 'How accurate is the BMI result?',
        answer:
          'The maths is exact for the numbers you enter, but the result is only as accurate as your height and weight measurements.',
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
