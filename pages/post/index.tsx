import { useRouter } from "next/router";

import { Cards, FilterOptions, SEO } from "components";

import { getAllPublished } from "lib/notion";
import { ABLE_FILTER_OPTIONS } from "constants/constants";
import type { PostMetaData } from "types/types";

type PostPageProps = {
  posts: PostMetaData[];
  filterOptions: string[];
};

const PostPage = ({ posts, filterOptions }: PostPageProps) => {
  const router = useRouter();
  const { filterBy } = router.query;
  const isFiltered = filterBy !== undefined;
  const UNABLE_FILTER_OPTIONS = filterOptions.filter(
    (item) => !ABLE_FILTER_OPTIONS.includes(item),
  );
  const isABELfilter = ABLE_FILTER_OPTIONS.includes(filterBy as string);
  const filteredPost = isFiltered
    ? isABELfilter
      ? posts.filter((post: PostMetaData) =>
          post.tags.includes(filterBy as string),
        )
      : posts.filter((post: PostMetaData) =>
          post.tags.some((tag) => UNABLE_FILTER_OPTIONS.includes(tag)),
        )
    : posts;
  // todo 이부분 정리하기

  return (
    <>
      <SEO
        title='Recent Posts'
        description={posts.map((post) => post.title).join(" ")}
        url='/post'
      />
      <FilterOptions />
      <Cards posts={filteredPost} />
    </>
  );
};

export default PostPage;

export const getStaticProps = async () => {
  const data = await getAllPublished("post");
  const filterOptionSet = new Set();
  data.forEach((item: { tags: string[] }) => {
    item.tags.forEach((tag) => filterOptionSet.add(tag));
  });

  const filterOptions = Array.from(filterOptionSet) as string[];

  return {
    props: {
      posts: data,
      filterOptions,
    },
    revalidate: 60,
  };
};
