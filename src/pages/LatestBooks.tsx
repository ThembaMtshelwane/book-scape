import { useLoaderData } from "react-router-dom";
import Books from "../components/Books/Books";
import { Book, maxNumberOfBooksPerPage } from "../definitions";
import { useBooks } from "../components/context/BooksContext";
import { PaginationUI } from "../components/Pagination";

const LatestBooks = () => {
  // const latestBooks = useLoaderData() as Book[];

  const { allBooks, loading, error } = useBooks();
  console.log("allBooks", allBooks);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // const MAX_PAGE_COUNT = latestBooks.length / maxNumberOfBooksPerPage; // = 400/20
  const MAX_PAGE_COUNT2 = Math.ceil(allBooks.length / maxNumberOfBooksPerPage); // = 400/20

  return (
    <>
      <h1 className="text-3xl uppercase my-5">latest books</h1>
      <PaginationUI maxPageCount={MAX_PAGE_COUNT2} />
      <Books books={allBooks} />
    </>
  );
};

export default LatestBooks;
