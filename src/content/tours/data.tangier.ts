import type { Tour } from "./types";
import { galleries } from "@/content/galleries.generated";

/** Additional tours departing from Tangier. Provisional draft copy. */
export const tangierTours: Tour[] = [
  {
    slug: "tangier-chefchaouen-and-fes",
    departure: "Tangier",
    title: "Tangier, Chefchaouen & Fes",
    region: "Tangier, the Rif & Fes",
    durationDays: 6,
    summary:
      "The classic northern line - from the strait down through the blue lanes of Chefchaouen to the medieval medina of Fes.",
    highlights: [
      "Tangier's kasbah, medina and Cap Spartel",
      "A full day in Chefchaouen with a walk toward Akchour",
      "Two days in Fes el Bali with a private guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tangier",
        description:
          "Airport or port pick-up, hotel check-in and a first walk through the medina.",
      },
      {
        day: 2,
        title: "Tangier",
        description:
          "A guided day - the kasbah, the medina, the Caves of Hercules and Cap Spartel at sunset.",
      },
      {
        day: 3,
        title: "To Chefchaouen",
        description:
          "Drive into the Rif and settle into the blue medina for the evening.",
      },
      {
        day: 4,
        title: "Chefchaouen and Akchour",
        description:
          "An early walk through the lanes, then the Akchour waterfalls.",
      },
      {
        day: 5,
        title: "Chefchaouen to Fes",
        description:
          "South through olive country to Fes, arriving in time for a first walk in the old city.",
      },
      {
        day: 6,
        title: "Fes and departure",
        description:
          "A guided morning in Fes el Bali, then transfer to the airport or station.",
      },
    ],
    included: [
      "5 nights in riads and boutique hotels with breakfast",
      "Private guides in Tangier and Fes",
      "Local walking guide at Akchour",
      "Private driver and vehicle for the full route",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Park fees",
      "Travel insurance and tips",
    ],
    heroImage: galleries.chefchaouen[6],
    gallery: [
      galleries.tangier[0],
      galleries.tangier[7],
      galleries.chefchaouen[3],
      galleries.chefchaouen[19],
      galleries.akchour[3],
      galleries.fes[7],
      galleries.fes[30],
    ],
    private: true,
  },
  {
    slug: "tangier-rif-and-akchour-walking",
    departure: "Tangier",
    title: "Rif Mountains & Akchour Walking",
    region: "The Rif & Talassemtane",
    durationDays: 4,
    summary:
      "A walking-focused loop through the Rif - Chefchaouen as a base, the river path to the Akchour waterfalls and quiet villages between.",
    highlights: [
      "A river walk to the Akchour waterfalls in Talassemtane national park",
      "Village lanes and viewpoints above Chefchaouen",
      "A local walking guide throughout",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tangier to Chefchaouen",
        description:
          "Pick-up in Tangier and drive into the Rif, with a first walk through the medina.",
      },
      {
        day: 2,
        title: "Akchour",
        description:
          "A guided walk along the river toward the waterfalls, with a picnic lunch.",
      },
      {
        day: 3,
        title: "Villages above Chefchaouen",
        description:
          "A walk through mountain villages and viewpoints above the town, with the afternoon free.",
      },
      {
        day: 4,
        title: "Return to Tangier",
        description:
          "Back to Tangier for a flight or onward travel.",
      },
    ],
    included: [
      "3 nights in a riad with breakfast",
      "Local walking guide on all walking days",
      "Private driver and vehicle",
      "Picnic lunch at Akchour",
    ],
    notIncluded: [
      "Flights",
      "Other lunches and dinners",
      "Park fees",
      "Travel insurance and tips",
    ],
    heroImage: galleries.akchour[0],
    gallery: [
      galleries.akchour[2],
      galleries.akchour[5],
      galleries.akchour[7],
      galleries.chefchaouen[5],
      galleries.chefchaouen[13],
      galleries.chefchaouen[25],
    ],
    private: true,
  },
  {
    slug: "tangier-to-casablanca-atlantic-road",
    departure: "Tangier",
    title: "Tangier to Casablanca by the Atlantic Road",
    region: "Tangier, Rabat & Casablanca",
    durationDays: 4,
    summary:
      "Down the Atlantic side of Morocco from the strait to the largest city in the country, with time in Rabat on the way.",
    highlights: [
      "Tangier's medina and Cap Spartel",
      "Rabat's Kasbah of the Udayas and the Hassan Tower",
      "The Hassan II Mosque in Casablanca",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tangier",
        description:
          "Arrival, a guided walk through the kasbah and medina, and sunset at Cap Spartel.",
      },
      {
        day: 2,
        title: "Tangier to Rabat",
        description:
          "South along the coast, with a stop at the old Atlantic towns on the way, arriving in Rabat for the afternoon.",
      },
      {
        day: 3,
        title: "Rabat to Casablanca",
        description:
          "A morning at the Kasbah of the Udayas and the Hassan Tower, then the short drive to Casablanca.",
      },
      {
        day: 4,
        title: "Casablanca and departure",
        description:
          "A guided visit to the Hassan II Mosque, then transfer to the airport.",
      },
    ],
    included: [
      "3 nights in riads and hotels with breakfast",
      "Private guides in Tangier and Casablanca",
      "Private driver and vehicle",
      "Hassan II Mosque guided entry",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.tangier[3],
    gallery: [
      galleries.tangier[4],
      galleries.tangier[10],
      galleries.rabat[0],
      galleries.rabat[8],
      galleries.rabat[15],
      galleries.casablanca[4],
      galleries.casablanca[21],
    ],
    private: true,
  },
  {
    slug: "tangier-to-the-sahara",
    departure: "Tangier",
    title: "Tangier to the Sahara",
    region: "Tangier to Erg Chebbi",
    durationDays: 9,
    summary:
      "From the Mediterranean strait to the dunes of the Sahara - the Rif, Fes and the Middle Atlas on the way south, two nights in the desert, and a return by the Atlas.",
    highlights: [
      "Chefchaouen's blue lanes",
      "A full day in Fes el Bali",
      "Two nights at a desert camp at Erg Chebbi",
      "Ait Benhaddou and the Atlas crossing to Marrakech",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tangier",
        description:
          "Pick-up and a first walk through the medina.",
      },
      {
        day: 2,
        title: "To Chefchaouen",
        description:
          "Drive into the Rif and spend the afternoon in the blue medina.",
      },
      {
        day: 3,
        title: "Chefchaouen to Fes",
        description:
          "South through olive country to Fes and the old city.",
      },
      {
        day: 4,
        title: "Fes el Bali",
        description:
          "A full guided day among the medersas, souks and workshops.",
      },
      {
        day: 5,
        title: "Fes to Midelt",
        description:
          "Over the Middle Atlas via Ifrane and the cedar forest.",
      },
      {
        day: 6,
        title: "Merzouga",
        description:
          "Down the Ziz valley to the dunes and a first night in camp.",
      },
      {
        day: 7,
        title: "The dunes",
        description:
          "Sunrise camel walk, time with a nomadic family and a second night in camp.",
      },
      {
        day: 8,
        title: "Todgha Gorge to Ait Benhaddou",
        description:
          "West through the gorge and along the road of a thousand kasbahs.",
      },
      {
        day: 9,
        title: "To Marrakech",
        description:
          "Ait Benhaddou, the Tizi n'Tichka pass and arrival in Marrakech, where the trip ends.",
      },
    ],
    included: [
      "8 nights: riads, hotels and 2 nights in a desert camp",
      "Private guides in Tangier and Fes",
      "Private driver and vehicle for the full route",
      "4x4 dune transfer and camel walk",
    ],
    notIncluded: [
      "Flights",
      "Most lunches and dinners",
      "Travel insurance",
      "Tips for guides and drivers",
    ],
    heroImage: galleries.merzouga[32],
    gallery: [
      galleries.tangier[6],
      galleries.chefchaouen[9],
      galleries.fes[16],
      galleries.merzouga[16],
      galleries.merzouga[44],
      galleries.tinghir[14],
      galleries["ait-benhaddou"][7],
    ],
    private: true,
  },
];
