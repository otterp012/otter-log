import { Fragment } from "react";

// components
import { Card } from "components";
import { getAllPublished } from "lib/notion";
import { MetaData } from "types/types";

const Home = ({ recent }: { recent: MetaData[] }) => {
  return (
    <Fragment>
      <span className='mb-10 inline-block w-full text-center text-3xl font-bold italic'>
        RECENT POSTS
      </span>
      <ul className='flex flex-wrap gap-2'>
        {recent.map((post) => (
          <Card
            title={post.title}
            slug={post.slug}
            thumbnailImg={post.cover}
            description={post.description}
            publishedAt={post.date}
            key={post.title}
            tags={post.tags}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  const DATA_BASE_ID = process.env.DATABASE_ID as string;
  const data = await getAllPublished(DATA_BASE_ID);
  const recent = data.slice(0, 6);
  return {
    props: {
      recent,
    },
    revalidate: 60,
  };
};
