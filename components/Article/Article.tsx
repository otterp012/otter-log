import dynamic from "next/dynamic";
import type { ArticleType } from "types/types";
import { ArticleHeader } from "./ArticleHeader";
import { Loading } from "components/Loading";
import type { ArticleMainProps } from "./ArticleMain";

export const Article = (props: ArticleType) => {
  const { metaData, ...rest } = props;
  return (
    <article className='mt-10'>
      <ArticleHeader {...metaData} />
      <DynamicArticleMain {...rest} />
    </article>
  );
};

const DynamicArticleMain = dynamic<ArticleMainProps>(
  () => import("./ArticleMain").then((mod) => mod.ArticleMain),
  {
    loading: () => <Loading />,
  },
);
