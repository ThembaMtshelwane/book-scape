import { useEffect, useState } from "react";
import { Book, maxNumberOfBooksPerPage } from "../../definitions";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

interface booksPerPage {
  books: Book[];
}
const Books = ({ books }: booksPerPage) => {
  const [booksPerPage, setBooksPerPage] = useState<Book[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const startIndex = (Number(id) - 1) * maxNumberOfBooksPerPage;
      const endIndex = startIndex + maxNumberOfBooksPerPage;
      setBooksPerPage(books.slice(startIndex, endIndex));
    } else {
      setBooksPerPage(books.slice(0, maxNumberOfBooksPerPage));
    }
  }, [id, books]);

  return (
    <section className="flex gap-4 flex-col items-center justify-center sm:flex-row border-2 border-black w-full flex-wrap max-w-[1350px] mx-auto">
      {booksPerPage.length !== 0
        ? booksPerPage.map((book: Book) => (
            <BookCard book={book} key={book.id} />
          ))
        : "No data found"}
    </section>
  );
};

export default Books;
