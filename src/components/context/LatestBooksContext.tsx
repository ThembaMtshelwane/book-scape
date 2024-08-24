import React, { createContext, useContext, useEffect, useState } from "react";
import { Book } from "../../definitions";

interface LatestBooksContextType {
  latestBooks: Book[];
  lastestLoading: boolean;
  error: string | null;
}

const LatestBooksContext = createContext<LatestBooksContextType | undefined>(
  undefined
);

export const LatestBooksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [latestBooks, setLatestBooks] = useState<Book[]>([]);
  const [lastestLoading, setlastestLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  /***********   Open Library  *********** */
  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const latestBooksResponse = await fetch(
          `https://openlibrary.org/search.json?q=e&sort=new&limit=40&language=eng`
        );
        if (!latestBooksResponse.ok) {
          throw new Error("Failed to fetch latest books");
        }
        const latestBooksData = await latestBooksResponse.json();
        const latestBooksArray = latestBooksData.docs.map((book: any) => ({
          id: book.key.split("/").pop() || "unknown",
          title: book.title,
          imageUrl: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : null,
          authors: book.author_name ? book.author_name.join(", ") : "Unknown",
          description: book.first_sentence
            ? book.first_sentence.join(" ")
            : book.description
            ? typeof book.description === "string"
              ? book.description
              : book.description.value
            : book.subtitle
            ? book.subtitle
            : book.notes
            ? book.notes
            : book.excerpt
            ? book.excerpt
            : "No description available",
        }));
        setLatestBooks(latestBooksArray);

        setlastestLoading(false);
      } catch (error) {
        setError("Cannot fetch latest books");
        console.log(error);
        setlastestLoading(false);
      }
    };

    fetchBooksData();
  }, []);

  /***********   Google API  *********** */
  // useEffect(() => {
  //   const fetchBooksData = async () => {
  //     try {
  //       const booksPerRequest = 40; // Google Books API limit per request
  //       const totalBooksToFetch = 400;
  //       const totalRequests = Math.ceil(totalBooksToFetch / booksPerRequest);

  //       let allBooksArray: Book[] = [];
  //       for (let i = 0; i < totalRequests; i++) {
  //         const startIndex = i * booksPerRequest;
  //         const data = await fetchBooksFromAPI(startIndex, booksPerRequest);
  //         const books = data.items.map((book: any) => ({
  //           id: book.id,
  //           title: book.volumeInfo.title,
  //           imageUrl: book.volumeInfo.imageLinks?.thumbnail || null,
  //           authors: book.volumeInfo.authors?.join(", ") || "Unknown",
  //           description:
  //             book.volumeInfo.description || "No description available",
  //           publishedDate: book.volumeInfo.publishedDate,
  //         }));
  //         allBooksArray = [...allBooksArray, ...books];
  //       }

  //       // Sort books by publication date
  //       allBooksArray.sort((a, b) => {
  //         if (!a.publishedDate || !b.publishedDate) return 0;
  //         return (
  //           new Date(b.publishedDate).getTime() -
  //           new Date(a.publishedDate).getTime()
  //         );
  //       });

  //       // Set the sorted books
  //       setAllBooks(allBooksArray);

  //       // Take the first 8 recent books
  //       setLatestBooks2(allBooksArray.slice(0, 8));

  //       setLoading(false);
  //     } catch (error) {
  //       setError("Cannot fetch book data");
  //       console.log(error);

  //       setLoading(false);
  //     }
  //   };

  //   fetchBooksData();
  // }, []);

  return (
    <LatestBooksContext.Provider value={{ latestBooks, lastestLoading, error }}>
      {children}
    </LatestBooksContext.Provider>
  );
};

export const useLatestBooks = () => {
  const context = useContext(LatestBooksContext);
  if (context === undefined) {
    throw new Error("useLatestBooks must be used within a BooksProvider");
  }
  return context;
};
