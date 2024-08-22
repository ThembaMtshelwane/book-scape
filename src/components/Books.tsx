import { useEffect, useState } from "react";
import { Book } from "../definitions";
import { Link, useParams } from "react-router-dom";

type BooksProps = {
  maxNumberOfBooks: number;
};

const Books = ({ maxNumberOfBooks }: BooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const startIndex = id ? (Number(id) - 1) * maxNumberOfBooks : 0;

    console.log("startIndex", startIndex);
    const fetchLatestBooks = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=books&orderBy=newest&maxResults=${maxNumberOfBooks}&startIndex=${startIndex}&key=${
            import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
          }`
        );
        const data = await res.json();
        console.log("data", data.items);

        const books: Book[] = data.items
          .map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || [],
            description: item.volumeInfo.description || "",
            imageUrl: item.volumeInfo.imageLinks?.thumbnail || "",
          }))
          .filter(
            (book: Book, index: number, self: Book[]) =>
              index ===
              self.findIndex((b) => b.id === book.id || b.title === book.title)
          );

        setBooks(books);
      } catch (error) {
        console.error("Error fetching latest books:", error);
      }
    };

    fetchLatestBooks();
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
