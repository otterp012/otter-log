import { memo } from "react";

// component
import { Logo } from "components/Logo";
import { Nav } from "components/Nav";

const Header = () => {
  return (
    <header className='fixed z-50 flex h-20 w-[100vw] items-center justify-between bg-white px-5 dark:bg-black md:max-w-[1080px]'>
      <Logo />
      <Nav />
    </header>
  );
};

export default memo(Header);

Header.displayName = "Header";
