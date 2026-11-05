import type { Tour } from "@/content/tours";

/**
 * Derived tour metadata (tags + route stops). Everything here is computed from
 * the existing tour copy, so new tours get tags and a map without extra fields.
 */

export type Stop = { name: string; lat: number; lon: number };

type Place = { name: string; re: RegExp; lat: number; lon: number };

const PLACES: Place[] = [
  { name: "Tangier", re: /tangier/i, lat: 35.77, lon: -5.8 },
  { name: "Chefchaouen", re: /chefchaouen/i, lat: 35.17, lon: -5.27 },
  { name: "Akchour", re: /akchour/i, lat: 35.25, lon: -5.15 },
  { name: "Rabat", re: /rabat/i, lat: 34.02, lon: -6.84 },
  { name: "Volubilis", re: /volubilis/i, lat: 34.07, lon: -5.55 },
  { name: "Meknes", re: /meknes/i, lat: 33.89, lon: -5.55 },
  { name: "Fes", re: /\bfes\b|\bfez\b/i, lat: 34.03, lon: -5.0 },
  { name: "Ifrane", re: /ifrane/i, lat: 33.53, lon: -5.11 },
  { name: "Azrou", re: /azrou/i, lat: 33.43, lon: -5.22 },
  { name: "Midelt", re: /midelt/i, lat: 32.68, lon: -4.74 },
  { name: "Merzouga", re: /merzouga|erg chebbi|\bdunes?\b/i, lat: 31.1, lon: -4.01 },
  { name: "Todgha Gorge", re: /todgha|tinghir/i, lat: 31.51, lon: -5.53 },
  { name: "Dades", re: /dades/i, lat: 31.55, lon: -5.95 },
  { name: "Skoura", re: /skoura/i, lat: 31.06, lon: -6.55 },
  { name: "Ouarzazate", re: /ouarzazate/i, lat: 30.92, lon: -6.89 },
  { name: "Ait Benhaddou", re: /benhaddou/i, lat: 31.05, lon: -7.13 },
  { name: "Marrakech", re: /marrakech/i, lat: 31.63, lon: -8.01 },
  { name: "Essaouira", re: /essaouira/i, lat: 31.51, lon: -9.77 },
  { name: "Agadir", re: /agadir/i, lat: 30.43, lon: -9.6 },
  { name: "Casablanca", re: /casablanca/i, lat: 33.57, lon: -7.59 },
];

function allMatches(text: string): Place[] {
  return PLACES.map((p) => ({ p, idx: p.re.exec(text)?.index ?? -1 }))
    .filter((x) => x.idx >= 0)
    .sort((a, b) => a.idx - b.idx)
    .map((x) => x.p);
}

/**
 * Ordered route stops. Uses each day's title; if the title names no place,
 * falls back to the first place in the description. Consecutive repeats are
 * collapsed. Schematic: it follows the itinerary copy, not exact roads.
 */
export function getRouteStops(tour: Tour): Stop[] {
  const seq: Stop[] = [];
  const push = (p?: Place) => {
    if (!p) return;
    if (seq[seq.length - 1]?.name === p.name) return;
    seq.push({ name: p.name, lat: p.lat, lon: p.lon });
  };

  push(PLACES.find((p) => p.re.test(tour.departure)));

  for (const day of tour.itinerary) {
    const inTitle = allMatches(day.title);
    if (inTitle.length) inTitle.forEach(push);
    else push(allMatches(day.description)[0]);
  }
  return seq;
}

/** Short tags derived from the tour copy. */
export function getTourTags(tour: Tour): string[] {
  const text = [
    tour.title,
    tour.region,
    tour.highlights.join(" "),
    tour.itinerary.map((d) => `${d.title} ${d.description}`).join(" "),
  ].join(" ");
  const names = new Set(getRouteStops(tour).map((s) => s.name));

  const tags = ["Private", "Fully guided"];
  if (names.has("Merzouga")) tags.push("Sahara");
  const imperial = ["Fes", "Meknes", "Rabat", "Marrakech"].filter((n) => names.has(n));
  if (imperial.length >= 3) tags.push("Imperial cities");
  if (/workshop|cooking class|craft/i.test(text)) tags.push("Culture & craft");
  if (/hike|waterfall|gorge|trek|cedar/i.test(text)) tags.push("Nature & walks");
  if (names.has("Essaouira") || names.has("Agadir") || /atlantic|corniche/i.test(text)) {
    tags.push("Coast");
  }
  if (tour.durationDays <= 3) tags.push("Short trip");
  else if (tour.durationDays >= 7) tags.push("Extended trip");
  return tags;
}
