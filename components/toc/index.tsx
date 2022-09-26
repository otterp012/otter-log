import type { HeadingsType } from "./types";

import TocContainer from "./container";
import TocList from "./list";
import TocTitle from "./title";
import useTocHighLight from "../../hooks/useTocHighlight";

type props = {
  headings: HeadingsType;
  title: string;
};

const TOC: React.FC<props> = ({ headings, title }) => {
  const { visibleList } = useTocHighLight();

  return (
    <TocContainer>
      <TocTitle title={title} />
      <TocList headings={headings} visibleList={visibleList} />
    </TocContainer>
  );
};

export default TOC;
