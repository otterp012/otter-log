const Tags: React.FC<{ tags: string[] | undefined }> = ({ tags }) => {
  console.log(tags);
  return (
    <div className='xl:mt-2'>
      {tags &&
        tags.map((tag) => (
          <span
            key={tag}
            className='mr-3 text-sm font-semibold italic xl:mr-0 xl:rounded-xl xl:px-3 xl:py-2 xl:hover:cursor-pointer xl:hover:bg-slate-400'
          >
            #{tag}
          </span>
        ))}
    </div>
  );
};

export default Tags;
