import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

const Search = ({ books, updateBook }) => {
  const [inputValue, setInputValue] = useState("");
  const [resultBooks, setResultBooks] = useState([]);

  const searchInputValue = (value) => {
    const search = async () => {
      if (value === "") {
        setResultBooks([]);

        return;
      }

      const res = await BooksAPI.search(value, 20);

      console.log(res);

      if (res.error === "empty query") {
        setResultBooks([]);

        return;
      }

      const mappedResults = res
        .filter((book) => book.imageLinks !== undefined)
        .map((result) => {
          const book = books.find((book) => book.id === result.id);

          if (book) {
            result.shelf = book.shelf;
          }

          return result;
        });

      setResultBooks(mappedResults);
    };

    setInputValue(value);

    search();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={inputValue}
            onChange={(event) => searchInputValue(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {resultBooks.map((book) => (
            <Book key={book.id} book={book} updateBook={updateBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Search;
