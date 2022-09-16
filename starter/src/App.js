import "./App.css";
import Search from "./Components/Search";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./Components/ListBooks";
import { useEffect, useState } from "react";
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

  const updateBook = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);

      book.shelf = shelf;
      setBooks(books.filter((b) => b.id !== book.id).concat(book));
    };

    update();
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ListBooks books={books} updateBook={updateBook} />}
      />
      <Route
        path="/search"
        element={<Search books={books} updateBook={updateBook} />}
      />
    </Routes>
  );
}

export default App;
