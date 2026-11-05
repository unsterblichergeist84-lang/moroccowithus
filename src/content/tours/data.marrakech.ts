import type { Tour } from "./types";
import { galleries } from "@/content/galleries.generated";

/** Additional tours departing from Marrakech. Provisional draft copy. */
export const marrakechTours: Tour[] = [
  {
    slug: "marrakech-and-essaouira",
    departure: "Marrakech",
    title: "Marrakech & Essaouira",
    region: "Marrakech & the Atlantic Coast",
    durationDays: 5,
    summary:
      "Two very different towns, three hours apart - the souks and gardens of Marrakech, then the sea walls and fishing harbour of Essaouira.",
    highlights: [
      "A guided morning in the Marrakech medina",
      "Argan cooperatives on the road to the coast",
      "The Skala ramparts and the working harbour at Essaouira",
      "Two unhurried nights by the sea",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description:
          "Airport pick-up, riad check-in and an evening walk toward Jemaa el-Fnaa.",
      },
      {
        day: 2,
        title: "Marrakech medina",
        description:
          "A private guide takes you through the souks, the Bahia Palace and a quiet garden, with a long lunch break in the middle.",
      },
      {
        day: 3,
        title: "To Essaouira",
        description:
          "Drive west through argan country, stopping at a women's cooperative, and arrive in Essaouira in the afternoon.",
      },
      {
        day: 4,
        title: "Essaouira",
        description:
          "Ramparts, harbour and medina on foot, with free time for the beach or a long seafood lunch.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Return to Marrakech for a flight, or continue to Agadir or Casablanca.",
      },
    ],
    included: [
      "4 nights in riads with breakfast",
      "Private guide in Marrakech",
      "Private driver and vehicle",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.essaouira[4],
    gallery: [
      galleries.marrakech[6],
      galleries.marrakech[20],
      galleries.marrakech[31],
      galleries.essaouira[1],
      galleries.essaouira[9],
      galleries.essaouira[14],
      galleries.essaouira[17],
    ],
    private: true,
  },
  {
    slug: "marrakech-atlas-and-ait-benhaddou",
    departure: "Marrakech",
    title: "Atlas & Ait Benhaddou",
    region: "High Atlas & Ouarzazate",
    durationDays: 3,
    summary:
      "A short escape over the High Atlas - mountain villages, the Tizi n'Tichka pass and the earthen kasbah of Ait Benhaddou.",
    highlights: [
      "The Tizi n'Tichka pass at over 2,200 metres",
      "A walk through a Berber village in the High Atlas",
      "Ait Benhaddou, a UNESCO World Heritage ksar",
      "Ouarzazate and the Taourirt kasbah",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ait Benhaddou",
        description:
          "Leave the city early and climb the Tizi n'Tichka pass, stopping at viewpoints and a village for tea, then reach Ait Benhaddou for the night.",
      },
      {
        day: 2,
        title: "Ait Benhaddou and Ouarzazate",
        description:
          "Walk the kasbah at first light, then visit Ouarzazate and the Taourirt kasbah before a slow afternoon.",
      },
      {
        day: 3,
        title: "Return to Marrakech",
        description:
          "Back over the pass with a long lunch stop and arrival in Marrakech by late afternoon.",
      },
    ],
    included: [
      "2 nights in a kasbah-style hotel with breakfast",
      "Private driver and vehicle",
      "Local guide at Ait Benhaddou",
      "Airport or hotel transfers in Marrakech",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Entrance to private kasbahs",
      "Travel insurance and tips",
    ],
    heroImage: galleries["ait-benhaddou"][1],
    gallery: [
      galleries["ait-benhaddou"][0],
      galleries["ait-benhaddou"][4],
      galleries["ait-benhaddou"][7],
      galleries["ait-benhaddou"][10],
      galleries.ouarzazate[0],
      galleries.ouarzazate[2],
      galleries.marrakech[15],
    ],
    private: true,
  },
  {
    slug: "marrakech-southern-oases-and-gorges",
    departure: "Marrakech",
    title: "Southern Oases & Gorges",
    region: "Draa, Dades & Todgha",
    durationDays: 4,
    summary:
      "Marrakech to the palm groves and canyons south of the Atlas - Skoura, the Dades valley and the Todgha Gorge - without going as far as the dunes.",
    highlights: [
      "Skoura's palm oasis and its kasbahs",
      "The Dades valley and its rock formations",
      "Walking the floor of the Todgha Gorge",
      "Ait Benhaddou on the way back",
    ],
    itinerary: [
      {
        day: 1,
        title: "Over the Atlas to Skoura",
        description:
          "Cross the Tizi n'Tichka pass, stop at Ait Benhaddou, and reach the palm oasis at Skoura for the night.",
      },
      {
        day: 2,
        title: "Dades valley",
        description:
          "Follow the road of a thousand kasbahs into the Dades valley, with walks among the rock formations.",
      },
      {
        day: 3,
        title: "Todgha Gorge",
        description:
          "A morning walk in the Todgha Gorge, then Tinghir's palm groves and the long drive back toward Ouarzazate.",
      },
      {
        day: 4,
        title: "Return to Marrakech",
        description:
          "Over the pass again, with time to stop where the light is good, arriving in Marrakech by evening.",
      },
    ],
    included: [
      "3 nights in kasbah hotels with breakfast",
      "Private driver and vehicle for the full route",
      "Local guide for the gorge walk",
      "Airport or hotel transfers in Marrakech",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.tinghir[5],
    gallery: [
      galleries.tinghir[0],
      galleries.tinghir[12],
      galleries.tinghir[20],
      galleries.tinghir[28],
      galleries["ait-benhaddou"][2],
      galleries.ouarzazate[1],
      galleries.marrakech[27],
    ],
    private: true,
  },
  {
    slug: "marrakech-grand-sahara-and-coast",
    departure: "Marrakech",
    title: "Grand Sahara & Coast",
    region: "Marrakech, Erg Chebbi & Essaouira",
    durationDays: 8,
    summary:
      "The long version - Marrakech, the Atlas, two nights in the dunes of Merzouga and a few slow days by the sea in Essaouira to finish.",
    highlights: [
      "Two nights at a desert camp beneath Erg Chebbi",
      "Ait Benhaddou, Skoura and the Todgha Gorge",
      "Sunrise camel walk and time with a nomadic family",
      "Three days of rest by the sea in Essaouira",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description:
          "Airport pick-up, riad check-in and a relaxed first evening.",
      },
      {
        day: 2,
        title: "Over the Atlas to Skoura",
        description:
          "The Tizi n'Tichka pass, a stop at Ait Benhaddou and the palm oasis at Skoura.",
      },
      {
        day: 3,
        title: "Todgha Gorge to Merzouga",
        description:
          "Through the Todgha Gorge and on to Erg Chebbi, reaching camp at sunset.",
      },
      {
        day: 4,
        title: "The dunes",
        description:
          "Sunrise camel walk, a slow day among the oasis villages and a second night in camp.",
      },
      {
        day: 5,
        title: "Back toward the Draa",
        description:
          "A long drive west through the Draa valley with stops at kasbah villages.",
      },
      {
        day: 6,
        title: "To Essaouira",
        description:
          "Cross to the Atlantic coast through argan country and arrive at Essaouira by evening.",
      },
      {
        day: 7,
        title: "Essaouira",
        description:
          "A free day by the sea - ramparts, harbour, beach and long lunches.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Transfer to Essaouira or Marrakech airport.",
      },
    ],
    included: [
      "7 nights: riads, kasbah hotels and 2 nights in a desert camp",
      "Private driver and vehicle for the full route",
      "4x4 dune transfer and camel walk",
      "Breakfasts, and dinner at the desert camp",
    ],
    notIncluded: [
      "Flights",
      "Most lunches and dinners",
      "Travel insurance",
      "Tips for guides and drivers",
    ],
    heroImage: galleries.merzouga[14],
    gallery: [
      galleries.marrakech[9],
      galleries["ait-benhaddou"][6],
      galleries.merzouga[2],
      galleries.merzouga[26],
      galleries.merzouga[41],
      galleries.tinghir[18],
      galleries.essaouira[6],
      galleries.essaouira[12],
    ],
    private: true,
  },
];
