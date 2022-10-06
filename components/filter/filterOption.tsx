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
      className={`border px-3 py-1 text-lg ${
        filter === query && "border-0 bg-yellow-300 text-black"
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
