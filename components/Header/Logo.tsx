// component
import { CustomLink } from "components/CustomLink";
import { memo } from "react";
const Logo = () => {
  return (
    <h1 aria-label='otter-log' className='text-3xl font-extrabold italic'>
      <CustomLink href='/'>OTTER-LOG</CustomLink>
    </h1>
  );
};

export default memo(Logo);
