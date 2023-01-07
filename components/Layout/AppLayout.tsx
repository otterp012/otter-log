// component
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto min-h-screen md:max-w-[768px] lg:max-w-[1024px]'>
      <Header />
      <main className='px-5 pt-20'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
