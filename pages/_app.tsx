import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import Head from "next/head";
import { Fragment } from "react";
import CustomMeta from "components/customMeta";

function MyApp({ Component, pageProps }: AppProps) {
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
