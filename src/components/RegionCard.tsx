import Image from "next/image";
import Link from "next/link";
import { type Region, regionCover } from "@/content/regions";

export function RegionCard({ region, priority = false }: { region: Region; priority?: boolean }) {
  const tourCount = region.tourSlugs.length;

  return (
    <Link
      href={`/destinations/${region.slug}`}
      className="surface-card group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        <Image
          src={regionCover(region)}
          alt={region.name}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
          priority={priority}
        />
        {tourCount > 0 && (
          <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-dune-800 shadow-sm">
            {tourCount} {tourCount === 1 ? "tour" : "tours"}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-dune-900">
          {region.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-dune-600">{region.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-700">
          Explore &rarr;
        </span>
      </div>
    </Link>
  );
}
