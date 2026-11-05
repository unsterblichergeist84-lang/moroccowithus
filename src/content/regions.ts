import { galleries, type GalleryKey } from "@/content/galleries.generated";

/**
 * High-level regions used for orientation on the home, tours and destinations
 * pages. These are editorial groupings, not a filter taxonomy - tours keep
 * their own free-text `region` label.
 */
export type Region = {
  slug: string;
  name: string;
  /** One-line summary for cards. */
  blurb: string;
  /** Longer description for the destinations page. */
  description: string;
  highlights: string[];
  /** Which gallery folder to pull photos from. */
  galleryKey: GalleryKey;
  /** Slugs of tours that spend meaningful time here. */
  tourSlugs: string[];
};

export const regions: Region[] = [
  {
    slug: "imperial-cities",
    name: "The Imperial Cities",
    blurb:
      "Fes, Meknes and the Roman ruins of Volubilis - medieval medinas, medersas and the oldest university in the world.",
    description:
      "Morocco's inland capitals, each one the seat of a different dynasty. Fes is the deepest of them: a walled medieval city of nine thousand lanes, still car-free, still working. Meknes is quieter and grander in scale, and half an hour away the Roman city of Volubilis sits in open farmland with its arches and mosaics intact.",
    highlights: [
      "Fes el Bali - the Qaraouiyine quarter, the tanneries and the medersas",
      "The monumental gates and granaries of Meknes",
      "Mosaics and standing arches at Volubilis",
      "Workshop visits to weavers, tanners and brass workers",
    ],
    galleryKey: "fes",
    tourSlugs: [
      "fes-medina-and-artisans",
      "fes-sahara-crossing",
      "fes-imperial-cities-loop",
      "fes-and-the-middle-atlas",
      "fes-cultural-craft-journey",
      "casablanca-imperial-cities",
      "tangier-chefchaouen-and-fes",
      "casablanca-grand-tour-of-morocco",
    ],
  },
  {
    slug: "marrakech-and-the-atlas",
    name: "Marrakech & the Atlas",
    blurb:
      "The red city and the High Atlas behind it - souks and gardens, then mountain passes and earthen kasbahs.",
    description:
      "Marrakech is the loudest, fastest city in Morocco and also, in its riads and walled gardens, one of the calmest. Behind it the High Atlas rises straight off the plain - Berber villages, the Tizi n'Tichka pass, and on the far side the earthen kasbah of Ait Benhaddou standing over the Ounila river.",
    highlights: [
      "The Bahia Palace and Saadian Tombs at quiet hours",
      "Souks with a guide who knows the makers",
      "The Majorelle and Le Jardin Secret gardens",
      "The Tizi n'Tichka pass and Ait Benhaddou",
    ],
    galleryKey: "marrakech",
    tourSlugs: [
      "marrakech-medina-and-gardens",
      "marrakech-sahara-loop",
      "marrakech-atlas-and-ait-benhaddou",
      "fes-to-marrakech-via-the-sahara",
      "marrakech-grand-sahara-and-coast",
      "casablanca-to-marrakech-via-essaouira",
      "casablanca-sahara-expedition",
      "casablanca-grand-tour-of-morocco",
      "tangier-to-the-sahara",
    ],
  },
  {
    slug: "the-sahara",
    name: "The Sahara - Erg Chebbi",
    blurb:
      "The dunes at Merzouga, reached slowly. Nights at a desert camp, sunrise camel walks and time with nomadic families.",
    description:
      "Erg Chebbi is the great sand sea of southeast Morocco - dunes up to 150 metres high, running for 30 kilometres along the Algerian border. The village of Merzouga sits at its edge. We reach it slowly, over two driving days from either Fes or Marrakech, and spend two nights rather than one so there is time for the light to do its work.",
    highlights: [
      "Two nights at a permanent camp beneath the dunes",
      "Sunrise camel walk on Erg Chebbi",
      "Time with a nomadic family and the desert oasis villages",
      "The black volcanic hamada and the old caravan routes",
    ],
    galleryKey: "merzouga",
    tourSlugs: [
      "fes-sahara-crossing",
      "marrakech-sahara-loop",
      "fes-to-marrakech-via-the-sahara",
      "marrakech-grand-sahara-and-coast",
      "casablanca-sahara-expedition",
      "casablanca-grand-tour-of-morocco",
      "tangier-to-the-sahara",
    ],
  },
  {
    slug: "the-north-and-the-rif",
    name: "The North & the Rif",
    blurb:
      "Tangier on the strait, the blue lanes of Chefchaouen and the waterfalls of the Talassemtane national park.",
    description:
      "The north is a different Morocco - Andalusian, green, cooler, and usually skipped by travellers heading straight for the desert. Tangier faces both the Atlantic and the Mediterranean. Two hours inland, Chefchaouen's medina is washed in blue and backed by the limestone peaks of the Rif.",
    highlights: [
      "Tangier's kasbah, medina and the American Legation",
      "Cap Spartel and the Caves of Hercules at sunset",
      "Chefchaouen's blue lanes in the early morning",
      "The Akchour waterfalls in the Talassemtane national park",
    ],
    galleryKey: "chefchaouen",
    tourSlugs: [
      "tangier-and-the-strait",
      "tangier-to-chefchaouen",
      "fes-to-chefchaouen-and-the-rif",
      "casablanca-chefchaouen-and-tangier",
      "tangier-chefchaouen-and-fes",
      "tangier-rif-and-akchour-walking",
      "tangier-to-casablanca-atlantic-road",
      "tangier-to-the-sahara",
    ],
  },
  {
    slug: "the-atlantic-coast",
    name: "The Atlantic Coast",
    blurb:
      "Essaouira's ramparts and fishing port, windswept and low-key - a change of pace between the cities and the desert.",
    description:
      "Essaouira is an eighteenth-century port town behind sea walls, three hours west of Marrakech. The wind keeps it cool and keeps the crowds thinner than inland. It works well as a two-night pause in a longer trip - the ramparts, the fishing harbour, the argan country just behind the town.",
    highlights: [
      "The Skala ramparts and the working fishing port",
      "A medina laid out on a grid - easy to wander",
      "Argan cooperatives in the country behind the town",
      "Fresh fish grilled at the harbour stalls",
    ],
    galleryKey: "essaouira",
    tourSlugs: [
      "marrakech-medina-and-gardens",
      "marrakech-and-essaouira",
      "marrakech-grand-sahara-and-coast",
      "casablanca-to-marrakech-via-essaouira",
    ],
  },
  {
    slug: "the-southern-oases",
    name: "The Southern Oases",
    blurb:
      "The Draa, Dades and Todgha valleys - palm groves, gorges and the road of a thousand kasbahs.",
    description:
      "South of the Atlas the rivers run in narrow green ribbons between bare mountains and the desert. The Todgha and Dades gorges cut hundreds of metres deep; the Draa is the longest palm grove in the country. Ouarzazate, with its film studios and the Taourirt kasbah, is the hub for all of it.",
    highlights: [
      "The Todgha Gorge at Tinghir",
      "Ouarzazate - the Taourirt kasbah and the Atlas studios",
      "The Skoura palm oasis and its kasbahs",
      "The road of a thousand kasbahs between Ouarzazate and Erratchidia",
    ],
    galleryKey: "tinghir",
    tourSlugs: [
      "marrakech-sahara-loop",
      "fes-sahara-crossing",
      "marrakech-southern-oases-and-gorges",
      "marrakech-atlas-and-ait-benhaddou",
      "fes-to-marrakech-via-the-sahara",
      "marrakech-grand-sahara-and-coast",
      "casablanca-sahara-expedition",
      "casablanca-grand-tour-of-morocco",
      "tangier-to-the-sahara",
    ],
  },
  {
    slug: "casablanca-and-rabat",
    name: "Casablanca & Rabat",
    blurb:
      "Morocco's modern commercial capital and its calm political one - the Hassan II Mosque, art deco streets and the Atlantic corniche.",
    description:
      "Casablanca is the country's largest city and main gateway - a working port with art deco boulevards, a long corniche and the Hassan II Mosque, one of the few mosques in Morocco that non-Muslim visitors can enter with a guide. An hour up the coast, Rabat is the capital: quieter, greener and easy to walk, with its kasbah above the river mouth and the unfinished Hassan Tower.",
    highlights: [
      "A guided visit inside the Hassan II Mosque",
      "Art deco architecture in central Casablanca",
      "Rabat's Kasbah of the Udayas and the Hassan Tower",
      "The Atlantic corniche and seafood at the port",
    ],
    galleryKey: "casablanca",
    tourSlugs: [
      "casablanca-and-rabat",
      "casablanca-imperial-cities",
      "casablanca-to-marrakech-via-essaouira",
      "casablanca-chefchaouen-and-tangier",
      "casablanca-grand-tour-of-morocco",
      "fes-imperial-cities-loop",
      "tangier-to-casablanca-atlantic-road",
    ],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

/** A few representative photos for a region. */
export function regionPhotos(region: Region, count = 4): string[] {
  return galleries[region.galleryKey].slice(0, count);
}

/** The lead image for a region card. */
export function regionCover(region: Region): string {
  return galleries[region.galleryKey][4] ?? galleries[region.galleryKey][0];
}
