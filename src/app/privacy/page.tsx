import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site, absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and uses the details you send when you make an inquiry.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: absoluteUrl("/privacy"),
    title: "Privacy Policy",
    description: `How ${site.name} handles the details you send in an inquiry.`,
  },
};

const updated = "October 2026";

export default function PrivacyPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="mx-auto max-w-2xl space-y-6 text-dune-700">
        <h1 className="text-3xl font-bold text-dune-900 sm:text-4xl">Privacy policy</h1>
        <p className="text-sm text-dune-500">Last updated {updated}</p>

        <p>
          This page explains what {site.name} does with the personal details you
          give us. We keep it short because we collect very little.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">What we collect</h2>
        <p>
          Only what you type into the inquiry form: your name, email address,
          the tour you are interested in, rough dates or group size if you add
          them, and your message. If you contact us on WhatsApp or email
          instead, we receive whatever you send.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">How we use it</h2>
        <p>
          To reply to your inquiry and, if you go ahead, to plan your trip. We do
          not sell your details and we do not send marketing email unless you
          ask for it.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Who handles it</h2>
        <p>
          Inquiries are delivered to us by an email service provider, and trip
          arrangements may involve local guides, drivers and hotels, who receive
          only the details they need. WhatsApp is run by Meta under its own
          privacy terms.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Cookies and tracking</h2>
        <p>
          This site does not set advertising cookies. If we add analytics later
          we will update this page.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">How long we keep it</h2>
        <p>
          We keep inquiry emails for as long as they are useful for the trip,
          and delete them on request.
        </p>

        <h2 className="text-xl font-semibold text-dune-900">Your rights</h2>
        <p>
          You can ask us to show you, correct or delete the details we hold
          about you. Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent-600 hover:text-accent-700"
          >
            {site.email}
          </a>{" "}
          and we will respond promptly.
        </p>
      </div>
    </Container>
  );
}
