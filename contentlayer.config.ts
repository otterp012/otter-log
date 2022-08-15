import { FieldDef } from "contentlayer/core";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Article = defineDocumentType(() => ({
  name: "Article",
  contentType: "mdx",
  filePathPattern: `blog/articles/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: false },
    thumbnailImg: { type: "string", required: true },
  },
}));

export const Featured = defineDocumentType(() => ({
  name: "Featured",
  contentType: "mdx",
  filePathPattern: `blog/featured/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: false },
    thumbnailImg: { type: "string", required: true },
  },
  computedFields: {
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
        // const slugger = new GithubSlugger();

        // https://stackoverflow.com/a/70802303
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: flag?.length,
              text: content,
              // slug: content ? slugger.slug(content) : undefined,
            };
          },
        );

        return headings;
      },
    },
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return new Date(doc.publishedAt).toLocaleDateString();
      },
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Featured],
  mdx: {
    rehypePlugins: [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
      },
    ],
  },
});

export default contentLayerConfig;
