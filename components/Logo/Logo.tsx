// component
import { CustomLink } from "components/CustomLink";

const Logo = () => {
  return (
    <CustomLink href='/'>
      <h1
        aria-label='otter-log'
        className='hover-change-color text-3xl font-extrabold italic'
      >
        OTTER-LOG
      </h1>
    </CustomLink>
  );
};

export default Logo;
