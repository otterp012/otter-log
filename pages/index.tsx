import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className='flex flex-col w-full md:max-w-[780px] mt-2 md:mt-10'>
        <div className='h-full'>
          <img
            src='test5.jpeg'
            alt='test'
            className='object-contain w-full max-h-[420px]'
          />
        </div>

        <div className='px-5 flex flex-col items-end mt-3 md:items-center'>
          <div className='text-right md:text-center mb-2'>
            <time className='text-sm text-gray-400 font-bold'>2022.07.22</time>
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
      <div className='mt-10 px-10 w-full'>
        <h2 className='font-bold text-3xl mb-5 text-center'>RECENT POSTS</h2>

        <div className='w-full h-60 flex border-t pt-5 mt-5'>
          <div className='w-[40%] h-full'>
            <img src='test5.jpeg' className='w-full h-full object-contain' />
          </div>

          <div className='h-full w-[60%] ml-5'>
            {/* text */}
            <div className='h-[70%]'>
              <div className='h-[60%] mb-4'>
                <time className='text-sm font-bold text-gray-400'>
                  2022.08.10.
                </time>
                <h3 className='text-2xl font-bold break-all line-clamp-2'>
                  리액트 오류 수정하기 그리고 어쩌구 저쩌구
                </h3>
              </div>
              <p className='break-all line-clamp-2 text-md'>
                next로 블로그를 만들면서 느꼈던 점 그리고 어쩌구 저ㄱ쩌구 오고
              </p>
            </div>
            <div className='min-h-[20%] mt-5 mb-5'>
              <span className='px-3 py-2 bg-slate-300 rounded-lg mr-3 text-md font-semibold'>
                #javascript
              </span>
              <span className='px-3 py-2 bg-slate-300 rounded-lg mr-3 text-md font-semibold'>
                #react
              </span>
            </div>
          </div>
        </div>

        <div className='w-full h-60 flex border-t pt-5 mt-5'>
          <div className='w-[40%] h-full flex items-center justify-center'>
            <img src='test1.jpeg' className='w-full h-full object-contain' />
          </div>

          <div className='h-full w-[60%] ml-5'>
            {/* text */}
            <div className='h-[70%]'>
              <div className='h-[60%] mb-4'>
                <time className='text-sm font-bold text-gray-400'>
                  2022.08.10.
                </time>
                <h3 className='text-2xl font-bold break-all line-clamp-2'>
                  리액트 오류 수정하기 그리고 어쩌구 저쩌구
                </h3>
              </div>
              <p className='break-all line-clamp-2 text-md'>
                next로 블로그를 만들면서 느꼈던 점 그리고 어쩌구 저ㄱ쩌구 오고
              </p>
            </div>
            <div className='min-h-[20%] mt-5 mb-5'>
              <span className='px-3 py-2 bg-slate-300 rounded-lg mr-3 text-md font-semibold'>
                #javascript
              </span>
              <span className='px-3 py-2 bg-slate-300 rounded-lg mr-3 text-md font-semibold'>
                #react
              </span>
            </div>
          </div>
        </div>

        {/* <div className='w-full md:min-w-[780px] flex flex-wrap md:flex-col bg-red-500'>
          <div className='w-[50%] min-h-50 bg-blue-300 md:flex'>
            <div className='h-[70%]'>
              <img
                src='test1.jpeg'
                alt='test'
                className='w-full h-60 object-contain'
              />
            </div>
            <div className='px-5 py-3 text-right'>
              <time className='text-sm text-gray-500 font-bold'>
                2022.08.10.
              </time>
              <h3 className='text-lg font-semibold break-words line-clamp-2 leading-4'>
                리액트 오류 정리하기 123123123
              </h3>
            </div>
          </div>

          <div className='w-[50%] min-h-50 bg-blue-300 md:flex'>
            <div className='h-[70%]'>
              <img
                src='test2.jpeg'
                alt='test'
                className='w-full h-60 object-contain'
              />
            </div>
            <div className='px-5 py-3 text-right'>
              <time className='text-sm text-gray-500 font-bold'>
                2022.08.10.
              </time>
              <h3 className='text-lg font-semibold break-words line-clamp-2 leading-4'>
                리액트 오류 정리하기 123123123
              </h3>
            </div>
          </div>
        </div> */}

        <button>더보기</button>
      </div>
    </>
  );
};

export default Home;
