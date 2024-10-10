import { Link } from "react-router-dom";
import Books from "../components/Books/Books";
import Spinner from "../components/Spinners/Spinner";
import { useBooks } from "../components/context/BooksContext";

const Dashboard = () => {
  const { allBooks, allLoading } = useBooks();
  const latestBooks = allBooks.slice(0.8);
  console.log("latestBooks", latestBooks);

  return (
    <section className="min-h-screen flex items-center justify-center">
      {allLoading ? (
        <section className="border-2">
          <p className="text-yellowGreen text-3xl md:text-5xl mb-10">
            Loading latest books...
          </p>
          <Spinner loading={allLoading} />
        </section>
      ) : (
        <section className="min-h-screen grid grid-rows-[4fr_minmax(80vh,_auto)_1fr]">
          <h1 className="text-4xl md:text-6xl uppercase my-5 place-content-center text-center">
            latest books
          </h1>
          <Books books={latestBooks.slice(0, 8)} />
          <Link
            to="/latest-books/1"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-center py-2 px-5 my-2 mx-auto button "
          >
            More
          </Link>
        </section>
      )}
    </section>
  );
};

export default Dashboard;
