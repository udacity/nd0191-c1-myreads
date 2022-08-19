import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import * as BooksAPI from "../BooksAPI.js";

import Book from "./Book.js";

const MAX_QUERY = 30;

const SearchBooks = ({ currentBooks, handleShelfChange }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchBook();
  };

  const searchBook = async () => {
    if (!query) {
      setSearchBooks([]);
    }

    if (query.trim()) {
      const res = await BooksAPI.search(query.trim(), MAX_QUERY);
      if (res && !res.error) {
        const joinedBooks = res.map((book) => {
          currentBooks.forEach((currBook) => {
            if (book.id === currBook.id) {
              book = currBook;
            }
          });
          return book;
        });
        setSearchBooks(joinedBooks);
      }
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
                  <Book book={book} handleShelfChange={handleShelfChange} />
                </li>
              );
            })
          ) : (
            <p>No books to show - search in the bar above.</p>
          )}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  currentBooks: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default SearchBooks;
