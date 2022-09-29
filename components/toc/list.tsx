import Link from "next/link";

import type { HeadingsType } from "./types";

import { wordBreak } from "../../styles/extraStyle";

type props = {
  headings: HeadingsType;
  visibleList: string;
};

const TocList: React.FC<props> = ({ headings, visibleList }) => {
  return (
    <ol className='ml-2'>
      {headings.map(({ slug, heading, text }) => (
        <li
          key={slug}
          className={`mb-1 hover:text-blue-500 dark:hover:text-yellow-300 
        ${
          slug === visibleList && "font-bold text-blue-800 dark:text-yellow-200"
        } ${heading === "heading3" && "ml-3 text-sm"}
          ${heading === "heading4" && "ml-5 text-xs"} h-full w-[250px]`}
          style={wordBreak}
        >
          {/* todo 이부분 수정하기 */}
          <Link href={`#${slug}`} key={slug}>
            <a
              onClick={(e) => {
                e.preventDefault();
                document &&
                  document.getElementById(slug)?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              {text}
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default TocList;
