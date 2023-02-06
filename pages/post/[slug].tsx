import dynamic from "next/dynamic";

import { SEO } from "components";

import { getAllPublished, getPost } from "lib/notion";
import type { MetaData, Params, PostType } from "types/types";

const DynamicArticle = dynamic<PostType>(() =>
  import("components").then((mod) => mod.Article),
);

const Post = ({ post }: { post: PostType }) => {
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
  const post = await getPost(slug as string);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const DATA_BASE_ID = process.env.DATABASE_ID as string;
  const posts = await getAllPublished(DATA_BASE_ID);
  const paths = posts.map(({ slug }: MetaData) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
