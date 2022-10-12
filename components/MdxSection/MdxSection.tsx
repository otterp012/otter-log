// component
import MdxHeader from "./MdxHeader";

// mdx
import type { Post as PostType } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

type props = {
  postData: PostType;
};

const MdxSection: React.FC<props> = ({ postData }) => {
  const {
    title,
    publishedAtFormatted,
    thumbnailImg,
    body: { code },
    tags,
  } = postData;

  const MDXComponent = useMDXComponent(code);
  return (
    <section className='mt-5 w-full overflow-x-hidden xl:min-w-[780px]'>
      <MdxHeader
        title={title}
        publishedAtFormatted={publishedAtFormatted}
        thumbnailImg={thumbnailImg}
        tags={tags}
      />
      <div className='prose mx-auto mt-5 max-w-none select-text prose-a:no-underline dark:prose-invert dark:prose-pre:bg-deepGray dark:prose-pre:text-black'>
        <MDXComponent />
      </div>
    </section>
  );
};

export default MdxSection;
