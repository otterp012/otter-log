import Image from "next/future/image";

// component
import { CustomLink } from "components/CustomLink";
import { Tags } from "components/Tags";
import { MetaData } from "types/types";
export type Props = {
  title: string;
  description: string;
  publishedAt?: string;
  thumbnailImg: string | undefined;
  slug: string;
  tags: string[];
  lastMod: Date;
};

const Cards = ({ posts }: { posts: MetaData[] }) => {
  return (
    <ul className='flex flex-wrap gap-2'>
      {posts.map((post: MetaData) => (
        <Card
          title={post.title}
          description={post.description}
          publishedAt={post.date}
          thumbnailImg={post.cover}
          key={post.title}
          slug={post.slug}
          tags={post.tags}
          lastMod={post.last_mod}
        />
      ))}
    </ul>
  );
};

const Card: React.FC<Props> = ({
  title,
  publishedAt,
  description,
  thumbnailImg,
  slug,
  tags,
  lastMod,
}) => {
  return (
    <li className='mx-auto mb-5 h-96 w-[95%] list-none rounded-lg bg-light-card shadow-lg dark:bg-dark-card sm:w-[48%] lg:w-[32%]'>
      <Image
        src={thumbnailImg ?? ""}
        alt={title}
        width={1000}
        height={1000}
        className='h-[50%] rounded-t-lg object-cover'
        blurDataURL={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDPT/DwAD3gHy5v4ozQAAAABJRU5ErkJggg=="
        }
      />
      <div className='mt-4 flex flex-col items-center'>
        <time className='font-semi-bold text-xs' dateTime={lastMod.toString()}>
          {publishedAt}
        </time>
        <h2 className='mb-2 text-center text-xl font-bold'>{title}</h2>
        <p className='text-sm'>{description}</p>
        <div className='mt-2'>
          <Tags tags={tags} />
        </div>
        <CustomLink
          href={`post/${slug}`}
          className='mt-5 rounded-md bg-light-bg px-5 py-2 font-semibold shadow-2xl hover:bg-deepGray dark:bg-dark-bg hover:dark:bg-deepGray'
        >
          READ MORE
        </CustomLink>
      </div>
    </li>
  );
};

export default Cards;
export { Card };
