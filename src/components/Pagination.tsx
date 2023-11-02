import { useRouter } from 'next/navigation'
import React from 'react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const router = useRouter();
  const handleSetCurrentPage = (page: number) => {
    setCurrentPage(page);
    router.push(`?page=statista&p=${page}`);
  };

  return (
    <div className="flex justify-center mt-4 font-sans">
      <button
        onClick={() => handleSetCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`bg-lightgrey font-sans rounded-full p-2 h-10 w-10 shadow-md mr-2 flex items-center justify-center ${
          currentPage === 1 ? 'text-gray-300' : ''
        }`}
        style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))' }}
        aria-label="Previous Page"
      >
        &lt;
      </button>
      <span
        className="bg-white p-2 mx-1 font-sans"
        aria-label={`Page ${currentPage} of ${totalPages}`}
      >
        {currentPage}/{totalPages}
      </span>
      <button
        onClick={() => handleSetCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`bg-lightgrey rounded-full p-2 h-10 w-10 shadow-md ml-2 flex items-center justify-center ${
          currentPage === totalPages ? 'text-gray-300' : ''
        }`}
        style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))' }}
        aria-label="Next Page"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

