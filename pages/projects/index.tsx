import Layout from "components/layout";
import { allProjects } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

const Crad = ({ title, thumbnailImg, slug }) => {
  return (
    <section className='mt-10 flex min-h-[420px] flex-col rounded-lg border bg-red-400 shadow-2xl hover:scale-[1.03] hover:ease-in'>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className='w-full'>
            <img
              src={thumbnailImg}
              alt={title}
              className='h-[350px] w-full rounded-t-lg object-cover md:w-[350px]'
            />
          </div>
          <span className='flex flex-col px-5 py-5 text-center text-lg font-bold italic'>
            {title}
          </span>
        </a>
      </Link>
    </section>
  );
};

const Projects = ({ data }: InferGetStaticPropsType<GetStaticProps>) => {
  console.log(data);
  return (
    <Layout>
      <div className='flex min-h-[720px] flex-col px-5 md:flex-row md:items-center md:justify-center md:space-x-3'>
        {data.map((v) => (
          <Crad title={v.title} thumbnailImg={v.thumbnailImg} slug={v.slug} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: allProjects,
    },
  };
};
