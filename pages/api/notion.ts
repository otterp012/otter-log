// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { filter } = req.query;
  let filtered = [];
  try {
    const response = await fetch(`https://api.notion.com/v1/search/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: filter?.toString(),
      }),
    });
    const data = await response.json();
    filtered = data.results
      .filter((result: { object: string }) => result.object === "page")
      .map(
        (result: {
          properties: {
            [x: string]: {
              rich_text: { plain_text: string }[];
              title: { plain_text: string }[];
            };
          };
          id: string;
          url: string;
          created_time: { toString: () => string };
        }) => {
          const description = result.properties["텍스트"].rich_text.length
            ? result.properties["텍스트"].rich_text[0].plain_text
            : "";
          const title = result.properties["이름"].title[0].plain_text;
          return {
            id: result.id,
            url: result.url,
            title: title.replace(`${filter}: `, ""),
            created_time: result.created_time.toString(),
            description,
          };
        },
      )
      .sort(
        (
          a: { created_time: string | number | Date },
          b: { created_time: string | number | Date },
        ) =>
          Number(new Date(a.created_time)) - Number(new Date(b.created_time)),
      );
  } catch (e) {
    filtered = [];
  }

  res.status(200).json({ filtered });
}

// fetch("https://api.notion.com/v1/search/", {
//   "headers": {
//     "authorization": "Bearer secret_V3zENBGW8mJBW7jL9sRbH4x5UiAJmIh3ixfM7mVFPyH",
//     "content-type": "application/json",
//     "notion-version": "2022-06-28"
//   },
//   "referrer": "http://localhost:3000/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"query\":\"React\"}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });

// 오류

// fetch("http://localhost:3000/api/notion?filter=Javascript", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "no-cache",
//     "pragma": "no-cache",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "http://localhost:3000/note?filter=Javascript",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });

// api 만 쓴거

// fetch("http://localhost:3000/api/notion?filter=undefined", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "no-cache",
//     "pragma": "no-cache",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "http://localhost:3000/note?filter=Javascript",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });
