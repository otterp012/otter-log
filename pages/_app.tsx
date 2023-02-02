import "../styles/globals.css";
import { Fragment } from "react";

import type { AppProps } from "next/app";

import { AppLayout } from "components";
import useSavedScroll from "hooks/useSavedScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useSavedScroll();
  return (
    <Fragment>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Fragment>
  );
}

export default MyApp;
