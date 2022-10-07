type Props = {
  children: React.ReactNode;
  title: string;
};

const PageLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className='px-3'>
      <h2 className='pt-5 text-3xl font-bold italic'>{title}</h2>
      {children}
    </div>
  );
};

export default PageLayout;
