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
  console.log(searchedGenres);
  return (
    <section className="flex flex-col items-center my-10">
      <SubHeader subheading=" Search Results..." />
      <section className="w-[95%] my-5">
        <p>
          <span className="font-bold"> Searched for:</span> {searchItem}{" "}
        </p>
        <section className="flex">
          <p>
            <span className="font-bold mr-2">Genres:</span>
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
