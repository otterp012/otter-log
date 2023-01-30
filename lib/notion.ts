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
    cover: post.cover?.file?.url ?? null,
    title: post.properties.이름.title[0].plain_text,
    tags: getTags(post.properties.태그.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: dateToKorean(post.properties.Date.date.start),
    last_edit: dateToKorean(post.properties.Last_Date.date.start),
    slug: post.properties.slug.rich_text[0].plain_text,
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

  const page = response.results[0];
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
