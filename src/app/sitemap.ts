import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { getTourSlugs } from "@/lib/tours";
import { getAllPosts } from "@/lib/blog";
import { regions } from "@/content/regions";
import { departureInfo } from "@/content/departures";

const CONTENT_UPDATED = "2026-11-01";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fixed content date: update when site content meaningfully changes, so
  // crawlers are not told every URL changed on every build.
  const now = new Date(CONTENT_UPDATED);

  const staticRoutes = [
    "/",
    "/tours",
    "/destinations",
    "/about",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ].map(
    (path) => ({
      url: absoluteUrl(path),
      lastModified: now,
    }),
  );

  const tourRoutes = getTourSlugs().map((slug) => ({
    url: absoluteUrl(`/tours/${slug}`),
    lastModified: now,
  }));

  const departureRoutes = departureInfo.map((d) => ({
    url: absoluteUrl(`/tours/from/${d.slug}`),
    lastModified: now,
  }));

  const regionRoutes = regions.map((r) => ({
    url: absoluteUrl(`/destinations/${r.slug}`),
    lastModified: now,
  }));

  const posts = await getAllPosts();
  const postRoutes = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...departureRoutes, ...tourRoutes, ...regionRoutes, ...postRoutes];
}
