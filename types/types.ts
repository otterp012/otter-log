import { ParsedUrlQuery } from "querystring";

type ParamsType = string | string[] | ParsedUrlQuery;
export type Params = Record<string, ParamsType>;

export interface MetaData {
  id: string;
  title: string;
  description: string;
  slug: string;
  formattedDate: string;
  lastEditDate: Date;
  lastEditFormattedDate: string;
  tags: string[];
  thumbnailImg: string;
  reference: string;
  chap: number;
  blurImg: string;
}

export type ArticleType = {
  metaData: MetaData;
  markDownString: string;
  headings: HeadingType[];
};

export type FetchedHeadingType = {
  type: string;
  parent: string;
  children: string[];
};

export type HeadingType = {
  slug: string;
  heading: "h3" | "h4";
  text: string;
};

export type PostMetaData = Omit<MetaData, "reference" | "chap">;
export type BookMetaData = Omit<MetaData, "tags" | "thumbnailImg"> & {
  name: string;
};

interface Blog {
  markDownString: string;
  headings: HeadingType[];
}

export interface PostType extends Blog {
  metaData: PostMetaData;
}

export interface BookType extends Blog {
  metaData: BookMetaData;
  name: string;
}
