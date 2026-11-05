/**
 * Tour content model.
 *
 * Tours are plain typed data (see `data.ts`). Every tour is validated at module
 * load in `index.ts` — a malformed entry throws, which fails the build rather
 * than silently breaking a page.
 *
 * There is deliberately NO price field. Tours are private and quote-on-inquiry.
 */

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

/** The four cities every tour starts from. */
export const departures = ["Fes", "Marrakech", "Casablanca", "Tangier"] as const;
export type Departure = (typeof departures)[number];

export type Tour = {
  slug: string;
  title: string;
  /** City the tour starts from. Drives the departure filter on /tours. */
  departure: Departure;
  /** Human region label, e.g. "Sahara / Merzouga". */
  region: string;
  durationDays: number;
  /** 1-2 sentences. Reused in cards and as the meta description. */
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  /** Root-relative path under /public. */
  heroImage: string;
  /** Root-relative paths under /public. */
  gallery: string[];
  /** Always true — there are no shared departures. */
  private: true;
};

export class TourValidationError extends Error {
  constructor(slug: string, message: string) {
    super(`Invalid tour "${slug}": ${message}`);
    this.name = "TourValidationError";
  }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isPublicPath(value: unknown): value is string {
  return typeof value === "string" && value.startsWith("/");
}

/**
 * Validates one tour. Throws `TourValidationError` on any problem.
 * Returns the same object (narrowed to `Tour`) so it can be used inline.
 */
export function validateTour(input: unknown): Tour {
  const t = input as Record<string, unknown>;
  const slug = typeof t?.slug === "string" ? t.slug : "<unknown>";

  const fail = (message: string): never => {
    throw new TourValidationError(slug, message);
  };

  if (!isNonEmptyString(t.slug)) fail("slug must be a non-empty string");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(t.slug as string)) {
    fail("slug must be kebab-case (a-z, 0-9, hyphens)");
  }
  if (!isNonEmptyString(t.title)) fail("title is required");
  if (!isNonEmptyString(t.region)) fail("region is required");
  if (!(departures as readonly unknown[]).includes(t.departure)) {
    fail(`departure must be one of: ${departures.join(", ")}`);
  }
  if (!isNonEmptyString(t.summary)) fail("summary is required");

  if (
    typeof t.durationDays !== "number" ||
    !Number.isInteger(t.durationDays) ||
    t.durationDays < 1
  ) {
    fail("durationDays must be a positive integer");
  }

  for (const key of ["highlights", "included", "notIncluded", "gallery"] as const) {
    const arr = t[key];
    if (!Array.isArray(arr) || arr.length === 0) {
      fail(`${key} must be a non-empty array`);
    }
    if (key === "gallery") {
      if (!(arr as unknown[]).every(isPublicPath)) {
        fail("gallery entries must be root-relative /public paths");
      }
    } else if (!(arr as unknown[]).every(isNonEmptyString)) {
      fail(`${key} entries must be non-empty strings`);
    }
  }

  if (!isPublicPath(t.heroImage)) {
    fail("heroImage must be a root-relative /public path");
  }

  if (!Array.isArray(t.itinerary) || t.itinerary.length === 0) {
    fail("itinerary must be a non-empty array");
  }
  (t.itinerary as unknown[]).forEach((raw, i) => {
    const day = raw as Record<string, unknown>;
    if (day?.day !== i + 1) {
      fail(`itinerary day ${i + 1} must have day === ${i + 1} (got ${String(day?.day)})`);
    }
    if (!isNonEmptyString(day.title)) fail(`itinerary day ${i + 1} needs a title`);
    if (!isNonEmptyString(day.description)) {
      fail(`itinerary day ${i + 1} needs a description`);
    }
  });

  if (t.itinerary && (t.itinerary as unknown[]).length !== t.durationDays) {
    fail(
      `itinerary length (${(t.itinerary as unknown[]).length}) must equal durationDays (${String(
        t.durationDays,
      )})`,
    );
  }

  if (t.private !== true) fail("private must be exactly true");

  if ("price" in t || "cost" in t || "priceFrom" in t) {
    fail("price/cost fields are not allowed — tours are quote-on-inquiry");
  }

  return input as Tour;
}
