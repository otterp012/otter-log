import { CustomLink } from "components/CustomLink";
import { Tags } from "components/Tags";
import { PostMetaData } from "types/types";
import { VisuallyHidden } from "components/VisuallyHidden";
import Image from "next/future/image";

export const Cards = ({ posts }: { posts: CardProps[] }) => {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post: CardProps) => (
        <Card {...post} key={post.id} />
      ))}
    </ul>
  );
};

export type CardProps = Omit<PostMetaData, "lastEditFormattedDate" | "blurImg">;

export const Card = (props: CardProps) => {
  const {
    title,
    thumbnailImg,
    tags,
    formattedDate,
    lastEditDate,
    description,
    slug,
  } = props;

  return (
    <li className='mx-auto h-[400px] w-[300px] list-none rounded-lg bg-light-card shadow-lg dark:bg-dark-card'>
      <div className='relative h-[50%]'>
        <Image
          src={thumbnailImg}
          alt={title}
          fill
          sizes='(max-width: 450px) 100vw,
          (max-width: 1080px) 50vw,
            33vw'
          className='rounded-t-lg object-cover'
          priority={true}
        />
      </div>
      <div className='mt-4 flex flex-col items-center'>
        <time
          className='font-semi-bold text-xs'
          dateTime={lastEditDate.toString()}
        >
          {formattedDate}
        </time>
        <h2 className='text-md mb-2 text-center font-bold sm:text-lg'>
          {title}
        </h2>
        <p className='h-10 w-[80%] text-center text-sm line-clamp-2'>
          {description}
        </p>
        <div className='mt-2'>
          <Tags tags={tags} />
        </div>
        <CustomLink
          href={`post/${slug}`}
          className='mt-2 rounded-md bg-light-bg px-5 py-2 font-semibold shadow-2xl hover:bg-deepGray dark:bg-dark-bg hover:dark:bg-deepGray'
          title={title}
        >
          READ MORE
          <VisuallyHidden>{title}</VisuallyHidden>
        </CustomLink>
      </div>
    </li>
  );
};
