# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Next.js 14 (App Router) + TypeScript + Tailwind marketing site for a private Morocco desert-tour operator. No CMS, no database, no test suite — content lives in typed files in the repo. Deploy target is Vercel. The repo lives at `https://github.com/unsterblichergeist84-lang/moroccowithus` (branch `main`).

## Commands

```bash
npm run dev        # dev server
npm run build      # production build (also runs content validation — see below)
npm start          # serve the production build (run `npm run build` first)
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm run images     # rebuild public/images + src/content/galleries.generated.ts
```

There is no test runner; `typecheck`, `lint` and `build` are the verification steps (single file: `npx eslint <path>`). `.next/` and `tsconfig.tsbuildinfo` are generated build artifacts; ignore them and don't edit them. Inquiry env vars (see `.env.example`): `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, `INQUIRY_TO_EMAIL`. Path alias: `@/*` → `src/*`.

## Architecture

- **Brand config**: `src/config/site.ts` is the single source of truth for brand name, domain, email, WhatsApp, Instagram and OG image. The brand is `Morocco With Us` at `https://moroccowithus.com`; email, WhatsApp and Instagram are still placeholders. Never hardcode brand strings elsewhere; canonicals, sitemap, robots and JSON-LD all derive from `site.domain`.
- **Content is code, validated at build time**:
  - Tours: spread across four departure cities (Fes, Marrakech, Casablanca, Tangier); never type counts as prose, use `getTourCount()`. Data is split across `data.ts` (original 6) and `data.<city>.ts`; `index.ts` merges, validates and groups them by departure. Every tour needs a `departure` (drives the `/tours` filter); bad slug, itinerary length ≠ `durationDays`, or a stray `price` field fails the build. A new tour should also be added to the relevant `tourSlugs` in `regions.ts`.
  - Tour helpers: `src/lib/tours.ts` (lookups, featured/related, counts) and `src/lib/tourMeta.ts` (tags and map route stops derived from tour copy via place-name regexes; new tours need no extra fields, but a new place needs an entry in its `PLACES` list).
  - Regions: `src/content/regions.ts` drives the home grid, `/destinations` and `/destinations/[slug]`.
  - Blog: MDX files in `src/content/blog/`, frontmatter validated in `src/lib/blog.ts`, rendered via `next-mdx-remote/rsc` + `remark-gfm` (`src/components/Mdx.tsx`, `MdxLink.tsx`).
  - FAQ/testimonials: `src/content/faq.ts`, `testimonials.ts` (testimonials are placeholder quotes).
- **Images pipeline**: the ~1.17 GB source photo library lives OUTSIDE the repo at `../desert-tour-image-source/`. `scripts/optimize-images.mjs` (sharp) writes `public/images/<location>/<location>-NN.jpg` and regenerates `src/content/galleries.generated.ts`, the typed manifest that tours/regions reference. Do not hand-edit the generated file; loose files in the archive root are skipped unless `--include-library` is passed.
- **SEO**: per-route metadata, unique og:image per page, JSON-LD helpers in `src/lib/jsonld.ts` rendered via `components/JsonLd.tsx`; `sitemap.ts`/`robots.ts` are generated from the route list, so new routes must be added there.
- **Inquiry flow**: `/contact` → `components/InquiryForm.tsx` → `src/app/api/inquiry/route.ts`, which emails via Resend when `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL` (and optionally `INQUIRY_TO_EMAIL`) are set. Without them it logs, and in production returns a 503 instead of faking success. WhatsApp is the secondary channel.
- **Search titles**: `src/content/seo.ts` overrides the `<title>`/meta description per tour and post (H1s unchanged); `src/content/departures.ts` drives the `/tours/from/[city]` landing pages. Keyword rationale is in `SEO-KEYWORDS.md`.
- **Testimonials are hidden** on the home page while `testimonialsArePlaceholder` is true in `src/content/testimonials.ts`.
- **Styling**: Tailwind with shared component classes in `src/app/globals.css` (`.eyebrow`, `.surface-card`, `.btn-primary`, `.btn-on-dark`, `.btn-outline`); accent colour is `accent-*` (teal). Fonts: Poppins headings + Inter body via `next/font`. Tours/blog/destinations share the card + `PageHeader` hero pattern (`TourCard`, `PostCard`, `RegionCard`).

## Business rules

- **No prices anywhere.** Tours are private and quote-on-inquiry; the primary CTA is the inquiry form, never "book now"/checkout. The tour validator rejects a `price` field.
- Copy and testimonials are provisional drafts pending the brand lock and real, permissioned quotes.

## Launch

The pre-launch checklist (placeholder email/WhatsApp/Instagram, testimonials, `/terms` deposit terms, optional `GOOGLE_SITE_VERIFICATION`, importing the GitHub repo into Vercel) is in `README.md` under "Before launch".
