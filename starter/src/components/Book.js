import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger.js";

const Book = ({ book, bookShelfHandler }) => {
  const [imgDims, setImgSize] = useState([]);

  useEffect(() => {
    let mounted = true;
    const getImgSize = (url) => {
      if (mounted) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setImgSize([img.width, img.height]);
        };
      }
    };
    getImgSize(book.imageLinks.thumbnail);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: imgDims[0],
            height: imgDims[1],
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <BookShelfChanger book={book} bookShelfHandler={bookShelfHandler} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors &&
          book.authors.map((author, idx) => (
            <span key={idx}>{(idx ? ", " : "") + author} </span>
          ))}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookShelfHandler: PropTypes.func.isRequired,
};

export default Book;
