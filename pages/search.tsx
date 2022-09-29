import React, { useEffect, useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Post as PostType } from "contentlayer/generated";

import Card from "components/card/card";

import { allPosts } from "contentlayer/generated";

import useDebounce from "hooks/useDebounce";
import UseInput from "hooks/useInput";
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
  const [isFilterOn, SetIsFilterOn] = useState(false);
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
    <div className='w-full px-3'>
      <div className='flex items-end justify-between'>
        <label htmlFor='search' className='pt-5 text-3xl font-bold italic'>
          SEARCH...
        </label>
        <span
          className='font-bold text-blue-700 dark:text-yellow-200'
          onClick={() => SetIsFilterOn(!isFilterOn)}
        >
          + FILTER
        </span>
      </div>
      <input
        type='search'
        id='search'
        value={searchValue}
        onChange={onChangeHandler}
        className='mt-5 w-[100%] rounded-xl border px-5 py-3 text-black focus:outline-none md:w-[70%]'
        placeholder='검색어를 입력해주세요.'
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        ref={inputRef}
      />
      {isFocus && !isValid && (
        <p className='mt-3 px-2 text-blue-600 dark:text-red-400'>
          두글자 이상 입력해주세요.
        </p>
      )}
      <div>
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
              />
            ),
          )}
      </div>
    </div>
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
