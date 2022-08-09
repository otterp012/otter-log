import NavList from "./navList";
import { NAV_PATHS } from "constants/constants";

const NavLists: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <>
      <ul className='md:flex items-center justify-end space-x-3 hidden'>
        {NAV_PATHS.map(({ path, title }) => (
          <NavList query={path} title={title} key={path} />
        ))}
      </ul>
      {isOpen && (
        <div className='h-full bg-black fixed right-0 top-20 w-screen md:hidden'>
          <ul className='absolute text-white flex flex-col items-end right-5 space-y-3 mt-5 text-3xl md:hidden'>
            {NAV_PATHS.map(({ path, title }) => (
              <NavList
                query={path}
                title={title}
                key={path}
                onClick={() => console.log(1)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavLists;
