import { useState, useRef, useEffect } from "react";

const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onBlurHandler = () => setIsFocus(false);
  const onFocusHandler = () => setIsFocus(true);

  return {
    onFocusHandler,
    onBlurHandler,
    inputRef,
    isFocus,
  };
};

export default useFocus;
