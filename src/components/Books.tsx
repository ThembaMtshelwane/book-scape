import { useEffect, useState } from "react";
import { Book } from "../definitions";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=new&orderBy=newest&key=${
            import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
          }`
        );
        const data = await res.json();

        const books = data.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          description: item.volumeInfo.description || "",
        }));

        setBooks(books);
      } catch (error) {
        console.error("Error fetching latest books:", error);
      }
    };

    fetchLatestBooks();
  }, []);
  return (
    <div>
      {books.map((book: Book) => (
        <div key={book.id}>
          {book.title} - {book.authors.join(", ")}
        </div>
      ))}
    </div>
  );
};

export default Books;
