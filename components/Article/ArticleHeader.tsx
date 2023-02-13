import Image from "next/future/image";

import { Tags } from "components/Tags";

import type { MetaData } from "types/types";

type OmitProps = "id" | "description" | "slug";
type ArticleHeaderProps = Omit<MetaData, OmitProps>;

export const ArticleHeader = (props: ArticleHeaderProps) => {
  const {
    title,
    thumbnailImg,
    tags,
    formattedDate,
    lastEditDate,
    lastEditFormattedDate,
    reference,
  } = props;
  return (
    <header className='space-y-3 border-b border-b-gray pb-8 dark:border-b-deepGray'>
      <h2 className='mb-5 text-center text-4xl font-bold md:text-5xl'>
        {title}
      </h2>
      {thumbnailImg && (
        <Image
          src={thumbnailImg}
          alt={title}
          className='mx-auto h-auto w-[90%] rounded-xl object-cover md:w-[640px]'
          width={1000}
          height={1000}
          priority={true}
        />
      )}

      <div className='space-y-2 py-3 pb-5 text-center'>
        {tags && (
          <div>
            <Tags tags={tags} />
          </div>
        )}
        {reference && (
          <span className='block font-semibold italic'>{reference}</span>
        )}
        <time
          dateTime={lastEditDate.toString()}
          className='mr-2 inline text-xs'
        >
          {formattedDate}
        </time>
        <span className='text-xs'>by otter</span>
        <span className='block text-xs'>
          {lastEditFormattedDate}에 최종수정되었습니다. <br />
          잘못된 내용이 있으면 댓글을 달아주세요.
        </span>
      </div>
    </header>
  );
};
