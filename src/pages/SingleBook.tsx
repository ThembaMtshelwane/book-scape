import React, { useEffect, useState } from "react";
import { Book } from "../definitions";
import SubHeader from "../components/SubHeader";
import { useParams } from "react-router-dom";
import { useBooks } from "../components/context/BooksContext";
import Spinner from "../components/Spinners/Spinner";

const SingleBook = () => {
  const [singleBook, setSingleBook] = useState<Book>();
  const { allBooks } = useBooks();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log("allBooks", allBooks);

  useEffect(() => {
    const fetchSingleBook = async (bookId: string) => {
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${bookId}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const bookData = await response.json();
        const book: Book = {
          id: bookData.key.split("/").pop() || "unknown",
          title: bookData.title,
          imageUrl: bookData.covers
            ? `https://covers.openlibrary.org/b/id/${bookData.covers[0]}-L.jpg`
            : "/default-image.jpg",
          authors: bookData.authors
            ? bookData.authors.map((author: any) => author.name).join(", ")
            : "Unknown",
          description: bookData.description
            ? typeof bookData.description === "string"
              ? bookData.description
              : bookData.description.value
            : "No description available",
          publishedDate: bookData.first_publish_date || "Unknown",
          genres: bookData.subjects || [],
        };
        setSingleBook(book);
        setLoading(false);
      } catch (error) {
        setError("Could not load book details");
        console.log(error);

        setLoading(false);
      }
    };

    const localBook = allBooks.find((book) => id === book.id);
    if (localBook) {
      setSingleBook(localBook);
      setLoading(false);
    } else if (id) {
      fetchSingleBook(id);
    }
  }, [id, allBooks]);

  return (
    <>
      {loading ? (
        <section>
          <p className="text-yellowGreen text-3xl md:text-5xl">
            Loading book details...
          </p>
          <Spinner loading={loading} />
        </section>
      ) : singleBook ? (
        <section className="flex flex-col items-center  h-full">
          <SubHeader subheading={singleBook.title} />

          <section className="flex flex-col my-5 items-center sm:flex-row sm:items-center border-2 border-yellowGreen">
            <img
              src={
                singleBook.imageUrl ? singleBook.imageUrl : "/default-image.jpg"
              }
              alt=""
              className="h-[450px] object-cover object-center w-full sm:w-[50%] sm:h-full sm:max-h-screen"
            />

            <section className="p-3 w-[90%]  flex flex-col gap-3 sm:ml-4  sm:justify-center sm:w-[50%] sm:h-full md:w-[500px]">
              <h3 className="text-2xl">{singleBook.title}</h3>
              <p>{singleBook.description}</p>
              <p>
                <span className="font-bold">By:</span>{" "}
                <span> {singleBook.authors}</span>
              </p>
              <p>
                <span className="font-bold">Published:</span>{" "}
                <span> {singleBook.publishedDate}</span>
              </p>
              <section>
                <p>
                  <span className="font-bold">Genres:</span>
                </p>
                <ul className="flex flex-col">
                  {singleBook.genres?.map((genre) => {
                    return (
                      <li className="text-textColour" key={genre}>
                        {genre},{" "}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </section>
          </section>
        </section>
      ) : (
        <p className="text-yellowGreen text-3xl md:text-5xl">Book not found</p>
      )}
    </>
  );
};

export default SingleBook;
