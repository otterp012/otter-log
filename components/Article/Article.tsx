import { TableOfContents } from "components/TableOfContents";
import { ArticleHeader } from "./ArticleHeader";
import { MarkDown } from "./MarkDown";

import type { PostType } from "types/types";

export const Article = (props: PostType) => {
  const { metaData, headings, markDownString } = props;
  return (
    <article className='mt-10'>
      <ArticleHeader {...metaData} />
      <div className='mt-5 lg:flex lg:flex-row-reverse'>
        <TableOfContents headings={headings} />
        <MarkDown markdownString={markDownString} />
      </div>
    </article>
  );
};
