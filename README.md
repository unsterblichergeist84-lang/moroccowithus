# Morocco Desert Tour Site (working title)

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deploy target: Vercel.
No CMS — content lives in typed files in the repo.

## Brand config — the one file to edit

`src/config/site.ts` is the single source of truth for every brand string
(name, domain, email, WhatsApp, Instagram, OG image). The name and domain are
**placeholders** (`Morocco With Us` / `https://moroccowithus.com`) until the brand
is locked. When it is, edit that file and nothing else.

## Rules baked in

- No prices anywhere. Tours are private, quote-on-inquiry. Primary CTA is an
  inquiry form, never "book now" / checkout.
- Typed content — a malformed tour fails the build.

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm run images     # rebuild public/images + gallery manifest from the source archive
```

## Images

The ~1.17 GB photo library lives OUTSIDE the repo at
`../desert-tour-image-source/` (16 location folders). `npm run images` resizes,
compresses and renames it into `public/images/<location>/<location>-NN.jpg`
(~48 MB, 365 images) and regenerates `src/content/galleries.generated.ts`, the
typed manifest all tour / region content references. Loose uncategorised files
in the archive root are skipped unless you pass `--include-library`.

## Content

- **Tours** — `src/content/tours/data.ts`, validated in `index.ts` (bad slug,
  itinerary length != durationDays, a stray `price` field → build fails).
  25 tours across four departure cities (Fes 7, Marrakech/Casablanca/Tangier 6 each), split across `data*.ts`. Copy is provisional draft.
- **Regions** — `src/content/regions.ts`, 7 editorial regions driving the home
  grid, `/destinations`, and the `/destinations/[slug]` detail pages.
- **Blog** — MDX in `src/content/blog/`, frontmatter validated in
  `src/lib/blog.ts`. 30 posts (`next-mdx-remote/rsc` + `remark-gfm` for tables).
  Internal cross-links + external authoritative links (UNESCO, Wikipedia, ONCF).
- **FAQ / testimonials** — `src/content/faq.ts`, `src/content/testimonials.ts`.
  Testimonials are PLACEHOLDER quotes (no real names) — replace before launch.

## Pages

`/` · `/tours` · `/tours/[slug]` · `/destinations` · `/destinations/[slug]` ·
`/about` · `/contact` (working inquiry form + WhatsApp) · `/blog` ·
`/blog/[slug]` · `/tours/from/[city]` · `/privacy` · `/terms` · `sitemap.xml` · `robots.txt` · 404.

Tours, blog and destinations share one card-grid look (`TourCard` / `PostCard` /
`RegionCard`), each card linking to a detail page with a `PageHeader` hero.

## Design

Placeholder theme modelled on a clean modern tour-operator site: Poppins
headings + Inter body (`next/font`), white backgrounds, teal accent
(`accent-*`), light section bands. Component classes in `src/app/globals.css`
(`.eyebrow`, `.surface-card`, `.btn-primary` / `.btn-on-dark` / `.btn-outline`).
Full-bleed photo hero, floating WhatsApp button, icons throughout, mobile
sticky inquiry bar on tour pages, tours filter (`ToursExplorer`). Real visual
identity pass still pending the brand lock.

## SEO

Per-route metadata + canonicals from `site.domain`; unique og:image per page;
JSON-LD (`TravelAgency`, `TouristTrip`, `Article`, `BreadcrumbList`, `FAQPage`);
`sitemap.ts` / `robots.ts` generated from the route list.

## Before launch

- Lock the brand → edit `src/config/site.ts` only.
- Copy `.env.example` and set the same vars in Vercel so inquiries are emailed: `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL` (verified sender), optional `INQUIRY_TO_EMAIL`. Optional: `GOOGLE_SITE_VERIFICATION`.
- Replace the real email / WhatsApp / Instagram in `src/config/site.ts` (still placeholders).
- Replace placeholder testimonials with real quotes, then set `testimonialsArePlaceholder = false` to show the section.
- Fill in real deposit / cancellation terms in `/terms` (currently defers to the quote) and have it and the privacy policy (`/privacy`) reviewed before launch.
- Real copy pass on tours / about / blog once the voice is set.
- Visual identity pass once the brand is locked.

> The repo is at https://github.com/unsterblichergeist84-lang/moroccowithus (branch `main`).
> Import it into Vercel to deploy. Build + typecheck are green.
