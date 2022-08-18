import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col md:max-w-[1080px] md:mx-auto'>
      <Header />
      <main className='mx-auto min-h-screen w-full pt-16 mt-2 px-2 md:mt-5'>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;