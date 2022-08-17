import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../css/App.css";
import * as BooksAPI from "../BooksAPI.js";
import BookLibrary from "./BookLibrary.js";
import SearchBooks from "./SearchBooks.js";

function App() {
  const [currentBooks, setCurrentBooks] = useState([]);

  useEffect(() => {
    const getCurrentBooks = async () => {
      const res = await BooksAPI.getAll();
      setCurrentBooks(res);
    };
    getCurrentBooks();
  }, []);

  const changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const updatedBookList = currentBooks.map((currBook) => {
      if (currBook.id === book.id) {
        currBook.shelf = shelf;
      }
      return currBook;
    });
    setCurrentBooks(updatedBookList);
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
              changeBookShelf={changeBookShelf}
            />
          }
        />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
