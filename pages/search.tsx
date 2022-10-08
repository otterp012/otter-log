import React, { useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Post as PostType } from "contentlayer/generated";

import { Card, PageLayout, SearchInput } from "components";

import { allPosts } from "contentlayer/generated";

const Search = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [value, setValue] = useState("");
  const onSaveSearchData = (searchData: string) => {
    setValue(searchData);
  };

  return (
    <PageLayout
      title='SEARCH...'
      description='검색 알고리즘이 따로 없어, 한단어만 부탁합니다. 😅'
    >
      <SearchInput onSaveSearchData={onSaveSearchData} />
      {data &&
        value &&
        data
          .filter(
            (singleData: PostType) =>
              singleData.body.raw.includes(value) ||
              singleData.body.raw.includes(value.toLowerCase()) ||
              singleData.body.raw.includes(value.toLowerCase()),
          )
          .sort(
            (a: PostType, b: PostType) =>
              Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
          )
          .map(
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
    </PageLayout>
  );
};

export default Search;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: allPosts,
    },
  };
};
