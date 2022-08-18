import Layout from "components/layout/layout";
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import FeaturedCard from "components/card/featuredCard";
import { allPosts, Post as PostType } from "contentlayer/generated";
import RecentCards from "components/card/recentCards";

const Home: NextPage = ({
  featuredPost,
  recentPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <section className='mt-5 w-full px-3 md:px-0'>
          <FeaturedCard
            title={featuredPost.title}
            description={featuredPost.description}
            publishedAt={featuredPost.publishedAtFormatted}
            thumbnailImg={featuredPost.thumbnailImg}
            slug={featuredPost.path}
          />
        </section>
        <RecentCards recentPosts={recentPosts} />
      </Layout>
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
