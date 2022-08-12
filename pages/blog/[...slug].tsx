import Layout from "components/layout/layout";
import { allArticles, allFeatureds } from "contentlayer/generated";
import { GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const BlogDetail: NextPage = ({ data }) => {
  console.log(data);
  const MDXComponent = useMDXComponent(data.body.code);
  return (
    <Layout>
      <section className='px-5'>
        <div className='flex items-end justify-between'>
          <h2 className='text-3xl max-w-[90%] break-all font-semibold md:text-5xl'>
            {data.title}
          </h2>
          <time className='font-bold text-xs text-gray-300'>
            {new Date(data.publishedAt).toLocaleDateString()}
          </time>
        </div>

        <div className=''>
          <img
            src={data.thumnailImg}
            alt='test'
            className='w-[85%] mx-auto mt-7'
          />
        </div>

        <div className='mt-10 prose break-words w-full mx-auto'>
          <MDXComponent />
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const allBlogs = [...allArticles, ...allFeatureds];
  const currentBlog = allBlogs.find(
    (v) =>
      v._raw.flattenedPath.replace("blog/", "") ===
      context.params.slug.join("/"),
  );
  console.log(currentBlog);
  console.log("??");
  return {
    props: {
      data: currentBlog,
    },
  };
};

export const getStaticPaths = async (context) => {
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
