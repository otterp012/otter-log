import Layout from "components/layout/layout";

const BlogDetail = () => {
  return (
    <Layout>
      <section className='px-5'>
        <div className='flex items-end justify-between'>
          <h2 className='text-3xl max-w-[80%] break-all md:text-5xl'>
            NEXT로 블로그 만들기
          </h2>
          <time className='font-bold text-xs text-gray-300'>2022.08.10</time>
        </div>

        <div className=''>
          {/*  img */}
          <img src='test1.jpeg' alt='test' className='w-[60%] mx-auto mt-5' />
        </div>

        <div className='mt-10 break-words'>
          text..
          12312321312321312312312312312312312321312321312321312312312312321312312321321.213213123123312321312321
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
