import { useEffect, useState } from "react";
import { Book, maxNumberOfBooksPerPage } from "../definitions";
import { Link, useParams } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const startIndex = id ? (Number(id) - 1) * maxNumberOfBooksPerPage : 0;
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=e&sort=new&limit=${maxNumberOfBooksPerPage}&offset=${startIndex}&language=eng`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("data", data);

        const bookDetails: Book[] = data.docs.map((book: any) => ({
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
        setBooks(bookDetails);
      } catch (error) {
        console.error("Error fetching latest books:", error);
      }
    };

    fetchBooks();
  }, [id]);

  return (
    <section className="flex gap-4 flex-col items-center justify-center sm:flex-row border-2 border-black w-full flex-wrap max-w-[1350px] mx-auto">
      {books.length !== 0
        ? books.map((book: Book) => <BookCard book={book} key={book.id} />)
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
