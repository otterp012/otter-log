import Head from "next/head";

type props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  tags?: string[];
};

const CustomMeta: React.FC<props> = ({
  title,
  description,
  url,
  image,
  tags,
}) => {
  return (
    <Head>
      <title>{`otter-log : ${title}` || "otter-log"}</title>
      <meta name='description' content={description || "otter : fronted"} />
      <meta property='og:locale' content='ko_KR' />
      <meta property='og:site_name' content='otter | frontend || writer' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta
        property='og:title'
        content={`otter-log: ${title}` || "otter-log"}
      />
      <meta property='og:type' content='article' />
      <meta
        property='og:url'
        content={`http://otter-log.world/${url}` || "http://otter-log.world"}
      />
      <meta property='og:image' content={image} />
      <meta
        property='og:image:alt'
        content={description || "otter : fronted"}
      />
      <meta
        property='og:description'
        content={description || "otter : fronted"}
      />
    </Head>
  );
};

export default CustomMeta;
