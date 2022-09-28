import Link from "next/link";
import Image from "next/future/image";

import type { MDXProps } from "types";

import Tags from "components/tags";
import { wordBreak } from "../../styles/extraStyle";

const Card: React.FC<MDXProps> = ({
  title,
  publishedAt,
  description,
  thumbnailImg,
  slug,
  tags,
}) => {
  return (
    <section className='h-30 md:h-53 mt-5 flex w-full border-b border-gray-700 pb-5 last:border-none hover:cursor-pointer md:px-5'>
      <Link href={slug} passHref>
        <div className='flex w-full'>
          <Image
            src={thumbnailImg}
            alt={title}
            width={300}
            height={300}
            className='z-0 mx-auto h-[150px] w-[150px] object-cover md:h-[240px] md:w-[240px]'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDPT/DwAD3gHy5v4ozQAAAABJRU5ErkJggg=='
          />

          <div className='ml-5 flex min-h-full w-[65%] flex-col space-y-2 md:py-1'>
            <div className='mb-3 min-h-[60%] md:min-h-[30%]'>
              <time className='text-xs font-bold text-gray-400 md:text-sm'>
                {publishedAt}
              </time>
              <h3 className='text-md break-all font-bold line-clamp-2 md:text-2xl'>
                {title}
              </h3>
              <Tags tags={tags} />
            </div>
            <div>
              <p
                className='w-[90%] text-sm text-gray-500 line-clamp-2 md:mt-8'
                style={wordBreak}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
