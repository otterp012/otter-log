import Link from "next/link";

const headingStyles = {
  2: "text-md w-[250px] h-full inline-block",
  3: "text-sm ml-3 w-[240px] h-full inline-block hover:text-blue-900",
};

type heading = {
  [key: string]: string;
};

type TOCProps = {
  headings: any;
};

const TOC: React.FC<TOCProps> = ({ headings }) => {
  return (
    <aside className='hidden xl:block relative'>
      <div className='w-[300px] sticky top-[200px] right-5 ml-10'>
        <span className='text-xl font-bold inline-block mb-5'>
          Table of Content
        </span>

        {headings.map((v) => {
          return (
            <div
              key={v.slug}
              className={`${
                headingStyles[v.heading]
              } mb-1 w-[300px] hover:text-red-900`}
            >
              <Link href={`#${v.slug}`} key={v.slug}>
                {v.text}
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default TOC;
