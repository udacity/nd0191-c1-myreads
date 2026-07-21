import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function SearchPage({ books, onShelfChange }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let cancelled = false;

    if (query.trim()) {
      BooksAPI.search(query.trim(), 20)
        .then((results) => {
          if (cancelled) return;
          if (results && !results.error) {
            const marked = results.map((result) => {
              const existing = books.find((b) => b.id === result.id);
              return existing
                ? { ...result, shelf: existing.shelf }
                : { ...result, shelf: "none" };
            });
            setSearchResults(marked);
          } else {
            setSearchResults([]);
          }
        })
        .catch(() => {
          if (!cancelled) setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }

    return () => {
      cancelled = true;
    };
  }, [query, books]);

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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfChange={onShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
