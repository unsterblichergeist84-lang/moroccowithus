import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { RegionGrid } from "@/components/RegionGrid";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/config/site";
import { regions } from "@/content/regions";

const DEST_OG = "/images/tinghir/tinghir-12.jpg";

export const metadata: Metadata = {
  title: "Morocco Destinations: Fes, Marrakech, Sahara, Rif & Coast",
  description:
    "The regions of Morocco we travel - the imperial cities, Marrakech and the Atlas, the Sahara, the northern Rif, the Atlantic coast and the southern oases.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    url: absoluteUrl("/destinations"),
    title: "Destinations",
    description:
      "The regions of Morocco we travel - and the private tours that cover each one.",
    images: [{ url: DEST_OG }],
  },
  twitter: { images: [DEST_OG] },
};

export default function DestinationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ])}
      />

      <PageHeader
        eyebrow="Regions of Morocco"
        title="Destinations"
        intro={`${regions.length} regions, almost always combined into one route. Open any of them for what it holds and which tours spend time there.`}
        image={DEST_OG}
        imageAlt="The Todgha gorge near Tinghir"
      />

      <Container className="py-14 sm:py-20">
        <RegionGrid />
      </Container>

      <section className="bg-accent-700 text-white">
        <Container className="py-14 text-center sm:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Not sure how to combine them?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            That is what the planning is for. Tell us which regions pull at you
            and roughly how long you have, and we will send back a route.
          </p>
          <Link href="/contact" className="btn-on-dark mt-6">
            Start an inquiry
          </Link>
        </Container>
      </section>
    </>
  );
}
