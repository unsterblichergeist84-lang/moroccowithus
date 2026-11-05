import Link from "next/link";
import { site } from "@/config/site";
import Image from "next/image";
import { departureInfo } from "@/content/departures";
import { regions } from "@/content/regions";
import { Icon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappDigits = site.whatsapp.replace(/[^\d]/g, "");

  return (
    <footer className="mt-24 border-t border-sand-200 bg-sand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Image
            src={site.logo}
            alt={site.name}
            width={160}
            height={132}
            className="h-auto w-36"
          />
          <p className="mt-2 max-w-xs text-sm text-dune-600">{site.tagline}</p>
          <p className="mt-4 text-sm text-dune-600">
            Private, quote-on-inquiry travel. No fixed departures.
          </p>
        </div>

        <nav aria-label="Tours" className="flex flex-col gap-2 text-sm text-dune-600">
          <p className="font-semibold text-dune-900">Tours by departure city</p>
          {departureInfo.map((d) => (
            <Link key={d.slug} href={`/tours/from/${d.slug}`} className="hover:text-dune-900">
              From {d.city}
            </Link>
          ))}
          <Link href="/tours" className="hover:text-dune-900">
            All tours
          </Link>
        </nav>

        <nav
          aria-label="Destinations"
          className="flex flex-col gap-2 text-sm text-dune-600"
        >
          <p className="font-semibold text-dune-900">Destinations</p>
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/destinations/${region.slug}`}
              className="hover:text-dune-900"
            >
              {region.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm text-dune-600">
          <p className="font-semibold text-dune-900">Get in touch</p>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 hover:text-dune-900"
          >
            <Icon.Mail className="h-4 w-4 text-accent-600" />
            {site.email}
          </a>
          <a
            href={`https://wa.me/${whatsappDigits}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-dune-900"
          >
            <Icon.WhatsApp className="h-4 w-4 text-accent-600" />
            WhatsApp
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-dune-900"
          >
            <Icon.Instagram className="h-4 w-4 text-accent-600" />
            Instagram
          </a>
          <div className="mt-2 flex flex-col gap-2">
            <Link href="/about" className="hover:text-dune-900">
              About
            </Link>
            <Link href="/blog" className="hover:text-dune-900">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-dune-900">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-200 py-6">
        <p className="mx-auto max-w-6xl px-4 text-xs text-dune-500 sm:px-6">
          &copy; {year} {site.name}. All rights reserved.{" "}
          <Link href="/privacy" className="underline hover:text-dune-700">
            Privacy policy
          </Link>{" "}
          <Link href="/terms" className="underline hover:text-dune-700">
            Terms
          </Link>
        </p>
      </div>
    </footer>
  );
}
