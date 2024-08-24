import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoSearch, IoClose } from "react-icons/io5";
import { Book, genres } from "../../../definitions";
import { LoaderFunctionArgs, useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

interface SearchMechanismsProps {
  searchedItem: Book;
  setSearchedItem: (books: Book) => void;
  setSearchOptions: (books: Book[]) => void;
  setDropdownVisible: (bool: boolean) => void;
}

const SearchMechanisms = ({
  searchedItem,
  setSearchedItem,
  setSearchOptions,
  setDropdownVisible,
}: SearchMechanismsProps) => {
  const [filterToggle, setFilterToggle] = useState<boolean>(true);
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Handle debouncing of search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchedItem.title);
    }, 500); // 500ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [searchedItem.title]);

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      handleSearchOptions(debouncedSearchTerm);
    } else {
      setSearchOptions([]);
    }
  }, [debouncedSearchTerm]);

  const handleSearchOptions = async (text: string) => {
    setDropdownVisible(true);
    const inputText = text.trim().toLocaleLowerCase();
    console.log(inputText);

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
        `https://openlibrary.org/search.json?q=${inputText}&limit=5`
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
      console.log("search options", books);

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
    const genreQueries = selectedGenres.map((genre) => genre).join("&");

    navigate(
      `/results/${payload.searchString}${
        genreQueries ? `/${genreQueries}` : ""
      }`
    );
  };

  return (
    <form
      onSubmit={handleSearchItem}
      className="flex flex-col justify-center h-[70%] sm:w-[80%] md:w-[90%] max-w-[750px]"
    >
      <section className="border-2 border-yellowGreen w-full flex rounded-xl">
        <input
          className="w-full p-5 rounded-tl-[inherit] rounded-bl-[inherit] hover:scale-[1.005]"
          type="text"
          value={searchedItem.title}
          name="searchString"
          placeholder="Search for books"
          onChange={(e) => {
            setSearchedItem({
              ...searchedItem,
              title: e.target.value,
            });
          }}
          required
        />
        <button className="text-white text-3xl flex  items-center justify-center hover:bg-yellowGreen hover:scale-105 rounded-tr-[inherit] rounded-br-[inherit] w-[80px]">
          <IoSearch className="" />
        </button>
      </section>
      <section className=" ">
        {filterToggle ? (
          <CiFilter
            className=" text-white text-3xl ml-auto my-5 mr-5 hover:scale-105 hover:text-yellowGreen "
            onClick={() => setFilterToggle((prevState) => !prevState)}
          />
        ) : (
          <section className="relative">
            <section>
              <IoClose
                className="text-white text-3xl ml-auto my-5 mr-5 hover:scale-105 hover:text-yellowGreen"
                onClick={() => setFilterToggle((prevState) => !prevState)}
              />
            </section>
            <Multiselect
              className="absolute z-20 text-textColour bg-backgroundColour hover:scale-[1.005] "
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
