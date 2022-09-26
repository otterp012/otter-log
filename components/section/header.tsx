import Tags from "../tags";
import { wordBreak } from "../../styles/extraStyle";
import MainImage from "./mainImage";

type props = {
  title: string;
  publishedAtFormatted: string;
  thumbnailImg?: string;
  tags: string[];
};

const PostHeader: React.FC<props> = ({
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
          <Tags tags={tags}></Tags>
          <time className='mt-2 inline-block text-xs font-bold text-gray-700'>
            {publishedAtFormatted}
          </time>
        </div>
      </div>
      {thumbnailImg && <MainImage thumbnailImg={thumbnailImg} title={title} />}
    </header>
  );
};

export default PostHeader;
