import type { FaqItem } from "@/content/faq";

/**
 * Native <details> disclosure list - no client JS. Pass a heading level so the
 * page keeps a single <h1> and a sensible outline.
 */
export function Faq({
  items,
  className = "",
}: {
  items: FaqItem[];
  className?: string;
}) {
  return (
    <div className={`divide-y divide-sand-200 border-y border-sand-200 ${className}`}>
      {items.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-dune-900 marker:content-none">
            {item.question}
            <span
              aria-hidden
              className="shrink-0 text-accent-600 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-dune-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** JSON-LD FAQPage node for a set of FAQ items. */
export function faqJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
