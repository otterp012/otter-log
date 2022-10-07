// components
import { PageLayout, ProjectCard } from "components";

// mdx
import { allProjects, Project as ProjectType } from "contentlayer/generated";

type Props = {
  allProjects: ProjectType[];
};

const Projects: React.FC<Props> = ({ allProjects }) => {
  return (
    <PageLayout
      title='PROJECTS...'
      description='프로젝트를 진행하면서 이런 생각을 했습니다. 🤡'
    >
      <div className='flex flex-col md:flex-row md:items-center md:justify-center md:space-x-5'>
        {allProjects.map(({ title, thumbnailImg, slug }: ProjectType) => (
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

export const getStaticProps = async () => {
  return {
    props: {
      allProjects,
    },
  };
};
