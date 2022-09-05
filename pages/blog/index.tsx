import Card from "components/card/card";
import Layout from "components/layout/layout";
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
      {/* <form className='mx-auto w-full px-5'>
        <label htmlFor='search' />
        <input
          id='search'
          type='text'
          className='mx-auto h-14 w-full px-5 py-5 focus:outline-none'
          placeholder='검색기능은 아직 추가하지 못했어요.'
        />
      </form> */}
      <div className='px-3'>
        <h2 className='pt-5 text-4xl italic'>BLOG...</h2>
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
      <div className='text-center'>
        <p ref={observedTarget}>
          {postLength > data.length ? "마지막 포스트입니다" : ""}
        </p>
        <Link href='#top' replace={true}>
          <a className='bg-red-300 px-3 py-5'>맨 위로가기</a>
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
