# AACE Malaysia Section website

Next.js 16 (App Router, Turbopack, Cache Components) + Tailwind CSS 4. All pages are prerendered as static HTML.

On Windows, double-click `run.bat`. It installs dependencies on first run, picks a free port
(starting at 3000), opens the browser and starts the dev server. Run `run.bat prod` from a
terminal to build and serve the production version instead.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Pages

| Route            | Content                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `/`              | Hero with "Find your path" card, programmes, certifications, events, FAQ |
| `/about`         | Who we are, cost engineering, Section commitments, committee roles   |
| `/membership`    | Benefits, categories, how to join and select Malaysia Section        |
| `/certification` | All nine AACE certifications, Section exam support, exam delivery    |
| `/events`        | Filterable Section calendar                                          |
| `/resources`     | AACE body of knowledge and featured Recommended Practices            |
| `/contact`       | Contact form (opens the visitor's mail app) and contact details      |

## Where to edit content

- `src/lib/site.ts`: Section name, email, city, social links, AACE International URLs.
- `src/lib/content.ts`: stats, certifications, benefits, industries, committee roles, FAQs.
- `src/lib/events.ts`: the events calendar.

## Before going live

- **Events are sample listings.** Replace `src/lib/events.ts` with the confirmed programme.
- **Contact email** (`info@aocemy.org`) and **social links** (currently AACE International's
  accounts) are placeholders in `src/lib/site.ts`.
- **Committee names** show "To be announced". Add names in `committeeRoles` in `src/lib/content.ts`.
- The contact form has no backend. It composes an email in the visitor's mail app. Swap
  `handleSubmit` in `src/components/ContactForm.tsx` for a server action or form service if needed.

## Sources

- Content: facts about AACE International (founded 1956, 9,500+ members in 100+ countries,
  nine certifications, 120+ Recommended Practices, 6,500-item Virtual Library, Kryterion exam
  delivery, CESB accreditation, Region 8: Asia, Australia & Pacific Rim) were captured from
  web.aacei.org and adapted for a Malaysian audience.
- Design: layout, type scale and components follow higglo.io. Navy hero with concentric rings,
  Instrument Sans display + Inter body, 20px cards, 10px buttons, a gradient accent rule under the
  header, gradient-underlined text links, a multi-step qualifier card and a +/× FAQ accordion.
  The gradient runs red → violet → blue as a nod to the Jalur Gemilang. Tokens live in
  `src/app/globals.css`.
