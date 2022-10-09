type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const PageLayout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className='mx-auto w-full px-3 md:w-[780px]'>
      <h2 className='pt-5 text-3xl font-bold italic'>{title}</h2>
      <p className='mt-2 text-sm font-semibold text-deepBlue dark:text-deepPink'>
        {description}
      </p>
      {children}
    </div>
  );
};

export default PageLayout;
