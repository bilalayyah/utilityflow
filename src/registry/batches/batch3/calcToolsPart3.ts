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
      'maintenance calories calculator',
      'calorie deficit calculator',
      'weight loss calorie calculator',
      'macro calculator protein carbs fat',
      'how many calories per day',
    ],
    seo: {
      title: 'Calorie & TDEE Calculator – BMR & Macros | UtilityFlow',
      description:
        'This calorie calculator estimates BMR and TDEE with the Mifflin-St Jeor formula, sets weight-loss or gain targets, and plans protein, carb and fat grams.',
      primaryKeyword: 'calorie calculator',
      secondaryKeywords: [
        'tdee calculator',
        'mifflin st jeor bmr calculator',
        'daily calorie needs calculator',
        'calorie deficit for weight loss',
        'maintenance calories estimator',
      ],
      longTailKeywords: [
        'calculate maintenance calories and weight loss deficit online',
        'mifflin st jeor daily calorie expenditure estimator',
        'metric and imperial tdee macro split calculator',
        'how many calories should I eat per day to lose weight',
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
      'days between two dates calculator',
      'business days calculator',
      'count weekdays between dates',
      'how many days until date',
      'date adder subtractor',
    ],
    seo: {
      title: 'Date Difference Calculator – Days & Weekdays | UtilityFlow',
      description:
        'Count exact years, months, days, weekdays and weekend days between two dates, or add and subtract calendar intervals from any date, right in your browser.',
      primaryKeyword: 'date difference calculator',
      secondaryKeywords: [
        'days between two dates',
        'business days weekdays counter',
        'add months to date calculator',
        'count weekend days between dates',
        'date interval calculator',
      ],
      longTailKeywords: [
        'count weekdays and weekend days between two dates',
        'calculate exact calendar months and days between dates',
        'add or subtract years months days from date',
        'how many weekdays are there between two dates online',
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
      'work hours calculator',
      'elapsed time between two times',
      'add hours and minutes calculator',
      'decimal hours calculator',
      'shift hours calculator',
    ],
    seo: {
      title: 'Time Duration Calculator – Hours & Timesheets | UtilityFlow',
      description:
        'Work out elapsed hours, minutes and seconds between clock times, deduct unpaid breaks, handle overnight shifts, or sum timesheet rows into decimal hours.',
      primaryKeyword: 'time duration calculator',
      secondaryKeywords: [
        'work hours calculator',
        'timesheet duration adder',
        'decimal hours converter',
        'overnight shift hours calculator',
        'hours minutes seconds adder',
      ],
      longTailKeywords: [
        'calculate elapsed time with unpaid lunch break and overnight rollover',
        'convert hh mm ss time duration to decimal hours',
        'add multiple hours minutes seconds rows together',
        'how to calculate work hours with lunch break online',
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
      'meters to feet converter',
      'kg to pounds converter',
      'celsius to fahrenheit converter',
      'liters to gallons converter',
      'km to miles converter',
    ],
    seo: {
      title: 'Unit Converter – Length, Weight, Temp & Data | UtilityFlow',
      description:
        'Convert length, weight, temperature, area, volume, speed and digital storage between Metric and US Imperial units, with a full comparison table for every unit.',
      primaryKeyword: 'unit converter',
      secondaryKeywords: [
        'metric to imperial converter',
        'temperature celsius fahrenheit kelvin',
        'gb to gib data converter',
        'kilometers to miles converter',
        'pounds to kilograms converter',
      ],
      longTailKeywords: [
        'convert kilometers to miles and kilograms to pounds online',
        'decimal gigabyte vs binary gibibyte storage converter',
        'all-in-one science and engineering unit converter table',
        'how to convert celsius to fahrenheit and kelvin online',
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
      'usd to eur converter',
      'currency converter with fee',
      'exchange rate markup calculator',
      'foreign transaction fee calculator',
      'inverse exchange rate calculator',
    ],
    seo: {
      title: 'Currency Calculator – Rates, Fees & ECB | UtilityFlow',
      description:
        'Convert between major currencies with your own quoted exchange rate, add bank or card FX fees to see the net amount, or fetch an ECB reference rate on demand.',
      primaryKeyword: 'currency calculator',
      secondaryKeywords: [
        'exchange rate fee calculator',
        'manual currency converter',
        'fx spread calculator',
        'ecb reference rate converter',
        'bank fx fee calculator',
      ],
      longTailKeywords: [
        'convert currency with custom bank exchange rate and fee',
        'currency calculator without fake hardcoded rates',
        'calculate net foreign currency after card markup',
        'how much will I receive after currency conversion fee',
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
      {
        title: 'Review gross, fee, and net amounts',
        description:
          'Compare the gross converted total, the fee deducted, and the net amount you actually receive before sending money.',
      },
      {
        title: 'Check the inverse rate and reference table',
        description:
          'Read the inverse rate and the quick reference table to sanity-check the conversion at several amounts.',
      },
      {
        title: 'Re-fetch rates before acting on them',
        description:
          'Exchange rates move constantly, so fetch a fresh ECB reference rate or confirm your bank quote close to the time you convert.',
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
      {
        question: 'How does the Currency Calculator convert my money?',
        answer:
          'It multiplies your amount by the exchange rate you enter or fetch, then subtracts any FX fee percentage you add, and shows the gross total, the fee, and the net amount received.',
      },
      {
        question: 'What exchange rate should I enter in the Currency Calculator?',
        answer:
          'Enter the exact rate quoted by your bank, broker, card provider, or invoice. If you do not have a quote, fetch the ECB reference rate as a benchmark and expect your provider rate to differ slightly.',
      },
      {
        question: 'What is the difference between an ECB reference rate and my bank rate?',
        answer:
          'An ECB reference rate is a mid-market benchmark published by the European Central Bank. A bank rate adds a spread or markup on top of that benchmark, so the bank rate is usually less favorable.',
      },
      {
        question: 'How does the Currency Calculator work out FX fees?',
        answer:
          'It applies the fee percentage you enter to the gross converted amount and subtracts it to show the net proceeds. For example, a 1.5% fee on 920 EUR removes 13.80 EUR.',
      },
      {
        question: 'What is an inverse exchange rate?',
        answer:
          'It is the rate in the opposite direction, showing how much of the base currency one unit of the target currency buys. The tool calculates it automatically from the rate you enter.',
      },
      {
        question: 'Does the Currency Calculator give financial advice?',
        answer:
          'No. It only performs the conversion and fee math from the rate and fee you provide. It does not recommend when to convert, which provider to use, or whether a rate is good.',
      },
      {
        question: 'Can the Currency Calculator show how much I will receive after fees?',
        answer:
          'Yes. The net received figure is the gross converted amount minus the FX fee you entered, which is the amount you should expect before any separate flat transfer charge.',
      },
      {
        question: 'Why is my bank rate worse than the rate I see online?',
        answer:
          'Rates shown online are usually mid-market benchmarks with no markup. Banks and card providers add a spread to cover costs and profit, so their quoted rate is less favorable than the benchmark.',
      },
      {
        question: 'Does the Currency Calculator store or upload my amounts?',
        answer:
          'No. Your amounts, rates, and fee settings are used only for the calculation in your browser, except for the optional ECB rate fetch, which only requests a public reference rate.',
      },
      {
        question: 'Is the Currency Calculator free to use?',
        answer:
          'Yes, it is completely free to use in your browser, with no account, no sign-up, and no limit on how many conversions you run.',
      },
      {
        question: 'How often do ECB reference rates change?',
        answer:
          'ECB reference rates are published once per business day, so the fetched rate is a daily benchmark rather than a live ticking market price.',
      },
      {
        question: 'Can I convert between any two currencies?',
        answer:
          'You can convert between the major global currencies the tool lists by entering any manual rate. The ECB fetch covers the currency pairs published in the ECB reference data.',
      },
      {
        question: 'What happens if the ECB rate fetch fails?',
        answer:
          'The tool falls back gracefully to manual mode. Just type your own exchange rate into the rate field, and all conversion, fee, and table math keeps working locally.',
      },
      {
        question: 'Should I use the ECB rate or my card rate for a purchase abroad?',
        answer:
          'Use your card rate for the real cost, because that is what you will actually be charged. Use the ECB rate only as a benchmark to see how much markup your card adds.',
      },
      {
        question: 'How do I compare two different FX fees?',
        answer:
          'Run the same amount and rate twice with each fee percentage and compare the net received figures. The option with the higher net amount costs you less.',
      },
      {
        question: 'Does the Currency Calculator include hidden transfer charges?',
        answer:
          'No. It covers the exchange conversion and the percentage FX fee you enter. Flat wire fees or fixed transfer charges are separate, so add them yourself when comparing providers.',
      },
      {
        question: 'Can I use the Currency Calculator for an invoice in another currency?',
        answer:
          'Yes. Enter the invoice amount, the contract or locked exchange rate, and any fee, and the tool shows the gross, fee, and net totals in your own currency.',
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
