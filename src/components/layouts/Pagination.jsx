import React from "react";

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="text-center m-10">
      <div className="btn-group">
        {pageNumbers.map((number) => (
          <button key={number} className="btn">
            <a onClick={() => paginate(number)}>{number}</a>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
