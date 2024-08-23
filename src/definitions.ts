export type Book = {
  id: string;
  title: string;
  authors: string;
  description: string;
  imageUrl: string;
  publishedDate?: string;
  genres?: string[];
};

export const maxNumberOfBooksPerPage = 12;

export const genres = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Thriller",
  "Biography",
  "History",
  "Children's Books",
  "Young Adult",
  "Adventure",
  "Horror",
  "Self-help",
  "Health",
  "Humor",
  "Poetry",
  "Religion",
  "Science",
  "Travel",
];
