import { Link } from "react-router-dom";
import Books from "../components/Books";

const Dashbaord = () => {
  return (
    <>
      <h1 className="text-3xl uppercase my-5">latest books</h1>
      <Books numberOfItems={8} />
      <Link
        to="/latest-books"
        className="border-2 border-blue-800 py-2 px-4 my-2 ml-auto mr-5"
      >
        More
      </Link>
    </>
  );
};

export default Dashbaord;
