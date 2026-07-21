import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookList from "./components/BookList";
import SearchPage from "./components/SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((allBooks) => setBooks(allBooks));
  }, []);

  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks((prev) => {
        const exists = prev.find((b) => b.id === book.id);
        if (shelf === "none") {
          return prev.filter((b) => b.id !== book.id);
        } else if (exists) {
          return prev.map((b) =>
            b.id === book.id ? { ...b, shelf } : b
          );
        } else {
          return [...prev, { ...book, shelf }];
        }
      });
    });
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <BookList books={books} onShelfChange={updateShelf} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage books={books} onShelfChange={updateShelf} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
