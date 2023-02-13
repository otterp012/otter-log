// components
import { Cards, SEO } from "components";
import { getAllPublished } from "lib/notion";
import { MetaData } from "types/types";
const Home = ({ recent }: { recent: MetaData[] }) => {
  return (
    <>
      <SEO />
      <span className='mb-10 inline-block w-full text-center text-3xl font-bold italic'>
        RECENT POSTS
      </span>
      <Cards posts={recent} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getAllPublished("post");
  const recent = data.slice(0, 6);
  return {
    props: {
      recent,
    },
    revalidate: 60,
  };
};
