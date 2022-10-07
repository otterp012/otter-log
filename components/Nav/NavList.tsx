import { useRouter } from "next/router";

// component
import { CustomLink } from "components";

type props = {
  query: string;
  title: string;
  onClickHandler?: () => void;
};

const NavList: React.FC<props> = ({ query, title, onClickHandler }) => {
  const { pathname } = useRouter();
  const style = `${
    pathname.includes(query) && "text-blue-900 dark:text-yellow-200"
  } font-semibold hover:text-blue-500 dark:hover:text-yellow-300 md:text-xl`;

  return (
    <li className={style}>
      <CustomLink href={query} onClickHandler={onClickHandler}>
        {title}
      </CustomLink>
    </li>
  );
};

export default NavList;
