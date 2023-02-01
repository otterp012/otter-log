import * as Select from "@over-ui/select";
import { useRouter } from "next/router";

// todo - 이어서 Select 컴포넌트 활용하기.

const FilterSelect = (props: any) => {
  const { filterOptions } = props;

  const router = useRouter();
  const { filterBy } = router.query;

  return (
    <Select.Root
      className='relative'
      defaultSelected={filterBy}
      onSelectChange={(value: string) => {
        router.push(
          {
            pathname: "/post",
            query: { filterBy: value },
          },
          undefined,
          { shallow: true },
        );
      }}
    >
      <Select.Trigger className=''>
        <span className='border px-3 py-2 text-lg font-semibold hover:bg-dark-card'>
          FILTERED BY
        </span>
        {filterBy && (
          <span className='border border-l-0 bg-pink px-3 py-2 text-lg font-semibold'>
            {filterBy}
          </span>
        )}
      </Select.Trigger>
      <Select.Options className='absolute flex w-48 translate-x-2 translate-y-4 flex-col rounded-md bg-deepGray shadow-lg md:left-auto'>
        {filterOptions.map((option: string) => (
          <Select.Option key={option} value={option}>
            {({ active }) => {
              {
                return (
                  <span
                    className={`block py-1 px-5 first:rounded-t-md hover:bg-light-card dark:hover:bg-dark-card ${
                      active && `bg-light-card  dark:bg-dark-card `
                    }`}
                  >
                    {option}
                  </span>
                );
              }
            }}
          </Select.Option>
        ))}
      </Select.Options>
    </Select.Root>
  );
};

export default FilterSelect;
