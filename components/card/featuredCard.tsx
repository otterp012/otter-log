import Link from "next/link";
import { MDXProps } from "types";

const FeaturedCard: React.FC<MDXProps> = ({
  title,
  description,
  publishedAt,
  thumbnailImg,
  slug,
}) => {
  return (
    <Link href={slug} passHref>
      <section className='hover:cursor-pointer'>
        <div className='h-full'>
          <img
            src={thumbnailImg}
            alt={title}
            className='mx-auto h-[420px] w-full object-cover md:h-[570px] md:w-[80%]'
          />
        </div>
        <div className='mt-3 flex flex-col items-end px-5 md:items-center'>
          <div className='mb-2 text-right md:text-center'>
            <time className='text-sm font-bold text-gray-400'>
              {publishedAt}
            </time>
            <h2 className='break-words text-4xl font-semibold'>{title}</h2>
          </div>
          <p className='w-[60%] break-all text-right text-sm text-gray-400 line-clamp-2 md:text-center'>
            {description}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default FeaturedCard;
