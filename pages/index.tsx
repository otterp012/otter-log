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
        <div className='mt-5 w-full px-3 md:px-0'>
          <FeaturedCard
            title={featuredBlog.title}
            description={featuredBlog.description}
            publishedAt={featuredBlog.publishedAtFormatted}
            thumbnailImg={featuredBlog.thumbnailImg}
            slug={`/blog/${featuredBlog.slug}`}
          />

          <div className='mx-auto mt-10 md:max-w-[70%]'>
            <h2 className='mb-8 text-center text-3xl font-bold italic md:mb-10'>
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
