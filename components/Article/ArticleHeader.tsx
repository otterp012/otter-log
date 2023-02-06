import Image from "next/future/image";

import { Tags } from "components/Tags";

import type { MetaData } from "types/types";

export const ArticleHeader = (props: MetaData) => {
  const { title, cover, tags, last_edit, date, last_mod } = props;
  return (
    <header className='space-y-3 border-b border-b-gray pb-8 dark:border-b-deepGray'>
      <h2 className='break-keep mb-5 text-center text-4xl font-bold md:text-5xl'>
        {title}
      </h2>
      <Image
        src={cover}
        alt={title}
        className='mx-auto h-auto w-[90%] rounded-xl object-cover md:w-[640px]'
        width={1000}
        height={1000}
        priority={true}
      />
      <div className='space-y-2 py-3 pb-5 text-center text-deepGray'>
        <div>
          <Tags tags={tags} />
        </div>
        <time dateTime={last_mod.toString()} className='mr-2 inline text-xs'>
          {date}
        </time>
        <span className='text-xs'>by otter</span>
        <em className='block text-xs'>
          {last_edit}에 최종수정되었습니다. <br />
          잘못된 내용이 있으면 댓글을 달아주세요.
        </em>
      </div>
    </header>
  );
};
