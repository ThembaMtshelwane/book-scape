import React, { createContext, useContext, useState } from "react";
import { Book } from "../../definitions";

interface SearchResultsContextType {
  resultBooks: Book[];
  setResultBooks: (books: Book[]) => void;
}

const SearchResultsContext = createContext<
  SearchResultsContextType | undefined
>(undefined);

export const SearchResultsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [resultBooks, setResultBooks] = useState<Book[]>([]);

  return (
    <SearchResultsContext.Provider value={{ resultBooks, setResultBooks }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export const useSearchResults = () => {
  const context = useContext(SearchResultsContext);
  if (context === undefined) {
    throw new Error(
      "useSearchResults must be used within a SearchResultsProvider"
    );
  }
  return context;
};
