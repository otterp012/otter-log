import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
};

const SEO = (props: SEOProps) => {
  const { title, description, url, imageUrl } = props;
  const computedTitle = title === "오터 로그" ? title : `${title} | 오터 로그`;

  return (
    <Head>
      <title>{computedTitle}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='author' content='otter' />
      <meta name='description' content={description} />

      <meta property='og:url' content={`https://otter-log.world${url}`} />
      <meta property='og:title' content={computedTitle} />
      <meta property='og:description' content={description} />

      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:alt' content='오터로그 이미지' />
      <meta property='og:type' content='article' />
      <meta property='og:locale' content='ko_KR' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={computedTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />

      <link rel='canonical' href={`https://otter-log.world${url}`} />
    </Head>
  );
};

export default SEO;
