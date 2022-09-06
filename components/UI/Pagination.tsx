/* eslint-disable react/no-unknown-property */
import { Dispatch, SetStateAction } from "react";

import { ChevronLeftSvg, ChevronRightSvg } from "components";

interface Props {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  nbPages: number;
  count: number;
}

/**
 * Functional Component to render an UI Custom Pagination.
 */
export const Pagination: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  nbPages,
  count = 10,
}) => {
  const nextPage = () => {
    if (currentPage + 1 === nbPages) return;

    setCurrentPage((currentPage) => currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 0) return;

    setCurrentPage((currentPage) => currentPage - 1);
  };

  const jumpPage = (page: number) => {
    if (page === 0) return;

    setCurrentPage(page - 1);
  };

  return (
    <div className="flex items-center justify-center w-full space-x-3">
      <button onClick={prevPage} className="pagination-button">
        <ChevronLeftSvg className="w-6 h-6" />
      </button>

      <section className="flex space-x-3">
        {Array(count)
          .fill(true)
          .map((_, idx) => (
            <button
              onClick={() => jumpPage(idx + 1)}
              key={idx}
              className={`pagination-button ${
                currentPage === idx ? "active-pagination-button" : ""
              }`}
            >
              {idx + 1}
            </button>
          ))}
      </section>

      <button onClick={nextPage} className="pagination-button">
        <ChevronRightSvg className="w-6 h-6" />
      </button>
    </div>
  );
};
