import type { GetStaticProps, InferGetStaticPropsType } from "next";

// mdx
import { allProjects, Project as ProjectType } from "contentlayer/generated";

// component
import { PageLayout, ProjectCard } from "components";

const Projects = ({ allProjects }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <PageLayout
      title='PROJECTS...'
      description='프로젝트하면서 이런 생각을 했습니다.'
    >
      <div className='flex flex-col flex-wrap sm:flex-row sm:justify-around'>
        {allProjects
          .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
          .map(({ title, thumbnailImg, slug }: ProjectType) => (
            <ProjectCard
              key={title}
              title={title}
              thumbnailImg={thumbnailImg}
              slug={slug}
            />
          ))}
      </div>
    </PageLayout>
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
