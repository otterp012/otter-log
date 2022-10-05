import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type props = {
  query: string;
  title: string;
  onClickHandler?: () => void;
};

const NavList: React.FC<props> = ({ query, title, onClickHandler }) => {
  const { pathname } = useRouter();

  return (
    <li>
      <Link href={query}>
        <a
          className={`
            ${pathname.includes(query) && "text-blue-900 dark:text-yellow-200"} 
          font-semibold hover:text-blue-500 dark:hover:text-yellow-300 md:text-xl`}
          onClick={onClickHandler}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavList;
