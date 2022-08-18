import { useState } from "react";
import NavLists from "./navLists";

const Nav = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <nav className='flex space-x-2 md:space-x-3'>
      {/* <div className='flex space-x-2 md:space-x-3'> */}
      <NavLists isOpen={isOpen} />
      <button className='rounded-xl bg-black px-2 py-1 text-xl font-semibold text-white'>
        DARK
      </button>

      <label className='swap-rotate btn swap btn-circle bg-transparent md:hidden'>
        <input type='checkbox' />
        <svg
          className='swap-off fill-slate-500'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
        </svg>
        <svg
          className='swap-on fill-slate-500'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
        </svg>
      </label>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
