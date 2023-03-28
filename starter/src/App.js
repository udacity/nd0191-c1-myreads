import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

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
          <Route path="/search" element={ <Search /> } />
          <Route exact path="/" element={ <BookList books={books} /> } />
        </Routes>
    </div>
  );
}

export default App;
