import { useEffect, useState } from "react";
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

  useEffect(() => {
    const localBook = allBooks.find((book) => id === book.id);
    if (localBook) {
      setSingleBook(localBook);
      setLoading(false);
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
              <p className="w-[90%] text-justify text-wrap truncate">
                {singleBook.description.substring(0, 400)}...
              </p>
              <p>
                <span className="font-bold">By:</span>{" "}
                <span className="w-full"> {singleBook.authors}</span>
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
                  {singleBook.genres?.slice(0, 5).map((genre) => {
                    return (
                      <li className="text-textColour capitalize" key={genre}>
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
