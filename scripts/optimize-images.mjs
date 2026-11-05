/**
 * Image optimisation pipeline.
 *
 * Reads the untracked source archive (default: ../desert-tour-image-source,
 * override with `node scripts/optimize-images.mjs <path>` or IMAGE_SOURCE env),
 * resizes + compresses every image, renames it to a clean URL-safe slug, and
 * writes the result into `public/images/<location>/<location>-NN.jpg`.
 *
 * It also emits `src/content/galleries.generated.ts` — a typed manifest that
 * tour content and components import so image paths are never hand-typed.
 *
 * Re-runnable: the output directory is wiped and rebuilt on every run.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const SOURCE_DIR = path.resolve(
  projectRoot,
  process.argv[2] || process.env.IMAGE_SOURCE || "../desert-tour-image-source",
);
const OUT_DIR = path.join(projectRoot, "public", "images");
const MANIFEST = path.join(projectRoot, "src", "content", "galleries.generated.ts");

/** Files with a generic / unknown location go here. */
const UNSORTED_SLUG = "library";

/**
 * Loose, uncategorised files in the archive root are skipped by default — we
 * can't caption or place ~300 unnamed images, so they'd be dead weight in git.
 * Pass --include-library to process them into public/images/library/.
 */
const INCLUDE_LIBRARY = process.argv.includes("--include-library");

const MAX_EDGE = 1600; // px — longest edge of the stored image
const JPEG_QUALITY = 74;
const CONCURRENCY = 8;
const IMAGE_RE = /\.(jpe?g|png|webp|avif|tiff?)$/i;

const COMBINING_MARKS = new RegExp("[\\u0300-\\u036f]", "g");

function slugify(input) {
  return input
    .normalize("NFKD")
    .replace(COMBINING_MARKS, "")
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const naturalCompare = (a, b) =>
  a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });

async function collectGroups() {
  const entries = await fs.readdir(SOURCE_DIR, { withFileTypes: true });
  const groups = new Map(); // slug -> { label, files: absolute paths }

  const looseFiles = entries
    .filter((e) => e.isFile() && IMAGE_RE.test(e.name))
    .map((e) => path.join(SOURCE_DIR, e.name))
    .sort(naturalCompare);
  if (looseFiles.length && INCLUDE_LIBRARY) {
    groups.set(UNSORTED_SLUG, { label: "Library", files: looseFiles });
  } else if (looseFiles.length) {
    console.log(
      `(skipping ${looseFiles.length} loose files — pass --include-library to process them)\n`,
    );
  }

  for (const entry of entries.filter((e) => e.isDirectory())) {
    const dir = path.join(SOURCE_DIR, entry.name);
    const files = (await fs.readdir(dir))
      .filter((name) => IMAGE_RE.test(name))
      .map((name) => path.join(dir, name))
      .sort(naturalCompare);
    if (files.length) {
      groups.set(slugify(entry.name), { label: entry.name, files });
    }
  }

  return groups;
}

async function processInPool(tasks, worker) {
  const results = [];
  let cursor = 0;
  async function run() {
    while (cursor < tasks.length) {
      const index = cursor++;
      results[index] = await worker(tasks[index], index);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, run));
  return results;
}

async function main() {
  await fs.access(SOURCE_DIR).catch(() => {
    console.error(`Source archive not found: ${SOURCE_DIR}`);
    process.exit(1);
  });

  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Output: ${OUT_DIR}\n`);

  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  const groups = await collectGroups();
  if (!groups.size) {
    console.error("No images found in source archive.");
    process.exit(1);
  }

  const manifest = {}; // slug -> string[] of public paths
  let totalBytes = 0;
  let totalCount = 0;

  for (const [slug, { label, files }] of groups) {
    const groupOut = path.join(OUT_DIR, slug);
    await fs.mkdir(groupOut, { recursive: true });
    const pad = String(files.length).length < 2 ? 2 : String(files.length).length;

    const paths = await processInPool(files, async (srcPath, i) => {
      const name = `${slug}-${String(i + 1).padStart(pad, "0")}.jpg`;
      const destPath = path.join(groupOut, name);
      try {
        await sharp(srcPath)
          .rotate()
          .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
          .toFile(destPath);
        const { size } = await fs.stat(destPath);
        totalBytes += size;
        totalCount += 1;
        return `/images/${slug}/${name}`;
      } catch (err) {
        console.warn(`  ! skipped ${path.basename(srcPath)}: ${err.message}`);
        return null;
      }
    });

    manifest[slug] = paths.filter(Boolean);
    console.log(`${label.padEnd(18)} ${String(manifest[slug].length).padStart(3)} images`);
  }

  const lines = [
    "// AUTO-GENERATED by scripts/optimize-images.mjs — do not edit by hand.",
    "// Run `npm run images` to regenerate.",
    "",
    "export const galleries = {",
    ...Object.entries(manifest).map(
      ([slug, paths]) =>
        `  ${JSON.stringify(slug)}: [\n${paths
          .map((p) => `    ${JSON.stringify(p)},`)
          .join("\n")}\n  ],`,
    ),
    "} as const;",
    "",
    "export type GalleryKey = keyof typeof galleries;",
    "",
  ];
  await fs.mkdir(path.dirname(MANIFEST), { recursive: true });
  await fs.writeFile(MANIFEST, lines.join("\n"), "utf8");

  console.log(
    `\nDone: ${totalCount} images, ${(totalBytes / 1024 / 1024).toFixed(1)} MB total.`,
  );
  console.log(`Manifest: ${path.relative(projectRoot, MANIFEST)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
