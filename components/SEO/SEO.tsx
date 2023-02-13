import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
};

export const SEO = (props: SEOProps) => {
  const {
    title = "오터 로그",
    description = "프론트엔드를 공부하는 오터의 기록입니다. Javascript, React, Next와 단위테스트를 위주로 공부하고 있습니다.",
    url = "",
    imageUrl = "https://res.cloudinary.com/ddzuhs646/image/upload/v1675164645/blog/daa778c3-734e-4d57-bca7-7e067dffbb9d/daa778c3734e4d57bca77e067dffbb9d.jpg",
  } = props;
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
