import { Book } from "../../../definitions";

interface ShowSearchOptionsProps {
  searchOptions: Book[];
  setSearchedItem: (item: string) => void;
}
export const ShowSearchOptions = ({
  searchOptions,
  setSearchedItem,
}: ShowSearchOptionsProps) => {
  return (
    <section>
      {searchOptions.map((item: Book) => (
        <div
          key={item.id}
          onClick={() => setSearchedItem(item.title)}
          className="m-2 border-2 border-black"
        >
          {item.title} - {item.authors.join(", ")}
        </div>
      ))}
    </section>
  );
};
