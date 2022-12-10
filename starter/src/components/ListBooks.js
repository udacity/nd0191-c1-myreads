import React from "react";
import Book from "./Book";

const ListBooks = ({ books, onUpdateShelf }) => {
  const optionList = [
    {
      label: "Move to...",
      value: "",
    },
    {
      label: "Currently Reading",
      value: "currentlyReading",
    },
    {
      label: "Want to Read",
      value: "wantToRead",
    },
    {
      label: "Read",
      value: "read",
    },
    {
      label: "None",
      value: "none",
    },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((b) => b.shelf === "currentlyReading")
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        shelf="currentlyReading"
                        onUpdateShelf={onUpdateShelf}
                        list={optionList}
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((b) => b.shelf === "wantToRead")
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        shelf="wantToRead"
                        onUpdateShelf={onUpdateShelf}
                        list={optionList}
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((b) => b.shelf === "read")
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        shelf="read"
                        onUpdateShelf={onUpdateShelf}
                        list={optionList}
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
