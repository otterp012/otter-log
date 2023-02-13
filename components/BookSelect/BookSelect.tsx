import * as Select from "@over-ui/select";
import { useRouter } from "next/router";
import { BOOKS_INFO } from "constants/constants";

export const BookSelect = () => {
  const router = useRouter();

  const handleQuery = (selected: string) => {
    router.push({
      pathname: "book",
      query: {
        filteredBy: selected as string,
      },
    });
  };

  return (
    <Select.Root onSelectChange={handleQuery}>
      <Select.Label hidden>FILTERED BY</Select.Label>
      <Select.Trigger className='text-xl font-semibold'>
        {({ selectedValue }) => (
          <span>
            {BOOKS_INFO.find(({ id }) => id === selectedValue)?.title ??
              "FILTERED BY"}
          </span>
        )}
      </Select.Trigger>
      <Select.Options className='absolute flex w-48 translate-y-2 cursor-pointer flex-col  bg-dark-card text-white shadow-lg dark:bg-lightGray dark:text-black'>
        <Select.Option
          value=''
          className='px-2 py-2 hover:bg-dark-bg dark:hover:bg-light-text'
        >
          선택하세요
        </Select.Option>
        {BOOKS_INFO.map(({ id, title }) => (
          <Select.Option
            key={id}
            value={id}
            className='px-2 py-2 hover:bg-dark-bg dark:hover:bg-light-text'
          >
            {title}
          </Select.Option>
        ))}
      </Select.Options>
    </Select.Root>
  );
};
