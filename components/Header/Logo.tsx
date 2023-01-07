// component
import { CustomLink } from "components/CustomLink";
import { memo } from "react";
const Logo = () => {
  return (
    <CustomLink href='/'>
      <h1 aria-label='otter-log' className='text-3xl font-extrabold italic'>
        OTTER-LOG
      </h1>
    </CustomLink>
  );
};

export default memo(Logo);
