import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { Fragment } from "react";
import CustomMeta from "components/customMeta";
import useSavedScroll from "hooks/useSavedScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useSavedScroll();
  return (
    <Fragment>
      <CustomMeta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
