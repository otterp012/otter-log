import { useRouter } from "next/router";
import { FILTER_OPTIONS } from "constants/constants";

const FilterOptions = () => {
  return (
    <div className='mt-2 mb-5 flex flex-wrap'>
      {FILTER_OPTIONS.map((option) => (
        <FilterOption value={option} key={option} />
      ))}
    </div>
  );
};

const FilterOption = (props: any) => {
  const { value } = props;
  const router = useRouter();
  const { filterBy } = router.query;

  const nextQuery = {
    pathname: "/post",
    query: {
      filterBy: filterBy === value ? undefined : value,
    },
  };

  const handleClick = () => {
    router.push(nextQuery, undefined, { shallow: true });
  };
  return (
    <span
      className={`border border-l-0 px-3 py-2 text-sm font-bold italic first:border-l md:text-lg ${
        filterBy && filterBy === value && "bg-deepGray"
      }`}
      onClick={handleClick}
    >
      {value.toUpperCase()}
    </span>
  );
};

export default FilterOptions;
