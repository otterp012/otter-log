import { useEffect, useRef } from "react";
import { useDarkModeContext } from "store";

export const Comment = () => {
  const commentsRef = useRef<HTMLElement>(null);
  const { themeIsDark } = useDarkModeContext();
  const THEME_MODE = themeIsDark ? "github-dark" : "github-light";
  const utterancesSelector = "iframe.utterances-frame";

  const createUtterancesEl = () => {
    if (!commentsRef.current) return;
    const comment = document.createElement("script");
    const attributes = {
      src: `https://utteranc.es/client.js`,
      repo: "otterp012/otter-log",
      "issue-term": "pathname",
      label: "comment",
      theme: THEME_MODE,
      crossOrigin: "anonymous",
      async: "true",
    };
    Object.entries(attributes).forEach(([key, value]) => {
      comment.setAttribute(key, value);
    });
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
        theme: THEME_MODE,
      };

      utterancesEl.contentWindow!.postMessage(message, "https://utteranc.es");
    };

    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [themeIsDark]);

  return <section ref={commentsRef} className='max-w-[740px]' />;
};
