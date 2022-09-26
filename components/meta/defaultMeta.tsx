import Head from "next/head";

const DefaultMeta = () => {
  return (
    <Head>
      <title>otter-log</title>
      <meta name='description' content='프론트엔드를 공부하는 otter의 기록들' />
      <meta property='og:locale' content='ko_KR' />
      <meta property='og:site_name' content='otter | frontend || writer' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
    </Head>
  );
};

export default DefaultMeta;
