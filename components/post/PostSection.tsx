import PostHeader from "./PostHeader";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { Post as PostType } from "contentlayer/generated";

type PostSectionProps = {
  postData: PostType;
};

const PostSection: React.FC<PostSectionProps> = ({ postData }) => {
  const {
    title,
    publishedAtFormatted,
    thumbnailImg,
    body: { code },
    tags,
  } = postData;
  const MDXComponent = useMDXComponent(code);
  return (
    <section className='mt-5 w-full xl:min-w-[780px]'>
      <PostHeader
        title={title}
        publishedAtFormatted={publishedAtFormatted}
        thumbnailImg={thumbnailImg}
        tags={tags}
      />
      <div className='prose mx-auto mt-5 max-w-none prose-a:no-underline'>
        <MDXComponent />
      </div>
    </section>
  );
};

export default PostSection;
