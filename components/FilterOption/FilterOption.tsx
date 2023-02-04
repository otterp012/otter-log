import { useRouter } from "next/router";
import { FILTER_OPTIONS } from "constants/constants";
import { CustomLink } from "components/CustomLink";

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
  const router = useRouter();
  const { filterBy } = router.query;
  const { value } = props;

  const nextQuery = {
    pathname: "/post",
    query: {
      filterBy: filterBy === value ? undefined : value,
    },
  };

  return (
    <CustomLink
      href={nextQuery}
      shallow={true}
      className='`cursor-pointer ${ filterBy && filterBy === value && "bg-deepGray" border border-l-0 px-3
      py-2 text-sm font-bold italic first:border-l hover:bg-deepGray md:text-lg'
    >
      {value.toUpperCase()}
    </CustomLink>
  );
};

export default FilterOptions;
