// lib
import { linkHandler } from "lib/lib";

// type
import { HeadingType } from "./types";

type props = HeadingType & {
  visibleList: string;
};

const TocList: React.FC<props> = ({ slug, visibleList, heading, text }) => {
  const visibleStyle =
    slug === visibleList ? "font-bold text-deepBlue dark:text-deepPink" : "";

  const headingStyle = {
    heading2: "",
    heading3: "ml-3 text-sm",
    heading4: "ml-5 text-xs",
  };

  const commonStyle = `keep-all mb-1 h-full w-[250px] pointer hover-change-color`;

  return (
    <li
      key={slug}
      className={commonStyle + headingStyle[heading] + visibleStyle}
    >
      <a onClick={(e) => linkHandler(e, slug)}>{text}</a>
    </li>
  );
};

export default TocList;
