type Props = {
  tags: string[];
};

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <>
      {tags &&
        tags.map((tag) => {
          return (
            <span
              key={tag}
              className='cursor-pointer rounded-sm px-3 py-2 font-semibold hover:bg-light-bg dark:hover:bg-dark-bg'
            >
              #{tag}
            </span>
          );
        })}
    </>
  );
};

export default Tags;
