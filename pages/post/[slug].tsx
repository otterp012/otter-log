import * as React from "react";

import { SEO } from "components";
import { getAllPublished, getPost } from "lib/notion";
import { parseHeading } from "lib/utils";
import type { HeadingType, MetaData, Params, PostType } from "types/types";
import dynamic from "next/dynamic";

const DynamicArticle = dynamic<PostType>(() =>
  import("components").then((mod) => mod.Article),
);

const Post = ({ post }: { post: PostType }) => {
  const { metaData } = post;
  const { title, description, cover, slug } = metaData;
  return (
    <>
      <SEO
        title={title}
        description={description}
        url={`/post/${slug}`}
        imageUrl={cover as string}
      />
      <DynamicArticle {...post} />
    </>
  );
};

export default Post;

export const getStaticProps = async (context: { params: Params }) => {
  const { slug } = context.params;
  const post = await getPost(slug as string);
  const parsedHeading = post.headings
    .filter((item: { type: string; parent: string }) =>
      item.type.includes("heading"),
    )
    .map((item: { type: string; parent: string }) => {
      const parsedText = parseHeading(item.parent);
      return {
        heading: item.type.replace(/_/, ""),
        slug: parsedText.replace(/ /g, "-").toLowerCase(),
        text: parsedText,
      };
    }) as HeadingType[];

  return {
    props: {
      post: {
        ...post,
        headings: parsedHeading,
      },
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
