import "./App.css";

import BooksSearch from "./Search";
import BooksList from "./BooksList";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [read, setRead] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const BooksListState = {
    currentlyReading: currentlyReading,
    wantToRead: wantToRead,
    read: read,
  };
  useEffect(() => {
    const getALLBooks = async () => {
      let books = [];
      books = await BooksAPI.getAll().catch((err) => {
        console.log(err);
      });
      if (books.length > 0) {
        setCurrentlyReading(
          books.filter((book) => book.shelf === "currentlyReading")
        );
        setRead(books.filter((book) => book.shelf === "read"));
        setWantToRead(books.filter((book) => book.shelf === "wantToRead"));
      }
    };
    getALLBooks();
  }, []);
  const UpdateBooksListState = async () => {
    let books = [];
    books = await BooksAPI.getAll().catch((err) => {
      console.log(err);
    });
    setCurrentlyReading(
      books.filter((book) => book.shelf === "currentlyReading")
    );
    setRead(books.filter((book) => book.shelf === "read"));
    setWantToRead(books.filter((book) => book.shelf === "wantToRead"));
  };
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BooksList
              BooksListState={BooksListState}
              UpdateBooksListState={UpdateBooksListState}
            />
          }
        />
        <Route
          path="/search"
          element={<BooksSearch UpdateBooksListState={UpdateBooksListState} />}
        />
      </Routes>
    </div>
  );
}

export default App;
