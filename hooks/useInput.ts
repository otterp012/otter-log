import { useState, useRef, useLayoutEffect } from "react";

const UseInput = (inputValidator: (value: string) => boolean) => {
  const [searchStr, setSearchStr] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!inputRef.current) return;

    const currentValue = e.target.value;
    setSearchStr(currentValue);

    if (inputValidator(currentValue)) {
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
    searchStr,
  };
};

export default UseInput;
