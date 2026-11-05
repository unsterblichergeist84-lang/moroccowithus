import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { readingMinutes } from "@/lib/blog";

const dateFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

export function PostCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="surface-card group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        <Image
          src={post.ogImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
          priority={priority}
        />
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-dune-800 shadow-sm">
          {readingMinutes(post.content)} min read
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-accent-700">
          <time dateTime={post.date}>
            {dateFormat.format(new Date(post.date))}
          </time>
        </p>
        <h2 className="mt-2 font-display text-lg font-semibold text-dune-900">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm text-dune-600">
          {post.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-700">
          Read &rarr;
        </span>
      </div>
    </Link>
  );
}
