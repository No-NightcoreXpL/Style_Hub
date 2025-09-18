import React from 'react';

function Pagination({ productsPerPage, totalProducts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-2">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentPage === number
                  ? 'bg-stylehub-primary text-white'
                  : 'bg-stylehub-light text-stylehub-dark hover:bg-stylehub-secondary hover:text-white'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;