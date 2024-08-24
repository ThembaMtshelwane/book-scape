import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoSearch, IoClose } from "react-icons/io5";
import { Book, genres } from "../../../definitions";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { useBooks } from "../../context/BooksContext";
import { useLatestBooks } from "../../context/LatestBooksContext";
import { computeMatchScore, deduplicateBooks } from "../../../utils";

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
  const MAX_NUMBER_OF_OPTIONS = 5;
  const [filterToggle, setFilterToggle] = useState<boolean>(true);
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const { allBooks } = useBooks();
  const { latestBooks } = useLatestBooks();
  const books = deduplicateBooks([...latestBooks, ...allBooks]);

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
  }, [debouncedSearchTerm, selectedGenres]);

  const handleSearchOptions = async (text: string) => {
    setDropdownVisible(true);
    const inputText = text.trim().toLocaleLowerCase();
    console.log(inputText);

    try {
      const filteredBooks = books
        .filter((book) => {
          const titleLowerCase = book.title.toLocaleLowerCase();
          const matchesText =
            titleLowerCase.includes(inputText) ||
            titleLowerCase.startsWith(inputText);

          const matchesGenre =
            selectedGenres.length === 0 ||
            selectedGenres.some((genre) => book.genres?.includes(genre));

          return matchesText && matchesGenre;
        })
        .sort((a, b) => {
          const aTitleLowerCase = a.title.toLocaleLowerCase();
          const bTitleLowerCase = b.title.toLocaleLowerCase();

          // Compute scores based on matches
          const scoreA = computeMatchScore(aTitleLowerCase, inputText);
          const scoreB = computeMatchScore(bTitleLowerCase, inputText);

          return scoreB - scoreA; // Sort in descending order (higher score first)
        });

      setSearchOptions(filteredBooks.slice(0, MAX_NUMBER_OF_OPTIONS));
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
      }/1`
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
      <section className="w-[50%] ml-auto ">
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

export default SearchMechanisms;
