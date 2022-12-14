// hook
import { useToc } from "hooks";
import { linkHandler, scrollTopHandler } from "lib/lib";

type HeadingType = {
  slug: string;
  heading: "heading2" | "heading3" | "heading4";
  text: string;
};

type props = {
  headings: HeadingType[];
  title: string;
};

const TableOfContents: React.FC<props> = ({ headings, title }) => {
  const { visibleList } = useToc();

  return (
    <aside className='relative hidden xl:block'>
      <div className='border-gray-200 sticky top-[200px] right-5 ml-10 w-[280px] border-l-2'>
        <div className='py-2 pl-5'>
          <h4 className='keep-all hover:text-yellow-300 hover-change-color mb-3 inline-block cursor-pointer text-xl font-bold'>
            <a onClick={scrollTopHandler}>{title}</a>
          </h4>
          <ol className='ml-2'>
            {headings.map(({ slug, heading, text }) => {
              const visibleStyle =
                slug === visibleList
                  ? "font-bold text-deepBlue dark:text-deepPink"
                  : "";
              const headingStyle = {
                heading2: "",
                heading3: "ml-3 text-sm",
                heading4: "ml-5 text-xs",
              };
              const commonStyle = `keep-all mb-1 h-full w-[250px] pointer hover-change-color`;

              return (
                <li key={slug}>
                  <a
                    onClick={(e) => linkHandler(e, slug)}
                    className={`${commonStyle} ${headingStyle[heading]} ${visibleStyle}`}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </aside>
  );
};

export default TableOfContents;
