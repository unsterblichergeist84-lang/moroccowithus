"use client";

import { useMemo, useState } from "react";
import { departures, type Tour } from "@/content/tours";
import { TourCard } from "@/components/TourCard";

type RegionOption = { slug: string; name: string; tourSlugs: string[] };

const durationBuckets = [
  { id: "short", label: "1-3 days", test: (d: number) => d <= 3 },
  { id: "mid", label: "4-5 days", test: (d: number) => d >= 4 && d <= 5 },
  { id: "long", label: "6+ days", test: (d: number) => d >= 6 },
];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded-full border border-accent-600 bg-accent-600 px-3.5 py-1.5 text-sm font-medium text-white"
          : "rounded-full border border-sand-300 px-3.5 py-1.5 text-sm font-medium text-dune-700 hover:border-sand-400 hover:bg-sand-100"
      }
    >
      {children}
    </button>
  );
}

export function ToursExplorer({
  tours,
  regionOptions,
}: {
  tours: Tour[];
  regionOptions: RegionOption[];
}) {
  const [departure, setDeparture] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const regionSlugs = region
      ? regionOptions.find((r) => r.slug === region)?.tourSlugs ?? []
      : null;
    const bucket = duration
      ? durationBuckets.find((b) => b.id === duration)
      : null;

    return tours.filter((t) => {
      if (departure && t.departure !== departure) return false;
      if (regionSlugs && !regionSlugs.includes(t.slug)) return false;
      if (bucket && !bucket.test(t.durationDays)) return false;
      return true;
    });
  }, [tours, regionOptions, departure, region, duration]);

  const hasFilter = departure !== null || region !== null || duration !== null;

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-sand-200 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-dune-500">
            Departing from
          </span>
          <Chip active={departure === null} onClick={() => setDeparture(null)}>
            All
          </Chip>
          {departures.map((d) => (
            <Chip
              key={d}
              active={departure === d}
              onClick={() => setDeparture(departure === d ? null : d)}
            >
              {d}
            </Chip>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-dune-500">
            Region
          </span>
          <Chip active={region === null} onClick={() => setRegion(null)}>
            All
          </Chip>
          {regionOptions.map((r) => (
            <Chip
              key={r.slug}
              active={region === r.slug}
              onClick={() => setRegion(region === r.slug ? null : r.slug)}
            >
              {r.name}
            </Chip>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-dune-500">
            Length
          </span>
          <Chip active={duration === null} onClick={() => setDuration(null)}>
            Any
          </Chip>
          {durationBuckets.map((b) => (
            <Chip
              key={b.id}
              active={duration === b.id}
              onClick={() => setDuration(duration === b.id ? null : b.id)}
            >
              {b.label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-dune-600">
          {filtered.length} {filtered.length === 1 ? "tour" : "tours"}
        </p>
        {hasFilter && (
          <button
            type="button"
            onClick={() => {
              setDeparture(null);
              setRegion(null);
              setDuration(null);
            }}
            className="text-sm font-medium text-accent-600 hover:text-accent-700"
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-dune-600">
          No tours match that combination. Most trips are custom anyway -{" "}
          <a href="/contact" className="font-medium text-accent-600 hover:text-accent-700">
            tell us what you have in mind
          </a>
          .
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} priority={i < 3} />
          ))}
        </div>
      )}
    </div>
  );
}
