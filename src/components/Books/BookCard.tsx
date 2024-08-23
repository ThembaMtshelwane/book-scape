import { Link } from "react-router-dom";
import { Book } from "../../definitions";

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

export default BookCard;
