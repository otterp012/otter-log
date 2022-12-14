import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `post/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnailImg: { type: "string", required: true },
    isFeatured: { type: "boolean", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    series: { type: "string", of: { type: "list" }, required: false },
    seo: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        // use same package as rehypeSlug so toc and sluggified headings match
        // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
        const slugger = new GithubSlugger();

        // https://stackoverflow.com/a/70802303
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: `heading${flag?.length}`,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          },
        );

        return headings;
      },
    },
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return new Date(doc.publishedAt).toLocaleDateString("ko-kr", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      },
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: `project/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: false },
    thumbnailImg: { type: "string", required: true },
    rank: { type: "number", required: true },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        // use same package as rehypeSlug so toc and sluggified headings match
        // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
        const slugger = new GithubSlugger();

        // https://stackoverflow.com/a/70802303
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: `heading${flag?.length}`,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          },
        );

        return headings;
      },
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Project],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
    ],
  },
});

export default contentLayerConfig;
