import NoteList from "./NoteList";
import { Props } from "./types";

const NoteSection: React.FC<{ data: Props[] }> = ({ data }) => {
  return (
    <section className='mt-5 border border-gray-600 px-5 py-5'>
      <ul className='w-full space-y-3'>
        {data.map(({ id, url, title, description, created_time }) => (
          <NoteList
            key={id}
            url={url}
            title={title}
            description={description}
            created_time={created_time}
          />
        ))}
      </ul>
    </section>
  );
};
export default NoteSection;
