import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

export default function BookShelf({ title, booklist, addBook }) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <BookList booklist={booklist} addBook={addBook} />
      </div>
    </div>
  );
}
BookShelf.propTypes = {
  title:PropTypes.string.isRequired,
  booklist :PropTypes.array.isRequired,
  addBook:PropTypes.func.isRequired,
}
