import { useRouter } from "next/router";
import { memo } from "react";

// constant
import { NAV_PATHS } from "../../constants/constants";

// component
import { CustomLink } from "components/CustomLink";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul className='flex space-x-2'>
        {NAV_PATHS.map(({ path, title }) => (
          <li
            key='path'
            className={`text-xl font-bold ${
              pathname.includes(path) && "text-pink"
            }`}
          >
            <CustomLink
              href={{
                pathname: path,
              }}
            >
              {title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(Nav);
