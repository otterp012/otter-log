import { useEffect, useRef } from "react";
import { useDarkModeContext } from "store";

import { COMMENT_ATTRS } from "constants/constants";

export const Comment = () => {
  const commentsRef = useRef<HTMLElement>(null);
  const { themeIsDark } = useDarkModeContext();
  const themeMode = themeIsDark ? "github-dark" : "github-light";
  const utterancesSelector = "iframe.utterances-frame";

  const createUtterancesEl = () => {
    if (!commentsRef.current) return;
    const comment = document.createElement("script");

    Object.entries(COMMENT_ATTRS).forEach(([key, value]) => {
      comment.setAttribute(key, value);
    });
    comment.setAttribute("theme", themeMode);
    commentsRef.current.appendChild(comment);
  };

  useEffect(() => {
    if (!commentsRef.current) return;
    const utterancesEl = commentsRef.current.querySelector(
      utterancesSelector,
    ) as HTMLIFrameElement;

    const postThemeMessage = () => {
      const message = {
        type: "set-theme",
        theme: themeMode,
      };

      utterancesEl.contentWindow!.postMessage(message, "https://utteranc.es");
    };

    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [themeIsDark]);

  return <section ref={commentsRef} className='max-w-[740px]' />;
};
