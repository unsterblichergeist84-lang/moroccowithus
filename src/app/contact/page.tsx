import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Faq, faqJsonLd } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { InquiryForm } from "@/components/InquiryForm";
import { Icon } from "@/components/icons";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { site, absoluteUrl } from "@/config/site";
import { faq } from "@/content/faq";

const CONTACT_OG = "/images/chefchaouen/chefchaouen-12.jpg";

export const metadata: Metadata = {
  title: "Plan Your Private Morocco Tour: Send an Inquiry",
  description:
    "Send an inquiry about a private trip in Morocco. We reply with questions and a draft itinerary - no booking is made by getting in touch.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: absoluteUrl("/contact"),
    title: "Contact",
    description:
      "Send an inquiry about a private trip in Morocco. No booking is made by getting in touch.",
    images: [{ url: CONTACT_OG }],
  },
  twitter: { images: [CONTACT_OG] },
};

const contactFaq = faq.filter((item) =>
  [
    "Why are there no prices on the site?",
    "How far ahead should I get in touch?",
    "When is the best time to travel?",
  ].includes(item.question),
);

const helpful = [
  "Rough dates, or the month and how flexible it is",
  "How many of you, and whether there are children",
  "Which cities or regions you already know you want",
  "Anything that would make or break the trip",
  "How you like to travel - slow and deep, or covering ground",
];

export default function ContactPage() {
  const whatsappDigits = site.whatsapp.replace(/[^\d]/g, "");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqJsonLd(contactFaq),
        ]}
      />

      <PageHeader
        eyebrow="Contact"
        title="Start an inquiry"
        intro="Tell us roughly when you want to travel, how many of you there are and what you want the trip to include. That is enough for us to reply with a draft."
        image={CONTACT_OG}
        imageAlt="Blue-washed lanes in the Chefchaouen medina"
      />

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
          <div className="max-w-2xl">
            <div>
              <InquiryForm />
            </div>
          </div>

          <aside className="space-y-6 text-sm text-dune-700">
            <div className="rounded-xl border border-sand-200 bg-sand-100 p-5">
              <h2 className="font-semibold text-dune-900">Other ways to reach us</h2>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-3">
                  <Icon.Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-accent-600 hover:text-accent-700"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icon.WhatsApp className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <a
                    href={`https://wa.me/${whatsappDigits}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent-600 hover:text-accent-700"
                  >
                    {site.whatsapp}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icon.Instagram className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent-600 hover:text-accent-700"
                  >
                    @{site.shortName}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-sand-200 p-5">
              <Icon.Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
              <p>
                <span className="font-semibold text-dune-900">Response time.</span>{" "}
                We read every message ourselves and usually reply within one
                working day.
              </p>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-y border-sand-200 bg-sand-100">
        <Container className="py-14 sm:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-dune-900">
                Helpful to include
              </h2>
              <ul className="mt-4 space-y-2">
                {helpful.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-dune-700">
                    <span aria-hidden className="text-accent-600">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-dune-500">
                None of it is required. A single line is a fine place to start.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dune-900">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-dune-700">
                <li>
                  <span className="font-medium text-dune-900">
                    We reply with questions.
                  </span>{" "}
                  Usually within a working day, to fill in what we need.
                </li>
                <li>
                  <span className="font-medium text-dune-900">
                    You get a draft itinerary and a quote.
                  </span>{" "}
                  Day by day, with where you would stay.
                </li>
                <li>
                  <span className="font-medium text-dune-900">
                    We adjust until it fits.
                  </span>{" "}
                  Only then is anything booked or paid.
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-semibold text-dune-900">
              Before you write
            </h2>
            <p className="mt-3 text-dune-600">
              A few things that come up often. There is a fuller list on the{" "}
              <Link
                href="/about"
                className="font-medium text-accent-600 hover:text-accent-700"
              >
                about page
              </Link>
              .
            </p>
          </div>
          <Faq items={contactFaq} />
        </div>
      </Container>
    </>
  );
}
