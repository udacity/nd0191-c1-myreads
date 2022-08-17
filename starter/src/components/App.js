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

  const addBookToLibrary = (book, shelf) => {
    if (!currentBooks.map((currBook) => currBook.id).includes(book.id)) {
      console.log("book not in lib");
      book.shelf = shelf;
      BooksAPI.update(book, shelf);
      setCurrentBooks([...currentBooks, book]);
    }
  };

  const changeBookShelf = (book, shelf) => {
    const updatedBookList = currentBooks.map((currBook) => {
      if (currBook.id === book.id) {
        currBook.shelf = shelf;
        console.log("current books - updated: ", currentBooks);
      }
      return currBook;
    });

    setCurrentBooks(updatedBookList);
    BooksAPI.update(book, shelf);
  };
  console.log("current books: ", currentBooks);

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
        <Route
          path="/search"
          element={<SearchBooks addBookToLibrary={addBookToLibrary} />}
        />
      </Routes>
    </div>
  );
}

export default App;
