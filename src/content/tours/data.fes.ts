import type { Tour } from "./types";
import { galleries } from "@/content/galleries.generated";

/** Additional tours departing from Fes. Provisional draft copy. */
export const fesTours: Tour[] = [
  {
    slug: "fes-imperial-cities-loop",
    departure: "Fes",
    title: "Imperial Cities Loop",
    region: "Fes, Meknes, Volubilis & Rabat",
    durationDays: 5,
    summary:
      "Morocco's four imperial seats in five days - the medieval depth of Fes, the grand gates of Meknes, Roman Volubilis and the calm capital of Rabat.",
    highlights: [
      "A full private day in Fes el Bali with a local guide",
      "The monumental gates and granaries of Meknes",
      "Mosaics and standing arches at Volubilis",
      "Rabat's Kasbah of the Udayas and the Hassan Tower",
      "Ends on the Atlantic coast with an easy onward link to Casablanca",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fes",
        description:
          "Airport pick-up, transfer to a medina riad and a first orientation walk to the Blue Gate.",
      },
      {
        day: 2,
        title: "Fes el Bali",
        description:
          "A full guided day in the old city - medersas, souks, the tanneries and a craftsman's workshop.",
      },
      {
        day: 3,
        title: "Meknes and Volubilis",
        description:
          "Drive west to Meknes for its gates and granaries, then on to the Roman city of Volubilis before settling in Meknes for the night.",
      },
      {
        day: 4,
        title: "To Rabat",
        description:
          "A morning drive to the coast and an afternoon in Rabat - the Kasbah of the Udayas, the Hassan Tower and the Mausoleum of Mohammed V.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Transfer to Rabat or Casablanca airport, or continue by train to your next stop.",
      },
    ],
    included: [
      "4 nights in riads and boutique hotels with breakfast",
      "Private guide in Fes and at Volubilis",
      "Private driver and vehicle for the full route",
      "Entrance fees at the sites on the itinerary",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.volubilis[6],
    gallery: [
      galleries.fes[2],
      galleries.fes[17],
      galleries.meknes[1],
      galleries.meknes[9],
      galleries.volubilis[12],
      galleries.rabat[3],
      galleries.rabat[10],
      galleries.fes[33],
    ],
    private: true,
  },
  {
    slug: "fes-to-chefchaouen-and-the-rif",
    departure: "Fes",
    title: "Fes to Chefchaouen & the Rif",
    region: "Fes & the Rif",
    durationDays: 4,
    summary:
      "From the oldest medina in Morocco to the blue lanes of Chefchaouen, with time for the Akchour waterfalls in the mountains behind it.",
    highlights: [
      "A private guided morning in Fes el Bali",
      "The road north through olive country and the Rif foothills",
      "Chefchaouen's blue medina at first light",
      "A walk to the Akchour waterfalls in Talassemtane national park",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fes",
        description:
          "Arrival, riad check-in and a guided afternoon in the old city, ending with dinner on a rooftop.",
      },
      {
        day: 2,
        title: "Fes to Chefchaouen",
        description:
          "A morning in the medina, then the drive north through olive groves and the Rif foothills to Chefchaouen by late afternoon.",
      },
      {
        day: 3,
        title: "Chefchaouen and Akchour",
        description:
          "Early walk through the blue lanes before the day-trippers, then a short drive to Akchour for a walk along the river toward the waterfalls.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Transfer to Tangier for a flight or the train, or back to Fes, as suits your onward plans.",
      },
    ],
    included: [
      "3 nights in medina riads with breakfast",
      "Private guide in Fes",
      "Local walking guide at Akchour",
      "Private driver and vehicle for the full route",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Talassemtane park fees",
      "Travel insurance and tips",
    ],
    heroImage: galleries.chefchaouen[8],
    gallery: [
      galleries.fes[5],
      galleries.fes[25],
      galleries.chefchaouen[2],
      galleries.chefchaouen[14],
      galleries.chefchaouen[21],
      galleries.akchour[1],
      galleries.akchour[4],
      galleries.akchour[7],
    ],
    private: true,
  },
  {
    slug: "fes-and-the-middle-atlas",
    departure: "Fes",
    title: "Fes & the Middle Atlas",
    region: "Fes, Ifrane & the Cedar Forest",
    durationDays: 3,
    summary:
      "A short loop that pairs the medina with the cool cedar forests and lakes of the Middle Atlas - a change of air from the city.",
    highlights: [
      "Ifrane's alpine-style streets and parks",
      "Barbary macaques in the cedar forest near Azrou",
      "A guided half-day in Fes el Bali",
      "Dinner in a family-run restaurant in the medina",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fes",
        description:
          "Airport pick-up, riad check-in and a first walk through the nearest lanes of the medina.",
      },
      {
        day: 2,
        title: "Ifrane and the cedar forest",
        description:
          "Drive up to Ifrane, then into the cedar forest for a walk among the macaques, with lunch in Azrou before returning to Fes.",
      },
      {
        day: 3,
        title: "Fes and departure",
        description:
          "A guided morning in Fes el Bali, then the transfer to the airport or onward.",
      },
    ],
    included: [
      "2 nights in a medina riad with breakfast",
      "Private guide for the medina morning",
      "Private driver and vehicle",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.ifran[3],
    gallery: [
      galleries.fes[8],
      galleries.fes[19],
      galleries.ifran[0],
      galleries.ifran[5],
      galleries.ifran[7],
      galleries.fes[40],
    ],
    private: true,
  },
  {
    slug: "fes-to-marrakech-via-the-sahara",
    departure: "Fes",
    title: "Fes to Marrakech via the Sahara",
    region: "Fes to Marrakech via Erg Chebbi",
    durationDays: 8,
    summary:
      "The great diagonal of Morocco - from Fes over the Middle Atlas to the dunes of Merzouga, then west through the gorges and kasbahs to Marrakech.",
    highlights: [
      "Two nights in the dunes of Erg Chebbi",
      "The Todgha Gorge and the Dades valley",
      "Ait Benhaddou and the Tizi n'Tichka pass",
      "A medina day in both Fes and Marrakech",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fes",
        description:
          "Airport pick-up and transfer to a riad, with an orientation walk and dinner.",
      },
      {
        day: 2,
        title: "Fes el Bali",
        description:
          "A full guided day in the old city - the medersas, souks and tanneries.",
      },
      {
        day: 3,
        title: "Fes to Midelt",
        description:
          "Over the Middle Atlas via Ifrane and the cedar forest to Midelt, across high plateau country.",
      },
      {
        day: 4,
        title: "Merzouga",
        description:
          "Down the Ziz valley to Erg Chebbi and a 4x4 transfer to the camp beneath the dunes.",
      },
      {
        day: 5,
        title: "The dunes",
        description:
          "Sunrise camel walk, a slow day with a nomadic family and the oasis villages, and a second night in camp.",
      },
      {
        day: 6,
        title: "Todgha Gorge to Dades",
        description:
          "West to Tinghir and the Todgha Gorge, then on to the Dades valley for the night.",
      },
      {
        day: 7,
        title: "Ait Benhaddou to Marrakech",
        description:
          "Along the road of a thousand kasbahs to Ait Benhaddou, then over the Tizi n'Tichka pass to Marrakech.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Transfer to Marrakech airport, or stay on and add days in the city.",
      },
    ],
    included: [
      "7 nights: riads, hotels and 2 nights in a desert camp",
      "Private guide in Fes",
      "Private driver and vehicle for the full route",
      "4x4 dune transfer and camel walk at Erg Chebbi",
      "Breakfasts, and dinner at the desert camp",
    ],
    notIncluded: [
      "Flights",
      "Most lunches and dinners",
      "Travel insurance",
      "Tips for guides and drivers",
    ],
    heroImage: galleries.merzouga[22],
    gallery: [
      galleries.fes[13],
      galleries.merzouga[6],
      galleries.merzouga[34],
      galleries.merzouga[47],
      galleries.tinghir[10],
      galleries.tinghir[24],
      galleries["ait-benhaddou"][8],
      galleries.marrakech[12],
    ],
    private: true,
  },
  {
    slug: "fes-cultural-craft-journey",
    departure: "Fes",
    title: "Fes Cultural & Craft Journey",
    region: "Fes, Chefchaouen, Middle Atlas & Volubilis",
    durationDays: 7,
    summary:
      "A slow seven-day loop that starts and ends in Fes and puts your hands in the culture - a pottery workshop, a cooking class, mint tea in a Berber home and the Roman and imperial sites around Meknes.",
    highlights: [
      "A guided day in Fes el Bali and a pottery and zellij workshop",
      "A cooking class built around the market, the kitchen and the table",
      "Chefchaouen's blue lanes with time to wander on your own",
      "The Middle Atlas cedar forest at Azrou and a Berber family lunch",
      "Volubilis, Meknes and the mausoleum of Moulay Ismail",
      "A low-intensity pace, with no long days on the road",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fes",
        description:
          "Airport pick-up by your private driver, transfer to a medina riad and a relaxed first evening with a welcome dinner.",
      },
      {
        day: 2,
        title: "Fes el Bali and a craft workshop",
        description:
          "A full guided walk through the old city - medersas, souks and the tanneries - followed by a hands-on pottery and zellij workshop with a local maker.",
      },
      {
        day: 3,
        title: "Fes to Chefchaouen",
        description:
          "Drive north through the Rif foothills to Chefchaouen and spend the late afternoon in the blue lanes of the old town.",
      },
      {
        day: 4,
        title: "Chefchaouen",
        description:
          "A cooking class in the morning, then a village visit in the hills with mint tea at a family home. The rest of the day is yours.",
      },
      {
        day: 5,
        title: "Into the Middle Atlas",
        description:
          "Cross the Middle Atlas to the Azrou cedar forest, with a walk among the cedars and a lunch with a Berber family before the night near Ifrane or Azrou.",
      },
      {
        day: 6,
        title: "Volubilis and Meknes",
        description:
          "The Roman city of Volubilis in the morning, then Meknes - the great gates and the mausoleum of Moulay Ismail - before returning to Fes.",
      },
      {
        day: 7,
        title: "Fes and departure",
        description:
          "A last unhurried morning in the medina and a farewell breakfast, then transfer to the airport or station.",
      },
    ],
    included: [
      "6 nights in riads and boutique hotels with breakfast",
      "Private driver and vehicle for the full route",
      "Local guides in Fes, Chefchaouen and Volubilis",
      "A craft workshop and a cooking class",
      "Welcome dinner in Fes and a lunch with a Berber family",
      "Entrance fees at the sites on the itinerary",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights",
      "Other lunches and dinners",
      "Travel insurance",
      "Tips and personal expenses",
    ],
    heroImage: galleries.fes[5],
    gallery: [
      galleries.fes[2],
      galleries.fes[17],
      galleries.fes[33],
      galleries.chefchaouen[3],
      galleries.chefchaouen[12],
      galleries.ifran[2],
      galleries.volubilis[6],
      galleries.meknes[1],
    ],
    private: true,
  },
];
