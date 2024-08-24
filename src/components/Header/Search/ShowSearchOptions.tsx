import { Link } from "react-router-dom";
import { Book } from "../../../definitions";

interface ShowSearchOptionsProps {
  searchOptions: Book[];
  setSearchedItem: (item: Book) => void;
}
export const ShowSearchOptions = ({
  searchOptions,
  setSearchedItem,
}: ShowSearchOptionsProps) => {
  return (
    <ul className="border-2 w-full absolute bg-backgroundColour flex flex-col">
      {searchOptions.slice(0, 5).map((item: Book) => (
        <Link
          to={`/books/${item.id}`}
          key={item.id}
          onClick={() => setSearchedItem(item)}
          className="m-2 border-2 border-yellowGreen p-2"
        >
          {item.title} - {item.authors}
        </Link>
      ))}
    </ul>
  );
};
