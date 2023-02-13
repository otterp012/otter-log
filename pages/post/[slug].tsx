import dynamic from "next/dynamic";

import { SEO } from "components";

import { getAllPublished, getMarkDownById, getPageBySlug } from "lib/notion";
import type { ArticleType, MetaData, Params } from "types/types";

const DynamicArticle = dynamic<ArticleType>(() =>
  import("components").then((mod) => mod.Article),
);

const Post = ({ post }: { post: ArticleType }) => {
  const { metaData } = post;
  const { title, description, thumbnailImg, slug } = metaData;

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={`/post/${slug}`}
        imageUrl={thumbnailImg}
      />
      <DynamicArticle {...post} />
    </>
  );
};

export default Post;

export const getStaticProps = async (context: { params: Params }) => {
  const { slug } = context.params;
  const metaData = await getPageBySlug({
    database: "post",
    slug: slug as string,
  });

  const { markDownString, headings } = await getMarkDownById(metaData?.id);

  return {
    props: {
      post: {
        metaData,
        markDownString,
        headings,
      },
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished("post");
  const paths = posts.map(({ slug }: MetaData) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
