import { useRef } from "react";

// Mdx
import { allPosts, Post as PostType } from "contentlayer/generated";

// hooks
import useSavedInfiniteScroll from "hooks/useSavedInfiniteScroll";

// components
import { PageLayout, Card, ToTopButton } from "components";

const Posts: React.FC<{ data: PostType[] }> = ({ data }) => {
  const observedTarget = useRef<HTMLDivElement>(null);
  const { len: postLength } = useSavedInfiniteScroll(
    3,
    data.length,
    3,
    observedTarget,
    "visibleCardsLength",
  );

  const displayedPosts = data.slice(0, postLength);

  return (
    <PageLayout
      title='POST...'
      description='궁금한 것을 공부합니다. 그리고 기록합니다. 👨‍💻'
    >
      {displayedPosts.map(
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
      <ToTopButton />
      <div id='lastItem' ref={observedTarget} />
    </PageLayout>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const allBlogsByDate = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );
  return {
    props: {
      data: allBlogsByDate,
    },
  };
};
