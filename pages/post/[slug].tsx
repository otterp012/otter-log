import { Fragment } from "react";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Params } from "types";

import TOC from "components/toc";
import PostSection from "components/section";
import CustomMeta from "components/meta/customMeta";

import { allPosts } from "contentlayer/generated";

const Blog = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, headings, description, slug, thumbnailImg, seo } = data;

  return (
    <Fragment>
      <CustomMeta
        title={title}
        description={description}
        url={slug}
        image={thumbnailImg}
        seo={seo && seo}
      />
      <div className='flex w-full px-3 md:px-5 xl:px-0'>
        <PostSection postData={data} />
        <TOC headings={headings} title={title} />
      </div>
    </Fragment>
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
