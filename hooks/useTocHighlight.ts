import { useState, useEffect, useRef } from "react";

const useTocHighLight = () => {
  const [visibleList, setVisibleList] = useState("");
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const headingTags = document.querySelectorAll("h2, h3");
    observer.current = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -35% 0px",
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

export default useTocHighLight;
