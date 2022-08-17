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
    console.log("query", e.target.value);
    setQuery(e.target.value);
    if (e.target.value) {
      searchBook();
    }
  };

  const searchBook = async () => {
    const res = await BooksAPI.search(query.trim(), MAX_BOOKS);
    if (res) {
      setSearchBooks(Array.from(res));
    }
  };

  let navigate = useNavigate();

  const handleReturnLibrary = () => {
    navigate("/");
  };

  console.log("query", query);
  console.log("query type", typeof query);
  console.log("search books", searchBooks);

  console.log("search books", typeof searchBooks);
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
          {query ? (
            searchBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} bookShelfHandler={addBookToLibrary} />
              </li>
            ))
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
