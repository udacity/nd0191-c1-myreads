import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger.js";

const Book = ({ book, bookShelfHandler }) => {
  const [imgDims, setImgSize] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getImgSize = (url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        if (mounted) {
          setImgSize([img.width, img.height]);
        }
      };
    };
    if (imgSrc && mounted) {
      getImgSize(book.imageLinks.thumbnail);
    }

    return () => {
      mounted = false;
    };
  }, []);

  const imgSrc =
    book.imageLinks && book.imageLinks.thumbnail
      ? `url(${book.imageLinks.thumbnail})`
      : null;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: imgDims[0],
            height: imgDims[1],
            backgroundImage: imgSrc,
          }}
        />
        <BookShelfChanger book={book} bookShelfHandler={bookShelfHandler} />
      </div>
      <div className="book-title">
        {book.title ? book.title : "Title unavailable"}
      </div>
      {book.authors ? (
        <div className="book-authors">
          {book.authors.map((author, idx) => (
            <span key={idx}>{(idx ? ", " : "") + author} </span>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookShelfHandler: PropTypes.func.isRequired,
};

export default Book;
