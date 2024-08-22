import { useEffect, useState } from "react";
import { Book } from "../definitions";
import { Link } from "react-router-dom";

type BooksProp = {
  numberOfItems: number;
};

const Books = ({ numberOfItems }: BooksProp) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=books&orderBy=newest&maxResults=${numberOfItems}&key=${
            import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
          }`
        );
        const data = await res.json();

        const books = data.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          description: item.volumeInfo.description || "",
          imageUrl: item.volumeInfo.imageLinks?.thumbnail || "",
        }));

        setBooks(books);
      } catch (error) {
        console.error("Error fetching latest books:", error);
      }
    };

    fetchLatestBooks();
  }, []);
  return (
    <section className="flex gap-4 flex-col items-center justify-center sm:flex-row border-2 border-black w-full flex-wrap max-w-[1350px] mx-auto">
      {books.map((book: Book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </section>
  );
};

export default Books;

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  let description = book.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

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
