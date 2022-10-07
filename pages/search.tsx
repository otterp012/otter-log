import React, { useEffect, useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Post as PostType } from "contentlayer/generated";

import Card from "components/Card/Card";

import { allPosts } from "contentlayer/generated";

import useDebounce from "hooks/useDebounce";
import UseInput from "hooks/useInput";
import { InputWithRef, PageLayout } from "components";
const Search = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const inputValidator = (value: number) => {
    return value > 2;
  };

  const {
    searchValue,
    isValid,
    inputRef,
    isFocus,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = UseInput(inputValidator);

  const debouncedValue = useDebounce(searchValue, 500);
  const [filteredData, setFilteredData] = useState<PostType[]>([]);

  useEffect(() => {
    const filtered = data
      .filter(
        (singleData: PostType) =>
          singleData.body.raw.includes(debouncedValue) ||
          singleData.body.raw.includes(debouncedValue.toLowerCase()) ||
          singleData.body.raw.includes(debouncedValue.toLowerCase()),
      )
      .sort(
        (a: PostType, b: PostType) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
      );

    setFilteredData(filtered);
  }, [debouncedValue, data]);

  return (
    <PageLayout
      title='SEARCH...'
      description='검색 알고리즘이 따로 없어, 한단어만 부탁합니다. 😅'
    >
      <InputWithRef
        style='mt-5 w-[100%] rounded-xl border px-5 py-3 text-black focus:outline-none md:w-[70%]'
        label='search'
        inputInfo={{
          type: "search",
          value: searchValue,
          onChange: onChangeHandler,
          onFocus: onFocusHandler,
          onBlur: onBlurHandler,
          placeholder: "검색어를 입력해주세요.",
        }}
        ref={inputRef}
      />

      {isFocus && !isValid && (
        <p className='mt-3 px-2 text-black dark:text-white'>
          두글자 이상 입력해주세요.
        </p>
      )}
      {filteredData &&
        isValid &&
        filteredData.map(
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
