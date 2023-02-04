import { CustomLink } from "components/CustomLink";
import { ABLE_FILTER_OPTIONS } from "constants/constants";

type Props = {
  tags: string[];
};

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <>
      {tags &&
        tags.map((tag) => {
          return (
            <CustomLink
              key={tag}
              className='cursor-pointer rounded-sm px-3 py-2 font-semibold hover:bg-deepGray'
              href={{
                pathname: "/post",
                query: {
                  filterBy: ABLE_FILTER_OPTIONS.includes(tag) ? tag : "others",
                },
              }}
            >
              #{tag}
            </CustomLink>
          );
        })}
    </>
  );
};

export default Tags;
