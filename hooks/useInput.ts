import { useState, useRef, useLayoutEffect, useReducer } from "react";

const inputReducer = () => {
  return;
};

const UseInput = (inputValidator: (value: number) => boolean) => {
  const [searchValue, setSearchValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!inputRef.current) return;

    const currentValue = e.target.value;
    setSearchValue(currentValue);

    if (inputValidator(currentValue.length)) {
      setIsValid(true);
    } else setIsValid(false);
  };

  useLayoutEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onBlurHandler = () => setIsFocus(false);
  const onFocusHandler = () => setIsFocus(true);

  return {
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
    inputRef,
    isValid,
    isFocus,
    searchValue,
  };
};

export default UseInput;
