import { Fragment } from "react";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Params } from "types/types";

// component
import { MdxSection, MdxLayout, CustomMeta, TableOfContents } from "components";

// mdx
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
      <MdxLayout>
        <MdxSection postData={data} />
        <TableOfContents title={title} headings={headings} />
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
