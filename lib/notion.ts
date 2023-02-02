const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPublished = async (database: string) => {
  const posts = await notion.databases.query({
    database_id: database,
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
  return allPosts.map((post: any) => {
    return getMetaData(post);
  });
};

const getTags = (tags: { name: string }[]) => {
  return tags.map((tag) => tag.name);
};

const getMetaData = (post: any) => {
  return {
    id: post.id,
    cover: post.cover?.external?.url ?? null,
    title: post.properties.이름.title[0].plain_text,
    tags: getTags(post.properties.태그.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: dateToKorean(post.properties.Date.date.start),
    last_edit: dateToKorean(post.properties.Last_Date.date.start),
    slug: post.properties.slug.rich_text[0].plain_text,
    last_mod: post.properties.Last_Date.date.start,
  };
};

function dateToKorean(dateString: string) {
  const parsedDate = new Date(dateString).toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return parsedDate;
}

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getPost = async (slug: string) => {
  const page = await getPage(slug);
  const metadata = getMetaData(page);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks);
  const headings = await n2m.pageToMarkdown(page.id, 2);

  return {
    metadata,
    markdown,
    headings,
  };
};

export const getPage = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
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

export const getAllBlocksBySlug = async (slug: string) => {
  try {
    const response = await getPage(slug);
    const id = response.id;

    const blocks = await notion.blocks.children.list({
      block_id: id,
    });

    return blocks.results;
  } catch {
    return null;
  }
};

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
