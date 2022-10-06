import NoteSection from "components/noteSection";
import NoteFilter from "components/filter";

type Props = {
  created_time: string;
  description: string;
  id: string;
  title: string;
  url: string;
};

const Note: React.FC<{ data: Props[] }> = ({ data }) => {
  return (
    <div className='px-3'>
      <h2 className='pt-5 text-3xl font-bold italic'>NOTES...</h2>
      <p className='text-sm font-semibold text-red-400'>
        아래 페이지는, 노션으로 연결됩니다. 🥸
      </p>
      <NoteFilter />
      <NoteSection data={data} />
    </div>
  );
};

export default Note;

export const getServerSideProps = async (context: {
  query: { filter: string };
}) => {
  const filter = context.query.filter ?? "react";
  const NOTION_AUTH = process.env.NOTION_API;
  const response = await fetch("https://api.notion.com/v1/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_AUTH}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: filter,
    }),
  });

  const parsedRes = await response.json();

  return {
    props: {
      data: parsedRes.results
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
        ),
    },
  };
};
