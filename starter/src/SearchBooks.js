import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI.js";
import Book from "./Book.js";

const SearchBooks = ({ shouldRefresh }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const onSearchKeywordChange = (e) => {
    const query = e.target.value;
    setSearchKeyword(query);
    searchBooks(query);

    if(query.trim().length === 0){
      setSearchResults([]);
    }
  };

  const searchBooks = async () => {
    const result = await BooksAPI.search(searchKeyword, 100);
    console.log(result);
    setSearchResults(result);
  };

  const onBookShelfChange = (shelfChanged) => {
    console.log(shelfChanged);
    shouldRefresh(shelfChanged);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onSearchKeywordChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults?.map((book) => (
            <Book
              key={book.id}
              bookObject={book}
              onBookShelfChange={onBookShelfChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
