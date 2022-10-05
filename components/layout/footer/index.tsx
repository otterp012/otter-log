import { memo } from "react";
import GithubIcon from "./githubIcon";

const Footer = () => {
  return (
    <footer className='mt-16 flex w-full flex-col items-center justify-center'>
      <div>
        <GithubIcon />
      </div>
      <div>
        <span>Copyright ⓒ. All rights reserved</span>
      </div>
    </footer>
  );
};

export default memo(Footer);
