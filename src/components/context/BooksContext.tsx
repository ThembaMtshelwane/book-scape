import React, { createContext, useContext, useEffect, useState } from "react";
import { Book } from "../../definitions";

interface BooksContextType {
  allBooks: Book[];
  allLoading: boolean;
  error: string | null;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [allLoading, setAllLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  /***********   Open Library  *********** */
  // useEffect(() => {
  //   const fetchBooksData = async () => {
  //     try {
  //       const allBooksResponse = await fetch(
  //         `https://openlibrary.org/search.json?q=e&sort=new&limit=400&language=eng`
  //       );
  //       if (!allBooksResponse.ok) {
  //         throw new Error("Failed to fetch all books");
  //       }
  //       const allBooksData = await allBooksResponse.json();
  //       const allBooksArray = allBooksData.docs.map((book: any) => ({
  //         id: book.key.split("/").pop() || "unknown",
  //         title: book.title,
  //         imageUrl: book.cover_i
  //           ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
  //           : null,
  //         authors: book.author_name ? book.author_name.join(", ") : "Unknown",
  //         description: book.first_sentence
  //           ? book.first_sentence.join(" ")
  //           : book.description
  //           ? typeof book.description === "string"
  //             ? book.description
  //             : book.description.value
  //           : book.subtitle
  //           ? book.subtitle
  //           : book.notes
  //           ? book.notes
  //           : book.excerpt
  //           ? book.excerpt
  //           : "No description available",
  //       }));

  //       setAllBooks(allBooksArray);

  //       setAllLoading(false);
  //     } catch (error) {
  //       setError("Cannot fetch book data");
  //       console.log(error);
  //       setAllLoading(false);
  //     }
  //   };

  //   fetchBooksData();
  // }, []);

  /***********   Google API  *********** */
  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const booksPerRequest = 40; // Google Books API limit per request
        const totalBooksToFetch = 400;
        const totalRequests = Math.ceil(totalBooksToFetch / booksPerRequest);

        let allBooksArray: Book[] = [];
        for (let i = 0; i < totalRequests; i++) {
          const startIndex = i * booksPerRequest;
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=book&startIndex=${startIndex}&maxResults=${booksPerRequest}&key=${
              import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
            }`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch books");
          }

          const data = await response.json();
          const books = data.items.map((book: any) => ({
            id: book.id,
            title: book.volumeInfo.title,
            imageUrl: book.volumeInfo.imageLinks?.thumbnail || null,
            authors: book.volumeInfo.authors?.join(", ") || "Unknown",
            description:
              book.volumeInfo.description || "No description available",
            publishedDate: book.volumeInfo.publishedDate,
          }));

          allBooksArray = [...allBooksArray, ...books];
        }

        // Now you can work with the `allBooksArray`
        setAllBooks(allBooksArray);
        setAllLoading(false);
      } catch (error) {
        setError("Cannot fetch book data");
        console.log(error);
        setAllLoading(false);
      }
    };

    fetchBooksData();
  }, []);

  return (
    <BooksContext.Provider value={{ allBooks, allLoading, error }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);
  if (context === undefined) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
