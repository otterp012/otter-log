import { allPosts } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Params } from "types";
import TOC from "components/toc";
import PostSection from "components/post/PostSection";

const Blog = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, headings } = data;

  return (
    <div className='flex w-full px-3 md:px-5 xl:px-0'>
      <PostSection postData={data} />
      <TOC headings={headings} title={title} />
    </div>
  );
};

export default Blog;

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
