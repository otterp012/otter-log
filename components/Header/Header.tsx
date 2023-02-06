import { memo } from "react";

// component
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { DarkModeButton } from "./DarkModeButton";

export const Header = memo(() => {
  return (
    <header className='fixed top-0 z-10 flex h-20 w-[100vw] items-center justify-between bg-light-bg px-3 dark:bg-dark-bg md:max-w-[768px] lg:max-w-[1024px]'>
      <Logo />
      <div className='flex items-center space-x-5'>
        <Nav />
        <DarkModeButton />
      </div>
    </header>
  );
});

Header.displayName = "Header";
