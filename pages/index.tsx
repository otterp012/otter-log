import Layout from "components/layout/layout";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='flex flex-col w-full md:max-w-[780px] mt-2 md:mt-10'>
          <div className='h-full'>
            <img
              src='test4.jpeg'
              alt='test'
              className='object-cover w-full h-[420px]'
            />
          </div>

          <div className='px-5 flex flex-col items-end mt-3 md:items-center'>
            <div className='text-right md:text-center mb-2'>
              <time className='text-sm text-gray-400 font-bold'>
                2022.07.22
              </time>
              <h2 className='text-4xl break-words font-semibold'>
                NEXT로 블로그 만들기
              </h2>
            </div>
            <p className='break-all text-sm md:text-center w-[60%] text-right text-gray-400 line-clamp-2'>
              12312312312312312312312312312312312321312312323143241
            </p>
          </div>
        </div>

        {/* RECENT post */}
        <div className='mt-10 px-1 w-full'>
          <h2 className='font-bold text-3xl mb-5 text-center italic'>
            RECENT POSTS
          </h2>

          <div className='w-full h-30 flex border-t pt-5 mt-5'>
            <img
              src='test5.jpeg'
              alt='test'
              className='object-cover w-[120px] h-[120px]'
            />

            <div className='min-h-full w-[60%] ml-5 bg-red-500'>
              <div className='min-h-[50%] mb-3'>
                <time className='text-xs font-bold text-gray-400'>
                  2022.08.10.
                </time>
                <h3 className='text-md font-bold break-all line-clamp-2'>
                  리액트 오류 수정하기 그리고 어쩌구 저쩌구
                </h3>
              </div>
              <p className='break-all line-clamp-2 text-sm'>
                next로 블로그를 만들면서 느꼈던 점 그리고 어쩌구 저ㄱ쩌구 오고
              </p>
            </div>
          </div>

          {/*  */}

          <div className='w-full h-30 flex border-t pt-5 mt-5'>
            <img
              src='test1.jpeg'
              alt='test'
              className='object-cover w-[120px] h-[120px]'
            />

            <div className='min-h-full w-[60%] ml-5 bg-red-500'>
              <div className='min-h-[50%] mb-3'>
                <time className='text-xs font-bold text-gray-400'>
                  2022.08.10.
                </time>
                <h3 className='text-md font-bold break-all line-clamp-2'>
                  한줄짜리
                </h3>
              </div>
              <p className='break-all line-clamp-2 text-sm'>한줄보기</p>
            </div>
          </div>
          {/* <div className='w-full h-60 flex border-t pt-5 mt-5'>
            <div className='w-[40%] h-full'>
              <img src='test5.jpeg' className='w-full h-full object-cover' />
            </div>

            <div className='h-full w-[60%] ml-5'>
              <div className='h-[70%]'>
                <div className='h-[60%] mb-4'>
                  <time className='text-sm font-bold text-gray-400'>
                    2022.08.10.
                  </time>
                  <h3 className='text-lg font-bold break-all line-clamp-2'>
                    리액트 오류 수정하기 그리고 어쩌구 저쩌구
                  </h3>
                </div>
                <p className='break-all line-clamp-2 text-md'>
                  next로 블로그를 만들면서 느꼈던 점 그리고 어쩌구 저ㄱ쩌구 오고
                </p>
              </div>
              <div className='min-h-[20%] mt-5 mb-5'>
                <span className='px-3 py-2 bg-slate-300 rounded-lg mr-3 text-sm font-semibold'>
                  #javascript
                </span>
                <span className='px-3 py-2 bg-slate-300 rounded-lg mr-3 text-sm font-semibold'>
                  #react
                </span>
              </div>
            </div>
          </div> */}

          <button>더보기</button>
        </div>
      </Layout>
    </>
  );
};

export default Home;
