import Card from "components/card/card";
import Layout from "components/layout/layout";
import { allArticles, allFeatureds, Article } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";

const Blog = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [posts, setPosts] = useState(3);
  const viwed = data.slice(0, posts);

  return (
    <Layout>
      <form className='px-5 w-full mx-auto'>
        <label htmlFor='search' />
        <input
          id='search'
          type='text'
          className='w-full h-14 focus:outline-none mx-auto px-5 py-5'
          placeholder='검색기능은 아직 추가하지 못했어요.'
        />
      </form>
      <div className='px-3'>
        <h2 className='text-4xl pt-5 italic'>BLOG...</h2>
        {viwed.map((recentPost: Article) => (
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
          className='bg-blue-500 px-3 py-2 w-[50%] mx-auto mt-5 text-xl italic hover:bg-black'
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

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allBlogs = [...allArticles, ...allFeatureds].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );
  return {
    props: {
      data: allBlogs,
    },
  };
};
