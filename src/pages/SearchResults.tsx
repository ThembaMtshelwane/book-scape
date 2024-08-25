import { useParams } from "react-router-dom";
import { Book, maxNumberOfBooksPerPage } from "../definitions";
import Books from "../components/Books/Books";
import SubHeader from "../components/SubHeader";
import { PaginationUI } from "../components/PaginationUI";
import filterAndSortBooks, { computeMatchScore } from "../utils";
import { useBooks } from "../components/context/BooksContext";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinners/Spinner";

export const SearchResults = () => {
  const { allBooks } = useBooks();
  const [loading, setLoading] = useState<boolean>(true);
  const [paginatedBooks, setPaginatedBooks] = useState<Book[]>([]);
  const [maxCount, setMaxCount] = useState<number>(0);
  const { searchItem, genres, id } = useParams<{
    searchItem: string;
    genres: string;
    id: string;
  }>();
  const pageNumber = Number(id);
  const searchedGenres = genres ? genres.split("&") : [];

  useEffect(() => {
    if (!searchItem) return;
    console.log("text", searchItem);
    console.log("genresArray", searchedGenres);
    console.log("pageNumber", pageNumber);

    setLoading(true);
    const filteredBooksResult = filterAndSortBooks(allBooks, {
      inputText: searchItem,
      selectedGenres: searchedGenres,
    });
    setMaxCount(
      Math.ceil(filteredBooksResult.length / maxNumberOfBooksPerPage)
    );
    const validPageNumber = Math.max(1, Math.min(pageNumber, maxCount));
    const startIndex = (validPageNumber - 1) * maxNumberOfBooksPerPage;
    const endIndex = Math.min(
      startIndex + maxNumberOfBooksPerPage,
      filteredBooksResult.length
    );

    setPaginatedBooks(filteredBooksResult.slice(startIndex, endIndex));
    setLoading(false);
  }, [searchItem, genres, id, allBooks]);

  return (
    <section className="flex flex-col items-center justify-center my-10">
      <SubHeader subheading="Results" />
      {loading ? (
        <section>
          <p>Loading search results...</p>
          <Spinner loading={loading} />
        </section>
      ) : (
        <>
          <PaginationUI
            path={`results/${searchItem}/${genres}/`}
            maxPageCount={maxCount}
          />
          <section className="w-[95%] mb-5 p-5 flex flex-col sm:flex-row sm:w-[60%] sm:justify-between">
            <p className="text-xl">
              <span className="font-bold text-xl capitalize">
                {" "}
                Searched for:
              </span>{" "}
              <span className="font-bold text-xl capitalize">{searchItem}</span>
            </p>
            <section className="flex">
              <p className="text-xl">
                <span className="font-bold mr-2 text-xl">Genres:</span>
              </p>

              <ul className="flex">
                {searchedGenres?.map((genre, index) => (
                  <li key={index}>
                    {genre}
                    {index < searchedGenres.length - 1 ? ", " : ""}
                  </li>
                ))}
              </ul>
            </section>
          </section>{" "}
          <Books books={paginatedBooks} />
        </>
      )}
    </section>
  );
};
