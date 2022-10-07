type props = {
  title: string;
};

const TocTitle: React.FC<props> = ({ title }) => {
  return (
    <h4 className='keep-all mb-3 inline-block cursor-pointer text-xl font-bold hover:text-yellow-300'>
      <a
        onClick={(e) => {
          e.preventDefault();
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {title}
      </a>
    </h4>
  );
};

export default TocTitle;
