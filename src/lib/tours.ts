import { tours, type Tour } from "@/content/tours";

/** All tours, in content order. */
export function getAllTours(): Tour[] {
  return tours;
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getTourSlugs(): string[] {
  return tours.map((t) => t.slug);
}

/** Single source of truth for "how many tours" — never type this as prose. */
export function getTourCount(): number {
  return tours.length;
}

/** Distinct regions across the catalogue, for copy like "X regions". */
export function getRegionCount(): number {
  return new Set(tours.map((t) => t.region)).size;
}

export function getFeaturedTours(limit = 3): Tour[] {
  return tours.slice(0, limit);
}

/** Other tours to surface on a detail page. */
export function getRelatedTours(slug: string, limit = 3): Tour[] {
  return tours.filter((t) => t.slug !== slug).slice(0, limit);
}

export function durationLabel(days: number): string {
  return days === 1 ? "1 day" : `${days} days`;
}
