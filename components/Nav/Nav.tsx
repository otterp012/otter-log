import { useCallback, useState } from "react";

// components
import NavList from "./NavList";
import { DarkModeButton, ToggleIcon } from "components";

// constants
import { NAV_PATHS } from "../../constants/constants";

const Nav = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

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
      <DarkModeButton />
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
