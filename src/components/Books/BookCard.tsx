import { Link } from "react-router-dom";
import { Book } from "../../definitions";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link
      to={`/books/${book.id}`}
      key={book.id}
      className="grid grid-rows-subgrid row-span-3 bg-white  border-2  border-red-400 "
    >
      <img
        src={book.imageUrl ? book.imageUrl : "/default-image.jpg"}
        alt={book.title}
        className="border-2 border-yellowGreen size-full"
      />

      <h3 className="text-2xl my-2 text-center px-2 truncate">{book.title}</h3>
      <p className="text-sm truncate  px-2  py-4">{book.description}</p>
    </Link>
  );
};

export default BookCard;
