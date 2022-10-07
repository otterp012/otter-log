import { useRouter } from "next/router";

type Props = {
  option: string;
  query: string;
};

const NoteFilterOption: React.FC<Props> = ({ option, query }) => {
  const router = useRouter();
  const { filter } = router.query;
  return (
    <button
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
  );
};

export default NoteFilterOption;
