// Using Data loader ith OpenLibrary //

import { maxNumberOfBooksPerPage, Book } from "./definitions";

export const latestBooksLoader = async () => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=e&sort=new&limit=${maxNumberOfBooksPerPage}&language=eng`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const latestBooksData = await response.json();

    const latestBooks: Book[] = latestBooksData.docs.map((book: any) => ({
      id: book.key.split("/").pop() || "unknown",
      title: book.title,
      image: book.cover_i
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
    return latestBooks;
  } catch (error) {
    console.error("Error fetching latest books:", error);
  }
};

export const allBooksLoader = async () => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=e&sort=new&limit=${40}&language=eng`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const latestBooksData = await response.json();

    const latestBooks: Book[] = latestBooksData.docs.map((book: any) => ({
      id: book.key.split("/").pop() || "unknown",
      title: book.title,
      image: book.cover_i
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
    return latestBooks;
  } catch (error) {
    console.error("Error fetching latest books:", error);
  }
};

//  Uisng for Context for Google API
/*
Get
*/
const getRecent_8_books = `https://www.googleapis.com/books/v1/volumes?q=books&orderBy=newest&maxResults=8&key=${
  import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
}`;
export const fetchBooksFromAPI = async (
  startIndex: number,
  maxResults: number
) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=&startIndex=${startIndex}&maxResults=${maxResults}&key=${
      import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
    }`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
};
