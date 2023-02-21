import { TableOfContents } from "components/TableOfContents";
import { ArticleHeader } from "./ArticleHeader";
import { MarkDown } from "./MarkDown";

import type { ArticleType } from "types/types";

import dynamic from "next/dynamic";
import { ArticleMainProps } from "./ArticleMain";

const LazyArticleMain = dynamic<ArticleMainProps>(() =>
  import("./ArticleMain").then((mod) => mod.ArticleMain),
);

export const Article = (props: ArticleType) => {
  const { metaData, ...rest } = props;

  return (
    <article className='mt-10'>
      <ArticleHeader {...metaData} />
      <LazyArticleMain {...rest} />
    </article>
  );
};
