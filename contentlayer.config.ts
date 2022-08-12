import { FieldDef } from "contentlayer/core";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

const fieldsConfig = {
  title: { type: "string", required: true },
  publishedAt: { type: "string", required: true },
  description: { type: "string", required: true },
  seoDescription: { type: "string", required: false },
  category: { type: "string", required: true },
  thumnailImg: { type: "string", required: true },
};

export const Article = defineDocumentType(() => ({
  name: "Article",
  contentType: "mdx",
  filePathPattern: `blog/articles/*.mdx`,
  fields: fieldsConfig,
}));

export const Featured = defineDocumentType(() => ({
  name: "Featured",
  contentType: "mdx",
  filePathPattern: `blog/featured/*.mdx`,
  fields: fieldsConfig,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Featured],
});

export default contentLayerConfig;
