import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";

const items = [
  {
    icon: Icon.Users,
    title: "A private guide and driver",
    body: "Yours alone for the trip. No other travellers, no coach, no fixed group to keep pace with.",
  },
  {
    icon: Icon.Route,
    title: "A route built around your dates",
    body: "We plan the vehicle, the drive times and the overnight stops for your group, not an average one.",
  },
  {
    icon: Icon.Compass,
    title: "Local city guides",
    body: "People who live where they show you - the makers, the back lanes, the quiet hours at the busy sites.",
  },
  {
    icon: Icon.ShieldCheck,
    title: "24/7 local contact",
    body: "One person who plans your trip and is reachable while you travel, in case a plan needs to shift.",
  },
  {
    icon: Icon.Calendar,
    title: "A costed itinerary before you commit",
    body: "A day-by-day plan and a full quote. You approve both before anything is booked or paid.",
  },
  {
    icon: Icon.Sparkles,
    title: "No hidden extras",
    body: "The price reflects the trip you agreed. What is included and what is not is spelled out per tour.",
  },
];

export function IncludedInEvery() {
  return (
    <Container className="py-16 sm:py-20">
      <p className="eyebrow">What every trip includes</p>
      <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
        The same standard, whatever the route
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
              <item.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-dune-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-dune-600">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
