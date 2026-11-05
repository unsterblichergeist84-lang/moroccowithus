import { regions } from "@/content/regions";
import { RegionCard } from "@/components/RegionCard";

export function RegionGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {regions.map((region, i) => (
        <RegionCard key={region.slug} region={region} priority={i < 3} />
      ))}
    </div>
  );
}
