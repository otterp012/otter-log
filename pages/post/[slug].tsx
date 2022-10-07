import { Fragment } from "react";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Params } from "types/types";

import { MdxSection, MdxLayout, TOC } from "components";
import { allPosts } from "contentlayer/generated";

const Blog = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, headings, description, slug, thumbnailImg, seo } = data;

  return (
    <Fragment>
      {/* <CustomMeta
        title={title}
        description={description}
        url={slug}
        image={thumbnailImg}
        seo={seo && seo}
      /> */}
      <MdxLayout>
        <MdxSection postData={data} />
        <TOC headings={headings} title={title} />
      </MdxLayout>
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
