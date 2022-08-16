type PostHeaderProps = {
  title: string;
  publishedAtFormatted: string;
  thumbnailImg: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  publishedAtFormatted,
  thumbnailImg,
}) => {
  return (
    <header>
      <div className='space-y-2'>
        <h2 className='w-[80%] text-4xl font-semibold md:text-5xl' id='top'>
          {title}
        </h2>
        <div className='flex items-end justify-between'>
          <div className='xl:mt-2'>
            <span className='mr-3 text-sm font-semibold italic xl:mr-0 xl:rounded-xl xl:px-3 xl:py-2 xl:hover:cursor-pointer xl:hover:bg-slate-400'>
              #REACT
            </span>
            <span className='mr-3 text-sm font-semibold italic xl:mr-0 xl:rounded-xl xl:px-3 xl:py-2 xl:hover:cursor-pointer xl:hover:bg-slate-400'>
              #NEXT
            </span>
          </div>
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
