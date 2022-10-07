// type
import type { HeadingType } from "./types";

// lib
import TocList from "./List";

type props = {
  headings: HeadingType[];
  visibleList: string;
};

const TocLists: React.FC<props> = ({ headings, visibleList }) => {
  return (
    <ol className='ml-2'>
      {headings.map(({ slug, heading, text }) => (
        <TocList
          key={slug}
          slug={slug}
          heading={heading}
          text={text}
          visibleList={visibleList}
        />
      ))}
    </ol>
  );
};

export default TocLists;
