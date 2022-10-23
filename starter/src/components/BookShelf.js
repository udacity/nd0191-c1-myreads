import React from "react";
import Book from "./Book";

function BookShelf({ books, shelfName, updateShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                shelfName="Currently Reading"
                updateShelf={updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;