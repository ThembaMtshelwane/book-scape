import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PaginationUIProps {
  maxPageCount: number;
  path: string;
}

export const PaginationUI = ({ path, maxPageCount }: PaginationUIProps) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const handleRouting = (index: number) => {
    setCurrentPage(index);
    navigate(`/${path}/${index}`);
  };
  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(maxPageCount, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <ul className="flex flex-wrap justify-center my-2 p-2 space-x-2">
      {currentPage > 3 && (
        <li
          className="border-2 border-yellowGreen py-1 px-3 cursor-pointer hover:bg-yellowGreen hover:text-backgroundColour"
          onClick={() => handleRouting(1)}
        >
          1
        </li>
      )}
      {currentPage > 4 && <li className="py-1 px-3">...</li>}
      {getPageNumbers().map((page) => (
        <li
          key={page}
          className={`border-2 border-yellowGreen py-1 px-3 cursor-pointer hover:bg-yellowGreen hover:text-backgroundColour ${
            page === currentPage ? " text-backgroundColour bg-yellowGreen" : ""
          }`}
          onClick={() => handleRouting(page)}
        >
          {page}
        </li>
      ))}
      {currentPage < maxPageCount - 3 && <li className="py-1 px-3">...</li>}
      {currentPage < maxPageCount - 2 && (
        <li
          className="border-2 border-yellowGreen py-1 px-3 m-1 cursor-pointer hover:bg-yellowGreen hover:text-backgroundColour"
          onClick={() => handleRouting(maxPageCount)}
        >
          {maxPageCount}
        </li>
      )}
    </ul>
  );
};
