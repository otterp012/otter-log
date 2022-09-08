import Link from "next/link";
import { useRouter } from "next/router";

type NavListProps = {
  query: string;
  title: string;
};

const NavList: React.FC<NavListProps> = ({ query, title }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={query}>
        <a
          className={`${
            router.pathname.includes(query) &&
            "text-blue-900 dark:text-yellow-200"
          } font-semibold hover:text-blue-500 dark:hover:text-yellow-300 md:text-xl`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavList;
