import Link from "next/link";
import Nav from "./nav";

const Header = () => {
  return (
    <header className='w-full md:max-w-[1080px] flex items-center justify-between h-20 px-5 fixed'>
      <h1>
        <Link href='/'>
          <a className='text-3xl italic font-extrabold'>OTTER-LOG</a>
        </Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
