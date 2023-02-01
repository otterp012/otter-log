import { CustomLink } from "components/CustomLink";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  tags: string[];
};

const ABLE = ["javascript", "react", "next"];
const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <>
      {tags &&
        tags.map((tag) => {
          return (
            <Link
              href={{
                pathname: "/post",
                query: { filterBy: ABLE.includes(tag) ? tag : "others" },
              }}
              key={tag}
              passHref
            >
              <span className='cursor-pointer rounded-sm px-3 py-2 font-semibold hover:bg-light-bg dark:hover:bg-dark-bg'>
                #{tag}
              </span>
            </Link>
          );
        })}
    </>
  );
};

export default Tags;
