import React from "react";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
const Search = ({ books, updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [debouncedQuery] = useDebounce(query, 500);
  useEffect(() => {
    if (debouncedQuery) {
      BooksAPI.search(debouncedQuery).then((data) => {
        if (data && !data.error) {
          // assign shelf to searched books
          const mergedBooks = data.map((book) => {
            const shelf =
              books.find((bookOnMainPage) => bookOnMainPage.id === book.id)
                ?.shelf ?? "none";
            return { ...book, shelf };
          });
          setSearchedBooks(mergedBooks);
        } else {
          setSearchedBooks([]);
        }
      });
    } else {
      setSearchedBooks([]);
    }
  }, [debouncedQuery]);
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((b) => (
            <li key={b.id}>
              <Book book={b} changeShelf={updateBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Search;
