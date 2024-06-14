interface Props {
  currentPage: number;
  maxPage: number;
  changePage: (page: number) => void;
}

export default function Pagination({ currentPage, maxPage, changePage }: Props) {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(maxPage, currentPage + 2);

  if (maxPage <= 1) return null;

  return (
    <nav
      className="flex w-full items-center justify-center py-10"
      aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => currentPage > 1 && changePage(currentPage - 1)}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
          <li key={index}>
            <button
              onClick={() => changePage(index + startPage)}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === index + startPage ? "bg-blue-50 text-blue-600 border-blue-300" : ""
              }`}>
              {index + startPage}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => currentPage < maxPage && changePage(currentPage + 1)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
