import { Book } from "../../definitions";

import BookCard from "./BookCard";

interface booksPerPage {
  books: Book[];
}
const Books = ({ books }: booksPerPage) => {
  return (
    <>
      {books.length !== 0 ? (
        <section className="grid grid-cols-1111 justify-center items-center gap-10 border-2 border-blue-400  lg:gap-5 ">
          {books.map((book: Book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </section>
      ) : (
        <p className="text-3xl text-center border-2">No data found</p>
      )}
    </>
  );
};

export default Books;
