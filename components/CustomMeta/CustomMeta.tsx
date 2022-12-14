import Head from "next/head";

type props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  seo?: string[];
};

const CustomMeta: React.FC<props> = ({
  title,
  description,
  url,
  image,
  seo,
}) => {
  const DEFAULT_META_CONTENT = "otter : fronted";

  return (
    <Head>
      <title>{`otter-log : ${title}` || "otter-log"}</title>
      <meta name='description' content={description || DEFAULT_META_CONTENT} />
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
        content={description || DEFAULT_META_CONTENT}
      />
      <meta
        property='og:description'
        content={description || DEFAULT_META_CONTENT}
      />
      {seo?.map((item) => (
        <meta property='article:tag' content={item} key={item} />
      ))}
    </Head>
  );
};

export default CustomMeta;
