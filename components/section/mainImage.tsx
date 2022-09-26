import Image from "next/future/image";

type Props = {
  thumbnailImg: string;
  title: string;
};

const MainImage: React.FC<Props> = ({ thumbnailImg, title }) => {
  return (
    <div className='mx-auto mt-5 h-[200px] w-[70%] md:h-[420px]'>
      <Image
        src={thumbnailImg}
        alt={title}
        className='h-full w-full object-cover'
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default MainImage;
