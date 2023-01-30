import { Card } from "components";
import { getAllPublished } from "lib/notion";
import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { MetaData } from "types/types";

export default function Post({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <span className='mb-10 inline-block w-full text-center text-3xl font-bold italic'>
        POSTS
      </span>
      <ul className='flex flex-wrap gap-2'>
        {posts.map((post: MetaData) => (
          <Card
            title={post.title}
            description={post.description}
            publishedAt={post.date}
            thumbnailImg={post.cover}
            key={post.title}
            slug={`post/${post.slug}`}
            tags={post.tags}
          />
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const DATA_BASE_ID = process.env.DATABASE_ID as string;
  const data = await getAllPublished(DATA_BASE_ID);

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};
