import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({books}) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=>(
          <li key={book.id}>
          <Book book={book}/>
        </li>
         ))}
        </ol>
      </div>
    </div>
  );
};
BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
};
export default BookShelf;
