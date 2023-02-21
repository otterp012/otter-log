import { TableOfContents } from "components/TableOfContents";
import { ArticleType } from "types/types";
import { MarkDown } from "./MarkDown";

export type ArticleMainProps = Omit<ArticleType, "metaData">;

export const ArticleMain = (props: ArticleMainProps) => {
  const { headings, markDownString } = props;

  return (
    <div className='mt-5 lg:flex lg:flex-row-reverse'>
      <TableOfContents headings={headings} />
      <MarkDown markDownString={markDownString} />
    </div>
  );
};
