import { useLoaderData, useParams } from "react-router-dom";
import { allBooks, Book } from "../definitions";
import Books from "../components/Books/Books";
import SubHeader from "../components/SubHeader";

export const SearchResults = () => {
  // const results = useLoaderData() as Book[];
  const results = allBooks;
  const { searchItem, genres } = useParams<{
    searchItem: string;
    genres: string;
  }>();
  console.log(results);
  const searchedGenres = genres?.split("&");
  console.log("searchedGenres", searchedGenres);
  return (
    <section className="flex flex-col items-center justify-center my-10">
      <SubHeader subheading="Results" />
      <section className="w-[95%] mb-5 p-5 flex flex-col sm:flex-row sm:w-[60%] sm:justify-between">
        <p className="text-xl">
          <span className="font-bold text-xl capitalize"> Searched for:</span>{" "}
          <span className="font-bold text-xl capitalize">{searchItem}</span>
        </p>
        <section className="flex">
          <p className="text-xl">
            <span className="font-bold mr-2 text-xl">Genres:</span>
          </p>

          <ul className="flex">
            {searchedGenres?.map((genre) => {
              return <li>{genre}, </li>;
            })}
          </ul>
        </section>
      </section>

      <Books books={results} />
    </section>
  );
};
