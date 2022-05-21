import React from "react";
import Shelf from "./Shelf";

const Main = ({ books, updateBookShelf }) => {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div>
      <Shelf
        name="Currently Reading"
        books={currentlyReading}
        updateBookShelf={updateBookShelf}
      />
      <Shelf
        name="Want To Read"
        books={wantToRead}
        updateBookShelf={updateBookShelf}
      />
      <Shelf name="Read" books={read} updateBookShelf={updateBookShelf} />
    </div>
  );
};

export default Main;
