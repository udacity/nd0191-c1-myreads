import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Books from "./Books";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  const onBookChangeShelf = (id, shelf) => {
    const update = async (id, shelf) => {
        await BooksAPI.update({ id: id }, shelf);
        getBooks();
    };
    update(id, shelf);
  };

  return (
    <div className="app">
        <Routes>
          <Route path="/search" element={ <Search currentBooks={books} onBookChangeShelf={onBookChangeShelf} /> } />
          <Route exact path="/" element={ <Books books={books} onBookChangeShelf={onBookChangeShelf} /> } />
        </Routes>
    </div>
  );
}

export default App;
