import { memo } from "react";
import GithubIcon from "./githubIcon";

const Footer = () => {
  return (
    <footer className='mt-16 flex w-full flex-col items-center justify-center'>
      <div>
        <a href='https://github.com/otterp012'>
          <GithubIcon />
        </a>
      </div>
      <div>
        <span>Copyright ⓒ. All rights reserved</span>
      </div>
    </footer>
  );
};

export default memo(Footer);
