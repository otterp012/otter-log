import { scrollTopHandler } from "lib/utils";
import { memo } from "react";

export const ToTopButton = memo(() => {
  return (
    <a
      className='hidden w-full cursor-pointer rounded-md pl-5 text-left text-sm hover:bg-deepGray lg:block'
      onClick={scrollTopHandler}
    >
      맨 위로 가기
    </a>
  );
});

ToTopButton.displayName = "ToTopButton";
