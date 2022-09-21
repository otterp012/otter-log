import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>otter-log</title>
        <meta
          name='description'
          content={
            "프론트엔드를 공부하고 있는 오터입니다. 궁금한 것도 좋아하는 것도 많아요!"
          }
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
