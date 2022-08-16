type BlogHeaderProps = {
  title: string;
  publishedAtFormatted: string;
  thumbnailImg: string;
};

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  publishedAtFormatted,
  thumbnailImg,
}) => {
  return (
    <header>
      <div className='md:ml-5'>
        <h2 className='text-4xl font-semibold md:text-5xl max-width-[70%]'>
          {title}
        </h2>
        <time className='font-bold text-xs text-gray-700 mt-2 inline-block'>
          {publishedAtFormatted}
        </time>
      </div>
      <div>
        <img src={thumbnailImg} alt='test' className='w-[85%] mx-auto mt-7' />
      </div>
    </header>
  );
};

export default BlogHeader;
