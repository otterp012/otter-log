import { memo } from "react";

// component
import { CustomLink } from "components/CustomLink";

export const Logo = memo(() => {
  return (
    <h1 className='text-lg font-extrabold italic hover:text-deepBlue md:text-3xl'>
      <CustomLink href='/'>OTTER-LOG</CustomLink>
    </h1>
  );
});

Logo.displayName = "Logo";
