import { useLoaderData } from "react-router-dom";
import { Book } from "../definitions";

export const SearchResults = () => {
  const results = useLoaderData() as Book[];
  console.log(results);

  return (
    <div>
      <h2>Search Results</h2>
      {results.map((item: Book) => (
        <div key={item.id}>
          {item.title} - {item.authors}
        </div>
      ))}
    </div>
  );
};
