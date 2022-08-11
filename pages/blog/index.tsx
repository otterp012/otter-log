import Card from "components/card/card";
import Layout from "components/layout/layout";

const Blog = () => {
  return (
    <Layout>
      <form className='w-[80%] mx-auto'>
        <label htmlFor='search' />
        <input
          id='search'
          type='text'
          className='w-full h-14 focus:outline-none mx-auto px-5 py-5'
          placeholder='검색할 내용을 입력해 주세요.'
        />
      </form>
      <div className='px-3'>
        <h2 className='text-4xl pt-5 italic'>BLOG...</h2>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className='bg-blue-500 px-3 py-2 w-[50%] mx-auto mt-5 text-xl italic hover:bg-black'>
        더보기
      </button>
    </Layout>
  );
};

export default Blog;
