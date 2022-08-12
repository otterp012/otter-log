import Link from "next/link";
import { MDXProps } from "types";

const Card: React.FC<MDXProps> = ({
  title,
  publishedAt,
  description,
  thumnailImg,
  slug,
}) => {
  return (
    <Link href={slug}>
      <div className='w-full h-30 flex border-b mt-5 pb-5 md:h-53 last:border-none'>
        <div>
          <img
            src={thumnailImg}
            alt='test'
            className='object-cover w-[120px] h-[120px] md:w-48 md:h-48'
          />
        </div>

        <div className='min-h-full w-[65%] ml-5 md:py-1'>
          <div className='min-h-[50%] mb-3'>
            <time className='text-xs font-bold text-gray-400 md:text-sm'>
              {publishedAt}
            </time>
            <h3 className='text-md font-bold break-all line-clamp-2 md:text-2xl'>
              {title}
            </h3>
          </div>
          <p className='break-words line-clamp-2 text-sm md:text-lg md:mt-8 w-[90%]'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
