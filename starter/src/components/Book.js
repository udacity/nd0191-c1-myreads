import React from "react";
import SelectShelf from "./SelectShelf";

const Book = ({book}) => {

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
          <SelectShelf />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default Book;
