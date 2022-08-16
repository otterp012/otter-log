import Layout from "components/layout/layout";
import { allBlogs } from "contentlayer/generated";
import { GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ParsedUrlQuery } from "querystring";
import { InferGetStaticPropsType } from "next";
import BlogHeader from "components/blog/BlogHeader";
import TOC from "components/blog/TOC";

const Blog: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, publishedAtFormatted, thumbnailImg, body, headings } = data;
  const MDXComponent = useMDXComponent(body.code);
  return (
    <Layout>
      <div className='flex w-full'>
        <section className='px-5 mt-5 w-full'>
          <BlogHeader
            title={title}
            publishedAtFormatted={publishedAtFormatted}
            thumbnailImg={thumbnailImg}
          />
          <div className='mt-10 prose prose-a:no-underline w-full mx-auto'>
            <MDXComponent />
          </div>
        </section>
        <TOC headings={headings} />
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
  const currentBlog = allBlogs.find((blog) => blog.slug === slug);

  return {
    props: {
      data: currentBlog,
    },
  };
};

export const getStaticPaths = async () => {
  const allPaths = allBlogs.map(({ slug }) => {
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
