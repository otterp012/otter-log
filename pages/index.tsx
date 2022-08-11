import Layout from "components/layout/layout";
import type { NextPage } from "next";
import Image from "next/image";
import FeaturedCard from "components/card/featuredCard";
import Card from "components/card/card";
const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <FeaturedCard />
        {/* RECENT post */}
        <div className='mt-10 w-full px-3'>
          <h2 className='font-bold text-3xl text-center italic'>
            RECENT POSTS
          </h2>

          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default Home;
