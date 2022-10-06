import Link from "next/link";
import Image from "next/future/image";

import type { MDXProps } from "types";

const FeaturedCard: React.FC<MDXProps> = ({
  title,
  description,
  publishedAt,
  thumbnailImg,
  slug,
}) => {
  return (
    <section>
      <Link href={slug} passHref>
        <a>
          <Image
            src={thumbnailImg}
            alt={title}
            className='mx-auto h-[50vh] w-full border-b border-gray-700 object-scale-down hover:cursor-pointer md:h-[75vh] md:w-[80%]'
            width={1000}
            height={1000}
            loading='eager'
          />
        </a>
      </Link>
      <div className='mt-3 flex flex-col items-end px-5 md:items-center'>
        <div className='mb-2 text-right md:text-center'>
          <time className='text-sm font-bold text-gray-400'>{publishedAt}</time>
          <Link href={slug} passHref>
            <a>
              <h2 className='break-words text-4xl font-semibold hover:text-yellow-300'>
                {title}
              </h2>
            </a>
          </Link>
        </div>
        <p className='w-[60%] break-all text-right text-sm text-gray-400 line-clamp-2 md:text-center'>
          {description}
        </p>
      </div>
    </section>
  );
};
export default FeaturedCard;
