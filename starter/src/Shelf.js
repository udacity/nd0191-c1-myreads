import React from "react";
import Book from "./Book";
const Shelf = ({ books, name }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b) => (
            <li key={b.id}>
              <Book book={b} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
