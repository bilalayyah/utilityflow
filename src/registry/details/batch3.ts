// Detail content for EN tools — split out of the registry by
// scripts/h3-split-details.mjs (H-3 page weight). Loaded on demand, one
// batch at a time, only on the tool's own page (src/locales/details.ts).
// Do NOT edit by hand; re-run the splitter if the registry changes.
import type { ToolDetail } from '../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'age-calculator': {
    instructions: [
      {
        title: 'Enter your date of birth',
        description:
          'Select your birth month, day, and year in the Date of Birth field.',
      },
      {
        title: 'Choose the comparison date',
        description:
          'Leave Age at Date set to today or pick any historical or upcoming reference date to calculate age on that day.',
      },
      {
        title: 'Run the age calculation',
        description:
          'The result updates instantly in your browser — no button to press and no data uploaded anywhere.',
      },
      {
        title: 'Review the full breakdown',
        description:
          'Read your exact years, months, days, total weeks, total days lived, and next birthday countdown.',
      },
      {
        title: 'Copy or share your result',
        description:
          'Copy the age breakdown to paste into a form, message, or document wherever you need it.',
      },
      {
        title: 'Tip: check a future milestone',
        description:
          'Set the comparison date to a birthday, exam, or retirement date to see exactly how old you will be on that day.',
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
        question: 'How does the Age Calculator handle leap-year birthdays (February 29)?',
        answer:
          'For non-leap years, the next-birthday countdown aligns to February 28 of the target calendar year so the day counter remains accurate.',
      },
      {
        question: 'Why do total days sometimes differ from years × 365 in the Age Calculator?',
        answer:
          'Every leap year adds a 366th day (February 29), and calendar months vary from 28 to 31 days. This tool counts exact UTC calendar day differences.',
      },
      {
        question: 'Can I calculate my age on a future date with the Age Calculator?',
        answer:
          'Yes. Change the Age at Date input to any future date to see your exact projected age on that day.',
      },
      {
        question: 'Is the Age Calculator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser so your date of birth is never uploaded.',
      },
      {
        question: 'What does the Age Calculator show besides years?',
        answer:
          'It shows years, months, and days, plus total months, total weeks, total days lived, and the days remaining until your next birthday.',
      },
      {
        question: 'How accurate is the Age Calculator?',
        answer:
          'It uses exact calendar month lengths and leap years, so the result matches the real calendar rather than a 30-day-month approximation.',
      },
      {
        question: 'Can the Age Calculator work out my age in days only?',
        answer:
          'Yes. The breakdown includes your total days lived, which is useful for milestone counts and anniversaries measured in days.',
      },
      {
        question: 'Can I use the Age Calculator to find my age in weeks or months?',
        answer:
          'Yes, the results include total weeks and total months alongside the years, months, and days breakdown.',
      },
      {
        question: 'Does the Age Calculator store my date of birth?',
        answer:
          'No. All calculations happen locally in your browser, and nothing you enter is saved or sent to a server.',
      },
      {
        question: 'What happens if I enter a birth date after the comparison date?',
        answer:
          'The tool shows a validation message, because an age cannot be calculated when the birth date comes after the date you are comparing it with.',
      },
      {
        question: 'Can the Age Calculator tell me how old I will be at retirement?',
        answer:
          'Yes. Set the comparison date to your planned retirement date and the tool will show your exact age on that day.',
      },
      {
        question: 'Does the Age Calculator count the hours I have lived?',
        answer:
          'It shows an approximate hours figure based on total days lived, alongside the exact years, months, and days result.',
      },
      {
        question: 'Can I check someone else’s age with the Age Calculator?',
        answer:
          'Yes, you can enter any date of birth to calculate that person’s age, for example to check eligibility for school or a pension.',
      },
      {
        question: 'Why does the Age Calculator ask for a comparison date?',
        answer:
          'The comparison date is the day you want your age measured on — today by default, or any past or future date for planning and records.',
      },
      {
        question: 'Does the Age Calculator work for very old birth dates?',
        answer:
          'Yes, it handles birth dates across many decades, counting leap years correctly throughout the whole period.',
      },
      {
        question: 'Can I use the Age Calculator for official forms?',
        answer:
          'Yes, the exact years, months, and days result is suitable for checking age eligibility, though official documents remain the final proof.',
      },
      {
        question: 'How does the Age Calculator count my next birthday?',
        answer:
          'It compares today’s date with your next birthday date and shows the exact number of days remaining until then.',
      },
      {
        question: 'Does the Age Calculator need an internet connection?',
        answer:
          'It needs the page loaded, but the calculation itself runs locally in your browser with no upload.',
      },
      {
        question: 'Can the Age Calculator show my age on a past date?',
        answer:
          'Yes. Pick any past date as the comparison date to see exactly how old you were on that day.',
      },
      {
        question: 'Is my date of birth private when I use the Age Calculator?',
        answer:
          'Yes. The tool runs locally in your browser, so your date of birth never leaves your device.',
      },
    ],
    howItWorks: [
      'The age calculator subtracts your date of birth from the comparison date using real calendar arithmetic, not a 365-day approximation. It first counts whole years, then whole months, then the remaining days, borrowing days from the previous month whenever the target day-of-month is smaller than the birth day.',
      'Month lengths come from the actual calendar, so February contributes 28 days in common years and 29 in leap years, while other months contribute 30 or 31 days. Leap years follow the Gregorian rule: divisible by 4, except centuries, unless also divisible by 400.',
      'Total days are counted by converting both dates to UTC midnight timestamps and dividing the difference by 86,400,000 milliseconds per day. Using UTC avoids daylight-saving shifts, so a spring or autumn clock change can never add or remove a day from your age.',
      'The next-birthday countdown looks for your birthday in the comparison year and, if it has already passed, in the following year. For a February 29 birthday in a non-leap year, the tool clamps the date to February 28 so the countdown stays accurate.',
      'If you need the gap between two arbitrary dates rather than an age from birth, the Date Difference Calculator applies the same calendar maths to any start and end date.',
    ],
    supportedFormats: ['YYYY-MM-DD date input', 'Past, present, or future comparison dates', 'Leap Day (Feb 29) birthdays', 'Years, months, and days breakdown', 'Total days, weeks, and months', 'Next-birthday countdown in days'],
    limitations: [
      'The result is a calendar age only; it cannot confirm legal age, because official eligibility depends on documents, local law, and the exact time of birth, none of which the tool knows.',
      'Total hours are approximate, calculated as total days times 24, so they ignore the time of day you were born and any daylight-saving transitions in your location.',
      'Dates before the Gregorian calendar reform and dates far in the past may not match historical calendars, since the tool applies modern Gregorian rules to every year.',
    ],
  },
  'percentage-calculator': {
    instructions: [
      {
        title: 'Choose the percentage calculation block',
        description:
          'Each card solves a distinct percentage formula independently without clearing your other numbers.',
      },
      {
        title: 'Enter your numeric values',
        description:
          'Type integers or decimals into the highlighted fields; results recalculate on every keystroke.',
      },
      {
        title: 'Run the calculation instantly',
        description:
          'There is no submit button — the percentage result appears immediately as you type, right in your browser.',
      },
      {
        title: 'Inspect the formula outputs',
        description:
          'Review both the signed percentage change and absolute numeric difference for growth or decline checks.',
      },
      {
        title: 'Copy your percentage result',
        description:
          'Copy the answer to paste into a report, invoice, spreadsheet, or message.',
      },
      {
        title: 'Tip: check a zero or negative starting value',
        description:
          'If the result shows a validation message, check for a zero denominator or a negative starting value, which the tool guards against.',
      },
    ],
    examples: [
      {
        title: 'Measuring revenue growth percentage',
        input: 'From 120 to 150',
        output: '+25% (+30 absolute change)',
        explanation: 'Calculated as ((150 - 120) / |120|) × 100 = +25%.',
      },
      {
        title: 'Finding a test score as a percentage',
        input: 'Marks: 42 out of 50',
        output: '84%',
        explanation: 'Divides 42 by 50 and multiplies by 100: (42 ÷ 50) × 100 = 84%.',
      },
    ],
    benefits: [
      'Displays all three percentage formulas side by side on one screen',
      'Handles decimals, negative starting values, and zero-denominator guards cleanly',
      'Shows absolute delta alongside percentage change',
      'Requires zero page reloads or submit clicks',
      'Explains each formula on screen so you can check the maths yourself',
    ],
    useCases: [
      'Checking month-over-month traffic, sales, or conversion rate growth',
      'Computing exam scores and grade percentages',
      'Applying quick percentage surcharges or deductions to invoices',
      'Comparing before-and-after pricing or budget allocations',
    ],
    faqs: [
      {
        question: 'How is percentage change calculated when values drop in the Percentage Calculator?',
        answer:
          'Percentage change uses ((New Value − Old Value) / |Old Value|) × 100. When New Value is smaller than Old Value, the tool clearly reports a negative percentage decrease.',
      },
      {
        question: 'What happens if the denominator or starting value is 0 in the Percentage Calculator?',
        answer:
          'Division by zero is mathematically undefined, so the calculator displays a clear validation message instead of Infinity or NaN.',
      },
      {
        question: 'Can I enter decimal percentages like 7.25% in the Percentage Calculator?',
        answer:
          'Yes. All inputs accept decimal values and preserve full floating-point precision before display rounding.',
      },
      {
        question: 'Is the Percentage Calculator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser so your numbers are never uploaded.',
      },
      {
        question: 'How do I find what percent one number is of another?',
        answer:
          'Use the "what percent" card: enter the part and the whole, and the tool divides the part by the whole and multiplies by 100.',
      },
      {
        question: 'How do I calculate X% of a number with the Percentage Calculator?',
        answer:
          'Enter the percentage and the number in the "X% of Y" card, and the tool multiplies the number by the percentage divided by 100.',
      },
      {
        question: 'What is the difference between percentage change and percentage points?',
        answer:
          'Percentage change is relative to the starting value, while percentage points are the simple arithmetic difference between two percentages.',
      },
      {
        question: 'Can the Percentage Calculator handle negative numbers?',
        answer:
          'Yes, it handles negative starting values, and the signed result shows whether the change is an increase or a decrease.',
      },
      {
        question: 'How do I calculate a percentage increase between two numbers?',
        answer:
          'Enter the old value and the new value in the change card; the tool shows the increase as a percentage plus the absolute difference.',
      },
      {
        question: 'How do I calculate a percentage decrease?',
        answer:
          'Enter the higher starting value and the lower new value, and the tool reports the decrease as a negative percentage.',
      },
      {
        question: 'Can I use the Percentage Calculator for exam scores?',
        answer:
          'Yes. Divide the marks obtained by the total marks and the tool shows the score as a percentage.',
      },
      {
        question: 'Does the Percentage Calculator show the absolute difference too?',
        answer:
          'Yes, alongside the percentage change it shows the absolute numeric difference between the two values.',
      },
      {
        question: 'Can I calculate a discount percentage with this tool?',
        answer:
          'Yes. Enter the original price and the sale price in the change card to see the discount as a percentage decrease.',
      },
      {
        question: 'Does the Percentage Calculator store my numbers?',
        answer:
          'No. All calculations happen locally in your browser, and nothing you enter is saved or sent to a server.',
      },
      {
        question: 'How accurate are the Percentage Calculator results?',
        answer:
          'Results use full floating-point precision before display rounding, so small decimal differences are handled correctly.',
      },
      {
        question: 'Can I use the Percentage Calculator for sales growth?',
        answer:
          'Yes, it is ideal for month-over-month sales, traffic, or conversion-rate growth, showing both the percentage and the absolute change.',
      },
      {
        question: 'What does a negative percentage change mean?',
        answer:
          'A negative result means the new value is lower than the old value — a decrease rather than an increase.',
      },
      {
        question: 'Can I calculate percentages with very large numbers?',
        answer:
          'Yes, the tool accepts large integers and decimals, and recalculates instantly as you type.',
      },
      {
        question: 'Do I need to press a button to calculate a percentage?',
        answer:
          'No. Results update automatically on every keystroke, with no page reload or submit click needed.',
      },
      {
        question: 'Can the Percentage Calculator find the original value from a percentage?',
        answer:
          'The three cards cover X% of Y, what percent X is of Y, and percentage change; for a reverse calculation, divide the known amount by the percentage as a decimal.',
      },
    ],
    howItWorks: [
      'The percentage calculator runs three independent formulas side by side. X% of Y multiplies Y by X divided by 100, X is what % of Y divides X by Y and multiplies by 100, and percentage change divides the difference by the absolute starting value.',
      'Percentage change uses the absolute value of the starting number as its denominator, so a move from −50 to −25 still reports a meaningful +50% change instead of a misleading negative figure. The signed result shows whether the value rose or fell.',
      'Every input accepts decimals and negative numbers, and each card recalculates on every keystroke with full floating-point precision. Results are rounded only for display, using up to six decimal places, so a figure like 33.333333% is shown rather than silently truncated to 33%.',
      'Zero denominators are guarded, not hidden: if the whole is zero in the what-percent card, or the starting value is zero in the change card, the tool shows a validation message instead of infinity or NaN.',
      'For a discount expressed as a percentage, the Discount & Margin Calculator applies the same change formula to prices and adds tax, while this tool stays focused on the pure percentage maths behind it.',
    ],
    supportedFormats: ['X% of Y', 'X is what % of Y', 'Percentage increase / decrease', 'Decimal percentages (e.g. 7.25%)', 'Negative starting values', 'Results to 6 decimal places'],
    limitations: [
      'Percentages describe relative change only; a 50% rise followed by a 50% fall does not return to the starting value, because the second change applies to a larger base.',
      'The tool cannot reverse-engineer an original price from a discounted price on its own — divide the known amount by the remaining percentage as a decimal to work backwards.',
      'Display rounding to six decimal places can hide tiny differences in very large numbers, so treat the last displayed digit as approximate when values run into the millions.',
    ],
  },
  'loan-emi-calculator': {
    instructions: [
      {
        title: 'Enter your loan details',
        description:
          'Specify Loan Principal, Annual Interest Rate (APR %), and Loan Tenure in months or years.',
      },
      {
        title: 'Choose the tenure unit',
        description:
          'Switch the tenure between years and months to match how your lender quotes the loan term.',
      },
      {
        title: 'Run the EMI calculation',
        description:
          'The EMI, total interest, and total repayment update instantly in your browser — no data is uploaded.',
      },
      {
        title: 'Review the EMI summary',
        description:
          'Inspect Monthly EMI, Total Interest Payable, Total Repayment, and Interest Share percentage.',
      },
      {
        title: 'Inspect the amortization schedule',
        description:
          'Toggle between Yearly Summary and Monthly Schedule to see how principal repayment accelerates over time.',
      },
      {
        title: 'Tip: compare a shorter loan term',
        description:
          'Try a shorter tenure to see how much total interest you could save, then copy the figures to compare loan offers side by side.',
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
        question: 'Why is early-month interest higher than later months in a loan EMI?',
        answer:
          'Interest each month is calculated on the remaining principal balance. As principal shrinks with every EMI payment, a larger portion of each fixed installment goes toward principal.',
      },
      {
        question: 'Does the Loan & EMI Calculator include lender origination fees or insurance?',
        answer:
          'No. The output reflects pure principal and interest repayment. Add financed fees to the Loan Principal field to model their repayment cost.',
      },
      {
        question: 'Is the Loan & EMI Calculator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser so your loan details are never uploaded.',
      },
      {
        question: 'What is EMI in a loan?',
        answer:
          'EMI stands for Equated Monthly Installment — the fixed amount you pay each month, covering both interest and a portion of the principal, until the loan is repaid.',
      },
      {
        question: 'How does the Loan & EMI Calculator handle a 0% interest loan?',
        answer:
          'It handles 0% promotional APR loans accurately without division errors, showing an EMI equal to the principal divided by the number of months.',
      },
      {
        question: 'Can I compare two loan offers with the Loan & EMI Calculator?',
        answer:
          'Yes. Run each offer through the calculator and compare the monthly EMI and total interest payable to see which costs less overall.',
      },
      {
        question: 'Does a shorter loan term reduce total interest?',
        answer:
          'Usually yes. A shorter term means a higher monthly EMI but far less total interest, because interest accrues over fewer months.',
      },
      {
        question: 'What is an amortization schedule?',
        answer:
          'It is a table showing, for each month or year, how much of your EMI goes to interest, how much to principal, and what balance remains.',
      },
      {
        question: 'Can I see my remaining loan balance after a year?',
        answer:
          'Yes. The amortization schedule shows the remaining principal after 12, 24, or 36 payments, or any other point in the term.',
      },
      {
        question: 'Does the Loan & EMI Calculator work for car loans?',
        answer:
          'Yes, it works for auto, personal, student, and business loans — any loan repaid in fixed monthly installments on a reducing balance.',
      },
      {
        question: 'Can I use the Loan & EMI Calculator for a home loan?',
        answer:
          'Yes, for the principal-and-interest part. For a full housing cost including tax, insurance, and PMI, use the Mortgage Calculator instead.',
      },
      {
        question: 'What happens if I make an extra payment on my loan?',
        answer:
          'Extra payments reduce the principal directly, which cuts future interest. This calculator models regular EMIs; add the extra amount to your planning separately.',
      },
      {
        question: 'Does the Loan & EMI Calculator store my loan details?',
        answer:
          'No. All calculations happen locally in your browser, and nothing you enter is saved or sent to a server.',
      },
      {
        question: 'Why does my EMI stay the same while the interest part changes?',
        answer:
          'The EMI is fixed, but each month interest is charged on a shrinking balance, so the interest share falls and the principal share rises.',
      },
      {
        question: 'Can I switch the loan tenure between years and months?',
        answer:
          'Yes, the calculator supports switching tenure units between years and months seamlessly.',
      },
      {
        question: 'Is the Loan & EMI Calculator financial advice?',
        answer:
          'No. It is a calculation tool that shows what the numbers would be under the inputs you enter; it is not financial advice, and you should check terms with your lender.',
      },
      {
        question: 'How do I use the Loan & EMI Calculator for a 0% installment plan?',
        answer:
          'Enter 0% as the annual rate and your term in months, and the tool will show the flat monthly payment with zero interest.',
      },
      {
        question: 'What should I enter as the loan principal?',
        answer:
          'Enter the amount you actually borrow. If fees are financed into the loan, add them to the principal to model their repayment cost.',
      },
      {
        question: 'Can the Loan & EMI Calculator show yearly and monthly schedules?',
        answer:
          'Yes, you can toggle between the Yearly Summary and the Monthly Schedule views to see repayment in either level of detail.',
      },
    ],
    howItWorks: [
      'The loan EMI calculator uses the standard reducing-balance formula: EMI equals P times r times (1 + r) to the power n, divided by (1 + r) to the power n minus 1, where P is the principal, r is the monthly rate (annual rate divided by 12 and by 100), and n is the number of monthly payments.',
      'Because the balance reduces each month, the interest part of every payment shrinks while the principal part grows. The tool builds the full schedule month by month: interest equals the remaining balance times the monthly rate, and the rest of the EMI repays principal.',
      'A 0% promotional rate is handled as a special case — the EMI is simply the principal divided by the number of months — so the tool never divides by zero. Tenure can be entered in years or months, and years are converted to months by multiplying by 12.',
      'The summary also shows total interest, total repayment, and the interest share of everything you pay. For a mortgage with a down payment, taxes, and insurance, the Mortgage Calculator extends the same formula with those extra monthly costs.',
    ],
    supportedFormats: ['Tenure in years or months', '0% promotional APR loans', 'Annual rates from 0% to 100%', 'Terms from 1 to 600 months', 'Monthly amortization schedule', 'Yearly amortization summary'],
    limitations: [
      'The EMI assumes a fixed interest rate for the whole term, so it does not model floating-rate loans, rate resets, or prepayments that change the schedule.',
      'Processing fees, insurance, late-payment charges, and taxes are not included, so the EMI covers the loan instalment only — always check the total cost of the loan, not just the monthly figure.',
      'Results are rounded to two decimal places for display, and the final payment is adjusted to clear the remaining balance, so the last instalment can differ from the standard EMI by a few cents.',
    ],
  },
  'mortgage-calculator': {
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
      {
        title: 'Run the mortgage calculation',
        description:
          'The monthly PITI payment updates instantly in your browser — no data is uploaded.',
      },
      {
        title: 'Review the payment breakdown',
        description:
          'Check the split between principal and interest, tax, insurance, HOA, and PMI, plus total interest over the full term.',
      },
      {
        title: 'Tip: test 20% down or a shorter term',
        description:
          'Try raising the down payment to 20% to remove PMI, or a 15-year term to see the interest saving, then copy the figures to compare options.',
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
        question: 'When does PMI apply to a mortgage?',
        answer:
          'Conventional mortgages typically charge Private Mortgage Insurance (PMI) when your down payment is below 20% (Loan-to-Value above 80%).',
      },
      {
        question: 'Does the Mortgage Calculator include closing costs?',
        answer:
          'No. Closing costs vary by region and lender (often 2%–5% of loan amount) and are paid upfront unless rolled into the loan principal.',
      },
      {
        question: 'Is the Mortgage Calculator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser so your home price and loan details are never uploaded.',
      },
      {
        question: 'How does a bigger down payment change my mortgage payment?',
        answer:
          'A bigger down payment lowers the loan principal, which reduces principal and interest — and at 20% down it can remove PMI entirely.',
      },
      {
        question: 'What is the difference between a 15-year and a 30-year mortgage?',
        answer:
          'A 15-year mortgage has higher monthly payments but much less total interest, while a 30-year mortgage has lower monthly payments and more total interest.',
      },
      {
        question: 'How is the Loan-to-Value (LTV) ratio calculated?',
        answer:
          'LTV is the loan amount divided by the home price, expressed as a percentage. A $360,000 loan on a $450,000 home is an 80% LTV.',
      },
      {
        question: 'Does the Mortgage Calculator include property tax?',
        answer:
          'Yes. Enter the annual property tax and the tool adds one twelfth of it to your monthly payment.',
      },
      {
        question: 'Does the Mortgage Calculator include homeowners insurance?',
        answer:
          'Yes. Enter the annual homeowners insurance premium and the tool adds one twelfth of it to the monthly total.',
      },
      {
        question: 'What are HOA dues in a mortgage calculation?',
        answer:
          'HOA dues are monthly fees charged by a homeowners association. Enter them separately and they are added to your total monthly housing cost.',
      },
      {
        question: 'Can I see my remaining mortgage balance after 5 or 10 years?',
        answer:
          'Yes, the annual balance-paydown schedule shows the remaining principal at each year of the loan term.',
      },
      {
        question: 'Does the Mortgage Calculator store my home price or loan details?',
        answer:
          'No. All calculations happen locally in your browser, and nothing you enter is saved or sent to a server.',
      },
      {
        question: 'Can I compare mortgage terms with this calculator?',
        answer:
          'Yes. Switch between 10-, 15-, 20-, and 30-year terms to compare monthly payments and total interest instantly.',
      },
      {
        question: 'How much total interest will I pay over the mortgage term?',
        answer:
          'The tool shows total interest over the full term, so you can see the true lifetime cost beyond the monthly payment.',
      },
      {
        question: 'What happens to PMI when my loan balance falls below 80% LTV?',
        answer:
          'In many conventional loans PMI can be removed once equity reaches 20%, but the rules depend on your lender and loan type, so confirm with them directly.',
      },
      {
        question: 'Is the Mortgage Calculator financial advice?',
        answer:
          'No. It is a calculation tool that shows what the numbers would be under the inputs you enter; it is not financial advice, and you should check terms with your lender.',
      },
      {
        question: 'Can I enter the down payment as a dollar amount or a percentage?',
        answer:
          'Yes, you can enter the down payment either way, and the tool reflects the Loan-to-Value ratio and loan principal automatically.',
      },
      {
        question: 'Does the Mortgage Calculator work for fixed-rate mortgages?',
        answer:
          'Yes, it models fixed-rate mortgages over 10-, 15-, 20-, and 30-year terms with a constant annual rate.',
      },
      {
        question: 'What should I enter for the mortgage interest rate?',
        answer:
          'Enter the annual rate your lender quotes, as a percentage. Small rate changes can move the monthly payment noticeably, so compare a few rates.',
      },
      {
        question: 'Can the Mortgage Calculator help me budget before house hunting?',
        answer:
          'Yes. Enter a realistic home price, down payment, rate, tax, and insurance to see the true monthly PITI cost before you start shopping.',
      },
    ],
    howItWorks: [
      'The mortgage calculator starts from the home price and your down payment percentage: the loan amount is the price minus the down payment. Principal and interest are then calculated with the same reducing-balance formula as the Loan & EMI Calculator, using the monthly rate and the term in months.',
      'Property tax and home insurance are annual figures, so each is divided by 12 and added to the monthly payment. HOA dues are already monthly and are added as entered, giving a complete estimated monthly payment rather than a principal-and-interest figure alone.',
      'Private mortgage insurance is estimated at 0.5% of the loan amount per year whenever the down payment is below 20% of the home price. At 20% down or more, PMI is zero, which is why a larger deposit can lower the monthly payment twice over.',
      'The breakdown separates principal and interest, taxes, insurance, HOA dues, and PMI, and the lifetime interest total shows what the loan costs beyond the borrowed amount over the full term.',
    ],
    supportedFormats: ['Down payment as a percentage (0–99.9%)', 'Terms from 1 to 50 years', 'Interest rates from 0% to 50% APR', 'Annual property tax and insurance', 'Monthly HOA dues', 'PMI estimate below 20% down'],
    limitations: [
      'The PMI figure is a flat 0.5%-per-year estimate, not an actual quote from a lender — real PMI depends on your credit score, loan type, and insurer, and it usually drops off once equity reaches 20%.',
      'Tax and insurance are treated as fixed annual amounts, but both can rise over a 30-year term, and the tool does not model escrow changes, rate adjustments, or extra principal payments.',
      'This is an estimate for planning, not a loan offer: closing costs, points, and lender fees are excluded, and the final payment depends on underwriting by the lender.',
    ],
  },
  'compound-interest-calculator': {
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
      {
        title: 'Run the growth projection',
        description:
          'The final balance updates instantly in your browser — no data is uploaded.',
      },
      {
        title: 'Review the year-by-year ledger',
        description:
          'Check each year’s contributions, interest earned, and running balance to see how growth accelerates over time.',
      },
      {
        title: 'Tip: test a higher monthly contribution',
        description:
          'Try adding $100 a month to see how much the final balance grows, then copy the figures to compare savings plans.',
      },
    ],
    examples: [
      {
        title: '20-year steady index investing projection',
        input: 'Initial: $10,000 · Monthly: $500 · Return: 7% · Years: 20 · Monthly Compounding',
        output: 'Final Balance: $300,850.56 · Contributions: $130,000 · Interest Earned: $170,850.56',
        explanation: 'Compound returns account for more than 56% of the ending portfolio value.',
      },
      {
        title: 'Pure lump-sum growth, no contributions',
        input: 'Initial: $10,000 · Monthly: $0 · Return: 10% · Years: 5 · Annual Compounding',
        output: 'Final Balance: $16,105.10 · Contributions: $10,000 · Interest Earned: $6,105.10',
        explanation: 'Matches the closed-form result 10,000 × 1.10^5 = $16,105.10.',
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
        question: 'How much difference does compounding frequency make in the Compound Interest Calculator?',
        answer:
          'At moderate interest rates, monthly compounding produces slightly more growth than annual compounding because interest starts earning interest sooner; daily vs monthly is typically a small fraction of a percent.',
      },
      {
        question: 'Does the Compound Interest Calculator account for taxes or inflation?',
        answer:
          'The calculator shows nominal pre-tax growth. To approximate real inflation-adjusted purchasing power, subtract expected annual inflation (for example 2.5%–3%) from your nominal return rate.',
      },
      {
        question: 'Are contributions assumed at the start or end of each month in the Compound Interest Calculator?',
        answer:
          'By default, contributions apply at the end of each month; you can toggle beginning-of-month timing inside the calculator options.',
      },
      {
        question: 'Is the Compound Interest Calculator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser so your savings figures are never uploaded.',
      },
      {
        question: 'What is compound interest?',
        answer:
          'Compound interest is interest earned on both your original principal and the interest already earned, so growth accelerates over time.',
      },
      {
        question: 'How is compound interest different from simple interest?',
        answer:
          'Simple interest is paid only on the principal, while compound interest is paid on principal plus accumulated interest, which grows the balance faster.',
      },
      {
        question: 'Can I project growth with monthly contributions?',
        answer:
          'Yes. Enter your monthly contribution and the tool adds it each month, compounding the growing balance over the full duration.',
      },
      {
        question: 'What return rate should I enter in the Compound Interest Calculator?',
        answer:
          'Enter the annual return you expect, as a percentage. It is a projection input, not a prediction — try a few rates to see a range of outcomes.',
      },
      {
        question: 'Does the Compound Interest Calculator show how much I contributed vs earned?',
        answer:
          'Yes, it separates total out-of-pocket contributions from earned compound interest, and shows both in the year-by-year ledger.',
      },
      {
        question: 'Can I compare monthly vs daily compounding?',
        answer:
          'Yes. Switch the compounding frequency between annual, quarterly, monthly, and daily to compare the final balance for each.',
      },
      {
        question: 'Can the Compound Interest Calculator help plan retirement savings?',
        answer:
          'Yes, it is ideal for long-term retirement or index-fund projections — enter your starting balance, monthly deposits, rate, and years to see the projected balance.',
      },
      {
        question: 'Does the Compound Interest Calculator store my savings figures?',
        answer:
          'No. All calculations happen locally in your browser, and nothing you enter is saved or sent to a server.',
      },
      {
        question: 'What happens if I increase my monthly contribution by $100?',
        answer:
          'The final balance grows by far more than the extra deposits alone, because each added dollar also earns compound interest over the remaining years.',
      },
      {
        question: 'Can I use the Compound Interest Calculator with no monthly contributions?',
        answer:
          'Yes. Set the monthly contribution to zero and the tool will project growth on your initial deposit alone.',
      },
      {
        question: 'Can I use the Compound Interest Calculator with no initial deposit?',
        answer:
          'Yes. Set the initial deposit to zero and enter a monthly contribution to project growth from regular deposits only.',
      },
      {
        question: 'Is the Compound Interest Calculator financial advice?',
        answer:
          'No. It is a projection tool that shows what the numbers would be under the return rate and inputs you enter; it is not financial advice.',
      },
      {
        question: 'How does the year-by-year schedule work?',
        answer:
          'The ledger lists each year’s starting balance, contributions, interest earned, and ending balance, so you can see growth year by year.',
      },
      {
        question: 'Why does growth accelerate in later years?',
        answer:
          'Because interest is earned on an ever-larger balance, the interest earned each year grows as the balance compounds.',
      },
      {
        question: 'Can I calculate compound interest for a high-yield savings account?',
        answer:
          'Yes. Enter the account’s annual rate and your deposit pattern to compare monthly vs daily compounding on your savings.',
      },
      {
        question: 'What does the final balance include?',
        answer:
          'The final balance includes your initial deposit, all monthly contributions, and all compound interest earned over the investment duration.',
      },
    ],
    howItWorks: [
      'The compound interest calculator simulates growth month by month rather than applying a single formula once. Each month your contribution is added to the balance first, then interest is applied, so new deposits start earning returns immediately.',
      'With monthly compounding, the balance grows by the annual rate divided by 12 each month. Quarterly compounding applies the annual rate divided by 4 every three months, annual compounding applies the full rate once a year, and daily compounding uses an effective monthly factor from the daily rate.',
      'The classic closed-form result matches the simulation when there are no monthly contributions: $10,000 at 10% compounded annually for 5 years grows to $16,105.10, because 10,000 times 1.10 to the power of 5 equals 16,105.10.',
      'The year-by-year table separates total contributed from interest earned, so you can see when compound growth overtakes your own deposits — usually the point where the interest column starts growing faster than the contributions column.',
    ],
    supportedFormats: ['Daily (365/yr) compounding', 'Monthly (12/yr) compounding', 'Quarterly (4/yr) compounding', 'Annual (1/yr) compounding', 'Monthly contributions', 'Horizons from 1 to 100 years'],
    limitations: [
      'The return rate is assumed constant every year, but real investments fluctuate — a 7% average can still include losing years, so the projection is a smooth scenario, not a forecast.',
      'Taxes, fees, and inflation are not included, so the final balance is a nominal pre-tax figure; in real terms its purchasing power will be lower after decades of inflation.',
      'Contributions are added at the start of each month in the simulation, which slightly raises the result versus end-of-month deposits — a small timing difference, not an error.',
    ],
  },
  'discount-margin-calculator': {
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
        title: 'Single discount with tax on the sale price',
        input: 'Original: $120 · Discount: 25% · Tax: 8%',
        output: 'Savings: $30.00 · Sale Price: $90.00 · Tax: $7.20 · Final Total: $97.20',
        explanation: 'Tax applies to the discounted $90, not the original $120, so 8% adds $7.20.',
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
    howItWorks: [
      'The discount & margin calculator has two modes. In sale-discount mode it subtracts the discount from the original price — savings equal price times discount percent divided by 100 — then adds tax on the discounted price, not the original.',
      'In profit-margin mode it works from cost and selling price: gross profit is selling price minus cost, margin is profit divided by selling price times 100, and markup is profit divided by cost times 100. Margin and markup answer different questions, so the tool shows both.',
      'Tax is always applied after the discount, which matches how most stores charge it: a $120 item at 25% off costs $90 before tax, and 8% tax on $90 adds $7.20, giving a $97.20 total.',
      'Discount and tax percentages are each capped at 100%, and negative prices are rejected, so the tool shows a validation message instead of a nonsensical negative total.',
    ],
    supportedFormats: ['Sale discount mode', 'Profit margin & markup mode', 'Optional tax on discounted price', 'Discount and tax from 0% to 100%', 'Decimal prices and percentages'],
    limitations: [
      'Only one discount percentage is applied per calculation — stacked coupons must be run as separate steps, feeding the first sale price back in as the new original price.',
      'Margin is calculated on the selling price and markup on the cost price, so the two numbers differ for the same product; quoting the wrong one can overstate profitability.',
      'The tool assumes a single flat tax rate and no rounding rules for cash payments, so totals may differ by a cent from a till that rounds to the nearest five cents.',
    ],
  },
  'vat-tax-calculator': {
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
          'Yes. The rate field accepts any positive decimal percentage, so rates like 7.25% or 8.875% calculate the tax and total exactly.',
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
    howItWorks: [
      'The VAT & sales tax calculator works in two directions. In add-tax mode the tax is the net amount times the rate divided by 100, and the gross total is net plus tax — so $1,000 at 20% becomes $1,200 with $200 of tax.',
      'In remove-tax mode the tool reverses the maths: the net amount is the gross total divided by 1 plus the rate, and the tax is gross minus net. Dividing $120 by 1.20 gives $100 net and $20 tax, not the $24 you would get by wrongly taking 20% of the gross.',
      'Rate presets cover 5%, 7%, 10%, 15%, 20%, and 21%, matching common VAT and sales-tax rates, but any rate from 0% to 100% can be typed in for a jurisdiction the presets do not cover.',
      'For a price that is first discounted and then taxed, run the discount in the Discount & Margin Calculator first, then enter the discounted price here so the tax is charged on the correct base.',
    ],
    supportedFormats: ['Add tax to a net amount', 'Remove (extract) tax from a gross amount', 'Rate presets: 5%, 7%, 10%, 15%, 20%, 21%', 'Custom rates from 0% to 100%', 'Decimal amounts and rates'],
    limitations: [
      'The tool applies one flat rate to the whole amount, so it cannot split a receipt across mixed rates, exemptions, or zero-rated items — those need separate calculations per line.',
      'Tax rules differ by country and by product, and rates change; the presets are common values, not legal advice, so confirm the rate that applies to your sale before invoicing.',
      'Results are rounded to two decimal places, and extracting tax from a rounded gross total can leave a one-cent difference versus the original invoice.',
    ],
  },
  'salary-calculator': {
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
    howItWorks: [
      'The salary & paycheck converter first turns any pay frequency into an annual gross figure. Hourly pay multiplies by hours per week times weeks per year, daily pay assumes five working days a week, weekly pay multiplies by weeks per year, biweekly by half that, and monthly by 12.',
      'Hours per week and weeks per year are your own inputs, defaulting to 40 and 52, so a 2,080-hour full-time year is the baseline but part-time schedules and unpaid leave can be modelled by lowering either number.',
      'Every row in the table — hourly, daily, weekly, biweekly, monthly, and annual — is then derived from the same annual gross, so the figures always agree with each other instead of being rounded independently.',
      'Estimated net pay applies a single flat tax rate to each gross figure: net equals gross times one minus the tax rate divided by 100. The default 22% is only a starting point — replace it with your own effective rate.',
      'If you track working hours with the Time Duration Calculator, its weekly total plugs straight into the hours-per-week field here, turning logged time into a pay figure.',
    ],
    supportedFormats: ['Hourly, daily, weekly, biweekly, monthly, annual pay', 'Custom hours per week (up to 168)', 'Custom weeks per year (up to 52.2)', 'Effective tax rate from 0% to 99%', 'Gross and estimated net side by side'],
    limitations: [
      'The tax figure is a single flat percentage, not a real tax calculation — it ignores brackets, allowances, deductions, pensions, and social-security contributions, so net pay is an estimate.',
      'Daily pay assumes a five-day working week and no overtime, bonuses, or shift premiums, so irregular schedules will not match the table exactly.',
      'Unpaid leave is only modelled through the weeks-per-year input, and the tool cannot split a year into paid and unpaid periods.',
    ],
  },
  'tip-calculator': {
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
      {
        title: 'Rounding the total up for a cash payment',
        input: 'Bill: $84.50 · Tip: 18% · People: 2 · Rounding: Total up',
        output: 'Tip: $15.50 · Total: $100.00 · Per Person: $50.00 · Effective tip: 18.3%',
        explanation: 'Unrounded total $99.71 rounds up to $100, so the tip becomes $15.50 instead of $15.21.',
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
    howItWorks: [
      'The tip & bill split calculator multiplies the bill by the tip percentage divided by 100 to get the tip, then adds it to the bill for the total. An $84.50 bill at 18% gives a $15.21 tip and a $99.71 total.',
      'Splitting divides the total evenly by the number of people, from 1 to 100. The tool also shows the tip per person, so each guest can see their share of the gratuity as well as their share of the bill.',
      'Two rounding modes change how the split is calculated. Rounding the total up raises the whole bill to the next dollar and recomputes the tip from the new total; rounding per person up raises each share to the next dollar, which can push the effective tip above the percentage you chose.',
      'The effective tip percentage is recalculated after any rounding, so you can see exactly what rate you actually paid — useful when a rounded-up total quietly turns an 18% tip into 19% or more.',
      'Tip percentages are just percentages, so the Percentage Calculator can check the same maths from the other direction, for example working out what percentage a fixed tip amount represents.',
    ],
    supportedFormats: ['Tip presets: 10%, 15%, 18%, 20%, 25%', 'Custom tip from 0% to 200%', 'Split between 1 and 100 people', 'No rounding, round total up, round per person up', 'Effective tip % after rounding'],
    limitations: [
      'The tip is calculated on the pre-tax bill total you enter, so if your bill already includes tax or a service charge, the tip will be slightly higher than a tip on the food alone.',
      'Rounding per person up can raise the effective tip noticeably on small bills split many ways, because each round-up compounds across the group.',
      'The tool does not know local tipping customs or whether a service charge is already included, so check the receipt before adding a tip on top of one.',
    ],
  },
  'bmi-calculator': {
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
      {
        title: 'Imperial adult BMI check',
        input: 'Height: 5 ft 11 in · Weight: 176 lbs',
        output: 'BMI: 24.5 kg/m² · WHO Category: Normal weight (133 – 179 lbs)',
        explanation: 'Converts 71 in to 1.80 m and 176 lbs to 79.8 kg, then applies kg / m².',
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
    howItWorks: [
      'The BMI calculator divides weight in kilograms by height in metres squared — BMI equals kg divided by m². For 180 cm and 80 kg that is 80 divided by 1.8 squared, giving 24.7, which sits inside the WHO normal range.',
      'Imperial inputs are converted first: inches are multiplied by 0.0254 to get metres and pounds by 0.45359237 to get kilograms, so the same formula works in both unit systems without a separate imperial equation.',
      'The result is classified with the standard WHO bands: below 18.5 is underweight, 18.5 to 24.9 is normal weight, 25 to 29.9 is overweight, and 30 or above is obesity. The boundary values sit in the higher band, so exactly 25.0 counts as overweight.',
      'The healthy weight range shown beside your result is the same formula run backwards: 18.5 times height squared gives the lightest healthy weight, and 24.9 times height squared gives the heaviest, in kilograms or pounds to match your units.',
      'BMI is only a screening number, so the Calorie & TDEE Calculator pairs naturally with it: once you know your category, it estimates the daily calories that maintain, lose, or gain weight.',
    ],
    supportedFormats: ['Metric: centimetres and kilograms', 'Imperial: feet, inches, and pounds', 'WHO classification bands', 'Healthy weight range in kg or lbs', 'Heights from 20 to 110 inches', 'Weights from 30 to 1,100 lbs'],
    limitations: [
      'BMI cannot tell muscle from fat, so athletes and very muscular people can score as overweight while carrying little body fat, and older adults can score as normal while carrying more fat than is healthy.',
      'The WHO bands are population averages and do not adjust for age, sex, ethnicity, or pregnancy, so a single number is never a diagnosis on its own.',
      'Height and weight are rounded only for display, but a small measuring error — a centimetre of height or half a kilo of weight — can shift the BMI by a few tenths near a band boundary.',
    ],
  },
  'calorie-calculator': {
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
        title: 'Set your weight goal',
        description:
          'Choose maintenance, mild deficit, standard fat loss, or lean gain to see the daily calorie target that matches your goal.',
      },
      {
        title: 'Review daily calorie targets',
        description:
          'Compare Maintenance TDEE, Mild/Standard Weight Loss deficits, Lean Gain surplus, and reference macro grams.',
      },
      {
        title: 'Check your macro gram targets',
        description:
          'Read the protein, carbohydrate, and fat gram references for your chosen calorie target and adjust them to fit your diet.',
      },
      {
        title: 'Save and recheck your numbers',
        description:
          'Note your targets, re-run the calculation if your weight or activity changes, and track real weight trends for 2 to 3 weeks before adjusting intake.',
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
      {
        question: 'What is BMR and how is it different from TDEE?',
        answer:
          'BMR is the energy your body uses at complete rest to keep basic functions running. TDEE adds the calories burned through daily movement and exercise to your BMR.',
      },
      {
        question: 'What does the Calorie Calculator do with my age, height, and weight?',
        answer:
          'It feeds them into the Mifflin-St Jeor equation to estimate your BMR, then multiplies that by your activity level to estimate your TDEE and daily calorie targets.',
      },
      {
        question: 'How do I choose the right activity level in the Calorie Calculator?',
        answer:
          'Pick the level that matches a typical week, not your busiest day. Most desk workers who exercise a few times a week fall under Lightly or Moderately Active.',
      },
      {
        question: 'What is a safe calorie deficit for weight loss?',
        answer:
          'A common starting point is a 250 to 500 kcal daily deficit, which aims for gradual loss of about 0.25 to 0.5 kg per week. Larger deficits should be discussed with a health professional.',
      },
      {
        question: 'How many calories should I eat to gain weight leanly?',
        answer:
          'The tool shows a Lean Gain surplus above your maintenance TDEE as a starting target. Track your weight for a few weeks and adjust the surplus up or down based on actual change.',
      },
      {
        question: 'Why does the Calorie Calculator show a 1,200 kcal floor notice?',
        answer:
          'Very low calorie targets can be unsafe and hard to sustain, so the tool flags deficits that fall below 1,200 kcal to raise safety awareness.',
      },
      {
        question: 'What are the macro targets shown by the Calorie Calculator?',
        answer:
          'They are reference gram amounts for protein, carbohydrates, and dietary fat that add up to your chosen daily calorie target. They are a starting split, not a prescribed diet.',
      },
      {
        question: 'Does the Calorie Calculator work for Metric and Imperial units?',
        answer:
          'Yes. You can enter height and weight in centimeters and kilograms, or in feet, inches, and pounds, and the results are the same.',
      },
      {
        question: 'Can I use the Calorie Calculator if I am very active or an athlete?',
        answer:
          'Yes, the Extra Active level covers heavy physical work or intense daily training, but athletes with unusual body composition may find the estimate less accurate.',
      },
      {
        question: 'Why did my TDEE change when I changed my activity level?',
        answer:
          'TDEE is your BMR multiplied by an activity factor, so a higher activity level raises the multiplier and therefore raises your estimated daily calorie needs.',
      },
      {
        question: 'How often should I recalculate my calories?',
        answer:
          'Recalculate whenever your weight, activity level, or goal changes, or roughly every 4 to 8 weeks while you are actively losing or gaining weight.',
      },
      {
        question: 'Does the Calorie Calculator store or upload my personal data?',
        answer:
          'No. All calculations run locally in your browser, and your age, height, weight, and activity choices are never uploaded or saved to a server.',
      },
      {
        question: 'Is the Calorie Calculator free to use?',
        answer:
          'Yes, it is completely free to use in your browser, with no account, no sign-up, and no limit on how often you recalculate.',
      },
      {
        question: 'Can the Calorie Calculator help me plan a 500 kcal deficit?',
        answer:
          'Yes. The Standard Weight Loss target subtracts about 500 kcal per day from your maintenance TDEE, which is aimed at roughly 0.5 kg of loss per week.',
      },
      {
        question: 'What should I do if my weight does not change after following the target?',
        answer:
          'First check that your activity level and food tracking are honest and consistent for 2 to 3 weeks. If weight still does not move, adjust intake by 100 to 200 kcal and keep tracking.',
      },
      {
        question: 'Does the Calorie Calculator account for body fat percentage?',
        answer:
          'No. The Mifflin-St Jeor equation uses age, sex, height, and total body weight only, so it cannot distinguish muscle from body fat.',
      },
      {
        question: 'Can teenagers or older adults use the Calorie Calculator?',
        answer:
          'The formula was designed for adults, so results for teenagers or much older adults are rough estimates only. Young people should get nutrition guidance from a parent and a health professional.',
      },
    ],
    howItWorks: [
      'The calorie calculator first estimates basal metabolic rate with the Mifflin-St Jeor equation: 10 times weight in kilograms, plus 6.25 times height in centimetres, minus 5 times age, plus 5 for men or minus 161 for women.',
      'Maintenance calories (TDEE) multiply BMR by an activity factor: 1.2 sedentary, 1.375 lightly active, 1.55 moderately active, 1.725 very active, and 1.9 extra active.',
      'Weight-loss targets subtract 250 kcal for a mild loss and 500 kcal for about 0.5 kg per week, with a floor of 1,200 kcal; lean gain adds 250 kcal instead.',
      'The macro split at maintenance is 30% protein, 40% carbohydrates, and 30% fat, converted at 4 kcal per gram for protein and carbohydrate and 9 for fat.',
    ],
    supportedFormats: ['Metric: centimetres and kilograms', 'Imperial: feet, inches, and pounds', 'Male and female BMR formulas', 'Five activity levels (1.2×–1.9×)', 'Loss, maintenance, and lean-gain targets', 'Macro split in grams (30/40/30)'],
    limitations: [
      'Mifflin-St Jeor estimates an average person, so it can miss by 10% or more for very muscular, very lean, or older bodies, which it cannot distinguish.',
      'Activity factors are broad categories, not measured expenditure — a desk worker who trains hard can fall between two levels, and TDEE may be off by a few hundred calories.',
      'The 1,200 kcal floor is a general guardrail, not medical advice; anyone with a medical condition or pregnancy should consult a clinician before restricting calories.',
    ],
  },
  'date-difference-calculator': {
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
        title: 'Swap dates if needed',
        description:
          'Use the swap button to reverse the start and end dates instantly if you entered them the wrong way round.',
      },
      {
        title: 'Inspect calendar breakdown',
        description:
          'Review Years/Months/Days, total calendar days, weeks, weekdays (Mon–Fri), weekend days, and hours.',
      },
      {
        title: 'Check weekdays and weekend days',
        description:
          'Read the weekday and weekend counts separately to plan workdays, billing days, or trip lengths.',
      },
      {
        title: 'Copy or reuse the result',
        description:
          'Copy the breakdown for contracts, schedules, or messages, and re-run the calculation with the inclusive end-date option if your count looks one day short.',
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
      {
        question: 'How does the Date Difference Calculator count days between two dates?',
        answer:
          'It measures the exact calendar span between the two dates using UTC date arithmetic, then breaks the span into years, months, and remaining days plus total days and weeks.',
      },
      {
        question: 'Does the Date Difference Calculator include the start date in the total?',
        answer:
          'By default it does not, so Monday to Friday counts as 4 elapsed days. Turn on the inclusive end-date option when you want both the start and end dates counted.',
      },
      {
        question: 'What is the difference between calendar days and weekdays in this tool?',
        answer:
          'Calendar days count every day in the span, while weekdays count only Monday through Friday. Weekend days are shown separately so you can see both totals at once.',
      },
      {
        question: 'Can the Date Difference Calculator count weekend days separately?',
        answer:
          'Yes. The breakdown lists total weekend days (Saturdays and Sundays) alongside weekdays, so you can plan trips, shifts, or deadlines that span weekends.',
      },
      {
        question: 'How does the Date Difference Calculator handle leap years?',
        answer:
          'It uses real calendar arithmetic, so February 29 is counted in leap years and spans crossing February in a leap year include the extra day automatically.',
      },
      {
        question: 'Can I use the Date Difference Calculator to find how many days until a date?',
        answer:
          'Yes. Set the start date to today and the end date to your target date, and the total days result tells you exactly how many days remain.',
      },
      {
        question: 'Does the Date Difference Calculator work across different years?',
        answer:
          'Yes. You can compare dates years apart, and the result breaks the span into full years, remaining months, and remaining days.',
      },
      {
        question: 'What happens if the end date is before the start date?',
        answer:
          'Use the swap button to reverse the two dates. The tool is designed to compare a start date with a later end date, so swapping gives you the correct positive span.',
      },
      {
        question: 'Can I add years, months, and days to a date at the same time?',
        answer:
          'Yes. In Add / Subtract mode you can enter a combination of years, months, and days, and the tool applies the whole interval to your reference date in one step.',
      },
      {
        question: 'Does the Date Difference Calculator adjust for daylight saving time?',
        answer:
          'Yes, in effect. It uses UTC calendar arithmetic, so the 23-hour and 25-hour days around daylight saving changes cannot shift the result by a day.',
      },
      {
        question: 'How do I count business days for a project deadline?',
        answer:
          'Enter the project start and end dates and read the weekday count, which is Monday through Friday. Remember that public holidays are not subtracted, so adjust the count if holidays fall inside the span.',
      },
      {
        question: 'Is the Date Difference Calculator free to use?',
        answer:
          'Yes, it is completely free to use in your browser, with no account, no sign-up, and no limit on how many date spans you calculate.',
      },
      {
        question: 'Does the Date Difference Calculator save or upload my dates?',
        answer:
          'No. All calculations run locally in your browser, and the dates you enter are never uploaded or stored on a server.',
      },
      {
        question: 'Can I calculate the difference between dates in different time zones?',
        answer:
          'The tool compares calendar dates, not times of day, so time zones do not change the result. Pick the dates as they appear on each local calendar.',
      },
      {
        question: 'What does the inclusive end date option change in the result?',
        answer:
          'It adds exactly one calendar day to the total, so an inclusive Monday-to-Friday count becomes 5 days instead of 4. The years, months, and days breakdown updates to match.',
      },
      {
        question: 'Can the Date Difference Calculator add 90 days to a contract date?',
        answer:
          'Yes. Choose Add / Subtract, enter the contract date, add 90 days, and the tool shows the exact resulting date, including month and year rollover.',
      },
      {
        question: 'Why does February sometimes change my month addition result?',
        answer:
          'Adding months clamps to the last valid day of the target month, so January 31 plus one month lands on February 28 or 29 instead of March 2 or 3.',
      },
    ],
    howItWorks: [
      'Both dates are parsed as UTC midnight timestamps, so daylight-saving transitions can never add or remove an hour from the gap. Total days are the timestamp difference divided by 86,400,000 milliseconds per day.',
      'The calendar breakdown counts whole years and months first, borrowing days from the previous month when the end day is smaller, using the real length of each month.',
      'Weekdays and weekends are counted from full weeks of five weekdays and two weekend days, plus each leftover day checked in turn.',
      'The inclusive-end toggle adds one day, so Monday to Friday counts five days instead of four. Without it, two identical dates differ by zero.',
      'A second mode adds or subtracts years, months, and days from a base date, clamping the day when the target month is shorter — January 31 plus one month lands on February 28.',
    ],
    supportedFormats: ['Difference between two dates', 'Add / subtract years, months, days', 'Inclusive-end toggle', 'Weekday / weekend split', 'Total days, weeks, and months'],
    limitations: [
      'Public holidays are not excluded, so the weekday count is a calendar count, not a working-day count — subtract local holidays separately for project planning.',
      'Dates are treated as whole days with no time component, so two timestamps on the same date always differ by zero even if they are hours apart.',
      'The tool applies modern Gregorian calendar rules to every date, so spans crossing the 1582 calendar reform or other historical changes will not match historical records.',
    ],
  },
  'time-duration-calculator': {
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
        title: 'Enable overnight rollover for night shifts',
        description:
          'Turn on the overnight option when the end time is earlier than the start time so a shift crossing midnight is counted correctly.',
      },
      {
        title: 'Review the net duration breakdown',
        description:
          'Check HH:MM:SS, total minutes, total seconds, and decimal hours together before using the result.',
      },
      {
        title: 'Copy HH:MM:SS or decimal hours',
        description:
          'Use HH:MM:SS for logs or Decimal Hours (e.g. 7.50 hr) for invoicing and payroll sheets.',
      },
      {
        title: 'Fix a result that looks wrong',
        description:
          'If the total looks too short, check the break length and the overnight toggle first, then confirm the start and end times are not swapped.',
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
      {
        question: 'What does the Time Duration Calculator measure?',
        answer:
          'It measures the elapsed time between two clock times, or the total of several duration rows, and shows the result in HH:MM:SS, decimal hours, minutes, and seconds.',
      },
      {
        question: 'How do I enter times in the Time Duration Calculator?',
        answer:
          'Enter a start time and an end time in hours, minutes, and seconds. In Add Durations mode, enter each block as its own row instead.',
      },
      {
        question: 'How does the Time Duration Calculator deduct an unpaid break?',
        answer:
          'It subtracts the break minutes you enter from the elapsed shift time, so an 8.5-hour shift with a 30-minute break gives 8.00 net hours.',
      },
      {
        question: 'What happens if my break is longer than my shift?',
        answer:
          'The tool prevents a break deduction greater than the total elapsed shift length, so the net duration cannot go below zero.',
      },
      {
        question: 'Can the Time Duration Calculator handle shifts that start before midnight and end after it?',
        answer:
          'Yes. Enable overnight rollover so an end time earlier than the start time is treated as the next day, and the full night shift is counted.',
      },
      {
        question: 'What is the difference between elapsed time and net duration?',
        answer:
          'Elapsed time is the full span from start to end. Net duration is the elapsed time minus any unpaid break, which is the figure usually billed or paid.',
      },
      {
        question: 'How do I add several separate work blocks together?',
        answer:
          'Switch to Add Timesheet Durations mode, add one row per work block with its hours, minutes, and seconds, and the tool totals all rows at once.',
      },
      {
        question: 'Can I use the Time Duration Calculator for video or audio runtimes?',
        answer:
          'Yes. Add each episode, lecture, or track length as a row in Add Durations mode to get the combined runtime for a playlist or course.',
      },
      {
        question: 'Does the Time Duration Calculator round minutes or seconds?',
        answer:
          'No, it calculates from exact seconds and shows the precise HH:MM:SS result alongside the decimal hour equivalent, so nothing is silently rounded away.',
      },
      {
        question: 'What does 7.75 decimal hours mean in hours and minutes?',
        answer:
          'It means 7 hours and 45 minutes. The part after the decimal point is a fraction of an hour, so 0.75 of an hour equals 45 minutes.',
      },
      {
        question: 'Is the Time Duration Calculator free to use?',
        answer:
          'Yes, it is completely free to use in your browser, with no account, no sign-up, and no limit on how many durations you calculate.',
      },
      {
        question: 'Does the Time Duration Calculator store or upload my times?',
        answer:
          'No. All calculations run locally in your browser, and the times and durations you enter are never uploaded or stored on a server.',
      },
      {
        question: 'Can I calculate duration across more than one day?',
        answer:
          'Yes. The Add Durations mode totals hours without wrapping at 24, and it also shows how many 24-hour days the total equals.',
      },
      {
        question: 'Why does my shift show a negative or zero duration?',
        answer:
          'That usually means the end time is earlier than the start time without overnight rollover enabled, or the break is as long as the shift. Check the overnight toggle and the break length first.',
      },
      {
        question: 'How do I convert minutes into decimal hours with this tool?',
        answer:
          'Enter the time as a duration row or use the elapsed result, and read the decimal hours figure. For example, 90 minutes shows as 1.50 decimal hours.',
      },
      {
        question: 'Can the Time Duration Calculator add times in HH:MM:SS format?',
        answer:
          'Yes. Each duration row accepts hours, minutes, and seconds, and the total is shown back in HH:MM:SS as well as decimal hours.',
      },
      {
        question: 'What should I check if my timesheet total does not match my hours?',
        answer:
          'Check that every row was entered in the right mode, that no break was counted twice, and that overnight shifts have the rollover option enabled.',
      },
    ],
    howItWorks: [
      'The time duration calculator converts every time into seconds since midnight — hours times 3,600 plus minutes times 60 plus seconds — then subtracts, so the maths never depends on clock arithmetic.',
      'In between-times mode, an end time earlier than the start is treated as an overnight shift when rollover is on: 24 hours are added, so 22:00 to 06:00 measures 8 hours. With rollover off, the tool shows an error.',
      'A break deduction in minutes is subtracted from the elapsed time, and the tool rejects a break longer than the shift itself. The result is shown as hours, minutes, and seconds, plus decimal hours and total minutes for payroll use.',
      'In add-durations mode, any number of labelled rows can be summed — morning and afternoon sessions, for example — and the total is shown in the same formats, including a 24-hour-day equivalent for long totals.',
      'For converting the result into pay, the Salary & Paycheck Converter takes the decimal-hours figure and turns it into hourly, weekly, and monthly earnings.',
    ],
    supportedFormats: ['Time between two times (HH:MM:SS)', 'Overnight rollover past midnight', 'Break deduction in minutes (0–1,440)', 'Add multiple durations', 'Decimal hours and total minutes', '24-hour-day equivalent'],
    limitations: [
      'The tool works with times of day, not dates, so a shift longer than 24 hours cannot be entered in between-times mode — use the add-durations mode for multi-day totals.',
      'Seconds are optional in the input, and a missing seconds field is treated as zero, so durations are exact only to the precision you type.',
      'Breaks are a single flat deduction, so split breaks, paid breaks, and overtime thresholds are not modelled — subtract the minutes of each break in one total.',
    ],
  },
  'unit-converter': {
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
        title: 'Swap the conversion direction',
        description:
          'Click Swap to reverse the From and To units instantly without retyping the value.',
      },
      {
        title: 'Read the exact converted result',
        description:
          'Check the formatted target value, including decimals, before copying it into your document or calculation.',
      },
      {
        title: 'Copy result or scan all units',
        description:
          'Copy the formatted target output or read the equivalent values table across every unit in the family.',
      },
      {
        title: 'Check storage or temperature quirks',
        description:
          'For storage, confirm whether you need decimal GB or binary GiB, and for temperature, note that values below absolute zero are blocked.',
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
      {
        question: 'What units can the Unit Converter convert?',
        answer:
          'It covers seven families: Length, Weight and Mass, Temperature, Area, Volume, Speed, and Digital Storage, with many units inside each family.',
      },
      {
        question: 'How accurate are the Unit Converter results?',
        answer:
          'Results use exact international NIST and SI conversion constants, such as 1 inch equals 0.0254 meters exactly, so the math is as precise as the value you enter.',
      },
      {
        question: 'Is the Unit Converter free to use?',
        answer:
          'Yes, it is completely free to use in your browser, with no account, no sign-up, and no limit on how many conversions you run.',
      },
      {
        question: 'How do I convert kilometers to miles with the Unit Converter?',
        answer:
          'Pick the Length category, enter your kilometers, choose kilometers as the From unit and miles as the To unit, and the converted value appears instantly.',
      },
      {
        question: 'How do I convert kilograms to pounds?',
        answer:
          'Pick the Weight and Mass category, enter the kilograms, choose kilograms as the From unit and pounds as the To unit, and read the result or the full comparison table.',
      },
      {
        question: 'What is the difference between a liter and a US gallon?',
        answer:
          'A liter is a metric volume unit, while a US gallon is a US Customary liquid unit equal to 3.785411784 liters exactly. The converter uses that exact factor.',
      },
      {
        question: 'Can the Unit Converter convert Celsius to Fahrenheit and Kelvin?',
        answer:
          'Yes. Pick the Temperature category and choose any pair of Celsius, Fahrenheit, and Kelvin, and the tool converts between them using the standard formulas.',
      },
      {
        question: 'Why does 1 TB show as about 931 GiB in the Unit Converter?',
        answer:
          'A 1 TB drive holds 1,000 GB in decimal terms, but operating systems often report binary Gibibytes, and 1,000 GB equals about 931 GiB because each GiB is 1,024³ bytes.',
      },
      {
        question: 'Does the Unit Converter work offline in my browser?',
        answer:
          'Yes. All conversions run locally in your browser with built-in constants, so no internet connection or upload is needed once the page has loaded.',
      },
      {
        question: 'Does the Unit Converter save or upload my numbers?',
        answer:
          'No. Every conversion runs locally in your browser, and the values you enter are never uploaded or stored on a server.',
      },
      {
        question: 'Can I convert speed between km/h and mph?',
        answer:
          'Yes. Pick the Speed category, enter the value in km/h, choose mph as the To unit, and the tool converts it instantly.',
      },
      {
        question: 'How do I convert square meters to square feet?',
        answer:
          'Pick the Area category, enter the square meters, choose square meters as the From unit and square feet as the To unit, and the converted area appears right away.',
      },
      {
        question: 'What is the difference between decimal KB and binary KiB?',
        answer:
          'A decimal kilobyte (KB) is 1,000 bytes, while a binary kibibyte (KiB) is 1,024 bytes. The converter keeps both systems separate so storage sizes are never mixed up.',
      },
      {
        question: 'Can the Unit Converter handle very large or very small numbers?',
        answer:
          'Yes. You can enter large values such as thousands of kilometers or tiny values such as fractions of a millimeter, and the result is shown with full decimal precision.',
      },
      {
        question: 'Which temperature scale should I use for cooking or weather?',
        answer:
          'Most recipes and weather reports outside the US use Celsius, while US recipes and weather use Fahrenheit. Kelvin is used mainly in science and lab work.',
      },
      {
        question: 'How do I convert milliliters to cups for a recipe?',
        answer:
          'Pick the Volume category, enter the milliliters, choose milliliters as the From unit and US cups as the To unit, and the tool gives the cup equivalent for your recipe.',
      },
      {
        question: 'Why do my converted values show many decimal places?',
        answer:
          'The tool shows full precision so engineering and science work stays accurate. For everyday use, simply round the result to the decimals you need.',
      },
    ],
    howItWorks: [
      'Every conversion routes through a base unit: the input is multiplied by its factor to the base, then divided by the factor of the target unit. Length uses metres, weight uses kilograms, and storage uses bytes.',
      'Temperature is the exception, because its scales have different zero points: Celsius to Fahrenheit uses F equals C times 9/5 plus 32, and Kelvin shifts by 273.15, so the tool applies offset formulas instead of plain multiplication.',
      'Digital storage keeps decimal and binary units separate: kilobytes, megabytes, and gigabytes use powers of 1,000, while kibibytes, mebibytes, and gibibytes use powers of 1,024. That is why 1,000 GB shows as 931.32 GiB.',
      'Volume units are US customary — fluid ounces, cups, pints, quarts, and gallons — so a UK pint or imperial gallon will not match.',
    ],
    supportedFormats: ['Length: mm, cm, m, km, in, ft, yd, mi', 'Weight: mg, g, kg, tonne, oz, lb, st', 'Temperature: °C, °F, K', 'Area: cm², m², ha, km², ft², yd², acre, mi²', 'Volume: mL, L, m³, fl oz, cup, pt, qt, gal (US)', 'Speed: m/s, km/h, mph, kn, ft/s', 'Digital storage: B, KB, MB, GB, TB, KiB, MiB, GiB'],
    limitations: [
      'The converter handles seven categories only — length, weight, temperature, area, volume, speed, and digital storage — so currencies, time zones, and cooking measures like tablespoons are out of scope.',
      'All factors are exact defined constants, but display rounding can hide the last digits on very large or very small results, so treat the final digit as approximate.',
      'US customary volume units are used throughout, and the tool does not convert between US and imperial gallons or pints — check which system your recipe or manual uses first.',
    ],
  },
  'roman-numeral-converter': {
    instructions: [
      {
        title: 'Choose a conversion mode',
        description:
          'Pick Number to Roman, Roman to Number, or Date to Roman at the top of the tool.',
      },
      {
        title: 'Enter a whole number from 1 to 3999',
        description:
          'In Number to Roman mode, type a whole number — the Roman numeral appears instantly, with no submit button.',
      },
      {
        title: 'Or type a Roman numeral',
        description:
          'In Roman to Number mode, type the numeral using I, V, X, L, C, D and M. Lowercase works too.',
      },
      {
        title: 'Or enter a date',
        description:
          'In Date to Roman mode, enter the day, month and year, then choose DD/MM/YYYY, MM/DD/YYYY or YYYY-MM-DD.',
      },
      {
        title: 'Read the result instantly',
        description:
          'The converted value appears right away in your browser — no page reload, no data uploaded.',
      },
      {
        title: 'Copy your result or fix an error',
        description:
          'Copy the Roman numeral to paste into a document, card or design. If a red message appears, the input is out of range or not a valid numeral.',
      },
    ],
    examples: [
      {
        title: 'One',
        input: '1',
        output: 'I',
        explanation: 'The first Roman numeral.',
      },
      {
        title: 'Four uses subtraction',
        input: '4',
        output: 'IV',
        explanation: 'One before five — never IIII.',
      },
      {
        title: 'Nine uses subtraction',
        input: '9',
        output: 'IX',
        explanation: 'One before ten — never VIIII.',
      },
      {
        title: 'Fourteen',
        input: '14',
        output: 'XIV',
        explanation: 'X + IV.',
      },
      {
        title: 'Forty',
        input: '40',
        output: 'XL',
        explanation: 'Ten before fifty — never XXXX.',
      },
      {
        title: 'Ninety-nine',
        input: '99',
        output: 'XCIX',
        explanation: 'XC + IX.',
      },
      {
        title: 'Four hundred',
        input: '400',
        output: 'CD',
        explanation: 'One hundred before five hundred.',
      },
      {
        title: 'Nine hundred',
        input: '900',
        output: 'CM',
        explanation: 'One hundred before one thousand.',
      },
      {
        title: 'A classic year: 1984',
        input: '1984',
        output: 'MCMLXXXIV',
        explanation: 'M + CM + LXXX + IV.',
      },
      {
        title: 'A recent year: 2024',
        input: '2024',
        output: 'MMXXIV',
        explanation: 'MM + XX + IV.',
      },
      {
        title: 'This year: 2026',
        input: '2026',
        output: 'MMXXVI',
        explanation: 'MM + XX + VI.',
      },
      {
        title: 'The largest supported number',
        input: '3999',
        output: 'MMMCMXCIX',
        explanation: 'MMM + CM + XC + IX.',
      },
      {
        title: 'Reading a year back: 1994',
        input: 'MCMXCIV',
        output: '1994',
        explanation: 'M + CM + XC + IV.',
      },
      {
        title: 'Reading a small numeral back',
        input: 'XIV',
        output: '14',
        explanation: 'X + IV.',
      },
      {
        title: 'Reading a year back: 2026',
        input: 'MMXXVI',
        output: '2026',
        explanation: 'MM + XX + VI.',
      },
      {
        title: 'A birthday in Roman numerals',
        input: '27/11/2026',
        output: 'XXVII/XI/MMXXVI',
        explanation: 'Day 27 = XXVII, month 11 = XI, year 2026 = MMXXVI.',
      },
      {
        title: 'A Valentine’s Day date',
        input: '14/02/2025',
        output: 'XIV/II/MMXXV',
        explanation: 'Each part converted separately.',
      },
    ],
    benefits: [
      'Converts both ways instantly, with no submit button or page reload',
      'Uses strict standard Roman numerals, so the result is always the accepted form',
      'Free to use, with no account, sign-up or download',
      'Runs entirely in your browser — nothing you type is uploaded or stored',
      'Converts full dates as well as single numbers, so birthdays and anniversaries work too',
      'Accepts lowercase Roman numerals, so you can type mmxxvi instead of MMXXVI',
    ],
    useCases: [
      'Writing a birthday, wedding date or anniversary in Roman numerals for a card, invitation or tattoo',
      'Checking homework or teaching children how the Roman numeral system works',
      'Reading years on buildings, monuments, clocks, book chapters and film credits',
      'Numbering chapters, sections or outlines in a document in the classical style',
      'Pairing with the Age Calculator to find an exact age, then writing the matching birthday in Roman numerals',
      'Preparing dates for engraving, calligraphy or a historical display',
    ],
    faqs: [
      {
        question: 'What is a Roman numeral converter?',
        answer:
          'A free online tool that turns ordinary numbers (1, 2, 3) into Roman numerals (I, II, III) and back again. This one also converts full dates into Roman numerals.',
      },
      {
        question: 'How do I convert numbers into Roman numerals?',
        answer:
          'Choose Number to Roman and type a whole number from 1 to 3999 — the Roman numeral appears instantly. For example, type 2026 and you get MMXXVI.',
      },
      {
        question: 'How do I convert Roman numerals into numbers?',
        answer:
          'Choose Roman to Number and type the numeral using the letters I, V, X, L, C, D and M — for example, MCMXCIV becomes 1994. Lowercase letters work too.',
      },
      {
        question: 'What is 2026 in Roman numerals?',
        answer:
          '2026 in Roman numerals is MMXXVI: MM is 2000, XX is 20 and VI is 6.',
      },
      {
        question: 'What is 2025 in Roman numerals?',
        answer:
          '2025 in Roman numerals is MMXXV: MM is 2000, XX is 20 and V is 5.',
      },
      {
        question: 'What is 1999 in Roman numerals?',
        answer:
          '1999 in Roman numerals is MCMXCIX: M is 1000, CM is 900, XC is 90 and IX is 9.',
      },
      {
        question: 'What is 1000 in Roman numerals?',
        answer:
          '1000 in Roman numerals is M, the first letter of the Latin word mille, meaning a thousand.',
      },
      {
        question: 'What is the largest number supported by this converter?',
        answer:
          'The largest number is 3999, written MMMCMXCIX. There is no standard symbol above 1000, so larger numbers need extra notation this tool does not use.',
      },
      {
        question: 'Can I convert Roman numerals back into normal numbers?',
        answer:
          'Yes. Choose Roman to Number, type the numeral, and the ordinary number appears at once — try MCMXCIV for 1994, or XIV for 14.',
      },
      {
        question: 'How do I write my birthday in Roman numerals?',
        answer:
          'Choose Date to Roman and enter your birth date. For example, 27 November 2026 becomes XXVII/XI/MMXXVI.',
      },
      {
        question: 'How do I convert a date into Roman numerals?',
        answer:
          'Use Date to Roman mode, enter the day, month and year, and pick a layout — DD/MM/YYYY, MM/DD/YYYY or YYYY-MM-DD. Each part is converted separately, so 14 February 2025 becomes XIV/II/MMXXV.',
      },
      {
        question: 'Are lowercase Roman numerals valid?',
        answer:
          'Yes. Lowercase means exactly the same as uppercase: mmxxvi is 2026, just as MMXXVI is. This tool accepts both and shows the result in uppercase.',
      },
      {
        question: 'Why is IIII invalid?',
        answer:
          'I may be repeated at most three times in a row, so 4 must be written IV (one before five), not IIII. You will still see IIII on some old clock faces, but it is not the standard form.',
      },
      {
        question: 'Why is IC not a valid Roman numeral?',
        answer:
          'Subtraction is only allowed for 4, 9, 40, 90, 400 and 900, using IV, IX, XL, XC, CD and CM. IC would mean 99, but 99 is XCIX (90 + 9), so IC is rejected.',
      },
      {
        question: 'What are the seven Roman numeral symbols?',
        answer:
          'I is 1, V is 5, X is 10, L is 50, C is 100, D is 500 and M is 1000. Every numeral is built from these seven letters, plus the subtractive pairs IV, IX, XL, XC, CD and CM.',
      },
      {
        question: 'Is there a difference between Roman numerals and Arabic numbers?',
        answer:
          'Yes. Arabic numbers (0–9) use place value, so the same digit means something different depending on its position. Roman numerals use letters added together, with no zero and no place value — MMXXVI is simply 1000 + 1000 + 10 + 10 + 5 + 1.',
      },
      {
        question: 'Can Roman numerals contain zero?',
        answer:
          'No. The Roman system has no symbol for zero. This converter accepts whole numbers from 1 to 3999 only.',
      },
      {
        question: 'Can I use Roman numerals for decimal numbers?',
        answer:
          'No. Roman numerals have no decimal point or fractions, so 3.5 has no Roman form. Round to a whole number first, then convert it.',
      },
      {
        question: 'How do subtractive Roman numerals work?',
        answer:
          'When a smaller symbol sits before a larger one, subtract it: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900. These six pairs are the only subtractions allowed.',
      },
      {
        question: 'Is this Roman numeral converter free?',
        answer:
          'Yes, it is completely free, with no account, sign-up or download. It runs entirely in your browser, so what you enter is never uploaded or stored.',
      },
    ],
    howItWorks: [
      'Roman numerals use seven symbols: I is 1, V is 5, X is 10, L is 50, C is 100, D is 500 and M is 1000. Numbers are built by adding symbols from largest to smallest, so 2026 is MM + XX + VI = MMXXVI.',
      'Subtraction is used for 4, 9, 40, 90, 400 and 900: a smaller symbol before a larger one is subtracted from it — IV is 4, IX is 9, XL is 40, XC is 90, CD is 400 and CM is 900. That is why 99 is XCIX (90 + 9), not IC.',
      'Repetition has strict limits. I, X, C and M may repeat up to three times in a row (III is 3, XXX is 30), while V, L and D are never repeated — VV, LL and DD are not valid. A symbol is subtracted only once, so 8 is VIII, not IIX.',
      'To read a Roman numeral, the converter scans left to right: when a smaller symbol comes before a larger one, it subtracts; otherwise it adds. It also checks the result against the standard form, so spellings such as IIII, IC or VV are rejected with a clear message instead of being silently accepted.',
      'The date converter treats each part separately — day, month and year are each converted on their own and joined with slashes or dashes. There is no single universally standardised Roman date format, so the day and month keep their ordinary positions and only the numbers change.',
    ],
    supportedFormats: ['Numbers 1–3999', 'Roman numerals I–MMMCMXCIX', 'Dates DD/MM/YYYY', 'Dates MM/DD/YYYY', 'Dates YYYY-MM-DD', 'Lowercase input accepted'],
    limitations: [
      'Only whole numbers from 1 to 3999 are supported. There is no Roman numeral for zero, and numbers above 3999 need extra notation this tool does not use.',
      'Decimals and fractions cannot be converted — there is no decimal point, so enter a whole number only.',
      'Only strict standard (canonical) Roman numerals are accepted. Spellings such as IIII, IC, IL, VV and XM are rejected, though they sometimes appear on old clocks or monuments.',
      'The date converter changes the numbers only; it does not translate month names or use the ancient Roman calendar.',
      'Results are exact for the supported range, but double-check a numeral before engraving, tattooing or printing it — one wrong letter changes the value.',
    ],
  },
};
