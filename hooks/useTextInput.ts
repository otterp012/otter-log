import { useState } from "react";

type inputValidatorType = (value: string) => boolean;

const UseTextInput = (inputValidator: inputValidatorType) => {
  const [searchValue, setSearchValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setSearchValue(currentValue);

    if (inputValidator(currentValue)) {
      setIsValid(true);
    } else setIsValid(false);
  };

  return {
    onChangeHandler,
    isValid,
    searchValue,
  };
};

export default UseTextInput;
