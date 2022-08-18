import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../css/App.css";
import * as BooksAPI from "../BooksAPI.js";
import BookLibrary from "./BookLibrary.js";
import SearchBooks from "./SearchBooks.js";

function App() {
  const [currentBooks, setCurrentBooks] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getCurrentBooks = async () => {
      const res = await BooksAPI.getAll();
      if (mounted) {
        setCurrentBooks(res);
      }
    };
    getCurrentBooks();
    return () => {
      mounted = false;
    };
  }, []);

  const handleShelfChange = (book, shelf) => {
    if (!currentBooks.map((currBook) => currBook.id).includes(book.id)) {
      addBookToLibrary(book, shelf);
    } else {
      changeBookShelf(book, shelf);
    }
  };

  const addBookToLibrary = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf);
    setCurrentBooks([...currentBooks, book]);
  };

  const changeBookShelf = (book, shelf) => {
    const updatedBookList = currentBooks.map((currBook) => {
      if (currBook.id === book.id) {
        currBook.shelf = shelf;
      }
      return currBook;
    });
    setCurrentBooks(updatedBookList);
    BooksAPI.update(book, shelf);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BookLibrary
              currentBooks={currentBooks}
              handleShelfChange={handleShelfChange}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              currentBooks={currentBooks}
              handleShelfChange={handleShelfChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
