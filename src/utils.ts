//  Uisng for Context for Google API
// const getRecent_8_books = `https://www.googleapis.com/books/v1/volumes?q=books&orderBy=newest&maxResults=8&key=${
//   import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
// }`;

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
