import React from "react";
import BookList from "../components/BookList";
import SearchInput from "../components/SearchInput";

const SearchBooks = ({ setShowSearchpage }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          href="!#"
          className="close-search"
          onClick={() => setShowSearchpage((prev) => !prev)}
        >
          Close
        </a>
        <SearchInput />
      </div>
      <div className="search-books-results">
        <BookList />
      </div>
    </div>
  );
};

export default SearchBooks;
