import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <section className="flex flex-col items-center h-full my-10">
      <SubHeader subheading="About Us" />
      <section className="flex flex-col my-5 items-center sm:flex-row sm:items-center border-2 border-yellowGreen">
        <img
          src="/logo.jpg"
          alt=""
          className="h-[450px] object-cover object-center w-full sm:w-[50%] sm:h-full sm:max-h-screen"
        />

        <section className="p-3 w-[90%]  flex flex-col gap-3 sm:ml-4  sm:justify-center sm:items-center sm:w-[50%] sm:h-full md:w-[550px]">
          <h2 className="text-4xl mb-7">BookScape</h2>
          <section className="w-[90%] text-justify ">
            <p className="my-2">
              BookScape is a book website designed to provide users with a rich
              experience for discovering and managing books. The key features
              include:
            </p>
            <ul className="ml-4 flex flex-col my-2">
              <li className="font-primary text-textColour ">
                • Dashboard: Displays the latest books.
              </li>
              <li className="font-primary  text-textColour">
                • Latest Books Page: Shows additional recent book releases.
              </li>
              <li className="font-primary  text-textColour">
                • Search and Filter: Allows users to search for books by name
                and filter by genre
              </li>
            </ul>
            <p> This website uses the Google Books API.</p>

            <Link
              to="https://github.com/ThembaMtshelwane/book-scape"
              target="_blank"
            >
              <p className="border-b-4 w-fit border-yellowGreen my-2">
                For more updates on the website
              </p>
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
