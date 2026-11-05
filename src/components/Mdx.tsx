import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { MdxLink } from "@/components/MdxLink";

/**
 * Renders MDX blog bodies. `remark-gfm` adds GitHub-flavoured markdown
 * (tables, strikethrough, task lists, autolinks).
 *
 * next-mdx-remote v6 strips `{expression}` MDX expressions and import/export
 * statements by default (blockJS), which is fine for prose-only posts.
 */
const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

const components = {
  a: MdxLink,
};

export function Mdx({ source }: { source: string }) {
  return <MDXRemote source={source} options={options} components={components} />;
}
