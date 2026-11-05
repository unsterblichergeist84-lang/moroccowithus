/**
 * Renders one or more JSON-LD blocks. Pass plain objects from `@/lib/jsonld`.
 * Server component — the script is in the initial HTML, no client JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Content is built from typed, in-repo data — no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
