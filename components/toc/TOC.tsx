// type
import type { HeadingType } from "./types";

// component

// hook
// import { useTocHighLight } from "hooks";

type props = {
  headings: HeadingType[];
  title: string;
};

const TOC: React.FC<props> = ({ headings, title }) => {
  // const { visibleList } = useTocHighLight();

  return (
    <aside className='relative hidden xl:block'>
      <div className='border-gray-200 sticky top-[200px] right-5 ml-10 w-[280px] border-l-2'>
        <div className='py-2 pl-5'>
          <h4 className='keep-all hover:text-yellow-300 mb-3 inline-block cursor-pointer text-xl font-bold'>
            <a
              onClick={(e) => {
                e.preventDefault();
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {title}
            </a>
          </h4>
          <ol className='ml-2'>
            {headings.map(({ slug, heading, text }) => (
              <li key={slug} className=''></li>
            ))}
          </ol>
        </div>
      </div>
    </aside>
  );
};

export default TOC;
