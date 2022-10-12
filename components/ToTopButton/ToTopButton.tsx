import { memo } from "react";

const ToTopButton = () => {
  return (
    <div className='mt-20 text-center'>
      <a
        className='hover:text-yellow-300 cursor-pointer px-3 py-5 italic '
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        맨 위로가기 ⬆️⬆️
      </a>
    </div>
  );
};

export default memo(ToTopButton);
