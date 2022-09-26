import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
function saveIntersectionCount(key: string, count: number) {
  sessionStorage.setItem(key, JSON.stringify(count));
}
const useInfiniteScroll = (
  initialDisplayedLen: number,
  maxDisplayedLen: number,
  increasedByIntersecting: number,
  targetRef: RefObject<Element>,
) => {
  const [len, setLen] = useState(initialDisplayedLen);
  const router = useRouter();
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

  useEffect(() => {
    function onRouteChangeStart() {
      saveIntersectionCount("test2", len);
    }

    router.events.on("routeChangeStart", onRouteChangeStart);

    return () => router.events.off("routeChangeStart", onRouteChangeStart);
  }, [router, len]);

  return { len };
};

export default useInfiniteScroll;
