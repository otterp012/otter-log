import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type props = {
  headings: {
    slug: string;
    heading: string;
    text: string;
  }[];
  title: string;
};

const TOC: React.FC<props> = ({ headings, title }) => {
  const [isVisible, setIsVisible] = useState("");
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const headingTags = document.querySelectorAll("h2, h3");
    observer.current = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -35% 0px",
    });
    headingTags.forEach((tag) => observer.current?.observe(tag));

    return () => observer.current?.disconnect();
  }, [isVisible]);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.target.id);
      }
    });
  };

  return (
    <aside className='relative hidden xl:block'>
      <div className='sticky top-[200px] right-5 ml-10 w-[280px] border-l-2 border-gray-200'>
        <div className='py-2 pl-5'>
          <h4 className='mb-3 inline-block text-xl font-bold'>
            <Link href='#top'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document &&
                    document.getElementById("top")?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                {title}
              </a>
            </Link>
          </h4>

          <ol className='ml-2'>
            {headings.map((v) => (
              <li
                key={v.slug}
                className={`mb-1 hover:text-blue-500 dark:hover:text-yellow-300 
                ${
                  v.slug == isVisible &&
                  "font-bold text-blue-800 dark:text-yellow-200"
                } ${v.heading === "heading3" && "ml-3 text-sm"}
                  ${
                    v.heading === "heading4" && "ml-5 text-xs"
                  } h-full w-[250px]`}
              >
                <Link href={`#${v.slug}`} key={v.slug}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      document &&
                        document.getElementById(v.slug)?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
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
