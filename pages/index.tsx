// components
import { Cards, SEO } from "components";
import { getAllPublished } from "lib/notion";
import { MetaData } from "types/types";

const Home = ({ recent }: { recent: MetaData[] }) => {
  return (
    <>
      <SEO {...DEFAULT_SEO} />
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

const DEFAULT_SEO = {
  title: "오터 로그",
  description:
    "프론트엔드를 공부하는 오터의 기록입니다. Javascript, React, Next와 단위테스트를 위주로 공부하고 있습니다.",
  url: "",
  imageUrl:
    "https://res.cloudinary.com/ddzuhs646/image/upload/v1675164645/blog/daa778c3-734e-4d57-bca7-7e067dffbb9d/daa778c3734e4d57bca77e067dffbb9d.jpg",
};
