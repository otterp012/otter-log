import Link from "next/link";
import { useRouter } from "next/router";

type NavListProps = {
  query: string;
  title: string;
};

const NavList: React.FC<NavListProps> = ({ query, title }) => {
  const { pathname } = useRouter();

  return (
    <li>
      <Link href={query}>
        <a
          className={`${
            pathname === query && "text-blue-900"
          } md:text-xl font-semibold`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavList;
