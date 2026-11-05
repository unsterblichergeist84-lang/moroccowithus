import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

/**
 * Link renderer for MDX bodies.
 * - Root-relative (`/tours/...`) and hash links render as-is (internal).
 * - `http(s)` links open in a new tab with `rel="noopener noreferrer"` and a
 *   small outbound marker.
 * - `mailto:` / `tel:` render as plain anchors.
 */
export function MdxLink({
  href = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const isExternal = /^https?:\/\//i.test(href);

  if (isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span aria-hidden className="ml-0.5 text-[0.85em] text-accent-500">
          &#8599;
        </span>
      </a>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
