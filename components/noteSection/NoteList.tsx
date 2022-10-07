// type
import type { Props } from "./types";

// style

const NoteList: React.FC<Props> = ({
  url,
  title,
  description,
  created_time,
}) => {
  return (
    <li>
      <a
        target='_black'
        href={url}
        className='grayed-border hover:text-yellow-400 flex w-full items-center justify-between border-b'
      >
        <div className='keep-all min-w-[70%] md:min-w-[40%]'>{title}</div>
        <p className='hidden md:block md:min-w-[40%]'>{description}</p>
        <time className='min-w-[30%] text-right text-xs md:min-w-[15%]'>
          {new Date(created_time).toLocaleDateString("ko-kr", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })}
        </time>
      </a>
    </li>
  );
};

export default NoteList;
