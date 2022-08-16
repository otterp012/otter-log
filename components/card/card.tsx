import Link from "next/link";
import { MDXProps } from "types";

const Card: React.FC<MDXProps> = ({
  title,
  publishedAt,
  description,
  thumbnailImg,
  slug,
}) => {
  return (
    <Link href={slug}>
      <section className='h-30 md:h-53 mt-5 flex w-full border-b pb-5 last:border-none md:px-5'>
        <div>
          <img
            src={thumbnailImg}
            alt='test'
            className='h-[180px] w-[180px] object-cover md:h-48 md:w-48'
          />
        </div>

        <div className='ml-5 min-h-full w-[65%] md:py-1'>
          <div className='mb-3 min-h-[50%]'>
            <time className='text-xs font-bold text-gray-400 md:text-sm'>
              {publishedAt}
            </time>
            <h3 className='break-all text-xl font-bold line-clamp-2 md:text-2xl'>
              {title}
            </h3>
          </div>
          <p className='w-[90%] break-words text-sm line-clamp-2 md:mt-8 md:text-lg'>
            {description}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default Card;
