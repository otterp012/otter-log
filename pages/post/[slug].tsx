import * as React from "react";

import { TableOfContents, MarkDown, PostHeader } from "components";
import { getAllPublished, getPost } from "lib/notion";
import { MetaData, Params, PostType } from "types/types";

const Post = ({ post }: { post: PostType }) => {
  const { markdown, headings, metadata } = post;

  return (
    <section className='mt-10'>
      <PostHeader {...metadata} />
      <div className='mt-5 lg:flex lg:flex-row-reverse'>
        <TableOfContents headings={headings} />
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
