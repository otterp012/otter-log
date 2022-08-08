import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Article = defineDocumentType(() => ({
  name: "Article",
  contentType: "mdx",
  filePathPattern: `articles/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: false },
  },
}))

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article],
})

export default contentLayerConfig
