import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import FeaturedCard from "components/card/featuredCard";
import { allPosts, Post as PostType } from "contentlayer/generated";

import Card from "components/card/card";

const Home: NextPage = ({
  featuredPost,
  recentPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className='mt-5 w-full px-3 md:px-0'>
        <FeaturedCard
          title={featuredPost.title}
          description={featuredPost.description}
          publishedAt={featuredPost.publishedAtFormatted}
          thumbnailImg={featuredPost.thumbnailImg}
          slug={featuredPost.path}
        />
      </div>
      <div className='mx-auto mt-10 md:max-w-[70%]'>
        <h2 className='mb-8 text-center text-3xl font-bold italic md:mb-10'>
          RECENT POSTS
        </h2>
        {recentPosts.map((recentPost: PostType) => (
          <Card
            title={recentPost.title}
            description={recentPost.description}
            publishedAt={recentPost.publishedAtFormatted}
            thumbnailImg={recentPost.thumbnailImg}
            key={recentPost.title}
            slug={recentPost.path}
            tags={recentPost.tags}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredPost = allPosts.filter((post) => post.isFeatured)[0];
  const recentPosts = allPosts
    .filter((post) => !post.isFeatured)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    .slice(0, 3);

  return {
    props: {
      featuredPost,
      recentPosts,
    },
  };
};
