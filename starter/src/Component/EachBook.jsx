import React from "react";
import PropTypes from "prop-types";
import * as BookApi from "../BooksAPI";

import DropDown from "./DropDown";

export default function EachBook({ book, bookshelf, addBook }) {
  const [shelf, setShelf] = React.useState(bookshelf);

  const handleSelectChange = (e) => {
    if (shelf) {
      // if the user choose the same bookshelf
      if (shelf === e.target.value) return;

      //get the book current shelf and remove it
      RemoveBookFromSheilf(shelf);
    }

    //////////////After removing the book from other shelf////////
    //adding the book to the new  shelf
    if (e.target.value !== "none") {
      const updatingBookSelf = JSON.parse(localStorage.getItem(e.target.value));

      //adding the book to the array
      updatingBookSelf.push(book);
      BookApi.update(book, e.target.value);
      localStorage.setItem(e.target.value, JSON.stringify(updatingBookSelf));

      //To setSate in HomeScreen
      addBook && addBook(e.target.value, updatingBookSelf);

      setShelf(e.target.value);
    }
  };

  const RemoveBookFromSheilf = (categoryOfBook) => {
    let Bookarray = JSON.parse(localStorage.getItem(categoryOfBook));
    let switchedIndex = Bookarray.findIndex((e) => e.id === book.id);
    if (switchedIndex > -1) {
      Bookarray.splice(switchedIndex, 1);
      localStorage.setItem(categoryOfBook, JSON.stringify(Bookarray));
      addBook && addBook(categoryOfBook, Bookarray);
    }
  };

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.imageLinks && `url(${book.imageLinks.thumbnail})`,
            }}></div>
          <DropDown value={shelf} handleSelectChange={handleSelectChange} />
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors &&
          book.authors.map((val, i) => {
            return (
              <div key={i} className='book-authors'>
                {val}
              </div>
            );
          })}
      </div>
    </li>
  );
}
EachBook.propTypes = {
  book: PropTypes.object.isRequired,
  addBook: PropTypes.func,
  bookshelf: PropTypes.string,
};
