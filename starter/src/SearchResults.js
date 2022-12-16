import React from "react";
import Bookshelf from "./bookshelf";
const SearchResults = ({ List, UpdateBooksListState }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid"></ol>
      <Bookshelf shelf={List} UpdateBooksListState={UpdateBooksListState} />
    </div>
  );
};

export default SearchResults;
