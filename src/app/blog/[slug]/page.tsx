import Image from "next/image";
import { postSeo } from "@/content/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/config/site";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  readingMinutes,
} from "@/lib/blog";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  const seo = postSeo[post.slug];
  const seoTitle = seo?.title ?? post.title;
  return {
    title: seo ? { absolute: seoTitle } : post.title,
    description: seo?.description ?? post.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      title: seoTitle,
      description: seo?.description ?? post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.ogImage }],
    },
    twitter: { images: [post.ogImage] },
  };
}

const dateFormat = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function BlogPostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug, 3);
  const minutes = readingMinutes(post.content);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.description,
            slug: post.slug,
            date: post.date,
            author: post.author,
            image: post.ogImage,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <section className="relative isolate overflow-hidden bg-dune-900">
        <div className="absolute inset-0 -z-10">
          <Image
            src={post.ogImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dune-900 via-dune-900/80 to-dune-900/55" />
        </div>
        <Container className="max-w-3xl py-16 text-white sm:py-24">
          <nav aria-label="Breadcrumb" className="eyebrow-on-dark">
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
          </nav>
          <h1 className="mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-white/75">
            <time dateTime={post.date}>
              {dateFormat.format(new Date(post.date))}
            </time>{" "}
            &middot; {post.author} &middot; {minutes} min read
          </p>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <article className="mx-auto max-w-2xl">
          <p className="text-lg text-dune-700">{post.description}</p>

          <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-headings:font-semibold prose-h2:mt-10 prose-a:font-medium prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline prose-table:block prose-table:overflow-x-auto">
            <Mdx source={post.content} />
          </div>
        </article>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-100">
          <Container className="py-14 sm:py-16">
            <p className="eyebrow">Related reading</p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-accent-700 text-white">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Turn this into a real itinerary
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Tell us your rough dates and what you want to see, and we will reply
            with a draft route.
          </p>
          <Link href="/contact" className="btn-on-dark mt-8">
            Start an inquiry
          </Link>
        </Container>
      </section>
    </>
  );
}
