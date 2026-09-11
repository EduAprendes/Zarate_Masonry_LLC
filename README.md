# Zarate_Masonry_LLC

Marketing site for Zarate Masonry LLC — chimney repair & residential masonry in Des Moines, WA. Built with [Next.js](https://nextjs.org) (App Router + TypeScript).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project structure

- `src/app/page.tsx` — homepage (bilingual EN/ES, quote form, services, gallery preview)
- `src/app/gallery/page.tsx` — full project photo gallery with lightbox
- `src/components/` — `ZarateMasonrySite.tsx` (main site) and `FullGallery.tsx` (gallery + lightbox)
- `public/images/` — project photos
- `public/alt-design.html` — alternate static design concept, served as-is
- `reference/` — original static HTML this site was rebuilt from

## Deploy

This project deploys to [Vercel](https://vercel.com).
