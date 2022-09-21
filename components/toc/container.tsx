type props = {
  children: React.ReactNode;
};

const TocContainer: React.FC<props> = ({ children }) => {
  return (
    <aside className='relative hidden xl:block'>
      <div className='sticky top-[200px] right-5 ml-10 w-[280px] border-l-2 border-gray-200'>
        <div className='py-2 pl-5'>{children}</div>
      </div>
    </aside>
  );
};

export default TocContainer;
