import { Link } from "react-router-dom";
import { Book } from "../../definitions";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link to={`/books/${book.id}`} key={book.id}>
      <section className="border-2 border-yellowGreen w-[300px] flex flex-col max-w-[400px] h-[500px]  sm:max-w-[320px]">
        <section className=" flex items-center justify-center h-[60%] w-full overflow-hidden">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="object-center object-cover h-full w-full"
          />
        </section>
        <section className=" p-4 h-[40%]  flex flex-col ">
          <h3 className="text-2xl my-2 ">{book.title}</h3>
          <p className="text-sm truncate">{book.description}</p>
        </section>
      </section>
    </Link>
  );
};

export default BookCard;
