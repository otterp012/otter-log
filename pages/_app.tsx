import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { Fragment } from "react";
import CustomMeta from "components/customMeta";
import useSavedScroll from "hooks/useSavedScroll";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useSavedScroll();
  return (
    <Fragment>
      <Head>
        <title>otter-log</title>
        <meta
          name='description'
          content='프론트엔드를 공부하는 otter의 기록들'
        />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:site_name' content='otter | frontend || writer' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
