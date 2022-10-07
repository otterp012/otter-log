import "../styles/globals.css";
import { Fragment } from "react";

import type { AppProps } from "next/app";
// import DefaultMeta from "components/Meta/DefaultMeta";
import { AppLayout } from "components";
import useSavedScroll from "hooks/useSavedScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useSavedScroll();
  return (
    <Fragment>
      {/* <DefaultMeta /> */}
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Fragment>
  );
}

export default MyApp;

// react - @types/React 버전이 맞지않으면 생기는 오류
// Component cannot be used as a JSX component in React
