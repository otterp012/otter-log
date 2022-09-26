import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

const useSavedScroll = () => {
  const router = useRouter();

  const scrollPositions = useRef<{ [url: string]: number }>({});
  const isBack = useRef(false);

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true;
      console.log("beforePopState");
      // router.beforePopState의 콜백함수는
      // 뒤로가기가 실행되기 이전에 동작한다.
      return true;
    });

    const onRouteChangeStart = () => {
      const url = router.pathname;
      scrollPositions.current[url] = window.scrollY;
    };

    // router change가 시작될때 실행되는 함수

    const onRouteChangeComplete = (url: any) => {
      if (isBack.current) {
        window.scroll({
          top: scrollPositions.current[url],
          behavior: "auto",
        });
      }

      isBack.current = false;
    };
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router]);
};

export default useSavedScroll;
