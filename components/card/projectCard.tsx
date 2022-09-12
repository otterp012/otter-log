import Link from "next/link";

type props = {
  title: string;
  thumbnailImg: string;
  slug: string;
};

const ProjectCard: React.FC<props> = ({ title, thumbnailImg, slug }) => {
  return (
    <section className='mt-10 flex min-h-[420px] flex-col rounded-lg bg-gray-300 shadow-2xl hover:scale-[1.03] hover:bg-gray-500 hover:ease-in dark:border-black'>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className='w-full'>
            <img
              src={thumbnailImg}
              alt={title}
              className='h-[350px] w-full rounded-t-lg object-cover md:w-[350px]'
            />
          </div>
          <span className='flex flex-col px-5 py-5 text-center text-lg font-bold italic text-black'>
            {title}
          </span>
        </a>
      </Link>
    </section>
  );
};

export default ProjectCard;
