import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  ogImage: string;
  slug: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
};

function assertFrontmatter(
  data: Record<string, unknown>,
  file: string,
): asserts data is BlogFrontmatter {
  for (const key of ["title", "description", "date", "author", "ogImage"] as const) {
    if (typeof data[key] !== "string" || !(data[key] as string).trim()) {
      throw new Error(`Blog post ${file}: missing or empty frontmatter "${key}"`);
    }
  }
  if (Number.isNaN(Date.parse(data.date as string))) {
    throw new Error(`Blog post ${file}: "date" is not a valid date`);
  }
}

async function readPost(fileName: string): Promise<BlogPost> {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = await fs.readFile(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const fm = { slug, ...data } as Record<string, unknown>;
  assertFrontmatter(fm, fileName);
  return { ...fm, content };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  let files: string[] = [];
  try {
    files = (await fs.readdir(BLOG_DIR)).filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
  const posts = await Promise.all(files.map(readPost));
  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;
  try {
    return await readPost(`${slug}.mdx`);
  } catch {
    return undefined;
  }
}

/** Other posts to surface at the foot of an article, newest first. */
export async function getRelatedPosts(
  slug: string,
  limit = 3,
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}

/** Rough reading time in minutes from the raw MDX body. */
export function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function getPostCount(posts: BlogPost[]): number {
  return posts.length;
}

const PLACE_TERMS = [
  "fes", "marrakech", "casablanca", "tangier", "chefchaouen", "rabat",
  "essaouira", "merzouga", "sahara", "ait-benhaddou", "benhaddou", "todgha",
  "todra", "dades", "akchour", "ifrane", "meknes", "volubilis", "atlas",
  "hassan", "rif",
];

/** Posts that share place names with a tour, best match first. */
export async function getPostsForTour(
  text: string,
  limit = 3,
): Promise<BlogPost[]> {
  const haystack = text.toLowerCase();
  const terms = PLACE_TERMS.filter((t) => haystack.includes(t));
  const posts = await getAllPosts();
  return posts
    .map((p) => {
      const key = `${p.slug} ${p.title}`.toLowerCase();
      return { p, score: terms.filter((t) => key.includes(t)).length };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}
