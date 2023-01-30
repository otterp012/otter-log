import { ParsedUrlQuery } from "querystring";

export type Params = {
  slug: string | string[] | ParsedUrlQuery | undefined;
};

export type MetaData = {
  title: string;
  description: string;
  date: string;
  cover: string | undefined;
  slug: string;
  last_edit: string;
  tags: string[];
  featured: boolean | undefined;
};

export type HeadingType = {
  slug: string;
  heading: "heading2" | "heading3";
  text: string;
};

export type PostType = {
  metadata: MetaData;
  markdown: string;
  headings: HeadingType[];
};
