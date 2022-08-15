import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../css/App.css";
import * as BooksAPI from "../BooksAPI.js";
import BookLibrary from "./BookLibrary.js";
import SearchBooks from "./SearchBooks.js";

function App() {
  const [books, setBooks] = useState([]);

  console.log("app books", books);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<BookLibrary />} />
        <Route path="/search" element={<SearchBooks books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
