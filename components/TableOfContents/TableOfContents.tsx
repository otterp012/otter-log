// hook
import { useToc } from "hooks";
import { ToTopButton } from "components/ToTopButton";
import { HeadingType } from "types/types";
import { linkHandler } from "lib/utils";

type TOCProps = {
  headings: HeadingType[];
};

export const TableOfContents = ({ headings }: TOCProps) => {
  const { visibleList } = useToc();
  return (
    <div className='mx-auto space-y-2 pb-7 lg:sticky lg:top-[200px] lg:mt-10 lg:w-[250px] lg:self-start lg:pl-3'>
      <span className='text-lg font-semibold'>📖 목차</span>
      <ol className='space-y-1.5'>
        {headings.map(({ slug, heading, text }) => {
          const visibleStyle = slug === visibleList ? "bg-deepGray" : "";
          const headingStyle = {
            h3: "text-sm pl-5",
            h4: "pl-8 text-xs",
          };

          return (
            <li key={slug}>
              <a
                onClick={(e) => linkHandler(e, slug)}
                aria-labelledby={`#${slug}`}
                className={`${headingStyle[heading]} pointer block rounded-md ${visibleStyle} break-keep hover:bg-deepGray`}
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
