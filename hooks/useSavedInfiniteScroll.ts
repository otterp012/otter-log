import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useSessionStorage from "./useSessionStorage";

const useSavedInfiniteScroll = (
  initialDisplayedLen: number,
  maxDisplayedLen: number,
  increasedByIntersecting: number,
  targetRef: RefObject<Element>,
  sessionStorageKey: string,
) => {
  const router = useRouter();
  const observer = useRef<IntersectionObserver>();

  const {
    storedValue: storedValueInSession,
    setValue: setSessionStorageValue,
  } = useSessionStorage(sessionStorageKey, initialDisplayedLen);
  const [len, setLen] = useState(storedValueInSession);

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
    if (!targetRef.current) return;
    if (len > maxDisplayedLen) observer.current?.unobserve(targetRef.current);
  }, [len, maxDisplayedLen, targetRef]);

  useEffect(() => {
    const onRouteChangeStart = () => {
      setSessionStorageValue(len);
    };

    router.events.on("routeChangeStart", onRouteChangeStart);

    return () => router.events.off("routeChangeStart", onRouteChangeStart);
  }, [router, len, setSessionStorageValue]);

  return { len };
};

export default useSavedInfiniteScroll;
