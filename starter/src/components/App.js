import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../css/App.css";
import * as BooksAPI from "../BooksAPI.js";
import BookLibrary from "./BookLibrary.js";
import SearchBooks from "./SearchBooks.js";

function App() {
  const [currentBooks, setCurrentBooks] = useState([]);

  console.log("app books", currentBooks);

  useEffect(() => {
    const getCurrentBooks = async () => {
      const res = await BooksAPI.getAll();
      setCurrentBooks(res);
    };
    getCurrentBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<BookLibrary currentBooks={currentBooks} />}
        />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
