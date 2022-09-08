import Link from "next/link";
import Nav from "./nav";

const Header = () => {
  return (
    <header className='fixed flex h-20 w-full items-center justify-between bg-white px-5 dark:bg-black md:max-w-[1080px]'>
      <h1>
        <Link href='/'>
          <a className='text-3xl font-extrabold italic'>OTTER-LOG</a>
        </Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
