import React from "react";
import * as BooksAPI from "./BooksAPI";

const ShelfChanger = ({ currentBook, UpdateBooksListState }) => {
  const handleChange = (book, shelf) => {
    const updateBooks = async () => {
      await BooksAPI.update(book, shelf).catch((err) => {
        console.log(err);
      });

      UpdateBooksListState();
    };
    updateBooks();
  };
  return (
    <div className="book-shelf-changer">
      <select
        key={currentBook.id}
        onChange={(e) => {
          handleChange(currentBook, e.target.value);
        }}
        value={currentBook}
      >
        <option value="none">Move to... </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
