import Layout from "components/layout/layout";
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import FeaturedCard from "components/card/featuredCard";
import Card from "components/card/card";
import { allArticles, allFeatureds, Article } from "contentlayer/generated";

const Home: NextPage<MDXProps> = ({
  featuredPost,
  recentPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <FeaturedCard
          title={featuredPost.title}
          description={featuredPost.description}
          publishedAt={featuredPost.publishedAt}
          thumnailImg={featuredPost.thumnailImg}
          slug={featuredPost._raw.flattenedPath}
        />
        {/* RECENT post */}
        <div className='mt-10 w-full'>
          <h2 className='font-bold text-3xl text-center italic mb-8 md:mb-10'>
            RECENT POSTS
          </h2>
          {recentPosts.map((recentPost: Article) => (
            <Card
              title={recentPost.title}
              description={recentPost.description}
              publishedAt={recentPost.publishedAt}
              thumnailImg={recentPost.thumnailImg}
              key={recentPost.title}
              slug={recentPost._raw.flattenedPath}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredPost = allFeatureds[0];
  const recentPosts = allArticles.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );

  return {
    props: {
      featuredPost,
      recentPosts,
    },
  };
};
