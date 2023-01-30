// hook
import { useToc } from "hooks";
import { ToTopButton } from "components/ToTopButton";
type HeadingType = {
  slug: string;
  heading: "heading2" | "heading3";
  text: string;
};

type props = {
  headings: HeadingType[];
};

const TableOfContents = ({ headings }: props) => {
  const { visibleList } = useToc();
  return (
    <div className='mx-auto space-y-2 pb-7 lg:sticky lg:top-[200px] lg:mt-10 lg:w-[25%] lg:self-start lg:pl-3'>
      <span className='text-lg font-semibold'>📖 목차</span>
      <ol className='space-y-1.5'>
        {headings.map(({ slug, heading, text }) => {
          const visibleStyle = slug === visibleList ? "bg-deepGray" : "";
          const headingStyle = {
            heading2: "text-md pl-5",
            heading3: "pl-8 text-sm",
          };

          return (
            <li key={slug}>
              <a
                onClick={(e) => {
                  document &&
                    document.getElementById(`${slug}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className={`${headingStyle[heading]} pointer block rounded-md ${visibleStyle} hover:bg-deepGray`}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ol>
      <ToTopButton />
    </div>
  );
};

export default TableOfContents;
