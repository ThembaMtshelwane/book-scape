import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoSearch, IoClose } from "react-icons/io5";
import { Book, genres } from "../../../definitions";
import { LoaderFunctionArgs, useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

interface SearchMechanismsProps {
  searchedItem: Book;
  setSearchedItem: (books: Book) => void;
  setSearchOptions: (books: Book[]) => void;
}

const SearchMechanisms = ({
  searchedItem,
  setSearchedItem,
  setSearchOptions,
}: SearchMechanismsProps) => {
  const [filterToggle, setFilterToggle] = useState<boolean>(true);
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSearchOptions = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchedItem({
      id: "",
      title: e.target.value,
      authors: "",
      description: "",
      imageUrl: "",
    });
    if (e.target.value.trim() === "") {
      setSearchOptions([]);
      return;
    }

    try {
      // const genreQueries = selectedGenres
      //   .map((genre) => `subject:${genre}`)
      //   .join(" OR ");
      // const query = `${e.target.value}${selectedGenres.length ? `+(${genreQueries})` : ""}`;
      // const res = await fetch(
      /*
        const genreQueries = selectedGenres.map(genre => `subject:${genre}`).join(" OR ");
        const query = `${e.target.value}${selectedGenres.length ? `+(${genreQueries})` : ""}`;
       */

      //   `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${
      //     import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
      //   }`
      // );
      // const data = await res.json();

      // const books = data.items.map((item: any) => ({
      //   id: item.id,
      //   title: item.volumeInfo.title,
      //   authors: item.volumeInfo.authors || [],
      //   description: item.volumeInfo.description || "",
      //   imageUrl: item.volumeInfo.imageLinks?.thumbnail || "",
      // }));

      const response = await fetch(
        `https://openlibrary.org/search.json?q=${e.target.value}`
      );
      const data = await response.json();

      const books = data.docs.map((item: any) => ({
        id: item.key.split("/").pop() || "unknown",
        title: item.title,
        authors: item.author_name || [],
        description: item.first_sentence
          ? item.first_sentence.join(" ")
          : "No description available",
        imageUrl: item.cover_i
          ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
          : "",
      }));

      setSearchOptions(books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchOptions([]);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData) as {
      [key: string]: FormDataEntryValue;
    };
    console.log("added payload", payload);
    const genreQueries = selectedGenres
      .map((genre) => `subject:${genre}`)
      .join(" OR ");

    navigate(`/books/${payload.searchString}/${genreQueries}`);
  };

  return (
    <form onSubmit={handleSearchItem}>
      <section>
        <input
          type="text"
          value={searchedItem.title}
          name="searchString"
          placeholder="Search for books"
          onChange={handleSearchOptions}
          required
        />
        <button>
          <IoSearch />
        </button>
      </section>
      <section>
        {filterToggle ? (
          <CiFilter
            onClick={() => setFilterToggle((prevState) => !prevState)}
          />
        ) : (
          <section>
            <section>
              <IoClose
                onClick={() => setFilterToggle((prevState) => !prevState)}
              />
            </section>
            <Multiselect
              options={genres}
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onRemove={function noRefCheck(selected) {
                setSelectedGenres(selected);
              }}
              onSearch={function noRefCheck() {}}
              onSelect={function noRefCheck(selected) {
                setSelectedGenres(selected);
              }}
              selectedValues={selectedGenres}
            />
          </section>
        )}
      </section>
    </form>
  );
};

const resultsLoader = async ({ params }: LoaderFunctionArgs) => {
  try {
    //   `https://www.googleapis.com/books/v1/volumes?q=${params.searchString}${params.geners}&key=${
    //     import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
    //   }`
    // );
    // const data = await res.json();

    // const books = data.items.map((item: any) => ({
    //   id: item.id,
    //   title: item.volumeInfo.title,
    //   authors: item.volumeInfo.authors || [],
    //   description: item.volumeInfo.description || "",
    //   imageUrl: item.volumeInfo.imageLinks?.thumbnail || "",
    // }));

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${params.searchString}`
    );
    const data = await response.json();

    const books: Book[] = data.docs.map((item: any) => ({
      id: item.key.split("/").pop() || "unknown",
      title: item.title,
      authors: item.author_name || [],
      description: item.first_sentence
        ? item.first_sentence.join(" ")
        : "No description available",
      imageUrl: item.cover_i
        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
        : "",
    }));

    return books;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { SearchMechanisms as default, resultsLoader };
