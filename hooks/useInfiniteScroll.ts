import { RefObject, useEffect, useRef, useState } from "react";

const useInfiniteScroll = (
  initialDisplayedLen: number,
  maxDisplayedLen: number,
  increasedByIntersecting: number,
  targetRef: RefObject<Element>,
) => {
  const [len, setLen] = useState(initialDisplayedLen);

  const observer = useRef<IntersectionObserver>();
  const target = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    targetRef.current && observer.current.observe(targetRef.current);

    return () => observer.current && observer.current.disconnect();
  }, []);

  useEffect(() => {
    if (!target.current) return;
    if (len > maxDisplayedLen) observer.current?.unobserve(target.current);
  }, [len, maxDisplayedLen]);

  const intersectionObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("isInterSection..");
        setLen((prev) => prev + increasedByIntersecting);
      }
    });
  };

  return { len };
};

export default useInfiniteScroll;
