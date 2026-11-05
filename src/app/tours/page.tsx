import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ToursExplorer } from "@/components/ToursExplorer";
import { Faq, faqJsonLd } from "@/components/Faq";
import { IncludedInEvery } from "@/components/IncludedInEvery";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/config/site";
import { getAllTours, getTourCount } from "@/lib/tours";
import { regions } from "@/content/regions";
import { departureInfo } from "@/content/departures";
import { faq } from "@/content/faq";

const TOURS_OG = "/images/ait-benhaddou/ait-benhaddou-06.jpg";

export const metadata: Metadata = {
  title: { absolute: "Private Morocco Tours: Fes, Marrakech, Casablanca, Tangier" },
  description:
    "Private, tailor-made itineraries across Morocco - the imperial cities, the Atlas, the north and the Sahara. No fixed departures, no prices online.",
  alternates: { canonical: "/tours" },
  openGraph: {
    url: absoluteUrl("/tours"),
    title: "Tours",
    description:
      "Private, tailor-made itineraries across Morocco. No fixed departures, no prices online.",
    images: [{ url: TOURS_OG }],
  },
  twitter: { images: [TOURS_OG] },
};

const toursFaq = faq.filter((item) =>
  [
    "Can you build a trip that isn't one of these itineraries?",
    "Why are there no prices on the site?",
    "How far ahead should I get in touch?",
    "Who will I be travelling with day to day?",
  ].includes(item.question),
);

export default function ToursPage() {
  const tours = getAllTours();
  const regionOptions = regions.map((r) => ({
    slug: r.slug,
    name: r.name,
    tourSlugs: r.tourSlugs,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
          ]),
          faqJsonLd(toursFaq),
        ]}
      />

      <PageHeader
        eyebrow="Private, tailor-made"
        title="Tours"
        intro={`${getTourCount()} private itineraries across ${regions.length} regions. Each one is a starting point - we adjust the route, the pace and the nights to suit your group.`}
        image={TOURS_OG}
        imageAlt="The kasbah of Ait Benhaddou above the Ounila valley"
      />

      <Container className="pt-10">
        <p className="text-sm text-dune-600">
          Browse by departure city:{" "}
          {departureInfo.map((d, i) => (
            <span key={d.slug}>
              {i > 0 && " · "}
              <Link href={`/tours/from/${d.slug}`} className="font-medium text-accent-600 hover:text-accent-700">
                {d.city}
              </Link>
            </span>
          ))}
        </p>
      </Container>

      <Container className="py-10 sm:py-12">
        <ToursExplorer tours={tours} regionOptions={regionOptions} />
      </Container>

      <section className="border-y border-sand-200 bg-sand-100">
        <IncludedInEvery />
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Before you ask</p>
            <h2 className="mt-3 text-2xl font-bold text-dune-900 sm:text-3xl">
              Questions people have
            </h2>
          </div>
          <Faq items={toursFaq} />
        </div>
      </Container>

      <section className="bg-accent-700 text-white">
        <Container className="py-14 text-center sm:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">
            None of these are quite right?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Most trips we run are a combination or an extension of what is on this
            page. Send us the shape of what you want and we will draft it.
          </p>
          <Link href="/contact" className="btn-on-dark mt-6">
            Request a custom trip
          </Link>
        </Container>
      </section>
    </>
  );
}
