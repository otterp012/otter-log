export const linkHandler = (
  e: React.MouseEvent<HTMLAnchorElement>,
  slug: string,
) => {
  e.preventDefault();
  document &&
    document.getElementById(slug)?.scrollIntoView({
      behavior: "smooth",
    });
};

export const scrollTopHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

export const filterNotionData = (arr: [], filter: string) => {
  return arr
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
      ) => Number(new Date(a.created_time)) - Number(new Date(b.created_time)),
    );
};
