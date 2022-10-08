import useDebounce from "hooks/useDebounce";
import UseInput from "hooks/useInput";
import React, { useEffect } from "react";

import { InputWithRef } from "components/Input";

type Props = {
  onSaveSearchData: (searchData: string) => void;
};

const SearchInput: React.FC<Props> = ({ onSaveSearchData }) => {
  const inputValidator = (value: number) => {
    return value > 1;
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

  useEffect(() => {
    if (isValid) {
      onSaveSearchData(searchValue);
    } else {
      onSaveSearchData("");
    }
  }, [debouncedValue]);

  return (
    <>
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
    </>
  );
};

export default SearchInput;
