import { memo } from "react";

// components
import { GithubIcon } from "components";

const Footer = () => {
  return (
    <footer className='mt-16 flex w-full flex-col items-center justify-center'>
      <GithubIcon />
      <span className='block'>Copyright ⓒ. All rights reserved</span>
    </footer>
  );
};

export default memo(Footer);
