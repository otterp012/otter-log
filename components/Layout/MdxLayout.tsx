type Props = {
  children: React.ReactNode;
};

const MdxLayout: React.FC<Props> = ({ children }) => {
  return <div className='flex w-full px-3 md:px-5 xl:px-0'>{children}</div>;
};

export default MdxLayout;
