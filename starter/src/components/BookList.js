import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookList = ({ Books, setRevaildate }) => {
  return (
    <ol className="books-grid">
      {Books?.length > 0 &&
        Books.map((book, index) => (
          <li key={book}>
            <Book bookId={book} setRevaildate={setRevaildate} />
          </li>
        ))}
    </ol>
  );
};

export default BookList;
BookList.prototype = {
  Books: PropTypes.array.isRequired,
  setRevaildate: PropTypes.func,
};
