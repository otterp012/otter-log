import * as React from "react";

import { TableOfContents, MarkDown, PostHeader } from "components";
import { getAllPublished, getPost } from "lib/notion";
import { HeadingType, MetaData, Params, PostType } from "types/types";

const Post = ({ post }: { post: PostType }) => {
  const { markdown, headings, metadata } = post;

  const regXHeader = /(^#{1,6})\s/g;
  const parsedHeading = headings
    .filter((item: { type: string; parent: string }) =>
      item.type.includes("heading"),
    )
    .map((item: { type: string; parent: string }) => {
      return {
        heading: item.type.replace("_", ""),
        slug: item.parent
          .replace(regXHeader, "")
          .replace(/ /g, "-")
          .toLowerCase(),
        text: item.parent.replace(regXHeader, ""),
      };
    }) as HeadingType[];

  return (
    <section className='mt-10'>
      <PostHeader {...metadata} />
      <div className='mt-5 lg:flex lg:flex-row-reverse'>
        <TableOfContents headings={parsedHeading} />
        <MarkDown markdownString={markdown} />
      </div>
    </section>
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
    fallback: false,
  };
};
