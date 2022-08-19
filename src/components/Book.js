import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger.js";
import BookDetail from "./BookDetail.js";

const Book = ({ book, handleShelfChange }) => {
  const [imgDims, setImgSize] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

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
    if (book.imageLinks && book.imageLinks.thumbnail && mounted) {
      getImgSize(book.imageLinks.thumbnail);
    }

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickDetails = () => {
    setDetailModalOpen(true);
  };

  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks && book.imageLinks.thumbnail ? (
          <div
            className="book-cover"
            style={{
              width: imgDims[0],
              height: imgDims[1],
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
        ) : (
          <div className="book-cover-missing">
            <p>Book cover unavailable</p>
          </div>
        )}

        <BookShelfChanger book={book} handleShelfChange={handleShelfChange} />
      </div>
      <div className="book-title">
        {book.title ? book.title : "Title unavailable"}
      </div>
      <div className="book-authors">
        {book.authors ? (
          book.authors.map((author, idx) => (
            <span key={idx}>{(idx ? ", " : "") + author} </span>
          ))
        ) : (
          <p>[Author(s) Unavailable]</p>
        )}
      </div>
      <button className="show-details-button" onClick={onClickDetails}>
        Show Details
      </button>
      {book !== undefined && detailModalOpen ? (
        <BookDetail book={book} setDetailModalOpen={setDetailModalOpen} />
      ) : (
        <></>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default Book;
