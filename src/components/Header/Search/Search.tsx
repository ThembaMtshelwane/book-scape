import { useState } from "react";
import { Book } from "../../../definitions";

import { ShowSearchOptions } from "./ShowSearchOptions";
import SearchMechanisms from "./SearchMechanisms";

const Search = () => {
  const [searchedItem, setSearchedItem] = useState<Book>({
    id: "",
    title: "",
    authors: "",
    description: "",
    imageUrl: "",
  });
  const [searchOptions, setSearchOptions] = useState<Book[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(true);

  const editedSearchOptionsResults: Book[] = searchOptions
    .filter((item: Book) =>
      item.title.toLowerCase().startsWith(searchedItem.title.toLowerCase())
    )
    .concat(
      searchOptions.filter(
        (item: Book) =>
          !item.title
            .toLowerCase()
            .startsWith(searchedItem.title.toLowerCase()) &&
          item.title.toLowerCase().includes(searchedItem.title.toLowerCase())
      )
    )
    .slice(0, 5);

  return (
    <section className="flex flex-col justify-center sm:items-center">
      <SearchMechanisms
        searchedItem={searchedItem}
        setSearchedItem={setSearchedItem}
        setSearchOptions={setSearchOptions}
        setDropdownVisible={setDropdownVisible}
      />
      <section className="border-2 border-red-400 relative w-full  sm:w-[80%] md:w-[90%] max-w-[750px] bg-backgroundColour">
        {searchedItem && (
          <ShowSearchOptions
            isDropdownVisible={isDropdownVisible}
            setDropdownVisible={setDropdownVisible}
            searchOptions={editedSearchOptionsResults}
            setSearchedItem={setSearchedItem}
          />
        )}
      </section>
    </section>
  );
};

export default Search;
