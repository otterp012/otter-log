import React from "react";
import Header from "./header/header";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-blue-500 items-center md:max-w-[1080px] md:bg-slate-500 md:mx-auto'>
      <Header />
      <main className='flex flex-col pt-[100px] w-full px-5'>
        <div>12312133123123</div>
      </main>
    </div>
  );
};

export default Layout;
