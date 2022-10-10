import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";
import Search from "./Search";

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  }

  const updateBook = async (book, selection) => {
    console.log('update fired')

    books.find(b => b.id === book.id && (b.shelf = selection, true));
    await BooksAPI.update(book, selection);
    await getBooks(books);
    console.log(books);

  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BookList books={books} updateBook={updateBook} />
        }
      />
      <Route
        path="/search"
        element={
          <Search updateBook={updateBook} />
        }
      />
    </Routes>
  );
};

export default App;

