import Books from "../components/Books/Books";
import { Book, maxNumberOfBooksPerPage } from "../definitions";

import Spinner from "../components/Spinners/Spinner";
import { PaginationUI } from "../components/PaginationUI";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBooks } from "../components/context/BooksContext";

const LatestBooks = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { allBooks, allLoading } = useBooks();
  const latestBooks = allBooks;
  const { id } = useParams<{ id: string }>();
  const [paginatedBooks, setPaginatedBooks] = useState<Book[]>([]);
  const pageNumber = Number(id);
  const MAX_PAGE_COUNT = Math.ceil(
    latestBooks.length / maxNumberOfBooksPerPage
  );

  // Debugging logs
  console.log("latestBooks", latestBooks);
  console.log("pageNumber", pageNumber);
  console.log("MAX_PAGE_COUNT", MAX_PAGE_COUNT);

  useEffect(() => {
    setLoading(true);
    const validPageNumber = Math.max(1, Math.min(pageNumber, MAX_PAGE_COUNT));
    const startIndex = (validPageNumber - 1) * maxNumberOfBooksPerPage;
    const endIndex = Math.min(
      startIndex + maxNumberOfBooksPerPage,
      latestBooks.length
    );

    console.log("sliced", latestBooks.slice(startIndex, endIndex));
    setPaginatedBooks(latestBooks.slice(startIndex, endIndex));
    setLoading(false);
  }, [latestBooks, pageNumber, MAX_PAGE_COUNT]);

  if (loading) {
    <>What the hell</>;
  }

  return (
    <section className="border-2 w-full min-h-screen flex flex-col items-center py-10 relative gap-10">
      <h1 className="text-3xl uppercase my-5">latest books</h1>
      {allLoading ? (
        <section>
          <p className="text-yellowGreen text-3xl md:text-5xl">
            Loading latest books...
          </p>
          <Spinner loading={allLoading} />
        </section>
      ) : (
        <>
          <PaginationUI maxPageCount={MAX_PAGE_COUNT} path={"latest-books"} />
          <Books books={paginatedBooks} />
          <PaginationUI maxPageCount={MAX_PAGE_COUNT} path={"latest-books"} />
        </>
      )}
    </section>
  );
};

export default LatestBooks;
