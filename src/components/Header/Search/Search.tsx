import { useState } from "react";
import { Book } from "../../../definitions";
import { SearchMechanisms } from "./SearchMechanisms";
import { ShowSearchOptions } from "./ShowSearchOptions";

const Search = () => {
  const [searchedItem, setSearchedItem] = useState<string>("");
  const [searchOptions, setSearchOptions] = useState<Book[]>([]);

  const editedSearchOptionsResults: Book[] = searchOptions
    .filter((item: Book) =>
      item.title.toLowerCase().includes(searchedItem.toLowerCase())
    )
    .slice(0, 5);

  return (
    <section>
      <SearchMechanisms
        searchedItem={searchedItem}
        setSearchedItem={setSearchedItem}
        setSearchOptions={setSearchOptions}
      />
      <section>
        {searchedItem && (
          <ShowSearchOptions
            searchOptions={editedSearchOptionsResults}
            setSearchedItem={setSearchedItem}
          />
        )}
      </section>
    </section>
  );
};

export default Search;
