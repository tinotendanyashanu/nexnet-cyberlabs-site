# NexNet CyberLabs – Next.js Frontend

Enterprise-grade marketing site for NexNet CyberLabs built with Next.js 15, App Router, Tailwind CSS, ShadCN-friendly components, and Framer Motion.

## Tech Stack

- Next.js 15 (App Router, TypeScript, dynamic routes for services/industries/insights)
- Tailwind CSS + @tailwindcss/typography + custom glassmorphism utilities
- Framer Motion for subtle scroll/hover animations
- Headless UI + Lucide/Heroicons for accessible navigation and iconography

## Getting Started

```bash
npm install
npm run dev
```

- Development server runs at http://localhost:3000/
- Lint with `npm run lint`
- Production build with `npm run build` then `npm run start`

## Project Structure

```
app/
  page.tsx (home)
  about/, services/, industries/, academy/, insights/, trust/, contact/, (legal)/
  sitemap.ts, robots.ts
components/
  Header, Footer, nav dropdowns, CTA, KPI band, ServicesGrid, CaseCarousel, forms, tabs, gallery, etc.
lib/
  site-data.ts (single source of truth for content + metadata)
public/
  images/ (hero, industries, gallery, partners, leadership)
  docs/ (placeholder PDFs for downloads)
```

## Deployment

- Built for Vercel: zero-config, includes metadata, sitemap, and robots files.
- Environment variables are not required for the static marketing experience. Add `NEXT_PUBLIC_*` vars if integrating APIs.
- Remember to run `npm run build` locally or via CI before deploying.

## Accessibility & Compliance

- Keyboard-accessible header dropdowns (Headless UI)
- Visible focus styles, aria labels, reduced motion support
- Forms provide inline validation + success states (front-end only)
- SEO metadata + JSON-LD for Organization & Service schema

## Assets

- Royalty-free placeholder SVGs live under `public/images/`
- Downloadable PDFs live under `public/docs/` and are linked from Industries/Insights pages

## Notes

- Form submissions are client-side only (no backend). Wire up API routes or external services before production.
- Map embeds rely on OpenStreetMap public embeds; replace with enterprise maps if needed.

