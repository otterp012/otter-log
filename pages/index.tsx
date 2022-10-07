import { Fragment } from "react";
import type { NextPage } from "next";

// Mdx
import { allPosts, Post as PostType } from "contentlayer/generated";

// components
import { Card } from "components";

type Props = {
  featuredPost: PostType;
  recentPosts: PostType[];
};

const Home: NextPage<Props> = ({ featuredPost, recentPosts }) => {
  return (
    <Fragment>
      <Card
        title={featuredPost.title}
        description={featuredPost.description}
        publishedAt={featuredPost.publishedAtFormatted}
        thumbnailImg={featuredPost.thumbnailImg}
        slug={featuredPost.path}
        cardType='featuredCard'
      />
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
    </Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  const featuredPost = allPosts.find((post) => post.isFeatured);
  const recentPosts = allPosts
    .filter((post) => !post.isFeatured)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    .slice(0, 3);

  return {
    props: {
      featuredPost,
      recentPosts,
    },
  };
};
