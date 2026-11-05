/**
 * SINGLE SOURCE OF TRUTH for brand strings.
 *
 * Every component, metadata field, and JSON-LD block MUST read brand strings
 * from this object. Never hardcode the brand name, domain, or contact details
 * anywhere else in the codebase.
 *
 * The brand name and domain are not yet decided. `name` / `shortName` /
 * `domain` below are PLACEHOLDERS — when the brand is locked, change them here
 * and nowhere else.
 */

export type SiteConfig = {
  /** Full brand name, e.g. used in <title> suffix and Organization JSON-LD. */
  name: string;
  /** Short brand name for tight spots (header logo, footer, OG). */
  shortName: string;
  /** One-line positioning statement. */
  tagline: string;
  /** Canonical origin, no trailing slash, e.g. "https://example.com". */
  domain: string;
  /** Public contact / inquiry email. */
  email: string;
  /** WhatsApp number in international format, digits and leading +. */
  whatsapp: string;
  /** Full Instagram profile URL. */
  instagram: string;
  /** Absolute-from-root path to the sitewide fallback OG image. */
  defaultOgImage: string;
  /** Square-ish brand logo used in structured data. */
  logo: string;
};

export const site: SiteConfig = {
  name: "Morocco With Us",
  shortName: "Morocco With Us",
  tagline: "Private, tailor-made journeys across Morocco, from the imperial cities to the Sahara.",
  domain: "https://moroccowithus.com",
  email: "hello@example.com",
  whatsapp: "+212000000000",
  instagram: "https://instagram.com/example",
  // Sitewide fallback only. Every page sets its own og:image (a real photo);
  // this is used when a route has nothing more specific.
  defaultOgImage: "/brand/og-default.jpg",
  logo: "/brand/logo.png",
} as const;

/** Build an absolute URL from a root-relative path, using the configured domain. */
export function absoluteUrl(path = "/"): string {
  const base = site.domain.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}
