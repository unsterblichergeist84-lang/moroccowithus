import type { Departure } from "@/content/tours";

/**
 * Landing-page content for each departure city (/tours/from/[city]).
 * Titles are search titles (60 characters or fewer). No prices.
 */
export type DepartureInfo = {
  slug: string;
  city: Departure;
  seoTitle: string;
  description: string;
  headline: string;
  intro: string[];
  /** Why start here - short bullets. */
  reasons: string[];
  image: string;
  imageAlt: string;
};

export const departureInfo: DepartureInfo[] = [
  {
    slug: "fes",
    city: "Fes",
    seoTitle: "Private Tours from Fes: Sahara, Imperial Cities & More",
    description:
      "Seven private tours departing from Fes - the medina, the imperial cities, Chefchaouen and the Sahara at Merzouga. Private guide and driver, tailor-made.",
    headline: "Private tours from Fes",
    intro: [
      "Fes is the best starting point for the imperial cities and the shortest way into the Sahara from the north. The medina is the oldest living medieval city in Morocco, and from it the road runs south over the Middle Atlas to the dunes at Merzouga, or north into the Rif.",
      "Every tour below starts and ends where you choose, with your own guide and driver. Most travellers pair two nights in the medina with a few days on the road.",
    ],
    reasons: [
      "The fastest road to Merzouga and Erg Chebbi from the north",
      "Fes el Bali, Meknes and Volubilis all within a day's reach",
      "Easy connections to Chefchaouen and the Rif",
    ],
    image: "/images/fes/fes-07.jpg",
    imageAlt: "The medina of Fes",
  },
  {
    slug: "marrakech",
    city: "Marrakech",
    seoTitle: "Private Tours from Marrakech: Desert, Atlas & Essaouira",
    description:
      "Six private tours departing from Marrakech - the medina and gardens, Ait Benhaddou, the southern gorges, Essaouira and the Sahara. Tailor-made, with a private guide.",
    headline: "Private tours from Marrakech",
    intro: [
      "Marrakech is the main gateway to the High Atlas, the southern oases and the Sahara. Within three hours you can be in the mountains, on the Atlantic at Essaouira, or on the road to Ait Benhaddou.",
      "Each itinerary below is a starting point. We can add nights in Marrakech, swap the desert for the coast, or extend any route on to Fes.",
    ],
    reasons: [
      "Direct road over the Tizi n'Tichka pass to Ait Benhaddou",
      "Essaouira is three hours west",
      "A short flight or a long drive connects the desert and the coast",
    ],
    image: "/images/marrakech/marrakech-03.jpg",
    imageAlt: "The Marrakech medina",
  },
  {
    slug: "casablanca",
    city: "Casablanca",
    seoTitle: "Private Tours from Casablanca: Rabat, Fes & the Sahara",
    description:
      "Six private tours departing from Casablanca - Rabat, the imperial cities, the Atlantic coast, Chefchaouen and the Sahara, with a guided Hassan II Mosque visit.",
    headline: "Private tours from Casablanca",
    intro: [
      "Casablanca is where most international flights arrive, so it is the natural start for a first trip. From here the routes split: north to Rabat and the imperial cities, south down the coast to Essaouira and Marrakech, or the long way round to the Sahara.",
      "We pair a guided morning at the Hassan II Mosque with the road ahead, so you arrive in the country rather than just passing through the airport.",
    ],
    reasons: [
      "The main international gateway, with the most flights",
      "Rabat is an hour north, Marrakech about three hours south",
      "Suits both short city trips and ten-day grand tours",
    ],
    image: "/images/casablanca/casablanca-03.jpg",
    imageAlt: "Casablanca and the Hassan II Mosque",
  },
  {
    slug: "tangier",
    city: "Tangier",
    seoTitle: "Private Tours from Tangier: Chefchaouen, Fes & the Sahara",
    description:
      "Six private tours departing from Tangier - the kasbah and Cap Spartel, Chefchaouen, the Akchour waterfalls, Fes, and onward to the Sahara.",
    headline: "Private tours from Tangier",
    intro: [
      "Tangier is the entry point for travellers coming from Spain and a good start for the north: the strait, the blue lanes of Chefchaouen and the walking country of the Rif.",
      "From here the routes either stay in the north, run down the Atlantic side to Casablanca, or keep going south through Fes to the dunes and end in Marrakech.",
    ],
    reasons: [
      "Ferry, airport and high-speed rail all arrive here",
      "Chefchaouen and the Akchour waterfalls are about two hours away",
      "One-way routes to Marrakech avoid doubling back",
    ],
    image: "/images/tangier/tangier-02.jpg",
    imageAlt: "Tangier and the strait",
  },
];

export function getDepartureInfo(slug: string): DepartureInfo | undefined {
  return departureInfo.find((d) => d.slug === slug);
}
