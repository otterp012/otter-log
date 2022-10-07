import { useEffect, useState, useCallback } from "react";

const DarkModeButton = () => {
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

  // todo UseDarkMode

  return (
    <button
      className='rounded-xl bg-black px-2 py-1 text-xl font-semibold text-white dark:bg-white dark:text-black'
      onClick={themeModeHandler}
    >
      {themeIsDark ? "LIGHT" : "DARK"}
    </button>
  );
};

export default DarkModeButton;
