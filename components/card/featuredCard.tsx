const FeaturedCard = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='h-full'>
        {/* <Image
        src='/test5.jpeg'
        alt='test'
        layout='fill'
        objectFit='cover'
        className='w-[420px] h-[420px] md:h-[560px]'
      /> */}
        <img
          src='test5.jpeg'
          alt='test'
          className='object-cover w-full h-[420px] md:h-[560px]'
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
  );
};

export default FeaturedCard;
