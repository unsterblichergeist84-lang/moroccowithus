import { tours as baseTours } from "./data";
import { fesTours } from "./data.fes";
import { marrakechTours } from "./data.marrakech";
import { casablancaTours } from "./data.casablanca";
import { tangierTours } from "./data.tangier";
import { departures, validateTour, type Tour } from "./types";

/** All tours, grouped by departure city in `departures` order. */
const rawTours = [
  ...baseTours,
  ...fesTours,
  ...marrakechTours,
  ...casablancaTours,
  ...tangierTours,
].sort((a, b) => departures.indexOf(a.departure) - departures.indexOf(b.departure));

/**
 * Validated tour list. Every entry is checked at module load — a malformed
 * tour throws here, which fails `next build` instead of shipping a broken page.
 * A duplicate slug is also a hard error.
 */
const seen = new Set<string>();

export const tours: Tour[] = rawTours.map((tour) => {
  const validated = validateTour(tour);
  if (seen.has(validated.slug)) {
    throw new Error(`Duplicate tour slug: "${validated.slug}"`);
  }
  seen.add(validated.slug);
  return validated;
});

export { departures } from "./types";
export type { Tour, ItineraryDay, Departure } from "./types";
