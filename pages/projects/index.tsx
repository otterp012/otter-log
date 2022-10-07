import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { ProjectCard } from "components";

import { allProjects, Project as ProjectType } from "contentlayer/generated";

const Projects = ({ allProjects }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <div className='flex min-h-[720px] flex-col px-5 md:flex-row md:items-center md:justify-center md:space-x-3'>
      {allProjects.map(({ title, thumbnailImg, slug }: ProjectType) => (
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
