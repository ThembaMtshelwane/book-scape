import { Link, useLoaderData } from "react-router-dom";
import Books from "../components/Books/Books";
import { Book } from "../definitions";

const Dashboard = () => {
  const latestBooks = useLoaderData() as Book[];
  return (
    <>
      <h1 className="text-3xl uppercase my-5">latest books</h1>
      <Books books={latestBooks} />
      <Link
        to="/latest-books/1"
        className="text-center py-2 px-5 my-2 mx-auto border-2 border-blue-800  ml-auto md:mr-5"
      >
        More
      </Link>
    </>
  );
};

export default Dashboard;
