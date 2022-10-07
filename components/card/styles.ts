export const CardStyles = {
  verticalCard: {
    section:
      "h-30 md:h-53 mt-5 flex w-full border-b border-gray-300 dark:border-gray-600 pb-5 last:border-none md:px-5",
    image:
      "mx-auto h-[150px] min-w-[150px] object-cover md:h-[240px] md:w-[240px]",
    textWrapper:
      "ml-5 flex min-h-full min-w-[55%] flex-col justify-around md:py-1",
    textUpperWrapper: "mb-3 min-h-[60%] md:min-h-[30%]",
    description: "w-[90%] text-sm text-gray-500 line-clamp-2 md:mt-8",
    title: "text-md font-bold line-clamp-2 hover:text-yellow-300 md:text-2xl",
  },
  featuredCard: {
    section: "",
    image:
      "mx-auto h-[60vh] w-full border-b border-gray-700 object-scale-down hover:cursor-pointer md:h-[75vh] md:w-[80%] md:h-[70vh]",
    textWrapper: "mt-3 flex flex-col items-end px-5 md:items-center",
    textUpperWrapper: "mb-2 text-right md:text-center",
    description:
      "w-[60%] text-right text-sm text-gray-400 line-clamp-2 md:text-center",
    title: "text-4xl font-semibold hover:text-yellow-300",
  },
};

// todo 이부분 어떻게 좀 하기
