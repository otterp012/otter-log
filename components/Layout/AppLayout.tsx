// components
import { Header, Footer } from "components";

type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col md:mx-auto md:max-w-[1080px]'>
      <Header />
      <main className='mx-auto mt-2 min-h-screen w-full px-2 pt-16 md:mt-5'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
