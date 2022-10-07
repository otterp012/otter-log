import { useState, useEffect, useCallback } from "react";

const useDarkMode = () => {
  const [themeIsDark, setThemeIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setThemeIsDark(true);
    } else {
      setThemeIsDark(false);
    }
  }, []);

  const themeModeHandler = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark");
      setThemeIsDark(!themeIsDark);
    },
    [themeIsDark],
  );

  return {
    themeIsDark,
    themeModeHandler,
  };
};

export default useDarkMode;
