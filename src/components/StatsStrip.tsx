import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { getTourCount } from "@/lib/tours";
import { regions } from "@/content/regions";

/**
 * Qualitative credentials, plus two figures derived from real content
 * (tour + region counts). No invented "years in business" / review numbers.
 */
export function StatsStrip() {
  const stats = [
    { icon: Icon.Route, value: String(getTourCount()), label: "curated route templates" },
    { icon: Icon.MapPin, value: String(regions.length), label: "regions of Morocco covered" },
    { icon: Icon.Users, value: "100%", label: "private - never a shared group" },
    { icon: Icon.Clock, value: "~1 day", label: "typical reply to an inquiry" },
  ];

  return (
    <section className="border-b border-sand-200 bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <s.icon className="h-6 w-6 text-accent-600" />
            <p className="mt-3 font-display text-2xl font-bold text-dune-900">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-dune-600">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
