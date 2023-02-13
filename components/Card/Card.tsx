import { CustomLink } from "components/CustomLink";
import { Tags } from "components/Tags";
import { PostMetaData } from "types/types";
import { ImageWithFallback } from "components/ImageWithFallback";
import { getRevisedImageUrl } from "lib/utils";
import { VisuallyHidden } from "components/VisuallyHidden";

export const Cards = ({ posts }: { posts: PostMetaData[] }) => {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post: PostMetaData) => (
        <Card {...post} key={post.id} />
      ))}
    </ul>
  );
};

type CardProps = Omit<PostMetaData, "lastEditFormattedDate">;

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
    <li className='mx-auto h-[400px] w-[95%] list-none rounded-lg bg-light-card shadow-lg dark:bg-dark-card sm:w-auto'>
      <ImageWithFallback
        src={getRevisedImageUrl({ src: thumbnailImg })}
        fallbackSrc={getRevisedImageUrl({ src: thumbnailImg, format: "webp" })}
        alt={title}
        width={600}
        height={400}
        className='h-[50%] rounded-t-lg object-cover'
        priority={true}
      />
      <div className='mt-4 flex flex-col items-center'>
        <time
          className='font-semi-bold text-xs'
          dateTime={lastEditDate.toString()}
        >
          {formattedDate}
        </time>
        <h2 className='mb-2 text-center text-xl font-bold'>{title}</h2>
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
