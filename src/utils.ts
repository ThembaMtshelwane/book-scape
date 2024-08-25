import { Book } from "./definitions";

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

export const computeMatchScore = (title: string, searchText: string) => {
  let score = 0;

  if (title.startsWith(searchText)) {
    score += 3; // High score for exact starts with match
  } else if (title.includes(searchText)) {
    score += 2; // Medium score for includes match
  }

  return score;
};

type FilterOptions = {
  inputText: string;
  selectedGenres: string[];
};

export const filterAndSortBooks = (
  books: Book[],
  { inputText, selectedGenres }: FilterOptions
): Book[] => {
  const inputLowerCase = inputText.trim().toLowerCase();

  return books
    .filter((book) => {
      const titleLowerCase = book.title.toLowerCase();
      const matchesText =
        titleLowerCase.includes(inputLowerCase) ||
        titleLowerCase.startsWith(inputLowerCase);

      const matchesGenre =
        selectedGenres.length === 0 ||
        selectedGenres.some((genre) =>
          book.genres?.some((bookGenre) =>
            bookGenre.toLowerCase().includes(genre.toLowerCase())
          )
        );

      return matchesText && matchesGenre;
    })
    .sort((a, b) => {
      const aTitleLowerCase = a.title.toLowerCase();
      const bTitleLowerCase = b.title.toLowerCase();

      const scoreA = computeMatchScore(aTitleLowerCase, inputLowerCase);
      const scoreB = computeMatchScore(bTitleLowerCase, inputLowerCase);

      return scoreB - scoreA; // Sort in descending order (higher score first)
    });
};

export default filterAndSortBooks;

export const deduplicateBooks = (books: Book[]): Book[] => {
  const seenIds = new Set<string>();
  return books.filter((book) => {
    if (seenIds.has(book.id)) {
      return false;
    } else {
      seenIds.add(book.id);
      return true;
    }
  });
};
