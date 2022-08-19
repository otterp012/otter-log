import { RefObject, useEffect, useRef, useState } from "react";

const useInfiniteScroll = (
  initialDisplayedLen: number,
  maxDisplayedLen: number,
  increasedByIntersecting: number,
  targetRef: RefObject<Element>,
) => {
  const [len, setLen] = useState(initialDisplayedLen);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    targetRef.current && observer.current.observe(targetRef.current);

    return () => observer.current && observer.current.disconnect();
  }, []);

  useEffect(() => {
    if (!targetRef.current) return;
    if (len > maxDisplayedLen) observer.current?.unobserve(targetRef.current);
  }, [len, maxDisplayedLen]);

  const intersectionObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setLen((prev) => prev + increasedByIntersecting);
      }
    });
  };

  return { len };
};

export default useInfiniteScroll;
