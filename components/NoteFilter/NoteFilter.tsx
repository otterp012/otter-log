import { useRouter } from "next/router";

// constant
import { NOTE_FILTER_OPTIONS } from "constants/constants";

const NoteFilter = () => {
  const router = useRouter();
  const { filter } = router.query;
  return (
    <div className='mt-5 flex flex-wrap md:justify-start'>
      {NOTE_FILTER_OPTIONS.map(({ option, query }) => (
        <button
          key={option}
          className={`grayed-border border border-r-0 px-3 py-1 text-lg last:border-r ${
            filter === query &&
            "border-0 bg-blue text-white dark:bg-pink dark:text-black"
          }`}
          onClick={() => {
            router.push({
              query: {
                filter: query,
              },
            });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default NoteFilter;
