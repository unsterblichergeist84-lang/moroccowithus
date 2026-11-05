import { Container } from "@/components/Container";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="border-y border-sand-200 bg-sand-100">
      <Container className="py-16 sm:py-20">
        <p className="eyebrow">In their words</p>
        <h2 className="mt-3 text-3xl font-bold text-dune-900 sm:text-4xl">
          What travellers say
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.attribution}
              className="flex flex-col rounded-xl border border-sand-200 bg-white p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-dune-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-700">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
        {/* TODO(launch): replace with real, permissioned traveller quotes. */}
      </Container>
    </section>
  );
}
