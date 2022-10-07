// type
import type { HeadingType } from "./types";

// component
import TocContainer from "./Container";
import TocLists from "./Lists";
import TocTitle from "./Title";

// hook
import { useTocHighLight } from "hooks";

type props = {
  headings: HeadingType[];
  title: string;
};

const TOC: React.FC<props> = ({ headings, title }) => {
  const { visibleList } = useTocHighLight();

  return (
    <TocContainer>
      <TocTitle title={title} />
      <TocLists headings={headings} visibleList={visibleList} />
    </TocContainer>
  );
};

export default TOC;
