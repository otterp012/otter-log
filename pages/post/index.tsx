import { Fragment, useRef } from "react";
import Link from "next/link";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Post as PostType } from "contentlayer/generated";

import { allPosts } from "contentlayer/generated";
import useSavedInfiniteScroll from "../../hooks/useSavedInfiniteScroll";

import Card from "components/card/card";

const Posts: React.FC<{ data: PostType[] }> = ({ data }) => {
  const observedTarget = useRef<HTMLParagraphElement>(null);
  const { len: postLength } = useSavedInfiniteScroll(
    3,
    data.length,
    3,
    observedTarget,
    "visibleCardsLength",
  );

  const displayedPosts = data.slice(0, postLength);

  return (
    <Fragment>
      <div className='px-3'>
        <h2 className='pt-5 text-3xl font-bold italic'>POSTS...</h2>
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
            />
          ),
        )}
      </div>
      <div className='mt-20 text-center' ref={observedTarget}>
        <Link href='#top' replace={true}>
          <a className='px-3 py-5 italic'>맨 위로가기 ⬆️⬆️</a>
        </Link>
      </div>
    </Fragment>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsByDate = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );
  return {
    props: {
      data: allBlogsByDate,
    },
  };
};
