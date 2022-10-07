import { Fragment } from "react";
import type { NextPage } from "next";

// Mdx
import { allPosts, Post as PostType } from "contentlayer/generated";
// components
// import { Card, RecentPosts } from "components";

type Props = {
  featuredPost: PostType;
  recentPosts: PostType[];
};

const Home: NextPage<Props> = ({ featuredPost, recentPosts }) => {
  return <Fragment>{/* <RecentPosts recentPosts={recentPosts} /> */}</Fragment>;
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
