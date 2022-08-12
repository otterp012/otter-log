import React from "react";
import Header from "./header/header";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center md:max-w-[1080px] md:mx-auto'>
      <Header />
      <main className='flex flex-col min-h-screen pt-20 w-full md:max-w-[780px] mt-2 px-2 md:mt-10'>
        {children}
      </main>

      <footer className='bg-blue-300 mt-20'>
        <address>푸터 추가하기</address>
      </footer>
    </div>
  );
};

export default Layout;
