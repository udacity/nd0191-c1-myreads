import React from "react";
import Shelf from "./Shelf";

const Main = ({ books }) => {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  console.log(currentlyReading);
  return (
    <div>
      <Shelf name="Currently Reading" books={currentlyReading} />
      <Shelf name="Want To Read" books={wantToRead} />
      <Shelf name="Read" books={read} />
    </div>
  );
};

export default Main;
