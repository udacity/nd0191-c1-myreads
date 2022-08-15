import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger.js";

const Book = ({ title, authors, imgSrc }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${imgSrc})`,
          }}
        ></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map((author, idx) => (
          <span key={idx}>{(idx ? ", " : "") + author} </span>
        ))}
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
};

export default Book;
