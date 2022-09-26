import "../styles/globals.css";
import { Fragment } from "react";

import type { AppProps } from "next/app";

import Layout from "components/layout";
import DefaultMeta from "components/meta/defaultMeta";

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
