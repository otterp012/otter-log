import Link from "next/link";
import { MDXProps } from "types";
import Image from "next/image";
import Tags from "components/post/Tags";

const Card: React.FC<MDXProps> = ({
  title,
  publishedAt,
  description,
  thumbnailImg,
  slug,
  tags,
}) => {
  return (
    <section className='h-30 md:h-53 mt-5 flex w-full border-b border-gray-200 pb-5 last:border-none hover:cursor-pointer md:px-5'>
      <Link href={slug} passHref>
        <div className='flex w-full'>
          <div className='z-0 mx-auto w-28 translate-y-4 md:w-[240px] md:translate-y-0'>
            <Image
              src={thumbnailImg}
              alt='test'
              width={540}
              height={540}
              objectFit='cover'
              layout='responsive'
            />
          </div>
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
              <p className='w-[90%] text-sm text-gray-500 line-clamp-2 md:mt-8 '>
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
