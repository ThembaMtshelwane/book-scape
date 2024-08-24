import { Link } from "react-router-dom";
import { Book } from "../../../definitions";

interface ShowSearchOptionsProps {
  searchOptions: Book[];
  setSearchedItem: (item: Book) => void;
  setDropdownVisible: (bool: boolean) => void;
  isDropdownVisible: boolean;
}
export const ShowSearchOptions = ({
  searchOptions,
  setSearchedItem,
  setDropdownVisible,
  isDropdownVisible,
}: ShowSearchOptionsProps) => {
  return (
    <ul
      className={`w-full absolute bg-backgroundColour flex flex-col ${
        isDropdownVisible ? "" : "hidden"
      }`}
    >
      {searchOptions.slice(0, 5).map((item: Book) => (
        <Link
          to={`/books/${item.id}`}
          key={item.id}
          onClick={() => {
            setSearchedItem(item);
            setDropdownVisible(false);
          }}
          className="m-2 border-2 border-yellowGreen p-2"
        >
          {item.title} - {item.authors}
        </Link>
      ))}
    </ul>
  );
};
