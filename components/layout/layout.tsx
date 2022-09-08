import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-[450px] flex-col sm:w-full md:mx-auto md:max-w-[1080px]'>
      <Header />
      <main className='mx-auto mt-2 min-h-screen w-full px-2 pt-16 md:mt-5'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
