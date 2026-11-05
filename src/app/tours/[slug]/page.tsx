import Image from "next/image";
import { tourSeo } from "@/content/seo";
import { getPostsForTour } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { TourCard } from "@/components/TourCard";
import { TourStickyBar } from "@/components/TourStickyBar";
import { JsonLd } from "@/components/JsonLd";
import { InquiryForm } from "@/components/InquiryForm";
import { Icon } from "@/components/icons";
import { RouteMap } from "@/components/RouteMap";
import { getTourTags } from "@/lib/tourMeta";
import { site, absoluteUrl } from "@/config/site";
import { breadcrumbJsonLd, touristTripJsonLd } from "@/lib/jsonld";
import {
  getTourBySlug,
  getTourSlugs,
  getRelatedTours,
  durationLabel,
} from "@/lib/tours";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getTourSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const tour = getTourBySlug(params.slug);
  if (!tour) return {};

  const path = `/tours/${tour.slug}`;
  const seo = tourSeo[tour.slug];
  const seoTitle = seo?.title ?? tour.title;
  const seoDescription = seo?.description ?? tour.summary;
  return {
    title: seo ? { absolute: seoTitle } : tour.title,
    description: seoDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      title: seoTitle,
      description: seoDescription,
      images: [{ url: tour.heroImage }],
    },
    twitter: { images: [tour.heroImage] },
  };
}

export default async function TourPage({ params }: Params) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const related = getRelatedTours(tour.slug, 3);
  const readingPosts = await getPostsForTour(
    `${tour.title} ${tour.region} ${tour.highlights.join(" ")} ${tour.itinerary.map((d) => d.title).join(" ")}`,
  );
  const whatsappDigits = site.whatsapp.replace(/[^\d]/g, "");
  const whatsappHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    `Hello, I'd like to ask about the "${tour.title}" tour.`,
  )}`;

  const goodToKnow = [
    { label: "Style", value: "Private - your own guide and driver, no group" },
    { label: "Length", value: `${durationLabel(tour.durationDays)}, adjustable` },
    { label: "Region", value: tour.region },
    { label: "Pricing", value: "Quoted from the final itinerary, on inquiry" },
    {
      label: "Best season",
      value: "March-May and October-November are the most comfortable",
    },
    { label: "Start / end", value: "Flexible - we match it to your flights" },
    {
      label: "Arrival",
      value: "Your driver meets you at the airport or station and takes you to your first stay",
    },
    {
      label: "Pace",
      value: "Set with you - we can keep drives short and days light",
    },
    {
      label: "Dress & weather",
      value: "Modest, comfortable clothes; warm layers for desert nights and winter mornings",
    },
    {
      label: "Money & tips",
      value: "Dirham for tips and small purchases; cards are common in cities, cash elsewhere",
    },
    {
      label: "Entry & insurance",
      value: "Check visa rules for your passport; travel insurance is recommended",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          touristTripJsonLd(tour),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
            { name: tour.title, path: `/tours/${tour.slug}` },
          ]),
        ]}
      />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dune-900 via-dune-900/70 to-dune-900/40" />
        </div>
        <Container className="flex min-h-[44vh] flex-col justify-end py-12 text-white sm:min-h-[48vh] sm:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-white/80">
            <Link href="/tours" className="hover:text-white">
              Tours
            </Link>
            <span className="px-2">/</span>
            <span>{tour.title}</span>
          </nav>
          <h1 className="mt-3 max-w-2xl text-2xl font-bold [overflow-wrap:anywhere] sm:text-4xl">
            {tour.title}
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {tour.region} &middot; {durationLabel(tour.durationDays)} &middot; Private
          </p>
        </Container>
      </section>

      <Container className="grid grid-cols-1 gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <ul className="mb-5 flex flex-wrap gap-2" aria-label="Tour tags">
            {getTourTags(tour).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-sand-200 bg-sand-100 px-3 py-1 text-xs font-medium text-dune-700"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="text-lg text-dune-700">{tour.summary}</p>

          <h2 className="mt-10 text-xl font-semibold text-dune-900">Highlights</h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {tour.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-dune-700">
                <span aria-hidden className="text-accent-600">
                  &bull;
                </span>
                {h}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-dune-900">Route</h2>
          <div className="mt-4">
            <RouteMap tour={tour} />
          </div>

          <h2 className="mt-10 text-xl font-semibold text-dune-900">Itinerary</h2>
          <ol className="mt-4 space-y-5">
            {tour.itinerary.map((day) => (
              <li
                key={day.day}
                className="rounded-xl border border-sand-200 bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                  Day {day.day}
                </p>
                <h3 className="mt-1 font-semibold text-dune-900">{day.title}</h3>
                <p className="mt-2 text-sm text-dune-600">{day.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-dune-900">Included</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-dune-700">
                {tour.included.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Icon.Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-dune-900">Not included</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-dune-700">
                {tour.notIncluded.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Icon.Minus aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-dune-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="mt-12 text-xl font-semibold text-dune-900">Good to know</h2>
          <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {goodToKnow.map((row) => (
              <div key={row.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                  {row.label}
                </dt>
                <dd className="mt-1 text-sm text-dune-700">{row.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-xl font-semibold text-dune-900">Gallery</h2>
          <div className="mt-4">
            <Gallery images={tour.gallery} title={tour.title} />
          </div>

          {readingPosts.length > 0 && (
            <>
              <h2 className="mt-12 text-xl font-semibold text-dune-900">Before you go</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {readingPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="font-medium text-accent-600 hover:text-accent-700"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside id="inquire" className="min-w-0 scroll-mt-24 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-2xl border border-sand-200 bg-sand-100 p-6">
            <h2 className="text-lg font-semibold text-dune-900">
              Inquire about this tour
            </h2>
            <p className="mt-2 text-sm text-dune-600">
              Private and quote-on-inquiry. Send a few lines and we reply with
              questions and a costed itinerary.
            </p>
            <div className="mt-5">
              <InquiryForm defaultTour={tour.slug} />
            </div>
            <p className="mt-4 border-t border-sand-200 pt-4 text-sm text-dune-600">
              Prefer to message?{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent-600 hover:text-accent-700"
              >
                Ask on WhatsApp
              </a>
            </p>
          </div>
        </aside>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-100">
          <Container className="py-14">
            <h2 className="text-xl font-semibold text-dune-900">Other journeys</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <TourCard key={r.slug} tour={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <div className="h-20 lg:hidden" aria-hidden />
      <TourStickyBar tour={tour} />
    </>
  );
}
