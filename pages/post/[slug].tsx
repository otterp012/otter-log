import dynamic from "next/dynamic";
import { getPlaiceholder } from "plaiceholder";

import { SEO, ArticleHeader, ArticleMainProps } from "components";
import { getAllPublished, getMarkDownById, getPageBySlug } from "lib/notion";
import type { ArticleType, MetaData, Params } from "types/types";

const Post = ({ post }: { post: ArticleType }) => {
  const { metaData, ...rest } = post;
  const { title, description, thumbnailImg, slug } = metaData;

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={`/post/${slug}`}
        imageUrl={thumbnailImg}
      />
      <article className='mt-10'>
        <ArticleHeader {...metaData} />
        <DynamicArticleMain {...rest} />
      </article>
      <DynamicComment />
    </>
  );
};

export default Post;

const DynamicComment = dynamic<{}>(
  () => import("components").then((mod) => mod.Comment),
  { ssr: false },
);

const DynamicArticleMain = dynamic<ArticleMainProps>(() =>
  import("components").then((mod) => mod.ArticleMain),
);

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
