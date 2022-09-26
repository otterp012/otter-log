import React, { useCallback, useEffect, useState } from "react";

import NavList from "./navList";
import ToggleIcon from "./toggleIcon";

import { NAV_PATHS } from "constants/constants";

const Nav = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
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

  const onChangeHandler = useCallback(() => {
    setDropDownIsOpen(!dropDownIsOpen);
  }, [dropDownIsOpen]);

  const onClickHandler = useCallback(() => {
    setDropDownIsOpen(false);
  }, []);

  return (
    <nav className='flex space-x-2 md:space-x-3'>
      <ul className='hidden items-center justify-end space-x-3 md:flex'>
        {NAV_PATHS.map(({ path, title }) => (
          <NavList query={path} title={title} key={path} />
        ))}
      </ul>
      <button
        className='rounded-xl bg-black px-2 py-1 text-xl font-semibold text-white dark:bg-white dark:text-black'
        onClick={themeModeHandler}
      >
        {themeIsDark ? "LIGHT" : "DARK"}
      </button>
      <ToggleIcon isOpen={dropDownIsOpen} onChangeHandler={onChangeHandler} />

      {dropDownIsOpen && (
        <div className='fixed right-0 top-20 z-50 h-full w-full bg-white dark:bg-black md:hidden'>
          <ul className='absolute right-5 mt-5 flex flex-col items-end space-y-3 text-3xl text-black dark:text-white md:hidden'>
            {NAV_PATHS.map(({ path, title }) => (
              <NavList
                query={path}
                title={title}
                key={path}
                onClickHandler={onClickHandler}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

Nav.displayName = "Nav";
