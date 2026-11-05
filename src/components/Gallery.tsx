"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + images.length) % images.length;
      }),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="relative block aspect-square w-full overflow-hidden rounded-lg bg-sand-100"
            >
              <Image
                src={src}
                alt={`${title} - photo ${i + 1}`}
                fill
                sizes="(min-width: 640px) 300px, 45vw"
                className="object-cover transition hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dune-900/90 p-4"
          onClick={close}
        >
          <div
            className="relative h-full max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex]}
              alt={`${title} - photo ${openIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
          >
            Close
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
          >
            &rarr;
          </button>
        </div>
      )}
    </>
  );
}
