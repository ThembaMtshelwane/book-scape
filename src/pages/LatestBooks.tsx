import { useNavigate } from "react-router-dom";
import Books from "../components/Books";
import { maxNumberOfBooksLatest } from "../definitions";

const LatestBooks = () => {
  const navigate = useNavigate();
  const MAX_PAGE_COUNT = 10; // A max of 20*10 = 200 Books
  const handleRouting = (index: number) => {
    navigate(`/latest-books/${index}`);
  };

  return (
    <>
      <h1 className="text-3xl uppercase my-5">latest books</h1>
      <ul className="flex border-2 border-black my-2">
        {[...Array(MAX_PAGE_COUNT)].map((_, i) => (
          <li
            key={i}
            className="border-2 border-black m-2 py-2 px-4 cursor-pointer"
            onClick={() => handleRouting(i + 1)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <Books maxNumberOfBooks={maxNumberOfBooksLatest} />
    </>
  );
};

export default LatestBooks;
