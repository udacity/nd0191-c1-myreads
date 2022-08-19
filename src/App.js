import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./css/App.css";
import * as BooksAPI from "./BooksAPI.js";
import BookLibrary from "./components/BookLibrary.js";
import SearchBooks from "./components/SearchBooks.js";
import BookDetail from "./components/BookDetail.js";

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
    BooksAPI.update(book, shelf);
    setCurrentBooks(updatedBookList);
  };

  return (
    <div className="app">
      {currentBooks.length === 0 ? (
        <p>Loading...</p>
      ) : (
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
            exact
            path="/search"
            element={
              <SearchBooks
                currentBooks={currentBooks}
                handleShelfChange={handleShelfChange}
              />
            }
          />
          <Route path="/book" element={<BookDetail />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
