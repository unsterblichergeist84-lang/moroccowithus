import type { Tour } from "./types";
import { galleries } from "@/content/galleries.generated";

/**
 * Provisional tour content. Itineraries and descriptions are plausible drafts,
 * not final marketing voice — the copy pass happens once the brand is locked.
 * Image paths come from the generated gallery manifest so they never drift.
 */

export const tours: Tour[] = [
  {
    slug: "fes-medina-and-artisans",
    departure: "Fes",
    title: "Fes Medina & Artisans",
    region: "Imperial North / Fes",
    durationDays: 4,
    summary:
      "Four unhurried days inside the walled city of Fes, moving at the pace of its craftspeople - tanners, weavers, brass workers and bakers.",
    highlights: [
      "Private walks through Fes el Bali with a local historian",
      "Workshop visits to tanneries, a weaver and a coppersmith",
      "The Bou Inania and Attarine medersas at quiet hours",
      "A rooftop dinner overlooking the medina",
      "Day trip to the Roman ruins of Volubilis and Meknes",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fes",
        description:
          "Airport pick-up and transfer to a restored riad inside the medina. Evening orientation walk to the Blue Gate and a relaxed first dinner.",
      },
      {
        day: 2,
        title: "Fes el Bali on foot",
        description:
          "A full day exploring the old city with a private guide - the Qaraouiyine quarter, the medersas, the souks and the tanneries, with stops timed to avoid the crowds.",
      },
      {
        day: 3,
        title: "Volubilis and Meknes",
        description:
          "Drive out to the Roman city of Volubilis, then the imperial gates and granaries of Meknes, returning to Fes by late afternoon.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "A slow morning for last errands in the medina before the transfer to the airport or onward to your next stop.",
      },
    ],
    included: [
      "3 nights in a medina riad with breakfast",
      "Private guide for two full days",
      "All ground transport with a private driver",
      "Volubilis and Meknes entrance fees",
      "Airport transfers",
    ],
    notIncluded: [
      "International and domestic flights",
      "Lunches and dinners not listed",
      "Travel insurance",
      "Personal expenses and tips",
    ],
    heroImage: galleries.fes[6],
    gallery: [
      galleries.fes[0],
      galleries.fes[3],
      galleries.fes[9],
      galleries.fes[14],
      galleries.fes[21],
      galleries.fes[28],
      galleries.volubilis[2],
      galleries.meknes[4],
    ],
    private: true,
  },
  {
    slug: "fes-sahara-crossing",
    departure: "Fes",
    title: "Fes to the Sahara Crossing",
    region: "Fes to Erg Chebbi",
    durationDays: 6,
    summary:
      "A point-to-point journey from the oldest medieval city in Morocco over the Middle Atlas to the dunes of Erg Chebbi, ending with a night in the desert.",
    highlights: [
      "Cedar forests and Barbary macaques near Ifrane",
      "The Ziz Valley palm groves from the escarpment road",
      "A night at a permanent camp under the dunes at Merzouga",
      "Sunrise camel walk on Erg Chebbi",
      "Tinghir and the Todgha Gorge on the way west",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fes",
        description:
          "Arrival, transfer to a medina riad and an orientation walk. Evening briefing on the days ahead.",
      },
      {
        day: 2,
        title: "Fes, in depth",
        description:
          "A full guided day in Fes el Bali - medersas, souks, the tanneries and a rooftop lunch over the old city.",
      },
      {
        day: 3,
        title: "Over the Middle Atlas to Midelt",
        description:
          "Drive south through Ifrane and the cedar forest, stopping for the macaques, then across high plateau country to Midelt for the night.",
      },
      {
        day: 4,
        title: "Ziz Valley to Merzouga",
        description:
          "Follow the Ziz gorges and palm groves down to the desert. Arrive at Erg Chebbi in the afternoon and transfer by 4x4 to a camp beneath the dunes.",
      },
      {
        day: 5,
        title: "Erg Chebbi",
        description:
          "Sunrise over the dunes, a slow morning, then time with a nomadic family and the small oasis villages around Merzouga before a second desert night.",
      },
      {
        day: 6,
        title: "Tinghir and onward",
        description:
          "Drive west to Tinghir and the Todgha Gorge, where the trip ends - continue to Ouarzazate or Marrakech, or transfer for a flight.",
      },
    ],
    included: [
      "2 nights Fes riad, 1 night Midelt, 2 nights desert camp",
      "Private guide in Fes",
      "Private driver and vehicle for the full route",
      "4x4 dune transfer and camel walk at Erg Chebbi",
      "Breakfasts, plus dinner and breakfast at the desert camp",
    ],
    notIncluded: [
      "Flights",
      "Lunches and the drinks with meals",
      "Travel insurance",
      "Tips for guides and drivers",
    ],
    heroImage: galleries.merzouga[10],
    gallery: [
      galleries.fes[11],
      galleries.ifran[1],
      galleries.merzouga[4],
      galleries.merzouga[18],
      galleries.merzouga[30],
      galleries.tinghir[7],
      galleries.tinghir[15],
      galleries["ait-benhaddou"][3],
    ],
    private: true,
  },
  {
    slug: "marrakech-medina-and-gardens",
    departure: "Marrakech",
    title: "Marrakech Medina & Gardens",
    region: "Marrakech & the Haouz",
    durationDays: 4,
    summary:
      "A calm way into a loud city - the souks and palaces of the medina balanced against Marrakech's walled gardens and courtyards.",
    highlights: [
      "The Bahia Palace and Saadian Tombs early, before the tour groups",
      "Souk walks with a guide who knows the makers",
      "The Majorelle and Le Jardin Secret gardens",
      "A hammam and tea afternoon",
      "Sunset from a Jemaa el-Fnaa rooftop",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description:
          "Transfer to a riad in the medina. An easy first walk to get your bearings, ending on a rooftop for sunset over Jemaa el-Fnaa.",
      },
      {
        day: 2,
        title: "The medina with a guide",
        description:
          "Bahia Palace, the Saadian Tombs, the Mellah and the souks - a full morning with a private guide, then the afternoon free or in the hammam.",
      },
      {
        day: 3,
        title: "Gardens and courtyards",
        description:
          "A slower day: the Majorelle garden, Le Jardin Secret and the Menara, with a long lunch in between.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Time for the souks or a last mint tea before the airport transfer.",
      },
    ],
    included: [
      "3 nights in a medina riad with breakfast",
      "Private guide for one full morning",
      "Garden and monument entrance fees",
      "Private airport transfers",
      "24/7 local contact during your stay",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Hammam and spa treatments",
      "Travel insurance and personal expenses",
    ],
    heroImage: galleries.marrakech[2],
    gallery: [
      galleries.marrakech[0],
      galleries.marrakech[6],
      galleries.marrakech[12],
      galleries.marrakech[19],
      galleries.marrakech[25],
      galleries.marrakech[31],
      galleries.marrakech[36],
      galleries.essaouira[4],
    ],
    private: true,
  },
  {
    slug: "marrakech-sahara-loop",
    departure: "Marrakech",
    title: "Marrakech & Sahara Loop",
    region: "Marrakech / Draa / Erg Chebbi",
    durationDays: 5,
    summary:
      "The classic loop from Marrakech over the High Atlas to the dunes and back, done privately and slowly, with two nights in the desert instead of one.",
    highlights: [
      "The Tizi n'Tichka pass and the kasbah of Ait Benhaddou",
      "Ouarzazate and the Skoura palm oasis",
      "The Todgha Gorge at Tinghir",
      "Two nights at a dune camp on Erg Chebbi",
      "Rose valley and Draa palm groves on the return",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ait Benhaddou",
        description:
          "Cross the High Atlas by the Tizi n'Tichka, stopping where the views earn it, to the earthen kasbah of Ait Benhaddou for the night.",
      },
      {
        day: 2,
        title: "Ouarzazate to Tinghir",
        description:
          "Ouarzazate's Taourirt kasbah and the Skoura oasis, then the road of a thousand kasbahs to Tinghir and the Todgha Gorge.",
      },
      {
        day: 3,
        title: "To the dunes",
        description:
          "Drive to Merzouga in the morning, with the afternoon free before a 4x4 transfer into the dunes for the first desert night.",
      },
      {
        day: 4,
        title: "Erg Chebbi",
        description:
          "A full day in the desert - sunrise, time with a nomad family, the black volcanic hamada and the oasis villages - then a second night at camp.",
      },
      {
        day: 5,
        title: "Back to Marrakech",
        description:
          "The long drive back over the Atlas, via the Dades or rose valley, arriving in Marrakech in the evening.",
      },
    ],
    included: [
      "1 night Ait Benhaddou, 1 night Tinghir, 2 nights desert camp",
      "Private driver and 4x4 for the full loop",
      "Camel walk and dune transfer at Erg Chebbi",
      "Breakfasts and desert-camp dinners",
      "Airport transfers in Marrakech",
    ],
    notIncluded: [
      "Flights",
      "Lunches and most dinners",
      "Local guides in towns along the way",
      "Travel insurance and tips",
    ],
    heroImage: galleries["ait-benhaddou"][5],
    gallery: [
      galleries.marrakech[8],
      galleries["ait-benhaddou"][1],
      galleries["ait-benhaddou"][8],
      galleries.ouarzazate[1],
      galleries.tinghir[3],
      galleries.tinghir[20],
      galleries.merzouga[12],
      galleries.merzouga[40],
    ],
    private: true,
  },
  {
    slug: "tangier-and-the-strait",
    departure: "Tangier",
    title: "Tangier & the Strait",
    region: "Tangier & the North",
    durationDays: 3,
    summary:
      "A short northern stay in the city that faces two seas - the medina, the kasbah and the cliffs where the Atlantic meets the Mediterranean.",
    highlights: [
      "The kasbah, the Petit Socco and the American Legation",
      "Cap Spartel and the Caves of Hercules at sunset",
      "A cafe afternoon in the tradition of the city's writers",
      "The Grand and Petit Socco markets",
      "Fresh fish lunch at the port",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tangier",
        description:
          "Transfer to a hotel or riad near the medina. An afternoon walk through the Petit Socco up to the kasbah, ending on a terrace over the strait.",
      },
      {
        day: 2,
        title: "City and cape",
        description:
          "A guided morning through the medina and the American Legation, then out to Cap Spartel and the Caves of Hercules for the late light.",
      },
      {
        day: 3,
        title: "Departure",
        description:
          "A last walk or coffee before the transfer to the airport or the train south.",
      },
    ],
    included: [
      "2 nights near the medina with breakfast",
      "Private guide for one morning",
      "Private transport for the Cap Spartel excursion",
      "Airport or station transfers",
    ],
    notIncluded: [
      "Flights and trains",
      "Lunches and dinners",
      "Travel insurance",
      "Personal expenses and tips",
    ],
    heroImage: galleries.tangier[1],
    gallery: [
      galleries.tangier[0],
      galleries.tangier[4],
      galleries.tangier[6],
      galleries.tangier[8],
      galleries.tangier[10],
      galleries.tangier[12],
    ],
    private: true,
  },
  {
    slug: "tangier-to-chefchaouen",
    departure: "Tangier",
    title: "Tangier to Chefchaouen",
    region: "The North & the Rif",
    durationDays: 4,
    summary:
      "From the strait into the Rif mountains - two nights in Tangier, then two in the blue-washed lanes of Chefchaouen, with a walk to the Akchour waterfalls.",
    highlights: [
      "Tangier's kasbah and medina",
      "The drive up into the Rif",
      "Chefchaouen's blue medina in the early morning",
      "The Akchour waterfalls and God's Bridge",
      "Rif honey, goat cheese and mountain bread",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tangier",
        description:
          "Arrival and an afternoon walk through the medina to the kasbah, with sunset over the strait.",
      },
      {
        day: 2,
        title: "Tangier to Chefchaouen",
        description:
          "A guided morning in Tangier, then the mountain road southeast to Chefchaouen, arriving in time for the evening in the blue lanes.",
      },
      {
        day: 3,
        title: "Akchour",
        description:
          "Drive into the Talassemtane national park for a half-day walk to the Akchour waterfalls, back in Chefchaouen for the afternoon.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Morning in the medina before the transfer back to Tangier for a flight or onward travel.",
      },
    ],
    included: [
      "2 nights Tangier, 2 nights Chefchaouen, with breakfast",
      "Private guide in Tangier",
      "Private driver and vehicle for the full route",
      "Akchour excursion with a local walking guide",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Talassemtane park fees",
      "Travel insurance and tips",
    ],
    heroImage: galleries.chefchaouen[4],
    gallery: [
      galleries.tangier[2],
      galleries.tangier[9],
      galleries.chefchaouen[1],
      galleries.chefchaouen[10],
      galleries.chefchaouen[18],
      galleries.chefchaouen[24],
      galleries.akchour[2],
      galleries.akchour[6],
    ],
    private: true,
  },
];
