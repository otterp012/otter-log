import { memo } from "react";

const ToTopButton = () => {
  return (
    <button
      className='text-md hidden w-full rounded-md pl-5 text-left hover:bg-deepGray lg:block'
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      맨 위로 가기
    </button>
  );
};
export default memo(ToTopButton);
