import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
import { getAll } from "./BooksAPI";
import BookPage from "./components/BookPage";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const booksFromServer = await getAll().then((data) => data);
    setBooks(booksFromServer);
  };

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<MainPage books={books} fetchBooks={getBooks} />}
      />
      <Route
        path="/search"
        element={<SearchPage books={books} fetchBooks={getBooks} />}
      />
      <Route path="/book/:id" element={<BookPage />} />
    </Routes>
  );
}

export default App;
