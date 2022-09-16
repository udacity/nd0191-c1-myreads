import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

const Search = ({ books, updateBook }) => {
  const [inputValue, setInputValue] = useState("");
  const [resultBooks, setResultBooks] = useState([]);

  const searchInputValue = (e) => {
    const search = async () => {
      const res = await BooksAPI.search(query, 20);

      if (res.error === "empty query") {
        setResultBooks([]);

        return;
      }

      const filteredResults = res.filter(
        (book) => book.imageLinks !== undefined
      );

      const mappedResults = filteredResults.map((result) => {
        const book = books.find((book) => book.id === result.id);

        if (book) {
          result.shelf = book.shelf;
        }

        return result;
      });

      setResultBooks(mappedResults);
    };

    const query = e.target.value;

    setInputValue(query);

    if (query === "") {
      setResultBooks([]);
    } else {
      search();
    }
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
            onChange={searchInputValue}
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
