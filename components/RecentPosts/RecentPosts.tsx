// component
import { Card } from "components";

// type
import type { Post as PostType } from "contentlayer/generated";

type Props = {
  recentPosts: PostType[];
};

const RecentPosts: React.FC<Props> = ({ recentPosts }) => {
  return (
    <div className='mx-auto mt-10 md:max-w-[70%]'>
      <h2 className='mb-8 text-center text-3xl font-bold italic md:mb-10'>
        RECENT POSTS
      </h2>
      {recentPosts.map(
        ({
          title,
          description,
          publishedAtFormatted,
          thumbnailImg,
          path,
          tags,
        }: PostType) => (
          <Card
            title={title}
            description={description}
            publishedAt={publishedAtFormatted}
            thumbnailImg={thumbnailImg}
            key={title}
            slug={path}
            tags={tags}
            cardType='verticalCard'
          />
        ),
      )}
    </div>
  );
};

export default RecentPosts;
