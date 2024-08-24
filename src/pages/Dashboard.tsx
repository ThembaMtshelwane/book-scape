import { Link } from "react-router-dom";
import Books from "../components/Books/Books";
import { useLatestBooks } from "../components/context/LatestBooksContext";
import Spinner from "../components/Spinners/Spinner";

const Dashboard = () => {
  const { latestBooks, lastestLoading } = useLatestBooks();
  console.log("latestBooks", latestBooks);

  return (
    <section className="border-2 w-full min-h-screen flex flex-col items-center py-10 ">
      <h1 className="text-3xl uppercase my-5">latest books</h1>
      {lastestLoading ? (
        <section>
          <p className="text-yellowGreen text-3xl md:text-5xl">
            Loading latest books...
          </p>
          <Spinner loading={lastestLoading} />
        </section>
      ) : (
        <>
          {" "}
          <Books books={latestBooks.slice(0, 8)} />
          <Link
            to="/latest-books/1"
            className="text-center py-2 px-5 my-2 mx-auto border-2 border-blue-800 "
          >
            More
          </Link>
        </>
      )}
    </section>
  );
};

export default Dashboard;
