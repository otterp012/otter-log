import { CustomLink } from "components/CustomLink";
import { BOOKS_INFO } from "constants/constants";
import { BookMetaData } from "types/types";

export const BookLists = ({
  filteredBooks,
}: {
  filteredBooks: BookMetaData[];
}) => {
  return (
    <ol className='space-y-3'>
      {filteredBooks.map((item: BookMetaData) => (
        <BookList key={item.id} {...item} />
      ))}
    </ol>
  );
};

const BookList = (props: BookMetaData) => {
  const { title, formattedDate, description, name, slug } = props;

  return (
    <li className='group cursor-pointer'>
      <CustomLink href={{ pathname: `/book/${slug}` }}>
        <h3 className='md:text-3x text-xl font-bold'>{title}</h3>
        <span className='text-md block max-w-[80%]'>{description}</span>
        <span className='font-semibold'>
          {BOOKS_INFO.find((info) => info.id === name)?.title}
        </span>
        <span className='ml-2 text-right text-sm'>{formattedDate}</span>
      </CustomLink>
    </li>
  );
};
