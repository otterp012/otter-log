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
        <a
          className='cursor-pointer px-3 py-5 italic hover:text-yellow-300 '
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          맨 위로가기 ⬆️⬆️
        </a>
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
