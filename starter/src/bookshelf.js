import React from "react";
import Book from "./Books";

const Bookshelf = ({ shelf, UpdateBooksListState }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {shelf.length > 0 &&
          shelf.map((book) => (
            <Book
              key={book.id}
              book={book}
              UpdateBooksListState={UpdateBooksListState}
            />
          ))}
      </ol>
    </div>
  );
};

export default Bookshelf;
