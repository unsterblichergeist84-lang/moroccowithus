import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Gallery } from "@/components/Gallery";
import { TourCard } from "@/components/TourCard";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/config/site";
import { regions, getRegion, regionCover, regionPhotos } from "@/content/regions";
import { getTourBySlug } from "@/lib/tours";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const region = getRegion(params.slug);
  if (!region) return {};

  const path = `/destinations/${region.slug}`;
  const image = regionCover(region);
  return {
    title: region.name,
    description: region.blurb,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      title: region.name,
      description: region.blurb,
      images: [{ url: image }],
    },
    twitter: { images: [image] },
  };
}

export default function RegionPage({ params }: Params) {
  const region = getRegion(params.slug);
  if (!region) notFound();

  const tours = region.tourSlugs
    .map((slug) => getTourBySlug(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const photos = regionPhotos(region, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: region.name, path: `/destinations/${region.slug}` },
        ])}
      />

      <PageHeader
        eyebrow="Destination"
        title={region.name}
        intro={region.blurb}
        image={regionCover(region)}
        imageAlt={region.name}
      />

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <p className="text-lg text-dune-700">{region.description}</p>

            <h2 className="mt-10 text-xl font-semibold text-dune-900">
              Worth your time
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {region.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-dune-700">
                  <Icon.Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-xl font-semibold text-dune-900">Gallery</h2>
            <div className="mt-4">
              <Gallery images={photos} title={region.name} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl border border-sand-200 bg-sand-100 p-6">
              <h2 className="text-lg font-semibold text-dune-900">
                Travel this region
              </h2>
              <p className="mt-2 text-sm text-dune-600">
                It is almost always part of a longer private route. Tell us what
                you have in mind and we build it around your dates.
              </p>
              <Link href="/contact" className="btn-primary mt-5 w-full">
                Start an inquiry
              </Link>
              <Link
                href="/destinations"
                className="mt-3 block text-center text-sm font-medium text-accent-600 hover:text-accent-700"
              >
                All destinations
              </Link>
            </div>
          </aside>
        </div>
      </Container>

      {tours.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-100">
          <Container className="py-14 sm:py-16">
            <p className="eyebrow">Tours that cover this region</p>
            <h2 className="mt-3 text-2xl font-bold text-dune-900 sm:text-3xl">
              Where {region.name} fits
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-accent-700 text-white">
        <Container className="py-14 text-center sm:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Build a route through {region.name}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Send a few lines about your dates and what you want to see. We reply
            with questions and a draft.
          </p>
          <Link href="/contact" className="btn-on-dark mt-6">
            Start an inquiry
          </Link>
        </Container>
      </section>
    </>
  );
}
