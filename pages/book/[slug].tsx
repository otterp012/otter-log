import dynamic from "next/dynamic";

import { SEO } from "components";
import { BOOKS_INFO } from "constants/constants";
import { getAllPublished, getMarkDownById, getPageBySlug } from "lib/notion";
import type { ArticleType, Params } from "types/types";

const DynamicArticle = dynamic<ArticleType>(() =>
  import("components").then((mod) => mod.Article),
);

const BooK = ({ book }: { book: ArticleType }) => {
  const { metaData } = book;
  const { title, description, slug } = metaData;
  return (
    <>
      <SEO title={title} description={description} url={`/book/${slug}`} />
      <DynamicArticle {...book} />
    </>
  );
};

export default BooK;

export const getStaticProps = async (context: { params: Params }) => {
  const { slug } = context.params;
  const metaData = await getPageBySlug({
    database: "book",
    slug: slug as string,
  });

  const reference = BOOKS_INFO.find(
    (item) => item.id === metaData.name,
  )?.reference;

  const { markDownString, headings } = await getMarkDownById(metaData.id);

  return {
    props: {
      book: {
        metaData: {
          ...metaData,
          reference,
        },
        markDownString,
        headings,
      },
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished("book");
  const paths = posts.map(({ slug }: { slug: string }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
