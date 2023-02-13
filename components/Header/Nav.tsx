import { useRouter } from "next/router";
import { memo } from "react";

// constant
import { NAV_PATHS } from "../../constants/constants";

// component
import { CustomLink } from "components/CustomLink";

export const Nav = memo(() => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul className='flex space-x-2'>
        {NAV_PATHS.map(({ path, title }) => (
          <li
            key={path}
            className={`text-md font-bold hover:text-deepBlue md:text-xl ${
              pathname.includes(path) && "text-deepBlue"
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
});

Nav.displayName = "Nav";
