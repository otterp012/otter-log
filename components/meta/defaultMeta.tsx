import Head from "next/head";

const DefaultMeta = () => {
  return (
    <Head>
      <title>otter-log</title>
      <meta name='description' content='프론트엔드를 공부하는 otter의 기록들' />
      <meta property='og:locale' content='ko_KR' />
      <meta property='og:site_name' content='otter | frontend || writer' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1'
      />
      {/* <meta name='viewport' content='user-scalable=0;' />
      <meta content='yes' name='apple-mobile-web-app-capable' />
      <meta
        content='minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no'
        name='viewport'
      /> */}
    </Head>
  );
};

export default DefaultMeta;
