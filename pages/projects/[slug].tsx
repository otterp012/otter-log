import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Params } from "types/types";

import { allProjects } from "contentlayer/generated";
import { MdxSection, MdxLayout, TOC } from "components";
const Blog = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, headings } = data;

  return (
    <MdxLayout>
      <MdxSection postData={data} />
      <TOC headings={headings} title={title} />
    </MdxLayout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const data = allProjects.find((blog) => blog.slug === slug);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const allPaths = allProjects.map(({ slug }) => {
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
