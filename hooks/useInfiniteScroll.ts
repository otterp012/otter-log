import { RefObject, useCallback, useEffect, useRef, useState } from "react";

const useInfiniteScroll = (
  initialDisplayedLen: number,
  maxDisplayedLen: number,
  increasedByIntersecting: number,
  targetRef: RefObject<Element>,
) => {
  const [len, setLen] = useState(initialDisplayedLen);
  const observer = useRef<IntersectionObserver>();

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLen((prev) => prev + increasedByIntersecting);
        }
      });
    },
    [increasedByIntersecting],
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(callback);
    targetRef.current && observer.current.observe(targetRef.current);

    return () => observer.current && observer.current.disconnect();
  }, [targetRef, callback]);

  useEffect(() => {
    sessionStorage.setItem("test", String(len));
    if (!targetRef.current) return;
    if (len > maxDisplayedLen) observer.current?.unobserve(targetRef.current);
  }, [len, maxDisplayedLen, targetRef]);

  return { len };
};

export default useInfiniteScroll;
