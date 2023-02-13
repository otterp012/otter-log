import { memo } from "react";

// component
import { CustomLink } from "components/CustomLink";

export const Logo = memo(() => {
  return (
    <h1
      aria-label='otter-log'
      className='text-lg font-extrabold italic md:text-3xl'
    >
      <CustomLink href='/'>OTTER-LOG</CustomLink>
    </h1>
  );
});

Logo.displayName = "Logo";
