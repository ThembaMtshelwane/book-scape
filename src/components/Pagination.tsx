import { useNavigate } from "react-router-dom";

interface PaginationUIProps {
  maxPageCount: number;
}

export const PaginationUI = ({ maxPageCount }: PaginationUIProps) => {
  const navigate = useNavigate();
  const handleRouting = (index: number) => {
    navigate(`/latest-books/${index}`);
  };
  return (
    <ul className="flex border-2 border-black my-2">
      {[...Array(maxPageCount)].map((_, i) => (
        <li
          key={i}
          className="border-2 border-black m-2 py-2 px-4 cursor-pointer"
          onClick={() => handleRouting(i + 1)}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};
