import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";
import Link from "react"

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

    <Routes>
      <Route
        exact
        path="/"
        element={
          <BookList  books={books} />
        }
      />
 {/*      <Route
        path="/search"
        element={
          <CreateContact
            onCreateContact={(contact) => {
              createContact(contact);
            }}
          />
        }
      /> */}
    </Routes>

  );
}

export default App;

