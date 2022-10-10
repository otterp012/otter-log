import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// lib
import { filterNotionData } from "lib/lib";

const Notes: React.FC = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const filter = router.query.filter;
  useEffect(() => {
    const getData = async (filter: string) => {
      let result = [];
      if (process.env.NODE_ENV === "development") {
        const response = await fetch(`api/notion?filter=${filter}`);
        result = await response.json();
      } else {
        const response = await fetch("https://api.notion.com/v1/search/", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NOTION_API}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: filter?.toString(),
          }),
        });
        result = await response.json();
        result = filterNotionData(result);
      }
      const { filtered } = result;
      setData(filtered);
    };

    getData(filter as string);
  }, [filter]);

  return (
    <section className='grayed-border mt-5 border px-5 py-5'>
      <ul className='w-full space-y-3'>
        {data.map(({ id, url, title, description, created_time }) => (
          <li key={id}>
            <a
              target='_black'
              href={url}
              className='grayed-border hover:text-yellow-400 hover-change-color flex w-full items-center justify-between border-b'
            >
              <div className='keep-all min-w-[70%] md:min-w-[40%]'>{title}</div>
              <p className='hidden md:block md:min-w-[40%]'>{description}</p>
              <time className='min-w-[30%] text-right text-xs md:min-w-[15%]'>
                {new Date(created_time).toLocaleDateString("ko-kr", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </time>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Notes;
