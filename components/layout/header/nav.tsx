import React, { useEffect, useState } from "react";
import NavList from "./navList";
import { NAV_PATHS } from "constants/constants";

const Nav = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const [themeIsDark, setThemeIsDark] = useState(false);

  const themeModeHandle = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    setThemeIsDark(!themeIsDark);
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setThemeIsDark(true);
    } else {
      setThemeIsDark(false);
    }
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
        onClick={themeModeHandle}
      >
        {themeIsDark ? "LIGHT" : "DARK"}
      </button>

      <div>
        <label className='bg-transparent md:hidden'>
          <input
            type='checkbox'
            onChange={() => toggleIsOpen(!isOpen)}
            className='hidden'
          />
          {!isOpen ? (
            <svg
              className='dark:fill-white'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>
          ) : (
            <svg
              className='dark:fill-white'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
            </svg>
          )}
        </label>
      </div>
      {isOpen && (
        <div className='fixed right-0 top-20 z-50 h-full w-full bg-white dark:bg-black md:hidden'>
          <ul className='absolute right-5 mt-5 flex flex-col items-end space-y-3 text-3xl text-black dark:text-white md:hidden'>
            {NAV_PATHS.map(({ path, title }) => (
              <NavList query={path} title={title} key={path} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
