import React, { useEffect, useState } from "react";
import { allBooks, Book } from "../definitions";
import SubHeader from "../components/SubHeader";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  //   const [singleBook, setSingleBook] = useState<Book>();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    // const data: Book = allBooks.filter((book) => id === book.id);
    const data: Book = allBooks[0];
    // setSingleBook(data);
  }, []);
  const singleBook: Book = allBooks[0];
  //   setSingleBook(data);

  return (
    <section className="flex flex-col items-center">
      <SubHeader subheading={singleBook.title} />
      <section className="max-h-screen flex flex-col my-5 items-center sm:flex-row sm:items-center">
        <img
          src={singleBook.imageUrl}
          alt=""
          className="h-[450px] object-cover object-center w-full sm:w-[50%] sm:h-full sm:max-h-screen"
        />

        <section className="p-3 w-[90%]  flex flex-col gap-3 sm:ml-4  sm:justify-center sm:w-[50%] sm:h-full md:w-[500px]">
          <h3 className="text-2xl">{singleBook.title}</h3>
          <p>{singleBook.description}</p>
          <p>By: {singleBook.authors}</p>
          <p>Published: {singleBook.publishedDate}</p>
          <section>
            <p>Genres:</p>
            <ul className="flex">
              {singleBook.genres?.map((genre) => {
                return <li key={genre}>{genre}, </li>;
              })}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default SingleBook;
