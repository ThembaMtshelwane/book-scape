import { useLoaderData, useNavigate } from "react-router-dom";
import Books from "../components/Books/Books";
import { Book, maxNumberOfBooksPerPage } from "../definitions";
import { useBooks } from "../components/context/BooksContext";

const LatestBooks = () => {
  const latestBooks = useLoaderData() as Book[];
  const navigate = useNavigate();
  const { allBooks, loading, error } = useBooks();
  console.log("allBooks", allBooks);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // const MAX_PAGE_COUNT = latestBooks.length / maxNumberOfBooksPerPage; // = 400/20
  const MAX_PAGE_COUNT2 = allBooks.length / maxNumberOfBooksPerPage; // = 400/20
  const handleRouting = (index: number) => {
    navigate(`/latest-books/${index}`);
  };

  return (
    <>
      <h1 className="text-3xl uppercase my-5">latest books</h1>
      <ul className="flex border-2 border-black my-2">
        {[...Array(MAX_PAGE_COUNT2)].map((_, i) => (
          <li
            key={i}
            className="border-2 border-black m-2 py-2 px-4 cursor-pointer"
            onClick={() => handleRouting(i + 1)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <Books books={allBooks} />
    </>
  );
};

export default LatestBooks;
