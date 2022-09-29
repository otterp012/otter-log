import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Card from "components/card/card";
import { allPosts } from "contentlayer/generated";
import type { Post as PostType } from "contentlayer/generated";
import useDebounce from "hooks/useDebounce";
const Search = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchStr, setSearchStr] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const debouncedValue = useDebounce(searchStr, 500);
  const [filteredData, setFilteredData] = useState<PostType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!inputRef.current) return;

    setSearchStr(e.target.value);
    inputRef.current.value = e.target.value;
    if (e.target.value.length < 2) {
      setIsValid(false);
      setFilteredData([]);
      inputRef.current.value = "";
    } else setIsValid(true);
  };

  useLayoutEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (debouncedValue.length < 2) return;
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
    <>
      <div className='w-full px-3'>
        <div className='flex items-end justify-between'>
          <label htmlFor='search' className='pt-5 text-3xl font-bold italic'>
            SEARCH...
          </label>
          <span className='font-bold text-blue-700 dark:text-yellow-200'>
            + FILTER
          </span>
        </div>

        <input
          type='search'
          id='search'
          value={searchStr}
          onChange={onChangeHandler}
          className='mt-5 w-[100%] rounded-xl border px-5 py-3 text-black focus:outline-none md:w-[70%]'
          placeholder='검색어를 입력해주세요.'
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          ref={inputRef}
        />
        {isFocus && !isValid && (
          <p className='mt-3 px-2 text-blue-600 dark:text-red-400'>
            두글자 이상 입력해주세요.
          </p>
        )}
        <div>
          {filteredData &&
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
    </>
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
