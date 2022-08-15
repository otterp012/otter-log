import Layout from "components/layout/layout";
import { allArticles, allFeatureds } from "contentlayer/generated";
import { GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ParsedUrlQuery } from "querystring";
import { InferGetStaticPropsType } from "next";

const BlogDetail: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, publishedAt, thumbnailImg, body } = data;
  const MDXComponent = useMDXComponent(body.code);
  return (
    <Layout>
      <section className='px-5'>
        <div className='flex items-end justify-between'>
          <h2 className='text-3xl max-w-[90%] break-all font-semibold md:text-5xl'>
            {title}
          </h2>
          <time className='font-bold text-xs text-gray-300'>
            {new Date(publishedAt).toLocaleDateString()}
          </time>
        </div>

        <div>
          <img src={thumbnailImg} alt='test' className='w-[85%] mx-auto mt-7' />
        </div>

        <div className='mt-10 prose break-words w-full mx-auto'>
          <MDXComponent />
        </div>

        <aside className='hidden bg-blue-300 sticky bottom-[45%] w-14 xl:block ml-[800px]'>
          <div className=''>123</div>
        </aside>
      </section>
    </Layout>
  );
};

export default BlogDetail;

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const allBlogs = [...allArticles, ...allFeatureds];
  const currentBlog = allBlogs.find(
    (v) => v._raw.flattenedPath.replace("blog/", "") === slug.join("/"),
  );

  return {
    props: {
      data: currentBlog,
    },
  };
};

export const getStaticPaths = async () => {
  const allBlogs = [...allArticles, ...allFeatureds];
  const allPaths = allBlogs
    .map((v) => v._raw.flattenedPath)
    .map((path) => {
      return {
        params: {
          slug: path.replace("blog/", "").split("/"),
        },
      };
    });
  return {
    paths: allPaths,
    fallback: false,
  };
};
