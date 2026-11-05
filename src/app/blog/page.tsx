import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PostCard } from "@/components/PostCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

const BLOG_OG = "/images/merzouga/merzouga-22.jpg";

export const metadata: Metadata = {
  title: "Morocco Travel Blog: Routes, Timing and Practical Tips",
  description:
    "Notes on travelling privately in Morocco - timing, routes, and how to keep a trip unhurried.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: absoluteUrl("/blog"),
    title: "Blog",
    description: "Notes on travelling privately in Morocco.",
    images: [{ url: BLOG_OG }],
  },
  twitter: { images: [BLOG_OG] },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHeader
        eyebrow="Blog"
        title="Notes from the road"
        intro="Travelling privately in Morocco - when to go, how to route a trip, and what the places are actually like once you are there. Written for people planning their own visit, not for search engines."
        image={BLOG_OG}
        imageAlt="Late light on the dunes at Erg Chebbi"
      />

      <Container className="py-14 sm:py-20">
        {posts.length === 0 ? (
          <p className="text-dune-600">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} priority={i < 3} />
            ))}
          </div>
        )}
      </Container>

      <section className="bg-accent-700 text-white">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Planning a trip rather than reading about one?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Send us a few lines about your dates and what you want to see, and we
            will reply with a draft route.
          </p>
          <Link href="/contact" className="btn-on-dark mt-8">
            Start an inquiry
          </Link>
        </Container>
      </section>
    </>
  );
}
