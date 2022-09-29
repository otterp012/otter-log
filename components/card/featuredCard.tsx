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
    <Link href={slug} passHref>
      <section className='hover:cursor-pointer'>
        <Image
          src={thumbnailImg}
          alt={title}
          className='mx-auto h-[50vh] w-full border-b border-gray-700 object-scale-down md:h-[75vh] md:w-[80%]'
          width={1000}
          height={1000}
          loading='eager'
          // placeholder='blur'
          // blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDPT/DwAD3gHy5v4ozQAAAABJRU5ErkJggg=='
        />

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
