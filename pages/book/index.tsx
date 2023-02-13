import { BookSelect, BookLists, SEO } from "components";
import { useRouter } from "next/router";
import { getAllPublished } from "lib/notion";
import { BookMetaData } from "types/types";

const Books = ({ books }: { books: BookMetaData[] }) => {
  const router = useRouter();

  const { filteredBy } = router.query;
  const filteredBooks = books.filter(({ name }) => {
    if (!filteredBy) return true;
    return name === filteredBy;
  });

  const recentBooks = filteredBy
    ? filteredBooks.sort((a, b) => a.chap - b.chap)
    : filteredBooks.slice(0, 10);

  return (
    <>
      <SEO
        title='독서기록장'
        description='단위테스트, 모던 자바스크립트 Deep Dive를 주로 읽고 있습니다.'
        url='/book'
      />
      <div className='mb-5 flex flex-col md:flex-row-reverse md:items-center md:justify-between'>
        <h2 className='text-2xl font-bold italic'>RECENT BOOKS & TILS</h2>
        <BookSelect />
      </div>
      <BookLists filteredBooks={recentBooks} />
    </>
  );
};

export default Books;

export const getStaticProps = async () => {
  const books = await getAllPublished("book");

  return {
    props: {
      books,
    },
    revalidate: 60,
  };
};
