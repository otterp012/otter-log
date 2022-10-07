import { memo } from "react";

// component
import { GithubIcon } from "components";

const Footer = () => {
  return (
    <footer className='mt-10 flex w-full flex-col items-center justify-center'>
      <GithubIcon />
      <span className='block'>Copyright ⓒ. All rights reserved</span>
    </footer>
  );
};

export default memo(Footer);
