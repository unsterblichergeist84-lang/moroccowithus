import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TourCard } from "@/components/TourCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/config/site";
import { getAllTours } from "@/lib/tours";
import { departureInfo, getDepartureInfo } from "@/content/departures";

type Params = { params: { city: string } };

export function generateStaticParams() {
  return departureInfo.map((d) => ({ city: d.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const info = getDepartureInfo(params.city);
  if (!info) return {};
  const path = `/tours/from/${info.slug}`;
  return {
    title: { absolute: info.seoTitle },
    description: info.description,
    alternates: { canonical: path },
    openGraph: {
      url: absoluteUrl(path),
      title: info.seoTitle,
      description: info.description,
      images: [{ url: info.image }],
    },
    twitter: { images: [info.image] },
  };
}

export default function DeparturePage({ params }: Params) {
  const info = getDepartureInfo(params.city);
  if (!info) notFound();

  const tours = getAllTours().filter((t) => t.departure === info.city);
  const path = `/tours/from/${info.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
            { name: `From ${info.city}`, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: info.headline,
            itemListElement: tours.map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(`/tours/${t.slug}`),
              name: t.title,
            })),
          },
        ]}
      />

      <PageHeader
        eyebrow={`Departing from ${info.city}`}
        title={info.headline}
        intro={`${tours.length} private itineraries, each a starting point we adjust to your dates, pace and group.`}
        image={info.image}
        imageAlt={info.imageAlt}
      />

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-dune-700">
            {info.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="space-y-2.5 rounded-2xl border border-sand-200 bg-sand-100 p-6 text-sm text-dune-700">
            {info.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} priority={i < 3} />
          ))}
        </div>

        <nav
          aria-label="Other departure cities"
          className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-sand-200 pt-6 text-sm"
        >
          <span className="font-semibold text-dune-900">Other departure cities</span>
          {departureInfo
            .filter((d) => d.slug !== info.slug)
            .map((d) => (
              <Link
                key={d.slug}
                href={`/tours/from/${d.slug}`}
                className="font-medium text-accent-600 hover:text-accent-700"
              >
                {d.city}
              </Link>
            ))}
          <Link href="/tours" className="font-medium text-accent-600 hover:text-accent-700">
            All tours
          </Link>
        </nav>
      </Container>
    </>
  );
}
