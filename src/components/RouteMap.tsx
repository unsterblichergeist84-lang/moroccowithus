import type { Tour } from "@/content/tours";
import { getRouteStops } from "@/lib/tourMeta";

const W = 600;
const H = 380;
const PAD = 56;

/** Schematic route map: stops placed by real lat/lon, joined in itinerary order. */
export function RouteMap({ tour }: { tour: Tour }) {
  const stops = getRouteStops(tour);
  if (stops.length < 2) return null;

  const k = Math.cos((33 * Math.PI) / 180); // squash longitude to match latitude
  const xs = stops.map((s) => s.lon * k);
  const ys = stops.map((s) => -s.lat);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const spanX = Math.max(maxX - minX, 1.2);
  const spanY = Math.max(maxY - minY, 1.2);
  const scale = Math.min((W - PAD * 2) / spanX, (H - PAD * 2) / spanY);
  const offX = W / 2 - ((minX + maxX) / 2) * scale;
  const offY = H / 2 - ((minY + maxY) / 2) * scale;
  const pt = (i: number) => ({ x: xs[i] * scale + offX, y: ys[i] * scale + offY });

  // Unique places, numbered by first visit.
  const order = new Map<string, number>();
  const placed = new Map<string, { x: number; y: number }>();
  stops.forEach((s, i) => {
    if (!order.has(s.name)) {
      order.set(s.name, order.size + 1);
      placed.set(s.name, pt(i));
    }
  });
  const path = stops
    .map((_, i) => `${i ? "L" : "M"}${pt(i).x.toFixed(1)} ${pt(i).y.toFixed(1)}`)
    .join(" ");
  const summary = Array.from(order.keys()).join(", then ");

  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Route map: ${summary}`}
        className="w-full rounded-xl border border-sand-200 bg-sand-100"
      >
        <path
          d={path}
          fill="none"
          className="stroke-accent-600"
          strokeWidth={2.5}
          strokeDasharray="6 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {Array.from(placed.entries()).map(([name, { x, y }]) => {
          const right = x < W * 0.65;
          return (
            <g key={name}>
              <circle cx={x} cy={y} r={11} className="fill-accent-600" />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                className="fill-white text-[11px] font-semibold"
              >
                {order.get(name)}
              </text>
              <text
                x={right ? x + 17 : x - 17}
                y={y + 4}
                textAnchor={right ? "start" : "end"}
                className="fill-dune-900 text-[13px] font-medium"
              >
                {name}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-xs text-dune-500">
        Schematic route in itinerary order, not exact roads. North is up.
      </figcaption>
    </figure>
  );
}
