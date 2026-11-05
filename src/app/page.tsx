import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TourCard } from "@/components/TourCard";
import { RegionGrid } from "@/components/RegionGrid";
import { Faq, faqJsonLd } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { StatsStrip } from "@/components/StatsStrip";
import { IncludedInEvery } from "@/components/IncludedInEvery";
import { Testimonials } from "@/components/Testimonials";
import { testimonialsArePlaceholder } from "@/content/testimonials";
import { Icon } from "@/components/icons";
import { site, absoluteUrl } from "@/config/site";
import { organizationJsonLd } from "@/lib/jsonld";
import { faq } from "@/content/faq";
import { regions } from "@/content/regions";
import { getFeaturedTours, getTourCount } from "@/lib/tours";
import { getAllPosts } from "@/lib/blog";

const HOME_OG = "/images/merzouga/merzouga-03.jpg";

export const metadata: Metadata = {
  title: { absolute: `${site.name} - Private, Tailor-Made Morocco Tours` },
  description:
    "Private Morocco tours from Fes, Marrakech, Casablanca and Tangier - imperial cities, the Atlas, the north and the Sahara. Tailor-made, quote on inquiry.",
  alternates: { canonical: "/" },
  openGraph: {
    url: absoluteUrl("/"),
    title: `${site.name} - ${site.tagline}`,
    description: site.tagline,
    images: [{ url: HOME_OG, width: 1600, height: 1200 }],
  },
  twitter: { images: [HOME_OG] },
};

const steps = [
  {
    n: "1",
    icon: Icon.Mail,
    title: "Send an inquiry",
    body: "A few lines about when you want to travel, how many of you there are and what you want the trip to include. That is enough for us to start.",
  },
  {
    n: "2",
    icon: Icon.Route,
    title: "We draft a route",
    body: "You get a day-by-day itinerary and a full quote, then we adjust the pace, the stops and the places to stay until it fits.",
  },
  {
    n: "3",
    icon: Icon.Compass,
    title: "You travel",
    body: "Your guide and driver are yours for the trip. We stay reachable the whole time in case anything needs to change on the road.",
  },
];

const values = [
  {
    icon: Icon.Users,
    title: "Private by default",
    body: "No fixed departures and no other travellers. The pace, the stops and the nights are yours to shape.",
  },
  {
    icon: Icon.Sparkles,
    title: "Quote on inquiry",
    body: "No package pricing. We cost each trip from the real itinerary, so you only pay for what you actually do.",
  },
  {
    icon: Icon.MapPin,
    title: "People on the ground",
    body: "Local guides who know the makers, the back lanes and the quiet hours at the busy sites.",
  },
  {
    icon: Icon.Sun,
    title: "Unhurried",
    body: "Most people try to see too much. We would rather add a night in the desert than another city.",
  },
];

const trustPoints = [
  "Licensed local guides",
  "100% private - no group departures",
  "We usually reply within a working day",
  "Planned and run from Morocco",
];

const dateFormat = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function HomePage() {
  const featured = getFeaturedTours(3);
  const tourCount = getTourCount();
  const regionCount = regions.length;
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <JsonLd data={[organizationJsonLd(), faqJsonLd(faq)]} />

      <section className="relative isolate overflow-hidden bg-dune-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={HOME_OG}
            alt="Dunes of Erg Chebbi at first light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dune-900 via-dune-900/80 to-dune-900/60" />
        </div>

        <Container className="flex min-h-[58vh] max-w-3xl flex-col justify-center py-20 sm:min-h-[64vh]">
          <p className="eyebrow-on-dark">Private travel in Morocco</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Every route is built for one group at a time. No fixed departures, no
            prices online - you tell us what you have in mind and we design the
            trip around it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Start an inquiry
            </Link>
            <Link href="/tours" className="btn-ghost-light">
              Explore {tourCount} tours
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="rounded-full border border-white/30 bg-dune-900/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
              >
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <StatsStrip />

      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
              A small team, one trip at a time
            </h2>
            <div className="mt-5 space-y-4 text-dune-600">
              <p>
                We plan and run private journeys across Morocco - the imperial
                cities, the High Atlas, the northern Rif and the dunes of Erg
                Chebbi. There are no coaches and no group departures. Every trip
                is put together for a single party, around the dates and the
                places that party actually cares about.
              </p>
              <p>
                The itineraries below are where most people start. They get
                stretched, combined and reshaped in the planning - a night added
                here, a city dropped there - until the trip is yours.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-medium text-accent-600 hover:text-accent-700"
            >
              More about how we work &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl bg-sand-100 shadow-sm">
              <Image
                src="/images/fes/fes-08.jpg"
                alt="A dyer's lane in the Fes medina"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative mt-10 aspect-[3/4] overflow-hidden rounded-xl bg-sand-100 shadow-sm">
              <Image
                src="/images/marrakech/marrakech-06.jpg"
                alt="Lanterns in a Marrakech souk"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </Container>

      <Container className="pt-16 sm:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The journeys</p>
            <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
              Featured journeys
            </h2>
            <p className="mt-3 text-dune-600">
              {tourCount} private itineraries across {regionCount} regions of Morocco.
            </p>
          </div>
          <Link
            href="/tours"
            className="text-sm font-medium text-accent-600 hover:text-accent-700"
          >
            All tours &rarr;
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} priority={i === 0} />
          ))}
        </div>
      </Container>

      <Container className="py-16 sm:py-20">
        <p className="eyebrow">Where we travel</p>
        <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
          {regionCount} regions of Morocco
        </h2>
        <p className="mt-3 max-w-2xl text-dune-600">
          Usually combined into a single route. Point-to-point trips - flying into
          one city and out of another - keep the driving down.
        </p>
        <div className="mt-10">
          <RegionGrid />
        </div>
      </Container>

      <section className="border-y border-sand-200 bg-accent-50">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
            From a few lines to a finished route
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="rounded-xl border border-accent-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-600 text-white">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-accent-600">
                    Step {step.n}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-dune-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-dune-600">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div key={item.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-accent-600">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-dune-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-dune-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <IncludedInEvery />

      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Before you ask</p>
            <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-3 text-dune-600">
              A few things worth knowing before you get in touch. There is more on
              the{" "}
              <Link href="/about" className="font-medium text-accent-600 hover:text-accent-700">
                about page
              </Link>
              .
            </p>
          </div>
          <Faq items={faq.slice(0, 5)} />
        </div>
      </Container>

      {posts.length > 0 && (
        <section className="border-y border-sand-200 bg-sand-100">
          <Container className="py-16 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">From the blog</p>
                <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
                  Notes from the road
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-accent-600 hover:text-accent-700"
              >
                All posts &rarr;
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="surface-card group flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] bg-sand-100">
                    <Image
                      src={post.ogImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium text-accent-700">
                      <time dateTime={post.date}>
                        {dateFormat.format(new Date(post.date))}
                      </time>
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-dune-900">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-dune-600">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Hidden until real, permissioned quotes replace the placeholders. */}
      {!testimonialsArePlaceholder && <Testimonials />}

      <section className="bg-accent-700 text-white">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Have a trip in mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Send a few lines about when you want to travel and what you want to
            see. We reply with questions and a draft itinerary - no obligation.
          </p>
          <Link href="/contact" className="btn-on-dark mt-8">
            Start an inquiry
          </Link>
        </Container>
      </section>
    </>
  );
}
