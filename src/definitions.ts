export type Book = {
  id: string;
  title: string;
  authors: string;
  description: string;
  imageUrl: string;
  publishedDate?: string;
  genres?: string[];
};

export const maxNumberOfBooksPerPage = 8;

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

export const allBooks = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit, ametor sit, ametor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "/login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "2",
    title:
      "Lorem ipsum dolor ssum dolor ssum dolor sit,  dolor sit,  dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "",
    title: "Lorem ipsum dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "",
    title: "Lorem ipsum dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "",
    title: "Lorem ipsum dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "",
    title: "Lorem ipsum dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: "",
    title: "Lorem ipsum dolor sit, amet",
    authors: "Lorem ipsum dolor sit, amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet ut excepturi nulla iure omnis!",
    imageUrl: "login.jpg",
    publishedDate: "",
    genres: ["lorem1", "lorem2", "lorem3"],
  },
];
