import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const DEV_TOOLS_PART_3: ToolDefinition[] = [
  {
    id: 'sql-formatter',
    slug: 'sql-formatter',
    name: 'SQL Formatter',
    shortDescription:
      'Format, indent, and standardize SQL queries with uppercase/lowercase keywords or minify queries to one line.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'sql formatter',
      'sql beautifier',
      'format sql query',
      'sql minifier',
    ],
    seo: {
      title: 'SQL Formatter – Beautify, Indent & Minify SQL Queries | UtilityFlow',
      description:
        'Beautify messy SQL queries with clean clause breaks, 2/4-space indentation, and keyword casing, or minify queries for logs and code.',
      primaryKeyword: 'sql formatter',
      secondaryKeywords: ['sql beautifier online', 'pretty print sql', 'sql minifier'],
      longTailKeywords: [
        'format select join group by sql query online',
        'convert sql keywords to uppercase cleanly',
        'minify sql query preserving string literals',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Turn dense single-line SQL queries into readable, structured statements with clear `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY`, and `ORDER BY` alignment while preserving quoted strings and comments.',
    instructions: [
      {
        title: 'Paste your SQL query',
        description:
          'Insert any SELECT, INSERT, UPDATE, DELETE, or DDL query into Raw SQL Query.',
      },
      {
        title: 'Choose Beautify or Minify and keyword casing',
        description:
          'Select UPPERCASE or lowercase SQL keywords and pick 2-space or 4-space indentation.',
      },
      {
        title: 'Copy formatted SQL',
        description:
          'Use Copy SQL to transfer the standardized query back into your editor or migration.',
      },
    ],
    examples: [
      {
        title: 'Formatting a multi-join query',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: 'Breaks major SQL clauses onto dedicated lines and normalizes keyword casing.',
      },
    ],
    benefits: [
      'Preserves single-quoted string literals and SQL comments untouched',
      'Supports multi-word clauses like LEFT OUTER JOIN, GROUP BY, and ORDER BY',
      'Switches effortlessly between Beautify and Minify modes',
      'Runs locally so proprietary table and schema names stay private',
    ],
    useCases: [
      'Cleaning ORM-generated SQL logs for performance debugging',
      'Standardizing SQL scripts before pull-request reviews',
      'Compacting multi-line queries into single-line strings for CLI scripts',
      'Aligning keyword casing across team SQL style guides',
    ],
    faqs: [
      {
        question: 'Will SQL Formatter alter table names or text inside quotes?',
        answer:
          'No. The tokenizer isolates string literals and comments so uppercase/lowercase keyword formatting only applies to recognized SQL keywords.',
      },
      {
        question: 'Which SQL dialects are supported?',
        answer:
          'Standard ANSI SQL clauses (PostgreSQL, MySQL, SQLite, SQL Server) including SELECT, JOINs, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE, and DELETE are supported.',
      },
      {
        question: 'Can I minify a formatted query back into one line?',
        answer:
          'Yes. Switch the mode toggle to Minify to strip comments and collapse extra whitespace safely.',
      },
    ],
    relatedToolSlugs: [
      'json-csv-converter',
      'json-formatter',
      'line-prefix-suffix',
      'js-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/SqlFormatterTool')),
  },
  {
    id: 'css-minifier',
    slug: 'css-minifier',
    name: 'CSS Minifier & Beautifier',
    shortDescription:
      'Minify CSS stylesheets to reduce bundle size or beautify compressed CSS rules with clean indentation.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'css minifier',
      'css beautifier',
      'compress css online',
      'format css',
    ],
    seo: {
      title: 'CSS Minifier & Beautifier – Compress & Format CSS | UtilityFlow',
      description:
        'Minify CSS rules by stripping comments and extra whitespace with live byte-savings stats, or beautify minified stylesheets cleanly.',
      primaryKeyword: 'css minifier',
      secondaryKeywords: ['css beautifier', 'compress css', 'css formatter online'],
      longTailKeywords: [
        'minify css preserving quoted strings and media queries',
        'unminify compressed css stylesheet online',
        'calculate css compression percentage in browser',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compress CSS stylesheets by removing comments, redundant whitespace, and trailing semicolons before closing braces—or expand one-line minified CSS back into readable indented blocks.',
    instructions: [
      {
        title: 'Select Minify or Beautify',
        description:
          'Choose Minify CSS to shrink file weight or Beautify CSS to restore indentation.',
      },
      {
        title: 'Paste your stylesheet',
        description:
          'Enter CSS rules, custom properties, or `@media` blocks into Input CSS.',
      },
      {
        title: 'Inspect savings and copy',
        description:
          'Check the exact byte reduction percentage and click Copy CSS.',
      },
    ],
    examples: [
      {
        title: 'Compressing a card rule',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: 'Removes newlines, spaces around punctuation, and final semicolon inside the block.',
      },
    ],
    benefits: [
      'Tokenizer preserves quoted strings (such as content: "..." or url(...))',
      'Strips /* ... */ comments and unnecessary whitespace safely',
      'Displays exact input bytes, output bytes, and percentage saved',
      'Includes Beautify mode to inspect third-party minified CSS',
    ],
    useCases: [
      'Compressing inline <style> snippets for HTML emails and landing pages',
      'Unminifying production CSS bundles during visual debugging',
      'Checking stylesheet weight savings before deployment',
      'Cleaning spacing inconsistencies in legacy stylesheets',
    ],
    faqs: [
      {
        question: 'Does CSS minification break spaces inside content: "..." strings?',
        answer:
          'No. Single- and double-quoted string literals are preserved verbatim by the tokenizer.',
      },
      {
        question: 'Why does Minify remove the last semicolon before "}"?',
        answer:
          'In CSS syntax, the final declaration before a closing curly brace does not require a trailing semicolon, saving 1 byte per rule block.',
      },
      {
        question: 'Does it support nested @media blocks in Beautify mode?',
        answer:
          'Yes. Brace depth is tracked across @media and @supports blocks so inner rules indent properly.',
      },
    ],
    relatedToolSlugs: [
      'js-formatter',
      'color-converter',
      'html-entity-encoder',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/CssMinifierTool')),
  },
  {
    id: 'js-formatter',
    slug: 'js-formatter',
    name: 'JavaScript / TypeScript Minifier & Formatter',
    shortDescription:
      'Minify JavaScript snippets by stripping comments and excess whitespace or beautify compact code blocks.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'javascript minifier',
      'js formatter',
      'js beautifier',
      'compress javascript online',
    ],
    seo: {
      title: 'JavaScript Minifier & Formatter – Compress & Indent JS | UtilityFlow',
      description:
        'Minify JavaScript and TypeScript snippets by stripping comments and extra spaces safely, or beautify compact code with 2/4-space indents.',
      primaryKeyword: 'javascript minifier',
      secondaryKeywords: ['js beautifier', 'format javascript online', 'js compressor'],
      longTailKeywords: [
        'minify javascript snippet preserving strings and template literals',
        'unminify compact javascript code with indentation',
        'client side js formatter and minifier',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compact JavaScript snippets for bookmarklets and inline scripts by removing comments and excess spacing—while keeping string literals intact—or re-indent compressed code cleanly.',
    instructions: [
      {
        title: 'Choose Minify JS or Beautify JS',
        description:
          'Pick Minify JS to strip comments and whitespace or Beautify JS with 2 or 4 spaces.',
      },
      {
        title: 'Paste your code snippet',
        description:
          'Insert JavaScript or TypeScript code into the left editor.',
      },
      {
        title: 'Review byte savings and copy',
        description:
          'Verify byte reduction in Minify mode and copy the processed code.',
      },
    ],
    examples: [
      {
        title: 'Stripping comments and whitespace',
        input: '// Helper\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: 'Removes comments and whitespace around braces without touching logic.',
      },
    ],
    benefits: [
      'Lexical tokenizer protects single, double, and backtick template strings',
      'Strips both // single-line and /* */ block comments in Minify mode',
      'Reports live byte reduction percentage',
      'Fast browser-only execution with zero code sent externally',
    ],
    useCases: [
      'Preparing compact inline scripts or bookmarklets',
      'Unpacking compressed single-line snippets for readability',
      'Removing developer comments before sharing code samples',
      'Quickly re-indenting pasted JS functions',
    ],
    faqs: [
      {
        question: 'Does this tool rename variables (mangle) like Terser or esbuild?',
        answer:
          'No. It performs safe whitespace and comment minification without renaming identifiers or altering AST semantics, making the output easy to inspect.',
      },
      {
        question: 'Are string literals containing "//" (like URLs) safe?',
        answer:
          'Yes. Quoted strings and template literals are tokenized before comment detection so URLs inside quotes are never treated as comments.',
      },
      {
        question: 'Should I use semicolons when minifying multi-statement JS?',
        answer:
          'Including standard semicolons is recommended before minifying any JavaScript snippet to avoid ASI (Automatic Semicolon Insertion) ambiguities.',
      },
    ],
    relatedToolSlugs: [
      'css-minifier',
      'json-formatter',
      'regex-tester',
      'sql-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/JsFormatterTool')),
  },
  {
    id: 'cron-expression-parser',
    slug: 'cron-expression-parser',
    name: 'Cron Expression Parser & Schedule Preview',
    shortDescription:
      'Translate 5-field cron expressions into plain English, explore presets, and preview the next 8 run times.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'cron expression parser',
      'crontab generator',
      'cron schedule tester',
      'next cron run times',
    ],
    seo: {
      title: 'Cron Expression Parser – Plain English & Next Run Times | UtilityFlow',
      description:
        'Parse 5-field cron expressions into plain-English schedules, inspect every field, try common presets, and preview the next 8 execution times.',
      primaryKeyword: 'cron expression parser',
      secondaryKeywords: ['crontab guru alternative', 'cron schedule preview', 'cron builder'],
      longTailKeywords: [
        'translate 5 field cron expression to plain english',
        'calculate next 8 cron execution timestamps',
        'test weekday and step cron expressions online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decode 5-field Unix crontab expressions (`minute hour day-of-month month day-of-week`) into clear human-readable summaries, verify field ranges, and inspect the next 8 scheduled run timestamps.',
    instructions: [
      {
        title: 'Enter a 5-field cron expression or pick a preset',
        description:
          'Type any cron expression such as `0 9 * * 1-5` or click a common schedule preset button.',
      },
      {
        title: 'Check the plain-English summary and field breakdown',
        description:
          'Verify that minute, hour, day-of-month, month, and day-of-week fields match your intent.',
      },
      {
        title: 'Verify the next 8 run times',
        description:
          'Review the calculated upcoming local execution timestamps before deploying your scheduled job.',
      },
    ],
    examples: [
      {
        title: 'Business-hours morning job',
        input: '0 9 * * 1-5',
        output: 'At 09:00, on weekday 1-5 (Monday–Friday).',
        explanation: 'Runs at 09:00 AM every Monday through Friday.',
      },
    ],
    benefits: [
      'Supports wildcards (*), steps (*/5), ranges (1-5), lists (1,15), and names (MON-FRI)',
      'Computes the next 8 concrete execution timestamps in your local timezone',
      'Flags out-of-range values or missing fields immediately',
      'Includes one-click presets for common intervals',
    ],
    useCases: [
      'Verifying GitHub Actions `schedule.cron` and Cloudflare Workers Cron Triggers',
      'Debugging Linux crontab backup or cleanup schedules',
      'Double-checking day-of-week (0–6) vs day-of-month (1–31) logic',
      'Documenting recurring job schedules for operations runbooks',
    ],
    faqs: [
      {
        question: 'Does this parser support 6-field cron expressions with seconds?',
        answer:
          'This tool parses standard 5-field Unix crontab expressions (minute, hour, day of month, month, day of week), used by Linux cron, GitHub Actions, and Cloudflare Workers.',
      },
      {
        question: 'What happens if both Day of Month and Day of Week are non-wildcard?',
        answer:
          'Following standard Vixie/Unix cron behavior, when both day fields are restricted, a run triggers if either Day of Month OR Day of Week matches.',
      },
      {
        question: 'Are MON–FRI and JAN–DEC names supported?',
        answer:
          'Yes. Standard 3-letter English month and weekday abbreviations as well as numeric 0 or 7 for Sunday are supported.',
      },
    ],
    relatedToolSlugs: [
      'unix-timestamp-converter',
      'regex-tester',
      'json-formatter',
      'uuid-generator',
    ],
    component: lazy(() => import('../../../tools/developer/CronExpressionParserTool')),
  },
  {
    id: 'color-converter',
    slug: 'color-converter',
    name: 'Color Converter (HEX / RGB / HSL & WCAG Contrast)',
    shortDescription:
      'Convert colors between HEX, RGB, and HSL with live color picker and WCAG 2.1 AA/AAA contrast checking.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'color converter',
      'hex to rgb',
      'rgb to hsl',
      'wcag contrast checker',
    ],
    seo: {
      title: 'Color Converter – HEX, RGB, HSL & WCAG Contrast Checker | UtilityFlow',
      description:
        'Convert colors between HEX, RGB, and HSL instantaneously while testing foreground/background contrast ratios for WCAG 2.1 AA and AAA compliance.',
      primaryKeyword: 'color converter',
      secondaryKeywords: ['hex to rgb converter', 'hsl color picker', 'wcag contrast checker'],
      longTailKeywords: [
        'convert hex color to rgb and hsl css values',
        'check wcag 2.1 aa and aaa text contrast ratio',
        'interactive hex rgb hsl color tool for developers',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Translate colors seamlessly between HEX, RGB, and HSL CSS notations with a live swatch and built-in WCAG 2.1 contrast ratio checker for accessible UI design.',
    instructions: [
      {
        title: 'Pick or type a color',
        description:
          'Use the color picker, enter a 3- or 6-digit HEX code, or adjust individual R/G/B or H/S/L channels.',
      },
      {
        title: 'Copy CSS color values',
        description:
          'Click Copy HEX, Copy RGB, or Copy HSL to grab ready-to-use CSS strings.',
      },
      {
        title: 'Check WCAG contrast',
        description:
          'Select a Background color below to verify the exact contrast ratio and Pass/Fail status for AA Normal, AAA Normal, and AA Large text.',
      },
    ],
    examples: [
      {
        title: 'Accessible cobalt blue on white',
        input: 'Foreground: #2563EB · Background: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Contrast: 5.17:1 (AA Pass)',
        explanation: 'Meets the 4.5:1 WCAG AA requirement for standard body text.',
      },
    ],
    benefits: [
      'Synchronizes HEX, RGB, and HSL channels bidirectionally in real time',
      'Built-in WCAG 2.1 relative luminance contrast calculator',
      'Tests AA Normal (4.5:1), AAA Normal (7.0:1), and AA Large (3.0:1) thresholds',
      'One-click copy for valid CSS color strings',
    ],
    useCases: [
      'Verifying button and link text contrast during UI implementation',
      'Converting brand HEX palettes into HSL for Tailwind or CSS variables',
      'Fine-tuning lightness and saturation without leaving the browser',
      'Auditing accessibility compliance before design handoff',
    ],
    faqs: [
      {
        question: 'What contrast ratio is required for WCAG 2.1 AA body text?',
        answer:
          'WCAG 2.1 AA requires at least 4.5:1 for normal text and 3.0:1 for large text (18pt / 24px regular or 14pt / 18.66px bold).',
      },
      {
        question: 'Can I enter 3-digit shorthand HEX codes like #09f?',
        answer:
          'Yes. Three-character HEX codes expand automatically to their 6-character equivalents.',
      },
      {
        question: 'Why does HSL make adjusting themes easier than RGB?',
        answer:
          'HSL separates Hue, Saturation, and Lightness, allowing you to darken or lighten a brand color by changing only the Lightness percentage.',
      },
    ],
    relatedToolSlugs: [
      'css-minifier',
      'html-entity-encoder',
      'js-formatter',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/ColorConverterTool')),
  },
];
