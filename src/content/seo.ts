/**
 * Search-optimised <title> and meta description overrides, keyed by slug.
 *
 * These only change what search engines and social cards see - the on-page H1
 * stays `tour.title` / `post.title`. Titles are used as absolute titles (no
 * brand suffix) and must stay within 60 characters. No prices, ever.
 * The keyword reasoning behind each line is in SEO-KEYWORDS.md.
 */

export type SeoEntry = { title: string; description?: string };

export const tourSeo: Record<string, SeoEntry> = {
  // --- Fes ---
  "fes-medina-and-artisans": {
    title: "4-Day Private Fes Tour: Medina, Tanneries & Artisans",
    description:
      "A 4-day private Fes tour with a local guide: medersas, tanneries, craft workshops and a Volubilis and Meknes day trip. Tailor-made, quote on request.",
  },
  "fes-sahara-crossing": {
    title: "6-Day Private Fes to Merzouga Desert Tour",
    description:
      "Private 6-day Fes to Merzouga desert tour over the Middle Atlas and Ziz Valley, with two nights in an Erg Chebbi camp and a sunrise camel walk.",
  },
  "fes-imperial-cities-loop": {
    title: "5-Day Imperial Cities Tour: Fes, Meknes, Volubilis, Rabat",
    description:
      "Private 5-day imperial cities tour from Fes: the medina, Meknes, Roman Volubilis and Rabat, with a private guide and driver throughout.",
  },
  "fes-to-chefchaouen-and-the-rif": {
    title: "4-Day Fes to Chefchaouen Private Tour with Akchour",
    description:
      "A private 4-day trip from Fes to Chefchaouen with a guided medina day, the blue lanes at first light and a walk to the Akchour waterfalls.",
  },
  "fes-and-the-middle-atlas": {
    title: "3-Day Fes Tour: Ifrane, Azrou Cedar Forest & Medina",
    description:
      "A short private Fes tour pairing the medina with Ifrane, the Azrou cedar forest and Barbary macaques in the Middle Atlas.",
  },
  "fes-cultural-craft-journey": {
    title: "7-Day Private Fes Cultural Tour with Craft Workshops",
    description:
      "A private 7-day cultural tour from Fes: pottery workshop, cooking class, Chefchaouen, the Middle Atlas and Volubilis. Tailor-made, quote on request.",
  },
  "fes-to-marrakech-via-the-sahara": {
    title: "8-Day Fes to Marrakech Desert Tour via Merzouga",
    description:
      "Private 8-day Fes to Marrakech desert tour: Middle Atlas, two nights in Merzouga, Todra Gorge, Dades Valley, Ait Benhaddou and the Tizi n'Tichka pass.",
  },

  // --- Marrakech ---
  "marrakech-medina-and-gardens": {
    title: "4-Day Private Marrakech Tour: Medina, Gardens & Souks",
    description:
      "A private 4-day Marrakech tour with a local guide: the Bahia Palace, souks, Majorelle and Le Jardin Secret, plus a hammam afternoon.",
  },
  "marrakech-sahara-loop": {
    title: "5-Day Marrakech Desert Tour to Merzouga & Erg Chebbi",
    description:
      "Private 5-day Marrakech desert tour via Ait Benhaddou and the Draa Valley to Erg Chebbi, with a night in a desert camp and a camel walk.",
  },
  "marrakech-and-essaouira": {
    title: "5-Day Marrakech & Essaouira Private Tour",
    description:
      "A private 5-day Marrakech and Essaouira trip: souks and gardens, argan country, the Skala ramparts and the fishing harbour.",
  },
  "marrakech-atlas-and-ait-benhaddou": {
    title: "3-Day Marrakech to Ait Benhaddou Private Atlas Tour",
    description:
      "Private 3-day tour from Marrakech over the Tizi n'Tichka pass to Ait Benhaddou and Ouarzazate, with a Berber village stop and a local guide.",
  },
  "marrakech-southern-oases-and-gorges": {
    title: "4-Day Marrakech Tour: Todra Gorge, Dades & Skoura",
    description:
      "A private 4-day trip from Marrakech to the Skoura palm oasis, the Dades Valley and the Todra Gorge, returning via Ait Benhaddou.",
  },
  "marrakech-grand-sahara-and-coast": {
    title: "8-Day Marrakech Sahara Desert & Essaouira Tour",
    description:
      "Private 8-day tour from Marrakech: Atlas, Todra Gorge, two nights at Erg Chebbi, the Draa Valley and a few slow days in Essaouira.",
  },

  // --- Casablanca ---
  "casablanca-and-rabat": {
    title: "3-Day Casablanca & Rabat Tour with Hassan II Mosque",
    description:
      "A private 3-day Casablanca and Rabat tour: guided Hassan II Mosque entry, art deco streets, the Kasbah of the Udayas and the Hassan Tower.",
  },
  "casablanca-imperial-cities": {
    title: "6-Day Casablanca to Fes Tour: Rabat, Meknes, Volubilis",
    description:
      "Private 6-day tour from Casablanca to Fes through Rabat, Volubilis and Meknes, with a guided Hassan II Mosque visit and two days in Fes.",
  },
  "casablanca-to-marrakech-via-essaouira": {
    title: "5-Day Casablanca to Marrakech Tour via Essaouira",
    description:
      "Private 5-day Casablanca to Marrakech trip by the Atlantic coast: the Hassan II Mosque, Essaouira's ramparts and a guided Marrakech morning.",
  },
  "casablanca-chefchaouen-and-tangier": {
    title: "5-Day Casablanca to Chefchaouen & Tangier Private Tour",
    description:
      "A private 5-day tour from Casablanca via Rabat to Chefchaouen and Tangier, with the Akchour waterfalls and Cap Spartel at sunset.",
  },
  "casablanca-sahara-expedition": {
    title: "7-Day Casablanca Desert Tour to Merzouga & Marrakech",
    description:
      "Private 7-day desert tour from Casablanca via Marrakech, Ait Benhaddou and the Todra Gorge, with two nights at a Merzouga camp.",
  },
  "casablanca-grand-tour-of-morocco": {
    title: "10-Day Private Morocco Tour from Casablanca",
    description:
      "A private 10-day Morocco tour from Casablanca: Rabat, Volubilis, Fes, two nights in the Sahara, Ait Benhaddou and Marrakech.",
  },

  // --- Tangier ---
  "tangier-and-the-strait": {
    title: "3-Day Tangier Private Tour: Medina, Cap Spartel & Strait",
    description:
      "A private 3-day Tangier tour with a local guide: the kasbah, the medina, the Caves of Hercules and Cap Spartel at sunset.",
  },
  "tangier-to-chefchaouen": {
    title: "4-Day Tangier to Chefchaouen Private Tour with Akchour",
    description:
      "Private 4-day tour from Tangier to Chefchaouen: the old kasbah, blue lanes at first light and a guided walk to the Akchour waterfalls.",
  },
  "tangier-chefchaouen-and-fes": {
    title: "6-Day Tangier, Chefchaouen & Fes Private Tour",
    description:
      "A private 6-day tour from Tangier through the Rif to Chefchaouen and on to a two-day guided stay in the medina of Fes.",
  },
  "tangier-rif-and-akchour-walking": {
    title: "4-Day Akchour Waterfalls & Rif Hiking Tour from Tangier",
    description:
      "A walking-led private tour from Tangier: Chefchaouen as a base, the river path to the Akchour waterfalls and quiet Rif villages.",
  },
  "tangier-to-casablanca-atlantic-road": {
    title: "4-Day Tangier to Casablanca Tour via Rabat",
    description:
      "Private 4-day tour from Tangier down the Atlantic side of Morocco: the medina, Rabat's kasbah and the Hassan II Mosque in Casablanca.",
  },
  "tangier-to-the-sahara": {
    title: "9-Day Tangier to Sahara Desert Private Tour",
    description:
      "Private 9-day tour from Tangier through Chefchaouen and Fes to the Sahara, with two nights at Erg Chebbi and an Atlas crossing to Marrakech.",
  },
};

export const postSeo: Record<string, SeoEntry> = {
  // --- Original 12 ---
  "when-to-visit-morocco": { title: "Best Time to Visit Morocco: Month-by-Month Guide" },
  "how-many-days-in-morocco": {
    title: "How Many Days in Morocco? 7, 10 and 14-Day Itineraries",
  },
  "driving-distances-in-morocco": {
    title: "Driving Distances in Morocco: Times Between Cities",
  },
  "a-night-in-the-sahara": {
    title: "What to Expect on a Night in a Sahara Desert Camp",
  },
  "ait-benhaddou-and-the-atlas-road": {
    title: "Ait Benhaddou & the Atlas Road: Visiting Guide",
  },
  "fes-or-marrakech-first": { title: "Fes or Marrakech First? Which to Visit in Morocco" },
  "food-on-the-road-in-morocco": {
    title: "Moroccan Food on the Road: What to Eat and Where",
  },
  "morocco-with-children": {
    title: "Morocco with Kids: Family Travel Tips and Itineraries",
  },
  "north-morocco-in-four-days": {
    title: "North Morocco in 4 Days: Tangier & Chefchaouen Itinerary",
  },
  "packing-for-morocco": { title: "What to Pack for Morocco: Packing List by Season" },
  "planning-a-private-sahara-trip": {
    title: "How to Plan a Private Sahara Desert Trip in Morocco",
  },
  "what-private-tour-means": {
    title: "What Is a Private Tour in Morocco? What's Included",
  },

  // --- New 18 ---
  "fes-medina-first-timers-guide": {
    title: "Fes Medina Guide for First-Timers: What to See & Tips",
  },
  "fes-tanneries-and-artisans-what-to-expect": {
    title: "Fes Tanneries & Artisan Workshops: Visiting Guide",
  },
  "meknes-and-volubilis-day-trip-from-fes": {
    title: "Day Trip from Fes to Meknes & Volubilis: Plan Your Day",
  },
  "ifrane-and-the-middle-atlas": {
    title: "Ifrane & Azrou: Cedar Forest and Macaques Guide",
  },
  "marrakech-medina-without-the-stress": {
    title: "Marrakech Medina Tips: How to Visit Without the Stress",
  },
  "marrakech-gardens-and-quiet-places": {
    title: "Best Gardens in Marrakech: Majorelle, Secret Garden & More",
  },
  "marrakech-to-essaouira-by-road": {
    title: "Marrakech to Essaouira: Drive, Stops & How Long to Stay",
  },
  "high-atlas-and-tizi-n-tichka-pass": {
    title: "Tizi n'Tichka Pass: Marrakech to Ait Benhaddou Drive",
  },
  "casablanca-worth-a-visit": {
    title: "Is Casablanca Worth Visiting? What to Do in 1-2 Days",
  },
  "hassan-ii-mosque-visiting-guide": {
    title: "Hassan II Mosque Visit: Guided Tour Times & Tips",
  },
  "rabat-the-calm-capital": {
    title: "One Day in Rabat: Kasbah of the Udayas & Hassan Tower",
  },
  "casablanca-to-marrakech-routes": {
    title: "Casablanca to Marrakech: Motorway, Train or Coast Route",
  },
  "tangier-first-impressions": {
    title: "Things to Do in Tangier: Kasbah, Medina & Cap Spartel",
  },
  "chefchaouen-blue-city-tips": {
    title: "Chefchaouen Travel Tips: Visiting the Blue City",
  },
  "akchour-waterfalls-hike": {
    title: "Akchour Waterfalls Hike from Chefchaouen: Trail Guide",
  },
  "tangier-to-the-sahara-route": {
    title: "Tangier to the Sahara: 9-Day Route and How It Works",
  },
  "todgha-gorge-and-the-dades-valley": {
    title: "Todra Gorge & Dades Valley: Visiting Guide",
  },
  "airports-and-arrival-in-morocco": {
    title: "Morocco Airports Guide: Casablanca, Marrakech, Fes, Tangier",
  },
};
