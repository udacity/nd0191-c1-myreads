import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import SearchInput from "../components/SearchInput";

const BookAdd = () => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={`/`}>
          {" "}
          <a href="!#" className="close-search">
            Close
          </a>
        </Link>
        <SearchInput />
      </div>
      <div className="search-books-results">
        <BookList />
      </div>
    </div>
  );
};

export default BookAdd;
