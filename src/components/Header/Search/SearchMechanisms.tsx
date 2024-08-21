import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoSearch, IoClose } from "react-icons/io5";
import { Book } from "../../../definitions";

interface SearchMechanismsProps {
  searchedItem: string;
  setSearchedItem: (item: string) => void;
  setSearchOptions: (books: Book[]) => void;
}

export const SearchMechanisms = ({
  searchedItem,
  setSearchedItem,
  setSearchOptions,
}: SearchMechanismsProps) => {
  const [filterToggle, setFilterToggle] = useState<boolean>(true);

  const handleSearchOptions = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchedItem(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchOptions([]);
      return;
    }
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=${
          import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
        }`
      );
      const data = await res.json();

      const books = data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || [],
        description: item.volumeInfo.description || "",
      }));

      setSearchOptions(books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchItem = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSearchItem}>
      <section>
        <input
          type="text"
          value={searchedItem}
          name="searchedItem"
          placeholder="Search for books"
          onChange={handleSearchOptions}
        />
        <button type="submit">
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
            <ul>
              <li>
                <label htmlFor="option1">Option 1</label>
                <input type="radio" id="option1" name="filterOption" />
              </li>
              <li>
                <label htmlFor="option2">Option 2</label>
                <input type="radio" id="option2" name="filterOption" />
              </li>
              <li>
                <label htmlFor="option3">Option 3</label>
                <input type="radio" id="option3" name="filterOption" />
              </li>
            </ul>
          </section>
        )}
      </section>
    </form>
  );
};
