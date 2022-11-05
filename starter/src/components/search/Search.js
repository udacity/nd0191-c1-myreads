import { search } from "../../BooksAPI";
import { useState, useEffect } from "react";
import Book from "../book/Book.js";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchInput) {
      search(searchInput, 20)
        .then((data) => setSearchResults(data))
        .catch((err) => {
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

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
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      {
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.length &&
              searchResults.map((book) => {
                return <Book book={book} key={book.id} />;
              })}
          </ol>
        </div>
      }
    </div>
  );
};

export default Search;
