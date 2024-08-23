import { useEffect, useState } from "react";
import { Book, maxNumberOfBooksPerPage } from "../definitions";
import { Link, useParams } from "react-router-dom";

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
      const n = 8;
      setBooksPerPage(books.slice(0, n));
    }
  }, [id]);

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

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const description = book.description.substring(0, 90) + "...";

  return (
    <Link to={`/books/${book.id}`} key={book.id}>
      <section
        key={book.id}
        className="border-2 border-black w-[95%] mx-auto max-w-[400px] h-[480px] flex flex-col items-center sm:max-w-[320px]"
      >
        <section className="border-2 border-black flex justify-center h-[60%] w-full overflow-hidden">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="object-center object-cover h-full w-full"
          />
        </section>
        <section className=" p-4 border-2 border-black h-[40%] flex flex-col justify-center">
          <h3 className="text-2xl my-2">{book.title}</h3>
          <p>{description}</p>
        </section>
      </section>
    </Link>
  );
};
