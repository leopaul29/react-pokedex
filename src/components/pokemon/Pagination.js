import React from "react";
import "./Pagination.css";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="pagination">
      {gotoPrevPage && (
        <button className="custom-btn btn-5" onClick={gotoPrevPage}>
          Prev
        </button>
      )}
      {gotoNextPage && (
        <button className="custom-btn btn-5" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
