import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const SHELVES = [
  { id: "currentlyReading", title: "Currently Reading" },
  { id: "wantToRead", title: "Want to Read" },
  { id: "read", title: "Read" },
];

function BookList({ books, onShelfChange }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {SHELVES.map((shelf) => (
          <Bookshelf
            key={shelf.id}
            title={shelf.title}
            books={books.filter((b) => b.shelf === shelf.id)}
            onShelfChange={onShelfChange}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default BookList;
