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
    <PageLayout title='POST...'>
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
      <div data-testid='test' ref={observedTarget} />
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
