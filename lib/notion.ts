import { parseHeading } from "./utils";

const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const POST_DATABASE_ID = process.env.DATABASE_ID;
const BOOK_DATABASE_ID = process.env.DATABASE_ID_BOOK;

export const getAllPublished = async (database: string) => {
  const database_id = database === "post" ? POST_DATABASE_ID : BOOK_DATABASE_ID;
  const formatter = database === "post" ? getPostMetaData : getBookMetaData;
  try {
    const posts = await notion.databases.query({
      database_id: database_id,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    const allPosts = posts.results;
    return allPosts.map(formatter);
  } catch (error) {
    console.error(error);
  }
};

/**
 *
 * @param database - 데이터 베이스 이름 post | book
 * @param slug - 해당 페이지의 slug
 * @return 해당 페이지의 메타데이터
 */
export const getPageBySlug = async ({
  database = "post",
  slug,
}: {
  database: "post" | "book";
  slug: string;
}): Promise<any> => {
  const database_id = database === "post" ? POST_DATABASE_ID : BOOK_DATABASE_ID;
  const formatter = database === "post" ? getPostMetaData : getBookMetaData;
  try {
    const data = await notion.databases.query({
      database_id,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "slug",
            formula: {
              string: {
                equals: slug,
              },
            },
          },
        ],
      },
    });

    return formatter(data.results[0]);
  } catch (error) {
    console.error(error);
  }
};

export const getPage = async (page: string, slug: string) => {
  const database_id = page === "post" ? POST_DATABASE_ID : BOOK_DATABASE_ID;
  const response = await notion.databases.query({
    database_id,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  return response.results[0];
};

const getAllBlocks = async (blockId: string, start?: string) => {
  let results: any[] = [];

  try {
    const recur = async (blockId: string, start?: string) => {
      const blocks = await notion.blocks.children.list({
        block_id: blockId,
        start_cursor: start,
      });

      results = [...results, ...blocks.results];

      if (!blocks.has_more) return;
      await recur(blockId, blocks.next_cursor);
    };

    await recur(blockId, start);

    return results;
  } catch (error) {
    console.error(error);
  }
};

export const getAllBlocksById = async (id: string) => {
  try {
    const blocks = getAllBlocks(id, undefined);
    return blocks;
  } catch {
    return null;
  }
};

// ----------------------------------------------------------------
// notionBlock -> md포맷으로 변환해주는 함수

const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 *
 * @param id - 노션 페이지 ID
 * @returns - headings, markDownString
 */
export const getMarkDownById: (id: string) => Promise<any> = async (id) => {
  try {
    const mdBlocks = await n2m.pageToMarkdown(id);
    const markDownString = n2m.toMarkdownString(mdBlocks);
    const headings = await n2m.pageToMarkdown(id, 2);

    const parsedHeadings = headings
      .filter((item: { type: string; parent: string }) =>
        item.type.includes("heading"),
      )
      .map((item: { type: string; parent: string }) => {
        const parsedText = parseHeading(item.parent);
        return {
          heading: item.type
            .replace(/_/, "")
            .replace("heading2", "h3")
            .replace("heading3", "h4"),
          slug: parsedText.replace(/ /g, "-").toLowerCase(),
          text: parsedText,
        };
      });

    return {
      markDownString,
      headings: parsedHeadings,
    };
  } catch (error) {
    console.error(error);
  }
};

// ----------------------------------------------------------------
// notion block update 함수
// Image 파일 조정을 위해 사용되는 부분

export const updateBlockImage = async (id: string, url?: string) => {
  if (!url) return;
  return await notion.blocks.update({
    block_id: id,
    image: {
      external: {
        url,
      },
    },
  });
};

export const updateCoverImage = async (id: string, url?: string) => {
  if (!url) return;
  return await notion.pages.update({
    page_id: id,
    cover: {
      external: {
        url,
      },
    },
  });
};

// ------------------------------------------------------
// 필요한 메타데이터만 뽑아 오는 함수

const getTags = (tags: { name: string }[]) => {
  return tags.map((tag) => tag.name);
};

const getPostMetaData = (post: any) => {
  return {
    id: post.id,
    title: post.properties.이름.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    thumbnailImg: post.cover?.external?.url ?? post.cover.file.url,
    slug: post.properties.slug.rich_text[0].plain_text,
    tags: getTags(post.properties.태그.multi_select),
    formattedDate: dateToKorean(post.properties.Date.date.start),
    lastEditDate: post.properties.Last_Date.date.start,
    lastEditFormattedDate: dateToKorean(post.properties.Last_Date.date.start),
  };
};

const getBookMetaData = (post: any) => {
  return {
    id: post.id,
    title: post.properties.이름.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    slug: post.properties.slug.rich_text[0].plain_text,
    formattedDate: dateToKorean(post.properties.Date.date.start),
    name: post.properties.Ref.select.name,
    chap: post.properties.Chap.number,
    lastEditDate: post.properties.Last_Date.date.start,
    lastEditFormattedDate: dateToKorean(post.properties.Last_Date.date.start),
  };
};

const dateToKorean = (dateString: string) => {
  const parsedDate = new Date(dateString).toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return parsedDate;
};
