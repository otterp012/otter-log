// component
import NavList from "./NavList";
import { DarkModeButton } from "components/DarkModeButton";
import { ToggleIcon } from "components/Icons";

// constant
import { NAV_PATHS } from "../../constants/constants";

// hook
import useToggle from "hooks/useToggle";

const Nav = () => {
  const { state: dropDownIsOpen, onToggleHandler: dropDownToggleHandler } =
    useToggle(false);

  return (
    <nav className='flex space-x-2 md:space-x-3'>
      <ul className='hidden items-center justify-end space-x-3 md:flex'>
        {NAV_PATHS.map(({ path, title }) => (
          <NavList query={path} title={title} key={path} />
        ))}
      </ul>
      <DarkModeButton />
      <ToggleIcon
        isOpen={dropDownIsOpen}
        onChangeHandler={dropDownToggleHandler}
      />

      {dropDownIsOpen && (
        <div className='fixed right-0 top-20 z-50 h-full w-full bg-white dark:bg-black md:hidden'>
          <ul className='absolute right-5 mt-5 flex flex-col items-end space-y-3 text-3xl text-black dark:text-white md:hidden'>
            {NAV_PATHS.map(({ path, title }) => (
              <NavList
                query={path}
                title={title}
                key={path}
                onClickHandler={dropDownToggleHandler}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
