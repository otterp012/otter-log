import { useState } from "react";

const useToggle = (initialState: boolean) => {
  const [state, setState] = useState(initialState);

  const onToggleHandler = () => {
    setState(!state);
  };

  return {
    state,
    onToggleHandler,
  };
};

export default useToggle;
