import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import Library from "./Library";
import SearchBooks from "./SearchBooks";

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooksList = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooksList();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Library books = {books}/>} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
