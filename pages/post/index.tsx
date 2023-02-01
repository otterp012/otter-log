import type { InferGetStaticPropsType } from "next/types";
import { useRouter } from "next/router";

import { Cards, FilterOptions } from "components";
import { getAllPublished } from "lib/notion";

import { ABLE_FILTER_OPTIONS } from "constants/constants";
import type { MetaData } from "types/types";

export default function Post({
  posts,
  filterOptions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { filterBy } = router.query;
  const isFiltered = filterBy !== undefined;
  const UNABLE_FILTER_OPTIONS = filterOptions.filter(
    (item) => !ABLE_FILTER_OPTIONS.includes(item),
  );
  const isABELfilter = ABLE_FILTER_OPTIONS.includes(filterBy as string);
  const filteredPost = isFiltered
    ? isABELfilter
      ? posts.filter((post: MetaData) => post.tags.includes(filterBy as string))
      : posts.filter((post: MetaData) =>
          post.tags.some((tag) => UNABLE_FILTER_OPTIONS.includes(tag)),
        )
    : posts;

  return (
    <>
      <FilterOptions />
      <Cards posts={filteredPost} />
    </>
  );
}

export const getStaticProps = async () => {
  const DATA_BASE_ID = process.env.DATABASE_ID as string;
  const data = await getAllPublished(DATA_BASE_ID);
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
