import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";
import Link from "react";
import PropTypes from "prop-types";

const App = () => {
  let navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  }

  const updateBook = (book, selection) => {
console.log('update fired')

    books.find( b => b.id === book.id && ( b.shelf = selection, true ) );
    // BooksAPI.update(book);
    setBooks(books);
    console.log(books);
    navigate('/');
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
};

export default App;

