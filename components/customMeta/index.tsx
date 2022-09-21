import Head from "next/head";

type props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

const CustomMeta: React.FC<props> = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "otter-log"}</title>
      <meta name='description' content={description || "otter : fronted"} />
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
    </Head>
  );
};

export default CustomMeta;
