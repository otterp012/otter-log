import Link from "next/link";
import { wordBreak } from "../../styles/extraStyle";

type props = {
  title: string;
};

const TocTitle: React.FC<props> = ({ title }) => {
  return (
    <h4
      className='word-break mb-3 inline-block w-[70%] text-xl font-bold'
      style={wordBreak}
    >
      <Link href='#top'>
        <a
          onClick={(e) => {
            e.preventDefault();
            document &&
              document.getElementById("top")?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          {title}
        </a>
      </Link>
    </h4>
  );
};

export default TocTitle;
