import { ParsedUrlQuery } from "querystring";

export type Params = {
  slug: string | string[] | ParsedUrlQuery | undefined;
};

export type MetaData = {
  id: string;
  title: string;
  description: string;
  thumbnailImg: string;
  slug: string;
  tags: string[];
  formattedDate: string;
  lastEditDate: Date;
  lastEditFormattedDate: string;
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

export type PostType = {
  metaData: MetaData;
  markDownString: string;
  headings: HeadingType[];
};
