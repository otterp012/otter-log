import "../styles/globals.css";
import { Fragment } from "react";

import type { AppProps } from "next/app";
import DefaultMeta from "components/meta/defaultMeta";
import Layout from "components/layout";
import useSavedScroll from "hooks/useSavedScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useSavedScroll();
  return (
    <Fragment>
      <DefaultMeta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;

// react - @types/React 버전이 맞지않으면 생기는 오류
// Component cannot be used as a JSX component in React
