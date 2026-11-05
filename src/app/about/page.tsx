import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Faq, faqJsonLd } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { site, absoluteUrl } from "@/config/site";
import { getTourCount } from "@/lib/tours";
import { regions } from "@/content/regions";
import { faq } from "@/content/faq";

const ABOUT_OG = "/images/fes/fes-19.jpg";

export const metadata: Metadata = {
  title: "About Us: Private, Locally Guided Morocco Tours",
  description: `Who runs ${site.name} and how we build private trips in Morocco.`,
  alternates: { canonical: "/about" },
  openGraph: {
    url: absoluteUrl("/about"),
    title: "About",
    description: `Who runs ${site.name} and how we build private trips in Morocco.`,
    images: [{ url: ABOUT_OG }],
  },
  twitter: { images: [ABOUT_OG] },
};

const approach = [
  {
    title: "Fewer places, more time",
    body: "The most common change we make to a first draft is taking something out. A second night in the desert or an unplanned afternoon in a medina is usually worth more than another town.",
  },
  {
    title: "Local guides, city by city",
    body: "The person showing you Fes lives in Fes. They know which workshops are working that day, which lanes to take and when the medersas are empty.",
  },
  {
    title: "One point of contact",
    body: "The same person plans your trip and is reachable while you travel. If a road closes or a plan needs to shift, there is no call centre in between.",
  },
  {
    title: "Honest about trade-offs",
    body: "If your dates are wrong for the desert, or a route needs a long driving day, we say so in the planning rather than letting you find out on the road.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          faqJsonLd(faq),
        ]}
      />

      <PageHeader
        eyebrow="About"
        title="A small team, one trip at a time"
        intro="We plan and run private journeys across Morocco - no group departures, no coach tours."
        image={ABOUT_OG}
        imageAlt="A quiet lane in the Fes medina"
      />

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px]">
          <div className="max-w-2xl">
            <div className="space-y-4 text-dune-700">
              <p className="rounded-lg border border-sand-300 bg-sand-100 p-4 text-sm text-dune-600">
                Placeholder page. The real story, names and photos go in once the
                brand is locked - this is here so the structure and links are in
                place.
              </p>
              <p>
                We are a small team based in Morocco who plan and run private
                journeys - no group departures, no coach tours. Every trip is
                built for one party at a time, around the dates, the pace and the
                places that party actually cares about.
              </p>
              <p>
                We currently run {getTourCount()} core itineraries across{" "}
                {regions.length} regions, from the imperial cities to the
                northern Rif and the dunes of Erg Chebbi. They are all starting
                points - most trips end up somewhere between two of them.
              </p>
              <p>
                We do not publish prices because there is no package to price. We
                cost each trip from the itinerary once it is real, so you pay for
                the trip you are taking and nothing else.
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand-100 lg:sticky lg:top-24 lg:self-start">
            <Image
              src="/images/marrakech/marrakech-21.jpg"
              alt="A courtyard in the Marrakech medina"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>

      <section className="border-y border-sand-200 bg-sand-100">
        <Container className="py-14 sm:py-16">
          <h2 className="text-2xl font-semibold text-dune-900">How we work</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {approach.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-dune-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-dune-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-sand-100">
              <Image
                src="/images/merzouga/merzouga-31.jpg"
                alt="A desert camp at dusk near Merzouga"
                fill
                sizes="(min-width: 1024px) 240px, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-square overflow-hidden rounded-xl bg-sand-100">
              <Image
                src="/images/chefchaouen/chefchaouen-20.jpg"
                alt="Blue-washed steps in Chefchaouen"
                fill
                sizes="(min-width: 1024px) 240px, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-dune-900">
              Based in Morocco
            </h2>
            <div className="mt-4 space-y-4 text-dune-700">
              <p>
                Everything is arranged on the ground here - the guides, the
                drivers, the riads and the desert camps are people we work with
                directly and see through the year, not names on a booking system.
              </p>
              <p>
                It also means the help does not stop when you land. There is a
                local number to call, and someone who can actually change a plan
                if the weather or the road makes that necessary.
              </p>
            </div>
            <Link
              href="/destinations"
              className="mt-6 inline-block text-sm font-medium text-accent-600 hover:text-accent-700"
            >
              See the regions we cover &rarr;
            </Link>
          </div>
        </div>
      </Container>

      <section className="border-t border-sand-200 bg-sand-100">
        <Container className="py-14 sm:py-16">
          <h2 className="text-2xl font-semibold text-dune-900">
            Frequently asked
          </h2>
          <div className="mt-6 max-w-3xl">
            <Faq items={faq} />
          </div>
        </Container>
      </section>

      <Container className="py-14 text-center sm:py-16">
        <h2 className="text-2xl font-semibold text-dune-900">
          Start with a few lines
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-dune-600">
          When you want to travel, how many of you, and what you want the trip to
          include. That is enough for us to draft a route.
        </p>
        <Link
          href="/contact"
          className="mt-6 btn-primary"
        >
          Start an inquiry
        </Link>
      </Container>
    </>
  );
}
