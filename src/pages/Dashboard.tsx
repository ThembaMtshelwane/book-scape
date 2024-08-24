import { Link } from "react-router-dom";
import Books from "../components/Books/Books";
import Spinner from "../components/Spinners/Spinner";
import { useBooks } from "../components/context/BooksContext";

const Dashboard = () => {
  const { allBooks, allLoading } = useBooks();
  const latestBooks = allBooks.slice(0.8);
  console.log("latestBooks", latestBooks);

  return (
    <section className="border-2 w-full min-h-screen flex flex-col items-center py-10 ">
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
        </>
      )}
    </section>
  );
};

export default Dashboard;
