import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import Library from "./Library";
import SearchBooks from "./SearchBooks";

function App() {
  const [books, setBooks] = useState([]);

  const getBooksList = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    getBooksList();
  }, []);

  const refresh = (shouldRefresh) => {
    console.log(`should refresh: ${shouldRefresh}`);
    getBooksList();
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Library books={books} shouldRefresh = {refresh} />}
      />
      <Route path="/search" element={<SearchBooks shouldRefresh = {refresh}/>} />
    </Routes>
  );
}

export default App;
