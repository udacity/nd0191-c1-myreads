import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import * as BooksAPI from "../BooksAPI.js";

import Book from "./Book.js";

const MAX_BOOKS = 30;

const SearchBooks = ({ addBookToLibrary }) => {
  const [searchBooks, setSearchBooks] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("query", e.target.value);
    searchBook(e.target.value, MAX_BOOKS);
  };

  const searchBook = async (query) => {
    const res = await BooksAPI.search(query.trim(), MAX_BOOKS);
    if (res && res.length > 0) {
      setSearchBooks(res);
    }
  };

  let navigate = useNavigate();

  const handleReturnLibrary = () => {
    navigate("/");
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a onClick={() => handleReturnLibrary()} className="close-search">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks &&
            searchBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} bookShelfHandler={addBookToLibrary} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  addBookToLibrary: PropTypes.func.isRequired,
};

export default SearchBooks;
