import React from "react";
import Book from "./Book";

const Bookshelf = ({ books, title, updateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((allBook) => (
              <li key={allBook.id}>
                <Book book={allBook} updateShelf={updateShelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
export default Bookshelf;
