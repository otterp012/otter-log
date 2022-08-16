import Layout from "components/layout/layout";
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import FeaturedCard from "components/card/featuredCard";
import Card from "components/card/card";
import { allBlogs } from "contentlayer/generated";

const Home: NextPage = ({
  featuredBlog,
  recentBlogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <FeaturedCard
          title={featuredBlog.title}
          description={featuredBlog.description}
          publishedAt={featuredBlog.publishedAtFormatted}
          thumbnailImg={featuredBlog.thumbnailImg}
          slug={`/blog/${featuredBlog.slug}`}
        />

        <div className='mt-10 w-full'>
          <h2 className='font-bold text-3xl text-center italic mb-8 md:mb-10'>
            RECENT POSTS
          </h2>
          {recentBlogs.map((recentBlog) => (
            <Card
              title={recentBlog.title}
              description={recentBlog.description}
              publishedAt={recentBlog.publishedAtFormatted}
              thumbnailImg={recentBlog.thumbnailImg}
              key={recentBlog.title}
              slug={`/blog/${recentBlog.slug}`}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredBlog = allBlogs.filter((blog) => blog.isFeatured)[0];
  const recentBlogs = allBlogs.filter((blog) => !blog.isFeatured);
  return {
    props: {
      featuredBlog,
      recentBlogs,
    },
  };
};
