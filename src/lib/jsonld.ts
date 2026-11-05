import { site, absoluteUrl } from "@/config/site";
import type { Tour } from "@/content/tours";

type Json = Record<string, unknown>;

/** Sitewide organisation / travel agency node. */
export function organizationJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: absoluteUrl("/"),
    email: site.email,
    image: absoluteUrl(site.defaultOgImage),
    logo: absoluteUrl(site.logo),
    slogan: site.tagline,
    areaServed: "MA",
    sameAs: [site.instagram],
  };
}

export function touristTripJsonLd(tour: Tour): Json {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": absoluteUrl(`/tours/${tour.slug}#trip`),
    name: tour.title,
    description: tour.summary,
    url: absoluteUrl(`/tours/${tour.slug}`),
    image: absoluteUrl(tour.heroImage),
    touristType: "Private, tailor-made travel",
    provider: { "@id": absoluteUrl("/#organization") },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        item: {
          "@type": "TouristAttraction",
          name: day.title,
          description: day.description,
        },
      })),
    },
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(`/blog/${input.slug}`),
    image: absoluteUrl(input.image),
    datePublished: input.date,
    dateModified: input.date,
    author: { "@type": "Person", name: input.author },
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbJsonLd(
  crumbs: { name: string; path: string }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
