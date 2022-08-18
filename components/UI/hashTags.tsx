type HashTagsProps = {
  tags: string[] | undefined;
};

const HashTags: React.FC<HashTagsProps> = ({ tags }) => {
  return (
    <ul className='mt-3'>
      {tags &&
        tags.map((tag) => (
          <span
            key={tag}
            className='text-md mr-1 rounded-lg py-2 px-3 font-semibold italic hover:cursor-pointer hover:bg-slate-500'
          >
            {tag}
          </span>
        ))}
    </ul>
  );
};

export default HashTags;
