// hook
import { useDarkMode } from "hooks";

const DarkModeButton = () => {
  const { themeIsDark, themeModeHandler } = useDarkMode();

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
