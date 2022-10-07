import Image from "next/future/image";

// components
import { CustomLink } from "components";

type props = {
  title: string;
  thumbnailImg: string;
  slug: string;
};

const ProjectCard: React.FC<props> = ({ title, thumbnailImg, slug }) => {
  const path = `/projects/${slug}`;
  return (
    <CustomLink href={path}>
      <section className='mt-10 flex min-h-[420px] flex-col rounded-lg bg-gray-300 shadow-2xl hover:scale-[1.03] hover:bg-gray-500 hover:ease-in dark:border-black'>
        <div className='w-full'>
          <Image
            src={thumbnailImg}
            alt={title}
            className='h-[350px] w-full rounded-t-lg object-cover md:w-[350px]'
            width={1000}
            height={1000}
          />
        </div>
        <span className='flex flex-col px-5 py-5 text-center text-lg font-bold italic text-black'>
          {title}
        </span>
      </section>
    </CustomLink>
  );
};

export default ProjectCard;
