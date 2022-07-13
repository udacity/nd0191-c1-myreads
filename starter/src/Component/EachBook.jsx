import React from "react";
import DropDown from "./DropDown";

export default function EachBook({ book, value: bookshelf, addBook }) {
  const handleSelectChange = (e) => {
    if (bookshelf) {
      // if the user choose the same bookshelf
      if (bookshelf == e.target.value) return;

      //get the book current shelf and remove it
      const currentlyBookShelf = JSON.parse(localStorage.getItem(bookshelf));
      RemoveBookFromSheilf(currentlyBookShelf, bookshelf);
    }

    ////////////// after removing the book from other shelf////////
    //adding the book to the new  shelf
    if (e.target.value !== "none") {
      const updatingBookSelf = JSON.parse(localStorage.getItem(e.target.value));

      //adding the book to the array
      updatingBookSelf.push(book);
      localStorage.setItem(e.target.value, JSON.stringify(updatingBookSelf));

      //To setSate in HomeScreen
      addBook && addBook(e.target.value, updatingBookSelf);
    }
  };

  const RemoveBookFromSheilf = (Bookarray, categoryOfBook) => {
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
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}></div>
          <DropDown value={bookshelf} handleSelectChange={handleSelectChange} />
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors.map((val, i) => {
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
