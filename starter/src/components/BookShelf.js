import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({books, shelf}) => {

  return (
    
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=>(
          <li key={book.id}>
          <Book book={book} shelf={shelf}/>
        </li>
         ))}
        </ol>
      </div>
  );
};
BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
};
export default BookShelf;
