import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BookShelves from "./BookShelves";
import SearchPage from "./SearchPage";
import { getAll } from "./BooksAPI";

function App() {

  const [booksOnShelf, setBooksOnShelf] = useState([]);
  const [booksById, setBooksById] = useState([]);
  //const [bookShelfDicts, setBookShelfDicts] = useState({});

  const bookToShelfMapper = (books) => {
    const bookShelf = [];
    const booksByIdDict = [];
    books.map(book => {
      if (!bookShelf[book.shelf])
        bookShelf[book.shelf] = [];
      bookShelf[book.shelf].push(book.id);
      booksByIdDict[book.id] = book;
    });

    setBooksOnShelf(bookShelf);
    setBooksById(booksByIdDict);
  };

  useEffect(() => {
    let mounted = true;
    getAll().then(
      books => {
        mounted
          && bookToShelfMapper(books);
        //console.log(books);
      });
    return () => { mounted = false };
  }, []);

  return (
    //TODO see why adding routing slowed down the page load time so much
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <BookShelves booksOnShelf={booksOnShelf} booksById={booksById} bookToShelfMapper={bookToShelfMapper} />
        } />
        <Route path="/search" element={
          <SearchPage booksById={booksById} bookToShelfMapper={bookToShelfMapper} />
        } />
      </Routes>

    </div>
  );
}

export default App;
