import type { Tour } from "@/content/tours";

/**
 * Fixed bottom bar on tour detail pages, mobile only. Keeps the primary CTA
 * reachable while scrolling the itinerary. Hidden on lg where the sidebar
 * inquiry form is always visible. The floating WhatsApp button covers the
 * bottom-right corner, so leave clearance on that side.
 */
export function TourStickyBar({ tour }: { tour: Tour }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-white/95 px-4 py-2.5 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-dune-900">
            {tour.title}
          </p>
          <p className="truncate text-xs text-dune-500">
            Private &middot; quote on inquiry
          </p>
        </div>
        <a href="#inquire" className="btn-primary shrink-0 px-5 py-2.5">
          Inquire
        </a>
      </div>
    </div>
  );
}
