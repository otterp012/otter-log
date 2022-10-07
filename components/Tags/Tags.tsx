type Props = {
  tags: string[];
};

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className='xl:mt-2'>
      {tags &&
        tags.map((tag) => (
          <span
            key={tag}
            className='dark:hover:bg-deePink mr-3 text-sm font-semibold italic hover:bg-deepBlue dark:hover:bg-deepPink xl:mr-0 xl:rounded-xl xl:px-3 xl:py-2 xl:hover:cursor-pointer'
          >
            #{tag}
          </span>
        ))}
    </div>
  );
};

export default Tags;
