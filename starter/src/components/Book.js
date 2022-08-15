import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger.js";

const Book = ({ title, author, imgSrc }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 200,
            height: 200,
            backgroundImage: { imgSrc },
          }}
        ></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Book;
