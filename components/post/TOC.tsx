import Link from "next/link";

type TOCProps = {
  headings: {
    slug: string;
    heading: string;
    text: string;
  }[];
  title: string;
};

const TOC: React.FC<TOCProps> = ({ headings, title }) => {
  return (
    <aside className='relative hidden xl:block'>
      <div className='sticky top-[200px] right-5 ml-10 w-[280px] border-l-2 border-black'>
        <div className='py-2 pl-5'>
          <h4 className='mb-3 inline-block text-xl font-bold'>
            <Link href='#top'>{title}</Link>
          </h4>

          <ol className='ml-2'>
            {headings.map((v) => (
              <li key={v.slug} className='mb-1 hover:text-red-900'>
                <Link href={`#${v.slug}`} key={v.slug}>
                  <a
                    className={`${
                      v.heading === "heading3" && "ml-3 text-sm"
                    } h-full w-[250px]`}
                  >
                    {v.text}
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </aside>
  );
};

export default TOC;
