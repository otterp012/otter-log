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
    // <Link href={slug}>
    <section className='h-30 md:h-53 mt-5 flex w-full border-b pb-5 last:border-none hover:cursor-pointer md:px-5'>
      <Link href={slug}>
        <div className='flex w-full'>
          <div>
            <img
              src={thumbnailImg}
              alt='test'
              className='h-[180px] w-[180px] object-cover md:h-48 md:w-48'
            />
          </div>

          <div className='ml-5 flex min-h-full w-[65%] flex-col space-y-2 md:py-1'>
            <div className='mb-3 min-h-[60%] md:min-h-[30%]'>
              <time className='text-xs font-bold text-gray-400 md:text-sm'>
                {publishedAt}
              </time>
              <h3 className='break-all text-xl font-bold line-clamp-2 md:text-2xl'>
                {title}
              </h3>
              <div className='mt-3'>
                <span className='text-md mr-1 rounded-lg py-2 px-3 font-semibold italic hover:cursor-pointer hover:bg-slate-500'>
                  #react
                </span>
                <span className='text-md mr-1 rounded-lg py-2 px-3 font-semibold italic hover:cursor-pointer hover:bg-slate-500'>
                  #next
                </span>
              </div>
            </div>
            <div>
              <p className='w-[90%] text-sm text-gray-500 line-clamp-2 md:mt-8 '>
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
    // </Link>
  );
};

export default Card;
