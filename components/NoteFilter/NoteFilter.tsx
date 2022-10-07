import { NOTE_FILTER_OPTIONS } from "constants/constants";
import NoteFilterOption from "./NoteFilterOption";

const NoteFilter = () => {
  return (
    <div className='mt-5 flex flex-wrap md:justify-start'>
      {NOTE_FILTER_OPTIONS.map((filter) => (
        <NoteFilterOption
          key={filter.query}
          query={filter.query}
          option={filter.option}
        />
      ))}
    </div>
  );
};

export default NoteFilter;
