import type { Tour } from "./types";
import { galleries } from "@/content/galleries.generated";

/** Tours departing from Casablanca. Provisional draft copy. */
export const casablancaTours: Tour[] = [
  {
    slug: "casablanca-and-rabat",
    departure: "Casablanca",
    title: "Casablanca & Rabat",
    region: "Casablanca & Rabat",
    durationDays: 3,
    summary:
      "Morocco's modern commercial capital and its calm political one - the Hassan II Mosque, art deco boulevards, and Rabat's kasbah and Hassan Tower.",
    highlights: [
      "A guided visit inside the Hassan II Mosque",
      "Art deco architecture in the centre of Casablanca",
      "The Corniche and the old medina",
      "Rabat's Kasbah of the Udayas and the Hassan Tower",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport pick-up, hotel check-in and an evening walk along the Corniche.",
      },
      {
        day: 2,
        title: "Casablanca",
        description:
          "A private guide takes you through the Hassan II Mosque, the art deco centre and the old medina.",
      },
      {
        day: 3,
        title: "Rabat and departure",
        description:
          "A short drive up the coast to Rabat for the kasbah and the Hassan Tower, then transfer to the airport or train.",
      },
    ],
    included: [
      "2 nights in a boutique hotel with breakfast",
      "Private guide in Casablanca",
      "Hassan II Mosque guided entry",
      "Private driver and vehicle",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.casablanca[2],
    gallery: [
      galleries.casablanca[0],
      galleries.casablanca[8],
      galleries.casablanca[15],
      galleries.casablanca[24],
      galleries.rabat[1],
      galleries.rabat[7],
      galleries.rabat[13],
    ],
    private: true,
  },
  {
    slug: "casablanca-imperial-cities",
    departure: "Casablanca",
    title: "Casablanca to the Imperial Cities",
    region: "Casablanca, Rabat, Meknes & Fes",
    durationDays: 6,
    summary:
      "Start on the coast and travel inland through Rabat, Volubilis and Meknes to finish in the medina of Fes.",
    highlights: [
      "The Hassan II Mosque and a guided Casablanca morning",
      "Rabat's kasbah and Hassan Tower",
      "Roman Volubilis and the gates of Meknes",
      "Two full days in Fes el Bali",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport pick-up and an easy first evening on the Corniche.",
      },
      {
        day: 2,
        title: "Casablanca to Rabat",
        description:
          "A guided morning at the Hassan II Mosque, then up the coast to Rabat for the Kasbah of the Udayas.",
      },
      {
        day: 3,
        title: "Volubilis and Meknes",
        description:
          "Inland to the Roman ruins of Volubilis, then Meknes and its imperial gates.",
      },
      {
        day: 4,
        title: "Fes",
        description:
          "Arrive in Fes in time for a first walk through the medina.",
      },
      {
        day: 5,
        title: "Fes el Bali",
        description:
          "A full guided day among the medersas, souks, tanneries and workshops.",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Transfer to Fes airport or the train station.",
      },
    ],
    included: [
      "5 nights in hotels and riads with breakfast",
      "Private guide in Casablanca, Volubilis and Fes",
      "Private driver and vehicle for the full route",
      "Entrance fees at the sites on the itinerary",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.casablanca[5],
    gallery: [
      galleries.casablanca[11],
      galleries.rabat[4],
      galleries.volubilis[9],
      galleries.meknes[6],
      galleries.fes[4],
      galleries.fes[22],
      galleries.fes[36],
    ],
    private: true,
  },
  {
    slug: "casablanca-to-marrakech-via-essaouira",
    departure: "Casablanca",
    title: "Casablanca to Marrakech via Essaouira",
    region: "Casablanca, Essaouira & Marrakech",
    durationDays: 5,
    summary:
      "The Atlantic route south - past the sea to Essaouira, then inland to Marrakech - a gentler way to cross the country than the motorway.",
    highlights: [
      "The Hassan II Mosque in Casablanca",
      "The coast road south to Essaouira",
      "Two nights in Essaouira's walled medina",
      "A guided morning in Marrakech",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport pick-up, hotel and a short evening walk.",
      },
      {
        day: 2,
        title: "Casablanca",
        description:
          "A guided visit to the Hassan II Mosque and the art deco centre before leaving for the coast.",
      },
      {
        day: 3,
        title: "To Essaouira",
        description:
          "A long drive south down the Atlantic coast, arriving in Essaouira for sunset on the ramparts.",
      },
      {
        day: 4,
        title: "Essaouira to Marrakech",
        description:
          "A slow morning in the medina and harbour, then inland to Marrakech.",
      },
      {
        day: 5,
        title: "Marrakech and departure",
        description:
          "A guided morning in the medina, then transfer to the airport.",
      },
    ],
    included: [
      "4 nights in hotels and riads with breakfast",
      "Private guides in Casablanca and Marrakech",
      "Private driver and vehicle for the full route",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.essaouira[2],
    gallery: [
      galleries.casablanca[3],
      galleries.casablanca[19],
      galleries.essaouira[7],
      galleries.essaouira[10],
      galleries.essaouira[15],
      galleries.marrakech[3],
      galleries.marrakech[17],
    ],
    private: true,
  },
  {
    slug: "casablanca-chefchaouen-and-tangier",
    departure: "Casablanca",
    title: "Casablanca to Chefchaouen & Tangier",
    region: "Casablanca, Rabat, Chefchaouen & Tangier",
    durationDays: 5,
    summary:
      "North along the Atlantic coast to Rabat, inland to the blue city of Chefchaouen, and out to the strait at Tangier.",
    highlights: [
      "The Hassan II Mosque and Rabat's kasbah",
      "A full day in Chefchaouen with a walk toward Akchour",
      "Tangier's kasbah, medina and Cap Spartel",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport pick-up and an easy first evening.",
      },
      {
        day: 2,
        title: "Casablanca to Chefchaouen",
        description:
          "A guided morning at the Hassan II Mosque, then north via Rabat to the Rif mountains and Chefchaouen.",
      },
      {
        day: 3,
        title: "Chefchaouen",
        description:
          "Early walk through the blue lanes, then the Akchour waterfalls or a slow afternoon.",
      },
      {
        day: 4,
        title: "To Tangier",
        description:
          "Drive to Tangier for the kasbah, the medina and Cap Spartel at sunset.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Transfer to Tangier airport, port or the high-speed train.",
      },
    ],
    included: [
      "4 nights in hotels and riads with breakfast",
      "Private guide in Casablanca and Tangier",
      "Private driver and vehicle for the full route",
      "Akchour walking guide",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Park fees",
      "Travel insurance and tips",
    ],
    heroImage: galleries.chefchaouen[12],
    gallery: [
      galleries.casablanca[7],
      galleries.rabat[9],
      galleries.chefchaouen[0],
      galleries.chefchaouen[16],
      galleries.chefchaouen[22],
      galleries.tangier[5],
      galleries.tangier[11],
    ],
    private: true,
  },
  {
    slug: "casablanca-sahara-expedition",
    departure: "Casablanca",
    title: "Casablanca Sahara Expedition",
    region: "Casablanca to Erg Chebbi",
    durationDays: 7,
    summary:
      "From the coast to the dunes - Casablanca, Marrakech, the Atlas, Ait Benhaddou and two nights in the desert at Merzouga.",
    highlights: [
      "The Hassan II Mosque before you leave the coast",
      "The Tizi n'Tichka pass and Ait Benhaddou",
      "The Todgha Gorge",
      "Two nights at a desert camp at Erg Chebbi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport pick-up and a relaxed first evening.",
      },
      {
        day: 2,
        title: "Casablanca to Marrakech",
        description:
          "A guided morning at the Hassan II Mosque, then south to Marrakech for the night.",
      },
      {
        day: 3,
        title: "Over the Atlas to Ait Benhaddou",
        description:
          "The Tizi n'Tichka pass and the earthen kasbah of Ait Benhaddou.",
      },
      {
        day: 4,
        title: "Todgha Gorge to Merzouga",
        description:
          "Through the Todgha Gorge and on to the dunes, reaching camp at sunset.",
      },
      {
        day: 5,
        title: "The dunes",
        description:
          "Sunrise camel walk, time with a nomadic family and a second night in camp.",
      },
      {
        day: 6,
        title: "Back to Marrakech",
        description:
          "A long driving day west through the Draa valley and over the Atlas.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Fly from Marrakech, or continue by train to Casablanca.",
      },
    ],
    included: [
      "6 nights: hotels, riads and 2 nights in a desert camp",
      "Private guide in Casablanca",
      "Private driver and vehicle for the full route",
      "4x4 dune transfer and camel walk",
      "Dinner and breakfast at the desert camp",
    ],
    notIncluded: [
      "Flights",
      "Most lunches and dinners",
      "Travel insurance",
      "Tips for guides and drivers",
    ],
    heroImage: galleries.merzouga[8],
    gallery: [
      galleries.casablanca[13],
      galleries.marrakech[22],
      galleries["ait-benhaddou"][9],
      galleries.tinghir[3],
      galleries.merzouga[19],
      galleries.merzouga[37],
      galleries.merzouga[50],
    ],
    private: true,
  },
  {
    slug: "casablanca-grand-tour-of-morocco",
    departure: "Casablanca",
    title: "Grand Tour of Morocco",
    region: "Casablanca, Fes, the Sahara & Marrakech",
    durationDays: 10,
    summary:
      "The country in ten days - the coast, the imperial cities, the dunes of the Sahara and Marrakech - for travellers who want to see it all at a measured pace.",
    highlights: [
      "Hassan II Mosque and Rabat",
      "Volubilis, Meknes and two days in Fes",
      "Two nights at Erg Chebbi",
      "Ait Benhaddou and the Atlas crossing",
      "A guided medina day in Marrakech",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport pick-up and an easy evening on the Corniche.",
      },
      {
        day: 2,
        title: "Casablanca to Rabat",
        description:
          "The Hassan II Mosque with a guide, then up the coast to Rabat.",
      },
      {
        day: 3,
        title: "Volubilis and Meknes to Fes",
        description:
          "Roman Volubilis and the gates of Meknes, arriving in Fes by evening.",
      },
      {
        day: 4,
        title: "Fes el Bali",
        description:
          "A full day in the old city with a private guide.",
      },
      {
        day: 5,
        title: "Fes to Midelt",
        description:
          "Over the Middle Atlas through Ifrane and the cedar forest.",
      },
      {
        day: 6,
        title: "Merzouga",
        description:
          "Down the Ziz valley to the dunes of Erg Chebbi and a first night in camp.",
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
          "West through the Todgha Gorge and along the road of a thousand kasbahs.",
      },
      {
        day: 9,
        title: "To Marrakech",
        description:
          "Visit Ait Benhaddou and cross the Tizi n'Tichka pass to Marrakech.",
      },
      {
        day: 10,
        title: "Marrakech and departure",
        description:
          "A guided morning in the medina and gardens, then transfer to the airport.",
      },
    ],
    included: [
      "9 nights: hotels, riads and 2 nights in a desert camp",
      "Private guides in Casablanca, Fes and Marrakech",
      "Private driver and vehicle for the full route",
      "4x4 dune transfer and camel walk",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Most lunches and dinners",
      "Travel insurance",
      "Tips for guides and drivers",
    ],
    heroImage: galleries.merzouga[28],
    gallery: [
      galleries.casablanca[1],
      galleries.rabat[5],
      galleries.volubilis[3],
      galleries.fes[10],
      galleries.merzouga[12],
      galleries.tinghir[8],
      galleries["ait-benhaddou"][5],
      galleries.marrakech[0],
    ],
    private: true,
  },
];
