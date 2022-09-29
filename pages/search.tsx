import React, { useEffect, useState } from "react";
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
  const onChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    setSearchStr(e.target.value);
    if (e.target.value.length < 2) {
      setIsValid(false);
      setFilteredData([]);
    } else setIsValid(true);
  };

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
      <div className='px-3'>
        <div>
          <label
            htmlFor='search'
            className='pt-5 text-3xl font-bold italic text-yellow-200'
          >
            SEARCH...
          </label>
          <span>go FILTER </span>
        </div>

        <input
          type='search'
          id='search'
          value={searchStr}
          onChange={onChangeHandler}
          className='mt-5 w-[95%] rounded-xl px-5 py-3 text-black focus:outline-none md:w-[70%]'
          placeholder='검색어를 입력해주세요.'
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {isFocus && !isValid && <p>두글자 이상 입력해주세요.</p>}
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
