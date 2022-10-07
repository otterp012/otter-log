import type { Props } from "./types";
import { wordBreak } from "styles/extraStyle";

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
        className='flex w-full items-center justify-between border-b border-gray-600 hover:text-yellow-400'
      >
        <div className='min-w-[70%] md:min-w-[40%]' style={wordBreak}>
          {title}
        </div>
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
