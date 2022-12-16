import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
const BooksSearch = ({ UpdateBooksListState }) => {
  const [bookshelf, Setbookshelf] = useState([]);
  const SetList = (list) => {
    Setbookshelf(list);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <SearchInput SetList={SetList} />
      </div>
      <SearchResults
        List={bookshelf}
        UpdateBooksListState={UpdateBooksListState}
      />
    </div>
  );
};

export default BooksSearch;
