import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site, absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Booking Conditions",
  description: `How quotes, deposits, changes and cancellations work for private tours with ${site.name}.`,
  alternates: { canonical: "/terms" },
  openGraph: {
    url: absoluteUrl("/terms"),
    title: "Terms & Booking Conditions",
    description: `How quotes, deposits and changes work for private tours with ${site.name}.`,
  },
};

const updated = "November 2026";

/**
 * DRAFT terms. The deposit, balance and cancellation specifics below are
 * deliberately left as "set in your quote" until the business owner fixes real
 * figures and a lawyer reviews this page.
 */
export default function TermsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="mx-auto max-w-2xl space-y-6 text-dune-700">
        <h1 className="text-3xl font-bold text-dune-900 sm:text-4xl">
          Terms &amp; booking conditions
        </h1>
        <p className="text-sm text-dune-500">Last updated {updated}</p>

        <p>
          These terms explain how a private trip with {site.name} is arranged.
          Every trip is tailor-made, so the exact figures and dates are set out
          in your written quote, which takes precedence over this page.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Quotes</h2>
        <p>
          Tours on this site have no fixed price. After you send an inquiry we
          reply with questions and a day-by-day itinerary with a full quote. The
          quote states what is included and what is not, and how long it stays
          valid. Nothing is booked or charged until you approve it.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Deposit and payment</h2>
        <p>
          To confirm a trip we ask for a deposit. The deposit amount, the date
          the balance is due and the accepted payment methods are stated in your
          quote.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Changes by you</h2>
        <p>
          Tell us as early as you can if your dates, group size or flights
          change. We will adjust the itinerary where hotels, guides and drivers
          allow, and let you know of any difference in cost before going ahead.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Cancellation</h2>
        <p>
          If you need to cancel, tell us in writing. What is refundable depends
          on how close to departure you cancel and on what has already been
          committed to hotels, camps and drivers. The cancellation schedule is
          stated in your quote.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Changes by us</h2>
        <p>
          Weather, road closures, site closures or safety advice can force a
          change to the route. If that happens we will offer the closest
          alternative and explain any cost difference. Where we cannot deliver a
          service, we refund the part that was not provided.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Travel insurance</h2>
        <p>
          We recommend travel insurance covering cancellation, medical care and
          repatriation. It is not included unless your quote says so.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Your responsibilities</h2>
        <p>
          You are responsible for a valid passport and any visa or entry
          requirements, and for telling us about health, mobility or dietary
          needs that affect the plan. Please follow your guide&apos;s safety
          advice, especially in the desert and in the mountains.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Liability</h2>
        <p>
          We take care in choosing and supervising guides, drivers and hotels.
          Some parts of a trip are delivered by independent local suppliers, and
          events outside our reasonable control may affect the trip. Nothing on
          this page limits rights you have under the law that applies to you.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Questions</h2>
        <p>
          Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent-600 hover:text-accent-700"
          >
            {site.email}
          </a>{" "}
          before you book and we will go through anything that is unclear.
        </p>
      </div>
    </Container>
  );
}
