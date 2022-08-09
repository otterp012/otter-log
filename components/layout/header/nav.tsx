import { useState } from "react";
import NavLists from "./navLists";

const Nav = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <nav className='flex space-x-2 md:space-x-3'>
      {/* <div className='flex space-x-2 md:space-x-3'> */}
      <NavLists isOpen={isOpen} />
      <button className='text-xl font-semibold'>DARK</button>
      <button className='md:hidden' onClick={() => toggleIsOpen(!isOpen)}>
        {isOpen ? "가위표" : "햄버거"}
      </button>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
