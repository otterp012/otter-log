import ProjectCard from "components/card/projectCard";

import { allProjects } from "contentlayer/generated";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { MDXProps } from "types";

const Projects = ({ allProjects }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <div className='flex min-h-[720px] flex-col px-5 md:flex-row md:items-center md:justify-center md:space-x-3'>
      {allProjects.map((project: MDXProps) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          thumbnailImg={project.thumbnailImg}
          slug={project.slug}
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
