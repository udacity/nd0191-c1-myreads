import React from "react";
import SelectShelf from "./SelectShelf";

const Book = ({ book, list, shelf, onUpdateShelf }) => {
  console.log(shelf)
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <SelectShelf
            list={list}
            book={book}
            shelf={shelf}
            onUpdateShelf={onUpdateShelf}
          />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default Book;
