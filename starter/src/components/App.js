import "../css/App.css";
import React from "react";
import { useState } from "react";
import BookShelf from "./BookShelf";
import { useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    let newBooks = books.map((b) => {
      if (b.id == book.id) {
        b.shelf = shelf;
      }
      return b;
    });
    setBooks(newBooks);
  };
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookShelf
                  books={books.filter((b) => b.shelf === "currentlyReading")}
                  onUpdateShelf={updateBookShelf}
                  shelf={"currentlyReading"}
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to read</h2>
                <BookShelf
                  books={books.filter((b) => b.shelf === "wantToRead")}
                  onUpdateShelf={updateBookShelf}
                  shelf={"wantToRead"}
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookShelf
                  books={books.filter((b) => b.shelf === "read")}
                  onUpdateShelf={updateBookShelf}
                  shelf={"read"}
                />
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
