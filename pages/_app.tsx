import "../styles/globals.css";
import { Fragment } from "react";

import type { AppProps } from "next/app";

import { AppLayout } from "components";
import { DarkModeProvider } from "store";
import useSavedScroll from "hooks/useSavedScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useSavedScroll();
  return (
    <Fragment>
      <DarkModeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </DarkModeProvider>
    </Fragment>
  );
}

export default MyApp;
