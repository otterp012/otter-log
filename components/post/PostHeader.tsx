import Tags from "./Tags";

type PostHeaderProps = {
  title: string;
  publishedAtFormatted: string;
  thumbnailImg: string;
  tags: string[] | undefined;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  publishedAtFormatted,
  thumbnailImg,
  tags,
}) => {
  return (
    <header>
      <div className='space-y-2'>
        <h2 className='w-[80%] text-4xl font-semibold md:text-5xl' id='top'>
          {title}
        </h2>
        <div className='flex items-end justify-between'>
          <Tags tags={tags}></Tags>
          <time className='mt-2 inline-block text-xs font-bold text-gray-700'>
            {publishedAtFormatted}
          </time>
        </div>
      </div>
      <div className='mx-auto mt-5 h-[200px] w-[70%] md:h-[420px]'>
        <img
          src={thumbnailImg}
          alt={title}
          className='h-full w-full object-cover'
        />
      </div>
    </header>
  );
};

export default PostHeader;
