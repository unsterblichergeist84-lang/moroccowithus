import Image from "next/image";
import { Container } from "@/components/Container";

/**
 * Shared hero band for the main pages (tours, destinations, about, contact,
 * blog). Provides the page's single <h1>.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-dune-900">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dune-900 via-dune-900/75 to-dune-900/55" />
      </div>

      <Container className="flex min-h-[34vh] flex-col justify-center py-14 text-white sm:py-16">
        {eyebrow && <p className="eyebrow-on-dark">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight [overflow-wrap:anywhere] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
