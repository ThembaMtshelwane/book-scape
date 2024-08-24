import { Book } from "../../definitions";

import BookCard from "./BookCard";

interface booksPerPage {
  books: Book[];
}
const Books = ({ books }: booksPerPage) => {
  return (
    <section className="flex gap-4 flex-col items-center justify-center sm:flex-row w-full flex-wrap max-w-[1350px] mx-auto">
      {books.length !== 0
        ? books.map((book: Book) => <BookCard book={book} key={book.id} />)
        : "No data found"}
    </section>
  );
};

export default Books;
