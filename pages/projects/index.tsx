import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { MDXProps } from "types";

import ProjectCard from "components/card/projectCard";

import { allProjects } from "contentlayer/generated";

const Projects = ({ allProjects }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <div className='flex min-h-[720px] flex-col px-5 md:flex-row md:items-center md:justify-center md:space-x-3'>
      {allProjects.map(({ title, thumbnailImg, slug }: MDXProps) => (
        <ProjectCard
          key={title}
          title={title}
          thumbnailImg={thumbnailImg}
          slug={slug}
        />
      ))}
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allProjects,
    },
  };
};
