import { getPlaiceholder } from "plaiceholder";

import { SEO, Comment, Article } from "components";

import { getAllPublished, getMarkDownById, getPageBySlug } from "lib/notion";
import type { ArticleType, MetaData, Params } from "types/types";

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
      <Article {...post} />
      <Comment />
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

  const { base64 } = await getPlaiceholder(metaData?.thumbnailImg);
  const { markDownString, headings } = await getMarkDownById(metaData?.id);

  return {
    props: {
      post: {
        metaData: {
          ...metaData,
          blurImg: base64,
        },
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
