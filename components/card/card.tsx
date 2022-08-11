const Card = () => {
  return (
    <div className='w-full h-30 flex border-b mt-5 pb-5 md:h-53 last:border-none'>
      <img
        src='test5.jpeg'
        alt='test'
        className='object-cover w-[120px] h-[120px] md:w-48 md:h-48'
      />

      <div className='min-h-full ml-5 md:py-1'>
        <div className='min-h-[50%] mb-3'>
          <time className='text-xs font-bold text-gray-400 md:text-lg'>
            2022.08.10.
          </time>
          <h3 className='text-md font-bold break-all line-clamp-2 md:text-4xl'>
            리액트 오류 수정하기 그리고
          </h3>
        </div>
        <p className='break-all line-clamp-2 text-sm md:text-xl md:mt-8'>
          next로 블로그를 만들면서 느꼈던 점 그리고 어쩌구 저ㄱ쩌구 오고
        </p>
      </div>
    </div>
  );
};

export default Card;
