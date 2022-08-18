import Card from "./card";
import type { Post as PostType } from "contentlayer/generated";

type RecentCardsProps = {
  recentPosts: PostType[];
};

const RecentCards: React.FC<RecentCardsProps> = ({ recentPosts }) => {
  return (
    <div className='mx-auto mt-10 md:max-w-[70%]'>
      <h2 className='mb-8 text-center text-3xl font-bold italic md:mb-10'>
        RECENT POSTS
      </h2>

      {recentPosts.map((recentPost) => (
        <Card
          title={recentPost.title}
          description={recentPost.description}
          publishedAt={recentPost.publishedAtFormatted}
          thumbnailImg={recentPost.thumbnailImg}
          key={recentPost.title}
          slug={recentPost.path}
        />
      ))}
    </div>
  );
};

export default RecentCards;
