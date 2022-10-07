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
    pathname.includes(query) && "text-deepBlue dark:text-deepPink"
  } font-semibold hover:text-blue-500 hover-change-color md:text-xl`;

  return (
    <li className={style}>
      <CustomLink href={query} onClickHandler={onClickHandler}>
        {title}
      </CustomLink>
    </li>
  );
};

export default NavList;
