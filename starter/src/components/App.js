import "../css/App.css";
import React from "react";
import { useState } from "react";
import ListBooks from "./ListBooks";
import Book from "./Book";

import { useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = event.target[0].value;

    const search = async () => {
      try {
        const res = await BooksAPI.search(query);
        setSearchedBooks(res);
      } catch (e) {
        console.error(e);
      }
    };
    search();
  };
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
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    });
    setBooks(newBooks);
  };
  const addBook = (book, shelf) => {
    if (!books.includes(book)) {
      updateBookShelf(book, shelf);
      setBooks(books.concat(book));
    }
  };
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              href="/"
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                />
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchedBooks.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    shelf={
                      books.find((el) => {
                        if (el.id === book.id) return el;
                      })
                        ? books.find((el) => {
                            if (el.id === book.id) return el;
                          }).shelf
                        : ""
                    }
                    onUpdateShelf={addBook}
                    list={[
                      {
                        label: "Add to...",
                        value: "",
                      },
                      {
                        label: "Currently Reading",
                        value: "currentlyReading",
                      },
                      {
                        label: "Want to Read",
                        value: "wantToRead",
                      },
                      {
                        label: "Read",
                        value: "read",
                      },
                    ]}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <>
          <ListBooks books={books} onUpdateShelf={updateBookShelf} />

          <div className="open-search">
            <a
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Add a book
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
