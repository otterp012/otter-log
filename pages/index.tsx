// components
import { Cards } from "components";
import { getAllPublished } from "lib/notion";
import { MetaData } from "types/types";

const Home = ({ recent }: { recent: MetaData[] }) => {
  return (
    <>
      <h2 className='mb-10 inline-block w-full text-center text-3xl font-bold italic'>
        RECENT POSTS
      </h2>
      <Cards posts={recent} />
    </>
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
