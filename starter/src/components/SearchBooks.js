import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import * as BooksAPI from "../BooksAPI.js";

import Book from "./Book.js";

const MAX_BOOKS = 30;

const SearchBooks = ({ addBookToLibrary }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchBook();
  };

  const searchBook = async () => {
    if (query.trim()) {
      const res = await BooksAPI.search(query.trim(), MAX_BOOKS);
      if (res) {
        setSearchBooks(res);
      }
    } else {
      setSearchBooks([]);
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
            value={query}
            onChange={handleSearch}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query.length > 0 && searchBooks.length > 0 ? (
            searchBooks.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} bookShelfHandler={addBookToLibrary} />
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  addBookToLibrary: PropTypes.func.isRequired,
};

export default SearchBooks;
