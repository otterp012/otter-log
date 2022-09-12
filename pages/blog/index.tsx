import Card from "components/card/card";
import Layout from "components/layout";
import { allPosts } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRef } from "react";
import type { Post as PostType } from "contentlayer/generated";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import Link from "next/link";

const Blogs = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const observedTarget = useRef<HTMLParagraphElement>(null);
  const { len: postLength } = useInfiniteScroll(
    3,
    data.length,
    3,
    observedTarget,
  );
  const displayedPosts = data.slice(0, postLength);

  return (
    <Layout>
      <div className='px-3'>
        <h2 className='pt-5 text-4xl font-bold italic'>BLOG...</h2>
        {displayedPosts.map((displayedPost: PostType) => (
          <Card
            title={displayedPost.title}
            description={displayedPost.description}
            publishedAt={displayedPost.publishedAtFormatted}
            thumbnailImg={displayedPost.thumbnailImg}
            key={displayedPost.title}
            slug={displayedPost.path}
            tags={displayedPost.tags}
          />
        ))}
      </div>
      <div className='mt-20 text-center' ref={observedTarget}>
        <Link href='#top' replace={true}>
          <a className='px-3 py-5 italic'>맨 위로가기 ⬆️⬆️</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsByDate = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );
  return {
    props: {
      data: allBlogsByDate,
    },
  };
};
