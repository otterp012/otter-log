import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { getAllPublished } from "lib/notion";
import { MetaData } from "types/types";
import { PAGE_URL } from "constants/constants";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const DATA_BASE_ID = process.env.DATABASE_ID as string;
  const data = await getAllPublished(DATA_BASE_ID);

  const dynamicFields = data.map((item: MetaData) => {
    return {
      loc: `${PAGE_URL}/post/${item.slug}`,
      lastmod: new Date(item.last_mod).toISOString(),
    };
  });

  const LAST_MODIFIED = dynamicFields[0].lastmod;

  const absoluteFields = {
    loc: PAGE_URL,
    lastmod: LAST_MODIFIED,
  };

  const fields = [absoluteFields, ...dynamicFields];
  return getServerSideSitemap(ctx, fields);
};

export default () => {};
