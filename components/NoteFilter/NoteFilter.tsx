// component
import NoteFilterOption from "./NoteFilterOption";

// constant
import { NOTE_FILTER_OPTIONS } from "constants/constants";

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
