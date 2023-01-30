import { memo } from "react";

// component
import { GithubIcon } from "components/Icons";

const Footer = () => {
  return (
    <footer className='mx-auto mt-10 flex flex-col items-center justify-center'>
      <GithubIcon />
      <span className='block'>Copyright ⓒ. All rights reserved</span>
    </footer>
  );
};

export default memo(Footer);
