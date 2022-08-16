import Card from "components/card/card";
import Layout from "components/layout/layout";
import { allBlogs } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import { Blog as Blogtpyes } from "contentlayer/generated";

const Blogs = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [posts, setPosts] = useState(3);
  const viwed = data.slice(0, posts);

  return (
    <Layout>
      <form className='mx-auto w-full px-5'>
        <label htmlFor='search' />
        <input
          id='search'
          type='text'
          className='mx-auto h-14 w-full px-5 py-5 focus:outline-none'
          placeholder='검색기능은 아직 추가하지 못했어요.'
        />
      </form>
      <div className='px-3'>
        <h2 className='pt-5 text-4xl italic'>BLOG...</h2>
        {viwed.map((recentPost: Blogtpyes) => (
          <Card
            title={recentPost.title}
            description={recentPost.description}
            publishedAt={recentPost.publishedAt}
            thumbnailImg={recentPost.thumbnailImg}
            key={recentPost.title}
            slug={recentPost._raw.flattenedPath}
          />
        ))}
      </div>
      {data.length > posts ? (
        <button
          className='mx-auto mt-5 w-[50%] bg-blue-500 px-3 py-2 text-xl italic hover:bg-black'
          onClick={() => setPosts(posts + 3)}
        >
          더보기
        </button>
      ) : (
        <p>마지막 포스트입니다.</p>
      )}
    </Layout>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsByDate = allBlogs.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );
  return {
    props: {
      data: allBlogsByDate,
    },
  };
};
