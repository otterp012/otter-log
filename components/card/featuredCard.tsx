import Link from "next/link";
import { MDXProps } from "types";

const FeaturedCard = ({
  title,
  description,
  publishedAt,
  thumnailImg,
  slug,
}) => {
  return (
    <Link href={slug}>
      <section className='flex flex-col w-full hover:cursor-pointer'>
        <div className='h-full'>
          <img
            src={thumnailImg}
            alt={title}
            className='object-cover w-full h-[420px] md:h-[560px]'
          />
        </div>
        <div className='px-5 flex flex-col items-end mt-3 md:items-center'>
          <div className='text-right md:text-center mb-2'>
            <time className='text-sm text-gray-400 font-bold'>
              {publishedAt}
            </time>
            <h2 className='text-4xl break-words font-semibold'>{title}</h2>
          </div>
          <p className='break-all text-sm md:text-center w-[60%] text-right text-gray-400 line-clamp-2'>
            {description}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default FeaturedCard;
