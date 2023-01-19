import React, { useState } from "react";
import { CardList } from "./CardList";

export const Content = ({ items, allSearchResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems =
    allSearchResults.length === 0
      ? items.slice(startIndex, endIndex)
      : allSearchResults.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (currentPage * itemsPerPage < items.length)
      setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <CardList animes={currentItems} />
      <div className="w-full flex justify-center py-6">
        <div className="btn-group grid grid-cols-2">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevClick}
            className="btn btn-outline"
          >
            Previous page
          </button>
          <button
            disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
            onClick={handleNextClick}
            className="btn btn-outline"
          >
            Next page
          </button>
        </div>
      </div>
    </div>
  );
};
