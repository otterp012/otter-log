import { ParsedUrlQuery } from "querystring";

export type Params = {
  slug: string | string[] | ParsedUrlQuery | undefined;
};
