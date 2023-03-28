import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {

    getBooks();
  }, []);

  const onBookChange = (id, shelf) => {
    const update = async (id, shelf) => {
        await BooksAPI.update({ id: id }, shelf);
        getBooks();
    };
    update(id, shelf);
};


  return (
    <div className="app">
        <Routes>
          <Route path="/search" element={ <Search books={books} onBookChange={onBookChange} /> } />
          <Route exact path="/" element={ <BookList books={books} onBookChange={onBookChange} /> } />
        </Routes>
    </div>
  );
}

export default App;
