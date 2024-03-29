import { useState, useEffect, useRef } from "react";

const useToc = () => {
  const [visibleList, setVisibleList] = useState("");
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const headingTags = document.querySelectorAll("h3, h4");
    observer.current = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -25% 0px",
    });
    headingTags.forEach((tag) => observer.current?.observe(tag));

    return () => observer.current?.disconnect();
  }, [visibleList]);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleList(entry.target.id);
      }
    });
  };

  return { visibleList };
};

export default useToc;
