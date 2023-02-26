// hook
import { memo } from "react";
import { useDarkModeContext } from "store";
export const DarkModeButton = memo(() => {
  const { themeIsDark, themeModeHandler } = useDarkModeContext();

  const label = themeIsDark ? "현재 다크 모드" : "현재 라이트 모드";
  return (
    <button
      aria-label={label}
      className='rounded-xl bg-black px-2 py-1 text-xl font-semibold text-white dark:bg-white dark:text-black'
      onClick={themeModeHandler}
    >
      {themeIsDark ? "DARK" : "LIGHT"}
    </button>
  );
});

DarkModeButton.displayName = "DarkModeButton";
