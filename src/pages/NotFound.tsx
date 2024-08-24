import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-[100vh] bg-textColour flex flex-col items-center justify-center">
      <section className=" h-[30%] w-[80%] max-w-[450px] flex flex-col justify-around items-center">
        <section>
          <h1 className="text-4xl sm:text-6xl text-center">Error 404</h1>
          <p className="text-yellowGreen  sm:text-2xl my-2">
            Sorry, page not found
          </p>
        </section>

        <Link
          to="/dashboard"
          className="button py-2 px-4 w-[150px] text-textColour font-bold"
        >
          Go Home
        </Link>
      </section>
    </section>
  );
};

export default NotFound;
