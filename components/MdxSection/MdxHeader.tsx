import Image from "next/future/image";

// component
import { Tags } from "components";

// style
import { wordBreak } from "styles/extraStyle";

type props = {
  title: string;
  publishedAtFormatted: string;
  thumbnailImg?: string;
  tags: string[];
};

const MdxHeader: React.FC<props> = ({
  title,
  publishedAtFormatted,
  thumbnailImg,
  tags,
}) => {
  return (
    <header>
      <div className='space-y-2'>
        <h2
          className='w-[80%] text-4xl font-semibold md:text-5xl'
          id='top'
          style={wordBreak}
        >
          {title}
        </h2>
        <div className='flex items-end justify-between'>
          <Tags tags={tags} />
          <time className='mt-2 inline-block text-xs font-bold text-gray-700'>
            {publishedAtFormatted}
          </time>
        </div>
      </div>
      {thumbnailImg && (
        <div className='mx-auto mt-5 min-h-[200px] w-[70%] md:h-[420px]'>
          <Image
            src={thumbnailImg}
            alt={title}
            className='h-full w-full object-scale-down'
            width={1000}
            height={1000}
          />
        </div>
      )}
    </header>
  );
};

export default MdxHeader;
