import Layout from "components/layout/layout";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import TOC from "components/post/TOC";
import PostSection from "components/post/PostSection";

const Blog = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, headings } = data;
  return (
    <Layout>
      <div className='flex w-full px-3 md:px-5 xl:px-0'>
        <PostSection postData={data} />
        <TOC headings={headings} title={title} />
      </div>
    </Layout>
  );
};

export default Blog;

type Params = {
  slug: string | string[] | ParsedUrlQuery | undefined;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const data = allPosts.find((blog) => blog.slug === slug);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const allPaths = allPosts.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};
