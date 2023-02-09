import BookShelfChanger from "./BookShelfChanger";
import {useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI.js";


const Book = ({ bookObject }) => {

  const [book, setBook] = useState(bookObject);

  const updateBookShelfCallBack = (book) => {
      console.log(book.shelf);
  };

  useEffect(() => {
    const updateBookShelf = async (book, newShelf) => {
      const res = await BooksAPI.update(book, newShelf);
      setBook(res)
    };
    //  updateBookShelf(book, book.shelf);
  }, [book]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${bookObject.imageLinks.smallThumbnail}")`,
          }}
        ></div>
        <BookShelfChanger
          book={bookObject}
          updateBookShelfCallBack={updateBookShelfCallBack}
        />
      </div>
      <div className="book-title">{bookObject.title}</div>
      <div className="book-authors">{bookObject.authors}</div>
    </div>
  );
};

export default Book;
